# Playbook P47｜Complimentary / transient House Use｜免费房 / 临时自用把 OCC·ADR 看歪

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/complimentary-house-use.md`  
> BACKLOG：P47 Complimentary / transient House Use · HIGH · 先决策卡（卡已有）· slug **complimentary-house-use**  
> 状态：**drafted**（2026-08-24 18:17 CST）  
> 配套卡：`recommendations/dont-raise-on-comp-occ.md`（主卡；本剧不另开第二张卡；**不重写卡正文**）  
> 理论：`theory/complimentary-house-use.md`（T-Comp）· `metrics/complimentary-house-use.md` · `metrics/occ.md` · `metrics/adr.md`  
> 交叉：P37 分母缩小（OOO / 永久 HU）≠ 本剧分子侧 $0 占用；P44 钟点胀分子 ≠ Comp；P45 虚荣 OCC 仪式，本剧是原因之一；P05 dump 只砸付费 leftover；P46 ED 还的是付费脏房，Comp 不是回库；P01/P03 只看**付费** Remaining + Pace  
> 问题树：§53 「OCC 92% 还要不要涨（里面有免费房）」「ADR 掉了要不要补涨」「空着的其实是请客房今晚砸不砸」  
> 仿真：`cases/sim-2026-comp-occ-92-sat.md`（**Simulation**；复用 16:17 卷，18:17 追加十节）  
> 证据等级：S（STR Historical Rooms Sold 不含无关 complimentary；含促销/合同送夜）；A（Forward Rooms Booked 可含 Complimentary / house use / owner-occupied）；B（店内 PMS 在店 OCC 常含免费/自用）；中国报表名 / Comp % / Walk 成本 **NV**  
> Last Verified：2026-08-24  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议拆口径、Hold / 不涨 / 不 dump / 劝停新送免费 / 移交 P01·P03·P05·P37。**不操作 PMS**、不点免费码、不改房态、不代报 STR。  
> 禁止：编造华住 SOP；编中国 PMS「免费/自用/招待」字段名当 Fact；编 Comp %；Walk 成本；把 399 写成行情 Fact；一夜 −15% 当新 BAR；无 Comp 数就发明 10；按虚荣 92% 挂 899；把促销送夜当无关 Comp；把永久宿舍当本剧；写政府协议价剧本。

---

## 0. 一句话

STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。  
免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。  
促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。

完成定义：一张「先拆无关 Comp → 重算付费 Remaining / 付费 ADR → Hold 或移交」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | PMS OCC 92% | 无关 Comp 进了占用 | **不**按那张 OCC Increase BAR。重算付费剩余 + Pace。付费仍紧 **且** Ahead → 才 **P01/P03**，理由是**付费**剩余，不是 92% |
| **B 假剩余** | 「还空着」/ 看起来能砸 | 空着的其实是 Comp 在住，或把占住房当成 leftover | **不 dump**（不是 P05 leftover）。物理 Remaining 已经减过它们 |
| **C 假 ADR 病** | ADR 掉了，要砍或补涨「修均价」 | Comp 进了占用分母，$0 房拉低混 ADR | **不砍不涨去修 ADR**。重算付费 ADR / 用 STR ADR |
| **D 促销/合同送夜** | 买二送一、团 50+1，有人要把赠夜从 Sold 抠掉 | STR **计入** Sold（S） | **退出本剧 gratis 桶。** 不当无关 Comp |
| **E 永久自用/宿舍** | 经理公寓 / 员工宿舍关了 6+ 个月 | Permanent House Use 出 Available | **P37**，离开本剧 |
| **F 高峰还在新送免费** | 付费剩余已紧，销售今晚还要再送 FAM/请客 | 再送 = 置换当晚 BAR，不是待客赢 | **劝停当晚额外无关 Comp**（Hypothesis，无 SOP、不编配额%） |

顾问必须能直接说的三句（与理论卡同一套，不另发明）：

```
1. STR 历史 Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆出 Comp/临时自用再谈涨价。
2. 免费/自用仍占物理房，Remaining 要减；不要当空房去 dump，也不要因 PMS OCC 虚高就涨 BAR。
3. 促销/合同送夜算 STR Sold；员工/业主/FAM 无关免费不算。正向 OTB 可能反而把 Comp/house use 算进 Occupancy on the Books——两套口径不要混。
```

独立默认（本库 Hypothesis）：当晚定价用 **付费 Remaining + Pace**。历史 STAR / MPI 用 **STR Sold**（不含无关 Comp，S）。Forward Occupancy on the Books **可以含** Comp/house use（A）——不要拿去对历史 Comp，更不当涨价令。缺 Comp 数 → **问，不发明 10**。

尺（Hypothesis；799 只 Simulation）：过夜 **Hold 779–799 首选 799**，除非付费剩余重算后真进 P03。禁止 899 出虚荣 92%；禁止 399 dump 占着的 Comp。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「OCC 已经 92%，要不要再涨？」且口头/报表有免费、自用、招待、FAM、业主房 |
| S2 | 「ADR 掉了，要不要补涨 / 砍一刀把均价拉回来」且占用里可能有 $0 房 |
| S3 | 「还空着，今晚砸一刀 / 挂 399？」且空房里可能是 Comp 在住 |
| S4 | 用户给了 Physical 与 PMS OCC，但没给无关 Comp 间数；或 PMS OCC 与 STR OCC 差几个点 |
| S5 | 高峰夜销售还要新送请客/FAM |
| S6 | 数字来自 Forward Occupancy on the Books / OTB%，可能含 Comp |

**不是本剧本：**

- 无关免费 = 0 且口径已声明 → 直接 **P01/P03**（真高峰）或 **P02/P05**（真弱/last-minute）。  
- 维修/锁/永久员工公寓 6+ 个月砍分母 → **P37**。本剧不是缩 Available。  
- OCC >100% 来自钟点同日再卖 → **P44**。不是 Comp。  
- GM 早会要虚荣 OCC、三分钟口播 → **P45** 仪式；本剧只解释「92% 为什么虚」这一种原因。  
- 付费房提前退房回库 → **P46**。Comp 不是回库。  
- 买二送一 / 团 50+1 赠夜 → STR Include，形 D，**退出 gratis 桶**。  
- 政府协议价 / 协议续住 → **未写。** 有房价就不是本剧 gratis。不要把政府价标成 complimentary。

---

## 2. 输入（缺 Comp 数不停，但不编 10）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) Sold 或 OTB，并声明这张 OCC 是 PMS 在店、STAR 历史，还是 Forward OTB
4) 用户口中的 OCC% / ADR /「空着 N 间」——先当待重算，不当最终尺

应用：
5) 当日无关 Comp + 临时自用 + FAM + 业主占用-当-comp（缺则问，不发明 10）
6) 是否促销/合同送夜（1+1、团 50+1）——是则 STR Sold，不是本剧
7) 是否永久宿舍 / 6+ 个月员工公寓 → 走 P37
8) PMS 占用是否把 Comp 算进 Occupied（NV-COMP-02；未声明则两套都算）
9) Pace / 3D Pickup（重算付费之后才用来开 P03）

Recommended：
10) Room Revenue（修 ADR 题）
11) 当晚是否还要新送免费
12) Forward 接口是否把 Comp 扣进 Rooms Booked（NV-COMP-04）
```

