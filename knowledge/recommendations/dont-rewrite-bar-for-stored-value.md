# Decision Card: Don't Rewrite BAR for Stored-value / Prepaid Gift Card（不要把储值卡/礼品卡抵房写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-stored-value.md`  
> 对应：问题树「储值抵房太低所以公开也得低」「储值卖爆了所以 BAR 改 399」「ADR 被储值看脏砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是公开价」  
> 剧本：P83 `advisor-playbooks/stored-value-gift-card-vs-bar.md`  
> 交叉：P19 预付不可退产品 · P74 券后 · P77 直播 · P49 兑房 · P38/P14 取消 · P54 noshow · P05 真弱 · P01 Ahead · P45 早会 · P82 停车（邻）  
> 状态：active · SCOUT 2026-08-30 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS（动作方向）；储值抵房折扣 % / 礼品卡面值 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-stored-value-sat.md`  
> 禁止：BAR→399「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」；一夜 −15%；编华住储值 SOP；开 P84。

```yaml
decision: Do not treat stored-value / prepaid gift card redemption or issue amount as public BAR; do not rewrite BAR from stored-value floor, sellout of cards, or ADR pollution from stored-value posting
scenario: 储值抵房太低所以 BAR 改 399；储值卖爆了所以跟；ADR 被储值看脏砍公开价；储值抵房才是市场价；SVS Issue Card / Post Redemption / Post to Room 就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - stored_value_gift_card_or_redemption_amount_if_any
  - whether_svs_payment_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_stored_value_or_gift_card_to_BAR
  - proposed_BAR_to_stored_value_floor
  - ADR_pollution_from_stored_value_used_as_dump_reason
  - stored_value_sellout_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - prepaid_nonrefundable_product (go P19)
  - ota_coupon_after_display (go P74)
  - livestream_exclusive (go P77)
  - loyalty_award_nights (go P49)
  - cancel_policy_or_high_cancel (go P38/P14)
  - noshow_revenue (go P54)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆储值卡/礼品卡/Prepaid Gift Card（SVS 发卡 + Post Redemption 付款）vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。储值抵房折扣%/礼品卡面值 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把储值抵房地板写成战略尺；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P19 预付产品当储值付款改尺
follow_up: 公开 BAR 是否仍 Hold；储值是否仍挂在 SVS Issue / Post Redemption；24h 公开 vs 储值核销 Pickup
confidence: Pace+能拆储值付款/公开则方向 Medium；点储值折扣% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「储值卡抵房价太低所以公开也得低」「储值卖爆了所以 BAR 改成 399」「ADR 被储值看脏了砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是我们的公开价」。

主动词：**拆储值/礼品卡付款 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「储值听起来低」无 Pace——仍条件化：默认不把储值当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用储值卡 / 礼品卡 / Prepaid Gift Card 抵房理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 储值/礼品卡付款是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 储值地板当新 BAR | 若是 → **拒绝** |
| 不是预付 NR 产品 / 券后 / 直播 / 兑房 / 取消 / noshow | → P19 / P74 / P77 / P49 / P38·P14 / P54 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从储值地板改写 BAR） |

## 3. 默认动作（一句话）

储值卡/礼品卡≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店储值 SOP / 储值折扣% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 22:17 CST | 首版。配 P83。储值卡不再 leftover。不写 P84。 |
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。不写 P87。
