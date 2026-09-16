# Playbook P54｜Transient No-show｜散客当天没到；房回可售后按 remaining + Pace，不因刚 no-show 就 dump BAR

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/transient-noshow.md`  
> BACKLOG：P54 Transient No-show · 散客当天没到 · HIGH · 先决策卡（本轮同开）· slug **transient-noshow**  
> 状态：**drafted**（2026-08-26 02:17 CST）  
> 配套卡：`recommendations/dont-dump-on-noshow.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/noshow.md`（当晚 no-show 件数；释放后 remaining；**无默认 %**；STR Historical：No-shows **exclude** from Rooms Sold）  
> 交叉：P14 高取消 *到店前* Soft OTB ≠ 当天没到 · P52 团 allotment 未 pickup / wash ≠ 具名散客未到 · P24 超售用历史 no-show 预期设卖限 ≠ 「今晚空了就砸」 · P05 leftover 可在 no-show 回库 *之后* 评，不是 *因为* no-show · P46 早离（已在店）· P42 walk-in 口价 · P53 暂定 vs 确认扣库存  
> 问题树：§60 「今天 8 间 no-show 了，要不要降价补」「散客总 no-show，跟团 wash 一样，BAR 先砍」「超售就是因为 no-show，今晚空了就该砸」「OTB 看起来满，结果没到」  
> 仿真：`cases/sim-2026-noshow-sat.md`（**Simulation**）  
> 证据等级：S（STR Historical：No-shows exclude from Rooms Sold — §22 已开）；A Vendor PMS（OPERA Cloud No Show Posting Rules：EOD 对 no-show 状态可自动过账；能力 Fact，不是中国 SOP / 不是 dump 许可证）；B Vendor（Mews overbooking 对冲 cancel / no-show / early departures — §22 指针）；B / Hypothesis（释放后按 remaining + Pace；不因刚 no-show dump BAR）  
> Last Verified：2026-08-26  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先重算释放后 remaining + Pace；Hold BAR；拒绝因 no-show dump；真 leftover 且 Behind 才评 P05；问当晚 no-show 件数（不编 %）。**不操作 PMS**、不跑 night audit、不改 no-show 状态、不改 BAR、不代报 STR。  
> 禁止：发明本店 no-show% / 行业 5% / 10% / wash% / Walk $；一夜 −15%；因刚 no-show 把 BAR dump 到 399；把散客 no-show 当团 wash% 去砍；按含尚未到达的 OTB OCC Increase BAR；把 8/22/40/399/799 当市场 Fact；复写 P53 deduct-vs-not。  
> 00:17「不要写 P54」= **不要复写 P53**。本槽是 **当天散客未到**，不是库存扣不扣状态轴。

---

## 0. 一句话

**散客 no-show 是当天没到，不是团块 wash，也不是提前取消。** 房回到可售之后，按**现在的 remaining + Pace**走，不要因为「刚 no-show 了」就 dump BAR。今晚 8 间没到 ≠ 今晚该砍。若当晚仍紧或 Pace Ahead，Hold 779–799 首选 799（Hypothesis / Simulation）。真 leftover 且 Behind 才评 P05。超售用的是历史 no-show 预期（P24），不是拿今晚空房证明该砸价。团未 pickup 走 P52。高取消走 P14。早离走 P46。本店 no-show% **NV，不编**。STR：no-show **不计** Rooms Sold（Historical guidelines，§22）。

完成定义：一张「当天散客未到 → 房回可售 → 重算 remaining + Pace → Ahead/仍紧 Hold；真 Behind leftover 才 P05；不与 wash / 提前取消 / 超售报复混」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假信号 dump** | 刚 no-show 所以砍到 399 | 库存回来 ≠ 需求死亡 | **禁止。** 先看释放后 remaining + Pace |
| **B 假高峰** | OTB 含尚未到达、可能 no-show 的房，要 Increase BAR | 画面满 ≠ 已到店 | **不按那张 OCC Increase BAR**（与 P14 Soft 同向；本剧点当天未到） |
| **C 真 leftover** | no-show 释放后 remaining 厚且 Behind | 付费空房真弱 | **才 P05**；仍不是「因为 no-show」；禁 BAR→399 |
| **D 跟团 wash 混** | 散客总 no-show，跟 wash% 一样 BAR 先砍 | 具名散客未到 ≠ 团 allotment 未 pickup | **分开。** 团走 P52 |
| **E 超售报复** | 今晚空了所以少超售/砸价 | 一夜空房 ≠ 改卖限公式 | **P24 用历史**，不因一夜；Walk 成本仍 NV |
| **F 误入** | 取消 / 早离 / 团 cutoff / 暂定 / walk-in / 维修 | 不是本剧 | 取消→**P14**；早离→**P46**；团 cutoff→**P52**；暂定→**P53**；walk-in 口价→**P42**；维修→**P37** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 散客 no-show 是当天没到，不是团块 wash，也不是提前取消。房回到可售之后，按**现在的 remaining + Pace**走，不要因为「刚 no-show 了」就 dump BAR。
2. 今晚 8 间没到 ≠ 今晚该砍。若当晚仍紧或 Pace Ahead，Hold 779–799 首选 799（Hypothesis / Simulation）。真 leftover 且 Behind 才评 P05。STR：no-show **不计** Rooms Sold（已开 Historical guidelines）。
3. 超售用的是历史 no-show 预期（P24），不是拿今晚空房证明该砸价。团未 pickup 走 P52。高取消走 P14。早离走 P46。本店 no-show% **NV，不编**。
```

