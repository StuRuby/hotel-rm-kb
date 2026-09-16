# Playbook P31｜Crew / 航司协议

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/airline-crew.md`  
> BACKLOG：P31 Crew / 航司协议 · LOW · 先决策卡 · slug `airline-crew`  
> 状态：**drafted**（2026-08-22 18:17 CST）  
> 配套卡：`recommendations/counter-or-reject-extra-crew.md`  
> 理论：`group/group-displacement.md` · `segmentation/segment-mix.md` §1 Contract · `theory/profit-contribution.md`（T19）· `theory/revenue-strategy.md`（T20）· `overbooking/overbooking-framework.md`  
> 交叉：P10 额外块走置换（本剧**不是** P10 重写）· P26 协议漏出 ≠ 机组 allotment · P24 机组 wash 后不要为幽灵房 Walk 散客 · P28 天气 ≠ 机组，但取消史差时同一把「OTB 当 Soft」· P03/P04 高峰留尾 · P12 弱周中  
> 问题树：O12 · §40  
> 仿真：`cases/sim-2026-airline-crew-saturday.md`（**Simulation**）  
> 证据等级：STR Contract 定义 **S**；IDeaS Wash / Cutoff / Displacement / Semi-Yieldable **A Vendor**；eCornell Displacement 课名 **A**（本轮课页 timeout）；动作 **Hypothesis B**；航司协议价表 / allotment 间夜 / 取消率 / 份额保证金 / IATA 机组名单 / 华住锦江 SOP **NV**  
> Last Verified：2026-08-22 18:17 CST  
> 知识类型：Fact（STR 口径）+ Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议销售回复口径与库存围栏，不操作 PMS 团块 / RMS / 航司合同系统，不自动调价。  
> 禁止：编造东航/南航/国航价表、IATA 机组酒店名单、取消率、份额保证金；把 extra 20 间当已签 Contract；一律关死航司账号；把 BAR dump 到机组价；一夜 −15%；发明品牌底 699；无取消史给精确超售间夜。

---

## 0. 一句话

额外机组房挤满房周六，默认 **Counter 或 Reject**，不是按合同机组价悄悄接。  
合同里的 **allotment** 先问围栏和 wash，**不要一律关死航司账号**。  
机组很爽约就把那块 OTB 当 **Soft**：禁止涨进取消潮，也禁止按硬房超售。

完成定义（BACKLOG）：能分清已签 allotment vs 一场额外 20 间；机场店 vs 城市店；输出该 Stay Date 的 Accept / Reject / Counter（价或房量区间）；缺 LRA 仍给条件句，不杀户。

顾问必须能直接说的三句：

```
1. 额外机组房挤满房周六，默认 Counter 或 Reject，不是按 380 悄悄接。
2. 合同里的 allotment 先问围栏和 wash，不要一律关死航司账号。
3. 机组很爽约就把那块 OTB 当 Soft，禁止涨进取消潮，也禁止按硬房超售。
```

---

## 1. 信号（何时进本剧本）

进入：用户在问**航司 / 机组**占房，并且牵涉接不接、关不关周末、OTB 要不要当硬需求。

| # | 信号 |
| --- | --- |
| C1 | 「航司说再加 20 间机组房，周六 BAR 已紧，接不接？」 |
| C2 | 「机组价 380 远低于 BAR 899，应不应该黑出周末？」 |
| C3 | 「机组很爽约，OTB 要当 Soft 吗？」 |
| C4 | 机场店把机组当底仓 vs 城市店周六被机组挤散客 |

**不是本剧本：**

- 无航司、普通会议团 / 旅游团 → **P10**。额外机组块**调用** P10 置换式，本剧不加宴会/餐贡献翻盘。  
- 公司协议散客周六 480、码上 OTA → **P26**。协议漏出 ≠ 机组 allotment。  
- 婚宴占房 → **P30**。  
- 今晚物理赶客 → **P24**（本剧只答：机组 wash 时不要为幽灵房赶散客）。  
- 台风/航班大面积取消、无机组合同问题 → **P28**（机制同类 Soft OTB，病因不同）。  
- 只问涨多少 BAR、无机组询价 → Increase BAR。

P31 相对 P10 多出来的：已签 allotment vs 一场 extra；机场店 vs 城市店；机组 wash / 当日取消 → Soft OTB；高峰默认闸 extra 而不是杀账号。

---

## 2. 输入（缺合同不停，但不编条款）

```
必须：
1) Stay Date（哪一晚）+ DTA + Pace / Pickup / Remaining
2) 公开 BAR（将被挤的那一层）
3) 机组合同价（用户给的数；本库不编航司价表）
4) 已签 allotment 间数（已在书上 / 保证块）vs 这场 extra 间数
5) 店型：机场店（机组是主业）还是城市店（机组挤周末休闲）
6) 合同：有 / 无 / Unknown。——有则抄：保证付款还是 on-request、LRA/NLRA、blackout、cutoff、取消窗、是否只保证工作日

