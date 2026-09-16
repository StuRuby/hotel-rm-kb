# Reinstate vs Current Rate｜历史取消价不是权利

> 资产：T-Reinstate / T04·T09 下一层（取消后又要回来，旧价被允许改什么）· P62 新单侧孪生
> 路径：`theory/reinstate-vs-current-rate.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-28
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Reinstating Reservations：Reinstate 扣库存；关房价码/超售须权限 — **§52 指针**；OPERA Cloud 25.4 Reservation Sales：原房型/房价不可用须选**新**组合 — **§52 指针**；OPERA Cloud 25.4 Controls：ALWAYS_ALLOW_REINSTATE = 营业日/到店日闸，不是认旧价；FIXED RATES 是**另一套**锁额功能；AUTO RATE REFRESH 可按规则刷当前价 — **§53 新开**）；A Vendor PMS（Amadeus Hospitality PMS Undo cancellation：撤销取消把状态拉回 reserved — **§53 新开**，**不写必须认旧价**）；A Vendor PMS（OPERA 5.6 Reinstate Cancelled Reservation：状态回到原 reservation status — **§53**，**状态 ≠ 定价权**）；B / Hypothesis（Ahead 拒过期低价；给当前 BAR；系统回写 ≠ 必须认；弱夜让步标 exception；779–799 首选 799）
> 配套：`advisor-playbooks/cancel-reinstate-old-rate.md`（P65 过程）· `recommendations/dont-reinstate-below-current-bar.md`（主卡复用，不重写）· `metrics/reinstate-rate-gap.md`（轻指标；**无默认 %**，公式不重写）· `cases/sim-2026-reinstate-sat.md`（Simulation）
> 交叉：P62 `same-day-cancel-rebook.md`（新单套利 ≠ 同单恢复）· P14 Soft · P38 新生产收窗 · P54 no-show · P46 早离 · P01 Ahead · P05 leftover · P36/P60/P64（399 来源）· T-Share / T-Parity / T-Guar / T-Upsell / T-Staff（假尺子一族）
> 问题树：§72「取消后按原价恢复不是必须」（过程路由已够；本卡给「为什么历史价不是权利、回写不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA / 前台，不自动改价，不代点 Reinstate，不代改过账价。**
> 状态：**理论 drafted**（2026-08-28 00:17 CST）。**不写 P66，不写新剧本。** 禁止：编华住 Reinstate SOP / 是否带原价字段 / 罚金% / 佣金% / 699；一夜 −15%；BAR→399「别纠缠」；Ahead 自动认旧 599；把 14/599/399/799 当市场 Fact；把 ALWAYS_ALLOW_REINSTATE 写成必须认旧价；把 FIXED RATES 写成中国 SOP；重写 `reinstate-rate-gap.md` 公式；重写 P01–P65 正文（P65 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**历史取消价是过期快照，不是客人权利；Reinstate 是状态/库存动作，不是定价权。**
系统把旧 599 写回来，只证明「有回写按钮」，不证明「必须按旧价卖今晚的房」。高峰 / Pace Ahead：要回来按**当前** BAR/可售价。不要因为「怕他去订 399」就把 Brand.com dump 到 399，也不要自动认旧 599。本店 Reinstate 是否带原价 / 华住字段 = **全部 NV**。

```
Naive（禁止）     取消又后悔 → 按原价恢复；系统写回了所以必须认；
                  不恢复他就订 399 → BAR→399；旧价是客人权利
本卡              先拆同单 Reinstate vs 新单（P62）。历史价 ≠ 当前 BAR。
                  回写 ≠ 定价权。过程走 P65。
