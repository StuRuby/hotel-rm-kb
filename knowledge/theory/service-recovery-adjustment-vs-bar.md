# Service Recovery / Folio Adjustment vs Public BAR｜服务补偿/账单 Service Recovery adjustment 是 folio 纠正/客满满意度过账工具，不是公开 BAR

> 资产：T-Service-Recovery / T01-00（服务补偿/folio adjustment 被允许改什么）· T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee 同族（尺子 ≠ 按钮）
> 路径：`theory/service-recovery-adjustment-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-01
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Charges Adjustment and Payments*：Post Adjustments；**Posting Service Recovery Adjustment Charges** — "post and track adjustments related to service recovery versus other non-service recovery related adjustments"；Allow Negative Postings / negative rebate；Manually posting rate code charges does not change reservation rate/room type/persons — **§98 指针 / §101 升核**）；A Vendor PMS（OPERA Cloud 26.2 *About Billing*：adjust by amount/% + reason codes；Allow Negative Postings = rebate — **§98 / §101 升核**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Adjustment Reason Codes*：Code Type **Service Recovery** = "resolution of an issue with a dissatisfied guest"（Service Requests OPERA Control active）— **§98 / §101 升核**）；A Vendor PMS（OPERA Cloud 26.2 *OPERA Controls — Cashiering*：SERVICE RECOVERY ADJUSTMENT = Enables posting a service recovery adjustment；ALLOW NEGATIVE POSTINGS = negative sales charges to Reservation Accounts — **§97 指针 / §101 用途升核**；控制开关 ≠ BAR Type）；A Vendor PMS（OPERA Cloud 26.2 *Managing Reservation Service Requests*：incident / complaint / general request tracking；resolve then follow-up — **§101 新开**；投诉跟踪 ≠ 公开尺）；A Vendor PMS（Cloudbeds *Add or adjust reservation charges*：adjustment = folio/invoice 交易类型；subtracts from debit/charge；refund 才动付款 — **§98 / §101 升核**）；A Vendor PMS（Apaleo *Adding and Moving Charges to a Folio*：Refund / Add allowance；noisy-neighbour 折扣例 — **§99 / §101 升核**）；A Vendor PMS（HotelKey *Service Recovery .ng-v2*：revenue-impacting = negative charge on folio；non-revenue does not affect folio balance — **§99 / §101 升核**）；S 协会报送（STR Historical Rooms Revenue net of rebates/refunds/allowances — **§15/§96/§98 / §101 升核**；ADR READ ≠ rewrite）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §101 升核**）
> 配套：`advisor-playbooks/service-recovery-adjustment-vs-bar.md`（P87 过程）· `recommendations/dont-rewrite-bar-for-service-recovery.md`（主卡复用，不重写）· `metrics/service-recovery-vs-public-bar.md`（轻指标；**无默认补偿 % Fact**，公式不重写）· `cases/sim-2026-service-recovery-sat.md`（Simulation）
> 交叉：P39 点评/口碑 SIGNAL ≠ 本卡「本住补偿过账=BAR」· P75 BRG like-for-like 已订直销索赔 ≠ 服务失败改尺 · P47 计划 Comp / House Use ≠ 本住 rebate · P84 取消/attrition FEE 过账 ≠ 服务补偿 · P83/T-Stored 储值付款 ≠ 账单减免 · P86/T-Deposit 押金/预授权 hold ≠ 服务补偿 · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit（假尺子一族）
> 问题树：§94「服务补偿/账单 adjustment 不是公开 BAR」（过程路由已够；本卡给「为什么 Post Service Recovery Adjustment / Adjustment Reason Codes / Cloudbeds Adjust / Apaleo allowance / HotelKey Service Recovery / Controls 开关不是公开 BAR、过账过程不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 账单调整 / 补偿过账，不自动改价，不代发补偿券、不代贴 adjustment。**
> 状态：**理论 drafted**（2026-09-01 00:17 CST）。**不写 P88，不写新剧本，不开 Pet/AAA。** 服务补偿 leftover **已关为 P87**（18:17），本卡只加深 WHY。禁止：编华住补偿 SOP / 默认补偿 % / 佣金% / 699 / Walk $；一夜 −15%；BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏所以砍 / 已经补偿所以新尺子」；把 14/399/799 当市场 Fact；把 OPERA Vendor $ breakfast 10.00 / 63.60 当中国 Fact；重写 `service-recovery-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P87 正文（P87 仅头一行理论指针 + 修订行；邻卡仅文末一行）；操作 PMS；造 systems/apaleo.md / systems/hotelkey.md / systems/cloudbeds.md / systems/mews.md。

