# Hotel Pricing Framework｜定价框架（顾问可调用）

> 资产：Wave3 理论卡  
> 路径：`pricing/pricing-framework.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Theory + Best Practice + Vendor Methodology + Hypothesis  
> 配套幅度：`pricing/how-much-to-move.md`  
> 配套过程：`decision-framework/advisor-process.md` 第 4 段  
> 问题树：§1 OCC Low · §13 Price Too High · §14 Price Too Low · §16 Event  
> 禁止：把「低入住率=降价」写成方法；把 Competitor Rate 当目标价；伪造弹性系数与精确增收。

---

## 0. 一句话

价格是对**剩余需求**的赌注。输入必须是 DTA × OTB × Pickup × Remaining × Pace × 竞对 × 取消，而不是「感觉贵了」或「OCC 低」。Competitor Rate 是信号不是答案。给不出点就给**区间 + 首选**。

**硬否定：**

```
低入住率 = 降价     ← 不是方法论
竞对比我便宜 = 我该降  ← 不是方法论
有活动 = 暴涨        ← 不是方法论
```

先走 `diagnosis/problem-tree.md` §1，再决定：降 / 围栏 / 只修渠道 / 不动。若降，幅度走 `how-much-to-move.md`。

---

## 1. Theory（价格在 RM 里是什么）

固定容量 + 易逝库存 + 可细分需求 → 同一间夜对不同客人的保留价格不同。定价工具是 **差异化**，不是「找一个全市正确价」。

书目级（不摘正文）：

- Talluri & van Ryzin 2004/2005：Price-based RM / Dynamic Pricing 为正式主题（S 书目）。  
- Phillips *Pricing and Revenue Optimization* 2e, 2021：价格反应与约束优化（S 书目）。顾问用它的**边界**：弹性未知时做可逆小步，不先求精确系数。  
- Hayes et al. *Revenue Management for the Hospitality Industry* 2e：酒店差别定价（S 书目）。  
- Cornell HADM 4050 公开描述：RM sometimes referred to as Dynamic Pricing；profitably managing hotel capacity（A 课页，curriculum 已核）。

公开实践分层（B/A）：

| 层 | 含义 | 来源 |
| --- | --- | --- |
| Rack / 固定牌价 | 很少再当日常成交锚 | 行业史 |
| **BAR ladder** | 一张 Best Available Rate，其他产品按固定差或固定 % 联动 | Duetto Glossary：BAR=无资格条件的最低公开价；HSMAI-Duetto Open Pricing 白皮书批评固定阶梯把所有产品锁死（A Vendor / A 白皮书） |
| **Dynamic** | 价随需求/时间变，但仍可能整梯一起动 | 多家；白皮书提醒「浮动 BAR ≠ 各产品独立优化」 |
| **Open Pricing** | 房型 / 渠道 / 细分独立定价，不绑死一张 BAR | Duetto / HSMAI 白皮书（Vendor Methodology，不是本库默认必须采用） |

本库 Phase 1 **默认仍以 BAR + 围栏产品**说话：用户多数改的是公开 BAR。Open Pricing 只在解释「为什么套房可以不跟大床降」时引用，不要求用户上某家 RMS。

---

## 2. 方法清单（顾问必须能点名）

每项：定义 / 何时用 / 何时误用 / 决策含义。

### 2.1 BAR（Best Available Rate）

无资格条件的最低公开价，基础房型的日常锚。  
**用：** 对外沟通、和竞对比位置、连动公开价。  
**误用：** 把 BAR 当唯一成交价（忽略预付/会员/打包已打穿）；只改一个渠道的 BAR。  
**决策：** 涨/降 BAR 是公开信号，影响品牌与比价。能用围栏就先别动 BAR。

### 2.2 Dynamic Pricing

价随需求、剩余、DTA 变动，而不是一年一张表。  
**用：** 所有未来日。  
**误用：** 把「每天改价」当成策略本身；无 Pace/Pickup 就跟 RMS 盲跳。  
**决策：** Dynamic 是机制，**方向仍要诊断**。

### 2.3 Occupancy-based（基于入住率）

`OTB% 到阈值 → 自动跳下一档 BAR`。  
**用：** 无 RMS 的粗栅栏，且阈值来自**本店曲线**。  
**误用：** 「OCC 低就降」——这是 Occupancy-based 的**庸俗版**，本库明确开除。同一 60% 在 DTA=14 商务周二和度假周六含义相反（理论卡）。  
**决策：** 只允许写成 `同 DTA Pace + Remaining 压力` 的栅栏，禁止写成「低于 70% 降价」。

### 2.4 Demand-based（基于需求）

看 Forecast / Unconstrained / Pickup / 事件，不看绝对 OCC%。  
**用：** 默认正确层。Forecast 见 `forecasting/forecast-framework.md`。  
**误用：** 把错误 Forecast 当需求；把一团当 Transient 需求。  
**决策：** Demand 强 → 收价/关低价；Demand 弱 → 先问「弱在市场还是弱在本店」。

### 2.5 Competitor-based（基于竞对）

Rate Shop 作为**价格位置家族**。  
**用：** 校准第一刀落在可解释的带内；判断「已是最高则只关不涨」。  
**误用：** 对齐最低或最高竞对当公式；Comp Set 不可比仍跟。  
**决策：** 竞对是信号。过程文件硬规则第 6 条。

### 2.6 Value-based（基于价值）

相对产品、位置、口碑、设施的溢价/折价。  
**用：** 定价格带的中线（我们该比 Comp 贵还是便宜）。  
**误用：** 用价值故事覆盖 Pace Behind+价已经最高。  
**决策：** 价值定**带**，Pace/Pickup 定**带内移动**。

### 2.7 Seasonal / Event / DOW

| 类 | 用 | 误用 |
| --- | --- | --- |
| Seasonal | 旺淡季换带，不是每天微调 | 淡季把 BAR 砸到变动成本（成本未知则至少不要无围栏深折） |
| Event | 证实 overnight 后换事件带 + 限制 | 「当地有活动」暴涨；事件结束后空挂事件价 |
| DOW | 商务周中 / 休闲周末两套曲线 | 周二套周六策略；中国调休当普通周五 |

### 2.8 Last-minute

DTA 很短（通常 0–3）的最后一档，**必须有截止日期**。  
**用：** 供给开着、价仍明显高于市、历史尾部确实会来或确认来不了。  
**误用：** DTA=14 当 last-minute 大促；把 BAR 永久砸穿。  
**决策：** 走 Last Minute Unsold（P05 未写完前用问题树 §9）。

### 2.9 Advance Purchase / Member / Promo / Package（围栏）

| 工具 | 围栏（谁被挡在外） | 顾问首选场景 |
| --- | --- | --- |
| **AP / 预付不可退** | 要灵活性的人 | 弱日刺激、高峰泄漏则关 |
| **Member** | 非会员 | 品牌义务内让价，不打穿公开 BAR |
| **Promo** | 渠道/日期/配额 | 真弱且价高时的第一刀；事件日默认拒 |
| **Package** | 必须买捆绑 | 肩日、含早/门票；高峰防拆包 |

**原则：** 能用围栏解决的，不先动公开 BAR。与 `stimulate-slow-pickup.md` 一致。

### 2.10 Room Type Differential

套房 / 高级房相对基础房的差价。本库默认：**先动 BAR/基础房；高档差价不自动跟涨跟降**（过程文件 + Fast Pickup 剧本）。倒挂另挂 P34。

---

## 3. 「低入住率=降价」为什么不是方法

问题树 §1 整棵就是反例生成器。定价框架只固化结论：

```
OCC 低
  ├ 口径假 / DTA 还长 / 曲线后置     → 不动价
  ├ 库存关 / 渠道不同步 / 限制过严   → 修供给
  ├ 市场也弱                       → 不砸 BAR（见 do-not-cut 卡）
  ├ 价已 ≤ 竞对                    → 不降，查份额/产品
  ├ Forecast/Budget 错了           → 先改预期
  └ 价明显高于市 + Pace Behind + Pickup 慢 + 供给开
        → 才允许动价：先围栏 −3–5%，再考虑 BAR −5–10%
        → 禁止一夜 −15%（除非 DTA≤3 且 Pickup≈0 且价明显高于全部竞对）
