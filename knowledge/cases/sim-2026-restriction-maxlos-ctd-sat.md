# Simulation｜2026 MaxLOS / CTD / CTA Restriction Layer Saturday（Simulation only）

> 路径：`cases/sim-2026-restriction-maxlos-ctd-sat.md`  
> 配：Diagnose **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`；过程仍 **P33** `advisor-playbooks/restriction-overuse.md` + handoff **P40** `advisor-playbooks/stay-pattern.md` / **P21** `advisor-playbooks/holiday-minlos.md`  
> 短例仍在 T-Restriction §9；本卷 = callable 专卷（C03-10）  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- Restriction 层：CTD（Closed for Departure）+ MaxLOS=2 开着；短住 / 离店询单被挡，OCC「看起来假弱」（**Simulation — NOT Fact**；不是本店限制字段、不是华住默认、不是推荐 BAR）
- 销售拟议 BAR→**399**（**REJECTED dump**）因为「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / Restrictions 屏就是公开价」
- 用户原话（**NOT Fact**；本店限制常模 / 华住 MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 / 699 Fact / Walk $ / 佣金% / Vendor China Fact = **NV**）：
  - 「关了离店卖不动只能砍」
  - 「MaxLOS太紧所以dump」
  - 「CTA开着所以公开也跟着砍」
  - 「限制开着 OCC 假低所以 BAR→399」
  - 「Closed for Departure 屏就是公开价表」
  - 「Restrictions 配完了就算改完 BAR」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；限制层是 OPERA **Restrictions**（Closed / CTA / Closed for Departure / Min·Max LOS）、Apaleo/Clock **Rate Restrictions**；过程输入是 **Pace · Remaining · Peak vs Shoulder** → **P33 / P40 / P21**。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 限制留在 OPERA Restrictions / Apaleo·Clock Rate Restrictions 字段。**可售过滤 / 到达·离店·连住闸 ≠ BAR Type**。
4. **拒绝** BAR→399（关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍）。
5. 过度限制 → **P33**（先松，不砍 BAR）；Sat-only / 停留模式 → **P40**；已证实 Peak MinLOS → **P21**（不解高峰 MinLOS）；Rate Cap / Min·Max → **T-Floor**；套房池/Component → **T-Component**；真弱且限制已松 → **P05/P02**（仍不从限制层改写 BAR；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 / Walk $ / 佣金% / Vendor China Fact。
7. 早会一个动作：纠正「MaxLOS / CTD / CTA ≠ 公开 BAR」+ Hold 公开 BAR（若过度则先松限制，仍不砍尺）。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住 MaxLOS·CTD SOP、默认限制常模、候补转化率、699 Fact、Walk $、佣金%、Vendor China Fact
- 把 OPERA/Apaleo/Clock/eCornell/Lighthouse Vendor·课例写入本仿真当市场 Fact / 中国限制默认
- 开 **P88** / **P89**
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Floor / T-Component / T-Tax / T-Hurdle 核心**
- 把 P33 / P40 / P21 / P05 / P02 / P45 当本店限制改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（限制层 / MaxLOS·CTD·CTA 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。Restriction 层：CTD + MaxLOS=2 开着，短住/离店询单被挡，OCC「看起来假弱」（Simulation 限制层，不是 Fact）。销售把限制喊成尺：关了离店卖不动只能砍、MaxLOS太紧所以dump、CTA开着所以公开也跟着砍、Restrictions 屏就是公开价、公开改 399。本店限制常模 / 华住 MaxLOS·CTD SOP / 默认限制常模 = **NV，不编**。

### 2. Diagnosis

**T-Restriction**（过程仍 **P33** + handoff **P40/P21**）。三把尺：公开 BAR 799 ≠ OPERA Restrictions / Apaleo·Clock Rate Restrictions ≠ Pace·Remaining·Peak/Shoulder（→P33/P40/P21）。限制层 = 可售过滤 + 到达/离店/连住闸，不是 BAR Type。形 A 混尺 + 形 B 改尺 399 + 形 C 把 Restrictions 屏当定价按钮（禁）。Ahead 夜：限制层不被允许改公开 BAR。过度→先松（P33），不 dump。**≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。**

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活；若限制过度则只松限制层，不必砍尺。风险：把 MaxLOS/CTD/CTA 训练成新 BAR；把「关了离店」读成「公开也跟 399」；把限制挡完后的假弱读成必须 dump。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Restriction layer: stay in OPERA Restrictions · Apaleo/Clock Rate Restrictions
If over-restricted: loosen first (P33) — do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 MaxLOS·CTD SOP；默认限制常模；候补转化率；699 Fact；Vendor China Fact；一夜 −15%；P88
Misroute: Sat-only → P40；Peak MinLOS → P21；Rate Cap → T-Floor；Component → T-Component；真弱且已松 → P05/P02；早会 → P45
```

### 5. Why

HSMAI BAR = non-qualified publicly available，不是 MaxLOS / CTD / CTA / Closed-for-Departure。HSMAI MaxLOS/CTA = inventory control 词条；OPERA Restrictions / Managing、Apaleo Rate Plans、Clock Rate Restrictions 都只证明「可售怎么过滤、到达/离店/连住怎么挡」，不证明「公开灵活该写成 399」。eCornell IMPACT / Lighthouse：MaxLOS/CTA sparingly — 慎用 ≠ dump。Pace Ahead + remaining 14 = 需求仍紧，不是限制 dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把限制层永久化成 399；若过度则松限制恢复可售，而不是改尺。不伪造增收、不代改 Restrictions、不发明 699。

### 7. Risk

若对象其实是 Sat-only / 停留模式 → **P40**，本卷不替停留改尺。若已证实 Peak MinLOS → **P21**（不解高峰）。若 Rate Cap / Min·Max → **T-Floor**。若套房池/Component → **T-Component**。若真 Behind 且限制已 Open → **P05/P02**（仍不从限制层改写 BAR；禁一夜 −15%）。本店限制常模 / 华住 MaxLOS·CTD SOP / 默认限制常模仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；限制是否先处理（过度→松；Peak→守）；Peak vs Shoulder 是否分看；24h 公开 Pickup；公开渠道是否出现 399；误入 T-Floor / T-Component / P40 / P21 / P05 是否已移交。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；限制层不当改尺令。
- 过度限制 → **P33** 先松；BAR 仍 Hold。
- Sat-only → **P40**。Peak MinLOS → **P21**。Rate Cap → **T-Floor**。Component → **T-Component**。
- 真 Behind 且限制已松 → **P05/P02**（理由写 Pace；仍不从限制层改写 BAR；禁一夜 −15%）。
- 早会一个动作 → **P45**。

### 10. Confidence

方向 Medium（能拆限制层 vs 公开 + Pace Ahead + 拒 399）。点限制常模 / 华住 MaxLOS·CTD SOP / 默认限制常模 Low（NV）。Evidence A 协会 HSMAI MaxLOS/CTA/BAR + A Vendor PMS（§124/§125 指针）+ A Methodology eCornell + B Lighthouse。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 MaxLOS / CTD / CTA dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：T-Restriction 短例仍在 `theory/restriction-maxlos-ctd-vs-bar.md` §9；过程仍 **P33**（+ **P40** / **P21**）。**不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。本卷 = **T-Restriction**，不是 T-Floor / T-Component / T-Tax / T-Hurdle 核。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS Restrictions + Closed to Arrival/Departure Restrictions（**可售限制/CTA·CTD 闸 ≠ 公开灵活 BAR rewrite**）。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
