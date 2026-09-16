# Playbook P63｜保洁/人手产能卡住可售（Staff Capacity ≠ 弱需求）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/staff-capacity-constraint.md`  
> BACKLOG：P63 保洁/人手产能卡住可售 · HIGH · 先诊断枝（本轮同开）· slug **staff-capacity-constraint**  
> 状态：**drafted**（2026-08-27 14:17 CST）  
> 配套卡：`recommendations/dont-dump-when-staff-capped.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/sellable-vs-staff-cap.md`（物理 remaining vs HK-turnable arrivals；**无默认间/人**；本店人效/班次 NV）  
> 理论：**T-Staff** `theory/staff-capacity-vs-demand.md`（人手产能顶 ≠ 弱需求；本剧过程）· T06 `theory/capacity-ooo.md`（物理房 ≠ 可售）· P37 `ooo-capacity.md`（维修离线）· P05 leftover · P01/P03 高需求 · P24 Walk · P44 钟点挤窗 · P46 早离  
> 交叉：P37 物理 OOO ≠ 人手吞吐 · P05 真弱 leftover · P01/P03 Ahead 时更应收口不是 dump · P24 卖过产能 = Walk 风险 · P44 钟点挤翻房窗 · P46 早离或可帮 HK  
> 问题树：§70 「做不完房不是降价理由」  
> 仿真：`cases/sim-2026-hk-cap-sat.md`（**Simulation**）  
> 证据等级：A 协会（AHLA Front Desk Feedback 2025-02-20：保洁/前台短缺是真实供给约束 — **US 调查，不是中国人效**）；A Vendor PMS（OPERA Cloud 26.2 Housekeeping Board：Dirty/Clean/Inspected/Pickup ≠ OO/OS — §48）；B / Hypothesis（产能顶用停售/收口，不砍 BAR；779–799 首选 799）  
> Last Verified：2026-08-27  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议先拆需求 vs 人手产能；产能顶住则收口可售/停售超额到达、Hold BAR；问本店能翻几间/最晚进房/已排几班（**NV**）。**不操作** PMS / RMS / OTA / 前台 / 保洁排班，不自动定价，不代关库存、不代改房态。  
> 禁止：发明华住做房间数常模、分钟/间中国 Fact、班次 SOP、wage、Walk $、699；一夜 −15%；BAR→399「反正做不完」；默认间/人；把 22/12/399/799/180 当市场 Fact；开 P64。  
> 12:17「不要规定 P63」= recap 槽不得指定；本 scout 核实人手产能缺口后开。

---

## 0. 一句话

**产能顶不是弱需求，也不是该砍 BAR 的理由。** 先问今晚卡的是需求还是保洁/前台人手（能翻几间、最晚进房几点、已排几班）。产能顶住时：先收口可售或停售超额到达（或提高门槛），**Hold 779–799 首选 799**（Hypothesis / Simulation）。不要为了「少接一点」去 dump 到 399——便宜客一样要做房，往往更挤翻房。真弱且产能也松才 **P05**。维修走 **P37**。超售赶客走 **P24**。钟点挤窗走 **P44**。早离回库走 **P46**。本店人效/班次/华住做房 SOP = **NV，不编**。