缺 Comp 数 **不停**：条件化两支（卡 §4）。禁止「92% 所以涨 / ADR 掉所以砍或补涨 / 空着所以砸」。  
顾问 **不** 点 PMS 免费码、不代报 STR、不编西软/绿云/石基字段名。

---

## 3. 三口径清单（动价前必过）

先钉分子。对不上就不要用那张好看的 OCC 或难看的 ADR 去改 BAR。

| # | 尺 | 定价用 | 对标 / 报表用 |
| --- | --- | --- | --- |
| D1 | **STR 历史 Rooms Sold** | 付费+促销送夜；**不含**无关 Comp（S） | 历史 OCC / ADR / MPI |
| D2 | **PMS 在店占用** | 常含 Comp（B，须声明） | **不是**历史 STAR |
| D3 | **Forward Rooms Booked** | 可含 Comp / house use / owner-occupied（A） | Occupancy on the Books ≠ 历史 Sold |
| D4 | **付费 Remaining** | **是。** `Capacity − occupied − OOO`；occupied 已含 Comp | Comp 不是还能卖的池 |

重算（声明口径；数字是用户的或 Simulation，不是行业常模）：

```
Paid occupied      = Physical occupied − Unrelated Comp RN     # Hypothesis
STR OCC            = STR Sold / Physical                      # Sold 不含无关 Comp
PMS OCC            = Occupied / Physical（若含 Comp，须声明）
Paid ADR           = Room Revenue / (Occupied − Unrelated Comp)  # Hypothesis
STR ADR            = Room Revenue / Rooms Sold                # 分母本就不含无关 Comp
Remaining physical = Capacity − occupied − OOO                # 已减 Comp，不是 dump 池
```

