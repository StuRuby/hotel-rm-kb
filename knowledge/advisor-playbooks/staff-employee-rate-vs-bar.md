# Playbook P80｜Staff / Employee Rate vs 公开 BAR（员工价/付费员工折扣不是公开 BAR；不要把员工价写成新尺，也不要因员工住满了砍公开）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/staff-employee-rate-vs-bar.md`  
> BACKLOG：P80 Staff / Employee Rate vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **staff-employee-rate-vs-bar**  
> 状态：**drafted**（2026-08-30 10:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-staff-rate.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/staff-employee-rate-vs-public-bar.md`（公开 BAR vs 员工价/付费员工折扣；**无默认员工折扣 % / 配额 Fact**；本店员工价 SOP NV）  
> 理论：Diagnose 走 **T-Employee** `theory/staff-employee-rate-vs-bar.md`，过程仍 **P80**。邻 **P23**（会员 vs 公开）/ **P47**（Comp/House Use $0 占用）/ **P71**（年标）/ **P79**（费/all-in）/ **P63/T-Staff**（人手产能，同词 staff 对象不同）只作交叉，不复写。**不规定 P88。** **≠ T-Staff。**  
> 理论核源：OPERA Cloud 26.2 Configuring Rate Strategies（Employee discount rate code **STAFF** + Times Sold Close）；OPERA Cloud 26.2 Rate Code Financial Details（Complimentary / House Use 勾选 = 统计跟踪 ≠ BAR Type；Negotiated = 须挂档案）；OPERA 5.6 gi_c_h（在店 Comp **或** House Use）；OPERA Cloud 26.2 Managing Profile Negotiated Rates（协议码挂档案 ≠ 公开栅格）；STR CoStar Historical Benchmarking（无关 complimentary，含员工/业主/FAM **Exclude from Rooms Sold**）  
> 交叉：P23 会员围栏 ≠ 本剧「员工价写成新公开 BAR」· P47 Comp/HU $0 占用 ≠ 付费员工折扣改尺 · P71 年标/企业协议 · P79 强制费/all-in · P63 人手产能顶（同词 staff、对象不同）· P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§87 「员工价/Staff·Employee rate 不是公开 BAR」  
> 仿真：`cases/sim-2026-staff-rate-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Rate Strategies：Employee discount rate code **STAFF** 可按 Times Sold 关码 — §82；OPERA Cloud 26.2 Rate Codes Financial Details：Complimentary / House Use 勾选跟踪统计、Negotiated 须挂档案 — §82；OPERA 5.6 gi_c_h：在店 Comp **或** House Use 由 Rate Header 勾选判定 — §82；OPERA Cloud 26.2 Profile Negotiated Rates：协议码挂档案后 LTB 才报价 — §82）；A 协会（STR CoStar Historical Benchmarking：gratis rooms provided to employees/owners/FAM **Exclude from Rooms Sold** — §15/§16/§21 升核 / §82）；A 协会词条（HSMAI Academy BAR = non-qualified, publicly available — 指针 §67）；C 协会项目页（AHLA Hotel Employee Travel Program = 资格闸员工旅居；40%+ **不进中国 Fact** — §82）  
> Last Verified：2026-08-30  
> 知识类型：Vendor Methodology + Association Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆付费员工折扣码 / 员工旅居资格闸 / $0 员工 Comp·HU vs 公开灵活 BAR、Hold 公开 BAR、拒绝把员工价写成新尺；**不操作** PMS / OTA / 员工码，不自动定价，不代改 STAFF 策略。  
> 禁止：发明华住员工价 SOP、默认员工折扣 %、配额 Fact、699；一夜 −15%；BAR→399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开」；把 14/399/799 当市场 Fact；开 P81；开停车费专剧；把 OPERA Times Sold=3 写成中国配额 Fact；把 AHLA 40%+ 写成店规；把会员当本剧主刀（误入 P23）；把 $0 Comp/HU 当本剧主刀（误入 P47）；把年标当本剧（误入 P71）；把费/all-in 当本剧（误入 P79）；把人手产能顶当本剧（误入 P63）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 08:17「不要开 P80」= theory 槽不得指定；本案例槽核实员工价 leftover（OPERA STAFF 例已开、无专剧；P23≠员工；P47≠付费员工折扣）后开。

---

## 0. 一句话

