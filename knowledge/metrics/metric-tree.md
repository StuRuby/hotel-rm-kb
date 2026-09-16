# Revenue Metric Tree｜收益指标树

> 文件：`metrics/metric-tree.md`
> 日期：2026-08-20
> Last Verified：2026-08-20
> 用途：顾问调用的指标总图。单指标细节见同目录指标卡。
> 口径原则：不确定标 Need Verification。禁止把店内 PMS 数直接当 STR 数。

## 0. 口径纪律

读任何一张表之前先钉死六件事：

1. **窗口**：Stay Date / 日 / 周 / 月 / YTD。
2. **对象**：全店 / 房型 / 渠道 / 细分 / Rate Plan。
3. **时点**：实际发生（actualized）还是在手预订（OTB / on the books）。
4. **分母**：物理房量、可售房量、还是 STR 报告房量。三者经常不一致。
5. **收入**：含税否、含服务费否、含取消罚金否、包价是否已拆房费。
6. **Gross vs Net**：客人看到的价、酒店账面收到的价、扣完获客成本后的价。

分子分母必须同窗口、同范围。混用 = 假诊断。

**证据分级（本树）**

| 级 | 用在哪里 |
| --- | --- |
| S | STR/CoStar 官方 Glossary、STR Data Reporting Guidelines、USALI 公开说明（2026-08-20 核对） |
| A | STR Forward STAR、HSMAI / Kalibri COPE 等机构或厂商公开方法 |
| B | 多家 RMS / 培训 / 实践相互验证的 OTB、Pickup、Pace 用法 |
| C/D | 不进本树当公式 |

---

## 1. 库存层 Inventory

库存是后面所有比率的分母。分母错，OCC / RevPAR / Forecast 全错。

```
Physical Rooms
    ├─ permanently removed          → 改房量，通知 STR
    ├─ Extended Closed / 季节关店   → STR 另处理
    └─ 当日可进入统计的房
         ├─ Out of Order (OOO)
         ├─ Out of Service / 维修 / 自用（店内口径不一）
         ├─ Complimentary / House Use
         └─ Available to Sell
              ├─ Sold（含已入住 + 未到的确认预订，看时点）
              └─ Remaining / Vacant
```

### 1.1 Available Rooms / 可供房晚（Rooms Available, Room Supply）

- **定义**：指定窗口内计入供给的房晚。STR 称 Rooms Available / Supply。
- **公式（STR，S）**：`Rooms Available = 酒店报告房量 × 窗口天数`。例：100 间 × 31 天 = 3,100。来源：CoStar STR Glossary；STR Historical Benchmarking Data Reporting Guidelines（2026-08-20）。
- **STR 关键口径（S）**：短于约 6 个月的临时停用 / 装修，**不得**从报告给 STR 的可用房里扣。永久撤房要改房量。整店关超 1 个日历月、季节关店 ≥30 天，另走 Temporary / Seasonal Closed。
- **店内 PMS 常见口径（B，必须声明）**：`Available_PMS = Physical − OOO − 部分自用`。这会抬高 OCC。
- **上游**：物理房量、关房决策、装修、灾害、季节关店、业主单元是否进出租池。
- **下游**：OCC、RevPAR、TRevPAR、GOPPAR、Forecast OCC 的分母；Remaining。
- **常见误读**：用 PMS 可售房算的 85% OCC 去对 STR Comp Set 的 78%；关了 20 间维修房后 OCC 升，当成需求变好。
- **顾问决策含义**：先问「这张表的 Available 含不含 OOO」。不含则 OCC 偏乐观，RevPAR 分母偏小。对标 Comp Set 一律用 STR 同口径。

### 1.2 Sold Rooms / 已售房晚（Rooms Sold, Room Demand）

- **定义**：指定窗口内产生客房收入的已售房晚。STR 亦称 Demand / Room Nights Sold。
- **公式（STR，S）**：计数；**不含**与促销/合同无关的免费房（员工、业主、考察）。含与促销/合同绑定的免费夜（买二送一的赠夜计 Sold）。No-show **不计** Sold，但保证类 No-show 罚金可进 Room Revenue。来源：STR Reporting Guidelines。
- **上游**：预订、入住、取消、提前离店、延住、日用房（day use 可让 OCC>100%）。
- **下游**：OCC 分子、ADR 分母、Pickup 房间数、LOS 加权。
- **常见误读**：把免费房算进 Sold 压低 ADR；把 No-show 算 Sold 抬高 OCC；用「支付房晚」当「入住房晚」。
- **顾问决策含义**：Sold 涨不等于赚钱。先拆：是新预订、延住，还是取消变少。再看 ADR 和渠道。

### 1.3 Remaining Rooms / 剩余可售

- **定义**：该 Stay Date 还能卖的房晚。
- **公式（店内，B）**：`Remaining ≈ Available_to_sell − Sold_OTB`。超售时可为负。Need Verification：各 PMS 对 OOO、预留、渠道锁房是否从 Remaining 扣。
- **上游**：Available、OTB Sold、渠道配额、房型关闭、超售限额。
- **下游**：还能接多少、要不要关低价、要不要超售、涨价空间。
- **常见误读**：Remaining=0 当「需求饱和」。可能是渠道配额耗尽、房型关错、或团队未洗过的虚占。
- **顾问决策含义**：决策对象是 **Remaining × DTA × 当前 Pace**，不是总房量。剩 8 间和剩 80 间，同样「OCC 70%」完全不是一个问题。

### 1.4 Out of Order / OOO

