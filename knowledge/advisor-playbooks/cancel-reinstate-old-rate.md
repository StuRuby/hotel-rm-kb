# Playbook P65｜取消后按原价恢复 / Reinstate（旧价回写不是必须）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/cancel-reinstate-old-rate.md`  
> BACKLOG：P65 取消后按原价恢复 · HIGH · 先决策卡（本轮同开）· slug **cancel-reinstate-old-rate**  
> 状态：**drafted**（2026-08-27 22:17 CST）  
> 配套卡：`recommendations/dont-reinstate-below-current-bar.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/reinstate-rate-gap.md`（恢复后过账价 < 当前 BAR 的件数；ADR gap；**无默认 %**；本店 Reinstate 政策 NV）  
> 理论：**T-Reinstate** `theory/reinstate-vs-current-rate.md`（历史取消价 ≠ 权利；Reinstate = 状态动作不是定价权；本剧过程）· P62 新单套利 · P14 Soft · P38 新生产 · P54 no-show · P01 Ahead · P05 leftover  
> 交叉：P62 取消再订更低价（新单套利 ≠ 同单恢复）· P14 Soft 取消潮 · P38 收紧**新生产**免费窗 · P54 no-show · P46 早离 · P59/P60 价平/错价 · P01 Ahead · P05 leftover · P36/P64 不可比/嵌套 399  
> 问题树：§72 「取消后按原价恢复不是必须」  
> 仿真：`cases/sim-2026-reinstate-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud：取消可 Reinstate；原房型/房价不可用时须选新组合 — §52）；B / Hypothesis（Ahead 不自动认旧低价；Hold 当前 BAR；弱夜让步标 exception）  
> Last Verified：2026-08-27  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议先拆「同一笔 Reinstate」vs「取消后再订新单」；Ahead 拒旧低价、给当前价；问本店 Reinstate 是否带原价（**NV**）。**不操作** PMS / RMS / OTA / 前台，不自动定价，不代点 Reinstate。  
> 禁止：发明华住 Reinstate SOP、罚金%、佣金%、699；一夜 −15%；BAR→399「别纠缠」；Ahead 自动认旧 599；把 14/599/399/799 当市场 Fact；开 P66；把同住新单套利当本剧（误入 P62）；把 Soft 潮当恢复权（误入 P14）。  
> 20:17「不要规定 P65」= recap 槽不得指定；本 scout 核实 Reinstate 缺口后开。

---

## 0. 一句话

**取消后又要按旧价回来，不是权利；旧价回写不是必须。** 先问是同一笔 Reinstate 还是取消后再订新单（后者 **P62**）。高峰 / Pace Ahead：默认不认过期低价；要回来按**当前** BAR/可售价（Hold 779–799 首选 799，Hypothesis / Simulation）。本店 Reinstate 是否带原价 / 华住字段 = **NV，不编**。真弱夜才可谈例外（仍是让步）。已发生 no-show → **P54**；未来收窗 → **P38**。不要因为「怕他去订 399」就 dump BAR 或自动认旧 599。

完成定义：一张「先拆 Reinstate vs 新单 → Ahead 拒旧价给当前 → 政策问 NV → 弱夜才例外 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A Ahead + 旧低价恢复** | 「取消又后悔，按原 599 恢复」 | 过期价占稀缺库存 | **拒旧价**；给当前 779–799 首选 799 |
| **B FO 自动写回历史价** | 「系统 Reinstate 把旧价带回来了」 | 回写 ≠ 定价权 | 改到当前价，或当新单按当前价 |
| **C 威胁去订 399** | 「不恢复他就订 OTA 399」 | 用公开 BAR 安抚 | **Hold Brand.com**；399 可能围栏/错价（P36/P60/P64） |
| **D 弱夜旧价请求** | 「反正弱，给旧价吧」 | 让步≠权利 | 可谈；标 **exception**；不当新 BAR |
| **E 取消再订更低价** | 「取消了又订回来更便宜」 | 新单套利 | **P62** |
| **F 误入** | Soft 潮 / 收窗 / 没到 | 别的剧本 | Soft→**P14**；新生产→**P38**；没到→**P54** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是 **同一笔订单恢复（Reinstate）** 还是 **取消后再订一笔新单**。后者走 P62。恢复旧价等于用过期价格占今晚库存。本店 Reinstate 是否带原价 / 华住字段 = **NV**，不编。
2. 高峰 / Pace Ahead：默认 **不按旧低价恢复**；要回来就按 **当前** BAR/可售价（Hold 779–799 首选 799，Hypothesis / Simulation）。不要因为「怕他去订 399」就把 BAR dump 到 399 或自动认旧 599。
3. 真弱夜才更有余地谈是否给旧价（仍是让步，不是权利）。已发生 no-show 走 P54；未来收窗走 P38。不要把 BAR dump 到 399「好让他别纠缠恢复」。
```

