# Simulation｜2026 Sell Limit / Channel Sell Limit / Allowed OB misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-sell-limit-misread-sat.md`  
> 配：Diagnose 走 **P24** `advisor-playbooks/overbooking-walk.md` + **P33** `advisor-playbooks/restriction-overuse.md`；过程 + **P58**（切房桶）± **P37**（分母）± **P35/P60**（曝光/错码）± **P03**（真紧 Ahead）/ **P05**（真 leftover Behind）  
> 短例仍在 P24 / P33 / S05-14 / T05-16 skip；本卷 = callable 专卷（**C05-18**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T05-16 Sell Limit deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 可售数量闸层（Simulation — NOT Fact；不是华住字段名）：
  - House / Room Type **Sell Limit** 正值已顶（物理房 + Sell Control；OPERA 正=超售加卖语义）
  - 负 **Sell Limit** 曾对某房型 under-book 减卖（Simulation 闸）
  - **Channel Sell Limit**：美团渠道×大床×当日限额已满 / 送 0（OPERA Channel×Room Type×日期）
  - **Allowed Overbooking** 刚手工调过（Apaleo Allowed OB = ± 可售、不改物理库存）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「Sell Limit 到顶了说明卖不动 / 负 Sell Limit 说明需求死了 / 美团额度满了全店砍 / Allowed OB 调了新尺就是 399」
- 用户原话（**NOT Fact**；本店 Sell Limit 字段 / 华住渠道额度 SOP / 默认超售垫 / 渠道% / 699 Fact / Walk $ / Vendor China Fact = **NV**）：
  - 「Sell Limit 到顶了，可售满了，先砍到 399 清一清」
  - 「负 Sell Limit 开着，说明卖不动，BAR 跟到 399」
  - 「美团额度满了，全店需求死了，砸公开价」
  - 「Allowed OB 刚调完，系统已经认 399 是新尺」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；可售数量闸是 **Sell Limit / Channel Sell Limit / Allowed OB**；过程输入是 **真可售 Remaining · Pace · 闸是 House 还是房型 / 正负零 / 是否单渠** → **P24 / P33**（+ P58）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Sell Limit ≠ 需求曲线 ≠ 公开 BAR Type：正值=超售加卖能力；负值=under-book 减卖；Channel 限额=一渠可售上限；Allowed OB=手工 ± 可售、不改物理库存。可售闸满 / 送零 ≠ 「全店需求死了该 dump」。
4. **拒绝** BAR→399（Sell Limit 到顶 dump / 负闸当弱需求砸 / 一渠满全店砍 / Allowed OB 当地板）。
5. 已超/Walk 程序 → **P24**；闸误挡（负 Sell Limit / 过度减卖）先松闸不砍尺 → **P33**；切房桶 → **P58**；分母 → **P37**；曝光/错码 → **P35/P60**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把可售闸写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 Sell Limit·渠道额度 SOP / 默认超售垫 / 渠道% / Walk $ / Vendor China Fact。不把 Vendor 例当中国常模。不建议用户点后台改 Sell Limit（Advisor-First）。
7. 早会一个动作：纠正「可售闸 ≠ 公开 BAR；一渠限额 ≠ 全店需求」+ Hold 公开 BAR；先问闸是 House 还是房型、正/负/零、是否只美团满。

## 禁止

- 把 14/399/799 / 正负 Sell Limit / 渠道额度 / Allowed OB 数字当市场 Fact
- 编华住 Sell Limit·渠道额度 SOP、默认超售垫、渠道%、699 Fact、Walk $、Vendor China Fact
- 把 OPERA/Apaleo Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T05-16 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / P66 / P37 核心**（本卷核心是可售数量闸 ≠ 公开尺）
- 把本卷当成已有超售 Walk 仿真的重写（那是赶客程序；本卷专拍 **闸误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（Sell Limit / Channel Sell Limit / Allowed OB 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。可售数量闸层：House/RT Sell Limit 正值已顶；某房型曾负 Sell Limit under-book；美团 Channel Sell Limit 当日满/送 0；Allowed OB 刚手工调过（Simulation 闸，不是 Fact）。销售/GM 把可售闸当成需求死了或新地板：Sell Limit 到顶 / 负闸 / 一渠满 / Allowed OB 调了 → 拟议 BAR→399。本店 Sell Limit 字段 / 华住渠道额度 SOP / 默认超售垫 / 渠道% = **NV，不编**。

