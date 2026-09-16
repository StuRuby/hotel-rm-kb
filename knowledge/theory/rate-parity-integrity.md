# Rate Parity / Integrity｜渠道价平是分销完整尺，不是 Brand.com 按钮

> 资产：T-Parity / T11 下一层（自家渠道比 Brand.com 便宜之后它被允许改什么）· T-Share / T-Reputation / T-Guar 同族（尺子 ≠ 按钮）
> 路径：`theory/rate-parity-integrity.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-27
> 知识类型：Theory + Vendor Methodology + Official Regulation (jurisdiction-labeled) + Best Practice + Hypothesis
> 证据等级：A 协会（HSMAI Academy Glossary：Rate Parity = 各渠道价点的公平场，亦称 Price Parity；Narrow rate parity = **酒店与 OTA 的合同条款**，限制酒店官网价低于该 OTA — §41，**词条不是砍 Brand.com 的许可证，不是中国罚则**）；A Vendor/OTA（Booking Partner Hub How parity works：no / narrow / wide 按物业所在国；GDT 为准 — §40 指针，**公式/档名不在本卡重写**）；A 官方监管（EU Commission DMA：EEA 自 2024-11-14 禁止 Booking 价平条款及等效措施 — **仅 EEA，不是中国** — §40 指针）；B / Hypothesis（真破平只改诊断与便宜侧/映射；不默认砍 Brand.com；今夜公开价仍走 Pace）
> 配套：`advisor-playbooks/rate-parity-breach.md`（P59 过程）· `recommendations/dont-cut-brand-to-match-ota-undercut.md`（主卡复用，不重写）· `metrics/parity-gap.md`（轻指标，公式不重写）· `cases/sim-2026-parity-gap-sat.md`（Simulation）
> 交叉：`theory/share-index-vs-price.md`（T-Share：RGI ≠ BAR）· `theory/reputation-vs-price.md`（T-Reputation：评分 ≠ 弹性 ≠ BAR）· `theory/guarantee-release.md`（T-Guar：混合 OTB ≠ 已卖需求）· `channel/net-contribution.md` / P20（Gross ≠ Net）· P36（可比性先于破平）· P23 / P19 / P27 / P26 / P58（围栏）· P16 · P42 · P18 · P01 / P05
> 问题树：§66「OTA 比官网便宜不是自动砍官网」（过程路由已够；本卡给「为什么这把尺不能重定价 Brand.com」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA extranet / channel manager / Brand.com / 前台，不自动改价，不代客关促销、不代改映射、不代读合同罚则。**
> 状态：**理论 drafted**（2026-08-27 00:17 CST）。**不写 P60，不写新剧本。** 禁止：编中国价平罚则% / 华住 SOP / 佣金差表 / 弹性 / Walk $ / 699；把 EEA DMA 写成中国规则；默认容忍 %；BAR→399「为了价平」；把官网砍到 OTA undercut「对齐」；把 180/14/719/399/799 当市场 Fact；把 719 写成推荐 Brand.com；重写 `parity-gap.md` 公式；重写 P01–P59 正文（P59 仅头一行理论指针）；操作 PMS / RMS / OTA / Brand.com。

---

## 0. 一句话

**自家某一渠道比 Brand.com 便宜之后，这把尺只允许改诊断，不允许自动改 Brand.com BAR。**
价平是同一酒店、**可比公开报价**之间的关系，不是 Comp Set 价，不是需求曲线，更不是报价器。第一闸是产品身份。围栏（会员 / 预付 / 打包 / 切房 / 协议）不是破平。毛价对齐可以净亏损。修的是便宜侧或映射，不是把官网砍下去「看起来平」。本店价平条款 / 平台罚则 / 佣金差 **全部 NV**。

```
Naive（禁止）     美团便宜 80 → 官网砍到一样；Booking 说违约所以 dump Brand.com；
                  会员/预付更低也叫破平；毛价对齐就算合格；EEA 禁了所以中国随便破
本卡              渠道价差已经发生 → 只改诊断（可比？围栏？便宜侧/映射？管辖？）。
                  Brand.com 今夜仍走公开 Pace / Pickup / Remaining（P01 vs P05）。
                  价平尺 ≠ 按钮。过程走 P59。
