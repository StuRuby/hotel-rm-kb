# Research Log · 2026-08-20 · Curriculum / Knowledge Map / Object Model

> 任务：T1 Curriculum、T2 Knowledge Map、T4 Object Model
> 检索日：2026-08-20
> 原则：只写打开或交叉核过的来源。打不开的标 Need Verification + 检索词。不摘教材正文。

---

## 1. 查了什么

### 官方术语（采用，S）

| 来源 | URL | 打开结果 | 采用内容 |
| --- | --- | --- | --- |
| STR/CoStar Glossary | https://www.costar.com/products/str-benchmark/resources/glossary | 2026-08-20 WebFetch 成功 | OCC = Rooms Sold / Rooms Available；ADR = Room Revenue / Rooms Sold；RevPAR = Room Revenue / Rooms Available；Rooms Available = 房间数 × 天数；Rooms Sold 不含 Complimentary；MPI/ARI/RGI 及 fair share=100；GOPPAR；TRevPAR；TrevPOR；Comp Set；Transient/Group/Contract；Chain Scale / Class；Flow Through / Flex |
| STR/CoStar FAQ | https://www.costar.com/products/str-benchmark/resources/faqs | 2026-08-20 WebFetch 成功 | **Occupancy on the Books** = confirmed occupancy levels for upcoming periods。ADR/RevPAR 复述与 Glossary 一致。Comp Set 定义。未给出 OTB 的 Pickup/Pace 公式 |
| CoStar Lodging Glossary PDF | https://industry.traveloregon.com/wp-content/uploads/2026/07/CoStarLodgingGlossaryPDF.pdf | 搜索命中，未整本打开 | 与官网 Glossary 同口径，作交叉，不单列新定义 |

### 课程与学术书目（采用书目，不摘正文）

| 来源 | URL | 打开结果 | 采用 |
| --- | --- | --- | --- |
| Cornell HADM 6051 roster | https://classes.cornell.edu/browse/roster/FA24/class/HADM/6051 | WebFetch 成功 | 课名 Revenue Management；描述 RM sometimes referred to as Dynamic Pricing；profitably managing hotel capacity；instructor Anderson |
| Cornell HADM 4050 介绍页 | https://sha.cornell.edu/admissions-programs/undergraduate/academics/courses/services-operations-management/hadm4050/ | 搜索摘要一致；**整页 WebFetch 超时** | 采用与 6051 相同的公开描述句。课号/URL 保留。状态：页面正文 Need Verification 再抓一次 |
| Kimes Cornell Quarterly / eCommons | https://ecommons.cornell.edu/bitstreams/56f1b36d-beb8-42fb-aeea-9fdb59be6c29/download 等 | 搜索+摘要；部分 PDF 链可下 | 采用「相对固定容量、易逝库存、可库存化需求、时间可变需求、合适成本结构、可细分顾客」。餐厅版「right seat / right customer / right price / right duration」。**不把餐厅句直接写成酒店官方定义** |
| Talluri & van Ryzin | Springer / Google Books / INFORMS RMP 书单 | 书目页 | *The Theory and Practice of Revenue Management*，Kluwer 2004 / Springer 2005，ISBN 9781402079337 |
| Phillips | Stanford UP / Google Books | 书目页 | *Pricing and Revenue Optimization* 2nd ed., 2021, Hardcover ISBN 9781503610002 |
| Hayes / Miller / Hayes | Wiley 产品页 / Google Books | 书目页 | *Revenue Management for the Hospitality Industry*；1ed ISBN 978-0-470-39308-6；2ed Wiley 产品 9781119790723 |

### 行业机构（采用主题结构，A）

| 来源 | URL | 打开结果 | 采用 |
| --- | --- | --- | --- |
| HSMAI CRMA Study Guide TOC | https://academy.hsmai.org/wp-content/uploads/sites/11/2024/09/crma-study-guide-table-of-contents.pdf | 搜索/摘要，TOC 可见 | 章节名：What is RM、Fundamentals、Pricing、Groups and Contract、Forecasting、Inventory and Price、Distribution、Measuring Performance、Role of RM。**不采用正文** |
| HSMAI CRME TOC | https://academy.hsmai.org/wp-content/uploads/sites/11/2024/09/2021-toc-for-crme-study-guide.pdf | 同上 | Pricing、Inventory Optimization、Total Hotel Revenue Optimization 等章名 |
| HSMAI *The Future of Pricing* | https://global.hsmai.org/wp-content/uploads/2020/03/hsmai-a4_wp-feb-2020-for-screens-1.0-1.pdf | 搜索摘录 | MinLOS 用于 shoulder；restriction 在超需求且有多晚需求时；hurdle rate = 房间最低可接受价值。标 Vendor/Association Methodology |
| HSMAI *The New RMS* | https://global.hsmai.org/wp-content/uploads/2021/05/HSMAI-White-Paper_The-New-RMS-1.pdf | 搜索摘录 | 库存控制 vs open pricing；预测对了才信控制。不写具体厂商算法 |

