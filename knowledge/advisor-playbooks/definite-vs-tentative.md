# Playbook P53｜Definite vs Tentative｜确认块 vs 暂定块；不按暂定 OCC 涨；不锁散客给 Hold

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/definite-vs-tentative.md`  
> BACKLOG：P53 Definite vs Tentative · 确认块 vs 暂定块 · HIGH · 先决策卡（本轮同开）· slug **definite-vs-tentative**  
> 状态：**drafted**（2026-08-25 22:17 CST）  
> 配套卡：`recommendations/dont-raise-on-tentative-occ.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/group-status-inventory.md`（deduct vs not-deduct；IDeaS mapping **标 Vendor RMS inbound**；本店 PMS 状态名 **NV**）  
> 理论：`theory/group-inventory-deduct.md`（T-Status drafted 2026-08-26 00:17）· 主卡复用 `dont-raise-on-tentative-occ.md`（不重写）  
> 交叉：P10 询价 Accept/Reject/Counter ≠ 本剧已挂状态；P52 **已经扣库存**的 Definite：pickup vs cutoff；P50 会带房赢会 ≠ 状态扣库存；P51 只要厅 ≠ 客房块状态；P14 散客高取消 Soft OTB ≠ 暂定块；P31 机组 allotment ≠ 一场团暂定/确认  
> 问题树：§59 「暂定团占了 40 间，OCC 看起来很满要不要涨」「Tentative 没转 Definite，散客卖不动」「销售说先把暂定锁上别卖散客」「弱暂定也要关散客」  
> 仿真：`cases/sim-2026-tentative-sat.md`（**Simulation**）  
> 证据等级：A Vendor RMS（IDeaS inbound groupblocks：Definite / Strong Tentative → DEFINITE **扣库存**；Tentative / Hold → TENTATIVE **不扣**；Prospect / Weak Tentative 不扣；Cancel 不扣 — **§28 指针，不是中国 SOP**）；A Vendor PMS（OPERA Cloud 26.2：INQUIRY / NON DED INV **不扣**；DED INV **扣**；CANCEL 放回 house。OPERA 5.6 例：Definite 扣、Tentative 不扣 — **店配状态码，不是华住字段表**）；B / Hypothesis（不按暂定 OCC 涨；不锁公开 BAR 给不扣库存的 Hold；Strong Tentative 扣了走 P52）  
> Last Verified：2026-08-25  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先问 Definite 还是 Tentative、会不会从可售扣掉；Hold BAR；拒绝按暂定 OCC 涨；拒绝关公开 BAR 给 Hold；已扣库存才走 P52；接不接走 P10。**不操作 PMS/RMS**、不改块状态、不关散客、不改 BAR。  
> 禁止：发明华住 暂定/确认 字段表 / cutoff SOP / wash%；编 10–25%；一夜 −15%；按「暂定占房」OCC Increase BAR；把 BAR dump 到 399「反正是暂定」；把 IDeaS Strong Tentative（扣库存）当弱暂定；把 OPERA TENT/DEF 外推成华住 SOP；把 40/50/399/799 当市场 Fact。  
> 20:17 「不要规定 P53」= 当时槽禁止令。本槽是 **库存扣不扣的团状态**，不是 P52 重写，不是第二本 wash。

---

## 0. 一句话

**先问团是 Definite 还是 Tentative。** IDeaS 入站（Vendor RMS inbound，不是中国 SOP）：Definite / Strong Tentative **扣库存**；Tentative / Hold **不扣**。不要按一张「暂定占房」的 OCC 涨 BAR。未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。已转 Definite（或本店确认会扣库存的强暂定）才走 P52。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。Hold 公开 BAR **779–799 首选 799**（Hypothesis / Simulation）。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。

完成定义：一张「先问 Definite 还是 Tentative → 不扣库存不按那张 OCC 涨、不关公开 BAR 给 Hold → 扣了走 P52、接不接走 P10 → 禁止 dump 399 反正是暂定」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | 暂定 40 间把画面打满，要 Increase BAR | 不扣库存的块 ≠ 散客紧 | **不要**按那张 OCC Increase BAR。问是否扣库存 |
| **B 锁散客** | 销售关 BAR 给 Hold/Tentative | 未转 Definite、不扣库存 ≠ 已卖 | **不要**关公开 BAR。Hold 799 |
| **C 弱暂定当 leftover dump** | dump 到 399「反正是暂定」 | 未扣库存的房本来就可卖 BAR | **禁止。** 不要 dump 399 |
| **D 强暂定** | 「暂定就能卖 / 当弱暂定」 | IDeaS Strong Tentative **扣库存** | 当 Definite 侧，走 **P52** 尺，不是「暂定就能卖」 |
| **E 状态不明** | 用户只说「暂定团」。本店字段 NV | OPERA 状态码是店配 | **问**这张块会不会从可售里扣掉；扣了走 P52，没扣当暂定 |
| **F 误入** | 接不接 / 已确认 cutoff / 会带房 / 只要厅 / 机组 | 不是本剧过程 | 接不接 → **P10**。已确认块 cutoff → **P52**。会带房 → **P50**。只要厅 → **P51**。机组 → **P31** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。
2. 销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。
```

