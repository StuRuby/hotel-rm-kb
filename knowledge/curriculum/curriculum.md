# Revenue Management Curriculum

> 资产类型：Curriculum（可调用入口）
> 状态：Phase 1 初稿可用
> 日期：2026-08-20
> Last Verified：2026-08-20
> 对应任务：T1 / 任务书第四十六、四十七、四十八节
> 阶段边界：**Phase 1 不做 Operate**。不操作系统、不自动调价、不自动改库存、不自动下 Restriction。

---

## 0. 调用入口（顾问分析时先读这里）

用户丢来一家酒店的数据后，不要先翻教材定义。按这条路径用本文件：

1. **输出格式永远按 Level 9 Advisor**：Situation → Diagnosis → Opportunity/Risk → Recommended Action → Why → Expected Impact → Risk → What To Watch → Re-evaluation Trigger → Confidence。
2. **诊断路径不许跳 Level 2**：任何价格 / 库存 / 限制建议，必须先能回答 OTB / Pickup / Pace 对不对、快还是慢、相对谁。
3. **缺数据不停**：先给条件化建议，再列出「如果只能再补 3 个数据，补哪 3 个」。
4. **对象映射**走 `object-model/revenue-objects.md`；指标走 `metrics/metric-tree.md`（T3 待建时先用本文件 Level 1–2 检查问题）；问题落点走 `diagnosis/problem-tree.md`（T5 待建）。
5. **Phase 1 终点是 Advise + Evaluate**，不是 Operate。建议必须具体到 Stay Date / Room Type / Rate 或区间 / Inventory / Restriction，由人执行。

当前最优先能力包：**Level 9 的顾问输出 + Level 2 的 OTB / Pickup / Pace 走实**。Level 4–8 可以并行补资产，但不能用「先学完 RMS 再做顾问」当借口。

---

## 1. 优秀顾问必须掌握什么

一句话：

> 在不操作系统的前提下，能把不完整的酒店数据读成 **Stay Date 级的收益判断**，并给出可执行、可解释、可复盘的动作。

不是「知道 RevPAR 公式」就算掌握。掌握标准是任务书第三节的能力阶梯：

```text
Know → Understand → Calculate → Diagnose → Advise → Evaluate
```

Phase 1 **最高目标 = Advise + Evaluate**。`Operate` 明确不在本阶段。

一个优秀顾问必须同时具备六块，缺一块就会给出空话建议：

| 块 | 必须能做什么 | 不会的典型失败 |
| --- | --- | --- |
| 对象 | 把报表列映射到 Hotel / Stay Date / Booking Date / Reservation / Rate / Inventory 等 | 把「今天订出去的房」和「今天入住的房」混在一张表里解读 |
| 指标 | 会算、会拆、知道误读 | 看见 OCC 低就降价；把 OTB 70% 当好 |
| 需求时序 | 用 OTB + Pickup + Pace + DTA 判断快慢 | 只有时点、没有曲线 |
| 杠杆 | 知道 Price / Inventory / Restriction / Channel / Group 各自何时该动 | 只会调 BAR |
| 对照 | 会用 Budget / Forecast / STLY / Comp Set / Event | 只和自己昨天比 |
| 闭环 | 建议带观察指标和推翻条件，结果能复盘 | 给完建议就结束 |

任务书第八节 20 个学科主题都要进知识树（见 `knowledge-map.md`），但 **第一阶段学习顺序以第四十八节 18 步为准**，不是按学科目录从 1 扫到 20。

---

## 2. 能力层级定义（本库统一用法）

| 层级 | 含义 | 顾问现场必须交出的东西 | Phase 1 要求 |
| --- | --- | --- | --- |
| Know | 能定义术语 | 一句话定义 + 常见别名 | 全主题达到 |
| Understand | 能说清原理和假设 | Theory → Decision 映射，含适用边界 | 全主题达到 |
| Calculate | 能算、能拆口径 | 公式、分子分母、和相邻指标的关系 | L1–L3 必须；其余按需 |
| Diagnose | 能区分现象和原因 | 已确认 / 高概率 / 假设 / 缺口 | L2 起必须 |
| Advise | 能给具体动作 | Stay Date × Room Type × Rate/Inventory/Restriction + 区间 + 首选 | **当前最高工作目标** |
| Evaluate | 能用结果修正方法 | Decision → Outcome → Lesson，并判断因果 | 有反馈就必须做 |
| Operate | 在系统里执行并回滚 | PMS / CRS / RMS / Channel Manager 操作 | **本阶段禁止作为能力证明** |

