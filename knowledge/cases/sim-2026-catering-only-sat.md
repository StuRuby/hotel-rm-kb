# Simulation Case｜周六只要厅不要房 80 人占高峰厅：拒/Counter 低贡献厅；Hold BAR 799；不按厅满涨、不因厅忙 dump

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-catering-only-sat.md`  
> 日期：2026-08-25  
> 问：「只要会议室不要客房」「厅包了散客随便卖」「厅满了 OCC 才 40% 要不要涨 BAR」「本地公司包半天厅，周末挤婚宴怎么办」  
> 调用：`dont-raise-bar-on-full-hall.md` · P51 `catering-only.md` · `metrics/catering-only.md` · P50 · P10 · P30 · T18 · P22 · P44 · P01 / P03 / P05 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**80 人只要厅、客房 Remaining 14、BAR 799、发明厅租只在本文件当 Simulation，不是市场行情 Fact，不是华住厅租表。** 799 只 Hypothesis/Simulation。不伪造精确增收。不编餐毛利、厅租行情、佣金%、点弹性、婚宴标。Advisor 不操作 PMS / 宴会系统。本卷 **不** 把 BAR dump 到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一场只要厅询价（80 pax，**不要客房**，厅+餐贡献 **Unknown** 或拍 1 给发明贡献），两拍 Stay Date。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，有中型会议室，无声明品牌底）
分析日：2026-08-25 周二 14:17 CST
用户原话：「本地公司只要会议室不要客房。厅包了散客随便卖。销售说厅满了 OCC 才 40% 要不要涨 BAR？周末这笔半天厅会不会挤婚宴？」
GM：厅日记满了，要不要涨 BAR
销售：只要厅很好接；客房 leftover 可以 dump；或把只要厅当成会带房去「赢会」
宴会：厅「差不多能包」，贡献数字拍 2 没给

询价（两拍共用骨架，Simulation）：
  80 pax 半天会（发明人数）
  客房块：0（Catering Only / 只要厅不要房）
  佣金 / 变动成本 / 品牌底：Unknown

拍 1 · 工作日空厅
  Stay Date：2026-09-01（下周二）
  DTA：7
  Physical：180  OOO：0
  Occupied（不含本询价，本询价也不占房）：70
  Remaining：110（厚）
  3D Pickup：+3（慢）
  公开 BAR（标准、不含早、灵活）：799
  Pace：Behind / 市场偏冰（Hypothesis 练习）
  厅日记：该段空
  厅+餐贡献：用户认领 6,000（发明数，Simulation only，不是厅租行情）
  拟议 A：Accept 厅并因为「包了厅」把 BAR 当高峰去涨
  拟议 B：Accept 厅并把 BAR dump「反正没带房」

拍 2 · 周末黄金厅段
  Stay Date：2026-08-29（本周六）
  DTA：4
  Physical：180  OOO：0
  Occupied（不含本询价）：166
  Remaining：14
  3D Pickup（散客）：+6（约 2 间/日）
  Pace：Ahead vs STLY（Hypothesis）
  公开 BAR：799
  厅日记：接了这场就会满（黄金半天厅）
  厅+餐贡献：Unknown（销售只说「厅租反正有」）
  发明厅租收入（仅本卷标签，不是贡献）：8,000（发明，Simulation only，不是行情 Fact）
  同段：宴会说周末黄金厅常接婚宴 / 会带房，本卷未给另一场数字
  拟议 A：Accept 80 人只要厅；GM 见厅满要把 BAR 799 → 899
  拟议 B：厅满了客房 leftover dump（有人提 399）
```

80 / 14 / 110 / 799 / 6,000 / 8,000 **只是本卷练习数**。8,000 **不是**厅租行情 Fact。6,000 **不是**餐毛利常模。本卷 Advise **不** dump BAR 到 399。

---

## 1. Intake

