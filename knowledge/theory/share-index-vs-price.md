# Share Index vs Price｜份额指数不是定价按钮

> 资产：T-Share / T16 下一层（指数已经发生之后它被允许改什么）· T-Reputation 同族（质量/排名/指数信号 ≠ BAR 按钮）
> 路径：`theory/share-index-vs-price.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-26
> 知识类型：Theory + Best Practice + Hypothesis
> 证据等级：S（STR Glossary：MPI / Occupancy Index、ARI、RevPAR Index / RGI；100 = fair share — §5 / `metrics/mpi-ari-rgi.md`，**公式不在本卡重写**）；S（CoStar Competitive Set Guidelines：至少 4 家参与店、关联/房量限制 — §36，**样本完整性+保密，不是今夜 BAR 公式**）；A 历史（HSMAI 2008 STAR how-to：Index = 本店/Comp×100，100 = fair share；「≥3 家」相对 2026 Guidelines ≥4 **已过时**，不升现行家数 Fact — §36）；B / Hypothesis（指数已经发生 → 只改诊断与问句，不改今夜 BAR；今夜仍走 Pace / Pickup / Remaining）
> 配套：`advisor-playbooks/star-index-misread.md`（P57 过程）· `recommendations/dont-cut-to-chase-rgi.md`（主卡复用，不重写）· `metrics/mpi-ari-rgi.md`（S 公式，不重写）· `market/comp-set.md`（集合怎么选，不重写）· `cases/sim-2026-rgi-drop-sat.md`（Simulation）
> 交叉：`theory/reputation-vs-price.md`（T-Reputation：评分 ≠ 弹性 ≠ BAR）· `theory/guarantee-release.md`（T-Guar：混合 OTB）· `theory/group-inventory-deduct.md`（T-Status）· `theory/complimentary-house-use.md`（T-Comp）· `theory/capacity-ooo.md`（T06）· `theory/function-space-occupancy.md`（T-Hall）· `theory/revenue-strategy.md`（T20：品牌底 ≠ RGI 地板）· P56（预算 miss ≠ 份额 miss）· P01 / P05 · P36 · P35 · P39
> 问题树：§64「RGI 掉了」不是降价理由（过程路由已够；本卡给「为什么指数不能重定价一夜」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA extranet / 前台，不自动改价，不代客改 Comp Set、不代报 STR、不代填中国对标。**
> 状态：**理论 drafted**（2026-08-26 16:17 CST）。**不写 P58，不写新剧本。** 禁止：编中国官方 MPI / ARI / RGI；编「RGI 必须 ≥ X」；编 STR 城市覆盖；编弹性 / 佣金% / 华住 699 / Walk $；把 100 写成 BAR / 品牌地板 / 中国官方线；把月报 RGI 当今夜砍价令；BAR→399 抢份额；一夜 ±15%；重写 `mpi-ari-rgi.md` 公式；重写 P01–P57 正文（P57 仅头一行理论指针）；把 P56 月末日历论证抄成同一诊断；操作 PMS / RMS / OTA / 前台。

---

## 0. 一句话

**份额指数已经发生之后，它只允许改诊断，不允许改今夜 BAR。**
MPI / ARI / RGI 是相对某一**命名集合**的公平份额比。100 是 STR 的 fair-share 标记，不是目标价，不是品牌地板，不是中国官方线。月报 STAR 大多是已经住过、已经卖掉的间夜。砍今夜 remaining **拉不回那些夜**，只重定价还没卖的库存（并稀释本来会卖的 — 稀释**形状**同 P56，病因不同：份额表 ≠ 预算表）。本店 Comp Set / 是否订阅 STR / 中国非 STR 对标 **全部 NV**。

```
Naive（禁止）     RGI<100 → dump 399 抢份额；MPI 不到 100 说明定价高了；
                  把 ARI 写成 BAR 目标；编「RGI 必须 ≥ X」；编中国官方 MPI
