# Simulation｜2026 Tax Display / City Tax Saturday（Simulation only）

> 路径：`cases/sim-2026-tax-display-city-tax-sat.md`  
> 配：Diagnose **T-Tax** `theory/tax-display-city-tax-vs-bar.md`；过程仍 **P79**  
> sibling all-in：`cases/sim-2026-resort-fee-allin-sat.md`（费核 / all-in 仍那卷；本卷专练税展示 / CITY_TAX）  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 用户原话（**NOT Fact**；本店税率 / 华住含税 SOP / 开票税率 / Vendor % NV）：
  - 「裸价才是真 BAR，含税太贵，BAR 改成 **399**」
  - 「城市税当地板」
  - 「Inclusive 勾了公开尺就该改完」
  - 「ADR 被税读脏所以 dump」
  - 「CITY_TAX Package 就是新 BAR」

## Advise（期望）

1. 先拆：定价尺是 **公开灵活 BAR 799**，不是 Tax Inclusive/Exclusive 展示，不是 CITY_TAX Package，不是 Apaleo Local Charges，不是「裸价才是真 BAR」。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 税层留在 Cloudbeds **Inclusive/Exclusive**、OPERA **Tax (Generate) Inclusive**、OPERA **CITY_TAX Package**、Apaleo **Local Charges**。配置/过账/展示对齐 **≠ BAR Type**。
4. ADR 被税读脏 = **READ** posting/桶，不是 rewrite。不把 OPERA/Cloudbeds/Apaleo Vendor % 例当中国 Fact。
5. **拒绝** BAR→399（裸价才是真 BAR / 含税太贵所以改尺 / 城市税当地板 / Inclusive 勾了所以改完 / CITY_TAX Package 就是新 BAR / ADR 被税看脏所以 dump）。
6. 若其实是强制费 / Resort / mandatory service / all-in 核 → **T-Fee / P79 费核**（本卷不替费核改尺）；竞对比价税/费口径 → **P36**；含早套餐 → **P69**；加床 → **P78**；真弱 leftover → **P05**（仍不从税层改写 BAR）；早会一个动作 → **P45**。
7. 早会一个动作：纠正「税展示/城市税包≠BAR」+ Hold 公开 BAR。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住含税 SOP、税率 Fact、开票税率、默认税 %、城市旅游税 Fact、佣金%、699、Walk $
- 把 Vendor % 例写入本仿真当市场 Fact / 中国税率
- 开 **P88** / **P89**
- 把 399 写成推荐 BAR
- 把 P36 竞对 / P69 含早 / P78 加床 / T-Fee 费核 / P05 leftover 当本店税层改尺令
- 把本卷叫成 T-Fee / T-Package / T-Extra

## Outcome 标签

- 399 = 被拒绝的 dump（税展示 / 城市税改尺）
- 799 = Hypothesis / Simulation 首选 Hold

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。用户把税展示 / 城市税包喊成尺：裸价才是真 BAR、含税太贵所以 BAR→399、城市税当地板、Inclusive 勾了公开尺就该改完、ADR 被税读脏所以 dump、CITY_TAX Package 就是新 BAR。本店税率 / 华住含税 SOP / 开票税率 = **NV，不编**。

### 2. Diagnosis

**T-Tax**（过程仍 **P79**）。三把尺：公开 BAR 799 ≠ Cloudbeds Inclusive/Exclusive / OPERA Tax Inclusive / CITY_TAX Package / Apaleo Local Charges ≠ 客人看到的含税总价或 ADR 被税桶读脏。税层 = 展示/过账对齐，不是 BAR Type。形 A 混尺 + 形 B 改尺 399 + 形 C ADR READ + 形 E 旗/包当尺。Ahead 夜：税层不被允许改公开 BAR。

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活，税留在税表/包，OTA 源税对齐（若真错配）不必砍尺。风险：把裸价/含税/城市税地板训练成新 BAR；把 Inclusive 勾选读成「改完价」；把 ADR 脏当成 dump 令。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Tax layer: stay in Inclusive/Exclusive · Tax Inclusive · CITY_TAX Package · Local Charges
ADR dirty: READ posting/桶；do not rewrite BAR
Reject: BAR→399
Do-not-do: 华住含税 SOP；税率 Fact；开票税率；Vendor % China Fact；一夜 −15%；P88
Misroute: 强制费核 → T-Fee/P79；竞对 → P36；含早 → P69；加床 → P78；真弱 → P05；早会 → P45
```

### 5. Why

HSMAI BAR = non-qualified publicly available，不是税展示。Cloudbeds Inclusive/Exclusive 与 OTA 源对齐、OPERA Tax Inclusive 旗、CITY_TAX Package 过账、Apaleo Local Charges Included/on top 都只证明「税怎么算/显示/过账」，不证明「公开灵活该写成裸价或含税地板」。Pace Ahead + remaining 14 = 需求仍紧，不是税地板许可证。

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把税层永久化成 399。不伪造增收、不代算税额。

### 7. Risk

OTA 源税若真 Inclusive/Exclusive 错配，总额会对不上——应对是对齐源税，不是 rewrite BAR。税率 / 开票 / 华住含税 SOP 仍 NV；顾问不编。若对象其实是 Resort/强制服务费，应交 T-Fee 费核，本卷不替费核改尺。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；税是否仍关在税表 / CITY_TAX Package / Local Charges；OTA 源税是否对齐；24h 公开 Pickup vs 含税展示（分看）；公开渠道是否出现 399；误入 T-Fee / P36 / P69 / P78 / P05 是否已移交。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；税层不动尺。
- 真 Behind 且 remaining 厚 → **P05**（理由写 Pace；仍不从税地板改写 BAR；禁一夜 −15%）。
- 对象变成强制费/all-in → **T-Fee / P79 费核**。竞对含税截图 → **P36**。含早 → **P69**。加床 → **P78**。

### 10. Confidence

方向 Medium（能拆税层 vs 公开 + Pace Ahead）。点税率 / 开票 / 华住含税 SOP Low（NV）。Evidence A Vendor PMS（§111/§112 指针）+ A 协会 HSMAI BAR。799 / 399 仅为 Simulation / Hypothesis。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的税展示/城市税 dump，不是推荐 BAR。

> 交叉：sibling all-in `cases/sim-2026-resort-fee-allin-sat.md` 仍覆盖费核/all-in 戏剧；本卷专练 T-Tax 用户句。**不开 P88。不规定 P89。** 14/399/799 Simulation only。

> 指针（2026-09-02 12:17 R02-12）：§114 protel City Taxes + Clock City Tax Mode。Diagnose 仍 T-Tax、过程仍 P79；Hold 779–799 首选 799；拒 399 **不改**。不开 P88。