```

Occupancy-based 栅栏若要存在，必须改写成：

```
IF 同 DTA Pace Behind AND Pickup Slow AND Remaining 厚 AND 供给开 AND BAR > 最低可订竞对
THEN 进入降价鉴别
ELSE 不因 OCC% 降价
```

---

## 4. 定价动作类型（顾问只能从这里挑）

| 动作 | 典型卡 | 不是 |
| --- | --- | --- |
| 涨 BAR | `increase-bar-pace-ahead.md` · P01 | 「适当涨」 |
| 收价到最低竞对附近 | `how-much-to-move.md` | 一次跳到最高竞对之上 |
| 只关低价 / 只限制不涨 | `protect-inventory-fast-pickup.md` | 价已最高还加一刀 |
| Hold | `hold-price-curve-late.md` | 「持续观察」当主动作 |
| 围栏促销，BAR 不动 | `stimulate-slow-pickup.md` · `decrease-bar-true-weak-demand.md` 的轻分支 | 暗降打穿 BAR |
| 小步降 BAR | `decrease-bar-true-weak-demand.md` | 一夜 −15% |
| 不降（市场也弱） | `do-not-cut-price-market-also-weak.md` | 跟竞对自杀 |
| 事件第一刀 | `event-pricing-first-cut.md` | 无 overnight 当 Compression |
| 只修渠道 | 问题树 §1.6 | 降价掩盖同步故障 |

一次分析 1–3 个动作。价格必须有 **Current / Range / Preferred**。

---

## 5. 弹性的决策用法（不先求系数）

Phillips 书目主题是价格反应；本库 Phase 1 **不估计 ε**。

可逆试验（Hypothesis）：

1. 第一刀落在 `how-much-to-move.md` 的保守重叠带。  
2. 24/48h 用间夜 Trigger 看成交是否还在。  
3. 成交停 → 回退，不坚持「模型说该在这」。  
4. 成交仍快 → 第二刀，仍禁止无新信号跳最高之上。

没有本酒店反馈时，**幅度永远不得标 High**。

---

## 6. Theory → Decision

| 理论点 | 决策 |
| --- | --- |
| 差异化定价前提 | 同一 Stay Date 可以 BAR + AP + Member 并存 |
| 剩余库存才是赌注对象 | 已售锁价不进「涨价收益」 |
| 截断需求 | 满房史日更该问「还能不能涨」，不是「已经 100%」 |
| 竞对是均衡参照不是最优解 | 第一刀收到最低竞对附近，不一次对齐最高 |
| 围栏降低牵连 | 弱日先 −3–5% 预付，不先砸公开 BAR |
| Open Pricing（Vendor） | 解释「高档房可不跟降」；不强迫改系统 |

---

## 7. 证据（2026-08-20）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| BAR = 无资格条件最低公开价；Open Pricing = 不绑死 BAR 阶梯 | A Vendor | Duetto Glossary | https://www.duettocloud.com/en-us/glossary |
| 固定阶梯 BAR 把促销/打包锁死；浮动 BAR ≠ 各产品独立 | A | HSMAI–Duetto *Open Pricing* 白皮书 | http://higherlogicdownload.s3.amazonaws.com/HSMAI/30c9d24f-e82a-487a-afd4-3ae23ac91473/UploadedImages/DOwnload%20Docs/HSMAI-Duetto%20Open%20Pricing%20whitepaper.pdf |
| RM 亦称 Dynamic Pricing | A | Cornell HADM 4050 | https://sha.cornell.edu/admissions-programs/undergraduate/academics/courses/services-operations-management/hadm4050/ |
| 定价与价格反应教材 | S 书目 | Phillips 2021；Hayes 2e；Talluri 2004 | 见 `sources/books.md` |
| 固定 % 阶梯 theoretically suboptimal | A 论文书目 | Guillet 等, Cornell Hospitality Quarterly / *Revenue Analytics: The Problem With Fixed-Tier Pricing* | https://doi.org/10.1177/19389655231152456 （本轮未打开全文，不摘公式） |
| 「OCC<X 必须降」官方门槛 | — | **未找到** STR/HSMAI 页 | 禁止当定律 |

中国 OTA 佣金 / 神券扣点：**按用户合同**，不写行业均值。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-PR-01 | 中国 PMS「日历价 / 普通价 / 促销价」与 BAR 字段映射 | 问用户哪一个是公开可订最低无条件价 |
| NV-PR-02 | 会员价相对 BAR 的品牌义务 | 用户说了才跟，不编 % |
| NV-PR-03 | 公开酒店弹性数量级 | 不用航空弹性；用 24h 间夜试验 |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。明确开除「低 OCC=降价」。幅度细节见 how-much-to-move。 |
