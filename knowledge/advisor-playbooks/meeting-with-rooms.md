# Playbook P50｜Meeting-with-Rooms｜会带房先拆厅/会 vs 餐 vs 占房；无贡献不接低价房；不 dump BAR

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/meeting-with-rooms.md`  
> BACKLOG：P50 会带房 / Meeting-with-Rooms · HIGH · 先决策卡（卡已有）· slug **meeting-with-rooms**  
> 状态：**drafted**（2026-08-25 10:17 CST）  
> 配套卡：`recommendations/dont-dump-bar-for-meeting-rooms.md`（主卡；本剧不另开第二张卡；**不重写卡正文**）  
> 理论：`theory/meeting-with-rooms.md`（T-Meet）· `metrics/meeting-with-rooms.md`  
> 交叉：P10 客房-only 团 ≠ 本剧有厅；P30 婚宴/社交宴会 ≠ 会议+小房块；T18 通用低房价高餐饮闸沿用、本剧专点会带房；P22 会展肩日市场形状 ≠ 本店一场询价；P48 政务 per-diem 块 ≠ 会议询价；P05 leftover ≠ 把 BAR 写成会带房价；P01/P03 看 **transient remaining**  
> 问题树：§56 「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」  
> 仿真：`cases/sim-2026-meeting-10-rooms-sat.md`（**Simulation**；复用 08:17 卷，10:17 追加十节）  
> 证据等级：S（STR P&L：Function Room hire / AV = Other F&B Revenue）；A（HSMAI RevPAS **词条**，**不是 BAR 公式**；HSMAI Events 课名）；B Vendor（IDeaS / Duetto 公开页：团置换 + ancillary，**不抄公式**）；B / Hypothesis（无贡献不接低价房；高峰 Counter）；C/D（中文贸易方向，**不是 SOP**）  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议拆三笔、留会 / Counter 客房 / 拒房留会 / Hold BAR / 拒绝 BAR→会带房价 / 移交 P10·P30·P22·P48。**不操作 PMS**、不改会带房码、不关散客、不执行 Counter、不代报 STR、不操作宴会系统。  
> 禁止：无厅+餐贡献就 Accept 低价房块；编造华住 SOP / 会带房价表；编餐毛利 / 餐标 / 厅租行情 / 佣金% / Walk $；把 RevPAS 当 BAR 公式；把 399/80 pax/10 当市场 Fact；一夜 −15%；按参会 OCC Increase BAR；厅租双计。

---

## 0. 一句话

**会带房 = 一场要功能空间的会议，外加（常常很小的）客房块，销售常用便宜房「去赢会议」。**  
先拆三笔：**厅/会** vs **餐** vs **占房**。没有用户给出的厅+餐**贡献**数字，不接低价房块去赢会议。工作日空房多：会议可以接；客房仍按 P10 置换，**不要把公开 BAR 砍成会带房价**。周末/高峰：会带房若挤掉能卖满的 BAR，默认 **Counter（提房价或缩间数）或拒房留会**，不是 Accept 低价占房。Hold 公开 BAR **779–799 首选 799**（Hypothesis / Simulation）。

完成定义：一张「先拆三笔 → 无贡献不 Accept 低价房 → 高峰 Counter/拒房留会 / 工作日条件化 Accept 围栏块 → 不改公开 BAR」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 用低价房赢会** | 「80 人只要 10 间，便宜房就能赢会」 | 用户没给厅+餐贡献 | **不 Accept 便宜房块。** 厅付了或有空间贡献 → 会可以留。客房 Counter 到 BAR 带或缩间 |
| **B 假高峰 OCC** | 参会人把 PMS OCC 打高 | 散客 remaining 未必紧 | **不要**按那张 OCC Increase BAR。看 **transient remaining + Pace** |
| **C 周末挤散客** | 周六会议+便宜房碰上压缩 | 小房块也会挤能卖满的 BAR | **Counter / 拒房**；Hold **779–799 首选 799**。不要 dump 公开 BAR |
| **D 工作日增量** | 周二 leftover 厚，「反正空着」 | 会议可增量；低价房仍是围栏块 | 会议可接。客房 **仅当** 用户给出数字且 net > 贡献/机会成本才 Accept 围栏块；**仍不把公开 BAR 改成 399**。无贡献 → Counter 客房 |
| **E 厅租双计** | 套餐含厅还再加一笔厅租+客房 | STR：厅/AV = Other F&B，不是客房 | **不要**把功能空间加两遍。套餐含厅只计用户认领的一笔 |
| **F 误入** | 喜宴 / 只要房 / 政务码 / 城市展会肩日 | 不是本剧客源或市场形状 | 社交宴会 → **P30**。客房-only → **P10**。政务块 → **P48**。会展肩日市场 → **P22** |

顾问必须能直接说的三句（与理论卡 / 决策卡同一套，不另发明）：

```
1. 会带房先拆三笔：厅/会 vs 餐 vs 占房。没用户给的厅+餐贡献数字，不接低价房块去「赢会议」。
2. 工作日空房多：会议本身可以接；客房仍按 P10 置换，不要把公开 BAR 砍成会带房价。
3. 周末/高峰：10 间会带房若挤掉能卖满的 BAR，默认 Counter（提房价或缩间数）或拒房留会，不是 Accept 低价占房。Hold 公开 BAR 779–799 首选 799。
```

独立默认（本库 Hypothesis）：当晚定价用 **transient remaining + Pace**，不是含会带房的 PMS OCC。厅/AV 进 STR Other F&B，**不要**发明本店 RevPAS 当 BAR。缺贡献 / 房块间数×价 → **问，不编 399 / 10 / 80 / 华住价表 / 餐毛利**。

尺（Hypothesis；799 / 399 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因会带房 OCC 去 +100；禁止 dump BAR 到会带房价。399 / 10 间 / 80 pax **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「80 人会议只要 10 间房」 |
| S2 | 「会议室包了客房随便给」 |
| S3 | 「会带房 399 要不要改 BAR」 |
| S4 | 销售要用便宜房赢一场要厅的会；或要把公开 BAR 写成会带房价 |
| S5 | 会议把 OCC 打高了，GM 要不要涨 |
| S6 | 用户给了 Stay Date + BAR，但没给厅+餐贡献或房块按夜 |

**不是本剧本：**

- 无宴会、只要房 → **P10**。占房仍用 P10 置换式，但本剧多厅/餐拆分。  
- 婚宴 / 寿宴 / 升学宴等社交宴会 → **P30**。  
- 「这个团 500 但餐标很高」且不是会带房口径 → T18 卡 `accept-low-room-for-fnb.md`（P10 的 TRM 分支）。本剧沿用无贡献不翻盘闸，并钉「赢会 ≠ dump BAR」。  
- 城市展会前后的市场日形状 → **P22**。本剧是**本店一场**会议询价。  
- 政务/差旅协议块 → **P48**。  
- 非会议 leftover 弱市 → **P05** 围栏；**仍禁止**把公开 BAR 写成会带房价。  
- 真 transient remaining 紧且 Pace Ahead、会带房已划掉 → **P01/P03**（理由是散客剩余，不是参会 OCC）。

---

## 2. 输入（缺贡献不停，但不 Accept 低价房）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) 会议要不要功能空间（不要厅 → 离开，P10）
4) 用户口中的 OCC% /「店里会很满」——先当待重算，看 transient remaining

应用：
5) 按夜房块 × 会带房价（缺则问，不编 10 / 399）
6) 会议人数 / 厅是否已付（缺则问，不编 80）
7) 厅+餐贡献 FROM THE USER（或缺则不得 Accept 低价房）
8) paid-transient remaining + Pace（重算之后才用来开 P03）

Recommended：
9) 是否婚宴（P30）/ 客房-only（P10）/ 政务码（P48）/ 城市展会肩日（P22）
10) 厅是否已含在套餐（双计风险）
11) 佣金 / 客房变动成本（用户有则减；没有不编）
```

