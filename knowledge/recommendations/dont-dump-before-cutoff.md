# Decision Card: Don't Dump Before Cutoff（团块没 pickup ≠ 已卖需求；cutoff 前不 dump BAR 填洞；不按合同块 OCC 涨）

> 资产：Advisor Decision Card（P52）  
> 路径：`recommendations/dont-dump-before-cutoff.md`  
> 对应：问题树 §58；用户原话「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」「PMS 看起来 90% 全是团占的，要不要涨」「cutoff 过了放出 20 间，砸不砸」「销售说团肯定会来齐，先关散客」  
> 剧本：`advisor-playbooks/group-cutoff-wash.md`  
> 配套：`metrics/group-pickup-cutoff.md` · P10 · P50 · P51 · P14 · P31 · P30 · P05 leftover · P01/P03  
> 状态：active · 2026-08-25 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A Vendor PMS（OPERA Pickup / Available=Current−Picked up；须 Allotment Cutoff night audit 才真释放）；A（HSMAI Wash / Attrition / Slippage 词条，不是 %；Pace report ≠ 团块 pickup）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-group-wash-sat.md`  
> 禁止：cutoff 前 dump BAR 填未 pickup；按合同块 OCC Increase BAR；一夜 −15%；BAR→399 填未 pickup；编 wash% / 10–25% / 罚金表 / 华住 cutoff SOP；把 399 当推荐 BAR；操作 PMS。

```yaml
decision: Do not dump public BAR to fill unpicked group rooms before cutoff; do not Increase BAR off blocked OCC; wait until unpicked rooms actually return to house via cutoff + night audit, then re-score remaining + Pace
scenario: Group already on the books; pickup lagging vs block; cutoff approaching; sales wants to dump BAR to fill the hole, or GM wants to raise BAR off blocked OCC; or cutoff date passed but rooms still locked
required_inputs:
  - Stay_Date
  - Physical_rooms
  - group_already_on_books（还没接则离开到 P10）
  - block_current_vs_picked_up（缺则问，不编 50/28）
  - cutoff_date_or_days（缺则问，不编华住天数）
  - night_audit_actually_releases（OPERA：须 Allotment Cutoff night audit）
  - paid_remaining_after_pickup_and_pace
  - public_BAR
signals_for:
  - unpicked_rooms_sales_wants_bar_dump
  - blocked_occ_gm_wants_bar_up
  - cutoff_passed_leftover_dump
  - sales_wants_close_transient_waiting_for_group
signals_against:
  - group_not_yet_accepted (then P10)
  - meeting_with_rooms_win_the_meeting (then P50)
  - catering_only_no_rooms (then P51)
  - airline_crew_allotment (then P31)
  - transient_high_cancel_soft_otb (then P14)
  - wedding_block (then P30)
  - true_release_landed_and_remaining_thick_and_pace_behind (then P05 fences; BAR ≠ 399)
  - paid_remaining_after_pickup_tight_and_pace_ahead (then P01/P03; reason is paid remaining, not blocked OCC)
recommended_action: 团块没 pickup 的房不是已经卖掉的需求。Cutoff 前不要把公开 BAR dump 去填那个洞；先问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。先算已 pickup 后的付费剩余。Cutoff 当晚未 pickup 回 house 之后，再按真 remaining + Pace 走 P01 或 P05。在释放落地前 Hold 779–799 首选 799。本店 wash% / 罚金 NV，不编。禁止一夜 −15%。50/28/22/499/399/799 只 Simulation。399 是被拒绝的 dump，不是推荐 BAR。
risk: cutoff 前 dump 把将回 house 的房贱卖；按假高峰涨赶走散客；没真释放就砸；把 BAR 写成团价；关散客等团来齐
follow_up: cutoff 日；已 pickup 间数；night audit 是否真释放；释放后 24h 散客 Pickup；合同 attrition 条款（金额 NV）
confidence: 有日期+块 vs pickup+BAR+付费剩余则方向 Medium；缺 cutoff/pickup 只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」「PMS 看起来 90% 全是团占的，要不要涨」「cutoff 过了放出 20 间，砸不砸」「销售说团肯定会来齐，先关散客」。

主动词：**cutoff 前不 dump / 不按合同块 OCC 涨 / 没真释放不当 leftover。**

不要用：还没接团 → P10。会带房赢会 → P50。只要厅 → P51。机组 → P31。散客高取消 → P14。婚宴 → P30。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用未 pickup 合同块改公开 BAR。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用未 pickup 洞或团 OCC 去改 BAR：

1. **Cutoff 前，有人要 dump BAR 填未 pickup。** **禁止。** 房会在 cutoff 回 house。  
2. **PMS OCC 被合同块打到 90%，有人要 Increase BAR。** **不按那张 OCC 涨。** 先算已 pickup 后的付费剩余 + Pace。  
3. **Cutoff 日过了但 night audit 没跑，Available 仍锁。** **不要当 leftover。** 问是否真释放。  
4. **销售说团肯定会来齐，先关散客。** **拒绝。** 未 pickup 不是已卖需求。  
5. **销售说放出会罚。** 问合同条款；金额 NV 不编；仍不要把 BAR 写成团价去填洞。  
6. **其实还没接团 → P10。** 会带房 → P50。只要厅 → P51。机组 → P31。散客取消 → P14。婚宴 → P30。