独立默认（本库 Hypothesis）：当晚定价用 **真 remaining（未扣库存的暂定不算已卖）+ Pace**，不是「暂定占房」画面 OCC。IDeaS mapping = **Vendor RMS inbound**，不是中国 SOP。OPERA DED INV / NON DED INV = **Vendor PMS 店配能力**，不是华住字段表。缺本店状态名 / 会不会扣库存 → **问，不编华住 暂定/确认 表 / wash%**。

尺（Hypothesis；799 / 399 / 40/50 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因暂定 OCC 去 +100；禁止 dump BAR 到 399「反正是暂定」。40 / 50 / 399 / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。399 是被拒绝的 dump，不是推荐 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「暂定团占了 40 间，OCC 看起来很满要不要涨」 |
| S2 | 「Tentative 没转 Definite，散客卖不动」 |
| S3 | 「销售说先把暂定锁上别卖散客」 |
| S4 | 「弱暂定也要关散客」 |
| S5 | 用户把一张 Hold/Tentative 当已卖，要 Increase BAR 或关公开库存 |
| S6 | 用户把 IDeaS Strong Tentative（会扣库存）当成弱暂定要继续卖 / dump |

**不是本剧本：**

- 接不接这场团本身 → **P10** Accept / Reject / Counter。本剧默认块 **已经挂着**（暂定或确认）。  
- 已转 Definite（或本店确认扣库存）且问题是 pickup vs cutoff → **P52**。  
- 会带房用便宜房赢会 → **P50**。  
- 只要厅不要房 → **P51**。  
- 散客高取消、OTB=Soft → **P14**。  
- 机组 allotment / extra → **P31**。  
- 真 leftover 弱市、且块 **不扣库存、房本来就可卖**、Pace Behind → 可评 **P05** 围栏；**仍禁止**「反正是暂定」当 dump 许可证；**仍禁止** BAR→399；**仍禁止一夜 −15%**。  
- 已扣库存后付费剩余真紧且 Pace Ahead → **P01/P03**（理由是真 remaining，不是暂定画面 OCC）。

---

## 2. 输入（缺本店状态名不停，但不编华住表）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) 块已经挂着（还没接 → 离开，P10）
4) 用户口中的 Definite / Tentative / Hold / 暂定 / 确认（缺则问，不编华住字段）
5) 这张块会不会从可售里扣掉（缺则问；IDeaS 映射只作 Vendor 对照，不是本店 SOP）

应用：
6) 真 remaining（未扣库存的暂定不算已卖）+ Pace
7) 公开 BAR
8) 销售/GM 拟议（按暂定 OCC 涨 / 关散客给 Hold / dump 399 反正是暂定）

