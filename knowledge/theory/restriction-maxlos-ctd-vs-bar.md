# MaxLOS / CTD / CTA Restriction Layer vs Public BAR｜限制层是可售过滤，不是公开 BAR

> 资产：T-Restriction / T03-08（MaxLOS / CTD / CTA / Closed-for-Departure restriction layer 被允许改什么）· **≠ T-Floor**（`theory/rate-floor-vs-bar.md` = schedule floor / Min·Max）· **≠ T-Component**（组合套房/房池库存）· **≠ T-Tax**（税展示/城市税）· **≠ T-Hurdle**（gate/LRV）
> 路径：`theory/restriction-maxlos-ctd-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-03
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A 协会词条（HSMAI *Maximum Length of Stay*：room inventory control；到达日不可超过若干晚 — **§123 升核 / §124**；限制词条 ≠ dump）；A 协会词条（HSMAI *Closed to Arrival*：不可确认该到达日 — **§123 升核 / §124**；CTA ≠ BAR rewrite）；A 协会词条（HSMAI *Minimum Length of Stay* — **§123 同族 / §124 指针**；加强 P21/P33）；A Vendor PMS（OPERA Cloud 26.2 *Restrictions*：Closed for Departure / Maximum Length of Stay 等 — **§106→§123→§124 升核**；限制层 ≠ BAR Type）；A Vendor PMS（OPERA *Managing Restrictions*：precedence 含 Closed to Departure / Max LOS — **§106→§123→§124 升核**）；A Vendor PMS（Apaleo *Rate Plans*：Min/Max LOS / Closed on Arrival / Closed on Departure / Master Closed — **§107 指针 / §124 升核用途**；可售限制 ≠ dump）；A Vendor PMS（Clock *Rate Restrictions*：Min/Max stay / Closed — **§118 同族 / §124 升核用途**）；A Methodology（eCornell IMPACT *Dos and Don'ts of Length of Stay*：MaxLOS/CTA  sparingly；须有足够长住需求 — **既有源表 / §124 用途升核**）；B Vendor（Lighthouse *Guide to hotel stay restrictions*：CTA 可反噬；MaxLOS sparingly；when in doubt don't — **既有 / §124 用途升核**）；A Vendor 词表（IDeaS Max LOS glossary hub — **§123 / §124 指针**）；A 协会（HSMAI BAR = non-qualified publicly available — **§67 / §123 / §124 指针**）；FAIL（HSMAI *closed-to-departure* / *closed-for-departure* glossary — **404**，**不当新核**）
> 配套：`advisor-playbooks/restriction-overuse.md`（**P33 过程·限制过度**）· `recommendations/do-not-cut-when-restricted.md`（主决策卡复用，不重写公式）· `advisor-playbooks/stay-pattern.md`（**P40 移交·停留模式**）· `advisor-playbooks/holiday-minlos.md`（**P21 移交·已证实 Peak MinLOS**）· `restrictions/restriction-framework.md`（框架指针，**正文三句不改**）· 无新 playbook / 无新轻指标 / **Simulation** `cases/sim-2026-restriction-maxlos-ctd-sat.md`（C03-10；短例仍见 §9）
> 交叉：P05 真弱 leftover · P02 Low Demand · P01 Ahead · P45 早会 · Waitlist/Pseudo 仅 S03-06 leftover 一行 handoff · T-Floor / T-Component / T-Tax / T-Hurdle / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee（假尺子一族）
> 问题树：§1 问 7 / §1.A.3 · O8 Restriction（过程路由已够；本卡给「为什么 MaxLOS/CTD/CTA/Closed-for-Departure 不是公开 BAR、可售过滤不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / Restrictions 屏 / OTA，不自动改价，不代改限制。**
> 状态：**理论 drafted**（2026-09-03 08:17 CST）。**不写 P88，不写 P89，不写新剧本，不开 Pet/AAA。** 过程仍 **P33**（过度→先松限制）+ handoff **P40** / **P21**。禁止：编华住 MaxLOS/CTD SOP / 默认限制常模 / 候补转化率 / 699 / Walk $ / 佣金%；一夜 −15%；BAR→399「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍」；把 14/399/799 当市场 Fact；把 Vendor 例当中国 Fact；重写 T-Floor / T-Component / T-Tax / T20 / optimization-advice / restriction-framework **正文三句**；重写 P01–P87 正文（邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Floor / T-Component / T-Tax / T-Hurdle**；造 systems/*.md。

---

## 0. 一句话

**MaxLOS / CTD / CTA / Closed-for-Departure 是 restriction / inventory-control 层（谁能订哪个到达日/连住），不是改写公开灵活 BAR 到 399 的许可证。过度限制 → 先松限制（P33），不要 dump BAR。**
厂商能开 Closed for Departure、能配 Maximum Length of Stay、能挂 Closed to Arrival / MinLOS、能在 Apaleo/Clock 配 Rate Plan restrictions——只证明「可售怎么过滤、到达/离店/连住怎么挡」，不证明「公开灵活价该写成 399」。协会能把 MaxLOS/CTA 钉成 inventory control 词条、把 BAR 钉成 non-qualified publicly available——只证明「限制词条 ≠ BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / 限制屏就是公开价表」把 BAR 改写成 399。过度限制 → **P33**（先松，不砍 BAR）。停留模式（Sat-only 等）→ **P40**。已证实 Peak MinLOS 保护 → **P21**（不解高峰 MinLOS）。真弱且限制已松 → **P05/P02**（可有窗围栏，仍禁一夜 −15%，仍不从限制层改写 BAR）。本店限制常模 / 华住 MaxLOS·CTD SOP = **全部 NV**。Waitlist / Pseudo 仍 S03-06 leftover（本卡仅一行 handoff，不当核）。Pet/AAA 仍停车。

```
Naive（禁止）     关了离店卖不动只能砍；MaxLOS太紧所以dump；
                  CTA开着所以公开也跟着砍；限制屏就是公开价表
