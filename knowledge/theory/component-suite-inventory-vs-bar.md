# Component Suite / Room-pool Inventory vs Public BAR｜组合套房/房池扣减是库存机械，不是公开 BAR

> 资产：T-Component / T03-00（Component Suite / room-pool / suite-combination inventory 被允许改什么）· **≠ T-Floor**（`theory/rate-floor-vs-bar.md` = schedule floor / Min·Max；Rate Cap 已覆盖，本卡不重复）· **≠ T-Tax**（税展示/城市税包）· **≠ T-Staff**（人手吞吐顶）· **≠ capacity OOO 核心**（`theory/capacity-ooo.md` / P37 = 分母缩减）
> 路径：`theory/component-suite-inventory-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-03
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Configuring Rooms Inventory*：Component = virtual inventory；套房预订扣 component + physical — **§119 指针 / §120 升核**；库存扣减 ≠ rewrite 公开 BAR）；A Vendor PMS（OPERA *Configuring Room Types*：Component Suite + Room Components；Accessible Room Type 勾选 — **§119/§120 升核**；库存属性 ≠ 定价权）；A Vendor PMS（OPERA *Configuring Rooms*：Accessible Room 旗 — **§119/§120 升核**）；A Vendor PMS（OPERA *Configuring Room Features*：Features ≠ 单独定价权 — **§119/§120 升核**；WebFetch 超时，curl 200）；A Vendor PMS（Cloudbeds *Split Inventory - Everything You Need to Know*：Virtual Primary + 物理房组合；availability 联动 — **§120 新开第三人 Vendor**；虚拟房 OCC 读法 ≠ BAR Type）；A Vendor 同族（Cloudbeds *How to create a virtual accommodation* — **§120 同族**）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §119 指针 / §120 升核**）；FAIL（Mews *How to set up a parent room* — SPA CSS Error / 无正文，**不当新核**）；FAIL soft（OPERA 5.x 旧 Component Suites 猜链 →「Hospitality - Hotels」壳）
> 配套：`advisor-playbooks/room-type-compression.md`（**P13 过程·房型压缩**）· `advisor-playbooks/ooo-capacity.md`（**P37 过程·OOO/可售分母**）· `advisor-playbooks/room-type-differential.md`（**P34 价差倒挂**，可选移交）· `cases/sim-2026-component-suite-sat.md`（**T-Component 专卷 Simulation**，C03-02；过程仍 P13 + P37）· 无新 playbook / 无新轻指标（短例仍见 §9）
> 交叉：P05 真弱 leftover · P01 Ahead · P45 早会 · Soft Hold / adjoining 分房（S02-14：Hold Room ≠ BAR；邻 P53/P55）· T-Floor / T-Tax / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee / T-Staff（假尺子一族）
> 问题树：§11 Room Type Imbalance（过程路由已够；本卡给「为什么 Component / suite pool / Accessible / Features 不是公开 BAR、库存扣减不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / Component Suite / Split Inventory / OTA，不自动改价，不代改库存配置。**
> 状态：**理论 drafted**（2026-09-03 00:17 CST）。**不写 P88，不写 P89，不写新剧本，不开 Pet/AAA。** 过程仍 **P13 + P37**。禁止：编华住组合套房/无障碍 SOP / 默认 suite 折扣 % / 699 / Walk $；一夜 −15%；BAR→399「组合套房占了所以 dump BAR / 无障碍卖完所以砍公开 / 套房池空了所以公开改 399 / Component 扣了库存所以要砸价补」；把 14/399/799 当市场 Fact；把 OPERA/Cloudbeds Vendor 例当中国 Fact；重写 T-Floor / T-Tax / T20 / optimization-advise 正文；重写 P01–P87 正文（邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Floor / T-Tax / T-Staff / capacity OOO 核**；造 systems/*.md。

---

## 0. 一句话

**Component Suite / room-pool / suite-combination inventory 是库存扣减机械（虚拟房型消耗 component + 物理房），不是改写公开灵活 BAR 的许可证。Accessible/ADA 旗与 Room Features 是库存属性，不是定价杠杆。**
厂商能开 Component Suites、能配 Room Components、能勾 Accessible、能挂 Features、能在 Cloudbeds Split Inventory 把物理房组合成 Virtual Primary——只证明「库存怎么扣、怎么联动、怎么标属性」，不证明「公开灵活价该写成 399」。协会能把 BAR 钉成 non-qualified publicly available——只证明「公开尺定义」，不证明「套房池/无障碍旗 = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「组合套房占了所以 dump / 无障碍卖完所以砍公开 / 套房池空了所以公开改 399 / Component 扣了所以砸价补」把 BAR 改写成 399。房型压缩过程 → **P13**。OOO/可售分母 → **P37**。价差倒挂 → **P34**。Rate Cap / Min·Max → **T-Floor**（本卡只 handoff，不重复）。连通/Soft Hold 分房 → S02-14 邻 **P53/P55**（Hold ≠ BAR）。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从 component OCC 改写 BAR）。本店 Component 字段 / 华住组合套房·无障碍 SOP = **全部 NV**。Pet/AAA 仍停车。

```
Naive（禁止）     组合套房占了所以 dump BAR；无障碍卖完所以砍公开；
                  套房池空了所以公开改 399；Component 扣了库存所以要砸价补