口径：只要厅 **不进** 客房 OTB。STR：厅/AV 若成交进 Other F&B，不进客房。80 人 ≠ 80 间，本卷甚至 **0 间**。  
独立店。无声明品牌底 → **不发明华住厅租**。  
F&B / 厅贡献拍 2 = **Unknown**，不编毛利。拍 1 用用户认领的发明 6,000，仍不升行情。佣金 Unknown。Walk 不编。

| 尺 | 拍 1 周二 | 拍 2 周六 |
| --- | --- | --- |
| Physical | 180 | 180 |
| Remaining（客房） | **110** | **14** |
| 客房块 | 0 | 0 |
| BAR | 799 | 799 |
| 厅+餐贡献 | 6,000（用户认领，发明） | Unknown |
| 厅日记 | 空 | 接了会满 |
| Pace | 冰 / leftover 厚 | Ahead |
| 销售/GM 拟议 | 接厅 + 涨 BAR 或 dump | 接厅 + 按厅满涨 或 dump leftover |

Pace 拍 2：线性 Days-to-Sellout = 14/2 = **7 日 > DTA 4**，不是 P03 开门涨价；但是 **黄金厅段被低贡献只要厅占 = 厅置换**（对婚宴/会带房），不是客房置换。

**预选 3 个补数：** 厅+餐贡献（用户认领）；同段是否有带房会/婚宴询价；8/29 前 24h 散客 Pickup。

本卷 **不** 操作 PMS、不改 BAR、不关散客、不改宴会日记。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/25 14:17 CST。询价：80 人只要厅、不要客房。

拍 1：9/1 周二。客房 Remaining 110。厅空。用户认领贡献 6,000（发明）。BAR 799。有人要因为包厅去涨 BAR，或 dump「反正没带房」。

拍 2：8/29 周六。客房 Remaining 14。Pace Ahead。厅接了会满。贡献 Unknown。GM 要按厅满涨到 899。销售要 dump leftover（有人提 399）。

本卷 **不是** 真店，也不是「中国只要厅=80 人 / 厅租=8,000」Fact。

---

## 3. Diagnosis

### 拍 2 周六（主拍）— 形 **A + B + C**

1. **假高峰（A）：** 厅满不是客房 Demand。客房 Remaining 14、Pace Ahead 但 Days-to-Sellout 7 > DTA 4，**不是**按厅满 Increase BAR 的理由。若评涨，理由只能是 transient remaining，须另走 P01/P03 检查单——本卷线性尺未开门。  
2. **周末低贡献占厅（B）：** 黄金半天厅、贡献 Unknown、可能挤婚宴（P30）或会带房（P50）。默认 **Counter 或拒厅**。发明厅租 8,000 是收入标签不是贡献。  
3. **假剩余（C）：** 「厅满了所以客房 leftover dump」不成立。14 间不是冰 leftover。禁止因为厅忙去 dump。禁止 BAR→399。

不是 P50（零客房）。不是 P10（有厅）。不是 P30（不是喜宴客源；但黄金厅默认留给婚宴/带房会）。不是 T18 客房闸主场景。不是 P22。不是 P44。

### 拍 1 周二 — 形 **D**（可叠 A 的反向：不要因为包厅涨）

工作日厅空、客房 leftover 110、用户给了 6,000 贡献 → **Accept 厅**。不要因为包了厅把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 799。

---

## 4. Options（不编增收精确值）

| 选项 | 拍 2 周六 | 评 |
| --- | --- | --- |
| GM | BAR 799→899 因为厅满 | **拒。** 理由是厅日记，不是客房 remaining |
| 销售 Accept 厅 | 低贡献占黄金厅 | **拒 / Counter。** 贡献 Unknown；留给 P30/P50 |
| 销售 dump leftover | 因厅忙 / 有人提 399 | **拒。** 不是 P05。本卷 **不** dump BAR 到 399 |
| P03 涨价 | Remaining 14 Ahead | 线性 7>DTA 4，本卷 **不开** P03。若开也不是因为厅满 |
| **本卷** | 拒/Counter 高峰厅；Hold 779–799 首选 799；不按厅满涨；不因厅忙 dump | **首选** |

