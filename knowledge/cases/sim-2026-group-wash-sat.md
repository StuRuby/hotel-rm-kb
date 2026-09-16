# Simulation Case｜周六团块 50@499 pickup 28 cutoff 未到：Hold 779–799 首选 799；禁 dump 399 填 22；不按团 OCC 涨

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-group-wash-sat.md`  
> 日期：2026-08-25  
> 问：「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」「PMS 看起来 90% 全是团占的，要不要涨」「cutoff 过了放出 20 间，砸不砸」「销售说团肯定会来齐，先关散客」  
> 调用：`dont-dump-before-cutoff.md` · P52 `group-cutoff-wash.md` · `metrics/group-pickup-cutoff.md` · P10 · P50 · P51 · P14 · P31 · P30 · P01 / P03 / P05 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**50 间块 @499、pickup 28、未 pickup 22、BAR 799、拟议 dump 399 只在本文件当 Simulation，不是市场行情 Fact，不是华住 cutoff SOP，不是推荐 BAR。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 dump**，不是新 BAR。不伪造精确增收。不编 wash% / 10–25% / attrition 罚金 / 餐毛利 / Walk $。Advisor 不操作 PMS。本卷 **不** 把 BAR dump 到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一场已在书上的周六团块。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-25 周二 18:17 CST
Stay Date：2026-08-29（本周六）
DTA：4
用户原话：「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补？PMS 看起来 90% 全是团占的，要不要涨？销售说团肯定会来齐，先关散客。」
GM：OCC 好看，要不要涨 BAR
销售：还差 22 间，BAR dump 到 399 把洞补上；或先关散客等团来齐
有人预演：cutoff 过了放出 20 间，砸不砸

块（Simulation only，发明数）：
  合同块 Current：50 间 @ 499（发明团价，不是行情 Fact）
  已 pickup：28
  Available_in_block = 50 − 28 = 22
  Cutoff：次夜 2026-08-26（分析日后一夜；距入住约 DTA 2–3）
  Allotment Cutoff night audit：Unknown（本卷按「尚未跑」处理 cutoff 前拍）
  Attrition 条款 / 罚金：Unknown（不编）
  佣金 / 变动成本 / 品牌底：Unknown

库存（Simulation）：
  Physical：180  OOO：0
  其他付费占用（散客等）：116
  PMS Occupied（含整块 50，含未 pickup 22）：116 + 50 = 166
  PMS OCC：166 / 180 = 92.2%  ≈ 用户口中「90% 全是团占的」
  Transient remaining（PMS 口径：整块锁着，散客能卖）：14
  付费占用若只计 pickup 28：116 + 28 = 144；物理空 36，但 22 仍锁在块里，散客真正能卖仍是 14
  3D 散客 Pickup：+6（约 2 间/日）
  Pace：Ahead vs STLY（Hypothesis 练习）
  公开 BAR（标准、不含早、灵活）：799

拟议 A：按 90% OCC 把 BAR 799 → 899
拟议 B：cutoff 前 BAR dump 到 399 填 22 间洞
拟议 C：先关散客，等团来齐
拟议 D（预演 cutoff 后）：若 22 回 house，remaining 变 36，砸不砸
```

50 / 28 / 22 / 14 / 499 / 399 / 799 **只是本卷练习数**。499 **不是**团价行情 Fact。399 **不是**推荐 BAR，是被拒绝的 dump。本卷 Advise **不** dump BAR 到 399。本店 wash% **不出现在本卷当常模**。

---

## 1. Intake

口径：未 pickup 22 **不进**「已卖掉的需求」。OPERA Available = Current − Picked up = 22。Cutoff 次夜；须 Allotment Cutoff night audit 才真释放（Vendor PMS Fact，不是中国默认天数）。  
独立店。无声明品牌底 → **不发明华住 cutoff SOP**。  
Wash % / 罚金 = **Unknown**，不编 10–25%。佣金 Unknown。Walk 不编。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| 合同块 / pickup / 洞 | **50 / 28 / 22** |
| PMS OCC（含整块） | **~90%**（166/180） |
| Transient remaining（锁着未 pickup） | **14** |
| Pace | Ahead |
| BAR | 799 |
| Cutoff | 次夜 8/26；night audit Unknown |
| 销售/GM 拟议 | dump 399 填洞 / 按 90% 涨 / 关散客 |

