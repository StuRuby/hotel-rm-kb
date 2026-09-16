# Playbook P26｜Corporate Rate Leakage

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/corporate-leakage.md`  
> BACKLOG：P26 Corporate Rate Leakage · LOW · 先诊断枝 · slug `corporate-leakage`  
> 状态：**drafted**（2026-08-22 06:17 CST）  
> 配套卡：`recommendations/blackout-or-close-leaking-corp.md`  
> 理论：`segmentation/segment-mix.md` §2.3 / B7 · `channel/net-contribution.md` · `pricing/how-much-to-move.md`（幅度数字不改）  
> 交叉：P23 会员是**另一道**围栏，禁止三层叠砍；P25 高峰关深折 OTA 不关直销——协议挂在 OTA 是漏出不是「直销」；P10/P30 置换：协议是**持续合同**不是一场宴会  
> 问题树：§12 · B7 · 本轮 §35  
> 仿真：`cases/sim-2026-corp-rate-weekend-leak.md`（**Simulation**）  
> 证据等级：A Vendor（IDeaS LRA/blackout 机制；Marriott 帮页**仅万豪**）；动作 **Hypothesis**；协议折扣% / 资格 SOP = **非 Fact**  
> Last Verified：2026-08-22  
> 知识类型：Best Practice + Hypothesis  
> Advisor-First：只建议关码 / blackout / 核验口径，不操作 PMS 协议码、不代改 CRS。  
> 禁止：没合同文件编「必须开」或「必须便宜 30%」；一律关死账号；把协议当直销保护而留在 OTA；会员 −5% + 协议再 −5% + OTA 深折叠三刀；一夜 −15%；价已最高还涨 BAR。

---

## 0. 一句话

协议价出现在高峰散客日：**先分是合同范围还是漏出**，不要一律关死账号。  
高峰周六默认 **blackout** 或把协议从 **OTA 拿掉**；弱市工作日可以留。  
没合同文件，不要编「协议必须开」或「必须便宜 30%」。

完成定义（BACKLOG）：能区分真协议需求 vs 零售客用协议码 / 协议挂上 OTA / 周末高峰不在合同里；能输出该 Stay Date 关谁、留谁、要不要核验，而不是杀户。

顾问必须能直接说的三句：

```
1. 协议价出现在高峰散客日，先分是合同范围还是漏出，不要一律关死账号。
2. 高峰周六默认 blackout 或把协议从 OTA 拿掉；弱市工作日可以留。
3. 没合同文件不要编「协议必须开」或「必须便宜 30%」。
```

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| L1 | 「协议客人在周六用 480 订了散客高峰，要不要关协议」 |
| L2 | 协议价出现在 OTA / 公开可搜，或码在闲鱼/代订流传 |
| L3 | 周末 / 事件日协议间夜异常高，周中画像却像休闲名/私人邮箱 |
| L4 | 销售要「这个账号全年必须开、必须便宜一截」，但拿不出合同 LRA/blackout |

**不是本剧本：**

- 只问涨多少 BAR → Increase BAR + `how-much-to-move.md`。  
- 会员跟不跟 → **P23**。  
- OTA 占比升、要关 OTA / 跟最低 → **P25**（若协议挂在 OTA，先当漏出，再谈 mix）。  
- 一团询价 / 婚宴占房 → **P10 / P30**。协议散订不是团块。  
- 机组 / 长住保底 → **P31** `airline-crew.md`。**协议漏出 ≠ 机组 allotment。** STR Contract（>30 天保证付款）先问用户合同，不把协议散客写成 Contract。  
- 盲盒 / 批发净价上 OTA → **P27 未写**；先当低价产品，高峰走 P03 关低价。

---

## 2. 输入（缺合同不停，但不编条款）

```
必须：
1) Stay Date + DTA + Pace / Pickup（该日 Peak / Ahead / 弱日？）
2) 公开 BAR（直销 + OTA BAR 层）
3) 该账号协议价（或「用户说 480」）
4) 该日协议间夜 + 从哪个渠道订的（直销/GDS/TMC/OTA/前台）
5) 合同：有 / 无 / Unknown。——有则抄 LRA 或 NLRA、blackout、适用 DOW、资格句

应用：
6) 姓名/邮箱/公司域是否像签约户（用户能给的程度；不要顾问去查人）
7) 周中 vs 周末该账号历史用量（有则用，无则声明）
8) 会员价、OTA 深折（防三层叠砍）

