# Hurdle / Bid Price / Last Room Value vs Public BAR｜门槛价/bid/LRV 是可售门/机会成本，不是公开 BAR

> 资产：T-Hurdle / T11–T14 下一层（hurdle/bid/LRV 被允许改什么）· T-Stored / T-Wholesale / T-Fee 同族（尺子 ≠ 按钮）· 与 `theory/optimization-advise.md` 分工（本卡 = gate ≠ public BAR；optimization-advise = Accept/Reject 机会成本语言，**不重写**）
> 路径：`theory/hurdle-bid-lrv-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-31
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Configuring Hurdle Rates*：要达到才 **display**；hurdle = bid prices or opportunity costs — **§92 指针 / §93 升核**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Yield Market Type*：同一日期可多 hurdle；Yield Market Type ≠ BAR Type — **§92 指针 / §93 升核**）；A Vendor PMS（OPERA Cloud 26.2 *About Hurdle Rates*：availability / display / bid·opportunity cost 总述 — **§93 新开**）；A Vendor PMS（OPERA Cloud 26.2 *OPERA Controls — Rate Management*：YIELD MARKET TYPES 激活 Yield Market Type Hurdle；EXTERNAL SYSTEM FOR HURDLE RATE — **§93 新开**；控制开关 ≠ BAR Type）；A Vendor RMS（IDeaS *Driving Revenue With Dr. Ravi*：LRV **not the price you should sell your rooms for** — **§92 指针 / §93 升核**）；A Vendor RMS（IDeaS Developers *Last Room Value*：**LRV is a value, not a selling rate to be applied** — **§92 指针 / §93 升核**）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 指针 / §93 升核**）；指针（§92 Hurdle Rates Evaluation for Restriction Publication = 渠道限制发布机械，≠ BAR Type；不抄 FPLOS 当店规）
> 配套：`advisor-playbooks/hurdle-bid-lrv-vs-bar.md`（P85 过程）· `recommendations/dont-rewrite-bar-to-hurdle.md`（主卡复用，不重写）· `metrics/hurdle-vs-public-bar.md`（轻指标；**无默认 hurdle % / LRV Fact**，公式不重写）· `cases/sim-2026-hurdle-lrv-sat.md`（Simulation）
> 交叉：P66 RMS 建议卖价 ≠ 本卡「hurdle 是公开 BAR」· P64 嵌套低档开/关 ≠ hurdle 可售门 · P33 限制过度 · P05 真弱 leftover · P01 Ahead · P45 早会 · P84 取消费 · P83/T-Stored 储值 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored（假尺子一族）· `theory/optimization-advise.md`（机会成本 Accept/Reject；**不重写**）
> 问题树：§92「hurdle / bid price / LRV 不是公开 BAR」（过程路由已够；本卡给「为什么可售门/机会成本 value 不是公开 BAR、Hurdle Rates / Yield Market Type / LRV 不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / hurdle 屏 / OTA，不自动改价，不代改 hurdle。**
> 状态：**理论 drafted**（2026-08-31 08:17 CST）。**不写 P86，不写新剧本，不开押金专剧。** 禁止：编华住会门槛价 SOP / 默认 hurdle % / LRV Fact / EMSR Fact / 佣金% / 699；一夜 −15%；BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」；把 14/399/799 当市场 Fact；把 OPERA 195/200/80/90 或 IDeaS 公式数字当中国 Fact；重写 `hurdle-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P85 正文（P85 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**hurdle / bid price / Last Room Value 是可售门 / 机会成本 value，不是公开灵活 BAR。**
厂商能把 hurdle 挂在 Rate Management、能让价码要达到才在 rate grid 上 **display**、能用 Yield Market Type 挂多 hurdle、能配 EXTERNAL SYSTEM FOR HURDLE RATE，只证明「有可售门 / 控制开关 / 渠道限制发布机械」，不证明「公开灵活价该跟到门槛地板」。IDeaS 能把 LRV 钉成 value not a selling rate、能把 bid price 钉成 opportunity cost / hurdle 别名——只证明「Accept/Reject 门槛 value」，不证明「公开 BAR 改写成 LRV」。协会能把 BAR 钉成 non-qualified publicly available——只证明「公开尺定义」，不证明「hurdle = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍公开 / 系统门槛 399 公开也得 399」把 BAR 改写成 399。RMS 建议卖价 → **P66**。嵌套低档开/关 → **P64**。限制过度 → **P33**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact = **全部 NV**。押金/预授权仍 **MEDIUM leftover**，本卡不开。Pet/AAA 仍停车。