- **定义**：因设施故障、维修、装修等当日不可售的房间。
- **公式**：计数。店内从可售扣；STR 历史报告在 <6 个月临时停用时**不扣**（S）。
- **上游**：工程、装修、事故。
- **下游**：店内 OCC 分母、真实接待能力、超售安全垫。
- **常见误读**：OOO 高 → 店内 OCC 很好看 → 以为定价成功。
- **顾问决策含义**：OOO 是供给事件。先修分母，再谈价格。长期 OOO 要评估是否应正式减房量。
- **决策指针（2026-08-23 00:17，不改本条 S 公式）**：好看 OCC / 厚剩余先走 [`../theory/capacity-ooo.md`](../theory/capacity-ooo.md) 与 [`../recommendations/dont-price-off-ooo-occ.md`](../recommendations/dont-price-off-ooo-occ.md)。Remaining := 可售，不是物理空。PMS 扣 OOO、STR Comp 不扣 → 不对 MPI。中国报表名 NV。不写 P37。

### 1.5 Complimentary / House Use（2026-08-24 16:17 指针，不改 §1.1–1.4 公式）

瞬态无关免费房占物理房、**不进** STR 历史 Rooms Sold（促销/合同送夜仍进 Sold）。Permanent House Use 6+ months → P37。卡：[`complimentary-house-use.md`](complimentary-house-use.md) · 理论 [`../theory/complimentary-house-use.md`](../theory/complimentary-house-use.md) · [`../recommendations/dont-raise-on-comp-occ.md`](../recommendations/dont-raise-on-comp-occ.md)。中国 PMS 字段名 NV。不写 P47。政府价未写。


---

## 2. 业绩层 Performance

核心恒等式（在同一 Room Revenue、同一 Sold、同一 Available 下成立）：

```
OCC  = Sold / Available
ADR  = Room Revenue / Sold
RevPAR = Room Revenue / Available = OCC × ADR
```

这是会计恒等，不是「涨 OCC 或涨 ADR 都能涨 RevPAR」的经营保证。降价抬 OCC 时 ADR 掉，乘积可升可降。

```
         Sold ──┐
                ├─→ OCC ──┐
    Available ──┘         ├─→ RevPAR
    Room Revenue ─┬─→ ADR ─┘
                  └────────────→ RevPAR（直接除 Available）
```

### 2.1 Occupancy / OCC / 入住率

- **定义**：可供房中已售出的比例。
- **公式（STR，S）**：`OCC = Rooms Sold / Rooms Available`。来源：CoStar STR Glossary。
- **卡片**：[`occ.md`](occ.md)
- **上游**：需求、价格、可售、限制、渠道开关、产品、竞对、活动。
- **下游**：RevPAR、变动成本、GOP（入住带来布草/能源/早餐成本）、超售风险。
- **常见误读**：OCC 低 = 该降价；OCC 高 = 成功。高 OCC + 低 ADR 常是早早把房卖便宜了。
- **顾问决策含义**：OCC 是结果。先问 DTA、Pace、分母、市场，再决定动价格还是动库存。见问题树 OCC Low。

- **决策指针（2026-08-24 08:17，不改本条 S 公式）**：OCC>100% 可能是钟点同日再卖胀分子，≠ 过夜更紧，≠ 未约束截断「更强」。先拆过夜 Sold。[`../theory/day-use-inventory.md`](../theory/day-use-inventory.md) · [`../recommendations/dont-raise-overnight-off-dayuse-occ.md`](../recommendations/dont-raise-overnight-off-dayuse-occ.md)。混口径不对 MPI。中国 6pm NV。

### 2.2 Average Daily Rate / ADR / 平均房价

- **定义**：已售房晚的平均客房收入。
- **公式（STR，S）**：`ADR = Room Revenue / Rooms Sold`。Room Revenue 应为客房租金，净折让，不含税；包价只含房费分摊。来源：CoStar Glossary + STR Reporting Guidelines。
- **卡片**：[`adr.md`](adr.md)
- **上游**：价格结构、售出房型组合、细分/渠道组合、免费房是否进分母、包价分摊。
- **下游**：RevPAR、ARI、GOP（高 ADR 通常变动成本几乎不变）。
- **常见误读**：ADR 升 = 定价成功。可能是低价房卖光只剩套房；或 OCC 崩了只留下协议高价。
- **顾问决策含义**：永远和 OCC、房型组合、渠道净价一起看。要的是 RevPAR / Net Revenue，不是单独刷 ADR。

### 2.3 RevPAR / 平均可供房收入

- **定义**：每一间可供房贡献的客房收入，不论是否售出。行业 topline 中枢指标。
- **公式（STR，S）**：`RevPAR = Room Revenue / Rooms Available`；等价 `OCC × ADR`。
- **卡片**：[`revpar.md`](revpar.md)
- **上游**：OCC 与 ADR 的权衡；分母口径。
- **下游**：RGI、预算完成、和 GOPPAR 的经验相关（CoStar 公开文称 GOPPAR 变动常约为 RevPAR 变动的 1.5–2.0 倍——经验观察，非定律）。
- **常见误读**：渠道 RevPAR 当全店；用物理房当 PMS 可售分母去对 STR；只追 OCC 或只追 ADR。
- **顾问决策含义**：先看 RevPAR 方向，再拆是 OCC 问题还是 ADR 问题。两边都弱才是需求/份额问题。

**因果，不是定义**

