# Simulation｜2026 Room Condition / Night Audit·EOD·Cashier / Market·Source misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-room-condition-night-audit-market-misread-sat.md`  
> 配：Diagnose 走 **P63** `advisor-playbooks/staff-capacity-constraint.md`（+ **P67**/P37）· **P54** `advisor-playbooks/transient-noshow.md`（+ **P45**/P08）· **P25** `advisor-playbooks/direct-vs-ota-mix.md`（+ **P20**/P60/P36）  
> 短例仍在 P63 / P54 / P45 / P25 / S14-22 / T15-00 skip；本卷 = callable 专卷（**C15-02**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T15-00 Room Condition / Night Audit / Market-Source deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 运营层（Simulation — NOT Fact；不是华住字段名）：
  - **Room Condition**：Dirty / Clean / Inspected / Pickup（OPERA：IP/CL/PU/DI；Cloudbeds：Dirty 仍可售 unless OOS/block）
  - **Night Audit / EOD / Cashier Closure / Business Date**：过账 / 班次关账 / 滚营业日（可挡在 open cashiers / arrivals / no-shows）
  - **Market Code / Source Code / Channel Default Market·Source**：segmentation / origin 标签（不是公开灵活价）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「脏房多所以需求死砸」「Inspected 少所以假满涨」「夜审没过/营业日没滚所以 Pace 假死砍尺」「市场码/来源偏 OTA 所以公开跟 dump」
- 用户原话（**NOT Fact**；本店房态·夜审·市场码字段名 / 华住房态·夜审·市场码 SOP / 默认夜审时刻 / 699 Fact / Vendor China Fact = **NV**）：
  - 「脏房多，需求死了，BAR→399」
  - 「Inspected 太少，看着假满，该涨或该砍 BAR」
  - 「夜审没过 / 营业日没滚，Pace 假死，砍尺到 399」
  - 「市场码/来源偏 OTA，公开跟 dump 到 399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；房态尺是 **Room Condition Dirty/Clean/Inspected/Pickup**（HK cleaning-status）；日结尺是 **Night Audit / EOD / Cashier Closure / Business Date**（posting/shift-closure）；统计尺是 **Market Code / Source Code / Channel Default**（segmentation/origin）→ **P63**（+ P67/P37）· **P54**（+ P45/P08）· **P25**（+ P20/P60/P36）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Room Condition ≠ Pace ≠ 公开 BAR：Dirty 仍可售 unless OOS/block；Inspected/Clean/Pickup ≠ 假满/假空证据。Night Audit / EOD / Cashier ≠ BAR：过账/班次关账/滚营业日是业务日结层，不是需求证明。Market/Source/Channel ≠ BAR：统计/来源标签不是公开灵活价。
4. **拒绝** BAR→399（脏房砸 / Inspected 假满涨砸 / 夜审未过·营业日没滚砍尺 / 市场码·来源偏 OTA 跟 dump）。
5. 早会一个动作 → **P63**（产能/翻房）；延退窗 → **P67**；Dirty≠OOO → **P37**；散客当天没到 / Auto No Show → **P54**；早会三拍 → **P45**；Pace 读法 → **P08**；直销 vs OTA mix → **P25**；渠道净价 → **P20**；价平破口 → **P60**；比价不可比 → **P36**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 Room Condition / Night Audit / Market-Source 写成 dump 燃料；禁一夜 −15%）。
6. **不发明 699**。不编华住房态·夜审·市场码 SOP / 默认夜审时刻 / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改 Dirty/Inspected / 夜审 / 市场码当改尺（Advisor-First）。
7. 早会一个动作：纠正「房态 / 日结 / 统计码 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是 Dirty 数还是真 Pace、夜审挡点还是真 Remaining、Market/Source 是标签还是价码。

## 禁止

