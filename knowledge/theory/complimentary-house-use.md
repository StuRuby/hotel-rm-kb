# Complimentary / House Use｜免费房占物理房，但不进 STR 历史 Sold

> 资产：T-Comp / T06 伴生理论卡  
> 路径：`theory/complimentary-house-use.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-24  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR Glossary Rooms Sold / Occupancy / Demand；STR Historical Benchmarking Data Reporting Guidelines · Reporting Rooms Sold）；A（STR Forward STAR Rooms Booked 含 Complimentary / house use / owner-occupied）；A 转述（HotStats Permanent House Use 6+ months 出 Available — 指针 P37，本卡不重写）；B（店内 PMS 在店 OCC 常含免费/自用）  
> 配套：`metrics/complimentary-house-use.md` · `recommendations/dont-raise-on-comp-occ.md` · `metrics/occ.md` · `metrics/adr.md` · `theory/capacity-ooo.md`（永久自用 / OOO）· `overbooking/overbooking-framework.md` §1（stayover + arrivals，不另发明 Occupied 公式）  
> 问题树：§53 「OCC 92% 还要不要涨（10 间免费）」· 「ADR 掉了要不要补涨（分母含 Comp）」  
> 状态：**P47 drafted**（2026-08-24 18:17 CST）· `advisor-playbooks/complimentary-house-use.md`（主卡复用 `dont-raise-on-comp-occ.md`，不重写卡）。禁止：写政府协议价剧本；编华住 SOP；编中国 PMS 字段名；编 Comp % / Walk 成本 / 399 行情 Fact；重写 P37 / occ 公式 / adr 公式 / P44 / P46 正文；把瞬态免费当成 Permanent House Use；操作 PMS。

---

## 0. 一句话

**STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。**  
免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。

```
Naive（禁止）     PMS OCC 92%（含 10 间 Comp）→ 涨 BAR；ADR 被 Comp 拉低 → 砍/补涨去「修 ADR」；Comp 占着的房当 leftover dump
本卡              先拆无关免费 / 临时自用。Paid OCC + 付费 Remaining + Pace 再谈价。
P37 逆命题        OOO / 永久自用砍分母 → OCC 好看；本卡 $0 无关 Comp 占分子侧物理房、不进 STR Sold。Advise 都是：不要按被扭曲的 OCC 定价
```

完成标准：用户说「OCC 92% 还要不要涨」且 10 间是免费/自用 → 先拆 Comp；缺数不编 10；不自动涨 BAR，也不把 Comp 当 dump 对象。

顾问必须能直接说的三句：

```
1. STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。
2. 免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。
3. 促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。
```

---

## 1. 物理占用 ≠ STR Sold（不要发明 Occupied 公式）

物理上当晚有人睡的房，不等于 STR 历史 Rooms Sold。Stayover / arrivals 的操作流量见 `overbooking/overbooking-framework.md` §1，**本卡不另写一套 STR Occupied = Stayover + Arrivals。**

```
Physical occupied ≈ Paid stayover/arrivals + Unrelated comps/house-use + promo-free nights
STR historical Rooms Sold = revenue-generating（含促销/合同送夜）
STR historical Rooms Sold excludes unrelated comps / owner-occupied-as-comp
Remaining physical = Capacity − occupied − OOO
```

| 桶 | 占物理房？ | STR 历史 Rooms Sold？ | 当晚 Remaining？ |
| --- | --- | --- | --- |
| 付费过夜（含已发布/协议价） | 是 | **计入**（S） | 减 |
| 促销/合同送夜（买二送一；团 50 送 1） | 是 | **计入**（S，Guidelines Include） | 减 |
| 无关免费 / 员工 / 业主 / FAM / 临时自用 | 是 | **不计**（S，Guidelines Exclude） | **减**（不是空房） |
| 业主占用且按 complimentary 处理的condo | 是 | **不计**（当 complimentary） | 减 |
| No-show | 否（没人睡） | **不计** Sold；保证类罚金可进 Room Revenue | 不因 No-show 自动变空可售——看政策与是否已释放 |
| 永久员工公寓 / Permanent House Use 连续 6+ 个月 | 长期不在可租池 | 不进 Sold；HotStats：Available **不含** 此类（A 转述） | **P37**，不是本卡 |

**顾问用法：** 定价看 **付费剩余 + Pace**（P01/P03/P45）。对标 Comp / MPI 用 **STR 历史 OCC**（Sold 已不含无关免费）。店内 PMS 在店 OCC 若把 Comp 算进占用，那是第三把尺。

---

## 2. STR 历史：哪些免费进 Sold，哪些不进

STR Glossary（S，2026-08-24 **打开**）：

- Rooms Sold / Room Demand / Room Nights Sold = 期内售出房晚，**excludes complimentary rooms**。细则见 Reporting Guidelines。
- Occupancy = Rooms Sold / Rooms Available。

STR *Historical Benchmarking Data Reporting Guidelines* · Reporting Rooms Sold（S，2026-08-24 **打开**）：

> Only revenue generating guestrooms should be reported to STR as rooms sold. Complimentary rooms should be excluded in the rooms sold figures.

| Include in Rooms Sold（S） | Exclude in Rooms Sold（S） |
| --- | --- |
| Revenue-generating rooms sold | Complimentary **not** associated with a promotion or contract（例：gratis to employees, owners, familiarization tours） |
| Partial day / day-use（另见 P44；本卡不重写钟点） | No-shows（不计 Sold） |
| Rooms occupied without charge **in connection with a promotion or contract**（例：stay two nights, get one free；book a 50-room group, get one room free） | Owner-occupied condominiums → **treated as complimentary** |

因此：

- **1+1 / 团 50+1 送夜 = 本卡「gratis」桶之外。** 它们进 STR Sold。不要用本卡去把促销赠夜从 Sold 里抠掉。
- **员工房、业主房、FAM、与促销/合同无关的请客房 = 本卡。** 占物理、不进历史 Sold。
- 中国 PMS 把哪一码叫「免费 / 自用 / 招待」= **NV**。问用户：这间有没有进今晚占用、有没有进上报 STR 的 Sold、房费是不是 0。不编西软/绿云/石基字段名。

---

## 3. Forward STAR 陷阱：OTB OCC 可以含 Comp

Forward STAR *Data Reporting Guidelines*（A，2026-08-24 **打开**）要的是未来窗的 **Adjusted Rooms Available** 与 **Rooms Booked**，回报 Occupancy on the Books 与 Pickup。

Rooms Booked = 任何因预订从 Adjusted Rooms Available **扣掉**的房。页上 Include：

- 因预订从 Adjusted 扣掉的房
- 产生收入的已订房
- Day-use / partial-day
- 促销/合同免房费占用（买二送一等）
- **Complimentary and house use**
- **Owner-occupied**

Exclude：没有从 Adjusted 扣掉的（例如不可扣的 allotment / group option）。

```
历史 STAR OCC     = 历史 Rooms Sold / Rooms Available     # Sold 不含无关 Comp（S）
Forward OTB OCC   = Rooms Booked / Adjusted Available     # Booked 可含 Comp / house use / owner-occupied（A）
```

**两套不是同一把尺。** 前瞻 Occupancy on the Books 好看，可能只是把免费/自用扣进了「已订」。拿 Forward OTB% 去对历史 Comp OCC，或拿含 Comp 的 OTB 去涨 BAR，是假口径。

P37 已写过另一半：Forward Adjusted **可以**排除 OOO；历史 Available 短 OOO **不扣**。本卡补分子侧：Forward Booked **可以含** Comp；历史 Sold **不含**无关 Comp。

---

## 4. 和 P37 / P44 / P45 / P46 怎么分

| | 扭曲从哪来 | OCC 为什么好看/难看 | 默认 Advise |
| --- | --- | --- | --- |
| **P37 / T06 OOO** | **分母变小**（PMS 扣维修；永久 HU 出 Available） | 需求没变，店内 OCC 升 | 不按好看 OCC 涨；假剩余不砸。永久 HU → **仍走 P37** |
| **本卡 T-Comp** | 无关 Comp **占物理、不进 STR Sold**；PMS 占用分母/分子常把它们算进去 | PMS OCC 虚高；STR OCC 较低；混 ADR 可能被 $0 房拉低 | **不按 Comp 抬高的 OCC 涨 BAR**；Comp 不是 leftover dump；付费剩余紧则 Comp = 置换（Hypothesis） |
| **P44 钟点** | **分子变大**（同日再卖 / 钟点进 Sold） | OCC 可 >100%，过夜剩余未必紧 | 不按 108% 涨过夜。不是 Comp |
| **P45 早会** | GM 要虚荣 OCC | 任何虚高 OCC 都可能被拿来切价 | 回可售剩余 + Pace。本卡是虚荣 OCC 的**原因之一** |
| **P46 早离** | 付费房 **回到** 库存（常是脏的） | 剩余变厚，不是需求死 | 高峰不 dump。Comp **不是**回库 |

永久员工公寓、连续约六个月+ 的 Permanent House Use：HotStats 把其从 Available 拿掉（A 转述，`theory/capacity-ooo.md` §1 / research-log 2026-08-23-0017）。**那是供给/分母事件，走 P37。** 本卡只管 **当晚还在房号池里、有人睡、$0、与促销/合同无关** 的瞬态免费/临时自用。

---

## 5. 两种误诊（本卡要挡住的动作）

### 误诊 A — PMS OCC 含 Comp → 假 High Demand / 假涨

用户原话：「OCC 92% 还要不要涨？」例（**Simulation / 用户数字，不是行业常模**）：

```
Physical              = 180
Unrelated comps       = 10
Physical occupied     = 166     # 156 paid + 10 comps
PMS OCC（含 Comp）    = 166 / 180 = 92.2% ≈ 92%
STR Sold              = 156     # 不含无关 Comp
STR OCC               = 156 / 180 ≈ 86.7% ≈ 86%
Remaining physical    = 180 − 166 = 14
```

92% 是 **把免费算进占用的店内尺**。付费 OCC ~86% 才接近 STR。14 间空着已经扣过 Comp——那 10 间不是还能卖的 leftover。自动 Increase BAR 是在奖励请客房。

缺 Comp 间数 → **问，不编 10。** 条件化：若无关免费 ≈ 0，再按原 OCC 进 P01/P03；若实质 → 先划掉。

### 误诊 B — ADR 掉因为 Comp 进了占用分母 → 假「修 ADR」

若店内 ADR = Room Revenue / **含 Comp 的占用**：

```
Room Revenue ≈ 156 × 799     # Simulation 付费均价 799，不是行情
PMS ADR（含 Comp 分母）≈ 124,644 / 166 ≈ 751
STR ADR = Room Revenue / Rooms Sold ≈ 124,644 / 156 = 799
```

ADR「掉了」可能只是 $0 房进了分母，**不是**付费需求变弱，也不是 BAR 太低。

- **不要砍 BAR** 去「修 ADR」。
- **也不要涨 BAR** 去「修 ADR」——除非付费 Pace Ahead 且付费剩余真紧（那走 P01/P03，理由是付费剩余，不是 751）。
- 重算 **付费 ADR（Hypothesis）** = Room Revenue / (Occupied − unrelated comps)。STR ADR 分母本就不含无关 Comp（S）。

### 误诊 C — Comp 占着当 leftover dump

P05 的 dump 对象是 **付费空着、真弱、还能卖** 的房。Comp 正在睡的房不是 leftover。物理剩余已经减过它们。高峰若付费需求还在，再送免费 = **置换**（Hypothesis：建议当晚少送/改期/改房型，**不是**华住 SOP，不编必须百分比）。

禁止一夜 −15%。不要把 BAR 改成清 Comp 的特价。

---

## 6. Diagnose → Advise

用户原话：「OCC 92% 还要不要涨 / ADR 掉了要不要补涨。」

```
1. 92% / ADR 里有几间是无关免费、临时自用、业主、FAM？
   不知 → 问，不编 10。促销 1+1 / 团 50+1 → STR Sold，不是本卡。
