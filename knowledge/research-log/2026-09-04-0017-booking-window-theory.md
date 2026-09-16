# 2026-09-04 00:17 CST · THEORY T04-00 · T-Window

## 槽

理论/指标小时（00:17 ∈ {0,8,16}）。加深 S03-22 scout 的 **MEDIUM 候选 Booking Window / Min-Max Advanced Booking / Release Time / Start-End Sell Date** → **T-Window**（slug `booking-window-vs-bar`；ID T04-00），镜像 T-Rack←S03-14 / T-Restriction←S03-06 / T-Component←P13+P37 / T-Floor←T20 / T-Tax←P79。**≠ T-Restriction（住期轴）≠ T-Flash（促销成交价）≠ T-Floor ≠ T-Rack ≠ T-Hurdle ≠ T-Corp ≠ T-Component ≠ T-Tax。** 过程仍 **P33**（窗口/限制过度 → 先松窗口不砍 BAR）+ **P35**（搜不到先查库存/可售/内容）+ handoff **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**。S03-22 scout-only 已开 §131 四页（OPERA Rate Codes / BDC BookingRule / HSMAI ALT / HSMAI LOS Pricing）；本小时升核并**新开 3 页**。S03-22 说 Booking Window 四件套 fail for NEW playbook 因邻剧覆盖动作 — **不阻挡**理论加深（同 T-Restriction after S03-06、T-Rack after S03-14）。**不开 P88。不开 P89。** 不写新剧本 / 决策卡 / 轻指标 / Simulation。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。

## 一句话

Booking window（提前期 offset / release time / booking period / Start-End Sell Dates / late booking until）回答「什么时候允许下单」，不回答「今晚该卖多少」；「搜不到 / 有房却没有 offer」可能是**下单时窗**挡住，不等于需求弱，也不是把公开 BAR 改写成 399 的许可证；两条时间轴（下单日 vs 住期）必须分开：住期问题走 T-Restriction，下单期问题走本卡；Ahead Hold 779–799 首选 799；拒 BAR→399；过程仍 P33 + P35；不开 P88。

## 做了什么

1. 写 `theory/booking-window-vs-bar.md`（T-Window / T04-00；三把尺 + 两条时间轴 + 形 A–F + 假尺子一族 + ask-list 9 问 + Recommended Action 模板句）
2. P33 / P35 / P19 / P42 / T-Restriction / problem-tree **文末一行**理论指针（三句 / 399 / 799 / 邻卡正文 **不改**）
3. 源表 §132（升核 §131 四页 + **新开 3 页** + myallocator 同族登记 + OPERA stay-side 指针 + 7 条 404 FAIL + NV 行）
4. progress / README §8 头 + §8.1 + §8.3 + §8.4 / backlog / BACKLOG 头 / knowledge-map §8
5. **不开 P88**；**不开 P89**；不另开 playbook / 决策卡 / 轻指标 / Simulation 文件
6. 不重写 T-Restriction / T-Flash / T-Floor / T-Rack / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句
7. LOS Pricing / Tiered（S03-22 MEDIUM-LOW leftover）不当本卡核 — 一行 handoff → T08 / P40 / P41 / P76 / P21

## 源核（全部本小时 curl，HTTP 200 / 404 实测）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **升核/复核** | OPERA Cloud 26.2 Configuring Rate Codes | 200 size≈190621；抓到 **Min/Max Advanced Booking (Days)** 原句 + **Start/End Sell Dates**「date range during which you can make reservations」 |
| **升核/复核** | Booking.com Connectivity BookingRule | 200 size≈636196；抓到 **Min/MaxAdvancedBookingOffset**（相对 check-in 午夜 24:00 CE(S)T，search date 计入）+ **ReleaseTimeOfDayStart/End**（15 分钟粒度） |
| **升核/复核** | HSMAI Academy ALT Average Lead Time | 200 size≈359618；ALT「used to determine and measure rate plans, such as advance purchase rates」；页面标 2025-12-30 |
| **新开** | Cloudbeds Connect a distribution channel（Advanced booking settings） | 200 size≈101444；Min offset = cutoff（720h→前 30 天停售）/ Max offset = last-minute（72h→前 3 天开）；默认 0 / 13200（≈550 天）；**任一设 0 可能到入住日午夜前不可订**；Updated 2026-09-01 |
| **新开** | Apaleo Setting up Rate Plans | 200 size≈29018；min/max advanced booking + **late booking until** + **booking periods**（窗外 not visible to bookers）；页面例把下单窗与住期窗分开；Updated 2025-10-09 |
| **新开** | Apaleo Service Availability | 200 size≈23878；「rooms available but no offers appear → check rate plan restrictions, e.g. **minimum advance booking**」；override**不改可售、不改价格**；Updated 2025-11-12 |
| **同族登记 / 不当第三核** | Cloudbeds myallocator Min/Max Advanced Offset | 200 size≈29596；Cut off / Last Minute；**并非所有渠道都同步** |
| **指针** | OPERA Cloud 26.2 Rate Availability Restrictions | 200 size≈44584；stay-side → T-Restriction，不是本卡 |
| **指针（不当核）** | HSMAI Length-of-Stay Pricing | 200 size≈364862；US 示例不进中国 Fact → handoff T08/P40 |
| **FAIL** | HSMAI 猜链 advance-purchase / booking-window / booking-curve / booking-pace / lead-time | **404 ×5**。不引用、不代答 |
| **FAIL** | HotelKey rate-plan-restrictions 猜链 / Clock rate-restrictions 猜链 | **404 ×2**。第三/第四家 Vendor 本轮未取到，结论**不升级** |
| **失败/NV** | 华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT / 转化率 / 699 / Walk $ / 佣金% | **仍 NV。不编。** |