- 把 14/399/799 / Dirty 间数 / Inspected 间数 / 夜审是否过 / 市场码占比当市场 Fact
- 编华住房态·夜审·市场码 SOP、默认夜审时刻、699 Fact、Vendor China Fact
- 把 OPERA / Cloudbeds Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T15-00 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **C14-18 House Count 核 / C06-02 DNM 核 / C06-10 Queue 核 / C07-10 RTC 核 / C07-02 Mass Update 核 / 纯 P54 noshow 改写 / P52/P53 团状态核**（本卷核心是 Room Condition / Night Audit·EOD·Cashier / Market·Source ≠ 公开尺）
- 把本卷当成已有 House Count / DNM / Queue / RTC / Mass Update 仿真的重写（那是运营盘点·分房·过账 / 锁房 / 排队 / 计费房型 / 批量价表；本卷专拍 **Room Condition / Night Audit·EOD·Cashier / Market·Source 误读改尺**）
- 推翻 T15-00 deepen skip

## Outcome 标签

- 399 = 被拒绝的 dump（Room Condition / Night Audit·EOD·Cashier / Market·Source 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：Room Condition Dirty/Clean/Inspected/Pickup 看着偏脏或 Inspected 少；Night Audit / EOD / Cashier Closure 未过或 Business Date 未滚；Market Code / Source Code 看着偏 OTA（Simulation 闸，不是 Fact）。销售/GM 把房态 / 日结 / 统计码当成需求死、假满或改尺令：脏房多 / Inspected 少 / 夜审没过 / 市场码偏 OTA → 拟议 BAR→399。本店字段名 / 华住房态·夜审·市场码 SOP / 默认夜审时刻 = **NV，不编**。

### 2. Diagnosis

**P63**（+ **P67**/P37）· **P54**（+ **P45**/P08）· **P25**（+ **P20**/P60/P36）。三把尺：公开 BAR 799 ≠ Room Condition Dirty/Clean/Inspected/Pickup（HK cleaning-status）≠ Night Audit / EOD / Cashier Closure / Business Date（posting/shift-closure）≠ Market Code / Source Code / Channel Default（segmentation/origin）。先拆：问的是 Dirty 数还是真 Pace、夜审挡点（open cashiers / arrivals / no-shows）还是真 Remaining、Market/Source 是标签还是价码、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「脏房多所以砸 399」+ 形「Inspected 少假满涨砸」+ 形「夜审没过所以 Pace 假死砍尺」+ 形「来源偏 OTA 所以公开跟 dump」（禁）。Ahead 夜：这三层不被允许改永久公开 BAR。**≠ C14-18 House Count 核 ≠ C06-02 DNM 核 ≠ C06-10 Queue 核 ≠ C07-10 RTC 核 ≠ C07-02 Mass Update 核 ≠ 纯 P54 noshow 改写 ≠ P52/P53 团状态核。** T15-00 deepen **已 skip**（无新轴；本卷是既有 P63/P54/P45/P25 的 Room Condition / Night Audit / Market-Source 专拍）。

### 3. Opportunity / Risk

