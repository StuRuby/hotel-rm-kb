# Simulation｜2026 Linked/Party · Copy Reservation · Rate Season · Preferences/VIP misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-linked-party-copy-misread-sat.md`  
> 配：Diagnose 走 **P01** `advisor-playbooks/high-demand-day.md`（+ **P45**/P10）· **P65** `advisor-playbooks/cancel-reinstate-old-rate.md`（+ **P66**/P33）· **P64**/T-Floor/P02（季节）· **P49**/P45（VIP/偏好）  
> 短例仍在 P01 / P45 / P65 / S16-06 / T16-08 skip；本卷 = callable 专卷（**C16-10**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T16-08 Linked/Party · Copy Reservation deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 运营层（Simulation — NOT Fact；不是华住字段名）：
  - **Linked Reservations / Party / Split multi-room**：多房 Split 成多笔并 Linked；Party 卡挂多单（OPERA Managing Linked Reservations；Stayntouch Support For Party Reservations）
  - **Copy Reservation**：克隆预订后 Look to Book / 可用性与限制复核（OPERA Copying Reservations；Stayntouch Copy Reservation Functionality）
  - **Rate Seasons / Preferences / VIP Levels**：季节日期模板填 pricing schedule 起止；分房提示；VIP 色标/Alert（OPERA Configuring Rate Seasons；Managing Reservation Preferences；VIP Levels）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「连了 8 间所以该涨 / Party 堆高所以砸尺腾」「复制旧单所以必须锁旧价 / 复制失败所以砸尺补」「季节码切淡季所以 BAR→399」「VIP/Preference 多所以涨或砍」
- 用户原话（**NOT Fact**；本店 Linked·Party·Copy·Season·VIP 字段名 / 华住连单·复制·季节·VIP SOP / 默认淡季折扣% / 699 Fact / Vendor China Fact = **NV**）：
  - 「连了 8 间，需求很强，今晚公开尺该涨或改尺」
  - 「Party 堆了很多，房间被占死，砸尺到 399 腾」
  - 「复制旧单，必须锁旧价；复制失败就 dump 到 399」
  - 「季节码切到淡季，所以 BAR→399」
  - 「VIP / Preference 很多，所以该涨或该砍到 399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；关联尺是 **Linked / Party**（multi-room association；挂 Party **不改房价**）；克隆尺是 **Copy Reservation**（clone/rebook ops，须过可用性与限制）→ **P01**（+ P45/P10）· **P65**（+ P66/P33）。季节/VIP/偏好另走 **P64**/T-Floor/P02 · **P49**/P45。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Linked/Party ≠ Pace ≠ 公开 BAR：Split→Linked / Party 挂多单不是「市场已证实该涨或该砸」。Copy ≠ 永久公开尺 / ≠ 必须锁旧价：克隆作业要过 Look to Book 与限制复核，失败不是 dump 令。Rate Season ≠ 自动淡季 dump：只填 pricing schedule 起止。Preferences/VIP ≠ 涨价令 / ≠ 砍尺令：分房提示与色标不是 Pace。
4. **拒绝** BAR→399（连单多涨/砸 / Party 堆砸 / 复制锁旧价失败砸 / 淡季季节砸 / VIP·偏好涨或砍）。
5. 早会一个动作 → **P45**；接团本身 → **P10**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 Linked/Party/Copy/Season/VIP 写成 dump 燃料；禁一夜 −15%）。旧价恢复争议 → **P65**；RMS 建议≠尺 → **P66**；限制挡 → **P33**。Shares/Accompanying 同房分账仍 **P78**（不与 Linked 混）。
6. **不发明 699**。不编华住连单·复制·季节·VIP SOP / 默认淡季折扣% / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改 Linked/Party/Copy/Season/VIP 当改尺（Advisor-First）。
7. 早会一个动作：纠正「连单数 / 克隆作业 / 季节模板 / VIP·偏好 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是 Linked 是否已 Split 成真实多房、Party 是否改价（Stayntouch 明示不改）、Copy 是否过限制/可用性、Season 是否只填起止日、VIP 是否仅色标/Alert、真 Remaining 是否仍 14、Pace 是否仍 Ahead。

## 禁止

