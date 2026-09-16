# Simulation｜2026 OOS vs OOO denominator confusion vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-oos-vs-ooo-sat.md`  
> 配：Diagnose 走 **P37** `advisor-playbooks/ooo-capacity.md`；理论 **T06** `theory/capacity-ooo.md`；过程 + **P03**（真紧 Ahead）/ **P05**（真 leftover Behind）± **P33**（CTA≠OOO）± **P13**（一型 OOO）± **P66**（假 OCC 进 Rate Strategy）  
> 短例仍在 P37 / T06 / S05-06 / T05-08 skip；本卷 = callable 专卷（**C05-10**）  
> **≠** `sim-2026-ooo-occ-92-saturday.md`（那是「OOO 砍分母 → 假 92%」主枝；本卷专拍 **OOS 跟 OOO 混算 / OOS 当不可售 dump**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T05-08 OOS vs OOO deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 库存状态层（Simulation — NOT Fact；不是华住字段名）：**OOO/OO 8 间**（从可售库存剔除、不可分配）+ **OOS/OS 12 间**（仍留库存、仍可分配；OPERA OO removed / OS remain 语义）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「停用+维修一共 20 间，OOS 跟 OOO 一样扣了所以物理空很多要砸 / OCC 好看是假满先砍 / 工程停用房算不可售所以清库存」
- 用户原话（**NOT Fact**；本店 OO·OS 字段 / 华住 Unit Status SOP / 默认维修间夜 / 699 Fact / Walk $ / 佣金% / Vendor China Fact = **NV**）：
  - 「OOS 跟 OOO 一样从可售扣了，还剩一大坨物理空，先砍到 399」
  - 「停用房很多，OCC 好看是假的，别硬撑，砸了再说」
  - 「工程停用跟维修一个意思，都算不可售，空着不如 399」
  - 「报表把 OS 也当 OO 了，分母小了所以满，先跟 399 清」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；库存状态是 **OOO removed ≠ OOS remain**；过程输入是 **真可售 Remaining · Pace · PMS 是否把 OS 当 OO 扣** → **P37 / T06**。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. OOS ≠ OOO：OPERA **OO 剔除库存**；**OS 仍在库存可分配**。把 OS 当 OO → 假不可售 / 假剩余 / 假高峰。库存状态 ≠ 公开 BAR Type。
4. **拒绝** BAR→399（OOS=OOO 所以 dump / 停用房算不可售所以砸 / 混算分母后清库存）。
5. 分母误读 → **P37**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 OOS 池写成 dump 燃料；禁一夜 −15%）；CTA 假满 → **P33**；一型 OOO → **P13**；假 OCC 进自动关档 → **P66**；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 OO·OS 字段 / Unit Status SOP / 默认维修间夜 / Walk $ / 佣金% / Vendor China Fact。不把 Vendor 例当中国常模。
7. 早会一个动作：纠正「OOS ≠ OOO；OS remain ≠ 不可售 dump」+ Hold 公开 BAR；先问报表是 OO 还是 OS、分母扣不扣。

## 禁止

- 把 14/399/799 / 8 OOO / 12 OOS 当市场 Fact
- 编华住 OO·OS 字段、Unit Status SOP、默认维修间夜、699 Fact、Walk $、佣金%、Vendor China Fact
- 把 OPERA/Stayntouch/STR Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T05-08 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / P66 核心**（本卷核心是 OOS≠OOO 分母轴）
- 把本卷当成已有 `sim-2026-ooo-occ-92-saturday.md` 的重写（那是 OOO 假 92% 主枝）

## Outcome 标签

- 399 = 被拒绝的 dump（OOS vs OOO 混算改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。库存状态层：OOO/OO 8 间（剔除、不可分配）+ OOS/OS 12 间（仍留库存、仍可分配）（Simulation 闸，不是 Fact）。销售/GM 把 OOS 跟 OOO 混算：停用+维修一共 20 间都当不可售 → 物理空「很多」要砸到 399；或把 OS 当 OO 砍分母喊假满再清库存。本店 OO·OS 字段 / 华住 Unit Status SOP / 默认维修间夜 = **NV，不编**。