```
Naive（禁止）     门槛价就是我们的公开价；hurdle 多少 BAR 就多少；
                  过不了 LRV 所以砍公开；系统门槛 399 公开也得 399；Hurdle Rates 屏就是公开价表
本卡              先拆三把尺（公开 BAR / Hurdle·bid·LRV 可售门 / RMS 建议卖价→P66）。
                  OPERA Hurdle Rates + Yield Market Type + IDeaS LRV + HSMAI BAR ≠ 定价权。过程走 P85。
```

完成标准：用户说「门槛价才是市场价改 BAR」「hurdle 多少就跟多少」「过不了 LRV 所以砍」「系统门槛 399 公开也得 399」「Hurdle Rates / Yield Market Type / IDeaS LRV 就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是可售门还是要改公开**；Diagnosis 写成 hurdle/LRV 不是公开 BAR、可售门/控制开关不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、hurdle 是否仍关在可售门、hurdle%/LRV Fact 是否仍 NV。**不 dump 399、不把门槛地板写成新 BAR、不写 P86。**

顾问必须能直接说的三句（与 P85 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是 hurdle / bid price / Last Room Value（OPERA：价码要达到才在 rate grid 上显示；IDeaS：LRV 是 value not a selling rate），还是要改公开灵活 BAR。Hurdle ≠ 公开尺。本店 hurdle/RMS 字段 / 华住会门槛价 SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」。
3. RMS 建议卖价走 P66。嵌套低档开/关走 P64。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从 hurdle 地板改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**hurdle / bid / LRV 回答的是「这一档 yieldable 价码能不能过可售门」，不是「今晚公开灵活该卖多少」。** 它回答「过不了 LRV = 那一档不可售 / 要达到才 display」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把门槛地板写成新 BAR。禁止编默认 hurdle %。禁止编 LRV Fact。禁止编 EMSR Fact。禁止编华住会门槛价 SOP。禁止编 699。**

与 `theory/optimization-advise.md` 的分工（**不重写**该卡正文）：optimization-advise 给 Accept/Reject 的**机会成本语言**（bid price ≈ opportunity cost，不是 BAR 口号、不是 RMS 按钮）。**本卡**给「可售门 / LRV value ≠ 公开灵活 BAR」的尺子拆分。Diagnose 走 **本卡 T-Hurdle**；过程仍 **P85**；机会成本句子仍可回指 optimization-advise，不合并、不重写。

---

## 1. 三把尺：公开 BAR / Hurdle·bid·LRV（可售门） / RMS 建议卖价（→P66）

顾问问题不是「系统里有没有一个更低的门槛数」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成 hurdle 地板；砍到「门槛价才是市场价」 |
| **Hurdle / bid / LRV（gate）** | OPERA：要达到才 display；IDeaS：value not a selling rate；别名 opportunity cost / hurdle | 可留在可售门；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **RMS recommended selling rate** | 系统建议卖价层 | → **P66**（建议是输入不是定价权） | 与 hurdle 混成一把尺；把建议 dump 当「过不了 LRV」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Hurdle_or_LRV            = 399 或更高/更低  # Simulation：可售门 value（不是新 BAR）
RMS_recommended_sell     = （若有）走 P66   # Simulation：建议卖价层，不要与 hurdle 混
Gap                      = Public_BAR − Hurdle_or_LRV   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | hurdle/bid/LRV gate | RMS recommended sell | Yield Market Type tag
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国 hurdle 默认。OPERA Vendor $80/$90/195/200、IDeaS Effective Hurdle 公式数字 = **Vendor 示意，NOT China Fact / 不进 sim**。

混淆三把尺会同时拧坏 **公开尺** 与 **可售门**：把「系统门槛 399」读成「我们 BAR 就是 399」，或把「过不了 LRV」读成「公开栏必须砍到门槛」，或把 hurdle 与 RMS 建议卖价混成一把。

HSMAI BAR（A，§67/§93）：BAR = **the non-qualified, publicly available rate**。**方向采用：hurdle / LRV 不是 BAR。**