| 对不上 | 结论 |
| --- | --- |
| PMS OCC 高、无关 Comp 实质 | **A 假高峰。** 92% 不是需求变强 |
| 「空着」其实是 Comp 在住 | **B 假剩余。** 不是可砸的 leftover |
| ADR 掉、Comp 在占用分母 | **C 假 ADR。** 751 不是 BAR 太低 |
| 赠夜是 1+1 / 团 50+1 | **D。** STR Include。退出 gratis |
| 宿舍 6+ 个月 | **E。** **P37** |
| 付费剩余紧还在新送 | **F。** 劝停。置换 BAR |

**历史 Sold ≠ Forward Booked。** 不要拿含 Comp 的 OTB% 去对不含 Comp 的历史 Comp OCC。

---

## 4. 诊断枝（禁止「92% 所以涨 / 空着所以砸 / ADR 掉所以修」）

```
用户拿 OCC% / ADR / 空房 / 请客房 要动 BAR
│
├─ 还没给无关 Comp / 临时自用间数？
│     是 → 问，不发明 10。条件化：
│          若无关免费 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
│          若无关免费实质 → 先划掉再谈价
│
├─ 是不是促销/合同送夜（1+1、团 50+1）？
│     是 → 形 D。STR 计入 Sold。离开 gratis 桶
│
├─ 是不是永久宿舍 / 6+ 个月员工公寓？
│     是 → 形 E。离开，进 **P37**
│
├─ A 假高峰：PMS OCC 好看，分子侧含无关 Comp
│     重算 Paid OCC、付费 Remaining、Pace
│     ├─ 付费不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 付费真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按 92% 涨」，进 **P01/P03**
│             理由是付费剩余，不是虚荣 92%
│
├─ B 假剩余：看起来空 / 要砸 / 要 399
│     拆：Comp 在住 vs 付费空房
│     ├─ 「空」是 Comp 在住
│     │     → 不 dump。Hold。不是 P05
│     └─ 付费空房仍厚 + DTA≤3 + Pickup≈0 + 市场不冰
│           → **P05** 三档；对象是付费空房；禁止一夜 −15%
│
├─ C 假 ADR：均价掉了
│     重算 Paid ADR / STR ADR
│     $0 分母 → 不砍不补涨去修报表
│     付费 Pace Ahead 且剩余真紧 → 才评 P03，理由不是 ADR
│
└─ F 高峰还在新送
      付费剩余紧 + 还要再送无关 Comp
      → 劝停 / 改期 / 改非高峰房型（Hypothesis，无 SOP、不编 %）
      已确认的 Comp 不暗改成赶客

Naive（禁止）
      「92% 所以 899」
      「ADR 751 所以砍或补涨」
      「请客房还空着所以 399」
      一夜 −15% 当新 BAR
      发明 10；编中国字段名；编华住 SOP
      把 1+1 赠夜当无关 Comp
      把经理公寓当瞬态 Comp
      混 Forward OTB 与历史 Sold
```

