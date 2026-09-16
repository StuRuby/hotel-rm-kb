# Deposit / Pre-authorization vs Public BAR｜押金/预授权是付款/担保/卡 hold 工具，不是公开 BAR

> 资产：T-Deposit / T31-16（押金/预授权被允许改什么）· T-Hurdle / T-Stored / T-Wholesale / T-Fee 同族（尺子 ≠ 按钮）
> 路径：`theory/deposit-preauth-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-31
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Managing Reservation Deposit Request and Cancellation Policy*：deposit requirements and payment prior to stay — **§94 指针 / §97 升核**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Deposit Rules*：amounts/percentages + when due；rate code > reservation type > reservation — **§94 26.1 升核为 26.2 / §97 新开 twin**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Deposit Rule Schedules*：advance deposit requirements；begin/end date schedule — **§97 新开**）；A Vendor PMS（OPERA Cloud 26.2 *Managing Reservation Deposit Payments*：Post Deposit / Post Unallocated Deposit — **§97 新开**）；A Vendor PMS（OPERA Cloud 26.2 *OPERA Controls — Cashiering*：DEPOSIT HANDLING 激活 Deposit and Cancellation Rules/Schedule — **§97 新开**；控制开关 ≠ BAR Type）；A Vendor PMS（OPERA Cloud 26.2 *About Credit Card Authorization Rules*：anticipated expenses → credit card **pre-authorization**；Daily Rate = Room Rate + packages + fixed charges + taxes — **§94 指针 / §97 升核**；Vendor $ 例 NOT China Fact）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Advanced Authorization Rules*：Financials → Cashiering Management → Authorization Rules；Amount applied to calculation rule — **§97 新开**；配置屏 ≠ BAR Type）；A Vendor PMS（Cloudbeds *Set up Deposit Policies*：Percentage / Fixed / First Day / Do not collect；deposit from room rate sub-total — **§95 指针 / §97 升核**；付款配置 ≠ BAR Type）；A Vendor PMS（Cloudbeds *How to authorize a card with the payment gateway feature*：temporary hold without immediately charging；capture or void later — **§97 新开**；hold ≠ 卖价）；A Vendor PMS（Apaleo *Payment Authorizations*：Authorizations are different from prepayments；no liabilities until consumed — **§95 指针 / §97 升核**；hold ≠ BAR Type）；A Vendor PMS（Apaleo *Guarantee Types*：Prepayment = pay at booking；Credit Card / 6 pm Hold 是担保类型 — **§97 新开**；担保/预付类型 ≠ BAR Type）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 指针 / §97 升核**）；指针（§33 OPERA Configuring Reservation Types Deposit 勾选 informational；押金要求来自 deposit rule schedules）
> 配套：`advisor-playbooks/deposit-preauth-vs-bar.md`（P86 过程）· `recommendations/dont-rewrite-bar-for-deposit-preauth.md`（主卡复用，不重写）· `metrics/deposit-preauth-vs-public-bar.md`（轻指标；**无默认押金 % / 预授权金额 Fact**，公式不重写）· `cases/sim-2026-deposit-preauth-sat.md`（Simulation）
> 交叉：P55 担保类型/到点放房 ≠ 本卡「押金金额=BAR」· P19 预付不可退产品 ≠ 押金付款改尺 · P84 取消费过账 ≠ 押金/预授权 · P83/T-Stored 储值付款 ≠ 押金 · P85/T-Hurdle 可售门 ≠ 付款 hold · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle（假尺子一族）
> 问题树：§93「押金/预授权不是公开 BAR」（过程路由已够；本卡给「为什么 Deposit Rules / Deposit Request / Authorization Rules / Cloudbeds Policy / Apaleo Auth 不是公开 BAR、付款/hold 过程不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 押金规则表 / 授权规则，不自动改价，不代收押金、不代发起预授权。**
> 状态：**理论 drafted**（2026-08-31 16:17 CST）。**不写 P87，不写新剧本，不开 Pet/AAA。** 押金 leftover **已关为 P86**（10:17），本卡只加深 WHY。禁止：编华住押金/预授权 SOP / 默认押金 % / 预授权金额 Fact / 佣金% / 699；一夜 −15%；BAR→399「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」；把 14/399/799 当市场 Fact；把 OPERA auth-rule $100/$20/$50 或 Cloudbeds 30 天 hold / $0.50 当中国 Fact；重写 `deposit-preauth-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P86 正文（P86 仅头一行理论指针 + 修订行；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**押金 / 预授权（credit card authorization hold）是付款/担保/卡 hold 工具，不是公开灵活 BAR。**
厂商能把押金挂在 Deposit Rules / Deposit Request / Deposit Payment、能配 Deposit Schedules、能开 DEPOSIT HANDLING、能用 Authorization Rules 算 anticipated expenses 去 **pre-authorize**、能在 Cloudbeds 配 Deposit Policy 或 Authorize hold、能在 Apaleo 开 Authorization（≠ prepayment）——只证明「有付款/担保/hold 过程」，不证明「公开灵活价该跟到押金地板 / 预授权额」。协会能把 BAR 钉成 non-qualified publicly available——只证明「公开尺定义」，不证明「押金 = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」把 BAR 改写成 399。担保释放 → **P55**。预付 NR → **P19**。取消费 → **P84**。储值 → **P83**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店押金%/预授权额 / 华住字段 = **全部 NV**。押金 leftover **已关**。Pet/AAA 仍停车。

