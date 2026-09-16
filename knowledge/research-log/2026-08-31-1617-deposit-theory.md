# 2026-08-31 16:17 · T-Deposit 押金 / 预授权是付款/担保/卡 hold 工具，不是公开 BAR

> 槽：theory / 指标（小时 16 ∈ {0,8,16}）
> 资产：`theory/deposit-preauth-vs-bar.md`
> 不写 P87。不重写 P86 正文（仅头一行理论指针 + 修订行）。邻卡仅文末一行。问题树 §93 仅加 Diagnose 指针，未写新枝 §94。不重写 `theory/optimization-advise.md` 正文。
> Last Verified：2026-08-31

## 做了什么

10:17 已 drafted P86。本 theory 槽按 progress「16:17=theory；不要规定 P87」写 **T-Deposit**：为什么押金 / 预授权（credit card authorization hold）是付款/担保/卡 hold 工具不是公开 BAR、Deposit Rules / Deposit Request / Authorization Rules / Cloudbeds Policy / Apaleo Auth 不是定价权、「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」不是改尺令。押金 leftover **已关为 P86**（10:17），本卡只加深 WHY。

新开源（WebFetch / curl 打开）：

1. OPERA Cloud 26.2 *Configuring Deposit Rules* — 升核 §94 的 26.1 twin；amounts/% + when due；rate code > reservation type > reservation。**配置 ≠ public flexible BAR。**
2. OPERA Cloud 26.2 *Configuring Deposit Rule Schedules* — advance deposit requirements；begin/end date。**日程表机械 ≠ BAR Type。**
3. OPERA Cloud 26.2 *Managing Reservation Deposit Payments* — Post Deposit / Post Unallocated Deposit。**过账 ≠ 公开栅格。**
4. OPERA Cloud 26.2 *OPERA Controls — Cashiering* — DEPOSIT HANDLING 激活 Deposit and Cancellation Rules/Schedule。**控制开关 ≠ BAR Type。**
5. OPERA Cloud 26.2 *Configuring Advanced Authorization Rules* — Financials → Cashiering Management → Authorization Rules；Amount applied to calculation rule。**配置屏 ≠ BAR Type。**（curl 200）
6. Cloudbeds *How to authorize a card with the payment gateway feature* — temporary hold without immediately charging；capture or void later。**hold ≠ 卖价。**（WebFetch timeout → curl 200）
7. Apaleo *Guarantee Types* — Prepayment = pay at booking；Credit Card / 6 pm Hold 是担保类型。**担保类型 ≠ BAR Type**（邻 P55/P19）。（WebFetch timeout → curl 200）

升核 / 复核（§94/§95 再开）：

8. OPERA Cloud 26.2 *Managing Reservation Deposit Request and Cancellation Policy* — WebFetch 成功升核。
9. OPERA Cloud 26.2 *About Credit Card Authorization Rules* — WebFetch 成功升核；Vendor $ 例 NOT China Fact。
10. Cloudbeds *Set up Deposit Policies* — WebFetch CF 壳 → curl 200 升核。
11. Apaleo *Payment Authorizations* — WebFetch timeout → curl 200 升核；Authorizations ≠ prepayments。
12. HSMAI Academy *BAR* glossary — WebFetch 成功升核（§67）。

指针：

13. OPERA *Configuring Reservation Types* Deposit 勾选 informational（§33）。
14. Cloudbeds authorize incidentals 同族（不当第四核）。
15. Apaleo Night Audit Prepayment Handling 薄页（不当核）。

timeout / 不用 / NV：

- 华住押金/预授权 SOP 未开、不编。
- 默认押金 % / 预授权金额 Fact / 佣金% / 699 **NV**。
- STR live deposit Rooms 桶 **仍 NV**（14:17 已确认无行）。
- OPERA $100/$20/$50、Cloudbeds 30 天 hold / USD 0.50 = Vendor 示意，不进中国 Fact / 不进 sim。
- Mews 本小时不重试（12:17 CSS Error）。
- Pet/AAA 仍停车。
- **不规定 / 不开 P87。**
- 不造 systems/cloudbeds.md / systems/apaleo.md / systems/mews.md。

## 顾问可用性

用户说「押金才是市场价改 BAR / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏砍 BAR / Deposit Rules·Auth Rules 屏就是公开价」→ Diagnose 走 **T-Deposit**，过程仍 **P86**。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；押金%/预授权额 NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 付款/hold 层；Diagnosis 写成押金/预授权不是公开 BAR；Recommended Action 拆尺 + Hold（Ahead 夜押金/preauth 不被允许改公开 BAR）；What To Watch 公开 BAR 是否仍 Hold、押金是否仍关在 Deposit、hold 是否仍关在 Authorization。

## 兼容

无真矛盾，无 needs_revision。P86 三句 / 399-rejected / 799-Hypothesis 不改。10:17 写 P86 → 16:17 写 T-Deposit = 槽序（中间 12:17 recap / 14:17 scout）。P55 担保释放 / P19 预付产品 / P84 取消费 / P83 储值 / P85 hurdle / P05 leftover 边界清楚。假尺子族兼容（含 T-Hurdle / T-Stored / T-Fee）。押金 leftover 已关，不入本卡为「仍 leftover」。

## 刻意不补

P87；新剧本；Pet/AAA；第二张主卡；华住押金/预授权 SOP；默认押金 %；预授权金额 Fact；STR live deposit 桶；重写 P01–P86 正文；重写 optimization-advise；问题树新枝（§93 仅指针）；knowledge-map；systems/cloudbeds|apaleo|mews.md。

## 下一槽

18:17 = case hour。**不规定 P87。** 不要把 **T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted。**
