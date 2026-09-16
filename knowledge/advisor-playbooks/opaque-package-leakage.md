# Playbook P27｜Opaque / Package Leakage

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/opaque-package-leakage.md`  
> BACKLOG：P27 Opaque / Package Leakage · LOW · 先决策卡 · slug `opaque-package-leakage`  
> 状态：**drafted**（2026-08-22 10:17 CST）  
> 配套卡：`recommendations/close-opaque-on-peak.md`  
> 理论：`channel/net-contribution.md` §2.12 · `theory/profit-contribution.md` · `pricing/how-much-to-move.md`（幅度数字不改）  
> 交叉：P18 出资未知或高峰 dump → 不报；T19 低于贡献不卖；P26 高峰围栏、弱日留；P05 last-minute 不是自动 dump，opaque 不是第一刀  
> 问题树：§12 · 本轮 §37  
> 仿真：`cases/sim-2026-opaque-399-saturday.md`（**Simulation**）  
> 证据等级：A（Anderson/Xie 名级：opaque = 成交前隐店名；IDeaS Qualified / Semi-Yieldable / Net Rate 词条）；HSMAI 分销圆桌泄漏处理 = A 协会实践；动作 **Hypothesis**；佣金% / 批发折扣表 / 变动成本 = **非 Fact**  
> Last Verified：2026-08-22  
> 知识类型：Best Practice + Hypothesis  
> Advisor-First：只建议关盲盒/批发/假打包、守 BAR，不操作 PMS / 渠道经理 / OTA 后台。  
> 禁止：编造盲盒平台佣金%、批发折扣表、变动成本、Walk、点弹性、2026 中国活动名；把 399 vs 899 写成「总比空着强」；一夜 −15%；价已最高还涨 BAR；把剩菜盲盒当客房 opaque。

---

## 0. 一句话

高峰 Ahead 时，**盲盒 / 批发默认关**，不是再配 399。  
打包要拆：**真含餐** vs 把房费藏进套餐。  
淡季能不能留，看**净价是否盖住贡献**；没成本数就别说「总比空着强」。

完成定义（BACKLOG）：能区分真打包价值 vs 用 opaque/批发把房卖掉；能输出高峰关谁、弱日留不留（条件句），而不是「适当参加盲盒」。

顾问必须能直接说的三句：

```
1. 高峰 Ahead 时盲盒/批发默认关，不是再配 399。
2. 打包要拆：真含餐 vs 把房费藏进套餐。
3. 淡季能不能留，看净价是否盖住贡献；没成本数就别说「总比空着强」。
```

独立默认（本库 Hypothesis，待真实反馈）：opaque / 裸卖批发是**围栏倾倒渠道**。高峰关；弱市工作日**可以留**，前提是用户给出的 **净价 > 贡献**。缺成本 → 不停分析，但**禁止 Accept**。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| O1 | 「OTA 盲盒 399、打包把房费摊得很低，高峰关不关？淡季留不留？」 |
| O2 | 周末/事件日仍能搜到盲盒、神秘酒店、批发净价、或拆开后的打包房费远低于 BAR |
| O3 | 批发合同净价出现在零售 OTA / 比价，前台不认识这张单 |
| O4 | 「含早/含下午茶套餐」房费被摊到地板，餐本身贡献 Unknown |

**不是本剧本：**

- 单次神券/今日特价报不报 → **P18**（本剧是持续的盲盒/批发/打包层，不是一次报名）。  
- 按渠道 Gross 保谁 → **P20**（先净排序；本剧再决定这一层开不开）。  
- 协议码漏到 OTA → **P26**（签约户围栏，不是 opaque）。  
- 499 佣金+早+布草会不会亏 → **T19** 先过贡献闸；本剧管产品层开关。  
- 今晚空 20 间要不要砸 → **P05**；opaque **不是** last-minute 第一刀。  
- 机组 / 航司协议 → **P31 未写**。  
- OTA 排名掉了要不要报盲盒换曝光 → **P35 未写**；没有用户证据不要为排名无条件开 opaque。

---

## 2. 输入（缺成本不停，但不编）

```
必须：
1) Stay Date + DTA + Pace / Pickup（该日 Peak / Ahead / 弱日？）
2) 公开 BAR（直销 + OTA BAR 层）
3) 产品类型：opaque / 批发 / 打包（用户怎么称呼就怎么记，顾问不发明 2026 活动名）
4) 挂出房价或盲盒价（例：399）+ Remaining
5) 从哪个渠道可见（盲盒页 / 批发码 / 零售 OTA / 直销套餐）

应用：
6) 落地净价（毛 − 用户合同佣金/批发差/店出）。算不出 → Net = Unknown
7) 用户变动成本（布草/增量清洁、早餐增量、增量能耗）— 有则算贡献，无则 Unknown
8) 打包里到底含什么：真 F&B 凭证 vs 只是把房费改名

