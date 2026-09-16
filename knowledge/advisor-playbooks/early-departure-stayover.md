# Playbook P46｜Early Departure / Stayover Extension｜提前退房 / 续住

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/early-departure-stayover.md`  
> BACKLOG：P46 Early Departure / Stayover · HIGH（T07 同日 FO 空档）· 先决策卡 · slug **early-departure-stayover**  
> 状态：**drafted**（2026-08-24 14:17 CST）  
> 配套卡：`recommendations/dont-dump-on-early-depart.md`  
> 理论：`overbooking/overbooking-framework.md` §1 五流量（**不另发明公式**）· `inventory/inventory-control.md` · T19 贡献 · T20 不砸过夜地板  
> 交叉：P05 leftover 未售 ≠ 早离回库 · P24 已在赶客 · P40 新订 Sat-only ≠ 在店续住 · P42 干净空房 walk-in ≠ 脏 ED 房 · P38 取消窗收紧 ≠ 早离费 · P37 OOO ≠ Due Out  
> 问题树：§52 「早离开特价 / 高峰续住」  
> 仿真：`cases/sim-2026-early-depart-8-vs-sat-bar.md`（**Simulation**）  
> 证据等级：B Vendor（Mews：超售对冲 cancel / no-show **和 early departures**；意外 stay extension 可造成 accidental overbooking）；A Vendor PMS（OPERA Cloud Check Out Early → Due Out；OPERA 5 早离费计算规则是配置不是中国默认 SOP；OPERA Due Out 必须 checkout 或 extend 才能过 EOD）；B Vendor（Marriott：早离费典型在比入住时确认的离店日更早走；**政策和金额随地点/房价变**，不编表）；C 教学（hmhub IHM 可售房公式含 understay/overstay，**不是 STR Occupied 恒等式**）；Internal Theory（框架 §1 已写 Occupied / Remaining / Walk 简化式）。华住 SOP / 中国 OTA 佣金% / Walk 金额 / 399 行情 = **NV**  
> Last Verified：2026-08-24  
> 知识类型：Best Practice + Vendor Methodology + Internal Theory + Hypothesis  
> Advisor-First：只建议 Hold/拒/BAR/是否移交 P05 或 P24。**不操作** PMS / Channel Manager / OTA / RMS / 房态 / 收银。  
> 禁止：编华住/锦江 SOP；编 Marriott 中国早离费金额；编 OPERA 默认中国罚金；把 ED dump 写成新公开 BAR；高峰续住友情价 399；一夜 −15% 当新 BAR；把 Due Out 当空房再卖；点弹性；Walk 成本金额；eCornell IMPACT $300 当中国成本。

---

## 0. 一句话

提前退房是库存回来，不是需求死了；先重算可售剩余再决定要不要走 P05。  
高峰/剩余仍紧 → 不因为多出几间就开特价；房务未转房不等于当前可卖 walk-in。  
高峰续住是在和到店抢房；满房/超售默认拒或只按公开 BAR 接，不打折扣客价；会赶客就走 P24。

完成定义：一张「早离回库 → 重算 Remaining → 高峰 Hold / 弱市才 P05；续住 → 高峰拒或 BAR / 淡市可按 BAR 接；Due Out ≠ 空」过程。P05 管 **从未卖掉的 leftover**；P24 管 **已经在 Walk**；P40 管 **新订** stay pattern；P42 管 **干净空房** 前台口价。本剧接管 **同日 FO 的早离与在店续住**。

顾问必须能直接说的三句：

```
1. 提前退房是库存回来，不是需求死了；先重算可售剩余再决定要不要走 P05。
2. 高峰/剩余仍紧/市场仍紧 → 不因为多出几间就开特价；房务未转房不等于当前可卖 walk-in。
3. 高峰续住是在和到店抢房；满房/超售默认拒或只按公开 BAR 接，不打折扣客价；会赶客就走 P24。
```

（779–799 首选 799 是本库 Hypothesis 带 + Simulation 点。399 只允许出现在 Simulation。）

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 高峰早离回库** | 「今天空出 8 间提前退房，今晚开个 399？」 | Pace Ahead / 重算后 Remaining 仍紧 / 市场未冰。库存礼物 ≠ 需求死亡 | **Hold BAR**（Hypothesis 779–799 首选 799）。**不开** last-minute dump。HK 转房前不当 walk-in 可卖。早离费 = 房价规则若已配置；**收费 ≠ dump 该房** |
| **B 弱市早离加厚剩余** | 「反正空了，索性砸一刀」 | 该夜 **本已 leftover-弱** **且** ED 让剩余更厚 **且** 市场也弱 | **然后且仅然后** 调用 **P05**，带围栏，**不是**新公开 BAR。仍禁一夜 −15% 当 BAR |
| **C 高峰续住** | 「老客人要加周六，给个 399 意思一下」 | 在店续住在和 **已售到店** 抢同一物理房。剩余紧 | **拒，或只按当前公开 BAR 接**（Simulation 779–799 首选 799）。禁止「老客 399」。接了会赶客 → **P24**，不要用待客藏 Walk |
| **D 淡市续住** | 「明天冰，客人想多住一晚」 | 次日 leftover 冰，续住是增量占用 | **按 BAR 或已发布 stayover 价接**。仍 **不**把公开 BAR 改低 |
| **E 未 Due Out 就当可售** | 前台把「应该会走」算进 Remaining，先卖给 walk-in/OTA | Due Out ≠ vacant。EOD 前必须 checkout 或 extend | **不要卖两次。** 未 checkout 的 Due Out 不是空房 |

库存恒等式（**指向** `overbooking/overbooking-framework.md` §1，不另发明）：

```
Occupied tonight = Stayover + Arrivals who show
Remaining sellable = Capacity − Occupied − OOO
  （脏的 ED 房在 HK 转房前不是 walk-in ready）