| 变化 | 常见机制 | 先核什么 |
| --- | --- | --- |
| OCC↑ ADR↓ RevPAR↑ | 降价换量，弹性够 | 净 ADR、变动成本、是否卖穿高峰 |
| OCC↑ ADR↓ RevPAR↓ | 降价换量，弹性不够或卖错日期 | 立刻停降，看是否应收回促销 |
| OCC↓ ADR↑ RevPAR↑ | 收紧低价 / 卖更好房型 | Remaining、DTA、取消 |
| OCC↓ ADR↑ RevPAR↓ | 价过高或渠道关掉 | 转化、竞对、库存是否开放 |
| 两者同向↑ | 真实需求或份额上升 | 是否该再涨、是否早售罄 |
| 两者同向↓ | 市场弱或产品/分销坏了 | 市场 vs 本店（MPI/ARI/RGI） |

---

## 3. 预订层 Booking

三个词不要混：

| | OTB | Pickup | Pace |
| --- | --- | --- | --- |
| 是什么 | **位置**：此刻账上有多少 | **速度**：两张快照之间变了多少 | **相对位置**：相对曲线/同期/预算偏快还是偏慢 |
| 类比 | 里程表读数 | 这一段开了多远 | 比平时同一里程碑快还是慢 |
| 单独能决定涨降价吗 | 不能 | 不能 | 不能，但比前两个更接近「该不该动」 |

```
Booking Date ─────────────── Stay Date
     │  Lead Time = Stay − Book
     │
     ├─ 每天的净预订增量 累加 ──→ OTB（当日累计位置）
     ├─ OTB_t − OTB_{t−N} ────→ Pickup N 日
     └─ OTB @ DTA vs 历史同 DTA / STLY / Budget / Forecast
                              ──→ Pace / Booking Curve
```

OTB、Pickup、Pace **不是** STR 历史 STAR 的 OCC/ADR/RevPAR。STR Forward STAR 对未来日报告 Occupancy on the Books 与 Pickup（A，需订阅）。店内 RMS/BI 算法各异，用前先对口径。

### 3.1 OTB / On the Books / 在手预订

至少拆四维，缺一不可：

| 指标 | 含义 | 公式（B，店内） |
| --- | --- | --- |
| OTB Rooms | 该 Stay Date 已确认房晚 | 确认预订房晚（声明是否含 complimentary） |
| OTB OCC | 在手入住率 | OTB Rooms / Available（声明 Available） |
| OTB ADR | 在手均价 | OTB Room Revenue / OTB Rooms |
| OTB Revenue | 在手客房收入 | Σ 确认预订客房收入 |

- **定义**：某一 Stay Date（或区间）在某一 Booking Date 快照上，尚未入住、尚未取消的确认预订合计。亦称 BOB / Business on Books。
- **卡片**：[`otb.md`](otb.md)
- **上游**：历史曲线、当期价格、限制、活动、团队、渠道开关。
- **下游**：Forecast 的已锁定部分；Pickup 的起点；Pace 的分子。
- **常见误读**：**「OTB 70% 就是好」**。见下一小节。
- **顾问决策含义**：OTB 只回答「现在在哪」。必须加上 DTA、曲线、组合、Remaining 才回答「好不好」。

#### 为什么「OTB 70% 不一定好」

70% 是一个没有单位的位置。同一数字至少有七种相反解释：

1. **DTA 不同**。DTA=45 的商务酒店 70% 往往过快（早售罄风险）；DTA=1 的周末度假店 70% 往往过慢（当晚卖不完）。
2. **历史曲线不同**。该星期几、该季节，往年同 DTA 是 50% 还是 82%？没有曲线，70% 无意义。
3. **STLY / Budget / Forecast 不同**。70% vs STLY 55% 是领先；70% vs Budget 88% 是落后。
4. **市场不同**。本店 70%、Comp Set 已 88%，是丢份额（MPI 会差）。
5. **价格组合不同**。70% 全是最低 BAR / 批发，ADR 被锁死，后半段只能卖贵或卖不动。
6. **来源不同**。70% 来自一个可洗的团队 ≠ 70% 来自不可取消预付散客。
7. **房型不同**。总 70% 但标准间 95%、套房 20%，是房型失衡，不是「还好」。

顾问句式：**「DTA=__ 的 Stay Date __，OTB OCC __ / ADR __，相对 STLY 同 DTA __、相对曲线 __、Remaining __，所以判断 __。」** 禁止只复述 70%。

### 3.2 Pickup / 预订增量

- **定义**：同一 Stay Date，两张 OTB 快照之差。是速度，不是位置。
- **公式（B）**：`Pickup_N = OTB_today − OTB_{today−N}`。N ∈ {1, 3, 7, 14, 30}。可对 Rooms / OCC pts / ADR / Revenue 各算一条。
- **净 Pickup**：`+新订 −取消 −提前离店 +延住 ±改期`。只报「新订」会掩盖高取消。
- **卡片**：[`pickup.md`](pickup.md)
- **上游**：价格变动、活动官宣、竞对满房、渠道活动、天气、团队确认。
- **下游**：Forecast 修正、是否涨/降/不动、是否关低价。
- **常见误读**：1D Pickup 大 = 需求爆发（可能是团队一次性进账）；Pickup 慢 = 该降价（可能只是该店本来就最后 7 天才走量）。
- **顾问决策含义**：看 **窗口结构**。1D/3D 管战术，7D/14D 管趋势，30D 管是否被团队/活动扭曲。必须按 Stay Date、房型、细分、渠道拆。

### 3.3 Pace / Booking Pace / 预订进度

