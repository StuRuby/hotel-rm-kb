# Decision Card: Don't Dump Overnight for Day-use（不要用钟点砸过夜）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-dump-overnight-for-dayuse.md`  
> 对应：问题树「钟点房占晚房」；用户原话「下午钟点房卖得很火，晚上散客还接不接？」「钟点房 199 会不会把晚班 BAR 砸了？」  
> 剧本：P44 `advisor-playbooks/day-use-hourly.md`  
> 理论：T05 库存 · T08 瓶颈夜 · T19 贡献含加一次周转 · T20 不砸过夜地板  
> 交叉：P05 过夜战术围栏 ≠ 钟点产品 · P42 前台过夜 walk-in · P40 瓶颈夜可被钟点偷 · P37 OOO 不是钟点库存 · T19/T20  
> 状态：active · Scout 2026-08-24 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；STR day-use 口径 S；HSMAI 战术名 A；Mews/Dayuse/Prostay Vendor B  
> Last Verified：2026-08-24  
> 仿真：`cases/sim-2026-dayuse-199-vs-sat-bar.md`  
> 禁止：高峰用钟点占晚房；把钟点价写成过夜 BAR；一夜 −15%；编中国钟点价表；编保洁分钟；无成本说钟点总比空着强；编佣金%；199 当行情 Fact。

```yaml
decision: Do not occupy a sellable overnight with day-use/hourly when the night can still sell; day-use is incremental only if the room returns for evening arrival (or the night is ice) and net clears extra HK
scenario: 下午钟点很火晚上散客还接不接；钟点 199 会不会砸晚班 BAR
required_inputs:
  - stay_date_overnight_at_risk
  - public_overnight_BAR
  - sellable_remaining_overnight
  - pace_pickup_whether_ahead_or_ice
  - dayuse_checkout_deadline_vs_evening_arrivals
signals_for:
  - sales_wants_all_afternoon_hourly
  - proposed_dayuse_blocks_evening_or_closes_to_next_day
  - request_to_rewrite_overnight_BAR_to_hourly_price
  - peak_evening_pace_ahead
signals_against:
  - true_OOO_unreleased (go P37)
  - overnight_walkin_quote (go P42)
  - OTA_same_night_overnight_dump (go P05)
  - weak_weekday_and_room_returns_and_net_gt_contribution (optional open)
recommended_action: 高峰/Ahead/剩余偏紧 → 关或紧限额钟点；过夜 BAR Hold 779–799 首选 799（Hypothesis）。挡夜钟点当便宜过夜，不开。拒绝把钟点价写成过夜 BAR。弱平日且能交回（或晚市冰）且净过 T19（含加一次 HK）才开。禁一夜 −15%。199 只在 Simulation。
risk: 用小时收入替换整晚贡献；晚到进脏房；训练市场把钟点价当成过夜门市价；无成本把低价钟点当贡献
follow_up: 晚到 Pickup 是否仍在；钟点是否拖到入住后；公开过夜 BAR 有没有被改成钟点价
confidence: 交回判定+Pace 分层则方向 Medium；点价 Low
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「下午钟点卖得很火，晚上散客还接不接」「钟点 199 会不会砸晚班 BAR」。

主动词：**关或限额钟点** / **Hold 过夜 BAR** / **拒绝把钟点价写成过夜 BAR** / **弱日能交回才开**。  
不要用：只有一句「钟点好不好做」无日期、无过夜 BAR、无能否交回——仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用白天小时产品去占还能卖的过夜，也不要把钟点价写成过夜 BAR**。  
OTA 今夜过夜 dump 走 P05。前台过夜口价走 P42。OOO 走 P37。

---

## 2. 硬门（先不把晚房交给钟点 / 先不改过夜 BAR）

命中任一 → **不要把可售晚房交给会挡夜的钟点，也不要把钟点价写成公开过夜 BAR**：

1. 当晚过夜仍有需求信号（Pace Ahead、Pickup 正、剩余偏紧、竞对未冰）→ 钟点 **关或紧限额**；过夜 **BAR 或 Hold 带**  
2. 钟点交不回晚到（离店过晚 / 过夜钟点 / 房态关到次日 / HK 做不完）→ 当 **便宜过夜**，高峰不开  
3. 有人要把公开过夜 BAR 改成钟点价 / 一夜 −15% → **拒绝**  
4. 挡夜时拟议钟点净 ≪ 过夜贡献，或成本 Unknown 却要用已知深低的钟点去占未冰的夜 → **T19 关该产品**  
5. 有用户声明品牌底、拟议过夜价穿底 → **T20 不砸穿**  
6. Remaining 其实是 OOO → **P37**，不是开钟点的理由  

弱平日 + 晚市冰 + 能交回（或冰到交不回也没有过夜机会成本）→ 才评 **开钟点**。开了仍不是新过夜 BAR。净须盖住加一次 HK（用户给了成本才算）。

---

## 3. 何时可以开钟点

**仅形 D：** 过夜弱或晚市冰，且（房能在晚到前交回 **或** 当晚过夜已冰），且过完 P37（真可售）。产品是 **白天时段、有离店死线、有配额**，不是日历过夜 BAR。

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。钟点拟议 199 只在 Simulation 当销售提案，**不是** 过夜围栏，**不是** 新 BAR。相对 799，199 约 −75%，远超一夜 −15% 闸（679）。

仍须：能交回时 `钟点净 > 加一次 HK`；挡夜时还要盖住过夜贡献。无成本时：高峰 **不要** 用远低于过夜 BAR 的小时价占夜。

**过夜渠道** 若 P05 已开 dump：保持配额+截止；钟点 **另外** 一道产品。不要两道都写成低价过夜 BAR。

---

## 4. 动作表

```text
Stay Date:        被占的过夜夜
Demand overnight: 未冰 | 冰 | 未知（未知当未冰）
Can return:       能交回 | 不能 | 未知（未知高峰当不能）
Public overnight BAR: Hold；不改成钟点价
Day-use:          未冰/偏紧 → Close 或紧 Cap + 死线在晚到前
                  挡夜 → 不开（当 dump 过夜）
                  真弱且能交回或晚市冰 → 可开，净过 T19
Do-not-do:
  - 高峰全开钟点占晚到
  - 钟点价写成新过夜 BAR / 一夜 −15%
  - 无成本说总比空着强
  - 编钟点价表 / 保洁分钟 / 佣金% / 华住 SOP
  - 顾问代改房态
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 06:17 CST | 首版。P44。高峰关/限额钟点；过夜 Hold BAR；挡夜当 dump；拒改 BAR。弱日能交回才开。 |

---

## 6. 交叉（不改 §1–5）

P05 开过夜今夜围栏 ≠ 本卡允许用钟点占同一晚。P42 前台过夜口价另一道围栏。P40 同一瓶颈夜可被 Sat-only **或** 钟点偷。T19 加一次周转；挡夜扣过夜贡献。T20 无地板不发明 699；199 不是品牌底。P37 未释放 OOO 不是钟点库存。

> 交叉（2026-08-28 06:17）：延退/早到 → **P67**；本卡正文不改。
