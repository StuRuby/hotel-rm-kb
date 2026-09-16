# Promotion Window vs Public BAR｜闪促/秒杀不是永久公开 BAR

> 资产：T-Flash / T14 下一层（限时促销窗被允许改什么）· P18 报名闸孪生 · P64 忘关孪生 · P68 开业 intro 孪生
> 路径：`theory/promotion-window-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-29
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Configuring Promotion Groups*：Promotion Group = 按主题/渠道归类的活动桶（例 Summer Program；Program Type 如 radio/TV/Internet/Web/email）；先建 Group 再建 Code；Membership 开时 Profile group 自动建 — **§69 新开**；**活动桶 ≠ BAR Type**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Promotion Codes*：价码 **Attached** 到 promotion；**Booking Start/End**、**Stay Start/End** 定义窗；HIDE_PROMOTION_RATES 开则未选促销不展示；Limited use coupon；Update Outside Booking Dates = 窗过后可改预订，不是把码写成永久 BAR — **§69 升核 / §68 指针**）；A Vendor PMS（OPERA Cloud 26.2 *Controls — Rate Management*：PROMOTIONS_MODULE / HIDE_PROMOTION_RATES / PROMOTION_COUPON_CODES — **§68 指针**；**促销模块 ≠ BAR Type**）；C 实践（AltexSoft *Rack Rates, Wholesale Rates, BAR*，updated 2026-04-15：BAR = 某日某房型最低公开灵活基线，作折扣/日期/需求修改的锚；Promotional rates = **time-sensitive / limited period**；Flash sale = **temporary, steeply discounted, very short period** — **§69 新开**；Wyndham 10 日例 / 公式 $ / 10% 资格折扣 **不进中国 Fact**）；C Vendor（PriceLabs *Hotel Competitor Rates*，2026-07-13：Promo vs BAR — 闪促有结束日；只有对方 BAR 策略变化才配战略响应；Ahead 匹配 = 给会来的人打折 — **§68 指针**；23% / 曼彻斯特例不进 Fact）；B / Hypothesis（Ahead Hold 779–799 首选 799；不要 BAR→399「闪促卖爆了」；过期先关码）
> 配套：`advisor-playbooks/flash-promo-vs-bar.md`（P73 过程）· `recommendations/dont-rewrite-bar-to-flash.md`（主卡复用，不重写）· `metrics/flash-vs-public-bar.md`（轻指标；**无默认闪促折扣 %**，公式不重写）· `cases/sim-2026-flash-promo-sat.md`（Simulation）
> 交叉：P18 报/不报平台大促 ≠ 本卡「改写公开 BAR」· P64 嵌套低档忘关 ≠ 限时窗改尺 · P68 对面开业 intro ≠ 自己的闪促 · P05 真弱 leftover · P23 会员闪 · P01 Ahead · T-Package / T-Corp / T-Parity / T-Share（假尺子一族）
> 问题树：§80「闪促/秒杀不是永久公开 BAR」（过程路由已够；本卡给「为什么限时窗不是公开 BAR、促销模块/Booking·Stay 窗/HIDE 不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 促销后台，不自动改价，不代开关秒杀。**
> 状态：**理论 drafted**（2026-08-29 08:17 CST）。**不写 P74，不写新剧本。** 禁止：编华住闪促 SOP / 默认闪促折扣 % / 佣金% / 秒杀时长 Fact / 699；一夜 −15%；BAR→399「闪促卖爆了」；把过期闪促挂牌留作新 BAR；把 14/399/799 当市场 Fact；把 AltexSoft Wyndham 10 日 / Propeter 24–48h 写成必须时长；把 OPERA Program Type 写成渠道定价令；重写 `flash-vs-public-bar.md` 公式；重写 P01–P73 正文（P73 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**闪促 / 秒杀 / 限时抢是有开始/结束窗的促销对象，不是永久公开 BAR。**
系统能把价码挂到 Promotion Code、能设 Booking/Stay 起止、能 HIDE 未选促销的码、能按主题建 Promotion Group，只证明「有窗 / 有查询闸 / 有活动桶」，不证明「公开灵活价该跟到 399」或「卖爆了所以 BAR 改成闪促价」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「闪促 399 卖爆了」把 BAR 改写成 399，也不要把过期闪促挂牌留作新 BAR。本店闪促 SOP / 华住字段 / 默认折扣% / 秒杀时长 Fact = **全部 NV**。

```
Naive（禁止）     秒杀价就是我们的价；闪促爆了 BAR 改 399；
                  限时抢结束了还挂着；平台闪购跟完公开尺也砍