Unexpected ED      → Remaining 上升（库存礼物，不是需求死了）
Unexpected stayover → Remaining 对到店下降（可造成 Walk）
```

框架原文简化式：`空房 = Capacity − Show-ups − Stayovers`；`Walk = max(0, Show-ups + Stayovers − Capacity)`。口径未定时标 Unknown。

独立默认（本库 Hypothesis）：

- 早离 **先重算** Remaining + Pace + 市场，再谈 P05。  
- 高峰 / Ahead / 重算后仍紧：**不开** 今夜 dump，**不**把 ED 房写成新 BAR。  
- 脏房、Due Out 未 checkout：**不是** desk inventory。  
- 高峰续住：默认 **拒或 BAR**；友情折扣禁止。会 Walk → P24。  
- 早离费是 **rate-rule**（OPERA 可配；Marriott 随地点/房价）。收费不是开特价许可证。  
- 禁一夜 −15% 当永久 BAR。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| H1 | 「今天有 N 间提前退房，今晚要不要开特价？」 |
| H2 | 「客人要续住高峰周六 / 明天满」 |
| H3 | 销售要把早离空房挂 399 / 改 BAR |
| H4 | 前台把「应该会走」的 Due Out 先卖给 walk-in |
| H5 | 在店客人要加一晚，房价要沿用入住时低价或友情价 |

**不是本剧本：**

- DTA≤3 **从未卖掉** 的 leftover 过夜 dump（没有当天早离作为理由）→ **P05**。早离回库先过本剧闸，弱市确认后才移交 P05。  
- **已经**在赶客、今晚 Walk 名单 → **P24**。本剧尽量把续住挡在 Walk 之前。  
- **新订**只订周六 / MinLOS → **P40**。在店续住不是新 Sat-only。  
- 前台对 **已转房的干净空房** 报 walk-in 口价 → **P42**。脏 ED 房先 HK。  
- 取消窗还很长、要不要先收免费取消再砍 → **P38**。早离费 ≠ 收紧取消然后 dump。  
- 维修/锁房看起来空 → **P37**。OOO ≠ Due Out ≠ 早离回库。  
- 钟点占晚房 → **P44**。

---

## 2. 输入（缺费表不停，但不编）

```
必须：
1) Stay Date = 被问的那一晚（早离回库的夜 / 续住要占的夜）
2) 当晚公开 BAR
3) 早离/续住发生前的 Remaining、Occupied、OOO
4) 早离间数 或 续住间数（拟议）
5) 该夜 Pace / Pickup / 是否 Ahead / 市场是否冰
6) 到店已售是否覆盖拟续住房（续住题必问）

