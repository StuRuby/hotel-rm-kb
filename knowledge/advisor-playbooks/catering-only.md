# Playbook P51｜Catering-Only｜只要厅不要房；厅满 ≠ 客房紧；不按厅满涨 BAR

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/catering-only.md`  
> BACKLOG：P51 厅-only / Catering Only · 只要厅不要房 · HIGH · 先决策卡（本轮同开）· slug **catering-only**  
> 状态：**drafted**（2026-08-25 14:17 CST）  
> 配套卡：`recommendations/dont-raise-bar-on-full-hall.md`（主卡；本剧不另开第二张卡）  
> 理论：`theory/function-space-occupancy.md`（T-Hall drafted 16:17）· `metrics/catering-only.md`（轻指标 Hypothesis）· T-Meet `theory/meeting-with-rooms.md`（P50 对照，**不重写**）· T18 `accept-low-room-for-fnb.md`  
> 交叉：P50 会带房 = 会议 **带** 小房块 ≠ 本剧零客房；P10 客房-only 无厅；P30 婚宴/社交 ≠ 本地半天厅；T18 通用闸（客房存在）沿用无贡献不翻盘，但不回答厅满涨 BAR；P22 会展肩日市场 ≠ 本店一场只要厅；P44 钟点 = 按小时客房；P48 政务 per-diem = 客房协议价；P05 leftover ≠ 因为厅满去 dump；P01/P03 看 **transient remaining**  
> 问题树：§57 「只要会议室不要客房」「厅包了散客随便卖」「厅满了 OCC 才 40% 要不要涨 BAR」「本地公司包半天厅，周末挤婚宴怎么办」  
> 仿真：`cases/sim-2026-catering-only-sat.md`（**Simulation**）  
> 证据等级：S（STR P&L：Function Room hire / AV = Other F&B Revenue）；A（HSMAI Local Catering / Group Catering / Displacement Analysis **词条**；RevPAS **词条，不是 BAR**）；A Vendor PMS（OPERA Catering Only = 只要厅、客房 grid 不可用，**不是 RMS**）；B Vendor（IDeaS / Duetto 功能空间置换，**指针，不抄公式**）；B / Hypothesis（无贡献不接高峰厅；厅满不涨 BAR）；C/D（中文贸易方向，**不是 SOP**）。Kimes 2001 ConPAST = 目录级度量名，**不摘正文，不是 BAR**  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议拆厅段 vs 客房 remaining、留厅 / Counter 厅 / 拒厅留给带房会或婚宴 / Hold BAR / 拒绝按厅满涨 / 拒绝因厅忙 dump / 移交 P50·P10·P30·P22·P44。**不操作 PMS**、不改宴会日记、不关散客、不执行 Counter、不代报 STR、不操作宴会系统。  
> 禁止：无厅+餐贡献就 Accept 低价占高峰厅；编造华住 SOP / 厅租价表 / 会带房价表；编餐毛利 / 餐标 / 厅租行情 / 佣金% / Walk $ / 婚宴标；把 RevPAS / ConPAST 当 BAR 公式；把 399/80 pax/14 remaining 当市场 Fact；一夜 −15%；按「厅满了」Increase BAR；把 BAR dump 到 399「反正没带房」；把只要厅当成 P50 去 dump BAR 赢会。

---

## 0. 一句话

**只要厅不要房 ≠ 会带房。** OPERA 口径：Catering Only = 只要厅/会，客房 grid 不可用。HSMAI：Local Catering = 不连过夜房；Group Catering = 连过夜房。  
先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。Hold 公开 BAR **779–799 首选 799**（Hypothesis / Simulation）。

完成定义：一张「先问占哪段厅 → 无贡献不 Accept 高峰厅 → 工作日可接厅仍不改 BAR / 周末 Counter 或拒厅 → 不按厅满涨、不因厅忙 dump」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | 「厅满了，OCC 才 40% 也该涨 BAR」 | 厅占用不是客房 Demand；散客 remaining 未必紧 | **不要**按厅满 Increase BAR。看 **transient remaining + Pace** |
| **B 周末低贡献占厅** | 周六便宜半天厅 vs 婚宴/会带房 | 黄金厅段被低贡献占掉 | **Counter 或拒厅**，留给带房会议/婚宴。不是 Accept 低贡献占高峰厅 |
| **C 假剩余** | 「厅都满了，客房随便卖 / leftover dump」 | 厅满与付费空房独立 | **不是因为厅满去 P05。** leftover 只在付费客房真弱时才评。不要 dump *because* 厅忙 |
| **D 工作日空厅** | 周二 leftover 厚、厅空，「反正空着」 | 会议可增量；BAR 不是厅的影子价 | 用户给了贡献 → **Accept 厅**。仍 **不要**改公开 BAR，也不因为包了厅去涨 |
| **E 厅租双计** | 套餐含厅还再加一笔厅租+餐 | STR：厅/AV = Other F&B | **不要**把功能空间加两遍。套餐含厅只计用户认领的一笔 |
| **F 误入** | 其实有房 / 只要房 / 喜宴 / 城市展会肩日 / 钟点客房 | 不是本剧客源或库存 | 有房块 → **P50**。客房-only → **P10**。婚宴 → **P30**。会展肩日市场 → **P22**。钟点客房 → **P44** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。
```

