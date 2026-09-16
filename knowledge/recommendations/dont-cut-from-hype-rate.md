# Decision Card: Don’t Cut From Hype Rate（Rate Recovery Trap）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-cut-from-hype-rate.md`  
> 对应：问题树 §16 · §15 Forecast Error · 本轮 §28  
> 剧本：`advisor-playbooks/citywide-compression.md`（P32 虚火枝）  
> 绑定：P17 Forecast Miss（先改判断）· `do-not-cut-price-market-also-weak.md`（弱市不砸公开 BAR）· `event-pricing-first-cut.md`（Peak 仍可走第一刀，本卡管回落）  
> 不要与 `decrease-bar-true-weak-demand.md` 混用（那张卡要求供给已开、价真高、市场不冰，且对照的是可订竞对不是幻想价）  
> 状态：active · Scout 2026-08-21 11:00  
> 知识类型：Best Practice / Hypothesis（机制来自行业评论 C/D，不当事实）  
> 证据等级：机制 **C/D**；动作与已有启发式对齐 **B**  
> Last Verified：2026-08-21 11:00 CST

```yaml
decision: Do not cut from fantasy/hype rate to still-expensive; anchor to no-event baseline
scenario: Mega-event narrative priced in; Pace/Pickup behind the event story; someone wants to slash BAR (e.g. 1999→1299)
required_inputs:
  - Stay Date + DTA + OTB / Pickup（Peak vs 肩日分开）
  - current_BAR（是否已是事件幻想价）
  - no_event_baseline（STLY 同周无事件 BAR，或当前无事件可订竞对中位）
  - event_overlay_forecast（若有；声明那是 overlay 不是无事件曲线）
  - competitor_rate / 是否满
  - restriction_status
signals_for:
  - priced_off_event_narrative_not_pace
  - pace_behind_event_forecast_but_not_behind_no_event_baseline
  - proposed_cut_lands_still_above_replacement_demand
  - short_term_rental_or_group_block_release_diverted_sensitive_demand
  - public_ota_slash_would_retrain_market
signals_against:
  - peak_night_pace_actually_ahead_or_comps_full
  - current_BAR_already_in_no_event_band
  - we_are_clearly_above_all_bookable_no_event_comps_AND_channels_closed
  - event_cancelled_need_immediate_return_to_plain_band
recommended_action: 对照无事件基线，不对照事件价。禁止从幻想价砍到仍贵（1999→1299）。Peak 已证实才走事件第一刀；肩日不自动跟。公开渠道不广告式回落；要动就包装/直销落到无事件可订带。禁止一夜 −15%。
risk: 把真 Peak 也按虚火拆掉；或死守幻想价到入住；或公开砍价训练市场只认低价
follow_up: 无事件对照 Pace、肩日 Pickup、退块/短租叙事、公开渠道是否已露出中间价
confidence: 禁止幻想价回落 = Medium；落到哪条无事件带 = Hypothesis
evidence_level: C/D（机制）/ B（启发式兼容）
last_verified: 2026-08-21
```

---

## 1. 何时用这张卡

用户原话常是：「大赛周卖不动，从 1999 降到 1299 总能走一些吧。」同时接近：

- 价是按 **事件叙事 / overlay 预测** 挂上去的，不是按无事件 Pace 坐实的。  
- Pickup 相对事件预测落后；相对 **无事件 STLY** 可能并不差，或肩日根本没被带动。  
- 有人要把公开 BAR 从幻想价砍到一个「看起来已经让了」的中间价。

**不要用：**

- 比赛 / 开展夜 Pace Ahead 或 ≥2 家 Primary 满 → 回 P32 真压缩枝 / 事件第一刀；本卡不管「该不该涨」。  
- 当前 BAR 已经在无事件带里、市场也空 → `do-not-cut-price-market-also-weak.md`，不是本卡的回落问题。  
- 事件已取消 → **立即**回无事件带（P17 / P07 Trigger），这是撤 overlay，不是「从幻想价砍到仍贵」。  
- 价明显高于全部 **可订的无事件竞对** 且渠道关着 → 先开供给，仍不先公开砍到中间价。

---

## 2. 为什么不砍（机制假说，不是口号）

Rate Recovery Trap（行业评论 **C/D**，InnBrief 2026；**禁止**把文中 80%、$800、$1300 当本库事实）：