证据分级沿用 README：S / A / B / C / D。C/D 不得写成普遍规律。

---

## 3. 当前优先级（必须同时成立）

1. **角色优先 = Level 9 Advisor**。每次真实分析都用顾问结构输出，不等「学完再上岗」。
2. **路径不跳级**。Level 9 是输出标准和案例训练层，不是可以绕过 OTB / Pickup / Pace 的捷径。
3. **第一刀知识深度 = Level 2 Diagnose + Advise**。先把「14 天、OTB 60%，到底快还是慢」练到能给条件化动作。
4. **Phase 1 不做 Operate**。不写自动调价脚本，不把「会点系统」当毕业。

错误路径：L1 概念 → L8 RMS 白皮书 → 空谈优化。  
正确路径：L1 口径 → L2 时序诊断 → 用 L9 结构给建议 → 用反馈做 Evaluate → 再按需补 L3–L8 资产。

---

## 4. Level 1–9 课程图

每级四件事：目标能力、必掌握主题、毕业检查问题、推荐资产类型。

### Level 1 · 概念与指标

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Know / Understand / Calculate** |
| 必掌握主题 | 固定容量、易逝库存、可细分需求、时间可变需求；Rooms Available / Rooms Sold / Room Revenue；OCC、ADR、RevPAR；TRevPAR、GOPPAR（知道定义即可）；Complimentary 是否进分母/分子；LY vs STLY vs Date-to-Date vs Day-to-Day |
| 毕业检查问题 | 1) RevPAR 和 ADR 差在哪，为什么满房 ADR 高但 RevPAR 仍可能输竞对？ 2) Rooms Sold 不含 Complimentary 时，OCC 和 ADR 分别怎么被拉开？ 3) 用户给的「收入」是 Room Revenue 还是 Total Revenue？ 4) 100 间房 × 31 天的 Rooms Available 是多少？ |
| 推荐资产 | `metrics/` metric card；`glossary/` 术语卡；`theory/` 基础假设卡 |
| 对应 18 步 | 1 基础、2 Hotel Metrics |
| 证据锚点 | STR/CoStar 官方 Glossary：OCC = Rooms Sold / Rooms Available；ADR = Room Revenue / Rooms Sold；RevPAR = Room Revenue / Rooms Available。2026-08-20 已打开 https://www.costar.com/products/str-benchmark/resources/glossary |

**决策映射（自己的话）**：Level 1 只解决「数字说的是哪张饼」。顾问还不能在这一级给涨价建议；只能校正口径，避免用错分母。

---

### Level 2 · OTB / Pickup / Pace（路径要塞，不许跳）

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Calculate / Diagnose / Advise（条件化）** |
| 必掌握主题 | OTB Rooms / OTB OCC / OTB ADR / OTB Revenue；Pickup 1D/3D/7D/14D/30D；Booking Pace 与 Booking Curve；DTA；STLY / Historical Curve / Budget / Forecast 对照；按 Stay Date、Room Type、Segment、Channel、Rate Plan 拆 Pickup；净 Pickup = 新订 − 取消 − 改期 |
| 毕业检查问题 | 1) 距离入住 14 天、OTB OCC 60%，算快还是慢？必须说出对照物。 2) OTB 70% 是不是就是好？ 3) Pickup 很快，如何排除「一个团队进房」的假信号？ 4) Pace ahead + remaining inventory 紧，优先动价格、库存还是 Restriction？ 5) Pickup 慢时，先查需求弱、价格高、渠道关、还是库存没开？ |
| 推荐资产 | metric：OTB / Pickup / Pace / DTA；decision card：Pace Ahead 涨价、Pickup Slow 诊断；playbook：Slow Pickup / Fast Pickup |
| 对应 18 步 | 3 OTB、4 Pickup、5 Booking Pace |
| 证据锚点 | STR FAQ 官方用语是 **Occupancy on the Books** = confirmed occupancy levels for upcoming periods（https://www.costar.com/products/str-benchmark/resources/faqs，2026-08-20）。Pickup / Pace 不是 STR Glossary 主词条，属行业实践。Hospitality Net / 多家 RMS 实践文可交叉（B）。Cornell 公开课描述强调 capacity + dynamic pricing，未在已打开页面给出 OTB 公式。 |

