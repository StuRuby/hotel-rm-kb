# Playbook P52｜Group Cutoff / Wash｜团块没 pickup；cutoff 前不 dump BAR 填洞；不按合同块 OCC 涨

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/group-cutoff-wash.md`  
> BACKLOG：P52 Group Cutoff / Wash · 团块没 pickup · HIGH · 先决策卡（本轮同开）· slug **group-cutoff-wash**  
> 状态：**drafted**（2026-08-25 18:17 CST）  
> 配套卡：`recommendations/dont-dump-before-cutoff.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/group-pickup-cutoff.md`（OPERA Pickup / Pickup % / Available=Current−Picked up；Wash/slippage = glossary，**无默认 %**）  
> 交叉：P10 接团 Accept/Reject/Counter ≠ 本剧已在书上的 cutoff 过程；P50 会带房赢会 ≠ pickup vs cutoff；P51 只要厅 ≠ 团客房块；P14 散客高取消 Soft OTB ≠ 团 allotment 未 pickup；P31 机组 allotment ≠ 一场团 cutoff；P30 婚宴块 ≠ 本剧；P05 leftover 只在 cutoff **真释放落地后** 才评  
> 问题树：§58 「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」「PMS 看起来 90% 全是团占的，要不要涨」「cutoff 过了放出 20 间，砸不砸」「销售说团肯定会来齐，先关散客」  
> 仿真：`cases/sim-2026-group-wash-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud：Cutoff Date/Days；Pickup / Pickup % / Available=Current−Picked up；Wash=按间或%抽 allocation；须 Allotment Cutoff **night audit** 才真释放；RETURN BLOCK TO HOUSE）；A（HSMAI Wash / Attrition / Group Slippage **词条，不是 % 常模**；HSMAI Pick-up or Pace report = **店日 Pace，不是团块 allotment pickup**）；B / Hypothesis（cutoff 前不 dump BAR 填洞；不按合同块 OCC 涨；释放落地后再走 P01/P05）  
> Last Verified：2026-08-25  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先问 cutoff 哪天 / 已 pickup 几间 / night audit 会不会把未 pickup 放回大房；Hold BAR；拒绝按团 OCC 涨；拒绝 cutoff 前 dump；释放落地后再评 P01 或 P05；问合同 attrition 条款（金额 NV）。**不操作 PMS**、不跑 night audit、不执行 Wash、不关散客、不改 BAR、不代报 STR。  
> 禁止：发明本店 wash% / 10–25% heuristic / attrition 罚金表 / 华住 cutoff SOP；编餐毛利 / Walk $；一夜 −15%；cutoff 前把 BAR dump 到 399 填未 pickup；按合同块 OCC Increase BAR；把 50/28/22/499/399/799 当市场 Fact；把 HSMAI Pace report 当成团块 pickup；把 P10 接团过程重写成 cutoff。  
> 16:17 「不要写 P52」= 不要复写 P51 只要厅。本槽是 **已在书上的团：pickup vs cutoff vs house return**，不是只要厅。
> **T-Status / P53（2026-08-26 00:17）：** 未扣库存走 T-Status/P53；已扣走 P52。理论尺见 `theory/group-inventory-deduct.md`。

---

## 0. 一句话

**团块没 pickup 的房不是已经卖掉的需求。** 这是接团 **之后** 的过程：pickup vs cutoff vs 回 house。不是 P10 接不接团，不是 P50 用房赢会，不是 P51 只要厅。  
Cutoff 前不要把公开 BAR dump 去填那个洞。合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。Cutoff 当晚未 pickup 回 house **之后**，再按真 remaining + Pace 走 P01 或 P05。释放落地前 Hold 公开 BAR **779–799 首选 799**（Hypothesis / Simulation）。本店 wash% / 罚金 **NV，不编**。