应用：
7) 历史 wash / 当日取消 / No-show（本店该航司，有则用；无则 Unknown，不编行业%）
8) extra 要的肩日（周五/周日/周中）各几间
9) 是否同一间夜还可转售（机组日用后再卖夜房）——有则声明，无则当一夜一卖

Recommended：
10) 变动成本 / 净价（T19；没有不编，不能说总比空着强）
11) 品牌底价（用户声明才用；没说不发明 699）
```

**STR 口径（Fact，问用户合同再套）：**

| | STR **Contract** | 本剧 extra 20 间 |
| --- | --- | --- |
| 条件 | 稳定块、>30 天、**无论用不用都保证付款**（例：驻场机组） | 一场周六加房，通常**不是** Contract |
| 报送 | Contract | 更像 Group 块或 on-request Transient；**问用户怎么报** |
| 顾问动作 | 已签块：履约 + 围栏 + wash | 按日置换 → Accept / Reject / Counter |

无保证付款的 allotment **不要**报 Contract（`segment-mix.md` §1）。本库不编「份额保证金」条款。

缺合同 **不停**：用条件句。Unknown LRA → 高峰 extra 按 **NLRA Hypothesis**（可拒/可 Counter），已签 allotment **先留**；写「若用户补出 LRA 且该日未 blackout，最后一间也要按合同价开——那是履约，不是 dump」。

---

## 3. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 只有两个 ADR，没有 Stay Date / 没分 allotment vs extra | 先要日期和两列房量；同时用条件句 |
| X2 | 「满」只是渠道配额 | 不是置换，先开库存 |
| X3 | 把 extra 20 间写成已签 Contract / 保证付款 | 先问合同。一场加房默认 **on-request** |
| X4 | 高峰夜已是 P03/P04 / Ahead+Fast，散客能卖满 | extra **默认 Counter 或 Reject**。禁止按机组价悄悄接 |
| X5 | 把 BAR dump 到机组价「为了公平」 | **拒绝**。机组是围栏层，不是新地板（T19/T20/P16） |
| X6 | 一律关死航司账号 | 停。先分已签块 vs extra；弱日可能是底仓 |
| X7 | 机组 OTB 当硬需求、按硬房超售或涨进取消潮 | Soft。走 P14/P28 闸，不编取消% |
| X8 | Expected Transient 用 Constrained 满房=需求 | 低估置换 |
| X9 | 为幽灵机组房 Walk 已确认散客 | **禁止**。P24：先停接；机组 wash 释放后再售 |
| X10 | 用户没声明品牌底，顾问发明 699 | **禁止**（T20） |

排除顺序：X1 日期与两列房量 → X3 合同性质 → X4 高峰能否卖满 → 再谈弱日增量。

---

## 4. 诊断：两列房、两种店、一块 Soft

```
Naive（禁止）     航司是大客户 → 周六再加 20 间按 380 接；或机组价低 → 关死账号
P10-only          extra 块按日 Displaced → Counter/Reject；但分不清已签块 vs extra
P31               已签 allotment ≠ 一场 extra
                  机场店 ≠ 城市店
                  爽约史 → 该块 OTB = Soft，不涨、不按硬房超