Recommended：
9) 竞对可订价（决定公开层涨不涨，不决定协议杀不杀）
10) 品牌规则（万豪 QRV / 集团 LRA 义务）。没有 = 酒店自有围栏
```

**独立店默认：** 开口问「有没有纸面/邮件合同：LRA 还是 NLRA、周末包不包括、blackout 哪几天、资格怎么核」。用户说没有、独立店、或 Unknown → **当作酒店自有围栏**。禁止把万豪 QRV、博客 10–30%、胡质健「八折」写成该店义务。

缺合同 **不停**：用条件句。Unknown LRA → 高峰按 NLRA **Hypothesis** 处理（可 blackout），并写「若用户补出 LRA，该日必须开协议、改走公开 BAR 或 Counter 合同」。

---

## 3. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 用户已给合同：**LRA**、该日未列 blackout | **该日必须开协议**（IDeaS：LRA 不能用库存关掉）。顾问只修漏出（OTA/假资格），不关真员工。公开层：价已最高只关不涨 |
| X2 | 用户已给合同：**NLRA / 已列 blackout / 周末不适用** | 高峰关协议 = **履约**，不是杀户。不要再谈「得罪客户所以必须开」 |
| X3 | 直销没开 / BAR 倒挂，协议只是看起来「便宜」 | 先修公开层（P25 X1/X2）。不是先关协议 |
| X4 | 弱市工作日、Pace 不 Ahead、协议净>0 或结构上在填空房 | **留账号**。禁止用周六高峰当理由关周二 |
| X5 | 「OTA 上的协议」其实是公开深折/神券，不是协议码 | 走 P18/P25 关深折。不要当成协议户 |
| X6 | 价已最高（公开 BAR ≥ 全部可订竞对） | 公开 **只关不涨**。协议：高峰仍可 blackout / 下 OTA |
| X7 | 销售要把 BAR 降到协议 480 去「公平」 | **拒绝 dump**。协议是围栏，不是新地板 |
| X8 | 已叠会员深折 + 协议 + OTA 活动 | 先停叠砍。只动漏出的那一层 |
| X9 | 一团 ≥10 间打着协议码进来 | 转 **P10** 置换，不当散客协议 |

排除顺序：X1/X2 合同条款 → X3 公开层故障 → X4 弱日真需求 → 再谈漏出三枝。

---

## 4. 诊断枝（先诊断，禁止「适当关一点协议」）

```
协议出现在某 Stay Date / 某渠道
│
├─ 合同怎么写？
│     LRA 且未 blackout → 真员工必须可订；只打假资格和 OTA 挂出
│     NLRA / blackout / 周末除外 → 高峰关 = 履约
│     Unknown → Hypothesis：高峰当 NLRA；弱市工作日留；标注若补出 LRA 则撤回高峰关
│
├─ 是真协议需求还是漏出？（可同时多枝）
│     (a) 零售客用协议码：周末名、私人邮箱、无公司域、与签约户无关
│           → 漏出。收核验；已订未到：入住改 BAR 或取消协议价（用户政策；万豪帮页仅万豪）
│     (b) 协议价出现在 OTA / 公开可搜 / 码被代订
│           → 漏出。从 OTA 拿掉。不是 P25 的「直销」
│     (c) 周末/事件/已证实 Peak 不在合同适用日
│           → 范围外。blackout 该日；账号本身留下
│     (d) 周中西装客、公司域、TMC/GDS、产量达标画像
│           → 真需求。弱日留；高峰看 LRA
│
└─ Naive（禁止）
      「周六有协议 480 → 关整个账号」
      「协议必须永远比 BAR 便宜 30%」
      「协议在 OTA 所以这是直销、高峰要保」
      「为了公平把 BAR 降到 480」
```

**STR 口径提醒：** 协议散客多半是 Transient-Negotiated，**不是** Group，也**不是** Contract（Contract = >30 天且保证付款）。不要和 P10 团、P31 机组混报。

**与 P23：** 会员是封闭零售围栏；协议是签约户围栏。涨 BAR 时会员默认同向跟；协议价按合同（固定或 BAR 挂钩）。**禁止**同一 Stay Date 再叠第三刀 −5%。

**与 P25：** 高峰关深折 OTA、BAR 层与直销保持可订。协议码出现在 OTA = **漏出**，关掉协议码 ≠ 关光 OTA。

**与 P10/P30：** 置换公式管**一块日期的一团**。协议是全年/一季的持续流。高峰日协议过量 ≈ 把零售尾部卖穿，动作用 blackout / 限额 / 核验，不是 Accept/Reject 一场宴会。不要把周六 480 协议当成「接团」。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 映射 Stay Date × 账号 × 协议价 × 公开 BAR × 渠道（直销/GDS/TMC/OTA/前台）。
2. 问合同：LRA 或 NLRA？blackout？周末包不包括？资格句？没有文件 → Unknown，不编 30%/必须开。
3. 问品牌：有集团义务页吗？没有 = 酒店自有围栏（与 P23 同一句）。
4. 该日是不是已证实 Peak（Pace Ahead / Fast / Sellout / 事件旁证）？禁止「有协议客」单独当高峰。
5. 拆漏出：假资格 / OTA 挂出 / 合同范围外高峰。可同时成立。
6. 拆真需求：周中、公司域、TMC、产量。弱日留。
7. 闸：LRA 真员工不关；Unknown LRA → 高峰 Hypothesis blackout、周中留。
8. 动作落到日：blackout 哪些日期、OTA 是否下协议码、核验谁、公开 BAR 动不动。
   高峰协议不应低于公开 BAR，除非合同 LRA。
   不要 dump 零售；不要杀户。
9. 兼容：会员不同时再砍一刀；OTA 深折高峰仍关（P25）；价已最高只关不涨；禁一夜 −15%。
10. 输出 + 再要 3 个数 + 24h Trigger。现有协议订单：不盲取消；核验不合格再改 BAR（政策问用户）。
```