本卡              先拆三把尺（公开 BAR / MaxLOS·CTD·CTA·Closed-for-Departure 限制层 / Pace·Remaining·Peak vs Shoulder）。
                  OPERA Restrictions + HSMAI MaxLOS/CTA + Apaleo/Clock Rate Restrictions ≠ 定价权。过程走 P33（+ P40/P21 handoff）。
```

完成标准：用户说「关了离店卖不动只能砍」「MaxLOS太紧所以dump」「CTA开着所以公开也跟着砍」「限制开着 OCC 假低所以 BAR→399」「Closed for Departure 屏就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是可售过滤还是要改公开**；Diagnosis 写限制层不是公开 BAR、配置屏不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、限制是否先松、Peak/肩日是否分看。**不 dump 399、不把限制层写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 **P33** **同一套过程路由**，本卡只把「MaxLOS / CTD / CTA / Closed-for-Departure」说清楚，**不另发明第四条定价规则**）：

```
1. 先问这是 MaxLOS / CTD / CTA / Closed-for-Departure 过度过滤需求，还是要把公开灵活 BAR 改成 399「关了离店/限制太紧所以砍」。限制层 ≠ 公开尺。本店限制常模 / 华住 MaxLOS·CTD SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「关了离店卖不动只能砍 / MaxLOS太紧所以dump」。
3. 过度限制 → **P33**（先松限制，不砍 BAR）。停留模式 → **P40**。已证实 Peak MinLOS 保护 → **P21**。真弱且限制已开 → **P05/P02**（可围栏+截止日，仍禁一夜 −15%、仍不从限制层改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**MaxLOS / CTD / CTA / Closed-for-Departure 回答的是「谁能订哪个到达/离店/连住」，不是「今晚公开灵活该卖多少」。** 它回答「到达日是否关闭 / 最长连住几天 / 离店日是否关闭」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把限制层写成新 BAR。禁止编华住 MaxLOS/CTD SOP。禁止编默认限制常模。禁止编候补转化率。禁止编 699。禁止编 Walk $。禁止把 Vendor 例当中国 Fact。**

**命名钉死：T-Restriction ≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** T-Restriction = 可售限制/停留控制专精；T-Floor = schedule floor/Min·Max；T-Component = 组合套房/房池库存；T-Tax = 税展示/城市税；T-Hurdle = gate/LRV。过程交 **P33**（+ **P40** / **P21** handoff）。

---

## 1. 三把尺：Public BAR / MaxLOS·CTD·CTA·Closed-for-Departure 限制层 / Pace·Remaining·Peak vs Shoulder

