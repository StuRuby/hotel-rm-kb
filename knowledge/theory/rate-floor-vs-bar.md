# Rate Floor / Min·Max Allowed vs Public BAR｜价表地板/最小最大额是日程保护，不是公开 BAR

> 资产：T-Floor / T02-16（Rate Floor / MINIMUM·MAXIMUM RATE ALLOWED / schedule floor 被允许改什么）· **≠ T-Hurdle**（`theory/hurdle-bid-lrv-vs-bar.md` = P85 gate/LRV）· **≠ T-Corp**（年标/议价 ≠ BAR）· **≠ T20 Budget≠Forecast 核心**（本卡专精 schedule floor / Min·Max；T20 仍管 Budget/Forecast/用户声明品牌策略）
> 路径：`theory/rate-floor-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-02
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *OPERA Controls — Rate Management*：RATE_FLOOR + RATE FLOOR LEVEL OF CONTROL；MINIMUM RATE ALLOWED / MAXIMUM RATE ALLOWED — **§115 指针 / §116 升核**；价表最小额/替换折扣夜 ≠ rewrite 公开 BAR）；A Vendor PMS（OPERA 5.6 *Rate More Tab*：Rate Floor 字段 = minimum rate amount for rate details — **§116 新开同族**；Rate Floor ≠ BAR Based）；A Vendor RMS（Signals *Configure Room Hierarchy & Rate Rules*：Min/Max Rate = overall pricing boundaries Revenue Intelligence can apply — **§116 新开**；边界 ≠ 把公开 BAR 改写成 399）；A Vendor（Cloudbeds *Settings Overview*：Room Hierarchy Min/Max Rate / competitor-median bounds — **§116 新开同族**；配置边界 ≠ BAR Type）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §115 指针 / §116 升核**）；指针（OPERA *About Best Available Rates*：BAR by Day / by LOS / Best BAR by Day — **§115/§116 指针**；BAR 模型 ≠ dump）；指针（Duetto Min/Max Bounds / Floors·Ceilings — **既有 T20 A Vendor；本小时 SPA FAIL 不当新核**）
> 配套：`theory/revenue-strategy.md`（**T20 过程/策略**；本卡不另开剧本）· `recommendations/do-not-break-brand-floor.md`（主决策卡复用，不重写公式）· `cases/sim-2026-rate-floor-minmax-sat.md`（**T-Floor 专卷 Simulation**，C02-18；过程仍 T20 + do-not-break-brand-floor）· 无新 playbook / 无新轻指标（短例仍见 §9）
> 交叉：T-Hurdle/P85 gate≠floor · T-Corp/P71 议价≠BAR · P05 真弱 leftover · P66 RMS 建议 · P01 Ahead · P45 早会 · T-Tax / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：品牌底 / Budget vs Pace 枝（过程路由已够；本卡给「为什么 RATE_FLOOR / Min·Max Allowed / 用户声明品牌底 不是公开 BAR rewrite、日程保护不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / Rate Floor 屏 / OTA，不自动改价，不代改地板。**
> 状态：**理论 drafted**（2026-09-02 16:17 CST）。**不写 P88，不写 P89，不写新剧本，不开 Pet/AAA。** 过程仍 **T20 + do-not-break-brand-floor**。禁止：编华住 Rate Floor SOP / 默认地板 % / 699 作 Fact / Walk $ / 佣金%；一夜 −15%；BAR→399「品牌底所以不能动所以公开也跟着地板 / 底价当地板改尺 / 地板=399所以公开也399」；把 14/399/799 当市场 Fact；把 OPERA/Signals/Cloudbeds Vendor $ 例当中国 Fact；重写 T20 §2 品牌底公式；重写 `do-not-break-brand-floor.md` 公式；重写 P01–P87 正文（邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Hurdle / T-Corp / T20 Budget 核**；造 systems/*.md。

---

## 0. 一句话

**Rate Floor / Min·Max Allowed 是价表日程保护与定价边界，不是公开灵活 BAR；用户声明品牌底是策略约束，不是 rewrite 许可证。**
厂商能开 RATE_FLOOR、能配 MINIMUM/MAXIMUM RATE ALLOWED、能在 Rate More 写 Rate Floor、能在 Signals/Cloudbeds Room Hierarchy 设 Min/Max Rate——只证明「价表有最小/最大保护、推荐/折扣不能无限砸穿」，不证明「公开灵活价该写成地板或 399」。协会能把 BAR 钉成 non-qualified publicly available——只证明「公开尺定义」，不证明「地板 = BAR」。用户声明了品牌底（任意数字）→ 当 **用户声明的策略约束** 执行（T20）；**无声明 → 不发明 699**。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「品牌底所以不能动 / 底价当地板改尺 / 地板=399所以公开也399 / RATE_FLOOR 屏就是公开价表」把 BAR 改写成 399。hurdle/LRV → **T-Hurdle / P85**。年标/议价 → **T-Corp / P71**。RMS 建议 → **P66**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店 Rate Floor 字段 / 华住 Rate Floor SOP / 默认地板 % = **全部 NV**。Pet/AAA 仍停车。

```
Naive（禁止）     品牌底所以不能动 → 公开也跟地板；底价当地板改尺；
                  地板=399所以公开也399；RATE_FLOOR / Min·Max 屏就是公开价表
