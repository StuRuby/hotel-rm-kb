# Decision Card: Don't Raise on Tentative OCC（暂定占房 ≠ 散客紧；不扣库存不涨 BAR、不关给 Hold；禁 dump 399）

> 资产：Advisor Decision Card（P53）  
> 路径：`recommendations/dont-raise-on-tentative-occ.md`  
> 对应：问题树 §59；用户原话「暂定团占了 40 间，OCC 看起来很满要不要涨」「Tentative 没转 Definite，散客卖不动」「销售说先把暂定锁上别卖散客」「弱暂定也要关散客」  
> 剧本：`advisor-playbooks/definite-vs-tentative.md`  
> 配套：`metrics/group-status-inventory.md` · P10 · P52 · P50 · P51 · P14 · P31 · P05 leftover · P01/P03  
> 状态：active · 2026-08-25 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A Vendor RMS inbound（IDeaS：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣 — §28 指针，不是中国 SOP）；A Vendor PMS（OPERA Cloud DED INV 扣 / NON DED INV 不扣；OPERA 5.6 例 Definite 扣、Tentative 不扣 — 店配，不是华住字段表）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-tentative-sat.md`  
> 禁止：按暂定 OCC Increase BAR；关公开 BAR 给不扣库存的 Hold；一夜 −15%；BAR→399「反正是暂定」；编华住 暂定/确认 字段表 / wash% / 10–25%；把 IDeaS Strong Tentative 当弱暂定；把 399 当推荐 BAR；操作 PMS。

```yaml
decision: Do not Increase public BAR off a Tentative/Hold OCC screen; do not close public BAR for a non-deducting Hold; ask whether the block deducts inventory; Strong Tentative that deducts goes to P52 not dump
scenario: Block already hanging as Tentative/Hold/Definite; PMS looks tight because tentative rooms fill the screen; sales wants +100 or to lock transient; or dump BAR to 399 "anyway tentative"; or treat Strong Tentative as weak
required_inputs:
  - Stay_Date
  - Physical_rooms
  - block_already_hanging（还没接则离开到 P10）
  - user_status_definite_or_tentative（缺则问，不编华住字段）
  - deducts_inventory（缺则问；IDeaS/OPERA 只 Vendor 对照）
  - true_remaining_and_pace
  - public_BAR
signals_for:
  - tentative_occ_gm_wants_bar_up
  - sales_wants_lock_transient_for_hold
  - dump_bar_because_anyway_tentative
  - weak_tentative_also_close_transient
signals_against:
  - group_not_yet_accepted (then P10)
  - already_definite_pickup_vs_cutoff (then P52)
  - strong_tentative_does_deduct (then P52, not dump)
  - meeting_with_rooms_win_the_meeting (then P50)
  - catering_only_no_rooms (then P51)
  - airline_crew_allotment (then P31)
  - transient_high_cancel_soft_otb (then P14)
  - true_remaining_thick_and_pace_behind (then P05 fences; BAR ≠ 399; not because "anyway tentative")
  - deducted_remaining_tight_and_pace_ahead (then P01/P03; reason is true remaining, not tentative screen OCC)
recommended_action: 先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 NV，不把 OPERA 字段名外推成华住 SOP。销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799。已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。禁止一夜 −15%。40/50/399/799 只 Simulation。399 是被拒绝的 dump，不是推荐 BAR。
risk: 按假高峰涨赶走散客；关 BAR 给 Hold 挡高峰需求；dump 399 改写公开底；把 Strong Tentative 当弱暂定继续卖
follow_up: 会不会从可售扣掉；是否转 Definite；24h 散客 Pickup；真 remaining（不是画面 OCC）
confidence: 有日期+扣不扣+BAR+真 remaining 则方向 Medium；缺状态只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「暂定团占了 40 间，OCC 看起来很满要不要涨」「Tentative 没转 Definite，散客卖不动」「销售说先把暂定锁上别卖散客」「弱暂定也要关散客」。

主动词：**不按暂定 OCC 涨 / 不关公开 BAR 给 Hold / 不问状态不要 dump 399。**

不要用：还没接团 → P10。已确认+pickup vs cutoff → P52。会带房赢会 → P50。只要厅 → P51。机组 → P31。散客高取消 → P14。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用未扣库存的暂定画面改公开 BAR。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用暂定画面去改 BAR：

1. **PMS OCC 被暂定块打满，有人要 Increase BAR。** **不按那张 OCC 涨。** 先问会不会扣库存，再算真 remaining + Pace。  
2. **销售要先锁暂定、关公开 BAR 别卖散客。** **拒绝。** 未转 Definite、不扣库存 ≠ 已卖需求。高峰不要把公开 BAR 关给一张暂定单。  
3. **有人要把 BAR dump 到 399「反正是暂定 / 反正会 wash」。** **禁止。** 未扣库存的房本来就可卖 BAR。先问状态。  
4. **把 IDeaS Strong Tentative（扣库存）当弱暂定继续卖或 dump。** **拒绝。** 当 Definite 侧，走 P52。  
5. **本店状态名未知。** 问会不会从可售里扣掉。不编华住 暂定/确认 字段表。  
6. **其实还没接团 → P10。** 已确认 cutoff → P52。会带房 → P50。只要厅 → P51。机组 → P31。散客取消 → P14。