```

完成标准：用户说「美团比官网便宜，破平了要不要跟」「把官网也砍到一样」「平台说我们违约」→ Situation 写成**同一酒店的两条可比公开报价**（不是 Comp、不是围栏栏）；Diagnosis 写成分销完整信号（产品身份 / 围栏 vs 破平 / 便宜侧）+ 毛≠净 + 管辖标签；What To Watch 写成便宜侧是否收回、Brand.com 是否仍 Hold、该夜公开 Pace，不是「截图数字平了」。**不自动砍、不 dump 399、不对齐到 719、不写 P60。**

顾问必须能直接说的三句（与 P59 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问两边是不是 **同一产品**（房型、取消、含早、税、登录/会员、日期）。不可比就走 P36，不要喊破平。本店价平条款 / 美团·携程违约罚则 / 佣金差 = **NV**，不编中国合同范本。
2. 真破平：先修 **便宜的那一侧或错配的围栏**（关错促销、纠 Channel Manager 映射、收 OTA 侧），不要默认把 Brand.com 也砍下去「对齐」。Hold 官网 779–799 首选 799（Hypothesis / Simulation）。Gross 对齐不等于 Net 划算（P20）。
3. 会员价、预付、打包、切房价本来就可以低于灵活公开价——那是围栏，不是破平。竞对更低走 P16；排名掉了走 P35；前台跟 OTA dump 走 P42。不要把 BAR dump 到 399「为了价平」。
```

独立默认（本库 Hypothesis）：**渠道价差不是定价按钮。** 它回答「这两条**可比公开报价**现在是不是同一产品、便宜的是哪一侧、是不是围栏或映射事故」。它**不**回答「Brand.com 今夜 remaining 该标多少」。Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止把官网砍到 719「对齐」。禁止一夜 ±15%。** 719 = Simulation 里的 OTA undercut，**不是**推荐 Brand.com。

---

## 1. 价平是同一酒店可比公开报价的关系，不是 Comp Set 价

顾问问题不是「哪边数字更小」，是：**当自家某一渠道显示比 Brand.com 便宜，这把尺被允许改什么？**

| | |
| --- | --- |
| **是** | 同一酒店、同一 Stay Date、**可比公开灵活产品** 在 Brand.com（或直销未登录）与具名 OTA 上的报价关系。 |
| **第一闸** | 产品身份：房型、取消政策、早餐、税/费含否、登录 vs 匿名、会员 vs 公开、入住日期。对不上任一维 → **不可比**，走 P36，本卡不点火「破平」。 |
| **不是** | Comp Set 价（那是 P16 / P36 的竞对 shop，或 T-Share 的份额指数）；需求曲线；Brand.com 该标多少；「差 X% 内算平」的容忍线。 |

HSMAI Academy Glossary（A 协会，§41）：Rate Parity = 各渠道「基于价点」的公平场，亦称 Price Parity。本卡钉含义：**那必须是可比价点。** 没有产品身份，就没有价点可比。词条旁边就是 Rate Fences — 价点公平场不是「所有栏位数字必须相同」。**不把 HSMAI 一句话写成砍官网许可证。**

与 Comp 价的分工（对象不同，不要并成一句）：

| 看见 | 比较的是谁 | 走哪 |
| --- | --- | --- |
| 截图里**隔壁店**便宜 80 | 竞对 vs 本店 | **P36** 先可比，再 **P16** |
| **自家**美团比自家 Brand.com 便宜 80 | 本店渠道 vs 本店官网 | **本卡 / P59**（仍先可比） |
| 月报 RGI 掉了 | 本店 vs 命名 Comp Set 的事后份额 | **T-Share / P57** |

gap 算术（`OTA − Brand`；负 = OTA 更便宜；**无默认容忍 %**）**不在此重写**，见 `metrics/parity-gap.md`。本卡只钉：gap 在产品身份成立之前不是破平。

---

## 2. 围栏不是破平

把故意低于灵活公开 BAR 的栏位叫做「破平」，等于把围栏系统拆掉。

| 围栏 | 设计位置 | 走哪 | 不是什么 |
| --- | --- | --- | --- |
| 会员 / 登录 / 闭环客群 | 常低于公开灵活 BAR | **P23** | 不是公开破平 |
| 预付 / 不可退 | 用限制换更低价 | **P19** | 不是灵活价破平 |
| 打包 / opaque / 盲盒 | 产品不同，价应不同 | **P27** | 不是公开灵活破平 |
| 切房 / 批发 allotment | 合同桶，不是公开栏 | **P58** | 不是 Brand.com 应对齐的公开价 |
| 公司协议 / 谈判价 | 合同客群 | **P26** | 不是公开 BAR |

