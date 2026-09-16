# Revenue Knowledge Map

> 资产类型：学科树（侦察空白用）
> 状态：Phase 1 初稿可用
> 日期：2026-08-20
> Last Verified：2026-08-20
> 对应任务：T2 / 任务书第八节（20 主题）+ 第十一至二十八节延伸
> 用法：后续侦察只往「状态 = 待建 / Unknown」的节点补资产，不要另起一套分类。

---

## 0. 怎么调用这张图

1. 用户问题先落到 **主题编号**（T01–T20 或扩展 X 节点），再落到子节点。
2. 每个节点只承认四类待建资产：`card` / `metric` / `decision card` / `playbook`。理论映射写进 card；对象关系不在本图展开，见 `object-model/revenue-objects.md`。
3. 状态词：
   - **骨架就绪**：本图或相邻 T1/T4 已能导航
   - **待建**：目录在、内容空
   - **Unknown**：定义或口径还没核到 S/A
   - **Need Verification**：有线索、缺打开的权威页
4. 当前绝大多数叶子 = 待建。这是故意的：空白可见，才能侦察。
5. 建设顺序仍服从 Curriculum 18 步，不按 T01→T20 扫。

```text
调用问题 ──► 主题编号 ──► 子节点 ──► 目录路径 ──► 资产类型
                              │
                              └─ 若状态≠可用 → 标 Hypothesis / 去 backlog
```

---

## 1. 总树（先看形状）

```text
Revenue Management Body of Knowledge
├── A 基础与对象
│   ├── T01 基础理论
│   ├── T02 Yield Management
│   └── X-OBJ 对象 / 时间轴 / 顾问过程
├── B 看见需求（第一阶段要塞）
│   ├── X-OTB OTB
│   ├── X-PU Pickup
│   ├── X-PA Pace / Booking Curve
│   ├── T03 Demand Forecasting
│   └── T17 Forecasting（方法与误差，和 T03 分栏）
├── C 定价
│   ├── T04 Pricing
│   └── T14 Price Elasticity
├── D 库存与容量
│   ├── T05 Inventory Control
│   ├── T06 Capacity Optimization
│   ├── T07 Overbooking
│   ├── T08 LOS Optimization
│   └── T09 Restrictions
├── E 需求结构与分销
│   ├── T10 Segmentation
│   ├── T11 Channel Management
│   ├── T12 Distribution Cost
│   └── T13 Group Displacement
├── F 市场
│   ├── T15 Competitive Positioning
│   ├── T16 Market Benchmarking
│   └── X-SIG Demand Signals / Event
├── G 利润与战略
│   ├── T18 Total Revenue Management
│   ├── T19 Profit Optimization
│   └── T20 Revenue Strategy
└── H 系统、组织、顾问交付
    ├── X-RMS RMS Landscape
    ├── X-TECH Hotel Tech Stack
    ├── X-ORG 集团 / Cluster 组织
    ├── X-DIAG 问题树与 Daily Brief
    └── X-CASE 案例 / 复盘
```

T03 与 T17 在任务书里同时出现：本图 **保留两栏**。T03 = 需求本身（含 unconstrained）；T17 = 预测方法、误差、Forecast 对象怎么用。

---

## 2. 二十个主题详表

列说明：子节点只列顾问调用时要能点开的最小集合；不是百科全书。

### T01 Revenue Management 基础理论

| 字段 | 内容 |
| --- | --- |
| 子节点 | 固定容量；易逝库存；可细分顾客；时间可变需求；合适成本结构；可库存化需求（预订）；差异化定价前提；RM vs 会计收入；「Right inventory / guest / price / time / channel」实践表述 |
| 目录 | `theory/` `glossary/` |
| 状态 | 待建（课程已能导航；卡片未写） |
| 资产 | card（假设与边界）；decision card 不在这一层 |
| 证据 | Kimes Cornell Quarterly 餐厅 RM 系列公开 PDF（适用条件）；Cornell HADM 4050/6051 公开描述。酒店「五 Right」完整原始出处 Need Verification |
| 侦察缺口 | 航空起源 → 酒店迁移的公开时间线；与 Yield 的术语史 |

### T02 Yield Management

| 字段 | 内容 |
| --- | --- |
| 子节点 | Yield 作为库存/限制控制的历史用法；Yield %（Room Revenue / 潜在满房收入）及误读；Yield vs RM（RM 更宽，含定价、渠道、总收益）；Open pricing vs 传统 yield control |
| 目录 | `theory/` `inventory/` `restrictions/` |
| 状态 | Unknown / 待建。Yield % 公式口径未用 STR 官方页锁定（STR Glossary 2026-08-20 未见 Yield % 主词条） |
| 资产 | card（术语史 + 何时还该用 Yield 这个词）；metric（若采用 Yield %，必须单列口径） |
| 侦察缺口 | 集团内部是否还把 Yield 当岗位名；与 hurdle rate 的替换关系 |

### T03 Demand Forecasting

