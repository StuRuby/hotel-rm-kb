# Playbook P87｜Service Recovery / Folio Adjustment vs 公开 BAR（本住服务补偿/账单 adjustment/rebate 不是公开灵活 BAR；不要因为「客人投诉补了差价 / 服务失败今晚全部 dump / 补偿券 399 所以公开也 399 / ADR 被减免看脏所以砍 BAR」而改写公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/service-recovery-adjustment-vs-bar.md`  
> BACKLOG：P87 Service Recovery / Folio Adjustment vs Public BAR · **HIGH** · 先诊断枝（本轮同开）· slug **service-recovery-adjustment-vs-bar**  
> 状态：**drafted**（2026-08-31 18:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-service-recovery.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/service-recovery-vs-public-bar.md`（公开 BAR vs 本住 Service Recovery adjustment / rebate；**无默认补偿 % Fact**；本店补偿 SOP NV）  
> 理论：`theory/service-recovery-adjustment-vs-bar.md`（**T-Service-Recovery**，2026-09-01 00:17）。Diagnose 走 **T-Service-Recovery**，过程仍本剧。邻 **P39**（点评/口碑 SIGNAL，不要为 4.8→4.3 砍 BAR）/ **P75**（BRG like-for-like 已订直销索赔）/ **P47**（计划 Comp / House Use）/ **P84**（取消/attrition FEE 过账）/ **P83**（储值付款）/ **P86**（押金/预授权 hold）只作交叉，不复写。**不规定 P88。**  
> 理论核源：Oracle OPERA Cloud 26.2 *Charges Adjustment and Payments*（Post Adjustments；**Posting Service Recovery Adjustment Charges** — 本小时新开）；Oracle OPERA Cloud 26.2 *About Billing*（adjust by amount/%；Allow Negative Postings = rebate — 本小时新开）；Oracle OPERA Cloud 26.2 *Configuring Adjustment Reason Codes*（Code Type **Service Recovery** = dissatisfied guest resolution — 本小时新开）；Cloudbeds *Add or adjust reservation charges*（adjustment 是 folio/invoice 交易类型 ≠ 改公开尺 — 本小时新开；curl 200）；CoStar STR *Historical Benchmarking Data Reporting Guidelines*（Rooms Revenue net of rebates/refunds/allowances — §15/§96 升核，不当新发现页）；HSMAI Academy BAR glossary（BAR = non-qualified publicly available — §67 指针）  
> 交叉：P39 评分 SIGNAL ≠ 本剧本住补偿过账 · P75 BRG 已订直销索赔 ≠ 服务失败改尺 · P47 计划 Comp/HU ≠ 本住 rebate · P84 取消 FEE ≠ 服务补偿 · P83 储值付款 ≠ 账单减免 · P86 押金/预授权 ≠ 服务补偿 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§94 「服务补偿/账单 adjustment 不是公开 BAR」  
> 仿真：`cases/sim-2026-service-recovery-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Charges Adjustment and Payments / About Billing / Configuring Adjustment Reason Codes — §98 新开；Cloudbeds Add or adjust reservation charges — §98 新开）；S 协会报送（STR Historical net of rebates/allowances — §15/§96 升核）；A 协会指针（HSMAI BAR glossary — §67）  
> Last Verified：2026-08-31  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆本住 folio Service Recovery / posting adjustment / rebate vs 公开灵活 BAR、Hold 公开 BAR、拒绝把补偿地板写成新尺；**不操作** PMS / OTA / 账单调整 / 补偿过账，不自动定价，不代发补偿券、不代贴 adjustment。  
> 禁止：发明华住补偿 SOP、默认补偿 %、佣金%、699、Walk $；一夜 −15%；BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏所以砍」；把 14/399/799 当市场 Fact；把 OPERA Vendor $ breakfast 10.00 / 63.60 例写成中国 BAR 或 Simulation 市场 Fact；开 P88；把点评 SIGNAL 当本剧主刀（误入 P39）；把 BRG 已订直销索赔当本剧（误入 P75）；把计划 Comp 当本剧（误入 P47）；把取消 FEE 当本剧（误入 P84）；把储值当本剧（误入 P83）；把押金/预授权当本剧（误入 P86）；把真弱 leftover 当本剧主刀却漏移交（应 P05）；开 Pet/AAA / smoking-damage FEE / damage-security deposit。  
> 16:17「不要规定 P87」= theory 槽不得指定；本案例槽核实 HIGH 缺口（filename 无 service-recovery/allowance-adjust/compensat 专剧；邻 P39/P75/P47/P84/P83/P86 ≠ 本住 folio Service Recovery 改尺；每周 GM dump 戏剧；本小时新开 A 级 OPERA 三页 + Cloudbeds）后开。服务补偿 **不再 leftover**。优先级 **HIGH**（OPERA 专用 Service Recovery Adjustment 路径 + 每周 GM dump；不薄于 P39）。

