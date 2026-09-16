# Research Log · 2026-08-21 16:17 Asia/Shanghai · 弹性方向诊断 + TRevPAR/GOPPAR

> 回合类型：理论/指标深挖（Hour 16 ∈ {0,8,16}）  
> 主题：Price elasticity without point η；standalone TRevPAR / GOPPAR cards  
> 不写：P23/P26–P28/P30/P31/P35；不改 P01–P25/P29/P32–P34/P24 正文；不编点弹性

---

## 1. 本轮产出

| 路径 | 动作 |
| --- | --- |
| `pricing/price-elasticity-advise.md` | **NEW** 方向诊断 + 模式表 |
| `recommendations/stop-cut-if-revpar-falls.md` | **NEW** 决策卡 |
| `metrics/trevpar.md` | **NEW** |
| `metrics/goppar.md` | **NEW** |
| `research-log/2026-08-21-1617-elasticity-metrics.md` | **NEW**（本文件） |
| `metrics/metric-tree.md` | APPEND 索引指针 |
| `diagnosis/problem-tree.md` | APPEND §30 |
| `pricing/how-much-to-move.md` | APPEND 交叉，不改幅度 |
| `curriculum/progress.md` | APPEND Wave 块 |
| `backlog/research-backlog.md` | UPDATE M7 / H5 |
| `README.md` §8 | 轻触 callable |
| `theory/optimization-advise.md` | APPEND 一行：机会成本 ≠ 弹性 |

---

## 2. 打开成功的源

| 源 | URL | 用到 |
| --- | --- | --- |
| STR/CoStar Glossary | https://www.costar.com/products/str-benchmark/resources/glossary | TRevPAR、TrevPOR、GOPPAR、Total Revenue、Flow-through/Flex 定义 |
| CoStar TRevPAR 文 | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-trevpar-and-why-it-important | ≠RevPAR；不含费用；案例方向 |
| CoStar GOPPAR 文 | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-goppar-how-can-it-benefit-your-hotels | GOP 拆法；用途 |
| CoStar P&L 文 | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/understanding-your-str-reports-profit-loss-pl | TRevPAR/GOPPAR KPI 表 |
| CoStar RevPAR 文 | https://www.costar.com/en-gb/what-revenue-available-room-revpar-and-how-calculate-it | **1.5–2.0×** GOPPAR%Δ vs RevPAR%Δ 原文复核 |
| CHQ/PMC 弹性方向 | DOI 10.1177/19389655231184475；PMC10323521 | 住宿相对无弹性；危机期降价未必抬 RevPAR（**只取方向，不取样本点 η**） |

---

## 3. 仍 NV / 未采用

| 项 | 处理 |
| --- | --- |
| 本店 / 行业默认点弹性 η | **不写**；M7 仍等 feedback 10+ |
| 航空弹性表 | **禁止**当酒店 Fact |
| 中国 OTA 佣金% | 不编 |
| Walk 成本 / 精确超售间夜 | 本轮不碰 |
| Duetto「30%/60% flow」营销句 | 作 Vendor/C，不进指标卡公式 |
| Lee et al. 全文公式与样本 η | 只开摘要方向；NV-EL-04 |
| 新的 GOPPAR/RevPAR 倍数 | **不发明**；维持 CoStar 1.5–2.0× 为 A |

---

## 4. 兼容核验

未改：+5–8% / +8–15% / 围栏 −3–5% / BAR −5–10% / 禁止一夜 −15% / 价已最高只关不涨。  
Diagnose before cut：弹性卡明确先问题树，再 how-much-to-move，再事后模式表。

---

## 5. 顾问三句（本轮验收）

1. OCC 上来但 RevPAR 掉了 ≠ 降价成功 → 对该 Stay Date **停再砍**，先看是不是砍太深或卖错日。  
2. 弹性卡判断**上一刀有没有换到量**；下一刀 % 仍走 how-much-to-move，不报 η。  
3. TRevPAR = 全收入/可供房；GOPPAR = 经营利润/可供房；都不是 RevPAR，也不能互相替代做当晚 BAR。
