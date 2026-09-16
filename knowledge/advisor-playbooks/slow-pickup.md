# Playbook P08｜Slow Pickup

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/slow-pickup.md`  
> BACKLOG：P08 Slow Pickup · HIGH · 先诊断枝  
> 任务书标签：用户 Wave2 指令写作 P09，以本表 ID **P08** 为准  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/stimulate-slow-pickup.md` `hold-price-curve-late.md`  
> 问题树：§4 Pickup Slow；§1 OCC Low；§6 Pace Behind；§13 Price Too High  
> 理论：`theory/otb-pickup-pace.md`  
> 过程：`decision-framework/advisor-process.md`  
> 证据等级：B（过程 + 多源 Pickup 定义）；幅度 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

速度慢。先问为什么慢，再决定等、修供给、开围栏产品，还是小步降。**看见慢不自动降 BAR。**

完成定义（对照 BACKLOG）：「慢」有定量起点（Hypothesis）+ ≥6 个非降价原因 + 允许降价的条件。本篇满足。

---

## 1. 信号（怎样算慢）

必须同时有 **Stay Date + 窗口 + 间夜**。只有「这几天没动」不够。

### 1.1 定量起点（Hypothesis，待 feedback；不是定律）

在 DTA 4–21（中窗口）且 Remaining 不是「只剩高价房」时，下列 **任 2 条** 成立 → 进入本剧本：

| # | 信号 | 300 间店例子 | 缩放 |
| --- | --- | --- | --- |
| V1 | 3D 净 Pickup < max(总房×1.5%, 3) 间 | 3 日 < 5 间 | p=1.5% |
| V2 | 7D 净 Pickup < max(总房×4%, 6) 间 | 7 日 < 12 间 | p=4% |
| V3 | Days-to-Sellout > DTA × 1.5 | 剩 120、日均 2.7 → 45 日 > 21 | — |
| V4 | 同窗 Pickup 低于 STLY 同窗 ≥30% | 去年 3D=20 间，今年=8 | 有历史用历史 |
| V5 | Pace Behind ≤ −5pp **且** 缺口未在收敛 | 60% vs STLY 72% | 见理论卡 §9.2 |

**DTA>30：** 7D=0 在商务店经常正常。单独 V1 不够，必须有 V4 或「该 DTA 历史已经启动」。  
**DTA≤3：** 改走 Last Minute，不用本剧本当主流程。  
**1D=0：** 噪声。必须看 3D。

用户原句「还有 14 天、现在 60%、最近 3 天只进了 8 间」：

- 8 间/3 日 = 2.7 间/日。
- 300 间：V1 成立（8 略高于 5，弱），V3 在 Remaining=120 时成立。**还缺 Pace 基准才能定 Behind。**
- 80 间：8 间是总房 10%，V1 不成立。
- 结论：先还原总房 + 要同 DTA 基准。见理论卡 §9.3。

### 1.2 输入清单

最小：Stay Date、DTA、OTB 间夜或 OCC+总房、3D 或 7D Pickup、当前 BAR。  
推荐：同 DTA STLY/曲线、竞对价、开关状态、1D+3D+7D、取消、Segment。  
缺最小项仍分析，Confidence 降档。

---

## 2. 先排除（没过不许降价）

按顺序打勾。任一条成立 → 动作不是降 BAR。

| # | 排除 | 成立时做什么 | 问题树 |
| --- | --- | --- | --- |
| E1 | 口径 / OOO / 拿远期 OTB 当危机 | 修数 | §1.0 |
| E2 | 该 DTA 历史本来就慢（曲线后置） | `hold-price-curve-late.md` | §4.1 / §1.3 |
| E3 | Pace 并不落后（同 DTA On/Ahead） | Hold | §1.2 / §6 |
| E4 | 库存没开 / 房型关 / 配额 0 | 开库存 | §1.7 |
| E5 | 渠道不可订或价不同步 | 先修同步 | §1.6 |
| E6 | MinLOS/CTA 过严挡短住 | 解开该日限制 | §1.7 / P33 |
| E7 | 毛 Pickup 慢但取消也少，净额正常 | 改看净额 | NV-02 |
| E8 | 昨日刚大涨，1D 变慢 | 等 3D/48h | §4.4 / §13.5 |
| E9 | 比较日含去年一团进账 | 换剔团曲线 | §6.2 |
| E10 | 市场同样慢（Comp Forward 落后、无事件） | 不砸 BAR；最多小配额围栏 | §1.4 |
| E11 | 产品/差评/施工事故 | 降预期，不把降价当策略 | §1.10 |
| E12 | 「低」只相对过高 Budget | 先改 Forecast | §1.11 / §15 |

