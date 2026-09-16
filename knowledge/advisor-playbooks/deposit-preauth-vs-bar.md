# Playbook P86｜Deposit / Pre-authorization vs 公开 BAR（押金要求/押金过账与信用卡预授权 hold 不是公开灵活 BAR；不要因为「押金才是市场价 / 预授权扣太多说明价高 / 押金当地板 / ADR 被押金看脏」而改写公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/deposit-preauth-vs-bar.md`  
> BACKLOG：P86 Deposit / Pre-authorization vs Public BAR · **MEDIUM** · 先诊断枝（本轮同开）· slug **deposit-preauth-vs-bar**  
> 状态：**drafted**（2026-08-31 10:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-deposit-preauth.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/deposit-preauth-vs-public-bar.md`（公开 BAR vs 押金要求/过账 vs 预授权 hold；**无默认押金 % / 预授权金额 Fact**；本店押金/预授权 SOP NV）  
> 理论：`theory/deposit-preauth-vs-bar.md`（**T-Deposit**，2026-08-31 16:17）。Diagnose 走 **T-Deposit**，过程仍本剧。邻 **P55**（担保类型/到点放房）/ **P19**（预付不可退产品）/ **P84**（取消/attrition FEE 过账）/ **P83**（储值付款）只作交叉，不复写。**不规定 P87。**  
> 理论核源：Oracle OPERA Cloud 26.2 *Managing Reservation Deposit Request and Cancellation Policy*（Deposit / Cancellation panel；deposit request/payment ≠ BAR Type — 本小时新开）；Oracle OPERA Cloud 26.1 *Configuring Deposit Rules*（Flat / Percentage / Percentage of Nightly Rate / Nights；rate code > reservation type > reservation — 本小时新开）；Oracle OPERA Cloud 26.2 *About Credit Card Authorization Rules*（authorization rule = anticipated expenses → credit card **pre-authorization**；Daily Rate = Room Rate + Add to Rate Packages + Fixed Charges + taxes；Vendor $ 例 NOT China Fact — 本小时新开）；HSMAI Academy BAR glossary（BAR = non-qualified publicly available — §67 指针）；邻 §33 OPERA Configuring Reservation Types（Deposit 勾选仅信息性；押金要求来自 deposit rule schedules — 指针）  
> 交叉：P55 担保/6点放房 ≠ 本剧「押金金额=BAR」· P19 预付 NR 产品 ≠ 押金付款改尺 · P84 取消费过账 ≠ 押金/预授权 · P83 储值付款 ≠ 押金 · P38 收窗 · P54 noshow · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作 · P85 hurdle（邻假尺子）  
> 问题树：§93 「押金/预授权不是公开 BAR」  
> 仿真：`cases/sim-2026-deposit-preauth-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Managing Deposit Request/Cancellation；OPERA Cloud 26.1 Configuring Deposit Rules；OPERA Cloud 26.2 About Credit Card Authorization Rules — §94 新开）；A 协会指针（HSMAI BAR glossary — §67）；邻指针（§33 Reservation Types Deposit 信息性）  
> Last Verified：2026-08-31  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆押金要求/押金过账（OPERA Deposit Rules / Deposit Request / Deposit Payment）与信用卡预授权（Authorization Rules = anticipated expenses pre-auth）vs 公开灵活 BAR、Hold 公开 BAR、拒绝把押金%/预授权额地板写成新尺；**不操作** PMS / OTA / 押金规则表 / 授权规则，不自动定价，不代收押金、不代发起预授权。  
> 禁止：发明华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、佣金%、699；一夜 −15%；BAR→399「押金才是市场价 / 预授权扣太多说明价高 / 押金当地板 / ADR 被押金看脏所以砍」；把 14/399/799 当市场 Fact；把 OPERA auth-rule $100/$20/$50 例写成中国 BAR；开 P87；把担保释放当本剧主刀（误入 P55）；把预付 NR 当本剧（误入 P19）；把取消费当本剧（误入 P84）；把储值当本剧（误入 P83）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 08:17「不要规定 P86」= theory 槽不得指定；本案例槽核实 MEDIUM leftover（filename 无 deposit/preauth 专剧；P55≠押金金额=BAR；本小时新开 A 级 OPERA 三页）后开。押金/预授权 **不再 leftover**。优先级保持 **MEDIUM**（不升级 HIGH；每周改尺戏剧实在但薄于 hurdle，同 P82/P84）。

