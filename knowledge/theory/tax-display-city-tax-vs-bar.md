# Tax Inclusive·Exclusive / City·Tourism Tax vs Public BAR｜含税展示/城市税包是过账对齐，不是公开 BAR

> 资产：T-Tax / T02-08（Tax Inclusive/Exclusive 展示 + CITY_TAX/城市·旅游税包过账被允许改什么）· **≠ T-Fee**（`theory/resort-fee-vs-bar.md` = P79 强制费/Resort·Destination·Urban / mandatory service charge / all-in 总价）· **≠ T-Package**（`theory/package-vs-ep-bar.md` = P69 含早套餐）· **≠ T-Extra**（`theory/extra-person-vs-bar.md` = P78 加床/Occupant Threshold）· T-Employee / T-Service-Recovery / T-Deposit 同族（尺子 ≠ 按钮）
> 路径：`theory/tax-display-city-tax-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-02
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（Cloudbeds *Taxes and Fees - Everything you need to know*：Inclusive vs Exclusive；OTA 源税错配→双计/漏计 — **§111 指针 / §112 升核**；Vendor % 例不进 Fact；税率 Fact 仍 NV）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Rate Codes*：Tax (Generate) Inclusive 勾选=价表含税；不勾=税另过账 — **§111 用途升核 / §112 升核**；含税旗 ≠ BAR Type）；A Vendor PMS（OPERA Cloud 24.2 *About City Tax Package Function*：CITY_TAX 公式挂 Package；Purpose of Stay / Net·Gross / % / ranges；Included in Rate 或 Add Separate/Combined Line — **§111 指针 / §112 升核**；Vendor 5% 例 NOT China Fact；城市税包 ≠ BAR Type）；A Vendor PMS（Apaleo *Distribution: Local Charges*：city/tourist tax；**Included in the rate** 或 put on top；Tax Handling；可 exclude 某些 rate plan — **§112 新开**第三人 Vendor；Vendor 5% VAT 例 NOT China Fact）；A Vendor PMS（Apaleo *City Tax Management*：仅一活跃 city tax 配置；按预订创建时配置算 — **§112 同族**；配置时点 ≠ 改尺令）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §111 指针 / §112 升核**）
> 配套：`advisor-playbooks/resort-fee-service-charge-vs-bar.md`（**P79 过程**；本卡不另开剧本）· `recommendations/dont-rewrite-bar-for-resort-fee.md`（主卡复用，不重写）· `metrics/resort-fee-vs-public-bar.md`（轻指标；**无税率 Fact**，公式不重写）· `cases/sim-2026-resort-fee-allin-sat.md`（sibling all-in / 费核）· `cases/sim-2026-tax-display-city-tax-sat.md`（**T-Tax 专卷 Simulation**，C02-10；过程仍 P79）
> 交叉：P36 竞对比价税/费口径 ≠ 本卡「本店含税展示/城市税当地板」· P69 含早套餐 · P78 Extra Person/加床 · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Fee / T-Package / T-Extra / T-Share / T-Parity / T-Corp / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：§86「Resort Fee/强制服务费/含税总价不是公开 BAR」（过程路由已够；本卡给「为什么 Tax Inclusive/Exclusive / CITY_TAX Package / Apaleo Local Charges 不是公开 BAR、展示/过账对齐不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 税表 / CITY_TAX Package，不自动改价，不代改税率。**
> 状态：**理论 drafted**（2026-09-02 08:17 CST）。**不写 P88，不写新剧本，不开 Pet/AAA。** 过程仍 **P79**。禁止：编华住含税 SOP / 开票税率 / 默认税 % / 城市旅游税 Fact / 699 / Walk $；一夜 −15%；BAR→399「裸价才是真 BAR / 含税太贵所以 BAR→399 / 城市税当地板 / 税率脏了 ADR 所以 dump」；把 14/399/799 当市场 Fact；把 OPERA/Cloudbeds/Apaleo Vendor % 例当中国 Fact；重写 `resort-fee-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P87 正文（P79 仅头一行理论指针 + 修订行；邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Fee / T-Package / T-Extra**；造 systems/*.md。

---

## 0. 一句话

**Tax Inclusive / Exclusive 展示与 City / Tourism tax（CITY_TAX Package / Local Charges）是展示与过账对齐层，不是公开灵活 BAR。**
厂商能勾 Tax (Generate) Inclusive、能配 Inclusive/Exclusive 税、能把 CITY_TAX 挂成 Package（Included / Separate / Combined）、能在 Apaleo Local Charges 选 Included in the rate 或 put on top——只证明「税怎么算、怎么显示、怎么过账」，不证明「公开灵活价该写成裸价地板或含税地板」。协会能把 BAR 钉成 non-qualified publicly available——只证明「公开尺定义」，不证明「税层 = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「裸价才是真 BAR / 含税太贵 / 城市税当地板 / 税率脏了 ADR」把 BAR 改写成 399。强制费 / Resort / mandatory service / all-in 核心 → **T-Fee / P79**（本卡专精税展示与城市税包）。竞对税口径苹果对橘子 → **P36**。含早套餐 → **P69**。加床 → **P78 / T-Extra**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店税率 / 华住含税 SOP / 开票税率 = **全部 NV**。Pet/AAA 仍停车。

```
Naive（禁止）     裸价才是真 BAR；含税太贵所以 BAR→399；
                  城市税当地板；税率脏了 ADR 所以 dump
本卡              先拆三把尺（公开 BAR / 税或城市税层 / Guest-seen all-in 或 ADR 被税桶读脏）。
                  Cloudbeds Inclusive/Exclusive + OPERA Tax Inclusive + CITY_TAX Package + Apaleo Local Charges ≠ 定价权。过程走 P79。
```

完成标准：用户说「裸价才是真 BAR」「含税太贵所以 BAR→399」「城市税当地板」「税率脏了 ADR 所以 dump」「Inclusive 勾了所以公开尺改完」「CITY_TAX Package 就是新 BAR」→ Situation 写成**三把尺 + Pace/Remaining + 这是税展示/城市税包还是要改公开**；Diagnosis 写成税展示/城市税包不是公开 BAR、配置屏不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、税是否仍关在税表/包过账、税率是否仍 NV。**不 dump 399、不把含税/裸价地板写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 P79 / T-Fee / 主卡**同一套**，本卡只把「税」说清楚，**不另发明第四条定价规则**）：

```
1. 先问这是 Tax Inclusive/Exclusive 展示 / City·Tourism tax 包过账 / 税层，还是房价 / Resort·Destination·Urban Fee / 强制服务费 / OTA all-in，还是要改公开灵活 BAR。税层 ≠ 公开尺。本店税率 / 华住含税 SOP / 开票税率 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「裸价才是真 BAR / 含税太贵 / 城市税当地板 / 税率脏了 ADR」。
3. 竞对比价税/费口径走 P36。含早套餐走 P69。加床走 P78。强制费/all-in 核心仍走 T-Fee/P79。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从税层改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**Tax Inclusive/Exclusive 与 CITY_TAX 回答的是「税怎么显示、怎么过账、OTA 源税有没有对齐」，不是「今晚公开灵活该卖多少」。** 它回答「含税口径 / 城市税包怎么挂」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把裸价/含税/城市税地板写成新 BAR。禁止编税率 Fact。禁止编华住含税 SOP。禁止编开票税率。禁止编 699。禁止编 Walk $。禁止把 Vendor % 例当中国 Fact。**

**命名钉死：T-Tax ≠ T-Fee ≠ T-Package ≠ T-Extra。** T-Fee = 强制费/Resort/服务费/all-in 总价；T-Tax = Inclusive/Exclusive 税展示 + 城市/旅游税包过账；T-Package = 含早套餐；T-Extra = 加床/人数加项。过程均可交邻，但对象不同。

---

## 1. 三把尺：公开 BAR / 税或城市税层 / Guest-seen all-in 或 ADR 被税桶读脏

顾问问题不是「系统里有没有 Inclusive 勾选 / CITY_TAX Package」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成裸价地板或含税地板；砍到「含税太贵所以改尺」 |
| **Tax / City·Tourism tax 层** | Cloudbeds Inclusive/Exclusive；OPERA Tax (Generate) Inclusive；CITY_TAX Package；Apaleo Local Charges | 可留在税表/包过账；对齐 OTA 源税；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen all-in 或 ADR 被税桶读脏** | 客人看到的「含税总价」；或 ADR/报表因税桶显得怪 | 窗/指标层 → 分看；诊断：总价 ≠ 已成新 BAR；ADR 怪 = READ | 把「含税总价/ADR 怪」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Tax_or_city_tax_layer    = 税额或「含税总价 − 裸价」  # Simulation：展示/过账层（不是新 BAR）
Guest_seen_or_ADR_dirty  = 「含税总价好像房价」或 ADR 被税读脏  # Simulation：展示层 / 指标读法
Gap                      = 含税总价 − Public_BAR   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | tax-inclusive/exclusive | city-tourism package | guest-seen all-in | ADR-read
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国税率默认。OPERA / Cloudbeds / Apaleo Vendor % 例 = **Vendor 示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **税层**：把「含税看起来贵」读成「我们 BAR 就是 399」，或把「裸价更低所以裸价才是真 BAR」，或把 CITY_TAX Package / Inclusive 勾选混成公开价表。

HSMAI BAR（A，§67/§111/§112）：BAR = **the non-qualified, publicly available rate**。**方向采用：税展示 / 城市税包不是 BAR。**

---

## 2. Inclusive 旗 / CITY_TAX Package / Local Charges 是过程，不是定价权

厂商把「税」做成**含税旗 + Inclusive/Exclusive 计算 + Package 过账 + Local Charges 配置**。没有一家被打开的官方页把它写成「裸价默认等于 BAR」或「含税太贵就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| Cloudbeds *Taxes and Fees*（§111/§112） | Exclusive=税加在房费上；Inclusive=税已在房费内。OTA 源税 Inclusive/Exclusive 错配→双计或漏计。先对齐源税，再谈手工改单 | **展示/过账对齐 ≠ 公开 BAR rewrite**。Vendor % 例不进 Fact |
| OPERA Cloud 26.2 *Rate Codes* Tax (Generate) Inclusive（§111/§112） | 勾选=pricing schedule 金额已含税；不勾=税另过账 | **含税旗 ≠ BAR Type** |
| OPERA Cloud 24.2 *City Tax Package Function*（§111/§112） | CITY_TAX 公式挂 **Package**；Purpose of Stay / Net·Gross / % / ranges；Included in Rate 或 Add Separate/Combined Line | **城市税包过账 ≠ BAR Type**。Vendor 5% 例 NOT China Fact |
| Apaleo *Distribution: Local Charges*（§112 **新开**） | city/tourist tax；**Included in the rate** 或 put on top；Tax Handling；可 exclude 某些 rate plan | **本地税配置过程 ≠ BAR Type**。Vendor % 例不进 Fact |
| Apaleo *City Tax Management*（§112 同族） | 仅一活跃 city tax 配置；按预订创建时配置算 | **配置时点/换档过程 ≠ 砍公开尺** |
| HSMAI Academy *BAR*（§67/§111/§112） | BAR = non-qualified, publicly available | 税 / 城市税 **不是 BAR** |

```
画面：裸价才是真 BAR / 含税太贵所以 BAR→399 / 城市税当地板 / 税率脏了 ADR / 销售说「Inclusive 勾了就是公开价」
Naive：BAR 就是那个含税或裸价；能配 Inclusive / CITY_TAX / Local Charges 所以改尺
本卡：Inclusive 旗、CITY_TAX Package、Cloudbeds 税配置、Apaleo Local Charges 都是过程。定价权在公开 BAR + Pace，不在税按钮。
```

```
Cloudbeds Inclusive / Exclusive          → 税怎么算与显示；OTA 源对齐
OPERA Tax (Generate) Inclusive           → 价表含税旗
OPERA CITY_TAX Package                   → 城市税包过账
Apaleo Local Charges / City Tax Mgmt     → 本地税 Included/on top；配置时点
Public BAR                               → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住含税 SOP / 开票税率 / 本店默认税 % / 中国城市旅游税 Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/Cloudbeds/Apaleo 的，不是本店报表名。不把 Vendor % 例写成店规。

---

## 3. 六形（A–F）映射 P79：税信号不是改写公开 BAR 的许可证

过程六形走 **P79**，本卡给 WHY（税展示 / 城市税专精），**不重复 P79 正文，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P79） |
| --- | --- | --- | --- |
| **A 含税/裸价展示 = 公开 BAR** | 「裸价才是真 BAR / 含税总价就是公开价」 | 用税展示当尺 | **拆税层 vs 公开**；Hold 公开 BAR |
| **B BAR→399「含税太贵 / 城市税当地板」** | 「客人嫌含税贵，BAR 改 399」 | 把税地板写成战略尺 | **拒绝 BAR→399** |
| **C 税进桶 → ADR/OCC 看起来怪 → dump BAR** | 「ADR 被税污染了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看房价 vs 税**；READ ≠ rewrite |
| **D 误入强制费/all-in / 竞对 / 含早 / 加床 / 真弱** | 「反正含费含税 / 隔壁含税更便宜 / 含早+税 / 加床+税 / 反正空」 | 对象是别的剧本或同剧费核 | **T-Fee 核** / **P36** / **P69** / **P78** / **P05** |
| **E Inclusive 旗 / CITY_TAX Package / Local Charges 当 BAR Type** | 「勾了 Inclusive / 挂了 CITY_TAX 就是公开价表」 | 把配置/过账当成 BAR | **旗/包/配置 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按含税地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 含税总价看起来更贵 | 需求仍强；公开尺 **Hold**；税留在税表/包 | 「市场认含税地板，BAR 改 399」 |
| OTA 源税错配导致总额不对 | **对齐源税配置**（Cloudbeds）；不是改写公开 BAR | 「总价对不上所以 BAR→399」 |
| ADR 因税桶显得怪 | **形 C**：读桶；分看公开 vs 税 | 「已经看脏了所以砍 BAR」 |
| Inclusive / CITY_TAX / Local Charges 还能配 | **形 E**：配置/过账 ≠ BAR Type | 「屏/包/旗就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从税地板改写 BAR | 一夜 −15%；把含税地板永久化 |

```
Tax display / city tax looks like a market price  → 税信号（可加强拆尺 / Hold 公开）
Public BAR                                      → 仍由 Pace / Remaining 定
Naive                                           → 「含税太贵 / 裸价才是尺 / 城市税当地板所以 BAR→399」
本卡                                            → 税展示/城市税包 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. Advise 默认：税展示 / 城市税包被允许改什么

用户原话：「裸价才是真 BAR」「含税太贵，BAR 改成 399」「城市税当地板」「税率脏了 ADR 砍 BAR」「Inclusive 勾了所以公开尺改完」「CITY_TAX Package 就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Tax Inclusive/Exclusive / CITY_TAX / Local Charges / 客人「含税总价感觉像房价」；
            ②拟议是「改尺 / 含税太贵所以跟 / ADR 被税看脏砍公开」还是「对齐税展示/过账、Hold 公开」；
            ③Pace / Remaining；这是税层还是要改公开尺。
  缺税率 / 华住含税 SOP / 开票税率 → 问，不编。

Diagnosis
  税展示/城市税包已经挂在税表/Package/Local Charges 之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 旗当尺 vs 强制费 vs 竞对 vs 套餐 vs 加床 vs 真弱）
    (2) 问句（§5）
    (3) 默认路径：Ahead → 拆税层 vs 公开 + Hold 公开 BAR；OTA 错配 → 对齐源税
    (4) 是否先拆 T-Fee 核 / P36 / P69 / P78 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住含税 SOP / 税率 Fact / 开票税率。
  **Ahead 夜：税展示/城市税包不被允许改公开 BAR。**

What To Watch
  公开 BAR 是否仍 Hold；税是否仍关在税表/CITY_TAX Package/Local Charges；OTA 源税是否对齐；24h 公开 Pickup vs 含税展示（分看）
  不是「Inclusive 勾完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P88。**

---

## 5. What To Watch / Need Verification

顾问要问的（ask-list · 全部 NV，本卡不代答）：

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **Tax Inclusive/Exclusive / City·Tourism tax 包过账**，还是要把 **公开 BAR 改成含税或裸价地板**？ | 混用尺；把税层当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与含税总价/裸价各是多少？OTA 源税是 Inclusive 还是 Exclusive？ | 会编税率；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA Tax Inclusive / CITY_TAX Package？是否 Cloudbeds 税配置？是否 Apaleo Local Charges？是否其实是强制费/all-in（→T-Fee）？ | 把配置写成「已成新 BAR」 | **NV** → 先拆税层，不编含税 SOP |
| 4 | 拟议是对齐展示/过账、Hold 公开，还是改写公开尺 / 含税太贵所以跟 / ADR 被税看脏砍公开？ | 误入本卡 / T-Fee / P36 | **NV** |
| 5 | 本店税率 / 华住含税 SOP / 开票税率怎么走？ | 发明华住 SOP；或把 Vendor % 当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是强制费/Resort/服务费（→T-Fee/P79 费核）；是不是竞对含税截图（→P36）；是不是含早（→P69）；是不是加床（→P78）；真 Behind leftover（→P05）。**税率 Fact、开票税率、华住含税 SOP、佣金%、699、Walk $：不编，问。**

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-TAX-01 | 本店税表 / 是否真有 Inclusive 旗 / CITY_TAX / Local Charges / OTA 源税对齐 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-TAX-02 | 本店税率 Fact / 开票税率 / 中国城市旅游税 Fact | **NV。** 税不是改尺令 |
| NV-TAX-03 | 399 来源（含税话术 / 裸价话术 / ADR 抱怨 / 竞对含税截图） | **NV。** 先 Hold 公开 BAR |
| NV-TAX-04 | Vendor % 例是否被误当店规 | **禁止采用为 China Fact。** |
| NV-P79-01… | P79 / T-Fee 已挂（华住费表 / 费 % / 税率） | 仍 NV |

Watch：公开 BAR 是否仍 Hold；税成交是否仍关在税表/包；OCC/ADR 是否被税桶读脏却想砍尺；OTA 源税是否对齐；误入 T-Fee/P36/P69/P78 是否已移交。

---

## 6. 边界：本卡 ≠ T-Fee ≠ T-Package ≠ T-Extra ≠ P36 ≠ P05

六边都在「看起来更贵/更低 / 销售要跟」附近，对象不同。塌成「反正都贵所以砍」会开错杠杆。

| | **本卡 T-Tax（税展示/城市税）** | **T-Fee/P79 费核** | **T-Package/P69** | **T-Extra/P78** | **P36** | **P05** |
| --- | --- | --- | --- | --- | --- | --- |
| 对象 | Inclusive/Exclusive / CITY_TAX 当地板 | Resort/强制服务费/all-in | 含早/套餐挂牌 | 加床/人数加项 | 竞对税/费口径不可比 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 公开 BAR vs 费层 | EP vs 套餐 | 公开 BAR vs 加项 | 可比口径 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；费留费表 | Hold **EP** | Hold；加项留预订 | 不跟不可比 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；裸价/含税当市价 | 把费当税展示专卡 | 把套餐当税改尺 | 把加床当税 | 把竞对截图当本店尺 | 一夜 −15%；把含税地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是税展示/城市税对齐，还是强制费/all-in，还是含早，还是加床，还是竞对口径，还是真弱？** 强制费/all-in 核心 → T-Fee/P79。竞对 → P36。含早 → P69。加床 → P78。真弱 leftover → P05。要把 Inclusive/CITY_TAX/裸价/含税叫 BAR / 要含税当地板 → 本卡；过程仍 **P79**。

假尺子一族（屏幕上的税/费工具被当成定价按钮）：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Fee** | 「OTA 总价贵 / ADR 被费看脏」 | 公开 BAR + Pace；费/all-in 不是 BAR |
| **本卡 T-Tax** | 「裸价才是真 BAR / 含税太贵 / 城市税当地板 / 税率脏了 ADR」 | **公开 BAR + Pace**；不是税展示当地板令，也不是 dump 399 令 |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Extra** | 「三人住太贵 / 加床拉高均价」 | 公开 BAR + Pace；加项不是 BAR |
| **T-Share / T-Parity / T-Corp / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Employee** | （各卡画面） | 公开 BAR + Pace |

与 **T-Fee / T-Package / T-Extra** 的边界：费是强制费层/展示加总；套餐是含早/打包挂牌；加床是预订人数加项。本卡是 **税 Inclusive/Exclusive 展示 + 城市/旅游税包过账**。对象不同，假尺子同族；**过程同走或交 P79 族**。

常见误读：

| 误读 | 实际 |
| --- | --- |
| 裸价才是公开 BAR | BAR = 无资格公开灵活。含税/裸价是展示口径 |
| 含税太贵所以 BAR→399 | 税地板 ≠ 战略尺。拒绝 |
| 城市税当地板 | CITY_TAX Package = 过账，不是 BAR Type |
| ADR 被税看脏所以 dump | 读桶 = READ；不是砍尺令 |
| Inclusive / CITY_TAX 配了所以公开尺改完 | 配置/过账过程 ≠ BAR Type |
| OTA 总额对不上所以砍公开 | 先对齐源税（Cloudbeds）；不是 rewrite |
| Vendor % 例就是我们税率 | Vendor 示意 **NOT China Fact** |
| 强制费也贵所以跟含税地板 | **T-Fee / P79 费核** |
| 含早也贵所以跟含税地板 | **P69 / T-Package** |
| 加床+税所以砍 | **P78 / T-Extra** |
| 隔壁含税截图更便宜所以跟 | **P36** |
| 反正空，按含税地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住含税 SOP 就能 Advise | **禁止。** 税率 / 开票税率 NV |
| 把本卡叫成 T-Fee / T-Package / T-Extra | **禁止。** 本卡 = **T-Tax** |

---

## 7. Simulation（诊断例，不是新店 Fact）

复用 P79 `cases/sim-2026-resort-fee-allin-sat.md`，**不是**另开一家酒店 / 另开 sim 文件。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
Tax Inclusive / CITY_TAX     = 使含税总价看起来「更贵」（不是新 BAR；税层 Simulation）
销售拟议                     = 「裸价才是真 BAR / 含税太贵 / 城市税当地板 / 税率脏了 ADR」砍 BAR 到 399
```

读法（与 P79 同句族）：399 是被拒绝的税展示/城市税改尺，不是 BAR。Advise：拆公开 vs 税层；**Hold 779–799 首选 799**；拒 dump **399**；税留在税表/包；税率 **NV**。不要用 Vendor % 例当 sim 数字或店规。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/税率默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 8. 证据（2026-09-02 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Inclusive vs Exclusive 改计算与展示；OTA 源错配→双计/漏计 | **A Vendor PMS** | **Known 展示/过账对齐 ≠ rewrite** | Cloudbeds Taxes and Fees（**§111/§112 升核**） |
| Tax (Generate) Inclusive 勾选=价表含税；不勾=税另过账 | **A Vendor PMS** | **Known 含税旗 ≠ BAR Type** | OPERA Rate Codes（**§111/§112 升核**） |
| CITY_TAX 公式挂 Package；Included / Separate / Combined | **A Vendor PMS** | **Known 城市税包 ≠ BAR Type** | OPERA City Tax Package（**§111/§112 升核**） |
| Apaleo Local Charges：Included in the rate 或 on top | **A Vendor PMS** | **Known 本地税配置 ≠ BAR** | Apaleo Distribution Local Charges（**§112 新开**） |
| Apaleo 仅一活跃 city tax；按预订创建时配置 | **A Vendor PMS** | **Known 配置时点 ≠ 改尺** | Apaleo City Tax Management（**§112 同族**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§111/§112**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P79 + Pace 闸 | — |
| 本店税率 / 华住含税 SOP / 开票税率 / 中国城市旅游税 Fact / Vendor % China Fact | — | **NV。不编。** | — |
| Mews taxes help / 先前猜测 Apaleo Taxes URL | — | **FAIL**（404 或 SPA 壳） | 见 §112 |

本小时新开：Apaleo *Distribution: Local Charges*（第三人 Vendor：Included in the rate / on top ≠ BAR）。同族：Apaleo *City Tax Management*。升核/复核：Cloudbeds Taxes + OPERA Tax Inclusive + OPERA City Tax Package + HSMAI BAR。Mews / 错误猜测 Apaleo Taxes URL **FAIL 不当核**。华住含税 SOP **未开、不编**。**不规定 P88。不规定 P89。**

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-02 08:17 CST | 首版。T-Tax = Tax Inclusive/Exclusive 展示 + City/Tourism tax 包过账，不是公开 BAR。**≠ T-Fee ≠ T-Package ≠ T-Extra**。三把尺；Cloudbeds Inclusive/Exclusive + OPERA Tax Inclusive + CITY_TAX Package + Apaleo Local Charges ≠ 定价权；六形 A–F 映射 P79；P36/P69/P78/P05 孪生；假尺子一族。**不写 P88。** 14/399/799 Simulation only。399 = 被拒绝的 dump。过程仍 P79。 |
| 2026-09-02 10:17 CST | 配套 Simulation 指针：新开 `cases/sim-2026-tax-display-city-tax-sat.md`（C02-10）；sibling 仍 all-in sim。正文三句 / 399 / 799 / 过程 P79 **不改**。不开 P88。 |
| 2026-09-02 12:17 CST | R02-12 源指针：§114 新开 protel City Taxes（Logis inclusive/exclusive/split）+ Clock City Tax Mode（Extra Separate / Included Joint / Included Separate）。正文三句 / 399 / 799 / 过程 P79 **不改**。不开 P88。 |

---

## 10. 交叉（不改 P01–P87 正文；P79 仅头一行 + 修订行，邻卡仅文末一行）

- **P79** `advisor-playbooks/resort-fee-service-charge-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么税展示/城市税」与 Diagnose 尺**，三句同一套（税措辞）。399-rejected / 799-Hypothesis **不改**。
- **T-Fee** `theory/resort-fee-vs-bar.md`：强制费/all-in 兄弟卡。本卡 = 税展示/城市税专精；过程仍 P79。
- **主卡** `recommendations/dont-rewrite-bar-for-resort-fee.md`：复用，不重写。
- **轻指标** `metrics/resort-fee-vs-public-bar.md`：公开 BAR vs all-in/费/税层 gap；无税率 Fact。本卡不重写公式。
- **P36**：竞对比价税/费口径。本卡 / P79 = 要把本店公开尺写成/跟到含税或裸价地板。
- **P69 / T-Package**：含早/套餐。邻「套餐挂牌」，不是税层。
- **P78 / T-Extra**：加床加项。邻「该笔加项」，不是税展示。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正税层≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Employee / T-Extra**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P88。禁止编华住含税 SOP、税率 Fact、开票税率、佣金%、699、Walk $。禁止把 Vendor % 例当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advise。禁止造 systems/*.md。禁止把 T-Tax 叫成 T-Fee / T-Package / T-Extra。**

> 指针（2026-09-02 12:17，不改正文）：§114 protel City Taxes + Clock City Tax Mode 加强「展示/过账对齐 ≠ rewrite」。Diagnose 仍本卡，过程仍 P79。三句 / 399 / 799 **不改**。不规定 P88。
