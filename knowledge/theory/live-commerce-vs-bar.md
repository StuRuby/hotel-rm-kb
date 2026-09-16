# Live-commerce vs Public BAR｜直播间/主播专属价不是公开 BAR

> 资产：T-Live / T11–T14 下一层（直播商品/达人计划被允许改什么）· T-Flash / T-BRG / T-Package 同族（尺子 ≠ 按钮）
> 路径：`theory/live-commerce-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-30
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor/平台（抖音开放平台《酒店日历房解决方案》：日历房/预售券/团购券是**商品类型**；RatePlan=售卖计划；商家经营含「撮合 & 直播」；营销支持涡轮/秒杀/货补 — **§76 升核 / §77 复核**）；A Vendor/平台（抖音开放平台《佣金计划创建与修改》：达人佣金计划按维度 id / 计划 id 创建更新；请求含 start_time / end_time / product_ids / talent_ids / plan_type；权限挂在「酒店行业日历房解决方案」下 — **§77 新开**；**佣金% NV，示例值不进 Fact**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Rate Categories*：价码归入 Rate Category 分组；Look to Book 可按类查询；限制可设在 Category 层 — **§77 新开**；**分类桶 ≠ BAR Type**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Rate Classes*：结构是 Rate Class → Rate Category → Rate Code；例 Negotiate / Wholesale / Discounted — **§77 新开**；**类/档 ≠ BAR Type**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Promotion Codes*：价码挂促销；Booking/Stay 窗；HIDE 未选不展示 — **§68/§76 指针**）；C 新闻（中国旅游新闻网 2026-06-11：直播专属价低于官微日常价=渠道区隔 — **§76 指针**；TechNode 40%/60–90% **不进 Fact**）；B / Hypothesis（Ahead Hold 779–799 首选 799；不要 BAR→399「直播间卖爆了 / 主播价就是市场价」）
> 配套：`advisor-playbooks/live-commerce-stream-vs-bar.md`（P77 过程）· `recommendations/dont-rewrite-bar-to-livestream.md`（主卡复用，不重写）· `metrics/livestream-vs-public-bar.md`（轻指标；**无默认直播折扣 %**，公式不重写）· `cases/sim-2026-livestream-sat.md`（Simulation）
> 交叉：P18 报/不报这场直播 ≠ 本卡「把橱窗/主播价写成新 BAR」· P73 / T-Flash 自己的闪促窗码 · P74 券后/平台出资 · P27 opaque/盲盒 · P69 含早套餐 · P05 真弱 leftover · P01 Ahead · T-Flash / T-BRG / T-Package / T-Corp / T-Parity / T-Share（假尺子一族）
> 问题树：§84「直播间成交价/主播专属价不是公开 BAR」（过程路由已够；本卡给「为什么直播商品/达人计划/Rate Category 不是公开 BAR、经营面/佣金计划/分类桶不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 抖音来客 / 直播后台，不自动改价，不代开关橱窗。**
> 状态：**理论 drafted**（2026-08-30 00:17 CST）。**不写 P78，不写新剧本，不写 Extra Person 专剧。** 禁止：编华住/抖音店规 SOP / 主播佣金% / 直播时长 Fact / 699；一夜 −15%；BAR→399「直播间卖爆了 / 主播价就是市场价」；把日历房 RatePlan / 预售券橱窗留作新 BAR；把 14/399/799 当市场 Fact；把 C 文 40%/60–90%/两三成/30%/50% 写成 Fact；重写 `livestream-vs-public-bar.md` 公式；重写 P01–P77 正文（P77 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**直播间成交价 / 直播带货价 / 主播专属价是有窗、有库存帽、挂在平台橱窗或达人计划上的商品层，不是公开灵活 BAR。**
平台能把日历房做成一种商品类型、能把 RatePlan 做成带退改/餐食/预定限制的售卖计划、能把「撮合 & 直播」做成经营面、能把佣金计划做成有起止/商品 id/达人 id 的任务对象，只证明「有商品 / 有经营面 / 有达人任务」，不证明「公开灵活价该跟到主播价」或「卖爆了所以 BAR 改成直播间价」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「直播间卖爆了 / 主播价就是市场价」把 BAR 改写成 399。报不报这场 → **P18**。自己的闪促窗 → **P73**。券后 → **P74**。opaque → **P27**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店直播 SOP / 华住字段 / 主播佣金% / 直播时长 Fact = **全部 NV**。

```
Naive（禁止）     主播价就是我们的价；直播间卖爆了 BAR 改 399；
                  日历房挂 399 所以公开也是 399；不跟直播价就没人订
