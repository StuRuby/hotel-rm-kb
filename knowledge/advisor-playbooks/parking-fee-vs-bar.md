# Playbook P82｜Parking Fee / Valet / Garage vs 公开 BAR（停车费/代客泊车/车库费不是公开 BAR；不要因为含停总价、ADR 被停车看脏、或竞对免停而改写公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/parking-fee-vs-bar.md`  
> BACKLOG：P82 Parking Fee / Valet / Garage vs Public BAR · **MEDIUM** · 先诊断枝（本轮同开）· slug **parking-fee-vs-bar**  
> 状态：**drafted**（2026-08-30 18:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-parking.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/parking-fee-vs-public-bar.md`（公开 BAR vs 停车/valet/车库费；**无默认停车 % / valet % / 车库租金 Fact**；本店停车 SOP NV）  
> 理论：暂无独立理论卡；Diagnose 先走本剧。邻 **T-Fee / P79**（Resort Fee / 强制服务费 / all-in）同属费族，只作交叉，不复写。**不规定 P83。**  
> 理论核源：STR CoStar P&L Data Reporting Guidelines（酒店自营 Parking ∈ Other Operated；第三方收租/佣金 → Misc，不当 Other Operated 毛额 — §80 已开 / 本轮 timeout 升核指针）；STR CoStar Historical Benchmarking（Other Revenue 例含 parking，不是 Rooms；套餐只把房价进 Rooms — §80/§85 指针）；OPERA 5.6 Fixed Charges（rollaway / valet / parking 可按日过账，Supplement 可记停车票号/车位号 — 本小时新开）；OPERA Cloud 26.2 Package Codes（Separate Line / Combined Line / Sell Separate ≠ BAR Type — 本小时升核）；HSMAI Ancillary Revenue Strategy Playbook 新闻稿（停车是 ancillary 战术名，无幅度 — 指针）；HFTP / Hotel Online USALI 12th Other Reporting Guidance（complimentary valet 费用进受益部门 Rooms 和/或 F&B — C 可选）  
> 交叉：P79 强制费/服务费/all-in ≠ 本剧「停车/valet/车库改尺」· P36 竞对比价税/费（含停可比仍走 P36）· P78 Extra Person/加床 · P69 含早套餐 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§89 「停车费/valet/车库费不是公开 BAR」  
> 仿真：`cases/sim-2026-parking-fee-sat.md`（**Simulation**）  
> 证据等级：A 协会（STR CoStar P&L：酒店自营 Parking ∈ Other Operated；第三方经营付租/佣金 → Misc — §80 已开 / §86 升核指针；STR CoStar Historical Benchmarking：Other Revenue 例含 parking，不是 Rooms — §80/§85 指针 / §86）；A Vendor PMS（OPERA 5.6 Fixed Charges：valet/parking 按日固定过账 + Supplement 票号/车位号 — §86 新开；OPERA Cloud 26.2 Package Codes：Separate/Combined/Sell Separate ≠ BAR Type — §80 已开 / §86 升核）；A 协会新闻稿（HSMAI Ancillary Playbook press：parking 战术名、无幅度 — 指针 ~source-map 行 544 / §86）；C 协会转载（HFTP/Hotel Online USALI 12th：complimentary valet 费用进受益部门 — 可选）  
> Last Verified：2026-08-30  
> 知识类型：Vendor Methodology + Association Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆停车/valet/车库费 / OTA 含停总价 / 第三方 Misc vs 公开灵活 BAR、Hold 公开 BAR、拒绝把停车地板写成新尺；**不操作** PMS / OTA / 停车费表，不自动定价，不代改 Fixed Charge。  
> 禁止：发明华住停车 SOP、默认停车 %、valet %、车库租金 Fact、佣金%、699；一夜 −15%；BAR→399「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」；把 14/399/799 当市场 Fact；开 P83；把竞对比价含停当本剧主刀（误入 P36）；把 Resort Fee/服务费/all-in 当本剧主刀（误入 P79）；把加床当本剧（误入 P78）；把含早当本剧（误入 P69）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 16:17「不要开 P82」= theory 槽不得指定；本案例槽核实 parking leftover（STR 停车 ∈ Other Operated 已开、无专剧；P79≠停车；P36=竞对含停可比不是本店改尺）后开。停车费 **不再 leftover**。优先级保持 **MEDIUM**（scout 不因中国每周戏剧升级 HIGH）。

---

## 0. 一句话

**停车费 / valet / 车库费不是公开灵活 BAR。** 先问这是 **酒店自营停车过账**（STR：Other Operated），还是 **第三方经营付租/佣金**（STR：Misc，不当 Other Operated 毛额），还是 **OPERA Fixed Charge / Package Separate Line 的按日停车/valet**，还是 **OTA 含停总价展示**，还是 **要把公开灵活 BAR 改成「含停贵 / 竞对免停所以跟」那个地板**。STR：酒店自营 Parking 进 **Other Operated**，不是 Rooms；第三方收租/佣金进 **Misc**。Historical：Other Revenue 例含 parking，套餐只把房价进 Rooms。OPERA Fixed Charges 把 valet/parking 钉成 **按日过账的交易码**，Supplement 可记票号/车位号——不是 BAR Type。Package Separate Line / Combined Line / Sell Separate 是套餐属性，不是公开尺。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」把 BAR 改写成 399。竞对比价税/费（含停可比）→ **P36**。Resort/服务费/all-in → **P79**。加床 → **P78**。含早套餐 → **P69**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从停车费改写 BAR）。本店停车 SOP / 华住字段 / 默认停车 % / valet % / 车库租金 Fact = **NV，不编**。

完成定义：一张「先拆停车/valet/车库 vs OTA 含停总价 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 停车/valet/车库 = 公开 BAR** | 「含停总价就是我们的公开价」 | 用 ancillary 当尺 | **拆停车 vs 公开**；Hold 公开 BAR |
| **B BAR→399「停车贵所以砍公开 / 含停总价贵 / 竞对免停所以跟」** | 「含停贵、隔壁免停，BAR 改 399」 | 把停车地板写成战略尺 | **拒绝 BAR→399** |
| **C 停车进错桶 / 拉低或抬高 ADR → dump BAR** | 「ADR 被停车看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看公开 BAR vs Other Operated vs Misc vs 含停展示**；STR：自营停车 ≠ Rooms；第三方租 ≠ Other Operated 毛额 |
| **D 误入竞对比价 / 强制费 / 加床 / 含早** | 「隔壁含停更贵 / 度假费+停 / 加床+停 / 含早+停」 | 对象是别的剧本 | **P36** / **P79** / **P78** / **P69** |
| **E Fixed Charge / Separate Line / Sell Separate 当 BAR Type** | 「按日停车过账 / 套餐加总就是公开价表」 | 把过账/套餐属性当成 BAR | **过账码 / 套餐属性 ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按含停地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是酒店自营停车 / valet / 车库过账，还是第三方 Misc，还是 OTA 含停总价，还是要改公开灵活 BAR。停车费 ≠ 公开尺。本店停车 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」。
3. 竞对比价含停走 P36。Resort/服务费/all-in 走 P79。加床走 P78。含早走 P69。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从停车费改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认停车 %、无 valet %、无「含停太贵必须砍 BAR」、无车库租金 Fact、无佣金%**。本店停车 SOP / 华住字段 = **NV**。

Vendor / 协会指针（不写成华住 SOP）：

- STR CoStar *P&L Data Reporting Guidelines*（A 协会，§80 已开 / §86 升核指针；本轮 WebFetch timeout）：Other Operated Departments Include：**Parking**、Telecommunications、Minibar（hotel-operated）。若第三方经营并付租/佣金 → **Miscellaneous Income**，不当 Other Operated 毛额。**停车 ≠ Rooms；上报桶 ≠ 改尺令。**
- STR CoStar *Historical Benchmarking Data Reporting Guidelines*（A 协会，§80/§85 指针 / §86）：Other Revenue 例含 **parking**、spa、telecommunications — **不是 Rooms**。套餐价：只把房价进 Rooms。**含停套餐展示 ≠ 把停车写进 BAR。**
- OPERA 5.6 *Fixed Charges*（A Vendor PMS，§86 新开）：rollaway、**valet**、或 **parking** 可能按日发生 → Fixed Charges 功能（交易码），日终自动过账。Supplement 例：「for a fixed **parking** charge you may want to enter a parking ticket number or parking space number。」**按日停车过账 ≠ BAR Type。**
- OPERA Cloud 26.2 *Package Codes*（A Vendor，§80 已开 / §86 升核）：Separate Line / Combined Line / Sell Separate ≠ BAR Type。Package = 房价内含或另售的附加产品/服务。**套餐属性 / 另售停车 ≠ 公开灵活尺。**
- HSMAI *Ancillary Revenue Strategy Playbook* 新闻稿（A 协会新闻稿，指针）：覆盖 upsells、day-use、**parking**、F&B — **战术名 only，无幅度**。不编停车 %。
- HFTP / Hotel Online *USALI 12th Other Reporting Guidance*（C 可选）：complimentary valet parking 费用进受益部门（Rooms 和/或 F&B）。**不是把 BAR 改写成免停地板。**

本店停车 SOP / 华住字段 / 默认停车 % / valet % / 车库租金 Fact / 佣金% = **全部 NV**。停车费 **不再 leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「停车贵 / 含停总价 / valet / 车库 / 竞对免停」是停车过账、第三方 Misc、OTA 展示，还是要改公开 BAR；②拟议是「BAR→399 / 含停贵所以跟 / 竞对免停所以砍」还是「停车留在费项、Hold 公开」；③本店 Pace / Remaining，不是「含停听起来更贵」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 客人看到的含停总价 / OTA 含停 / valet 挂牌（缺则问，不编）
- 是否酒店自营停车（Other Operated）；是否第三方车库收租/佣金（Misc）；是否 valet；是否 Fixed Charge / Package Separate Line
- 拟议：BAR 改成含停地板 / 停车贵所以跟 / ADR 被停车看脏所以砍 / 竞对免停所以跟公开价
- 本店停车 SOP / 华住字段（NV 不编）
- 用户原话：「OTA 含停总价贵，BAR 改成 399」「停车贵所以砍公开」「ADR 被停车看脏了砍 BAR」「竞对免停所以我们也免、公开价跟下来」「Fixed Charge 停车就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 酒店自营停车 / valet / 车库 vs 第三方 Misc vs OTA 含停 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「停车贵所以砍公开 / 含停总价贵 / 竞对免停所以跟」？ | 形 B；拒绝 |
| D3 | 因停车进错桶 / 拉低或抬高 ADR 而要 dump BAR？ | 形 C；指标读法 ≠ 改尺 |
| D4 | 其实是竞对比价含停 / Resort·服务费·all-in / 加床 / 含早？ | → P36 / P79 / P78 / P69 |
| D5 | Fixed Charge / Separate Line / Sell Separate 被当成 BAR Type？ | 形 E；过账/套餐 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 停车/valet/车库费 ≠ 第三方 Misc ≠ OTA 含停展示。停车留在 Fixed Charge / Package Separate Line / Other Operated（或 Misc），公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因停车误记进 Rooms「看脏」、或 Other Operated/Misc 口径让客房 ADR 显得怪，分看房价 vs Other Operated vs Misc vs 含停展示；**不要为清洗 ADR 砍公开 BAR**。读法 ≠ 改尺。
4. **误入移交**：竞对比价含停 → P36；Resort/服务费/all-in → P79；加床 → P78；含早套餐 → P69；真弱 → P05。
5. **早会一个动作**（P45）：纠正「停车≠BAR」+ Hold 公开 BAR（或问清是自营过账、第三方 Misc，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认停车 % / valet % / 车库租金；无 Pace 就因「含停贵 / 竞对免停」改尺。

## 4. Why

- 协会：酒店自营 Parking 钉在 **Other Operated**，不是 Rooms；第三方租/佣金钉在 **Misc**。进不进客房 = 上报口径 ≠ 改尺令。Historical Other Revenue 含 parking 同样不是 BAR Type。
- Vendor：Fixed Charges 钉在 **按日过账的交易码**（valet/parking 例）；Package Separate/Combined/Sell Separate 钉在 **套餐属性**。设计上不是公开 BAR Type。
- 指标：停车可抬高、压低或「看脏」ADR——顾问应读清桶，而不是把「ADR 怪了 / 含停贵了」当成砍尺令。
- Advisor：用户说「含停总价贵 / 竞对免停」时，先问 Pace 与这是不是停车层。贵的常是 **ancillary / 展示层**，不是砍公开尺的许可证。竞对含不停可比仍走 **P36**，不是本店改 BAR。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；停车成交关在费项/过账，不污染公开尺。
- Risk：误把真弱夜当「含停投诉所以 Hold」；或反过来把含停地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P36 竞对含停可比当本店改尺；误把 P79 Resort Fee 当停车。
- Watch：公开 BAR 是否仍 Hold；停车/valet 是否仍挂在 Fixed Charge / Package / Other Operated（或 Misc）；24h 公开 Pickup vs 含停展示（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从停车费改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆停车/公开，或至少能标 NV 仍 Hold）。点停车%/valet%/车库租金 Low（NV）。Evidence A 协会（STR 桶）+ A Vendor PMS（Fixed Charges / Package Codes）。STR P&L 本轮 WebFetch timeout，升核靠 §80 先前打开 + 指针。

## 7. Simulation 指针

见 `cases/sim-2026-parking-fee-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 18:17 CST | 首版。P82。停车费/valet/车库≠公开 BAR；Ahead Hold；拒改尺。16:17 不规定 → 本案例核实 leftover 后开。未开 P83。停车费不再 leftover。优先级 MEDIUM。 |

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
> 交叉指针（2026-09-01 16:17，不改正文）：停车费仍本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ P82。不规定 P88。

> 指针（2026-09-15 22:17 S15-22，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages scout-only；§172。固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ Pace ≠ 公开 BAR rewrite。Diagnose handoff **P82/P78/P69/P79/T-Fee** · **P49/P80** · **P45/P87**；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `scout/2026-09-15-2217.md` · `sources/source-map.md` §172。

> 指针（2026-09-16 00:17 T16-00，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages deepen **theory-skip**；§172 复核 only。固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P82/P78/P69/P79/T-Fee** · **P49/P80** · **P45/P87**；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-0017-theory-skip-fixed-charges-membership.md`。

> 指针（2026-09-16 02:17 C16-02，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages misread Simulation `cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md`；§173 CASE 指针复述 §172。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-16 04:17 R16-04，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages 互补源 §174 — Protel Fixed charges（EOD 固定费）+ Stayntouch Hotel Loyalty Programs（挂会员）+ Stayntouch Configure Add-Ons Staff Alert（员工加购 Alert）新开。固定费自动过账 / 入会·挂会员 / 员工 Alert ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。T16-00 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-16-0417-sources-recap.md` · `sources/source-map.md` §174。
