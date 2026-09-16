# Group Inventory Deduct｜暂定画面满了不是客房已卖掉；先问这张块从可售里扣不扣

> 资产：T-Status / T13×T05 伴生理论卡  
> 路径：`theory/group-inventory-deduct.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-26  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：A Vendor RMS inbound（IDeaS groupblocks：Definite / Strong Tentative → DEFINITE **扣库存**；Tentative / Hold → TENTATIVE **不扣**；Prospect / Weak Tentative 不扣；Cancel 不扣 — **§28 指针，不是中国 SOP**）；A Vendor PMS（OPERA Cloud 26.2：INQUIRY / NON DED INV **不扣**；DED INV **扣**；CANCEL 放回 house；OPERA 5.6 Status Codes 例 Definite 扣、Tentative 不扣 — **§29 指针；店配状态码，不是华住字段表**）；S（STR Glossary Occupancy = Rooms Sold / Rooms Available，**无** Tentative Occupancy 作客房 OCC 词条 — 已开页负结果，不当 §30）；B / Hypothesis（不按暂定 OCC 涨；不锁公开 BAR 给不扣库存的 Hold；Strong Tentative 扣了走 P52）  
> 配套：`advisor-playbooks/definite-vs-tentative.md`（P53）· `recommendations/dont-raise-on-tentative-occ.md`（主卡复用，不重写）· `metrics/group-status-inventory.md`（轻指标）· `metrics/occ.md`（暂定误读行）· `theory/function-space-occupancy.md`（T-Hall 逆命题）· `theory/complimentary-house-use.md`（T-Comp 逆命题）· `cases/sim-2026-tentative-sat.md`  
> 问题树：§59 「暂定团占了 40 间要不要涨」「先锁暂定别卖散客」  
> 状态：**理论 drafted**（2026-08-26 00:17 CST）。**不写 P54。** wash% 仍 NV。禁止：编华住 暂定/确认 字段表 / wash% / 10–25% / 本店 DED INV 映射；把 IDeaS Strong Tentative 当弱暂定；把 OPERA TENT/DEF 外推成华住 SOP；把 40/50/399/799 当市场 Fact；一夜 ±15%；按暂定 OCC Increase BAR；dump 399「反正是暂定」；重写 P01–P53 正文（P53 仅头一行）；操作 PMS/RMS/OTA/宴会。

---

## 0. 一句话

**暂定画面满了不是客房已卖掉；先问这张块从可售里扣不扣。**  
画面 OCC 可以把 Tentative / Hold 画得很满。客房定价看 **真 remaining（未扣库存的暂定不算已卖）+ Pace**，不是含未扣暂定的画面 OCC。IDeaS Strong Tentative **会扣** — 不是「暂定所以还能卖」。本店 PMS 状态名 **NV**，不把 OPERA / IDeaS 名写成华住 SOP。

```
Naive（禁止）     暂定 OCC 涨 BAR；锁散客给 Hold；dump 399 反正是暂定；Strong Tentative 当弱暂定
本卡              先问扣不扣。不扣 → 假高峰尺。扣了 → P52。接不接 → P10。再走 P53 过程。
```

完成标准：用户说「暂定占了 40 间要不要涨」「先锁暂定别卖散客」→ Situation 写成两个库存（deduct vs display）；Diagnosis 写成不扣则画面 ≠ 已卖、强暂定扣了走 P52；What To Watch 写成真 remaining + Pace + 会不会转 Definite。**不自动涨、不关公开 BAR 给 Hold、不 dump 399。不写 P54。**

顾问必须能直接说的三句（与 P53 / 主卡同一套，不另发明第四条定价规则）：

```
1. 先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。
2. 销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。
```

独立默认（本库 Hypothesis）：当晚定价用 **真 remaining（未扣库存的暂定不算已卖）+ Pace**，不是「暂定占房」画面 OCC。IDeaS mapping = **Vendor RMS inbound**，不是中国 SOP。OPERA DED INV / NON DED INV = **Vendor PMS 店配能力**，不是华住字段表。缺本店状态名 / 会不会扣库存 → **问，不编华住 暂定/确认 表 / wash%**。

---

## 1. 两把尺：画面占用 ≠ 可售扣除

| | |
| --- | --- |
| 画面 / display OCC | PMS 可把 Tentative / Hold 画进占用。**不等于** Rooms Sold，也不等于已从 Available 扣掉。 |
| 真 remaining | Capacity − (已扣库存占用 + 其他付费占用) − OOO。**不扣库存的暂定不算已卖。** |
| IDeaS inbound（Vendor RMS，不是中国 SOP） | Definite / Strong Tentative → 扣；Tentative / Hold → 不扣；Prospect / Weak Tentative 不扣；Cancel 不扣。 |
| OPERA（Vendor PMS，店配） | INQUIRY / NON DED INV 不扣；DED INV 扣；CANCEL 放回 house。码名店配。本店名 **NV**。 |
| STR Occupancy | `Rooms Sold / Rooms Available`。**无** Tentative Occupancy 作客房 OCC 词条。 |

**禁止**把未扣库存的暂定当成已卖 Sold 再拿去打 MPI 或涨 BAR。两个库存：扣库存的块 vs 只显示的块。

---

## 2. 逆命题（同方向的「好看/难看」，相反的动作）

| | 本卡（团状态扣不扣） | 对照 |
| --- | --- | --- |
| **T-Hall / P51** | 厅占用 **不进** 客房 OCC；暂定 **可能不扣** 客房 Available。两边都是假高峰尺 | 厅日记满了不是客房更紧；本卡是客房块状态轴 |
| **P52** | 已扣库存的 Definite → pickup vs cutoff | 本卡是 **扣不扣** 这条轴。Strong Tentative 扣了才交给 P52 |
| **P10** | 接不接（Accept / Reject / Counter） | 本卡默认块 **已挂状态** |
| **T-Comp / P49** | Comp / 兑房抬占用 **分子** | 本卡可能 **不改分母**（不扣 Available）。Advise 两边都是「先拆尺再定价」 |
| **P53 过程** | 本卡给 Diagnose 尺 | P53 给过程（六形）。**不重复六形正文** |

```
Naive 暂定 OCC → Increase BAR     像拿厅满涨 BAR、拿 Comp 92% 涨 BAR、拿合同块 OCC 涨 BAR
本卡                               尺被拧了。先问扣不扣。不扣则看真 remaining，不是画面
Naive 锁散客给 Hold                 把未扣库存的块当成已卖需求
本卡                               未转 Definite、不扣库存 ≠ 已卖。高峰别关公开 BAR
Naive dump 399 反正是暂定          把状态当 dump 许可证
本卡                               未扣库存本来就可卖 BAR。禁止 BAR→399
Naive Strong Tentative 当弱暂定    「暂定就能卖」
本卡                               IDeaS Strong Tentative 扣库存 → P52，不是 dump
```

---

## 3. Diagnose → Advise

用户原话：「暂定团占了 40 间要不要涨」「先锁暂定别卖散客」

```
Situation
  画面占用 与 可售扣除 是两个库存。
  暂定把 OCC 打满 ≠ 散客紧，也 ≠ 房已卖掉。
  缺 Stay Date / Physical / Definite vs Tentative / 会不会扣库存 → 问，不编华住字段。