**决策映射**：OTB 是时点位置，Pickup 是窗口速度，Pace 是相对曲线的早晚。三者缺一不能判断「该不该动」。**禁止**把单一 OTB 百分比映射成涨/降。

---

### Level 3 · Forecast

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Calculate / Diagnose**，部分 Advise（预测驱动的观察点） |
| 必掌握主题 | Constrained vs Unconstrained Demand；Historical / Booking Curve / Pickup / Seasonality / DOW / Trend / Event Adjustment；Final OCC / ADR / Revenue 预测区间；Denied / Lost Demand / Sellout；Forecast vs Budget vs OTB；经典方法优先于 ML |
| 毕业检查问题 | 1) Sold = 100 为什么不能说 Demand = 100？ 2) 当前 Forecast 和 Budget 打架时听谁？ 3) 如何用 Pickup 修正曲线预测？ 4) 预测区间怎么写，而不是假精确点估计？ 5) 关房日的历史 OCC 100% 会如何系统性低估需求？ |
| 推荐资产 | `forecasting/` theory map + metric（Forecast OCC/ADR/Revenue）；decision card：Forecast Miss；playbook：Forecast Miss |
| 对应 18 步 | 6 Forecast |
| 证据锚点 | Talluri & van Ryzin 2004/2005 书目存在（估计与预测是该书正式主题，**不摘正文**）。HSMAI CRMA Study Guide TOC（2023）含 Forecasting Concepts / In Practice。Unconstrained demand 的酒店实操口径（如何补全拒单）= Need Verification。 |

**决策映射**：预测是「还可能来多少」，不是「已经有多少」。顾问用它决定剩余库存的进攻/防守，而不是用它代替 OTB 事实。

---

### Level 4 · Pricing

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Diagnose / Advise** |
| 必掌握主题 | BAR / Dynamic / Occupancy-based / Demand-based / Competitor-based / Value-based；Seasonal / Event / DOW / Last-minute / Advance Purchase / Member / Promo / Package；Room Type Differential；「涨多少/降多少」；Price Elasticity 的决策用法（不是先求精确弹性系数）；竞对价格是信号不是答案 |
| 毕业检查问题 | 1) OCC 低为什么不能自动降价？ 2) Pace ahead、剩余 40 间、DTA 10、竞对高 10%，BAR 从 899 建议到哪、一次还是分步？ 3) 房型价差倒挂怎么处理？ 4) 给不出点估计时，区间和首选怎么写？ 5) 弹性未知时，最小可逆动作是什么？ |
| 推荐资产 | `pricing/` card + decision card（Increase BAR / Hold / Decrease / Close low rate）；playbook：High Demand Day / Low Demand Day / Price War |
| 对应 18 步 | 7 Pricing，并提前借用 10 Competitor 的信号层 |
| 证据锚点 | Cornell HADM 4050 / 6051 公开描述：RM sometimes referred to as Dynamic Pricing，methods for profitably managing hotel capacity。Hayes et al. *Revenue Management for the Hospitality Industry*（Wiley，书目已核）把差异化定价作为核心工具。**不摘教材正文。** HSMAI *The Future of Pricing*（2020 PDF 已打开）讨论 inventory-based restrictions 与 hurdle rate，属 A 级方法论而非公式标准。 |

**决策映射**：价格是对剩余需求的赌注。输入必须包含 DTA × OTB × Pickup × remaining inventory × 竞对 × 取消，而不是「感觉贵了」。

---

