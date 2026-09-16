# Simulation｜2026 RTC / Day Type / Membership Auto Discount misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-rtc-daytype-misread-sat.md`  
> 配：Diagnose 走 **P61** `advisor-playbooks/paid-upsell-upgrade.md` + **P49** `advisor-playbooks/loyalty-award-upgrade.md` + **P06/P07/P01** + **P66** `advisor-playbooks/rms-rec-override.md`；过程 ± **P64**（关低开高）± **P60**（渠道推送）± **P23**（会员 vs 公开）± **P87**（folio 减免）± **P13/P34**（房型梯）± **P47**（Comp）± **P03**（真紧）/ **P05**（真 leftover）/ **P45**（早会）  
> 短例仍在 P61 / P49 / P06 / P66 / S07-06 / T07-08 skip；本卷 = callable 专卷（**C07-10**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T07-08 RTC/Day Type deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 库存 vs 计费 / 日历临时加减 / TX 过账折扣层（Simulation — NOT Fact；不是华住字段名）：
  - 多笔预订 **Rm Type = 标准**，**RTC = 套房**（OPERA：inventoried on one room type, charged as if of another；常用于同码升房）
  - 前台把「RTC 套房」读成「套房物理 OCC 假满」或「RTC 价就是新地板」
  - Property Calendar 挂了 **Day Type**（Multiplier 例 0.90 / Adder；官方注：**OTAs and other external systems do not support day type rate adjustments**）；有人把日历红当成 Pace 证据或以为 OTA 已跟
  - 收银侧出现多笔 **Membership Auto Discount**（TX/Article 自动折扣；**Rate code postings including packages, deposits, debit and credit folios are excluded**）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「升到套房所以套房假满该涨或该砸 / RTC 价当地板所以公开尺跟到 RTC / 日历 Day Type 乘完了所以新尺是 399 且 OTA 也该跟 / 会员交易折扣很多所以市场差该砍 BAR」
- 用户原话（**NOT Fact**；本店 RTC 字段名 / 华住升房·Day Type·会员 TX 折扣 SOP / 默认 Multiplier / 699 Fact / Vendor China Fact = **NV**）：
  - 「RTC 都是套房了，套房 OCC 假满，BAR 该涨或该砸到 399」
  - 「RTC 价就是新地板，公开尺跟到 RTC」
  - 「日历 Day Type 乘了 0.9，OTA 也该跟，新尺钉 399」
  - 「会员交易折扣一大堆，市场差，BAR→399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；库存/计费尺是 **Rm Type vs RTC**；日历尺是 **Day Type Multiplier/Adder（店内合格码；渠道不同步）**；过账尺是 **Membership TX Auto Discount** → **P61 / P49 / P06·P66**（+ P64 / P60 / P23 / P87 / P13/P34 / P47）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. RTC ≠ 套房物理卖光证据，也 ≠ 新公开 BAR：库存扣 Rm Type，计费看 RTC。Day Type ≠ Pace 证据 / ≠ OTA 已跟价 / ≠ 永久公开尺。Membership Auto Discount ≠ rate posting 地板 / ≠ 公开 BAR。
4. **拒绝** BAR→399（RTC 假满涨砸 / RTC 当地板 / Day Type 钉尺兼假跟 OTA / 会员 TX 折扣当弱需求砸）。
5. 付费升 → **P61**；免费/会员升 → **P49**；事件真需求 → **P06/P07/P01**；系统输出≠定价权 → **P66**；关低开高 → **P64**；渠道映射 → **P60**；会员价围栏 → **P23**；folio 减免 → **P87**；房型梯/倒挂 → **P13/P34**；Comp → **P47**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 RTC/Day Type/TX 折扣写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 RTC·升房·Day Type·会员 TX 折扣 SOP / 默认 Multiplier / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改 RTC/Day Type 当改尺（Advisor-First）。
7. 早会一个动作：纠正「库存 vs 计费 / 日历临时加减 / TX 过账折扣 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是 Rm Type 还是 RTC、升房是付费还是免费/会员、Day Type 是否只影响店内合格码、会员折扣是 TX 还是 rate posting。

## 禁止

- 把 14/399/799 / RTC 笔数 / Day Type 乘子 / TX 折扣笔数当市场 Fact
- 编华住 RTC·升房·Day Type·会员 TX 折扣 SOP、默认 Multiplier、699 Fact、Vendor China Fact
- 把 OPERA Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T07-08 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / C07-02 Mass Update 核 / C06-18 Fixed 单笔核 / P63 Queue 核 / P24 Sell Limit 核 / P37 DNM 核**（本卷核心是库存 vs 计费 / 日历临时加减 / TX 过账折扣 ≠ 公开尺）
- 把本卷当成已有付费升/会员升/Mass Update 仿真的重写（那是升房报价或批量价表；本卷专拍 **RTC / Day Type / Membership Auto Discount 误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（RTC / Day Type / Membership Auto Discount 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：多笔 Rm Type=标准 / RTC=套房；日历挂 Day Type（例乘 0.90；OTA 不同步）；收银有 Membership TX Auto Discount（排除 rate code postings）（Simulation 闸，不是 Fact）。销售/GM 把库存-计费分离 / 日历临时加减 / TX 过账折扣当成假满、新地板或弱需求：RTC 套房假满 / RTC 当地板 / Day Type 钉 399 且假跟 OTA / 会员 TX 折扣多 → 拟议 BAR→399。本店 RTC 字段名 / 华住升房·Day Type·会员 TX 折扣 SOP / 默认 Multiplier = **NV，不编**。

### 2. Diagnosis