```
Naive（禁止）     押金就是我们的公开价；预授权扣太多所以 BAR 砍 399；
                  押金当地板；ADR 被押金看脏所以 dump；Deposit Rules / Auth Rules 屏就是公开价表
本卡              先拆三把尺（公开 BAR / Deposit·payment·preauth hold / 客人「押金感觉像房价」）。
                  OPERA Deposit Rules + Auth Rules + Cloudbeds Policy + Apaleo Auth ≠ 定价权。过程走 P86。
```

完成标准：用户说「押金才是市场价改 BAR」「预授权扣太多所以砍」「押金当地板」「ADR 被押金看脏砍 BAR」「Deposit Rules·Auth Rules 屏就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是付款/hold 还是要改公开**；Diagnosis 写成押金/预授权不是公开 BAR、配置屏/hold 不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、押金是否仍关在 Deposit、预授权是否仍关在 Authorization、押金%/预授权额是否仍 NV。**不 dump 399、不把押金地板写成新 BAR、不写 P87。**

顾问必须能直接说的三句（与 P86 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是押金要求/押金过账（OPERA Deposit Rules / Deposit Request / Deposit Payment）或信用卡预授权（Authorization Rules = anticipated expenses pre-auth），还是要改公开灵活 BAR。押金/预授权 ≠ 公开尺。本店押金%/预授权额 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」。
3. 担保类型/6点放房走 P55。预付不可退产品走 P19。取消费过账走 P84。储值付款走 P83。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从押金/预授权地板改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**押金 / 预授权回答的是「这张预订怎么担保、卡上 hold 多少、folio 怎么过账」，不是「今晚公开灵活该卖多少」。** 它回答「Deposit Rule 到期要收多少、Authorization Rule 预授权多少」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把押金地板写成新 BAR。禁止编默认押金 %。禁止编预授权金额 Fact。禁止编华住押金/预授权 SOP。禁止编 699。**

---

## 1. 三把尺：公开 BAR / Deposit·payment·preauth hold / 客人「押金感觉像房价」

顾问问题不是「系统里有没有一个押金数 / 卡上 hold 了多少」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成押金地板；砍到「押金才是市场价」 |
| **Deposit / payment / preauth hold** | OPERA Deposit Rules/Request/Payment；Authorization Rules pre-auth；Cloudbeds Deposit Policy / Authorize hold；Apaleo Authorization | 可留在付款/hold 层；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen「押金感觉像房价」** | 客人看到的「先付/被 hold 的金额好像就是房价」 | 窗/展示层 → 分看；诊断：hold 额 ≠ 已成新 BAR | 把「押金/hold 额」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Deposit_or_preauth       = 399 或更高/更低  # Simulation：押金要求/hold 额（不是新 BAR）
Guest_seen_hold          = 「卡上被冻了 / 订时先付」  # Simulation：展示层（不是本店 BAR）
Gap                      = Public_BAR − Deposit_or_preauth   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | deposit request/payment | authorization hold | guest-seen deposit-as-price
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国押金默认。OPERA Vendor $100/$20/$50、Cloudbeds 30 天 hold / USD 0.50、Apaleo 31 天 expire = **Vendor 示意，NOT China Fact / 不进 sim**。