缺贡献 **不停**：条件化两支（卡 §4）。禁止「10 间很少所以随便给 / BAR 跟到会带房价 / 按参会 OCC 涨」。  
顾问 **不** 改会带房码、不关散客、不执行 Counter、不代报 STR、不编华住会带房价、不编餐毛利。

**贡献口径：** 要的是**贡献**（用户自己的收入−变动成本，或用户认领的保守额）。只有「餐很高 / 赢了会」或只给餐标收入 → 当收入、贡献 Unknown，**仍不翻 Accept**。顾问不代编毛利率、餐标、厅租行情、佣金%、Walk $。

---

## 3. 三笔清单（动价前必过）

先拆三笔。对不上就不要用那张好看的 OCC 或会带房价去改 BAR。

| # | 笔 | 有没有贡献/房价？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 有 | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **厅 / 会** | 用户给的空间贡献；STR Other F&B | 否 | 厅付了或有贡献 → 会可以留。不要双计进客房 |
| D3 | **餐** | 用户给的 F&B 贡献 | 否 | 口号不进点。收入 ≠ 贡献 |
| D4 | **占房 / 会带房块** | 有（合同块价） | **否**（围栏块） | 按夜走 P10 置换。无贡献不 Accept 低价。不改成公开 BAR |
| D5 | **客房-only 团** | 有房无厅 | 否 | **P10** |
| D6 | **婚宴占房** | 社交宴会 | 否 | **P30** |
| D7 | **政务/差旅协议** | 有房价合同码 | 否 | **P48** |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是华住 SOP）：

