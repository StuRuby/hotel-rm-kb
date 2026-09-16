# Simulation Case｜周六暂定 40 间把画面打满：不按那张 OCC 涨；不锁 BAR 给 Hold；Hold 779–799 首选 799；禁 dump 399

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-tentative-sat.md`  
> 日期：2026-08-25  
> 问：「暂定团占了 40 间，OCC 看起来很满要不要涨」「Tentative 没转 Definite，散客卖不动」「销售说先把暂定锁上别卖散客」「弱暂定也要关散客」  
> 调用：`dont-raise-on-tentative-occ.md` · P53 `definite-vs-tentative.md` · `metrics/group-status-inventory.md` · P10 · P52 · P50 · P51 · P14 · P31 · P01 / P03 / P05 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**Tentative 40 间、真 remaining 50（若不扣）、BAR 799、拟议 dump 399、拟议 +100 只在本文件当 Simulation，不是市场行情 Fact，不是华住 暂定/确认 SOP，不是推荐 BAR。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 dump**，不是新 BAR。不伪造精确增收。不编 wash% / 10–25% / 华住字段表。Advisor 不操作 PMS。本卷 **不** 把 BAR dump 到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一张已挂着的周六 Tentative 块。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-25 周二 22:17 CST
Stay Date：2026-08-29（本周六）
DTA：4
用户原话：「暂定团占了 40 间，OCC 看起来很满要不要涨？Tentative 没转 Definite，散客卖不动。销售说先把暂定锁上别卖散客。弱暂定也要关散客。」
GM：画面很满，BAR 799 → 899（+100）
销售：先关公开 BAR 给这张 Hold；或 BAR dump 到 399「反正是暂定」

块（Simulation only，发明数）：
  用户状态：Tentative / Hold（未转 Definite）
  块间数：40
  会不会从可售扣掉：本卷主拍 = **不扣**（IDeaS Tentative/Hold 对照）。第二拍 = 用户改口 Strong Tentative **扣库存**
  本店 PMS 状态名：Unknown（NV，不编华住字段）
  wash% / 罚金：Unknown（不编）

库存（Simulation）：
  Physical：180  OOO：0
  其他付费占用（散客等）：130
  若 Tentative 40 **不扣库存**：
    真 remaining = 180 − 130 = **50**
    画面若把 40 暂定算占用：画面 remaining = 50 − 40 = **10**；画面 OCC = 170/180 ≈ **94%**（用户口中「很满」）
  若 Strong Tentative **扣库存**：
    可售剩余 = 180 − 130 − 40 = **10**（第二拍 → P52，不是 dump）
  3D 散客 Pickup：+6（约 2 间/日）
  Pace：On / 略 Ahead vs STLY（Hypothesis 练习；按画面 remaining 10 会误判紧）
  公开 BAR（标准、不含早、灵活）：799

拟议 A：按画面 94% 把 BAR 799 → 899（+100）
拟议 B：关公开 BAR，先锁暂定别卖散客
拟议 C：BAR dump 到 399「反正是暂定 / 反正会 wash」
拟议 D（第二拍）：用户确认 Strong Tentative 扣库存 → 当 leftover dump 399
```

40 / 50 / 10 / 399 / 799 **只是本卷练习数**。399 **不是**推荐 BAR，是被拒绝的 dump。本卷 Advise **不** dump BAR 到 399。本店 wash% **不出现在本卷当常模**。本店 PMS 状态名 **不发明**。

---

## 1. Intake

口径：不扣库存的 Tentative 40 **不进**「已卖掉的需求」。IDeaS Tentative/Hold 不扣（Vendor RMS inbound，不是中国 SOP）。OPERA NON DED INV 不扣（Vendor PMS 店配，不是华住 SOP）。  
独立店。无声明品牌底 → **不发明华住 暂定/确认 字段表**。  
Wash % = **Unknown**，不编 10–25%。

| 尺 | 本卷周六主拍（不扣） |
| --- | --- |
| Physical | 180 |
| Tentative 块 | **40** |
| 真 remaining | **50** |
| 画面 remaining / 画面 OCC | **10** / **~94%** |
| Pace | On / 略 Ahead |
| BAR | 799 |
| 销售/GM 拟议 | +100 / 关散客 / dump 399 |

