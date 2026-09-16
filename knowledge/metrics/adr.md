# ADR｜Average Daily Rate｜平均房价

> 卡：`metrics/adr.md`  
> 类型：Performance KPI  
> Evidence Level：S（公式）  
> Source：CoStar STR Glossary「Average Daily Rate (ADR)」；STR Historical Benchmarking Data Reporting Guidelines  
> Last Verified：2026-08-20  
> Knowledge Type：Fact + Best Practice

## 定义

已售房晚的平均客房收入。STR：average rate paid for rooms sold。

## 公式

```
ADR = Room Revenue / Rooms Sold
```

**Room Revenue 口径（STR，S）**

- 含：客房租金、保证类 No-show 房费（Sold 不计该夜）、作为 principal 的强制性服务费。
- 不含：税、resort fee（进 miscellaneous）、包价中的餐/SPA 分摊、与入住无关的取消费（进 miscellaneous）、无关免费房。
- 批发 / pay-when-booked 互联网价：报**净额**。
- pay-later 互联网价：报**总额**，佣金进费用。

因此 STR ADR **不是**纯粹 Gross ADR。店内「门市均价」常更高。Need Verification：本店报表用哪一种。

## 上游

BAR 与价格结构、售出房型组合、细分/渠道组合、促销与会员价、免费房是否进分母、包价分摊方法。

## 下游

RevPAR、ARI、Net ADR（再扣获客成本）、GOP。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| ADR 升 = 涨价成功 | 低价房卖光，只剩高价房型（组合效应） |
| ADR 降 = 定价失败 | 接了正确的低需求日增量，RevPAR 升 |
| 对 STR ADR 用门市价 | 口径已部分净额 |
| 含税 ADR 对不含税 Comp | 假落后/假领先 |
| 渠道 Gross ADR 高 = 好渠道 | 看 Net ADR |
| ADR 掉（因为 comps 进占用分母）= 砍/涨 BAR 修 ADR | 无关免费可能在店内占用分母里。重算付费 ADR = Room Revenue / (Occupied − unrelated comps)（Hypothesis）。STR ADR 分母本就不含无关 Comp。不要为修报表砍或涨。见 `complimentary-house-use.md` |

## 顾问决策含义

ADR 与 OCC 必须成对看。只抬 ADR 丢掉过多 OCC 会伤 RevPAR；只抬 OCC 会伤贡献。调价前先问：ADR 变动有多少来自**价格**，多少来自**卖了什么房/什么渠道**。

转到：RevPAR Low、ADR Low、Price Too High/Low。

## 适用 / 限制

- 适用：已发生日、OTB ADR（在手组合的均价，不是今天挂牌价）。
- 限制：ADR 不是挂牌 BAR；Remaining 的可卖价可以和 OTB ADR 差很远。