HSMAI 把 Rate Fences 与 Rate Parity 做成相邻词条，不是偶然：公平场管的是**同一公开产品**，围栏管的是**故意不同的产品**。会员更低、预付更低、打包更低、切房更低 — 调用时写「围栏」，不要写「破平」。

**禁止**把登录态截图、含早截图、预付码、批发净价揉进公开灵活 gap。那是 shop-comparability（P36），或围栏（上表），不是 T-Parity 的破平。

---

## 3. 毛价平 ≠ 净贡献

屏幕上看起来「平」，佣金 / 促销折扣 / 投放之后可以净更差。把 Brand.com 砍到 OTA undercut「对齐」，常常是把**最高贡献通道**降到**较低净贡献通道**的毛价。

```
Gross 对齐（画面平）
  ≠ Net Contribution 对齐（P20 / `channel/net-contribution.md`）
  ≠ 贡献利润过 T19 底
```

费率以**用户合同**为准。本库不填假佣金 %、不发明「行业差 X 个点所以该砍」。缺费率仍可以说结构句：砍直销去就 OTA 毛价，方向上稀释直销净；**金额 Unknown 就标 Unknown，不编。**

gap = 0 只说明毛价平。毛平仍可能净不平 → 仍走 P20，不是「价平合格、收工」。

---

## 4. 修的方向是便宜侧（或映射），不是自动 Brand.com dump

这是本卡与 P59 步骤的分工：**P59 给过程，本卡给「为什么次序不能倒」。**

典型窄价平条款（HSMAI Narrow，A 协会词条，§41）：限制的是**酒店官网不得低于该 OTA**。Booking Partner Hub（A Vendor，§40）：narrow = 相对自有线上渠道，该 OTA 应获得相同或更好的价与条件。

因此：

```
OTA 公开灵活 < Brand.com 公开灵活（可比成立）
  对窄条款的「官网不得更低」：官网已经更高 → 不是典型的酒店侧窄条款违约形态
  对顾问：这是分销完整事故候选（错促销 / CM 映射 / OTA 侧价错 / 税币展示）
  不是：「所以必须把 Brand.com 砍下去，让画面变平」
```

**倒过来的 Naive：** 看见 OTA 更便宜 → 先动最高贡献的公开 BAR。那会（1）把映射/促销错误扩散到直销；（2）在毛上看起来「平」的同时恶化净；（3）把一条分销事故训练成新的公开价锚（719 / 399）。

顾问次序（**为什么**，不是把 P59 七形再抄一遍）：

```
1. 产品身份不成立 → 没有破平这把尺（P36）
2. 成立但是围栏 → 没有破平这把尺（P23/P19/P27/P26/P58）
3. 可比公开灵活、OTA 更便宜 → 尺允许改的是：便宜侧、映射、过期促销、展示口径
4. Brand.com 今夜动不动，仍只由该夜公开 Pace / Pickup / Remaining 开门（P01 vs P05）
   「为了价平」不是 P05 的第四个理由
```

假破平常见机制（店内问，不编发生率）：Channel Manager 房型/价码映射错；促销码/神券留着；过期 stop-sell 未关或反着关；币种/含税展示与 Brand.com 不同。这些修的是**分销完整**，不是需求。

合同恐吓（「平台说违约要罚」）不改这次序。条款本身 = **NV**，有则用户读；过程仍先修侧。不编中国罚 %。

---

## 5. 「必须维持价平」是管辖 + 合同句，不是全球按钮

| 说法 | 级 | 管辖 | 对本店 |
| --- | --- | --- | --- |
| Booking Partner Hub：no / narrow / wide 按**物业所在国**；完整措辞在 GDT；解释页冲突时 GDT 为准 | **A Vendor/OTA** | 按国，不是全球一刀 | 指针 §40。不抄成中国 SOP |
| EU DMA：EEA 内自 2024-11-14，Booking 不得施加价平条款及等效措施（如因他渠更低加佣/下架） | **A 官方** | **仅 EEA** | **不得声称中国有同一规则** |
| HSMAI Narrow：合同条款常限制官网低于该 OTA | **A 协会词条** | 词条，不是某店合同 | 证明「价平是合同概念」 |
| 美团 / 携程违约金%、华住价平 SOP、中国已禁止或已强制价平 | — | — | **NV。禁止发明。禁止用 EEA 冒充。** |
| 本店与各 OTA 的书面条款 | — | 本店 | **NV。问，不代答。** |

Expedia Partner Central 条款 PDF 本小时检索命中、**未打开**（§41 搜索词）。不把第三方博客的「Expedia 全球强制价平」写成 Fact。

