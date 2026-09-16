# Playbook P48｜Government / Negotiated Per-Diem｜政务/差旅协议是合同价，不是 BAR，不是 Comp

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/government-negotiated-rate.md`  
> BACKLOG：P48 Government / per-diem / 政务协议 · HIGH · 先决策卡（卡已有）· slug **government-negotiated-rate**  
> 状态：**drafted**（2026-08-25 02:17 CST）  
> 配套卡：`recommendations/dont-anchor-bar-to-gov-rate.md`（主卡；本剧不另开第二张卡；**不重写卡正文**）  
> 理论：`theory/government-negotiated-rate.md`（T-Gov）· `metrics/government-negotiated-rate.md`  
> 交叉：P47 $0 无关 Comp ≠ 本剧有房价合同价；P37 永久 HU 缩 Available ≠ 协议房在 Sold；P31 机组合同 ≠ 差旅协议；P26 企业周末漏出 ≠ 政务；P05 leftover dump ≠ 把 BAR 砍到协议价；P01/P03 看**非协议** remaining + Pace  
> 问题树：§54 「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」  
> 仿真：`cases/sim-2026-gov-rate-sat-blackout.md`（**Simulation**；复用 00:17 卷，02:17 追加十节）  
> 证据等级：S（STR Transient / Group / Contract，**无** Government KPI）；A **US Fact**（GSA FTR 26-01 标准 lodging $110，**不是中国**）；A 框架（财行〔2013〕531 限额内凭票；**本页无**分城市/职级现行限额表）；B（HSMAI BAR = 非资格公开底价；negotiated / government ID 是围栏合同价）  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议定性合同价、Hold / 不涨 / 拒绝 BAR=协议价或 GSA / 纠正 Comp 误标 / 建议限额或 blackout / 移交 P01·P03·P05·P47·P37·P31·P26。**不操作 PMS**、不改政府码、不执行 blackout、不代报 STR。  
> 禁止：编造华住政务 SOP / 398；把 GSA $110 当中国 BAR 锚；把 2015/2016 通知当现行限额 Fact；发明 STR Government OCC；无合同就发明 480；按虚荣 92% 挂 899；一夜 −15% 当新 BAR；把 BAR dump 到协议价；把公务员标 complimentary。

---

## 0. 一句话

**政务/差旅协议是有房价的合同价，不是 P47 免费房，也不是公开 BAR。**  
OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。GSA $110 与任何未打开的中国限额表都不是本店 BAR 锚。高峰先做置换：付费 BAR 是否被协议占满；协议可 blackout / 限额 / 拒超售（Hypothesis 过程）。禁止为了冲 OCC 把 BAR 砍到协议价。

完成定义：一张「先定性有房价的合同价 → 拆非协议 Remaining / Pace → Hold 或限额/blackout 或移交」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | PMS OCC 90%+ | 政府/差旅协议块抬高占用 | **不**按那张 OCC Increase BAR。重算 **paid-transient remaining + Pace**。仍紧 **且** Ahead → 才 **P01/P03**，理由是**非协议**剩余，不是 92% |
| **B 假砸价** | 销售要把 BAR 对到协议价或 GSA $110 | 围栏合同价被当成公开底 | **拒绝。** 协议价不是公开 BAR。$110 = US Fact，不是中国锚 |
| **C 误标 Comp** | 前台把公务员开 complimentary | 有房价的合同桶被标成 $0 | **不是 P47。** 纠正桶。有房价走本剧 |
| **D 高峰置换** | 周六 BAR 799 vs 协议占房（仿真 480） | 低价协议挤掉付费 BAR | 建议该晚 **blackout / 限额 / 拒超售**（Hypothesis；问合同是否允许）。Hold **779–799 首选 799** |
| **E 移交** | 永久宿舍 / 无关请客 / 机组 / 企业周末漏 | 不是本剧客源或库存类 | 永久宿舍 → **P37**。无关 gratis → **P47**。机组 → **P31**。企业周末漏 → **P26** |
| **F 限额表幻觉** | 有人拿财政部限额当 BAR | 未打开现行分城市/职级表 | 表 **NV**。**问本店签的协议价**。不发明一张表，不把 2015/2016 当现行 Fact |

顾问必须能直接说的三句（与理论卡 / 决策卡同一套，不另发明）：

```
1. 政务/差旅协议是有房价的合同价，不是 P47 免费房；OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。
2. 不要把 GSA $110 或任何未打开的中国限额表当成中国 BAR 锚；本店协议价用户没给就问，不编。
3. 高峰/周末：先做置换（付费 BAR 是否被协议占满）。协议可 blackout / 限额 / 拒超售（Hypothesis 过程）；禁止为了冲 OCC 把 BAR 砍到协议价。
```

独立默认（本库 Hypothesis）：当晚定价用 **非协议 Remaining + Pace**。历史 STAR 仍进 Transient / Group / Contract 三桶之一——**不要发明 STR Government OCC**。缺本店协议价 / 块量 → **问，不编 480 / 40 / 398**。限额表 NV → 不引用城市数字。

尺（Hypothesis；799 只 Simulation）：过夜 **Hold 779–799 首选 799**，除非非协议剩余重算后真进 P03。禁止 899 出虚荣 92%；禁止 dump BAR 到 480；禁止 GSA $110 当中国 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「政府协议住满了，OCC 都 90%+ 了要不要涨？」 |
| S2 | 「BAR 要不要跟到差旅标准 / 协议价 / GSA $110」 |
| S3 | 「这批公务员算不算免费房 / 前台想开 complimentary」 |
| S4 | 周六/活动夜协议块占着，销售还要再接协议或把 BAR 砍到协议价冲 OCC |
| S5 | 有人引用财政部限额 / 处级标准 / 华住政务价当公开 BAR |
| S6 | 用户给了 Physical 与 PMS OCC，但没给协议间数×房价 |

**不是本剧本：**

- 无关免费 $0、请客房、FAM → **P47**。有房价才本剧。  
- 永久员工公寓 / 6+ 个月宿舍 → **P37**。协议房仍在可售池。  
- 机组 allotment / extra → **P31**。Crew ≠ 政务差旅。  
- 企业协议周末漏出（公司码，不是政府资格）→ **P26**。机制类似（高峰可 blackout），客源不同。  
- 非协议 remaining 真紧且 Pace Ahead、协议已划掉 → **P01/P03**（理由是付费剩余，不是 92%）。  
- 真付费 leftover 弱市 → **P05** 围栏；**仍禁止**把 BAR 写成协议价。

---

## 2. 输入（缺协议价不停，但不编 480）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) Sold 或 OTB，并声明这张 OCC 是否含政务/差旅协议
4) 用户口中的 OCC% /「住满了」——先当待重算，不当最终尺

应用：
5) 当日政务/差旅/per-diem 协议间数 × 房价（缺则问，不编 40 / 480 / 398）
6) 房价是 0 还是有价（$0 → P47）
7) 合同该晚是否 last-room-available、可否 blackout / 限额（缺则条件化，不编必须开）
8) Pace / 3D Pickup（重算非协议 remaining 之后才用来开 P03）

Recommended：
9) 是否机组（P31）/ 永久宿舍（P37）/ 企业码周末漏（P26）
10) 上报 STR 进 Transient / Group / Contract 哪一桶（>30 天保底才可能 Contract）
11) 有没有打开的现行分城市/职级限额表（默认 NV）
```

