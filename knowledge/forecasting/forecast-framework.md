# Forecast Framework｜酒店需求预测（顾问可调用）

> 资产：Wave3 理论卡  
> 路径：`forecasting/forecast-framework.md`  
> 能力层级：Calculate → Diagnose（部分 Advise：预测驱动的观察点）  
> Last Verified：2026-08-20  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 配套：`theory/otb-pickup-pace.md` · `metrics/` OTB/Pickup/Pace · `diagnosis/problem-tree.md` §15 Forecast Error  
> 过程：`decision-framework/advisor-process.md`  
> 禁止：把 Budget 当 Forecast；把满房日 Sold=100 写成 Demand=100；伪造精确最终 OCC/ADR/收入；整段摘录教材。

---

## 0. 一句话

Forecast 回答「这条 Stay Date **还可能来多少**」，不是「已经有多少」。顾问用它决定剩余库存的进攻/防守，**不能用它代替 OTB 事实**。点估计必须带区间；满房截断必须做 Unconstrained 校正。

```
OTB（已确认） + 对剩余 Pickup 的判断 = Constrained Forecast
Constrained Forecast ≤ Capacity
Unconstrained Demand 可以 > Capacity
Budget 是目标，不是预测
```

---

## 1. Theory（理论）

预订沿 Booking Curve 随 DTA 缩短而累积。预测是对这条曲线**尚未走完的尾巴**做估计，再叠季节、DOW、趋势、事件。

Weatherford & Kimes（2003）把酒店 RM 预测方法归为三类（Lee 1990 分类；论文公开摘要可核）：

| 类 | 只看什么 | 典型工具 |
| --- | --- | --- |
| Historical booking models | 该类日的**最终**到达/售出 | MA、指数平滑、Holt、回归最终值 |
| Advanced booking models | 该类日随 DTA 的**累积预订** | Pickup（加性/乘性）、Booking Curve |
| Combined models | 历史最终 + 当前在手 | 加权 / 回归组合 |

证据级 **S**（方法分类与论文存在）。哪一种「永远最准」**不是定律**：同一篇论文里 Choice 样本 pickup/回归较好，Marriott 样本指数平滑 / pickup / MA 更稳健；作者建议用本店数据回测。顾问默认：**中短 DTA 用 Advanced/Combined；长 DTA 或无在手用 Historical；事件日加 Event Adjustment。**

STR/CoStar 官方不给单店「应到 X%」公式。STR 做的是**市场级** Hotel Market Forecast（与 Tourism Economics 合作），以及 Forward STAR 的 Occupancy on the Books / Pickup。店内 Forecast 是另一对象。证据级 **A/S**（FAQ + Glossary，2026-08-20 打开）。

---

## 2. 四个预测对象（必须分开写）

顾问输出至少能判断这四项，并写不确定性。禁止只报一个「预测入住率」。

| 对象 | 定义（顾问口径） | 典型写法 | 不确定性来源 |
| --- | --- | --- | --- |
| **Final Demand**（Unconstrained） | 若无容量/关房/价拒，愿意入住的间夜 | 区间，可 > Available | 截断、Lost/Denied 不可得、事件 |
| **Final OCC**（Constrained） | 最终 Rooms Sold / Available，**≤100%** | 点 + 区间（如 72–82%，首选 76%） | 尾巴 Pickup、取消、一团 wash |
| **Final ADR** | 最终 Room Revenue / Rooms Sold | 方向 + 区间；已售锁价会稀释 BAR 变动 | 剩余成交价、结构、促销 |
| **Final Revenue** | OCC × ADR × Available（口径声明后） | **只给方向或粗区间**；禁止伪造精确增收 | 上两项误差相乘 |

**强制句式：**

```
Stay Date __，DTA=__。
OTB __间 / __%。Remaining __。
Constrained Forecast OCC：区间 __–__，首选 __（方法：__）。
Unconstrained Demand：__间（或「>Capacity，Need Verification」）。
Final ADR：方向 __，区间 __–__（已售 __ 间锁在 OTB ADR __）。
Final Revenue：随 OCC/ADR 条件句，不报假精确金额。
不确定性：High/Medium/Low，因为 __。
```

