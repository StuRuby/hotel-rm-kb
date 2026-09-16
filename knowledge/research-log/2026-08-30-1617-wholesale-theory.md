# 2026-08-30 16:17 · T-Wholesale 批发/旅行社/GDS 净价不是公开 BAR

> 槽：theory / 指标（小时 16 ∈ {0,8,16}）
> 资产：`theory/wholesale-net-vs-bar.md`
> 不写 P82。不重写 P81 正文（仅头一行理论指针）。邻卡仅文末一行。问题树 §88 仅加 Diagnose 指针，未写新枝 §89。
> Last Verified：2026-08-30

## 做了什么

14:17 已 drafted P81。本 theory 槽按 progress「16:17=theory；不要规定 P82」写 **T-Wholesale**：为什么批发 / 旅行社 / GDS 净价不是公开 BAR、Channel Negotiated / Access Code / Wholesale Rate Class / HSMAI net / STR Wholesale 桶不是定价权、「批发才是市场价 / 净太低所以跟 / ADR 看脏」不是改尺令。

新开源（WebFetch 打开）：

1. OPERA Cloud 26.2 *Configuring Channel Rate Access* — Access Code 使能订到 discounted/negotiated 渠道价；字段含 Account、Type、Channel、Rate Plan、Access Code、起止日、Active。**渠道闸 ≠ 定价权。**
2. IDeaS *Hotel Revenue Management Glossary* — BAR = lowest non-restricted bookable by all guests；Qualified Rate 须资格；Net Rate = 扣佣/交易成本或 markup 前；Unqualified = 无合同无限制；Semi-Yieldable 常含 wholesale / corporate negotiated（LRA 关码约束）。**Vendor Methodology，不抄进 OPERA 字段名当店规。**
3. STR CoStar *Historical Benchmarking Data Reporting Guidelines* — Transient 子类含 Wholesale；wholesale / pay-when-booked 报 **net not gross**；Group 可含 Tour group/Wholesalers。**上报桶 ≠ BAR Type。**

升核 / 复核：

4. OPERA Cloud 26.2 *Managing Profile Channel Negotiated Rates* — Travel Agent / Company / Source + Access Code → GDS/OWS。升核 §84。
5. HSMAI Academy *Net Rate* — 进货底 + markup。升核 §84。
6. OPERA Cloud 26.2 *Managing Profile Negotiated Rates* — Commission Code 对 Travel Agent / Source 可用。升核 §82。
7. OPERA Rate Classes Wholesale 例 — 查询桶指针。

timeout / 空页 / 不用：

- HSMAI Academy *Rack rate* glossary WebFetch **timeout**，不当核页。
- Altexsoft 博客 **不采用为 A**。
- Consortia 10% / AHLA 85–95 / Cornell Budget-vs-Forecast **不进中国 Fact**。
- 华住批发/GDS SOP 未开、不编。
- 停车费专剧不开（仍 MEDIUM leftover）。

## 顾问可用性

用户说「批发价才是市场价改 BAR / 旅行社净价太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏砍 BAR / Wholesale 类就是公开价 / Access Code 所以跟」→ Diagnose 走 **T-Wholesale**，过程仍 **P81**。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；折扣%/佣金 Fact NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 渠道净层；Diagnosis 写成批发净不是公开 BAR；Recommended Action 拆尺 + Hold；What To Watch 公开 BAR 是否仍 Hold、批发码是否仍关在档案闸。

## 兼容

无真矛盾，无 needs_revision。P81 三句 / 399-rejected / 799-Hypothesis 不改。14:17 写 P81 → 16:17 写 T-Wholesale = 槽序。P20 净贡献 / P27 关漏出 / P71 年标 / P26 漏出 / P80 员工价 / P05 leftover 边界清楚。假尺子族兼容（含 T-Corp / T-Fee）。

## 刻意不补

P82；新剧本；停车费专剧；第二张主卡；华住批发/GDS SOP；默认批发折扣 %；佣金 Fact；Consortia 10%；重写 P01–P81 正文；问题树新枝（§88 仅指针）；knowledge-map（T-Fee 同样 skip）。

## 下一槽

18:17 = case hour。**不规定 P82。** 不要把 **T-Wholesale / P81 / P80 / T-Fee / P79 列为「下一轮要写」— 已 drafted。**
