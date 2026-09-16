# Simulation｜2026 Guest History·past ADR / Rooming List / Post It·Passerby misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md`  
> 配：Diagnose 走 **P08** `advisor-playbooks/slow-pickup.md`（+ **P45**/P01 · P48/P26）· **P52** `advisor-playbooks/group-cutoff-wash.md`（+ **P53**/P10 · P30/P31）· **P69** `advisor-playbooks/package-breakfast-vs-bar.md`（+ **P87** · ± P82/P78）  
> 短例仍在 P08 / P45 / P52 / S15-06 / T15-08 skip；本卷 = callable 专卷（**C15-10**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T15-08 Guest History / Rooming List / Post It deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 运营层（Simulation — NOT Fact；不是华住字段名）：
  - **Guest History / Profile Stay Statistics / past ADR**：档案住史 / 历史房收均价（OPERA Stay Statistics / Future·Past Stays / Profile Production ADR；Cloudbeds Stays）
  - **Rooming List / Block name list**：团块具名名单 pickup / 扣 block 配额（OPERA About/Creating Rooming List；Cloudbeds Manage Rooming Lists）
  - **Post It / Fast Post / Passerby folio**：辅项过账 / 迷你吧·礼品店 / 非住店结算（OPERA Post It）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「历史 ADR 低所以 BAR→399 / 画像 Stay ADR 就是公开尺」「名单没齐所以假空砍尺 / 团名名单=需求死」「辅项过账流水高所以涨 / 低所以砸」
- 用户原话（**NOT Fact**；本店住史·名单·过账字段名 / 华住住史·名单·过账 SOP / 默认历史 ADR 窗口 / 699 Fact / Vendor China Fact = **NV**）：
  - 「回头客历史 ADR 低，所以今晚 BAR→399」
  - 「画像 Stay ADR 就是公开尺，跟到 399」
  - 「团名单没齐，假空，砍尺到 399」
  - 「团名名单=需求死，BAR→399」
  - 「Post It / 迷你吧流水低所以砸尺 / 高所以涨到改尺」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；档案尺是 **Guest History / Profile Stay Statistics / past ADR**（profile history / stay-stat）；名单尺是 **Rooming List / Block name list**（block pickup ops）；过账尺是 **Post It / Fast Post / Passerby**（ancillary posting）→ **P08**（+ P45/P01 · P48/P26）· **P52**（+ P53/P10 · P30/P31）· **P69**（+ P87 · ± P82/P78）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Guest History / past ADR ≠ Pace ≠ 公开 BAR：历史 ADR / 档案 Stay ADR 是住史统计，不是今夜公开灵活价。Rooming List ≠ Pace ≠ 公开尺：名单没齐 / 团名名单是 pickup 作业，不是需求死证明。Post It / Passerby ≠ 房晚 BAR：辅项过账流水不是公开灵活价许可证。
4. **拒绝** BAR→399（历史 ADR 低砸 / 画像 Stay ADR 跟尺 / 名单没齐假空砍尺 / 团名名单=需求死 / 辅项流水高低改尺）。
5. 早会一个动作 → **P08**（Pace 读法）；早会三拍 → **P45**；高需 → **P01**；锚价误读 → **P48/P26**；团 cutoff/wash → **P52**；Definite·Tentative → **P53**；团评估 → **P10**；包价辅项 → **P69**；服务补偿过账 → **P87**；停车等同族 → **P82**；加床 → **P78**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 Guest History / Rooming List / Post It 写成 dump 燃料；禁一夜 −15%）。
6. **不发明 699**。不编华住住史·名单·过账 SOP / 默认历史 ADR 窗口 / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台改档案 ADR / 名单 / Post It 当改尺（Advisor-First）。
7. 早会一个动作：纠正「档案住史 / 团名单 / 辅项过账 ≠ 公开 BAR」+ Hold 公开 BAR；先问问的是历史 ADR 还是真 Pace、名单是否只扣 block 配额还是真 Remaining、Post It 是辅项码还是价码。