---

## 0. 一句话

**服务补偿 / folio Service Recovery adjustment / rebate 不是公开灵活 BAR。** 先问这是 **本住账单 Service Recovery / posting adjustment / rebate**（OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge），还是 **要把公开灵活 BAR 改成「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」那个尺**。服务补偿 ≠ 公开尺。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「客人投诉补了差价 / 服务失败今晚全部 dump / 补偿券 399 所以公开也 399 / ADR 被减免看脏所以砍」把 BAR 改写成 399。点评 SIGNAL 走 **P39**。BRG like-for-like 已订直销索赔走 **P75**。计划 Comp 走 **P47**。取消 FEE 过账走 **P84**。储值付款走 **P83**。押金/预授权走 **P86**。真弱走 **P05**（可有窗围栏，仍禁一夜 −15%，仍不从补偿地板改写 BAR）。本店补偿 SOP / 默认补偿 % / 华住字段 = **NV，不编**。

完成定义：一张「先拆本住 Service Recovery / folio adjustment / rebate vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 服务补偿 = 公开 BAR** | 「客人投诉补了差价，BAR 改成那个价」 | 用本住 posting 当尺 | **拆 posting vs 公开尺**；Hold |
| **B BAR→399「服务失败所以砍 / 补偿了所以新尺 / 补偿券才是市场价」** | 「服务失败今晚全部 dump / 补偿券 399 公开也 399」 | 把补偿地板写成战略尺 | **拒绝 BAR→399** |
| **C ADR 被减免/allowance 看脏 → dump BAR** | 「ADR 被减免看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **STR net-of-allowance 是 READ，不是 rewrite** |
| **D 误入 P39 评分 / P75 BRG / P47 Comp / P84 取消 FEE / P83 储值 / P86 押金 / P05 真 leftover** | 「4.8→4.3 / 贵就赔 / 计划 Comp / 取消费 / 储值 / 押金 / 反正空」 | 对象是别的剧本 | **移交** |
| **E OPERA Post Service Recovery Adjustment / Adjustment Reason Codes / Cloudbeds Adjust Charge 屏当 BAR Type** | 「Service Recovery Adjustment / Adjust Charge 就是公开价表」 | 把配置/过账当成 BAR | **配置/过账 ≠ 定价权**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按补偿地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从补偿地板改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是本住 folio Service Recovery / posting adjustment / rebate（OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge），还是要改公开灵活 BAR。服务补偿 ≠ 公开尺。本店补偿 SOP / 默认补偿 % = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」。
3. 点评 SIGNAL 走 P39。BRG like-for-like 已订直销索赔走 P75。计划 Comp 走 P47。取消 FEE 过账走 P84。押金/预授权走 P86。真弱走 P05（可有窗围栏，仍禁一夜 −15%，仍不从补偿地板改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认补偿 %、无「补了差价必须砍 BAR」、无佣金%**。本店补偿 SOP / 华住字段 = **NV**。不把 OPERA Vendor $ breakfast 10.00 / 63.60 例写成中国 Fact。