尺（Hypothesis；14/599/399/799 只 Simulation）：公开灵活 **Hold 779–799 首选 799**。禁止一夜 −15%。禁止 BAR→399。禁止 Ahead 自动认旧 599。本店 Reinstate 是否带原价 = **NV**。

Vendor 指针（不写成华住 SOP）：

- OPERA Cloud *Reinstating Reservations*（A Vendor PMS，§52）：取消可 Reinstate；扣库存；关房价码/超售需权限。
- OPERA Cloud *Reinstating Cancelled Reservations*（Reservation Sales，§52）：原房型/房价不可用时开 Availability，须选**新**房型与房价组合——证明「回写旧价」不是厂商强制；**不是**本店必须认旧价的许可证，也不是华住字段表。

本店 Reinstate 是否带原价 / 华住字段 / 罚金% / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①是同一笔 Reinstate 还是取消后新单；②过账/拟恢复价 vs 当前公开 BAR；③Pace / Remaining（Ahead 稀缺还是 Behind）。

先问（缺则标 NV，不停）：

- Stay Date、DTA、DOW；Remaining；Pace（Ahead / On / Behind）
- 原取消时间、原房价、当前公开 BAR
- FO 动作：点了 Reinstate？还是客人要「按原价恢复」口头请求？
- 系统是否已把历史价写回（形 B）
- 本店政策：Reinstate 是否必须带原价（**NV**）
- 用户原话：「按原价恢复吧」「系统把旧 599 写回来了」「BAR 已经 799 还认不认」「不恢复他就去订 399」

本店 Reinstate SOP / 华住字段 / 罚金% / 佣金% = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「同单恢复还是新单、Ahead 还是弱」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 同一确认号/同记录恢复，还是取消后另开新单？ | 新单更低价 → **P62**；同单 → 本剧 |
| D2 | 拟恢复价 / 已回写价 < 当前公开 BAR？ | 是 → 形 A/B 价差 |
| D3 | Pace Ahead / Remaining 薄？ | Ahead → 默认拒旧低价 |
| D4 | 拟议是否「BAR→399 让他别纠缠」或「自动认旧 599」？ | 形 C；拒绝 |
| D5 | Pace Behind + remaining 厚？ | 形 D；可谈例外，标 exception |
| D6 | 当天没到（无取消记录）？ | **P54** |
| D7 | 用户其实在谈新生产免费窗？ | **P38** |
| D8 | 只有取消潮、无人要恢复？ | **P14** Soft |
| D9 | 「399」来自错价/嵌套/不可比？ | **P60/P64/P36** |

## 3. Decision Tree（过程）