---

## 3. Constrained vs Unconstrained（Sold=100 ≠ Demand=100）

### 3.1 定义

| 词 | 顾问定义 | 不是什么 |
| --- | --- | --- |
| Constrained Demand / Forecast | 受容量、Booking Limit、Closed、Restriction、当前价格影响后，**预期实际售出** | 不是「真实想住的人数」 |
| Unconstrained Demand | 若无容量与控制约束、按当前或参照价格，**愿意来的间夜** | 不是无限需求；也不是搜索次数 |

公开互证：

- Duetto Glossary（2026-08-20 打开）：Unconstrained = 想住的总数，不论房量；Constrained = 实际接受、受容量/限制约束。200 人想订 120 间店 → Unconstrained=200。证据级 **A（Vendor Methodology）**。
- IDeaS *Revenue Science 101: Forecasting with Confidence*（Ravi Mehrotra；2026-08-20 打开）：Unconstrained = 不被容量或限制约束、若资产无限可售出的需求。100 间店 Demand≈100 与 Demand≈1000 最终都可能满房，**可采取的 yield 完全不同**。并写明必须同时预报不确定性。证据级 **A（Vendor Methodology）**。
- Weatherford & Kimes 2003 公开 PDF（eCommons）：历史售出被容量和各房价档 Booking Limit **截断（censored/truncated）**；多数优化需要 Unconstrained。证据级 **S**（论断级，不摘公式页码当教条）。
- HSMAI Academy *Forecasting for Accommodation Suppliers* 课纲公开列出「unconstrained vs constrained demand」（2026-08-20 打开课页）。证据级 **A**（课纲主题，非公式）。

**顾问推论（B / Hypothesis）：** 关房日历史 OCC=100% 会系统性**低估**需求。用这类日当「明年同日最多 100%」会低估涨价空间，也低估 Displacement。

### 3.2 Lost / Denied / Sellout / Closed（先分清再估）

| 词 | 公开/实践口径 | 顾问用法 | 级 |
| --- | --- | --- | --- |
| **Denied / Denial** | 客人来了，系统因售罄/房型不可订**不报价**（Duetto Glossary） | 满房或关库存的硬信号；可支撑涨/关低价 | A Vendor |
| **Regret** | 看到价但不订（Duetto） | 可能是价高、产品、或比价；**单独不得当涨价证据** | A Vendor |
| **Lost Demand** | 实践统称：Denied + 部分 Regret + 关档后不再出现的需求 | 无本店日志则 Unknown | B / NV |
| **Sellout** | 该 Stay Date（或房型）可售=0 | Constrained OCC 撞天花板；必须标「截断」 | B |
| **Closed** | 主动关房价档 / 渠道 / 房型 / CTA | 造成的「没订」不是需求死 | B |

IDeaS 公开文明确：**不主张**用 lost business / regrets & denials 当 Unconstrained 主数据（在线环境下偏差大）。这是 **Vendor Methodology**，不是「行业禁止记拒单」。顾问态度：

```
有干净 Denied 日志 → 当旁证，不单独外推成 Demand
无日志 + 历史满房 → 至少写「Unconstrained ≥ Capacity」，不要写 Demand=Sold
禁止把 OTA 搜索热度直接换算成间夜（C/D）
```

可操作补全（Hypothesis，标 NV-UD-01，不是 S 级标准）：

1. **容量截断：** 历史最终 OCC≥98% 或当日 Closed → Unconstrained ≥ Sold；上沿用「同类未满日尾巴」或「Denied 计数（若有）」加一层，写区间。  
2. **关档截断：** 某 Rate Plan Closed 后 Pickup 骤停 → 该档需求被挡住，不能用该窗速度外推「没人要」。  
3. **朴素加性：** `Unconst ≈ OTB + 历史同 DTA 剩余 fill + max(0, Denied)`。Denied 未知则第三项=0 并声明低估。  
4. 禁止：在无拒单、无搜索、无竞对满房时，把「感觉还能再卖 30 间」写成 Fact。