完成定义：一张「先问 cutoff / pickup / night audit 是否真释放 → 不按团 OCC 涨、cutoff 前不 dump → 释放落地后再评 P01/P05」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | blocked 50 把 PMS OCC 打到 90%，pickup 只有 28 | 合同块占用 ≠ 散客紧 | **不要**按那张 OCC Increase BAR。先算 **已 pickup 后的付费剩余** |
| **B 提前 dump** | cutoff 前 dump BAR 填未 pickup 洞 | 房会在 cutoff 回 house | **禁止。** Cutoff 前不要把公开 BAR dump 去填那个洞 |
| **C cutoff 后 leftover** | cutoff 过了放出 20 间，砸不砸 | 只有释放落地后的真 remaining | 真 remaining 厚 **且** Pace Behind → 才评 **P05**。不要在释放前 dump |
| **D 假剩余 / 没真释放** | cutoff 日过了但 Available 仍锁 | night audit / RETURN BLOCK TO HOUSE 没跑 | **不要当 leftover。** 问是否真释放（OPERA：须 Allotment Cutoff night audit） |
| **E 合同 attrition** | 销售说「放出会罚」 | 条款是合同事实，金额未必已知 | **问合同条款**；金额 NV 不编；仍不要把 BAR 写成团价去填洞 |
| **F 误入** | 散客高取消 / 会带房赢会 / 只要厅 / 机组 / 接不接团 / 婚宴 | 不是本剧过程 | 散客高取消 → **P14**。会带房赢会 → **P50**。只要厅 → **P51**。机组 allotment → **P31**。接不接团本身 → **P10**。婚宴块 → **P30** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 团块没 pickup 的房不是已经卖掉的需求。Cutoff 前不要把公开 BAR dump 去填那个洞；先问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。
2. 合同块抬高的占用 ≠ 散客紧。不按那张 OCC 涨 BAR。先算 **已 pickup 后的付费剩余**，并记住未 pickup 将在 cutoff 回 house（OPERA：须 Allotment Cutoff night audit 才真释放）。
3. Cutoff 当晚未 pickup 回 house 之后，再按真 remaining + Pace 走 P01 或 P05。在释放落地前 Hold 779–799 首选 799（Hypothesis / Simulation）。本店 wash% / 罚金 **NV，不编**。
```

独立默认（本库 Hypothesis）：当晚定价用 **已 pickup 后的付费剩余 + Pace**，不是含未 pickup 合同块的 PMS OCC。OPERA Available = Current − Picked up（Vendor PMS Fact，**不是中国 SOP / 不是默认天数**）。HSMAI Wash / Slippage / Attrition 是词条，**不是本店 %**。HSMAI Pick-up or Pace report = 店日 Pace，**不是**团块 allotment pickup。缺 cutoff 日 / pickup 间数 → **问，不编 wash% / 罚金 / 华住 cutoff SOP**。

尺（Hypothesis；799 / 399 / 50/28/22/499 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因团 OCC 去 +100；禁止 dump BAR 到 399 填未 pickup。50 / 28 / 22 / 499 / 399 / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。399 是被拒绝的 dump，不是推荐 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补」 |
| S2 | 「PMS 看起来 90% 全是团占的，要不要涨」 |
| S3 | 「cutoff 过了放出 20 间，砸不砸」 |
| S4 | 「销售说团肯定会来齐，先关散客」 |
| S5 | 团已在书上；销售要把公开 BAR dump 去填未 pickup 洞；或 GM 要按合同块 OCC 涨 BAR |
| S6 | cutoff 日过了但库存仍锁，有人当 leftover 要 dump |

**不是本剧本：**

- 接不接这场团本身 → **P10** Accept / Reject / Counter。本剧默认团 **已经** 在书上。  
- 会带房用便宜房赢会 → **P50**。  
- 只要厅不要房 → **P51**。  
- 散客高取消、OTB=Soft → **P14**。  
- 机组 allotment / extra → **P31**。  
- 婚宴块 → **P30**。  
- 真 leftover 弱市、且 cutoff **已释放落地**、Pace Behind → **P05** 围栏；**仍禁止** BAR→399；**仍禁止一夜 −15%**。  
- 已 pickup 后付费剩余真紧且 Pace Ahead → **P01/P03**（理由是散客剩余，不是团块 OCC）。

---

## 2. 输入（缺 wash% 不停，但不编 %）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) 团已在书上（还没接 → 离开，P10）
4) 合同块间数 vs 已 pickup 间数（缺则问，不编 50/28）
5) cutoff 哪天 / Cutoff Date 或 Cutoff Days（缺则问，不编华住天数）

应用：
6) night audit / Allotment Cutoff 会不会把未 pickup 放回大房（缺则问；OPERA：须 night audit 才真释放）
7) 已 pickup 后的付费剩余 + Pace
8) 公开 BAR
9) 销售/GM 拟议（dump 填洞 / 按团 OCC 涨 / 关散客）

Recommended：
10) 合同 attrition 条款（缺则问；金额 NV 不编）
11) 是否机组 allotment（P31）/ 会带房（P50）/ 只要厅（P51）/ 散客取消潮（P14）/ 婚宴（P30）
```