Evidence Level / Source / Source Date / Last Verified / Confidence 已逐源写入卡头与 §2 表。Fact（字段存在与语义）与 Best Practice / Hypothesis（诊断顺序、Hold 799）分开标。

## 兼容（一致性检查）

与近三轮 **S03-22 scout-only** / **R03-20** / **C03-18** / **T-Rack**，以及被点名的 **S03-06 / T03-08 T-Restriction / C03-10 / R03-12** 逐条比对：**无真矛盾**，无 needs_revision。

- S03-22 明确「下一槽 2026-09-04 00:17 = theory，可评估 Booking Window 短 Theory；若不能显著改变调用，不写」→ 本轮判定**能改变调用**（新增「有房却无 offer 先查下单时窗」诊断闸 + 两轴分离 + 命名反直觉/默认值事故面），故写。四件套 fail 只否决 **NEW playbook**，不否决理论卡（先例：T-Restriction←S03-06、T-Rack←S03-14）。
- T03-08 / C03-10（T-Restriction）对象是 **住期轴** MaxLOS/CTD/CTA，过程 P33 + P40/P21；本卡对象是 **下单日轴**，过程 P33 + P35。共用 P33 不冲突，本卡未改 T-Restriction 三句 / 399 / 799。
- R03-12 / R03-20 的 §126 / §130（Cloudbeds 限制、Hide Base Rate、OPERA Rack）与本卡结论同向：可售/展示配置 ≠ BAR rewrite。
- 价格纪律**原样**：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**；禁一夜 −15%。399 在本卡仍是「被拒绝的 dump」。
- 最新 Diagnose 路由：门市/牌价类 → T-Rack（P01+P64）；住期限制类 → T-Restriction（P33+P40/P21）；**「搜不到 / 订不了 / 提前期挡住」类 → 本卡 T-Window（P33+P35）**。三者并存，不互相覆盖。

## 刻意不补

**P88**；**P89**；新剧本 / 决策卡 / 轻指标 / Simulation；Pet/AAA；smoking/damage FEE；LOS Pricing / Tiered 当核（仅 handoff）；重写 T-Restriction / T-Flash / T-Floor / T-Rack / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句；重写 P01–P87 正文（仅文末一行）；华住 Booking Window·Release Time SOP；默认提前期 / cutoff 小时 / last-minute 天数；本店 ALT / 转化率；699 Fact；Walk $；Vendor 默认值当中国 Fact；systems/*.md；here.now publish；git commit；操作用户机器；通知用户。

## 顾问可用性

用户说「OTA 上搜不到我们」「客人说订不了但我们明明有房」「提前 30 天以上就不让订了要不要降价」「临近 3 天才开卖所以卖不动」「早订价才是市场价」「同日 10 点才放出来先砍 BAR」→ Diagnose 走 **T-Window**，过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。三把尺 + 两轴；闸 ≠ 定价权；Hold 779–799 首选 799；拒 399；窗口字段 / 华住 SOP / 默认提前期 / 本店 ALT 均 NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**会**。
- Situation：新增必问「订不了是真卖光 / 住期限制 / **下单时窗** / 曝光」四分类，并要求把**下单日窗与住期窗分别写出**（此前问题树只有住期侧 O8 与 P35 曝光侧）。
- Diagnosis：可写「不可见是闸的后果，不是需求判决」，并有 Apaleo 官方排障顺序与「override 不改可售/价格」作背书。
- Recommended Action：误挡 → 放宽相应窗口（P33）+ 核渠道两侧同步/默认值（P60），公开尺不动；刻意围栏 → 维持并按 P19/P18 说明；同日时刻 → P42；真弱 → P05/P02。**Ahead 仍 Hold 779–799 首选 799，拒 399。**
- What To Watch：放宽后 24h 分渠道净 Pickup、可售是否恢复返回 offer、窗口外拒单是否有日志（无则 P43 纪律）、ALT / booking curve 作为诊断输入。

## Notify

**YES**（callable theory card drafted：`theory/booking-window-vs-bar.md`，含新诊断闸与 3 页新开 A 级源）。

## 下一槽

**2026-09-04 02:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** 可选下一步：T-Window 专卷 Simulation（booking-window Sat）。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。第三/第四家 Vendor 独立核（HotelKey / Clock 正式检索）留给 recap。
