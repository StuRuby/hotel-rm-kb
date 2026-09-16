# Paid Upsell Differential｜付费升房与房型差价（空差价是可卖的）

> 资产：T-Upsell / T04·T05 下一层（空着的更高房型被允许改什么）· T19 贡献同链 · P49 免费侧孪生
> 路径：`theory/paid-upsell-differential.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-27
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.1 Reservation Upgrade Rules / Managing Upgrade Offers：From→To + 加价公式 + 单独 Transaction Code + 前台可见报价 + Upsell 报告 — §44，**机制不是华住/本店升房价表**）；A 协会（HSMAI Americas Sales Advisory Board：ancillary / total contribution；不报价不转化 — §45）；B / Hypothesis（空着的更高型是可卖差价/期权；高峰默认付费路径；套房空 ≠ dump 该型 BAR；779–799 / 979–999）
> 配套：`advisor-playbooks/paid-upsell-upgrade.md`（P61 过程）· `recommendations/dont-give-away-paid-upgrade.md`（主卡复用，不重写）· `metrics/upsell-take-rate.md`（offers/accepted/revenue；free vs paid split；**无默认 take-rate %**，公式不重写）· `cases/sim-2026-paid-upsell-sat.md`（Simulation）
> 交叉：`theory/profit-contribution.md`（T19：付费加价是增量贡献候选；免费升 $0 增量房费）· `pricing/room-type-differential.md`（P13/P34 价梯尺，不重写 % 带）· P49 `loyalty-award-upgrade.md`（免费 SA / award）· P13 `room-type-compression.md`（卖梯/关型）· P34 `room-type-differential.md`（倒挂）· P47 · P42 · P05 · P02 / P19 · P01
> 问题树：§68「套房空着不是免费升的理由」（过程路由已够；本卡给「为什么空差价是期权/可卖产品」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA / 前台收银，不自动改价，不代录升房单、不代改公开 BAR。**
> 状态：**理论 drafted**（2026-08-27 08:17 CST）。**不写 P62，不写新剧本。** 禁止：编华住升房价表 / Fact +¥ 行业常模 / 默认 take-rate % / 佣金% / 弹性 / Walk $ / 699；高峰默认免费送；套房 BAR→399「反正空着」；一夜 −15%；把 4/10/799/999/399/+200–300 当市场 Fact；把免费升写成 OCC 策略；重写 `upsell-take-rate.md` 公式；重写 P01–P61 正文（P61 仅头一行理论指针；邻卡仅文末一行）；操作 PMS / RMS / OTA / 前台。

---

## 0. 一句话

**空着的更高房型是库存期权与可卖差价，不是免费人情，也不是把该型公开 BAR dump 到 399 的许可证。**
标准紧或客人要上一级时，套房/高档空着 = 还能卖一层阶梯（付费升），不是「反正空着不如送」。付费升（T-Upsell / P61）与会员免费升（P49）是**两个决策对象**；塌成「升了就行」会同时烧掉贡献与套房卖相。本店升房价表 / 华住 upsell SOP / 升房收入口径 **全部 NV**。

```
Naive（禁止）     套房空着 → 免费升标准客；标准满了 → 套房砸到 399；
                  意思一下 50；升房不算所以不推；把免费升当 OCC 策略
本卡              空差价 = 可卖期权。高峰/标准紧 → 付费路径默认。
                  空 ≠ 免费；空 ≠ leftover demand。过程走 P61。
```

完成标准：用户说「反正套房空着免费升了得了」「标准满了套房降到 399」「意思一下 50」「升房不算」→ Situation 写成**分型 Remaining + 付费 vs 免费**；Diagnosis 写成期权/差价可卖 + 空≠免费 + 空≠砸该型 BAR；What To Watch 写成付费报价/接受、套房公开是否 Hold、标准 Pace，不是「套房 OCC 填满了」。**不自动送、不 dump 399、不写 P62。**

顾问必须能直接说的三句（与 P61 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问今晚标准是否紧、套房剩余几间、客人是付费升还是会员免费升。会员免费升走 P49。空着的套房差价是可卖的，不是必须送掉的人情。本店升房价表 / 华住 upsell SOP = NV，不编。
2. 高峰或标准已紧：前台默认报价付费升，不要默认免费送。套房公开 BAR Hold（若在卖）或按本店梯队；不要把套房 dump 到 399「反正空着」。
3. 弱夜套房厚、标准也松：付费升仍优先于免费送；真要刺激走有围栏的套房促销（P02/P19），不是把标准客免费升完。升房收入口径问本店（NV）。不要用免费升房冒充 OCC 策略。
```

