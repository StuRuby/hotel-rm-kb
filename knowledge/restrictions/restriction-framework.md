# Restriction Framework｜停留限制（顾问可调用）

> 资产：Wave4 理论卡  
> 路径：`restrictions/restriction-framework.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> 配套：`inventory/inventory-control.md` · `pricing/how-much-to-move.md` · `recommendations/minlos-peak-protect.md` · `pricing/los-optimization.md`  
> 问题树：§1.7 限制过严 · §8 Early Sellout · §16 Event · P21 已 drafted · P33 `restriction-overuse.md` 已 drafted（2026-08-20 17:00）  
> 禁止：整周一刀 MinLOS；缺肩日数据把 MinLOS 写成第一刀 Fact；写系统点击步骤；用「适当设连住」交差。

---

## 0. 一句话

限制改的是 **谁还能订、以多长 LOS 订**，不是价签上的数字。高峰用限制挡单晚，常常比再涨一刀更对；淡日用限制挡需求，会被误诊成该降价。

```
价        = 保留价格
库存      = 还卖多少 / 卖给哪一层
限制      = 以什么到达日、离店日、连住长度才能买
```

限制的不可逆程度 **高于改 BAR**：错设 MinLOS 会把高价值短住和肩日组合一起挡掉，24h 内未必能用降价救回来。缺肩日 OTB → Confidence **Low**，写进 IF，不进第一刀（与 Protect / Event 卡一致）。

---

## 1. 术语（顾问必须能点名）

公开实践把 Stay Restriction / Stay Control 定义为：按连住长度或到达/离店日过滤可订（Lighthouse 2025-06-27 打开，**B**；Hotel Tech Report / NetSuite 同名定义互证，**B**）。eCornell Availability Controls 课纲含 length-of-stay controls（**A**，2026-08-20 打开课页，不摘讲义）。Duetto Glossary：LOS / ALOS 用于设 min/max stay（**A Vendor**）。

### 1.1 MinLOS（Minimum Length of Stay）

| | |
| --- | --- |
| **定义** | 以该日为到达日（或覆盖该夜，视系统；**NV-RST-01**）时，必须至少住 N 晚。 |
| **该怎么调** | 写到 **哪几个 Stay Date / 到达日、N=几、盖高峰不盖整周**。首选高峰夜 **MinLOS=2**；三夜以上只在连续高峰 ≥3 且肩日也热时评（Hypothesis）。 |
| **用** | 高峰单晚会掏空、肩日明显更空、overnight 已证实。见 `minlos-peak-protect.md`。 |
| **不用** | 只有事件旗标；肩日未知；淡日；价还没跟上就用 MinLOS 代替涨价；3D 快 7D 不快（可能是一团）。 |

### 1.2 MaxLOS（Maximum Length of Stay）

| | |
| --- | --- |
| **定义** | 一笔最多住 N 晚。用来阻止低价长住把后面的高峰夜占满。 |
| **该怎么调** | 「进入高峰前的弱日：低价/协议 MaxLOS=__，使离店落在高峰前；高峰本身一般 **不** 设短 MaxLOS。」 |
| **用** | 弱日低价产品可能跨进事件/节假日；长住协议挤高峰。 |
| **不用** | 高峰日对 BAR 设很短 MaxLOS（等于赶客）。需求不够时设 MaxLOS 只会挡长住。Lighthouse：**sparingly**（**B** 实践，非定律）。 |

### 1.3 CTA（Closed to Arrival）

| | |
| --- | --- |
| **定义** | 该日不能作为入住日；**可以**作为连住中的过夜。 |
| **该怎么调** | 「高峰夜 CTA：单晚订不了该日到达；周五到达+住过周六仍可。」常与 MinLOS 二选一，不要叠到把需求封死。 |
| **用** | 高峰被「只订最热那一晚」切碎；或只想让低价产品不能在高峰到达（低价 CTA、BAR 仍开）。 |
| **不用** | 该日历史就是「周六到达、住两晚」的主到达日——CTA 会挡高价值组合（Lighthouse 公开提醒，**B**）。肩日空还对肩日 CTA。 |

**MinLOS vs CTA（顾问选择，Hypothesis）：**

| 更想要 | 用 |
| --- | --- |
| 高峰必须连肩日 | **MinLOS=2** 盖高峰夜（或盖到达日=高峰前夜） |
| 不许「只到高峰」但允许早已在住的人住过 | **CTA** 盖高峰到达 |
| 两者都上 | 只在 Unconstrained ≫ Cap **且** 竞对也在限时；否则易过度（P33） |

### 1.4 CTD（Closed to Departure）

| | |
| --- | --- |
| **定义** | 该日不能作为离店日；鼓励再住一晚。 |
| **该怎么调** | 少用。仅当「大家都在高峰次日退房、把次日留空」且次日其实仍热。 |
| **用** | 节假日退房潮会挖空下一高峰；或运营上高峰日不想大量退房（运营理由要单独说，不是 RM 主工具）。 |
| **不用** | 当默认节假日动作。CTD 比 MinLOS 更难向客人解释，过度会丢预订（**B** 实践警告）。 |

### 1.5 AP（Advance Purchase，提前预订围栏）

| | |
| --- | --- |
| **定义** | 必须提前 N 天预订（常叠加预付/不可退）。是 **价格围栏**，也常在限制层开关。 |
| **该怎么调** | 弱日：开 AP，折扣走 `how-much-to-move.md` 档 E（**BAR 不动，−3–5%**）。高峰/压缩：**关 AP**，避免低价锁死高峰。 |
| **中国预付（Hypothesis，不是平台 2026 规则）** | 携程/美团「预付不可退 / 提前 N 天」是围栏产品。高峰默认关或收到与新 BAR 同层；弱日可开。佣金/神券扣点按用户合同，不编行业率。 |

### 1.6 Closed / Open（限制意义上的开闭）

与库存 Close 不同：这里是 **对到达/产品/渠道的停留规则开闭**。一句里必须说清关的是「房」还是「到达」还是「某 Rate Plan」。

```
Closed + 无 MinLOS     = 该层不卖
CTA                    = 卖给已在住的，不卖新到达
MinLOS                 = 卖给肯连住的新到达
Open、无限制            = 单晚也可订
```

---

## 2. Peak vs Shoulder vs LOS vs Compression

四件事先分开，再决定限不限单晚。

| 词 | 顾问定义 | 不是 |
| --- | --- | --- |
| **Peak** | 该节/该事件里 **过夜需求最强的夜**（常 1–3 夜）。必须由 Pace/Pickup/历史/竞对满 之一旁证，不能只用日历。 | 「放假的每一天」 |
| **Shoulder（肩日）** | Peak 的 −1 / +1，有时 −2/+2。需求来自提早到达、延住、布撤展、返程。 | 自动垃圾日；也不是自动第二高峰 |
| **LOS** | 一笔连住长度。高峰+肩日组合的总收入经常 > 高峰单晚。 | 平均住几晚的年度 KPI 本身 |
| **Compression** | 可售供给相对需求变紧：自身将满、竞对满、城市事件。 | 「当地有活动」旗标 |

**日历形状（顾问先画再动限制）：**

```
肩日(−1) ── Peak ── 肩日(+1)
  开/包装      限单晚+关低价     开/包装或跟半档