缺本店 wash% **不停**：方向仍是 cutoff 前不 dump、不按团 OCC 涨。禁止「没 pickup 所以 BAR→399 / 90% 所以涨 / 销售说会来齐所以关散客」。  
顾问 **不** 跑 night audit、不执行 Wash、不关散客、不改 BAR、不编华住 cutoff SOP、不编罚金表。

**贡献 / 罚金口径：** attrition 金额是**用户合同**。销售只说「放出会罚」→ 问条款，**不编 %、不编罚金表**。仍不要把 BAR 写成团价去填洞。

---

## 3. 两轴清单（动价前必过）

团块轴与公开 BAR 轴分开。对不上就不要用「团占了 90%」或「还差 22 间」去改 BAR。

| # | 轴 | 已卖掉？ | 会回 house？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 散客需求 | — | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **已 pickup** | **是**（有预订） | 取消另论 | 否 | 算进付费占用。看这间是否挤散客 |
| D3 | **未 pickup 合同块** | **否** | cutoff + night audit 后回 house | 否 | **不是已卖需求。** 禁止 dump BAR 去填 |
| D4 | **PMS OCC（含整块）** | 混了未 pickup | — | 否 | **假高峰尺。** 不按这张涨 |
| D5 | **释放落地后 remaining** | — | 已回 house | 围栏不是 BAR | 厚且 Pace Behind → **P05**；Ahead → Hold / 评 P01 |
| D6 | **接团本身** | — | — | — | **P10**。本剧不重做 Accept/Reject |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是华住 SOP）：

```
Block_current_t          = 合同块 Current（用户 / OPERA Current）
Picked_up_t              = Pickup Rooms                         # OPERA：块内已有预订
Pickup_pct_t             = Picked_up / Block_current            # OPERA Pickup %；无默认常模
Available_in_block_t     = Current − Picked up                  # OPERA Available；未 pickup 洞
Paid_remaining_t         = Capacity − (已 pickup + 其他付费占用) − OOO
                            # 不要把未 pickup 合同块当成已卖
PMS_OCC_with_block       = (含整块占用) / Available             # 假高峰尺，不按这张涨
Cutoff_date / Cutoff_days = 用户合同或 PMS 字段                  # 不编华住天数
Released_to_house        = Allotment Cutoff night audit 已跑     # OPERA Vendor Fact
# HSMAI Wash     = 合同块 vs 预期实际落地（词条；不是 %）
# HSMAI Slippage = Contract Group Rooms − Actualized Group Rooms（词条；不编 10–25%）
# HSMAI Attrition = 承诺下降可能罚金（词条；金额 NV）
# HSMAI Pick-up or Pace report = 店日 Pace ≠ 团块 allotment pickup
```

| 对不上 | 结论 |
| --- | --- |
| PMS 90%、pickup 远小于块 | **A 假高峰。** 不按那张 OCC 涨 |
| cutoff 前要把 BAR dump 填洞 | **B。** 禁止 |
| cutoff 过了、真释放、remaining 厚、Pace Behind | **C。** 才评 P05 |
| cutoff 日过了但 Available 仍锁 | **D。** 假剩余。问 night audit |
| 销售说放出会罚 | **E。** 问条款；仍不把 BAR 写成团价 |
| 其实是接团 / 会带房 / 只要厅 / 机组 / 散客取消 / 婚宴 | **F。** 离开本剧 |

50 / 28 / 22 / 499 / 399 / 799 **不出现在中国公式里**。仿真数字只在案例文件。本店 wash% **不进公式**。

---

## 4. 诊断枝（禁止「没 pickup 所以 dump / 90% 所以涨 / 会来齐所以关散客」）

