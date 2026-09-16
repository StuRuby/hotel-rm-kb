# Guarantee Release｜画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放

> 资产：T-Guar / T-Status 下一层（散客单）· T07×T05 伴生理论卡  
> 路径：`theory/guarantee-release.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-26  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 证据等级：A **Vendor PMS, store-configured**（OPERA Cloud 26.2：reservation type 决定是否从库存扣房；**Deduct Inventory** 勾选=扣、不勾=non-deduct；**Release Time** = 「非担保时房给客人留到几点」的**配置字段**；Standard Reservation Types 例 6:00 PM Hold / Guaranteed by Credit Card / Guaranteed by Company；Non-Deduct 例 **4 PM release**；Auto No Show Arrivals / **Rolling No Show** 是 EOD 店配控制；Deposit 勾选**仅信息性**，押金要求由 deposit rule schedules 定 — §31 + §33，**不是华住 SOP、不是中国统一放房点**）；A 协会词条（HSMAI：guaranteed = 客人有**信用卡或其他付款形式**担保；overbooking 依 **history of no-shows and last-minute cancellations** — §31 指针）；B Vendor 概述（roommaster 2026-08-03：guaranteed 由卡/押金/公司合同背书、non-guaranteed 只留到 cut-off「often 4 or 6 PM」、tentative 不该当已确认收入、过 cut-off 再卖是**有意超售决定** — §33 新开；**厂商概述，不是中国 practice**）；S 报送口径（STR Historical：no-shows **exclude** from Rooms Sold — §22 指针，**ex-post**）；B / Hypothesis（放房前不提前 dump；不按含 hold 的 OCC Increase BAR；放房后重算 remaining + Pace）  
> 配套：`advisor-playbooks/guarantee-type.md`（P55 过程）· `recommendations/dont-dump-on-nonguaranteed.md`（主卡复用，不重写）· `metrics/guarantee-mix.md`（轻指标）· `metrics/occ.md`（hold 误读行）· `cases/sim-2026-6pm-hold-sat.md`（Simulation）  
> 交叉：`theory/group-inventory-deduct.md`（T-Status 团块扣不扣，本卡的上一层）· `theory/complimentary-house-use.md`（T-Comp 分子）· `theory/capacity-ooo.md`（T06 分母）· `theory/function-space-occupancy.md`（T-Hall 另一把尺）· `metrics/noshow.md` / P54（ex-post）· P24（历史卖限）· P14（到店前取消）· P01 / P05（放房后才用）  
> 问题树：§62 「一半是 6 点保留算不算卖了」「反正会放先挂着」「高峰只收担保单」  
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA extranet / 前台，不自动改价，不代客配置 reservation type、Release Time、Rolling No Show。**  
> 状态：**理论 drafted**（2026-08-26 08:17 CST）。**不写 P56，不写新剧本。** 禁止：编中国担保/押金 SOP；编押金比例；编「标准放房时点」；编 no-show% / hold 转化率 / Walk 成本 / OTA 佣金% / 点弹性；把 OPERA 4 PM / 6 PM 当中国 practice；把 OPERA / roommaster 写成华住字段表；把 Rolling No Show 假设成开着或关着；把预计释放当真 remaining；按混合 OTB 的 OCC Increase BAR；提前 dump；BAR→399；一夜 ±15%；重写 P01–P55 正文（P55 仅头一行、邻卡仅文末一行）。

---

## 0. 一句话

**画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放。**  
一张预订占不占库存，是本店把这个 **reservation type 配成 Deduct 还是 Non-Deduct** 决定的，不是「担保 / 非担保 / 6 点保留」这几个字决定的。放房时点之前的 OTB 是**混合量**：一部分是已承诺的需求，一部分是会按钟点蒸发的 hold。**释放是一个事件，不是一个预测** — 放房前不知道 hold 会转多少，放房后 remaining 才是真的。本店类型表 / Deduct 映射 / 实际放房时点 / Rolling No Show **全部 NV**。

```
Naive（禁止）     OTB 120 就是卖了 120；反正 6 点会放先 dump 399；一半非担保所以今晚需求弱；
                  「6 点放房」是行业规矩；OPERA 4 PM 就是中国放房点
本卡              先问类型怎么配（Deduct / Non-Deduct）+ 几点放 + Rolling 开没开。
                  放房前：OTB 是混合量，不当需求，也不当弱市证据。
                  放房后：真 remaining + Pace → 才交给 P01 / P05。过程走 P55。
