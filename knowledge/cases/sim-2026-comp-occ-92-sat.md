# Simulation Case｜周六 PMS OCC 92%：10 间无关免费，付费 OCC ~86%，不按 92% 涨；Comp 占着不 dump

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-comp-occ-92-sat.md`  
> 日期：2026-08-24  
> 问：「OCC 92% 还要不要涨」「ADR 掉了要不要补涨」  
> 调用：`dont-raise-on-comp-occ.md` · T-Comp `theory/complimentary-house-use.md` · `metrics/complimentary-house-use.md` · P01 · P03 · P05 · P37 · P44 · P45 · P46 · T19 · T20 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**10 间 Comp 只在本文件当 Simulation，不是行业常模 Fact。** 799 / +100 只 Hypothesis/Simulation。不伪造精确增收。不编中国 PMS 字段名、Walk 成本、佣金%、点弹性、华住 SOP、399 行情。Advisor 不操作 PMS。

---

## 0. 用户原始输入（仿真）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-24 周一 16:17 CST
用户原话：「OCC 已经 92% 了还要不要涨？ADR 也掉了一截，要不要补涨把均价拉回来。」
GM：按 92% High Demand，BAR 799 → 899（+100）

Stay Date：2026-08-29（下周六）
DTA：5
Physical：180
OOO：0（本卷不混 P37 维修）
无关免费 / 临时自用：10 间（Simulation；员工 4 + FAM 3 + 业主 3；与促销/合同无关）
促销赠夜：0
Physical occupied：166（156 paid + 10 comps）
PMS OCC（本卷声明：占用含 Comp，分母 Physical）：166 / 180 = 92.2% ≈ 92%
STR Sold：156
STR OCC：156 / 180 = 86.7% ≈ 86%
Remaining physical：180 − 166 = 14
3D Pickup（付费）：+6（约 2 间/日）
STLY 同 DTA Physical/STR OCC：约 85%（Hypothesis 仅作 Pace 尺）
公开 BAR（标准、不含早、灵活）：799
付费均价（Simulation）：799 → Room Revenue ≈ 156 × 799 = 124,644
PMS ADR 若分母含 Comp：124,644 / 166 ≈ 751（「掉了」）
STR ADR：124,644 / 156 = 799
合同佣金 / 变动成本 / 品牌底：Unknown
```

10 / 92% / 799 / 899 **只是本卷练习数**。

---

## 1. Intake

口径：PMS Occupancy **含** 无关 Comp（本卷声明）。STR 历史 Sold **不含**（S）。Forward 本卷未用；若用 OTB% 可含这 10 间（A），不能拿去对历史 Comp。  
独立店。无声明品牌底 → **不发明 699**。  
佣金 / 变动成本 = **Unknown**，不编。Walk 成本不编。

| 尺 | 数（Simulation） |
| --- | --- |
| Physical | 180 |
| Unrelated Comp | 10 |
| Occupied | 166 |
| PMS OCC | **92.2%** |
| STR / Paid OCC | **86.7%** |
| Remaining physical | **14** |
| PMS ADR（含 Comp 分母） | **≈751** |
| STR / Paid ADR | **799** |
| BAR | 799 |
| GM 拟议 | 899（+100） |

Pace：STLY ~85% vs 本店 STR 86.7% → **约 On / 略 Ahead 1–2 pp**，不是 92% 那种 Ahead。  
线性 Days-to-Sellout = 14 / 2 = **7 日 > DTA 5**。中位更慢。**不是 P03 开门。**

**预选 3 个补数：** Comp 是否确与促销无关；这张 92% 是不是 PMS；8/29 前 24h 付费 Pickup。

本卷 **不** 操作 PMS、不改免费码。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/24 16:17 CST。目标入住 8/29 周六。10 间无关免费（Simulation）。PMS 报 OCC 92%、ADR 像掉到 751。BAR 799。GM 要 +100 到 899。

本卷 **不是** 真店，也不是行业「免费 10 间」常模。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 Physical occupied | 166 = 156 paid + 10 comps |
| D2 STR Sold | 156。历史不含无关 Comp（S） |
| D3 PMS OCC | 92% 是含 Comp 的店内尺。需求没有变成 92% 满房 |
| D4 STR / Paid OCC | ≈86.7%。Pace 约 On |
| D5 Remaining | 14。已经减过 10 间 Comp。那 10 间不是 leftover |
| D6 ADR | 751 是 $0 分母，不是 BAR 太低。STR ADR 仍 799 |
| A 假高峰 | **命中。** 不按 92% Increase BAR |
| B 假修 ADR | **命中。** 不砍不补涨去修 751 |
| C 假 leftover | **命中若有人要砸 14 或砸 Comp。** Comp 在住 ≠ dump。14 付费空也未进 P05（DTA 5、周六、市场未声明冰） |
| P37 | 本卷 OOO=0、非永久 HU。不要把 10 间瞬态免费当维修缩分母 |
| P44 | 无钟点 extra Sold |
| P45 | 92% 是虚荣 OCC 的一种。回付费剩余 14 + Pace On |
| P46 | 无早离回库。Comp 不是付费房回来 |
| P03 | **不启动。** 付费剩余 14、速度 2/日、Days-to-Sellout 7>5 |
| P05 | 不启动。禁一夜 −15% |
| T19 | 无三成本。禁止「砸价总比空着强」。高峰再送免费机会成本是 799 带，不是 0 |
| T20 | 无声明底，**不发明 699** |

