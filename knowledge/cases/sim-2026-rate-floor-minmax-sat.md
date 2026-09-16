# Simulation｜2026 Rate Floor / Min·Max Saturday（Simulation only）

> 路径：`cases/sim-2026-rate-floor-minmax-sat.md`  
> 配：Diagnose **T-Floor** `theory/rate-floor-vs-bar.md`；过程仍 **T20** `theory/revenue-strategy.md` + `recommendations/do-not-break-brand-floor.md`  
> 短例仍在 T-Floor §9；本卷 = callable 专卷（C02-18）  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- Rate Floor / Min·Max Allowed 屏上显示 **399**（**Simulation — NOT Fact**；不是本店地板、不是华住默认、不是推荐 BAR）
- 用户原话（**NOT Fact**；本店 Rate Floor 字段 / 华住 Rate Floor SOP / 默认地板 % / 699 Fact / Walk $ / 佣金% / Vendor $ China Fact = **NV**）：
  - 「品牌底所以不能动」
  - 「底价当地板改尺」
  - 「地板=399所以公开也399」
  - 「RATE_FLOOR / Min·Max 就是公开价」
  - 「系统地板多少 BAR 就多少」
  - 「无声明却发明 699」（顾问侧禁令；本店 **未** 声明品牌底）

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；日程保护是 OPERA **RATE_FLOOR / Min·Max Allowed**、Signals·Cloudbeds **Min/Max Rate**、OPERA 5.6 **Rate Floor** 字段；用户声明品牌底 → **T20**（本店 **无声明 → 不发明 699**）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 地板留在 OPERA RATE_FLOOR / Min·Max Allowed / Signals·Cloudbeds Min/Max / OPERA 5.6 Rate Floor 字段。日程保护 / 推荐边界 **≠ BAR Type**。
4. **拒绝** BAR→399（品牌底所以不能动所以公开也跟地板 / 底价当地板改尺 / 地板=399所以公开也399 / RATE_FLOOR 屏就是公开价 / 系统地板多少 BAR 就多少）。
5. 无用户声明品牌底 → **不发明 699**；有声明才走 brand-floor Hold（本卷 Setup = 无声明）。
6. 若其实是 hurdle/LRV → **T-Hurdle / P85**；年标/议价 → **T-Corp / P71**；RMS 建议穿底 → **P66**；真弱 leftover → **P05**（仍不从地板改写 BAR；禁一夜 −15%）；早会一个动作 → **P45**。
7. 早会一个动作：纠正「Rate Floor / Min·Max ≠ 公开 BAR」+ Hold 公开 BAR；无声明不发明 699。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住 Rate Floor SOP、默认地板 %、699 Fact、Walk $、佣金%、Vendor $ China Fact
- 把 OPERA/Signals/Cloudbeds Vendor $ 例写入本仿真当市场 Fact / 中国地板
- 开 **P88** / **P89**
- 把 399 写成推荐 BAR
- 无声明却发明 699
- 把 T-Hurdle/P85 / T-Corp/P71 / P66 / P05 / P45 当本店地板改尺令
- 把本卷叫成 T-Hurdle / T-Corp / T20 Budget 核

## Outcome 标签

- 399 = 被拒绝的 dump（地板 / Min·Max 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（无声明 → 不适用；不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。Rate Floor / Min·Max 屏上像 399（Simulation 保护层，不是 Fact）。用户把地板喊成尺：品牌底所以不能动、底价当地板改尺、地板=399所以公开也399、RATE_FLOOR / Min·Max 就是公开价、系统地板多少 BAR 就多少。本店 **未** 声明品牌底 → 禁止发明 699。本店 Rate Floor 字段 / 华住 Rate Floor SOP / 默认地板 % = **NV，不编**。

### 2. Diagnosis

**T-Floor**（过程仍 **T20 + do-not-break-brand-floor**）。三把尺：公开 BAR 799 ≠ OPERA RATE_FLOOR / Min·Max Allowed / Signals·Cloudbeds Min/Max / OPERA 5.6 Rate Floor ≠ 用户声明品牌底（本店无 → 本尺不适用）。地板层 = 价表日程保护 / 推荐边界，不是 BAR Type。形 A 混尺 + 形 B 改尺 399 + 形 F 无声明发明 699（禁）。Ahead 夜：地板不被允许改公开 BAR。

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活，地板留在保护层，不必砍尺。风险：把 RATE_FLOOR / Min·Max 训练成新 BAR；把「品牌底所以不能动」读成「公开也跟 399」；无声明却发明 699。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Floor layer: stay in RATE_FLOOR · Min·Max Allowed · Signals/Cloudbeds Min/Max · OPERA 5.6 Rate Floor
Brand floor: none declared → do NOT invent 699
Reject: BAR→399
Do-not-do: 华住 Rate Floor SOP；默认地板 %；699 Fact；Vendor $ China Fact；一夜 −15%；P88
Misroute: hurdle/LRV → T-Hurdle/P85；年标 → T-Corp/P71；RMS → P66；真弱 → P05；早会 → P45
```

### 5. Why

HSMAI BAR = non-qualified publicly available，不是 Rate Floor。OPERA RATE_FLOOR / Min·Max Allowed（折扣夜 substituted）、OPERA 5.6 Rate Floor 字段、Signals/Cloudbeds Min/Max Rate 边界都只证明「价表/推荐怎么护」，不证明「公开灵活该写成地板或 399」。Pace Ahead + remaining 14 = 需求仍紧，不是地板许可证。无用户声明 → 品牌底尺不适用，**不发明 699**。

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把地板层永久化成 399。不伪造增收、不代填地板字段、不发明 699。

### 7. Risk

若对象其实是 hurdle/LRV，应交 T-Hurdle/P85，本卷不替 gate 改尺。若年标/议价 → T-Corp/P71。若 RMS 建议穿「声明底」→ P66 + brand-floor（本店无声明则先问有没有底）。地板字段 / 华住 Rate Floor SOP / 默认 % 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；地板是否仍关在 RATE_FLOOR / Min·Max / Signals·Cloudbeds；用户是否补声明品牌底（有才 Hold 底；无仍不发明 699）；24h 公开 Pickup；公开渠道是否出现 399；误入 T-Hurdle / T-Corp / P66 / P05 是否已移交。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；地板层不动尺。
- 真 Behind 且 remaining 厚 → **P05**（理由写 Pace；仍不从地板改写 BAR；禁一夜 −15%）。
- 对象变成 hurdle/LRV → **T-Hurdle / P85**。年标 → **T-Corp / P71**。RMS 建议 → **P66**。用户新声明品牌底 → **T20 + do-not-break-brand-floor**（Hold 底，仍不把地板写成公开 BAR）。

### 10. Confidence

方向 Medium（能拆地板 vs 公开 + Pace Ahead + 无声明不发明 699）。点地板字段 / 华住 Rate Floor SOP / 默认 % Low（NV）。Evidence A Vendor PMS/RMS（§116 指针）+ A 协会 HSMAI BAR。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Rate Floor / Min·Max dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：T-Floor 短例仍在 `theory/rate-floor-vs-bar.md` §9；过程仍 T20 + do-not-break-brand-floor。**不开 P88。不规定 P89。** 14/399/799 Simulation only。无声明不发明 699。

> 指针（2026-09-02 20:17 R02-20，不改正文）：§118 新开 protel Air Rate availability（日程 Min/Max rate ≠ BAR）+ Clock PMS+ Min/Max allowed prices（录入边界 ≠ rewrite）。Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699 **不改**。不开 P88。不开 P89。