应用：
7) HK 是否已转房（能/不能/未知）。未知高峰 → 不当 walk-in ready
8) Due Out 是否已 checkout（OPERA：未解决不能当空）
9) 该房价码是否配置早离费（有/无/未知）。未知不编金额
10) 品牌底（有则挡；无则不发明 699）

Recommended：
11) STLY / 同 DOW Pace
12) 竞对当晚是否满
13) 已发布 stayover / extra-night 价
```

缺早离费表 **不停**：不编 Marriott 中国金额，不编 OPERA 默认罚金。问「这张单的房价规则有没有早离费」。  
缺 Walk 成本 **不停**：会赶客就移交 P24，不编金额。  
399 不是本剧输入默认。顾问 **不** 改 PMS 离店日、不转房、不挂 OTA 特价。

---

## 3. 分叉闸（开 dump / 答应续住前必过）

```
0  问的是当天早离回库，还是在店续住，还是新订 Sat-only / 干净 walk-in？
     新订周六 → P40。干净空房口价 → P42。已在赶客 → P24。本剧停主座。
1  Remaining 重算了吗？
     Occupied := Stayover + Arrivals who show
     Remaining := Capacity − Occupied − OOO
     脏 ED 未转房 → 从 walk-in ready 里拿掉
     Due Out 未 checkout → 不是空房（形 E）
2  早离枝：重算后 Pace Ahead / Remaining 仍紧 / 市场未冰？
     是 → 形 A。Hold BAR。不开 dump。收费 ≠ dump。
     该夜本已 leftover-弱 且市场也弱 → 形 B。才叫 P05 围栏。禁一夜 −15% 当 BAR。
     未知 → 当未冰（形 A）。缺数不默认开 399。
3  续住枝：拟续住夜 Remaining 紧 或 该房已卖给到店？
     是 → 形 C。拒，或只按公开 BAR。禁止老客折扣。会 Walk → P24。
     次日冰、续住是增量 → 形 D。按 BAR 或已发布 stayover 价接。不改 BAR 向下。
4  有人要把公开 BAR 改成 ED dump 价 / 一夜 −15%+？
     → 拒绝。