```
MeetingRooms_t           = 会带房合同客房晚（按夜）
Displaced_t              = max(0, ExpectedTransient_t + MeetingRooms_t − Capacity_t)
RoomOppCost              = Σ_t Displaced_t × TransientNet_t
MeetingRoomNet           = Σ_t MeetingRooms_t × MeetingRoomRate_t  − 已声明佣金（无则 Unknown，不编）
NetDelta_rooms           = MeetingRoomNet − RoomOppCost − LOS_extra（点名肩日，给不出则 Unknown）
TRM NetDelta             = NetDelta_rooms + Space_contrib + F&B_contrib − Meeting_opp
                           （Space / F&B 必须用户给；无则那一笔 = 不进点结论）
Transient remaining      = Capacity − occupied − OOO     # 声明是否已含会带房块
PMS OCC (incl. meeting)  = occupied / Available          # 可被参会人抬高
```

公式骨架来自本库 `group/group-displacement.md`。RevPAS = catering / available meeting sq ft（HSMAI 词条 A）——**相似于 RevPAR 作为空间效率类比，不是今晚 BAR 公式。** 没有本店面积与餐饮贡献 → 不报本店 RevPAS。

| 对不上 | 结论 |
| --- | --- |
| 销售用便宜房赢会、无贡献 | **A。** 不 Accept 低价房。厅付了可留会 |
| PMS OCC 高、分子侧含参会块 | **B 假高峰。** 不按那张 OCC 涨 |
| 周六剩余紧、便宜房会挤 BAR | **C。** Counter / 拒房留会；Hold BAR |
| 工作日 leftover 厚 | **D。** 会议可接；客房有数字且 net 盖过才 Accept 围栏块；BAR 不改 |
| 厅租再加一遍客房 | **E。** 只计一次 |
| 喜宴 / 只要房 / 政务 / 展会肩日 | **F。** 离开本剧 |

399 / 80 / 10 **不出现在中国公式里**。仿真数字只在案例文件。

---

## 4. 诊断枝（禁止「10 间随便给 / BAR 跟到会带房价 / 按参会 OCC 涨」）

