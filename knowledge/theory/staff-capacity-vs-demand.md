# Staff Capacity vs Demand｜人手/保洁产能顶不是弱需求

> 资产：T-Staff / T06 下一层（可交房吞吐 ≠ 物理可售；ops 天花板 ≠ 需求信号）  
> 路径：`theory/staff-capacity-vs-demand.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-27  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 证据等级：A 协会（AHLA Front Desk Feedback 2025-02-20：保洁/前台短缺是真实运营约束 — **US 调查，不是中国人效、不是间/人常模** — §48）；A 协会（HSMAI Americas ROAB：Housekeeping labor = primary constraint；按能接多少到达调策略 — **§49 新开**；**不是**中国 SOP、**不是** dump BAR 许可证）；A Vendor PMS（OPERA Cloud 26.2 Housekeeping Board：Dirty/Clean/Inspected/Pickup ≠ OO/OS — §48）；B / Hypothesis（产能顶 → 收口到达 / 停售超额 / 提高门槛 + Hold BAR；不 dump；779–799 首选 799）  
> 配套：`advisor-playbooks/staff-capacity-constraint.md`（P63 过程）· `recommendations/dont-dump-when-staff-capped.md`（主卡复用，不重写）· `metrics/sellable-vs-staff-cap.md`（轻指标；**无默认间/人**）· `cases/sim-2026-hk-cap-sat.md`（Simulation）  
> 交叉：`theory/capacity-ooo.md`（T06：物理房 ≠ 可售；本卡再拆 **可交**）· P37（维修离线）· P05（真 leftover）· P01 / P03（Ahead 应收口）· P24（卖过产能 = Walk 风险）· P44（钟点挤翻房窗）· P46（早离回库）· T-Share / T-Parity / T-Guar / T-Upsell（假尺子一族）  
> 问题树：§70 「做不完房不是降价理由」（过程路由已够；本卡给「为什么产能顶 ≠ 弱需求」）  
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / RMS / OTA / 前台 / 保洁排班，不自动改价，不代关库存、不代改房态。**  
> 状态：**理论 drafted**（2026-08-27 16:17 CST）。**不写 P64，不写新剧本。** 禁止：编华住人效 / 间/人中国常模 / 分钟/间 Fact / 班次 SOP / wage / Walk $ / 699 / AHLA 85–95 OCC 带；一夜 −15%；BAR→399「反正做不完」；默认间/人；把 22/12/399/799/180 当市场 Fact；把 Dirty 当 OOO；重写 P01–P63 正文（P63 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**人手/保洁产能顶是供给约束，不是弱需求信号；砍 BAR 缓解不了翻房吞吐。**  
物理还能卖几间，与今晚班次还能翻/还能安全接几间到达，是**两把天花板**。绑在人手上时，市场仍可能 Ahead；正确杠杆是收口可售 / 停售超额到达 / 提高门槛，不是 dump。便宜增量需求一样要做房，到达扎堆时往往更挤。本店人效 / 班次 / 最晚进房 / 华住做房 SOP = **全部 NV**。

```
Naive（禁止）     做不完 → BAR→399 清掉；人手不够先降价少卖点；
                  remaining 22 = 今晚都能交；Dirty = 维修关房；市场弱所以做不完
本卡              先拆物理 remaining vs 可交/可翻到达。产能顶 ≠ leftover。
                  砍价不增加翻房产能。过程走 P63。
```

完成标准：用户说「保洁不够别卖满」「人手不够先降价少卖点」「只能做 N 间」「BAR→399 反正做不完」→ Situation 写成**两天花板 + Pace**；Diagnosis 写成供给/吞吐绑住、不是需求塌；What To Watch 写成可翻到达、Dirty 积压、公开 BAR 是否 Hold、到达是否被收口。**不自动 dump、不 dump 399、不写 P64。**

顾问必须能直接说的三句（与 P63 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问今晚卡的是 **需求** 还是 **保洁/前台人手产能**（能翻几间、最晚进房几点、已排几班）。产能顶不是弱需求，也不是该砍 BAR 的理由。本店人效/班次/华住做房 SOP = **NV**，不编。
2. 产能顶住时：先 **收口可售/停售超额到达**（或提高门槛），Hold BAR 779–799 首选 799（Hypothesis / Simulation）。不要为了「少接一点」去 dump 到 399——便宜客一样要做房，往往更挤翻房。
3. 真需求弱且产能也松才走 P05。维修关房走 P37；超售赶客走 P24；钟点挤翻房窗走 P44。不要把 BAR dump 到 399「反正做不完」。
```

独立默认（本库 Hypothesis）：**砍公开价不增加今晚能翻几间。** 它回答「这把约束是供给还是需求」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止默认间/人。**

---

## 1. 两把天花板：物理可售 vs 可交吞吐