```

**禁止跳到「空出 8 间所以今晚特价」。** 空的是库存回来，不是需求死亡证明。  
**禁止跳到「老客人给个意思价」。** 高峰续住的机会成本是到店 BAR，不是 0。

Mews（Vendor B，2026-08-24 打开）：超售用来对冲 cancellations、no-shows **and early departures**；guests sometimes extend；若该房已卖给 arriving guests，availability constrained → overbooking。  
OPERA Cloud（Vendor PMS Fact）：Check Out Early 仅当 departure date > business date；status → Due Out；Early Departure Penalty 是可选 OPERA Control。  
OPERA 5（Vendor 配置）：早离费计算 FLAT / LAST NIGHT / REMAINING NIGHTS / TOTAL DEPOSIT / RATE TIER ADJUSTMENT。**不是**推荐中国收费标准。  
OPERA Departures Not Checked Out（Vendor PMS Fact）：Due Out 必须 checkout **或** extend，EOD 才继续。  
Marriott support（Vendor B）：早离费典型在比入住确认离店日更早走；**policies vary by location and rate**。不编金额。

---

## 4. 诊断枝（禁止「空了所以砸 / 老客所以折」）

```
用户说今天早离 N 间要开特价 / 客人要续住高峰
│
├─ 0. 产品是什么？
│     新订 Sat-only → P40
│     干净空房 walk-in → P42
│     已在 Walk → P24
│     当天 ED 或在店续住 → 本剧
│
├─ 1. 重算 Remaining（主翻转）
│     Due Out 未 checkout → 形 E。不要卖两次
│     脏房未 HK → 不是 walk-in ready
│
├─ 2. 早离：需求死了吗？
│     Ahead / 仍紧 / 市场未冰 → 形 A。Hold。不开 dump
│     本已 leftover-弱 且市场弱 → 形 B。P05 围栏。禁一夜 −15% 当 BAR
│     未知 → 当形 A
│
├─ 3. 续住：在和谁抢房？
│     剩余紧 / 到店已覆盖该房 → 形 C。拒或 BAR。会 Walk → P24
│     次日冰 → 形 D。BAR 或已发布 stayover 价。不改 BAR 向下
│
└─ 4. 要把 BAR 写成 dump 价？
      是 → 拒绝。禁一夜 −15%

Naive（禁止）
      「空出 8 间所以 399」
      「老客人给个 399」
      Due Out 当空房先卖
      脏房当 walk-in
      把 ED dump 写成明天公开 BAR
      一夜 −15% 当永久 BAR
      收了早离费所以必须砸价再卖
      编华住 SOP / Marriott 中国费表
```

过夜 BAR 幅度仍走 `pricing/how-much-to-move.md`。本剧 **不** 给过夜 BAR 新档位。形 A/C Hold 779–799 首选 799 与全库 Hypothesis 带一致。

---

## 5. 过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date = 早离回库的夜，或续住要占的夜。
2. 重算 Occupied / Remaining（框架 §1）。扣 OOO。脏 ED 不是 walk-in ready。
3. Due Out 是否已 checkout？未解决 → 形 E，停售该房。
4. 分叉：早离 vs 续住。
5. 早离：Pace / 重算后剩余 / 市场。A Hold；B 才 P05。
6. 续住：该房是否已卖给到店。C 拒或 BAR；D 淡市按 BAR 接。
7. 会不会 Walk？会 → P24，不要用待客藏。
8. 早离费：按该单 rate-rule。无表不编。收费 ≠ dump。
9. 公开 BAR：高峰 Hold。禁止写成 dump 价。禁一夜 −15%。
10. 输出：Hold/拒/BAR/移交 + Trigger。不输出中国费表。
```

### 5.1 动作表

```text
Stay Date:            被问的那一晚
Flow:                 Early Departure | Stayover extension
Remaining (recomputed): Capacity − Occupied − OOO
Walk-in ready?:       HK 已转 | 未转 | Due Out 未 checkout（未转/未 checkout ≠ 可卖）
Demand:               Ahead/紧/未冰 | leftover-弱且市场弱 | 未知（未知当未冰）
Public BAR:           高峰 Hold 779–799 首选 799（Hypothesis）；不改成 dump 价
Early Departure:      形 A → Hold，不开 dump；HK 先
                      形 B → 移交 P05 围栏，不是新 BAR
Stayover:             形 C → 拒或只按公开 BAR；会 Walk → P24
                      形 D → 按 BAR 或已发布 stayover 价接；不改 BAR 向下
Due Out:              未 checkout 不得计入 Remaining
Fence:                ED dump ≠ 新 BAR ≠ P42 干净 walk-in ≠ P40 新订 Sat-only
Do-not-do:
  - 高峰因早离开 399 / 把 dump 写成 BAR
  - 高峰续住友情价 / 老客 399
  - 一夜 −15% 当永久 BAR
  - Due Out / 脏房当可售
  - 编早离费金额 / 佣金% / 华住 SOP / Walk $
  - 顾问代改离店日 / 代挂 OTA
Trigger: 见 §6
```

