# Research Log｜2026-08-20 Forecast / Pricing → Advise

> 时区：Asia/Shanghai  
> 任务：Wave3 · 把第一阶段推到 Forecast 与 Pricing（尤其涨多少/降多少），补 High/Low Demand 剧本  
> 核对日：2026-08-20  
> 执行者：知识库建设（顾问过程落地）

---

## 1. 读了什么（库内）

| 文件 | 用到的部分 |
| --- | --- |
| README / curriculum / progress / knowledge-map | 证据分级；L3/L4 毕业问；不改 T1–T12 上表 |
| metrics + theory/otb-pickup-pace.md | 公式不另起；Pace ±5/8pp；Days-to-Sellout |
| diagnosis/problem-tree.md | §1 OCC Low、§15 Forecast、§16 Event |
| advisor-process.md | +8–15%、不一夜 −15%、不跳最高竞对、300 间 Trigger |
| increase / hold / stimulate / protect 四张卡 | 数字兼容 |
| P08/P09 + BACKLOG | P01/P02 slug 与 ID |
| sources/books.md source-map.md | Talluri / Phillips / Hayes 书目；不摘正文 |
| 已有 cases | 仿真文体 |

未改：T1–T12 骨架正文；progress 上表。problem-tree 只加交叉引用。

---

## 2. 公开核对（WebSearch / WebFetch，2026-08-20）

| 源 | URL | 用到的口径 | 级 | 打开？ |
| --- | --- | --- | --- | --- |
| CoStar FAQ | https://www.costar.com/products/str-benchmark/resources/faqs | Occupancy on the Books；市场 Forecast 与 Tourism Economics；event/经济指标 | A | **打开** |
| CoStar Glossary | https://www.costar.com/products/str-benchmark/resources/glossary | OCC/ADR/RevPAR 公式 | S | 检索+既有核 |
| Forward STAR Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines | OTB + Pickup 报送 | A | 既有核 |
| Weatherford & Kimes 2003 | https://doi.org/10.1016/s0169-2070(02)00011-0 ；eCommons https://ecommons.cornell.edu/items/046131d9-289a-4ee2-8249-23c59a5362f0 | Historical / Advanced / Combined；pickup、MA、平滑较稳健 | S | DOI/eCommons 检索确认；Springer 全文页 **timeout**，用公开摘要+eCommons 文摘，不摘公式页 |
| HSMAI Academy Forecasting | https://academy.hsmai.org/course-forecasting-rooms/ | 课纲含 unconstrained vs constrained | A | **打开** |
| Duetto Glossary | https://www.duettocloud.com/en-us/glossary | Unconstrained/Constrained；Denial/Regret；BAR；Booking curve | A Vendor | **打开** |
| IDeaS Science 101 | https://ideas.com/revenue-science-101-forecasting/ | Sold=100 仍可能 Demand=1000；预报不确定性；慎用 regret/denial | A Vendor | **打开** |
| IDeaS 相关（方法叙事） | https://ideas.com/analytics-is-the-real-performance-driver-for-hotel-revenue-management/ | unconstraining 3–7% 增收为转述，**不当普遍规律** | A Vendor / 不采用数字 | 检索 |
| HSMAI–Duetto Open Pricing 白皮书 | http://higherlogicdownload.s3.amazonaws.com/HSMAI/30c9d24f-e82a-487a-afd4-3ae23ac91473/UploadedImages/DOwnload%20Docs/HSMAI-Duetto%20Open%20Pricing%20whitepaper.pdf | 固定 BAR 阶梯 ≠ 各产品独立 Dynamic | A | 检索到公开 PDF 路径 |
| Duetto Beyond BAR | https://www.duettocloud.com/en-us/library/beyond-bar-the-power-of-open-pricing | Open Pricing 叙事 | A Vendor | 检索 |
| Phillips 2021 / Talluri 2004 / Hayes 2e | 见 books.md | 书目级定价/预测主题 | S 书目 | 既有打开书目页 |
| Cornell HADM 4050 | curriculum 已核 URL | Dynamic Pricing 表述 | A | 既有 |
| eCornell Forecasting and Availability Controls | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/forecasting-and-availability-controls-in-hotel-revenue-management/ | 课名 Known | A 课名 | 本轮 **timeout**，不引用讲义数字 |
| Fixed-tier pricing 论文 | https://doi.org/10.1177/19389655231152456 | 固定 % 阶梯 suboptimal（书目） | A 书目 | 未开全文 |

