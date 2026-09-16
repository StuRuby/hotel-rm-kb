# Simulation Case｜会带房 80 人 / 10 间@399：周二 leftover Counter 客房；周六拒便宜房、Hold BAR 799

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-meeting-10-rooms-sat.md`  
> 日期：2026-08-25  
> 问：「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」  
> 调用：`dont-dump-bar-for-meeting-rooms.md` · T-Meet `theory/meeting-with-rooms.md` · `metrics/meeting-with-rooms.md` · P10 · T18 · P30 · P22 · P48 · P01 / P03 / P05 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**80 人 / 10 间 @399、BAR 799 只在本文件当 Simulation，不是市场行情 Fact，不是华住会带房价表。** 799 / 399 只 Hypothesis/Simulation。不伪造精确增收。不编餐毛利、厅租行情、佣金%、点弹性。Advisor 不操作 PMS / 宴会系统。**P50 未写。**

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一场询价（80 pax / 10 间 @399，F&B 贡献 **Unknown**），两拍 Stay Date。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，有中型会议室，无声明品牌底）
分析日：2026-08-25 周二 08:17 CST
用户原话：「销售说 80 人会议只要 10 间、给 399 就能赢下来。会议室包了客房随便给。BAR 要不要改成会带房价？」
GM：OCC 看着会上去，要不要涨
销售：10@399 赢会；公开 BAR 干脆跟到 399
宴会：厅「差不多能包进会议」，贡献数字没给

询价（两拍共用，Simulation）：
  80 pax 白天会议
  客房块 10 间 × 399（会带房价，发明数）
  F&B / 厅贡献：Unknown（销售只说「餐会有的」「赢了会」）
  厅是否已付：用户口头「会议要厅」，未给租金点
  佣金 / 变动成本 / 品牌底：Unknown

拍 1 · 工作日 leftover
  Stay Date：2026-09-01（下周二）
  DTA：7
  Physical：180  OOO：0
  Occupied（不含本询价）：70
  Remaining：110（厚）
  3D Pickup：+3（慢）
  公开 BAR（标准、不含早、灵活）：799
  Pace：Behind / 市场偏冰（Hypothesis 练习）
  拟议：Accept 10@399 并 BAR→399「反正空着」

拍 2 · 周末压缩
  Stay Date：2026-08-29（本周六）
  DTA：4
  Physical：180  OOO：0
  Occupied（不含本询价）：166
  Remaining：14
  3D Pickup（散客）：+6（约 2 间/日）
  Pace：Ahead vs STLY（Hypothesis）
  公开 BAR：799
  拟议：Accept 10@399 赢会；或 BAR→399 冲 OCC
```

80 / 10 / 399 / 799 / 14 / 110 **只是本卷练习数**。399 **不是**会带房行情 Fact。

---

## 1. Intake

口径：会带房块尚未进 OTB。STR：厅/AV 若成交进 Other F&B，不进客房。80 人 ≠ 80 间。  
独立店。无声明品牌底 → **不发明华住会带房价**。  
F&B / 厅贡献 = **Unknown**，不编毛利。佣金 Unknown。Walk 不编。

| 尺 | 拍 1 周二 | 拍 2 周六 |
| --- | --- | --- |
| Physical | 180 | 180 |
| Remaining（接块前） | **110** | **14** |
| 会带房块 | 10@399 | 10@399 |
| BAR | 799 | 799 |
| F&B/厅贡献 | Unknown | Unknown |
| Pace | 冰 / leftover 厚 | Ahead |
| 销售拟议 | Accept 399 + BAR→399 | Accept 399 或 BAR→399 |

Pace 拍 2：线性 Days-to-Sellout = 14/2 = **7 日 > DTA 4**，不是 P03 开门涨价；但是 **10 间低价块占周六 = 置换**。

**预选 3 个补数：** 厅+餐贡献（用户认领）；10 间能否改价或缩到 must-keep；8/29 前 24h 散客 Pickup。

本卷 **不** 操作 PMS、不改 BAR、不关散客。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/25 08:17 CST。同一场 80 人会议 + 10 间@399，F&B Unknown。拍 1 = 下周二 leftover 厚。拍 2 = 本周六 remaining 14、Pace Ahead。BAR 799。销售要赢会并想把 BAR 写成 399。

本卷 **不是** 真店，也不是「中国会带房=399」Fact。

---

## 3. Diagnosis

### 拍 1 · 形 D（工作日增量）+ 形 A（无贡献赢会）

剩余 110，市场偏冰。**会议本身可以接**（厅若付了或稍后给出空间贡献）。  
客房：F&B Unknown → **不得 Accept 10@399 当「赢会成本」。** Counter 客房（提价或缩间）。  
**禁止**把公开 BAR 改成 399。P05 围栏对象仍是付费空房，不是新 BAR。