**P03 只在付费重算之后。** 好看的 92% 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 降 BAR 卖不掉正在睡的请客。  
**T19：** Comp 夜贡献 ≈ 0 或负（布草/早餐仍可能发生）。高峰再送免费的机会成本是当晚付费 BAR，不是 0。无变动成本不编金额。  
**T20：** 不发明 699 去「修 OCC/ADR」。无地板不发明数字。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 要 3 个数：Physical、Sold/OTB、当日无关 Comp+临时自用。缺 Comp → 问，不编 10。
3. 声明这张 OCC 是 PMS / STAR 历史 / Forward OTB。未声明三套都算，不混 MPI。
4. 排除 D（促销送夜）与 E（永久 HU → P37）。
5. 重算：Paid OCC、STR OCC、付费 Remaining、Paid ADR。写进口径。
6. 分形：A 假高峰 / B 假剩余 / C 假 ADR / F 新送。可以同时命中。
7. A：付费紧且 Pace Ahead → P01/P03（先关低价再评涨）。只是 Comp 撑的 92% → 不涨。
8. B：划掉 Comp 在住。付费空少 → Hold。付费空厚走 P05，仍禁一夜 −15%。
9. C：不修报表。F：高峰劝停新送（Hypothesis）。
10. 输出 Hold / 不涨 / 不砸 / 移交 P03 / 移交 P05 / 移交 P37 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / PMS occupied / Unrelated Comp+临时自用:   （用户数；缺则 Unknown，不编 10）
STR Sold（不含无关 Comp）:
PMS OCC vs STR OCC vs Paid OCC（声明口径）:
Remaining physical（已减 occupied，含 Comp）:
Paid Remaining / Pace:
Forward 还是历史:
Decision:  Hold BAR / 不涨 / 不 dump / 劝停新送 / 移交 P03 / 移交 P05（仅付费空房）/ 移交 P37
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      默认不开。假剩余不是围栏许可证
Inventory:  付费空房保持 OPEN。Comp 保持占用——不要当 leftover dump
Restriction: 不因虚荣 92% 新设 MinLOS
Comp 政策（Hypothesis，无 SOP）:
            付费剩余紧 → 劝当晚不要再新送无关免费/FAM；已确认不暗改成赶客
Do-not-do:
  - 按 PMS 92% 自动 Increase BAR（含 +100 → 899）
  - 按 Comp 占着的房 dump / 399 / 一夜 −15%
  - 为修 ADR 砍或涨
  - 混 Forward OTB 与历史 Sold
  - 发明 10；编中国报表字段名；编华住 SOP / 佣金% / 点弹性 / Walk 成本 / 399 Fact
Trigger: 当晚停送免费 → 重算 Remaining；付费变紧且 Ahead 才评涨
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **先拆无关 Comp**。

| 重算结果 | BAR | 说明 |
| --- | --- | --- |
| A：只是 Comp 撑的 92%，付费不紧或 Pace 非 Ahead | **Hold**。区间可给心理带（例现行 799 → 779–799 首选 799），**不是**已经降了 | 仿真主枝。禁止 899 |
| A：付费真紧 + Pace Ahead | **P01/P03**：先关低价；未最高才第一刀 +5–8% / +8–15% 或收到最低竞对；已最高只关不涨。理由是付费剩余，不是 92% | 须把「付费紧」写进 Situation |
| B：Comp 在住被当成空 | **Hold**。拒绝 dump / 拒绝 399 | 不是 P05 |
| B：付费空房厚 + DTA≤3 + 市场不冰 | **P05** 围栏 −3–5%；档 H 才短窗战术 −10–15%；**禁止一夜 −15% 当新 BAR** | 对象是付费空房，不是 Comp |
| C：混 ADR 被 $0 分母拉低 | 不当砍、不当补涨 | 重算后再走 A 或 P03 |
| D：促销送夜 | 退出本剧 | STR Include |
| E：永久 HU | **P37** | 离开 |
| F：高峰还在新送 | BAR **Hold**；劝停新送 | Hypothesis，无配额数字 |
| 价已最高 | 只关不涨 | 与 P03 同 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
399 / 10 / 92% / 799 **只允许出现在 Simulation**，不是行情，不是新 BAR。