2. 永久员工公寓 / 关了 6+ 个月？ → P37，不是本卡。
3. 付费 Sold、付费 Remaining、Pace？
   付费剩余厚 + Pace 不 Ahead → 不涨。92% 是 Comp 抬的。
   付费剩余紧 + Pace Ahead → P01/P03。理由是付费剩余，不是 92%。
   Comp 把物理剩余削薄、付费需求仍在 → 当约束库存：不 dump；Hypothesis 劝当晚少送免费。
4. ADR 掉：先重算付费 ADR / STR ADR。不要为修报表砍或涨。
5. 对标 Comp：本店 PMS（含 Comp）vs STR Comp（Sold 不含）→ 那几个点不作 MPI。
6. OTB% 好看：问是不是 Forward Occupancy on the Books（可含 Comp）。历史 Sold 不含。不要混。
```

幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **别拿无关免费抬高的 OCC/拉低的 ADR 去改 BAR。**

尺（Hypothesis，与全库带一致；799 只 Simulation）：过夜 **Hold 779–799 首选 799**，除非付费剩余重算后真进 P03。

T19：Comp 夜贡献 ≈ 0 或负（布草/早餐仍可能发生）。高峰送免费的机会成本是当晚付费 BAR，不是 0。无变动成本仍不编金额。  
T20：不把「修 OCC/ADR」写成砸品牌底的理由；无地板不发明 699。

政府协议价 / 协议续住：**未写。** 不要把政府价当 Complimentary，也不要把本卡当政府价剧本。

---

## 7. 证据（2026-08-24 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Rooms Sold / Demand / Room Nights Sold **excludes complimentary rooms**；OCC = Sold / Available | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/glossary （2026-08-24 打开） |
| 历史 Sold：只报产生收入的客房；**含**促销/合同免房费占用（买二送一、团 50 送 1）；**不含**与促销/合同无关的 complimentary（员工/业主/FAM）；No-show 不计 Sold；业主占用condo 当 complimentary | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （2026-08-24 打开） |
| Forward Rooms Booked **含** Complimentary and house use、owner-occupied（若已从 Adjusted 扣掉）；含促销免房费占用 | A | **Known 前瞻口径；≠ 历史 Sold** | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines （2026-08-24 打开） |
| Permanent House Use 连续六个月+ 员工自用 → Available 不含 | A 转述 | **P37 已用；本卡只指针，不新编** | HotStats *Rooms Department and Operating Metrics*（2026-08-23 0017 已开，见 `theory/capacity-ooo.md`） |
| 店内 PMS 在店 OCC 是否含 Comp / 自用 | B 须声明 | **NV 字段名** | 用户报表；不编中国 PMS 名 |
| 华住 SOP；Comp 行业占比；Walk 成本；399 行情；政府协议价 | — | **NV。不编。** | — |

未采用：未打开的 USALI 全书页码；未打开的 Rothstein；编造的「STR Occupied = Stayover + Arrivals」页（14:17 已记未找到，继续用框架 §1）。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-COMP-01 | 中国常见 PMS（西软/绿云/石基等）免费、自用、招待、补偿房的**报表字段名**与是否进占用/进 Sold | 问用户截图；不编字段 |
| NV-COMP-02 | 本店 PMS OCC 是否把 Comp/临时自用算进占用 | 必须声明；未声明则 STR OCC 与 PMS OCC 两套都算 |
| NV-COMP-03 | 本店上报 STR 时是否已按 Guidelines 剔除无关 Comp | 问；未声明则不要把 PMS OCC 当 STAR |
| NV-COMP-04 | Forward 接口是否把 Comp/house use 扣进 Rooms Booked | 问 RMS/CRS 映射；默认按 Forward 页 Include |
| NV-COMP-05 | 政府协议价是否被店内误标成 complimentary | **政府价剧本未写。** 先问有没有房价；有价就不是本卡 gratis |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 16:17 CST | 首版。T-Comp。历史 Sold 不含无关免费；Forward OTB 可含 Comp；PMS OCC 可能含。不写 P47。永久 HU → P37。政府价不写。 |

---

## 10. 交叉（不改 P01–P46 / P37 / occ 公式正文）

- **P37**：缩分母（OOO / 永久 HU）。本卡占房 $0 且不进历史 Sold。不要混成一句「数据不准所以乱调」。  
- **P44**：胀分子的是钟点再卖，不是 Comp。  
- **P45**：虚荣 OCC；本卡是原因之一。早会仍回付费剩余 + Pace。  
- **P05**：leftover 是付费空房。Comp 占用 ≠ leftover。  
- **P46**：早离把**付费**房还回来（脏）。Comp 不是回库。  
- **P01/P03**：付费 Remaining + Pace，不是 PMS 92%。  
- **T19 / T20**：高峰免费机会成本是付费 BAR；无地板不发明 699。  
- **禁止一夜 ±15%。**  
- Advisor-First：建议拆口径、Hold/不涨、不 dump、当晚少送免费（Hypothesis）。不点 PMS 免费码、不代报 STR。

- **T-Status / `theory/group-inventory-deduct.md`（00:17）：** Comp 抬分子 ≠ 暂定可能不改分母。Advise 两边都是「先拆尺再定价」。

- **T-Guar / `theory/guarantee-release.md`（08:17）：** Comp 抬分子（$0 占房）≠ 放房前的 OTB 分子掺了会到点蒸发的 hold。Advise 同一句：先拆尺，再定价。