```

完成标准：用户说「今晚一半是 6 点保留，算不算卖了」「反正到点会放，先挂着 / 先降」→ Situation 写成**两个库存 + 一个时点**（deduct 扣除 vs 画面占用 vs 释放事件）；Diagnosis 写成放房前 OTB 混合、Non-Deduct 不进可售扣除、Rolling 可能让画面继续占着；What To Watch 写成**放房后**的真 remaining + Pace。**不自动涨、不提前 dump、不 dump 399、不写 P56。**

---

## 1. 三把尺：标签 ≠ 店配 ≠ 时点

| | |
| --- | --- |
| **标签（词）** | 「Guaranteed」「非担保」「6 点保留」只是本店给 reservation type 起的名字。HSMAI：guaranteed = 客人有**信用卡或其他付款形式**担保（A 词条，无 %）。**两家店可以用同一个词、算出不同的可售。** |
| **店配（真正动可售的开关）** | OPERA Cloud 26.2：reservation type **决定这张单是否从库存扣房**；配置页 **Deduct Inventory** 勾选=扣一间，不勾=**non-deduct，不从 inventory count 扣**。Non-deduct 默认**不进** availability 计算，只有选了 Non-deduct Rooms Sold / Available Rooms with Non-deduct 视图才看得见。**Vendor PMS、store-configured。** |
| **时点（释放事件）** | OPERA 26.2 配置页 **Release Time** = 「非担保情况下房给客人留到几点」的**输入字段**（Distribution Guarantee Type = None 时可填）。文档举例 Non-Deduct 用于 **4 PM release**、Standard Types 举例 **6:00 PM Hold**。**这些是厂商示例值，不是中国统一放房时点。** 本店实际几点 **NV**。 |
| **真 remaining** | Capacity − （已扣库存的占用 + 其他付费占用）− OOO。**Non-Deduct / hold 类型不算已卖。** 放房前的「预计会放出来」也**不算**已到手的可售。 |
| **押金 / 担保媒介** | OPERA 配置页 Deposit 勾选**仅信息性**，押金要求由 **deposit rule schedules** 另配；另有 CC Pending Days + Auto Mass Cancel（未收到卡/押金则自动取消）。**押金比例、担保媒介 = 本店政策，NV，不编 %。** |

**禁止**把 Non-Deduct / hold 类型当成已卖 Sold 再拿去涨 BAR 或打 MPI；也**禁止**把「预计释放」当成已经到手的 remaining 拿去 dump。

---

## 2. 「分母/分子不干净」一家人（同一类误读，不同的那一格）

本卡不是新发现的怪现象，是本库同一族的第五张：**画面上的数不是可售/需求的数。**

| 卡 | 被拧的那一格 | 与本卡的关系 |
| --- | --- | --- |
| **T-Status**（`theory/group-inventory-deduct.md`，P53） | 团块 Definite vs Tentative **扣不扣可售** | **本卡的上一层。** 那张是**团块**的状态轴；本卡下到**单张散客单**的担保类型轴。同一个 Deduct / Non-Deduct 机制 |
| **T-Comp**（`theory/complimentary-house-use.md`，P47） | 免费/自用抬**分子**（占物理房、不进历史 Sold） | 本卡可能**不改分母**（Non-Deduct 不进可售扣除），却让**画面**看着满 |
| **T06**（`theory/capacity-ooo.md`，P37） | OOO 缩**分母** | 本卡是**分子里掺了会蒸发的 hold**。两边都不是需求变强 |
| **T-Hall**（`theory/function-space-occupancy.md`，P51） | 厅占用**根本不进**客房 OCC | 两边都是「假高峰尺」。厅满 ≠ 客房紧；OTB 满 ≠ 房已卖掉 |
| **本卡 T-Guar** | 放房点**之前**的 OTB 是混合量：已承诺需求 + 到点蒸发的 hold | 由它算出的 **OCC / Remaining 继承这个混合** |

roommaster（B Vendor 概述）同向：tentative **不该**当已确认收入，那样会 **inflate occupancy forecasts**。本库把这句只当**同向佐证**，不当中国 SOP，也不引用它的推荐类型表当动作。

```
Naive 混合 OTB 的 OCC → Increase BAR      像拿厅满涨、拿 Comp 92% 涨、拿暂定 OCC 涨
本卡                                       尺被拧了。先问扣不扣 + 几点放，再看放房后的真 remaining
Naive 反正会放 → 先 dump 399               把「预测」当成「已发生的事件」
本卡                                       释放没落地，真 leftover 还不存在。禁止 BAR→399
Naive 「6 点放房是行业规矩」                OPERA 4 PM / 6 PM 是厂商示例；roommaster「often 4 or 6 PM」是厂商概述
本卡                                       本店 Release Time 是配置值。问，不编
```

---

## 3. 释放是事件，不是预测（顾问规则 = 次序）

这是本卡最核心的一句，也是它与 P55 步骤的分工：**P55 给过程，本卡给「为什么次序不能倒」。**

```
放房点之前
  已知：OTB 的间夜数、各类型的名字（如果用户给了）
  未知：这些 hold 里有多少会真的来 / 有多少会到点释放      ← 转化率 NV，本库不编
  因此：画面 OCC 偏乐观（含 hold），预计释放偏乐观（还没发生）
  两个方向都不构成动作理由 → Hold

