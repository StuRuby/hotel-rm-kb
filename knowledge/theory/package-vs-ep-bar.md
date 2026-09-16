# Package vs EP BAR｜套餐挂牌不是公开 BAR

> 资产：T-Package / T14 下一层（套餐/含早总价被允许改什么）· P36 竞对含早孪生 · P27 假打包孪生
> 路径：`theory/package-vs-ep-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-28
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA About BAR：BAR=某日某房型最低合格公开价模型 — **§60 指针**；OPERA Package Codes：allowance 的 Item Price 从 rate amount 扣减 → nett accommodation — **§60 指针**）；A Vendor PMS（OPERA Cloud 26.2 *Managing Reservation Packages*：从价码里排除套餐元素**不减预订房价**，只调内部拆分、客房收入按被排除 Item Price 回升 — **§61 新开**；Override Package Amount = **这一笔**改分摊/额度，不是改公开 BAR）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Distribution Attributes and Channel Rate Mapping*：Meal Plan = 渠道展示属性，可选 Breakfast/Lunch/Dinner — **§61 新开**；**餐食旗 ≠ BAR**）；C 实践（OnlineHotelier：BAR 起点常作 EP，CP/MAP 加在之上 — **§60 指针**；印卢%/60–80% **不进中国 Fact**）；C 实践（Peaqplus *BAR and the rate structure*：BAR 是锚；BAR + Breakfast 是**派生价**；RM 动 BAR，套餐跟着走 — **§61 新开**；EUR 14 / 0.82 **不进中国 Fact**）；C（Prostay：room-only 与 breakfast-included 分价码 — **§60 指针**；€ 价差不进 Fact）；B / Hypothesis（公开灵活尺用 EP；套餐挂牌 ≠ 新 BAR；Ahead Hold 779–799 首选 799；不要 BAR→399「含早地板」）
> 配套：`advisor-playbooks/package-breakfast-vs-bar.md`（P69 过程）· `recommendations/dont-cut-bar-for-package.md`（主卡复用，不重写）· `metrics/ep-vs-package-gap.md`（轻指标；**无默认加价 %**，公式不重写）· `cases/sim-2026-breakfast-package-sat.md`（Simulation）
> 交叉：P36 竞对含早截图不可比 ≠ 本店自己的套餐是不是 BAR · P27 盲盒/批发假打包 · P20 渠道净/佣金吃全额套餐 · P64 嵌套低档 · P18 促销 · P05 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Guar / T-Upsell / T-Staff / T-Reinstate / T-Late（假尺子一族）
> 问题树：§76「套餐/含早价不是公开 BAR」（过程路由已够；本卡给「为什么套餐总价不是公开 BAR、分摊/餐食旗不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 价码映射，不自动改价，不代配早餐 allowance，不代点 Override Package Amount。**
> 状态：**理论 drafted**（2026-08-28 16:17 CST）。**不写 P70，不写新剧本。** 禁止：编华住含早 SOP / 默认加价 ¥ / 佣金% / 699；一夜 −15%；BAR→399「含早所以地板」；把套餐总价写成新 BAR；把 14/399/799/899 当市场 Fact；把 Meal Plan 旗写成 BAR；把 Exclude package 写成已经砍了房价；把 Override Package Amount 写成改公开 BAR；重写 `ep-vs-package-gap.md` 公式；重写 P01–P69 正文（P69 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**含早 / 套餐挂牌是另一条价码（或派生层），不是公开 BAR。**
系统能把早餐 Item Price 从房价里扣出、能给渠道打上 Meal Plan 旗、能在这一笔上 Override 分摊，只证明「有分摊/展示按钮」，不证明「公开灵活价该砸到 399」或「套餐总价就是新 BAR」。高峰 / Pace Ahead：公开灵活尺用 **EP BAR Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「含早了所以房费可以地板」把 BAR dump 到 399，也不要把套餐 399 写成新 BAR。本店含早加价 / 华住字段 = **全部 NV**。

```
Naive（禁止）     BAR 就是含早那个价；含了早房费可以再砍；
                  套餐 399 当新 BAR；渠道打了含早旗所以 BAR 变了
本卡              先拆三把价（EP BAR / 套餐挂牌 / 分摊后住宿净额）。
                  分摊/餐食旗 ≠ 定价权。过程走 P69。