Recommended：
9) 是否 IDeaS Strong Tentative（扣库存 → P52）
10) 是否机组（P31）/ 会带房（P50）/ 只要厅（P51）/ 散客取消潮（P14）
```

缺本店 PMS 状态名 **不停**：方向仍是先问扣不扣、不按暂定 OCC 涨、不关公开 BAR 给 Hold。禁止「暂定占了所以涨 / 反正是暂定所以 399 / 先锁散客」。  
顾问 **不** 改块状态、不关散客、不改 BAR、不编华住 暂定/确认 字段表、不编 wash%。

**IDeaS 口径（Vendor RMS inbound，不是中国 SOP）：**

```
Definite / Strong Tentative → DEFINITE，扣库存
Tentative / Hold            → TENTATIVE，不扣库存
Prospect / Weak Tentative   → 不扣
Cancel                      → 不扣
```

**OPERA 口径（Vendor PMS，店配状态码，不是华住 SOP）：**

```
INQUIRY / NON DED INV  → 不从可售扣
DED INV                → 从可售扣
CANCEL                 → 放回 house
例（OPERA 5.6 文档举例，不是强制码名）：Definite 扣；Tentative 不扣
```

本店字段名 **NV**。不要把 OPERA TENT/DEF 或 IDeaS DEFINITE/TENTATIVE 写成华住 SOP。

---

## 3. 两轴清单（动价前必过）

状态轴与公开 BAR 轴分开。对不上就不要用「暂定占了 40 间」去改 BAR。

| # | 轴 | 已卖掉？ | 扣库存？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 散客需求 | — | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **Tentative / Hold（不扣）** | **否** | 不扣 | 否 | **不是已卖需求。** 不按画面 OCC 涨；不关公开 BAR |
| D3 | **Definite / Strong Tentative（扣）** | 块已占可售 | **扣** | 否 | 当 Definite 侧。走 **P52** pickup vs cutoff，不是「暂定就能卖」 |
| D4 | **PMS「暂定占房」OCC** | 混了未扣块 | — | 否 | **假高峰尺。** 不按这张涨 |
| D5 | **真 remaining（未扣暂定仍可卖）** | — | 未扣则仍在 remaining | 围栏不是 BAR | 厚且 Pace Behind → 可评 **P05**；Ahead → Hold / 评 P01。禁止「反正是暂定」dump 399 |
| D6 | **接团本身** | — | — | — | **P10**。本剧不重做 Accept/Reject |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是华住 SOP）：

```
Status_user            = 用户说的 Definite / Tentative / Hold / 暂定 / 确认
Deducts_inventory?     = 这张块会不会从可售里扣掉     # 问；IDeaS/OPERA 只作 Vendor 对照
True_remaining_t       = Capacity − (已扣库存占用 + 其他付费占用) − OOO
                         # 不扣库存的暂定不算已卖
