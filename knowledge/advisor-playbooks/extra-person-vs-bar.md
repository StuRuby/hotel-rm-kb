# Playbook P78｜Extra Person / 加床 / Extra Adult·Child / Occupant Threshold vs 公开 BAR（加床加项不是公开 BAR；不要把三人价/加床拉高的均价写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/extra-person-vs-bar.md`  
> BACKLOG：P78 Extra Person / Extra Adult·Child / Occupant Threshold vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **extra-person-vs-bar**  
> 状态：**drafted**（2026-08-30 02:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-extra-person.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/extra-person-vs-public-bar.md`（公开 BAR vs 加床/第三人加项；**无默认 Extra Person % / 儿童费 Fact**；本店加床 SOP NV）  
> 理论：Diagnose 走 **T-Extra** `theory/extra-person-vs-bar.md`，过程仍本剧。邻 **T-Package**（含早/套餐）/ **P76**（连住均价）/ **T-Fee**（强制费）只作交叉，不复写。  
> 理论核源：OPERA Cloud 26.2 Configuring Daily Rates Pricing Schedule（Extra Adult / Extra Child **加到该笔预订**）；OPERA Cloud 26.2 About Occupant Threshold Pricing（超阈值加固定额）；OPERA Controls BASE RATE EXTRA PERSON / OCCUPANT THRESHOLD PRICING METHOD（加项开关 ≠ BAR Type）  
> 交叉：P69 含早/套餐 ≠ 本剧「加床/第三人加项写成新公开 BAR」· P76 连住促销均价 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作 · P40 拒 Sat-only  
> 问题树：§85 「加床/Extra Person/Occupant Threshold 不是公开 BAR」  
> 仿真：`cases/sim-2026-extra-person-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Daily Rates Pricing Schedule：Extra Adult / Extra Child 是加到该笔预订的加项 — §76/§78；OPERA Cloud 26.2 About Occupant Threshold Pricing：超成人/儿童/总人数阈值加固定额；Vendor $ 例不进 Fact — §76/§78；OPERA Controls Rate Management：BASE_CALC_EXTRA_PERSON / OCCUPANT_THRESHOLD_PRICING_METHOD — §76/§78）；C 实践（HFP Net USALI P&L 实务指南：Other Rooms Revenue 含 rollaway beds / cribs 等会进 Total Rooms Revenue 从而影响 ADR — 指标读法，不是改尺许可证；非官方 USALI 原文摘录 — §78）  
> Last Verified：2026-08-30  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆 Extra Person / Extra Adult·Child / Occupant Threshold / 加床加项 vs 公开灵活 BAR、Hold 公开 BAR、拒绝把三人价/加床拉高的均价写成新尺；**不操作** PMS / OTA / 费率表，不自动定价，不代改 Extra Adult 表。  
> 禁止：发明华住儿童/加床 SOP、默认 Extra Person %、儿童费 Fact、699；一夜 −15%；BAR→399「加床太贵所以跟地板 / 三人住太贵」；把 14/399/799 当市场 Fact；开 P79；把含早套餐当本剧主刀（误入 P69）；把连住均价当本剧（误入 P76）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 00:17「不要规定 P78」= theory 槽不得指定；本案例槽核实 Extra Person leftover（OPERA Extra Adult/Child + Occupant Threshold 已开、无专剧）后开。

---

## 0. 一句话

**Extra Person / 加床 / Extra Adult·Child / Occupant Threshold 加项不是公开灵活 BAR。** 先问这是 **挂在价码/日价表上、加到该笔预订的加项**（第三人 Extra Adult、Extra Child、超人数阈值固定额、加床/加婴儿床），还是 **要把公开灵活 BAR 改成「三人住看起来太贵」那个地板**。OPERA 的 Daily Rates Pricing Schedule 把 Extra Adult / Extra Child 钉成 **加到该笔预订的加项**；Occupant Threshold 超成人/儿童/总人数阈值再加固定额——**不是把 BAR Type 改写成三人价**。BASE RATE EXTRA PERSON / OCCUPANT THRESHOLD 是 Controls 开关，不是定价权。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「三人住太贵 / 加床拉高了均价 / 儿童加床污染 ADR」把 BAR 改写成 399。含早套餐 → **P69**。连住促销均价 → **P76**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从加项改写 BAR）。本店加床/儿童 SOP / 华住字段 / 默认加项 % = **NV，不编**。