独立默认（本库 Hypothesis）：**空着的更高型是期权，不是赠品。** 它回答「这一层阶梯今晚还能不能卖、该不该当付费产品持有」。它**不**回答「套房公开 BAR 该砸到多少」。标准 Hold 779–799 首选 799；套房公开（若在卖）Hold 979–999 首选 999（Hypothesis / Simulation）。**禁止套房 BAR→399。禁止一夜 −15%。禁止高峰默认免费送。**

---

## 1. 房型差价是库存期权，不是装饰品

顾问问题不是「套房画面上还空几间」，是：**当更高型仍有剩余，这把库存被允许改什么？**

| | |
| --- | --- |
| **是** | 同一 Stay Date 上，Base/标准 → 更高型的**可卖阶梯**。客人已（或将）占用一间低档时，差价是增量产品；标准紧时，高档空着仍可吸收愿意多付的需求。 |
| **期权含义** | 持有更高型空房 = 保留「今晚还能报付费升 / 接晚来套房需求」的选择权。执行期权 = 收加价或按套房公开 BAR 卖。放弃期权 = 免费送掉或砸穿公开梯。 |
| **不是** | 「空着就必须送」的人情义务；「空着所以该型没有需求」的 leftover 证明；把套房 BAR 对齐到标准价或 399 的许可证。 |

`pricing/room-type-differential.md` 已钉：差太小 → 免费升、高档白送；差倒挂或过大 → 卖不动或低档被掏空。**本卡不重写 % 带。** 本卡只钉决策含义：**差价本身就是产品**——无论更高型在房态板上是否「看起来空」。

OPERA Cloud（A Vendor PMS，§44）：Upgrade Rules 把 From→To 与 **Flat / % of Difference / % of Original** 配进规则，升房费可走**单独 Transaction Code**；Managing Offers 让前台看见报价并用 Upsell 报告跟踪转化。机制证明：付费升是可配置销售过程，不是「空着就送」的默认。**UI 字段是 OPERA 的，不是华住/本店升房价表。**

HSMAI Americas Sales Advisory Board（A 协会，§45）：ancillary / total contribution 要进日常销售行为；**不报价，想多花的客人也不会被问到**。本卡用其方向（要问、要报、要计入贡献），**不**抄任何 % 增收、不编中国 take-rate。

---

## 2. 空 ≠ 免费（P49 是免费侧孪生）

高峰夜标准紧、套房仍空，是最容易把期权当人情的一刻。

```
画面：标准 Remaining 薄 / Pace Ahead；套房 Remaining 厚
Naive：反正空着 → 免费升，OCC 更好看
本卡：空着的差价仍可卖；免费送 = 烧掉期权 + 可能挤掉晚来付费套房需求
```

| 动作 | 增量房费 | 更高型用量 | 风险 |
| --- | --- | --- | --- |
| **付费升报价** | 加价 > 0（本店价表或 Hypothesis 带） | 占用更高型 | 客人拒 → 仍可持有期权 |
| **免费升（非合同/非确认奖）** | **$0** | 占用更高型 | 训练「空着就送」；置换付费套房；OCC↑ 不抬房费 |
| **套房公开 BAR→399** | 可能卖间，但写穿公开梯 | 按砸穿价卖 | 训练「空着就有今夜价」；与标准梯倒挂风险 |

**P49** 是免费侧孪生：高峰停或限额**空间可用**免费升，套房留给能付 BAR 的人。本卡 / P61 是**付费**路径。两边同向：**高峰不要默认把更高型白送出去。** 差别只在决策对象——P49 管 award / elite SA；本卡管「客人付不付差价」。

弱夜（套房厚、标准也松）：付费升**仍优先**于免费送。真要刺激 → P02/P19 **有围栏的套房促销**，理由写该夜需求，不写「反正空着」。**禁止用免费升房冒充 OCC 策略。**