Screen_OCC_with_tent   = (含未扣暂定画面占用) / Available   # 假高峰尺，不按这张涨
# IDeaS（Vendor RMS inbound，不是中国 SOP）：
#   Definite / Strong Tentative → 扣
#   Tentative / Hold / Prospect / Weak Tentative / Cancel → 不扣
# OPERA（Vendor PMS 店配）：DED INV 扣；INQUIRY / NON DED INV 不扣
# 本店 PMS 状态名 = NV。不编华住表。
```

| 对不上 | 结论 |
| --- | --- |
| 画面 OCC 高、块不扣库存 | **A 假高峰。** 不按那张 OCC 涨 |
| 销售关公开 BAR 给 Hold/Tentative | **B。** 不扣库存则不要关 |
| dump 到 399「反正是暂定」 | **C。** 禁止 |
| Strong Tentative / 本店确认扣库存 | **D。** 走 P52，不是「暂定就能卖」 |
| 只说「暂定」、不知扣不扣 | **E。** 问；扣了 P52，没扣当暂定 |
| 其实是接团 / 已确认 cutoff / 会带房 / 只要厅 / 机组 | **F。** 离开本剧 |

40 / 50 / 399 / 799 **不出现在中国公式里**。仿真数字只在案例文件。本店 wash% **不进公式**。

---

## 4. 诊断枝（禁止「暂定占了所以涨 / 反正是暂定所以 dump / 先锁散客」）

```
用户拿暂定占房 OCC 高 / 没转 Definite / 先锁散客 / 弱暂定也关 要动 BAR
│
├─ 团还没接、这是询价？
│     是 → 形 F。离开，进 **P10**
│
├─ 已转 Definite，问题是 pickup vs cutoff vs house return？
│     是 → 形 F。离开，进 **P52**
│
├─ 会带房赢会（厅+小房块、要 dump BAR 赢会）？
│     是 → 形 F。离开，进 **P50**
│
├─ 只要厅不要房？
│     是 → 形 F。离开，进 **P51**
│
├─ 机组 allotment / extra？
│     是 → 形 F。离开，进 **P31**
│
├─ 散客高取消、不是团块状态？
│     是 → 形 F。离开，进 **P14**
│
├─ 还没给「会不会从可售里扣掉」？
│     是 → 形 E。问，不编华住字段。条件化：
│          不扣 → 不按画面 OCC 涨、不关公开 BAR；Hold BAR
│          扣了 → 离开，进 P52
│
├─ A 假高峰：暂定把画面打满，要涨 BAR
│     重算 真 remaining、Pace
│     ├─ 不扣库存，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 已扣库存后付费剩余真紧 AND Pace Ahead
│           → 离开「按暂定 OCC 涨」，进 **P01/P03**
│             理由是真 remaining，不是画面 OCC
│
├─ B 锁散客：销售关 BAR 给 Hold/Tentative
│     → **拒绝。** 未转 Definite、不扣库存 ≠ 已卖需求
│     高峰不要把公开 BAR 关给一张暂定单
│     Hold 779–799 首选 799
│
├─ C 弱暂定当 leftover dump：dump 到 399「反正是暂定」
│     → **禁止。** 未扣库存的房本来就可卖 BAR
│     禁止 BAR→399；禁止一夜 −15%
│     leftover 只在付费空房真弱时才评 P05，不是「因为暂定」
│
├─ D 强暂定：IDeaS Strong Tentative 扣库存
│     → 当 Definite 侧，走 **P52** 尺
│     不是「暂定就能卖」。不要 dump
│
└─ E 状态不明：本店字段 NV
      问用户这张块会不会从可售里扣掉
      扣了 → P52；没扣 → 当暂定（A/B/C）

Naive（禁止）
      Tentative 画面忙 → Increase BAR
      「反正会 wash」先 dump BAR 再问状态
      销售把公开 BAR 关给不扣库存的 Hold
      把 IDeaS Strong Tentative（扣库存）当弱暂定
      一夜 −15% 当新 BAR
      发明华住 暂定/确认 字段表 / wash%