---

## 4. 经典方法（顾问手工层；ML 后置）

每项：输入 / 公式骨架 / 何时用 / 何时不用 / 证据。公式是行业通行骨架，**不是**从某教材正文摘录。

### 4.1 Historical（历史最终值）

**输入：** 同类 Stay Date 的最终 OCC/ADR（同 DOW、同季节、剔事件）。  
**骨架：** `F_hist = 中位或均值(历史最终)`；可用最近 N 个同类日，或加权近 > 远。  
**用：** DTA 很长、OTB 还很少；新店以外的「锚」。  
**不用：** 去年有一次性大团/活动；日历错位（春节）；满房截断未校正。  
**证据：** Weatherford & Kimes 2003 Historical class（S）；STR 用 YoY % 与 running 平滑看市场趋势（A，FAQ：running 3-month / 12-month 是加总平滑，**不是**单店 Forecast 公式）。

### 4.2 Moving Average（MA）

**输入：** 最近 k 个同类最终值或最近 k 个同 DTA OTB。  
**骨架：** `MA_k = (x1+…+xk)/k`。常见 k=3/4/8（论文测试过 2–8；不是规定）。  
**用：** 短记忆、去掉单点噪声。  
**不用：** 趋势明显、季节刚切、事件日。  
**证据：** 2003 文 Marriott 样本中 MA 属较稳健方法之一（S，结果级，不是普适冠军）。

### 4.3 Seasonality / DOW / Trend

| 因子 | 顾问做法 | 不做什么 |
| --- | --- | --- |
| **Seasonality** | 先分旺/平/淡或月，再比同类 | 用全年平均套国庆 |
| **DOW** | 商务店周中 vs 周末分曲线；中国调休当「假周五」 | 把周二当周六失败 |
| **Trend** | 近 8–12 周最终 OCC/ADR 的方向，作小幅乘数 | 把一年趋势线性外推到事件日 |

IDeaS 公开列举 pace / season / DOW / YoY trend / LOS / asset type 为需求变化维度（A Vendor）。  
STR FAQ：running data 用来平滑季节、看底层趋势（A）。  
**Hypothesis：** 趋势乘数限制在 0.95–1.05，除非有市场级证据（城市需求 +20% 这种不编）。

### 4.4 Booking Curve

**输入：** 历史「每个 DTA 的 OTB 位置」→ 一条 fill curve。  
**骨架：** 看当前 OTB 落在曲线的百分位；`F_curve = OTB_now / 历史同 DTA 完成率`。  
例：历史 DTA=14 已完成最终的 70%，今年 OTB=120 间 → 粗 `F ≈ 120/0.70 ≈ 171`（Constrained 再截到 Available）。  
**用：** 有本店曲线；判断 Pace Ahead/Behind 的「还会来多少」。  
**不用：** 曲线年含事件；新店；商务后置店在 DTA=30 用度假前置曲线。  
**证据：** 曲线是 Advanced 类的可视化；2003 文 Booking Curve 在 Choice 样本**并不更准**（S：提醒不要神化曲线）。Xotels / 多家实践把曲线当 pace 图（B）。  
与 `theory/otb-pickup-pace.md` 同一条曲线，不另起口径。

### 4.5 Pickup 模型（加性 / 乘性）

**加性（Additive Pickup）** — 顾问默认第一刀：

```
F_add = OTB_now + 历史同 DTA→0 的平均净 Pickup
```

**乘性（Multiplicative Pickup）：**

```
F_mul = OTB_now × (历史最终 / 历史同 DTA OTB)
```