### 5.2 价与库存（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **别把早离回库当需求死亡去 dump；别把高峰续住当友情折扣**。

| 判定 | 库存/接否 | 过夜 BAR |
| --- | --- | --- |
| 形 A Ahead / 重算后仍紧 | **不开 dump**。HK 转房前不 walk-in | **Hold** 779–799 首选 799 |
| 形 B 弱市 leftover + ED 加厚 | 才 **P05 围栏** | 不改成新公开 BAR；禁一夜 −15% |
| 形 C 高峰续住 | **拒或 BAR**。会 Walk → P24 | 接则当前公开 BAR（首选 799） |
| 形 D 淡市续住 | 接；增量 | BAR 或已发布 stayover 价；**不**改 BAR 向下 |
| 形 E Due Out 未 checkout | **不卖该房** | 不动 BAR |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
399 只在 Simulation 当销售提案，不是行情，不是新 BAR。

### 5.3 Advisor-First

建议用户：重算后的 Remaining、Pace、HK 是否转房、Due Out 是否 checkout、拟续住房是否已卖给到店、该单是否有早离费规则。顾问不登录 PMS、不改离店日、不挂渠道特价、不排 HK、不收银。

---

## 6. 顾问十节输出（对用户）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事：

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；早离或续住件数；重算前/后 Remaining；Pace；BAR |
| 2 | Diagnosis | 形 A/B/C/D/E。库存礼物 ≠ 需求死亡；续住 = 与到店抢房 |
| 3 | Opportunity / Risk | 高峰 dump 毁 ADR；脏房双卖；续住制造 Walk |
| 4 | Recommended Action | Hold / 拒 / BAR / 移交 P05 或 P24。点或紧区间，不要「适当涨」 |
| 5 | Why | 框架 §1 + Mews 早离/续住 + OPERA Due Out ≠ 空 |
| 6 | Expected Impact | 方向：保住高峰 BAR / 避免 Walk。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | Pace+HK 齐则方向 Medium；点价永远 Hypothesis/Simulation |

出口必须能被前台复述成三句（§0）。禁止输出 PMS 点击步骤。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 早离后 Pickup 仍正 / 竞对公开满 | 守形 A。收回任何已拟 dump |
| 形 A 开出后发现其实 leftover-弱且市场冰 | 才评形 B → P05 围栏；仍不是新 BAR |
| HK 说转不完 / 已有人把 Due Out 当空卖掉 | 立刻停售该房。形 E |
| 续住申请且该房已有到店 | 形 C。拒或 BAR。会超 → P24 |
| 销售要把 BAR→399 | **拒绝。** 禁一夜 −15% |
| 用户补早离费规则 | 按规则收或不收；**不**因此 dump |
| 次日突然变热 | 形 D 已接的续住保留；**新**续住改判形 C |

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 把库存礼物写成需求死亡 | Pace 仍 Ahead 却开 399 | 高峰 ADR 被一夜训练成 dump |
| 脏房/Due Out 双卖 | walk-in 进未转房或未 checkout 房 | 操作失败 → 意外 Walk |
| 高峰续住友情价 | 老客 399 vs 到店 799 | 置换贡献；可能赶已确认到店 |
| 用待客藏 Walk | 「先答应续住再说」 | P24 来不及；口碑/会员成本 NV 但不为零 |
| 收费后必砸价 | 「早离费都收了不卖可惜」 | 费是合同规则，不是 dump 许可证 |

---

## 9. 盯什么

- 重算后 Remaining vs 到店未到清单  
- HK 转房完成数（walk-in ready）  
- Due Out 未 checkout 清单（EOD 前）  
- 公开 BAR 有没有被改成 dump 价  
- 续住申请 vs 已售到店冲突件数  

