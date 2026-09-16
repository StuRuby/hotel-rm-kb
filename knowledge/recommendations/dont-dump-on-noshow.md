# Decision Card: Don't Dump on No-show（散客当天没到 ≠ 需求死了；释放后按 remaining + Pace；不因刚 no-show dump BAR）

> 资产：Advisor Decision Card（P54）  
> 路径：`recommendations/dont-dump-on-noshow.md`  
> 对应：问题树 §60；用户原话「今天 8 间 no-show 了，要不要降价补」「散客总 no-show，跟团 wash 一样，BAR 先砍」「超售就是因为 no-show，今晚空了就该砸」「OTB 看起来满，结果没到」  
> 剧本：`advisor-playbooks/transient-noshow.md`  
> 配套：`metrics/noshow.md` · P14 · P24 · P05 · P52 · P46 · P42 · P53 · P01/P03  
> 状态：active · 2026-08-26 02:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR Historical：No-shows exclude from Rooms Sold，§22）；A Vendor PMS（OPERA No Show Posting Rules，§30；能力≠dump）；B Vendor（Mews §22 指针）  
> Last Verified：2026-08-26  
> 仿真：`cases/sim-2026-noshow-sat.md`  
> 禁止：因刚 no-show dump BAR；一夜 −15%；BAR→399；编 no-show% / 5% / 10% / wash% / Walk $；把 399 当推荐 BAR；操作 PMS；复写 P53。

```yaml
decision: Do not dump public BAR because transient guests no-showed today; after rooms return to sellable, price off remaining + Pace; Hold when still tight or Pace Ahead; evaluate P05 only for true leftover Behind — not because of the no-show event
scenario: Same-day transient no-shows; sales wants BAR→399; or GM wants to raise off pre-arrival OTB OCC; or mix with group wash; or retaliate on overbooking sell limit after one empty night
required_inputs:
  - Stay_Date
  - Physical_rooms
  - noshow_count（缺则问，不编 8 / 不编 %）
  - remaining_after_return_and_pace
  - public_BAR
  - proposed_action（dump / raise off OTB / wash-mix / overbook-retaliate）
signals_for:
  - same_day_transient_noshow_sales_wants_dump
  - prearrival_otb_full_gm_wants_bar_up
  - mix_transient_noshow_with_group_wash_percent
  - tonight_empty_so_cut_or_reduce_overbooking
signals_against:
  - prearrival_high_cancel_soft_otb (then P14)
  - group_allotment_not_picked_up (then P52)
  - early_departure_was_inhouse (then P46)
  - tentative_vs_definite_deduct (then P53)
  - clean_walkin_desk_rate (then P42)
  - ooo_maintenance (then P37)
  - true_release_remaining_thick_and_pace_behind (then P05 fences; reason=leftover not noshow; BAR ≠ 399)
recommended_action: 散客 no-show 是当天没到，不是团块 wash，也不是提前取消。房回到可售之后，按现在的 remaining + Pace 走，不要因为「刚 no-show 了」就 dump BAR。今晚 8 间没到 ≠ 今晚该砍。若当晚仍紧或 Pace Ahead，Hold 779–799 首选 799。真 leftover 且 Behind 才评 P05。STR：no-show 不计 Rooms Sold。超售用历史 no-show 预期（P24），不是拿今晚空房证明该砸价。团未 pickup 走 P52。高取消走 P14。早离走 P46。本店 no-show% NV，不编。禁止一夜 −15%。8/22/40/399/799 只 Simulation。399 是被拒绝的 dump，不是推荐 BAR。
risk: 因 no-show dump 毁 ADR；按含未到 OTB 假高峰涨；把 wash% 混进散客；一夜报复改卖限
follow_up: noshow 件数；释放后 remaining；Pace；24h Pickup；是否其实是团 wash / 提前取消 / 早离
confidence: 有日期+件数+释放后 remaining+BAR 则方向 Medium；缺件数只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-26
```

---

## 1. 何时用

「今天 8 间 no-show 了，要不要降价补」「散客总 no-show，跟团 wash 一样，BAR 先砍」「超售就是因为 no-show，今晚空了就该砸」「OTB 看起来满，结果没到」。

主动词：**不因刚 no-show dump / 不按含未到 OTB 涨 / 释放后按 remaining + Pace。**