### 2. Diagnosis

**P37**（+ **T06**；过程 ± **P03/P05** ± **P33** ± **P13** ± **P66**）。三把尺：公开 BAR 799 ≠ OOO removed ≠ OOS remain。先拆：报表写的是 OO 还是 OS、PMS Available 是否把 OS 当 OO 扣、真可售 Remaining 是否仍 ≥14。形「OOS=OOO 所以 dump 399」+ 形「停用房算不可售所以砸」（禁）。Ahead 夜：库存状态混算不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ P66 核心。** T05-08 deepen **已 skip**（无新轴；本卷是既有 P37 的 OOS 专拍）。

### 3. Opportunity / Risk

机会：拆 OO/OS 后高峰仍 Hold 公开灵活；OS 仍可分配则不可把 12 间当 dump 池；真紧才移交 P03。风险：把「OOS=OOO」训练成新 BAR；把仍可售的 OS 当物理空砸到 399；把混算假高峰当地板或涨令后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Inventory status: verify OO vs OS · OOO removed ≠ OOS remain · recount sellable Remaining
If mis-labeled: fix status / denominator (P37/T06)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 OO·OS 字段 SOP；默认维修间夜；699 Fact；Vendor China Fact；一夜 −15%；P88
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；OS 不当 dump 燃料）；CTA 假满 → P33；一型 OOO → P13；假 OCC 进 auto → P66；早会 → P45；OOO 假 92% 孪生 → sim-2026-ooo-occ-92-saturday.md
```

### 5. Why

OPERA Configuring OO/OS Reasons：**OO** 从库存拿掉、不可分配；100% OCC 例 = Inventory − OO；**OS** 仍在库存、仍可分配。Managing OOS：OOS **not removed**、available to assign。Managing OOO：OOO **removed**、不可分配。Stayntouch（T06 既有）：OOO 扣 availability；OOS 不扣（仅该 PMS）。Forward STAR：为省成本关掉的 OOS **仍计入** Adjusted Rooms Available（A，仅 Forward）。→ **OOS ≠ OOO；库存状态 ≠ 公开灵活 BAR rewrite**。Pace Ahead + remaining 14 = 需求仍紧，不是「停用房混算」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把 OOS 池永久化成 399 dump；分母尺留闸。不伪造增收、不代改 Unit Status、不发明 699。

### 7. Risk

若对象其实是纯 OOO 砍分母假 92% → 同 **P37**（孪生卷 `sim-2026-ooo-occ-92-saturday.md`）。若 CTA/配额假满 → **P33**。若一型 OOO → **P13**。若假 OCC 触发 Rate Strategy → **P66**。若真 Behind 且 OS/OO 已分清 → **P05/P02**（仍不把 OS 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认维修间夜 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；报表是 OO 还是 OS；PMS Available 是否误扣 OS；真可售 Remaining；OS 是否仍可分配；混算纠正后 24h Pickup；是否误入 T-Window / T-Hurdle / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；OOS 不当改尺令。
- 确认 OS 被误标成 OO → **P37/T06** 纠正状态/分母；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是混算 OCC）。
- 真 Behind 且状态已分清 → **P05/P02**（理由 Pace；仍不从 OOS 池改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 OOS 混算改尺许可证。

### 10. Confidence

方向 Medium（能拆 OOS≠OOO + Pace Ahead + 「库存状态≠定价权」）。点字段名 / 华住 SOP / 默认维修间夜 Low（NV）。Evidence A Vendor OPERA OO/OS Reasons + Managing OOS + Managing OOO（§140；本小时 curl 复核）+ Stayntouch/Forward STAR（T06 既有）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 OOS vs OOO 混算 dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P37 主过程 + T06；孪生 OOO 假 92% 卷 `cases/sim-2026-ooo-occ-92-saturday.md`。**T05-08 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-05 10:17 C05-10，不改正文）：§141 CASE 指针复述 §140。Diagnose 走 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
> 指针（2026-09-05 12:17 R05-12，不改正文十段 / 399 / 799）：§142 新开 Protel Air OOO≠OOS + Cloudbeds OOS Blocking + Occupancy Discrepancies。Diagnose 仍 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