---

## 0. 一句话

**服务补偿 / folio Service Recovery adjustment / rebate / allowance 是 folio 纠正 / 客满满意度过账工具，不是公开灵活 BAR。**
厂商能把补偿挂在 Post Service Recovery Adjustment / Post Adjustment / negative rebate、能配 Adjustment Reason Code Type Service Recovery、能开 SERVICE RECOVERY ADJUSTMENT / ALLOW NEGATIVE POSTINGS、能在 Cloudbeds 做 Adjust Charge、能在 Apaleo Add allowance、能在 HotelKey 贴 revenue-impacting negative charge——只证明「有本住账单纠正/客满过账过程」，不证明「公开灵活价该跟到补偿地板」。协会能把 BAR 钉成 non-qualified publicly available、能把 Rooms Revenue 报成 net of rebates/allowances——只证明「公开尺定义」与「ADR 读法」，不证明「补偿 = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏 / 已经补偿所以新尺子」把 BAR 改写成 399。点评 SIGNAL → **P39**。BRG 索赔 → **P75**。计划 Comp → **P47**。取消 FEE → **P84**。储值 → **P83**。押金/预授权 → **P86**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店补偿 SOP / 默认补偿 % / 华住字段 = **全部 NV**。服务补偿 leftover **已关**。Pet/AAA 仍停车。

```
Naive（禁止）     服务补偿就是我们的公开价；补了差价所以 BAR 砍 399；
                  补偿券才是市场价；ADR 被减免看脏所以 dump；Service Recovery Adjustment 屏就是公开价表
本卡              先拆三把尺（公开 BAR / folio Service Recovery·adjustment·rebate·allowance / 客人「补偿感觉像房价」）。
                  OPERA Post Service Recovery + Reason Codes + Controls + Cloudbeds Adjust + Apaleo allowance + HotelKey SR ≠ 定价权。过程走 P87。
```

完成标准：用户说「客人投诉补了差价改 BAR」「服务失败今晚全部 dump」「补偿券 399 所以公开也 399」「ADR 被减免看脏砍 BAR」「Service Recovery Adjustment / Adjust Charge 屏就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是 folio 过账还是要改公开**；Diagnosis 写成服务补偿不是公开 BAR、配置屏/过账不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、补偿是否仍关在 folio Service Recovery、补偿%/SOP 是否仍 NV。**不 dump 399、不把补偿地板写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 P87 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是本住 folio Service Recovery / posting adjustment / rebate（OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge），还是要改公开灵活 BAR。服务补偿 ≠ 公开尺。本店补偿 SOP / 默认补偿 % = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」。
3. 点评 SIGNAL 走 P39。BRG like-for-like 已订直销索赔走 P75。计划 Comp 走 P47。取消 FEE 过账走 P84。押金/预授权走 P86。真弱走 P05（可有窗围栏，仍禁一夜 −15%，仍不从补偿地板改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**服务补偿 / folio adjustment 回答的是「这张本住账单怎么纠正、客满怎么过账、ADR 有没有被减免读脏」，不是「今晚公开灵活该卖多少」。** 它回答「Service Recovery Adjustment 贴多少、Reason Code 是什么」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把补偿地板写成新 BAR。禁止编默认补偿 %。禁止编华住补偿 SOP。禁止编 699。禁止编 Walk $。**

---

## 1. 三把尺：公开 BAR / folio Service Recovery·adjustment·rebate·allowance / 客人「补偿感觉像房价」