Pace：线性 Days-to-Sellout = 14/2 = **7 日 > DTA 4**，不是 P03 开门涨价。未 pickup 22 若在 cutoff 回 house，remaining 将变 14+22=**36**，更不是涨价门。

**预选 3 个补数：** cutoff 当晚 night audit 是否真把 22 放回；8/26 后 Available_in_block 是否变 0；8/29 前 24h 散客 Pickup。wash% 不问成「行业多少」，只问本店史 / 这份合同。

本卷 **不** 操作 PMS、不改 BAR、不关散客、不跑 night audit、不执行 Wash。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/25 18:17 CST。Stay Date 8/29 周六，DTA 4。

已在书上的团：块 50@499（发明），pickup 28，洞 22。Cutoff 次夜 8/26。PMS 把整块算占用，OCC ~90%，散客看起来只剩 14。Pace Ahead。公开 BAR 799。

GM 要按 90% 涨。销售要把 BAR dump 到 399 填 22，或先关散客等团来齐。有人预演 cutoff 放出后再砸。

本卷 **不是** 真店，也不是「中国团 wash=22/50」Fact。399 不是推荐 BAR。

---

## 3. Diagnosis

主拍 — 形 **A + B**（可叠销售关散客；预演 C/D）

1. **假高峰（A）：** 合同块把 PMS OCC 打到 ~90%。pickup 只有 28。散客 remaining 14、Pace Ahead 但 Days-to-Sellout 7 > DTA 4，**不是**按团 OCC Increase BAR 的理由。若评涨，理由只能是已 pickup 后付费剩余，须另走 P01/P03——本卷线性尺未开门。  
2. **提前 dump（B）：** cutoff 未到。22 间未 pickup **会在 cutoff 回 house**（若 night audit 跑了）。禁止 dump BAR 到 399 填那个洞。禁止一夜 −15%。  
3. **关散客：** 销售「团肯定会来齐」不是关散客令。未 pickup ≠ 已卖需求。  
4. **预演 C：** 只有 8/26 night audit 落地、22 真回 house 之后，才用 remaining 36 + Pace 重评。本卷 Pace Ahead → **仍 Hold**，不是自动 P05。只有那时 Pace 变成 Behind 才评 P05。  
5. **预演 D：** 若 cutoff 日过了但 Available 仍是 22（night audit 没跑）→ **假剩余**，不要砸。

不是 P10（团已在书上，不是询价）。不是 P50（不是用房赢会）。不是 P51（有客房块）。不是 P14（不是散客取消潮）。不是 P31（不是机组 allotment）。不是 P30。

---

## 4. Options（不编增收精确值）

| 选项 | 评 |
| --- | --- |
| A. 按 90% 把 BAR 799→899 | **拒。** 形 A。假高峰 |
| B. cutoff 前 BAR→399 填 22 | **拒。** 形 B。399 = 被拒绝的 dump，不是推荐 BAR |
| C. 关散客等团来齐 | **拒。** 未 pickup 不是关散客令 |
| D. Hold 779–799 首选 799；等 cutoff + night audit | **选。** 释放前不动公开 BAR |
| E. 现在就按 leftover 走 P05 | **拒。** 22 还锁着。释放落地且 Pace Behind 才评 |
| F. 发明 wash 10–25% 当刀 | **拒。** NV，不编 |

---

## 5. 顾问十节（对用户压缩）

### 1. Situation

180 间仿真店，8/29 周六，DTA 4。团块 50@499（发明），pickup 28，洞 22，cutoff 次夜 8/26。PMS OCC ~90%（含整块）。散客 remaining 14，Pace Ahead，BAR 799。GM 要涨；销售要 399 填洞或关散客。

### 2. Diagnosis

形 **A 假高峰 + B 提前 dump**。未 pickup 22 不是已卖需求。团 OCC ≠ 散客紧。Cutoff 前 dump 会把将回 house 的房贱卖。不是 P10/P50/P51/P14/P31。

### 3. Opportunity / Risk

机会：停一次假高峰涨、停一次 399 dump，cutoff 后若 22 回来可按真 remaining 再卖。  
风险：现在 dump 改写公开底；涨价赶走还能卖的散客；没释放就砸。

### 4. Recommended Action