- 把 14/399/799 / 连单数 / Party 计数 / VIP 计数当市场 Fact
- 编华住连单·复制·季节·VIP SOP、默认淡季折扣%、699 Fact、Vendor China Fact
- 把 OPERA / Stayntouch Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T16-08 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **C16-02 Fixed Charges 核 / C15-18 Room Move 核 / C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / 纯 P01 高峰改写 / 纯 P65 旧价改写 / 纯 P45 早会改写**（本卷核心是 Linked/Party / Copy / Rate Season / Preferences·VIP ≠ 公开尺）
- 把本卷当成已有 Fixed Charges / Room Move / Guest History 仿真的重写
- 推翻 T16-08 deepen skip
- 把 Linked 与 Shares/Accompanying（P78）混成一族

## Outcome 标签

- 399 = 被拒绝的 dump（Linked/Party / Copy Reservation / Rate Season / Preferences·VIP 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：Linked/Party 看着偏多；Copy 作业看着频繁或失败；Rate Season 切到「淡季」模板；Preferences/VIP 看着偏多（Simulation 闸，不是 Fact）。销售/GM 把连单关联 / 克隆作业 / 季节模板 / VIP·偏好当成需求死、需求强或改尺令：连单多涨或砸 / Party 堆砸 / 复制锁旧价失败砸 / 淡季季节砸 / VIP·偏好涨或砍 → 拟议 BAR→399。本店字段名 / 华住连单·复制·季节·VIP SOP / 默认淡季折扣% = **NV，不编**。

### 2. Diagnosis

**P01**（+ **P45**/P10）· **P65**（+ **P66**/P33）· **P64**/T-Floor/P02 · **P49**/P45。三把尺：公开 BAR 799 ≠ Linked/Party（multi-room association）≠ Copy（clone/rebook ops）≠ Rate Season（date-template）≠ Preferences/VIP（rooming-hint / profile-flag）。先拆：问的是 Linked 是否已 Split 成真实多房、Party 是否改价、Copy 是否过限制/可用性、Season 是否只填起止日、VIP 是否仅色标/Alert、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「连了 8 间所以涨/砸 399」+ 形「Party 堆了所以砸尺腾」+ 形「复制旧单锁旧价 / 复制失败 dump」+ 形「淡季季节所以 BAR→399」+ 形「VIP/Preference 多所以涨或砍」（禁）。Ahead 夜：这几层不被允许改永久公开 BAR。**≠ C16-02 Fixed Charges 核 ≠ C15-18 Room Move 核 ≠ C15-10 Guest History 核 ≠ C15-02 Room Condition 核 ≠ C14-18 House Count 核 ≠ 纯 P01 高峰改写 ≠ 纯 P65 旧价改写 ≠ 纯 P45 早会改写。** T16-08 deepen **已 skip**（无新轴；本卷是既有 P01/P45/P10 · P65/P66/P33 · P64/T-Floor/P02 · P49/P45 的 Linked/Party / Copy 专拍）。

### 3. Opportunity / Risk

