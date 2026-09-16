# Simulation｜2026 Booking Window / 提前期·Release Time·Sell Dates vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-booking-window-sat.md`  
> 配：Diagnose **T-Window** `theory/booking-window-vs-bar.md`；过程仍 **P33** `advisor-playbooks/restriction-overuse.md` + **P35** `advisor-playbooks/ota-visibility-drop.md` + handoff **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**  
> 短例仍在 T-Window §9；本卷 = callable 专卷（C04-02）  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- Booking-side 时窗层：Min/Max Advanced Booking · Release Time · Booking Period / Start-End Sell Dates · late booking until（OPERA Rate Codes / BDC BookingRule / Cloudbeds offset / Apaleo booking period · Service Availability 语义层；**Simulation — NOT Fact**；不是本店窗口字段、不是华住默认、不是推荐 BAR）
- 销售拟议 BAR→**399**（**REJECTED dump**）因为「OTA 上搜不到所以砍 / 有房却没 offer 所以需求弱 / 提前期挡住所以 dump / 临近才开卖所以公开也跟 / 早订价才是市场价」
- 用户原话（**NOT Fact**；本店窗口字段 / 华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT / 699 Fact / Walk $ / 佣金% / Vendor China Fact = **NV**）：
  - 「OTA 上搜不到我们，先砍到 399」
  - 「客人说订不了，我们明明有房，肯定是卖不动」
  - 「提前 30 天就不让订了，所以要降价把量买回来」
  - 「临近 3 天才开卖，公开 BAR 也该跟砍」
  - 「早订价才是市场价」
  - 「同日 10 点才放出来，先把公开尺砸了」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；闸是 **booking-side 时窗**（提前期 / release time / sell dates / late booking until）；过程输入是 **Pace · Remaining · 是否真有 offer** → **P33 / P35**（stay-side → **T-Restriction**；产品 → **P19**；同日时刻 → **P42**；配置事故 → **P60**）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 时窗留在可售/展示闸。**不可见 ≠ 需求弱。**「有房却无 offer」先查 minimum advance booking 等限制（Apaleo 官方排障）；override 显示 **不改可售、不改价格**。下单日轴 ≠ 住期轴。
4. **拒绝** BAR→399（搜不到所以砍 / 提前期挡住所以 dump / 临近才开卖所以跟 / 早订价才是市场价 / 同日才放所以砸尺）。
5. 窗口误挡 → **P33**（先松窗口，不砍 BAR）；搜不到/曝光 → **P35**；advance-purchase 产品 → **P19**；同日 release / 前台 → **P42**；政策收窗 → **P38**；stay-side → **T-Restriction**；配置/映射 → **P60**；真弱 leftover → **P05/P02**（仍不从时窗改写 BAR；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT / Walk $ / 佣金% / Vendor China Fact。不把 Vendor 默认值（720h / 72h / 13200h / 550 天 / 1 小时 / 4pm）当中国常模。
7. 早会一个动作：纠正「时窗 / 搜不到 ≠ 公开 BAR」+ Hold 公开 BAR（闸留闸，不砍尺）；若误挡则松窗口。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住 Booking Window·Release Time SOP、默认提前期、本店 ALT、699 Fact、Walk $、佣金%、Vendor China Fact
- 把 OPERA/BDC/Cloudbeds/Apaleo/Clock/HSMAI Vendor·协会例写入本仿真当市场 Fact / 中国窗口默认
- 开 **P88** / **P89**
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Restriction / T-Flash / T-Floor / T-Rack / T-Hurdle 核心**
- 把 P33 / P35 / P19 / P42 / P38 / P60 / P05 / P02 / P45 当本店时窗改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（时窗 / 可见性改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。Booking-side 时窗层像「提前期 offset + release time + sell dates / late booking until」（Simulation 闸层，不是 Fact）。销售把闸喊成尺：OTA 搜不到所以砍到 399、有房没 offer 所以需求弱、提前期挡住所以 dump、临近才开卖所以公开也跟、早订价才是市场价、同日 10 点才放所以砸尺。本店窗口字段 / 华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT = **NV，不编**。

### 2. Diagnosis

