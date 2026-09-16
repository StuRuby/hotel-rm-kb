# Rack / 门市·挂牌·牌价 vs Public BAR｜门市是年/季基准，不是今晚公开灵活尺

> 资产：T-Rack / T03-16（Rack / 门市·挂牌·牌价 reference base 被允许改什么）· **≠ T-Floor**（`theory/rate-floor-vs-bar.md` = schedule floor / Min·Max）· **≠ T-Restriction**（MaxLOS/CTD/CTA 可售过滤）· **≠ T-Corp**（年标/议价）· **≠ T-Component**（组合套房/房池库存）· **≠ T-Tax**（税展示/城市税）· **≠ T-Hurdle**（gate/LRV）
> 路径：`theory/rack-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-03
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A 协会词条（HSMAI *Rack rate*：年/季房型标准基准；其他价从 Rack 算折扣/溢价 — **§127 打开升级 / §128 升核**；基准词条 ≠ dump）；A 协会词条（HSMAI *BAR* / *Best Available Rate*：non-qualified publicly available；**BAR replaced Rack Rates** as RM evolved — **§67/§127→§128 升核**）；A Vendor PMS（Protel Air *Advanced pricing*：Rate type Rack / Normal / Negotiated / Comp / House use — **§127→§128 升核**；Rack 类型 ≠ House use ≠ 公开 BAR rewrite）；A Vendor PMS（OPERA Cloud 26.2 *About Best Available Rates* — **§115/§127 指针 / §128 指针**；BAR 模型 ≠ Rack dump）；C 厂商博文（Lighthouse rack-rate-definition — **§127 登记**；口语混用风险 only，不当 A 核）；C 实践综述（AltexSoft hotel-rates — **§69/§127 指针**；不当 A 核）
> 配套：`advisor-playbooks/high-demand-day.md`（**P01 过程·高峰/公开 BAR**）· `advisor-playbooks/nested-rate-class.md`（**P64 过程·嵌套价类**）· `theory/rate-floor-vs-bar.md`（**T-Floor 移交·地板/Min·Max**）· `cases/sim-2026-rack-vs-bar-sat.md`（**C03-18 Simulation**）· 无新 playbook / 无新轻指标（短例仍见 §9）
> 交叉：P05 真弱 leftover · P02 Low Demand · P45 早会 · Blackout/Yieldable/Seasonal/Children 仅一行 handoff → T-Corp / T-Extra（本卡不当核）· T-Floor / T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：§1 问公开尺 / 价类 · O 价表基准 vs 公开灵活（过程路由已够；本卡给「为什么 Rack/门市不是公开 BAR、基准不是砍价令」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / Rate Type 屏 / OTA，不自动改价，不代改门市。**
> 状态：**理论 drafted**（2026-09-03 16:17 CST）；**Simulation drafted**（2026-09-03 18:17 CST · C03-18）。**不写 P88，不写 P89，不写新剧本，不开 Pet/AAA。** 过程仍 **P01**（高峰/公开 BAR）+ **P64**（嵌套价类）+ handoff **T-Floor**（地板/Min·Max）。禁止：编华住门市/Rack SOP / 默认门市→BAR % / 699 / Walk $ / 佣金%；一夜 −15%；BAR→399「门市虚高所以砍 / 跟门市对齐 / 牌价就是市场价 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿」；把 14/399/799 当市场 Fact；把 Vendor 例当中国 Fact；重写 T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework **正文三句**；重写 P01–P87 正文（邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Floor / T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle**；造 systems/*.md。

---

## 0. 一句话

**Rack / 门市·挂牌·牌价是年/季房型参考基准（reference base），不是改写今晚公开灵活 BAR 到 399 的许可证。BAR replaced Rack 作为动态公开尺；门市虚高所以砍 ≠ 定价权。**
厂商能配 Rate type Rack、能把 Rack 设成询价默认、能挂 Normal / Negotiated / Comp / House use——只证明「价码类型怎么分、默认询价显示什么」，不证明「公开灵活价该写成 399」。协会能把 Rack 钉成年/季房型标准基准、把 BAR 钉成 non-qualified publicly available 并写明 **BAR replaced Rack Rates**——只证明「基准词条 ≠ 今晚公开尺」「演进不是砸穿许可证」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿」把 BAR 改写成 399。高峰公开尺 → **P01**。嵌套/低档忘关 → **P64**。地板/Min·Max/品牌底 → **T-Floor**。真弱 → **P05/P02**（可有窗围栏，仍禁一夜 −15%，仍不从门市基准改写 BAR）。本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % = **全部 NV**。Blackout / Yieldable / Seasonal / Children 本卡不当核（一行 handoff → T-Corp / T-Extra）。Pet/AAA 仍停车。

```
Naive（禁止）     门市价就是市场价；牌价虚高所以砍到 399；
                  跟门市对齐；Rack 屏就是公开价；BAR replaced Rack 所以旧门市该砸穿
