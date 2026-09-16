# Resort Fee / All-in vs Public BAR｜强制费/服务费/含税总价不是公开 BAR

> 资产：T-Fee / T11–T14 下一层（费/税/all-in 被允许改什么）· T-Live / T-BRG / T-Package 同族（尺子 ≠ 按钮）
> 路径：`theory/resort-fee-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-30
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A 协会（STR CoStar *P&L Data Reporting Guidelines*：Resort/Destination/Urban Fees 必须 Misc、**永不** Rooms — **§80 升核 / §81 复核**）；A 协会（STR CoStar *Historical Benchmarking Data Reporting Guidelines*：principal 强制服务费可进 Rooms；Resort Fees Exclude → Misc Schedule 4；税/政府附加/小费/agent-mode Exclude — **§80 升核 / §81 复核**）；A Vendor PMS（OPERA Cloud 26.2 *Package Codes*：Included / Separate Line / Combined Line；City Tax 是套餐公式不是 BAR；Vendor $540 蜜月例 **不进 Fact** — **§80 升核 / §81 复核**）；A Vendor PMS（OPERA Controls Rate Management：`SHOW ADD SEPARATE LINE PACKAGES TO RATES IN THE LTB` [INCL_PRINT_SEP_PKGS_IN_RATE_QUERY] 显示加总 ≠ 定价权 — **§80 升核 / §81 复核**）；A 监管（FTC *Rule on Unfair or Deceptive Fees* FAQ：short-term lodging 须前置披露含强制费的 **total price**；税/政府费可排除；可分项但总价最醒目；**不禁止任何费种/金额/定价策略** — **§81 新开**；**美国管辖，不是中国 SOP**；$199+$39 例 **不进 Fact**）；A Vendor/OTA（Booking.com Demand API *Displaying prices to U.S. travellers – FTC compliance*：US 旅客前置 total 含 resort/service/destination fees；税/可选/运费可排除 — **§81 新开**；**美国展示层，不是 BAR Type**）；A 协会（AHLA *State & Local Resort Fees*：支持前置公布含全部强制非税费的 total price；税/TID 可结账披露 — **§81 新开**；**6% 店收度假费不进中国 Fact**）；C 协会转载（HFTP Publications via Hotel Online 2024-07-19：USALI 度假费 ∈ Misc Schedule 4、**不影响 ADR**；加州 SB 478 是披露不是 P&L 改桶；USALI 12th 更名为 Destination, Resort, and Urban Fees — **§81 打开作 C**）
> 配套：`advisor-playbooks/resort-fee-service-charge-vs-bar.md`（P79 过程）· `recommendations/dont-rewrite-bar-for-resort-fee.md`（主卡复用，不重写）· `metrics/resort-fee-vs-public-bar.md`（轻指标；**无默认费 % / 税率 Fact**，公式不重写）· `cases/sim-2026-resort-fee-allin-sat.md`（Simulation）
> 交叉：P36 竞对比价税/费口径 ≠ 本卡「本店 all-in 写成新公开 BAR」· P69 含早套餐 · P78 Extra Person/加床 · P74 券后/平台出资 · P75 BRG 比价不含税费 · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live（假尺子一族）
> 问题树：§86「Resort Fee/强制服务费/含税总价不是公开 BAR」（过程路由已够；本卡给「为什么费/税/all-in/过账显示不是公开 BAR、披露闸/上报桶不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 费表，不自动改价，不代改费表。**
> 状态：**理论 drafted**（2026-08-30 08:17 CST）。**不写 P80，不写新剧本，不写员工价/停车费专剧。** 禁止：编华住费表 SOP / 默认 Resort Fee % / 服务费 % / 税率 Fact / 699 / AHLA 85–95 / Cornell Budget-vs-Forecast；一夜 −15%；BAR→399「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」；把 14/399/799 当市场 Fact；把 FTC/EU drip-pricing 写成中国 SOP；把 OPERA $540 / FTC $199+$39 / Booking 外币例写成中国 Fact；重写 `resort-fee-vs-public-bar.md` 公式；重写 P01–P79 正文（P79 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**Resort Fee / Destination·Urban Fee / 强制服务费 / 税 / OTA all-in 总价是费层、税层或展示加总，不是公开灵活 BAR。**
协会能把度假费钉进 Misc、永不进 Rooms；能允许店作 principal 的强制服务费进 Rooms Revenue（上报一致性）；能把税/政府附加/小费/agent-mode 排除——只证明「上报桶怎么分」，不证明「公开灵活价该写成客人看到的总价」。厂商能把套餐做成 Separate Line / Combined Line、能把 LTB 勾上 Separate Line 显示加总，只证明「过账/显示怎么画」，不证明「BAR Type 改成了 all-in」。监管能要求美国短住前置披露含强制费的 total price——只证明「展示层要诚实」，**明文不禁止费种、金额或定价策略**，更不是「BAR 跟到含费地板」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」把 BAR 改写成 399。竞对比价税/费 → **P36**。含早 → **P69**。加床 → **P78**。券后 → **P74**。BRG 不含税费 → **P75**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店费表 / 华住字段 / 默认费 % / 税率 Fact = **全部 NV**。

```
Naive（禁止）     客人看到的总价就是我们的公开价；OTA all-in 贵所以 BAR 改 399；
                  服务费吓跑所以砍公开尺；含税太贵所以跟；ADR 被 Resort Fee 看脏所以 dump