```
用户拿会带房 / 会议室包客房 / 会带房价 要动 BAR 或接低价房
│
├─ 还没给厅+餐贡献？
│     是 → 问，不编餐毛利 / 厅租行情。条件化：
│          不 Accept 低价房块去赢会议
│          厅付了 → 会可以留；客房 Counter
│          高峰会挤 BAR → Counter/拒房留会；Hold BAR
│
├─ 还没给房块间数或房价？
│     是 → 问，不编 10 / 399 / 80
│
├─ 不要厅、只要房？
│     是 → 形 F。离开，进 **P10**
│
├─ 是不是婚宴 / 社交宴会？
│     是 → 形 F。离开，进 **P30**
│
├─ 是不是政务/差旅协议码，不是一场会议询价？
│     是 → 形 F。离开，进 **P48**
│
├─ 是不是城市展会肩日市场形状，不是本店这场会？
│     是 → 形 F。离开，进 **P22**
│
├─ A 用低价房赢会：无贡献
│     → **不 Accept 便宜房。** 厅付了可留会。客房 Counter 到 BAR 带或缩间
│
├─ B 假高峰：PMS OCC 好看，分子侧含参会
│     重算 transient remaining、Pace
│     ├─ 散客不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 散客真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按参会 OCC 涨」，进 **P01/P03**
│             理由是 transient remaining，不是虚荣 OCC
│             先 Counter/拒会带房块，再决定涨不涨
│
├─ C 周末挤散客：剩余紧或 Pace Ahead，房块会挤 BAR
│     → **Counter 房价到 BAR 带或缩间 / 拒房留会**
│     Hold BAR 779–799 首选 799
│     禁止 dump 公开 BAR
│
├─ D 工作日增量：leftover 厚
│     会议可接（厅付了或有空间贡献）
│     客房：用户给出数字且 net > 贡献/机会成本 → Accept **围栏房块**（不是公开 BAR）
│     无贡献 → Counter 客房。**仍不把公开 BAR 改成 399**
│
└─ E 厅租双计：套餐含厅还再加厅租+客房
      只计用户给的一笔。STR：厅/AV = Other F&B

Naive（禁止）
      「10 间很少所以随便给」
      「会议室包了客房随便给」
      「BAR 跟到 399 / 会带房价」
      「80 人住店所以涨 BAR」
      一夜 −15% 当新 BAR
      发明 10 / 399 / 80 / 华住 SOP / 餐毛利
      写成 RevPAS 公式定 BAR
      厅租加两遍
```

**P03 只在 transient remaining 重算之后。** 好看的参会 OCC 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 禁止把公开 BAR 改成会带房价当 dump。  
**T18：** 无贡献不翻客房 Reject。本剧沿用。  
**T20：** 不砸品牌底去赢一场会。无地板不发明 399。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 拆三笔：厅/会、餐、占房按夜×价。缺贡献 → 问，不编餐毛利。缺间数/价 → 问，不编 10 / 399。
3. 定性：要厅+房 → 本剧。只要房 → P10。喜宴 → P30。政务码 → P48。展会肩日市场 → P22。
4. 声明 STR 厅/AV = Other F&B。RevPAS 是词条，不当今晚 BAR。
5. 重算：Displaced_t、transient remaining、PMS OCC（含会，须声明）、Pace。
6. 分形：A 赢会 / B 假高峰 / C 周末挤散客 / D 工作日增量 / E 厅租双计 / F 误入。可以同时命中。
7. A：无贡献不 Accept 低价房；厅付了可留会；客房 Counter。
8. B：不按参会 OCC 涨。散客真紧 + Ahead → P01/P03（先 Counter 房块）。C：高峰 Counter/拒房留会；Hold BAR。
9. D：会议可接；客房有数字且 net 盖过才 Accept 围栏块；BAR 不改成会带房价。E：只计一次。
10. 输出 留会 / Counter 客房 / 拒房留会 / Hold BAR / 拒绝 BAR→会带房价 / 移交 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / remaining / Pace:
会议人数 / 厅是否已付 / 厅+餐贡献（用户）:   （缺则 Unknown，不编 80 / 餐毛利）
房块按夜 × 会带房价:                         （缺则 Unknown，不编 10 / 399）
公开 BAR:
Decision: 留会 / Counter 客房 / 拒房留会 / Hold BAR / 拒绝 BAR→会带房价 / 移交 P10 / P30 / P48 / P22 / 移交 P03 / 移交 P05（仅付费空房，BAR≠会带房价）
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      会带房块保持围栏。不要把块价写成公开 BAR
Inventory:  付费空房保持 OPEN。高峰不把尾部整给低价会带房
Restriction: 不因参会 OCC 新设 MinLOS。高峰可建议缩间/拒房（顾问不执行）
Do-not-do:
  - 无贡献 Accept 低价房块
  - BAR → 399 / 会带房价 / 华住 SOP
  - 一夜 −15% 当新 BAR
  - 按参会 OCC Increase BAR
  - 厅租双计
  - 把 RevPAS 写成 BAR
  - 操作 PMS / 宴会系统