```

节假日是 **一段日历** 不是一天（P06）。中国调休会制造假周五/假周中——STLY 比公历 LY 重要。

---

## 3. 高峰要不要限单晚

**默认不是「高峰一律禁单晚」。** 问四件事：

1. 单晚会不会把 Peak 占满，使肩日卖不掉？  
2. 肩日 OTB / 历史是否明显低于 Peak？  
3. overnight 是否已证实（住一晚看演出/过节 vs 当日往返）？  
4. 竞对是否也在限，或我们会成为「唯一可订单晚」而被掏空？

| 答案 | 单晚 | 限制 |
| --- | --- | --- |
| 1+2+3 为是 | **限** | 高峰 MinLOS=2（首选）或高峰 CTA |
| 只 1，肩日未知 | 今天不限 | 只关低价；IF 补肩日再设 |
| overnight 否 | 不按事件限 | 按普通 Pace |
| Peak 仍厚、肩日已热 | 不限单晚 | 只涨/关低价 |
| 价已最高 + 仍会被单晚切碎 | 限 | **只限制不涨** |
| 淡 / 市场也弱 | **开单晚** | 解开 MinLOS，不降价冒充策略 |

「限单晚」落地 = MinLOS 或 CTA，**不是**把 BAR 关了。BAR 保持 Open 给符合 LOS 的人。

---

## 4. 何时用限制代替降价或涨价

限制是第三杠杆。先排除供给没开（限制过严本身会造成假 Slow）。

| 你想达到 | 先用 | 不要先用 |
| --- | --- | --- |
| 高峰被单晚切、肩日空 | **MinLOS / CTA** | 再涨 20% 指望单晚客人自己加夜（他们更可能改住别店） |
| 价已最高，仍卖太快 | **关低价 + MinLOS** | 第三刀涨过最高竞对 |
| 价低、卖太快、单晚不是主问题 | **涨价 + 关低价** | 只设 MinLOS 而价仍地板 |
| OCC 假低、限制过严 | **解开限制** | 降 BAR |
| 弱日卖不动、价高 | **围栏 AP −3–5%** 或小步降 | 用解开高峰 MinLOS 当「促销」却解在高峰上 |
| 弱日低价可能跨进高峰 | **弱日 MaxLOS / 高峰关 AP** | 整段假日统一深折 |
| 信号冲突 | **先不动限制** | 又涨又加严 MinLOS |

**代替涨价的条件（必须同时）：** BAR 已 ≥ 全部可比竞对 **或** 再涨会明显跳出带；**且** 问题是 LOS 结构不是价位。否则限制是配套，不是替代。

**代替降价的条件：** 看起来慢，其实是 MinLOS/CTA 挡短住——解开该日限制，BAR 不动。

---

## 5. 中国节假日 / OTA（Hypothesis vs 平台事实）

| 点 | 类型 | 写法 |
| --- | --- | --- |
| 2026 国庆放假 10/1（四）–10/7（三）；调休上班 9/20（日）、10/10（六） | **Fact** | 国办发明电〔2025〕7号，中国政府网 2026-08-20 核 |
| 哪几天是酒店 Peak | Hypothesis | 按店型：景区多在 10/1–3；城区商务可能 9/30 夜 + 10/1；返程 10/6–7 对枢纽店是另一峰 |
| 国庆 MinLOS=2 或 3 | Hypothesis | 只盖已证实 Peak，不盖满 7 天 |
| 预付围栏高峰关、弱日开 | Hypothesis | 与 P19 方向一致；折扣深度不写死 |
| 渠道配额 | Hypothesis | 高峰收低价 OTA 配额；BAR 层保持可订 |
| 2026 某平台「连住加分/排名」 | **Unknown** | 不写成规则 |

---

## 6. 观察与解开

设限制后 24/48h 与价同一尺（300 间：<3 / 3–7 / ≥8）：

| 信号 | 动作 |
| --- | --- |
| 24h 净 Pickup < 阈值低，且短 LOS 询单/拒单上升 | **解开** 当天新 MinLOS/CTA；低价不自动重开 |
| 24h 3–7 | 守 |
| 24h ≥8 且非一团、肩日开始动 | 守限制；价按 Increase BAR 第二刀规则 |
| 取消翻倍或 ≥总房 2% | 停加严；不自动大降 |
| 肩日仍 0、高峰将满 | 检查 MinLOS 是否只盖高峰；肩日保持 Open + 连住包装 |
| 竞对全部开单晚、我们独限、Pickup 死 | 解开 CTA/MinLOS，价按原带 |

---

## 7. 证据（2026-08-20 核）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| Stay restrictions = MinLOS / MaxLOS / CTA / CTD（+ 有的把 hurdle 算进去） | B | Lighthouse 2025-06-27 | https://www.mylighthouse.com/resources/blog/guide-hotel-stay-restrictions-tips-revenue-manager |
| 同名定义互证 | B | Hotel Tech Report；NetSuite | https://hoteltechreport.com/news/stay-controls-hotel-revenue-management ；https://www.netsuite.com/portal/resource/articles/accounting/hotel-stay-contols.shtml |
| LOS 控制为课主题 | A | eCornell Forecasting and Availability Controls | 见 inventory-control 同链 |
| LOS / ALOS 用于 min/max stay | A Vendor | Duetto Glossary | https://www.duettocloud.com/en-us/glossary |
| 2026 国庆/调休日历 | S（政府通知） | 中国政府网 | https://www.gov.cn/zhengce/content/202511/content_7047090.htm |
| 「高峰必须 MinLOS=2」官方法 | — | **未找到** | 本库条件句为 Hypothesis |
| MinLOS 作用在到达日还是在住夜 | — | 系统相关 | NV-RST-01 |

未采用：某实践文「RevPAR +15–20%」（D，无样本）。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-RST-01 | MinLOS 挂在到达日还是每一夜 | 建议里写「到达日=Peak 或 Peak−1」+「覆盖 Peak 夜」；执行时问用户系统口径 |
| NV-RST-02 | CTA 是否比 MinLOS「对客人更不可见」 | 不当 Fact；按结构选工具 |
| NV-RST-03 | 中国客人节假日对 MinLOS=3 的接受度 | 第一刀优先 =2；=3 要连续 Peak≥3 + 竞对也在限 |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。Peak/Shoulder/LOS/Compression 分开。限单晚有条件，不是节假日默认。 |
| 2026-08-20 | Wave7：P21 + los-optimization 已 drafted。 |
| 2026-08-20 17:00 CST | P33 Restriction 过度已 drafted。OCC 假低且限制开着 → `do-not-cut-when-restricted.md`，不要先降 BAR。 |

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。
