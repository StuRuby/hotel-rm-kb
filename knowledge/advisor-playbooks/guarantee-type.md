# Playbook P55｜Guarantee Type｜担保 vs 非担保 / 6 点放房

> slug **guarantee-type** · drafted 2026-08-26 06:17 CST  
> 配套：`dont-dump-on-nonguaranteed.md` · `guarantee-mix.md` · `sim-2026-6pm-hold-sat.md`  
> 理论：`theory/guarantee-release.md`（**T-Guar** drafted 2026-08-26 08:17；画面 OTB 还不是需求 — 先问这个预订类型扣不扣、几点放；释放是事件不是预测）· T-Status `theory/group-inventory-deduct.md`（团块上一层，不重写）· 主卡复用 `dont-dump-on-nonguaranteed.md`（不重写）  
> 证据：A **Vendor PMS**（OPERA 26.2，store-configured）；A 词条（HSMAI）；动作 B/Hypothesis。  
> 本店类型名、担保媒介、押金比例、放房时点、Rolling 控制均 **NV**。不把 OPERA 类型当华住 SOP。不操作 PMS/RMS/OTA/前台。

## 0. 三句（原样）

1. 先问今晚的 OTB 里有多少是 **非担保 / 6 点保留**。到点会放的房不是已卖掉的需求，也不是今晚该砍价的理由。本店预订类型与放房时点 **NV**，不把 OPERA 类型名当华住 SOP。
2. 高峰：先收紧担保要求（新生产）或开浅预付，再谈价。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「一半是 6 点保留」就提前 dump。
3. 放房落地后才按真 remaining + Pace 走 P01 或 P05。已发生的 no-show 走 P54；卖限/赶客走 P24；改取消窗口走 P38；预付产品走 P19。不要把 BAR dump 到 399「反正非担保」。

## 1. Situation

钉 Stay Date、Physical、BAR、OTB 总间夜，并拆：担保、非担保/到点释放、未知。逐类型问是否 deduct、实际释放点、是否 Rolling No Show；缺失写 NV。用户原话包括：「今晚一半是 6 点保留，算不算卖了」「非担保到点不来就放，现在要不要降价」「高峰要不要只收担保单」「反正 6 点会放出来，先挂着」。

## 2. Diagnosis

| 形 | 机制 | 诊断 |
| --- | --- | --- |
| A 假已卖 | hold 占画面 | 不按含非担保 OCC 涨 |
| B 提前 dump | 预计释放被当当前弱需求 | 禁止；尚未真实释放 |
| C 真 leftover | 释放后厚且 Behind | 转 P05 |
| D 高峰担保闸 | 新订单质量 | 只改**新生产**，不追溯旧单 |
| E Rolling No Show | 类型滚到达日 | 问本店控制，重算真 remaining |
| F 误入 | 已 no-show/卖限/取消窗/预付/前台/团块 | P54/P24/P38/P19/P42/P53 |

主诊断：担保类型是 transient OTB 的可兑现性轴，不是涨/降价的单独理由。问题树 §61。

## 3. Revenue Opportunity / Risk

主机会：高峰先提高**新生产**的担保质量或给浅预付选择，不用价格换一张会释放的 hold。主风险：按混合 OTB 涨出假高峰，或因预计释放提前砍出假弱市。Rolling 状态与团队误入是次风险。

## 4. Recommended Action

```text
Stay Date: 用户给定
Guarantee mix: Guaranteed / Non-guaranteed-release / Unknown（间夜；无默认 %）
Current BAR: 用户值
Recommended: Hold 779–799；Preferred 799（Hypothesis / Simulation）
New production: 高峰可收紧担保要求或开浅预付
Existing bookings: 不改变已确认客人的条款
Before release: 不把预计释放当真 remaining
After release: 真 remaining + Pace → P01/P05
Do-not-do: 按混合 OCC 涨；提前 dump；BAR→399；编押金%/中国放房点
```

真实酒店若当前 BAR 不在该带，保留 Hold 方向，不把 779–799 当市场 Fact。

## 5. Why

OPERA 26.2 的 6:00 PM Hold / Guaranteed by Credit Card / Guaranteed by Company 是 **Vendor PMS store-configured examples**；Deduct/Non-Deduct 与 4 PM release 也只是厂商示例。HSMAI guaranteed 是信用卡或其他付款形式担保；overbooking 依历史 no-show 与 last-minute cancellations。因此先看 guarantee mix，真实释放后再看 remaining + Pace。

## 6. Expected Impact

避免假高峰涨价和提前 BAR dump；提高高峰新订单兑现质量。转化、押金、净收入影响 Unknown，不编百分比或精确增收。

## 7. Risk

| 风险 | 观察 | 出口 |
| --- | --- | --- |
| 担保闸压转化 | 新生产/Pickup | Pace 转 Behind 则重评，不改旧单 |
| 类型映射错 | 本店 deduct/release | 名称不等于机制 |
| Rolling 占画面 | EOD 后状态 | 重算真 remaining |
| 房未实际可售 | 释放状态 | 未落地不进 P05 |
| 其实是团块 | Segment/block | P53/P52 |

## 8. What To Watch

今晚 OTB 各担保类型的**间夜数**；本店 deduct/release/Rolling；放房前后 remaining、净 Pickup 与 Pace；新生产担保/预付成交；公开 BAR 是否出现 399。

## 9. Re-evaluation Trigger

```text
IF 尚未真实释放 → Hold；不提前 dump。
IF 释放后 remaining 薄 OR Pace Ahead → P01 / Hold。
IF 释放后 remaining 厚 AND Pace Behind → P05；理由是真 leftover。
IF 已发生 no-show → P54。
IF 改卖限/赶客、取消窗、预付产品、前台口价、团块扣不扣
THEN P24 / P38 / P19 / P42 / P53。
```

## 10. Confidence

方向 **Medium**；价格点仅 Hypothesis/Simulation。不是 High：本店类型、释放点、押金与 Rolling 控制 NV。不是 Low：不提前 dump、释放后重算是可逆且有官方机制支持的动作。

## 边界

P54=已 no-show；P24=历史卖限/walk；P14=到店前取消 Soft OTB；P19=预付产品；P38=取消窗口；P42=前台口价；P53=团块扣不扣；P55=散客预订担保类型与到点释放。120/18/14/399/799 Simulation only；399 rejected。
> 交叉指针（2026-08-31 10:17，不改正文）：押金金额/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。本剧仍是担保类型/到点放房。不写 P87。押金/预授权不再 leftover。
> 交叉指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-09-02 14:17 S02-14，不改正文）：§115 OPERA Hold Room = 房号暂留机械 ≠ 担保类型/到点放房主刀；本剧边界不变。不开 P88。