Trigger: 用户补贡献或房块改价/缩间 → 重算 NetDelta；高峰 ET 上修到将满 → 维持 Counter
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要用低价房赢会去改公开 BAR；无贡献不接低价房；高峰 Counter/拒房留会。**

| 重算结果 | BAR / 客房 | 说明 |
| --- | --- | --- |
| A：无贡献赢会 | BAR **Hold**。客房 **Counter**（到 BAR 带或缩间）。厅付了可留会 | 禁止 Accept 399 块当赢会成本。399 只 Simulation |
| B：只是参会撑的 OCC，transient 不紧或 Pace 非 Ahead | **不涨。Hold** 779–799 首选 799 | 不是 High Demand |
| B：transient 真紧 + Pace Ahead | **P01/P03**：先 Counter/拒会带房块；未最高才第一刀。理由是散客剩余，不是参会 OCC | 须把「transient 紧」写进 Situation |
| C：周末/高峰挤散客 | **拒便宜房 / Counter 779–799 首选 799**；会可留。Hold 公开 BAR | 10 间也会挤。不 dump |
| D：工作日 leftover 厚 + 无贡献 | **留会；Counter 客房**。BAR 不改成 399 | 真冰可 P05 围栏，对象不是会带房价 |
| D：工作日 leftover 厚 + 用户给出 net > 机会成本 | **Accept 会议 + 围栏房块**。公开 BAR 不动 | 必须用户给了数字 |
| E：厅租双计 | 贡献只进一次 | STR Other F&B |
| F：喜宴 / 只要房 / 政务 / 展会肩日 | 离开本剧 | P30 / P10 / P48 / P22 |
| 弱市 leftover | **P05** 围栏；对象是付费空房；**不要**把 BAR 写成会带房价；**禁止一夜 −15%** | 不是 dump 到 399 |
| 价已最高 | 只关不涨 | 与 P03 同。接低价会带房 ≠ 涨价 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
399 / 10 / 80 / 799 **只允许出现在 Simulation**，不是会带房行情 Fact，不是新 BAR。

### 5.3 Advisor-First

建议用户：厅+餐贡献（用户认领）、按夜房块×价、厅是否已付/是否含在套餐、transient remaining + 24h 散客 Pickup。顾问不改会带房码、不关散客、不执行 Counter、不代报 STR、不自动调价。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；会议人数/厅是否已付（缺则问不编 80）；房块按夜×价（缺则问不编 10/399）；厅+餐贡献（缺则 Unknown）；PMS OCC vs transient remaining；BAR；谁要赢会/改 BAR/按 OCC 涨 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。无贡献 ≠ Accept 低价房；参会 OCC ≠ High Demand；会带房价 ≠ 公开 BAR |
| 3 | Opportunity / Risk | 用便宜房赢会却挤掉 BAR；BAR dump 到会带房价；按参会 OCC 涨；厅租双计 |
| 4 | Recommended Action | 留会 / Counter 客房 / 拒房留会 / Hold BAR / 拒绝 BAR→会带房价 / 移交 P10·P30·P22·P48 或 P03/P05。点或紧区间，不要「适当优惠」 |
| 5 | Why | 先拆三笔（T-Meet）+ 无贡献不翻盘（T18）+ STR 厅/AV = Other F&B（S）+ RevPAS 不是 BAR（A 词条） |
| 6 | Expected Impact | 方向：停一次无贡献 Accept / 停一次 BAR=会带房价 / 停一次按参会 OCC 涨。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆三笔则方向 Medium；缺贡献只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 399 / 10 / 80 / 餐毛利）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / 房块按夜×价 / 会议人数:
  厅是否已付 / 厅+餐贡献（用户）:
  OCC 口径（是否含会带房）:
  PMS OCC / transient remaining / Pace:
  BAR / 拟议动作（Accept 低价房 / BAR→会带房价 / 按 OCC 涨）:

