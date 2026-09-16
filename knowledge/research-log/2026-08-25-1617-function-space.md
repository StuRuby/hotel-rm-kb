# Research Log｜2026-08-25 16:17 · T-Hall / 功能空间占用 ≠ 客房 OCC

> 路径：`research-log/2026-08-25-1617-function-space.md`  
> 时区：Asia/Shanghai  
> 槽：Hour 16 ∈ {0,8,16} = **THEORY/METRICS**  
> 日期：**2026-08-25 16:17 CST**  
> 主题：T-Hall。P51 14:17 已写 playbook + 卡 + 轻指标 + sim。本小时加深理论，模板同 08:17 `theory/day-use-inventory.md` after P44。主卡复用 `dont-raise-bar-on-full-hall.md`，不重写。**不写 P52。** wash 仍 MEDIUM。  
> Advisor-First。不操作 PMS/RMS/OTA/宴会。不发布。不 git commit。

---

## 1. 本轮打开 / 复用

WebSearch + WebFetch，Last Verified **2026-08-25**。只目录**打开**的页。Cite only if open。已开指针 **不当新发现**，不进 source-map 新节。

### 已开指针（不当新发现）

| URL | 结果 | 记下 |
| --- | --- | --- |
| STR P&L Function Room hire / AV = Other F&B | **不重抓。** §12/§24 | 厅租不是客房。 |
| HSMAI RevPAS / Local Catering / Displacement | **不重抓。** §26 | RevPAS ≠ BAR。Local Catering = 不连过夜房。 |
| OPERA Catering Only | **不重抓。** §25 | 只要厅、客房 grid 不可用。不是 RMS。 |
| Kimes & McGuire 2001 ConPAST vtechworks | **不重抓正文。** §25 | 度量名 only。2001 ≠ 2026 SOP。ConPAST ≠ BAR。 |

### 本小时打开（负结果，已开页，**不写 §27**）

| URL | 结果 | 级 |
| --- | --- | --- |
| https://www.costar.com/products/str-benchmark/resources/glossary | **重开（已在 §5）。** Occupancy = Rooms Sold / Rooms Available。Meeting Space = 物业宴会/会议面积定义，不是客房 KPI。Function Room / Setup Charges 在 F&B Revenue 子类。**无** Function-Space Occupancy / Function Room Occupancy 作客房 OCC 词条。 | **S 负结果**（指针，不当新发现） |

检索还命中贸易页「How to Calculate Function Room Occupancy」（Canary）。**不采。** 不是 STR。不当本店公式。不当 BAR。

未抓 / 禁止：

```
iHotelier / science-behind-g3 / Marriott careers     停
华住厅租价表 / 华住 SOP                               仍 NV，不编
餐毛利 / 厅租行情 / 本店 RevPAS 数字                   仍 NV，不编
RevPAS / ConPAST 当 BAR 公式                          禁止
P52 / wash 专剧                                       不写
ConPAST 正文摘录                                      禁止
```

---

## 2. 写了什么

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| T-Hall 理论 | `theory/function-space-occupancy.md` | **drafted** |
| 主卡 | `recommendations/dont-raise-bar-on-full-hall.md` | **reused，不重写** |
| OCC 误读一行 | `metrics/occ.md` | **appended**（公式不改） |
| 轻指标指针 | `metrics/catering-only.md` | **appended**（公式不改） |
| P51 头一行 | `advisor-playbooks/catering-only.md` | **header only** |
| T-Meet 文末 | `theory/meeting-with-rooms.md` | **last-line** |
| Day-use 文末 | `theory/day-use-inventory.md` | **last-line** |
| Simulation 文末 | `cases/sim-2026-catering-only-sat.md` | **last-line** |
| 本 log | 本文件 | **drafted** |
| **P52 playbook** | — | **不写** |

未重写主卡正文。未重写 P51 §0–body。未重写 C25-14。source-map **不写 §27**（无真正新 URL）。

---

## 3. 三句（与 P51 同一套，不另发明）

```
1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。
```

用户说「厅满了 OCC 才 40% 要不要涨」「RevPAS 低所以客房该降」→ Situation 两把尺；Diagnosis 厅不进客房 OCC、空间尺不是 BAR；What To Watch = transient remaining + Pace，不是厅占用%、不是假 RevPAS 点。

---

## 4. 逆命题

| 对照 | 关系 |
| --- | --- |
| T-DayUse | 钟点加客房 OCC **分子**；厅占用 **不进** 客房 OCC。Advise 两边「先拆尺再定价」 |
| OOO T06 | 维修砍 **分母**；厅不改客房 Available |
| Comp / Award | 免费/兑房抬客房占用分子；厅满不改变客房 Sold |
| P50 会带房 | 有房块，拆厅/餐/占房；本卡专点 **零客房的空间时钟** |
| P51 | 本卡 Diagnose 尺；P51 过程。不重复六形正文 |

---

## 5. 兼容

无 needs_revision。无真矛盾。P51 三句未改。RevPAS / ConPAST 未当 BAR。主卡未重写。

---

## 6. 399 / 餐毛利 / RevPAS / P52

80 / 14 / 799 = **Simulation only**（复用 P51 卷，不另开新店）。  
未编餐毛利、厅租行情、华住 SOP、本店 RevPAS 数字。  
RevPAS = A 词条，**未**当 BAR。  
ConPAST = 2001 度量名，**未**摘正文，**未**当 BAR。  
**未写 P52。** wash 仍 MEDIUM。

---

## 7. 18:17 侦察提示（只点名，本小时不写）

P51 十节已存在 → 18:17 **不要**再走只要厅，**不要**规定 P52。  
wash / attrition 仍 MEDIUM：可 CASE-only 走现有 P10 或 P50 周六块（pickup vs cutoff What To Watch；本店 % NV；**不新开 P 号**；不写 wash 专剧）。或 skip。

---

## 8. 刻意不补

P52；wash 专剧；华住厅租价表；餐毛利；厅租行情；本店 RevPAS 数字；ConPAST 正文；RevPAS-as-BAR；重写 P01–P51 / 主卡 / C25-14；source-map §27；操作 PMS；git commit；发布。