顾问问题不是「系统里有没有 MaxLOS / CTD / CTA」，是：**屏幕上这个限制，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱且限制已松才 P05/P02（仍这把尺） | 当成「限制开着所以 dump」令；砍到 399 |
| **MaxLOS / CTD / CTA / Closed-for-Departure** | OPERA Closed/CTA/CTD/Min·Max LOS；Apaleo/Clock Rate Plan restrictions；HSMAI 词条 | 可留在可售过滤层；过度→松限制（P33）；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Pace · Remaining · Peak vs Shoulder** | 到达/连住 Pace、剩余、Peak 是否已证实、肩日是否被误伤 | → **P33** 过度 / **P40** 停留 / **P21** Peak MinLOS / **P05** 真弱 | 把「限制挡完后的假弱」读成「公开尺必须改」 |

```
Public_BAR                 = 799     # Simulation：公开灵活
Restriction_layer          = MaxLOS / CTD / CTA / Closed-for-Departure  # Simulation：可售过滤（不是新 BAR）
Pace_Remaining_Peak        = Pace + Remaining + Peak/Shoulder           # Simulation：过程输入 → P33/P40/P21
Gap_story                  = 「关了离店卖不动 / MaxLOS太紧 / CTA开着」    # 尺在限制故事，不是必须折扣指令
Layer                      = public BAR | restriction (MaxLOS/CTD/CTA) | pace/peak-shoulder | stay-pattern | hurdle→T-Hurdle
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国限制默认。OPERA / Apaleo / Clock / eCornell / Lighthouse Vendor·课例 = **示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **限制层**：把「限制开着 OCC 看起来低」读成「我们 BAR 就是 399」，或把「关了离店」读成「公开必须砍」，或把 Restrictions 屏混成定价按钮。

HSMAI BAR（A，§67/§123/§124）：BAR = **the non-qualified, publicly available rate**。**方向采用：MaxLOS / CTD / CTA / Closed-for-Departure 不是 BAR。**

---

## 2. Restrictions / Rate Plan stay controls 是过程，不是定价权

厂商把「停留限制」做成**可售过滤 + 到达/离店/连住闸**。没有一家被打开的官方页把它写成「关了离店就必须把公开灵活改写成 399」或「MaxLOS 太紧所以公开尺跟砍」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| HSMAI *Maximum Length of Stay*（§123/**§124 升核**） | room inventory control；到达日不可超过若干晚 | **库存/可售控制词条。** ≠ dump 令；≠ BAR Type |
| HSMAI *Closed to Arrival*（§123/**§124 升核**） | 不可确认该到达日 | **到达闸。** ≠ rewrite 公开灵活 |
| HSMAI *Minimum Length of Stay*（§123/**§124 指针**） | 到达日最少晚数 | **同族 MinLOS**；加强 P21/P33；不当本卡第三核主核 |
| OPERA Cloud 26.2 *Restrictions*（§106→§123→**§124**） | Closed / Closed to Arrival / Closed for Departure / Min·Max LOS 等 availability restrictions | **可售限制层。** ≠ BAR Type；≠ rewrite |
| OPERA *Managing Restrictions*（§106→§123→**§124**） | 管理限制；precedence 含 Closed to Departure / Max LOS | **配置/优先级过程。** ≠ 定价权 |
| Apaleo *Rate Plans*（§107/**§124 升核用途**） | Min/Max LOS / Closed on Arrival / Closed on Departure / Master Closed | **Rate Plan 可售限制。** ≠ dump 公开 BAR |
| Clock *Rate Restrictions*（§118/**§124 升核用途**） | Min/Max stay / Closed | **可售限制 ≠ BAR** |
| eCornell IMPACT *Dos and Don'ts of LOS*（既有/**§124 用途升核**） | 高需求后接低需求拒短住须有足够长住需求；MaxLOS 打进入高峰前折扣长住；CTA 须极高需求 | **方法论：慎用。** ≠ 「限制开着所以砍 BAR」 |
| Lighthouse *Guide to hotel stay restrictions*（既有/**§124 用途升核**） | CTA 可反噬「周六到住两晚」；MaxLOS sparingly；when in doubt don't restrict | **B Vendor 博文。** ≠ 定律；≠ dump 令 |
| IDeaS Max LOS glossary（§123/**§124 指针**） | Max LOS = inventory control on arrival date | **词条 ≠ 改尺** |
| HSMAI *BAR*（§67/**§124**） | BAR = non-qualified, publicly available | 限制层 **不是 BAR** |
| HSMAI *closed-to-departure* / *closed-for-departure* glossary | — | **本小时 FAIL 404** — **不当新核**（CTD 靠 OPERA/Apaleo 钉） |

```
画面：关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / 销售说「Restrictions 屏就是公开价」
Naive：BAR 就是那个限制故事；能配 MaxLOS/CTD/CTA 所以改尺
本卡：MaxLOS、CTD、CTA、Closed-for-Departure 都是过程。定价权在公开 BAR + Pace，不在限制按钮。
```

```
OPERA Closed / CTA / Closed for Departure / Min·Max LOS  → 可售过滤
Apaleo Min/Max LOS / CTA / CTD / Master Closed           → Rate Plan 限制
Clock Min/Max stay / Closed                              → Rate Restrictions
HSMAI MaxLOS / CTA / MinLOS                              → 协会词条（≠ BAR）
Public BAR                                               → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 MaxLOS·CTD SOP / 默认限制常模 / 本店限制字段名 / 候补转化率 / 佣金% / 699 Fact = **NV，不编。** UI 字段是 OPERA/Apaleo/Clock 的，不是本店报表名。不把 Vendor/课例写成店规。