完成定义：一张「先拆需求 vs 人手产能 → 产能顶则收口/停售超额到达 + Hold BAR → 不 dump → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 做不完 → dump** | 「做不完所以 BAR→399 清掉」 | 供给/吞吐顶当弱需求 | **停售/收口**，不降价 |
| **B 降价少卖** | 「人手不够先降价少卖点」 | 便宜量仍耗翻房；Ahead 更糟 | Hold BAR；收口**件数**，不 dump |
| **C 物理房在但不可交** | Remaining 22 都能今晚交 | 脏房/未检/未排班 ≠ 可交 | 拆「可交房」vs「账面房」；字段 **NV** |
| **D 与 OOO 混谈** | 「维修 + 保洁都关着」 | 离线 vs 吞吐 | 维修走 **P37**；人手走本剧 |
| **E 超售盖过产能** | 卖过今晚能翻/能接的到达 | Walk / 晚进房 | **P24** 风险；Walk $ **NV** |
| **F 误入** | 真弱 / 钟点挤窗 / 早离 | 别的剧本 | **P05** / **P44** / **P46** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问今晚卡的是 **需求** 还是 **保洁/前台人手产能**（能翻几间、最晚进房几点、已排几班）。产能顶不是弱需求，也不是该砍 BAR 的理由。本店人效/班次/华住做房 SOP = **NV**，不编。
2. 产能顶住时：先 **收口可售/停售超额到达**（或提高门槛），Hold BAR 779–799 首选 799（Hypothesis / Simulation）。不要为了「少接一点」去 dump 到 399——便宜客一样要做房，往往更挤翻房。
3. 真需求弱且产能也松才走 P05。维修关房走 P37；超售赶客走 P24；钟点挤翻房窗走 P44。不要把 BAR dump 到 399「反正做不完」。
```

尺（Hypothesis；22/12/399/799 只 Simulation）：公开灵活 **Hold 779–799 首选 799**。禁止一夜 −15%。禁止 BAR→399。无默认间/人。本店人效/班次/最晚进房 = **NV**。

Vendor / 协会指针（不写成中国 SOP）：

- AHLA Front Desk Feedback（A 协会，§48；282 店，2024-12-06～2025-01-03，发布 2025-02-20）：65% 报人手短缺；最常被点名是 **housekeeping 38%**、front desk 26%。证明保洁/前台人手可以成为真实运营约束。**US 调查。不是中国人效、不是间/人常模、不是 AHLA 85–95。**
- OPERA Cloud 26.2 *Using the Housekeeping Board*（A Vendor PMS，§48）：**Dirty / Clean / Inspected / Pickup** = 清洁状态（房仍在库存）；**Out of Order** = 移出可售、影响 OCC/ADR/RevPAR 计算；**Out of Service** = 不可住但仍可计入库存。Dirty ≠ OOO。Dirty/未检不能当可交到达。UI 字段是 OPERA 的，**不是**华住/本店报表名。

本店人效 / 班次 / 华住做房 SOP / 分钟/间 / wage / Walk $ = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①今晚卡的是需求还是人手产能；②账面 Remaining vs 今晚还能翻/还能安全接的到达；③用户是要 dump「少卖点」还是收口件数。

先问（缺则标 NV，不停）：

- Stay Date、DTA、DOW；Pace（Ahead / On / Behind）；公开 BAR
- 物理 Remaining / OOO（维修走 **P37**，先拆开）
- 今晚 HK 还能翻几间到达（或已排几班、最晚能进房几点）——缺则 **NV**，不编间/人
- 前台/接待班次是否也卡到达峰值
- 用户原话：「保洁不够别卖满」「人手不够先降价少卖点」「今天只能做 N 间，多了别接」「做不完所以 dump 到 399」

本店人效 / 班次 / 华住做房 SOP / 分钟/间 / wage = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「需求卡还是产能卡、Ahead 还是弱」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 房是否物理在、只是 Dirty/未检/未排班？ | 是 → 本剧形 C；维修离线 → **P37** |
| D2 | HK/FO 自报今晚还能翻/还能接的到达 < 账面 Remaining？ | 是 → 产能顶；不是 leftover |
| D3 | Pace Ahead / 仍紧？ | Ahead → Hold + 收口；勿 dump（形 A/B） |
| D4 | 拟议是否 BAR→399 / −15%「少卖点」 | 形 A/B；拒绝。便宜客一样耗翻房 |
| D5 | 已售到达是否已经盖过今晚翻房上限？ | 形 E；**P24** 风险；Walk $ NV |
| D6 | 钟点是否占翻房窗？ | **P44** |
| D7 | 早离是否刚回库、HK 还来得及？ | **P46**（或可帮本剧吞吐，不是 dump 令） |
| D8 | 真 Behind + remaining 厚 + 产能也松？ | 才评 **P05**；理由写 Pace，不写「做不完」 |

## 3. Decision Tree（过程）

```text
FO/GM：「保洁不够别卖满 / 人手不够先降价少卖点 / 只能做 N 间 / BAR→399 反正做不完」
  → 先问：卡的是需求还是人手产能？（D1/D2）
       维修离线为主 → P37
       人手/翻房顶住（能翻 < 账面 remaining，或最晚进房盖不住到达）
            → Pace Ahead / 仍紧？
                 是 → 形 A+B：Hold 779–799 首选 799；收口可售或停售超额到达（或提高门槛）
                 否（真 Behind + 产能也松）→ 才评 P05；理由写需求，不写「做不完」；仍禁 399 与一夜 −15%
            → 「降价少卖」→ 拒绝。便宜量仍耗翻房
            → 已卖过翻房上限 → P24 风险；Walk $ NV
       钟点挤窗 → P44；早离回库 → P46
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 BAR
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     收口可售 / 停售超额到达，使新到达贴近「今晚还能翻/还能安全接」的上限（用户数；缺则 NV，不编间/人）
Restriction Action:   可提高门槛（CTA / 最短提前 / 只接已确认）——不是砍 BAR。今夜不因产能顶新开 dump 围栏
Channel Action:       不把公开 BAR 对齐到 399；不「少卖点所以降」
Staffing flag:        能翻几间 / 最晚进房 / 已排几班 = **NV**（问本店；顾问不代排班）
Staging:              第一刀 = 拆需求 vs 产能 + Ahead Hold BAR + 收口件数。24h 看 Dirty 积压、到达、公开 BAR
Do-not-do:
  - BAR → 399「反正做不完」
  - 为了「少接一点」先砍公开 BAR（便宜客一样要做房）
  - 一夜 −15%
  - 编华住人效 / 间/人常模 / 分钟/间 / wage / Walk $ / 699
  - 把 Dirty 标成 OOO（那是 P37）
  - 顾问代关库存 / 代改房态 / 代排保洁
  - 开 P64
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向 + 收口件数**，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「Hold BAR + 问今晚还能翻几间 + 收口超额到达」**，不要 **「降到 399 少卖点」**。