```
Fact（仿真输入）: 8/29 Physical 180、Comp 10、PMS OCC 92%、STR OCC 86.7%、BAR 799
High-probability: 92% 与 751 是无关免费口径，不是 High Demand
Hypothesis: STLY ~85%；Pace On
Unknown: 中国报表字段名、佣金%、变动成本、当晚是否还要新送免费
```

**主诊断：** 假高峰 + 假 ADR。  
**不要涨到 899。不要为修 ADR 砍。不要 dump 10 间 Comp。**  
**问题树：** §53。  
**Naive「92% 所以涨 / ADR 掉所以补涨」：不对。**

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | Hold 799，避免把请客房奖励成涨价，也避免用 $0 分母去改 BAR |
| 主风险 | GM 仍挂 899；销售当晚再送几间免费把 14 削成个位数却继续按 92% 说话 |
| 假精确 | 不承诺 Hold 能多卖 N 间。不估 10 间免费值多少 ADR |

---

## 5. Recommended Action · **Hold 779–799 首选 799；拒绝 899**

**不按 PMS 92% Increase BAR。不按 751 修 ADR。不 dump Comp。10 不当 Fact。**

```text
Hotel: 180 间 Simulation 城市店（非真店）
Brand: 无声明品牌底 → 不发明 699
Comp:  10 间无关免费（Simulation；非促销送夜；非永久 HU）

2026-08-29 周六（DTA 5）
  口径:                PMS OCC 92%（含 Comp）；STR/Paid OCC ≈ 86.7%；Remaining = 14
  公开 BAR:            779–799，首选 799
                       （Hold。假高峰。不是涨价日，也不是降价日）
  围栏:                默认不开
  库存:                14 间空房保持 OPEN。10 间 Comp 保持占用——不要当 leftover dump
  Restriction:         不新设 MinLOS（Pace 未证实 Peak）
  Comp 政策（Hypothesis，无 SOP）:
                       付费剩余已 14。劝当晚不要再新送免费/FAM；已确认 10 间不暗改成赶客
  促销:                不报「冲 92%」的涨价叙事，也不报清库存闪促
  已订:                不盲改已确认价
  Do-not-do:
    - BAR → 899（按 92% 当 High Demand / +100）
    - 为修 ADR 751 而砍或涨
    - 把 10 间 Comp 当 dump 对象 / 一夜 −15%（799→679）
    - 编中国字段名 / 佣金% / 华住 SOP / Walk / 399 Fact
    - 把 10 写成行业默认免费量
    - 把这 10 间当 P37 永久 HU
```

**首选 799** 的理由：故障是口径（无关 Comp 进占用），不是需求突然变强。STR 86.7% + 日均 Pickup 2 间，不是 92% sellout。P03 在付费 Pace Ahead 且剩余真紧之前不点火。

**区间 779–799：** 用户坚持「给个带」，下限是心理微调（约 −2.5%），**不是** 已经降了。

**何时才会小步 P03：** 仅当重算后**付费** Remaining 真紧 **且** 中位 Days-to-Sellout < DTA、Pace Ahead。本卷 **不是**。若 24h 付费 Pickup ≥4 间/日且 Remaining 仍 ~14 或更薄，再评：先关 <799 低价，BAR 最多 +5–8%——标 Hypothesis，不作为本卷主结论。理由仍是付费剩余，不是 92%。

**禁止一夜 −15%。**

---

## 6. Expected Impact / Risk / Watch

方向：停止一次把请客房当成 High Demand，也停止一次用 $0 分母去「修 ADR」。  
不承诺 8/29 OCC。  
风险：GM 仍挂 899；当晚新送免费。  
Watch：8/24–8/29 无关 Comp 间数；付费净 Pickup；STAR 是否按 Sold 156。

---

## 7. 如果只能再补 3 个

1. 10 间是否确与促销/合同无关（若是买二送一 → 进 STR Sold，退出本卡）。  
2. 92% 是 PMS 还是已报 STR / Forward OTB。  
3. 8/25 10:00 付费净 Pickup（若 ≥4/日且 Remaining 变薄 → 再评 P03，仍不跳 899；并劝停新送免费）。