机会：拆连单关联 / 克隆作业 / 季节模板 / VIP·偏好层后高峰仍 Hold 公开灵活；关联不是 Pace；克隆不是永久尺；季节不是自动 dump；VIP 色标不是涨价令。风险：把「连了 8 间」训练成涨/砸到 399；把 Party 挂单写成砸尺令；把 Copy 失败写成 dump；把 Season 切淡季写成 BAR→399；把 VIP/Preference 写成涨或砍。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Ops layers: verify Linked/Party = multi-room association not Pace · Copy = clone/rebook ops not permanent public scale · Season = date-template not dump · VIP/Preference = rooming/profile flag not raise/cut order?
If misread layer: fix ops discipline (P01/P45/P10 · P65/P66/P33 · P64/T-Floor/P02 · P49/P45)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住连单·复制·季节·VIP SOP；默认淡季折扣%；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改 Linked/Party/Copy/Season/VIP 当改尺
Misroute: 接团 → P10；早会 → P45；旧价恢复 → P65；RMS 建议≠尺 → P66；限制 → P33；季节/地板/真弱 → P64/T-Floor/P02/P05；VIP/兑房 → P49；Shares 同房分账 → P78（≠ Linked）；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；Linked/Party/Copy/Season/VIP 不当 dump 燃料）；Fixed Charges → C16-02/P82；Room Move → C15-18/P61；Guest History → C15-10/P08；房态/夜审 → C15-02/P63；House Count → C14-18/P45
```

### 5. Why

OPERA Cloud Managing Linked Reservations：多房可 Split 成多笔并 Linked；可 Unique Confirmation。→ **连单关联 ≠ Pace ≠ 公开 BAR rewrite**。Stayntouch Support For Party Reservations：Party 卡挂多单；**挂 Party 不改房价**。→ **Party ≠ BAR Type**。OPERA Cloud Copying Reservations：Clone；Look to Book 可改档案/住期；可选复制支付/路由/Notes/Package/Specials。→ **克隆作业 ≠ 必须锁旧价 / ≠ 永久公开尺**。Stayntouch Copy Reservation：选新到离日；复核房/价/加项/限制；团/配额不可 copy。→ **可用性复核 ≠ dump 令**。OPERA Configuring Rate Seasons：Season Code + Begin/End；不可重叠；填 pricing schedule 起止。→ **季节日期模板 ≠ 自动淡季 dump**。OPERA Managing Reservation Preferences：Floor/Smoking/Feature/Specials。→ **分房提示 ≠ Pace**。OPERA VIP Levels：过滤/Alert/色标。→ **VIP 色标 ≠ 涨价令**。Pace Ahead + remaining 14 = 需求仍紧，不是「Linked/Party/Copy/Season/VIP」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把连单关联 / 克隆作业 / 季节模板 / VIP·偏好永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑 Linked/Party/Copy/Season/VIP、不发明 699。

### 7. Risk

若对象其实是 Fixed Charges / Membership / Alerts → **C16-02 / P82/P49/P45**（本卷不重写固定费专拍）。若 Room Move / Discount Reasons / Open Folio → **C15-18 / P61/P87/P42**。若 Guest History / Rooming List / Post It → **C15-10 / P08/P52/P69**。若 Room Condition / Night Audit / Market-Source → **C15-02 / P63/P54/P25**。若 House Count / Assignment / No Post → **C14-18 / P45**。若纯高峰且层已分清 → **P01**（仍不把连单数写成涨/砸燃料）。若纯旧价恢复且层已分清 → **P65**（仍不把 Copy 失败写成 dump 燃料）。若真 Behind 且层已分清 → **P05/P02**（仍不把 Linked/Party/Copy/Season/VIP 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认淡季折扣% 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是 Linked 是否已 Split、Party 是否改价、Copy 是否过限制/可用性；Season 是否仍被读成自动 dump；VIP 是否仍被读成改尺令；真 Remaining；是否误入 C16-02 Fixed Charges 核 / C15-18 Room Move 核 / C15-10 Guest History 核 / C15-02 Room Condition 核 / C14-18 House Count 核 / 纯 P01 / 纯 P65 / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Linked/Party/Copy/Season/VIP 不当改尺令。
- 确认滥读连单多涨砸 / Party 堆砸 / Copy 锁旧价失败 dump / 淡季季节砸 / VIP·偏好涨砍 → 作业侧收口读法与审计（P01/P45/P10 · P65/P66/P33 · P64/T-Floor/P02 · P49/P45）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「连单多/Party 多/VIP 多」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 Linked/Party/Copy/Season/VIP 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是连单/复制改尺许可证。

### 10. Confidence

方向 Medium（能拆连单关联 / 克隆作业 / 季节模板 / VIP·偏好 ≠ BAR + Pace Ahead + 「Linked/Party/Copy/Season/VIP≠定价权」）。点字段名 / 华住 SOP / 默认淡季折扣% Low（NV）。Evidence A Vendor OPERA Linked + Linked Profiles + Copying + Stayntouch Copy + Stayntouch Party + Rate Seasons + Preferences + VIP Levels（§175；本小时 curl 复核 → §176）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Linked/Party / Copy Reservation / Rate Season / Preferences·VIP dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P01 主过程（+ P45/P10）；P65（+ P66/P33）；P64/T-Floor/P02；P49/P45。**T16-08 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-16 10:17 C16-10，不改正文）：§176 CASE 指针复述 §175。Diagnose 走 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