IDeaS Developers（A，§92/§93）：**LRV is a value, not a selling rate to be applied.** **方向采用：可售门 value ≠ 公开卖价。**

---

## 2. Hurdle Rates / Yield Market Type / LRV / Controls 是过程，不是定价权

厂商把「hurdle / LRV」做成**可售门 + 多 hurdle 标签 + 外系统开关 +（可选）渠道限制发布**。没有一家被打开的官方页把它写成「hurdle 默认等于 BAR」或「过不了 LRV 就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Hurdle Rates*（§92 指针 / §93 升核） | Integrated RMS 算 hurdle；预订时 rate code/room type **availability**。"This is the value that must be reached for OPERA Cloud to **display** a rate code/room type on the rate grid." "Hurdle rates are sometimes referred to as **bid prices or opportunity costs**." 先查自己的 open/closed **再** hurdle。Delta / Ceiling / Max Rooms Sold = 可售机械 | **可售门 / display 条件。** 不是 BAR Type |
| OPERA Cloud 26.2 *About Hurdle Rates*（§93 **新开**） | 同族总述：availability at reservation time；要达到才 display；bid prices or opportunity costs | **概念总述仍是可售门。** ≠ 公开价表 |
| OPERA Cloud 26.2 *Configuring Yield Market Type*（§92/§93） | 同一日期可多 hurdle（Vendor 例 Entitlement 195 vs Non-entitlement 200） | **Yield Market Type ≠ BAR Type。** 195/200 NOT China Fact |
| OPERA Cloud 26.2 *OPERA Controls — Rate Management*（§93 **新开**） | YIELD MARKET TYPES = Activates Yield Market Type Hurdle Functionality；EXTERNAL SYSTEM FOR HURDLE RATE = Select the external system for Hurdle Rate calculation；另有 Multiple Yield Market Types / Yield Market Lookup 等 | **控制开关 / 外系统选型。** ≠ 改写公开灵活栅格 |
| IDeaS *Dr. Ravi bid price*（§92/§93） | Bid price 别名 Marginal Revenue / Opportunity Cost / hurdle；IDeaS = LRV。"This value is **not the price you should sell your rooms for**..." Yieldable 须 meet or exceed LRV | **LRV ≠ 公开卖价。** 机会成本语言 ↔ optimization-advise |
| IDeaS Developers *LRV*（§92/§93） | "**LRV is a value, not a selling rate to be applied.**" 低于 LRV 不可售；等于或高于可售。Transient only。Effective Hurdle 公式 = Vendor 实现 | **Vendor formula exists; NV to calculate。** 不抄公式、不发明中国 Fact |
| HSMAI Academy *BAR*（§67/§93） | BAR = non-qualified, publicly available | Hurdle / LRV **不是 BAR** |
| OPERA *Hurdle Rates Evaluation for Restriction Publication*（§93 指针） | hurdle 可生成/覆盖渠道限制（FPLOS 等） | **渠道限制发布机械 ≠ BAR Type。** 不抄 FPLOS 当店规 |

```
画面：门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍 / 系统门槛 399 公开也得 399 / 销售说「Hurdle Rates 屏就是公开价」
Naive：BAR 就是那个门槛；能配 hurdle 所以改尺
本卡：Hurdle Rates、Yield Market Type、EXTERNAL SYSTEM 开关、LRV value、限制发布都是过程。定价权在公开 BAR + Pace，不在 hurdle 按钮。
```

```
OPERA Hurdle Rates / display on rate grid     → 可售门
OPERA first open/closed then hurdle           → 可售顺序
Yield Market Type / Controls YIELD_MARKET_*   → 多 hurdle 标签 / 开关
EXTERNAL SYSTEM FOR HURDLE RATE               → 外系统选型
IDeaS LRV / bid / opportunity cost            → value 门槛（Accept/Reject）
Restriction Publication / FPLOS               → 渠道限制机械（指针）
Public BAR                                    → 日历夜公开灵活价  ← 本卡默认 Hold
RMS recommended selling rate                  → P66（不要与 hurdle 混）
```

华住会门槛价 SOP / 本店 hurdle % / LRV Fact / EMSR Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/IDeaS 的，不是本店报表名。不发明 STR hurdle Include/Exclude（hurdle 不是会计桶）。

---

## 3. 「门槛价才是市场价 / 多少就跟多少 / 过不了 LRV 所以砍」是可售门信号，不是改写公开 BAR 的许可证