Recommended：
9) 竞对可订价（决定公开层涨不涨，不决定 399 配不配）
10) 批发合同：是否允许拆包零售、是否 Semi-Yieldable/LRA、blackout
```

**独立店默认：** 开口问「这是盲盒/神秘价、批发净价，还是含餐套餐？净价你知不知道？餐是真出餐还是名字？」用户说不清 → 当 **围栏倾倒层**。禁止把 2011/2021 平台营销页、Expedia 批发维权演讲、博客折扣表写成该店义务。

缺佣金%、缺变动成本 **不停**：用条件句。Unknown 净/成本 → 高峰仍关；弱日 **不 Accept** 399，改要三数。

---

## 3. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 适用日已是 P01/P03/P04/P07/P11 路径（Pace Ahead / Fast / 已证实 Peak / Sellout） | **关** 盲盒与批发。不是再配 399 |
| X2 | 价已最高（公开 BAR ≥ 全部可订竞对） | 公开 **只关不涨**。opaque/批发仍关 |
| X3 | 主 BAR / 直销其实关着，只剩盲盒能订 | 先开 BAR（P25/开库存），**不**把 opaque 当主渠道 |
| X4 | 弱市工作日、Pace 不 Ahead、用户净价 − 用户变动成本 **> 0** | **可留** 该层，配额声明。禁止用周六高峰当理由关周二真增量 |
| X5 | 变动成本 Unknown，却要用「空着=0」压 399 vs 899 | **禁止 Accept**。弱结论：拒配已知深折；问三成本 |
| X6 | 「打包」拆开后房费≈BAR、餐是真出且用户给了 F&B 贡献 | 不是 dump。走 T18/P30 口径；本剧不关真套餐 |
| X7 | 「打包」只是改名，餐贡献 Unknown 或不上餐 | **假打包**。当 opaque/低价房关（高峰）或过贡献闸（弱日） |
| X8 | 批发净价被拆到零售 OTA | **漏出**。从零售拿掉；高峰对该批发 stop-sell。不是 P25「直销」 |
| X9 | DTA≤3 想靠盲盒清仓 | 走 **P05**。禁止一夜 −15% 当新 BAR；opaque 不是第一刀 |
| X10 | 用户合同写明该批发 Semi-Yieldable / LRA，BAR 仍开时不能关 | 标 Vendor 约束。顾问仍建议高峰谈判 blackout / 限额；**不编**必须开。独立店 Unknown → 当可关围栏 |

排除顺序：X1 Peak → X8 零售漏出 → X6/X7 真假打包 → X5 贡献闸 → X4 弱日条件留 → X9 last-minute。

---

## 4. 诊断枝（先诊断，禁止「适当参加盲盒」）

```
某 Stay Date 能订到远低于 BAR 的盲盒 / 批发 / 打包
│
├─ 产品是什么？
│     opaque / 盲盒 / 神秘酒店：成交前隐店名或隐房价结构
│           → 围栏倾倒层。高峰默认关
│     批发净价：本应打包/指定客源，却出现在零售
│           → 漏出。高峰关 + 从零售拿掉
│     打包：拆房费 vs 餐
│           真含餐且贡献 from user → 不是本剧 dump
│           房费被摊到地板、餐 Unknown → 假打包 = dump
│
├─ 该日是不是已证实 Peak / Ahead / Fast？
│     是 → 关 opaque 与批发。公开走 P01/P03，不配 399
│     否、弱市工作日 → 进贡献闸
│
├─ 净价 − 用户变动成本？
│     算出 Contribution ≤ 0 → 关。不要为了 OCC 卖（T19）
│     Contribution > 0 且否则会空 → 弱日可留，配额 + 截止日期
│     净或成本 Unknown → 高峰仍关；弱日不 Accept「总比空着强」
│
└─ Naive（禁止）
      「399 总比空着强」
      「周末高峰再配一层盲盒冲 OCC」
      「打包里有早餐所以房费可以 399」
      「批发毛低所以差 / 批发毛高所以保」（比净，P20）
      「为曝光 / 排名必须开盲盒」（P35 未写，不当开门）
      「BAR 降到 399 求公平」
