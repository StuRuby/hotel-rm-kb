# Playbook P73｜闪促 / 秒杀 / 限时抢 vs 公开 BAR（闪促不是永久 BAR；不要把限时码写成新公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/flash-promo-vs-bar.md`  
> BACKLOG：P73 Flash / Limited-Time Promo vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **flash-promo-vs-bar**  
> 状态：**drafted**（2026-08-29 06:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-to-flash.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/flash-vs-public-bar.md`（公开 BAR vs 闪促挂牌 vs Pace；**无默认闪促折扣 %**；本店闪促 SOP NV）  
> 理论：`theory/promotion-window-vs-bar.md`（**T-Flash** · 2026-08-29 08:17；促销模块/Booking·Stay 窗/HIDE ≠ 定价权；过程仍本剧）
> 理论核源：OPERA Promotion Groups + Promotion Codes 有 Booking/Stay 窗；HIDE_PROMOTION_RATES；AltexSoft Promo/Flash vs BAR；PriceLabs Promo vs BAR
> 交叉：P18 报/不报平台促销 ≠ 本剧「改写公开 BAR」· P64 嵌套低档忘关 ≠ 限时窗改尺 · P68 对面开业 intro ≠ 自己的闪促 · P05 真弱 leftover · P23 会员闪 · P01 Ahead Hold  
> 问题树：§80 「闪促/秒杀不是永久公开 BAR」  
> 仿真：`cases/sim-2026-flash-promo-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Configuring Promotion Codes：价码挂 promotion；Booking/Stay 起止窗；HIDE 未选不显示 — §68；OPERA Controls PROMOTIONS_MODULE / HIDE_PROMOTION_RATES / PROMOTION_COUPON_CODES — §68）；C Vendor（PriceLabs 2026-07-13 Promo vs BAR：闪促有结束日；只有 BAR 策略变化才配战略响应 — §58/§68）  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆限时闪促码 vs 公开 BAR、Hold 公开 BAR、关/到期闪促码、拒绝把闪促价写成新 BAR；**不操作** PMS / OTA / 促销后台，不自动定价，不代开关秒杀。  
> 禁止：发明华住闪促 SOP、默认闪促折扣 %、佣金%、秒杀时长 Fact、699；一夜 −15%；BAR→399「闪促卖爆了」；把 14/399/799 当市场 Fact；开 P74；把报不报平台大促当本剧主刀（误入 P18）；把对面开业 intro 当本剧（误入 P68）。  
> 04:17「不要规定 P73」= recap 槽不得指定；本 scout 核实闪促改尺缺口后开。

---

## 0. 一句话

**闪促 / 秒杀 / 限时抢不是永久公开 BAR。** 先问这是 **有开始/结束窗的促销价码**，还是 **公开灵活 BAR**。OPERA 的 Promotion Codes 把价码挂在促销上，并有 Booking / Stay 起止日；HIDE_PROMOTION_RATES 开时，未选该促销则 Look to Book **不显示**那些价码——**是有窗的查询对象，不是默认公开尺**。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「闪促 399 卖爆了」把 BAR 改写成 399，也不要把过期闪促挂牌留作新 BAR。报不报平台活动 → **P18**。对面开业 intro → **P68**。嵌套低档忘关 → **P64**。真弱 → **P05**（可围栏+截止日，仍禁一夜 −15%）。本店闪促 SOP / 华住字段 = **NV，不编**。

完成定义：一张「先拆闪促 vs 公开 → Ahead Hold 公开 BAR → 拒改尺 / 关过期闪促 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 闪促挂牌 = 公开 BAR** | 「秒杀价就是我们的价」 | 用限时码当尺 | **拆闪促 vs 公开**；Hold 公开 BAR |
| **B BAR→399「闪促卖爆了」** | 「市场认这个价，BAR 改 399」 | 把战术窗写成战略尺 | **拒绝 BAR→399** |
| **C 窗过了还挂着** | 「限时抢结束了还是 399」 | 忘关/忘到期 | **关/到期闪促码**；不改写 BAR |
| **D 对面开业/连续闪促** | 「他们也在闪，我们要跟」 | 对象不同 | **P68** / **P16** |
| **E 真弱 leftover** | 「反正空，闪促地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |
| **F 报不报平台大促 / 会员闪** | 「要不要报这场」 | 报名闸 / 围栏 | **P18** / **P23** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是有开始/结束窗的闪促/秒杀/限时价码，还是公开灵活 BAR。闪促不是永久公开尺。本店闪促 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「闪促卖爆了」，也不要把过期闪促挂牌留作新 BAR。
3. 报不报平台活动走 P18。对面开业 intro 走 P68。嵌套/促销档忘关走 P64。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认闪促折扣 %、无「秒杀必须 X 小时」、无「卖爆了必须改 BAR」**。本店闪促 SOP / 华住字段 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Configuring Promotion Codes*（A Vendor，§68）：价码 **Attached** 到 promotion；**Booking Start/End**、**Stay Start/End** 定义窗；HIDE_PROMOTION_RATES 开则未选促销不展示。**促销是有窗对象，不是默认公开 BAR。**
- OPERA Cloud 26.2 *OPERA Controls — Rate Management*（A Vendor，§68）：PROMOTIONS_MODULE；HIDE_PROMOTION_RATES；PROMOTION_COUPON_CODES（limited-use）。**促销模块 ≠ BAR Type。**
- PriceLabs *Hotel Competitor Rates*（C Vendor，2026-07-13；§58/§68）：**Promo vs BAR** — 闪促有结束日；只有对方 BAR 策略变化才配战略响应；Ahead 匹配 = 给会来的人打折。**23% 日调价 / 曼彻斯特 24 间练习不进 Fact。**