独立默认（本库 Hypothesis）：当晚定价用 **transient remaining + Pace**，不是厅日记占用、也不是「包了厅所以店忙」。厅/AV 进 STR Other F&B，**不要**发明本店 RevPAS / ConPAST 当 BAR。缺贡献 → **问，不编厅租行情 / 餐毛利 / 80 / 华住价表**。

尺（Hypothesis；799 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因厅满去 +100；禁止 dump BAR 到 399「反正没带房」。80 pax / 14 remaining / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「只要会议室不要客房」 |
| S2 | 「厅包了散客随便卖」 |
| S3 | 「厅满了 OCC 才 40% 要不要涨 BAR」 |
| S4 | 「本地公司包半天厅，周末挤婚宴怎么办」 |
| S5 | 销售要把只要厅当成会带房，准备 dump BAR「去赢会」 |
| S6 | 用户给了 Stay Date + BAR，但没给厅+餐贡献，且声明不要房 |

**不是本剧本：**

- 要厅 **and** 有客房块 → **P50**。  
- 无宴会、只要房 → **P10**。  
- 婚宴 / 寿宴 / 升学宴等社交宴会 → **P30**。  
- 「这个团 500 但餐标很高」且客房存在 → T18 卡 `accept-low-room-for-fnb.md`。本剧可以零客房；T18 不回答厅满涨 BAR。  
- 城市展会前后的市场日形状 → **P22**。  
- 钟点/day-use 客房 → **P44**。  
- 政务/差旅协议块 → **P48**。  
- 非厅事件 leftover 弱市 → **P05** 围栏；**仍禁止**因为厅满去 dump，**仍禁止** BAR→399。  
- 真 transient remaining 紧且 Pace Ahead、与厅无关 → **P01/P03**（理由是散客剩余，不是厅满）。

---

## 2. 输入（缺贡献不停，但不 Accept 高峰厅）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）— 用来算客房 remaining，不是厅尺
3) 这场会要不要客房（要房 → 离开，P50；只要房不要厅 → P10）
4) 用户口中的「厅满了 / 店里会很满」——先当待重算，看 transient remaining

应用：
5) 占哪段功能空间 / 哪天哪半天（缺则问，不编黄金厅段）
6) 会议人数（缺则问，不编 80）
7) 厅+餐贡献 FROM THE USER（或缺则不得 Accept 低价占高峰厅）
8) paid-transient remaining + Pace（重算之后才用来开 P03 或谈 dump）