Diagnosis:
  形: A 用低价房赢会 / B 假高峰 OCC / C 周末挤散客 / D 工作日增量 / E 厅租双计 / F 移交 P10·P30·P48·P22
  transient remaining + Pace（Ahead / On / Behind）:
  贡献: 有数字 / Unknown

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  会议:  留 / 拒 / 另议
  客房:  Accept 围栏块 / Counter（价带或缩间）/ 拒房留会
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非 transient 已进 P03）
  Do-not-do: 无贡献 Accept 低价房；BAR→399；按参会 OCC 涨；一夜 −15%；厅租双计；编餐毛利 / 华住 SOP

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS / 宴会系统点击步骤。禁止输出「华住会带房该卖多少」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出不要厅、只要房 | **P10** |
| 用户补出婚宴 / 社交宴会 | **P30** |
| 用户补出政务/差旅协议码 | **P48** |
| 用户补出城市展会肩日，不是这场会 | **P22** |
| 用户补出厅+餐贡献，高峰夜仍盖不住 / 团不改价不减房 | 维持 Counter 或拒房留会；会另议 |
| 用户补出贡献且工作日 leftover 厚、net > 机会成本 | 该夜客房可改 Accept **围栏块**（仍要截止）；公开 BAR 不动 |
| 用户补 ET，高峰夜 Displaced = 0 | 该夜客房可改 Accept（仍要截止）；餐是加项；BAR 仍不改成会带房价 |
| 高峰夜 24h 散客 Pickup 已快（非本会） | 停加房，维持 Counter；禁止关散客 |
| 销售仍要把 BAR 砍到会带房价 / 399 | **拒绝。** 形 A/C |
| GM 仍要按参会 OCC 涨 | **拒绝。** 形 B |
| 重算后 transient Remaining 紧 + 24h 散客 Pickup 仍正 + Pace Ahead | 移交 **P03**（先 Counter 房块）。理由仍不是参会 OCC |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；**仍禁止 BAR=会带房价** |
| 另有更高价会议抢同一厅 | 加上 Meeting_opp 再算；可能拒这场或抬厅门槛 |

300 间尺：不因假参会 OCC 发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 无贡献 Accept 低价房赢会 | 销售坚持 10 间随便给 | 高峰挤掉 BAR；淡日把 399 写成结构 |
| 把 BAR 公开卖成会带房价 | 销售坚持 BAR→399 | 围栏块泄漏成公开底；冲 OCC 砸结构 |
| 按参会 OCC 当 High Demand | Pace 约 On 却按虚荣 OCC 涨 | 奖励低价会议占用；付费客人被挤出 |
| 厅租加两遍 | 套餐含厅还再加厅+房 | STR Other F&B；贡献虚高 → 错 Accept |
| 把 RevPAS 写成今晚 BAR | 没有面积仍报坪效 | 词条不是公式；本店 RevPAS NV |
| 真 transient 紧却因「怕误诊」死不涨 | 散客 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 误入婚宴 / 只要房 / 政务 / 展会肩日 | 客源或市场形状不对 | 离开本剧，走 P30 / P10 / P48 / P22 |

---

## 9. 盯什么

- 新会带房 Pickup（销售是否继续按 会带房价接周六）  
- 散客净 Pickup（不是含会带房的 PMS OCC）  
- 公开 BAR 有没有被改成会带房价 / 399  
- 用户是否补出厅+餐贡献（认领数字，不是口号）  
- 房块能否改价或缩到 must-keep  
- 厅是否含在套餐（双计）  
- 有没有人把 RevPAS 写进今晚 BAR

---

## 10. Confidence / 边界

能拆三笔（Stay Date + 房块按夜 + BAR + remaining，并声明有没有贡献）→ 方向 **Medium**（不自动涨、不把 BAR 写成会带房价、无贡献不 Accept 低价房）。  
缺贡献只条件化 = **Low–Medium**。  
STR 厅/AV = Other F&B = **S**。RevPAS = **A 词条，不是 BAR**。动作 = **B / Hypothesis**。  
会带房最小数据模板、华住/锦江会带房价表、餐毛利、餐标、厅租行情、佣金%、Walk 成本、点弹性、本店 RevPAS 分母 = **NV**，不编。  
本店会带房价 / 贡献用户没给 → **问，不编 399 / 10 / 80 / 餐毛利**。

仿真：`cases/sim-2026-meeting-10-rooms-sat.md`（**Simulation**，不是真店）。周二 leftover → **留会（厅付了），Counter 客房，Hold BAR 799，拒绝 BAR→399。** 周六 Remaining 14 Pace Ahead → **拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。** 399/10/80 只在该卷。未编餐毛利 / 华住 SOP。RevPAS 未当 BAR。