### 2. Diagnosis

**P24** + **P33**（过程 ± **P58** ± **P37** ± **P35/P60** ± **P03/P05**）。三把尺：公开 BAR 799 ≠ House/RT Sell Limit（正超售/负减卖）≠ Channel Sell Limit（一渠×房型×日）≠ Allowed OB（± 可售、不改物理库存）。先拆：闸是 House 还是房型、正/负/零、是否只美团满、调闸后真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「可售闸满所以 dump 399」+ 形「负闸/一渠送 0 = 全店需求死」（禁）。Ahead 夜：可售数量闸不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ P66 核心 ≠ P37 OOS 核。** T05-16 deepen **已 skip**（无新轴；本卷是既有 P24/P33 的 Sell Limit 专拍）。

### 3. Opportunity / Risk

机会：拆闸后高峰仍 Hold 公开灵活；一渠满可只调该渠额度/还房（P58），不砍全店尺；负闸误挡先松闸（P33）不 dump。风险：把「Sell Limit 到顶」训练成新 BAR；把 Channel 送 0 写成全店弱需求砸到 399；把 Allowed OB 当地板后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Sell-control: verify House vs RT · +/-/0 · Channel-only vs house · Allowed vs Possible OB
If misread gate: fix/loosen sell-control (P24/P33/P58)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 Sell Limit·渠道额度 SOP；默认超售垫；渠道%；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；闸不当 dump 燃料）；切房桶 → P58；分母 → P37；曝光/错码 → P35/P60；已在赶客 → P24 Walk 程序；早会 → P45
```

### 5. Why

OPERA Managing Sell Limits：Sell Limit = 房型库存 + Sell Control Rooms；**正**=超售加卖（补取消/noshow）；**负**=under-book 减卖；零可插区间内单日。Managing Channel Sell Limits：按 **渠道 × Channel Room Type × 日期** 设 Number of Rooms — 一渠限额/送零 ≠ 全店需求曲线，也 ≠ 公开 BAR。Apaleo Managed Overbooking：**Allowed Overbooking** = 手工 ± 可售单位、**不改物理库存**；可正可负；Possible OB = 计算警告。→ **可售数量闸 ≠ 公开灵活 BAR rewrite**。Pace Ahead + remaining 14 = 需求仍紧，不是「闸到顶/一渠满」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把可售闸永久化成 399 dump；闸尺与定价尺分家。不伪造增收、不代改 Sell Limit、不发明 699。

### 7. Risk

若对象其实是已超售赶客 → 同 **P24** Walk 程序（本卷不重写赶客）。若切房合同桶未还 → **P58**。若 CTA/配额假满 → **P33**。若分母 OOO/OOS → **P37**。若真 Behind 且闸已分清 → **P05/P02**（仍不把闸写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认超售垫 / 渠道% 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；闸是 House 还是房型；正/负/零；Channel 是否单渠限额；Allowed vs Possible OB；调闸后 24h Pickup；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Sell Limit 不当改尺令。
- 确认负闸/一渠误挡 → **P33/P58** 松闸或还额度；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是闸到顶 OCC）。
- 真 Behind 且闸已分清 → **P05/P02**（理由 Pace；仍不从可售闸改写 BAR；禁一夜 −15%）。
- 已在赶客 → **P24** Walk 程序，不是一夜报复砸价。
- 预算月末压力 → **T20/P56**，不是 Sell Limit 改尺许可证。

### 10. Confidence

方向 Medium（能拆可售闸 ≠ BAR + Pace Ahead + 「可售数量闸≠定价权」）。点字段名 / 华住 SOP / 默认超售垫 / 渠道% Low（NV）。Evidence A Vendor OPERA Managing Sell Limits + Managing Channel Sell Limits + Apaleo Managed Overbooking（§143；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Sell Limit / Channel Sell Limit / Allowed OB dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P24 + P33 主过程；+ P58/P37/P35/P60/P03/P05。**T05-16 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-05 18:17 C05-18，不改正文）：§144 CASE 指针复述 §143。Diagnose 走 **P24**（+ **P33**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
> 指针（2026-09-05 20:17 R05-20，不改正文）：§145 新开 Stayntouch Sell Limits + Clock Availability Adjustment + Protel Overbooking Setup。Diagnose 走 **P24**（+ **P33**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
