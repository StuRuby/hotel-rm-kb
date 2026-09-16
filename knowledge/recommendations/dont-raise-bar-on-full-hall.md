# Decision Card: Don't Raise BAR on Full Hall（厅满 ≠ 客房紧；只要厅不要房不改公开 BAR）

> 资产：Advisor Decision Card（P51）  
> 路径：`recommendations/dont-raise-bar-on-full-hall.md`  
> 对应：问题树 §57；用户原话「只要会议室不要客房」「厅包了散客随便卖」「厅满了 OCC 才 40% 要不要涨 BAR」「本地公司包半天厅，周末挤婚宴怎么办」  
> 剧本：`advisor-playbooks/catering-only.md`  
> 配套：`metrics/catering-only.md` · P50 · P10 · P30 · T18 `accept-low-room-for-fnb.md` · P22 · P44 · P05 leftover  
> 状态：active · 2026-08-25 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 厅租/AV = Other F&B）；A（HSMAI Local Catering / Displacement 词条；RevPAS 词条，**不是 BAR**）；A Vendor PMS（OPERA Catering Only）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-catering-only-sat.md`  
> 禁止：按「厅满了」Increase BAR；无厅+餐贡献就 Accept 低价占高峰厅；因为厅满 dump leftover；把 BAR dump 到 399「反正没带房」；编华住 SOP / 餐毛利 / 厅租行情 / 399 行情 Fact；把 RevPAS / ConPAST 当 BAR；把只要厅当成 P50；操作 PMS。

```yaml
decision: Do not Increase BAR because the function space is full; do not Accept a cheap peak-hall catering-only booking without user-supplied space+F&B contribution; do not dump leftover rooms because the hall is busy
scenario: Sales books hall-only (no rooms); GM sees hall diary full and wants to raise BAR; or leftover rooms are to be dumped because "hall is packed so rooms are leftover"
required_inputs:
  - Stay_Date
  - Physical_rooms
  - hall_only_no_rooms（要房则离开到 P50）
  - which_function_space_slot（缺则问）
  - space_plus_fnb_contribution_FROM_THE_USER（缺则不 Accept 高峰厅）
  - paid_transient_remaining_and_pace
  - public_BAR
signals_for:
  - hall_full_gm_wants_bar_up
  - saturday_cheap_half_day_hall_vs_wedding_or_meeting_with_rooms
  - dump_leftover_because_hall_busy
  - weekday_empty_hall_thick_leftover
signals_against:
  - has_room_block (then P50)
  - rooms_only_group (then P10)
  - social_banquet_or_wedding (then P30)
  - citywide_exhibition_shoulder_not_this_inquiry (then P22)
  - day_use_hourly_rooms (then P44)
  - transient_remaining_tight_and_pace_ahead_after_recompute (then P01/P03; reason is rooms remaining, not hall-full)
  - true_paid_leftover_weak_and_market_weak (then P05 fences on empty paid rooms only; not because hall is full; BAR ≠ 399)
recommended_action: 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。工作日空厅可接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799。周末/黄金厅段默认 Counter 或拒厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。禁止一夜 −15%。80/14/799 只 Simulation。
risk: 按厅满涨奖励假高峰；便宜厅挤掉婚宴/会带房；因厅忙 dump 公开 BAR；把只要厅当成 P50 去 399
follow_up: 用户是否给出厅+餐贡献；同段是否有带房会/婚宴；冲突日散客 Pickup
confidence: 有日期+房量+BAR+剩余+只要厅声明则方向 Medium；缺贡献只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「只要会议室不要客房」「厅包了散客随便卖」「厅满了 OCC 才 40% 要不要涨 BAR」「本地公司包半天厅，周末挤婚宴怎么办」。

主动词：**不按厅满涨 BAR / 无贡献不接高峰厅 / 不因厅忙 dump leftover。**

不要用：有客房块 → P50。客房-only → P10。婚宴 → P30。政务块 → P48。会展肩日市场形状 → P22。钟点客房 → P44。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用厅满改公开 BAR；只要厅不是会带房。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用厅日记或「没带房」去改 BAR：

1. **厅满了，有人要 Increase BAR。** **不按那张厅日记涨。** 看 transient remaining + Pace。  
2. **周末/黄金厅段、低贡献只要厅。** 默认 **Counter 或拒厅**，留给带房会议/婚宴。没用户给的厅+餐贡献，不接低价占高峰厅。  
3. **要把 leftover dump「因为厅满了 / 反正没带房」。** **拒绝。** P05 只砸付费空房，与厅独立。禁止 BAR→399。  
4. **要把只要厅当成 P50 会带房，准备 dump BAR 赢会。** **拒绝。** 本剧零客房。  
5. **用户没给厅+餐贡献。** **问，不编厅租行情 / 餐毛利 / 80。** 高峰不翻 Accept。  
6. **其实有房块 → P50。** 只要房 → P10。婚宴 → P30。钟点 → P44。

