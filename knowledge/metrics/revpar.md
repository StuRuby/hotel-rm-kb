# RevPAR｜Revenue per Available Room

> 卡：`metrics/revpar.md`  
> 类型：Performance KPI（topline 中枢）  
> Evidence Level：S  
> Source：CoStar STR Glossary「Revenue Per Available Room (RevPAR)」  
> Last Verified：2026-08-20  
> Knowledge Type：Fact

## 定义

每一间可供房贡献的客房收入，不论售出与否。行业用来比较不同规模酒店的客房效率。

## 公式

```
RevPAR = Room Revenue / Rooms Available
RevPAR = OCC × ADR          # 同一 Sold、同一 Available、同一 Room Revenue 时恒等
```

例：OCC 70%、ADR 800 → RevPAR 560。Available 口径必须与 OCC 一致。

## 上游

OCC 与 ADR 的权衡；价格、库存、限制、需求、分母。

## 下游

RGI；预算；与 GOPPAR 同向但不成 1:1（成本结构会撕裂）。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 追 OCC 或追 ADR 就能追 RevPAR | 乘积可能反向 |
| 渠道 RevPAR = 全店 | 配额分母不同 |
| RevPAR 升 = 利润升 | 高佣金 / 高变动成本可让 GOP 降 |
| 用 PMS 可售分母对 STR RevPAR | 分母不一致 |
| 满房 RevPAR = 需求上限 | 拒绝需求未计入 |
| RGI 掉了就砍 BAR | RGI 是事后份额尺，不是今夜定价按钮。见 T-Share / P57 |

## 因果速查

- RevPAR 低 + OCC 低 + ADR 正常 → 先走 OCC Low 树，不先降价。
- RevPAR 低 + OCC 高 + ADR 低 → 可能价低或组合差，先走 ADR Low / Price Too Low。
- RevPAR 低 + 双低 → 先看市场（RGI vs 市场）再看本店。
- RevPAR 高但 Pace 过快 + Remaining 少 → Early Sellout 风险，考虑涨价/关低价。

## 顾问决策含义

先看 RevPAR 方向和相对 Comp Set（RGI），再拆 OCC/ADR。建议必须写清预期影响哪一条腿。禁止伪造「RevPAR +¥37」这类无依据的精确数。

转到：RevPAR Low；Benchmark 卡。