本卡              先拆三把价（公开 BAR / 直播间·主播专属挂牌 / 商品窗状态）。
                  RatePlan / 撮合&直播 / 预售券 / 秒杀·货补 / 佣金计划 / OPERA 分类桶+HIDE ≠ 定价权。过程走 P77。
```

完成标准：用户说「直播间卖爆了改 BAR」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」→ Situation 写成**三把价 + Pace/Remaining + 窗是否过 / 是否预售券**；Diagnosis 写成直播商品不是公开 BAR、经营面/达人计划不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、直播商品是否仍带窗/库存帽、折扣/佣金是否仍 NV。**不 dump 399、不把直播成交写成新 BAR、不写 P78。**

顾问必须能直接说的三句（与 P77 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是直播间 / 直播带货 / 主播专属价码（有窗 / 库存帽 / 平台橱窗），还是公开灵活 BAR。直播成交 ≠ 公开尺。本店直播 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「直播间卖爆了 / 主播价就是市场价」。
3. 报不报这场走 P18。自己的闪促窗走 P73。券后走 P74。opaque 走 P27。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**直播间/主播专属挂牌回答不了「今晚公开灵活该卖多少」。** 它回答「这条橱窗/达人商品还在不在窗里、挂牌是多少」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把直播成交写成新 BAR。禁止编默认直播折扣 %。禁止编主播佣金%。禁止编直播时长 Fact。**

---

## 1. 三把价：公开 BAR / 直播间·主播专属挂牌 / 商品窗状态

顾问问题不是「平台里能不能挂日历房或开直播」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、非达人专场） | Ahead Hold；真弱才 P05（仍这把尺） | 当成直播地板；砍到「卖爆了所以改尺」 |
| **Livestream / host shelf** | 挂在橱窗/达人计划上的直播商品挂牌（日历房 RatePlan / 预售券 / 通兑券 / 主播专场） | 可留独立商品；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Product-window state** | 日历房 RatePlan 是否仍可订；预售券是否仍在有效期；达人计划 start/end 是否仍开；秒杀/货补是否仍在窗；过期还挂 | 窗到 → 关/到期/下架；诊断：过期橱窗 ≠ 已成新 BAR | 把「还能在直播间订到」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Livestream_shelf         = 399     # Simulation：直播间/主播专属挂牌（不是新 BAR）
Gap                      = Public_BAR − Livestream_shelf   # 尺在 metric，不重写；不是必须折扣指令
Window                   = RatePlan open | presale voucher | talent plan open | in-window | expired-still-open
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/抖音直播默认。

混淆三把价会同时拧坏 **公开尺** 与 **通道商品**：把「直播间 399」读成「我们 BAR 就是 399」，或把「卖得好」读成「公开栏必须跟到地板」。

抖音日历房（A，§76 升核）：日历房 = 日期明确、价量态同步的**商品类型**；RatePlan = 带预定/餐食/取消规则的**售卖计划**；预售券（先买后约）≠ 日历房 ≠ 团购券。**方向采用：直播侧是商品层，不是 BAR Type。**

OPERA Rate Categories / Rate Classes（A，§77 **新开**）：价码归类、按类查询、限制可打在 Category 层；结构是 Class → Category → Code。**方向采用：分类桶/档位是产品结构，不是把公开灵活改成直播价。** 例 Negotiate / Wholesale / Discounted / GOVT **不进本店 SOP。**

---

## 2. RatePlan / 撮合&直播 / 预售券 / 秒杀·货补 / OPERA 分类桶+HIDE 是产品/活动过程，不是定价权

厂商把「直播带货」做成**商品类型 + 经营面 + 达人任务 + 有窗营销能力**。没有一家被打开的官方页把它写成「直播价默认等于 BAR」或「卖爆了就必须改写公开灵活」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| 抖音开放平台《酒店日历房解决方案》（§76 升核 / §77 复核） | 日历房=日期明确可订商品；RatePlan=售卖计划；商家经营含「撮合 & 直播」；营销支持涡轮/秒杀/货补；预售券 ≠ 日历房 ≠ 团购券 | **商品类型 / 经营面。** 不是 BAR Type，不是「公开尺改成主播价」 |
| 抖音开放平台《佣金计划创建与修改》（§77 **新开**） | 创建/更新佣金计划用维度 id / 计划 id；请求含 start_time、end_time、product_ids、talent_ids、plan_type；权限点挂在日历房解决方案下 | **达人任务对象，有窗。** 能配计划 ≠ 定价权。**佣金% NV，接口示例值不进 Fact** |
| OPERA Cloud 26.2 *Configuring Rate Categories*（§77 **新开**） | 相似价码归入同一 Category（例 GOVT / Packages）；Look to Book 可按类查询；限制可设在 Category 层 | **分类桶。** 不是 BAR Type |
| OPERA Cloud 26.2 *Configuring Rate Classes*（§77 **新开**） | 结构 Rate Class → Rate Category → Rate Code；例 Negotiate / Wholesale / Discounted | **档/类。** 不是「直播挂牌=公开 BAR」 |
| OPERA Cloud 26.2 *Configuring Promotion Codes*（§68/§76 指针） | 价码 Attached 到 promotion；Booking/Stay 起止；HIDE 开则未选促销不展示 | **有窗查询对象。** 结构上可类比直播专属码 |
| OPERA Controls Rate Management（§68/§76 指针） | PROMOTIONS_MODULE；HIDE_PROMOTION_RATES | **促销模块 ≠ BAR Type** |

```
画面：直播间 399 卖爆 / 主播价就是市场价 / 日历房还挂着 / 销售说「BAR 改成这个价」
Naive：BAR 就是那个价；卖得好所以改尺
本卡：RatePlan、撮合&直播、预售券、秒杀·货补、佣金计划、Category/Class、HIDE 都是产品/活动过程。定价权在公开 BAR + Pace，不在直播按钮。
```

```
RatePlan / 售卖计划                    → 商品（退改/餐食/预定限制）
撮合 & 直播                            → 经营面（来客后台）
预售券 / 通兑券                        → 先买后约商品（更不是单晚公开尺）
涡轮 / 秒杀 / 货补                     → 营销能力（有窗）
佣金计划 start–end / product / talent  → 达人任务（有窗）
Rate Class / Category / HIDE           → 分类桶 / 查询闸
Public BAR                             → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 / 抖音来客店规 / 本店直播 SOP / 主播佣金% / 直播时长 Fact = **NV，不编。** UI 字段是平台/OPERA 的，不是本店报表名。

