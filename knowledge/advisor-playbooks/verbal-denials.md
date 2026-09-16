# Playbook P43｜Verbal Denials / 口头拒单 ≠ 涨价

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/verbal-denials.md`  
> BACKLOG：P43 口头拒单 ≠ 涨价 · HIGH（T03 本周 timely）· 先决策卡（00:17 已写）· slug **verbal-denials**  
> 状态：**drafted**（2026-08-24 02:17 CST）  
> 配套卡：`recommendations/dont-raise-on-verbal-denials.md`（**主卡；本剧不另开第二张卡**）  
> 理论：`metrics/denials-regrets.md` · `forecasting/unconstrained-vs-constrained.md` §9 · `forecasting/forecast-framework.md` §3.2  
> 交叉：P03 Remaining+Pace 才开卖完保护 · P09 Ahead 仍要剩余 · P33 限制会制造拒单 · P40 高峰 MinLOS 挡短住可能是故意的 · P42 上门成交是捕获不是拒单 · P02 价流失+弱日才评围栏  
> 问题树：§49 「前台说赶过人」  
> 仿真：`cases/sim-2026-fo-turned-away-no-log.md`（**Simulation**）  
> 证据等级：B（动作）；A Vendor（Duetto Denial/Regret；IDeaS 勿把 regrets & denials 当主数据）；A（HSMAI Unconstrained 公式不是拒单加总）；S 书目（Orkin 1998 摘要级；Weatherford & Kimes 2003 截断）；口头故事当 Demand = Hypothesis 禁止  
> Last Verified：2026-08-24  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议 Hold BAR / 开始记日志 / 分原因后移交 P33·P40·P03·P09·P42。**不操作** PMS / 预订引擎 / Channel Manager，不代记系统字段。  
> 禁止：无日志 Increase BAR；一夜 +15% / −15%；编中国 PMS 拒单字段名；编拒单%；编 Walk 成本；编华住 699；把口头「赶过人」写成 Demand；把 0 拒单写成需求弱；关房/MinLOS 夜自动 +BAR；把已成交 walk-in 算进拒单；第二张决策卡。

---

## 0. 一句话

前台说赶过人，没有日志就不能当需求去涨价。  
拒单要记日期、房型、原因；限制挡掉的先松限制，不是先加价。  
真容量拒单且剩余紧、Pace Ahead，才离开本剧走卖完保护。

完成定义：一张「口头赶客 → 要日志 → 分原因 → Hold / 松限制 / 移交卖完保护」过程。00:17 已有指标+卡；本剧接管 **怎么走完分叉**，不重写分类。P03 管 Remaining+Pace 的满房风险；本剧 **不**用故事开门。P09 管 Ahead 的涨幅；本剧 **不**给 +15%。

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 无日志** | 「今晚赶过好几拨人，要不要涨到 899？」 | 缺 Stay Date / 件数 / 房型 / 原因 | **Hold BAR**（Hypothesis 779–799 首选 799）。明天起记。**不要涨。** |
| **B 限制制造** | 日志=MinLOS / CTA / Closed，该夜并不紧 | 自己挡掉的询单，像「很多人订不了」 | **不涨。** 非 Peak → **P33** 先松。已证实 Peak 的 MinLOS → **P40/P21**，不解高峰限制，也不把挡掉的短住加成再涨 |
| **C 价流失 + Behind** | 报了价不订（regret），Pace Behind / 市场不热 | BAR 可能已经偏高 | **不要再涨。** 弱日才评 **P02** 围栏，不是恐慌砍；禁一夜 −15% |
| **D 真容量 + Ahead + 剩余紧** | 干净容量拒单（满/该型可售=0）且 Pace Ahead 且 Remaining 紧 | 截断旁证，不是本剧涨令 | **离开本剧 → P03**（先关低价），再决定要不要走 **P09**。小涨/只关，**不是**本剧一夜 +15% |
| **E 上门已成交** | 把已经买了的 walk-in 算进「赶过人」 | 捕获需求 | **P42**。高峰更不该打折。成交 ≠ 拒单，也不是单独再涨的证据 |

顾问必须能直接说的三句：

```
1. 前台说赶过人，没有日志就不能当需求去涨价。
2. 拒单要记日期、房型、原因；限制挡掉的先松限制，不是先加价。
3. 真容量拒单且剩余紧、Pace Ahead，才离开本剧走卖完保护。
```

独立默认（本库 Hypothesis）：口头 turndown 不是 Unconstrained Demand。日志是 **可观察代理 / 旁证**（Duetto 可作信号；IDeaS 不主张当主数据）。决策仍看 Remaining + Pace。HSMAI Unconstrained 公开公式是 OTB+预期，**不是** Sold+拒单+流失。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| D1 | 「前台说今晚赶过好几拨人，要不要涨？」 |
| D2 | 「预订部拒了很多电话，BAR 加一成 / 涨到 899」 |
| D3 | 「今天 0 拒单，没人要，砸一刀」 |
| D4 | 有人把 Closed / MinLOS / CTA 夜的「订不了」当成需求爆发 |
| D5 | 把已经成交的 walk-in 写进「赶过人所以再涨」 |

**不是本剧本：**

- 已有干净容量拒单 **且** Pace Ahead **且** Remaining 紧 → **离开，走 P03/P09**。本剧的工作是认出这三件已经齐，不是自己出涨幅。  
- 上门已经成交、问打几折 / 跟不跟 OTA 今夜价 → **P42**。  
- 淡日 MinLOS 开着、OCC 差、有人要降价 → **P33**（先松，不先砍 BAR）。  
- 已证实 Peak、只订周六、MinLOS 挡短住 → **P40/P21**（限制留着，不是涨价令）。  
- Ahead + Fast、不问拒单故事 → **P09**。本剧不替代 Remaining 检查。  
- 钟点 / day-use 赶客 → scout 仍 MEDIUM，本剧不主答。口头钟点不当过夜 Demand，不按过夜 BAR 涨过夜库存。

---

## 2. 输入（缺日志不停，但不编件数）

```
必须：
1) Stay Date（被赶走的入住夜，不是「今天前台忙」的日历日）
2) 是否存在拒单日志（有/无）。无 → 形 A，不发明间数
3) 当前公开 BAR
4) Remaining 可售（P37：不是维修/锁）
5) Pace vs 同 DTA / 今日 Pickup