独立默认（本库 Hypothesis）：当晚定价用 **释放后 remaining + Pace**，不是「刚 no-show 的件数」。STR no-show exclude = **历史 Sold 口径 Fact**，不是定价公式。OPERA no-show posting = **收银/过账能力**，不是 dump 许可证。缺本店 no-show% → **问件数，不编 5%/10%**。

尺（Hypothesis；8/22/40/399/799 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因刚 no-show dump BAR 到 399。禁止一夜 −15%。8 / 22 / 40 / 399 / 799 **只允许出现在 Simulation**。399 = 被拒绝的 dump，不是推荐 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「今天 8 间 no-show 了，要不要降价补」 |
| S2 | 「散客总 no-show，跟团 wash 一样，BAR 先砍」 |
| S3 | 「超售就是因为 no-show，今晚空了就该砸」 |
| S4 | 「OTB 看起来满，结果没到」——有人要按那张满 OCC 涨，或没到后立刻 dump |
| S5 | 销售要把刚释放的 no-show 房挂 399 / 改 BAR |
| S6 | GM 要把「今晚空了」写成少超售或报复性砸价的许可证 |

**不是本剧本：**

- 到店**前**高取消、OTB Soft → **P14**。本剧是 **当天没到**。  
- 团 allotment 未 pickup / cutoff / wash → **P52**。不是具名散客。  
- 用历史 no-show **预期**设卖限 / 已在赶客 → **P24**。不是「今晚空了就砸」。  
- DTA 短从未卖掉的 leftover、且本剧重算后确认 Behind → **P05** 围栏；**仍禁止**「因为 no-show」当理由；**仍禁止** BAR→399。  
- 已在店提前退房 → **P46**。  
- 干净空房 walk-in 口价 → **P42**。  
- 暂定 vs 确认扣库存 → **P53**。  
- 维修 OOO → **P37**。

---

## 2. 输入（缺 no-show% 不停，但不编 %）

```
必须：
1) Stay Date = 被问的那一晚（当天）
2) Physical（大楼房量）
3) 当晚公开 BAR
4) no-show 间数（用户给的件数；缺则问，不编 8）
5) 释放后 remaining + Pace（Ahead / On / Behind）

应用：
6) 释放前 OTB / 画面 OCC（假高峰尺，不按这张涨）
7) 销售/GM 拟议（dump 399 / 按满 OCC 涨 / 少超售报复砸）
8) 是否其实是团未 pickup（P52）/ 提前取消（P14）/ 早离（P46）

Recommended：
9) 本店历史 no-show 件数（观察尺；**不升常模 %**）
10) HK 是否已转可售（脏房不是 walk-in ready）
```

