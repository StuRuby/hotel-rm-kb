# Simulation｜2026 Room Move / Discount Reasons / Post Stay·Open Folio misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-room-move-discount-openfolio-misread-sat.md`  
> 配：Diagnose 走 **P61** `advisor-playbooks/paid-upsell-upgrade.md`（+ **P49**/P45 · P37/P13）· **P87** `advisor-playbooks/service-recovery-adjustment-vs-bar.md`（+ **P42** · P48/P26/P80）· **P69** `advisor-playbooks/package-breakfast-vs-bar.md`（+ **P87**）  
> 短例仍在 P61 / P87 / P42 / S15-14 / T15-16 skip；本卷 = callable 专卷（**C15-18**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T15-16 Room Move / Discount Reasons / Open Folio deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 运营层（Simulation — NOT Fact；不是华住字段名）：
  - **Room Move / Scheduled Room Moves / Room Move Reasons**：在店换房 / 日程换房 / 换房原因码（OPERA Moving In House · Scheduled Room Moves · Room Move Reasons；Cloudbeds Override 保价；Clock Booking Room Change；Stayntouch Move Without Rate Change）
  - **Manual Discount / Discount Reasons / Stay Details Discount**：订房折扣原因码 / Amount·%（OPERA Discount Reasons ERR/WALK/RG/MGMT；Rate Code Discount；Stay Details Discount）
  - **Late Charges / Post Stay Charging / Open Folio**：离店后过账特权 / 未结 folio（OPERA Post Stay Charging and Open Folio）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「换房·降级多所以砸尺 / 前台升房·换房多所以涨 BAR」「打折码多所以市场要 399 / Discount Reason 就是公开尺」「Open Folio / Late Charge 多所以砸尺」
- 用户原话（**NOT Fact**；本店换房·折扣·晚账字段名 / 华住换房·折扣原因·晚账 SOP / 默认折扣% / 699 Fact / Vendor China Fact = **NV**）：
  - 「今天换房/降级很多，所以今晚 BAR→399」
  - 「前台升房·换房多，说明需求强，应该把公开尺抬到改尺」
  - 「打折码/Discount Reason 很多，市场已经只要 399」
  - 「Discount Reason 就是公开尺，跟到 399」
  - 「Open Folio / Late Charge 多，说明需求死，砸尺到 399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；换房尺是 **Room Move / Scheduled Moves / Reasons**（front-desk room-change / RTC ops）；折扣尺是 **Discount Reasons / Stay Details Discount**（reservation discount-reason）；晚账尺是 **Post Stay / Open Folio**（post-departure posting）→ **P61**（+ P49/P45 · P37/P13）· **P87**（+ P42 · P48/P26/P80）· **P69**（+ P87）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Room Move ≠ Pace ≠ 公开 BAR：换房作业 / Update RTC 可选 / Override 保价 / Move Without Rate Change 不是今夜公开灵活价。Discount Reasons ≠ BAR Type：ERR/WALK/RG/MGMT 是单笔 eligible 折扣原因，不是市场已证实 399。Open Folio / Late Charge ≠ 房晚 BAR：离店后过账特权不是需求死证明，也不是改尺令。
4. **拒绝** BAR→399（换房多砸/升房多涨尺 / 打折码多市场要 399 / Discount Reason 跟尺 / Open Folio·Late Charge 砸尺）。
5. 早会一个动作 → **P45**；付费升/RTC → **P61**；免费升 → **P49**；服务补偿折扣 → **P87**；前台跟 dump → **P42**；协议/员工锚 → **P48/P26/P80**；包价辅项 → **P69**；库存锁/关 → **P37/P13**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 Room Move / Discount Reasons / Open Folio 写成 dump 燃料；禁一夜 −15%）。
6. **不发明 699**。不编华住换房·折扣原因·晚账 SOP / 默认折扣% / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改换房原因 / 折扣原因 / Open Folio 当改尺（Advisor-First）。
7. 早会一个动作：纠正「换房作业 / 折扣原因码 / 离店后过账 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是换房是否只改房号/是否 Update RTC、Discount Reason 是否单笔 eligible、Open Folio 是否仅离店后过账窗、真 Remaining 是否仍 14、Pace 是否仍 Ahead。

