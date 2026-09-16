# Playbook P83｜Stored-value / Prepaid Gift Card vs 公开 BAR（储值卡/礼品卡/Prepaid Gift Card 抵房是付款/负债工具，不是公开灵活 BAR；不要把储值抵房地板写成新尺，也不要因储值 mix 看脏 ADR 砍 BAR）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/stored-value-gift-card-vs-bar.md`  
> BACKLOG：P83 Stored-value / Prepaid Gift Card vs Public BAR · **HIGH** · 先诊断枝（本轮同开）· slug **stored-value-gift-card-vs-bar**  
> 状态：**drafted**（2026-08-30 22:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-stored-value.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/stored-value-vs-public-bar.md`（公开 BAR vs 储值/礼品卡付款 vs 发卡金额；**无默认储值抵房折扣 % / 礼品卡面值 Fact**；本店储值 SOP NV）  
> 理论：`theory/stored-value-vs-bar.md`（**T-Stored**，2026-08-31 00:17）；Diagnose 走 T-Stored，过程仍本剧。邻 **P19**（预付不可退产品）/ **P74**（券后展示）/ **P77**（直播专属）/ **P49**（积分兑房）只作交叉，不复写。**不规定 P84。**  
> 理论核源：Oracle OPERA Cloud 26.2 Managing Reservation Prepaid (Gift) Cards（Interface = Stored Value System；Issue Card；Post to Room / Post Payment — 本小时新开）；Oracle OPERA Cloud 24.3 Redeem Prepaid (Gift) Cards（Post Redemption = settlement payment；26.2 Redeem timeout 用同族 24.3 — 本小时新开）；HSMAI Academy BAR glossary（BAR = non-qualified publicly available — §67 指针）；OPERA Cloud 26.2 Redeeming Promotional e-Certificate（促销/e-Certificate ≠ SVS gift card — R29-12 §71 指针）；STR Historical Benchmarking（团 attrition / 散客取消费 → Misc Schedule 4 — 本小时 leftover 排名指针，**不是**礼品卡 Rooms 桶）  
> 交叉：P19 预付不可退产品开关 ≠ 本剧「储值付款改尺」· P74 OTA 券后展示 ≠ 酒店 SVS 礼品卡 · P77 直播专属 ≠ 储值支付 · P49 积分兑房/elite 升 ≠ 现金储值卡 · P38/P14 取消政策 / 高取消 · P54 noshow 收入 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作 · P82 停车 ancillary（邻费族，对象不同）  
> 问题树：§90 「储值卡/礼品卡/Prepaid Gift Card 不是公开 BAR」  
> 仿真：`cases/sim-2026-stored-value-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Managing Prepaid Gift Cards：SVS Issue Card + Post to Room / Post Payment ≠ BAR Type — §88 新开；OPERA Cloud 24.3 Redeem Prepaid Gift Cards：Post Redemption = settlement payment — §88 新开，诚实标注 26.2 timeout）；A 协会（HSMAI BAR glossary — §67 指针）；A 协会指针（STR Historical：attrition/cancellation fees → Misc — leftover 排名用，非礼品卡桶）；指针（§71 e-Certificate ≠ SVS）  
> Last Verified：2026-08-31  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis（STR 礼品卡 Include/Exclude 桶 = **NV**，不写成 Fact）  
> Advisor-First：只建议先拆储值卡/礼品卡/Prepaid Gift Card（付款/负债）vs 公开灵活 BAR、Hold 公开 BAR、拒绝把储值抵房地板写成新尺；**不操作** SVS / PMS / OTA，不自动定价，不代发卡/核销。  
> 禁止：发明华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、佣金%、699；一夜 −15%；BAR→399「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」；把 14/399/799 当市场 Fact；开 P84；把预付不可退产品当本剧主刀（误入 P19）；把 OTA 券后当本剧（误入 P74）；把直播专属当本剧（误入 P77）；把积分兑房当本剧（误入 P49）；把取消/noshow 改尺当本剧（误入 P38/P14/P54）；把团购券当本剧（误入 P18/P74/P27）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 20:17「不要规定 P83」= recap 槽不得指定；本 scout 核实 HIGH 缺口（filename 无专剧；P19≠储值付款改尺；本小时新开 A 级 OPERA SVS 页）后开。储值卡 **不再 leftover**。优先级 **HIGH**。取消费仍 MEDIUM leftover。

---

## 0. 一句话

