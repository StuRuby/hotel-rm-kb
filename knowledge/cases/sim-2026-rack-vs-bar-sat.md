# Simulation｜2026 Rack / 门市·挂牌·牌价 vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-rack-vs-bar-sat.md`  
> 配：Diagnose **T-Rack** `theory/rack-vs-bar.md`；过程仍 **P01** `advisor-playbooks/high-demand-day.md` + **P64** `advisor-playbooks/nested-rate-class.md` + handoff **T-Floor** `theory/rate-floor-vs-bar.md`  
> 短例仍在 T-Rack §9；本卷 = callable 专卷（C03-18）  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 门市 / Rack / 挂牌 / 牌价层：年/季房型标准基准（HSMAI Rack）+ Protel Rate type Rack 询价默认；销售把「门市虚高」喊成公开尺（**Simulation — NOT Fact**；不是本店门市字段、不是华住默认、不是推荐 BAR）
- 销售拟议 BAR→**399**（**REJECTED dump**）因为「门市价就是市场价 / 牌价虚高所以砍 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿」
- 用户原话（**NOT Fact**；本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % / 699 Fact / Walk $ / 佣金% / Vendor China Fact = **NV**）：
  - 「门市价就是市场价」
  - 「牌价虚高所以砍到 399」
  - 「跟门市对齐」
  - 「Rack 屏就是公开价」
  - 「BAR replaced Rack 所以旧门市该砸穿」
  - 「门市虚高所以 BAR→399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；基准层是 HSMAI **Rack**（年/季房型标准）+ Protel **Rate type Rack**（询价默认）；过程输入是 **Pace · Remaining · nested class** → **P01 / P64**（地板混淆 → **T-Floor**）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 门市/Rack 留在年·季基准 / Rate type 字段。**参考基准 / 询价默认类型 ≠ BAR Type**。「BAR replaced Rack」= 演进到动态公开尺，**≠** 砸穿许可证。
4. **拒绝** BAR→399（门市价就是市场价 / 牌价虚高所以砍 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以砸穿）。
5. 高峰公开尺 → **P01**；嵌套/低档忘关 → **P64**；地板/Min·Max → **T-Floor**；年标 → **T-Corp / P71**；限制 → **T-Restriction**；真弱 leftover → **P05/P02**（仍不从门市基准改写 BAR；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住门市·Rack SOP / 默认门市→BAR % / Walk $ / 佣金% / Vendor China Fact。
7. 早会一个动作：纠正「Rack / 门市 ≠ 公开 BAR」+ Hold 公开 BAR（基准留基准，不砍尺）。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住门市·Rack SOP、默认门市→BAR %、699 Fact、Walk $、佣金%、Vendor China Fact
- 把 HSMAI/Protel/OPERA/Lighthouse Vendor·博文例写入本仿真当市场 Fact / 中国门市默认
- 开 **P88** / **P89**
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Floor / T-Restriction / T-Corp / T-Component / T-Tax / T-Hurdle 核心**
- 把 P01 / P64 / T-Floor / P05 / P02 / P45 当本店门市改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（门市 / Rack·挂牌·牌价 基准改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。门市/Rack/挂牌/牌价层像「年季基准 + Rate type Rack」（Simulation 基准层，不是 Fact）。销售把门市喊成尺：门市价就是市场价、牌价虚高所以砍到 399、跟门市对齐、Rack 屏就是公开价、BAR replaced Rack 所以旧门市该砸穿、公开改 399。本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % = **NV，不编**。

### 2. Diagnosis

**T-Rack**（过程仍 **P01** + **P64** + handoff **T-Floor**）。三把尺：公开 BAR 799 ≠ HSMAI Rack / Protel Rate type Rack ≠ Pace·Remaining·nested class（→P01/P64）。基准层 = 年/季房型标准 + 询价默认类型，不是 BAR Type。「BAR replaced Rack」= 动态公开尺演进，不是砸穿令。形 A 混尺 + 形 B 改尺 399 + 形 C 把 replaced 当 dump（禁）。Ahead 夜：门市基准不被允许改公开 BAR。**≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。**

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活；门市留在基准层，不必砍尺。风险：把 Rack/门市训练成新 BAR；把「牌价虚高」读成「公开也跟 399」；把「BAR replaced Rack」读成「旧门市该砸穿」。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Rack / 门市 layer: stay as year/season reference · Rate type Rack (inquiry default)
Reject: BAR→399
Do-not-do: 华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor China Fact；一夜 −15%；P88
Misroute: 嵌套低档 → P64；地板/Min·Max → T-Floor；年标 → T-Corp/P71；限制 → T-Restriction；真弱 → P05/P02；早会 → P45
```

### 5. Why

HSMAI BAR = non-qualified publicly available，不是 Rack/门市。HSMAI Rack = 年/季房型标准基准；其他价从 Rack 算折扣/溢价 — **基准词条 ≠ dump**。HSMAI：**BAR replaced Rack Rates** as RM evolved — **演进 ≠ 砸穿许可证**。Protel Rate type Rack = 询价默认类型，≠ House use ≠ rewrite 公开 BAR。OPERA About BAR = BAR 模型指针，不当门市 dump 核。Pace Ahead + remaining 14 = 需求仍紧，不是门市 dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把门市基准永久化成 399；基准留基准。不伪造增收、不代改门市/Rack 字段、不发明 699。

### 7. Risk

若对象其实是嵌套低档仍开 → **P64**，本卷不替嵌套改尺。若地板/Min·Max 混淆 → **T-Floor**。若年标/议价 → **T-Corp / P71**。若限制层 → **T-Restriction**。若真 Behind → **P05/P02**（仍不从门市基准改写 BAR；禁一夜 −15%）。本店门市字段 / 华住门市·Rack SOP / 默认门市→BAR % 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；门市/Rack 是否仍关在基准层；嵌套低档是否先处理（P64）；是否误入 T-Floor；24h 公开 Pickup；公开渠道是否出现 399；误入 T-Restriction / T-Corp / P05 是否已移交。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；门市基准不当改尺令。
- 嵌套 399 档仍开 → **P64** 关/限低档；BAR 仍 Hold。
- 地板混淆 → **T-Floor**。年标 → **T-Corp / P71**。限制 → **T-Restriction**。
- 真 Behind → **P05/P02**（理由写 Pace；仍不从门市基准改写 BAR；禁一夜 −15%）。

### 10. Confidence

方向 Medium（能拆门市 vs 公开 + Pace Ahead + 「replaced ≠ dump」）。点门市字段 / 华住门市·Rack SOP / 默认门市→BAR % Low（NV）。Evidence A 协会 HSMAI Rack + BAR replaced Rack + A Vendor Protel Rack type + OPERA About BAR 指针。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的门市 / Rack·挂牌·牌价 dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：T-Rack 短例仍在 `theory/rack-vs-bar.md` §9；过程仍 P01 + P64（+ T-Floor）。**不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-03 18:17 C03-18，不改正文）：§129 CASE 指针复述 §128。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
