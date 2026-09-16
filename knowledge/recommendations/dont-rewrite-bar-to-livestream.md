# Decision Card: Don't Rewrite BAR to Livestream / Host-Exclusive Price（不要把直播间成交价/主播专属价写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-to-livestream.md`  
> 对应：问题树「直播间卖爆了 BAR 也改」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」  
> 剧本：P77 `advisor-playbooks/live-commerce-stream-vs-bar.md`  
> 交叉：P18 报名闸 · P73 自己的闪促窗 · P74 券后 · P27 opaque · P69 含早套餐 · P05 真弱 · P01 Ahead  
> 状态：active · SCOUT 2026-08-29 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor/平台（动作方向）；直播折扣 % / 主播佣金% NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-livestream-sat.md`  
> 禁止：BAR→399「直播间卖爆了 / 主播价就是市场价」；一夜 −15%；编华住/抖音店规 SOP；开 P78。

```yaml
decision: Do not treat livestream / live-commerce / host-exclusive price as public BAR; do not rewrite BAR to stream deal
scenario: 直播间卖爆了所以 BAR 改主播价；主播价就是市场价；日历房挂 399 所以公开也得 399；不跟直播价就没人订
required_inputs:
  - stay_date
  - own_public_BAR
  - livestream_or_host_exclusive_price_if_any
  - whether_calendar_room_rateplan_or_presale_voucher
  - own_pace_remaining
  - whether_user_wants_to_change_own_BAR
signals_for:
  - user_equates_livestream_deal_to_BAR
  - proposed_BAR_to_host_exclusive
  - calendar_room_or_presale_treated_as_public_rate
  - pace_ahead_or_on
signals_against:
  - join_skip_campaign (go P18)
  - own_flash_window (go P73)
  - coupon_after_or_platform_funded (go P74)
  - opaque_package (go P27)
  - breakfast_package (go P69)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆直播商品 vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。直播折扣%/佣金% NV。禁一夜 −15%。399 只在 Simulation。
risk: 把橱窗/达人成交写成战略地板；Ahead 给会来的人打折；误把报名闸/闪促窗当改尺
follow_up: 公开 BAR 是否仍 Hold；直播商品是否仍带窗/库存帽；24h 公开 vs 直播通道 Pickup
confidence: Pace+能拆直播商品/公开则方向 Medium；点佣金% Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「直播间卖爆了，BAR 改成主播价」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」。

主动词：**拆直播商品 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「直播间很火」无 Pace——仍条件化：默认不把主播价当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用直播间成交/主播专属理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 直播商品是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 主播价当新 BAR | 若是 → **拒绝** |
| 不是报不报这场 / 自己的闪促窗 | → P18 / P73 |
| 不是券后 / opaque | → P74 / P27 |
| 不是含早套餐 | → P69 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不改写 BAR） |

## 3. 默认动作（一句话）

直播成交/主播专属≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店直播 SOP / 佣金% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 22:17 CST | 首版。配 P77。 |

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。