Recommended：
9) 同段是否有更好的带房会议（P50）或婚宴（P30）能卖
10) 厅是否已含在套餐（双计风险）
11) 是否钟点客房（P44）/ 城市展会肩日（P22）
```

缺贡献 **不停**：条件化两支（卡 §4）。禁止「厅满了所以涨 / 没带房所以 dump BAR / 当成会带房去 399」。  
顾问 **不** 改宴会日记、不关散客、不执行 Counter、不代报 STR、不编华住厅租、不编餐毛利。

**贡献口径：** 要的是**贡献**（用户自己的收入−变动成本，或用户认领的保守额）。只有「厅租反正有 / 本地公司」或只给厅租收入 → 当收入、贡献 Unknown，**高峰仍不翻 Accept**。顾问不代编毛利率、餐标、厅租行情、佣金%、Walk $、婚宴标。

---

## 3. 两轴清单（动价前必过）

厅轴与客房轴分开。对不上就不要用「厅满了」去改 BAR。

| # | 轴 | 占客房？ | 有没有贡献/房价？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 是（散客） | 有 | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **Catering Only / 只要厅** | **否** | 用户给的空间+餐贡献；STR Other F&B | 否 | 工作日可接（有贡献）。高峰无贡献 → Counter/拒厅 |
| D3 | **会带房（厅+房块）** | 是 | 三笔 | 房块不是 BAR | **P50** |
| D4 | **客房-only 团** | 是 | 有房无厅 | 否 | **P10** |
| D5 | **婚宴占厅+房** | 通常是 | 社交宴会 | 否 | **P30** |
| D6 | **付费客房 leftover** | — | 有 | 围栏不是 BAR | **P05** 只在客房真弱；**不是因为厅满** |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是华住 SOP）：

```
Hall_slot_t              = 这场只要厅占用的功能空间 × 日/半天（用户声明）
Better_use_t             = 同段是否有带房会议或婚宴能卖（Unknown 则高峰默认可能有）
Space_contrib            = 用户认领的厅+餐贡献（无则那一笔 = 不进点结论）
Transient remaining      = Capacity − occupied − OOO     # 本剧 occupied 不含这场只要厅
PMS OCC (rooms)          = occupied / Available          # 不被只要厅抬高
Hall diary "full"        ≠ 客房紧
# 不要发明本店 RevPAS / ConPAST 当 BAR
# RevPAS = catering / available meeting sq ft（HSMAI 词条 A）——不是今晚 BAR
# ConPAST = Kimes 2001 度量名（目录级，不摘正文）——不是 BAR
```

| 对不上 | 结论 |
| --- | --- |
| 厅日记满、客房 remaining 不紧 | **A 假高峰。** 不按厅满涨 |
| 周六便宜厅挤婚宴/会带房 | **B。** Counter / 拒厅 |
| 厅满了所以要 dump 客房 | **C 假剩余。** 不是因厅忙启动 P05 |
| 工作日厅空 + leftover 厚 | **D。** 有贡献可接厅；BAR 不改、不涨 |
| 厅租再加一遍套餐 | **E。** 只计一次 |
| 有房 / 只要房 / 喜宴 / 展会肩日 / 钟点 | **F。** 离开本剧 |

80 / 14 / 799 / 发明厅租 **不出现在中国公式里**。仿真数字只在案例文件。

---

## 4. 诊断枝（禁止「厅满了所以涨 / 没带房所以 dump / 当成会带房 399」）

```
用户拿只要厅 / 厅满了 / 厅包了散客随便卖 要动 BAR 或接低贡献厅
│
├─ 还没给厅+餐贡献？
│     是 → 问，不编餐毛利 / 厅租行情。条件化：
│          高峰黄金厅段 → 不 Accept 低贡献占厅；Counter 或拒厅
│          工作日空厅 → 会议可以接；BAR 不改
│
├─ 其实要客房块？
│     是 → 形 F。离开，进 **P50**
│
├─ 不要厅、只要房？
│     是 → 形 F。离开，进 **P10**
│
├─ 是不是婚宴 / 社交宴会？
│     是 → 形 F。离开，进 **P30**
│
├─ 是不是城市展会肩日市场形状，不是本店这场只要厅？
│     是 → 形 F。离开，进 **P22**
│
├─ 是不是钟点/day-use 客房？
│     是 → 形 F。离开，进 **P44**
│
├─ A 假高峰：厅满了要涨 BAR
│     重算 transient remaining、Pace
│     ├─ 散客不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 散客真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按厅满涨」，进 **P01/P03**
│             理由是 transient remaining，不是厅日记
│
├─ B 周末低贡献占厅：黄金厅段 vs 带房会/婚宴
│     → **Counter 或拒厅**，留给 P50 / P30
│     Hold BAR 779–799 首选 799
│     禁止 Accept 低贡献占高峰厅
│
├─ C 假剩余：厅满了所以 dump 客房
│     → **拒绝因为厅忙去 dump。** P05 只在付费客房真弱时才评
│     禁止 BAR→399「反正没带房」
│
├─ D 工作日空厅：leftover 厚、厅空
│     用户给出贡献 → Accept 厅
│     无贡献 → 条件化可接（厅空机会成本低），仍问贡献
│     **仍不把公开 BAR 当高峰去涨，也不 dump**
│
└─ E 厅租双计：套餐含厅还再加厅租
      只计用户给的一笔。STR：厅/AV = Other F&B