**员工价 / Staff·Employee rate（含付费员工折扣）不是公开灵活 BAR。** 先问这是 **挂在 STAFF / 员工折扣码上的资格价**（可按 Times Sold 关码），还是 **$0 员工 complimentary / House Use**（STR 历史 Sold 剔除；走 P47），还是 **要把公开灵活 BAR 改成「员工价就是市场价 / 员工住满了所以砍公开」那个地板**。OPERA Rate Strategies 把 Employee discount rate code **STAFF** 钉成 **可按售出次数关的码**，不是 BAR Type。Complimentary / House Use 勾选是 **统计跟踪**，不是把公开尺改成员工价。Negotiated 须挂档案才出现在 LTB。STR：与促销/合同无关的员工/业主/FAM 免费房 **Exclude from Rooms Sold**——那是 $0 Comp 口径，**不是**「付费员工折扣拉低了 ADR 所以砍公开 BAR」。HSMAI：BAR = **non-qualified, publicly available**；员工价是资格闸。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「员工价太低所以跟 / 员工住满了砍公开 / 员工价就是市场价」把 BAR 改写成 399。会员围栏 → **P23**。$0 Comp/HU → **P47**。年标 → **P71**。费/all-in → **P79**。人手产能顶 → **P63**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从员工价改写 BAR）。本店员工价 SOP / 华住字段 / 默认员工折扣 % / 配额 Fact = **NV，不编**。停车费仍 **MEDIUM leftover**，本剧不开。

完成定义：一张「先拆员工码/付费员工折扣 vs $0 Comp·HU vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 员工价 = 公开 BAR** | 「员工价就是我们的公开价 / 市场价」 | 用资格闸员工码当尺 | **拆员工码 vs 公开**；Hold 公开 BAR |
| **B BAR→399「员工价太低所以跟 / 员工住满了砍公开」** | 「员工价低、员工住满了，BAR 改 399」 | 把员工地板写成战略尺 | **拒绝 BAR→399** |
| **C 员工房抬 OCC / 拉低 ADR → dump BAR** | 「员工把 OCC 撑满了 / ADR 被员工折扣看脏，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看付费员工折扣 vs $0 Comp·HU vs 公开**；STR：无关员工免费 Exclude from Sold；付费员工折扣 ≠ BAR Type |
| **D 误入会员 / Comp-HU / 年标 / 费 / 产能** | 「会员也便宜 / 员工免费房 / 对齐协议 / 含费 / 人手不够」 | 对象是别的剧本 | **P23** / **P47** / **P71** / **P79** / **P63** |
| **E Rate Category/Class 或 Negotiated 码当 BAR Type** | 「STAFF 分类桶 / 协议勾选就是公开价表」 | 把码/类/档案闸当成 BAR | **码/类/Negotiated ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按员工地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是付费员工折扣码 / 员工旅居资格闸 / $0 员工 Comp·HU，还是要改公开灵活 BAR。员工价 ≠ 公开尺。本店员工价 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开」。
3. 会员围栏走 P23。$0 Comp/HU 走 P47。年标走 P71。费/all-in 走 P79。人手产能顶走 P63。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从员工价改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认员工折扣 %、无「员工必须打 X 折」、无「员工住满必须砍 BAR」、无配额 Fact**。本店员工价 SOP / 华住字段 = **NV**。OPERA Vendor Times Sold=3 **不进中国配额 Fact**。AHLA 40%+ **不进店规**。

Vendor / 协会指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Configuring Rate Strategies*（A Vendor，§82）：可按 occupancy 或 **Times Sold** 关码。例：Employee discount rate code **"STAFF"**，When Times Sold Reaches = 3 then Status = Close（不足则 Open）。**STAFF 是可关的员工折扣码，不是公开 BAR Type。** Vendor 「3 间」例 **不进中国配额 Fact**。
- OPERA Cloud 26.2 *Configuring Rate Codes · Financial Details*（A Vendor，§82）：**Complimentary** 勾选 = 跟踪免费入住统计；**House Use** 勾选 = 跟踪内部/行政入住统计；**Negotiated** 勾选 = 仅作协议价、须挂 guest/company/source/travel agent 档案。**勾选 = 统计/资格闸，不是 BAR Type。**
- OPERA 5.6 *Guests in House Complimentary (gi_c_h)*（A Vendor PMS 经典帮助，§82）：在店 Comp 报把 Complimentary **或** House Use 勾选的房价码列入。**Comp OR House Use 是报表过滤，不是公开尺。**
- OPERA Cloud 26.2 *Managing Profile Negotiated Rates*（A Vendor，§82）：Negotiated = 与客户互相同意的合同价，挂在档案上；LTB 只向已挂该码的档案报价。**档案闸 ≠ 公开灵活栅格。**
- STR CoStar *Historical Benchmarking Data Reporting Guidelines*（A 协会，§15/§16/§21 升核 / §82）：Rooms Sold 只报产生收入的客房。**Exclude**：与促销/合同无关的 complimentary（**gratis rooms provided to employees, owners and familiarization tours**）。**员工 $0 免费房不进历史 Sold**——这是 P47 口径；**付费员工折扣仍是有房价的资格码，仍 ≠ 公开 BAR。** 进不进 Sold = 上报口径 ≠ 改尺令。
- HSMAI Academy *BAR*（A 协会词条，指针 §67）：BAR = **the non-qualified, publicly available rate**。员工价要资格，**不是 BAR**。
- AHLA *Hotel Employee Travel Program*（C 协会项目页，§82）：员工旅居是资格闸、酒店可 Stop Sale / 管库存；**40%+ / 25%+ 不进中国 Fact / 不进店规**。只证明「员工价是资格产品，不是公开尺」。