---

## 3. 「关了离店卖不动 / MaxLOS太紧 / CTA开着」是可售信号，不是改写许可证

过程仍走 **P33**（过度→先松），本卡给 WHY（MaxLOS / CTD / CTA / Closed-for-Departure 专精），**不重复 P33 正文，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P33 + P40/P21） |
| --- | --- | --- | --- |
| **A 拆限制层 vs 公开 BAR** | 「MaxLOS/CTD/CTA/Restrictions 屏就是我们的公开价」 | 用限制层当尺 | **拆限制 vs 公开**；Hold 公开 BAR |
| **B BAR→399「关了离店/MaxLOS太紧所以砍」** | 「限制开着 OCC 假低，BAR 改 399」 | 把过滤写成战略尺 | **拒绝 BAR→399** |
| **C CTD/CTA/MaxLOS = 可售过滤，不是 rewrite** | 「关了离店所以公开跟砍 / MaxLOS 就是地板价」 | 把过滤工具当定价杠杆 | **过滤留过滤**；Hold 公开；先问是否过度 |
| **D 移交：过度→P33；停留→P40；Peak MinLOS→P21；真弱→P05/P02** | 「肩日被 Peak MinLOS 盖住 / Sat-only / 已证实高峰要护 / 限制已松仍空」 | 对象是邻过程 | **P33** 先松 · **P40** 停留 · **P21** 守 Peak · **P05/P02** 真弱 |
| **E Vendor 限制屏 ≠ BAR Type** | 「能配 Restrictions / Rate Plan stay controls 所以改尺」 | 把配置当成 BAR Type | **配置 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按限制地板冲量」 | 需求弱且限制已开 | **P05/P02**；可有窗围栏；仍不从限制层改写 BAR；禁一夜 −15% |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 限制开着看起来「弱」 | 需求可能仍强；公开尺 **Hold**；先查是否过度过滤 | 「限制开着所以 BAR→399」 |
| 短住询单升、1 晚订不了 | **P33**：先松 MinLOS/CTA；BAR 不动 | 「OCC 低所以砍 BAR」 |
| Peak MinLOS 盖到肩日 | **P33** 肩日解开；Peak 若已证实仍守（**P21**） | 「一律拆高峰 MinLOS」或「一律砍公开」 |
| Sat-only / 砍高峰迁就均价 | **P40** 停留模式 | 「用 BAR→399 迁就单晚」 |
| 已证实 Peak 被单晚掏空 | **P21** 守 MinLOS；不解高峰 | 「P33 把高峰也拆掉」 |
| Behind + 限制已 Open + 剩余厚 | **P05/P02**：可有窗围栏；仍不从限制层改写 BAR | 一夜 −15%；把限制故事永久化成公开尺 |

```
MaxLOS / CTD / CTA looks like a market price  → 可售信号（可加强拆尺 / Hold 公开 / 先松限制）
Public BAR                                   → 仍由 Pace / Remaining 定
Naive                                        → 「关了离店卖不动 / MaxLOS太紧所以 BAR→399」
本卡                                         → 可售过滤 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。过度→P33。
```

