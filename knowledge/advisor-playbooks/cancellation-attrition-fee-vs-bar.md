# Playbook P84｜Cancellation Fee / Group Attrition Fee vs 公开 BAR（取消/团 attrition FEE 是过账/桶，不是公开灵活 BAR；不要因为取消费当市场价、ADR 被取消费看脏、或 attrition 罚金当地板而改写公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/cancellation-attrition-fee-vs-bar.md`  
> BACKLOG：P84 Cancellation / Attrition Fee vs Public BAR · **MEDIUM** · 先诊断枝（本轮同开）· slug **cancellation-attrition-fee-vs-bar**  
> 状态：**drafted**（2026-08-31 02:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-cancel-fee.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/cancel-attrition-fee-vs-public-bar.md`（公开 BAR vs 取消/attrition fee 过账 vs Rooms；**无默认取消费 % / attrition % Fact**；本店取消/attrition SOP NV）  
> 理论：暂无独立理论卡；Diagnose 先走本剧。邻 **P14**（高取消 Soft OTB）/ **P38**（收免费取消窗）/ **P54**（noshow 收入 IS Rooms）/ **P52**（团 cutoff/wash）只作交叉，不复写。**不规定 P85。**  
> 理论核源：STR CoStar Historical Benchmarking Data Reporting Guidelines（group attrition + transient cancellation after cutoff/penalty → Attrition Fees and Cancellation Fees within **Miscellaneous Income Schedule 4**，不是 Rooms / Other Rooms；no-show **revenue** IS Rooms — 本小时升核打开）；Oracle OPERA Cloud 26.2 OPERA Controls — Cashiering（**CANCELLATION_PENALTY_POSTING_TRN_CODE** = 取消费过账交易码 — 本小时新开）；Oracle OPERA Cloud 26.2 Managing Reservation Cancellation（Auto Post Cancellation Penalty 用该交易码过账到 folio — 本小时新开）；HSMAI Academy BAR glossary（BAR = non-qualified publicly available — §67 指针）  
> 交叉：P14 高取消 Soft OTB ≠ 本剧「取消费过账改尺」· P38 收窗先于砍 BAR ≠ 取消费当地板 · P54 noshow 收入 IS Rooms（过程仍 P54）· P52 团 cutoff/wash 过程 ≠ attrition FEE 改尺 · P62 cancel-rebook · P65 reinstate · P19 预付 NR · P79 resort/all-in · P82 停车 · P83 储值 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§91 「取消/attrition FEE 不是公开 BAR」  
> 仿真：`cases/sim-2026-cancel-fee-sat.md`（**Simulation**）  
> 证据等级：A 协会（STR Historical：attrition + cancel after cutoff → Misc Schedule 4；no-show revenue IS Rooms — §90 升核打开）；A Vendor PMS（OPERA Cloud 26.2 Cashiering Controls：Cancellation Penalty Posting Transaction Code — §90 新开；OPERA Cloud 26.2 Managing Reservation Cancellation：Auto Post 用交易码过账 — §90 新开）；A 协会指针（HSMAI BAR glossary — §67）  
> Last Verified：2026-08-31  
> 知识类型：Association Methodology + Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆取消/attrition FEE 过账（STR Misc Schedule 4；OPERA 专用交易码）vs 公开灵活 BAR、Hold 公开 BAR、拒绝把取消费/attrition 罚金地板写成新尺；**不操作** PMS / OTA / 取消政策表，不自动定价，不代过账取消费。  
> 禁止：发明华住取消/attrition SOP、默认取消费 %、attrition %、699；一夜 −15%；BAR→399「取消费才是市场价 / ADR 被取消费看脏所以砍 / attrition 罚金当地板 / 取消费多说明价高所以 dump」；把 14/399/799 当市场 Fact；开 P85；把高取消 Soft 当本剧主刀（误入 P14）；把收窗当本剧（误入 P38）；把 noshow 当本剧（误入 P54）；把团 cutoff/wash 当本剧（误入 P52）；把 cancel-rebook / reinstate / 预付 NR / resort / 停车 / 储值 当本剧主刀；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 00:17「不要规定 P84」= theory 槽不得指定；本案例槽核实 MEDIUM leftover（filename 无专剧；P14≠取消费过账改尺；本小时升核/新开 A 级 STR + OPERA 页）后开。取消费 **不再 leftover**。优先级保持 **MEDIUM**（不升级 HIGH）。

---

## 0. 一句话

**取消 FEE / 团 attrition FEE 是过账/桶，不是公开灵活 BAR。** 先问这是 **取消/attrition FEE 过账**（STR：attrition + transient cancellation after cutoff → **Misc Schedule 4**；OPERA：Cancellation Penalty Posting Transaction Code），还是 **要把公开灵活 BAR 改成「取消费才是市场价 / ADR 被取消费看脏所以砍 / attrition 罚金当地板」那个尺**。取消费 ≠ 公开尺。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「取消费才是市场价 / ADR 被取消费看脏 / attrition 罚金当地板 / 取消费多说明价高所以 dump」把 BAR 改写成 399。高取消量 → **P14**。收窗 → **P38**。Noshow 房 → **P54**（noshow revenue IS Rooms）。团 cutoff/wash → **P52**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从取消费地板改写 BAR）。本店取消/attrition SOP / 华住字段 / 默认取消费 % / attrition % = **NV，不编**。

完成定义：一张「先拆取消/attrition FEE 过账 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 取消/attrition FEE = 公开 BAR** | 「取消费就是我们的公开价」 | 用过账/罚金当尺 | **拆过账 vs 公开**；Hold 公开 BAR |
| **B BAR→399「取消费才是市场价 / ADR dirty / attrition 罚金当地板」** | 「取消费多 / ADR 脏了，BAR 改 399」 | 把费项地板写成战略尺 | **拒绝 BAR→399** |
| **C 费进错桶污染 ADR → dump BAR** | 「ADR 被取消费看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **读 posting**（STR Misc vs Rooms）≠ 改写 BAR |
| **D 误入高取消 / 收窗 / noshow / cutoff / rebook / reinstate / resort** | 「取消多 / 收窗 / noshow / 团 wash / 重订 / 恢复旧价 / 度假费」 | 对象是别的剧本 | **P14** / **P38** / **P54** / **P52** / **P62** / **P65** / **P79** |
| **E OPERA 取消费交易码当 BAR Type** | 「Cancellation Penalty 交易码就是公开价表」 | 把过账码当成 BAR | **过账 ≠ 定价权**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按取消费地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从取消费地板改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是取消/attrition FEE 过账（STR：attrition + 散客 cutoff 后取消 → Misc Schedule 4；OPERA：专用交易码），还是要改公开灵活 BAR。取消费 ≠ 公开尺。本店取消/attrition SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「取消费才是市场价 / ADR 被取消费看脏 / attrition 罚金当地板」。
3. 高取消量走 P14。收窗走 P38。Noshow 房走 P54（noshow revenue IS Rooms）。团 cutoff/wash 走 P52。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从取消费地板改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认取消费 %、无 attrition %、无「取消费多必须砍 BAR」、无佣金%**。本店取消/attrition SOP / 华住字段 = **NV**。

Vendor / 协会指针（不写成华住 SOP）：

- STR CoStar *Historical Benchmarking Data Reporting Guidelines*（A 协会，§90 升核打开）：For clarity, revenue from **group attrition (cancellation)** and **transient guestroom cancellations after the cutoff/penalty date** is included in Attrition Fees and Cancellation Fees within **Miscellaneous Income (Schedule 4)** and **not** Rooms Revenue or Other Rooms Revenue。No-show **revenue** derived from guaranteed guests who fail to occupy **IS** Rooms（过程仍 **P54**）。**上报桶 ≠ 改尺令。**
- Oracle OPERA Cloud 26.2 *OPERA Controls — Cashiering*（A Vendor PMS，§90 新开）：**CANCELLATION_PENALTY_POSTING_TRN_CODE** — Specifies the transaction code to be used to **post** the cancellation penalty fee。**过账交易码 ≠ BAR Type。**
- Oracle OPERA Cloud 26.2 *Managing Reservation Cancellation*（A Vendor PMS，§90 新开）：When Auto Post Cancellation Penalty 启用，取消罚金 **posted to the guest's folio using the transaction code** specified in Cancellation Penalty Posting Transaction Code。**过账到 folio ≠ 公开灵活栅格。**
- HSMAI Academy *BAR* glossary（A 协会，§67 指针）：BAR = non-qualified, publicly available。**取消/attrition 罚金 ≠ BAR。**

本店取消/attrition SOP / 华住字段 / 默认取消费 % / attrition % / 佣金% = **全部 NV**。取消费 **不再 leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「取消费 / attrition 罚金 / ADR 被取消看脏 / 取消费多说明价高」是取消/attrition FEE 过账，还是要改公开 BAR；②拟议是「BAR→399 / 取消费才是市场价 / attrition 当地板」还是「费留在 Misc/交易码、Hold 公开」；③本店 Pace / Remaining，不是「取消费听起来像市场价」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 取消 FEE / attrition 罚金挂牌或累计（缺则问，不编）
- 是否 STR Misc Schedule 4 口径；是否 OPERA Cancellation Penalty Posting Transaction Code；是否 noshow（那是 P54）
- 拟议：BAR 改成取消费地板 / 取消费才是市场价 / ADR 被取消费看脏所以砍 / attrition 罚金当地板 / 取消费多所以 dump
- 本店取消/attrition SOP / 华住字段（NV 不编）
- 用户原话：「取消费才是市场价，BAR 改成 399」「ADR 被取消费看脏了砍公开价」「attrition 罚金这么高说明定价高了」「取消费多说明价太高所以 dump BAR」「Cancellation Penalty 交易码就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 取消/attrition FEE 过账（Misc / 交易码）vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「取消费才是市场价 / ADR dirty / attrition 当地板」？ | 形 B；拒绝 |
| D3 | 因费进错桶 / 污染 ADR 而要 dump BAR？ | 形 C；读 posting ≠ 改尺 |
| D4 | 其实是高取消 Soft / 收窗 / noshow / 团 cutoff / rebook / reinstate / resort？ | → P14 / P38 / P54 / P52 / P62 / P65 / P79 |
| D5 | OPERA 取消费交易码被当成 BAR Type？ | 形 E；过账 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不从取消费地板改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Opportunity / Risk

- **Opportunity（方向，无 Fake Precision）：** Ahead 保住公开 ADR；取消/attrition 成交关在 Misc Schedule 4 / 专用交易码，不污染公开尺；顾问能挡住「取消费=市场价」假信号。
- **Risk：** 误把真弱夜当「取消费投诉所以 Hold」；或反过来把取消费/attrition 罚金当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P14 Soft 取消潮当本剧；误把 P54 noshow（Rooms）当 Misc 取消费；误把 P52 wash 过程当 attrition FEE 改尺。

## 4. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 取消 FEE ≠ 团 attrition FEE ≠ noshow revenue（Rooms，走 P54）。取消费留在 Misc Schedule 4 / OPERA Cancellation Penalty 交易码，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因取消/attrition 误记进 Rooms「看脏」，分看公开 BAR vs Misc Schedule 4 vs Rooms；**不要为清洗 ADR 砍公开 BAR**。读 posting ≠ 改尺。STR：attrition + cancel after cutoff = Misc；noshow revenue = Rooms。
4. **误入移交**：高取消 Soft → P14；收窗 → P38；noshow → P54；团 cutoff/wash → P52；cancel-rebook → P62；reinstate → P65；resort/all-in → P79；真弱 → P05。
5. **早会一个动作**（P45）：纠正「取消费≠BAR」+ Hold 公开 BAR（或问清是 Misc 过账，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认取消费 % / attrition %；无 Pace 就因「取消费多 / ADR dirty」改尺；操作 PMS/OTA。

## 5. Why

- 协会：STR 钉 attrition + transient cancellation after cutoff 进 **Misc Schedule 4**，不是 Rooms。进不进客房 = 上报口径 ≠ 改尺令。Noshow revenue 钉在 Rooms（过程仍 P54）。
- Vendor：OPERA 钉 Cancellation Penalty 进 **专用过账交易码**，Auto Post 进 folio。设计上是过账，不是公开 BAR Type。
- 指标：取消费误进 Rooms 可「看脏」ADR——顾问应读清桶，而不是把「ADR 怪了 / 取消费多了」当成砍尺令。
- Advisor：用户说「取消费才是市场价 / ADR 脏了」时，先问 Pace 与这是不是 FEE 过账层。多的常是 **罚金/过账层**，不是砍公开尺的许可证。高取消 Soft 仍走 **P14**，不是本店改 BAR。

## 6. Expected Impact

方向（无 Fake Precision）：Ahead 保住公开 ADR；取消/attrition 成交关在 Misc/交易码，不污染公开尺。

## 7. Risk

误把真弱夜当「取消费所以 Hold」；把取消费地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P14/P38/P54/P52 对象当本剧；误把 OPERA 交易码当 BAR Type。

## 8. What To Watch

公开 BAR 是否仍 Hold；取消/attrition 是否仍挂在 Misc Schedule 4 / Cancellation Penalty 交易码；24h 公开 Pickup vs 取消费过账量（分看）；是否有人把 noshow revenue（Rooms）与 cancel fee（Misc）混桶。

## 9. Re-evaluation Trigger

Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从取消费地板改写 BAR。高取消 Soft 潮 → 切 **P14**。要收免费取消窗 → 切 **P38**。Noshow 释放 → 切 **P54**。团 cutoff → 切 **P52**。

## 10. Confidence

方向 Medium（有 Pace + 能拆取消费过账/公开，或至少能标 NV 仍 Hold）。点取消费%/attrition% Low（NV）。Evidence A 协会（STR Misc Schedule 4）+ A Vendor PMS（OPERA Cancellation Penalty 交易码）。Mews cancel-fee / accounting 本小时 CSS Error / 500 = 未开第二家 Vendor。

## 11. Simulation 指针

见 `cases/sim-2026-cancel-fee-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 02:17 CST | 首版。P84。取消/attrition FEE≠公开 BAR；Ahead Hold；拒改尺。00:17 不规定 → 本案例核实 leftover 后开。未开 P85。取消费不再 leftover。优先级 MEDIUM。 |
> 交叉指针（2026-08-31 04:17，不改正文）：互补源 §91 Cloudbeds Cancel direct + Apaleo Accounting intro（取消费 = folio/会计过账账户 ≠ BAR Type）。Mews 再试仍 CSS/500。不写 P85。三句 / 399-rejected / 799-Hypothesis **不改**。

> 交叉指针（2026-08-31 06:17，不改正文）：取消/attrition FEE 过账仍本剧。**P85 于 06:17 已开**（hurdle/LRV vs BAR）。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P86。
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。本剧仍是取消/attrition FEE 过账。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P87。
> 交叉指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本剧仍是取消/attrition FEE 过账。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是取消/attrition FEE 过账。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。