缺协议价 **不停**：条件化两支（卡 §4）。禁止「92% 所以涨 / BAR 跟到差旅 / 公务员算免费」。  
顾问 **不** 改政府码、不执行 blackout、不代报 STR、不编华住政务价。

---

## 3. 三桶清单（动价前必过）

先定性房价类。对不上就不要用那张好看的 OCC 或协议数字去改 BAR。

| # | 桶 | 有没有房价？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 有 | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **政务/差旅协议 / per-diem** | **有** | **否**（资格码 / 合同 / ID） | 合同价桶。高峰可 blackout/限额（Hypothesis）。不改成 BAR，不改成 Comp |
| D3 | **无关免费 / 请客房** | **$0** | 否 | **P47** |
| D4 | **永久宿舍 / Permanent HU** | 长期不在可租池 | 否 | **P37** |
| D5 | **机组合同块** | 有（合同） | 否 | **P31** |
| D6 | **企业协议周末漏** | 有（公司码） | 否 | **P26** |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是中国限额 Fact）：

```
Gov negotiated RN        = 政务/差旅/per-diem 合同价房晚（有房价）
Negotiated occupancy share = Gov negotiated RN / Physical     # Hypothesis，不是 STR
Non-gov remaining        = Capacity − occupied − OOO         # occupied 已含协议 → 此即非协议可卖
PMS OCC (incl. gov)      = occupied / Available              # 可被协议抬高
```

