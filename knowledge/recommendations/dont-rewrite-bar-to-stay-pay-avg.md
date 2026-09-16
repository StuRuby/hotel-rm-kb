# Decision Card: Don't Rewrite BAR to Stay-Pay Average（不要把连住促销均价/免费晚摊平写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-to-stay-pay-avg.md`  
> 对应：问题树「住三付二均价才 399 BAR 也改」「连住促销算下来单晚就这个价」「过账节奏把免费晚摊平了所以公开价也跟」「客人说连住更划算所以单晚也得这个价」  
> 剧本：P76 `advisor-playbooks/stay-pay-promo-vs-bar.md`  
> 交叉：P21 节假日 MinLOS · P40 拒 Sat-only · P69 含早套餐 · P73 闪促 · P18 报名闸 · P05 真弱 · P01 Ahead  
> 状态：active · CASE 2026-08-29 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor（动作方向）；免费晚 % / 连住折扣 Fact NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-stay-pay-avg-sat.md`  
> 禁止：BAR→399「连住均价」；一夜 −15%；编华住连住促销 SOP；开 P77。

```yaml
decision: Do not treat Stay X Pay Y / free-night / posting-rhythm average as public BAR; do not rewrite BAR to promo average
scenario: 住三付二均价才 399 所以 BAR 改 399；连住促销算下来单晚就这个价；过账节奏把免费晚摊平了所以公开价也跟；客人说连住更划算所以单晚也得这个价
required_inputs:
  - stay_date
  - own_public_BAR
  - stay_pay_or_free_night_promo_if_any
  - whether_posting_rhythm_or_buy_x_get_y
  - own_pace_remaining
  - whether_user_wants_to_change_own_BAR
signals_for:
  - user_equates_stay_pay_avg_to_BAR
  - proposed_BAR_to_promo_average
  - posting_rhythm_zero_night_treated_as_public_rate
  - pace_ahead_or_on
signals_against:
  - holiday_calendar_minlos (go P21)
  - sat_only_peak_pattern (go P40)
  - breakfast_package (go P69)
  - own_flash_rewrite (go P73)
  - join_skip_campaign (go P18)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆连住促销 vs 公开单晚。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。免费晚%/折扣 Fact NV。禁一夜 −15%。399 只在 Simulation。
risk: 把促销摊平价写成战略地板；Ahead 给会来的人打折；误把 MinLOS/形态当改尺
follow_up: 公开 BAR 是否仍 Hold；连住促销是否仍带 LOS/资格；24h 公开 vs 连住促销通道 Pickup
confidence: Pace+能拆连住促销/公开则方向 Medium；点免费晚% Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「住三付二均价才 399，我们 BAR 也改成 399」「连住促销算下来单晚就这个价」「过账节奏把免费晚摊平了所以公开价也跟」「客人说连住更划算所以单晚也得这个价」。

主动词：**拆连住促销 vs 公开单晚 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「连住更划算」无 Pace——仍条件化：默认不把摊平价当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用连住促销均价/免费晚过账理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开单晚 BAR vs 连住促销/过账是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 连住均价当新 BAR | 若是 → **拒绝** |
| 不是节假日日历 MinLOS / Sat-only 形态 | → P21 / P40 |
| 不是含早套餐 | → P69 |
| 不是自己的闪促改尺 / 报不报活动 | → P73 / P18 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不改写 BAR） |

## 3. 默认动作（一句话）

连住促销均价/免费晚过账≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店免费晚% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 18:17 CST | 首版。配 P76。 |

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。