Vendor / 协会指针（不写成华住 SOP）：

- Oracle OPERA Cloud 26.2 *Charges Adjustment and Payments*（A Vendor PMS，§98 新开）：Billing enables you to post, edit, split, transfer, and adjust charges on reservation accounts. Post Adjustments: adjust by a fixed amount or a percentage of the original amount posted；Reason from Configuring Adjustment Reason Codes. Dedicated section **Posting Service Recovery Adjustment Charges**: "A Service Recovery Adjustment provides the ability to post and track adjustments related to service recovery versus other non-service recovery related adjustments." Amount or %；Department；Reason。Allow Negative Postings / negative Price or Quantity = rebate / adjustment；Supplement mandatory for negative (rebate) posting。Manually posting rate code charges does NOT change the rate code, room type, number of persons, rate, or other details specified on the reservation。**Service Recovery Adjustment ≠ BAR Type。** Vendor $ breakfast 10.00 / 63.60 例 **NOT China Fact，禁止写入 Simulation 当市场 Fact**。
- Oracle OPERA Cloud 26.2 *About Billing*（A Vendor PMS，§98 新开）：Adjust transactions by amounts or percentages. You can provide reason codes and descriptions for the adjustments. Allow Negative Postings: negative (rebate) charges can be posted to reservation accounts。**Folio adjust/rebate ≠ public flexible BAR。**
- Oracle OPERA Cloud 26.2 *Configuring Adjustment Reason Codes*（A Vendor PMS，§98 新开）：Examples: duplicate charge, error, overcharge, manager’s discretion. Code Type **Service Recovery**: "Indicates resolution of an issue with a dissatisfied guest." (Available when the Service Requests OPERA Control is active). Related topic: Posting Service Recovery Adjustment Charges。**Adjustment Reason / Service Recovery type ≠ BAR Type / pricing power。**
- Cloudbeds *Add or adjust reservation charges*（A Vendor PMS 第二家，§98 新开；curl 200）：An adjustment can be used to add a discount to the reservation or correct the reservation price, especially if the correction needs to be shown in folio and invoice. Adding an adjustment subtracts a specific amount from guest's debit/charge. Adjustment is a separate type of transaction. A charge adjustment doesn't subtract from guest's payment specifically — use refund to adjust payment。**Folio adjustment ≠ public BAR rewrite。**
- CoStar STR *Historical Benchmarking Data Reporting Guidelines*（S 协会报送，§15/§96 升核，不当新发现页）："Rooms Revenue reported to STR should be net of rebates, refunds, allowances, overcharges and taxes." Product or service-related refunds are a reduction to Rooms Revenue。**Accounting net-of-allowance = ADR read, NOT rewrite-BAR order。**
- HSMAI Academy *BAR* glossary（A 协会，§67 指针）：BAR = non-qualified, publicly available。**Service-recovery folio adjustment ≠ BAR。**

本店补偿 SOP / 默认补偿 % / 华住补偿字段 / 佣金% = **全部 NV**。服务补偿 **不再 leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「客人投诉补了差价 / 服务失败 / 补偿券 / ADR 被减免看脏」是本住 folio Service Recovery / posting adjustment / rebate，还是要改公开 BAR；②拟议是「BAR→399 / 服务失败所以砍 / 补偿券才是市场价」还是「补偿留在 Service Recovery Adjustment、Hold 公开」；③本店 Pace / Remaining，不是「补偿听起来像市场价」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 本住补偿/adjustment/rebate 金额（缺则问，不编）
- 是否 OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；是否 Cloudbeds Adjust Charge；是否其实是点评 SIGNAL（那是 P39）/ BRG 已订直销索赔（P75）/ 计划 Comp（P47）/ 取消 FEE（P84）/ 储值（P83）/ 押金预授权（P86）
- 拟议：BAR 改成补偿地板 / 服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏所以砍
- 本店补偿 SOP / 默认补偿 % / 华住字段（NV 不编）
- 用户原话：「客人投诉补了差价，BAR 改成那个价」「服务失败今晚全部 dump」「补偿券 399 所以公开也 399」「ADR 被减免看脏所以砍 BAR」「Service Recovery Adjustment 屏就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 本住 Service Recovery / folio adjustment / rebate vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「服务失败所以砍 / 补偿了所以新尺 / 补偿券才是市场价」？ | 形 B；拒绝 |
| D3 | 因 allowances/rebates「看脏」ADR 而要 dump BAR？ | 形 C；STR net-of-allowance 是 READ，不是 rewrite |
| D4 | 其实是点评 SIGNAL / BRG 索赔 / 计划 Comp / 取消 FEE / 储值 / 押金 / 真 leftover？ | → P39 / P75 / P47 / P84 / P83 / P86 / P05 |
| D5 | OPERA Post Service Recovery Adjustment / Adjustment Reason Codes / Cloudbeds Adjust Charge 被当成 BAR Type？ | 形 E；配置/过账 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不从补偿地板改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Opportunity / Risk