本卡              先拆三把尺（公开 BAR / Rack·门市 reference / Pace·Remaining·nested class）。
                  HSMAI Rack + BAR replaced Rack + Protel Rack type ≠ 定价权。过程走 P01 + P64（+ T-Floor handoff）。
```

完成标准：用户说「门市价就是市场价」「牌价虚高所以砍到 399」「跟门市对齐」「Rack 屏就是公开价」「BAR replaced Rack 所以旧门市该砸穿」「门市虚高所以 BAR→399」→ Situation 写成**三把尺 + Pace/Remaining + 这是年/季基准还是要改公开**；Diagnosis 写门市不是公开 BAR、配置屏不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、嵌套低档是否先关、地板是否误入。**不 dump 399、不把门市写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 **P01** + **P64** **同一套过程路由**，本卡只把「Rack / 门市·挂牌·牌价」说清楚，**不另发明第四条定价规则**）：

```
1. 先问这是 Rack/门市年·季基准 vs 公开灵活 BAR，还是要把公开灵活 BAR 改成 399「门市虚高所以砍 / 跟门市对齐」。门市 ≠ 公开尺。本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「牌价虚高所以砍 / BAR replaced Rack 所以砸穿」。
3. 高峰公开尺 → **P01**。嵌套/低档忘关 → **P64**。地板/Min·Max → **T-Floor**。真弱 → **P05/P02**（可围栏+截止日，仍禁一夜 −15%、仍不从门市基准改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**Rack / 门市回答的是「年/季房型标准基准是多少、其他价从哪算折扣/溢价」，不是「今晚公开灵活该卖多少」。** 它回答「基准/牌价/询价默认类型」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把门市写成新 BAR。禁止编华住门市/Rack SOP。禁止编默认门市→BAR %。禁止编 699。禁止编 Walk $。禁止把 Vendor 例当中国 Fact。**

**命名钉死：T-Rack ≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** T-Rack = 门市/Rack 年·季基准专精；T-Floor = schedule floor/Min·Max；T-Restriction = 可售限制/停留控制；T-Corp = 年标/议价；T-Component = 组合套房/房池库存；T-Tax = 税展示/城市税；T-Hurdle = gate/LRV。过程交 **P01** + **P64**（+ **T-Floor** handoff）。

---

## 1. 三把尺：Public BAR / Rack·门市 reference / Pace·Remaining·nested class

顾问问题不是「系统里有没有 Rack / 门市」，是：**屏幕上这个门市/Rack，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05/P02（仍这把尺） | 当成「门市虚高所以 dump」令；砍到 399 |
| **Rack · 门市 reference** | HSMAI 年/季房型标准基准；Protel Rate type Rack（询价默认）；挂牌/牌价话术 | 可留在基准/价类层；不当新 BAR；折扣/溢价从基准算（词条义） | 写成今晚公开 BAR；用 399 锚市场 |
| **Pace · Remaining · nested class** | Pickup Pace、剩余、嵌套低档是否忘开 | → **P01** 高峰 / **P64** 嵌套 / **T-Floor** 地板 / **P05** 真弱 | 把「门市故事」读成「公开尺必须改」 |