---

## 3. 付费 vs 免费是不同决策对象

塌成「升了就行」会同时毁掉两边：

| | **P49（免费路径）** | **T-Upsell / P61（付费路径）** |
| --- | --- | --- |
| 对象 | 积分兑房 / elite SA / 已确认升级奖 | 客人愿付的房型阶梯 |
| 高峰默认 | 停或限额非确认 SA（Hypothesis；品牌硬规则 NV 则条件化） | **报价付费升** |
| 对贡献 | 可能有品牌报销（金额 NV）；空间可用升 ≈ $0 增量房费 | 加价是增量房费/附营候选（T19） |
| 误用 | 按兑房 OCC 涨 BAR；高峰乱升套房 | 默认免费送；套房→399；意思一下 50 |

顾问第一闸永远是：**这次是付费还是免费？** 免费 → P49。付费或「客人要升、问收多少」→ 本卡 / P61。不要在同一句话里把金卡 SA 和「意思一下 50」揉成一种「升房」。

---

## 4. 空着的是「型」，不是「需求」——不要砸该型公开 BAR

把更高型公开 BAR dump 到 399「反正空着」，混淆了两件东西：

```
Leftover *type* inventory     = 某一物理档还剩几间（套房 Remaining > 0）
Leftover *demand*             = 该 Stay Date 对该产品还有没有愿付的需求（Pace / Pickup）
```

| 分型画面 | 约束在哪 | 允许改什么 | **不允许** |
| --- | --- | --- | --- |
| 标准 Ahead/紧 + 套房空 | **低档紧** | 付费升报价；Hold 套房公开梯；P13 卖梯/关型若穿 | 套房→399；高峰免费默认送 |
| 标准 Behind + 套房 Behind | **两档都弱** | 该夜 P05/P02 围栏（分型或全店，理由写需求） | 「免费升当 OCC 策略」；一夜 −15%；把 399 写成新套房 BAR |
| 套房公开已 ≤ 标准 | **价梯病** | **P34** 修倒挂 | 用倒挂当促销；用免费升遮羞 |

标准紧时，约束是**低档**，不是「套房没有人要」。修复工具是 **付费升报价 + 阶梯保护（P13）**，不是套房→399。两档都 Behind → 仍是 P05/P02 在正确围栏上的事，**仍然不是**免费升 OCC 策略。

与假尺子一族的分工（对象不同，不要并成一句）：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| T-Share | 月报 RGI | 该夜 Pace |
| T-Parity | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **本卡 T-Upsell** | 「套房还空着」 | **付费差价 / 分型 Pace**；不是免费人情，不是该型 dump 令 |

---

## 5. 贡献镜头（T19）

```
付费升加价     = 增量房费（或附营，口径 NV）叠在已经占用/即将占用的停留上
免费升         = 更高型用量 + $0 增量房费（非合同报销路径）
套房 dump 399  = 可能有进账，但机会成本 ≈ 被写穿的套房梯与被训练的「空着就有价」
```

T19：贡献 = 净价 − 用户变动成本。升房加价仍是**贡献候选**——「升房不算业绩」是口径借口（P61 形 E），不消灭经济学。变动成本 / 早餐增量 / 升房是否含早 = **NV，问，不编。** 缺成本时：仍可拒「高峰免费默认送」与「套房→399」（相对公开梯的已知深砍弱结论），但**不要**发明「行业平均升房贡献」。

HSMAI（§45）方向：KPI 与激励若只认客房 OCC/ADR、不认 total contribution，前台就不会主动报付费升。本库：口径 NV 不挡「仍要推付费路径」。

---

## 6. Diagnose → Advise：空差价被允许改什么

用户原话：「反正套房空着免费升了得了」「标准满了套房降到 399」「意思一下 50」「升房不算别麻烦」。

