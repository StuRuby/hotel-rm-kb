# Decision Card: Don't Raise BAR on Verbal Denials（前台说赶过人 ≠ 涨价令）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-raise-on-verbal-denials.md`  
> 对应：问题树「前台说赶过人」；用户原话「前台说今晚赶过好几拨人，要不要涨？」  
> 指标：`metrics/denials-regrets.md`  
> 理论：`forecasting/unconstrained-vs-constrained.md` · `forecasting/forecast-framework.md` §3.2  
> 交叉：P03 Remaining+Pace · P09 Ahead 仍要剩余 · P33 限制会制造拒单 · P42 上门成交是捕获需求不是拒单 · P40 高峰 MinLOS 挡短住  
> 状态：active · 2026-08-24 00:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A Vendor（Duetto Denial/Regret；IDeaS 勿把拒单流失当主数据）；口头故事当 Demand = Hypothesis 禁止  
> Last Verified：2026-08-24  
> 禁止：无日志就 Increase BAR；一夜 +15% / −15%；编中国 PMS 字段；编拒单%；编 Walk 成本；编华住 699；写 P43 全剧本（本小时只出卡）。

```yaml
decision: Do not Increase BAR off a verbal "we turned people away" story; demand a log; Hold and start logging if none exists
scenario: 前台/预订说今晚或某日赶过好几拨人，有人要用这件事论证涨 BAR
required_inputs:
  - Stay_Date（被赶走的是哪一晚，不是「今天前台忙」）
  - whether_a_log_exists
  - if log: count, room_type, reason, restriction_on, booked_elsewhere_if_known
  - Pace vs same DTA
  - Remaining sellable
  - current BAR vs 可订竞对
signals_for:
  - only_a_story_no_count_no_stay_date_no_reason
  - denials_are_restriction_or_closed_rate_on_a_weak_or_shoulder_night
  - denials_are_rate_regrets_and_pace_behind
  - zero_logged_denials_used_as_proof_of_weak_demand
signals_against:
  - clean_capacity_denials_plus_pace_ahead_plus_remaining_tight  # then P03/P09, not this card
  - walk_in_already_booked  # P42 captured demand, not a denial
recommended_action: 默认 Hold BAR。无日志 → 不要涨，明天起记（日期/间数/房型/原因/是否他订）。日志是限制制造 → P33 先松（已证实 Peak 的 MinLOS 不解）。日志是真容量拒单且 Ahead 且剩余紧 → 离开本卡走 P03/P09。价拒单+弱日 → 不要再涨。禁止一夜 ±15%。
risk: 把限制挡客或前台忙碌当成需求爆发而涨穿；或把 0 拒单当成没需求而乱降
follow_up: 次日是否开始有日志；该 Stay Date Pickup；限制是否仍开；Remaining 是否真紧
confidence: 无日志则方向 Medium（Hold）；点涨幅 Low；有干净容量拒单才把置信度交给 P03
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「前台说今晚赶过好几拨人，要不要涨？」「预订部说拒了好多电话。」「今天 0 拒单，是不是没人要、该降？」

主动词：**Hold / 要日志 / 先分原因 / 不自动涨。**  
不要用：已经有干净容量拒单 **且** Pace Ahead **且** Remaining 紧 → 那是 **P03/P09**，不是本卡的「禁止涨」。上门已经成交 → **P42**。

没有 Stay Date → 仍条件化 Hold，不要说无法判断，也不要涨。

---

## 2. 硬门（先不涨）

命中任一 → **不要**用这句话去 Increase BAR：

1. **只有故事，没有日志。** 缺 Stay Date / 件数 / 房型 / 原因。口头「好几拨」不是 Demand。  
2. **拒单发生在 Closed / MinLOS / CTA 夜，且该夜并非已证实 Peak。** 限制会生产拒单（P33）。先松限制，不要先 +BAR。已证实 Peak 的 MinLOS 挡 Sat-only → P40，**不解**高峰限制，也 **不**把挡掉的短住自动加成「再涨 15%」。  
3. **原因是报价后不订（regret / 价拒），且当天 Pace Behind 或市场不热。** BAR 可能已经偏高。不要再涨。  
4. **用 0 拒单论证需求死、要砸价。** 0 可能是没人记、价已经高、或限制把询单挡在系统外。禁止一夜 −15%。  
5. **把已成交的 walk-in 算进「赶过人」。** 成交是 P42 捕获需求。高峰上门更不该打折，也不是「所以再涨」的单独证据——涨不涨仍看剩余+Pace。

为「听起来很忙」而动价 **不是** 开门条件。

---

## 3. 何时可以离开本卡去动价（仍不是「按故事定价」）

日志 **存在** 且拆过原因之后：

| 重算结果 | 动作 |
| --- | --- |
| 真·容量拒单（满房/该房型可售=0）+ Pace Ahead + Remaining 紧 | **离开本卡 → P03。** 先关低价，再决定涨不涨。价已最高只关不涨。幅度走 P09 / how-much-to-move，**不是**本卡给 +15% |
| 真·容量拒单但 Remaining 并不紧，或 Pace 并不 Ahead | **Hold。** 日志是旁证，不是涨令。可能是房型错配或渠道配额假满 |
| 拒单主因是限制，非 Peak 或肩日被误伤 | **P33**：松该日限制；BAR 不动 |
| 拒单主因是限制，且是已证实 Peak 的 MinLOS | **P40/P21**：限制留着；不把挡掉的 1 晚加成再涨 |
| 价拒单 + 弱日 / Behind | **不要涨。** 弱日是否围栏另走 P02/P05；禁一夜 −15% |
| 无日志 | **Hold。** 布置明天的日志。不发明间数 |

无 Remaining、无 Pace，即使日志漂亮，也不许确定 Increase。

---

## 4. 动作表

```text
Stay Date:        被赶走的入住夜（必须钉死）
Log?:             无 → Hold BAR；布置：日期/件数/房型/原因/是否他订/当时限制
                  有 → 先分：容量 / 限制 / 价 / Unknown