```
用户拿团块没 pickup / 团占 OCC 高 / cutoff 过了要 dump / 先关散客 要动 BAR
│
├─ 团还没接、这是询价？
│     是 → 形 F。离开，进 **P10**
│
├─ 会带房赢会（厅+小房块、要 dump BAR 赢会）？
│     是 → 形 F。离开，进 **P50**
│
├─ 只要厅不要房？
│     是 → 形 F。离开，进 **P51**
│
├─ 机组 allotment / extra？
│     是 → 形 F。离开，进 **P31**
│
├─ 散客高取消、不是团块未 pickup？
│     是 → 形 F。离开，进 **P14**
│
├─ 婚宴块？
│     是 → 形 F。离开，进 **P30**
│
├─ 还没给 cutoff 日 / 已 pickup 间数？
│     是 → 问，不编 50/28、不编华住天数。条件化：
│          cutoff 前 → 不 dump、不按团 OCC 涨；Hold BAR
│
├─ A 假高峰：合同块把 PMS OCC 打高，要涨 BAR
│     重算 已 pickup 后的付费剩余、Pace
│     ├─ 散客不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 已 pickup 后付费剩余真紧 AND Pace Ahead
│           → 离开「按团 OCC 涨」，进 **P01/P03**
│             理由是付费剩余，不是含未 pickup 的 PMS OCC
│
├─ B 提前 dump：cutoff 前 dump BAR 填未 pickup 洞
│     → **禁止。** 房会在 cutoff 回 house
│     Hold 779–799 首选 799
│     禁止 BAR→399；禁止一夜 −15%
│
├─ C cutoff 后 leftover：释放落地后真 remaining
│     ├─ 尚未确认 night audit / 真释放 → 当 D，不要 dump
│     ├─ 真 remaining 厚 AND Pace Behind → 才评 **P05** 围栏
│     │     仍禁止 BAR→399；仍禁止一夜 −15%
│     └─ Pace Ahead 或 remaining 不厚 → **Hold**；可评 P01，不是自动 dump
│
├─ D 假剩余：cutoff 日过了但 Available 仍锁
│     → **不要当 leftover。** 问 Allotment Cutoff night audit / RETURN BLOCK TO HOUSE 是否已跑
│     未释放落地前 Hold BAR
│
└─ E 合同 attrition：销售说放出会罚
      问合同条款。金额 NV 不编。
      仍不要把 BAR 写成团价去填洞。
      履约是合同问题，不是公开 BAR 问题。

Naive（禁止）
      「没 pickup 所以 BAR→399」
      「PMS 90% 全是团所以涨」
      「销售说团肯定来齐，先关散客」
      cutoff 日过了但没释放就 dump
      一夜 −15% 当新 BAR
      发明 wash% / 10–25% / 罚金表 / 华住 cutoff SOP
      把 HSMAI Pace report 当成团块 pickup
      把本剧重写成 P10 接团
```

**P01/P03 只在已 pickup 后付费剩余重算之后。** 好看的团 OCC 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房，且须 cutoff 真释放落地。** 禁止 cutoff 前填洞。禁止把公开 BAR 改成 399。  
**T20：** 不砸品牌底去填一场未 pickup 洞。无地板不发明 399。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 钉：团是否已在书上。还没接 → P10。会带房赢会 → P50。只要厅 → P51。机组 → P31。
3. 问 cutoff 哪天、已 pickup 几间、night audit 会不会把未 pickup 放回大房。缺 wash% → 不编。
4. 声明 OPERA：Available = Current − Picked up；须 Allotment Cutoff night audit 才真释放。HSMAI Pace report ≠ 团块 pickup。
5. 重算：已 pickup 后的付费剩余、PMS OCC（含整块 = 假高峰尺）、Pace。
6. 分形：A 假高峰 / B 提前 dump / C cutoff 后 leftover / D 没真释放 / E attrition / F 误入。可以同时命中。
7. A：不按团 OCC 涨。付费剩余真紧 + Ahead → P01/P03（理由是付费剩余）。
8. B：cutoff 前禁止 dump。C：释放落地后才评 P05。D：未释放不当 leftover。
9. E：问合同条款，金额 NV；仍不把 BAR 写成团价。销售「会来齐所以关散客」→ 拒绝。
10. 输出 Hold BAR / 拒绝按团 OCC 涨 / 拒绝 cutoff 前 dump / 移交 P10·P50·P51·P31·P14·P30 或 P01/P05 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / 已 pickup 后付费剩余 / Pace:
合同块 Current / Picked up / Available_in_block:
Cutoff Date 或 Cutoff Days:                 （缺则 Unknown，不编华住天数）
Night audit / 是否真释放:
Attrition 条款（用户合同）:                   （缺则 Unknown，不编罚金）
公开 BAR:
Decision: Hold BAR / 拒绝按团 OCC 涨 / 拒绝 cutoff 前 dump / 问是否真释放 / 移交 P10 / P50 / P51 / P31 / P14 / P30 / 移交 P01·P03 / 移交 P05（仅释放落地后的付费空房）
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      未 pickup 合同块不是公开 BAR。不要把「还差 22 间」写成 dump 许可证
Inventory:  cutoff 前未 pickup 仍可能回 house。不要关散客「等团来齐」
Restriction: 不因假高峰新设 MinLOS。不因未 pickup 关散客
Do-not-do:
  - cutoff 前 dump BAR 填未 pickup 洞
  - 按合同块 OCC Increase BAR
  - BAR → 399 / 团价 / 华住 SOP
  - 一夜 −15% 当新 BAR
  - 销售说会来齐就关散客
  - cutoff 日过了但没释放就当 leftover
  - 发明 wash% / 10–25% / 罚金表
  - 操作 PMS / 跑 night audit / 执行 Wash