```
Public_BAR                 = 799     # Simulation：公开灵活
Rack_reference             = 年/季房型标准 / Rate type Rack / 门市·挂牌  # Simulation：基准（不是新 BAR）
Pace_Remaining_Nested      = Pace + Remaining + nested class            # Simulation：过程输入 → P01/P64
Gap_story                  = 「门市虚高 / 跟门市对齐 / 牌价就是市场价」    # 尺在基准故事，不是必须折扣指令
Layer                      = public BAR | rack/门市 reference | pace/nested | floor→T-Floor | corp→T-Corp
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国门市默认。Protel / OPERA / Lighthouse Vendor·博文例 = **示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **基准层**：把「门市/牌价」读成「我们 BAR 就是 399」，或把「BAR replaced Rack」读成「旧门市该砸穿」，或把 Rate type Rack 屏混成定价按钮。

HSMAI BAR（A，§67/§127/§128）：BAR = **the non-qualified, publicly available rate**；**BAR replaced Rack Rates** as revenue management evolved and became more dynamic。**方向采用：Rack/门市不是今晚公开 BAR；演进不是砸穿许可证。**

---

## 2. Rack / BAR glossary + Rate type 是过程，不是定价权

厂商/协会把「Rack」做成**年/季基准 + 价码类型**。没有一家被打开的官方页把它写成「门市虚高就必须把公开灵活改写成 399」或「BAR replaced Rack 所以旧门市该砸穿」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| HSMAI *Rack rate*（§127/**§128 升核**） | Rack = standard price for a room type for the year or season；其他价从 Rack 算折扣/溢价（例：团 20% off；New Year 100% premium）；normally just the benchmark | **年/季房型基准词条。** ≠ dump 令；≠ 今晚公开 BAR |
| HSMAI *BAR* / *Best Available Rate*（§67/§127→**§128**） | BAR = non-qualified, publicly available；benchmark for discount/package；**BAR replaced Rack Rates** as RM evolved | **公开灵活尺。** 「replaced」= 演进到动态公开尺，**≠** 「旧门市该砸穿」 |
| Protel Air *Advanced pricing*（§127→**§128**） | Rate type：Rack（询价默认显示）/ Normal / Negotiated / Complimentary / House use / Null | **价码类型。** Rack ≠ House use ≠ Negotiated ≠ rewrite 公开 BAR |
| OPERA Cloud *About Best Available Rates*（§115/§127/**§128 指针**） | BAR pricing model；BAR by Day / by LOS / Best BAR by Day | **BAR 模型指针。** 加强 P01/P64；不当「门市 dump」核 |
| Lighthouse rack-rate-definition（§127） | 口语混用 Rack/BAR 风险 | **C 博文。** 不当 A 核；只作口语风险提醒 |
| AltexSoft hotel-rates（§69/§127） | Rack/BAR 方向综述 | **C。** 不当 A 核 |

```
画面：门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以砸穿
Naive：BAR 就是那个门市故事；能配 Rack type 所以改尺
本卡：Rack、门市、挂牌、牌价都是基准/类型过程。定价权在公开 BAR + Pace，不在门市按钮。
```

```
HSMAI Rack（年/季房型标准）     → reference base
HSMAI BAR（replaced Rack）      → 动态公开灵活尺  ← 本卡默认 Hold
Protel Rate type Rack           → 询价默认类型（≠ House use）
OPERA About BAR                 → BAR 模型指针
Public BAR                      → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住门市·Rack SOP / 默认门市→BAR % / 本店门市字段名 / 佣金% / 699 Fact = **NV，不编。** UI 字段是 Protel/OPERA 的，不是本店报表名。不把 Vendor/博文写成店规。

---

## 3. 「门市虚高 / 跟门市对齐 / 牌价就是市场价」是基准信号，不是改写许可证