本店闪促 SOP / 华住字段 / 默认折扣 % / 佣金% / 秒杀时长 Fact = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「闪促/秒杀」是有窗的促销价码，还是要改公开 BAR；②拟议是「改尺 / 闪促卖爆所以 BAR→399 / 窗过了还挂」还是「关闪促、Hold 公开」；③本店 Pace / Remaining，不是闪促卖得好不好听。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 闪促/秒杀挂牌（缺则问，不编）
- 闪促是否有明确 Booking/Stay 截止日；是否已过期还挂着
- 拟议：BAR 改成闪促价 / 跟平台闪购砍 BAR / 窗过了继续挂
- 本店闪促 SOP / 华住字段（NV 不编）
- 用户原话：「闪促 399 爆了 BAR 改 399」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完 BAR 也砍」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 有窗闪促码 vs 公开 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「卖爆了 / 市场认」？ | 形 B；拒绝 |
| D3 | 闪促窗是否已过还挂着？ | 形 C；关码，不改写 BAR |
| D4 | 对面开业 intro / 已开业连续砸？ | → P68 / P16 |
| D5 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D6 | 其实是报不报平台大促 / 会员闪？ | → P18 / P23 |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 闪促/秒杀挂牌。闪促有窗；公开尺不跟闪促跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **闪促本身**：需要战术量 → 保留/新开 **有截止日** 的闪促码或围栏；**不要**改写公开 BAR。窗到 → **关码**。
4. **形 C**：过期还挂 → 先关/到期，再看 Pace；不是「已经成了新 BAR」。
5. **误入移交**：报不报 → P18；开业 intro → P68；嵌套忘关 → P64；真弱 → P05。
6. **早会一个动作**（P45）：纠正「闪促≠BAR」+ Hold 公开 BAR（或关过期闪促）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认闪促折扣 %；无 Pace 就因「卖得好」改尺。

## 4. Why

- Vendor：促销价码挂 promotion、有 Booking/Stay 窗、可隐藏——设计上就不是默认公开 BAR。
- Practice：Promo 是战术、有结束日；把战术成交写成战略尺，会训练市场只认地板，且 Ahead 时等于给本来会来的人打折（PriceLabs）。
- Advisor：用户说「卖爆了所以改 BAR」时，先问 Pace 与是否有窗；卖得好更常是 **验证需求**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；闪促成交关在有窗码里。
- Risk：关闪促过猛伤害弱夜；或反过来把闪促永久化。
- Watch：公开 BAR 是否仍 Hold；闪促码是否仍带截止日；24h 公开 Pickup vs 闪促 Pickup（分码看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆闪促/公开）。点折扣 % / 秒杀时长 Low（NV）。Evidence A Vendor + C Vendor 实践。

## 7. Simulation 指针

见 `cases/sim-2026-flash-promo-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 06:17 CST | 首版。P73。闪促≠永久公开 BAR；Ahead Hold；拒改尺；关过期闪促。04:17 不规定 → 本 scout 核实后开。未开 P74。 |
| 2026-08-29 08:17 CST | 头一行理论指针 → **T-Flash** `theory/promotion-window-vs-bar.md`。三句 / 399-rejected / 799-Hypothesis **不改**。未开 P74。 |

> 交叉指针（2026-08-29 10:17，不改正文）：自己的闪促/秒杀改尺仍本剧。「美团券后 / 平台出资当公开 BAR」过程走 **P74** `ota-coupon-funded-vs-bar.md` · `dont-rewrite-bar-to-coupon-after.md`。不写 P75。
> 交叉指针（2026-08-29 14:17，不改正文）： 自己的闪促改尺仍本剧。「贵就赔/BRG 索赔改公开 BAR」过程走 **P75**。不写 P76。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。