```
Situation
  钉三件事：标准 Remaining/Pace；套房（或目标升型）Remaining；付费 vs 免费。
  用户是想送、意思一下、还是砸套房公开价。
  缺升房价表 / 收入口径 → 问，不编华住表。

Diagnosis
  空着的更高型 = 期权/可卖差价已经在板上。它被允许改的是：
    (1) 故事类型（可卖阶梯 vs 真两档弱 vs 倒挂 vs 会员免费桶）
    (2) 问句（§7）
    (3) 默认路径：高峰/标准紧 → 付费报价；免费 → P49
    (4) 是否先修梯（P34）或关型保护（P13）——产品/库存动作，不是「送」
  它不被允许改的是：高峰默认免费送；套房公开 BAR→399；发明华住升房价表；用免费升冒充 OCC。

What To Watch
  付费升 offers / accepted / revenue（`upsell-take-rate.md`；无默认 %）
  免费 vs 付费 split；套房公开是否仍 Hold；标准 Pace / Remaining
  不是「套房 OCC 是否填满」单一指标
```

过程六形（A 空着免费升 / B 标准满砸套房 / C 意思一下 / D 免费精英当付费 / E 升房不算 / F 误入）走 **P61**，本卡**不重复 P61 正文**。

Ahead 或标准薄 remaining → **付费升 + Hold**；两档真 Behind 且厚 → 才评 **P05/P02** 围栏套房促销，理由写成该夜需求，**不是**「反正空着」。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止套房 BAR→399。禁止 P62。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | **本店升房价表**或前台加价带是什么？ | 会编华住表或 Fact +¥ 常模 | **NV** |
| 2 | **谁拥有前台 upsell 目标**（收益 / 前台 / 销售）？激励认不认升房收入？ | 「不算」会停推；激励错会只冲 OCC | **NV** |
| 3 | 升房加价**过账到房费还是附营**？ | 口径争吵挡贡献（T19 仍在） | **NV** |
| 4 | 今晚 **elite / SA 免费升政策**是什么？有无已确认升级奖？ | 付费/免费混桶；该走 P49 的走进本卡 | **NV** |
| 5 | **套房 vs 标准 Remaining**，以及**分型 Pace**？ | 空被当成必须送或必须砸 | **NV** |

补充可问（同样 NV）：套房公开 BAR 是否已被改到 399；拟议是免费送 / +50 / 砸套房；佣金是否排除升房费（OPERA 可配，本店合同 NV）。**弹性、佣金%、华住升房价表、Fact +¥ 常模、默认 take-rate %、Walk $、699：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 套房空着 → 必须免费升 | 空 = 期权仍在。高峰默认**付费**报价。免费侧孪生是 P49 |
| 标准满了 → 套房砸到 399 清库存 | leftover **型** ≠ leftover **需求**。先付费升 + Hold 套房梯；真弱才 P05 |
| 意思一下 50 也算升房 | 象征价远低于类型差 → 压升房 ADR。贴类型差 / 本店价表（NV） |
| 升房不算业绩所以别推 | 口径 NV；贡献仍在（T19）。不因此停推 |
| 金卡要升 = 本卡付费升 | **P49**。不要和付费报价混报 |
| 免费升可以把 OCC 拉满当策略 | 占用 ≠ 付费需求。禁止用免费升冒充 OCC 策略 |
| 没有行业 take-rate % 就不能推 | 无默认 %。先数报价与接受（指标卡） |
| 倒挂了所以先免费升遮羞 | **P34** 修梯；升房加价仍可报，不替代修梯 |
| 该关型却在纠结送不送 | **P13** 卖梯/关型；本卡是差价经济学 |
| 编一套华住升房价表就能Advise | **禁止。** 价表 NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P61 `cases/sim-2026-paid-upsell-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 4 / 10 / 799 / 999 / 399（399 = 被拒绝的 suite dump；799·999 仅 Hypothesis/Simulation）
标准 Remaining           = 4          # Simulation，Pace Ahead
套房 Remaining           = 10
标准公开 BAR             = 799
套房公开 BAR（意图）     = 999
前台拟议                 = 免费升「反正空着」；销售拟议套房→399
```

读法（与 P61 同句）：标准紧 + 套房空 = **期权在板上**，不是必须送。Advise：**付费升报价**（sim 带 e.g. +200–300 或报套房 BAR）；Hold 套房公开 **979–999 首选 999**；Hold 标准 **779–799 首选 799**；拒免费默认送；拒套房 dump **399**。
**4 / 10 / 799 / 999 / 399 / +200–300 只允许出现在 Simulation**，不是行情 Fact，不是华住升房价表，不是推荐 dump。**399 是被拒绝的 suite dump，不是推荐套房 BAR。**