---

## 0. 一句话

**押金 / 预授权（信用卡 authorization hold）不是公开灵活 BAR。** 先问这是 **押金要求/押金过账**（OPERA Deposit Rules / Deposit Request / Deposit Payment）或 **信用卡预授权**（Authorization Rules = anticipated expenses pre-auth），还是 **要把公开灵活 BAR 改成「押金才是市场价 / 预授权扣太多说明价高 / 押金当地板」那个尺**。押金/预授权 ≠ 公开尺。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「押金才是市场价 / 预授权扣太多说明价高 / 押金当地板 / ADR 被押金看脏所以砍」把 BAR 改写成 399。担保类型/6点放房走 **P55**。预付不可退产品走 **P19**。取消费过账走 **P84**。储值付款走 **P83**。真弱走 **P05**（可有窗围栏，仍禁一夜 −15%，仍不从押金/预授权地板改写 BAR）。本店押金%/预授权额 / 华住字段 = **NV，不编**。

完成定义：一张「先拆押金/预授权 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 押金/预授权 = 公开 BAR** | 「押金/预授权额就是我们的公开价」 | 用付款·hold 当尺 | **拆付款·预授权 vs 公开尺**；Hold |
| **B BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」** | 「押金多 / 预授权扣太多，BAR 改 399」 | 把付款/hold 地板写成战略尺 | **拒绝 BAR→399** |
| **C ADR 被押金/预授权看脏 → dump BAR** | 「ADR 被押金看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **读 posting/hold ≠ 改尺** |
| **D 误入 P55 担保释放 / P19 预付 NR / P84 取消费 / P83 储值 / P38 收窗 / P54 noshow** | 「6点放房 / 预付产品 / 取消费 / 储值 / 收窗 / noshow」 | 对象是别的剧本 | **移交** |
| **E Deposit Rule / Authorization Rule 屏当 BAR Type** | 「Deposit Rules / Auth Rules 就是公开价表」 | 把配置/hold 当成 BAR | **配置/hold ≠ 定价权**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按押金地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从押金地板改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是押金要求/押金过账（OPERA Deposit Rules / Deposit Request / Deposit Payment）或信用卡预授权（Authorization Rules = anticipated expenses pre-auth），还是要改公开灵活 BAR。押金/预授权 ≠ 公开尺。本店押金%/预授权额 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」。
3. 担保类型/6点放房走 P55。预付不可退产品走 P19。取消费过账走 P84。储值付款走 P83。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从押金/预授权地板改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认押金 %、无预授权金额 Fact、无「押金多必须砍 BAR」、无佣金%**。本店押金/预授权 SOP / 华住字段 = **NV**。不把 OPERA auth-rule Vendor $100/$20/$50 例写成中国 Fact。

Vendor / 协会指针（不写成华住 SOP）：

