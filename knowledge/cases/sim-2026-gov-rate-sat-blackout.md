# Simulation Case｜周六政府协议 40 间@480 把 PMS OCC 打到 92%：Hold BAR 799；限额/blackout 协议；不把 BAR 砍到 480；不当 Comp

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-gov-rate-sat-blackout.md`  
> 日期：2026-08-25  
> 问：「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」  
> 调用：`dont-anchor-bar-to-gov-rate.md` · T-Gov `theory/government-negotiated-rate.md` · `metrics/government-negotiated-rate.md` · P01 · P03 · P05 · P26 · P31 · P37 · P47 · T19 · T20 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**40 间 @480、PMS OCC 92% 只在本文件当 Simulation，不是中国限额 Fact，不是行业常模。** 799 / 480 / $110 只 Hypothesis/Simulation 或 US 标签。不伪造精确增收。不编华住政务 398、中国限额表、Walk 成本、佣金%、点弹性。Advisor 不操作 PMS。**P48 未写。**

---

## 0. 用户原始输入（仿真）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-25 周二 00:17 CST
用户原话：「政府协议把周六住满了，OCC 都 92% 了要不要涨？销售说 BAR 干脆跟到差旅 480。前台有人把这批公务员开成免费。」
GM：按 92% High Demand，BAR 799 → 899（+100）
销售：公开 BAR 对到 480（「差旅标准」）
前台：部分政府单想开 complimentary

Stay Date：2026-08-29（下周六）
DTA：4
Physical：180
OOO：0（本卷不混 P37 维修）
政务/差旅协议块：40 间 @480（Simulation；有房价、有合同码；480 发明数，不是限额表）
无关免费：0（本卷不混 P47 真 Comp）
机组：0（不混 P31）
Physical occupied：166（40 协议 + 126 其他付费）
PMS OCC（占用含协议）：166 / 180 = 92.2% ≈ 92%
非协议 / 付费散客 Remaining：180 − 166 = 14
3D Pickup（非协议）：+6（约 2 间/日）
STLY 同 DTA 非协议 OCC：约 85%（Hypothesis 仅作 Pace 尺）
公开 BAR（标准、不含早、灵活）：799
协议 ADR（Simulation）：480
GSA FY2026 标准 lodging $110：US Fact 标签，本卷**不用**当中国锚
合同佣金 / 变动成本 / 品牌底 / 周末可否 blackout：Unknown（blackout 只建议，不执行）
```

40 / 480 / 92% / 799 / 14 **只是本卷练习数**。480 **不是**中国现行限额 Fact。

---

## 1. Intake

口径：PMS Occupancy **含** 40 间有房价的协议。STR：协议按晚、未声明 >30 天保底 → **不**报成本卷 Contract；本卷当 Transient/negotiated 占用（Hypothesis）。STR **无** Government OCC。  
独立店。无声明品牌底 → **不发明 398 / 699**。  
佣金 / 变动成本 = **Unknown**，不编。Walk 成本不编。限额表 NV，不引用城市数字。

| 尺 | 数（Simulation） |
| --- | --- |
| Physical | 180 |
| Gov negotiated | **40 @480**（发明） |
| Occupied | 166 |
| PMS OCC | **92.2%** |
| 非协议 Remaining | **14** |
| BAR | 799 |
| GM 拟议 | 899（+100） |
| 销售拟议 | BAR → **480** |
| GSA $110 | **不用** |

Pace：非协议侧约 On / 略 Ahead 1–2 pp，不是 92% 那种 Ahead。  
线性 Days-to-Sellout = 14 / 2 = **7 日 > DTA 4**。中位更慢。**不是 P03 开门涨价。** 但 40 间低价协议占着周六 = 置换问题。

**预选 3 个补数：** 合同该晚可否限额/blackout；40 间是否已不可洗；8/29 前 24h 非协议 Pickup。

本卷 **不** 操作 PMS、不关码、不执行 blackout。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/25 00:17 CST。目标入住 8/29 周六。40 间政务协议 @480（Simulation）。PMS 报 OCC 92%。BAR 799。GM 要 +100。销售要对齐 480。前台想标免费。

本卷 **不是** 真店，也不是「中国差旅=480」Fact。

---

## 3. Diagnosis

形 **A + B + C + D** 叠在同一晚：