---

## 8. 兼容

- P37：本卷不是缩分母。10 间瞬态 Comp ≠ 永久 HU。  
- P44：无钟点分子。  
- P45：92% 虚荣 → 回 86.7% + Remaining 14。  
- P05：10 间 Comp 不是 leftover；14 空未声明市场冰。禁一夜 −15%。  
- P46：无早离。Comp ≠ 付费回库。  
- T19：无成本不说砸价总比空着强。  
- T20：无地板不发明 699。  
- 围栏 −3–5% / BAR −5–10% / 禁一夜 −15% / 价已最高只关不涨。  
- Advisor-First：不操作 PMS。

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 16:17 CST | 首版 Simulation。180 间、10 Comp、PMS 92%、付费 ~86%、Remaining 14、BAR 799 → **Hold 779–799 首选 799**；拒绝 899 / 修 ADR / dump Comp。10 不当 Fact。 |

---

## 10. P47 十段顾问输出（2026-08-24 18:17 CST 追加；不改上文主结论）

> 按 `decision-framework/advisor-process.md` 十节填本卷。Headline **不变**：Hold 779–799 首选 799；拒绝 +100→899；拒绝 dump。10 / 92% / 799 / 399 / 899 只在本 Simulation。

### 1. Situation

180 间 Simulation 城市店（非真店）。分析时刻 2026-08-24 18:17 CST。Stay Date 2026-08-29 周六，DTA 5。Physical 180，OOO 0，无关 Comp 10（员工 4 + FAM 3 + 业主 3，非促销送夜，非永久 HU）。Physical occupied 166 = 156 paid + 10 comps。PMS OCC（占用含 Comp）92%。STR / Paid OCC ≈ 86.7%。Remaining physical 14。BAR 799。GM 要按 92% High Demand 把 BAR → 899（+100）。PMS ADR 若分母含 Comp ≈ 751；STR / Paid ADR = 799。3D 付费 Pickup +6（约 2 间/日）。Pace 约 On / 略 Ahead 1–2 pp vs STLY ~85%。线性 Days-to-Sellout = 14/2 = 7 > DTA 5。

### 2. Diagnosis

**形 A 假高峰 + 形 C 假 ADR 病。** 92% 是含 Comp 的店内尺，不是付费需求变成 92% 满房。751 是 $0 分母，不是 BAR 太低。14 间空已经减过 10 间 Comp——那 10 间不是 leftover。P03 不启动（付费剩余 14、速度 2/日、7>5）。P05 不启动（DTA 5、周六、市场未声明冰）。P37 不启动（OOO=0，非永久 HU）。P44 无钟点 extra Sold。P45：92% 是虚荣 OCC 的一种原因，回付费剩余 14 + Pace On。P46：无早离；Comp 不是付费回库。形 D 未命中（促销赠夜 0）。形 E 未命中。形 F：付费剩余已 14，若当晚还新送 → 劝停（Hypothesis，无 SOP）。

Naive「92% 所以涨 / ADR 掉所以补涨」：不对。

### 3. Opportunity / Risk

主机会：Hold 799，避免把请客房奖励成涨价，也避免用 $0 分母去改 BAR。  
主风险：GM 仍挂 899；销售把 10 间 Comp 看成「还空着」要 399 闪促；当晚再送免费把 14 削薄却继续按 92% 说话。  
假精确：不承诺 Hold 能多卖 N 间。不估 10 间免费值多少 ADR。

### 4. Recommended Action

**Hold 779–799 首选 799。拒绝 899。拒绝为修 751 砍或涨。拒绝 dump Comp。**

```text
Stay Date:     2026-08-29 Sat（DTA 5）
Form:          A 假高峰 + C 假 ADR（第二拍叠加 B 假剩余）
Public BAR:    Hold 779–799，首选 799（Hypothesis / Simulation 点）
Increase +100: 不开。不是 High Demand。理由不会是 92%
Dump 399:      不开。10 间 Comp 在住 ≠ leftover。14 付费空未进 P05
Inventory:     14 间付费空房保持 OPEN。10 间 Comp 保持占用
Comp 政策:     付费剩余已 14。劝当晚不要再新送免费/FAM（Hypothesis，无 SOP）
Do-not-do:     899；一夜 −15%；BAR→399；发明 10 当行业常模；编字段名 / 华住 SOP / Walk $
```

何时才会小步 P03：仅当重算后**付费** Remaining 真紧 **且** 中位 Days-to-Sellout < DTA、Pace Ahead。本卷 **不是**。理由仍是付费剩余，不是 92%。

### 5. Why