过程仍走 **P01** + **P64**，本卡给 WHY（Rack / 门市专精），**不重复 P01/P64 正文，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P01 + P64 + T-Floor） |
| --- | --- | --- | --- |
| **A 拆门市基准 vs 公开 BAR** | 「门市/牌价/Rack 屏就是我们的公开价」 | 用基准层当尺 | **拆门市 vs 公开**；Hold 公开 BAR |
| **B BAR→399「门市虚高/跟门市对齐所以砍」** | 「牌价虚高，BAR 改 399」 | 把基准写成战略尺 | **拒绝 BAR→399** |
| **C Rack = 年/季基准，不是 rewrite** | 「BAR replaced Rack 所以旧门市该砸穿 / 牌价就是市场价」 | 把演进/基准当砸价杠杆 | **基准留基准**；Hold 公开；「replaced」≠ dump |
| **D 移交：高峰→P01；嵌套→P64；地板→T-Floor；真弱→P05/P02** | 「低档忘关 / 地板混淆 / 已证实高峰 / 真 Behind」 | 对象是邻过程 | **P01** Hold · **P64** 关低档 · **T-Floor** 地板 · **P05/P02** 真弱 |
| **E Vendor Rack type ≠ BAR Type** | 「能配 Rate type Rack / 询价默认所以改尺」 | 把配置当成 BAR Type | **配置 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按门市地板冲量」 | 需求弱 | **P05/P02**；可有窗围栏；仍不从门市基准改写 BAR；禁一夜 −15% |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 「门市虚高」 | 需求可能仍强；公开尺 **Hold**；先拆基准 vs 公开 | 「门市虚高所以 BAR→399」 |
| 嵌套 399 档仍开 | **P64**：关/限低档；BAR 不动 | 「跟门市对齐所以砍公开」 |
| 地板/Min·Max 混淆 | **T-Floor** handoff | 「门市=地板=公开 399」 |
| 「BAR replaced Rack」 | 公开尺已是 BAR；**Hold BAR**；门市留基准 | 「旧门市该砸穿」 |
| Behind + remaining 厚 | **P05/P02**：可有窗围栏；仍不从门市改写 BAR | 一夜 −15%；把门市故事永久化成公开尺 |

```
Rack / 门市 looks like a market price  → 基准信号（可加强拆尺 / Hold 公开）
Public BAR                             → 仍由 Pace / Remaining 定
Naive                                  → 「门市虚高 / 跟门市对齐所以 BAR→399」
本卡                                   → 年/季基准 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。过程→P01/P64。
```

---

## 4. Diagnose 边界：本卡 ≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle ≠ P05

几边都在「看起来卖不动 / 销售要跟砍」附近，对象不同。塌成「反正门市虚高所以砍」会开错杠杆。

| | **本卡 T-Rack** | **T-Floor** | **T-Restriction** | **T-Corp** | **P05/P02** |
| --- | --- | --- | --- | --- | --- |
| 对象 | Rack/门市年·季基准 | Rate Floor / Min·Max / 声明品牌底 | MaxLOS/CTD/CTA 可售过滤 | 年标/议价 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 公开 BAR vs 地板 | 公开 BAR vs 限制层 | 公开 BAR vs 协议层 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；地板留保护 | Hold；过度→松限制 | Hold；协议留协议 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；从门市 rewrite | 399；发明 699 | 399；从限制层 rewrite | 399；从年标 rewrite | 一夜 −15%；从门市故事永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是门市/Rack 基准，还是嵌套低档，还是地板，还是限制层，还是年标，还是套房池，还是 hurdle，还是真弱？** 高峰公开 → **P01**。嵌套 → **P64**。地板 → **T-Floor**。限制 → **T-Restriction**。年标 → **T-Corp**。套房池 → **T-Component**。hurdle → **T-Hurdle**。真弱 → **P05/P02**。要把门市叫 BAR / 要「门市虚高所以 dump」→ 本卡；过程仍 **P01** + **P64**。

Blackout / Yieldable / Seasonal / Children：**S03-14 leftover / FAIL**；本卡不当核；可选一行 handoff → **T-Corp** / **T-Extra**。

---

## 5. 假尺子一族