### 对象术语（采用为 A，声明厂商口径）

| 来源 | URL | 采用 |
| --- | --- | --- |
| IHG HOLIDEX 术语页 | https://me2.ihgmerlin.com/static/apps/GRS/R.htm | Rate / Rate Category / Rate Code / Rate Plan 的厂商定义。用来**分开三个对象**，不写成行业 ISO |
| Oracle OPERA Rate Codes | https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/rate_codes.htm | Rate Code header/detail、售卖期 vs 入住期 |
| HTNG Express PMS | https://htng.stoplight.io/docs/htng-express-pms-integrations/branches/main/c1a43292f9017-room-rate | rate_plan_code / rate_plan_name / room_rate |

### 实践文（交叉，B；不升级为 S）

| 来源 | 用途 | 处置 |
| --- | --- | --- |
| Lighthouse「OTB / pickup / pace」博客 | 确认行业把 OTB=时点、Pickup=变化、Pace=相对曲线 | **采用三分法**。不采用其决策口吻当普遍规律 |
| Hospitality Net 转载同主题 | Pickup 例子「周五、过去 7 天 23 间夜」 | 采用为 B 级例释 |
| Sigma / Viqal glossary | OTB、Pace 定义相近 | 交叉。Viqal 把 Pace 和 Pickup 写近，**丢弃混用** |
| Chekin 等二手 STAR 解释 | MPI/ARI/RGI 公式 | 丢弃作权威；以 CoStar Glossary 为准 |

---

## 2. 采用的关键判断

1. **Occupancy on the Books 是 STR 官方近义词；Pickup / Pace 不是 Glossary 主词条。** Curriculum 把 OTB 对齐 STR FAQ，Pickup/Pace 标行业实践（B/A），不伪造成 STR 公式。
2. **Level 9 是输出层，Level 2 是路径要塞。** 与任务书四十六 + 四十八节同时成立；写进 Curriculum 第 3 节防止以后「先研究 RMS」。
3. **T03 与 T17 分栏。** 任务书第八节两行都在；Knowledge Map 不合并，避免预测方法和需求概念挤丢。
4. **Rate ≠ Rate Code ≠ Rate Plan。** 对象模型强制拆开。BAR 不升格为第 17 对象，先当 Rate 的公开锚角色。
5. **Phase 1 不做 Operate。** 三份资产都写死。
6. **不写中国 OTA 佣金数字。** 无合同、无官方公开标准。
7. **不摘 Talluri / Phillips / Hayes / HSMAI 讲义正文。** 只做 Theory→Decision 自己的话 + 书目。

---

## 3. 丢弃

| 丢掉的东西 | 原因 |
| --- | --- |
| 把 Pace 定义成 Pickup 的别名 | 多源混合，顾问会丢诊断维度 |
| 用航空弹性数量级填酒店 T14 | 产业不同，C/D |
| 搜索摘要里「RGI 也叫 Revenue Generation Index」与 STR「Revenue Generating Index」的用词纠结当问题 | STR 页面写 Revenue Generating Index；不影响公式 |
| 厂商博客「OTB 70% 该涨」类规则 | D，正是 Curriculum 要反的 |
| 未打开的 YouTube / Bilibili / 公众号课名 | 禁止编造课程名 |
| Marriott One Yield 内部算法细节 | 未打开一手材料 |
| HADM 4050 教师名单以外的「Cornell SHA 收益管理必修课包」 | 只核到 4050/6051 |
| 把餐厅 RevPASH 写进酒店必掌握指标 | 领域不同；只借用 RM 适用条件 |

---

## 4. 未决（留给 T3/T8/T9 和 OTB 深挖）

1. HADM 4050 整页再抓一次（本次超时）。检索：课号 URL 已有。
2. 酒店（非餐厅）「right room / guest / price / time」原始页。检索：`Kimes "right room" "right customer" "right price" Cornell Quarterly hotel`。
3. STR Occupancy on the Books 计算细则（取消、block、complimentary）。检索：`STR "Occupancy on the Books" reporting guidelines`。
4. Yield % 是否仍被 STR 或集团官方使用。检索：`STR yield percentage definition`。
5. Unconstrained demand 酒店补全标准。检索：`hotel demand unconstraining pickup denied`。
6. 国内 PMS/OTA「售卖房型 / 价格方案」与 Rate Plan 的稳定译名。等用户截图。
7. Block / Allotment / Wash 是否升格对象。现挂在 Reservation + Group + Inventory。
8. T8 Source Map、T9 Book List 应对本 log 的书目做规范化收录（尚未写）。

---

## 5. 对三份资产的影响

- Curriculum 的证据表只收本节「采用」。
- Knowledge Map 的 Unknown / Need Verification 与本节第 4 点对齐。
- Object Model 的 STR 口径来自 Glossary/FAQ；Rate 三分来自 IHG/OPERA/HTNG，文内已降为厂商 A。