**储值卡 / 礼品卡 / Prepaid Gift Card 抵房是付款/负债工具，不是公开灵活 BAR。** 先问这是 **OPERA Stored Value System 发卡 + Post Redemption 当付款结账**，还是 **要把公开灵活 BAR 改成「储值抵房地板 / 储值卖爆了所以跟」那个尺**。OPERA：Issue Card 走 SVS；Payment Options = Post to Room 或 Post Payment；Redeem = Post Redemption 结算账户余额——**都不是 BAR Type**。HSMAI：BAR = non-qualified, publicly available；储值/资格付款 ≠ BAR。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」把 BAR 改写成 399。预付不可退产品开关 → **P19**。券后展示 → **P74**。直播间 → **P77**。积分兑房 → **P49**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从储值地板改写 BAR）。本店储值 SOP / 华住字段 / 默认储值抵房折扣 % / 礼品卡面值 Fact = **NV，不编**。

完成定义：一张「先拆储值/礼品卡付款 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 储值/礼品卡 = 公开 BAR** | 「储值抵房就是我们的公开价」 | 用付款/负债工具当尺 | **拆付款工具 vs 公开**；Hold 公开 BAR |
| **B BAR→399「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺」** | 「储值卖爆了，BAR 改 399」 | 把储值地板写成战略尺 | **拒绝 BAR→399** |
| **C ADR dirty because stored-value mix / discount posted into Rooms → dump BAR** | 「ADR 被储值看脏了，公开价砍下来」 | 指标读法 / 过账问题，不是改尺令 | **分看公开 BAR vs 储值付款 vs 发卡金额**；读 posting，不改写 BAR |
| **D 误入预付产品 / 券后 / 直播 / 兑房 / 取消 / noshow** | 「预付 NR / 券后 / 直播价 / 积分房 / 取消费」 | 对象是别的剧本 | **P19** / **P74** / **P77** / **P49** / **P38·P14** / **P54** |
| **E SVS / Issue Card / Post Redemption / Post to Room 当 BAR Type** | 「发卡金额 / 核销过账就是公开价表」 | 把支付/发卡当成 BAR | **支付/发卡 ≠ 定价权**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按储值地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从储值地板改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是储值卡/礼品卡/预付 Gift Card（OPERA：Stored Value System 发卡 + Post Redemption 当付款结账），还是要改公开灵活 BAR。储值抵房 ≠ 公开尺。本店储值 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「储值卡才是市场价 / 储值抵房太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏×」。
3. 预付不可退产品开关走 P19。券后展示走 P74。直播间走 P77。积分兑房走 P49。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从储值地板改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认储值抵房折扣 %、无礼品卡面值 Fact、无「储值太低必须砍 BAR」、无佣金%**。本店储值 SOP / 华住字段 = **NV**。

Vendor / 协会指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Managing Reservation Prepaid (Gift) Cards*（A Vendor PMS，§88 新开）：Issue Card；Interface = **Stored Value System**；Card Number / PIN / Amount；Payment Options：**Post to Room** 或 **Post Payment**；Offline Storage 可不送 SVS。**发卡/过账 ≠ BAR Type。**
- OPERA Cloud 24.3 *Redeem Prepaid (Gift) Cards*（A Vendor PMS，§88 新开；26.2 Redeem timeout，同族诚实标注）：**Post Redemption** 核销金额 **settlement of reservation account balance**；Get Balance；Amount to Redeem ≤ card balance；**Payment(s) will be posted**。**核销 = 付款结算，不是公开价栅格。**
- HSMAI Academy *BAR* glossary（A 协会，§67 指针）：BAR = non-qualified, publicly available。**储值/资格付款 ≠ BAR。**
- OPERA Cloud 26.2 *Redeeming Promotional e-Certificate*（指针 §71）：促销/e-Certificate 锁码 **不是** SVS gift card。不当第三核页。
- STR CoStar *Historical Benchmarking*（A 协会，本小时 leftover 排名指针）：Group attrition + transient cancellation after cutoff → **Miscellaneous Income (Schedule 4)**，不是 Rooms。No-show **revenue** IS Rooms（过程仍 P54）。**不发明 STR 礼品卡 Include/Exclude 行**；礼品卡售出 = 负债/未实现直至核销 → STR 官方桶 **NV** 本小时。

本店储值 SOP / 华住字段 / 默认储值抵房折扣 % / 礼品卡面值 Fact / 佣金% = **全部 NV**。储值卡 **不再 leftover**。取消费仍 **MEDIUM leftover**（不开本剧）。

---

## 1. Situation