为冲 OCC 或为「暂定占了 40 间」而动公开 BAR **不是** 开门条件。Hold 779–799 首选 799。Never −15%。Never BAR→399 because tentative.

---

## 3. 何时可以动（仍不是「按暂定画面定价」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 暂定画面高 + 不扣库存或 Pace 非 Ahead | **不涨 BAR**；不是 High Demand。Hold 779–799 首选 799 |
| 已扣库存后付费剩余真紧 + Pace Ahead | **P01/P03**。理由是真 remaining，不是暂定 OCC |
| 销售关 BAR 给 Hold/Tentative | **拒绝。** Hold 779–799 首选 799 |
| dump 399「反正是暂定」 | **拒绝。** 未扣库存本来就可卖 BAR |
| Strong Tentative / 本店确认扣库存 | **P52**。不要 dump |
| 不知扣不扣 | **问。** 齐数前 Hold |
| 还没接团 / 会带房 / 只要厅 / 机组 / 散客取消 | 移交 P10 / P50 / P51 / P31 / P14 |
| 不扣库存、remaining 厚、Pace Behind | **P05** 围栏；对象是付费空房；禁止 BAR→399；禁止「因为暂定」 |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因暂定 OCC 去 +100，也不要把 BAR 改成 399。40 / 50 / 399 / 799 **只贴标签**，不是市场 Fact。399 是被拒绝的 dump，不是推荐 BAR。

---

## 4. 缺状态 / 本店字段名时怎么说（不编）

```
IF 用户没给 Definite vs Tentative 或会不会扣库存
THEN 问：团是 Definite 还是 Tentative？这张块会不会从可售里扣掉？
     在齐数之前：
       - 禁止「暂定占了所以涨」
       - 禁止「先锁散客」
       - 禁止「反正是暂定所以 BAR→399」
       - 可以：条件化
           若不扣库存 → 不按画面 OCC 涨、不关公开 BAR；Hold BAR
           若扣库存（含 Strong Tentative）→ 离开，进 P52
IF 用户没给本店 PMS 状态名 / wash%
THEN 不发明华住字段表，不发明 wash%。IDeaS/OPERA 只 Vendor 对照。仿真数字只在案例文件。
```

用户给了「暂定 40 间」→ 用**用户的数**算，仍不升为行业常模或华住 SOP。

---

## 5. 动作表

```text
Stay Date:
Physical / 真 remaining / Pace:
块状态 / 会不会扣库存:
公开 BAR:
Decision: Hold BAR / 拒绝按暂定 OCC 涨 / 拒绝关 BAR 给 Hold / 问是否扣库存 / 移交 P10 / P52 / P50 / P51 / P31 / P14 / 移交 P03 / 移交 P05（仅付费空房，不是因为暂定）
Do-not-do:
  - 按暂定 OCC Increase BAR
  - 关公开 BAR 给不扣库存的 Hold
  - BAR → 399 / 华住 SOP
  - 一夜 −15% 当新 BAR
  - 把 Strong Tentative 当弱暂定
  - 发明华住 暂定/确认 字段表 / wash%
  - 操作 PMS
Trigger: 确认扣库存 → P52；确认不扣 → 维持 Hold；Ahead 且真 remaining 紧才评 P03
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| GM 仍按暂定画面涨 | 画面 OCC vs 真 remaining |
| 销售仍要关散客给 Hold | 公开渠道是否仍 OPEN |
| 销售仍报 399「反正是暂定」 | 当场打断：未扣库存 ≠ leftover 许可证 |
| Strong Tentative 被当弱暂定 | 用户是否确认扣库存 |

---

## 7. 兼容

- P10 = 接团询价。本卡 = 已挂状态的扣不扣库存。  
- P52 = 已扣库存的 Definite pickup vs cutoff。Strong Tentative 扣了走 P52。  
- P50 = 会带房赢会。  
- P51 = 只要厅。  
- P14 = 散客高取消 Soft OTB。  
- P31 = 机组 allotment。  
- P05 leftover 不是 BAR→399，也不是「因为暂定」。  
- P01/P03 看真 remaining，不是暂定画面 OCC。  
- T20：不发明 399。  
- **禁止一夜 −15%。**  
- IDeaS mapping **标 Vendor RMS inbound**，不是中国 SOP。  
- 本店 PMS 状态名 **NV**。wash% **NV**。

顾问三句（与剧本同一套）：

```
1. 先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。
2. 销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。
```

Advisor-First：建议拆 Definite vs Tentative、会不会扣库存、Hold 779–799 首选 799（Hypothesis）。不改块状态、不关散客、不改 BAR。

仿真见 `cases/sim-2026-tentative-sat.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 22:17 CST | 首版。P53 主卡。Hold 779–799 首选 799。Never −15%。Never BAR→399 because tentative。IDeaS 标 Vendor。华住字段 NV。 |