Capacity + Ahead + Remaining tight → P03/P09（先关低价）
Restriction-made denials, not proven Peak → P33 先松，BAR 不动
Restriction on proven Peak → P40/P21，不解高峰 MinLOS，不自动加价
Rate regrets on weak day → 不涨；禁止一夜 −15%
Walk-in already sold → P42（捕获需求）；不跟 OTA dump
Zero logged denials → ≠ 需求死；不砸
Do-not-do:
  - 无日志 Increase BAR / 一夜 +15%
  - 把「赶过人」写成 Demand=Sold+好几拨
  - 编中国 PMS 字段 / 拒单% / Walk 成本 / 华住 699
  - 顾问代记 PMS
```

---

## 5. 顾问三句

```
1. 前台说赶过人，没有日志就不能当需求去涨价。
2. 拒单要记日期、房型、原因；限制挡掉的先走松限制，不是先加价。
3. 零拒单也不等于没人要，可能只是没人记。
```

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 00:17 CST | 首版。默认 Hold；要日志；真容量+Ahead+剩余紧才交 P03/P09。不写 P43。 |

---

## 7. 交叉（不改 §1–6）

Unconstrained 理论仍是 Vendor 估法；本卡只处理 **可观察代理**，日志不是 Demand 本身。P03 满房风险继续用 Remaining+Pace，不用前台故事开门。P33 CTA/MinLOS 会看起来像「很多人订不了」。P42 人已经在前台并且买了 = 捕获，不是拒单。P09 Ahead 仍要剩余，禁止用轶事一夜 ±15%。钟点房本轮仍空。

剧本见 P43 `../advisor-playbooks/verbal-denials.md`（2026-08-24 02:17）。
