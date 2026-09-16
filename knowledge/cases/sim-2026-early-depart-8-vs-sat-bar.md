# Simulation Case｜周六 Pace Ahead、早离 8 间：销售要 399 闪促；Hold 779–799 首选 799；HK 先；不是 P05。续住高峰 399 → 拒或 BAR 799，否则 P24

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-early-depart-8-vs-sat-bar.md`  
> 日期：2026-08-24 写；场景时钟拨到 **2026-08-29 周六 14:17 CST**（同日 FO）  
> 问：「今天有 8 间提前退房，今晚要不要开特价？」「客人要续住高峰周六」  
> 调用：P46 · `dont-dump-on-early-depart.md` · P05 · P24 · P40 · P42 · T07 框架 §1 · T19 · T20 · `how-much-to-move.md`  
> 声明：180 间店与下列价格、库存、Pace 均为 **练习数据（Simulation）**。不得写成某家真实酒店或某市早离费/续住行情。标 Hypothesis 的句子不得改成 Fact。不伪造精确增收。不编华住 SOP、Marriott 中国费表、佣金%、Walk 金额、点弹性。**399 / 799 只在本 Simulation。** 顾问不操作 PMS / Channel Manager / OTA / RMS / 房态。

---

## 0. 用户原始输入（仿真）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，周末休闲可卖过夜，无声明品牌底）
分析日：2026-08-29 周六 14:17 CST（当晚到店高峰尚未结束）
用户原话：「今天已经有 8 间提前退房。销售说空出 8 间了，今晚挂 399 闪促清掉。前台又说两桌在店客人要把周六留下，老客给 399 意思一下。开不开？续不续？」

Stay Date：2026-08-29 周六（今晚）
Physical / OOO：180 / 0（本卷声明可售=物理）

早离前：
  Occupied 176   Remaining 4    OTB 176/180 = 97.8%
  STLY 同 DOW 同晚（Hypothesis 尺，用户口述）：89%
  Pace：Ahead ~9 pp
  今日 Pickup 过夜：+5（07:00–14:00；walk-in 若发生须从干净 4 间出，场景一主枝尚未再卖）
  3D Pickup：+16
  到店未到：仍有 22 间预计到店（用户口述）

早离 8 间（14:00 前已 checkout，HK 未转房）：
  Occupied → 168
  Remaining 身份 = 180 − 168 − 0 = 12
  其中 8 间脏 ED 待 HK；walk-in ready = 原干净剩余 4
  （12 = 4 干净 + 8 脏。早离是库存回来，不是把 4 间已空再加一次。）

公开过夜 BAR（直销 + OTA BAR 层，不含早、灵活）：799
销售拟议：因「空出 8 间」挂 399 闪促（公开层或当新 BAR）
竞对当晚可订公开：759 / 789 / 满；一家显示满

场景二（同日 16:00 短场）：
  2 间在店 Due Out 要续住今晚，开口 399「老客人」
  该 2 间已有到店预抵（房间已派给到达）
  此刻 Remaining walk-in ready = 3（14:17–16:00 又卖出 1 间干净房）
  前台问：续不续、要不要给 399

合同佣金 / 变动成本 / 品牌底 / 早离费金额 / Walk 成本：Unknown。不编。不发明 699 当品牌底。
```

399 vs 799 = **−50.1%**。一夜 −15% 闸 = 799×0.85 = **679.15**。399 远超该闸。

弱周二反事实（本卷附录，不是主枝）：9/1 周二 OTB 38%、早离前 Remaining 90、市场冰、ED 再加 8 → 才评 P05 围栏；公开 BAR 仍不改成 399。续住次日冰 → 形 D 按 BAR 接。

---

## 1. Intake

口径：Pickup 为过夜间夜。Occupancy 分母 180，OOO=0。独立店。无声明品牌底 → **不发明 699 当品牌底**。  
佣金 / 变动成本 / 早离费金额 / Walk $ = **Unknown**，不编。  
华住 SOP / Marriott 中国费表 = **NV**。  
399 与 799 均为 **Simulation 点价**，不是某市 Fact。

库存恒等式（框架 §1，不另发明）：

```
Occupied tonight = Stayover + Arrivals who show
Remaining sellable = Capacity − Occupied − OOO
脏 ED 在 HK 前不是 walk-in ready
Unexpected ED → Remaining 上升（礼物，不是需求死了）
Unexpected stayover → Remaining 对到店下降（可 Walk）
```

