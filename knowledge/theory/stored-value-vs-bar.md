# Stored-value / Gift Card / Prepaid Gift Card vs Public BAR｜储值卡/礼品卡是付款/负债工具，不是公开 BAR

> 资产：T-Stored / T11–T14 下一层（储值/礼品卡/Prepaid Gift Card 被允许改什么）· T-Wholesale / T-Fee / T-Live 同族（尺子 ≠ 按钮）
> 路径：`theory/stored-value-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-31
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Managing Reservation Prepaid (Gift) Cards*：SVS Issue Card + Post to Room / Post Payment — **§88 指针 / §89 升核**）；A Vendor PMS（OPERA Cloud 24.3 *Redeem Prepaid (Gift) Cards*：Post Redemption = settlement payment — **§88 指针 / §89 升核**；26.2 Redeem 再试仍失败）；A Vendor PMS（OPERA Cloud 26.2 *Managing Prepaid (Gift) Cards*：Financial → Cashiering Issue / Reload / Balance / Transfer / Cash out — **§89 新开**；付款对象管理 ≠ Rate/BAR）；A Vendor PMS（OPERA Payment Interface Cloud 24.1 *Creating and configuring SVS property*：Interface Type = SVS；Redeem Transaction Code；Cashier ID；Prepaid Card parameter — **§89 新开**；支付接口配置 ≠ BAR Type）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 指针 / §89 升核**）；A Vendor RMS（IDeaS Glossary：BAR = lowest non-restricted bookable by all；Qualified Rate 须资格 — **§85/§89 指针升核**）；C 协会转载（Hotel Online / Ralph Miller 谈 USALI 11th：Gift certificates and cards 从 Other Current Liabilities 拆成独立负债行；unused/forfeited gift certificates 进 Misc Schedule 4 指引 — **§89 打开作 C**；**不发明 STR 礼品卡 Rooms Include/Exclude 行**；STR 礼品卡桶仍 **NV**）；指针（§71 OPERA e-Certificate ≠ SVS；§88 STR attrition/cancel → Misc leftover 排名）
> 配套：`advisor-playbooks/stored-value-gift-card-vs-bar.md`（P83 过程）· `recommendations/dont-rewrite-bar-for-stored-value.md`（主卡复用，不重写）· `metrics/stored-value-vs-public-bar.md`（轻指标；**无默认储值抵房折扣 % / 礼品卡面值 Fact**，公式不重写）· `cases/sim-2026-stored-value-sat.md`（Simulation）
> 交叉：P19 预付不可退产品开关 ≠ 本卡「储值付款改尺」· P74 券后展示 ≠ 酒店 SVS · P77 直播专属 ≠ 储值支付 · P49 积分兑房 ≠ 现金储值卡 · P82 停车 ancillary · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale（假尺子一族）
> 问题树：§90「储值卡/礼品卡/Prepaid Gift Card 不是公开 BAR」（过程路由已够；本卡给「为什么 SVS Issue / Post Redemption / 负债行不是公开 BAR、支付过程不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / SVS / OTA，不自动改价，不代发卡/核销。**
> 状态：**理论 drafted**（2026-08-31 00:17 CST）。**不写 P84，不写新剧本，不开取消费专剧。** 禁止：编华住储值 SOP / 默认储值抵房折扣 % / 礼品卡面值 Fact / 佣金% / 699；一夜 −15%；BAR→399「储值才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」；把 14/399/799 当市场 Fact；把 STR 礼品卡桶写成 Rooms Fact；重写 `stored-value-vs-public-bar.md` 公式；重写 P01–P83 正文（P83 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**储值卡 / 礼品卡 / Prepaid Gift Card 抵房是付款/负债工具，不是公开灵活 BAR。**
厂商能把卡挂在 Stored Value System、能 Issue Card、能 Post to Room / Post Payment、能 Post Redemption 结算账户余额、能配 SVS 接口与 Redeem Transaction Code，只证明「有支付/发卡/核销过程」，不证明「公开灵活价该跟到储值地板」。协会能把 BAR 钉成 non-qualified publicly available、能把 gift certificates/cards 钉成独立负债行、能把 unused/forfeited gift certificates 放进 Misc 指引——只证明「公开尺定义 / 负债与 breakage 怎么记」，不证明「公开 BAR 改写成储值抵房地板」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「储值才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」把 BAR 改写成 399。预付不可退产品 → **P19**。券后展示 → **P74**。直播间 → **P77**。积分兑房 → **P49**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店储值 SOP / 华住字段 / 默认储值抵房折扣 % / 礼品卡面值 Fact = **全部 NV**。取消费仍 **MEDIUM leftover**，本卡不开。

```
Naive（禁止）     储值抵房就是我们的公开价；储值太低所以 BAR 改 399；
                  储值卖爆了所以跟；ADR 被储值看脏所以 dump；Issue/Redemption 就是公开价表