---

## 6. 动作（必须落到 Stay Date / 谁关 / 谁留）

```text
Stay Dates:
Account:            __（不要写成「全部协议」除非用户要审全库）
Contract:           LRA / NLRA / Unknown
Sat Peak:           corp CLOSE（blackout）或 若 LRA → OPEN + 只核验
Weekday weak:       corp OPEN at 合同价
OTA / 公开:         协议码 REMOVE（漏出）
Direct / GDS / TMC: 真员工可订（LRA 日或弱日）
Qualification:      预订+入住核验（用户政策；不编工牌法定清单）
Public BAR:         区间 + 首选；价已最高只关不涨
Member:             跟 P23；不要再叠 −5%
Do-not-do:
  - 关死整个账号
  - 没合同却说必须开 / 必须便宜 30%
  - 把 BAR 降到协议价
  - 把 OTA 上的协议当直销保护
  - 一夜 −15%
```

**高峰周六（Hypothesis，合同未知时）：** 协议 **blackout**；或至少从 OTA 拿掉。公开 BAR 走 P01/P03，不走协议。  
**弱市工作日：** 留协议。这是账号存在的理由。  
**Counter 不是零售 dump：** 对漏出间夜 Counter = 改 BAR 或拒绝协议价，**不是**把全店 BAR 砍到 480。  
**已最高：** 公开只关低价（含漏出的协议码），不涨 BAR。

幅度仍走 `how-much-to-move.md`：公开涨 +5–8% / +8–15%；围栏 −3–5%；BAR 降 −5–10%；**禁止一夜 −15%**。本剧主刀是 **关协议漏出**，不是改 BAR 幅度。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出 LRA 且该日未 blackout | **撤回**高峰关；真员工开；继续打 OTA 挂出和假资格 |
| 用户补出 NLRA / 周末除外 / 已列 blackout | 维持高峰关；周中不变 |
| 下 OTA 后 24h **总** Pickup 塌、直销/GDS 没接住 | 弱日把 OTA **BAR 层**开回；**不**把协议码重新挂上 OTA |
| 核验后假资格仍进 | 收紧码（改码/关前台口嗨）；不要改杀户 |
| 周中 Pace 变 Ahead 且协议仍远低于 BAR | 只审该日限额/是否动态挂钩；仍不杀户 |
| 公开价已最高 | 停涨；继续关漏出层 |
| 销售要把 BAR 对齐 480 | 拒绝；回到本卡 |

---

## 8. 如果只能再补 3 个

1. **合同扫描件/邮件：LRA 还是 NLRA、blackout、适用 DOW**（翻转「该不该开」）  
2. **该 Stay Date 协议间夜从哪个渠道来**（翻转「下 OTA」还是「收核验」）  
3. **周中同账号用量**（翻转「杀户」冲动；有周中真产量 → 更不能关死）

---

## 9. Confidence / 边界

有 Stay Date + BAR + 协议价 + 渠道：漏出方向 **Medium**。  
关整个账号：默认 **Low**，除非用户证明无周中产量且全是假资格。  
点折扣义务、工牌法定清单、中国 OTA 佣金%、弹性点：**NV**。  
万豪 QRV / 「不可家属」：**A Vendor，仅万豪**。独立店问用户怎么核。  
Cornell 协议漏出专页、HSMAI leakage 专页：本轮 **未找到**。  
不操作系统、不代改协议码、不替前台查人。

仿真：`cases/sim-2026-corp-rate-weekend-leak.md`（**Simulation**，不是真店）。

---