1. **假高峰（A）：** 92% 含 40 间协议。非协议 remaining = 14，Pace 不是 Ahead 到该 +100。不按 92% Increase BAR。  
2. **假剩余/砸价（B）：** 销售要把 BAR 对到 480。协议价不是公开 BAR。GSA $110 更不是。拒绝。  
3. **误标 Comp（C）：** 480 是房价。P47 不吃。纠正桶。  
4. **高峰置换（D）：** 40×480 占周六。若这 40 挤掉 BAR 799 需求 → 建议该晚限额/关协议/blackout（Hypothesis，合同 Unknown 则只建议不问必开）。Hold BAR **779–799 首选 799**。

不是 P37（没维修）。不是 P31（不是机组）。不是真 Comp。

---

## 4. Options（不编增收精确值）

| 选项 | 动作 | 评 |
| --- | --- | --- |
| GM | BAR 799→899 | 拒。理由是脏 92%，不是付费紧 |
| 销售 | BAR→480 | **拒。** 公开 BAR 不是差旅码。480 仅 Simulation |
| 前台 | 开 complimentary | **拒。** 有房价 |
| P05 dump | 一夜 −15% 或 399 | **拒。** Remaining 14 不是冰 leftover |
| **本卷** | Hold 779–799 首选 799；建议 8/29 限额或 blackout 协议；纠正 Comp 误标 | **首选** |

不伪造「blackout 后多收多少」。方向：保住公开 BAR，限制低价协议继续吃周六。

---

## 5. Advise（口播）

```
1. 这 40 间是有房价的合同价，不是免费房，P47 不吃；92% 里有协议，不要按这张 OCC 涨 BAR。
2. 不要把 BAR 跟到 480，更不要跟 GSA $110；480 只是本卷练习数，不是中国限额。本店协议价以你们合同为准。
3. 周六先做置换：14 间非协议剩余，40 间协议占着。建议该晚限额或 blackout 协议（问合同），公开 BAR Hold 779–799 首选 799。禁止砍到 480 冲 OCC。
```

Overnight 尺：**Hold 779–799 prefer 799**（Hypothesis/Simulation only）。

---

## 6. Do-not-do

- 按 PMS 92% 自动 +100  
- BAR → 480 / GSA $110 / 华住 398  
- 一夜 −15% 当新 BAR  
- 把公务员开成 complimentary  
- 引用未打开的中国限额表  
- 写成 STR Government OCC  
- 写 P48 / 操作 PMS  
- 把本卷 40/480/92% 当 Fact

---

## 7. 兼容

P47：真 $0 请客房才走；本卷有 480。  
P37：永久宿舍不是 40 间过夜协议。  
P31：机组 extra 不是政务块。  
P05：14 间 remaining 不是 dump 燃料；更不能 dump 到 480。  
P01/P03：非协议 14 + 线性 7 日 > DTA → 不涨；置换走限额/blackout 建议。  
T20：无地板不发明 398。

---

## 8. Need Verification（本卷不填）

中国现行限额表；本店协议价；周末 blackout 条款；华住政务价（不编）；STR 该块进哪一桶。

---

## 9. 一句话标题

**Sim headline：** 180 间城市店 Simulation，8/29 周六，BAR 799，政务块 40@480（发明），PMS OCC 92%，非协议剩余 14 → **Hold 779–799 首选 799**；建议该晚限额/blackout 协议；拒绝 BAR→480；拒绝当 Comp。480/40/92% Simulation only。P48 未写。GSA $110 未当中国 BAR。

---

## 10. P48 十段顾问输出（2026-08-25 02:17 CST 追加；不改上文主结论）

> 按 `decision-framework/advisor-process.md` 十节填本卷。Headline **不变**：Hold 779–799 首选 799；建议该晚限额/blackout 协议；拒绝 BAR→480；拒绝当 Comp。40 / 480 / 92% / 799 / 899 只在本 Simulation。P48 现已 drafted。GSA $110 未当中国 BAR。限额表仍 NV。

### 1. Situation