缺本店 no-show% **不停**：方向仍是释放后按 remaining + Pace，不因刚 no-show dump。禁止「行业 5%/10% 所以 BAR→399」。  
顾问 **不** 改 no-show 状态、不跑 posting、不改 BAR、不编华住 no-show SOP、不编 Walk $。

**STR 口径：** Historical No-shows **exclude** from Rooms Sold（§22）。这是报送 Fact，**不是**「今晚该不该砍」的公式。

---

## 3. 两轴清单（动价前必过）

no-show 件数轴与公开 BAR 轴分开。对不上就不要用「刚空了 8 间」去改 BAR。

| # | 轴 | 已卖掉？ | 会回可售？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 散客需求 | — | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **已到店 / 已 show** | **是** | — | 否 | 算进占用 |
| D3 | **当天 no-show** | 预订未到 | **是**（释放后） | 否 | **库存回来，不是需求死亡证明。** 禁止 dump BAR「因为刚 no-show」 |
| D4 | **OTB 含未到** | 混了可能 no-show | — | 否 | **假高峰尺。** 不按这张 Increase BAR |
| D5 | **释放后 remaining** | — | 已回 | 围栏不是 BAR | 厚且 Pace Behind → **P05**；Ahead / 仍紧 → Hold |
| D6 | **历史 no-show 预期** | — | — | — | **P24** 卖限输入。不是今夜砸价许可证 |

重算（声明口径；数字是用户的或 Simulation，不是行业常模）：

```
Noshow_count_t       = 当晚散客未到件数          # 用户件数；无默认 %
Remaining_after_t    = Capacity − Occupied_after_return − OOO
Pace_t               = Ahead / On / Behind
OTB_prearrival_OCC   = 含尚未到达预订的画面占用   # 假高峰尺，不按这张涨
# STR Historical: No-shows exclude from Rooms Sold（报送 Fact，不是定价式）
# OPERA: No Show Posting Rules = EOD 过账能力，不是 dump 许可证
# 本店 no-show% = NV。不编 5% / 10%
```

| 对不上 | 结论 |
| --- | --- |
| 刚 no-show 就要 BAR→399 | **A。** 禁止。先看释放后 remaining + Pace |
| OTB 满、要涨 BAR | **B。** 不按含未到的 OCC 涨 |
| 释放后厚 + Behind | **C。** 才评 P05；仍非「因为 no-show」 |
| 把散客 no-show 当 wash% | **D。** 分开；团走 P52 |
| 今晚空了所以少超售/砸价 | **E。** P24 用历史，不因一夜 |
| 其实是取消 / 早离 / 团 / 暂定 / walk-in / 维修 | **F。** 离开本剧 |

8 / 22 / 40 / 399 / 799 **不出现在中国公式里**。仿真数字只在案例文件。本店 no-show% **不进公式**。

---

## 4. 诊断枝（禁止「刚 no-show 所以 dump / OTB 满所以涨 / 跟 wash 一样砍」）