本卡              先拆三把尺（公开 BAR / Component·套房池·Accessible·Features 库存层 / 分型 Remaining·Pace）。
                  OPERA Component + Accessible/Features + Cloudbeds Split Inventory ≠ 定价权。过程走 P13 + P37。
```

完成标准：用户说「组合套房占了所以 dump BAR」「无障碍卖完所以砍公开」「套房池空了所以公开改 399」「Component 扣了库存所以要砸价补」「Accessible 卖完 BAR 跟着砍」「Virtual 房 OCC 脏了所以改尺」→ Situation 写成**三把尺 + Pace/Remaining + 这是库存扣减/属性还是要改公开**；Diagnosis 写库存机械不是公开 BAR、配置屏不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、component/物理 remaining 是否分看、Accessible/Features 是否仍关在属性层。**不 dump 399、不把套房池/无障碍写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 **P13 + P37** **同一套过程路由**，本卡只把「Component / suite pool / Accessible」说清楚，**不另发明第四条定价规则**）：

```
1. 先问这是 Component Suite / 套房池 / 组合库存扣减，还是 Accessible/ADA / Features 属性，还是要把公开灵活 BAR 改成「池空了就 399」。库存层 ≠ 公开尺。本店 Component 字段 / 华住组合套房·无障碍 SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「组合套房占了 / 无障碍卖完 / 套房池空了 / Component 扣了所以砸」。
3. 房型压缩（某型穿、他型空）走 **P13**。OOO/可售分母走 **P37**。价差倒挂走 **P34**。Rate Cap/Min·Max 走 **T-Floor**。真弱走 **P05**（可围栏+截止日，仍禁一夜 −15%、仍不从 component OCC 改写公开 BAR）。早会一个动作走 P45。
```

独立默认（本库 Hypothesis）：**Component / suite-pool / Accessible 回答的是「库存怎么扣、属性怎么标」，不是「今晚公开灵活该卖多少」。** 它回答「虚拟套房订一间扣哪些物理房 / 无障碍旗筛哪些房」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把套房池/无障碍地板写成新 BAR。禁止编华住组合套房 SOP。禁止编默认 suite 折扣 %。禁止编 699。禁止编 Walk $。禁止把 Vendor 例当中国 Fact。**

**命名钉死：T-Component ≠ T-Floor ≠ T-Tax ≠ T-Staff ≠ capacity OOO 核心。** T-Component = 组合套房/房池/Accessible 库存专精；T-Floor = schedule floor/Min·Max；T-Tax = 税展示/城市税；T-Staff = 人手吞吐；capacity-ooo/P37 = OOO 缩分母。过程交 **P13 + P37**。

---

## 1. 三把尺：Public BAR / Component·suite-pool·Accessible·Features 库存层 / 分型 Remaining·Pace

顾问问题不是「系统里有没有 Component Suite / Split Inventory / Accessible 勾选」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成套房池空了的 dump 令；砍到「Component 扣了所以 399」 |
| **Component / suite-pool / Accessible / Features** | OPERA Component virtual + Room Components；Accessible 旗；Features；Cloudbeds Virtual Split Inventory | 可留在库存扣减/属性层；分看物理 vs 虚拟 remaining；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **分型 Remaining · Pace** | 各物理房型 / 套房型 / Accessible 子集的剩余与 Pace | → **P13** 压缩 / **P37** 分母 / Soft Hold 邻 P53·P55 | 把「虚拟 OCC 看起来满/空」读成「公开尺必须改」 |

```
Public_BAR                 = 799     # Simulation：公开灵活
Component_or_suite_layer   = 虚拟套房扣减 / Accessible 子集 / Features  # Simulation：库存层（不是新 BAR）
Typed_Remaining_Pace       = 分型 remaining + Pace                     # Simulation：过程输入 → P13/P37
Gap_story                  = 「套房池空 / 无障碍卖完 / Component 扣了」  # 尺在库存故事，不是必须折扣指令
Layer                      = public BAR | component/suite-pool | accessible/features | typed remaining | soft-hold adjoining
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国套房默认。OPERA / Cloudbeds Vendor 例 = **Vendor 示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **库存层**：把「套房池看起来空」读成「我们 BAR 就是 399」，或把「Accessible 卖完」读成「公开必须砍」，或把 Component 扣减混成定价按钮。