顾问问题不是「画面上还剩几间」，是：**今晚还能安全交几间钥匙？**

| 天花板 | 是什么 | 绑住时允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Physical remaining**（T06 / P37） | 物理还在、账面还能卖的房晚（已声明是否扣 OOO） | 维修离线 → 缩可售分母；不可售不是砸价对象 | 把维修 OCC 当需求变强；按不可售间 dump |
| **Staff-turnable / deliverable**（本卡） | 今晚 HK（及需要时的前台）还能翻/接的到达；≈ 已干净/已检 + 班次内还能翻完 | **收口到达件数**、停售超额、提高门槛、Hold BAR | 把产能顶当 leftover；BAR→399；降价「少卖点」 |
| **Sellable arrivals** | `min(Physical remaining, Staff-turnable capacity)` | 绑在人手上 → 按 **可交** 管到达 | 只看账面 Remaining 继续卖穿 |

```
Physical remaining     = 22     # Simulation 例：账面还能卖
Staff-turnable         = 12     # Simulation 例：今晚还能翻/安全接
Sellable arrivals      = min(22, 12) = 12
Gap_cap                = 10     # 产能顶候选（再拆维修 vs 人手）
```

**22 / 12 只允许出现在 Simulation**，不是本店人效 Fact，不是行业间/人常模。

混淆两把天花板会同时拧坏 **Remaining** 与 **Pace**：把「做不完」读成 Behind，或把「还能卖 22」读成「今晚都能交」。

HSMAI Americas ROAB（A 协会，§49）：*Housekeeping labor has been the primary constraint*；按**一周能接多少到达**调 LOS/定价优势；有成员对自设 OCC 上限以保口碑。方向 = 劳动是供给约束、与 ops 一起钉「今天还能卖/还能交多少」。**不抄任何间/人、不抄招聘奖金 $、不当中国 SOP。** 文中「有限保洁折扣产品」是疫情期产品设计讨论，**不是**本库「产能顶 → dump 公开 BAR」的许可证。

---

## 2. 产能绑住 ≠ 弱需求

```
画面：Physical remaining 厚（或看起来「卖不满」）+ HK/FO 说做不完/接不完
Naive：需求弱 → dump / P05
本卡：约束在**供给吞吐**。Pace 仍可能 Ahead。杠杆是件数与门槛，不是价格砸穿。
```

| 信号 | 更像 | 默认 |
| --- | --- | --- |
| Gap_cap > 0 且 Pace Ahead / 仍紧 | **产能顶** | Hold BAR + 收口到达 |
| Gap_cap > 0 但用户坚持「少卖点先砍价」 | 假杠杆 | **拒绝**降价少卖；便宜到达仍耗翻房 |
| Remaining 厚 + Behind **且** 班次松、能翻完 | **真 leftover** | 才评 **P05**；理由写 Pace，**不写**「做不完」 |
| 房物理离线（OO/OOO） | **维修分母** | **P37**；不是本卡吞吐 |

砍 BAR **不**提高今晚翻房产能：

1. 增量需求仍要 Dirty→Clean→Inspected（或本店等价流程）。  
2. 更低价往往吸引更短 LOS / 更扎堆到达 → 单位时间翻房压力**更大**（Hypothesis；本店到达形状 NV）。  
3. Ahead 时 dump = 用更差 mix 去撞同一天花板。

AHLA Front Desk Feedback（A 协会，§48）：65% 报人手短缺；housekeeping 38%、front desk 26% 最常被点名。**证明人手可以成为真实约束。US 调查 ≠ 中国人效。**

---

## 3. Dirty ≠ OOO（ops 状态 ≠ 库存离线）

| | **Housekeeping 房态** | **OO / OS / OOO** |
| --- | --- | --- |
| 是什么 | Dirty / Clean / Inspected / Pickup（OPERA 例）= **清洁进度** | Out of Order = 移出可售；Out of Service = 不可住但可能仍计库存（OPERA） |
| 房还在可售池吗 | **通常在**（仍占库存） | OO 影响可售/指标（厂商定义） |
| 顾问含义 | 未检/脏房 ≠ 今晚可交到达 | 维修走 **P37 / T06** |
| 禁止 | 把 Dirty 积压写成「关了 20 间维修」再按 OOO OCC 涨或砸 | 把人手吞吐写成维修离线 |

OPERA Cloud 26.2 *Using the Housekeeping Board*（A Vendor PMS，§48）：清洁状态 ≠ OO/OS。**UI 字段是 OPERA 的，不是华住/本店报表名。** 中国字段名 **NV，不编。**

本卡与 T06 / P37 的分工：T06 钉**分母**（物理 / 可售 / STR）；本卡钉**吞吐**（今晚能交几间）。两边都不是「需求变弱所以砍价」。

---

## 4. 假尺子一族：「做不完所以要降价」