**未找到：** STR/HSMAI 公开页给出「DTA=14 应到 X%」或「OCC<Y 必须降」；酒店拒单 Unconstrain 的 S 级可复现算法。均标 Need Verification。  
**未编造 URL。** 未整段摘录教材。厂商增收 % 不写入决策卡。

---

## 3. 写了什么

| 路径 | 角色 |
| --- | --- |
| `forecasting/forecast-framework.md` | 经典方法 + Final 四对象 + Unconstrained + Theory→Decision |
| `pricing/pricing-framework.md` | 定价方法清单；开除「低 OCC=降价」 |
| `pricing/how-much-to-move.md` | 涨四档 / 降四档；必须区间+首选 |
| `recommendations/decrease-bar-true-weak-demand.md` | 真弱才降 |
| `recommendations/do-not-cut-price-market-also-weak.md` | 市场也弱不砸 |
| `recommendations/event-pricing-first-cut.md` | 事件第一刀，不跳最高 |
| `advisor-playbooks/high-demand-day.md` | P01 drafted |
| `advisor-playbooks/low-demand-day.md` | P02 drafted |
| `cases/sim-2026-weak-market-do-not-cut.md` | Simulation：弱市+后置+渠道刚开 → 拒绝 699 |
| `advisor-playbooks/BACKLOG.md` | P01/P02 → drafted |
| `curriculum/progress.md` | 文末追加 Wave3 |
| `diagnosis/problem-tree.md` | §17/转到 交叉引用 |

---

## 4. 涨多少核心启发式（抽查句）

全部 Hypothesis，与 Wave2 兼容：

- **+5%（或 +5–8%）：** 已在竞对带内仍 Ahead+Fast；或事件未证实。  
- **+8–15%：** Ahead+Fast 且低于最低竞对 8–15%。  
- **收到最低竞对：** 低 ≥15% 或 ≥150 元；一天不补到最高。  
- **不一次跳过最高竞对。**  
- **价已最高：只关不涨。**  
- 重叠带取保守侧；首选尽量对齐竞对点。

---

## 5. 弱市不降价触发（抽查句）

默认不降，若：

1. Comp/市场同样空或集体在降，无事件；或  
2. 曲线后置且同 DTA Pace On；或  
3. 渠道/库存刚关过，速度不能当需求死；或  
4. 价已在带内 / 已不贵。

仿真：48% @ DTA14 商务周二、STLY 51%、BAR 799 vs 779–819、展会取消、美团昨配额 0 → **BAR 不动，拒绝 699**。

真弱（排除后仍 Behind+慢+价高+市场不冰）：先围栏 **−3–5%**，再 BAR **−5–10%**。**禁止一夜 −15%**（仅 DTA≤3 且 Pickup≈0 且价明显高于全部竞对允许 −10–15% 且有截止日期）。

---

## 6. 未决

| ID | 项 | 状态 |
| --- | --- | --- |
| NV-UD-01 | 拒单/关房日 Unconstrain 公开标准算法 | Need Verification |
| NV-FC-01 | 中国店加性 vs 乘性 Pickup 误差 | 默认加性 |
| NV-FC-03 | eCornell 讲义数字 | 未打开 |
| NV-PR-01 | 日历价/普通价/促销价 ↔ BAR | 问用户 |
| NV-PR-03 | 公开酒店弹性数量级 | 不用航空弹性 |
| — | P07 Concert 全剧本、P05 Last Minute、P16 Price War | 仍 not_started |
| — | 幅度待真实 feedback 校准 | Hypothesis |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | Wave3 核源与落盘。 |