屏幕上的基准/类型工具被当成定价按钮：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **本卡 T-Rack** | 「门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价」 | **公开 BAR + Pace**；基准留基准，不是 dump 令 |
| **T-Floor** | 「地板=399所以公开也399」 | 公开 BAR + Pace；地板 ≠ BAR |
| **T-Restriction** | 「关了离店卖不动只能砍」 | 公开 BAR + Pace；限制 ≠ BAR |
| **T-Corp** | 「协议价才是市场价」 | 公开 BAR + Pace；年标 ≠ BAR |
| **T-Component / T-Tax / T-Hurdle / …** | （各卡画面） | 公开 BAR + Pace |

与 **T-Floor / T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle** 的边界：地板是价表保护；Restriction 是可售过滤；Corp 是协议层；Component 是库存扣减；税是展示/过账；Hurdle 是可售门/LRV。本卡是 **门市/Rack 年·季基准专精**。对象不同，假尺子同族；**过程交 P01 + P64**（+ T-Floor）。

---

## 6. Diagnose → Advise

用户原话：「门市价就是市场价」「牌价虚高所以砍到 399」「跟门市对齐」「Rack 屏就是公开价」「BAR replaced Rack 所以旧门市该砸穿」「门市虚高所以 BAR→399」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Rack / 门市·挂牌·牌价；
            ②拟议是「改尺 / 跟门市对齐 dump / 门市虚高砍公开」还是「Hold 公开 + 先拆基准 vs 公开」；
            ③Pace / Remaining / nested class；这是基准层还是要改公开尺。
  缺本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % → 问，不编。

Diagnosis
  门市/Rack 挂上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 嵌套 vs 地板 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆门市 vs 公开 + Hold 公开 BAR；嵌套 → P64；地板 → T-Floor
    (4) 是否先拆 T-Floor / T-Restriction / T-Corp / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住门市·Rack SOP / 默认门市→BAR %。
  **Ahead 夜：Rack / 门市不被允许把公开 BAR 改写成 399。**

What To Watch
  公开 BAR 是否仍 Hold；嵌套低档是否先关（若忘开）；是否误入地板；24h 公开 Pickup vs 「门市虚高」故事（分看）
  不是「门市/Rack 对完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**（779–799 首选 **799**）；嵌套低档 → **P64**；地板 → **T-Floor**；真 Behind 且 remaining 厚 → **P05/P02**，理由写 Pace，尺仍是公开 BAR。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88。**

---

## 7. ask-list（全部 NV）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **Rack/门市年·季基准**，还是要把 **公开 BAR 改成门市地板**？ | 混用尺；把门市当公开价 | **NV** |
| 2 | 当前公开灵活 BAR 是多少？门市/挂牌/牌价字段名是什么？ | 会把基准故事当真弱砍价 | **NV** |
| 3 | 是否 Protel Rate type Rack？是否其实是地板（→T-Floor）或嵌套低档（→P64）或限制（→T-Restriction）或年标（→T-Corp）？ | 把配置写成「已成新 BAR」 | **NV** |
| 4 | 本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % 是什么？ | 会编默认 % / 华住 SOP | **NV。不编。** |
| 5 | Pace / Remaining / 嵌套低档是否仍开？ | 会误砍 BAR 或误留低档 | **NV** |
| 6 | 399 从哪来（门市话术 / 牌价话术 / Budget 抱怨 / 竞对截图）？ | 会把 399 当必须 | **NV。** 先 Hold 公开 BAR |
| 7 | 嵌套/地板已处理后是否仍 Behind？ | 会跳过 P64/T-Floor 直接砸价 | **NV** |

---

## 8. What To Watch（顾问可说出口）

1. **公开 BAR 是否仍 Hold**（779–799 首选 799；Simulation）。  
2. **嵌套低档是否先处理**（P64 关/限）；地板是否误入（T-Floor）。  
3. **Pace / Remaining** 是否分看。  
4. **24h 净 Pickup**：公开尺 vs 「门市虚高」故事分看。  
5. **是否误入** T-Floor / T-Restriction / T-Corp / T-Component / T-Hurdle。  
6. **NV 是否仍 NV**：华住门市·Rack SOP、默认门市→BAR %、699、Walk $。

不是：「门市/Rack 对完了就算改完 BAR」。

---

## 9. 短例（Simulation only；非本店 Fact）