顾问对 GM / 前台三句回话：

> 「先问今晚卡的是需求还是保洁/前台人手。产能顶不是弱需求。」
> 「顶住就收口到达、Hold 公开价。不要为了少接一点去 dump——便宜客一样要做房。」
> 「真弱且产能也松才 leftover。维修走维修。不要砸到 399。」

## 5. Why

1. **用了哪些数据（Fact）：** AHLA 2025 调查：保洁/前台短缺是被点名最多的运营约束（A 协会，US，§48）——证明人手可以卡住供给，不是定价借口。OPERA：Dirty 房仍在库存、OO 才移出可售（A Vendor PMS，§48）——可交 ≠ 账面。店内：Pace、Remaining、今晚能翻几间 = 用户。本店人效 = 用户或 NV。
2. **逻辑链：**
```text
人手/翻房吞吐 < 账面 remaining = 供给天花板（产能顶）
≠ 需求变弱（不是 Pace Behind）
≠ 维修离线（那是 P37 分母）
dump BAR「少卖点」= 便宜到达仍要翻房，往往更挤（形 B）
Ahead 时 dump = 用低 ADR 填已经翻不过来的到达
正确杠杆 = 收口可售 / 停售超额到达 / 提高门槛 + Hold BAR
卖过翻房上限 = P24 Walk 风险（Walk $ NV）
真 Behind + 产能松才 P05；理由写 Pace
```
3. **理论 / 卡：** T06 物理 ≠ 可售；本剧再拆可交 ≠ 账面。P37 维修。P01/P03 Ahead。P24 Walk。P05 leftover。P44 钟点窗。P46 早离。`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「产能顶用停售不降价」方向；无弹性系数；无中国间/人 Fact；AHLA 65%/38% **不当中国常模**。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | 收口后 OCC 可能低于账面 remaining；那是吞吐上限，不是需求失败 |
| ADR | Hold 公开价避免用低价填不可交库存 |
| RevPAR | Hold 路径随 ADR；399 dump 压 ADR 且仍耗翻房。不编精确增收 |
| Pickup | 分：可交到达 vs 账面新订；晚进房/Walk 风险 |
| Conversion | 不用降价制造「少卖」；无默认 % |
| Net Revenue | 佣金/wage NV；不算假精确净额 |
| Profit | Unknown。不编 GOP；不编因 dump 省下的 HK 工资 |

允许的写法：若 24h 内 Dirty 积压仍在、公开 BAR Hold、到达被收口到用户给的翻房上限附近 → Hold 成立。若产能突然松、remaining 厚且 Behind → 改走 P05，理由写真剩余需求。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 把产能顶当弱需求 | dump 399 / −15% | 公开栏 | 形 A；拒绝 |
| 便宜量更挤翻房 | 「降价少卖」 | 到达结构变低价 | 形 B；Hold + 收口件数 |
| 与 P37 混刀 | Dirty 标成维修离线 | 房态 | 维修→P37；Dirty→本剧 |
| 卖过产能 | Walk / 凌晨进房 | 到达 vs 翻房上限 | **P24**；Walk $ NV |
| 真弱被 Hold 住 | 确 Behind + 产能松 | Pace/班次 | P05 围栏；仍禁 399 |
| 人效真空 | 前台各报各的「能做几间」 | 班次/最晚进房 | 问 NV；不编间/人 |
| 钟点叠刀 | 下午钟点占翻房窗 | 钟点开量 | **P44** |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 今晚还能翻的到达 / 已排班次 / 最晚进房 | 当日 | 用户数；无默认间/人 | 用户 |
| 账面 Remaining vs 可交房 | 即时 | Dirty/未检/未排班拆开 | 用户 |
| 公开 BAR 是否被砍到 399 | 即时 | 是否仍 Hold | 用户 |
| Pace / 新到达件数 | 即时 | Ahead 否 | 用户 |
| Walk / 晚进房 | 当晚 | 有则 P24 | 用户 |
| 钟点是否占窗 | 当日 | P44 | 用户 |

默认最少 5 个：需求还是产能、今晚能翻几间（或 NV）、Pace、公开 BAR、账面 vs 可交。

## 9. Re-evaluation Trigger

- 产能松、remaining 厚且 Behind → 评 **P05**；仍禁「做不完」叙事与 399
- 发现是维修离线 → **P37**
- 已卖过翻房上限、开始赶客 → **P24**
- 钟点挡翻房窗 → **P44**
- 早离刚回库 → **P46**（先问 HK 来不来得及，不自动 dump）
- 用户给出本店人效/班次 → 在建议里引用用户数，仍不编常模、不代排班

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店人效/班次/华住做房 SOP / 分钟/间 / wage / Walk $ 全部 NV；799/399/22/12 是 Hypothesis/Simulation；AHLA 是 US 短缺调查不是中国吞吐常模。
为什么不是 Low：产能顶 ≠ 弱需求可证伪；dump 便宜客仍耗翻房与「少卖」目标反向；OPERA Dirty ≠ OO 支撑可交 vs 账面；第一刀（Hold + 收口到达 + 问班次）可逆。
因此怎么用：先拆需求 vs 产能；顶住则收口+Hold；不 399；不编间/人。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-hk-cap-sat.md`：周六 Pace Ahead，物理 remaining **22**，HK 今晚最多再翻 **12** 间到达；GM 要 BAR→**399**「少卖点别做不完」→ **Hold 779–799 首选 799**；停售或收口到达贴近产能；不要 dump——便宜需求一样要翻房。22/12/399/799 **Simulation only**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 14:17 CST | 首版。P63。产能顶≠弱需求；收口/停售+Hold；拒 399。12:17 不规定 → 本 scout 核实后开。未开 P64。 |