- Oracle OPERA Cloud 26.2 *Managing Reservation Deposit Request and Cancellation Policy*（A Vendor PMS，§94 新开）："Reservation deposit deals with managing the deposit requirements and payment that guests make prior to their stay." Deposit / Cancellation panel manages deposit requests/payments and cancellation penalties. Deposit rules scheduled by rate code / reservation type；rate code schedule precedence。**Deposit request/payment ≠ BAR Type。**
- Oracle OPERA Cloud 26.1 *Configuring Deposit Rules*（A Vendor PMS，§94 新开）：Deposit Rules manage deposit requirements for reservations/blocks — amounts or percentages and when deposits must be paid. Associated via Deposit Schedules. Only one deposit rule at a time（rate code > reservation type > reservation）。Flat / Percentage / Percentage of Nightly Rate / Nights；Before Arrival / After Booking due。**Deposit Rule configuration ≠ public flexible BAR。**
- Oracle OPERA Cloud 26.2 *About Credit Card Authorization Rules*（A Vendor PMS，§94 新开）：Authorization rule = formula for anticipated total expenses charged to a credit card；obtains required **credit card pre-authorization**。Daily Rate in rules = Room Rate + Add to Rate Packages + Fixed Charges + taxes。Rule examples include Vendor $100/$20/$50 numbers — **NOT China Fact，禁止写入 Simulation 当市场 Fact**。**Pre-auth amount ≠ selling rate / BAR Type。**
- HSMAI Academy *BAR* glossary（A 协会，§67 指针）：BAR = non-qualified, publicly available。**押金/预授权 ≠ BAR。**
- 邻指针：§33 OPERA *Configuring Reservation Types*（Deposit 勾选 informational；deposit requirements from deposit rule schedules）— 过程仍 **P55** 管担保释放，不是本剧改尺。

本店押金%/预授权额 / 华住押金/预授权 SOP / 佣金% = **全部 NV**。押金/预授权 **不再 leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「押金 / 预授权 / ADR 被押金看脏 / 预授权扣太多」是押金要求/过账或信用卡 hold，还是要改公开 BAR；②拟议是「BAR→399 / 押金才是市场价 / 押金当地板」还是「押金留在 Deposit Rules、预授权留在 Authorization Rules、Hold 公开」；③本店 Pace / Remaining，不是「押金听起来像市场价」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 押金要求/已付押金 vs 预授权 hold 金额（缺则问，不编）
- 是否 OPERA Deposit Rules / Deposit Request / Deposit Payment；是否 Authorization Rules pre-auth；是否其实是担保放房（那是 P55）/ 预付 NR（P19）/ 取消费（P84）/ 储值（P83）
- 拟议：BAR 改成押金地板 / 押金才是市场价 / 预授权扣太多所以砍 / ADR 被押金看脏所以砍
- 本店押金/预授权 SOP / 华住字段（NV 不编）
- 用户原话：「押金才是市场价，BAR 改成 399」「预授权扣了那么多说明价高了砍」「ADR 被押金看脏了」「Deposit Rules / Auth Rules 屏就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 押金要求/过账或预授权 hold vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「押金才是市场价 / 预授权太高 / 押金当地板」？ | 形 B；拒绝 |
| D3 | 因押金/预授权「看脏」ADR 而要 dump BAR？ | 形 C；读 posting/hold ≠ 改尺 |
| D4 | 其实是担保释放 / 预付 NR / 取消费 / 储值 / 收窗 / noshow？ | → P55 / P19 / P84 / P83 / P38 / P54 |
| D5 | Deposit Rule / Authorization Rule 屏被当成 BAR Type？ | 形 E；配置/hold ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不从押金地板改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Opportunity / Risk

- **Opportunity（方向，无 Fake Precision）：** Ahead 保住公开 ADR；押金成交关在 Deposit Rules/Payments，预授权关在 Authorization Rules，不污染公开尺；顾问能挡住「押金=市场价 / 预授权=价高信号」假信号。
- **Risk：** 误把真弱夜当「押金投诉所以 Hold」；或反过来把押金%/预授权额当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P55 担保放房当本剧；误把 P19 预付产品当押金改尺；误把 P84 取消费 / P83 储值当本剧；把 OPERA Vendor $ 例抄成中国店规。