**用：** 中短 DTA（常见 3–21），OTB 已有意义。加性在 OTB 很小或为 0 时更稳；乘性在 OTB 已高、曲线比例稳定时可用。  
**不用：** 刚涨/降价后的 1D（速度被自己污染）；一团进账；渠道关着的假慢。  
**证据：** Weatherford & Kimes 2003 将 additive pickup 与 multiplicative 分列；pickup 在两套样本都进入「较稳健」（S）。Weatherford 1998 航空语境加性/回归优于乘性（S，跨行业，酒店不自动成立）。

**与 Pace 的关系：** Pace 告诉你「现在偏不偏」；Pickup 模型告诉你「尾巴加多少」。Pace Behind 时，**不要**仍用「领先年」的尾巴，改用剔事件的中位尾巴或下调。

### 4.6 Pace 调整

```
Pace_pp = OTB%_now − OTB%_benchmark（同 DTA）
F_pace ≈ F_base × (1 + λ × Pace_pp)
```

`λ` **未知**。顾问不编弹性。改用离散调整（Hypothesis）：

| Pace | 对 Historical/曲线预测的处理 |
| --- | --- |
| Ahead ≥ +8pp 且 Pickup Fast | 上沿可上移；Constrained 更接近 Capacity |
| On（−5 ~ +8pp） | 用中位尾巴 |
| Behind ≤ −5pp 且 Pickup Slow | 下沿下移；不要为追 Budget 抬预测 |

带宽与理论卡 §9.2 一致。

### 4.7 Event Adjustment

**输入：** 事件日期、场馆距离、是否 overnight、历史同类事件曲线（不要只用无事件 STLY）。  
**做法：** 先换「事件曲线」再谈 Pickup。无同类事件 → 预测区间加宽一档，幅度 Confidence ≤ Low。  
**禁止：** 「有演唱会」直接把 Forecast OCC 写成 95%。  
**证据：** STR/Tourism Economics 市场预测纳入 market event（A，FAQ）；IDeaS 公开提 special events（A Vendor）。事件日单店加多少 = **Need Verification / Hypothesis**。

### 4.8 顾问默认组合（无 RMS 时）

```
1) 选同类日（DOW + 季节，剔事件；事件日改事件集）
2) Historical 中位最终 = 锚
3) 有 OTB：F_add = OTB + 历史同 DTA 剩余 fill（净 Pickup）
4) 有曲线：F_curve = OTB / 历史完成率
5) 取 F_add 与 F_curve 的重叠带；再被 Capacity 截成 Constrained
6) Pace/Pickup 明显偏离 → 把首选推向重叠带的上沿或下沿
7) 事件：换曲线或把区间加宽，不把事件写成点
8) 输出：区间 + 首选 + 方法名 + 不确定性
```

缺历史：Pace 家族 Unknown，Forecast 只能写「OTB + 当前速度 × 剩余 DTA」并**大字注明高估早满、低估后置**（与理论卡「禁止线性外推当最终 OCC」一致）。

---

## 5. 不确定性怎么写（禁止假精确）

| 条件 | 区间宽度起点（Hypothesis） | Confidence |
| --- | --- | --- |
| 有本店曲线 + 3D/7D Pickup + 非事件 + DTA≤14 | OCC ±4–6pp | Medium |
| 只有 Historical、无 Pickup | OCC ±8–12pp | Low–Medium |
| 事件旗标、无 overnight 细节 | OCC ±10pp 或更宽 | 幅度 Low |
| 历史满房未 Unconstrain | 只写下沿≥历史 OCC，上沿 Unknown | Low |
| 用户要「精确到 1%」 | 拒绝点估计，给区间+首选 | — |

ADR：已售占比高时，BAR 变动对 Final ADR 的传递 ≈ `Remaining/Total`（粗，Hypothesis）。  
Revenue：只写「若 OCC 走首选且增量成交靠近新 BAR，则收入方向随 ADR」——**不写精确元**。

IDeaS 公开强调：不但预报结果，也预报结果的可靠性（A Vendor）。本库落地为区间 + Confidence，不抄厂商模型。

---

## 6. Theory → Decision 映射

