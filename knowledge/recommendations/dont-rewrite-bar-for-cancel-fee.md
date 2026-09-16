# Decision Card: Don't Rewrite BAR for Cancellation / Attrition Fee（不要把取消/attrition FEE 写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-cancel-fee.md`  
> 对应：问题树「取消费才是市场价」「ADR 被取消费看脏砍 BAR」「attrition 罚金当地板」「取消费多说明价高所以 dump」「Cancellation Penalty 交易码就是公开价」  
> 剧本：P84 `advisor-playbooks/cancellation-attrition-fee-vs-bar.md`  
> 交叉：P14 高取消 Soft · P38 收窗 · P54 noshow · P52 团 cutoff · P62 rebook · P65 reinstate · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-31 02:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A 协会 + A Vendor PMS（动作方向）；取消费 % / attrition % Fact NV  
> Last Verified：2026-08-31  
> 仿真：`cases/sim-2026-cancel-fee-sat.md`  
> 禁止：BAR→399「取消费才是市场价 / ADR 被取消费看脏 / attrition 罚金当地板」；一夜 −15%；编华住取消/attrition SOP；开 P85。

```yaml
decision: Do not treat cancellation fee / group attrition fee posting as public BAR; do not rewrite BAR from cancel-fee miscategorization or attrition-penalty floor
scenario: 取消费才是市场价所以 BAR 改 399；ADR 被取消费看脏砍公开价；attrition 罚金当地板；取消费多说明价高所以 dump；Cancellation Penalty 交易码就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - cancel_or_attrition_fee_posting_if_any
  - whether_fee_posting_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_cancel_or_attrition_fee_to_BAR
  - proposed_BAR_to_cancel_fee_floor
  - ADR_pollution_from_cancel_fee_used_as_dump_reason
  - attrition_penalty_used_as_scale
  - pace_ahead_or_on
signals_against:
  - high_cancellation_soft_otb (go P14)
  - tighten_free_cancel_window (go P38)
  - transient_noshow (go P54)
  - group_cutoff_wash (go P52)
  - cancel_rebook (go P62)
  - reinstate_old_rate (go P65)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆取消/attrition FEE 过账（STR Misc Schedule 4；OPERA 专用交易码）vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。取消费%/attrition% NV。禁一夜 −15%。399 只在 Simulation。
risk: 把取消费写成战略地板；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P14 Soft / P54 noshow / P52 wash 当本店改尺
follow_up: 公开 BAR 是否仍 Hold；取消费是否仍挂在 Misc / Cancellation Penalty 交易码；24h 公开 vs 取消费过账
confidence: Pace+能拆取消费过账/公开则方向 Medium；点取消费% Low
evidence_level: A
last_verified: 2026-08-31
```

---

## 1. 何时用

「取消费才是市场价，BAR 改成 399」「ADR 被取消费看脏了砍 BAR」「attrition 罚金这么高说明定价高了」「取消费多说明价太高所以 dump」「Cancellation Penalty 交易码就是我们的公开价」。

主动词：**拆取消/attrition FEE 过账 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「取消费多」无 Pace——仍条件化：默认不把取消费当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用取消 FEE / 团 attrition FEE / ADR 被取消费看脏理由改写公开 BAR**。

顾问三句（与剧本同一套）：

```
1. 先问这是取消/attrition FEE 过账（STR：attrition + 散客 cutoff 后取消 → Misc Schedule 4；OPERA：专用交易码），还是要改公开灵活 BAR。取消费 ≠ 公开尺。本店取消/attrition SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「取消费才是市场价 / ADR 被取消费看脏 / attrition 罚金当地板」。
3. 高取消量走 P14。收窗走 P38。Noshow 房走 P54（noshow revenue IS Rooms）。团 cutoff/wash 走 P52。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从取消费地板改写公开 BAR）。
```

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 取消/attrition FEE 过账是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 取消费地板当新 BAR | 若是 → **拒绝** |
| 不是高取消 Soft / 收窗 / noshow / 团 cutoff / rebook / reinstate | → P14 / P38 / P54 / P52 / P62 / P65 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从取消费地板改写 BAR） |

## 3. 默认动作（一句话）

取消/attrition FEE≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店取消/attrition SOP / 取消费% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 02:17 CST | 首版。配 P84。取消费不再 leftover。当时不写 P85。 |
| 2026-08-31 06:17 CST | last-line：P85 于 06:17 已开（hurdle/LRV vs BAR）。不写 P86。 |
| 2026-08-31 10:17 CST | last-line：P86 于 10:17 已开（押金/预授权 vs BAR）。不写 P87。 |