- **定义**：当前 OTB 相对「同一比较基准、同一 DTA」是快还是慢。Booking Curve 是把各 DTA 的 OTB 连成的填充轨迹。
- **公式（B，常用，非 STR 官方）**：
  - `Pace vs STLY = OTB_now(DTA=d) − OTB_STLY(DTA=d)`（房间或 OCC 点）
  - 或 `(OTB_now / OTB_STLY − 1) × 100%`
  - 也要对 Budget、Forecast、历史同 DOW 曲线各算一条
- **卡片**：[`pace.md`](pace.md)
- **上游**：OTB、所选基准、日历对齐（日期对齐 vs 星期对齐）、是否剔除活动日。
- **下游**：Forecast、定价方向、是否提前售罄。
- **常见误读**：用「今年已订 60%、去年最终 80%」比进度（DTA 不同）；活动年当正常年；Pace 领先就无脑涨到卖不动。
- **顾问决策含义**：Pace 回答任务书那句：「还剩 14 天、OTB 60%，到底快还是慢？」答案在曲线上，不在绝对 OCC。

### 3.4 Lead Time / 提前预订期

- **定义**：单笔预订的 Booking Date 到 Arrival/Stay Date 的天数。Booking Window 是一堆 Lead Time 的分布，不是平均数本身。
- **公式（B）**：`Lead Time = Stay Date − Booking Date`（按夜或按抵达，须声明）。
- **上游**：细分（团队长、协议短、休闲中）、渠道、活动、取消政策。
- **下游**：该在哪个 DTA 保护库存、何时放促销、取消暴露多久。
- **常见误读**：平均 Lead Time 45 天。可能是 50% 团队 90 天 + 50% 当天，中间是空的。
- **顾问决策含义**：看分布和分细分，不看平均数。平均被团队拉长时，散客可能已经在最后 7 天打架。

### 3.5 LOS / Length of Stay / 连住夜数

- **定义**：一笔入住的间夜数。STR Glossary：guest 住的夜数（S，定义级）。
- **公式（B）**：`平均 LOS = 房晚 / 到店件数`（按预订或按实际入住须声明）。
- **上游**：MinLOS/MaxLOS、周末包、商务单晚、套餐。
- **下游**：高峰肩日占用、打扫成本、是否该用限制拼肩日。
- **常见误读**：LOS 升 = 更好。若全是低价连住占满周五周六，可能挤掉高 ADR 单晚。
- **顾问决策含义**：高峰夜用 MinLOS 保护；淡季用连住价拉肩日。LOS 是库存杠杆，不是虚荣指标。

---

## 4. 预测层 Forecast

Forecast 是「OTB + 对剩余 Pickup 的判断」，不是另一套神秘 KPI。

| 指标 | 定义 | 公式状态 |
| --- | --- | --- |
| Forecast OCC | 该 Stay Date 最终入住率预期 | `OTB OCC + 预期剩余 Pickup OCC`。方法（曲线/Pickup/模型）须声明。无单一官方式 |
| Forecast ADR | 最终已售均价预期 | 已订 ADR 与剩余需求 ADR 的加权。Need Verification 各 RMS |
| Forecast Revenue | 最终客房收入预期 | `Forecast OCC × Forecast ADR × Available`，或直接 Σ。须与 OCC/ADR 自洽 |

- **上游**：OTB、Pace、历史曲线、活动、价格计划、取消率、市场。
- **下游**：定价、库存、团队接受、人工排班、预算 gap。
- **常见误读**：把 Budget 当 Forecast；把系统一个数当确定性；Sellout 后仍用 Constrained Forecast 当真实需求。
- **顾问决策含义**：写建议时同时写 Forecast 与不确定区间。Forecast 错先修预测，再动价格。见问题树 Forecast Error。

Unconstrained Demand（任务书十三节）：满房时 Sold=Available ≠ 真实需求。Denied / lost demand 不进 OCC。顾问不可把 100% OCC 读成「需求刚好 100%」。

---

## 5. 对标层 Benchmark（相对 Comp Set）

MPI / ARI / RGI **只在相对一个聚合组（Comp Set / Market / Submarket）时有意义**。100 = fair share（STR：若其他条件相同，指数预期为 100）。

```
MPI = (本店 OCC  / Comp Set OCC)  × 100
ARI = (本店 ADR  / Comp Set ADR)  × 100
RGI = (本店 RevPAR / Comp Set RevPAR) × 100
```

来源：CoStar STR Glossary（S，2026-08-20）。RGI 亦称 RevPAR Index / Revenue Generating Index。MPI 亦称 Occupancy Index。

恒等提醒：在同一口径下 `RGI ≈ MPI × ARI / 100`（OCC、ADR 指数连乘回到 RevPAR 指数）。计算时用小数 OCC 还是百分数须一致。

**Comp Set 不是「附近几家看起来像的店」的随口名单。** STR 合规 Comp Set 有最低家数、非关联家数、单一品牌/公司房间占比上限（见 CoStar Competitive Set Guidelines）。顾问用内部自选竞对时，必须标明「非 STR 合规集」。

| 组合 | 通常含义 | 先排除 |
| --- | --- | --- |
| MPI↑ ARI↓ | 量多价低，可能定价偏低或卖了太多低价渠道 | 产品升级、Comp 错位 |
| MPI↓ ARI↑ | 价高量少，可能定价偏高或关了渠道 | 产品问题、库存没开 |
| 双高 | 份额与价格都强 | 是否早售罄、是否还能再取 ADR |
| 双低 | 份额与价格都弱 | 先分：市场都弱还是只有本店 |
| RGI≈100 但 MPI/ARI 撕裂 | 用价换量或用量换价，RevPAR 持平 | 看 GOP 和净价，持平不一定健康 |