## 禁止

- 把 14/399/799 / 历史 ADR / 名单齐否 / Post It 流水当市场 Fact
- 编华住住史·名单·过账 SOP、默认历史 ADR 窗口、699 Fact、Vendor China Fact
- 把 OPERA / Cloudbeds Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T15-08 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **C15-02 Room Condition 核 / C14-18 House Count 核 / C06-02 DNM 核 / 纯 P54 noshow 改写 / 纯 P52 cutoff 改写 / 纯 P69 包价改写**（本卷核心是 Guest History·past ADR / Rooming List / Post It·Passerby ≠ 公开尺）
- 把本卷当成已有 Room Condition / House Count / DNM / Queue 仿真的重写（那是房态·日结·统计 / 运营盘点·分房 / 锁房 / 排队；本卷专拍 **Guest History / Rooming List / Post It 误读改尺**）
- 推翻 T15-08 deepen skip

## Outcome 标签

- 399 = 被拒绝的 dump（Guest History·past ADR / Rooming List / Post It·Passerby 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。层：Guest History / Profile Stay Statistics / past ADR 看着偏低；Rooming List / Block name list 看着没齐；Post It / Fast Post / Passerby 辅项流水看着偏低或偏高（Simulation 闸，不是 Fact）。销售/GM 把档案住史 / 团名单 / 辅项过账当成需求死、假空或改尺令：历史 ADR 低 / 画像 Stay ADR 跟尺 / 名单没齐假空 / 团名名单=需求死 / 辅项流水高低改尺 → 拟议 BAR→399。本店字段名 / 华住住史·名单·过账 SOP / 默认历史 ADR 窗口 = **NV，不编**。

### 2. Diagnosis

**P08**（+ **P45**/P01 · P48/P26）· **P52**（+ **P53**/P10 · P30/P31）· **P69**（+ **P87** · ± P82/P78）。三把尺：公开 BAR 799 ≠ Guest History / Profile Stay Statistics / past ADR（profile history / stay-stat）≠ Rooming List / Block name list（block pickup ops）≠ Post It / Fast Post / Passerby（ancillary posting）。先拆：问的是历史 ADR 还是真 Pace、名单是否只扣 block 配额还是真 Remaining、Post It 是辅项码还是价码、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「历史 ADR 低所以砸 399」+ 形「画像 Stay ADR 就是公开尺」+ 形「名单没齐所以假空砍尺」+ 形「团名名单=需求死」+ 形「辅项流水高低所以改尺」（禁）。Ahead 夜：这三层不被允许改永久公开 BAR。**≠ C15-02 Room Condition 核 ≠ C14-18 House Count 核 ≠ C06-02 DNM 核 ≠ 纯 P54 noshow 改写 ≠ 纯 P52 cutoff 改写 ≠ 纯 P69 包价改写。** T15-08 deepen **已 skip**（无新轴；本卷是既有 P08/P45/P01 · P52/P53/P10 · P69/P87 的 Guest History / Rooming List / Post It 专拍）。

### 3. Opportunity / Risk