---

## 6. 假尺子一家亲（同一类误读，不同的那一格）

本卡不是新发现的怪现象。库里已有一族：**画面上的数不是可售 / 需求 / 报价的数。** 本卡入列。一句话，不复述邻卡正文。

| 卡 | 被拧的那一格 | 与本卡的关系 |
| --- | --- | --- |
| **T-Share** | 月报 MPI / ARI / RGI 不是今夜 BAR | 事后**份额**尺。本卡是**分销完整**尺。都不许当报价器 |
| **T-Reputation** | 评分 ≠ 弹性 ≠ BAR | 质量/转化信号。本卡是渠道价差信号。对象不同 |
| **T-Guar** | 放房前混合 OTB 不是已卖需求 | 尺子在库存时点上掺水；本卡尺子在渠道价差上掺水 |
| **T-Status / T-Comp / T06 / T-Hall** | 画面满 ≠ 已卖 / ≠ 客房紧 | 同族假高峰；本卡是假「必须跟价」 |
| **本卡 T-Parity** | 自家渠道价差不是需求，也不是 Brand.com 按钮 | 分销完整信号 |

```
Naive 评分掉 → 砍 BAR          T-Reputation：修内容，Hold BAR
Naive 排名掉 → 砍 BAR          P35：先查库存/比价/内容
Naive RGI 掉 → 砍 BAR          T-Share：指数 ≠ 按钮；今夜仍 Pace
Naive OTA 更便宜 → 砍官网      本卡：尺 ≠ 按钮；修便宜侧；今夜仍 Pace
```

---

## 7. Diagnose → Advise：这把尺被允许改什么

用户原话：「美团比官网便宜 80，我们破平了要不要跟」「Booking 说我们违约」「把官网也砍到一样」。

```
Situation
  两条本店公开报价，不是 Comp、不是围栏栏。
  钉 Stay Date、产品身份清单、两边价、便宜在哪一侧、公开 Pace / Remaining。
  缺可比清单 / 本店条款 / 映射是否错 → 问，不编华住/美团价平 SOP。

Diagnosis
  渠道价差已经发生 = 分销完整诊断。它被允许改的是：
    (1) 故事类型（不可比 / 围栏 / 真破平-便宜侧 / 毛平净亏 / 合同恐吓 / Ahead 借口 / 误入别剧）
    (2) 问句（§8）
    (3) Fact vs Hypothesis 标签（EEA DMA = 管辖 Fact；本店条款 = NV；中国罚则 = 禁止发明）
    (4) 是否先修便宜侧、映射、过期促销 —— 这是分销动作，不是定价动作
  它不被允许改的是：Brand.com BAR（自动）、发明的中国罚 %、把 719/399 写成新公开价。
  某夜真弱 → 可以 bounded move，理由必须是该夜公开 Pace / Pickup / Remaining，不是「为了价平」。

What To Watch
  便宜侧 24h 是否收回；映射/促销是否已纠
  Brand.com 是否仍 Hold
  该 Stay Date 净 Pickup、Pace vs 同 DTA、真 remaining
  公开渠道有没有出现 399 / 把 719 写成官网
  不是截图一个点，不是发明的「差 X% 内算平」
```

过程七形（A 不可比 / B 真破平修侧 / C 围栏 / D Gross≠Net / E 违约威胁 / F Ahead 借口 / G 误入）走 **P59**，本卡**不重复 P59 正文**。

Ahead 或薄 remaining → **P01 / Hold**；厚且 Behind → 才评 **P05**，理由写成该夜需求，**不是**「为了价平」。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 ±15%。禁止 BAR→399。禁止对齐到 719。禁止 P60。**

---

## 8. 顾问要问的（ask-list · 全部 NV，本卡不代答）

这七问就是把「渠道价差已经发生」翻译成「Brand.com 能不能动」的最小输入。**一个都不许替酒店填。**

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | OTA 那条是不是**同一取消 / 早餐 / 税口径**的产品？ | 会把不可比截图写成破平 | **NV** |
| 2 | 截图是**登录**还是匿名？ | 会把会员/App 价当成公开灵活 | **NV** |
| 3 | 是不是**会员围栏**？ | 会把 P23 栏位叫破平，拆掉围栏 | **NV** |
| 4 | 走的是**哪一个促销码**？还开着吗？ | 会把过期神券当成「官网太贵」 | **NV** |
| 5 | Channel Manager **房型码 / 价码**两边对得上吗？ | 会把映射事故扩散成 Brand.com dump | **NV** |
| 6 | 本店与该 OTA 的**价平条款实际写了什么**？（narrow / wide / 无 / 不知道） | 会发明中国罚则，或把 EEA DMA 套过来 | **NV** |
| 7 | **今夜公开 Pace / Remaining** 是多少？ | 没有该夜需求，价平尺开不了 Brand.com 的门 | **NV** |