混淆三把尺会同时拧坏 **公开尺** 与 **付款/hold 层**：把「押金 399」读成「我们 BAR 就是 399」，或把「预授权扣太多」读成「公开栏必须砍」，或把 Deposit Rules / Auth Rules 屏混成公开价表。

HSMAI BAR（A，§67/§97）：BAR = **the non-qualified, publicly available rate**。**方向采用：押金/预授权不是 BAR。**

---

## 2. Deposit Rules / Deposit Request / Authorization Rules / Cloudbeds Policy / Apaleo Auth 是过程，不是定价权

厂商把「押金 / 预授权」做成**付款要求 + 过账 + 卡 hold + 控制开关**。没有一家被打开的官方页把它写成「押金默认等于 BAR」或「预授权扣太多就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Managing Reservation Deposit Request and Cancellation Policy*（§94 指针 / §97 升核） | "Reservation deposit deals with managing the deposit requirements and payment that guests make prior to their stay." Deposit / Cancellation panel manages deposit requests/payments。rate code schedule precedence | **住前要求与付款。** 不是 BAR Type |
| OPERA Cloud 26.2 *Configuring Deposit Rules*（§97 **新开**；升核 §94 的 26.1 URL） | Deposit Rules manage deposit requirements — amounts or percentages and when deposits must be paid。Associated via Deposit Schedules。Only one（rate code > reservation type > reservation）。Flat / Percentage / Percentage of Nightly Rate / Nights；Before Arrival / After Booking | **Deposit Rule configuration ≠ public flexible BAR** |
| OPERA Cloud 26.2 *Configuring Deposit Rule Schedules*（§97 **新开**） | "manage the advance deposit requirements for reservations"；begin/end date；挂 rate code / reservation type / block / credit rating | **日程表机械。** ≠ BAR Type |
| OPERA Cloud 26.2 *Managing Reservation Deposit Payments*（§97 **新开**） | Post Deposit / Post Unallocated Deposit；Amount pre-populated from deposit rule | **过账动作。** ≠ 公开价栅格 |
| OPERA Cloud 26.2 *OPERA Controls — Cashiering*（§97 **新开**） | DEPOSIT HANDLING = Activate the Deposit and Cancellation Rules/Schedule Functionality；TIERED DEPOSIT RULE SCHEDULES | **控制开关。** ≠ 改写公开灵活 |
| OPERA Cloud 26.2 *About Credit Card Authorization Rules*（§94/§97） | Authorization rule = formula for anticipated total expenses；obtains required **credit card pre-authorization**。Daily Rate = Room Rate + Add to Rate Packages + Fixed Charges + taxes。Vendor $ 例 NOT China Fact | **Pre-auth amount ≠ selling rate / BAR Type** |
| OPERA Cloud 26.2 *Configuring Advanced Authorization Rules*（§97 **新开**） | Administration → Financials → Cashiering Management → Authorization Rules；选 Room Type / Rate Code / Reservation Type；Authorization Rule + Amount | **配置屏 / 计算规则。** ≠ BAR Type |
| Cloudbeds *Set up Deposit Policies*（§95/§97） | Percentage / Fixed Amount / First Day Price / Do not collect。"The deposit is calculated from the room rate only (sub-total)." | **押金政策 = 付款配置。** ≠ BAR Type |
| Cloudbeds *How to authorize a card*（§97 **新开**） | "A credit card authorization places a temporary hold on funds without immediately charging the guest." Capture or void later。max 30 days / 7 days other gateways | **hold ≠ 立即收款 ≠ 卖价** |
| Apaleo *Payment Authorizations*（§95/§97） | "Authorizations are different from prepayments"；"since no actual money is received before the authorization is consumed, no liabilities are created." | **hold ≠ 预付 ≠ BAR** |
| Apaleo *Guarantee Types*（§97 **新开**） | Rate plan minimum guarantee：6 pm Hold / Credit Card / Prepayment。Prepayment = pay at booking | **担保/预付类型 ≠ BAR Type** |
| HSMAI Academy *BAR*（§67/§97） | BAR = non-qualified, publicly available | 押金/预授权 **不是 BAR** |
| OPERA *Configuring Reservation Types* Deposit 勾选（§33 指针） | Deposit 勾选 informational；押金要求来自 deposit rule schedules | **信息性勾选 ≠ BAR Type。** 过程邻 P55 |

