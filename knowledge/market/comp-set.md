# Comp Set｜竞争群怎么选、怎么用

> 资产：Wave6 市场卡  
> 路径：`market/comp-set.md`  
> Last Verified：2026-08-20  
> 知识类型：Fact（STR 合规）+ Best Practice + Hypothesis  
> 证据等级：S（术语/合规）· B（顾问选法）· C（单人三分法）  
> 配套：`metrics/mpi-ari-rgi.md` · `demand-signals/signal-framework.md` · `recommendations/ignore-comp-undercut.md`  
> 问题树：§1 问 8 · §3 RevPAR · §13/14 Price  
> 禁止：把竞对 BAR 当目标价；把奢华非竞品塞进日报价圈；重写 MPI 公式；编造中国另有官方同名指数。

---

## 0. 一句话

**Comp Set 是「客人今晚还会点开哪几家」的替换集，不是街对面名单。**  
竞对可订价是 **信号家族 3（Price position）**，单独不够开门涨/降。MPI/ARI/RGI 是份额诊断，公式见 `metrics/mpi-ari-rgi.md`，本卡不重写。

成功标准：用户说「竞对比我低 80 元要不要跟」→ 先问 Comp 是否可比、本店 Pace/Pickup、有无事件 / citywide，再输出 **跟 / 不跟 / 只开围栏**。

---

## 1. 科学选 Comp：七维（顾问用，不是 STR 法定字段）

客人替换发生在 **同一决策集**。七维同时接近，才进 **Primary**。一维很近、其余差一档，最多进 Secondary。

| 维 | 问什么 | 可比 | 不可比（典型误选） |
| --- | --- | --- | --- |
| **Location** | 同一微市场 / 出行半径？到需求源（展馆、商圈、高铁、景区）是否同阶？ | 步行/地铁同圈；同一商务区 | 「同城」≠ 同圈。跨江、跨环、机场 vs 市区 |
| **Product** | 房量、房型结构、新旧、服务档（有限/全服务） | 同 Class 或相邻一档 | 200 间会议店 vs 40 间精品；全套房 vs 标准有限服务 |
| **Brand** | 旗 / 软品牌 / 独立；会员体系是否同一客池 | 同 Chain Scale 或同软品牌带 | 把集团姐妹店当外部竞对做日报价（可作内部对标，须标注） |
| **Positioning** | 客人以为你是谁 | 同价值叙事（商务便捷 / 度假亲子 / 会展步行） | 把「想成为的店」放进日报价圈 |
| **Price** | 平日公开 BAR 是否同一带 | 多数日期落在同一 ±15% 带 | 长期贵 40%+ 的店：那是 Aspirational，不是 Primary |
| **Segment** | Transient / Group / Contract / 休闲周末 结构是否接近 | 周末休闲店周末互比；周中协议店周中互比 | 机组合同店 vs 纯零售店 |
| **Facilities** | 会议、餐、停车、泳池、家庭房 | 关键设施同阶 | 无会议的店拿会展店当日常价锚 |

**STR 公开选法（A，2026-08-20 打开）：** 不要只选「马路对面」。考虑 **class、房量、会议面积** 等特征。STR 称内部评分模型用 **9 个因子**，公开页只点名 class / location，**完整 9 因子名单 = NV**，本库不编。

**顾问操作顺序（Hypothesis）：**

```
1) 列客人会并排打开的 8–12 家（OTA 同筛选、同商圈、同价带）
2) 用七维打分：每维 0/1/2，总分 ≥10 且 Location+Price+Product 均 ≥1 → Primary 候选
3) 砍到 4–7 家（日报价圈）。再多会稀释「谁在动」
4) Secondary / Aspirational 另册，禁止和 Primary 混成一个均价
5) 每季或重大装修/换牌/新店开业重审
```

---

## 2. STR 合规（Fact，S）≠ 顾问日报价圈

CoStar *Competitive Set Guidelines*（2026-08-20 打开）：