放房点（事件发生）
  Non-Deduct / 到点未到的单按本店配置释放；
  Rolling No Show 若开着，所选类型可能**不释放**、把到达日往后滚      ← 见 §4

放房点之后
  remaining 是真的 → 才有资格进 P01（薄/Ahead）或 P05（厚/Behind）
```

推论（本库 Hypothesis，与 P55 三句同一套，不另发明第四条定价规则）：

1. **不为「预期会释放」提前 dump。** 预计释放不是当前的弱需求证据，只是一张还没发生的日程。
2. **不按掺了非担保 hold 的 OCC Increase BAR。** 那个分子里有一部分会在钟点上蒸发。
3. **高峰要收紧担保，只改「新生产」**（新订单要求担保媒介 / 给浅预付选择），不追溯改已确认客人的条款 — 那是合同问题，不是收益动作。
4. 幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 ±15%。禁止 BAR→399。**

---

## 4. Rolling No Show：画面可以继续占着，而没有真实到店

OPERA Cloud 26.2 EOD（§31，Vendor PMS 店配控制）：

- **Auto No Show Arrivals**：EOD 把预期到达改为 No-show 状态。
- **Rolling No Show / Preference**：**所选 reservation type 不自动 no-show，而是把到达日往后滚。**

对顾问的含义：**一个画面上的占用可以在没有任何真实到店的情况下持续存在。** 如果本店对某些类型开了 Rolling，那么「今晚 OTB 里这几间」既没有到店、也没有释放回可售，而画面照旧占着。

**动作：问本店的控制怎么设，不假设。** 不要假设开着（否则把可售算少），也不要假设关着（否则把释放算成必然发生）。本店 Rolling 控制 **NV**。

---

## 5. 与 ex-post 的三件事分清（本卡是 ex-ante）

**担保类型是 ex-ante 的库存问题：这张单现在占不占可售、到点会不会放。** 下面三件是别的时点、别的剧本：

| 分清 | 那是什么 | 走哪里 |
| --- | --- | --- |
| **已经发生的 no-show** | **ex-post 过账/状态**：到达日没入住，Night Audit 转 no show；可按 First Night / All Nights / Deposit Only 过账（§30 Vendor PMS）。STR 报送：no-shows **exclude** from Rooms Sold（§22） | **P54** `advisor-playbooks/transient-noshow.md` · `metrics/noshow.md`。**不是本卡** |
| **基于 no-show 历史的超售卖限** | HSMAI：overbooking 依 **history of no-shows and last-minute cancellations**（A 词条）。roommaster 同向：过 cut-off 把房再卖给别人**本身就是一个有意的超售决定** | **P24**。历史/算法层，不是今晚一夜报复。Walk 成本 **NV，不编** |
| **到店前取消 / Soft OTB** | 客人在到达前退掉；OTB 质量问题，但不是「到点释放」这个机制 | **P14**。取消窗口改新生产走 P38；预付产品走 P19 |

一句话对照：**本卡问「这张单现在算不算已卖、几点会放」；P54 问「已经没来了怎么办」。** 前者是 ex-ante 的库存含义，后者是 ex-post 的过账与回库。

---

## 6. Diagnose → Advise

用户原话：「今晚一半是 6 点保留，算不算卖了」「反正到点会放，先挂着 / 先降」「高峰要不要只收担保单」

```
Situation
  两个库存 + 一个时点：deduct 扣除 / 画面占用 / 释放事件。
  钉 Stay Date、Physical、BAR、OTB 总间夜；把 OTB 拆成 担保 / 非担保·到点释放 / 未知。
  缺本店类型表、Deduct 映射、Release Time、Rolling 控制 → 问，不编中国 SOP。