```
画面：押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏 / 销售说「Deposit Rules / Auth Rules 屏就是公开价」
Naive：BAR 就是那个押金/hold；能配规则所以改尺
本卡：Deposit Rules、Deposit Payment、Authorization Rules、Cloudbeds Policy、Apaleo Auth 都是过程。定价权在公开 BAR + Pace，不在押金/hold 按钮。
```

```
OPERA Deposit Rules / Schedules / Payments     → 付款要求与过账
OPERA DEPOSIT HANDLING / TIERED                 → 控制开关
OPERA Authorization Rules / Advanced Auth      → 预授权公式 / 配置
Cloudbeds Deposit Policy / Authorize hold      → 付款配置 / 临时 hold
Apaleo Authorization ≠ prepayment              → hold 无负债直至扣款
Apaleo Guarantee Prepayment                    → 担保类型（邻 P55/P19）
Public BAR                                     → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住押金/预授权 SOP / 本店押金 % / 预授权金额 Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/Cloudbeds/Apaleo 的，不是本店报表名。不发明 STR live deposit Rooms Include/Exclude（14:17 已确认 Historical+P&L 无 live deposit 行）。Mews 本小时不重试。

---

## 3. 「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」是付款/hold 信号，不是改写公开 BAR 的许可证

押金/预授权回答的是：**这张预订要收多少住前款、卡上 hold 多少、ADR 有没有被押金过账读脏。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 押金/hold 看起来更低/更高 | 需求仍强；公开尺 **Hold**；押金留在付款、hold 留在授权 | 「市场认押金地板，BAR 改 399」 |
| 预授权扣太多、公开 BAR 也动 | hold 额大 ≠ 必须砍公开尺；公开仍 Pace 闸 | 用「扣太多」证明必须 dump 公开尺 |
| ADR 因押金过账显得怪 | **形 C**：读 posting/hold；分看公开 vs 押金 vs 预授权 | 「已经看脏了所以砍 BAR」 |
| Deposit Rules / Auth Rules / Cloudbeds Policy 还能配 | **形 E**：配置/hold ≠ BAR Type | 「屏/规则/政策就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从押金地板改写 BAR | 一夜 −15%；把押金地板永久化 |

```
Deposit/preauth looks like a market price  → 付款/hold 信号（可加强拆尺 / Hold 公开）
Public BAR                                 → 仍由 Pace / Remaining 定
Naive                                      → 「押金太高/hold 太多所以 BAR→399」
本卡                                       → 押金/hold ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店押金改尺 ≠ 担保释放（P55）≠ 预付 NR（P19）≠ 取消费（P84）≠ 储值（P83）≠ hurdle（P85）≠ 真弱（P05）

六边都在「看起来像价钱 / 销售要跟」附近，对象不同。塌成「反正都是钱所以砍」会开错杠杆。

| | **P86 / 本卡（重置公开尺=押金/hold 地板）** | **P55（担保释放）** | **P19（预付 NR 产品）** | **P84（取消费）** | **P83（储值）** | **P85（hurdle）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到押金要求或预授权 hold | 担保类型/6点放房 | 预付不可退产品开关 | 取消/attrition FEE 过账 | 储值卡/礼品卡付款 | 可售门/LRV | 真 Behind leftover |
| 尺 | 公开 **BAR** | 释放事件 | 产品码开/关 | FEE 过账 | 付款/负债 | 可售门 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | 放房前不 dump | Hold；产品层另管 | Hold；FEE 留码 | Hold；储值留 SVS | Hold；hurdle 留门 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；押金当市价 | 把放房当押金改尺 | 把预付产品当押金付款改尺 | 把 FEE 当押金 | 把储值当押金 | 把可售门当押金 | 一夜 −15%；把押金地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是担保释放，还是预付产品，还是取消费，还是储值，还是 hurdle，还是真弱？** 担保释放 → P55。预付产品 → P19。取消费 → P84。储值 → P83。hurdle → P85/T-Hurdle。真弱 leftover → P05。要把押金/预授权叫 BAR / 要押金当地板 / Deposit·Auth 屏所以跟 → 本卡 / P86。

---

## 5. 假尺子一族：「押金就是 BAR / hold 太多所以砍 / 押金当地板」