本卡              先拆三把尺（公开 BAR / 费或税层 / all-in 展示或 folio·LTB 加总）。
                  STR 上报桶 / OPERA 过账显示 / OTA 披露闸 ≠ 定价权。过程走 P79。
```

完成标准：用户说「OTA 总价贵改 BAR」「服务费吓跑砍公开价」「含税太贵所以跟」「ADR 被 Resort Fee 看脏砍 BAR」「all-in 才是公开价」「LTB Separate Line 加总就是新 BAR」→ Situation 写成**三把尺 + Pace/Remaining + 这是费/税还是展示**；Diagnosis 写成费/税/all-in 不是公开 BAR、披露闸/上报桶不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、费是否仍挂在费表/过账、折扣%/税率是否仍 NV。**不 dump 399、不把 all-in 写成新 BAR、不写 P80。**

顾问必须能直接说的三句（与 P79 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是房价 / Resort·Destination·Urban Fee / 强制服务费（是否分员工） / 税 / OTA all-in 展示，还是要把公开灵活 BAR 改成客人看到的总价。费项 ≠ 公开尺。本店费表 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」。
3. 竞对比价税/费走 P36。含早套餐走 P69。加床走 P78。券后走 P74。BRG 比价不含税费走 P75。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从费项改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**客人看到的含费/含税总价回答不了「今晚公开灵活该卖多少」。** 它回答「费表还挂着什么、folio/LTB/OTA 把哪一层加进去了」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把 all-in 写成新 BAR。禁止编默认 Resort Fee %。禁止编服务费 %。禁止编税率 Fact。**

---

## 1. 三把尺：公开 BAR / 费或税层 / all-in 展示

顾问问题不是「客人屏幕上有没有一个更大的数」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、非强制费层） | Ahead Hold；真弱才 P05（仍这把尺） | 当成 all-in 地板；砍到「总价贵所以改尺」 |
| **Fee / tax layer** | Resort·Destination·Urban Fee；强制服务费（是否分员工）；税/政府附加；小费/agent-mode | 可留独立费表/过账；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **All-in display** | OTA total / folio Combined Line / LTB 勾上 Separate Line 后的查询加总 | 窗/披露层 → 分看；诊断：加总 ≠ 已成新 BAR | 把「客人看到的总价」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Allin_display           = 399+费 或 899  # Simulation：客人看到的总价（不是新 BAR）
Gap                     = Allin_display − Public_BAR   # 尺在 metric，不重写；不是必须折扣指令
Layer                   = room | resort/destination/urban | principal service charge | tax/gov | folio/LTB/OTA total
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国度假费默认。

混淆三把尺会同时拧坏 **公开尺** 与 **费层**：把「OTA 总价 399+费」读成「我们 BAR 就是 399」，或把「服务费吓跑」读成「公开栏必须跟到地板」。

STR P&L（A，§80/§81 复核）：Resort/Destination/Urban Fees **必须永远 Miscellaneous Income，永不 Rooms**。**方向采用：度假费是 Misc 桶，不是 BAR Type。**

OPERA Package Codes / Controls（A，§80/§81 复核）：Separate Line = 房价外另过独立 folio；Combined Line 只加展示房价；LTB 含 Separate Line = 查询显示加总。**方向采用：过账/显示闸不是把公开灵活改成含费总价。** Vendor $540 蜜月例 **不进本店 SOP。**

---

## 2. STR 上报桶 / OPERA 过账显示 / OTA 披露闸是过程，不是定价权

厂商和协会把「费」做成**上报桶 + 过账属性 + 展示加总**。没有一家被打开的官方页把它写成「all-in 默认等于 BAR」或「总价贵就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| STR CoStar *P&L Data Reporting Guidelines*（§80 升核 / §81 复核） | Rooms Exclude：Resort/Destination/Urban Fees 必须永远 Misc，永不 Rooms。Misc Include：Resort Fees。Service Charges：Only include in revenue if **not distributed to staff** | **上报桶。** 不是 BAR Type，不是「公开尺改成含费总价」 |
| STR CoStar *Historical Benchmarking*（§80 升核 / §81 复核） | Include in Rooms：Surcharges and service charges（property acting as principal）— mandatory, non-discretionary, not passed to 3rd party。Exclude：Resort Fees → Misc Schedule 4。Exclude：Taxes and Government mandated surcharges；Gratuities；agent-mode | **principal 服务费可进 Rooms = 一致性，仍 ≠ 改尺。** 税/小费 Exclude |
| OPERA Cloud 26.2 *Package Codes*（§80 升核 / §81 复核） | Included in Rate / Add To Rate - Separate Line / Combined Line。Separate Line = 房价外另过、独立 folio。Combined Line 增加 folio **展示**房价。City Tax = 套餐公式。Sell Separate = 预订侧可加 | **过账属性。** 不是 BAR Type。$540 蜜月例不进 Fact |
| OPERA Controls Rate Management（§80 升核 / §81 复核） | `SHOW ADD SEPARATE LINE PACKAGES TO RATES IN THE LTB` [INCL_PRINT_SEP_PKGS_IN_RATE_QUERY]；PACKAGES SOLD SEPARATELY；PACKAGE ATTRIBUTES FOR EXTERNAL RATES | **显示闸。** 能勾加总 ≠ 定价权 |
| FTC Unfair or Deceptive Fees FAQ（§81 **新开**） | short-term lodging 须前置披露含强制费的 total price；税/政府费可排除；可分项但总价最醒目；例 nightly $199 + mandatory resort $39 须进 total。Press：规则 **不禁止任何费种/金额/定价策略** | **美国披露闸。** 展示诚实 ≠ 改写公开 BAR。**管辖标签，不是中国 SOP** |
| Booking.com Demand API FTC compliance（§81 **新开**） | US 旅客前置 total 含 resort / service / destination fees；税、可选、运费可排除；breakdown 不能替代最醒目的 total | **OTA 展示层。** book / total / extra_charges ≠ BAR Type |
| AHLA *State & Local Resort Fees*（§81 **新开**） | 支持一致披露 rates/fees/taxes；前置公布含全部强制非税费的 total price；税/TID 可结账披露 | **协会披露立场。** 不是「BAR 必须等于 all-in」。6% **不进中国 Fact** |

```
画面：OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费看脏 / 销售说「BAR 改成这个总价」
Naive：BAR 就是那个总价；总价贵所以改尺
本卡：STR 桶、OPERA Separate/Combined/LTB、OTA total、FTC 披露都是过程。定价权在公开 BAR + Pace，不在费按钮。
```

```
Resort / Destination / Urban Fee          → Misc（永不 Rooms）
Principal 强制服务费（未分员工）        → 可进 Rooms 上报（仍 ≠ BAR）
税 / 政府附加 / 小费 / agent-mode        → Exclude
OPERA Separate / Combined / LTB 加总    → 过账 / 显示
OTA / FTC total price                   → 披露层（美国管辖）
Public BAR                              → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住费表 / 本店费 % / 税率 Fact / FTC/EU drip-pricing 中国 SOP = **NV，不编。** UI 字段是平台/OPERA 的，不是本店报表名。