### 5.3 Advisor-First

建议用户：无关 Comp 间数截图、这张 OCC 是 PMS 还是 STAR 还是 Forward、当晚还要不要新送免费。顾问不改免费码、不改房态、不代报 STR、不自动调价。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；无关 Comp 间数（缺则问不编 10）；PMS OCC vs STR/Paid OCC；Remaining；BAR；谁要涨/砸/修 ADR |
| 2 | Diagnosis | 形 A/B/C/D/E/F。PMS OCC 虚高 ≠ High Demand；$0 分母 ≠ 弱需求；Comp 占用 ≠ leftover |
| 3 | Opportunity / Risk | 按 92% 涨奖励请客房；399 dump 占住房；修 ADR 砍错方向；高峰继续送免费置换 BAR |
| 4 | Recommended Action | Hold / 不涨 / 不 dump / 劝停新送 / 移交 P03 或 P05 或 P37。点或紧区间，不要「适当涨」 |
| 5 | Why | STR 历史 Sold 不含无关 Comp（S）+ Forward Booked 可含（A）+ Remaining 已减占用 |
| 6 | Expected Impact | 方向：停一次假高峰定价 / 停一次假 leftover dump。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆 Comp 则方向 Medium；缺间数只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 10）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / Unrelated Comp:
  OCC 口径（PMS / STR 历史 / Forward）:
  PMS OCC / Paid or STR OCC / Remaining:
  BAR / 拟议动作（涨+100 / 修 ADR / 399 dump / 新送免费）:

Diagnosis:
  形: A 假高峰 / B 假剩余 / C 假 ADR / D 促销送夜 / E 永久 HU→P37 / F 新送
  付费 Remaining + Pace（Ahead / On / Behind）:

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非付费已进 P03）
  Inventory:
  Comp 政策（Hypothesis，无 SOP）:
  Do-not-do: 899 出虚荣 OCC；399 dump Comp；一夜 −15%；发明 10

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS 点击步骤。禁止输出政府协议价剧本。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出无关 Comp=0 且口径已声明 | 离开本剧，按原 OCC/剩余进 P01/P03 或 P05 |
| 用户补出无关 Comp 实质 | 按新 Paid Remaining 重跑 §4 |
| 用户补出是 1+1 / 团 50+1 | 形 D。按 STR Sold 处理，不抠 Sold |
| 用户补出 6+ 个月宿舍 | **P37** |
| 重算后付费 Remaining 紧 + 24h 付费 Pickup 仍正 + Pace Ahead | 移交 **P03**（先关低价）。理由仍不是 92% |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；对象不是 Comp |
| 销售仍要把 BAR 砍到 399 清「空着的请客」 | **拒绝。** 形 B；禁一夜 −15% |
| GM 仍要按 92% 挂 899 | **拒绝。** 形 A |
| 当晚还在新送免费且付费剩余紧 | 形 F。劝停。不编配额 |
| 数字其实是 Forward OTB% | 不当历史 OCC，更不当涨价令 |