Displaced 周二（Hypothesis）：ET 远低于 170，10 间 **Displaced≈0**。客房-only 可以不亏——但仍缺贡献闸。本卡选择：**留会；客房 Counter，不把 399 写成 BAR。** 若用户稍后给出 net > 贡献，可 Accept **围栏房块**，公开 BAR 仍 799。

### 拍 2 · 形 C（周末挤散客）+ 形 A + 形 B 风险

剩余 14。10 间@399 会吃掉本来还能卖 BAR 的房。  
ET 若接近满（用户经验类周六最终高）→ Displaced ≈ 10。  
RoomOppCost 方向 ≈ 10 × 799 Gross（净未知，可能高估散客）≫ 10 × 399。  
F&B Unknown → **不能**用「赢会」翻客房 Reject。  
默认：**拒便宜房 / Counter 到 779–799 首选 799**；会可留（厅另议）。  
**Hold 公开 BAR 779–799 首选 799。** 不 dump。  
形 B：不要因为 80 人「店里很满」去 Increase BAR；看的是 transient remaining 14，不是参会口号。

不是 P30（不是婚宴）。不是 P10-only（有厅）。不是 P48（不是政务码）。不是 P22（不是城市展会肩日）。

---

## 4. Options（不编增收精确值）

| 选项 | 拍 1 周二 | 拍 2 周六 |
| --- | --- | --- |
| 销售：Accept 10@399 且 BAR→399 | **拒 BAR→399。** 留会；客房 Counter | **拒。** 拒便宜房或 Counter 到 BAR 带 |
| GM：按会议 OCC 涨 | **拒。** leftover 厚不是 High Demand | **拒。** 14 间 remaining + 会带房 ≠ 涨价令 |
| P05 dump BAR | **拒写成新 BAR。** 真冰可围栏，对象不是会带房价 | **拒。** remaining 14 不是冰 leftover |
| **本卷** | 留会（厅付了）；Counter 客房；Hold BAR 799 | 拒便宜房 / Counter 779–799 首选 799；Hold BAR；不 dump |

不伪造「Counter 后多收多少」。方向：保住公开 BAR；高峰不把 10 间送给 399。

---

## 5. Advise（口播）

```
拍 1 周二：厅如果付了，会可以接。10 间 399 没有餐/厅贡献数字，不要当赢会成本整块接；客房 Counter。公开 BAR 不要改成 399。
拍 2 周六：14 间剩余，10 间会挤散客。默认拒便宜房或还价到 779–799 首选 799；会可留。Hold 公开 BAR。禁止 dump。
两拍都是：先拆厅 / 餐 / 占房。80 人不是 80 间。399/10/80 只是练习数。
```

Overnight 尺：**Hold 779–799 prefer 799**（Hypothesis/Simulation only）。

---

## 6. Do-not-do

- 无贡献 Accept 10@399 赢会  
- BAR → 399 / 华住会带房价  
- 一夜 −15% 当新 BAR  
- 按 80 人 OCC 涨 BAR  
- 厅租双计  
- 写成 RevPAS 公式定 BAR  
- 写 P50 / 操作 PMS / 宴会系统  
- 把本卷 399/10/80/14 当 Fact

---

## 7. 兼容

P10：占房置换式；本卷多厅。  
P30：不是喜宴。  
T18：无贡献不翻盘。本卷遵守。  
P48：不是政务 40@480。  
P05：110 间 leftover 不是把 BAR 写成 399；14 间更不是 dump 燃料。  
P01/P03：拍 2 remaining 14、线性 7>DTA → 不涨；置换走 Counter/拒房。  
T20：无地板不发明 399。

---

## 8. Need Verification（本卷不填）

华住会带房 SOP / 价表；餐毛利；厅租行情；本店 wash%；RevPAS 分母（面积）。

---

## 9. 一句话标题

**Sim headline：** 180 间城市店 Simulation，80 人会议 / 10 间@399（发明）、F&B Unknown。周二 leftover 110 → **留会（厅付了），Counter 客房，Hold BAR 799，拒绝 BAR→399。** 周六 Remaining 14 Pace Ahead → **拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。** 399/10/80 Simulation only。P50 未写。未编餐毛利 / 华住 SOP。

---

## 10. P50 十段顾问输出（2026-08-25 10:17 CST 追加；不改上文主结论 / 不改 headline）

> 按 `decision-framework/advisor-process.md` 十节填本卷。Headline **不变**：Tue leftover thick → 留会（厅付了），Counter 客房，Hold BAR 799，拒绝 BAR→399。Sat remaining 14 Pace Ahead → 拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。399/10/80 Simulation only。P50 现已 drafted。未编餐毛利 / 华住 SOP。RevPAS 未当 BAR。

### 1. Situation

