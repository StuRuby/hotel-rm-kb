# Simulation Case｜周六 PMS OCC 92%：20 间装修 OOO，重算后不是 92% 满房，Hold BAR；假 40 空不砸到 699

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-ooo-occ-92-saturday.md`  
> 日期：2026-08-23  
> 问：「OCC 已经 92%，要不要再涨？」「还剩 40 间空着，今晚砸一刀？」「对标 Comp 我们 OCC 高 8 个点」  
> 调用：P37 · `dont-price-off-ooo-occ.md` · T06 `capacity-ooo.md` · P03 · P05 · P13 · P33 · P36 · T19 · T20 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**20 间 OOO 只在本文件当 Simulation，不是行业常模 Fact。** 标 Hypothesis 的句子不得改成 Fact。不伪造精确增收。不编中国 PMS 字段名、Walk 成本、佣金%、点弹性、华住 699。Advisor 不操作 PMS。

---

## 0. 用户原始输入（仿真）

两拍写进同一卷：A 假高峰是主枝；B 假剩余是销售第二句。数字都是 **Simulation**。

### 0.1 拍 A · 假高峰（主枝）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-23 周日 02:17 CST
用户原话：「OCC 已经 92% 了，要不要再涨？对标 Comp 我们高 8 个点。工程部还在装修。」

Stay Date：2026-08-29（下周六）
DTA：6
Physical：180
OOO / 装修：20 间（Simulation 输入；短于六个月，未报 STR 改房量）
PMS Available：160（本卷声明：PMS 扣了这 20 间 OOO）
PMS OCC：92%  → OTB Sold = 147（0.92 × 160，四舍五入）
3D Pickup：+3（约 1 间/日）
STLY 同 DTA：Physical OCC 约 80%（144/180）——用户没给，本卷标 Hypothesis 仅作 Pace 尺
公开 BAR（标准、不含早、灵活）：799
竞对公开 BAR 带（用户口述）：779–829
Comp STAR OCC（用户截 STAR 周）：84%
销售方案：按 92% High Demand，Increase BAR 799 → 899；再跟「我们比 Comp 满 8 个点」对外说 MPI 领先
合同佣金 / 变动成本 / 品牌底：Unknown
```

### 0.2 拍 B · 假剩余（同一店、销售第二句）

```text
同一 Stay Date。销售另说：「还剩 40 间空着，今晚（其实是下周六）砸到 699 清掉。」
本拍 Simulation 对齐理论卡的 40/25 尺，不当成与拍 A 必须同一本总账：
  Physical empty 口径（销售）：40
  其中不可售（维修/自用/锁）：25
  真可售剩余：15
  要把 BAR 799 → 699（−12.5%）
```

拍 A 自己的物理空 = 180 − 147 = **33**，其中 20 间 OOO，可售剩余 **13**。销售把 33 说成「40」、或把 OOO 也算进空房。拍 B 用 40/25 把这句话练一遍。两拍都是 **Simulation**。

---

## 1. Intake

口径：Pickup 为间夜。PMS Occupancy **扣 OOO**（本卷声明）。STR 历史分母 **不扣** 这 20 间短装修（S）。  
20 / 40 / 25 / 147 **只是本卷练习数**，不是中国酒店默认维修量。  
独立店。无声明品牌底 → **不发明 699**。  
佣金 / 变动成本 = **Unknown**，不编。Walk 成本不编。

四套尺（8/29，拍 A）：

| 尺 | 数（Simulation） |
| --- | --- |
| Physical | 180 |
| PMS Available（扣 20 OOO） | 160 |
| OTB Sold | 147 |
| PMS OCC | 147 / 160 = **92%** |
| STR OCC | 147 / 180 ≈ **81.7%** |
| Sellable Remaining | 160 − 147 = **13** |
| Physical empty | 180 − 147 = **33** |
| Comp STAR OCC | **84%** |
| 用户说的「高 8 个点」 | 92 − 84 = 8（**混口径**） |
| 同口径差 | 81.7 − 84 ≈ **−2.3 pp**（本店略低，不是领先） |

Pace：STLY 同 DTA ~80% Physical（Hypothesis）→ 本店 STR 81.7% **约 On / 略 Ahead 1–2 pp**，不是 92% 那种 Ahead。  
3D +3 ≈ 1 间/日。线性 Days-to-Sellout = 13 / 1 = **13 日 > DTA 6**。中位 ×0.7 → 更慢。**不是 P03 开门。**

