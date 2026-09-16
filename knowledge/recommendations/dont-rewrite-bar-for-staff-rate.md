# Decision Card: Don't Rewrite BAR for Staff / Employee Rate（不要把员工价/付费员工折扣写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-staff-rate.md`  
> 对应：问题树「员工价就是市场价 BAR 也改」「员工价太低所以跟」「员工住满了砍公开」「ADR/OCC 被员工看脏砍 BAR」「STAFF 码就是公开价」  
> 剧本：P80 `advisor-playbooks/staff-employee-rate-vs-bar.md`  
> 交叉：P23 会员 · P47 Comp/HU · P71 年标 · P79 费/all-in · P63 人手产能 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-30 10:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS + A 协会（动作方向）；员工折扣 % / 配额 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-staff-rate-sat.md`  
> 禁止：BAR→399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开」；一夜 −15%；编华住员工价 SOP；开 P81；开停车费专剧。

```yaml
decision: Do not treat staff/employee rate or paid staff discount as public BAR; do not rewrite BAR from employee occupancy or employee ADR mix
scenario: 员工价就是市场价所以 BAR 改 399；员工价太低所以跟；员工住满了砍公开；OCC/ADR 被员工折扣看脏砍公开价；STAFF 码就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - staff_employee_rate_or_paid_discount_or_comp_hu_if_any
  - whether_qualified_staff_code_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_staff_rate_to_BAR
  - proposed_BAR_to_staff_floor
  - employee_occ_or_adr_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - member_vs_public (go P23)
  - complimentary_house_use (go P47)
  - corporate_annual (go P71)
  - resort_fee_allin (go P79)
  - staff_capacity (go P63)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆付费员工折扣码 / 员工旅居资格闸 / $0 Comp·HU vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。员工折扣%/配额 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把员工资格价写成战略地板；Ahead 给会来的人打折；误把 $0 Comp 当付费员工折扣；误为清洗 OCC/ADR 砍公开尺
follow_up: 公开 BAR 是否仍 Hold；员工码是否仍关在资格闸；24h 公开 vs 员工码 Pickup
confidence: Pace+能拆员工码/公开则方向 Medium；点员工折扣% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「员工价就是市场价，BAR 改成 399」「员工价太低所以跟」「员工住满了所以砍公开」「员工把 OCC 撑满了 / ADR 看脏了砍 BAR」「STAFF 码就是我们的公开价」。

主动词：**拆员工码 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「员工价听起来低」无 Pace——仍条件化：默认不把员工价当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用员工价 / 付费员工折扣 / 「员工住满了」理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 员工资格码是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 员工地板当新 BAR | 若是 → **拒绝** |
| 不是会员 / $0 Comp-HU / 年标 / 费 / 人手产能 | → P23 / P47 / P71 / P79 / P63 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从员工价改写 BAR） |

## 3. 默认动作（一句话）

员工价/Staff·Employee rate≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店员工价 SOP / 员工折扣% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 10:17 CST | 首版。配 P80。 |

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。

> 交叉指针（2026-09-01 08:17，不改正文）：Diagnose 走 **T-Employee** `theory/staff-employee-rate-vs-bar.md`，过程仍 **P80**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。≠ T-Staff。