300 间尺：不因假 92% 发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 把请客房当成需求 | Pace 约 On 却按 92% 挂 899 | 奖励 $0 占用；付费客人被挤出 |
| 把 Comp 当 leftover dump | 「还空着」挂 399 | 占住房不是燃料；公开基准被一夜改写 |
| 为修 ADR 砍或涨 | 混 ADR 751 | 故障在分母，不在 BAR |
| 销售当晚继续送免费 | 新 Comp 间数；付费 Pickup | 付费剩余更薄，却继续按 92% 说话 |
| 把促销赠夜从 Sold 抠掉 | 1+1 / 团送夜 | 形 D；STR Include |
| 把经理公寓当瞬态 Comp | 6+ 个月 | 应走 P37 分母，不是本剧 |
| 真付费紧却因「怕误诊」死不涨 | 付费 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 混 Forward 与历史 | OTB% 含 Comp 去对 STAR | 假 MPI / 假涨价令 |

---

## 9. 盯什么

- 无关 Comp / 临时自用间数有没有在涨  
- 付费净 Pickup（不是含 Comp 的 PMS OCC）  
- 公开 BAR 有没有被改成 899 或 399  
- 这张 OCC 口径有没有从 PMS 偷偷换成 Forward OTB  
- 促销赠夜有没有被误剔出 Sold  
- STAR 上报是否已按 Guidelines 剔除无关 Comp（问，不编字段）

---

## 10. Confidence / 边界

能拆 Comp（Physical + Sold + 无关 Comp 间数）→ 方向 **Medium**（不自动涨、不自动砸、不修 ADR）。  
缺 Comp 数只条件化 = **Low–Medium**。  
STR 历史 Sold 不含无关 complimentary = **S**。Forward Booked 可含 Comp/house use = **A**。本店 PMS 含不含 = 问用户（NV-COMP-02）。  
中国「免费/自用/招待」报表字段名、Comp % 常模、Walk 成本、佣金%、点弹性、华住 SOP、399 行情 = **NV**，不编。  
政府协议价剧本 = **未写**。有房价不是 gratis。

仿真：`cases/sim-2026-comp-occ-92-sat.md`（**Simulation**，不是真店）。主枝 **Hold 779–799 首选 799**。拒绝 899。拒绝 399 dump。10/92%/799/399 只在该卷。

---

## 11. 证据（2026-08-24 已核，本轮不重开 STR 页）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Rooms Sold / Demand / Room Nights Sold **excludes complimentary rooms**；OCC = Sold / Available | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/glossary （2026-08-24 打开，理论卡已引） |
| 历史 Sold：只报产生收入的客房；**含**促销/合同免房费占用（买二送一、团 50 送 1）；**不含**与促销/合同无关的 complimentary（员工/业主/FAM）；No-show 不计 Sold；业主占用 condo 当 complimentary | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （2026-08-24 打开，理论卡已引） |
| Forward Rooms Booked **含** Complimentary and house use、owner-occupied（若已从 Adjusted 扣掉）；含促销免房费占用 | A | **Known 前瞻口径；≠ 历史 Sold** | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines （2026-08-24 打开，理论卡已引） |
| Permanent House Use 连续六个月+ 员工自用 → Available 不含 | A 转述 | **P37 已用；本剧形 E 只指针** | HotStats *Rooms Department and Operating Metrics*（2026-08-23 0017 已开，见 `theory/capacity-ooo.md`） |
| 店内 PMS 在店 OCC 是否含 Comp / 自用 | B 须声明 | **NV 字段名** | 用户报表；不编中国 PMS 名 |
| 好看 PMS OCC 不是涨价令；Comp 占用不是 leftover | B | 动作 Hypothesis | 理论卡；主卡；本剧 |
| 华住 SOP；Comp 行业占比；Walk 成本；399 行情；政府协议价 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页）：