本卡              先拆三把价（公开 BAR / 闪促挂牌 / 窗状态）。
                  促销模块/Booking·Stay 窗/HIDE ≠ 定价权。过程走 P73。
```

完成标准：用户说「闪促 399 爆了改 BAR」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完砍 BAR」→ Situation 写成**三把价 + Pace/Remaining + 窗是否过**；Diagnosis 写成闪促不是永久公开 BAR、促销窗不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、闪促是否仍带截止日、折扣是否仍 NV。**不 dump 399、不把闪促当新 BAR、不写 P74。**

顾问必须能直接说的三句（与 P73 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问是有开始/结束窗的闪促/秒杀/限时价码，还是公开灵活 BAR。闪促不是永久公开尺。本店闪促 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。不要 BAR→399「闪促卖爆了」，也不要把过期闪促挂牌留作新 BAR。
3. 报不报平台活动走 P18。对面开业 intro 走 P68。嵌套/促销档忘关走 P64。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

独立默认（本库 Hypothesis）：**闪促/秒杀挂牌回答不了「今晚公开灵活该卖多少」。** 它回答「这条限时码还在不在窗里、挂牌是多少」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把闪促写成新 BAR。禁止编默认闪促折扣 %。禁止编秒杀时长 Fact。**

---

## 1. 三把价：公开 BAR / 闪促挂牌 / 窗状态

顾问问题不是「系统里能不能配闪促」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、无限时窗） | Ahead Hold；真弱才 P05（仍这把尺） | 当成闪促地板；砍到「卖爆了所以改尺」 |
| **Flash / promo shelf** | 挂在 Promotion 上的限时挂牌（有 Booking/Stay 窗） | 可留独立码；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Window state** | Booking/Stay 是否仍开；是否已过还挂；HIDE 是否挡住未选查询 | 窗到 → 关/到期；诊断：过期挂牌 ≠ 已成新 BAR | 把「还能订到」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Flash_shelf              = 399     # Simulation：闪促/秒杀挂牌（不是新 BAR）
Gap                      = Public_BAR − Flash_shelf   # 尺在 metric，不重写；不是必须折扣指令
Window                   = Booking/Stay open | expired-still-open | hidden-until-selected
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住闪促默认。

混淆三把价会同时拧坏 **公开尺** 与 **战术码**：把「闪促 399」读成「我们 BAR 就是 399」，或把「卖得好」读成「公开栏必须跟到地板」。

AltexSoft（C，§69 **新开**）：BAR = 某日某房型**最低公开灵活**基线，折扣/日期/需求修改加在之上；Promotional rates = **time-sensitive / limited period**；Flash sale = **temporary, steeply discounted, very short period**（文中 Wyndham 例 10 日）。**方向采用：闪促是有时限的促销层，不是 BAR 本身。** 10 日 / $ 公式 / 资格 10% **不进中国 Fact，不进默认店规。**

PriceLabs（C，§68 指针）：Promo 有结束日；只有对方 **BAR 策略**变化才配战略响应；Ahead 匹配闪促 = 给本来会来的人打折。**23% / 曼彻斯特例不采用。**

---

## 2. 促销模块 / Booking·Stay 窗 / HIDE 是活动过程，不是定价权

厂商把「闪促」做成**活动桶 + 有窗价码 + 查询闸**。没有一家被打开的官方页把它写成「促销价默认等于 BAR」或「卖爆了就必须改写公开灵活」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Promotion Groups*（§69 **新开**） | Group = 按主题归类多个 promotion（例 Summer Program）；Program Type 如 radio / TV / Internet/Web / email；先 Group 后 Code；Membership 开时 Profile group 自动建 | **活动桶 / 渠道主题。** 不是 BAR Type，不是「公开尺改成闪促」 |
| OPERA Cloud 26.2 *Configuring Promotion Codes*（§69 升核 / §68） | 价码 Attached 到 promotion；Booking Start/End、Stay Start/End；HIDE 开则未选促销不展示；Limited use coupon；Update Outside Booking Dates = 窗过后可改预订 | **有窗查询对象。** 挂码 + 起止日 + 可隐藏 = 战术层，不是默认公开 BAR。Update Outside ≠ 永久改尺 |
| OPERA Controls Rate Management（§68 指针） | PROMOTIONS_MODULE；HIDE_PROMOTION_RATES；PROMOTION_COUPON_CODES | **促销模块 ≠ BAR Type** |
| AltexSoft（§69 **新开**） | BAR = 公开灵活基线；Promo = limited period；Flash = temporary short window | **分层：锚 vs 限时促销。** 时长例不进 Fact |
| PriceLabs（§68 指针） | Promo vs BAR；有结束日；Ahead 跟闪促 = 打折给会来的人 | **战术 vs 战略。** 卖爆更常是验证需求，不是改尺令 |

```
画面：闪促 399 卖爆 / 秒杀还挂着 / 销售说「BAR 改成这个价」
Naive：BAR 就是那个价；卖得好所以改尺
本卡：促销模块、Booking/Stay 窗、HIDE、Group 都是活动过程。定价权在公开 BAR + Pace，不在促销按钮。
```

```
Promotion Group / Program Type     → 活动桶（主题/渠道分类）
Booking/Stay Start–End             → 窗（何时可卖 / 可住）
HIDE_PROMOTION_RATES               → 查询闸（未选不展示）
Attached rate codes / coupon       → 战术码（可 limited-use）
Public BAR                         → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 / 本店闪促 SOP / 默认折扣% / 秒杀时长 Fact = **NV，不编。** UI 字段是 OPERA 的，不是本店报表名。

