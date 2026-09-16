# Playbook P77｜直播间 / 直播带货 / 主播专属价 vs 公开 BAR（直播成交价不是公开 BAR；不要把橱窗/主播价写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/live-commerce-stream-vs-bar.md`  
> BACKLOG：P77 Live-commerce / Livestream / Host-exclusive vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **live-commerce-stream-vs-bar**  
> 状态：**drafted**（2026-08-29 22:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-to-livestream.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/livestream-vs-public-bar.md`（公开 BAR vs 直播间/主播专属挂牌；**无默认直播折扣 %**；本店直播 SOP NV）  
> 理论：`theory/live-commerce-vs-bar.md`（**T-Live**，2026-08-30 00:17）；Diagnose 走 T-Live，过程仍本剧。邻 **T-Flash**（有窗闪促）只作交叉，不复写。  
> 理论核源：抖音开放平台《酒店日历房解决方案》（日历房/预售券/团购券是商品类型；RatePlan=售卖计划；直播是经营面；秒杀/货补是营销能力 ≠ 公开 BAR）；OPERA Cloud 26.2 Configuring Promotion Codes（价码挂促销；Booking/Stay 窗；HIDE 未选不显示）  
> 交叉：P73 自己的闪促窗码 ≠ 本剧「主播/橱窗专属价写成新公开 BAR」· P74 券后/平台出资展示层 · P18 报不报这场直播/平台活动 · P27 opaque/盲盒 · P69 含早套餐 · P05 真弱 leftover · P01 Ahead Hold  
> 问题树：§84 「直播间成交价/主播专属价不是公开 BAR」  
> 仿真：`cases/sim-2026-livestream-sat.md`（**Simulation**）  
> 证据等级：A Vendor/平台（抖音开放平台酒店日历房：日历房=日期明确可订商品；RatePlan 带退改/餐食/预定限制；商家经营含「撮合 & 直播」；营销支持涡轮/秒杀/货补；预售券 ≠ 日历房 ≠ 团购券 — §76；OPERA Cloud 26.2 Configuring Promotion Codes：价码挂 promotion；Booking/Stay 起止窗；HIDE 未选不显示 — §68/§76）；A Vendor PMS（OPERA Controls PROMOTIONS_MODULE / HIDE_PROMOTION_RATES — §68/§76）；C 新闻（中国旅游新闻网 2026-06-11：直播专属价低于官微日常价=渠道区隔，不是改尺；锦江「抖音主推直播通兑券和限时秒杀」— §76；TechNode 2025-07-16：livestream-exclusive vouchers / calendar flash — 60–90%/40% **不进 Fact** — §76）  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆直播间/主播专属/橱窗价码 vs 公开灵活 BAR、Hold 公开 BAR、拒绝把直播成交价写成新尺；**不操作** PMS / OTA / 抖音来客 / 直播后台，不自动定价，不代开关橱窗。  
> 禁止：发明华住/抖音店规 SOP、主播佣金%、直播时长 Fact、华住字段、699；一夜 −15%；BAR→399「直播间卖爆了 / 主播价就是市场价」；把 14/399/799 当市场 Fact；开 P78；把报不报当本剧主刀（误入 P18）；把自己的闪促窗当本剧（误入 P73）；把券后当本剧（误入 P74）。  
> 20:17「不要规定 P77」= recap 槽不得指定；本 scout 核实直播间改尺缺口后开（同 14:17 核实后开 P75）。

---

## 0. 一句话

**直播间成交价 / 直播带货价 / 主播专属价不是公开灵活 BAR。** 先问这是 **有窗、有库存帽、挂在平台橱窗/达人计划上的直播商品**（日历房 RatePlan、预售券、通兑券、主播专场），还是 **要把公开灵活 BAR 改成直播间那个价**。抖音开放平台把日历房钉成 **一种商品类型**：用户选日期下单，价量态实时同步；RatePlan 是带退改/餐食/预定限制的 **售卖计划**；「撮合 & 直播」是经营面，秒杀/货补是营销能力——**不是把公开 BAR 改写成主播价**。OPERA 的 Promotion Codes 把价码挂在促销上，并有 Booking / Stay 起止日；HIDE 开时未选促销则 Look to Book **不显示**——结构上直播专属码也是 **有窗查询对象，不是默认公开尺**。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「直播间卖爆了 / 主播价就是市场价」把 BAR 改写成 399。报不报这场 → **P18**。自己的闪促窗 → **P73**。券后/平台出资 → **P74**。opaque → **P27**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店直播 SOP / 华住字段 / 主播佣金% = **NV，不编**。

完成定义：一张「先拆直播商品 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 直播成交 = 公开 BAR** | 「主播价就是我们的价」 | 用橱窗/达人码当尺 | **拆直播商品 vs 公开**；Hold 公开 BAR |
| **B BAR→399「直播间卖爆了」** | 「市场认这个价，BAR 改 399」 | 把专场地板写成战略尺 | **拒绝 BAR→399** |
| **C 日历房 RatePlan / 预售券当公开尺** | 「日历房挂 399 所以 BAR 也是 399」 | 商品类型 ≠ BAR Type | **RatePlan/预售券留在通道**；不改写 BAR |
| **D 报不报这场 / 自己的闪促窗** | 「要不要开播 / 秒杀就是 BAR」 | 对象是报名闸或自有闪促 | **P18** / **P73** |
| **E 券后 / opaque 当直播价** | 「券后/盲盒也是直播价所以跟」 | 展示层 / 倾倒层 | **P74** / **P27** |
| **F 真弱 leftover** | 「反正空，按主播地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是直播间 / 直播带货 / 主播专属价码（有窗 / 库存帽 / 平台橱窗），还是公开灵活 BAR。直播成交 ≠ 公开尺。本店直播 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「直播间卖爆了 / 主播价就是市场价」。
3. 报不报这场走 P18。自己的闪促窗走 P73。券后走 P74。opaque 走 P27。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认直播折扣 %、无「主播必须打 X 折」、无「卖爆了必须改 BAR」、无默认佣金%**。本店直播 SOP / 华住字段 = **NV**。

Vendor / 实践指针（不写成华住/抖音店规 SOP）：

- 抖音开放平台《酒店日历房解决方案》（A Vendor/平台，§76）：日历房 = 日期明确、价量态同步的 **商品类型**；RatePlan/售卖计划带预定/餐食/取消规则；商家经营含 **撮合 & 直播**；营销能力含涡轮/秒杀/货补；预售券（先买后约）≠ 日历房 ≠ 团购券；达人佣金计划挂商品/门店——**佣金% NV，不编**。**直播是经营面 + 商品，不是公开 BAR Type。**
- OPERA Cloud 26.2 *Configuring Promotion Codes*（A Vendor PMS，§68/§76）：价码 **挂到** promotion；**Booking Start/End**、**Stay Start/End** 定义窗；HIDE_PROMOTION_RATES 开则未选促销不展示。**有窗促销码 ≠ 默认公开 BAR。** 结构上可类比直播专属码。
- OPERA Controls *PROMOTIONS_MODULE / HIDE_PROMOTION_RATES*（A Vendor，§68/§76）：促销模块把价码链到促销码，经 Look to Book **查询**才卖。**促销模块 ≠ BAR Type。**
- 中国旅游新闻网 2026-06-11（C 新闻，§76）：受访酒店「制定清晰价格梯度，**确保直播专属价低于官微日常价，实现渠道区隔**」——方向是 **区隔**，不是把官微日常价改成直播价。锦江：「抖音是高效引流器，主推直播通兑券和限时秒杀」。朱磊「平台加达人抽成占到两三成」**不进 Fact / 不进店规**。
- TechNode 2025-07-16（C 新闻，§76）：Douyin 推 livestream-exclusive vouchers、calendar deals、limited-time calendar flash。文中 40% off / 预售券 60–90% of list **不进中国 Fact**。

本店直播 SOP / 华住字段 / 主播佣金% / 直播时长 Fact / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「直播间价 / 主播价 / 橱窗成交」是直播商品还是要改公开 BAR；②拟议是「BAR→主播价 / 卖爆了所以跟」还是「成交关在直播码里、Hold 公开」；③本店 Pace / Remaining，不是「直播间看起来很火」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 直播间/主播专属挂牌（缺则问，不编）
- 是日历房 RatePlan、预售券、通兑券、达人专场，还是要把公开 BAR 改尺
- 窗是否还在；库存帽 / 核销限制是否还在（能拆就拆，拆不清标 NV）
- 拟议：BAR 改成直播价 / 卖爆了所以市场认这个价 / 主播价就是我们的价
- 本店直播 SOP / 华住字段 / 达人佣金（NV 不编）
- 用户原话：「直播间卖爆了，BAR 改成主播价」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 直播商品/主播专属 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「卖爆了 / 主播价就是市场价」？ | 形 B；拒绝 |
| D3 | 把日历房 RatePlan / 预售券橱窗当成新公开尺？ | 形 C；商品 ≠ BAR |
| D4 | 其实是报不报这场 / 自己的闪促窗？ | → P18 / P73 |
| D5 | 其实是券后/平台出资 / opaque？ | → P74 / P27 |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 其实是含早套餐挂在直播间？ | → P69 |
| D8 | 真 Behind leftover？ | → P05；仍不改写 BAR |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 直播间成交价 ≠ 主播专属/橱窗 RatePlan ≠ 预售通兑券。直播成交关在商品/达人计划里，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **通道**：日历房可以按日期调价量态（平台能力 ≠ 改写本店公开 BAR）。预售券先买后约，更不是单晚公开尺。
4. **误入移交**：报不报 → P18；自己的闪促窗 → P73；券后 → P74；opaque → P27；含早套餐 → P69；真弱 → P05。
5. **早会一个动作**（P45）：纠正「直播价≠BAR」+ Hold 公开 BAR（或问清是哪一个直播商品）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编主播佣金%；无 Pace 就因「直播间很火」改尺。

## 4. Why

- 平台：日历房/预售券/团购券是 **商品类型**；RatePlan 是售卖计划；直播是经营面。设计上就不是把公开 BAR 改成主播价。
- Vendor PMS：有窗促销码 / HIDE 查询闸把专属价围在码里，不是默认公开栅格。
- 实践（C，只取方向）：受访酒店把直播专属价做成 **低于官微日常价的渠道区隔**，不是把官微日常价改成直播价。
- Advisor：用户说「直播间卖爆了」时，先问 Pace 与这是不是橱窗/达人码。卖爆了常是 **通道成交**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；直播成交关在商品/计划里，不污染公开尺。
- Risk：误把真弱夜当「直播很火所以 Hold」；或反过来把主播价当成必须跟的市场价。
- Watch：公开 BAR 是否仍 Hold；直播商品是否仍带窗/库存帽/核销限制；24h 公开 Pickup vs 直播通道 Pickup（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆直播商品/公开，或至少能标 NV 仍 Hold）。点佣金%/折扣% Low（NV）。Evidence A 平台 + A Vendor PMS + C 新闻（C 只取区隔方向，数字不进 Fact）。

## 7. Simulation 指针

见 `cases/sim-2026-livestream-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 22:17 CST | 首版。P77。直播间/主播专属≠公开 BAR；Ahead Hold；拒改尺。20:17 不规定 → 本 scout 核实后开。未开 P78。 |

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。