本卡              指数已经发生 → 只改诊断（哪一种份额故事、集合/日期/口径是否干净）。
                  今夜仍走 Pace / Pickup / Remaining（P01 vs P05）。
                  100 = fair share，不是按钮。过程走 P57。
```

完成标准：用户说「RGI 掉了降价抢份额」「MPI 不到 100 说明定价高了」→ Situation 写成**指数窗 ≠ Stay Date**；Diagnosis 写成事后尺 + 隐藏分母是集合 + 必须读三连；What To Watch 写成该夜 Pace / Pickup / Remaining，不是月报一个点。**不自动砍、不 dump 399、不写 P58。**

顾问必须能直接说的三句（与 P57 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问指数的集合是谁、哪段日期、口径是不是 STR。没有真 Comp Set 就没有 MPI。
2. 读组合，不读单点。下一步仍看今夜/本周的 Pace、Pickup、Remaining，不按月报 RGI dump。
3. 不要把 BAR dump 到 399「为了把 RGI 拉回来」。RGI 是事后份额尺，拉不回已经卖掉的间夜。
```

独立默认（本库 Hypothesis）：**份额指数不是定价按钮。** 它回答「相对这个集合，这段已经发生的窗，我们拿了多少量/价/RevPAR 份额」。它**不**回答「今夜 remaining 该标多少」。Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 ±15%。**

---

## 1. 100 是公平份额标记，不是目标价

公式、100 = fair share、同口径 RGI ≈ MPI × ARI / 100：**不在此重写**，见 `metrics/mpi-ari-rgi.md`（STR S）。本卡只钉含义。

| | |
| --- | --- |
| **是** | 本店 OCC / ADR / RevPAR 相对某一**命名聚合组**（Comp Set / Market / Submarket）的比 × 100。没有集合，就没有指数。 |
| **100** | STR 的 fair-share 标记：「如果其他条件相同，期望落到 100」。**不是** BAR，**不是** 品牌地板（T20），**不是** 中国统计局 / 文旅部官方线。 |
| **不是** | 目标价；「RGI 必须 ≥ X」的及格线；今夜该不该砍的理由；把 Comp ADR 抄进本店 BAR 的许可证。 |

**禁止发明**「RGI 必须 ≥ 100 / ≥ 105 / 任何 X」。STR 只给 100 = fair share。高于 100 = 相对该组多拿了份额，低于 100 = 少拿了；**都不解释原因，更不给出 BAR。**

集合怎么选、七维、STR 合规（≥4 家、关联/房量限制）：见 `market/comp-set.md`，本卡不重写。合规是样本完整性与保密，**不是**「科学替换」证明，更不是今夜定价公式。

---

## 2. 指数大多是事后尺（ex-post）

顾问问题不是「RGI 是多少」，是：**这个数已经发生之后，它被允许改什么？**

```
月/周 STAR 窗
  已知：这段窗里已经住过、已经卖掉的间夜（Historical STAR 主体）
  未知：今夜 remaining 会不会卖、什么价卖          ← 这是 Pace 的对象，不是指数的对象
  因此：砍今夜 BAR 不能回放已经卖掉的间夜
        只重定价还没卖的库存
        并稀释那些本来会按原价卖掉的间夜
```

这把尺的形状，与库里几把「画面上的数不是杠杆」同类：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Hall** | 厅日记满了 | 客房 remaining + Pace |
| **T-Guar** | 放房前混合 OTB | 放房后真 remaining |
| **本卡 T-Share** | 月报 MPI / ARI / RGI | **该 Stay Date** 的 Pace / Pickup / Remaining |

稀释形状与 **P56** 同族（用还没卖的库存去赔已经锁价的表），病因不同：P56 赔的是**预算/OCC 目标表**，本卡赔的是**份额表**。不要把月末日历论证抄过来当同一诊断。过程分开：预算走 P56，份额走 P57。