| 字段 | 内容 |
| --- | --- |
| 子节点 | Constrained / Unconstrained Demand；Denied / Lost / Recaptured；Sellout 截断；Booking Curve 预测；Pickup 预测；Seasonality；DOW；Trend；Event Adjustment；Final Demand / OCC / ADR / Revenue 区间 |
| 目录 | `forecasting/` |
| 状态 | 待建（**拒单/流失可观察代理 drafted** 2026-08-24 00:17；**P43 过程剧本 drafted** 2026-08-24 02:17；Unconstrained 估法仍 Vendor） |
| 资产 | card（方法与假设；`forecasting/unconstrained-vs-constrained.md` Vendor）；metric（Forecast OCC/ADR/Revenue、Unconstrained Demand；**`metrics/denials-regrets.md`**）；decision card（Forecast Miss；**`recommendations/dont-raise-on-verbal-denials.md`**）；playbook（Forecast Miss；**P43** `advisor-playbooks/verbal-denials.md` 口头拒单过程，2026-08-24 02:17 drafted） |
| 侦察缺口 | 酒店业 unconstrained 的可操作补全法仍缺 **S** 级公开标准。**2026-08-24 02:17：** P43 过程 drafted（无日志 Hold+记；限制夜 P33/P40；真容量+Ahead+紧才离开到 P03/P09）。中国 PMS 拒单字段 / 行业拒单% / STR Denials Index / Walk 成本 **仍 NV**。**钟点房走 P44（06:17）。**

### T04 Pricing

| 字段 | 内容 |
| --- | --- |
| 子节点 | BAR / Rack；Dynamic；Occupancy-based；Demand-based；Competitor-based；Value-based；Seasonal；Event；DOW；Last-minute；Advance Purchase；Member；Promotion；Package；Room Type Differential；涨幅/降幅；价格阶梯（BAR1/2/3） |
| 目录 | `pricing/` |
| 状态 | 待建（**P42 当日 walk-in 过程 drafted** 2026-08-23 22:17） |
| 资产 | card；decision card（Increase / Hold / Decrease BAR，Close low rate）；playbook（High/Low Demand、Event、Price War；**P42** `advisor-playbooks/same-day-walk-in.md` 当日 walk-in vs OTA dump，2026-08-23 22:17 drafted） |
| 侦察缺口 | 中国市场 BAR 与「日历价 / 普通价 / 促销价」的字段映射。**2026-08-23 22:17：** 当日 walk-in 口价过程已 drafted（P42）；中国前台折扣表 / 美团今夜 SOP 仍 NV |

### T05 Inventory Control

| 字段 | 内容 |
| --- | --- |
| 子节点 | Open / Close；Booking Limit；Sell Limit；Protected；Shared；Nested；House vs Room Type vs Channel 库存；Remaining vs Available；Overbooked 显示 |
| 目录 | `inventory/` |
| 状态 | 待建骨架+专项（**P44 drafted** 06:17；**day-use 库存理论 drafted** 2026-08-24 08:17；**P64 nested rate class drafted** 2026-08-27 18:17） |
| 资产 | card；decision card（Open/Close/Protect）；playbook（Sellout Risk、Early Sellout、Last Minute Unsold；**P44** `advisor-playbooks/day-use-hourly.md` 钟点占晚房，2026-08-24 06:17 drafted；决策卡 `recommendations/dont-dump-overnight-for-dayuse.md`）；**理论** `theory/day-use-inventory.md` + 短卡 `recommendations/dont-raise-overnight-off-dayuse-occ.md`（08:17）；**P64** `advisor-playbooks/nested-rate-class.md`（18:17 drafted；嵌套低价档误用）+ 主卡 `dont-leave-low-class-open-on-peak.md` + 同伴卡 `dont-strip-low-class-on-weak-nights.md` + `metrics/open-rate-classes.md`；压缩机械复用 `close-low-rate-compression.md` |
| 侦察缺口 | 不同 PMS 对 nested 的实现差异（OPERA / 国内 PMS）**仍 NV**（P64 过程已 drafted，字段名仍 NV）。**2026-08-24 06:17：** 钟点开/关/限额过程已 drafted。**2026-08-24 08:17：** day-use OCC 理论 drafted。**2026-08-27 18:17：** **P64** nested rate class drafted；nesting mode **仍 NV**。美团/携程钟点 SOP / 保洁分钟 / 199 行情 / 中国 6pm 营业线 **仍 NV** |

### T06 Capacity Optimization