机会：拆房态 / 日结 / 统计层后高峰仍 Hold 公开灵活；Dirty 仍可售 unless OOS/block；夜审是过账/滚日不是需求证明；Market/Source 是标签不是定价权。风险：把「脏房多」训练成需求死砸到 399；把 Inspected 少写成假满涨砸；把夜审未过/营业日没滚当弱需求一夜 −15%；把来源偏 OTA 写成公开 dump 令。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Ops layers: verify Dirty/Clean/Inspected/Pickup vs true sellable · Night Audit/EOD/Cashier/Business Date = posting not Pace · Market/Source/Channel = label not rate?
If misread layer: fix ops discipline (P63/P67/P37 · P54/P45/P08 · P25/P20/P60/P36)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住房态·夜审·市场码 SOP；默认夜审时刻；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改 Dirty/Inspected/夜审/市场码当改尺
Misroute: 产能/翻房 → P63；延退 → P67；Dirty≠OOO → P37；散客当天没到 → P54；早会 → P45；Pace → P08；mix → P25；渠道净价 → P20；价平 → P60；比价不可比 → P36；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；Room Condition/Night Audit/Market-Source 不当 dump 燃料）；团 cutoff/状态 → P52/P53
```

### 5. Why

OPERA Cloud Room Management：IP/CL/PU/DI/OS/OO 房态码。→ **HK cleaning-status ≠ Pace ≠ 公开 BAR rewrite**。OPERA Cloud Controls — Room Management：Inspected Status；夜审可刷在住 Dirty；空房降级层次。→ **控制层 ≠ 定价权**。Cloudbeds Housekeeping room conditions：Dirty/Clean/Inspected；**Dirty 仍可售** unless OOS/block。→ **房态提醒 ≠ 库存死 ≠ dump**。OPERA Cloud Closing Cashiers：班次关账/对账。→ **关账 ≠ 需求死 ≠ BAR rewrite**。OPERA Cloud Managing End of Day：Manage EOD；Arrivals/Departures/open cashiers。→ **日结作业屏 ≠ rewrite**。Cloudbeds Night Audit：过账/更新状态/滚系统日。→ **夜审 ≠ BAR Type**。OPERA Cloud Marketing Management：Market Code 统计房晚/收入；Source Code 来源追踪。→ **统计/来源标签 ≠ 公开价**。Cloudbeds Set up and Manage Market Segments：Market Group/Segment；可挂 rate plan。→ **分段标签 ≠ BAR**。Pace Ahead + remaining 14 = 需求仍紧，不是「Room Condition / Night Audit / Market-Source」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把房态 / 日结 / 统计码永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑 Dirty/Inspected/夜审/市场码、不发明 699。

### 7. Risk

若对象其实是 House Count / Assignment / No Post → **C14-18 / P45**（本卷不重写 House Count 专拍）。若 DNM 锁房误读 → **C06-02 / P37**。若排队/Pending/Rush → **C06-10 / P63**。若 RTC/Day Type → **C07-10**。若 Mass Update/Refresh → **C07-02**。若散客当天没到且层已分清 → **P54**（仍不把夜审挡点写成 dump 燃料）。若团 cutoff/Tentative → **P52/P53**。若真 Behind 且层已分清 → **P05/P02**（仍不把 Room Condition/Night Audit/Market-Source 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认夜审时刻仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是 Dirty/Inspected 还是真 Pace；夜审挡点还是真 Remaining；Market/Source 是否仍被读成改尺令；真 Remaining；是否误入 C14-18 House Count 核 / C06-02 DNM 核 / C06-10 Queue 核 / C07-10 RTC 核 / C07-02 Mass Update 核 / 纯 P54 / P52/P53 / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Room Condition/Night Audit/Market-Source 不当改尺令。
- 确认滥读 Dirty 多 / 错把 Inspected 少当假满 / 错把夜审未过当弱需求 / 错把来源偏 OTA 当 dump → 作业侧收口读法与审计（P63/P67/P37 · P54/P45/P08 · P25/P20/P60）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「脏房看着满/空」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 Room Condition/Night Audit/Market-Source 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 Room Condition 改尺许可证。

### 10. Confidence

方向 Medium（能拆房态 / 日结 / 统计码 ≠ BAR + Pace Ahead + 「房态/日结/统计≠定价权」）。点字段名 / 华住 SOP / 默认夜审时刻 Low（NV）。Evidence A Vendor OPERA Room Management + Controls Room Mgmt + Cloudbeds HK conditions + Closing Cashiers + Managing EOD + Cloudbeds Night Audit + Marketing Management + Cloudbeds Market Segments（§163；本小时 curl 复核 → §164）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Room Condition / Night Audit·EOD·Cashier / Market·Source dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P63 主过程（+ P67/P37）；P54（+ P45/P08）；P25（+ P20/P60/P36）。**T15-00 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-15 02:17 C15-02，不改正文）：§164 CASE 指针复述 §163。Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