机会：拆档案住史 / 团名单 / 辅项过账层后高峰仍 Hold 公开灵活；历史 ADR 不是今夜尺；名单没齐不是假空证据；Post It 是辅项过账不是定价权。风险：把「历史 ADR 低」训练成需求死砸到 399；把画像 Stay ADR 写成公开跟尺令；把名单没齐写成假空砍尺；把辅项流水高低写成涨砸令。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Ops layers: verify past ADR / Stay Statistics vs true Pace · Rooming List = block pickup not demand-dead · Post It/Passerby = ancillary posting not room BAR?
If misread layer: fix ops discipline (P08/P45/P01 · P52/P53/P10 · P69/P87)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住住史·名单·过账 SOP；默认历史 ADR 窗口；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台改档案ADR/名单/Post It当改尺
Misroute: Pace → P08；早会 → P45；高需 → P01；锚价误读 → P48/P26；团 cutoff/wash → P52；Tentative → P53；团评估 → P10；包价辅项 → P69；服务补偿 → P87；停车 → P82；加床 → P78；真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；Guest History/Rooming List/Post It 不当 dump 燃料）；房态/夜审 → C15-02/P63/P54；House Count → C14-18/P45
```

### 5. Why

OPERA Cloud Viewing Profile History Stay and Revenue Statistics：Stay Statistics / 历史 ADR（可含 passer-by 等）。→ **档案住史 / 历史 ADR ≠ Pace ≠ 公开 BAR rewrite**。OPERA Cloud Viewing Profile Future and Past Stays：档案住史列表。→ **住史列表 ≠ Pace**。OPERA Cloud Profile Production Statistics Report：档案产能 ADR。→ **档案产能 ADR ≠ 公开灵活尺**。Cloudbeds Stays tab inside Guest Profile：画像住史。→ **画像住史 ≠ rewrite**。OPERA Cloud About Rooming Lists：批量建 Block 具名预订；扣 block allocation。→ **名单作业 ≠ 公开尺**。OPERA Cloud Creating Reservation Using the Rooming List：pickup 作业。→ **pickup ≠ dump 令**。Cloudbeds How to Manage Rooming Lists：名单工具。→ **名单工具 ≠ Pace**。OPERA Cloud Charging Purchases Using Post It：Post It / Fast Post；Passer by folio。→ **辅项过账 ≠ 房晚 BAR**。Pace Ahead + remaining 14 = 需求仍紧，不是「Guest History / Rooming List / Post It」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把档案住史 / 团名单 / 辅项过账永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑住史/名单/Post It、不发明 699。

### 7. Risk

若对象其实是 Room Condition / Night Audit / Market-Source → **C15-02 / P63/P54/P25**（本卷不重写房态专拍）。若 House Count / Assignment / No Post → **C14-18 / P45**。若 DNM 锁房误读 → **C06-02 / P37**。若纯团 cutoff/Tentative 且层已分清 → **P52/P53**（仍不把名单没齐写成 dump 燃料）。若纯辅项/补偿过账且层已分清 → **P69/P87**（仍不把 Post It 流水写成 dump 燃料）。若真 Behind 且层已分清 → **P05/P02**（仍不把 Guest History/Rooming List/Post It 写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认历史 ADR 窗口仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；问的是历史 ADR / Stay Statistics 还是真 Pace；名单是否只扣 block 配额还是真 Remaining；Post It 是否仍被读成改尺令；真 Remaining；是否误入 C15-02 Room Condition 核 / C14-18 House Count 核 / C06-02 DNM 核 / 纯 P52 / 纯 P69 / P05 dump。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Guest History/Rooming List/Post It 不当改尺令。
- 确认滥读历史 ADR 低 / 错把画像 Stay ADR 当公开尺 / 错把名单没齐当假空 / 错把辅项流水当改尺 → 作业侧收口读法与审计（P08/P45/P01 · P52/P53/P10 · P69/P87）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「历史低价/名单空/过账低」）。
- 真 Behind 且层已分清 → **P05/P02**（理由 Pace；仍不从 Guest History/Rooming List/Post It 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 Guest History 改尺许可证。

### 10. Confidence

方向 Medium（能拆档案住史 / 团名单 / 辅项过账 ≠ BAR + Pace Ahead + 「住史/名单/过账≠定价权」）。点字段名 / 华住 SOP / 默认历史 ADR 窗口 Low（NV）。Evidence A Vendor OPERA Stay Statistics + Future/Past Stays + Profile Production ADR + Cloudbeds Stays + About Rooming Lists + Creating via Rooming List + Cloudbeds Manage Rooming Lists + Post It（§166；本小时 curl 复核 → §167）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Guest History·past ADR / Rooming List / Post It·Passerby dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P08 主过程（+ P45/P01 · P48/P26）；P52（+ P53/P10）；P69（+ P87）。**T15-08 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-15 10:17 C15-10，不改正文）：§167 CASE 指针复述 §166。Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