**T-Window**（过程仍 **P33** + **P35** + handoff **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。三把尺：公开 BAR 799 ≠ booking-side 时窗 ≠ Pace·Remaining·是否真有 offer（→P33/P35）。闸 = 「什么时候允许下单」，不是 BAR Type。先分四类：真卖光 / stay-side（→T-Restriction）/ **booking-side 时窗**（本卷）/ 曝光（→P35）。形 B 改尺 399 + 形 C 窗口误挡当需求弱（禁）。Ahead 夜：时窗不被允许改公开 BAR。**≠ T-Restriction ≠ T-Flash ≠ T-Floor ≠ T-Rack ≠ T-Hurdle。**

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活；误挡则松窗口，不必砍尺；搜不到先查可售/窗口。风险：把「搜不到」训练成新 BAR；把提前期/临近窗读成「公开也跟 399」；把早订价写成公开尺；两轴混淆去松错了住期限制。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Booking window layer: stay as sell/display gate · verify min/max advanced booking · release time · sell dates · late booking until
If mis-set: loosen window (P33) ± check CM map (P60)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 Booking Window·Release Time SOP；默认提前期；本店 ALT；699 Fact；Vendor China Fact；一夜 −15%；P88
Misroute: 曝光 → P35；产品 → P19；同日时刻 → P42；政策收窗 → P38；stay-side → T-Restriction；真弱 → P05/P02；早会 → P45
```

### 5. Why

OPERA Min/Max Advanced Booking + Start/End Sell Dates = 下单时窗配置，≠ BAR Type。BDC offsets + ReleaseTimeOfDay = 接口时窗，≠ 需求曲线。Cloudbeds Min offset 挡临近 / Max offset 挡远期（命名反直觉；默认值可踩坑）= 配置事故面，≠ dump 许可证。Apaleo：有房却无 offer **先查** minimum advance booking 等限制；override「Show unavailable offers」**不改可售、不改价格**。HSMAI ALT = 诊断输入，≠ 固定折扣 %。Clock Min/Max days before arrival + Last Minute、OPERA Rate Header Advance Booking = 同族时窗闸。Pace Ahead + remaining 14 = 需求仍紧，不是时窗 dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把可见性/时窗永久化成 399；闸留闸。不伪造增收、不代改窗口字段、不发明 699。

### 7. Risk

若对象其实是住期 MaxLOS/CTA/CTD → **T-Restriction**，本卷不替住期改尺。若曝光/内容 → **P35**。若刻意 advance-purchase → **P19**。若同日时刻 → **P42**。若配置/映射 → **P60**。若真 Behind 且窗口已正常 → **P05/P02**（仍不从时窗改写 BAR；禁一夜 −15%）。本店窗口字段 / 华住 SOP / 默认提前期 / 本店 ALT 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；窗口是否符合意图（min/max / release / sell dates / late-until）；放宽后 24h 分渠道 Pickup；渠道/引擎是否恢复返回 offer；窗口外拒单有无日志（无日志 → P43 纪律）；是否误入 T-Restriction / T-Flash / P19 / P05。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；时窗不当改尺令。
- 确认误挡 → **P33** 松窗口（± **P60**）；BAR 仍 Hold。
- 仍搜不到但窗口正常 → **P35** 查库存/内容/映射。
- stay-side → **T-Restriction**。产品 → **P19**。同日 → **P42**。
- 真 Behind 且窗口正常 → **P05/P02**（理由写 Pace；仍不从时窗改写 BAR；禁一夜 −15%）。

### 10. Confidence

方向 Medium（能拆时窗 vs 公开 + Pace Ahead + 「不可见 ≠ 需求弱」）。点窗口字段 / 华住 SOP / 默认提前期 / 本店 ALT Low（NV）。Evidence A Vendor OPERA Rate Codes + BDC BookingRule + Cloudbeds Advanced + Apaleo Rate Plans / Service Availability + Clock Restrictions + OPERA Rate Header + A 协会 HSMAI ALT。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的时窗 / 可见性 dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：T-Window 短例仍在 `theory/booking-window-vs-bar.md` §9；过程仍 P33 + P35（+ P19/P42/P38/T-Restriction/P60/P05·P02）。**不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-04 18:17 C04-02，不改正文）：§135 CASE 指针复述 §132–§133。Diagnose 走 **T-Window**，过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 交叉指针（2026-09-04 20:17 R04-20，不改正文三句 / 399 / 799）：§136 用途升核 HotelKey Min/Max Booking Lead Days（补 §132 HotelKey FAIL；可见性提前期闸 ≠ 公开灵活 BAR rewrite）+ Protel Min/Max advance booking of X Days / when booked X–Y（提前期闸 ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
