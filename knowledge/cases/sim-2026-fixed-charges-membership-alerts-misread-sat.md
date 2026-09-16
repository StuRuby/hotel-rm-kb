# Simulation｜2026 Fixed Charges / Membership Enrollment·eCert / Alerts·Messages misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md`  
> 配：Diagnose 走 **P82** `advisor-playbooks/parking-fee-vs-bar.md`（+ **P78**/P69/P79/T-Fee · P87）· **P49** `advisor-playbooks/loyalty-award-upgrade.md`（+ **P80**）· **P45** `advisor-playbooks/daily-revenue-brief.md`（+ **P87**）  
> 短例仍在 P82 / P49 / P45 / S15-22 / T16-00 skip；本卷 = callable 专卷（**C16-02**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T16-00 Fixed Charges / Membership / Alerts deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 运营层（Simulation — NOT Fact；不是华住字段名）：
  - **Fixed Charges / Recurring auto-post / Cloudbeds Add-Ons / Apaleo Services**：预订固定费 / 周期自动过账 / Per Night·Guest Add-On / Services extras（OPERA Managing Reservation Fixed Charges；OPERA 5.6 Fixed Charges；Cloudbeds Create Add-Ons；Apaleo Setting up Services）
  - **Membership Enrollment / Reservation Memberships / e-Certificate redeem**：外部忠诚入会 / 档案会员挂预订 / 兑促销价码（OPERA Enrolling Guests；Managing Reservation Memberships；Redeeming Promotional e-Certificate）
  - **Reservation Alert Messages / Global Alert Rules / Guest Messages**：员工 Alert 模板 / 全局规则弹窗 / 客人留言（OPERA Configuring Reservation Alert Messages；Configuring Global Alert Rules；Managing Guest Messages）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「固定费堆高所以 ADR 虚该砍 BAR / Fixed Charge 就是加价所以涨尺」「入会多所以涨尺 / 积分房·兑券多所以砸尺」「Alert/留言很多所以市场乱该砍」
- 用户原话（**NOT Fact**；本店固定费·入会·兑券·Alert 字段名 / 华住固定费·入会·兑券·Alert SOP / 默认固定费% / 699 Fact / Vendor China Fact = **NV**）：
  - 「固定费堆很高，ADR 虚了，所以今晚 BAR→399」
  - 「Fixed Charge 就是加价，说明需求强，应该把公开尺抬到改尺」
  - 「今天入会很多，说明需求强，应该涨公开尺」
  - 「积分房 / e-Certificate 兑券很多，市场已经只要 399」
  - 「Alert / 留言很多，说明市场乱，砸尺到 399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；固定费尺是 **Fixed Charges / Add-Ons / Services**（recurring/auto-post & ancillary sell）；忠诚尺是 **Enrollment / Memberships / eCert**（loyalty attach/redeem）；作业尺是 **Alerts / Guest Messages**（ops messaging）→ **P82**（+ P78/P69/P79/T-Fee · P87）· **P49**（+ P80）· **P45**（+ P87）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Fixed Charges ≠ Pace ≠ 公开 BAR：EOD/Advance 自动过账 / Per Night Add-On / Services extras 不是今夜公开灵活价。Enrollment / Memberships / eCert ≠ BAR Type：入会挂档 / 挂会员 / 兑促销价码不是市场已证实 399，也不是涨尺令。Alerts / Guest Messages ≠ dump 令：员工弹窗 / 规则触发 / 客人留言不是 Pace，也不是改尺令。
4. **拒绝** BAR→399（固定费堆高砸/Fixed Charge 加价涨尺 / 入会多涨尺 / 兑券多砸尺 / Alert·留言砸尺）。
5. 早会一个动作 → **P45**；停车/加人/含早/强制费 → **P82/P78/P69/P79/T-Fee**；补偿过账 → **P87**；积分升/兑 → **P49**；员工价 → **P80**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 Fixed Charges / Membership / Alerts 写成 dump 燃料；禁一夜 −15%）。
6. **不发明 699**。不编华住固定费·入会·兑券·Alert SOP / 默认固定费% / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改 Fixed Charge / Enrollment / Alert 当改尺（Advisor-First）。
7. 早会一个动作：纠正「固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是 Fixed Charge 是否仅 EOD/Advance 过账、Transaction Code 是否房费桶、eCert 是否绑促销价码而非永久 BAR、Alert 是否仅员工触发、真 Remaining 是否仍 14、Pace 是否仍 Ahead。