---

## 3. 「卖爆了 / 主播价就是市场价」是需求/渠道信号，不是改写公开 BAR 的许可证

卖得好回答的是：**这条直播商品有没有人买、通道 Pace 会不会更 Ahead。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 直播间也卖 | 需求强；公开尺 **Hold**；直播成交关在有窗商品/达人计划里 | 「市场认 399，BAR 改 399」 |
| 直播卖、公开 BAR 也动 | 分码看 Pickup；公开仍 Pace 闸 | 用直播 Pickup 证明必须 dump 公开尺 |
| 窗过了还挂着还能在直播间订 | **形 C**：忘关/忘到期 → 关码/下架 | 「已经成了新 BAR」 |
| 日历房 RatePlan / 预售券挂着 | 商品仍在通道；公开尺分开 | 「橱窗挂 399 所以 BAR 也是 399」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不改写 BAR | 一夜 −15%；把主播地板永久化 |

中国旅游新闻网（C，§76 指针）：受访酒店「直播专属价低于官微日常价，实现渠道区隔」。**方向采用：区隔，不是把官微日常价改成直播价。** 「两三成」抽成 **不进 Fact。**

```
Livestream sold well   → 需求/渠道信号（可加强 Hold / 提前关直播库存）
Public BAR             → 仍由 Pace / Remaining 定
Naive                  → 「卖爆了所以 BAR→399」
本卡                   → 卖爆 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店直播改尺 ≠ 自己的闪促窗（P73 / T-Flash）≠ 券后（P74）≠ 报名闸（P18）≠ opaque（P27）≠ 含早（P69）≠ 真弱（P05）

七边都在「更便宜 / 卖得好」附近，对象不同。塌成「反正都便宜所以砍」会开错杠杆。

| | **P77 / 本卡（重置公开尺=直播）** | **P73 / T-Flash（闪促窗）** | **P74（券后）** | **P18（报名闸）** | **P27（opaque）** | **P69（含早）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到直播间/主播专属/日历房橱窗价 | 自己的限时闪促/秒杀窗码 | 券后/平台出资展示层 | 报不报这场直播/平台活动 | 盲盒/倾倒层 | 含早套餐挂牌 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 公开 BAR vs 有窗闪促码 | 谁出资 + 公开 BAR | 净贡献 + Pace + 谁出资 | opaque 围栏 | 公开 EP | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；过期关码 | Hold；排除平台自掏 | 高峰深促不报或只报肩日 | 高峰关盲盒 | Hold EP | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；主播价当市价 | 闪促当新 BAR | 券后当新 BAR | 把报名当改写 Brand.com | 盲盒当公开尺 | 套餐当 BAR | 一夜 −15%；把直播地板永久化 |

顾问第一闸永远是：**这是要改公开尺，还是自己的闪促，还是券后，还是报不报，还是 opaque，还是含早，还是真弱？** 报名 → P18。自己的闪促窗 → P73。券后 → P74。opaque → P27。含早 → P69。真弱 leftover → P05。要把直播/主播价叫 BAR / 要卖爆改尺 / 日历房挂着所以跟 → 本卡 / P77。

---

## 5. 假尺子一族：「主播价就是 BAR / 卖爆了改尺 / 日历房挂着所以跟」

本卡不是新怪现象，是同一族的下一张：**屏幕上的直播商品被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了 / 过期还挂」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔 / 被索赔了」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **本卡 T-Live** | 「直播间 399 / 卖爆了 / 主播价就是市场价」 | **公开 BAR + Pace**；不是直播当 BAR 令，也不是 dump 399 令 |

「直播间卖爆了所以改 BAR」= 把 **通道商品（直播层）** 当成 **公开灵活价**。尺子在 399 上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「主播价就是市场价」是另一把假尺子：把**达人任务成交**当成「市场已经认了新尺」。该把成交关在计划里，不是改写 Brand.com。

「日历房挂着所以跟」是第三把：把**商品类型仍可订**当成「BAR Type 已经变了」。RatePlan 仍是售卖计划。

---

## 6. Diagnose → Advise：直播被允许改什么

用户原话：「直播间卖爆了，BAR 改成主播价」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是直播间/主播专属/日历房 RatePlan / 预售券；
            ②拟议是「改尺 / 卖爆跟价 / 橱窗挂着所以跟」还是「成交关在商品里、Hold 公开」；
            ③Pace / Remaining；窗是否仍开。
  缺折扣% / 佣金% / 直播时长 → 问，不编华住/抖音店规字段。

Diagnosis
  直播/主播专属已经发生（或过期还挂）之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 橱窗当尺 vs 报名 vs 闪促 vs 券后 vs opaque vs 含早 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆直播商品 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P18 / P73 / P74 / P27 / P69 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住/抖音店规 SOP / 主播佣金% / 直播时长 Fact。

What To Watch
  公开 BAR 是否仍 Hold；直播商品是否仍带窗/库存帽/核销限制；24h 公开 Pickup vs 直播通道 Pickup（分码）
  不是「直播间挂出去了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C RatePlan·预售券当尺 / D→P18·P73 / E→P74·P27 / F→P05）走 **P77**，本卡**不重复 P77 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P78。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **直播间 / 直播带货 / 主播专属价码**（有窗/库存帽/平台橱窗），还是要把 **公开 BAR 改成那个价**？ | 混用尺；把通道商品当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与直播间/主播挂牌各是多少？是日历房 RatePlan、预售券、通兑券还是达人专场？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 窗是否还在？库存帽 / 核销限制 / 佣金计划起止是否还在？ | 把过期橱窗写成「已成新 BAR」 | **NV** → 先关/到期，不编时长 Fact |
| 4 | 拟议是成交关在商品/达人计划里，还是改写公开尺 / 主播价就是市场价？ | 误入本卡 / P18 | **NV** |
| 5 | 本店直播 SOP / 达人佣金怎么走？ | 发明华住/抖音店规；或把接口字段当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是报不报这场（→P18）；是不是自己的闪促窗（→P73）；是不是券后/平台出资（→P74）；是不是 opaque（→P27）；是不是含早套餐（→P69）；真 Behind leftover（→P05）。**折扣%、主播佣金%、直播时长 Fact、699、华住/抖音店规 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 主播价就是公开 BAR | BAR = 无资格公开灵活。直播是橱窗/达人商品 |
| 卖爆了所以 BAR→399 | 通道成交 ≠ 战略尺。拒绝 |
| 日历房挂 399 所以 BAR 也是 399 | RatePlan = 售卖计划，不是 BAR Type |
| 预售券先买后约 = 单晚公开尺 | 预售券 ≠ 日历房 ≠ 团购券。更不是公开 BAR |
| 撮合 & 直播配了所以公开价该跟 | 经营面 ≠ 定价权 |
| 佣金计划能创建所以 BAR 该跟主播 | 达人任务对象，有窗。佣金% NV |
| Rate Category / Class 配了所以公开尺改完 | 分类桶 / 档 ≠ BAR Type |
| 秒杀/货补挂出去了 = 新 BAR | 营销能力，有窗。过期关 |
| 报了这场直播所以官网也砍 | 报名闸 → P18；不自动改写公开 BAR |
| 自己也在闪所以改尺 | **P73 / T-Flash**。对象是自有闪促窗 |
| 券后/平台补完所以跟 | **P74** |
| 盲盒也是直播价所以跟 | **P27** |
| 含早套餐挂在直播间所以砍 EP | **P69** |
| 反正空，按主播地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| C 文 40% / 60–90% / 两三成就是店规 | **禁止。** 数字不进 Fact |
| 编一套华住/抖音店规 SOP 就能 Advise | **禁止。** 佣金 / 时长 / 折扣 NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P77 `cases/sim-2026-livestream-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
直播间/主播专属              = 399（日历房 RatePlan / 预售券 / 达人专场）
销售拟议                     = 「卖爆了 / 主播价就是市场价」砍 BAR 到 399；或橱窗挂着当新尺
```

读法（与 P77 同句）：399 是直播间/主播专属挂牌，不是 BAR。Advise：拆直播商品 vs 公开；**Hold 779–799 首选 799**；拒 dump **399**；过期先关码；折扣 / 佣金 / 时长 **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/抖音直播默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-30 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 日历房/预售券/团购券是商品类型；RatePlan=售卖计划；撮合&直播是经营面；秒杀/货补是营销能力 | **A Vendor/平台** | **Known 商品层。** ≠ BAR Type | 抖音开放平台《酒店日历房解决方案》（**§76 升核 / §77 复核**） |
| 佣金计划按维度/计划 id 创建更新；含 start/end、product_ids、talent_ids、plan_type | **A Vendor/平台** | **Known 达人任务对象。** 佣金% **NV** | 抖音开放平台《佣金计划创建与修改》（**§77 新开**） |
| Rate Category = 相似价码分组；LTB 可按类查询；限制可打在 Category 层 | **A Vendor PMS** | **Known 分类桶。** ≠ BAR Type | OPERA Cloud 26.2 Configuring Rate Categories（**§77 新开**） |
| 结构 Rate Class → Rate Category → Rate Code；例 Negotiate / Wholesale / Discounted | **A Vendor PMS** | **Known 档/类。** ≠ BAR Type | OPERA Cloud 26.2 Configuring Rate Classes（**§77 新开**） |
| 价码挂 promotion；Booking/Stay 窗；HIDE 未选不展示 | **A Vendor PMS** | **Known 有窗查询对象。** ≠ 默认公开 BAR | OPERA Cloud 26.2 Configuring Promotion Codes（**§68/§76 指针**） |
| 直播专属价低于官微日常价 = 渠道区隔 | **C 新闻** | 方向 Known。**抽成%/折扣% 不采用** | 中国旅游新闻网 2026-06-11（**§76 指针**） |
| Ahead Hold 公开 BAR；拒 399 改尺；过期关码 | **B / Hypothesis** | 本库 P77 + Pace 闸 | — |
| 本店直播 SOP / 华住字段 / 主播佣金% / 直播时长 Fact / 佣金% | — | **NV。不编。** | — |

本小时新开：抖音开放平台《佣金计划创建与修改》+ OPERA Cloud 26.2 Configuring Rate Categories + Configuring Rate Classes。升核/复核：抖音《酒店日历房解决方案》。指针：§68/§76 Promotion Codes / HIDE；§76 中国旅游报 / TechNode。酒店新预售券解决方案专页 **WebFetch 空页，不当核页**。美团/携程酒店直播官方商家文档 **未落到可核页**。华住/抖音店规 SOP **未开、不编**。C 文数字 **不采用为 Fact**。Extra Person OPERA 页仍 leftover 指针，不开专剧。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-LIVE-01 | 本店直播 SOP / 是否真有橱窗/达人计划 / 窗与库存帽 | **NV。不代答。** 无则条件化，不编华住/抖音字段 |
| NV-LIVE-02 | 本店主播佣金% / 直播时长 Fact / 日历房服务费% | **NV。** 佣金不是改尺令 |
| NV-LIVE-03 | 399 来源（直播话术 / 日历房 RatePlan / 预售券 / 闪促 / 券后） | **NV。** 先 Hold 公开 BAR |
| NV-P77-01… | P77 已挂（华住字段 / 折扣% / 佣金% / 时长） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 00:17 CST | 首版。T-Live = 直播间/主播专属价不是公开 BAR。三把价；RatePlan/撮合&直播/预售券/秒杀·货补/佣金计划/分类桶+HIDE≠定价权；卖爆≠改尺令；P73/P74/P18/P27/P69/P05 孪生；假尺子一族；不重复 P77 六形。**不写 P78。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P77 正文；P77 仅头一行，邻卡仅文末一行）

- **P77** `advisor-playbooks/live-commerce-stream-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-to-livestream.md`：复用，不重写。
- **轻指标** `metrics/livestream-vs-public-bar.md`：公开 BAR vs 直播挂牌 gap；无默认折扣 %。本卡不重写公式。
- **P73 / T-Flash**：自己的闪促窗码。本卡 / P77 = 要把公开尺写成/跟到直播间/主播专属。
- **P74**：券后/平台出资。邻「展示层」，不是达人专场。
- **P18**：报/不报这场直播/平台活动。
- **P27**：opaque/盲盒。
- **P69**：含早套餐挂在直播间仍走套餐尺。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正直播价≠BAR + Hold，不是改尺。
- **T-Flash / T-BRG / T-Package / T-Corp / T-Parity / T-Share**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P78。禁止编华住/抖音店规 SOP、默认折扣 %、主播佣金%、直播时长 Fact、699。**
> 交叉指针（2026-08-30 08:17，不改正文）：假尺子同族下一张 **T-Fee** `theory/resort-fee-vs-bar.md`（费/税/all-in ≠ 公开 BAR）。过程仍 **P79**。不写 P80。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。