| 预测判断 | 决策含义 | 先调用 |
| --- | --- | --- |
| Constrained Forecast 将撞容量，且 DTA 仍长 | 保护库存 / 涨价 / 关低价；评 Restriction | P01 High Demand · Increase BAR · Protect |
| Unconstrained ≫ Capacity（满房史 + Denied 或竞对满） | 定价权在；禁止按「已经 100% 所以需求到头」降 | Event / High Demand · 不降价 |
| Constrained Forecast 明显低于 Budget，但 Pace On | **先改预期**，不砸价追错目标 | Hold · problem-tree §15 |
| Forecast 尾巴大、当前 Pickup 已匹配后置曲线 | 低 OTB 不是危机 | `hold-price-curve-late.md` |
| Forecast 尾巴小、Pace Behind、价高、供给开 | 才进入刺激 | `stimulate-slow-pickup.md` · P02 |
| 市场 Forecast/Comp Forward 同样弱 | 本店降价弹性可能很差 | `do-not-cut-price-market-also-weak.md` |
| 事件取消后 Forecast 未改 | 立刻回到平日带 | Event 卡退出条件 |
| RMS 叫降但本店 Pickup 不慢 | Override：先查输入脏不脏 | 过程文件；不盲从 |

**Forecast vs Budget vs OTB：**

```
OTB     = 事实位置
Forecast = 对尾巴的判断（可每周改）
Budget  = 财务目标（改得慢，经常偏乐观）
冲突时：信 OTB 事实 → 用 Forecast 决策 → Budget 只作对照，不单独当 Behind 铁证
```

---

## 7. 顾问最小手工表（单体店）

对焦点 Stay Date 填一行即可出第一刀预测：

```
Stay Date | DTA | Available | OTB Rooms | Remaining
历史同 DTA OTB | 历史最终 OCC | 历史剩余 fill
3D / 7D 净 Pickup | Days-to-Sellout
F_add | F_curve | Constrained 首选 | 区间
Sellout/Closed? | Denied? | Event?
Unconstrained 下沿（≥Constrained；满房则 ≥Available）
```

---

## 8. 证据分级与来源（2026-08-20 核）

| 论断 | 级 | 源 | URL / 检索 |
| --- | --- | --- | --- |
| Occupancy on the Books = 未来期确认在手入住 | A | CoStar FAQ | https://www.costar.com/products/str-benchmark/resources/faqs |
| OCC=Sold/Available；ADR=Rev/Sold；RevPAR=Rev/Available | S | CoStar Glossary | https://www.costar.com/products/str-benchmark/resources/glossary |
| 市场级 Hotel Forecast 与 Tourism Economics 合作；含 event / 经济指标 | A | 同上 FAQ「How does CoStar forecast hotel markets?」 | 同上 |
| Forward STAR：Occupancy on the Books + Pickup | A | Forward STAR Data Reporting Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines |
| 预测三类：Historical / Advanced / Combined；pickup、MA、平滑较稳健 | S | Weatherford & Kimes, *Int. J. Forecasting* 19(3):401–415 (2003) | https://doi.org/10.1016/s0169-2070(02)00011-0 ；eCommons 记录 https://ecommons.cornell.edu/items/046131d9-289a-4ee2-8249-23c59a5362f0 |
| Unconstrained 被容量与 booking limit 截断 | S | 同上公开 PDF 论述（不摘公式当教条） | eCommons bitstream（本轮检索可见；Springer 全文页 timeout，书目已核） |
| 课纲含 unconstrained vs constrained | A | HSMAI Academy Forecasting for Accommodation Suppliers | https://academy.hsmai.org/course-forecasting-rooms/ |
| Unconstrained vs Constrained 定义；Denial / Regret | A Vendor | Duetto Glossary | https://www.duettocloud.com/en-us/glossary |
| 满房仍可能 Demand≫Capacity；须预报不确定性；慎用 regret/denial | A Vendor | IDeaS Revenue Science 101 | https://ideas.com/revenue-science-101-forecasting/ |
| Estimation and Forecasting 为教材正式主题 | S 书目 | Talluri & van Ryzin 2004/2005 Springer | https://link.springer.com/book/10.1007/b139000 （**不摘正文**） |
| 价格反应 / 预测在定价优化中的位置 | S 书目 | Phillips, *Pricing and Revenue Optimization* 2e, 2021 | https://www.sup.org/books/business/pricing-and-revenue-optimization （**不摘正文**） |
| eCornell Forecasting and Availability Controls | A 课名 | Cornell 公开课页 | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/forecasting-and-availability-controls-in-hotel-revenue-management/ （本轮 WebFetch **timeout**，不引用讲义数字） |
| 「DTA=14 应到 X%」类门槛 | — | **未找到** STR/HSMAI 官方页 | Need Verification；禁止当定律 |
| 酒店业拒单补全的 S 级公开标准算法 | — | **未找到** | NV-UD-01 |