Naive（禁止）
      「厅满了所以涨 BAR」
      「厅包了散客随便卖」
      「没带房所以 BAR→399」
      把只要厅当成 P50 去 dump BAR 赢会
      一夜 −15% 当新 BAR
      发明 80 / 厅租行情 / 华住 SOP / 餐毛利
      写成 RevPAS / ConPAST 公式定 BAR
      厅租加两遍
```

**P03 只在 transient remaining 重算之后。** 好看的厅日记不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 禁止因为厅满去 dump。禁止把公开 BAR 改成 399。  
**T18：** 无贡献不翻客房 Reject。本剧沿用到**厅**：无贡献不翻高峰厅 Accept。  
**T20：** 不砸品牌底去清一场只要厅。无地板不发明 399。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 钉：要不要客房。要房 → P50。只要房不要厅 → P10。只要厅 → 本剧。
3. 问占哪段功能空间、有没有更好的带房会/婚宴。缺贡献 → 问，不编餐毛利 / 厅租行情。
4. 声明 STR 厅/AV = Other F&B。RevPAS / ConPAST 是空间尺，不当今晚 BAR。
5. 重算：transient remaining、PMS 客房 OCC（不被只要厅抬高）、Pace、厅日记占用（须声明）。
6. 分形：A 假高峰 / B 周末占厅 / C 假剩余 / D 工作日空厅 / E 厅租双计 / F 误入。可以同时命中。
7. A：不按厅满涨。散客真紧 + Ahead → P01/P03（理由是客房 remaining）。
8. B：高峰 Counter/拒厅，留给 P50/P30；Hold BAR。C：不因厅忙 dump。
9. D：有贡献可接厅；BAR 不涨不 dump。E：只计一次。
10. 输出 留厅 / Counter 厅 / 拒厅 / Hold BAR / 拒绝按厅满涨 / 拒绝因厅忙 dump / 移交 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / remaining / Pace:
只要厅 / 占哪段厅 / 会议人数:                 （缺则 Unknown，不编 80）
厅+餐贡献（用户）:                             （缺则 Unknown，不编餐毛利 / 厅租行情）
同段是否有带房会 / 婚宴:
公开 BAR:
Decision: 留厅 / Counter 厅 / 拒厅留给 P50·P30 / Hold BAR / 拒绝按厅满涨 / 拒绝因厅忙 dump / 移交 P50 / P10 / P30 / P22 / P44 / 移交 P03 / 移交 P05（仅付费空房，不是因为厅满）
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      只要厅不是公开 BAR。不要把「没带房」写成 dump 许可证
Inventory:  付费空房保持 OPEN。高峰不把黄金厅段整给低贡献只要厅
Restriction: 不因厅满新设 MinLOS。高峰可建议拒厅（顾问不执行）
Do-not-do:
  - 无贡献 Accept 低价占高峰厅
  - 按「厅满了」Increase BAR
  - BAR → 399「反正没带房」/ 华住 SOP
  - 一夜 −15% 当新 BAR
  - 把只要厅当成 P50 去 dump BAR 赢会
  - 厅租双计
  - 把 RevPAS / ConPAST 写成 BAR
  - 操作 PMS / 宴会系统
Trigger: 用户补贡献或改期到工作日 → 重评厅；高峰出现带房会/婚宴 → 维持拒厅；客房 remaining 变紧才评 P03
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要按厅满改公开 BAR；无贡献不接高峰厅；工作日可接厅仍不改 BAR。**

| 重算结果 | BAR / 厅 | 说明 |
| --- | --- | --- |
| A：厅满、transient 不紧或 Pace 非 Ahead | **不涨。Hold** 779–799 首选 799 | 不是 High Demand |
| A：transient 真紧 + Pace Ahead | **P01/P03**：理由是散客剩余，不是厅日记 | 须把「transient 紧」写进 Situation |
| B：周末/黄金厅段低贡献 | **拒厅或 Counter**；Hold 公开 BAR | 留给 P50/P30。不 dump |
| C：厅满了所以要 dump 客房 | **拒绝。** leftover 与厅独立 | 禁止 BAR→399 |
| D：工作日空厅 + 用户给出贡献 | **Accept 厅**。公开 BAR 不动、不涨 | 必须用户给了数字才把贡献写进点 |
| D：工作日空厅 + 无贡献 | 厅可条件化接（机会成本低）；**仍问贡献**；BAR 不改 | 真冰可 P05 围栏，对象不是「因为厅满」 |
| E：厅租双计 | 贡献只进一次 | STR Other F&B |
| F：有房 / 只要房 / 喜宴 / 展会肩日 / 钟点 | 离开本剧 | P50 / P10 / P30 / P22 / P44 |
| 弱市 leftover | **P05** 围栏；对象是付费空房；**不要**因为厅满去 dump；**禁止一夜 −15%** | 不是 dump 到 399 |
| 价已最高 | 只关不涨 | 与 P03 同。接只要厅 ≠ 涨价 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
80 / 14 / 799 / 发明厅租 **只允许出现在 Simulation**，不是厅租行情 Fact，不是新 BAR。

### 5.3 Advisor-First

建议用户：厅+餐贡献（用户认领）、占哪段厅、同段是否有带房会/婚宴、transient remaining + 24h 散客 Pickup。顾问不改宴会日记、不关散客、不执行 Counter、不代报 STR、不自动调价。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；只要厅 / 占哪段（缺则问）；人数（缺则问不编 80）；厅+餐贡献（缺则 Unknown）；PMS 客房 OCC vs transient remaining vs 厅日记；BAR；谁要按厅满涨 / dump / 接低贡献厅 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。厅满 ≠ High Demand；没带房 ≠ leftover dump；只要厅 ≠ 会带房 |
| 3 | Opportunity / Risk | 按厅满涨奖励假高峰；便宜厅挤掉婚宴/会带房；BAR dump「反正没带房」；厅租双计 |
| 4 | Recommended Action | 留厅 / Counter 厅 / 拒厅 / Hold BAR / 拒绝按厅满涨 / 拒绝因厅忙 dump / 移交 P50·P10·P30·P22·P44 或 P03/P05。点或紧区间，不要「适当涨」 |
| 5 | Why | 只要厅 ≠ 会带房 + 厅 OCC ≠ 客房 OCC + 无贡献不翻高峰厅 + STR 厅/AV = Other F&B（S）+ RevPAS/ConPAST 不是 BAR |
| 6 | Expected Impact | 方向：停一次按厅满涨 / 停一次低贡献占高峰厅 / 停一次因厅忙 dump。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆厅轴 vs 客房轴则方向 Medium；缺贡献只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 80 / 餐毛利 / 厅租行情）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / transient remaining:
  只要厅 / 占哪段厅 / 会议人数:
  厅+餐贡献（用户）:
  厅日记是否满 / 客房 OCC:
  BAR / 拟议动作（按厅满涨 / dump leftover / 接低贡献厅）:

Diagnosis:
  形: A 假高峰 / B 周末占厅 / C 假剩余 / D 工作日空厅 / E 厅租双计 / F 移交 P50·P10·P30·P22·P44
  transient remaining + Pace（Ahead / On / Behind）:
  贡献: 有数字 / Unknown

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  厅:  留 / Counter / 拒（留给带房会或婚宴）
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非 transient 已进 P03）
  Do-not-do: 按厅满涨；BAR→399；无贡献占高峰厅；一夜 −15%；厅租双计；编餐毛利 / 华住 SOP

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS / 宴会系统点击步骤。禁止输出「华住厅租该卖多少」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出要客房块 | **P50** |
| 用户补出不要厅、只要房 | **P10** |
| 用户补出婚宴 / 社交宴会 | **P30** |
| 用户补出城市展会肩日，不是这场只要厅 | **P22** |
| 用户补出钟点客房 | **P44** |
| 用户补出厅+餐贡献，高峰夜仍盖不住更好的带房会/婚宴 | 维持 Counter 或拒厅 |
| 用户补出贡献且工作日厅空 | 该段厅可改 Accept；公开 BAR 不动、不涨 |
| 高峰夜 24h 散客 Pickup 已快（与厅无关） | 客房侧评 P03；仍不按厅满涨 |
| 销售仍要把 BAR 砍到 399「反正没带房」 | **拒绝。** 形 C |
| GM 仍要按厅满涨 | **拒绝。** 形 A |
| 重算后 transient Remaining 紧 + 24h 散客 Pickup 仍正 + Pace Ahead | 移交 **P03**。理由仍不是厅满 |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；**仍禁止因为厅满去 dump**；**仍禁止 BAR=399** |
| 另有更高贡献带房会/婚宴抢同一厅 | 拒这场只要厅或抬厅门槛 |

300 间尺：不因假厅满发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 按厅满 Increase BAR | GM 见厅日记满就要 +100 | 奖励假高峰；客房 leftover 厚时赶走付费散客 |
| 周六低贡献占黄金厅 | 本地半天厅挤掉婚宴/会带房 | 厅贡献 Unknown 时机会成本是 P30/P50 |
| 因为厅满 dump 客房 | 「厅包了散客随便卖」 | P05 leftover 与厅独立；公开底被一夜改写 |
| 把只要厅当成 P50 去 dump BAR | 销售坚持 BAR→399 赢会 | 本剧零客房，没有「用房赢会」这回事 |
| 厅租加两遍 | 套餐含厅还再加厅 | STR Other F&B；贡献虚高 → 错 Accept 高峰厅 |
| 把 RevPAS / ConPAST 写成今晚 BAR | 没有面积仍报坪效 | 词条/2001 度量名不是公式；本店 RevPAS NV |
| 真 transient 紧却因「怕误诊」死不涨 | 散客 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 误入会带房 / 只要房 / 婚宴 / 展会肩日 / 钟点 | 客源或库存不对 | 离开本剧 |

---

## 9. 盯什么

- 新只要厅 Pickup（销售是否继续按低贡献接周六黄金厅）  
- 散客净 Pickup（不是厅日记）  
- 公开 BAR 有没有被按厅满改成更高，或被 dump 成 399  
- 用户是否补出厅+餐贡献（认领数字，不是口号）  
- 同段是否出现带房会议 / 婚宴询价  
- 厅是否含在套餐（双计）  
- 有没有人把 RevPAS / ConPAST 写进今晚 BAR  
- wash / attrition：**登记观察，本剧不写 %**（本店仍 NV）

---

## 10. Confidence / 边界

能拆两轴（Stay Date + 只要厅声明 + BAR + remaining，并声明有没有贡献）→ 方向 **Medium**（不按厅满涨、不因厅忙 dump、无贡献不 Accept 高峰厅）。  
缺贡献只条件化 = **Low–Medium**。  
STR 厅/AV = Other F&B = **S**。HSMAI Local Catering / Displacement = **A 词条**。RevPAS = **A 词条，不是 BAR**。ConPAST = **2001 目录级，不是 BAR**。OPERA Catering Only = **A Vendor PMS**。动作 = **B / Hypothesis**。  
华住/锦江厅租价表、餐毛利、餐标、厅租行情、佣金%、Walk 成本、婚宴标、点弹性、本店 RevPAS 分母、本店 wash % = **NV**，不编。  
贡献用户没给 → **问，不编 80 / 厅租行情 / 餐毛利**。

仿真：`cases/sim-2026-catering-only-sat.md`（**Simulation**，不是真店）。周六 80 pax 只要厅、客房 Remaining 14 Pace Ahead → **拒/Counter 低贡献高峰厅；Hold BAR 779–799 首选 799；不按厅满涨；不因厅忙 dump。** 周二 leftover 110 + 空厅 → **有贡献则接厅；Hold BAR 799；不因包厅涨。** 80/14/799 / 发明厅租只在该卷。未编餐毛利 / 华住 SOP。RevPAS / ConPAST 未当 BAR。未 dump BAR 到 399。

---

## 11. 证据（2026-08-25 14:17 核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Catering Only = 只要厅、客房 grid 不可用 | A Vendor PMS | **Known 能力；不是中国 SOP** | OPERA Cloud 26.2 Managing Blocks（12:17 开，14:17 重开指针） |
| Local Catering = 不连过夜房；Group Catering = 连过夜房 | A 词条 | **Known 分桶** | HSMAI Academy Glossary Local Catering / Group Catering（14:17 **新开**） |
| Displacement Analysis = 比两场业务谁更值钱 | A 词条 | **Known 方向；无公式** | HSMAI Academy Glossary Displacement Analysis（14:17 **新开**） |
| Function Room hire / AV = Other F&B Revenue | S | **Known 口径** | STR P&L（§12/§24 指针，不重开当新发现） |
| RevPAS = catering / available meeting sq ft；不是 BAR | A 词条 | **Known 方向；不当本店 BAR** | HSMAI RevPAS（§12/§24 指针；14:17 重开确认） |
| ConPAST = contribution per available space for a given time | A 2001 Reference | **度量名 only，不摘正文，不是 BAR** | Kimes & McGuire 2001 vtechworks（§25 指针） |
| 无贡献不接高峰厅；厅满不涨 BAR | B / Hypothesis | 动作 | 本库 T18 + P50 对照 + P01 remaining |
| 华住厅租价表；餐毛利常模；399 行情 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页）：

```
华住 厅租 价表 官方
厅租行情 中国 会议型酒店
本店餐毛利 婚宴标
hotel group wash percent China
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-CAT-01 | 华住/锦江厅租价表 / 只要厅 SOP | **仍 NV。不编。** 过程剧本已可调用；没有价表仍不能写「该卖多少厅租」 |
| NV-CAT-02 | 本店餐毛利、餐标、厅租行情、佣金%、婚宴标 | 用户给贡献才进点；否则 Unknown。**不编。** |
| NV-CAT-03 | 本店功能空间面积、RevPAS / ConPAST 分母 | 不发明本店坪效。词条/2001 度量不当 BAR |
| NV-CAT-04 | 本店 wash % / cutoff 天数 | 机制已开。**本店 % 仍 NV。** MEDIUM 登记，本剧不写专篇 |
| NV-CAT-05 | 厅是否已含在套餐（双计风险） | 问；STR：厅/AV = Other F&B |
| NV-MEET-01 | 会带房最小数据模板 | **仍 NV**（P50）。有房走 P50，不在本剧填模板 |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 14:17 CST | drafted。BACKLOG P51。六形 A 假高峰不按厅满涨 / B 周末低贡献占厅 Counter 或拒厅 / C 假剩余不因厅忙 dump / D 工作日空厅可接仍不改 BAR / E 厅租不双计 / F 误入 P50·P10·P30·P22·P44。主卡 `dont-raise-bar-on-full-hall.md`。仿真 `sim-2026-catering-only-sat.md`。不编厅租行情 / 华住 SOP / 餐毛利。RevPAS / ConPAST 未当 BAR。80/14/799 Simulation only。wash MEDIUM 只登记。 |