## 10. 证据（2026-08-22 打开）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 合同若无 LRA，协议可像散客折扣一样围栏；忙日可用 blackout/close-out；LRA 不能靠库存关掉 | A Vendor | **Known（机制）** | https://ideas.com/art-negotiating-contract-rates/ 2026-08-22 打开 |
| Qualified rate = 要资格；Semi-Yieldable（常批发/协议）≈ last room available accounts；Unqualified = 无合同无限制 | A Vendor 词条 | **Known（词）** | https://ideas.com/tools-resources/hotel-glossary-terms/ 打开 |
| 公司差旅不只静态协议；加载后要审计 parity / display / availability | A 协会 | **Known 方向** | HSMAI Americas, Strategies to Win in the Corporate Transient Segment（打开；CHSL 摘，不摘书） |
| HSMAI Academy 课名含 Negotiating Pricing on Groups and Corporate Accounts | A 课名 | 无 SOP 正文 | https://academy.hsmai.org/group-business-travel-basics-for-hotels/ |
| 动态折扣在增、固定价仍是基础；LRA 仍比 NLRA 常见；EMEA 更向 NLRA | A 调查 | **Known 2026 调查句** | GBTA + Radisson，调查 2026-04-20–05-13，n=258。**不是**本店条款 |
| 万豪协议仅限签约公司员工、不可家属；需证件；未授权可改 BAR；QRV 用工作邮箱不是 Gmail | A Vendor | **Known，仅万豪** | help.marriott.com book-corporate-rate / what-is-corp-promo-set-code 打开 |
| LRA vs NLRA 定义（还有一间也要卖协议 vs 高峰可关） | B | 机制 | Canary glossary 2026-02-28 打开。44% 酒店为 LRA 收费 = 该文数字，**不**进本库启发式 |
| 封闭协议码不应上官网/OTA；入住核验；码外传会漏 | C | 机制可讨论 | roommaster 2026-08-09。**不是**独立店 SOP |
| 协议代码半公开/代订，酒店把核验压到前台 | C | 中国现象线索 | 环球旅讯 2026-06-01 高思伟。**不是**工牌法定清单 |
| 年审产量、可与 BAR 挂钩 | C | 不升 SOP | 执惠/酒店高参 胡质健 2018。文内「八折 / 500 vs 900」**不**当义务% |
| 「协议必须便宜 10–30% / 中位数 14.2%」 | C/D | **非 Fact** | travel-code、Cloudbeds。本库 **不采用** |
| 中国独立店官方协议折扣表、必须查工牌的法规 | — | **未找到** | 不当 Fact |
| Cornell 协议漏出专页 | — | **NV** | eCornell Displacement and Negotiated Pricing 课页 timeout，且课主题是**团** |
| 中国 OTA 佣金%、Walk、点弹性 | — | NV | 不编 |

Failed / 未打开（记搜索词，不编页）：

```
Cornell hotel corporate rate leakage last room availability
HSMAI corporate rate leakage blackout negotiated
中国 协议价 义务折扣 协会 SOP
Marriott last room availability official definition page
Hilton Honors corporate negotiated LRA official
```

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 06:17 CST | drafted。BACKLOG P26。先诊断真需求 vs 漏出三枝。高峰 Unknown LRA → blackout Hypothesis；弱日留；不杀户；不编 30%。 |

---

## 12. 交叉（2026-08-22 10:17，不改协议诊断枝）

盲盒 / 批发净价上 OTA → **P27 已 drafted** `opaque-package-leakage.md`。同一把围栏刀：高峰关漏出层，弱日留真增量。协议是签约户；opaque/批发不是。不要三层叠砍。

---

## 13. 交叉（2026-08-22 18:17，不改协议诊断枝）

机组 / 航司占房走 **P31** `airline-crew.md`。同一把「高峰围栏、不杀户」刀，对象不同：**协议漏出 ≠ 机组 allotment**。协议散客是资格码；机组是合同块 + extra。不要把周六 380 机组 extra 写成「关协议账号」。


---

## 14. 交叉（2026-08-22 20:17，不改协议诊断枝）

高峰 **blackout 协议码** ≠ P31 **KEEP 已签机组块**。前者关漏出层（资格码/OTA/合同范围外高峰）；后者履约已在书的合同库存。不要把周六 extra 写成关协议，也不要把 OTA 上的 480 写成 KEEP allotment。

---

## 15. 一行（2026-08-25 02:17，不改协议诊断枝）

企业协议周末漏出 ≠ 政务/差旅协议（**P48** `government-negotiated-rate.md`）。corp leak ≠ 政务。本剧仍管公司码高峰漏出。

> 交叉指针（2026-08-28 22:17，不改正文）：把公开 BAR 重置成年标 / 为签年标先砍 BAR 走 **P71** `advisor-playbooks/corporate-annual-rate-vs-bar.md` · `dont-anchor-bar-to-corp-rate.md`。本剧仍管已签码漏出（错渠道/高峰滥用），不是改公开尺。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。