```

### 4.1 已签 allotment vs extra

| 列 | 含义 | 默认 |
| --- | --- | --- |
| **已签 allotment** | 合同块、已在书上或保证到 cutoff | **先留**。问 LRA / blackout / wash / cutoff。Unknown LRA → 不杀账号；高峰可 **close extra / 不再加**，不是暗杀航司 |
| **extra / ad-hoc** | 「再加 20 间」、on-request、超块 | **按日置换**。高峰周六默认 Counter 或 Reject。弱周中净贡献>0 且 Displaced≈0 可 Accept |

HelloShift 词条（**B/C 机制**，2026-08-22 打开）：allotment 含航司机组合同；cutoff 后未订出的释放回散客库存；忙日要做 displacement。**不当**本店 20 间公式。  
IDeaS（**A Vendor**）：Cutoff Date = 关块并释放未售；Wash = 块与预期实住之差；Displacement Analysis = 团值 vs 被挤散客。  
IDeaS Semi-Yieldable ≈ last room available accounts：LRA 账号在还有可售时不能只靠库存关掉——**问用户合同**，不要假装每家航司都是 LRA。

### 4.2 机场店 vs 城市店

| 店型 | 机组角色 | 高峰周六 extra |
| --- | --- | --- |
| **机场店** | 机组常是底仓；STR 例：机组日用后再卖可 >100% OCC（报送口径 **S**，不是本店 OCC 目标） | 仍要按日算。机场店周末若 Pace Ahead（滞留/休闲溢入）→ extra **同样** Counter/Reject。弱日 extra 更可能是增量 |
| **城市店** | 机组挤周末休闲高峰 = 漏到错误 DOW | extra **默认闸**。已签块问周末是否在合同内；不在 → 该日 close extra + 可 blackout 超出部分 |

View from the Wing 2025-10（**C** 媒体/工会转述）：部分酒店不再抢机组，因为折让 + 非标入住，不如卖散客。只支持「城市高峰 extra 不该免费让路」，**不是**中国店 SOP，不点名当成本店事实。

### 4.3 Wash / Soft OTB（天气 ≠ 机组，闸相同）

IDeaS Wash / Group Wash（**A Vendor**）：块 − 预期实住。机组同一机制：航班变动、当日取消、No-show。  
Routespring 2026-03（**C Vendor**，航司侧采购文）：机组订房常要求极短取消窗；文内 15–20% / 2–4h / 30–50% off BAR / 托 AHLA 的 85–95% 块入住 **均未在 AHLA 公开页复核 → 不进本库数字，标 NV/D**。顾问只用方向：机组**可以**很晚变。

| 机组 OTB | 动作 |
| --- | --- |
| 取消史稳定、保证付款 Contract | 可当较硬底仓；超售仍要本店史，无史不给间夜 |
| 当日取消 / 爽约高 / on-request | **该块 Soft**。禁止拿含机组的总 OTB% 涨 BAR。禁止按硬房超售。机组 wash 释放 → 再开零售，不自动 −15% |
| 取消潮进行中 | 同 P28 闸：停涨、停加超。病因写「机组/航班变动」，不要写成台风 |

P24：若机组很可能 wash，**不要**为了护一间幽灵机组房去 Walk 已确认散客。先停接当晚到达；释放后再售。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 拆两列：已签 allotment（几间、是否已在书、保证付款？）vs extra（几间、哪几晚、价）。
2. 店型：机场底仓 vs 城市周末。禁止「有航司」单独当 Compression Fact。
3. 高峰判定：该夜 Pace Ahead / Fast / Sellout？城市周六尤其要旁证。
4. 合同：LRA 或 NLRA？blackout？cutoff？取消窗？周末包不包括？没有 → Unknown，不编价表。
5. 按日置换 extra（P10 式）：Displaced_t = max(0, ET_t + Extra_t − Remaining_t)。已签块算占用，不把 extra 藏进已签。
6. 高峰夜单独 NetDelta。380 vs 899 不够。弱日 Displaced≈0 且贡献>0 才谈 Accept extra。
7. Soft：该航司取消/wash 史差 → 机组 OTB 当 Soft；禁止涨进取消潮；禁止按硬房超售；无史不给超售间夜。
8. 闸：高峰 extra 默认 Counter 或 Reject。已签 allotment 先围栏（close extra / 问 blackout），不杀账号。不要 dump BAR。
9. Counter 结构：提价 / 缩 extra 间数 / 改肩日或周中 / 维持已签块 / 不关散客。
10. 输出 Accept/Reject/Counter + 价或房量区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

---

## 6. 动作（强制按日 + 两列分写）

```text
Airline / 合同:     __（用户名；本库不编三字航司价表）
Allotment on books: __ 间 × 合同价（KEEP / 问 LRA / wash）
Extra request:      五 __；六 __；日 __；周中 __
Contract:           保证付款 Contract / on-request / LRA / NLRA / Unknown
Hotel type:         机场店 | 城市店
Sat transient:      BAR __  Pace __  Remaining __  ET __
Crew OTB:           Hard | Soft（有爽约史 → Soft）
Decision extra:     Accept | Reject | Counter（写到夜）
Decision allotment: KEEP / close extra only / 该日 blackout 超出部分
  （Unknown LRA → 不关死账号）
Counter:
  价:   高峰 extra __–__ 首选 __；肩日/周中可维持合同价
  房量: 高峰 extra 最多 __ 间（≤ 剩余 − 尾部 20–30% Hypothesis）
