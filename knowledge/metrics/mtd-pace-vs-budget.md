# MTD Pace vs Budget｜月累计实际、预算、预测与剩余夜可达性

> 资产：Metric Card
> 路径：`metrics/mtd-pace-vs-budget.md`
> 类型：Performance + Feasibility（不是定价触发器）
> Evidence Level：A（Budget / Forecast；OCC/ADR/RevPAR）；B（可达性检查）
> Source：`sources/source-map.md` 既有 HSMAI 与 STR 指针；§34 pointer note
> Source Date / Last Verified：2026-08-26
> Knowledge Type：Fact（公式）+ Best Practice（按夜可达性）
> 配套：P56 · `../recommendations/dont-dump-to-hit-month-target.md` · `../theory/otb-pickup-pace.md`
> Advisor-First：只算与建议，不操作报表/PMS。
> 禁止：默认预算形状、行业 MTD 常模、把 Pace to Budget 当降价阈值、编本店预算/奖金口径。

## 定义

把本月拆成 **MTD Actual + 剩余夜 OTB + 剩余夜 Expected Pickup**。Budget 是目标，Forecast 是对会发生什么的估计。Pace to Budget 只是对照，不是砍价规则。本店 Budget、MTD 报表、考核指标、奖金口径均 **NV**。

## 核心输入

```text
Days elapsed / remaining; daily Available roomnights
MTD Rooms Sold / Room Revenue
Month Budget Rooms Sold / Revenue / ADR / RevPAR
Month Forecast Rooms Sold / Revenue
LY same-period and final month (if comparable)
Each remaining Stay Date: OTB, Remaining, Pickup, Pace, BAR
```

## 公式

```text
Month_Available_Roomnights = Σ Available_d
MTD_OCC = MTD_Rooms_Sold / MTD_Available_Roomnights
Budget_OCC = Budget_Rooms_Sold / Month_Available_Roomnights

Raw_rooms_gap = Budget_Rooms_Sold − MTD_Rooms_Sold − Remaining_nights_OTB
Forecast_gap = Budget_Rooms_Sold − Forecast_Final_Rooms_Sold
Remaining_physical_capacity = Σ Remaining_d
Maximum_final_rooms_sold = MTD_Rooms_Sold + Remaining_nights_OTB + Remaining_physical_capacity
Maximum_final_OCC = Maximum_final_rooms_sold / Month_Available_Roomnights

IF Raw_rooms_gap > Remaining_physical_capacity
THEN OCC budget is arithmetically unreachable even at 100% sellout.

Incremental_capacity_above_forecast = Σ Remaining_d − Expected_remaining_fill
IF Forecast_gap > Incremental_capacity_above_forecast
THEN closing the gap versus current forecast is physically unreachable.
```

Revenue / ADR / RevPAR 另算，不能用 OCC 缺口替代：

```text
Budget_revenue_gap = Budget_Room_Revenue − MTD_Room_Revenue − Remaining_OTB_Revenue
Required_average_rate_on_remaining_sales = Budget_revenue_gap / Required_remaining_rooms
Final_ADR = Final_Room_Revenue / Final_Rooms_Sold
Final_RevPAR = Final_Room_Revenue / Month_Available_Roomnights
```

分母为零或目标互相冲突时，明确不可解，不伪造价格。

## 四目标冲突

| 目标 | 降价可能发生什么 | 同时看 |
| --- | --- | --- |
| OCC | 可能上升 | ADR、增量是否真实 |
| Revenue | 量须覆盖稀释 | Dilution 门 |
| ADR | 通常下降 | 考核是否允许 |
| RevPAR | 可升可降 | OCC×ADR |

考核与奖金究竟按哪个，必须问本店；**NV，不代答**。

## 可达性结论模板

```text
A 可达但很陡：容量装得下，但需要卖出剩余的 __%；价格能否做到仍 Unknown。
B Forecast 上不可达：卖完 forecast 之外所有可售仍差 __ 间夜。
C 物理不可达：剩余夜 100% sellout 仍差 __ 间夜；改 Forecast / 预期，不是更深降价。
D OCC 可达但 Revenue/ADR/RevPAR 不可同时达：要求选择考核指标。
```

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 月底差几个点，四夜一起降 | 月度压力，按夜需求不同 |
| 容量装得下，所以降价一定能补 | 容量是必要非充分条件 |
| OCC 达成等于收入达成 | ADR 下跌可使 Revenue/RevPAR 未达 |
| 下月再涨就没有成本 | 可能借量与恢复失败 |
| Budget Pace 落后就是 Demand Behind | Budget 是目标；逐夜 Pace 才是需求尺 |

## 顾问决策含义

先报「能不能装下」，再谈价格。不可达是合法且重要发现。可达也须逐夜看 Pace；Ahead 夜不作填洞库存。动作走 P56/P02/P05，本指标不自动触发价格。

## Need Verification

本店 Budget 文件、MTD 报表口径、考核 KPI、奖金口径、剩余夜 Forecast、变动成本与渠道净价。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 10:17 CST | 首版。MTD Actual vs Budget vs LY；剩余容量；100% sellout 可达性；无行业常模。 |