```

**与 P18：** 一次神券报名看出资+是否砸高峰。盲盒/批发是**常开的倾倒层**。高峰两者都关。出资 Unknown 的平台盲盒 = 不报 / 关掉该日。不要发明 2026 活动正式名。

**与 P20：** 批发常已是净；和 BAR 比要用净，不比毛。压缩日关批发。本剧把「关哪一天」写到 Stay Date。

**与 P26：** 同一把围栏刀，不同对象。协议 = 签约户；opaque/批发 = 无姓名或 B2B 再零售。高峰都关漏出层，弱日都可留真增量。不要叠砍：会员（P23）+ 协议 + 盲盒三层一起开着打高峰。

**与 P05：** last-minute 先排除、先浅围栏。把盲盒当当晚唯一出货口 = dump。档 H 仍须贡献>0，穿底认栽。

**与 T19：** 贡献闸是底。本剧多一道机会成本：高峰能卖 BAR 时，机会成本 ≈ BAR 净，不是 0。即使 399 贡献勉强为正，高峰仍关。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 映射 Stay Date × 产品类型（opaque/批发/打包）× 挂出价 × 公开 BAR × Remaining × 渠道。
2. 拆打包：真 F&B 凭证 vs 房费改名。餐贡献必须 from user，不编餐标。
3. 问净价：佣金/批发差/店出。没有 → Net Unknown，不算假精确。
4. 问变动成本三数（布草或增量清洁 / 早餐增量 / 其他）。没有 → 贡献 Unknown。
5. 该日是不是已证实 Peak（Pace Ahead / Fast / Sellout / 事件旁证）？禁止「盲盒还在卖」单独当高峰。
6. 查漏出：批发净价是否出现在零售 OTA / 比价 / 前台不认识的单。
7. 闸：高峰 / Ahead → 关 opaque 与批发；假打包一起关。
   弱日 → 仅当净>贡献才可留；缺成本不 Accept。
8. 动作落到日：关哪些 Rate Plan、零售是否下批发码、公开 BAR 动不动。
   价已最高只关不涨。不要把 BAR dump 到 399。
9. 兼容：P18 高峰不报；P05 不把 opaque 当第一刀；禁一夜 −15%；
   围栏 −3–5% 也不得穿贡献。
10. 输出 + 再要 3 个数 + 24h Trigger。已订盲盒/批发单不盲取消；新日关掉即可。
```

---

## 6. 动作（必须落到 Stay Date / 哪一层关 / 哪一层留）

```text
Stay Dates:
Product:            opaque / 批发 / 打包（用户原名；顾问不命名 2026 活动）
Peak Sat / Ahead:   opaque CLOSE；批发 CLOSE 或 stop-sell
                    打包：假打包 CLOSE；真含餐且贡献已知 → 不走 dump 关法，转 T18
Weak weekday:       仅当 Net − 用户变动成本 > 0 → KEEP（配额）
                    缺成本 → 不 Accept；弱拒 399 vs BAR 已知深折
Last-minute:        先 P05；不新开盲盒当第一刀
Public BAR:         区间 + 首选；主刀是关倾倒层；价已最高只关不涨
Retail leak:        批发码从零售 OTA / 比价 REMOVE
Do-not-do:
  - 高峰再配 399
  - 没成本却说总比空着强
  - 把 BAR 降到盲盒价
  - 编佣金% / 批发折扣表 / 活动名
  - 一夜 −15%
```

**高峰周六（Hypothesis）：** 盲盒与批发 **关**。公开 BAR 走 P01/P03。  
**弱市工作日：** 净>贡献才留；否则关或先要数。  
**Counter 不是零售 dump：** 对已经漏到零售的批发单，Counter = 下码 / 改走 BAR，**不是**把全店 BAR 砍到 399。  
**已最高：** 公开只关低价（含 opaque），不涨 BAR。

幅度仍走 `how-much-to-move.md`：公开涨 +5–8% / +8–15%；围栏 −3–5%；BAR 降 −5–10%；**禁止一夜 −15%**。本剧主刀是 **关倾倒层**，不是改 BAR 幅度。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 关盲盒后 24h **总** Pickup 塌、BAR 层没接住 | 弱日可评估浅围栏 −3–5%；**不**重开 399 盲盒 |
| 用户补出净价+变动成本，弱日贡献>0 | 该弱日可 KEEP 小配额；高峰仍关 |
| 用户补出贡献≤0 | 弱日也关 |
| 发现批发仍在零售裸挂 | 再下一层码；该批发高峰 stop-sell |
| 公开价已最高 | 停涨；继续关 opaque |
| 销售要把 BAR 对齐 399 | 拒绝；回到本卡 |
| DTA 进入 3 天仍空 | 转 P05，不把盲盒当第一刀 |
| 打包方补出真餐贡献 | 假打包标签可撤；仍按日过高峰/弱日 |

---

## 8. 如果只能再补 3 个

1. **产品类型 + 该 Stay Date 是否 Peak/Ahead**（翻转关/留）  
2. **落地净价**（合同佣金或批发差；翻转贡献符号）  
3. **用户变动成本三数，或打包里餐是否真出**（翻转「总比空着强」与假打包）

---

## 9. Confidence / 边界