本卡              先拆三把尺（公开 BAR / Rate Floor·Min·Max 日程保护 / 用户声明品牌底→T20）。
                  OPERA RATE_FLOOR + Min·Max Allowed + Signals/Cloudbeds Min/Max + HSMAI BAR ≠ 定价权。过程走 T20 + do-not-break-brand-floor。
```

完成标准：用户说「品牌底所以不能动」「底价当地板改尺」「地板=399所以公开也399」「RATE_FLOOR / Min·Max 就是公开价」「系统地板多少 BAR 就多少」→ Situation 写成**三把尺 + Pace/Remaining + 这是日程保护/声明约束还是要改公开**；Diagnosis 写成地板不是公开 BAR、配置/边界不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、地板是否仍关在价表保护、用户是否真声明了底、地板%/华住 SOP 是否仍 NV。**不 dump 399、不把地板写成新 BAR、不发明 699、不写 P88。**

顾问必须能直接说的三句（与 T20 / `do-not-break-brand-floor.md` **同一套**，本卡只把「schedule floor / Min·Max」说清楚，**不另发明第四条定价规则**）：

```
1. 先问这是 Rate Floor / Min·Max Allowed（OPERA：价表最小额/折扣夜替换保护；Signals/Cloudbeds：推荐边界），还是用户声明的品牌底（→T20 约束），还是要把公开灵活 BAR 改成地板。地板 ≠ 公开尺。无用户声明 → **不发明 699**。本店 Rate Floor 字段 / 华住 Rate Floor SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「品牌底所以不能动 / 底价当地板 / 地板=399所以公开也399」。
3. hurdle/LRV 走 T-Hurdle/P85。年标/议价走 T-Corp/P71。RMS 建议走 P66。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从地板改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**RATE_FLOOR / Min·Max Allowed 回答的是「价表/推荐边界怎么护」，不是「今晚公开灵活该卖多少」。** 它回答「折扣算出低于最小额时怎么替换 / 推荐不能越过边界」。它**不**回答「公开 BAR 该砸到多少」。用户声明品牌底回答的是「策略约束能不能砸穿」，也**不**等于「公开 BAR = 地板数」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把地板写成新 BAR。禁止无声明发明 699。禁止编华住 Rate Floor SOP。禁止编默认地板 %。禁止编 Walk $。禁止把 Vendor $ 例当中国 Fact。**

**命名钉死：T-Floor ≠ T-Hurdle ≠ T-Corp ≠ T20 Budget≠Forecast 核心。** T-Floor = schedule floor / Min·Max 日程保护专精；T-Hurdle = gate/LRV；T-Corp = 议价/年标；T20 = Budget/Forecast/用户声明品牌策略总卡。过程仍 **T20 + do-not-break-brand-floor**。

---

## 1. 三把尺：Public BAR / Rate Floor·Min·Max schedule protection / User-declared brand floor（→T20）

顾问问题不是「系统里有没有一个更低的地板数」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成地板；砍到「地板=399所以公开也399」 |
| **Rate Floor / Min·Max Allowed** | OPERA RATE_FLOOR / MINIMUM·MAXIMUM RATE ALLOWED；Signals/Cloudbeds Min/Max Rate | 可留在价表保护/推荐边界；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **User-declared brand floor** | 用户亲口声明「不能低于 X」（任意数字） | → **T20** 策略约束；先围栏/库存/渠道；无声明不适用 | **发明 699**；静默砸穿；把声明底当公开 dump 令 |