为冲 OCC 或为「厅看起来忙」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「按厅满定价」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 厅满 + remaining 不紧或 Pace 非 Ahead | **不涨 BAR**；不是 High Demand。Hold 779–799 首选 799 |
| 客房 remaining 真紧 + Pace Ahead | **P01/P03**。理由是散客剩余，不是厅满 |
| 周末黄金厅段低贡献只要厅 | **Counter 或拒厅**；Hold BAR |
| 工作日空厅 + 用户给出贡献 | **Accept 厅**。公开 BAR 不动、不涨 |
| 工作日空厅 + 无贡献 | 厅可条件化接；仍问贡献；BAR 不改 |
| 有人因厅忙要 dump leftover | **拒绝。** 客房真弱才评 P05，不是因为厅满 |
| 有客房块 | **P50** |
| 客房-only | **P10** |
| 社交宴会 | **P30** |
| 钟点客房 | **P44** |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因厅满去 +100，也不要把 BAR 改成 399。80 / 14 / 799 **只贴标签**，不是市场 Fact。799 不是行情 Fact。

---

## 4. 缺贡献时怎么说（不编）

```
IF 用户没给厅+餐贡献
THEN 高峰不 Accept 低价占厅
     问：占哪段厅 / 贡献额（用户认领）/ 要不要房 / transient remaining / 同段有没有带房会或婚宴
     在齐数之前：
       - 禁止「厅满了所以涨」
       - 禁止「没带房所以 BAR→399」
       - 禁止「当成会带房 dump BAR 赢会」
       - 可以：条件化两支
           若工作日厅空 → 会议可以接；BAR Hold
           若周末黄金厅段 → Counter/拒厅；Hold BAR
IF 用户没给 80 / 厅租点
THEN 不发明这些数。仿真数字只在案例文件。
```

用户给了「80 人只要厅、不要房」→ 用**用户的数**算，仍不升为行业常模或华住 SOP。

---

## 5. 动作表

```text
Stay Date:
Physical / remaining / Pace:
只要厅 / 占哪段厅 / 厅+餐贡献（用户）:
公开 BAR:
Decision: 留厅 / Counter 厅 / 拒厅 / Hold BAR / 拒绝按厅满涨 / 拒绝因厅忙 dump / 移交 P50 / P10 / P30 / P22 / P44
Do-not-do:
  - 按厅满 Increase BAR
  - 无贡献 Accept 高峰厅
  - BAR → 399「反正没带房」/ 华住 SOP
  - 一夜 −15% 当新 BAR
  - 把只要厅当成 P50
  - 厅租双计
  - 把 RevPAS / ConPAST 写成 BAR
  - 操作 PMS
Trigger: 用户补贡献或改期；高峰出现带房会/婚宴 → 维持拒厅；客房 remaining 变紧才评 P03
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| GM 仍按厅满涨 | 厅日记 vs transient remaining |
| 销售继续接周六低贡献半天厅 | 新只要厅 Pickup；同段婚宴/会带房询价 |
| 把 leftover dump 成 399 | 当场打断：厅满 ≠ P05 |
| 厅租加两遍 | STR Other F&B；套餐含厅只计一次 |

---

## 7. 兼容

- P50 = 会带房（厅+房）。本卡 = 零客房只要厅。catering-only ≠ meeting-with-rooms。  
- P10 = 客房-only。  
- P30 = 婚宴。黄金厅段默认留给婚宴/带房会。  
- T18 = 无贡献不翻盘（客房存在）。本卡把闸用到厅。  
- P22 = 会展肩日。  
- P44 = 钟点客房。  
- P05 leftover 不是因为厅满，也不是 BAR→399。  
- P01/P03 看客房 remaining，不是厅日记。  
- T20：不发明 399。  
- **禁止一夜 −15%。**

顾问三句（与剧本同一套）：

```
1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。
```

Advisor-First：建议拆厅轴 vs 客房轴、Hold 779–799 首选 799（Hypothesis）。不改宴会日记、不关散客、不代报 STR。

仿真见 `cases/sim-2026-catering-only-sat.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 14:17 CST | 首版。不按厅满涨 BAR；周末低贡献拒厅；不因厅忙 dump leftover。不编华住厅租 / 餐毛利。RevPAS / ConPAST 不是 BAR。 |