Diagnosis
  不扣库存 → 暂定不算已卖；画面 OCC 是假高峰尺。
  扣了（含 IDeaS Strong Tentative / OPERA DED INV）→ 离开到 P52。
  还没接团 → 离开到 P10。
  STR 无 Tentative Occupancy 作客房 OCC。IDeaS/OPERA 只 Vendor 对照，不是华住 SOP。

What To Watch
  真 remaining（未扣暂定不算已卖）+ Pace（P01/P03）
  会不会转 Definite / 是否扣库存
  公开渠道有没有被关给 Hold / 有没有出现 399 当 BAR
  不是画面 OCC%、不是发明的 wash%、不是华住字段表
```

禁止一夜 ±15%。幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **别拿未扣库存的暂定画面改公开 BAR；别关公开 BAR 给 Hold；别 dump 399 反正是暂定。** 过程走 P53。

---

## 4. 顾问三句怎么落到动作（不发明第四条）

三句 = P53，原样：

1. 先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。  
2. 销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。  
3. 已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。

本卡不另写定价档、不另写华住状态表、不把 wash% 展开成常模。

---

## 5. 常见误读

| 误读 | 实际 |
| --- | --- |
| 暂定 OCC 当 Demand | 不扣库存则画面 ≠ 已卖需求。看真 remaining。形 A |
| Hold 当已卖 | 未转 Definite、不扣库存 ≠ 已卖。形 B。不关公开 BAR |
| IDeaS Strong Tentative 当弱暂定 | Strong Tentative **扣库存**。形 D → P52，不是「暂定就能卖」 |
| OPERA TENT/DEF 当华住字段 | **不外推。** 本店名 NV。店配码名 |
| 399 dump 反正是暂定 | 未扣库存本来就可卖 BAR。禁止。形 C。399 = 被拒绝的 dump |

---

## 6. Simulation（诊断例，不是新店 Fact）

复用 P53 `cases/sim-2026-tentative-sat.md`。**不是**另开一家酒店。

```
# Simulation only — 40 / 50 / 799（399 = 被拒绝的 dump）
Physical rooms     = 180          # Simulation，非真店
Tentative block    = 40           # 画面占用
True remaining     = 50           # 若不扣库存
Screen remaining   = 10           # 画面把 40 画进占用 → OCC ~94%
Public BAR         = 799
```

Advise（与 P53 同句）：不按暂定 OCC 涨；不锁 BAR 给 Hold；Hold 779–799 首选 799；**禁止 dump 399**。若用户确认 Strong Tentative 扣库存 → P52，不 dump。  
40 / 50 / 399 / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。399 是被拒绝的 dump，不是推荐 BAR。

---

## 7. 证据（2026-08-26 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| IDeaS：Definite / Strong Tentative 扣；Tentative / Hold 不扣 | A Vendor RMS inbound | **Known 映射，不是中国 SOP** | IDeaS Developers Group Blocks（§28 指针，不当新发现） |
| OPERA：DED INV 扣 / NON DED INV 不扣；5.6 例 Definite 扣、Tentative 不扣 | A Vendor PMS | **Known 机制，店配码名，不是华住 SOP** | OPERA Cloud 26.2 + OPERA 5.6 Status Codes（§29 指针，不当新发现） |
| Occupancy = Rooms Sold / Rooms Available。**无** Tentative Occupancy 作客房 OCC | S | **Known 负结果**（已开 Glossary，不当 §30） | https://www.costar.com/products/str-benchmark/resources/glossary |
| 不按暂定 OCC 涨；不关 BAR 给 Hold；禁 dump 399 | B / Hypothesis | 本库 P53 + T18 闸 | — |
| 本店 PMS 状态名、华住字段表、wash%、本店 DED INV 映射 | — | **NV。不编。** | — |

未采用：华住 暂定/确认 字段表（不编）；wash% / 10–25%；把 IDeaS/OPERA 写成中国 SOP；iHotelier / science-behind-g3 / Marriott careers（STOP）。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-STATUS-01 | 本店 PMS 状态名（暂定/确认/Hold 字段） | **NV。不编。** 问会不会从可售扣掉 |
| NV-STATUS-02 | 华住字段表 / 本店 DED INV 映射 | **NV。不编。** Vendor 对照不是 SOP |
| NV-STATUS-03 | 本店 wash% | **NV。不编。** 本卡不写 wash 专剧 / P54 |
| NV-STATUS-04 | 本店是否按 IDeaS inbound 扣 Strong Tentative | 问；有 IDeaS 才对照 Vendor 映射 |
| NV-P53-01… | P53 已挂 | 仍 NV |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 00:17 CST | 首版。T-Status / T13×T05。暂定画面满了不是客房已卖掉。先问扣不扣。主卡复用 `dont-raise-on-tentative-occ.md`。不写 P54。不重复 P53 六形正文。40/50/399/799 Simulation only。 |
| 2026-09-04 16:17 CST | Soft/Hard≈Deduct/Non-Deduct deepen **evaluated → skip**（S04-14 leftover）。§134 Occupancy with Non-deduct % 复核加强 Watch，不改三句 / 399 / 799；过程仍 P53。全文 `research-log/2026-09-04-1617-theory-skip-deduct.md`。不开 P88。 |

---

## 10. 交叉（不改 P01–P53 正文；P53 仅头一行）

- **P53：** 过程剧本。本卡给 Diagnose 尺。三句同一套。  
- **主卡 `dont-raise-on-tentative-occ.md`：** 复用，不重写。  
- **P52：** 已扣库存 → pickup vs cutoff。本卡是扣不扣。  
- **P10：** 接不接。本卡已挂状态。  
- **T-Hall / P51：** 厅不进客房 OCC ≠ 暂定可能不扣 Available。两边假高峰尺。  
- **T-Comp / P49：** Comp 抬分子 ≠ 暂定可能不改分母。  
- **P01 / P03：** 看真 remaining，不是画面 OCC。  
- **P05：** leftover 不是因为「反正是暂定」。禁止 BAR→399。  
- **禁止一夜 ±15%。禁止 P54。禁止 wash 专剧 / 华住字段表。**

- **T-Guar / `theory/guarantee-release.md`（08:17）：** 本卡是**团块**扣不扣；T-Guar 是**下一层** — 单张散客单的担保类型扣不扣、几点放。同一个 Deduct / Non-Deduct 机制；释放是事件不是预测。过程仍 P55（不是本卡重写）。