## 禁止

- 把 14/399/799 / 换房次数 / 折扣码计数 / Open Folio 余额当市场 Fact
- 编华住换房·折扣原因·晚账 SOP、默认折扣%、699 Fact、Vendor China Fact
- 把 OPERA / Cloudbeds / Clock / Stayntouch Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T15-16 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / C07-10 RTC 核 / 纯 P61 升房改写 / 纯 P87 补偿改写 / 纯 P42 walk-in 改写**（本卷核心是 Room Move / Discount Reasons / Open Folio ≠ 公开尺）
- 把本卷当成已有 Guest History / Room Condition / House Count / RTC 仿真的重写（那是档案·名单·过账 / 房态·日结·统计 / 运营盘点·分房 / RTC·Day Type；本卷专拍 **Room Move / Discount Reasons / Open Folio 误读改尺**）
- 推翻 T15-16 deepen skip

## Outcome 标签

- 399 = 被拒绝的 dump（Room Move / Discount Reasons / Post Stay·Open Folio 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：Room Move / Scheduled Room Moves / Room Move Reasons 看着偏多；Manual Discount / Discount Reasons 看着偏多；Late Charges / Post Stay·Open Folio 看着偏多或未结（Simulation 闸，不是 Fact）。销售/GM 把换房作业 / 折扣原因码 / 离店后过账当成需求死、需求强或改尺令：换房·降级多砸 / 升房·换房多涨尺 / 打折码多市场要 399 / Discount Reason 跟尺 / Open Folio·Late Charge 砸尺 → 拟议 BAR→399。本店字段名 / 华住换房·折扣原因·晚账 SOP / 默认折扣% = **NV，不编**。

### 2. Diagnosis

**P61**（+ **P49**/P45 · P37/P13）· **P87**（+ **P42** · P48/P26/P80）· **P69**（+ **P87**）。三把尺：公开 BAR 799 ≠ Room Move / Scheduled Moves / Reasons（front-desk room-change / RTC ops）≠ Discount Reasons / Stay Details Discount（reservation discount-reason）≠ Post Stay / Open Folio（post-departure posting）。先拆：问的是换房是否只改房号/是否 Update RTC、Discount Reason 是否单笔 eligible、Open Folio 是否仅离店后过账窗、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「换房/降级多所以砸 399」+ 形「升房·换房多所以涨尺」+ 形「打折码多所以市场要 399」+ 形「Discount Reason 就是公开尺」+ 形「Open Folio·Late Charge 多所以砸尺」（禁）。Ahead 夜：这三层不被允许改永久公开 BAR。**≠ C15-10 Guest History 核 ≠ C15-02 Room Condition 核 ≠ C14-18 House Count 核 ≠ C07-10 RTC 核 ≠ 纯 P61 升房改写 ≠ 纯 P87 补偿改写 ≠ 纯 P42 walk-in 改写。** T15-16 deepen **已 skip**（无新轴；本卷是既有 P61/P49/P45 · P87/P42 · P69/P87 的 Room Move / Discount Reasons / Open Folio 专拍）。

### 3. Opportunity / Risk

