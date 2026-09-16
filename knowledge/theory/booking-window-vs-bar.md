# Booking Window / 提前期 offset / Release Time / Sell Dates vs Public BAR｜售卖时窗回答「什么时候能订」，不回答「今晚该卖多少」

> 资产：T-Window / T04-00（Booking-side 时窗：Min/Max Advanced Booking、Release Time、Booking Period / Start-End Sell Dates、late booking until 被允许改什么）· **≠ T-Restriction**（`theory/restriction-maxlos-ctd-vs-bar.md` = stay-side MaxLOS/CTD/CTA 住期过滤）· **≠ T-Flash**（`theory/promotion-window-vs-bar.md` = 闪促成交价不能反写公开尺）· **≠ T-Floor**（schedule floor / Min·Max 金额）· **≠ T-Rack**（门市/年·季基准）· **≠ T-Hurdle**（gate/LRV）· **≠ T-Corp / T-Component / T-Tax**
> 路径：`theory/booking-window-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Source Date：见 §2 逐源；**Last Verified：2026-09-04**（全部 curl HTTP 200）
> Confidence：**Medium-High**（时窗字段存在与语义 = A 级 Vendor/协会 Fact；「窗口误挡 ≠ 需求弱」的诊断顺序 = Best Practice/Hypothesis；本店/华住默认值 = **NV**）
> 知识类型：Theory + Vendor Methodology（Fact：字段存在与语义）+ Association Fact（ALT 定义）+ Best Practice + Hypothesis
> 证据等级：
> - A **Vendor PMS**（Oracle OPERA Cloud 26.2 *Configuring Rate Codes*：**Min Advanced Booking (Days)** = 「a reservation must be booked」至少提前的天数；**Max Advanced Booking (Days)** = 最多提前的天数；**Start / End Sell Dates** = 「the date range during which you can make reservations for this rate code」；同屏还有 Min/Max LOS、Rate Floor、Yieldable、Tiered Rates — **§131 新开 → §132 升核**；配置字段 ≠ 定价权）
> - A **Vendor OTA Connectivity**（Booking.com *BookingRule*：**MinAdvancedBookingOffset** = room **must** be booked 的最小提前量、**MaxAdvancedBookingOffset** = 最大提前量，均相对 check-in 当天午夜 24:00 CE(S)T，**search date 计入**；**ReleaseTimeOfDayStart / End** = 当天可开始 / 不再可订的时刻，15 分钟粒度 — **§131 新开 → §132 升核**；接口字段 ≠ 需求曲线）
> - A **Vendor PMS**（Cloudbeds *Connect a distribution channel to Cloudbeds PMS* · Advanced booking settings：**Minimum Advanced Booking Offset** = 「latest point when the room can be booked before the date of stay」（cutoff / Early Booker，例 720 小时 = 入住前 30 天停售）；**Maximum Advanced Booking Offset** = 「how far in advance the room becomes available to book」（Last Minute，例 72 小时 = 入住前 3 天才开）；默认 min=0（最晚到入住日午夜）/ max=13200（约入住前 550 天开）；**任一设 0 可能使该房在入住日午夜前完全不可订** — **§132 新开**）
> - A **Vendor PMS**（Apaleo *Setting up Rate Plans*：minimum / maximum advanced booking 决定「when this rate plan can be booked」；**late booking until time** 限定当天最晚接单时刻；**booking periods** 定义「open for sale」窗，窗外「will not be visible to bookers」，且**下单日期窗与住期窗各自独立**（页面例：4/8–6/20 可订、住 5/20–6/25）— **§132 新开**）
> - A **Vendor PMS**（Apaleo *Service Availability*：「If you still have rooms available but no offers appear … check your rate plan restrictions. For example, a **minimum advance booking** … may prevent offers from showing」；override「Show unavailable offers」时「**Does overriding restrictions change my availability or pricing? No.**」— **§132 新开**；**显示/可售闸 ≠ 需求信号 ≠ 改价**）
> - A **协会 Fact**（HSMAI Academy *ALT Average Lead Time*：Booking/Reservation Lead Time = 下单到入住的天数；ALT「often used to determine and measure rate plans, such as advance purchase rates」— **§131 → §132 升核**；诊断输入 ≠ 固定折扣 %）
> - A **协会 Theory**（HSMAI Academy *Length-of-Stay Pricing*：按 arrival + total duration 定整段价；页面 $100/晚 vs 3 晚 $275 = **US 示例，不进中国 Fact** — **§131 指针**；整段价 → handoff T08/P40，本卡不当核）
> - **FAIL / 不得引用**：HSMAI glossary `advance-purchase` / `booking-window` / `booking-curve` / `booking-pace` / `lead-time` 猜链 **HTTP 404**（2026-09-04 实测）；HotelKey `rate-plan-restrictions` 猜链 404；Clock `rate-restrictions` 猜链 404。**不编 URL、不代答。**
> 配套：`advisor-playbooks/restriction-overuse.md`（**P33 过程·窗口/限制过度 → 先松窗口不砍 BAR**）· `advisor-playbooks/ota-visibility-drop.md`（**P35 过程·搜不到先查库存/可售/内容，不先砍 BAR**）· `recommendations/do-not-cut-when-restricted.md`（主决策卡复用，**不重写公式**）· `advisor-playbooks/prepaid-nonrefundable.md`（**P19 移交·advance purchase 产品**）· `advisor-playbooks/same-day-walk-in.md`（**P42 移交·同日 release time / 前台**）· `advisor-playbooks/cancel-policy-tighten.md`（**P38 移交·随 DTA 收紧政策**）· `theory/restriction-maxlos-ctd-vs-bar.md`（**T-Restriction 移交·stay-side**）· `advisor-playbooks/channel-mapping-misprice.md`（**P60 移交·错配置/映射事故**）· `cases/sim-2026-booking-window-sat.md`（**C04-02** callable Simulation）· 无新 playbook / 无新轻指标（短例仍在 §9）
> 交叉：P05 / P02 真弱 leftover · P01 Ahead · P43 口头拒单纪律（无日志不动尺）· P18 报名 · P45 早会 · T-Flash 促销窗价 · T08 / P40 / P41 / P76 / P21 LOS 整段价与停留形态 · T-Restriction / T-Floor / T-Rack / T-Component / T-Tax / T-Hurdle / T-Corp / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：§1 问「是不是真的没房」/ O8 Restriction 旁挂 **booking-side 时窗** 闸（过程路由已够；本卡给「为什么提前期/时窗不是公开 BAR、不可见不等于需求弱」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / Rate Plan 屏 / CM / OTA extranet，不自动改价，不代改窗口。**
> 状态：**理论 drafted**（2026-09-04 00:17 CST）。**不写 P88，不写 P89，不写新剧本，不开 Pet/AAA。** 过程仍 **P33** + **P35**（+ handoff **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。禁止：编华住 Booking Window·Release Time SOP / 默认 cutoff 小时 / last-minute 天数 / 本店 ALT / 转化率 / 699 / Walk $ / 佣金%；一夜 −15%；BAR→399「搜不到所以砍 / 提前期挡住所以 dump / 早订价才是市场价 / 临近开卖所以公开也跟着砍」；把 14/399/799 当市场 Fact；把 Vendor 默认值（720h / 72h / 13200h / 550 天 / 1 小时 / 4pm）当中国常模；重写 T-Restriction / T-Flash / T-Floor / T-Rack / T20 / optimization-advice / restriction-framework **正文三句**；重写 P01–P87 正文（邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Restriction / T-Flash / T-Floor**；造 systems/*.md。

---

## 0. 一句话

**Booking window（提前期 offset / release time / booking period / sell dates）回答的是「这个价码在哪段时间、几点之后能被下单」，不是「今晚公开灵活 BAR 该卖多少」。「客人搜不到 / 系统没有 offer」可能是时窗挡住，不等于需求弱，更不是把 BAR 改写成 399 的许可证。**
厂商能配 Min/Max Advanced Booking、能配 ReleaseTimeOfDayStart/End、能配 booking period 与 Start/End Sell Dates、能配 late booking until——只证明「什么时候允许下单」，不证明「公开灵活价该写成 399」。Apaleo 官方甚至把它写成排障第一问：**有房却没有 offer，先查 rate plan 的 minimum advance booking 等限制**；而 override 显示「不改可售、不改价格」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「OTA 上搜不到 / 提前期挡住了 / 临近才开卖 / 早订价才是市场价」把 BAR 改写成 399。窗口误挡 → **P33**（先松窗口）。搜不到/曝光诊断 → **P35**（先查库存/可售/内容）。刻意 advance-purchase 围栏产品 → **P19**。同日 release time / 前台 → **P42**。随 DTA 收紧政策 → **P38**。stay-side MaxLOS/CTA/CTD → **T-Restriction**。错配置/渠道映射事故 → **P60**。真弱 → **P05 / P02**（仍禁一夜 −15%）。本店窗口字段 / 华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT = **全部 NV**。

```
Naive（禁止）     搜不到所以需求弱、所以 BAR→399；
                  提前期挡住了那就降价把量买回来；早订价/临近价就是市场价；
                  同日 10:00 才开卖说明卖不动，先砍公开尺