---

## 10. 证据（2026-08-27 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 付费升可配置：From/To + 加价公式 + 单独 Transaction Code；前台可见报价；Upsell 报告跟踪转化 | **A Vendor PMS** | **Known 机制。** UI ≠ 华住/本店价表 | Oracle OPERA Cloud 26.1 Upgrade Rules / Upgrade Offers（**§44 指针**） |
| Ancillary / total contribution 应进日常销售；不报价则转化不会发生；激励只认客房会扭曲行为 | **A 协会** | **Known 方向。** 不提供中国 take-rate % 或 +¥ 表 | HSMAI Americas「Ancillary Revenue Growth and the Shift to Total Revenue Thinking」（**§45 新开**） |
| 空差价 = 可卖期权；高峰默认付费；空 ≠ dump 该型 BAR；付费≠免费 | **B / Hypothesis** | 本库 P61 + T19 + P49 闸 | — |
| 本店升房价表 / FO upsell 归属 / 过账口径 / elite 免费政策今夜 / 分型 Remaining+Pace | — | **NV。不编。** | — |
| 华住升房价表 / Fact +¥ 常模 / 默认 take-rate % / 佣金% / 弹性 / Walk $ / 699 | — | **NV。禁止发明。** | — |

本小时新开：HSMAI Americas ancillary / total contribution 文 1 页（§45）。OPERA 两页复用 §44，不重锤。HSMAI Sales Acumen Glossary PDF 06:17 已超时 → 仍指针，不当核页。未采用 UpsellGuru / Oaky / Hospitality Net 意见文（非协会/官方 Vendor help）。未开第二家 PMS upsell 模块（Priority 停在协会 1 页）。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-UP-01 | 本店升房价表 / 前台加价带 | **NV。不代答。** 无则 Hypothesis/Simulation 带，不编华住表 |
| NV-UP-02 | 谁拥有 FO upsell 目标；激励是否认升房收入 | **NV。** |
| NV-UP-03 | 升房过账到房费还是附营 | **NV。** 不挡「仍推付费」 |
| NV-UP-04 | 今夜 elite / SA 免费升政策；已确认升级奖 | **NV。** 免费 → P49 |
| NV-UP-05 | 套房 vs 标准 Remaining + 分型 Pace | **NV。** 空开不了「必须送/必须砸」的门 |
| NV-P61-01… | P61 已挂（价表 / SOP / 佣金） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 08:17 CST | 首版。T-Upsell = 付费升房与房型差价（空差价是可卖的）。空 = 期权/可卖差价，不是免费人情，不是砸该型 BAR 的许可证。付费≠免费（P49 孪生）。贡献镜头 T19。不重复 P61 六形。**不写 P62。** 4/10/799/999/399 Simulation only。399 = 被拒绝的 suite dump。 |

---

## 13. 交叉（不改 P01–P61 正文；P61 仅头一行，邻卡仅文末一行）

- **P61** `advisor-playbooks/paid-upsell-upgrade.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799·999-Hypothesis **不改**。
- **主卡** `recommendations/dont-give-away-paid-upgrade.md`：复用，不重写。
- **轻指标** `metrics/upsell-take-rate.md`：offers/accepted/revenue；free vs paid；无默认 %。本卡不重写公式。
- **T19** `theory/profit-contribution.md`：付费加价 = 增量贡献候选；免费升 $0 增量房费。变动成本仍 NV。
- **P49**：免费 SA / award。高峰停免费升。与本卡对象不同、同向「不要白送套房」。
- **P13**：卖梯/关型保护 ≠ 前台收多少。
- **P34**：倒挂修梯 ≠ 升房差价经济学（相关症状）。
- **`pricing/room-type-differential.md`**：阶梯 % 带 Hypothesis；本卡不重写。
- **P47 / P42 / P05 / P02 / P19**：Comp / walk-in / leftover / 弱市围栏。误入移交。
- **P01**：**标准紧时 Hold**；本卡不放宽「空着就砸」入口。
- **禁止一夜 −15%。禁止套房 BAR→399。禁止高峰默认免费送。禁止 P62。禁止编华住升房价表、Fact +¥ 常模、默认 take-rate %、佣金%。**