Trigger: cutoff + night audit 落地 → 重算 remaining + Pace；Pace Ahead → Hold/评 P01；Behind 且厚 → 才评 P05
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要按合同块 OCC 改公开 BAR；cutoff 前不要 dump 填洞；释放落地后再走 P01 或 P05。**

| 重算结果 | BAR / 块 | 说明 |
| --- | --- | --- |
| A：团 OCC 高、付费剩余不紧或 Pace 非 Ahead | **不涨。Hold** 779–799 首选 799 | 不是 High Demand |
| A：已 pickup 后付费剩余真紧 + Pace Ahead | **P01/P03**：理由是付费剩余，不是团块 OCC | 须把「付费剩余紧」写进 Situation |
| B：cutoff 前要 dump 填洞 | **拒绝。** 房会回 house | 禁止 BAR→399 |
| C：真释放 + remaining 厚 + Pace Behind | **P05** 围栏；对象是付费空房 | 禁止一夜 −15%；禁止 399 |
| C：真释放 + Pace Ahead | **Hold**；可评 P01 | 不是自动 dump |
| D：cutoff 日过了但没真释放 | **不要当 leftover。** 问 night audit | 未落地前 Hold |
| E：放出会罚 | 问条款；金额 NV | 仍不把 BAR 写成团价 |
| F：接团 / 会带房 / 只要厅 / 机组 / 散客取消 / 婚宴 | 离开本剧 | P10 / P50 / P51 / P31 / P14 / P30 |
| 价已最高 | 只关不涨 | 与 P03 同。团块未 pickup ≠ 涨价 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
50 / 28 / 22 / 499 / 399 / 799 **只允许出现在 Simulation**，不是团价行情 Fact，不是新 BAR。399 = 被拒绝的 dump。

### 5.3 Advisor-First

建议用户：cutoff 哪天、已 pickup 几间、night audit 是否真释放、已 pickup 后付费剩余、24h 散客 Pickup、合同 attrition 条款（用户认领）。顾问不跑 night audit、不执行 Wash、不关散客、不改 BAR、不编 wash% / 罚金。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；合同块 vs pickup；cutoff 日；night audit 是否已跑；PMS OCC vs 已 pickup 后付费剩余；BAR；谁要 dump / 按团 OCC 涨 / 关散客 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。未 pickup ≠ 已卖需求；团 OCC ≠ 散客紧；cutoff 日 ≠ 已释放 |
| 3 | Opportunity / Risk | cutoff 前 dump 把回 house 的房贱卖；按假高峰涨赶走散客；没释放就 dump；把 BAR 写成团价 |
| 4 | Recommended Action | Hold BAR / 拒绝按团 OCC 涨 / 拒绝 cutoff 前 dump / 问是否真释放 / 移交 P10·P50·P51·P31·P14·P30 或 P01/P05。点或紧区间，不要「适当降」 |
| 5 | Why | 未 pickup ≠ 已卖 + 团 OCC ≠ 散客紧 + OPERA 须 night audit 才释放 + HSMAI Pace ≠ 团 pickup + wash% NV |
| 6 | Expected Impact | 方向：停一次 cutoff 前 dump / 停一次按团 OCC 涨 / 停一次没释放就砸。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆 pickup vs 块 vs 是否真释放则方向 Medium；缺 cutoff/pickup 只条件化 = Low–Medium；点价永远 Hypothesis/Simulation；wash% 永远 NV |

活用户填空骨架（复制后填；缺数写 Unknown，不编 50/28/wash%/罚金）：

