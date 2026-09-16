# Playbook P67｜延退 / 早到（同日时段库存；不是砍过夜 BAR）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/late-checkout-early-checkin.md`  
> BACKLOG：P67 延退 / 早到 · HIGH · 先诊断枝（本轮同开）· slug **late-checkout-early-checkin**  
> 状态：**drafted**（2026-08-28 06:17 CST）  
> 配套卡：`recommendations/dont-free-late-checkout-on-peak.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/late-checkout-grant-rate.md`（延退请求 / 免费批 / 收费批 / 拒；早到同理；**无默认费表 %**；本店延退费 NV）  
> 理论：**T-Late** `theory/late-checkout-turnover.md`（同日小时吃周转窗，不是过夜需求尺；过程仍 P67）· Aydin & Birbil 2018 · T07 周转窗 · P63 人手吞吐交叉  
> 交叉：P46 整晚早离/续住 ≠ 同日延几小时 · P44 钟点产品 ≠ 在住延退 · P61 升房加价 ≠ 延退费 · P63 产能顶 · P42 walk-in 干净空房 · P45 早会一个动作 · P01 Ahead Hold  
> 问题树：§74 「延退免费不是砍过夜 BAR」  
> 仿真：`cases/sim-2026-late-checkout-sat.md`（**Simulation**）  
> 证据等级：A 学术（Aydin & Birbil 2018 EJOR：late checkout 占到允许时刻、一般消耗当日产能；可免费或收费 — §56）；A Vendor BE（Exely：加价 / 禁止；availability 防重叠 — §56）；A Vendor PMS（OPERA Cloud Scheduling a Checkout：指定时刻退房 — §56）；C Vendor（Revenue Hub/Roomdex：吃 HK 窗须可交再卖；Guestivo：高峰应收紧 — € 价带不进中国 Fact）  
> Last Verified：2026-08-28  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议高峰不免费大批延退、可拒/限额/收费、过夜 BAR Hold；弱夜可卖付费延退；早到须有交回房。**不操作** PMS / 前台 / 房务 / OTA，不自动定价，不代点延退。  
> 禁止：发明华住延退 SOP、默认延退费、会员免费到几点、€/¥ 费表中国 Fact、佣金%、699；一夜 −15%；BAR→399「客人嫌退房早」；把 14/399/799 当市场 Fact；开 P68；把整晚续住当本剧（误入 P46）；把钟点产品当本剧（误入 P44）。  
> 04:17「不要规定 P67」= recap 槽不得指定；本 scout 核实延退缺口后开。

---

## 0. 一句话

**延退 / 早到吃的是同日周转窗，不是砍过夜 BAR 的理由。** 先问是延几小时 / 早到几小时，还是加一整晚（后者走 P46）或钟点产品（P44）。高峰 / Pace Ahead / 下午到达紧 / HK 窗紧：默认 **不免费大批延退**；可拒、可限额、可报价收费（费表 **NV**）。过夜公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「客人嫌 12 点走」把 BAR dump 到 399。弱夜可卖付费延退作附营，仍不改 BAR。早到须先有交回空房。本店延退费 / 华住字段 = **NV，不编**。

完成定义：一张「先拆同日时段 vs 整晚 → 高峰不免费大批延退 / Hold 过夜 BAR → 弱夜可收费附营 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 高峰免费大批延退** | 「会员/OTA 都说免费延到 16 点」 | 挤 HK 窗 + 挡下午到店 | **拒免费默认**；限额或收费；Hold 过夜 BAR |
| **B 嫌退房早 → 砍过夜 BAR** | 「BAR 砍到 399 让他们高兴早点订」 | 用公开价安抚延退情绪 | **拒绝 BAR→399**；延退另议 |
| **C 弱夜付费延退** | 「反正空，免费也行 / 还是要改 BAR」 | 附营机会，不是弱需求尺 | **可卖付费延退**；Hold BAR；不当新 BAR |
| **D 早到无交回房** | 「客人 10 点到，先占一间」 | 前客未走 / 未转房 | **拒或等 Due Out+转房**；不双卖 |
| **E 钟点 / 加一晚** | 「延退到晚上当钟点卖」「再住一晚友情价」 | 桶混 | **P44** / **P46** |
| **F 人手 / 升房** | 「保洁不够所以免费延」「顺便免费升」 | 桶混 | **P63** / **P61** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是同日延几小时 / 早到，还是加一整晚。延退吃周转窗，不是砍过夜 BAR 的理由。本店延退费 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead / 下午紧 / HK 紧：默认不免费大批延退；可拒、限额或收费。过夜 BAR Hold 779–799 首选 799。不要 BAR→399「嫌退房早」。
3. 弱夜可卖付费延退作附营，仍不改公开 BAR。早到须有交回房。加一晚走 P46；钟点走 P44；产能顶走 P63。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认延退费表**。Guestivo € 价带 / 5% 转化算术 **不**进本库中国 Fact。本店延退费 / 会员权益到几点 = **NV**。