## 禁止

- 把 14/399/799 / 固定费金额 / 入会计数 / Alert 计数当市场 Fact
- 编华住固定费·入会·兑券·Alert SOP、默认固定费%、699 Fact、Vendor China Fact
- 把 OPERA / Cloudbeds / Apaleo Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T16-00 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **C15-18 Room Move 核 / C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / 纯 P82 停车改写 / 纯 P49 积分改写 / 纯 P45 早会改写**（本卷核心是 Fixed Charges / Membership Enrollment·eCert / Alerts·Messages ≠ 公开尺）
- 把本卷当成已有 Room Move / Guest History / Room Condition / House Count 仿真的重写（那是换房·折扣·晚账 / 档案·名单·过账 / 房态·日结·统计 / 运营盘点·分房；本卷专拍 **Fixed Charges / Membership / Alerts 误读改尺**）
- 推翻 T16-00 deepen skip

## Outcome 标签

- 399 = 被拒绝的 dump（Fixed Charges / Membership Enrollment·eCert / Alerts·Messages 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：Fixed Charges / Add-Ons / Services 看着偏多或 ADR 被加项看脏；Enrollment / Memberships / eCert 看着偏多；Alerts / Guest Messages 看着偏多（Simulation 闸，不是 Fact）。销售/GM 把固定费自动过账 / 入会·兑券 / 弹窗留言当成需求死、需求强或改尺令：固定费堆高砸 / Fixed Charge 加价涨尺 / 入会多涨尺 / 兑券多砸尺 / Alert·留言砸尺 → 拟议 BAR→399。本店字段名 / 华住固定费·入会·兑券·Alert SOP / 默认固定费% = **NV，不编**。

### 2. Diagnosis

**P82**（+ **P78**/P69/P79/T-Fee · P87）· **P49**（+ **P80**）· **P45**（+ **P87**）。三把尺：公开 BAR 799 ≠ Fixed Charges / Add-Ons / Services（recurring/auto-post & ancillary）≠ Enrollment / Memberships / eCert（loyalty attach/redeem）≠ Alerts / Guest Messages（ops messaging）。先拆：问的是 Fixed Charge 是否仅 EOD/Advance 过账、Transaction Code 是否房费桶、eCert 是否绑促销价码、Alert 是否仅员工触发、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「固定费堆高所以砸 399」+ 形「Fixed Charge 就是加价所以涨尺」+ 形「入会多所以涨尺」+ 形「兑券多所以市场要 399」+ 形「Alert/留言很多所以砸尺」（禁）。Ahead 夜：这三层不被允许改永久公开 BAR。**≠ C15-18 Room Move 核 ≠ C15-10 Guest History 核 ≠ C15-02 Room Condition 核 ≠ C14-18 House Count 核 ≠ 纯 P82 停车改写 ≠ 纯 P49 积分改写 ≠ 纯 P45 早会改写。** T16-00 deepen **已 skip**（无新轴；本卷是既有 P82/P78/P69/P79 · P49/P80 · P45/P87 的 Fixed Charges / Membership / Alerts 专拍）。

### 3. Opportunity / Risk