---

## 3. 「总价贵 / 服务费吓跑 / ADR 看脏」是展示/指标信号，不是改写公开 BAR 的许可证

总价贵回答的是：**客人屏幕上的加总是不是比公开尺大、费层有没有被当成投诉由头。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + OTA all-in 看起来更贵 | 需求仍强；公开尺 **Hold**；费留在费表 | 「市场认含费地板，BAR 改 399」 |
| 服务费吓跑、公开 BAR 也动 | 分看投诉是费层还是房价；公开仍 Pace 闸 | 用服务费投诉证明必须 dump 公开尺 |
| ADR 因 Resort Fee 进错 Rooms 或 principal 服务费进 Rooms 显得怪 | **形 C**：读桶；resort 应 Misc | 「已经看脏了所以砍 BAR」 |
| LTB / folio 加总还能订 | **形 E**：显示闸 ≠ BAR Type | 「加总就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从费项改写 BAR | 一夜 −15%；把 all-in 地板永久化 |

HFTP Publications / Hotel Online（C，§81）：加州 SB 478 是披露（展示价须含强制费），**不是**把度假费改记进 Rooms 或改 ADR 公式；USALI 度假费仍 Misc，不影响 ADR。**方向采用：披露 ≠ 改尺，披露 ≠ 改桶。** 不把加州法写成中国 SOP。