- **Opportunity（方向，无 Fake Precision）：** Ahead 保住公开 ADR；补偿成交关在本住 folio Service Recovery Adjustment / Adjust Charge，不污染公开尺；顾问能挡住「补了差价=新市场价 / 服务失败=今晚 dump / 补偿券=公开尺」假信号。
- **Risk：** 误把真弱夜当「服务失败所以 Hold」；或反过来把补偿地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P39 评分 SIGNAL 当本剧；误把 P75 BRG 索赔当服务失败改尺；误把 P47 计划 Comp / P84 取消 FEE / P83 储值 / P86 押金当本剧；把 OPERA Vendor $ 例抄成中国店规；编默认补偿 %。

## 4. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 本住 folio Service Recovery / posting adjustment / rebate ≠ 点评 SIGNAL（P39）≠ BRG 索赔（P75）≠ 计划 Comp（P47）≠ 取消 FEE（P84）≠ 储值（P83）≠ 押金/预授权（P86）。补偿留在 OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate，或 Cloudbeds Adjust Charge。公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因 allowances/rebates「看脏」，分看公开 BAR vs 本住 adjustment/rebate；**不要为清洗 ADR 砍公开 BAR**。STR net-of-allowance 是 READ，不是 rewrite。
4. **误入移交**：点评 SIGNAL → P39；BRG like-for-like 已订直销 → P75；计划 Comp → P47；取消 FEE → P84；储值 → P83；押金/预授权 → P86；真弱 → P05。
5. **早会一个动作**（P45）：纠正「服务补偿≠BAR」+ Hold 公开 BAR（或问清是 folio adjustment 层，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认补偿 %；把 OPERA $ breakfast 例当中国 Fact；无 Pace 就因「服务失败 / 补了差价 / ADR dirty」改尺；操作 PMS/OTA。

## 5. Why

- Vendor：OPERA 钉 Service Recovery Adjustment 是 **本住账单过账路径**（post and track adjustments related to service recovery versus other non-service recovery related adjustments），不是公开 BAR Type。Adjustment Reason Code Type Service Recovery = resolution of an issue with a dissatisfied guest，不是定价权。Manually posting rate code charges does **not** change the rate on the reservation。Cloudbeds 钉 adjustment 是 folio/invoice 交易类型，减 guest debit/charge，不是改公开尺；改付款用 refund。
- 协会：HSMAI BAR = non-qualified publicly available。本住补偿过账 **不是**公开灵活尺。
- 指标：STR Rooms Revenue net of rebates, refunds, allowances — 会计净额是 **ADR 读法**，不是「减免了所以公开也得跟」的改尺令。
- Advisor：用户说「客人投诉补了差价 / 服务失败今晚全部 dump」时，先问 Pace 与这是不是 folio Service Recovery 层。多的常是 **本住 posting 层**，不是砍公开尺的许可证。点评 SIGNAL 仍走 **P39**，不是本店改 BAR。