| 选项 | 拍 1 周二 | 评 |
| --- | --- | --- |
| 因包厅涨 BAR | 假高峰 | **拒** |
| dump BAR「没带房」 | 假剩余 | **拒。** 不 dump 到 399 |
| **本卷** | Accept 厅（用户给了 6,000）；Hold BAR 799 | **首选** |

不伪造「拒厅后多收多少婚宴」。方向：保住黄金厅段给带房会/婚宴，保住公开 BAR，不按厅满涨。

---

## 5. Advise（口播）

```
1. 只要厅不要房 ≠ 会带房。先问这场会占的是哪段功能空间、有没有更好的带房会议或婚宴能卖。没用户给的厅+餐贡献，不接低价占高峰厅。
2. 工作日空厅：会议本身可以接；不要因为包了厅就把公开 BAR 当高峰去涨，也不要把 BAR dump 成「反正没带房」。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 周末/黄金厅段：默认 Counter 或拒厅，留给带房会议/婚宴，不是 Accept 低贡献占厅。厅满 ≠ 客房紧；不按「厅满了」Increase BAR。
```

Overnight 尺：**Hold 779–799 prefer 799**（Hypothesis/Simulation only）。  
拍 2：**拒/Counter 周六只要厅。** 拍 1：**Accept 厅。** 两拍 BAR 都 Hold 799。本卷 **不** dump 到 399。

---

## 6. Do-not-do

- 按厅满自动 +100 → 899  
- 周六 Accept 低贡献只要厅占黄金厅  
- 因为厅忙 dump leftover / BAR→399  
- 把只要厅当成 P50 去 dump BAR 赢会  
- 一夜 −15% 当新 BAR  
- 编华住厅租 / 餐毛利 / 把 8,000 写成行情  
- 把 RevPAS / ConPAST 写成今晚 BAR  
- 厅租双计  
- 操作 PMS / 宴会系统

---

## 7. 十节（顾问输出压缩）— 主拍周六

### 1. Situation

2026-08-29 周六，DTA 4。180 间 Simulation。80 人只要厅、客房块 0。客房 Remaining 14。Pace Ahead。BAR 799。厅接了会满。贡献 Unknown。GM 要 899。销售要接厅并 dump leftover。

### 2. Diagnosis

形 A 假高峰 + B 周末低贡献占厅 + C 假剩余。客房 OCC 不被只要厅抬高。Days-to-Sellout 7 > DTA 4，不是 P03 开门。黄金厅段贡献 Unknown，默认留给婚宴/会带房。

### 3. Opportunity / Risk

主机会：停一次按厅满涨；停一次低贡献占高峰厅；停一次因厅忙 dump。  
主风险：899 改写公开基准；周六厅被本地半天会占死；399 dump 训练「没带房就该便宜」。

### 4. Recommended Action

厅：**拒或 Counter**（改期到工作日，或用户补出能盖过婚宴/会带房机会成本的贡献——本卷 Unknown 则拒）。  
Public BAR：**Hold 779–799 首选 799**。  
Inventory：14 间付费空房 OPEN。不要因为厅满去关或 dump。  
Do-not-do：899；399；一夜 −15%；编厅租行情。

### 5. Why

1. 只要厅不要房 ≠ 会带房。OPERA Catering Only 客房 grid 不可用。HSMAI Local Catering 不连过夜房。  
2. 厅满 ≠ 客房紧。定价看 transient remaining + Pace，不是厅日记。  
3. 无用户贡献不接高峰厅（T18 闸用到厅）。  
4. STR 厅/AV = Other F&B。发明 8,000 是收入不是贡献。  
5. RevPAS / ConPAST 不是今晚 BAR。  
6. P05 leftover 与厅独立。本卷 Remaining 14 不是冰 dump。T20：不发明 399。