```text
FO/GM：「取消又后悔按原价恢复 / 系统写回旧价 / BAR 799 还认旧 599 / 不恢复就订 399」
  → 先问：同一笔 Reinstate 还是取消后再订新单？（D1）
       新单更低价 → P62
       同一笔恢复
            → Pace Ahead / 仍紧？
                 是 → 形 A：拒旧低价；给当前 779–799 首选 799；Hold 公开 BAR
                 否（真 Behind + remaining 厚）→ 形 D：可谈旧价例外；标 exception；不当新 BAR；仍禁 399 与一夜 −15%
            → 系统已写回历史价 → 形 B：改到当前价或当新单按当前价；顾问不代点
            → 「怕他订 399」→ 形 C：Hold Brand.com；查 399 是否围栏/错价
       当天没到 → P54；Soft 潮无恢复请求 → P14；未来收窗 → P38
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（若客人要回来：按当前可售，不按旧价）
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     Ahead 不把稀缺房按过期低价占回
Restriction Action:   今夜不因纠缠新开 dump；**未来**高峰日期评 P38
Channel Action:       不把 Brand.com dump 到 399「安抚」
Policy flag:          Reinstate 是否带原价 = **NV**（问本店；顾问不代点）
Staging:              第一刀 = 拆 Reinstate vs 新单 + Ahead 拒旧价给当前 + 政策问句。24h 看 reinstate-rate-gap
Do-not-do:
  - Ahead 自动认旧低价（sim 599）
  - BAR → 399「别纠缠」
  - 一夜 −15%
  - 编华住 Reinstate SOP / 罚金% / 佣金% / 699
  - 顾问代操作 PMS Reinstate
  - 开 P66
```

真实酒店若当前 BAR 不在该带，保留 **拒旧低价 + 给当前可售** 方向，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「Ahead 拒旧价；给当前 BAR；问 Reinstate 政策」**，不要 **「系统写回啥就认啥」**。

顾问对 GM / 前台三句回话：

> 「先问是同一笔恢复还是取消后再订新单。后者走取消重订剧。」
> 「Ahead 就别按旧低价占房，按当前价；不要怕 399 就把公开价砸了。」
> 「真弱才谈例外，标让步。没到走 no-show 剧。不编华住 Reinstate SOP。」

## 5. Why

1. **用了哪些数据（Fact）：** OPERA：取消可 Reinstate；原房型/房价不可用时须选新组合（A Vendor PMS，§52）。店内：原价、当前 BAR、Pace、Remaining、是否同记录 = 用户。本店政策 = 用户或 NV。
2. **逻辑链：**
```text
同单按旧低价恢复 = 用过期价格占当前稀缺库存
≠ 客人权利
≠ 必须跟随 PMS 历史回写
Ahead + remaining 薄 → 机会成本高 → 默认当前价
「怕订 399」→ dump Brand.com = 奖励纠缠，且 399 常是围栏/错价
弱夜让步 = exception，不是新 BAR、不是权利
未来：P38 收新单免费窗，减少「取消再回来」空间
新单更低价 → P62；没到 → P54；Soft 潮 → P14
```
3. **理论 / 卡：** P01 Ahead；P05 leftover；P62 新单套利；P54 no-show；P38 窗口；P45 早会；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「Ahead 不自动认旧低价」方向；无弹性系数；无中国 Reinstate% Fact。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | Ahead 拒旧价可能少一间旧价回流；公开栏仍可按当前价卖 |
| ADR | 认旧价直接稀释；按当前价保护 ADR |
| RevPAR | Hold/当前价路径随 ADR；399 dump 压 RevPAR。不编精确增收 |
| Pickup | 分：同单恢复 vs 新单；净 ADR |
| Conversion | 用 `reinstate-rate-gap.md` 计数；**无默认 %** |
| Net Revenue | 佣金/罚金 NV；不算假精确净额 |
| Profit | Unknown。不编 GOP |

