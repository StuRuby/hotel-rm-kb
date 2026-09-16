# Decision Card: Don't Raise on Comp OCC（免费房抬高的 OCC → 不自动涨；Comp 占着的房 → 不 dump）

> 资产：Advisor Decision Card（T-Comp / T06）  
> 路径：`recommendations/dont-raise-on-comp-occ.md`  
> 对应：问题树 §53；用户原话「OCC 92% 还要不要涨」「ADR 掉了要不要补涨」  
> 理论：`theory/complimentary-house-use.md`  
> 配套：`metrics/complimentary-house-use.md` · `metrics/occ.md` · `metrics/adr.md` · P01/P03 Remaining · P05 leftover-弱才 dump · P37 永久 HU/OOO · P44 钟点分子 · P45 虚荣 OCC · P46 付费早离回库  
> 状态：active · 2026-08-24 16:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 历史 Sold 不含无关 complimentary）；A（Forward Booked 可含 Comp/house use）；中国报表名非 Fact  
> Last Verified：2026-08-24  
> 仿真：`cases/sim-2026-comp-occ-92-sat.md`  
> 禁止：按含 Comp 的 PMS OCC 自动 Increase BAR；把 Comp 当 leftover dump；为修 ADR 砍或涨；一夜 −15%；编华住 SOP / 中国 PMS 字段 / Comp % / Walk 成本 / 399 行情 Fact；写满本 P47；写政府价剧本；操作 PMS。永久 HU → P37。

```yaml
decision: Do not raise BAR off comp-inflated PMS OCC; do not dump rooms comps are sitting in; recompute paid remaining and paid ADR
scenario: User OCC looks high because complimentary or transient house-use rooms occupy inventory, or ADR looks down because comps sat in the occupied denominator
required_inputs:
  - Stay_Date
  - Physical_rooms
  - Unrelated_comp_or_transient_house_use_count（缺则问，不编 10）
  - Sold_or_OTB_and_whether_PMS_counts_comps_as_occupied
  - whether_figure_is_STR_historical_or_Forward_OTB_or_in-house
  - pace_pickup_whether_ahead
signals_for:
  - pms_occ_high_and_comps_material
  - adr_down_and_comps_in_occupied_denominator
  - leftover_looks_fat_but_rooms_are_comp_occupied
  - gm_wants_plus_100_off_92_occ
  - forward_otb_includes_comp_house_use
signals_against:
  - unpaid_rooms_are_promo_or_contract_free_nights (STR include in Sold; not this card)
  - permanent_staff_apartment_6plus_months (then P37)
  - paid_remaining_tight_and_pace_ahead_after_recompute (then P01/P03; reason is paid remaining, not 92%)
  - true_paid_leftover_weak_and_market_weak (then P05 fences on empty paid rooms only)
recommended_action: 先拆无关 Comp/临时自用。PMS OCC 因 Comp 虚高 → 不涨 BAR。ADR 因 Comp 进分母而掉 → 不砍不补涨去修报表；重算付费 ADR。物理剩余已减 Comp → 不 dump 占着的房。付费剩余+Pace 走 P01/P03/P45。促销送夜进 STR Sold。永久 HU 走 P37。禁一夜 −15%。
risk: 把请客房当成需求；把 Comp 当弱需求砸穿品牌带；用 Forward 含 Comp 的 OTB% 去对历史 Comp
follow_up: 用户是否给出无关 Comp 间数与口径（PMS/STR/Forward）；重算后 24h 付费 Pickup；当晚是否还在新送免费
confidence: 能拆 Comp 则方向 Medium；缺间数只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「OCC 92% 还要不要涨」「ADR 掉了要不要补涨」——且占用里可能有免费/临时自用。

主动词：**拆 Comp / 不按虚高 OCC 涨 / 不 dump Comp 占着的房 / 重算付费剩余与付费 ADR。**

不要用：无关免费 = 0 且口径已声明 → 直接 P01/P03 或 P02/P05。好看 OCC 来自维修 → P37。108% 来自钟点 → P44。永久宿舍 → P37。买二送一赠夜 → STR Sold，不是本卡。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要按无关免费抬高的 OCC 涨；不要把 Comp 当 leftover dump。**

---

## 2. 硬门（先不动价）

命中任一 → **不要**用那张好看的 PMS OCC 或被 Comp 拉低的 ADR 去改 BAR：

1. **PMS OCC 高且无关 Comp/临时自用实质。** 先  
   `STR OCC ≈ (Occupied − unrelated comps) / Physical`（历史 Sold 不含无关 Comp，S）  
   `Remaining physical = Capacity − occupied − OOO`  
   **不自动 Increase BAR。** 看付费剩余 + Pace（P01/P03/P45）。  
2. **ADR 掉，且 Comp 进了占用分母。** 重算 `Paid ADR = Room Revenue / (Occupied − unrelated comps)`（Hypothesis）。**不要砍 BAR 修 ADR，也不要涨 BAR 修 ADR**——除非付费需求本身 Ahead 且剩余真紧（走 P03，理由不是 ADR）。  
3. **物理剩余看起来厚，但「空」其实是 Comp 在住。** 不可当 P05 leftover。不要 dump。  
4. **用户没给无关 Comp / 临时自用间数。** **问，不编 10。** 条件化：若 ≈ 0 → 按原 OCC 进 P03/P05 检查单；若实质 → 先划掉。  
5. **数字来自 Forward Occupancy on the Books。** 可含 Comp/house use（A）。不要当历史 Sold OCC，更不当涨价令。  
6. **其实是 OOO / 永久 HU 砍分母 → P37。** 钟点胀分子 → P44。早离回库 → P46。

为冲 OCC 或为「修 ADR」而动价 **不是** 开门条件。

---

## 3. 何时可以动价（仍不是「按 Comp 定价」）

重算之后：

| 重算结果 | 动作 |
| --- | --- |
| 付费 Remaining 紧 + Pace Ahead / Days-to-Sellout < DTA | **P03**：先关低价，再决定涨不涨。理由是**付费**剩余，不是 92%。价已最高只关不涨 |
| 付费 Remaining 厚 + DTA≤3 + Pickup≈0 + 市场不冰 | **P05** 三档围栏；对象是**付费空房**，不是 Comp 在住房。**禁止一夜 −15%** |
| 物理剩余薄 **因为** Comp 占着；付费需求仍在 | **Hold**；当约束库存，**不 dump**。Hypothesis：劝当晚少送/改期免费（无 SOP） |
| 只是 Comp 撑起来的 92%，付费并不紧 | **不涨**；不是 High Demand |
| 促销 1+1 / 团 50+1 | STR **计入** Sold；退出本卡 |
| 永久员工公寓 6+ 个月 | **P37** |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因 92% 去 +100。799 不是行情 Fact。

---

## 4. 缺 Comp 数时怎么说（不编）

```
IF 用户没给无关免费 / 临时自用间数
THEN 不发明 10，不发明中国报表字段名，不发明 Comp %
     问 3 个数：Physical / 当日无关 Comp+临时自用 / 这张 OCC 是 PMS、STAR 历史还是 Forward OTB
     在齐数之前：
       - 禁止「92% 所以涨」
       - 禁止「ADR 掉了所以砍或补涨」
       - 禁止「空着所以砸」（先问是不是 Comp 在住）
       - 可以：条件化两支
           若无关免费 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
           若无关免费实质 → 先划掉再谈价