| 尺 | 数（Simulation） |
| --- | --- |
| Stay / DTA / DOW | 8/29 六；**当日下午看当晚**；周末压缩夜 |
| 早离前 OTB | 176/180 = **97.8%** vs STLY 89% → **Ahead ~9 pp**，不是冰 |
| 早离前 Remaining | 4 → **紧** |
| 早离后 Remaining 身份 | 12，但 **8 脏待 HK**；walk-in ready **4** |
| 今日过夜 Pickup | **+5** → 未死（到店仍在进；干净 4 间场景一主枝未再卖） |
| 到店未到 | 22（口述）→ 早离不是「今晚没人」 |
| 公开过夜 BAR | 799 |
| 拟议 dump | **399** 因「空出 8 间」 |
| 399 vs 799 | −50%；穿一夜 −15% 闸（679）很多 |
| 竞对公开过夜 | 759–满；799 vs 最低可订 759 = **+5.3%**，未出局 |
| 市场冰？ | **否。** 一家竞对满；Pace Ahead |
| 场景二续住 | 2 间要占已派给到店的房；Remaining ready 3；开口 399 |

Pace：Ahead + 早离前剩余 4 紧 + 重算后身份 12 但 ready 仅 4 + Pickup +5 → **形 A**，不是形 B。  
价差 +5.3% <8% → 过夜价未出局。禁止为「空出 8 间」开 399。

预选 3 个补数：HK 何时转完 8 间；22 间未到的担保结构；2 间续住能否换未派房。本卷主枝销售要公开 399、续住要 399 占已派房 → 即使 HK 转完，也不该把高峰 BAR 写成 399。

本卷 **不** 操作 PMS、不代挂 OTA、不排 HK、不收银。

---

## 2. Situation

180 间仿真城市独立店。场景时钟 8/29 周六 14:17。过夜 OTB 97.8% 相对 STLY 89% Ahead。早离前剩余 4。8 间提前退房后剩余身份 12，其中 8 脏未转房，walk-in ready 4。公开 BAR 799。销售要因「空出 8 间」挂 399。同日 2 间在店要续住今晚、开口 399，房间已派给到店。无品牌底、无成本、无官方早离费表、Walk 金额 Unknown。

本卷 **不是** 真店，也不是华住早离手册。399 不得写出本文件当市场行情。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| 早离是需求死了？ | **不成立。** Ahead、Pickup +5、未到 22、竞对有满 → 库存回来，不是 leftover 真空 |
| 重算后可 dump？ | **不成立。** 身份 12 仍偏紧；ready 仅 4。形 **A** 不是形 B |
| 399 闪促 | **拒绝。** −50%。禁一夜 −15% 当永久 BAR。禁止把 ED dump 写成新 BAR |
| HK 未转 | 8 脏 ≠ 当前可卖 walk-in（P42 要干净空房） |
| 形 B 弱市 P05 | **本卷主枝不开。** 未冰。仅周二反事实 |
| 场景二续住 399 | **拒绝友情价。** 该房已派到店 = 与到店抢房。形 **C**：拒，或只按 799。接了占已派房 → **P24** |
| 用剩余 3 换房接续住？ | 若能换到未派干净房且按 **799** 收，才是增量；仍禁止 399。本卷开口是 399 占已派房 → 默认 **拒** |
| Ahead 再涨过夜价 | 价未最高，本卷第一刀是 **Hold + 不开 dump + 拒 399 续住**，不跳最高 |
| T19 | 无变动成本。禁止「399 总比空着强」。反事实不是空房——还能卖 799，且到店已覆盖续住房 |
| T20 | 无声明底。**不发明 699**；399 不是底也不是新 BAR |
| P05 | 不是从未卖掉的 leftover 题。早离先 P46；本卷未冰 **不** 进 P05 |
| P24 | 尚未在赶客。若答应 399 续住占已派房 → 制造 Walk，才移交 |
| P40 | 不是新订 Sat-only。在店加一晚 |
| P42 | 脏 ED 不是 desk inventory。干净 3 间若上门走 P42 报 BAR，不跟 399 |
| P38 | 早离费未知。不编金额。即使能收，**收费 ≠ dump** |
| P37 | OOO=0，不是假剩余 |

```
Fact（仿真输入）: 8/29 OTB 176→168、ED 8、BAR 799、拟议 399、ready 4、续住 2 占已派房
High-probability: 到店仍会来。脏房不能当 walk-in。399 续住会挤已确认到达
Hypothesis: 把 BAR 改成 399 会把库存礼物写成新过夜基准
Unknown: 早离费金额、Walk $、佣金%、HK 转完时刻、22 间未到担保结构
```

**主诊断：** 周六过夜 **Ahead + 早离是回库不是死亡 + ready 仍紧**。  
**不要开 399。不要改 BAR。不要一夜 −15%。HK 先。**  
**续住 399 占已派房：拒或 799；否则 P24。**  
**问题树：** 早离开特价 / 高峰续住。  
**Naive「空出 8 间所以特价 / 老客 399」：不对。**

