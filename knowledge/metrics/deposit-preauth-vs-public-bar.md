# Metric｜Deposit / Pre-authorization vs Public BAR（轻）

> 路径：`metrics/deposit-preauth-vs-public-bar.md`  
> 配：P86  
> 状态：drafted 2026-08-31 10:17  
> **无默认押金 %、无预授权金额 Fact、无「押金多 = 必须砍 BAR」、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 押金要求 / 已付押金金额（用户给；不编）
- 信用卡预授权 hold 金额（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 押金要求 / 押金过账（OPERA：Deposit Rules / Deposit Request / Deposit Payment）
  3. 信用卡预授权 hold（OPERA：Authorization Rules → anticipated expenses pre-authorization）
  4. 邻：担保类型/到点放房 → **P55**；取消费过账 → **P84**；储值付款 → **P83**（不要与本剧混桶）
- gap = 押金或预授权金额 − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成押金地板 / 押金才是市场价 / 预授权扣太多所以砍 / ADR 被押金看脏所以砍」

## 不用来做什么

- 不推导「押金该收多少 / 预授权该扣多少」
- 不把押金 / 预授权写成公开 BAR
- 不因「押金多 / 预授权高 / ADR 被押金看脏」自动砍公开尺
- 不把 OPERA Vendor 配置例（含 $100/$20/$50 auth 例）写成中国店规或默认 %
- 不发明押金 % / 预授权金额 Fact / 佣金%
- 不把 P55 担保放房 / P19 预付 NR / P84 取消费 / P83 储值当成「本店必须改 BAR」

## OPERA 拆（读法不是改尺令）

| 层 | 系统 | 对公开 BAR |
| --- | --- | --- |
| Deposit Rules / Deposit Schedules | Flat / Percentage / Percentage of Nightly Rate / Nights；rate code > reservation type > reservation | 配置 ≠ BAR |
| Deposit Request / Deposit Payment | 住前押金要求与付款 | 付款 ≠ 改写公开尺 |
| Authorization Rules | formula for anticipated expenses → credit card **pre-authorization**；Daily Rate = Room Rate + Add to Rate Packages + Fixed Charges + taxes | hold ≠ selling rate / BAR Type |
| Reservation Types Deposit 勾选 | informational；押金要求来自 deposit rule schedules（§33） | 信息勾选 ≠ BAR；过程邻 **P55** |

ADR「被押金看脏」：押金过账或预授权 hold 显示很大时，可能扭财务观感——**都是读 posting/hold，不是砍尺。** Vendor $ 例 **禁止**当中国 Fact。

## 调用

早会/调价前看：公开 BAR；押金/预授权是否被当成尺；有没有人要求 BAR→押金地板；ADR 是否被押金「看脏」却想砍尺；是否把担保放房（P55）与押金改尺混谈。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁押金借口一夜 −15%；围栏须有截止日）。

本店押金/预授权 SOP / 华住字段 = **NV**。华住押金/预授权 SOP / 默认押金 % / 预授权金额 = **NV**。

> 源指针（2026-08-31 12:17 R31-12，不改正文）：§95 Cloudbeds Deposit Policies + Apaleo Payment Authorizations。公式 / NV 列表 **不改**。不规定 P87。
> 理论指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit**，过程仍 **P86**。三句 / Hold 799 / 拒 399 **不改**。不规定 P87。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。公式 / NV 列表 **不改**。不规定 P88。