---

## 14. 交叉（不改 P01–P50 正文；P50/P30/P10/T18 卡仅文末一行）

- **P50**：会带房 = 要厅 **and** 客房块。本剧 **零客房**。只要厅 ≠ 会带房。  
- **P10**：客房-only 团评。本剧**有厅无房**。  
- **P30**：婚宴 / 社交宴会。本剧是本地/公司只要厅。weekend 黄金厅默认留给婚宴，不是把本剧改成婚宴专篇。  
- **T18 / `accept-low-room-for-fnb.md`**：通用无贡献不翻盘闸（客房存在）。本剧沿用到厅，并钉「厅满 ≠ 涨 BAR」。  
- **P22**：城市会展肩日市场形状。本剧是本店一场只要厅询价。  
- **P44**：钟点/day-use = 按小时客房。不是功能空间。  
- **P48**：政务/差旅协议价。本剧不是 per-diem 客房。  
- **P01 / P03**：看 **transient remaining** + Pace，不是厅日记。  
- **P05**：leftover dump 对象是付费空房。禁止因为厅满去 dump。禁止 BAR→399。  
- **T20**：不砸品牌底去清一场只要厅。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。  
- **RevPAS / ConPAST**：词条/2001 度量名，不是本店 BAR 公式。  
- **wash / attrition**：P10/P50 观察尺，MEDIUM 登记，本剧不写 %。