顾问问题不是「系统里有没有一个补偿数 / folio 上减了多少」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成补偿地板；砍到「服务失败所以 dump」 |
| **Folio Service Recovery / adjustment / rebate / allowance** | OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge；Apaleo Add allowance；HotelKey Service Recovery negative charge | 可留在本住 posting 层；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen「补偿感觉像房价」** | 客人看到的「补了差价 / 发了补偿券好像就是房价」 | 窗/展示层 → 分看；诊断：补偿额 ≠ 已成新 BAR | 把「补偿券/减免额」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Service_recovery_posting = 399 或更高/更低  # Simulation：本住 adjustment/rebate（不是新 BAR）
Guest_seen_comp          = 「补了差价 / 补偿券」  # Simulation：展示层（不是本店 BAR）
Gap                      = Public_BAR − Service_recovery_posting   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | folio Service Recovery / adjustment / rebate / allowance | guest-seen compensation-as-price
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国补偿默认。OPERA Vendor $ breakfast 10.00 / 63.60 = **Vendor 示意，NOT China Fact / 不进 sim**。

混淆三把尺会同时拧坏 **公开尺** 与 **本住 posting 层**：把「补偿 399」读成「我们 BAR 就是 399」，或把「服务失败所以砍」读成「公开栏必须 dump」，或把 Service Recovery Adjustment / Adjust Charge 屏混成公开价表。

HSMAI BAR（A，§67/§101）：BAR = **the non-qualified, publicly available rate**。**方向采用：服务补偿不是 BAR。**

---

## 2. Post Service Recovery / Adjustment Reason / Controls / Cloudbeds Adjust / Apaleo allowance / HotelKey SR 是过程，不是定价权

厂商把「服务补偿」做成**本住账单过账 + 原因码 + 控制开关 + 客满跟踪**。没有一家被打开的官方页把它写成「补偿默认等于 BAR」或「服务失败就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Charges Adjustment and Payments*（§98/§101） | Post Adjustments：fixed amount or %。**Posting Service Recovery Adjustment Charges**："A Service Recovery Adjustment provides the ability to post and track adjustments related to service recovery versus other non-service recovery related adjustments." Allow Negative Postings / negative Price or Quantity = rebate。**Manually posting rate code charges does not … change the rate code, room type, number of persons, rate, or other details specified on the reservation.** | **本住过账与跟踪。** ≠ BAR Type。过账动作 ≠ 改预订卖价 |
| OPERA Cloud 26.2 *About Billing*（§98/§101） | Adjust by amounts or percentages + reason codes。Allow Negative Postings：negative (rebate) charges can be posted | **Folio adjust/rebate ≠ public flexible BAR** |
| OPERA Cloud 26.2 *Configuring Adjustment Reason Codes*（§98/§101） | Code Type **Service Recovery**："Indicates resolution of an issue with a dissatisfied guest."（Service Requests OPERA Control active） | **原因码 / 客满解决类型 ≠ 定价权** |
| OPERA Cloud 26.2 *OPERA Controls — Cashiering*（§97 指针 / §101 用途升核） | SERVICE RECOVERY ADJUSTMENT = Enables posting a service recovery adjustment。ALLOW NEGATIVE POSTINGS = Allows posting of negative sales charges to Reservation Accounts | **控制开关。** ≠ 改写公开灵活 |
| OPERA Cloud 26.2 *Managing Reservation Service Requests*（§101 **新开**） | Service Requests = incident, complaint or general request tracking；associated with profile / reservation / room；must be resolved then followed-up | **投诉/事件跟踪。** ≠ BAR Type |
| Cloudbeds *Add or adjust reservation charges*（§98/§101） | Adjustment = add a discount or correct reservation price shown in folio/invoice；subtracts from guest debit/charge；separate transaction type；refund 才动付款 | **Folio adjustment ≠ public BAR rewrite** |
| Apaleo *Adding and Moving Charges*（§99/§101） | Refund / Add allowance；也可给折扣（例：neighbours were noisy） | **Folio allowance ≠ BAR rewrite** |
| HotelKey *Service Recovery .ng-v2*（§99/§101） | Service recovery = restore satisfaction after service failure。Revenue-impacting → negative charge on folio；non-revenue → does not affect folio balance | **Service Recovery posting ≠ BAR Type** |
| CoStar STR *Historical Benchmarking*（§15/§96/§98/§101） | "Rooms Revenue reported to STR should be net of rebates, refunds, allowances, overcharges and taxes." | **Accounting net-of-allowance = ADR READ，不是 rewrite-BAR** |
| HSMAI Academy *BAR*（§67/§101） | BAR = non-qualified, publicly available | 服务补偿 **不是 BAR** |

