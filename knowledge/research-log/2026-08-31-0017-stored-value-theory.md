# 2026-08-31 00:17 · T-Stored 储值卡/礼品卡/Prepaid Gift Card 是付款/负债工具，不是公开 BAR

> 槽：theory / 指标（小时 0 ∈ {0,8,16}）
> 资产：`theory/stored-value-vs-bar.md`
> 不写 P84。不重写 P83 正文（仅头一行理论指针）。邻卡仅文末一行。问题树 §90 仅加 Diagnose 指针，未写新枝 §91。
> Last Verified：2026-08-31

## 做了什么

22:17 已 drafted P83。本 theory 槽按 progress「00:17=theory；不要规定 P84」写 **T-Stored**：为什么储值卡 / 礼品卡 / Prepaid Gift Card 是付款/负债工具不是公开 BAR、SVS Issue / Post Redemption / SVS 接口 / USALI 负债行不是定价权、「储值才是市场价 / 太低所以跟 / 卖爆了改尺 / ADR 看脏」不是改尺令。

新开源（WebFetch 打开）：

1. OPERA Cloud 26.2 *Managing Prepaid (Gift) Cards*（Financial → Cashiering）— Issue / Reload / Balance / Transfer / Cash out；Interface = Stored Value System。**付款对象管理 ≠ Rate/BAR Type。**
2. OPERA Payment Interface Cloud 24.1 *Creating and configuring SVS property through OPERA Cloud* — Interface Type = SVS；Redeem Transaction Code；Cashier ID；Prepaid Card parameter；OPI Tenant prepaid endpoints。**支付接口配置 ≠ 公开灵活栅格。**
3. Hotel Online / Ralph Miller · USALI 11th interview（C）— Gift certificates and cards 从 Other Current Liabilities 拆成独立负债行；Misc 对 unused/forfeited gift certificates 有指引。**售卡 = 负债/未实现直至核销方向。** 不发明 STR 礼品卡 Rooms Include/Exclude；STR 礼品卡桶仍 **NV**。

升核 / 复核：

4. OPERA Cloud 26.2 *Managing Reservation Prepaid (Gift) Cards* — SVS Issue + Post to Room / Post Payment。升核 §88。
5. OPERA Cloud 24.3 *Redeem Prepaid (Gift) Cards* — Post Redemption = settlement。升核 §88（本小时 WebFetch 成功）。
6. HSMAI Academy *BAR* glossary — non-qualified publicly available。升核 §67。
7. IDeaS Glossary — BAR / Qualified Rate。指针升核 §85。

timeout / 空页 / 不用：

- OPERA Cloud 26.2 *Redeem Prepaid (Gift) Cards* WebFetch **再试仍失败**（落地页非文档），继续用 24.3，诚实标注。
- Mews *how-to-manage-gift-vouchers* / *How-to-redeem-a-Mews-Gift-Voucher* WebFetch **HTTP 500**（再试仍失败），不当核页。
- Hubifi / 随机博客 **不采用为 A**。
- 华住储值 SOP 未开、不编。
- 取消费专剧不开（仍 MEDIUM leftover）。
- STR 礼品卡 Rooms Include/Exclude 行 **仍 NV**（C 源只支持负债/Misc 方向）。

## 顾问可用性

用户说「储值抵房太低改 BAR / 储值卖爆了所以 BAR→399 / ADR 被储值看脏砍 BAR / 储值抵房才是市场价 / Issue Card·Post Redemption 就是公开价」→ Diagnose 走 **T-Stored**，过程仍 **P83**。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；折扣%/面值 Fact NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 付款/负债层；Diagnosis 写成储值付款不是公开 BAR；Recommended Action 拆尺 + Hold；What To Watch 公开 BAR 是否仍 Hold、储值是否仍关在 SVS/付款层。

## 兼容

无真矛盾，无 needs_revision。P83 三句 / 399-rejected / 799-Hypothesis 不改。22:17 写 P83 → 00:17 写 T-Stored = 槽序。P19 预付产品 / P74 券后 / P77 直播 / P49 兑房 / P82 停车 / P05 leftover 边界清楚。假尺子族兼容（含 T-Fee / T-Wholesale / T-Live）。P38/P14/P54 取消/noshow 仍 leftover 不入本卡。

## 刻意不补

P84；新剧本；取消费专剧；第二张主卡；华住储值 SOP；默认储值抵房折扣 %；礼品卡面值 Fact；STR 礼品卡 Rooms 桶 Fact；重写 P01–P83 正文；问题树新枝（§90 仅指针）；knowledge-map（T-Wholesale 同样 skip）。

## 下一槽

02:17 = case hour。**不规定 P84。** 不要把 **T-Stored / P83 / P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted。**
