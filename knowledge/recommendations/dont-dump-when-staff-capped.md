# Decision Card: Don't Dump When Staff-Capped（产能顶不是砍 BAR 的理由；Hold 779–799 首选 799；收口到达）

> 资产：Advisor Decision Card（P63）
> 路径：`recommendations/dont-dump-when-staff-capped.md`
> 对应：问题树 §70；用户原话「保洁不够别卖满」「人手不够先降价少卖点」「今天只能做 120 间，多了别接」「因为做不完房所以 dump 到 399 清掉」
> 剧本：`advisor-playbooks/staff-capacity-constraint.md`
> 配套：`metrics/sellable-vs-staff-cap.md` · P37 · P05 · P01 · P24 · P44 · P46 · P45 · T06
> 状态：active · 2026-08-27 14:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A 协会（AHLA Front Desk Feedback：保洁/前台短缺 — §48，US 不是中国人效）；A Vendor PMS（OPERA Dirty ≠ OO — §48）
> Last Verified：2026-08-27
> 仿真：`cases/sim-2026-hk-cap-sat.md`
> Advisor-First：建议先拆需求 vs 人手产能；产能顶住则收口可售/停售超额到达、Hold 公开 BAR；问本店能翻几间/最晚进房/班次（NV）；不操作 PMS/OTA/前台/保洁。
> 禁止：BAR→399「反正做不完」；为了少卖先砍公开价；一夜 −15%；编华住人效 / 间/人常模 / 分钟/间 / wage / Walk $ / 699；开 P64。

## 三句（原样）

1. 先问今晚卡的是 **需求** 还是 **保洁/前台人手产能**（能翻几间、最晚进房几点、已排几班）。产能顶不是弱需求，也不是该砍 BAR 的理由。本店人效/班次/华住做房 SOP = **NV**，不编。
2. 产能顶住时：先 **收口可售/停售超额到达**（或提高门槛），Hold BAR 779–799 首选 799（Hypothesis / Simulation）。不要为了「少接一点」去 dump 到 399——便宜客一样要做房，往往更挤翻房。
3. 真需求弱且产能也松才走 P05。维修关房走 P37；超售赶客走 P24；钟点挤翻房窗走 P44。不要把 BAR dump 到 399「反正做不完」。

```yaml
decision: Do not dump public BAR when housekeeping/FO staff throughput caps sellable arrivals; on a staff ceiling Hold 779–799 prefer 799; stop-sell or cap arrivals near staff-turnable capacity
scenario: Rooms exist in inventory but HK cannot turn enough arrivals (or FO staffing caps safe check-ins); GM/FO wants BAR → 399 "少卖点别做不完" or a cut "to sell less"
required_inputs:
  - Stay_Date
  - demand_vs_staff_capacity（能翻几间 / 最晚进房 / 已排几班；缺则 NV）
  - physical_remaining_vs_turnable_arrivals
  - remaining_and_pace
  - current_public_BAR
  - OOO_vs_dirty_split（维修走 P37）
signals_for:
  - HK_or_FO_says_cannot_turn_or_check_in_more_than_N
  - physical_remaining_gt_turnable_arrivals
  - proposal_to_cut_BAR_to_sell_less_or_BAR_to_399
  - Pace_Ahead_or_still_tight
signals_against:
  - rooms_physically_offline_OOO (then P37)
  - true_weak_remaining_Behind_AND_staff_slack (then bounded P05 — reason is Pace not "做不完")
  - day_use_stealing_turnaround_window (then P44)
  - early_departure_return (then P46)
recommended_action: 先拆需求 vs 产能。产能顶 → 收口可售/停售超额到达（或提高门槛）。Hold 779–799 首选 799。Never 为了少卖先砍公开价。Never BAR→399。Never −15%。问本店人效/班次（NV）。22/12/399/799 只 Simulation。399 = 被拒绝的 dump。
risk: 把供给天花板当弱需求；便宜到达更挤翻房；Dirty 混成 OOO；卖过产能触发 Walk
follow_up: 今晚还能翻几间；Dirty 积压；公开 BAR 是否仍 Hold；到达是否被收口
confidence: 有日期+产能上限+Pace 则方向 Medium；缺班次只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「保洁不够别卖满」「人手不够先降价少卖点」「今天只能做 N 间，多了别接」「BAR→399 反正做不完」。

主动词：**Hold 公开 BAR** / **收口可售或停售超额到达** / **拒绝 399** / **拒绝「降价少卖」** / **问班次 NV**。  
不要用：只听到「做不完」却没拆维修（P37）或真弱（P05）。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用砍公开 BAR 去消化人手产能顶**。  
维修离线走 P37。真弱走 P05。卖过产能走 P24。

---

## 2. 硬门（先不砍、先收口）

命中任一 → **不要砍公开 BAR，也不要把 BAR 改成 399**：

1. 人手/翻房上限 < 账面 Remaining + Pace Ahead / 仍紧 → **Hold 779–799 首选 799**；收口到达  
2. 有人提议「降价少卖点」→ **拒绝**（便宜客一样耗翻房）  
3. 有人提议 BAR→399「反正做不完」→ **拒绝**  
4. 一夜 −15% → **拒绝**  
5. Dirty/未检被当成维修离线 → 先拆；维修走 P37，人手走本卡

真 Behind + remaining 厚 **且** 产能也松 → 才评 **P05** 围栏；理由写 Pace，不写「做不完」。

---

## 3. 动作表

```text
Stay Date:        用户给
Demand vs cap:    产能顶 | 真弱+产能松 | 未知（未知且自报做不完 → 勿 dump）
Public BAR:       Hold 779–799 首选 799（Hypothesis）
Inventory:        收口可售 / 停售超额到达
Do-not-do:
  - BAR → 399「反正做不完」
  - 降价「少卖点」
  - 一夜 −15%
  - 编华住人效 / 间/人 / 分钟/间 / wage / Walk $
  - 顾问代排班 / 代关库存
Staffing:         能翻几间 / 最晚进房 / 班次？问本店（NV）
Misroute:         维修 P37；真弱 P05；Walk P24；钟点 P44；早离 P46
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 14:17 CST | 首版。P63。产能顶 Hold；收口到达；拒 399 / 降价少卖；人效 NV。 |

---

## 5. 交叉（不改 §1–4）

P37 物理 OOO ≠ Dirty/人手吞吐。P05 leftover ≠ 「做不完」。P01/P03 Ahead 时更应收口不是 dump。P24 卖过产能。P44 钟点挤窗。P46 早离回库。P45 早会一个动作 = Hold+问翻几间+收口，不是「降到 399」。T06 可售分母之上再拆可交。

---

## 6. 交叉（2026-08-27 16:17，不改 §1–5）

「为什么」尺 → **T-Staff** `../theory/staff-capacity-vs-demand.md`。三句 / 399-rejected / 799-Hypothesis **原样**。过程仍 P63。

> 交叉（2026-08-28 06:17）：延退/早到 → **P67**；本卡正文不改。
