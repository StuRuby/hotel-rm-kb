# Metric｜Cancellation / Attrition Fee vs Public BAR（轻）

> 路径：`metrics/cancel-attrition-fee-vs-public-bar.md`  
> 配：P84  
> 状态：drafted 2026-08-31 02:17  
> **无默认取消费 %、无 attrition %、无「取消费多 = 必须砍 BAR」、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 取消 FEE / 团 attrition FEE 过账金额或挂牌（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 取消 FEE / 团 attrition FEE 过账（OPERA：Cancellation Penalty Posting Transaction Code）
  3. STR 上报：attrition + transient cancellation after cutoff → **Miscellaneous Income Schedule 4**（不是 Rooms）
  4. Noshow **revenue** → Rooms（过程仍 **P54**；不要与 cancel fee 混桶）
- gap = 取消费累计 / 挂牌 − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成取消费地板 / 取消费才是市场价 / ADR 被取消费看脏所以砍 / attrition 罚金当地板」

## 不用来做什么

- 不推导「取消费该收多少 / attrition 该百分之几」
- 不把取消 FEE / attrition FEE 写成公开 BAR
- 不因「取消费多 / ADR 被取消费看脏 / attrition 罚金高」自动砍公开尺
- 不把 OPERA Vendor 交易码例、STR 上报口径写成中国店规或默认 %
- 不发明取消费 % / attrition % Fact / 佣金%
- 不把 P14 Soft 取消潮 / P54 noshow / P52 wash 当成「本店必须改 BAR」

## STR / OPERA 拆（读法不是改尺令）

| 层 | 上报 / 系统 | 对公开 BAR |
| --- | --- | --- |
| Group attrition + transient cancel after cutoff | STR Historical：**Miscellaneous Income Schedule 4**（Attrition Fees / Cancellation Fees） | ≠ BAR；≠ Rooms |
| Noshow revenue（guaranteed, failed to occupy） | STR Historical：**Rooms**（Other Rooms Revenue） | ≠ 本剧主刀；过程 **P54** |
| OPERA Cancellation Penalty Posting Transaction Code | Cashiering 设置：指定交易码 **过账** 取消罚金 | 过账 ≠ 改写公开尺 |
| Auto Post Cancellation Penalty | 取消时按规则过账到 folio | folio 过账 ≠ BAR Type |

ADR「被取消费看脏」：取消/attrition 误记进 Rooms 会抬/扭 ADR；应在 Misc Schedule 4——**都是读桶，不是砍尺。** Noshow revenue 正确进 Rooms 时，过程仍 P54，不要用「noshow 多」当本剧改尺令。

## 调用

早会/调价前看：公开 BAR；取消费/attrition 是否被当成尺；有没有人要求 BAR→取消费地板；ADR 是否被取消费「看脏」却想砍尺；是否把 noshow（Rooms）与 cancel fee（Misc）混桶。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁取消费借口一夜 −15%；围栏须有截止日）。

本店取消/attrition SOP / 华住字段 = **NV**。华住取消 SOP / 默认取消费 % / attrition % = **NV**。
