# Decision Card: 不偷偷砸穿品牌底价

> 资产：Advisor Decision Card（T20）  
> 路径：`recommendations/do-not-break-brand-floor.md`  
> 对应：问题树 §39；用户原话「集团说品牌价不能低于 699，Pace 很差怎么办？」  
> 理论：`theory/revenue-strategy.md`  
> 配套：P02 / P16 / P23 / T19 · `dont-cut-to-hit-budget.md` · `ignore-comp-undercut.md` · `do-not-sell-below-contribution.md`  
> 状态：active · 2026-08-22 16:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A（HSMAI：公开 BAR 下须 qualified/fenced）；A Vendor（Duetto：最低价是 Min/Max Bounds）  
> Last Verified：2026-08-22  
> 禁止：编造 华住/锦江/首旅 最低价表；把用户没说的 699 写进建议；围栏穿底；一夜 −15%；静默 dump。

```yaml
decision: Hold user-stated brand/public floor; move fences/inventory/channels first; document any exception with Watch
scenario: User (or brand/cluster) states a minimum public rate; Pace is behind and someone wants to go below the floor
required_inputs:
  - Stay_Date + DTA
  - user_stated_floor（用户或品牌口头/书面的公开最低可售。没有 → 本卡不适用，不发明 699）
  - current_BAR
  - Pace vs STLY/curve + Pickup 3D/7D
  - inventory_channel_open + restrictions
  - proposed_rate（若已有人要破底）
signals_for:
  - user_stated_a_floor
  - proposed_rate_below_floor
  - silent_dump_to_match_comp
  - budget_gap_used_as_reason_to_pierce
  - fence_can_still_sit_above_floor
signals_against:
  - no_floor_stated（本卡 N/A）
  - written_commercial_exception_already_approved_with_end_date
  - inventory_closed_causing_false_behind（先开库存，仍不破底）
recommended_action: 有声明底 → Hold 底；先围栏/库存/渠道/限制。围栏 −3–5% 仍须 ≥ 底。仍死 → 书面例外+Watch，不偷偷砸穿。无声明底 → 不适用，不要发明 699。
risk: 把误关库存当成必须破底；例外没有截止日期变成新地板；用假 699 挡真弱需求
follow_up: 48h 净 Pickup；破底例外是否收回；围栏是否仍在底上
confidence: 有声明底则方向 Medium；无声明底 = 本卡不适用；具体 699 非库内 Fact
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

用户说的是 **「品牌/集团不让公开价低于 __，但 Pace 很差 / 竞对更低 / 预算在追」**。

主动词：**Hold 底 / 先围栏 / 先开库存 / 书面例外**。

**不要用 / 不适用：** 用户没有声明任何地板。此时 **不要** 补「华住 699」或「经济型不能低于 __」。改走 P02 检查单、P16、T19。本卡退出。

没有 Stay Date → 仍条件化（「若该日拟议价 < 你说的底，则不改公开 BAR」），不要说无法判断。

---

## 2. 硬门（有声明底时）

命中任一 → **不要把公开 BAR 砸到声明底以下**：

1. 拟议价 < 用户声明底  
2. 理由是预算差 / 排名 / 跟自杀竞对 / 「总比空着强」  
3. 库存或渠道误关造成假 Behind → **先开**，仍不破底  
4. 围栏可以停在底上（−3–5% 后仍 ≥ 底）→ **只开围栏**  
5. 净价会穿贡献（T19）→ 关该层，不是把 BAR 降到贡献以下  
6. 想一夜 BAR −15% 穿过底 → **拒绝**

P02 第一刀围栏 −3–5% **允许**，落点必须 **≥ 声明底**。穿底的围栏改配额或改产品名，不改地板。

---

## 3. 仍死：例外怎么写（不是默许 dump）

同时接近：Pace 持续 Behind 且 Pickup 塌、市场不冰、库存开着、围栏已试、限制不是堵需求的主因。

然后：

```text
Stay Date:
Current BAR:
User-stated floor:
Proposed exception:     <仍须 ≥ 贡献底；有截止日期>
Who approves:           Cluster / 品牌中央 / 业主（用户组织图；不编）
Watch:                  24/48h 净 Pickup
Do-not-do:
  - 静默砸穿、不记录
  - 把例外铺到整周/整月
  - 第三刀再破
  - 一夜 −15%
```

没有组织图 → 顾问只输出「需要升级的例外草稿」，**不假装已经批准**。

无声明底：整段 §3 不适用。

---

## 4. 推荐动作

```text
Stay Date:            <焦点日>
Rate Plan:            公开 BAR
Current:              <BAR>
User-stated floor:    <用户数字 或 「无 → 本卡 N/A」>
Range / Preferred:    Hold BAR（不低于声明底）
Fence:                −3–5%，配额 ≤ 剩余 20%（Hypothesis），且 ≥ 声明底
Inventory:            只开误关
Channel:              不参加会打穿底的公开大促
Exception:            默认无；若升级，书面+截止日期+Watch
Do-not-do:
  - 发明 699
  - 偷偷砸穿
  - 跟自杀竞对到底
  - 一夜 −15%
  - 用预算差当破底许可证
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 48h 围栏后 Pace 仍 ≤−8pp 且市场不冰 | 评书面例外草稿；仍禁止静默砸穿与一夜 −15% |
| 24h Pickup 恢复 | 收围栏；更不破底 |
| 发现库存昨天关着 | 只开库存 |
| 用户撤回「有地板」 | 离开本卡，改 P02/P16 |
| 例外已破底且 48h 无量 | **收回例外**，不是再砍 |

---

## 6. 如果只能再补 3 个

1. 用户声明的公开底（没有就写无）。  
2. 同 DTA Pace + 3D Pickup。  
3. 拟议价是公开 BAR 还是围栏/会员。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 16:17 | 首版。有底 Hold；无底不适用。不编 699。 |

---

## 8. 交叉（2026-08-23 20:17，不改品牌底公式）

P41 高峰合同夜 **560–650**（Simulation Hypothesis，若必须住）是 **合同层 Counter**，不是把公开 BAR dump 到合同价，也不是破本卡公开底。公开周末仍 Hold 779–799 首选 799。无声明底不发明 699。

## 9. 交叉（2026-08-28 02:17，不改品牌底公式）

RMS 建议穿声明底 → 仍 Hold 底（本卡）；跟不跟系统走 **P66**。系统建议不是破底许可证。无声明底不发明 699。

> 理论指针（2026-09-02 16:17 T02-16，不改正文）：Diagnose「地板当地板 / RATE_FLOOR 屏 / 无底发明 699」走 **T-Floor** `theory/rate-floor-vs-bar.md`；过程仍本卡 + T20。三句 / 有声明 Hold 底 / 无声明不发明 699 **不改**。§116。不开 P88。不开 P89。

> 仿真指针（2026-09-02 18:17 C02-18，不改正文）：Rate Floor / Min·Max 专卷 Simulation → `cases/sim-2026-rate-floor-minmax-sat.md`；Diagnose 走 **T-Floor**，过程仍本卡 + T20。三句 / 有声明 Hold 底 / 无声明不发明 699 **不改**。§117。不开 P88。不开 P89。

> 指针（2026-09-02 20:17 R02-20，不改正文）：§118 新开 protel Air Rate availability（日程 Min/Max rate ≠ BAR）+ Clock PMS+ Min/Max allowed prices（录入边界 ≠ rewrite）。Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699 **不改**。不开 P88。不开 P89。