```

完成标准：用户说「按原价恢复吧」「系统把旧 599 写回来了」「BAR 799 还认不认」「怕他订 399」→ Situation 写成**同单 vs 新单 + 旧价 vs 当前 BAR + Pace**；Diagnosis 写成历史价不是权利、回写不是按钮；What To Watch 写成 below-BAR 恢复件数、公开 BAR 是否 Hold、政策是否仍 NV。**不自动认旧、不 dump 399、不写 P66。**

顾问必须能直接说的三句（与 P65 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是 **同一笔订单恢复（Reinstate）** 还是 **取消后再订一笔新单**。后者走 P62。恢复旧价等于用过期价格占今晚库存。本店 Reinstate 是否带原价 / 华住字段 = **NV**，不编。
2. 高峰 / Pace Ahead：默认 **不按旧低价恢复**；要回来就按 **当前** BAR/可售价（Hold 779–799 首选 799，Hypothesis / Simulation）。不要因为「怕他去订 399」就把 BAR dump 到 399 或自动认旧 599。
3. 真弱夜才更有余地谈是否给旧价（仍是让步，不是权利）。已发生 no-show 走 P54；未来收窗走 P38。不要把 BAR dump 到 399「好让他别纠缠恢复」。
```

独立默认（本库 Hypothesis）：**历史取消价回答不了「今晚该卖多少」。** 它回答「这笔记录曾经报过什么」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止 Ahead 自动认旧 599。**

---

## 1. 三把价：历史快照 / 当前可售 / 回写过账

顾问问题不是「系统里还能不能点 Reinstate」，是：**取消之后，这笔记录上的旧价还被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Historical cancelled rate** | 取消前过账/报价的快照 | 诊断：价差有多大；弱夜是否标 exception | 当成客人权利；Ahead 自动认 |
| **Current BAR / available rate** | 恢复时刻公开灵活可售 | Ahead 给这一档；Hold 公开栏 | 为安抚 dump 到 399；跟旧 599 当新 BAR |
| **Posted after reinstate** | FO/系统点恢复后实际写回的价 | 若 < 当前 BAR → 纠正到当前，或当新单按当前价 | 把回写当政策；顾问代点 |

```
Old_rate                 = 599     # Simulation：取消前快照
Current_BAR              = 799     # Simulation：恢复时刻公开灵活
Posted_after_reinstate   = 599 或 799   # 系统可能写回旧价；顾问建议按当前
Gap                      = Current_BAR − Posted   # 尺在 metric，不重写
```

**599 / 799 只允许出现在 Simulation**，不是本店 Fact，不是华住 Reinstate 默认。

混淆三把价会同时拧坏 **ADR** 与 **稀缺夜机会成本**：把过期快照当成今晚必须成交的价，或把「系统写回来了」读成「店规就是认旧价」。

---

## 2. Reinstate 是状态动作，不是定价权

