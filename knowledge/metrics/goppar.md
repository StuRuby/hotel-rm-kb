# GOPPAR｜Gross Operating Profit per Available Room

> 卡：`metrics/goppar.md`  
> 类型：Profit KPI（经营利润效率）  
> Evidence Level：S（STR Glossary 定义与公式）；A（CoStar GOPPAR / P&L 解读；USALI 结构表述）  
> Source：CoStar STR Glossary「Gross Operating Profit per Available Room (GOPPAR)」；CoStar「What is GOPPAR…」(2024-06-25)；RevPAR 文中 1.5–2.0× 观察 (2020-01-23)；P&L 文 (2022-09-28)  
> Last Verified：2026-08-21  
> Knowledge Type：Fact（定义/公式）；A（经验倍数，非定律）  
> 树位置：`metric-tree.md` §7.3

## 定义

管理团队可控的经营利润，摊到每一间可供房。  
衡量：创收 + 控制直接可控经营费用的能力（Glossary 表述）。

**不是**净利润（其下还有管理费、固定费用、利息、税、折旧等）。

## 公式

```
GOPPAR = Gross Operating Profit / Rooms Available
```

STR Glossary（S，2026-08-21 打开）：`GOPPAR = Gross Operating Profit / Number of Rooms Available`。

CoStar GOPPAR 文对 GOP 的工作拆法（A，USALI 对齐表述，非本库自造）：

```
GOP = Total Revenue − (部门费用合计 + 未分配经营费用合计)
部门费用 ≈ Rooms + F&B + 其他营业部门
未分配 ≈ 行政总务 + 信息通讯 + 销售营销 + 能源 + 维修保养 等
```

分母 Available 须与 RevPAR / TRevPAR 同口径、同窗口。

## 上游

TRevPAR 结构；各部门成本；未分配费用；入住带来的变动成本（布草、早餐、能源）；渠道获客成本（常进客房部门费用）。

## 下游

业主/资管评价；「为冲 OCC 是否值得」；Flow-through / Flex（增量收入进了多少利润）。

## 与 RevPAR 的关系（经验，非定律）

CoStar RevPAR 公开文（2020-01-23，2026-08-21 复核）：RevPAR 是利润的领先指标之一，**GOPPAR 的百分比变化一般约为 RevPAR 百分比变化的 1.5–2.0 倍**。

| 用法 | 禁止 |
| --- | --- |
| 提醒：RevPAR 小波动可能对应更大利润波动 | 当成每家店的固定乘数去预测 GOP |
| 解释「为什么业主比 RM 更紧张 RevPAR miss」 | 用 1.5–2.0 反推精确 GOP 金额 |

Evidence：**A**（CoStar 公开观察）。Duetto 等转述同一区间 = Vendor/二次，不升 S。本库保持 metric-tree 原注，**不发明新倍数**。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| RevPAR 第一 = GOP 第一 | 高 OCC 低 ADR 可能多出清洁/早餐/佣金，GOPPAR 更差 |
| GOPPAR = 净利润 / 业主现金 | 未扣管理费、租金、利息、税、折旧 |
| 用 GOPPAR 做当晚 BAR 微调 | 费用数据滞后；战术日仍用 OTB/Pickup/RevPAR |
| 忽略劳动力：淡季 TRevPAR 尚可但 GOPPAR 差 | CoStar：淡季/肩月正是看费用是否过高的窗口 |
| Flow-through 与 Flex 混用 | Glossary：收入升用 Flow-through；收入降用 Flex（定义不同） |

## 顾问决策含义

- 「OCC 冲上去了算不算成功」→ 若只有量、ADR/Net 差，要问 GOPPAR / 变动成本，不能只报 OCC。  
- 「要不要为卖房送早餐/免停车」→ 估增量 Total 与增量成本，看是否伤 GOP。  
- 团队低价高会议 → 看部门利润与 GOP，不只客房 ADR。  
- 无月度 P&L 时：写 **GOPPAR Unknown**；至少用 Net ADR 排序，并点名缺口。  
- 禁止伪造「GOPPAR +¥8」无依据精确数。

转到：`trevpar.md` · `revpar.md` · `net-adr.md`；metric-tree §7。

## 证据

| 论断 | 级 | URL / 源 |
| --- | --- | --- |
| 定义与公式 | S | https://www.costar.com/products/str-benchmark/resources/glossary |
| GOP 拆部门+未分配；用途 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-goppar-how-can-it-benefit-your-hotels |
| GOPPAR %Δ ≈ 1.5–2.0 × RevPAR %Δ | A | https://www.costar.com/en-gb/what-revenue-available-room-revpar-and-how-calculate-it （同文美站路径亦有） |
| P&L KPI 表 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/understanding-your-str-reports-profit-loss-pl |

## Need Verification

| ID | 问题 |
| --- | --- |
| NV-GP-01 | 用户报表「经营利润」是否 = USALI GOP |
| NV-GP-02 | 中国店管理费/业主费用是否误计入 GOP |
| NV-GP-03 | 1.5–2.0× 在中国有限服务样本是否同向 | 保持 A 观察，不升 S |

---

## 交叉（2026-08-22 08:17，不改正文公式）

T19：间夜贡献与 Flow Through 已独立成卡。`theory/profit-contribution.md` · `metrics/flow-through.md` · `recommendations/do-not-sell-below-contribution.md`。

GOPPAR 仍是水平尺（GOP / Available）。Flow Through 是增量尺（ΔGOP / ΔTotal Revenue）。二者都不替代当晚 BAR。OCC↑ 但 GOPPAR/GOP 掉 → 宁可不卖，不是再冲 OCC。变动成本金额仍 NV。