本卡不是新怪现象，是同一族的下一张：**屏幕/运营上的数被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Guar** | 放房前混合 OTB | 放房后真 remaining |
| **T-Upsell** | 「套房还空着」 | 付费差价 / 分型 Pace |
| **本卡 T-Staff** | 「做不完 / 只能做 N 间 / Dirty 一堆」 | **可交到达件数 + 门槛**；不是公开 BAR dump 令 |

「做不完所以要降价」= 把 **HK 任务单 / 班次上限** 当成 **P05 leftover 按钮**。尺子在**供给**上，动作却打在**价格**上 → 同类误读。

---

## 5. 与超售 / Walk 的交界

卖过 `Staff-turnable` 的到达 = **人手维度的超售**：物理房可能还在，但交不出房 / 晚进房 / 服务失败 → **P24** 风险上升。

```
Physical remaining ≥ 拟卖到达 > Staff-turnable
  → 不是「多卖一点 OCC」的自由
  → 是 Walk / 投诉 / 口碑风险（金额 **NV，问，不编**）
```

Walk $ / 交通补偿 / 品牌惩罚 = **全部 NV**。缺数时仍可说：**不要在产能顶上继续卖穿到达**；已经在赶客 → 过程仍 **P24**。本卡不重写 Walk 程序。

HSMAI（§49）同向：有成员自设 OCC 上限保口碑，而不是短视卖满。方向可用；**不**把某店自设 % 写成中国常模。

---

## 6. Diagnose → Advise：产能顶被允许改什么

用户原话：「保洁不够别卖满」「人手不够先降价少卖点」「今天只能做 120 间」「BAR→399 反正做不完」。

```
Situation
  钉三件事：①需求 vs 人手产能；②Physical remaining vs Staff-turnable；③用户要 dump 还是收口件数。
  缺班次 / 最晚进房 / 人效 → 问，不编间/人。

Diagnosis
  产能顶 = 供给/吞吐天花板已经在板上。它被允许改的是：
    (1) 故事类型（产能顶 vs 真弱+产能松 vs 维修离线 vs 钟点挤窗）
    (2) 问句（§7）
    (3) 默认路径：顶住 → 收口到达 / 停售超额 / 提高门槛 + Hold BAR
    (4) 是否先拆 P37（维修）或 P44（钟点）——库存/产品动作，不是砍价
  它不被允许改的是：BAR→399；降价少卖；一夜 −15%；发明华住人效；把 Dirty 当 OOO。

What To Watch
  今晚还能翻几间；Dirty/未检积压；公开 BAR 是否仍 Hold；到达是否被收口
  不是「账面 Remaining 是否清零」单一指标
```

过程六形（A 做不完 dump / B 降价少卖 / C 物理在但不可交 / D 与 OOO 混谈 / E 超售盖过产能 / F 误入）走 **P63**，本卡**不重复 P63 正文**。

Ahead 或仍紧 + 产能顶 → **Hold + 收口**；真 Behind 且产能松 → 才评 **P05**，理由写成 Pace。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P64。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | **本店人效 / 班次**今晚怎么排？已排几班？ | 会编间/人或华住 SOP | **NV** |
| 2 | 今晚 **还能翻几间**到达（任务单剩余）？ | Gap_cap 算不出；易把账面 remaining 当可交 | **NV** |
| 3 | **最晚进房 / 可交时间**承诺到几点？ | 晚到到达与翻房窗冲突看不见 | **NV** |
| 4 | **Physical remaining vs deliverable remaining** 各多少？是否已扣 OOO？ | 两天花板混谈；误入 P37 或 P05 | **NV** |
| 5 | **钟点/day-use（P44）**是否在偷翻房窗？ | 把整晚产能顶误判成钟点挤窗，或反过来 | **NV** |

补充可问（同样 NV）：Walk 成本；Dirty vs OO 本店字段名；前台接待上限是否另绑。**间/人中国常模、分钟/间 Fact、wage、Walk $、699、AHLA 85–95：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 做不完 → 该夜弱 → dump | 产能顶；Ahead 时更不是 P05 |
| 降价可以「少卖点」 | 便宜到达仍耗翻房；往往更挤 |
| remaining 22 = 今晚都能交 | 若只能翻 12，可交是 12 |
| Dirty = OOO / 维修关了 | Dirty 仍在库存（OPERA）；OO 才离线 → P37 |
| 没有行业间/人就不能管 | 无默认间/人。先问今晚能翻几间 |
| 卖过可翻到达没关系 | **P24** Walk/服务失败风险；Walk $ NV |
| 钟点忙所以整晚 dump 过夜 BAR | **P44** 管钟点窗；整晚吞吐顶走本卡/P63 |
| 编一套华住人效就能 Advise | **禁止。** 人效 NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P63 `cases/sim-2026-hk-cap-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 22 / 12 / 399 / 799（399 = 被拒绝的 dump；799 仅 Hypothesis/Simulation）
Physical remaining           = 22
Staff-turnable arrivals      = 12
Pace                         = Ahead（用户给）
公开 BAR                     = 799
前台/总经理拟议              = BAR→399「少卖点别做不完」；或降价少卖
```