本卡              先拆三把尺（公开 BAR / booking-side 时窗 / Pace·Remaining·是否真有 offer）。
                  OPERA Min·Max Advanced Booking + Start/End Sell Dates、BDC offsets + ReleaseTimeOfDay、
                  Cloudbeds cutoff/last-minute offset、Apaleo booking period/late booking until ≠ 定价权。
                  过程走 P33 + P35（+ P19 / P42 / P38 / T-Restriction / P60 / P05·P02）。
```

完成标准：用户说「OTA 上搜不到我们」「客人说订不了但我们明明有房」「提前 30 天以上就不让订了所以要降价」「临近 3 天才开卖，是不是该砍 BAR」「早订价才是市场价」→ Situation 写成**三把尺 + 两条时间轴（下单日 vs 住期）+ Pace/Remaining + 到底是没房、stay-side 限制，还是 booking-side 时窗**；Diagnosis 写「不可见 ≠ 需求弱」「窗口是显示/可售闸不是定价权」；Recommended Action 写先核窗口是否符合意图（误挡则放宽窗口、保持公开尺；刻意围栏则维持）；What To Watch 写公开 BAR 是否仍 Hold、放宽后 24h Pickup、渠道可售是否恢复、窗口外拒单是否有日志。**不 dump 399、不把早订/临近价写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 **P33** + **P35** **同一套过程路由**，本卡只把「booking-side 时窗」说清楚，**不另发明第四条定价规则**）：

```
1. 先问「搜不到 / 没有 offer」是哪一种：真卖光、stay-side 限制（MaxLOS/CTA/CTD → T-Restriction），
   还是 booking-side 时窗（Min/Max Advanced Booking、release time、booking period / sell dates、late booking until）。
   **不可见 ≠ 需求弱。** 本店窗口字段 / 华住 SOP / 默认提前期 / 本店 ALT = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「搜不到所以砍 / 提前期挡住所以 dump / 临近才开卖所以跟」。