有日志才拆：
6) Count（件数或间夜，声明单位）
7) Room type
8) Reason：容量满 / 该房型关 / MinLOS或CTA / 价档关 / 报价后不订 / Unknown
9) 当时限制：MinLOS=? CTA=? Closed?
10) 是否已知去竞对：是 / 否 / Unknown（不知不编 recapture %）

Recommended：
11) 可订竞对公开 BAR
12) 已成交 walk-in 张数与成交价（有则从「赶客」里划掉，走 P42）
```

缺日志 **不停**：形 A，Hold，布置明天的表。禁止把「好几拨」加进 Unconstrained。  
缺 Remaining / Pace **不停**：仍 Hold；**不许**确定 Increase。无剩余、无 Pace，即使日志漂亮也不许涨。  
顾问 **不** 登录 PMS、不代建拒单码、不编西软/绿云/石基列名。没有系统就一张表（内容见指标卡 §4）。

---

## 3. 分叉闸（涨 BAR 前必过）

```
0  Stay Date 钉死了吗？
     没有 → 仍形 A 条件化 Hold。不说无法判断，也不涨。
1  有日志吗？（日期/件数/房型/原因）
     无 → 形 A。Hold。开始记。不要涨。
2  「赶过人」里有没有已经成交的 walk-in？
     有 → 划掉，走 P42。成交不是 denial。
3  原因是限制 / Closed / MinLOS / CTA？
     该夜并非已证实 Peak、剩余不紧 → 形 B → P33。BAR 不动。
     已证实 Peak 的 MinLOS 挡 Sat-only → 形 B → P40。不解，不自动加价。
4  原因是报价后不订（regret）且 Pace Behind / 市场不热？
     → 形 C。不要再涨。弱日才评 P02 围栏。禁一夜 −15%。
5  原因是真·容量拒单（满房/该型可售=0）？
     Pace Ahead AND Remaining 紧 → 形 D。离开本剧 → P03/P09。
     Remaining 不紧 或 Pace 并非 Ahead → Hold。日志只是旁证。
6  用 0 拒单论证需求死？
     → 不是形 C 的「价已高所以降」。0 可能是没人记。禁止一夜 −15%。