Pace：线性 Days-to-Sellout @ 真 remaining 50 / 2 间/日 = **25 日 > DTA 4**，更不是按画面 10 间去涨。画面 10 间是假紧。

**预选 3 个补数：** 这张块会不会从可售里扣掉；是否 IDeaS Strong Tentative；8/29 前 24h 散客 Pickup。wash% 不问成「行业多少」。本店字段名问「会不会扣」，不编华住表。

本卷 **不** 操作 PMS、不改 BAR、不关散客、不改块状态。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/25 22:17 CST。Stay Date 8/29 周六，DTA 4。

已挂 Tentative/Hold 40 间，未转 Definite。主拍按 **不扣库存**：真 remaining **50**；画面若把暂定算占用则 remaining 10、OCC ~94%。Pace On/略 Ahead。公开 BAR 799。

GM 要按画面满 +100。销售要关公开 BAR 锁暂定，或 dump 到 399「反正是暂定」。

本卷 **不是** 真店，也不是「中国暂定=40/180」Fact。399 不是推荐 BAR。IDeaS 映射只 Vendor 对照。

---

## 3. Diagnosis

主拍 — 形 **A + B + C**（可叠；第二拍 D）

1. **假高峰（A）：** 暂定 40 把画面打到 ~94%。不扣库存。真 remaining 50。**不是**按那张 OCC Increase BAR 的理由。  
2. **锁散客（B）：** 未转 Definite、不扣库存 ≠ 已卖需求。高峰不要把公开 BAR 关给这张 Hold。  
3. **弱暂定 dump（C）：** 未扣库存的 40 本来就在 50 间可售里。禁止 dump BAR 到 399「反正是暂定」。禁止一夜 −15%。  
4. **不是 P10**（块已挂，不是询价）。**不是 P52 主拍**（主拍不扣库存；P52 是已扣库存的 pickup vs cutoff）。不是 P50/P51/P14/P31。

第二拍（仍 Simulation）：用户确认 Strong Tentative **扣库存** → 形 **D**。remaining 变 10。**走 P52 尺，不是 dump 399。** 不要把强暂当弱暂继续卖。

---

## 4. Options（不编增收精确值）

| 选项 | 评 |
| --- | --- |
| A. 按画面 94% 把 BAR 799→899（+100） | **拒。** 形 A。假高峰 |
| B. 关公开 BAR 给 Hold | **拒。** 形 B。不扣库存 ≠ 已卖 |
| C. BAR→399「反正是暂定」 | **拒。** 形 C。399 = 被拒绝的 dump，不是推荐 BAR |
| D. Hold 779–799 首选 799；公开渠道保持 OPEN | **选。** 主拍不扣库存 |
| E. 现在就按 leftover 走 P05 | **拒作主拍。** 不是「因为暂定」。真 remaining 50 且 Pace 非 Behind 弱市 → 不自动 dump |
| F. 第二拍：扣库存后 dump 399 | **拒。** 形 D → P52，不是 dump |
| G. 发明华住字段 / wash 10–25% | **拒。** NV，不编 |

---

## 5. 顾问十节（对用户压缩）

### 1. Situation

180 间仿真店，8/29 周六，DTA 4。Tentative 40 间未转 Definite。主拍不扣库存：真 remaining 50；画面 remaining 10、OCC ~94%。Pace On/略 Ahead，BAR 799。GM 要 +100；销售要关散客或 dump 399。

### 2. Diagnosis

形 **A 假高峰 + B 锁散客 + C dump 399**。不扣库存的暂定不是已卖需求。画面 OCC ≠ 散客紧。不是 P10/P52 主拍/P50/P51/P14/P31。

### 3. Opportunity / Risk

机会：停一次假高峰涨、停一次关 BAR 给 Hold、停一次 399 dump，50 间真 remaining 继续按 BAR 卖。  
风险：现在涨赶走散客；关 BAR 挡高峰；dump 改写公开底；第二拍若其实扣库存却当弱暂去卖。