3. 窗口误挡 → **P33**（先松窗口，不砍 BAR）；搜不到/曝光 → **P35**；advance-purchase 产品 → **P19**；
   同日 release time / 前台 → **P42**；随 DTA 收政策 → **P38**；stay-side → **T-Restriction**；
   错配置/映射 → **P60**；真弱 → **P05/P02**（可有窗围栏，仍禁一夜 −15%）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**Booking window 回答的是「什么时候允许下单」，不是「今晚该卖多少」。** 它回答「可见/可下单的时间边界」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把早订/临近促销价写成新 BAR。禁止编华住窗口 SOP。禁止把 Vendor 默认值当中国常模。禁止编 699。禁止编 Walk $。**

**命名钉死：T-Window ≠ T-Restriction ≠ T-Flash ≠ T-Floor ≠ T-Rack ≠ T-Hurdle ≠ T-Corp ≠ T-Component ≠ T-Tax。** T-Window = **下单时间轴**（提前期/时刻/售卖期）专精；T-Restriction = **住期时间轴**（MaxLOS/CTD/CTA 过滤）；T-Flash = 促销**成交价**不能反写公开尺；T-Floor = 金额地板/Min·Max；T-Rack = 门市年·季基准；T-Hurdle = 可售门/LRV。过程交 **P33** + **P35**。

---

## 1. 三把尺：Public BAR / Booking-side 时窗 / Pace·Remaining·是否真有 offer

顾问问题不是「系统里有没有提前期字段」，是：**屏幕上这个时窗，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（non-qualified） | Ahead Hold；真弱才 P05/P02（仍这把尺） | 当成「搜不到所以 dump」令；砍到 399 |
| **Booking-side 时窗** | Min/Max Advanced Booking（天/小时）、ReleaseTimeOfDayStart/End、booking period / Start-End Sell Dates、late booking until | 可留在可售/展示闸；误挡则**放宽窗口**；刻意围栏则维持并说明 | 写成今晚公开 BAR；用早订/临近价锚公开尺 |
| **Pace · Remaining · 是否真有 offer** | Pickup Pace、真实剩余、渠道/引擎是否真的返回 offer | → **P35** 搜不到诊断 / **P33** 松窗口 / **P01** 高峰 / **P05** 真弱 | 把「搜不到」读成「需求弱、必须改尺」 |

