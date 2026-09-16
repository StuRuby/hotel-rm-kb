# Simulation｜2026 Queue / Pending / Rush / Room Is Ready misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-queue-pending-rush-misread-sat.md`  
> 配：Diagnose 走 **P63** `advisor-playbooks/staff-capacity-constraint.md` + **P67** `advisor-playbooks/late-checkout-early-checkin.md`；过程 + **P37**（可售分母）± **P43**（拥堵/口头拒单≠涨）± **P03**（真紧 Ahead）/ **P05**（真 leftover Behind）  
> 短例仍在 P63 / P67 / S06-06 / T06-08 skip；本卷 = callable 专卷（**C06-10**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T06-08 Queue deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 到店周转 / 房态就绪层（Simulation — NOT Fact；不是华住字段名）：
  - 多笔到客已分房但仍 **Queue**（OPERA：房仍 occupied 或 Dirty → Place on Queue；Clean/Inspected 后完成入住；可 Priority / rush SMS）
  - **Pending / QUEUED** 列表较长（HotelKey Pending = 已到等清洁/检查；Stayntouch 须先分房再 PUT IN QUEUE → QUEUED）
  - HK **Rush** 催房频繁（OPERA 5.6 Queue Rush；Dirty/Pick Up/Clean；Text Msg）
  - **Room Is Ready** 通知尚未批量发出（Cloudbeds：须 Vacant & Clean/Inspected 才通知）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「大堂排队很长所以假满该涨 / Pending·QUEUED 一堆说明卖不动该砍 / rush 很凶所以今夜该 +15%——反正先砸公开尺」
- 用户原话（**NOT Fact**；本店 Queue/Pending 字段 / 华住排队·rush SOP / 平均等待分钟 / 默认 rush 阈值 / 699 Fact / Vendor China Fact = **NV**）：
  - 「大堂排很长，看着假满，先砍到 399 清一清 / 或者该涨到天价」
  - 「Pending / QUEUED 一堆，说明卖不动，BAR 跟到 399」
  - 「rush 很凶，今晚系统已经认 399 是新尺」
  - 「Room Is Ready 还没发完，需求死了」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；到店周转层是 **Queue / Pending / QUEUED / Rush**；就绪通知是 **Room Is Ready** → **P63 / P67**（+ P37 / P43）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Queue ≠ 扣库存 ≠ 公开 BAR Type：到客已分房、房未 ready（occupied/Dirty）的前台·HK 周转入队；Pending/QUEUED = 已到等清洁/检查；Rush = 催 HK；Room Is Ready = Vacant&Clean/Inspected 才通知。大堂拥堵 / Pending 条数 / rush 凶 ≠ 「全店需求死了该 dump」也 ≠ 自动涨价令。
4. **拒绝** BAR→399（排队 dump / Pending 当弱需求砸 / rush 改尺 / Ready 未发完改尺）。
5. Dirty/产能 → **P63**；延退/早到周转窗 → **P67**；真分母/可售 → **P37**；拥堵/口头拒单≠涨 → **P43**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把排队长度写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住排队·rush SOP / 平均等待分钟 / 默认 rush 阈值 / Vendor China Fact。不把 Vendor 例当中国常模。不建议用户点后台批量改 Queue 状态当改尺（Advisor-First）。
7. 早会一个动作：纠正「到店周转 / 房态就绪 ≠ 公开 BAR」+ Hold 公开 BAR；先问排队是 Dirty 周转还是真无房、Pending 是否已分房、Room Is Ready 是否已 Vacant&Clean/Inspected、延退是否挡早到窗。

## 禁止

- 把 14/399/799 / Queue 长度 / Pending 条数 / rush 次数当市场 Fact
- 编华住排队·rush SOP、平均等待分钟、默认 rush 阈值、699 Fact、Vendor China Fact
- 把 OPERA/Stayntouch/HotelKey/Cloudbeds Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T06-08 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / P66 / P24 Sell Limit / P37 DNM 核心**（本卷核心是到店周转/房态就绪 ≠ 公开尺）
- 把本卷当成已有 HK 产能仿真或延退仿真的重写（那是产能顶 / 小时窗；本卷专拍 **排队/Pending/rush/Ready 误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（Queue / Pending / Rush / Room Is Ready 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。到店周转/就绪层：多笔 Queue（房仍 occupied/Dirty）；Pending/QUEUED 列表较长；HK Rush 催房频繁；Room Is Ready 尚未批量发出（Simulation 闸，不是 Fact）。销售/GM 把大堂拥堵/Pending 条数/rush 当成假满或假死：排队长 / Pending 多 / rush 凶 → 拟议 BAR→399。本店 Queue/Pending 字段 / 华住排队·rush SOP / 平均等待分钟 / 默认 rush 阈值 = **NV，不编**。

### 2. Diagnosis

