# Simulation｜2026 Mass Update / Daily Rates Replace / Refresh·Update rates misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-mass-update-refresh-misread-sat.md`  
> 配：Diagnose 走 **P66** `advisor-playbooks/rms-rec-override.md` + **P65** `advisor-playbooks/cancel-reinstate-old-rate.md`；过程 + **P64**（关低开高）± **P01/P02/P05**（真强弱）± **P60**（渠道推送）± **P03**（真紧）/ **P45**（早会）  
> 短例仍在 P66 / P65 / S06-22 / T07-00 skip；本卷 = callable 专卷（**C07-02**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T07-00 Mass Update/Refresh deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 批量价表 / 已订同步层（Simulation — NOT Fact；不是华住字段名）：
  - 有人刚跑完 **Mass Update**（OPERA Cloud：批量改多笔 Rate Code / Rate Amount；每批约 ≤100；可勾 Override Rate Code Restrictions）
  - **Daily Rates Pricing Schedule** 被 Create/Replace 成一段低价日历（Add/Subtract / Delete date-range 也可 mass updates to rate amounts）
  - 改完 schedule/package 后，有人点了 **Refresh Rate** / 做了 **Update rates**（OPERA：existing reservation 须 refreshed；Protel：Update rates 推到入住前旧单；手改 RBD override 夜可保留）
  - 早会口述还混进「Non-deduct 一扣可售看着 0」（Property Availability View Options；读法轴，不当改尺燃料）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「批量改了上百笔所以公开该跟到批量价 / 日历 Replace 成 399 所以新尺就是 399 / Refresh·Update 旧单到低价所以必须继续 dump / Non-deduct 假满说明该砸或涨——反正先砸公开尺」
- 用户原话（**NOT Fact**；本店 Mass Update 权限名 / 华住批量改价·Refresh SOP / 默认批量条数 / Daily Rates 最大天数 / 699 Fact / Vendor China Fact = **NV**）：
  - 「Mass Update 改了好多笔，公开 BAR 跟到那些批量价」
  - 「Daily Rates 已经 Replace 成 399，那就是新尺」
  - 「Refresh / Update rates 旧单都压下去了，BAR 也得钉 399」
  - 「Non-deduct 一看可售没了，假满该砍或该涨——先砸到 399」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；批量层是 **Mass Update / Daily Rates Create·Replace·Add/Subtract**；同步层是 **Refresh Rate / Update rates** → **P66 / P65**（+ P64 / P01/P02/P05 / P60）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Mass Update / Daily Rates Replace ≠ 公开 BAR Type：批量改已订或写日历是作业/价表工具，不是 Pace/Pickup 证据，也不是「市场已证实 399」。Refresh/Update = existing-reservation sync（履约层），不是「必须再 dump 公开尺」的许可证。Non-deduct view = availability read，不是物理卖光。
4. **拒绝** BAR→399（批量跟价 dump / 日历 Replace 钉尺 / Refresh·Update 旧单当弱需求砸 / Non-deduct 读法改尺）。
5. 单笔 Fixed/Amount Override → **C06-18 / P66+P65**；RMS 建议卖价 → **P66**；旧价 Reinstate → **P65**；关低开高 → **P64**；渠道映射/推送 → **P60**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把批量条数/Replace/Refresh 写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住批量改价·Refresh SOP / 默认批量条数 / Daily Rates 最大天数 / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台批量 Mass Update/Refresh 当改尺（Advisor-First）。
7. 早会一个动作：纠正「批量价表/已订同步 ≠ 公开 BAR」+ Hold 公开 BAR；先问写的是日历还是已订、是否勾 Override Restrictions、Refresh 是否误伤 Fixed/手改夜、渠道 job 是否只推了部分 interval、Non-deduct 是否被当成物理卖光。

## 禁止

- 把 14/399/799 / 批量条数 / Replace 日历 / Refresh 次数当市场 Fact
- 编华住批量改价·Refresh SOP、默认批量条数、Daily Rates 最大天数、699 Fact、Vendor China Fact
- 把 OPERA/Protel Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T07-00 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / C06-18 Fixed 单笔核 / P63 Queue 核 / P24 Sell Limit 核 / P37 DNM 核**（本卷核心是批量价表/已订同步 ≠ 公开尺）
- 把本卷当成已有 Fixed/Override 仿真或 RMS dump 仿真的重写（那是单笔改价/系统建议；本卷专拍 **Mass Update / Daily Rates Replace / Refresh·Update 误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（Mass Update / Daily Rates Replace / Refresh·Update rates 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。批量/同步层：Mass Update 改了多笔已订；Daily Rates Create/Replace 写了一段低价日历；有人 Refresh/Update 旧单；早会还混进 Non-deduct 可售读法（Simulation 闸，不是 Fact）。销售/GM 把批量写入/旧单同步当成假弱或新尺：批量多 / Replace 成 399 / Refresh 了 / Non-deduct 看着没房 → 拟议 BAR→399。本店 Mass Update 权限名 / 华住批量改价·Refresh SOP / 默认批量条数 / Daily Rates 最大天数 = **NV，不编**。

### 2. Diagnosis