本店员工价 SOP / 华住字段 / 默认员工折扣 % / 配额 Fact / 停车费专剧 = **全部 NV**。停车费仍 **MEDIUM leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「员工价 / 员工折扣 / 员工住满了」是付费员工码、还是 $0 Comp/HU、还是要改公开 BAR；②拟议是「BAR→399 / 员工价太低所以跟 / 员工住满了砍公开」还是「员工码留在资格闸、Hold 公开」；③本店 Pace / Remaining，不是「员工价听起来更低」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 员工价/付费员工折扣挂牌（缺则问，不编）
- 是否付费员工折扣码（STAFF 类）；是否 $0 员工 Comp / House Use；是否员工旅居资格闸；是否要把 BAR 改尺
- 拟议：BAR 改成员工地板 / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏所以砍
- 本店员工价 SOP / 华住字段（NV 不编）
- 用户原话：「员工价就是市场价，BAR 改成 399」「员工价太低所以跟」「员工住满了所以砍公开」「员工把 OCC 撑满了 / ADR 看脏了砍 BAR」「STAFF 码就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 付费员工折扣码 / 员工旅居 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「员工价太低所以跟 / 员工住满了砍公开」？ | 形 B；拒绝 |
| D3 | 因员工房抬 OCC / 拉低 ADR 而要 dump BAR？ | 形 C；指标读法 ≠ 改尺。先拆付费员工折扣 vs $0 Comp·HU |
| D4 | 其实是会员 / $0 Comp-HU / 年标 / 费 / 人手产能？ | → P23 / P47 / P71 / P79 / P63 |
| D5 | Rate Category/Class 或 Negotiated/STAFF 码被当成 BAR Type？ | 形 E；码/类/档案闸 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 付费员工折扣码 ≠ $0 员工 Comp/HU ≠ 员工旅居资格闸。员工成交关在码/档案闸，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 OCC 因员工房显得「满」、ADR 因员工折扣显得「脏」，分看付费员工折扣 vs $0 Comp·HU（STR 历史 Sold 不含无关员工免费）vs 公开；**不要为清洗 OCC/ADR 砍公开 BAR**。读法 ≠ 改尺。
4. **误入移交**：会员 → P23；$0 Comp/HU → P47；年标 → P71；费/all-in → P79；人手产能顶 → P63；真弱 → P05。
5. **早会一个动作**（P45）：纠正「员工价≠BAR」+ Hold 公开 BAR（或问清是付费员工码还是 $0 Comp/HU）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认员工折扣 % / 配额；无 Pace 就因「员工价低」改尺；把 OPERA 3 间 / AHLA 40% 写成店规。

## 4. Why

- Vendor：STAFF 钉在 **可按 Times Sold 关的员工折扣码**；设计上不是公开 BAR Type。Comp/HU 勾选钉在 **统计跟踪**。Negotiated 钉在 **档案闸**。
- 协会：BAR 是 non-qualified 公开尺；员工价要资格。STR 把无关员工免费房从历史 Sold 剔除——这证明员工 $0 不是公开需求尺，也不是「员工住满了所以砍公开」的许可证。付费员工折扣仍有房价，仍不是 BAR。
- 指标：员工房可抬 OCC、付费员工折扣可拉低混 ADR——顾问应读清桶，而不是把「OCC 满了 / ADR 脏了」当成砍尺令。
- Advisor：用户说「员工价就是市场价」时，先问 Pace 与这是不是资格码。低的常是 **员工闸**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；员工成交关在资格码，不污染公开尺。
- Risk：误把真弱夜当「员工投诉所以 Hold」；或反过来把员工地板当成必须跟的市场价；误把 $0 Comp 当付费员工折扣（应变 P47）；误把会员当员工（应变 P23）；误为清洗 OCC/ADR 砍 BAR。
- Watch：公开 BAR 是否仍 Hold；STAFF/员工码是否仍关在资格闸（可按 Times Sold 关）；24h 公开 Pickup vs 员工码预订（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从员工价改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆员工码/公开，或至少能标 NV 仍 Hold）。点员工折扣%/配额 Low（NV）。Evidence A Vendor PMS + A 协会（STR Comp Exclude + HSMAI BAR 定义）。

## 7. Simulation 指针

见 `cases/sim-2026-staff-rate-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 10:17 CST | 首版。P80。员工价/Staff·Employee rate≠公开 BAR；Ahead Hold；拒改尺。08:17 不规定 → 本案例核实 leftover 后开。未开 P81。停车费仍 MEDIUM leftover。 |
| 2026-09-01 08:17 CST | 理论指针：Diagnose 走 **T-Employee** `theory/staff-employee-rate-vs-bar.md`，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。未开 P88。≠ T-Staff。 |

> 交叉指针（2026-08-30 12:17，不改正文）：§83 Protel Air Advanced pricing **House use**（员工内部过夜类型 ≠ Rack/Normal）+ Marriott Explore 资格闸。$0 HU 过程仍 **P47**。不写 P81。停车费仍 leftover。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。