STR：**无** Government OCC / Government MPI。按晚差旅协议不要自动写成 Contract（仅当 >30 天、无论用不用保证付款）。

| 对不上 | 结论 |
| --- | --- |
| PMS OCC 高、协议实质 | **A 假高峰。** 92% 不是需求变强 |
| 销售要把 BAR = 协议价 / GSA | **B 假砸价。** 拒绝 |
| 公务员被标 complimentary | **C 误标 Comp。** P47 不吃 |
| 高峰协议占着 BAR 房 | **D 置换。** 建议限额/blackout；Hold BAR |
| 永久宿舍 / $0 / 机组 / 企业漏 | **E。** 离开本剧 |
| 财政部限额当 BAR、表未开 | **F。** NV。问本店协议价 |

GSA $110 **不出现在中国公式里**。中国限额表 NV，不出现在公式里。仿真 480 只在案例文件。

---

## 4. 诊断枝（禁止「92% 所以涨 / BAR 跟到差旅 / 公务员算免费」）

```
用户拿协议 OCC / 差旅标准 / 公务员 / 限额表 要动 BAR
│
├─ 还没给本店协议间数或房价？
│     是 → 问，不编 40 / 480 / 398 / $110 中国锚。条件化：
│          若协议 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
│          若协议实质且有房价 → 先划掉非协议 remaining 再谈价
│
├─ 房价是 0？
│     是 → 形 C 的逆：真 Comp。离开，进 **P47**
│
├─ 是不是永久宿舍 / 6+ 个月员工公寓？
│     是 → 形 E。离开，进 **P37**
│
├─ 是不是机组 allotment / extra？
│     是 → 形 E。离开，进 **P31**
│
├─ 是不是企业协议周末漏（公司码，不是政府资格）？
│     是 → 形 E。离开，进 **P26**
│
├─ A 假高峰：PMS OCC 好看，分子侧含协议
│     重算 non-gov remaining、Pace
│     ├─ 非协议不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 非协议真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按 92% 涨」，进 **P01/P03**
│             理由是非协议剩余，不是虚荣 92%
│             先关低价/限额协议（Hypothesis），再决定涨不涨
│
├─ B 假砸价：BAR 要对齐协议价 / 差旅标准 / GSA $110
│     → **拒绝。** 协议价不是公开 BAR。$110 = US Fact
│
├─ C 误标 Comp：前台把政府价当免费
│     有房价 → 纠正桶。P47 不吃
│
├─ D 高峰置换：协议占着本来可以卖 BAR 的物理房
│     建议该晚限额 / 关协议 / blackout（问合同，Hypothesis）
│     Hold BAR 779–799 首选 799
│     弱市协议填的是本来卖不掉的房 → 可留协议；仍不把 BAR 砍到协议价
│
└─ F 限额表幻觉：财政部限额 / 处级标准 / 华住政务价当 BAR
      未打开现行分城市/职级表 → 说 NV
      问本店签的协议价。不发明表，不把 2015/2016 当现行 Fact
      不编 华住 398

Naive（禁止）
      「92% 所以 899」
      「BAR 跟到 480 / 差旅标准 / GSA $110」
      「公务员算免费」
      一夜 −15% 当新 BAR
      发明 40 / 480 / 398
      引用未打开的中国限额表
      写成 STR Government OCC
      编华住 SOP
```