与 P05：leftover-弱才 dump；本卷不是。  
与 P40：新订周六 ≠ 在店续住。  
与 P24：本剧先挡；接了才赶客。  
与 P42：干净 3 间口价 BAR；脏 8 间不是前台库存。

---

## 4. Opportunity / Risk

| | |
| --- | --- |
| 机会 | 守 799：早离回库可在 HK 后卖 BAR 或留给未到。续住若换未派房按 799 收，贡献 ≈ BAR 净 |
| 风险 | 399 dump 训练「空出就砸」；脏房双卖；399 续住挤到店 → Walk（金额 NV） |
| 不要做的「机会」 | 「8 间 × 399 总比空着强」——空着的反事实是 799 或留给已售到店，不是 0 |

不伪造「开 399 少收 XX 元」。方向：Hold 799 优于 399 dump；拒 399 续住优于藏 Walk。

---

## 5. Recommended Action（顾问建议，不执行）

**场景一（早离 8 间）：**

```text
Stay Date: 2026-08-29 Sat
Form: A 高峰早离回库
Public BAR: Hold 779–799，首选 799（Hypothesis / Simulation 点）
Dump 399: 不开。不是 P05。不把 399 写成新 BAR
Inventory: Remaining 身份 12；walk-in ready 3。8 脏待 HK，转完前不当 desk 可售
FO: Due Out 已 checkout 的 8 间仍须 HK；未转 ≠ 空可卖
Early departure fee: 按该单 rate-rule（未知 → 不编金额）。收费 ≠ dump
Do-not-do: 一夜 −15%；公开 BAR→399；顾问代挂 OTA
```

**场景二（续住）：**

```text
Form: C 高峰续住
Ask: 2 间在店要留今晚 @399，房已派到店
Action: 拒绝 399。默认拒续住；若必须接且能换未派干净房 → 只按公开 BAR 799
If granting occupies already-sold arrival rooms → P24，不要用待客藏赶客
Do-not-do: 老客 399；把续住写成「反正空出 8 间」
```

顾问 **不** 改 PMS 离店日、不挂 399、不排 HK、不选 Walk 名单（那是 P24 建议层）。

---

## 6. Why

1. Mews（Vendor B）：超售对冲的是 cancel / no-show / **early departure**；意外续住若房已卖给到店会造成 accidental overbooking。早离是对冲项，不是「今晚没需求」。  
2. OPERA（Vendor PMS Fact）：Due Out 必须 checkout 或 extend 才能过 EOD；Check Out Early → Due Out。Due Out ≠ vacant。  
3. 框架 §1：Remaining = Capacity − Occupied − OOO；脏 ED 不是 walk-in ready。  
4. 399 vs 799 = −50%，穿一夜 −15% 闸。T19：机会成本不是 0。T20：不发明 699。  
5. P05 门：leftover-弱 **且** 市场弱。本卷 Ahead，进不了。  
6. P40：这是在店加夜，不是新订 Sat-only。  
7. Marriott（Vendor B）：早离费随地点/房价变。本卷无表 → 不编金额，也不用「没收成」当 dump 理由。

---

## 7. Expected Impact

方向（不伪造点估计）：Hold 799 保住高峰公开基准；避免 8 间脏房被当成 399 燃料；避免 2 间 399 续住把已确认到店推进 Walk。  
HK 转完后，干净房若有上门走 P42 报 BAR，不跟 399。

---

## 8. Risk

| 风险 | 若发生 |
| --- | --- |
| 销售仍挂 399 | 公开基准被一夜改写；次日难拉回 |
| 前台把脏房卖给 walk-in | 双卖 → 意外 Walk |
| 答应 399 续住占已派房 | 到店无房 → P24 |
| 把身份 Remaining 12 当 ready 12（8 间仍脏） | 高估可售 |

---

## 9. What To Watch / Trigger

- 未到 22 间是否陆续到达（到则更应守 A）  
- HK 转完件数（ready 升，仍 Hold BAR，不自动 dump）  
- 公开渠道有没有出现 399 层  
- 续住冲突是否被前台先答应  
- 若 Pickup 骤停 **且** 竞对全冰 **且** 未到大量取消 → 才重评形 B / P05 围栏，仍不是新 BAR  

---

## 10. Confidence

方向 **Medium**（Ahead + 紧 + 已派到店冲突清楚）。点价 799 / 399 为 **Simulation**。早离费、Walk $、佣金 **Unknown**。  
本卷不声称真实酒店结果。

---

## 11. 附录：弱周二反事实（不是主枝）

9/1 周二：OTB 38%、早离前 Remaining 90、Pickup 0、市场冰、ED +8 → 剩余更厚。**然后且仅然后** 评 P05 围栏（配额+截止），**不**把公开 BAR 改成 399，禁一夜 −15%。次日仍冰的续住 → 形 D，按 BAR 接，不友情 399 当新 BAR。