本卡不是新怪现象，是同一族的下一张：**屏幕上的付款/担保/卡 hold 工具被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了 / 过期还挂」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔 / 被索赔了」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **T-Live** | 「直播间 399 / 卖爆了 / 主播价就是市场价」 | 公开 BAR + Pace；橱窗不是尺 |
| **T-Fee** | 「OTA 总价贵 / 服务费吓跑 / ADR 被费看脏」 | 公开 BAR + Pace；费/税/all-in 不是 BAR |
| **T-Wholesale** | 「批发价才是市场价 / 旅行社净太低所以跟」 | 公开 BAR + Pace；渠道净不是 BAR |
| **T-Stored** | 「储值才是市场价 / 储值太低所以跟」 | 公开 BAR + Pace；付款/负债不是 BAR |
| **T-Hurdle** | 「门槛价才是市场价 / hurdle 多少就跟 / 过不了 LRV 所以砍」 | 公开 BAR + Pace；可售门不是 BAR |
| **本卡 T-Deposit** | 「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」 | **公开 BAR + Pace**；不是付款/hold 当 BAR 令，也不是 dump 399 令 |

「押金才是市场价所以改 BAR」= 把 **付款/担保工具** 当成 **公开灵活价**。尺子在押金地板上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「预授权扣太多所以砍」是另一把假尺子：把**卡 hold 额**当成「市场已经认了新尺」。该把 hold 留在 Authorization Rules，不是改写 Brand.com。

「押金当地板」是第三把：把**住前付款要求**当成「公开尺必须降到押金」。Deposit Rule 仍是 due date / amount，不是卖价指令。

「ADR 被押金看脏所以 dump」是第四把：把**过账/hold 读脏**当成砍尺令。读 posting，不改尺。

与 **T-Stored / T-Fee / T-Hurdle** 的边界：储值是 folio 付款/负债；费是费层/展示加总；hurdle 是可售门。本卡是 **住前押金 + 卡 hold**。对象不同，假尺子同族。

---

## 6. Diagnose → Advise：押金/预授权被允许改什么

用户原话：「押金才是市场价，BAR 改成 399」「预授权扣了那么多说明价高了砍」「押金当地板」「ADR 被押金看脏了」「Deposit Rules / Auth Rules 屏就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是押金要求/过账 / 信用卡预授权 hold / 客人「押金感觉像房价」；
            ②拟议是「改尺 / 押金才是市场价 / 预授权太高所以砍 / 押金当地板」还是「押金留在 Deposit、hold 留在 Authorization、Hold 公开」；
            ③Pace / Remaining；这是付款/hold 层还是要改公开尺。
  缺押金% / 预授权额 / 本店押金 SOP → 问，不编华住字段。

Diagnosis
  押金/预授权已经挂在付款/hold 层之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 屏当尺 vs 担保释放 vs 预付产品 vs 取消费 vs 储值 vs hurdle vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆付款·hold vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P55 / P19 / P84 / P83 / P85 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住押金/预授权 SOP / 默认押金 % / 预授权金额 Fact。
  **Ahead 夜：押金/预授权不被允许改公开 BAR。**

What To Watch
  公开 BAR 是否仍 Hold；押金是否仍关在 Deposit Rules/Payments；预授权是否仍关在 Authorization Rules；24h 公开 Pickup vs 押金过账/hold（分看）
  不是「Deposit Rules 把数配上了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C ADR 看脏 / D→P55·P19·P84·P83 / E Deposit/Auth 屏当 BAR Type / F→P05）走 **P86**，本卡**不重复 P86 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P87。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **押金要求/押金过账（Deposit Rules / Deposit Request / Deposit Payment）或信用卡预授权 hold**，还是要把 **公开 BAR 改成那个地板**？ | 混用尺；把付款/hold 当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与押金要求/已付押金 / 预授权 hold 各是多少？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA Deposit Rules / Authorization Rules？是否 Cloudbeds Deposit Policy / Authorize？是否其实是担保放房（→P55）/ 预付 NR（P19）？ | 把配置/hold 写成「已成新 BAR」 | **NV** → 先拆付款，不编押金 SOP |