### Level 5 · Inventory / Restriction / Overbooking 入门

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Diagnose / Advise** |
| 必掌握主题 | Open / Close / Booking Limit / Sell Limit / Protected / Shared / Nested；Room Type 与 Channel 库存；MinLOS / MaxLOS / CTA / CTD / Advance Purchase；Peak vs Shoulder；超售：Cancellation、No-show、Early Departure、Extension、Walk Cost。当前只建议超售量与风险，不执行 |
| 毕业检查问题 | 1) 高峰日该不该限制单晚？依据是什么？ 2) 价格已经很高时，还要不要上 MinLOS？ 3) 某渠道关房是库存策略还是误操作？ 4) 是否超售、建议超多少、Walk 风险怎么说？ 5) Nested inventory 下「套房还剩 2 间」是否真的还能卖标准间？ |
| 推荐资产 | `inventory/` `restrictions/` `overbooking/` card + decision card；playbook：Sellout Risk / Early Sellout / High Cancellation |
| 对应 18 步 | 8 Inventory、9 Restriction、13 Overbooking（Overbooking 可延后，但概念在 L5 建立） |
| 证据锚点 | HSMAI 2020 *The Future of Pricing*：MinLOS 用于把需求推到 shoulder；restriction 主要在需求超过供给且存在多晚需求时有意义。HSMAI 2021 *The New RMS*：部分集团用极高价格替代 LOS 控制（open pricing），这是策略选择不是对错题。 |

**决策映射**：Price 和 Inventory 是两大杠杆。Restriction 是对 **Stay Pattern** 的杠杆，不是降价的替代品，也不是日常装饰。

---

### Level 6 · Segmentation / Channel / Group / Market

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Diagnose / Advise** |
| 必掌握主题 | Retail / Corporate / Negotiated / Group / Wholesale / OTA / Package / Crew / Government / Member；STR 口径 Transient / Group / Contract；渠道：Brand.com、Direct、携程/美团/飞猪/同程、Booking/Agoda/Expedia、GDS；Gross → Commission → Discount → Marketing → Distribution Cost → Net Revenue；Group Displacement（Accept / Reject / Counter）；Primary / Secondary / Aspirational Comp Set |
| 毕业检查问题 | 1) 50 间 × 500 元团队 vs 散客 800，为什么不能直接比房价？ 2) Gross ADR 高但 Net Contribution 低说明什么？ 3) 竞对满房是跟涨还是先确认自己剩余结构？ 4) Comp Set 选错时 MPI/ARI/RGI 会怎样骗人？ 5) 某渠道 Pickup 全是低价预付，要不要关？ |
| 推荐资产 | `segmentation/` `channel/` `group/` `market/` metric（MPI/ARI/RGI、Net ADR）+ decision card（Group Accept/Reject）+ playbook：Group Evaluation / Competitor Sellout |
| 对应 18 步 | 10 Competitor/Market、11 Channel/Segment、12 Group |
| 证据锚点 | STR：Transient < 10 间/晚；Group 通常 ≥10 间/晚且有协议；Contract 为长约保底（如机组）。MPI/ARI/RGI = 主体指标 / 聚合组指标 × 100，100 = fair share。中国 OTA 佣金与促销扣点的标准值 = Need Verification（按酒店合同读，不写行业平均数）。 |

**决策映射**：同一间夜对不同 Segment / Channel 的净贡献不同。顾问比较的是 **机会成本**，不是门市价标签。

---

### Level 7 · Optimization

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Understand / Diagnose**，Advise 时能解释「为什么是这个组合」 |
| 必掌握主题 | Capacity Optimization；LOS Optimization；Displacement / Bid Price / Hurdle Rate（概念层）；Price Elasticity 与剩余库存联合；Total contribution 而不是单日 RevPAR 最大；多日网络（shoulder 被 peak 带走） |
| 毕业检查问题 | 1) 单日 RevPAR 最大为什么可能伤害三晚总收入？ 2) Hurdle Rate 和 BAR 是什么关系？ 3) 弹性未知时，优化模型的建议为什么仍可能错？ 4) 如何向总经理用一句话说清「拒绝一单是为了给后面让路」？ |
| 推荐资产 | `theory/` Theory→Decision 卡；decision card：Accept/Reject stay pattern；不在 Phase 1 写可执行求解器 |
| 对应 18 步 | 14 Optimization |
| 证据锚点 | Talluri & van Ryzin 书目（网络容量控制、bid-price 是该书公开主题）。Phillips *Pricing and Revenue Optimization* 2nd ed., Stanford, 2021（书目已核）。HSMAI 将 hurdle rate 定义为房间最低可接受价值。**公式与页码不写。** |

