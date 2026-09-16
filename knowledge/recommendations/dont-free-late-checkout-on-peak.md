# Decision Card: Don't Free Late Checkout on Peak（高峰不默认免费延退 / 不要砍过夜 BAR 安抚）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-free-late-checkout-on-peak.md`  
> 对应：问题树「延退免费可不可以」「嫌退房早要不要砍 BAR」  
> 剧本：P67 `advisor-playbooks/late-checkout-early-checkin.md`  
> 理论：Aydin & Birbil 2018 延退消耗当日产能 · Exely 可加价/禁止 · OPERA 排定退房时刻  
> 交叉：P46 整晚续住 ≠ 同日延退 · P44 钟点 · P63 吞吐 · P61 升房 · P01 Ahead · P45 早会  
> 状态：active · Scout 2026-08-28 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A 学术 + A Vendor（动作方向）；费表金额 NV  
> Last Verified：2026-08-28  
> 仿真：`cases/sim-2026-late-checkout-sat.md`  
> 禁止：高峰默认免费大批延退；BAR→399；一夜 −15%；编华住费表；€ 价带当中国 Fact；399 当行情；开 P68。

```yaml
decision: Do not grant free late checkout in bulk on peak/tight-turn days; do not cut overnight BAR to soothe checkout complaints
scenario: 延退免费可不可以；高峰延退挡下午到店；嫌 12 点走要不要砍 BAR；早到没房先占
required_inputs:
  - stay_date
  - public_overnight_BAR
  - pace_remaining_afternoon_arrivals
  - hk_morning_window_tight_or_not
  - request_hours_free_vs_paid
  - prior_guest_checked_out_and_turned_for_early_ci
signals_for:
  - peak_or_ahead_many_free_late_checkout_requests
  - sales_wants_BAR_399_because_guests_dislike_noon_checkout
  - early_ci_before_due_out_turned
signals_against:
  - weak_night_slack_afternoon_paid_late_checkout_ok_as_ancillary
  - full_night_extension (go P46)
  - day_use_product (go P44)
  - staff_cap_primary (go P63)
recommended_action: 高峰/Ahead/下午紧/HK 紧 → 不免费大批延退；拒/限额/收费（费表 NV）。过夜 BAR Hold 779–799 首选 799。拒绝 BAR→399。弱夜可付费延退附营仍 Hold BAR。早到须交回。禁一夜 −15%。399 只在 Simulation。
risk: 免费延退挡到店；用 BAR 买情绪；未交回双卖；与整晚/钟点混桶
follow_up: 免费 vs 收费批件数；下午未就绪；公开 BAR 是否仍 Hold；费表是否已知
confidence: Pace+到达分层则方向 Medium；点费 Low
evidence_level: A/B
last_verified: 2026-08-28
```

---

## 1. 何时用

「延退免费可不可以」「高峰会不会挡下午到店」「BAR 砍一点让他们高兴」「早到没房先占」。

主动词：**不免费大批（高峰）** / **Hold 过夜 BAR** / **可拒/限额/收费** / **弱夜付费附营** / **早到须交回**。  
不要用：只有一句「客人要延退」无 Pace、无下午到达——仍条件化：默认不免费大批，不要说无法判断就砍 BAR。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用免费大批延退烧高峰周转；不要砍过夜 BAR 安抚退房情绪**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认是同日小时不是加一晚 | → P46 |
| 不是钟点产品清库存 | → P44 |
| 拟议不是 BAR→399 | 若是 → **拒绝** |
| 早到已交回或明确等转房 | 未交回 → 拒占房 |

## 3. 默认动作（一句话）

高峰不免费大批延退；过夜 Hold 779–799 首选 799；不要 399；弱夜可收费延退；早到须交回；费表 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 06:17 CST | 首版。配 P67。 |

> 交叉指针（2026-08-28 08:17，不改正文）：Diagnose 走 **T-Late** `theory/late-checkout-turnover.md`；过程仍 **P67**。三句 / 399-rejected / 799-Hypothesis 不改。不写 P68。

> 交叉指针（2026-08-28 10:17，不改正文）：开业 intro 走 **P68**；本卡仍只回答延退。不写 P69。