```
画面：客人投诉补了差价改 BAR / 服务失败今晚全部 dump / 补偿券才是市场价 / ADR 被减免看脏 / 销售说「Service Recovery Adjustment 屏就是公开价」
Naive：BAR 就是那个补偿；能配原因码/开关所以改尺
本卡：Post Service Recovery、Reason Codes、Controls、Cloudbeds Adjust、Apaleo allowance、HotelKey SR 都是过程。定价权在公开 BAR + Pace，不在补偿过账按钮。
```

```
OPERA Post Service Recovery Adjustment / Post Adjustment  → 本住过账与跟踪
OPERA Adjustment Reason Code Type Service Recovery       → 原因码（客满解决）
OPERA SERVICE RECOVERY ADJUSTMENT / ALLOW NEGATIVE       → 控制开关
OPERA Service Requests                                   → 投诉/事件跟踪
Cloudbeds Adjust Charge                                  → folio/invoice 交易类型
Apaleo Refund / Add allowance                            → folio 纠正 / 折扣
HotelKey Service Recovery（rev / non-rev）               → folio negative charge 或仅报告
STR net of rebates/allowances                            → ADR 读法（不是改尺令）
Public BAR                                               → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住补偿 SOP / 本店默认补偿 % / 佣金% = **NV，不编。** UI 字段是 OPERA/Cloudbeds/Apaleo/HotelKey 的，不是本店报表名。不发明中国发票理论（22:17 scout 已确认无 A 源）。Mews allowances 本小时再试仍 CSS Error，不当核。

---

## 3. 「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏」是 posting 信号，不是改写公开 BAR 的许可证

服务补偿回答的是：**这张本住账单要贴多少 Service Recovery / adjustment、客满怎么过账、ADR 有没有被减免读脏。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 补偿看起来更低 | 需求仍强；公开尺 **Hold**；补偿留在 folio Service Recovery | 「市场认补偿地板，BAR 改 399」 |
| 服务失败、公开 BAR 也动 | 本住 posting ≠ 必须砍公开尺；公开仍 Pace 闸 | 用「服务失败」证明必须 dump 公开尺 |
| ADR 因 allowances/rebates 显得怪 | **形 C**：读 posting；分看公开 vs 补偿；STR net-of-allowance 是 READ | 「已经看脏了所以砍 BAR」 |
| Service Recovery Adjustment / Adjust Charge / Controls 还能配 | **形 E**：配置/过账 ≠ BAR Type | 「屏/原因码/开关就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从补偿地板改写 BAR | 一夜 −15%；把补偿地板永久化 |

```
Service recovery looks like a market price  → posting 信号（可加强拆尺 / Hold 公开）
Public BAR                                 → 仍由 Pace / Remaining 定
Naive                                      → 「服务失败 / 补了差价所以 BAR→399」
本卡                                       → 补偿 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店服务补偿改尺 ≠ 点评（P39）≠ BRG（P75）≠ Comp（P47）≠ 取消费（P84）≠ 储值（P83）≠ 押金（P86）≠ 真弱（P05）

七边都在「看起来像价钱 / 销售要跟」附近，对象不同。塌成「反正都是钱所以砍」会开错杠杆。

| | **P87 / 本卡（重置公开尺=补偿地板）** | **P39（点评 SIGNAL）** | **P75（BRG 索赔）** | **P47（计划 Comp）** | **P84（取消费）** | **P83（储值）** | **P86（押金）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到本住 Service Recovery / rebate | 评分/口碑下滑 | like-for-like 已订直销索赔 | 计划 Comp / HU | 取消/attrition FEE | 储值卡付款 | 押金/预授权 hold | 真 Behind leftover |
| 尺 | 公开 **BAR** | 口碑 SIGNAL | 单笔履约 | Comp 库存 | FEE 过账 | 付款/负债 | 付款/hold | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | 不因评分砍 | Hold；单笔履约 ≠ 改尺 | 不按 Comp OCC 涨/砍 | Hold；FEE 留码 | Hold；储值留 SVS | Hold；押金留 Deposit | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；补偿当市价 | 把评分当补偿改尺 | 把索赔当服务失败改尺 | 把计划 Comp 当本住 rebate | 把 FEE 当补偿 | 把储值当补偿 | 把押金当补偿 | 一夜 −15%；把补偿地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是点评 SIGNAL，还是 BRG 索赔，还是计划 Comp，还是取消费，还是储值，还是押金，还是真弱？** 点评 → P39。BRG → P75。计划 Comp → P47。取消费 → P84。储值 → P83。押金 → P86。真弱 leftover → P05。要把本住 Service Recovery / rebate 叫 BAR / 要补偿当地板 / Service Recovery 屏所以跟 → 本卡 / P87。

