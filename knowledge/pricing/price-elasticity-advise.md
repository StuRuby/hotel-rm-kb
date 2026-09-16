# Price Elasticity Advise｜价格弹性（顾问方向诊断，无点估计）

> 资产：2026-08-21 16:17 理论/决策映射  
> 路径：`pricing/price-elasticity-advise.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-21  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（书目级定义）；A（行业实证方向）；B（顾问诊断表）  
> 配套幅度：`pricing/how-much-to-move.md`（下一刀 % 仍 Hypothesis）  
> 配套决策卡：`recommendations/stop-cut-if-revpar-falls.md`  
> 配套指标：`metrics/revpar.md` · `metrics/net-adr.md` · `metrics/metric-tree.md` §2 因果表  
> 禁止：发布默认 η；把航空弹性表当酒店 Fact；伪造「本店 η=−1.2」；用本卡改 how-much-to-move 幅度数字。

---

## 0. 一句话

弹性回答的是：**上一刀降（或涨）之后，量有没有把价差赚回来？**  
不回答「下一刀该 −7%」。下一刀幅度仍走 `how-much-to-move.md`。本卡只做**方向诊断**。

```
Naive          OCC 上来了 = 降价成功
Advisor        OCC↑ ADR↓ 时看 RevPAR（再看 Net）：乘积升才算量把价差赚回
Forbidden      默认 η = −1.2 / 抄航空舱位弹性 / 假装能估本店点弹性
```

---

## 1. 顾问语言里的定义（Theory，书目级，不摘正文）

价格弹性（price elasticity of demand）= 需求量对价格变化的敏感程度。  
顾问口语：

| 方向说法 | 含义 | 决策直觉 |
| --- | --- | --- |
| **相对弹性（量反应够）** | 降价带来的间夜增量，足以让 Room Revenue / RevPAR 不掉或上升 | 这一刀「换量有效」；仍要看 Net 与日期对不对 |
| **相对无弹性（量反应不够）** | 降价后 OCC 升一点或不动，但 ADR 掉得更多 → RevPAR 掉 | 停再砍；或根本不该砍 |
| **假「无弹性」** | OCC 不动，其实是库存关 / 限制挡 / 渠道离线 | 先修供给（P33），不是「客人都不在乎价」 |

书目边界（不摘正文）：

- Phillips *Pricing and Revenue Optimization* 2e：价格反应是正式主题；弹性未知时做可逆小步（S 书目，见 `pricing-framework.md` §5）。  
- Talluri & van Ryzin：Price-based RM 主题（S 书目）。  
- 本库 Phase 1：**不估计 ε / η 点值**（与 `pricing-framework.md` NV-PR-03、backlog M7 一致）。

**Evidence：** Theory / S 书目级定义；点估计 = Need Verification。

---

## 2. 硬禁止

| 禁止 | 为什么 |
| --- | --- |
| 发布默认 η（如 −0.5 / −1.2） | 无本店反馈 = 假精确；M7 明确等 10+ feedback |
| 把航空舱位弹性当酒店 Fact | 产品、提前期、竞争结构不同；最多作 Theory 类比 |
| 用一次 24h Pickup 反推「本店 η=」 | 噪声、一团进账、渠道开关会污染 |
| 因 OCC 升就说「降价成功」 | 成功标准是 RevPAR（再 Net），不是 OCC |
| 用本卡改 +5–8% / 围栏 −3–5% / BAR −5–10% / 禁止一夜 −15% | 幅度卡数字兼容硬规则，本卡只诊断「上一刀」 |

---

## 3. 可调用诊断表（OCC / ADR / RevPAR 模式）

同一 Stay Date、同一 Available 口径。窗口优先：降价后 **24–72h Pickup**，或该 Stay Date **实际发生**（已过夜）。  
知识类型：Best Practice + Hypothesis（过程互证，与 metric-tree §2 因果表同向）。Evidence：**B**。

| # | 模式 | 顾问读法 | 动作方向 |
| --- | --- | --- | --- |
| **A** | OCC↑ ADR↓ **RevPAR↑** | 量把价差赚回来了（相对弹性够） | 可守；勿立刻再深砍。盯 Net ADR：Gross 赢可能 Net 输 |
| **B** | OCC↑ ADR↓ **RevPAR↓** | 砍太深 / 卖错日期 / 换到低贡献渠道 | **停再砍 BAR** → `stop-cut-if-revpar-falls.md`；考虑收回围栏或反向小抬 |
| **C** | OCC 平 / 微动，ADR↓，RevPAR↓ | 降了几乎没人买：无弹性 **或** 供给/渠道未开 | **先查库存/限制/渠道**（问题树 §1.6–1.7 · P33）；排除后再谈价 |
| **D** | OCC↓ ADR↑ RevPAR↑ | 收紧低价有效 | 可守；看 Remaining 是否过早 |
| **E** | OCC↓ ADR↑ RevPAR↓ | 价过高或渠道关 | 走问题树 §13；勿与 B 混 |
| **F** | 双同向↑ | 真需求或份额升 | 问要不要再涨 / 关低价（非本卡主场景） |
| **G** | 双同向↓ | 市场弱或产品坏 | 市场弱 → 不砸 BAR（do-not-cut）；本店独弱 → 份额诊断 |

**Gross vs Net 叠加（必须）：**

```
模式 A 但 Net ADR↓ / Net Revenue↓
  → Gross「成功」作废；停深折 OTA，改结构或直销
  → 见 metrics/net-adr.md · channel/net-contribution.md
