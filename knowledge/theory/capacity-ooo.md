# Capacity / OO / OOO｜物理房 ≠ 可售房 ≠ STR Rooms Available

> 资产：T06 理论卡  
> 路径：`theory/capacity-ooo.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-23  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR Historical Reporting Guidelines；STR Glossary Occupancy / Rooms Available）；A（USALI 11th FAQ via HFTP；HotStats USALI 口径转述；Forward STAR Adjusted Rooms Available；CoStar Occupancy / TRevPAR 教育文）；A Vendor（Stayntouch OOO/OOS/OOI **仅该 PMS**）；B（店内 Remaining / PMS 常扣 OOO）  
> 配套：`metrics/inventory.md` · `metrics/occ.md` · `metrics/metric-tree.md` §1 · `inventory/inventory-control.md` · `recommendations/dont-price-off-ooo-occ.md` · P03 · P05 · P13 · T19 · **P37**  
> 问题树：§1.0 口径假低；§42 OCC 好看因为维修 / 空房其实不可售  
> 禁止：编造中国 PMS「维修/停用/锁定」报表字段名；把维修房间夜当行业 Fact；用 STR 没打开的页发明 6 个月门槛（本轮 **已打开**）；重写 P01–P36 正文；操作 PMS；一夜 −15%。剧本见 P37。

---

## 0. 一句话

**OCC 好看先问分母。** 物理 180、维修 20、PMS OCC 92%，不是需求突然变强；空着 40 间里若 25 间维修/自用，可砸的只剩 15。  
对标 Comp 必须同口径：PMS 扣了 OOO、STR Comp 没扣，那高出来的 8 个点是假的。

```
Naive（禁止）     OCC 92% → 涨 BAR；空 40 → 砸一刀；MPI+8 → 我们更满
三口径            Physical ≠ Available_to_sell ≠ STR Rooms Available
本卡              先钉分母与可售剩余，再谈 Increase / Dump / MPI
```

完成标准：用户说「OCC 已经 92% 要不要再涨 / 还剩 40 间今晚砸一刀 / 对标 Comp 我们 OCC 高 8 个点」→ 先要 OOO/不可售间数；缺数不编 20；不自动涨、不自动砸。

---

## 1. 三个分母（不要混）

| 名 | 是什么 | 当晚定价用不用 | 证据 |
| --- | --- | --- | --- |
| **Physical** | 大楼里的客房数（房号池） | 不是可售 | STR Glossary *Number of Rooms*：overnight 可租总数（S，定义级） |
| **Available_to_sell** | 今天还能被预订/排房的房晚。店内常 = Physical − OOO − 自用/锁房 − 渠道关死（**须声明**） | **是。** Remaining 的上游 | B；各 PMS 扣哪些 **NV** |
| **STR Rooms Available**（历史 STAR / Comp） | `报告房量 × 窗口天数`。短于约 6 个月的临时停用/**不得**从报给 STR 的可用房里扣 | **对标 Comp / MPI 用这个**，不是店内好看 OCC | S，见下 |

STR Glossary（S，2026-08-23 打开）：

- Occupancy = Rooms Sold / Rooms Available  
- Rooms Available / Supply = 房量 × 窗口天数。例：100 间 × 31 天 = 3,100。

STR *Historical Benchmarking Data Reporting Guidelines*（S，2026-08-23 **打开**；文首写与 USALI 对齐，现 12th）：

```
Full room night availability（房量 × 天数）必须上报。
临时停用 / 装修 < 六个月 → 报告可用房 **不得**下调。
永久撤房 → 联系 STR 改房量。
Extended Closed（通常 > 六个月：装修、灾害等）→ 通知 STR 处理库存下调。
整店关 > 1 个日历月 → Temporary Closed / Renovation Closed：期间无可用库存，不进 Comp Set / 行业段。
Seasonally Closed：全店停业 ≥30 连续日、每年同时段 → 从年可售库存移除（须通知 STR）。
```

USALI 公开说明（A，不摘教材正文）：

- HotStats *Rooms Department and Operating Metrics*（打开）：Available **不含** Seasonally Closed、Extended Closed（连续六个月+）、Permanent House Use（连续六个月+ 员工自用，如经理公寓）。  
- HFTP USALI FAQ Rooms Q16（11th，打开）：临时装修停用 **不得**下调可用房；六个月+ 的 Extended Closed 意图是非自主灾害类（飓风/地震/火灾例），不是「装修半年就可以偷偷改分母」。

**顾问用法：** 历史 STAR / MPI / RGI 用 STR 全量分母。店内涨降价用 **可售剩余**。两套数可以同时对，禁止拿一套去打另一套的结论。

---

## 2. 两种误诊（本卡要挡住的动作）

### 误诊 A — 分母被砍 → OCC 好看 → 假 High Demand / 假涨

PMS 常从 Available 扣 OOO（B）。分子 Sold 不变、分母变小 → OCC 升。需求没有变。

用户原话：「OCC 已经 92%，要不要再涨？」例（用户数字，不是行业常模）：

```
Physical = 180
OOO     = 20
PMS Available = 160
PMS OCC 92%  → Sold ≈ 147
STR Available = 180
STR OCC      = 147 / 180 ≈ 81.7%     # 不是 92%
Sellable Remaining = 160 − 147 = 13  # 不是 33
```

92% 是 **扣了维修的店内尺**。13 间可售剩余才决定 P03 要不要关低价/涨 BAR。自动 Increase BAR 是在奖励工程关房。

### 误诊 B — 空房看起来厚 → 假 Low Demand dump

用户原话：「还剩 40 间空着，今晚砸一刀？」若 25 间是维修/自用，可售剩余 = 15。

40 是 Physical empty，不是 Remaining。P05 的 dump 对象是 **还能卖的房**。不可售的房不是砸价对象：降 BAR 卖不掉坏马桶。

禁止一夜 −15%。即使 15 间真可售、DTA 短，也先走 P05 排除表（市场冰、渠道关、只剩套房），不是看见 40 就砍。

---

## 3. STR vs PMS：不要拿不同分母打 MPI

用户原话：「对标 Comp 我们 OCC 高 8 个点。」

| 本店 | Comp（STAR） | 那 8 个点 |
| --- | --- | --- |
| PMS OCC，扣了 OOO | STR Comp OCC，短 OOO **不扣** | **假的。** 先还原本店到 STR 口径再比 |
| STR OCC（全量分母） | STR Comp OCC | 才可以谈 MPI |
| OTB OCC（Forward 口径，见 §4） | 历史 STAR Comp | 也不是同一把尺 |

STR 历史报告：短 OOO 仍在 Rooms Available 里，所以 Comp OCC **不会**因为对手修了 20 间而自动升高。本店 PMS 若扣了，本店 OCC 被抬高 → MPI 虚高 → 假「我们比市场满」。

顾问句：**「对标 Comp 必须同口径；PMS 扣了 OOO、STR 没扣，那 8 个点是假的。」**

P36 是 **价** 不可比（会员/含早/App）。本卡是 **量** 不可比（分母）。两套假信号不要并成一句「数据不准所以乱调」。

---

## 4. Forward STAR ≠ 历史 STAR（OTB 分母）

Forward STAR *Data Reporting Guidelines*（A，2026-08-23 **打开**）要的是 **Adjusted Rooms Available** = 库存里还能被订的房。允许因正当理由变动。

页上 Include / Exclude（对 Adjusted Rooms Available）：

| 仍计入 Adjusted（不因「省成本关房」缩小分母） | **不计入** Adjusted |
| --- | --- |
| 出于削减 overhead 而关掉 / 标成 out-of-service、从可售拿掉的房 | 全部或部分翻新；Extended room closure；整店关闭日（如圣诞）；**Out-of-order rooms**；软开业只开一部分 |

含义：前瞻 OTB OCC 的分母 **可以**扣 OOO / 翻新；历史 Comp OCC **不可以**为短装修下调。用 Forward 的好看 OTB% 去对历史 Comp，是第三种假口径。

CoStar TRevPAR 教育文（A，2024-06-25 打开）把维修不可租称 "Out of Service"、称 "Out of Order" **不**从 available 拿掉，并在例题里用 130−6 翻新卫生间当 RevPAR 分母。该例是 **店内可售分母** 的教学，**不能**覆盖 Historical Guidelines 的「短于六个月不上报扣减」（S）。顾问：店内 RevPAR 可声明用可售；报 STAR / 打 MPI 用全量。

---

## 5. 命名：OO / OOO / OOS / OOI 不是 STR 主词条

STR Glossary（2026-08-23 打开）**没有** Out of Order / Out of Service / Out of Inventory 主词条。官方历史口径用的是 temporarily out of service / Extended Closed / Temporary Closed / Seasonally Closed。

Stayntouch 帮页（**A Vendor，仅该 PMS**，2026-08-23 打开；禁止写成行业标准）：

| 码 | 该 PMS 对可售的影响（厂商自述，互有内部张力，不当 S） |
| --- | --- |
| OOO | 从 availability 扣；RevPAR 分母 = 总房 − OOO − OOI |
| OOS | **不**从 availability 扣 |
| OOI | 从库存拿掉一段时间或永久 |

**中国 PMS「维修 / 停用 / 锁定 / 自用」字段名 = NV。** 用户口里的「维修房」「自用」当 **用户语言** 用；不要发明西软/绿云/石基报表名当 Fact。顾问只问一件事：

```
这个状态会不会从今晚 Remaining / 可售里扣掉？
会 → 定价用扣完后的数
不会 → 它还在可售里，可能只是房号脏、不是供给事件
```

P33：CTA / Closed to arrival **≠** OOO。限制挡的是「谁能买还在的可售房」；OOO 砍的是「房还在不在可售池」。误关限制走开限制，不走本卡砸价，也不把限制当成维修。

---

## 6. 长期 OOO：改官方房量，不是偷偷按 20 间 dump

短期故障/单周装修 = 供给事件。长期整层关、连续约六个月+、或永久改功能：

1. **问用户** 工程结束日、是否已通知 STR / 业主改房量。  
2. **Hypothesis（须写进 Situation）：** 若已实质退出可租池且会跨过 STR Extended Closed / 永久撤房线，正道是 **官方房量变更**，不是在 BAR 上假装少了 20 间。  
3. **禁止：** 把长期关房当成「需求弱、对剩余 160 间秘密 −15%」；也禁止用被抬高的 PMS OCC 对剩余 13 间再加一轮 High Demand 涨价。  
4. 六个月是 STR/USALI **报告**门槛（S/A），不是本库给工程部的关房 KPI。达不到这条就不要建议「先改 STR 房量」。

顾问不代填 STR、不点 PMS 维修单。

---

## 7. 和剧本 / T19 的接口（不重写剧本）

| 已有 | 本卡只补一句 |
| --- | --- |
| **P03** Sellout | Remaining := **可售**剩余，不是物理空房。13 间可售 ≠ 33 间空着。假满（渠道配额）仍走 P03 X1；假满（维修）走本卡 |
| **P05** Last-minute | dump 禁止，若「剩余」其实是 OOO/自用。先打开真能卖的；真可售仍厚才进 72/24/6h。禁一夜 −15% |
| **P13** 房型压缩 | 某一型 OOO 会让该型 Days-to-Sellout 假短。先把该型 OOO 从 Remaining 拿掉，再谈涨基础/关型/逼升级 |
| **T19** 贡献 | **空着的可售房**仍有「少卖一间的贡献」机会成本；**OOO 房不是未售需求**——降价回收不了。无变动成本不说总比空着强（可售房）；OOO 房连「空着」都不是定价对象 |
| **P33** | 限制过度 ≠ 维修。先松 CTA/MinLOS，不砸 BAR |
| **P36** | 截图不可比是价口径；本卡是库存口径 |

决策卡：`recommendations/dont-price-off-ooo-occ.md`。剧本见 **P37** `advisor-playbooks/ooo-capacity.md`。

---

## 8. Diagnose 三问（用户原话）

1. **「OCC 已经 92%，要不要再涨？」**  
   先问 Physical、OOO/不可售、Sold。重算 STR OCC 与 Sellable Remaining。Remaining 紧且 Pace Ahead → 才进 P03（先关低价再涨）。只是分母小 → **不涨**，修工程或接受供给变小。

2. **「还剩 40 间空着，今晚砸一刀？」**  
   先问 40 里几间真能卖。不可售先从 40 划掉。真可售少 → 不砸；真可售厚走 P05，仍禁一夜 −15%。

3. **「对标 Comp 我们 OCC 高 8 个点」**  
   先问本店这 8 个点是不是 PMS（扣 OOO）对 STR Comp（不扣）。不同口径 → 不作为 MPI 论据，更不作为涨价令。

再要的 3 个数（有则写、无则 Unknown，**不编 20**）：**(a) 当日 OOO / 维修 / 自用 / 锁房间数（分房型）(b) Physical 与 PMS Available (c) Comp 那张表是 STAR 还是店内互采。**

---

## 9. 证据（2026-08-23 核）

| 论断 | 级 | 源 |
| --- | --- | --- |
| OCC = Sold / Available；Available = 房量 × 天数 | S | https://www.costar.com/products/str-benchmark/resources/glossary |
| 短于六个月临时停用/装修 **不得**下调报告可用房；永久撤房改房量；Extended Closed 通常 >六个月须通知；整店关 >1 日历月 = Temporary Closed | S | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines |
| Occupancy = occupied / available（教育） | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-occupancy-rate |
| Forward Adjusted Rooms Available：OOO / 翻新 / 整店关闭日 **排除**；为省成本关掉的 OOS **仍计入** | A | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines |
| 店内例：维修不可租从 RevPAR 分母扣；文中 OOS vs OOO 命名 | A 教育，**不得压过** Historical S | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/revpar-vs-trevpar （2024-06-25） |
| USALI Available 不含季节关、Extended Closed、长期宿舍自用 | A 转述 | https://www.hotstats.com/hotel-industry-resources/rooms-department-and-operating-metrics |
| 临时装修不得调可用房；六个月+ 意图非自主灾害 | A FAQ | https://www.hftp.org/downloads/documents/usali/resources/usali_faqs.pdf Rooms Q16 |
| OOO/OOS/OOI 三码及是否扣可售 | A Vendor **仅 Stayntouch** | https://stayntouch.freshdesk.com/support/solutions/articles/24000016624-a-guide-to-out-of-order-ooo-out-of-service-oos-out-of-inventory-ooi-rooms |
| 中国 PMS 报表字段名；维修房间夜常模 | — | **NV。不编。** |

未采用：Prostay 博客把 STR 六个月线写成操作 SOP（C，方向同但不进必做）；Stayntouch 页内 OCC 公式与「是否影响 OCC」表述互相打架 → 不当 S。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-OOO-01 | 中国常见 PMS（西软/绿云/石基等）维修、停用、锁定、自用的**报表字段名**与是否扣 Remaining | 问用户截图；不编字段 |
| NV-OOO-02 | 本店 PMS OCC 是否扣 OOO / 自用 / 渠道关 | 必须声明；未声明则两套都算 |
| NV-OOO-03 | 用户是否已把长期关房报给 STR | 问；未报则 STAR 仍按全量 |
| NV-OOO-04 | 维修房间夜的行业常模 / 「关多久该改房量」的本店 SOP | 不编间夜；六个月只作 STR/USALI 报告线 |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 00:17 | 首版。三口径；误诊 A/B；MPI 同口径；长期 OOO 走官方房量（Hypothesis）；不写 P37；中国报表名 NV。 |
| 2026-08-23 02:17 | 剧本见 **P37** `advisor-playbooks/ooo-capacity.md` · 仿真 `cases/sim-2026-ooo-occ-92-saturday.md`。正文不重写。 |

瞬态无关免费 / 临时自用 ≠ Permanent House Use。Comp 占物理房、不进 STR 历史 Sold，见 [`complimentary-house-use.md`](complimentary-house-use.md) · [`../recommendations/dont-raise-on-comp-occ.md`](../recommendations/dont-raise-on-comp-occ.md)。永久 HU 6+ months 仍走本卡 / P37。不重写 OOO 规则。

放房点之前的 OTB 掺非担保 / hold 是**分子**问题，不是本卡的**分母**问题（OOO 缩分母）。两边都不是需求变强 → **T-Guar** [`guarantee-release.md`](guarantee-release.md)（画面 OTB 还不是需求；释放是事件不是预测）· 过程 P55。不重写 OOO 规则。

---

## 17. 一行（2026-08-27 16:17，不改上文）

物理/可售分母（本卡 T06）之上再拆 **可交吞吐** → **T-Staff** [`staff-capacity-vs-demand.md`](staff-capacity-vs-demand.md)。Dirty/人手翻不过来 ≠ OOO 缩分母；两边都不是弱需求 dump 令。过程仍 P63。


## 18. 一行（2026-09-03 00:17，不改上文）

Component Suite / 虚拟套房池扣减 ≠ 本卡 OOO 缩分母。Diagnose「组合套房占了所以 dump」→ **T-Component** [`component-suite-inventory-vs-bar.md`](component-suite-inventory-vs-bar.md)；过程仍 P13+P37。不重写 OOO 规则。不开 P88。

> 指针（2026-09-05 08:17 T05-08，不改正文）：OOS vs OOO deepen **evaluated → skip**。§140 OPERA OO removed / OS remain 复核 = 分母轴加固，非新 Diagnose 路由；过程仍 **P37**。Hold 779–799 首选 799；拒 399；不发明 699。全文 research-log/2026-09-05-0817-theory-skip-oos-ooo.md。不开 P88。不开 P89。
> 指针（2026-09-05 10:17 C05-10，不改正文）：§141 CASE 指针复述 §140。专拍 Simulation `cases/sim-2026-oos-vs-ooo-sat.md`；闸仍 **P37** + 本卡。Hold 779–799 首选 799；拒 399；不发明 699。T05-08 deepen **已 skip**。不开 P88。不开 P89。
> 指针（2026-09-05 12:17 R05-12，不改正文）：§142 新开 Protel Air OOO≠OOS + Cloudbeds OOS Blocking + Occupancy Discrepancies（Dashboard 含 OOS vs Adjusted 剔除）。闸仍 **P37** + 本卡；Hold 779–799 首选 799；拒 399；不发明 699。T05-08 deepen **已 skip**；C05-10 专拍仍在。不开 P88。不开 P89。