## 6. Expected Impact

方向（无 Fake Precision）：Ahead 保住公开 ADR；补偿成交关在 folio Service Recovery / Adjust Charge，不污染公开尺。

## 7. Risk

误把真弱夜当「服务失败所以 Hold」；把补偿地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P39/P75/P47/P84/P83/P86 对象当本剧；误把 OPERA Service Recovery Adjustment 屏当 BAR Type；误把 Vendor $ 例当中国 Fact；编默认补偿 %。

## 8. What To Watch

公开 BAR 是否仍 Hold；补偿是否仍挂在本住 folio Service Recovery Adjustment / Adjust Charge；24h 公开 Pickup vs 补偿过账变更（分看）；是否有人把点评 SIGNAL（P39）或 BRG 索赔（P75）与服务补偿改尺混谈。

## 9. Re-evaluation Trigger

Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从补偿地板改写 BAR。点评 SIGNAL → 切 **P39**。BRG 已订直销索赔 → 切 **P75**。计划 Comp → 切 **P47**。取消 FEE → 切 **P84**。储值 → 切 **P83**。押金/预授权 → 切 **P86**。

## 10. Confidence

方向 Medium（有 Pace + 能拆本住补偿/公开，或至少能标 NV 仍 Hold）。点补偿额/% Low（NV）。Evidence A Vendor PMS（OPERA Service Recovery Adjustment + Adjustment Reason Codes + Cloudbeds Adjust Charge）+ S 协会报送（STR net-of-allowance）+ A 协会指针（HSMAI BAR）。华住补偿 SOP / 默认补偿 % = NV。

## 11. Simulation 指针

见 `cases/sim-2026-service-recovery-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 18:17 CST | 首版。P87。服务补偿/folio Service Recovery adjustment/rebate≠公开 BAR；Ahead Hold；拒改尺。16:17 不规定 → 本案例核实 HIGH 缺口后开。未开 P88。服务补偿不再 leftover。优先级 HIGH。Pet/AAA 仍停车。 |
| 2026-09-01 00:17 CST | 头一行理论指针 → **T-Service-Recovery**；Diagnose 走理论卡，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。 |

> 源指针（2026-08-31 20:17 R31-20，不改正文）：§99 Apaleo *Adding and Moving Charges to a Folio*（Refund/Add allowance）+ HotelKey *Service Recovery*（negative charge / non-revenue；第三家 Vendor）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 理论指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery** `theory/service-recovery-adjustment-vs-bar.md`，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 源指针（2026-09-01 04:17 R01-04，不改正文）：§103 HotelKey *Charge Types .ng*（charge type / Include in Revenue / Allow Adjustment ≠ BAR Type；第三家 Vendor；互补 OPERA TX Codes）+ HotelKey *Early Check-Out .ng*（Early Departure Fee / remaining-stay Posts this charge to the folio ≠ 改写公开 BAR；加强 P46/P84）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。


> 指针（2026-09-15 14:17 S15-14，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio scout-only；§169 新开换房·折扣字段·Open Folio 族。Diagnose handoff **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 指针（2026-09-15 16:17 T15-16，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio deepen **已 skip**。§169 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49**/P45 · **P87** / **P42** · **P69**/P87）；Hold 779–799 首选 799；拒 399；不发明 699。换房作业 / 折扣原因码 / 离店后过账 ≠ 公开 BAR rewrite。不开 P88。不开 P89。

> 指针（2026-09-15 18:17 C15-18，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio misread Simulation drafted（`cases/sim-2026-room-move-discount-openfolio-misread-sat.md`）；§170 CASE 指针复述 §169。Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。

> 源指针（2026-09-15 20:17 R15-20，不改正文三句 / 399 / 799）：§171 新开 Protel Air *How to move a reservation* + Apaleo *SOP Template Amend reservations* + Stayntouch *Check Out With Open Balance*；Apaleo modify stay details 用途升核（§154）；互补 §169–§170。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。