```
Public_BAR                 = 799     # Simulation：公开灵活
Rate_Floor_or_MinMax       = 399 或更高/更低  # Simulation：价表/推荐边界（不是新 BAR）
User_declared_brand_floor  = （若有）用户声明数 → T20   # 无声明 = 本尺不适用，不发明 699
Gap                        = Public_BAR − Rate_Floor_or_MinMax   # 尺在观察，不是必须折扣指令
Layer                      = public BAR | schedule floor/Min·Max | user-declared brand floor | hurdle→T-Hurdle | negotiated→T-Corp
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国地板默认。OPERA / Signals / Cloudbeds Vendor $ 例 = **Vendor 示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **保护层**：把「系统地板 399」读成「我们 BAR 就是 399」，或把「有品牌底」读成「公开栏必须改到地板」，或把 RATE_FLOOR 与 hurdle / 年标混成一把。

HSMAI BAR（A，§67/§115/§116）：BAR = **the non-qualified, publicly available rate**。**方向采用：Rate Floor / Min·Max / 品牌底约束 不是 BAR。**

---

## 2. RATE_FLOOR / Min·Max Controls 是过程，不是定价权

厂商把「地板 / 最小最大额」做成**价表保护 + 折扣夜替换 + 推荐边界**。没有一家被打开的官方页把它写成「地板默认等于 BAR」或「有地板就必须把公开灵活改写成 399」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Controls — Rate Management*（§115 指针 / **§116 升核**） | RATE_FLOOR = Activates rate floors… minimum rate amount for rate schedules；LEVEL OF CONTROL = RATE LEVEL 或 ROOM TYPE LEVEL；MINIMUM RATE ALLOWED = 折扣算出低于最小额时 **substituted**；MAXIMUM RATE ALLOWED = 折扣超过最大额时 substituted | **价表日程保护 / 折扣夜替换。** ≠ BAR Type；≠ rewrite 公开灵活 |
| OPERA 5.6 *Rate More Tab*（**§116 新开同族**） | Rate Floor 字段 = set a minimum rate amount for rate details associated with this rate code | **码级最小额字段。** ≠ BAR Based；≠ 公开 dump 令 |
| Signals *Room Hierarchy Min/Max Rate*（**§116 新开**） | Maximum/Minimum Rate = highest/lowest rate Revenue Intelligence **can apply**；另有 Comp above/below | **推荐/应用边界。** ≠ 把公开 BAR 改写成地板 |
| Cloudbeds *Settings Overview* Room Hierarchy（**§116 新开同族**） | Min/Max Rate + competitor-median bounds；Room Hierarchy offsets | **配置边界过程。** ≠ BAR Type |
| OPERA *About Best Available Rates*（§115/§116 指针） | BAR by Day / by LOS / Best BAR by Day | **BAR 模型 ≠ Rate Floor；≠ dump** |
| HSMAI Academy *BAR*（§67/**§116**） | BAR = non-qualified, publicly available | 地板 / Min·Max **不是 BAR** |
| Duetto Min/Max Bounds / Floors·Ceilings | 既有 T20 A Vendor：最低价在 Min/Max Bounds；pricing strategy floor ≠ minimum | **本小时 SPA FAIL**（CSS Error / 无正文）— **不当新核**；旧指针仍可回指 T20，不升本卡新证 |

```
画面：品牌底所以不能动 / 底价当地板改尺 / 地板=399所以公开也399 / 销售说「RATE_FLOOR 屏就是公开价」
Naive：BAR 就是那个地板；能配 RATE_FLOOR / Min·Max 所以改尺
本卡：RATE_FLOOR、Min·Max Allowed、Room Hierarchy 边界、用户声明底都是过程或约束。定价权在公开 BAR + Pace，不在地板按钮。
```

```
OPERA RATE_FLOOR / LEVEL OF CONTROL     → 价表最小额保护（码级/房型级）
OPERA MINIMUM / MAXIMUM RATE ALLOWED    → 折扣夜替换边界
OPERA Rate More · Rate Floor 字段       → 码级最小额
Signals / Cloudbeds Min/Max Rate        → 推荐/应用边界
User-declared brand floor               → T20 策略约束（无声明不发明）
Public BAR                              → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 Rate Floor SOP / 默认地板 % / 本店地板字段名 / 佣金% / 699 Fact = **NV，不编。** UI 字段是 OPERA/Signals/Cloudbeds 的，不是本店报表名。不把 Vendor $ 例写成店规。

