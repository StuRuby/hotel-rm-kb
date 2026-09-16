# Decision Card: Don't Rewrite BAR to Flash（不要把闪促/秒杀写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-to-flash.md`  
> 对应：问题树「闪促 399 爆了 BAR 改 399」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完 BAR 也砍」  
> 剧本：P73 `advisor-playbooks/flash-promo-vs-bar.md`  
> 理论：**T-Flash** `theory/promotion-window-vs-bar.md` · OPERA Promotion Groups/Codes 有窗 · HIDE · AltexSoft / PriceLabs Promo vs BAR  
> 交叉：P18 报名闸 · P64 忘关低档 · P68 开业 intro · P05 真弱 · P01 Ahead  
> 状态：active · SCOUT 2026-08-29 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor（动作方向）；闪促折扣 % NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-flash-promo-sat.md`  
> 禁止：BAR→399「闪促卖爆了」；一夜 −15%；编华住闪促 SOP；开 P74。

```yaml
decision: Do not treat time-boxed flash/promo as permanent public BAR; do not rewrite BAR to flash price
scenario: 闪促卖爆了所以 BAR 改 399；秒杀价就是我们的价；限时抢结束了还挂着；平台闪购跟完砍 BAR
required_inputs:
  - stay_date
  - own_public_BAR
  - flash_or_promo_rate_if_any
  - flash_booking_or_stay_window_if_known
  - own_pace_remaining
  - whether_user_wants_to_change_own_BAR
signals_for:
  - user_equates_flash_to_BAR
  - proposed_BAR_to_flash_floor
  - expired_flash_still_open
  - pace_ahead_or_on
signals_against:
  - join_skip_platform_campaign (go P18)
  - competitor_opening_intro (go P68)
  - nested_low_class_left_open (go P64)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆闪促 vs 公开。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。过期闪促先关码。折扣 % NV。禁一夜 −15%。399 只在 Simulation。
risk: 把战术成交写成战略地板；训练市场只认闪促价；Ahead 给会来的人打折
follow_up: 公开 BAR 是否仍 Hold；闪促是否仍带截止日；24h 公开 vs 闪促 Pickup
confidence: Pace+能拆闪促/公开则方向 Medium；点折扣 % Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「闪促 399 爆了，BAR 改成 399」「秒杀价就是我们的价了」「限时抢结束了还挂着 399」「平台闪购跟完，BAR 也砍」「闪促卖得好说明市场就认这个价」。

主动词：**拆闪促 vs 公开 BAR** / **Hold 公开 BAR** / **拒改尺** / **关过期闪促**。  
不要用：只有一句「闪促卖得好」无 Pace、无是否有窗——仍条件化：默认不把闪促当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用闪促/秒杀理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开 BAR vs 闪促挂牌是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 闪促当新 BAR | 若是 → **拒绝** |
| 不是报不报平台大促 | → P18 |
| 不是对面开业 intro / 嵌套忘关 | → P68 / P64 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不改写 BAR） |

## 3. 默认动作（一句话）

闪促≠公开 BAR；Ahead Hold 779–799 首选 799；过期先关码；不要 399；真弱才 P05 有窗围栏；本店折扣 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 06:17 CST | 首版。配 P73。 |

> 交叉指针（2026-08-29 08:17，不改正文）：Diagnose 走 **T-Flash**；过程仍 **P73**。三句 / 399-rejected / 799-Hypothesis 不改。不写 P74。

> 交叉指针（2026-08-29 10:17，不改正文）：闪促改尺仍本卡/P73。「券后/平台出资当新 BAR」走 **P74** `dont-rewrite-bar-to-coupon-after.md`。不写 P75。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。
