# Simulation｜2026 DNM / Locked·Unassigned / Waitlist misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-dnm-locked-waitlist-misread-sat.md`  
> 配：Diagnose 走 **P37** `advisor-playbooks/ooo-capacity.md` + **P13** `advisor-playbooks/room-type-compression.md`；过程 + **P63**（Dirty/产能）± **P43**（候补/口头拒单≠涨）± **P24**（真 Sell Limit 满）± **P03**（真紧 Ahead）/ **P05**（真 leftover Behind）  
> 短例仍在 P37 / P13 / S05-22 / T06-00 skip；本卷 = callable 专卷（**C06-02**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T06-00 DNM deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 分房作业 / 未确认状态层（Simulation — NOT Fact；不是华住字段名）：
  - 多笔预订已 Mark **Do Not Move（DNM）**（OPERA：已分房后换房锁，至 check-in；权限可解；in-house 消）
  - 日历上若干房 **Locked**（Cloudbeds padlock）不能 Auto Assign；另有一批 **Unassigned**（空档断裂 / Locked / Blocked·OOS / 他类超售挡新分房）
  - **Waitlist** 候补堆较长（满房 / Sell Limit / 指定房型或价码不可售时的未确认状态；Accept 才进 Look to Book）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「DNM/挂锁很多所以假空该砍 / 未分房一堆说明卖不动 / 候补很长所以该砸（或反过来该涨）」
- 用户原话（**NOT Fact**；本店 DNM 字段 / 华住预分房·候补 SOP / 候补转化率 / 默认锁房数 / 699 Fact / Vendor China Fact = **NV**）：
  - 「好多房都 DNM 了，可售假的，先砍到 399 清一清」
  - 「日历挂锁 / 未分房一堆，说明卖不动，BAR 跟到 399」
  - 「候补排很长，需求死了 / 或者该涨到天价——反正先砸公开尺」
  - 「分房屏看着满，系统已经认 399 是新尺」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；分房作业层是 **DNM / Locked / Unassigned**；未确认状态是 **Waitlist** → **P37 / P13**（+ P63 / P43）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. DNM ≠ 扣库存 ≠ 公开 BAR Type：换房锁到 check-in；Locked/Unassigned = 分房作业摩擦；Waitlist = 未确认状态，Accept 才进可售确认。分房锁满 / 未分房多 / 候补长 ≠ 「全店需求死了该 dump」也 ≠ 自动涨价令。
4. **拒绝** BAR→399（DNM dump / 挂锁·未分房当弱需求砸 / 候补堆改尺）。
5. 真分母/可售 → **P37**；房型挤压 → **P13**；Dirty/产能 → **P63**；候补/口头拒单≠涨 → **P43**；真 Sell Limit 满 → **P24**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把分房锁写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 DNM·预分房·候补 SOP / 候补转化率 / 默认锁房数 / Vendor China Fact。不把 Vendor 例当中国常模。不建议用户点后台解 DNM 批量改尺（Advisor-First）。
7. 早会一个动作：纠正「换房锁 / 分房摩擦 / 候补未确认 ≠ 公开 BAR」+ Hold 公开 BAR；先问 DNM 是单笔还是批量、锁是否到 check-in 消、未分房原因、候补是否已 Accept。

## 禁止

- 把 14/399/799 / DNM 笔数 / Unassigned 数 / Waitlist 长当市场 Fact
- 编华住 DNM·预分房·候补 SOP、候补转化率、默认锁房数、699 Fact、Vendor China Fact
- 把 OPERA/Cloudbeds Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T06-00 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / P66 / P24 Sell Limit 核心**（本卷核心是分房作业/未确认状态 ≠ 公开尺）
- 把本卷当成已有 OOO 假 OCC 仿真的重写（那是分母缩；本卷专拍 **换房锁/未分房/候补误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（DNM / Locked·Unassigned / Waitlist 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。分房作业/未确认层：多笔 DNM（换房锁至 check-in）；日历 Locked 不能 Auto Assign；一批 Unassigned（空档断裂/锁/Blocked·OOS）；Waitlist 候补堆较长（Simulation 闸，不是 Fact）。销售/GM 把换房锁/未分房/候补当成假空或假满：DNM 多 / 挂锁·未分房 / 候补长 → 拟议 BAR→399。本店 DNM 字段 / 华住预分房·候补 SOP / 候补转化率 / 默认锁房数 = **NV，不编**。

### 2. Diagnosis