180 间 Simulation 城市店（非真店）。分析时刻 2026-08-25 10:17 CST（原卷 08:17）。同一场询价：80 pax 白天会议 + 客房块 10 间 ×399（发明数），F&B / 厅贡献 **Unknown**（销售只说「餐会有的」「赢了会」）。厅是否已付：用户口头「会议要厅」，未给租金点。公开 BAR 799。佣金 / 变动成本 / 品牌底 Unknown。

拍 1 · 工作日 leftover：Stay Date 2026-09-01 周二，DTA 7。Physical 180，OOO 0，Occupied（不含本询价）70，Remaining **110**（厚）。3D Pickup +3（慢）。Pace Behind / 市场偏冰（Hypothesis 练习）。拟议：Accept 10@399 并 BAR→399「反正空着」。

拍 2 · 周末压缩：Stay Date 2026-08-29 周六，DTA 4。Occupied（不含本询价）166，Remaining **14**。3D 散客 Pickup +6（约 2 间/日）。Pace Ahead vs STLY（Hypothesis）。线性 Days-to-Sellout = 14/2 = 7 > DTA 4（不是 P03 开门涨价）。拟议：Accept 10@399 赢会；或 BAR→399 冲 OCC。GM：OCC 看着会上去，要不要涨。

80 / 10 / 399 / 799 / 14 / 110 **只是本卷练习数**。399 **不是**会带房行情 Fact。

### 2. Diagnosis

**拍 1 · 形 D（工作日增量）+ 形 A（无贡献赢会）。** Remaining 110，市场偏冰。会议本身可以接（厅若付了或稍后给出空间贡献）。客房：F&B Unknown → **不得 Accept 10@399 当「赢会成本」。** Counter 客房（提价或缩间）。**禁止**把公开 BAR 改成 399。Displaced 周二（Hypothesis）：ET 远低于 170，10 间 **Displaced≈0**——客房-only 可以不亏，但仍缺贡献闸。本卷：**留会；客房 Counter，不把 399 写成 BAR。** 若用户稍后给出 net > 机会成本，可 Accept **围栏房块**，公开 BAR 仍 799。

**拍 2 · 形 C（周末挤散客）+ 形 A + 形 B 风险。** Remaining 14。10 间@399 会吃掉本来还能卖 BAR 的房。ET 若接近满 → Displaced ≈ 10。RoomOppCost 方向 ≈ 10 × 799 Gross（净未知）≫ 10 × 399。F&B Unknown → **不能**用「赢会」翻客房 Reject。默认：**拒便宜房 / Counter 到 779–799 首选 799**；会可留（厅另议）。**Hold 公开 BAR 779–799 首选 799。** 不 dump。形 B：不要因为 80 人「店里很满」去 Increase BAR；看的是 transient remaining 14，不是参会口号。线性 7>DTA → 不进 P03 涨价。

不是 P30（不是婚宴）。不是 P10-only（有厅）。不是 P48（不是政务码）。不是 P22（不是城市展会肩日）。形 E 未命中本卷（没有人把厅租加两遍进客房）。

Naive「10 间很少所以随便给 / BAR 跟到 399 / 80 人所以涨」：不对。

### 3. Opportunity / Risk

主机会：保住公开 BAR 799；高峰不把 10 间送给 399；工作日仍可留会。  
主风险：销售继续 Accept 10@399 赢会；把 399 写进公开 BAR；GM 按参会 OCC 涨；把本卷 399/10/80 写成行情 Fact。  
假精确：不承诺 Counter 后多收多少。不编餐毛利翻盘金额。

### 4. Recommended Action

**拍 1 周二：留会（厅付了）；Counter 客房；Hold BAR 799；拒绝 BAR→399。**  
**拍 2 周六：拒便宜房 / Counter 779–799 首选 799；会可留；Hold 公开 BAR；不 dump。**

```text
Stay Date:     拍1 2026-09-01 Tue（DTA 7） / 拍2 2026-08-29 Sat（DTA 4）
Form:          拍1 D+A；拍2 C+A（+B 风险）
Meeting:       留会（厅若付了 / 空间另议）
Rooms 拍1:     Counter（提价或缩间）。不 Accept 10@399 当赢会成本
Rooms 拍2:     拒便宜房 / Counter 779–799 首选 799
Public BAR:    Hold 779–799，首选 799（Hypothesis / Simulation 点）
Dump 399:      不开。会带房价不是公开 BAR
Increase BAR:  不开。参会 OCC ≠ High Demand。拍2 remaining 14 + 线性 7>DTA 不是 P03
Inventory:     付费空房保持 OPEN。会带房块保持围栏——不要当 leftover dump，也不改成公开 BAR
Do-not-do:     无贡献 Accept 10@399；BAR→399 / 华住 SOP；一夜 −15%；按 80 人 OCC 涨；厅租双计；RevPAS 定 BAR；操作 PMS；把 399/10/80 当 Fact
```

