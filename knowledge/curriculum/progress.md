# 初始化进度

> 更新：2026-08-20 14:45 CST
> 阶段：Phase 1 · Advisor-First（不 Operate）
> Task 1–12 正文均已落地；Wave2 正在深挖 OTB / Pickup / Pace

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T1 | Revenue Management Curriculum | `curriculum/curriculum.md` | **ready**（2026-08-20） |
| T2 | Revenue Knowledge Map | `curriculum/knowledge-map.md` | **ready**（2026-08-20） |
| T3 | Revenue Metric Tree | `metrics/metric-tree.md` + 9 张指标卡 | **done（2026-08-20）** |
| T4 | Revenue Object Model | `object-model/revenue-objects.md` | **ready**（2026-08-20） |
| T5 | Revenue Problem Tree | `diagnosis/problem-tree.md` | **done（2026-08-20）** |
| T6 | Advisor Decision Framework | `decision-framework/advisor-process.md` | **done（2026-08-20）** |
| T7 | Advisor Input Template | `decision-framework/input-template.md` | **done（2026-08-20）** |
| T8 | Source Map | `sources/source-map.md` | **done（2026-08-20）** |
| T9 | Book / Course List | `sources/books.md` `sources/courses.md` | **done（2026-08-20）** |
| T10 | RMS Landscape | `systems/rms-landscape.md` + 4 系统页 + tech-map | **done（2026-08-20）** |
| T11 | Advisor Playbook Backlog | `advisor-playbooks/BACKLOG.md` | **done（2026-08-20）** |
| T12 | Research Backlog | `backlog/research-backlog.md` | **done（2026-08-20）** |

## 本轮结论

- 顾问输出层 = Level 9；知识路径不跳 Level 2（OTB / Pickup / Pace）。
- Phase 1 最高能力 = Advise + Evaluate；**不做 Operate**。
- 学科树 T01–T20 + X 扩展已编号，空白可见。
- 16 对象可用来映射用户报表；建议必须写回 Stay Date × 杠杆。

## 第一阶段学习优先序

1 基础 → 2 Metrics → 3 OTB → 4 Pickup → 5 Booking Pace → 6 Forecast → 7 Pricing → 8 Inventory → 9 Restriction → 10 Comp/Market → 11 Channel/Segment → 12 Group → 13 Overbooking → 14 Optimization → 15 RMS → 16 RM 工作方法 → 17 Case → 18 Advisor Simulation

下一刀：Wave2 把 OTB / Pickup / Pace 推到 Diagnose + Advise，并写 Slow/Fast Pickup 剧本。T3/T5/T6 已可调用，不要重写骨架。

## T8 / T9 / T10 / T12 调用入口

- 去哪学：`sources/source-map.md` · `sources/books.md` · `sources/courses.md`
- RMS：`systems/rms-landscape.md` · `systems/ideas.md` · `systems/duetto.md` · `systems/amadeus.md` · `systems/marriott-one-yield.md`
- 技术栈：`hotel-tech-stack/tech-map.md`
- 还没查清：`backlog/research-backlog.md`（HIGH 对齐 OTB/Pickup/Pace/Forecast/中国集团）
- 核源日志：`research-log/2026-08-20-sources-rms.md`

早课：Cornell 单课页 + STR Glossary + Must Read 书目。  
晚课：一家 RMS 的 Known / Vendor Methodology / Unknown。  
打不开的官方页已写「未找到 / Need Verification」，不要补故事。

## T8 / T9 / T10 / T12 完成说明（2026-08-20 16:40 CST）

- T8：`sources/source-map.md`（教材/论文/Cornell/HSMAI/STR/RMS/集团/实践/博客；只收录能指到的入口）
- T9：Must Read 3 本（Talluri 2004、Phillips 2021、Hayes 2e 2021）；Cornell 5 门 + HSMAI CRME/CRMA
- T10：景观 + IDeaS/Duetto/Amadeus/Marriott 各一页 + tech-map
- T12：HIGH 12 / MEDIUM 10 / LOW 6
- 打开成功 26 URL；失败 13（timeout/404/空页）


## Wave2 · OTB / Pickup / Pace Diagnose+Advise（2026-08-20 16:50 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W2-1 | OTB/Pickup/Pace 理论 | `theory/otb-pickup-pace.md` | **drafted** |
| W2-2 | Hold 决策卡 | `recommendations/hold-price-curve-late.md` | **drafted** |
| W2-3 | Stimulate 决策卡 | `recommendations/stimulate-slow-pickup.md` | **drafted** |
| W2-4 | Protect 决策卡 | `recommendations/protect-inventory-fast-pickup.md` | **drafted** |
| W2-5 | Slow Pickup 剧本 | `advisor-playbooks/slow-pickup.md`（BACKLOG P08） | **drafted** |
| W2-6 | Fast Pickup 剧本 | `advisor-playbooks/fast-pickup.md`（BACKLOG P09） | **drafted** |
| W2-7 | Simulation · Behind/Slow | `cases/sim-2026-pace-behind-slow-pickup.md` | **drafted** |
| W2-8 | Simulation · Ahead/Fast 房型 | `cases/sim-2026-pace-ahead-fast-pickup-roomtype.md` | **drafted** |
| W2-9 | 研究笔记 | `research-log/2026-08-20-otb-pickup-pace.md` | **drafted** |

调用：用户说「还有 14 天、现在 60%、最近 3 天只进了 8 间」→ 理论卡 §9.3，不自动降价。  
P08 首选：先排除，BAR 不动，开围栏预付。  
P09 首选：关低价 + 涨正在穿的房型；价已最高则只限制不涨。

## Wave3 · Forecast / Pricing Diagnose+Advise（2026-08-20 14:50 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W3-1 | Forecast 框架 | `forecasting/forecast-framework.md` | **drafted** |
| W3-2 | Pricing 框架 | `pricing/pricing-framework.md` | **drafted** |
| W3-3 | 涨多少/降多少 | `pricing/how-much-to-move.md` | **drafted** |
| W3-4 | Decrease 决策卡 | `recommendations/decrease-bar-true-weak-demand.md` | **drafted** |
| W3-5 | 弱市不降价卡 | `recommendations/do-not-cut-price-market-also-weak.md` | **drafted** |
| W3-6 | 事件第一刀卡 | `recommendations/event-pricing-first-cut.md` | **drafted** |
| W3-7 | High Demand 剧本 | `advisor-playbooks/high-demand-day.md`（BACKLOG P01） | **drafted** |
| W3-8 | Low Demand 剧本 | `advisor-playbooks/low-demand-day.md`（BACKLOG P02） | **drafted** |
| W3-9 | Simulation · 弱市不降 | `cases/sim-2026-weak-market-do-not-cut.md` | **drafted** |
| W3-10 | 研究笔记 | `research-log/2026-08-20-forecast-pricing.md` | **drafted** |

调用：用户说「入住率低要不要降」→ 问题树 §1 + P02，四选一：降 / 围栏 / 只修渠道 / 不动。  
涨多少：+5% / +8–15% / 收到最低竞对 / 不一次跳最高；价已最高只关不涨。  
弱市不降：市场也弱或曲线后置或渠道关。仿真拒绝 699。

## Wave4 · Inventory / Restriction / Holiday-Event-Sellout（2026-08-20 14:50 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W4-1 | Inventory 控制 | `inventory/inventory-control.md` | **drafted** |
| W4-2 | Restriction 框架 | `restrictions/restriction-framework.md` | **drafted** |
| W4-3 | MinLOS 决策卡 | `recommendations/minlos-peak-protect.md` | **drafted** |
| W4-4 | 压缩关低价卡 | `recommendations/close-low-rate-compression.md` | **drafted** |
| W4-5 | 假低 OCC 开库存卡 | `recommendations/open-inventory-false-low-occ.md` | **drafted** |
| W4-6 | Holiday 剧本 | `advisor-playbooks/holiday.md`（BACKLOG P06） | **drafted** |
| W4-7 | Concert / Event 剧本 | `advisor-playbooks/concert-event.md`（BACKLOG P07） | **drafted** |
| W4-8 | Sellout Risk 剧本 | `advisor-playbooks/sellout-risk.md`（BACKLOG P03） | **drafted** |
| W4-9 | Simulation · 演唱会 Peak+肩日 | `cases/sim-2026-concert-peak-shoulder-minlos.md` | **drafted** |
| W4-10 | 研究笔记 | `research-log/2026-08-20-inventory-restriction-event.md` | **drafted** |

调用：用户说「国庆 / 演唱会要不要限单晚、要不要提前关低价」→ P06/P07 + MinLOS 卡 + 关低价卡。  
MinLOS：只盖已证实 Peak，首选 =2，肩日 Open；缺肩日今天不设。  
Sellout 先后：先关低价/收限额，再涨；价已最高只关不涨。  
仿真：10/03 MinLOS=2；10/02·10/04 开肩日；低价今天关 <999；Peak 999–1049 首选 1029。



## Wave5 · Group / Overbooking / Channel / 房型差 / Early Sellout（2026-08-20 14:55 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W5-1 | Group Displacement | `group/group-displacement.md` | **drafted** |
| W5-2 | Overbooking 框架 | `overbooking/overbooking-framework.md` | **drafted** |
| W5-3 | Channel 净贡献 | `channel/net-contribution.md` | **drafted** |
| W5-4 | 房型差 | `pricing/room-type-differential.md` | **drafted** |
| W5-5 | 接/拒/还价团卡 | `recommendations/accept-reject-group.md` | **drafted** |
| W5-6 | 超售与否卡 | `recommendations/overbook-or-not.md` | **drafted** |
| W5-7 | 修房型倒挂卡 | `recommendations/fix-room-type-inversion.md` | **drafted** |
| W5-8 | Group Evaluation 剧本 | `advisor-playbooks/group-evaluation.md`（BACKLOG P10） | **drafted** |
| W5-9 | Early Sellout 剧本 | `advisor-playbooks/early-sellout.md`（BACKLOG P04） | **drafted** |
| W5-10 | Simulation · 50×500 vs 800 | `cases/sim-2026-group-50x500-vs-transient-800.md` | **drafted** |
| W5-11 | 研究笔记 | `research-log/2026-08-20-group-overbooking-channel.md` | **drafted** |

调用：用户丢来团询 → P10 + 置换草表，输出 Accept / Reject / Counter + displacing 哪些日期 + 3 个数。  
仿真：200 间店，团 50×500×两晚 vs BAR 800 → **Counter**（周五 50@500；周六最多 15@500 或周六 680–760 首选 720）。  
超售：方向+风险+观察，无取消史不给精确间夜；2026 平台履约额度 Unknown。  
渠道：Gross→Net；中国 OTA 佣金 Need Verification，不编 %。


## Wave6 · Comp / 需求信号 / RM 日常（2026-08-20 14:55 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W6-1 | Comp Set | `market/comp-set.md` | **drafted** |
| W6-2 | 需求信号框架 | `demand-signals/signal-framework.md` | **drafted** |
| W6-3 | RM 日常方法 | `theory/rm-daily-routine.md` | **drafted** |
| W6-4 | 不跟砸价卡 | `recommendations/ignore-comp-undercut.md` | **drafted** |
| W6-5 | Citywide 卡 | `recommendations/citywide-compression.md` | **drafted** |
| W6-6 | Last Minute Unsold | `advisor-playbooks/last-minute-unsold.md`（P05） | **drafted** |
| W6-7 | Weekend Compression | `advisor-playbooks/weekend-compression.md`（P11） | **drafted** |
| W6-8 | Weak Weekday | `advisor-playbooks/weak-weekday.md`（P12） | **drafted** |
| W6-9 | Competitor Sellout | `advisor-playbooks/competitor-sellout.md`（P15） | **drafted** |
| W6-10 | Price War | `advisor-playbooks/price-war.md`（P16） | **drafted** |
| W6-11 | Forecast Miss | `advisor-playbooks/forecast-miss.md`（P17） | **drafted** |
| W6-12 | Simulation · 竞对降本店 Pace 不落后 | `cases/sim-2026-comp-cut-pace-not-behind.md` | **drafted** |
| W6-13 | 研究笔记 | `research-log/2026-08-20-comp-market-daily.md` | **drafted** |

调用：用户说「竞对比我低 80 元要不要跟」→ Pace/Pickup/事件/citywide → 跟 / 不跟 / 只开围栏。  
仿真：220 间、周六 DTA10、OTB 58% vs STLY 55%、BAR 899、竞对集体到 819 → **不跟**。  
「下周有演唱会」→ Lead Time / 场馆距离 / 是否官宣 / 竞对是否已关，再事件第一刀。  
MPI 公式不重写；中国 CoStar 中文页用同名，不是政府指数。航班/搜索官方门槛 NV。


## Wave7 · LOS / OTA 促销 / 优化顾问含义 / 会展肩日（2026-08-20 15:30 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W7-1 | LOS 优化 | `pricing/los-optimization.md` | **drafted** |
| W7-2 | OTA 促销顾问框架 | `channel/ota-promotion.md` | **drafted** |
| W7-3 | Bid price / EMSR 顾问含义 | `theory/optimization-advise.md` | **drafted** |
| W7-4 | 中国 OTA 促销剧本 | `advisor-playbooks/china-ota-promotion.md`（BACKLOG P18） | **drafted** |
| W7-5 | 节假日连住剧本 | `advisor-playbooks/holiday-minlos.md`（BACKLOG P21） | **drafted** |
| W7-6 | 会展肩日剧本 | `advisor-playbooks/exhibition-shoulder.md`（BACKLOG P22） | **drafted** |
| W7-7 | 促销报/不报卡 | `recommendations/join-or-skip-promo.md` | **drafted** |
| W7-8 | 肩日开着卡 | `recommendations/shoulder-open-for-peak.md` | **drafted** |
| W7-9 | Simulation · 会展 Peak+肩日 | `cases/sim-2026-exhibition-peak-shoulder.md` | **drafted** |
| W7-10 | 研究笔记 | `research-log/2026-08-20-ota-los-opt.md` | **drafted** |

调用：用户说「美团/携程这个促销要不要报」→ 谁出资、净价、Pace Ahead?、砸不砸高峰 → 报 / 不报 / 只报肩日。  
调用：用户说「会展周三高峰、周二周四怎么办」→ 肩日 Open；Peak MinLOS=2；高峰第一刀 + 先关低价。  
仿真：220 间、9/16 Peak 71% Ahead+Fast → **999–1049 首选 1029**；9/15·9/17 Open 首选 729/719；店出 15% 大促 **不报**；40×500 **Counter**。  
2026 中国 OTA 活动名/扣点 **NV**，不编。P13/P14/P19/P20 仍 not_started（非本波 HIGH）。

## Scout · P13/P14/P19/P20/P29/P34（2026-08-20 15:30 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。侦察全文：`scout/2026-08-20.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S-0 | 侦察日志 | `scout/2026-08-20.md` | **drafted** |
| S-1 | 预付不可退剧本 | `advisor-playbooks/prepaid-nonrefundable.md`（P19） | **drafted** |
| S-2 | 渠道净价剧本 | `advisor-playbooks/channel-net-rate.md`（P20） | **drafted** |
| S-3 | 房型压缩剧本 | `advisor-playbooks/room-type-compression.md`（P13） | **drafted** |
| S-4 | 房价倒挂剧本 | `advisor-playbooks/room-type-differential.md`（P34） | **drafted** |
| S-5 | 高取消剧本 | `advisor-playbooks/high-cancellation.md`（P14） | **drafted** |
| S-6 | 黄金周/春节剧本 | `advisor-playbooks/golden-week-spring-festival.md`（P29） | **drafted** |
| S-7 | 开/关预付卡 | `recommendations/open-close-prepaid-nr.md` | **drafted** |
| S-8 | 按净排序渠道卡 | `recommendations/rank-channel-by-net.md` | **drafted** |
| S-9 | 保护压缩房型卡 | `recommendations/protect-compressing-room-type.md` | **drafted** |
| S-10 | OTB 当软需求卡 | `recommendations/treat-otb-as-soft.md` | **drafted** |

调用：预付打几折 → P19，高峰关、弱日 −3–5%，不报行业 9 折。  
调用：哪个渠道 ADR 高要保 → P20，用净；无费率只比结构。  
调用：标准间快没了套房空 → P13 三选一；倒挂 → P34。  
调用：订了又取消还要涨 → P14，OTB 当 Soft。  
调用：春节怎么定价 → P29，农历 STLY；春运 2/2–3/13 不是 9 天同一 MinLOS。  
刻意不补：P24 Walk、P32 Citywide 完整剧本、P33 限制过度。佣金% / 活动名 / 春运人次门槛 NV。

## Scout · 17:00 · Unconstrained/Constrained + P33（2026-08-20 17:00 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。侦察全文：`scout/2026-08-20-1700.md`。不覆盖 `scout/2026-08-20.md`。未重写 P19/P20/P13/P34/P14/P29。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S17-0 | 17:00 侦察日志 | `scout/2026-08-20-1700.md` | **drafted** |
| S17-1 | Unconstrained vs Constrained | `forecasting/unconstrained-vs-constrained.md` | **drafted** |
| S17-2 | Restriction 过度剧本 | `advisor-playbooks/restriction-overuse.md`（P33） | **drafted** |
| S17-3 | 限制开着先别降价卡 | `recommendations/do-not-cut-when-restricted.md` | **drafted** |
| S17-4 | Forecast 框架交叉引用 | `forecasting/forecast-framework.md` §11 | **appended** |
| S17-5 | 问题树交叉引用 | `diagnosis/problem-tree.md` §26 | **appended** |
| S17-6 | 研究笔记 | `research-log/2026-08-20-1700-scout.md` | **drafted** |

调用：用户说「MinLOS 开着但入住率掉了，要不要降价」→ **P33**：先查短住/到达是否被挡、肩日是否被 Peak MinLOS 误伤、渠道是否同步错 → **先松限制，不要先降 BAR**。  
机制：Duetto Constrained 第一步先扣 CTA/MinLOS/MaxLOS 挡掉的需求（Vendor Methodology，不是 S 公式）。  
三句：unconstrained−constrained 缺口 = yield opportunity；限制先扣需求；TBB 不为负。  
兼容：MinLOS=2 只盖已证实 Peak；肩日 Open；围栏 −3–5%；不一夜 −15%；价已最高只关不涨。  
刻意不补：IDeaS 对等公式；国庆营销博客；P24/P32 完整剧本；holiday 日历。


## 晚课 · 核源 + IDeaS + 复盘（2026-08-20 20:00 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。全文：`research-log/2026-08-20-2000-evening.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E20-0 | 晚课研究笔记 | `research-log/2026-08-20-2000-evening.md` | **drafted** |
| E20-1 | Source Map 追加 | `sources/source-map.md` | **appended** |
| E20-2 | IDeaS 卡片 | `systems/ideas.md` | **updated**（About 打开；决策链 Known/Unknown） |
| E20-3 | Unconstrained 交叉 | `forecasting/unconstrained-vs-constrained.md` | **appended**（不重写步骤） |
| E20-4 | P33 修订表 | `advisor-playbooks/restriction-overuse.md` | **appended**（不重写正文） |
| E20-5 | Backlog 状态 | `backlog/research-backlog.md` | **updated**（H1–H11 不假装没写） |

新打开：IDeaS About；Buyer’s Guide 复核；华住 docs + CRS API；H World 2025 年报（中央收入管理系统）；锦江 2025 年报（仅 WeHotel，无 RMS 字样）；Kimes 2017 vtechworks PDF。  
仍 NV：eCommons handle、Kimes 2010 PDF、Marriott One Yield 产品页、Amadeus 独立 RMS、IDeaS 公式。  
复盘：**无真矛盾。** Peak 留 MinLOS；肩日误伤走 P33；缺口来源决定涨价还是松限制；TBB=0 不禁 Fast Pickup。  
IDeaS 营销数字 **D**。禁止 Duetto 公式对抄。


## 早课 · Segment Mix / Direct vs OTA（2026-08-21 08:00 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未写 P24。未重写 P33。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| AM21-1 | Segment Mix 理论卡 | `segmentation/segment-mix.md` | **drafted** |
| AM21-2 | Direct vs OTA Mix 剧本 | `advisor-playbooks/direct-vs-ota-mix.md`（BACKLOG P25） | **drafted** |
| AM21-3 | 按净拧 mix 卡 | `recommendations/steer-mix-by-net.md` | **drafted** |
| AM21-4 | Simulation · OTA 40%→55% Gross↑Net↓ | `cases/sim-2026-ota-mix-40-to-55-net.md` | **drafted** |
| AM21-5 | 研究笔记 | `research-log/2026-08-21-0800-segment-mix.md` | **drafted** |
| AM21-6 | 问题树交叉 | `diagnosis/problem-tree.md` §27 | **appended** |

调用：用户说「mix 变了、入住还行是好是坏」→ `segment-mix.md`：拆 STR 三分 vs 顾问八分；OCC 不够用。  
调用：用户说「OTA 占比升、要全渠道跟最低 / 关掉 OTA」→ **P25**：先排除直销没开/倒挂/不同步、弱日净>0 增量 → 高峰关深折不关直销。  
仿真：200 间、9/19 周六、OTA 40%→55%、Gross 784→818、Net 721→689（仿真用户合同 15%+店出 10%，非官方）→ **不跟 799、不关光 OTA**；关 <899 深折；BAR 919–939 首选 **929**。  
中国 OTA 佣金% / 活动名 **NV**，不编。P24 Walk、P32 Citywide 完整剧本仍不写。P33 不重写。

## Scout · 11:00 · Citywide / Mega-event 虚火（2026-08-21 11:00 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未写 P24。未重写 P01–P22、P25、P29、P33、P34 正文。侦察全文：`scout/2026-08-21-1100.md`。不覆盖 `scout/2026-08-20.md` / `scout/2026-08-20-1700.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S11-0 | 11:00 侦察日志 | `scout/2026-08-21-1100.md` | **drafted** |
| S11-1 | Citywide Compression 剧本 | `advisor-playbooks/citywide-compression.md`（BACKLOG P32） | **drafted** |
| S11-2 | Rate Recovery Trap 卡 | `recommendations/dont-cut-from-hype-rate.md` | **drafted** |
| S11-3 | 城市压缩卡交叉 | `recommendations/citywide-compression.md` §6 | **appended**（不改 §1–5 第一刀） |
| S11-4 | P07 / P22 / P17 交叉指针 | 各剧本头 + 修订表 | **appended**（不重写） |
| S11-5 | 问题树交叉 | `diagnosis/problem-tree.md` §28 | **appended** |
| S11-6 | 研究笔记 | `research-log/2026-08-21-1100-scout.md` | **drafted** |

调用：用户说「全市演唱会/展会/大赛，要不要整周涨、卖不动再从 1999 砍到 1299」→ **P32**：先问 Pace 是否坐实（无事件 STLY vs 事件 overlay 拆开）、肩日有没有被带动 → 比赛/开展夜可走事件第一刀；肩日不要自动跟 Peak；Pace 落后于叙事 → P17 + 弱市不降价；**禁止从幻想价砍到仍贵**，对照无事件基线。

三形态：真全市压缩 / 单店事件（P07/P22）/ mega-event 虚火。  
案例：世界杯主办城市预售窗 ADR 高、OCC 几乎不动、肩日 OCC 掉 = **C/B**（媒体转述 STR/CoStar/AHLA，非 STAR 原表），不升 S，不改 +8–15%。InnBrief 80%/$800/$1300 = **C/D**，不当事实。  
兼容：+8–15%、不跳最高、价已最高只关不涨、MinLOS=2 只盖已证实 Peak、肩日 Open、不一夜 −15%。  
刻意不补：P24 Walk；双节 5–7 折营销句；世界杯数字当默认幅度。

## Scout · 14:17 · Overbooking Walk 今晚程序（2026-08-21 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P22、P25、P29、P32、P33、P34 正文。侦察全文：`scout/2026-08-21-1417.md`。不覆盖 `scout/2026-08-21-1100.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S14-0 | 14:17 侦察日志 | `scout/2026-08-21-1417.md` | **drafted** |
| S14-1 | Overbooking Walk 剧本 | `advisor-playbooks/overbooking-walk.md`（BACKLOG P24） | **drafted** |
| S14-2 | 先赶谁 / 停超卡 | `recommendations/who-to-walk-first.md` | **drafted** |
| S14-3 | 超售框架交叉 | `overbooking/overbooking-framework.md` §10 | **appended** |
| S14-4 | 超售与否卡交叉 | `recommendations/overbook-or-not.md` §7 | **appended** |
| S14-5 | 问题树交叉 | `diagnosis/problem-tree.md` §29 | **appended** |
| S14-6 | 研究笔记 | `research-log/2026-08-21-1417-scout.md` | **drafted** |

调用：用户说「今晚可能赶客怎么办 / 先赶谁 / 还要不要继续超售」→ **P24**：先停接当晚到达；必须赶则先低价非会员最后预订，后赶会员/预付/指定套房；已经或即将赶客则停往前超。无取消/No-show 史 **不给精确间夜**。不编 Walk 成本、不编补偿金额。

三句：停接优先于定价；客类成本不均所以排序；无 3 个数仍不给「超售 7 间」。  
兼容：价已最低先关低价不靠超售补 ADR；高取消 OTB=Soft；不一夜 −15%；价已最高只关不涨。  
刻意不补：P23/P26–P28/P30/P31/P35；Walk 成本数字；Marriott USD 网格当独立店 SOP；P28 台风剧本（搜索词已留）。


## Wave · 16:17 · 弹性方向诊断 + TRevPAR/GOPPAR（2026-08-21 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P25、P29、P32–P34、P24 正文。未写 P23/P26–P28/P30/P31/P35。未编点弹性 η。全文：`research-log/2026-08-21-1617-elasticity-metrics.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W16-1 | 价格弹性顾问诊断 | `pricing/price-elasticity-advise.md` | **drafted** |
| W16-2 | 停砍卡（OCC↑ RevPAR↓） | `recommendations/stop-cut-if-revpar-falls.md` | **drafted** |
| W16-3 | TRevPAR 指标卡 | `metrics/trevpar.md` | **drafted** |
| W16-4 | GOPPAR 指标卡 | `metrics/goppar.md` | **drafted** |
| W16-5 | 研究笔记 | `research-log/2026-08-21-1617-elasticity-metrics.md` | **drafted** |
| W16-6 | 指标树索引指针 | `metrics/metric-tree.md` §11 | **appended** |
| W16-7 | 问题树交叉 | `diagnosis/problem-tree.md` §30 | **appended** |
| W16-8 | 幅度卡交叉 | `pricing/how-much-to-move.md` §10 | **appended**（不改幅度数字） |
| W16-9 | 优化卡交叉 | `theory/optimization-advise.md` §8 | **appended** |

调用：用户说「降了 OCC 上来但 RevPAR 掉了怎么办」→ 弹性卡模式 B + **stop-cut** 卡：对该 Stay Date 停再砍 BAR；先排除 P33/渠道关。  
调用：用户问 TRevPAR/GOPPAR → 独立指标卡；≠ RevPAR；1.5–2.0× 保持 CoStar A 观察。  
三句：OCC↑≠成功看 RevPAR；弹性卡判上一刀、幅度卡判下一刀；不报默认 η。  
兼容：+5–8% / +8–15% / 围栏 −3–5% / BAR −5–10% / 禁一夜 −15% / 价已最高只关不涨。  
刻意不补：点 η 测量公式；航空弹性表；P23/P26–P28/P30/P31/P35。


## 案例与剧本 · 18:17 · P23 Member vs Public BAR（2026-08-21 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P22、P24、P25、P29、P32–P34 正文。未写 P26–P28/P30/P31/P35。未改编幅数字。全文：`research-log/2026-08-21-1817-member-bar.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C18-1 | Member vs Public BAR 剧本 | `advisor-playbooks/member-vs-public.md`（BACKLOG P23） | **drafted** |
| C18-2 | 会员跟/冻/部分跟卡 | `recommendations/follow-or-hold-member-rate.md` | **drafted** |
| C18-3 | Simulation · BAR 涨会员滞后 | `cases/sim-2026-member-rate-vs-bar-raise.md` | **drafted** |
| C18-4 | 研究笔记 | `research-log/2026-08-21-1817-member-bar.md` | **drafted** |
| C18-5 | 问题树交叉 | `diagnosis/problem-tree.md` §31 | **appended** |

调用：用户说「BAR 要涨，会员跟不跟 / 会员已经比 OTA 高或低」→ **P23**：先问品牌会籍规则；没有规则当酒店自有围栏，默认同向跟、差价保持 −3–5%；不当成必须便宜一成。会员 > 公开 OTA BAR 层 → 先修倒挂，不涨会员。高峰会员打到深折下 → 收口差价。

三句：同向跟、先问规则；倒挂先修不同时再涨会员；高峰过深先收口。  
仿真：200 间 **Simulation**（非真店）、9/12 周六 Ahead+Fast、BAR 899→**949–969 首选 949**、会员 849 滞后 → **Follow 902–921 首选 909**；拒绝 Freeze 849 与「必须 10%」→809；关 OTA 深折 799。  
兼容：+5–8% / +8–15%；价已最高只关不涨；高峰关深折不关直销；预付高峰关、弱日 −3–5%；出资未知或砸高峰 → 不报。  
刻意不补：P26–P28/P30/P31/P35；万豪 2%/5% 当独立店义务；希尔顿大中华排除句（页未打开 = NV）；中国 OTA 佣金%。


## 晚课 · 来源与复盘（2026-08-21 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P25、P29、P32–P34 正文。未写 P26–P28/P30/P31/P35。全文：`research-log/2026-08-21-2017-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E21-0 | 来源与复盘笔记 | `research-log/2026-08-21-2017-sources-recap.md` | **drafted** |
| E21-1 | Source Map 追加 | `sources/source-map.md` | **appended** |
| E21-2 | RMS 景观 | `systems/rms-landscape.md` | **updated**（首旅年报名；RMAS；Amadeus 首页） |
| E21-3 | Marriott 卡片 | `systems/marriott-one-yield.md` | **updated**（RMAS 打开；产品页仍 NV） |
| E21-4 | Amadeus 卡片 | `systems/amadeus.md` | **updated**（独立 RMS 仍 NV） |
| E21-5 | IDeaS 卡片 | `systems/ideas.md` | **appended**（公式仍 NV，不重写决策链） |
| E21-6 | Backlog 状态 | `backlog/research-backlog.md` | **updated**（H7/H8/H9/H6/M2；P23 drafted；P28 未写） |

新打开：首旅 2025 年报（CRS / 调价模型 / AI 数字店长）；Marriott RMAS Plus Services（One Yield 名称）；HSMAI *The New RMS* 2021 PDF（P24 已用，补进 source-map）；Kimes 2010 手稿 PDF（eCommons bitstream）。  
仍 NV：OYE 产品页、careers 404、Amadeus 独立优化器、IDeaS 公式、eCommons handle 429、CHR 10(14) 排印本 HTML。  
复盘：**无真矛盾。** P02 第一刀 → stop-cut 事后闸；P23/P19/档 E 同尺不同产品禁止叠砍；P18/P25/P23 高峰关深折不关直销；P24 后赶会员 vs P23 护价是不同杠杆；万豪 2–5% 品牌专属；GOPPAR 1.5–2.0× ≠ 当晚 BAR。

调用：首旅店问 CRS / AI 数字店长建议价 vs 实挂价。Marriott 店可点名 One Yield（RMAS），不要假装会操作系统。

## Scout · 22:17 · Weather Disruption（2026-08-21 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P25、P23、P24、P29、P32–P34 正文。未写 P26/P27/P30/P31/P35。侦察全文：`scout/2026-08-21-2217.md`。不覆盖 `scout/2026-08-21-1417.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S22-0 | 22:17 侦察日志 | `scout/2026-08-21-2217.md` | **drafted** |
| S22-1 | Weather Disruption 剧本 | `advisor-playbooks/weather-disruption.md`（BACKLOG P28） | **drafted** |
| S22-2 | 取消潮停涨卡 | `recommendations/dont-raise-into-cancel-wave.md` | **drafted** |
| S22-3 | Simulation · Soft OTB 不涨 | `cases/sim-2026-typhoon-soft-otb.md` | **drafted** |
| S22-4 | 研究笔记 | `research-log/2026-08-21-2217-scout.md` | **drafted** |
| S22-5 | 问题树交叉 | `diagnosis/problem-tree.md` §32 | **appended** |
| S22-6 | P14 / P17 / P24 交叉指针 | 各剧本文末 | **appended**（不重写） |

调用：用户说「台风/暴雨/航班大面积取消，OTB 还很高要不要涨 / 取消潮里能不能降 / 要不要超售」→ **P28**：先问消灭 / 平移 / 恐慌取消 / 滞留。OTB 当 Soft，禁止涨进取消潮。交通停了不是价高唯一解释。取消史刚坏停超。不要一夜 −15% 填坑。天气夜评估 Open MinLOS。事后 Pace 对照无事件基线。

三句：天气取消潮里 OTB 高 ≠ 该涨；交通停了是需求消灭/平移；取消史刚坏就停超、不要砸价填坑。  
仿真：180 间 **Simulation**（非真店）、8/22 周六 DTA1、OTB 82% Soft、24h 净 −14、BAR **Hold 969–999 首选 999**；拒绝 1199 / 799 / 超 8 间。不点名假台风。  
兼容：围栏 −3–5% / BAR −5–10% / 禁一夜 −15% / 无取消史不给精确超售间夜 / 价已最高只关不涨 / Diagnose before action。  
刻意不补：P26/P27/P30/P31/P35；取消率%；台风人次；Walk 成本；Cornell/HSMAI 台风专页（仍 NV）。


## Wave · 00:17 · T18 Total Revenue Management（2026-08-22 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P29、P32–P34 正文。**未写 P30 婚宴。** 未编 F&B 毛利 / 餐标 / 变动成本 / 佣金% / Walk 成本 / 点弹性。全文：`research-log/2026-08-22-0017-total-rm.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W00-1 | T18 理论卡 | `theory/total-revenue-management.md` | **drafted** |
| W00-2 | 低房价高餐饮决策卡 | `recommendations/accept-low-room-for-fnb.md` | **drafted** |
| W00-3 | TrevPOR 指标卡 | `metrics/trevpor.md` | **drafted** |
| W00-4 | 研究笔记 | `research-log/2026-08-22-0017-total-rm.md` | **drafted** |
| W00-5 | knowledge-map T18 状态 | `curriculum/knowledge-map.md` | **updated**（不重写整图） |
| W00-6 | 指标树指针 | `metrics/metric-tree.md` §12 | **appended** |
| W00-7 | 置换卡交叉 | `group/group-displacement.md` §11 | **appended** |
| W00-8 | 接团卡指针 | `recommendations/accept-reject-group.md` §7 | **appended** |
| W00-9 | 问题树交叉 | `diagnosis/problem-tree.md` §33 | **appended** |

调用：用户说「这个团 500 房费但餐标很高 / 要不要为了餐饮把房卖掉」→ 先 P10 按日置换；无餐饮**贡献**数字不得 Accept；高峰能卖满散客 → Counter 客房或缩房量。TRevPAR/TrevPOR/GOPPAR 看结构，不改今晚 BAR。

三句：没餐饮贡献数字不能用「餐很高」推翻客房置换；高峰能卖满即使有餐也 Counter 客房或缩房量；TRevPAR/GOPPAR 不替代当晚 BAR。

兼容：团询先 displacement、优先 Counter；Peak 不 dump 未知 F&B；GOPPAR ≠ 今晚 BAR；无数字不装懂；P28 OTB Soft 不当可 dump。

刻意不补：P30 婚宴；P26/P27/P31/P35；变动成本数字；餐毛利；Kimes 2017 正文重摘。


## Wave · 02:17 · P30 婚宴 / 宴会团队（2026-08-22 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P29、P23–P25、P32–P34 正文。**未写 P26/P27/P31/P35。** 未编 F&B 毛利 / 餐标 / 变动成本 / 佣金% / Walk 成本 / 点弹性。全文：`research-log/2026-08-22-0217-wedding.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| W02-1 | 婚宴/宴会团队剧本 | `advisor-playbooks/wedding-banquet-group.md`（BACKLOG P30） | **drafted** |
| W02-2 | 高峰周六占房 Counter 卡 | `recommendations/counter-wedding-room-block.md` | **drafted** |
| W02-3 | Simulation · 40×500 周六婚宴 | `cases/sim-2026-wedding-40x500-saturday.md` | **drafted** |
| W02-4 | 研究笔记 | `research-log/2026-08-22-0217-wedding.md` | **drafted** |
| W02-5 | 问题树交叉 | `diagnosis/problem-tree.md` §34 | **appended** |
| W02-6 | P10 / T18 / 低房价高餐饮卡指针 | 各文末 | **appended**（不重写） |
| W02-7 | knowledge-map T18 | `curriculum/knowledge-map.md` | **updated**（playbook 指针） |

调用：用户说「周六婚宴要 40 间、房费只要 500，餐标很高，接不接？要不要把散客关了」→ **P30**：先拆宴会 vs 占房。无餐饮**贡献**数字不得 Accept 低价房块。高峰能卖满散客 → Counter 提房价或缩宾客间，宴会可留，**不关散客**。周五/周日分开算。

三句：婚宴先拆宴会 vs 占房、没贡献不接低价房块；周六高峰 40×500 对能卖满散客默认 Counter；肩日不要整周末同一把刀。

仿真：200 间 **Simulation**（非真店）、9/12 周六 40×500 vs BAR **929**（899–999 带）、贡献 **80,000 标 Simulation** → **Counter**（周六最多 **12** 间@500 含 must-keep 5，或 **790–860 首选 799**；周五 8 / 周日 4 @500 Accept；拒绝关散客）。

兼容：团询先 displacement、优先 Counter；没贡献不 Accept；高峰能卖满 → Counter 客房；TRevPAR ≠ 今晚 BAR；+5–8% / +8–15%；价已最高只关不涨；MinLOS=2 只盖已证实 Peak（婚夜可以是 Peak，不自动 Fri/Sun）。

刻意不补：P26/P27/P31/P35；餐毛利；变动成本数字；Kimes 正文摘录。


## 晚课 · 来源与复盘（2026-08-22 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P32–P34 正文。**未写 P26/P27/P31/P35。** 未改编幅/仿真数字。全文：`research-log/2026-08-22-0417-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E22-0 | 来源与复盘笔记 | `research-log/2026-08-22-0417-sources-recap.md` | **drafted** |
| E22-1 | Source Map 追加 | `sources/source-map.md` | **appended** |
| E22-2 | RMS 景观 | `systems/rms-landscape.md` | **updated**（iHotelier CRS 产品页；10-K 未点名 OYE） |
| E22-3 | Marriott 卡片 | `systems/marriott-one-yield.md` | **updated**（2025 10-K 打开无产品名；careers 仍 404；产品页仍 NV） |
| E22-4 | Amadeus 卡片 | `systems/amadeus.md` | **updated**（iHotelier CRS 打开 ≠ 优化器；独立 RMS 仍 NV） |
| E22-5 | IDeaS 卡片 | `systems/ideas.md` | **appended**（dirty-data 打开无公式；两博文正文空） |
| E22-6 | Backlog 状态 | `backlog/research-backlog.md` | **updated**（H6/H7/H9；P30 drafted；P26/P27/P31/P35 仍空） |
| E22-7 | T18 复盘指针 | `theory/total-revenue-management.md` §13 | **appended**（不重写正文） |

新打开：STR P&L（厅租/AV = Other F&B）；HSMAI TRM Hub + Events Revenue Optimisation 三门课名 + RevPAS 词条；Amadeus iHotelier CRS 产品页；IDeaS dirty-data 博文；Marriott 2025 10-K（proprietary RMS，无 OYE 名）。  
仍 NV：OYE 产品页、careers 404、Amadeus 独立优化器、IDeaS 逐步估法、science-behind-g3 / 101 正文空、Cornell 2017 timeout、Kimes 2001 PDF timeout。  
复盘：**无真矛盾。无 needs_revision。** 无贡献不 Accept；高峰能卖满仍 Counter 客房；肩日可接；12@500 / 799 与 P10 的 15@500 / 720 是不同 ET·BAR 的同一置换式；不关散客与 P03/P09 护库存兼容；TRevPAR ≠ 今晚 BAR；P28 Soft OTB ≠ 婚宴真高峰 OTB。

调用：宴会套餐贡献只进一次。用户说「Amadeus 收益」先问 iHotelier CRS vs RS360 vs 外面 RMS。Marriott 仍不要假装会开 One Yield。

## Scout · 06:17 · P26 Corporate Rate Leakage（2026-08-22 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P23–P25、P28、P32–P34 正文（P23/P25 仅文末交叉指针）。**未写 P27/P31/P35。** 未编协议折扣% / 资格 SOP / 佣金% / Walk / 点弹性。全文：`research-log/2026-08-22-0617-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S06-1 | 侦察记录 | `scout/2026-08-22-0617.md` | **drafted** |
| S06-2 | 协议价漏出剧本 | `advisor-playbooks/corporate-leakage.md`（BACKLOG P26） | **drafted** |
| S06-3 | 高峰 blackout / 下 OTA 卡 | `recommendations/blackout-or-close-leaking-corp.md` | **drafted** |
| S06-4 | Simulation · 周六 480 vs 899 | `cases/sim-2026-corp-rate-weekend-leak.md` | **drafted** |
| S06-5 | 研究笔记 | `research-log/2026-08-22-0617-scout.md` | **drafted** |
| S06-6 | 问题树交叉 | `diagnosis/problem-tree.md` §35 | **appended** |
| S06-7 | P23 / P25 指针 | 各文末 | **appended**（不重写） |
| S06-8 | segment-mix P26 指针 | `segmentation/segment-mix.md` | **updated**（不重写八分） |

调用：用户说「协议客人在周六用 480 订了散客高峰、协议价跑到 OTA、要不要关协议」→ **P26**：先分合同范围还是漏出。高峰周六默认 blackout 或从 OTA 拿掉协议码；弱市工作日留。没合同不编必须开 / 必须便宜 30%。不要关死账号。不要把 BAR 降到协议价。

三句：协议价出现在高峰散客日，先分合同还是漏出，不要一律关死账号；高峰周六默认 blackout 或从 OTA 拿掉，弱市工作日可以留；没合同文件不要编「协议必须开」或「必须便宜 30%」。

仿真：180 间 **Simulation**（非真店）、9/05 周六 DTA14、OTB 78% Ahead+Fast、协议 **480** 在 OTA 裸挂 vs BAR **899** → **Blackout 周六 + REMOVE OTA 码**；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/02 周二 KEEP 480；拒绝杀户 / dump 到 480 / 必须 30% off。

兼容：会员另一道围栏，禁止三层叠砍；高峰关深折不关直销，协议在 OTA 是漏出；协议是持续合同不是一场宴会；价已最高只关不涨；禁一夜 −15%；Diagnose before closing the whole account。

刻意不补：P27/P31/P35；协议义务折扣%；工牌法定清单；Cornell/HSMAI leakage 专页（仍 NV）。


## 理论深挖 · 08:17 · T19 Profit Optimization（2026-08-22 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P32–P34 正文。**未写 P27/P31/P35。** 未编变动成本金额 / 佣金% / Walk / 点弹性 / 餐标。全文：`research-log/2026-08-22-0817-profit.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T19-1 | 间夜贡献理论 | `theory/profit-contribution.md` | **drafted** |
| T19-2 | 宁可不卖决策卡 | `recommendations/do-not-sell-below-contribution.md` | **drafted** |
| T19-3 | Flow Through / Flex 指标 | `metrics/flow-through.md` | **drafted**（STR 公式已核） |
| T19-4 | 研究笔记 | `research-log/2026-08-22-0817-profit.md` | **drafted** |
| T19-5 | knowledge-map T19 | `curriculum/knowledge-map.md` | **updated**（待建 → drafted） |
| T19-6 | metric-tree / GOPPAR / Net ADR | 各文末 | **appended**（不重写） |
| T19-7 | 问题树交叉 | `diagnosis/problem-tree.md` §36 | **appended** |

调用：用户说「499 还能卖，佣金+早餐+布草会不会亏」→ 要 Stay Date + 净价 + 用户三成本。缺成本不编，不能说总比空着强；已知深折相对 BAR 可弱拒配 399。净价低于贡献 → 关该产品，不要为了 OCC 卖。收入涨利润不涨 → 先查 mix/成本，不是再降价。

三句：没有变动成本和净价，不能说 499「总比空着强」；净价低于贡献就关这个产品，不要为了 OCC 卖；Flow through 差 = 收入涨利润不涨，先查 mix 和成本，不是再降价。

兼容：P02/P05 先围栏、禁一夜 −15%，围栏净价也不得穿贡献；P18 出资未知或高峰 dump 不报；P20 按净排序后再过贡献；OCC↑ RevPAR↓ 停砍，OCC↑ GOP↓ 更差；超售空房成本 = 未售间贡献，不是 Walk×2。T18 餐饮翻盘不重复。未改幅度数字。

刻意不补：P27/P31/P35；默认变动成本表；Mews 35–60% Flow Through 目标。


## 案例与剧本 · 10:17 · P27 Opaque / Package Leakage（2026-08-22 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P26、P28–P30、P23–P25、P32–P34 正文（P18/P20/P26/T19 仅文末交叉指针）。**未写 P31/P35。** 未编盲盒佣金% / 批发折扣表 / 变动成本 / Walk / 点弹性 / 2026 活动名。全文：`research-log/2026-08-22-1017-opaque.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C10-1 | Opaque / Package Leakage 剧本 | `advisor-playbooks/opaque-package-leakage.md`（BACKLOG P27） | **drafted** |
| C10-2 | 高峰关盲盒/批发卡 | `recommendations/close-opaque-on-peak.md` | **drafted** |
| C10-3 | Simulation · 周六 399 vs 899 | `cases/sim-2026-opaque-399-saturday.md` | **drafted** |
| C10-4 | 研究笔记 | `research-log/2026-08-22-1017-opaque.md` | **drafted** |
| C10-5 | 问题树交叉 | `diagnosis/problem-tree.md` §37 | **appended** |
| C10-6 | P18 / P20 / P26 / T19 指针 | 各文末 | **appended**（不重写） |

调用：用户说「OTA 盲盒 399、打包把房费摊低，高峰关不关？淡季留不留？」→ **P27**：高峰 Ahead 默认关盲盒与批发，不是再配 399。打包先拆真含餐 vs 藏房费。弱日仅当净>贡献可留；没成本数别说总比空着强。

三句：高峰 Ahead 关盲盒/批发，不是再配 399；打包要拆真含餐 vs 藏房费；淡季留不留看净是否盖住贡献，没成本别说总比空着强。

仿真：160 间 **Simulation**（非真店）、9/12 周六 Ahead+Fast、盲盒 **399** vs BAR **899** → **CLOSE** 盲盒+零售批发+假打包；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/08 周二 **不 Accept 399**（贡献>0 才可 KEEP）。拒绝 dump BAR / 「总比空着强」。

兼容：P18 出资未知或高峰 dump 不报；T19 低于贡献不卖；P26 高峰围栏弱日留；P05 last-minute 不是自动 dump，opaque 不是第一刀；价已最高只关不涨；禁一夜 −15%。

刻意不补：P31/P35；佣金%；批发折扣表；变动成本金额；Cornell 2012 全文（打开失败）；Expedia 营销 98%/6%。

## 晚课 · 来源与复盘（2026-08-22 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P32–P34 正文（T19 / Flow Through / P27 卡仅文末复盘指针）。**未写 P31/P35。** 未改编幅/仿真数字。全文：`research-log/2026-08-22-1217-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E22-12a | 来源与复盘笔记 | `research-log/2026-08-22-1217-sources-recap.md` | **drafted** |
| E22-12b | Source Map 追加 | `sources/source-map.md` | **appended**（STR Flow Through / HSMAI CPOR / IDeaS 101 / Amadeus 伙伴文） |
| E22-12c | RMS 景观 | `systems/rms-landscape.md` | **updated**（101 无公式；伙伴文再证无独立优化器） |
| E22-12d | Marriott 卡片 | `systems/marriott-one-yield.md` | **updated**（careers 仍 404；产品页仍 NV） |
| E22-12e | Amadeus 卡片 | `systems/amadeus.md` | **updated**（IDeaS 2021 + BEONx 2023 伙伴文；独立 RMS 仍 NV） |
| E22-12f | IDeaS 卡片 | `systems/ideas.md` | **appended**（101 打开无公式；G3 2021 datasheet；science-behind-g3 仍空） |
| E22-12g | Backlog 状态 | `backlog/research-backlog.md` | **updated**（H6/H7/H9；下一轮 P31/P35） |
| E22-12h | T19 / 宁可不卖 / Flow Through / 关 opaque 复盘指针 | 各文末 | **appended**（不重写正文） |

新打开：STR Glossary Flow Through（进表）；CoStar 2026-02-23 Flow Through 文；HSMAI CPOR 词条 + 2023 KPI 表；IDeaS Revenue Science 101；IDeaS glossary（补表）；G3 Pricing Datasheet ©2021；Amadeus×IDeaS 2021 / ×BEONx 2023 伙伴文。  
仍 NV：OYE 产品页、careers 404、Amadeus 独立优化器、IDeaS 逐步估法、science-behind-g3 正文空、Anderson/Xie 2012 PDF 429、2014 无开放 PDF。  
复盘：**无真矛盾。无 needs_revision。** 先诊断再围栏，从不 −15% 当永久 BAR；缺成本 ≠ dump 399；高峰关三道倾倒层、守 BAR，不叠三刀各 5%；Flow Through 差 = mix/成本不是再砍；仿真周二 399 不 Accept = T19；空房成本 = 未售贡献，不是 Walk×2。

调用：用户说「收入涨了 GOP 没跟上」→ Flow Through 先查 mix/成本。用户说「Amadeus 收益」先问 iHotelier CRS vs RS360 vs 外面 RMS。Marriott 仍不要假装会开 One Yield。IDeaS 101 可点名 unconstrained，仍无公式。

## Scout · 14:17 · P35 Last-minute OTA 曝光/排名（2026-08-22 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P23–P28、P32–P34 正文（P18/P05/P20 仅文末交叉指针）。**未写 P31。** 未编平台算法/排名权重/中国 OTA 佣金%/活动名/点弹性/Walk。全文：`research-log/2026-08-22-1417-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S14-1 | 侦察记录 | `scout/2026-08-22-1417.md` | **drafted** |
| S14-2 | OTA 曝光/排名剧本 | `advisor-playbooks/ota-visibility-drop.md`（BACKLOG P35） | **drafted** |
| S14-3 | 不砍 BAR 追排名卡 | `recommendations/dont-cut-for-rank.md` | **drafted** |
| S14-4 | Simulation · 周六口述掉排名 | `cases/sim-2026-ota-rank-drop-saturday.md` | **drafted** |
| S14-5 | 研究笔记 | `research-log/2026-08-22-1417-scout.md` | **drafted** |
| S14-6 | 问题树交叉 | `diagnosis/problem-tree.md` §38 | **appended** |
| S14-7 | P18 / P05 / P20 指针 | 各文末 | **appended**（不重写） |

调用：用户说「美团/携程排名掉了、流量没了，要不要降价或报今夜特价？」→ **P35**：先查库存、比价、内容，不要先砍 BAR。报名走 P18（谁出资、净价、砸不砸高峰）。没有截图只给检查单，不给权重公式。

三句：排名掉了先查库存、比价、内容，不要先砍 BAR。为了排名去报深折，走 P18：谁出资、净价、砸不砸高峰。平台算法不编；没有截图证据只给检查单，不给「权重公式」。

仿真：180 间 **Simulation**（非真店）、8/22 周六当晚、OTB 58%、美团标准房 0、BAR **Hold 779–799 首选 799**；今夜特价出资 Unknown → **不报**；拒绝 679 / 一夜 −15%。

兼容：P18 出资未知或高峰 dump 不报；P05 不一夜 −15%；T19 低于贡献不卖；P16 不把排名恐慌当价格战必跟；Diagnose before action。

刻意不补：P31；排名权重%；佣金%；活动名；Cornell OTA 排名专文（仍 NV）。


## 理论深挖 · 16:17 · T20 Revenue Strategy（2026-08-22 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P35 正文（P16/P17/日常卡/T18/T19 仅文末交叉指针）。**未写 P31。** 未编集团 SOP / 品牌最低价表（含 699）/ 预算完成率门槛。全文：`research-log/2026-08-22-1617-strategy.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T20-1 | Revenue Strategy 理论卡 | `theory/revenue-strategy.md` | **drafted** |
| T20-2 | 不砸品牌底价卡 | `recommendations/do-not-break-brand-floor.md` | **drafted** |
| T20-3 | 不砍价追预算卡 | `recommendations/dont-cut-to-hit-budget.md` | **drafted** |
| T20-4 | 研究笔记 | `research-log/2026-08-22-1617-strategy.md` | **drafted** |
| T20-5 | 知识图 T20 | `curriculum/knowledge-map.md` | **appended**（状态 drafted） |
| T20-6 | Forecast 框架指针 | `forecasting/forecast-framework.md` | **appended** |
| T20-7 | 问题树交叉 | `diagnosis/problem-tree.md` §39 | **appended** |

调用：用户说「预算差了 10% 要不要把下周全砍」→ Budget ≠ Forecast，10% 非门槛；Pace On 改预期，真 Behind 按日围栏，禁止全周一夜 −15%。用户说「品牌价不能低于 699」→ 当**用户声明约束**；先围栏/库存/渠道，不偷偷砸穿；用户没说地板则不发明 699。店长要 OCC、收益要 GOP → 贡献和 Pace，不拿预算当刀。

三句：预算差了不等于预测错了，更不等于下周全砍；有品牌底价就先动围栏/库存/渠道，不偷偷砸穿；店长要 OCC、收益要 GOP 时，用贡献和 Pace 说话，不拿预算当刀。

兼容：P02 围栏 −3–5% 仍 OK 且须高于声明底；P16 不跟 dump；T19 低于贡献不卖；P35 不为排名砍；P17 overlay 错 ≠ 砍 BAR 救预算；禁一夜 −15%。

刻意不补：P31；集团 SOP；华住 699 表；完成率门槛；CRME 正文。

## 案例与剧本 · 18:17 · P31 Crew / 航司协议（2026-08-22 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P30、P32–P35 正文（P10/P26 仅文末交叉指针）。未编东航/南航/国航价表、IATA 名单、取消率、份额保证金、华住/锦江 SOP、品牌 699。全文：`research-log/2026-08-22-1817-crew.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C18-31a | Crew / 航司协议剧本 | `advisor-playbooks/airline-crew.md`（BACKLOG P31） | **drafted** |
| C18-31b | 高峰 extra 机组 Counter/Reject 卡 | `recommendations/counter-or-reject-extra-crew.md` | **drafted** |
| C18-31c | Simulation · 城市店周六 +20@380 | `cases/sim-2026-airline-crew-saturday.md` | **drafted** |
| C18-31d | 研究笔记 | `research-log/2026-08-22-1817-crew.md` | **drafted** |
| C18-31e | 问题树交叉 | `diagnosis/problem-tree.md` §40 | **appended** |
| C18-31f | P10 / P26 指针 | 各文末 | **appended**（不重写） |

调用：用户说「航司再加 20 间、周六 BAR 已紧，接不接 / 380 vs 899 要不要黑周末 / 机组很爽约 OTB 当 Soft 吗」→ **P31**：先拆已签 allotment vs extra。城市满房周六 extra 默认 Counter 或 Reject，不是按 380 悄悄接。已签块先问围栏和 wash，不要关死航司账号。爽约 → 该块 Soft：不涨进取消潮，不按硬房超售。

三句：额外机组房挤满房周六默认 Counter 或 Reject；allotment 先问围栏和 wash 不杀户；爽约就把那块 OTB 当 Soft。

仿真：180 间城市店 **Simulation**（非真店）、9/12 周六 Ahead+Fast、BAR **899**、已签 12@380、extra +20@380 → **Counter**（最多 **0–4@380** 或 **760–850 首选 799**）；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/09 extra 8@380 Accept；KEEP 12；拒绝悄悄接 20 / 杀户 / dump BAR / 发明 699。

兼容：P10 extra 走置换、持续合同 ≠ 一场 20 间；P26 协议漏出 ≠ 机组 allotment；P24 不为幽灵房 Walk；P28 闸同类病因不同；T19 高峰机会成本是 BAR；T20 无底不发明 699；禁一夜 −15%。

刻意不补：航司价表；IATA 名单；取消率；份额保证金；华住/锦江机组 SOP；AHLA 85–95%（未核到）。


## 来源与复盘 · 20:17 · BEONx/Atomize + 近 6 槽复盘（2026-08-22 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P35 / T18–T20 正文（P31/P26/P35 仅文末交叉一句）。未编 华住 699 / 佣金% / crew 380 Fact / Walk / 点弹性。全文：`research-log/2026-08-22-2017-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E22-20a | 复盘笔记 | `research-log/2026-08-22-2017-sources-recap.md` | **drafted** |
| E22-20b | BEONx 厂商卡 | `systems/beonx.md` | **NEW**（不是 G3） |
| E22-20c | Atomize / Mews RMS 厂商卡 | `systems/atomize.md` | **NEW** |
| E22-20d | Landscape 指针 | `systems/rms-landscape.md` | **appended** |
| E22-20e | source-map §16 | `sources/source-map.md` | **appended** |
| E22-20f | P31/P26 KEEP vs blackout 交叉句 | 剧本+卡文末 | **appended**（不重写） |
| E22-20g | Backlog H6/H7/H9/M5 | `backlog/research-backlog.md` | **updated** |

新打开：BEONx 官网/About/HQI/SmartRange/Autopilot/Groups；atomize.com→Mews 产品页 + 2026-06-02 收购博文；IDeaS science-behind-g3（此前空，本轮有正文，仍无逐步估法）；eCornell 经营预算课页（不是 Budget vs Forecast 讲义）。  
仍 NV：NV-RS-04 Cornell Budget vs Forecast 专页；AHLA 85–95% 机组块入住；OYE 产品页；careers 仍 404（抽样 URL 停）；Amadeus 独立优化器；IDeaS 逐步估法 / 中国 PMS 集成。  
复盘：**无真矛盾。无 needs_revision。** KEEP 已签机组块 ≠ blackout 漏出协议码；Soft 机组 OTB ≠ 否定散客 Fast Pickup；预算差 ≠ 全砍；799 extra 不是 dump BAR 到 380；排名掉了先查库存。

调用：用户说「Amadeus 收益」先问 iHotelier CRS vs RS360 vs 外面 IDeaS/Duetto/**BEONx**。用户说 Atomize → 先问独立 RMS 还是 Mews 原生。Marriott 仍不要假装会开 One Yield。IDeaS science-behind-g3 可点名 DP，仍无公式。


## Scout · 22:17 · P36 比价口径 / Rate Shopper 误读（2026-08-22 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P35 正文（P16/P23/P35 仅文末交叉指针）。未编美团比价公式、佣金%、华住 699、点弹性、Walk。全文：`research-log/2026-08-22-2217-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S22-36a | 比价口径 / Rate Shopper 误读剧本 | `advisor-playbooks/rate-shopper-incomparable.md`（BACKLOG P36） | **drafted** |
| S22-36b | 不可比截图不跟卡 | `recommendations/dont-follow-incomparable-shop.md` | **drafted** |
| S22-36c | Simulation · 截图 719 vs 799 | `cases/sim-2026-comp-screenshot-80-cheaper.md` | **drafted** |
| S22-36d | 侦察记录 | `scout/2026-08-22-2217.md` | **drafted** |
| S22-36e | 研究笔记 | `research-log/2026-08-22-2217-scout.md` | **drafted** |
| S22-36f | 问题树交叉 | `diagnosis/problem-tree.md` §41 | **appended** |
| S22-36g | P16 / P23 / P35 指针 | 各文末 | **appended**（不重写） |

调用：用户说「截图里隔壁便宜 80，要不要跟」→ **P36**：先过可比清单（日期、房型剩余、公开 vs 会员/App、含早、税、LOS、今夜特价/NR、CTA）。不可比 → Hold 公开 BAR，不跟假 80。可比且 dump → P16。可比且市场真动 → 围栏 −3–5%，禁一夜 −15%。

三句：截图便宜 80，先问是不是同一口价，再谈跟不跟；会员/含早/App/只剩套房都不是砍 BAR 的理由；真可比且对面 dump 走 P16 不跟，真可比且市场在动再动围栏或 BAR。

仿真：180 间 **Simulation**（非真店）、8/29 周六、BAR **799**、截图隔壁 **719**（会员+含早+App、套房尾房）→ **Hold 779–799 首选 799**；拒绝 699。Pace 约 On。不编美团公式。

兼容：P16 只在可比之后；P23 是我们的会员不是隔壁登录价；P35 排名不是 shopper 截图；T19/T20 不发明 699；禁一夜 −15%。Advisor 不操作 shopper。

刻意不补：T06 OO/OOO 剧本；美团/携程可比价公式；sanctioned 行业比例；IDeaS 专页；维修房间夜 Fact。


## 理论深挖 · 00:17 · T06 Capacity / OO / OOO（2026-08-23 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P36 正文（P03/P05 仅文末 Remaining=可售一行）。未写 P37。未编中国 PMS 报表字段名、维修房间夜常模。全文：`research-log/2026-08-23-0017-ooo.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T06-1 | 容量 / OOO 理论 | `theory/capacity-ooo.md` | **drafted** |
| T06-2 | 不按维修 OCC 定价卡 | `recommendations/dont-price-off-ooo-occ.md` | **drafted** |
| T06-3 | inventory / occ Diagnose-Advise | `metrics/inventory.md` `metrics/occ.md` | **appended**（S 公式未改） |
| T06-4 | 研究笔记 | `research-log/2026-08-23-0017-ooo.md` | **drafted** |
| T06-5 | 问题树交叉 | `diagnosis/problem-tree.md` §42 | **appended** |
| T06-6 | P03 / P05 指针 | 各文末 | **appended**（不重写） |

调用：用户说「OCC 已经 92% 要不要再涨 / 还剩 40 间今晚砸一刀 / 对标 Comp 高 8 个点」→ 先问分母与可售剩余。维修不是需求变强。不可售不是砸价对象。PMS 扣了 OOO、STR 没扣 → 那 8 个点是假的。缺 OOO 数不编 20。

三句：OCC 好看先问分母，维修房砍掉的不是需求变强；空着 40 间先问几间真能卖，不可售的房不是砸价对象；对标 Comp 必须同口径，PMS 扣了 OOO、STR 没扣，那 8 个点是假的。

兼容：P03 Remaining=可售；P05 remaining 是 OOO 禁 dump；P13 一型 OOO 先扣；P33 CTA≠OOO；P36 价不可比；T19 OOO≠未售需求；禁一夜 −15%。

刻意不补：P37 剧本；中国报表字段名；维修间夜 Fact。

## 案例与剧本 · 02:17 · P37 OO/OOO 维修房（2026-08-23 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P36 正文（P03/P05 仅文末一行 P37 指针）。未重写 T06 理论/决策卡正文（仅「剧本见 P37」）。未另开第二张卡。未编中国 PMS 报表字段名、默认 OOO=20 Fact、Walk、佣金%、点弹性、华住 699。全文：`research-log/2026-08-23-0217-ooo-playbook.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C02-37a | OO/OOO 容量剧本 | `advisor-playbooks/ooo-capacity.md`（BACKLOG P37） | **drafted** |
| C02-37b | 主卡（复用，不新建） | `recommendations/dont-price-off-ooo-occ.md` | **pointer** |
| C02-37c | Simulation · 周六 PMS OCC 92% | `cases/sim-2026-ooo-occ-92-saturday.md` | **drafted** |
| C02-37d | 研究笔记 | `research-log/2026-08-23-0217-ooo-playbook.md` | **drafted** |
| C02-37e | 问题树交叉 | `diagnosis/problem-tree.md` §42 | **appended** |
| C02-37f | P03 / P05 / T06 理论+卡指针 | 各文末 | **appended**（不重写） |

调用：用户说「OCC 已经 92% 要不要再涨 / 还剩 40 间今晚砸一刀 / 对标 Comp 高 8 个点」→ **P37**：先重算可售 Remaining。假高峰不自动 Increase BAR；假剩余不 dump；假 MPI 不同口径不对。真可售紧且 Pace Ahead 才 P03。缺 OOO 数不编 20。

三句：OCC 92% 先重算可售剩余，维修房不是涨价通行证；空着 40 间先拆出不可售，剩下的才决定 Hold 还是小步围栏；Comp OCC 高 8 个点先问分母，PMS 扣了维修、STR 没扣，就不要跟那 8 个点较劲。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、Physical 180、OOO 20（仅本卷）、PMS OCC 92%、OTB 147、可售剩余 13、STR OCC ≈81.7% vs Comp STAR 84% → **Hold 779–799 首选 799**；拒绝 899 / 699。拍 B：40 空/25 不可售 → 不 dump。20 不当行业 Fact。

兼容：P03 重算后真紧且 Ahead 可涨；P05 不可售不是 dump 燃料，真可售 last-minute 禁一夜 −15%；P33 CTA≠OOO；P13 一型 OOO；P36 价假信号 ≠ 量假信号；T19 OOO≠未售需求；T20 不砸底填不可售。

刻意不补：第二张卡；中国报表字段名；维修间夜 Fact；重审 6 个月线。


## 来源与复盘 · 04:17 · P36 shopper + T06 Historical vs Forward + P37 vs P03（2026-08-23 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P37 / T06 / T18–T20 正文（P03/P33/卡仅文末一句）。未编 20 OOO Fact、华住 699、佣金%、Walk、点弹性。未重开 iHotelier / science-behind-g3 / Marriott careers 404。全文：`research-log/2026-08-23-0417-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E23-04a | 复盘笔记 | `research-log/2026-08-23-0417-sources-recap.md` | **drafted** |
| E23-04b | source-map §17 | `sources/source-map.md` | **appended** |
| E23-04c | OPERA Cloud OO/OS PMS 注 | `hotel-tech-stack/tech-map.md` §5 | **appended**（不是 RMS） |
| E23-04d | P03 Days-to-Sellout 仍管大门 | `advisor-playbooks/sellout-risk.md` 文末 | **appended**（不重写） |
| E23-04e | P33 CTA≠OOO | `advisor-playbooks/restriction-overuse.md` 文末 | **appended**（不重写） |
| E23-04f | Historical vs Forward 哪张表 | `recommendations/dont-price-off-ooo-occ.md` 文末 | **appended**（不重写） |
| E23-04g | Backlog 下一轮 | `backlog/research-backlog.md` | **updated** |

新打开：OPERA Cloud 26.2 OO vs OS（+ Managing OOO）；Forward STAR 复核；Duetto Rate Shops 复核。  
新目录化（22:17/00:17 已开、首次进 §17）：Duetto Rate Shops、Lighthouse API v3.1、Booking Demand `logged_in_deals`、SiteMinder Insights 报告/rate-shopping、HSMAI CUG、STR Historical 6 个月线（OOO 用途）、Forward STAR Adjusted、Stayntouch 三码、HotStats / HFTP FAQ、CoStar OCC / TRevPAR 教育文。  

复盘：**无真矛盾。无 needs_revision。** P37 Hold vs P03：可售 13、DTA 6、Pickup ~1 → Days-to-Sellout 13>6，仅 S3 一条，Hold **不是** under-protect。Historical 短 OOO 不扣 vs Forward 排除 OOO = 源张力，顾问 MPI 要 Historical、OTB% 要 Forward。P36 先于 P16；P35≠shopper 截图。P37 假剩余 ≠ P05 dump。P33 CTA ≠ OOO。20:17 BEONx 与 P37 无新冲突。

仍 NV：中国 PMS 字段名；美团/携程可比价公式；sanctioned 行业比例；IDeaS shop 专页；维修间夜常模；NV-RS-04；AHLA 85–95%；H6 公式；H7 OYE；H9 独立优化器。Rainmaker/EZRMS 不编。

调用：截图 80 先问同一口价（P36）。OCC 92% 先重算可售（P37）；MPI 问 Historical STAR，前瞻问 Forward Adjusted。OPERA：OO 扣、OS 不扣——只作 PMS 注。13 间+慢 Pickup 仍 Hold，不是 P03 该涨。

## Scout · 06:17 · P38 取消政策随 DTA 收紧（2026-08-23 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P37 正文（P14/P19/P05/P28 仅文末一行交叉）。未编美团/携程免费取消截止点、罚金表、行业取消%、华住 699、佣金%、点弹性、Walk。全文：`scout/2026-08-23-0617.md` · `research-log/2026-08-23-0617-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S23-06a | 侦察日志 | `scout/2026-08-23-0617.md` | **drafted** |
| S23-06b | 取消窗收紧剧本 | `advisor-playbooks/cancel-policy-tighten.md`（BACKLOG P38） | **drafted** |
| S23-06c | 先收窗不先砍卡 | `recommendations/tighten-cancel-before-cut.md` | **drafted** |
| S23-06d | Simulation · DTA3 随时退堆 | `cases/sim-2026-free-cancel-stack-dta3.md` | **drafted** |
| S23-06e | 研究笔记 | `research-log/2026-08-23-0617-scout.md` | **drafted** |

调用：用户说「OTB 看起来还行但全是免费取消，要不要先砍价占量 / 入住前 3 天还一堆随时退降不降」→ **P38**：免费取消堆着先当 Soft，不是先砍价占量。先收 **新单** 取消窗或推不可退；已确认不暗改。真洗完还弱再围栏。禁一夜 −15%。

三句：免费取消堆着先当 Soft，不是先砍价占量；入住临近先收新单的取消窗口或推不可退，不要改已确认客人的规则当暗降；真洗完还弱，再走围栏，禁止一夜 −15% 把灵活单锁死。

仿真：180 间城市店 **Simulation**（非真店）、8/26 周三、DTA 3、OTB 130 中 110 随时退、BAR 799 → **Hold 779–799 首选 799**；新单收窗；可选预付 775（≥799×0.95≈759）；拒绝 699；已确认 110 不暗改。85%/110 不当行业 Fact。

兼容：P14 Soft 诊断 ≠ 砍 BAR；P19 浅预付仍是围栏；P28 天气夜不收窗不涨；P05 政策先于 dump；T19/T20 不发明 699；P37 Remaining 可售不混。

刻意不补：点评/口碑专剧；美团/携程截止点 Fact；行业取消率；重写 P14/P19。

## 理论/指标深挖 · 08:17 · 点评/口碑 vs 价格（2026-08-23 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P38 正文（P35 仅文末一行专卡指针）。未写 P39 剧本。未建 `metrics/review-score.md`。未编美团/携程 4.7 卫生分红线、评分权重%、降 0.1 分转化 X%、佣金%、华住 699。全文：`research-log/2026-08-23-0817-reputation.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T23-08a | 口碑 vs 价格理论卡 | `theory/reputation-vs-price.md` | **drafted** |
| T23-08b | 评分掉了不先砍卡 | `recommendations/dont-cut-for-review-score.md` | **drafted** |
| T23-08c | 研究笔记 | `research-log/2026-08-23-0817-reputation.md` | **drafted** |
| T23-08d | 问题树交叉 | `diagnosis/problem-tree.md` §44 | **appended** |
| T23-08e | P35 指针 | `advisor-playbooks/ota-visibility-drop.md` 文末 | **appended**（不重写） |
| T23-08f | X-SIG / T14 / T15 指针 | `curriculum/knowledge-map.md` | **appended** |
| T23-08g | 信号框架 | `demand-signals/signal-framework.md` | **appended**（口碑不是事件信号） |

调用：用户说「评分从 4.8 掉到 4.3 要不要降价换量 / 差评多了要不要报今夜特价」→ 口碑是 **转化/质量信号**，不是需求曲线，更不是报价器。默认 **Hold BAR**。先修主图、设施、近窗差评与回复。报名走 P18。无截图不发明 4.3，也不发明平台红线。Pace Ahead 更不砍（P09）。质量转化塌 ≠ η 高。

三句：评分掉了先修图、设施和近窗差评，不是先砍 BAR 换量；口碑是转化信号，不是需求曲线，更不是报价器；没有评分截图就不发明 4.3，也不发明平台红线。

兼容：P35 管排名诊断，本卡管评分→价格；P18 不是修分后门；P02/P05 洗掉口碑恐慌后的真弱才围栏，禁一夜 −15%；T19/T20 不穿贡献、不砸声明底；P36 shopper ≠ 评分；P38 取消窗 ≠ 口碑。STR OCC/ADR 公式不含评分，不发明 Review Index。

刻意不补：P39 剧本（10:17 仍开）；review-score 指标卡；4.7 红线 Fact；Anderson 样本数字进启发式。

## 案例与剧本 · 10:17 · P39 点评/口碑下滑不要砍 BAR（2026-08-23 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P38 正文（P35 仅文末一行「评分→价走 P39」）。未重写 `theory/reputation-vs-price.md` / `dont-cut-for-review-score.md` 正文（只追加「剧本见 P39」）。未另开第二张决策卡。未编美团/携程 4.7 卫生分红线、评分权重%、降 0.1 分转化 X%、佣金%、华住 699。4.3 只在 Simulation。全文：`research-log/2026-08-23-1017-review-playbook.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C23-10a | 口碑下滑剧本 | `advisor-playbooks/review-score-drop.md`（BACKLOG P39） | **drafted** |
| C23-10b | Simulation · 周六 4.8→4.3 | `cases/sim-2026-review-43-saturday.md` | **drafted** |
| C23-10c | 研究笔记 | `research-log/2026-08-23-1017-review-playbook.md` | **drafted** |

调用：用户说「评分从 4.8 掉到 4.3 要不要降价换量 / 差评多了要不要报今夜特价」→ **P39**：评分掉了先修图、设施和近窗差评，不是先砍 BAR 换量。无截图不发明 4.3 / 红线。报名走 P18。Pace Ahead 更不砍。真弱才围栏，禁一夜 −15%。

三句：评分掉了先修图、设施和近窗差评，不是先砍 BAR 换量；口碑是转化信号，不是需求曲线，更不是报价器；没有评分截图就不发明 4.3，也不发明平台红线。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、DTA 6、OTB 104 vs STLY 61% 略 Behind、BAR 799、美团截图 4.8→4.3（仅本卷）、近窗空调/卫生差评 → **Hold 779–799 首选 799**；今夜特价 who_pays Unknown → **不报**；拒绝 699 / 一夜 −15%。4.3 不当库内门槛。

兼容：P35 排名诊断仍先；P18 不是修分后门；P16 口碑恐慌不是价格战；P09 Ahead 不砍；P02/P05 洗掉口碑恐慌后的真弱才围栏；T19/T20 不发明 699；P38 取消窗 ≠ 口碑；Anderson 只用方向。

刻意不补：第二张卡；4.7 红线 Fact；重写理论/卡正文；重写 P01–P38。


## 来源与复盘 · 12:17 · P38/P39/口碑源组 + 近 6 槽读卡（2026-08-23 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P39 / T06 / T18–T20 / reputation 理论正文（P14/P38 仅文末一句交叉；理论仅 Anderson 身份一句）。未编美团/携程 4.7 红线、免费取消截止点、佣金%、华住 699。未写新 RMS。未发布网站。全文：`research-log/2026-08-23-1217-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E23-12a | 来源与复盘日志 | `research-log/2026-08-23-1217-sources-recap.md` | **drafted** |
| E23-12b | source-map §18 | `sources/source-map.md` | **appended**（P38 取消窗 + P39/口碑；Anderson CHR ≠ POM） |
| E23-12c | Anderson CHR ≠ POM | `theory/reputation-vs-price.md` 文末 | **appended**（不重写） |
| E23-12d | 评分→价走 P39 | `advisor-playbooks/cancel-policy-tighten.md` 文末 | **appended**（不重写） |
| E23-12e | 质量止血 ≠ 砍 BAR | `advisor-playbooks/high-cancellation.md` 文末 | **appended**（不重写） |
| E23-12f | Backlog 下一轮 | `backlog/research-backlog.md` | **updated** |

新打开/复核：Booking setting-cancellation-policies（确认预订=协议；临时例外；1–2 天建议非强制）；Booking responding-guest-reviews（近窗加权；回复差评；不是砍 BAR）。  
新目录化（06:17/08:17 已开、首次进 §18）：Lighthouse 免费取消、HSMAI ROAB、Duetto 2016 取消趋势、RevPerfect（C）、Anderson 2012 **CHR reviews** Mandarin bitstream + VT 文摘、Booking Improving GRS / visibility / foundations / property-page、HSMAI Content King、HSMAI APAC 50388。

复盘：**无真矛盾。无 needs_revision。** P38 vs P14 vs P19 = Soft 诊断 / 收窗口 / 预付产品，**正确拆开**，不是同一杠杆误用。P38 vs P28：天气夜不收窗。P38 预付 775 = P19 −3%，拒 699，兼容 T20 / 禁一夜 −15%。P39 vs P35：排名检查单 ≠ 评分→价；内容同向不双重砍。P39 vs P18：今夜特价 Unknown 出资不报。P39 vs P02/P05：仿真非真弱。Anderson 理论卡已用 **CHR reviews**，≠ §13 POM opaque —— **不**标 needs_revision。04:17 P36/T06/P37 无新冲突。

仍 NV：eCommons Anderson reviews 英文 handle **429**；4.7 红线；美团/携程取消截止点；STR 灵活转化原文；SiteMinder no-show；Booking handling-cancellations；POM opaque 全文；H6 公式；H7 OYE；H9 独立优化器。Rainmaker/EZRMS 不编。

调用：免费取消堆着先 Soft，收新单窗或浅预付，Hold BAR。评分掉了修内容，不砍 BAR；报名走 P18。口碑论文是 CHR 2012 reviews，不是 POM opaque。


## 侦察空档 · 14:17 · P40 Stay Pattern / 拒绝单晚占高峰（2026-08-23 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P39 正文（P11/P21/P33 仅文末一行）。未重写 `pricing/los-optimization.md`。未编中国 OTA 连住均价公式、佣金%、华住 699、Duetto 5–7%/7–10% 当必须折。未写长包房剧本。未发布网站。全文：`research-log/2026-08-23-1417-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S23-14a | 侦察记录 | `scout/2026-08-23-1417.md` | **drafted** |
| S23-14b | Stay Pattern 剧本 | `advisor-playbooks/stay-pattern.md`（BACKLOG P40） | **drafted** |
| S23-14c | 拒高峰单晚卡 | `recommendations/reject-sat-only-on-peak.md` | **drafted** |
| S23-14d | Simulation · 周六只订 vs MinLOS | `cases/sim-2026-saturday-only-vs-minlos.md` | **drafted** |
| S23-14e | 研究笔记 | `research-log/2026-08-23-1417-scout.md` | **drafted** |

调用：用户说「客人只订周六，周五周日空着，接不接 / 连住均价被周六拉高要不要砍周末」→ **P40**：先问肩日还卖不卖。有需求 → MinLOS=2 或 CTA，拒单晚，Hold 高峰 BAR。不要先接再砍周末。均价贵了不要砍周六迁就肩日。肩日冰了再接单晚才是增量。淡季别把 MinLOS 留着当习惯（P33）。

三句：只订周六先问周五周日还卖不卖，高峰单晚默认用连住/CTA 护，不是先接再砍周末；连住均价贵了，不要把周六砍下去迁就肩日；肩日已经冰了，再接周六单晚才是增量，淡季别把 MinLOS 留着当习惯。

仿真：180 间城市店 **Simulation**（非真店）、8/28–8/30、周六 DTA 6、OTB 71.1% Ahead+Fast、周五/周日肩日 Pickup 仍正、BAR 799 → **拒 Sat-only**；MinLOS=2 盖周六（不用 CTA，主到达日未知）；**Hold 779–799 首选 799**；拒绝砍到 699（−12.5%）；禁一夜 −15%。719/686 仅本卷算术，不是 OTA 公式。

兼容：P11 市场 ≠ P40 杠杆。P21 节日日历 ≠ 每个周六。P33 不解已证实高峰。T19 占周六的便宜均价可能毁掉贡献。T20 不砸底卖周五。P38 取消窗是另一杠杆。

刻意不补：长包房/monthly；中国 OTA 连住均价公式 Fact；重写 P11/P21/P33；Duetto LOS% 进启发式。

## 理论/指标深挖 · 16:17 · T08 LOS 网络 + 压缩夜价值（2026-08-23 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P40 正文（P40 / P11 / P21 / P33 仅文末一行）。未改 Wave7 Peak+Shoulder 算术。未新开第二张决策卡。未写 P41 长包房。未编中国 OTA 连住均价公式、佣金%、华住 699、Duetto 5–7%/7–10% 当必须折。未发布网站。全文：`research-log/2026-08-23-1617-los-network.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T23-16a | LOS 网络加深 | `pricing/los-optimization.md` §10–16 | **appended** |
| T23-16b | 压缩夜价值指标 | `metrics/stay-network-value.md` | **drafted**（Hypothesis，非 STR） |
| T23-16c | 研究笔记 | `research-log/2026-08-23-1617-los-network.md` | **drafted** |
| T23-16d | 问题树交叉 | `diagnosis/problem-tree.md` §46 | **appended** |
| T23-16e | P40 / 决策卡指针 | 各文末 | **appended**（不重写） |
| T23-16f | T08 地图 / metric-tree | `curriculum/knowledge-map.md` · `metrics/metric-tree.md` §15 | **appended** |

调用：用户说「三晚均价很漂亮为什么不接周六单晚 / 高峰一晚到底值多少」→ **T08**：看高峰那一晚被谁占。CNV = 客房收入 / 紧夜数（通常周六记 1 不是 3）。肩日还卖 → Sat-only 置换瓶颈。肩日冰 → Sat-only 才是增量。不要砍周六做便宜连住。动作仍 **P40**（MinLOS=2 或 CTA；Hold 779–799 首选 799）。STR 无此公式。

三句：连住好不好，看高峰那一晚被谁占住，不看三天均价漂不漂亮；只订周六，如果周五周日还卖得出去，占的是瓶颈夜，不是增量；不要把周六砍下去做便宜连住；肩日冰了，周六单晚才是增量。

兼容：P40 拒 Sat-only（肩日还卖）= 本理论的动作面。P11 市场形状 ≠ P40 杠杆 ≠ 本卡估值。P21 节日日历 MinLOS。P33 死周二不要留 MinLOS=2。T19 廉价三晚均价可毁高峰贡献。T20 不砸高峰地板卖周五。Wave7 套均价 ≥ Peak 地板+肩日，与 Hold 799 同向。

刻意不补：P41 长包房；第二张决策卡；中国 OTA 均价公式 Fact；Duetto % 进启发式；重写 P40 正文。

## 案例与剧本 · 18:17 · P41 长包房（2026-08-23 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P40 正文（P10 / P31 仅文末一行）。未编中国长包月租价表、华住 SOP、300 行情、佣金%、Walk、点弹性、一夜 −15%。未发布网站。全文：`research-log/2026-08-23-1817-longstay.md`。16:17「不要写 P41」只约束该理论小时，本案例小时解绑。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C23-18a | P41 长包剧本 | `advisor-playbooks/long-stay-monthly.md` | **drafted** |
| C23-18b | 决策卡 | `recommendations/counter-or-reject-long-stay.md` | **drafted** |
| C23-18c | 仿真 | `cases/sim-2026-longstay-20x30-weekends.md` | **drafted**（Simulation） |
| C23-18d | 研究笔记 | `research-log/2026-08-23-1817-longstay.md` | **drafted** |
| C23-18e | 问题树 | `diagnosis/problem-tree.md` §47 | **appended** |
| C23-18f | T08/T10 地图 | `curriculum/knowledge-map.md` | **appended** |

调用：用户说「包 15–20 间连住 30 天单价很低接不接 / 长包 300 vs 周末 799」→ **P41**：先数窗口里的周末和活动夜。混合店周末仍卖 → Counter（黑出高峰 / 少间 / 高峰夜价带）或 Reject。没有保证付款不是 STR Contract。不要用 30×淡季均价当成交理由。公开周末不 dump。顾问不签租约。

三句：长包先数里面有几个周末和活动夜，不要用 30×淡季均价当成交理由；周末还卖 799，默认 Counter 或拒，不是按 380 把周六让出去；没有保证付款和高峰黑窗，就把它当便宜长住散客，不是 Contract。

仿真：180 间城市店 **Simulation**（非真店）、9/7–10/6 共 30 夜、20 间@380、4 个周六 BAR 799 Pace Ahead → **Counter**（黑出 4 个周六；高峰若必须住则 0–4 间或 560–650 首选 620 Hypothesis）；坚持全窗 @380 或 300 → **Reject**；公开周六 **Hold 779–799 首选 799**。380/300 仅该卷。

兼容：P10 短团置换 ≠ 30 日占房产品。P31 KEEP allotment ≠ KEEP 30 夜砸每个周六。P26 协议漏出是围栏，P41 是新合同。P40 一个 Sat-only ≠ 长包每个周六都占。T19 周清仍跑。T20 不砸周末底。顾问不签租约。

刻意不补：中国月租价表 Fact；华住长包 SOP；300 行情；佣金%；Walk；点弹性；重写 P01–P40 正文。


## 来源与复盘 · 20:17 · P40/T08/P41 源组 + 近 6 槽读卡（2026-08-23 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P41 / T08 / T19–T20 正文（T20 卡 / P40 拒单晚卡 / CNV 卡仅文末一句交叉）。未编中国长包月租价表、华住 SOP、300/380 行情、佣金%、Walk、4.7。未写新 RMS。未发布网站。全文：`research-log/2026-08-23-2017-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E23-20a | 来源与复盘日志 | `research-log/2026-08-23-2017-sources-recap.md` | **drafted** |
| E23-20b | source-map §19 | `sources/source-map.md` | **appended**（P40/T08/P41；Displacement 本轮重试打开） |
| E23-20c | 合同层 ≠ 公开 Hold | `recommendations/do-not-break-brand-floor.md` 文末 | **appended**（不重写） |
| E23-20d | 每个周六 = 同一瓶颈 | `recommendations/reject-sat-only-on-peak.md` 文末 | **appended**（不重写） |
| E23-20e | 30×均价 = naive ADR | `metrics/stay-network-value.md` 文末 | **appended**（不改公式） |
| E23-20f | Backlog 下一轮 | `backlog/research-backlog.md` | **updated** |

新打开：eCornell Displacement **本轮重试打开**（课纲级；§15 曾 timeout）。  
新目录化（14:17/16:17/18:17 已开、首次进 §19）：eCornell Kimes LOS、HSMAI MinLOS / LOS pricing / LOS 分档、HSMAI 2020 PDF、Lighthouse stay restrictions、Duetto Forecast / BAR-LOS、Hotel Online IDeaS 转载、HSMAI Americas Extended Stay、HVS 2012 LOS 分档、HotelTechUpdate 周清。STR Glossary 已在表（LOS / 无 CNV / Contract §15）。

复盘：**无真矛盾。无 needs_revision。** P41 560–650 vs T20 vs P40 Hold 799 = **两层**（合同 Counter ≠ 公开 BAR Hold；无声明底不发明 699）。P41 占每一个周六 vs P40 拒 Sat-only = **同一瓶颈**，工具不同，不是相反建议。P41 vs P10 = 30 日产品 ≠ 短团。P41 vs P31 = KEEP allotment ≠ KEEP 30 夜砸周六。T08 CNV vs P41 30×淡季均价 = **同向**。P40 MinLOS=2 vs P33 = 形 E 移交，不解已证实高峰。10:17 P39 / 12:17 无新冲突。

仍 NV：中国长包月租价表（NV-LOS-06）；中国 OTA 连住均价公式（NV-LOS-04）；MinLOS 展示（NV-LOS-05）；STR CNV 公式（无词条）；4.7；取消截止点；H6/H7/H9。Rainmaker/EZRMS 不编。ideas.com Ideal Pricing 空页。

调用：只订周六先问肩日，高峰单晚用连住护，Hold 799。长包先数里面的周末，默认 Counter/Reject；560–650 是合同层不是 dump 公开 BAR。不要用 30×淡季均价成交。


## Scout · 22:17 · P42 当日 walk-in / 前台 vs OTA 今夜价（2026-08-23 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P41 正文（P05 仅文末一行）。未编中国前台折扣表、美团/携程今夜特价 SOP、佣金%、4.7、Walk、华住 699、点弹性、抖音 SOP。未把 Guestivo/Prostay % 抄进启发式。未发布网站。全文：`research-log/2026-08-23-2217-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S23-22a | P42 当日 walk-in 剧本 | `advisor-playbooks/same-day-walk-in.md` | **drafted** |
| S23-22b | 决策卡 | `recommendations/dont-match-ota-dump-at-desk.md` | **drafted** |
| S23-22c | 仿真 | `cases/sim-2026-walkin-vs-ota-399.md` | **drafted**（Simulation） |
| S23-22d | 侦察 | `scout/2026-08-23-2217.md` | **drafted** |
| S23-22e | 研究笔记 | `research-log/2026-08-23-2217-scout.md` | **drafted** |
| S23-22f | 问题树 | `diagnosis/problem-tree.md` §48 | **appended** |
| S23-22g | T04/T11 地图 | `curriculum/knowledge-map.md` | **appended** |
| S23-22h | P05 一行 | `advisor-playbooks/last-minute-unsold.md` §13 | **appended**（不改 72/24/6h） |

调用：用户说「前台问今晚 walk-in 打几折 / OTA 今夜 399 前台要不要跟」→ **P42**：上门零佣金。未冰 → 报 BAR 或更高，不跟 dump，不改公开 BAR。真冰才给当天前台围栏，净仍须 > OTA dump 净且过 T19，不是 399，不是新 BAR。P05 可以开同日 OTA 战术围栏；前台不跟。禁止两道叠成 399 BAR。禁一夜 −15%。顾问不操作 PMS/OTA/前台收银。

三句：今晚 walk-in 不是自动跟 OTA 今夜价，前台零佣金，默认 BAR 或更高；真弱才给前台一个当天围栏，还要盖住 OTA 净价和贡献，不把 399 写成新 BAR；高峰有人上门更不该打折，他们已经到店了。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六 22:17 DTA=0、OTB 68.9% 略 Behind 但今日 +7、BAR 799、OTA dump 399、1 张 walk-in 已按 799 进、竞对一家满 → **形 A**；前台 **Hold 779–799 首选 799**；拒绝跟 399（−50%）；拒绝 BAR→399；形 B 699–719 仅反事实（净仍 > 399）。399/799 仅该卷。

兼容：P05 渠道 72/24/6h dump ≠ 前台口价。P20 Direct 结构优势支持前台高于 dump。P23 会员 ≠ 上门。P25 mix ≠ 一张上门单。P16 跟竞对 ≠ 跟自己的 dump。P18 报名闸 ≠ 前台对齐。T19 无成本不说 399 总比空着强。T20 无地板不发明 699 当品牌底。

刻意不补：钟点房/day-use 剧本；拒单/后悔单剧本；中国前台折扣表 Fact；美团今夜 SOP；Cornell 教材摘录；佣金%；Guestivo/Prostay % 进启发式。



## 理论 · 00:17 · 拒单/流失作 Unconstrained 可观察代理（2026-08-24 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P42 正文（P03/P33/P42 仅文末一行）。未写 P43 全剧本。未编中国 PMS 拒单字段、拒单%、Walk 成本、华住 699、STR Denials Index。未写钟点房。未发布网站。全文：`research-log/2026-08-24-0017-denials.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T24-00a | 拒单/流失指标 | `metrics/denials-regrets.md` | **drafted** |
| T24-00b | 决策卡 | `recommendations/dont-raise-on-verbal-denials.md` | **drafted** |
| T24-00c | Unconstrained 一行 | `forecasting/unconstrained-vs-constrained.md` §9 | **appended**（不重写 Vendor 步骤） |
| T24-00d | 研究笔记 | `research-log/2026-08-24-0017-denials.md` | **drafted** |
| T24-00e | 问题树 | `diagnosis/problem-tree.md` §49 | **appended** |
| T24-00f | T03 地图 | `curriculum/knowledge-map.md` | **appended**（T17 一行） |
| T24-00g | 指标树 | `metrics/metric-tree.md` §16 | **appended** |
| T24-00h | P03/P33/P42 指针 | 三剧本文末 | **appended**（不改信号表） |

调用：用户说「前台说今晚赶过好几拨人，要不要涨」→ **不要**凭故事 Increase BAR。要日志（Stay Date / 件数 / 房型 / 原因）。无日志 → **Hold**，明天开始记。0 拒单 ≠ 需求弱。限制夜大量拒单先 **P33**（已证实 Peak 的 MinLOS 不解）。真容量拒单 + Pace Ahead + Remaining 紧 → **P03/P09**，不是本卡自动 +15%。上门已成交 → **P42**。禁一夜 ±15%。顾问不操作 PMS。

三句：前台说赶过人，没有日志就不能当需求去涨价；拒单要记日期、房型、原因；限制挡掉的先走松限制，不是先加价；零拒单也不等于没人要，可能只是没人记。

兼容：Unconstrained 理论仍 Vendor；本资产是可观察代理。P03 用 Remaining+Pace 不开故事。P33 限制制造假拒单。P42 walk-in 成交 ≠ denial。P09 Ahead 仍要剩余。禁止一夜 ±15%。

刻意不补：P43 拒单过程剧本（02:17 槽）；钟点房/day-use；中国 PMS 字段 Fact；拒单%；Walk 金额；华住 699；Cornell 教材摘录；STR Denials Index（词表无）。


## 案例与剧本 · 02:17 · P43 口头拒单过程（2026-08-24 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P42 正文（P03/P33/P42 仅文末一行）。未重写 `metrics/denials-regrets.md` / `dont-raise-on-verbal-denials.md` 正文（只追加「剧本见 P43」）。未另开第二张卡。未编中国 PMS 拒单字段、拒单%、Walk 成本、华住 699、STR Denials Index。未写钟点房。未发布网站。全文：`research-log/2026-08-24-0217-denials-playbook.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C24-02a | P43 口头拒单剧本 | `advisor-playbooks/verbal-denials.md` | **drafted** |
| C24-02b | 主卡复用 | `recommendations/dont-raise-on-verbal-denials.md` | **appended**（剧本见 P43；不重写） |
| C24-02c | 仿真 | `cases/sim-2026-fo-turned-away-no-log.md` | **drafted**（Simulation） |
| C24-02d | 研究笔记 | `research-log/2026-08-24-0217-denials-playbook.md` | **drafted** |
| C24-02e | 问题树 | `diagnosis/problem-tree.md` §49 | **appended** |
| C24-02f | T03 地图 | `curriculum/knowledge-map.md` | **appended** |
| C24-02g | P03/P33/P42 指针 | 三剧本文末 | **appended**（不改信号表） |
| C24-02h | 指标一行 | `metrics/denials-regrets.md` | **appended**（剧本见 P43） |

调用：用户说「前台说今晚赶过好几拨人，要不要涨到 899？」→ **P43**：无日志 → **Hold BAR**，明天起记（日期/件数/房型/原因）。限制夜 → P33 先松（Peak MinLOS → P40，不解也不自动涨）。价流失+Behind → 不涨；弱日才 P02 围栏。真容量拒单 + Pace Ahead + Remaining 紧 → **离开本剧走 P03/P09**，不是本剧一夜 +15%。上门已成交 → P42。禁一夜 ±15%。顾问不操作 PMS。

三句：前台说赶过人，没有日志就不能当需求去涨价；拒单要记日期、房型、原因；限制挡掉的先松限制，不是先加价；真容量拒单且剩余紧、Pace Ahead，才离开本剧走卖完保护。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六 20:17 DTA=0、OTB 65.6% 略 Behind、Remaining **62 不紧**、无日志、BAR 799、拟议 899、口头「5 拨」仅该卷、1 张 walk-in@799 → **形 A**；**Hold 779–799 首选 799**；开始记日志；拒绝 899；拒绝一夜 ±15%；不进 P03。5 拨/899 仅该卷。

兼容：P03 用 Remaining+Pace 不开故事。P09 Ahead 仍要剩余。P33 限制制造假拒单。P40 Peak MinLOS 可能故意。P42 walk-in 成交 ≠ denial。T19/T20 不发明 699。禁止一夜 ±15%。

刻意不补：钟点房/day-use；中国 PMS 字段 Fact；拒单%；Walk 金额；华住 699；Cornell 教材摘录；STR Denials Index；第二张决策卡。


## 来源与复盘 · 04:17 · P42/P43 源组 + 近 6 槽读卡（2026-08-24 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P43 / 拒单指标 / unconstrained 理论正文。未编前台折扣表、拒单%、STR Denials Index、华住 699、佣金%、Walk、4.7。未写新 RMS。未发布网站。全文：`research-log/2026-08-24-0417-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| E24-04a | 来源与复盘日志 | `research-log/2026-08-24-0417-sources-recap.md` | **drafted** |
| E24-04b | source-map §20 | `sources/source-map.md` | **appended**（P42/P43；HSMAI BAR / TCRM 本轮重试打开；IDeaS dirty-data 交叉 §12 不重复行） |
| E24-04c | Backlog 下一轮 | `backlog/research-backlog.md` | **updated** |

新打开：HSMAI Academy BAR **本轮重试打开**；TCRM Denial/Regret/Walk-in **本轮重试打开**。  
新目录化（22:17/00:17/02:17 已开、首次进 §20）：Altexsoft Rack/BAR；HotelTechUpdate after 6pm；Duetto Glossary / Lost Business；HSMAI Unconstrained Demand；Xotels unconstrained；RoomMaster walk-in（C，分档不进启发式）；HSMAI Americas CDO walk-in；HSMAI Forecasting 课纲；HSMAI Global different forecasts。STR Glossary 已在表（**无** Denial 词条 / **无** Denials Index）。IDeaS dirty-data **已在 §12**（2026-08-22 打开），不重复行。

复盘：**无真矛盾。无 needs_revision。** IDeaS dirty-data vs 本库代理 = **兼容**（诊断日志 ≠ Demand 引擎 / 预测输入；指标卡已写代理 ≠ Unconstrained 本身，不加一行）。P42 vs P05 = **两道围栏**（OTA dump ≠ 前台口价；同一 399 禁止前台对齐）。P42 Hold 799 vs P05 战术 699–719 = **两渠道可同时存在**。P43 vs P03/P09：仿真 Remaining 62、略 Behind → Hold，不进卖完保护。P43 vs P33 vs P40：限制制造的拒单先松；Peak MinLOS 故意留着，不解也不自动涨。P43 vs P42：上门已成交 = 捕获不是 denial。20:17 P40/P41 无新冲突。

仍 NV：中国 PMS 拒单字段（NV-DEN-01）；拒单%（NV-DEN-02）；STR Denials Index（词表无）；前台折扣表（NV-WI-01）；美团今夜 SOP（NV-WI-02）。**钟点房仍空。** 4.7；取消截止点；月租价表；H6/H7/H9。Rainmaker/EZRMS 不编。

调用：今晚 walk-in 不跟 OTA 今夜价，前台 Hold 799；赶过人无日志不涨，Remaining 不紧不进 P03；拒单日志是诊断不是 RMS Demand 输入。

## 侦察 · 06:17 · P44 钟点/day-use 占晚房（2026-08-24 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P43 正文（P05/P42 仅文末一行）。未编美团/携程钟点 SOP、保洁分钟、199 行情、佣金%、华住 SOP。未发布网站。全文：`research-log/2026-08-24-0617-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S24-06a | P44 钟点/day-use 剧本 | `advisor-playbooks/day-use-hourly.md` | **drafted** |
| S24-06b | 决策卡 | `recommendations/dont-dump-overnight-for-dayuse.md` | **drafted** |
| S24-06c | 仿真 | `cases/sim-2026-dayuse-199-vs-sat-bar.md` | **drafted**（Simulation） |
| S24-06d | 侦察 | `scout/2026-08-24-0617.md` | **drafted** |
| S24-06e | 研究笔记 | `research-log/2026-08-24-0617-scout.md` | **drafted** |
| S24-06f | 问题树 | `diagnosis/problem-tree.md` §50 | **appended** |
| S24-06g | T05/T06 地图 | `curriculum/knowledge-map.md` | **appended** |
| S24-06h | P05/P42 指针 | 两剧本文末 | **appended**（不改 72/24/6h 表、不改口价表） |

调用：用户说「下午钟点卖得很火，晚上散客还接不接？」「钟点 199 会不会砸晚班 BAR？」→ **P44**：先问这间晚上还能不能卖过夜。能交回才是增量。高峰/Ahead/剩余偏紧 → **关或紧限额** 钟点；过夜 BAR **Hold 779–799 首选 799**。挡夜（晚离店/过夜钟点/房态关到次日）当便宜过夜，不开。拒绝把 199 写成过夜 BAR。弱平日能交回或晚市冰且净过 T19（含加一次 HK）才开。OOO 未释放走 P37。禁一夜 −15%。顾问不操作 PMS/钟点渠道。

三句：钟点房先问这间晚上还能不能卖过夜，能交回才是增量；晚上还卖 799，不要用 199 钟点把那晚占掉；钟点价不是过夜 BAR，别把 199 写成新门市价。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六 10:17、OTB 过夜 82.2% Ahead、Remaining 32 偏紧、BAR 799、销售要 32 间钟点 199 到 20:00（挡 15:00 晚到）→ **形 A+B**；**关钟点**；过夜 **Hold 779–799 首选 799**；拒绝 199 当过夜；拒绝 BAR→199。弱周二能交回仅反事实。199/799 仅该卷。

兼容：P05 过夜渠道 dump ≠ 钟点产品。P42 前台过夜口价 ≠ 钟点客。P40 同一瓶颈夜可被 Sat-only 或钟点偷。P37 OOO 不是钟点库存。T19 加一次 HK；挡夜扣过夜贡献。T20 不砸过夜地板。禁止一夜 −15%。

刻意不补：美团/携程钟点 SOP；保洁分钟 Fact；199 行情 Fact；佣金%；华住 SOP；点弹性；4.7；Walk；抖音；HSMAI Playbook 正文菜谱。


## 理论 · 08:17 · Day-use vs 过夜 OCC 分子（2026-08-24 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P44 正文（P44/P37/P03 仅文末一行）。未编美团/携程钟点 SOP、保洁分钟、199 行情、佣金%、中国 6pm 营业线。未写第二本剧本。未发布网站。全文：`research-log/2026-08-24-0817-dayuse-occ.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T24-08a | 理论：一间房可卖两次；108% ≠ 过夜更紧 | `theory/day-use-inventory.md` | **drafted** |
| T24-08b | 短决策卡：不按钟点 OCC 涨过夜 | `recommendations/dont-raise-overnight-off-dayuse-occ.md` | **drafted** |
| T24-08c | OCC Diagnose 追加 | `metrics/occ.md` | **appended**（S 公式不改） |
| T24-08d | Inventory Diagnose 追加 | `metrics/inventory.md` | **appended**（Sold 声明；Remaining:=过夜） |
| T24-08e | 研究笔记 | `research-log/2026-08-24-0817-dayuse-occ.md` | **drafted** |
| T24-08f | 问题树 | `diagnosis/problem-tree.md` §50 追加行 | **appended** |
| T24-08g | T05/T06 地图 | `curriculum/knowledge-map.md` | **appended** |
| T24-08h | P44/P37/P03 指针 | 三文末一行 | **appended**（不改信号表） |

调用：用户说「OCC 已经 108%，今晚是不是该再涨？」且 8 个点是钟点再卖 → **先拆过夜 Sold**。Overnight Remaining := 过夜可售。不自动 Increase 过夜 BAR。过夜真紧才 P01/P03；钟点挡晚走 P44。STR：同日再卖 OCC 可 >100%（S）。USALI 更正：纯 Day-Use 不进 Sold（A，与 STR 分子冲突照记）。中国 6pm NV。

三句：OCC 过 100% 先问是不是白天钟点又卖了晚班，不是自动再涨过夜价；钟点再卖会把 OCC 抬高，过夜剩余可能一点没紧；过夜 ADR/OCC 要跟钟点拆开，别拿混在一起的 108% 去对标。

兼容：P44 关高峰钟点，本卡解释 OCC 为什么撒谎。P37 缩分母 ≠ 胀分子。P03 Remaining := 过夜可售。T19 加一次 HK。T20 不把 199 写成过夜地板。禁止一夜 ±15%。

刻意不补：美团/携程钟点 SOP；保洁分钟 Fact；199 行情 Fact；佣金%；华住 SOP；中国 6pm 营业线；第二本剧本；点弹性。

## 案例与剧本 · 10:17 · P45 早会口播过程（2026-08-24 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P44 正文。未碰 `metrics/occ.md` / `theory/day-use-inventory.md`。未编华住早会 SOP、Cornell 日会讲义、Toolkit Daily 任务原文。未发布网站。全文：`research-log/2026-08-24-1017-daily-brief.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C24-10a | P45 早会 / Daily Revenue Brief | `advisor-playbooks/daily-revenue-brief.md` | **drafted** |
| C24-10b | 决策卡 | `recommendations/one-action-from-morning-huddle.md` | **drafted** |
| C24-10c | 仿真 | `cases/sim-2026-monday-huddle-gm-occ.md` | **drafted**（Simulation） |
| C24-10d | 研究笔记 | `research-log/2026-08-24-1017-daily-brief.md` | **drafted** |
| C24-10e | 问题树 | `diagnosis/problem-tree.md` §51 | **appended** |
| C24-10f | X-ORG / X-DIAG 地图 | `curriculum/knowledge-map.md` | **appended** |
| C24-10g | 日常方法一行 | `theory/rm-daily-routine.md` | **appended**（不改 §1–7 周会四圆） |

调用：用户说「早会到底看什么、说什么？」「店长要 OCC，销售要促销，你三分钟讲完。」→ **P45**：默认 10 分钟三拍——今晚+三天过夜曲线、一个诊断、一个动作。店长要 OCC → 回可售剩余（扣 OOO、不混钟点）和 Pace，不拿虚荣入住率切价。销售要今夜特价 → **P18**；出资未知且深折 → 不报。不要为会顺砍 BAR。禁一夜 −15%。顾问不在会上操作 PMS。书面 Brief 十节仍走过程文件；周会仍走 HSMAI 四圆。

三句：早会三拍：今晚+三天曲线、一个诊断、一个动作，不要十二件事都讲；店长要 OCC，回可售剩余和 Pace，不要拿虚高入住率切价；销售要今夜特价，走报名闸，不要为了会开得顺把 BAR 砍了。

仿真：180 间城市店 **Simulation**（非真店）、8/24 周一 10:17 早会、过夜 OTB 143/175=81.7% Pace On vs STLY 82.3%、Remaining **32 OK**、OOO **5**、昨天钟点 8 已交回、BAR 799、销售要 399 出资未知 → **形 A+B+D**；**不砍**；解释过夜 Remaining；**Hold 779–799 首选 799**；P18 Skip；一个观察 24h Pickup；拒绝一夜 −15%。399/82%/799 仅该卷。

兼容：T20 预算≠砍 BAR。GM OCC 虚荣 ≠ P37/P44 分母（早会仍扣 OOO、不混钟点）。P18 促销闸。P43 口头拒单不是会场主叙事。一个动作，不是任务堆。顾问不跑 PMS。

刻意不补：华住/锦江早会 SOP；Cornell 日会讲义；Toolkit Daily 任务原文；晨会视频转录；重写 P01–P44；occ.md / day-use-inventory.md。


## 来源与复盘 · 12:17 · P44/P45/day-use 理论（2026-08-24 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P45 / day-use 理论 / occ.md 正文（P44 仅文末一行 USALI）。未编美团/携程钟点 SOP、保洁分钟、199 行情、佣金%、6pm 中国、华住早会 SOP。未发明 STR×USALI 调和公式。未发布网站。全文：`research-log/2026-08-24-1217-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R24-12a | 来源与复盘 log | `research-log/2026-08-24-1217-sources-recap.md` | **drafted** |
| R24-12b | 源表 §21 | `sources/source-map.md` §21 | **appended** |
| R24-12c | P44 文末一行 | `advisor-playbooks/day-use-hourly.md` §13 | **appended**（不改 Advise） |

复盘：**无真矛盾。无 needs_revision。** STR 同日再卖 OCC 可 >100%（S）vs USALI 12e GFC 纯 Day-Use 不进 Sold/Occupied（A）= 理论 §3 已照记；**P44 Advise 两套都成立**（高峰关钟点；不按 108% 涨过夜 BAR）。不是 STR-only 误设。P44 缺「USALI 下纯钟点本不进 OCC，更不能当过夜紧」→ 文末一行，不重写正文。

P44 vs P05 vs P42 = **三件产品**（小时 / OTA 过夜 dump / 前台过夜口价），禁止叠成同一个低价过夜 BAR。P45 vs T20/P01 = GM OCC 虚荣 vs Remaining+Pace，Hold 同向。10′ huddle = Hypothesis，HSMAI 周会 ≤60′ 四圆 = A，标了就不是冲突。P45 vs P18 = 399 出资未知 Skip。P44 vs P37 = 胀分子 ≠ 缩分母，Advise 相反已标。P45 仿真 82% / 5 OOO / Remaining 32：32 = 175−143，18% ≫ P03 15% 紧闸；5 维修不是 dump 燃料 → 与 P37 兼容。04:17 P42/P43 无新冲突。

本轮薄页重开：HFTP USALI 12e Day-Use FAQ（GFC 更正仍在）。源进 §21（STR day-use 用途交叉 §15/§16；HFTP PDF+FAQ；HSMAI Ancillary 新闻稿；Mews/Dayuse/Prostay Vendor；HSMAI APAC huddle / Academy / Toolkit 入口；Cornell HADM 6050 无 huddle）。无新 RMS 官方页。

仍 NV：美团/携程钟点 SOP（NV-DU-01）；保洁分钟（NV-DU-02）；199 行情（NV-DU-03）；钟点佣金%（NV-DU-04）；华住钟点 SOP（NV-DU-05）；STR day-use 占比（NV-DU-06）；中国 6pm 营业线（NV-DU-OCC-03）；PMS 钟点是否进 Sold；Cornell 日会 SOP；华住早会 SOP；Toolkit Daily 条目正文；协会法定每日分钟数。拒单字段/% / STR Denials Index 仍 NV（§20）。H6/H7/H9。Rainmaker/EZRMS 不编。

调用：高峰关钟点，过夜 Hold 799；108% 先拆过夜 Remaining，USALI 下纯钟点更不能当过夜紧；早会三拍，店长要 OCC 回剩余和 Pace，399 出资未知不报。

## 侦察 · 14:17 · P46 提前退房 / 高峰续住（2026-08-24 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P45 正文（P05/P24/P40/P42 仅文末一行）。未编华住 SOP、Marriott 中国早离费表、佣金%、Walk 金额、399 行情。未发布网站。全文：`research-log/2026-08-24-1417-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C24-14a | P46 Early Departure / Stayover | `advisor-playbooks/early-departure-stayover.md` | **drafted** |
| C24-14b | 决策卡 | `recommendations/dont-dump-on-early-depart.md` | **drafted** |
| C24-14c | 仿真 | `cases/sim-2026-early-depart-8-vs-sat-bar.md` | **drafted**（Simulation） |
| C24-14d | 侦察 | `scout/2026-08-24-1417.md` | **drafted** |
| C24-14e | 研究笔记 | `research-log/2026-08-24-1417-scout.md` | **drafted** |
| C24-14f | 问题树 | `diagnosis/problem-tree.md` §52 | **appended** |
| C24-14g | T07 地图 | `curriculum/knowledge-map.md` | **updated**（Early Departure + Extension → P46；Walk 成本仍 NV） |
| C24-14h | P05/P24/P40/P42 指针 | 四剧本文末 | **appended**（不改 72/24/6h 表、不改赶客程序、不改 MinLOS 表、不改口价表） |
| C24-14i | 超售框架一行 | `overbooking/overbooking-framework.md` §12 | **appended**（不改 §1 公式） |

调用：用户说「今天有 8 间提前退房，今晚要不要开特价？」「客人要续住高峰周六」→ **P46**：提前退房是库存回来，不是需求死了。先重算 Remaining。高峰/Ahead/仍紧 → **Hold BAR 779–799 首选 799**。HK 未转房 ≠ walk-in。高峰续住拒或只按公开 BAR；禁止老客 399。会赶客 → P24。弱市 leftover+ED+市场弱才 P05 围栏。Due Out ≠ 空。禁一夜 −15%。顾问不操作 PMS。

三句：提前退房是库存回来，不是需求死了，先重算可售剩余再决定要不要走 P05；高峰/剩余仍紧/市场仍紧 → 不因为多出几间就开特价，房务未转房不等于当前可卖 walk-in；高峰续住是在和到店抢房，满房/超售默认拒或只按公开 BAR 接，不打折扣客价，会赶客就走 P24。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六 14:17、OTB 97.8% Ahead、早离前 Remaining 4、ED 8 → 身份 12 但 8 脏待 HK、BAR 799、销售要 399 → **形 A**；**Hold 779–799 首选 799**；拒绝 399 dump；拒绝 399 续住占已派到店房（否则 P24）。399/799 仅该卷。

兼容：P05 leftover-弱才 dump ≠ 早离回库自动 dump。P24 跑已发生 Walk；P46 尽量避免走进去。P40 新订 Sat-only ≠ 在店续住。P42 干净空房口价 ≠ 脏 ED。P38 早离费是 rate-rule，不是收窗再 dump。T07 五流量同一套。Walk 成本仍 NV。禁止一夜 −15%。

刻意不补：House-use/Comp 专剧；政府协议续住；华住/锦江 SOP；Marriott 中国费表；Walk 金额；佣金%；399 行情 Fact；点弹性；Rothstein/Bitran；eCornell IMPACT $300 当中国成本。

## 理论 · 16:17 · T-Comp Complimentary / House Use（2026-08-24 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P46 / P37 / occ 公式 / adr 公式 / P44 / P46 正文（occ/adr 仅各一行误读；capacity-ooo 仅文末一行）。**未写 P47 满本剧本。未写政府协议价。** 未编华住 SOP / 中国 PMS 字段名 / Comp % / Walk 成本 / 399 行情 Fact。全文：`research-log/2026-08-24-1617-comp-house-use.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T24-16a | 理论：gratis 占物理房、不进 STR 历史 Sold | `theory/complimentary-house-use.md` | **drafted** |
| T24-16b | 指标：Comp RN / Paid OCC / PMS vs STR 缺口 | `metrics/complimentary-house-use.md` | **drafted**（Hypothesis 尺须声明） |
| T24-16c | 决策卡：不按 Comp OCC 涨、不 dump Comp 占着的房 | `recommendations/dont-raise-on-comp-occ.md` | **drafted** |
| T24-16d | Simulation · 周六 PMS OCC 92% / 10 Comp | `cases/sim-2026-comp-occ-92-sat.md` | **drafted**（Simulation） |
| T24-16e | 研究笔记 | `research-log/2026-08-24-1617-comp-house-use.md` | **drafted** |
| T24-16f | 问题树 | `diagnosis/problem-tree.md` §53 | **appended** |
| T24-16g | T06/T07 地图 | `curriculum/knowledge-map.md` | **appended**（Comp/HU theory+card；永久 HU 仍 P37；Walk 成本仍 NV；政府价仍未写） |
| T24-16h | 指标树指针 | `metrics/metric-tree.md` §1.5 / §17 | **appended**（不改 Sold/OCC/ADR 公式） |
| T24-16i | occ / adr 误读各一行 | `metrics/occ.md` `metrics/adr.md` | **appended**（S 公式不改） |
| T24-16j | 永久 HU 指针 | `theory/capacity-ooo.md` 文末 | **appended**（不重写 OOO 规则） |

调用：用户说「OCC 92% 还要不要涨」且 10 间是免费/自用 → **先拆无关 Comp**。PMS OCC 因 Comp 虚高 → **不涨 BAR**。看付费剩余 + Pace（P01/P03/P45）。ADR 因 Comp 进分母而掉 → **不砍不补涨修报表**；重算付费 ADR。Comp 占着 ≠ leftover dump（P05）。促销 1+1 / 团 50+1 → STR **计入** Sold。永久员工公寓 6+ months → **P37**。Forward OTB 可含 Comp，历史 Sold 不含。禁一夜 −15%。顾问不操作 PMS。不写 P47。

三句：STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、10 间无关 Comp、PMS OCC 92%、付费 OCC ~86%、Remaining 14、BAR 799、GM 要 +100 → **Hold 779–799 首选 799**；拒绝 899；拒绝修 ADR；拒绝 dump Comp。10/799 仅该卷。

兼容：P37 缩分母 ≠ 本卡 $0 占房不进 Sold。P44 钟点胀分子。P45 虚荣 OCC（本卡是原因之一）。P05 leftover 是付费空房。P46 ED 还的是付费房。Walk 成本仍 NV。禁止一夜 −15%。

刻意不补：P47 满本剧本；政府协议价；华住 SOP；中国 PMS 字段名；Comp %；Walk 金额；399 行情 Fact；重写 P37/occ 公式/P46。

## 案例与剧本 · 18:17 · P47 Complimentary / transient House Use（2026-08-24 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 theory/metric/决策卡正文（主卡复用 `dont-raise-on-comp-occ.md`）。未重写 P01–P46 正文（P37/P05/P45 仅文末一行）。未写政府协议价。未编华住 SOP / 中国 PMS 字段名 / Comp % / Walk 成本 / 399 行情 Fact。未发布网站。未 git commit。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C24-18a | P47 Complimentary / transient House Use | `advisor-playbooks/complimentary-house-use.md` | **drafted** |
| C24-18b | 决策卡（复用，不重写） | `recommendations/dont-raise-on-comp-occ.md` | **reused** |
| C24-18c | 仿真（复用 + 十节追加） | `cases/sim-2026-comp-occ-92-sat.md` | **appended**（Simulation） |
| C24-18d | 问题树 | `diagnosis/problem-tree.md` §53 | **appended**（P47 指针） |
| C24-18e | T06/T07 地图 | `curriculum/knowledge-map.md` | **updated**（Comp/HU 现有 P47；永久 HU 仍 P37；政府价仍未写；Walk 成本仍 NV） |
| C24-18f | P37/P05/P45 指针 | 三剧本文末 | **appended**（不改 OOO 三形、不改 72/24/6h 表、不改早会三拍） |
| C24-18g | 理论头一行 | `theory/complimentary-house-use.md` | **header only**（禁止写满本 P47 → P47 drafted 18:17；§0–body 不改） |

调用：用户说「OCC 92% 还要不要涨」且里面有免费房 / 「ADR 掉了要不要补涨」/ 「空着的其实是请客房今晚砸不砸」→ **P47**：先拆无关 Comp。不按虚高 PMS OCC 涨 BAR。不 dump Comp 占着的房。不按 $0 分母修 ADR。付费剩余 + Pace 走 P01/P03。促销送夜进 STR Sold。永久 HU → P37。高峰劝停新送免费（Hypothesis，无 SOP）。禁一夜 −15%。顾问不操作 PMS。

三句：STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、10 间无关 Comp、PMS OCC 92%、付费 OCC ~86%、Remaining 14、BAR 799、GM 要 +100 → **Hold 779–799 首选 799**；拒绝 899；拒绝修 ADR；拒绝 dump Comp。第二拍：销售要 399 因「还空着」但空的是 10 间 Comp → 拒绝 dump。10/92%/799/399 仅该卷。

兼容：P37 缩分母 ≠ 本剧 $0 占房不进 Sold。P44 钟点胀分子。P45 虚荣 OCC（本剧是原因之一）。P05 leftover 是付费空房。P46 ED 还的是付费房。Walk 成本仍 NV。禁止一夜 −15%。无 needs_revision。

刻意不补：政府协议价；华住 SOP；中国 PMS 字段名；Comp %；Walk 金额；399 行情 Fact；重写 theory/metric/决策卡 / occ 公式 / adr 公式 / P01–P46 正文。

## 来源与复盘 · 20:17 · Comp/HU + P46 源组（2026-08-24 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P47 / T-Comp / occ.md 正文。未写 P48 政府价。未编华住政务价 / 中国现行住宿费限额表 / Comp % / Walk 成本 / 399 行情 Fact。未发布网站。未 git commit。全文：`research-log/2026-08-24-2017-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R24-20a | 来源与复盘 log | `research-log/2026-08-24-2017-sources-recap.md` | **drafted** |
| R24-20b | 源表 §22 | `sources/source-map.md` §22 | **appended** |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。P37 缩 Available vs P47 $0 占用不进 STR Sold = 分母 vs 分子，Advise 都是不要按被扭曲的 OCC 定价。P44 钟点胀分子 ≠ P47 Comp。P45 虚荣 OCC 仪式，P47 是原因之一。P05 leftover / P46 ED 回库 / P47 Comp 占用 = 三件 leftover 误读。STR 历史 Sold 不含无关 Comp vs Forward OTB 可含 = 已在 P47 三句。STR vs USALI day-use（12:17）仍成立。P46 与 P47 同 Hold 779–799 首选 799、病因不同。16:17 不写 P47 → 18:17 写 P47 = 顺序填槽。

本轮重开：CoStar Glossary / Historical / Forward（US + GB slug 都开）。OPERA Cloud Check Out Early、OPERA 5 早离金额、Due Out、Mews 超售、Marriott 早离费。Infor 声称 URL 先 timeout、重试打开。GSA per diem + FTR 26-01（**US Fact**，标准 lodging $110）。中国 531 号差旅办法官方页打开，**现行限额表仍 NV**。HotStats / HFTP USALI 只指针 §17/§21。无新 RMS 官方页。

仍 NV：中国现行住宿费限额表；政务协议价目录；华住政务价（不编）；中国 PMS Comp 字段；Walk 成本；STR Occupied=Stayover+Arrivals 官方页。H6/H7/H9。Rainmaker/EZRMS 不编。

调用：P47 先拆无关 Comp，不按虚荣 OCC 涨、不 dump Comp；P46 早离先重算 Remaining，高峰不开 399；政府价未写，GSA 不是中国。

## 理论 · 00:17 · T-Gov Government / Negotiated Rate（2026-08-25 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P47 正文（P47/P31/P37 仅文末一行）。**未写 P48 playbook。** 未把 GSA $110 当中国 BAR。未编华住政务 398 / 中国现行住宿费限额表数字。未发布网站。未 git commit。全文：`research-log/2026-08-25-0017-gov-rate.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T25-00a | 理论：政务/差旅协议 = 合同价，不是 BAR，不是 Comp | `theory/government-negotiated-rate.md` | **drafted** |
| T25-00b | 决策卡：不把 BAR 锚到协议价/GSA | `recommendations/dont-anchor-bar-to-gov-rate.md` | **drafted** |
| T25-00c | 轻指标：协议占用份额 / 非协议剩余 | `metrics/government-negotiated-rate.md` | **drafted**（Hypothesis；无 STR Government 公式） |
| T25-00d | Simulation · 周六协议 40@480 / PMS OCC 92% | `cases/sim-2026-gov-rate-sat-blackout.md` | **drafted**（Simulation） |
| T25-00e | 研究笔记 | `research-log/2026-08-25-0017-gov-rate.md` | **drafted** |
| T25-00f | 问题树 | `diagnosis/problem-tree.md` §54 | **appended** |
| T25-00g | T10/T06 地图 | `curriculum/knowledge-map.md` | **appended**（T-Gov drafted；P48 仍未写；限额表 NV） |
| T25-00h | 源表 | `sources/source-map.md` §23 | **appended**（GSA/531 已在 §22，00:17 复核） |
| T25-00i | **P48 playbook** | — | **仍未开** |

调用：用户说「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」→ **T-Gov / 决策卡**：有房价的合同价。不按协议 OCC 涨 BAR。拒绝 BAR=协议价或 GSA $110。有房价不进 P47。高峰建议限额/blackout（Hypothesis）。本店协议价没给就问。限额表 NV 不引用。禁一夜 −15%。顾问不操作 PMS。**不写 P48。**

三句：政务/差旅协议是有房价的合同价，不是 P47 免费房；OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。不要把 GSA $110 或任何未打开的中国限额表当成中国 BAR 锚；本店协议价用户没给就问，不编。高峰/周末：先做置换（付费 BAR 是否被协议占满）。协议可 blackout / 限额 / 拒超售（Hypothesis）；禁止为了冲 OCC 把 BAR 砍到协议价。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、协议 40@480（发明）、PMS OCC 92%、非协议 Remaining 14、BAR 799、拟议 899 与 BAR→480 → **Hold 779–799 首选 799**；建议该晚限额/blackout 协议；拒绝 480；拒绝当 Comp。40/480/92% 仅该卷。GSA $110 未当中国 BAR。

兼容：P47 $0 ≠ 本卡有房价。P37 永久 HU ≠ 协议价。P31 机组 ≠ 政务。P05 leftover 不是 BAR→协议价。P01/P03 看非协议 remaining。无 needs_revision。

刻意不补：P48 满本剧本；中国限额表数字；华住政务 398；STR Government KPI；重写 P01–P47 正文。

## 案例与剧本 · 02:17 · P48 Government / per-diem / 政务协议（2026-08-25 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 theory/metric/决策卡正文（主卡复用 `dont-anchor-bar-to-gov-rate.md`）。未重写 P01–P47 正文（P47/P31/P37/P26 仅文末一行）。未把 GSA $110 当中国 BAR。未编华住政务 398 / 中国现行住宿费限额表数字。未发布网站。未 git commit。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-02a | P48 Government / per-diem / 政务协议 | `advisor-playbooks/government-negotiated-rate.md` | **drafted** |
| C25-02b | 主卡复用（不重写） | `recommendations/dont-anchor-bar-to-gov-rate.md` | **reused** |
| C25-02c | Simulation 复用 + 十节 | `cases/sim-2026-gov-rate-sat-blackout.md` | **appended**（Simulation） |
| C25-02d | 问题树 | `diagnosis/problem-tree.md` §54 | **appended**（P48 指针） |
| C25-02e | T10/T06 地图 | `curriculum/knowledge-map.md` | **updated**（T-Gov 现有 P48；限额表仍 NV；Walk 成本仍 NV） |
| C25-02f | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P48 行） |
| C25-02g | 理论头一行 | `theory/government-negotiated-rate.md` | **header only**（禁止写满本 P48 → P48 drafted 02:17；§0–body 不改） |
| C25-02h | 研究 backlog | `backlog/research-backlog.md` M23 | **appended**（playbook drafted；限额表仍 NV） |

调用：用户说「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」→ **P48**：有房价的合同价。不按协议 OCC 涨 BAR。拒绝 BAR=协议价或 GSA $110。有房价不进 P47。高峰建议限额/blackout（Hypothesis，问合同）。本店协议价没给就问。限额表 NV 不引用。禁一夜 −15%。顾问不操作 PMS。

三句：政务/差旅协议是有房价的合同价，不是 P47 免费房；OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。不要把 GSA $110 或任何未打开的中国限额表当成中国 BAR 锚；本店协议价用户没给就问，不编。高峰/周末：先做置换（付费 BAR 是否被协议占满）。协议可 blackout / 限额 / 拒超售（Hypothesis）；禁止为了冲 OCC 把 BAR 砍到协议价。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、协议 40@480（发明）、PMS OCC 92%、非协议 Remaining 14、BAR 799、拟议 899 与 BAR→480 → **Hold 779–799 首选 799**；建议该晚限额/blackout 协议；拒绝 480；拒绝当 Comp。第二拍拒绝「跟差旅标准」。40/480/92% 仅该卷。GSA $110 未当中国 BAR。限额表仍 NV。

兼容：P47 $0 ≠ 本剧有房价。P37 永久 HU ≠ 协议价。P31 机组 ≠ 政务。P26 企业周末漏 ≠ 政务。P05 leftover 不是 BAR→协议价。P01/P03 看非协议 remaining。无 needs_revision。

刻意不补：中国限额表数字；华住政务 398；STR Government KPI；重写 theory/metric/决策卡 / P01–P47 正文。

## 侦察 · 06:17 · P49 Loyalty Award / Elite Upgrade（2026-08-25 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P48 正文（P47/P13/P23 仅文末一行）。未编华住积分结算表 / 报销%。未把 BW 90/70/40 当中国默认。未发明 STR Award OCC。未写 P50 会带房。未发布网站。未 git commit。全文：`research-log/2026-08-25-0617-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-06a | Scout | `scout/2026-08-25-0617.md` | **drafted** |
| C25-06b | P49 Loyalty Award / Elite Upgrade | `advisor-playbooks/loyalty-award-upgrade.md` | **drafted** |
| C25-06c | 决策卡 | `recommendations/dont-raise-on-award-occ.md` | **drafted** |
| C25-06d | 轻指标 | `metrics/loyalty-award-upgrade.md` | **drafted**（Hypothesis；无 STR Award 公式） |
| C25-06e | Simulation · 周六兑房 12 + SA 升 8 / PMS OCC 92% | `cases/sim-2026-award-upgrade-sat.md` | **drafted**（Simulation） |
| C25-06f | 研究笔记 | `research-log/2026-08-25-0617-scout.md` | **drafted** |
| C25-06g | 问题树 | `diagnosis/problem-tree.md` §55 | **appended** |
| C25-06h | T06/T10/T13 地图 | `curriculum/knowledge-map.md` | **appended**（限额表仍 NV；Walk 仍 NV；华住积分结算 NV） |
| C25-06i | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P49 行） |
| C25-06j | 研究 backlog | `backlog/research-backlog.md` | **appended** |

调用：用户说「今晚积分免房 12 间，OCC 92% 还要不要涨」「金卡都要免费升套房，套房卖空了散客怎么办」→ **P49**：兑房仍占物理房。不按兑房 OCC 涨 BAR。高峰停非确认兑房与空间可用升房（Hypothesis）。套房留给 BAR。Hold 779–799 首选 799。弱市可接兑房，仍不把兑房价写成 BAR。兑房 ≠ P47。升级 ≠ P13。会员 BAR ≠ 免费升。禁一夜 −15%。顾问不操作 PMS。

三句：积分免房/兑房仍占物理房；PMS OCC 因兑房虚高 → 不按那张 OCC 涨 BAR。先算付费剩余。高峰/付费剩余紧：停或限额非确认的积分房与空间可用免费升房（Hypothesis；品牌硬规则 NV 就条件化）。套房留给能付 BAR 的人。Hold 779–799 首选 799。弱市兑房可能是增量（报销可能 > 空房贡献）但不要把兑房价写成公开 BAR；免费升级弱市可以、高峰不行。兑房 ≠ P47 无关请客；升级 ≠ P13 付费房型差。

仿真：180 间城市店 **Simulation**（非真店）、8/29 周六、兑房 12、SA 升套房 8、PMS OCC 92%、付费 Remaining 14、BAR 799、GM 要 +100、FO 要继续升 → **Hold 779–799 首选 799**；停 SA 升级；不按 92% 涨；不 dump。12/8/92%/799 仅该卷。华住结算未编。STR 兑房进 Sold = NV。

兼容：P47 $0 无关请客 ≠ 本剧可能有报销。P13 付费差 ≠ 免费升。P23 会员 BAR ≠ 免费升。P31 机组 ≠ 积分客。P48 政务 ≠ 兑房。P05 leftover 不是 BAR→399。P01/P03 看付费 remaining。无 needs_revision。

刻意不补：P50 会带房；华住积分结算表；BW % 当中国默认；Marriott 中国网格；STR Award OCC；重写 P01–P48 正文。

## 理论 · 08:17 · T-Meet 会带房 / meeting+rooms（2026-08-25 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P49 正文（P10/P30/T18 卡/`group-displacement.md` 仅文末一行）。**未写 P50 playbook。** 未编华住 SOP / 餐毛利 / 厅租行情 / 399 行情 Fact。未把 RevPAS 当 BAR。未发布网站。未 git commit。全文：`research-log/2026-08-25-0817-meeting-rooms.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T25-08a | 理论：会带房先拆厅/会 vs 餐 vs 占房 | `theory/meeting-with-rooms.md` | **drafted** |
| T25-08b | 决策卡：不把 BAR dump 成会带房价 | `recommendations/dont-dump-bar-for-meeting-rooms.md` | **drafted** |
| T25-08c | 轻指标：房块 vs 人数 / pickup vs block / 厅 vs 客房 | `metrics/meeting-with-rooms.md` | **drafted**（Hypothesis；无 RevPAS-as-BAR） |
| T25-08d | Simulation · 80 人 / 10@399 周二+周六两拍 | `cases/sim-2026-meeting-10-rooms-sat.md` | **drafted**（Simulation） |
| T25-08e | 研究笔记 | `research-log/2026-08-25-0817-meeting-rooms.md` | **drafted** |
| T25-08f | 问题树 | `diagnosis/problem-tree.md` §56 | **appended** |
| T25-08g | T13/T18 地图 | `curriculum/knowledge-map.md` | **appended**（T-Meet drafted；P50 仍未写；会带房模板 NV） |
| T25-08h | 源表 | `sources/source-map.md` §24 | **appended**（STR P&L / RevPAS 已在 §12，08:17 复核） |
| T25-08i | **P50 playbook** | — | **仍未开** |

调用：用户说「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」→ **T-Meet / 决策卡**：先拆三笔。无厅+餐贡献 → 不 Accept 低价房块。工作日可留会、客房 Counter。高峰 Counter/拒房留会。Hold BAR 779–799 首选 799。禁止一夜 −15%。顾问不操作 PMS/宴会系统。**不写 P50。**

三句：会带房先拆三笔：厅/会 vs 餐 vs 占房。没用户给的厅+餐贡献数字，不接低价房块去「赢会议」。工作日空房多：会议本身可以接；客房仍按 P10 置换，不要把公开 BAR 砍成会带房价。周末/高峰：10 间会带房若挤掉能卖满的 BAR，默认 Counter（提房价或缩间数）或拒房留会，不是 Accept 低价占房。Hold 公开 BAR 779–799 首选 799。

仿真：180 间城市店 **Simulation**（非真店）、80 人 / 10@399（发明）、F&B Unknown。周二 leftover 110 → 留会（厅付了），Counter 客房，Hold BAR 799，拒绝 BAR→399。周六 Remaining 14 Pace Ahead → 拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。399/10/80 仅该卷。未编餐毛利 / 华住 SOP。RevPAS 未当 BAR。

兼容：P10 客房-only ≠ 本卡有厅。P30 婚宴 ≠ 会带房。T18 通用闸沿用。P22 会展肩日 ≠ 本店一场询价。P48 政务 ≠ 会议块。P05 leftover 不是 BAR→399。无 needs_revision。

刻意不补：P50 满本剧本；华住会带房价表；餐毛利；厅租行情；RevPAS-as-BAR；重写 P01–P49 正文。

## 案例与剧本 · 10:17 · P50 会带房 / Meeting-with-Rooms（2026-08-25 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 theory/metric/决策卡正文（主卡复用 `dont-dump-bar-for-meeting-rooms.md`）。未重写 P01–P49 正文（P10/P30/P22/P48 仅文末一行）。未编华住 SOP / 餐毛利 / 厅租行情 / 399 行情 Fact。未把 RevPAS 当 BAR。未发布网站。未 git commit。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-10a | P50 会带房 / Meeting-with-Rooms | `advisor-playbooks/meeting-with-rooms.md` | **drafted** |
| C25-10b | 主卡复用（不重写） | `recommendations/dont-dump-bar-for-meeting-rooms.md` | **reused** |
| C25-10c | Simulation 复用 + 十节 | `cases/sim-2026-meeting-10-rooms-sat.md` | **appended**（Simulation） |
| C25-10d | 问题树 | `diagnosis/problem-tree.md` §56 | **appended**（P50 指针） |
| C25-10e | T13/T18 地图 | `curriculum/knowledge-map.md` | **updated**（T-Meet 现有 P50；会带房模板仍 NV；餐毛利仍 NV） |
| C25-10f | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P50 行） |
| C25-10g | 理论头一行 | `theory/meeting-with-rooms.md` | **header only**（禁止写满本 P50 → P50 drafted 10:17；§0–body 不改） |
| C25-10h | 研究 backlog | `backlog/research-backlog.md` M25 | **appended**（playbook drafted；餐毛利仍 NV） |

调用：用户说「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」→ **P50**：先拆三笔。无厅+餐贡献 → 不 Accept 低价房块。工作日可留会、客房 Counter。高峰 Counter/拒房留会。Hold BAR 779–799 首选 799。禁止一夜 −15%。顾问不操作 PMS/宴会系统。

三句：会带房先拆三笔：厅/会 vs 餐 vs 占房。没用户给的厅+餐贡献数字，不接低价房块去「赢会议」。工作日空房多：会议本身可以接；客房仍按 P10 置换，不要把公开 BAR 砍成会带房价。周末/高峰：10 间会带房若挤掉能卖满的 BAR，默认 Counter（提房价或缩间数）或拒房留会，不是 Accept 低价占房。Hold 公开 BAR 779–799 首选 799。

仿真：180 间城市店 **Simulation**（非真店）、80 人 / 10@399（发明）、F&B Unknown。周二 leftover 110 → 留会（厅付了），Counter 客房，Hold BAR 799，拒绝 BAR→399。周六 Remaining 14 Pace Ahead → 拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。399/10/80 仅该卷。未编餐毛利 / 华住 SOP。RevPAS 未当 BAR。

兼容：P10 客房-only ≠ 本剧有厅。P30 婚宴 ≠ 会带房。T18 通用闸沿用。P22 会展肩日 ≠ 本店一场询价。P48 政务 ≠ 会议块。P05 leftover 不是 BAR→399。无 needs_revision。

刻意不补：华住会带房价表；餐毛利；厅租行情；RevPAS-as-BAR；重写 theory/metric/决策卡 / P01–P49 正文。


## 来源与复盘 · 12:17 · pickup/cutoff + Kimes 2001 + STR redemption（2026-08-25 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 P01–P50 / theory / metric / card 正文。未编华住 SOP / 会带房价表 / 积分结算 / 政务价表 / 餐毛利 / 限额表数字。未把 GSA $110 当中国 BAR。未把 RevPAS/ConPAST 当 BAR。399/10/80/799/92%/12 = Simulation only。未发布网站。未 git commit。全文：`research-log/2026-08-25-1217-sources-recap.md`。**不改写 C25-08**（该行「P50 仍未开」是当时槽序；10:17 已追加 C25-10）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R25-12a | 来源与复盘 log | `research-log/2026-08-25-1217-sources-recap.md` | **drafted** |
| R25-12b | 源表 §25 | `sources/source-map.md` §25 | **appended** |
| R25-12c | §22/§23/§24 NV 指针 | 政府价剧本未写 → P48 drafted；不写 P50 → P50 drafted；531 timeout → 12:17 重开；Kimes timeout → 12:17 镜像打开 | **cell only**（不重写整节） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。P47 $0 ≠ P49 或有报销 ≠ P48 政务合同价 ≠ P50 会带房厅+餐+占房。P10 rooms-only ≠ P50 有厅。P30 婚宴 ≠ P50 会议+小块。P22 会展肩日 ≠ P50 本店一场询价。P48 per-diem ≠ P50 会议询价；GSA $110 = US Fact not China BAR。P13 付费差 ≠ P49 免费升。P23 会员 BAR ≠ P49 兑房。P31 机组 ≠ P49。T18 闸沿用；RevPAS ≠ BAR。P05 leftover ≠ dump BAR 到 399/gov/award。Comp/award/meeting OCC 都说不要按那张 OCC 涨 — 兼容、不同分子。08:17「不写 P50」→ 10:17 写 P50 = 槽序（同 16:17→18:17 P47）。

本轮新开：OPERA Cloud 26.2/26.1 Blocks cutoff·pickup·wash·Catering Only（PMS 不是 RMS）。Kimes & McGuire 2001 Function-space RM vtechworks 镜像（ConPAST 目录级，不摘正文）。HSMAI wash / attrition / slippage / pick-up-or-pace-report（后者=店日 Pace，不是团块 pickup）。STR Historical 重开：redemption **收入**有口径；Sold 表仍未点名兑房。531 ccgp 重开成功（复确认）。

仍 NV：全国现行限额表；财行〔2024〕435 雄安专项未稳定打开（≠全国表，数字不抄）；兑房进 Sold；华住结算/价表；餐毛利；本店 cutoff 天数/wash %；会带房模板。无新 RMS 页。Rainmaker/EZRMS 不编。

调用：P50 仍先拆三笔、无贡献不接低价房、高峰 Counter/拒房留会、Hold BAR 779–799 首选 799。P49 仍不按兑房 OCC 涨。P48 仍不锚 BAR 到协议价/GSA。pickup vs cutoff 是 What To Watch 字段，本小时不改正文。


## 侦察 · 14:17 · P51 只要厅不要房 / Catering-Only（2026-08-25 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C25-10 / C25-12。未重写 P01–P50 / T-Meet / T-Gov / T-Comp / metric meeting-with-rooms 正文（P50/P30/P10/`accept-low-room-for-fnb.md` 仅文末一行）。未编华住 SOP / 厅租价表 / 餐毛利 / 厅租行情 / 399 行情 Fact。未把 RevPAS / ConPAST 当 BAR。未发布网站。未 git commit。全文：`research-log/2026-08-25-1417-scout.md`。wash MEDIUM 只登记，未写第二本剧本。未规定 P52。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-14a | Scout | `scout/2026-08-25-1417.md` | **drafted** |
| C25-14b | P51 只要厅不要房 / Catering-Only | `advisor-playbooks/catering-only.md` | **drafted** |
| C25-14c | 决策卡：不按厅满涨 BAR | `recommendations/dont-raise-bar-on-full-hall.md` | **drafted** |
| C25-14d | 轻指标：厅占用 ≠ 客房 OCC | `metrics/catering-only.md` | **drafted**（Hypothesis；无 RevPAS-as-BAR） |
| C25-14e | Simulation · 80 人只要厅 周六+周二两拍 | `cases/sim-2026-catering-only-sat.md` | **drafted**（Simulation） |
| C25-14f | 研究笔记 | `research-log/2026-08-25-1417-scout.md` | **drafted** |
| C25-14g | 问题树 | `diagnosis/problem-tree.md` §57 | **appended** |
| C25-14h | T13/T18 地图 | `curriculum/knowledge-map.md` | **appended**（P51 drafted；餐毛利仍 NV；会带房模板仍 NV） |
| C25-14i | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P51 行；头 P01–P51） |
| C25-14j | 源表 | `sources/source-map.md` §26 | **appended**（OPERA Catering Only 已在 §25，指针；HSMAI Local Catering 新开） |
| C25-14k | 研究 backlog | `backlog/research-backlog.md` | **appended**（P51 drafted；wash MEDIUM 登记；不规定 P52） |

调用：用户说「只要会议室不要客房」「厅包了散客随便卖」「厅满了 OCC 才 40% 要不要涨 BAR」「本地公司包半天厅，周末挤婚宴怎么办」→ **P51**：只要厅 ≠ 会带房。无厅+餐贡献不接高峰厅。工作日可接厅、BAR 不涨不 dump。周末 Counter/拒厅。厅满 ≠ 客房紧。Hold BAR 779–799 首选 799。禁止一夜 −15%。顾问不操作 PMS/宴会系统。

三句：只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。

仿真：180 间城市店 **Simulation**（非真店）、80 人只要厅（发明）、周六 Remaining 14 Pace Ahead → 拒/Counter 高峰厅，Hold BAR 779–799 首选 799，不按厅满涨，不因厅忙 dump。周二 leftover 110 + 空厅 + 贡献 6,000（发明）→ Accept 厅，Hold BAR 799，不因包厅涨。80/14/799 仅该卷。未 dump BAR 到 399。未编餐毛利 / 华住 SOP。RevPAS / ConPAST 未当 BAR。

兼容：P50 会带房 ≠ 本剧零客房。P10 客房-only ≠ 有厅无房。P30 婚宴 ≠ 本地半天厅。T18 通用闸沿用到厅。P22 会展肩日 ≠ 本店一场只要厅。P44 钟点 ≠ 功能空间。P48 政务 ≠ 厅-only。P05 leftover 不是因为厅满。无 needs_revision。

刻意不补：wash % 专剧；P52；华住厅租价表；餐毛利；厅租行情；RevPAS-as-BAR；重写 P01–P50 / C25-10 / C25-12 正文。

下一槽 16:17 = 理论小时。P51 playbook 本轮已够。可加深厅 vs 客房 OCC / ConPAST 空间尺（仍不当 BAR），或另选仍空理论。**不规定 P52。**

## 理论 · 16:17 · T-Hall 厅占用 ≠ 客房 OCC（2026-08-25 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C25-14。未重写 P01–P51 正文（P51 仅头一行：理论卡 now exists；§0–body 不改）。主卡 `dont-raise-bar-on-full-hall.md` **复用，不重写**。未编华住 SOP / 厅租价表 / 餐毛利 / 厅租行情 / 本店 RevPAS 数字 / ConPAST 当 BAR。未把 80/14/799 当市场 Fact。未发布网站。未 git commit。全文：`research-log/2026-08-25-1617-function-space.md`。**不写 P52。** wash MEDIUM 只登记，未写 wash 专剧。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T25-16a | 理论：厅日记满了不是客房更紧；RevPAS/ConPAST 不是 BAR | `theory/function-space-occupancy.md` | **drafted** |
| T25-16b | 主卡复用（不重写） | `recommendations/dont-raise-bar-on-full-hall.md` | **reused** |
| T25-16c | OCC 误读一行 | `metrics/occ.md` | **appended**（公式不改） |
| T25-16d | 轻指标文末指针 | `metrics/catering-only.md` | **appended**（公式不改） |
| T25-16e | 研究笔记 | `research-log/2026-08-25-1617-function-space.md` | **drafted** |
| T25-16f | 问题树 | `diagnosis/problem-tree.md` §57 | **appended**（理论指针；§1–56 不改） |
| T25-16g | T13/T05 地图 | `curriculum/knowledge-map.md` | **appended**（T-Hall drafted；P51 已存在；餐毛利仍 NV） |
| T25-16h | 研究 backlog | `backlog/research-backlog.md` | **appended**（T-Hall drafted；不列 P51/P52 为下一轮要写；wash 仍 MEDIUM；18:17 CASE 提示） |
| T25-16i | README 理论索引 | `README.md` | **appended** |
| T25-16j | P51 头一行 | `advisor-playbooks/catering-only.md` | **header only** |
| T25-16k | T-Meet 文末一行 | `theory/meeting-with-rooms.md` | **last-line**（厅占用尺 ≠ 会带房三笔） |
| T25-16l | Day-use 文末一行 | `theory/day-use-inventory.md` | **last-line**（钟点胀分子 ≠ 厅不进客房 OCC） |
| T25-16m | Simulation 文末一行 | `cases/sim-2026-catering-only-sat.md` | **last-line**（可选指针） |
| T25-16n | **P52 playbook** | — | **不写** |

调用：用户说「厅满了 OCC 才 40% 要不要涨」「RevPAS 低所以客房该降」→ **T-Hall / P51**：Situation 写成厅尺 vs 客房尺；Diagnosis 写成厅占用不进客房 OCC、RevPAS/ConPAST ≠ BAR；What To Watch 写成 transient remaining + Pace，不是厅占用%、不是假坪效点。不自动涨、不自动 dump。过程仍走 P51 三句。禁止一夜 −15%。顾问不操作 PMS/宴会系统。**不写 P52。**

三句：只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。

仿真：复用 P51 卷 80 人只要厅、周六 Remaining 14、Hold 779–799 首选 799。不是新店 Fact。80/14/799 仅该卷。RevPAS / ConPAST 未当 BAR。未编餐毛利 / 华住 SOP / 本店 RevPAS 数字。

兼容：P51 过程 ≠ 本卡尺。P50 会带房三笔 ≠ 厅占用尺。P44 钟点胀分子 ≠ 厅不进客房 OCC。P37 砍分母 ≠ 厅不改 Available。P47/P49 抬客房分子 ≠ 厅满不改 Sold。无 needs_revision。

刻意不补：P52；wash 专剧；华住厅租价表；餐毛利；厅租行情；本店 RevPAS 数字；ConPAST 正文摘录；RevPAS-as-BAR；重写 P01–P51 / C25-14 / 主卡正文。


## 案例与剧本 · 18:17 · P52 Group Cutoff / Wash（2026-08-25 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 T25-16 / C25-14。未重写 P01–P51 正文（P10/P50/P14/P31/P05 仅文末一行；P10 头一行 cutoff→P52）。未重写 T-Hall / P51 / T-Meet bodies。未编本店 wash% / 10–25% / attrition 罚金表 / 华住 cutoff SOP / 餐毛利 / Walk $。未把 50/28/22/499/399/799 当市场 Fact。399 = 被拒绝的 dump，不是推荐 BAR。未发布网站。未 git commit。全文：`research-log/2026-08-25-1817-group-wash.md`。16:17「不要写 P52」= 不要复写 P51 只要厅；本槽是 pickup vs cutoff vs house return。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-18a | P52 Group Cutoff / Wash | `advisor-playbooks/group-cutoff-wash.md` | **drafted** |
| C25-18b | 决策卡：cutoff 前不 dump | `recommendations/dont-dump-before-cutoff.md` | **drafted** |
| C25-18c | 轻指标：Pickup / Pickup % / Available=Current−Picked up | `metrics/group-pickup-cutoff.md` | **drafted**（无默认 wash%） |
| C25-18d | Simulation · 周六块 50 pickup 28 | `cases/sim-2026-group-wash-sat.md` | **drafted**（Simulation） |
| C25-18e | 研究笔记 | `research-log/2026-08-25-1817-group-wash.md` | **drafted** |
| C25-18f | 问题树 | `diagnosis/problem-tree.md` §58 | **appended** |
| C25-18g | T13 地图 | `curriculum/knowledge-map.md` | **appended**（P52 drafted；wash% 仍 NV） |
| C25-18h | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P52 行；头 P01–P52） |
| C25-18i | 源表 | `sources/source-map.md` §27 | **pointer**（P52 用 §25 OPERA/HSMAI；无新 URL） |
| C25-18j | 研究 backlog | `backlog/research-backlog.md` | **appended**（P52 drafted；wash% 仍 NV；20:17 = sources/recap） |
| C25-18k | README | `README.md` | **appended** |
| C25-18l | P10 头+文末 | `advisor-playbooks/group-evaluation.md` | **last-line**（接团之后 cutoff → P52） |
| C25-18m | P50/P14/P31/P05 文末 | 各剧本 | **last-line** |

调用：用户说「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」「PMS 看起来 90% 全是团占的，要不要涨」「cutoff 过了放出 20 间，砸不砸」「销售说团肯定会来齐，先关散客」→ **P52**：未 pickup ≠ 已卖需求。Cutoff 前不 dump BAR 填洞。不按合同块 OCC 涨。先问 cutoff / pickup / night audit 是否真释放。释放落地后再按 remaining + Pace 走 P01 或 P05。Hold BAR 779–799 首选 799。禁止一夜 −15%。顾问不操作 PMS。本店 wash% NV。

三句：团块没 pickup 的房不是已经卖掉的需求。Cutoff 前不要把公开 BAR dump 去填那个洞；先问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。先算已 pickup 后的付费剩余，并记住未 pickup 将在 cutoff 回 house（OPERA：须 Allotment Cutoff night audit 才真释放）。Cutoff 当晚未 pickup 回 house 之后，再按真 remaining + Pace 走 P01 或 P05。在释放落地前 Hold 779–799 首选 799（Hypothesis / Simulation）。本店 wash% / 罚金 NV，不编。

仿真：180 间城市店 **Simulation**（非真店）、块 50@499 pickup 28 洞 22、cutoff 次夜、remaining 14 Pace Ahead、PMS OCC ~90% → Hold BAR 779–799 首选 799；不按团 OCC 涨；cutoff 前不 dump 399。释放后 Ahead 仍 Hold；Behind 才评 P05。50/28/22/499/399/799 仅该卷。399 = 被拒绝的 dump，不是推荐 BAR。未编 wash% / 罚金 / 华住 SOP。

兼容：P10 接团 ≠ 本剧 cutoff。P50 会带房赢会 ≠ pickup vs cutoff。P51/T-Hall 只要厅 ≠ 团客房块。P14 散客取消 ≠ 团未 pickup。P31 机组 ≠ 一场团 cutoff。P05 leftover 只在真释放落地后。无 needs_revision。

刻意不补：本店 wash%；10–25%；罚金表；华住 cutoff SOP；餐毛利；Walk $；重写 T25-16 / C25-14 / P01–P51 正文。

下一槽 20:17 = sources/recap。提示：复盘 P50–P52 + T-Hall 兼容。不要规定下一本剧本。

## 来源与复盘 · 20:17 · wash schedule / cutoff-dates / definite vs pickup（2026-08-25 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C25-14 / T25-16 / C25-18。未重写 P01–P52 / T-Hall / T-Meet **正文**。未编本店 wash% / 10–25% / attrition 罚金表 / 华住 cutoff SOP / 餐毛利 / 厅租行情 / 会带房价表。未把 50/28/22/399/799/80 pax 当市场 Fact。399 = 被拒绝的 dump，不是推荐 BAR。RevPAS/ConPAST 未当 BAR。GSA $110 未当中国 BAR。未发布网站。未 git commit。全文：`research-log/2026-08-25-2017-sources-recap.md`。18:17 §27 指针-only；本小时新开实际 URL。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-20a | 来源与复盘 log | `research-log/2026-08-25-2017-sources-recap.md` | **drafted** |
| C25-20b | 源表 §28 | `sources/source-map.md` §28 | **appended**（新开 OPERA wash/cutoff-dates/overview；Duetto glossary+library；IDeaS group blocks；HSMAI ceiling/attrition-collection/rebooking/forgone） |
| C25-20c | 研究 backlog | `backlog/research-backlog.md` | **appended**（P52 drafted 不列下一轮要写；wash% 仍 NV；22:17 = scout） |
| C25-20d | IDeaS 系统页修订一行 | `systems/ideas.md` | **appended**（developers group blocks：Definite 扣库存 / Tentative 不扣；不是 wash%） |
| C25-20e | Duetto 系统页修订一行 | `systems/duetto.md` | **appended**（glossary Group wash 无默认 %；厂商 90% 例不当本店） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。P50 会带房 ≠ P51 只要厅 ≠ P52 已在书上 cutoff。T-Hall 厅日记 ≠ 客房 OCC；RevPAS/ConPAST ≠ BAR — 支持 P51，不叫 P50 dump 客房。P10 询价 Accept/Reject ≠ P52 cutoff。P05 leftover ≠ dump before cutoff ≠ dump because hall full。P14 Soft OTB ≠ 团未 pickup。P31 机组 allotment ≠ 一场团 cutoff。P30 婚宴 ≠ 会带房/只要厅/团块 pickup。Comp/award/meeting/hall-full/blocked-OCC 都不要按那张 OCC 涨 — 兼容、不同分子。08:17「不写 P50」→ 10:17 写 P50；16:17「不要写 P52」→ 18:17 写 P52 = **槽序**，不是逻辑冲突。**不改写 C25-08 / C25-14 / T25-16 / C25-18。**

本轮新开：OPERA Cloud 26.2 Wash Schedule（官方 slug `wash_shedules`）+ Releasing Block Rooms + Block Management Overview Wash；Duetto Glossary Group wash + library 博文；IDeaS developers Group Blocks（block vs pickup；definite 扣 / tentative 不扣）；HSMAI Group Ceiling / Attrition Collection / Rebooking Clause / Forgone Potential of Group Revenue。

仍 NV：HSMAI cutoff-date / definite / tentative / group-rooms-control / no-show **404**；allotment timeout；本店 wash% / 10–25% / 罚金 / 华住 cutoff SOP；餐毛利；厅租行情。Configuring Wash Schedules 声称 slug 落到 Oracle 总站，不当核页。无假 RMS 页。Rainmaker/EZRMS 不编。

调用：P50 仍先拆三笔、无贡献不接低价房、高峰 Counter/拒房留会、Hold 779–799 首选 799。P51 仍厅满不涨、不因厅忙 dump。P52 仍 cutoff 前不 dump、不按团 OCC 涨、真释放后再 P01/P05。本店 wash% NV。399 不是 Fact BAR。

下一槽 22:17 = scout。提示：definite vs tentative 团状态（库存扣不扣）。**不要规定 P53。** 不要重写 P01–P52。

## 侦察空档 · 22:17 · P53 Definite vs Tentative（2026-08-25 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C25-20 / C25-18。未重写 P01–P52 正文（P52/P10/P05 仅文末一行）。未编华住 暂定/确认 字段表 / cutoff SOP / wash% / 10–25%。未把 40/50/399/799 当市场 Fact。399 = 被拒绝的 dump，不是推荐 BAR。IDeaS mapping 标 Vendor RMS inbound，不是中国 SOP。未发布网站。未 git commit。全文：`research-log/2026-08-25-2217-scout.md`。20:17 点名 definite vs tentative；本槽不是 P52 重写，不是第二本 wash。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C25-22a | Scout | `scout/2026-08-25-2217.md` | **drafted** |
| C25-22b | P53 Definite vs Tentative | `advisor-playbooks/definite-vs-tentative.md` | **drafted** |
| C25-22c | 决策卡：不按暂定 OCC 涨 | `recommendations/dont-raise-on-tentative-occ.md` | **drafted** |
| C25-22d | 轻指标：扣库存 vs 不扣 | `metrics/group-status-inventory.md` | **drafted**（IDeaS = Vendor；PMS 名 NV） |
| C25-22e | Simulation · 周六暂定 40 remaining 50 | `cases/sim-2026-tentative-sat.md` | **drafted**（Simulation） |
| C25-22f | 研究笔记 | `research-log/2026-08-25-2217-scout.md` | **drafted** |
| C25-22g | 问题树 | `diagnosis/problem-tree.md` §59 | **appended** |
| C25-22h | T13 地图 | `curriculum/knowledge-map.md` | **appended**（P53 drafted；PMS 状态名仍 NV；wash% 仍 NV） |
| C25-22i | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P53 行；头 P01–P53） |
| C25-22j | 源表 | `sources/source-map.md` §29 | **appended**（OPERA 26.2 block status + OPERA 5.6 Status Codes 新开；IDeaS 指针 §28） |
| C25-22k | 研究 backlog | `backlog/research-backlog.md` | **appended**（P53 drafted；00:17 = 理论小时，不规定 P54） |
| C25-22l | README | `README.md` | **appended** |
| C25-22m | P52/P10/P05 文末 | 各剧本 | **last-line** |

调用：用户说「暂定团占了 40 间，OCC 看起来很满要不要涨」「Tentative 没转 Definite，散客卖不动」「销售说先把暂定锁上别卖散客」「弱暂定也要关散客」→ **P53**：先问 Definite 还是 Tentative。不扣库存不要按那张 OCC 涨、不要关公开 BAR 给 Hold。扣了（含 Strong Tentative）走 P52。接不接走 P10。不要 dump 399「反正是暂定」。Hold BAR 779–799 首选 799。禁止一夜 −15%。顾问不操作 PMS。本店 PMS 状态名 NV。wash% NV。

三句：先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 NV，不把 OPERA 字段名外推成华住 SOP。销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。

仿真：180 间城市店 **Simulation**（非真店）、Tentative 40、真 remaining 50（若不扣）、画面 remaining 10 OCC ~94%、BAR 799 → Hold BAR 779–799 首选 799；不按暂定 OCC 涨；不锁 BAR 给 Hold；禁 dump 399。若用户确认 Strong Tentative 扣库存 → P52 不 dump。40/50/799/399 仅该卷。399 = 被拒绝的 dump，不是推荐 BAR。未编华住字段 / wash%。IDeaS 标 Vendor。

兼容：P10 接团 ≠ 本剧已挂状态。P52 已扣库存 cutoff ≠ 本剧状态轴。P50 会带房赢会。P51 只要厅。P14 散客取消。P31 机组。P05 leftover 不是「因为暂定」。无 needs_revision。

刻意不补：华住 暂定/确认 字段表；wash%；10–25%；第二本 wash；规定 P54；重写 C25-20 / C25-18 / P01–P52 正文。

下一槽 00:17 = 理论小时。提示：可加深 deduct-vs-not 理论（若薄），或另选仍空理论。**不要规定 P54。**


## 理论深化 · 00:17 · T-Status / Group inventory deduct（2026-08-26 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C25-22。未重写 P01–P53 正文（P53 仅头一行；P52 仅头/文末）。未编华住 暂定/确认 字段表 / wash% / 10–25%。未把 40/50/399/799 当市场 Fact。399 = 被拒绝的 dump，不是推荐 BAR。IDeaS mapping 标 Vendor RMS inbound，不是中国 SOP。OPERA 店配，不是华住字段表。未发布网站。未 git commit。全文：`research-log/2026-08-26-0017-group-status.md`。22:17 已写 P53；本槽加深 deduct-vs-not 理论，模板同 16:17 T-Hall after P51。**不写 P54。**

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T26-00a | T-Status 理论 | `theory/group-inventory-deduct.md` | **drafted** |
| T26-00b | 主卡 | `recommendations/dont-raise-on-tentative-occ.md` | **reused，不重写** |
| T26-00c | OCC 误读一行 | `metrics/occ.md` | **appended**（公式不改） |
| T26-00d | 轻指标指针 | `metrics/group-status-inventory.md` | **appended**（公式不改） |
| T26-00e | P53 头一行 | `advisor-playbooks/definite-vs-tentative.md` | **header only** |
| T26-00f | P52 头/文末 | `advisor-playbooks/group-cutoff-wash.md` | **header + last-line** |
| T26-00g | T-Hall / T-Comp 文末 | `theory/function-space-occupancy.md` · `theory/complimentary-house-use.md` | **last-line** |
| T26-00h | Simulation 文末 | `cases/sim-2026-tentative-sat.md` | **last-line** |
| T26-00i | 研究笔记 | `research-log/2026-08-26-0017-group-status.md` | **drafted** |
| T26-00j | 问题树 | `diagnosis/problem-tree.md` §59 | **appended**（理论指针） |
| T26-00k | T13 地图 | `curriculum/knowledge-map.md` | **appended**（T-Status drafted；P53 已存在；PMS 名仍 NV） |
| T26-00l | 研究 backlog | `backlog/research-backlog.md` | **appended**（T-Status drafted；不列 P53/P54 下一轮；02:17 ≠ P54） |
| T26-00m | README | `README.md` | **appended** |
| T26-00n | **P54** | — | **不写** |

调用：用户说「暂定占了 40 间要不要涨」「先锁暂定别卖散客」→ Situation = 两个库存（deduct vs display）；Diagnosis = 不扣则画面 ≠ 已卖、强暂定扣了走 P52；What To Watch = 真 remaining + Pace。过程仍 **P53**。Hold BAR 779–799 首选 799。禁止一夜 −15%。禁止 dump 399。顾问不操作 PMS。本店 PMS 状态名 NV。wash% NV。

三句（= P53，不另发明）：先问团是 Definite 还是 Tentative。IDeaS 入站：Definite / Strong Tentative 扣库存；Tentative / Hold 不扣。不要按一张「暂定占房」的 OCC 涨 BAR。本店 PMS 状态名 NV，不把 OPERA 字段名外推成华住 SOP。销售要「先锁暂定别卖散客」：未转 Definite、且不扣库存的块不是已卖掉的需求。高峰不要把公开 BAR 关给一张暂定单。Hold 779–799 首选 799（Hypothesis / Simulation）。已转 Definite（或本店确认会扣库存的强暂定）才走 P52 pickup vs cutoff。接不接仍走 P10。不要把 BAR dump 到 399「反正是暂定」。

仿真：复用 `cases/sim-2026-tentative-sat.md` 40/50/799；399 = 被拒绝的 dump。不另开新店。

兼容：T-Hall 厅不进 OCC ≠ 暂定可能不扣 Available。T-Comp 抬分子 ≠ 暂定可能不改分母。P52 已扣；P10 接不接；P53 过程。无 needs_revision。

刻意不补：P54；wash 专剧；华住字段表；wash%；10–25%；重写 C25-22 / P01–P53 正文。

下一槽 02:17 = 案例/剧本小时。提示（只点名、本小时不写）：**散客 no-show vs 团 wash** 作不同场景（或 skip）。**不要规定 P54。** 不要再走 definite vs tentative。

## 案例与剧本 · 02:17 · P54 Transient No-show（2026-08-26 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 T26-00 / C25-22。未重写 P01–P53 正文（P14/P24/P05/P52/P46 仅文末一行）。未编本店 no-show% / 行业 5% / 10% / wash% / Walk $。未把 8/22/40/399/799 当市场 Fact。399 = 被拒绝的 dump，不是推荐 BAR。未发布网站。未 git commit。全文：`research-log/2026-08-26-0217-noshow.md`。00:17「不要写 P54」= **不要复写 P53**；本槽是 **当天散客未到**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-02a | P54 Transient No-show | `advisor-playbooks/transient-noshow.md` | **drafted** |
| C26-02b | 决策卡：不因 no-show dump | `recommendations/dont-dump-on-noshow.md` | **drafted** |
| C26-02c | 轻指标：no-show 件数 | `metrics/noshow.md` | **drafted**（无默认 %；STR exclude Sold） |
| C26-02d | Simulation · 周六 8 no-show remaining 22 | `cases/sim-2026-noshow-sat.md` | **drafted**（Simulation） |
| C26-02e | 研究笔记 | `research-log/2026-08-26-0217-noshow.md` | **drafted** |
| C26-02f | 问题树 | `diagnosis/problem-tree.md` §60 | **appended** |
| C26-02g | T07/T13 地图 | `curriculum/knowledge-map.md` | **appended**（P54 drafted；no-show% 仍 NV） |
| C26-02h | BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended**（P54 行；头 P01–P54） |
| C26-02i | 源表 | `sources/source-map.md` §30 | **appended**（OPERA No Show Posting Rules 新开；STR §22 指针） |
| C26-02j | 研究 backlog | `backlog/research-backlog.md` | **appended**（P54 drafted；04:17 = sources/recap，不规定 P55） |
| C26-02k | README | `README.md` | **appended** |
| C26-02l | P14/P24/P05/P52/P46 文末 | 各剧本 | **last-line** |

调用：用户说「今天 8 间 no-show 了，要不要降价补」「散客总 no-show，跟团 wash 一样，BAR 先砍」「超售就是因为 no-show，今晚空了就该砸」「OTB 看起来满，结果没到」→ **P54**：房回可售后按 remaining + Pace。仍紧或 Ahead → Hold 779–799 首选 799。真 leftover 且 Behind 才评 P05（不是因为 no-show）。禁止 BAR→399。禁止一夜 −15%。团 wash → P52。提前取消 → P14。早离 → P46。超售卖限 → P24 历史。顾问不操作 PMS。本店 no-show% NV。

三句：散客 no-show 是当天没到，不是团块 wash，也不是提前取消。房回到可售之后，按**现在的 remaining + Pace**走，不要因为「刚 no-show 了」就 dump BAR。今晚 8 间没到 ≠ 今晚该砍。若当晚仍紧或 Pace Ahead，Hold 779–799 首选 799（Hypothesis / Simulation）。真 leftover 且 Behind 才评 P05。STR：no-show **不计** Rooms Sold（已开 Historical guidelines）。超售用的是历史 no-show 预期（P24），不是拿今晚空房证明该砸价。团未 pickup 走 P52。高取消走 P14。早离走 P46。本店 no-show% **NV，不编**。

仿真：180 间城市店 **Simulation**（非真店）、Sat 8 transient no-shows、释放后 remaining 22、Pace Ahead、BAR 799 → Hold BAR 779–799 首选 799；禁 dump 399；不跟 wash 混；不按含未到 OCC 涨。Behind 枝 remaining 40 Pace Behind → 才评 P05，仍不是「因为 no-show」。8/22/40/799/399 仅该卷。399 = 被拒绝的 dump，不是推荐 BAR。未编 no-show%。

兼容：P14 Soft ≠ 当天没到。P52 wash ≠ 具名散客。P24 历史预期 ≠ 一夜报复。P05 leftover 在释放后。P46 早离。P42 walk-in。P53 状态轴（本槽不复写）。无 needs_revision。

刻意不补：行业 5%/10%；wash%；Walk $；重写 T26-00 / C25-22 / P01–P53 正文；规定 P55。

下一槽 04:17 = sources/recap。提示：复盘 P52–P54 + T-Status。**不要规定 P55。**

## 来源与复盘 · 04:17 · no-show 状态 / guaranteed / 历史超售（2026-08-26 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 C26-02 / T26-00 / C25-22 / C25-20。未重写 P01–P54 / T-Status / T-Hall **正文**。未编本店 no-show% / 5% / 10% / wash% / Walk $ / 华住字段。未把 8/22/40/50/28/399/799 当市场 Fact。399 = P52 与 P54 被拒绝的 dump，不是推荐 BAR。STR no-show exclude Sold = 历史报送 Fact，不是 BAR 公式。未发布网站。未 git commit。全文：`research-log/2026-08-26-0417-sources-recap.md`。**不要规定 P55。**

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-04a | 来源与复盘 log | `research-log/2026-08-26-0417-sources-recap.md` | **drafted** |
| C26-04b | 源表 §31 | `sources/source-map.md` §31 | **appended**（新开 HSMAI guaranteed/overbooking；OPERA 26.2 No Show 状态/EOD/Reinstate/押金；Duetto 超售博文。§22/§28/§29/§30 指针） |
| C26-04c | 研究 backlog | `backlog/research-backlog.md` | **appended**（P54 drafted 不列下一轮要写；no-show% 仍 NV；06:17 = scout；不规定 P55） |
| C26-04d | Playbook BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header**（04:17；P54 drafted not next-to-write） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。P52 团未 pickup ≠ P54 具名散客未到 ≠ P14 到店前取消 ≠ P46 已在店早离。P53 deduct-vs-not ≠ P52 已扣 cutoff。T-Status 支持 P53，不叫 P54 dump BAR。P24 用历史 no-show 设卖限 ≠ P54 因今晚空了砸。P05 leftover 只在真 remaining + Behind 之后，不是因为 no-show / cutoff / tentative。Comp/award/hall/blocked/tentative OCC 都不要按那张 OCC 涨 — 兼容、不同分子。00:17「不要写 P54」→ 02:17 写 P54 = **槽序**（不要复写 P53），不是逻辑冲突。**不改写 C26-02 / T26-00 / C25-22 / C25-20。**

本轮新开：HSMAI Guaranteed + Overbooking + Overselling or Overbooking；OPERA Cloud 26.2 Reservations No Show 术语 + EOD reservation.no_show + About End of Day Auto/Rolling No Show + Controls EOD + Reinstate No Show + Managing No Show deposits/charges（**不是** §30 25.4 posting-rules URL）；Duetto overbooking/walking 博文（guaranteed vs non-guaranteed 准备项）。

仍 NV：HSMAI no-show / no-shows / noshow / guaranteed-reservation / non-guaranteed **404**；CoStar terms 文 timeout；STR Glossary 无独立 No-show 词条；本店 no-show% / 5% / 10% / wash% / Walk $ / 华住字段。SiteMinder no-show 仍 NV。无假 RMS 页。Rainmaker/EZRMS 不编。

调用：P54 仍释放后 remaining+Pace、不因刚 no-show dump、仍紧/Ahead Hold 779–799 首选 799、真 leftover 且 Behind 才 P05。P52 仍 cutoff 前不 dump。P53 仍不按暂定 OCC 涨。P24 仍用历史。本店 no-show% NV。399 不是 Fact BAR。

下一槽 06:17 = scout。提示：guaranteed vs non-guaranteed / 6pm hold vs deposit（与 no-show posting 相邻，不是 P54 重写）。**不要规定 P55。** 不要重写 P01–P54。

## Scout · 06:17 · C26-06 P55 Guarantee Type（2026-08-26 06:17 CST 追加）

> 只追加；T1–T12 untouched；不重写 C26-04 / C26-02。04:17「不要规定 P55」= recap 不得指定；本 scout 核实空档后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-06a | P55 | `advisor-playbooks/guarantee-type.md` | drafted |
| C26-06b | 主卡 | `recommendations/dont-dump-on-nonguaranteed.md` | drafted |
| C26-06c | 轻指标 | `metrics/guarantee-mix.md` | drafted；无默认 % |
| C26-06d | Simulation | `cases/sim-2026-6pm-hold-sat.md` | drafted |
| C26-06e | 问题树/源表 | §61 / §32 | appended/pointer |

放房前不按混合 OCC 涨、不提前 dump；高峰只改新生产担保或浅预付；放房后走 P01/P05。120/18/14/399/799 Simulation only；399 rejected。OPERA = Vendor PMS。08:17 theory hour，不规定 P56。

## 理论 · 08:17 · T26-08 T-Guar 担保类型与到点释放（2026-08-26 08:17 CST 追加）

> 只追加。未改上表他人已写的 **T1–T12 任务行**，未重写 T1–T12 骨架，未重写 **C26-06 / C26-04 / C26-02** / T26-00 / C25-22。未重写 P01–P55 **正文**（P55 仅**头一行**加 理论 指针；`theory/group-inventory-deduct.md` / `theory/complimentary-house-use.md` / `theory/capacity-ooo.md` / `metrics/noshow.md` 仅**文末一行**；`metrics/occ.md` 仅**追加**误读行，S 公式未动）。未开 **P56**，未写新剧本（06:17 scout：theory hour 不得规定 P56）。未编中国担保/押金 SOP、押金%、标准放房时点、no-show%、hold 转化率、Walk $、OTA 佣金%、点弹性。未把 180/120/18/14/399/799 当市场 Fact；**399 = 被拒绝的 dump，不是推荐 BAR**；799 仅 Hypothesis/Simulation。未发布网站，未 git commit。全文：`research-log/2026-08-26-0817-guarantee-release.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T26-08a | **T-Guar 理论卡** | `theory/guarantee-release.md` | **drafted** |
| T26-08b | P55 头一行 理论 指针 | `advisor-playbooks/guarantee-type.md` | **header only** |
| T26-08c | OCC 误读行（放房前 hold 掺高） | `metrics/occ.md` | **appended** |
| T26-08d | 轻指标指针 | `metrics/guarantee-mix.md` | **appended** |
| T26-08e | 文末一行 ×4 | `theory/group-inventory-deduct.md` · `theory/complimentary-house-use.md` · `theory/capacity-ooo.md` · `metrics/noshow.md` | **last-line** |
| T26-08f | 源表 §33 | `sources/source-map.md` §33 | **appended**（**新开** OPERA Cloud 26.2 Configuring Reservation Types + roommaster 类型概述；§31/§30/§22 指针） |
| T26-08g | 问题树 §62 | `diagnosis/problem-tree.md` §62 | **appended** |
| T26-08h | 知识地图 | `curriculum/knowledge-map.md` | **appended**（T-Guar；本店类型/Deduct 映射/放房时点/Rolling **NV**） |
| T26-08i | 研究 backlog | `backlog/research-backlog.md` | **appended**（T-Guar drafted；10:17 = 案例/剧本小时，**不规定哪一本**） |
| T26-08j | README 理论索引 | `README.md` | **appended** |
| T26-08k | 研究笔记 | `research-log/2026-08-26-0817-guarantee-release.md` | **drafted** |

**一句话：** 画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放。

调用：用户说「今晚一半是 6 点保留算不算卖了」「反正到点会放先挂着 / 先降」「担保这个词不就是扣库存吗」「6 点放房是行业规矩吧」「画面还占着人应该到了」「高峰只收担保单」→ **T-Guar** 给尺，**P55** 给过程。占不占可售由本店把 reservation type 配成 **Deduct / Non-Deduct** 决定（OPERA 配置页 **Deduct Inventory** 勾选框；**Release Time** 是配置字段 = **Vendor PMS、store-configured**），**不由标签决定 — 两家店可以用同样的词算出不同的可售**。放房点之前 OTB 是**混合量**，OCC/Remaining 继承这个混合 → 与 T-Status / T-Comp / T06 / T-Hall 同族「分母/分子不干净」。**释放是事件不是预测**：放房前不提前 dump、不按混合 OCC 涨；放房后真 remaining + Pace → P01 / P05。**Rolling No Show** 可让画面占用而无真实到店 → 问本店控制。**ex-ante（本卡）vs ex-post**：已发生 no-show → P54 / `metrics/noshow.md`；历史卖限 → P24；到店前取消 → P14（P38 窗口 / P19 预付）。五个问句（类型表 / Deduct 映射 / 实际放房时点 / Rolling / 今晚非担保间夜）**全部 NV，不代答**。顾问不操作 PMS/RMS/OTA/前台，不自动改价。

本轮新开两页（§33）：**OPERA Cloud 26.2 · Configuring Reservation Types**（A Vendor PMS, store-configured — Deduct Inventory 勾选、**Release Time** 字段、Deposit 仅信息性 + deposit rule schedules、CC Pending Days / Auto Mass Cancel；与 §31 `ch_reservations.htm` **不同 URL**）；**roommaster（InnQuest）· Types of Reservation in the Hotel Industry**（B 厂商概述，2026-08-03 — guaranteed 由卡/押金/公司合同背书、non-guaranteed 只留到 cut-off「often 4 or 6 PM」= **厂商口径不是中国 practice**、tentative 不该当已确认收入、过 cut-off 再卖是**有意超售决定** → 证明该概念**非 OPERA 独有**；其推荐类型框架**未采用**）。HSMAI `no-show/` 与 `guaranteed-reservation/` 已 404，**按纪律未重试**。OPERA「unconfirmed 30 分钟释放」一句在 25.5/26.1 摘要中出现、**26.2 未逐字复核 → 不作论断**。

兼容：**无真矛盾，无 needs_revision。** T-Status（P53）= 团块扣不扣，**本卡是其散客下一层**，同机制不改结论；T-Comp（P47）抬分子 / T06（P37）缩分母 / T-Hall（P51）另一把尺 — 同族不同格；P54 ex-post ≠ 本卡 ex-ante（两边都是「不因这件事 dump」）；P24 用历史（本卡不产生超售动作，Walk $ NV）；P14 到店前取消 ≠ 到点释放；**P05 更严**（释放落地 + Behind 才评，理由必须是 leftover）；**P01 更严**（不按混合 OCC 涨）；P55 三句原样、未复写六形正文。

刻意不补：**P56**；新剧本；第二张主卡；中国担保/押金 SOP 与押金%；标准放房时点；hold 转化率；no-show%；Walk $；重写 C26-06 / C26-04 / C26-02 / T1–T12 / P01–P55 正文。

下一槽 **10:17 = 案例 / 剧本小时**。**不规定写哪一本剧本**（theory hour 不得指定；同 04:17「不要规定 P55」的槽序纪律）。不要把 **T-Guar 列为「下一轮要写」— 已 drafted**。不要开 P56。

## 案例与剧本 · C26-10 · P56 月末冲量（2026-08-26 10:17 CST 追加）

> 只追加；未改 T26-08 / C26-06 / 更早行与 T1–T12 任务行。未重写 P01–P55。未编预算、考核、奖金、变动成本、弹性、佣金或中国 SOP。深度 blanket dump rejected；精确点位只在 case 与 P56 §11。未开 P57。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-10a | P56 | `advisor-playbooks/month-end-budget-push.md` | drafted |
| C26-10b | 主卡 | `recommendations/dont-dump-to-hit-month-target.md` | active |
| C26-10c | MTD metric | `metrics/mtd-pace-vs-budget.md` | drafted |
| C26-10d | Simulation | `cases/sim-2026-month-end-occ-push.md` | drafted |
| C26-10e | 问题树 | `diagnosis/problem-tree.md` §63 | appended |
| C26-10f | 来源 | `sources/source-map.md` §34 | pointer-only；无新 URL |
| C26-10g | 研究 log | `research-log/2026-08-26-1017-month-end-push.md` | completed |

调用：月底不是需求事实；逐夜 Pace/Remaining；先算 dilution 与剩余容量；真弱夜才 bounded move。下一槽 12:17 = sources / recap；**不规定 P57**。

## 来源与复盘 · R26-12 · 非 OPERA PMS 担保/扣库存（2026-08-26 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T26-08 / C26-10 / C26-06** / C26-04 / C26-02。未重写 P01–P56 / T-Guar **正文**。未规定 **P57**。未编押金% / 放房时点 / no-show% / Walk $ / 变动成本 / AHLA 85–95 / Cornell Budget-vs-Forecast。未把 180/120/18/14/399/799 当市场 Fact；**399 = P55 与 P56 被拒绝的 dump**；799 仅 Hypothesis/Simulation。OPERA types 仍 **Vendor PMS store-configured**。未发布网站，未 git commit。全文：`research-log/2026-08-26-1217-sources-recap.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R26-12a | 来源与复盘 log | `research-log/2026-08-26-1217-sources-recap.md` | **drafted** |
| R26-12b | 源表 §35 | `sources/source-map.md` §35 | **appended**（新开 Mews Operations create-a-reservation；Infor HMS Creating guarantee methods。§31–§34 指针） |
| R26-12c | 研究 backlog | `backlog/research-backlog.md` | **appended**（P55/T-Guar/P56 drafted 不列下一轮要写；14:17 = scout；不规定 P57） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。P55 ex-ante「放再重算」≠ P54 ex-post「房已回库」——动词不撞。T-Guar 未改 P55 三句 / 399-rejected / 799-Hypothesis。P24 仍管历史卖限与 Walk $ NV。P53/T-Status 团块扣不扣 ≠ P55 散客类型扣不扣。P56 不发明 dump 幅度、不覆盖 P05 bounded-move；08-28 Hold 799 合 P01；Forecast miss ≠ Budget miss（P17）；未编变动成本或 699（T19/T20）；早会仍一个动作（P45）；public dump 仍过 P23/P18。T-Guar 与 T-Comp / T06 / T-Hall 仍同族不同格。08:17 不写 P56 → 10:17 写 P56 = **槽序**。**不改写 T26-08 / C26-10 / C26-06。**

本轮新开：Mews Operations help（Inquired non-deduct / Optional+Confirmed deduct / 释放日字段）；Infor HMS 3.8 Creating guarantee methods（店配担保码）。Infor 建单页与 Reservation status 打开但不当核页。

仍 NV：AHLA 85–95；Cornell Budget-vs-Forecast；本店预订类型 / Deduct mapping / 放房时点 / Rolling / 押金% / hold conversion / no-show% / Walk $ / 本店预算表 / 考核指标 / 奖金口径 / 变动成本。HSMAI no-show/guaranteed-reservation 仍 404（未重试）。无假 RMS 页。

调用：P55 仍放房前 Hold、放房后 remaining+Pace；P56 仍逐夜 Pace、Ahead Hold、真 Behind 才 P05。399 不是 Fact BAR。OPERA 仍 Vendor。

下一槽 14:17 = scout。**不要规定 P57。** 不要重写 P01–P56。

## Scout · C26-14 · P57 STAR / MPI·ARI·RGI 误读（2026-08-26 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R26-12 / C26-10 / T26-08 / C26-06**。未重写 P01–P56 **正文**（P36/P56/P16/P35/P39 仅文末一行；`metrics/mpi-ari-rgi.md` 仅文末一行，S 公式未动；`market/comp-set.md` 仅文末一行）。未开 **P58**。未编中国官方同名指数、RGI 地板、STR 城市覆盖、弹性、佣金%、华住 699、Walk $。92/88/104/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。未发布网站，未 git commit。全文：`research-log/2026-08-26-1417-scout.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-14a | P57 | `advisor-playbooks/star-index-misread.md` | **drafted** |
| C26-14b | 主卡 | `recommendations/dont-cut-to-chase-rgi.md` | **active** |
| C26-14c | Simulation | `cases/sim-2026-rgi-drop-sat.md` | **drafted** |
| C26-14d | Scout | `scout/2026-08-26-1417.md` | **drafted** |
| C26-14e | 问题树 §64 | `diagnosis/problem-tree.md` §64 | **appended** |
| C26-14f | 源表 §36 | `sources/source-map.md` §36 | **appended**（新开 CoStar Competitive Set Guidelines + HSMAI 2008 STAR how-to；Glossary 指针） |
| C26-14g | 研究 log | `research-log/2026-08-26-1417-scout.md` | **drafted** |

调用：用户说「RGI 掉了降价抢份额」「MPI 不到 100 说明定价高了」→ **P57**。先问集合/日期/口径；读 MPI vs ARI vs RGI；今夜 Pace Ahead 走 P01 Hold 779–799 首选 799；真弱夜才 P05，理由不是月报 RGI。不要 BAR→399。

12:17「不要规定 P57」= recap 槽不得指定；本 scout 核实 T16「无单独看 STAR 剧本」后开。下一槽 **16:17 = theory hour；不要规定 P58**。

## 理论加深 · T26-16 · T-Share 份额指数不是定价按钮（2026-08-26 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C26-14 / R26-12 / C26-10 / T26-08 / C26-06**。未重写 P01–P57 **正文**（P57 仅头一行 理论 指针；邻卡仅文末一行）。未开 **P58**。未写新剧本。未编中国官方同名指数、RGI 地板、STR 城市覆盖、弹性、佣金%、华住 699、Walk $。92/88/104/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。公式卡 `metrics/mpi-ari-rgi.md` **未改算术**。问题树 §64 已覆盖「份额尺 ≠ 定价按钮」的路由，**未写 §65**。未发布网站，未 git commit。全文：`research-log/2026-08-26-1617-share-index.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T26-16a | **T-Share 理论卡** | `theory/share-index-vs-price.md` | **drafted** |
| T26-16b | P57 头一行 理论 指针 | `advisor-playbooks/star-index-misread.md` | **header only** |
| T26-16c | 文末一行 ×5 | `metrics/mpi-ari-rgi.md` · `market/comp-set.md` · `theory/reputation-vs-price.md` · `recommendations/dont-cut-to-chase-rgi.md` · `theory/revenue-strategy.md` | **last-line** |
| T26-16d | RevPAR 误读行（RGI 掉了就砍 BAR） | `metrics/revpar.md` | **appended**（仅一行；S 公式未动） |
| T26-16e | 源表 §37 | `sources/source-map.md` §37 | **appended**（指针注 + 搜索词；无新官方指数解读页） |
| T26-16f | 知识地图 T16 | `curriculum/knowledge-map.md` | **appended**（T-Share drafted；本店 Comp Set / STR 订阅 / 中国非 STR 对标仍 NV） |
| T26-16g | 研究 backlog | `backlog/research-backlog.md` | **appended**（T-Share drafted；18:17 = 案例/剧本小时，**不规定 P58**） |
| T26-16h | README 理论索引 | `README.md` | **appended** |
| T26-16i | 研究笔记 | `research-log/2026-08-26-1617-share-index.md` | **drafted** |
| T26-16j | 问题树 §65 | — | **skipped**（§64 已够） |

**一句话：** 份额指数已经发生之后，它只允许改诊断，不允许改今夜 BAR。

调用：用户说「RGI 掉了降价抢份额」「MPI 不到 100 说明定价高了」→ **T-Share** 给尺，**P57** 给过程。100 = STR fair share，不是目标价、不是品牌地板、不是中国官方线。月报 STAR 大多是已售间夜；砍今夜 remaining 拉不回那些夜。隐藏分母是集合（形 E/F 走 P57，本卡不重复六形）。读 MPI × ARI / 100 ≈ RGI 三连，不读单点。今夜仍 Pace / Pickup / Remaining（P01 vs P05）。中国无 STR → 点名 3–5 家，方法 Hypothesis。顾问不操作 PMS/RMS/OTA/前台，不自动改价。

本轮无新官方核页。§37 = 指针（§5 Glossary + §36 Guidelines / HSMAI 2008）+ 搜索词。CoStar 三篇博文 403 未重锤。

兼容：**无真矛盾，无 needs_revision。** P57 三句原样、399-rejected / 799-Hypothesis 不改；P36 shop ≠ STAR；P35/P39 同族假按钮不同对象；P56 预算 miss ≠ 份额 miss；P01/P05 今夜 Pace 仍拥有价动；T20 品牌底 ≠ RGI 地板。

刻意不补：**P58**；新剧本；第二张主卡；中国官方 MPI / RGI 地板 / STR 城市覆盖；重写公式；重写 C26-14 / R26-12 / C26-10 / T1–T12 / P01–P57 正文；问题树 §65。

下一槽 **18:17 = 案例 / 剧本小时**。**不规定 P58**（theory hour 不得指定；同 14:17 scout「不要规定 P58」与 08:17「不要规定 P56」的槽序纪律）。不要把 **T-Share 列为「下一轮要写」— 已 drafted**。不要开 P58。

## 案例与剧本 · C26-18 · P58 OTA 切房 / 渠道配额卖不掉（2026-08-26 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T26-16 / C26-14 / R26-12**。未重写 P01–P57 **正文**（仅指定文末一行）。未开 **P59**。未编美团/携程切房 SOP、华住切房政策、还房时点、allotment %、佣金%、弹性、Walk $。180/12/15/3/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-26-1817-allotment.md`。16:17「不要规定 P58」= theory 槽不得指定；本案例槽核实 T11 切房缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-18a | P58 | `advisor-playbooks/channel-allotment-unsold.md` | **drafted** |
| C26-18b | 主卡 | `recommendations/dont-dump-bar-to-clear-allotment.md` | **active** |
| C26-18c | 轻指标 | `metrics/allotment-pickup.md` | **drafted**（无默认 %） |
| C26-18d | Simulation | `cases/sim-2026-allotment-sat.md` | **drafted** |
| C26-18e | 问题树 §65 | `diagnosis/problem-tree.md` §65 | **appended** |
| C26-18f | 源表 §38 | `sources/source-map.md` §38 | **appended**（Cloudbeds Allotment + OPERA Channel Sell Limits + SiteMinder release→Stop Sell） |
| C26-18g | 研究 log | `research-log/2026-08-26-1817-allotment.md` | **drafted** |

**一句话：** 切房是合同桶，不是公开需求；不要为消化切房 dump 公开 BAR。

杠杆序：先问扣不扣 / 几点还 / 今晚 pickup → 两桶分开 → 高峰还/缩未卖切房 → 公开 Hold 779–799 首选 799 → 释放后再按公开 Pace 走 P01 或 P05。

调用：用户说「切了 15 间卖不掉，公开价降一点一起出」「美团还占着看起来没房了」→ **P58**。高峰还房，不砍 BAR。不要 BAR→399。团 cutoff → P52。促销 → P18。净价 → P20。mix → P25。

兼容：**无真矛盾，无 needs_revision。** P52 同形不同合同；P01/P05 公开 Pace 仍拥有公开价。

刻意不补：**P59** parity；美团/携程切房 SOP；重写 T26-16 / C26-14 / R26-12 / T1–T12 / P01–P57 正文。

下一槽 **20:17 = sources / recap hour**。**不规定 P59。**

## 来源与复盘 · R26-20 · 非 STR 协会公平份额解读（2026-08-26 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T26-16 / C26-18 / C26-14** / R26-12。未重写 P01–P58 / T-Share **正文**。未规定 **P59**。Parity 仍是 T11 缺口（记下，不开）。未编中国官方 MPI / RGI 地板 / 切房 SOP / allotment % / 佣金% / 弹性 / Walk $ / 华住 699 / AHLA 85–95 / Cornell Budget-vs-Forecast。未把 92/88/104/14/399/799 与 180/12/15/3/399/799 当市场 Fact；**399 = P57 与 P58 被拒绝的 dump**；799 仅 Hypothesis/Simulation。未发布网站，未 git commit。全文：`research-log/2026-08-26-2017-sources-recap.md`。18:17「不要规定 P59」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R26-20a | 来源与复盘 log | `research-log/2026-08-26-2017-sources-recap.md` | **drafted** |
| R26-20b | 源表 §39 | `sources/source-map.md` §39 | **appended**（新开 HSMAI Academy Fair Share + OCC Penetration Index；同组 Comp Set。§5/§36/§37/§38 指针） |
| R26-20c | 研究 backlog | `backlog/research-backlog.md` | **appended**（P57/T-Share/P58 drafted 不列下一轮要写；22:17 = scout；不规定 P59） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。T-Share 未改 P57 三句 / 399-rejected / 799-Hypothesis。P57 shop ≠ STAR ≠ rank ≠ reviews（P36/P35/P39 同族假按钮、不同对象）。P56 预算 miss ≠ 份额-index miss（稀释形状可像，病因不塌）。月报 RGI 不重定价 Ahead Saturday；真弱夜仍因该夜 Pace 走 P05。P58 与 P52 同形「还房，不降公开价」、不同合同。P18 闸 / P20 净价 / P25 mix / P27 opaque 围栏未被 P58 改写。T-Guar/P55 的 deduct/release 仍是散客类型；P58 用到渠道合同。公开 Pace 在还房后仍拥有公开价。P57 份额报告 vs P58 渠道桶：两边都拒 399，理由不同，早会不并成一句。T-Share 仍与 T-Guar / T-Status / T-Comp / T06 / T-Hall / T-Reputation 同族假尺子。16:17 不写 P58 → 18:17 写 P58 = **槽序**。**不改写 T26-16 / C26-18 / C26-14。**

本轮新开：HSMAI Academy Glossary Fair Share（A 协会：100 = 与集合同一水平）；OCC (Penetration) Index（A 协会：供给 fair share% vs 已售间夜份额）；同组 Comp Set（选错集合会误导）。Index (benchmarking) / MPI / RGI 词条检索命中未打开。CoStar blogs 403 未重锤。

仍 NV：AHLA 85–95；Cornell Budget-vs-Forecast；本店 Comp Set / STR 订阅 / 中国非 STR 对标；本店切房合同 / 扣不扣 / 还房时点 / 平台 SOP；变动成本；Walk $；押金%；hold conversion；no-show%。无假 RMS 页。

调用：P57 仍先问集合/日期/口径、读三连、今夜 Pace Ahead Hold 779–799 首选 799、不要 BAR→399。P58 仍两桶分开、高峰还房、公开 Pace 拥有公开价。399 不是 Fact BAR。Parity 仍开、未写成 P59。

下一槽 22:17 = scout。**不要规定 P59。** 不要重写 P01–P58。


## Scout · C26-22 · P59 Rate Parity / 价平破口（2026-08-26 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R26-20 / C26-18 / T26-16 / C26-14**。未重写 P01–P58 **正文**（仅指定文末一行）。未开 **P60**。未编美团/携程价平罚则、中国违约金%、佣金差表、华住价平 SOP、弹性、Walk $。180/14/719/399/799 Simulation only；**399 = 被拒绝的 dump**；**719 = OTA undercut，不是推荐 Brand.com**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-26-2217-scout.md`。20:17「不要规定 P59」= recap 槽不得指定；本 scout 核实 T11 Parity 缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C26-22a | Scout | `scout/2026-08-26-2217.md` | **drafted** |
| C26-22b | P59 | `advisor-playbooks/rate-parity-breach.md` | **drafted** |
| C26-22c | 主卡 | `recommendations/dont-cut-brand-to-match-ota-undercut.md` | **active** |
| C26-22d | 轻指标 | `metrics/parity-gap.md` | **drafted**（无默认容忍 %） |
| C26-22e | Simulation | `cases/sim-2026-parity-gap-sat.md` | **drafted** |
| C26-22f | 问题树 §66 | `diagnosis/problem-tree.md` §66 | **appended** |
| C26-22g | 源表 §40 | `sources/source-map.md` §40 | **appended**（Booking How parity works + EU DMA；SiteMinder 拦） |
| C26-22h | 研究 log | `research-log/2026-08-26-2217-scout.md` | **drafted** |

**一句话：** OTA 比官网便宜不是自动砍官网；先问同一产品；真破平修便宜侧；Hold Brand.com。

杠杆序：可比清单 → 不可比 P36 → 围栏非破平 → 真破平修便宜侧 → Brand.com Hold 779–799 首选 799 → Gross≠Net（P20）→ 合同 NV 仍先修侧 → Ahead 借口 P01 → 误入 P16/P35/P42/P58/P18。

调用：用户说「美团比官网便宜 80，破平了要不要跟」「把官网也砍到一样」「Booking 说我们违约」→ **P59**。不可比 → P36。不要 BAR→399。不要把官网砍到 719。

兼容：**无真矛盾，无 needs_revision。** P36 可比性先于破平；P16 竞对 ≠ 本店渠道；P23 会员围栏；P20 Gross≠Net；P58 切房 ≠ 价比；P01/P05 公开 Pace 仍拥有公开价。20:17 不写 P59 → 22:17 写 P59 = **槽序**。

刻意不补：**P60**；美团/携程罚则%；重写 R26-20 / C26-18 / T26-16 / T1–T12 / P01–P58 正文。

下一槽 **00:17 = theory hour**。**不规定 P60。**


## 理论深化 · T27-00 · T-Parity 渠道价平与价格完整（2026-08-27 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C26-22 / R26-20 / C26-18 / T26-16**。未重写 P01–P59 **正文**（P59 仅头一行理论指针；邻卡仅文末一行）。未开 **P60**。未编美团/携程价平罚则、中国违约金%、佣金差表、华住价平 SOP、弹性、Walk $、699。180/14/719/399/799 Simulation only；**399 = 被拒绝的 dump**；**719 = OTA undercut，不是推荐 Brand.com**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-0017-rate-parity.md`。22:17「不要规定 P60」= theory 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T27-00a | T-Parity 理论卡 | `theory/rate-parity-integrity.md` | **drafted** |
| T27-00b | P59 头一行理论 | `advisor-playbooks/rate-parity-breach.md` | **header only**（三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com 原样） |
| T27-00c | 文末一行 ×6 | parity-gap / 主卡 / T-Share / T-Reputation / net-contribution / P36 | **last-line only** |
| T27-00d | 源表 §41 | `sources/source-map.md` §41 | **appended**（HSMAI Rate Parity + Narrow 打开） |
| T27-00e | 问题树 §67 | — | **skipped**（§66 已够） |
| T27-00f | 研究 log | `research-log/2026-08-27-0017-rate-parity.md` | **drafted** |

**一句话：** 自家某一渠道比 Brand.com 便宜之后，这把尺只允许改诊断，不允许自动改 Brand.com BAR。

核心：可比公开报价关系 ≠ Comp Set 价；围栏不是破平；毛平 ≠ 净贡献；修便宜侧/映射，不自动 dump 官网；EEA DMA ≠ 中国；假尺子一族（T-Share / T-Reputation / T-Guar）。

调用：用户说「美团比官网便宜，破平了要不要跟」「把官网也砍到一样」→ Diagnose 走 **T-Parity**，过程仍 **P59**。不可比 → P36。不要 BAR→399。不要对齐到 719。

兼容：**无真矛盾，无 needs_revision。** P59 三句原样、399-rejected / 799-Hypothesis / 719-not-Brand.com 不改；P36 可比性先于破平；P16 竞对 ≠ 本店渠道；P23 围栏；P20 Gross≠Net；P58 切房 ≠ 价比；P01/P05 公开 Pace 仍拥有公开价；T-Share 族同族假尺子不同对象。

刻意不补：**P60**；新剧本；第二张主卡；中国罚则%；重写公式；重写 C26-22 / R26-20 / C26-18 / T1–T12 / P01–P59 正文；问题树 §67。

下一槽 **02:17 = 案例 / 剧本小时**。**不规定 P60**（theory hour 不得指定；同 22:17 scout「不要规定 P60」）。不要把 **T-Parity 列为「下一轮要写」— 已 drafted**。不要开 P60。


## 案例与剧本 · C27-02 · P60 Channel Manager / 映射错价 / 误推低价（2026-08-27 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-00 / C26-22 / R26-20**。未重写 P01–P59 **正文**（仅指定文末一行）。未开 **P61**。未编美团映射 SOP、本店 CM 字段名当中国 Fact、华住 SOP、佣金%、弹性、Walk $、退改表。180/14/399/799 Simulation only；**399 = 错误价 + 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-0217-mapping-misprice.md`。00:17「不要规定 P60」= theory 槽不得指定；本案例槽核实 T11 CM 错价缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-02a | P60 | `advisor-playbooks/channel-mapping-misprice.md` | **drafted** |
| C27-02b | 主卡 | `recommendations/dont-match-error-rate.md` | **active** |
| C27-02c | 轻指标 | `metrics/live-vs-intended-rate.md` | **drafted**（无默认容忍） |
| C27-02d | Simulation | `cases/sim-2026-cm-misprice-sat.md` | **drafted** |
| C27-02e | 问题树 §67 | `diagnosis/problem-tree.md` §67 | **appended** |
| C27-02f | 源表 §42 | `sources/source-map.md` §42 | **appended**（SiteMinder Help 打开；营销页/Cloudbeds 拦） |
| C27-02g | 研究 log | `research-log/2026-08-27-0217-mapping-misprice.md` | **drafted** |

**一句话：** 错推低价不是市场价格；先停错码、修映射，不要把 Brand.com 对齐到 bug。

杠杆序：先问是不是本打算卖的 → 停错码/修映射（顾问不点）→ Hold 意图 BAR 779–799 首选 799 → 已订错价单问本店（NV）→ 修好后按真 Pace 走 P01 或 P05。

调用：用户说「CM 把标准房推成了 399」「映射错了美团在卖错房型价」「错价已经出去了官网要不要跟」「先跟再改回来」→ **P60**。真破平 → P59。不可比 → P36。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P59 错误 vs 故意 undercut；P36 不可比；P18 报名 ≠ 误开；P42 前台不跟错价；P05 错价不是 Pace；P16 竞对；P34 倒挂；P58 切房；T-Parity 尺不是按钮。00:17 不写 P60 → 02:17 写 P60 = **槽序**。

刻意不补：**P61**；美团映射 SOP；重写 T27-00 / C26-22 / R26-20 / T1–T12 / P01–P59 正文。

下一槽 **04:17 = sources / recap hour**。**不规定 P61。**


## 来源与复盘 · R27-04 · 非 SiteMinder OPERA 渠道房价映射（2026-08-27 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-00 / C27-02 / C26-22** / R26-20。未重写 P01–P60 / T-Parity **正文**。未规定 **P61**。未编中国价平罚则% / 佣金差 / 本店 CM 字段 / 美团·华住映射 SOP / 退改表 / 弹性 / Walk $ / 699 / AHLA 85–95 / Cornell Budget-vs-Forecast。未把 14/719/399/799 与 14/399/799 当市场 Fact；**399 = P59 与 P60 被拒绝的 dump**（P60 同时是错误价）；**719 = OTA undercut，不是推荐 Brand.com**；799 仅 Hypothesis/Simulation。未发布网站，未 git commit。全文：`research-log/2026-08-27-0417-sources-recap.md`。02:17「不要规定 P61」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R27-04a | 来源与复盘 log | `research-log/2026-08-27-0417-sources-recap.md` | **drafted** |
| R27-04b | 源表 §43 | `sources/source-map.md` §43 | **appended**（新开 OPERA Cloud Channel Rate Plans 26.2 + Channel Rate Mapping 24.3；§40–42 指针） |
| R27-04c | 研究 backlog | `backlog/research-backlog.md` | **appended**（P59/T-Parity/P60 drafted 不列下一轮要写；06:17 = scout；不规定 P61） |

复盘：**无真矛盾。无 needs_revision。** 无剧本 Advise 会改。T-Parity 未改 P59 三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com。P59 可比性先于破平（P36）；竞对 ≠ 本店渠道（P16）；围栏不是破平（P23/P27）；Gross≠Net（P20）；前台不跟（P42）；切房 ≠ 价比（P58）。P60 错误 vs P59 故意 undercut：huddle「先关错码」vs「先修便宜侧」**不碰撞**——错误走隔离，故意可比 undercut 走修侧；两边都 Hold Brand.com、都拒 399。P60 与 P36 不可比 / P18 报名≠误开 / P42 前台 / P05 错价≠Pace / P16 竞对 / P34 倒挂 **兼容**。错价是 T-Parity / T-Share 族又一把假尺子，开不了 Brand.com 门。00:17 不写 P60 → 02:17 写 P60 = **槽序**。**不改写 T27-00 / C27-02 / C26-22。**

本轮新开：Oracle OPERA Cloud 26.2 Configuring Channel Rate Plans（A Vendor PMS：Property Rate Code ↔ Channel Rate Code；Publish Rates/Restrictions）；24.3 Configuring Channel Rate Mapping（A Vendor PMS：property↔channel 转换；Rate/Restriction Update）。加强 P60「错价是映射事故候选」，第二家非 SiteMinder。Mews help 壳不当核页。Expedia PDF 未开。Cloudbeds/SiteMinder 营销页未重锤。

仍 NV：本店价平条款/罚则/佣金差；本店 CM 字段/映射 SOP；已订错价单处理；AHLA 85–95；Cornell Budget-vs-Forecast；变动成本；Walk $。无假 RMS 页。

调用：P59 仍先问同一产品、真破平修便宜侧、Hold Brand.com 779–799 首选 799、不要 BAR→399、不要对齐到 719。P60 仍先问是不是本打算卖的、先关错码/修映射、Hold 意图 BAR、不要「已经挂出去了」砍官网。399 不是 Fact BAR。中国罚则仍 NV。

下一槽 06:17 = scout。**不要规定 P61。** 不要重写 P01–P60。


## Scout · C27-06 · P61 付费升房 / 前台 Upsell（2026-08-27 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R27-04 / C27-02 / T27-00**。未重写 P01–P60 **正文**（仅指定文末一行）。未开 **P62**。未编华住升房价表、Fact +¥ 行业常模、佣金%、弹性、Walk $、699。180/4/10/799/999/399/+200–300 Simulation only；**399 = 被拒绝的 suite dump**；799/999 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-0617-scout.md`。04:17「不要规定 P61」= recap 槽不得指定；本 scout 核实付费升房缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-06a | P61 | `advisor-playbooks/paid-upsell-upgrade.md` | **drafted** |
| C27-06b | 主卡 | `recommendations/dont-give-away-paid-upgrade.md` | **active** |
| C27-06c | 轻指标 | `metrics/upsell-take-rate.md` | **drafted**（无默认 take-rate %） |
| C27-06d | Simulation | `cases/sim-2026-paid-upsell-sat.md` | **drafted** |
| C27-06e | 问题树 §68 | `diagnosis/problem-tree.md` §68 | **appended** |
| C27-06f | 源表 §44 | `sources/source-map.md` §44 | **appended**（OPERA Upgrade Rules + Offers 打开；HSMAI Glossary PDF 超时指针） |
| C27-06g | 研究 log | `research-log/2026-08-27-0617-scout.md` | **drafted** |

**一句话：** 空着的套房差价是可卖的；高峰默认付费升，不要免费送，不要套房→399。

杠杆序：先问标准紧不紧 / 套房剩几间 / 付费还是免费 → 高峰付费报价 → Hold 标准 779–799 首选 799、套房 979–999 首选 999 → 拒免费默认送与套房 dump 399 → 会员免费走 P49。

调用：用户说「反正套房空着免费升」「意思一下 50」「标准满了套房降价出」「升房不算别麻烦」→ **P61**。会员免费升 → P49。房型压缩 → P13。倒挂 → P34。不要套房 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P49 免费 vs 付费；P13 卖梯 ≠ 报价；P34 倒挂症状；P47 Comp；P42 walk-in；P05 leftover；T19 贡献。04:17 不写 P61 → 06:17 写 P61 = **槽序**。

刻意不补：**P62**；华住升房价表；重写 R27-04 / C27-02 / T27-00 / T1–T12 / P01–P60 正文。

下一槽 **08:17 = theory hour**。**不规定 P62。**


## 理论深化 · T27-08 · T-Upsell 付费升房与房型差价（2026-08-27 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C27-06 / R27-04 / C27-02 / T27-00**。未重写 P01–P61 **正文**（P61 仅头一行理论指针；邻卡仅文末一行）。未开 **P62**。未编华住升房价表、Fact +¥ 行业常模、默认 take-rate %、佣金%、弹性、Walk $、699。4/10/799/999/399/+200–300 Simulation only；**399 = 被拒绝的 suite dump**；799/999 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-0817-paid-upsell.md`。06:17「不要规定 P62」= theory 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T27-08a | T-Upsell 理论卡 | `theory/paid-upsell-differential.md` | **drafted** |
| T27-08b | P61 头一行理论 | `advisor-playbooks/paid-upsell-upgrade.md` | **header only**（三句 / 399-rejected / 799·999-Hypothesis 原样） |
| T27-08c | 文末一行 ×6 | upsell-take-rate / 主卡 / P49 / P13 / T19 / P34 | **last-line only** |
| T27-08d | 源表 §45 | `sources/source-map.md` §45 | **appended**（HSMAI ancillary 打开；§44 OPERA 指针） |
| T27-08e | 问题树 | — | **skipped**（§68 已够） |
| T27-08f | 研究 log | `research-log/2026-08-27-0817-paid-upsell.md` | **drafted** |

**一句话：** 空着的更高房型是库存期权与可卖差价，不是免费人情，也不是把该型公开 BAR dump 到 399 的许可证。

核心：房型差价 = 可卖产品/期权；空 ≠ 免费（P49 免费侧孪生）；付费 ≠ 免费；空着的是「型」不是「需求」→ 不要套房→399；贡献镜头 T19（付费加价增量；免费升 $0 房费）。

调用：用户说「反正套房空着免费升」「标准满了套房降到 399」「意思一下 50」「升房不算」→ Diagnose 走 **T-Upsell**，过程仍 **P61**。会员免费 → P49。不要套房 BAR→399。不要高峰默认免费送。

兼容：**无真矛盾，无 needs_revision。** P61 三句原样、399-rejected / 799·999-Hypothesis 不改；P49 免费 vs 付费；P13 卖梯 ≠ 报价；P34 倒挂；P47 Comp；P42 walk-in；P05 leftover；T19 贡献；P01 标准紧 Hold。06:17 写 P61 → 08:17 写 T-Upsell = **槽序**。

刻意不补：**P62**；新剧本；第二张主卡；华住升房价表；重写公式；重写 C27-06 / R27-04 / C27-02 / T1–T12 / P01–P61 正文；问题树新枝。

下一槽 **10:17 = case hour**。**不规定 P62**（theory hour 不得指定；同 06:17 scout「不要规定 P62」）。不要把 **T-Upsell 列为「下一轮要写」— 已 drafted**。不要开 P62。


## CASE/PLAYBOOK · C27-10 · P62 当天取消重订更低价（2026-08-27 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-08 / C27-06 / R27-04 / T1–T12**。未重写 P01–P61 **正文**（仅指定邻剧文末一行）。未开 **P63**。未编华住/中国取消重订 SOP、罚金%、佣金%、弹性、Walk $、699。180/8/7/14/599/399/799 Simulation only；**399 = 被拒绝的 dump**；**599 = 重订价不是推荐新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-1017-cancel-rebook.md`。08:17「不要规定 P62」= theory 槽不得指定；本案例槽核实取消重订缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-10a | P62 | `advisor-playbooks/same-day-cancel-rebook.md` | **drafted** |
| C27-10b | 主卡 | `recommendations/dont-cut-to-stop-cancel-rebook.md` | **active** |
| C27-10c | 轻指标 | `metrics/cancel-rebook-gap.md` | **drafted**（无默认 %） |
| C27-10d | Simulation | `cases/sim-2026-cancel-rebook-sat.md` | **drafted** |
| C27-10e | 问题树 §69 | `diagnosis/problem-tree.md` §69 | **appended** |
| C27-10f | 源表 §46 | `sources/source-map.md` §46 | **appended**（Booking NR 改期打开；IJHM cancel-rebook 指针） |
| C27-10g | 研究 log | `research-log/2026-08-27-1017-cancel-rebook.md` | **drafted** |

**一句话：** 取消重订是对自己价格曲线的套利，不是新需求；Ahead 不要为了「别让他们取消」先砍公开 BAR。

杠杆序：先拆真取消 vs 同住更低价重订 → Ahead Hold 779–799 首选 799 → 旗标本店改订政策 NV → 未来日期 P38/P19 → 真弱才 P05；无重订→P14；没到→P54。

调用：用户说「取消了又订回来更便宜要不要认」「干脆降价让他们别取消」「免费取消的就别涨了」「BAR→399 别再被刷」→ **P62**。不要 BAR→399。不要跟 599 当新 BAR。

兼容：**无真矛盾，无 needs_revision。** P14 Soft ≠ 同住套利动作；P38 新生产收窗；P19 产品；P54 no-show；P05 leftover；P45 早会一个动作。08:17 不写 P62 → 10:17 写 P62 = **槽序**。

刻意不补：**P63**；华住取消重订 SOP；重写 T27-08 / C27-06 / R27-04 / T1–T12 / P01–P61 正文。

下一槽 **12:17 = sources/recap**。**不规定 P63。**

## 来源与复盘 · R27-12 · P61 / T-Upsell / P62（2026-08-27 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-08 / C27-10 / C27-06 / T1–T12**。未重写 P01–P62 / T-Upsell **正文**。未开 **P63**。未编华住升房价表、中国取消重订 SOP、Fact +¥、默认 take-rate %、罚金%、佣金%、弹性、Walk $、699。4/10/799/999/399 与 8/7/599/399/799/14 Simulation only；**399 = 被拒绝的 dump**（P61 = suite dump）；**599 = 重订价不是推荐新 BAR**；999 = 套房 Hypothesis/Simulation。全文：`research-log/2026-08-27-1217-sources-recap.md`。10:17「不要规定 P63」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R27-12a | 源表 §47 | `sources/source-map.md` §47 | **appended**（HSMAI Academy Upselling + Commercial Terms Upgrade/Upsell 打开；Mews Ops 打开未当第三核页；IJHM DOI 406） |
| R27-12b | 复盘 log | `research-log/2026-08-27-1217-sources-recap.md` | **drafted** |
| R27-12c | backlog | `backlog/research-backlog.md` | **appended** |
| R27-12d | systems | — | **skipped**（协会词条 ≠ RMS；不写假 RMS 页） |

**一句话：** 近三轮无真矛盾；HSMAI Upgrade≠Upsell + Upsold Revenue 计量加强 P61/T-Upsell；不规定 P63。

复盘结论：**无 needs_revision。** P61 三句 / 399-rejected / 799·999-Hypothesis 未被 T-Upsell 改写；P62 与 P14/P38/P19/P54/P05/P45 边界清楚；P61 vs P62 对象不同、huddle 不碰撞；T-Upsell 空更高型假尺子兼容 T-Share / T-Parity / T-Guar 族。

刻意不补：**P63**；新剧本；理论卡；重写 T27-08 / C27-10 / C27-06 / T1–T12 / P01–P62 正文；华住 SOP；Fact +¥。

下一槽 **14:17 = scout hour**。**不规定 P63。** 不要把 **P61 / T-Upsell / P62 列为「下一轮要写」— 已 drafted**。

## SCOUT · C27-14 · P63 保洁/人手产能卡住可售（2026-08-27 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R27-12 / C27-10 / C27-06 / T27-08 / T1–T12**。未重写 P01–P62 **正文**（仅指定邻剧文末一行）。未开 **P64**。未编华住人效、间/人常模、分钟/间中国 Fact、wage、Walk $、699。180/22/12/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-1417-scout.md`。12:17「不要规定 P63」= recap 槽不得指定；本 scout 核实人手产能缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-14a | P63 | `advisor-playbooks/staff-capacity-constraint.md` | **drafted** |
| C27-14b | 主卡 | `recommendations/dont-dump-when-staff-capped.md` | **active** |
| C27-14c | 轻指标 | `metrics/sellable-vs-staff-cap.md` | **drafted**（无默认间/人） |
| C27-14d | Simulation | `cases/sim-2026-hk-cap-sat.md` | **drafted** |
| C27-14e | 问题树 §70 | `diagnosis/problem-tree.md` §70 | **appended** |
| C27-14f | 源表 §48 | `sources/source-map.md` §48 | **appended**（AHLA 短缺调查 + OPERA HK Board 打开） |
| C27-14g | scout | `scout/2026-08-27-1417.md` | **drafted** |
| C27-14h | 研究 log | `research-log/2026-08-27-1417-scout.md` | **drafted** |

**一句话：** 产能顶不是弱需求；做不完房不是降价理由。先收口可售/停售超额到达，Hold BAR，不要 dump 到 399。

杠杆序：先拆需求 vs 人手产能 → 顶住 Hold 779–799 首选 799 + 收口到达 → 人效/班次 NV → 卖过产能 P24 → 真弱且产能松才 P05；维修 P37；钟点 P44；早离 P46。

调用：用户说「保洁不够别卖满」「人手不够先降价少卖点」「只能做 N 间」「BAR→399 反正做不完」→ **P63**。不要 BAR→399。不要降价少卖。

兼容：**无真矛盾，无 needs_revision。** P37 物理离线 ≠ Dirty/吞吐；P05 leftover ≠ 产能顶；P01 Ahead 同向收口；P24 Walk 风险；P44/P46 交叉。12:17 不写 P63 → 14:17 写 P63 = **槽序**。

刻意不补：**P64**；华住人效常模；重写 R27-12 / C27-10 / C27-06 / T27-08 / T1–T12 / P01–P62 正文。

下一槽 **16:17 = theory hour**。**不规定 P64。**


## 理论深化 · T27-16 · T-Staff 人手/保洁产能顶不是弱需求（2026-08-27 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C27-14 / R27-12 / C27-10 / T27-08 / T1–T12**。未重写 P01–P63 **正文**（P63 仅头一行理论指针；邻卡仅文末一行）。未开 **P64**。未编华住人效、间/人常模、分钟/间中国 Fact、wage、Walk $、699、AHLA 85–95。180/22/12/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-1617-staff-capacity.md`。14:17「不要规定 P64」= theory 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T27-16a | T-Staff 理论卡 | `theory/staff-capacity-vs-demand.md` | **drafted** |
| T27-16b | P63 头一行理论 | `advisor-playbooks/staff-capacity-constraint.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T27-16c | 文末一行 ×6 | sellable-vs-staff-cap / 主卡 / T06 / P37 / P24 / P44 | **last-line only** |
| T27-16d | occ 误读一行 | `metrics/occ.md` | **appended**（公式不改） |
| T27-16e | 源表 §49 | `sources/source-map.md` §49 | **appended**（HSMAI capacity-constraints 打开；§48 指针） |
| T27-16f | 问题树 | — | **skipped**（§70 已够） |
| T27-16g | 研究 log | `research-log/2026-08-27-1617-staff-capacity.md` | **drafted** |

**一句话：** 人手/保洁产能顶是供给约束，不是弱需求；砍 BAR 缓解不了翻房吞吐。

核心：两天花板（物理可售 vs 可交吞吐）；产能绑住 ≠ leftover；Dirty ≠ OOO；假尺子一族（与 T-Share/T-Parity/T-Guar/T-Upsell 同族）；卖过可翻 → P24；ask-list 全 NV。

调用：用户说「保洁不够别卖满」「人手不够先降价少卖点」「只能做 N 间」「BAR→399 反正做不完」→ Diagnose 走 **T-Staff**，过程仍 **P63**。不要 BAR→399。不要降价少卖。

兼容：**无真矛盾，无 needs_revision。** P63 三句原样、399-rejected / 799-Hypothesis 不改；T06/P37 物理 ≠ 吞吐；P05 leftover ≠ 产能顶；P01 Ahead 收口；P24 Walk；P44/P46 交叉。14:17 写 P63 → 16:17 写 T-Staff = **槽序**。

刻意不补：**P64**；新剧本；第二张主卡；华住人效常模；重写公式；重写 C27-14 / R27-12 / C27-10 / T27-08 / T1–T12 / P01–P63 正文；问题树新枝。

下一槽 **18:17 = case hour**。**不规定 P64**（theory hour 不得指定；同 14:17 scout「不要规定 P64」）。不要把 **T-Staff 列为「下一轮要写」— 已 drafted**。不要开 P64。


## 案例与剧本 · C27-18 · P64 嵌套低价档仍开着 / 关低开高误用（2026-08-27 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-16 / C27-14 / R27-12 / C27-10 / T27-08 / T1–T12**。未重写 P01–P63 **正文**（仅邻剧/卡文末一行）。未开 **P65**。未编中国嵌套 SOP、EMSR 公式 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 高峰要关的档 + 被拒绝的新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-1817-nested-rate.md`。16:17「不要规定 P64」= theory 槽不得指定；本案例槽核实嵌套低价档缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-18a | P64 | `advisor-playbooks/nested-rate-class.md` | **drafted** |
| C27-18b | 主卡 | `recommendations/dont-leave-low-class-open-on-peak.md` | **active** |
| C27-18c | 同伴卡 | `recommendations/dont-strip-low-class-on-weak-nights.md` | **active** |
| C27-18d | 轻指标 | `metrics/open-rate-classes.md` | **drafted**（无默认 %） |
| C27-18e | Simulation | `cases/sim-2026-nested-low-open-sat.md` | **drafted** |
| C27-18f | 问题树 §71 | `diagnosis/problem-tree.md` §71 | **appended** |
| C27-18g | 源表 §50 | `sources/source-map.md` §50 | **appended**（AccountingTools 打开；Amadeus 指针） |
| C27-18h | 研究 log | `research-log/2026-08-27-1817-nested-rate.md` | **drafted** |

**一句话：** 关低价档 ≠ 涨 BAR；涨了但低档还挂着等于没涨。先问 nested/shared/dedicated。

核心：形 A 高峰关低；形 B 弱夜重开围栏；形 C 假涨价立刻关低档；形 D 先问结构；形 E→P60。主卡新建 + 同伴卡；close-low 复用不重写。Hold 779–799 首选 799。399 永不推荐为新 BAR。

调用：用户说「低价还开着 ADR 上不去」「涨了 BAR 但 399 还挂」「促销全关了没人订」「嵌套太复杂砸 399」→ Diagnose/过程走 **P64**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P01/P03/close-low = 工具；P33 = stay；P60 = 错映射。16:17 不规定 → 18:17 核实后开 = **槽序**。

刻意不补：**P65**；重写 close-low 正文；重写 T27-16 / C27-14 / R27-12 / T1–T12 / P01–P63 正文；中国嵌套 SOP。

下一槽 **20:17 = sources/recap**。**不规定 P65。**

## 来源与复盘 · R27-20 · P63 / T-Staff / P64（2026-08-27 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T27-16 / C27-18 / C27-14 / T1–T12**。未重写 P01–P64 / T-Staff **正文**。未开 **P65**。未编本店人效/班次、华住做房 SOP、间/人常模、nesting 字段、EMSR/hurdle Fact、升房价表、改订吃新价、佣金%、Walk $、699。22/12/399/799 与 14/399/799 Simulation only；**399 = P63 被拒绝的 dump；P64 = 高峰要关的低档 + 被拒绝的新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-2017-sources-recap.md`。18:17「不要规定 P65」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R27-20a | 源表 §51 | `sources/source-map.md` §51 | **appended**（Amadeus Allotment Controls + Allotment-to-Rate Plan Mapping 打开；升级 §50 timeout；§48–50 指针） |
| R27-20b | 复盘 log | `research-log/2026-08-27-2017-sources-recap.md` | **drafted** |
| R27-20c | backlog | `backlog/research-backlog.md` | **appended** |
| R27-20d | systems | `systems/amadeus.md` | **small revision only**（CRS/Admin 库存切块，不是独立 RMS；不写新页） |

**一句话：** 近三轮无真矛盾；Amadeus nested BL 打开加强 P64「关/限低档 ≠ 涨 BAR」；不规定 P65。

复盘结论：**无 needs_revision。** P63 三句 / 399-rejected / 799-Hypothesis 未被 T-Staff 改写；P63 与 P37/T06/P05/P01/P24/P44/P46 边界清楚；P64 与 P01/P03/close-low/P33/P18/P13/P60 边界清楚；P63 vs P64 对象不同、huddle 不碰撞；T-Staff 假尺子兼容 T-Share / T-Parity / T-Guar / T-Upsell 族。

刻意不补：**P65**；新剧本；理论卡；重写 T27-16 / C27-18 / C27-14 / T1–T12 / P01–P64 正文；华住 SOP；间/人常模；EMSR Fact。

下一槽 **22:17 = scout hour**。**不规定 P65。** 不要把 **P63 / T-Staff / P64 列为「下一轮要写」— 已 drafted**。



## 侦察空档 · C27-22 · P65 取消后按原价恢复 / Reinstate（2026-08-27 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R27-20 / C27-18 / T27-16 / T1–T12**。未重写 P01–P64 **正文**（仅邻剧/卡文末一行）。未开 **P66**。未编华住 Reinstate SOP、是否带原价字段、罚金%、佣金%、699。180/14/599/399/799 Simulation only；**599 = Ahead 上被拒的旧价**；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-27-2217-scout.md`。20:17「不要规定 P65」= recap 槽不得指定；本 scout 核实 Reinstate 缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C27-22a | Scout | `scout/2026-08-27-2217.md` | **drafted** |
| C27-22b | P65 | `advisor-playbooks/cancel-reinstate-old-rate.md` | **drafted** |
| C27-22c | 主卡 | `recommendations/dont-reinstate-below-current-bar.md` | **active** |
| C27-22d | 轻指标 | `metrics/reinstate-rate-gap.md` | **drafted**（无默认 %） |
| C27-22e | Simulation | `cases/sim-2026-reinstate-sat.md` | **drafted** |
| C27-22f | 问题树 §72 | `diagnosis/problem-tree.md` §72 | **appended** |
| C27-22g | 源表 §52 | `sources/source-map.md` §52 | **appended**（OPERA Reinstate 2 页打开） |
| C27-22h | 研究 log | `research-log/2026-08-27-2217-scout.md` | **drafted** |

**一句话：** 取消后按原价恢复不是必须；Ahead 拒旧低价，给当前 BAR。

核心：形 A Ahead 拒旧价；形 B 纠正系统回写；形 C 不 dump 399；形 D 弱夜 exception；形 E→P62；形 F→P14/P38/P54。Hold 779–799 首选 799。599/399 在 Ahead 均不推荐。

调用：用户说「按原价恢复吧」「系统写回旧 599」「BAR 799 还认不认」「怕他订 399」→ Diagnose/过程走 **P65**。不要 BAR→399。不要自动认旧 599。

兼容：**无真矛盾，无 needs_revision。** P62=新单；P14=Soft；P54=没到；P38=新生产；P01/P05=Pace。20:17 不规定 → 22:17 核实后开 = **槽序**。

刻意不补：**P66**；重写 R27-20 / C27-18 / T27-16 / T1–T12 / P01–P64 正文；华住 Reinstate SOP。

下一槽 **00:17 = theory hour**。**不规定 P66。**


## 理论深挖 · T28-00 · T-Reinstate 历史取消价不是权利（2026-08-28 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C27-22 / R27-20 / C27-18 / T27-16 / T1–T12**。未重写 P01–P65 **正文**（P65 仅头一行理论指针；邻卡仅文末一行）。未开 **P66**。未编华住 Reinstate SOP、是否带原价字段、罚金%、佣金%、699。180/14/599/399/799 Simulation only；**599 = Ahead 上被拒的旧价**；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-0017-reinstate.md`。22:17「不要规定 P66」= theory 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T28-00a | T-Reinstate 理论卡 | `theory/reinstate-vs-current-rate.md` | **drafted** |
| T28-00b | P65 头一行理论 | `advisor-playbooks/cancel-reinstate-old-rate.md` | **header only**（三句 / 399-rejected / 599-rejected / 799-Hypothesis 原样） |
| T28-00c | 文末一行 ×6 | reinstate-rate-gap / 主卡 / P62 / P14 / P54 / P38 | **last-line only** |
| T28-00d | 源表 §53 | `sources/source-map.md` §53 | **appended**（OPERA Controls 25.4 + Amadeus Undo + OPERA 5.6 打开；§52 指针） |
| T28-00e | 问题树 | — | **skipped**（§72 已够） |
| T28-00f | 研究 log | `research-log/2026-08-28-0017-reinstate.md` | **drafted** |

**一句话：** 历史取消价不是权利；Reinstate 是状态/库存动作，不是定价权。

核心：三把价（历史快照 / 当前可售 / 回写过账）；ALWAYS_ALLOW_REINSTATE = 日期闸不是认旧价；FIXED RATES 是另套锁额；P62 新单孪生；假尺子一族（与 T-Share/T-Parity/T-Guar/T-Upsell/T-Staff 同族）；ask-list 全 NV。

调用：用户说「按原价恢复吧」「系统写回旧 599」「BAR 799 还认不认」「怕他订 399」→ Diagnose 走 **T-Reinstate**，过程仍 **P65**。不要 BAR→399。不要自动认旧 599。

兼容：**无真矛盾，无 needs_revision。** P65 三句原样、399-rejected / 599-rejected / 799-Hypothesis 不改；P62=新单；P14=Soft；P54=没到；P38=新生产；P01/P05=Pace。22:17 写 P65 → 00:17 写 T-Reinstate = **槽序**。

刻意不补：**P66**；新剧本；第二张主卡；华住 Reinstate SOP；重写公式；重写 C27-22 / R27-20 / T1–T12 / P01–P65 正文；问题树新枝。

下一槽 **02:17 = case hour**。**不规定 P66**（theory hour 不得指定；同 22:17 scout「不要规定 P66」）。不要把 **T-Reinstate 列为「下一轮要写」— 已 drafted**。不要开 P66。


## 案例与剧本 · C28-02 · P66 RMS 建议不是定价权 / 不要跟系统 dump（2026-08-28 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T28-00 / C27-22 / R27-20 / T1–T12**。未重写 P01–P65 **正文**（仅邻剧/卡文末一行）。未开 **P67**。未编华住会 SOP、默认 override %、佣金%、699、IDeaS 4%。180/14/399/799 Simulation only；**399 = 被拒绝的 RMS dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-0217-rms-override.md`。00:17「不要规定 P66」= theory 槽不得指定；本案例槽核实 T17 Override 缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-02a | P66 | `advisor-playbooks/rms-rec-override.md` | **drafted** |
| C28-02b | 主卡 | `recommendations/dont-follow-rms-dump.md` | **active** |
| C28-02c | 轻指标 | `metrics/rms-vs-pace.md` | **drafted**（无默认 override %） |
| C28-02d | Simulation | `cases/sim-2026-rms-dump-sat.md` | **drafted** |
| C28-02e | 问题树 §73 | `diagnosis/problem-tree.md` §73 | **appended** |
| C28-02f | 源表 §54 | `sources/source-map.md` §54 | **appended**（HSMAI Dos/Don'ts + Human-Algorithm 打开；IDeaS G3 Pricing Overrides 打开；Adagio 证言不当核页） |
| C28-02g | 研究 log | `research-log/2026-08-28-0217-rms-override.md` | **drafted** |

**一句话：** RMS 建议的价是输入，不是定价权。Ahead 不跟系统 dump。

核心：形 A Ahead 不跟 dump；形 B 真弱走 P05 理由写 Pace；形 C 拒全盘接受；形 D 拒无理由 override；形 E→P17/P43/P60；形 F→P56/T20/P64。Hold 779–799 首选 799。399 永不推荐为新 BAR。HSMAI 80:20 不进默认 %。

调用：用户说「系统建议 399 要不要跟」「别跟系统对着干」「IDeaS 降了我们也要降」「系统不让降但卖不动」→ Diagnose/过程走 **P66**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P17=先改判断；P05=真 leftover；P56=月末；T20=声明底；P01 Ahead 同向。00:17 不规定 → 02:17 核实后开 = **槽序**。

刻意不补：**P67**；重写 T28-00 / C27-22 / T1–T12 / P01–P65 正文；华住会 SOP；默认 override %。

下一槽 **04:17 = sources/recap**。**不规定 P67。**


## 来源与复盘 · R28-04 · P65 / T-Reinstate / P66（2026-08-28 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-02 / T28-00 / C27-22 / T1–T12**。未重写 P01–P66 / T-Reinstate **正文**。未开 **P67**。未编华住 Reinstate / 华住会 SOP、是否带原价、默认 override %、佣金%、Walk $、699、IDeaS 4%、HSMAI 80:20 店规。14/599/399/799 与 14/399/799 Simulation only；**599 = Ahead 被拒旧价；399 = P65 安抚 dump / P66 RMS dump（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-0417-sources-recap.md`。02:17「不要规定 P67」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R28-04a | 源表 §55 | `sources/source-map.md` §55 | **appended**（OPERA Cloud 26.2 Controls 升级 26.1 timeout；Duetto GameChanger + glitching 博文打开；§52–54 指针；HSMAI Dos/Donts 复核不重计） |
| R28-04b | 复盘 log | `research-log/2026-08-28-0417-sources-recap.md` | **drafted** |
| R28-04c | backlog | `backlog/research-backlog.md` | **appended** |
| R28-04d | systems | `systems/duetto.md` · `systems/ideas.md` | **small revision only**（Duetto Human Override 公开能力；IDeaS 指针一行；不写新页） |

**一句话：** 近三轮无真矛盾；OPERA 26.2 Controls 钉「日期闸 ≠ 认旧价」；Duetto 第二家 RMS 钉「可介入 ≠ 必须跟 dump」；不规定 P67。

复盘结论：**无 needs_revision。** P65 三句 / 599-rejected / 399-rejected / 799-Hypothesis 未被 T-Reinstate 改写；P65 与 P62/P14/P54/P38/P01/P05 边界清楚；P66 与 P17/P05/P56/T20/P01/P43/P60/P64 边界清楚；P65/T-Reinstate vs P66 对象不同、huddle 不碰撞（旧价 vs RMS 建议）；假尺子族兼容。00:17 不规定 → 02:17 写 P66 = **槽序**。

刻意不补：**P67**；新剧本；理论卡；重写 C28-02 / T28-00 / C27-22 / T1–T12 / P01–P66 正文；华住 SOP；默认 override %；Resource Hub Lock UI Fact。

下一槽 **06:17 = scout hour**。**不规定 P67。** 不要把 **P65 / T-Reinstate / P66 列为「下一轮要写」— 已 drafted**。

## 侦察空档 · C28-06 · P67 延退 / 早到（2026-08-28 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R28-04 / C28-02 / T28-00 / T1–T12**。未重写 P01–P66 **正文**（仅邻剧/卡文末一行）。未开 **P68**。未编华住延退 SOP、默认费表、会员免费时刻、佣金%、€ 价带中国 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-0617-scout.md`。04:17「不要规定 P67」= recap 槽不得指定；本 scout 核实延退缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-06a | Scout | `scout/2026-08-28-0617.md` | **drafted** |
| C28-06b | P67 | `advisor-playbooks/late-checkout-early-checkin.md` | **drafted** |
| C28-06c | 主卡 | `recommendations/dont-free-late-checkout-on-peak.md` | **active** |
| C28-06d | 轻指标 | `metrics/late-checkout-grant-rate.md` | **drafted**（无默认费表） |
| C28-06e | Simulation | `cases/sim-2026-late-checkout-sat.md` | **drafted** |
| C28-06f | 问题树 §74 | `diagnosis/problem-tree.md` §74 | **appended** |
| C28-06g | 源表 §56 | `sources/source-map.md` §56 | **appended**（Aydin 2018 + Exely + OPERA Scheduling + Roomdex/Guestivo；Prostay Cloudflare 不当核页） |
| C28-06h | 研究 log | `research-log/2026-08-28-0617-scout.md` | **drafted** |

**一句话：** 延退吃周转窗，不是砍过夜 BAR；高峰不免费大批，Hold 779–799 首选 799。

杠杆序：先拆同日小时 vs 整晚/钟点 → Ahead 不免费大批 + Hold BAR → 费表 NV → 弱夜可收费附营 → 早到须交回；P46/P44/P63/P61 误入移交。

调用：用户说「延退免费可不可以」「高峰挡下午到店」「嫌退房早砍 BAR」「早到没房先占」→ **P67**。不要 BAR→399。不要高峰默认免费大批。

兼容：**无真矛盾，无 needs_revision。** P46=整晚；P44=钟点产品；P63=产能顶；P61=升房。04:17 不规定 → 06:17 核实后开 = **槽序**。

刻意不补：**P68**；重写 R28-04 / C28-02 / T28-00 / T1–T12 / P01–P66 正文；华住延退 SOP；€ 费表。

下一槽 **08:17 = theory hour**。**不规定 P68。**

## 理论深挖 · T28-08 · T-Late 同日小时吃周转窗，不是过夜需求尺（2026-08-28 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-06 / R28-04 / C28-02 / T28-00 / T1–T12**。未重写 P01–P67 **正文**（P67 仅头一行理论指针；邻卡仅文末一行）。未开 **P68**。未编华住延退 SOP、默认费表、会员免费时刻、€ 价带中国 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-0817-late-checkout-theory.md`。06:17「不要规定 P68」= scout/recap 不得指定下一剧本；本 theory 小时遵守，只加深延退理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T28-08a | T-Late 理论卡 | `theory/late-checkout-turnover.md` | **drafted** |
| T28-08b | P67 头一行理论 | `advisor-playbooks/late-checkout-early-checkin.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T28-08c | 文末一行 ×5 | 主卡 / grant-rate / P46 / P44 / P63 · T-Staff | **last-line only** |
| T28-08d | 源表 §57 | `sources/source-map.md` §57 | **appended**（OPERA Advance Check In 26.2 + Check Out Early 26.2 打开；§56 指针；Discount Reasons timeout） |
| T28-08e | 问题树 | — | **skipped**（§74 已够） |
| T28-08f | 研究 log | `research-log/2026-08-28-0817-late-checkout-theory.md` | **drafted** |

**一句话：** 同日延退/早到吃周转窗，不是过夜需求尺；FO 时刻/旗不是定价权。

核心：三把钟（同日小时 / 整晚 / 钟点产品）；Advance Check In 旗 ≠ 占未交回房（Auto CI ← room status match）；Check Out Early = P46；Scheduled Checkout = 时刻不是改 BAR；假尺子一族（嫌 12 点走 ≠ 砍过夜 BAR）；ask-list 全 NV。

调用：用户说「延退免费可不可以」「高峰挡下午到店」「嫌退房早砍 BAR」「早到没房先占」→ Diagnose 走 **T-Late**，过程仍 **P67**。不要 BAR→399。不要高峰默认免费大批。

兼容：**无真矛盾，无 needs_revision。** P67 三句原样、399-rejected / 799-Hypothesis 不改；P46=整晚；P44=钟点；P63=吞吐顶；P01/P45=Ahead/早会。06:17 写 P67 → 08:17 写 T-Late = **槽序**。

刻意不补：**P68**；新剧本；第二张主卡；华住延退 SOP；€ 费表；重写公式；重写 C28-06 / R28-04 / T1–T12 / P01–P67 正文；问题树新枝。

下一槽 **10:17 = case hour**。**不规定 P68**（theory hour 不得指定）。不要把 **T-Late 列为「下一轮要写」— 已 drafted**。不要开 P68。


## 案例与剧本 · C28-10 · P68 新店开业价 / 开业促销不是必须跟的市场价格（2026-08-28 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T28-08 / C28-06 / R28-04 / C28-02 / T1–T12**。未重写 P01–P67 **正文**（仅邻剧/卡文末一行）。未开 **P69**。未编华住开业 SOP、开业折扣%、新店几天必须进 Comp Set、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（对面 intro）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-1017-new-opening.md`。08:17「不要规定 P68」= theory 槽不得指定；本案例槽核实 T15 新店开业缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-10a | P68 | `advisor-playbooks/new-competitor-opening.md` | **drafted** |
| C28-10b | 主卡 | `recommendations/dont-match-opening-dump.md` | **active** |
| C28-10c | 轻指标 | `metrics/intro-rate-vs-pace.md` | **drafted**（无默认跟价 %） |
| C28-10d | Simulation | `cases/sim-2026-new-hotel-open-sat.md` | **drafted** |
| C28-10e | 问题树 §75 | `diagnosis/problem-tree.md` §75 | **appended** |
| C28-10f | 源表 §58 | `sources/source-map.md` §58 | **appended**（Cornell Chronicle 2003 Enz 打开；Lighthouse Comp Set 2026-05-01 打开；PriceLabs Promo vs BAR 打开；hotelier.cloud C 实践打开） |
| C28-10g | 研究 log | `research-log/2026-08-28-1017-new-opening.md` | **drafted** |

**一句话：** 开业/intro 价不是必须跟的市场价格。Ahead 不跟 dump，Hold 779–799 首选 799。

核心：形 A Ahead Hold；形 B 拒 BAR→399；形 C→P36；形 D→P16；形 E 真弱 P05 理由写 Pace；形 F Comp Set 观察名单 / 自己软开围栏不当永久 BAR。399 永不推荐为新 BAR。

调用：用户说「对面新开业 399 要不要跟」「开业周不砍没人订」「我们刚开所以 399」「新店进 Comp Set 今晚对齐」→ Diagnose/过程走 **P68**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P16=已开业连续战；P36=不可比；P15=满房溢出；P05=真 leftover；P57=月报份额。08:17 不规定 → 10:17 核实后开 = **槽序**。

刻意不补：**P69**；重写 T28-08 / C28-06 / T1–T12 / P01–P67 正文；华住开业 SOP；开业折扣%。

下一槽 **12:17 = sources/recap**。**不规定 P69。**


## 来源与复盘 · R28-12 · P67 / T-Late / P68（2026-08-28 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-10 / T28-08 / C28-06 / T1–T12**。未重写 P01–P68 / T-Late **正文**。未开 **P69**。未编华住延退 / 开业 SOP、默认费表、开业折扣%、会员免费时刻、€ 价带中国 Fact、佣金%、Walk $、699。14/399/799 与 14/399/799 Simulation only；**399 = P67 安抚 dump / P68 对面 intro（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-1217-sources-recap.md`。10:17「不要规定 P69」= recap 槽不得指定；本小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R28-12a | 源表 §59 | `sources/source-map.md` §59 | **appended**（OPERA Cloud 26.2 Discount Reasons 升级 08:17 timeout；Taktikon Soft Openings 打开；§56–58 指针） |
| R28-12b | 复盘 log | `research-log/2026-08-28-1217-sources-recap.md` | **drafted** |
| R28-12c | backlog | `backlog/research-backlog.md` | **appended** |
| R28-12d | systems | — | **no change**（OPERA = Vendor PMS help 进 source-map；Taktikon = 实践文；不写新页） |

**一句话：** 近三轮无真矛盾；OPERA Discount Reasons 钉「延退费∈客房过账 ≠ 改 BAR」；Taktikon 钉「软开价锚定市场，不 panic dump」；不规定 P69。

复盘结论：**无 needs_revision。** P67 三句 / 399-rejected / 799-Hypothesis 未被 T-Late 改写；P67 与 P46/P44/P63/P61/P01/P45 边界清楚；P68 与 P16/P36/P15/P05/P57/T20 边界清楚；P67/T-Late vs P68 对象不同、huddle 不碰撞（周转窗 vs 开业 intro）；假尺子族兼容。08:17 不规定 → 10:17 写 P68 = **槽序**。

刻意不补：**P69**；新剧本；理论卡；重写 C28-10 / T28-08 / C28-06 / T1–T12 / P01–P68 正文；华住 SOP；默认费表；开业折扣%。

下一槽 **14:17 = scout hour**。**不规定 P69。** 不要把 **P67 / T-Late / P68 列为「下一轮要写」— 已 drafted**。


## 侦察空档 · C28-14 · P69 含早/套餐价 vs 公开 BAR（2026-08-28 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R28-12 / C28-10 / T28-08 / C28-06 / T1–T12**。未重写 P01–P68 **正文**（仅邻剧/卡文末一行）。未开 **P70**。未编华住含早 SOP、默认加价 ¥、佣金%、699。180/14/399/799/899 Simulation only；**399 = 被拒绝的 dump**；899 = 套餐挂牌 Simulation，不是新 BAR；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-1417-scout.md`。12:17「不要规定 P69」= recap 槽不得指定；本 scout 核实套餐/含早缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-14a | Scout | `scout/2026-08-28-1417.md` | **drafted** |
| C28-14b | P69 | `advisor-playbooks/package-breakfast-vs-bar.md` | **drafted** |
| C28-14c | 主卡 | `recommendations/dont-cut-bar-for-package.md` | **active** |
| C28-14d | 轻指标 | `metrics/ep-vs-package-gap.md` | **drafted**（无默认加价 %） |
| C28-14e | Simulation | `cases/sim-2026-breakfast-package-sat.md` | **drafted** |
| C28-14f | 问题树 §76 | `diagnosis/problem-tree.md` §76 | **appended** |
| C28-14g | 源表 §60 | `sources/source-map.md` §60 | **appended**（OPERA About BAR + Package Codes + OnlineHotelier + Prostay；UMass/Finoko timeout 不当核页） |
| C28-14h | 研究 log | `research-log/2026-08-28-1417-scout.md` | **drafted** |

**一句话：** 套餐/含早挂牌不是公开 BAR；以 EP 为尺；Ahead Hold 779–799 首选 799。

杠杆序：先拆 EP vs CP/套餐 → Ahead Hold EP BAR → 拒地板/拒套餐当新 BAR → P36/P27/P20/P05 误入移交。

调用：用户说「BAR 是含早价再砍裸房」「套餐 399 当新 BAR」「含早所以房费地板」「CP 挂出去了所以 BAR 就是那个价」→ **P69**。不要 BAR→399。不要把套餐写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P36=竞对含早截图；P27=盲盒假打包；P20=净价；P05=真弱。12:17 不规定 → 14:17 核实后开 = **槽序**。

刻意不补：**P70**；重写 R28-12 / C28-10 / T1–T12 / P01–P68 正文；华住含早 SOP；默认加价 %。

下一槽 **16:17 = theory hour**。**不规定 P70。**


## 理论深挖 · T28-16 · T-Package 套餐挂牌不是公开 BAR，分摊/餐食旗不是定价权（2026-08-28 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-14 / R28-12 / C28-10 / T28-08 / T1–T12**。未重写 P01–P69 **正文**（P69 仅头一行理论指针；邻卡仅文末一行）。未开 **P70**。未编华住含早 SOP、默认加价 ¥、佣金%、699。180/14/399/799/899 Simulation only；**399 = 被拒绝的 dump**；899 = 套餐挂牌 Simulation，不是新 BAR；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-1617-package-theory.md`。14:17「不要规定 P70」= scout 不得指定下一剧本；本 theory 小时遵守，只加深套餐/EP 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T28-16a | T-Package 理论卡 | `theory/package-vs-ep-bar.md` | **drafted** |
| T28-16b | P69 头一行理论 | `advisor-playbooks/package-breakfast-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis / 899-not-BAR 原样） |
| T28-16c | 文末一行 ×6 | 主卡 / ep-vs-package-gap / P36 / P36主卡 / P27 / P68 | **last-line only** |
| T28-16d | 源表 §61 | `sources/source-map.md` §61 | **appended**（OPERA 26.2 Reservation Packages + Channel Meal Plan + Peaqplus BAR structure；§60 指针） |
| T28-16e | 问题树 | — | **skipped**（§76 已够） |
| T28-16f | 研究 log | `research-log/2026-08-28-1617-package-theory.md` | **drafted** |

**一句话：** 套餐/含早挂牌不是公开 BAR；分摊与餐食旗不是定价权。过程仍 P69。

核心：三把价（EP BAR / 套餐挂牌 / 分摊后住宿净额）；排除套餐元素不减房价；Meal Plan 旗 ≠ BAR；派生方向 BAR→套餐，不是反砍锚；假尺子一族（含早了 ≠ 砍公开 EP）；ask-list 全 NV。

调用：用户说「BAR 是含早价再砍裸房」「套餐 399 当新 BAR」「含早所以房费地板」「CP 挂出去了所以 BAR 就是那个价」→ Diagnose 走 **T-Package**，过程仍 **P69**。不要 BAR→399。不要把套餐写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P69 三句原样、399-rejected / 799-Hypothesis / 899-not-BAR 不改；P36=竞对含早；P27=假打包；P20=净价；P01/P45=Ahead/早会。14:17 写 P69 → 16:17 写 T-Package = **槽序**。

刻意不补：**P70**；新剧本；第二张主卡；华住含早 SOP；默认加价 %；重写公式；重写 C28-14 / R28-12 / T1–T12 / P01–P69 正文；问题树新枝。

下一槽 **18:17 = case hour**。**不规定 P70**（theory hour 不得指定）。不要把 **T-Package 列为「下一轮要写」— 已 drafted**。不要开 P70。

## 案例与剧本 · C28-18 · P70 装修/分阶段施工/软重开不是砍 BAR（2026-08-28 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T28-16 / C28-14 / R28-12 / C28-10 / T1–T12**。未重写 P01–P69 **正文**（仅邻剧/卡文末一行）。未开 **P71**。未编华住装修 SOP、默认装修折扣 %、佣金%、699。180/40/140/14/399/799 Simulation only；**399 = 被拒绝的 dump（装修冲量 / 软重开地板）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-1817-renovation.md`。16:17「不要规定 P70」= theory 槽不得指定；本案例槽核实 scout #2 装修缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-18a | P70 | `advisor-playbooks/soft-renovation-phased-reopen.md` | **drafted** |
| C28-18b | 主卡 | `recommendations/dont-dump-bar-for-renovation.md` | **active** |
| C28-18c | 轻指标 | `metrics/renovation-sellable-vs-pace.md` | **drafted**（无默认装修折扣 %） |
| C28-18d | Simulation | `cases/sim-2026-renovation-ooo-sat.md` | **drafted** |
| C28-18e | 问题树 §77 | `diagnosis/problem-tree.md` §77 | **appended** |
| C28-18f | 源表 §62 | `sources/source-map.md` §62 | **appended**（OPERA 26.2 OOO 打开；Sara Dual-Inventory 打开；Taktikon Soft Discount Trap 指针；OO/OS Reasons timeout） |
| C28-18g | 研究 log | `research-log/2026-08-28-1817-renovation.md` | **drafted** |

**一句话：** 装修/软重开不是砍公开 BAR 的许可证。先重算可售；Ahead Hold 779–799 首选 799。

核心：形 A 装修假弱重算可售；形 B 拒 BAR→399 Soft Discount Trap；形 C 局部噪音不改全店 BAR；形 D 双库存；形 E→P05；形 F→P68/P37/P39。399 永不推荐为新 BAR。

调用：用户说「半边装修要不要砍」「软重开先 399」「施工期 OCC 低所以 dump」「噪音所以全店地板」→ Diagnose/过程走 **P70**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P37=泛维修分母；P68=对面 intro；P39=差评砍量；P05=真 leftover。16:17 不规定 → 18:17 核实后开 = **槽序**。

刻意不补：**P71**；重写 T28-16 / C28-14 / T1–T12 / P01–P69 正文；华住装修 SOP；默认装修折扣 %。

下一槽 **20:17 = sources/recap**。**不规定 P71。**


## 来源与复盘 · R28-20 · P69 / T-Package / P70（2026-08-28 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-18 / T28-16 / C28-14 / T1–T12**。未重写 P01–P70 / T-Package **正文**。未开 **P71**。未编华住含早/装修 SOP、默认加价¥、装修折扣%、佣金%、Walk $、699。14/399/799/899 与 14/399/799 Simulation only；**399 = P69 含早地板 / P70 装修冲量（均拒绝）**；**899 = 套餐挂牌 Simulation，不是新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-2017-sources-recap.md`。18:17「不要规定 P71」= case 槽不得指定下一本；本 recap 小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R28-20a | 源表 §63 | `sources/source-map.md` §63 | **appended**（OPERA Cloud 26.2 OO/OS Reasons 升级 18:17 timeout；OPERA Cloud 26.1 Unit Statuses 同组第二核页；§60–62 指针） |
| R28-20b | 复盘 log | `research-log/2026-08-28-2017-sources-recap.md` | **drafted** |
| R28-20c | backlog | `backlog/research-backlog.md` | **appended** |
| R28-20d | systems | — | **no change**（OPERA = Vendor PMS help 进 source-map；不写新 RMS 页） |

**一句话：** 近三轮无真矛盾；OPERA OO/OS 钉「OO 扣库存、100%=Inventory−OOO；OS 仍在库」；Unit Status 钉「扣库存与进统计分闸≠定价权」；不规定 P71。

复盘结论：**无 needs_revision。** P69 三句 / 399-rejected / 799-Hypothesis / 899-not-BAR 未被 T-Package 改写；P69 与 P36/P27/P20/P05/P01/P45 边界清楚；P70 与 P37/P68/P39/P05 边界清楚；P69/T-Package vs P70 对象不同、huddle 不碰撞（价码尺 vs 供给分母）；假尺子族兼容。16:17 不规定 → 18:17 写 P70 = **槽序**。

刻意不补：**P71**；新剧本；理论卡；重写 C28-18 / T28-16 / C28-14 / T1–T12 / P01–P70 正文；华住 SOP；默认加价¥；装修折扣%。

下一槽 **22:17 = scout hour**。**不规定 P71。** 不要把 **P69 / T-Package / P70 列为「下一轮要写」— 已 drafted**。


## 侦察与剧本 · C28-22 · P71 年标/企业协议价不是公开 BAR（2026-08-28 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R28-20 / C28-18 / T28-16 / C28-14 / T1–T12**。未重写 P01–P70 **正文**（仅邻剧/卡文末一行）。未开 **P72**。未编华住年标 SOP、默认折扣 %、佣金%、LRA Fact %、699。180/14/399/499/799 Simulation only；**399 = 被拒绝的 dump（冲量好签年标）**；**499 = 被拒绝的「对齐年标」新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-28-2217-scout.md`。20:17「不要规定 P71」= recap 槽不得指定；本 scout 核实年标/RFP 缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C28-22a | P71 | `advisor-playbooks/corporate-annual-rate-vs-bar.md` | **drafted** |
| C28-22b | 主卡 | `recommendations/dont-anchor-bar-to-corp-rate.md` | **active** |
| C28-22c | 轻指标 | `metrics/corp-rate-vs-public-bar.md` | **drafted**（无默认折扣 %） |
| C28-22d | Simulation | `cases/sim-2026-corp-annual-rate-sat.md` | **drafted** |
| C28-22e | 问题树 §78 | `diagnosis/problem-tree.md` §78 | **appended** |
| C28-22f | 源表 §64 | `sources/source-map.md` §64 | **appended**（OPERA 26.2 Profile Negotiated Rates 打开；OPERA 21.4 BAR Based 打开；roommaster 2026-08-03 打开） |
| C28-22g | 研究 log | `research-log/2026-08-28-2217-scout.md` | **drafted** |
| C28-22h | scout | `scout/2026-08-28-2217.md` | **drafted** |

**一句话：** 年标/企业协议价不是公开 BAR。不要把 BAR 跟到年标或为签年标先砍 BAR。Ahead Hold 779–799 首选 799。

核心：形 A 拆年标 vs 公开；形 B 拒 499 对齐；形 C 拒 399 冲量；形 D→P26；形 E→P48；形 F→P10/P56。399/499 永不推荐为新 BAR。

调用：用户说「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签」「年标就是 BAR」→ Diagnose/过程走 **P71**。不要 BAR→499。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P26=已签码漏出；P48=政务；P10=一场团；P56=月末。20:17 不规定 → 22:17 核实后开 = **槽序**。

刻意不补：**P72**；重写 R28-20 / C28-18 / T1–T12 / P01–P70 正文；华住年标 SOP；默认折扣 %；LRA Fact %。

下一槽 **00:17 = theory hour**。**不规定 P72。**



## 理论深挖 · T29-00 · T-Corp 年标不是公开 BAR，资格闸/派生/LRA 不是定价权（2026-08-29 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C28-22 / R28-20 / C28-18 / T28-16 / T1–T12**。未重写 P01–P71 **正文**（P71 仅头一行理论指针；邻卡仅文末一行）。未开 **P72**。未编华住年标 SOP、默认折扣 %、佣金%、LRA Fact %、699。180/14/399/499/799 Simulation only；**399 = 被拒绝的 dump**；**499 = 被拒绝的「对齐年标」新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-0017-corp-theory.md`。22:17「不要规定 P72」= scout 不得指定下一剧本；本 theory 小时遵守，只加深年标 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T29-00a | T-Corp 理论卡 | `theory/negotiated-corp-vs-bar.md` | **drafted** |
| T29-00b | P71 头一行理论 | `advisor-playbooks/corporate-annual-rate-vs-bar.md` | **header only**（三句 / 399-rejected / 499-rejected / 799-Hypothesis 原样） |
| T29-00c | 文末一行 × 邻卡 | 主卡 / corp-rate-vs-public-bar / P26 / P48 / P10 / P56 / T-Gov | **last-line only** |
| T29-00d | 源表 §65 | `sources/source-map.md` §65 | **appended**（OPERA 26.2 BAR Based 升级 + Rate Codes Negotiated 勾选 + Controls NEGOTIATED RATES + Channel Negotiated + IDeaS Glossary；§64 指针） |
| T29-00e | 问题树 | — | **skipped**（§78 已够） |
| T29-00f | 研究 log | `research-log/2026-08-29-0017-corp-theory.md` | **drafted** |

**一句话：** 年标/企业协议价不是公开 BAR；资格闸、BAR Based 派生、LRA 关码约束都不是定价权。过程仍 P71。

核心：三把价（公开 BAR / 年标合同价 / 置换剩余）；Negotiated 勾选必须挂 profile；Look to Book 出示合同价 = 报对码不是改 BAR；派生方向 BAR→协议；Semi-Yieldable = 关协议码的闸不是 dump 令；假尺子一族（年标 ≠ 砍公开 BAR）；ask-list 全 NV。

调用：用户说「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签」「年标就是 BAR」→ Diagnose 走 **T-Corp**，过程仍 **P71**。不要 BAR→499。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P71 三句原样、399-rejected / 499-rejected / 799-Hypothesis 不改；P26=漏出；P48=政务；P10=一场团；P56=月末；P01/P45=Ahead/早会。22:17 写 P71 → 00:17 写 T-Corp = **槽序**。

刻意不补：**P72**；新剧本；第二张主卡；华住年标 SOP；默认折扣 %；LRA Fact %；重写公式；重写 C28-22 / R28-20 / T1–T12 / P01–P71 正文；问题树新枝。

下一槽 **02:17 = case hour**。**不规定 P72**（theory hour 不得指定）。不要把 **T-Corp 列为「下一轮要写」— 已 drafted**。不要开 P72。

## 案例与剧本 · C29-02 · P72 姐妹店溢出/区域统价不是公开 BAR（2026-08-29 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 T29-00 / C28-22 / R28-20 / C28-18 / T1–T12。未重写 P01–P71 正文（仅邻剧/卡文末一行）。未开 P73。未编华住 cluster SOP、默认溢出折扣 %、佣金%、区域统价 Fact %、699。180/14/399/799 Simulation only；399 = 被拒绝的 dump（按姐妹店接 / 区域统最低）；799 仅 Hypothesis/Simulation。全文：research-log/2026-08-29-0217-sister-overflow.md。00:17「不要规定 P72」= theory 槽不得指定；本案例槽核实 22:17 scout #4 姐妹店/多店溢出缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-02a | P72 | advisor-playbooks/sister-cluster-overflow.md | drafted |
| C29-02b | 主卡 | recommendations/dont-match-sister-overflow-rate.md | active |
| C29-02c | 轻指标 | metrics/sister-rate-vs-own-pace.md | drafted（无默认溢出折扣 %） |
| C29-02d | Simulation | cases/sim-2026-sister-overflow-sat.md | drafted |
| C29-02e | 问题树 §79 | diagnosis/problem-tree.md §79 | appended |
| C29-02f | 源表 §66 | sources/source-map.md §66 | appended |
| C29-02g | 研究 log | research-log/2026-08-29-0217-sister-overflow.md | drafted |

一句话：姐妹店溢出 / 区域统价不是公开 BAR。接溢出按本店 BAR；Ahead Hold 779–799 首选 799。

核心：形 A 拆两店价；形 B 拒 BAR 到 399 按她们接；形 C 拒统最低；形 D 拒帮空店先砍；形 E 走 P01/P15；形 F 走 P10/P71/P15。399 永不推荐为新 BAR。

调用：用户说按她们 399 接、区域统一跟最低、姐妹店空着我们别涨、不砍就丢给美团 → Diagnose/过程走 P72。不要把 BAR 改成 399。

兼容：无真矛盾，无 needs_revision。P15=非姐妹竞对满；P10=一场团；P71=年标；P05=真 leftover。00:17 不规定 → 02:17 核实后开 = 槽序。

刻意不补：P73；重写 T29-00 / C28-22 / T1–T12 / P01–P71 正文；华住 cluster SOP；默认溢出折扣 %。

下一槽 04:17 = sources/recap。不规定 P73。


## 来源与复盘 · R29-04 · P71 / T-Corp / P72（2026-08-29 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-02 / T29-00 / C28-22 / R28-20 / T1–T12**。未重写 P01–P72 / T-Corp **正文**。未开 **P73**。未编华住年标/cluster SOP、默认折扣%、溢出折扣%、佣金%、LRA Fact %、区域统价 Fact %、699。14/399/499/799 与 14/399/799 Simulation only；**399 = P71 冲量好签 / P72 按姐妹店接（均拒绝）**；**499 = 被拒绝的「对齐年标」新 BAR**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-0417-sources-recap.md`。02:17「不要规定 P73」= case 槽不得指定下一本；本 recap 小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R29-04a | 源表 §67 | `sources/source-map.md` §67 | **appended**（OPERA Cloud 26.2 Moving Reservations to Other Properties；OPERA Cloud 26.2 Reservation Sales Screen；HSMAI Academy BAR glossary；§64–66 指针） |
| R29-04b | 复盘 log | `research-log/2026-08-29-0417-sources-recap.md` | **drafted** |
| R29-04c | backlog | `backlog/research-backlog.md` | **appended** |
| R29-04d | systems | — | **no change**（OPERA = Vendor PMS help 进 source-map；HSMAI = 协会词条；duetto Multi-property 02:17 已填，Sister Property 仍墙） |

**一句话：** 近三轮无真矛盾；OPERA 移店钉「目的店重选价，Same Rate Amount 是可选控制」；中央售屏钉「各店各价、协议须 profile」；HSMAI BAR 钉「非资格公开」；不规定 P73。

复盘结论：**无 needs_revision。** P71 三句 / 399-rejected / 499-rejected / 799-Hypothesis 未被 T-Corp 改写；P71 与 P26/P48/P10/P56/P01/P45 边界清楚；P72 与 P15/P10/P71/P05 边界清楚；P71/T-Corp vs P72 对象不同、huddle 不碰撞（账户合同尺 vs 多店导客/统价）；假尺子族兼容。00:17 不规定 → 02:17 写 P72 = **槽序**。

刻意不补：**P73**；新剧本；理论卡；重写 C29-02 / T29-00 / C28-22 / T1–T12 / P01–P72 正文；华住 SOP；默认折扣%/溢出折扣%。

下一槽 **06:17 = scout hour**。**不规定 P73。** 不要把 **P71 / T-Corp / P72 列为「下一轮要写」— 已 drafted**。


## 侦察与剧本 · C29-06 · P73 闪促/秒杀不是永久公开 BAR（2026-08-29 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R29-04 / C29-02 / T29-00 / C28-22 / T1–T12**。未重写 P01–P72 **正文**（仅邻剧/卡文末一行）。未开 **P74**。未编华住闪促 SOP、默认闪促折扣 %、佣金%、秒杀时长 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（闪促改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-0617-scout.md`。04:17「不要规定 P73」= recap 槽不得指定；本 scout 核实闪促改尺缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-06a | Scout | `scout/2026-08-29-0617.md` | **drafted** |
| C29-06b | P73 | `advisor-playbooks/flash-promo-vs-bar.md` | **drafted** |
| C29-06c | 主卡 | `recommendations/dont-rewrite-bar-to-flash.md` | **active** |
| C29-06d | 轻指标 | `metrics/flash-vs-public-bar.md` | **drafted**（无默认闪促折扣 %） |
| C29-06e | Simulation | `cases/sim-2026-flash-promo-sat.md` | **drafted** |
| C29-06f | 问题树 §80 | `diagnosis/problem-tree.md` §80 | **appended** |
| C29-06g | 源表 §68 | `sources/source-map.md` §68 | **appended**（OPERA Promotion Codes + Controls PROMOTIONS_MODULE + PriceLabs Promo vs BAR） |
| C29-06h | 研究 log | `research-log/2026-08-29-0617-scout.md` | **drafted** |

**一句话：** 闪促/秒杀不是永久公开 BAR。Ahead Hold 779–799 首选 799。不要 BAR→399「卖爆了」。

核心：形 A 拆闪促 vs 公开；形 B 拒改尺；形 C 关过期闪促；形 D→P68/P16；形 E→P05；形 F→P18/P23。399 永不推荐为新 BAR。

调用：用户说「闪促爆了改 BAR」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完砍 BAR」→ Diagnose/过程走 **P73**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P18=报名闸；P64=嵌套忘关；P68=对面开业 intro；P05=真 leftover。04:17 不规定 → 06:17 核实后开 = **槽序**。

刻意不补：**P74**；重写 R29-04 / C29-02 / T1–T12 / P01–P72 正文；华住闪促 SOP；默认折扣 %。

下一槽 **08:17 = theory hour**。**不规定 P74。**

## 理论深挖 · T29-08 · T-Flash 闪促窗不是公开 BAR，促销模块/Booking·Stay 窗/HIDE 不是定价权（2026-08-29 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-06 / R29-04 / C29-02 / T29-00 / T1–T12**。未重写 P01–P73 **正文**（P73 仅头一行理论指针；邻卡仅文末一行）。未开 **P74**。未编华住闪促 SOP、默认闪促折扣 %、佣金%、秒杀时长 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-0817-flash-theory.md`。06:17「不要规定 P74」= scout 不得指定下一剧本；本 theory 小时遵守，只加深闪促 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T29-08a | T-Flash 理论卡 | `theory/promotion-window-vs-bar.md` | **drafted** |
| T29-08b | P73 头一行理论 | `advisor-playbooks/flash-promo-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T29-08c | 文末一行 × 邻卡 | 主卡 / flash-vs-public-bar / P18 / P64 / P68 / P05 | **last-line only** |
| T29-08d | 源表 §69 | `sources/source-map.md` §69 | **appended**（OPERA 26.2 Promotion Groups 新开 + Promotion Codes 升核 + AltexSoft 2026-04-15；§68 指针） |
| T29-08e | 问题树 | — | **skipped**（§80 已够） |
| T29-08f | 研究 log | `research-log/2026-08-29-0817-flash-theory.md` | **drafted** |

**一句话：** 闪促/秒杀不是永久公开 BAR；促销模块、Booking/Stay 窗、HIDE、Promotion Group 都不是定价权。过程仍 P73。

核心：三把价（公开 BAR / 闪促挂牌 / 窗状态）；卖爆了是需求信号不是改尺令；假尺子一族（闪促 ≠ 砍公开 BAR）；ask-list 全 NV。

调用：用户说「闪促 399 爆了改 BAR」「秒杀价就是我们的价」「限时抢结束了还挂着」「平台闪购跟完砍 BAR」→ Diagnose 走 **T-Flash**，过程仍 **P73**。不要 BAR→399。不要把闪促写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P73 三句原样、399-rejected / 799-Hypothesis 不改；P18=报名闸；P64=嵌套忘关；P68=开业 intro；P05=leftover；P01/P45=Ahead/早会。06:17 写 P73 → 08:17 写 T-Flash = **槽序**。

刻意不补：**P74**；新剧本；第二张主卡；华住闪促 SOP；默认折扣 %；秒杀时长 Fact；重写公式；重写 C29-06 / R29-04 / T1–T12 / P01–P73 正文；问题树新枝。

下一槽 **10:17 = case hour**。**不规定 P74**（theory hour 不得指定）。不要把 **T-Flash 列为「下一轮要写」— 已 drafted**。不要开 P74。



## 案例与剧本 · C29-10 · P74 OTA 券后价/平台出资不是公开 BAR（2026-08-29 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T29-08 / C29-06 / R29-04 / C29-02 / T1–T12**。未重写 P01–P73 **正文**（仅邻剧/卡文末一行）。未开 **P75**。未编华住券 SOP、美团·携程默认出资%、佣金%、券门槛 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（券后改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-1017-coupon-after.md`。08:17「不要规定 P74」= theory 槽不得指定；本案例槽核实 06:17 scout #3 券后/平台出资缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-10a | P74 | `advisor-playbooks/ota-coupon-funded-vs-bar.md` | **drafted** |
| C29-10b | 主卡 | `recommendations/dont-rewrite-bar-to-coupon-after.md` | **active** |
| C29-10c | 轻指标 | `metrics/coupon-after-vs-public-bar.md` | **drafted**（无默认券折扣 %） |
| C29-10d | Simulation | `cases/sim-2026-coupon-after-sat.md` | **drafted** |
| C29-10e | 问题树 §81 | `diagnosis/problem-tree.md` §81 | **appended** |
| C29-10f | 源表 §70 | `sources/source-map.md` §70 | **appended**（OPERA Coupon Codes + HotelTechUpdate 2026-08-03 + DirectYourBookings 2026-08-21；§68 指针） |
| C29-10g | 研究 log | `research-log/2026-08-29-1017-coupon-after.md` | **drafted** |

**一句话：** 券后价 / 平台出资折扣不是公开 BAR。Ahead Hold 779–799 首选 799。不要 BAR→399「券后市场认」。

核心：形 A 拆券后 vs 公开；形 B 拒 BAR→399；形 C 平台出资先排除破平借口；形 D→P18；形 E→P36；形 F→P05。真破平→P59；闪促改尺→P73。399 永不推荐为新 BAR。

调用：用户说「美团券后 399 改 BAR」「平台补完就是市场价」「客人截图券后便宜所以跟」「券卖得好说明就该这个价」→ Diagnose/过程走 **P74**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P59=真破平修侧；P36=不可比；P73=自己闪促改尺；P18=报名闸；P20=净价；P05=真 leftover。08:17 不规定 → 10:17 核实后开 = **槽序**。

刻意不补：**P75**；重写 T29-08 / C29-06 / T1–T12 / P01–P73 正文；华住券 SOP；默认出资%。

下一槽 **12:17 = sources/recap**。**不规定 P75。**


## 来源与复盘 · R29-12 · P73 / T-Flash / P74（2026-08-29 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-10 / T29-08 / C29-06 / R29-04 / T1–T12**。未重写 P01–P74 / T-Flash **正文**。未开 **P75**。未编华住闪促/券 SOP、默认折扣%、秒杀时长 Fact、美团·携程出资%、佣金%、券门槛 Fact、699。14/399/799 与 14/399/799 Simulation only；**399 = P73 闪促改尺 / P74 券后改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-1217-sources-recap.md`。10:17「不要规定 P75」= case 槽不得指定下一本；本 recap 小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R29-12a | 源表 §71 | `sources/source-map.md` §71 | **appended**（OPERA Cloud 26.2 LTB Promotion/Coupon 查询闸；OPERA Cloud 26.2 Redeeming Promotional e-Certificate；Booking.com BSB 官方页；§68–70 指针） |
| R29-12b | 复盘 log | `research-log/2026-08-29-1217-sources-recap.md` | **drafted** |
| R29-12c | backlog | `backlog/research-backlog.md` | **appended** |
| R29-12d | systems | `channel/net-contribution.md` last-line only | **小填**（平台出资 ≠ 酒店 Discount_c；无新 RMS 页） |

**一句话：** 近三轮无真矛盾；OPERA LTB 钉「促销/券是查询对象」；e-Certificate 钉「资格兑换」；Booking.com BSB 钉「平台出资压展示价、酒店仍按原装入价收款」；不规定 P75。

复盘结论：**无 needs_revision。** P73 三句 / 399-rejected / 799-Hypothesis 未被 T-Flash 改写；P73 与 P18/P64/P68/P05/P01/P45 边界清楚；P74 与 P59/P36/P73/P18/P20/P05 边界清楚；P73/T-Flash vs P74 对象不同、huddle 不碰撞（自己的限时码 vs 券后/平台补贴层）；假尺子族兼容。08:17 不规定 → 10:17 写 P74 = **槽序**。

刻意不补：**P75**；新剧本；理论卡；重写 C29-10 / T29-08 / C29-06 / T1–T12 / P01–P74 正文；华住 SOP；默认折扣%/出资%。

下一槽 **14:17 = scout hour**。**不规定 P75。** 不要把 **P73 / T-Flash / P74 列为「下一轮要写」— 已 drafted**。

## 侦察与剧本 · C29-14 · P75 最低价保证/BRG/贵就赔索赔不是公开 BAR（2026-08-29 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R29-12 / C29-10 / T29-08 / C29-06 / T1–T12**。未重写 P01–P74 **正文**（仅邻剧/卡文末一行）。未开 **P76**。未编华住贵就赔 SOP、默认赔付%、佣金%、万豪/希尔顿 25% 当中国店规、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（索赔改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-1417-scout.md`。12:17「不要规定 P75」= recap 槽不得指定；本 scout 核实索赔改尺缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-14a | Scout | `scout/2026-08-29-1417.md` | **drafted** |
| C29-14b | P75 | `advisor-playbooks/best-rate-guarantee-vs-bar.md` | **drafted** |
| C29-14c | 主卡 | `recommendations/dont-rewrite-bar-for-brg.md` | **active** |
| C29-14d | 轻指标 | `metrics/brg-claim-vs-public-bar.md` | **drafted**（无默认赔付 %） |
| C29-14e | Simulation | `cases/sim-2026-brg-claim-sat.md` | **drafted** |
| C29-14f | 问题树 §82 | `diagnosis/problem-tree.md` §82 | **appended** |
| C29-14g | 源表 §72 | `sources/source-map.md` §72 | **appended**（Marriott BRG + Hilton Price Match 打开；Marriott help CSS Error 不当核页） |
| C29-14h | 研究 log | `research-log/2026-08-29-1417-scout.md` | **drafted** |

**一句话：** 最低价保证 / BRG / 贵就赔索赔不是公开 BAR。Ahead Hold 779–799 首选 799。不要 BAR→399「贵就赔 / 全网最低」。

核心：形 A 拆索赔 vs 公开；形 B 拒改尺；形 C 不合格比价→P36/P74；形 D→P59；形 E→P60；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「截图更便宜按最低价保证砍 BAR」「贵就赔所以 BAR 跟最低渠道」「被索赔了说明定价高了」→ Diagnose/过程走 **P75**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P59=真破平修侧；P36=不可比；P60=错价；P74=券后；P42=前台未订上门。12:17 不规定 → 14:17 核实后开 = **槽序**。

刻意不补：**P76**；重写 R29-12 / C29-10 / T1–T12 / P01–P74 正文；华住贵就赔 SOP；默认赔付 %；万豪/希尔顿 25% 当店规。

下一槽 **16:17 = theory hour**。**不规定 P76。**

## 理论深挖 · T29-16 · T-BRG 最低价保证索赔不是公开 BAR，先订/like-for-like/独立核验不是定价权（2026-08-29 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-14 / R29-12 / C29-10 / T29-08 / T1–T12**。未重写 P01–P75 **正文**（P75 仅头一行理论指针；邻卡仅文末一行）。未开 **P76**。未编华住贵就赔 SOP、默认赔付%、佣金%、万豪/希尔顿/IHG 加码当中国店规、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-1617-brg-theory.md`。14:17「不要规定 P76」= scout 不得指定下一剧本；本 theory 小时遵守，只加深索赔 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T29-16a | T-BRG 理论卡 | `theory/brg-claim-vs-bar.md` | **drafted** |
| T29-16b | P75 头一行理论 | `advisor-playbooks/best-rate-guarantee-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T29-16c | 文末一行 × 邻卡 | 主卡 / brg-claim-vs-public-bar / P59 / P36 / P60 / P74 / P42 / T-Parity | **last-line only** |
| T29-16d | 源表 §73 | `sources/source-map.md` §73 | **appended**（IHG BPG FAQ+Terms 新开 + Marriott/Hilton 升核；§72 指针） |
| T29-16e | 问题树 | — | **skipped**（§82 已够） |
| T29-16f | 研究 log | `research-log/2026-08-29-1617-brg-theory.md` | **drafted** |

**一句话：** 最低价保证/BRG/贵就赔索赔不是公开 BAR；先订、like-for-like、独立核验、只匹配该笔都不是定价权。过程仍 P75。

核心：三把价（公开 BAR / 索赔比价 / 该笔履约结果）；被索赔是履约信号不是改尺令；假尺子一族（索赔 ≠ 砍公开 BAR）；管辖标签（IHG 中国不适用、Hilton Hampton 中国排除）≠ 华住 SOP；ask-list 全 NV。

调用：用户说「截图更便宜按最低价保证砍 BAR」「贵就赔所以 BAR 跟最低」「被索赔了说明定价高了」→ Diagnose 走 **T-BRG**，过程仍 **P75**。不要 BAR→399。不要把索赔写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P75 三句原样、399-rejected / 799-Hypothesis 不改；P59=真破平修侧；P36=不可比；P60=错价；P74=券后；P42=walk-in；P01/P45=Ahead/早会。14:17 写 P75 → 16:17 写 T-BRG = **槽序**。

刻意不补：**P76**；新剧本；第二张主卡；华住贵就赔 SOP；默认赔付 %；品牌加码当店规；重写公式；重写 C29-14 / R29-12 / T1–T12 / P01–P75 正文；问题树新枝。

下一槽 **18:17 = case hour**。**不规定 P76**（theory hour 不得指定）。不要把 **T-BRG 列为「下一轮要写」— 已 drafted**。不要开 P76。


## 案例与剧本 · C29-18 · P76 连住促销均价/免费晚/过账节奏不是公开 BAR（2026-08-29 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T29-16 / C29-14 / R29-12 / C29-10 / T1–T12**。未重写 P01–P75 **正文**（仅邻剧/卡文末一行）。未开 **P77**。未编华住连住促销 SOP、默认免费晚 %、佣金%、Stay 3 Pay 2 折扣 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（连住促销均价改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-1817-stay-pay.md`。16:17「不要规定 P76」= theory 槽不得指定下一本；本案例小时核实 14:17 scout #2 后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-18a | P76 | `advisor-playbooks/stay-pay-promo-vs-bar.md` | **drafted** |
| C29-18b | 主卡 | `recommendations/dont-rewrite-bar-to-stay-pay-avg.md` | **active** |
| C29-18c | 轻指标 | `metrics/stay-pay-avg-vs-public-bar.md` | **drafted**（无默认免费晚 %） |
| C29-18d | Simulation | `cases/sim-2026-stay-pay-avg-sat.md` | **drafted** |
| C29-18e | 问题树 §83 | `diagnosis/problem-tree.md` §83 | **appended** |
| C29-18f | 源表 §74 | `sources/source-map.md` §74 | **appended**（OPERA 26.2 Posting Rhythm + Advanced Buy X Get Y 打开；Advanced 首试 timeout 复试打开） |
| C29-18g | 研究 log | `research-log/2026-08-29-1817-stay-pay.md` | **drafted** |

**一句话：** 连住 Stay 3 Pay 2 / 免费晚 / 过账节奏摊平均价不是公开灵活单晚 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆连住促销 vs 公开；形 B 拒 BAR→399；形 C 过账≠改尺；形 D→P21/P40；形 E→P69；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「住三付二均价才 399 改 BAR」「连住促销算下来单晚就这个价」「过账节奏把免费晚摊平了所以公开价也跟」「客人说连住更划算所以单晚也得这个价」→ Diagnose/过程走 **P76**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P21=节假日日历 MinLOS；P40=拒 Sat-only / 不砍周六；P69=含早套餐；P73=闪促窗；P18=报名闸；P05=真 leftover。16:17 不规定 → 18:17 核实后开 = **槽序**。

刻意不补：**P77**；重写 T29-16 / C29-14 / T1–T12 / P01–P75 正文；华住连住促销 SOP；默认免费晚 %。

下一槽 **20:17 = sources/recap**。**不规定 P77。**


## 来源与复盘 · R29-20 · P75 / T-BRG / P76（2026-08-29 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-18 / T29-16 / C29-14 / R29-12 / T1–T12**。未重写 P01–P76 / T-BRG **正文**。未开 **P77**。未编华住贵就赔/连住促销 SOP、默认赔付%、免费晚%、Stay 3 Pay 2 折扣 Fact、佣金%、699、万豪/希尔顿/IHG/雅高加码当店规。14/399/799 与 14/399/799 Simulation only；**399 = P75 索赔改尺 / P76 连住促销均价改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-2017-sources-recap.md`。18:17「不要规定 P77」= case 槽不得指定下一本；本 recap 小时遵守。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R29-20a | 复盘 log | `research-log/2026-08-29-2017-sources-recap.md` | **drafted** |
| R29-20b | 源表 §75 | `sources/source-map.md` §75 | **appended**（Accor BPG T&Cs May 2026；OPERA Cloud 26.2 Viewing Reservation Rate Information；§72–74 指针） |
| R29-20c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 22:17 scout；不规定 P77） |
| R29-20d | backlog | `backlog/research-backlog.md` | **appended** |
| R29-20e | systems | — | **no change**（Accor = 品牌条款进 source-map；OPERA Rate Info = Vendor PMS help 进 source-map；无新 RMS 页；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；Accor BPG 钉「先订 + like-for-like + 客服核验 + 只改该笔 Eligible Booking」；OPERA 26.2 Rate Info 钉「预订按日拆开房价/套餐 ≠ 公开 BAR」；不规定 P77。

复盘结论：**无 needs_revision。** P75 三句 / 399-rejected / 799-Hypothesis 未被 T-BRG 改写；P75 与 P59/P36/P60/P74/P42 边界清楚；P76 与 P21/P40/P69/P73/P18 边界清楚；P75/T-BRG vs P76 对象不同、huddle 不碰撞（索赔履约 vs 连住促销摊平）；假尺子族兼容。16:17 不规定 → 18:17 写 P76 = **槽序**。

刻意不补：**P77**；新剧本；理论卡；重写 C29-18 / T29-16 / C29-14 / T1–T12 / P01–P76 正文；华住 SOP；默认赔付%/免费晚%；品牌加码当店规。

下一槽 **22:17 = scout hour**。**不规定 P77。** 不要把 **P75 / T-BRG / P76 列为「下一轮要写」— 已 drafted**。


## 侦察与剧本 · C29-22 · P77 直播间/主播专属价不是公开 BAR（2026-08-29 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R29-20 / C29-18 / T29-16 / C29-14 / T1–T12**。未重写 P01–P76 **正文**（仅邻剧/卡文末一行）。未开 **P78**。未编华住/抖音店规 SOP、主播佣金%、直播时长 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（直播间改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-29-2217-scout.md`。20:17「不要规定 P77」= recap 槽不得指定下一本；本 scout 小时核实直播间改尺缺口后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C29-22a | P77 | `advisor-playbooks/live-commerce-stream-vs-bar.md` | **drafted** |
| C29-22b | 主卡 | `recommendations/dont-rewrite-bar-to-livestream.md` | **active** |
| C29-22c | 轻指标 | `metrics/livestream-vs-public-bar.md` | **drafted**（无默认直播折扣 %） |
| C29-22d | Simulation | `cases/sim-2026-livestream-sat.md` | **drafted** |
| C29-22e | 问题树 §84 | `diagnosis/problem-tree.md` §84 | **appended** |
| C29-22f | 源表 §76 | `sources/source-map.md` §76 | **appended**（抖音开放平台日历房 + OPERA Extra Adult/Occupant Threshold + 中国旅游报/TechNode C） |
| C29-22g | 研究 log | `research-log/2026-08-29-2217-scout.md` | **drafted** |
| C29-22h | scout | `scout/2026-08-29-2217.md` | **drafted** |

**一句话：** 直播间成交价 / 主播专属价不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆直播商品 vs 公开；形 B 拒 BAR→399；形 C RatePlan/预售券≠BAR；形 D→P18/P73；形 E→P74/P27；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「直播间卖爆了改 BAR」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」→ Diagnose/过程走 **P77**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P73=自己的闪促窗；P74=券后展示层；P18=报名闸；P27=opaque；P69=含早套餐；P05=真 leftover。20:17 不规定 → 22:17 核实后开 = **槽序**。

刻意不补：**P78**；重写 R29-20 / C29-18 / T1–T12 / P01–P76 正文；华住/抖音店规 SOP；主播佣金%；Extra Person 专剧。

下一槽 **00:17 = theory hour**。**不规定 P78。**


## 理论深挖 · T30-00 · T-Live 直播间/主播专属价不是公开 BAR，RatePlan/撮合&直播/佣金计划不是定价权（2026-08-30 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C29-22 / R29-20 / C29-18 / T29-16 / T1–T12**。未重写 P01–P77 **正文**（P77 仅头一行理论指针；邻卡仅文末一行）。未开 **P78**。未开 Extra Person 专剧。未编华住/抖音店规 SOP、主播佣金%、直播时长 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-0017-live-theory.md`。22:17「不要规定 P78」= scout 不得指定下一剧本；本 theory 小时遵守，只加深直播商品 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T30-00a | T-Live 理论卡 | `theory/live-commerce-vs-bar.md` | **drafted** |
| T30-00b | P77 头一行理论 | `advisor-playbooks/live-commerce-stream-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T30-00c | 文末一行 × 邻卡 | 主卡 / livestream-vs-public-bar / P73 / P18 / P74 / P27 / P69 / P05 / T-Flash | **last-line only** |
| T30-00d | 源表 §77 | `sources/source-map.md` §77 | **appended**（佣金计划 API + OPERA Rate Categories/Classes 新开；日历房升核；§76/§68 指针） |
| T30-00e | 问题树 | — | **skipped**（§84 已够） |
| T30-00f | 研究 log | `research-log/2026-08-30-0017-live-theory.md` | **drafted** |

**一句话：** 直播间成交价/主播专属价不是公开 BAR；RatePlan、撮合&直播、预售券、秒杀·货补、佣金计划、Rate Category/Class 都不是定价权。过程仍 P77。

核心：三把价（公开 BAR / 直播间·主播专属挂牌 / 商品窗状态）；卖爆是需求/渠道信号不是改尺令；假尺子一族（直播 ≠ 砍公开 BAR）；ask-list 全 NV。

调用：用户说「直播间卖爆了改 BAR」「主播价就是市场价」「日历房挂 399 所以公开也得 399」「不跟直播价就没人订」→ Diagnose 走 **T-Live**，过程仍 **P77**。不要 BAR→399。不要把直播成交写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P77 三句原样、399-rejected / 799-Hypothesis 不改；P73=自己的闪促窗；P74=券后；P18=报名闸；P27=opaque；P69=含早；P05=真 leftover；P01/P45=Ahead/早会。22:17 写 P77 → 00:17 写 T-Live = **槽序**。

刻意不补：**P78**；新剧本；第二张主卡；Extra Person 专剧；华住/抖音店规 SOP；主播佣金%；直播时长 Fact；重写公式；重写 C29-22 / R29-20 / T1–T12 / P01–P77 正文；问题树新枝。

下一槽 **02:17 = case hour**。**不规定 P78**（theory hour 不得指定）。不要把 **T-Live / P77 列为「下一轮要写」— 已 drafted**。不要开 P78。


## 案例与剧本 · C30-02 · P78 Extra Person/加床/Occupant Threshold 不是公开 BAR（2026-08-30 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T30-00 / C29-22 / R29-20 / C29-18 / T1–T12**。未重写 P01–P77 **正文**（仅邻剧/卡文末一行）。未开 **P79**。未编华住加床/儿童 SOP、默认 Extra Person %、儿童费 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（加床/三人价改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-0217-extra-person.md`。00:17「不要规定 P78」= theory 槽不得指定下一本；本案例小时核实 Extra Person leftover（OPERA Extra Adult 已开、无专剧）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-02a | P78 | `advisor-playbooks/extra-person-vs-bar.md` | **drafted** |
| C30-02b | 主卡 | `recommendations/dont-rewrite-bar-for-extra-person.md` | **active** |
| C30-02c | 轻指标 | `metrics/extra-person-vs-public-bar.md` | **drafted**（无默认 Extra Person %） |
| C30-02d | Simulation | `cases/sim-2026-extra-person-sat.md` | **drafted** |
| C30-02e | 问题树 §85 | `diagnosis/problem-tree.md` §85 | **appended** |
| C30-02f | 源表 §78 | `sources/source-map.md` §78 | **appended**（OPERA Extra Adult/Occupant Threshold/Controls 升核 + HFP Net USALI P&L C） |
| C30-02g | 研究 log | `research-log/2026-08-30-0217-extra-person.md` | **drafted** |

**一句话：** Extra Person / 加床 / Occupant Threshold 加项不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆加项 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读法不是改尺；形 D→P69/P76/P05；形 E 阈值表≠BAR Type；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「三人住太贵改 BAR」「加床拉高均价所以跟」「儿童加床污染 ADR 砍 BAR」「人数阈值表就是公开价」→ Diagnose/过程走 **P78**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P69=含早套餐；P76=连住均价；P05=真 leftover；P01/P45=Ahead/早会；P40=Sat-only。00:17 不规定 → 02:17 核实 leftover 后开 = **槽序**。

刻意不补：**P79**；重写 T30-00 / C29-22 / T1–T12 / P01–P77 正文；华住加床/儿童 SOP；默认 Extra Person %；儿童费 Fact。

下一槽 **04:17 = sources/recap**。**不规定 P79。** 不要把 **P78 / T-Live / P77 列为「下一轮要写」— 已 drafted**。Extra Person **不再 leftover**。


## 来源与复盘 · R30-04 · P77 / T-Live / P78（2026-08-30 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-02 / T30-00 / C29-22 / R29-20 / T1–T12**。未重写 P01–P78 / T-Live **正文**。未开 **P79**。未编华住加床/儿童 SOP、默认 Extra Person %、儿童费 Fact、华住/抖音直播 SOP、主播佣金%、直播时长 Fact、贵就赔/连住/闪促/券 SOP、赔付%、免费晚%、Stay 3 Pay 2 折扣 Fact、佣金%、699。14/399/799 与 14/399/799 Simulation only；**399 = P77 直播改尺 / P78 加床改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-0417-sources-recap.md`。02:17「不要规定 P79」= case 槽不得指定下一本；本 recap 小时遵守。Extra Person **不再 leftover**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R30-04a | 复盘 log | `research-log/2026-08-30-0417-sources-recap.md` | **drafted** |
| R30-04b | 源表 §79 | `sources/source-map.md` §79 | **appended**（OPERA Cloud 26.2 Managing Add-on Packages；STR CoStar Historical Benchmarking Guidelines Rollaway/Crib ∈ Rooms Revenue Include；§76–78 指针） |
| R30-04c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 06:17 scout；不规定 P79） |
| R30-04d | backlog | `backlog/research-backlog.md` | **appended** |
| R30-04e | systems | — | **no change**（OPERA Add-on = Vendor PMS help 进 source-map；STR = 协会上报指南进 source-map；Amadeus Extra adult 500 未开；无新 RMS 页；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；OPERA 26.2 预订侧 Add-on 钉「手动加 Extra bed/crib ≠ 公开 BAR」；STR 上报指南钉「Rollaway/Crib rental 进 Rooms Revenue Include = ADR 读法不是改尺令」；不规定 P79。

复盘结论：**无 needs_revision。** P77 三句 / 399-rejected / 799-Hypothesis 未被 T-Live 改写；P77 与 P73/P18/P74/P27/P69/P05 边界清楚；P78 与 P69/P76/P05/P01/P45/P40 边界清楚；P77/T-Live vs P78 对象不同、huddle 不碰撞（直播商品 vs 加床加项）；假尺子族兼容。00:17 不规定 → 02:17 写 P78 = **槽序**。22:17 写 P77 → 00:17 写 T-Live = **槽序**。

刻意不补：**P79**；新剧本；理论卡；重写 C30-02 / T30-00 / C29-22 / T1–T12 / P01–P78 正文；华住 SOP；默认 Extra Person%/佣金%/时长 Fact。

下一槽 **06:17 = scout hour**。**不规定 P79。** 不要把 **P78 / T-Live / P77 列为「下一轮要写」— 已 drafted**。Extra Person **不再 leftover**。


## 侦察与剧本 · C30-06 · P79 Resort Fee/强制服务费/含税总价不是公开 BAR（2026-08-30 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R30-04 / C30-02 / T30-00 / C29-22 / T1–T12**。未重写 P01–P78 **正文**（仅邻剧/卡文末一行）。未开 **P80**。未写理论卡（theory 是 08:17）。未编华住费表 SOP、默认 Resort Fee %、服务费 %、税率 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（all-in/fee 改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-0617-scout.md`。04:17「不要规定 P79」= recap 槽不得指定下一本；本 scout 小时核实 HIGH 缺口（先前 MEDIUM 停靠 P36 C5 错范围；filename 无专剧）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-06a | P79 | `advisor-playbooks/resort-fee-service-charge-vs-bar.md` | **drafted** |
| C30-06b | 主卡 | `recommendations/dont-rewrite-bar-for-resort-fee.md` | **active** |
| C30-06c | 轻指标 | `metrics/resort-fee-vs-public-bar.md` | **drafted**（无默认费 %） |
| C30-06d | Simulation | `cases/sim-2026-resort-fee-allin-sat.md` | **drafted** |
| C30-06e | 问题树 §86 | `diagnosis/problem-tree.md` §86 | **appended** |
| C30-06f | 源表 §80 | `sources/source-map.md` §80 | **appended**（STR P&L Resort→Misc 新开；Historical Benchmarking 费项拆分升核；OPERA Package Codes Separate/Combined Line 升核；Controls LTB 显示闸升核；§79 指针） |
| C30-06g | 研究 log | `research-log/2026-08-30-0617-scout.md` | **drafted** |
| C30-06h | scout | `scout/2026-08-30-0617.md` | **drafted** |

**一句话：** Resort Fee / 强制服务费 / 含税总价 / all-in 不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆房价 vs 费/税 vs all-in；形 B 拒 BAR→399；形 C ADR 污染是读法不是改尺（STR：resort→Misc，principal 服务费可进 Rooms 仍 ≠ 改尺）；形 D→P36/P69/P78/P74/P75；形 E 过账/显示闸≠BAR Type；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「OTA 总价贵改 BAR」「服务费吓跑砍公开价」「含税太贵所以跟」「ADR 被 Resort Fee 看脏砍 BAR」「all-in 才是公开价」→ Diagnose/过程走 **P79**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P36=竞对比价税/费口径；P69=含早套餐；P78=加床加项；P74=券后展示层；P75=BRG 比价不含税费；P05=真 leftover；P01/P45=Ahead/早会。04:17 不规定 → 06:17 核实缺口后开 = **槽序**。先前 scout 把本缺口停靠 P36 C5 = **错范围已纠正**。

刻意不补：**P80**；理论卡（08:17）；重写 R30-04 / C30-02 / T1–T12 / P01–P78 正文；华住费表 SOP；默认费 %；税率 Fact；员工价专剧；停车费专剧。

下一槽 **08:17 = theory hour**。**不规定 P80。** 不要把 **P79 / P78 / T-Live / P77 列为「下一轮要写」— 已 drafted**。员工价 / 停车费 **MEDIUM leftover**。

## 理论/指标 · T30-08 · T-Fee 强制费/服务费/all-in 不是公开 BAR（2026-08-30 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-06 / R30-04 / C30-02 / T30-00 / T1–T12**。未重写 P01–P79 **正文**（P79 仅头一行理论指针；邻卡仅文末一行）。未开 **P80**。未开员工价/停车费专剧。未编华住费表 SOP、默认 Resort Fee %、服务费 %、税率 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-0817-fee-theory.md`。06:17「不要规定 P80」= scout 不得指定下一剧本；本 theory 小时遵守，只加深费/税/all-in vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T30-08a | T-Fee 理论卡 | `theory/resort-fee-vs-bar.md` | **drafted** |
| T30-08b | P79 头一行理论 | `advisor-playbooks/resort-fee-service-charge-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T30-08c | 文末一行 × 邻卡 | P36 / P69 / P78 / P74 / P75 / P05 / P01 / P45 / T-Live / T-BRG / T-Package / T-Flash | **last-line only** |
| T30-08d | 源表 §81 | `sources/source-map.md` §81 | **appended**（FTC FAQ + Booking FTC compliance + AHLA sl-fees 新开；STR/OPERA 升核；HFTP blog timeout；Expedia newsroom 人机墙） |
| T30-08e | 问题树 §86 | `diagnosis/problem-tree.md` §86 | **pointer only**（Diagnose 走 T-Fee，过程仍 P79；未开 §87） |
| T30-08f | 研究 log | `research-log/2026-08-30-0817-fee-theory.md` | **drafted** |

**一句话：** Resort Fee / 强制服务费 / 含税总价 / all-in 不是公开 BAR；STR 上报桶、OPERA 过账显示、OTA 披露闸都不是定价权。过程仍 P79。

核心：三把尺（公开 BAR / 费或税层 / all-in 展示）；总价贵是展示/指标信号不是改尺令；假尺子一族（费/税/all-in ≠ 砍公开 BAR）；ask-list 全 NV。

调用：用户说「OTA 总价贵改 BAR」「服务费吓跑砍公开价」「含税太贵所以跟」「ADR 被 Resort Fee 看脏砍 BAR」「all-in 才是公开价」→ Diagnose 走 **T-Fee**，过程仍 **P79**。不要 BAR→399。不要把 all-in 写成新 BAR。

兼容：**无真矛盾，无 needs_revision。** P79 三句原样、399-rejected / 799-Hypothesis 不改；P36=竞对比价税/费；P69=含早；P78=加床；P74=券后；P75=BRG 不含税费；P05=真 leftover；P01/P45=Ahead/早会。06:17 写 P79 → 08:17 写 T-Fee = **槽序**。

刻意不补：**P80**；新剧本；第二张主卡；员工价专剧；停车费专剧；华住费表 SOP；默认费 %；税率 Fact；重写公式；重写 C30-06 / R30-04 / T1–T12 / P01–P79 正文；问题树新枝。

下一槽 **10:17 = case hour**。**不规定 P80**（theory hour 不得指定）。不要把 **T-Fee / P79 列为「下一轮要写」— 已 drafted**。不要开 P80。


## 案例与剧本 · C30-10 · P80 员工价/Staff·Employee rate 不是公开 BAR（2026-08-30 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T30-08 / C30-06 / R30-04 / C30-02 / T1–T12**。未重写 P01–P79 **正文**（仅邻剧/卡文末一行）。未开 **P81**。未开停车费专剧。未编华住员工价 SOP、默认员工折扣 %、配额 Fact、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（员工价改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-1017-staff-rate.md`。08:17「不要开 P80」= theory 槽不得指定下一本；本案例小时核实员工价 leftover（OPERA STAFF 例已开、无专剧；P23≠员工；P47≠付费员工折扣）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-10a | P80 | `advisor-playbooks/staff-employee-rate-vs-bar.md` | **drafted** |
| C30-10b | 主卡 | `recommendations/dont-rewrite-bar-for-staff-rate.md` | **active** |
| C30-10c | 轻指标 | `metrics/staff-employee-rate-vs-public-bar.md` | **drafted**（无默认员工折扣 %） |
| C30-10d | Simulation | `cases/sim-2026-staff-rate-sat.md` | **drafted** |
| C30-10e | 问题树 §87 | `diagnosis/problem-tree.md` §87 | **appended** |
| C30-10f | 源表 §82 | `sources/source-map.md` §82 | **appended**（OPERA Rate Strategies STAFF 新开；Rate Codes Comp/HU/Negotiated 新开；OPERA 5.6 gi_c_h 新开；Profile Negotiated 新开；STR Comp Exclude 员工用途升核；AHLA 员工旅居 C） |
| C30-10g | 研究 log | `research-log/2026-08-30-1017-staff-rate.md` | **drafted** |

**一句话：** 员工价 / Staff·Employee rate（含付费员工折扣）不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆员工码 vs 公开；形 B 拒 BAR→399「员工价太低所以跟 / 员工住满了砍公开」；形 C OCC/ADR 读法不是改尺（STR：无关员工免费 Exclude from Sold；付费员工折扣 ≠ BAR Type）；形 D→P23/P47/P71/P79/P63；形 E 码/类/Negotiated ≠ BAR Type；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「员工价就是市场价改 BAR」「员工价太低所以跟」「员工住满了砍公开」「OCC/ADR 被员工看脏砍 BAR」「STAFF 码就是公开价」→ Diagnose/过程走 **P80**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P23=会员围栏不是员工；P47=$0 Comp/HU 不是付费员工折扣改尺；P71=年标；P79=费/all-in；P63=人手产能顶（同词 staff 对象不同）；P05=真 leftover。08:17 不规定 → 10:17 核实 leftover 后开 = **槽序**。

刻意不补：**P81**；停车费专剧；重写 T30-08 / C30-06 / T1–T12 / P01–P79 正文；华住员工价 SOP；默认员工折扣 %；配额 Fact。

下一槽 **12:17 = sources/recap**。**不规定 P81。** 不要把 **P80 / T-Fee / P79 列为「下一轮要写」— 已 drafted**。Parking 仍 MEDIUM leftover。


## 来源与复盘 · R30-12 · P79 / T-Fee / P80（2026-08-30 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-10 / T30-08 / C30-06 / R30-04 / T1–T12**。未重写 P01–P80 / T-Fee **正文**（P80 仅文末一行源指针）。未开 **P81**。未开停车费专剧。未编华住员工价 SOP、默认员工折扣 %、配额 Fact、华住费表 SOP、默认费 %、税率 Fact、加床/儿童 SOP、Extra Person%、儿童费 Fact、贵就赔/连住/闪促/券/直播 SOP、赔付%、免费晚%、Stay 3 Pay 2 折扣 Fact、主播佣金%、直播时长 Fact、699。14/399/799 与 14/399/799 Simulation only；**399 = P79 all-in/fee 改尺 / P80 员工价改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-1217-sources-recap.md`。10:17「不要规定 P81」= case 槽不得指定下一本；本 recap 小时遵守。员工价 **不再 leftover**。停车费仍 **MEDIUM leftover**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R30-12a | 复盘 log | `research-log/2026-08-30-1217-sources-recap.md` | **drafted** |
| R30-12b | 源表 §83 | `sources/source-map.md` §83 | **appended**（Protel Air Advanced pricing House use；Marriott Explore 资格闸；§80–§82 指针） |
| R30-12c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 14:17 scout；不规定 P81） |
| R30-12d | backlog | `backlog/research-backlog.md` | **appended** |
| R30-12e | systems | — | **no change**（Protel = Vendor PMS help 进 source-map；Marriott associate 页进 source-map；Amadeus/Mews/Hilton 未开成核页；无新 RMS 页；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；Protel Air House use 钉「员工内部过夜类型 ≠ Rack/Normal」；Marriott Explore 钉「员工/亲友价须核资格，不是公开尺」；不规定 P81。

复盘结论：**无 needs_revision。** P79 三句 / 399-rejected / 799-Hypothesis 未被 T-Fee 改写；Diagnose 走 T-Fee、过程仍 P79；P79 与 P36/P69/P78/P74/P75/P05 边界清楚；P80 与 P23/P47/P71/P79/P63/P05 边界清楚（member ≠ staff；$0 Comp/HU ≠ 付费员工折扣；年标 ≠ 员工；fee/all-in ≠ 员工码；T-Staff capacity ≠ staff rate）；P79/T-Fee vs P80 对象不同、huddle 不碰撞（费层 vs 员工码）；假尺子族兼容。08:17 不规定 → 10:17 写 P80 = **槽序**。06:17 写 P79 → 08:17 写 T-Fee = **槽序**。

刻意不补：**P81**；新剧本；理论卡；停车费专剧；重写 C30-10 / T30-08 / C30-06 / T1–T12 / P01–P80 正文；华住 SOP；默认员工折扣%/配额 Fact。

下一槽 **14:17 = scout hour**。**不规定 P81。** 不要把 **P80 / T-Fee / P79 列为「下一轮要写」— 已 drafted**。员工价 **不再 leftover**。停车费仍 **MEDIUM leftover**。


## 侦察与剧本 · C30-14 · P81 批发/旅行社/GDS 净价不是公开 BAR（2026-08-30 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R30-12 / C30-10 / T30-08 / C30-06 / T1–T12**。未重写 P01–P80 **正文**（仅邻剧/卡文末一行）。未开 **P82**。未写理论卡（theory 是 16:17）。未开停车费专剧。未编华住批发/GDS SOP、默认批发折扣 %、佣金%、Consortia 10%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（批发/GDS 净价改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-1417-scout.md`。12:17「不要规定 P81」= recap 槽不得指定下一本；本 scout 小时核实 HIGH 缺口（filename 无专剧；P20≠改尺；P27≠改尺；P71≠批发净）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-14a | P81 | `advisor-playbooks/wholesale-gds-ta-vs-bar.md` | **drafted** |
| C30-14b | 主卡 | `recommendations/dont-rewrite-bar-for-wholesale.md` | **active** |
| C30-14c | 轻指标 | `metrics/wholesale-net-vs-public-bar.md` | **drafted**（无默认批发折扣 %） |
| C30-14d | Simulation | `cases/sim-2026-wholesale-net-sat.md` | **drafted** |
| C30-14e | 问题树 §88 | `diagnosis/problem-tree.md` §88 | **appended** |
| C30-14f | 源表 §84 | `sources/source-map.md` §84 | **appended**（OPERA Channel Negotiated Rates 新开；HSMAI Net Rate 新开；Rate Classes Wholesale 升核；§67/§82 指针） |
| C30-14g | 研究 log | `research-log/2026-08-30-1417-scout.md` | **drafted** |
| C30-14h | scout | `scout/2026-08-30-1417.md` | **drafted** |

**一句话：** 批发 / 旅行社 / GDS 净价不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆批发净 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读法不是改尺；形 D→P20/P27/P71/P26；形 E Access Code/Wholesale 类≠BAR Type；形 F→P05。399 永不推荐为新 BAR。

调用：用户说「批发价才是市场价改 BAR」「旅行社净价太低所以跟」「GDS 协议价低所以公开也得低」「ADR 被批发看脏砍 BAR」「Wholesale 类就是公开价」→ Diagnose/过程走 **P81**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P20=净贡献排序不是改尺；P27=高峰关漏出不是改尺；P71=年标不是批发净；P26=已签码漏出；P80=员工价。12:17 不规定 → 14:17 核实缺口后开 = **槽序**。停车费 **不升级**（每周改尺戏剧弱于批发；未新开停车核页）。

刻意不补：**P82**；理论卡（16:17）；重写 R30-12 / C30-10 / T1–T12 / P01–P80 正文；华住批发/GDS SOP；默认批发折扣 %；佣金 Fact；停车费专剧。

下一槽 **16:17 = theory hour**。**不规定 P82。** 不要把 **P81 / P80 / T-Fee / P79 列为「下一轮要写」— 已 drafted**。停车费仍 **MEDIUM leftover**。员工价 **不再 leftover**。


## 理论/指标 · T30-16 · T-Wholesale 批发/旅行社/GDS 净价不是公开 BAR（2026-08-30 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-14 / R30-12 / C30-10 / T30-08 / T1–T12**。未重写 P01–P81 **正文**（P81 仅头一行理论指针；邻卡仅文末一行）。未开 **P82**。未开停车费专剧。未编华住批发/GDS SOP、默认批发折扣 %、佣金%、Consortia 10%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-1617-wholesale-theory.md`。14:17「不要规定 P82」= scout 不得指定下一剧本；本 theory 小时遵守，只加深批发净 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T30-16a | T-Wholesale 理论卡 | `theory/wholesale-net-vs-bar.md` | **drafted** |
| T30-16b | P81 头一行理论 | `advisor-playbooks/wholesale-gds-ta-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T30-16c | 文末一行 × 邻卡 | P20 / P27 / P71 / P26 / P80 / P05 / P01 / P45 / T-Corp / T-Fee / 主卡 / 轻指标 | **last-line only** |
| T30-16d | 源表 §85 | `sources/source-map.md` §85 | **appended**（OPERA Channel Rate Access + IDeaS Glossary + STR Historical Wholesale 新开；§84 Channel Negotiated / HSMAI Net / Profile Negotiated Commission 升核；HSMAI Rack timeout） |
| T30-16e | 问题树 §88 | `diagnosis/problem-tree.md` §88 | **pointer only**（Diagnose 走 T-Wholesale，过程仍 P81；未开 §89） |
| T30-16f | 研究 log | `research-log/2026-08-30-1617-wholesale-theory.md` | **drafted** |

**一句话：** 批发 / 旅行社 / GDS 净价不是公开灵活 BAR；档案闸 / Access Code / Wholesale 类 / 净价 markup 不是定价权；Ahead Hold 799；拒 399。

核心：三把尺（公开 BAR / 批发·TA·GDS 净 / 对方 markup 挂牌）；Channel Negotiated + Access Code + Wholesale Rate Class + HSMAI net + STR Wholesale 桶 ≠ 定价权；「批发才是市场价 / 净太低所以跟 / ADR 看脏」是信号不是改尺令。过程仍 P81。

调用：用户说「批发价才是市场价改 BAR」「旅行社净价太低所以跟」「GDS 低所以公开也得低」「ADR 被批发看脏砍 BAR」「Wholesale 类就是公开价」→ Diagnose 走 **T-Wholesale**，过程仍 **P81**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P81 三句原样、399-rejected / 799-Hypothesis 不改；P20=净贡献排序不是改尺；P27=高峰关漏出不是改尺；P71/T-Corp=年标不是批发净；P26=已签码漏出；P80=员工价；P05=真 leftover。14:17 写 P81 → 16:17 写 T-Wholesale = **槽序**。

刻意不补：**P82**；停车费专剧；重写 C30-14 / T30-08 / T1–T12 / P01–P81 正文；华住批发/GDS SOP；默认批发折扣 %；佣金 Fact；Consortia 10%；knowledge-map。

下一槽 **18:17 = case hour**。**不规定 P82**（theory hour 不得指定）。不要把 **T-Wholesale / P81 / P80 / T-Fee / P79 列为「下一轮要写」— 已 drafted**。不要开 P82。停车费仍 **MEDIUM leftover**。员工价 **不再 leftover**。


## 案例与剧本 · C30-18 · P82 停车费/Valet/Garage 不是公开 BAR（2026-08-30 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T30-16 / C30-14 / R30-12 / C30-10 / T1–T12**。未重写 P01–P81 **正文**（仅邻剧/卡文末一行）。未开理论卡（theory 是 00:17）。未开 **P83**。未编华住停车 SOP、默认停车 %、valet %、车库租金 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（停车/含停改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-1817-parking-fee.md`。16:17「不要开 P82 / 不规定 P82」= theory 槽不得指定；本案例槽核实 parking leftover 后开（同 C30-10 员工价）。优先级保持 **MEDIUM**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-18a | P82 | `advisor-playbooks/parking-fee-vs-bar.md` | **drafted** |
| C30-18b | 主卡 | `recommendations/dont-rewrite-bar-for-parking.md` | **active** |
| C30-18c | 轻指标 | `metrics/parking-fee-vs-public-bar.md` | **drafted**（无默认停车 %） |
| C30-18d | Simulation | `cases/sim-2026-parking-fee-sat.md` | **drafted** |
| C30-18e | 问题树 §89 | `diagnosis/problem-tree.md` §89 | **appended** |
| C30-18f | 源表 §86 | `sources/source-map.md` §86 | **appended**（OPERA 5.6 Fixed Charges 新开；OPERA Cloud 26.2 Package Codes 升核；STR P&L Parking 升核指针 timeout；HSMAI ancillary / Historical parking / HFTP valet C 指针） |
| C30-18g | 研究 log | `research-log/2026-08-30-1817-parking-fee.md` | **drafted** |

**一句话：** 停车费 / valet / 车库不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆停车 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读法不是改尺；形 D→P36/P79/P78/P69；形 E Fixed Charge/Separate Line≠BAR Type；形 F→P05。399 永不推荐为新 BAR。STR：自营 Parking ∈ Other Operated；第三方租 → Misc。

调用：用户说「OTA 含停总价贵改 BAR」「停车贵所以砍公开」「ADR 被停车看脏砍 BAR」「竞对免停所以跟」「Fixed Charge 停车就是公开价」→ Diagnose/过程走 **P82**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P79=Resort/服务费/all-in 不是停车；P36=竞对含停可比不是本店改尺；P78=加床；P69=含早。16:17 不规定 → 18:17 核实 leftover 后开 = **槽序**。

刻意不补：**P83**；理论卡（00:17）；重写 T30-16 / C30-14 / T1–T12 / P01–P81 正文；华住停车 SOP；默认停车 %；valet %；车库租金 Fact。

下一槽 **20:17 = sources/recap**。**不规定 P83。** 不要把 **P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。停车费 **不再 leftover**。储值卡/取消费改尺仍 MEDIUM optional leftover。


## 来源与复盘 · R30-20 · P81 / T-Wholesale / P82（2026-08-30 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-18 / T30-16 / C30-14 / R30-12 / T1–T12**。未重写 P01–P82 / T-Wholesale / T-Fee **正文**。未开 **P83**。未开新剧本 / 理论卡。未编华住停车 SOP、默认停车 %、valet %、车库租金 Fact、华住批发/GDS SOP、默认批发折扣 %、佣金%、Consortia 10%、储值卡 SOP、取消费 %、699。14/399/799 与 14/399/799 Simulation only；**399 = P81 批发/GDS 净价改尺 / P82 停车/含停改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-2017-sources-recap.md`。18:17「不要规定 P83」= case 槽不得指定下一本；本 recap 小时遵守。停车费 **不再 leftover**。储值卡/取消费改尺仍 **MEDIUM optional leftover**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R30-20a | 复盘 log | `research-log/2026-08-30-2017-sources-recap.md` | **drafted** |
| R30-20b | 源表 §87 | `sources/source-map.md` §87 | **appended**（STR P&L Parking 升核打开；Mews parking space category 新开；HFTP USALI 12th 官方升核打开；§84–§86 指针） |
| R30-20c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 22:17 scout；不规定 P83） |
| R30-20d | backlog | `backlog/research-backlog.md` | **appended** |
| R30-20e | systems | — | **no change**（STR 协会 / Mews PMS 产品博客 / HFTP 协会博客进 source-map；无新 RMS 页；不造 systems/mews.md、不造 systems/str.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；STR P&L 钉「自营 Parking ∈ Other Operated、第三方租 → Misc」；Mews 钉「停车是 space category，不是 BAR Type」；不规定 P83。

复盘结论：**无 needs_revision。** P81 三句 / 399-rejected / 799-Hypothesis 未被 T-Wholesale 改写；Diagnose 走 T-Wholesale、过程仍 P81；P81 与 P20/P27/P71/P26/P80/P05 边界清楚；P82 与 P79/P36/P78/P69/P05 边界清楚（停车 ancillary ≠ Resort Fee；含停可比仍 P36；加床 ≠ 停车；含早 ≠ 停车）；P81/T-Wholesale vs P82 对象不同、huddle 不碰撞（渠道净 vs 停车 ancillary）；假尺子族兼容。16:17 不规定 → 18:17 写 P82 = **槽序**。14:17 写 P81 → 16:17 写 T-Wholesale = **槽序**。

刻意不补：**P83**；新剧本；理论卡；重写 C30-18 / T30-16 / C30-14 / T1–T12 / P01–P82 正文；华住 SOP；默认停车%/valet%/车库租金 Fact。

下一槽 **22:17 = scout hour**。**不规定 P83。** 不要把 **P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。停车费 **不再 leftover**。储值卡/取消费改尺仍 MEDIUM optional leftover。



## 侦察与剧本 · C30-22 · P83 储值卡/礼品卡/Prepaid Gift Card 不是公开 BAR（2026-08-30 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R30-20 / C30-18 / T30-16 / C30-14 / T1–T12**。未重写 P01–P82 / T-Wholesale **正文**（仅邻剧/卡文末一行）。未开 **P84**。未写理论卡（theory 是 00:17）。未开取消费专剧。未编华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（储值/礼品卡改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-30-2217-scout.md`。20:17「不要规定 P83」= recap 槽不得指定；本 scout 小时核实 HIGH 缺口（filename 无专剧；P19≠储值付款改尺；本小时新开 A 级 OPERA SVS 页）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C30-22a | P83 | `advisor-playbooks/stored-value-gift-card-vs-bar.md` | **drafted** |
| C30-22b | 主卡 | `recommendations/dont-rewrite-bar-for-stored-value.md` | **active** |
| C30-22c | 轻指标 | `metrics/stored-value-vs-public-bar.md` | **drafted**（无默认储值抵房折扣 %） |
| C30-22d | Simulation | `cases/sim-2026-stored-value-sat.md` | **drafted** |
| C30-22e | 问题树 §90 | `diagnosis/problem-tree.md` §90 | **appended** |
| C30-22f | 源表 §88 | `sources/source-map.md` §88 | **appended**（OPERA 26.2 Managing Prepaid Gift Cards 新开；OPERA 24.3 Redeem 新开；HSMAI BAR / §71 e-Certificate / STR Historical 取消费 Misc 指针） |
| C30-22g | 研究 log | `research-log/2026-08-30-2217-scout.md` | **drafted** |
| C30-22h | scout | `scout/2026-08-30-2217.md` | **drafted** |

**一句话：** 储值卡 / 礼品卡 / Prepaid Gift Card 抵房不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆储值付款 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读 posting 不是改尺；形 D→P19/P74/P77/P49/P38·P14/P54；形 E SVS/Issue/Redemption≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：SVS Issue + Post Redemption = 付款，不是 BAR。

调用：用户说「储值抵房太低改 BAR」「储值卖爆了所以 BAR→399」「ADR 被储值看脏砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是公开价」→ Diagnose/过程走 **P83**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P19=预付不可退产品不是储值付款改尺；P74=券后展示不是 SVS；P77=直播专属不是储值支付；P49=积分兑房不是现金储值卡；P82=停车 ancillary。20:17 不规定 → 22:17 核实 HIGH 缺口后开 = **槽序**。取消费 **不升级**（每周改尺戏剧弱于储值；过程仍 P14/P38/P54）。

刻意不补：**P84**；理论卡（00:17）；取消费专剧；重写 R30-20 / C30-18 / T1–T12 / P01–P82 正文；华住储值 SOP；默认储值抵房折扣 %；礼品卡面值 Fact。

下一槽 **00:17 = theory hour**。**不规定 P84。** 不要把 **P83 / P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。储值卡 **不再 leftover**。取消费仍 **MEDIUM leftover**。停车费 **不再 leftover**。

## 理论/指标 · T31-00 · T-Stored 储值卡/礼品卡是付款/负债工具，不是公开 BAR（2026-08-31 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C30-22 / R30-20 / C30-18 / T30-16 / T1–T12**。未重写 P01–P83 **正文**（P83 仅头一行理论指针；邻卡仅文末一行）。未开 **P84**。未开取消费专剧。未编华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-0017-stored-value-theory.md`。22:17「不要规定 P84」= scout 不得指定下一剧本；本 theory 小时遵守，只加深储值付款 vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T31-00a | T-Stored 理论卡 | `theory/stored-value-vs-bar.md` | **drafted** |
| T31-00b | P83 头一行理论 | `advisor-playbooks/stored-value-gift-card-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T31-00c | 文末一行 × 邻卡 | P19 / P74 / P77 / P49 / P05 / P01 / P45 / P82 / T-Wholesale / T-Fee / T-Live / 主卡 / 轻指标 | **last-line only** |
| T31-00d | 源表 §89 | `sources/source-map.md` §89 | **appended**（OPERA Cashiering Prepaid Cards + OPERA Payment IFC SVS property 新开；Hotel Online USALI 11th gift cards liability C 打开；§88 Issue/Redeem + HSMAI BAR + IDeaS 升核；26.2 Redeem 再试失败；Mews gift vouchers 500；STR 礼品卡桶仍 NV） |
| T31-00e | 问题树 §90 | `diagnosis/problem-tree.md` §90 | **pointer only**（Diagnose 走 T-Stored，过程仍 P83；未开 §91） |
| T31-00f | 研究 log | `research-log/2026-08-31-0017-stored-value-theory.md` | **drafted** |

**一句话：** 储值卡 / 礼品卡 / Prepaid Gift Card 是付款/负债工具，不是公开灵活 BAR；SVS Issue / Post Redemption / SVS 接口 / 负债行不是定价权；Ahead Hold 799；拒 399。

核心：三把尺（公开 BAR / 储值付款·负债 / 客人「用卡后价」）；SVS Issue + Post Redemption + Cashiering 管理 + SVS 接口 + USALI 负债行 ≠ 定价权；「储值才是市场价 / 太低所以跟 / 卖爆了改尺 / ADR 看脏」是信号不是改尺令。过程仍 P83。

调用：用户说「储值抵房太低改 BAR」「储值卖爆了所以 BAR→399」「ADR 被储值看脏砍 BAR」「储值抵房才是市场价」「Issue Card / Post Redemption 就是公开价」→ Diagnose 走 **T-Stored**，过程仍 **P83**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P83 三句原样、399-rejected / 799-Hypothesis 不改；P19=预付产品不是储值付款改尺；P74=券后不是 SVS；P77=直播不是储值支付；P49=兑房不是现金礼品卡；P82=停车 ancillary；P05=真 leftover。22:17 写 P83 → 00:17 写 T-Stored = **槽序**。

刻意不补：**P84**；取消费专剧；重写 C30-22 / T30-16 / T1–T12 / P01–P83 正文；华住储值 SOP；默认储值抵房折扣 %；礼品卡面值 Fact；STR 礼品卡 Rooms 桶 Fact；knowledge-map。

下一槽 **02:17 = case hour**（当时不规定 P84）。不要把 **T-Stored / P83 / P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。储值卡 **不再 leftover**。取消费 leftover → **P84**（C31-02）。停车费不再 leftover。


## 案例与剧本 · C31-02 · P84 取消/attrition FEE 不是公开 BAR（2026-08-31 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T31-00 / C30-22 / R30-20 / C30-18 / T1–T12**。未重写 P01–P83 / T-Stored / T-Wholesale / T-Fee **正文**（仅邻剧/卡文末一行）。未开 **P85**。未写理论卡。未编华住取消/attrition SOP、默认取消费 %、attrition %、佣金%、699。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（取消/attrition FEE 改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-0217-cancel-fee.md`。00:17「不要规定 P84」= theory 槽不得指定；本案例小时核实 MEDIUM leftover（filename 无专剧；P14≠取消费过账改尺；本小时升核/新开 A 级 STR + OPERA 页）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C31-02a | P84 | `advisor-playbooks/cancellation-attrition-fee-vs-bar.md` | **drafted** |
| C31-02b | 主卡 | `recommendations/dont-rewrite-bar-for-cancel-fee.md` | **active** |
| C31-02c | 轻指标 | `metrics/cancel-attrition-fee-vs-public-bar.md` | **drafted**（无默认取消费 % / attrition %） |
| C31-02d | Simulation | `cases/sim-2026-cancel-fee-sat.md` | **drafted** |
| C31-02e | 问题树 §91 | `diagnosis/problem-tree.md` §91 | **appended**（§90 leftover → P84 指针） |
| C31-02f | 源表 §90 | `sources/source-map.md` §90 | **appended**（STR Historical 升核打开；OPERA 26.2 Cashiering Controls + Managing Cancellation 新开；HSMAI BAR 指针；Mews CSS/500） |
| C31-02g | 研究 log | `research-log/2026-08-31-0217-cancel-fee.md` | **drafted** |

**一句话：** 取消 FEE / 团 attrition FEE 不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆 FEE 过账 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读 posting（Misc vs Rooms）不是改尺；形 D→P14/P38/P54/P52/P62/P65/P79；形 E 取消费交易码≠BAR Type；形 F→P05。399 永不推荐为新 BAR。STR：attrition + cancel after cutoff = Misc Schedule 4；noshow revenue = Rooms（P54）。OPERA：Cancellation Penalty Posting Transaction Code = 过账。

调用：用户说「取消费才是市场价改 BAR」「ADR 被取消费看脏砍 BAR」「attrition 罚金当地板」「Cancellation Penalty 交易码就是公开价」→ Diagnose/过程走 **P84**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P14=高取消 Soft 不是 FEE 过账改尺；P38=收窗；P54=noshow Rooms；P52=cutoff/wash；P82=停车；P83/T-Stored=储值。00:17 不规定 → 02:17 核实 leftover 后开 = **槽序**。优先级保持 **MEDIUM**。

刻意不补：**P85**；理论卡；重写 T31-00 / C30-22 / T1–T12 / P01–P83 正文；华住取消/attrition SOP；默认取消费 %；attrition %；knowledge-map。

下一槽 **04:17 = sources/recap**。**不规定 P85。** 不要把 **P84 / T-Stored / P83 / P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。取消费 **不再 leftover**。储值卡 / 停车费不再 leftover。

## 来源与复盘 · R31-04 · P83 / T-Stored / P84（2026-08-31 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C31-02 / T31-00 / C30-22 / R30-20 / T1–T12**。未重写 P01–P84 / T-Stored / T-Wholesale / T-Fee **正文**（仅 P84 / T-Stored / P83 文末一行源指针）。未开 **P85**。未开新剧本 / 理论卡。未编华住取消/attrition SOP、默认取消费 %、attrition %、华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、STR 礼品卡 Rooms 桶 Fact、699。14/399/799 与 14/399/799 Simulation only；**399 = P83 储值/礼品卡改尺 / P84 取消/attrition FEE 改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-0417-sources-recap.md`。02:17「不要规定 P85」= case 槽不得指定下一本；本 recap 小时遵守。取消费 / 储值卡 / 停车费 **不再 leftover**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R31-04a | 复盘 log | `research-log/2026-08-31-0417-sources-recap.md` | **drafted** |
| R31-04b | 源表 §91 | `sources/source-map.md` §91 | **appended**（Cloudbeds Cancel direct 新开；Apaleo Accounting intro 新开；Mews 再试 CSS/500；§88–§90 指针） |
| R31-04c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 06:17 scout；不规定 P85） |
| R31-04d | backlog | `backlog/research-backlog.md` | **appended** |
| R31-04e | systems | — | **no change**（Cloudbeds PMS help / Apaleo PMS accounting 进 source-map；无新 RMS 页；不造 systems/cloudbeds.md、不造 systems/apaleo.md、不造 systems/mews.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；Cloudbeds 钉「取消费是 folio 过账（fee 另项可不进 RevPar）」；Apaleo 钉「RevenueCancellationFees ≠ RevenueAccommodation」；不规定 P85。

复盘结论：**无 needs_revision。** P83 三句 / 399-rejected / 799-Hypothesis 未被 T-Stored 改写；Diagnose 走 T-Stored、过程仍 P83；P84 与 P14/P38/P54/P52 边界清楚（FEE 过账 ≠ Soft 取消政策 ≠ noshow Rooms ≠ 团 cutoff/wash）；P83/T-Stored vs P84 对象不同、huddle 不碰撞（付款/负债工具 vs 取消/attrition FEE 过账）；假尺子族兼容。00:17 不规定 → 02:17 写 P84 = **槽序**。22:17 写 P83 → 00:17 写 T-Stored = **槽序**。

刻意不补：**P85**；新剧本；理论卡；重写 C31-02 / T31-00 / C30-22 / T1–T12 / P01–P84 正文；华住 SOP；默认取消费%/attrition%/储值折扣%/礼品卡面值 Fact；STR 礼品卡 Rooms 桶 Fact。

下一槽 **06:17 = scout hour**。**不规定 P85。** 不要把 **P84 / T-Stored / P83 / P82 / T-Wholesale / P81 列为「下一轮要写」— 已 drafted**。取消费 / 储值卡 / 停车费 **不再 leftover**。



## 侦察与剧本 · C31-06 · P85 hurdle / bid price / Last Room Value 不是公开 BAR（2026-08-31 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R31-04 / C31-02 / T31-00 / C30-22 / T1–T12**。未重写 P01–P84 / T-Stored / T-Wholesale / T-Fee **正文**（仅邻剧/卡文末一行）。未开 **P86**。未写理论卡（theory 是 08:17）。未编华住会门槛价 SOP、默认 hurdle %、LRV Fact、EMSR Fact、佣金%、699。不把 OPERA 195/200/80/90 或 IDeaS 公式数字当中国 Fact。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（hurdle/LRV 改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-0617-scout.md`。04:17「不要规定 P85」= recap 槽不得指定；本 scout 小时核实 HIGH 缺口（filename 无专剧；P66≠hurdle 是公开 BAR；P64≠hurdle 可售门；OPERA hurdle 页 2026-08-27 20:17 未开 → 本小时打开 A 级 OPERA + IDeaS 页）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C31-06a | P85 | `advisor-playbooks/hurdle-bid-lrv-vs-bar.md` | **drafted** |
| C31-06b | 主卡 | `recommendations/dont-rewrite-bar-to-hurdle.md` | **active** |
| C31-06c | 轻指标 | `metrics/hurdle-vs-public-bar.md` | **drafted**（无默认 hurdle % / LRV Fact） |
| C31-06d | Simulation | `cases/sim-2026-hurdle-lrv-sat.md` | **drafted** |
| C31-06e | 问题树 §92 | `diagnosis/problem-tree.md` §92 | **appended**（§91 leftover → P85 指针） |
| C31-06f | 源表 §92 | `sources/source-map.md` §92 | **appended**（OPERA 26.2 Hurdle Rates + Yield Market Type 新开；IDeaS Dr. Ravi + Developers LRV 新开；HSMAI BAR 指针） |
| C31-06g | 研究 log | `research-log/2026-08-31-0617-scout.md` | **drafted** |
| C31-06h | scout | `scout/2026-08-31-0617.md` | **drafted** |

**一句话：** hurdle / bid price / Last Room Value 不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆可售门 vs 公开；形 B 拒 BAR→399；形 C→P66；形 D→P64/P33；形 E 可售门≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：hurdle 要达到才 display。IDeaS：LRV is a value not a selling rate。

调用：用户说「hurdle/LRV 才是市场价改 BAR」「系统门槛 399 公开也得 399」「过不了 LRV 所以砍」「hurdle 多少 BAR 就多少」「Hurdle Rates 屏就是公开价」→ Diagnose 先走 `theory/optimization-advise.md`，过程走 **P85**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P66=RMS 建议卖价不是 hurdle=BAR；P64=嵌套低档不是 hurdle 可售门；optimization-advise=机会成本语言不是改尺过程。04:17 不规定 → 06:17 核实 HIGH 缺口后开 = **槽序**。押金 **不升级**（每周改尺戏剧弱于 hurdle）。

刻意不补：**P86**；理论卡（08:17）；押金专剧；Pet/AAA 专剧；重写 R31-04 / C31-02 / T1–T12 / P01–P84 正文；华住会门槛价 SOP；默认 hurdle %；LRV Fact。

下一槽 **08:17 = theory hour**。**不规定 P86。** 不要把 **P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。hurdle/LRV **不再 leftover**。押金/预授权仍 **MEDIUM leftover**。Pet/AAA 仍停车。取消费 / 储值卡 / 停车费不再 leftover。

## 理论/指标 · T31-08 · T-Hurdle hurdle/bid/LRV 是可售门/机会成本，不是公开 BAR（2026-08-31 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C31-06 / R31-04 / C31-02 / T31-00 / T1–T12**。未重写 P01–P85 **正文**（P85 仅头一行理论指针；邻卡仅文末一行）。未开 **P86**。未开押金专剧。未编华住会门槛价 SOP、默认 hurdle %、LRV Fact、EMSR Fact、佣金%、699。不把 OPERA 195/200/80/90 或 IDeaS 公式数字当中国 Fact。不重写 `theory/optimization-advise.md` 正文。180/14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-0817-hurdle-theory.md`。06:17「不要规定 P86」= scout 不得指定下一剧本；本 theory 小时遵守，只加深 hurdle/bid/LRV vs BAR 理论。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T31-08a | T-Hurdle 理论卡 | `theory/hurdle-bid-lrv-vs-bar.md` | **drafted** |
| T31-08b | P85 头一行理论 | `advisor-playbooks/hurdle-bid-lrv-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T31-08c | 文末一行 × 邻卡 | 主卡 / 轻指标 / P66 / P64 / optimization-advise（可选） | **last-line only** |
| T31-08d | 源表 §93 | `sources/source-map.md` §93 | **appended**（OPERA About Hurdle Rates + Controls Rate Management 新开；§92 Hurdle Rates / YMT / IDeaS Dr. Ravi / Developers LRV + HSMAI BAR 升核；Restriction Publication 指针） |
| T31-08e | 问题树 §92 | `diagnosis/problem-tree.md` §92 | **pointer only**（Diagnose 走 T-Hurdle，过程仍 P85；未开 §93 新枝） |
| T31-08f | 研究 log | `research-log/2026-08-31-0817-hurdle-theory.md` | **drafted** |

**一句话：** hurdle / bid price / Last Room Value 是可售门/机会成本 value，不是公开灵活 BAR；Hurdle Rates / Yield Market Type / LRV / Controls 不是定价权；Ahead Hold 799；拒 399。

核心：三把尺（公开 BAR / Hurdle·bid·LRV 可售门 / RMS 建议卖价→P66）；OPERA display + YMT + Controls + IDeaS LRV ≠ 定价权；「门槛价才是市场价 / 多少就跟 / 过不了所以砍」是信号不是改尺令。与 optimization-advise 分工（gate ≠ BAR vs Accept/Reject 机会成本；不重写）。过程仍 P85。

调用：用户说「门槛价才是市场价改 BAR」「系统门槛 399 公开也得 399」「过不了 LRV 所以砍」「hurdle 多少 BAR 就多少」「Hurdle Rates 屏就是公开价」→ Diagnose 走 **T-Hurdle**，过程仍 **P85**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P85 三句原样、399-rejected / 799-Hypothesis 不改；P66=RMS 建议卖价不是 hurdle=BAR；P64=嵌套不是 hurdle 可售门；P33=限制；P05=真 leftover；optimization-advise=机会成本语言不是改尺过程。06:17 写 P85 → 08:17 写 T-Hurdle = **槽序**。

刻意不补：**P86**；押金专剧；Pet/AAA；重写 C31-06 / T31-00 / T1–T12 / P01–P85 正文；重写 optimization-advise；华住会门槛价 SOP；默认 hurdle %；LRV Fact；EMSR Fact；knowledge-map。

下一槽 **10:17 = case hour**。**不规定 P86。** 不要把 **T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。hurdle/LRV **不再 leftover**。押金/预授权仍 **MEDIUM leftover**。Pet/AAA 仍停车。取消费 / 储值卡 / 停车费不再 leftover。


## 案例与剧本 · C31-10 · P86 押金/预授权不是公开 BAR（2026-08-31 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T31-08 / C31-06 / R31-04 / C31-02 / T1–T12**。未重写 P01–P85 / T-Hurdle / T-Stored / T-Wholesale / T-Fee / optimization-advise **正文**（仅邻剧/卡文末一行）。未开 **P87**。未写理论卡（theory 是 16:17）。未编华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、佣金%、699。不把 OPERA auth-rule $100/$20/$50 当中国 Fact。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（押金/预授权改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-1017-deposit-preauth.md`。08:17「不要规定 P86」= theory 槽不得指定；本案例小时核实 MEDIUM leftover（filename 无 deposit/preauth 专剧；P55≠押金金额=BAR；本小时新开 A 级 OPERA Deposit + Authorization Rules 三页）后开。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C31-10a | P86 | `advisor-playbooks/deposit-preauth-vs-bar.md` | **drafted** |
| C31-10b | 主卡 | `recommendations/dont-rewrite-bar-for-deposit-preauth.md` | **active** |
| C31-10c | 轻指标 | `metrics/deposit-preauth-vs-public-bar.md` | **drafted**（无默认押金 % / 预授权金额 Fact） |
| C31-10d | Simulation | `cases/sim-2026-deposit-preauth-sat.md` | **drafted** |
| C31-10e | 问题树 §93 | `diagnosis/problem-tree.md` §93 | **appended**（§92 leftover → P86 指针） |
| C31-10f | 源表 §94 | `sources/source-map.md` §94 | **appended**（OPERA 26.2 Deposit Request/Cancellation + 26.1 Deposit Rules + 26.2 Authorization Rules 新开；HSMAI BAR / §33 指针） |
| C31-10g | 研究 log | `research-log/2026-08-31-1017-deposit-preauth.md` | **drafted** |

**一句话：** 押金 / 预授权（信用卡 authorization hold）不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆付款·预授权 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是读 posting/hold 不是改尺；形 D→P55/P19/P84/P83/P38/P54；形 E Deposit/Auth 屏≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：Deposit Rules/Payments ≠ BAR；Authorization Rules pre-auth ≠ selling rate。

调用：用户说「押金才是市场价改 BAR」「预授权扣太多所以砍」「押金当地板」「ADR 被押金看脏砍 BAR」「Deposit Rules / Auth Rules 屏就是公开价」→ Diagnose/过程走 **P86**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P55=担保放房不是押金金额改尺；P19=预付产品；P84=取消费过账；P83=储值；P85/T-Hurdle=hurdle。08:17 不规定 → 10:17 核实 leftover 后开 = **槽序**。优先级保持 **MEDIUM**。

刻意不补：**P87**；理论卡（16:17）；Pet/AAA；重写 T31-08 / C31-06 / T1–T12 / P01–P85 正文；华住押金/预授权 SOP；默认押金 %；预授权金额 Fact；knowledge-map。

下一槽 **12:17 = sources/recap**。**不规定 P87。** 不要把 **P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。押金/预授权 **不再 leftover**。Pet/AAA 仍停车。hurdle/取消费/储值卡/停车费不再 leftover。


## 来源与复盘 · R31-12 · P85 / T-Hurdle / P86（2026-08-31 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C31-10 / T31-08 / C31-06 / R31-04 / T1–T12**。未重写 P01–P86 / T-Hurdle **正文**（仅 P86 / 主卡 / 轻指标 / T-Hurdle / P85 文末一行源指针）。未开 **P87**。未开新剧本 / 理论卡。未编华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、华住会门槛价 SOP、默认 hurdle %、LRV Fact、699。14/399/799 与 14/399/799 Simulation only；**399 = P85 hurdle/LRV 改尺 / P86 押金/预授权改尺（均拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-1217-sources-recap.md`。10:17「不要规定 P87」= case 槽不得指定下一本；本 recap 小时遵守。押金/预授权 / hurdle/LRV **不再 leftover**。T-Hurdle 头「押金 leftover」= 08:17 **槽序**快照，不是 Advise 矛盾——不改正文「修」该措辞。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R31-12a | 复盘 log | `research-log/2026-08-31-1217-sources-recap.md` | **drafted** |
| R31-12b | 源表 §95 | `sources/source-map.md` §95 | **appended**（Cloudbeds Deposit Policies 新开；Apaleo Payment Authorizations 新开；Mews preauth 再试 CSS；§92–§94 / §67 指针） |
| R31-12c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 14:17 scout；不规定 P87） |
| R31-12d | backlog | `backlog/research-backlog.md` | **appended** |
| R31-12e | systems | — | **no change**（Cloudbeds PMS Deposit / Apaleo PMS Authorizations 进 source-map；无新 RMS 页；不造 systems/cloudbeds.md、不造 systems/apaleo.md、不造 systems/mews.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；Cloudbeds 钉「Deposit Policy 是押金付款配置」；Apaleo 钉「Authorization ≠ prepayment / hold ≠ BAR」；不规定 P87。

复盘结论：**无 needs_revision。** P85 三句 / 399-rejected / 799-Hypothesis 未被 T-Hurdle 改写；Diagnose 走 T-Hurdle、过程仍 P85；optimization-advise 不重写（gate ≠ BAR vs Accept/Reject 机会成本）；P85 与 P66/P64/P33 边界清楚；P86 与 P55/P19/P84/P83/P85 对象不同、huddle 不碰撞（付款/hold vs 可售门 vs 担保释放 vs 预付产品 vs 取消费 vs 储值）；假尺子族兼容。08:17 不规定 → 10:17 写 P86 = **槽序**。06:17 写 P85 → 08:17 写 T-Hurdle = **槽序**。

刻意不补：**P87**；新剧本；理论卡；重写 C31-10 / T31-08 / C31-06 / T1–T12 / P01–P86 正文；华住 SOP；默认押金%/预授权额/hurdle%/LRV Fact；STR 押金 Rooms 桶 Fact。

下一槽 **14:17 = scout hour**。**不规定 P87。** 不要把 **P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。押金/预授权 / hurdle/LRV **不再 leftover**。Pet/AAA 仍停车。


## 侦察 · S31-14 · scout-only（2026-08-31 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R31-12 / C31-10 / T31-08 / C31-06 / T1–T12**。未重写 P01–P86 / T-Hurdle / T-Stored / T-Wholesale / T-Fee / optimization-advise **正文**。**未开 P87。** 未写新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 SOP、默认押金 %、预授权金额 Fact、宠物费 %、礼品卡面值 Fact、Walk $、699。全文：`research-log/2026-08-31-1417-scout.md` · `scout/2026-08-31-1417.md`。12:17「不要规定 P87」= recap 槽不得指定；本 scout 小时遵守，只核仍 NV 观察字段，不是 must-write 剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S31-14a | scout | `scout/2026-08-31-1417.md` | **drafted**（scout-only） |
| S31-14b | 研究 log | `research-log/2026-08-31-1417-scout.md` | **drafted** |
| S31-14c | 源表 §96 | `sources/source-map.md` §96 | **appended**（STR Historical pet/smoking 用途升核；STR P&L 无 gift-card/deposit 行；HFTP Other Reporting Extraordinary Cleaning 用途升核） |
| S31-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；不规定 P87） |
| S31-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S31-14f | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P87） |

**一句话：** scout-only；不开 P87；Pet/AAA 仍停车；STR 钉 pet/smoking 罚金进 Misc（会计桶 ≠ 改尺）。

核心：filename 无 pet/aaa/smoking/damage-deposit 专剧，但邻剧覆盖（P23/P71/P80 资格价；P86 押金/hold；P79/P82/P84 费/ancillary/FEE）。未凑齐 HIGH 四件套。STR Historical：pet/smoking **房型**进 Rooms，**罚金/清洁/损坏费**进 Misc Schedule 4。STR P&L / Historical **无** gift-card / live deposit Rooms 行 → 两桶仍 NV。

调用：用户说「宠物费才是市场价改 BAR」「吸烟罚金当地板」「损坏押金改尺」→ 过程分别移交 **P23/P71/P80**（资格）/ **P79/P82/P84**（费/ancillary/FEE 过账）/ **P86**（押金/hold）。不要 BAR→399。不要新开 P87。

兼容：**无真矛盾，无 needs_revision。** 12:17 不规定 → 14:17 scout-only = **槽序**。押金/预授权 / hurdle/LRV / 取消费 / 储值卡 / 停车费 **不再 leftover**。

刻意不补：**P87**；新剧本；理论卡（16:17）；Pet/AAA 专剧；重写 R31-12 / C31-10 / T1–T12 / P01–P86 正文；华住 SOP；默认 % Facts；STR 礼品卡 Rooms 桶 Fact。

下一槽 **16:17 = theory hour**。**不规定 P87。** 不要把 **P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。Pet/AAA 仍停车。


## 理论/指标 · T31-16 · T-Deposit 押金/预授权是付款/担保/卡 hold，不是公开 BAR（2026-08-31 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S31-14 / R31-12 / C31-10 / T31-08 / C31-06 / T1–T12**。未重写 P01–P86 **正文**（P86 仅头一行理论指针 + 修订行；邻卡仅文末一行）。未开 **P87**。未开新剧本 / 决策卡 / 轻指标 / Simulation。未编华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、佣金%、699。不把 OPERA auth-rule $100/$20/$50 或 Cloudbeds 30 天 hold 当中国 Fact。不重写 `theory/optimization-advise.md` 正文。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（押金/预授权改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-1617-deposit-theory.md`。14:17「不要规定 P87」= scout 不得指定；本 theory 小时遵守，只加深押金/预授权 vs BAR 理论。押金 leftover **已关为 P86**（10:17）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T31-16a | T-Deposit 理论卡 | `theory/deposit-preauth-vs-bar.md` | **drafted** |
| T31-16b | P86 头一行理论 | `advisor-playbooks/deposit-preauth-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T31-16c | 文末一行 × 邻卡 | 主卡 / 轻指标 / P55 / P19 / P84 / P83 / P85 / T-Hurdle | **last-line only** |
| T31-16d | 源表 §97 | `sources/source-map.md` §97 | **appended**（OPERA 26.2 Deposit Rules + Schedules + Payments + Controls Cashiering + Configuring Advanced Auth Rules + Cloudbeds authorize + Apaleo Guarantee Types 新开；§94/§95 Deposit Request / Auth About / Cloudbeds Policy / Apaleo Auth + HSMAI BAR 升核） |
| T31-16e | 问题树 §93 | `diagnosis/problem-tree.md` §93 | **pointer only**（Diagnose 走 T-Deposit，过程仍 P86；未开 §94 新枝） |
| T31-16f | 研究 log | `research-log/2026-08-31-1617-deposit-theory.md` | **drafted** |

**一句话：** 押金 / 预授权（credit card authorization hold）是付款/担保/卡 hold 工具，不是公开灵活 BAR；Deposit Rules / Auth Rules / Cloudbeds Policy / Apaleo Auth 不是定价权；Ahead Hold 799；拒 399。

核心：三把尺（公开 BAR / Deposit·payment·preauth hold / 客人「押金感觉像房价」）；OPERA Deposit Rules/Schedules/Payments + Controls + Auth Rules + Cloudbeds Policy/Authorize + Apaleo Auth/Guarantee ≠ 定价权；「押金才是市场价 / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏」是信号不是改尺令。过程仍 P86。Ahead 夜押金/preauth 不被允许改公开 BAR。

调用：用户说「押金才是市场价改 BAR」「预授权扣太多所以砍」「押金当地板」「ADR 被押金看脏砍 BAR」「Deposit Rules·Auth Rules 屏就是公开价」→ Diagnose 走 **T-Deposit**，过程仍 **P86**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P86 三句原样、399-rejected / 799-Hypothesis 不改；P55=担保放房不是押金金额改尺；P19=预付产品；P84=取消费；P83=储值；P85/T-Hurdle=hurdle；P05=真 leftover。10:17 写 P86 → 16:17 写 T-Deposit = **槽序**（中间 12:17 recap / 14:17 scout）。

刻意不补：**P87**；Pet/AAA；重写 S31-14 / C31-10 / T31-08 / T1–T12 / P01–P86 正文；重写 optimization-advise；华住押金/预授权 SOP；默认押金 %；预授权金额 Fact；STR live deposit Rooms 桶；knowledge-map；systems/cloudbeds|apaleo|mews.md。

下一槽 **18:17 = case hour**。**不规定 P87。** 不要把 **T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。押金/预授权 / hurdle/LRV **不再 leftover**。Pet/AAA 仍停车。


## 案例与剧本 · C31-18 · P87 服务补偿 / folio Service Recovery adjustment ≠ 公开 BAR（2026-08-31 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T31-16 / S31-14 / R31-12 / C31-10 / T31-08 / C31-06 / T1–T12**。未重写 P01–P86 / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / optimization-advise **正文**（邻卡仅文末一行）。未开 **P88**。未开理论卡（theory 槽家族，不是本案例小时）。未编华住补偿 SOP、默认补偿 %、佣金%、699、Walk $。不把 OPERA Vendor $ breakfast 10.00 / 63.60 当中国 Fact。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（服务补偿改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-1817-service-recovery.md`。16:17「不要规定 P87」= theory 槽不得指定；本案例槽核实 HIGH 缺口后开 = **槽序**。服务补偿 leftover **已关为 P87**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C31-18a | P87 剧本 | `advisor-playbooks/service-recovery-adjustment-vs-bar.md` | **drafted** |
| C31-18b | 主卡 | `recommendations/dont-rewrite-bar-for-service-recovery.md` | **active** |
| C31-18c | 轻指标 | `metrics/service-recovery-vs-public-bar.md` | **drafted** |
| C31-18d | Simulation | `cases/sim-2026-service-recovery-sat.md` | **drafted**（Simulation） |
| C31-18e | 问题树 §94 | `diagnosis/problem-tree.md` §94 | **appended**（§93 文末 leftover → P87 指针） |
| C31-18f | 源表 §98 | `sources/source-map.md` §98 | **appended**（OPERA 26.2 Charges Adjustment + About Billing + Adjustment Reason Codes 新开；Cloudbeds Adjust Charge 新开 curl 200；STR Historical allowances 升核；HSMAI BAR 指针） |
| C31-18g | 研究 log | `research-log/2026-08-31-1817-service-recovery.md` | **drafted** |

**一句话：** 服务补偿 / folio Service Recovery adjustment / rebate 不是公开灵活 BAR；Ahead Hold 799；拒 399。

核心：形 A 拆 posting vs 公开；形 B 拒 BAR→399；形 C ADR 污染是 STR net-of-allowance READ 不是 rewrite；形 D→P39/P75/P47/P84/P83/P86/P05；形 E Service Recovery Adjustment / Adjust Charge 屏≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：Post Service Recovery Adjustment ≠ BAR；Adjustment Reason Service Recovery ≠ 定价权。Cloudbeds：Adjust Charge ≠ public BAR rewrite。

调用：用户说「客人投诉补了差价改 BAR」「服务失败今晚全部 dump」「补偿券才是市场价」「ADR 被减免看脏砍 BAR」「Service Recovery Adjustment 屏就是公开价」→ Diagnose/过程走 **P87**。不要 BAR→399。

兼容：**无真矛盾，无 needs_revision。** P39=点评 SIGNAL 不是本住补偿过账；P75=BRG 已订直销索赔；P47=计划 Comp；P84=取消 FEE；P83=储值；P86=押金/预授权。16:17 不规定 → 18:17 核实 HIGH 缺口后开 = **槽序**。优先级 **HIGH**。

刻意不补：**P88**；理论卡（00:17/08:17/16:17 家族，不是本案例小时）；Pet/AAA；重写 T31-16 / S31-14 / C31-10 / T1–T12 / P01–P86 正文；华住补偿 SOP；默认补偿 %。

下一槽 **20:17 = sources/recap**。**不规定 P88。** 不要把 **T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。Pet/AAA 仍停车。服务补偿 leftover 已关为 P87。


## 来源与复盘 · R31-20 · P87 / T-Deposit 互补（2026-08-31 20:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C31-18 / T31-16 / S31-14 / R31-12 / C31-10 / T1–T12**。未重写 P01–P87 / T-Deposit / T-Hurdle **正文**（仅 P87 / 主卡 / 轻指标文末一行 §99）。未开 **P88**。未开新剧本 / 理论卡。未编华住补偿 SOP、默认补偿 %、华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、佣金%、699、Walk $。14/399/799 Simulation only；**399 = P87 服务补偿改尺（拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-08-31-2017-sources-recap.md`。18:17「不要规定 P88」= case 槽不得指定下一本；本 recap 小时遵守。服务补偿 leftover **已关为 P87**。T-Deposit 头「不写 P87」= 16:17 **槽序**快照，不是 Advise 矛盾——不改正文「修」该措辞。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R31-20a | 复盘 log | `research-log/2026-08-31-2017-sources-recap.md` | **drafted** |
| R31-20b | 源表 §99 | `sources/source-map.md` §99 | **appended**（Apaleo Adding and Moving Charges / Add allowance 新开 curl 200；HotelKey Service Recovery 新开 WebFetch+curl 200；Mews allowances 再试 500/CSS；§97–§98 / §67 指针） |
| R31-20c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 22:17 scout；不规定 P88） |
| R31-20d | backlog | `backlog/research-backlog.md` | **appended** |
| R31-20e | systems | — | **no change**（Apaleo PMS folio allowance / HotelKey PMS Service Recovery 进 source-map；无新 RMS 页；不造 systems/apaleo.md、不造 systems/hotelkey.md、不造 systems/mews.md、不造 systems/cloudbeds.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；Apaleo 钉「Add allowance = folio 纠正/服务失败折扣」；HotelKey 钉「Service Recovery = folio negative charge」；不规定 P88。

复盘结论：**无 needs_revision。** P87 三句 / 399-rejected / 799-Hypothesis 未被邻卡改写；P87 与 P39/P75/P47/P84/P83/P86/P05 边界清楚；T-Deposit 与 P86 三句同一套；P86/T-Deposit 与 P85/T-Hurdle / P87 对象不同（付款/hold vs 可售门 vs 服务补偿 posting）；假尺子族兼容。16:17 不规定 → 18:17 写 P87 = **槽序**。14:17 scout-only → 18:17 开 P87 = **槽序**。

刻意不补：**P88**；新剧本；理论卡；重写 C31-18 / T31-16 / S31-14 / T1–T12 / P01–P87 正文；华住 SOP；默认补偿%/押金%/预授权额；STR gift-card / live-deposit Rooms 桶 Fact。

下一槽 **22:17 = scout hour**。**不规定 P88。** 不要把 **T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV **不再 leftover**。Pet/AAA 仍停车。


## 侦察 · S31-22 · scout-only（Direct Bill / Tax / Routing / 发票 四件套未齐）（2026-08-31 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R31-20 / C31-18 / T31-16 / S31-14 / R31-12 / T1–T12**。未重写 P01–P87 / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**。未开 **P88**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 SOP、默认 %、税率 Fact、开票税率、Walk $、699。全文：`research-log/2026-08-31-2217-scout.md` · `scout/2026-08-31-2217.md`。20:17「不要规定 P88」= recap 不得指定；本 scout 核实后 **四件套未齐 → scout-only**（同 14:17 不开 P87 槽序，异于 06:17 开 P85 / 22:17 历史开 P83）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S31-22a | Scout log | `scout/2026-08-31-2217.md` | **drafted**（scout-only） |
| S31-22b | 研究 log | `research-log/2026-08-31-2217-scout.md` | **drafted** |
| S31-22c | 源表 §100 | `sources/source-map.md` §100 | **appended**（OPERA AR / Direct Bill Transfer / Financial Examples / Tax Types / Transaction Generates / Routing Instructions 新开；Cloudbeds AR curl 200；HSMAI BAR 升核；STR 不重开） |
| S31-22d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 2026-09-01 00:17 theory；不规定 P88） |
| S31-22e | backlog | `backlog/research-backlog.md` | **appended** |
| S31-22f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| S31-22g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

**一句话：** Direct Bill/AR=付款结算；Tax Generates=税配置；Routing=分账窗；发票缺 A 源——均未凑齐 HIGH 四件套；scout-only。

刻意不补：**P88**；Pet/AAA；重写 R31-20 / C31-18 / T31-16 / S31-14 / T1–T12 / P01–P87 正文；华住 SOP；税率 Fact；开票税率；STR gift-card / live-deposit Fact；knowledge-map；systems/*.md。

下一槽 **2026-09-01 00:17 = theory hour**。**不规定 P88。** 不要把 **T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 理论/指标 · T01-00 · T-Service-Recovery 服务补偿/folio Service Recovery adjustment 是 folio 纠正/客满过账，不是公开 BAR（2026-09-01 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S31-22 / R31-20 / C31-18 / T31-16 / S31-14 / R31-12 / C31-10 / T31-08 / C31-06 / T1–T12**。未重写 P01–P87 / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**（P87 仅头一行理论指针 + 修订行；邻卡仅文末一行）。未开 **P88**。未开新剧本。未编华住补偿 SOP、默认补偿 %、佣金%、699、Walk $、中国发票理论。不把 OPERA Vendor $ breakfast 10.00 / 63.60 当中国 Fact。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（服务补偿改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-01-0017-service-recovery-theory.md`。22:17「不要规定 P88」= scout 不得指定；本 theory 小时遵守加深 P87→理论，**不规定 P88**。服务补偿 leftover **已关为 P87**。

| ID | 交付 | 路径 | 状态 |
| --- | --- | --- | --- |
| T01-00a | T-Service-Recovery 理论卡 | `theory/service-recovery-adjustment-vs-bar.md` | **drafted** |
| T01-00b | P87 头一行理论 | `advisor-playbooks/service-recovery-adjustment-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T01-00c | 文末一行 × 邻卡 | 主卡 / 轻指标 / P39 / P75 / P47 / P84 / P83 / P86 / P85 / T-Deposit / T-Hurdle | **last-line only** |
| T01-00d | 源表 §101 | `sources/source-map.md` §101 | **appended**（OPERA Service Requests 新开；Controls Cashiering SERVICE RECOVERY ADJUSTMENT + ALLOW NEGATIVE 用途升核；§98/§99 OPERA Charges/Billing/Reason/Cloudbeds/Apaleo/HotelKey + STR allowances + HSMAI BAR 升核；Mews 再试 CSS Error） |
| T01-00e | 问题树 §94 | `diagnosis/problem-tree.md` §94 | **pointer only**（Diagnose 走 T-Service-Recovery，过程仍 P87；未开 §95 新枝） |
| T01-00f | 研究 log | `research-log/2026-09-01-0017-service-recovery-theory.md` | **drafted** |
| T01-00g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 02:17 case；不规定 P88） |
| T01-00h | backlog | `backlog/research-backlog.md` | **appended** |
| T01-00i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| T01-00j | systems | — | **no change**（不造 systems/apaleo.md / hotelkey.md / cloudbeds.md / mews.md） |

核心：形 A 拆 posting vs 公开；形 B 拒 BAR→399；形 C ADR 污染是 STR net-of-allowance READ 不是 rewrite；形 D→P39/P75/P47/P84/P83/P86/P05；形 E Service Recovery Adjustment / Adjust Charge / Controls 屏≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：Post Service Recovery Adjustment ≠ BAR；Adjustment Reason Service Recovery ≠ 定价权；SERVICE RECOVERY ADJUSTMENT / ALLOW NEGATIVE = 开关 ≠ 改尺；Service Requests = 投诉跟踪 ≠ BAR。Cloudbeds：Adjust Charge ≠ public BAR rewrite。Apaleo/HotelKey：allowance / negative charge ≠ BAR。

与近三轮兼容：S31-22 scout-only / R31-20 / C31-18 P87 **无真矛盾**，无 needs_revision。T-Deposit「不写 P87」= 16:17 槽序，不「修」正文。

刻意不补：**P88**；新剧本；Pet/AAA；重写 S31-22 / R31-20 / C31-18 / T31-16 / T1–T12 / P01–P87 正文；华住补偿 SOP；默认补偿 %；中国发票理论；STR gift-card / live-deposit Rooms 桶 Fact。


## 案例与剧本 · C01-02 · case-verify / 不开 P88（2026-09-01 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T01-00 / S31-22 / R31-20 / C31-18 / T31-16 / S31-14 / R31-12 / T1–T12**。未重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**。未开 **P88**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 SOP、默认 %、佣金%、Walk $、699、税率 Fact、开票税率。全文：`research-log/2026-09-01-0217-case-verify.md`。00:17「不规定 P88」= theory 不得指定；本案例槽独立核 HIGH 四件套后 **未齐 → case-verify**（同 14:17/22:17 不开纪律）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C01-02a | 研究 log | `research-log/2026-09-01-0217-case-verify.md` | **drafted**（case-verify） |
| C01-02b | 源表 §102 | `sources/source-map.md` §102 | **appended**（OPERA Transaction Codes + About Transaction Codes 新开；Apaleo Check-out Checklist 新开；Oracle Payment Cloud Chargeback Report 新开；STR Historical smoking/early-dep + HSMAI BAR 升核） |
| C01-02c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 04:17 sources/recap；不规定 P88/P89） |
| C01-02d | backlog | `backlog/research-backlog.md` | **appended** |
| C01-02e | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| C01-02f | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

**一句话：** Smoking/damage FEE、Early-dep FEE、Chargeback、挂账/税/发票/Routing、Pet/AAA 均未凑齐 HIGH 四件套；case-verify 不开 P88。

刻意不补：**P88**；Pet/AAA；重写 T01-00 / S31-22 / C31-18 / T1–T12 / P01–P87 正文；华住 SOP；默认 %；中国发票理论；STR gift-card / live-deposit Fact；knowledge-map；systems/*.md；here.now publish；git commit。

下一槽 **04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 来源与复盘 · R01-04 · C01-02 互补（HotelKey Charge Types / Early Check-Out）（2026-09-01 04:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C01-02 / T01-00 / S31-22 / R31-20 / C31-18 / T31-16 / T1–T12**。未重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle **正文**（仅 P87 / 主卡 / 轻指标文末一行 §103）。未开 **P88**。未开 **P89**。未开新剧本 / 理论卡。未编华住补偿 SOP、默认补偿 %、华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、默认早离费 %、佣金%、699、Walk $。14/399/799 Simulation only；**399 = P87 服务补偿改尺（拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-01-0417-sources-recap.md`。02:17「不要规定 P88/P89」= case 槽不得指定下一本；本 recap 小时遵守。服务补偿 leftover **已关为 P87**。T-Deposit 头「不写 P87」= 16:17 **槽序**快照，不是 Advise 矛盾——不改正文「修」该措辞。C01-02 声称更新 README §8.4 但未改（仍写下一槽 02:17）— **本小时改写 §8.4 → 06:17 scout**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R01-04a | 复盘 log | `research-log/2026-09-01-0417-sources-recap.md` | **drafted** |
| R01-04b | 源表 §103 | `sources/source-map.md` §103 | **appended**（HotelKey Charge Types 新开 WebFetch+curl 200；HotelKey Early Check-Out 新开 curl 200；Cloudbeds items / chargebacks 不当第三核；§98–§102 / §67 指针） |
| R01-04c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 06:17 scout；提及 R01-04 + C01-02 + T-Service-Recovery；不规定 P88/P89） |
| R01-04d | backlog | `backlog/research-backlog.md` | **appended** |
| R01-04e | systems | — | **no change**（HotelKey PMS Charge Types / Early Check-Out 进 source-map；无新 RMS 页；不造 systems/hotelkey.md、不造 systems/cloudbeds.md、不造 systems/apaleo.md、不造 systems/mews.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；HotelKey 钉「Charge Type = folio 交易分类」与「Early Departure Fee / remaining-stay Posts this charge to the folio」；不规定 P88/P89。

复盘结论：**无 needs_revision。** P87 三句 / 399-rejected / 799-Hypothesis 未被邻卡改写；Diagnose 走 T-Service-Recovery、过程仍 P87；P87 与 P39/P75/P47/P84/P83/P86/P05 边界清楚；T-Deposit 与 P86 三句同一套；假尺子族兼容（服务补偿 posting ≠ 押金/hold ≠ hurdle ≠ 取消 FEE ≠ 储值 ≠ 公开 BAR）。S31-22 scout-only → T01-00 写 T-Service-Recovery = **槽序**。T01-00 不规定 P88 → C01-02 独立核四件套仍不开 = **槽序 + 四件套未齐**。C01-02 不开 smoking/chargeback/invoice 专剧兼容邻覆盖（P79/P82/P84/P46/P87/P86/P71/P48/P20）。本小时 HotelKey Charge Types / Early Check-Out 加强邻覆盖，仍不开 P88。

刻意不补：**P88**；**P89**；新剧本；理论卡；重写 C01-02 / T01-00 / S31-22 / T1–T12 / P01–P87 正文；华住 SOP；默认补偿%/押金%/早离费%；STR gift-card / live-deposit Rooms 桶 Fact。

下一槽 **2026-09-01 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 侦察 · S01-06 · scout-only（LRA / Yieldable / FX / Points+cash / Meta-CPC 四件套未齐）（2026-09-01 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R01-04 / C01-02 / T01-00 / S31-22 / R31-20 / C31-18 / T1–T12**。未重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 LRA SOP、默认协议折扣 %、LRA Fact %、外币挂牌 SOP、积分折扣 %、CPC SOP、Walk $、699。全文：`research-log/2026-09-01-0617-scout.md` · `scout/2026-09-01-0617.md`。04:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后 **四件套未齐 → scout-only**（同 14:17/22:17 不开纪律）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S01-06a | Scout log | `scout/2026-09-01-0617.md` | **drafted**（scout-only） |
| S01-06b | 研究 log | `research-log/2026-09-01-0617-scout.md` | **drafted** |
| S01-06c | 源表 §104 | `sources/source-map.md` §104 | **appended**（OPERA Rate Codes Yieldable 用途 + ORMS Yieldability + Foreign Currency + Payment Awards + Membership Controls 新开；Negotiated 升核；BAR Based / IDeaS Semi-Yieldable / HSMAI BAR 指针） |
| S01-06d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 08:17 theory；不规定 P88/P89） |
| S01-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S01-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| S01-06g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

**一句话：** LRA=关码闸/Non-Yieldable；Yieldable=hurdle 比较旗；外币=汇率展示；Points+cash=付款；CPC 缺 A 源——均未凑齐 HIGH 四件套；scout-only。

刻意不补：**P88**；**P89**；Pet/AAA；重写 R01-04 / C01-02 / T01-00 / S31-22 / T1–T12 / P01–P87 正文；华住 LRA/外币/积分/CPC SOP；LRA Fact %；STR gift-card / live-deposit Fact；knowledge-map；systems/*.md。

下一槽 **2026-09-01 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 理论/指标 · T01-08 · T-Employee 员工价/付费员工折扣是资格闸码，不是公开 BAR（2026-09-01 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S01-06 / R01-04 / C01-02 / T01-00 / S31-22 / R31-20 / C31-18 / T31-16 / T1–T12**。未重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**（P80 仅头一行理论指针 + 修订行；邻卡仅文末一行）。未开 **P88**。未开 **P89**。未开新剧本。未编华住员工价 SOP、默认员工折扣 %、配额 Fact、佣金%、699、Walk $。不把 OPERA Times Sold=3 / AHLA 40%+ 当中国 Fact。180/14/399/799 Simulation only；**399 = 被拒绝的 dump（员工价改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-01-0817-employee-rate-theory.md`。06:17「不要规定 P88/P89」= scout 不得指定；本 theory 小时遵守加深 P80→理论，**不规定 P88**。员工价 leftover **已关为 P80**。**≠ T-Staff（P63 产能）。**

| ID | 交付 | 路径 | 状态 |
| --- | --- | --- | --- |
| T01-08a | T-Employee 理论卡 | `theory/staff-employee-rate-vs-bar.md` | **drafted** |
| T01-08b | P80 头一行理论 | `advisor-playbooks/staff-employee-rate-vs-bar.md` | **header only**（三句 / 399-rejected / 799-Hypothesis 原样） |
| T01-08c | 文末一行 × 邻卡 | 主卡 / 轻指标 / P23 / P47 / P71 / P79 / P63 / T-Staff / T-Corp / T-Fee / P01 / P05 / P45 / sim / T-Service-Recovery / T-Deposit | **last-line only** |
| T01-08d | 源表 §105 | `sources/source-map.md` §105 | **appended**（OPERA 5.6 Rate Categories 新开；OPERA Rate Strategies / Rate Codes / gi_c_h / Negotiated / Protel House use / STR employee gratis / HSMAI BAR / Marriott Explore / AHLA / Cloud Categories·Classes 升核；猜 URL 壳/404 失败） |
| T01-08e | 问题树 §87 | `diagnosis/problem-tree.md` §87 | **pointer only**（Diagnose 走 T-Employee，过程仍 P80；未开新枝） |
| T01-08f | 研究 log | `research-log/2026-09-01-0817-employee-rate-theory.md` | **drafted** |
| T01-08g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 10:17 case；不规定 P88/P89） |
| T01-08h | backlog | `backlog/research-backlog.md` | **appended** |
| T01-08i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Employee drafted；不新增 P88 行） |
| T01-08j | systems | — | **no change** |

核心：形 A 拆付费员工折扣/资格闸 vs 公开；形 B 拒 BAR→399；形 C OCC/ADR 污染是读桶不是 rewrite；形 D→P23/P47/P71/P79/P63/P05；形 E STAFF/Rate Strategies/Category/Negotiated 屏≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：STAFF Times Sold Close ≠ BAR；Comp/HU 勾选 ≠ 定价权；Negotiated 档案闸 ≠ 公开栅格。Protel：House use ≠ Rack。STR：employee gratis Exclude from Sold（P47 口径）。**T-Employee ≠ T-Staff。**

与近三轮兼容：S01-06 scout-only / R01-04 / C01-02 / T01-00 **无真矛盾**，无 needs_revision。P80 三句原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；重写 S01-06 / R01-04 / T01-00 / T1–T12 / P01–P87 正文；华住员工价 SOP；默认员工折扣 %；配额 Fact；Times Sold=3 / AHLA 40%+ China Fact；knowledge-map；systems/*.md；optimization-advise 正文。

下一槽 **10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Employee / P80 列为「下一轮要写」— 已 drafted**。服务补偿 / 押金/预授权 / hurdle/LRV / 取消费 / 储值 / 停车 / 员工价 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## 案例与剧本 · C01-10 · case-verify / 不开 P88（2026-09-01 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 T01-08 / S01-06 / R01-04 / C01-02 / T01-00。未重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / T-Employee / optimization-advise 正文。未开 P88。未开 P89。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。全文：research-log/2026-09-01-1017-case-verify.md。08:17 不规定 P88/P89 = theory 不得指定；本案例槽独立核 HIGH 四件套后未齐 -> case-verify。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C01-10a | 研究 log | research-log/2026-09-01-1017-case-verify.md | drafted（case-verify） |
| C01-10b | 源表 106 | sources/source-map.md 106 | appended（ADBR + Daily/Advanced Daily + Restrictions + Cloudbeds derived; About BAR / Controls / HSMAI / IDeaS upgrade-pointer） |
| C01-10c | README 8.4 | README.md 8.4 | updated（下一槽 12:17 sources/recap；不规定 P88/P89） |
| C01-10d | backlog | backlog/research-backlog.md | appended |
| C01-10e | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| C01-10f | 新剧本 / 卡 / 指标 / sim | — | none（不开 P88） |

一句话：派生反写 / 预付阶梯 / 儿童亲子 / 资格价 / 加盟业主 / 停售CTA / Advanced Daily 均未凑齐 HIGH 四件套；case-verify 不开 P88。

刻意不补：P88；P89；Pet/AAA；重写 T01-08 / S01-06 / T1–T12 / P01–P87 正文；华住 SOP；默认pct；knowledge-map；systems/*.md；here.now publish；git commit。

下一槽 12:17 = sources/recap。不规定 P88。不规定 P89。不要把 T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Employee / P80 列为下一轮要写 — 已 drafted。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 来源与复盘 · R01-12 · C01-10 互补（HotelKey BAR-as-parent derived / Apaleo Rate Plans）（2026-09-01 12:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **C01-10 / T01-08 / S01-06 / R01-04 / C01-02 / T01-00 / T1–T12**。未重写 P01–P87 / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle **正文**（仅 P71 / P33 文末一行 §107）。未开 **P88**。未开 **P89**。未开新剧本 / 理论卡。未编华住派生 SOP、默认派生折扣 %、加盟品牌标准 BAR 页、华住员工价 SOP、默认员工折扣 %、佣金%、699、Walk $。14/399/799 Simulation only；**399 = P80 员工价改尺（拒绝）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-01-1217-sources-recap.md`。10:17「不要规定 P88/P89」= case 槽不得指定下一本；本 recap 小时遵守。员工价 leftover **已关为 P80**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R01-12a | 复盘 log | `research-log/2026-09-01-1217-sources-recap.md` | **drafted** |
| R01-12b | 源表 §107 | `sources/source-map.md` §107 | **appended**（HotelKey Change Existing to Derived 新开 WebFetch+curl 200；Apaleo Rate Plans 新开 curl 200；HotelKey restrictions / create-derived / Apaleo Setting Prices 不当第三核；§104–§106 / §67 指针） |
| R01-12c | README 8.4 | `README.md` §8.4 | **updated**（下一槽 14:17 scout；提及 R01-12 + C01-10 + T-Employee；不规定 P88/P89） |
| R01-12d | backlog | `backlog/research-backlog.md` | **appended** |
| R01-12e | systems | — | **no change**（HotelKey / Apaleo PMS help 进 source-map；无新 RMS 页；不造 systems/hotelkey.md、不造 systems/apaleo.md、不造 systems/mews.md；net-contribution 不动） |

**一句话：** 近三轮无真矛盾；HotelKey 钉「OTA 派生 Parent=BAR」与 Apaleo 钉「只改 base、Closed/CTA 是限制层」；不规定 P88/P89。

复盘结论：**无 needs_revision。** P80 三句 / 399-rejected / 799-Hypothesis 未被邻卡改写；Diagnose 走 T-Employee、过程仍 P80；T-Employee ≠ T-Staff；P80 与 P23/P47/P71/P79/P63/P05 边界清楚；C01-10 不开派生反写/停售 dump 专剧兼容邻覆盖（P71/P69/P19/P33/P64/P60）。S01-06 scout-only → T01-08 写 T-Employee = **槽序**。T01-08 不规定 P88 → C01-10 独立核四件套仍不开 = **槽序 + 四件套未齐**。本小时 HotelKey BAR-as-parent / Apaleo derived+Closed 加强邻覆盖，仍不开 P88。

刻意不补：**P88**；**P89**；新剧本；理论卡；重写 C01-10 / T01-08 / S01-06 / T1–T12 / P01–P87 正文；华住派生 SOP；默认派生折扣%；加盟品牌标准 BAR 页；STR gift-card / live-deposit Rooms 桶 Fact。

下一槽 **2026-09-01 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。员工价 / 服务补偿 / 押金/预授权 / hurdle/LRV **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 侦察 · S01-14 · scout-only（佣金 / Rate fence / Rate Ownership / Owner Use / Extra Person / CTA / 发票 / 加盟品牌 四件套未齐）（2026-09-01 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R01-12 / C01-10 / T01-08 / S01-06 / R01-04 / C01-02 / T01-00 / T1–T12**。未重写 P01–P87 / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / optimization-advise **正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住佣金 SOP、默认佣金 %、小程序专属 SOP、儿童费 Fact、品牌标准 BAR 页、Walk $、699。全文：`research-log/2026-09-01-1417-scout.md` · `scout/2026-09-01-1417.md`。12:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后 **四件套未齐 → scout-only**（同 06:17/22:17 不开纪律）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S01-14a | Scout log | `scout/2026-09-01-1417.md` | **drafted**（scout-only） |
| S01-14b | 研究 log | `research-log/2026-09-01-1417-scout.md` | **drafted** |
| S01-14c | 源表 §108 | `sources/source-map.md` §108 | **appended**（OPERA Commission Codes + HSMAI Rate Fences + OPERA Rate Ownership + Cloudbeds Extra Person Fees 新开；Rate Codes Owner Use 升核；HSMAI BAR / IDeaS Fenced / Apaleo Rate Plans 指针） |
| S01-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；不规定 P88/P89） |
| S01-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S01-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| S01-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

**一句话：** 佣金=结算配置；围栏=订码条件；Rate Ownership=谁能改字段；Owner Use=业主旗；Extra Person=加项——均未凑齐 HIGH 四件套；scout-only。

刻意不补：**P88**；**P89**；Pet/AAA；重写 R01-12 / C01-10 / T01-08 / S01-06 / T1–T12 / P01–P87 正文；华住佣金/小程序/儿童/品牌标准 SOP；默认%；STR gift-card / live-deposit Fact；knowledge-map；systems/*.md。

下一槽 **2026-09-01 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。员工价 / 服务补偿 / 押金/预授权 / hurdle/LRV / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论与指标 · T01-16 · T-Extra Extra Person 加床理论（2026-09-01 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S01-14 / R01-12 / C01-10 / T01-08 / S01-06 / R01-04 / C01-02 / T01-00 / T1–T12**。未重写 P01–P87 / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / T-Package / optimization-advise **正文**（P78 仅头一行理论指针 + 修订行；邻卡仅文末一行）。未开 **P88**。未开 **P89**。未开新剧本。未编华住加床/儿童 SOP、默认 Extra Person %、儿童费 Fact、佣金%、699、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-01-1617-extra-person-theory.md`。14:17「不要规定 P88/P89」= scout 不得指定；本 theory 加深既有 P78 → T-Extra，不开新剧。加床 leftover **已关为 P78**（2026-08-30 02:17）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T01-16a | 理论卡 | `theory/extra-person-vs-bar.md` | **drafted**（T-Extra） |
| T01-16b | P78 头/修订 | `advisor-playbooks/extra-person-vs-bar.md` | **header+revision only**（三句 / 399 / 799 不改） |
| T01-16c | 邻卡文末 | 主卡 / 轻指标 / P69 / P76 / P79 / P82 / T-Package / T-Fee / sim / P01 / P05 / P45 / T-Employee | **last-line only** |
| T01-16d | 源表 §109 | `sources/source-map.md` §109 | **appended**（Apaleo Setting up Rate Plans 新开第三人 Vendor；OPERA Extra Adult/Threshold/Controls + Cloudbeds Extra Person Fees + HSMAI BAR + HFP/STR 升核；HotelKey Charge Types 补核；Mews FAIL 壳） |
| T01-16e | 问题树 §85 | `diagnosis/problem-tree.md` §85 | **pointer only**（Diagnose 走 T-Extra，过程仍 P78；未开新枝） |
| T01-16f | 研究 log | `research-log/2026-09-01-1617-extra-person-theory.md` | **drafted** |
| T01-16g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 18:17 case；提及 T-Extra + S01-14；不规定 P88/P89） |
| T01-16h | backlog | `backlog/research-backlog.md` | **appended** |
| T01-16i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Extra drafted；不新增 P88 行） |
| T01-16j | systems | — | **no change** |

核心：形 A 拆加项 vs 公开；形 B 拒 BAR→399；形 C ADR 污染是 READ（HFP/STR rollaway·crib）不是 rewrite；形 D→P69/P76/P79/P82/P05；形 E Occupant Threshold / Extra Adult 表≠BAR Type；形 F→P05。399 永不推荐为新 BAR。OPERA：Extra Adult/Child 加到预订 ≠ BAR；Threshold 固定额 ≠ 改尺；Controls 开关 ≠ 定价权。Cloudbeds：extra person fee 只进直销/BE。Apaleo：surcharge 加在单人 base 上。**T-Extra ≠ T-Fee ≠ T-Package。**

与近三轮兼容：S01-14 scout-only / R01-12 / C01-10 / T-Employee **无真矛盾**，无 needs_revision。S01-14 说 Extra Person 四件套 fail for NEW playbook 因 P78 已存在 — **不阻挡** 理论加深。C01-10 儿童亲子/crib vs P78 不开新剧 — **允许** 理论。P78 三句原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S01-14 / R01-12 / C01-10 / T01-08 / T1–T12 / P01–P87 正文；华住加床 SOP；默认 Extra Person %；儿童费 Fact；Vendor $·€ China Fact；knowledge-map；systems/*.md；optimization-advise 正文；here.now publish；git commit。

下一槽 **2026-09-01 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。加床 / 员工价 / 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## R02-04｜2026-09-02 04:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R02-04** · Hour 4 = 来源与复盘  
> 对照：S01-14 scout-only · T01-16 T-Extra；18:17–02:17 = **槽空缺**（不当矛盾）  
> 全文：`research-log/2026-09-02-0417-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R02-04a | 研究 log | research-log/2026-09-02-0417-sources-recap.md | drafted（sources-recap） |
| R02-04b | 源表 110 | sources/source-map.md 110 | appended（HotelKey Group Master By Occupancy/Extra Person Charge + protel Air Advanced pricing；同族 Modify/CB Accommodation/Edit Base Rates 不当第三核；Mews FAIL） |
| R02-04c | P78 / T-Extra / 轻指标文末 | advisor-playbooks/extra-person-vs-bar.md · theory/extra-person-vs-bar.md · metrics/extra-person-vs-public-bar.md | last-line §110 pointer only（三句不改） |
| R02-04d | README 8.4 | README.md 8.4 | updated（下一槽 06:17 scout；提及 R02-04 + T-Extra；不规定 P88/P89） |
| R02-04e | backlog | backlog/research-backlog.md | appended |
| R02-04f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R02-04g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近完成 S01-14 / T-Extra **无真矛盾**，无 needs_revision；P78 三句 / 399-rejected / 799-Hypothesis **原样**；§110 新开 HotelKey Group Master（By Occupancy / Extra Person Charge ≠ BAR）+ protel Air Advanced pricing（age/cot added to room price ≠ BAR Type）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S01-14 / T01-16 / P01–P87 / T-Extra 正文；华住加床 SOP；默认 Extra Person %；儿童费 Fact；Vendor $·€ China Fact；knowledge-map；systems/*.md；optimization-advise 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。加床 leftover **已关**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 侦察 · S02-06 · scout-only（税前裸价 / City tax / BAR ladder / Rate Category / Promo stacking / LOS Tiered 四件套未齐）（2026-09-02 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R02-04 / T01-16 / S01-14 / R01-12 / C01-10 / T01-08 / S01-06 / T1–T12**。未重写 P01–P87 / T-Extra / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / T-Package / optimization-advise **正文**（仅邻卡可选文末一行 §111）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation。未编税率 Fact、华住含税/城市税/BAR 多档 SOP、佣金%、699、Walk $。全文：`scout/2026-09-02-0617.md` · `research-log/2026-09-02-0617-scout.md`。04:17「不要规定 P88/P89」= recap 不得指定；本 scout 遵守。S01-14 / S01-06 已拒集 **不重开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S02-06a | Scout log | `scout/2026-09-02-0617.md` | **drafted**（scout-only） |
| S02-06b | 研究 log | `research-log/2026-09-02-0617-scout.md` | **drafted** |
| S02-06c | 源表 §111 | `sources/source-map.md` §111 | **appended**（Cloudbeds Taxes Inclusive/Exclusive + OPERA City Tax Package + BAR Rate Groups + Tiered Rate Codes + Promotion Codes 新开；Rate Codes Tax Inclusive + Rate Categories 升核；HSMAI BAR / BAR Based 指针） |
| S02-06d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 08:17 theory；提及 S02-06；不规定 P88/P89） |
| S02-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S02-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| S02-06g | 邻卡文末 | P79 / P64 / P41 / P18 | **optional last-line §111 only**（三句 / 399 / 799 不改） |
| S02-06h | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：税前裸价 / City tax / BAR ladder / Rate Category / Promo stacking / LOS Tiered / 切房·打包 **均未凑齐 HIGH 四件套**；邻剧覆盖或缺每周改尺戏剧；**不开 P88**。§111 加强 P79/P64/P41/P18。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R02-04 / T01-16 / S01-14 / T1–T12 / P01–P87 正文；税率 Fact；华住 SOP；默认%；Vendor $ China Fact；knowledge-map；systems/*.md；optimization-advise 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。加床 / 员工价 / 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论与指标 · T02-08 · T-Tax Tax Inclusive/Exclusive + City tax 理论（2026-09-02 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S02-06 / R02-04 / T01-16 / S01-14 / R01-12 / C01-10 / T01-08 / S01-06 / T1–T12**。未重写 P01–P87 / T-Extra / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / T-Staff / T-Package / optimization-advise **正文**（P79 仅头一行理论指针 + 修订行；邻卡仅文末一行）。未开 **P88**。未开 **P89**。未开新剧本。未编税率 Fact、华住含税/城市税 SOP、开票税率、佣金%、699、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-02-0817-tax-display-theory.md`。06:17「不要规定 P88/P89」= scout 不得指定；本 theory 加深既有 P79 税层 → T-Tax，不开新剧。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T02-08a | 理论卡 | `theory/tax-display-city-tax-vs-bar.md` | **drafted**（T-Tax） |
| T02-08b | P79 头/修订 | `advisor-playbooks/resort-fee-service-charge-vs-bar.md` | **header+revision only**（三句 / 399 / 799 不改） |
| T02-08c | 邻卡文末 | T-Fee / 主卡 / 轻指标 / problem-tree §86 / P36 / P05 / P01 / P45 | **last-line only** |
| T02-08d | 源表 §112 | `sources/source-map.md` §112 | **appended**（Apaleo Local Charges 新开第三人 Vendor；Cloudbeds Taxes + OPERA Tax Inclusive + CITY_TAX + HSMAI BAR 升核；Apaleo City Tax Management 同族；Mews/猜 URL/protel FAIL） |
| T02-08e | 问题树 §86 | `diagnosis/problem-tree.md` §86 | **pointer only**（Diagnose 走 T-Tax，过程仍 P79；未开新枝） |
| T02-08f | 研究 log | `research-log/2026-09-02-0817-tax-display-theory.md` | **drafted** |
| T02-08g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 10:17 case；提及 T-Tax + S02-06；不规定 P88/P89） |
| T02-08h | backlog | `backlog/research-backlog.md` | **appended** |
| T02-08i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Tax drafted；不新增 P88 行） |
| T02-08j | systems | — | **no change** |

核心：形 A 拆税展示 vs 公开；形 B 拒 BAR→399；形 C ADR 被税读脏是 READ 不是 rewrite；形 D→T-Fee/P36/P69/P78/P05；形 E Inclusive 旗 / CITY_TAX Package / Local Charges≠BAR Type；形 F→P05。399 永不推荐为新 BAR。Cloudbeds：Inclusive/Exclusive + OTA 源对齐 ≠ rewrite。OPERA：Tax Inclusive 旗 ≠ BAR；CITY_TAX Package ≠ BAR Type。Apaleo：Local Charges Included/on top ≠ BAR。**T-Tax ≠ T-Fee ≠ T-Package ≠ T-Extra。** 过程仍 **P79**。

与近三轮兼容：S02-06 scout-only / R02-04 / T-Extra **无真矛盾**，无 needs_revision。S02-06 说税四件套 fail for NEW playbook 因 P79 已覆盖 — **不阻挡** 理论加深。P79 三句原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-06 / R02-04 / T01-16 / T1–T12 / P01–P87 正文；税率 Fact；华住含税 SOP；开票税率；Vendor % China Fact；knowledge-map；systems/*.md；optimization-advise 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Tax / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Fee / P79 列为「下一轮要写」— 已 drafted**。加床 / 员工价 / 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 案例与剧本 · C02-10 · tax-display Simulation / 不开 P88（2026-09-02 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T02-08 / S02-06 / R02-04 / T01-16 / S01-14 / R01-12 / C01-10 / T1–T12**。未重写 P01–P87 / T-Tax / T-Fee / T-Extra / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / optimization-advise **正文**（P79 / 主卡 / problem-tree §86 / T-Tax 配套仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编税率 Fact、华住含税 SOP、开票税率、佣金%、699、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（税展示/城市税改尺）**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-02-1017-tax-display-case.md`。08:17「不要规定 P88/P89」= theory 不得指定；本 case 小时开 **callable Simulation**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C02-10a | Simulation | `cases/sim-2026-tax-display-city-tax-sat.md` | **drafted**（T-Tax 专卷；过程仍 P79） |
| C02-10b | T-Tax 配套行 | `theory/tax-display-city-tax-vs-bar.md` | **companion pointer only**（sibling all-in 保留） |
| C02-10c | P79 / 主卡 / §86 | `advisor-playbooks/resort-fee-service-charge-vs-bar.md` · `recommendations/dont-rewrite-bar-for-resort-fee.md` · `diagnosis/problem-tree.md` §86 | **pointer only**（三句 / 399 / 799 不改） |
| C02-10d | 源表 §113 | `sources/source-map.md` §113 | **appended**（CASE 指针；Cloudbeds/OPERA/Apaleo/HSMAI 自 §111/§112 升核复述；无新 URL） |
| C02-10e | 研究 log | `research-log/2026-09-02-1017-tax-display-case.md` | **drafted** |
| C02-10f | README 8.4 | `README.md` §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C02-10；不规定 P88/P89） |
| C02-10g | backlog | `backlog/research-backlog.md` | **appended** |
| C02-10h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C02-10 tax-display sim；不新增 P88 行） |
| C02-10i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：T-Tax 用户句需要专卷 Simulation；all-in sim 仍 sibling；Diagnose 走 T-Tax、过程仍 P79、Hold 779–799 首选 799、拒 399；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T02-08 正文 / P01–P87 正文三句；税率 Fact；华住含税 SOP；开票税率；Vendor % China Fact；systems/*.md；optimization-advise 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-02 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## R02-12｜2026-09-02 12:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R02-12** · Hour 12 = 来源与复盘  
> 对照：S02-06 scout-only · T02-08 T-Tax · C02-10 tax-display Simulation  
> 全文：`research-log/2026-09-02-1217-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R02-12a | 研究 log | research-log/2026-09-02-1217-sources-recap.md | drafted（sources-recap） |
| R02-12b | 源表 114 | sources/source-map.md 114 | appended（protel City Taxes Logis inclusive/exclusive/split + Clock City Tax Mode Extra Separate/Included Joint/Included Separate；同族 Cloudbeds Types/Set Up + HotelKey Charge Types Tax Setup 升核 + Tax Exemption + Clock City Tax；Mews FAIL） |
| R02-12c | T-Tax / P79 / sim / §86 文末 | theory/tax-display-city-tax-vs-bar.md · advisor-playbooks/resort-fee-service-charge-vs-bar.md · cases/sim-2026-tax-display-city-tax-sat.md · diagnosis/problem-tree.md §86 | last-line §114 pointer only（三句 / 399 / 799 不改） |
| R02-12d | README 8.4 | README.md 8.4 | updated（下一槽 14:17 scout；提及 R02-12 + C02-10 + T-Tax；不规定 P88/P89） |
| R02-12e | backlog | backlog/research-backlog.md | appended |
| R02-12f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R02-12g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S02-06 / T-Tax / C02-10 **无真矛盾**，无 needs_revision；Diagnose 仍 T-Tax、过程仍 P79；T-Tax ≠ T-Fee ≠ T-Package ≠ T-Extra；399 rejected；799 Hypothesis；C02-10 不开 P88；§114 新开 protel City Taxes（Logis inclusive/exclusive/split ≠ BAR）+ Clock City Tax Mode（Extra Separate / Included Joint / Included Separate ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-06 / T02-08 / C02-10 / P01–P87 / T-Tax 正文；税率 Fact；华住含税 SOP；开票税率；Vendor €·% China Fact；knowledge-map；systems/*.md；optimization-false 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## S02-14｜2026-09-02 14:17 Asia/Shanghai · Scout scout-only / 不开 P88

> Scout ID：**S02-14** · Hour 14 = SCOUT  
> 对照：R02-12 sources/recap · 仍 P01–P87 · Diagnose 仍 T-Tax / 过程 P79  
> 全文：`scout/2026-09-02-1417.md` · `research-log/2026-09-02-1417-scout.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S02-14a | Scout log | scout/2026-09-02-1417.md | drafted（scout-only） |
| S02-14b | 研究 log | research-log/2026-09-02-1417-scout.md | drafted |
| S02-14c | 源表 115 | sources/source-map.md 115 | appended（Hold Room + Blocks Quote Ref + RATE_FLOOR Controls + About BAR + Daily Rates + Item Inventory + Inventory Items + Package Codes + Restaurants + Transaction Discount + Rate Code Financial Details；指针 BAR Based/Dynamic BAR/HSMAI/HotelKey Tax Exempt；Cloudbeds/Apaleo 猜链 FAIL） |
| S02-14d | README 8.4 | README.md 8.4 | updated（下一槽 16:17 theory；提及 S02-14；不规定 P88/P89） |
| S02-14e | backlog | backlog/research-backlog.md | appended |
| S02-14f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；S02-14 scout-only；不新增 P88 行） |
| S02-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Soft hold / Rate Floor / Connecting / F&B covers / ROT·Daily Rates / Student-Senior / Tax-exempt **四件套均未齐**；邻 T20/P53/P55/P71/P63/P69/P01/P64/T-Tax 覆盖；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R02-12 / T-Tax / C02-10 / P01–P87 正文三句；华住 SOP；税率 Fact；Vendor % China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-02 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论与指标 · T02-16 · T-Floor Rate Floor / Min·Max vs BAR 理论（2026-09-02 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S02-14 / R02-12 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Tax / T-Hurdle / T-Corp / T20 §2 品牌公式 / do-not-break-brand-floor 公式 / optimization-advise **正文**（T20 / brand-floor / 邻卡仅文末一行）。未开 **P88**。未开 **P89**。未开新剧本。未编华住 Rate Floor SOP、默认地板 %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation；无声明 **不发明 699**。全文：`research-log/2026-09-02-1617-rate-floor-theory.md`。14:17「不要规定 P88/P89」= scout 不得指定；本 theory 加深既有 T20 品牌底/schedule floor → T-Floor，不开新剧。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T02-16a | 理论卡 | `theory/rate-floor-vs-bar.md` | **drafted**（T-Floor） |
| T02-16b | T20 文末/修订 | `theory/revenue-strategy.md` | **last-line/revision only**（§2 品牌公式不改） |
| T02-16c | brand-floor 文末 | `recommendations/do-not-break-brand-floor.md` | **last-line only** |
| T02-16d | 邻卡文末 | T-Hurdle / P85 / P71 / P05 / P45 / problem-tree（可选） | **last-line only** |
| T02-16e | 源表 §116 | `sources/source-map.md` §116 | **appended**（OPERA RATE_FLOOR 升核；Signals Min/Max 新开；Cloudbeds Room Hierarchy Min/Max 同族；OPERA 5.6 Rate Floor 字段；HSMAI BAR 升核；About BAR 指针；Duetto SPA FAIL） |
| T02-16f | 研究 log | `research-log/2026-09-02-1617-rate-floor-theory.md` | **drafted** |
| T02-16g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 18:17 case；提及 T-Floor + S02-14；不规定 P88/P89） |
| T02-16h | backlog | `backlog/research-backlog.md` | **appended** |
| T02-16i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Floor drafted；不新增 P88 行） |
| T02-16j | systems | — | **no change** |

核心：形 A 拆地板 vs 公开；形 B 拒 BAR→399；形 C 声明底 = Hold 底不是 dump 公开到地板；形 D Budget≠Forecast（T20）；形 E→T-Hurdle/T-Corp/P66/P05；形 F 无声明不发明 699。399 永不推荐为新 BAR。OPERA：RATE_FLOOR / Min·Max Allowed ≠ BAR Type。Signals/Cloudbeds：Min/Max Rate 边界 ≠ rewrite。**T-Floor ≠ T-Hurdle ≠ T-Corp ≠ T20 Budget 核。** 过程仍 **T20 + do-not-break-brand-floor**。

与近三轮兼容：S02-14 scout-only / R02-12 / T-Tax / C02-10 **无真矛盾**，无 needs_revision。S02-14 说 Rate Floor 四件套 fail for NEW playbook 因 T20 已覆盖 — **不阻挡** 理论加深。T20 / brand-floor 公式原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-14 / R02-12 / T02-08 / T1–T12 / P01–P87 正文；华住 Rate Floor SOP；默认地板 %；699 Fact；Vendor $ China Fact；knowledge-map；systems/*.md；optimization-advise 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 案例与剧本 · C02-18 · rate-floor Simulation / 不开 P88（2026-09-02 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T02-16 / S02-14 / R02-12 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Tax / T-Hurdle / T-Corp / T20 §2 品牌公式 / do-not-break-brand-floor 公式 / optimization-advice **正文**（T-Floor 配套 / T20 / brand-floor / problem-tree 仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编华住 Rate Floor SOP、默认地板 %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（地板/Min·Max 改尺）**；799 仅 Hypothesis/Simulation；无声明 **不发明 699**。全文：`research-log/2026-09-02-1817-rate-floor-case.md`。16:17「不要规定 P88/P89」= theory 不得指定；本 case 小时开 **callable Simulation**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C02-18a | Simulation | `cases/sim-2026-rate-floor-minmax-sat.md` | **drafted**（T-Floor 专卷；过程仍 T20 + do-not-break-brand-floor） |
| C02-18b | T-Floor 配套行 | `theory/rate-floor-vs-bar.md` | **companion pointer only**（正文三句 / 399 / 799 不改） |
| C02-18c | brand-floor / T20 / problem-tree | `recommendations/do-not-break-brand-floor.md` · `theory/revenue-strategy.md` · `diagnosis/problem-tree.md` | **pointer only**（公式 / 三句 / 399 / 799 不改） |
| C02-18d | 源表 §117 | `sources/source-map.md` §117 | **appended**（CASE 指针；§116 URLs 升核复述；无新 URL） |
| C02-18e | 研究 log | `research-log/2026-09-02-1817-rate-floor-case.md` | **drafted** |
| C02-18f | README 8.4 | `README.md` §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C02-18；不规定 P88/P89） |
| C02-18g | backlog | `backlog/research-backlog.md` | **appended** |
| C02-18h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C02-18 rate-floor sim；不新增 P88 行） |
| C02-18i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：T-Floor 用户句需要专卷 Simulation；Diagnose 走 T-Floor、过程仍 T20 + do-not-break-brand-floor、Hold 779–799 首选 799、拒 399、无声明不发明 699；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T02-16 正文 / P01–P87 正文三句；华住 Rate Floor SOP；默认地板 %；699 Fact；Vendor $ China Fact；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-02 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R02-20｜2026-09-02 20:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R02-20** · Hour 20 = 来源与复盘  
> 对照：S02-14 scout-only · T02-16 T-Floor · C02-18 rate-floor Simulation  
> 全文：`research-log/2026-09-02-2017-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R02-20a | 研究 log | research-log/2026-09-02-2017-sources-recap.md | drafted（sources-recap） |
| R02-20b | 源表 118 | sources/source-map.md 118 | appended（protel Rate availability min/max rate blocked + Clock Min/Max allowed prices for standard rates；同族 protel Rate code details minimum rate + Clock Hurdle/Restrictions + HotelKey Maximum Rate Periods + Apaleo Rate Plans 指针；Mews Atomize SPA FAIL + help.atomize.com 404） |
| R02-20c | T-Floor / brand-floor / T20 / sim / problem-tree 文末 | theory/rate-floor-vs-bar.md · recommendations/do-not-break-brand-floor.md · theory/revenue-strategy.md · cases/sim-2026-rate-floor-minmax-sat.md · diagnosis/problem-tree.md | last-line §118 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R02-20d | README 8.4 | README.md 8.4 | updated（下一槽 22:17 scout；提及 R02-20 + C02-18 + T-Floor；不规定 P88/P89） |
| R02-20e | backlog | backlog/research-backlog.md | appended |
| R02-20f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R02-20g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S02-14 / T-Floor / C02-18 **无真矛盾**，无 needs_revision；Diagnose 仍 T-Floor、过程仍 T20 + do-not-break-brand-floor；T-Floor ≠ T-Hurdle ≠ T-Corp ≠ T20 Budget 核；399 rejected；799 Hypothesis；无声明不发明 699；C02-18 不开 P88；§118 新开 protel Rate availability（日程 Min/Max rate ≠ BAR）+ Clock Min/Max allowed prices（录入边界 ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-14 / T02-16 / C02-18 / P01–P87 / T-Floor 正文；华住 Rate Floor SOP；默认地板 %；699 Fact；Vendor € China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-02 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S02-22｜2026-09-02 22:17 Asia/Shanghai · Scout scout-only

> Scout ID：**S02-22** · Hour 22 = SCOUT  
> 对照：R02-20 sources/recap · 仍 P01–P87 · Diagnose T-Floor / 过程 T20+do-not-break-brand-floor  
> 全文：`scout/2026-09-02-2217.md` · `research-log/2026-09-02-2217-scout.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S02-22a | Scout log | scout/2026-09-02-2217.md | drafted（scout-only） |
| S02-22b | 研究 log | research-log/2026-09-02-2217-scout.md | drafted |
| S02-22c | 源表 §119 | sources/source-map.md §119 | appended（OPERA Component/Accessible/Features/Sell Limits/Overbooking Protection + STR Comp Set Guidelines + HSMAI Merchant/Wash；About BAR/RATE_FLOOR/HSMAI BAR/§48 HK 指针；Agency 404 / Cloudbeds Overbook 猜链 404 / 错误 OPERA 路径 soft FAIL） |
| S02-22d | README 8.4 | README.md §8.4 | updated（下一槽 2026-09-03 00:17 theory；提及 S02-22；不规定 P88/P89） |
| S02-22e | backlog | backlog/research-backlog.md | appended |
| S02-22f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；S02-22 scout-only；不新增 P88 行） |
| S02-22g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Component / Accessible / Rate Cap / Open Pricing / Wash / Comp Set / Weather / Merchant **四件套均未齐**；邻 P13/P37/T-Floor/P01/P64/P52/P57/P36/P28/P20/P24 覆盖；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R02-20 / T-Floor / C02-18 / P01–P87 正文三句；华住 SOP；wash% Fact；佣金% Fact；Vendor % China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 00:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论与指标 · T03-00 · T-Component Component Suite / suite-pool vs BAR 理论（2026-09-03 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S02-22 / R02-20 / T02-16 / C02-18 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Floor / T-Tax / T20 / optimization-advice **正文**（P13 / P37 / P34 / capacity-ooo / problem-tree §11 仅文末或段末一行）。未开 **P88**。未开 **P89**。未开新剧本。未编华住组合套房·无障碍 SOP、默认 suite %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation。全文：`research-log/2026-09-03-0017-component-suite-theory.md`。22:17「不要规定 P88/P89」= scout 不得指定；本 theory 加深既有 P13/P37 库存过程 → T-Component，不开新剧。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T03-00a | 理论卡 | `theory/component-suite-inventory-vs-bar.md` | **drafted**（T-Component） |
| T03-00b | P13 文末 | `advisor-playbooks/room-type-compression.md` | **last-line only**（三句 / 399 / 799 不改） |
| T03-00c | P37 文末 | `advisor-playbooks/ooo-capacity.md` | **last-line only** |
| T03-00d | P34 / capacity-ooo / problem-tree §11 | `room-type-differential.md` · `theory/capacity-ooo.md` · `diagnosis/problem-tree.md` | **last-line / 段末指针 only** |
| T03-00e | 源表 §120 | `sources/source-map.md` §120 | **appended**（OPERA Component/Room Types/Rooms/Features 升核；Cloudbeds Split Inventory 新开第三人；HSMAI BAR 升核；Mews Parent SPA FAIL；OPERA 5.x soft FAIL） |
| T03-00f | 研究 log | `research-log/2026-09-03-0017-component-suite-theory.md` | **drafted** |
| T03-00g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 02:17 case；提及 T-Component + S02-22；不规定 P88/P89） |
| T03-00h | backlog | `backlog/research-backlog.md` | **appended** |
| T03-00i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Component drafted；不新增 P88 行） |
| T03-00j | systems | — | **no change** |

核心：形 A 拆库存机械 vs 公开；形 B 拒 BAR→399；形 C Accessible/Features = 属性不是 rewrite；形 D→P13/P34/P37/Soft Hold(P53·P55)；形 E Vendor 屏 ≠ BAR Type；形 F→P05（仍不从 component OCC 改写）。399 永不推荐为新 BAR。OPERA：Component 扣减 ≠ BAR Type。Cloudbeds：Split Inventory ≠ rewrite。**T-Component ≠ T-Floor ≠ T-Tax ≠ T-Staff ≠ capacity OOO 核。** 过程仍 **P13 + P37**。

与近三轮兼容：S02-22 scout-only / R02-20 / T-Floor / C02-18 **无真矛盾**，无 needs_revision。S02-22 说 Component 四件套 fail for NEW playbook 因 P13/P37 已覆盖 — **不阻挡** 理论加深。T-Floor / C02-18 公式原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-22 / R02-20 / T02-16 / C02-18 / T1–T12 / P01–P87 正文；华住组合套房·无障碍 SOP；默认 suite %；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 案例与剧本 · C03-02 · component-suite Simulation / 不开 P88（2026-09-03 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T03-00 / S02-22 / R02-20 / T02-16 / C02-18 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Component / T-Floor / T-Tax / T20 / optimization-advice **正文**（T-Component 配套 / P13 / P37 / P34 / problem-tree 仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编华住组合套房·无障碍 SOP、默认 suite %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（套房池/Component 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-03-0217-component-suite-case.md`。00:17「不要规定 P88/P89」= theory 不得指定；本 case 小时开 **callable Simulation**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C03-02a | Simulation | `cases/sim-2026-component-suite-sat.md` | **drafted**（T-Component 专卷；过程仍 P13 + P37） |
| C03-02b | T-Component 配套行 | `theory/component-suite-inventory-vs-bar.md` | **companion pointer only**（正文三句 / 399 / 799 不改） |
| C03-02c | P13 / P37 / P34 / problem-tree | `advisor-playbooks/room-type-compression.md` · `ooo-capacity.md` · `room-type-differential.md` · `diagnosis/problem-tree.md` | **pointer only**（三句 / 399 / 799 不改） |
| C03-02d | 源表 §121 | `sources/source-map.md` §121 | **appended**（CASE 指针；§120 URLs 升核复述；无新 URL） |
| C03-02e | 研究 log | `research-log/2026-09-03-0217-component-suite-case.md` | **drafted** |
| C03-02f | README 8.4 | `README.md` §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C03-02；不规定 P88/P89） |
| C03-02g | backlog | `backlog/research-backlog.md` | **appended** |
| C03-02h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C03-02 component-suite sim；不新增 P88 行） |
| C03-02i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：T-Component 用户句需要专卷 Simulation；Diagnose 走 T-Component、过程仍 P13 + P37、Hold 779–799 首选 799、拒 399、不发明 699；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T03-00 正文 / P01–P87 正文三句；华住组合套房·无障碍 SOP；默认 suite %；699 Fact；Vendor China Fact；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R03-04｜2026-09-03 04:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R03-04** · Hour 04 = 来源与复盘  
> 对照：S02-22 scout-only · T03-00 T-Component · C03-02 component-suite Simulation  
> 全文：`research-log/2026-09-03-0417-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R03-04a | 研究 log | research-log/2026-09-03-0417-sources-recap.md | drafted（sources-recap） |
| R03-04b | 源表 §122 | sources/source-map.md §122 | appended（protel Virtual Room Types + Clock Virtual Rooms；同族 Apaleo Combined Unit Groups / Create unit groups / Clock occupancy accounting + HotelKey House Inventory 不当第三核；Mews Parent SPA FAIL + Clock 猜链 404） |
| R03-04c | T-Component / C03-02 sim / P13 / P37 / problem-tree 文末 | theory/component-suite-inventory-vs-bar.md · cases/sim-2026-component-suite-sat.md · advisor-playbooks/room-type-compression.md · ooo-capacity.md · diagnosis/problem-tree.md | last-line §122 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R03-04d | README 8.4 | README.md 8.4 | updated（下一槽 06:17 scout；提及 R03-04 + C03-02 + T-Component；不规定 P88/P89） |
| R03-04e | backlog | backlog/research-backlog.md | appended |
| R03-04f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R03-04g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S02-22 / T-Component / C03-02 **无真矛盾**，无 needs_revision；Diagnose 仍 T-Component、过程仍 P13 + P37；T-Component ≠ T-Floor ≠ T-Tax ≠ capacity OOO 核；399 rejected；799 Hypothesis；不发明 699；C03-02 不开 P88；§122 新开 protel Virtual Room Types（虚拟组合库存 ≠ BAR）+ Clock Virtual Rooms（Virtual/Component 联动 ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S02-22 / T03-00 / C03-02 / P01–P87 / T-Component 正文；华住组合套房·无障碍 SOP；默认 suite %；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## S03-06｜2026-09-03 06:17 Asia/Shanghai · Scout scout-only / 不开 P88

> Scout ID：**S03-06** · Hour 06 = SCOUT  
> 对照：R03-04 sources/recap · 仍 P01–P87 · Diagnose 仍 T-Component / 过程 P13+P37  
> 全文：`scout/2026-09-03-0617.md` · `research-log/2026-09-03-0617-scout.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S03-06a | Scout log | scout/2026-09-03-0617.md | drafted（scout-only） |
| S03-06b | 研究 log | research-log/2026-09-03-0617-scout.md | drafted |
| S03-06c | 源表 123 | sources/source-map.md 123 | appended（Waitlist 新开 + HSMAI MaxLOS/CTA/MinLOS + IDeaS Max LOS；Room Types Pseudo 用途升核；Restrictions 升核；About BAR/HSMAI BAR/Apaleo/Clock 指针；Assignment 猜链 soft FAIL） |
| S03-06d | README 8.4 | README.md 8.4 | updated（下一槽 08:17 theory；提及 S03-06；不规定 P88/P89） |
| S03-06e | backlog | backlog/research-backlog.md | appended |
| S03-06f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；S03-06 scout-only；不新增 P88 行） |
| S03-06g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Pseudo / CTD·MaxLOS / Waitlist / BBAR / Pre-assign / Advance-purchase **四件套均未齐**；邻 P51/T-Hall/P47/P37/P33/P40/P21/P43/P03/P05/P64 覆盖；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R03-04 / T-Component / C03-02 / P01–P87 正文三句；华住伪房·候补·限制 SOP；限制常模 Fact；候补转化率；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论与指标 · T03-08 · T-Restriction MaxLOS/CTD vs BAR（2026-09-03 08:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T03-00 / C03-02 / R03-04 / S03-06 / T02-16 / C02-18 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework **正文三句**（邻卡仅文末一行）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 MaxLOS·CTD SOP、默认限制常模、候补转化率、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（限制层改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-03-0817-restriction-maxlos-theory.md`。S03-06 scout fail for NEW playbook（邻 P33/P40/P21 覆盖）— **不阻挡** 理论加深（同 T-Component←P13+P37 / T-Floor←T20 / T-Tax←P79）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T03-08a | Theory | `theory/restriction-maxlos-ctd-vs-bar.md` | **drafted**（T-Restriction / T03-08；过程仍 P33 + P40/P21） |
| T03-08b | P33 文末 | `advisor-playbooks/restriction-overuse.md` | **last-line only**（三句 / 399 / 799 不改） |
| T03-08c | P40 / P21 文末 | `advisor-playbooks/stay-pattern.md` · `holiday-minlos.md` | **last-line only** |
| T03-08d | 决策卡 / framework / problem-tree | `recommendations/do-not-cut-when-restricted.md` · `restrictions/restriction-framework.md` · `diagnosis/problem-tree.md` | **last-line only**（framework 正文三句不改） |
| T03-08e | 源表 §124 | `sources/source-map.md` §124 | **appended**（HSMAI MaxLOS/CTA + OPERA Restrictions 升核；Apaleo/Clock/eCornell IMPACT/Lighthouse 用途升核；HSMAI CTD glossary FAIL 404） |
| T03-08f | 研究 log | `research-log/2026-09-03-0817-restriction-maxlos-theory.md` | **drafted** |
| T03-08g | README 8.4 | `README.md` §8.4 | **updated**（下一槽 10:17 case；提及 T-Restriction + S03-06；不规定 P88/P89） |
| T03-08h | backlog | `backlog/research-backlog.md` | **appended** |
| T03-08i | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Restriction drafted；不新增 P88 行） |
| T03-08j | systems | — | **no change** |

核心：形 A 拆限制层 vs 公开；形 B 拒 BAR→399；形 C CTD/CTA/MaxLOS = 可售过滤不是 rewrite；形 D→P33/P40/P21/P05·P02；形 E Vendor 限制屏 ≠ BAR Type；形 F→P05（仍不从限制层改写）。399 永不推荐为新 BAR。OPERA：Restrictions ≠ BAR Type。Apaleo/Clock：Rate Restrictions ≠ rewrite。**T-Restriction ≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 过程仍 **P33**（+ **P40** / **P21**）。

与近三轮兼容：S03-06 scout-only / R03-04 / T-Component / C03-02 **无真矛盾**，无 needs_revision。S03-06 说 CTD/MaxLOS 四件套 fail for NEW playbook 因 P33/P40/P21 已覆盖 — **不阻挡** 理论加深。T-Component / C03-02 公式原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S03-06 / R03-04 / T03-00 / C03-02 / T1–T12 / P01–P87 正文；华住 MaxLOS·CTD SOP；默认限制常模；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 案例与剧本 · C03-10 · restriction-maxlos/ctd Simulation / 不开 P88（2026-09-03 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T03-08 / S03-06 / R03-04 / T03-00 / C03-02 / T02-16 / C02-18 / T02-08 / C02-10 / T1–T12**。未重写 P01–P87 / T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework **正文**（T-Restriction 配套 / P33 / P40 / P21 / problem-tree 仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编华住 MaxLOS·CTD SOP、默认限制常模、候补转化率、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（限制层改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-03-1017-restriction-maxlos-case.md`。08:17「不要规定 P88/P89」= theory 不得指定；本 case 小时开 **callable Simulation**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C03-10a | Simulation | `cases/sim-2026-restriction-maxlos-ctd-sat.md` | **drafted**（T-Restriction 专卷；过程仍 P33 + P40/P21） |
| C03-10b | T-Restriction 配套行 | `theory/restriction-maxlos-ctd-vs-bar.md` | **companion pointer only**（正文三句 / 399 / 799 不改） |
| C03-10c | P33 / P40 / P21 / problem-tree | `advisor-playbooks/restriction-overuse.md` · `stay-pattern.md` · `holiday-minlos.md` · `diagnosis/problem-tree.md` | **pointer only**（三句 / 399 / 799 不改） |
| C03-10d | 源表 §125 | `sources/source-map.md` §125 | **appended**（CASE 指针；§124 URLs 升核复述；无新 URL） |
| C03-10e | 研究 log | `research-log/2026-09-03-1017-restriction-maxlos-case.md` | **drafted** |
| C03-10f | README 8.4 | `README.md` §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C03-10；不规定 P88/P89） |
| C03-10g | backlog | `backlog/research-backlog.md` | **appended** |
| C03-10h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C03-10 restriction sim；不新增 P88 行） |
| C03-10i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：T-Restriction 用户句需要专卷 Simulation；Diagnose 走 T-Restriction、过程仍 P33（+ P40/P21）、Hold 779–799 首选 799、拒 399、不发明 699；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T03-08 正文 / P01–P87 正文三句；华住 MaxLOS·CTD SOP；默认限制常模；候补转化率；699 Fact；Vendor China Fact；systems/*.md；optimization-advice / restriction-framework 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R03-12｜2026-09-03 12:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R03-12** · Hour 12 = 来源与复盘  
> 对照：S03-06 scout-only · T03-08 T-Restriction · C03-10 restriction-maxlos/ctd Simulation  
> 全文：`research-log/2026-09-03-1217-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R03-12a | 研究 log | research-log/2026-09-03-1217-sources-recap.md | drafted（sources-recap） |
| R03-12b | 源表 §126 | sources/source-map.md §126 | appended（Cloudbeds MinLOS/MaxLOS + CTA/CTD；同族 RMS Cloud MLOS/CTA/CTD + HotelKey House/Rate Plan restrictions + Cloudbeds Matrix Overview + protel Rate availability 指针；OPERA/HSMAI/Apaleo/Clock 指针升核；HSMAI CTD glossary FAIL 指针） |
| R03-12c | T-Restriction / C03-10 sim / P33 / P40 / P21 / problem-tree 文末 | theory/restriction-maxlos-ctd-vs-bar.md · cases/sim-2026-restriction-maxlos-ctd-sat.md · advisor-playbooks/restriction-overuse.md · stay-pattern.md · holiday-minlos.md · diagnosis/problem-tree.md | last-line §126 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R03-12d | README 8.4 | README.md 8.4 | updated（下一槽 14:17 scout；提及 R03-12 + C03-10 + T-Restriction；不规定 P88/P89） |
| R03-12e | backlog | backlog/research-backlog.md | appended |
| R03-12f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R03-12g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S03-06 / T-Restriction / C03-10 **无真矛盾**，无 needs_revision；Diagnose 仍 T-Restriction、过程仍 P33（+ P40/P21）；T-Restriction ≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle；399 rejected；799 Hypothesis；不发明 699；C03-10 不开 P88；§126 新开 Cloudbeds MinLOS/MaxLOS（可售连住限制 ≠ BAR）+ CTA/CTD（到达·离店闸 ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S03-06 / T03-08 / C03-10 / P01–P87 / T-Restriction 正文；华住 MaxLOS·CTD SOP；默认限制常模；候补转化率；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice / restriction-framework 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 侦察 · S03-14 · Rack/门市 vs BAR scout-only / 不开 P88（2026-09-03 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R03-12 / C03-10 / T03-08 / S03-06 / T03-00 / C03-02 / T1–T12**。未重写 P01–P87 / T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice **正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住门市/Rack·黑出 SOP、默认门市→BAR %、699 Fact、佣金%、Walk $。全文：`scout/2026-09-03-1417.md` · `research-log/2026-09-03-1417-scout.md`。12:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后仍 **不开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S03-14a | 侦察日志 | `scout/2026-09-03-1417.md` | **drafted**（scout-only） |
| S03-14b | 研究 log | `research-log/2026-09-03-1417-scout.md` | **drafted** |
| S03-14c | 源表 §127 | `sources/source-map.md` §127 | **appended**（HSMAI Rack **升级打开**（§84 timeout→开）；HSMAI BAR「replaced Rack」升核；Protel Rack 升核；OPERA About BAR 指针；Lighthouse C 登记；blackout/yieldable/seasonal/children 404；OPERA age buckets soft FAIL） |
| S03-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；提及 S03-14；不规定 P88/P89） |
| S03-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S03-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S03-14 scout-only；不新增 P88 行） |
| S03-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Rack/门市 / Blackout / Yieldable / Seasonal / Children **四件套均未齐**；邻 HSMAI BAR replaced Rack + P64/P01/T-Floor/T-Corp/P71/T-Extra/P78；§127 升核 HSMAI Rack；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R03-12 / T-Restriction / C03-10 / P01–P87 正文三句；华住门市·黑出 SOP；门市→BAR % Fact；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 理论 · T03-16 · T-Rack / Rack·门市 vs BAR / 不开 P88（2026-09-03 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S03-14 / R03-12 / C03-10 / T03-08 / S03-06 / T03-00 / C03-02 / T1–T12**。未重写 P01–P87 / T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework **正文**（P01 / P64 / T-Floor / problem-tree 仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住门市/Rack SOP、默认门市→BAR %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（门市基准改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-03-1617-rack-vs-bar-theory.md`。14:17「不要规定 P88/P89」= scout 不得指定；本 theory 小时开 **callable theory card**，不开剧本。S03-14 scout fail for NEW playbook **不阻挡** 理论加深。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T03-16a | 理论卡 | `theory/rack-vs-bar.md` | **drafted**（T-Rack / T03-16） |
| T03-16b | P01 / P64 / T-Floor / problem-tree | `advisor-playbooks/high-demand-day.md` · `nested-rate-class.md` · `theory/rate-floor-vs-bar.md` · `diagnosis/problem-tree.md` | **pointer only**（三句 / 399 / 799 不改） |
| T03-16c | 源表 §128 | `sources/source-map.md` §128 | **appended**（HSMAI Rack + BAR replaced Rack + Protel Rack 升核/复核；OPERA About BAR 指针；Blackout 族 FAIL 指针；华住门市 SOP NV） |
| T03-16d | 研究 log | `research-log/2026-09-03-1617-rack-vs-bar-theory.md` | **drafted** |
| T03-16e | README 8.4 | `README.md` §8.4 | **updated**（下一槽 18:17 case；提及 T-Rack + S03-14；不规定 P88/P89） |
| T03-16f | backlog | `backlog/research-backlog.md` | **appended** |
| T03-16g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Rack drafted；不新增 P88 行） |
| T03-16h | systems | — | **no change** |
| T03-16i | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

核心：形 A 拆门市基准 vs 公开；形 B 拒 BAR→399；形 C Rack = 年/季基准不是 rewrite（「BAR replaced Rack」≠ 砸穿）；形 D→P01/P64/T-Floor/P05·P02；形 E Vendor Rack type ≠ BAR Type；形 F→P05（仍不从门市改写）。399 永不推荐为新 BAR。HSMAI：Rack = year/season room-type standard；BAR replaced Rack。Protel：Rack type ≠ House use ≠ rewrite。**T-Rack ≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 过程仍 **P01** + **P64**（+ **T-Floor**）。

与近三轮兼容：S03-14 scout-only / T-Restriction / C03-10 **无真矛盾**，无 needs_revision。S03-14 说 Rack/门市 四件套 fail for NEW playbook 因 P64/P01/T-Floor 已覆盖 — **不阻挡** 理论加深。T-Restriction / C03-10 公式原样。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S03-14 / R03-12 / T03-08 / C03-10 / T1–T12 / P01–P87 正文；华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 案例 · C03-18 · Rack/门市 vs BAR Simulation / 不开 P88（2026-09-03 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **T03-16 / S03-14 / R03-12 / C03-10 / T03-08 / S03-06 / T03-00 / C03-02 / T1–T12**。未重写 P01–P87 / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / T20 / optimization-advice / restriction-framework **正文**（T-Rack 配套行 + P01/P64/T-Floor/problem-tree 仅指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编华住门市/Rack SOP、默认门市→BAR %、699 Fact、佣金%、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（门市基准改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-03-1817-rack-vs-bar-case.md`。16:17「不要规定 P88/P89」= theory 不得指定；本 case 小时开 **callable Simulation**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C03-18a | Simulation | `cases/sim-2026-rack-vs-bar-sat.md` | **drafted**（C03-18；含 compact 顾问十段） |
| C03-18b | T-Rack 配套 | `theory/rack-vs-bar.md` | **配套行 → sim**（正文三句 / 399 / 799 不改） |
| C03-18c | P01 / P64 / T-Floor / problem-tree | high-demand-day · nested-rate-class · rate-floor-vs-bar · problem-tree | **pointer only** |
| C03-18d | 源表 §129 | `sources/source-map.md` §129 | **appended**（CASE 指针复述 §128；curl 复核 200；无新 URL） |
| C03-18e | 研究 log | `research-log/2026-09-03-1817-rack-vs-bar-case.md` | **drafted** |
| C03-18f | README 8.4 | `README.md` §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C03-18；不规定 P88/P89） |
| C03-18g | backlog | `backlog/research-backlog.md` | **appended** |
| C03-18h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C03-18 rack sim；不新增 P88 行） |
| C03-18i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：T-Rack 用户句需要专卷 Simulation；Diagnose 走 T-Rack、过程仍 P01 + P64（+ T-Floor）、Hold 779–799 首选 799、拒 399、不发明 699；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T03-16 正文 / P01–P87 正文三句；华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor China Fact；systems/*.md；optimization-advice / restriction-framework 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-03 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R03-20｜2026-09-03 20:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R03-20** · Hour 20 = 来源与复盘  
> 对照：S03-14 scout-only · T03-16 T-Rack · C03-18 rack-vs-bar Simulation  
> 全文：`research-log/2026-09-03-2017-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R03-20a | 研究 log | research-log/2026-09-03-2017-sources-recap.md | drafted（sources-recap） |
| R03-20b | 源表 §130 | sources/source-map.md §130 | appended（Cloudbeds Hide Base Rate + OPERA 5.6 Rate Management Configuration；Cloudbeds Rate Plans / Clock Rate types / Apaleo Setting Prices / HotelKey Rate Plan Config 指针或不当第三核；HSMAI/Protel/OPERA About BAR 指针升核） |
| R03-20c | T-Rack / C03-18 sim / P01 / P64 / T-Floor / problem-tree 文末 | theory/rack-vs-bar.md · cases/sim-2026-rack-vs-bar-sat.md · advisor-playbooks/high-demand-day.md · nested-rate-class.md · theory/rate-floor-vs-bar.md · diagnosis/problem-tree.md | last-line §130 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R03-20d | README 8.4 | README.md 8.4 | updated（下一槽 22:17 scout；提及 R03-20 + C03-18 + T-Rack；不规定 P88/P89） |
| R03-20e | backlog | backlog/research-backlog.md | appended |
| R03-20f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R03-20g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S03-14 / T-Rack / C03-18 **无真矛盾**，无 needs_revision；Diagnose 仍 T-Rack、过程仍 P01 + P64（+ T-Floor）；T-Rack ≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle；399 rejected；799 Hypothesis；不发明 699；C03-18 不开 P88；§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ BAR rewrite）+ OPERA 5.6 Rate Management（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S03-14 / T03-16 / C03-18 / P01–P87 / T-Rack 正文；华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-03 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 侦察 · S03-22 · Booking Window / Release Time / LOS Pricing scout-only（2026-09-03 22:17 CST 追加）

> 从磁盘确认最新为 R03-20 / C03-18 / T-Rack；Diagnose 最新 **T-Rack**，过程 **P01 + P64（+ T-Floor）**；限制类仍 **T-Restriction → P33 + P40/P21**。§131 新开 OPERA Rate Codes + Booking.com BookingRule + HSMAI ALT + HSMAI LOS Pricing。候选因邻 P19/P33/T-Restriction/P38/P42/P05 或 T08/P40/P41/P76/P21 已覆盖动作，未凑齐 HIGH 四件套。**scout-only；不开 P88/P89；无新剧本/卡/指标/sim。** Vendor 字段不当中国 Fact；华住 SOP / 默认窗口 / 折扣 % 仍 NV。Pet/AAA 仍停车；Smoking/damage FEE 仍 MEDIUM/LOW。仍 P01–P87；Hold 779–799 首选 799；拒 399；不发明 699。全文：`scout/2026-09-03-2217.md` · `research-log/2026-09-03-2217-scout.md`。下一槽 **2026-09-04 00:17 = theory**；不规定 P88/P89。


## 理论 · T04-00 · T-Window（Booking Window / 提前期 offset / Release Time / Sell Dates vs public BAR）/ 不开 P88（2026-09-04 00:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **S03-22 / R03-20 / C03-18 / T03-16 T-Rack / R03-12 / C03-10 / T03-08 T-Restriction / S03-06 / T03-00 / C03-02**。未重写 P01–P87 / T-Restriction / T-Flash / T-Floor / T-Rack / T-Component / T-Tax / T20 / optimization-advice / restriction-framework **正文**（P33 / P35 / P19 / P42 / T-Restriction / problem-tree 仅文末一行指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 Booking Window·Release Time SOP、默认提前期 / cutoff 小时 / last-minute 天数、本店 ALT、转化率、699 Fact、Walk $、佣金%。未把 Vendor 默认值（720h / 72h / 13200h / 550 天 / 1 小时 / 4pm / 10:00–14:15）当中国 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（时窗/可见性改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-04-0017-booking-window-theory.md`。S03-22「不规定编号」= scout 不得指定；本 theory 小时开**理论卡**，不开剧本。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T04-00a | 理论卡 | `theory/booking-window-vs-bar.md` | **drafted**（T-Window / T04-00） |
| T04-00b | P33 / P35 / P19 / P42 / T-Restriction / problem-tree | `advisor-playbooks/restriction-overuse.md` · `ota-visibility-drop.md` · `prepaid-nonrefundable.md` · `same-day-walk-in.md` · `theory/restriction-maxlos-ctd-vs-bar.md` · `diagnosis/problem-tree.md` | **pointer only**（三句 / 399 / 799 不改） |
| T04-00c | 源表 §132 | `sources/source-map.md` §132 | **appended**（升核 OPERA Rate Codes + BDC BookingRule + HSMAI ALT；**新开** Cloudbeds Advanced booking settings + Apaleo Setting up Rate Plans + Apaleo Service Availability；myallocator 同族登记；OPERA stay-side 指针；HSMAI 5 猜链 + HotelKey/Clock 2 猜链 **404 FAIL**；NV 行） |
| T04-00d | 研究 log | `research-log/2026-09-04-0017-booking-window-theory.md` | **drafted** |
| T04-00e | README | `README.md` §8 头 · §8.1 · §8.3 · §8.4 | **updated**（下一槽 02:17 case；提及 T-Window + S03-22；不规定 P88/P89） |
| T04-00f | backlog | `backlog/research-backlog.md` | **appended** |
| T04-00g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T-Window drafted；不新增 P88 行） |
| T04-00h | knowledge-map | `curriculum/knowledge-map.md` §8 | **appended** |
| T04-00i | systems | — | **no change** |
| T04-00j | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

核心：**两条时间轴钉死** —— 下单日轴（Min/Max Advanced Booking、ReleaseTimeOfDayStart/End、booking period / Start-End Sell Dates、late booking until）= 本卡；住期轴（MinLOS/MaxLOS/CTA/CTD）= T-Restriction。形 A 分三来源（真卖光 / stay-side / booking-side）；形 B 拒 BAR→399「搜不到所以砍」；形 C 窗口误挡（命名反直觉：Cloudbeds Min offset 挡临近、Max offset 挡远期；默认 0/13200 踩坑）→ P33 + P60；形 D 刻意 advance-purchase / last-minute 围栏 → P19/P18 产品留产品；形 E 同日 release time / late booking until → P42；形 F 真弱 → P05/P02（仍禁一夜 −15%）。Apaleo 官方排障句「有房却无 offer 先查 minimum advance booking 等限制」+「override 不改可售/价格」= 本卡最强 A 级背书。399 永不推荐为新 BAR。**T-Window ≠ T-Restriction ≠ T-Flash ≠ T-Floor ≠ T-Rack ≠ T-Hurdle ≠ T-Corp ≠ T-Component ≠ T-Tax。** 过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。

与近三轮兼容：**S03-22 scout-only / R03-20 / C03-18 / T-Rack 无真矛盾**，亦与 **S03-06 / T03-08 / C03-10 / R03-12** 无真矛盾，无 needs_revision。S03-22 说 Booking Window 四件套 fail for NEW playbook 因邻 P19/P33/T-Restriction/P38/P42/P05 覆盖动作 — **不阻挡**理论加深（先例 T-Restriction←S03-06 / T-Rack←S03-14）。T-Rack / T-Restriction / C03-10 / C03-18 三句 / 399 / 799 / 不发明 699 **原样**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；LOS Pricing / Tiered 当核（仅 handoff → T08/P40/P41/P76/P21）；重写 S03-22 / R03-20 / C03-18 / T03-16 / T03-08 / C03-10 / T1–T12 / P01–P87 正文；华住 Booking Window·Release Time SOP；默认提前期；本店 ALT；699 Fact；Vendor 默认值当 China Fact；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；操作用户机器；通知用户。

下一槽 **2026-09-04 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R04-12｜2026-09-04 12:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R04-12** · Hour 12 = 来源与复盘  
> 对照：S03-22 scout-only · T04-00 T-Window · 02:17–10:17 slot gap（无 C04-02）  
> 全文：`research-log/2026-09-04-1217-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R04-12a | 研究 log | research-log/2026-09-04-1217-sources-recap.md | drafted（sources-recap） |
| R04-12b | 源表 §133 | sources/source-map.md §133 | appended（Clock Rate Restrictions + OPERA 5.6 Rate Header Tab；OPERA F5 指针；Mews SPA FAIL；§131–§132 指针升核） |
| R04-12c | T-Window / P33 / P35 / T-Restriction / problem-tree 文末 | theory/booking-window-vs-bar.md · advisor-playbooks/restriction-overuse.md · ota-visibility-drop.md · theory/restriction-maxlos-ctd-vs-bar.md · diagnosis/problem-tree.md | last-line §133 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R04-12d | README 8.4 | README.md 8.4 | updated（下一槽 14:17 scout；提及 R04-12 + T-Window；不规定 P88/P89） |
| R04-12e | backlog | backlog/research-backlog.md | appended |
| R04-12f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R04-12g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S03-22 / T-Window（+ 02–10 gap）**无真矛盾**，无 needs_revision；Diagnose 仍 T-Window、过程仍 P33 + P35（+ P19/P42/P38/T-Restriction/P60/P05·P02）；T-Window ≠ T-Restriction ≠ T-Flash ≠ T-Floor ≠ T-Rack ≠ T-Hurdle ≠ T-Corp ≠ T-Component ≠ T-Tax；399 rejected；799 Hypothesis；不发明 699；不开 P88；§133 新开 Clock Rate Restrictions（Min/Max days before arrival + Last Minute ≠ rewrite）+ OPERA 5.6 Rate Header（Sell Controls Min/Max Advance Booking ≠ rewrite）；补齐 §132 Clock 猜链 FAIL。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；C04-02 Simulation（留给 case 槽）；重写 S03-22 / T04-00 / P01–P87 / T-Window 正文；华住 Booking Window·Release Time SOP；默认提前期；本店 ALT；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-04 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 侦察 · S04-14 · Soft/Hard≈Deduct/Non-Deduct · House Closed · Channel Stop-Sell scout-only / 不开 P88（2026-09-04 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 T1–T12 骨架。未重写 **R04-12 / T04-00 T-Window / S03-22 / R03-20 / C03-18 / T-Rack / T-Restriction / C03-10**。未重写 P01–P87 / T-Window / T-Rack / T-Restriction / T-Status / P53 / P52 / P58 **正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。**不写 C04-02**（留给 case 槽）。未编华住 Soft·Hard 话术、状态码名、wash%、默认放房点、699 Fact、佣金%、Walk $。全文：`scout/2026-09-04-1417.md` · `research-log/2026-09-04-1417-scout.md`。12:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后仍 **不开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S04-14a | 侦察日志 | `scout/2026-09-04-1417.md` | **drafted**（scout-only） |
| S04-14b | 研究 log | `research-log/2026-09-04-1417-scout.md` | **drafted** |
| S04-14c | 源表 §134 | `sources/source-map.md` §134 | **appended**（OPERA Blocks + Property Availability + GRC **新开**；Block Statuses / Restrictions / Managing Restrictions / Apaleo Master Closed 指针；HSMAI Wash/Group Ceiling 用途升核；OTA News Soft/Hard = C 登记） |
| S04-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；提及 S04-14；不规定 P88/P89） |
| S04-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S04-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S04-14 scout-only；不新增 P88 行） |
| S04-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Soft/Hard · House Closed · Channel Stop-Sell **四件套均未齐**；邻 P53/T-Status/P52/P58/P55 + T-Restriction/P33/P35/P60；§134 新开 OPERA Blocks + Property Availability（Non-deduct OCC）+ GRC；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；C04-02 Simulation；Pet/AAA；smoking/damage FEE；重写 R04-12 / T-Window / S03-22 / P01–P87 正文三句；华住 Soft·Hard·状态码 SOP；wash% Fact；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-04 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Deduct/Non-Deduct 误读（加强既有 T-Status，类似 S03-22→T-Window）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。

## 理论 · T04-16 · Soft/Hard≈Deduct/Non-Deduct deepen **SKIP** / 不开 P88（2026-09-04 16:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S04-14 / R04-12 / T04-00 / S03-22 / T1–T12**。未重写 P01–P87 / T-Status / P53 / T-Window / T-Rack / T-Restriction **正文三句**（T-Status 仅修订表一行）。未开 **P88**。未开 **P89**。未开新理论卡 / 剧本 / 决策卡 / 轻指标 / Simulation。未编华住 Soft·Hard SOP、wash%、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-04-1617-theory-skip-deduct.md`。S04-14「可评估加深；不能显著改变则不写」→ **本小时判定不写**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T04-16a | 研究 log | `research-log/2026-09-04-1617-theory-skip-deduct.md` | **drafted**（theory-skip） |
| T04-16b | T-Status 修订行 | `theory/group-inventory-deduct.md` | **revision-only**（三句 / 399 / 799 不改） |
| T04-16c | 源表 | `sources/source-map.md` | **无新 §**（§134 复核） |
| T04-16d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 18:17 case；提及 T04-16 skip；不规定 P88/P89） |
| T04-16e | backlog | `backlog/research-backlog.md` | **appended** |
| T04-16f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T04-16 skip；不新增 P88 行） |
| T04-16g | 新理论 / 剧本 / 卡 / 指标 / sim | — | **none**（不开 P88；不 deepen T-Status 正文） |

一句话：Soft/Hard ≈ Deduct/Non-Deduct 口语；T-Status/P53 已覆盖 Situation/Diagnosis/Action；§134 Occupancy with Non-deduct % 只加固 Watch → **theory-skip**；Diagnose 仍 T-Status；过程仍 P53（+ P52/P58/P55）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；Pet/AAA；smoking/damage FEE；重写 T-Status / P53 / P01–P87 正文三句；华住 Soft·Hard SOP；wash% Fact；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-04 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status** 列为「下一轮要写」— 已 drafted（T-Status deepen **已评估并 skip**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。C04-02 仍留给 case 槽自主核。


## 案例 · C04-02 · booking-window Simulation / 不开 P88（2026-09-04 18:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T04-16 / S04-14 / R04-12 / T04-00 / S03-22 / T1–T12**。未重写 P01–P87 / T-Window / T-Rack / T-Restriction **正文三句**（T-Window 仅配套行 + 修订表 + 文末指针；P33/P35/problem-tree 仅文末指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 问题树新枝。未编华住 Booking Window·Release Time SOP、默认提前期、本店 ALT、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（时窗/可见性改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-booking-window-sat.md` · `research-log/2026-09-04-1817-booking-window-case.md`。T04-00「无新 Simulation」→ 本小时补 callable 专卷（同 C03-18←T-Rack / C03-10←T-Restriction）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C04-02a | Simulation | `cases/sim-2026-booking-window-sat.md` | **drafted**（C04-02；含顾问十段） |
| C04-02b | T-Window 配套/修订/指针 | `theory/booking-window-vs-bar.md` | **pointer + companion**（三句 / 399 / 799 不改） |
| C04-02c | P33 / P35 / problem-tree | `advisor-playbooks/restriction-overuse.md` · `ota-visibility-drop.md` · `diagnosis/problem-tree.md` | **pointer only** |
| C04-02d | 源表 §135 | `sources/source-map.md` §135 | **appended**（CASE 指针复述 §132–§133；不造新 URL） |
| C04-02e | 研究 log | `research-log/2026-09-04-1817-booking-window-case.md` | **drafted** |
| C04-02f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C04-02；不规定 P88/P89） |
| C04-02g | backlog | `backlog/research-backlog.md` | **appended** |
| C04-02h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C04-02 drafted；不新增 P88 行） |
| C04-02i | 新剧本 / 卡 / 指标 | — | **none**（不开 P88） |

一句话：Booking-side 时窗 ≠ 公开 BAR；Diagnose 走 **T-Window**；过程仍 **P33** + **P35**；Hold 779–799 首选 799；拒 399；不发明 699；§135 CASE 指针。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T-Window / P01–P87 正文三句；华住 Booking Window SOP；默认提前期；本店 ALT；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-04 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**C04-02 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R04-20｜2026-09-04 20:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R04-20** · Hour 20 = 来源与复盘  
> 对照：S04-14 scout-only Soft/Hard · T04-16 Soft/Hard deepen theory-skip · C04-02 booking-window Simulation  
> 全文：`research-log/2026-09-04-2017-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R04-20a | 研究 log | research-log/2026-09-04-2017-sources-recap.md | drafted（sources-recap） |
| R04-20b | 源表 §136 | sources/source-map.md §136 | appended（HotelKey Min/Max Booking Lead Days + Protel Min/Max advance booking 用途升核；OPERA Restrictions Advance Booking 指针；Protel Standard 同族登记；§131–§135 指针升核） |
| R04-20c | T-Window / C04-02 sim / P33 / P35 / problem-tree 文末 | theory/booking-window-vs-bar.md · cases/sim-2026-booking-window-sat.md · advisor-playbooks/restriction-overuse.md · ota-visibility-drop.md · diagnosis/problem-tree.md | last-line §136 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R04-20d | README 8.4 | README.md 8.4 | updated（下一槽 22:17 scout；提及 R04-20 + C04-02 + T-Window；不规定 P88/P89） |
| R04-20e | backlog | backlog/research-backlog.md | appended |
| R04-20f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R04-20g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S04-14 / T04-16 skip / C04-02 **无真矛盾**，无 needs_revision；Diagnose 仍 **T-Window**、过程仍 **P33 + P35**；T-Window ≠ T-Restriction ≠ T-Status ≠ T-Rack ≠ T-Floor ≠ T-Hurdle；399 rejected；799 Hypothesis；不发明 699；C04-02 不开 P88；§136 用途升核 HotelKey Lead Days（补 §132 HotelKey FAIL）+ Protel advance booking（提前期闸 ≠ rewrite）。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S04-14 / T04-16 / C04-02 / P01–P87 / T-Window 正文；华住 Booking Window·Soft·Hard SOP；默认提前期；本店 ALT；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-04 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**C04-02 已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 侦察 · S04-22 · Rate Strategy / Occupancy-triggered auto scout-only（2026-09-04 22:17 CST 追加）

> 从磁盘确认最新为 R04-20 / C04-02 / T04-16 skip / S04-14；Diagnose 最新 **T-Window**，过程 **P33 + P35**；限制类仍 **T-Restriction → P33 + P40/P21**；Soft·Hard 口语仍 **P53/T-Status**（deepen skip）。§137 用途升核 OPERA Rate Strategies（OCC% Close）+ 新开 OPERA 5.6 Occupancy Based Pricing + Rate Strategy Setup + Cloudbeds PIE occupancy / Rules；Restriction-based 登记；Apaleo 猜链 404。候选因邻 **P66/P33/P64/P01/P05/P37/P02/T20** 已覆盖动作，未凑齐 HIGH 四件套。**scout-only；不开 P88/P89；无新剧本/卡/指标/sim。** Vendor 阈值/%/$ 不当中国 Fact；华住 OCC 自动规则 SOP / 默认阈值% / 自动降幅% 仍 NV。Pet/AAA 仍停车；Smoking/damage FEE 仍 MEDIUM/LOW。仍 P01–P87；Hold 779–799 首选 799；拒 399；不发明 699。全文：`scout/2026-09-04-2217.md` · `research-log/2026-09-04-2217-scout.md`。下一槽 **2026-09-05 00:17 = theory**；不规定 P88/P89。Notify **NO**。


## T05-00｜2026-09-05 00:17 Asia/Shanghai · THEORY Rate Strategy deepen → **SKIP**

> Theory ID：**T05-00** · Hour 0 = 理论/指标  
> 对照：S04-22 scout-only Rate Strategy / Occupancy-triggered auto · §137  
> 全文：`research-log/2026-09-05-0017-theory-skip-rate-strategy.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T05-00a | 研究 log | research-log/2026-09-05-0017-theory-skip-rate-strategy.md | drafted（theory-skip） |
| T05-00b | P66 修订一行 | advisor-playbooks/rms-rec-override.md §12 | revision row only（三句 / 399 / 799 不改） |
| T05-00c | 源表 | sources/source-map.md | **无新 §**（§137 复核 only） |
| T05-00d | README 8.4 | README.md 8.4 | updated（下一槽 02:17 case；提及 T05-00 skip；不规定 P88/P89） |
| T05-00e | backlog | backlog/research-backlog.md | appended |
| T05-00f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| T05-00g | 新理论卡 / 剧本 / 卡 / 指标 / sim / systems | — | **none**（不开 P88） |

一句话：Rate Strategy / OCC-triggered auto = 已有限制/日价/系统输出杠杆的自动化；**无新轴**；邻 **P66 + P33 + P64 + P37 + P01/P05** 已覆盖 Situation/Diagnosis/Action；§137 只加固 Watch → **theory-skip**（镜像 T04-16）。Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P33 / P01–P87 正文三句；华住 OCC 自动规则 SOP；默认阈值%/降幅%；699 Fact；Vendor %/$ China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit。

下一槽 **2026-09-05 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 本小时 skip**；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## 案例 · C05-02 · OCC-auto Rate Strategy Simulation / 不开 P88（2026-09-05 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T05-00 / S04-22 / R04-20 / C04-02 / T04-16 / T1–T12**。未重写 P01–P87 / P66 / P33 / P64 **正文三句**（P66 仅修订表 + 文末指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。未编华住 Rate Strategy·OCC 自动规则 SOP、默认阈值%、自动降幅%、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（OCC-auto / Rate Strategy 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-occ-auto-rate-strategy-sat.md` · `research-log/2026-09-05-0217-occ-auto-rate-strategy-case.md`。T05-00 deepen **已 skip** → 本小时补 callable 专拍 Simulation（闸仍 P66；≠ 开新剧；≠ 推翻 skip）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C05-02a | Simulation | `cases/sim-2026-occ-auto-rate-strategy-sat.md` | **drafted**（C05-02；含顾问十段） |
| C05-02b | P66 修订/指针 | `advisor-playbooks/rms-rec-override.md` | **revision + pointer**（三句 / 399 / 799 不改） |
| C05-02c | P33 / P64 / dont-follow-rms-dump | `advisor-playbooks/restriction-overuse.md` · `nested-rate-class.md` · `recommendations/dont-follow-rms-dump.md` | **pointer only**（可选） |
| C05-02d | 源表 §138 | `sources/source-map.md` §138 | **appended**（CASE 指针复述 §137；不造新 URL） |
| C05-02e | 研究 log | `research-log/2026-09-05-0217-occ-auto-rate-strategy-case.md` | **drafted** |
| C05-02f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C05-02；不规定 P88/P89） |
| C05-02g | backlog | `backlog/research-backlog.md` | **appended** |
| C05-02h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C05-02 drafted；不新增 P88 行） |
| C05-02i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T05-00 skip 不推翻） |

一句话：OCC-triggered Rate Strategy / PIE auto ≠ 公开 BAR；Diagnose 走 **P66**；过程 + **P33** + **P64**；Hold 779–799 首选 799；拒 399；不发明 699；§138 CASE 指针。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P01–P87 正文三句；华住 Rate Strategy SOP；默认阈值%/降幅%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-05 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 00:17 skip**；**C05-02 本小时已写**；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R05-04｜2026-09-05 04:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R05-04** · Hour 4 = 来源与复盘  
> 对照：S04-22 scout-only Rate Strategy · T05-00 Rate Strategy deepen theory-skip · C05-02 OCC-auto Simulation  
> 全文：`research-log/2026-09-05-0417-sources-recap.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R05-04a | 研究 log | research-log/2026-09-05-0417-sources-recap.md | drafted（sources-recap） |
| R05-04b | 源表 §139 | sources/source-map.md §139 | appended（Clock Occupancy Adaptable Rates 新开 + Protel OCC% Close 用途升核；Protel Standard oP1 / HotelKey Notifications / Apaleo RM 边界登记；§137–§138 指针升核） |
| R05-04c | P66 / C05-02 sim / P33 / P64 文末 | advisor-playbooks/rms-rec-override.md · cases/sim-2026-occ-auto-rate-strategy-sat.md · advisor-playbooks/restriction-overuse.md · nested-rate-class.md | last-line §139 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R05-04d | README 8.4 | README.md 8.4 | updated（下一槽 06:17 scout；提及 R05-04 + C05-02 + T05-00 skip；不规定 P88/P89） |
| R05-04e | backlog | backlog/research-backlog.md | appended |
| R05-04f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R05-04g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S04-22 / T05-00 skip / C05-02 **无真矛盾**，无 needs_revision；Diagnose 仍 **P66**、过程仍 **P33 + P64**（± P37/P01/P05）；OCC-auto ≠ 公开 BAR；399 rejected；799 Hypothesis；不发明 699；T05-00 skip 不推翻；C05-02 不开 P88；§139 新开 Clock OAR（manual priority）+ Protel OCC% Close 用途升核。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 S04-22 / T05-00 / C05-02 / P01–P87 / P66 正文；华住 Rate Strategy·OCC SOP；默认阈值%/降幅%；699 Fact；Vendor 例 China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / remote_claim / hotel-ai-knowledge。

下一槽 **2026-09-05 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**C05-02 已写**；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## 侦察 · S05-06 · OOS vs OOO · Sales Allowance / Group Ceiling · Item Sell Control scout-only / 不开 P88（2026-09-05 06:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R05-04 / C05-02 / T05-00 / S04-22 / P66 / P37 / P01–P87 正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 OO·OS 字段、Sales Allowance·团 Ceiling SOP、加项配额、佣金%、699 Fact。全文：`scout/2026-09-05-0617.md` · `research-log/2026-09-05-0617-scout.md`。04:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后仍 **不开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S05-06a | 侦察日志 | `scout/2026-09-05-0617.md` | **drafted**（scout-only） |
| S05-06b | 研究 log | `research-log/2026-09-05-0617-scout.md` | **drafted** |
| S05-06c | 源表 §140 | `sources/source-map.md` §140 | **appended**（OPERA OO/OS Reasons + Managing OOS/OOO + Sales Allowances + Controls Blocks + Item Inventory；HSMAI Group Ceiling；Agency 404） |
| S05-06d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 08:17 theory；提及 S05-06；不规定 P88/P89） |
| S05-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S05-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S05-06 scout-only；不新增 P88 行） |
| S05-06g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：OOS vs OOO · Sales Allowance / Group Ceiling · Item Sell Control · Agency **四件套均未齐**；邻 P37 / P10·P52·P53·P58 / P78·P69 / P20；§140 新开 OPERA OO/OS 官方区分 + Sales Allowance + Item Inventory + HSMAI Group Ceiling；Agency 404；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R05-04 / C05-02 / P66 / P37 / P01–P87 正文三句；华住 OO·OS·Sales Allowance SOP；佣金% Fact；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-05 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**C05-02 已写**；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 OOS vs OOO 误读（加强既有 P37/T06，类似 S04-22→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T05-08｜2026-09-05 08:17 Asia/Shanghai · THEORY OOS vs OOO deepen → **SKIP**

> Theory ID：**T05-08** · Hour 8 = 理论/指标  
> 对照：S05-06 scout-only OOS vs OOO leftover · P37 / T06  
> 全文：`research-log/2026-09-05-0817-theory-skip-oos-ooo.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T05-08a | 研究 log | research-log/2026-09-05-0817-theory-skip-oos-ooo.md | drafted（theory-skip） |
| T05-08b | P37 / T06 指针 | advisor-playbooks/ooo-capacity.md · theory/capacity-ooo.md | pointer/revision row only（三句 / 399 / 799 不改） |
| T05-08c | 源表 | sources/source-map.md | **无新 §**（§140 复核 only） |
| T05-08d | README 8.4 | README.md 8.4 | updated（下一槽 10:17 case；提及 T05-08 skip；不规定 P88/P89） |
| T05-08e | backlog | backlog/research-backlog.md | appended |
| T05-08f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| T05-08g | 新理论卡 / 剧本 / 卡 / 指标 / sim / systems | — | **none**（不开 P88） |

一句话：OOS ≠ OOO = 已有分母轴的 Vendor 加固；**无新轴**；邻 **P37 + T06** 已覆盖 Situation/Diagnosis/Action；§140 OO/OS 复核只加固 Watch → **theory-skip**（镜像 T05-00 / T04-16）。Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论卡；Sales Allowance/Group Ceiling/Item Sell 专卡；Pet/AAA；smoking/damage FEE；重写 P37/T06/P01–P87 正文；华住 OO·OS Fact；699 Fact；systems；publish；git commit。

下一槽 **2026-09-05 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 00:17 skip**；**P37/T06 OOS vs OOO deepen 本小时 skip**；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 案例 · C05-10 · OOS vs OOO Simulation / 不开 P88（2026-09-05 10:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T05-08 / S05-06 / R05-04 / C05-02 / T05-00 / T1–T12**。未重写 P01–P87 / P37 / T06 **正文三句**（P37 仅修订表 + 文末指针；T06 仅文末指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。未编华住 OO·OS 字段、Unit Status SOP、默认维修间夜、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（OOS vs OOO 混算改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-oos-vs-ooo-sat.md` · `research-log/2026-09-05-1017-oos-vs-ooo-case.md`。T05-08 deepen **已 skip** → 本小时补 callable 专拍 Simulation（闸仍 P37；≠ 开新剧；≠ 推翻 skip；≠ 重写 `sim-2026-ooo-occ-92-saturday.md`）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C05-10a | Simulation | `cases/sim-2026-oos-vs-ooo-sat.md` | **drafted**（C05-10；含顾问十段） |
| C05-10b | P37 修订/指针 | `advisor-playbooks/ooo-capacity.md` | **revision + pointer**（三句 / 399 / 799 不改） |
| C05-10c | T06 指针 | `theory/capacity-ooo.md` | **pointer only** |
| C05-10d | 源表 §141 | `sources/source-map.md` §141 | **appended**（CASE 指针复述 §140；不造新 URL） |
| C05-10e | 研究 log | `research-log/2026-09-05-1017-oos-vs-ooo-case.md` | **drafted** |
| C05-10f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C05-10；不规定 P88/P89） |
| C05-10g | backlog | `backlog/research-backlog.md` | **appended** |
| C05-10h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C05-10 drafted；不新增 P88 行） |
| C05-10i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T05-08 skip 不推翻） |

一句话：OOS ≠ OOO；库存状态 ≠ 公开 BAR；Diagnose 走 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699；§141 CASE 指针。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P37 / T06 / P01–P87 正文三句；华住 OO·OS SOP；默认维修间夜；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-05 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 00:17 skip**；**P37/T06 OOS vs OOO deepen 08:17 skip**；**C05-10 本小时已写**；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## R05-12｜2026-09-05 12:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R05-12** · Hour 12 = 来源与复盘  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C05-10 / T05-08 / S05-06 / R05-04 / C05-02 / T05-00 / P01–P87 / P37 / T06 正文三句**（P37 / T06 仅文末 §142 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住 OO·OS 字段、Unit Status SOP、默认维修间夜、Sales Allowance·团 Ceiling SOP、加项配额、佣金%、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（OOS vs OOO 混算改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-05-1217-sources-recap.md` · `sources/source-map.md` §142。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R05-12a | 研究 log | research-log/2026-09-05-1217-sources-recap.md | drafted（sources-recap） |
| R05-12b | 源表 §142 | sources/source-map.md §142 | appended（Protel Air OOO/OOS 新开 + Cloudbeds OOS Blocking 新开 + Occupancy Discrepancies 分母差新开；Protel Standard OOS / Hoteltime 登记；§140–§141 指针升核） |
| R05-12c | P37 / T06 / C05-10 sim 文末 | advisor-playbooks/ooo-capacity.md · theory/capacity-ooo.md · cases/sim-2026-oos-vs-ooo-sat.md | last-line §142 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R05-12d | README 8.4 | README.md 8.4 | updated（下一槽 14:17 scout；提及 R05-12 + C05-10 + T05-08 skip；不规定 P88/P89） |
| R05-12e | backlog | backlog/research-backlog.md | appended |
| R05-12f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R05-12g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S05-06 / T05-08 skip / C05-10 **无真矛盾**。§142 新开 Protel Air OOO≠OOS + Cloudbeds OOS 阻断 + Occupancy Dashboard vs Adjusted 分母差；Diagnose 仍 **P37**（+ T06）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-05 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**C05-10 已写**；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 侦察 · S05-14 · Sell Limits / Channel Sell Limits / Apaleo Managed Overbooking scout-only / 不开 P88（2026-09-05 14:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R05-12 / C05-10 / T05-08 / S05-06 / P24 / P33 / P37 / P58 / P01–P87 正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 Sell Limit·渠道额度 SOP、默认超售垫、渠道%、699 Fact。全文：`scout/2026-09-05-1417.md` · `research-log/2026-09-05-1417-scout.md`。12:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后仍 **不开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S05-14a | 侦察日志 | `scout/2026-09-05-1417.md` | **drafted**（scout-only） |
| S05-14b | 研究 log | `research-log/2026-09-05-1417-scout.md` | **drafted** |
| S05-14c | 源表 §143 | `sources/source-map.md` §143 | **appended**（OPERA Managing Sell Limits 用途升核 + Managing Channel Sell Limits 版本升核 + Apaleo Managed Overbooking 新开；Protel OB 登记；HSMAI Unconstrained 指针；Cloudbeds 猜链 404） |
| S05-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；提及 S05-14；不规定 P88/P89） |
| S05-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S05-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S05-14 scout-only；不新增 P88 行） |
| S05-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Sell Limits · Channel Sell Limits · Apaleo Managed Overbooking（正/负）· Unconstrained **四件套均未齐**；邻 P24 / P33 / P37 / P58 / P35 / P60 / P13 / P03 / P05 / P43；§143 用途升核 OPERA Sell Limits + Channel Sell Limits + **新开** Apaleo Managed Overbooking；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R05-12 / C05-10 / P24 / P33 / P01–P87 正文三句；华住 Sell Limit·渠道额度 SOP；佣金% Fact；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-05 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**C05-10 已写**；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Sell Limit 误读（加强既有 P24/P33，类似 S05-06→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T05-16｜2026-09-05 16:17 Asia/Shanghai · THEORY Sell Limit deepen → **SKIP**

> Theory ID：**T05-16** · Hour 16 = 理论/指标  
> 对照：S05-14 scout-only Sell Limits / Channel Sell Limits / Apaleo Managed Overbooking · §143  
> 全文：`research-log/2026-09-05-1617-theory-skip-sell-limit.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T05-16a | 研究 log | research-log/2026-09-05-1617-theory-skip-sell-limit.md | drafted（theory-skip） |
| T05-16b | P24 修订/指针 | advisor-playbooks/overbooking-walk.md | revision + pointer only（三句 / 399 / 799 不改） |
| T05-16c | P33 / overbooking-framework 文末 | advisor-playbooks/restriction-overuse.md · overbooking/overbooking-framework.md | last-line pointer only（可选） |
| T05-16d | 源表 | sources/source-map.md | **无新 §**（§143 复核 only） |
| T05-16e | README 8.4 | README.md 8.4 | updated（下一槽 18:17 case；提及 T05-16 skip；不规定 P88/P89） |
| T05-16f | backlog | backlog/research-backlog.md | appended |
| T05-16g | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| T05-16h | 新理论卡 / 剧本 / 卡 / 指标 / sim / systems | — | **none**（不开 P88） |

一句话：Sell Limit / Channel Sell Limit / Allowed Overbooking = 已有 **inventory sell-control** 轴的 Vendor 标签；**无新轴**；邻 **P24 + P33 + P58 + P37 + P03/P05** 已覆盖 Situation/Diagnosis/Action；§143 只加固 Watch → **theory-skip**（镜像 T05-08 / T05-00 / T04-16）。Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P24 / P33 / P58 / P01–P87 正文三句；华住 Sell Limit·渠道额度 SOP；默认超售垫；渠道%；699 Fact；Vendor %/$ China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit。

下一槽 **2026-09-05 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 00:17 skip**；**P37/T06 OOS vs OOO deepen 08:17 skip**；**P24/P33 Sell Limit deepen 本小时 skip**；C05-10 已写；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Sell Limit 误读专拍 Simulation（闸仍 P24/P33），≠ 开新剧、≠ 推翻 skip。

## C05-18｜2026-09-05 18:17 Asia/Shanghai · CASE Sell Limit misread Simulation / 不开 P88

> Case ID：**C05-18** · Hour 18 = 案例与剧本  
> 对照：T05-16 Sell Limit deepen **theory-skip**（16:17）· S05-14 scout-only · §143  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T05-16 skip / S05-14 / R05-12 / C05-10 / P24 / P33 / P01–P87 正文三句**（P24/P33 仅文末 §144 指针 + 修订表一行）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住 Sell Limit·渠道额度 SOP、默认超售垫、渠道%、699 Fact、Walk $。14/399/799 Simulation only；**399 = 被拒绝的 dump（Sell Limit / Channel Sell Limit / Allowed OB 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-sell-limit-misread-sat.md` · `research-log/2026-09-05-1817-sell-limit-case.md` · `sources/source-map.md` §144。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C05-18a | Simulation | `cases/sim-2026-sell-limit-misread-sat.md` | **drafted**（C05-18；含顾问十段） |
| C05-18b | P24 修订/指针 | `advisor-playbooks/overbooking-walk.md` | **revision + pointer**（三句 / 399 / 799 不改） |
| C05-18c | P33 / framework 指针 | `advisor-playbooks/restriction-overuse.md` · `overbooking/overbooking-framework.md` | **last-line pointer only** |
| C05-18d | 源表 §144 | `sources/source-map.md` §144 | **appended**（CASE 指针复述 §143；不造新 URL） |
| C05-18e | 研究 log | `research-log/2026-09-05-1817-sell-limit-case.md` | **drafted** |
| C05-18f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C05-18；不规定 P88/P89） |
| C05-18g | backlog | `backlog/research-backlog.md` | **appended** |
| C05-18h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C05-18 drafted；不新增 P88 行） |
| C05-18i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T05-16 skip 不推翻） |

一句话：可售数量闸 ≠ 公开 BAR；Diagnose 走 **P24**（+ **P33**）；Hold 779–799 首选 799；拒 399；不发明 699；§144 CASE 指针。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P24 / P33 / P58 / P01–P87 正文三句；华住 Sell Limit·渠道额度 SOP；默认超售垫；渠道%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-05 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen 16:17 skip**；**C05-18 本小时已写**；C05-10 已写；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## R05-20｜2026-09-05 20:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R05-20** · Hour 20 = 来源与复盘  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C05-18 / T05-16 / S05-14 / R05-12 / C05-10 / P01–P87 / P24 / P33 正文三句**（P24 仅修订表 + 文末 §145 指针；P33 / framework / sim 仅文末指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住 Sell Limit·渠道额度 SOP、默认超售垫、渠道%、Walk $、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Sell Limit / Channel / Allowed OB / Capacity Adjustment 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-05-2017-sources-recap.md` · `sources/source-map.md` §145。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R05-20a | 研究 log | research-log/2026-09-05-2017-sources-recap.md | drafted（sources-recap） |
| R05-20b | 源表 §145 | sources/source-map.md §145 | appended（Stayntouch Sell Limits 新开 + Clock Availability Adjustment 新开 + Protel Overbooking Setup 新开；Protel General 登记；Cloudbeds Allotment §38 指针；§143–§144 指针升核） |
| R05-20c | P24 / P33 / framework / C05-18 sim 文末 | advisor-playbooks/overbooking-walk.md · restriction-overuse.md · overbooking/overbooking-framework.md · cases/sim-2026-sell-limit-misread-sat.md | revision row + last-line §145 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R05-20d | README 8.4 | README.md 8.4 | updated（下一槽 22:17 scout；提及 R05-20 + C05-18 + T05-16 skip；不规定 P88/P89） |
| R05-20e | backlog | backlog/research-backlog.md | appended |
| R05-20f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R05-20g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S05-14 / T05-16 skip / C05-18 **无真矛盾**。§145 新开 Stayntouch 物理+Sell Limit + Clock ± Availability Adjustment + Protel Max Sell；Diagnose 仍 **P24**（+ P33）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-05 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**C05-18 已写**；C05-10 已写；C05-02 已写；C04-02 已写；**R05-20 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## 侦察 · S05-22 · Do Not Move / Locked·Unassigned / Waitlist scout-only / 不开 P88（2026-09-05 22:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R05-20 / C05-18 / T05-16 / S05-14 / P24 / P33 / P37 / P01–P87 正文**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝。未编华住 DNM·预分房·候补 SOP、候补转化率、默认锁房数、699 Fact。全文：`scout/2026-09-05-2217.md` · `research-log/2026-09-05-2217-scout.md`。20:17「不要规定 P88/P89」= recap 不得指定；本 scout 核实后仍 **不开**。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S05-22a | 侦察日志 | `scout/2026-09-05-2217.md` | **drafted**（scout-only） |
| S05-22b | 研究 log | `research-log/2026-09-05-2217-scout.md` | **drafted** |
| S05-22c | 源表 §146 | `sources/source-map.md` §146 | **appended**（OPERA DNM 新开 + Cloudbeds Unassigned 新开 + Waitlist 用途升核；Pseudo/HK Board/Blocking 指针·登记；HSMAI Waitlist 404；Room Assignment soft FAIL） |
| S05-22d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 00:17 theory；提及 S05-22；不规定 P88/P89） |
| S05-22e | backlog | `backlog/research-backlog.md` | **appended** |
| S05-22f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S05-22 scout-only；不新增 P88 行） |
| S05-22g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Do Not Move · Locked/Unassigned · Waitlist · Dirty/Pseudo **四件套均未齐**；邻 P37 / P13 / P63 / P24 / P43 / P03 / P05；§146 新开 OPERA DNM + Cloudbeds Unassigned；Waitlist 用途升核；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R05-20 / C05-18 / P24 / P33 / P01–P87 正文三句；华住 DNM·候补 SOP；候补转化率 Fact；佣金% Fact；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-06 00:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**C05-18 已写**；C05-10 已写；C05-02 已写；C04-02 已写；**R05-20 已写**；**S05-22 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 DNM/分房锁误读（加强既有 P37/P13，类似 S05-14→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T06-00｜2026-09-06 00:17 Asia/Shanghai · THEORY DNM / Locked·Unassigned / Waitlist deepen → **SKIP**

> Theory ID：**T06-00** · Hour 0 = 理论/指标  
> 对照：S05-22 scout-only Do Not Move / Locked·Unassigned / Waitlist · §146  
> 全文：`research-log/2026-09-06-0017-theory-skip-dnm.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T06-00a | 研究 log | research-log/2026-09-06-0017-theory-skip-dnm.md | drafted（theory-skip） |
| T06-00b | P37 修订/指针 | advisor-playbooks/ooo-capacity.md | revision + pointer only（三句 / 399 / 799 不改） |
| T06-00c | P13 / P63 / P43 文末 | advisor-playbooks/room-type-compression.md · staff-capacity-constraint.md · verbal-denials.md | last-line pointer only（可选） |
| T06-00d | 源表 | sources/source-map.md | **无新 §**（§146 复核 only） |
| T06-00e | README 8.4 | README.md 8.4 | updated（下一槽 02:17 case；提及 T06-00 skip；不规定 P88/P89） |
| T06-00f | backlog | backlog/research-backlog.md | appended |
| T06-00g | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| T06-00h | 新理论卡 / 剧本 / 卡 / 指标 / sim / systems | — | **none**（不开 P88） |

一句话：DNM / Locked·Unassigned / Waitlist = 已有 **assignment-control / unconfirmed-status** 轴的 Vendor 标签；**无新轴**；邻 **P37 + P13 + P63 + P43 + P24** 已覆盖 Situation/Diagnosis/Action；§146 只加固 Watch → **theory-skip**（镜像 T05-16 / T05-08 / T05-00 / T04-16）。Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P37 / P13 / P63 / P43 / P01–P87 正文三句；华住 DNM·预分房·候补 SOP；候补转化率；默认锁房数；699 Fact；Vendor %/$ China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit。

下一槽 **2026-09-06 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen skip**；**P37/P13 DNM deepen 本小时 skip**；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R05-20 已写；S05-22 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 DNM/分房锁误读专拍 Simulation（闸仍 P37/P13），≠ 开新剧、≠ 推翻 skip。


## 案例 · C06-02 · DNM / Locked·Unassigned / Waitlist misread Simulation / 不开 P88（2026-09-06 02:17 CST 追加）

> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T06-00 skip / S05-22 / R05-20 / C05-18 / P37 / P13 / P01–P87 正文三句**（P37/P13 仅文末 §147 指针 + 修订表一行）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住 DNM·预分房·候补 SOP、候补转化率、默认锁房数、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（DNM / Locked·Unassigned / Waitlist 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-dnm-locked-waitlist-misread-sat.md` · `research-log/2026-09-06-0217-dnm-case.md` · `sources/source-map.md` §147。T06-00 deepen **已 skip** → 本小时补 callable 专拍 Simulation（闸仍 P37/P13；≠ 开新剧；≠ 推翻 skip；≠ 重写 `sim-2026-ooo-occ-92-saturday.md` / `sim-2026-sell-limit-misread-sat.md`）。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C06-02a | Simulation 专卷 | `cases/sim-2026-dnm-locked-waitlist-misread-sat.md` | **drafted** |
| C06-02b | 研究 log | `research-log/2026-09-06-0217-dnm-case.md` | **drafted** |
| C06-02c | 源表 §147 | `sources/source-map.md` §147 | **appended**（CASE 指针复述 §146；无新 URL；curl 复核 200） |
| C06-02d | P37 / P13 文末 | `advisor-playbooks/ooo-capacity.md` · `room-type-compression.md` | **pointer only**（三句 / 399 / 799 不改） |
| C06-02e | backlog | `backlog/research-backlog.md` | **appended** |
| C06-02f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C06-02；不规定 P88/P89） |
| C06-02g | progress | `curriculum/progress.md` | **this block** |
| C06-02h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C06-02 drafted；不新增 P88 行） |
| C06-02i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T06-00 skip 不推翻） |

一句话：换房锁 / 分房摩擦 / 候补未确认 ≠ 公开 BAR；Diagnose 走 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699；§147 CASE 指针复述 §146。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P37 / P13 / P63 / P43 / P01–P87 正文三句；华住 DNM·预分房·候补 SOP；候补转化率；默认锁房数；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-06 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen skip**；**P37/P13 DNM deepen 00:17 skip**；**C06-02 本小时已写**；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R05-20 已写；S05-22 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R06-04｜2026-09-06 04:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R06-04** · Hour 4 = 来源与复盘  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C06-02 / T06-00 / S05-22 / R05-20 / C05-18 / P01–P87 / P37 / P13 正文三句**（P37 仅修订表 + 文末 §148 指针；P13 / C06-02 sim 仅文末指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住 DNM·预分房·候补 SOP、候补转化率、默认锁房数、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（DNM / Locked·Unassigned / Waitlist / Disable room change 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-06-0417-sources-recap.md` · `sources/source-map.md` §148。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R06-04a | 研究 log | research-log/2026-09-06-0417-sources-recap.md | drafted（sources-recap） |
| R06-04b | 源表 §148 | sources/source-map.md §148 | appended（HotelKey DNM 新开 + Stayntouch DNM 新开 + Clock Room Allocation / Disable room change 新开；Protel Lock 登记；Clock Waiting List 登记；§146–§147 指针升核） |
| R06-04c | P37 / P13 / C06-02 sim 文末 | advisor-playbooks/ooo-capacity.md · room-type-compression.md · cases/sim-2026-dnm-locked-waitlist-misread-sat.md | revision row + last-line §148 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R06-04d | README 8.4 | README.md 8.4 | updated（下一槽 06:17 scout；提及 R06-04 + C06-02 + T06-00 skip；不规定 P88/P89） |
| R06-04e | backlog | backlog/research-backlog.md | appended |
| R06-04f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R06-04g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S05-22 / T06-00 skip / C06-02 **无真矛盾**。§148 新开 HotelKey DNM + Stayntouch DNM + Clock Disable room change；Diagnose 仍 **P37**（+ P13）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-06 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**C06-02 已写**；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R05-20 已写；S05-22 scout-only；**R06-04 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## S06-06｜2026-09-06 06:17 Asia/Shanghai · Scout Queue / Pending / Rush（scout-only）

> Scout ID：**S06-06** · Hour 6 = 侦察空档  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R06-04 / C06-02 / T06-00 / S05-22 / P01–P87 / P63 / P67 / P37 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住排队·rush SOP、平均等待分钟、默认 rush 阈值、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Queue / Pending / Rush / Room Is Ready 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-06-0617.md` · `research-log/2026-09-06-0617-scout.md` · `sources/source-map.md` §149。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S06-06a | 侦察日志 | `scout/2026-09-06-0617.md` | **drafted**（scout-only） |
| S06-06b | 研究 log | `research-log/2026-09-06-0617-scout.md` | **drafted** |
| S06-06c | 源表 §149 | `sources/source-map.md` §149 | **appended**（OPERA Queue + PWA Queue + OPERA 5.6 Rush + Stayntouch Queued + HotelKey Pending + Cloudbeds Room Is Ready 新开；Shares 登记；HSMAI queue/rush 404） |
| S06-06d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 08:17 theory；提及 S06-06；不规定 P88/P89） |
| S06-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S06-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S06-06 scout-only；不新增 P88 行） |
| S06-06g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Queue Rooms · Pending · Rush · Room Is Ready · Shares **四件套均未齐**；邻 **P63 / P67 / P37 / P43 / P03 / P05**（Shares → P78/P69）；§149 新开 OPERA/Stayntouch/HotelKey/Cloudbeds 到店周转源；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R06-04 / C06-02 / P63 / P67 / P01–P87 正文三句；华住排队·rush SOP；平均等待分钟；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-06 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-04 已写；S05-22 scout-only；**S06-06 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Queue/Pending 误读（加强既有 P63/P67，类似 S05-22→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。

## T06-08｜2026-09-06 08:17 Asia/Shanghai · THEORY Queue/Pending deepen → **SKIP**

> Theory ID：**T06-08** · Hour 8 = 理论/指标  
> 对照：S06-06 scout-only Queue / Pending / Rush / Room Is Ready · §149  
> 全文：`research-log/2026-09-06-0817-theory-skip-queue.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T06-08a | 研究 log | research-log/2026-09-06-0817-theory-skip-queue.md | drafted（theory-skip） |
| T06-08b | P63 / P67 文末 | advisor-playbooks/staff-capacity-constraint.md · late-checkout-early-checkin.md | last-line pointer only（三句 / 399 / 799 不改） |
| T06-08c | P37 / P43 文末 | advisor-playbooks/ooo-capacity.md · verbal-denials.md | last-line pointer only（可选） |
| T06-08d | 源表 | sources/source-map.md | **无新 §**（§149 复核 only） |
| T06-08e | README 8.4 | README.md §8.4 | **updated**（下一槽 10:17 case；提及 T06-08 skip；不规定 P88/P89） |
| T06-08f | backlog | backlog/research-backlog.md | **appended** |
| T06-08g | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T06-08 skip；不新增 P88 行） |
| T06-08h | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Queue deepen skip） |

一句话：Queue / Pending / Rush / Room Is Ready = **check-in readiness / turnover layer** ≠ 公开 BAR；P63+P67+P37+P43 已覆盖；§149 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P67 / P37 / P43 / P01–P87 正文三句；华住排队·rush SOP；平均等待分钟；默认 rush 阈值；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-06 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 本小时 skip**；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-04 已写；S06-06 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Queue/Pending 误读专拍 Simulation（闸仍 P63/P67，类似 C06-02），≠ 开新剧、≠ 推翻 skip。


## C06-10｜2026-09-06 10:17 Asia/Shanghai · CASE Queue/Pending/Rush misread Simulation

> Case ID：**C06-10** · Hour 10 = 案例与剧本  
> 对照：T06-08 Queue deepen **theory-skip**（08:17）· S06-06 scout-only · §149  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T06-08 / S06-06 / R06-04 / C06-02 / P01–P87 / P63 / P67 正文三句**（P63 / P67 仅文末 §150 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住排队·rush SOP、平均等待分钟、默认 rush 阈值、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Queue / Pending / Rush / Room Is Ready 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-queue-pending-rush-misread-sat.md` · `research-log/2026-09-06-1017-queue-case.md` · `sources/source-map.md` §150。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C06-10a | Simulation 专卷 | `cases/sim-2026-queue-pending-rush-misread-sat.md` | **drafted** |
| C06-10b | 研究 log | `research-log/2026-09-06-1017-queue-case.md` | **drafted** |
| C06-10c | 源表 §150 | `sources/source-map.md` §150 | **appended**（CASE 指针复述 §149；无新 URL；curl 复核 200） |
| C06-10d | P63 / P67 文末 | `advisor-playbooks/staff-capacity-constraint.md` · `late-checkout-early-checkin.md` | **pointer only**（三句 / 399 / 799 不改） |
| C06-10e | backlog | `backlog/research-backlog.md` | **appended** |
| C06-10f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C06-10；不规定 P88/P89） |
| C06-10g | progress | `curriculum/progress.md` | **this block** |
| C06-10h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C06-10 drafted；不新增 P88 行） |
| C06-10i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T06-08 skip 不推翻） |

一句话：到店周转 / 房态就绪（Queue / Pending / Rush / Room Is Ready）≠ 公开 BAR；Diagnose 走 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699；§150 CASE 指针复述 §149。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P67 / P37 / P43 / P01–P87 正文三句；华住排队·rush SOP；平均等待分钟；默认 rush 阈值；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-06 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen skip**；**P37/P13 DNM deepen skip**；**P63/P67 Queue deepen 08:17 skip**；**C06-10 本小时已写**；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-04 已写；S06-06 scout-only；T06-08 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## R06-12｜2026-09-06 12:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R06-12** · Hour 12 = 来源与复盘  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C06-10 / T06-08 / S06-06 / R06-04 / C06-02 / P01–P87 / P63 / P67 正文三句**（P63 / P67 / C06-10 sim 仅文末 §151 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住排队·rush SOP、平均等待分钟、默认 rush 阈值、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Queue / Pending / Rush / Room Is Ready / Dirty 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-06-1217-sources-recap.md` · `sources/source-map.md` §151。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R06-12a | 研究 log | research-log/2026-09-06-1217-sources-recap.md | drafted（sources-recap） |
| R06-12b | 源表 §151 | sources/source-map.md §151 | appended（Clock Room Statuses 新开 + Apaleo Housekeeping 新开 + Protel Housekeeping list 新开；Clock Check-In / Live Monitor / Mews API 登记；Mews help SPA；§149–§150 指针升核） |
| R06-12c | P63 / P67 / C06-10 sim 文末 | advisor-playbooks/staff-capacity-constraint.md · late-checkout-early-checkin.md · cases/sim-2026-queue-pending-rush-misread-sat.md | last-line §151 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R06-12d | README 8.4 | README.md 8.4 | updated（下一槽 14:17 scout；提及 R06-12 + C06-10 + T06-08 skip；不规定 P88/P89） |
| R06-12e | backlog | backlog/research-backlog.md | appended |
| R06-12f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R06-12g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S06-06 / T06-08 skip / C06-10 **无真矛盾**。§151 新开 Clock Room Statuses + Apaleo Housekeeping + Protel Housekeeping list；Diagnose 仍 **P63**（+ P67）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-06 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**C06-10 已写**；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-04 已写；S06-06 scout-only；T06-08 skip；**R06-12 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## S06-14｜2026-09-06 14:17 Asia/Shanghai · Scout Fixed/Override / Shares·Accompanying（scout-only）

> Scout ID：**S06-14** · Hour 14 = 侦察空档  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R06-12 / C06-10 / T06-08 / S06-06 / P01–P87 / P66 / P65 / P63 / P67 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住改价·分账 SOP、默认 override 频率、Share 分账常模、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Fixed/Override/Force/Shares 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-06-1417.md` · `research-log/2026-09-06-1417-scout.md` · `sources/source-map.md` §152。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S06-14a | 侦察日志 | `scout/2026-09-06-1417.md` | **drafted**（scout-only） |
| S06-14b | 研究 log | `research-log/2026-09-06-1417-scout.md` | **drafted** |
| S06-14c | 源表 §152 | `sources/source-map.md` §152 | **appended**（Fixed Rates + Daily Details + Rate Override Reasons + RoomKey Override + RMS Override + HotelKey Force + Accompanying + OPERA 5.6 Shares 新开；Shares 26.2 升核；Controls SHARES 登记；HSMAI 404；Rate Code Financial soft FAIL） |
| S06-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；提及 S06-14；不规定 P88/P89） |
| S06-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S06-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S06-14 scout-only；不新增 P88 行） |
| S06-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Fixed Rate · Rate Amount Override · Discount Reason · Force Availability · Shares/Accompanying **四件套均未齐**；邻 **P66 / P65 / P87 / P80/P71 / P24/P33 / P78/P69 / P01/P64**；§152 新开 Fixed/Override 族 + Accompanying；Shares 升核；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R06-12 / C06-10 / P66 / P65 / P01–P87 正文三句；华住改价·分账 SOP；默认 override 频率；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-06 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-06 scout-only；T06-08 skip；**S06-14 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Fixed/Override 误读（加强既有 P66/P65，类似 S06-06→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T06-16｜2026-09-06 16:17 Asia/Shanghai · THEORY Fixed/Override deepen → **SKIP**

> Theory ID：**T06-16** · Hour 16 = 理论/指标  
> 对照：S06-14 scout-only Fixed Rate / Rate Amount Override / Discount Reason / Force Availability / Shares·Accompanying · §152  
> 全文：`research-log/2026-09-06-1617-theory-skip-fixed-override.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T06-16a | 研究 log | research-log/2026-09-06-1617-theory-skip-fixed-override.md | drafted（theory-skip） |
| T06-16b | P66 / P65 文末 | advisor-playbooks/rms-rec-override.md · cancel-reinstate-old-rate.md | last-line pointer only（三句 / 399 / 799 不改） |
| T06-16c | 源表 | sources/source-map.md | **无新 §**（§152 复核 only） |
| T06-16d | README 8.4 | README.md §8.4 | **updated**（下一槽 18:17 case；提及 T06-16 skip；不规定 P88/P89） |
| T06-16e | backlog | backlog/research-backlog.md | **appended** |
| T06-16f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T06-16 skip；不新增 P88 行） |
| T06-16g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Fixed/Override deepen skip） |

一句话：Fixed Rate / Rate Amount Override / Discount Reason / Force Availability = **reservation-level amount / availability-force layer** ≠ 公开 BAR；P66+P65+P87+P24/P33+P78/P69 已覆盖；§152 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P65 / P87 / P24 / P33 / P01–P87 正文三句；华住改价·分账 SOP；默认 override 频率；Share 分账常模；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-06 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 本小时 skip**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-14 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Fixed/Override 误读专拍 Simulation（闸仍 P66/P65，类似 C06-10），≠ 开新剧、≠ 推翻 skip。


## C06-18｜2026-09-06 18:17 Asia/Shanghai · CASE Fixed/Override/Force misread Simulation

> Case ID：**C06-18** · Hour 18 = 案例与剧本  
> 对照：T06-16 Fixed/Override deepen **theory-skip**（16:17）· S06-14 scout-only · §152  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T06-16 / S06-14 / R06-12 / C06-10 / P01–P87 / P66 / P65 正文三句**（P66 / P65 仅文末 §153 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住改价·分账 SOP、默认 override 频率、Share 分账常模、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Fixed / Rate Amount Override / Discount Reason / Force Availability 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-fixed-override-misread-sat.md` · `research-log/2026-09-06-1817-fixed-override-case.md` · `sources/source-map.md` §153。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C06-18a | Simulation 专卷 | `cases/sim-2026-fixed-override-misread-sat.md` | **drafted** |
| C06-18b | 研究 log | `research-log/2026-09-06-1817-fixed-override-case.md` | **drafted** |
| C06-18c | 源表 §153 | `sources/source-map.md` §153 | **appended**（CASE 指针复述 §152；无新 URL；curl 复核 200） |
| C06-18d | P66 / P65 文末 | `advisor-playbooks/rms-rec-override.md` · `cancel-reinstate-old-rate.md` | **pointer only**（三句 / 399 / 799 不改） |
| C06-18e | backlog | `backlog/research-backlog.md` | **appended** |
| C06-18f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C06-18；不规定 P88/P89） |
| C06-18g | progress | `curriculum/progress.md` | **this block** |
| C06-18h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C06-18 drafted；不新增 P88 行） |
| C06-18i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T06-16 skip 不推翻） |

一句话：单笔 Fixed Rate / Rate Amount Override / Discount Reason / Force Availability ≠ 公开 BAR；Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699；§153 CASE 指针复述 §152。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P65 / P87 / P24 / P33 / P01–P87 正文三句；华住改价·分账 SOP；默认 override 频率；Share 分账常模；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-06 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen skip**；**P37/P13 DNM deepen skip**；**P63/P67 Queue deepen skip**；**P66/P65 Fixed/Override deepen 16:17 skip**；**C06-18 本小时已写**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-14 scout-only；T06-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R06-20｜2026-09-06 20:17 Asia/Shanghai · 来源与复盘

> Recap ID：**R06-20** · Hour 20 = 来源与复盘  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C06-18 / T06-16 / S06-14 / R06-12 / C06-10 / P01–P87 / P66 / P65 正文三句**（P66 / P65 / C06-18 sim 仅文末 §154 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住改价·分账 SOP、默认 override 频率、Share 分账常模、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Fixed / Rate Amount Override / Discount Reason / Force Availability / Manual Price / Change Prices / Override rate 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-06-2017-sources-recap.md` · `sources/source-map.md` §154。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R06-20a | 研究 log | research-log/2026-09-06-2017-sources-recap.md | drafted（sources-recap） |
| R06-20b | 源表 §154 | sources/source-map.md §154 | appended（Clock Manual Price 新开 + Apaleo Change Prices 新开 + Protel RBD Override rate 新开；Clock how-to-set / Cloudbeds Edit Price / Protel Rooms 手改价 登记；§139 OAR manual priority + §152–§153 指针升核） |
| R06-20c | P66 / P65 / C06-18 sim 文末 | advisor-playbooks/rms-rec-override.md · cancel-reinstate-old-rate.md · cases/sim-2026-fixed-override-misread-sat.md | last-line §154 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R06-20d | README 8.4 | README.md 8.4 | updated（下一槽 22:17 scout；提及 R06-20 + C06-18 + T06-16 skip；不规定 P88/P89） |
| R06-20e | backlog | backlog/research-backlog.md | appended |
| R06-20f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | header bump（仍 P01–P87；不新增 P88 行） |
| R06-20g | 新剧本 / 卡 / 指标 / sim / systems | — | none |

一句话：近三轮 S06-14 / T06-16 skip / C06-18 **无真矛盾**。§154 新开 Clock Manual Price + Apaleo Change Prices + Protel RBD Override rate；Diagnose 仍 **P66**（+ P65）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-06 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**C06-18 已写**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-14 scout-only；T06-16 skip；**R06-20 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## S06-22｜2026-09-06 22:17 Asia/Shanghai · Scout Mass Update / Daily Rates Replace / Refresh·Update（scout-only）

> Scout ID：**S06-22** · Hour 22 = 侦察空档  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R06-20 / C06-18 / T06-16 / S06-14 / P01–P87 / P66 / P65 正文三句**（P66 / P65 仅文末 §155 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住批量改价·Refresh SOP、默认批量条数、Daily Rates 最大天数、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Mass Update / Daily Rates Replace / Refresh·Update rates 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-06-2217.md` · `research-log/2026-09-06-2217-scout.md` · `sources/source-map.md` §155。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S06-22a | 侦察日志 | `scout/2026-09-06-2217.md` | **drafted**（scout-only） |
| S06-22b | 研究 log | `research-log/2026-09-06-2217-scout.md` | **drafted** |
| S06-22c | 源表 §155 | `sources/source-map.md` §155 | **appended**（OPERA Mass Update + Daily Rates Pricing Schedule + Rate Codes refreshed + Protel Update rates + Property Availability Non-deduct 新开；Daily Details Refresh 用途升核；Cloudbeds putRate / Apaleo get-rates / Inv+Rate / RoomKey·innRoad DNR 登记；HSMAI 404） |
| S06-22d | P66 / P65 文末 | `advisor-playbooks/rms-rec-override.md` · `cancel-reinstate-old-rate.md` | **pointer only**（三句 / 399 / 799 不改） |
| S06-22e | README 8.4 | `README.md` §8.4 | **updated**（下一槽 00:17 theory；提及 S06-22；不规定 P88/P89） |
| S06-22f | backlog | `backlog/research-backlog.md` | **appended** |
| S06-22g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S06-22 scout-only；不新增 P88 行） |
| S06-22h | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Mass Update · Daily Rates Create/Replace · Refresh Rate · Update rates · Non-deduct view **四件套均未齐**；邻 **P66 / P65 / P64 / P01/P02/P05 / P60**（Non-deduct → T-Status/P53/P24）；§155 新开批量价表/已订同步源；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R06-20 / C06-18 / P66 / P65 / P01–P87 正文三句；华住批量改价·Refresh SOP；默认批量条数；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-07 00:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**C06-18 已写**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-20 已写；S06-14 scout-only；T06-16 skip；**S06-22 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Mass Update / Refresh 误读（加强既有 P66/P65，类似 S06-14→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T07-00｜2026-09-07 00:17 Asia/Shanghai · THEORY Mass Update / Refresh deepen → **SKIP**

> Theory ID：**T07-00** · Hour 0 = 理论/指标  
> 对照：S06-22 scout-only Mass Update / Daily Rates Create·Replace / Refresh Rate / Update rates · §155  
> 全文：`research-log/2026-09-07-0017-theory-skip-mass-update-refresh.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T07-00a | 研究 log | research-log/2026-09-07-0017-theory-skip-mass-update-refresh.md | drafted（theory-skip） |
| T07-00b | P66 / P65 文末 | advisor-playbooks/rms-rec-override.md · cancel-reinstate-old-rate.md | last-line pointer only（三句 / 399 / 799 不改） |
| T07-00c | 源表 | sources/source-map.md | **无新 §**（§155 复核 only） |
| T07-00d | README 8.4 | README.md §8.4 | **updated**（下一槽 02:17 case；提及 T07-00 skip；不规定 P88/P89） |
| T07-00e | backlog | backlog/research-backlog.md | **appended** |
| T07-00f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T07-00 skip；不新增 P88 行） |
| T07-00g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Mass Update/Refresh deepen skip） |

一句话：Mass Update / Daily Rates Replace / Refresh·Update rates = **batch pricing-schedule or reservation-sync layer** ≠ 公开 BAR；P66+P65+P64+P01/P02/P05+P60 已覆盖；§155 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-07 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 本小时 skip**；C06-18 已写；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-20 已写；S06-22 scout-only；T06-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Mass Update / Refresh 误读专拍 Simulation（闸仍 P66/P65，类似 C06-18），≠ 开新剧、≠ 推翻 skip。


## C07-02｜2026-09-07 02:17 Asia/Shanghai · CASE Mass Update / Daily Rates Replace / Refresh·Update misread Simulation

> Case ID：**C07-02** · Hour 02 = 案例与剧本  
> 对照：T07-00 Mass Update/Refresh deepen **theory-skip**（00:17）· S06-22 scout-only · §155  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T07-00 / S06-22 / R06-20 / C06-18 / P01–P87 / P66 / P65 正文三句**（P66 / P65 仅文末 §156 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住批量改价·Refresh SOP、默认批量条数、Daily Rates 最大天数、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Mass Update / Daily Rates Replace / Refresh·Update rates 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-mass-update-refresh-misread-sat.md` · `research-log/2026-09-07-0217-mass-update-refresh-case.md` · `sources/source-map.md` §156。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C07-02a | Simulation 专卷 | `cases/sim-2026-mass-update-refresh-misread-sat.md` | **drafted** |
| C07-02b | 研究 log | `research-log/2026-09-07-0217-mass-update-refresh-case.md` | **drafted** |
| C07-02c | 源表 §156 | `sources/source-map.md` §156 | **appended**（CASE 指针复述 §155；无新 URL；curl 复核 200） |
| C07-02d | P66 / P65 文末 | `advisor-playbooks/rms-rec-override.md` · `cancel-reinstate-old-rate.md` | **pointer only**（三句 / 399 / 799 不改） |
| C07-02e | backlog | `backlog/research-backlog.md` | **appended** |
| C07-02f | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C07-02；不规定 P88/P89） |
| C07-02g | progress | `curriculum/progress.md` | **this block** |
| C07-02h | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C07-02 drafted；不新增 P88 行） |
| C07-02i | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T07-00 skip 不推翻） |

一句话：Mass Update / Daily Rates Replace / Refresh·Update rates ≠ 公开 BAR；Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699；§156 CASE 指针复述 §155。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P65 / P64 / P01–P87 正文三句；华住批量改价·Refresh SOP；默认批量条数；Daily Rates 最大天数；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-07 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；**P66 Rate Strategy deepen skip**；**P37/T06 OOS vs OOO deepen skip**；**P24/P33 Sell Limit deepen skip**；**P37/P13 DNM deepen skip**；**P63/P67 Queue deepen skip**；**P66/P65 Fixed/Override deepen skip**；**P66/P65 Mass Update/Refresh deepen 00:17 skip**；**C07-02 本小时已写**；C06-18 已写；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-20 已写；S06-22 scout-only；T07-00 skip；T06-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。



## R07-04｜2026-09-07 04:17 Asia/Shanghai · 来源与复盘 · Mass Update/Refresh 互补（Clock Sections Mass Update + HotelKey Bulk Update Rate + Stayntouch Rate Manager）

> Recap ID：**R07-04** · Hour 4 = 来源与复盘  
> 对照：近三轮 **S06-22 scout-only** · **T07-00 Mass Update/Refresh deepen theory-skip** · **C07-02 Mass Update/Refresh misread Simulation**。  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C07-02 / T07-00 / S06-22 / R06-20 / P01–P87 / P66 / P65 正文三句**（P66 / P65 仅文末 §157 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住批量改价·Refresh SOP、默认批量条数、Daily Rates 最大天数、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Mass Update / Sections Mass Update / Bulk Update Rate / APPLY PRICE / Refresh·Update 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-07-0417-sources-recap.md` · `sources/source-map.md` §157。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R07-04a | 研究 log | `research-log/2026-09-07-0417-sources-recap.md` | **drafted** |
| R07-04b | 源表 §157 | `sources/source-map.md` §157 | **appended**（Clock Sections Mass Update 新开 + HotelKey Bulk Update Rate 新开 + Stayntouch Rate Manager 新开；Clock Multiple Booking Edit / RoomKey Update Rate Amounts 登记；Apaleo existing-not-update 用途升核；§155–§156 指针升核） |
| R07-04c | P66 / P65 / C07-02 sim 文末 | `advisor-playbooks/rms-rec-override.md` · `cancel-reinstate-old-rate.md` · `cases/sim-2026-mass-update-refresh-misread-sat.md` | last-line §157 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R07-04d | README 8.4 | `README.md` 8.4 | **updated**（下一槽 06:17 scout；提及 R07-04 + C07-02 + T07-00 skip；不规定 P88/P89） |
| R07-04e | backlog | `backlog/research-backlog.md` | **appended** |
| R07-04f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；不新增 P88 行） |
| R07-04g | 新剧本 / 卡 / 指标 / sim / systems | — | **none** |

一句话：近三轮 S06-22 / T07-00 skip / C07-02 **无真矛盾**。§157 新开 Clock Sections Mass Update + HotelKey Bulk Update Rate + Stayntouch Rate Manager；Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。

下一槽 **2026-09-07 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**C07-02 已写**；**R07-04 本小时已写**；C06-18 已写；R06-20 已写；S06-22 scout-only；T07-00 skip；T06-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S07-06｜2026-09-07 06:17 Asia/Shanghai · Scout RTC / Day Types / Membership Auto Discount（scout-only）

> Scout ID：**S07-06** · Hour 6 = 侦察空档  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R07-04 / C07-02 / T07-00 / S06-22 / P01–P87 / P66 / P65 / P61 / P49 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住升房·Day Type·会员 TX 折扣 SOP、默认 Multiplier、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（RTC / Day Type / Membership TX discount 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-07-0617.md` · `research-log/2026-09-07-0617-scout.md` · `sources/source-map.md` §158。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S07-06a | 侦察日志 | `scout/2026-09-07-0617.md` | **drafted**（scout-only） |
| S07-06b | 研究 log | `research-log/2026-09-07-0617-scout.md` | **drafted** |
| S07-06c | 源表 §158 | `sources/source-map.md` §158 | **appended**（RTC Controls + 5.6 RTC + DAY TYPES Controls + Configuring Day Types + Property Calendar + Membership Auto Discounting 新开；TX Discount Rules / Cloudbeds·Apaleo·Mews upsell 登记；Rate Codes Day Type 指针；HSMAI 404） |
| S07-06d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 08:17 theory；提及 S07-06；不规定 P88/P89） |
| S07-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S07-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S07-06 scout-only；不新增 P88 行） |
| S07-06g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：RTC · Day Types · Membership Auto Discount **四件套均未齐**；邻 **P61 / P49 / P13/P34 / P47 / P06/P07/P01 / P64 / P66 / P60 / P23 / P87**；§158 新开 RTC/Day Type/Membership 族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R07-04 / C07-02 / P66 / P61 / P01–P87 正文三句；华住升房·Day Type SOP；默认 Multiplier；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-07 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；C07-02 已写；R07-04 已写；S06-22 scout-only；T07-00 skip；**S07-06 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 RTC / Day Type 误读（加强既有 P61/P49/P06/P66，类似 S06-22→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T07-08｜2026-09-07 08:17 Asia/Shanghai · THEORY RTC / Day Types / Membership Auto Discount deepen → **SKIP**

> Theory ID：**T07-08** · Hour 8 = 理论/指标  
> 对照：S07-06 scout-only RTC / Day Types / Membership Auto Discount · §158  
> 全文：`research-log/2026-09-07-0817-theory-skip-rtc-daytype.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T07-08a | 研究 log | research-log/2026-09-07-0817-theory-skip-rtc-daytype.md | drafted（theory-skip） |
| T07-08b | P61 / P49 / P66 文末 | advisor-playbooks/paid-upsell-upgrade.md · loyalty-award-upgrade.md · rms-rec-override.md | last-line pointer only（三句 / 399 / 799 不改） |
| T07-08c | 源表 | sources/source-map.md | **无新 §**（§158 复核 only） |
| T07-08d | README 8.4 | README.md §8.4 | **updated**（下一槽 10:17 case；提及 T07-08 skip；不规定 P88/P89） |
| T07-08e | backlog | backlog/research-backlog.md | **appended** |
| T07-08f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T07-08 skip；不新增 P88 行） |
| T07-08g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；RTC/Day Type deepen skip） |

一句话：RTC / Day Types / Membership Auto Discount = **inventory-vs-charge / calendar temporary ± / TX posting credit** ≠ 公开 BAR；P61+P49+P06/P07/P01+P64+P66+P60+P23+P87 已覆盖；§158 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P61**（+ **P49** / **P06·P66**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P61 / P49 / P66 / P06 / P01–P87 正文三句；华住 RTC·Day Type SOP；默认 Multiplier；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-07 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 本小时 skip**；C07-02 已写；R07-04 已写；S07-06 scout-only；T07-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 RTC / Day Type 误读专拍 Simulation（闸仍 P61/P49/P06/P66，类似 C07-02），≠ 开新剧、≠ 推翻 skip。


## C07-10｜2026-09-07 10:17 Asia/Shanghai · CASE RTC / Day Type / Membership Auto Discount misread Simulation

> Case ID：**C07-10** · Hour 10 = 案例与剧本  
> 对照：T07-08 RTC/Day Type deepen **theory-skip**（08:17）· S07-06 scout-only · §158  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T07-08 / S07-06 / R07-04 / C07-02 / P01–P87 / P61 / P49 / P66 / P06 正文三句**（P61 / P49 / P66 仅文末 §159 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住 RTC·升房·Day Type·会员 TX 折扣 SOP、默认 Multiplier、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（RTC / Day Type / Membership Auto Discount 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-rtc-daytype-misread-sat.md` · `research-log/2026-09-07-1017-rtc-daytype-case.md` · `sources/source-map.md` §159。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C07-10a | Simulation | `cases/sim-2026-rtc-daytype-misread-sat.md` | **drafted** |
| C07-10b | 研究 log | `research-log/2026-09-07-1017-rtc-daytype-case.md` | **drafted** |
| C07-10c | 源表 §159 | `sources/source-map.md` §159 | **appended**（CASE 指针复述 §158；无新 URL；curl 复核 200） |
| C07-10d | P61 / P49 / P66 文末 | `advisor-playbooks/paid-upsell-upgrade.md` · `loyalty-award-upgrade.md` · `rms-rec-override.md` | last-line §159 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C07-10e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C07-10；不规定 P88/P89） |
| C07-10f | backlog | `backlog/research-backlog.md` | **appended** |
| C07-10g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C07-10 drafted；不新增 P88 行） |
| C07-10h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T07-08 skip 不推翻） |

一句话：RTC / Day Type / Membership Auto Discount ≠ 公开 BAR；Diagnose 走 **P61**（+ **P49** / **P06·P66**）；Hold 779–799 首选 799；拒 399；不发明 699；§159 CASE 指针复述 §158。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P61 / P49 / P66 / P06 / P01–P87 正文三句；华住 RTC·升房·Day Type·会员 TX 折扣 SOP；默认 Multiplier；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-07 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；**P61/P49/P06/P66 RTC/Day Type deepen 08:17 skip**；**C07-10 本小时已写**；C07-02 已写；R07-04 已写；S07-06 scout-only；T07-08 skip；T07-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S14-14｜2026-09-14 14:17 Asia/Shanghai · Scout House Count / Room Assignment / No Post·Advance·Interim（scout-only）

> Scout ID：**S14-14** · Hour 14 = 侦察空档  
> 对照：上一完成 **C07-10**（2026-09-07 10:17）；Missed slots 12:17–… **不回填**。  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C07-10 / T07-08 / S07-06 / P01–P87 / P61 / P49 / P45 / P08 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 问题树新枝 / systems。未编华住早报·分房·No Post SOP、默认到店转化、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（House Count / Pre-assign / No Post·Advance·Interim 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-14-1417.md` · `research-log/2026-09-14-1417-scout.md` · `sources/source-map.md` §160。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S14-14a | 侦察日志 | `scout/2026-09-14-1417.md` | **drafted**（scout-only） |
| S14-14b | 研究 log | `research-log/2026-09-14-1417-scout.md` | **drafted** |
| S14-14c | 源表 §160 | `sources/source-map.md` §160 | **appended**（House Status + HK Forecast + Res/HK Reports + HotelKey House Inventory + Cloudbeds Dashboard + Assign/Batch Room + Payment Instructions + Charges Adj + Credit Limit Overage + Traces 新开；Locators/Authorizers/Occupancy Reports 登记；§64/§66 Negotiated/LTB 指针升核；HSMAI 404；错误 Traces URL soft FAIL） |
| S14-14d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 16:17 theory；提及 S14-14；不规定 P88/P89） |
| S14-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S14-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S14-14 scout-only；不新增 P88 行） |
| S14-14g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：House Count · Room Assignment · No Post/Advance·Interim · Negotiated LTB · Traces **四件套均未齐**；邻 **P45 / P08/P09 / P01/P02/P05 / P37 / P52–P54 / P63/P67 / P86/P87/P55 / P71/P48/P26/P23**；§160 新开 House Count / Assignment / No Post 族；S03-06 Assignment soft FAIL **升核打开**；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 C07-10 / P61 / P45 / P01–P87 正文三句；华住早报·分房 SOP；默认到店转化；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-14 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；C07-10 已写；C07-02 已写；R07-04 已写；S07-06 scout-only；**S14-14 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 House Count 误读（加强既有 P45/P08/P37，类似 S07-06→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T14-16｜2026-09-14 16:17 Asia/Shanghai · THEORY House Count / Room Assignment / No Post deepen → **SKIP**

> Theory ID：**T14-16** · Hour 16 = 理论/指标  
> 对照：S14-14 scout-only House Count / Room Assignment / No Post·Advance·Interim · §160  
> 全文：`research-log/2026-09-14-1617-theory-skip-house-count.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T14-16a | 研究 log | research-log/2026-09-14-1617-theory-skip-house-count.md | drafted（theory-skip） |
| T14-16b | P45 / P08 / P37 文末 | advisor-playbooks/daily-revenue-brief.md · slow-pickup.md · ooo-capacity.md | last-line pointer only（三句 / 399 / 799 不改） |
| T14-16c | 源表 | sources/source-map.md | **无新 §**（§160 复核 only） |
| T14-16d | README 8.4 | README.md §8.4 | **updated**（下一槽 18:17 case；提及 T14-16 skip；不规定 P88/P89） |
| T14-16e | backlog | backlog/research-backlog.md | **appended** |
| T14-16f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T14-16 skip；不新增 P88 行） |
| T14-16g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；House Count deepen skip） |

一句话：House Count / Room Assignment / No Post·Advance·Interim = **same-day operational tally / rooming / posting-settlement** ≠ Pace ≠ 公开 BAR；P45+P08/P09+P01/P02/P05+P37+P52–P54+P63/P67+P86/P87/P55+P71… 已覆盖；§160 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P45**（+ **P08/P09** / **P37**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P45 / P08 / P37 / P01–P87 正文三句；华住早报·分房·No Post SOP；默认到店转化；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-14 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；**P45/P08/P37 House Count deepen 本小时 skip**；C07-10 已写；S14-14 scout-only；T07-08 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 House Count / Assignment / No Post 误读专拍 Simulation（闸仍 P45/P08/P09/P37…），≠ 开新剧、≠ 推翻 skip。


## C14-18｜2026-09-14 18:17 Asia/Shanghai · CASE House Count / Room Assignment / No Post·Advance·Interim misread Simulation

> Case ID：**C14-18** · Hour 18 = 案例与剧本  
> 对照：T14-16 House Count/Assignment/No Post deepen **theory-skip**（16:17）· S14-14 scout-only · §160  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T14-16 / S14-14 / C07-10 / P01–P87 / P45 / P08 / P37 正文三句**（P45 / P08 / P37 仅文末 §161 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住早报·分房·No Post SOP、默认到店转化、699 Fact。未推翻 T14-16 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（House Count / Assignment / No Post·Advance·Interim 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-house-count-assignment-nopost-misread-sat.md` · `research-log/2026-09-14-1817-house-count-case.md` · `sources/source-map.md` §161。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C14-18a | Simulation | `cases/sim-2026-house-count-assignment-nopost-misread-sat.md` | **drafted** |
| C14-18b | 研究 log | `research-log/2026-09-14-1817-house-count-case.md` | **drafted** |
| C14-18c | 源表 §161 | `sources/source-map.md` §161 | **appended**（CASE 指针复述 §160；无新 URL；curl 复核 200） |
| C14-18d | P45 / P08 / P37 文末 | `advisor-playbooks/daily-revenue-brief.md` · `slow-pickup.md` · `ooo-capacity.md` | last-line §161 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C14-18e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C14-18；不规定 P88/P89） |
| C14-18f | backlog | `backlog/research-backlog.md` | **appended** |
| C14-18g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C14-18 drafted；不新增 P88 行） |
| C14-18h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T14-16 skip 不推翻） |

一句话：House Count / Room Assignment / No Post·Advance·Interim ≠ 公开 BAR；Diagnose 走 **P45**（+ **P08/P09** / **P37**…）；Hold 779–799 首选 799；拒 399；不发明 699；§161 CASE 指针复述 §160。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P45 / P08 / P37 / P01–P87 正文三句；华住早报·分房·No Post SOP；默认到店转化；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T14-16 skip。

下一槽 **2026-09-14 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen 16:17 skip**；**C14-18 本小时已写**；C07-10 已写；S14-14 scout-only；T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R14-20｜2026-09-14 20:17 Asia/Shanghai · 来源与复盘 House Count 互补源

> Recap ID：**R14-20** · Hour 20 = 来源与复盘  
> 对照：近三轮 **S14-14 scout-only** · **T14-16 House Count deepen theory-skip** · **C14-18 House Count/Assignment/No Post misread Simulation**  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **C14-18 / T14-16 / S14-14 / P01–P87 / P45 / P08 / P37 正文三句**（P45 / P08 / P37 仅文末 §162 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住早报·分房·No Post SOP、默认到店转化、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（House Count / Assignment / Restrict Post / Advance invoice 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-14-2017-sources-recap.md` · `sources/source-map.md` §162。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R14-20a | 研究 log | `research-log/2026-09-14-2017-sources-recap.md` | **drafted** |
| R14-20b | 源表 §162 | `sources/source-map.md` §162 | **appended**（Protel Active Desktop 新开 + Stayntouch Restrict Post 新开 + Apaleo Advance invoice 新开；Clock Room Allocation 用途升核；Clock Booking Search / Protel Arrivals·Room allocation / Stayntouch Arrival Report·Check-In 登记；§160–§161 指针升核；Mews soft FAIL；HSMAI 404 指针） |
| R14-20c | P45 / P08 / P37 文末 | `advisor-playbooks/daily-revenue-brief.md` · `slow-pickup.md` · `ooo-capacity.md` | last-line §162 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R14-20d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 22:17 scout；提及 R14-20；不规定 P88/P89） |
| R14-20e | backlog | `backlog/research-backlog.md` | **appended** |
| R14-20f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R14-20 drafted；不新增 P88 行） |
| R14-20g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T14-16 skip 不推翻） |

一句话：近三轮 S14-14 / T14-16 skip / C14-18 **无真矛盾**。§162 新开 Protel Active Desktop + Stayntouch Restrict Post + Apaleo Advance invoice（Clock Room Allocation 用途升核）；Diagnose 仍 **P45**（+ P08/P09 / P37）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P45 / P08 / P37 / P01–P87 正文三句；华住早报·分房·No Post SOP；默认到店转化；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T14-16 skip。

下一槽 **2026-09-14 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**C14-18 已写**；**R14-20 本小时已写**；C07-10 已写；S14-14 scout-only；T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S14-22｜2026-09-14 22:17 Asia/Shanghai · Scout Room Condition / Night Audit·EOD / Market·Source（scout-only）

> Scout ID：**S14-22** · Hour 22 = 侦察空档  
> 对照：上一完成 **R14-20**（2026-09-14 20:17）；Missed slots 12:17–… **不回填**。  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R14-20 / C14-18 / T14-16 / S14-14 / P01–P87 / P63 / P54 / P45 / P25 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住房态·夜审·市场码 SOP、默认夜审时刻、699 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump（Room Condition / Night Audit·EOD / Market·Source 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-14-2217.md` · `research-log/2026-09-14-2217-scout.md` · `sources/source-map.md` §163。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S14-22a | 侦察日志 | `scout/2026-09-14-2217.md` | **drafted**（scout-only） |
| S14-22b | 研究 log | `research-log/2026-09-14-2217-scout.md` | **drafted** |
| S14-22c | 源表 §163 | `sources/source-map.md` §163 | **appended**（Room Management + Controls Room Mgmt + Cloudbeds HK conditions + Cashier Closure + Managing EOD + Cloudbeds/HotelKey/Stayntouch Night Audit·EOD + Marketing Management + Configuring Channels + Cloudbeds Market Segments/Sources 新开；HK Board/Clock HK/§31 EOD/Package/Yieldable 指针；HotelKey Close BD/Apaleo NA/Cloudbeds Market overview 登记；HSMAI 404） |
| S14-22d | README 8.4 | `README.md` §8.4 | **updated**（下一槽 2026-09-15 00:17 theory；提及 S14-22；不规定 P88/P89） |
| S14-22e | backlog | `backlog/research-backlog.md` | **appended** |
| S14-22f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S14-22 scout-only；不新增 P88 行） |
| S14-22g | 新剧本 / 卡 / 指标 / sim | — | **none**（不开 P88） |

一句话：Room Condition · Night Audit/EOD/Cashier · Market/Source/Channel · Package/Yieldable **四件套均未齐**；邻 **P63/P67/P37 / P54/P45/P08 / P25/P20/P60/P36 / P69/P27 / P85/T-Hurdle/T-Corp**；§163 新开 Room Condition / Night Audit / Market-Source 族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R14-20 / P63 / P54 / P45 / P01–P87 正文三句；华住房态·夜审 SOP；默认夜审时刻；699 Fact；Vendor China Fact；knowledge-map 主题表体重编号；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

下一槽 **2026-09-15 00:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45** 列为「下一轮要写」— 已 drafted（House Count deepen **skip**；**C14-18 已写**；**R14-20 已写**；**S14-14 scout-only**；**S14-22 本小时 scout-only**；T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Room Condition 或 Night Audit 误读（加强既有 P63/P54/P45，类似 S14-14→skip）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T15-00｜2026-09-15 00:17 Asia/Shanghai · THEORY Room Condition / Night Audit·EOD·Cashier / Market·Source deepen → **SKIP**

> Theory ID：**T15-00** · Hour 0 = 理论/指标  
> 对照：S14-22 scout-only Room Condition / Night Audit·EOD·Cashier / Market·Source · §163  
> 全文：`research-log/2026-09-15-0017-theory-skip-room-condition-night-audit.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T15-00a | 研究 log | research-log/2026-09-15-0017-theory-skip-room-condition-night-audit.md | drafted（theory-skip） |
| T15-00b | P63 / P54 / P45 文末 | advisor-playbooks/staff-capacity-constraint.md · transient-noshow.md · daily-revenue-brief.md | last-line pointer only（三句 / 399 / 799 不改） |
| T15-00c | 源表 | sources/source-map.md | **无新 §**（§163 复核 only） |
| T15-00d | README 8.4 | README.md §8.4 | **updated**（下一槽 02:17 case；提及 T15-00 skip；不规定 P88/P89） |
| T15-00e | backlog | backlog/research-backlog.md | **appended** |
| T15-00f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T15-00 skip；不新增 P88 行） |
| T15-00g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Room Condition / Night Audit / Market-Source deepen skip） |

一句话：Room Condition = **HK cleaning-status**；Night Audit/EOD/Cashier = **business-date / posting / shift-closure**；Market/Source/Channel = **segmentation / origin label** ≠ Pace ≠ 公开 BAR；P63/P67/P37 + P54/P45/P08 + P25/P20/P60/P36 已覆盖；§163 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P54 / P45 / P01–P87 正文三句；华住房态·夜审·市场码 SOP；默认夜审时刻；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-15 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；**P45/P08/P37 House Count deepen 已 skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen 本小时 skip**；C14-18 已写；R14-20 已写；S14-14 / S14-22 scout-only；T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Room Condition / Night Audit / Market-Source 误读专拍 Simulation（闸仍 P63/P54/P45…），≠ 开新剧、≠ 推翻 skip。


## C15-02｜2026-09-15 02:17 Asia/Shanghai · CASE Room Condition / Night Audit·EOD·Cashier / Market·Source misread Simulation

> Case ID：**C15-02** · Hour 02 = 案例与剧本  
> 对照：T15-00 Room Condition/Night Audit/Market-Source deepen **theory-skip**（00:17）· S14-22 scout-only · §163  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T15-00 / S14-22 / C14-18 / P01–P87 / P63 / P54 / P45 / P25 正文三句**（P63 / P54 / P45 / P25 仅文末 §164 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住房态·夜审·市场码 SOP、默认夜审时刻、699 Fact。未推翻 T15-00 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Room Condition / Night Audit·EOD·Cashier / Market·Source 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-room-condition-night-audit-market-misread-sat.md` · `research-log/2026-09-15-0217-room-condition-night-audit-case.md` · `sources/source-map.md` §164。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C15-02a | Simulation | `cases/sim-2026-room-condition-night-audit-market-misread-sat.md` | **drafted** |
| C15-02b | 研究 log | `research-log/2026-09-15-0217-room-condition-night-audit-case.md` | **drafted** |
| C15-02c | 源表 §164 | `sources/source-map.md` §164 | **appended**（CASE 指针复述 §163；无新 URL；curl 复核 200） |
| C15-02d | P63 / P54 / P45 / P25 文末 | `advisor-playbooks/staff-capacity-constraint.md` · `transient-noshow.md` · `daily-revenue-brief.md` · `direct-vs-ota-mix.md` | last-line §164 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C15-02e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C15-02；不规定 P88/P89） |
| C15-02f | backlog | `backlog/research-backlog.md` | **appended** |
| C15-02g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C15-02 drafted；不新增 P88 行） |
| C15-02h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T15-00 skip 不推翻） |

一句话：Room Condition / Night Audit·EOD·Cashier / Market·Source ≠ 公开 BAR；Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699；§164 CASE 指针复述 §163。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P54 / P45 / P25 / P01–P87 正文三句；华住房态·夜审·市场码 SOP；默认夜审时刻；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-00 skip。

下一槽 **2026-09-15 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen 00:17 skip**；**C15-02 本小时已写**；C14-18 已写；S14-22 scout-only；T15-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R15-04｜2026-09-15 04:17 Asia/Shanghai · 来源与复盘 Room Condition / Night Audit / Market-Source 互补源

> Recap ID：**R15-04** · Hour 4 = 来源与复盘  
> 对照：近三轮 **S14-22 scout-only** · **T15-00 theory-skip** · **C15-02 Simulation** · §163–§164  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S14-22 / T15-00 / C15-02 / C14-18 / P01–P87 / P63 / P54 / P45 / P25 正文三句**（仅文末 §165 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住房态·夜审·市场码 SOP、默认夜审时刻、699 Fact。未推翻 T15-00 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Room Condition / Night Audit·EOD / Market·Source / Revenue Date / Marketing labels 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-15-0417-sources-recap.md` · `sources/source-map.md` §165。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R15-04a | 研究 log | `research-log/2026-09-15-0417-sources-recap.md` | **drafted** |
| R15-04b | 源表 §165 | `sources/source-map.md` §165 | **appended**（Clock Revenue Date Mode + Clock Marketing Sources/Channels/Segments + Stayntouch Housekeeping Reports 新开；Apaleo Market Segments / Protel EOD / Protel Market code / Stayntouch Market Segment Stats 登记；§151 HK + §163–§164 指针升核；Mews soft FAIL 指针） |
| R15-04c | P63 / P54 / P45 / P25 文末 | `advisor-playbooks/staff-capacity-constraint.md` · `transient-noshow.md` · `daily-revenue-brief.md` · `direct-vs-ota-mix.md` | last-line §165 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R15-04d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 06:17 scout；提及 R15-04；不规定 P88/P89） |
| R15-04e | backlog | `backlog/research-backlog.md` | **appended** |
| R15-04f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R15-04 drafted；不新增 P88 行） |
| R15-04g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T15-00 skip 不推翻） |
| R15-04h | systems | `systems/*.md` | **无变** |

一句话：近三轮无真矛盾；§165 新开 Clock Revenue Date Mode + Clock Marketing Sources/Channels/Segments + Stayntouch Housekeeping Reports；Diagnose 仍 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P54 / P45 / P25 / P01–P87 正文三句；华住房态·夜审·市场码 SOP；默认夜审时刻；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-00 skip。

下一槽 **2026-09-15 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**C15-02 已写**；**R15-04 本小时已写**；C14-18 已写；S14-22 scout-only；T15-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S15-06｜2026-09-15 06:17 Asia/Shanghai · SCOUT Guest History·past ADR / Rooming List / Post It·Passerby → **scout-only**

> Scout ID：**S15-06** · Hour 6 = 侦察空档  
> 对照：R15-04 sources/recap §165 · C15-02 · T15-00 skip · S14-22 · Room Condition 闭环后换新方向  
> 全文：`scout/2026-09-15-0617.md` · `research-log/2026-09-15-0617-scout.md` · `sources/source-map.md` §166

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S15-06a | Scout log | `scout/2026-09-15-0617.md` | **drafted**（scout-only） |
| S15-06b | 研究 log | `research-log/2026-09-15-0617-scout.md` | **drafted** |
| S15-06c | 源表 §166 | `sources/source-map.md` §166 | **appended**（Guest History·past ADR / Rooming List / Post It·Passerby / Task Sheet 新开；Deposit/Cancel 指针；HSMAI FAIL） |
| S15-06d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 08:17 theory；提及 S15-06；不规定 P88/P89） |
| S15-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S15-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S15-06 scout-only；不新增 P88 行） |
| S15-06g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88） |

一句话：Guest History·past ADR / Rooming List / Post It·Passerby / Task Sheet / Deposit·Cancel **四件套均未齐**；邻 **P08/P45/P01 / P52/P53/P10 / P69/P87 / P63/P67 / P86/P84/P55**；§166 新开档案住史·名单·辅项过账族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R15-04 / P01–P87 正文三句；华住住史·名单 SOP；默认历史 ADR 窗口；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；重开 Room Condition 闭环。

下一槽 **2026-09-15 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25** 列为「下一轮要写」— 已 drafted（Room Condition·Night Audit·Market-Source deepen **skip**；**C15-02 已写**；**R15-04 已写**；**S14-22 scout-only**；**S15-06 本小时 scout-only**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Guest History/past ADR 或 Rooming List 误读（加强既有 P08/P45/P01 或 P52/P53/P10）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T15-08｜2026-09-15 08:17 Asia/Shanghai · THEORY Guest History·past ADR / Rooming List / Post It deepen → **SKIP**

> Theory ID：**T15-08** · Hour 8 = 理论/指标  
> 对照：S15-06 scout-only Guest History·past ADR / Rooming List / Post It·Passerby · §166  
> 全文：`research-log/2026-09-15-0817-theory-skip-guest-history-rooming-list.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T15-08a | 研究 log | research-log/2026-09-15-0817-theory-skip-guest-history-rooming-list.md | drafted（theory-skip） |
| T15-08b | P08 / P45 / P52 文末 | advisor-playbooks/slow-pickup.md · daily-revenue-brief.md · group-cutoff-wash.md | last-line pointer only（三句 / 399 / 799 不改） |
| T15-08c | 源表 | sources/source-map.md | **无新 §**（§166 复核 only） |
| T15-08d | README 8.4 | README.md §8.4 | **updated**（下一槽 10:17 case；提及 T15-08 skip；不规定 P88/P89） |
| T15-08e | backlog | backlog/research-backlog.md | **appended** |
| T15-08f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T15-08 skip；不新增 P88 行） |
| T15-08g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Guest History/Rooming List deepen skip） |

一句话：Guest History·past ADR = **profile history / stay-stat**；Rooming List = **block name-list pickup**；Post It·Passerby = **ancillary posting** ≠ Pace ≠ 公开 BAR；P08/P45/P01 + P52/P53/P10 + P69/P87 已覆盖；§166 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P08/P45/P01**（+ **P52**/P53/P10 · **P69**/P87）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P08 / P45 / P52 / P01–P87 正文三句；华住住史·名单·过账 SOP；默认历史 ADR 窗口；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-15 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen 本小时 skip**；C15-02 已写；R15-04 已写；S14-22 / S15-06 scout-only；T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Guest History / Rooming List / Post It 误读专拍 Simulation（闸仍 P08/P45/P01 · P52/P53/P10 · P69/P87），≠ 开新剧、≠ 推翻 skip。


## C15-10｜2026-09-15 10:17 Asia/Shanghai · CASE Guest History·past ADR / Rooming List / Post It·Passerby misread Simulation

> Case ID：**C15-10** · Hour 10 = 案例与剧本  
> 对照：T15-08 Guest History/Rooming List/Post It deepen **theory-skip**（08:17）· S15-06 scout-only · §166  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T15-08 / S15-06 / C15-02 / P01–P87 / P08 / P45 / P52 正文三句**（P08 / P45 / P52 仅文末 §167 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住住史·名单·过账 SOP、默认历史 ADR 窗口、699 Fact。未推翻 T15-08 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Guest History·past ADR / Rooming List / Post It·Passerby 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md` · `research-log/2026-09-15-1017-guest-history-rooming-list-case.md` · `sources/source-map.md` §167。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C15-10a | Simulation | `cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md` | **drafted** |
| C15-10b | 研究 log | `research-log/2026-09-15-1017-guest-history-rooming-list-case.md` | **drafted** |
| C15-10c | 源表 §167 | `sources/source-map.md` §167 | **appended**（CASE 指针复述 §166；无新 URL；curl 复核 200） |
| C15-10d | P08 / P45 / P52 文末 | `advisor-playbooks/slow-pickup.md` · `daily-revenue-brief.md` · `group-cutoff-wash.md` | last-line §167 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C15-10e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C15-10；不规定 P88/P89） |
| C15-10f | backlog | `backlog/research-backlog.md` | **appended** |
| C15-10g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C15-10 drafted；不新增 P88 行） |
| C15-10h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T15-08 skip 不推翻） |

一句话：Guest History·past ADR / Rooming List / Post It·Passerby ≠ 公开 BAR；Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§167 CASE 指针复述 §166。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P08 / P45 / P52 / P01–P87 正文三句；华住住史·名单·过账 SOP；默认历史 ADR 窗口；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-08 skip。

下一槽 **2026-09-15 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen 08:17 skip**；**C15-10 本小时已写**；C15-02 已写；R15-04 已写；S14-22 / S15-06 scout-only；T15-00 / T15-08 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R15-12｜2026-09-15 12:17 Asia/Shanghai · 来源与复盘 Guest History / Rooming List / Post It 互补源

> Recap ID：**R15-12** · Hour 12 = 来源与复盘  
> 对照：近三轮 **S15-06 scout-only** · **T15-08 theory-skip** · **C15-10 Simulation** · §166–§167  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S15-06 / T15-08 / C15-10 / C15-02 / P01–P87 / P08 / P45 / P52 正文三句**（仅文末 §168 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住住史·名单·过账 SOP、默认历史 ADR 窗口、699 Fact。未推翻 T15-08 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Guest History·past ADR / Rooming List / Post It·Passerby / Stayntouch ADR stats / Groups Rooming List / Passerby invoice 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-15-1217-sources-recap.md` · `sources/source-map.md` §168。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R15-12a | 研究 log | `research-log/2026-09-15-1217-sources-recap.md` | **drafted** |
| R15-12b | 源表 §168 | `sources/source-map.md` §168 | **appended**（Stayntouch Guests + Stayntouch Groups + Protel Passerby invoice 新开；Protel Guest profile / Protel Rooming list / Stayntouch Guest Bill / Clock Charges / Clock Folio / Apaleo Group Bookings / Apaleo Folios Training 登记；§166–§167 指针升核；HSMAI FAIL 指针） |
| R15-12c | P08 / P45 / P52 文末 | `advisor-playbooks/slow-pickup.md` · `daily-revenue-brief.md` · `group-cutoff-wash.md` | last-line §168 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R15-12d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 14:17 scout；提及 R15-12；不规定 P88/P89） |
| R15-12e | backlog | `backlog/research-backlog.md` | **appended** |
| R15-12f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R15-12 drafted；不新增 P88 行） |
| R15-12g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T15-08 skip 不推翻） |
| R15-12h | systems | `systems/*.md` | **无变** |

一句话：近三轮无真矛盾；§168 新开 Stayntouch Guests + Stayntouch Groups + Protel Passerby invoice；Diagnose 仍 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P08 / P45 / P52 / P01–P87 正文三句；华住住史·名单·过账 SOP；默认历史 ADR 窗口；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-08 skip。

下一槽 **2026-09-15 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（Guest History·Rooming List·Post It deepen **skip**；**C15-10 已写**；**R15-12 本小时已写**；C15-02 / R15-04 / S15-06 / T15-08 skip；Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S15-14｜2026-09-15 14:17 Asia/Shanghai · SCOUT Room Move / Discount Reasons / Post Stay·Open Folio → **scout-only**

> Scout ID：**S15-14** · Hour 14 = 侦察空档  
> 对照：R15-12 sources/recap §168 · C15-10 · T15-08 skip · S15-06 · Guest History 闭环后换新方向  
> 全文：`scout/2026-09-15-1417.md` · `research-log/2026-09-15-1417-scout.md` · `sources/source-map.md` §169

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S15-14a | Scout log | `scout/2026-09-15-1417.md` | **drafted**（scout-only） |
| S15-14b | 研究 log | `research-log/2026-09-15-1417-scout.md` | **drafted** |
| S15-14c | 源表 §169 | `sources/source-map.md` §169 | **appended**（Room Move 族 + Discount Rate Code/Stay Details + Open Folio 新开；Discount Reasons §59 / Payment Instructions §160 / Commission §108 指针；Cloudbeds Edit 升核；Connecting/Swap/Calendar/Post Charges 登记；HSMAI FAIL） |
| S15-14d | P61 / P42 / P87 文末 | `advisor-playbooks/paid-upsell-upgrade.md` · `same-day-walk-in.md` · `service-recovery-adjustment-vs-bar.md` | last-line §169 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| S15-14e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 16:17 theory；提及 S15-14；不规定 P88/P89） |
| S15-14f | backlog | `backlog/research-backlog.md` | **appended** |
| S15-14g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S15-14 scout-only；不新增 P88 行） |
| S15-14h | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88） |

一句话：Room Move / Discount Reasons / Post Stay·Open Folio / Commission / Connecting **四件套均未齐**；邻 **P61/P49/P45 / P87/P42 / P69/P87 / P81/P20 / T-Component/P13**；§169 新开换房·折扣字段·Open Folio 族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R15-12 / P01–P87 正文三句；华住换房·折扣原因·晚账 SOP；默认折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；重开 Guest History / Component 闭环。

下一槽 **2026-09-15 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（Guest History·Rooming List·Post It deepen **skip**；**C15-10 已写**；**R15-12 已写**；**S15-14 本小时 scout-only**；Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Room Move 或 Discount Reasons 误读（加强既有 P61/P49/P45 或 P87/P42）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T15-16｜2026-09-15 16:17 Asia/Shanghai · THEORY Room Move / Discount Reasons / Post Stay·Open Folio deepen → **SKIP**

> Theory ID：**T15-16** · Hour 16 = 理论/指标  
> 对照：S15-14 scout-only Room Move / Discount Reasons / Post Stay·Open Folio · §169  
> 全文：`research-log/2026-09-15-1617-theory-skip-room-move-discount.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T15-16a | 研究 log | research-log/2026-09-15-1617-theory-skip-room-move-discount.md | drafted（theory-skip） |
| T15-16b | P61 / P87 / P42 文末 | advisor-playbooks/paid-upsell-upgrade.md · service-recovery-adjustment-vs-bar.md · same-day-walk-in.md | last-line pointer only（三句 / 399 / 799 不改） |
| T15-16c | 源表 | sources/source-map.md | **无新 §**（§169 复核 only） |
| T15-16d | README 8.4 | README.md §8.4 | **updated**（下一槽 18:17 case；提及 T15-16 skip；不规定 P88/P89） |
| T15-16e | backlog | backlog/research-backlog.md | **appended** |
| T15-16f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T15-16 skip；不新增 P88 行） |
| T15-16g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Room Move / Discount Reasons / Open Folio deepen skip） |

一句话：Room Move = **front-desk room-change / RTC ops**；Discount Reasons = **reservation discount-reason**；Post Stay·Open Folio = **post-departure posting** ≠ Pace ≠ 公开 BAR；P61/P49/P45 + P87/P42 + P69/P87 已覆盖；§169 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P61 / P87 / P42 / P01–P87 正文三句；华住换房·折扣原因·晚账 SOP；默认折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-15 18:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen skip**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen 本小时 skip**；C15-10 已写；R15-12 已写；S15-14 scout-only；T15-08 / T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Room Move / Discount Reasons / Open Folio 误读专拍 Simulation（闸仍 P61/P49/P45 · P87/P42 · P69/P87），≠ 开新剧、≠ 推翻 skip。



## C15-18｜2026-09-15 18:17 Asia/Shanghai · CASE Room Move / Discount Reasons / Post Stay·Open Folio misread Simulation

> Case ID：**C15-18** · Hour 18 = 案例与剧本  
> 对照：T15-16 Room Move/Discount Reasons/Open Folio deepen **theory-skip**（16:17）· S15-14 scout-only · §169  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T15-16 / S15-14 / C15-10 / P01–P87 / P61 / P87 / P42 正文三句**（P61 / P87 / P42 仅文末 §170 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住换房·折扣原因·晚账 SOP、默认折扣%、699 Fact。未推翻 T15-16 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Room Move / Discount Reasons / Post Stay·Open Folio 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-room-move-discount-openfolio-misread-sat.md` · `research-log/2026-09-15-1817-room-move-discount-case.md` · `sources/source-map.md` §170。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C15-18a | Simulation | `cases/sim-2026-room-move-discount-openfolio-misread-sat.md` | **drafted** |
| C15-18b | 研究 log | `research-log/2026-09-15-1817-room-move-discount-case.md` | **drafted** |
| C15-18c | 源表 §170 | `sources/source-map.md` §170 | **appended**（CASE 指针复述 §169；无新 URL；curl 复核 200） |
| C15-18d | P61 / P87 / P42 文末 | `advisor-playbooks/paid-upsell-upgrade.md` · `service-recovery-adjustment-vs-bar.md` · `same-day-walk-in.md` | last-line §170 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C15-18e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 20:17 sources/recap；提及 C15-18；不规定 P88/P89） |
| C15-18f | backlog | `backlog/research-backlog.md` | **appended** |
| C15-18g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C15-18 drafted；不新增 P88 行） |
| C15-18h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T15-16 skip 不推翻） |

一句话：Room Move / Discount Reasons / Post Stay·Open Folio ≠ 公开 BAR；Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§170 CASE 指针复述 §169。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P61 / P87 / P42 / P01–P87 正文三句；华住换房·折扣原因·晚账 SOP；默认折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-16 skip。

下一槽 **2026-09-15 20:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen skip**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen 16:17 skip**；**C15-18 本小时已写**；C15-10 / R15-12 / S15-14；T15-08 / T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R15-20｜2026-09-15 20:17 Asia/Shanghai · 来源与复盘 Room Move / Discount Reasons / Post Stay·Open Folio 互补源

> Recap ID：**R15-20** · Hour 20 = 来源与复盘  
> 对照：S15-14 scout-only · T15-16 deepen **theory-skip** · C15-18 misread Simulation · §169–§170  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S15-14 / T15-16 / C15-18 / P01–P87 / P61 / P87 / P42 正文三句**（P61 / P87 / P42 仅文末 §171 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / Simulation / 问题树新枝 / systems。未编华住换房·折扣原因·晚账 SOP、默认折扣%、699 Fact。未推翻 T15-16 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Room Move / Discount Reasons / Post Stay·Open Folio 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-15-2017-sources-recap.md` · `sources/source-map.md` §171。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R15-20a | 研究 log | `research-log/2026-09-15-2017-sources-recap.md` | **drafted** |
| R15-20b | 源表 §171 | `sources/source-map.md` §171 | **appended**（Protel How to move + Apaleo SOP Amend + Stayntouch Check Out With Open Balance 新开；Apaleo modify stay details 用途升核（§154）；Protel Move/Extend/Rooms/RBD · Apaleo Training Kit/Allowance · Stayntouch Pay By Link · Cloudbeds Adjust/Balances/Folio · Clock Close folio 登记；§169–§170 指针升核；HSMAI FAIL 指针） |
| R15-20c | P61 / P87 / P42 文末 | `advisor-playbooks/paid-upsell-upgrade.md` · `service-recovery-adjustment-vs-bar.md` · `same-day-walk-in.md` | last-line §171 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R15-20d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 22:17 scout；提及 R15-20；不规定 P88/P89） |
| R15-20e | backlog | `backlog/research-backlog.md` | **appended** |
| R15-20f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R15-20 drafted；不新增 P88 行） |
| R15-20g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T15-16 skip 不推翻） |
| R15-20h | systems | `systems/*.md` | **无变** |

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 P61 / P87 / P42 / P01–P87 正文三句；华住换房·折扣原因·晚账 SOP；默认折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T15-16 skip。

下一槽 **2026-09-15 22:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（Guest History·Rooming List·Post It deepen **skip**；**C15-10 已写**；**R15-12 已写**；**S15-14 scout-only**；**T15-16 Room Move·Discount Reasons·Open Folio deepen skip**；**C15-18 已写**；**R15-20 本小时已写**；Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S15-22｜2026-09-15 22:17 Asia/Shanghai · SCOUT Fixed Charges / Membership Enrollment·eCert / Alerts·Messages → **scout-only**

> Scout ID：**S15-22** · Hour 22 = 侦察空档  
> 对照：R15-20 sources/recap §171 · C15-18 · T15-16 skip · S15-14 · Room Move 闭环后换新方向  
> 全文：`scout/2026-09-15-2217.md` · `research-log/2026-09-15-2217-scout.md` · `sources/source-map.md` §172

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S15-22a | Scout log | `scout/2026-09-15-2217.md` | **drafted**（scout-only） |
| S15-22b | 研究 log | `research-log/2026-09-15-2217-scout.md` | **drafted** |
| S15-22c | 源表 §172 | `sources/source-map.md` §172 | **appended**（Fixed Charges / Add-Ons / Services / Enrollment / Memberships / eCert / Alerts / Guest Messages 新开；§86 指针；Controls/Handling/FAQ/Awards 登记；HSMAI FAIL；Managing Alerts soft FAIL） |
| S15-22d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 00:17 theory；提及 S15-22；不规定 P88/P89） |
| S15-22e | backlog | `backlog/research-backlog.md` | **appended** |
| S15-22f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S15-22 scout-only；不新增 P88 行） |
| S15-22g | P82 / P49 / P45 文末 | `parking-fee-vs-bar.md` · `loyalty-award-upgrade.md` · `daily-revenue-brief.md` | last-line §172 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| S15-22h | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88） |

一句话：Fixed Charges·Add-Ons·Services / Membership Enrollment·eCert / Alerts·Messages **四件套均未齐**；邻 **P82/P78/P69/P79/T-Fee / P49/P80 / P45/P87**；§172 新开固定费·入会·兑券·Alert 族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R15-20 / P01–P87 正文三句；华住固定费·入会·Alert SOP；默认固定费%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；重开 Room Move 闭环。

下一槽 **2026-09-16 00:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82** 列为「下一轮要写」— 已 drafted（Room Move·Discount Reasons·Open Folio deepen **skip**；**C15-18 已写**；**R15-20 已写**；**S15-22 本小时 scout-only**；Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Fixed Charges 或 Membership Enrollment/eCert 误读（加强既有 P82/P78/P69/P79 或 P49/P80）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T16-00｜2026-09-16 00:17 Asia/Shanghai · THEORY Fixed Charges / Membership Enrollment·eCert / Alerts·Messages deepen → **SKIP**

> Theory ID：**T16-00** · Hour 0 = 理论/指标  
> 对照：S15-22 scout-only Fixed Charges·Add-Ons·Services / Membership Enrollment·eCert / Alerts·Messages · §172  
> 全文：`research-log/2026-09-16-0017-theory-skip-fixed-charges-membership.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T16-00a | 研究 log | research-log/2026-09-16-0017-theory-skip-fixed-charges-membership.md | drafted（theory-skip） |
| T16-00b | P82 / P49 / P45 文末 | advisor-playbooks/parking-fee-vs-bar.md · loyalty-award-upgrade.md · daily-revenue-brief.md | last-line pointer only（三句 / 399 / 799 不改） |
| T16-00c | 源表 | sources/source-map.md | **无新 §**（§172 复核 only） |
| T16-00d | README 8.4 | README.md §8.4 | **updated**（下一槽 02:17 case；提及 T16-00 skip；不规定 P88/P89） |
| T16-00e | backlog | backlog/research-backlog.md | **appended** |
| T16-00f | BACKLOG 头 | advisor-playbooks/BACKLOG.md | **header bump**（仍 P01–P87；T16-00 skip；不新增 P88 行） |
| T16-00g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；Fixed Charges/Membership/Alerts deepen skip） |

一句话：Fixed Charges·Add-Ons·Services = **recurring/auto-post & ancillary sell**；Membership Enrollment·eCert = **loyalty attach/redeem**；Alerts·Messages = **ops messaging** ≠ Pace ≠ 公开 BAR；P82/P78/P69/P79/T-Fee + P49/P80 + P45/P87 已覆盖；§172 复核只加固 Watch → **theory-skip**。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P82 / P49 / P45 / P01–P87 正文三句；华住固定费·入会·兑券·Alert SOP；默认固定费%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge。

下一槽 **2026-09-16 02:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen **已 skip**；**P66 Rate Strategy deepen 已 skip**；**P37/T06 OOS vs OOO deepen 已 skip**；**P24/P33 Sell Limit deepen 已 skip**；**P37/P13 DNM deepen 已 skip**；**P63/P67 Queue deepen 已 skip**；**P66/P65 Fixed/Override deepen 已 skip**；**P66/P65 Mass Update/Refresh deepen 已 skip**；**P61/P49/P06/P66 RTC/Day Type deepen 已 skip**；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen skip**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen skip**；**P82/P49/P45 Fixed Charges·Membership·Alerts deepen 本小时 skip**；C15-18 / R15-20 / S15-22；T15-16 / T15-08 / T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Fixed Charges / Membership Enrollment·eCert / Alerts 误读专拍 Simulation（闸仍 P82/P78/P69/P79 · P49/P80 · P45/P87），≠ 开新剧、≠ 推翻 skip。


## C16-02｜2026-09-16 02:17 Asia/Shanghai · CASE Fixed Charges / Membership Enrollment·eCert / Alerts·Messages misread Simulation

> Case ID：**C16-02** · Hour 2 = 案例与剧本  
> 对照：T16-00 Fixed Charges·Membership·Alerts deepen **theory-skip** · S15-22 scout-only · §172  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T16-00 / S15-22 / C15-18 / P01–P87 / P82 / P49 / P45 正文三句**（P82 / P49 / P45 仅文末 §173 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住固定费·入会·兑券·Alert SOP、默认固定费%、699 Fact。未推翻 T16-00 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Fixed Charges / Membership Enrollment·eCert / Alerts·Messages 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md` · `research-log/2026-09-16-0217-fixed-charges-membership-case.md` · `sources/source-map.md` §173。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C16-02a | Simulation | `cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md` | **drafted** |
| C16-02b | 研究 log | `research-log/2026-09-16-0217-fixed-charges-membership-case.md` | **drafted** |
| C16-02c | 源表 §173 | `sources/source-map.md` §173 | **appended**（CASE 指针复述 §172；curl 复核 200；无新 URL） |
| C16-02d | P82 / P49 / P45 文末 | `advisor-playbooks/parking-fee-vs-bar.md` · `loyalty-award-upgrade.md` · `daily-revenue-brief.md` | last-line §173 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C16-02e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 04:17 sources/recap；提及 C16-02；不规定 P88/P89） |
| C16-02f | backlog | `backlog/research-backlog.md` | **appended** |
| C16-02g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C16-02 drafted；不新增 P88 行） |
| C16-02h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T16-00 skip 不推翻） |

一句话：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages ≠ 公开 BAR；Diagnose 走 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§173 CASE 指针复述 §172。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P82 / P49 / P45 / P01–P87 正文三句；华住固定费·入会·兑券·Alert SOP；默认固定费%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T16-00 skip。

下一槽 **2026-09-16 04:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen skip**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen skip**；**P82/P49/P45 Fixed Charges·Membership·Alerts deepen 00:17 skip**；**C16-02 本小时已写**；C15-18 / R15-20 / S15-22；T15-16 / T15-08 / T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R16-04｜2026-09-16 04:17 Asia/Shanghai · 来源与复盘 Fixed Charges / Membership Enrollment·eCert / Alerts·Messages 互补源

> Recap ID：**R16-04** · Hour 4 = 来源与复盘  
> 对照：近三轮 **S15-22 scout-only** · **T16-00 theory-skip** · **C16-02 Simulation** · §172–§173  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S15-22 / T16-00 / C16-02 / P01–P87 / P82 / P49 / P45 正文三句**（仅文末 §174 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住固定费·入会·兑券·Alert SOP、默认固定费%、699 Fact。未推翻 T16-00 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Fixed Charges / Membership Enrollment·eCert / Alerts·Messages / Protel Fixed charges / Stayntouch Loyalty / Staff Alert 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-16-0417-sources-recap.md` · `sources/source-map.md` §174。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R16-04a | 研究 log | `research-log/2026-09-16-0417-sources-recap.md` | **drafted** |
| R16-04b | 源表 §174 | `sources/source-map.md` §174 | **appended**（Protel Fixed charges + Stayntouch Hotel Loyalty Programs + Stayntouch Configure Add-Ons Staff Alert 新开；Clock Charge Templates / Stayntouch Create Add-Ons / Set Up Loyalty / Protel Edit invoices·Advanced Packages / Clock Packages 登记；§172–§173 指针升核；HSMAI FAIL 指针） |
| R16-04c | P82 / P49 / P45 文末 | `advisor-playbooks/parking-fee-vs-bar.md` · `loyalty-award-upgrade.md` · `daily-revenue-brief.md` | last-line §174 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R16-04d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 06:17 scout；提及 R16-04；不规定 P88/P89） |
| R16-04e | backlog | `backlog/research-backlog.md` | **appended** |
| R16-04f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R16-04 drafted；不新增 P88 行） |
| R16-04g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T16-00 skip 不推翻） |
| R16-04h | systems | `systems/*.md` | **无变** |

一句话：近三轮无真矛盾；§174 新开 Protel Fixed charges + Stayntouch Hotel Loyalty Programs + Stayntouch Configure Add-Ons Staff Alert；Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P82 / P49 / P45 / P01–P87 正文三句；华住固定费·入会·兑券·Alert SOP；默认固定费%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T16-00 skip。

下一槽 **2026-09-16 06:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82** 列为「下一轮要写」— 已 drafted（Fixed Charges·Membership·Alerts deepen **skip**；**C16-02 已写**；**R16-04 本小时已写**；Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S16-06｜2026-09-16 06:17 Asia/Shanghai · SCOUT Linked/Party · Copy Reservation · Rate Seasons · Preferences/VIP → **scout-only**

> Scout ID：**S16-06** · Hour 6 = 侦察空档  
> 对照：R16-04 sources/recap §174 · C16-02 · T16-00 skip · S15-22 · Fixed Charges 闭环后换新方向  
> 全文：`scout/2026-09-16-0617.md` · `research-log/2026-09-16-0617-scout.md` · `sources/source-map.md` §175

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S16-06a | Scout log | `scout/2026-09-16-0617.md` | **drafted**（scout-only） |
| S16-06b | 研究 log | `research-log/2026-09-16-0617-scout.md` | **drafted** |
| S16-06c | 源表 §175 | `sources/source-map.md` §175 | **appended**（Linked + Linked Profiles + Copy + Stayntouch Copy/Party + Rate Seasons + Preferences + VIP 新开；Rate Codes Season / Configuring Preferences 登记；Property Calendar Day Type 指针；HSMAI + Cloudbeds/Clock/Protel 猜链 FAIL；§172–§174 闭环指针） |
| S16-06d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 08:17 theory；提及 S16-06；不规定 P88/P89） |
| S16-06e | backlog | `backlog/research-backlog.md` | **appended** |
| S16-06f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S16-06 scout-only；不新增 P88 行） |
| S16-06g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88） |

一句话：Linked/Party / Copy Reservation / Rate Seasons / Preferences·VIP **四件套均未齐**；邻 **P01/P45/P10 / P65/P66/P33 / P64/T-Floor/P02 / P49/P45**；§175 新开连单·复制·季节·VIP 族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R16-04 / P01–P87 正文三句；华住连单·复制·季节·VIP SOP；默认淡季折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；重开 Fixed Charges / Day Type 闭环。

下一槽 **2026-09-16 08:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（Fixed Charges·Membership·Alerts deepen **skip**；**C16-02 已写**；**R16-04 已写**；**S16-06 本小时 scout-only**；Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Linked/Party 或 Copy Reservation 误读（加强既有 P01/P45/P10 或 P65/P66）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T16-08｜2026-09-16 08:17 Asia/Shanghai · THEORY Linked/Party · Copy Reservation deepen → **SKIP**

> Theory ID：**T16-08** · Hour 8 = 理论/指标  
> 对照：S16-06 scout-only §175 · R16-04 · C16-02 · T16-00 skip  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S16-06 / R16-04 / C16-02 / T16-00 / P01–P87 / P01 / P45 / P65 正文三句**（仅文末 §175 复核指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住连单·复制·季节·VIP SOP、默认淡季折扣%、699 Fact。未推翻 S16-06 四件套未齐。14/399/799 Simulation only；**399 = 被拒绝的 dump（Linked/Party / Copy / Rate Season / Preferences·VIP 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-16-0817-theory-skip-linked-copy.md`。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T16-08a | 研究 log | `research-log/2026-09-16-0817-theory-skip-linked-copy.md` | **drafted**（theory-skip） |
| T16-08b | 源表 | `sources/source-map.md` §175 | **复核 only**（无新 §；curl 200 size 与 §175 一致） |
| T16-08c | P01 / P45 / P65 文末 | `advisor-playbooks/high-demand-day.md` · `daily-revenue-brief.md` · `cancel-reinstate-old-rate.md` | last-line §175 复核指针 only（三句 / 399 / 799 / 不发明 699 不改） |
| T16-08d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 10:17 case；提及 T16-08 skip；不规定 P88/P89） |
| T16-08e | backlog | `backlog/research-backlog.md` | **appended** |
| T16-08f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T16-08 skip；不新增 P88 行） |
| T16-08g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88；S16-06 四件套未齐不推翻） |
| T16-08h | systems | `systems/*.md` | **无变** |

一句话：Linked/Party = multi-room association；Copy = clone/rebook ops ≠ Pace ≠ 公开 BAR；邻 **P01/P45/P10 · P65/P66/P33** 已覆盖；§175 复核只加固 Watch → **theory-skip**；**不开 P88**。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P01 / P45 / P10 / P65 / P66 / P01–P87 正文三句；华住连单·复制·季节·VIP SOP；默认淡季折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 S16-06 / T16-00 skip。

下一槽 **2026-09-16 10:17 = case hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（Fixed Charges·Membership·Alerts deepen **skip**；**C16-02 已写**；**R16-04 已写**；**S16-06 scout-only**；**P01/P45/P65 Linked/Party·Copy deepen 本小时 skip**；Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Linked/Party / Copy Reservation 误读专拍 Simulation（闸仍 P01/P45/P10 · P65/P66/P33），≠ 开新剧、≠ 推翻 skip。


## C16-10｜2026-09-16 10:17 Asia/Shanghai · CASE Linked/Party · Copy Reservation · Rate Season · Preferences/VIP misread Simulation

> Case ID：**C16-10** · Hour 10 = 案例与剧本  
> 对照：T16-08 Linked/Party·Copy deepen **theory-skip**（08:17）· S16-06 scout-only · §175  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **T16-08 / S16-06 / C16-02 / P01–P87 / P01 / P45 / P65 正文三句**（P01 / P45 / P65 仅文末 §176 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝 / systems。未编华住连单·复制·季节·VIP SOP、默认淡季折扣%、699 Fact。未推翻 T16-08 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Linked/Party / Copy / Rate Season / Preferences·VIP 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`cases/sim-2026-linked-party-copy-misread-sat.md` · `research-log/2026-09-16-1017-linked-party-copy-case.md` · `sources/source-map.md` §176。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| C16-10a | Simulation | `cases/sim-2026-linked-party-copy-misread-sat.md` | **drafted** |
| C16-10b | 研究 log | `research-log/2026-09-16-1017-linked-party-copy-case.md` | **drafted** |
| C16-10c | 源表 §176 | `sources/source-map.md` §176 | **appended**（CASE 指针复述 §175；无新 URL；curl 复核 200） |
| C16-10d | P01 / P45 / P65 文末 | `advisor-playbooks/high-demand-day.md` · `daily-revenue-brief.md` · `cancel-reinstate-old-rate.md` | last-line §176 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| C16-10e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 12:17 sources/recap；提及 C16-10；不规定 P88/P89） |
| C16-10f | backlog | `backlog/research-backlog.md` | **appended** |
| C16-10g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；C16-10 drafted；不新增 P88 行） |
| C16-10h | 新剧本 / 卡 / 指标 / 理论 | — | **none**（不开 P88；T16-08 skip 不推翻） |

一句话：Linked/Party / Copy Reservation / Rate Season / Preferences·VIP ≠ 公开 BAR；Diagnose 走 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699；§176 CASE 指针复述 §175。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P01 / P45 / P65 / P01–P87 正文三句；华住连单·复制·季节·VIP SOP；默认淡季折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T16-08 skip。

下一槽 **2026-09-16 12:17 = sources/recap**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen skip**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen skip**；**P82/P49/P45 Fixed Charges·Membership·Alerts deepen skip**；**C16-02 已写**；**R16-04 已写**；**S16-06 scout-only**；**P01/P45/P65 Linked/Party·Copy deepen 08:17 skip**；**C16-10 本小时已写**）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## R16-12｜2026-09-16 12:17 Asia/Shanghai · 来源与复盘 Linked/Party · Copy · Season · VIP 互补源

> Recap ID：**R16-12** · Hour 12 = 来源与复盘  
> 对照：S16-06 scout-only · T16-08 theory-skip · C16-10 Simulation · §175–§176  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **S16-06 / T16-08 / C16-10 / P01–P87 / P01 / P45 / P65 正文三句**（仅文末 §177 指针）。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住连单·复制·季节·VIP SOP、默认淡季折扣%、699 Fact。未推翻 T16-08 skip。14/399/799 Simulation only；**399 = 被拒绝的 dump（Linked/Party / Copy / Rate Season / Preferences·VIP / Protel Copy / Apaleo Copy·Amend / Cloudbeds Guest Status 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`research-log/2026-09-16-1217-sources-recap.md` · `sources/source-map.md` §177。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| R16-12a | 研究 log | `research-log/2026-09-16-1217-sources-recap.md` | **drafted** |
| R16-12b | 源表 §177 | `sources/source-map.md` §177 | **appended**（Protel Copy reservation + Apaleo Training Kit Reservation Management + Cloudbeds Guest Statuses 新开；Protel Group/Creating/Rooming list/Copy allotments/Rate seasons/VIP + Apaleo Modify/Fair Rates + Cloudbeds Tags/Edit/Base intervals + Clock Guest Offsets/Standard rates/Copy from边界 + Stayntouch Guests/Likes/Room Features/Rate Configuration 登记；§175 八核指针升核；HSMAI FAIL 指针） |
| R16-12c | P01 / P45 / P65 文末 | `advisor-playbooks/high-demand-day.md` · `daily-revenue-brief.md` · `cancel-reinstate-old-rate.md` | last-line §177 pointer only（三句 / 399 / 799 / 不发明 699 不改） |
| R16-12d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 14:17 scout；提及 R16-12；不规定 P88/P89） |
| R16-12e | backlog | `backlog/research-backlog.md` | **appended** |
| R16-12f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；R16-12 drafted；不新增 P88 行） |
| R16-12g | 新剧本 / 卡 / 指标 / 理论 / sim | — | **none**（不开 P88；T16-08 skip 不推翻） |
| R16-12h | systems | `systems/*.md` | **无变** |

一句话：近三轮无真矛盾；§177 新开 Protel Copy reservation + Apaleo Training Kit Reservation Management + Cloudbeds Guest Statuses；Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P01 / P45 / P65 / P01–P87 正文三句；华住连单·复制·季节·VIP SOP；默认淡季折扣%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；推翻 T16-08 skip。

下一槽 **2026-09-16 14:17 = scout hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（Fixed Charges·Membership·Alerts deepen **skip**；**C16-02 已写**；**R16-04 已写**；**S16-06 scout-only**；**T16-08 Linked/Party·Copy deepen skip**；**C16-10 已写**；**R16-12 本小时已写**；Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


## S16-14｜2026-09-16 14:17 Asia/Shanghai · SCOUT Confirmation · Profile Merge · Advance CI/Quick CO · Changes Log → **scout-only**

> Scout ID：**S16-14** · Hour 14 = 侦察空档  
> 对照：R16-12 Linked/Party 互补源 §177 · C16-10 · T16-08 skip · S16-06  
> 只追加。未改上表他人已写的 T1–T12 状态行。未重写 **R16-12 / C16-10 / T16-08 / S16-06 / P01–P87 正文三句**。未开 **P88**。未开 **P89**。未开新剧本 / 决策卡 / 轻指标 / Simulation / 理论卡 / 问题树新枝 / systems。未编华住确认函·并档·预办入住·快退房 SOP、默认确认价锁定%、699 Fact。未重开 Linked/Party 闭环。14/399/799 Simulation only；**399 = 被拒绝的 dump（Confirmation / Profile Merge / Advance CI·Quick CO / Changes Log 改尺）**；799 仅 Hypothesis/Simulation；**不发明 699**。全文：`scout/2026-09-16-1417.md` · `research-log/2026-09-16-1417-scout.md` · `sources/source-map.md` §178。

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| S16-14a | Scout log | `scout/2026-09-16-1417.md` | **drafted**（scout-only） |
| S16-14b | 研究 log | `research-log/2026-09-16-1417-scout.md` | **drafted** |
| S16-14c | 源表 §178 | `sources/source-map.md` §178 | **appended**（Confirmations + Stationery + Stayntouch Send Confirmation + Merging Profiles + Stayntouch Merge + Advance CI + Quick CO + Cloudbeds CI/CO + Changes Log + Cloudbeds Activity 新开；同族登记；§177 Guest Statuses 指针；HSMAI/Clock/Protel FAIL；Auto Merge soft FAIL） |
| S16-14d | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 16:17 theory；提及 S16-14；不规定 P88/P89） |
| S16-14e | backlog | `backlog/research-backlog.md` | **appended** |
| S16-14f | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；S16-14 scout-only；不新增 P88 行） |
| S16-14g | 新剧本 / 卡 / 指标 / sim / 理论 | — | **none**（不开 P88） |

一句话：Confirmation / Profile Merge / Advance CI·Quick CO / Changes Log **四件套均未齐**；邻 **P65/P86/P01/P45 / P08/P45/P01 / P45/P01/P46/P54/P67 / P45/P01**；§178 新开确认函·并档·预办入住·快退房·审计族；**scout-only**；**不开 P88**。

刻意不补：**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 R16-12 / P01–P87 正文三句；华住确认函·并档·预办入住·快退房 SOP；默认确认价锁定%；699 Fact；Vendor China Fact；knowledge-map；systems/*.md；optimization-advice 正文；here.now publish；git commit；claim_task / hotel-ai-knowledge；回填 missed slots；重开 Linked/Party / Guest History 闭环。

下一槽 **2026-09-16 16:17 = theory hour**。**不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（Linked/Party·Copy·Season·VIP deepen **skip**；**C16-10 已写**；**R16-12 已写**；**S16-14 本小时 scout-only**；Fixed Charges / Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。theory 可评估加深 Confirmation Letters 或 Profile Merge 误读（加强既有 P65/P86 或 P08/P45）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。


## T16-16｜2026-09-16 16:17 Asia/Shanghai · THEORY Confirmation / Profile Merge deepen → **SKIP**

> Theory ID：**T16-16** · Hour 16 = 理论/指标
> 对照：S16-14 scout-only §178 · R16-12 · C16-10 · T16-08/T16-00 skip
> 全文：`research-log/2026-09-16-1617-theory-skip-confirmation-merge.md`

| ID | 资产 | 路径 | 状态 |
| --- | --- | --- | --- |
| T16-16a | 研究 log | `research-log/2026-09-16-1617-theory-skip-confirmation-merge.md` | **drafted**（theory-skip） |
| T16-16b | P65 / P08 / P45 文末 | `advisor-playbooks/cancel-reinstate-old-rate.md` · `slow-pickup.md` · `daily-revenue-brief.md` | last-line pointer only（三句 / 399 / 799 不改） |
| T16-16c | P86 交叉指针 | `advisor-playbooks/deposit-preauth-vs-bar.md` | last-line pointer only（三句 / 399 / 799 不改） |
| T16-16d | 源表 | `sources/source-map.md` | **无新 §**（§178 复核 only） |
| T16-16e | README | `README.md` §8 头 · §8.4 | **updated**（下一槽 18:17 case；提及 T16-16 skip；不规定 P88/P89） |
| T16-16f | backlog | `backlog/research-backlog.md` | **appended** |
| T16-16g | BACKLOG 头 | `advisor-playbooks/BACKLOG.md` | **header bump**（仍 P01–P87；T16-16 skip；不新增 P88 行） |
| T16-16h | 新 playbook / card / metric / sim / theory | — | **none**（不开 P88/P89） |

一句话：Confirmation/Stationery = **guest-comms stationery layer**；Profile Merge = **profile-dedup/history-consolidate layer**；Advance CI/Quick CO = **front-desk status layer**；Changes Log/Activity = **audit-trail layer**；四者均 ≠ Pace ≠ 公开 BAR；邻 **P65/P86/P01 / P08/P45/P01 / P45/P01/P46/P54/P67 / P45/P01** 已覆盖 → **theory-skip**。Diagnose 仍 P65（+P86/P01）/ P08（+P45/P01）/ P45（+P01/P46/P54/P67）/ P45（+P01）；Hold 779–799 首选 799；拒 399；不发明 699。

刻意不补：**P88**；**P89**；新理论/剧本/决策卡/轻指标/Simulation；Pet/AAA；smoking/damage FEE；重写 P65/P86/P08/P45/P01–P87 正文三句；华住确认函·并档·预办入住·快退房 SOP；默认确认价锁定%；699 Fact；source-map §179；systems；publish；git commit。**Notify NO。**

下一槽 **2026-09-16 18:17 = case hour**。Case MAY add Confirmation / Profile Merge / Advance CI / Changes Log misread Simulation（gates still P65/P86/P01 · P08/P45/P01 · P45/P01/P46/P54/P67 · P45/P01），≠ open new playbook，≠ overturn skip；不规定 P88/P89。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
