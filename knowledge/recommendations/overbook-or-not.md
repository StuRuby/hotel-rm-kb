# Decision Card: Overbook or Not

> 资产：Advisor Decision Card  
> 路径：`recommendations/overbook-or-not.md`  
> 对应：问题树 §10 / O11；P24  
> 理论：`overbooking/overbooking-framework.md`  
> 状态：active · Wave5  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Recommend whether to overbook; suggest direction not a magic room count
scenario: Near-full arrival date with cancellation / no-show uncertainty
required_inputs:
  - Stay Date + DTA + Remaining + already-overbooked amount
  - cancel / no-show history same DOW (or explicit "none")
  - prepaid vs refundable mix
  - walk cost or walk options (can be Unknown)
  - stayover / early-departure clue if any
signals_for:
  - dta_short_and_near_full
  - stable_late_cancel_no_show
  - refundable_share_high
  - walk_option_exists
signals_against:
  - no_history
  - prepaid_dominant
  - cancel_shock_or_event_cancel
  - walk_cost_unknown_and_high_loyalty_mix
  - large_unwashed_group
recommended_action: 只建议不执行。无历史不给精确间夜。有历史用期望晚取消+No-show−延住，输出区间+保守首选。平台罚则另节，未核额度不写
risk: Walk；历史失效；延住吃空；OTA 安置/佣金（Booking 帮页已核安置+佣金，中国平台额度 Unknown）
follow_up: 到达日未到清单、取消、延住
confidence: 方向最多 Medium；间数无分布时 Low
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户问「要不要超售」。先确认不是「价太低所以靠超售冲 OCC」——那种走 P03/P04。

DTA>7 且 Remaining 厚：默认 **不超**，用价和限额。

---

## 2. 动作表

```text
Stay Date:
已超:                  __ 间或 Unknown
建议:                  超 / 不超 / 停超
幅度:                  区间+首选   或  「今日不给间数」
前提:                  用了哪段取消史 / 无史
客层:                  优先超可取消层，不超会员/高价层（Hypothesis）
Do-not-do:
  - 无数字就报「超 5%」
  - 把建议写成已改 Sell Limit
  - 用 2026 监管案发明平台超售上限
```

幅度启发式（有点估计、无分布）见框架 §3.2：期望值的 50–100%，首选 50–70%。  
有 Walk 成本 + 分布：用 CR = Walk/(Walk+Empty)，仍给区间。

---

## 3. 平台（分开写）

- Booking.com 官方帮页（2026-08-20）：超售可能继续收佣，并要求承担安置；非中国监管额度。  
- 携程 2026-07-25 处罚：独家 + 全网最低价，**不是** Walk 间夜公式。  
- 中国 OTA 2026 Walk 罚则额度：**Unknown**。不问「平台允许超几间」。

---

## 4. Trigger

```
到达日下午 未到 < 已超或建议超
  → 建议停超，准备 Walk（建议话术，不执行）
24h 取消骤降或预付占比突然升高
  → 超售收到 0–下限
延住申请升
  → 次日建议超售下调
发现未洗大团
  → 重算，不按满房超
```

---

## 5. 只再补 3 个

1. 同 DOW 晚取消 + No-show 间夜（至少 8–12 个样本周）  
2. Walk 成本量级或可送协议店  
3. 可取消 vs 预付占比 + 当前已超数  

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。方向+风险+观察，不给魔法间数。 |

---

## 7. 今晚赶客（2026-08-21 14:17 CST 追加）

到达日「先赶谁 / 停不停接」不在本卡展开 → **`who-to-walk-first.md`** · P24 `overbooking-walk.md`。

本卡继续只答「要不要超、方向、今日不给间数」。已经或即将 Walk → 建议停超，把排序交给 P24。

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 14:17 CST | 交叉今晚程序卡。不改 §1–5 间夜规则。 |
| 2026-08-21 22:17 CST | 交叉 P28：天气取消潮取消史刚坏 → 停加超；无史仍不给间夜。 |

天气取消潮「还要不要超」→ **P28** `weather-disruption.md`（停加超）。到达日已经要赶客 → 仍 P24。

机组 wash / 爽约 → **P31** `airline-crew.md`：该块 Soft，禁止按硬房超售；无史仍不给间夜。不为幽灵机组房 Walk 散客（P24）。
