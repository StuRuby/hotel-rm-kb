# Decision Card: Don't Rewrite BAR for Extra Person / 加床（不要把加床/第三人加项写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-extra-person.md`  
> 对应：问题树「三人住太贵 BAR 也改」「加床拉高均价所以跟」「儿童加床污染 ADR 砍 BAR」「人数阈值表就是公开价」  
> 剧本：P78 `advisor-playbooks/extra-person-vs-bar.md`  
> 交叉：P69 含早套餐 · P76 连住均价 · P05 真弱 · P01 Ahead · P45 早会 · P40 Sat-only  
> 状态：active · CASE 2026-08-30 02:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS（动作方向）；Extra Person % / 儿童费 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-extra-person-sat.md`  
> 禁止：BAR→399「加床太贵 / 三人住太贵」；一夜 −15%；编华住加床/儿童 SOP；开 P79。

```yaml
decision: Do not treat Extra Person / Extra Adult·Child / Occupant Threshold / 加床 add-on as public BAR; do not rewrite BAR from extras
scenario: 三人住太贵所以 BAR 改 399；加床拉高均价所以跟；儿童加床污染 ADR 砍公开价；人数阈值表就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - extra_adult_child_or_threshold_or_rollaway_if_any
  - whether_addon_on_reservation_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_extra_person_to_BAR
  - proposed_BAR_to_triple_or_addon_floor
  - ADR_pollution_from_extras_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - breakfast_package (go P69)
  - stay_pay_avg (go P76)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆加床/Extra Person/Occupant Threshold vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。Extra Person%/儿童费 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把该笔加项写成战略地板；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺
follow_up: 公开 BAR 是否仍 Hold；加项是否仍挂在价码/阈值表；24h 公开 vs 含 Extra Person 预订 Pickup
confidence: Pace+能拆加项/公开则方向 Medium；点 Extra Person% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「三人住太贵，BAR 改成 399」「加床拉高了均价所以公开价也得降」「儿童加床把 ADR 搞脏了砍 BAR」「人数阈值表就是我们的公开价」。

主动词：**拆加项 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「三人听起来贵」无 Pace——仍条件化：默认不把加项当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用 Extra Person / 加床 / Occupant Threshold 理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 加床加项是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 三人地板当新 BAR | 若是 → **拒绝** |
| 不是含早套餐 / 连住促销均价 | → P69 / P76 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从加项改写 BAR） |

## 3. 默认动作（一句话）

加床/Extra Person/Occupant Threshold≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店加床 SOP / Extra Person% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 02:17 CST | 首版。配 P78。 |

> 交叉指针（2026-08-30 06:17，不改正文）：加床加项仍本卡；Resort Fee/强制服务费/含税总价改尺 → **P79** `dont-rewrite-bar-for-resort-fee.md`。交叉 P79 resort-fee/all-in ≠ Extra Person。不写 P80。
> 交叉指针（2026-09-01 16:17，不改正文）：Diagnose 走 **T-Extra** `theory/extra-person-vs-bar.md`，过程仍 **P78**。主卡不重写。不规定 P88。
