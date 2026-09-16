# BRG Claim vs Public BAR｜最低价保证/贵就赔索赔不是公开 BAR

> 资产：T-BRG / T11–T14 下一层（一笔已订直销单的最低价保证被允许改什么）· T-Parity / T-Flash / T-Package 同族（尺子 ≠ 按钮）
> 路径：`theory/brg-claim-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-29
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor 品牌（Marriott *Best Rate Guarantee*：须先直销下单；like-for-like；批准 = **匹配该笔** Comparison Rate + 品牌加码；截图协助 **但不作为验证**；可因 inputting errors / technology delays 拒赔；人数上限 up to 2 guests；批准后改预订可作废 — **§72 升核 / §73 复核**）；A Vendor 品牌（Hilton *Price Match Guarantee*：须先直销；批准匹配 **仅对该笔已批准预订**；改期改人酒店可取消匹配；条款适用于 2026-08-20 及之后提交；Hampton / SLH 在中华人民共和国目前排除 — **§72 升核 / §73 复核**）；A Vendor 品牌（IHG *Best Price Guarantee*：须先 IHG 直销 + Best Available 搜索；核验通过后 **调整该笔预订房价** + 5X 积分（上限 40,000）；Mainland China / Macau / Hong Kong / Taiwan **不适用**；截图可协助，以独立核验为准；验证后改预订会使福利失效 — **§73 新开**；Updated 2026-08-14）；B / Hypothesis（Ahead Hold 779–799 首选 799；不要 BAR→399「贵就赔 / 全网最低」；被索赔 ≠ 改尺令）
> 配套：`advisor-playbooks/best-rate-guarantee-vs-bar.md`（P75 过程）· `recommendations/dont-rewrite-bar-for-brg.md`（主卡复用，不重写）· `metrics/brg-claim-vs-public-bar.md`（轻指标；**无默认赔付 %**，公式不重写）· `cases/sim-2026-brg-claim-sat.md`（Simulation）
> 交叉：P59 真破平修便宜侧 ≠ 本卡「把索赔写成新 BAR」· P36 不可比截图 · P60 错价/延迟 · P74 券后/平台出资 · P42 前台 walk-in · P05 真弱 · P01 Ahead · T-Parity / T-Flash / T-Package / T-Corp / T-Share（假尺子一族）
> 问题树：§82「最低价保证索赔不是公开 BAR」（过程路由已够；本卡给「为什么索赔履约不是公开 BAR、品牌条款/like-for-like/独立核验不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 索赔后台，不自动改价，不代审批索赔。**
> 状态：**理论 drafted**（2026-08-29 16:17 CST）。**不写 P76，不写新剧本。** 禁止：编华住贵就赔 SOP / 默认赔付% / 佣金% / 699；把万豪 25%/5,000 分、希尔顿 25%、IHG 5X/40k 写成中国独立店店规；一夜 −15%；BAR→399「贵就赔 / 全网最低」；把 IHG「中国不适用」或 Hilton Hampton 中国排除写成华住无此产品；把 14/399/799 当市场 Fact；重写 `brg-claim-vs-public-bar.md` 公式；重写 P01–P75 正文（P75 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**最低价保证 / BRG / Price Match / 贵就赔是对「已经订出的那一笔直销单」的履约机制，不是永久公开 BAR。**
品牌条款能要求先直销下单、能要求 like-for-like、能独立核验、能批准后只匹配该笔预订（再加品牌自己的加码），只证明「有资格闸 / 有核验过程 / 有单笔履约」，不证明「公开灵活价该跟到截图价」或「被索赔了所以 BAR 改成全网最低」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「贵就赔」「被索赔了」把 BAR 改写成 399。本店是否真有贵就赔 / 华住字段 / 默认赔付% = **全部 NV**。万豪/希尔顿/IHG 的加码与管辖排除 = **品牌项目与管辖标签，不是华住 SOP**。

```
Naive（禁止）     截图更便宜所以 BAR 砍到截图价；贵就赔所以公开尺=全网最低；
                  被索赔了说明定价高了；万豪25%/希尔顿25%就是我们店规
本卡              先拆三把价（公开 BAR / 索赔比价 / 该笔履约结果）。
                  先订、like-for-like、独立核验、只匹配该笔 ≠ 定价权。过程走 P75。