```

完成标准：用户说「BAR 是含早价再砍裸房」「套餐 399 当新 BAR」「含早所以房费地板」「CP 挂出去了所以 BAR 就是那个价」→ Situation 写成**三把价 + Pace/Remaining**；Diagnosis 写成套餐总价不是公开 BAR、分摊不是砍价令；What To Watch 写成 EP 是否仍 Hold、套餐是否被标成 BAR、加价是否仍 NV。**不 dump 399、不把套餐当新 BAR、不写 P70。**

顾问必须能直接说的三句（与 P69 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问是 EP/裸房公开 BAR，还是 CP/含早/套餐总价。套餐挂牌不是 BAR。本店含早加价 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 EP BAR Hold 779–799 首选 799（Hypothesis / Simulation）。不要 BAR→399「含早所以地板」，也不要把套餐 399 写成新 BAR。
3. 竞对含早截图走 P36。假打包走 P27。渠道净额走 P20。真弱走 P05，仍以 EP 为尺。
```

独立默认（本库 Hypothesis）：**套餐/含早挂牌回答不了「今晚公开灵活该卖多少」。** 它回答「这条价码还绑了什么餐/项目、挂牌总额是多少」。它**不**回答「公开 EP BAR 该砸到多少」。公开 EP BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把套餐写成新 BAR。禁止编默认加价 %。**

---

## 1. 三把价：EP BAR / 套餐挂牌 / 分摊后住宿净额

顾问问题不是「系统里能不能配含早」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **EP / public BAR** | 某日某房型最低合格公开灵活价（房-only 尺） | Ahead Hold；真弱才 P05（仍这把尺） | 当成含早总价；砍到「含早地板」 |
| **Package / CP shelf** | EP + 餐（及其他）的挂牌总价 / 独立价码 | 可留独立码；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Nett accommodation** | Include-in-Rate 时 rate − Σ Item Price | 诊断：挂牌总额 ≠ 全是房费 | 把净额当「所以房费可以地板」；顾问代改分摊 |

```
EP_BAR                 = 799     # Simulation：公开灵活裸房
Package_shelf          = 899     # Simulation：含双早挂牌
Nett_accommodation     = rate − Σ item_price   # OPERA Include-in-Rate；金额 NV
Gap                    = Package_shelf − EP_BAR   # 尺在 metric，不重写；不是必须加价指令
```

**799 / 899 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住含早默认。

混淆三把价会同时拧坏 **ADR 尺** 与 **公开价**：把「含双早 899」读成「我们 BAR 就是 899，还能再砍」，或把「分摊后住宿净额」读成「房费本来就该地板」。

Peaqplus（C，§61 **新开**）：BAR 是**锚**；BAR + Breakfast 是派生价（例：BAR + EUR 14）。RM 日常动的是 BAR，套餐跟着公式走。**方向采用：套餐从 BAR 派生，不是反过来砍 BAR。** EUR 14 / 非退 0.82 / 21 条价码 **不进中国 Fact，不进默认店规。**

OnlineHotelier（C，§60 指针）：BAR 起点常作 **EP**；CP/MAP/AP 加在 EP 之上。**60–80% / 印卢例不采用。**

---

## 2. 套餐过账 / 餐食旗是分摊与分销属性，不是定价权

厂商把「含早」做成**价码元素 + 渠道展示**过程。没有一家被打开的官方页把它写成「套餐总价默认等于 BAR」或「含了早就必须砍公开房费」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA About BAR（§60） | BAR = 某日某房型最低合格公开价模型（by Day / by LOS / Best BAR by Day） | **房型定价模型**。不是「含餐套餐总价 = BAR」 |
| OPERA Package Codes（§60） | allowance 元素的 Item Price 从 rate amount 扣减；多元素时 nett accommodation = rate − Σ item price | **挂牌总额可拆**。拆开 ≠ 许可证去砍公开 BAR |
| OPERA Cloud 26.2 *Managing Reservation Packages*（§61 **新开**） | 从价码里排除某元素：**不减预订房价**，只调内部拆分，客房收入按被排除 Item Price **回升**。Override Package Amount 改的是**这一笔** Price / Allowance | **排除 ≠ 砍房价。** Override = 单笔分摊，不是改公开 BAR，也不是新 BAR |
| OPERA Cloud 26.2 Channel Rate Mapping（§61 **新开**） | Meal Plan = 渠道 Distribution Attribute；可选 Breakfast / Lunch / Dinner | **展示旗**。渠道上打了含早 ≠ 公开 BAR 变了，≠ 必须 dump |
| Peaqplus BAR structure（§61 **新开**） | Packaged rates = BAR + breakfast + spa；BAR + Breakfast 是派生格 | **派生方向：BAR → 套餐。** 不是「套餐贵了所以 BAR 该地板」 |