---

## 11. 证据（2026-08-25 08:17 已核，本轮不新搜会带房价表）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Function Room hire / AV = Other F&B Revenue | S | **Known 口径** | STR P&L Data Reporting Guidelines（08:17 重开，理论卡已引） |
| RevPAS = catering / available meeting sq ft；不是 BAR | A 词条 | **Known 方向；不当本店 BAR** | HSMAI Academy Glossary RevPAS（08:17 打开） |
| 功能空间 RM 课名存在 | A 课名 | 不摘讲义 | HSMAI Events Revenue Optimisation |
| 接 M&E 要算置换 + rooms/space/F&B；booked ≠ profitable | B Vendor | **Known 方向；不抄逐步公式** | IDeaS / Duetto 公开页（08:17 打开） |
| 无贡献不接低价房；高峰 Counter | B / Hypothesis | 动作 | 本库 T18 + P10 + T-Meet |
| 华住会带房价表；餐毛利常模；399 行情 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页；本小时不新搜）：

```
华住 会带房 价表 官方
会带房 会议 客房 收益
本店餐毛利 厅租行情
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-MEET-01 | 国内会议型「会带房」最小数据模板 / 华住 SOP / 会带房价表 | **仍 NV。不编。** 过程剧本已可调用；没有模板仍不能写「该卖多少会带房价」 |
| NV-MEET-02 | 本店餐毛利、餐标、厅租行情、佣金% | 用户给贡献才进点；否则 Unknown。**不编。** |
| NV-MEET-03 | 本店功能空间面积、RevPAS 分母 | 不发明本店 RevPAS。词条 A，公式不当 BAR |
| NV-MEET-04 | 本店会带房块 cutoff / wash | 无史不编 %；Counter 加截止 |
| NV-MEET-05 | 厅是否已含在套餐（双计风险） | 问；STR：厅/AV = Other F&B |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 10:17 CST | drafted。BACKLOG P50。六形 A 用低价房赢会 / B 假高峰 OCC / C 周末挤散客 / D 工作日增量 / E 厅租双计 / F 误入 P30·P10·P48·P22。主卡复用 `dont-dump-bar-for-meeting-rooms.md`（不重写）。仿真复用 `sim-2026-meeting-10-rooms-sat.md`。不编 399 / 华住 SOP / 餐毛利。会带房模板仍 NV。RevPAS 未当 BAR。399/10/80 Simulation only。 |

---

## 14. 交叉（不改 P01–P49 正文；P10/P30/P22/P48 仅文末一行）

- **P10**：客房-only 团评。本剧**有厅**。占房仍用 P10 置换式。rooms-only ≠ 会带房。  
- **P30**：婚宴 / 社交宴会。本剧是会议+小房块。wedding ≠ 会带房。  
- **T18 / `accept-low-room-for-fnb.md`**：通用无贡献不翻盘闸。本剧沿用，并钉「赢会 ≠ dump BAR」。  
- **P22**：城市会展肩日市场形状。本剧是本店一场会议询价。exhibition shoulder ≠ 这场会。  
- **P48**：政务/差旅协议价。本剧不是 per-diem 块。gov ≠ 会带房。  
- **P01 / P03**：看 **transient remaining** + Pace，不是含会带房的 PMS OCC。  
- **P05**：leftover dump 对象是付费空房。禁止把 BAR 砍到会带房价当 dump。  
- **T20**：不砸品牌底去赢一场会。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。  
- **RevPAS**：HSMAI 词条，不是本店 BAR 公式。

只要厅不要房（零客房、Catering Only）走 **P51** `advisor-playbooks/catering-only.md` · `dont-raise-bar-on-full-hall.md`（2026-08-25 14:17），不是把本剧改成厅-only 专篇。会带房仍走本卡。

已在书上的团 pickup vs cutoff vs house return 走 **P52** `advisor-playbooks/group-cutoff-wash.md` · `dont-dump-before-cutoff.md`（2026-08-25 18:17），不是把本剧改成 wash 专篇。会带房赢会仍走本卡。本店 wash% 仍 NV。