Forward STAR / Occupancy on the Books 是另一张表（在手确认，不是 Historical 指数，也不是 Budget — T20 已分）。本卡说的「已经发生」默认指 **Historical** 月/周 STAR。用户若拿 Forward 指数来砍今夜，先问那是不是 OTB 口径，再走 Pace，**仍不是**「指数 < 100 所以 dump」。

---

## 3. 隐藏的分母是集合

指数动了，不等于本店「定价错了」。分母（那个命名组）动了，分子看起来就像错了。

本卡**只点机制，不写过程六形**。形 E / 形 F 的动作顺序在 **P57**，这里不重复。

| 分母怎么动（不是「价高了」） | 顾问先做什么 | 走哪 |
| --- | --- | --- |
| Comp Set 构成变了（奢华非竞品 / 姐妹店 / 换套） | 先审集合，不改 BAR | P57 **形 E** |
| 一家竞对 OOO / 停业 / 停报 | 指数会抖；不是战略失败 | P57 形 D；OOO 本店分母走 T06 / P37 |
| 活动夜 / citywide，组内结构一夜翻转 | 不要周报改价 | P57 形 D |
| mix（团 vs 散、高价房型、渠道）把 ADR 抬高或压低 | ARI 不是 BAR 目标 | P57 形 C |
| 本店 PMS OCC vs STR Comp OCC（OOO / Comp / 报送口径） | 对齐口径再读 | P57 **形 F**；假 MPI 同族 P37，不是砍 BAR |

**没有真 Comp Set → 没有 MPI。** 这不是修辞。指数的定义里就有那个组。组错了，100 这个标记本身没有意义。

---

## 4. 读三连，不读单点

同口径下 RGI ≈ MPI × ARI / 100（已在指标卡，不重写）。所以一个点打不开门。

| 看见 | 是什么故事 | **不是**什么指令 |
| --- | --- | --- |
| RGI 低、ARI 高 | **量份额**弱、价份额不弱 | 不是自动「我们太贵，砍 BAR」 |
| MPI 高、ARI 低 | **便宜份额**故事：用量换价 | 不是自动「再降换更多量」；可能该查是否 underpricing |
| 双低 → RGI 低 | 需求或份额，或集合/口径脏了 | 先拆：市场也弱 vs 只有本店 vs 集合错 |
| 双高 → RGI 高 | 可能真强，或 Comp 选弱了 | **先审套**，不按好看的指数涨 |
| 单看 RGI<100 | 乘积掉了，原因未拆 | **禁止**当砍价令 |

两种句子本身都不是 BAR 指令。下一步永远是**那一夜**的 Pace / Pickup / Remaining（P01 vs P05），不是把月报一个点映射成 ±X%。

---

## 5. 假尺子一家亲（同一类误读，不同的那一格）

本卡不是新发现的怪现象。库里已有一族：**画面上的数不是可售/需求/报价的数。** 本卡入列。一句话，不复述邻卡正文。

| 卡 | 被拧的那一格 | 与本卡的关系 |
| --- | --- | --- |
| **T-Guar** | 放房前混合 OTB 不是需求 | 尺子在**库存时点**上掺水；本卡尺子在**份额事后**上掺水 |
| **T-Status** | 暂定块画面满了不是已卖 | 假高峰；本卡是假「份额失败」 |
| **T-Comp** | 免费/自用抬 OCC 分子 | 假高峰；本卡不抬 OCC，却让人以为「丢了市场」 |
| **T06** | OOO 缩分母 | 假高峰 / 假 MPI；本卡分母是**集合**，不是本店房量 |
| **T-Hall** | 厅满不是客房紧 | 另一把尺；本卡是 STAR 尺不是厅尺 |
| **T-Reputation** | 评分 ≠ 弹性 ≠ BAR | **同族假按钮、不同对象**：质量信号 vs 份额指数。都不许当报价器 |
| **本卡 T-Share** | 月报 MPI/ARI/RGI 不是今夜 BAR | 事后份额尺。100 不是目标价 |