```
用户拿当天散客 no-show / OTB 满结果没到 / 今晚空了要砸 要动 BAR
│
├─ 其实是到店前取消潮、不是当天没到？
│     是 → 形 F。离开，进 **P14**
│
├─ 其实是团 allotment 未 pickup / cutoff？
│     是 → 形 F。离开，进 **P52**
│
├─ 其实是已在店早离？
│     是 → 形 F。离开，进 **P46**
│
├─ 其实是暂定 vs 确认扣库存？
│     是 → 形 F。离开，进 **P53**
│
├─ 其实是干净 walk-in 口价 / 跟 OTA dump？
│     是 → 形 F。离开，进 **P42**
│
├─ 其实是维修 OOO？
│     是 → 形 F。离开，进 **P37**
│
├─ 还没给 no-show 件数 / 释放后 remaining / Pace？
│     是 → 问，不编 8、不编 5%/10%。条件化：
│          释放后仍紧或 Ahead → Hold；厚且 Behind → 才评 P05
│
├─ A 假信号 dump：刚 no-show 所以砍到 399
│     → **禁止。** 库存回来 ≠ 需求死亡
│     重算释放后 remaining + Pace
│     ├─ 仍紧或 Pace Ahead → Hold 779–799 首选 799
│     └─ 厚且 Behind → 形 C，评 P05（理由是 leftover，不是「因为 no-show」）
│
├─ B 假高峰：OTB 含未到，要 Increase BAR
│     → **不按那张 OCC 涨。** 与 P14 Soft 同向；本剧强调当天未到
│     真付费已到 + Ahead 才可能离开到 P01/P03（理由不是含未到的 OTB）
│
├─ C 真 leftover：释放后 remaining 厚 + Pace Behind
│     → 才评 **P05** 围栏
│     仍禁止 BAR→399；仍禁止一夜 −15%
│     仍不要写「因为刚 no-show」
│
├─ D 跟团 wash 混：把散客 no-show 当 wash% 去砍
│     → **分开。** 具名散客未到 ≠ 团块未 pickup。团走 P52
│
└─ E 超售报复：今晚空了所以少超售/砸价
      → **拒绝一夜报复。** 卖限走 P24 历史预期。Walk $ NV
      今夜定价仍看释放后 remaining + Pace（A/C）

Naive（禁止）
      「今天 8 间 no-show 所以 BAR→399」
      「散客总 no-show 跟 wash 一样先砍」
      「超售就是因为 no-show，今晚空了就该砸」
      「OTB 满所以涨」（含尚未到达）
      一夜 −15% 当新 BAR
      发明 no-show% / 5% / 10% / wash% / Walk $
      把 STR exclude Sold 写成砍价公式
      把 OPERA posting 写成必须 dump
      复写 P53 deduct-vs-not
```

**P05 的 dump 对象是还能卖的付费空房，且须释放落地 + Pace Behind。** 禁止「因为刚 no-show」。禁止把公开 BAR 改成 399。  
**T20：** 不砸品牌底去清一夜 no-show。无地板不发明 399。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date = 当天那一晚。没有日期仍条件化，不说无法判断。
2. 钉：是当天散客未到，不是到店前取消（P14）、不是团 wash（P52）、不是早离（P46）。
3. 问 no-show 件数、释放后 remaining、Pace。缺 % → 不编 5%/10%。
4. 声明 STR：No-shows exclude from Rooms Sold（报送 Fact，不是定价式）。OPERA posting = 过账能力，不是 dump 许可证。
5. 重算：释放后 remaining、含未到的 OTB OCC（假高峰尺）、Pace。
6. 分形：A dump / B 假高峰 / C leftover / D wash 混 / E 超售报复 / F 误入。可以同时命中。
7. A：禁止因刚 no-show dump。仍紧/Ahead → Hold 779–799 首选 799。
8. B：不按含未到 OCC 涨。C：释放后厚+Behind 才 P05。D：团走 P52。E：P24 用历史。
9. F：移交 P14·P52·P46·P53·P42·P37。
10. 输出 Hold BAR / 拒绝因 no-show dump / 移交 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / Remaining_after_noshow / Pace:
Noshow_count:                              （缺则 Unknown，不编 8 / 不编 %）
OTB_prearrival_OCC（假高峰尺）:
公开 BAR:
Decision: Hold BAR / 拒绝因 no-show dump / 不按含未到 OCC 涨 / 移交 P14·P52·P46·P53·P42·P37 / 移交 P05（仅释放后厚+Behind）/ 超售卖限仍走 P24 历史
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      no-show 件数不是公开 BAR。不要把「刚空了 8 间」写成 dump 许可证
Inventory:  释放后的房是可售；脏房须 HK。不要关散客「等 no-show 补回来」
Restriction: 不因一夜 no-show 新设报复性关房
Do-not-do:
  - 因刚 no-show dump BAR 到 399
  - 按含尚未到达的 OTB OCC Increase BAR
  - 把散客 no-show 当团 wash% 去砍
  - 今晚空了所以少超售/砸价（一夜报复）
  - BAR → 399 / 一夜 −15%
  - 发明 no-show% / 5% / 10% / wash% / Walk $
  - 操作 PMS / 改 no-show 状态 / 代报 STR