```

用户给了「10 间免费、180 物理」→ 用**用户的数**算，仍不升为行业常模。

---

## 5. 动作表

```text
Stay Date:
Physical / PMS occupied / Unrelated Comp+临时自用:
STR Sold（不含无关 Comp）:
PMS OCC vs STR OCC vs Paid OCC（声明口径）:
Remaining physical（已减 occupied，含 Comp）:
Paid Remaining / Pace:
Forward 还是历史:
Decision: Hold BAR / 不涨 / 不 dump / 移交 P03 / 移交 P05（仅付费空房）/ 移交 P37
Do-not-do:
  - 按 PMS 92% 自动涨（含 +100）
  - 按 Comp 占着的房 dump / 一夜 −15%
  - 为修 ADR 砍或涨
  - 混 Forward OTB 与历史 Sold
  - 编字段名 / Comp % / 华住 SOP / 399 Fact
Trigger: 当晚停送免费 → 重算 Remaining；付费变紧才评涨
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 销售当晚继续送免费，付费剩余更薄 | 新 Comp 间数；付费 Pickup |
| 把促销赠夜从 Sold 里抠掉 | 买二送一 / 团送夜走 STR Include，不走本卡 |
| 把经理公寓当瞬态 Comp | 6+ 个月 → P37 |
| 真付费紧却因「怕误诊」死不涨 | 重算后仍紧且 Ahead → P03，不是永远 Hold |

---

## 7. 兼容

- P37 = 缩 **Available**（OOO / 永久 HU）。本卡 = $0 无关 Comp 占房、不进 STR Sold。分母 vs 分子相反。Advise 都是：不要按扭曲 OCC 定价。  
- P44 = 钟点胀分子。不是 Comp。  
- P45 = GM 虚荣 OCC。本卡是原因之一。  
- P05 dump 仅付费 leftover 真弱。Comp 占用不是 leftover。  
- P46 ED 把**付费**房还回库存（脏）。Comp 不是回库。  
- T19：高峰免费机会成本是付费 BAR。  
- T20：不发明 699。  
- **禁止一夜 −15%。**

Advisor-First：建议拆口径、Hold 779–799 首选 799（Hypothesis）、当晚少送免费。不点免费码、不改 PMS 房态、不代报 STR。

不写 P47。政府协议价未写。

仿真见 `cases/sim-2026-comp-occ-92-sat.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 16:17 CST | 首版。不按 Comp 抬高的 OCC 涨；不 dump Comp 占着的房；重算付费剩余/ADR。不写 P47。 |