机会：拆换房作业 / 折扣原因码 / 离店后过账层后高峰仍 Hold 公开灵活；换房不是需求尺；折扣原因不是公开 BAR Type；Open Folio 是过账特权不是定价权。风险：把「换房多」训练成需求死砸到 399；把升房·换房量写成涨尺令；把打折码计数写成市场 399；把 Open Folio / Late Charge 写成砸尺令。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Ops layers: verify Room Move = room#/RTC ops not Pace · Discount Reason = single-res eligible not BAR Type · Open Folio/Late Charge = post-departure posting not room BAR?
If misread layer: fix ops discipline (P61/P49/P45 · P87/P42 · P69/P87)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住换房·折扣原因·晚账 SOP；默认折扣%；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改换房原因/折扣原因/Open Folio当改尺
Misroute: 付费升/RTC → P61；免费升 → P49；早会 → P45；服务补偿 → P87；前台跟 dump → P42；协议/员工 → P48/P26/P80；包价辅项 → P69；库存 → P37/P13；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；Room Move/Discount/Open Folio 不当 dump 燃料）；Guest History → C15-10/P08；房态/夜审 → C15-02/P63/P54；House Count → C14-18/P45；RTC Day Type → C07-10/P61
```

### 5. Why

OPERA Cloud Moving an In House Reservation：Room Move；Update RTC 可选（否=complimentary upgrade）；Room Move Reason。→ **换房作业 / RTC ops ≠ Pace ≠ 公开 BAR rewrite**。OPERA Cloud Managing Scheduled Room Moves：日程换房 Pending/Completed。→ **日程换房 ≠ dump 令**。OPERA Cloud Configuring Room Move Reasons：换房原因码。→ **原因码 ≠ 公开尺**。Cloudbeds Reservations FAQ Override：保价换房型。→ **Override 保价 ≠ 市场 399**。Clock PMS+ Booking Room Change：Add Room change。→ **换房作业 ≠ rewrite**。Stayntouch Release Notes v1.8：Move Without Rate Change。→ **无改价换房 ≠ BAR Type**。OPERA Cloud Configuring Discount Reasons：ERR/WALK/RG/MGMT。→ **折扣原因码 ≠ 公开灵活尺**。OPERA Cloud Using Post Stay Charging and Open Folio：离店后过账特权 / 未结 folio。→ **离店后过账 ≠ Pace ≠ 房晚 BAR**。Pace Ahead + remaining 14 = 需求仍紧，不是「Room Move / Discount Reasons / Open Folio」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把换房作业 / 折扣原因码 / 离店后过账永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑换房/折扣/Open Folio、不发明 699。

### 7. Risk

若对象其实是 Guest History / Rooming List / Post It → **C15-10 / P08/P52/P69**（本卷不重写档案专拍）。若 Room Condition / Night Audit / Market-Source → **C15-02 / P63/P54/P25**。若 House Count / Assignment / No Post → **C14-18 / P45**。若纯 RTC / Day Type → **C07-10 / P61**。若纯付费升且层已分清 → **P61**（仍不把换房量写成 dump/涨尺燃料）。若纯服务补偿且层已分清 → **P87**（仍不把折扣原因码写成 dump 燃料）。若真 Behind 且层已分清 → **P05/P02**（仍不把 Room Move/Discount/Open Folio 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认折扣% 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是 Room Move 是否只改房号/是否 Update RTC；Discount Reason 是否单笔 eligible；Open Folio 是否仍被读成改尺令；真 Remaining；是否误入 C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / C07-10 RTC 核 / 纯 P61 / 纯 P87 / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Room Move/Discount Reasons/Open Folio 不当改尺令。
- 确认滥读换房多砸 / 错把升房·换房当涨尺 / 错把打折码当市场 399 / 错把 Open Folio 当砸尺 → 作业侧收口读法与审计（P61/P49/P45 · P87/P42 · P69/P87）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「换房多/折扣多/晚账多」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 Room Move/Discount/Open Folio 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 Room Move 改尺许可证。

### 10. Confidence

方向 Medium（能拆换房作业 / 折扣原因码 / 离店后过账 ≠ BAR + Pace Ahead + 「换房/折扣/晚账≠定价权」）。点字段名 / 华住 SOP / 默认折扣% Low（NV）。Evidence A Vendor OPERA Moving In House + Scheduled Room Moves + Room Move Reasons + Cloudbeds FAQ Override + Clock Room Change + Stayntouch Move Without Rate Change + Discount Reasons + Open Folio（§169；本小时 curl 复核 → §170）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Room Move / Discount Reasons / Post Stay·Open Folio dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P61 主过程（+ P49/P45 · P37/P13）；P87（+ P42 · P48/P26/P80）；P69（+ P87）。**T15-16 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-15 18:17 C15-18，不改正文）：§170 CASE 指针复述 §169。Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