为冲 OCC 或为「还差 22 间」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「按团块定价」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 团 OCC 高 + 付费剩余不紧或 Pace 非 Ahead | **不涨 BAR**；不是 High Demand。Hold 779–799 首选 799 |
| 已 pickup 后付费剩余真紧 + Pace Ahead | **P01/P03**。理由是付费剩余，不是团 OCC |
| cutoff 前要 dump 填洞 | **拒绝。** Hold 779–799 首选 799 |
| cutoff + night audit 落地 + remaining 厚 + Pace Behind | **P05** 围栏；对象是付费空房；禁止 BAR→399 |
| cutoff + night audit 落地 + Pace Ahead | **Hold**；可评 P01，不是自动 dump |
| cutoff 日过了但没真释放 | **不要当 leftover。** 问 night audit |
| 还没接团 / 会带房 / 只要厅 / 机组 / 散客取消 / 婚宴 | 移交 P10 / P50 / P51 / P31 / P14 / P30 |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因团 OCC 去 +100，也不要把 BAR 改成 399。50 / 28 / 22 / 499 / 399 / 799 **只贴标签**，不是市场 Fact。399 是被拒绝的 dump，不是推荐 BAR。

---

## 4. 缺 cutoff / pickup / wash% 时怎么说（不编）

```
IF 用户没给 cutoff 日或已 pickup 间数
THEN 问：cutoff 哪天 / 已 pickup 几间 / night audit 会不会把未 pickup 放回大房
     在齐数之前：
       - 禁止「没 pickup 所以 BAR→399」
       - 禁止「90% 全是团所以涨」
       - 禁止「团会来齐所以关散客」
       - 可以：条件化
           若 cutoff 未到 → 不 dump、不按团 OCC 涨；Hold BAR
           若 cutoff 过了但不确定是否释放 → 问 night audit；不要当 leftover
IF 用户没给本店 wash% / 罚金
THEN 不发明这些数。词条不是常模。仿真数字只在案例文件。
```

用户给了「50 订了、pickup 28」→ 用**用户的数**算，仍不升为行业常模或华住 SOP。

---

## 5. 动作表

```text
Stay Date:
Physical / 已 pickup 后付费剩余 / Pace:
合同块 / Picked up / Available_in_block:
Cutoff / night audit 是否真释放:
公开 BAR:
Decision: Hold BAR / 拒绝按团 OCC 涨 / 拒绝 cutoff 前 dump / 问是否真释放 / 移交 P10 / P50 / P51 / P31 / P14 / P30 / 移交 P03 / 移交 P05（仅释放落地后的付费空房）
Do-not-do:
  - cutoff 前 dump BAR 填未 pickup
  - 按合同块 OCC Increase BAR
  - BAR → 399 / 团价 / 华住 SOP
  - 一夜 −15% 当新 BAR
  - 关散客等团来齐
  - 发明 wash% / 罚金表
  - 操作 PMS
Trigger: cutoff + night audit 落地 → 重算 remaining + Pace；Ahead 仍 Hold；Behind 且厚才评 P05
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 销售仍要 399 填 22 间洞 | 当场打断：未 pickup ≠ leftover |
| GM 仍按 90% 涨 | 团 OCC vs 已 pickup 后付费剩余 |
| cutoff 日过了没释放就砸 | Available_in_block 是否变 0 |
| 关散客等团 | 散客净 Pickup 是否被关停 |

---

## 7. 兼容

- P10 = 接团。本卡 = 已在书上的 cutoff 过程。  
- P50 = 会带房赢会。  
- P51 = 只要厅。  
- P14 = 散客高取消 Soft OTB。  
- P31 = 机组 allotment。  
- P30 = 婚宴。  
- P05 leftover 只在真释放落地后，也不是 BAR→399。  
- P01/P03 看已 pickup 后付费剩余，不是团 OCC。  
- T20：不发明 399。  
- **禁止一夜 −15%。**  
- HSMAI Pace report ≠ 团块 pickup。  
- 本店 wash% **NV**。

顾问三句（与剧本同一套）：

```
1. 团块没 pickup 的房不是已经卖掉的需求。Cutoff 前不要把公开 BAR dump 去填那个洞；先问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。
2. 合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。先算 **已 pickup 后的付费剩余**，并记住未 pickup 将在 cutoff 回 house（OPERA：须 Allotment Cutoff night audit 才真释放）。
3. Cutoff 当晚未 pickup 回 house 之后，再按真 remaining + Pace 走 P01 或 P05。在释放落地前 Hold 779–799 首选 799（Hypothesis / Simulation）。本店 wash% / 罚金 **NV，不编**。
```

Advisor-First：建议拆 pickup vs 块 vs 是否真释放、Hold 779–799 首选 799（Hypothesis）。不跑 night audit、不关散客、不执行 Wash。

仿真见 `cases/sim-2026-group-wash-sat.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 18:17 CST | 首版。cutoff 前不 dump；不按团 OCC 涨；没真释放不当 leftover。不编 wash% / 罚金 / 华住 cutoff SOP。399 = 被拒绝的 dump，不是推荐 BAR。 |