Vendor / 学术指针（不写成华住 SOP）：

- Aydin & Birbil, *Decomposition methods for dynamic room allocation in hotel revenue management*, EJOR 2018（A 学术，§56）：late checkout 占到允许时刻，**一般消耗当日产能**；可免费或小额收费；可作 stay-over 特例建模。不摘公式。
- Exely *How to set an early check-in and late check-out rule*（A Vendor BE，§56）：可设加价或禁止；勾选 availability 时须前夜/次日有空房才可选，避免重叠。
- OPERA Cloud 26.2 *Scheduling a Checkout*（A Vendor PMS，§56）：可指定时刻自动退房；是 FO 时刻/房态动作，不是改过夜 BAR。
- Revenue Hub / Roomdex（C，§56）：延退吃 HK 窗；须确认可交再卖。
- Guestivo glossary（C，§56）：高峰应收紧；淡市可转化。**€ 价带不采用为 Fact**。

本店延退 SOP / 华住字段 / 会员免费时刻 / 费表 = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①是同日延退/早到还是加一整晚；②今晚/今午 Pace + 下午到达 + HK 是否紧；③用户是要「免费批」还是「砍过夜 BAR 安抚」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 今午离店量、下午/晚到到达量；HK 是否已排满上午窗
- 请求：延到几点 / 早到几点；要免费还是可收费
- 当前公开过夜 BAR
- 本店延退费表 / 会员权益（NV 不编）
- 用户原话：「延退免费可不可以」「高峰会不会挡到店」「BAR 砍一点让他们高兴」「早到没房先占」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 同日小时 vs 加一整晚 vs 钟点产品？ | 整晚→P46；钟点→P44 |
| D2 | Pace Ahead / 下午到达紧 / HK 窗紧？ | Ahead+紧 → 形 A |
| D3 | 拟议是否「砍过夜 BAR / BAR→399」？ | 形 B；拒绝 |
| D4 | 弱夜 + 可收费延退？ | 形 C；附营；Hold BAR |
| D5 | 早到时前客是否已 checkout + 转房？ | 未交回 → 形 D |
| D6 | 人手产能顶 / 升房混谈？ | →P63 / P61 |

## 3. Decision Tree（过程）

```text
FO/GM：「延退免费 / 砍 BAR 安抚 / 早到先占」
  → 先问：同日小时还是加一晚？（D1）
       加一晚 → P46；钟点产品 → P44
  → 同日小时：Pace/下午到达/HK 紧吗？（D2）
       Ahead + 紧 → 形 A：不免费大批；限额或收费；Hold 779–799 首选 799
       拟议砍过夜 BAR → 形 B：拒绝 BAR→399
       Behind + 松 → 形 C：可卖付费延退；Hold BAR
       早到无交回 → 形 D：拒或等转房
       产能/升房 → P63 / P61
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活过夜 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（过夜 BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     高峰不免费大批延退；限额；早到不占未交回房
Restriction Action:   无（本剧不是 MinLOS）
Channel Action:       不把 Brand.com dump 到 399「安抚延退」
Ancillary:            弱夜可报价付费延退（费表 NV）；不当新 BAR
Staging:              第一刀 = 拆同日小时 vs 整晚 + Ahead 拒免费大批 + Hold BAR。24h 看 grant-rate
Do-not-do:
  - 高峰默认免费大批延退
  - BAR → 399「嫌退房早」
  - 一夜 −15%
  - 编华住延退 SOP / € 或 ¥ 费表 Fact / 佣金% / 699
  - 顾问代操作 PMS 延退/早到
  - 开 P68
```

真实酒店若当前 BAR 不在该带，保留 **高峰不免费大批延退 + Hold 过夜 BAR** 方向，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「高峰延退限额/收费；过夜 BAR Hold；问费表」**，不要 **「嫌退房早先砍 BAR」**。

顾问对 GM / 前台三句回话：

> 「先问是延几小时还是再住一晚。延退吃的是保洁和下午到店，不是砍价理由。」
> 「高峰别默认免费大批批；可以拒、限额或收费。过夜价先 Hold。」
> 「别因为嫌 12 点走就把公开价砸到 399。弱夜可以卖付费延退，仍不改 BAR。」

## 5. Why