有 Stay Date + BAR + 399 类挂价 + Peak 旗标：高峰关的方向 **Medium**。  
弱日留：缺净/成本时默认 **Low**（不 Accept）。三数齐且贡献>0 → 弱日留方向 Medium。  
点佣金%、批发折扣表、变动成本金额、Walk、点弹性、2026 中国 OTA 活动名：**NV**。  
Anderson/Xie 的最优 opaque 动态定价公式 **不进本库操作**（名级机制即可）。  
Expedia 侧「批发泄漏损失 %」= 厂商/媒体，**不采用**当本店损失。  
不操作系统、不代关渠道、不替平台起活动名。

仿真：`cases/sim-2026-opaque-399-saturday.md`（**Simulation**，不是真店）。

---

## 10. 证据（2026-08-22 打开）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Opaque = 成交前隐藏服务商身份（或关键属性）；可同时对品牌客收高价、对非品牌客折价 | A 名级 | **Known（机制）** | Anderson & Xie, *POM* 2012, 21(3):590–605（Cornell ecommons 条目打开失败，以 DOI/题名为准，不摘公式）。Anderson & Xie, *EJOR* 2014, 233(1):263–272 名级 |
| Posted opaque（Hotwire 类）vs NYOP（Priceline 类）是两种 opaque | A 名级 | **Known（词）** | 同上；Anderson 2009 *INFORMS Journal on Applied Analytics*「Setting Prices on Priceline」名级 |
| 淡季可用 opaque/打包在**不公开**折扣的前提下收价格敏感客；必须真的保持 opaque | C/B | 方向可讨论，**非 SOP** | HSMAI Asia Pacific 2018-11-22 转 eHotelier；作者为 bidroom.com 供稿。可作「淡季才考虑」旁证，不当高峰开门 |
| 分销高管：发现泄漏 → 终止或限价；静态合同改动态；测试预订找源头 | A 协会实践 | **Known 方向** | HSMAI Global, Content and Rate Parity Best Practices from Global Distribution Executives（打开） |
| Qualified rate = 要资格；Semi-Yieldable（常批发/协议）≈ LRA，BAR 仍开时可能关不掉；Net Rate = 扣佣/加价前 | A Vendor 词条 | **Known（词）** | https://ideas.com/tools-resources/hotel-glossary-terms/ 2026-08-22 打开 |
| 批发净价本应打包/指定客源，漏到零售 OTA 会打穿直销 | C | 现象线索 | Skift 2024-01-23 引 Expedia CEO（OTA 视角）。「大量泄漏 / 三成 off」**不**进本库损失公式 |
| 中国平台曾做酒店盲盒/神秘酒店（隐店名+低价） | C | 历史产品形态 | 环球旅讯 2021-04-21（平台稿，**D 营销数字不采用**）；虎嗅转《空间秘探》2021-06-09：酒店盲盒预售兑换难、旺季挤兑。**不是** 2026 SOP，不当活动名 |
| 「剩菜盲盒」 | — | **离题** | 餐饮余量，不是客房 opaque |
| 中国 2026 盲盒佣金%、批发折扣义务表、独立店必须开盲盒 | — | **未找到** | 不当 Fact |
| Expedia Group B2B「98% 酒店曾因误用费率受损 / 6% 收入」 | D Vendor | **不采用** | partner.expediagroup.com 营销调研 |
| Cornell 2012 全文 PDF / 最优 opaque 价函数 | — | **NV** | ecommons 条目本轮打开失败 |
| 中国「批发价漏出」协会 SOP | — | **NV** | 搜索无合格官方页 |

Failed / 未打开（记搜索词，不编页）：

```
Cornell ecommons Anderson Xie 2012 opaque prices full PDF
Cornell CHR opaque selling hotel identity
HSMAI opaque inventory peak close official SOP
中国 批发价 漏出 收益管理 协会 SOP
携程 2026 酒店盲盒 商家规则 佣金
IDeaS glossary opaque（词条未单列）
```

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 10:17 CST | drafted。BACKLOG P27。高峰关盲盒/批发；假打包当 dump；弱日仅净>贡献可留；缺成本不说总比空着强。 |

## 12. 交叉（2026-08-22 14:17，不改高峰关盲盒）

**P35 已 drafted。** 不为排名 / 曝光开盲盒。高峰 Ahead 仍关 opaque。排名 FOMO 不是开门条件。
> 交叉指针（2026-08-28 14:17，不改正文）：盲盒/假打包仍本剧；真含早 CP 与「套餐≠BAR / 不要砍 EP」过程走 **P69**。不写 P70。

> 交叉指针（2026-08-28 16:17，不改正文）：Diagnose 走 **T-Package** `theory/package-vs-ep-bar.md`；过程仍 **P69**。不写 P70。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。