散客:                 保持可订。禁止为锁机组关零售
Public BAR:           不降到机组价。Ahead 走幅度卡；价已最高只关不涨
Overbook:             机组 Soft → 不停用硬房逻辑加超；无史不给间夜
Do-not-do:
  - 按合同机组价悄悄接高峰 extra
  - 关死航司账号
  - BAR → 机组价 / 一夜 −15%
  - 发明 699 品牌底
  - 把 extra 报成 STR Contract
  - 为幽灵机组房 Walk 散客
```

| extra 客房-only（该夜） | 店型 / Pace | 机组 OTB | 输出 |
| --- | --- | --- | --- |
| Displaced≈0 且净贡献>0（有成本才算；没成本不说总比空着强） | 弱周中 / 机场底仓日 | 任意 | **Accept** extra；写 cutoff；已签块 KEEP |
| 偏负 | 城市周六 Peak / Ahead / Fast / Sellout | 任意 | **Counter 或 Reject extra**。已签 allotment 先留。不要悄悄接 |
| 偏负 | 机场店但该夜也 Ahead | 任意 | 同样 Counter/Reject extra。机场身份不是许可证 |
| 任意 | 任意 | Soft / 当日取消潮 | 停涨；停按硬房超售；extra 更应拒或缩到可洗出的量 |
| 销售要把 BAR 降到机组价 | 高峰 | — | **拒绝 dump** |
| 销售要关死航司 | — | — | **拒绝杀户**。关的是高峰 extra |

保本 extra 价（Hypothesis，与置换卡 §5.3 同一尺）：

```
高峰夜保本 ≈ (Displaced_peak × TransientNetADR) / ExtraRooms_peak
报价首选 = 保本 与「不低于公开 BAR 的 70–85%」之较高者（品牌红线优先；无地板不发明 699）
禁止：把公开 BAR 一夜砍到机组合同价（相对 BAR 远超 −15%）
```

肩日 / 弱周中：Displaced=0 则可接合同机组价 extra；不要因为周六要 Counter 就把周二一起拒。

价已最高：公开只关不涨。接低价 extra ≠ 涨价，等于再开一层更低库存 → 先限额/Counter。

---

## 7. Trigger

```
用户补出 LRA 且该日未 blackout
  → 已签块 / 最后一间按合同开（履约）；extra 仍单独算，LRA 不是无限加 20 间
用户补出周末除外 / 已列 blackout / NLRA
  → 高峰 extra CLOSE；账号留；周中不变
用户补 ET，高峰 Displaced = 0
  → extra 可改 Accept（仍要 cutoff / 取消窗）
高峰 24h 散客 Pickup 已快
  → 停加 extra；维持 Counter
航司坚持 +20@合同价 + 要把散客关了
  → Reject extra；已签块可留；不关散客
机组 24h 取消 ≥ 新订 / 明显 wash
  → 该块 Soft；停涨；停加超；释放后开零售，禁止一夜 −15% 填坑
肩日 ET 上修到将满
  → 肩日 extra 也改 Counter