厂商把「恢复一笔取消单」做成**库存/状态**过程。没有一家被打开的官方页把它写成「客人有权按取消前的价回来」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Reinstating Reservations*（§52） | 取消可 Reinstate（到店日 ≥ 营业日）；**扣库存**；关房价码/超售**须权限**；奖赏类单不可 Reinstate、须重订 | 有恢复按钮。关着的房价码**不是**自动打开。扣库存 = 用今晚的房，不是免费人情 |
| OPERA Cloud 25.4 Reservation Sales（§52） | 原房型/**房价**不可用 → 打开 Availability，须选**新**房型与房价组合 | 「回写旧价」不是厂商强制。原价不可用时，厂商路径是**换新价** |
| OPERA Cloud 25.4 Controls（§53 **新开**） | `ALWAYS_ALLOW_REINSTATE`：开 = 住店日 ≥ 营业日就可恢复；关 = 过去到店日的取消/No-show **不能**恢复 | 这是**日期/状态闸**，不是「必须认旧价」开关 |
| 同页 FIXED RATES / ALWAYS USE FIXED RATES（§53） | 另有功能可手工锁额、或把新建/修改单存成 fixed rate | **锁额是另一套功能**。Reinstate ≠ Fixed Rate。不要把取消快照误读成已锁价合同 |
| 同页 AUTOMATICALLY REFRESH RATES ON RESERVATION（§53） | 可按所选规则自动刷预订上的价 | 厂商承认「当前价可覆盖记录上的价」。**不是**华住 SOP，也**不是**本店已开此开关的 Fact |
| Amadeus Hospitality PMS *Undo cancellation*（§53 **新开**） | Undo cancel 把 cancel status 拉回 reserved | 第二家 PMS：恢复 = **状态**动作。页上**没有**「必须按原价」 |
| OPERA 5.6 *Reinstate Cancelled Reservation*（§53） | 状态从 CANCELLED 回到 original reservation status | **状态**回到原状态。不写成「原价是权利」 |

```
画面：FO 点了 Reinstate，旧 599 回来了
Naive：系统都写了 → 必须认
本卡：回写是操作结果。定价权在政策 / 当前可售 / Pace，不在按钮。
```

`ALWAYS_ALLOW_REINSTATE` **不是**「Always honor old rate」。中文不要把 Always Allow 听成 Always 认旧价。

华住 / 本店 Reinstate 是否带原价 = **NV，不编。** UI 字段是 OPERA / Amadeus 的，不是本店报表名。

---

## 3. 同单恢复 ≠ 新单套利（P62 是新单侧孪生）

两边都在「取消」附近，对象不同。塌成「反正都是取消」会开错杠杆。

| | **P65 / 本卡（同单 Reinstate）** | **P62（新单 cancel-rebook）** |
| --- | --- | --- |
| 对象 | 同一确认号/同一记录从 Cancelled 拉回 | 取消后再开**新**确认号，通常更低价 |
| 价从哪来 | 历史快照 vs 当前 BAR | 新生产价 vs 当前 BAR |
| Ahead 默认 | **拒旧低价**；给当前 779–799 首选 799 | **Hold** 公开 BAR；不跟重订价 |
| 禁止 | 自动认旧 599；BAR→399 安抚 | 预防性砍 BAR「别让他们取消」；跟 599 当新 BAR |
| 弱夜 | 可谈 exception，标让步，不当新 BAR | 真 leftover 才 P05，理由写 Pace |

顾问第一闸永远是：**同一笔还是新一笔？** 新单更低价 → P62。同单要旧价 / 系统写回旧价 → 本卡 / P65。不要在同一句话里把「Reinstate 回 599」和「取消再订 599」揉成一种「取消价」。

---

## 4. 假尺子一族：「旧价写回来了所以要认」

本卡不是新怪现象，是同一族的下一张：**屏幕上的数被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Guar** | 放房前混合 OTB | 放房后真 remaining |
| **T-Upsell** | 「套房还空着」 | 付费差价 / 分型 Pace |
| **T-Staff** | 「做不完 / 只能做 N 间」 | 可交到达件数 + 门槛 |
| **本卡 T-Reinstate** | 「旧 599 / 系统已写回 / 不恢复他就订 399」 | **当前可售 + Pace**；不是认旧价令，也不是 dump 399 令 |

「旧价写回来了所以要认」= 把 **PMS 回写结果** 当成 **定价政策**。尺子在**历史记录**上，动作却打在**今晚公开价 / 稀缺库存**上 → 同类误读。

「不恢复他就订 399」是另一把假尺子：把**威胁去买围栏/错价/嵌套低档**当成 Brand.com 必须对齐的市价。399 的来源先走 P36 / P60 / P64，不先砍公开 BAR。

---

## 5. Diagnose → Advise：历史价被允许改什么

用户原话：「按原价恢复吧」「系统 Reinstate 把旧 599 写回来了」「BAR 已经 799 还认不认」「不恢复他就去订 399」。

```
Situation
  钉三件事：①同单 Reinstate vs 新单；②旧价 / 已回写价 vs 当前公开 BAR；③Pace / Remaining。
  缺 Reinstate 政策 → 问，不编华住字段。

Diagnosis
  历史价已经发生之后，它被允许改的是：
    (1) 故事类型（同单要旧价 vs 系统回写 vs 新单套利 vs Soft vs 没到）
    (2) 问句（§6）
    (3) 默认路径：Ahead → 拒旧低价 + 给当前 BAR + Hold 公开栏
    (4) 是否先拆 P62（新单）或 P54（没到）——对象动作，不是认旧价
  它不被允许改的是：自动认旧 599；BAR→399；一夜 −15%；发明华住 Reinstate SOP。

What To Watch
  below-BAR 恢复件数与 gap；公开 BAR 是否仍 Hold；政策是否仍 NV
  不是「点了 Reinstate 就算完成」
```

过程六形（A Ahead 旧价 / B 系统回写 / C 威胁 399 / D 弱夜 exception / E→P62 / F→P14·P38·P54）走 **P65**，本卡**不重复 P65 正文**。

Ahead 或仍紧 → **拒旧价 + Hold**；真 Behind 且 remaining 厚 → 才可谈 **exception**，理由写成让步，不写权利。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P66。**

---

## 6. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | **本店 Reinstate 是否必须带原价？** 有没有书面政策？ | 会把系统回写写成店规 | **NV** |
| 2 | 这一笔是 **同一确认号恢复**，还是取消后另开新单？ | 误入 P62 或本卡 | **NV**（用户能答就钉） |
| 3 | 拟恢复价 / 已回写价 vs **当前公开 BAR** 各是多少？ | Gap 看不见；易把 599 当必须 | **NV** |
| 4 | 本店是否开了 **Fixed Rate** / **Auto Rate Refresh**？（OPERA 例；他店等价功能） | 会把锁额功能与 Reinstate 混谈 | **NV** |
| 5 | 399 从哪来——围栏、错映射、还是嵌套低档？ | 用公开 BAR 去安抚假 399 | **NV** → P36/P60/P64 |

补充可问（同样 NV）：罚金是否过账；华住字段名；关房价码谁有权 override。**罚金%、佣金%、699、华住 Reinstate SOP：不编，问。**

---

## 7. 常见误读

| 误读 | 实际 |
| --- | --- |
| 取消又后悔 → 按原价恢复是权利 | 历史快照不是权利。Ahead 给当前价 |
| 系统写回旧价 = 必须认 | 回写是操作结果；定价权在政策/当前可售 |
| ALWAYS_ALLOW_REINSTATE = 永远认旧价 | 日期/状态闸。Always Allow ≠ Always honor old rate |
| Reinstate = Fixed Rate 锁额 | 厂商是两套功能。锁额 NV，不编已开 |
| 不恢复他就订 399 → 该 dump Brand.com | 399 可能围栏/错价/低档。Hold 公开栏 |
| 同单恢复 = 取消再订更低价 | 新单走 **P62** |
| Soft 潮所以人人有权回旧价 | Soft 诊断走 **P14**；恢复仍按 Pace |
| 没到也可以按旧价「恢复」 | 没到走 **P54** |
| 没有行业 % 就不能管 | 无默认 %。先数 below-BAR 件数与 gap |
| 编一套华住 Reinstate SOP 就能 Advise | **禁止。** 政策 NV |

---

## 8. Simulation（诊断例，不是新店 Fact）

复用 P65 `cases/sim-2026-reinstate-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 599 / 399 / 799
# （599 = Ahead 上被拒的旧价；399 = 被拒绝的 dump；799 仅 Hypothesis/Simulation）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
取消前旧价                   = 599
FO / 客人拟议                = Reinstate 回 599；或不恢复他就订 OTA 399
```

读法（与 P65 同句）：599 是过期快照，不是权利。系统若写回 599 = 回写，不是政策。Advise：拒 599；给当前 **779–799 首选 799**；Hold 公开 BAR；拒 dump **399**；政策 **NV**。
**180 / 14 / 599 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住 Reinstate 默认，不是推荐 dump。**599 是 Ahead 上被拒的旧价。399 是被拒绝的 dump，不是推荐 BAR。**

---

## 9. 证据（2026-08-28 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 取消可 Reinstate；扣库存；关房价码/超售须权限；奖赏类须重订 | **A Vendor PMS** | **Known 机制。** ≠ 必须认旧价 | OPERA Cloud 26.2 Reinstating Reservations（**§52 指针**） |
| 原房型/房价不可用须选新组合 | **A Vendor PMS** | **Known 机制。** 回写旧价不是强制 | OPERA Cloud 25.4 Reservation Sales（**§52 指针**） |
| ALWAYS_ALLOW_REINSTATE = 住店日/营业日闸；关则过去到店日不可恢复 | **A Vendor PMS** | **Known 机制。** ≠ 认旧价开关 | OPERA Cloud 25.4 Controls — Reservations（**§53 新开**） |
| FIXED RATES / ALWAYS USE FIXED RATES = 另套锁额功能 | **A Vendor PMS** | **Known 机制存在。** 本店是否开 = **NV** | 同页（**§53**） |
| AUTO RATE REFRESH = 可按规则刷预订价 | **A Vendor PMS** | **Known 机制存在。** 本店是否开 = **NV** | 同页（**§53**） |
| Undo cancel 把状态拉回 reserved | **A Vendor PMS** | **Known 机制。** 页上无「必须原价」 | Amadeus Hospitality PMS Undo cancellation（**§53 新开**） |
| 状态从 CANCELLED 回 original reservation status | **A Vendor PMS** | **Known 状态行为。** ≠ 定价权 | OPERA 5.6 Reinstate Cancelled Reservation（**§53**） |
| Ahead 拒旧低价 + 给当前 BAR；回写 ≠ 必须认；弱夜 exception | **B / Hypothesis** | 本库 P65 + Pace 闸 | — |
| 本店 Reinstate 是否带原价 / 华住字段 / Fixed Rate 是否开 / 罚金% | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 25.4 Controls — Reservations（ALWAYS_ALLOW_REINSTATE + FIXED RATES / AUTO RATE REFRESH 同页）+ Amadeus PMS Undo cancellation 1 页 + OPERA 5.6 Reinstate Cancelled Reservation 1 页。§52 两页复用，不重锤。华住 SOP **未开、不编**。ALWAYS_ALLOW 26.1 页 timeout，改开 25.4 同文。

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-REIN-01 | 本店 Reinstate 是否必须带原价；书面政策 | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-REIN-02 | 本店是否开 Fixed Rate / Auto Rate Refresh（或他店等价） | **NV。** 两套功能不要混 |
| NV-REIN-03 | 399 来源（围栏 / 错映射 / 嵌套低档） | **NV。** 先 Hold Brand.com |
| NV-REIN-04 | 罚金是否过账；关房价码谁可 override | **NV。** 不挡「Ahead 拒旧低价」 |
| NV-P65-01… | P65 已挂（华住字段 / 罚金% / 佣金%） | 仍 NV |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 00:17 CST | 首版。T-Reinstate = 历史取消价不是权利。三把价；Reinstate=状态动作；P62 孪生；假尺子一族；不重复 P65 六形。**不写 P66。** 14/599/399/799 Simulation only。599 = Ahead 上被拒的旧价。399 = 被拒绝的 dump。 |

---

## 12. 交叉（不改 P01–P65 正文；P65 仅头一行，邻卡仅文末一行）

- **P65** `advisor-playbooks/cancel-reinstate-old-rate.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 599-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-reinstate-below-current-bar.md`：复用，不重写。
- **轻指标** `metrics/reinstate-rate-gap.md`：below-BAR 件数与 gap；无默认 %。本卡不重写公式。
- **P62**：新单套利。本卡 / P65 = 同单恢复。
- **P14**：Soft 潮诊断 ≠ 恢复权。
- **P38**：新生产收窗 ≠ 已取消单 Reinstate。
- **P54**：没到 ≠ 取消后恢复。
- **P46**：早离；Controls 另有 early-departure Reinstate 日期闸，不是本卡房价权。
- **P01 / P05**：Ahead 拒旧价；真弱才 exception / leftover。
- **P36 / P60 / P64**：399 来源。
- **T-Share / T-Parity / T-Guar / T-Upsell / T-Staff**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 Ahead 自动认旧 599。禁止 P66。禁止编华住 Reinstate SOP、罚金%、佣金%、699。**