**P03 只在非协议重算之后。** 好看的 92% 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 禁止把公开 BAR 改成协议价当 dump。  
**T20：** 不砸品牌底去冲 OCC。无地板不发明 398 / 699。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 要 4 个数：Physical、当日协议间数与房价、这张 OCC 是否含协议、合同该晚可否 blackout 或限额。缺协议价 → 问，不编 480。
3. 定性：有房价 → 本剧。$0 → P47。永久宿舍 → P37。机组 → P31。企业周末漏 → P26。
4. 声明 STR 不发明 Government KPI。按晚协议常 Transient/negotiated；>30 天保底才可能 Contract。
5. 重算：non-gov remaining、PMS OCC（含协议，须声明）、Pace。
6. 分形：A 假高峰 / B 假砸价 / C 误标 Comp / D 置换 / E 移交 / F 限额表幻觉。可以同时命中。
7. A：非协议紧且 Pace Ahead → P01/P03（先限额协议再评涨）。只是协议撑的 92% → 不涨。
8. B：拒绝 BAR=协议价或 GSA。C：纠正桶。F：NV + 问本店价。
9. D：高峰建议限额/blackout（Hypothesis，问合同）。Hold BAR。禁止 dump 到协议价。
10. 输出 Hold / 不涨 / 拒绝锚 BAR / 纠正 Comp 误标 / 建议限额或 blackout / 移交 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / PMS occupied / 政务或差旅协议间数×房价:   （用户数；缺则 Unknown，不编 40 / 480）
非协议 Remaining / Pace:
这张 OCC 是否含协议:
合同可否 blackout / 限额:
Decision: Hold BAR / 不涨 / 不把 BAR 锚到协议或 GSA / 纠正 Comp 误标 / 建议限额或 blackout / 移交 P03 / 移交 P05（仅付费空房，BAR≠协议价）/ 移交 P47 / P37 / P31 / P26
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      默认不开。假高峰不是围栏许可证
Inventory:  付费空房保持 OPEN。协议保持合同桶——不要当 leftover dump，也不改成 Comp
Restriction: 不因虚荣 92% 新设 MinLOS。高峰可建议该晚限额/blackout 协议（Hypothesis，问合同）
Do-not-do:
  - 按 PMS 92% 自动 Increase BAR（含 +100 → 899）
  - BAR → 协议价 / GSA $110 / 华住 398
  - 一夜 −15% 当新 BAR
  - 把有房价的政府单标 complimentary
  - 引用未打开的中国限额表
  - 发明 STR Government OCC
  - 操作 PMS
Trigger: 该晚停接或限额协议 → 重算非协议 Remaining；付费变紧才评涨
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要把 BAR 锚到协议价；不要按协议抬高的 OCC 涨；不要把协议当 Comp。**

| 重算结果 | BAR | 说明 |
| --- | --- | --- |
| A：只是协议撑的 92%，非协议不紧或 Pace 非 Ahead | **Hold**。区间可给心理带（例现行 799 → 779–799 首选 799），**不是**已经降了 | 仿真主枝。禁止 899 |
| A：非协议真紧 + Pace Ahead | **P01/P03**：先限额/关协议（Hypothesis）；未最高才第一刀 +5–8% / +8–15% 或收到最低竞对；已最高只关不涨。理由是非协议剩余，不是 92% | 须把「非协议紧」写进 Situation |
| B：销售要对齐协议价或 GSA | **拒绝。** BAR 不动 | $110 = US Fact |
| C：误标 Comp | BAR **Hold**；纠正桶 | 不是 P47 |
| D：高峰协议占房 | **Hold 779–799 首选 799**；建议限额/blackout | 480 只 Simulation |
| E：永久 HU / $0 / 机组 / 企业漏 | 离开本剧 | P37 / P47 / P31 / P26 |
| F：限额表当 BAR | 不引用数字；问本店协议价 | 表 NV |
| 弱市 leftover | **P05** 围栏；对象是付费空房；**不要**把 BAR 写成协议价；**禁止一夜 −15%** | 不是 dump 到 480 |
| 价已最高 | 只关不涨 | 与 P03 同 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
480 / 40 / 92% / 799 / $110 **只允许出现在 Simulation 或 US 标签**，不是中国限额 Fact，不是新 BAR。

### 5.3 Advisor-First

建议用户：本店协议间数与房价截图、合同该晚可否 blackout 或限额、这张 OCC 是否含协议、24h 非协议 Pickup。顾问不改政府码、不执行 blackout、不代报 STR、不自动调价。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；协议间数×房价（缺则问不编 480）；PMS OCC vs 非协议 Remaining；BAR；谁要涨/跟差旅/当免费 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。协议 OCC 虚高 ≠ High Demand；协议价 ≠ 公开 BAR；有房价 ≠ Comp |
| 3 | Opportunity / Risk | 按 92% 涨奖励低价协议；BAR dump 到协议价；GSA $110 当中国锚；公务员当免费 |
| 4 | Recommended Action | Hold / 不涨 / 拒绝锚 BAR / 纠正 Comp 误标 / 建议限额或 blackout / 移交 P03 或 P05 或 P47/P37/P31/P26。点或紧区间，不要「适当涨」 |
| 5 | Why | 协议是围栏合同价（B）+ STR 无 Government KPI（S）+ GSA $110 = US Fact + 限额表 NV |
| 6 | Expected Impact | 方向：停一次假高峰定价 / 停一次 BAR=协议价。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆协议占用则方向 Medium；缺房价/间数只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 480）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / 政务或差旅协议间数×房价:
  OCC 口径（是否含协议）:
  PMS OCC / 非协议 Remaining:
  BAR / 拟议动作（涨+100 / 跟到差旅 / GSA $110 / 开 complimentary）:

Diagnosis:
  形: A 假高峰 / B 假砸价 / C 误标 Comp / D 高峰置换 / E 移交 P37·P47·P31·P26 / F 限额表幻觉
  非协议 Remaining + Pace（Ahead / On / Behind）:

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非非协议已进 P03）
  Inventory / 协议政策（Hypothesis，问合同）:
  Do-not-do: 899 出虚荣 OCC；BAR→协议价 / GSA $110；一夜 −15%；发明 480；公务员当 Comp

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS 点击步骤。禁止输出「该市处级限多少所以卖多少」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出协议≈0 且口径已声明 | 离开本剧，按原 OCC/剩余进 P01/P03 或 P05 |
| 用户补出协议实质且有房价 | 按新 non-gov Remaining 重跑 §4 |
| 用户补出房价是 $0 | **P47** |
| 用户补出 6+ 个月宿舍 | **P37** |
| 用户补出机组 | **P31** |
| 用户补出企业码周末漏 | **P26** |
| 重算后非协议 Remaining 紧 + 24h 非协议 Pickup 仍正 + Pace Ahead | 移交 **P03**（先限额协议）。理由仍不是 92% |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；**仍禁止 BAR=协议价** |
| 销售仍要把 BAR 砍到协议价 / GSA $110 | **拒绝。** 形 B |
| GM 仍要按 92% 挂 899 | **拒绝。** 形 A |
| 前台仍开 complimentary | 形 C。纠正桶 |
| 有人引用未打开的限额表数字 | 形 F。说 NV。问本店协议价 |
| 合同确认该晚可 blackout / 限额 | 建议执行（顾问不操作）；重算非协议 Remaining |

300 间尺：不因假 92% 发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 把协议 OCC 当 High Demand | Pace 约 On 却按 92% 挂 899 | 奖励低价合同占用；付费客人被挤出 |
| 把 BAR 公开卖成差旅价 | 销售坚持 480 / GSA $110 | 围栏价泄漏成公开底；冲 OCC 砸结构 |
| 把公务员当 P47 免费 | 有房价被标 complimentary | 合同桶丢了；STR Sold 口径错 |
| 把 GSA $110 写进中国早会 | 当场 US Fact 标签被丢掉 | 不是中国 BAR 锚 |
| 限额表幻觉写成「该卖多少」 | 未打开现行表 | 2015/2016 不是现行 Fact |
| 真非协议紧却因「怕误诊」死不涨 | 非协议 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 合同其实不可 blackout | 用户确认 LRA | 条件化：不能关则 Hold BAR，仍不 dump，仍不按 92% 涨 |

---

## 9. 盯什么

- 新协议 Pickup（销售是否继续按协议码接周六）  
- 非协议净 Pickup（不是含协议的 PMS OCC）  
- 公开 BAR 有没有被改成 899 或协议价 / 480  
- 有没有人把 GSA $110 写进中国早会  
- 前台是否仍把政府单开 complimentary  
- 合同该晚 blackout / 限额是否被用户确认（顾问不执行）

---

## 10. Confidence / 边界

能拆协议占用（Physical + 协议间数×房价 + OCC 是否含协议）→ 方向 **Medium**（不自动涨、不把 BAR 锚到协议价、不把协议当 Comp）。  
缺房价/间数只条件化 = **Low–Medium**。  
STR 无 Government KPI = **S**。GSA $110 = **A US Fact，不是中国**。531 = **A 框架，表 NV**。动作 = **B / Hypothesis**。  
中国现行分城市/职级住宿费限额表、政务协议酒店目录、华住/锦江政务价、Walk 成本、佣金%、点弹性 = **NV**，不编。  
本店协议价用户没给 → **问，不编 480 / 398**。

仿真：`cases/sim-2026-gov-rate-sat-blackout.md`（**Simulation**，不是真店）。主枝 **Hold 779–799 首选 799**；建议限额/blackout；拒绝 BAR→480；拒绝当 Comp。40/480/92% 只在该卷。GSA $110 未当中国 BAR。