---

## 4. Diagnose 边界：本卡 ≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle ≠ P05

几边都在「看起来卖不动 / 销售要跟砍」附近，对象不同。塌成「反正限制开着所以砍」会开错杠杆。

| | **本卡 T-Restriction** | **T-Floor** | **T-Component** | **T-Hurdle** | **P05/P02** |
| --- | --- | --- | --- | --- | --- |
| 对象 | MaxLOS/CTD/CTA/Closed-for-Departure 可售过滤 | Rate Floor / Min·Max / 声明品牌底 | Component / suite-pool / Accessible | hurdle/bid/LRV 可售门 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 公开 BAR vs 地板 | 公开 BAR vs 库存层 | 公开 BAR vs gate | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799；过度→松限制 | Hold；地板留保护 | Hold；分看库存 | Hold；门留门 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；从限制层 rewrite | 399；发明 699 | 399；从 component OCC rewrite | 399；把门当公开 | 一夜 −15%；从限制故事永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是 MaxLOS/CTD/CTA 过滤，还是过度限制，还是停留模式，还是 Peak MinLOS，还是地板，还是套房池，还是 hurdle，还是真弱？** 过度 → **P33**。停留 → **P40**。Peak MinLOS → **P21**。地板 → **T-Floor**。套房池 → **T-Component**。hurdle → **T-Hurdle**。真弱且限制已松 → **P05/P02**。要把限制层叫 BAR / 要「关了离店所以 dump」→ 本卡；过程仍 **P33**。

Waitlist / Pseudo：**S03-06 leftover**；候补=未确认状态、伪房=non-inventory —— **不当本卡核**；可选一行 handoff 到 P43/P03/P05 / P51·T-Hall·P47·P37。

---

## 5. 假尺子一族

屏幕上的可售过滤工具被当成定价按钮：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **本卡 T-Restriction** | 「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以 399」 | **公开 BAR + Pace**；过度先松限制（P33），不是 dump 令 |
| **T-Floor** | 「地板=399所以公开也399」 | 公开 BAR + Pace；地板 ≠ BAR |
| **T-Component** | 「套房池空了所以 399」 | 公开 BAR + Pace；库存 ≠ BAR |
| **T-Tax / T-Fee / …** | （各卡画面） | 公开 BAR + Pace |
| **T-Hurdle** | 「门槛价才是市场价」 | 公开 BAR + Pace；gate ≠ BAR |

与 **T-Floor / T-Component / T-Tax / T-Hurdle** 的边界：地板是价表保护；Component 是库存扣减；税是展示/过账；Hurdle 是可售门/LRV。本卡是 **停留/到达/离店可售限制专精**。对象不同，假尺子同族；**过程交 P33**（+ P40/P21）。

---

## 6. Diagnose → Advise

用户原话：「关了离店卖不动只能砍」「MaxLOS太紧所以dump」「CTA开着所以公开也跟着砍」「限制开着 OCC 假低所以 BAR→399」「Restrictions 屏就是公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 MaxLOS / CTD / CTA / Closed-for-Departure；
            ②拟议是「改尺 / 关了离店 dump / MaxLOS 砍公开」还是「Hold 公开 + 先查是否过度过滤」；
            ③Pace / Remaining / Peak vs Shoulder；这是限制层还是要改公开尺。
  缺本店限制常模 / 华住 MaxLOS·CTD SOP → 问，不编。

Diagnosis
  限制层挂上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 过度 vs 停留 vs Peak MinLOS vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆限制层 vs 公开 + Hold 公开 BAR；过度 → P33 先松；Peak → P21；停留 → P40
    (4) 是否先拆 T-Floor / T-Component / T-Hurdle / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住 MaxLOS/CTD SOP / 默认限制常模。
  **Ahead 夜：MaxLOS / CTD / CTA / Closed-for-Departure 不被允许把公开 BAR 改写成 399。**

What To Watch
  公开 BAR 是否仍 Hold；限制是否先松（若过度）；Peak/肩日是否分看；24h 公开 Pickup vs 「关了离店」故事（分看）
  不是「Restrictions 配完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**（779–799 首选 **799**）；过度过滤 → **P33**；停留 → **P40**；已证实 Peak → **P21**；真 Behind 且限制已松且 remaining 厚 → **P05/P02**，理由写 Pace，尺仍是公开 BAR。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88。**