HSMAI BAR（A，§67/§119/§120）：BAR = **the non-qualified, publicly available rate**。**方向采用：Component / suite-pool / Accessible / Features 不是 BAR。**

---

## 2. Component / Split Inventory / Accessible / Features 是过程，不是定价权

厂商把「组合套房 / 虚拟房」做成**库存扣减 + 属性旗 + 联动可售**。没有一家被打开的官方页把它写成「套房池空了就必须把公开灵活改写成 399」或「Accessible 卖完所以公开尺跟砍」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Rooms Inventory*（§119/**§120 升核**） | Component = virtual room types tracked in availability；套房预订 **deducts** component suite 一间 **以及** 组成它的各 physical inventory rooms；预报/统计按 **physical** 间数计 | **库存扣减机械。** ≠ BAR Type；≠ rewrite 公开灵活 |
| OPERA *Configuring Room Types*（§119/**§120**） | Component Suite 勾选 + Room Components 数量；**Accessible Room Type** 勾选 | **虚拟组成 + 无障碍属性。** ≠ 定价权 |
| OPERA *Configuring Rooms*（§119/**§120**） | **Accessible Room** 勾选到具体房号 | **房号属性旗。** ≠ 公开尺 |
| OPERA *Configuring Room Features*（§119/**§120**） | Features（可含 accessibility）挂房型/房号；可按 feature 搜可售 | **检索/属性层。** ≠ 单独定价权 |
| Cloudbeds *Split Inventory*（**§120 新开**） | Virtual 作 Primary；物理房组合成 suite/floor；联动 availability，防双卖 | **虚拟组合库存过程。** ≠ BAR Type；≠ dump 令 |
| Cloudbeds *Virtual accommodation*（**§120 同族**） | 建 Virtual (Combined) 类型再挂 Split Inventory | **配置入口 ≠ 改尺令** |
| HSMAI Academy *BAR*（§67/**§120**） | BAR = non-qualified, publicly available | 库存旗 / 虚拟房 **不是 BAR** |
| Mews *Parent room* | — | **本小时 SPA FAIL**（CSS Error / 无正文）— **不当新核** |
| OPERA 5.x 旧 Component Suites 猜链 | 「Hospitality - Hotels」壳 | **soft FAIL**（同 S02-22）；不当核 |

```
画面：组合套房占了所以 dump / 无障碍卖完砍公开 / 套房池空了改 399 / Component 扣了砸价补 / 销售说「套房池屏就是公开价」
Naive：BAR 就是那个池空数；能配 Component / Split Inventory / Accessible 所以改尺
本卡：Component 扣减、Accessible 旗、Features、Split Inventory 都是过程。定价权在公开 BAR + Pace，不在套房池按钮。
```

```
OPERA Component Suite / Room Components     → 虚拟房型 + 物理扣减
OPERA Accessible Room Type / Accessible Room → 无障碍属性旗
OPERA Room Features                          → 检索/属性
Cloudbeds Split Inventory / Virtual Primary  → 虚拟组合联动可售
Public BAR                                   → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住组合套房·无障碍 SOP / 默认 suite 折扣 % / 本店 Component 字段名 / 佣金% / 699 Fact = **NV，不编。** UI 字段是 OPERA/Cloudbeds 的，不是本店报表名。不把 Vendor 例写成店规。

---

## 3. 「组合套房占了 / 无障碍卖完 / 套房池空了 / Component 扣了」是库存信号，不是改写许可证

过程仍走 **P13 + P37**，本卡给 WHY（Component / suite pool / Accessible 专精），**不重复 P13/P37 正文，不另开 P88**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P13 + P37） |
| --- | --- | --- | --- |
| **A 拆库存机械 vs 公开 BAR** | 「Component / Split Inventory / 套房池就是我们的公开价」 | 用库存层当尺 | **拆库存 vs 公开**；Hold 公开 BAR |
| **B BAR→399「套房池空 / Component 扣了所以砸」** | 「组合套房占了 / 池空了，BAR 改 399」 | 把扣减写成战略尺 | **拒绝 BAR→399** |
| **C Accessible/ADA / Features = 属性，不是 rewrite** | 「无障碍卖完所以砍公开 / Feature 筛空了所以 dump」 | 把属性旗当定价杠杆 | **属性留属性**；Hold 公开；分看 Accessible 子集 remaining |
| **D 移交压缩 / 差价 / OOO / Soft Hold** | 「标准穿套房空 / 套房比标准还便宜 / 维修占了 / 连通暂留占了」 | 对象是邻过程 | **P13** 压缩 · **P34** 差价 · **P37** OOO · Soft Hold→**P53/P55**（S02-14） |
| **E Vendor 屏当定价权** | 「能配 Component / Split Inventory / Accessible 所以改尺」 | 把配置当成 BAR Type | **配置 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按套房池地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从 component OCC 改写 BAR；禁一夜 −15% |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 套房池/Accessible 看起来空或满 | 需求仍强；公开尺 **Hold**；库存留在扣减/属性层 | 「市场认池空，BAR 改 399」 |
| Component 订 1 间扣多间物理 | **分看物理 sold vs 虚拟 sold**（OPERA：预报按 physical） | 「OCC 脏了所以砍 BAR」 |
| Accessible / Features 还能配 | **形 C/E**：属性/配置 ≠ BAR Type | 「旗/屏就是新公开价表」 |
| 某物理型穿、他型空 | **P13** 三选一；不是 dump 公开到 399 | 「套房空所以公开改 399」 |
| Soft Hold / adjoining 暂留 | **P53/P55**；Hold ≠ BAR（S02-14） | 「连通占了所以砍 BAR」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从 component 层改写 BAR | 一夜 −15%；把池空永久化成公开尺 |

```
Component / suite-pool / Accessible looks like a market price  → 库存信号（可加强拆尺 / Hold 公开）
Public BAR                                                   → 仍由 Pace / Remaining 定
Naive                                                        → 「组合套房占了 / 无障碍卖完 / 池空了所以 BAR→399」
本卡                                                         → 库存扣减/属性 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. Diagnose 边界：本卡 ≠ T-Floor ≠ T-Tax ≠ T-Staff ≠ P05 ≠ P34

几边都在「看起来库存怪 / 销售要跟砍」附近，对象不同。塌成「反正池空了所以砍」会开错杠杆。

| | **本卡 T-Component** | **T-Floor** | **P13** | **P37 / capacity-ooo** | **P05** |
| --- | --- | --- | --- | --- | --- |
| 对象 | Component / suite-pool / Accessible / Features 库存 | Rate Floor / Min·Max / 声明品牌底 | 房型压缩（穿/空） | OOO 缩分母 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 公开 BAR vs 地板 | 公开 BAR + 分型 remaining | 公开 BAR vs 可售分母 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；地板留保护 | Hold + 压缩工具 | Hold；先重算可售 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；从 component OCC rewrite | 399；发明 699 | 免费填高档当 dump | 按虚高 OCC 砍 | 一夜 −15%；从池空永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是 Component/套房池扣减，还是 Accessible 属性，还是压缩，还是 OOO，还是 Soft Hold，还是地板，还是真弱？** 压缩 → **P13**。OOO → **P37**。倒挂 → **P34**。地板/Rate Cap → **T-Floor**。Soft Hold → **P53/P55**。真弱 leftover → **P05**。要把 Component/Accessible 叫 BAR / 要池空 dump → 本卡；过程仍 **P13 + P37**。

---

## 5. 假尺子一族

屏幕上的库存工具被当成定价按钮：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **本卡 T-Component** | 「组合套房占了 / 无障碍卖完 / 套房池空了 / Component 扣了所以 399」 | **公开 BAR + Pace**；不是库存 dump 令 |
| **T-Floor** | 「地板=399所以公开也399」 | 公开 BAR + Pace；地板 ≠ BAR |
| **T-Tax / T-Fee / …** | （各卡画面） | 公开 BAR + Pace |
| **T-Staff** | 「做不完所以砍」 | 吞吐顶 ≠ 弱需求 |
| **capacity-ooo / P37** | 「OCC 92% 其实 OOO」 | 分母 ≠ 需求 |

与 **T-Floor / T-Tax / T-Staff / capacity-ooo** 的边界：地板是价表保护；税是展示/过账；Staff 是人手吞吐；OOO 是分母。本卡是 **组合套房/房池/Accessible 库存专精**。对象不同，假尺子同族；**过程交 P13 + P37**。Rate Cap 已由 T-Floor 覆盖——本卡 **只 handoff，不重复 T-Floor 正文**。

---

## 6. Diagnose → Advise

用户原话：「组合套房占了所以 dump BAR」「无障碍卖完所以砍公开」「套房池空了所以公开改 399」「Component 扣了库存所以要砸价补」「Accessible 卖完 BAR 跟着砍」「Virtual 房 OCC 脏了改尺」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是 Component / suite-pool / Accessible / Features / 虚拟 OCC；
            ②拟议是「改尺 / 池空 dump / 无障碍砍公开」还是「Hold 公开 + 分看库存扣减/属性」；
            ③Pace / 分型 Remaining；这是库存层还是要改公开尺。
  缺 Component 字段 / 华住组合套房·无障碍 SOP → 问，不编。

Diagnosis
  Component/套房池/Accessible 挂上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 属性当尺 vs 压缩 vs OOO vs Soft Hold vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆库存层 vs 公开 + Hold 公开 BAR；分型穿/空 → P13；分母 → P37
    (4) 是否先拆 P34 / T-Floor / P53·P55 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住组合套房 SOP / 默认 suite %。
  **Ahead 夜：Component / suite-pool / Accessible 不被允许把公开 BAR 改写成 399。**

What To Watch
  公开 BAR 是否仍 Hold；component/物理 remaining 是否分看；Accessible/Features 是否仍关在属性层；24h 公开 Pickup vs 「池空」故事（分看）
  不是「Component / Split Inventory 配完了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**（779–799 首选 **799**）；某型穿他型空 → **P13**；OOO → **P37**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88。**

---

## 7. ask-list（全部 NV）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **Component Suite / 套房池 / Split Inventory 扣减**，还是 **Accessible/Features 属性**，还是要把 **公开 BAR 改成池空地板**？ | 混用尺；把库存层当公开价 | **NV** |
| 2 | 当前公开 BAR 与各物理型 / 虚拟套房 / Accessible 子集 remaining 各是多少？Pace Ahead 还是 Behind？ | 会把「虚拟 OCC」当必须 dump | **NV** |
| 3 | 是否 OPERA Component Suites / Room Components？是否 Cloudbeds Split Inventory Virtual Primary？是否其实是 OOO（→P37）或 Soft Hold（→P53/P55）或地板（→T-Floor）？ | 把配置写成「已成新 BAR」 | **NV** |
| 4 | 拟议是 Hold 公开 + 分看库存，还是改写公开尺 / 池空 dump 399？ | 误入本卡 / P13 / P37 / P05 | **NV** |
| 5 | 本店 Component 字段 / 华住组合套房·无障碍 SOP / 默认 suite 折扣 % 怎么走？ | 发明华住 SOP；或把 Vendor 例当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是价差倒挂（→P34）；是不是 Rate Cap/Min·Max（→T-Floor）；真 Behind leftover（→P05）。**华住组合套房·无障碍 SOP、默认 suite %、699 Fact、Walk $、佣金%：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| Component / Split Inventory 就是公开 BAR | BAR = 无资格公开灵活。Component 是库存扣减 |
| 组合套房占了所以 dump BAR | 扣减 ≠ 改尺令。拒绝 |
| 无障碍卖完所以砍公开 | Accessible = 属性旗，不是定价杠杆 |
| 套房池空了所以公开改 399 | 拒绝 BAR→399；Ahead Hold 799 |
| Component 扣了库存所以要砸价补 | 库存机械 ≠ 弱需求许可证 |
| 虚拟 OCC 脏了所以砍 | 分看 physical vs virtual（OPERA 预报按 physical） |
| Rate Cap 也是本卡 | **T-Floor** handoff；本卡不重复 |
| Soft Hold / 连通占了所以砍 | **P53/P55**（S02-14）；Hold ≠ BAR |
| 反正空，按池空冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住组合套房 SOP 就能 Advise | **禁止。** 字段 / SOP NV |
| 把本卡叫成 T-Floor / T-Tax / T-Staff / OOO 核 | **禁止。** 本卡 = **T-Component** |

---

## 9. Simulation（诊断例，不是新店 Fact）

短例（过程仍 P13 + P37；**专卷**已开 → `cases/sim-2026-component-suite-sat.md` = C03-02）：

```
# Simulation only — 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；公开 remaining 14
公开 BAR                     = 799
Component / suite-pool       = 虚拟套房订出后物理 KNGS/PARLOR 被扣；「套房池看起来空」（不是新 BAR）
Accessible 子集              = 无障碍房已订满（属性子集；不是公开尺）
销售拟议                     = 「组合套房占了 / 无障碍卖完 / 套房池空了 / Component 扣了所以砸」砍 BAR 到 399
```

读法：399 是被拒绝的库存改尺，不是 BAR。Advise：拆公开 vs Component/套房池 vs Accessible/Features；**Hold 779–799 首选 799**；拒 dump **399**；分型穿/空走 **P13**；分母走 **P37**；不要用 Vendor 例当 sim 数字或店规。
**14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/套房默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-09-03 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Component = virtual；订套房扣 component + physical；预报按 physical | **A Vendor PMS** | **Known 库存扣减 ≠ rewrite** | OPERA Rooms Inventory（**§119/§120 升核**） |
| Component Suite + Room Components；Accessible Room Type | **A Vendor PMS** | **Known 组成/属性 ≠ 定价权** | OPERA Room Types（**§119/§120**） |
| Accessible Room 房号旗 | **A Vendor PMS** | **Known 旗 ≠ 公开尺** | OPERA Rooms（**§119/§120**） |
| Room Features ≠ 单独定价权 | **A Vendor PMS** | **Known 属性层** | OPERA Room Features（**§119/§120**；curl 200） |
| Split Inventory Virtual Primary + 物理组合联动 | **A Vendor PMS** | **Known 虚拟库存过程 ≠ BAR** | Cloudbeds Split Inventory（**§120 新开**） |
| Virtual accommodation 配置入口 | **A Vendor PMS** | **Known 同族配置 ≠ 改尺** | Cloudbeds Virtual accommodation（**§120 同族**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§120**） |
| Ahead Hold 公开 BAR；拒 399 | **B / Hypothesis** | 本库 P13/P37 + Pace 闸 | — |
| 本店 Component 字段 / 华住组合套房·无障碍 SOP / 默认 suite % / 699 Fact | — | **NV。不编。** | — |
| Mews Parent room 本小时正文 | — | **FAIL**（SPA CSS Error；不当新核） | 见 §120 |
| OPERA 5.x 旧 Component Suites 猜链 | — | **soft FAIL**（Hospitality 壳） | 见 §120；同 S02-22 |

本小时升核：OPERA Rooms Inventory Component + Room Types + Rooms Accessible + Room Features + HSMAI BAR。新开：Cloudbeds Split Inventory（第三人 Vendor）+ Virtual accommodation 同族。指针：§119 Sell Limits / Overbooking（加强 P24，非本卡核）。Mews Parent **SPA FAIL 不当新核**。华住组合套房 SOP **未开、不编**。**不规定 P88。不规定 P89。**

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-COMP-01 | 本店是否真有 Component Suites / Split Inventory / Accessible 旗；字段名是什么 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-COMP-02 | 用户说的「套房池空」是虚拟房型、物理组成房，还是 Accessible 子集 | **NV。** 先分看 remaining |
| NV-COMP-03 | 华住组合套房·无障碍 SOP / 默认 suite 折扣 % / 配额 Fact | **NV。不编。** |
| NV-COMP-04 | 399 来源（套房池话术 / 无障碍话术 / 压缩误读 / 竞对截图） | **NV。** 先 Hold 公开 BAR |
| NV-COMP-05 | Vendor 例是否被误当店规 | **禁止采用为 China Fact。** |
| NV-P13/P37… | P13 压缩信号 / P37 OOO 口径 | 仍 NV（过程卡已挂） |

Watch：公开 BAR 是否仍 Hold；component/物理 remaining 是否分看；Accessible/Features 是否仍关在属性层；误入 T-Floor/P34/P53·P55/P05 是否已移交。

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-03 00:17 CST | 首版。T-Component = Component Suite / room-pool / Accessible·Features vs public BAR。**≠ T-Floor ≠ T-Tax ≠ T-Staff ≠ capacity OOO 核。** 三把尺；OPERA Component + Accessible/Features + Cloudbeds Split Inventory + HSMAI BAR ≠ 定价权；形 A–F；假尺子一族。**不写 P88/P89。** 14/399/799 Simulation only。399 = 被拒绝的 dump。过程仍 **P13 + P37**。S02-22 scout fail for NEW playbook **不阻挡** 理论加深。 |
| 2026-09-03 02:17 CST | 配套 Simulation 指针：新开 `cases/sim-2026-component-suite-sat.md`（C03-02）。正文三句 / 399 / 799 / 过程 P13+P37 **不改**。不开 P88。 |

---

## 13. 交叉（不改 P01–P87 正文；邻卡仅文末一行）

- **P13** `advisor-playbooks/room-type-compression.md`：房型压缩过程。**本卡给「为什么 Component/套房池」与 Diagnose 尺**；三选一过程不改。
- **P37** `advisor-playbooks/ooo-capacity.md`：OOO/可售分母。邻「分母」，不是虚拟套房扣减故事的改尺令。
- **P34** `advisor-playbooks/room-type-differential.md`：价差倒挂。邻「产品梯」，不是 Component dump。
- **capacity-ooo** `theory/capacity-ooo.md`：OOO 三口径核心。本卡不重写。
- **T-Floor**：Rate Cap / Min·Max / schedule floor — **只 handoff**，不重复正文。
- **Soft Hold / adjoining**（S02-14）：Hold Room ≠ BAR → **P53/P55**。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正库存层≠BAR + Hold，不是改尺。
- **T-Tax / T-Fee / T-Extra / T-Package / T-Share / T-Parity / T-Flash / T-BRG / T-Live / T-Wholesale / T-Stored / T-Deposit / T-Service-Recovery / T-Employee / T-Staff / T-Floor**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止发明 699。禁止 P88/P89。禁止编华住组合套房·无障碍 SOP、默认 suite %、佣金%、Walk $。禁止把 Vendor 例当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advise。禁止造 systems/*.md。禁止把 T-Component 叫成 T-Floor / T-Tax / T-Staff / capacity OOO 核。禁止重写 T-Floor / T-Tax / T20 正文。**

> 指针（2026-09-03 00:17，不改正文邻卡）：§120 升核 OPERA Component / Room Types / Rooms Accessible / Room Features + HSMAI BAR；新开 Cloudbeds Split Inventory（第三人 Vendor）。Diagnose 走 **T-Component**，过程仍 **P13 + P37**。三句 / 399 / 799 **不改邻卡正文**。不规定 P88。不规定 P89。

> 指针（2026-09-03 02:17 C03-02，不改正文）：专卷 Simulation → `cases/sim-2026-component-suite-sat.md`；§121 CASE 指针复述 §120。Diagnose 仍 **T-Component**，过程仍 **P13 + P37**；Hold 779–799 首选 799；拒 399 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 04:17 R03-04，不改正文）：§122 新开 protel Virtual Room Types + Clock Virtual Rooms（互补非 OPERA）；Apaleo Combined Unit Groups 同族不当第三核；Mews Parent 再试仍 SPA FAIL。Diagnose 仍 **T-Component**，过程仍 **P13 + P37**；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
