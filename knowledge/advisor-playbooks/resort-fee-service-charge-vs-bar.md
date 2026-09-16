# Playbook P79｜Resort Fee / Destination·Urban Fee / Mandatory Service Charge / All-in Total vs 公开 BAR（强制费/服务费/含税总价不是公开 BAR；不要把客人看到的 all-in 写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/resort-fee-service-charge-vs-bar.md`  
> BACKLOG：P79 Resort Fee / Destination·Urban Fee / Mandatory Service Charge / All-in vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **resort-fee-service-charge-vs-bar**  
> 状态：**drafted**（2026-08-30 06:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-resort-fee.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/resort-fee-vs-public-bar.md`（公开 BAR vs all-in/费层；**无默认费 % / 税率 Fact**；本店费表 NV）  
> 理论：`theory/resort-fee-vs-bar.md`（**T-Fee**，2026-08-30 08:17）；`theory/tax-display-city-tax-vs-bar.md`（**T-Tax**，2026-09-02 08:17）；Diagnose 走 T-Fee（强制费/all-in）或 **T-Tax**（含税展示/CITY_TAX），过程仍本剧。邻 **P36**（竞对比价税/费）/ **P69**（含早）/ **P78**（加床）/ **P74**（券后）/ **P75**（BRG 不含税费）只作交叉，不复写。**不规定 P88。T-Tax ≠ T-Fee。**  
> 理论核源：STR CoStar P&L Data Reporting Guidelines（Resort/Destination/Urban Fees → Misc，永不进 Rooms）；STR CoStar Historical Benchmarking Data Reporting Guidelines（principal 强制服务费可进 Rooms；Resort Fees Exclude；税/政府附加/小费/代理模式 Exclude）；OPERA Cloud 26.2 Package Codes（Included / Separate Line / Combined Line）；OPERA Controls SHOW ADD SEPARATE LINE PACKAGES TO RATES IN THE LTB（显示加总 ≠ BAR Type）  
> 交叉：P36 竞对比价税/费口径 ≠ 本剧「本店 all-in 写成新公开 BAR」· P69 含早套餐 · P78 Extra Person/加床 · P74 券后 · P75 BRG 比价不含税费 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§86 「Resort Fee/强制服务费/含税总价不是公开 BAR」  
> 仿真：`cases/sim-2026-resort-fee-allin-sat.md`（**Simulation** · 费核/all-in）· `cases/sim-2026-tax-display-city-tax-sat.md`（**Simulation** · T-Tax 税展示/CITY_TAX；C02-10）  
> 证据等级：A 协会（STR CoStar P&L：Resort/Destination/Urban Fees 必须 Misc、永不 Rooms；Service Charges 仅未分员工才进收入 — §80；STR CoStar Historical Benchmarking：principal 强制服务费 Include in Rooms，Resort Fees Exclude → Misc Schedule 4，税/政府附加/小费/agent-mode Exclude — §79 指针升核 / §80）；A Vendor PMS（OPERA Cloud 26.2 Package Codes：Separate Line 另过独立 folio ≠ BAR Type；Combined Line 只加展示房价仍是套餐属性；City Tax 是套餐公式不是 BAR；Vendor $540 蜜月例不进 Fact — §80）；A Vendor（OPERA Controls Rate Management：INCL_PRINT_SEP_PKGS_IN_RATE_QUERY 显示加总 ≠ 定价权 — §80）  
> Last Verified：2026-09-02（T-Tax 指针；三句/399/799 未改）  
> 知识类型：Vendor Methodology + Association Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆房价 / Resort·Destination·Urban Fee / 强制服务费（是否分员工） / 税 / OTA all-in 展示 vs 公开灵活 BAR、Hold 公开 BAR、拒绝把含费总价写成新尺；**不操作** PMS / OTA / 费率表，不自动定价，不代改费表。  
> 禁止：发明华住费表 SOP、默认 Resort Fee %、服务费 %、税率 Fact、699；一夜 −15%；BAR→399「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」；把 14/399/799 当市场 Fact；开 P80；把竞对比价税/费当本剧主刀（误入 P36）；把含早当本剧（误入 P69）；把加床当本剧（误入 P78）；把券后当本剧（误入 P74）；把 BRG 索赔当本剧（误入 P75）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 04:17「不要规定 P79」= recap 槽不得指定；本 scout 核实 HIGH 缺口（先前 MEDIUM 停靠 P36 C5 错范围；filename 无专剧）后开。

---

## 0. 一句话

**强制费 / 服务费 / 含税总价 / Resort Fee 不是公开灵活 BAR。** 先问这是 **房价**，还是 **Resort·Destination·Urban Fee**，还是 **强制服务费（是否分给员工）**，还是 **税**，还是 **OTA all-in 展示**，还是 **要把公开灵活 BAR 改成客人看到的总价那个地板**。STR：Resort/Destination/Urban Fee **永远进 Misc，永不进 Rooms**；店作 principal 的强制服务费**可以**进 Rooms Revenue（上报口径），**仍然不是改写 BAR Type**；税/政府附加/小费/代理模式服务费 **排除**。OPERA Separate Line 是房价外另过一笔；Combined Line 只改 folio 展示房价；LTB 勾上 Separate Line **显示加总**——都不是新公开 BAR。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」把 BAR 改写成 399。竞对比价税/费 → **P36**。含早套餐 → **P69**。加床 → **P78**。券后 → **P74**。BRG 比价不含税费 → **P75**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从费项改写 BAR）。本店费表 / 华住字段 / 默认费 % = **NV，不编**。

完成定义：一张「先拆房价 vs 费/税 vs all-in 展示 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A all-in / 含费总价 = 公开 BAR** | 「客人看到的总价就是我们的公开价」 | 用 all-in 当尺 | **拆房价 vs 费/税 vs 展示**；Hold 公开 BAR |
| **B BAR→399「OTA 总价贵 / 服务费吓跑 / 含税太贵」** | 「总价吓跑客人，BAR 改 399」 | 把费项地板写成战略尺 | **拒绝 BAR→399** |
| **C 费项进收入桶 → ADR 看起来怪 → dump BAR** | 「ADR 被 Resort Fee/服务费看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看房价 vs Misc vs 可进 Rooms 的 principal 服务费 vs 税**；不改写 BAR |
| **D 误入竞对比价 / 含早 / 加床 / 券后 / BRG** | 「隔壁含税更贵 / 含早+费 / 加床+费 / 券后总价 / 贵就赔含费」 | 对象是别的剧本 | **P36** / **P69** / **P78** / **P74** / **P75** |
| **E Separate/Combined Line / LTB 含 Separate Line 显示当 BAR Type** | 「folio/LTB 加总就是公开价表」 | 把过账/显示当成 BAR | **套餐属性 / 显示闸 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按 all-in 地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是房价 / Resort·Destination·Urban Fee / 强制服务费（是否分员工） / 税 / OTA all-in 展示，还是要改公开灵活 BAR。费项 ≠ 公开尺。本店费表 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」。
3. 竞对比价税/费口径走 P36。含早套餐走 P69。加床走 P78。券后走 P74。BRG 比价不含税费走 P75。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从费项改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认 Resort Fee %、无默认服务费 %、无「含税太贵必须砍 BAR」、无税率 Fact**。本店费表 / 华住字段 = **NV**。

Vendor / 协会指针（不写成华住 SOP）：

- STR CoStar *P&L Data Reporting Guidelines*（A 协会，§80）：Rooms Revenue Exclude：**Resort/Destination/Urban Fees** 必须永远 Miscellaneous Income，**永不** Rooms Revenue。Misc Include：Resort Fees、Cancellation Fees。Service Charges：Only include in revenue if **not distributed to staff**。
- STR CoStar *Historical Benchmarking Data Reporting Guidelines*（A 协会，§79 指针 / §80 升核）：Include in Rooms：**Surcharges and service charges (property acting as principal)** — mandatory, non-discretionary, not passed to 3rd party。Exclude：**Resort Fees** → Misc Schedule 4，NOT Rooms/Other Rooms。Exclude：Taxes and Government mandated surcharges；Gratuities；agent-mode。**Resort/Destination/Urban fee ≠ principal 强制服务费 ≠ 税。** 进不进 Rooms = 上报口径 ≠ 改尺令。
- OPERA Cloud 26.2 *Package Codes*（A Vendor，§80）：Included in Rate / **Add To Rate - Separate Line** / Add To Rate - Combined Line。Separate Line = 房价外另过、独立 folio ≠ BAR Type。Combined Line 增加 folio **展示**房价——仍是套餐属性。City Tax = 套餐公式，不是 BAR。Vendor $540 蜜月例 **不进中国 Fact**。
- OPERA Controls *Rate Management*（A Vendor，§80）：`SHOW ADD SEPARATE LINE PACKAGES TO RATES IN THE LTB` [INCL_PRINT_SEP_PKGS_IN_RATE_QUERY] = LTB **显示**含 Separate Line 包。**显示加总 ≠ BAR Type / 定价权。** PACKAGES SOLD SEPARATELY；PACKAGE ATTRIBUTES FOR EXTERNAL RATES 同理。

本店费表 / 华住字段 / 默认 Resort Fee % / 服务费 % / 税率 Fact = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「总价贵 / 服务费 / 含税 / all-in / Resort Fee」是费项、税、展示加总，还是要改公开 BAR；②拟议是「BAR→399 / 含税太贵所以跟」还是「费留在费表、Hold 公开」；③本店 Pace / Remaining，不是「总价听起来更贵」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 客人看到的 all-in / 含税总价 / OTA 总价（缺则问，不编）
- 是否 Resort / Destination / Urban Fee；是否强制服务费（是否分员工）；是否税 / 政府附加；是否 OTA 展示加总
- 拟议：BAR 改成 all-in 地板 / 服务费吓跑所以跟 / 含税太贵所以砍 / ADR 被费项看脏所以砍公开价
- 本店费表 / 华住字段（NV 不编）
- 用户原话：「OTA 总价贵，BAR 改成 399」「服务费吓跑客人砍公开价」「含税太贵所以跟地板」「ADR 被 Resort Fee 看脏了砍 BAR」「客人看到的 all-in 才是我们的公开价」「Separate Line 加到 LTB 就是新 BAR」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 房价 vs Resort·Destination·Urban Fee vs 强制服务费 vs 税 vs OTA all-in vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「总价贵 / 服务费吓跑 / 含税太贵」？ | 形 B；拒绝 |
| D3 | 因费项进收入桶导致 ADR 看起来怪而要 dump BAR？ | 形 C；指标读法 ≠ 改尺 |
| D4 | 其实是竞对比价税/费 / 含早 / 加床 / 券后 / BRG？ | → P36 / P69 / P78 / P74 / P75 |
| D5 | Separate/Combined Line 或 LTB 显示加总被当成 BAR Type？ | 形 E；过账/显示 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ Resort/Destination/Urban Fee ≠ 强制服务费 ≠ 税 ≠ OTA all-in 展示。费留在费表/套餐过账，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因 Resort Fee（应进 Misc）或 principal 服务费（可进 Rooms）显得「偏高」或「怪」，分看房价收入 vs Misc vs 服务费 vs 税；**不要为清洗 ADR 砍公开 BAR**。读法 ≠ 改尺。
4. **误入移交**：竞对比价税/费 → P36；含早套餐 → P69；加床 → P78；券后 → P74；BRG 不含税费 → P75；真弱 → P05。
5. **早会一个动作**（P45）：纠正「费项/all-in≠BAR」+ Hold 公开 BAR（或问清是哪一项费/税/展示层）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认费 % / 税率；无 Pace 就因「总价贵」改尺。

## 4. Why

- 协会：Resort/Destination/Urban Fee 钉在 **Misc，永不进 Rooms**；principal 强制服务费可进 Rooms 是 **STR 上报一致性**，不是把公开 BAR 改成含费总价。税和小费不是房价。
- Vendor：Separate Line / Combined Line / LTB 显示闸钉在 **过账与展示**；设计上不是 BAR Type。
- 指标：费项可抬高、压低或「看脏」ADR——顾问应读清桶，而不是把「ADR 怪了」当成砍尺令。
- Advisor：用户说「总价贵 / 服务费吓跑」时，先问 Pace 与这是不是费/税/展示。贵的常是 **all-in 层**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；费项成交关在费表/过账，不污染公开尺。
- Risk：误把真弱夜当「总价投诉所以 Hold」；或反过来把 all-in 地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P36 竞对比价当本店改尺。
- Watch：公开 BAR 是否仍 Hold；费表/套餐过账是否仍挂在费项；24h 公开 Pickup vs 含费 all-in 展示（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从费项改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆房价/费/税/all-in，或至少能标 NV 仍 Hold）。点费%/税率 Low（NV）。Evidence A 协会 + A Vendor PMS。

## 7. Simulation 指针

见 `cases/sim-2026-resort-fee-allin-sat.md`（费核/all-in）与 `cases/sim-2026-tax-display-city-tax-sat.md`（T-Tax 税展示/CITY_TAX；C02-10）。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。三句 / 399 / 799 **不改**。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 06:17 CST | 首版。P79。Resort Fee/强制服务费/含税总价/all-in≠公开 BAR；Ahead Hold；拒改尺。04:17 不规定 → 本 scout 核实 HIGH 缺口后开。未开 P80。 |

> 交叉指针（2026-08-30 10:17，不改正文）：费项/all-in 仍本剧；员工价/付费员工折扣改尺 → **P80** `staff-employee-rate-vs-bar.md` · `dont-rewrite-bar-for-staff-rate.md`。交叉 P80 staff-rate ≠ resort-fee。不写 P81。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。

> 交叉指针（2026-09-01 08:17，不改正文）：费/all-in 仍本剧。付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**。不规定 P88。
> 交叉指针（2026-09-01 16:17，不改正文）：费/all-in 仍本卡/本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ T-Fee。不规定 P88。

> 交叉指针（2026-09-02 06:17，不改正文）：费/all-in/含税总价仍本剧。§111 Cloudbeds Inclusive/Exclusive + OPERA City Tax Package / Tax Inclusive = 展示·过账对齐 ≠ 改尺。不规定 P88。
> 交叉指针（2026-09-02 08:17，不改正文）：税展示/城市税 Diagnose 走 **T-Tax** `theory/tax-display-city-tax-vs-bar.md`，过程仍本剧；强制费/all-in 仍 **T-Fee**。三句 / 399-rejected / 799-Hypothesis **不改**。≠ T-Package / ≠ T-Extra。不规定 P88。
> 交叉指针（2026-09-02 10:17，不改正文）：税展示/城市税专卷 Simulation → `cases/sim-2026-tax-display-city-tax-sat.md`；Diagnose 走 **T-Tax**，过程仍本剧；sibling all-in 仍 `cases/sim-2026-resort-fee-allin-sat.md`。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 指针（2026-09-02 12:17 R02-12，不改正文三句/399/799）：§114 protel City Taxes + Clock City Tax Mode 加强税展示/城市税层；Diagnose 税走 **T-Tax**，过程仍本剧。不开 P88。