---

## 5. 假尺子一族：「服务补偿就是 BAR / 补了差价所以砍 / 补偿券才是市场价」

本卡不是新怪现象，是同一族的下一张：**屏幕上的 folio 纠正/客满过账工具被当成定价按钮。**

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
| **T-Deposit** | 「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板」 | 公开 BAR + Pace；付款/hold 不是 BAR |
| **本卡 T-Service-Recovery** | 「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏」 | **公开 BAR + Pace**；不是 folio 补偿当 BAR 令，也不是 dump 399 令 |

「补了差价所以改 BAR」= 把 **本住 posting 工具** 当成 **公开灵活价**。尺子在补偿地板上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「服务失败今晚全部 dump」是另一把假尺子：把**客满事件**当成「市场已经认了新尺」。该把 posting 留在 Service Recovery Adjustment，不是改写 Brand.com。

「补偿券才是市场价」是第三把：把**单笔履约/客满工具**当成「公开尺必须降到补偿」。Adjustment 仍是 folio 纠正，不是卖价指令。

「ADR 被减免看脏所以 dump」是第四把：把**会计 net-of-allowance 读脏**当成砍尺令。STR net-of-allowance 是 READ，不是 rewrite。

与 **T-Deposit / T-Stored / T-Fee / T-BRG** 的边界：押金是住前付款/hold；储值是 folio 付款/负债；费是费层/展示加总；BRG 是已订直销索赔履约。本卡是 **本住 folio Service Recovery / adjustment / rebate**。对象不同，假尺子同族。

---

## 6. Diagnose → Advise：服务补偿被允许改什么

用户原话：「客人投诉补了差价，BAR 改成 399」「服务失败今晚全部 dump」「补偿券 399 所以公开也 399」「ADR 被减免看脏了」「Service Recovery Adjustment / Adjust Charge 屏就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是本住 folio Service Recovery / posting adjustment / rebate / 客人「补偿感觉像房价」；
            ②拟议是「改尺 / 服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」还是「补偿留在 Service Recovery、Hold 公开」；
            ③Pace / Remaining；这是 posting 层还是要改公开尺。
  缺补偿% / 本店补偿 SOP → 问，不编华住字段。

Diagnosis
  服务补偿已经挂在 folio posting 层之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 屏当尺 vs 点评 vs BRG vs Comp vs 取消费 vs 储值 vs 押金 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆 posting vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P39 / P75 / P47 / P84 / P83 / P86 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住补偿 SOP / 默认补偿 %。
  **Ahead 夜：服务补偿不被允许改公开 BAR。**

What To Watch
  公开 BAR 是否仍 Hold；补偿是否仍关在 folio Service Recovery Adjustment / Adjust Charge；24h 公开 Pickup vs 补偿过账（分看）
  不是「Service Recovery Adjustment 把数贴上了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C ADR 看脏 / D→P39·P75·P47·P84·P83·P86 / E Service Recovery/Adjust 屏当 BAR Type / F→P05）走 **P87**，本卡**不重复 P87 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P88。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **本住 folio Service Recovery / posting adjustment / rebate**，还是要把 **公开 BAR 改成那个地板**？ | 混用尺；把 posting 当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与本住补偿/adjustment/rebate 各是多少？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA Post Service Recovery / Adjustment Reason / Cloudbeds Adjust？是否其实是点评（→P39）/ BRG（P75）/ Comp（P47）？ | 把配置/过账写成「已成新 BAR」 | **NV** → 先拆 posting，不编补偿 SOP |
