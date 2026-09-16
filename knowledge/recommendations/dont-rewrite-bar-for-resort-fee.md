# Decision Card: Don't Rewrite BAR for Resort Fee / All-in（不要把强制费/服务费/含税总价写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-resort-fee.md`  
> 对应：问题树「OTA 总价贵 BAR 也改」「服务费吓跑砍公开价」「含税太贵所以跟」「ADR 被费项看脏砍 BAR」「all-in 就是公开价」  
> 剧本：P79 `advisor-playbooks/resort-fee-service-charge-vs-bar.md`  
> 交叉：P36 竞对比价税/费 · P69 含早套餐 · P78 加床 · P74 券后 · P75 BRG 不含税费 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · SCOUT 2026-08-30 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A 协会 + A Vendor PMS（动作方向）；费 % / 税率 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-resort-fee-allin-sat.md`  
> 禁止：BAR→399「总价贵 / 服务费吓跑 / 含税太贵 / ADR 看脏」；一夜 −15%；编华住费表 SOP；开 P80。

```yaml
decision: Do not treat Resort/Destination/Urban Fee / mandatory service charge / tax / OTA all-in as public BAR; do not rewrite BAR from fees
scenario: OTA 总价贵所以 BAR 改 399；服务费吓跑客人砍公开价；含税太贵所以跟；ADR 被 Resort Fee 看脏砍公开价；客人看到的 all-in 就是公开价；LTB Separate Line 加总就是 BAR
required_inputs:
  - stay_date
  - own_public_BAR
  - resort_destination_urban_fee_or_service_charge_or_tax_or_allin_if_any
  - whether_fee_layer_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_allin_or_fee_to_BAR
  - proposed_BAR_to_allin_or_fee_floor
  - ADR_pollution_from_fees_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - competitor_shop_tax_fee_comparability (go P36)
  - breakfast_package (go P69)
  - extra_person (go P78)
  - coupon_after (go P74)
  - brg_claim_excl_tax_fees (go P75)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆房价 vs Resort·Destination·Urban Fee vs 强制服务费 vs 税 vs OTA all-in vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。费%/税率 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把客人看到的 all-in 写成战略地板；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P36 竞对比价当本店改尺
follow_up: 公开 BAR 是否仍 Hold；费表/过账是否仍挂在费项；24h 公开 vs 含费 all-in 展示 Pickup
confidence: Pace+能拆房价/费/税/all-in 则方向 Medium；点费% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「OTA 总价贵，BAR 改成 399」「服务费吓跑客人，公开价砍下来」「含税太贵所以跟地板」「ADR 被 Resort Fee 看脏了砍 BAR」「客人看到的 all-in 才是我们的公开价」「Separate Line 加到 LTB 就是新 BAR」。

主动词：**拆费项/all-in vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「总价听起来贵」无 Pace——仍条件化：默认不把费项当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用 Resort Fee / 强制服务费 / 含税总价 / all-in 理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 费/税/all-in 是两把（多把）尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / all-in 地板当新 BAR | 若是 → **拒绝** |
| 不是竞对比价税/费 / 含早 / 加床 / 券后 / BRG | → P36 / P69 / P78 / P74 / P75 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从费项改写 BAR） |

## 3. 默认动作（一句话）

Resort Fee/强制服务费/含税总价/all-in≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店费表 / 费% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 06:17 CST | 首版。配 P79。 |

> 交叉指针（2026-08-30 10:17，不改正文）：费项/all-in 仍本卡；员工价改尺 → **P80** `dont-rewrite-bar-for-staff-rate.md`。不写 P81。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。

> 交叉指针（2026-09-02 08:17，不改正文）：税展示/城市税 Diagnose 走 **T-Tax** `theory/tax-display-city-tax-vs-bar.md`，过程仍 **P79**；强制费/all-in 仍 **T-Fee**。不规定 P88。
> 交叉指针（2026-09-02 10:17，不改正文）：税展示/城市税 Diagnose 走 **T-Tax** `theory/tax-display-city-tax-vs-bar.md`，过程仍 **P79**；专卷 Simulation → `cases/sim-2026-tax-display-city-tax-sat.md`（sibling all-in 仍本卡仿真）。三句 / 399 / 799 **不改**。不规定 P88。