以上过完，仍 Behind + Slow + 供给开着，才进入 §3。

**至少 6 个非降价原因（完成定义要求，已写入 E2–E6、E8、E10–E12）：** 曲线后置、Pace 不落后、库存关、渠道故障、限制过严、刚涨价、市场冰点、产品事故、错误 Budget。另加：价已 ≤ 全部竞对（E13，动作=开渠道不是再降）。

---

## 3. 诊断落格

走过程 D1–D10，主诊断只能是机制：

| 主机制 | 信号 | 动作类型 |
| --- | --- | --- |
| 后置曲线，不是病 | Pace On + 历史后置 | 什么都不动 |
| 供给挡客 | E4–E6 | 库存 / 限制 / 渠道 |
| Price Too High | 价 > 可订竞对 ≥8% + 转化差 + 供给开 | 先围栏促销，必要时小步降 |
| 份额差但价不高 | 价已低、市场不低、只有本店慢 | 渠道 / 产品 / 曝光；不降 |
| 市场弱 | Comp 同样落后 | 不砸 BAR |
| 团队缺口 | 去年有团今年无 | 销售补团，不用 BAR 填全部洞 |

禁止主诊断写成「入住率偏低」。

---

## 4. 动作表（禁止「适当调整」）

一次只推 1–3 个。价格必须有区间+首选，标 Hypothesis。

### 4.1 工具选择

| 优先级 | 条件 | 价格 | 库存 | 限制 | 渠道 |
| --- | --- | --- | --- | --- | --- |
| 0 | E2/E3 后置或 Pace On | **BAR 不动** | 只修误关 | 淡日过严则解 | 不接破价促 |
| 1 | 供给没开 | 不动 | **打开误关** | 解开该日 MinLOS/CTA | 修复同步；开主渠道 |
| 2 | Behind+Slow+价已≤竞对 | 不动 | 保持开 | 可解淡日限制 | **开必要渠道**；查直销可订 |
| 3 | Behind+Slow+价高 8–15%+已开 | BAR 不动 | 保持开 | 可解 | **开围栏促销**（预付/连住/会员） |
| 4 | Behind+Slow+价高≥15%+7D 也慢+已开 | **BAR −5–10%** | 保持开 | 可解 | 促销不得再低于新 BAR |
| 5 | DTA≤3 且 3D≈0 且价明显高于全部竞对 | 允许 −10–15%，有截止日期 | 保持开 | 解限制 | 可开短窗战术产品 |

幅度来源：过程文件第四节 + `stimulate-slow-pickup.md`。**Hypothesis。**

### 4.2 价格怎么写（模板）

```text
Stay Date:
Room Type:            先动基础售卖房；高档不跟降
Rate Plan:            优先围栏产品；次选 BAR
Current BAR:
Promo Range / Preferred:     # 工具 3
BAR Range / Preferred:       # 工具 4
Do-not-do:            一夜 −15%+；只改一个渠道；BAR 降到最低竞对下还加促销
```

**首选默认（Hypothesis）：**

- 工具 3：促销价 = min(最低竞对, BAR×0.92) 附近，区间 ±30–50 元；BAR 守住。
- 工具 4：BAR 新值 = 收到最低竞对附近，降幅夹在 −5–10%；首选取区间中偏高。

### 4.3 工作数字（Simulation 锚，200 间，不是真店）

见 `cases/sim-2026-pace-behind-slow-pickup.md`：BAR 899，竞对 799/829/849。  
**首选：BAR 守 899，预付 829（809–849）。** 不能上预付则 BAR → 849（829–859）。

---

## 5. 观察窗口

| 窗 | 看什么 | 口径 |
| --- | --- | --- |
| 即时 | BAR/促销是否执行；渠道可订 | 多渠道同价 |
| 24h | 净 Pickup 间夜、取消、新单 Segment | 该 Stay Date |
| 48h | 累计 Pickup；是否该第二刀 | 禁止只看 % |
| 72h | 趋势是否恢复到该店后半段 | 与 STLY 同窗比（若有） |

最低 5 项：24h Pickup、24h 取消、竞对 BAR、自身是否执行、成交落在促销还是 BAR。

---

## 6. Re-evaluation Trigger