---

## 7. ask-list（全部 NV）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **MaxLOS / CTD / CTA / Closed-for-Departure 可售过滤**，还是要把 **公开 BAR 改成限制地板**？ | 混用尺；把限制层当公开价 | **NV** |
| 2 | 当前哪些日开着 MinLOS/CTA/CTD/MaxLOS？Peak 还是肩日？短住询单是否被挡？ | 会把「挡完后的假弱」当真弱砍价 | **NV** |
| 3 | 是否 OPERA Restrictions？是否 Apaleo/Clock Rate Plan restrictions？是否其实是地板（→T-Floor）或套房池（→T-Component）或 hurdle（→T-Hurdle）？ | 把配置写成「已成新 BAR」 | **NV** |
| 4 | 本店限制常模 / 华住 MaxLOS·CTD SOP 是什么？ | 会编默认常模 / 华住 SOP | **NV。不编。** |
| 5 | Pace / Remaining / 渠道限制是否同步？ | 会误松 Peak 或误砍 BAR | **NV** |
| 6 | 399 从哪来（关了离店话术 / MaxLOS 话术 / Budget 抱怨 / 竞对截图）？ | 会把 399 当必须 | **NV。** 先 Hold 公开 BAR |
| 7 | 限制已松后是否仍 Behind？ | 会跳过 P33 直接砸价 | **NV** |

---

## 8. What To Watch（顾问可说出口）

1. **公开 BAR 是否仍 Hold**（779–799 首选 799；Simulation）。  
2. **限制是否先处理**：过度→松；Peak 已证实→守（P21）；肩日误伤→只解肩日。  
3. **Peak vs Shoulder / 渠道同步**是否分看。  
4. **24h 净 Pickup**：公开尺 vs 「关了离店/MaxLOS」故事分看。  
5. **是否误入** T-Floor / T-Component / T-Hurdle / Waitlist·Pseudo leftover。  
6. **NV 是否仍 NV**：华住 MaxLOS·CTD SOP、默认限制常模、候补转化率、699、Walk $。

不是：「Restrictions 配完了就算改完 BAR」。

---

## 9. 短例（Simulation only；非本店 Fact）

| 夜 | 公开 BAR | 限制故事 | Pace | 默认 |
| --- | --- | --- | --- | --- |
| Sat Ahead | **799** | CTD + MaxLOS=2 开着；短住询单升 | Ahead | **Hold 799**；查是否过度→**P33** 先松；**拒 399** |
| Peak 已证实 | **799** | MinLOS=2 只盖 Peak | Ahead+Fast | **Hold**；守 **P21**；不解高峰 MinLOS；**拒 399** |
| 肩日被盖 | **779–799** | Peak MinLOS 盖到 Fri | 肩日慢 | **P33** 肩日解开；Peak 仍守；BAR 不动 |
| Sat-only 压力 | **799** | 销售要砍高峰迁就单晚 | 压缩 | **P40**；**拒 BAR→399** |
| 真弱 + 限制已 Open | **799→围栏** | 限制已松仍 Behind | Behind | **P05/P02**；有窗；**禁一夜 −15%**；仍不从限制层改写 |

14 / 399 / 799 = **Simulation only**。**399 = 被拒绝的 dump（限制层改尺）**。**799 = Hypothesis/Simulation Hold 首选**。**不发明 699**。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-REST-01 | 本店是否真有 MaxLOS/CTD/CTA/Closed-for-Departure；字段名是什么 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-REST-02 | 本店限制常模 / Peak vs 肩日规则 | **NV。不编默认常模。** |
| NV-REST-03 | 华住 MaxLOS/CTD SOP / 集团限制表 | **NV。不编。** |
| NV-REST-04 | 399 来源（关了离店话术 / MaxLOS 话术 / Budget / 竞对） | **NV。** 先 Hold 公开 BAR |
| NV-REST-05 | 候补转化率 / Walk $ / 佣金% | **禁止采用为 China Fact。** |
| NV-P33-01… | P33 / do-not-cut-when-restricted 已挂（谁有权松限制） | 仍 NV |

