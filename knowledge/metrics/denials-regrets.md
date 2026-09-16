# Denials / Regrets / Turndowns｜拒单 · 流失 · 口头「赶过人」

> 卡：`metrics/denials-regrets.md`  
> 类型：店内 **可观察代理**（不是 STR 日报 KPI；不是 Unconstrained Demand 本身）  
> Evidence Level：A Vendor（Duetto Denial / Regret；IDeaS「勿把 regrets & denials 当主数据」）；A（HSMAI Academy Unconstrained Demand 词条；HSMAI Global 需求预测 = 无约束需求）；S 书目（Orkin 1998 Cornell HAQ 摘要级；Weatherford & Kimes 2003 截断，已核 forecast-framework）；B（TCRM Denial/Regret；Xotels 记拒单）；Hypothesis（口头故事 ≠ 指标）  
> Source / Last Verified：2026-08-24 00:17 CST  
> Knowledge Type：Theory（分类）+ Vendor Methodology（怎么记、怎么不当主公式）+ Best Practice（顾问用法）  
> 树位置：`metric-tree.md` §4 预测层指针 + 本轮 §16  
> 配套：`forecasting/unconstrained-vs-constrained.md` · `forecasting/forecast-framework.md` §3.2 · P03 `sellout-risk.md` · P33 `restriction-overuse.md` · P42 `same-day-walk-in.md` · P09 `increase-bar-pace-ahead.md` · `recommendations/dont-raise-on-verbal-denials.md`  
> 问题树：本轮「前台说赶过人」  
> 禁止：发明 STR Denials Index / 行业拒单%；编中国 PMS 拒单字段名；编 Walk 成本；编华住 699；把口头「赶过人」写成 Demand；把 0 拒单写成需求弱；关房/MinLOS 夜的拒单自动 +15% BAR；一夜 −15% / +15%；整段摘录教材。

---

## 0. 一句话

**拒单是「想订我们、我们没卖成」的日志；流失是「看到了、选了别人」——常常看不见。前台一句「今晚赶过好几拨人」没有日期、间数、房型、原因，不是指标，更不是涨价令。**

```
口头「赶过人」     ≠ Demand
拒单日志（有字段） = 可观察代理，旁证
Unconstrained     = 理论对象（Vendor 估法，不是把日志加总）
STR Occupancy     = Sold / Available，不含拒单
```

完成标准：用户说「前台说赶过人，要不要涨」→ 先要日志；没有日志 → **Hold**，明天开始记；有容量拒单 + Pace Ahead + Remaining 紧 → 才转 P03/P09，不是本卡自动涨。

顾问必须能直接说的三句：

```
1. 前台说赶过人，没有日志就不能当需求去涨价。
2. 拒单要记日期、房型、原因；限制挡掉的先走松限制，不是先加价。
3. 零拒单也不等于没人要，可能只是没人记。
```

---

## 1. 三个词（先分清）

| 词 | 顾问定义 | 不是 | 级 |
| --- | --- | --- | --- |
| **Turndown / Turnaway** | 伞词：一次没转化的请求（容量、限制、价、产品）。学术综述里常先记 turndown，再拆 denial vs regret | 不是 STR 词条；不是「已经成交的 walk-in」 | A 综述方向（Guo et al. 2012 公开综述：分界模糊） |
| **Denial / 拒单** | **想订我们，我们不能或不愿卖**：满房、房型关、限制（MinLOS/CTA/Closed）、某价档关闭所以没报价 | 不是客人嫌贵走了；不是前台没记的故事 | A Vendor（Duetto Glossary：因售罄/房型不可订 **不报价**）；B（TCRM：sold out **或 restriction** 把价扣住） |
| **Regret / 流失** | **我们报了价（或有可售），对方选了别人或不订**：价、位置、产品、内容、比价。线上环境下 **常常观察不到原因** | 不是满房硬信号；单独不得当涨价证据 | A Vendor（Duetto：看到价但不订；IDeaS：今日 regret 不只是价，还有位置/口碑/内容） |

Orkin 1998 Cornell HAQ **摘要级（S 书目，不摘正文）**：被拒（denied，价档售罄）的客人算 latent demand；regretfully 因价不订的客人 **probably not**。本库落地：容量/关档拒单可作截断旁证；价流失单独不涨。

IDeaS *Revenue Science 101*（A Vendor；本库 2026-08-20 已开，本轮正文抓取空、用库内摘录 + 公开摘要）：**不主张**把 lost business / regrets & denials 当 Unconstrained **主数据**（在线偏差大、渠道只切到 brand.com 一块）。顾问态度与 `forecast-framework.md` §3.2 相同：