**P61** + **P49** + **P06/P07/P01** + **P66**（过程 ± **P64** ± **P60** ± **P23** ± **P87** ± **P13/P34** ± **P47** ± **P03** ± **P05** ± **P45**）。三把尺：公开 BAR 799 ≠ Rm Type vs RTC（库存 vs 计费）≠ Day Type（日历临时 ±，渠道不同步）≠ Membership Auto Discount（TX posting credit）。先拆：问的是 Rm Type 还是 RTC、升房付费还是免费/会员、Day Type 是否只影响店内合格码、会员折扣是 TX 还是 rate posting、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「RTC 套房所以假满涨砸 399」+ 形「Day Type/TX 折扣 = 新尺」（禁）。Ahead 夜：这三层不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ C07-02 Mass Update 核 ≠ C06-18 Fixed 单笔核 ≠ P63 Queue 核 ≠ P24 Sell Limit 核 ≠ P37 DNM 核。** T07-08 deepen **已 skip**（无新轴；本卷是既有 P61/P49/P06/P66 的 RTC/Day Type/Membership 专拍）。

### 3. Opportunity / Risk

机会：拆库存-计费 / 日历 / TX 过账层后高峰仍 Hold 公开灵活；RTC 是升房计费路径不是物理卖光；Day Type 是店内临时加减不是 OTA 已跟；Membership Auto Discount 是 TX 过账不是 rate 地板。风险：把「RTC 套房」训练成假 OCC 或新 BAR；把日历乘子写成市场已证实 399；把 TX 折扣当弱需求砸到 399 后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Inventory-vs-charge / calendar / TX layer: verify Rm Type vs RTC · paid vs free/award upsell · Day Type store-only (OTA unsupported) · membership discount = TX not rate posting?
If misread layer: fix ops discipline (P61/P49/P06/P66/P64/P60/P23/P87)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 RTC·升房·Day Type·会员 TX 折扣 SOP；默认 Multiplier；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改 RTC/Day Type 当改尺
Misroute: 付费升 → P61；免费/会员升 → P49；事件真需求 → P06/P07/P01；系统输出≠定价权 → P66；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；RTC/Day Type/TX 不当 dump 燃料）；关低开高 → P64；渠道 → P60；会员价 → P23；folio 减免 → P87；早会 → P45
```

### 5. Why

OPERA Cloud Controls — Reservations（ROOM TYPE TO CHARGE）：reservation can be **inventoried on one room type and charged as if of another differing room type**。→ **库存房型 ≠ 计费房型 ≠ 公开 BAR rewrite**。OPERA 5.6 ROOM TYPE TO CHARGE：同码升房路径常见。→ **升房计费 ≠ dump/涨尺令**。OPERA Cloud Controls — Rate Management（DAY TYPES）：日历对合格 rate code 做临时加减，不必新建 pricing schedule；**OTAs and other external systems do not support day type rate adjustments**。→ **日历加减 ≠ OTA 已跟 ≠ 永久公开尺**。OPERA Cloud Creating and Copying Day Types：Multiplier / Adder（例 2 / 0.90）。→ **Vendor 乘子例 ≠ China Fact / ≠ Pace**。OPERA Cloud Property Calendar：Events vs Day Types 分列。→ **事件码 ≠ Day Type 价；真事件需求仍走 P06/P07**。OPERA Cloud About Membership Auto Discounting：TX/Article 自动折扣；**Rate code postings（含 packages、deposits、debit/credit folios）excluded**。→ **过账折扣 ≠ BAR / ≠ Pace**。Pace Ahead + remaining 14 = 需求仍紧，不是「RTC/Day Type/TX」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把库存-计费分离 / 日历临时加减 / TX 过账永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑 RTC/Day Type、不发明 699。

### 7. Risk

若对象其实是付费升报价幅度 → **P61**（本卷不重写升房价表）。若免费/会员升占套房 → **P49**。若事件真压缩 → **P06/P07/P01**。若系统建议卖价 dump → **P66**。若真 Behind 且层已分清 → **P05/P02**（仍不把 RTC/Day Type/TX 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认 Multiplier 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是 Rm Type 还是 RTC；升房付费还是免费/会员；Day Type 是否只影响店内合格码（OTA 不同步）；会员折扣是 TX 还是 rate posting；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump / C07-02 Mass Update 核 / C06-18 Fixed 单笔核 / P63 Queue 核 / P24 Sell Limit 核 / P37 DNM 核。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；RTC/Day Type/TX 不当改尺令。
- 确认滥读 RTC 假 OCC / 错把 Day Type 当 OTA 已跟 → 作业侧收口读法与审计（P61/P49/P06/P66）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「RTC 套房看着多」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 RTC/Day Type/TX 改写 BAR；禁一夜 −15%）。
- 付费升空间仍在 → **P61** 报价；免费/SA 高峰停 → **P49**。
- 预算月末压力 → **T20/P56**，不是 RTC/Day Type 改尺许可证。

### 10. Confidence

方向 Medium（能拆库存 vs 计费 / 日历临时加减 / TX 过账 ≠ BAR + Pace Ahead + 「升房计费/日历加减/过账折扣≠定价权」）。点字段名 / 华住 SOP / 默认 Multiplier Low（NV）。Evidence A Vendor OPERA Controls RTC + 5.6 RTC + DAY TYPES + Configuring Day Types + Property Calendar + Membership Auto Discounting（§158；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 RTC / Day Type / Membership Auto Discount dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P61 + P49 + P06/P07/P01 + P66 主过程；+ P64/P60/P23/P87/P13/P34/P47/P03/P05/P45。**T07-08 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-07 10:17 C07-10，不改正文）：§159 CASE 指针复述 §158。Diagnose 走 **P61**（+ **P49** / **P06·P66**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