```

**禁止跳到「前台很忙所以 899」。** 忙碌 ≠ Demand。899 相对 799 已是双位数涨幅，本剧无门可开。

Duetto Lost Business（A Vendor）：限制（例如搜 1 晚碰到 MinLOS=2）会 **制造** Denial。未洗团块、员工自搜会污染计数。  
IDeaS（A Vendor）：不主张把 regrets & denials 当 Unconstrained 主数据。  
TCRM（B）：Denial 可以是 sold out **或 restriction** 把价扣住——所以必须先分原因。

---

## 4. 诊断枝（禁止「赶过人所以涨」）

```
用户说前台赶过人 / 拒了很多 / 0 拒单所以砸
│
├─ 0. 有日志？Stay Date / 件数 / 房型 / 原因？
│     无 → 形 A。Hold BAR。布置最小日志。不发明间数。
│
├─ 1. 已成交 walk-in 被算进赶客？
│     是 → 形 E。P42。高峰不打折。涨不涨仍看剩余+Pace，不看成交故事
│
├─ 2. 原因结构（主翻转）
│     限制 / Closed / MinLOS / CTA
│           非 Peak 或不紧 → 形 B。P33 先松，BAR 不动
│           已证实 Peak MinLOS → 形 B。P40/P21，不解，不自动 +BAR
│     报价后不订 + Behind / 不热
│           → 形 C。不涨。弱日 P02 围栏，禁一夜 −15%
│     真容量满 / 该型可售=0
│           Ahead AND Remaining 紧 → 形 D。离开 → P03（先关低价）/ P09
│           不紧 或 非 Ahead → Hold。可能房型错配或渠道配额假满
│     Unknown
│           → 当形 A 处理：Hold，把原因补进明天的表
│
├─ 3. 0 拒单 = 没需求？
│     否。可能没记 / 价已高 / 限制把询单挡在门外。不砸。
│
└─ 4. 要把 BAR 一夜 ±15% / 涨到 899 当故事价？
      → 拒绝。幅度不建在轶事上。

Naive（禁止）
      「赶过好几拨人所以 Demand 很旺，涨到 899」
      「口头好几拨 + Sold = Unconstrained」（口头件数只许出现在 Simulation 卷，不当常模）
      「0 拒单所以砸」
      「MinLOS 夜订不了 = 再涨 15%」
      编中国 PMS 字段 / 行业拒单% / Walk 成本 / 华住 699
      顾问代记 PMS
```

**故事不是开门条件。** T20 无地板不发明 699。T19 无变动成本不把空房写成「所以该涨」。P03 的 S1–S5 仍是 Remaining+Pace，不是前台语气。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date。赶的是哪一晚入住，不是哪一天前台忙。
2. 问日志在不在。无 → 形 A，Hold，布置字段（指标卡 §4），停止涨价讨论。
3. 从「赶客」里划掉已成交 walk-in（P42）。
4. 读 Remaining 可售（P37）与 Pace / 今日 Pickup。缺则声明：不许确定 Increase。
5. 有日志则分原因：容量 / 限制 / 价 / Unknown。
6. 分叉 A Hold+记 / B P33或P40 / C 不涨（弱日才 P02）/ D 离开到 P03/P09 / E P42。
7. 形 D 才允许谈涨：先关低价；价已最高只关不涨；幅度走 how-much-to-move / P09，不是本剧 +15%。
8. 形 B：非 Peak 松该日限制；Peak MinLOS 留着。BAR 不动。
9. 形 C / 0 拒单：不涨不砸。禁一夜 ±15%。
10. 输出：Hold 区间+首选 + 是否开始日志 + 是否移交 + Trigger。
    不输出中国 PMS 字段名、拒单%、Walk 金额。无 Pace 声明 Hypothesis / 偏 A。
```

### 5.1 动作表

```text
Stay Date:        被赶走的入住夜（必须钉死）
Log?:             无 → 形 A：Hold BAR；布置：日期/件数/房型/原因/是否他订/当时限制
                  有 → 先分：容量 / 限制 / 价 / Unknown
Walk-in booked:   划出本剧 → P42
Capacity + Ahead + Remaining tight → 离开 → P03/P09（先关低价；小涨不是本剧 +15%）
Restriction-made, not proven Peak → P33 先松，BAR 不动
Restriction on proven Peak → P40/P21，不解高峰 MinLOS，不自动加价
Rate regrets + Behind → 不涨；弱日 P02 围栏；禁一夜 −15%
Zero logged denials → ≠ 需求死；不砸
Do-not-do:
  - 无日志 Increase BAR / 一夜 +15%
  - 把「赶过人」写成 Demand=Sold+好几拨
  - 限制夜自动 +BAR
  - 编中国 PMS 字段 / 拒单% / Walk 成本 / 华住 699
  - 顾问代记 PMS
Trigger: 见 §6
```

无 RMS 时的最小手记（Hypothesis，不是厂商算法，不是中国字段名）：

