# Metric｜Stored-value / Gift Card vs Public BAR（轻）

> 路径：`metrics/stored-value-vs-public-bar.md`  
> 配：P83  
> 状态：drafted 2026-08-30 22:17  
> **无默认储值抵房折扣 %、无礼品卡面值 Fact、无「储值太低 = 必须砍 BAR」、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 储值卡 / 礼品卡 / Prepaid Gift Card 抵房金额，或客人看到的「用卡后价」（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 储值/礼品卡付款（OPERA：Stored Value System Issue Card；Post Redemption 结算；Post to Room / Post Payment）
  3. 发卡金额 / 卡余额（issue amount ≠ BAR Type）
- gap = 储值抵房价 − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成储值地板 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏所以砍」

## 不用来做什么

- 不推导「储值该抵多少 / 礼品卡该发多少面值 / 默认折扣 %」
- 不把储值 / 礼品卡 / Prepaid Gift Card 写成公开 BAR
- 不因「储值低 / 卖爆了 / ADR 被储值看脏」自动砍公开尺
- 不把 OPERA Vendor SVS 例、发卡流程写成中国店规或默认 %
- 不发明储值抵房折扣 % / 礼品卡面值 Fact / 佣金%
- 不把 P19 预付不可退产品开关当成「本店必须改 BAR」
- 不发明 STR 礼品卡 Include/Exclude 官方行（本小时 NV）

## OPERA / HSMAI 拆（读法不是改尺令）

| 层 | 系统 / 协会 | 对公开 BAR |
| --- | --- | --- |
| Issue Card + SVS Interface | OPERA：Stored Value System 发卡；Post to Room / Post Payment | ≠ BAR Type |
| Post Redemption | OPERA：核销金额 settlement of account balance；Payment(s) posted | 付款结算 ≠ 公开尺 |
| Offline Storage | 可不送 SVS partner 仍存卡 | 仍 ≠ BAR |
| HSMAI BAR | non-qualified, publicly available | 储值付款 ≠ BAR |
| 促销 e-Certificate | §71 指针 | **不是** SVS gift card |
| 礼品卡售出负债 / 未实现直至核销 | STR 官方桶 | **NV 本小时**；不编 |

ADR「被储值看脏」：储值折扣误记进 Rooms 会扭 ADR——**是读 posting，不是砍尺。**

## 调用

早会/调价前看：公开 BAR；储值/礼品卡是否被当成尺；有没有人要求 BAR→储值地板；ADR 是否被储值「看脏」却想砍尺；储值卖爆是否被当成跟价令。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁储值借口一夜 −15%；围栏须有截止日）。

本店储值 SOP / 华住字段 = **NV**。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
