# Decision Card: Don't Rewrite BAR for Parking / Valet / Garage（不要把停车费/valet/车库费写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-parking.md`  
> 对应：问题树「停车贵所以砍公开」「OTA 含停总价贵 BAR 也改」「ADR 被停车看脏砍 BAR」「竞对免停所以跟」「Fixed Charge 停车就是公开价」  
> 剧本：P82 `advisor-playbooks/parking-fee-vs-bar.md`  
> 交叉：P79 强制费/all-in · P36 竞对比价税/费 · P78 加床 · P69 含早 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-30 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A 协会 + A Vendor PMS（动作方向）；停车 % / valet % / 车库租金 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-parking-fee-sat.md`  
> 禁止：BAR→399「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」；一夜 −15%；编华住停车 SOP；开 P83。

```yaml
decision: Do not treat parking / valet / garage fee or OTA total-including-parking as public BAR; do not rewrite BAR from parking miscategorization or competitor free parking
scenario: 停车贵所以 BAR 改 399；OTA 含停总价贵所以跟；ADR 被停车看脏砍公开价；竞对免停所以公开也跟；Fixed Charge / Separate Line 停车就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - parking_valet_garage_or_ota_allin_including_parking_if_any
  - whether_hotel_operated_or_third_party_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_parking_or_allin_including_parking_to_BAR
  - proposed_BAR_to_parking_floor
  - ADR_pollution_from_parking_used_as_dump_reason
  - competitor_free_parking_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - competitor_shop_tax_fee_comparability (go P36)
  - resort_fee_service_allin (go P79)
  - extra_person (go P78)
  - breakfast_package (go P69)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆酒店自营停车/valet/车库 vs 第三方 Misc vs OTA 含停展示 vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。停车%/valet%/车库租金 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把含停总价写成战略地板；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P36 竞对含停可比当本店改尺
follow_up: 公开 BAR 是否仍 Hold；停车是否仍挂在 Fixed Charge / Package / Other Operated 或 Misc；24h 公开 vs 含停展示 Pickup
confidence: Pace+能拆停车/公开则方向 Medium；点停车% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「OTA 含停总价贵，BAR 改成 399」「停车贵所以砍公开」「ADR 被停车看脏了砍 BAR」「竞对免停所以我们也免、公开价跟下来」「Fixed Charge 停车就是我们的公开价」。

主动词：**拆停车/valet/车库 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「含停听起来贵」无 Pace——仍条件化：默认不把停车当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用停车费 / valet / 车库 / 含停总价 / 竞对免停理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 停车/valet/车库/含停展示是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 含停地板当新 BAR | 若是 → **拒绝** |
| 不是竞对比价含停 / Resort·服务费·all-in / 加床 / 含早 | → P36 / P79 / P78 / P69 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从停车费改写 BAR） |

## 3. 默认动作（一句话）

停车费/valet/车库≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店停车 SOP / 停车% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 18:17 CST | 首版。配 P82。停车费不再 leftover。不写 P83。 |

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
