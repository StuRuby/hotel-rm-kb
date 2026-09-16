# Function-Space Occupancy｜厅日记满了不是客房更紧；RevPAS/ConPAST 不是 BAR

> 资产：T-Hall / T13×T05 伴生理论卡  
> 路径：`theory/function-space-occupancy.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR P&L：Function Room hire / AV = Other F&B Revenue，§12/§24；STR Glossary Occupancy = Rooms Sold / Rooms Available，**无** Function-Space Occupancy 作客房 OCC）；A（HSMAI RevPAS / Local Catering / Displacement Analysis 词条，§26；RevPAS **不是 BAR**）；A Vendor PMS（OPERA Catering Only：只要厅、客房 grid 不可用，§25，**不是 RMS**）；Kimes & McGuire 2001 ConPAST = **度量名 only，不摘正文**，2001 ≠ 2026 SOP，ConPAST ≠ BAR  
> 配套：`advisor-playbooks/catering-only.md`（P51）· `recommendations/dont-raise-bar-on-full-hall.md`（主卡复用，不重写）· `metrics/catering-only.md`（轻指标）· `metrics/occ.md`（厅满误读行）· `theory/meeting-with-rooms.md`（T-Meet / P50 对照）· `theory/day-use-inventory.md`（T-DayUse 逆命题）· `cases/sim-2026-catering-only-sat.md`  
> 问题树：§57 「厅满了 OCC 才 40% 要不要涨 BAR」「RevPAS 低所以客房该降」  
> 状态：**理论 drafted**（2026-08-25 16:17 CST）。**不写 P52。** wash / attrition 仍 MEDIUM 登记。禁止：编华住 SOP / 厅租价表；编餐毛利 / 厅租行情 / 本店 RevPAS 数字 / ConPAST 当 BAR 公式；把 80/14/799 当市场 Fact；一夜 ±15%；按厅满 Increase BAR；因厅忙 dump leftover；把只要厅当成 P50；重写 P01–P51 正文（P51 仅头一行）；操作 PMS/RMS/OTA/宴会。

---

## 0. 一句话

**厅日记满了不是客房更紧；RevPAS/ConPAST 是功能空间尺，不是 BAR 公式。**  
厅占用是功能空间时钟。客房 OCC 的分子是 Rooms Sold，分母是 Rooms Available。只要厅不要房 **不进** 客房 Sold，也不改客房 Available。当晚定价看 **transient remaining + Pace**，不是厅日记占用，也不是一条空间坪效。

```
Naive（禁止）     厅满 → Increase 客房 BAR；RevPAS 低 → dump 客房 BAR；ConPAST 当本店公式；厅 OCC 写成客房 OCC
本卡              先拆尺。厅占用 ≠ 客房 Demand。RevPAS / ConPAST ≠ BAR。再走 P51 过程。
```

完成标准：用户说「厅满了 OCC 才 40% 要不要涨」「RevPAS 低所以客房该降」→ Situation 写成两把尺；Diagnosis 写成厅不进客房 OCC、空间尺不是 BAR；What To Watch 写成 transient remaining + Pace + 用户贡献 + 同段带房会/婚宴。**不自动涨、不自动 dump。不写 P52。**

顾问必须能直接说的三句（与 P51 / 主卡同一套，不另发明第四条定价规则）：

```
1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。
```

独立默认（本库 Hypothesis）：当晚客房定价用 **transient remaining + Pace**，不是厅日记占用，也不是「包了厅所以店忙」。厅/AV 进 STR Other F&B。**不要**发明本店 RevPAS / ConPAST 当 BAR。缺贡献 → **问，不编厅租行情 / 餐毛利 / 80 / 华住价表**。

---

## 1. 两把尺：厅时钟 ≠ 客房 OCC

| | |
| --- | --- |
| 客房 OCC（STR） | `Rooms Sold / Rooms Available`。Sold 是过夜客房。Available 是客房供给。 |
| 厅日记占用 | 该段功能空间是否被占。**不是**客房 OCC 分子，也 **不是** 客房 Available。 |
| Catering Only | OPERA：只要厅/会，客房 grid 不可用。HSMAI Local Catering = 不连过夜房。 |
| 会带房 | 厅 **and** 客房块 → P50 / T-Meet。本卡专点 **零客房的空间时钟**。 |
| RevPAS | HSMAI：Total Catering Revenue / Available meeting sq ft。空间效率尺。**不是今晚 BAR。** |
| ConPAST | Kimes & McGuire 2001 度量名（contribution per available space for a given time）。**不摘正文。** 2001 ≠ 2026 SOP。ConPAST ≠ BAR。ConPAST ≠ 本店 RevPAS。 |

STR Glossary（S，本轮重开已开页，不当新发现）：

- Occupancy = Rooms Sold / Rooms Available。**无** Function-Space Occupancy / Function Room Occupancy 作客房 OCC 词条。
- Meeting Space = 物业上的宴会/会议面积定义，不是客房 KPI。
- Function Room / Setup Charges 出现在 F&B Revenue 子类，不是 Rooms Sold。
- P&L：Function room hire + AV → Other F&B Revenue（§12/§24）。

**禁止**把厅占用加进客房 OCC 再拿去打 MPI。两个库存。

---

## 2. 逆命题（同方向的「好看/难看」，相反的动作）

| | 本卡（厅占用） | 对照 |
| --- | --- | --- |
| **Day-use（T-DayUse / P44）** | 厅占用 **不进** 客房 OCC，但人仍拿厅满去涨 BAR | 钟点加客房 OCC **分子**（同日再卖可 >100%）。Advise 两边都是「先拆尺再定价」 |
| **OOO（T06 / P37）** | 厅 **不改** 客房 Available | 维修砍 **分母** → OCC 好看。厅满不是砍分母 |
| **Comp / Award（T-Comp / P47 / P49）** | 厅满 **不改变** 客房 Sold | 免费/兑房抬客房占用分子（STR 历史 Sold 不含无关免费；PMS 可能含） |
| **P50 会带房（T-Meet）** | 本卡零客房；只点空间时钟 | 有房块，拆厅/餐/占房。厅占用尺 ≠ 会带房三笔 |
| **P51 过程** | 本卡给 Diagnose 尺 | P51 给过程（六形）。**不重复六形正文** |

```
Naive 厅满 → Increase BAR     像拿 108% 钟点 OCC 涨过夜、拿 OOO 92% 涨 BAR、拿 Comp 92% 涨 BAR
本卡                           尺被拧了。先拆。客房动作看付费 remaining，不是那张厅日记
Naive RevPAS 低 → dump BAR    把空间效率尺当成客房报价器
本卡                           RevPAS / ConPAST 可以（在用户给了面积+餐饮贡献之后）描述厅段效率；**仍不是** 今晚公开 BAR
```

---

## 3. Diagnose → Advise

用户原话：「厅满了 OCC 才 40% 要不要涨」「RevPAS 低所以客房该降」

```
Situation
  厅日记占用 与 客房 remaining 是两把尺。
  OCC 40% 是客房 Sold/Available，不是厅满的反证，也不是厅满的证明。
  缺 Stay Date / Physical / transient remaining / 只要厅声明 → 问，不编 80。

