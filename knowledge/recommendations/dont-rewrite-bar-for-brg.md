# Decision Card: Don't Rewrite BAR for BRG（不要把最低价保证/贵就赔索赔写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-brg.md`  
> 对应：问题树「客人截图更便宜按最低价保证砍 BAR」「贵就赔所以 BAR 跟最低渠道」「被索赔了说明定价高了」  
> 剧本：P75 `advisor-playbooks/best-rate-guarantee-vs-bar.md`  
> 交叉：P59 真破平 · P36 不可比 · P60 错价 · P74 券后 · P42 前台 · P01 Ahead  
> 状态：active · SCOUT 2026-08-29 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor 品牌条款（动作方向）；赔付 % NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-brg-claim-sat.md`  
> 禁止：BAR→399「贵就赔 / 全网最低」；一夜 −15%；编华住贵就赔 SOP；把万豪/希尔顿 25% 写成店规；开 P76。

```yaml
decision: Do not treat a best-rate-guarantee / price-match claim as public BAR; do not rewrite BAR to the claimed rate
scenario: 客人截图美团更便宜按最低价保证把 BAR 砍下来；贵就赔所以 BAR 必须跟最低渠道；BRG 被索赔了说明定价高了
required_inputs:
  - stay_date
  - own_public_BAR
  - claimed_comparison_rate_if_any
  - whether_guest_already_booked_direct
  - like_for_like_checklist
  - own_pace_remaining
  - whether_property_has_brg_policy
signals_for:
  - user_equates_brg_claim_to_BAR
  - proposed_BAR_to_claimed_floor
  - screenshot_treated_as_validation
  - pace_ahead_or_on
signals_against:
  - true_parity_breach_same_product (go P59)
  - incomparable_screenshot (go P36)
  - mapping_error_or_delay (go P60)
  - coupon_after_or_platform_funded (go P74)
  - walk_in_match_ota_dump (go P42)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆索赔 vs 公开。核 like-for-like。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。本店政策/赔付% NV。禁一夜 −15%。399 只在 Simulation。
risk: 把一笔履约例外写成战略地板；Ahead 给会来的人打折；用不合格截图改尺
follow_up: 公开 BAR 是否仍 Hold；该笔索赔是否仍 like-for-like；24h 公开 Pickup
confidence: Pace+能拆索赔/公开则方向 Medium；点赔付% Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「客人截图美团更便宜，按最低价保证把 BAR 砍下来」「贵就赔所以 BAR 必须跟最低渠道」「BRG 被索赔了说明我们定价高了，公开价先对齐」。

主动词：**拆索赔 vs 公开 BAR** / **核 like-for-like** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「被索赔了」无 Pace、无是否已订直销——仍条件化：默认不把索赔当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用最低价保证/贵就赔理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开 BAR vs 一笔索赔是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 索赔价当新 BAR | 若是 → **拒绝** |
| 比价 like-for-like（同店同房同取消同含早） | 否 → P36 / P74 / P69 |
| 不是可比真破平 | → P59 |
| 不是错价/延迟 | → P60 |
| 不是前台未订上门跟 dump | → P42 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不改写 BAR） |

## 3. 默认动作（一句话）

BRG/贵就赔索赔≠公开 BAR；Ahead Hold 779–799 首选 799；有政策只动那一笔；不要 399；真弱才 P05 有窗围栏；本店赔付% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 14:17 CST | 首版。配 P75。 |

> 交叉指针（2026-08-29 16:17，不改正文）：理论卡 **T-BRG** `theory/brg-claim-vs-bar.md`。本卡不重写。不写 P76。

> 交叉指针（2026-08-29 18:17，不改正文）：索赔改尺仍本卡/P75。连住促销均价/免费晚改尺走 **P76**。不写 P77。

> 交叉指针（2026-08-30 06:17，不改正文）：索赔改尺仍本卡/P75（比价不含税费）。本店 all-in/Resort Fee 改尺走 **P79**。交叉 P79 resort-fee/all-in ≠ BRG。不写 P80。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本卡仍是 BRG 索赔。三句 / Hold 799 / 拒 399 **不改**。不规定 P88。