```
Naive 评分掉 → 砍 BAR          T-Reputation：修内容，Hold BAR
Naive 排名掉 → 砍 BAR          P35：先查库存/比价/内容
Naive 预算差 → 砍 BAR          T20 / P56：Budget ≠ Forecast ≠ 今夜需求
Naive RGI 掉 → 砍 BAR          本卡：指数 ≠ 按钮；今夜仍 Pace
```

---

## 6. 中国 / 非 STR

如果本店没有 STR 订阅：

- **没有**官方中国 MPI / ARI / RGI。不要把某平台榜、某集团内部指数、某三家口述 OCC 叫做 STAR。
- 问一个**点名的 3–5 家** primary 集合（客人今晚会并排打开的店）。选法仍走 `market/comp-set.md` 七维，标「非正式 Primary，非 STAR 套」。
- 用店**实际有的** OCC / ADR 比它们：shop、OTA 公开可订、内部报送，能拿到什么用什么。
- 算术仍要有集合：本店指标 / 集合指标 × 100。方法标 **Hypothesis**，永远不是 Fact，更不是 STR。
- 本店 Comp Set / 是否订阅 STR / 对标法 / 某城 STR 覆盖 **全部 NV**。不代答，不编覆盖率，不发明本地指数品牌。

CoStar 中文术语表用同一套词（OCC 指数 / MPI 等）= **STR 产品译名**，不是中国政府另发的官方指数（`market/comp-set.md` 已核）。

---

## 7. Diagnose → Advise：指数被允许改什么

用户原话：「RGI 掉了是不是该降价抢份额」「MPI 不到 100 说明定价高了」「STAR 说 ADR 指数低，跟竞对对齐一下」「这个月份额丢了，最后几天一起 dump」。

```
Situation
  两张表：指数窗（通常月/周 STAR）≠ Stay Date（今夜/本周）。
  钉集合名单、日期窗、口径是不是 STR、用户是想动今夜 BAR 还是做业主报告。
  缺集合 / 订阅 / 对标法 → 问，不编中国官方指数。

Diagnosis
  指数已经发生 = 事后份额诊断。它被允许改的是：
    (1) 故事类型（量份额 / 价份额 / mix / 集合脏了 / 口径脏了）
    (2) 问句（§8）
    (3) Fact vs Hypothesis 标签（无 STR → Hypothesis）
    (4) 是否先改集合或对齐口径（形 E / F）——这是样本动作，不是定价动作
  它不被允许改的是：今夜 BAR、品牌地板、发明的 RGI 及格线。
  某夜真弱 → 可以 bounded move，理由必须是该夜 Pace / Pickup / Remaining，不是月报 RGI。

What To Watch
  该 Stay Date 净 Pickup、Pace vs 同 DTA、真 remaining
  Comp Set 是否仍真对手；指数窗 vs Stay Date 是否仍被揉成一张表
  公开渠道有没有出现 399
  不是月报一个点，不是发明的「RGI 必须 ≥ X」
```

过程六形（A 份额尺当按钮 / B MPI 低当价高 / C ARI 当 BAR 目标 / D 周抖 / E 集合 / F 口径 / G 误入）走 **P57**，本卡**不重复 P57 正文**。

Ahead 或薄 remaining → **P01 / Hold**；厚且 Behind → 才评 **P05**，理由写成该夜需求，**不是**「为了 RGI」。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 ±15%。禁止 BAR→399。禁止 P58。**

---

## 8. 顾问要问的（ask-list · 全部 NV，本卡不代答）