Trigger: 释放后 24h Pickup；Pace Ahead → Hold；Behind 且厚 → 才评 P05
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要因为刚 no-show 改公开 BAR；释放后再走 Hold 或 P05。**

| 重算结果 | BAR / 块 | 说明 |
| --- | --- | --- |
| A：刚 no-show、仍紧或 Pace Ahead | **Hold** 779–799 首选 799 | 禁止 BAR→399 |
| A→C：释放后厚 + Pace Behind | **P05** 围栏；对象是付费空房 | 理由是 leftover，不是「因为 no-show」；禁 399 |
| B：OTB 含未到要涨 | **不涨。** 假高峰 | 真付费紧+Ahead 才可能 P01/P03 |
| D：跟 wash 混 | **分开**；团 → P52 | 不按 wash% 砍 BAR |
| E：今晚空了报复 | **拒绝一夜报复**；卖限 → P24 | Walk $ NV |
| F：取消/早离/团/暂定/walk-in/维修 | 离开本剧 | P14/P46/P52/P53/P42/P37 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
8 / 22 / 40 / 399 / 799 **只允许出现在 Simulation**。399 = 被拒绝的 dump。

### 5.3 Advisor-First

建议用户：当晚 no-show 件数、释放后 remaining、Pace、24h Pickup、是否其实是团 wash / 提前取消 / 早离。顾问不改 PMS 状态、不挂渠道特价、不编 %。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；no-show 件数；释放前/后 remaining；Pace；BAR；谁要 dump / 按满 OCC 涨 / 报复砸 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。库存回来 ≠ 需求死亡；含未到 OTB ≠ 散客紧；散客 no-show ≠ 团 wash |
| 3 | Opportunity / Risk | 因 no-show dump 毁 ADR；按假高峰涨；一夜报复改卖限；把 wash% 混进散客 |
| 4 | Recommended Action | Hold BAR / 拒绝因 no-show dump / 不按含未到 OCC 涨 / 移交或 P05。点或紧区间，不要「适当降」 |
| 5 | Why | 释放后 remaining+Pace + STR exclude Sold（报送）+ OPERA posting≠dump + no-show% NV |
| 6 | Expected Impact | 方向：停一次因 no-show dump / 停一次假高峰涨。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆件数 vs 释放后 remaining vs Pace 则方向 Medium；缺件数只条件化 = Low–Medium；点价永远 Hypothesis/Simulation；no-show% 永远 NV |

活用户填空骨架：