```
Public_BAR                 = 799        # Simulation：公开灵活
Booking_window             = min/max advanced booking + release time + booking period/sell dates + late-booking-until
Stay_side_restriction      = MinLOS / MaxLOS / CTA / CTD        # → T-Restriction，不是本卡
Visibility                 = 渠道/引擎是否返回 offer（可能被窗口挡）
Layer                      = public BAR | booking window | stay restriction→T-Restriction | promo price→T-Flash | floor→T-Floor | 真弱→P05
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact。OPERA / Booking.com / Cloudbeds / Apaleo 的示例值（30 天、3 天、720h、72h、13200h、550 天、1 小时、4pm、10:00–14:15）= **厂商文档示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

**两条时间轴必须分开写**（这是本卡最容易被塌掉的地方）：

```
下单日轴（booking date）   ← 本卡：提前期 offset / release time / booking period / Start-End Sell Dates
住期轴（stay date）        ← T-Restriction：MinLOS / MaxLOS / CTA / CTD；T08/P40：LOS 整段价
```

Apaleo 页面把两轴同时写出（可订 4/8–6/20、住 5/20–6/25 = 两个独立区间）；OPERA 的 Start/End Sell Dates 是「你能为这个价码下单的日期范围」，与住期不是同一件事。把两轴混成一句「这个日期不能订」，会开错杠杆：住期问题去松 MaxLOS/CTA（T-Restriction），下单期问题去松 offset/booking period（本卡）。

---

## 2. 时窗字段是过程，不是定价权（逐源与 Source Date）

厂商/协会把「什么时候能订」做成**可售/展示闸**。没有一家被打开的官方页把它写成「搜不到就该把公开灵活价改写成 399」。

| 源 | 类型 / 证据 | 厂商/协会实际说了什么 | Source Date | 顾问读法 |
| --- | --- | --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Rate Codes*（§131→**§132 升核**） | A Vendor PMS | **Min Advanced Booking (Days)**：预订必须至少提前的天数；**Max Advanced Booking (Days)**：最多提前的天数；**Start / End Sell Dates**：可为该价码下单的日期范围；同屏另有 Min/Max LOS、Rate Floor、Yieldable、Tiered | 26.2 文档（页面未标日期） | **配置字段。** 窗口 ≠ BAR Type；与地板（→T-Floor）、LOS（→T-Restriction）同屏但不同对象 |
| Booking.com Connectivity *BookingRule*（§131→**§132 升核**） | A Vendor OTA | **MinAdvancedBookingOffset / MaxAdvancedBookingOffset** 相对 check-in 当天午夜 24:00 CE(S)T，**search date 计入**；**ReleaseTimeOfDayStart/End** = 当天可开始/停止被订的时刻，15 分钟粒度 | 页面标 Last updated ~1 个月前（约 2026-08） | **接口字段。** 口径细节（午夜基准 + search date 计入）会让「差一天」看起来像「需求没了」 |
| Cloudbeds *Connect a distribution channel*（**§132 新开**） | A Vendor PMS | **Min offset = cutoff / Early Booker**（例 720h → 入住前 30 天停售）；**Max offset = Last Minute**（例 72h → 入住前 3 天才开）；默认 0 / 13200（约 550 天）；**任一设 0 可能使房到入住日午夜前不可订** | Updated 2026-09-01 | **命名反直觉 + 默认值事故面。** 「Min」挡临近、「Max」挡远期；配置事故 → P60/P33，不是砍 BAR |
| Apaleo *Setting up Rate Plans*（**§132 新开**） | A Vendor PMS | min/max advanced booking 决定何时可订（例：check-in 17:00、min 1 小时 → 当天最晚 16:00 下单）；**late booking until**；**booking periods**：窗外「not be visible to bookers」；下单窗与住期窗独立 | Updated 2025-10-09 | **两轴分离的官方写法。** 「不可见」是窗口后果，不是需求判决 |
| Apaleo *Service Availability*（**§132 新开**） | A Vendor PMS | 有房却无 offer → **先查 rate plan restrictions（例 minimum advance booking）**；override「Show unavailable offers」**不改可售、不改价格** | Updated 2025-11-12 | **排障顺序的官方背书。** 「搜不到」先查闸；override 不是改价，改价另说 |
| HSMAI Academy *ALT Average Lead Time*（§131→**§132 升核**） | A 协会 Fact | Lead Time = 下单到入住的天数；ALT 常用于**确定与衡量 advance purchase 之类价码** | 页面标 2025-12-30 | **诊断输入。** 窗口该对着 ALT / booking curve 设，不是对着折扣 % 设 |
| HSMAI Academy *Length-of-Stay Pricing*（§131 指针） | A 协会 Theory | 按 arrival + total duration 定整段价；示例 $100/晚 vs 3 晚 $275 | 页面标 2025-12-30 | **本卡不当核** → handoff T08 / P40；US 示例不进中国 Fact |
| HSMAI `advance-purchase` / `booking-window` / `booking-curve` / `booking-pace` / `lead-time` 猜链 | — | **HTTP 404**（2026-09-04 实测） | — | **FAIL。不引用、不代答。** |
| HotelKey `rate-plan-restrictions` / Clock `rate-restrictions` 猜链 | — | **HTTP 404**（2026-09-04 实测） | — | **FAIL。** 第三/第四家 Vendor 对本卡**未取到**，结论不升级 |

```
画面：OTA 上搜不到 / 客人说订不了但明明有房 / 提前 30 天就不让订 / 临近 3 天才开卖 / 同日 10:00 才放出来
Naive：搜不到 = 需求弱 = 砍 BAR 到 399
本卡：这些都是「什么时候允许下单」的闸。定价权在公开 BAR + Pace，不在时窗按钮。
```

```
OPERA Min/Max Advanced Booking (Days)   → 下单必须/最多提前多少天
OPERA Start/End Sell Dates              → 能为该价码下单的日期范围（≠ 住期）
BDC Min/Max AdvancedBookingOffset       → 相对 check-in 午夜的提前量（search date 计入）
BDC ReleaseTimeOfDayStart/End           → 当天几点开/停售（15 分钟粒度）
Cloudbeds Min offset = cutoff           → 越大越早停售（720h = 前 30 天停）
Cloudbeds Max offset = last-minute      → 越小越晚开售（72h = 前 3 天才开）
Apaleo booking period / late-booking    → 售卖期与当天最晚接单时刻
Public BAR                              → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 Booking Window / Release Time SOP / 默认 cutoff 小时 / last-minute 天数 / 本店 ALT / 窗口外流失转化率 / 699 Fact = **NV，不编。** UI 字段是 OPERA / BDC / Cloudbeds / Apaleo 的，不是本店报表名。**不把 Vendor 默认值（720h / 72h / 13200h / 1 小时 / 4pm）写成店规。**

