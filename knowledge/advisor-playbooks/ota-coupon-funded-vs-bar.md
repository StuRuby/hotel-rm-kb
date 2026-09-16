# Playbook P74｜OTA 券后价 / 平台出资折扣 vs 公开 BAR（券后/平台补贴不是公开 BAR；不要把客人看到的券后价写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/ota-coupon-funded-vs-bar.md`  
> BACKLOG：P74 OTA Coupon / Platform-Funded Discount vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **ota-coupon-funded-vs-bar**  
> 状态：**drafted**（2026-08-29 10:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-to-coupon-after.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/coupon-after-vs-public-bar.md`（公开 BAR vs 券后挂牌 vs 谁出资；**无默认券折扣 %**；本店券/美团·携程出资 SOP NV）  
> 理论：暂无独立理论卡；Diagnose 先走本剧。邻 **T-Flash**（自己闪促窗）/ **T-Parity**（渠道价平）只作交叉，不复写。  
> 理论核源：OPERA Promotion Coupon Codes（limited-use ≠ 公开 BAR）；HotelTechUpdate 2026-08-03（OTA 自掏 margin 折扣 ≠ 真破平）；DirectYourBookings 2026-08-21（客人看到的价 = 多层；平台出资层 ≠ 酒店装入的公开尺）  
> 交叉：P59 真破平修便宜侧 ≠ 本剧「把券后当新 BAR」· P36 不可比截图 · P20 Gross≠Net · P23 会员围栏 · P73 自己的闪促改尺 · P18 报不报平台活动 · P01 Ahead Hold  
> 问题树：§81 「券后价/平台出资不是公开 BAR」  
> 仿真：`cases/sim-2026-coupon-after-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Configuring Promotion Coupon Codes：coupon 从 limited-use promotion 生成，挂 profile/rate/reservation — §70；OPERA Controls PROMOTION_COUPON_CODES — §68 指针）；B 实践（HotelTechUpdate 2026-08-03：先排除 OTA-funded promotion 再当破平；OTA discounting on its own dime ≠ 酒店改尺 — §70）；C 实践博文（DirectYourBookings 2026-08-21：酒店装入价 / 酒店同意的折扣 / 平台出资三层；平台层「Booking.com will pay part」≠ 酒店公开 BAR — §70；截图 $ 不进中国 Fact）  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆客人看到的券后/平台补贴价 vs 本店装入的公开灵活 BAR、问谁出资、Hold 公开 BAR、拒绝把券后写成新尺；**不操作** PMS / OTA / 券后台，不自动定价，不代关券。  
> 禁止：发明华住券 SOP、美团/携程默认出资%、佣金%、券门槛 Fact、699；一夜 −15%；BAR→399「券后市场认这个价」；把 14/399/799 当市场 Fact；开 P75；把真破平修侧当本剧主刀（误入 P59）；把自己闪促改尺当本剧（误入 P73）。  
> 08:17「不要规定 P74」= theory 槽不得指定；本案例槽核实 06:17 scout #3 券后/平台出资缺口后开。

---

## 0. 一句话

**OTA 券后价 / 平台出资折扣不是公开 BAR。** 先问客人看到的数字是 **本店装入的公开灵活价**，还是 **券后 / 平台补贴后的展示价**；再问 **谁出的钱**（酒店同意的促销 / 平台自掏 margin）。OPERA 的 Promotion Coupon Codes 是 limited-use coupon，挂在促销上卖给有码的人——**不是默认公开尺**。行业实践也要求：监控价平时先排除「OTA 用自己的 margin 打折」，不要把那一层当成酒店改尺的许可证。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「美团券后 399」「平台补完客人只付 399」把 BAR 改写成 399。真破平修便宜侧 → **P59**。不可比截图 → **P36**。自己的闪促改尺 → **P73**。报不报活动 → **P18**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店券/美团·携程出资 SOP = **NV，不编**。