```

**P03 只在真 remaining 重算之后。** 好看的暂定画面不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 禁止因为「反正是暂定」去 dump。禁止把公开 BAR 改成 399。  
**P52：** 已扣库存才走 pickup vs cutoff。本剧不重写 wash%。  
**T20：** 不砸品牌底去清一张暂定。无地板不发明 399。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 钉：块已经挂着还是询价。询价 → P10。已确认+pickup/cutoff → P52。
3. 问 Definite 还是 Tentative，以及会不会从可售里扣掉。缺本店字段名 → 问，不编华住表。
4. 声明 IDeaS mapping = Vendor RMS inbound；OPERA DED INV/NON DED INV = Vendor PMS 店配。本店名 NV。
5. 重算：真 remaining（未扣暂定不算已卖）、画面 OCC、Pace。
6. 分形：A 假高峰 / B 锁散客 / C dump 399 / D 强暂定走 P52 / E 问扣不扣 / F 误入。可以同时命中。
7. A：不按暂定 OCC 涨。真 remaining 紧 + Ahead → P01/P03（理由不是画面）。
8. B：不关公开 BAR 给 Hold。Hold 779–799 首选 799。C：禁止 dump 399。
9. D：Strong Tentative 扣库存 → P52。E：问；扣了 P52，没扣当暂定。
10. 输出 Hold BAR / 拒绝按暂定 OCC 涨 / 拒绝关 BAR 给 Hold / 移交 P52·P10 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / 真 remaining / Pace:
块状态（用户）/ 会不会扣库存:     （缺则 Unknown，不编华住字段）
IDeaS / OPERA 对照（Vendor only）:
公开 BAR:
Decision: Hold BAR / 拒绝按暂定 OCC 涨 / 拒绝关公开 BAR 给 Hold / 问是否扣库存 / 移交 P10 / P52 / P50 / P51 / P31 / P14 / 移交 P03 / 移交 P05（仅付费空房，不是因为「反正是暂定」）
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      不扣库存的暂定不是公开 BAR 的涨价令，也不是 dump 许可证
Inventory:  不扣库存则公开渠道保持 OPEN。高峰不把公开 BAR 关给一张 Hold
Restriction: 不因暂定画面新设 MinLOS / Closed
Do-not-do:
  - 按「暂定占房」OCC Increase BAR
  - 关公开 BAR 给不扣库存的 Hold/Tentative
  - BAR → 399「反正是暂定」/ 华住 SOP
  - 一夜 −15% 当新 BAR
  - 把 IDeaS Strong Tentative 当弱暂定继续卖
  - 发明华住 暂定/确认 字段表 / wash%
  - 操作 PMS / RMS
Trigger: 用户确认扣库存 → P52；确认不扣 → 维持 A/B/C；真 remaining 变紧才评 P03
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要按暂定画面改公开 BAR；不关 BAR 给 Hold；不要 dump 399 反正是暂定。**

| 重算结果 | BAR / 库存 | 说明 |
| --- | --- | --- |
| A：暂定画面满、不扣库存或 Pace 非 Ahead | **不涨。Hold** 779–799 首选 799 | 不是 High Demand |
| A：已扣库存后 remaining 真紧 + Pace Ahead | **P01/P03**：理由是真 remaining，不是暂定画面 | 须把「真 remaining 紧」写进 Situation |
| B：销售关 BAR 给 Hold/Tentative | **拒绝关。** Hold 779–799 首选 799 | 不扣库存 ≠ 已卖 |
| C：dump 399「反正是暂定」 | **拒绝。** 未扣库存本来就可卖 BAR | 禁止 BAR→399 |
| D：Strong Tentative / 本店确认扣库存 | **P52**。不要 dump | 当 Definite 侧 |
| E：不知扣不扣 | **问。** 齐数前 Hold BAR | 不编华住字段 |
| F：接不接 / 会带房 / 只要厅 / 机组 / 散客取消 | 离开本剧 | P10 / P50 / P51 / P31 / P14 |
| 弱市 leftover | **P05** 围栏；对象是付费空房；**不要**因为「反正是暂定」去 dump；**禁止一夜 −15%** | 不是 dump 到 399 |
| 价已最高 | 只关不涨 | 与 P03 同。暂定画面 ≠ 涨价 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
40 / 50 / 799 / 399 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。399 是被拒绝的 dump，不是推荐 BAR。

### 5.3 Advisor-First

建议用户：这张块 Definite 还是 Tentative、会不会从可售里扣掉、真 remaining + 24h 散客 Pickup。顾问不改块状态、不关散客、不改 BAR、不编华住字段表。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；块状态（用户原话）；会不会扣库存（缺则问）；画面 OCC vs 真 remaining；BAR；谁要按暂定涨 / 关散客 / dump 399 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。暂定画面 ≠ High Demand；不扣库存 ≠ 已卖；Strong Tentative 扣了 ≠ 弱暂定 |
| 3 | Opportunity / Risk | 按暂定 OCC 涨奖励假高峰；关 BAR 给 Hold 挡散客；BAR dump「反正是暂定」；把强暂当弱暂 |
| 4 | Recommended Action | Hold BAR / 拒绝按暂定 OCC 涨 / 拒绝关 BAR 给 Hold / 问是否扣库存 / 移交 P52·P10·P50·P51·P31。点或紧区间，不要「适当涨」 |
| 5 | Why | 三句 + IDeaS Vendor inbound + OPERA DED INV vs NON DED INV（不是华住 SOP） |
| 6 | Expected Impact | 方向：停一次按暂定涨 / 停一次关 BAR 给 Hold / 停一次 399 dump。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆扣不扣则方向 Medium；缺状态只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 40 / 华住字段 / wash%）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / 真 remaining:
  块状态（用户）/ 会不会从可售扣掉:
  画面 OCC（含暂定）:
  BAR / 拟议动作（按暂定涨 / 关散客 / dump 399）:

Diagnosis:
  形: A 假高峰 / B 锁散客 / C dump 399 / D 强暂定→P52 / E 问扣不扣 / F 移交
  真 remaining + Pace（Ahead / On / Behind）:
  扣库存: 是 / 否 / Unknown

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非真 remaining 已进 P03）
  Inventory:   不扣库存则公开渠道 OPEN；不要关给 Hold
  Do-not-do: 按暂定 OCC 涨；关 BAR 给 Hold；BAR→399；一夜 −15%；编华住字段 / wash%

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS / RMS 点击步骤。禁止输出「华住暂定该怎么配」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出还没接、这是询价 | **P10** |
| 用户补出已转 Definite / 本店确认扣库存，问题是 pickup vs cutoff | **P52** |
| 用户补出 IDeaS Strong Tentative 扣库存 | **P52**。不要 dump |
| 用户确认不扣库存 | 维持 A/B/C：不涨、不关 BAR、不 dump 399 |
| 用户补出会带房赢会 | **P50** |
| 用户补出只要厅 | **P51** |
| 用户补出机组 | **P31** |
| 用户补出散客高取消 | **P14** |
| 销售仍要把 BAR 砍到 399「反正是暂定」 | **拒绝。** 形 C |
| GM 仍要按暂定画面涨 | **拒绝。** 形 A |
| 销售仍要关公开 BAR 给 Hold | **拒绝。** 形 B |
| 重算后真 Remaining 紧 + 24h 散客 Pickup 仍正 + Pace Ahead | 移交 **P03**。理由仍不是暂定画面 |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；**仍禁止因为「反正是暂定」去 dump**；**仍禁止 BAR=399** |

300 间尺：不因假暂定高峰发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 按暂定画面 Increase BAR | GM 见「占了 40 间」就要 +100 | 奖励假高峰；不扣库存时赶走付费散客 |
| 关公开 BAR 给 Hold | 销售「先锁别卖散客」 | 未转 Definite ≠ 已卖；高峰挡真需求 |
| dump 399「反正是暂定」 | 销售坚持 BAR→399 | 未扣库存本来就可卖 BAR；公开底被一夜改写 |
| 把 Strong Tentative 当弱暂定 | 「暂定就能卖」 | IDeaS Strong Tentative **扣库存**；该走 P52 不是 dump |
| 把 OPERA/IDeaS 名写成华住 SOP | 编 暂定/确认 字段表 | 本店名 NV。Vendor 对照不是中国 SOP |
| 真 remaining 紧却因「怕误诊」死不涨 | 已扣库存 + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 误入接团 / cutoff / 会带房 / 只要厅 / 机组 | 客源或过程不对 | 离开本剧 |

---

## 9. 盯什么

- 块状态有没有从 Tentative/Hold 转 Definite  
- 这张块会不会从可售里扣掉（用户确认，不是编华住字段）  
- 散客净 Pickup（不是含暂定的画面 OCC）  
- 公开 BAR 有没有被按暂定画面改高，或被 dump 成 399  
- 公开渠道有没有被关给一张 Hold  
- 销售是否把 Strong Tentative 当弱暂定继续卖  
- wash / attrition：**登记观察，本剧不写 %**（本店仍 NV）

---

## 10. Confidence / 边界

能拆两轴（Stay Date + 块已挂 + 会不会扣库存 + BAR + remaining）→ 方向 **Medium**（不按暂定 OCC 涨、不关 BAR 给 Hold、不 dump 399）。  
缺扣不扣只条件化 = **Low–Medium**。  
IDeaS mapping = **A Vendor RMS inbound**，不是中国 SOP。OPERA DED INV / NON DED INV / 例 Definite 扣 Tentative 不扣 = **A Vendor PMS**，不是华住字段表。动作 = **B / Hypothesis**。  
华住 暂定/确认 字段表、本店 wash%、10–25%、点弹性 = **NV**，不编。  
本店状态名没给 → **问，不编华住表**。

仿真：`cases/sim-2026-tentative-sat.md`（**Simulation**，不是真店）。周六 Tentative 40 间、画面紧、真 remaining 50（若不扣）→ **不按暂定 OCC 涨；不锁 BAR 给 Hold；Hold 779–799 首选 799；禁 dump 399。** 若用户确认 Strong Tentative 扣库存 → **P52 不 dump**。40/50/799/399 只在该卷。399 = 被拒绝的 dump。未编华住字段 / wash%。

---

## 11. 证据（2026-08-25 22:17 核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| IDeaS：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣；Prospect / Weak Tentative / Cancel 不扣 | A Vendor RMS inbound | **Known 映射；不是中国 SOP / 不是华住字段** | IDeaS developers groupblocks（§28 指针，20:17 已开） |
| OPERA Cloud：INQUIRY / NON DED INV 不扣；DED INV 扣；CANCEL 放回 house | A Vendor PMS | **Known 状态类型；店配码名，不是华住 SOP** | OPERA Cloud 26.2 Block and Catering Event Statuses（§29 新开） |
| OPERA 5.6 例：Definite 扣库存、Tentative 不扣、Cancel 放回 | A Vendor PMS | **Known 举例；不是强制中国码名** | OPERA 5.6 Status Codes（§29 新开） |
| HSMAI definite / tentative 词条 | — | **仍 404。不编词条页** | 20:17 已 404；本轮不重当新发现 |
| 不按暂定 OCC 涨；不关 BAR 给 Hold | B / Hypothesis | 动作 | 本库 P01 remaining + P52 对照 |
| 华住 暂定/确认 字段表；wash%；399 行情 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页）：

```
HSMAI glossary definite / tentative     仍 404（20:17）
华住 暂定 确认 字段 官方
本店 wash% 10-25
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-STAT-01 | 本店 PMS 暂定/确认 状态名（含华住字段） | **仍 NV。不编。** 问会不会从可售扣掉。不把 OPERA TENT/DEF 外推成华住 SOP |
| NV-STAT-02 | 本店 IDeaS 是否按 inbound 映射扣库存 | 有 IDeaS 则对照 Vendor 映射；无则问本店。**不把映射写成中国 SOP** |
| NV-WASH-01 | 本店 wash % / 历史滑移 | **仍 NV。不编。** 不写第二本 wash 剧本 |
| NV-WASH-02 | 本店 cutoff 天数 / 华住 cutoff SOP | **仍 NV。** 已扣库存走 P52 再问 |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 22:17 CST | drafted。BACKLOG P53。六形 A 假高峰不按暂定 OCC 涨 / B 不关 BAR 给 Hold / C 禁止 dump 399 / D Strong Tentative 扣库存走 P52 / E 问扣不扣本店名 NV / F 误入 P10·P52·P50·P51·P31。主卡 `dont-raise-on-tentative-occ.md`。仿真 `sim-2026-tentative-sat.md`。IDeaS 标 Vendor。不编华住字段 / wash%。40/50/399/799 Simulation only。399 = 被拒绝的 dump。不是 P52 重写。 |