---

## 3. 「品牌底所以不能动 / 底价当地板改尺 / 地板=399所以公开也399」是约束或日程信号，不是改写许可证

过程仍走 **T20 + do-not-break-brand-floor**，本卡给 WHY（schedule floor / Min·Max 专精），**不重复 T20 §2 公式，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 T20 / brand-floor 卡） |
| --- | --- | --- | --- |
| **A 地板 = 公开 BAR** | 「RATE_FLOOR / Min·Max 就是我们的公开价」 | 用保护层当尺 | **拆地板 vs 公开**；Hold 公开 BAR |
| **B BAR→399「地板=399所以公开也399」** | 「系统地板 399，BAR 改 399」 | 把保护数写成战略尺 | **拒绝 BAR→399** |
| **C 品牌底所以不能动 → 公开跟地板** | 「有品牌底，公开必须贴地板」 | 把约束读成改尺令 | **约束 = Hold 底，不是 dump 公开到地板**；先围栏/库存/渠道 |
| **D 底价当地板改尺 / 预算差所以砸地板** | 「Pace 差 / Budget 差，地板当地板砍」 | Budget≠Forecast 误用 | **T20**：Budget 不是砍尺令；无声明不发明 699 |
| **E 误入 hurdle / 年标 / RMS 建议 / 真弱** | 「门槛也是底 / 年标就是底 / 系统建议穿底 / 反正空」 | 对象是别的卡 | **T-Hurdle** / **T-Corp/P71** / **P66** / **P05** |
| **F 无声明却发明 699** | 「经济型不能低于 699」 | 把 Simulation/话术当 Fact | **禁止发明 699**；问用户有没有声明底 |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 系统地板看起来更低 | 需求仍强；公开尺 **Hold**；地板留在价表保护 | 「市场认地板，BAR 改 399」 |
| 用户声明了品牌底 | **Hold 声明底**；先围栏/库存/渠道；书面例外才动 | 「有底所以公开改到地板」或「偷偷砸穿」 |
| 无用户声明 | **品牌底尺不适用**；不发明 699 | 「默认 699 / 华住表」 |
| Min·Max / RATE_FLOOR 还能配 | **配置/保护 ≠ BAR Type** | 「屏就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从地板改写 BAR | 一夜 −15%；把地板永久化成公开尺 |

