# Decision Card: Don't Dump to Hit Month Target（月末差额 ≠ 全尾段砍价理由）

> 资产：Advisor Decision Card（P56）
> 路径：`recommendations/dont-dump-to-hit-month-target.md`
> 对应：问题树 §63；「还差几个点出租率」「本月差一笔收入」「下个月再涨回去」
> 剧本：`advisor-playbooks/month-end-budget-push.md`
> 配套：`metrics/mtd-pace-vs-budget.md` · T20 · T19 · P05 · P02 · P17 · P45 · P23 · P18 · P33
> 状态：active · 2026-08-26 10:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：A（Budget/Forecast 与 KPI 公式）；B（杠杆顺序）
> Last Verified：2026-08-26
> 仿真：`cases/sim-2026-month-end-occ-push.md`
> Advisor-First：建议，不操作系统、不自动定价。
> 禁止：blanket month-end dump；编考核/奖金/变动成本/弹性/佣金%；开 P57。

```yaml
decision: Reject a blanket public rate dump merely to close a month-end target; diagnose each stay date by Pace and Remaining; use non-repricing levers first; allow a bounded move only on genuinely Behind nights
scenario: GM or owner says month-end OCC/revenue is behind budget and asks to cut all remaining nights
required_inputs:
  - target_metric (OCC / Revenue / ADR / RevPAR; hotel grading and bonus basis NV)
  - MTD_actual_budget_forecast_LY
  - remaining_nights_OTB_pickup_pace_remaining
  - current_BAR_member_rate_restrictions_channels
  - hotel_net_rate_and_variable_cost_if_contribution_is_claimed
signals_for:
  - reporting_period_boundary_is_only_reason
  - at_least_one_night_ahead_or_thin
  - blanket_cut_reprices_baseline_remaining_production
  - gap_is_physically_unreachable
  - public_dump_would_undercut_member
signals_against:
  - a_specific_night_is_behind_with_thick_remaining_slow_pickup_and_open_supply
recommended_action: 不全砍。逐夜删掉 Ahead/薄夜；先追软客群、解 P33、开 P19 围栏、跟进 P10/P31/P41、过 P18，最后才在真 Behind 夜按 P02/P05 bounded move。先算 dilution 和物理可达性。
risk: OCC 达成但 ADR/Revenue/RevPAR 未达；稀释；借下月量；恢复失败；会员倒挂；贡献穿底
follow_up: per-night 24/48h net pickup; MTD forecast gap; next-month first-night pickup; public-vs-member parity
confidence: Medium; exact prices require hotel data
evidence_level: B
last_verified: 2026-08-26
```

## 1. 硬门

命中任一即拒 blanket dump：月底是唯一理由；有 Ahead/薄夜；未说明考核 KPI；未算稀释；全满也装不下缺口；会打穿会员/品牌底/贡献；限制、渠道或 Forecast miss 未拆。

## 2. 稀释门

```text
B = baseline remaining production; P0 = old rate; P1 = proposed rate; I = incremental rooms
Dilution = B × (P0 − P1)
Incremental gross = I × P1
Revenue-neutral minimum: I ≥ B × (P0 − P1) / P1
```

只用酒店自己的数。若谈 Profit，再扣用户给的渠道成本与变动成本；缺则 **NV**。

## 3. 杠杆顺序

**逐夜拆分 → 已知软客群 → 解 P33 → P19 浅预付/围栏 → P10/P31/P41 已在线索 → P18 gate → 真弱夜 P02/P05 bounded public move。**

## 4. 允许降价的唯一出口

某一具体夜同时 **Pace Behind + Remaining 厚 + Pickup 慢 + 供给/渠道开 + 限制不挡**，则可有界刺激。它不需要「月底」借口；理由必须写该夜需求。

## 5. 顾问出口

1. 「月底是账期边界，不是需求事实；Ahead 和薄夜不降。」
2. 「降价会稀释本来会卖的全部尾部生产；新增间夜赚不回价差，就不能说在补收入。」
3. 「早会只带走一个动作：剔除强夜，只在真弱夜开有截止日期围栏。」

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 10:17 CST | 首版。P56。逐夜 Pace；稀释门；物理可达性；真弱夜可 bounded move。 |