机会：拆固定费自动过账 / 入会·兑券 / 弹窗留言层后高峰仍 Hold 公开灵活；固定费不是定价尺；入会·兑券不是公开 BAR Type；Alert 是作业弹窗不是定价权。风险：把「固定费堆高」训练成 ADR 脏砸到 399；把 Fixed Charge 写成涨尺令；把入会计数写成涨尺；把兑券计数写成市场 399；把 Alert/留言写成砸尺令。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Ops layers: verify Fixed Charge = EOD/Advance auto-post not Pace · Enrollment/Membership/eCert = loyalty attach/redeem not BAR Type · Alert/Message = staff/guest messaging not dump?
If misread layer: fix ops discipline (P82/P78/P69/P79/T-Fee/P87 · P49/P80 · P45/P87)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住固定费·入会·兑券·Alert SOP；默认固定费%；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改 Fixed Charge/Enrollment/Alert当改尺
Misroute: 停车/加人/含早/强制费 → P82/P78/P69/P79/T-Fee；补偿过账 → P87；积分升/兑 → P49；员工价 → P80；早会 → P45；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；Fixed Charge/Membership/Alert 不当 dump 燃料）；Room Move → C15-18/P61；Guest History → C15-10/P08；房态/夜审 → C15-02/P63/P54；House Count → C14-18/P45
```

### 5. Why

OPERA Cloud Managing Reservation Fixed Charges：周期/一次性固定费于 EOD（或 Advance Bill）自动过账；Frequency/Amount/Transaction Code/Supplement。→ **固定费过账 ≠ Pace ≠ 公开 BAR rewrite**。OPERA 5.6 Fixed Charges：valet/parking 按日例。→ **按日固定费 ≠ BAR Type**。Cloudbeds Create Add-Ons：Per Night/Guest Charge Type；可挂 Rate Plan。→ **Add-On ≠ 公开 BAR**。Apaleo Setting up Services：Services/extras/folio 单笔。→ **Service/extra ≠ rewrite**。OPERA Enrolling Guests in External Loyalty Programs：入会写档案会员。→ **入会 ≠ 涨价令**。OPERA Managing Reservation Memberships：档案会员挂到预订。→ **挂会员 ≠ BAR Type**。OPERA Redeeming Promotional e-Certificate：兑促销价码；状态 Reserved。→ **兑券促销码 ≠ 永久公开尺**。OPERA Configuring Reservation Alert Messages：入住/离店/打开预订时员工 Alert。→ **Alert ≠ Pace**。OPERA Configuring Global Alert Rules：规则过滤 + 触发。→ **规则弹窗 ≠ dump 令**。OPERA Managing Guest Messages：客人留言打印/房机/SMS。→ **留言作业 ≠ BAR**。Pace Ahead + remaining 14 = 需求仍紧，不是「Fixed Charges / Membership / Alerts」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把固定费自动过账 / 入会·兑券 / 弹窗留言永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑 Fixed Charge/Enrollment/Alert、不发明 699。

### 7. Risk

若对象其实是 Room Move / Discount Reasons / Open Folio → **C15-18 / P61/P87/P42**（本卷不重写换房专拍）。若 Guest History / Rooming List / Post It → **C15-10 / P08/P52/P69**。若 Room Condition / Night Audit / Market-Source → **C15-02 / P63/P54/P25**。若 House Count / Assignment / No Post → **C14-18 / P45**。若纯停车且层已分清 → **P82**（仍不把固定费堆写成 dump/涨尺燃料）。若纯积分兑房且层已分清 → **P49**（仍不把入会/兑券计数写成 dump 燃料）。若真 Behind 且层已分清 → **P05/P02**（仍不把 Fixed Charges/Membership/Alerts 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认固定费% 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是 Fixed Charge 是否仅 EOD/Advance 过账、Transaction Code 是否房费桶；eCert 是否仍被读成永久 BAR；Alert 是否仍被读成改尺令；真 Remaining；是否误入 C15-18 Room Move 核 / C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / 纯 P82 / 纯 P49 / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Fixed Charges/Membership/Alerts 不当改尺令。
- 确认滥读固定费堆高砸 / 错把 Fixed Charge 当涨尺 / 错把入会当涨尺 / 错把兑券当市场 399 / 错把 Alert 当砸尺 → 作业侧收口读法与审计（P82/P78/P69/P79 · P49/P80 · P45/P87）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「固定费多/入会多/Alert 多」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 Fixed Charges/Membership/Alerts 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 Fixed Charge 改尺许可证。

### 10. Confidence

方向 Medium（能拆固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ BAR + Pace Ahead + 「固定费/入会/Alert≠定价权」）。点字段名 / 华住 SOP / 默认固定费% Low（NV）。Evidence A Vendor OPERA Fixed Charges + 5.6 Fixed Charges + Cloudbeds Add-Ons + Apaleo Services + Enrolling + Reservation Memberships + eCertificate + Alert Messages + Global Alert Rules + Guest Messages（§172；本小时 curl 复核 → §173）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Fixed Charges / Membership Enrollment·eCert / Alerts·Messages dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P82 主过程（+ P78/P69/P79/T-Fee · P87）；P49（+ P80）；P45（+ P87）。**T16-00 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-16 02:17 C16-02，不改正文）：§173 CASE 指针复述 §172。Diagnose 走 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
