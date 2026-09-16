# Inventory Control｜库存控制（顾问可调用）

> 资产：Wave4 理论卡  
> 路径：`inventory/inventory-control.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 配套：`metrics/inventory.md` · `restrictions/restriction-framework.md` · `pricing/pricing-framework.md` · `forecasting/forecast-framework.md`  
> 问题树：§1.7 库存是否开放 · §5/§8 早满 · §11 房型  
> 过程：`decision-framework/advisor-process.md`（动作必须落到 Inventory）  
> 禁止：写 PMS / CRS / Channel Manager 点击步骤；把关房当唯一保护手段；把「剩余=0」写成市场卖光；伪造精确增收。

---

## 0. 一句话

**Price 和 Inventory 是两大杠杆。** 价决定「以什么保留价格卖」；库存决定「还允许多少、哪一类、哪条渠道还能买」。顾问必须能说出该 Open / Close / 限额 / 保护哪一层，而不是说「优化库存」。

```
价（BAR / 围栏 / 差价）     → 谁愿意付
库存（开闭 / 限额 / 保护 / 配额） → 还让谁买得到
限制（MinLOS / CTA …）       → 以什么组合买    ← 见 restriction-framework
```

三件套同时存在。只改价、库存仍开着低价产品 = 涨价被打穿。只关库存、价仍最低 = 用关房代替定价，ADR 留在桌上。

---

## 1. 顾问必须能点名的控制（定义 / 该怎么调 / 误用）

每项：**定义**（公开可核）→ **顾问怎么说**（落到 Stay Date × 对象）→ **何时用 / 何时不用**。不写系统操作。

### 1.1 Open / Close（开 / 关）

| | |
| --- | --- |
| **定义** | 某一层（房型 / Rate Plan / 渠道 / 全店某日）是否还接受新订。Close = 该层可售变为 0（或对指定产品不可订）。Open = 重新接受新订。 |
| **证据** | B（行业通行控制，与问题树 §1.7 一致）。厂商把 Close 当 Availability Control 的一种（eCornell *Forecasting and Availability Controls* 课纲主题 **A**，2026-08-20 打开课页，不摘讲义）。Duetto：Denial = 因售罄或房型不可订不报价（**A Vendor**，Glossary 2026-08-20）。 |
| **该怎么调** | 写清 **哪一天、哪一层、开还是关、关完客人走哪条路径**。例：「10-03 基础大床：关闭一切公开价 <999 的促销；BAR 与直销保持 Open。」禁止「把库存关一关」。 |
| **用** | 低价产品在高峰/压缩日仍可订；某渠道在破价；某房型只剩升级路径。假低 OCC：渠道/房型误关 → **先 Open，不降价**（见 `open-inventory-false-low-occ.md`）。 |
| **不用** | 用 Close 全店代替涨价（价还低于竞对时，先涨或先关低价，不关 BAR）。DTA 仍长、Remaining 厚、无压缩 → 关主渠道等于自己制造 Slow Pickup。 |

**顾问句式：**

```
Stay Date __：<层> 从 Open → Close / Close → Open。
关完后可订入口：BAR / 直销 / 高档房。
不要关：BAR 本身（除非物理/OOO/真满）。
```

### 1.2 Booking Limit（订座限额）

| | |
| --- | --- |
| **定义** | 某类需求（房价档 / 细分 /  allotment）**最多还能被接受的间数**。经典数量控制：低档有上限，高档可以使用低档未售部分（见 Nested）。 |
| **证据** | **S 书目**：Talluri & van Ryzin 2004 以 Single-Resource Capacity Control 为正式主题（Booking Limit / Protection；**不摘正文**）。Belobaba 1989 EMSR（**S** DOI 记录）。Amadeus Hotel Admin 公开帮页：nested allotment 的 booking limit 保护父库存不被低价早填满（**A Vendor**，2026-08-20 检索可见）。 |
| **顾问怎么说** | 不报 EMSR 最优整数。说：「低价/协议/某渠道的可售上限收到 __ 间或剩余的 __%」。给不出点 → 给区间 + 首选，标 Hypothesis。 |
| **用** | 压缩路径上限制低价值需求的数量，同时 BAR 仍 Open；接团时给团一个上限而不是整日 Close。 |
| **不用** | 无 Forecast / 无低价产品列表时，把「建议 Booking Limit=17」写成 Fact。无本店数据时用 **剩余的 30–50%** 作低价渠道配额上限（Hypothesis，与 Protect 卡同一尺）。 |

**骨架（行业通行，不是摘录）：**

```
BookingLimit(低档) ≤ 愿意卖给低档的最大间数
高档仍可订 ⇔ 总剩余 > 0（Nested 时）或高档自己还有保护
```

### 1.3 Sell Limit（可售上限 / 店级或房型级）

| | |
| --- | --- |
| **定义** | 某日在 House / Room Class / Room Type 层「最多卖到多少间」。可高于物理房量（正超售）或低于物理房量（主动少卖 / 留房）。 |
| **证据** | Oracle OPERA Cloud 26.2 官方帮页（2026-08-20 打开）：Sell Limit 按日期与库存层设置；**正值** = 在物理房上加可售（对冲取消/No-show）；**负值** = 从物理房扣减可售（阻止某型继续卖）；零可用来在一段日期里抠掉个别 DOW。**A Vendor Methodology**（字段名，不是本库超售公式）。 |
| **该怎么调** | 「10-03 全店 Sell Limit 收到物理 − 预留」= 留房；「基础大床 Sell Limit 收到 OTB+X」= 该型即将穿时停卖低入口。正超售只建议方向，无取消史不得给精确超售间夜（过程文件 O11）。 |
| **用** | 房型压缩、要留高价尾部、已知洗房/No-show。 |
| **不用** | 把 Sell Limit 当涨价。价仍最低时先关低价再谈少卖。 |

### 1.4 Protected（保护水平 Protection Level）

| | |
| --- | --- |
| **定义** | 为**更高价值**需求预留、不卖给更低档的数量。与 Booking Limit 对偶：低档限额 ≈ 容量 − 高档保护。 |
| **证据** | Talluri 2004 / Belobaba EMSR 为 **S 书目**（保护水平是数量控制核心对象）。公开会计释义：nested 规则允许高价占用原留给低价的容量，反向则不可（AccountingTools，2026-08-20 打开，**B** 定义互证，航空例，酒店映射是 Hypothesis）。 |
| **该怎么调** | 「为散客高价 / 基础房尾部 / 会员直销 **保护 __ 间**」。酒店日常落地常表现为：关低价、收渠道配额、房型不继续外售——不必要求 PMS 有名为 Protection 的字段。 |
| **用** | Days-to-Sellout < DTA；事件/节假日高峰；某基础房先穿。留多少给高价尾部：见 §4（Hypothesis）。 |
| **不用** | 把「保护 100%」写成关光所有渠道。保护过度 = 假低 OCC（走 Open 卡）。 |

### 1.5 Shared（共享库存）

| | |
| --- | --- |
| **定义** | 两个以上售卖对象（虚拟房型 / 包价 / 渠道产品）扣**同一池物理房**。一间卖掉，相关可售一起减。 |
| **证据** | B（PMS/CRS 普遍机制）。Amadeus PMS 帮页有 room type 链接以在一种售出时调整另一种可售（**A Vendor** 字段级）。本店映射 **Need Verification（NV-INV-01）**。 |
| **该怎么调** | 先问「这两个产品是不是同一物理池」。是 → 关/涨其中一个等于动整个池；不要以为关「标准间促销」还留着「大床可订」如果两者 shared。 |
| **误用** | 把 shared 当独立房量加总 → 超售或假剩余。 |

### 1.6 Nested（嵌套）

| | |
| --- | --- |
| **定义** | 高价值档可以使用低价值档未售的容量；低档**不能**占用高档保护。避免「拒高价、留着低价配额」。 |
| **证据** | **S 书目**（Talluri 容量控制；Belobaba 1989）。SSRN *Nesting Booking Limits…*（2008）讨论 threshold vs net nesting（**S/A 论文书目**，本轮未精读全文，不把哪种 nesting 写成酒店真理）。Amadeus nested allotment 帮页（**A Vendor**）。 |
| **酒店映射（Hypothesis / B）** | 房价档嵌套：BAR 开着时，促销档有 Booking Limit，卖高价会「吃掉」低价剩余。房型嵌套：套房可向下占用标准间保护，标准间不能向上占套房（或相反，取决于升级路径——问用户）。 |
| **该怎么调** | 「低价嵌在 BAR 之下：先把低价 Booking Limit 收到 __；BAR 保持 Open，高价仍能卖到物理剩余。」不要平行切块（partition）把高价锁死在一个永远卖不完的套房配额里。 |
| **不用** | 在不明 nesting 方向时指挥「把套房配额加到标准间」。先问 shared / nested / dedicated。 |

### 1.7 Room Type Inventory（分房型库存）

| | |
| --- | --- |
| **定义** | 可售按房型拆。总 OCC 健康但某型已穿 = 结构问题，不是「店已满」。 |
| **证据** | 问题树 §11；Protect 卡分房型表；`metrics/inventory.md`。 |
| **该怎么调** | 先报 **分型 Remaining + 该型 Days-to-Sellout**。基础型 ≤3 日卖完、高档仍厚 → 涨/关**该型**低价，高档不降来「平衡 OCC」。基础已空 → 不再砸高档清库存，走升级。全型都快 → 全店关低价 + BAR 第一刀，套房幅度不超过基础第一刀百分比（与 P09 一致）。 |
| **未知房型** | 只动 BAR / 基础售卖房。套房差价今天不动。 |

### 1.8 Channel Inventory（渠道库存 / 配额）

| | |
| --- | --- |
| **定义** | 某渠道（直销、OTA、GDS、批发）被分配的可售上限。渠道剩余=0 ≠ 全店剩余=0。 |
| **证据** | Duetto Glossary：分销是把库存和价格铺到多渠道（**A Vendor**，2026-08-20）。STR Forward：某渠道满不是市场满（指标卡已写）。 |
| **中国 OTA（Hypothesis，不是 2026 平台规则）** | 店常给携程/美团/飞猪设 **配额 / 房态**。配额 0 会造成「OTA 上看不到 → 店内 OCC 假低」。顾问只问用户「该日该渠道可售是否 >0、是否与直销同价」。**不写** 2026 佣金率、神券扣点、排名公式——平台事实 Unknown 就标 Unknown，按用户合同。 |
| **该怎么调** | 假低 OCC：先把主 OTA + 直销 Open 到与 BAR 同层，配额给到至少能被搜到的水平（用户给不出数 → 「先恢复与直销同开，配额不要为 0」）。压缩日：低价 OTA 促销配额收到剩余 30–50% 或关破价，**BAR 层保持可订**（Hypothesis）。 |
| **不用** | 为冲排名无条件加配额（P18 未写完前：弱日可议、事件日默认拒破价）。只改一个 OTA、直销仍关或仍低价 → 串价。 |

---

## 2. 两大杠杆怎么配（强制顺序）

```
1) 库存/渠道没开、限制过严     → 只修供给，不动价
2) 开着，但低价在打穿 BAR      → 先关低价 / 收限额（可逆）
3) 价明显低于需求位置          → 再涨 BAR（how-much-to-move）
4) 价已 ≥ 全部可比竞对          → 只关 / 只限，不涨
5) 高峰 + 肩日数据齐            → 才评 MinLOS（限制框架）
6) 真满 / DTA 极短              → 管取消替换价与是否建议超售；已满日不事后降价「补」
```

与 Protect 卡、Increase BAR 卡同一顺序：**先关破价，再涨；价已最高只关不涨。**

Competitor Rate 只参与「是否已最高」，不单独决定关多少房。

---

## 3. Days-to-Sellout 与「留多少给高价尾部」

公式与理论卡一致（Hypothesis，未扣衰减/一团/取消）：

```
Days-to-Sellout = Remaining / 近期日均净 Pickup
分母为 0 → 写「本窗无成交，不能用此式」
```

| 判断 | 库存动作（Hypothesis） |
| --- | --- |
| Days-to-Sellout > DTA × 1.5 | 不保护；先问是不是没开 |
| 约等于 DTA | 盯；可关明显破价 |
| < DTA 或 < DTA × 0.5 | **保护**：关低价 + 收低价限额 |
| ≤ 2 且 DTA 仍 > 2 | 进入 Sellout Risk（P03）：留尾部，不把剩余按当前低价卖完 |

**留房启发式（Hypothesis，待 feedback；不是 EMSR）：**

```
目标：不要在 DTA 的前一半把剩余卖完。
粗锚：至少为「历史同 DOW 最后 3 日净 Pickup 中位」留出等量房间；
无历史：留 Remaining 的 20–30% 给 DTA≤3 的高价尾部，或留到 Days-to-Sellout ≈ DTA。
给不出点：写区间（留 15–35%）+ 首选 25%，并标 Hypothesis。
```

禁止：假设剩余全部按新 BAR 卖完；把留房写成精确增收。

---

## 4. Theory → Decision

| 理论点 | 决策 |
| --- | --- |
| 数量控制保护高档 | 低价先限额，高价保持 Open |
| Nested 优于平行切块 | 不要把高价锁在卖不掉的专用块里 |
| Shared 共池 | 先映射物理池，再关某一个虚拟产品 |
| 渠道库存 ≠ 全店库存 | OCC 低先查配额/房态，不降价 |
| Close 制造 Denial | 关错层会看起来像「没需求」 |
| 价与库存是两杠杆 | 价低且快 → 关+涨；价已最高且快 → 只关 |

---

## 5. 证据（2026-08-20 核）

| 论断 | 级 | 源 | URL / 检索 |
| --- | --- | --- | --- |
| 容量控制 / Booking Limit / Protection 为教材主题 | S 书目 | Talluri & van Ryzin 2004 | https://link.springer.com/book/10.1007/b139000 （**不摘正文**） |
| EMSR / 嵌套订座限额 | S | Belobaba 1989 *Operations Research* 37(2) | https://doi.org/10.1287/opre.37.2.183 （本轮未打开全文，不摘公式） |
| Nested = 高价可占低价块 | B | AccountingTools 定义页 | https://www.accountingtools.com/articles/nested-booking-limit |
| Nested allotment booking limit 保护父库存 | A Vendor | Amadeus Hotel Admin 帮页 | 检索 `Amadeus allotment booking limits nested` |
| Sell Limit 正=超售、负=少卖；House/房型层 | A Vendor | Oracle OPERA Cloud 26.2 | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_availability_setting_sell_limits.htm |
| Availability / LOS 控制为 Cornell 课主题 | A | eCornell Forecasting and Availability Controls | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/forecasting-and-availability-controls-in-hotel-revenue-management/ （打开课页；讲义数字 **未引用**） |
| Price and Inventory Controls 课：先控价档再加 LOS | A | eCornell Price and Inventory Controls | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/price-and-inventory-controls/ （检索摘要；WebFetch 本轮 timeout，不摘讲义） |
| Denial / 分销定义 | A Vendor | Duetto Glossary | https://www.duettocloud.com/en-us/glossary |
| 「应留 X% 给尾部」官方门槛 | — | **未找到** STR/HSMAI 页 | NV-INV-02；§3 为 Hypothesis |
| 中国 OTA 2026 配额/房态规则 | — | **不写** | 按用户后台；平台事实 Unknown |

未采用：厂商「自动化限制可增收 xx%」（营销话术 D）。

---

## 6. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-INV-01 | 本店房型是 shared / nested / dedicated | 先问映射；未知则只动 BAR/基础房 |
| NV-INV-02 | 高价尾部应留比例 | 15–35%，首选 25%；有最后 3 日历史则用历史 |
| NV-INV-03 | PMS「房态/配额/可售」字段与 Close 的对应 | 问用户哪一层为 0 |
| NV-INV-04 | 中国 OTA 配额是否影响曝光 | Hypothesis：配额 0 → 不可订；>0 的排名效应 **Unknown** |
| NV-INV-05 | threshold vs net nesting 酒店该用哪一种 | 不选边；只要求「高价不被低价拒」 |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。两大杠杆 + 九个控制对象。幅度与留房为 Hypothesis。 |

## 8. 一行（2026-08-27 18:17，不改上文）

§1.6 Nested 日常误用过程（低档仍开 / 关低≠涨BAR / 弱夜关光）→ **P64** `advisor-playbooks/nested-rate-class.md`。NV-INV-01 仍先问 shared/nested/dedicated。本文件定义不改。