| 4 | 拟议是押金留在付款层、hold 留在授权、Hold 公开，还是改写公开尺 / 押金才是市场价 / 预授权太高所以砍 / 押金当地板？ | 误入本卡 / P55 / P19 | **NV** |
| 5 | 本店押金/预授权 SOP / 华住字段 / 押金% / 预授权额怎么走？ | 发明华住 SOP；或把 Vendor $ 例当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是担保释放（→P55）；是不是预付 NR 产品（→P19）；是不是取消费（→P84）；是不是储值（→P83）；是不是 hurdle（→P85）；真 Behind leftover（→P05）。**押金 %、预授权金额 Fact、佣金%、699、华住押金/预授权 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 押金/预授权就是公开 BAR | BAR = 无资格公开灵活。押金是付款；预授权是 hold |
| 押金才是市场价所以 BAR→399 | 付款层地板 ≠ 战略尺。拒绝 |
| 预授权扣太多所以砍公开 | hold 额 ≠ Brand.com 栅格 |
| 押金当地板所以跟 | due amount ≠ 卖价指令 |
| ADR 被押金看脏所以 dump | 读 posting/hold；不是砍尺令 |
| Deposit Rules / Auth Rules 屏配了所以公开尺改完 | 配置过程 ≠ BAR Type |
| Cloudbeds Deposit Policy 就是公开价表 | 付款政策 ≠ BAR Type |
| Apaleo Authorization 就是房价 | hold ≠ prepayment ≠ BAR |
| OPERA $100/$20/$50 就是我们该 hold / 该卖的 | Vendor 示意 NOT China Fact |
| DEPOSIT HANDLING 开了所以公开跟押金 | 控制开关 ≠ 改写公开灵活 |
| 担保 6 点放房所以按押金砍 BAR | **P55** |
| 预付 NR 也低所以跟押金地板 | **P19** |
| 取消费也像押金所以跟 | **P84** |
| 储值也像押金所以跟 | **P83** |
| hurdle 也像地板所以跟押金 | **P85 / T-Hurdle** |
| 反正空，按押金地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住押金 SOP 就能 Advise | **禁止。** 押金 % / 预授权额 NV |
| STR 押金肯定进 Rooms 所以 ADR 公式要改 | **禁止。** STR live deposit Rooms 桶本库仍 **NV** |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P86 `cases/sim-2026-deposit-preauth-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
押金要求 / 预授权 hold        = 399（不是新 BAR；付款/hold Simulation）
销售拟议                     = 「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」砍 BAR 到 399
```