| 字段 | 内容 |
| --- | --- |
| 子节点 | 固定容量短期不可扩；维修房 / OO / OOO；功能空间与客房争用（会议型酒店）；容量与超售的联合；容量被 Restriction 有效缩小 |
| 目录 | `inventory/` `theory/` `overbooking/` |
| 状态 | **骨架+理论卡 drafted**（2026-08-23 00:17）。**P37 剧本 drafted**（2026-08-23 02:17）。metric 口径已在 inventory/occ/metric-tree §1.4；决策卡 drafted |
| 资产 | card（`theory/capacity-ooo.md`）；metric（Available 口径，沿用 `metrics/inventory.md` `occ.md`，不另开 ooo.md）；decision card（`recommendations/dont-price-off-ooo-occ.md`）；playbook（**P37** `advisor-playbooks/ooo-capacity.md`，2026-08-23 02:17 drafted；**P44** 钟点不把未释放 OOO 当库存，2026-08-24 06:17）；**逆命题理论** `theory/day-use-inventory.md`（08:17：胀分子 ≠ 缩分母）；**T-Comp** `theory/complimentary-house-use.md` + `metrics/complimentary-house-use.md` + `recommendations/dont-raise-on-comp-occ.md`（16:17：gratis 占房不进历史 Sold）+ **P47** `advisor-playbooks/complimentary-house-use.md`（18:17 drafted；主卡复用）；**P49** `advisor-playbooks/loyalty-award-upgrade.md`（06:17 drafted；兑房/SA 升级，主卡 `dont-raise-on-award-occ.md`）；**P63** `advisor-playbooks/staff-capacity-constraint.md`（14:17 drafted；人手吞吐）+ **T-Staff** `theory/staff-capacity-vs-demand.md`（16:17 drafted：产能顶 ≠ 弱需求）+ 主卡 `dont-dump-when-staff-capped.md` + `metrics/sellable-vs-staff-cap.md` |
| 侦察缺口 | 中国酒店 OO/OOO 报表命名 **仍 NV**。不编维修房间夜。**2026-08-24 06:17：** 未释放 OOO 不是钟点库存（P44→P37）。**2026-08-24 16:17：** 瞬态 Comp/临时自用 theory+card drafted（`theory/complimentary-house-use.md`）。**2026-08-24 18:17：** **P47** playbook drafted。永久 HU 仍本节点/**P37**。中国 Comp 字段名仍 NV。**T-Gov drafted 00:17；P48 drafted 02:17；限额表仍 NV。** **2026-08-25 06:17：** **P49** 积分免房/空间可用升级 drafted（`advisor-playbooks/loyalty-award-upgrade.md`）；兑房占物理房、不按虚高 OCC 涨。华住积分结算 **仍 NV**。Walk 成本仍 NV。限额表仍 NV。**2026-08-27 14:17：** P63 drafted。**2026-08-27 16:17：** **T-Staff** drafted（`theory/staff-capacity-vs-demand.md`）。本店人效/班次 **仍 NV**。不编间/人中国常模。 |

### T07 Overbooking

| 字段 | 内容 |
| --- | --- |
| 子节点 | Cancellation；No-show；Early Departure；Extension；Wash（团队）；Walk Cost；超售上限；按 DOW / Segment 的 no-show 差 |
| 目录 | `overbooking/` |
| 状态 | 待建（超售公式/Walk 成本仍 NV）。**P14 drafted**；**P24 Walk 过程 drafted**；**P38 取消窗收紧 drafted**（2026-08-23 06:17）；**P46 Early Departure / Stayover drafted**（2026-08-24 14:17）；**P54 no-show drafted**；**P62 cancel-rebook drafted**；**P65 Reinstate drafted**（2026-08-27 22:17）。Walk 成本 **仍 NV**；Reinstate 政策 **仍 NV** |
| 资产 | card；metric（No-show %、Cancel %；**P65** `metrics/reinstate-rate-gap.md`）；decision card（是否超售、建议间数；**P65** `recommendations/dont-reinstate-below-current-bar.md`）；playbook（**P14** High Cancellation Soft 诊断；**P24** `advisor-playbooks/overbooking-walk.md`；**P38** `advisor-playbooks/cancel-policy-tighten.md` 何时收免费窗；**P46** `advisor-playbooks/early-departure-stayover.md`；**P54** `transient-noshow.md`；**P62** `same-day-cancel-rebook.md`；**P65** `advisor-playbooks/cancel-reinstate-old-rate.md` 取消后按原价恢复，2026-08-27 22:17 drafted） |
| 侦察缺口 | Walk 成本构成（房费、交通、品牌惩罚）缺内部数据。**2026-08-24 14:17：** Early Departure + Extension 过程已指向 **P46**；Walk 成本 **仍 NV**。House-use/Comp **theory+card drafted** 2026-08-24 16:17；**P47 playbook drafted** 2026-08-24 18:17（`advisor-playbooks/complimentary-house-use.md`）。永久 HU 仍 P37。**P48 政务协议价 drafted** 2026-08-25 02:17；高峰协议续接走 P48 形 D，不是另开续住专剧。Walk 成本 **仍 NV**。**2026-08-27 22:17：** **P65** Reinstate drafted；本店 Reinstate 是否带原价 / 华住字段 **仍 NV** |

### T08 Length of Stay Optimization

| 字段 | 内容 |
| --- | --- |
| 子节点 | Arrival Date × LOS 网络；Peak / Shoulder；单晚 vs 多晚贡献；Stay Pattern 拒绝；与 MinLOS 的关系；多日 RevPAR vs 网络收入 |
| 目录 | `restrictions/` `theory/` `forecasting/` `pricing/` `metrics/` |
| 状态 | **理论加深 + 剧本 drafted**（2026-08-23 16:17）。Arrival×LOS 网络 + 压缩夜价值指标 drafted。Wave7 Peak+Shoulder 算术保留。**P40 Stay Pattern 已于 14:17 drafted**（不重写）。**P41 长包房 已于 18:17 drafted** |
| 资产 | card（`pricing/los-optimization.md` §10+ 网络）；metric（`metrics/stay-network-value.md`，Hypothesis，非 STR 公式）；decision card（**P40** `recommendations/reject-sat-only-on-peak.md`）；playbook（**P40** `advisor-playbooks/stay-pattern.md`；**P41** `advisor-playbooks/long-stay-monthly.md` 长包/Contract 占房；P11 是周末市场形状，不是 stay-pattern 决策）；decision card 另有 **P41** `recommendations/counter-or-reject-long-stay.md` |
| 侦察缺口 | 手算表已落地（指标卡 §3 / 理论卡 §12）。中国 OTA 连住均价公式 / MinLOS 展示 **仍 NV**。**P41 长包过程 drafted**；中国月租价表 / 华住 SOP / 300 行情 **仍 NV**。**2026-08-24 06:17：** 钟点可偷同一瓶颈夜 → **P44 drafted**；不重写 P40/T08 |

### T09 Restrictions

| 字段 | 内容 |
| --- | --- |
| 子节点 | MinLOS；MaxLOS；CTA；CTD；Advance Purchase；Closed / Open；Rate-level yield；Hurdle / Bid Price（概念）；误用（淡季堆限制）；**免费取消窗随 DTA** |
| 目录 | `restrictions/` |
| 状态 | 待建（MinLOS/CTA 剧本已有）。**P19 Advance Purchase 产品 drafted**；**P38 免费取消窗随 DTA 收紧 drafted**（2026-08-23 06:17）；**P65 Reinstate 与旧价政策交叉 drafted**（2026-08-27 22:17；过程在 T07，收窗仍 P38） |
| 资产 | card；decision card（上/下 MinLOS、CTA；**P38** `recommendations/tighten-cancel-before-cut.md`）；playbook（Holiday、Concert/Event、Peak Night；**P19** prepaid；**P38** `advisor-playbooks/cancel-policy-tighten.md`；交叉指针 **P65** `cancel-reinstate-old-rate.md` — 已取消单恢复 ≠ 新生产收窗） |
| 证据 | HSMAI 2020 *The Future of Pricing*：restriction 在超需求 + 存在多晚需求时才有意义 |
| 侦察缺口 | 中国 OTA 对 MinLOS / CTA 的展示与拒单行为。**Reinstate 政策 NV**（P65 过程已 drafted，字段名仍 NV） |

### T10 Segmentation

| 字段 | 内容 |
| --- | --- |
| 子节点 | 经营细分：Retail、Corporate、Negotiated、Group、Wholesale、OTA、Package、Crew、Government、Member；STR 三分：Transient / Group / Contract；Lead Time / LOS / Cancel / ADR 特征；Segment Mix；同一客人多标签冲突 |
| 目录 | `segmentation/` |
| 状态 | 待建（Crew **P31 drafted** 2026-08-22 18:17；**Contract/长包 P41 drafted** 2026-08-23 18:17；**T-Gov 政务/差旅协议 theory+card drafted** 2026-08-25 00:17；**P48 playbook drafted** 2026-08-25 02:17；**P49 积分兑房/elite 升级 drafted** 2026-08-25 06:17；其余细分叶子仍待建） |
| 资产 | card；metric（Segment ADR/OCC/Pickup）；decision card（关低价值 Segment）；playbook（弱平日、渠道/客群失衡；**P31** `advisor-playbooks/airline-crew.md` Crew；**P41** `advisor-playbooks/long-stay-monthly.md` Contract / 长包 30 夜，2026-08-23 18:17 drafted）；**T-Gov** `theory/government-negotiated-rate.md` + `metrics/government-negotiated-rate.md` + `recommendations/dont-anchor-bar-to-gov-rate.md`（00:17：协议价≠BAR≠Comp）+ **P48** `advisor-playbooks/government-negotiated-rate.md`（02:17 drafted；主卡复用）；**P49** `advisor-playbooks/loyalty-award-upgrade.md`（06:17 drafted；loyalty award / elite upgrade） |
| 证据 | STR Glossary：Transient <10 间/晚；Group 通常 ≥10 且有协议；Contract 长约保底（>~30 天、无论用不用保证付款）。动作见 **P41**，不是机组 extra（P31）也不是协议漏出（P26） |
| 侦察缺口 | 酒店 PMS 市场码 vs 统计 Segment 的对照表（每家不同，要模板）。**2026-08-25 00:17：** T-Gov drafted。**2026-08-25 02:17：** **P48** playbook drafted。现行分城市/职级住宿费限额表 **仍 NV**。华住政务价不编。GSA $110 = US Fact，不是中国 BAR。**2026-08-25 06:17：** **P49** drafted。华住积分结算 **仍 NV**。STR 兑房进 Sold **NV**。Walk 成本仍 NV。限额表仍 NV |

### T11 Channel Management

| 字段 | 内容 |
| --- | --- |
| 子节点 | Brand.com；Direct；携程；美团；飞猪；同程；Booking；Agoda；Expedia；GDS；Wholesale；Corporate portal；渠道库存分配；Parity；会员价围栏；**Direct walk-in vs OTA dump** |
| 目录 | `channel/` |
| 状态 | 待建（**P42 当日 walk-in drafted** 2026-08-23 22:17；**P58 切房 drafted** 2026-08-26 18:17；**P59 Parity drafted** 2026-08-26 22:17；**T-Parity drafted** 2026-08-27 00:17；**P60 映射错价 drafted** 2026-08-27 02:17） |
| 资产 | card；metric（渠道 OCC/ADR/Net）；decision card（开/关渠道、调配额；**P42** `recommendations/dont-match-ota-dump-at-desk.md`）；playbook（Price War、渠道结构问题；**P42** `advisor-playbooks/same-day-walk-in.md`；**P58** `channel-allotment-unsold.md`；**P59** `rate-parity-breach.md`；**P60** `channel-mapping-misprice.md`）；**T-Parity** `theory/rate-parity-integrity.md` |
| 侦察缺口 | 各 OTA 当前促销产品名（随时变，必须标日期）。本店切房合同 / 价平条款 / CM 字段 **仍 NV** |

### T12 Distribution Cost

| 字段 | 内容 |
| --- | --- |
| 子节点 | Commission；Discount；Marketing Cost；Channel Manager / GDS 费；Merchant vs Agency；Net ADR；Net Revenue；Net Contribution；CAC |
| 目录 | `channel/` `metrics/` |
| 状态 | 待建 / Unknown（无统一公开费率） |
| 资产 | metric（Net ADR、Commission %）；decision card（要不要参加某促销）；card（Gross→Net 公式） |
| 侦察缺口 | **禁止编造**中国 OTA 佣金%。按用户合同读。检索词仅作线索：`hotel OTA commission China Ctrip merchant model` |

### T13 Group Displacement

| 字段 | 内容 |
| --- | --- |
| 子节点 | 团询置换；Definite vs Tentative；Cutoff / Wash；会带房；只要厅；婚宴块 |
| 目录 | `group/` |
| 状态 | **多剧 drafted**（P10 / P50 / P51 / P52 / P53 / T-Status / T-Meet / T-Hall） |
| 资产 | **P10** group-evaluation；**P50** meeting-with-rooms；**P51** catering-only；**P52** group-cutoff-wash；**P53** definite-vs-tentative；**T-Status** `theory/group-inventory-deduct.md`；**T-Meet** / **T-Hall** |
| 侦察缺口 | 本店 wash% / PMS 状态名 **仍 NV** |


### T14 Price Elasticity

| 字段 | 内容 |
| --- | --- |
| 子节点 | 价格↑ → Conversion → Demand → OCC → ADR → Revenue；分段弹性（高峰/平日/最后一分钟）；不可观测弹性时的可逆试验；跨房型转移 |
| 目录 | pricing/ theory/ |
| 状态 | 待建。Phase 1 用反馈积累 Internal Experience，不先追求精确系数 |
| 资产 | card（决策用法与局限）；decision card（试探性涨/降的步长）；metric（Conversion，若用户给得出来） |
| 侦察缺口 | 公开酒店弹性实证数量级（不要把航空弹性直接搬来） |

### T15 Competitive Positioning

| 字段 | 内容 |
| --- | --- |
| 子节点 | Comp Set 选择：Location / Product / Brand / Price / Segment / Facilities；Primary / Secondary / Aspirational；竞对房价是信号；竞对满房 / 关房；Rate Shop 口径（含早、取消、连住） |
| 目录 | market/ |
| 状态 | 待建 |
| 资产 | card；decision card（跟不跟涨）；playbook（Competitor Sellout、Price War） |
| 证据 | STR：Comp Set = 与主体争夺客源、用于 benchmarking 的一组酒店 |
| 侦察缺口 | 用户酒店的真实 Comp Set（必须问，不猜） |

### T16 Market Benchmarking

| 字段 | 内容 |
| --- | --- |
| 子节点 | OCC / ADR / RevPAR 及 % Chg；MPI（Occ Index）；ARI；RGI（RevPAR Index）；Fair Share = 100；Rank；Market vs Submarket vs Comp Set；STR Class / Chain Scale |
| 目录 | market/ metrics/ |
| 状态 | 口径骨架可用（定义已核）；指标卡待建 |
| 资产 | metric（MPI/ARI/RGI）；card（误读：RGI>100 仍可能定价错）；playbook 无单独「看 STAR」剧本，并入 Daily Brief |
| 证据 | STR Glossary 2026-08-20：公式与 fair share 表述已核 |
| 侦察缺口 | 中国非 STR 样本市场如何做「穷人版 benchmarking」 |

### T17 Forecasting（方法栏）

| 字段 | 内容 |
| --- | --- |
| 子节点 | Historical 平均；Moving Average；Booking Curve；Pickup 模型；Time Series；ML / Boosting / NN / Transformer（后置）；Forecast 误差；Override 纪律；Budget 不是 Forecast |
| 目录 | forecasting/ |
| 状态 | 待建（**P66 RMS override 过程 drafted** 2026-08-28 02:17；ML 节点故意后置） |
| 资产 | card（方法适用边界）；metric（Forecast error；**P66** `metrics/rms-vs-pace.md`）；decision card（何时 override；**P66** `recommendations/dont-follow-rms-dump.md`）；playbook（**P66** `advisor-playbooks/rms-rec-override.md` RMS 建议不是定价权，2026-08-28 02:17 drafted） |
| 侦察缺口 | 单体酒店最小手工预测表。**2026-08-28 02:17：** P66 过程 drafted（Ahead 不跟 RMS dump；真弱 P05 理由写 Pace）。本店 RMS / 华住会字段 / override % **仍 NV**。HSMAI 80:20 不进店规。 |

### T18 Total Revenue Management

| 字段 | 内容 |
| --- | --- |
| 子节点 | Rooms + F&B + Meeting + Spa + 其他；TRevPAR；TrevPOR；Ancillary；客房策略对餐饮的外溢；功能空间优化 |
| 目录 | theory/ metrics/（未来可增 total-revenue/，现不新建空目录） |
| 状态 | 待建 |
| 资产 | metric（TRevPAR/TrevPOR）；card；decision card（是否为餐饮接受低房费团队） |
| 证据 | STR：TRevPAR = Total Revenue / Rooms Available；TrevPOR = Total Revenue / Rooms Sold。HSMAI CRME TOC 含 Total Hotel Revenue Optimization |
| 侦察缺口 | 用户酒店非房收占比（没有数就不要用 TRM 压房间决策） |

### T19 Profit Optimization

| 字段 | 内容 |
| --- | --- |
| 子节点 | Contribution；GOPPAR；Flow Through / Flex；变动成本（多卖一间的边际成本）；渠道净贡献；Walk 成本进利润 |
| 目录 | metrics/ theory/ |
| 状态 | 待建 |
| 资产 | metric（GOPPAR、Contribution、Net Revenue）；card；decision card（宁可不卖） |
| 证据 | STR：GOPPAR = GOP / Rooms Available；Flow Through % = ΔGOP / ΔTotal Revenue × 100 |
| 侦察缺口 | 每间夜变动成本（布草、能耗、佣金）内部数 |

### T20 Revenue Strategy

| 字段 | 内容 |
| --- | --- |
| 子节点 | 定位与价格带；年度 Budget 逻辑；淡旺季策略；会员 vs 公开价；Cluster / Central 与单店权责；从 RM 到 Commercial Strategy；何时不跟市场打价格战 |
| 目录 | theory/ decision-framework/ market/ |
| 状态 | 待建 |
| 资产 | card；playbook（Price War、弱市策略）；decision card（战略例外：品牌价不能破） |
| 证据 | HSMAI 从 RM 到 Revenue Strategy 的认证框架（只引用 TOC 主题名） |

---

## 3. 扩展节点（第八节以外，但顾问每天要用）

这些不是「第 21 学科」，是把任务书第十一至三十五节挂到树上，避免后续侦察重复开根。

**

**

**

**
[](../object-model/revenue-objects.html)

**
[](curriculum.html)

| ID | 主题 | 子节点 | 目录 | 状态 | 资产 |
| --- | --- | --- | --- | --- | --- |
| X-OTB | OTB / Occupancy on the Books | OTB Rooms/OCC/ADR/Revenue；相对 DTA / STLY / Budget / Forecast | metrics/ forecasting/ | 优先待建 | metric + card + decision card |
| X-PU | Pickup | 1D/3D/7D/14D/30D；净 Pickup；按房型/渠道/客群/价格码拆 | metrics/ | 优先待建 | metric + playbook（Fast/Slow Pickup） |
| X-PA | Booking Pace | Booking Curve；ahead / on / behind；同 DTA 对照 | metrics/ forecasting/ | 优先待建 | metric + decision card「快还是慢」 |
| X-SIG | Demand Signals | Holiday；Exhibition；Concert；Conference；Flight/Train；Weather；OTA Search；Citywide Compression | demand-signals/ | 待建 | card（信号铅期/强度/可靠性）；playbook（Event/Holiday） |
| X-RMS | RMS Landscape | IDeaS；Duetto；Atomize；BEONx；Amadeus；集团自研 | systems/ | 待建（T10） | card（Vendor Methodology） |
| X-TECH | Hotel Tech Stack | PMS；CRS；RMS；Channel Manager；OTA；GDS；IBE；Rate Shopper；BI；CRM | hotel-tech-stack/ | 待建 | card（数据从哪来、价格从哪执行） |
| X-ORG | 组织方法论 | Property / Cluster / Area / Central RM；Daily Revenue Meeting；Commercial Team | systems/ decision-framework/ | 待建 | card；playbook（会议节奏，非操作系统） |
| X-OBJ | Object Model | 16 个核心对象 | object-model/ | 骨架就绪 | 本阶段用 revenue-objects.md |
| X-DIAG | 诊断与 Brief | Problem Tree；Daily Revenue Brief；Opportunity 扫描 | diagnosis/ decision-framework/ | 待建（T5/T6） | playbook + decision card |
| X-CASE | 案例与复盘 | Case Library；Recommendation Journal；Causal Awareness | cases/ feedback/ recommendations/ | 待建 | playbook 的实例，不是第 5 类资产 |
| X-CUR | Curriculum | L1–L9；18 步 | curriculum/ | 骨架就绪 | 本文件 + curriculum.md |

---

## 4. 目录 ↔ 主题速查（侦察用）

| 目录 | 覆盖主题 | 现在有没有可调用正文 |
| --- | --- | --- |
| curriculum/ | X-CUR | 有：curriculum.md / 本图 / task-brief |
| object-model/ | X-OBJ | 有：revenue-objects.md |
| theory/ | T01 T02 T06 T08 T14 T18 T19 T20 | 无 |
| glossary/ | 横切 | 无 |
| metrics/ | L1 指标、X-OTB/PU/PA、T16 T19 | 无（T3 进行中） |
| forecasting/ | T03 T17 X-PA | 无 |
| pricing/ | T04 T14 | 无 |
| inventory/ | T05 T06 | 无 |
| restrictions/ | T08 T09 | 无 |
| overbooking/ | T07 | 无 |
| segmentation/ | T10 | 无 |
| channel/ | T11 T12 | 无 |
| group/ | T13 | 无 |
| market/ | T15 T16 | 无 |
| demand-signals/ | X-SIG | 无 |
| systems/ | X-RMS X-ORG | 无 |
| hotel-tech-stack/ | X-TECH | 无 |
| decision-framework/ | L9 / X-DIAG | 无 |
| advisor-playbooks/ | 各 playbook | 无 |
| diagnosis/ | X-DIAG | 无 |
| recommendations/ | L9 decision card 实例 | 仅模板 |
| cards/ | 通用卡 | 仅模板 |
| cases/ feedback/ | X-CASE | 无 |
| sources/ | T8/T9 | 无 |
| backlog/ | 未决 | 无 |

---

## 5. 资产类型约定（避免以后堆链接）

| 类型 | 回答的问题 | 何时必须有 |
| --- | --- | --- |
| card | 这是什么、假设、决策含义、边界 | 每个叶子至少一个 |
| metric | 怎么算、常见误读、和谁一起看 | 凡是会进报表的量 |
| decision card | 在什么信号下采取什么动作 | 凡是顾问会「下手」的点 |
| playbook | 一类场景的完整诊断→动作→观察 | Curriculum 四十四节清单中的场景 |

一篇研究若没改以上四类之一，记入 `research-log/` 并视为低价值。

---

## 6. 空白优先级（给下一次侦察）

按 Curriculum 18 步，不是按树的深度：

**
1. P0 X-OTB / X-PU / X-PA → metric + 「快还是慢」decision card

**
1. P0 T01 基础假设 card（短）+ L1 三个 STR 指标 metric（OCC/ADR/RevPAR）

**
1. P1 T03/T17 预测最小闭环；T04 涨多少 decision card

**
1. P1 T05/T09 库存与限制

**
1. P2 T10–T13、T15–T16

**
1. P3 T07、T08、T14、T18–T20、X-RMS

禁止：先把 X-RMS 厂商页抄满，却还不能解释 OTB 60% + DTA 14。

---

## 7. 未决总表

| 项 | 状态 | 检索词 |
| --- | --- | --- |
| 酒店版「五 Right」原始文献页 | Need Verification | Kimes "right room right guest right price" hotel |
| Yield % 是否还被 STR/集团官方使用 | Unknown | STR yield percentage definition hotel |
| Unconstrained demand 酒店补全标准 | Need Verification | hotel unconstrained demand unconstraining pickup |
| 中国 OTA 成本口径 | Unknown（按合同） | 不预写数字 |
| Occupancy on the Books 计算细则 | Need Verification | STR "Occupancy on the Books" methodology |

本图下次只更新「状态」和「侦察缺口」，不改编号。新主题加 X- 前缀，不插入 T01–T20 中间。

---

## 8. 状态追加（只追加，不改 T1–T12 表体编号）

T06 状态于 2026-08-23 00:17 改为骨架+理论卡 drafted；不改编号、不重写其余主题。中国 OO/OOO 报表命名仍 NV。不写 P37。
T06 于 2026-08-23 02:17 加 P37 playbook 指针（`advisor-playbooks/ooo-capacity.md`）；不改编号、不重写其余主题。中国 OO/OOO 报表命名仍 NV。
T05/T06/T08 于 2026-08-24 06:17 加 P44 钟点/day-use 指针；不改编号。
T05/T06 于 2026-08-24 08:17 加 day-use 库存理论卡（`theory/day-use-inventory.md`）。
T06/metrics 于 2026-08-24 16:17 加 Comp/HU 理论+指标+卡；永久 HU 仍 P37。
T06 于 2026-08-24 18:17 加 P47 playbook 指针。
T10/T06 于 2026-08-25 00:17 加 T-Gov；02:17 加 P48。
T06/T10/T13 于 2026-08-25 06:17 加 P49。
T07/T05/T13（理论·库存区）于 2026-08-26 08:17 加 **T-Guar**（`theory/guarantee-release.md`）。
T06 / X-ORG 于 2026-08-27 14:17 加 **P63** `advisor-playbooks/staff-capacity-constraint.md` drafted（人手吞吐；产能顶 ≠ 弱需求）。
T06 于 2026-08-27 16:17 加 **T-Staff** `theory/staff-capacity-vs-demand.md` drafted：人手/保洁产能顶是供给约束不是弱需求；砍 BAR 不增翻房产能；Dirty ≠ OOO。本店人效/班次 **仍 NV**。不编间/人中国常模。不改编号、不重写 P01–P63 正文（P63 仅头一行）。**不写 P64。**
T05 于 2026-08-27 18:17 加 **P64** `advisor-playbooks/nested-rate-class.md` drafted：嵌套低价档仍开着 / 关低≠涨BAR；nesting mode **仍 NV**。不改编号、不重写 P01–P63 正文（仅 last-line）。**不写 P65。**
T04/T09 于 2026-08-27 22:17 加 **P65** `advisor-playbooks/cancel-reinstate-old-rate.md` drafted：取消后按原价恢复不是必须；Ahead 拒旧低价。本店 Reinstate 是否带原价 **仍 NV**。不改编号。**不写 P66。**
T04 于 2026-08-28 00:17 加 **T-Reinstate** `theory/reinstate-vs-current-rate.md` drafted：历史取消价不是权利；Reinstate 是状态/库存动作不是定价权；回写 ≠ 必须认。本店 Reinstate 是否带原价 **仍 NV**。不改编号、不重写 P01–P65 正文（P65 仅头一行）。**不写 P66。**
T07/T05 于 2026-08-28 06:17 加 **P67** `advisor-playbooks/late-checkout-early-checkin.md` drafted：延退/早到是同日时段库存不是砍过夜 BAR；高峰不免费大批。本店延退费 **仍 NV**。不改编号。**不写 P68。**
T15 于 2026-08-28 10:17 加 **P68** `advisor-playbooks/new-competitor-opening.md` drafted：新店开业/intro 不是必须跟的市场价格；Ahead Hold BAR；Comp Set 重审 ≠ 改今夜 BAR。本店新店 SOP **仍 NV**。不改编号、不重写 P01–P67 正文（仅 last-line）。**不写 P69。**
X-ORG / T15 于 2026-08-29 02:17 加 P72 advisor-playbooks/sister-cluster-overflow.md drafted：姐妹店溢出/区域统价不是公开 BAR；Ahead Hold；拒按发送店低价接、拒统最低。本店 cluster 字段仍 NV。不改编号、不重写 P01–P71 正文（仅 last-line）。不写 P73。

X-ORG / T11 于 2026-08-29 06:17 加 P73 advisor-playbooks/flash-promo-vs-bar.md drafted：闪促/秒杀/限时抢不是永久公开 BAR；Ahead Hold；拒改尺；过期关码。本店闪促 SOP 仍 NV。不改编号、不重写 P01–P72 正文（仅 last-line）。不写 P74。
T11 / T04 于 2026-08-29 14:17 加 **P75** `advisor-playbooks/best-rate-guarantee-vs-bar.md` drafted：最低价保证/BRG/贵就赔索赔不是公开 BAR；Ahead Hold；拒改尺；like-for-like。本店贵就赔 SOP **仍 NV**。不改编号、不重写 P01–P74 正文（仅 last-line）。**不写 P76。**
T11 于 2026-08-30 14:17 加 **P81** `advisor-playbooks/wholesale-gds-ta-vs-bar.md` drafted：批发/旅行社/GDS 净价不是公开 BAR；Ahead Hold；拒改尺。P20=净贡献排序不是改尺；P27=高峰关漏出不是改尺。本店批发/GDS SOP **仍 NV**。不改编号、不重写 P01–P80 正文（仅 last-line）。**不写 P82。** 停车费仍 MEDIUM leftover。

T02 / T05 / T09 于 2026-08-31 06:17：OPERA hurdle 页已开（2026-08-27 20:17 recap 明确 **未开** → 本小时打开 Configuring Hurdle Rates + Yield Market Type + IDeaS LRV）。过程走 **P85** `advisor-playbooks/hurdle-bid-lrv-vs-bar.md`。hurdle/LRV ≠ 公开 BAR。不改主题表。本店 hurdle 字段 / hurdle% **仍 NV**。**不写 P86。**

T04/T08/T09 于 2026-09-03 22:17 追加 **S03-22 scout-only**：Booking Window / Min-Max Advanced Booking / Release Time / Start-End Sell Date = MEDIUM；LOS Pricing/Tiered = MEDIUM/LOW。§131 新开 OPERA/Booking.com/HSMAI 四页；邻 P19/P33/T-Restriction/P38/P42/P05 与 T08/P40/P41/P76/P21 已覆盖动作，故无新资产、不开 P88/P89。华住字段/默认窗口/折扣% 仍 NV。
T04/T08/T09/T05 于 2026-09-04 00:17 加 **T-Window** `theory/booking-window-vs-bar.md` drafted：booking-side 时窗（Min/Max Advanced Booking、Release Time、Booking Period / Start-End Sell Dates、late booking until）是可售/展示闸，不是公开 BAR；**下单日轴 ≠ 住期轴**（住期走 T-Restriction）；「有房却无 offer」先查窗口（Apaleo 官方排障顺序），不判需求弱、不砍尺。过程仍 **P33** + **P35**（+ P19/P42/P38/T-Restriction/P60/P05·P02）。§132 升核 OPERA Rate Codes + BDC BookingRule + HSMAI ALT；新开 Cloudbeds Advanced booking settings + Apaleo Rate Plans + Apaleo Service Availability；HSMAI/HotelKey/Clock 猜链 404 FAIL。本店窗口字段 / 华住 SOP / 默认提前期 / 本店 ALT **仍 NV**。不改编号、不重写 P01–P87 正文（仅文末一行）。**不写 P88。不写 P89。**

T05/T07/T13 于 2026-09-04 14:17 追加 **S04-14 scout-only**：Soft/Hard≈Deduct/Non-Deduct / House Closed / Channel Stop-Sell = MEDIUM（四件套未齐）；§134 新开 OPERA Blocks + Property Availability + GRC；邻 P53/T-Status/P52/P58/P55 + T-Restriction/P33/P35/P60 已覆盖动作，故无新资产、不开 P88/P89。C04-02 仍留给 case。华住 Soft·Hard 话术 / 状态码名 / wash% 仍 NV。