```text
Stay Date: 2026-08-29 Sat
Physical 180 / PMS remaining 14 / Pace Ahead
Block 50 / Picked up 28 / Available_in_block 22
Cutoff: 2026-08-26 night；night audit Unknown
Decision: Hold public BAR 779–799 首选 799
          拒绝按团 OCC 涨
          拒绝 cutoff 前 dump 399 填 22
          拒绝关散客等团来齐
          cutoff + night audit 落地后重算 remaining + Pace
Do-not-do: BAR→399；一夜 −15%；华住 cutoff SOP；编 wash%；操作 PMS
```

### 5. Why

团块没 pickup 的房不是已经卖掉的需求。Cutoff 前不要把公开 BAR dump 去填那个洞；先问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。  
合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。先算 **已 pickup 后的付费剩余**，并记住未 pickup 将在 cutoff 回 house（OPERA：须 Allotment Cutoff night audit 才真释放）。  
Cutoff 当晚未 pickup 回 house 之后，再按真 remaining + Pace 走 P01 或 P05。在释放落地前 Hold 779–799 首选 799（Hypothesis / Simulation）。本店 wash% / 罚金 **NV，不编**。

OPERA Available = Current − Picked up（§25）。HSMAI Pace report ≠ 团块 pickup。

### 6. Expected Impact

方向：停一次按 90% 涨；停一次 399 填洞；cutoff 后若 22 回来，Ahead 仍 Hold，Behind 才评 P05。不伪造精确增收。399 未成为新 BAR。

### 7. Risk

销售仍报 399；GM 仍按 90% 涨；8/26 没跑 night audit 有人当 leftover 砸；把 499 写成公开价。

### 8. What To Watch

- 8/26 night audit 后 Available_in_block 是否 → 0  
- 团块 Pickup 是否在 cutoff 前继续爬  
- 散客净 Pickup（不是含整块的 PMS OCC）  
- 公开渠道有没有出现 399 当 BAR  
- 销售是否关了散客

### 9. Re-evaluation Trigger

- 8/26 night audit 落地、22 回 house、Pace **仍 Ahead** → **仍 Hold 779–799 首选 799**；不是自动 P05。  
- 8/26 落地、remaining 36、Pace **Behind** + 市场弱 → 才评 **P05** 围栏；仍禁一夜 −15%；仍不写 399。  
- 8/26 过了但 Available 仍 22 → 形 **D**，问是否真释放；不要砸。  
- 已 pickup 后付费剩余变紧 + 24h 散客 Pickup 仍正 + Ahead → 可评 P03，理由不是团 OCC。  
- 用户改口：这是询价还没接 → **P10**。会带房赢会 → **P50**。只要厅 → **P51**。机组 → **P31**。散客取消潮 → **P14**。

### 10. Confidence

方向 **Medium**（口径齐：Physical 180、50/28/22 已声明 Simulation、remaining 14、Pace Ahead、cutoff 次夜）。点价 799 / 399 / 499 为 **Simulation**。wash% / 罚金 / Walk $ / 华住 SOP = **Unknown / NV**。本卷不声称真实酒店结果。399 不是推荐 BAR。

---

## 6. 第二拍（仍 Simulation）：cutoff 后 22 回 house

> 同一块骨架。**不另开第二份矛盾仿真。** Headline 仍 Hold 779–799 首选 799。

| # | 判定 |
| --- | --- |
| 假设 | 8/26 night audit 跑了；Available_in_block = 0；22 回 house |
| Remaining | 14 + 22 = **36** |
| Pace | 本卷仍标 Ahead（练习） |
| 涨 BAR？ | **不。** 更不紧 |
| dump BAR？ | **不自动。** Ahead → Hold。只有 Pace 改成 Behind 才评 P05 |
| 399？ | **仍拒绝。** 399 始终是被拒绝的 dump |

```text
Form: C 仅当 Pace Behind；本卷 Ahead → Hold
Public BAR: Hold 779–799 首选 799
Do-not-do: BAR→399；一夜 −15%；没确认释放就砸
```

若 night audit **没跑**：形 **D**，22 仍锁，不要当 leftover。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 18:17 CST | 首版 Simulation。180 间、块 50@499 pickup 28 洞 22、cutoff 次夜、remaining 14 Pace Ahead → **Hold 779–799 首选 799**；不按团 OCC 涨；cutoff 前不 dump 399。释放后 Ahead 仍 Hold；Behind 才评 P05。50/28/22/499/399/799 只本卷。399 = 被拒绝的 dump。未编 wash% / 罚金 / 华住 SOP。 |