## 4. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 押金要求/押金过账 ≠ 信用卡预授权 hold ≠ 取消费（P84）≠ 储值付款（P83）。押金留在 Deposit Rules / Deposit Request / Deposit Payment；预授权留在 Authorization Rules。公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因押金过账「看脏」，分看公开 BAR vs 押金过账 vs 预授权 hold；**不要为清洗 ADR 砍公开 BAR**。读 posting/hold ≠ 改尺。
4. **误入移交**：担保/6点放房 → P55；预付 NR → P19；取消费 → P84；储值 → P83；收窗 → P38；noshow → P54；真弱 → P05。
5. **早会一个动作**（P45）：纠正「押金/预授权≠BAR」+ Hold 公开 BAR（或问清是 Deposit/Auth 层，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认押金 % / 预授权金额；把 OPERA $100/$20/$50 当中国 Fact；无 Pace 就因「押金多 / 预授权高 / ADR dirty」改尺；操作 PMS/OTA。

## 5. Why

- Vendor：OPERA 钉押金是 **Deposit Rules / Deposit Request / Deposit Payment**（住前要求与付款），不是公开 BAR Type。Authorization Rules 钉的是 **anticipated expenses → credit card pre-authorization**，Daily Rate 是 Room Rate + packages + fixed charges + taxes 的公式输入，不是卖价表。
- 协会：HSMAI BAR = non-qualified publicly available。押金金额与预授权 hold **不是**公开灵活尺。
- 指标：押金过账/预授权 hold 可「看起来很大」——顾问应读清是付款层还是 hold 层，而不是把「金额大了 / ADR 怪了」当成砍尺令。
- Advisor：用户说「押金才是市场价 / 预授权扣太多」时，先问 Pace 与这是不是 Deposit/Auth 层。多的常是 **付款/hold 层**，不是砍公开尺的许可证。担保释放仍走 **P55**，不是本店改 BAR。

## 6. Expected Impact

方向（无 Fake Precision）：Ahead 保住公开 ADR；押金/预授权成交关在 Deposit/Auth 配置，不污染公开尺。

## 7. Risk

误把真弱夜当「押金所以 Hold」；把押金地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P55/P19/P84/P83 对象当本剧；误把 OPERA Deposit/Auth 屏当 BAR Type；误把 Vendor $ 例当中国 Fact。

## 8. What To Watch

公开 BAR 是否仍 Hold；押金是否仍挂在 Deposit Rules/Payments；预授权是否仍挂在 Authorization Rules；24h 公开 Pickup vs 押金过账/预授权变更（分看）；是否有人把担保放房（P55）与押金改尺混谈。

## 9. Re-evaluation Trigger

Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从押金/预授权地板改写 BAR。担保/6点放房争议 → 切 **P55**。预付产品开关 → 切 **P19**。取消费过账 → 切 **P84**。储值付款 → 切 **P83**。

## 10. Confidence

方向 Medium（有 Pace + 能拆押金/预授权/公开，或至少能标 NV 仍 Hold）。点押金%/预授权额 Low（NV）。Evidence A Vendor PMS（OPERA Deposit + Authorization Rules）+ A 协会指针（HSMAI BAR）。华住押金/预授权 SOP = NV。

## 11. Simulation 指针

见 `cases/sim-2026-deposit-preauth-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 10:17 CST | 首版。P86。押金/预授权≠公开 BAR；Ahead Hold；拒改尺。08:17 不规定 → 本案例核实 leftover 后开。未开 P87。押金/预授权不再 leftover。优先级 MEDIUM。 |
| 2026-08-31 16:17 CST | 理论指针：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。 |

> 源指针（2026-08-31 12:17 R31-12，不改正文）：§95 Cloudbeds *Set up Deposit Policies* + Apaleo *Payment Authorizations*（第二家 Vendor；押金政策/预授权 hold ≠ BAR Type）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。
> 理论指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit**，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本剧仍是押金/预授权 hold。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是押金/预授权 hold。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 指针（2026-09-16 16:17 T16-16，不改正文三句 / 399 / 799）：Confirmation / Stationery · Profile Merge deepen **theory-skip**；§178 复核 only。确认函/并档/预办入住·快退房/改单日志 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P65**（+ **P86**/P01）/ **P08**（+ **P45**/P01）/ **P45**（+ **P01**/P46/P54/P67）/ **P45**（+ **P01**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-1617-theory-skip-confirmation-merge.md`。