完成定义：一张「先拆加床加项 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 加项 = 公开 BAR** | 「三人价就是我们的公开价」 | 用 Extra Adult / 加床当尺 | **拆加项 vs 公开**；Hold 公开 BAR |
| **B BAR→399「加床/三人太贵」** | 「客人嫌三人贵，BAR 改 399」 | 把加项地板写成战略尺 | **拒绝 BAR→399** |
| **C 加项进房收 → ADR/OCC 看起来怪 → dump BAR** | 「ADR 被加床污染了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看房价 vs 加项**；不改写 BAR |
| **D 误入套餐/连住均价/真弱** | 「含早+加床 / 连住三人 / 反正空」 | 对象是别的剧本 | **P69** / **P76** / **P05** |
| **E Occupant Threshold / Extra Adult 表当 BAR Type** | 「人数阈值表就是公开价表」 | 把加项日程当成 BAR | **阈值/加项 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按三人地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是 Extra Person / Extra Adult·Child / Occupant Threshold / 加床加项（加到该笔预订），还是公开灵活 BAR。加床加项 ≠ 公开尺。本店加床/儿童 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「三人住太贵 / 加床拉高均价 / 儿童加床污染 ADR」。
3. 含早套餐走 P69。连住促销均价走 P76。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从加项改写公开 BAR）。早会一个动作走 P45。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认 Extra Person %、无「第三人必须打 X 折」、无「加床污染 ADR 必须砍 BAR」、无默认儿童费 Fact**。本店加床/儿童 SOP / 华住字段 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Configuring Daily Rates Pricing Schedule*（A Vendor，§76/§78）：价码日价表可填 **1 Adult / 2 Adults**，另填 **Extra Adult**（超过两成人时加到该笔预订）、**Extra Child**（有成人陪同的儿童加项）。Occupant Threshold 开时还可配 Adults/Children/Occupants Threshold + Amount。**加项加到预订，不是 BAR Type。** Vendor 金额例 **不进中国 Fact**。
- OPERA Cloud 26.2 *About Occupant Threshold Pricing*（A Vendor，§76/§78）：超成人/儿童/总人数阈值后，按定义 **加固定额**（可组合）。文中 SPECIAL 价码 $ 例 **不进中国 Fact**。Base Rate Extra Person Calculation 开时，阈值额对 Base Rates 另有规则——**仍是加项计算，不是改公开尺。**
- OPERA Controls *Rate Management*（A Vendor，§76/§78）：`BASE RATE EXTRA PERSON CALCULATION`、`OCCUPANT THRESHOLD PRICING METHOD`、`CHILD RATES BY DEFINED BUCKETS` 是功能开关。**开关 ≠ BAR Type；儿童年龄桶 ≠ 公开灵活尺。**
- HFP Net *USALI P&L structure* 实务指南（C 实践，§78）：Other Rooms Revenue 常含 **rollaway beds / cribs** 等，计入 Total Rooms Revenue 从而影响 ADR——**是指标读法提醒：加床类收入可抬高/扭曲 ADR，不是「ADR 怪了所以砍公开 BAR」的许可证。** 非官方 USALI 原文；不摘教材。