```text
Situation:
  Stay Date / DTA:
  Physical / Noshow_count / Remaining_after / Pace:
  OTB_prearrival_OCC / BAR / 拟议动作:

Diagnosis:
  形: A dump / B 假高峰 / C leftover→P05 / D wash混→P52 / E 超售报复 / F 移交
  Remaining_after + Pace:

Opportunity / Risk:
Recommended Action:
  Public BAR:  （Hypothesis 带：779–799 首选 799）
  Do-not-do: 因 no-show dump；BAR→399；一夜 −15%；编 no-show% / 5% / 10%
Why:
Expected Impact:
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation；no-show% NV
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS 点击步骤。禁止输出「行业 no-show 该是百分之几」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出其实是到店前取消潮 | **P14** |
| 用户补出团未 pickup / cutoff | **P52** |
| 用户补出已在店早离 | **P46** |
| 用户补出暂定/确认扣库存 | **P53** |
| 用户补出 walk-in 口价 / OTA dump | **P42** |
| 释放后 remaining 不厚或 Pace Ahead | **Hold**；可评 P01/P03。理由不是「刚 no-show」 |
| 释放后 remaining 厚 + Pace Behind + DTA 短 | 移交 **P05**；**仍禁止 BAR=399**；**仍禁止一夜 −15%**；理由写 leftover |
| 销售仍要把 BAR 砍到 399 | **拒绝。** 形 A |
| GM 仍要按含未到 OTB 涨 | **拒绝。** 形 B |
| 销售把散客 no-show 当 wash% | **拒绝。** 形 D；团走 P52 |
| GM 要用今晚空房改超售卖限 | **拒绝一夜报复。** 形 E；卖限走 P24 |

300 间尺：不因一夜 no-show 发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 因刚 no-show dump BAR | 销售见 8 间就要 399 | 库存礼物被写成需求死亡；公开底一夜改写 |
| 按含未到 OTB Increase BAR | GM 见「满」就要 +100 | 奖励假高峰；未到房会释放 |
| 跟团 wash% 混砍 | 「散客总 no-show 跟 wash 一样」 | 两套机制；误砍散客 BAR |
| 一夜空房报复改卖限 | 「超售就是因为 no-show」 | P24 用历史；一夜样本噪声大 |
| 发明 no-show% 当刀 | 「行业 5%/10%」 | 本店 % NV |
| 把 STR exclude 写成砍价式 | 「反正不计 Sold」 | 报送口径 ≠ 今夜定价 |
| 真 leftover 却因「怕误诊」死不评 P05 | 释放后厚+Behind | 重算后仍弱 → P05，不是永远 Hold |
| 误入取消/早离/团/暂定/walk-in/维修 | 客源或过程不对 | 离开本剧 |

---

## 9. 盯什么

- 当晚 no-show **件数**（不是编出来的 %）  
- 释放后 remaining + 散客净 Pickup  
- 公开 BAR 有没有被因 no-show 改成 399  
- 含尚未到达的 OTB OCC 有没有被拿去涨价  
- 是否把散客 no-show 写成 wash%  
- 超售卖限有没有因一夜空房被改（应走 P24 历史）  
- STR / 本店历史 Sold：no-show 是否错误进了 Sold（报送问题，不是砍 BAR 理由）

---

## 10. Confidence / 边界

能拆三轴（Stay Date + no-show 件数 + 释放后 remaining/Pace + BAR）→ 方向 **Medium**（不因刚 no-show dump、不按含未到 OCC 涨）。  
缺件数只条件化 = **Low–Medium**。  
STR No-shows exclude from Rooms Sold = **S**（Historical guidelines，§22）。OPERA No Show Posting Rules = **A Vendor PMS**（能力 Fact，不是中国 SOP）。Mews early departures + no-shows = **B Vendor**（§22 指针）。动作 = **B / Hypothesis**。  
本店 no-show%、行业 5%/10%、wash%、Walk $、点弹性 = **NV，不编**。  
件数用户没给 → **问，不编 8 / 5% / 10%**。

仿真：`cases/sim-2026-noshow-sat.md`（**Simulation**，不是真店）。周六 8 transient no-shows、释放后 remaining 22、Pace Ahead → **Hold BAR 779–799 首选 799；不因 8 间 dump；不跟 wash 混；不按含未到 OCC 涨。** Behind leftover 枝：remaining 40 Pace Behind → 才评 P05，仍不是「因为 no-show」。8/22/40/399/799 只在该卷。399 = 被拒绝的 dump。未编 no-show%。未 dump BAR 到 399。

---

## 11. 证据（2026-08-26 02:17 核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| STR Historical：No-shows **exclude** from Rooms Sold | S | **Known 报送口径；不是定价公式** | CoStar STR Historical Benchmarking Data Reporting Guidelines（§22 已开；本轮指针） |
| OPERA Cloud：No Show Posting Rules；EOD 可对 no-show 自动过账（First Night / All Nights / Deposit Only） | A Vendor PMS | **Known 能力；不是中国 SOP / 不是 dump 许可证** | Oracle OPERA Cloud 25.4 Configuring No Show Posting Rules（§30 新开） |
| 超售对冲 cancel / no-show / early departures | B Vendor | **Known 方向** | Mews Hotel overbooking（§22 已开；指针） |
| 释放后按 remaining + Pace；不因刚 no-show dump | B / Hypothesis | 动作 | 本库 P01 remaining + P05 leftover + P46 回库同构 |
| 本店 no-show% / 行业 5% / 10% / wash% / Walk $ | — | **NV。不编。** | SiteMinder no-show 仍 NV（backlog） |

Failed / 未当核页：

```
SiteMinder no-show 专页          仍 NV（Cloudflare / backlog）
行业默认 no-show 5% / 10%        禁止发明
华住 no-show SOP                 仍 NV，不编
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-NS-01 | 本店 no-show % / 按 DOW·Segment | **仍 NV。不编。** 不写 5%/10%。有史用用户件数，升不了常模 |
| NV-NS-02 | 本店 OPERA No Show Posting 是否激活及规则 | 问。过账 ≠ dump 许可证 |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额；卖限走 P24 |
| NV-CXL-04 | SiteMinder no-show 专页 | 仍 NV |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 02:17 CST | drafted。BACKLOG P54。六形 A 假信号 dump 禁止 / B 不按含未到 OCC 涨 / C 释放后厚+Behind 才 P05 / D 与团 wash 分开 / E 超售不因一夜报复 / F 误入 P14·P52·P46·P53·P42·P37。主卡 `dont-dump-on-noshow.md`。仿真 `sim-2026-noshow-sat.md`。不编 no-show% / 5% / 10% / wash% / Walk $。8/22/40/399/799 Simulation only。399 = 被拒绝的 dump。00:17「不要写 P54」= 不要复写 P53；本槽是当天散客未到。 |

