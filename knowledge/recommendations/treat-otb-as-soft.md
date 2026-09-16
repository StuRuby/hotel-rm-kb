# Decision Card: Treat OTB as Soft

> 资产：Advisor Decision Card  
> 路径：`recommendations/treat-otb-as-soft.md`  
> 对应：问题树 §10；P14  
> 剧本：`advisor-playbooks/high-cancellation.md`  
> 状态：active · Scout 2026-08-20  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: When cancellations are elevated, treat OTB% as soft demand; do not raise on it
scenario: Cancel nights eating net pickup; user still wants to raise on high OTB
required_inputs:
  - cancel vs new-book 24h/7D split by prepaid vs flex
  - whether just raised or event-cancelled
  - own-hotel same-DOW history or explicit none
signals_for:
  - cancel_ge_newbook
  - cancel_spike_after_increase
  - event_or_weather_cancel
signals_against:
  - one_off_group_wash
  - baseline_vs_own_history
  - denom_is_inquiries
recommended_action: OTB 当 Soft，禁止按硬需求涨。先诊断政策/涨价副作用/事件。可用 P19 弱日浅预付，禁止更深折扣锁单。无取消史不给超售间数
risk: 把一团洗当政策病；无史编行业取消%
follow_up: 净 Pickup、预付占比、取消是否回落
confidence: 方向 Medium；「正常」无史 Low
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

取消高、用户仍拿 OTB 70% 说该涨。主动词：**当 Soft / 停涨 / 收紧政策或开浅预付**。

「正常」= 本店同 DOW×同政策×同 DTA 窗。没有历史 → Unknown，不报博客 %。

---

## 2. 动作表

```text
Stay Date:
OTB:       Soft（不按硬需求涨）
Decision:  停涨 / 收紧免费窗（压缩日）/ 弱日开 AP −3–5% / 事件潮回平日带
Do-not-do: 行业取消率；更深折扣锁单；无史超 5%
```

---

## 3. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。 |
| 2026-08-21 22:17 CST | 交叉 P28：天气取消潮是 Soft 的外部旗标；停涨细节走 `dont-raise-into-cancel-wave.md`。 |

| 2026-08-22 18:17 CST | 交叉：机组爽约走 **P31**。天气走 P28。闸相同（OTB Soft、不涨、不硬超），病因不同。 |
| 2026-08-23 06:17 CST | 交叉 P38：Soft 也不等于砍 BAR 锁随时退。收窗走 `tighten-cancel-before-cut.md`。 |