| 4 | 拟议是补偿留在 folio、Hold 公开，还是改写公开尺 / 服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价？ | 误入本卡 / P39 / P75 | **NV** |
| 5 | 本店补偿 SOP / 华住字段 / 默认补偿 % 怎么走？ | 发明华住 SOP；或把 Vendor $ 例当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是点评 SIGNAL（→P39）；是不是 BRG 已订直销（→P75）；是不是计划 Comp（→P47）；是不是取消费（→P84）；是不是储值（→P83）；是不是押金（→P86）；真 Behind leftover（→P05）。**补偿 %、佣金%、699、Walk $、华住补偿 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 服务补偿就是公开 BAR | BAR = 无资格公开灵活。补偿是 folio 过账 |
| 补了差价所以 BAR→399 | posting 地板 ≠ 战略尺。拒绝 |
| 服务失败所以砍公开 | 客满事件 ≠ Brand.com 栅格 |
| 补偿券才是市场价所以跟 | 单笔履约/客满工具 ≠ 卖价指令 |
| ADR 被减免看脏所以 dump | STR net-of-allowance 是 READ；不是砍尺令 |
| Service Recovery Adjustment / Adjust Charge 屏配了所以公开尺改完 | 配置/过账过程 ≠ BAR Type |
| SERVICE RECOVERY ADJUSTMENT / ALLOW NEGATIVE 开了所以公开跟补偿 | 控制开关 ≠ 改写公开灵活 |
| Service Requests 开了投诉所以公开改尺 | 投诉跟踪 ≠ BAR Type |
| Cloudbeds Adjust Charge 就是公开价表 | folio 交易类型 ≠ BAR Type |
| Apaleo Add allowance 就是房价 | folio allowance ≠ BAR |
| HotelKey Service Recovery 就是公开尺 | negative charge / non-rev ≠ BAR Type |
| OPERA $ breakfast 例就是我们该补 / 该卖的 | Vendor 示意 NOT China Fact |
| 点评掉了所以按补偿砍 BAR | **P39** |
| 贵就赔所以按补偿改尺 | **P75** |
| 计划 Comp 也低所以跟补偿地板 | **P47** |
| 取消费也像补偿所以跟 | **P84** |
| 储值也像补偿所以跟 | **P83** |
| 押金也像补偿所以跟 | **P86** |
| 反正空，按补偿地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住补偿 SOP 就能 Advise | **禁止。** 默认补偿 % NV |
| 中国发票价就是补偿尺 | **禁止。** 本小时不发明发票理论；22:17 无 A 源 |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P87 `cases/sim-2026-service-recovery-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
本住 Service Recovery / rebate = 399（不是新 BAR；folio posting Simulation）
销售拟议                     = 「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏」砍 BAR 到 399
```

读法（与 P87 同句）：399 是被拒绝的服务补偿改尺，不是 BAR。Advise：拆公开 vs folio Service Recovery；**Hold 779–799 首选 799**；拒 dump **399**；补偿留在 Service Recovery Adjustment；补偿 % **NV**。不要用 OPERA $ breakfast 例当 sim 数字。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/补偿默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-09-01 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Service Recovery Adjustment = post and track service-recovery vs other adjustments | **A Vendor PMS** | **Known 过账过程。** ≠ BAR Type | OPERA Charges Adjustment（**§98/§101 升核**） |
| Manually posting rate code charges does not change reservation rate/details | **A Vendor PMS** | **Known 过账 ≠ 改卖价** | 同上 |
| Allow Negative Postings = rebate charges | **A Vendor PMS** | **Known rebate 开关/过账** | OPERA About Billing + Controls Cashiering（**§98/§101**） |
| Adjustment Reason Code Type Service Recovery = dissatisfied guest resolution | **A Vendor PMS** | **Known 原因码。** ≠ 定价权 | OPERA Configuring Adjustment Reason Codes（**§98/§101**） |
| SERVICE RECOVERY ADJUSTMENT control enables posting | **A Vendor PMS** | **Known 开关。** ≠ BAR Type | OPERA Controls Cashiering（**§101 用途升核**） |
| Service Requests = incident/complaint tracking | **A Vendor PMS** | **Known 投诉跟踪。** ≠ BAR | OPERA Managing Reservation Service Requests（**§101 新开**） |
| Cloudbeds adjustment = folio/invoice transaction；refund 才动付款 | **A Vendor PMS** | **Known folio 交易。** ≠ BAR rewrite | Cloudbeds Add or adjust（**§98/§101**） |
| Apaleo Add allowance = folio 纠正/折扣 | **A Vendor PMS** | **Known allowance ≠ BAR** | Apaleo Adding and Moving Charges（**§99/§101**） |
| HotelKey Service Recovery = negative charge or non-revenue | **A Vendor PMS** | **Known posting ≠ BAR** | HotelKey Service Recovery（**§99/§101**） |
| Rooms Revenue net of rebates/allowances | **S 协会报送** | **Known ADR READ ≠ rewrite** | STR Historical（**§15/§96/§98/§101**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§101 升核**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P87 + Pace 闸 | — |
| 本店补偿 SOP / 华住字段 / 默认补偿 % / 中国发票理论 / Mews allowances 正文 | — | **NV / 失败。不编。** | Mews 再试 CSS Error |