| 规则 | 内容 |
| --- | --- |
| 家数 | **至少 4 家参与店**，不含本店 |
| 关联 | 4 家里至少 **3 家** 与本店无同一母公司/运营商/业主；至少 **2 家** 无关联公司 |
| 房量 | 单一物业 / 单一品牌 ≤ **50%** 参与房量（已排除本店及同公司房） |
| 公司 | 单一公司 ≤ **70%** 参与房量 |
| 多套 | 同一公司若有多套 Comp Set，构成至少差 **2 家** 非关联店 |
| 变更 | 通常至少改 2 家且开业满 5 个月（新建/重开/停报/永久关有例外） |
| 不合规 | 3 家及以下立即停用；超份额按档停用或标非合规；90 天不修则删除 |

这是 **保密 + 样本完整性** 规则，不是「科学替换」证明。顾问日报价圈可以是 3 家可订店，但 **不得** 把 3 家非正式圈的均价叫做 STAR MPI。

**Performance Set：** CoStar FAQ 称每店有一套 **primary Competitive Set**，对品牌/业主/运营商自动共享。这是 STR 产品里的「主套」，**不是** 下文 Primary/Secondary/Aspirational 三分法。

**Composite Property：** 多家匿名店合成一家，用于补足样本。顾问不可把复合点价当成「某一家刚降了 80 元」。

---

## 3. Primary / Secondary / Aspirational

**不是 STR 官方三分。** STR 官方是 Performance Set + 用户自建多套。三分是行业实践（**B** 多文互证；单人课/博客最多 **C**）。

| 层 | 谁 | 用途 | 看价频率 | 禁止 |
| --- | --- | --- | --- | --- |
| **Primary** | 客人今晚会在你和它们之间二选一 | 日报价、Rate Shop、Pace 对照、事件发现 | 每日 | 混进明显更高档 |
| **Secondary** | 偶尔抢同一客：满房溢出、周末/旺季、稍远或稍不同档 | 周会看市场位置；溢出时才当价锚 | 每周 / 压缩日每日 | 用 Secondary 均价定义「我们必须降」 |
| **Aspirational** | 你想成为的店：价带更高、产品更好 | 季度战略、改造叙事、业主目标 | 季度 | **禁止**当日常 BAR 锚；禁止拿它压低自己的 ARI 故事当「该涨」 |

**顾问默认：** 涨/降/跟价只认 **Primary 可订价**。Secondary 满房 = 溢出信号（进 P15）。Aspirational 降价 **不**触发跟价。

中国单体店常只有「老板点名的 3 家」。处理：

```
标「非正式 Primary，非 STAR 套」
家数 <4 或档差大 → Confidence 降一档
MPI/ARI/RGI 若来自另一套（业主 Aspirational）→ 不当日报价证据
```

---

## 4. Competitor Rate 是信号，不是答案

过程文件硬规则第 6 条。本卡落地：

```
竞对 BAR 能回答：相对这几家可订点，我们贵/便宜多少
不能回答：该不该动、动多少、动 BAR 还是围栏
```

必须再叠 **Pace / Pickup / Remaining / 事件 / 渠道是否开**。见 `pricing/how-much-to-move.md`：Competitor 参与锚，**不单独开门**。

| 常见原话 | 错反应 | 对反应 |
| --- | --- | --- |
| 竞对比我低 80 元 | 立刻跟到 最低−10 | 先 Pace/Pickup/事件/citywide → 跟 / 不跟 / 只开围栏 |
| 竞对涨了 | 对齐最高 | 看自己是否 Ahead+Fast；第一刀不跳最高 |
| 竞对满 | 自动暴涨 | 核可比 + 自身剩余；1 家满 ≠ 3 家满（P15） |
| Comp 选了弱店 | RGI 好看就涨 | 先审套，指数作废 |

**80 元怎么读（Hypothesis，不是弹性）：**  
先算 **%**：80 / 本店 BAR。  
- <8% 且 Pace On/Ahead → 默认 **不跟**（在带内）。  
- 8–15% 且仅本店慢、市场不冰、供给开 → 才评围栏 −3–5%，仍先不砸 BAR。  
- ≥15% 或 ≥150 元 **且** Behind+Slow **且** 市场不冰 → 才评档 F。

---

## 5. MPI / ARI / RGI 怎么用于顾问判断