---

## 3. 「搜不到 / 订不了 / 提前期挡住」是可售信号，不是改写许可证

过程仍走 **P33** + **P35**，本卡给 WHY（booking-side 时窗专精），**不重复 P33/P35 正文，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P33 + P35） |
| --- | --- | --- | --- |
| **A 拆三来源：真卖光 / stay-side / booking-side** | 「这天订不了」 | 三种原因混成一句 | **先分三类**：卖光→P03/P04；MaxLOS/CTA/CTD→**T-Restriction**；提前期/时刻/售卖期→本卡 |
| **B BAR→399「搜不到所以砍」** | 「OTA 上看不到我们，先降价」 | 把可见性读成需求曲线 | **拒绝 BAR→399**；先 **P35** 查库存/可售/内容，再核窗口 |
| **C 窗口误挡（cutoff/last-minute 设反或默认踩坑）** | 「前 30 天就不让订」「临近 3 天才开」「设了 0 结果全不可订」 | 配置事故（命名反直觉/默认值/渠道两侧同步） | **P33** 放宽相应窗口 + **P60** 核配置/映射；公开尺 **Hold** |
| **D 刻意围栏（advance purchase / last-minute 产品）** | 「早订价要求提前 21 天」「临促只在 3 天内开」 | 这是**产品设计**，不是尺子 | **维持**并写清资格；产品化走 **P19**；报名走 **P18**；**不把早订/临促价写成公开 BAR** |
| **E 同日 release time / late booking until** | 「今天 10:00 才放出来 / 16:00 就不收了」 | 同日时刻闸 | **P42** 前台/当日；未冰报公开 BAR 或更高；**不跟 dump** |
| **F 真弱 leftover** | 「窗口都松了还是没人订」 | 需求真弱 | **P05 / P02**；可有窗围栏 + 截止日；**禁一夜 −15%**；仍不从时窗改写 BAR |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 「搜不到」 | 需求可能仍强；公开尺 **Hold**；先核窗口与可售 | 「搜不到所以 BAR→399」 |
| 客人说订不了、PMS 显示有房 | 官方排障顺序：先查 rate plan 限制（含 minimum advance booking） | 直接判「需求弱」并降价 |
| cutoff 与 last-minute 命名 | **Min offset 挡临近、Max offset 挡远期**（Cloudbeds 语义）；OPERA 的 Min/Max Advanced Booking 是「至少/最多提前几天」——**口径不同，必须问** | 按字面猜方向，改错那一头 |
| 提前期设成 0 / 默认值未审 | 可能整段不可订（Cloudbeds 明示）→ 修配置 | 把配置事故当市场信号 |
| ALT / booking curve | 窗口对着 ALT 设；ALT 变短≠该砍尺，可能是收窗行为改变 | 拿 ALT 反推固定折扣 % |
| 窗口松了仍 Behind | **P05/P02**：可有窗围栏 | 一夜 −15%；把临促价永久化成公开尺 |

---

## 4. Diagnose 边界：本卡 ≠ T-Restriction ≠ T-Flash ≠ P35 ≠ P19 ≠ P05

几边都在「客人订不了 / 看起来卖不动」附近，对象不同。塌成「反正搜不到就砍」会开错杠杆。

| | **本卡 T-Window** | **T-Restriction** | **T-Flash** | **P35** | **P19** | **P05/P02** |
| --- | --- | --- | --- | --- | --- | --- |
| 对象 | 下单时间轴（提前期/时刻/售卖期） | 住期时间轴（MaxLOS/CTD/CTA） | 促销窗内**成交价** | OTA 曝光/排名诊断 | 预付不可退**产品** | 真 Behind leftover |
| 尺 | 公开 BAR vs 时窗 | 公开 BAR vs 住期过滤 | 公开 BAR vs 促销价码 | 公开 BAR vs 曝光 | 公开 BAR vs 预付产品 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799；误挡则松窗口 | Hold；过度→松限制 | Hold；促销留窗内 | Hold；先查库存/内容 | Hold；产品留产品 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；从时窗 rewrite | 399；从限制层 rewrite | 399；从闪促 rewrite | 399「为排名」 | 399；把预付价当公开尺 | 一夜 −15% |