---

## 10. Confidence / 边界

Pace 齐 + 能判断 HK/Due Out：方向 **Medium**；点价永远 Hypothesis。  
缺 Pace 或 HK 未知：Low，只写 IF，默认高峰 Hold、续住拒或 BAR。  
Mews 早离/续住方向 = **B Vendor**（2026-08-24 打开）。OPERA Due Out / Check Out Early / 早离费配置 = **A Vendor PMS Fact**，不是中国默认 SOP。Marriott 早离费存在且随地点/房价变 = **B**；金额 **NV**。hmhub 可售房公式 = **C 教学**，Occupied 恒等式以框架 §1 为 Internal Theory。STR Occupancy = Rooms Sold / Rooms Available 是 **出租率**，本轮 **未**核到 STR/AHLA/HSMAI 官方页写 Occupied = Stayover + Arrivals。  
中国早离 SOP / 续住友情价表 / Walk 金额 / 佣金% / 华住 SOP / 399 行情：**NV**。  
仿真：`cases/sim-2026-early-depart-8-vs-sat-bar.md`。主枝 **Hold 779–799 首选 799**；拒绝 399 dump；拒绝 399 续住。

---

## 11. 证据（2026-08-24 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 超售对冲 cancellations、no-shows **and early departures**；意外 stay extension 若房已卖给到店可造成 accidental overbooking | B Vendor | **Known 方向** | Mews *Hotel overbooking: what hoteliers should know* https://www.mews.com/en/blog/hotel-overbooking-strategy （打开，页注 Published May 4, 2026；Last Verified 2026-08-24） |
| Check Out Early 仅当 departure date > business date；status → Due Out；可选 Early Departure Penalty OPERA Control | A Vendor PMS | **OPERA 能力 Fact，非中国 SOP** | Oracle OPERA Cloud 26.2 *Checking Out Reservations Early* https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_checking_out_guests_early.htm （2026-08-24 打开） |
| 早离罚金计算：FLAT / LAST NIGHT / REMAINING NIGHTS / TOTAL DEPOSIT / RATE TIER ADJUSTMENT | A Vendor 配置 | **配置菜单，不是推荐收费** | Oracle OPERA 5 *CALCULATION OF EARLY DEPARTURE AMOUNT* https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/calculation_of_early_departure_amount_param.htm （2026-08-24 打开） |
| Due Out 必须 checkout 或 extend，EOD 才继续 | A Vendor PMS | **Due Out ≠ vacant** | Oracle OPERA 5 *Departures Not Checked Out* https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/departures_not_checked_out.htm （2026-08-24 打开） |
| 早离费典型在比入住确认离店日更早走；政策和金额随地点/房价变 | B Vendor | **有费这一事实；金额 Unknown** | Marriott support *What Is an Early Departure Fee?* https://support.marriott.com/s/article/what-is-early-departure-fee （2026-08-24 打开） |
| Unexpected stay-over = 在原离店日延长 | B Vendor | **PMS 有此报告** | Infor HMS *Unexpected Stay-Over Report* https://docs.infor.com/hms/3.8/en-us/hmsolh/s_t1424428560144.html （2026-08-24 打开） |
| Occupied / Remaining / Walk 简化式 | Internal Theory | **本库已有，不另发明** | `overbooking/overbooking-framework.md` §1 |
| 可售房预测含 stayover / understay / overstay / OOO | C 教学 | **教学公式，非 STR 恒等式** | hmhub *Forecasting Room Availability* https://hmhub.in/5th-sem-front-office-management-notes/forecasting-room-availability/ （2026-08-24 打开） |
| STR Occupancy = Rooms Sold / Rooms Available | S 出租率 | **不是 Stayover+Arrivals 恒等式** | CoStar/STR Glossary 检索 2026-08-24；不把出租率公式改写成 FO 库存恒等式 |
| 华住/锦江早离 SOP；Marriott 中国费表；Walk $；佣金%；399 行情 | — | **NV。不编。** | 本轮未打开官方页 |