钉 **三件事**：①用户说的「储值抵房 / 礼品卡 / 预付 Gift Card / 储值卖爆了」是 SVS 发卡+付款结算，还是要改公开 BAR；②拟议是「BAR→399 / 储值才是市场价 / 储值卖爆了改尺」还是「储值留在付款层、Hold 公开」；③本店 Pace / Remaining，不是「储值听起来更低」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 储值抵房挂牌 / 礼品卡面值 / 客人看到的「用卡后价」（缺则问，不编）
- 是否 OPERA SVS Issue Card / Post Redemption / Post to Room；是否 Offline Storage；是否促销 e-Certificate（那是 §71，不是本剧）
- 拟议：BAR 改成储值地板 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏所以砍
- 本店储值 SOP / 华住字段（NV 不编）
- 用户原话：「储值卡抵房价太低所以公开也得低」「储值卖爆了所以 BAR 改成 399」「ADR 被储值看脏了砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 储值卡/礼品卡/Prepaid Gift Card（SVS 发卡+付款）vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺」？ | 形 B；拒绝 |
| D3 | 因储值 mix / 折扣过账进 Rooms「看脏」ADR 而要 dump BAR？ | 形 C；读 posting ≠ 改尺 |
| D4 | 其实是预付 NR 产品 / 券后 / 直播 / 兑房 / 取消政策 / noshow？ | → P19 / P74 / P77 / P49 / P38·P14 / P54 |
| D5 | SVS / Issue Card / Post Redemption / Post to Room 被当成 BAR Type？ | 形 E；支付/发卡 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不从储值地板改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 储值卡/礼品卡付款 ≠ 发卡金额 ≠ 核销结算。储值留在 SVS Issue / Post Redemption / Post to Room（或 Post Payment），公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因储值折扣误记进 Rooms「看脏」，分看房价 vs 付款/核销 vs 发卡金额；**不要为清洗 ADR 砍公开 BAR**。读 posting ≠ 改尺。礼品卡售出负债桶 STR 官方 = **NV** 本小时，不编。
4. **误入移交**：预付不可退产品 → P19；券后展示 → P74；直播间 → P77；积分兑房 → P49；取消政策/高取消 → P38/P14；noshow → P54；真弱 → P05。团购券不进本剧（P18/P74/P27）。
5. **早会一个动作**（P45）：纠正「储值≠BAR」+ Hold 公开 BAR（或问清是 SVS 付款，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认储值抵房折扣 % / 礼品卡面值；无 Pace 就因「储值低 / 卖爆了」改尺；操作 SVS/PMS。

## 4. Why

- Vendor：Prepaid Gift Card 钉在 **Stored Value System 发卡 + folio/payment**；Redeem 钉在 **Post Redemption 结算账户余额**。设计上是付款工具，不是公开 BAR Type。
- 协会：BAR = non-qualified publicly available。储值/资格付款不是公开灵活尺。
- 指标：储值 mix / 折扣过账可「看脏」ADR——顾问应读清 posting，而不是把「ADR 怪了 / 储值低了」当成砍尺令。STR 礼品卡官方桶本小时 **NV**。
- Advisor：用户说「储值抵房太低 / 卖爆了」时，先问 Pace 与这是不是付款层。低的常是 **支付工具层**，不是砍公开尺的许可证。预付 NR 产品开关仍走 **P19**，不是本店改 BAR。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；储值成交关在付款/SVS，不污染公开尺。
- Risk：误把真弱夜当「储值投诉所以 Hold」；或反过来把储值地板当成必须跟的市场价；误为清洗 ADR 砍 BAR；误把 P19 预付产品当储值付款；误把团购券当 SVS。
- Watch：公开 BAR 是否仍 Hold；储值/礼品卡是否仍挂在 SVS Issue / Post Redemption；24h 公开 Pickup vs 储值核销（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从储值地板改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆储值付款/公开，或至少能标 NV 仍 Hold）。点储值抵房折扣%/礼品卡面值 Low（NV）。Evidence A Vendor PMS（OPERA SVS Issue + Redeem）+ A 协会（HSMAI BAR 指针）。STR 礼品卡桶 NV。Mews gift vouchers CSS Error / allowances 500 = 未开。

## 7. Simulation 指针

见 `cases/sim-2026-stored-value-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 22:17 CST | 首版。P83。储值卡/礼品卡/Prepaid Gift Card≠公开 BAR；Ahead Hold；拒改尺。20:17 不规定 → 本 scout 核实 HIGH 缺口后开。未开 P84。储值卡不再 leftover。优先级 HIGH。取消费仍 MEDIUM leftover。 |
| 2026-08-31 00:17 CST | 理论指针：Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P84。 |

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
> 交叉指针（2026-08-31 04:17，不改正文）：R31-04 复盘无真矛盾；§91 服务 P84 互补（Cloudbeds / Apaleo）。Diagnose 仍走 T-Stored，过程仍本剧。STR 礼品卡 Rooms 桶仍 NV。不写 P85。三句 / 399-rejected / 799-Hypothesis **不改**。
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。本剧仍是储值付款。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P87。
> 交叉指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是储值付款。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。