---

## 14. 交叉（不改 P01–P52 正文；P52/P10/P05 仅文末一行）

- **P10**：询价 Accept/Reject/Counter。本剧是 **已挂状态** 的扣不扣库存。rooms-only 询价仍走 P10。  
- **P52**：已扣库存的 Definite：pickup vs cutoff vs house return。本剧是状态轴（暂定 vs 确认）。Strong Tentative 扣了 → 交给 P52。  
- **P50**：会带房 = 要厅 **and** 小房块去赢会。本剧不回答 dump BAR 赢会。  
- **P51**：只要厅不要房。本剧是客房块状态。  
- **P14**：散客高取消 Soft OTB。本剧是团块状态，不是散客取消潮。  
- **P31**：机组 allotment / extra。持续合同 ≠ 一场团暂定/确认。  
- **P01 / P03**：看 **真 remaining** + Pace，不是含未扣暂定的画面 OCC。  
- **P05**：leftover dump 对象是还能卖的付费空房。禁止因为「反正是暂定」去 dump。禁止 BAR→399。  
- **T20**：不砸品牌底去清一张暂定。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。  
- **wash / attrition**：词条 + 观察尺。本店 % **NV**。不写第二本 wash 剧本。

> 交叉指针（2026-09-02 14:17 S02-14，不改正文）：§115 OPERA Hold Room Conditions + Blocks Quote Reference = 分房暂留/报价号 ≠ 公开 BAR rewrite；暂定/Hold 过程仍本剧。不开 P88。