允许的写法：若 Ahead、拒旧价、公开 BAR Hold、客人按当前价回或放弃 → 方向成立。若 Behind 厚且给了标 exception 的旧价 → 记让步，不当新 BAR。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 训练「取消再回来」 | 认旧价成默认 | reinstate @ 旧价↑ | 形 A；Ahead 拒 |
| 系统回写当政策 | FO 以为必须认 | 历史价自动回 | 形 B；改当前价 |
| 399 写穿 | BAR→399 | 公开栏 | 拒绝 |
| 与 P62 混 | 新单当同单 | 新确认号 | →P62 |
| 与 P14 叠 | Soft 潮当恢复权 | 无人要恢复 | →P14 |
| 真弱被拒太硬 | 确 Behind | Pace/Remaining | 形 D 例外；仍禁 399 |
| 政策真空 | 前台各认各的 | Reinstate 口径 | 问 NV；不编 SOP |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| Reinstate 件数（同记录） | 当日 / 24h | 确认号同否 | 用户 |
| 过账价 vs 当前 BAR | 同批 | gap；见 reinstate-rate-gap | 用户 |
| 公开 BAR 是否被 dump 到 399 | 即时 | 是否仍 Hold | 用户 |
| Pace / Remaining | 即时 | Ahead 否 | 用户 |
| 本店 Reinstate 是否带原价 | 即时 | 有则按政策；无=NV | 用户 |
| 未来高峰免费取消窗 | 前瞻 | P38 | 用户 |

默认最少 5 个：同单 vs 新单、过账价 vs BAR、Pace、公开 BAR、政策是否已知。

## 9. Re-evaluation Trigger