拍 B：40 空里 25 不可售 → 可砸的只剩 **15**。15 也不是 dump 池；DTA=6 更不是 P05 档 H。

**预选 3 个补数：** 分房型 OOO；Comp 是否确为 STAR；8/29 后 24h 净 Pickup。

本卷 **不** 操作 PMS、不点维修单。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/23 周日 02:17 CST。目标入住 8/29 周六。工程短装修 20 间（Simulation）。PMS 报 OCC 92%。BAR 799。销售要涨到 899，又要对外说比 Comp 满 8 个点；另一句要把「40 空」砸到 699。

本卷 **不是** 真店，也不是行业「维修 20 间」常模。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 Physical | 180。定价不是用这把尺当可售 |
| D2 Available_to_sell | 160（拍 A，扣 20 OOO）。Remaining = **13** |
| D3 STR Available | 180。短装修不扣（S）。STR OCC **81.7%**，不是 92% |
| D4 Forward | 本卷 OTB% 若用 Adjusted 可扣 OOO；**不能**拿 Forward 好看 OTB 去打历史 Comp 84% |
| A 假高峰 | **命中。** 92% 是分母被砍。需求没有变成 92% 满房 |
| 可售是否真紧？ | 13 / 160 = 8% 看起来瘦，但速度 1 间/日，Days-to-Sellout 13 > DTA 6。Pickup 弱。**不是 92% sellout。** 本卷 **不走 P03 涨** |
| 若可售真紧且 Pace Ahead？ | 本卷 **不是**。若 24h Pickup 跳到 ≥4/日且中位 Days-to-Sellout < DTA，才移交 P03（先关低价，再评小步 +5–8%，不跳 899）。写进 Trigger，不当本卷主结论 |
| B 假剩余 | **命中销售第二句。** 40 空里 25 不可售（拍 B）或 33 空里 20 OOO（拍 A）。不可售不是砸价对象 |
| C 假 MPI | **命中。** PMS 92% vs STAR Comp 84%。同口径 81.7 vs 84 → 本店略低。不要炫耀，更不要砍价追「领先」 |
| P33 | 本卷没有 CTA 旗标。若「没房」其实是关了到达 → 走开限制，不标维修 |
| P13 | 未给分房型。未知则只动全店 BAR/Hold，不压平其他型 |
| P36 | 这是库存分母，不是截图 80 元 |
| P03 | **不启动主枝。** Remaining:=可售=13，但 Pace 非 Ahead、速度撑得过 DTA |
| P05 | DTA=6 未进 last-minute。即使提前用 P05 排除表：剩余不是 40 可售。禁一夜 −15% |
| T19 | 无三成本。禁止「699 总比空着强」。OOO 20 间更不是未售需求 |
| T20 | 无声明底，**不发明 699** 当清仓线 |

```
Fact（仿真输入）: 8/29 Physical 180、OOO 20、PMS OCC 92%、OTB 147、BAR 799、Comp STAR 84%
High-probability: 92% 是扣了维修的店内尺；8 个点是假 MPI
Hypothesis: STLY 同 DTA ~80% Physical；未给则 Pace 按 STR 81.7% vs Comp 84% 判 On/略落后
Unknown: 中国报表字段名、分房型 OOO、佣金%、变动成本、工程结束日
```

**主诊断：** A 假高峰 + C 假 MPI。可售剩余 13 **不是** 92% 满房。  
**不要涨到 899。不要砸到 699。不要对外说领先 8 个点。**  
**问题树：** §42 · §1.0。  
**Naive「92% 所以涨 / 空 40 所以砸」：不对。**

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | Hold 799，避免把工程关房奖励成涨价，也避免把不可售空房砸穿品牌带 |
| 主风险 | 销售当晚挂 899（假高峰）或 699（假剩余）；或工程结束日仍按 92% 涨 |
| 假精确 | 不承诺 Hold 能多卖 N 间。不估 20 间维修值多少 ADR |

---

## 5. Recommended Action · **Hold 779–799 首选 799；拒绝 899 与 699**

**不按 PMS 92% Increase BAR。不按「40 空」dump。不编 20 为 Fact。**