```
All-in looks expensive   → 展示/投诉信号（可加强拆尺 / Hold 公开）
Public BAR              → 仍由 Pace / Remaining 定
Naive                   → 「总价贵所以 BAR→399」
本卡                    → 总价贵 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店 all-in 改尺 ≠ 竞对比价税/费（P36）≠ 含早（P69）≠ 加床（P78）≠ 券后（P74）≠ BRG 不含税费（P75）≠ 真弱（P05）

七边都在「看起来更贵 / 客人嫌贵」附近，对象不同。塌成「反正都贵所以砍」会开错杠杆。

| | **P79 / 本卡（重置公开尺=all-in/费）** | **P36（竞对比价）** | **P69 / T-Package（含早）** | **P78（加床）** | **P74（券后）** | **P75 / T-BRG（BRG）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到本店 Resort Fee / 强制服务费 / 含税 / OTA all-in | 隔壁截图税/费口径不可比 | 含早套餐挂牌 | Extra Person / 加床加项 | 券后/平台出资展示层 | 索赔比价不含税费 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 同一口价 + 税/费是否可比 | 公开 EP | 公开 BAR vs 加项 | 谁出资 + 公开 BAR | 已订直销单 vs 公开 BAR | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；不可比不跟 | Hold EP | Hold；加项留该笔 | Hold；排除平台自掏 | Hold；只动该笔履约 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；all-in 当市价 | 把竞对税/费当本店改尺 | 套餐当 BAR | 加项当 BAR | 券后当新 BAR | 索赔当新 BAR | 一夜 −15%；把费项地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是竞对比价税/费，还是含早，还是加床，还是券后，还是 BRG，还是真弱？** 竞对比价 → P36。含早 → P69。加床 → P78。券后 → P74。BRG → P75。真弱 leftover → P05。要把本店费/税/all-in 叫 BAR / 要总价贵改尺 / LTB 加总所以跟 → 本卡 / P79。

---

## 5. 假尺子一族：「all-in 就是 BAR / 总价贵改尺 / LTB 加总所以跟」

本卡不是新怪现象，是同一族的下一张：**屏幕上的费/税/总价被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了 / 过期还挂」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔 / 被索赔了」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **T-Live** | 「直播间 399 / 卖爆了 / 主播价就是市场价」 | 公开 BAR + Pace；橱窗不是尺 |
| **本卡 T-Fee** | 「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费看脏」 | **公开 BAR + Pace**；不是费/税/all-in 当 BAR 令，也不是 dump 399 令 |
| **T-Extra** | 「三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR 砍 BAR / 人数阈值表就是公开价」 | **公开 BAR + Pace**；不是加项当地板令，也不是 dump 399 令 |

「OTA 总价贵所以改 BAR」= 把 **展示加总（all-in 层）** 当成 **公开灵活价**。尺子在含费总价上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「服务费吓跑所以砍公开价」是另一把假尺子：把**费层投诉**当成「市场已经认了新尺」。该把费留在费表，不是改写 Brand.com。

「LTB / folio 加总所以跟」是第三把：把**显示闸仍加总**当成「BAR Type 已经变了」。Separate Line 仍是过账属性。

「ADR 被 Resort Fee 看脏所以 dump」是第四把：把**上报桶读脏**当成砍尺令。读桶，不改尺。

---

## 6. Diagnose → Advise：费/税/all-in 被允许改什么

用户原话：「OTA 总价贵，BAR 改成 399」「服务费吓跑客人砍公开价」「含税太贵所以跟」「ADR 被 Resort Fee 看脏砍 BAR」「客人看到的 all-in 才是公开价」「Separate Line 加到 LTB 就是新 BAR」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Resort·Destination·Urban Fee / 强制服务费 / 税 / OTA all-in / folio·LTB 加总；
            ②拟议是「改尺 / 总价贵跟价 / 加总所以跟」还是「费留在费表、Hold 公开」；
            ③Pace / Remaining；这是费层、税层还是展示层。
  缺费% / 税率 / 本店费表 → 问，不编华住字段。

Diagnosis
  费/税/all-in 已经挂在屏幕上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 加正当尺 vs 竞对比价 vs 含早 vs 加床 vs 券后 vs BRG vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆费/税/all-in vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P36 / P69 / P78 / P74 / P75 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住费表 SOP / 默认费 % / 税率 Fact。

What To Watch
  公开 BAR 是否仍 Hold；费表/套餐过账是否仍挂在费项；24h 公开 Pickup vs 含费 all-in 展示（分看）
  不是「OTA 把总价挂出去了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C ADR 看脏 / D→P36·P69·P78·P74·P75 / E 过账显示当 BAR Type / F→P05）走 **P79**，本卡**不重复 P79 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P80。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **房价 / Resort·Destination·Urban Fee / 强制服务费 / 税 / OTA all-in 展示**，还是要把 **公开 BAR 改成那个总价**？ | 混用尺；把费层当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与客人看到的 all-in 各是多少？强制服务费是否分给员工？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 费是挂在费表/Separate Line，还是 Combined Line / LTB 勾了加总？ | 把显示加总写成「已成新 BAR」 | **NV** → 先拆过账，不编费表 SOP |
| 4 | 拟议是费留在费表、Hold 公开，还是改写公开尺 / 总价贵所以跟？ | 误入本卡 / P36 | **NV** |
| 5 | 本店费表 / 华住字段 / 税率怎么走？ | 发明华住 SOP；或把 FTC 美国披露当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是竞对比价税/费（→P36）；是不是含早套餐（→P69）；是不是加床（→P78）；是不是券后/平台出资（→P74）；是不是 BRG 不含税费（→P75）；真 Behind leftover（→P05）。**费%、服务费%、税率 Fact、699、华住费表 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 客人看到的 all-in 就是公开 BAR | BAR = 无资格公开灵活。all-in 是展示加总 |
| OTA 总价贵所以 BAR→399 | 展示层 ≠ 战略尺。拒绝 |
| 服务费吓跑所以砍公开价 | 费层投诉 ≠ 改尺令 |
| 含税太贵所以跟地板 | 税 Exclude；税层不是 BAR |
| ADR 被 Resort Fee 看脏所以 dump | 度假费应进 Misc；读桶不是砍尺 |
| principal 服务费进了 Rooms 所以 BAR 就是含费价 | 上报口径 ≠ BAR Type |
| Separate / Combined Line 配了所以公开尺改完 | 过账属性 ≠ BAR Type |
| LTB 勾了 Separate Line 加总 = 新 BAR | 显示闸 ≠ 定价权 |
| FTC 要求 all-in 所以中国店 BAR 也得写成总价 | **美国管辖。** 披露 ≠ 改尺。不是中国 SOP |
| Booking total 字段就是公开灵活价 | book / total / extra_charges = 展示模型 |
| 隔壁含税截图更便宜所以跟 | **P36** |
| 含早+费所以砍 EP | **P69** |
| 加床+费所以砍公开 | **P78** |
| 券后总价贵所以跟 | **P74** |
| 贵就赔要比含税费 | **P75** |
| 反正空，按 all-in 地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住费表 SOP 就能 Advise | **禁止。** 费 % / 税率 NV |
| OPERA $540 / FTC $199+$39 就是本店该收的费 | **禁止。** Vendor/监管例不进 Fact |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P79 `cases/sim-2026-resort-fee-allin-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
OTA all-in / 费层            = 399+费 或客人看到 899（不是新 BAR）
销售拟议                     = 「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费看脏」砍 BAR 到 399
```

读法（与 P79 同句）：399 是被拒绝的 all-in/费项改尺，不是 BAR。Advise：拆房价 vs 费/税 vs 展示；**Hold 779–799 首选 799**；拒 dump **399**；费留在费表；费 % / 税率 **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/度假费默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-30 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Resort/Destination/Urban Fees 必须 Misc，永不 Rooms | **A 协会** | **Known 上报桶。** ≠ BAR Type | STR CoStar P&L Data Reporting Guidelines（**§80 升核 / §81 复核**） |
| Principal 强制服务费可进 Rooms；Resort Fees Exclude；税/政府附加/小费/agent-mode Exclude | **A 协会** | **Known 拆桶。** 进 Rooms ≠ 改尺 | STR CoStar Historical Benchmarking（**§80 升核 / §81 复核**） |
| Separate Line 另过独立 folio；Combined Line 只加展示房价；City Tax = 套餐公式 | **A Vendor PMS** | **Known 过账属性。** ≠ BAR Type | OPERA Cloud 26.2 Package Codes（**§80 升核 / §81 复核**） |
| LTB 含 Separate Line 显示加总；PACKAGES SOLD SEPARATELY | **A Vendor PMS** | **Known 显示闸。** ≠ 定价权 | OPERA Controls Rate Management（**§80 升核 / §81 复核**） |
| 美国短住须前置披露含强制费的 total price；税可排除；不禁止费种/金额/定价策略 | **A 监管** | **Known 美国披露闸。** 不是中国 SOP；例 $199+$39 不进 Fact | FTC Unfair or Deceptive Fees FAQ + 2024-12-17 press（**§81 新开**） |
| US 旅客前置 total 含 resort/service/destination fees；税可排除 | **A Vendor/OTA** | **Known 展示层。** ≠ BAR Type | Booking.com Demand API FTC compliance（**§81 新开**） |
| 支持前置公布含强制非税费的 total；税/TID 可结账披露 | **A 协会** | 方向 Known。**6% 不进中国 Fact** | AHLA State & Local Resort Fees（**§81 新开**） |
| USALI 度假费 ∈ Misc、不影响 ADR；披露法 ≠ P&L 改桶 | **C 协会转载** | 方向 Known。加州法 **不是中国 SOP** | HFTP Publications via Hotel Online 2024-07-19（**§81 打开作 C**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P79 + Pace 闸 | — |
| 本店费表 / 华住字段 / 默认费 % / 税率 Fact | — | **NV。不编。** | — |

本小时新开：FTC Unfair or Deceptive Fees FAQ（+ press 同规则）+ Booking.com Demand API FTC compliance + AHLA State & Local Resort Fees。C 打开：HFTP Publications / Hotel Online USALI 披露≠P&L。升核/复核：STR P&L + Historical Benchmarking + OPERA Package Codes + OPERA Controls Rate Management。HFTP 官方 blog timeout，不当核页。Expedia newsroom 人机墙，不当核页。华住费表 SOP **未开、不编**。Vendor/监管金额例 **不采用为 Fact**。员工价 / 停车费仍 leftover 指针，不开专剧。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-FEE-01 | 本店费表 / 是否真有 Resort·Destination·Urban Fee / 强制服务费 / 税怎么挂 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-FEE-02 | 本店 Resort Fee % / 服务费 % / 税率 Fact | **NV。** 费不是改尺令 |
| NV-FEE-03 | 399 来源（OTA all-in 话术 / folio 加总 / 竞对含税截图 / 券后） | **NV。** 先 Hold 公开 BAR |
| NV-P79-01… | P79 已挂（华住费表 / 费 % / 税率） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 08:17 CST | 首版。T-Fee = 强制费/服务费/含税总价/all-in 不是公开 BAR。三把尺；STR 桶/OPERA 过账显示/OTA 披露闸≠定价权；总价贵≠改尺令；P36/P69/P78/P74/P75/P05 孪生；假尺子一族；不重复 P79 六形。**不写 P80。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P79 正文；P79 仅头一行，邻卡仅文末一行）

- **P79** `advisor-playbooks/resort-fee-service-charge-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-resort-fee.md`：复用，不重写。
- **轻指标** `metrics/resort-fee-vs-public-bar.md`：公开 BAR vs all-in/费层 gap；无默认费 %。本卡不重写公式。
- **P36**：竞对比价税/费口径。本卡 / P79 = 要把本店公开尺写成/跟到 all-in。
- **P69**：含早套餐。邻「套餐挂牌」，不是费层。
- **P78**：加床加项。邻「该笔加项」，不是 Resort Fee。
- **P74**：券后/平台出资。邻「展示层」，不是强制费。
- **P75**：BRG 比价不含税费。邻「该笔履约」。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正费项/all-in≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P80。禁止编华住费表 SOP、默认费 %、服务费 %、税率 Fact、699。禁止把 FTC/EU drip-pricing 写成中国 SOP。**

> 交叉指针（2026-08-30 10:17，不改正文）：费/税/all-in 仍本卡；员工价改尺过程走 **P80** `advisor-playbooks/staff-employee-rate-vs-bar.md`。不写 P81。

> 交叉指针（2026-08-30 16:17，不改正文）：假尺子同族下一张 **T-Wholesale** `theory/wholesale-net-vs-bar.md`（批发/TA/GDS 净 ≠ 公开 BAR）。过程仍 **P81**。不写 P82。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 交叉指针（2026-09-01 08:17，不改正文）：费/税/all-in 仍本卡；员工价 Diagnose 走 **T-Employee**，过程仍 **P80**。不规定 P88。
> 交叉指针（2026-09-01 16:17，不改正文）：费/all-in 仍本卡/本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ T-Fee。不规定 P88。
> 交叉指针（2026-09-02 08:17，不改正文）：费/all-in 仍本卡；税展示/CITY_TAX Diagnose 走 **T-Tax** `theory/tax-display-city-tax-vs-bar.md`，过程仍 **P79**。交叉 T-Tax ≠ T-Fee ≠ T-Package ≠ T-Extra。不规定 P88。