本小时新开：OPERA Cloud 26.2 *Managing Reservation Service Requests*。用途升核：OPERA Controls — Cashiering（SERVICE RECOVERY ADJUSTMENT + ALLOW NEGATIVE POSTINGS；§97 原为押金 DEPOSIT HANDLING）。升核/复核：OPERA Charges Adjustment + About Billing + Adjustment Reason Codes + Cloudbeds Adjust + Apaleo Adding/Moving Charges + HotelKey Service Recovery + STR Historical allowances + HSMAI BAR。失败：Mews FAQs/Create allowance 再试仍 CSS Error。华住补偿 SOP **未开、不编**。中国发票理论 **不发明**。Pet/AAA 仍停车。**不规定 P88。**

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-SR-01 | 本店补偿 SOP / 是否真有 OPERA Post Service Recovery / Adjustment Reason / Cloudbeds Adjust | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-SR-02 | 本店默认补偿 % / 佣金% | **NV。** 补偿不是改尺令 |
| NV-SR-03 | 399 来源（补偿话术 / 补偿券 / ADR 抱怨） | **NV。** 先 Hold 公开 BAR |
| NV-SR-04 | 中国发票 / 开票价与补偿过账关系 | **NV。** 22:17 无 A 源；本小时不发明 |
| NV-P87-01… | P87 已挂（华住补偿 / 默认补偿 %） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-01 00:17 CST | 首版。T-Service-Recovery = 服务补偿/folio Service Recovery adjustment 是 folio 纠正/客满过账工具，不是公开 BAR。三把尺；Post Service Recovery/Reason Codes/Controls/Cloudbeds/Apaleo/HotelKey≠定价权；服务失败/补差价≠改尺令；P39/P75/P47/P84/P83/P86/P05 孪生；假尺子一族；不重复 P87 六形。**不写 P88。** 14/399/799 Simulation only。399 = 被拒绝的 dump。服务补偿 leftover 已关。 |

---

## 13. 交叉（不改 P01–P87 正文；P87 仅头一行 + 修订行，邻卡仅文末一行）

- **P87** `advisor-playbooks/service-recovery-adjustment-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-service-recovery.md`：复用，不重写。
- **轻指标** `metrics/service-recovery-vs-public-bar.md`：公开 BAR vs 补偿/adjustment gap；无默认补偿 %。本卡不重写公式。
- **P39**：点评/口碑 SIGNAL。本卡 / P87 = 要把公开尺写成/跟到本住补偿地板。
- **P75**：BRG like-for-like 已订直销索赔。邻「单笔履约」，不是服务失败改尺。
- **P47**：计划 Comp / House Use。邻「计划免费/自用」，不是本住 rebate。
- **P84**：取消/attrition FEE。邻「FEE 过账」，不是服务补偿。
- **P83 / T-Stored**：储值付款/负债。邻「SVS」，不是 folio Service Recovery。
- **P86 / T-Deposit**：押金/预授权 hold。邻「付款/hold」，不是本住补偿。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正服务补偿≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P88。禁止编华住补偿 SOP、默认补偿 %、佣金%、699、Walk $。禁止开 Pet/AAA 专剧。禁止发明中国发票理论。禁止重写 optimization-advise。禁止造 systems/cloudbeds.md / systems/apaleo.md / systems/hotelkey.md / systems/mews.md。**

> 交叉指针（2026-09-01 08:17，不改正文）：假尺子同族下一张 **T-Employee**（员工价/付费员工折扣 ≠ 公开 BAR）。过程仍 **P80**。本卡仍是 folio Service Recovery。不规定 P88。