180 间 Simulation 城市店（非真店）。分析时刻 2026-08-25 02:17 CST。Stay Date 2026-08-29 周六，DTA 4。Physical 180，OOO 0。政务/差旅协议块 40 间 @480（Simulation；有房价、有合同码；480 发明数，不是限额表）。无关免费 0。机组 0。Physical occupied 166 = 40 协议 + 126 其他付费。PMS OCC（占用含协议）166/180 = 92.2% ≈ 92%。非协议 Remaining = 14。BAR 799。GM 要按 92% High Demand 把 BAR → 899（+100）。销售要把公开 BAR 对到 480（「差旅标准」）。前台部分政府单想开 complimentary。3D 非协议 Pickup +6（约 2 间/日）。Pace 非协议侧约 On / 略 Ahead 1–2 pp vs STLY ~85%。线性 Days-to-Sellout = 14/2 = 7 > DTA 4。GSA FY2026 标准 lodging $110 = US Fact 标签，本卷不用当中国锚。合同周末可否 blackout = Unknown。

### 2. Diagnosis

**形 A 假高峰 + B 假砸价 + C 误标 Comp + D 高峰置换**叠在同一晚。92% 含 40 间协议，不是付费需求变成 92% 满房。非协议 remaining = 14，Pace 不是 Ahead 到该 +100。销售要把 BAR 对到 480：协议价不是公开 BAR；GSA $110 更不是。480 是房价，P47 不吃。40×480 占周六 = 置换：若挤掉 BAR 799 需求 → 建议该晚限额/关协议/blackout（Hypothesis；合同 Unknown 则只建议不问必开）。Hold BAR **779–799 首选 799**。

不是 P37（没维修）。不是 P31（不是机组）。不是真 Comp。不是 P26（客源是政务不是公司码周末漏）。P03 不启动（非协议 14、速度 2/日、7>4）。P05 不启动（Remaining 14 不是冰 leftover；更不能 dump 到 480）。形 F 未命中本卷（没有人打开现行限额表当 BAR；480 已声明是 Simulation）。形 E 未命中。

Naive「92% 所以涨 / BAR 跟到差旅 / 公务员算免费」：不对。

### 3. Opportunity / Risk

主机会：Hold 799，避免把协议 OCC 奖励成涨价，也避免把公开 BAR 改成差旅码。  
主风险：GM 仍挂 899；销售把 BAR 写成 480；前台把 40 间开 complimentary；合同其实不可 blackout 却被写成必须关。  
假精确：不承诺 blackout 后多收多少。不把 40/480/92% 写成中国限额 Fact。

### 4. Recommended Action

**Hold 779–799 首选 799。拒绝 899。拒绝 BAR→480。拒绝当 Comp。建议该晚限额或 blackout 协议（Hypothesis，问合同）。**

```text
Stay Date:     2026-08-29 Sat（DTA 4）
Form:          A 假高峰 + B 假砸价 + C 误标 Comp + D 高峰置换
Public BAR:    Hold 779–799，首选 799（Hypothesis / Simulation 点）
Increase +100: 不开。不是 High Demand。理由不会是 92%
Dump 480:      不开。协议价不是公开 BAR。GSA $110 不用
Inventory:     14 间非协议空房保持 OPEN。40 间协议保持合同桶——不要当 Comp，不要当 leftover
协议政策:       建议 8/29 限额或 blackout（Hypothesis；合同 Unknown → 只建议不问必开）
Comp 误标:     纠正。480 是房价。P47 不吃
Do-not-do:     899；BAR→480 / GSA $110 / 华住 398；一夜 −15%；发明 40/480 当行业常模或限额 Fact；操作 PMS
```

何时才会小步 P03：仅当重算后**非协议** Remaining 真紧 **且** 中位 Days-to-Sellout < DTA、Pace Ahead。本卷 **不是**。理由仍是非协议剩余，不是 92%。

### 5. Why

1. 协议是围栏合同价，不是公开 BAR（HSMAI BAR = non-qualified public baseline，B）。  
2. STR 只有 Transient / Group / Contract，**无** Government OCC（S）。本卷按晚协议不当 Contract。  
3. PMS OCC 92% 含 40 间协议。非协议 Remaining = 14。故障在 mix，不是需求变强。  
4. GSA $110 = US Fact，不是中国 BAR 锚。现行限额表 NV，480 只 Simulation。  
5. T20：无声明底，不发明 398。BAR→480 不是档 H；一夜 −15% 闸。  
6. 高峰置换：40 间低价占周六。建议限额/blackout（Hypothesis），不 dump 公开 BAR。

### 6. Expected Impact

方向（不伪造点估计）：停止一次把协议 OCC 当成 High Demand，停止一次把公开 BAR 改成差旅码，停止一次把公务员标 complimentary。不承诺 8/29 OCC。blackout 由用户按合同执行；顾问不操作 PMS。