```text
Situation:
  Stay Date / DTA:
  Physical / 合同块 Current / Picked up / Available_in_block:
  Cutoff Date 或 Days / night audit 是否已跑:
  已 pickup 后付费剩余 / PMS OCC（含整块）:
  BAR / 拟议动作（dump 填洞 / 按团 OCC 涨 / 关散客）:

Diagnosis:
  形: A 假高峰 / B 提前 dump / C cutoff 后 leftover / D 没真释放 / E attrition / F 移交 P10·P50·P51·P31·P14·P30
  付费剩余 + Pace（Ahead / On / Behind）:
  是否真释放: 是 / 否 / Unknown

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  Block:  等 cutoff / 问是否真释放 / 不关散客
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非付费剩余已进 P03）
  Do-not-do: cutoff 前 dump；按团 OCC 涨；BAR→399；一夜 −15%；编 wash% / 华住 SOP / 罚金表

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation；wash% NV
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS / night audit 点击步骤。禁止输出「华住 cutoff 该设几天 / 本店 wash 该是百分之几」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出这是询价、团还没接 | **P10** |
| 用户补出会带房赢会 | **P50** |
| 用户补出只要厅 | **P51** |
| 用户补出机组 allotment | **P31** |
| 用户补出散客高取消不是团块 | **P14** |
| 用户补出婚宴 | **P30** |
| cutoff + Allotment Cutoff night audit 落地，未 pickup 回 house | 重算 remaining + Pace |
| 释放后 remaining 不厚或 Pace Ahead | **Hold**；可评 P01/P03。理由不是团 OCC |
| 释放后 remaining 厚 + Pace Behind + DTA 短 | 移交 **P05** 围栏；**仍禁止 BAR=399**；**仍禁止一夜 −15%** |
| cutoff 日过了但 Available 仍锁 | **D。** 问是否真释放；不要 dump |
| 销售仍要把 BAR 砍到 399 填洞 | **拒绝。** 形 B |
| GM 仍要按 90% 团 OCC 涨 | **拒绝。** 形 A |
| 销售要关散客「团会来齐」 | **拒绝。** 未 pickup 不是关散客令 |
| 用户补出 attrition 条款 | 记条款；仍不把 BAR 写成团价 |

300 间尺：不因假团高峰发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| cutoff 前 dump BAR 填洞 | 销售见 22 间未 pickup 就要 399 | 房会回 house；公开底被一夜改写 |
| 按合同块 OCC Increase BAR | GM 见 90% 就要 +100 | 奖励假高峰；付费剩余厚时赶走散客 |
| 没真释放就当 leftover | cutoff 日过了 Available 仍锁 | 砸的是还锁着的房；形 D |
| 销售关散客等团来齐 | 「团肯定会来」 | 未 pickup 不是已卖需求；散客被关 |
| 把 BAR 写成团价 | 499/399 进公开渠道 | 围栏块 / 合同价 ≠ BAR |
| 发明 wash% / 罚金当刀 | 「行业 10–25% / 华住 cutoff」 | 本店 % NV；OPERA 天数是店设，不是中国 SOP |
| 把店日 Pace 报告当团 pickup | HSMAI Pick-up or Pace report | 那是店日 Pace，不是 allotment pickup |
| 真付费剩余紧却因「怕误诊」死不涨 | 已 pickup 后 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 误入接团 / 会带房 / 只要厅 / 机组 / 散客取消 / 婚宴 | 客源或过程不对 | 离开本剧 |

---

## 9. 盯什么

- 团块 Pickup Rooms / Pickup %（OPERA 口径；不是店日 Pace report）  
- Cutoff Date / Cutoff Days；Allotment Cutoff night audit 是否已跑  
- Available_in_block 是否在 cutoff 后变 0（真释放）  
- 已 pickup 后付费剩余 + 散客净 Pickup  
- 公开 BAR 有没有被按团 OCC 改高，或被 dump 成 399  
- 销售是否关散客「等团来齐」  
- 合同 attrition 条款（用户给的，不是编的罚金）  
- wash / slippage：**登记观察，本剧不写 %**（本店仍 NV）

---

## 10. Confidence / 边界

能拆三轴（Stay Date + 合同块 vs pickup + cutoff/是否真释放 + BAR + 付费剩余）→ 方向 **Medium**（不按团 OCC 涨、cutoff 前不 dump、没释放不当 leftover）。  
缺 cutoff/pickup 只条件化 = **Low–Medium**。  
OPERA Pickup / Available=Current−Picked up / 须 night audit 才释放 = **A Vendor PMS**（能力 Fact，不是中国 SOP，不是默认天数）。HSMAI Wash / Attrition / Slippage = **A 词条，不是 %**。HSMAI Pick-up or Pace report = **A 词条；店日 Pace ≠ 团块 pickup**。动作 = **B / Hypothesis**。  
华住 cutoff SOP、本店 wash%、10–25% heuristic、attrition 罚金表、餐毛利、Walk $、点弹性 = **NV，不编**。  
cutoff/pickup 用户没给 → **问，不编 50/28 / 华住天数 / wash%**。

仿真：`cases/sim-2026-group-wash-sat.md`（**Simulation**，不是真店）。周六块 50@499、pickup 28、cutoff 次夜、transient remaining 14 Pace Ahead、PMS OCC ~90% → **Hold BAR 779–799 首选 799；cutoff 前不 dump；不按团 OCC 涨。** 释放后若 22 回 house，再按 remaining + Pace（Ahead 仍 Hold；Behind 才评 P05）。50/28/22/499/399/799 只在该卷。399 = 被拒绝的 dump，不是推荐 BAR。未编 wash% / 罚金 / 华住 SOP。未 dump BAR 到 399。

---

## 11. 证据（2026-08-25 18:17 核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Pickup / Pickup % / Available = Current − Picked up | A Vendor PMS | **Known 能力；不是中国 SOP** | OPERA Cloud 26.2 Managing Block Room and Rate Grid（§25 已开；本轮指针） |
| Cutoff Date：未 pickup 当晚 allotted→picked-up，Available=0；original 可对照 | A Vendor PMS | **Known 机制** | 同上 |
| 须 Allotment Cutoff night audit 才真释放；否则 cutoff 只作合同参考 | A Vendor PMS | **Known 能力；不是中国默认天数** | OPERA Cloud 26.1 Controls — Blocks（§25） |
| RETURN BLOCK TO HOUSE：cutoff 后取消/no-show 回 house 或留块 | A Vendor PMS | **Known 参数** | 同上 |
| Wash = 按间或%抽 allocation（PMS 能力） | A Vendor PMS | **Known 按钮；不是本店 %** | OPERA Room & Rate Grid Wash |
| HSMAI Wash = 合同块 vs 预期实际落地 | A 词条 | **Known 方向；无 % 常模** | HSMAI Academy Glossary Wash（§25） |
| HSMAI Attrition = 承诺下降可能罚金 | A 词条 | **Known 方向；金额 NV** | HSMAI Attrition（§25） |
| HSMAI Group Slippage = Contract − Actualized | A 词条 | **Known 公式名；不编 10–25%** | HSMAI Group Slippage（§25） |
| HSMAI Pick-up or Pace report = 店日 Pace | A 词条 | **不是团块 allotment pickup** | HSMAI Pick-up or Pace report（§25） |
| cutoff 前不 dump；不按团 OCC 涨 | B / Hypothesis | 动作 | 本库 P01 remaining + P05 须真可售 |
| 本店 wash% / 华住 cutoff 天数 / 罚金表 | — | **NV。不编。** | — |

Failed / 未打开（记搜索词，不编页）：

```
HSMAI glossary cutoff-date / cut-off-date     18:17 WebFetch 404
华住 cutoff SOP / 团 wash 百分表 官方
hotel group wash percent 10-25 China default
```

本轮 **未** 新开独立官方 cutoff 词条页。P52 使用 **§25** OPERA / HSMAI。不写新发现。

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-WASH-01 | 本店 wash % / 历史滑移 | **仍 NV。不编。** 不写 10–25%。有史用用户的数，升不了常模 |
| NV-WASH-02 | 本店 cutoff 天数 / 华住 cutoff SOP | **仍 NV。不编。** OPERA Cutoff Date/Days 是店设能力，不是中国默认 |
| NV-WASH-03 | 本店 attrition 罚金表 | **仍 NV。不编。** 问这份合同；无条款不发明 |
| NV-WASH-04 | 本店 Allotment Cutoff night audit 是否激活 | 问。未激活则 cutoff 日 ≠ 已释放（形 D） |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |
| NV-CAT-02 | 餐毛利 | 本剧不编；不把餐当 dump BAR 的理由 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 18:17 CST | drafted。BACKLOG P52。六形 A 假高峰不按团 OCC 涨 / B cutoff 前禁止 dump / C 释放落地后才评 P05 / D 没真释放不当 leftover / E attrition 问条款不编罚金 / F 误入 P10·P50·P51·P31·P14·P30。主卡 `dont-dump-before-cutoff.md`。仿真 `sim-2026-group-wash-sat.md`。不编 wash% / 10–25% / 罚金 / 华住 cutoff SOP。50/28/22/499/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要写 P52」= 不要复写 P51。 |

---

## 14. 交叉（不改 P01–P51 正文；P10/P50/P14/P31/P05 仅文末一行）

- **P10**：接团 Accept/Reject/Counter。本剧是 **接团之后** pickup vs cutoff vs house return。rooms-only 询价仍走 P10。  
- **P50**：会带房 = 要厅 **and** 小房块去赢会。本剧不回答 dump BAR 赢会。  
- **P51**：只要厅不要房。本剧是客房团块。厅满 ≠ 本剧。  
- **P14**：散客高取消 Soft OTB。本剧是团 allotment 未 pickup，不是散客取消潮。  
- **P31**：机组 allotment / extra。持续合同 ≠ 一场团 cutoff。  
- **P30**：婚宴块。  
- **P01 / P03**：看 **已 pickup 后付费剩余** + Pace，不是含未 pickup 的 PMS OCC。  
- **P05**：leftover dump 对象是还能卖的付费空房，且须 cutoff **真释放落地**。禁止 cutoff 前填洞。禁止 BAR→399。  
- **T20**：不砸品牌底去填未 pickup 洞。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。  
- **HSMAI Pace report**：店日 Pace ≠ 团块 pickup。  
- **wash / attrition**：词条 + 观察尺。本店 % **NV**。

Definite vs Tentative（库存扣不扣；暂定画面 ≠ 已卖）走 **P53** `advisor-playbooks/definite-vs-tentative.md` · `dont-raise-on-tentative-occ.md`（2026-08-25 22:17），不是把本剧改成状态轴专篇。已扣库存的 Definite pickup vs cutoff 仍走本卡。IDeaS Strong Tentative 扣了才进本卡。本店 PMS 状态名仍 NV。wash% 仍 NV。

Diagnose 尺见 **T-Status** `theory/group-inventory-deduct.md`（2026-08-26 00:17）：暂定画面满了不是客房已卖掉；先问扣不扣。未扣 → P53；已扣 → 仍本卡 P52。不写 P54。wash% 仍 NV。

散客当天没到（具名客人未 show）走 **P54** `advisor-playbooks/transient-noshow.md` · `dont-dump-on-noshow.md`（2026-08-26 02:17），不是把本剧改成散客 no-show 专篇。团 allotment 未 pickup / wash 仍走本卡。本店 wash% / no-show% 仍 NV。

渠道合同切房卖不掉（OTA/批发 allotment 未 pickup，有人要 dump 公开 BAR 消化）走 **P58** `advisor-playbooks/channel-allotment-unsold.md` · `dont-dump-bar-to-clear-allotment.md`（2026-08-26 18:17），不是把本剧改成渠道配额专篇。同形「还房，不降公开价」，**不同合同**（团块 vs 渠道切房）。团 cutoff / wash 仍走本卡。本店 wash% / 切房 SOP 仍 NV。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。

> 指针（2026-09-15 08:17 T15-08，不改正文三句 / 399 / 799）：Rooming List / Guest History deepen **theory-skip**（§166 复核）。Rooming List = block name-list pickup 作业 ≠ Pace ≠ 公开尺；名单没齐 ≠ dump 令。Diagnose 仍 **P52**（± **P53**/P10）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0817-theory-skip-guest-history-rooming-list.md`。

> 指针（2026-09-15 10:17 C15-10，不改正文三句 / 399 / 799）：Rooming List handoff via P52 — Guest History / Rooming List / Post It misread Simulation drafted（`cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md` · §167 CASE 指针复述 §166）。T15-08 deepen **已 skip** — 不推翻。Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。

> 指针（2026-09-15 12:17 R15-12，不改正文三句 / 399 / 799）：Guest History / Rooming List / Post It 互补源 §168 — Stayntouch Guests（档案 ADR stats）+ Stayntouch Groups（Rooming List / POST CHARGE）+ Protel Passerby invoice 新开。档案住史 ADR / 团名单 pickup / 路人过账 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。T15-08 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-15-1217-sources-recap.md` · `sources/source-map.md` §168。