hurdle/LRV 回答的是：**这一档 yieldable 能不能过可售门、要不要 display。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 系统门槛看起来更低/更高 | 需求仍强；公开尺 **Hold**；hurdle 留在可售门 | 「市场认门槛地板，BAR 改 399」 |
| 过不了 LRV、公开 BAR 也动 | 那一档不可售 ≠ 必须砍公开尺；公开仍 Pace 闸 | 用「过不了」证明必须 dump 公开尺 |
| 把 hurdle 当成 RMS 建议卖价 | **形 C**：对象是建议卖价层 → **P66** | 「系统门槛就是系统建议卖价所以跟」 |
| Hurdle Rates / Yield Market Type / LRV 还能配 | **形 E**：可售门/标签 ≠ BAR Type | 「屏/类型/LRV 就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从 hurdle 地板改写 BAR | 一夜 −15%；把门槛地板永久化 |

```
Hurdle/LRV looks like a market price  → 可售门信号（可加强拆尺 / Hold 公开）
Public BAR                            → 仍由 Pace / Remaining 定
Naive                                 → 「门槛太低/过不了所以 BAR→399」
本卡                                  → 过不了 LRV ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店 hurdle 改尺 ≠ RMS 建议（P66）≠ 嵌套低档（P64）≠ 限制（P33）≠ 真弱（P05）

五边都在「系统里有个门槛 / 销售要跟」附近，对象不同。塌成「反正都是系统所以砍」会开错杠杆。

| | **P85 / 本卡（重置公开尺=hurdle 地板）** | **P66（RMS 建议卖价）** | **P64（嵌套低档）** | **P33（限制）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到 hurdle/LRV 地板 | 系统建议卖价要不要跟 | 低档仍开 / 关低≠涨 BAR | MinLOS/CTA 堆限制 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 建议是输入 | nested/shared/dedicated | 限制机械 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Ahead 不跟 dump | 高峰关低档 | 先松限制 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；hurdle 当市价 | 把建议当定价权 | 把关低当 hurdle 门 | 把限制当 hurdle | 一夜 −15%；把 hurdle 地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是 RMS 建议卖价，还是嵌套低档，还是限制，还是真弱？** 建议卖价 → P66。嵌套 → P64。限制 → P33。真弱 leftover → P05。要把 hurdle/LRV 叫 BAR / 要门槛太低改尺 / 过不了所以砍 → 本卡 / P85。

---

## 5. 假尺子一族：「hurdle 就是 BAR / 多少就跟 / 过不了所以砍」

本卡不是新怪现象，是同一族的下一张：**屏幕上的可售门/机会成本 value 被当成定价按钮。**

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
| **本卡 T-Hurdle** | 「门槛价才是市场价 / hurdle 多少就跟 / 过不了 LRV 所以砍」 | **公开 BAR + Pace**；不是可售门当 BAR 令，也不是 dump 399 令 |

「门槛价才是市场价所以改 BAR」= 把 **availability gate / opportunity-cost value** 当成 **公开灵活价**。尺子在 hurdle 上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「hurdle 多少就跟多少」是另一把假尺子：把**可售门数值**当成「市场已经认了新尺」。该把过不了的档留在关档，不是改写 Brand.com。

「过不了 LRV 所以砍公开」是第三把：把**某一档不可售**当成「公开尺必须降到门槛」。IDeaS：过不了 = 那一档 unavailable，不是卖价指令。

与 **optimization-advise** 的边界：该卡讲 Accept/Reject 机会成本；本卡讲 **gate ≠ public BAR**。对象互补，假尺子同族。不重写 optimization-advise。

---

## 6. Diagnose → Advise：hurdle/bid/LRV 被允许改什么

用户原话：「门槛价才是市场价，BAR 改成 399」「系统门槛 399，公开也得 399」「过不了 LRV 所以砍公开」「hurdle 多少 BAR 就多少」「Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 hurdle/bid/LRV 可售门 / RMS 建议卖价；
            ②拟议是「改尺 / 门槛价才是市场价 / 多少就跟 / 过不了所以砍」还是「hurdle 留在可售门、Hold 公开」；
            ③Pace / Remaining；这是可售门层还是要改公开尺。
  缺 hurdle% / LRV Fact / 本店 hurdle 字段 → 问，不编华住会门槛价 SOP。

Diagnosis
  hurdle/LRV 已经挂在可售门之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 屏当尺 vs RMS 建议 vs 嵌套 vs 限制 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆可售门 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P66 / P64 / P33 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住会门槛价 SOP / 默认 hurdle % / LRV Fact / EMSR Fact。

What To Watch
  公开 BAR 是否仍 Hold；hurdle/LRV 是否仍关在可售门；24h 公开 Pickup vs hurdle 是否被销售当成市场价
  不是「Hurdle Rates 把数配上了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C→P66 / D→P64·P33 / E Hurdle Rates/YMT/LRV 当 BAR Type / F→P05）走 **P85**，本卡**不重复 P85 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P86。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **hurdle / bid price / Last Room Value（可售门）**，还是要把 **公开 BAR 改成那个地板**？ | 混用尺；把可售门当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与 hurdle / LRV / bid 各是多少？是否其实是 RMS 建议卖价（→P66）？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA Hurdle Rates / Yield Market Type？是否 IDeaS LRV？是否先 open/closed 再 hurdle？ | 把可售门写成「已成新 BAR」 | **NV** → 先拆可售门，不编门槛 SOP |
| 4 | 拟议是 hurdle 留在可售门、Hold 公开，还是改写公开尺 / 门槛价才是市场价 / 多少就跟 / 过不了所以砍？ | 误入本卡 / P66 / P64 | **NV** |
| 5 | 本店 hurdle/RMS 字段 / 华住会门槛价 SOP / hurdle% / LRV 怎么走？ | 发明华住 SOP；或把 Vendor 例当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是 RMS 建议卖价（→P66）；是不是嵌套低档仍开（→P64）；是不是堆限制（→P33）；真 Behind leftover（→P05）。**hurdle %、LRV Fact、EMSR Fact、佣金%、699、华住会门槛价 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| hurdle / LRV 就是公开 BAR | BAR = 无资格公开灵活。hurdle/LRV = 可售门 value |
| 门槛价才是市场价所以 BAR→399 | 可售门地板 ≠ 战略尺。拒绝 |
| hurdle 多少 BAR 就多少 | display/不可售条件 ≠ Brand.com 栅格 |
| 过不了 LRV 所以砍公开 | 那一档 unavailable ≠ 改尺令 |
| 系统门槛 399 公开也得 399 | 混尺。Hold 公开 |
| Hurdle Rates 屏配了所以公开尺改完 | 可售门过程 ≠ BAR Type |
| Yield Market Type 195/200 就是我们的两档 BAR | 多 hurdle 标签 ≠ BAR Type；Vendor 示意 NOT China Fact |
| EXTERNAL SYSTEM FOR HURDLE RATE 开了所以公开跟外系统 | 外系统选型 ≠ 改写公开灵活 |
| Delta/Ceiling/Max Rooms Sold 就是定价曲线 | 可售机械 ≠ BAR |
| Restriction Publication / FPLOS 就是改 BAR | 渠道限制机械 ≠ BAR Type |
| RMS 建议也是 399 所以跟 hurdle | **P66**；不要与 hurdle 混 |
| 低档还开着所以用 hurdle 砍 BAR | **P64** |
| 反正空，按 hurdle 地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住会门槛价 SOP 就能 Advise | **禁止。** hurdle % / LRV Fact NV |
| 把 optimization-advise 机会成本句子改成「所以 BAR=hurdle」 | **禁止。** 机会成本 ≠ 公开尺；不重写该卡 |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P85 `cases/sim-2026-hurdle-lrv-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
hurdle / LRV                 = 399（不是新 BAR；可售门 Simulation）
销售拟议                     = 「门槛价才是市场价 / hurdle 多少就跟 / 过不了 LRV 所以砍」砍 BAR 到 399
```

读法（与 P85 同句）：399 是被拒绝的 hurdle/LRV 改尺，不是 BAR。Advise：拆公开 vs hurdle/LRV vs RMS 建议卖价；**Hold 779–799 首选 799**；拒 dump **399**；hurdle 留在可售门；hurdle % / LRV Fact **NV**。不要用 OPERA 195/200/80/90 当 sim 数字。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/hurdle 默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-31 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| hurdle 要达到才 display；= bid prices or opportunity costs；先 open/closed | **A Vendor PMS** | **Known 可售门。** ≠ BAR Type | OPERA Configuring Hurdle Rates（**§92/§93 升核**）+ About Hurdle Rates（**§93 新开**） |
| Yield Market Type = 多 hurdle 标签 | **A Vendor PMS** | **Known 标签。** ≠ BAR Type | OPERA Configuring Yield Market Type（**§92/§93**） |
| YIELD MARKET TYPES / EXTERNAL SYSTEM FOR HURDLE RATE 控制 | **A Vendor PMS** | **Known 开关。** ≠ BAR Type | OPERA Controls Rate Management（**§93 新开**） |
| LRV not the price you should sell；value not a selling rate | **A Vendor RMS** | **Known value ≠ 卖价** | IDeaS Dr. Ravi + Developers LRV（**§92/§93 升核**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§93 升核**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P85 + Pace 闸 | — |
| 本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact / EMSR Fact | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 *About Hurdle Rates* + *OPERA Controls — Rate Management*（YIELD MARKET TYPES / EXTERNAL SYSTEM FOR HURDLE RATE）。升核/复核：OPERA Configuring Hurdle Rates + Yield Market Type + IDeaS Dr. Ravi + Developers LRV + HSMAI BAR。指针：Hurdle Rates Evaluation for Restriction Publication（渠道限制机械 ≠ BAR Type）。华住会门槛价 SOP **未开、不编**。STR hurdle 桶 **不发明**。押金仍 leftover，不开。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-HR-01 | 本店 hurdle/RMS 字段 / 是否真有 OPERA Hurdle Rates / IDeaS LRV | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-HR-02 | 本店默认 hurdle % / LRV Fact / EMSR Fact / 佣金% | **NV。** hurdle 不是改尺令 |
| NV-HR-03 | 399 来源（门槛话术 / LRV / RMS 建议 / 销售跟价） | **NV。** 先 Hold 公开 BAR；若其实是建议卖价 → P66 |
| NV-P85-01… | P85 已挂（华住会门槛价 / hurdle % / LRV Fact） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 08:17 CST | 首版。T-Hurdle = hurdle/bid/LRV 是可售门/机会成本，不是公开 BAR。三把尺；Hurdle Rates/YMT/Controls/LRV≠定价权；门槛价才是市场价≠改尺令；P66/P64/P33/P05 孪生；假尺子一族；与 optimization-advise 分工（不重写）；不重复 P85 六形。**不写 P86。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P85 正文；P85 仅头一行，邻卡仅文末一行）

- **P85** `advisor-playbooks/hurdle-bid-lrv-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-to-hurdle.md`：复用，不重写。
- **轻指标** `metrics/hurdle-vs-public-bar.md`：公开 BAR vs hurdle/LRV gap；无默认 hurdle %。本卡不重写公式。
- **optimization-advise** `theory/optimization-advise.md`：机会成本 Accept/Reject 语言。**不重写。** 本卡 = gate ≠ public BAR。
- **P66**：RMS 建议卖价。本卡 / P85 = 要把公开尺写成/跟到 hurdle 地板。
- **P64**：嵌套低档开/关。邻「关低≠涨 BAR」，不是 hurdle 可售门。
- **P33**：限制过度。邻「堆限制」，不是 hurdle。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正 hurdle≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P86。禁止编华住会门槛价 SOP、默认 hurdle %、LRV Fact、EMSR Fact、佣金%、699。禁止开押金专剧。禁止把 STR hurdle 桶写成 Fact。禁止重写 optimization-advise。**

> 源指针（2026-08-31 12:17 R31-12，不改正文）：§95 互补为 P86（Cloudbeds Deposit + Apaleo Authorizations）；本卡 hurdle 核仍 §92/§93 指针。三句 / 399-rejected / 799-Hypothesis **不改**。头「押金 leftover」= 08:17 **槽序**（10:17 已关为 P86），不改正文「修」。不规定 P87。
> 交叉指针（2026-08-31 16:17，不改正文）：押金/预授权 Diagnose 走 **T-Deposit**，过程仍 **P86**。本卡 hurdle 核仍 §92/§93。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本卡 hurdle 核仍 §92/§93。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-02 16:17，不改正文）：Rate Floor / Min·Max / 品牌底 Diagnose 走 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**。本卡 hurdle/LRV 可售门 **≠** schedule floor。三句 / 399 / 799 **不改**。不开 P88。