补充可问（同样 NV）：便宜的是 OTA 侧还是 Brand.com 侧；税/币展示是否含服务费；stop-sell 是否过期。**佣金差、弹性、华住 699、Walk $、违约金%、默认容忍 %：不编，问。**

---

## 9. 常见误读

| 误读 | 实际 |
| --- | --- |
| OTA 更便宜 → 必须砍官网对齐 | 分销完整尺。先修便宜侧。形 B。**719 = undercut，不是推荐 Brand.com** |
| 任意截图都能喊破平 | 先产品身份。不可比走 P36 |
| 会员 / 预付 / 打包 / 切房更低 = 破平 | 围栏。P23/P19/P27/P58。形 C |
| 毛价对齐就合格 | 还要看 Net（P20）。形 D |
| Booking/美团说违约 → 先把官网降下去 | 条款 NV。过程仍修侧。不编罚 %。形 E |
| Pace Ahead 仍要砍「为了价平」 | 需求不弱。P01 Hold。形 F |
| EEA 禁价平 = 中国无义务 / 中国也可随便破 | 管辖不同。两边都不编 |
| 竞对更低所以本店也要跟美团 | 竞对走 P16；本店渠道走本卡。不要并句 |
| 前台跟 OTA dump 叫价平 | 前台口价走 P42 |
| 切房卖不掉所以降公开价叫价平 | 切房桶走 P58 |
| BAR→399「先价平再说」 | **399 = 被拒绝的 dump**，永远不是推荐 BAR |
| gap 公式怎么算我重写一遍就能定价 | 算术在指标卡。本卡回答的是**价差发生之后允许改什么** |

---

## 10. Simulation（诊断例，不是新店 Fact）

复用 P59 `cases/sim-2026-parity-gap-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 14 / 719 / 399 / 799（399 = 被拒绝的 dump；719 = OTA undercut，不是推荐 Brand.com；799 仅 Hypothesis/Simulation）
Remaining                = 14         # Simulation，非真店
Pace                     = Ahead
Brand.com 公开灵活       = 799
美团同产品公开灵活       = 719
gap (OTA − Brand)        = −80
```

读法（与 P59 同句）：可比假设成立时，−80 是**分销完整信号**，不是 Brand.com 该标 719 的许可证。周六 Ahead、remaining 14 → **Hold 779–799，首选 799**；修美团侧（关错促销 / 纠映射 / 找渠道负责人）；拒绝拟议「官网砍到 719」与 dump **399**「价平」。若 719 其实是预付/会员 → 重分类，不是破平。
**14 / 719 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是新 BAR，不是罚则。**399 是被拒绝的 dump，不是推荐 BAR。719 是 sim 里 OTA undercut，不是推荐 Brand.com BAR。**

---

## 11. 证据（2026-08-27 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Rate Parity = 各渠道价点公平场，亦称 Price Parity | **A 协会** | **Known 词条。** 本卡钉：必须是可比价点；相邻 Rate Fences | HSMAI Academy Glossary Rate Parity（**§41**） |
| Narrow rate parity = 合同条款，限制官网价低于该 OTA | **A 协会** | **Known 词条。** 不是本店合同，不是砍官网令 | HSMAI Academy Glossary Rate Parity-narrow（**§41**） |
| no / narrow / wide 按物业所在国；GDT 为准 | **A Vendor/OTA** | **Known 机制名。** 档名不在本卡重写 | Booking Partner Hub How parity works（**§40 指针**） |
| EEA 自 2024-11-14 禁止 Booking 价平条款及等效措施 | **A 官方** | **Known 管辖 = EEA。** 不是中国 | EU Commission DMA 新闻（**§40 指针**） |
| 渠道价差已经发生 → 只改诊断与便宜侧/映射，不自动改 Brand.com；今夜仍 Pace | **B / Hypothesis** | 本库 P59 + T18 闸 | — |
| 本店价平条款 / 美团·携程罚则 / 佣金差 | — | **NV。不编。** | — |
| 中国官方罚则% / 华住价平 SOP / 默认容忍 % / 弹性 / Walk $ / 699 | — | **NV。禁止发明。** | — |