不要用：到店前取消 → P14。团 wash → P52。早离 → P46。暂定扣库存 → P53。walk-in → P42。维修 → P37。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用当天 no-show 事件改公开 BAR。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用刚 no-show 去改 BAR：

1. **有人要因为刚 no-show dump BAR 到 399。** **禁止。** 先看释放后 remaining + Pace。  
2. **OTB 含尚未到达，有人要 Increase BAR。** **不按那张 OCC 涨。**  
3. **把散客 no-show 当团 wash% 去砍。** **分开。** 团走 P52。  
4. **今晚空了所以少超售/砸价。** **拒绝一夜报复。** 卖限走 P24 历史。  
5. **其实是取消 → P14。早离 → P46。团 cutoff → P52。暂定 → P53。walk-in → P42。维修 → P37。**

为冲 OCC 或为「刚空了 8 间」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「因为 no-show」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 释放后仍紧或 Pace Ahead | **Hold BAR** 779–799 首选 799 |
| 释放后厚 + Pace Behind | **P05** 围栏；理由是 leftover，不是「因为 no-show」；禁止 BAR→399 |
| OTB 含未到要涨 | **不涨** |
| 跟 wash 混 | **分开**；团 → P52 |
| 一夜空房报复超售 | **拒绝**；卖限 → P24 |
| 取消 / 早离 / 团 / 暂定 / walk-in / 维修 | 移交对应剧本 |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因刚 no-show 去 dump，也不要把 BAR 改成 399。8 / 22 / 40 / 399 / 799 **只贴标签**，不是市场 Fact。399 是被拒绝的 dump，不是推荐 BAR。

---

## 4. 缺件数 / no-show% 时怎么说（不编）

```
IF 用户没给 no-show 件数或释放后 remaining / Pace
THEN 问：今晚几间没到 / 释放后还剩几间 / Pace Ahead 还是 Behind
     在齐数之前：
       - 禁止「刚 no-show 所以 BAR→399」
       - 禁止「行业 5%/10% 所以砍」
       - 禁止「跟 wash 一样先砍」
       - 可以：条件化
           若释放后仍紧或 Ahead → Hold BAR
           若释放后厚且 Behind → 才评 P05（理由 leftover）
IF 用户没给本店 no-show%
THEN 不发明这些数。STR exclude Sold 不是砍价公式。仿真数字只在案例文件。
```

用户给了「8 间没到」→ 用**用户的数**算，仍不升为行业常模。

---

## 5. 动作表

```text
Stay Date:            当天那一晚
Noshow_count:         用户件数（Unknown 不编）
Remaining_after:      Capacity − Occupied_after − OOO
Pace:                 Ahead / On / Behind
Public BAR:           Hold 779–799 首选 799（Hypothesis）
Decision:             Hold / 拒绝因 no-show dump / 不按含未到 OCC 涨 / 移交 P05 或 P14·P52·P46·P53·P42·P37 / 卖限仍 P24
Do-not-do:
  - BAR→399 / 一夜 −15%
  - 编 no-show% / 5% / 10% / wash% / Walk $
  - 因一夜空房改超售卖限
  - 操作 PMS
Trigger: 释放后 24h Pickup；Ahead→Hold；Behind且厚→才 P05
```

---

## 6. 三句（与剧本同一套）

```
1. 散客 no-show 是当天没到，不是团块 wash，也不是提前取消。房回到可售之后，按**现在的 remaining + Pace**走，不要因为「刚 no-show 了」就 dump BAR。
2. 今晚 8 间没到 ≠ 今晚该砍。若当晚仍紧或 Pace Ahead，Hold 779–799 首选 799（Hypothesis / Simulation）。真 leftover 且 Behind 才评 P05。STR：no-show **不计** Rooms Sold（已开 Historical guidelines）。
3. 超售用的是历史 no-show 预期（P24），不是拿今晚空房证明该砸价。团未 pickup 走 P52。高取消走 P14。早离走 P46。本店 no-show% **NV，不编**。
```

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 02:17 CST | 首版。P54。Hold 779–799 首选 799。Never −15%。Never BAR→399 because no-show。399 = 被拒绝的 dump。 |

---

## 8. 交叉（不改 §1–7）

P14 Soft ≠ 当天没到。P52 wash ≠ 具名散客。P24 历史预期 ≠ 一夜报复。P05 在释放后评 leftover，不是因为 no-show。P46 早离。P42 walk-in。P53 状态轴。STR exclude Sold = 报送。OPERA posting ≠ dump。