- 发现是取消后新单更低价 → **P62**
- Pace 转为真 Behind 且厚 → 形 D 例外可谈；仍禁 399 与一夜 −15%
- 当天没到为主 → **P54**
- Soft 潮无人要恢复 → **P14**
- 用户给出本店 Reinstate 政策 → 在建议里引用政策原文，仍不代操作
- 「399」实为错价/嵌套 → **P60/P64**；不可比 → **P36**

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 Reinstate 是否带原价 / 华住字段 / 罚金% / 佣金% 全部 NV；799/599/399 是 Hypothesis/Simulation。
为什么不是 Low：同单旧价恢复 ≠ 权利可证伪；OPERA「原价不可用须选新价」支撑「回写不是强制」；与 Ahead 不烧稀缺同向；第一刀（拒旧价 + 给当前 + 问政策）可逆。
因此怎么用：先拆 Reinstate vs 新单；Ahead 拒旧价；不 399；弱夜才例外；政策 NV。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-reinstate-sat.md`：周六 Pace Ahead remaining **14**、BAR **799**；客人今早取消原价 **599**，要 FO Reinstate 回 599；FO 怕他去订 OTA **399** → **不按 599 恢复**；给当前 **779–799 首选 799**；Hold 公开 BAR；不要 dump 到 399。14/599/399/799 **Simulation only**。599 = Ahead 上**被拒的旧价**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 22:17 CST | 首版。P65。Reinstate≠必须认旧价；Ahead 拒旧价给当前；拒 399/599；政策 NV。20:17 不规定 → 本 scout 核实后开。未开 P66。 |

## 13. 交叉（2026-08-28 02:17，不改六形）

RMS 建议 dump ≠ 取消后按原价恢复。系统建议走 **P66**。本剧仍管同一笔 Reinstate vs 当前 BAR。

| 2026-09-06 16:17 CST | Fixed/Override deepen **evaluated → skip**（S06-14 leftover；主闸仍 P66）。§152 复核加强 Watch；本剧三句 / 399 / 799 **不改**。全文 `research-log/2026-09-06-1617-theory-skip-fixed-override.md`。不开 P88。 |

> 指针（2026-09-06 16:17 T06-16，不改正文三句 / 399 / 799）：Fixed Rate / Amount Override 误读主闸仍 **P66**；旧价回写仍本剧。Hold 779–799 首选 799；拒 399；不发明 699。T06-16 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 18:17 C06-18，不改正文三句 / 399 / 799）：Fixed/Amount Override 误读主闸仍 **P66**；旧价回写仍本剧。专拍 Simulation `cases/sim-2026-fixed-override-misread-sat.md`；§153。Hold 779–799 首选 799；拒 399；不发明 699。T06-16 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 20:17 R06-20，不改正文三句 / 399 / 799）：Fixed/Amount Override / Manual Price / Change Prices 误读主闸仍 **P66**；旧价回写仍本剧。§154 Clock/Apaleo/Protel 源钉。Hold 779–799 首选 799；拒 399；不发明 699。T06-16 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 22:17 S06-22，不改正文三句 / 399 / 799）：Refresh Rate / Update rates / Mass Update 旧单同步误读主闸仍 **P66**；旧价回写仍本剧。§155。Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

| 2026-09-07 00:17 CST | Mass Update / Refresh deepen **evaluated → skip**（S06-22 leftover；主闸仍 P66）。§155 复核加强 Watch；本剧三句 / 399 / 799 **不改**。全文 `research-log/2026-09-07-0017-theory-skip-mass-update-refresh.md`。不开 P88。 |

| 2026-09-07 02:17 CST | C07-02 Mass Update / Refresh misread Simulation drafted（主闸仍 P66）。§156；本剧三句 / 399 / 799 **不改**。全文 `research-log/2026-09-07-0217-mass-update-refresh-case.md`。不开 P88。 |

> 指针（2026-09-07 00:17 T07-00，不改正文三句 / 399 / 799）：Mass Update / Refresh Rate / Update rates 误读主闸仍 **P66**；旧价回写仍本剧。Hold 779–799 首选 799；拒 399；不发明 699。T07-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-07 02:17 C07-02，不改正文三句 / 399 / 799）：Mass Update / Refresh Rate / Update rates 误读主闸仍 **P66**；旧价回写仍本剧。专拍 Simulation `cases/sim-2026-mass-update-refresh-misread-sat.md`；§156。Hold 779–799 首选 799；拒 399；不发明 699。T07-00 deepen **已 skip**。不开 P88。不开 P89。

| 2026-09-07 04:17 CST | R07-04 sources-recap（主闸仍 P66；§157 互补源）。本剧三句 / 399 / 799 **不改**。全文 `research-log/2026-09-07-0417-sources-recap.md`。不开 P88。 |

> 指针（2026-09-07 04:17 R07-04，不改正文三句 / 399 / 799）：Mass Update / Refresh·Update / Bulk Update Rate 误读主闸仍 **P66**；旧价回写仍本剧。Hold 779–799 首选 799；拒 399；不发明 699。§157。T07-00 deepen **已 skip**；C07-02 已写。不开 P88。不开 P89。

> 指针（2026-09-16 08:17 T16-08，不改正文三句 / 399 / 799）：Linked/Party · Copy Reservation deepen **theory-skip**；§175 复核 only。连单/Party / 克隆作业 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-0817-theory-skip-linked-copy.md`。

> 指针（2026-09-16 10:17 C16-10，不改正文三句 / 399 / 799）：Linked/Party · Copy Reservation · Rate Season · Preferences/VIP misread Simulation `cases/sim-2026-linked-party-copy-misread-sat.md`；§176 CASE 指针复述 §175。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-08 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-16 12:17 R16-12，不改正文三句 / 399 / 799）：Linked/Party · Copy · Season · VIP 互补源 §177 — Protel Copy reservation（克隆不复制 Linked profiles）+ Apaleo Training Kit Copy/Amend（Search rates）+ Cloudbeds Guest Statuses（VIP=internal label）新开。克隆作业 / 改期复核 / VIP 标签 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-08 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-16-1217-sources-recap.md` · `sources/source-map.md` §177。

> 指针（2026-09-16 16:17 T16-16，不改正文三句 / 399 / 799）：Confirmation / Stationery · Profile Merge deepen **theory-skip**；§178 复核 only。确认函/并档/预办入住·快退房/改单日志 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P65**（+ **P86**/P01）/ **P08**（+ **P45**/P01）/ **P45**（+ **P01**/P46/P54/P67）/ **P45**（+ **P01**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-1617-theory-skip-confirmation-merge.md`。