```

**Evidence：** 模式表 = B（与 metric-tree 因果表互证）；Net 叠加 = A/B（COPE/净贡献方法）。不升 S。

---

## 4. 与 how-much-to-move 的分工

| 卡 | 回答 | 不回答 |
| --- | --- | --- |
| **本卡** | 上一刀（围栏或 BAR）有没有把量赚回来？该不该停砍？ | 下一刀具体 % |
| **how-much-to-move** | 下一刀幅度档（E 围栏 −3–5%；F BAR −5–10%；G 禁一夜 −15%） | 「是否弹性够」的事后诊断 |

流程：

```
1 问题树诊断 → 允许动价
2 how-much-to-move 给第一刀（Hypothesis 幅度）
3 24–72h 后用本卡模式表读结果
4 若模式 B / C → stop-cut 卡；不要自动进 F 第二刀砸价
5 若模式 A → 守；第二刀仍受 how-much-to-move §6 触发器约束
```

幅度数字 **一律不改**：+5–8% / +8–15% / 围栏 −3–5% / BAR −5–10% / 禁止一夜 −15% / 价已最高只关不涨。

---

## 5. 可逆试验协议（Hypothesis）

不是科学 A/B。无本店历史时 Confidence 不得 High。

```
1 工具：优先围栏（预付/会员），BAR 不动；幅度走档 E（−3–5%）
2 范围：一个 Stay Date（或一小簇同 DOW 弱日）；写清 Room Type / Rate Plan
3 观察窗：24h 初读 Pickup；48–72h 再读；已过夜则读实际 OCC/ADR/RevPAR
4 成功：模式 A（RevPAR↑）且 Net 不坏
5 失败：模式 B 或 C → 停再砍；模式 C 先修供给
6 禁止：同时改价 + 开大促 + 改 MinLOS + 改渠道配额（无法归因）
7 禁止：宣称「测出本店 η=」
```

**Evidence：** Hypothesis / B。行业实证方向（危机期降价未必抬 RevPAR）见下节 A 级，不替代本店试验。

---

## 6. 公开证据（方向，非点 η）

| 论断 | 级 | 源 | 核对 |
| --- | --- | --- | --- |
| 弹性 = 量对价的反应；未知时用可逆小步 | S 书目 | Phillips 2e；Talluri 2004（书目页，不摘正文） | 2026-08-21 |
| OCC×ADR=RevPAR；降价抬 OCC 时乘积可升可降 | S / Fact | 会计恒等；`metric-tree.md` §2 | 已有 |
| 住宿需求常相对无弹性；危机期降价未必改善 RevPAR；抬价组相对降价组 RevPAR 渗透更好 | A | Cornell Hospitality Quarterly / PMC：Cross-Sectional Differences… COVID-19（Lee et al. 类研究，公开摘要）DOI 10.1177/19389655231184475；PMC10323521 | 2026-08-21 打开摘要；**不摘正文公式；不把样本 η 当本库默认** |
| 航空弹性表 → 酒店默认 η | — | **禁止** | — |
| 本店点弹性测量草案 | — | M7：等 feedback 10+ | NV |

搜索词（未升 Fact）：`hotel price elasticity RevPAR occupancy ADR directional`；优先 STR/Cornell，不采博客点估计。

---

## 7. Theory → Decision

| 理论点 | 决策 |
| --- | --- |
| 弹性未知 | 第一刀用围栏小步，不一夜 −15% |
| RevPAR = OCC×ADR | 「OCC 上来」不够；看乘积 |
| Gross ≠ Net | 模式 A 必须复检 Net |
| 假无弹性 | 先 P33 / 开库存，再谈价 |
| 机会成本 ≠ 弹性 | 团/关低价走 `optimization-advise.md`；本卡只管价动后的量价反应 |
| 幅度仍 Hypothesis | 下一刀不因「感觉弹性够」跳过 how-much-to-move 档位 |

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-EL-01 | 本店分 DOW / 细分 / 渠道的点弹性 | 只用模式表；等 M7 |
| NV-EL-02 | 中国 OTA 深折下的「显示价」与成交弹性 | 按用户合同；不编佣金% |
| NV-EL-03 | 公开酒店 η 数量级可复现表 | 不用；用 24–72h 间夜试验 |
| NV-EL-04 | Lee et al. 全文公式与样本边界 | 本轮只开摘要方向；不引用点 η |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 16:17 | 首版。方向诊断 + 模式表。无点 η。与 how-much-to-move / stop-cut 卡兼容。 |
| 2026-08-21 20:17 | 来源复盘：stop-cut 是 P02 第一刀之后的事后闸，不改第一刀数字。GOPPAR 1.5–2.0× ≠ 当晚 BAR。无 needs_revision。 |

---

## 10. 交叉（2026-08-22 08:17，不改模式表 / 不报 η）

OCC↑ RevPAR↓ = 模式 B 停砍。更差：OCC↑ **GOP↓** / Flow Through 负 → T19 `profit-contribution.md`，先查 mix 和成本，不是再降价。点弹性仍 NV。

## 11. 交叉（2026-08-23 08:17，不改模式表 / 不报 η）

质量/口碑驱动的转化塌 **不是** η 高的证据。评分掉了先修内容与近窗运营，不据此开 BAR 刀。见 `theory/reputation-vs-price.md` · `dont-cut-for-review-score.md`。点弹性仍 NV。