**P66** + **P65**（过程 ± **P64** ± **P01/P02/P05** ± **P60** ± **P03** ± **P45**）。三把尺：公开 BAR 799 ≠ Mass Update / Daily Rates Replace（批量价表或已订同步）≠ Refresh Rate / Update rates（existing-reservation sync）。先拆：写的是日历还是已订、是否勾 Override Restrictions、Refresh 是否误伤 Fixed/手改夜、渠道 job 是否只推了部分 interval、Non-deduct 是否被当成物理卖光、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「批量改了所以 dump 399」+ 形「Replace/Refresh = 新尺」（禁）。Ahead 夜：批量层不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ C06-18 Fixed 单笔核 ≠ P63 Queue 核 ≠ P24 Sell Limit 核 ≠ P37 DNM 核。** T07-00 deepen **已 skip**（无新轴；本卷是既有 P66/P65 的 Mass Update/Refresh 专拍）。

### 3. Opportunity / Risk

机会：拆批量/同步层后高峰仍 Hold 公开灵活；Mass Update / Daily Rates Replace 是作业工具不是定价问题；Refresh/Update 交给履约同步不砍尺；Non-deduct 读法不当假满燃料。风险：把「批量改了很多」训练成新 BAR；把日历 Replace 写成市场已证实 399；把 Refresh 旧单当弱需求砸到 399 后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Batch / sync layer: verify calendar Replace vs Mass Update on existing res · Override Restrictions checked? · Refresh/Update hit Fixed/hand nights? · channel job partial? · Non-deduct view vs physical remaining?
If misread layer: fix ops discipline (P66/P65/P64/P60)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住批量改价·Refresh SOP；默认批量条数；Daily Rates 最大天数；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台 Mass Update/Refresh 当改尺
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；批量条数/Replace/Refresh 不当 dump 燃料）；单笔 Fixed → C06-18/P66+P65；RMS 建议卖价 → P66；旧价回写 → P65；关低开高 → P64；渠道推送 → P60；早会 → P45
```

### 5. Why

OPERA Cloud Updating Multiple Reservation (Mass Update)：批量改 Rate Code / Rate Amount；每批约 ≤100；可勾 Override Rate Code Restrictions。→ **批量改已订 ≠ 公开 BAR rewrite**。OPERA Cloud Configuring Daily Rates Pricing Schedule：Create/Replace · Add/Subtract · Delete date-range 可 apply mass updates to rate amounts。→ **价表批量写 ≠ Pace 证据 / ≠ 必须钉 399**。OPERA Cloud Configuring Rate Codes：改 schedule/package 后 existing reservation 须 refreshed。→ **同步层 ≠ dump 令**。OPERA Cloud Updating Reservation Daily Details：**Refresh Rate** tip；Fixed 仍可钉。→ **Refresh ≠ 必须再 dump 公开尺**。Protel Air Update rates：把已改 Daily Rates 推到入住前旧单；RBD 手改 override 夜可保留。→ **Update 旧单 ≠ 公开尺永久钉死**。Property Availability Non-deduct view：Available Rooms with Non-deduct 等 View Options。→ **读法轴 ≠ BAR**。Pace Ahead + remaining 14 = 需求仍紧，不是「批量多/Replace/Refresh/Non-deduct」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把批量价表/已订同步层永久化成 399 dump；作业尺与定价尺分家。不伪造增收、不代跑 Mass Update、不发明 699。

### 7. Risk

若对象其实是单笔 Fixed/Amount Override → **C06-18 / P66+P65**（本卷不重写单笔核）。若 RMS 建议卖价 dump → **P66**。若旧价 Reinstate → **P65**。若真 Behind 且批量层已分清 → **P05/P02**（仍不把批量条数写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认批量条数 / Daily Rates 最大天数 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；写的是日历还是已订；是否勾 Override Restrictions；Refresh 是否误伤 Fixed/手改夜；渠道 job 是否只推了部分 interval；Non-deduct 是否被当成物理卖光；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump / C06-18 Fixed 单笔核 / P63 Queue 核 / P24 Sell Limit 核 / P37 DNM 核。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Mass Update/Replace/Refresh 不当改尺令。
- 确认滥跑 Mass Update / 错写 Daily Rates Replace → 作业侧收口权限与审计（P66/P65/P64）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「批量条数看着多」）。
- 真 Behind 且批量层已分清 → **P05/P02**（理由 Pace；仍不从批量写入改写 BAR；禁一夜 −15%）。
- Refresh/Update 只同步旧单后 → 按确认 Pace 再评，不是按 Refresh 开关一夜 ±15%。
- 预算月末压力 → **T20/P56**，不是 Mass Update/Refresh 改尺许可证。

### 10. Confidence

方向 Medium（能拆批量价表/已订同步 ≠ BAR + Pace Ahead + 「批量写入≠定价权」）。点字段名 / 华住 SOP / 默认批量条数 / Daily Rates 最大天数 Low（NV）。Evidence A Vendor OPERA Mass Update + Daily Rates Pricing Schedule + Rate Codes refreshed + Daily Details Refresh + Protel Update rates + Property Availability Non-deduct（§155；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Mass Update / Daily Rates Replace / Refresh·Update dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P66 + P65 主过程；+ P64/P01/P02/P05/P60/P03/P45。**T07-00 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-07 02:17 C07-02，不改正文）：§156 CASE 指针复述 §155。Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-07 04:17 R07-04，不改正文）：§157 互补源（Clock Sections Mass Update + HotelKey Bulk Update Rate + Stayntouch Rate Manager）；Diagnose 仍 **P66**+**P65**；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。
