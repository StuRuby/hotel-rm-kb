# Research Log｜2026-08-20 OTB / Pickup / Pace → Diagnose + Advise

> 时区：Asia/Shanghai  
> 任务：Wave2 · 把 OTB / Pickup / Booking Pace 推到 Diagnose + Advise，写下第一批剧本  
> 执行者：知识库建设（顾问过程落地）  
> 核对日：2026-08-20

---

## 1. 读了什么（库内）

| 文件 | 用到的部分 |
| --- | --- |
| `metrics/otb.md` `pickup.md` `pace.md` `inventory.md` `metric-tree.md` | 公式、四维、净/毛、对齐、Days-to-Sellout；不另起公式 |
| `diagnosis/problem-tree.md` | §1 OCC Low、§4–§7、§11、§13 |
| `decision-framework/advisor-process.md` | 十段、幅度启发式、300 间 Trigger、第七节仿真（本轮不逐字复用） |
| `decision-framework/input-template.md` | 残缺场景 B/C/D 的 3 个补数 |
| `recommendations/increase-bar-pace-ahead.md` | 涨价子程序；本轮三张卡不重复它 |
| `advisor-playbooks/BACKLOG.md` | P08 Slow / P09 Fast（用户指令写作 P09/P10，以 BACKLOG ID 为准） |
| `curriculum/progress.md` | 只追加 Wave2，不改他人 in_progress |
| `research-log/2026-08-20-metrics-diagnosis.md` | NV-01–NV-10 继续沿用 |
| `README.md` | 证据分级、调用顺序 |

未改：T1/T2/T4、T8–T10/T12 对应文件；`progress.md` 里他人的 in_progress 行。

---

## 2. 公开核对（WebSearch / WebFetch，2026-08-20）

| 源 | URL | 用到的口径 | 级 |
| --- | --- | --- | --- |
| CoStar Forward STAR 指南 | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines | Adjusted Rooms Available / Rooms Booked；Occupancy on the Books；取消=负 Pickup；未扣库存的 tentative 不含 | A |
| CoStar 博文 Using business on the books…（2023-12-12） | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/using-business-books-complete-benchmarking-0 | Occupancy on the Books=确认在手；Pickup=两次采集之差；可对市场/Comp/STLY | A |
| Forward STAR Product Overview PDF | https://chtamarketplace.com/wp-content/uploads/2021/05/Forward-STAR-Product-Overview.pdf | Occupancy on the Books 定义句；Pickup=uptake between collections | A |
| CoStar STR Glossary | https://www.costar.com/products/str-benchmark/resources/glossary | Date-to-Date；Day-to-Day | S |
| Lighthouse pickup/pace 文（页标 2026-02-09） | https://www.mylighthouse.com/resources/blog/booking-pickup-and-pace-revenue-management | Pickup=净变动；Pace=相对历史基准；强 Pickup+弱 Pace=需求后置而非丢失 | B |
| Hospitality Net 转载 | https://www.hospitalitynet.org/news/4125663/the-importance-of-pickup-and-pace-in-hotel-revenue-management | 同上定义互证 | B |
| Peaqplus RM Academy 公开课页 | https://peaqplus.com/academy/en/intermediate/pickup-and-booking-pace.html | OTB=位置，Pickup=导数 | B |
| Lighthouse OTB 指南 | https://www.mylighthouse.com/resources/blog/ultimate-guide-to-otb | OTB=确认未来位置；Pickup=OTB 变化 | B |

**未找到：** 任何 STR / HSMAI 公开页给出「DTA=14 应到 60%」或每日应 +X 间。标 Need Verification，禁止当定律。  
**未打开、不当公式源：** 付费教材正文、未登录 Forward STAR 样本、Cornell eCornell 讲义（source-map 课名 Known，本轮未打开）。  
**未编造：** URL、书名、精确增收。

---

## 3. 写了什么

| 路径 | 角色 |
| --- | --- |
| `theory/otb-pickup-pace.md` | Theory→Limitation + 「14 天 60%」八步协议 |
| `recommendations/hold-price-curve-late.md` | 曲线后置 / Pace 不落后 → 不动价 |
| `recommendations/stimulate-slow-pickup.md` | 何时降、降多少、何时不该降 |
| `recommendations/protect-inventory-fast-pickup.md` | 关低价 / 分房型 / MinLOS；价已最高不涨 |
| `advisor-playbooks/slow-pickup.md` | P08 drafted |
| `advisor-playbooks/fast-pickup.md` | P09 drafted |
| `cases/sim-2026-pace-behind-slow-pickup.md` | Simulation：200 间 / 14 天 / 60% / 3 天 8 间 |
| `cases/sim-2026-pace-ahead-fast-pickup-roomtype.md` | Simulation：300 间房型差，非第七节逐字 |
| `advisor-playbooks/BACKLOG.md` | P08/P09 → drafted（只改对应行与修订表） |
| `curriculum/progress.md` | 文末追加 Wave2 |
| `diagnosis/problem-tree.md` | §4/§5/§17 补已写成剧本的路径（轻量） |

---

## 4. 判断协议（抽查句）

「DTA=14、OTB=60%」单独无快慢。还原间夜 → 声明对齐 → 同 DTA Pace → Pickup 与 Days-to-Sellout → 曲线形状 → 质量检查 → 三角落格。  
用户只给「14 天、60%、3 天 8 间」：先不改 BAR；8 间的快慢取决于总房（80 间可能 Match，200/300 间偏 Slow）；Pace 无基准则 Unknown。补 3 个：总房、同 DTA 基准、BAR+开关。

---

## 5. 两个剧本的首选动作（抽查）

| 剧本 | 首选（Hypothesis） |
| --- | --- |
| P08 Slow Pickup | 排除后仍 Behind+慢+价高：BAR 先不动，开围栏预付到最低～中位竞对（仿真 899 店 → 预付 829）。价已低则只开渠道/松限制。禁止一夜 −15%+。 |
| P09 Fast Pickup | 价低+快：关 < 新地板的公开低价 + Increase BAR 第一刀（+8–15% 或最低竞对）。**价已最高：只关/限，不涨。** 3D 快 7D 不快：先查大单。房型仿真：STD 859→959，套房不动。 |

---

## 6. 未决 / 沿用 NV

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-02 | Pickup 净/毛；tentative / complimentary 是否进 OTB | 默认确认净额；tentative 单列 |
| NV-03 | Pace 日期对齐 vs 星期对齐 | 节按节，其余先星期对齐并声明 |
| NV-08 | Forward Adjusted Availability vs 店内 Remaining | 不把 Forward OCC 当历史 STAR |
| NV-11 | 本店各 DOW DTA=14 历史中位 | 没有则 Pace=Unknown |
| NV-12 | Pickup% 分母 | 先要间夜 |
| — | ±5/8pp、−5–10%、Trigger 间夜、配额 30–50% | 全部 Hypothesis，待 `feedback/` |

---

## 7. 明确没做

- 没改 T1/T2/T4/T8–T10/T12。  
- 没写 P01–P07、P10 Group。  
- 没操作系统、没伪造增收。  
- 没把 1029 或 829 写成万能价。  
- 用户指令中的 P09/P10 编号与 BACKLOG P08/P09 不一致：文件按 slug 写，状态改 BACKLOG 的 P08/P09。