这五问就是把「指数已经发生」翻译成「今夜能不能动价」的最小输入。**一个都不许替酒店填。**

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你们**有没有 STR 订阅**？这份指数是 STAR，还是店内自算，还是某一家 OTA 榜？ | 会把非 STR 数写成 STAR MPI，或发明中国官方指数 | **NV** |
| 2 | **Comp Set 里是谁**？这个月有没有换套？ | 没有真集合就没有指数；换套会让指数动而本店没「定价错」 | **NV** |
| 3 | GM 挥着的是**哪段日期窗**？（本月 / 上周 / 某活动周）和想砍的 **Stay Date** 是不是同一张表？ | 月报弱会被当成今夜弱 | **NV** |
| 4 | 对着的是 **STR OCC** 还是 **PMS OCC**？分母扣没扣 OOO / Comp？ | 假 MPI，形 F | **NV** |
| 5 | **这个周六（他们想 dump 的那一夜）** Pace / Pickup / Remaining 是多少？ | 没有该夜需求，指数不能开门 | **NV** |

补充可问（同样 NV）：ARI 高是不是 mix（团/高价房型/渠道）；一家 Comp 是否 OOO；用户是做业主报告还是要动公开 BAR。**弹性、佣金%、华住 699、Walk $、RGI 地板、某城 STR 覆盖：不编，问。**

---

## 9. 常见误读

| 误读 | 实际 |
| --- | --- |
| RGI<100 → 今夜砍 BAR / dump 399 抢份额 | 事后尺。拉不回已售间夜，只稀释 remaining。形 A。**399 = 被拒绝的 dump** |
| MPI 不到 100 说明定价高了 | 可能是产品、活动日、一家 Comp 关房、或 Comp 选弱。先读三连 |
| ARI 低 → 把 BAR 降到 Comp ADR | ARI 不是 BAR 目标。mix 也会动 ARI |
| 100 是必须达到的目标 / 「RGI 必须 ≥ X」 | 100 = fair share 标记。**禁止发明及格线** |
| 一周指数抖了 = 战略失败 | 活动日或一家 Comp 关房就会抖。不周报改价 |
| 没有 STR 也能报官方中国 MPI | **没有。** 点名 3–5 家，方法 Hypothesis |
| 本店 PMS OCC 对 STR Comp OCC | 分母不同。对齐口径，不砍 BAR |
| 截图隔壁便宜 80 所以 ARI 该降 | **shop ≠ STAR。** 走 P36 |
| 评分/排名掉了所以 RGI 该砍 | 假按钮同族、不同对象。P39 / P35 |
| 月末还差几个点，连份额一起 dump | 预算表 ≠ 份额表。P56 与本卡诊断分开，早会仍一个动作（P45） |
| 品牌底可以先让给 RGI | 品牌底是 T20 约束，**不是** RGI 地板。无地板不发明 699 |
| 公式怎么算我重写一遍就能定价 | 算术在指标卡。本卡回答的是**已经发生之后允许改什么** |

---

## 10. Simulation（诊断例，不是新店 Fact）

复用 P57 `cases/sim-2026-rgi-drop-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 92 / 88 / 104 / 14（399 = 被拒绝的 dump；799 仅 Hypothesis/Simulation）
月报 RGI                 = 92         # Simulation，非真店
MPI                      = 88
ARI                      = 104        # 88 × 104 / 100 ≈ 92：量份额弱、价份额不弱
周六 Pace                = Ahead
Remaining                = 14
Public BAR               = 799
```

读法（与 P57 同句）：月报 RGI 92 **已经发生**，改不了那些卖掉的间夜。周六 Ahead、remaining 14 → **Hold 779–799，首选 799**；拒绝 dump **399**「抢回份额」。指数允许改的诊断是「量份额弱、价份额不弱」；不允许改的是今夜 BAR。
**92 / 88 / 104 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是新 BAR，不是 RGI 地板。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 11. 证据（2026-08-26 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| MPI / ARI / RGI = 本店 OCC/ADR/RevPAR ÷ 组 × 100；100 = fair share | **S** | **Known 定义。** 公式不在本卡重写 | CoStar STR Glossary（**§5 / 指标卡指针**） |
| 没有集合就没有指数；至少 4 家参与店（不含本店）；关联/房量/公司份额限制 | **S** | **Known 合规。** 不是今夜 BAR 公式，不是科学替换证明 | CoStar Competitive Set Guidelines（**§36 指针**） |
| Index = 本店/Comp×100；100 = fair share。家数「至少三家」相对 2026 ≥4 **已过时** | **A 历史** | US 市场个数 **不是** 中国覆盖 | HSMAI 2008 STAR how-to（**§36 指针**） |
| 指数已经发生 → 只改诊断与问句，不改今夜 BAR；今夜仍 Pace | **B / Hypothesis** | 本库 P57 + T18 闸 | — |
| 本店 Comp Set / STR 订阅 / 中国非 STR 对标 | — | **NV。不编。** | — |
| 中国官方 MPI / RGI 地板 / STR 城市覆盖 / 弹性 / 佣金% / 华住 699 / Walk $ | — | **NV。禁止发明。** | — |