Diagnosis
  厅占用不进客房 OCC，不改客房 Available，不改客房 Sold。
  厅满 ≠ 客房紧；厅空 ≠ 客房该 dump。
  RevPAS / ConPAST 是功能空间尺，不是 BAR 公式。没有面积与餐饮贡献 → 不报本店坪效点。
  只要厅 ≠ 会带房（有房块 → 离开到 P50）。

What To Watch
  paid transient remaining + Pace（P01/P03）
  同段有没有更好的带房会议或婚宴
  用户认领的厅+餐贡献（Unknown 除非用户给）
  不是厅日记占用%、不是发明的 RevPAS 点、不是 ConPAST 当 BAR
```

禁止一夜 ±15%。幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **别拿厅满改公开 BAR；别拿 RevPAS/ConPAST 当 BAR。** 过程走 P51。

---

## 4. 顾问三句怎么落到动作（不发明第四条）

三句 = P51，原样：

1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。  
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。  
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。

本卡不另写定价档、不另写厅租表、不把 ConPAST 展开成逐步公式。

---

## 5. 常见误读

| 误读 | 实际 |
| --- | --- |
| 厅满了所以涨客房 BAR | 厅占用不进客房 OCC。看 transient remaining + Pace。形 A |
| RevPAS 当今晚 BAR | 空间效率尺。没有面积+餐饮贡献不报点。不当涨/砍令 |
| ConPAST 当本店公式 | 2001 度量名，不摘正文。≠ BAR。≠ 本店 RevPAS。≠ 2026 SOP |
| 厅 OCC 写成客房 OCC | 两个库存。不要混报 MPI |
| STR 厅租加进 Rooms | Function room hire / AV = Other F&B（P&L）。套餐含厅只计一次 |
| RevPAS 低所以客房该降 | 厅段效率低 ≠ 过夜 Demand 死。不 dump 公开 BAR |
| 厅满了 leftover dump | P05 leftover 是付费空房，与厅独立。禁止 BAR→399 |
| 80 人只要厅 ≈ 会带房 | 会带房有客房块（P50）。本卡零客房 |

---

## 6. Simulation（诊断例，不是新店 Fact）

复用 P51 `cases/sim-2026-catering-only-sat.md`。**不是**另开一家酒店。

```
# Simulation only — 80 / 14 / 799
Physical rooms     = 180          # Simulation，非真店
Inquiry            = 80 pax 只要厅，零客房块
Saturday remaining = 14           # transient remaining，Pace Ahead
Public BAR         = 799
Hall diary         = 可满         # 不进客房 Sold / Available
Room OCC           = Sold/Available，这场不改分子分母
```

Advise（与 P51 同句）：周末/黄金厅段默认 Counter 或拒厅；Hold 779–799 首选 799；**不按厅满 Increase BAR。**  
80 / 14 / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。

---

## 7. 证据（2026-08-25 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Function Room hire / AV = Other F&B Revenue | S | **Known 口径** | STR P&L Data Reporting Guidelines（§12/§24 已开，指针，不当新发现）https://www.costar.com/products/str-benchmark/resources/guidelines/pl-data-reporting-guidelines |
| Occupancy = Rooms Sold / Rooms Available。**无** Function-Space Occupancy 作客房 OCC | S | **Known 负结果**（已开 Glossary，不当新发现） | https://www.costar.com/products/str-benchmark/resources/glossary |
| RevPAS = catering revenue / available meeting sq ft；不是 BAR | A 词条 | **Known 词条** | HSMAI Academy Glossary RevPAS（§12/§24/§26 指针）https://academy.hsmai.org/glossary/revpas/ |
| Local Catering = 不连过夜房；Group Catering = 连过夜房；Displacement Analysis 无公式 | A 词条 | **Known 分桶** | HSMAI §26 指针 |
| Catering Only = 只要厅、客房 grid 不可用 | A Vendor PMS | **Known 机制，不是 RMS** | OPERA Cloud Managing Blocks §25 指针 |
| ConPAST = contribution per available space for a given time | 目录级度量名 | **不摘正文。** 2001 ≠ 2026 SOP。ConPAST ≠ BAR | Kimes & McGuire 2001 vtechworks bitstream §25 指针 |
| 厅满不涨 BAR；无贡献不接高峰厅 | B / Hypothesis | 本库 P51 + T18 闸 | — |
| 本店厅面积分母、厅租行情、餐毛利、华住厅日记字段、本店 RevPAS 数字 | — | **NV。不编。** | — |

未采用：华住厅租价表（不编）；把 RevPAS / ConPAST 当 BAR；Canary 等贸易「function room occupancy」公式当 STR 客房 OCC（本轮检索命中，**不采**，不是 S）。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-HALL-01 | 本店厅面积分母 / 能否算 RevPAS | 不发明本店 RevPAS。词条 A，公式不当 BAR |
| NV-HALL-02 | 厅租行情 / 华住厅日记字段 | **NV。不编。** 问用户占用段 |
| NV-HALL-03 | 餐毛利 / 餐标 | 用户给贡献才进点；否则 Unknown |
| NV-HALL-04 | 本店 RevPAS 数字 | **不编。** 没有面积+餐饮贡献不报点 |
| NV-CAT-01…05 | P51 已挂 | 仍 NV |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 16:17 CST | 首版。T-Hall / T13×T05。厅日记满了不是客房更紧。RevPAS/ConPAST 是空间尺不是 BAR。主卡复用 `dont-raise-bar-on-full-hall.md`。不写 P52。不重复 P51 六形正文。80/14/799 Simulation only。 |

---

## 10. 交叉（不改 P01–P51 正文；P51 仅头一行）

- **P51：** 过程剧本。本卡给 Diagnose 尺。三句同一套。  
- **主卡 `dont-raise-bar-on-full-hall.md`：** 复用，不重写。  
- **T-Meet / P50：** 有房块，拆三笔。厅占用尺 ≠ 会带房三笔。  
- **T-DayUse / P44：** 钟点胀分子 ≠ 厅不进客房 OCC。先拆尺再定价。  
- **P37：** 维修砍分母；厅不改客房 Available。  
- **P47 / P49：** 免费/兑房抬客房分子；厅满不改客房 Sold。  
- **P01 / P03：** 看 transient remaining，不是厅日记。  
- **P05：** leftover 不是因为厅满。禁止 BAR→399。  
- **P10 / P30 / P22：** 客房-only / 婚宴 / 会展肩日。误入走 P51 形 F。  
- **禁止一夜 ±15%。禁止 P52。禁止 wash 专剧。**

- **T-Status / `theory/group-inventory-deduct.md`（00:17）：** 厅不进客房 OCC ≠ 暂定可能不扣 Available。两边都是假高峰尺。