```
画面：含早套餐挂 899 / 渠道旗写了 Breakfast / FO 改了这一笔 allowance
Naive：BAR 就是那个价；含早了所以房费可以 399
本卡：挂牌、旗、分摊都是包装。定价权在公开 EP + Pace，不在包装按钮。
```

```
Exclude package from rate code   → 房价不动，拆分改（客房收入回升）
Override Package Amount          → 这一笔 Item Price / Allowance
Meal Plan attribute              → 渠道展示
Public EP BAR                    → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 / 本店含早加价 / 分摊规则 = **NV，不编。** UI 字段是 OPERA 的，不是本店报表名。

---

## 3. 本店套餐 ≠ 竞对含早（P36）≠ 假打包（P27）

三边都在「包了什么」附近，对象不同。塌成「反正都是含早便宜」会开错杠杆。

| | **P69 / 本卡（本店套餐 vs 本店 BAR）** | **P36（竞对截图）** | **P27（盲盒/批发）** |
| --- | --- | --- | --- |
| 对象 | 我们自己的 EP vs CP/套餐挂牌 | 隔壁含早/登录/套房不可比 | 藏房费 / opaque / 批发假打包 |
| 尺 | 公开 **EP** | 先问同一口价 | 净贡献 + 是否漏进公开栏 |
| Ahead 默认 | **Hold EP** 779–799 首选 799 | Hold；不跟假 80 | 高峰关盲盒；不把假打包写成 BAR |
| 禁止 | 套餐当新 BAR；BAR→399 地板 | 不可比当必须跟 | 用盲盒价砍公开 BAR |

顾问第一闸永远是：**这是我们自己的价码分层，还是别人的截图，还是藏起来的批发？** 竞对含早 → P36。盲盒假打包 → P27。本店把套餐叫 BAR / 要砍地板 → 本卡 / P69。佣金吃全额套餐 → P20（仍不因此砍 EP）。

---

## 4. 假尺子一族：「含早了所以 BAR 可以地板」

本卡不是新怪现象，是同一族的下一张：**屏幕上的数被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Guar** | 放房前混合 OTB | 放房后真 remaining |
| **T-Upsell** | 「套房还空着」 | 付费差价 / 分型 Pace |
| **T-Staff** | 「做不完 / 只能做 N 间」 | 可交到达件数 + 门槛 |
| **T-Reinstate** | 「旧 599 写回来了」 | 当前可售 + Pace |
| **T-Late** | 「嫌 12 点走」 | 周转窗；过夜 BAR 仍 Hold |
| **本卡 T-Package** | 「含早 899 / 套餐 399 / 渠道打了 Breakfast」 | **公开 EP + Pace**；不是套餐当 BAR 令，也不是 dump 399 令 |

「含早了所以房费可以地板」= 把 **包装层（餐/项目）** 当成 **公开灵活价的下限**。尺子在套餐总额或分摊净额上，动作却打在 **今晚公开 EP** 上 → 同类误读。

「套餐 399 当新 BAR」是另一把假尺子：把**围栏/促销/低档包装**当成 Brand.com 必须对齐的市价。399 的来源先走 P36 / P27 / P64 / P18，不先砍公开 EP。

---

## 5. Diagnose → Advise：套餐总价被允许改什么

用户原话：「BAR 是含早价还能砍裸房」「套餐 399 含双早当新 BAR」「含早所以房费地板」「CP 挂出去了所以 BAR 就是那个价」。

```
Situation
  钉三件事：①用户说的「BAR」是 EP 还是 CP/套餐总价；
            ②拟议是「改尺 / 当新 BAR」还是「砍地板」；
            ③Pace / Remaining。
  缺含早加价 → 问，不编华住字段。

Diagnosis
  套餐/含早挂牌已经发生之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 套餐当新 BAR vs 地板砍房 vs 竞对截图 vs 假打包 vs 真弱）
    (2) 问句（§6）
    (3) 默认路径：Ahead → 拆 EP vs 套餐 + Hold 公开 EP
    (4) 是否先拆 P36 / P27 / P20 ——对象动作，不是砍 EP
  它不被允许改的是：BAR→399；套餐当新 BAR；一夜 −15%；发明华住含早 SOP。