### 4. Recommended Action

```text
Stay Date: 2026-08-29 Sat
Physical 180 / 真 remaining 50 / 画面 remaining 10 / Pace On
Tentative 40 / 主拍不扣库存 / 本店状态名 NV
Decision: Hold public BAR 779–799 首选 799
          拒绝按暂定 OCC 涨（不要 +100）
          拒绝关公开 BAR 给 Hold
          拒绝 dump 399「反正是暂定」
          若用户确认 Strong Tentative 扣库存 → 离开，进 P52，仍不 dump
Do-not-do: BAR→399；一夜 −15%；华住 暂定/确认 字段表；编 wash%；操作 PMS
```

### 5. Why

先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 **NV**，不把 OPERA 字段名外推成华住 SOP。  
销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。  
已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。

IDeaS mapping = Vendor RMS inbound（§28）。OPERA DED INV vs NON DED INV = Vendor PMS（§29）。不是华住 SOP。

### 6. Expected Impact

方向：停一次按 94% 涨；停一次关 BAR；停一次 399 dump。真 remaining 50 继续可卖 BAR。不伪造精确增收。399 未成为新 BAR。

### 7. Risk

销售仍报 399；GM 仍按画面涨；公开渠道被关；第二拍其实是 Strong Tentative 扣库存却当弱暂去卖。

### 8. What To Watch

- 块是否转 Definite / 用户是否确认扣库存  
- 散客净 Pickup（不是画面 OCC）  
- 公开渠道有没有被关给 Hold  
- 公开渠道有没有出现 399 当 BAR  
- 真 remaining 是否仍约 50

### 9. Re-evaluation Trigger

- 用户确认 **不扣库存** → **仍 Hold 779–799 首选 799**；公开 OPEN；不涨不 dump。  
- 用户确认 Strong Tentative **扣库存** → **P52**；remaining 10；**仍禁止 dump 399**。  
- 24h 散客 Pickup 仍正 + 真 remaining 变紧 + Ahead → 可评 P03，理由不是暂定画面。  
- 真 remaining 厚、Pace **Behind**、市场弱 → 才评 **P05** 围栏；仍禁一夜 −15%；仍不写 399；仍不是「因为暂定」。  
- 用户改口：这是询价还没接 → **P10**。会带房赢会 → **P50**。只要厅 → **P51**。机组 → **P31**。散客取消潮 → **P14**。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、40/50 已声明 Simulation、画面 vs 真 remaining、BAR 799）。点价 799 / 399 为 **Simulation**。本店字段名 / wash% / 华住 SOP = **Unknown / NV**。本卷不声称真实酒店结果。399 不是推荐 BAR。IDeaS 标 Vendor。

---

## 6. 第二拍（仍 Simulation）：Strong Tentative 扣库存

> 同一块骨架。**不另开第二份矛盾仿真。** Headline 主拍仍 Hold 779–799 首选 799。本拍只说明：扣了走 P52，不是 dump。

| # | 判定 |
| --- | --- |
| 假设 | 用户确认 IDeaS Strong Tentative → 扣库存 |
| Remaining | 180 − 130 − 40 = **10** |
| 涨 BAR？ | **不按「暂定」涨。** 若评涨，理由是已扣库存后 remaining，须另走 P01/P03 — 本卷不把门开成 +100 |
| dump BAR？ | **不。** 走 **P52** 尺（pickup vs cutoff），不是「暂定就能卖」 |
| 399？ | **仍拒绝。** 399 始终是被拒绝的 dump |
| Hold | 公开 BAR 仍 779–799 首选 799，直到 P52 重算 pickup/cutoff |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 22:17 CST | 首版 Simulation。40/50/799/399 仅本卷。399 = 被拒绝的 dump。主拍不扣库存 Hold 799；第二拍扣库存 → P52 不 dump。未编华住字段 / wash%。 |

Diagnose 尺见 **T-Status** `theory/group-inventory-deduct.md`（2026-08-26 00:17）。本卷 Simulation 数字不改。主卡仍复用。不写 P54。
