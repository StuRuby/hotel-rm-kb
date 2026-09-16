# Extra Person / 加床 vs Public BAR｜加床/Extra Adult·Child/Occupant Threshold 是预订加项，不是公开 BAR

> 资产：T-Extra / T01-16（加床/第三人加项被允许改什么）· **≠ T-Fee**（`theory/resort-fee-vs-bar.md` = P79 强制费/all-in）· **≠ T-Package**（`theory/package-vs-ep-bar.md` = P69 含早套餐）· T-Employee / T-Service-Recovery / T-Deposit 同族（尺子 ≠ 按钮）
> 路径：`theory/extra-person-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-01
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Configuring Daily Rates Pricing Schedule*：Extra Adult / Extra Child **加到该笔预订** — **§76/§78 指针 / §109 升核**；加项 ≠ BAR Type）；A Vendor PMS（OPERA Cloud 26.2 *About Occupant Threshold Pricing*：超成人/儿童/总人数阈值加固定额 — **§76/§78 / §109 升核**；Vendor $ 例不进 Fact）；A Vendor PMS（OPERA Controls Rate Management：BASE RATE EXTRA PERSON CALCULATION / OCCUPANT THRESHOLD PRICING METHOD / CHILD RATES BY DEFINED BUCKETS — **§76/§78 / §109 升核**；开关 ≠ BAR Type）；A Vendor PMS（Cloudbeds *Base Rates — How to Add Extra Person Fees*：超出 included occupancy 的加项；只进直销/BE；OTA 须在渠道 extranet 另配 — **§108 指针 / §109 升核**；加项 FEE ≠ public BAR rewrite）；A Vendor PMS（Apaleo *Setting up Rate Plans*：surcharges 加在 **单人 base** 之上；绝对额或百分比 — **§109 新开**；第三人 Vendor；Vendor € 例不进 Fact）；A Vendor PMS（Apaleo *Setting Prices*：录入价 = single occupancy；额外人数按 rate plan surcharges 算 — **§109 同族**）；A Vendor PMS（Apaleo *Age Categories (Children Prices)*：儿童 surcharge 按年龄桶加在 base 上 — **§109 同族**）；A Vendor PMS（HotelKey *Charge Types .ng*：Extra Adult Price / Extra Child Price 可配在 charge type — **§109 打开作补核**；过账单价 ≠ BAR Type）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §109 升核**）；C 实践（HFP Net USALI P&L：Other Rooms Revenue 含 rollaway beds / cribs → 影响 ADR — **§78 指针 / §109 升核**；非官方 USALI 原文）；A 协会（STR Historical：Rollaway bed/Crib rental ∈ Rooms Include — **§79 指针 / §109 升核**；ADR 读法 ≠ 砍尺令）
> 配套：`advisor-playbooks/extra-person-vs-bar.md`（P78 过程）· `recommendations/dont-rewrite-bar-for-extra-person.md`（主卡复用，不重写）· `metrics/extra-person-vs-public-bar.md`（轻指标；**无默认 Extra Person % / 儿童费 Fact**，公式不重写）· `cases/sim-2026-extra-person-sat.md`（Simulation）
> 交叉：P69 含早/套餐 ≠ 本卡「加床/第三人加项写成新公开 BAR」· P76 连住促销均价 · P79/T-Fee 强制费/all-in · P82 停车费 · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：§85「加床/Extra Person/Occupant Threshold 不是公开 BAR」（过程路由已够；本卡给「为什么 Extra Adult/Child / Occupant Threshold / Cloudbeds extra person fee / Apaleo occupancy surcharge 不是公开 BAR、加项配置屏不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / Extra Adult 表 / Occupant Threshold，不自动改价，不代改加项表。**
> 状态：**理论 drafted**（2026-09-01 16:17 CST）。**不写 P88，不写新剧本，不开 Pet/AAA。** Extra Person leftover **已关为 P78**（2026-08-30 02:17），本卡只加深 WHY。禁止：编华住儿童/加床 SOP / 默认 Extra Person % / 儿童费 Fact / 699 / Walk $；一夜 −15%；BAR→399「三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR 砍 BAR / 人数阈值表就是公开价」；把 14/399/799 当市场 Fact；把 OPERA/Cloudbeds/Apaleo Vendor $·€ 例当中国 Fact；重写 `extra-person-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P87 正文（P78 仅头一行理论指针 + 修订行；邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Fee / T-Package**；造 systems/*.md。

---

## 0. 一句话

**Extra Person / Extra Adult·Child / Occupant Threshold / 加床/加婴儿床是挂在该笔预订（或 included occupancy 之上）的加项，不是公开灵活 BAR。**
厂商能把 Extra Adult / Extra Child 钉进 Daily Rates 日价表、能按 Occupant Threshold 超阈值加固定额、能开 BASE RATE EXTRA PERSON / OCCUPANT THRESHOLD Controls、能在 Cloudbeds 配超出 included occupancy 的 extra person fee（只进直销/BE）、能在 Apaleo 把 surcharge 加在单人 base 上、能在 HotelKey Charge Type 配 Extra Adult/Child 单价——只证明「有加项/人数层过程」，不证明「公开灵活价该写成三人价/加床地板」。协会能把 BAR 钉成 non-qualified publicly available、能把 rollaway/crib 放进 Rooms / Other Rooms 读 ADR——只证明「公开尺定义」与「加床类收入可进房收的指标读法」，不证明「加床污染 ADR = 砍 BAR 令」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「三人住太贵 / 加床拉高了均价 / 儿童加床污染 ADR / 人数阈值表就是公开价」把 BAR 改写成 399。含早套餐 → **P69**。连住促销均价 → **P76**。强制费/all-in → **P79**。停车 → **P82**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店加床/儿童 SOP / 华住字段 / 默认 Extra Person % / 儿童费 Fact = **全部 NV**。加床 leftover **已关**。Pet/AAA 仍停车。

```
Naive（禁止）     三人价就是我们的公开价；加床太贵所以 BAR 砍 399；
                  儿童加床把 ADR 搞脏所以 dump；人数阈值表就是公开价表
本卡              先拆三把尺（公开 BAR / Extra Person·加床加项 / Guest-seen「三人总价感觉像房价」或 ADR 被加床读脏）。
                  OPERA Extra Adult/Threshold + Cloudbeds extra person fee + Apaleo surcharge ≠ 定价权。过程走 P78。
```

完成标准：用户说「三人住太贵改 BAR」「加床拉高均价所以跟」「儿童加床污染 ADR 砍 BAR」「人数阈值表就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是加项还是要改公开**；Diagnosis 写成加床加项不是公开 BAR、配置屏/阈值表不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、加项是否仍关在该笔预订/价码表、Extra Person%/儿童费是否仍 NV。**不 dump 399、不把三人地板写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 P78 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是 Extra Person / Extra Adult·Child / Occupant Threshold / 加床加项（加到该笔预订），还是公开灵活 BAR。加床加项 ≠ 公开尺。本店加床/儿童 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「三人住太贵 / 加床拉高均价 / 儿童加床污染 ADR」。
3. 含早套餐走 P69。连住促销均价走 P76。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从加项改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**Extra Person / 加床加项回答的是「这张预订超出 included occupancy 怎么加价、Occupant Threshold 超了加多少、ADR 有没有被加床桶读脏」，不是「今晚公开灵活该卖多少」。** 它回答「第三人/加床加多少」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把三人/加床地板写成新 BAR。禁止编默认 Extra Person %。禁止编儿童费 Fact。禁止编华住加床 SOP。禁止编 699。禁止编 Walk $。禁止把 OPERA/Cloudbeds/Apaleo Vendor $·€ 例当中国 Fact。**

---

## 1. 三把尺：公开 BAR / Extra Person·加床加项 / Guest-seen「三人总价」或 ADR 被加床读脏

顾问问题不是「系统里有没有一个 Extra Adult / Threshold / extra person fee 屏」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成三人/加床地板；砍到「三人太贵所以改尺」 |
| **Extra Person·加床加项** | OPERA Extra Adult/Child；Occupant Threshold 超阈值固定额；Cloudbeds extra person fee；Apaleo occupancy surcharge；加床/加婴儿床 | 可留在该笔预订/价码日程；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen「三人总价」或 ADR 被加床读脏** | 客人看到的「三人住总价」；或 ADR 因 rollaway/crib 进房收显得怪 | 窗/指标层 → 分看；诊断：总价 ≠ 已成新 BAR；ADR 怪 = READ | 把「三人总价/ADR 怪」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Extra_person_addon       = 加项额或「三人总价 − 双人」  # Simulation：加到该笔预订（不是新 BAR）
Guest_seen_or_ADR_dirty  = 「三人总价好像房价」或 ADR 被加床抬高  # Simulation：展示层 / 指标读法
Gap                      = 三人总价 − Public_BAR   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | extra-person / occupant-threshold / rollaway add-on | guest-seen three-person total | ADR-read
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国加床默认。OPERA / Cloudbeds / Apaleo Vendor 金额例 = **Vendor 示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **加项层**：把「三人总价看起来贵」读成「我们 BAR 就是 399」，或把「加床抬高了均价」读成「公开栏必须 dump」，或把 Occupant Threshold / Extra Adult 表混成公开价表。

HSMAI BAR（A，§67/§109）：BAR = **the non-qualified, publicly available rate**。**方向采用：Extra Person / 三人加项不是 BAR。**

---

## 2. Daily Rates / Occupant Threshold / Controls / Cloudbeds fee / Apaleo surcharge 是过程，不是定价权

厂商把「加床/第三人」做成**价码日价表加项 + 人数阈值固定额 + Controls 开关 + 直销/BE 加项 FEE + occupancy surcharge**。没有一家被打开的官方页把它写成「三人价默认等于 BAR」或「加床太贵就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Daily Rates Pricing Schedule*（§76/§78/§109） | Extra Adult = 超过两成人时 **加到该笔预订**；Extra Child = 有成人陪同的儿童加项 **加到该笔预订** | **加项加到预订。** ≠ BAR Type。Vendor $ 例 **不进中国 Fact** |
| OPERA Cloud 26.2 *About Occupant Threshold Pricing*（§76/§78/§109） | 超成人/儿童/总人数阈值后，按定义 **加固定额**（可组合）。Base Rate Extra Person Calculation 开时，阈值额对 Base Rates 另有规则 | **仍是加项计算，不是改公开尺。** Vendor $ 例不进 Fact |
| OPERA Controls *Rate Management*（§76/§78/§109） | `BASE RATE EXTRA PERSON CALCULATION`、`OCCUPANT THRESHOLD PRICING METHOD`、`CHILD RATES BY DEFINED BUCKETS` | **功能开关 ≠ BAR Type；儿童年龄桶 ≠ 公开灵活尺** |
| Cloudbeds *Base Rates — Extra Person Fees*（§108/§109） | Extra person fee = 超出 included occupancy 的加项；**只进直销/BE**；OTA 须在渠道 extranet 另配 | **加项 FEE ≠ public BAR rewrite**；渠道另配仍是加项层 |
| Apaleo *Setting up Rate Plans*（§109 **新开**） | occupancy >1 须配 **surcharges**（绝对额或 %）；surcharge **加在单人 base 之上** | **人数加价过程 ≠ BAR Type。** Vendor € 例不进 Fact |
| Apaleo *Setting Prices*（§109 同族） | 录入价 = **single occupancy**；额外人数按 rate plan surcharges 自动算 | **base 录入 ≠ 三人公开尺** |
| Apaleo *Age Categories*（§109 同族） | 儿童须有成人陪同；按年龄桶加 surcharge | **儿童加项过程 ≠ 砍公开 BAR** |
| HotelKey *Charge Types .ng*（§109 补核） | Extra Adult Price / Extra Child Price 可配在 charge type 默认单价 | **过账单价配置 ≠ BAR Type** |
| HSMAI Academy *BAR*（§67/§109） | BAR = non-qualified, publicly available | 加床/三人加项 **不是 BAR** |
| HFP Net *USALI P&L*（§78/§109） | Other Rooms Revenue 常含 **rollaway beds / cribs** → 进 Total Rooms Revenue 影响 ADR | **指标读法。** 不是砍尺许可证。非官方 USALI 原文 |
| STR *Historical Benchmarking*（§79/§109） | Rooms Include：**Rollaway bed/Crib rental** | **加床出租可进上报房收 = ADR READ，≠ rewrite** |

```
画面：三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR / 销售说「人数阈值表就是公开价」
Naive：BAR 就是那个三人价；能配 Extra Adult / Threshold / fee / surcharge 所以改尺
本卡：Extra Adult、Threshold、Controls、Cloudbeds fee、Apaleo surcharge 都是过程。定价权在公开 BAR + Pace，不在加项按钮。
```

```
OPERA Daily Rates Extra Adult / Extra Child  → 加到该笔预订
OPERA Occupant Threshold                     → 超阈值固定额
OPERA Controls EXTRA PERSON / THRESHOLD      → 功能开关
Cloudbeds extra person fee                   → 直销/BE 加项（OTA 另配）
Apaleo surcharge on single-occupancy base    → 人数加价过程
HotelKey Extra Adult/Child Price             → charge type 单价
STR / HFP rollaway·crib                      → ADR 读法（形 C）
Public BAR                                   → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住加床/儿童 SOP / 本店默认 Extra Person % / 儿童费 Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/Cloudbeds/Apaleo/HotelKey 的，不是本店报表名。不把 Vendor $·€ 例写成店规。

---

## 3. 六形（A–F）映射 P78：加床信号不是改写公开 BAR 的许可证

过程六形走 **P78**，本卡给 WHY，**不重复 P78 正文**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P78） |
| --- | --- | --- | --- |
| **A 加项 = 公开 BAR** | 「三人价就是我们的公开价」 | 用 Extra Adult / 加床当尺 | **拆加项 vs 公开**；Hold 公开 BAR |
| **B BAR→399「加床/三人太贵」** | 「客人嫌三人贵，BAR 改 399」 | 把加项地板写成战略尺 | **拒绝 BAR→399** |
| **C 加项进房收 → ADR/OCC 看起来怪 → dump BAR** | 「ADR 被加床污染了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看房价 vs 加项**；HFP/STR：rollaway/crib 可进房收 = READ |
| **D 误入套餐/连住均价/费/停车/真弱** | 「含早+加床 / 连住三人 / 含费 / 含停 / 反正空」 | 对象是别的剧本 | **P69** / **P76** / **P79** / **P82** / **P05** |
| **E Occupant Threshold / Extra Adult 表当 BAR Type** | 「人数阈值表就是公开价表」 | 把加项日程当成 BAR | **阈值/加项 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按三人地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 三人总价看起来更贵 | 需求仍强；公开尺 **Hold**；加项留在该笔预订 | 「市场认三人地板，BAR 改 399」 |
| 加床抬高均价、公开 BAR 也动 | 加项进房收 ≠ 必须砍公开尺；公开仍 Pace 闸 | 用「均价被加床拉高」证明必须 dump |
| ADR 因 rollaway/crib 显得怪 | **形 C**：读桶；分看公开 vs 加项 | 「已经看脏了所以砍 BAR」 |
| Extra Adult / Threshold / Cloudbeds fee 还能配 | **形 E**：配置/加项 ≠ BAR Type | 「屏/表/fee 就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从加项地板改写 BAR | 一夜 −15%；把三人地板永久化 |

```
Extra-person looks like a market price  → 加项信号（可加强拆尺 / Hold 公开）
Public BAR                              → 仍由 Pace / Remaining 定
Naive                                   → 「三人太贵 / 加床拉高所以 BAR→399」
本卡                                    → 加床加项 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. Advise 默认：加床加项被允许改什么

用户原话：「三人住太贵，BAR 改成 399」「加床拉高了均价所以公开价也得降」「儿童加床把 ADR 搞脏了砍 BAR」「人数阈值表就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Extra Adult/Child / Occupant Threshold / 加床加项 / 客人「三人总价感觉像房价」；
            ②拟议是「改尺 / 加床太贵所以跟 / ADR 被加床看脏砍公开」还是「加项留在该笔预订、Hold 公开」；
            ③Pace / Remaining；这是加项层还是要改公开尺。
  缺 Extra Person% / 儿童费 / 本店加床 SOP → 问，不编华住字段。

Diagnosis
  加床加项已经挂在该笔预订/价码日程之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 表当尺 vs 套餐 vs 连住 vs 费 vs 停车 vs 真弱）
    (2) 问句（§5）
    (3) 默认路径：Ahead → 拆加项 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P69 / P76 / P79 / P82 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住加床 SOP / 默认 Extra Person % / 儿童费 Fact。
  **Ahead 夜：加床加项不被允许改公开 BAR。**

What To Watch
  公开 BAR 是否仍 Hold；加项是否仍关在价码/阈值表/该笔预订；24h 公开 Pickup vs 含 Extra Person 的预订（分看）
  不是「Threshold 表改完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P88。**

---

## 5. What To Watch / Need Verification

顾问要问的（ask-list · 全部 NV，本卡不代答）：

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **Extra Person / Extra Adult·Child / Occupant Threshold / 加床加项**，还是要把 **公开 BAR 改成三人地板**？ | 混用尺；把加项当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与三人总价/加床后总价各是多少？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA Extra Adult / Threshold？是否 Cloudbeds extra person fee？是否其实是含早（→P69）/ 连住均价（P76）？ | 把配置/加项写成「已成新 BAR」 | **NV** → 先拆加项，不编加床 SOP |
| 4 | 拟议是加项留在该笔预订、Hold 公开，还是改写公开尺 / 加床太贵所以跟 / ADR 被加床看脏砍公开？ | 误入本卡 / P69 / P76 | **NV** |
| 5 | 本店加床/儿童 SOP / 华住字段 / 默认 Extra Person % / 儿童费怎么走？ | 发明华住 SOP；或把 Vendor $ 例当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是含早套餐（→P69）；是不是连住促销均价（→P76）；是不是强制费/all-in（→P79）；是不是停车（→P82）；真 Behind leftover（→P05）。**Extra Person %、儿童费 Fact、佣金%、699、Walk $、华住加床 SOP：不编，问。**

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-XP-01 | 本店加床/儿童 SOP / 是否真有 OPERA Extra Adult / Threshold / Cloudbeds fee / Apaleo surcharge | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-XP-02 | 本店默认 Extra Person % / 儿童费 Fact / 佣金% | **NV。** 加项不是改尺令 |
| NV-XP-03 | 399 来源（三人话术 / ADR 抱怨 / 「加床拉高均价」） | **NV。** 先 Hold 公开 BAR |
| NV-XP-04 | Vendor $·€ 例是否被误当店规 | **禁止采用为 China Fact。** |
| NV-P78-01… | P78 已挂（华住加床 / 默认 Extra Person % / 儿童费） | 仍 NV |

Watch：公开 BAR 是否仍 Hold；加项成交是否仍关在该笔预订；OCC/ADR 是否被加床桶读脏却想砍尺；误入 P69/P76/P79/P82 是否已移交。

---

## 6. 边界：本卡 ≠ P69/T-Package ≠ P76 ≠ P79/T-Fee ≠ P82 ≠ P05 ≠ 假尺子同族

六边都在「看起来更贵/更低 / 销售要跟」附近，对象不同。塌成「反正都贵所以砍」会开错杠杆。

| | **P78 / 本卡（重置公开尺=加床/三人地板）** | **P69/T-Package（含早）** | **P76（连住均价）** | **P79/T-Fee（费）** | **P82（停车）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到 Extra Person / 三人总价 | 含早/套餐挂牌 | 连住促销摊平单晚 | 强制费/all-in | 停车/valet | 真 Behind leftover |
| 尺 | 公开 **BAR** | EP vs 套餐 | 公开单晚 vs 促销均价 | 公开 BAR vs 费层 | 公开 BAR vs 停车层 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold **EP** | Hold | Hold；费留费表 | Hold；停车留过账 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；三人价当市价 | 把套餐当加床改尺 | 把连住均价当加床改尺 | 把费当加床加项 | 把停车当加床 | 一夜 −15%；把三人地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是含早，还是连住均价，还是费，还是停车，还是真弱？** 含早 → P69。连住 → P76。费/all-in → P79。停车 → P82。真弱 leftover → P05。要把 Extra Person / 加床 / 人数阈值叫 BAR / 要三人当地板 / Threshold 屏所以跟 → 本卡 / P78。

**命名钉死：T-Extra = 加床/Extra Person 加项；T-Fee = P79 强制费/all-in；T-Package = P69 含早套餐。不要混叫。**

假尺子一族（屏幕上的加项/资格/费工具被当成定价按钮）：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **T-Live** | 「直播间 399 / 主播价」 | 公开 BAR + Pace；橱窗不是尺 |
| **T-Fee** | 「OTA 总价贵 / ADR 被费看脏」 | 公开 BAR + Pace；费/税/all-in 不是 BAR |
| **T-Wholesale** | 「批发价才是市场价」 | 公开 BAR + Pace；渠道净不是 BAR |
| **T-Stored** | 「储值才是市场价」 | 公开 BAR + Pace；付款/负债不是 BAR |
| **T-Hurdle** | 「门槛价才是市场价」 | 公开 BAR + Pace；可售门不是 BAR |
| **T-Deposit** | 「押金才是市场价」 | 公开 BAR + Pace；付款/hold 不是 BAR |
| **T-Service-Recovery** | 「服务失败所以砍 / 补了差价所以新尺」 | 公开 BAR + Pace；folio 补偿不是 BAR |
| **T-Employee** | 「员工价就是市场价 / STAFF 屏就是公开价」 | 公开 BAR + Pace；资格码不是 BAR |
| **本卡 T-Extra** | 「三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR 砍 BAR / 人数阈值表就是公开价」 | **公开 BAR + Pace**；不是加项当地板令，也不是 dump 399 令 |

与 **T-Fee / T-Package / T-Employee** 的边界：费是强制费层/展示加总；套餐是含早/打包挂牌；员工价是资格闸码。本卡是 **预订加项 / 超 included occupancy / Occupant Threshold**。对象不同，假尺子同族。

常见误读：

| 误读 | 实际 |
| --- | --- |
| 三人价就是公开 BAR | BAR = 无资格公开灵活。加项是预订层 |
| 三人太贵所以 BAR→399 | 加项地板 ≠ 战略尺。拒绝 |
| 加床拉高均价所以砍公开 | 加项进房收 ≠ Brand.com 栅格 |
| ADR 被加床看脏所以 dump | 读桶 / HFP·STR rollaway = READ；不是砍尺令 |
| Occupant Threshold / Extra Adult 配了所以公开尺改完 | 配置/加项过程 ≠ BAR Type |
| Cloudbeds extra person fee 配了所以公开跟三人价 | 直销/BE 加项 ≠ 改写公开灵活 |
| Apaleo surcharge 就是公开 Rack | 单人 base + surcharge ≠ BAR Type |
| Vendor $·€ 例就是我们加床价 | Vendor 示意 **NOT China Fact** |
| 含早也贵所以跟三人地板 | **P69 / T-Package** |
| 连住三人算下来单晚才 399 | **P76** |
| 含费总价+三人所以砍 | **P79 / T-Fee** |
| 含停总价+三人所以砍 | **P82** |
| 员工价也低所以跟三人地板 | **P80 / T-Employee** |
| 反正空，按三人地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住加床 SOP 就能 Advise | **禁止。** 默认 Extra Person % / 儿童费 NV |
| 把本卡叫成 T-Fee / T-Package | **禁止。** T-Fee = 强制费；T-Package = 含早；本卡 = **T-Extra** |

---

## 7. Simulation（诊断例，不是新店 Fact）

复用 P78 `cases/sim-2026-extra-person-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
Extra Adult / 加床加项       = 使三人总价看起来「更贵」（不是新 BAR；加项 Simulation）
销售拟议                     = 「三人住太贵 / 加床拉高均价所以跟 / 儿童加床污染 ADR / 人数阈值表就是公开价」砍 BAR 到 399
```

读法（与 P78 同句）：399 是被拒绝的加床/三人价改尺，不是 BAR。Advise：拆公开 vs 加项；**Hold 779–799 首选 799**；拒 dump **399**；加项留在该笔预订；Extra Person % / 儿童费 **NV**。不要用 OPERA/Cloudbeds/Apaleo Vendor $·€ 例当 sim 数字或店规。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/加床默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 8. 证据（2026-09-01 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Extra Adult/Child 加到该笔预订 | **A Vendor PMS** | **Known 加项过程。** ≠ BAR Type | OPERA Daily Rates（**§76/§78/§109 升核**） |
| Occupant Threshold = 超阈值加固定额 | **A Vendor PMS** | **Known 加项计算 ≠ 改尺** | OPERA Occupant Threshold（**§76/§78/§109**） |
| Controls EXTRA PERSON / THRESHOLD = 开关 | **A Vendor PMS** | **Known 开关 ≠ BAR** | OPERA Controls Rate Management（**§76/§78/§109**） |
| Cloudbeds extra person fee 只进直销/BE；OTA 另配 | **A Vendor PMS** | **Known 加项 FEE ≠ rewrite** | Cloudbeds Extra Person Fees（**§108/§109 升核**） |
| Apaleo surcharge 加在单人 base 上 | **A Vendor PMS** | **Known 人数加价 ≠ BAR** | Apaleo Setting up Rate Plans（**§109 新开**） |
| Apaleo 录入价 = single occupancy | **A Vendor PMS** | **Known base ≠ 三人尺** | Apaleo Setting Prices（**§109 同族**） |
| Apaleo 儿童年龄桶 surcharge | **A Vendor PMS** | **Known 儿童加项过程** | Apaleo Age Categories（**§109 同族**） |
| HotelKey Extra Adult/Child Price on charge type | **A Vendor PMS** | **Known 过账单价 ≠ BAR** | HotelKey Charge Types（**§109 补核**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§109 升核**） |
| rollaway/cribs 可进 Other Rooms / Rooms Include → 影响 ADR | **C / A 协会** | **Known ADR READ ≠ rewrite** | HFP Net（§78/**§109**）+ STR Historical（§79/**§109**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P78 + Pace 闸 | — |
| 本店加床/儿童 SOP / 华住字段 / 默认 Extra Person % / 儿童费 Fact / Vendor $ China Fact | — | **NV。不编。** | — |
| Mews Extra occupancy adjustment 帮助页 | — | **FAIL**（HTTP 200 但是 SPA「Knowledge Base」壳，无真实 help 正文） | help.mews.com bed-adjustments… |

本小时新开：Apaleo *Setting up Rate Plans*（第三人 Vendor：surcharge on single-occupancy base ≠ BAR）。同族：Apaleo Setting Prices + Age Categories。补核：HotelKey Charge Types Extra Adult/Child Price。升核/复核：OPERA Daily Rates Extra Adult/Child + Occupant Threshold + Controls + Cloudbeds Extra Person Fees + HSMAI BAR + HFP Net + STR rollaway/crib。Mews **FAIL 不当核**。华住加床 SOP **未开、不编**。**不规定 P88。**

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-01 16:17 CST | 首版。T-Extra = Extra Person/加床/Occupant Threshold 是预订加项，不是公开 BAR。**≠ T-Fee（P79）/ ≠ T-Package（P69）**。三把尺；OPERA Extra Adult/Threshold/Controls + Cloudbeds fee + Apaleo surcharge ≠ 定价权；六形 A–F 映射 P78；P69/P76/P79/P82/P05 孪生；假尺子一族。**不写 P88。** 14/399/799 Simulation only。399 = 被拒绝的 dump。加床 leftover 已关。 |

---

## 10. 交叉（不改 P01–P87 正文；P78 仅头一行 + 修订行，邻卡仅文末一行）

- **P78** `advisor-playbooks/extra-person-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-extra-person.md`：复用，不重写。
- **轻指标** `metrics/extra-person-vs-public-bar.md`：公开 BAR vs 加项 gap；无默认 Extra Person %。本卡不重写公式。
- **P69 / T-Package**：含早/套餐。本卡 / P78 = 要把公开尺写成/跟到加床/三人地板。
- **P76**：连住促销均价。邻「摊平单晚」，不是 Extra Person。
- **P79 / T-Fee**：强制费/all-in。邻「费层」，不是加床加项。
- **P82**：停车费。邻「停车过账」，不是加床。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正加床加项≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Employee**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P88。禁止编华住加床 SOP、默认 Extra Person %、儿童费 Fact、佣金%、699、Walk $。禁止把 Vendor $·€ 例当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advise。禁止造 systems/*.md。禁止把 T-Extra 叫成 T-Fee / T-Package。**

> 交叉指针（2026-09-02 04:17，不改正文）：§110 HotelKey Group Master By Occupancy·Extra Person Charge + protel Air Advanced pricing（age/cot **added to** room price）加强「人数加项 ≠ 公开 BAR」。正文 / 三句不改。不规定 P88。