本店加床/儿童 SOP / 华住字段 / 默认 Extra Person % / 儿童费 Fact / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「三人价 / 加床太贵 / Extra Person」是加项还是要改公开 BAR；②拟议是「BAR→399 / 加床拉高均价所以跟」还是「加项留在该笔预订、Hold 公开」；③本店 Pace / Remaining，不是「三人听起来更贵」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 客人看到的「三人总价 / 加床后总价」（缺则问，不编）
- 是否 Extra Adult / Extra Child / Occupant Threshold / 加床/加婴儿床加项；是价码日程还是要把 BAR 改尺
- 拟议：BAR 改成三人地板 / 加床太贵所以跟 / 儿童加床污染 ADR 所以砍公开价
- 本店加床/儿童 SOP / 华住字段（NV 不编）
- 用户原话：「三人住太贵，BAR 改成 399」「加床拉高了均价所以公开价也得降」「儿童加床把 ADR 搞脏了砍 BAR」「人数阈值表就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | Extra Person/加床加项 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「三人/加床太贵」？ | 形 B；拒绝 |
| D3 | 因加项进房收导致 ADR/OCC 看起来怪而要 dump BAR？ | 形 C；指标读法 ≠ 改尺 |
| D4 | 其实是含早套餐 / 连住促销均价？ | → P69 / P76 |
| D5 | Occupant Threshold / Extra Adult 日程被当成 BAR Type？ | 形 E；加项 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ Extra Adult / Extra Child / Occupant Threshold / 加床加项。加项留在该笔预订/价码日程，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因加床/第三人加项显得「偏高」或「怪」，分看房价收入 vs 加项收入；**不要为清洗 ADR 砍公开 BAR**。
4. **误入移交**：含早套餐 → P69；连住促销均价 → P76；真弱 → P05；拒 Sat-only 形态 → P40（仍不改写 BAR）。
5. **早会一个动作**（P45）：纠正「加床加项≠BAR」+ Hold 公开 BAR（或问清是哪一个 Extra Adult / Threshold 表）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认 Extra Person % / 儿童费；无 Pace 就因「三人太贵」改尺。

## 4. Why

- Vendor：Extra Adult/Child / Occupant Threshold 钉在 **价码日价表加项 / 超阈值固定额**；设计上加到该笔预订，不是把公开 BAR 改成三人价。
- Controls：BASE_CALC_EXTRA_PERSON / OCCUPANT_THRESHOLD 是功能开关，不是 BAR Type。
- 指标（C）：加床/rollaway 类收入可进 Rooms Revenue 影响 ADR——顾问应读清指标，而不是把「ADR 怪了」当成砍尺令。
- Advisor：用户说「三人住太贵」时，先问 Pace 与这是不是加项。贵的常是 **该笔加项**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；加项成交关在该笔预订，不污染公开尺。
- Risk：误把真弱夜当「三人投诉所以 Hold」；或反过来把加项地板当成必须跟的市场价；误为清洗 ADR 砍 BAR。
- Watch：公开 BAR 是否仍 Hold；加项是否仍挂在价码/阈值表；24h 公开 Pickup vs 含 Extra Person 的预订（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从加项改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆加项/公开，或至少能标 NV 仍 Hold）。点 Extra Person%/儿童费 Low（NV）。Evidence A Vendor PMS + C 实践（指标读法）。

## 7. Simulation 指针

见 `cases/sim-2026-extra-person-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 02:17 CST | 首版。P78。Extra Person/加床/Occupant Threshold≠公开 BAR；Ahead Hold；拒改尺。00:17 不规定 → 本案例核实 leftover 后开。未开 P79。 |
| 2026-09-01 16:17 CST | 头一行理论指针：Diagnose 走 **T-Extra** `theory/extra-person-vs-bar.md`，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P88。 |

> 交叉指针（2026-08-30 06:17，不改正文）：加床/Extra Person 仍本剧；Resort Fee/强制服务费/含税总价改尺 → **P79** `resort-fee-service-charge-vs-bar.md` · `dont-rewrite-bar-for-resort-fee.md`。交叉 P79 resort-fee/all-in ≠ Extra Person。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-30 10:17，不改正文）：加床加项仍本剧；员工价/付费员工折扣改尺 → **P80** `staff-employee-rate-vs-bar.md` · `dont-rewrite-bar-for-staff-rate.md`。交叉 P80 staff-rate ≠ Extra Person。不写 P81。
> 交叉指针（2026-09-01 16:17，不改正文）：Diagnose 走 **T-Extra** `theory/extra-person-vs-bar.md`，过程仍 **P78**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-02 04:17，不改正文）：§110 HotelKey Group Master By Occupancy / Extra Person Charge + protel Air Advanced pricing occupancy/age/cot **加到房价** = 人数加项过程，不是公开 BAR rewrite。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。