```
Rate Floor / Min·Max looks like a market price  → 保护信号（可加强拆尺 / Hold 公开）
Public BAR                                     → 仍由 Pace / Remaining 定
Naive                                          → 「地板=399所以公开也399 / 品牌底所以跟地板」
本卡                                           → 日程保护/声明约束 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. Diagnose 边界：本卡 ≠ T-Hurdle ≠ T-Corp ≠ P05 ≠ P66

五边都在「看起来有个更低的数 / 销售要跟」附近，对象不同。塌成「反正都是底所以砍」会开错杠杆。

| | **本卡 T-Floor** | **T-Hurdle/P85** | **T-Corp/P71** | **P05** | **P66** |
| --- | --- | --- | --- | --- | --- |
| 对象 | 价表 Rate Floor / Min·Max / 用户声明品牌底 | hurdle/bid/LRV 可售门 | 年标/议价/协议 | 真 Behind leftover | RMS 建议卖价 |
| 尺 | 公开 **BAR** | 公开 BAR vs gate | 公开 BAR vs 协议层 | 公开 BAR（可围栏） | 公开 BAR vs 建议 |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；门留门 | Hold；协议留协议 | 仅真弱才围栏 | Hold；建议是输入 |
| 禁止 | 399 作新 BAR；发明 699 | 把门当地板当公开 | 把年标当地板 dump | 一夜 −15%；地板永久化 | 建议穿底当许可证 |

顾问第一闸永远是：**这是要改本店公开尺，还是价表地板/Min·Max 保护，还是用户声明品牌底，还是 hurdle，还是年标，还是 RMS 建议，还是真弱？** hurdle → T-Hurdle/P85。年标 → T-Corp/P71。RMS 建议 → P66。真弱 leftover → P05。要把 RATE_FLOOR/Min·Max/声明底叫 BAR / 要地板当地板 dump → 本卡；过程仍 **T20 + do-not-break-brand-floor**。

---

## 5. 假尺子一族

屏幕上的保护/边界工具被当成定价按钮：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **本卡 T-Floor** | 「地板=399所以公开也399 / 品牌底所以跟地板 / RATE_FLOOR 屏」 | **公开 BAR + Pace**；不是地板当地板令，也不是 dump 399 令 |
| **T-Hurdle** | 「门槛价才是市场价」 | 公开 BAR + Pace；gate ≠ BAR |
| **T-Corp** | 「年标就是公开价」 | 公开 BAR + Pace；议价 ≠ BAR |
| **T20 Budget 核** | 「预算差 10% 全砍」 | Budget ≠ Forecast；不是地板改尺 |
| **T-Tax / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee** | （各卡画面） | 公开 BAR + Pace |

与 **T-Hurdle / T-Corp / T20** 的边界：hurdle 是可售门/LRV value；Corp 是协议层；T20 总管 Budget/Forecast/声明品牌策略。本卡是 **schedule floor / Min·Max 保护专精**。对象不同，假尺子同族；**过程交 T20 + brand-floor 卡**。

---

## 6. Diagnose → Advise

用户原话：「品牌底所以不能动」「底价当地板改尺」「地板=399所以公开也399」「RATE_FLOOR / Min·Max 就是公开价」「系统地板多少 BAR 就多少」「无底也按 699」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Rate Floor / Min·Max / 用户声明品牌底；
            ②拟议是「改尺 / 跟地板 / 发明 699」还是「Hold 公开 + Hold 声明底（若有）+ 地板留在保护层」；
            ③Pace / Remaining；这是日程保护/约束还是要改公开尺。
  缺 Rate Floor 字段 / 华住 SOP / 用户是否声明底 → 问，不编。

Diagnosis
  地板/Min·Max/声明底挂上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 发明 699 vs hurdle vs 年标 vs RMS vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆地板 vs 公开 + Hold 公开 BAR；有声明底 → Hold 底 + 先围栏/库存/渠道
    (4) 是否先拆 T-Hurdle / T-Corp / P66 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明 699 / 华住 Rate Floor SOP / 默认地板 %。
  **Ahead 夜：Rate Floor / Min·Max / 声明底不被允许把公开 BAR 改写成地板。**

What To Watch
  公开 BAR 是否仍 Hold；地板是否仍关在价表保护/推荐边界；用户声明底是否仍 Hold（若有）；24h 公开 Pickup vs 地板数（分看）
  不是「RATE_FLOOR 配完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**（779–799 首选 **799**）；有用户声明底 → **同时 Hold 声明底**，先围栏/库存/渠道；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日且（若有声明底）落点 ≥ 声明底。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88。**

---

## 7. ask-list（全部 NV）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **Rate Floor / Min·Max Allowed / 价表保护**，还是 **用户声明的品牌底**，还是要把 **公开 BAR 改成地板**？ | 混用尺；把保护层当公开价 | **NV** |
| 2 | 当前公开 BAR 与系统地板/Min·Max 各是多少？用户有没有亲口声明「不能低于 X」？ | 会编 699；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA RATE_FLOOR / Min·Max Allowed？是否 Signals/Cloudbeds Room Hierarchy？是否其实是 hurdle（→T-Hurdle）或年标（→T-Corp）？ | 把配置写成「已成新 BAR」 | **NV** |
| 4 | 拟议是 Hold 公开 + Hold 声明底（若有）、还是改写公开尺 / 跟地板 / 发明 699？ | 误入本卡 / T-Hurdle / T-Corp / P66 | **NV** |
| 5 | 本店 Rate Floor 字段 / 华住 Rate Floor SOP / 默认地板 % 怎么走？ | 发明华住 SOP；或把 Vendor $ 当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是 hurdle/LRV（→T-Hurdle/P85）；是不是年标（→T-Corp/P71）；是不是 RMS 建议穿底（→P66 + brand-floor 卡）；真 Behind leftover（→P05）。**华住 Rate Floor SOP、默认地板 %、699 Fact、Walk $、佣金%：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| RATE_FLOOR / Min·Max 就是公开 BAR | BAR = 无资格公开灵活。地板是价表/推荐保护 |
| 地板=399所以公开也399 | 保护数 ≠ 战略尺。拒绝 |
| 品牌底所以不能动 → 公开跟地板 | 约束 = Hold 底 + 先围栏；不是 dump 公开 |
| 底价当地板改尺 / Budget 差所以砸 | Budget ≠ Forecast（T20）；不是地板改尺令 |
| 无声明也按 699 | **禁止发明 699** |
| hurdle 也是地板所以跟 | **T-Hurdle / P85** |
| 年标就是品牌底所以改公开 | **T-Corp / P71**；议价 ≠ BAR |
| RMS 建议穿底所以跟 | **P66**；建议不是破底许可证 |
| Vendor $ 例就是我们地板 | Vendor 示意 **NOT China Fact** |
| 反正空，按地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住 Rate Floor SOP 就能 Advise | **禁止。** 地板字段 / SOP NV |
| 把本卡叫成 T-Hurdle / T-Corp / T20 Budget 核 | **禁止。** 本卡 = **T-Floor** |

---

## 9. Simulation（诊断例，不是新店 Fact）

短例（**不**另开 sim 文件；过程仍 T20 / brand-floor 卡）：

```
# Simulation only — 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
Rate Floor / Min·Max         = 系统保护/边界看起来「更低」（不是新 BAR；保护层 Simulation）
用户声明品牌底               = 无（本尺不适用；禁止发明 699）
销售拟议                     = 「地板=399所以公开也399 / 品牌底所以跟地板 / RATE_FLOOR 屏就是价」砍 BAR 到 399
```

读法：399 是被拒绝的地板改尺，不是 BAR。Advise：拆公开 vs Rate Floor/Min·Max vs（若有）声明底；**Hold 779–799 首选 799**；拒 dump **399**；无声明 **不发明 699**；地板留在价表保护。不要用 Vendor $ 例当 sim 数字或店规。
**14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/地板默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-09-02 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| RATE_FLOOR + LEVEL OF CONTROL；MINIMUM/MAXIMUM RATE ALLOWED = 价表最小/最大与折扣夜替换 | **A Vendor PMS** | **Known 日程保护 ≠ rewrite** | OPERA Controls Rate Management（**§115/§116 升核**） |
| Rate Floor 字段 = minimum rate amount for rate details | **A Vendor PMS** | **Known 码级最小额 ≠ BAR Based** | OPERA 5.6 Rate More Tab（**§116 新开同族**） |
| Min/Max Rate = boundaries Revenue Intelligence can apply | **A Vendor RMS** | **Known 推荐边界 ≠ BAR rewrite** | Signals Room Hierarchy（**§116 新开**） |
| Cloudbeds Room Hierarchy Min/Max Rate | **A Vendor** | **Known 配置边界 ≠ BAR Type** | Cloudbeds Settings Overview（**§116 新开同族**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§116**） |
| BAR by Day / LOS / Best BAR by Day | **A Vendor PMS** | **Known BAR 模型 ≠ floor dump** | OPERA About BAR（§115/**§116 指针**） |
| Ahead Hold 公开 BAR；拒 399；无声明不发明 699 | **B / Hypothesis** | 本库 T20 + Pace 闸 | — |
| 本店 Rate Floor 字段 / 华住 Rate Floor SOP / 默认地板 % / 699 Fact | — | **NV。不编。** | — |
| Duetto Min/Max Bounds / Floors·Ceilings 本小时正文 | — | **FAIL**（SPA CSS Error；不当新核） | 见 §116；旧指针回 T20 |

本小时升核：OPERA Controls RATE_FLOOR / Min·Max + HSMAI BAR。新开：Signals Min/Max Rate；Cloudbeds Settings Room Hierarchy Min/Max；OPERA 5.6 Rate More Rate Floor。指针：OPERA About BAR。Duetto **SPA FAIL 不当新核**。华住 Rate Floor SOP **未开、不编**。**不规定 P88。不规定 P89。**

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-FLOOR-01 | 本店是否真有 RATE_FLOOR / Min·Max Allowed / Room Hierarchy 边界；字段名是什么 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-FLOOR-02 | 用户是否亲口声明品牌底（数字 X）；无则本尺不适用 | **NV。** 无声明 **不发明 699** |
| NV-FLOOR-03 | 华住 Rate Floor SOP / 默认地板 % / 集团最低价表 | **NV。不编。** |
| NV-FLOOR-04 | 399 来源（地板话术 / 品牌底话术 / Budget 抱怨 / 竞对截图） | **NV。** 先 Hold 公开 BAR |
| NV-FLOOR-05 | Vendor $ 例是否被误当店规 | **禁止采用为 China Fact。** |
| NV-T20-01… | T20 / brand-floor 卡已挂（谁有权定底 / 书面例外） | 仍 NV |

Watch：公开 BAR 是否仍 Hold；声明底是否仍 Hold（若有）；地板是否仍关在保护层；OCC/ADR 是否被地板数读脏却想砍尺；误入 T-Hurdle/T-Corp/P66/P05 是否已移交。

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-02 16:17 CST | 首版。T-Floor = Rate Floor / Min·Max Allowed / schedule floor vs public BAR；用户声明品牌底 → T20。**≠ T-Hurdle ≠ T-Corp ≠ T20 Budget 核。** 三把尺；OPERA RATE_FLOOR + Min·Max + Signals/Cloudbeds Min/Max + HSMAI BAR ≠ 定价权；形 A–F；假尺子一族。**不写 P88/P89。** 14/399/799 Simulation only。399 = 被拒绝的 dump。无声明不发明 699。过程仍 T20 + do-not-break-brand-floor。 |
| 2026-09-02 18:17 CST | 配套 Simulation 指针：新开 `cases/sim-2026-rate-floor-minmax-sat.md`（C02-18）。正文三句 / 399 / 799 / 无声明不发明 699 / 过程 T20+brand-floor **不改**。不开 P88。 |

---

## 13. 交叉（不改 P01–P87 正文；T20 / brand-floor 仅修订或文末一行；邻卡仅文末一行）

- **T20** `theory/revenue-strategy.md`：Budget≠Forecast + 用户声明品牌策略总卡。**本卡给「为什么 schedule floor / Min·Max」与 Diagnose 尺**，三句同一套（地板措辞）。§2 品牌公式 **不改**。
- **主卡** `recommendations/do-not-break-brand-floor.md`：复用，不重写公式。有声明底 Hold；无声明不发明 699。
- **T-Hurdle / P85**：gate/LRV ≠ floor。邻「可售门」，不是价表最小额。
- **T-Corp / P71**：年标/议价 ≠ BAR。邻「协议层」，不是 RATE_FLOOR。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏，且若有声明底须 ≥ 底）；早会一个动作通常是纠正地板≠BAR + Hold，不是改尺。
- **P66**：RMS 建议不是破底许可证。
- **T-Tax / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88/P89。禁止编华住 Rate Floor SOP、默认地板 %、佣金%、Walk $。禁止把 Vendor $ 例当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advise。禁止造 systems/*.md。禁止把 T-Floor 叫成 T-Hurdle / T-Corp / T20 Budget 核。**

> 指针（2026-09-02 16:17，不改正文邻卡）：§116 升核 OPERA RATE_FLOOR / Min·Max + HSMAI BAR；新开 Signals Min/Max + Cloudbeds Room Hierarchy Min/Max + OPERA 5.6 Rate Floor 字段。Diagnose 走 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**。三句 / 399 / 799 / 无声明不发明 699 **不改邻卡正文**。不规定 P88。不规定 P89。

> 指针（2026-09-02 18:17 C02-18，不改正文）：专卷 Simulation → `cases/sim-2026-rate-floor-minmax-sat.md`；§117 CASE 指针复述 §116。Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-02 20:17 R02-20，不改正文）：§118 新开 protel Air Rate availability（日程 Min/Max rate ≠ BAR）+ Clock PMS+ Min/Max allowed prices（录入边界 ≠ rewrite）。Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 16:17 T03-16，不改正文）：门市/Rack 基准 Diagnose 走 **T-Rack** `theory/rack-vs-bar.md`；地板仍本卡 **T-Floor**；过程仍 **P01** + **P64**（+ T-Floor handoff）。三句 / 399 / 799 / 无声明不发明 699 **不改**。不开 P88。不开 P89。
> 交叉指针（2026-09-03 18:17 C03-18，不改正文）：callable Simulation `cases/sim-2026-rack-vs-bar-sat.md`。Diagnose 走 **T-Rack**；过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699；§129。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