| 夜 | 公开 BAR | 门市故事 | Pace | 默认 |
| --- | --- | --- | --- | --- |
| Sat Ahead | **799** | 「门市虚高所以砍到 399」 | Ahead | **Hold 799**；拆门市 vs 公开；**拒 399** |
| Sat Ahead + 嵌套开 | **799** | 门市话术 + OTA 仍挂 399 档 | Ahead | **P64** 关/限 399 档；**Hold 799** |
| 地板混淆 | **779–799** | 「门市=地板所以公开 399」 | Ahead | **T-Floor** handoff；**拒 399** |
| 「BAR replaced Rack」误读 | **799** | 「旧门市该砸穿」 | 压缩 | **Hold**；replaced ≠ dump；**拒 BAR→399** |
| 真弱 | **799→围栏** | 「反正空，按门市地板冲量」 | Behind | **P05/P02**；有窗；**禁一夜 −15%**；仍不从门市改写 |

14 / 399 / 799 = **Simulation only**。**399 = 被拒绝的 dump（门市基准改尺）**。**799 = Hypothesis/Simulation Hold 首选**。**不发明 699**。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-RACK-01 | 本店是否真有 Rack/门市/挂牌字段；字段名是什么 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-RACK-02 | 本店门市 vs BAR 关系 / 是否仍用年·季牌价 | **NV。不编默认门市→BAR %。** |
| NV-RACK-03 | 华住门市/Rack SOP / 集团牌价表 | **NV。不编。** |
| NV-RACK-04 | 399 来源（门市话术 / 牌价话术 / Budget / 竞对） | **NV。** 先 Hold 公开 BAR |
| NV-RACK-05 | Walk $ / 佣金% | **禁止采用为 China Fact。** |
| NV-P01/P64… | P01 / P64 已挂 | 仍按其 NV |

Watch：公开 BAR 是否仍 Hold；嵌套是否先关；误入 T-Floor/T-Restriction/T-Corp/P05 是否已移交。

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-03 16:17 CST | 首版。T-Rack = Rack / 门市·挂牌·牌价 vs public BAR。**≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 三把尺；HSMAI Rack + BAR replaced Rack + Protel Rack type + OPERA About BAR 指针 ≠ 定价权；形 A–F；假尺子一族。**不写 P88/P89。** 14/399/799 Simulation only。399 = 被拒绝的 dump。过程仍 **P01** + **P64** + handoff **T-Floor**。S03-14 scout fail for NEW playbook **不阻挡** 理论加深。 |

---

## 12. 交叉（不改 P01–P87 正文；T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework 仅文末一行或不改；邻卡仅文末一行）

- **P01** `advisor-playbooks/high-demand-day.md`：高峰/公开 BAR 过程主剧。**本卡给「为什么 Rack/门市」与 Diagnose 尺**，三句同一套（门市措辞）。
- **P64** `advisor-playbooks/nested-rate-class.md`：嵌套价类过程。关低 ≠ 涨 BAR；本卡不重写。
- **T-Floor** `theory/rate-floor-vs-bar.md`：地板/Min·Max 移交。
- **T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle**：假尺子同族、对象不同。
- **P05 / P02 / P45**：Ahead Hold 公开 BAR；真弱才 leftover；早会一个动作通常是纠正门市≠BAR + Hold，不是改尺。
- **Blackout / Yieldable / Seasonal / Children**：S03-14 leftover；本卡不当核；handoff T-Corp / T-Extra。
- **禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88/P89。禁止编华住门市·Rack SOP、默认门市→BAR %、佣金%、Walk $。禁止把 Vendor/博文当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advice。禁止造 systems/*.md。禁止把 T-Rack 叫成 T-Floor / T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle。**

> 指针（2026-09-03 16:17，不改正文邻卡）：§128 升核 HSMAI Rack + HSMAI BAR replaced Rack + Protel Rack type；OPERA About BAR 指针。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor** handoff）。三句 / 399 / 799 **不改邻卡正文**。不规定 P88。不规定 P89。

> 指针（2026-09-03 18:17 C03-18，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-rack-vs-bar-sat.md`。Diagnose 走 **T-Rack**；过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699；§129。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