---

## 11. 证据（2026-08-25 00:17 已核，本轮不新搜限额表）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| STR Segmentation = Transient / Group / Contract；Contract = >30 天保底块（例 airline crews, permanent guests）；**无** Government KPI | S | **Known 口径** | CoStar STR Glossary（00:17 重开，理论卡已引） |
| BAR = non-qualified, publicly available baseline；negotiated / government ID = 围栏合同价 | B | **Known 方向** | HSMAI Academy Glossary / HSMAI Americas GDS audit（00:17 打开，理论卡已引） |
| GSA FY2026 标准 lodging **$110** | A **US Fact** | **不是中国 BAR** | GSA Per Diem Bulletin FTR 26-01（00:17 重开） |
| 531 号：限额内凭票；财政部分地区分级别制定限额 | A 框架 | **办法不是现行表** | 财行〔2013〕531（§22 已开） |
| 中国现行分城市/职级住宿费限额表 | — | **仍 NV** | 00:17 未打开 2024/2025/2026 带数字官方表；不把 2015/2016 当现行 Fact |
| 好看 PMS OCC 不是涨价令；协议价不是公开 BAR | B | 动作 Hypothesis | 理论卡；主卡；本剧 |
| 华住政务 398；Walk 成本；480 中国限额 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页；本小时不新搜）：

```
财政部 调整中央和国家机关差旅住宿费标准 通知 site:gov.cn
财行 差旅住宿费标准 2024 2025 2026 site:gov.cn
华住 政务协议价 官方
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-GOV-01 | 中国现行分城市/职级差旅住宿费限额表（官方 PDF/HTML 带数字） | **仍 NV。** 不引用 2015/2016 记忆。不发明表 |
| NV-GOV-02 | 本店政务/差旅协议价、是否周末可用、可否 blackout | 问合同；不编 480 / 398 |
| NV-GOV-03 | 中国政务协议酒店 / 会议定点结算价目录 | **仍 NV。** 不发明华住政务价 |
| NV-GOV-04 | 本店 PMS 是否把政府价误标 complimentary | 问有没有房价；有价 → 本剧，不是 P47 |
| NV-GOV-05 | 该协议在上报 STR 时进 Transient / Group / Contract 哪一桶 | 问块是否 >30 天保底；不发明 Government KPI |
| NV-GOV-06 | GSA FAQ「酒店无义务接受 per diem」整页 | 检索摘要有；00:17 未把 FAQ 当 S |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 02:17 CST | drafted。BACKLOG P48。六形 A 假高峰 / B 假砸价 / C 误标 Comp / D 高峰置换 / E 移交 P37·P47·P31·P26 / F 限额表幻觉。主卡复用 `dont-anchor-bar-to-gov-rate.md`（不重写）。仿真复用 `sim-2026-gov-rate-sat-blackout.md`。不编 480 / 398 / 华住 SOP。限额表仍 NV。GSA $110 未当中国 BAR。 |

---

## 14. 交叉（不改 P01–P47 正文；P47/P31/P37/P26 仅文末一行）

- **P47**：gratis $0、不进 STR 历史 Sold。本剧**有房价**。误标 Comp → 纠正桶，不走 P47 涨/砸规则当免费。gov ≠ gratis。  
- **P37**：永久 HU 缩 Available。本剧协议房仍在可售池、只是低价合同。permanent HU ≠ 协议价。  
- **P31**：机组 allotment / extra。Crew ≠ 政务差旅。  
- **P26**：企业协议漏出周末。本剧客源是政府/差旅资格，机制类似（高峰可 blackout），客源不同。corp leak ≠ 政务。  
- **P01 / P03**：付费**非协议** remaining + Pace，不是含协议的 PMS 92%。  
- **P05**：leftover dump 对象是付费空房。禁止把 BAR 砍到协议价当 dump。  
- **T20**：不砸品牌底去冲 OCC。无地板不发明 398 / 699。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→480 不是档 H。
- **P50**：本店一场会议+小房块询价。本剧是政务/差旅协议码。会带房 ≠ per-diem。

> 交叉指针（2026-08-28 22:17，不改正文）：商业年标 / 企业 RFP vs 公开 BAR 走 **P71** `advisor-playbooks/corporate-annual-rate-vs-bar.md` · `dont-anchor-bar-to-corp-rate.md`。本剧仍管政务/per-diem，不是商业年标。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