```
有干净 Denied 日志 → 旁证，不单独外推成 Demand
无日志 + 历史满房 → 至少写「Unconstrained ≥ Capacity」，不要写 Demand=Sold
口头「赶过人」→ 不是日志，不是 Demand
禁止把 OTA 搜索热度直接换算成间夜
```

Duetto Lost Business（A Vendor，2026-08-24 打开）：Web Denial = 搜了没可售；Web Regret = 看到价没订。限制（例如搜 1 晚碰到 MinLOS=2）会 **制造** Denial。未洗团块、员工在预订引擎上自搜会污染计数。本库不把 Duetto 脚本步骤抄成行业标准算法。

---

## 2. 口头「赶过人」为什么不是指标

用户原话典型：「前台说今晚赶过好几拨人，要不要涨？」

缺下面任一项，就还不是 metric：

| 字段 | 为什么必须有 |
| --- | --- |
| **Stay Date**（不是「今晚前台很忙」的日历日） | 赶的是今晚入住，还是在订周末？记错日会涨错夜 |
| **Count**（件数或间夜，声明单位） | 「好几拨」不可加进 Unconstrained |
| **Room type** | 标准间满、套房空 = 房型压缩，不是全店 Demand=100 |
| **Reason** | 满房 / 限制 / 关价档 / 客人嫌贵 / 只要钟点 / 只要含早 → 动作完全不同 |
| **是否去别处订了**（若知道） | 不知道就标 Unknown，不要编 recapture % |

Walk-in **已经成交** = 捕获需求，走 **P42**，不是拒单。  
Walk-in **没成交**、又没记下原因 = 故事，不是 Denial。

---

## 3. 0 拒单 ≠ 需求弱；很多拒单 ≠ 自动涨 BAR

| 观察 | 可能是 | 第一刀 |
| --- | --- | --- |
| **0 拒单** | 前台/预订根本不记；BAR 已经高到没人问；OTA 显示关房所以询单进不来；限制把短住挡在门外（他们不出现在电话里） | **不要**写成「没人要」。先问记不记、限制开没开、价是不是已经最高 |
| **很多拒单，当夜 Closed / MinLOS / CTA** | 限制或关档制造的假需求（P33）；高峰 Sat-only 被 MinLOS 挡住（可能是 P40 该挡） | **先分原因。** 限制过度 → P33 松限制，**不要**自动 +15% BAR。已证实 Peak 的 MinLOS → 不解，走 P40/P21 |
| **很多容量拒单，Pace Ahead，Remaining 紧** | 真截断。日志是旁证，决策仍看剩余+Pace | **P03 / P09**，不是本卡。先关低价再决定涨不涨 |
| **很多价拒单（报了价不订），当天 Pace Behind / 市场不热** | BAR 可能已经偏高 | **不要再涨。** 考虑 Hold；弱日才评估围栏，禁一夜 −15% |
| **口头很多、日志没有** | 不可观测 | **Hold。** 明天起按 §4 记 |

朴素加性（Hypothesis，已在 forecast-framework，**不是 S 公式**）：

```
Unconst ≈ OTB + 历史同 DTA 剩余 fill + max(0, 干净 Denied)
Denied 未知 → 第三项=0，并声明低估
禁止：Unconstrained = Sold + Denials + Regrets 当行业公式
      （C 厂商词条有此骨架；本库不升 S，Regret 多数不可加）
```

HSMAI Academy Glossary（A，2026-08-24 打开）Unconstrained Demand 的公开公式是 OTB 散客 + 预期散客 + OTB 团 + 预期团——**不是** Sold+拒单+流失。HSMAI Global（A）：需求预测 = 无约束需求，用来做价/库存/限制；那是 Forecast 对象，不是前台故事。

**不是 STR Occupancy。** CoStar STR Glossary 2026-08-24 打开：有 Occupancy = Sold/Available；**无** Denial / Regret / Turndown 主词条。**未找到** STR Denials Index。禁止发明行业拒单%。

---

## 4. 最小日志（明天就能开始，不编中国字段名）

顾问要的是 **内容**，不是某家 PMS 列名（中国字段 **NV**，不编西软/绿云/石基名）：

```
Stay Date | 记录日 | 件数或间夜 | 房型 | 渠道（电话/前台/官网/OTA 可见不可订）
原因：容量满 / 该房型关 / MinLOS或CTA / 价档关 / 报价后不订 / Unknown
是否已知去竞对：是 / 否 / Unknown
限制当时是否开着：MinLOS=? CTA=? Closed?
```

没有系统就一张表。重复询同一人算 **一次**（Queenan 等指出同一客人多次问可用会重复计数——A 综述方向）。员工在自己官网刷搜索会制造假 Web Denial/Regret（Duetto Lost Business）。

---

## 5. 顾问决策含义