**决策映射**：优化回答的是「这间夜卖给谁、住多久、以什么底价」。顾问先会讲逻辑，再引用 RMS 输出；Phase 1 不自己求解。

---

### Level 8 · RMS 与集团方法论 / 技术栈

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Understand / Diagnose**（会读系统逻辑，不操作） |
| 必掌握主题 | IDeaS / Duetto / Atomize / BEONx / Amadeus RM / 集团自研（含 Marriott One Yield / OYE 公开信息）；Input → Forecast → Optimization → Recommendation → Human Override → Execution → Measurement；PMS / CRS / RMS / Channel Manager / OTA / GDS / IBE / Rate Shopper / BI / CRM 数据流；Property vs Cluster vs Central RM |
| 毕业检查问题 | 1) RMS 建议涨价，你根据什么 override？ 2) 价格从哪产生、从哪执行、怎么到消费者？ 3) 报表里的 Forecast 是 RMS 还是 Budget 团队的数？ 4) 没有 RMS 的单体酒店，顾问过程少哪一步、用什么代替？ |
| 推荐资产 | `systems/rms-landscape.md`；`hotel-tech-stack/`；vendor methodology card（必须标 Vendor Methodology） |
| 对应 18 步 | 15 RMS、16 Revenue Manager 实际工作方法 |
| 证据锚点 | HSMAI 2021 *The New RMS*（已打开 PDF）。具体厂商算法细节多数是营销或客户文档，默认 A/C，禁止把白皮书当普遍规律。Marriott One Yield 内部细节 = Need Verification。 |

**决策映射**：系统是建议引擎。顾问要能审计输入脏不脏、预测漂不漂、override 有没有纪律。Phase 1 不把「对齐某家 RMS」当成能力本身。

---

### Level 9 · 真实案例顾问训练（当前角色层）

| 项 | 内容 |
| --- | --- |
| 目标能力 | **Advise / Evaluate** |
| 必掌握主题 | Advisor Decision Framework；Daily Revenue Brief；问题树；Opportunity 扫描（Under/Overpricing、Compression、Room Type、Restriction、Group…）；Recommendation Journal；Causal Awareness（结果 ≠ 因果）；Case Library |
| 毕业检查问题 | 面对任务书第四节那类案例，必须稳定回答 12 问：需求状态、Pace 是否领先、是否 Compression、价格是否偏低、是否涨、涨到多少、一次还是分步、哪个房型先动、是否关低价、库存是否保护、24/48/72h 看什么、什么说明判断错。另：反馈回来后能写 Lesson 并降低或提高置信。 |
| 推荐资产 | `decision-framework/`；`advisor-playbooks/`；`diagnosis/`；`recommendations/`；`cases/`；`feedback/` |
| 对应 18 步 | 16 工作方法、17 Case Study、18 Advisor Simulation |
| 证据锚点 | 任务书第一、四、五、五十节是本库的 **内部标准**（Internal Experience 待积累）。外部案例训练素材来源见 T8/T9，未核的课程名不写入。 |

**决策映射**：Level 9 把前面所有层级压成一次可执行建议。没有 Level 2 的时序判断，Level 9 只是作文模板。

---

## 5. 第一阶段 18 步 → Level 映射

任务书第四十八节优先序，是建设顺序，不是每次对话的阅读顺序。

