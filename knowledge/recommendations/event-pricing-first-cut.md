# Decision Card: Event Pricing First Cut（事件日第一刀）

> 资产：Advisor Decision Card  
> 路径：`recommendations/event-pricing-first-cut.md`  
> 对应：问题树 §16 Event Demand；P07 Concert/Event 的价格子程序  
> 剧本：`advisor-playbooks/high-demand-day.md`（P01）；完整事件剧本仍是 P07  
> 幅度：`pricing/how-much-to-move.md` 档 B/C/D；过程文件事件行  
> 状态：active · Wave3  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Event-day first price cut（不是自动暴涨）
scenario: Dated event + at least one demand corroboration
required_inputs:
  - event_date_venue_distance_overnight（缺则降权）
  - Stay Date 及 ±1 肩日 OTB / Pickup / Remaining
  - current_BAR
  - competitor_rate / 是否满
  - historical_event_or_plain_curve
  - restriction_status
signals_for:
  - event_date_matches
  - pace_or_pickup_or_comp_sellout
  - overnight_plausible
signals_against:
  - event_flag_only_no_overnight
  - pickup_is_one_group
  - event_cancelled
recommended_action: 第一刀收到最低～中位竞对或 +8–15%，不一次跳最高；关破价；MinLOS 缺肩日则今天不设
risk: 假 overnight；事件取消空挂；第一刀过头
follow_up: 24/48h Pickup、竞对满房、事件新闻、肩日 OTB
confidence: 方向 Medium（须有旁证）；幅度 Low–Medium
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

- 有**日期匹配**的事件（演唱会/赛事/展会/城市压缩），不是「这个城市总会有事」。
- **至少一条旁证：** Pace Ahead，或 Pickup Fast，或竞对涨/满。禁止用「有活动」单独定义 High Demand（BACKLOG P01 注意）。
- DTA 通常 3–30。

**不要用：** 只有旗标、无 overnight、无旁证 → 按普通 Pace，第一刀上限按非事件 Ahead（常是 +5% 或收到最低竞对）。事件已取消 → 立刻回到平日带。

---

## 2. 第一刀怎么定价（Hypothesis）

与 Increase BAR / how-much-to-move **同一尺**，事件只提高 Urgency，**不自动加大第一刀**：

| 旁证强度 | 第一刀 | 禁止 |
| --- | --- | --- |
| 旗标 + Pace/Pickup 一条，overnight Unknown | 档 A/B 下沿：+5–10% 或收到最低竞对 | 把幅度建在演唱会故事上；不上 1049+ 那种第二带 |
| 旗标 + Pace+Pickup + 价低 | 档 B/C：重叠带，首选中位偏低 | 第一刀 ≥ 最高竞对 |
| 旗标 + 竞对≥2 家满 + Fast | 档 B 上沿，允许 +15–20%；仍 ≤ 最高竞对 | 无 Trigger 连跳第三刀 |
| 价已最高 | 只关低价 / 评 MinLOS，**不涨** | 「事件还能再涨」 |

肩日（−1/+1）：不自动暴涨。IF 肩日 Pace 也 Ahead THEN 跟半档；ELSE 用连住包装，不单独砸/暴。

---

## 3. 库存与限制

```
关破价：任何公开可订 < 第一刀下限
MinLOS=2：仅 IF overnight 已证实 AND 肩日 OTB 明显低于高峰 AND 今天已有肩日数
ELSE 今天不设（Confidence Low）
不关 BAR 本身
```

---

## 4. 动作表

```text
Stay Date:            事件高峰夜
Current BAR:          <当前>
Range / Preferred:    按 §2 重叠带；必须写出数字
Inventory:            关破价；基础房可收低价配额
Restriction:          默认今天不设；见 §3 IF
Channel:              事件日默认拒会打穿新 BAR 的 OTA 大促
Do-not-do:
  - 无旁证暴涨
  - 第一刀跳过最高竞对
  - 事件结束后仍挂事件价
  - 肩日无数据一并暴涨
```

过程文件仿真：899→**999–1049，首选 1029**；演唱会细节未知，幅度不吃事件。本卡与该仿真一致。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h Pickup <3 | 回退到下限；证实无 overnight → 取消事件加码路径 |
| 24h ≥8 且非一团且竞对未降 | 第二刀 +3–8%，仍先碰到原最高竞对为止 |
| 事件取消/缩规模新闻 | **立即**回到平日带 |
| 单笔 Group ≥总房 13% | 停散客加码 |
| 肩日数据补齐且 overnight 实 | 评高峰 MinLOS=2 |

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。事件只加 Urgency，第一刀仍受「不跳最高竞对」约束。 |