```

完成标准：用户说「截图更便宜按最低价保证砍 BAR」「贵就赔所以 BAR 跟最低渠道」「被索赔了说明定价高了」→ Situation 写成**三把价 + Pace/Remaining + 是否已订直销 + like-for-like**；Diagnosis 写成索赔不是公开 BAR、品牌履约过程不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、该笔索赔是否仍 like-for-like。**不 dump 399、不把索赔写成新 BAR、不写 P76。**

顾问必须能直接说的三句（与 P75 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是已订直销单上的最低价保证/BRG/贵就赔索赔，还是要把公开 BAR 改成截图价。索赔（若本店确有政策）只可能动那一笔，不是公开尺。本店是否有贵就赔 / 华住字段 = **NV**，不编；不把万豪25%/希尔顿25%/IHG 5X 写成店规。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。不要 BAR→399「贵就赔 / 全网最低」。
3. 不可比走 P36。真破平修便宜侧走 P59。错价/延迟走 P60。券后走 P74。前台当场跟 dump 走 P42。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

独立默认（本库 Hypothesis）：**一笔索赔回答不了「今晚公开灵活该卖多少」。** 它回答「这笔已订直销单，在 like-for-like 与独立核验下，能不能匹配 Comparison Rate」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把索赔写成新 BAR。禁止编默认赔付 %。**

---

## 1. 三把价：公开 BAR / 索赔比价 / 该笔履约结果

顾问问题不是「客人截图多少」，是：**屏幕上这个索赔数字，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、非单笔履约） | Ahead Hold；真弱才 P05（仍这把尺） | 当成索赔地板；砍到「贵就赔所以全网最低」 |
| **Claimed comparison** | 客人拿来的第三方挂牌（截图/链接） | 核 like-for-like；观察 gap；不当新 BAR | 写成公开 BAR；截图当验证；用 399 锚市场 |
| **Claim outcome** | 批准匹配该笔 / 拒赔 / 本店无政策 | 只动该笔（若政策存在且合格）；Watch 该笔与公开尺是否仍分开 | 把「批准了」读成「日历夜公开尺改完了」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Claimed_shelf            = 399     # Simulation：截图/比价（不是新 BAR）
Gap                      = Public_BAR − Claimed_shelf   # 尺在 metric，不重写；不是必须折扣指令
Claim_state              = no_policy | pending | matched_this_res | denied | incomparable
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住贵就赔默认。

混淆三把价会同时拧坏 **公开尺** 与 **履约例外**：把「截图 399」读成「我们 BAR 就是 399」，或把「被索赔了」读成「公开栏必须跟到地板」。

Marriott（A，§72/§73）：批准 = **match the Comparison Rate** on the booked reservation + 品牌加码。**不是**改写全店公开 BAR。截图 **assist but will not be accepted as validation**。

Hilton（A，§72/§73）：matched rate **applies only to the booking as approved**；改预订可取消匹配。

IHG（A，§73 **新开**）：Valid Claims → **adjust the rate on the reservation you booked** + 5X points（cap 40,000）。Mainland China / Macau / Hong Kong / Taiwan **不适用**。修改验证后的预订 → 福利失效。

---

## 2. 先订 / like-for-like / 独立核验是履约过程，不是定价权

厂商把「最低价保证」做成**直销履约产品**：先订 → 限时提交 → like-for-like → 品牌独立核验 → 只动该笔（再加品牌加码）。没有一家被打开的官方页把它写成「索赔价默认等于 BAR」或「被索赔了就必须改写公开灵活」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| Marriott Best Rate Guarantee（§72 升核 / §73 复核） | 须先直销；24h 内且入住前 24h 提交；同店同房同床型同人数（**up to 2 guests**）同含早同取消；批准 = 匹配该笔 + 25% off 或 5,000 分；截图协助但不作验证；可因错误展示/技术延迟拒赔；排除券/打包/opaque/协议/携程美团飞猪微信预付不可退；比价不含税；批准后改预订可作废 | **单笔履约 + 资格闸。** 加码 = 万豪项目。人数上限 = 条款边界，不是「三人以上就该砍 BAR」 |
| Hilton Price Match Guarantee（§72 升核 / §73 复核；2026-08-20+） | 须先直销；同房型/景观/设施/取消/人数/日期；≥1% 更低；匹配仅对该笔；改期可取消匹配；排除会员/协议/打包/登录/App-only/opaque；Hampton / SLH 在中华人民共和国目前排除 | **单笔履约。** 中国排除 = 管辖标签 ≠ 华住 SOP。25% = 希尔顿项目 |
| IHG Best Price Guarantee（§73 **新开**；Updated 2026-08-14） | 须先 IHG 直销 + Best Available；核验通过后 **调整该笔预订房价** + 5X（≤40k）；Mainland China / Macau / Hong Kong / Taiwan **不适用**；截图可协助，以独立核验为准；验证后改预订使福利失效 | **单笔调价履约。** 中国不适用 = 管辖标签。5X/40k = IHG 项目。**不是**中国独立店必须有贵就赔的证据，也不是改写公开 BAR 的令 |

```
画面：客人截图 399 / 销售说「贵就赔所以 BAR 改」 / 被索赔了
Naive：BAR 就是那个价；被索赔所以定价高了；必须全网最低
本卡：先订、like-for-like、独立核验、只匹配该笔，都是履约过程。定价权在公开 BAR + Pace，不在索赔按钮。
```

```
Book direct first                  → 资格闸（未订先砍 BAR ≠ 品牌 BRG）
Like-for-like checklist            → 可比闸（不对 → P36 / P74 / P69）
Independent verification           → 截图 ≠ 验证
Match / adjust THIS reservation    → 单笔履约（不是日历夜公开尺）
Public BAR                         → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 / 本店贵就赔 SOP / 默认赔付% = **NV，不编。** UI/条款是品牌的，不是本店报表名。