- **常见误读**：RGI 110 当「可以涨价」；Comp Set 里塞进不竞争的奢华店把自己打得很惨；用本店 PMS OCC 对 STR Comp OCC。
- **顾问决策含义**：指数回答「相对谁」。先确认 Comp Set 仍是真对手，再解释指数。Competitor Rate 是信号，指数也是信号，都不是自动调价指令。

---

## 6. 分销层 Distribution：Gross vs Net

```
Guest Paid / Gross Room Revenue
    − 佣金 Commission（OTA / 旅行社 / 批发）
    − 渠道/交易费（GDS、支付、引擎）
    − 可归到该预订的广告 / 促销酒店出资
    − 积分/会员成本（若纳入口径）
= Net Revenue（本树工作口径，须每次声明成本集合）
Net ADR = Net Revenue / Sold
```

**没有单一官方「Net ADR」公式。** STR 历史报告：批发和 “pay when booked” 互联网价报 **净额**；“pay later” 互联网价报 **总额**，佣金进客房部门费用（S，Reporting Guidelines）。因此 STR ADR 已部分净、部分毛，**不能**假设 STR ADR = Gross ADR。

Kalibri / HSMAI 公开的 **COPE**（Contribution to Operating Profit & Expense）= 酒店收到的收入 − 直接获客成本（佣金、渠道/交易费、积分、consortia 等）。这是厂商/机构方法（A），不是 USALI 科目。

### 6.1 Commission / 佣金

- **定义**：按合同付给中介的服务费。
- **公式**：`佣金 = 合同基数 × 费率`。基数含税否、退单是否冲回、活动是否加码 → 合同，Need Verification。
- **上游**：渠道组合、是否参加优待计划、价。
- **下游**：Net ADR、COPE、GOP。
- **常见误读**：标价费率 × GMV；忽略退佣；把「佣金高」当成「不该卖 OTA」（没有 OTA 可能 OCC 更差）。

### 6.2 CAC / Customer Acquisition Cost / 获客成本

- **定义**：为拿到该预订付出的获取成本。Kalibri 等把佣金、渠道费、支付、忠诚、可归属广告算进来（A）。
- **公式**：无统一官方式。顾问必须列出成本清单。草案：`CAC_per_night = (佣金 + 渠道费 + 可归属广告 + 积分成本) / Sold`。
- **常见误读**：只算 OTA 佣金，直销广告当免费；用平均 CAC 决策边际活动（该用增量 CAC）。

### 6.3 Net ADR / 净均价

- **定义**：扣掉已声明获客成本后，每已售房晚留下的客房收入。
- **公式（草案，B）**：`Net ADR = (Room Revenue − 已声明获客成本) / Sold`。
- **误读**：Net ADR = 利润（还没扣布草、能源、早餐、人力）。

### 6.4 Net Revenue / 净客房收入

- **定义**：对应窗口、对应成本集合下的客房净收入。
- **公式（草案）**：`Net Revenue = Gross Room Revenue − 已声明获客成本`。
- **顾问决策含义**：渠道策略用 Net，不用 Gross。高佣金渠道如果带来的是增量、否则卖不掉的间夜，净贡献仍可能为正。

**Gross vs Net 决策**

| 只看 Gross | 实际可能 |
| --- | --- |
| ADR 涨 | 全是 OTA 加价计划，Net ADR 平或降 |
| OCC 涨 | 广告 + 深折扣换来的，CAC 吃掉增量 |
| 直销 ADR 低于 OTA | 直销 Net 仍可能更高 |
| 关 OTA「省佣金」 | 损失的是增量需求，RevPAR 与 GOP 一起掉 |

---

## 7. 利润层 Profit

客房收益管理优化的是约束下的贡献，不是 OCC。

### 7.1 Contribution / 贡献

三个常见含义，**禁止混用**：

| 名称 | 口径 | 级别 |
| --- | --- | --- |
| 客房部门利润（USALI Rooms departmental income） | 客房收入 − 客房部门费用（佣金常在此） | S/A，科目以 USALI 为准 |
| COPE | 收到的收入 − 直接获客成本 | A，Kalibri/HSMAI |
| 顾问「间夜贡献」草案 | Net ADR − 变动成本（布草、 Amenities、早餐增量等） | B，须声明变动成本清单 |

- **顾问决策含义**：接不接团队、开不开低价渠道，用贡献而不是 BAR 对比。变动成本未定时，至少用 Net ADR 排序，并写 Unknown。

### 7.2 TRevPAR / Total Revenue per Available Room

- **定义**：全部经营收入（客房 + 餐饮 + 其他部门 + miscellaneous）摊到每间可供房。
- **公式（STR，S）**：`TRevPAR = Total Revenue / Total Available Rooms`。Total Revenue 含客房、F&B、其他部门及杂项（取消费、取消费、resort fee 等，以 Glossary 为准）。
- **上游**：客房 + 餐饮 + 会议 + 停车 + 水疗等。
- **下游**：全面收益、团队评估（低房价高会议）。
- **常见误读**：用 TRevPAR 代替 RevPAR 做客房定价；resort fee 已进 Total 又加进 Room Revenue（STR：resort fee 不进 Room Revenue）。

### 7.3 GOPPAR / Gross Operating Profit per Available Room