读法（与 P63 同句）：账面 22、能翻 12 = **产能顶在板上**，不是 leftover。Advise：收口到达贴近 **12**；Hold **779–799 首选 799**；拒 dump **399**；拒「降价少卖」；人效/班次 **NV**。
**180 / 22 / 12 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住人效，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-27 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 保洁/前台人手短缺可成运营约束（US 店调查） | **A 协会** | **Known 方向。** ≠ 中国人效 / 间/人 | AHLA Front Desk Feedback（**§48 指针**） |
| Dirty/Clean/Inspected/Pickup ≠ OO/OS；Dirty 仍在库存 | **A Vendor PMS** | **Known 机制。** UI ≠ 华住字段 | OPERA Cloud 26.2 HK Board（**§48 指针**） |
| Housekeeping labor 可为 primary constraint；按能接到达调策略；可与 ops 钉可售 | **A 协会** | **Known 方向。** 不提供间/人；非 dump-BAR 令 | HSMAI Americas「Revenue Optimization in a Time of Capacity Constraints」（**§49 新开**） |
| 产能顶 → 收口到达 + Hold BAR；砍价不增翻房产能；Dirty ≠ OOO | **B / Hypothesis** | 本库 P63 + T06 + P37 闸 | — |
| 本店人效/班次/最晚进房/可交 remaining/钟点是否偷窗 | — | **NV。不编。** | — |
| 间/人中国常模 / 分钟/间 Fact / wage / Walk $ / 699 / AHLA 85–95 | — | **NV。禁止发明。** | — |

本小时新开：HSMAI Americas capacity-constraints 文 1 页（§49）。AHLA + OPERA 复用 §48，不重锤。博客「12–18 间/人」计算器页 **未采用**（非协会/官方）。未开第二家 PMS HK 模块。AHLA 85–95 **仍 NV**（未打开该具体区间页）。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-STAFF-01 | 本店人效 / 班次 SOP / 今晚已排几班 | **NV。不代答。** 无则条件化，不编间/人 |
| NV-STAFF-02 | 今晚还能翻几间；最晚进房/可交时间 | **NV。** |
| NV-STAFF-03 | Physical vs deliverable remaining；是否已扣 OOO | **NV。** 维修 → P37 |
| NV-STAFF-04 | 钟点/day-use 是否偷翻房窗 | **NV。** 是 → 兼看 P44 |
| NV-STAFF-05 | Walk $ / 服务失败成本 | **NV。** 不挡「勿卖过产能」 |
| NV-P63-01… | P63 已挂（人效/班次/华住 SOP） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 16:17 CST | 首版。T-Staff = 人手/保洁产能顶不是弱需求。两天花板；产能绑住 ≠ leftover；Dirty ≠ OOO；假尺子一族；超售/Walk 交界；不重复 P63 六形。**不写 P64。** 22/12/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P63 正文；P63 仅头一行，邻卡仅文末一行）

- **P63** `advisor-playbooks/staff-capacity-constraint.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-dump-when-staff-capped.md`：复用，不重写。
- **轻指标** `metrics/sellable-vs-staff-cap.md`：Physical vs Staff-turnable；无默认间/人。本卡不重写公式。
- **T06** `theory/capacity-ooo.md`：物理/可售/STR 分母。本卡再拆可交吞吐。
- **P37**：维修离线 ≠ Dirty/人手吞吐。
- **P05**：真弱 leftover ≠ 「做不完」。
- **P01 / P03**：Ahead 时更应收口，不是 dump。
- **P24**：卖过可翻到达 = Walk 风险；Walk $ NV。
- **P44**：钟点挤窗 ≠ 整晚吞吐顶。
- **P46**：早离或可帮 HK；不是 dump 令。
- **T-Share / T-Parity / T-Guar / T-Upsell**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止默认间/人。禁止 P64。禁止编华住人效、分钟/间中国 Fact、wage、Walk $、AHLA 85–95。**

> 交叉指针（2026-08-28 08:17，不改正文）：假尺子同族下一张 **T-Late** `theory/late-checkout-turnover.md`（嫌 12 点走 ≠ 砍过夜 BAR）。本卡仍是整晚吞吐顶。

> 交叉指针（2026-09-01 08:17，不改正文）：本卡仍是 **T-Staff**（P63 产能）。付费员工折扣 Diagnose 走 **T-Employee** `theory/staff-employee-rate-vs-bar.md`，过程仍 **P80**。不要混叫。不规定 P88。