**P37** + **P13**（过程 ± **P63** ± **P43** ± **P24** ± **P03/P05**）。三把尺：公开 BAR 799 ≠ DNM（换房锁，不扣库存）≠ Locked/Unassigned（分房作业摩擦）≠ Waitlist（未确认状态）。先拆：DNM 单笔还是批量、是否到 check-in 消、未分房原因是锁/空档/Blocked、候补是否已 Accept、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「DNM/挂锁所以 dump 399」+ 形「未分房多=卖不动」+ 形「候补长=该砸/该涨」（禁）。Ahead 夜：分房作业层不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ P66 核心 ≠ P24 Sell Limit 核。** T06-00 deepen **已 skip**（无新轴；本卷是既有 P37/P13 的 DNM/分房锁/候补专拍）。

### 3. Opportunity / Risk

机会：拆作业层后高峰仍 Hold 公开灵活；DNM 是换房服务问题不是定价问题；Unassigned 交给分房作业不砍尺；候补 Accept 前不当确认需求。风险：把「DNM 很多」训练成新 BAR；把 Unassigned 写成全店弱需求砸到 399；把 Waitlist 当涨价令或 dump 燃料后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Assignment-control: verify DNM single vs batch · lock until check-in · Unassigned cause · Waitlist Accepted?
If misread layer: fix assignment/ops (P37/P13/P63/P43)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 DNM·预分房·候补 SOP；候补转化率；默认锁房数；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台批量解 DNM
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；锁不当 dump 燃料）；Dirty/产能 → P63；候补≠涨 → P43；真 Sell Limit → P24；分型挤压 → P13；早会 → P45
```

### 5. Why

OPERA Managing Reservation Do Not Move Room Status：已分房后 Mark DNM 防再分配；生效至 check-in；有权限者可改派；in-house 后自动消；锁符号标状态。→ **换房锁 ≠ 扣可售库存 ≠ 公开 BAR rewrite**。Cloudbeds Find and handle unassigned：有可售仍可未分房；Locked padlock 不能 Auto Assign；Blocked/OOS/courtesy hold 跳过；他类超售可挡新分房。→ **分房作业摩擦 ≠ 公开尺**。OPERA Managing Waitlist：满房 / Sell Limits / 指定房型或价码不可售 → Waitlist；Accept→Look to Book；EOD 离店后两日清。→ **候补未确认 ≠ 涨价令 ≠ dump 许可证**。Pace Ahead + remaining 14 = 需求仍紧，不是「锁多/未分房/候补长」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把分房锁/候补永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代批量解 DNM、不发明 699。

### 7. Risk

若对象其实是 OOO/OOS 缩分母 → 同 **P37**（本卷不重写分母核）。若 Dirty/人手翻不过来 → **P63**。若真 Sell Limit 满 → **P24**。若房型 Remaining 穿 → **P13**。若真 Behind 且作业层已分清 → **P05/P02**（仍不把锁写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 候补转化率 / 默认锁房数 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；DNM 单笔 vs 批量；锁是否到 check-in 消；未分房原因；候补是否已 Accept；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump / P24 Sell Limit 核。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；DNM/Unassigned/Waitlist 不当改尺令。
- 确认批量误标 DNM / 锁挡分房 → 作业侧解单笔或权限改派（P37/P13）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是分房屏「看着满」）。
- 真 Behind 且作业层已分清 → **P05/P02**（理由 Pace；仍不从换房锁改写 BAR；禁一夜 −15%）。
- 候补 Accept 后进确认 → 按确认 Pace 再评，不是按候补队长一夜 ±15%。
- 预算月末压力 → **T20/P56**，不是 DNM 改尺许可证。

### 10. Confidence

方向 Medium（能拆分房作业/未确认 ≠ BAR + Pace Ahead + 「换房锁≠定价权」）。点字段名 / 华住 SOP / 候补转化率 / 默认锁房数 Low（NV）。Evidence A Vendor OPERA Managing DNM + Cloudbeds Unassigned + OPERA Waitlist（§146；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 DNM / Locked·Unassigned / Waitlist dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P37 + P13 主过程；+ P63/P43/P24/P03/P05。**T06-00 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-06 02:17 C06-02，不改正文）：§147 CASE 指针复述 §146。Diagnose 走 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-06 04:17 R06-04，不改正文）：§148 新开 HotelKey DNM + Stayntouch DNM + Clock Disable room change。Diagnose 走 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
