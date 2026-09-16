# TRevPAR｜Total Revenue per Available Room

> 卡：`metrics/trevpar.md`  
> 类型：Profit / Total Revenue KPI（全店收入效率，非客房定价中枢）  
> Evidence Level：S（STR Glossary 定义与公式）  
> Source：CoStar STR Glossary「Total Revenue Per Available Room (TRevPAR)」；CoStar Insights「What is TRevPAR…」(2020-01-07)；P&L 解读文 (2022-09-28)  
> Last Verified：2026-08-21  
> Knowledge Type：Fact  
> 树位置：`metric-tree.md` §7.2

## 定义

全部经营收入摊到每一间可供房：客房 + 餐饮 + 其他营业部门 + 杂项（如 resort fee、取消费等，以 STR Total Revenue 定义为准）。  
比 RevPAR 宽：RevPAR 只含 Room Revenue。

## 公式

```
TRevPAR = Total Revenue / Total Available Rooms
```

STR Glossary（S，2026-08-21 打开）：`Total Revenue / Total Available Rooms = TRevPAR`。  
Total Revenue = rooms + F&B + other departments + miscellaneous（Glossary「Total Revenue」条）。

**TrevPOR（对照，非本卡主指标）：**  
`TrevPOR = Total Revenue / Rooms Sold`（Glossary：Total Revenue Per Occupied Room）。分母是已售，不是可供；勿与 TRevPAR 混用。

## 上游

客房收入结构；F&B / 会议 / 停车 / 水疗 / 高尔夫等；杂项费政策；Available 口径（须与 RevPAR 同窗）。

## 下游

全面收益视角；团队评估（低房价高会议）；与 GOPPAR / Flow-through 联读（收入增量有多少进利润）。  
**不是**日常 BAR 涨降的第一指标。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 用 TRevPAR 代替 RevPAR 做客房定价 | 餐饮旺可能掩盖客房卖便宜 |
| RevPAR 第一 = 全店收入第一 | CoStar 案例：RevPAR 较低店可因其他收入 TRevPAR 更高 |
| TRevPAR 升 = 利润升 | **不含费用**；利润看 GOPPAR |
| resort fee 既进 Room Revenue 又进 Total | STR：resort fee 走 miscellaneous / 不进 Room Revenue（树 §7.2）；重复加总会虚高 |
| 有限服务店与全服务店用 TRevPAR 硬比绝对值 | 结构不同；比 % 变化或同类 Comp 更稳 |

## 顾问决策含义

- 问「这团房价低但会议大」→ 看对 TRevPAR / 部门贡献，不只 BAR。  
- 问「要不要为冲 OCC 开早餐券/停车场免费」→ 估对 Total 与变动成本，再问 GOP。  
- 日常「今晚 BAR 涨不涨」→ 仍先 RevPAR / Pace / Pickup；TRevPAR 作补充。  
- 禁止伪造「TRevPAR +¥12」无依据精确数。

转到：`trevpor.md` · `goppar.md`；`theory/total-revenue-management.md`；团队置换；metric-tree §7 / §12。

## 证据

| 论断 | 级 | URL / 源 |
| --- | --- | --- |
| 定义与公式 | S | https://www.costar.com/products/str-benchmark/resources/glossary |
| 含各部门与杂项；≠利润 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-trevpar-and-why-it-important |
| P&L KPI 写法 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/understanding-your-str-reports-profit-loss-pl |

## Need Verification

| ID | 问题 |
| --- | --- |
| NV-TR-01 | 用户 PMS「全店收入」是否含税/服务费/业主单元 |
| NV-TR-02 | 中国店杂项费与 STR miscellaneous 字段映射 |

---

## 交叉（2026-08-22 08:17）

TRevPAR 不含费用。收入涨是否进利润 → `metrics/flow-through.md`。间夜卖不卖 → `theory/profit-contribution.md`。TRevPAR ≠ 今晚 BAR（T18 已写）。