1. **现象 ≠ 指标 ≠ 动作。** 「赶过人」是现象。日志才是指标。涨 BAR 是动作，且必须另有 Pace + Remaining。  
2. **P42 上门成交 ≠ 拒单。** 人已经在前台并且买了，是捕获需求；高峰更不该打折。没买又没记，仍不是涨价证据。  
3. **P33：限制会生产拒单。** CTA/MinLOS 开着时的「订不了」先当自己挡掉的需求，松限制优先于加价。  
4. **P03 满房风险看 Remaining + Pace，不看故事。** 日志只加旁证。  
5. **P09 Ahead 仍要剩余。** Ahead 但剩很多，不因为前台说忙就 +15%。  
6. **禁止**用故事一夜 +15% 或 −15%。

转到决策卡：`../recommendations/dont-raise-on-verbal-denials.md`。

---

## 6. 适用 / 限制

- 适用：用户用前台/预订口头拒客论证涨价；或问「0 拒单是不是没需求」；或满房日要把 Sold 写成 Demand。  
- 限制：本卡 **不**给出行业拒单率、Walk 金额、中国 PMS 字段、recapture %。无日志只给条件句。  
- 钟点房 / day-use 本小时仍空（scout MEDIUM）。若口头赶的是钟点客：标 Unknown，不要按过夜 BAR 涨过夜库存。

---

## 7. 证据

| 论断 | 级 | 源 |
| --- | --- | --- |
| Denial = 不报价（售罄/房型不可订）；Regret = 报价不订 | A Vendor | Duetto Glossary（2026-08-24 打开）https://www.duettocloud.com/en-us/glossary |
| Web Denial / Web Regret；限制可制造 Denial；自搜污染 | A Vendor | Duetto Resource Hub *Lost Business*（2026-08-24 打开）https://duetto.my.site.com/resourcehub/s/article/TS-3rd-Party-Data-Lost-Business-Overview |
| 勿把 regrets & denials 当 Unconstrained 主数据 | A Vendor | IDeaS Science 101（库内 2026-08-20）；公开摘要 *Why leading scientists call regrets and denials dirty data*（本轮全文抓取空，不升 S） |
| Unconstrained = 无价/库存约束的需求；HSMAI 公式是 OTB+预期，不是拒单加总 | A | https://academy.hsmai.org/glossary/unconstrained-demand/ （2026-08-24）；课纲含 unconstrained vs constrained https://academy.hsmai.org/course-forecasting-rooms/ ；https://global.hsmai.org/insight/different-forecasts-for-different-objectives/ |
| 历史售出被容量/Booking Limit 截断 | S | Weatherford & Kimes 2003（forecast-framework 已核） |
| Denied ≈ latent；price-regret probably not | S 书目 | Orkin, *Cornell HAQ* 39(4) 1998. DOI 10.1177/001088049803900404（摘要级，不摘正文） |
| Denial/Regret 的 CRS 实务口径（sold out 或 restriction） | B | TCRM glossary（2026-08-24 打开）https://tcrmservices.com/hotel-revenue-management-terms-definitions/ |
| 应记个人/团队拒单（LOS、细分） | B | Xotels unconstrained demand 页（2026-08-24 打开） |
| STR Occupancy 公式；无 Denial 词条 | S | CoStar STR Glossary（2026-08-24 打开）https://www.costar.com/products/str-benchmark/resources/glossary |
| 行业拒单%、STR Denials Index、中国 PMS 字段、Walk 成本、华住 699 | — | **未找到 / 禁止编** → NV |

未采用：Peaqplus / Smartness 等 C 词条把 Unconstrained = Sold+Denials+Regrets 当公式，且有「活动日 recapture loss 15–25%」——不进本库。SiteMinder 本轮 timeout，不引。

---

## 8. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-UD-01 | 拒单补全的可复现公开标准 | 满房日 Demand≥Sold；有干净 Denied 再加一层，标 Hypothesis（与 unconstrained 卡同一 ID） |
| NV-DEN-01 | 中国 PMS / 绿云 / 西软 / 石基拒单字段名 | 要内容（日期/房型/原因），不编列名 |
| NV-DEN-02 | 行业或本店「正常拒单率」 | **不报 %**。只看有无日志、原因结构、与 Pace/Remaining 是否同向 |
| NV-DEN-03 | Walk 成本 | 已有 NV；本卡不写金额 |
| NV-DEN-04 | 钟点房拒单是否占用过夜库存 | 本小时不写钟点剧本；口头钟点赶客不当过夜 Demand |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 00:17 CST | 首版。指标+分类。不写 P43 剧本。钟点房仍空。 |

剧本见 P43 `../advisor-playbooks/verbal-denials.md`（2026-08-24 02:17）。