Diagnosis
  Non-Deduct / hold 类型 → 不算已卖；画面 OCC 是混合尺（假高峰）。
  「预计会放」→ 事件未发生；真 leftover 还不存在（不是弱市证据）。
  Rolling 开着 → 画面可继续占用而无真实到店；重算真 remaining。
  已 no-show / 卖限 / 取消窗 / 预付 / 前台口价 / 团块 → 离开到 P54 / P24 / P38 / P19 / P42 / P53。

What To Watch
  各担保类型的**间夜数**（不是 %，本库无默认占比）
  本店 Deduct 映射 / 实际 Release Time / Rolling 控制
  放房**之后**的真 remaining + 净 Pickup + Pace（P01/P03）
  公开渠道有没有出现 399
  不是混合 OTB 的画面 OCC%、不是发明的 hold 转化率、不是编的押金%
```

放房后：薄或 Pace Ahead → **P01 / Hold**；厚且 Pace Behind → 才评 **P05**，理由写成「真 leftover」，**不是**「反正非担保」。过程六形（A 假已卖 / B 提前 dump / C 真 leftover / D 高峰担保闸 / E Rolling / F 误入）走 **P55**，本卡**不重复 P55 正文**。

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

这五问就是把「画面数」翻译成「可售数」的最小输入。**一个都不许替酒店填。**

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你们这边**有哪些预订类型**？名字怎么叫（担保/非担保/保留到几点/押金待收…）？ | 只能按标签猜，会把不同店的同名类型算成同一件事 | **NV** |
| 2 | 这些类型里**哪些是从可售里扣房的（Deduct）**、哪些不扣（Non-Deduct）？ | 分不清画面占用与可售扣除，OCC/Remaining 都不干净 | **NV** |
| 3 | **实际放房时点是几点**？（不是 OPERA 文档里的 4 PM / 6 PM 示例） | 会把厂商示例当成本店规则 | **NV** |
| 4 | **Rolling No Show 开着吗**？对哪些类型开？ | 会把画面占用当到店，或把释放当必然发生 | **NV** |
| 5 | **今晚 OTB 里，非扣库存/hold 类型占多少间夜**？（要间夜数，不要百分比） | 无法算放房前后的两个 remaining | **NV** |

补充可问（同样 NV）：担保媒介是什么（卡 / 押金 / 公司合同）；押金要求由哪条 schedule 定；OTA 单的担保由平台机制还是本店政策管。**押金比例、no-show%、hold 转化率、Walk 成本、OTA 佣金%、点弹性：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| OTB 120 = 卖了 120 | 放房点之前 OTB 是**混合量**。Non-Deduct / hold 不算已卖。形 A |
| 「担保」这个词就代表扣库存 | **词不决定机制。** Deduct / Non-Deduct 是本店配置开关（OPERA 配置页勾选框）。同名不同算法 |
| 反正 6 点会放 → 现在先 dump 399 | 释放**没落地**，真 leftover 不存在。形 B。399 = 被拒绝的 dump，永远不是推荐 BAR |
| 一半是非担保 → 今晚需求弱 → 降价 | 担保质量 ≠ 需求强弱。要的是放房后的 remaining + Pace |
| 混合 OTB 的 OCC 很高 → Increase BAR | 分子掺了会蒸发的 hold。形 A。不按它涨 |
| 「6 点放房是行业/中国规矩」 | OPERA 4 PM / 6 PM 是**厂商示例**；roommaster「often 4 or 6 PM」是**厂商概述**。本店 Release Time 是配置值，**NV** |
| 画面还占着 = 客人已到店 | **Rolling No Show** 可能把到达日往后滚：占用持续、无真实到店。形 E。问控制 |
| 非担保就是 no-show | 一个是 **ex-ante** 库存类型，一个是 **ex-post** 已发生未到（P54 / `metrics/noshow.md`） |
| 高峰只收担保 = 把已确认客人改条款 | 担保闸只改**新生产**。已确认客人的条款不追溯改。形 D |
| 押金收 30%（或任何比例） | **不编。** OPERA Deposit 勾选仅信息性，押金由 deposit rule schedules 定；本店比例 **NV** |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P55 `cases/sim-2026-6pm-hold-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 120 / 18 / 14（399 = 被拒绝的 dump；799 仅 Hypothesis/Simulation）
Physical rooms          = 180        # Simulation，非真店
OTB                     = 120        # 混合量：含 18 间非担保 / 6pm hold
Non-guaranteed / hold   = 18
Screen remaining        = 14
Public BAR              = 799
```

读法（与 P55 同句）：放房前 **120 不是 120 间需求**，14 也不是「只剩 14」的全部故事 — 那 18 间的归属要到释放事件之后才知道。**不按混合 OCC 涨；不提前 dump；禁止 BAR→399。** 放房后：薄/Ahead → P01 或 Hold（Hold 779–799 首选 799，**Hypothesis / Simulation**）；厚且 Behind → 才评 P05。  
**180 / 120 / 18 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是新 BAR，不是担保占比常模。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-26 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| reservation type 决定是否从库存扣房；**Deduct Inventory** 勾选=扣一间，不勾=non-deduct（不从 inventory count 扣） | **A Vendor PMS, store-configured** | **Known 机制**，码名与勾选由店配 | OPERA Cloud 26.2 Configuring Reservation Types（**§33 本轮新开**） |
| **Release Time** = 「非担保时房留到几点」的配置字段（Distribution Guarantee Type=None 时可填） | **A Vendor PMS, store-configured** | **Known 字段。** 具体时点 = 店配值，**不是行业常数** | 同上（§33） |
| Deposit 勾选**仅信息性**，押金要求由 **deposit rule schedules** 定；CC Pending Days + Auto Mass Cancel 可自动取消未收卡/押金的单 | **A Vendor PMS, store-configured** | **Known 能力。** 押金**比例** NV，不编 | 同上（§33） |
| Standard Reservation Types 例 **6:00 PM Hold / Guaranteed by Credit Card / Guaranteed by Company**；Non-Deduct 例 **4 PM release**；non-deduct 默认不进 availability 计算 | **A Vendor PMS, store-configured** | **Known 示例**，**不是**华住字段表，**不是**中国放房点 | OPERA Cloud 26.2 Reservations（**§31 指针**） |
| **Auto No Show Arrivals**（EOD 转 No-show）；**Rolling No Show**：所选类型不自动 no-show、**滚到达日** | **A Vendor PMS, store-configured** | **Known 控制。** 本店开没开 **NV** | OPERA Cloud 26.2 About End of Day / Controls—EOD（**§31 指针**） |
| guaranteed = 客人有**信用卡或其他付款形式**担保 | A 协会词条 | **Known 定义，无 %** | HSMAI Academy Glossary · Guaranteed（**§31 指针**） |
| overbooking 依 **history of no-shows and last-minute cancellations** 谨慎做 | A 协会词条 | **Known 方向 → P24**，不是本卡动作 | HSMAI Academy Glossary · Overbooking（**§31 指针**） |
| guaranteed 由卡/押金/公司合同背书；non-guaranteed 只留到 cut-off「often 4 or 6 PM」；tentative 不该当已确认收入（会 inflate occupancy forecasts）；过 cut-off 再卖 = **有意超售决定** | **B Vendor 概述（厂商博文，2026-08-03）** | **同向佐证**：Deduct/hold-release 概念**不只 OPERA 有**。「4 or 6 PM」= **厂商概述，不是中国 practice**。其推荐类型表**不采用**为动作 | roommaster · Types of Reservation in the Hotel Industry（**§33 本轮新开**） |
| no-shows **exclude** from Rooms Sold | S 报送口径 | **Known，ex-post**，不是今晚定价公式 | STR Historical Benchmarking Guidelines（**§22 指针**） |
| 放房前不提前 dump；不按混合 OCC 涨；放房后按真 remaining + Pace | **B / Hypothesis** | 本库 P55 + T18 闸 | — |
| 本店类型表 / Deduct 映射 / 实际 Release Time / Rolling 控制 / 今晚非担保间夜 | — | **NV。不编。** | — |
| 中国担保·押金 SOP / 押金% / 标准放房时点 / no-show% / hold 转化率 / Walk $ / OTA 佣金% / 点弹性 | — | **NV。禁止发明。** | — |

未采用：roommaster 的「Recommended Type」框架当动作（厂商博文，非本库决策规则）；OPERA 「unconfirmed reservations 30 分钟释放」一句（搜索摘要出现在 25.5/26.1 同名页，本轮**未在 26.2 页逐字复核** → 不作论断）；HSMAI `no-show/` 与 `guaranteed-reservation/`（**已 404，本轮按纪律未重试**）。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-GUAR-01 | 本店有哪些 reservation type（名字） | **NV。不编。** 问，不套 OPERA 名 |
| NV-GUAR-02 | 哪些类型 **Deduct** / 哪些 Non-Deduct | **NV。不编。** 问「这张单从可售里扣不扣」 |
| NV-GUAR-03 | 本店**实际放房时点** | **NV。不编。** OPERA 4 PM / 6 PM 是厂商示例 |
| NV-GUAR-04 | **Rolling No Show** 是否开、对哪些类型 | **NV。不假设开也不假设关。** |
| NV-GUAR-05 | 今晚 OTB 里非扣/hold 类型的**间夜数** | **NV。** 要间夜，不要 % |
| NV-GUAR-06 | 担保媒介 / 押金要求（哪条 schedule、多少） | **NV。不编押金 %。** |
| NV-GUAR-07 | hold 到店转化率 / 本店 no-show% | **NV。不编。** no-show 已发生走 P54 |
| NV-P55-01… | P55 已挂（本店类型、放房时点、押金、Rolling） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 08:17 CST | 首版。T-Guar = T-Status 的散客对应面。画面 OTB 还不是需求；先问扣不扣、几点放。释放是事件不是预测。Rolling No Show 可让画面占用而无到店。ex-ante（本卡）vs ex-post（P54/P24/P14）分清。§33 新开 OPERA 26.2 Configuring Reservation Types + roommaster 类型概述。主卡复用 `dont-dump-on-nonguaranteed.md`，不重写。不重复 P55 六形正文。**不写 P56。** 180/120/18/14/399/799 Simulation only。 |

---

## 13. 交叉（不改 P01–P55 正文；P55 仅头一行，邻卡仅文末一行）

- **P55** `advisor-playbooks/guarantee-type.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。  
- **主卡** `recommendations/dont-dump-on-nonguaranteed.md`：复用，不重写。  
- **T-Status** `theory/group-inventory-deduct.md`：团块「扣不扣」。**本卡是它下一层**（单张散客单的担保类型轴），同一个 Deduct / Non-Deduct 机制。  
- **T-Comp** `theory/complimentary-house-use.md`：抬分子（$0 占房）。本卡是**分子掺 hold**。  
- **T06** `theory/capacity-ooo.md`：缩分母（OOO）。本卡不缩分母，却让画面看着满。  
- **T-Hall** `theory/function-space-occupancy.md`：厅占用不进客房 OCC。同族「假高峰尺」。  
- **P54** / `metrics/noshow.md`：**ex-post** 已发生未到与过账。本卡 **ex-ante**。  
- **P24**：历史 no-show / last-minute cancellations 支撑卖限与 walk（HSMAI 同向）。**不是**一夜报复。Walk $ NV。  
- **P14**：到店前取消 Soft OTB。**不是**到点释放机制。P38 = 新生产取消窗口；P19 = 预付产品。  
- **P01 / P03**：**放房之后**的真 remaining + Pace 才是输入。  
- **P05**：leftover 只在**释放落地 + Pace Behind** 之后成立，理由不是「反正非担保」。  
- **P42** = 前台口价；**P53** = 团块扣不扣。  
- **禁止一夜 ±15%。禁止 BAR→399。禁止 P56。禁止编中国担保/押金 SOP、押金%、标准放房时点、no-show%、hold 转化率。**

## 14. 交叉（2026-08-26 18:17，不改 Deduct / Release Time 正文）

同一句「先问扣不扣、几点还」用到 **渠道合同切房** 走 **P58** `advisor-playbooks/channel-allotment-unsold.md`。本卡对象仍是散客 reservation type。渠道 allotment 的扣不扣 / 还房时点是合同+店配，**NV**，不编美团小时。释放仍是事件不是预测：还房前不 dump 公开 BAR。