完成定义：一张「先拆券后 vs 公开 → 问谁出资 → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 券后挂牌 = 公开 BAR** | 「客人看到的就是市场价」 | 用展示层当尺 | **拆券后 vs 公开装入价**；Hold 公开 BAR |
| **B BAR→399「券后市场认」** | 「券后 399 所以 BAR 改 399」 | 把平台展示层写成战略尺 | **拒绝 BAR→399** |
| **C 平台出资当本店破平** | 「OTA 比官网便宜，破平了」 | 可能是平台自掏 margin | **先问谁出资**；平台出资 ≠ 自动砍 Brand.com；真破平才 **P59** |
| **D 酒店同意的券/报名促销** | 「我们报了这场券」 | 店出促销层 | **P18** 报/不报/只报肩日；成交关在促销码，不改写 BAR |
| **E 不可比截图** | 「隔壁券后便宜 80」 | 含早/登录/App/税 | **P36** |
| **F 真弱 leftover** | 「反正空，跟券后地板」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问客人看到的是本店装入的公开灵活 BAR，还是券后/平台补贴后的展示价；再问谁出的钱。券后/平台出资不是公开尺。本店券 SOP / 美团·携程出资字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「券后市场认这个价」。
3. 真破平修便宜侧走 P59。不可比走 P36。自己的闪促改尺走 P73。报不报活动走 P18。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认券折扣 %、无「平台补完就必须跟」、无「券后价 = 市场价」**。本店券/出资 SOP = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Configuring Promotion Coupon Codes*（A Vendor，§70）：coupon 从 **limited-use promotion** 生成，关联 profile / rate / reservation。**有码促销，不是默认公开 BAR。**
- OPERA Cloud 26.2 *OPERA Controls — Rate Management*（A Vendor，§68 指针）：PROMOTION_COUPON_CODES；PROMOTIONS_MODULE；HIDE_PROMOTION_RATES。**促销/券模块 ≠ BAR Type。**
- HotelTechUpdate *Rate Parity Monitoring*（2026-08-03，B 实践，§70）：监控前先排除 **OTA-funded promotion / OTA discounting on its own dime**；那不是「酒店改了公开尺」。**阈值 / 工具名不进中国 Fact。**
- DirectYourBookings *Why a Hotel Is Cheaper on an OTA*（2026-08-21，C 实践，§70）：客人看到的价常叠三层——酒店装入价、酒店同意的折扣、**平台出资**（「platform will pay part」）。平台层可以让展示价低于官网，而酒店账面仍记满价——**展示层 ≠ 公开 BAR，更不是必须改尺的市场信号**。截图 $ / 24.4% **不进中国 Fact**。

本店券 SOP / 华住字段 / 美团·携程默认出资% / 佣金% / 券门槛 Fact = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「券后价」是展示层还是要改公开 BAR；②拟议是「BAR→券后 / 跟平台补贴」还是「Hold 公开、促销关在码里」；③谁出资 + 本店 Pace / Remaining。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 客人看到的券后/补贴挂牌（缺则问，不编）
- 折扣是酒店同意的促销/报名，还是平台自掏（能拆就拆；拆不清标 NV，默认不把券后写成 BAR）
- 拟议：BAR 改成券后价 / 跟平台补贴砍 BAR / 「市场只认券后」
- 本店券 SOP / 美团·携程出资字段（NV 不编）
- 用户原话：「美团券后 399，BAR 也改 399」「平台补完就是市场价」「客人截图券后便宜所以跟」「券卖得好说明就该这个价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 券后/平台展示 vs 本店装入公开 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「券后市场认」？ | 形 B；拒绝 |
| D3 | 谁出资？平台自掏 vs 酒店同意？ | 平台 → 形 C（先排除破平借口）；酒店同意促销 → 形 D / P18 |
| D4 | 其实是不可比截图？ | → P36 |
| D5 | 可比真破平（本店 OTA 公开灵活 < Brand.com，非平台自掏）？ | → P59 |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 自己的闪促/秒杀改尺？ | → P73 |
| D8 | 真 Behind leftover？ | → P05；仍不改写 BAR |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 券后/平台补贴展示价。展示层可以低，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **谁出资**：平台自掏 → 不当成本店改尺令，也不自动当破平；真破平再 P59。酒店同意的券/报名 → 成交关在促销码/报名闸（P18），**不改写公开 BAR**。
4. **误入移交**：不可比 → P36；真破平 → P59；闪促改尺 → P73；报不报 → P18；真弱 → P05。
5. **早会一个动作**（P45）：纠正「券后≠BAR」+ Hold 公开 BAR（或问清谁出资）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认券折扣 %；无 Pace 就因「券后好看」改尺。

## 4. Why

- Vendor：coupon 是 limited-use、挂促销——设计上就不是默认公开 BAR。
- Practice：价平监控明确要求先排除 OTA-funded discount；平台可以拿自己的 margin 把展示价压低，这不等于酒店把公开尺改成了地板。
- Advisor：用户说「券后市场认这个价」时，先问 Pace 与谁出资；展示层更低常是 **分销展示策略**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；券/补贴成交关在码或平台层，不污染公开尺。
- Risk：误把真破平当「平台出资」放过；或反过来把平台补贴当成必须跟的市场价。
- Watch：公开 BAR 是否仍 Hold；券/补贴是否仍带资格/窗；24h 公开 Pickup vs 券通道 Pickup（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆券后/公开，或至少能标 NV 仍 Hold）。点出资%/券门槛 Low（NV）。Evidence A Vendor + B/C 实践。

## 7. Simulation 指针

见 `cases/sim-2026-coupon-after-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 10:17 CST | 首版。P74。券后/平台出资≠公开 BAR；Ahead Hold；拒改尺；先问谁出资。08:17 不规定 → 本案例核实 scout #3 后开。未开 P75。 |
> 交叉指针（2026-08-29 14:17，不改正文）： 券后/平台出资仍本剧；品牌 BRG 明文排除 coupon/voucher。「截图贵就赔所以砍 BAR」过程走 **P75**。不写 P76。

> 交叉指针（2026-08-29 16:17，不改正文）：券后仍本剧。索赔改尺理论走 **T-BRG**；过程仍 **P75**。不写 P76。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。

> 交叉指针（2026-08-30 06:17，不改正文）：券后/平台出资仍本剧；Resort Fee/强制服务费/含税总价改尺 → **P79**。交叉 P79 resort-fee/all-in ≠ 券后。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。