Failed / 未当成核页：

```
STR/AHLA/HSMAI 官方 Occupied = Stayover + Arrivals 恒等式  → 未找到 → 用框架 §1 Internal
Rothstein / Bitran 书目页                                   → 本轮不打开 → 不引
eCornell IMPACT Walk $300                                  → 不引当中国成本
华住/锦江 SOP                                              → 未找到 → NV
Marriott 中国早离费金额表                                   → 未找到 → NV
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-ED-01 | 中国店 OPERA 早离费默认是否开启及金额 | 问该单 rate-rule；不编 FLAT 数字 |
| NV-ED-02 | Marriott 中国各品牌早离费表 | 随地点/房价变；不编 |
| NV-ED-03 | 华住/锦江早离·续住 SOP | 不编 |
| NV-ED-04 | Walk 成本清单 | 仍 NV-OB-01；本剧不填金额；会赶客走 P24 |
| NV-ED-05 | 399 是否某市今夜行情 | 仅 Simulation |
| NV-HU-01 | House-use / Comp 是否记 Occupied | MEDIUM 记下本轮不写 |
| NV-GOV-01 | 政府协议续住义务 | MEDIUM 记下本轮不写 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 14:17 CST | drafted。BACKLOG P46。分叉 A 高峰早离 Hold / B 弱市才 P05 / C 高峰续住拒或 BAR / D 淡市按 BAR 接 / E Due Out ≠ 空。配套 `dont-dump-on-early-depart.md`。不编费表/佣金/华住 SOP。 |

---

## 14. 交叉（不改 P01–P45 正文；P05/P24/P40/P42 仅文末一行）

- **P05**：渠道 leftover dump。早离是 **库存回来**。先本剧重算；只有 leftover-弱且市场弱才移交。禁一夜 −15%。  
- **P24**：已在赶客。本剧形 C 尽量把续住挡在 Walk 名单之前；接了会赶客才移交。Walk $ 仍 NV。  
- **P40**：新订 Sat-only / MinLOS。在店加一晚不是新订周六。  
- **P42**：干净空房前台口价。脏 ED 未转房不是 desk inventory。  
- **P38**：收新单取消窗 ≠ 早离费。不要「先收窗再把 ED 房 dump」。  
- **P37**：OOO 不可售 ≠ Due Out ≠ 早离回库。  
- **T07 框架**：五流量同一套；本剧是同日 FO 过程。不改 §1 公式。  
- **T19**：高峰续住 399 对 799 的机会成本不是 0。无成本不说总比空着强。  
- **T20**：无声明底不发明 699；399 不是品牌底也不是新 BAR。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。399 vs 799 是 −50%，不是档 H。


## 15. 交叉（2026-08-26 02:17，不改 P01–P45 交叉表）

**从未到店**的散客 no-show ≠ 本剧早离（已在店）。当天没到、房回可售 → **P54** `transient-noshow.md`。高峰仍紧 Hold；真 leftover 才 P05。禁一夜 −15%。

## 16. 交叉（2026-08-27 14:17，不改 P01–P45 交叉表）

早离回库或可帮 HK 翻房，**不是**「做不完所以 dump」的许可证。人手吞吐顶走 **P63** `staff-capacity-constraint.md`（收口到达 + Hold）。本剧先重算 Remaining；脏房未转仍 ≠ walk-in。

> 交叉指针（2026-08-28 06:17，不改正文）：同日延退/早到过程走 **P67** `late-checkout-early-checkin`；本剧边界不变。

> 交叉指针（2026-08-28 08:17，不改正文）：同日延几小时 / 早到的**为什么** → **T-Late** `theory/late-checkout-turnover.md`；过程 **P67**。本剧仍是整晚早离/续住（OPERA Check Out Early = 改离店日）。