本卡              先拆三把尺（公开 BAR / 储值付款·负债 / 客人看到的「用卡后价」）。
                  SVS Issue + Post Redemption + SVS 接口 + USALI 负债行 ≠ 定价权。过程走 P83。
```

完成标准：用户说「储值抵房太低改 BAR」「储值卖爆了所以 BAR→399」「ADR 被储值看脏砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是付款/负债还是要改公开**；Diagnosis 写成储值付款不是公开 BAR、发卡/核销/负债行不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、储值是否仍关在 SVS/付款层、折扣%/面值是否仍 NV。**不 dump 399、不把储值地板写成新 BAR、不写 P84。**

顾问必须能直接说的三句（与 P83 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是储值卡/礼品卡/预付 Gift Card（OPERA：Stored Value System 发卡 + Post Redemption 当付款结账），还是要改公开灵活 BAR。储值抵房 ≠ 公开尺。本店储值 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「储值卡才是市场价 / 储值抵房太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」。
3. 预付不可退产品开关走 P19。券后展示走 P74。直播间走 P77。积分兑房走 P49。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从储值地板改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**储值卡/礼品卡回答的是「这张 folio 怎么结账」，不是「今晚公开灵活该卖多少」。** 它回答「发卡余额还能不能核销、Post Redemption 过了多少付款」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把储值地板写成新 BAR。禁止编默认储值抵房折扣 %。禁止编礼品卡面值 Fact。禁止编华住储值 SOP。禁止编 699。**

---

## 1. 三把尺：公开 BAR / 储值付款·负债 / 客人看到的「用卡后价」

顾问问题不是「客人屏幕上有没有一个更低的抵房数」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成储值地板；砍到「储值才是市场价」 |
| **Stored-value payment / liability** | SVS Issue Card；Post Redemption 结算；发卡时负债/未实现直至核销 | 可留独立付款层；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen「用卡后价」** | 客人看到的「用卡抵房后还付多少 / 卡面值感觉」 | 窗/展示层 → 分看；诊断：用卡后价 ≠ 已成新 BAR | 把「抵房后价」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Stored_value_floor       = 399 或更低  # Simulation：储值抵房地板/面值感（不是新 BAR）
Guest_seen_after_card    = Public_BAR − redeem 或「用卡后价」  # Simulation：展示层（不是本店 BAR）
Gap                      = Public_BAR − Stored_value_floor   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | SVS issue/liability | Post Redemption payment | guest-seen after-card
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国储值默认。

混淆三把尺会同时拧坏 **公开尺** 与 **付款层**：把「储值抵房 399」读成「我们 BAR 就是 399」，或把「Issue Card / Post Redemption 能过账」读成「公开栏必须跟到地板」。

HSMAI BAR（A，§67/§89）：BAR = **the non-qualified, publicly available rate**。**方向采用：储值/资格付款不是 BAR。**

IDeaS Glossary（A，§85/§89）：BAR = **the lowest non-restricted rate bookable by all guests**；Qualified Rate 须资格。**方向采用：支付工具/资格层 ≠ BAR。**

---

## 2. SVS Issue / Post Redemption / SVS 接口 / 负债行是过程，不是定价权

厂商和协会把「储值/礼品卡」做成**支付接口 + 发卡/核销过账 + 负债会计**。没有一家被打开的官方页把它写成「储值抵房默认等于 BAR」或「储值卖爆了就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Managing Reservation Prepaid (Gift) Cards*（§88 指针 / §89 升核） | Issue Card；Interface = **Stored Value System**；Payment Options：**Post to Room** 或 **Post Payment**；Offline Storage 可不送 SVS | **发卡/过账过程。** 不是 BAR Type |
| OPERA Cloud 24.3 *Redeem Prepaid (Gift) Cards*（§88 指针 / §89 升核；26.2 Redeem 再试仍失败） | **Post Redemption** 核销金额 **for settlement of a reservation account balance**；Get Balance；**Payment(s) will be posted** | **核销 = 付款结算。** ≠ 公开价栅格 |
| OPERA Cloud 26.2 *Managing Prepaid (Gift) Cards*（§89 **新开**） | Financial → Cashiering → Pre-Paid Cards：Issue / Reload / Balance / Transfer / Cash out；Interface = Stored Value System | **收银/付款对象管理。** 挂在 Financial，不是 Rate Management / BAR Type |
| OPERA Payment Interface Cloud 24.1 *Creating and configuring SVS property*（§89 **新开**） | Interface Type = **SVS**；Redeem Transaction Code；Cashier ID；Prepaid Card parameter；OPI Tenant 配 prepaid endpoints | **支付接口配置。** Redeem Transaction Code = 核销过账码，不是公开灵活栅格 |
| HSMAI Academy *BAR*（§67/§89） | BAR = non-qualified, publicly available | 储值付款要卡/余额，**不是 BAR** |
| IDeaS Glossary（§85/§89） | BAR = lowest non-restricted bookable by all；Qualified 须资格 | **资格/支付层 ≠ 改写公开 BAR** |
| Hotel Online / Ralph Miller · USALI 11th（§89 **打开作 C**） | Gift certificates and cards 从 Other Current Liabilities 拆成**独立负债行**；Misc 对 unused/forfeited gift certificates 有指引；enhanced gift certificate revenue guidance | **售卡 = 负债/未实现直至核销。** ≠ Rooms BAR Type。**不发明 STR 礼品卡 Rooms Include/Exclude**；STR 礼品卡桶仍 **NV** |

```
画面：储值才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏 / 销售说「Issue/Redemption 就是公开价」
Naive：BAR 就是那个储值地板；能发卡所以改尺
本卡：SVS Issue、Post Redemption、SVS 接口、Cashiering 管理、USALI 负债行都是过程。定价权在公开 BAR + Pace，不在储值按钮。
```

```
SVS Interface / Redeem Transaction Code     → 支付接口
Issue Card / Reload / Balance / Transfer   → 发卡与余额管理（Cashiering）
Post to Room / Post Payment                → 过账选项
Post Redemption / Get Balance              → 付款结算
USALI gift certificates/cards liability    → 负债行（售出未实现）
Public BAR                                 → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住储值 SOP / 本店储值折扣 % / 礼品卡面值 Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/SVS 的，不是本店报表名。Mews gift vouchers WebFetch **HTTP 500**（再试仍失败）= **未开第二家 Vendor 核页**，不编 Mews SOP。

