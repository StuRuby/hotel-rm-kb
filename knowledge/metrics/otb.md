# OTB｜On the Books｜在手预订

> 卡：`metrics/otb.md`  
> 类型：Booking position  
> Evidence Level：A/B（行业与 Forward STAR）；非历史 STAR KPI  
> Source：STR Forward STAR（Occupancy on the Books）；行业 RMS/培训通行用法  
> Last Verified：2026-08-20  
> Knowledge Type：Vendor Methodology + Best Practice

## 定义

某一 Stay Date（或区间）在某一 Booking Date 快照上，仍然有效的确认预订合计。亦称 BOB。是**位置**，不是速度，也不是最终成绩。

## 必须同时看的四维

| 名 | 公式（B，须声明口径） |
| --- | --- |
| OTB Rooms | 确认房晚 |
| OTB OCC | OTB Rooms / Available |
| OTB ADR | OTB Room Revenue / OTB Rooms |
| OTB Revenue | Σ 确认客房收入 |

Need Verification：本店是否含待确认、waiting list、complimentary、团队暂控（tentative）。顾问默认：**只计确认**；tentative 单列。

STR Forward STAR（A）：未来日报告 Occupancy on the Books；可用房用 Adjusted Rooms Available，与历史 STAR 全量房晚不同。不要把 Forward 数和历史 STAR 直接比。

## 上游

历史曲线、当期价格与限制、活动、团队、渠道、取消政策。

## 下游

Pickup 的被减数；Pace 的分子；Forecast 的已锁定部分。

## 常见误读

**「OTB 70% 就是好。」** 70% 没有 DTA、没有曲线、没有组合，不能判断。

反例：

- DTA=21、历史同 DTA=40% → 70% 过快，Early Sellout。
- DTA=2、历史最终=90%、历史同 DTA=82% → 70% 过慢。
- OTB OCC 70%、OTB ADR 远低于剩余可卖价 → 前半段卖便宜了。
- 70% 来自一个 60 天可免费取消的团队 → 位置虚。
- 本店 70%、Comp 88% → 丢份额。

## 顾问决策含义

输出句式：Stay Date + DTA + OTB 四维 + 相对 STLY/曲线/预算 + Remaining + 初步判断。OTB 低先走 Pace Behind / OCC Low 鉴别，不自动促销。

相关：[`pickup.md`](pickup.md) [`pace.md`](pace.md)