本小时检索：新开 HSMAI Academy Glossary **Rate Parity** + **Rate Parity-narrow**（2026-08-27 打开）。Booking / DMA = §40 指针，不当新发现。Expedia Partner Central 条款 PDF 检索命中、**未打开**。SiteMinder hotel-rate-parity 22:17 Cloudflare 拦，本小时未重锤（HSMAI 已开）。未采用 otalift / HospitalityNet 意见文 / Mews 博客当核页。HSMAI「Rate Integrity」专条 **未找到**（搜索词见 §41）；本卡「价格完整」= 家用：可比产品 + 围栏诚实 + 映射正确 + 毛≠净，不是「毛价数字对齐」。

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-PAR-01 | OTA 是否同一取消/早餐/税产品 | **NV。不代答。** 否 → P36 |
| NV-PAR-02 | 截图登录还是匿名；是否会员围栏 | **NV。** 围栏 → P23，不是破平 |
| NV-PAR-03 | 哪一个促销码；CM 房型/价码是否匹配 | **NV。** 映射/促销事故先修侧 |
| NV-PAR-04 | 本店与该 OTA 书面价平条款写了什么 | **NV。不猜。** 不编中国罚 % |
| NV-PAR-05 | 今夜公开 Pace / Pickup / Remaining | **NV。** 价平尺开不了这个门 |
| NV-P59-01… | P59 已挂（条款 / 罚则 / 佣金差） | 仍 NV |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 00:17 CST | 首版。T-Parity = 渠道价平是分销完整尺，不是 Brand.com 按钮。可比公开报价关系 ≠ Comp Set 价。围栏不是破平。毛平 ≠ 净贡献。修便宜侧/映射，不自动 dump 官网。管辖标签：EEA ≠ 中国。假尺子一族（T-Share / T-Reputation / T-Guar）。不重复 P59 七形，不重写 gap 公式。**不写 P60。** 14/719/399/799 Simulation only。399 = 被拒绝的 dump。719 = OTA undercut，不是推荐 Brand.com。 |

---

## 14. 交叉（不改 P01–P59 正文；P59 仅头一行，邻卡仅文末一行）

- **P59** `advisor-playbooks/rate-parity-breach.md`：过程剧本（七形 A–G、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis / 719-not-Brand.com **不改**。
- **主卡** `recommendations/dont-cut-brand-to-match-ota-undercut.md`：复用，不重写。
- **轻指标** `metrics/parity-gap.md`：算术与无默认容忍 %。本卡不重写公式。
- **T-Share** `theory/share-index-vs-price.md`：RGI ≠ BAR。同族假按钮，对象不同（份额事后 vs 分销完整）。
- **T-Reputation** `theory/reputation-vs-price.md`：评分 ≠ BAR。同族。
- **T-Guar** `theory/guarantee-release.md`：混合 OTB ≠ 已卖需求。同族。
- **P36**：可比性先于破平。不可比不要喊破平。
- **P20** / `channel/net-contribution.md`：Gross ≠ Net。佣金% 仍 NV。
- **P23 / P19 / P27 / P26 / P58**：围栏不是破平。
- **P16 / P35 / P42 / P18**：误入。竞对 / 排名 / 前台 / 促销。
- **P01 / P05**：**今夜公开 Pace 仍拥有公开价。** 本卡不放宽 P05 入口，不加「为了价平」作为砍价理由。
- **禁止一夜 ±15%。禁止 BAR→399。禁止对齐到 719。禁止 P60。禁止编中国罚则、华住 SOP、佣金差、默认容忍 %。**


## 交叉（2026-08-27 02:17，不改三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com）

便宜侧若确认是 **错推 / 错映射**（不是故意促销或真 undercut），过程走 **P60** `advisor-playbooks/channel-mapping-misprice.md`。本卡仍只解释「价平尺不是 Brand.com 按钮」。错价不是市场价格。不要把 Brand.com 砍到错误价。00:17「不写 P60」= theory 槽序，不是永久禁写。
> 交叉指针（2026-08-29 14:17，不改正文）： 价平尺不是 Brand.com 按钮仍本卡。索赔履约 ≠ 改写公开 BAR → **P75**。不写 P76。

> 交叉指针（2026-08-29 16:17，不改正文）：价平尺仍本卡。索赔履约 ≠ 改写公开 BAR → **T-BRG** / P75。假尺子同族。不写 P76。