```

---

## 8. 如果只能再补 3 个

1. **合同扫描件：保证付款还是 on-request、LRA/NLRA、blackout、cutoff、已签 allotment 间数**  
2. **这场 extra 的按夜间数**（与已签块分开）+ 该夜 Remaining / Expected Transient  
3. **该航司本店 wash / 当日取消史**（有则 Soft 闸；无则 Unknown，不报行业%）

缺 1：高峰 extra 按 NLRA Hypothesis Counter/Reject；已签块仍不杀户。  
缺 2：仍出 Counter 条件句（IF 最终散客 ≥ X THEN extra ≤ __ 或价 ≥ __）。  
缺 3：禁止精确超售间夜；机组 OTB 最多当「可能 Soft」。

---

## 9. Confidence / 边界

方向（高峰 extra 不悄悄接、不杀户、爽约当 Soft）：有日期+两列房量+BAR+OTB → **Medium**。  
ET / Wash% / 保本点价 → **Low Hypothesis**。  
STR Contract 定义 → **S**；本店那份合同是不是 Contract → 问用户。  
东航/南航/国航价表、IATA 名单、取消率、份额保证金、华住/锦江机组 SOP、AHLA 块入住% → **NV**，不编。  
TRevPAR / GOPPAR / 预算差 **不**改今晚是否接 extra。T19：没变动成本不能说 380 总比空着强；高峰机会成本是 BAR 层不是空房。T20：有声明底先围栏不砸穿；无地板不发明 699。

MinLOS=2 只盖已证实 Peak；机组 extra 不是自动给整周加 MinLOS。  
P02 围栏 −3–5% 仍可高于声明底；**禁止一夜 −15%**。

仿真：`cases/sim-2026-airline-crew-saturday.md`（**Simulation**，不是真店）。

---

## 10. 证据（2026-08-22 打开）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Contract = >30 天稳定块、约定合同价、**无论用不用保证付款**；例：航司机组、长住 | S | **Known（口径）** | https://www.costar.com/products/str-benchmark/resources/glossary 2026-08-22 |
| Contract 收入例：驻场机组、长期培训；无保证付款不要报 Contract | S | **Known（报送）** | STR Historical Benchmarking Data Reporting Guidelines 打开 |
| 机组 7:00–17:00 日用应报 Contract 不是 Day Use；同日再售可能 OCC>100% | S | **Known（报送例）** | 同上。**不是**本店超售许可证 |
| Wash = 块 − 预期实住；Group Wash；Cutoff Date 释放未售 | A Vendor | **Known（词）** | https://ideas.com/tools-resources/hotel-glossary-terms/ |
| Displacement Analysis = 团总价值 vs 被挤散客 | A Vendor | **Known（词）** | 同上 |
| Semi-Yieldable ≈ last room available accounts | A Vendor | **Known（词）** | 同上。本店航司是否 LRA = 问合同 |
| 团询要估计 displacement / materialization | A 课名 | 课页本轮 **timeout** | eCornell Displacement and Negotiated Pricing；课名先前已核 |
| allotment 可用于航司机组合同；cutoff；displacement | B/C | 机制 | https://www.helloshift.com/hotel-term/allotment 打开。attrition 10–20% **不**当机组 Fact |
| 部分酒店不再抢机组（折让+非标入住 vs 散客） | C | 现象线索 | https://viewfromthewing.com/hotels-once-courted-airline-crews-now-united-flight-attendants-on-layover-arent-welcome-union-warns/ 2025-10。不当中国 SOP |
| 航司侧：要 LRA、短取消、合同价低于 BAR | C Vendor | 方向可讨论 | https://routespring.com/airline-crew-hotel-booking-best-practices 2026-03-10。30–50% / 2–4h / 15–20% / AHLA 85–95% **未独立核到 → 不采用数字** |
| 东航/南航/国航协议价、IATA 机组名单、取消率、份额保证金、华住/锦江机组 SOP | — | **NV** | 禁止编造 |

Failed / 未打开（记搜索词，不编页）：

```
AHLA airline crew contracted room block occupancy 85-95 official
Cornell hotel airline crew allotment revenue management
HSMAI crew rooms displacement contracted occupancy
IATA crew hotel list official
华住 锦江 机组 协议 SOP 官方
dmcquote last room availability（本轮 timeout）
HotelNewsNow airline crew contracted rates
```

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 18:17 CST | drafted。BACKLOG P31。allotment vs extra；机场 vs 城市；Soft OTB；高峰 extra 默认 Counter/Reject；不杀户；不 dump BAR。不编航司价表/取消率。 |

---

## 12. 交叉（2026-08-22 20:17，不改机组诊断枝）

KEEP 已签 allotment ≠ P26 高峰 **blackout** 漏出协议码。KEEP = 履约已在书的合同块；blackout = 关漏出的资格码/OTA 码，账号留下。不是同一杠杆。

---

## 13. 交叉（2026-08-23 18:17，不改机组诊断枝）

长包 30 夜走 **P41** `long-stay-monthly.md`。**KEEP 已签 allotment ≠ KEEP 一笔把每个周六 dump 到合同价的 30 夜。持续合同 ≠ 一场团 ≠ 机组 extra。**

---

## 14. 一行（2026-08-25 00:17，不改机组诊断枝）

机组合同 ≠ 政务/差旅协议（**T-Gov**）。crew ≠ 政务。本剧仍管 allotment / extra。

---

## 15. 一行（2026-08-25 02:17，不改机组诊断枝）

机组合同 ≠ 政务差旅协议（**P48** `government-negotiated-rate.md`）。crew ≠ 政务。本剧仍管 allotment / extra。


---

## 16. 一行（2026-08-25 18:17，不改机组诊断枝）

机组 allotment ≠ 一场团 cutoff / wash（**P52** `group-cutoff-wash.md`）。crew ≠ 团块没 pickup。本剧仍管 allotment / extra。
