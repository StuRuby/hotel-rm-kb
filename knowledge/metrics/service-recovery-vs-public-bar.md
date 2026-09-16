# Metric｜Service Recovery / Folio Adjustment vs Public BAR（轻）

> 路径：`metrics/service-recovery-vs-public-bar.md`  
> 配：P87  
> 状态：drafted 2026-08-31 18:17  
> **无默认补偿 %、无「补了差价 = 必须砍 BAR」、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 本住 Service Recovery adjustment / rebate 金额（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 本住 folio Service Recovery / posting adjustment / rebate（OPERA：Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds：Adjust Charge）
  3. 邻：点评 SIGNAL → **P39**；BRG 已订直销索赔 → **P75**；计划 Comp → **P47**；取消 FEE 过账 → **P84**；储值付款 → **P83**；押金/预授权 → **P86**（不要与本剧混桶）
- gap = 补偿/adjustment 金额 − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成补偿地板 / 服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏所以砍」

## 不用来做什么

- 不推导「补偿该贴多少 / 默认补偿 %」
- 不把本住 Service Recovery / folio adjustment 写成公开 BAR
- 不因「服务失败 / 补了差价 / ADR 被减免看脏」自动砍公开尺
- 不把 OPERA Vendor 配置例（含 breakfast $10.00 / $63.60）写成中国店规或默认 %
- 不发明补偿 % / 佣金%
- 不把 P39 评分 / P75 BRG / P47 Comp / P84 取消 FEE / P83 储值 / P86 押金当成「本店必须改 BAR」

## OPERA / Cloudbeds / STR 拆（读法不是改尺令）

| 层 | 系统 | 对公开 BAR |
| --- | --- | --- |
| Post Service Recovery Adjustment | Amount or %；Department；Reason；track service recovery vs other adjustments | 过账 ≠ BAR |
| Post Adjustment / Allow Negative Postings | 固定额或原过账 %；negative Price/Quantity = rebate；Supplement mandatory for negative | rebate ≠ 改写公开尺 |
| Adjustment Reason Code Type Service Recovery | "resolution of an issue with a dissatisfied guest" | 原因码 ≠ BAR Type / 定价权 |
| Manually posting rate code charges | does NOT change rate code / room type / persons / rate on the reservation | 过账动作 ≠ 改预订卖价 |
| Cloudbeds Adjust Charge | separate transaction type；subtracts from guest debit/charge；does not subtract from payment（refund 才动付款） | folio adjustment ≠ public BAR rewrite |
| STR Rooms Revenue net of rebates/refunds/allowances | accounting net；service-related refunds reduce Rooms Revenue | **READ ADR，不是 rewrite-BAR order** |

ADR「被减免看脏」：allowance/rebate 显示很大时，可能扭财务观感——**都是读 posting，不是砍尺。** Vendor $ 例 **禁止**当中国 Fact。

## 调用

早会/调价前看：公开 BAR；本住补偿是否被当成尺；有没有人要求 BAR→补偿地板；ADR 是否被减免「看脏」却想砍尺；是否把点评 SIGNAL（P39）或 BRG 索赔（P75）与服务补偿改尺混谈。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁补偿借口一夜 −15%；围栏须有截止日）。

本店补偿 SOP / 华住字段 = **NV**。华住补偿 SOP / 默认补偿 % = **NV**。

> 源指针（2026-08-31 20:17 R31-20，不改正文）：§99 Apaleo *Adding and Moving Charges to a Folio*（Refund/Add allowance）+ HotelKey *Service Recovery*（negative charge / non-revenue；第三家 Vendor）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 理论指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。公式 / NV 列表 **不改**。不规定 P88。

> 源指针（2026-09-01 04:17 R01-04，不改正文）：§103 HotelKey Charge Types（Include in Revenue / Allow Adjustment ≠ BAR Type）。公式 / NV 列表 **不改**。不规定 P88。

