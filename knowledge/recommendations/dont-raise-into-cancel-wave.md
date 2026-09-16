# Decision Card: Don’t Raise Into a Cancel Wave

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-raise-into-cancel-wave.md`  
> 对应：问题树 §10 High Cancellation · §16 Event · 本轮 §32  
> 剧本：`advisor-playbooks/weather-disruption.md`（P28）  
> 绑定：P14 `treat-otb-as-soft.md` · P17 Forecast Miss · P02 `do-not-cut-price-market-also-weak.md` · P24 `overbook-or-not.md` / `who-to-walk-first.md` · P32 `dont-cut-from-hype-rate.md`（事后对照表亲）· P33 `do-not-cut-when-restricted.md`  
> 不要与 `increase-bar-pace-ahead.md` 混用（那张卡要求 Pace/Pickup 硬需求，不是取消潮里的 OTB%）  
> 状态：active · Scout 2026-08-21 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：过程 **B**；天气专页 Cornell/HSMAI **未找到**；STR 路径/撤离分叉 A/B 仅作诊断，不当幅度  
> Last Verified：2026-08-21 22:17 CST

```yaml
decision: Do not raise BAR into a weather cancel wave just because OTB looks high; treat OTB as Soft
scenario: Typhoon/rain/flight-train halt; OTB still high; user wants to raise, dump, or add overbooking
required_inputs:
  - weather_flag（官方预警或机场/铁路停运，或明确口述）
  - cancel vs new-book 24h/7D（或明确没有）
  - airport_or_train_status
  - DTA + Remaining + current_BAR
  - overbook_position
  - restriction_status
  - no_event_baseline（STLY 或无事件可订竞对；可 Unknown）
signals_for:
  - cancel_ge_newbook
  - transport_shut_or_official_warning
  - otb_looks_ahead_but_net_pickup_negative
  - cancel_history_just_broke
  - minlos_still_on_weather_night
signals_against:
  - no_weather_flag（回 P14 日常取消）
  - transport_open_and_cancel_back_to_own_history
  - airport_strand_walkin_up_and_inventory_already_open（态 D：仍不趁灾加价已确认单）
  - true_remaining_plus_price_clearly_above_all_bookable_comps_and_market_not_ice（才可能 P05/P02）
recommended_action: OTB 当 Soft，禁止按硬需求涨。交通停=消灭/平移，不按高峰涨。取消史刚坏停超，无史不给间夜。不要一夜 −15% 填坑。天气夜评估 Open MinLOS。事后对照无事件基线。
risk: 把滞留机场店当消灭而关库存；或把一团洗当台风；或真 Peak 交通未停却拆掉 MinLOS
follow_up: 24h 净 Pickup、交通是否恢复、取消是否回落本店史、相邻日 Pace
confidence: 停涨方向 Medium；围栏/降 BAR 落点 Low（须过 P02 十项）；超售间夜无史 Low=不给
evidence_level: B
last_verified: 2026-08-21
```

---

## 1. 何时用这张卡

用户原话常是：「台风/暴雨要来了，OTB 还很高要不要涨？取消了一块能不能降？要不要超售？」

同时接近：

- 取消在啃净 Pickup，或交通可能停。  
- OTB% 看起来 Ahead / 快满。  
- 有人要把 BAR 当高峰再抬一档，或当晚 −15% 填洞，或按旧取消史加超。

**不要用：**

- 无天气旗标 → P14。  
- 今晚已经要赶客 → P24 排序；本卡只答「还加不加油」（默认不加）。  
- 交通已恢复、取消回落、Pace 相对无事件基线仍 Ahead、价未最高 → 可离开，走普通 P01/P09，仍一天不跳最高。  
- 价已最高 → 只关不涨，不必进本卡辩论「再涨多少」。

---

## 2. 为什么不涨（机制，不是口号）

```
OTB 高 + 取消潮 = Soft 需求（P14）
交通停     = 需求消灭或平移，不是价高的证明
超售       = 依赖稳定晚取消/No-show 史；史刚坏则分布失效（P24）
砸 BAR     = 市场冰时弹性可能极差；一夜 −15% 已禁止（P02/P05）
MinLOS     = 可能挡住改期短住（P33）
事后       = 对照无事件基线，不对照风暴前幻想 OTB（P32 表亲）
```

Cornell/HSMAI 台风专页本轮 **未找到**。动作与已有启发式对齐 = **B**。不编取消%。

---

## 3. Signals For / Against

**For（停涨 + Soft + 停超）：** 取消≥新订；官方预警或交通停；净 Pickup≤0；Sell Limit 还开着；MinLOS 仍盖天气夜；用户要用 OTB 80% 论证涨价。

**Against（离开本卡）：** 无天气；交通通且取消回落本店史；本店是机场滞留且 walk-in 已发生（改态 D，价仍要稳、不加已确认单的价）；真清仓夜且市场不冰（P05，仍禁 −15%）。

---

## 4. 推荐动作

```text
Stay Date:
OTB:           Soft
Weather state: 消灭 / 平移 / 恐慌 / 滞留
Price:         不涨。默认 Hold 公开 BAR
               真弱+价高+供给开+市场不冰 才围栏 −3–5% 或 BAR −5–10%
               禁止一夜 −15%
Overbook:      停加超；无史不给间数；已超走 P24
Restriction:   天气夜评估 Open；已证实且交通仍通的 Peak 才留 MinLOS=2
Post-event:    Pace vs 无事件基线，不是 vs 风暴前 OTB
Do-not-do:
  - 「OTB 还高所以涨」
  - 取消潮里加大超售
  - 砸价填坑
  - 报行业取消率 / 超售 N 间 / 台风人次
  - 已确认订单事后加价
```

与启发式兼容：围栏 −3–5%；BAR −5–10%；禁一夜 −15%；价已最高只关不涨；无取消史不给精确超售间夜。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h 取消回落本店史 + 交通恢复 | 离开本卡，OTB 可再当硬信号 |
| 官方停运 | 当晚态 A：Hold、停超、Open 限制 |
| 已降一刀 OCC↑ RevPAR↓ | stop-cut，不再砍 |
| 价已最高仍要涨 | 只关不涨 |
| Remaining 真空且市场不冰且 DTA≤3 且交通已通 | 才评 P05 |

---

## 6. 如果只能再补 3 个

1. 交通是否停 + 哪几晚。  
2. 24h 取消 vs 新订。  
3. 无事件基线 BAR/OTB。

缺 2：停涨、停超、不报 %。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 22:17 CST | 首版。P28 取消潮停涨卡。 |