1. STR Historical（S）：Rooms Sold 不含无关 complimentary；含促销/合同送夜。本卷 10 间是员工/FAM/业主，不进 Sold → STR OCC ≈ 86.7%，不是 92%。  
2. Forward STAR（A）：Rooms Booked **可以含** Comp/house use。本卷未用 Forward；若用 OTB% 也不能拿去对历史 Comp 或当涨价令。  
3. Remaining = Capacity − occupied − OOO = 14。occupied 已含 10 间 Comp。那 10 间不是 dump 池。  
4. 混 ADR 751 = 124,644 / 166。STR ADR = 799。故障在分母。  
5. T19：高峰再送免费机会成本是 799 带，不是 0。无三成本不说砸价总比空着强。  
6. T20：无声明底，不发明 699。399 vs 799 = −50%，穿一夜 −15% 闸。

### 6. Expected Impact

方向（不伪造点估计）：停止一次把请客房当成 High Demand，也停止一次用 $0 分母去「修 ADR」。不承诺 8/29 OCC。HK / 免费码由用户执行；顾问不操作 PMS。

### 7. Risk

| 风险 | 若发生 |
| --- | --- |
| GM 仍挂 899 | 公开基准被一夜改写；付费尾部被挤 |
| 销售把 10 间 Comp 当「还空着」挂 399 | 形 B；占住房不是燃料 |
| 当晚新送免费 | 14 变薄，92% 叙事更硬 |
| 把 10 写成行业默认免费量 | 下一家店无 10 就会编 |

### 8. What To Watch

- 8/24–8/29 无关 Comp 间数（是否还在新送）  
- 付费净 Pickup（不是含 Comp 的 PMS OCC）  
- 公开渠道有没有出现 899 或 399  
- STAR 是否按 Sold 156 上报  
- 10 间是否确与促销/合同无关（若是 1+1 → 形 D，退出本剧）

### 9. Re-evaluation Trigger

- 8/25 10:00 付费净 Pickup ≥4/日 **且** Remaining 变薄 → 再评 P03，仍不跳 899；并劝停新送免费。  
- 用户改口：10 间是买二送一 → 形 D，按 STR Sold。  
- 用户改口：经理公寓 8 个月 → 离开，P37。  
- 市场突然冰 + 付费空变厚 + DTA≤3 → 才评 P05 围栏，对象是 14 不是 10 间 Comp；仍禁一夜 −15%、仍不是 399 BAR。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、Comp 10、PMS 含 Comp 已声明、Pace On）。点价 799 / 899 / 399 为 **Simulation**。中国字段名、佣金、Walk $、当晚是否还要新送 = **Unknown**。本卷不声称真实酒店结果。

---

## 11. 第二拍（仍 Simulation）：销售要 399 因为「还空着」

> 同一 Stay Date、同一库存。**不另开第二份矛盾仿真。** Headline 仍 Hold 779–799 首选 799。

销售原话（仿真）：「10 间请客反正没房费，看起来还空着，今晚挂个 399 闪促清掉。」

| # | 判定 |
| --- | --- |
| 销售把什么当成空 | 10 间无关 Comp |
| 实际 | 10 间**正在占用**。Physical remaining 已经是 14。那 10 间不是 leftover |
| 形 | **B 假剩余**（叠加已有 A/C） |
| P05？ | **不启动。** dump 对象不是占住房。14 付费空也未声明市场冰、DTA 5、周六 |
| 399 vs 799 | −50%，穿一夜 −15% 闸。不是档 H |

**动作：** 拒绝 399。拒绝把 BAR 改成清 Comp 的特价。10 间 Comp 保持占用。14 间付费空房保持 OPEN 在 779–799 首选 799。不要「反正没房费不如贱卖」。T19：机会成本是当晚付费 BAR，不是 0。

```text
Form: B 假剩余
Ask: 10 间 Comp「还空着」→ 399 闪促
Action: 拒绝 dump。那 10 间有人睡。Remaining 14 不是这 10 间
Public BAR: 仍 Hold 779–799 首选 799
Do-not-do: BAR→399；一夜 −15%；把 Comp 写成 P05 leftover
```

顾问 **不** 挂 399、不改免费码、不把占住房标成可售去砸。

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 16:17 CST | 首版 Simulation。180 间、10 Comp、PMS 92%、付费 ~86%、Remaining 14、BAR 799 → **Hold 779–799 首选 799**；拒绝 899 / 修 ADR / dump Comp。10 不当 Fact。 |
| 2026-08-24 18:17 CST | P47 开剧本。本卷复用为 P47 仿真。追加十节 Situation→Confidence（主结论不变）+ 第二拍拒绝 399 假剩余 dump。不另开第二份矛盾仿真。 |