---

## 3. 「卖爆了」是需求信号，不是改写公开 BAR 的许可证

卖得好回答的是：**这条限时码有没有人买、Pace 会不会更 Ahead。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 闪促也卖 | 需求强；公开尺 **Hold**；闪促成交关在有窗码里 | 「市场认 399，BAR 改 399」 |
| 闪促卖、公开 BAR 也动 | 分码看 Pickup；公开仍 Pace 闸 | 用闪促 Pickup 证明必须 dump 公开尺 |
| 窗过了还挂着还能订 | **形 C**：忘关/忘到期 → 关码 | 「已经成了新 BAR」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不改写 BAR | 一夜 −15%；把闪促地板永久化 |

PriceLabs（§68）：Ahead 匹配促销价 = 给会来的人打折。**方向采用。** 数字例不进 Fact。

AltexSoft（§69）：Last-minute / flash 应 selective and limited；客人若看出规律会推迟预订等更低价。**方向采用：公开反复地板会训练等待。** 不把文中时长写成店规。

```
Flash sold well     → 需求信号（可加强 Hold / 提前关闪促库存）
Public BAR          → 仍由 Pace / Remaining 定
Naive               → 「卖爆了所以 BAR→399」
本卡                → 卖爆 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店闪促 ≠ 报名闸（P18）≠ 忘关嵌套（P64）≠ 开业 intro（P68）

四边都在「促销价」附近，对象不同。塌成「反正都是便宜闪」会开错杠杆。

| | **P73 / 本卡（重置公开尺=闪促）** | **P18（报名闸）** | **P64（嵌套忘关）** | **P68（开业 intro）** |
| --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到自己的限时闪促，或过期还挂当新尺 | 报不报平台大促 / 只报肩日 | 涨 BAR 后低档/促销档还开着 | 对面新店开业 intro |
| 尺 | 公开 **BAR** | 净贡献 + Pace + 谁出资 | nested/shared 低档 | 本店 Pace，不是对面 intro |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | 高峰深促不报或只报肩日 | 关/限低档；不改 BAR 数字当唯一刀 | Hold；观察名单 ≠ 改今夜 BAR |
| 禁止 | 399 作新 BAR；过期挂牌当 BAR | 把报名当改写 Brand.com | 只涨 BAR 忘关低档 | 跟对面 intro 砍公开尺 |

顾问第一闸永远是：**这是要改公开尺，还是报不报平台，还是忘关低档，还是对面开业？** 报名 → P18。忘关嵌套 → P64。开业 intro → P68。真弱 leftover → P05。本店要把闪促叫 BAR / 要卖爆改尺 / 过期还挂 → 本卡 / P73。

---

## 5. 假尺子一族：「闪促就是 BAR / 卖爆了改尺 / 过期还挂」

本卡不是新怪现象，是同一族的下一张：**屏幕上的限时挂牌被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **本卡 T-Flash** | 「闪促 399 / 卖爆了 / 过期还挂」 | **公开 BAR + Pace**；不是闪促当 BAR 令，也不是 dump 399 令 |

「闪促卖爆了所以改 BAR」= 把 **战术窗（促销层）** 当成 **公开灵活价**。尺子在 399 上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「过期还挂着」是另一把假尺子：把**忘关状态**当成「市场已经认了新尺」。该关码，不是改写 Brand.com。

---

## 6. Diagnose → Advise：闪促被允许改什么

用户原话：「闪促 399 爆了 BAR 改 399」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完 BAR 也砍」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是有窗闪促/秒杀挂牌；
            ②拟议是「改尺 / 卖爆跟价 / 过期还挂」还是「关闪促、Hold 公开」；
            ③Pace / Remaining；窗是否仍开。
  缺折扣% / 秒杀时长 → 问，不编华住字段。

Diagnosis
  闪促/秒杀已经发生（或过期还挂）之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 过期挂 vs 报名 vs 开业 vs 嵌套 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆闪促 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P18 / P68 / P64 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住闪促 SOP / 秒杀时长 Fact。

What To Watch
  公开 BAR 是否仍 Hold；闪促是否仍带截止日；24h 公开 Pickup vs 闪促 Pickup（分码）
  不是「闪促挂出去了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C 过期还挂 / D→P68·P16 / E→P05 / F→P18·P23）走 **P73**，本卡**不重复 P73 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P74。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的「BAR」是 **公开灵活** 还是 **有窗闪促/秒杀挂牌**？ | 混用尺；把限时码当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与闪促挂牌各是多少？Booking/Stay 截止日？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 拟议是改写公开尺、过期继续挂，还是只保留/关掉有窗闪促码？ | 误入本卡 / P18 | **NV** |
| 4 | 这条码是否挂在 Promotion 上、HIDE 是否开、是否 limited-use coupon？ | 把促销模块/查询闸写成改 BAR | **NV** |
| 5 | 窗是否已过还挂着？ | 把忘关写成「已成新 BAR」 | **NV** → 先关码，不编时长 Fact |

补充可问（同样 NV）：是不是报不报平台大促（→P18）；是不是对面开业 intro（→P68）；是不是嵌套低档忘关（→P64）；真 Behind leftover（→P05）。**折扣%、秒杀时长 Fact、佣金%、699、华住闪促 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 秒杀价就是公开 BAR | BAR = 无资格公开灵活。闪促是有窗促销码 |
| 卖爆了所以 BAR→399 | 战术成交 ≠ 战略尺。拒绝 |
| 限时抢结束了还挂着 = 新 BAR | 忘关/忘到期。先关码 |
| Look to Book 能搜到促销所以 BAR 变了 | HIDE 关时可能露出；仍是促销码，不是默认公开尺 |
| Promotion Group / Program Type 配了所以公开价该跟 | 活动桶分类 ≠ 定价权 |
| Update Outside Booking Dates = 促销永久了 | 窗过后改预订的开关，不是改写 Brand.com |
| 平台闪购跟完官网也砍 | 报名/跟投 → P18；不自动改写公开 BAR |
| 对面也在闪所以我们改尺 | **P68** / **P16**。对象不同 |
| 嵌套低档还开着 = 闪促改尺 | **P64**。关低档，不是只改 BAR 数字 |
| 反正空，闪促地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| Wyndham 10 日 / 24–48h 就是店规 | **禁止。** 时长 Fact NV |
| 编一套华住闪促 SOP 就能 Advise | **禁止。** 折扣 / 时长 NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P73 `cases/sim-2026-flash-promo-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
闪促/秒杀                    = 399（有窗或过期还挂）
销售拟议                     = 「卖爆了」砍 BAR 到 399；或过期继续挂当新尺
```

读法（与 P73 同句）：399 是闪促挂牌，不是 BAR。Advise：拆闪促 vs 公开；**Hold 779–799 首选 799**；拒 dump **399**；过期先关码；折扣 / 时长 **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住闪促默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-29 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Promotion Group = 主题/渠道活动桶；先 Group 后 Code；Program Type 例示 radio/TV/web/email | **A Vendor PMS** | **Known 活动桶。** ≠ BAR Type | OPERA Cloud 26.2 Configuring Promotion Groups（**§69 新开**） |
| 价码 Attached 到 promotion；Booking/Stay 起止；HIDE 未选不展示；Limited use；Update Outside Booking Dates | **A Vendor PMS** | **Known 有窗查询对象。** ≠ 默认公开 BAR | OPERA Cloud 26.2 Configuring Promotion Codes（**§69 升核**；§68 已开） |
| PROMOTIONS_MODULE / HIDE / COUPON | **A Vendor PMS** | **Known 促销模块 ≠ BAR Type** | OPERA Controls Rate Management（**§68 指针**） |
| BAR = 公开灵活基线；Promo = limited period；Flash = temporary short window | **C 实践** | 方向 Known。**时长/$/10% 不采用** | AltexSoft 2026-04-15（**§69 新开**） |
| Promo vs BAR；有结束日；Ahead 匹配 = 打折给会来的人 | **C Vendor** | 方向 Known。**% 例不采用** | PriceLabs 2026-07-13（**§68 指针**） |
| Ahead Hold 公开 BAR；拒 399 改尺；过期关码 | **B / Hypothesis** | 本库 P73 + Pace 闸 | — |
| 本店闪促 SOP / 华住字段 / 默认折扣% / 秒杀时长 Fact / 佣金% | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 Configuring Promotion Groups + AltexSoft hotel rates guide（2026-04-15）。升核：OPERA Cloud 26.2 Configuring Promotion Codes（Membership/Profile、Update Outside Booking Dates）。§68 Controls + PriceLabs 复用，不重锤。华住 SOP **未开、不编**。Propeter / White Sky / hoteldiscountsite 营销时长与 30–40% 库存帽 **不采用为默认店规**。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-FLASH-01 | 本店闪促折扣 / 是否挂 Promotion / Booking·Stay 窗 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-FLASH-02 | 本店秒杀时长 / 是否 limited-use coupon / HIDE 是否开 | **NV。** 时长不是改尺令 |
| NV-FLASH-03 | 399 来源（闪促话术 / 平台闪购 / 嵌套低档 / 错映射） | **NV。** 先 Hold 公开 BAR |
| NV-P73-01… | P73 已挂（华住字段 / 折扣% / 佣金% / 秒杀时长） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 08:17 CST | 首版。T-Flash = 闪促/秒杀不是永久公开 BAR。三把价；促销模块/窗/HIDE≠定价权；卖爆≠改尺令；P18/P64/P68 孪生；假尺子一族；不重复 P73 六形。**不写 P74。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P73 正文；P73 仅头一行，邻卡仅文末一行）

- **P73** `advisor-playbooks/flash-promo-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-to-flash.md`：复用，不重写。
- **轻指标** `metrics/flash-vs-public-bar.md`：公开 BAR vs 闪促 gap；无默认折扣 %。本卡不重写公式。
- **P18**：报/不报平台大促。本卡 / P73 = 要把公开尺写成/跟到闪促。
- **P64**：嵌套/促销档忘关。邻「过期还挂」，对象是嵌套结构 vs 限时窗改尺。
- **P68**：对面开业 intro ≠ 自己的闪促改尺。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正闪促≠BAR + Hold，不是改尺。
- **T-Package / T-Corp / T-Parity / T-Share**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P74。禁止编华住闪促 SOP、默认折扣 %、秒杀时长 Fact、佣金%、699。**

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。
> 交叉指针（2026-08-30 08:17，不改正文）：假尺子同族下一张 **T-Fee** `theory/resort-fee-vs-bar.md`（费/税/all-in ≠ 公开 BAR）。过程仍 **P79**。不写 P80。