- **定义**：管理团队可控的经营利润摊到每间可供房。
- **公式（STR，S）**：`GOPPAR = Gross Operating Profit / Rooms Available`。
- **GOP（USALI 结构，A）**：各部门利润合计 − 未分配经营费用（行政、销售、维修、能源等）。其下才是管理费、固定费用、折旧。不要把 GOP 当成净利润。
- **上游**：TRevPAR 结构、部门成本、未分配费用、入住带来的变动成本。
- **下游**：业主评价、是否值得为 OCC 支付变动成本。
- **常见误读**：RevPAR 第一 = GOP 第一。高 OCC 低 ADR 可能 GOPPAR 更差（多出清洁/早餐）。

---

## 8. 因果总图（调用时从这里走）

```
外部需求 / 活动 / 天气 / 交通
        ↓
价格 · 限制 · 库存开放 · 渠道 · 产品
        ↓
Lead Time 分布 → 每日净 Pickup
        ↓
OTB (Rooms / OCC / ADR / Revenue)
        ↓ 对比同 DTA 曲线
Pace 领先 / 持平 / 落后
        ↓
Forecast OCC / ADR / Revenue
        ↓ 实际发生
Sold × Room Revenue → OCC · ADR → RevPAR
        ↓ vs Comp Set
MPI · ARI · RGI
        ↓ 扣获客成本
Net ADR · Net Revenue · Contribution
        ↓ 扣经营费用
TRevPAR → GOPPAR
```

**三条顾问禁令**

1. 看见 OCC 低，不自动降价。
2. 看见 OTB 70%，不自动说好。
3. 看见 Gross ADR 高，不自动说渠道健康。

---

## 9. 最小诊断包

用户只丢一个数过来时，至少再要（或在缺口里点名）这些：

1. Stay Date + DTA + 星期 + 事件
2. Available / Sold / Remaining / OOO（声明口径）
3. OTB OCC + OTB ADR
4. Pickup 1D 与 7D（最好有净额）
5. 同 DTA 的 STLY 或历史曲线
6. 当前 BAR 与主要竞对价
7. 若谈利润：佣金或渠道组合

缺 4 或 5，不允许下「该降价/该涨价」的确定结论；只能给条件化建议。

---

## 10. 指标卡索引

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| OCC | [`occ.md`](occ.md) | 入住率 |
| ADR | [`adr.md`](adr.md) | 均价 |
| RevPAR | [`revpar.md`](revpar.md) | OCC×ADR |
| OTB | [`otb.md`](otb.md) | 在手四维 |
| Pickup | [`pickup.md`](pickup.md) | 1/3/7/14/30 |
| Pace | [`pace.md`](pace.md) | 曲线与快慢 |
| Inventory | [`inventory.md`](inventory.md) | Available/Sold/Remaining/OOO |
| Benchmark | [`mpi-ari-rgi.md`](mpi-ari-rgi.md) | 相对 Comp Set |
| Net ADR | [`net-adr.md`](net-adr.md) | Gross vs Net |

问题诊断走 [`../diagnosis/problem-tree.md`](../diagnosis/problem-tree.md)。

---

## 11. 指标卡索引追加（2026-08-21 16:17，不改写 §7）

§7.2 TRevPAR / §7.3 GOPPAR 正文不重写。独立指标卡已落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| TRevPAR | [`trevpar.md`](trevpar.md) | Total Revenue / Available；≠ RevPAR；≠ 利润 |
| GOPPAR | [`goppar.md`](goppar.md) | GOP / Available；1.5–2.0× 观察保持 A（CoStar RevPAR 文复核） |

调用：用户问「全店收入 / 经营利润按房」→ 上表；客房涨降价仍先 `revpar.md`。弹性方向诊断见 `pricing/price-elasticity-advise.md`（不进本树公式）。

---

## 12. 指标卡索引追加（2026-08-22 00:17，不改写 §7）

§7.2 仍以 TRevPAR 为主条。独立 **TrevPOR** 卡落地（此前只在 `trevpar.md` 对照句）：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| TrevPOR | [`trevpor.md`](trevpor.md) | Total Revenue / Rooms Sold；≠ TRevPAR；≠ ADR；≠ 今晚 BAR |
| T18 理论 | [`../theory/total-revenue-management.md`](../theory/total-revenue-management.md) | 客房 RM ≠ 全店利润 RM；无餐饮贡献数字不翻客房置换 |

恒等提醒（同窗同口径）：`TRevPAR = OCC × TrevPOR`。调用：用户问「住客还花多少 / 低房价高餐饮」→ TrevPOR 看结构，接/拒仍走置换 + `accept-low-room-for-fnb.md`。客房涨降价仍先 `revpar.md`。


---

## 13. 指标卡索引追加（2026-08-22 08:17，不改写 §7）

§7.1 Contribution / §7.3 GOPPAR 正文不重写。T19 独立卡落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| Flow Through / Flex | [`flow-through.md`](flow-through.md) | ΔGOP / ΔTotal Revenue；收入升用 Flow Through、降用 Flex（STR S） |
| 间夜贡献理论 | [`../theory/profit-contribution.md`](../theory/profit-contribution.md) | 净价 − 用户变动成本；≤0 宁可不卖；无成本不说「总比空着强」 |
| 宁可不卖 | [`../recommendations/do-not-sell-below-contribution.md`](../recommendations/do-not-sell-below-contribution.md) | 关穿底 Rate Plan / 不配 399 / 守 BAR |

调用：用户问「499 佣金+早餐+布草会不会亏」→ 贡献卡 + 宁可不卖。客房涨降价仍先 `revpar.md`。OCC↑ GOP↓ 比 OCC↑ RevPAR↓ 更差，先查 mix/成本，不是再降价。变动成本金额 **NV**。