**P63** + **P67**（过程 ± **P37** ± **P43** ± **P03/P05**）。三把尺：公开 BAR 799 ≠ Queue（到店周转入队，不扣库存）≠ Pending/QUEUED（已到等清洁/检查）≠ Rush / Room Is Ready（催房 / 就绪通知）。先拆：排队是 Dirty 周转还是真无房、Pending 是否已分房、Room Is Ready 是否已 Vacant&Clean/Inspected、延退是否挡早到、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「排队/Pending 所以 dump 399」+ 形「rush 凶=该涨/该砸」（禁）。Ahead 夜：到店作业层不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ P66 核心 ≠ P24 Sell Limit 核 ≠ P37 DNM 核。** T06-08 deepen **已 skip**（无新轴；本卷是既有 P63/P67 的 Queue/Pending/rush/Ready 专拍）。

### 3. Opportunity / Risk

机会：拆作业层后高峰仍 Hold 公开灵活；Queue 是 HK 周转问题不是定价问题；Pending 交给前台·HK 不砍尺；Ready 未发完不当需求死。风险：把「大堂排队很长」训练成新 BAR；把 Pending 条数写成全店弱需求砸到 399；把 rush 当涨价令或 dump 燃料后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Turnover-control: verify Queue Dirty vs no-room · Pending assigned? · Room Is Ready Vacant&Clean/Inspected? · late-checkout blocking early arrivals?
If misread layer: fix HK/ops (P63/P67/P37/P43)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住排队·rush SOP；平均等待分钟；默认 rush 阈值；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台批量改 Queue 当改尺
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；排队不当 dump 燃料）；Dirty/产能 → P63；延退/早到 → P67；拥堵≠涨 → P43；真分母 → P37；早会 → P45
```

### 5. Why

OPERA Managing Reservation Queue Status：到客已分房、房型未 ready（仍 occupied 或 Dirty）→ Place on Queue；Clean/Inspected 后完成入住；Wait Time / Priority；可 SMS rush HK + 通知客人。→ **排队状态 ≠ 扣可售库存 ≠ 公开 BAR rewrite**。OPERA PWA Queue Rooms：HK 移动端看 Queue；Prioritize / Remove / Change Room。→ **到店周转作业 ≠ 公开尺**。OPERA 5.6 Queue Rush Rooms：Housekeeping Queue Rush；Dirty/Pick Up/Clean；Text Msg 催 rush。→ **Rush ≠ 涨价令**。Stayntouch Queued Rooms：须先分房；PUT IN QUEUE → QUEUED；ROOM READY AUTO CHECK-IN / NOTIFICATION。→ **QUEUED ≠ BAR Type**。HotelKey Pending Rooms Report：Pending = 已到等清洁/检查；Urgent、等待时长。→ **Pending 条数 ≠ 公开需求**。Cloudbeds Room Is Ready：须 Vacant & Clean/Inspected 才通知。→ **就绪通知 ≠ BAR rewrite**。Pace Ahead + remaining 14 = 需求仍紧，不是「排队长/Pending 多/rush 凶」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把到店周转/就绪层永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代批量改 Queue、不发明 699。

### 7. Risk

若对象其实是 Dirty/人手翻不过来 → 同 **P63**（本卷不重写产能核）。若延退挡早到窗 → **P67**。若真 OOO/OOS 缩分母 → **P37**。若真 Behind 且作业层已分清 → **P05/P02**（仍不把排队写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 平均等待分钟 / 默认 rush 阈值 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；排队是 Dirty 周转还是真无房；Pending 是否已分房；Room Is Ready 是否已 Vacant&Clean/Inspected；延退是否挡早到；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump / P37 DNM 核 / P24 Sell Limit 核。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Queue/Pending/Rush/Ready 不当改尺令。
- 确认 Dirty 积压 / 延退挡窗 → 作业侧催 HK / 收口延退（P63/P67）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是大堂「看着满」）。
- 真 Behind 且作业层已分清 → **P05/P02**（理由 Pace；仍不从排队长度改写 BAR；禁一夜 −15%）。
- Room Is Ready 批量发出后 → 按确认 Pace 再评，不是按 Pending 队长一夜 ±15%。
- 预算月末压力 → **T20/P56**，不是 Queue 改尺许可证。

### 10. Confidence

方向 Medium（能拆到店周转/房态就绪 ≠ BAR + Pace Ahead + 「排队≠定价权」）。点字段名 / 华住 SOP / 平均等待分钟 / 默认 rush 阈值 Low（NV）。Evidence A Vendor OPERA Queue + PWA + 5.6 Rush + Stayntouch Queued + HotelKey Pending + Cloudbeds Room Is Ready（§149；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Queue / Pending / Rush / Room Is Ready dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P63 + P67 主过程；+ P37/P43/P03/P05。**T06-08 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-06 10:17 C06-10，不改正文）：§150 CASE 指针复述 §149。Diagnose 走 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
> 指针（2026-09-06 12:17 R06-12，不改正文）：§151 Clock Room Statuses + Apaleo Housekeeping + Protel Housekeeping list 新开（Queue/Dirty 互补源）。Diagnose 主闸仍 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-1217-sources-recap.md`。