顾问第一闸永远是：**这是真的没房，还是住期限制，还是下单时窗，还是促销价码，还是曝光问题，还是产品设计，还是真弱？** 窗口 → 本卡 + **P33**；搜不到/排名 → **P35**；住期 → **T-Restriction**；促销价 → **T-Flash**；产品 → **P19**；同日时刻 → **P42**；政策收窗 → **P38**；配置事故 → **P60**；真弱 → **P05/P02**。

LOS 整段价 / Tiered（HSMAI LOS Pricing、OPERA Tiered Rates）：**S03-22 leftover / MEDIUM-LOW**；本卡不当核；一行 handoff → **T08** / **P40** / **P41** / **P76** / **P21**。

---

## 5. 假尺子一族

屏幕上的可售/展示工具被当成定价按钮：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **本卡 T-Window** | 「搜不到 / 提前期挡住 / 临近才开卖 / 同日 10:00 才放」 | **公开 BAR + Pace**；时窗留时窗，误挡就松窗口 |
| **T-Restriction** | 「关了离店卖不动只能砍」 | 公开 BAR + Pace；住期限制 ≠ BAR |
| **T-Flash** | 「闪促卖爆了所以改尺」 | 公开 BAR + Pace；促销窗 ≠ BAR |
| **T-Floor / T-Rack / T-Hurdle / T-Corp / …** | （各卡画面） | 公开 BAR + Pace |

与 **T-Restriction / T-Flash / T-Floor / T-Rack / T-Hurdle** 的边界：住期限制过滤停留形态；闪促是价码与窗；地板是金额保护；门市是年·季基准；hurdle 是可售门。本卡是 **下单时窗专精**。对象不同，假尺子同族；**过程交 P33 + P35**。

---

## 6. Diagnose → Advise

用户原话：「OTA 上搜不到我们」「客人说订不了，我们明明有房」「提前 30 天以上就不让订了，是不是该降价」「临近 3 天才开卖所以卖不动」「早订价才是市场价」「同日 10 点才放出来所以先砍 BAR」。

```
Situation
  钉四件事：①「订不了/搜不到」属于哪一类（真卖光 / stay-side 限制 / booking-side 时窗 / 曝光）；
            ②两条时间轴分别是什么（下单日窗 vs 住期窗）；
            ③拟议是「改尺 dump」还是「Hold 公开 + 核/松窗口」；
            ④Pace / Remaining / 渠道是否真返回 offer。
  缺本店窗口字段 / 华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT → 问，不编。

Diagnosis
  时窗被允许改的是：
    (1) 谁在什么时候能看到并下单（可售/展示闸）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 核窗口 + Hold 公开 BAR；误挡 → P33 放宽；配置事故 → P60
    (4) 是否先移交 T-Restriction / P19 / P42 / P38 / P35 / P05 —— 对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；把早订/临促价写成公开尺；发明华住窗口 SOP / 默认提前期。
  **Ahead 夜：时窗不被允许把公开 BAR 改写成 399。**「不可见」是闸的后果，不是需求判决。

Recommended Action（模板句，日期/房型/价码待用户数据填）
  ① 先核该价码/房型在该住期的 booking window：min/max advanced booking、release time、booking period / sell dates、late booking until；
  ② 与意图不符（误挡、默认值未审、渠道两侧同步成 0）→ 放宽到意图值（P33），必要时同步核 CM 映射（P60），公开尺不动；
  ③ 与意图相符（advance purchase / last-minute 产品、高峰刻意围栏）→ 维持，向前台/销售说明这是资格闸不是价格问题（P19 / P18）；
  ④ 公开 BAR：Ahead / 高峰 Hold 779–799 首选 799；真 Behind 且窗口已正常 → P05/P02，理由写 Pace，禁一夜 −15%。

What To Watch
  放宽后 24h 净 Pickup（分渠道）；渠道/引擎可售是否恢复返回 offer；窗口外拒单/搜索失败是否有日志（无日志按 P43 纪律不动尺）；
  是否误开了低档（P64）；公开 BAR 是否仍 Hold；ALT / booking curve 变化（作为诊断输入，不是折扣器）
  不是「窗口调完了就算改完 BAR」
```

Ahead 或仍紧 → **核窗口 + Hold 公开 BAR**（779–799 首选 **799**）；误挡 → **P33**（+ **P60**）；搜不到 → **P35**；真 Behind 且窗口正常 → **P05/P02**，理由写 Pace，尺仍是公开 BAR。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88。**

---