---

## 14. 指标卡索引追加（2026-08-23 00:17，不改写 §1 公式）

§1.4 OOO 正文公式不重写。T06 理论+决策卡落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 容量 / OOO | [`../theory/capacity-ooo.md`](../theory/capacity-ooo.md) | Physical ≠ 可售 ≠ STR Available；误诊 A 假涨 / B 假砸 |
| 不按维修 OCC 定价 | [`../recommendations/dont-price-off-ooo-occ.md`](../recommendations/dont-price-off-ooo-occ.md) | 重算可售 Remaining；不问 Comp 混口径；不编 20 |

调用：用户问「OCC 92% 再涨 / 空 40 砸一刀 / Comp 高 8 点」→ 先分母。客房涨降价仍先 `revpar.md` + 可售剩余。中国 PMS 字段名 **NV**。


---

## 15. 指标卡索引追加（2026-08-23 16:17，不改写 ADR/RevPAR 公式）

§ 客房 ADR / RevPAR 正文不重写。T08 内部顾问尺落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 压缩夜价值 CNV | [`stay-network-value.md`](stay-network-value.md) | Stay 客房收入 / 紧夜数；通常高峰记 1 不是 3。**非 STR 公式**（Hypothesis） |
| T08 网络 | [`../pricing/los-optimization.md`](../pricing/los-optimization.md) | Arrival×LOS 瓶颈；Sat-only 置换 vs 增量 |

调用：用户问「只订周六接不接 / 三晚均价被周六拉高」→ 先 CNV + 肩日还卖不卖，动作走 P40。不要用 ADR/三晚均价代替本尺。中国 OTA 均价公式 **NV**。Duetto 5–7% 不进档。


---

## 16. 指标卡索引追加（2026-08-24 00:17，不改写 OCC / Forecast 公式）

§2.1 OCC / §4 Forecast 正文不重写。T03 可观察代理落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 拒单 / 流失 | [`denials-regrets.md`](denials-regrets.md) | Denial = 想订我们、我们不能/不愿卖；Regret = 对方选别人（常不可见）；口头「赶过人」无字段 ≠ 指标。**非 STR Occupancy**。无行业% |
| 不凭口头拒单涨价 | [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md) | 默认 Hold；要日志；真容量+Ahead+剩余紧才交 P03/P09 |

调用：用户说「前台说赶过人要不要涨 / 0 拒单是不是没需求」→ 本卡。满房风险仍先 Remaining+Pace（P03）。限制夜拒单先 P33。上门已成交走 P42。中国 PMS 字段 / 拒单% **NV**。钟点房仍空。

Unconstrained Demand（§4 句仍有效）：满房时 Sold=Available ≠ 真实需求。Denied 不进 OCC。**日志是旁证，加总不是 Demand。**


**决策指针（2026-08-24 08:17，不改本条 S 公式）：** OCC>100% 可能是钟点同日再卖胀分子，不是过夜更紧，也不是未约束截断的「更强」。先拆过夜 Sold。[`../theory/day-use-inventory.md`](../theory/day-use-inventory.md) · [`../recommendations/dont-raise-overnight-off-dayuse-occ.md`](../recommendations/dont-raise-overnight-off-dayuse-occ.md)。不对混口径 MPI。中国 6pm NV。

---

## 17. 指标卡索引追加（2026-08-24 16:17，不改写 §1 Sold / §2 OCC/ADR 公式）

§1.2 Sold / §2.1 OCC / §2.2 ADR 正文公式不重写。T-Comp 落地：

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 免费 / 自用 | [`complimentary-house-use.md`](complimentary-house-use.md) | 无关 Comp 房晚；Paid OCC；PMS vs STR 缺口；Comp 占占用比。Hypothesis 尺须声明 |
| 理论 | [`../theory/complimentary-house-use.md`](../theory/complimentary-house-use.md) | 历史 Sold 不含无关免费；Forward OTB 可含 Comp；永久 HU → P37 |
| 不按 Comp OCC 涨 | [`../recommendations/dont-raise-on-comp-occ.md`](../recommendations/dont-raise-on-comp-occ.md) | 不按虚高 PMS OCC 涨；不 dump Comp 占着的房；重算付费剩余 |

调用：用户问「OCC 92% 还要不要涨 / ADR 掉了要不要补涨」且占用里有免费 → 本卡。维修缩分母仍 P37。钟点胀分子仍 P44。中国 PMS 字段名 **NV**。不写 P47。

## 18. 指标卡索引追加（2026-08-25 00:17，不改写 §1 Sold / §2 OCC/ADR 公式）

§1.2 Sold / §2.1 OCC 正文公式不重写。T-Gov 落地。**不发明 STR Government OCC。**

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 政务/差旅协议 | [`government-negotiated-rate.md`](government-negotiated-rate.md) | 协议占用份额；非协议 remaining。Hypothesis 尺须声明。无 STR Government KPI |
| 理论 | [`../theory/government-negotiated-rate.md`](../theory/government-negotiated-rate.md) | 协议价≠BAR≠Comp；GSA $110=US；531=框架；限额表 NV |
| 不把 BAR 锚到协议价 | [`../recommendations/dont-anchor-bar-to-gov-rate.md`](../recommendations/dont-anchor-bar-to-gov-rate.md) | 不按协议 OCC 涨；拒绝 BAR=协议/GSA；高峰可限额/blackout |

调用：用户问「政府协议住满了要不要涨 / BAR 要不要跟到差旅标准 / 公务员算不算免费房」→ 本卡。$0 仍 P47。永久 HU 仍 P37。机组仍 P31。**P48 仍未写。** 限额表 **NV**。