1. **用了哪些数据（Fact）：** Aydin 2018：延退消耗当日产能（A 学术）。Exely：可加价/禁止；可要求次日空房（A Vendor）。OPERA：可排定退房时刻（A Vendor）。店内：Pace、到达、HK、BAR = 用户。费表 = 用户或 NV。
2. **逻辑链：**
```text
同日延退 = 占用上午→下午周转窗
≠ 过夜需求死亡
≠ 砍过夜 BAR 的许可证
Ahead + 下午紧 + HK 紧 → 免费大批 = 置换到店 / 制造等待 / 逼近 Walk
「嫌退房早」→ dump Brand.com = 用公开价买情绪，且训练错误预期
弱夜收费延退 = 附营，机会成本低；仍不是新 BAR
早到无交回 = 双卖风险
整晚 / 钟点 / 产能 / 升房 → 邻剧
```
3. **理论 / 卡：** P01 Ahead；P46 整晚；P44 钟点；P63 吞吐；P45 早会；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「高峰不免费大批」方向；无弹性；无中国延退费 Fact。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | 拒免费延退不直接减过夜 Sold；保护下午到店履约 |
| ADR | 过夜 BAR Hold；收费延退进附营（口径 NV） |
| RevPAR | 不因 399 dump 压过夜 RevPAR。不编精确增收 |
| Pickup | 不因延退情绪改公开价曲线 |
| Ancillary | 用 grant-rate 计数收费 vs 免费；**无默认费** |
| Net / Profit | 费表/佣金 NV；不算假精确净额 |

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 训练免费延退预期 | 高峰默认送 | 免费批↑ / 到店等 | 形 A |
| 399 写穿 | BAR→399 | 公开栏 | 拒绝 |
| 与 P46 混 | 加一晚当延退 | 离店日改 | →P46 |
| 与 P44 混 | 钟点产品 | 时段价码 | →P44 |
| 双卖早到 | 未交回占房 | 投诉/Walk | 形 D |
| 产能顶 | HK 做不完 | Dirty 积压 | →P63 |
| 费表真空 | 前台乱报价 | 口径不一 | 问 NV；不编 |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 延退请求数 / 免费批 / 收费批 / 拒 | 当日 | grant-rate | 用户 |
| 下午到达等待 / 未就绪房 | 当日午后 | 分钟或件数 | 用户 |
| 公开过夜 BAR 是否被 dump | 即时 | 是否仍 Hold | 用户 |
| Pace / Remaining | 即时 | Ahead 否 | 用户 |
| 本店延退费表是否已知 | 即时 | 有则引用；无=NV | 用户 |
| HK 上午窗是否顶 | 当日 | 与 P63 交叉 | 用户 |

## 9. Re-evaluation Trigger

- 实际是加一整晚 → **P46**
- 钟点/day-use 产品 → **P44**
- 人手产能顶主因 → **P63**
- 升房报价 → **P61**
- Pace 转真 Behind 且下午松 → 形 C 可扩收费延退；仍禁 399 与一夜 −15%
- 用户给出费表/会员权益 → 引用原文，仍不代操作

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店延退费 / 华住字段 / 会员免费时刻全部 NV；799/399 是 Hypothesis/Simulation；Guestivo € 不采用。
为什么不是 Low：延退消耗当日产能有学术+多 Vendor 同向；与 Ahead 不烧周转同向；第一刀（拒免费大批 + Hold BAR）可逆。
因此怎么用：先拆同日小时 vs 整晚；高峰不免费大批；不 399；弱夜可收费附营；费表 NV。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-late-checkout-sat.md`：周六 Pace Ahead remaining **14**、BAR **799**；今午大量离店要**免费延到 16:00**，下午到店从 14:00 起；销售想 BAR→**399**「别让差评」→ **不免费大批延退**；过夜 **Hold 779–799 首选 799**；不要 dump 到 399。14/399/799 **Simulation only**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 06:17 CST | 首版。P67。延退≠砍过夜 BAR；高峰不免费大批；弱夜可收费附营；早到须交回；拒 399。04:17 不规定 → 本 scout 核实后开。未开 P68。 |

> 交叉指针（2026-08-28 10:17，不改正文）：开业价过程走 **P68** `new-competitor-opening.md`。三句 / 399-rejected / 799-Hypothesis 不改。不写 P69。

> 指针（2026-09-06 08:17 T06-08，不改正文）：Queue / Pending / Rush / Room Is Ready deepen **theory-skip**（§149 复核）。邻覆盖仍本剧；Diagnose 主闸 **P63**（+ **P67**/P37/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-0817-theory-skip-queue.md`。

> 指针（2026-09-06 10:17 C06-10，不改正文）：Queue / Pending / Rush / Room Is Ready misread Simulation drafted（`cases/sim-2026-queue-pending-rush-misread-sat.md` · §150）。Diagnose 主闸 **P63**（+ 本剧）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-1017-queue-case.md`。
> 指针（2026-09-06 12:17 R06-12，不改正文）：§151 Clock Room Statuses + Apaleo Housekeeping + Protel Housekeeping list 新开（Queue/Dirty 互补源）。Diagnose 主闸仍 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-1217-sources-recap.md`。