> 交叉指针（2026-08-28 06:17，不改正文）：同日延退/早到过程走 **P67** `late-checkout-early-checkin`；本剧边界不变。

> 交叉指针（2026-08-28 08:17，不改正文）：同日延退更挤窗的**为什么** → **T-Late**；过程 **P67**。本剧仍是整晚可交到达顶。

> 交叉指针（2026-08-30 10:17，不改正文）：人手产能顶仍本剧；员工价/付费员工折扣改尺 → **P80** `staff-employee-rate-vs-bar.md`。staff capacity ≠ staff rate。不写 P81。

> 交叉指针（2026-09-01 08:17，不改正文）：人手产能顶仍本剧（**T-Staff**）。付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**。staff capacity ≠ staff rate。不规定 P88。

> 交叉指针（2026-09-02 14:17 S02-14，不改正文）：§115 OPERA Item Inventory / Restaurants Max Seating = 有限项·厅座供给约束 ≠ 弱需求砍 BAR；人手产能顶仍本剧（**T-Staff**）。不开 P88。

> 指针（2026-09-06 00:17 T06-00，不改正文）：DNM / Locked·Unassigned / Waitlist deepen **theory-skip**（§146 复核）。邻覆盖仍本剧；Diagnose 主闸 **P37**（+ P13/P63/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-0017-theory-skip-dnm.md`。

> 指针（2026-09-06 08:17 T06-08，不改正文）：Queue / Pending / Rush / Room Is Ready deepen **theory-skip**（§149 复核）。邻覆盖仍本剧；Diagnose 主闸 **P63**（+ **P67**/P37/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-0817-theory-skip-queue.md`。

> 指针（2026-09-06 10:17 C06-10，不改正文）：Queue / Pending / Rush / Room Is Ready misread Simulation drafted（`cases/sim-2026-queue-pending-rush-misread-sat.md` · §150）。Diagnose 主闸仍本剧（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-1017-queue-case.md`。
> 指针（2026-09-06 12:17 R06-12，不改正文）：§151 Clock Room Statuses + Apaleo Housekeeping + Protel Housekeeping list 新开（Queue/Dirty 互补源）。Diagnose 主闸仍 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-1217-sources-recap.md`。

> 指针（2026-09-15 00:17 T15-00，不改正文三句 / 399 / 799）：Room Condition / Dirty·Clean·Inspected·Pickup deepen **theory-skip**（§163 复核）。HK cleaning-status ≠ Pace ≠ 公开 BAR；Dirty 仍可售 unless OOS/block。Diagnose 主闸仍 **P63**（+ **P67**/P37）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0017-theory-skip-room-condition-night-audit.md`。

> 指针（2026-09-15 02:17 C15-02，不改正文）：§164 CASE Room Condition / Night Audit / Market-Source misread Simulation drafted（`cases/sim-2026-room-condition-night-audit-market-misread-sat.md` · §164 CASE 指针复述 §163）。Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。

> 指针（2026-09-15 04:17 R15-04，不改正文）：§165 Clock Revenue Date Mode + Clock Marketing Sources/Channels/Segments + Stayntouch Housekeeping Reports 新开（Room Condition / Night Audit / Market-Source 互补源）。Diagnose 主闸仍 **P63**（+ **P67**/P37）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0417-sources-recap.md`。