## 19. 指标卡索引追加（2026-08-25 08:17，不改写 §1 Sold / §2 OCC/ADR / TRevPAR 公式）

§1.2 Sold / 客房 ADR / TRevPAR 正文公式不重写。T-Meet 落地。**不把 RevPAS 写成 BAR 公式。**

| 卡 | 路径 | 覆盖 |
| --- | --- | --- |
| 会带房 | [`meeting-with-rooms.md`](meeting-with-rooms.md) | 房块 vs 参会人；pickup vs block；厅 vs 客房拆分。Hypothesis 尺须声明。无假 RevPAS-as-BAR |
| 理论 | [`../theory/meeting-with-rooms.md`](../theory/meeting-with-rooms.md) | 三笔：厅/会 vs 餐 vs 占房；无贡献不接低价房；高峰 Counter |
| 不把 BAR dump 成会带房价 | [`../recommendations/dont-dump-bar-for-meeting-rooms.md`](../recommendations/dont-dump-bar-for-meeting-rooms.md) | 无贡献不 Accept 低价房块；高峰拒房留会；Hold 779–799 首选 799 |

调用：用户问「80 人只要 10 间 / 会议室包了客房随便给 / 会带房 399 要不要改 BAR」→ 本卡。客房-only 仍 P10。婚宴仍 P30。政务仍 P48。**P50 仍未写。** 会带房模板 **NV**。399/10/80 只 Simulation。

## MTD Pace vs Budget 指针（2026-08-26 10:17 CST 追加）

月累计 Actual / Budget / Forecast / LY、剩余夜容量与「即使 100% sellout 能否装下缺口」见 [`mtd-pace-vs-budget.md`](mtd-pace-vs-budget.md)。Budget Pace 不是降价触发器；逐夜 Pace 才决定 P56/P02/P05。考核与奖金口径 NV。

## Allotment Pickup 指针（2026-08-26 18:17 CST 追加）

渠道切房今晚间数 vs 已 pickup vs 未还、扣不扣可售，见 [`allotment-pickup.md`](allotment-pickup.md)。无默认 %。切房未还不是公开需求；公开 Pace 才决定公开 BAR。团块 pickup 仍走 [`group-pickup-cutoff.md`](group-pickup-cutoff.md)。合同条款 / 还房时点 NV。


## Parity Gap 指针（2026-08-26 22:17 CST 追加）

可比公开灵活价 Brand.com vs 具名 OTA、gap = OTA − Brand（符号有意义）、**无默认容忍 %**，见 [`parity-gap.md`](parity-gap.md)。不可比先走 P36。合同条款 / 罚则% NV。EEA DMA 价平禁止 = 管辖标签，不是中国规则。


## Live vs Intended Rate 指针（2026-08-27 02:17 CST 追加）

意图公开灵活 BAR vs 具名渠道同口径活价、gap = Live − Intended、映射/价码 id 若已知、**无默认容忍**，见 [`live-vs-intended-rate.md`](live-vs-intended-rate.md)。活价不是本打算卖的 → P60，不要当市价。两边都是本打算卖的可比公开灵活 → [`parity-gap.md`](parity-gap.md) / P59。本店 CM 字段名 / 美团映射 SOP NV。


## Upsell Take Rate 指针（2026-08-27 06:17 CST 追加）

付费升房报价次数 / 接受次数 / 升房收入、free vs paid split、**无默认 take-rate %**，见 [`upsell-take-rate.md`](upsell-take-rate.md)。免费升走 P49 桶，不进付费 take-rate。本店升房价表 NV。套房空着不是免费升的许可证（P61）。


## Cancel-Rebook Gap 指针（2026-08-27 10:17 CST 追加）

同住取消再订件数、ADR before vs after、**无默认 %**，见 [`cancel-rebook-gap.md`](cancel-rebook-gap.md)。有同住更低价重订 → P62 Hold，不要当 leftover。本店改订吃新价政策 NV。无重订的取消潮仍走高取消 Soft（P14）。

## Sellable vs Staff Cap 指针（2026-08-27 14:17 CST 追加）

账面 remaining vs 今晚 HK 还能翻/还能安全接的到达、可交房 vs 账面房、**无默认间/人**，见 [`sellable-vs-staff-cap.md`](sellable-vs-staff-cap.md)。Gap > 0 且人手确认 → 产能顶，走 P63 Hold + 收口，不要当 leftover。维修离线仍走 P37 / inventory OOO。本店人效 / 班次 SOP NV。

## Open Rate Classes 指针（2026-08-27 18:17 CST 追加）

公开在售价档 vs 意图地板、Open_below_floor 列表、Gap_low、nesting mode（nested/shared/dedicated/Unknown）、**无默认关档 %**，见 [`open-rate-classes.md`](open-rate-classes.md)。列表非空 + Ahead → P64 关/限低档，不要假装已涨价。低档全关 + Behind → 弱夜误关（同伴卡 / P05）。活价不是本打算卖的 → P60 / live-vs-intended。本店 nesting 字段 NV。


## Reinstate Rate Gap 指针（2026-08-27 22:17 CST 追加）

同记录恢复后过账价 < 当前 BAR 的件数、ADR gap、**无默认 %**，见 [`reinstate-rate-gap.md`](reinstate-rate-gap.md)。Ahead + below-BAR → P65 拒旧价给当前，不要当必须认。取消后再订新单更低价 → cancel-rebook-gap / P62。本店 Reinstate 政策 NV。