```text
Hotel: 180 间 Simulation 城市店（非真店）
Brand: 无声明品牌底 → 不发明 699
OOO:   20 间装修（Simulation 输入，短于六个月，STR 分母不扣）

2026-08-29 周六（DTA 6）
  口径:                PMS OCC 92%（扣 OOO）；STR OCC ≈ 81.7%；Sellable Remaining = 13
  公开 BAR:            779–799，首选 799
                       （Hold。假高峰。不是涨价日，也不是降价日）
  围栏:                默认不开。假 40 空不是 −3–5% 许可证
  库存:                13 间可售保持 OPEN。20 间 OOO 保持不可售——不要为了 OCC 假装能卖
  Restriction:         不新设 MinLOS（Pace 未证实 Peak）
  促销:                不报「清 40 空」的周末特价（P18：像 dump + 出资 Unknown）
  Comp / MPI:          不对 8 个点。对外若要比，用 81.7 vs 84
  已订:                不盲改已确认价
  Do-not-do:
    - BAR → 899（按 92% 当 High Demand）
    - BAR → 699 或一夜 −15%（799→679）
    - 用混口径 MPI 说「我们更满」
    - 编中国字段名 / 佣金% / 华住 699 / Walk / 点弹性
    - 把 20 写成行业默认维修量

拍 B（销售「40 空、砸 699」）：
  40 里 25 不可售 → 可售 15。拒绝 699。Hold 同上。
  即使把 15 间真可售拖到 DTA≤3，仍走 P05 排除表，禁止一夜 −15%。
```

**首选 799** 的理由：故障是分母，不是需求突然变强。STR 81.7% + 日均 Pickup 1 间，不是 92% sellout。P03 在 Pace Ahead 之前不点火。P05 在 DTA=6 且可售 13–15 时不点火。

**区间 779–799：** 用户坚持「给个带」，下限是心理微调（约 −2.5%），**不是** 已经降了，更不是对齐 699。

**何时才会小步 P03：** 仅当重算后可售 Remaining 真紧 **且** 中位 Days-to-Sellout < DTA、Pace Ahead。本卷 **不是**。若 24h Pickup ≥4 间/日，再评：先关 <799 低价，BAR 最多 +5–8%（约 839–859 首选 849）——标 Hypothesis，不作为本卷主结论。

**禁止一夜 −15%：** 799→679 才到 −15%；本卷 699 已是 dump，提前挡住。

---

## 6. Expected Impact / Risk / Watch

方向：停止一次把工程关房当成 High Demand，也停止一次把不可售空房当成弱需求。  
不承诺 8/29 OCC。  
风险：销售仍挂 899 或 699；工程 8/28 结束、20 间突然可售却继续按 92% 涨。  
Watch：8/23–8/24 不可售间数；8/29 前 3D 净 Pickup；STAR 是否仍按 180。

---

## 7. 如果只能再补 3 个

1. 分房型 OOO / 自用 / 锁（防 P13 一型假短）。  
2. Comp 截图是不是 STAR 全量分母。  
3. 8/24 10:00 净 Pickup（若 ≥4/日且 Remaining 仍 ~13 → 再评 P03，仍不跳 899）。

---

## 8. 兼容

- P03：Remaining = 可售 13。本卷速度不够，不涨。真紧且 Ahead 才关低价+评第一刀。  
- P05：15 或 13 可售不是 40 dump 燃料。DTA=6 不进档 H。禁一夜 −15%。  
- P33：本卷无 CTA。限制 ≠ 维修。  
- P13：未给分型则不压平其他型 BAR。  
- P36：假 80 是价；本卷假 8 个点是量。  
- T19：OOO 不是未售需求。无成本不说 699 总比空着强。  
- T20：无地板不发明 699。  
- 围栏 −3–5% / BAR −5–10% / 禁一夜 −15% / 价已最高只关不涨。  
- Advisor-First：不操作 PMS、不点维修、不代报 STR。

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 02:17 CST | 首版 Simulation。拍 A：180 间、20 OOO、PMS 92%、可售剩余 13、STR 81.7% → **Hold 779–799 首选 799**；拒绝 899。拍 B：40 空/25 不可售 → 拒绝 699。假 MPI +8 丢掉。20 不当 Fact。 |