### 6. Expected Impact

方向（不伪造点估计）：停止一次把厅满当成 High Demand，停止一次把黄金厅段给未知贡献的只要厅，停止一次把公开 BAR 改成 399。不承诺 8/29 OCC。拒厅由用户执行；顾问不操作宴会系统。

### 7. Risk

| 风险 | 若发生 |
| --- | --- |
| GM 仍挂 899 | 公开基准被一夜改写；理由是厅日记 |
| 销售仍接周六厅 | 黄金厅段被占；婚宴/会带房无处可去 |
| 销售把 BAR 写成 399 | 公开底被一夜 dump |
| 80/8,000 被写成行业常模 | 下一家店无 80 就会编 |
| 其实有 10 间客房块 | 离开，P50；仍不 dump BAR |

### 8. What To Watch

- 8/25–8/29 新只要厅 Pickup  
- 同段婚宴 / 会带房询价  
- 散客净 Pickup（不是厅日记）  
- 公开渠道有没有出现 899 或 399  
- 用户是否补出厅+餐贡献  
- 销售是否把只要厅开成会带房码

### 9. Re-evaluation Trigger

- 用户改口：其实要 10 间房 → 离开，**P50**。  
- 用户改口：这是喜宴 → 离开，**P30**。  
- 用户补出贡献且改期到周二 → 拍 1 逻辑，厅可接；BAR 仍 Hold。  
- 8/26 10:00 散客净 Pickup ≥4/日 **且** Remaining 变薄 → 再评 P03，仍不按厅满涨。  
- 市场突然冰 + 付费空变厚 + DTA≤3 → 才评 P05 围栏，对象是 14 不是因为厅满；仍禁一夜 −15%；仍不 dump 到 399。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、只要厅已声明、客房 Remaining 14、Pace Ahead、贡献 Unknown 已声明）。点价 799 / 899 / 399 / 发明厅租为 **Simulation**。婚宴机会成本、Walk $ = **Unknown**。华住厅租 **仍 NV**。餐毛利 **仍 NV**。本卷不声称真实酒店结果。

---

## 8. 第二拍（仍 Simulation）：周二 leftover 110 + 空厅

> 同一询价骨架（80 pax 只要厅）。**不另开第二份矛盾仿真。** Headline 仍 Hold 779–799 首选 799。

| # | 判定 |
| --- | --- |
| 用户给了什么 | 厅+餐贡献 6,000（发明，认领） |
| 厅 | 空；工作日 |
| 客房 | Remaining 110，偏冰 |
| 形 | **D**（不要叠成按包厅涨 = A 的反向） |
| 涨 BAR？ | **不。** 包了厅不是高峰 |
| dump BAR？ | **不。** 不是因为没带房。真冰可另评 P05，对象是付费空房，仍禁一夜 −15%，仍不写 399 |
| 厅 | **Accept**（用户给了贡献） |

```text
Form: D 工作日空厅
Hall: Accept（贡献 6,000 用户认领，发明）
Public BAR: Hold 779–799 首选 799
Do-not-do: 因包厅涨；BAR→399；一夜 −15%；华住厅租
```

顾问 **不** 把 BAR 改成 399、不因包厅涨、不把 6,000/8,000 写成常模。

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 14:17 CST | 首版 Simulation。180 间、80 人只要厅、周六 Remaining 14 → **拒/Counter 高峰厅；Hold 779–799 首选 799**；不按厅满涨；不因厅忙 dump。周二 leftover 110 + 空厅 + 贡献 6,000 → **Accept 厅；Hold 799**。80/14/799/6,000/8,000 只本卷。未 dump BAR 到 399。华住厅租 / 餐毛利未编。 |

理论尺：`theory/function-space-occupancy.md`（T-Hall 16:17）。本卷数字不改。80/14/799 仍 Simulation only。