```
Stay Date | 记录日 | 件数或间夜 | 房型 | 渠道
原因：容量满 / 该房型关 / MinLOS或CTA / 价档关 / 报价后不订 / Unknown
是否已知去竞对：是 / 否 / Unknown
限制当时是否开着：MinLOS=? CTA=? Closed?
同一人重复询 = 一次（重复计数污染；A 综述方向）
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **别为口头赶客去涨**。

| 判定 | 公开 BAR | 日志 / 限制 |
| --- | --- | --- |
| 形 A 无日志 | **Hold** 779–799 首选 799。拒绝故事价（如 899） | 明天起记。不发明件数 |
| 形 B 限制制造 | **Hold。** 不涨 | 非 Peak → P33 松。Peak → P40 留 MinLOS |
| 形 C 价流失+Behind | **不涨。** 弱日才评围栏 −3–5%，禁一夜 −15% | 日志标 regret，不当容量 |
| 形 D 真容量+Ahead+紧 | **离开本剧。** P03 先关低价；P09 第一刀按 how-much，不跳最高，**不是**本剧一夜 +15% | 日志只作旁证 |
| 形 E walk-in 成交 | 口价走 P42（未冰报 BAR 或更高） | 不算 denial |
| 0 拒单当需求死 | **不砸。** 禁一夜 −15% | 先问记不记 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
故事涨到 899 / 一夜 ±15% = **拒绝**。  
「好几拨」不是幅度输入。

### 5.3 Advisor-First

建议用户：被赶走的 Stay Date、有没有一张表、原因结构、可售剩余、Pace、已成交 walk-in。顾问不登录 PMS、不点拒单码、不代改 BAR、不发明西软/绿云/石基列名。没有系统就用表格。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 次日仍无日志、仍要涨 | **继续 Hold。** 再要字段，不发明件数 |
| 日志出来 = 限制夜、该夜不紧 | 转 **P33**；BAR 仍不动 |
| 日志出来 = Peak MinLOS 挡 Sat-only | 转 **P40**；不解；不自动加价 |
| 日志出来 = 真容量 + Pace 转 Ahead + Remaining 变紧 | **离开本剧 → P03**。先关低价，再评 P09。仍禁一夜 +15% |
| 日志出来 = regret + 仍 Behind | 不涨。弱日才 P02 围栏 |
| 发现「赶客」其实已按 BAR 成交 | 转 **P42**。高峰不打折 |
| 销售仍要凭故事 899 / ±15% | **拒绝。** |
| 用户补 Remaining/Pace | 只决定能不能离开本剧，不把旧口头件数写成 Demand |

---

## 7. 如果只能再补 3 个

1. **日志在不在 + Stay Date + 原因** — 翻转形 A vs B/C/D；缺则 Hold，不涨  
2. **Remaining 可售 + Pace** — 翻转能不能离开去 P03；缺则不许确定 Increase  
3. **当时限制开没开 / 有没有已成交 walk-in** — 翻转 P33/P40 vs P42；缺则不当容量拒单

缺 1：Confidence Low，BAR Hold，布置表。  
缺 2：即使有干净容量日志，也 **Hold**，写 IF Remaining 紧 AND Ahead THEN P03。  
缺 3：限制当 Unknown，先问；已成交从赶客里划疑似。

---

## 8. Confidence / 边界

无日志：方向 **Medium**（Hold）；点涨幅 **无**（不准涨）。  
有干净容量拒单 + Remaining + Pace 齐：把置信度 **交给 P03**，本剧不再定价。  
限制夜：方向 Medium（先分原因可逆）；Peak vs 淡日分不清则只松用户点名的非高峰夜。  

Duetto Denial/Regret 定义 = **A Vendor**。IDeaS 勿当主数据 = **A Vendor**。HSMAI Unconstrained 公式不是拒单加总 = **A**。TCRM sold out 或 restriction = **B**。Orkin 1998 denied≈latent / price-regret probably not = **S 书目/摘要级**，不摘正文。STR Occupancy 不含拒单；**无** STR Denials Index。

中国 PMS 拒单字段、行业拒单%、Walk 成本、华住 699、钟点房价表：**NV**。无截图不发明。

仿真：`cases/sim-2026-fo-turned-away-no-log.md`（**Simulation**，不是真店）。主枝 **Hold BAR 779–799 首选 799**；开始记日志；拒绝故事涨价；拒绝一夜 ±15%。口头件数 **只写在 Simulation 卷**。

---

## 9. 证据（2026-08-24 已核；本小时不新开，复用 00:17）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Denial = 不报价（售罄/房型不可订）；Regret = 报价不订 | A Vendor | **Known 定义** | Duetto Glossary https://www.duettocloud.com/en-us/glossary （00:17 打开） |
| Web Denial / Web Regret；限制可制造 Denial；自搜污染 | A Vendor | **Known 方向**；脚本步骤不抄成行业公式 | Duetto Resource Hub *Lost Business* https://duetto.my.site.com/resourcehub/s/article/TS-3rd-Party-Data-Lost-Business-Overview （00:17 打开） |
| 勿把 regrets & denials 当 Unconstrained 主数据 | A Vendor | **Known 方向** | IDeaS Science 101（库内 2026-08-20）；公开摘要 *dirty data*（00:17 全文抓取空，不升 S） |
| Unconstrained = 无价/库存约束的需求；HSMAI 公式是 OTB+预期，不是拒单加总 | A | **Known 公式骨架** | https://academy.hsmai.org/glossary/unconstrained-demand/ （00:17）；https://global.hsmai.org/insight/different-forecasts-for-different-objectives/ |
| 历史售出被容量/Booking Limit 截断 | S | **Known** | Weatherford & Kimes 2003（forecast-framework 已核） |
| Denied ≈ latent；price-regret probably not | S 书目 | **摘要级，不摘正文** | Orkin, *Cornell HAQ* 39(4) 1998. DOI 10.1177/001088049803900404 |
| Denial 可因 sold out **或 restriction** | B | **Known 口径** | TCRM glossary https://tcrmservices.com/hotel-revenue-management-terms-definitions/ （00:17 打开） |
| 应记个人/团队拒单（LOS、细分） | B | **Known 方向** | Xotels unconstrained demand 页（00:17 打开） |
| STR Occupancy 公式；无 Denial 词条；无 Denials Index | S | **Known 缺词** | CoStar STR Glossary（00:17 打开）https://www.costar.com/products/str-benchmark/resources/glossary |
| 行业拒单%、中国 PMS 字段、Walk 成本、华住 699 | — | **NV。不编。** | 禁止编造 |
| 「口头赶客必须涨 BAR」官方定律 | — | **未找到** → 本库形 A Hold = Hypothesis | — |

Failed / 本小时不新开：

```
ideas.com Science 101 / dirty-data     → 00:17 空；用库内
SiteMinder RM 页                        → 00:17 timeout，不引
STR Denials Index                       → 词表无 → NV，不发明
中国西软/绿云/石基拒单字段              → 未找到 → NV
```

未采用：Peaqplus / Smartness 等 C 词条 `Unconstrained = Sold+Denials+Regrets`；「活动日 recapture 15–25%」。

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 02:17 CST | drafted。BACKLOG P43。分叉 A 无日志 Hold+记 / B 限制→P33或P40 / C 价流失不涨 / D 真容量+Ahead+紧才离开到 P03/P09 / E walk-in→P42。主卡复用 `dont-raise-on-verbal-denials.md`。不编字段/%。 |

---

## 11. 交叉（不改 P01–P42 正文；P03/P33/P42 仅文末一行）

- **P03**：卖完保护看 Remaining + Pace / Days-to-Sellout。故事不是 S1–S5。形 D 才移交；先关低价再涨。  
- **P09**：Ahead 仍要剩余。本剧不给一夜 +15%。价已最高只关不涨。  
- **P33**：CTA/MinLOS/Closed **会生产拒单**。非 Peak 先松，不要先加价。  
- **P40**：已证实 Peak 的 MinLOS 挡短住可能是 **故意的**。不解高峰限制，也不把挡掉的 1 晚加成再涨。  
- **P42**：上门已成交 = 捕获需求，不是 denial。高峰不打折。没成交又没记 = 仍形 A。  
- **P02**：形 C 弱日才评围栏，不是恐慌砍；禁一夜 −15%。  
- **P37**：Remaining 必须是可售。维修假满不是容量拒单。  
- **T19 / T20**：无成本不说空着更差所以该涨；无地板不发明 699。  
- **how-much-to-move**：涨门仍是 Ahead/Fast + 剩余压力。轶事开不了门。禁一夜 ±15%。  
- **Unconstrained 卡 §9**：FO 日志是输入，不是 Demand 本身。

> 指针（2026-09-06 00:17 T06-00，不改正文）：DNM / Locked·Unassigned / Waitlist deepen **theory-skip**（§146 复核）。邻覆盖仍本剧；Diagnose 主闸 **P37**（+ P13/P63/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-0017-theory-skip-dnm.md`。

> 指针（2026-09-06 08:17 T06-08，不改正文）：Queue / Pending / Rush deepen **theory-skip**（§149）。邻覆盖；主闸仍 **P63+P67**（±本剧/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。全文 `research-log/2026-09-06-0817-theory-skip-queue.md`。