未采用：把厂商「可增收 3–7%」写成普遍规律（IDeaS 文转述研究，样本未核）。  
未编造 URL。打不开的课页不摘数字。

---

## 9. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-UD-01 | 酒店拒单/关房日 Unconstrain 的可复现公开标准 | 满房日写 Demand≥Sold；有 Denied 再加一层，标 Hypothesis |
| NV-FC-01 | 加性 vs 乘性 Pickup 在中国商务/度假店的误差 | 默认加性；OTB 很低不用乘性 |
| NV-FC-02 | Forecast 应拆到 Stay Date × Room Type × LOS 还是先总量 | Phase 1 先总量+分房型 Remaining；LOS 后置 |
| NV-FC-03 | eCornell 讲义中的误差指标/作业数字 | 不引用 |
| NV-03 | Pace 日期/星期对齐 | 与理论卡相同：节按节，其余先星期 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。核 STR FAQ/Glossary、Weatherford & Kimes 2003 书目、HSMAI 课纲、Duetto Glossary、IDeaS Science 101。区间宽度与 λ 为 Hypothesis。 |

## 11. Scout 2026-08-20 17:00 交叉引用（不改 1–10 正文）

专用卡：`forecasting/unconstrained-vs-constrained.md`（**Vendor Methodology · Duetto Resource Hub**，不是 S 级普遍公式）。禁止编造 IDeaS 对等公式。

| 顾问判断 | 先调用 |
| --- | --- |
| 满房日 Sold=100 当 Demand=100 | 专用卡 §4；本页 §3 仍有效 |
| OCC 低但 MinLOS/CTA 开着、有人要降价 | **P33** `restriction-overuse.md` · `do-not-cut-when-restricted.md`：先松限制，不要先降 BAR |
| Pace Ahead 还按历史尾巴加需求 | TBB 不为负（Duetto 方法）：领先时增量封 0 |
| Constrained 优化前 | 先按现行 CTA / MinLOS / MaxLOS 扣掉无法实现的需求（P33 机制） |
| 缺口大且限制并不过严 | yield opportunity → 涨价或收紧，筛高价值长住 |

核源：https://duetto.my.site.com/resourcehub/s/article/Understanding-Forecasts （2026-08-20 打开）。侦察全文：`scout/2026-08-20-1700.md`。

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 17:00 CST | 追加本节。不重写 §1–10。 |

## 12. T20 指针（2026-08-22 16:17，不改 §1–11）

**Budget ≠ Forecast** 的战略层展开：`theory/revenue-strategy.md` · `recommendations/dont-cut-to-hit-budget.md`。

HSMAI Glossary（2026-08-22 打开）：Budget = 想去哪；Forecast = 正在去哪。战术定价挂 Forecast。Pace to Budget = OTB/Budget，**不是**「差 10% 必须砍」的门槛。

顾问：预算差了先改预期 / 先拆按日 Pace，**禁止**把下周全砍去救完成率。P17 overlay 错同样先改判断，不砍 BAR 救预算。§6 冲突句仍有效。

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 16:17 CST | 追加本节。不重写 §1–11。 |