---

## 3. 「储值才是市场价 / 太低所以跟 / 卖爆了改尺 / ADR 看脏」是过账/mix 信号，不是改写公开 BAR 的许可证

储值回答的是：**这张 folio 用什么付款工具结、发卡负债还剩多少、ADR 有没有被储值 mix/过账读脏。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 储值抵房看起来更低 | 需求仍强；公开尺 **Hold**；储值留在付款层 | 「市场认储值地板，BAR 改 399」 |
| 储值卖爆了、公开 BAR 也动 | 分看是付款层火还是要改尺；公开仍 Pace 闸 | 用「卖爆了」证明必须 dump 公开尺 |
| ADR 因储值 mix / 折扣过账显得怪 | **形 C**：读 posting；分看公开 vs 付款 vs 发卡金额 | 「已经看脏了所以砍 BAR」 |
| Issue / Redemption / SVS 还能用 | **形 E**：支付过程 ≠ BAR Type | 「发卡金额/核销就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从储值地板改写 BAR | 一夜 −15%；把储值地板永久化 |

```
Stored-value looks cheap   → 付款/mix 信号（可加强拆尺 / Hold 公开）
Public BAR                 → 仍由 Pace / Remaining 定
Naive                      → 「储值太低所以 BAR→399」
本卡                       → 储值太低 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店储值改尺 ≠ 预付产品（P19）≠ 券后（P74）≠ 直播（P77）≠ 兑房（P49）≠ 停车（P82）≠ 真弱（P05）

六边都在「看起来更低 / 销售要跟」附近，对象不同。塌成「反正都低所以砍」会开错杠杆。

| | **P83 / 本卡（重置公开尺=储值地板）** | **P19（预付 NR 产品）** | **P74（券后）** | **P77（直播）** | **P49（兑房）** | **P82（停车）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到储值/礼品卡抵房地板 | 预付不可退产品开关 | OTA 券后/平台出资展示 | 直播间/主播专属 | 积分兑房/elite 升 | 停车/valet/车库 ancillary | 真 Behind leftover |
| 尺 | 公开 **BAR** | 产品码开/关 | 谁出资 + 公开 BAR | 公开 BAR vs 橱窗 | 公开 BAR vs award | 公开 BAR vs 停车费 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；产品层另管 | Hold；排除平台自掏 | Hold；橱窗不是尺 | Hold；兑房占物理房 | Hold；费留费表 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；储值当市价 | 把预付产品当储值付款改尺 | 券后当新 BAR | 主播价当 BAR | award 当现金储值 | 停车当储值付款 | 一夜 −15%；把储值地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是预付产品，还是券后，还是直播，还是兑房，还是停车，还是真弱？** 预付产品 → P19。券后 → P74。直播 → P77。兑房 → P49。停车 → P82。真弱 leftover → P05。要把本店储值/礼品卡叫 BAR / 要储值太低改尺 / Issue·Redemption 所以跟 → 本卡 / P83。

---

## 5. 假尺子一族：「储值就是 BAR / 太低改尺 / 卖爆了所以跟」

本卡不是新怪现象，是同一族的下一张：**屏幕上的付款/负债工具被当成定价按钮。**

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
| **本卡 T-Stored** | 「储值才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」 | **公开 BAR + Pace**；不是储值付款/负债当 BAR 令，也不是 dump 399 令 |

「储值才是市场价所以改 BAR」= 把 **付款/负债工具** 当成 **公开灵活价**。尺子在储值地板上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「储值太低所以跟」是另一把假尺子：把**支付层地板**当成「市场已经认了新尺」。该把核销留在付款层，不是改写 Brand.com。

「储值卖爆了所以跟」是第三把：把**付款层销量火**当成「BAR Type 已经变了」。Issue/Redemption 仍是支付过程。

「ADR 被储值看脏所以 dump」是第四把：把**过账/mix 读脏**当成砍尺令。读 posting，不改尺。

与 **T-Fee / T-Wholesale** 的边界：费是费层/展示加总；批发是渠道协议净；本卡是 **folio 付款/负债工具**。对象不同，假尺子同族。

---

## 6. Diagnose → Advise：储值/礼品卡被允许改什么

用户原话：「储值抵房太低，BAR 改成 399」「储值卖爆了所以 BAR→399」「ADR 被储值看脏砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是储值/礼品卡付款·负债 / 客人「用卡后价」/ Issue·Redemption；
            ②拟议是「改尺 / 储值太低跟价 / 卖爆了所以跟」还是「储值留在付款层、Hold 公开」；
            ③Pace / Remaining；这是付款/负债层还是要改公开尺。
  缺折扣% / 面值 / 本店储值 SOP → 问，不编华住字段。

Diagnosis
  储值/礼品卡已经挂在付款层之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 发卡当尺 vs 预付产品 vs 券后 vs 直播 vs 兑房 vs 停车 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆储值付款 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P19 / P74 / P77 / P49 / P82 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住储值 SOP / 默认储值抵房折扣 % / 礼品卡面值 Fact。

What To Watch
  公开 BAR 是否仍 Hold；储值/礼品卡是否仍关在 SVS Issue / Post Redemption；24h 公开 Pickup vs 储值核销（分看）
  不是「SVS 把卡发出去了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C ADR 看脏 / D→P19·P74·P77·P49 / E SVS/Issue/Redemption 当 BAR Type / F→P05）走 **P83**，本卡**不重复 P83 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P84。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **储值卡/礼品卡/Prepaid Gift Card（SVS 发卡 + Post Redemption 付款）**，还是要把 **公开 BAR 改成那个地板**？ | 混用尺；把付款工具当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与储值抵房挂牌 / 礼品卡面值 / 客人「用卡后价」各是多少？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA SVS Issue Card / Post Redemption / Post to Room？是否 offline Storage？是否促销 e-Certificate（那是 §71）？ | 把支付过程写成「已成新 BAR」 | **NV** → 先拆付款，不编储值 SOP |
| 4 | 拟议是储值留在付款层、Hold 公开，还是改写公开尺 / 储值太低所以跟 / 卖爆了所以跟？ | 误入本卡 / P19 / P74 | **NV** |
| 5 | 本店储值 SOP / 华住字段 / 折扣% / 面值怎么走？ | 发明华住 SOP；或把面值当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是预付 NR 产品（→P19）；是不是券后/平台出资（→P74）；是不是直播专属（→P77）；是不是积分兑房（→P49）；是不是停车（→P82）；真 Behind leftover（→P05）。**储值折扣%、礼品卡面值 Fact、佣金%、699、华住储值 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 储值抵房就是公开 BAR | BAR = 无资格公开灵活。储值是付款/负债 |
| 储值太低所以 BAR→399 | 支付层地板 ≠ 战略尺。拒绝 |
| 储值卖爆了所以公开也得低 | 付款层火 ≠ Brand.com 栅格 |
| ADR 被储值看脏所以 dump | 读 posting/mix；不是砍尺令 |
| Issue Card / Post Redemption 配了所以公开尺改完 | 支付过程 ≠ BAR Type |
| SVS 接口 / Redeem Transaction Code 能核销 = BAR 就是那个价 | 接口配置 ≠ 改写公开灵活 |
| Cashiering 能 Reload/Cash out 所以公开尺跟 | 余额管理 ≠ 定价权 |
| 礼品卡售出进了收入所以 BAR 就是面值 | USALI：售卡常先记负债；核销才实现。≠ BAR |
| unused/forfeited 进 Misc 所以砍 Rooms BAR | Misc breakage 指引 ≠ 改尺 |
| 预付 NR 产品也低所以跟储值地板 | **P19** |
| 券后总价低所以跟 | **P74** |
| 直播价低所以跟 | **P77** |
| 兑房也低所以跟 | **P49** |
| 停车费也低所以跟 | **P82** |
| 反正空，按储值地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住储值 SOP 就能 Advise | **禁止。** 折扣 % / 面值 NV |
| STR 礼品卡肯定进 Rooms 所以 ADR 公式要改 | **禁止。** STR 礼品卡桶本库仍 **NV** |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P83 `cases/sim-2026-stored-value-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
储值/礼品卡抵房地板           = 399（不是新 BAR）
销售拟议                     = 「储值才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」砍 BAR 到 399
```

读法（与 P83 同句）：399 是被拒绝的储值/礼品卡改尺，不是 BAR。Advise：拆公开 vs 储值付款 vs 用卡后价；**Hold 779–799 首选 799**；拒 dump **399**；储值留在 SVS/付款层；折扣 % / 面值 **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/储值默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-31 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| SVS Issue Card + Post to Room / Post Payment | **A Vendor PMS** | **Known 发卡/过账。** ≠ BAR Type | OPERA Managing Reservation Prepaid Gift Cards（**§88 指针 / §89 升核**） |
| Post Redemption = settlement payment | **A Vendor PMS** | **Known 付款结算。** ≠ 公开栅格 | OPERA Redeem Prepaid Gift Cards 24.3（**§88/§89**；26.2 再试仍失败） |
| Cashiering Issue/Reload/Balance/Transfer/Cash out | **A Vendor PMS** | **Known 付款对象管理。** ≠ Rate/BAR | OPERA Managing Prepaid Gift Cards 26.2（**§89 新开**） |
| SVS Interface Type + Redeem Transaction Code + Cashier ID | **A Vendor PMS** | **Known 支付接口。** ≠ BAR Type | OPERA Payment Interface Cloud SVS property（**§89 新开**） |
| BAR = non-qualified publicly available / lowest non-restricted bookable by all | **A 协会 / A Vendor RMS** | **Known 公开尺定义** | HSMAI BAR（§67/§89）+ IDeaS Glossary（§85/§89） |
| Gift certificates/cards = 独立负债行；unused/forfeited → Misc 指引 | **C 协会转载** | **Known 方向：售卡负债直至核销。** 不发明 STR Rooms Include/Exclude | Hotel Online / Ralph Miller USALI 11th（**§89 打开作 C**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P83 + Pace 闸 | — |
| 本店储值 SOP / 华住字段 / 默认储值抵房折扣 % / 礼品卡面值 Fact / STR 礼品卡 Rooms 桶 | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 Managing Prepaid (Gift) Cards（Cashiering）+ OPERA Payment Interface Cloud 24.1 Creating/configuring SVS property。C 打开：Hotel Online USALI 11th gift certificates/cards liability + forfeited → Misc 指引。升核/复核：OPERA Reservation Prepaid Issue + 24.3 Redeem + HSMAI BAR + IDeaS Glossary BAR/Qualified。OPERA Cloud 26.2 Redeem **再试仍失败**（落地页非文档），继续用 24.3。Mews gift vouchers / redeem WebFetch **HTTP 500**，不当核页。华住储值 SOP **未开、不编**。STR 礼品卡 Rooms Include/Exclude **仍 NV**（C 源只支持负债/Misc 方向，不写成 STR 上报桶 Fact）。取消费仍 leftover 指针，不开专剧。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-SV-01 | 本店储值 SOP / 是否真有 SVS Issue / Post Redemption | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-SV-02 | 本店默认储值抵房折扣 % / 礼品卡面值 Fact / 佣金% | **NV。** 储值不是改尺令 |
| NV-SV-03 | 399 来源（储值话术 / 面值 / 用卡后价 / ADR 抱怨） | **NV。** 先 Hold 公开 BAR |
| NV-SV-04 | STR / USALI 官方礼品卡 Rooms Include/Exclude 行 | **NV。** 本卡只用 C 源「负债 + forfeited Misc 指引」方向 |
| NV-P83-01… | P83 已挂（华住储值 / 折扣 % / 面值） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 00:17 CST | 首版。T-Stored = 储值卡/礼品卡/Prepaid Gift Card 是付款/负债工具，不是公开 BAR。三把尺；SVS Issue/Post Redemption/SVS 接口/负债行≠定价权；储值才是市场价≠改尺令；P19/P74/P77/P49/P82/P05 孪生；假尺子一族；不重复 P83 六形。**不写 P84。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P83 正文；P83 仅头一行，邻卡仅文末一行）

- **P83** `advisor-playbooks/stored-value-gift-card-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-stored-value.md`：复用，不重写。
- **轻指标** `metrics/stored-value-vs-public-bar.md`：公开 BAR vs 储值付款 gap；无默认储值折扣 %。本卡不重写公式。
- **P19**：预付不可退产品。本卡 / P83 = 要把公开尺写成/跟到储值付款地板。
- **P74**：券后/平台出资。邻「展示层」，不是 SVS。
- **P77**：直播专属。邻「橱窗/达人码」，不是储值支付。
- **P49**：积分兑房。邻「award stay」，不是现金礼品卡。
- **P82**：停车 ancillary。邻「费层」，不是储值付款。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正储值≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P84。禁止编华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、佣金%、699。禁止开取消费专剧。禁止把 STR 礼品卡桶写成 Rooms Fact。**

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
> 交叉指针（2026-08-31 04:17，不改正文）：R31-04 复盘无真矛盾；§91 服务 P84 互补（Cloudbeds / Apaleo）。Diagnose 仍走本卡，过程仍 P83。STR 礼品卡 Rooms 桶仍 NV。不写 P85。三句 / 399-rejected / 799-Hypothesis **不改**。