公式、100=fair share、同口径 RGI≈MPI×ARI/100：**不在此重复**，见 `metrics/mpi-ari-rgi.md`（STR S）。

**顾问只读组合，不读单点：**

| 组合 | 高概率机制 | 下一步（仍要 Pace） |
| --- | --- | --- |
| MPI 高、ARI 低 | 用量换价；可能 Underpricing | 查 Pickup/Remaining；可能涨或关低价 |
| MPI 低、ARI 高 | 价可能高，或产品/位置弱 | 先排除供给关/产品事故；再评围栏 |
| 双低 → RGI 低 | 需求或份额 | 拆：市场也弱 vs 只有本店 |
| 双高 → RGI 高 | 可能真强，或 Comp 选弱了 | **先审套** |
| RGI≈100 但业主不满 | Budget 错或套是 Aspirational | 不降价追错目标 |

**中国名字（2026-08-20）：**  
CoStar **中文术语表**（`/zh-cn/.../glossary`）使用同一套词：OCC 指数 (**MPI**)、平均房价指数 (**ARI**)、RevPAR 指数/收入指数 (**RGI**)，100=公平份额。  
这是 **STR/CoStar 产品译名**。**不是** 中国统计局或文旅部另发的官方指数。未订阅 STR 的店没有 MPI；集团内部「市场份额」若口径不同，标 Unknown，禁止把 PMS OCC÷某三家口述 OCC 写成 STAR MPI。

指数一周抖动：一家 Comp 关房、活动日、样本缺报都会抖。**禁止**用单周 RGI 决定今夜 BAR。

---

## 6. 什么时候必须重审套

- 新店开业 / 竞对换牌 / 本店改造升级  
- 指数长期 >120 或 <80（环球旅讯实践文亦提示，**B/C**，作线索不是阈值真理）  
- Primary 价带持续分裂（两家走高星、两家走下沉）  
- 用户拿「对标店」报价，那家从未出现在客人替换集  

重审时写清：哪家进/出、为什么、STAR 套与日报价圈是否仍同一套。

---

## 7. 顾问最小输出（谈到竞对时）

```
Comp 层：Primary 名单（或「非正式 3 家」）+ 是否可比
价差：金额 + % vs 最低 / 中位 / 最高可订
指数：有 STAR 则报 MPI/ARI/RGI 组合 + 日期；无则写无
结论：竞对价只解释位置，动作由 Pace×Pickup×事件决定
```

---

## 8. 证据（2026-08-20）

| 论断 | 级 | 源 |
| --- | --- | --- |
| Comp Set 定义；MPI/ARI/RGI；Fair Share=100 | S | https://www.costar.com/products/str-benchmark/resources/glossary 及中文页 |
| 4 家 / 关联 / 50%·70% / 多套差 2 / 90 天 | S | https://www.costar.com/products/str-benchmark/resources/guidelines/competitive-set-guidelines |
| 不要只选对面；看 class/房量/会议 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/building-comp-set-best-practices （2021-05-12） |
| Performance Set = 产品内 primary set | A | CoStar FAQ |
| Primary/Secondary/Aspirational 三分 | B/C | 多实践文互证；**非 STR 官方** |
| 9 因子完整名单 | — | **NV** |
| 中国另有政府 MPI | — | **未找到**；只确认 CoStar 中文用同名 |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。七维选套；三分法标非官方；竞对价是信号。 |

## 10. 交叉（2026-08-22 22:17）

「竞对比我低 80」除了问 Comp 是否同一圈，还要问 **口价是否同一口径**（P36）：公开 vs 会员/App、含早、税、剩余房型、LOS。不可比则不要把 80 写进 Pace 决策。

## 11. 交叉（2026-08-26 14:17，不改选套规则）

月报 MPI/ARI/RGI 掉了要不要砍今夜 BAR → **P57** `star-index-misread.md`。先审集合与日期窗；指数是份额诊断，不是定价按钮。本卡七维与 STR 合规不改。

## 12. 交叉（2026-08-26 16:17，不改选套规则）

份额指数已经发生之后只允许改诊断，不允许改今夜 BAR → **T-Share** `theory/share-index-vs-price.md`。七维与 STR 合规不改。过程仍 P57。
