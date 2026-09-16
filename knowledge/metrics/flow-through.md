# Flow Through / Flex｜增量收入进了多少 GOP

> 卡：`metrics/flow-through.md`  
> 类型：Profit KPI（增量利润效率）  
> Evidence Level：S（STR Glossary 定义与公式）；A（CoStar 2026-02-23 解读）  
> Source：CoStar STR Glossary「Flow Through / Flex」；CoStar Data Insights「Connecting Revenue and Profitability: Flow Through and Flex Explained」(2026-02-23)  
> Last Verified：2026-08-22  
> Knowledge Type：Fact（定义/公式）；A（解读）  
> 树位置：`metric-tree.md` §7（本轮 APPEND 指针，不改写原 §7 正文）  
> 配套：`metrics/goppar.md` · `metrics/trevpar.md` · `theory/profit-contribution.md`

## 定义

**Flow Through**（收入相对预算或上年**上升**时用）：每一块新增的顶线收入，有百分之多少「流」进经营利润。  
**Flex**（收入相对预算或上年**下降**时用）：收入掉了之后，有多少利润被「弹性」省下来——不要和 Flow Through 混名。

Glossary 原文骨架（S，2026-08-22 打开）：flow through = 从每块增量顶线收入流到底线的增量利润百分比；flex = 收入下降时被 flex / 省下的利润。

## 公式

STR Glossary（S）：

```
Flow Through % = (Change in GOP ÷ Change in Total Revenue) × 100
                 仅当收入上升（相对预算或上年）

Flex %         = (1 − Change in GOP ÷ Change in Total Revenue) × 100
                 仅当收入下降
```

Δ 必须同窗口、同口径。GOP 与 GOPPAR 卡一致：经营利润，不是净利润。Total Revenue 与 TRevPAR 卡一致：客房 + F&B + 其他部门 + miscellaneous。

分母 ΔTotal Revenue = 0 → **不算**，写 Undefined。

## 上游

TRevPAR 结构；部门费用；未分配费用；mix（低净渠道、含早、批发）；入住变动成本；劳动力是否随 OCC 线性。

## 下游

「收入涨了算不算成功」；业主问为什么 GOP 没跟上；是否在卖亏本间夜（→ 贡献卡）。

**不是**当晚 BAR 涨降的第一指标。

## CoStar 解读（A，2026-02-23 打开）

| 现象 | 含义（文中） |
| --- | --- |
| 高 / 接近 100% 的正 Flow Through | 增量收入大部分进 GOP；成本纪律 + 更赚钱的需求，不只是多卖了间 |
| 正但 <100% | GOP 跟涨，但每块增量收入进利润不到一块（被劳动力/能耗等吃掉） |
| **负 Flow Through** | **收入涨、GOP 掉** |
| 高 Flex | 收入掉时成本跟着下来，利润少掉的部分被保住 |
| 负 Flex | GOP 掉得比收入还多 |

文中 STR Benchmark 图例（A，不是本库默认目标）：2025-08 收入 +16%、Flow Through 97%；2025-05 收入 +9%、Flow Through 为负。**禁止**把 97% 或任何博客「行业 35–60%」写成中国店标准。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 收入↑ = 经营成功 | 看 ΔGOP；负 Flow Through 是否定句 |
| Flow Through 与 Flex 同一公式同一场景 | 收入升用前者，降用后者（Glossary 强制分） |
| 用 Flow Through 定今晚 BAR | 月/期 P&L 尺；当晚用贡献 + Pace |
| GOPPAR 升了所以 Flow Through 一定好 | GOPPAR 是水平；Flow Through 是**增量**比 |
| Mews 等「典型 35–60%」 | C/Vendor，不进本库默认 |
| 分母用 Room Revenue 冒充 Total Revenue | STR 分母是 Total Revenue |

## 顾问决策含义

- 「入住冲上去、收入也涨，老板还是不高兴」→ 算或问 Flow Through；差 = 先查 mix 和成本，**不是再降价**。  
- OCC↑ RevPAR↓ 已经该停砍；OCC↑ 且 Flow Through 负 / GOP↓ 更该停，并走「宁可不卖」。  
- 无 P&L：写 **Flow Through Unknown**；用间夜贡献 + Net ADR 做当晚闸。  
- 禁止伪造「Flow Through 42%」无依据精确数。

转到：`goppar.md` · `trevpar.md` · `net-adr.md` · `theory/profit-contribution.md` · `recommendations/do-not-sell-below-contribution.md`。

## 证据

| 论断 | 级 | URL / 源 |
| --- | --- | --- |
| 定义与公式；升用 Flow Through、降用 Flex | S | https://www.costar.com/products/str-benchmark/resources/glossary |
| 负 Flow Through；高 Flow Through = 更赚钱的房间 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/connecting-revenue-and-profitability-flow-through-flex （2026-02-23） |
| GOP / GOPPAR 口径 | S/A | `goppar.md` |
| 行业「典型 %」区间 | — | **不采用** |

## Need Verification

| ID | 问题 |
| --- | --- |
| NV-FT-01 | 用户报表 GOP 是否 = USALI GOP（同 NV-GP-01） |
| NV-FT-02 | 对比窗是 vs Budget 还是 vs STLY；混用会改符号 |
| NV-FT-03 | 中国有限服务店 Flow Through 数量级 | 保持不设默认目标 |

## 复盘（2026-08-22 12:17）

公式已进 `sources/source-map.md`。Flow Through 差 → mix/成本，不是再砍；与弹性 stop-cut（OCC↑ RevPAR↓）和 T19（OCC↑ GOP↓）分层兼容。不设默认目标%。