何时才会 Accept 围栏房块：仅当用户给出厅+餐贡献且 net > 机会成本（拍 1 leftover 厚更可能）。公开 BAR 仍不改成 399。何时才会小步 P03：仅当重算后 **transient** Remaining 真紧 **且** 中位 Days-to-Sellout < DTA、Pace Ahead。本卷拍 2 **不是**（7>4）。理由仍是散客剩余，不是 80 人。

### 5. Why

1. 会带房先拆厅/会 vs 餐 vs 占房（T-Meet）。无用户贡献不得 Accept 低价房（T18 闸）。  
2. STR：厅/AV = Other F&B，不是客房（S）。不要双计。  
3. RevPAS 是 HSMAI 词条，不是今晚 BAR 公式（A）。  
4. 拍 1 Remaining 110：会议可增量；399 仍是围栏块不是新 BAR。P05 对象是付费空房，不是把 BAR 写成 399。  
5. 拍 2 Remaining 14：10 间会挤 BAR。Counter/拒房留会。Hold 779–799 首选 799。  
6. T20：无声明底，不发明 399。BAR→399 不是档 H；一夜 −15% 闸。  
7. 80 人 ≠ 80 间。399/10/80 只 Simulation。

### 6. Expected Impact

方向（不伪造点估计）：停止一次无贡献 Accept 低价房，停止一次把公开 BAR 改成会带房价，停止一次按参会 OCC 涨。不承诺 9/01 或 8/29 OCC。Counter / 拒房由用户执行；顾问不操作 PMS / 宴会系统。

### 7. Risk

| 风险 | 若发生 |
| --- | --- |
| 销售仍接 10@399 | 周六挤掉 BAR；周二把 399 写成结构 |
| 把 BAR 写成 399 | 围栏价泄漏成公开底 |
| GM 按 80 人 OCC 涨 | 虚荣 OCC 当 High Demand |
| 把 399/10/80 写成行情 Fact | 下一家店无 399 就会编 |
| 用户其实给得出贡献且拍 1 leftover 真厚 | 条件化：补数后可改 Accept **围栏块**，BAR 仍 799 |
| 误当成婚宴 / 只要房 / 政务 / 展会肩日 | 离开，走 P30 / P10 / P48 / P22 |

### 8. What To Watch

- 用户是否补出厅+餐贡献（认领数字，不是口号）  
- 10 间能否改价或缩到 must-keep  
- 8/25–8/29 散客净 Pickup（不是含会带房的 PMS OCC）  
- 公开渠道有没有出现 399 当 BAR  
- 销售是否继续按 399 接周六会带房  
- 厅是否含在套餐（双计）

### 9. Re-evaluation Trigger

- 用户补出厅+餐贡献，拍 1 leftover 仍厚且 net > 机会成本 → 该夜客房可改 Accept 围栏块；公开 BAR 仍 Hold 799。  
- 用户补出贡献，拍 2 高峰夜仍盖不住 / 团不改价不减房 → 维持拒房或 Counter 779–799 首选 799；会另议。  
- 拍 2 的 8/26 10:00 散客净 Pickup ≥4/日 **且** Remaining 变薄 → 维持 Counter/拒房；再评是否 P03，仍不跳 899；理由不是 80 人。  
- 用户改口：不要厅、只要房 → 离开，P10。  
- 用户改口：其实是婚宴 → 离开，P30。  
- 用户改口：政务协议码 → 离开，P48。  
- 用户改口：城市展会肩日不是这场会 → 离开，P22。  
- 市场突然冰 + 付费空变厚 + DTA≤3 → 才评 P05 围栏，对象不是把 BAR 改成 399；仍禁一夜 −15%。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、10@399 已声明 Simulation、F&B Unknown 已声明、两拍 remaining 110 / 14 已声明）。点价 799 / 399 为 **Simulation**。餐毛利、厅租、佣金、Walk $、本店真实会带房价 = **Unknown / NV**。会带房模板 **仍 NV**。本卷不声称真实酒店结果。RevPAS 未当 BAR。未编华住 SOP。

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 08:17 CST | 首版 Simulation。180 间、80 人 / 10@399（发明）、F&B Unknown。周二 leftover 110 → 留会、Counter 客房、Hold 799、拒绝 BAR→399。周六 Remaining 14 → 拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。P50 未写。 |
| 2026-08-25 10:17 CST | P50 开剧本。本卷复用为 P50 仿真。追加十节 Situation→Confidence（主结论 / headline 不变）。不另开第二份矛盾仿真。会带房模板仍 NV。未编餐毛利 / 华住 SOP。399/10/80 Simulation only。RevPAS 未当 BAR。 |