---

## 3. 「被索赔了」是履约信号，不是改写公开 BAR 的许可证

被索赔回答的是：**这笔直销单在条款下能不能匹配 Comparison Rate。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 有人索赔 | 核 like-for-like；有政策只动该笔；公开尺 **Hold** | 「市场认 399，BAR 改 399」 |
| 索赔批准了 | 该笔履约完成；Watch 公开尺是否仍分开 | 「批准了所以全网公开尺改完」 |
| 索赔被拒 / 不可比 | **形 C**：交 P36 / P74；不要为了「面子」砍公开尺 | 「反正客人有截图，先砍」 |
| 真破平（自家 OTA 公开灵活 < Brand.com） | **P59** 修便宜侧 | 用索赔借口砍官网 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不改写 BAR | 一夜 −15%；把索赔地板永久化 |

Marriott / Hilton / IHG 三条都把批准结果钉在 **该笔预订**。方向采用：**履约例外 ≠ 战略尺。**

```
Claim filed / approved   → 履约信号（可只动该笔）
Public BAR               → 仍由 Pace / Remaining 定
Naive                    → 「被索赔了所以 BAR→399」
本卡                     → 被索赔 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 索赔 ≠ 真破平（P59）≠ 不可比（P36）≠ 错价（P60）≠ 券后（P74）≠ 前台跟（P42）

六边都在「更便宜」附近，对象不同。塌成「反正都便宜所以砍」会开错杠杆。

| | **P75 / 本卡（重置公开尺=索赔）** | **P59（真破平）** | **P36（不可比）** | **P60（错价）** | **P74（券后）** | **P42（walk-in）** |
| --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到索赔截图价 | 本店 OTA 公开灵活 < Brand.com | 截图产品身份对不上 | 映射/延迟错误展示 | 券后/平台出资展示层 | 前台未订上门要跟 dump |
| 尺 | 公开 **BAR** | 便宜侧/映射 | 可比闸 | 纠错映射 | 谁出资 + 公开 BAR | 当面成交 ≠ 改尺 |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | 修便宜侧；Hold 官网 | 拒跟 | 纠错；可拒赔 | Hold；排除平台自掏 | 不跟 dump |
| 禁止 | 399 作新 BAR；截图当验证 | 砍官网「对齐」 | 不可比当破平/索赔 | 错误价当市价 | 券后当新 BAR | 前台跟成新 BAR |

顾问第一闸永远是：**这是要改公开尺，还是修破平，还是不可比，还是错价，还是券后，还是前台当场？** 真破平 → P59。不可比 → P36。错价 → P60。券后 → P74。前台跟 → P42。真弱 leftover → P05。要把索赔叫 BAR / 要被索赔改尺 → 本卡 / P75。

---

## 5. 假尺子一族：「贵就赔就是 BAR / 被索赔了改尺 / 截图即验证」

本卡不是新怪现象，是同一族的下一张：**一笔履约例外被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 闪促 399 / 卖爆了 | 公开 BAR + Pace；有窗关码 |
| **本卡 T-BRG** | 「截图 399 / 贵就赔 / 被索赔了」 | **公开 BAR + Pace**；不是索赔当 BAR 令，也不是 dump 399 令 |

「贵就赔所以 BAR 跟最低」= 把 **单笔履约（索赔层）** 当成 **公开灵活价**。尺子在 399 上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「截图即验证」是另一把假尺子：Marriott / IHG 都写截图可协助、以独立核验为准。该核 like-for-like，不是改写 Brand.com。

管辖假尺子：IHG 中国不适用、Hilton Hampton/SLH 中国排除 = **管辖标签**。不要读成「华住没有贵就赔」或「中国店必须发明一条」。本店政策仍 **NV**。

---

## 6. Diagnose → Advise：索赔被允许改什么

用户原话：「截图更便宜按最低价保证砍 BAR」「贵就赔所以 BAR 跟最低渠道」「被索赔了说明定价高了」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是「要履约已订直销单」；
            ②拟议是「改尺 / 全网最低 / 跟截图」还是「只动该笔 / Hold 公开」；
            ③Pace / Remaining；是否已订；like-for-like。
  缺赔付% / 本店政策 → 问，不编华住字段；不把品牌加码当店规。

Diagnosis
  索赔已经发生（或销售想用贵就赔改尺）之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 不可比 vs 破平 vs 错价 vs 券后 vs 前台 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆索赔 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P36 / P59 / P60 / P74 / P42 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住贵就赔 SOP / 默认赔付%。

What To Watch
  公开 BAR 是否仍 Hold；该笔索赔是否仍 like-for-like；24h 公开 Pickup
  不是「客人有截图就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C 不合格比价 / D→P59 / E→P60 / F→P05）走 **P75**，本卡**不重复 P75 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P76。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **已订直销单上的索赔履约**，还是要把 **公开 BAR 改成截图价**？ | 混用尺；把例外当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与截图/比价各是多少？客人是否已直销下单？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | like-for-like？同店同房同取消同含早同人数？券后/登录/打包？ | 把不合格截图写成索赔令 | **NV** → 不对则 P36/P74 |
| 4 | 本店是否真有最低价保证/贵就赔？赔付怎么走？ | 发明华住 SOP；或把万豪/希尔顿/IHG 加码当店规 | **NV。不编。** |
| 5 | 拟议是只匹配该笔，还是改写公开尺 / 全网最低？ | 误入本卡 / P59 | **NV** |

补充可问（同样 NV）：是不是真破平（→P59）；错映射/延迟（→P60）；券后/平台出资（→P74）；前台未订上门（→P42）；真 Behind leftover（→P05）。**赔付%、佣金%、699、华住贵就赔 SOP、品牌 25%/5X 当店规：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 贵就赔所以公开 BAR=全网最低 | BRG = 单笔履约（若有政策）。不是日历夜公开尺 |
| 被索赔了所以 BAR→399 | 履约信号 ≠ 战略尺。拒绝 |
| 截图就是验证 | Marriott/IHG：协助审核，以独立核验为准 |
| 万豪 25% / 希尔顿 25% / IHG 5X 就是我们店规 | **品牌项目。** 不进中国独立店 SOP |
| IHG 中国不适用 / Hilton Hampton 中国排除 = 华住没有贵就赔 | **管辖标签。** 本店政策仍 NV |
| 未订先砍 BAR「按贵就赔」 | 三家均要求先直销下单（或等价）。未订 → 不是品牌 BRG 主路径；独立店 NV |
| 券后/含早不同也算索赔 | 不合格比价 → P36 / P74 / P69 |
| 真破平所以顺便砍官网 | **P59** 修便宜侧；仍不因索赔砍 BAR |
| 错价挂出必须认并改尺 | **P60**；品牌可因错误展示拒赔 |
| 前台 walk-in 要跟 OTA dump | **P42**。不是已订直销单索赔 |
| 反正空，索赔地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住贵就赔 SOP 就能 Advise | **禁止。** 政策 / 赔付% NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P75 `cases/sim-2026-brg-claim-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
索赔/截图                    = 399（美团截图或「贵就赔」话术）
销售拟议                     = 「贵就赔 / 被索赔了」砍 BAR 到 399；或「全网最低」改尺
```

读法（与 P75 同句）：399 是索赔比价，不是 BAR。Advise：拆索赔 vs 公开；核 like-for-like；**Hold 779–799 首选 799**；拒 dump **399**；本店政策 / 赔付% **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住贵就赔默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-29 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 批准 = 匹配该笔 Comparison Rate + 品牌加码；截图不作验证；可因错误展示/技术延迟拒赔；up to 2 guests；改预订可作废 | **A Vendor 品牌** | **Known 单笔履约。** ≠ 改写公开 BAR | Marriott Best Rate Guarantee（**§72 升核 / §73 复核**） |
| 匹配仅对该笔已批准预订；改期可取消匹配；Hampton/SLH 中国排除；2026-08-20+ 条款 | **A Vendor 品牌** | **Known 单笔履约 + 管辖标签** | Hilton Price Match Guarantee（**§72 升核 / §73 复核**） |
| 核验通过后调整该笔预订房价 + 5X（≤40k）；Mainland China/Macau/HK/Taiwan 不适用；截图协助、独立核验；验证后改预订失效 | **A Vendor 品牌** | **Known 单笔调价履约 + 管辖标签。** 中国不适用 ≠ 华住 SOP | IHG Best Price Guarantee FAQ + Terms（**§73 新开**；Updated 2026-08-14） |
| Ahead Hold 公开 BAR；拒 399 改尺；有政策只动该笔 | **B / Hypothesis** | 本库 P75 + Pace 闸 | — |
| 本店贵就赔 SOP / 华住字段 / 默认赔付% / 佣金% | — | **NV。不编。** | — |

本小时新开：IHG Best Price Guarantee FAQ + Terms and Conditions（Updated 2026-08-14）。升核/复核：Marriott Best Rate Guarantee 官网条款；Hilton Price Match Guarantee 官网条款。Marriott Valid Comparison help **仍 CSS Error，不当核页**。华住 SOP **未开、不编**。万豪 25%/5,000、希尔顿 25%、IHG 5X/40k **不采用为独立店店规**。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-BRG-01 | 本店是否真有最低价保证/贵就赔；赔付怎么走 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-BRG-02 | 客人是否已直销下单；比价是否 like-for-like | **NV。** 未订/不可比不是改尺令 |
| NV-BRG-03 | 399 来源（索赔话术 / 券后 / 错映射 / 真破平） | **NV。** 先 Hold 公开 BAR |
| NV-P75-01… | P75 已挂（华住字段 / 赔付% / 佣金% / 品牌加码当店规） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 16:17 CST | 首版。T-BRG = 最低价保证/贵就赔索赔不是公开 BAR。三把价；先订/like-for-like/独立核验≠定价权；被索赔≠改尺令；P59/P36/P60/P74/P42 孪生；假尺子一族；不重复 P75 六形。**不写 P76。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P75 正文；P75 仅头一行，邻卡仅文末一行）

- **P75** `advisor-playbooks/best-rate-guarantee-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-brg.md`：复用，不重写。
- **轻指标** `metrics/brg-claim-vs-public-bar.md`：公开 BAR vs 索赔 gap；无默认赔付 %。本卡不重写公式。
- **P59 / T-Parity**：真破平修便宜侧。本卡 / P75 = 要把公开尺写成/跟到索赔。
- **P36**：不可比截图。邻「不合格比价」。
- **P60**：错价/延迟。品牌可拒赔。
- **P74**：券后/平台出资。Marriott 明文排除 coupon/voucher。
- **P42**：前台 walk-in ≠ 已订直销单索赔。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正索赔≠BAR + Hold，不是改尺。
- **T-Parity / T-Flash / T-Package / T-Corp / T-Share**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P76。禁止编华住贵就赔 SOP、默认赔付 %、佣金%、699；禁止把品牌加码/中国排除写成店规。**
> 交叉指针（2026-08-30 08:17，不改正文）：假尺子同族下一张 **T-Fee** `theory/resort-fee-vs-bar.md`（费/税/all-in ≠ 公开 BAR）。过程仍 **P79**。不写 P80。