Watch：公开 BAR 是否仍 Hold；限制是否先松（若过度）；Peak/肩日是否分看；误入 T-Floor/T-Component/T-Hurdle/P05 是否已移交。

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-03 08:17 CST | 首版。T-Restriction = MaxLOS / CTD / CTA / Closed-for-Departure vs public BAR。**≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 三把尺；OPERA Restrictions + HSMAI MaxLOS/CTA + Apaleo/Clock + eCornell IMPACT + Lighthouse ≠ 定价权；形 A–F；假尺子一族。**不写 P88/P89。** 14/399/799 Simulation only。399 = 被拒绝的 dump。过程仍 **P33** + handoff **P40/P21**。S03-06 scout fail for NEW playbook **不阻挡** 理论加深。 |
| 2026-09-03 10:17 CST | C03-10 配套：callable Simulation `cases/sim-2026-restriction-maxlos-ctd-sat.md`。正文三句 / 399 / 799 / 不发明 699 **不改**。过程仍 **P33**（+ P40/P21）。§125 CASE 指针。不开 P88。不开 P89。 |

---

## 12. 交叉（不改 P01–P87 正文；restriction-framework / T-Floor / T-Component / T-Tax / T20 / optimization-advice 仅文末一行或不改；邻卡仅文末一行）

- **P33** `advisor-playbooks/restriction-overuse.md`：限制过度过程主剧。**本卡给「为什么 MaxLOS/CTD/CTA」与 Diagnose 尺**，三句同一套（限制措辞）。
- **主卡** `recommendations/do-not-cut-when-restricted.md`：复用，不重写公式。先松限制，不砍 BAR。
- **P40** `stay-pattern.md`：停留模式移交。
- **P21** `holiday-minlos.md`：已证实 Peak MinLOS 保护移交。
- **restriction-framework** `restrictions/restriction-framework.md`：框架指针；**正文三句不改**。
- **T-Floor / T-Component / T-Tax / T-Hurdle**：假尺子同族、对象不同。
- **P05 / P02 / P01 / P45**：Ahead Hold 公开 BAR；真弱且限制已松才 leftover；早会一个动作通常是纠正限制≠BAR + Hold（或先松限制），不是改尺。
- **Waitlist / Pseudo**：S03-06 leftover；本卡不当核。
- **禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88/P89。禁止编华住 MaxLOS/CTD SOP、默认限制常模、候补转化率、佣金%、Walk $。禁止把 Vendor/课例当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advice。禁止造 systems/*.md。禁止把 T-Restriction 叫成 T-Floor / T-Component / T-Tax / T-Hurdle。**

> 指针（2026-09-03 08:17，不改正文邻卡）：§124 升核 HSMAI MaxLOS/CTA + OPERA Restrictions/Managing；升核用途 Apaleo Rate Plans + Clock Rate Restrictions + eCornell IMPACT LOS + Lighthouse stay restrictions；HSMAI CTD glossary FAIL 404。Diagnose 走 **T-Restriction**，过程仍 **P33**（+ P40/P21）。三句 / 399 / 799 **不改邻卡正文**。不规定 P88。不规定 P89。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS Restrictions + Closed to Arrival/Departure Restrictions（**可售限制/CTA·CTD 闸 ≠ 公开灵活 BAR rewrite**）。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 交叉指针（2026-09-04 00:17 T04-00，不改正文三句 / 399 / 799）：**住期轴**（MinLOS/MaxLOS/CTA/CTD）仍本卡 T-Restriction，过程仍 **P33** + **P40 / P21**。**下单日轴**（Min/Max Advanced Booking · Release Time · Booking Period / Start-End Sell Dates · late booking until）走 **T-Window** `theory/booking-window-vs-bar.md`，过程 **P33** + **P35**。两卡共用 P33 不冲突。Hold 779–799 首选 799；拒 399；不发明 699；§132。**T-Restriction ≠ T-Window。** 不开 P88。不开 P89。

> 交叉指针（2026-09-04 12:17 R04-12，不改正文三句 / 399 / 799）：§133 新开 Clock PMS+ Rate Restrictions（Min/Max days before arrival + Last Minute days ≠ 公开灵活 BAR rewrite）+ OPERA 5.6 Rate Header Sell Controls（Minimum / Maximum Advance Booking ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。补齐 §132 Clock 猜链 FAIL。不开 P88。不开 P89。