---

## 14. 交叉（不改 P01–P53 正文；P14/P24/P05/P52/P46 仅文末一行）

- **P14**：到店**前**高取消 Soft OTB。本剧是 **当天没到**。  
- **P24**：超售用历史 no-show **预期**设卖限 / Walk 程序。不是拿今晚空房证明该砸价。  
- **P05**：leftover 可在 no-show 房回库 **之后** 评；不是 *因为* no-show。禁止 BAR→399。  
- **P52**：团 allotment 未 pickup / cutoff / wash。具名散客 no-show ≠ 团 wash%。  
- **P46**：早离 = 已在店离开。本剧 = 从未到店。  
- **P42**：干净空房 walk-in 口价。释放后干净房才可能进前台，仍不跟 dump。  
- **P53**：暂定 vs 确认扣库存。本剧不是状态轴。  
- **P37**：OOO ≠ no-show 回库。  
- **T20**：不砸品牌底去清一夜 no-show。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。  
- **STR exclude Sold**：报送 Fact，不是砍价公式。  
- **no-show%**：观察尺。本店 % **NV**。

P55 last-line（2026-08-26 06:17 CST）：担保/非担保与到点释放走 `guarantee-type.md`；放房前不提前 dump，放房后按真 remaining + Pace。

P62 last-line（2026-08-27 10:17 CST）：同住取消再订更低价走 `same-day-cancel-rebook.md`；本剧仍是**当天没到**。有取消记录并重订 ≠ no-show。

P65 last-line（2026-08-27 22:17 CST）：取消后再要求按旧价 Reinstate 走 `cancel-reinstate-old-rate.md`；本剧仍是**当天没到**。有取消记录并要恢复 ≠ no-show。
T-Reinstate last-line（2026-08-28 00:17 CST）：取消后按旧价 Reinstate 走 `theory/reinstate-vs-current-rate.md` + P65；本剧仍是**当天没到**。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。

> 指针（2026-09-15 00:17 T15-00，不改正文三句 / 399 / 799）：Night Audit / EOD / Cashier Closure deepen **theory-skip**（§163 复核）。business-date / posting / shift-closure ≠ 需求证明 ≠ BAR rewrite；Auto No Show 仍本剧邻闸。Diagnose 仍 **P54**（+ **P45**/P08）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0017-theory-skip-room-condition-night-audit.md`。

> 指针（2026-09-15 02:17 C15-02，不改正文）：§164 CASE Night Audit handoff via P54/P45 — Room Condition / Night Audit·EOD·Cashier / Market·Source misread Simulation drafted（`cases/sim-2026-room-condition-night-audit-market-misread-sat.md` · §164）。Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。

> 指针（2026-09-15 04:17 R15-04，不改正文）：§165 Clock Revenue Date Mode 等互补源；Night Audit/EOD/营收日 ≠ 公开 BAR。Diagnose 主闸仍 **P54**（+ **P45**/P08）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0417-sources-recap.md`。