读法（与 P86 同句）：399 是被拒绝的押金/预授权改尺，不是 BAR。Advise：拆公开 vs 押金付款 vs 预授权 hold；**Hold 779–799 首选 799**；拒 dump **399**；押金留在 Deposit、hold 留在 Authorization；押金 % / 预授权额 **NV**。不要用 OPERA $100/$20/$50 当 sim 数字。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/押金默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-31 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Deposit = 住前要求与付款；rate code schedule precedence | **A Vendor PMS** | **Known 付款过程。** ≠ BAR Type | OPERA Managing Deposit Request（**§94/§97 升核**） |
| Deposit Rules = amounts/% + when due；rate code > reservation type > reservation | **A Vendor PMS** | **Known 配置。** ≠ public flexible BAR | OPERA Configuring Deposit Rules 26.2（**§97 新开**；升核 26.1） |
| Deposit Schedules = advance deposit 日程 | **A Vendor PMS** | **Known 日程。** ≠ BAR Type | OPERA Configuring Deposit Rule Schedules（**§97 新开**） |
| Post Deposit / Unallocated = 过账 | **A Vendor PMS** | **Known 过账。** ≠ 公开栅格 | OPERA Managing Deposit Payments（**§97 新开**） |
| DEPOSIT HANDLING 激活规则/日程 | **A Vendor PMS** | **Known 开关。** ≠ BAR Type | OPERA Controls Cashiering（**§97 新开**） |
| Authorization rule → credit card pre-authorization；Daily Rate 公式输入 | **A Vendor PMS** | **Known hold 公式。** ≠ selling rate | OPERA About Authorization Rules（**§94/§97**） |
| Configuring Advanced Authorization Rules = 配置屏 | **A Vendor PMS** | **Known 配置。** ≠ BAR Type | OPERA Configuring Advanced Authorization Rules 26.2（**§97 新开**） |
| Cloudbeds Deposit Policy from room rate sub-total | **A Vendor PMS** | **Known 付款配置。** ≠ BAR Type | Cloudbeds Set up Deposit Policies（**§95/§97**；WebFetch CF → curl 200） |
| Cloudbeds authorize = temporary hold without immediately charging | **A Vendor PMS** | **Known hold。** ≠ 卖价 | Cloudbeds How to authorize a card（**§97 新开**；WebFetch timeout → curl 200） |
| Apaleo Authorizations ≠ prepayments；no liabilities until consumed | **A Vendor PMS** | **Known hold ≠ 预付** | Apaleo Payment Authorizations（**§95/§97**；WebFetch timeout → curl 200） |
| Apaleo Guarantee Prepayment = pay at booking | **A Vendor PMS** | **Known 担保类型。** ≠ BAR Type | Apaleo Guarantee Types（**§97 新开**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§97 升核**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P86 + Pace 闸 | — |
| 本店押金/预授权 SOP / 华住字段 / 默认押金 % / 预授权金额 Fact / STR live deposit Rooms 桶 | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 Configuring Deposit Rules（升核 26.1 twin）+ Configuring Deposit Rule Schedules + Managing Reservation Deposit Payments + OPERA Controls Cashiering（DEPOSIT HANDLING）+ Configuring Advanced Authorization Rules + Cloudbeds How to authorize a card + Apaleo Guarantee Types。升核/复核：OPERA Managing Deposit Request + About Authorization Rules + Cloudbeds Deposit Policies + Apaleo Payment Authorizations + HSMAI BAR。指针：§33 Reservation Types Deposit 信息性。华住押金/预授权 SOP **未开、不编**。STR live deposit Rooms 桶 **仍 NV**（14:17 已确认无行）。Mews 本小时不重试。Pet/AAA 仍停车。**不规定 P87。**

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-DP-01 | 本店押金/预授权 SOP / 是否真有 OPERA Deposit Rules / Authorization Rules | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-DP-02 | 本店默认押金 % / 预授权金额 Fact / 佣金% | **NV。** 押金不是改尺令 |
| NV-DP-03 | 399 来源（押金话术 / hold 额 / ADR 抱怨） | **NV。** 先 Hold 公开 BAR |
| NV-DP-04 | STR / USALI 官方 live deposit Rooms Include/Exclude 行 | **NV。** 14:17 Historical+P&L 无 live deposit 行，不发明 |
| NV-P86-01… | P86 已挂（华住押金/预授权 / 押金 % / 预授权额） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 16:17 CST | 首版。T-Deposit = 押金/预授权是付款/担保/卡 hold 工具，不是公开 BAR。三把尺；Deposit Rules/Payments/Auth Rules/Cloudbeds Policy/Apaleo Auth≠定价权；押金才是市场价≠改尺令；P55/P19/P84/P83/P85/P05 孪生；假尺子一族；不重复 P86 六形。**不写 P87。** 14/399/799 Simulation only。399 = 被拒绝的 dump。押金 leftover 已关。 |

---

## 13. 交叉（不改 P01–P86 正文；P86 仅头一行 + 修订行，邻卡仅文末一行）

- **P86** `advisor-playbooks/deposit-preauth-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-deposit-preauth.md`：复用，不重写。
- **轻指标** `metrics/deposit-preauth-vs-public-bar.md`：公开 BAR vs 押金/hold gap；无默认押金 %。本卡不重写公式。
- **P55**：担保类型/到点放房。本卡 / P86 = 要把公开尺写成/跟到押金/hold 地板。
- **P19**：预付不可退产品。邻「产品开关」，不是押金付款改尺。
- **P84**：取消/attrition FEE。邻「FEE 过账」，不是押金。
- **P83 / T-Stored**：储值付款/负债。邻「SVS」，不是住前押金。
- **P85 / T-Hurdle**：可售门/LRV。邻「gate」，不是付款 hold。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正押金≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P87。禁止编华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、佣金%、699。禁止开 Pet/AAA 专剧。禁止把 STR live deposit 桶写成 Rooms Fact。禁止重写 optimization-advise。禁止造 systems/cloudbeds.md / systems/apaleo.md / systems/mews.md。**

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本卡仍是押金/预授权 hold。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本卡仍是押金/预授权 hold。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 08:17，不改正文）：假尺子同族下一张 **T-Employee**（员工价/付费员工折扣 ≠ 公开 BAR）。过程仍 **P80**。本卡仍是押金/预授权 hold。不规定 P88。