What To Watch
  EP 是否仍 Hold；套餐是否被标成 BAR；24h EP Pickup；加价是否仍 NV
  不是「含早挂出去了就算改完 BAR」
```

过程六形（A 混用尺 / B 地板或套餐当新 BAR / C→P36 / D→P27 / E 真弱 P05 / F→P20）走 **P69**，本卡**不重复 P69 正文**。

Ahead 或仍紧 → **拆尺 + Hold EP**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是 EP。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P70。**

---

## 6. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的「BAR」是 **EP/裸房** 还是 **CP/含早/套餐总价**？ | 混用尺；把总额当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 **EP** 与 **套餐挂牌** 各是多少？本店含早加价怎么定？ | 会编默认 %；或把 899 当必须 | **NV** |
| 3 | 拟议是砍裸房、把套餐写成新 BAR，还是跟竞对含早截图？ | 误入 P36 / 本卡 | **NV** |
| 4 | 渠道 Meal Plan 旗打了 Breakfast，还是价码本身变了？ | 把展示旗写成改 BAR | **NV** |
| 5 | 399 从哪来——套餐促销、嵌套低档、错映射，还是盲盒？ | 用公开 EP 去安抚假 399 | **NV** → P64/P60/P27 |

补充可问（同样 NV）：佣金是否抽含餐全额（→P20）；华住字段名；是否只有含早、无 EP 码。**无 EP 码时问「公开灵活最低合格价是哪个码」，仍不把地板当 BAR。加价%、佣金%、699、华住含早 SOP：不编，问。**

---

## 7. 常见误读

| 误读 | 实际 |
| --- | --- |
| BAR 就是含早那个挂牌 | BAR 是最低合格公开灵活模型；实践尺用 EP。套餐是另一层 |
| 含了早，房费可以地板 | 餐是贡献层。用餐安抚砍房 = 双重让利 |
| 套餐 399 当新 BAR | 399 是围栏/促销/低档，不是公开灵活 |
| 渠道打了 Breakfast 旗 = BAR 变了 | Meal Plan 是展示属性，不是定价权 |
| FO 排除了早餐 = 已经降价 | OPERA：排除不减预订房价，只改拆分 |
| Override Package Amount = 改公开 BAR | 单笔分摊/额度，不是日历夜公开价 |
| 分摊后住宿净额低 → 该 dump | 净额是会计拆分，不是需求死了 |
| 隔壁含早便宜 80 → 我们 BAR 贵了 | **P36**。先问同一口价 |
| 打包价很低所以公开 BAR 也该低 | 假打包走 **P27** |
| OTA 抽了含餐全款所以砍挂牌 | **P20**。不是砍 EP 的许可证 |
| 派生套餐贵了所以倒过来砍 BAR | 派生方向是 BAR → 套餐，不是反砍锚 |
| 没有行业加价 % 就不能管 | 无默认 %。先拆尺 + Hold EP |
| 编一套华住含早 SOP 就能 Advise | **禁止。** 加价 NV |

---

## 8. Simulation（诊断例，不是新店 Fact）

复用 P69 `cases/sim-2026-breakfast-package-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799 / 899
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation EP；899 = 套餐挂牌，不是新 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 EP BAR                  = 799
含双早套餐挂牌               = 899
销售拟议                     = 「含早所以房费地板」砍 EP 到 399；或把套餐 399 写成新 BAR
```

读法（与 P69 同句）：899 是套餐挂牌，不是 BAR。399 是地板/假新 BAR，不是公开灵活。Advise：拆 EP vs 套餐；**Hold 779–799 首选 799**；拒 dump **399**；拒把 899/399 写成新 BAR；加价 **NV**。
**180 / 14 / 399 / 799 / 899 只允许出现在 Simulation**，不是行情 Fact，不是华住含早默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。899 是套餐挂牌 Simulation，不是新 BAR。**

---

## 9. 证据（2026-08-28 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| BAR = 某日某房型最低合格公开价模型 | **A Vendor PMS** | **Known 模型。** ≠ 含餐总价默认名 | OPERA About BAR（**§60 指针**） |
| allowance Item Price 从房价扣减 → nett accommodation | **A Vendor PMS** | **Known 分摊。** 挂牌 ≠ 全是房费 | OPERA Package Codes（**§60 指针**） |
| 排除价码内套餐元素不减预订房价；只调拆分、客房收入按 Item Price 回升 | **A Vendor PMS** | **Known 机制。** 排除 ≠ 砍 BAR | OPERA Cloud 26.2 Managing Reservation Packages（**§61 新开**） |
| Override Package Amount 改这一笔 Price / Allowance | **A Vendor PMS** | **Known 单笔权限。** ≠ 改公开 BAR | 同页（**§61**） |
| Meal Plan = 渠道展示属性（Breakfast/Lunch/Dinner） | **A Vendor PMS** | **Known 分销旗。** ≠ BAR | OPERA Cloud 26.2 Channel Rate Mapping（**§61 新开**） |
| BAR 起点常作 EP；CP/MAP 加在之上 | **C 实践** | 方向 Known。**比例不采用** | OnlineHotelier（**§60 指针**） |
| BAR 是锚；BAR + Breakfast 是派生价 | **C 实践** | 方向 Known。**EUR 格不采用** | Peaqplus BAR and the rate structure（**§61 新开**） |
| room-only 与 breakfast-included 分价码 | **C** | 方向 Known。**€ 差不采用** | Prostay Breakfast Guide 2026（**§60 指针**） |
| Ahead Hold EP；套餐≠新 BAR；拒 399 地板 | **B / Hypothesis** | 本库 P69 + Pace 闸 | — |
| 本店含早加价 / 华住字段 / 佣金% / 是否只有含早码 | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 Managing Reservation Packages + OPERA Cloud 26.2 Configuring Distribution Attributes and Channel Rate Mapping + Peaqplus *The basic pricing logic: BAR and the rate structure*。§60 四页复用，不重锤。华住 SOP **未开、不编**。UMass / Finoko 仍 timeout，不当核页。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-PKG-01 | 本店含早加价 / 分摊规则 / 是否只有含早、无 EP | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-PKG-02 | 渠道 Meal Plan 旗 vs 价码本身 | **NV。** 旗不是 BAR |
| NV-PKG-03 | 399 来源（套餐促销 / 嵌套低档 / 错映射 / 盲盒） | **NV。** 先 Hold 公开 EP |
| NV-PKG-04 | 佣金是否抽含餐全额 | **NV。** → P20；不挡「勿砍 EP」 |
| NV-P69-01… | P69 已挂（华住字段 / 加价% / 佣金%） | 仍 NV |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 16:17 CST | 首版。T-Package = 套餐挂牌不是公开 BAR。三把价；分摊/餐食旗≠定价权；P36/P27 孪生；假尺子一族；不重复 P69 六形。**不写 P70。** 14/399/799/899 Simulation only。399 = 被拒绝的 dump。899 = 套餐挂牌，不是新 BAR。 |

---

## 12. 交叉（不改 P01–P69 正文；P69 仅头一行，邻卡仅文末一行）

- **P69** `advisor-playbooks/package-breakfast-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis / 899-not-BAR **不改**。
- **主卡** `recommendations/dont-cut-bar-for-package.md`：复用，不重写。
- **轻指标** `metrics/ep-vs-package-gap.md`：EP vs 套餐挂牌 gap；无默认加价 %。本卡不重写公式。
- **P36**：竞对含早截图。本卡 / P69 = 我们自己的套餐 vs 我们自己的 BAR。
- **P27**：盲盒/批发假打包 ≠ 真 CP。
- **P20**：净贡献/佣金吃全额套餐 ≠ 砍 EP 令。
- **P64**：嵌套低档仍开着；399 可能是要关的档。
- **P18**：促销报名 ≠ 把套餐写成永久 BAR。
- **P01 / P05 / P45**：Ahead Hold EP；真弱才 leftover；早会一个动作通常是纠正 BAR=EP + Hold，不是砍地板。
- **T-Share / T-Parity / T-Guar / T-Upsell / T-Staff / T-Reinstate / T-Late**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止把套餐写成新 BAR。禁止 P70。禁止编华住含早 SOP、默认加价 %、佣金%、699。**
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。
> 交叉指针（2026-08-30 08:17，不改正文）：假尺子同族下一张 **T-Fee** `theory/resort-fee-vs-bar.md`（费/税/all-in ≠ 公开 BAR）。过程仍 **P79**。不写 P80。
> 交叉指针（2026-09-01 16:17，不改正文）：含早/套餐仍本卡/本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ T-Package。不规定 P88。