```
幻想价（事件叙事）→ 价格敏感客去短租 / 改期 / 不出门
中间价（仍贵）    → 替代需求仍然进不来；公开渠道记住「原来可以更低」
无事件基线        → 这才是替代需求会看的对照物
```

所以：

1. **对照物是去年无事件基线**（或当前无事件可订竞对），不是 1999，也不是事件 overlay。  
2. 从 1999 砍到 1299，若 1299 仍远高于无事件带，是一次 **无效且有伤害** 的动作：填不满，还训练市场。  
3. 一夜 −15% 已禁止；1999→1299 往往更深，双禁。  
4. 弱市 / 短租已分流：弹性可能很差，砸公开 BAR 抢不到存量（与弱市不降价同向）。

本库第一刀幅度 **不**因世界杯案例改成 +25–30%。Peak 真坐实时仍是 +8–15%。

---

## 3. Signals For / Against

**For（禁止幻想价回落）：** 价按叙事挂上；Pace 只相对事件预测落后；拟议新价仍明显高于无事件带；肩日没被带动；退块 / 签证 / 短租分流已发生；计划走 OTA 公开大降。

**Against（离开本卡）：** Peak 夜 Pace 真 Ahead 或竞对满（去事件第一刀）；BAR 已在无事件带（去 do-not-cut 或 P02）；事件取消必须立刻撤 overlay（那是回平日带，不是中间价）；渠道没开。

---

## 4. 推荐动作

```text
Stay Date:            Peak / 肩日分开写
Anchor:               无事件 STLY BAR 或无事件可订竞对中位（写数字）
Current BAR:          <当前，是否幻想价>
Event overlay:        声明「这是预测不是基线」
Price:
  Peak 已证实:        走事件第一刀；本卡不回落 Peak
  Peak 未证实 / 虚火: 公开 BAR 不从幻想价砍到仍贵
                      要动：包装 / 直销 / 围栏，落到无事件可订带附近
                      禁止广告式 1999→1299
                      禁止一夜 −15%
  肩日:               不自动跟 Peak；Open；Hold 或半档（仅自己 Ahead）
Inventory:            主 BAR 可订；不把「回落」当打开残价
Restriction:          未证实 Peak → 解开误伤肩日；MinLOS=2 只盖已证实 Peak
Channel:              不走 OTA 公开大降训练市场；直销包装优先
Do-not-do:
  - 「降到 1299 总能走一些」
  - 用事件价当 % 降价的起点
  - 整周同一中间价
  - 一夜 −15%
  - 把 80% / $800 / $1300 写进建议当事实
```

与已有启发式兼容：围栏 −3–5% 的「从哪」是 **无事件可订带**，不是幻想价。BAR 若必须降，档 E 仍 −5–10% 且禁止一夜 −15%——从 1999 起步的合法降幅也到不了替代需求，故 **宁可不做这次公开降**。

事件取消例外：立刻回无事件带是 **撤旗标**，允许一次到位，但仍避免在 OTA 标题写「原价 1999」。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 补到 Peak 夜 Pace 真 Ahead / 竞对满 | 离开本卡，走事件第一刀 |
| 肩日 24h 仍 0 | 确认 Open + 包装；不把中间价挂上去 |
| 公开渠道已露出 1299 类中间价 | 停继续砍；改包装/直销；不要再跟自己 |
| 无事件对照后其实 On Pace | Hold；改 Forecast，不改价 |
| 事件取消 | 立即无事件带（撤 overlay） |
| 市场补齐后是冰点且已在无事件带 | 走 do-not-cut，仍不砸 |

---

## 6. 如果只能再补 3 个

1. 无事件基线：STLY 同周 BAR 或当前无事件可订竞对。  
2. 当前价是按叙事挂的还是按 Pace 挂的。  
3. Peak vs 肩日分开的 3D Pickup。

缺 1：禁止任何从高位公开砍；只允许停涨 + 肩日 Open。

---

## 7. Confidence / 边界

禁止 1999→1299：方向可偏 Medium（伤害路径清楚）。  
无事件带落点：Hypothesis，必须用户给 STLY 或竞对。  
真 Peak 误用本卡：风险高 → 先核 C4 Pace。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 11:00 CST | 首版。P32 虚火回落卡。对照无事件基线。机制 C/D，数字不进库。 |
