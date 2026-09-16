# Decision Card: Don't Rewrite BAR to Coupon-After（不要把券后价/平台出资写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-to-coupon-after.md`  
> 对应：问题树「美团券后 399 BAR 也改」「平台补完就是市场价」「客人截图券后便宜所以跟」「券卖得好说明就该这个价」  
> 剧本：P74 `advisor-playbooks/ota-coupon-funded-vs-bar.md`  
> 交叉：P59 真破平 · P36 不可比 · P20 净价 · P23 会员 · P73 闪促改尺 · P18 报名闸 · P01 Ahead  
> 状态：active · CASE 2026-08-29 10:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor（动作方向）；券折扣 % / 出资% NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-coupon-after-sat.md`  
> 禁止：BAR→399「券后市场认」；一夜 −15%；编华住/美团出资 SOP；开 P75。

```yaml
decision: Do not treat coupon-after or platform-funded display price as public BAR; do not rewrite BAR to coupon-after
scenario: 美团券后 399 所以 BAR 改 399；平台补完就是市场价；客人截图券后便宜所以跟；券卖得好说明就该这个价
required_inputs:
  - stay_date
  - own_public_BAR
  - coupon_after_or_platform_display_price_if_any
  - who_funds_discount_if_known
  - own_pace_remaining
  - whether_user_wants_to_change_own_BAR
signals_for:
  - user_equates_coupon_after_to_BAR
  - proposed_BAR_to_coupon_floor
  - platform_funded_treated_as_market_BAR
  - pace_ahead_or_on
signals_against:
  - true_parity_breach_same_product (go P59)
  - incomparable_screenshot (go P36)
  - own_flash_rewrite (go P73)
  - join_skip_campaign (go P18)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆券后 vs 公开。问谁出资。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。出资%/券门槛 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把平台展示层写成战略地板；Ahead 给会来的人打折；误修/误跟
follow_up: 公开 BAR 是否仍 Hold；券是否仍带资格/窗；24h 公开 vs 券通道 Pickup
confidence: Pace+能拆券后/公开则方向 Medium；点出资% Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「美团券后 399，我们 BAR 也改成 399」「平台补完客人只付 399，市场就认这个价」「客人截图券后便宜 80，跟一下」「券卖得好说明 BAR 太高了」。

主动词：**拆券后 vs 公开 BAR** / **问谁出资** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「券后好看」无 Pace、无谁出资——仍条件化：默认不把券后当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用券后/平台出资理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开 BAR vs 券后展示是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 券后当新 BAR | 若是 → **拒绝** |
| 不是不可比截图 | → P36 |
| 不是可比真破平（非平台自掏） | → P59 |
| 不是自己的闪促改尺 / 报不报活动 | → P73 / P18 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不改写 BAR） |

## 3. 默认动作（一句话）

券后/平台出资≠公开 BAR；Ahead Hold 779–799 首选 799；先问谁出资；不要 399；真弱才 P05 有窗围栏；本店出资% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 10:17 CST | 首版。配 P74。 |
> 交叉指针（2026-08-29 14:17，不改正文）： 券后改尺仍本卡/P74。索赔/贵就赔改尺走 **P75**。不写 P76。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 06:17，不改正文）：券后改尺仍本卡/P74。本店 all-in/Resort Fee 改尺走 **P79**。交叉 P79 resort-fee/all-in ≠ 券后。不写 P80。