| 步 | 主题 | 映射 Level | 目标能力（本步结束时） | 先做资产 | 状态 2026-08-20 |
| --- | --- | --- | --- | --- | --- |
| 1 | Revenue Management 基础 | L1 | Know / Understand | theory card | 待建 |
| 2 | Hotel Metrics | L1 | Calculate | metric-tree + OCC/ADR/RevPAR | 待建（T3） |
| 3 | OTB | L2 | Diagnose | OTB metric + 误读卡 | **下一刀深挖** |
| 4 | Pickup | L2 | Diagnose | Pickup metric + 拆维卡 | **下一刀深挖** |
| 5 | Booking Pace | L2 | Diagnose + 条件化 Advise | Pace / Curve + 「快还是慢」decision card | **下一刀深挖** |
| 6 | Forecast | L3 | Calculate / Diagnose | forecast 方法卡 | 待建 |
| 7 | Pricing | L4 | Advise | BAR / 涨降多少 decision card | 待建 |
| 8 | Inventory | L5 | Advise | Open/Close/Limit 卡 | 待建 |
| 9 | Restriction | L5 | Advise | MinLOS/CTA/CTD 卡 | 待建 |
| 10 | Competitor / Market | L4 信号 + L6 体系 | Diagnose | Comp Set + MPI/ARI/RGI | 待建 |
| 11 | Channel / Segment | L6 | Advise | Net Revenue 卡 | 待建 |
| 12 | Group | L6 | Advise | Displacement decision card | 待建 |
| 13 | Overbooking | L5/L7 | Advise（只建议） | Overbooking 风险卡 | 待建 |
| 14 | Optimization | L7 | Understand | Theory→Decision | 待建 |
| 15 | RMS | L8 | Understand | rms-landscape | 待建（T10） |
| 16 | RM 实际工作方法 | L8/L9 | Advise | Daily Brief / 会议节奏 | 待建 |
| 17 | Case Study | L9 | Advise | cases/ | 待建 |
| 18 | Advisor Simulation | L9 | Evaluate | playbook + journal | 待建 |

并行已经可调用的骨架：本 Curriculum、Knowledge Map、Object Model。它们不替代步骤 3–5 的深度。

---

## 6. 每次顾问分析对照本课程的最小检查单

在给出 Recommended Action 前，顾问自己必须能勾：

- [ ] 报表已映射到对象（至少 Hotel、Stay Date、Booking Date、Inventory、Rate）
- [ ] OCC / ADR / RevPAR 口径已声明（或标 Unknown）
- [ ] OTB 有对照：STLY / Budget / Forecast / 历史曲线 至少一种，否则 Pace 只能写假设
- [ ] Pickup 窗口已声明（1D/3D/7D…），并考虑取消和团队
- [ ] 建议落到 Stay Date × 杠杆；给不出点就给区间 + 首选
- [ ] 写了 What To Watch 和 Re-evaluation Trigger
- [ ] 没有把 Operate 写进交付（不说「我已经在系统里改了」）

一项勾不上：降 Confidence，补条件，不编数字。

---

## 7. Phase 1 毕业标准（任务书第五十节，课程化）

不以自动调价为毕业。当用户给真实酒店信息后，应稳定做到：

1. 快速理解当前状态（对象 + 指标 + DTA）。
2. 找到最重要异常（而不是列出所有指标）。
3. 找到真正的 Revenue Opportunity。
4. 区分现象和原因。
5. 给出明确行动建议。
6. 给出价格或动作区间。
7. 说明依据（数据、逻辑、证据级）。
8. 说明下行风险。
9. 指出继续观察的数据。
10. 根据反馈复盘。
11. 修改方法论，不护短。
12. 对不确定内容明确表达不确定性。

---

## 8. 公开课程与书目（只写已核书目信息，不写页码、不摘正文）