```
西软 绿云 石基 免费 自用 招待 报表字段 官方
中国酒店 complimentary 间夜 常模 行业统计
政府协议价 续住义务 官方 SOP
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-COMP-01 | 中国常见 PMS（西软/绿云/石基等）免费、自用、招待、补偿房的报表字段名与是否进占用/进 Sold | 问用户截图；不编字段 |
| NV-COMP-02 | 本店 PMS OCC 是否把 Comp/临时自用算进占用 | 必须声明；未声明则 STR OCC 与 PMS OCC 两套都算 |
| NV-COMP-03 | 本店上报 STR 时是否已按 Guidelines 剔除无关 Comp | 问；未声明则不要把 PMS OCC 当 STAR |
| NV-COMP-04 | Forward 接口是否把 Comp/house use 扣进 Rooms Booked | 问 RMS/CRS 映射；默认按 Forward 页 Include |
| NV-COMP-05 | 政府协议价是否被店内误标成 complimentary | **政府价剧本未写。** 先问有没有房价；有价就不是本剧 gratis |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 18:17 CST | drafted。BACKLOG P47。六形 A 假高峰 / B 假剩余 / C 假 ADR / D 促销送夜 / E 永久 HU→P37 / F 高峰停新送。主卡复用 `dont-raise-on-comp-occ.md`（不重写）。仿真复用 `sim-2026-comp-occ-92-sat.md`。不编 10 / 中国字段名 / 华住 SOP。政府价不写。 |

---

## 14. 交叉（不改 P01–P46 正文；P37/P05/P45 仅文末一行）

- **P37**：缩 **Available**（OOO / 永久 HU）。本剧 = $0 无关 Comp 占房、不进 STR 历史 Sold。分母 vs 分子相反。Advise 都是：不要按扭曲 OCC 定价。永久宿舍仍 P37。  
- **P44**：胀分子的是钟点再卖，不是 Comp。  
- **P45**：GM 虚荣 OCC 仪式。本剧是原因之一。早会仍回付费剩余 + Pace。  
- **P05**：leftover 是付费空房。Comp 占用 ≠ leftover。  
- **P46**：早离把**付费**房还回来（脏）。Comp 不是回库。  
- **P01/P03**：付费 Remaining + Pace，不是 PMS 92%。  
- **T19 / T20**：高峰免费机会成本是付费 BAR；无地板不发明 699。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。399 vs 799 是 −50%，不是档 H。  
- **政府协议价：** 仍未写。不要把本剧当政府价剧本。

---

## 15. 一行（2026-08-25 00:17，不改上文）

有房价的政府/差旅协议 **不是** 本剧 gratis（**T-Gov** `theory/government-negotiated-rate.md` · `recommendations/dont-anchor-bar-to-gov-rate.md`）。gov ≠ complimentary。$0 请客房仍本剧。**P48 仍未写。**

---

## 16. 一行（2026-08-25 02:17，不改上文）

有房价的政府/差旅协议走 **P48** `government-negotiated-rate.md`（gov ≠ gratis）。$0 请客房仍本剧。

---

## 17. 一行（2026-08-25 06:17，不改上文）

积分兑房 / award **不是** 本剧无关请客（**P49** `loyalty-award-upgrade.md`）。award ≠ unrelated comp。可能有品牌报销（金额 NV）。$0 员工/业主/FAM 仍本剧。


## 18. 一行（2026-08-27 06:17，不改上文）

付费升房 ≠ 本剧无关 Comp（**P61** `paid-upsell-upgrade.md`）。$0 员工/业主/FAM 仍本剧。升房加价是贡献候选（T19），不是请客。

## 19. 一行（2026-08-30 10:17，不改上文）

付费员工折扣改尺 **不是** 本剧 $0 Comp/HU（**P80** `staff-employee-rate-vs-bar.md`）。staff rate ≠ complimentary。无关员工/业主/FAM $0 仍本剧。不写 P81。

## 20. 一行（2026-08-31 18:17，不改上文）

服务补偿/账单 adjustment 改尺 → **P87**。本剧仍是计划 Comp / House Use。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是计划 Comp / House Use。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 08:17，不改正文）：付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**。本剧仍是计划 Comp / House Use（$0）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。