```text
尺度：300 间；其他店 阈值 ≈ max(总房×p, 2)

1) 24h 净 Pickup ≥ 8 间（p=2.5%）
   → 刺激已够。关新促销或收到 BAR−3%。已降的 BAR 不立刻拉回原价。

2) 24h 净 Pickup 3–7 间（p=1.0–2.3%）
   → 守第一刀，不加码降。

3) 48h 累计 < 5 间（p=1.7%）且供给确认开着
   → 第二刀：尚未动 BAR 则 −5–8%；已动则停价，改渠道/产品，禁止第三刀砸价。

4) 发现 E4–E6 才是根因（昨天渠道是关的）
   → 撤回降价路径；开库存；BAR 回到动作前。

5) 24h 取消 ≥ 6 间或翻倍（p=2.0%）
   → 停降。查比价与政策。不自动再降「锁单」。

6) 补齐 STLY 后 Pace 实际 On/Ahead
   → 离开本剧本，改 Hold。

7) 竞对跟降至我们新价之下
   → 不自动跟到底。守第一刀下限，挂 Price War 诊断。
```

---

## 7. 如果只能再补 3 个

按翻转价值（与 T7 场景 D 对齐）：

1. **同 DTA 的 STLY / 曲线点** — 翻转 Hold vs 刺激。  
2. **7D Pickup 间夜 + 库存/渠道是否开着** — 翻转「真慢 vs 关了」。  
3. **BAR vs 至少 1 个可订竞对** — 翻转降 BAR vs 只开促销/渠道。

已有「14 天、60%、3 天 8 间」时，3 个改成：总房量、同 DTA 基准、BAR+开关。见理论卡 §9.3。

---

## 8. Confidence

- 排除未做完就给降价：不合格，最多 Low + 条件化。  
- 排除做完 + Pace/Velocity/Price 三家族同向：方向 Medium。  
- 幅度不得 High。  

---

## 9. 边界

| 去 | 何时 |
| --- | --- |
| `hold-price-curve-late.md` | 曲线晚或 Pace 不落后 |
| `stimulate-slow-pickup.md` | 本剧本的决策卡 |
| Low Demand Day / Weak Weekday | 整天需求结构弱，不单是速度 |
| Last Minute Unsold | DTA≤3 |
| Price War | 竞对连环降 |
| Fast Pickup | 速度其实快 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。定量起点与 Trigger 为 Hypothesis。BACKLOG P08。 |

> 指针（2026-09-14 16:17 T14-16，不改正文三句 / 399 / 799）：House Count deepen **theory-skip**（§160 复核）。Arrivals Expected / House Status ≠ Pace/Pickup 本身；误读改尺仍拒 399。Diagnose 仍 **P08/P09**（± **P45/P37**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-14-1617-theory-skip-house-count.md`。

> 指针（2026-09-14 18:17 C14-18，不改正文三句 / 399 / 799）：House Count misread sim drafted（§161）。Arrivals Expected / House Status ≠ Pace dump 燃料；误读改尺仍拒 399。Diagnose 仍 **P08/P09**（± **P45/P37**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `cases/sim-2026-house-count-assignment-nopost-misread-sat.md`。

> 指针（2026-09-14 20:17 R14-20，不改正文三句 / 399 / 799）：§162 Protel Active Desktop / Clock Arrivals 屏 = 运营盘点互补源；Arrivals Expected ≠ Pace dump 燃料；误读改尺仍拒 399。Diagnose 仍 **P08/P09**（± **P45/P37**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-14-2017-sources-recap.md`。

> 指针（2026-09-15 08:17 T15-08，不改正文三句 / 399 / 799）：Guest History·past ADR / Rooming List / Post It deepen **theory-skip**（§166 复核）。档案历史 ADR / 团名单作业 / 辅项过账 ≠ Pace dump 燃料；误读改尺仍拒 399。Diagnose 仍 **P08/P09**（± **P45/P01** · **P52**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0817-theory-skip-guest-history-rooming-list.md`。

> 指针（2026-09-15 10:17 C15-10，不改正文三句 / 399 / 799）：Guest History·past ADR / Rooming List / Post It·Passerby misread Simulation drafted（`cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md` · §167 CASE 指针复述 §166）。T15-08 deepen **已 skip** — 不推翻。Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。

> 指针（2026-09-15 12:17 R15-12，不改正文三句 / 399 / 799）：Guest History / Rooming List / Post It 互补源 §168 — Stayntouch Guests（档案 ADR stats）+ Stayntouch Groups（Rooming List / POST CHARGE）+ Protel Passerby invoice 新开。档案住史 ADR / 团名单 pickup / 路人过账 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。T15-08 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-15-1217-sources-recap.md` · `sources/source-map.md` §168。

> 指针（2026-09-16 16:17 T16-16，不改正文三句 / 399 / 799）：Confirmation / Stationery · Profile Merge deepen **theory-skip**；§178 复核 only。确认函/并档/预办入住·快退房/改单日志 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P65**（+ **P86**/P01）/ **P08**（+ **P45**/P01）/ **P45**（+ **P01**/P46/P54/P67）/ **P45**（+ **P01**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-1617-theory-skip-confirmation-merge.md`。