### 7. Risk

| 风险 | 若发生 |
| --- | --- |
| GM 仍挂 899 | 公开基准被一夜改写；理由是脏 92% |
| 销售把 BAR 写成 480 | 围栏价泄漏成公开底 |
| 前台开 complimentary | 合同桶丢了；P47 被误用 |
| 合同其实不可 blackout | 条件化：不能关则仍 Hold BAR，仍不 dump，仍不按 92% 涨 |
| 把 40/480 写成限额 Fact | 下一家店无 480 就会编 |

### 8. What To Watch

- 8/25–8/29 新协议 Pickup（销售是否继续按协议码接周六）  
- 非协议净 Pickup（不是含协议的 PMS OCC）  
- 公开渠道有没有出现 899 或 480  
- 有没有人把 GSA $110 写进中国早会  
- 前台是否仍把政府单开 complimentary  
- 用户是否确认合同该晚可 blackout / 限额

### 9. Re-evaluation Trigger

- 8/26 10:00 非协议净 Pickup ≥4/日 **且** Remaining 变薄 → 再评 P03，仍不跳 899；并建议停接新协议。  
- 用户改口：40 间房价是 $0 → 离开，P47。  
- 用户改口：经理公寓 8 个月 → 离开，P37。  
- 用户改口：机组 extra → 离开，P31。  
- 用户确认合同该晚不可 blackout → Hold BAR 779–799 首选 799；仍拒绝 480；仍不按 92% 涨。  
- 市场突然冰 + 付费空变厚 + DTA≤3 → 才评 P05 围栏，对象是 14 不是把 BAR 改成 480；仍禁一夜 −15%。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、协议 40@480 已声明 Simulation、PMS 含协议已声明、Pace On）。点价 799 / 899 / 480 为 **Simulation**。合同 blackout、佣金、Walk $、本店真实协议价 = **Unknown**。限额表 **仍 NV**。本卷不声称真实酒店结果。GSA $110 未当中国 BAR。

---

## 11. 第二拍（仍 Simulation）：销售要 BAR 480「跟差旅标准」

> 同一 Stay Date、同一库存。**不另开第二份矛盾仿真。** Headline 仍 Hold 779–799 首选 799。

销售原话（仿真）：「差旅标准不就是 480 吗，公开 BAR 跟过去，OCC 好看还合规。」

| # | 判定 |
| --- | --- |
| 销售要把 BAR 写成什么 | 480（本卷练习数）或「差旅标准」 |
| 实际 | 480 是围栏合同价，不是公开 BAR。现行限额表 NV。GSA $110 不是中国锚 |
| 形 | **B 假砸价**（叠加已有 A/C/D） |
| P05？ | **不启动。** dump 对象不是「把 BAR 改成协议价」。14 付费空也未声明市场冰 |
| 480 vs 799 | 不是档 H。禁止一夜 −15%，更禁止把公开底改成合同码 |

**动作：** 拒绝 BAR→480。拒绝「跟差旅标准」。拒绝 GSA $110 当中国 BAR。40 间协议保持合同桶。14 间非协议空房保持 OPEN 在 779–799 首选 799。不要「反正差旅就这个数不如公开卖」。协议价不是 BAR。

```text
Form: B 假砸价
Ask: 公开 BAR 跟到差旅 480
Action: 拒绝。协议价不是公开 BAR。480 只是本卷练习数，不是中国限额
Public BAR: 仍 Hold 779–799 首选 799
Do-not-do: BAR→480；GSA $110 当中国锚；华住 398；一夜 −15%
```

顾问 **不** 把 BAR 改成 480、不执行 blackout、不把 480 写成限额 Fact。

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 00:17 CST | 首版 Simulation。180 间、协议 40@480（发明）、PMS 92%、非协议 Remaining 14、BAR 799 → **Hold 779–799 首选 799**；建议限额/blackout；拒绝 BAR→480；拒绝当 Comp。P48 未写。 |
| 2026-08-25 02:17 CST | P48 开剧本。本卷复用为 P48 仿真。追加十节 Situation→Confidence（主结论不变）+ 第二拍拒绝 BAR 480「跟差旅标准」。不另开第二份矛盾仿真。限额表仍 NV。GSA $110 未当中国 BAR。 |

