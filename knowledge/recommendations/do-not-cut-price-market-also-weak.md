# Decision Card: Do Not Cut Price（市场也弱）

> 资产：Advisor Decision Card  
> 路径：`recommendations/do-not-cut-price-market-also-weak.md`  
> 对应：问题树 §1 问 4「市场也低」；§1.A 第 5 条；OCC Low + 弹性可能很差  
> 剧本：`advisor-playbooks/low-demand-day.md`（P02）  
> 配套仿真：`cases/sim-2026-weak-market-do-not-cut.md`  
> 状态：active · Wave3  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Do not cut BAR（市场同步弱）
scenario: Own OCC/OTB looks low AND market / Comp Set also soft
required_inputs:
  - DTA
  - OTB
  - Pickup
  - current_BAR
  - competitor_rate 与竞对是否也在降/空
  - market_or_comp_forward（至少定性）
  - inventory_channel_open
signals_for:
  - market_or_comp_also_soft
  - comps_cutting_or_empty
  - no_event
  - price_already_in_or_below_band
signals_against:
  - only_we_are_empty_market_hot
  - we_are_priced_clearly_above_all_bookable_comps
  - channels_closed
recommended_action: BAR 不动。先修供给/曝光。最多小配额围栏观察，不砸公开价、不跟自杀价
risk: 把「只有本店弱」误判成市场弱；错过 48h 份额窗口
follow_up: Comp Forward / 竞对价、本店 24/48h Pickup、渠道可订
confidence: Medium（方向）；「市场弱」无 Forward 数据时降为 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

用户原话常是「入住率好差，竞对也在降，我们要不要跟」。同时接近：

- 本店 OTB/OCC 看起来低，或 Pickup 慢。
- **市场家族同向弱：** Comp Forward OTB 也落后、竞对普遍空/在降、无事件、城市需求叙述弱。一条定性 + 一条价/空房旁证即可进卡，但必须标 Hypothesis 直到有 Forward 或 STAR。
- 降价抢的是**固定存量**，弹性可能很差（大家都没需求，不是份额差）。
- 供给至少看起来开着——若没开，先开，仍然**不因市场弱而降**。

**不要用：** 市场热只有本店空（那是份额，可能价高或产品，走 decrease 卡或渠道/产品）。竞对在涨或满房。事件日。

---

## 2. 为什么不降（机制，不是口号）

```
市场弱 → 需求曲线整体左移
本店降价 → 主要从竞对抢少量对价敏感的人，或谁也抢不到
公开 BAR 被打穿 → 后续日期与品牌带一起坏
跟最低竞对循环 → Price War（P16 未写成前：守当前 BAR，不自动跟到底）
```

这与「价明显高于市 + 只有本店慢 + 市场不弱」相反。后者才可能有弹性。

---

## 3. Signals For / Against

**For：** 竞对同样空或集体在降；无事件；本店价已在带内或已不贵；Pace Behind 但 Comp 也 Behind。  
**Against（离开，可能该降或该修供给）：** 只有本店空且市场 Forward 不弱；本店价明显高于全部可订竞对 **且** 转化差 **且** 市场不冰；渠道关了造成假空。

Against 里「价明显高 + 市场不冰」→ `decrease-bar-true-weak-demand.md`。  
Against 里「渠道关」→ 开渠道，**仍先不降**。

---

## 4. 推荐动作

```text
Stay Date:            <焦点日或弱段>
Rate Plan:            BAR 及连动公开价
Current:              <BAR>
Range / Preferred:    维持当前 BAR（±0）
Inventory:            只开误关；不关房制造假稀缺
Restriction:          淡日过严限制可解；不新设 MinLOS
Channel:              修复同步与曝光。拒绝「为曝光先报低价」的大促
Optional（品牌强迫要动作）:
  小配额围栏，折扣 −3–5%，配额 ≤ 剩余 20%（Hypothesis）
  BAR 仍然不动
Do-not-do:
  - 跟最低竞对循环降
  - 一夜 −15%
  - 把 Budget 缺口用砸价补齐
  - 说「适当跟一点」
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 补到 Comp Forward 后市场其实不弱、只有本店慢、价高 | 离开本卡，评 decrease 卡档 E |
| 24h Pickup ≥8 | 市场可能在恢复；继续不降，取消拟议促销 |
| ≥2 家竞对满或中位 +10% | 离开，评 Increase / High Demand |
| 用户已自行跟降 | 不自动再跟；重评位置，能守则守当前新价 |
| 主渠道不可订 | 只开库存，仍不降 |

---

## 6. 如果只能再补 3 个

1. Comp Forward 或「竞对这天 OTB/是否也空」（翻转市场弱 vs 份额差）。  
2. 本店 BAR vs 至少 3 家可订竞对（翻转「其实我们最贵」）。  
3. 渠道/房型是否真开着。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。与问题树 §1.4 / Slow Pickup E10 对齐。 |