## 7. ask-list（全部 NV）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 客人是**搜不到**、**看到但订不了**，还是**真卖光**？在哪个渠道/官网引擎？ | 把闸当需求；砍错尺 | **NV** |
| 2 | 该房型/价码的 **min / max advanced booking** 是多少（天还是小时）？口径是「至少提前」还是「最晚可订点」？ | 命名反直觉，会往反方向改 | **NV** |
| 3 | 有没有 **release time / late booking until**（当天几点开、几点停）？ | 同日误判成需求弱 | **NV** |
| 4 | 有没有 **booking period / Start-End Sell Dates**？它和住期窗分别是哪段？ | 两轴混淆，去松错了限制 | **NV** |
| 5 | 这是**误挡**还是**刻意的 advance-purchase / last-minute 围栏**？谁设的、什么时候设的？ | 把产品设计当事故，或反之 | **NV** |
| 6 | 是不是 stay-side 限制（MinLOS/MaxLOS/CTA/CTD）？（→ T-Restriction） | 开错杠杆 | **NV** |
| 7 | 当前公开灵活 BAR 是多少？Pace / Remaining 如何？399 从哪来（前台话术 / 竞对截图 / 平台建议）？ | 会把闸故事当真弱砍价 | **NV。** 先 Hold 公开 BAR |
| 8 | 本店 ALT / 常见提前期分布是多少？华住是否有窗口 SOP？ | 会编默认天数 / 华住 SOP | **NV。不编。** |
| 9 | 窗口外的拒单/搜索失败**有日志吗**？ | 无日志按 P43 纪律：不凭故事动尺 | **NV** |

---

## 8. What To Watch（顾问可说出口）

1. **公开 BAR 是否仍 Hold**（779–799 首选 799；Simulation）。
2. **窗口是否符合意图**：min/max advanced booking、release time、booking period / sell dates、late booking until。
3. **渠道两侧是否一致**（PMS/CM/渠道 extranet 同步；默认值是否被踩成 0）→ P60。
4. **放宽后 24h 净 Pickup** 分渠道看；可售是否恢复返回 offer。
5. **窗口外拒单/搜索失败是否有日志**（无日志 → P43 纪律）。
6. **是否误入** T-Restriction（住期）/ T-Flash（促销价）/ T-Floor（金额地板）/ P19（产品）。
7. **NV 是否仍 NV**：华住窗口·Release Time SOP、默认提前期、本店 ALT、699、Walk $。

不是：「窗口调完了就算改完 BAR」。

---

## 9. 短例（Simulation only；非本店 Fact）

| 夜 | 公开 BAR | 时窗画面 | Pace | 默认 |
| --- | --- | --- | --- | --- |
| Sat Ahead | **799** | 「OTA 上搜不到，先砍到 399」 | Ahead | **Hold 799**；先 P35 查可售 + 核窗口；**拒 399** |
| Sat Ahead | **799** | 「有房但引擎不给 offer」（min advance booking 误设） | Ahead | **P33** 放宽窗口；**Hold 799**；**拒 399** |
| 远期 Sat | **799** | 「max offset 默认只放到很近才开卖」 | 远期 Behind | 核默认值（**P60** 配置 + **P33** 松窗口）；**Hold 公开尺** |
| 同日 | **799** | 「今天 10:00 才放出来 / 16:00 就不收了」 | 未冰 | **P42**：报公开 BAR 或更高；**不跟 dump** |
| 刻意早订产品 | **799** | 「早订价要求提前 21 天，销售要把它当公开价」 | Ahead | **P19** 产品留产品；**拒把早订价写成 BAR** |
| 真弱 | **799→围栏** | 「窗口都松了还是没人订」 | Behind | **P05/P02**；有窗 + 截止日；**禁一夜 −15%** |

14 / 399 / 799 = **Simulation only**。**399 = 被拒绝的 dump（时窗/可见性改尺）**。**799 = Hypothesis/Simulation Hold 首选**。**不发明 699**。厂商示例（30 天 / 3 天 / 720h / 72h / 13200h / 550 天 / 1 小时 / 4pm / 10:00–14:15）**不是本店常模**。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-WIN-01 | 本店/各渠道真实 min·max advanced booking 值与口径（天/小时、至少提前 vs 最晚可订点） | **NV。不代答。** 先问，不编 |
| NV-WIN-02 | 本店是否有 release time / late booking until；几点 | **NV。** |
| NV-WIN-03 | 本店 booking period / Start-End Sell Dates 现状 | **NV。** |
| NV-WIN-04 | 华住 Booking Window / Release Time / 提前期 SOP | **NV。不编。** |
| NV-WIN-05 | 本店 ALT / 提前期分布 / 窗口外流失转化率 | **NV。不编 %。** |
| NV-WIN-06 | 399 来源（前台话术 / 竞对截图 / 平台建议 / Budget） | **NV。** 先 Hold 公开 BAR |
| NV-WIN-07 | 第三/第四家 Vendor 独立核（HotelKey / Clock 猜链曾 404） | **已补：** Clock §133；HotelKey Lead Days §136（Rate Plan Configuration）。结论不升级为中国 Fact；本店字段仍 NV |
| NV-P33/P35/P19… | 已挂 | 仍按其 NV |