| 条目 | 类型 | 已核事实 | Evidence | 用途 |
| --- | --- | --- | --- | --- |
| Cornell Nolan HADM 4050 Revenue Management | 本科课程 | 公开页称 RM sometimes referred to as Dynamic Pricing；profitably managing hotel capacity。URL：https://sha.cornell.edu/admissions-programs/undergraduate/academics/courses/services-operations-management/hadm4050/ | A | 能力范围对标，不是教学大纲替代 |
| Cornell HADM 6051 Revenue Management | 研究生课程 | 2024-2025 Catalog 描述与 4050 同类；instructor C. Anderson（FA24 roster）。https://classes.cornell.edu/browse/roster/FA24/class/HADM/6051 | A | 同上 |
| Sheryl E. Kimes 等 Cornell Quarterly 公开论文 | 论文 | 餐厅 RM 系列把 RM/yield 的适用条件概括为：相对固定容量、易逝库存、可库存化需求、时间可变需求、合适成本结构、可细分顾客。eCommons 可下到 PDF。酒店版「right room / right guest / right price / right time」是同行实践转述，**完整酒店原句页码 Need Verification** | S/A | 基础假设卡 |
| Talluri, K. T. & van Ryzin, G. J. *The Theory and Practice of Revenue Management* | 教材 | Kluwer 2004 / Springer 2005；ISBN 9781402079337。INFORMS RMP 书单收录 | S | 预测、库存控制、bid-price 的理论源。只做 Theory→Decision，不摘正文 |
| Phillips, R. L. *Pricing and Revenue Optimization*, 2nd ed. | 教材 | Stanford Business Books, 2021；Hardcover ISBN 9781503610002 | S | 定价与约束优化。不摘正文 |
| Hayes, D. K., Miller, A.（第 2 版另有 J. D. Hayes, P. A. Hayes）*Revenue Management for the Hospitality Industry* | 教材 | 第 1 版 Wiley ISBN 978-0-470-39308-6；第 2 版 Wiley 页 9781119790723 已见于 Wiley 产品页 | S | 酒店差异化定价与岗位实践。不摘正文 |
| HSMAI CRMA Study Guide, 1st ed., Lynn Zwibak, 2023 | 认证大纲 | TOC：What is RM → Fundamentals → Pricing → Groups → Forecasting → Inventory and Price → Distribution → Measuring Performance → Role of RM | A | 用来核对主题覆盖，不复制讲义 |
| HSMAI CRME *Evolving Dynamics: From Revenue Management to Revenue Strategy* 4th ed. | 认证大纲 | TOC 公开页含 Pricing、Inventory Optimization、Total Hotel Revenue Optimization | A | 同上 |
| STR/CoStar Glossary + FAQ | 官方术语 | 2026-08-20 已打开。OCC/ADR/RevPAR/MPI/ARI/RGI/GOPPAR/TRevPAR/Comp Set/Occupancy on the Books | S | 指标口径的第一权威 |

未采用：搜索结果里的厂商博客把 Pace 与 Pickup 混成同一个词。本库强制拆开（见 Level 2）。YouTube/公众号单人经验默认 C，不进 Curriculum 必掌握表。

---

## 9. 明确不做（Phase 1）

- 不把本课程写成可操作系统的 SOP。
- 不要求先有 PMS 权限再做顾问。
- 不把 ML / Transformer 预报当作 Level 3 入门条件。
- 不编造没打开过的课号、页码、证书学时。
- 不把 Comp Set 价格当定价公式。

---

## 10. 与其他初始化资产的关系

| 资产 | 路径 | 本课程怎么用它 |
| --- | --- | --- |
| Knowledge Map | `curriculum/knowledge-map.md` | 查主题空白和下钻子节点 |
| Object Model | `object-model/revenue-objects.md` | 用户报表 → 对象 |
| Metric Tree | `metrics/metric-tree.md` | L1–L2 的指标关系（待建） |
| Advisor Process | `decision-framework/advisor-process.md` | L9 固定过程（待建） |
| Problem Tree | `diagnosis/problem-tree.md` | Diagnose 分枝（待建） |

---

## 11. 未决（不影响本文件当入口）

1. Cornell 酒店（非餐厅）RM「五 Right」的原始出处页码未核。检索词：`Kimes "right room" "right customer" "right price" Cornell Quarterly`。
2. STR「Occupancy on the Books」详细计算方法（含取消、团队 block、complimentary）未打开后续页。检索词：`STR "Occupancy on the Books" definition reporting guidelines`。
3. 中国 OTA 佣金/促销费标准区间按合同，不写行业均值。
4. 各 RMS 的 forecast 颗粒度（Stay Date × Room Type × LOS）公开文档不完整。

更新规则：Level 毕业检查问题一旦有内部案例打穿，把 Internal Experience 链到 `cases/`，并改本文件状态，不另起炉灶。