本小时检索：未打开**新的**官方「指数怎么读」页。CoStar RevPAR / historical KPIs / FAQs 博文 14:17 **403**，按纪律未重锤。§37 = 指针注 + 搜索词。未采用 HotelAmplify / RevPerfect / myLighthouse 等厂商解读文（非 STR/CoStar/HSMAI 官方）。

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-SHARE-01 | 本店是否订阅 STR | **NV。不代答。** 无则方法 Hypothesis，不发明中国官方 MPI |
| NV-SHARE-02 | Primary Comp Set 名单；本月是否换套 | **NV。不猜。** 没有真集合就没有指数 |
| NV-SHARE-03 | GM 挥的日期窗 vs 想砍的 Stay Date | **NV。** 两张表 |
| NV-SHARE-04 | 对着的是 STR OCC 还是 PMS OCC | **NV。** 形 F |
| NV-SHARE-05 | 想 dump 那一夜的 Pace / Pickup / Remaining | **NV。** 指数开不了这个门 |
| NV-P57-01… | P57 已挂（集合 / 订阅 / 中国非 STR 对标） | 仍 NV |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 16:17 CST | 首版。T-Share = 份额指数不是定价按钮。指数已经发生之后只允许改诊断，不允许改今夜 BAR。100 = fair share 不是目标价。事后尺；隐藏分母是集合；读三连。假尺子一族（T-Guar / T-Status / T-Comp / T06 / T-Hall / T-Reputation）。中国无官方 MPI。不重复 P57 六形，不重写公式。**不写 P58。** 92/88/104/14/399/799 Simulation only。 |

---

## 14. 交叉（不改 P01–P57 正文；P57 仅头一行，邻卡仅文末一行）

- **P57** `advisor-playbooks/star-index-misread.md`：过程剧本（七形 A–G、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-cut-to-chase-rgi.md`：复用，不重写。
- **T16 公式** `metrics/mpi-ari-rgi.md`：算术与 100 = fair share。本卡不重写公式。
- **集合** `market/comp-set.md`：七维与 STR 合规。本卡不重写选套。
- **T-Reputation** `theory/reputation-vs-price.md`：评分 ≠ BAR。同族假按钮，对象不同。
- **T20** `theory/revenue-strategy.md`：品牌底是约束，**不是** RGI 地板。无地板不发明 699。
- **P56**：预算 miss ≠ 份额 miss。稀释形状同族，日历论证不抄。早会仍一个动作（P45）。
- **P36**：shop 截图 ≠ STAR 月报。
- **P35 / P39**：排名 / 评分，同族不同对象。
- **P01 / P05**：**今夜 Pace 仍拥有价动。** 本卡不放宽 P05 入口，不加第四条砍价理由。
- **禁止一夜 ±15%。禁止 BAR→399。禁止 P58。禁止编中国官方指数、RGI 地板、STR 城市覆盖。**


## 15. 交叉（2026-08-27 00:17，不改正文）

自家渠道价差 ≠ Brand.com 按钮，与本卡「份额指数 ≠ BAR」同族假尺子、不同对象 → **T-Parity** `theory/rate-parity-integrity.md`。RGI 仍不是今夜砍 BAR。过程仍 P57。