Watch：公开 BAR 是否仍 Hold；窗口是否符合意图；误入 T-Restriction / T-Flash / P19 / P05 是否已移交。

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-04 00:17 CST | 首版。T-Window = Booking-side 时窗（Min/Max Advanced Booking、Release Time、Booking Period / Start-End Sell Dates、late booking until）vs public BAR。**≠ T-Restriction ≠ T-Flash ≠ T-Floor ≠ T-Rack ≠ T-Hurdle。** 两条时间轴（下单日 vs 住期）；三把尺；形 A–F；OPERA Rate Codes + BDC BookingRule + Cloudbeds cutoff/last-minute + Apaleo booking period / Service Availability + HSMAI ALT ≠ 定价权；假尺子一族加入 T-Window。**不写 P88/P89。** 14/399/799 Simulation only。399 = 被拒绝的 dump。过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。S03-22 说 Booking Window 四件套 fail for NEW playbook 因邻剧覆盖动作 — **不阻挡**理论加深（同 T-Restriction←S03-06 / T-Rack←S03-14）。 |
| 2026-09-04 18:17 CST | C04-02 callable Simulation `cases/sim-2026-booking-window-sat.md`。配套行改指向；正文三句 / 399 / 799 / 不发明 699 **不改**。过程仍 **P33** + **P35**。§135 CASE 指针。**不开 P88/P89。** |
| 2026-09-04 20:17 CST | R04-20 sources-recap。§136 用途升核 HotelKey Min/Max Booking Lead Days（补 §132 HotelKey FAIL）+ Protel Min/Max advance booking。NV-WIN-07：HotelKey Lead Days **已取**（Clock 已于 §133）；正文三句 / 399 / 799 **不改**。不开 P88/P89。 |

---

## 12. 交叉（不改 P01–P87 正文；T-Restriction / T-Flash / T-Floor / T-Rack / T20 / optimization-advice / restriction-framework 仅文末一行或不改；邻卡仅文末一行）

- **P33** `advisor-playbooks/restriction-overuse.md`：窗口/限制过度过程主剧。误挡先松窗口，不砍 BAR；本卡不重写其三句。
- **P35** `advisor-playbooks/ota-visibility-drop.md`：搜不到/曝光诊断过程。先查库存/可售/内容；本卡补「booking-side 时窗」这一类原因。
- **P19** `advisor-playbooks/prepaid-nonrefundable.md`：advance purchase 作为**产品**；早订价 ≠ 公开尺。
- **P42** `advisor-playbooks/same-day-walk-in.md`：同日 release time / late booking until 的前台面。
- **P38** `advisor-playbooks/cancel-policy-tighten.md`：随 DTA 收紧**政策**（先收政策，不先砍 BAR）。
- **P60** `advisor-playbooks/channel-mapping-misprice.md`：默认值/同步/映射事故 = 配置层，不是市场价格。
- **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`：住期轴移交（MinLOS/MaxLOS/CTA/CTD）。
- **T-Flash / T-Floor / T-Rack / T-Hurdle / T-Corp / T-Component / T-Tax**：假尺子同族、对象不同。
- **T08 / P40 / P41 / P76 / P21**：LOS 整段价 / Tiered / 停留形态（HSMAI LOS Pricing 仅 handoff，本卡不当核）。
- **P43**：窗口外「有人订不了」若无日志，按口头拒单纪律不动尺。
- **P05 / P02 / P01 / P45**：Ahead Hold 公开 BAR；窗口正常后才谈真弱 leftover；早会一个动作通常是「核窗口 + Hold」，不是改尺。
- **禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88/P89。禁止编华住 Booking Window·Release Time SOP、默认提前期、本店 ALT、佣金%、Walk $。禁止把 Vendor 默认值当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advice。禁止造 systems/*.md。禁止把 T-Window 叫成 T-Restriction / T-Flash / T-Floor / T-Rack。**

> 交叉指针（2026-09-04 12:17 R04-12，不改正文三句 / 399 / 799）：§133 新开 Clock PMS+ Rate Restrictions（Min/Max days before arrival + Last Minute days ≠ 公开灵活 BAR rewrite）+ OPERA 5.6 Rate Header Sell Controls（Minimum / Maximum Advance Booking ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。补齐 §132 Clock 猜链 FAIL。不开 P88。不开 P89。

> 交叉指针（2026-09-04 18:17 C04-02，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-booking-window-sat.md`。Diagnose 走 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699；§135。不开 P88。不开 P89。

> 交叉指针（2026-09-04 20:17 R04-20，不改正文三句 / 399 / 799）：§136 用途升核 HotelKey Min/Max Booking Lead Days（补 §132 HotelKey FAIL；可见性提前期闸 ≠ 公开灵活 BAR rewrite）+ Protel Min/Max advance booking of X Days / when booked X–Y（提前期闸 ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
