# Playbook P76｜连住 Stay 3 Pay 2 / 免费晚 / 过账节奏均价 vs 公开 BAR（连住促销均价不是单晚公开 BAR；不要把摊平价写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/stay-pay-promo-vs-bar.md`  
> BACKLOG：P76 Stay-Pay / Free-Night / Posting-Rhythm Avg vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **stay-pay-promo-vs-bar**  
> 状态：**drafted**（2026-08-29 18:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-to-stay-pay-avg.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/stay-pay-avg-vs-public-bar.md`（公开 BAR vs 连住促销均价 vs 过账节奏；**无默认免费晚 %**；本店连住促销 SOP NV）  
> 理论：暂无独立理论卡；Diagnose 先走本剧。邻 **T-Flash**（有窗闪促）/ **T-Package**（含早/套餐）只作交叉，不复写。  
> 理论核源：OPERA Cloud 26.2 About Rate Code Posting Rhythms（过账节奏 = 价码上的免费晚过账，不是改写 BAR）；OPERA Cloud 26.2 Configuring Advanced Rate Code Posting Rhythms（Buy X Get Y Free 促销价码）；OPERA 5.6 Posting Rhythm（促销层、价码级免费晚）  
> 交叉：P21 节假日日历 MinLOS ≠ 本剧「把连住均价写成单晚 BAR」· P40 拒 Sat-only / 不砍周六迁就连住均价 · P69 含早/套餐（餐贡献，不是免费晚摊平）· P73 闪促窗 · P18 报不报平台活动 · P05 真弱 leftover · P01 Ahead Hold  
> 问题树：§83 「连住促销均价/免费晚不是公开 BAR」  
> 仿真：`cases/sim-2026-stay-pay-avg-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 About Rate Code Posting Rhythms：Do Not Post Every X Night 把指定晚过账 0.00；BAR based 价码**不继承** posting rhythm，因为可能有多把 BAR — §74；OPERA Cloud 26.2 Configuring Advanced Rate Code Posting Rhythms：Buy X Nights Get Y Nights Free **促销价码** — §74；OPERA 5.6 Posting Rhythm：designed for promotions at rate-code level — §74）；A 协会（HSMAI Academy Rate Fences：2-night min stay 把某价码围住，不给只住 1 晚的人用 — §74）；C 实践（WebRezPro：Stay 3 Pay 2 是 night-based **促销**策略，不是改写公开 BAR；其 30%/20% 例 **不进 Fact** — §74）  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆连住促销/免费晚/过账节奏 vs 公开灵活单晚 BAR、Hold 公开 BAR、拒绝把摊平均价写成新尺；**不操作** PMS / OTA / 促销后台，不自动定价，不代配 posting rhythm。  
> 禁止：发明华住连住促销 SOP、默认免费晚 %、佣金%、Stay 3 Pay 2 折扣 Fact、699；一夜 −15%；BAR→399「连住均价」；把 14/399/799 当市场 Fact；开 P77；把节假日 MinLOS 当本剧主刀（误入 P21）；把拒 Sat-only 当本剧（误入 P40）；把含早套餐当本剧（误入 P69）。  
> 16:17「不要规定 P76」= theory 槽不得指定；本案例槽核实 14:17 scout #2 连住促销均价缺口后开。

---

## 0. 一句话

**连住 Stay 3 Pay 2 / 免费晚 / 过账节奏摊平均价不是公开灵活单晚 BAR。** 先问这是 **有连住门槛的促销价码**（住 X 付 Y、第 N 晚过账 0.00、Buy X Get Y Free），还是 **要把单晚公开 BAR 改成促销摊平价**。OPERA 的 Rate Code Posting Rhythm 把免费晚钉在 **价码过账**：指定晚住宿过账 0.00，Look to Book 按晚拆开房费/套餐费——**不是把 BAR 改写成三晚均价**。BAR based 价码还不继承 posting rhythm。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「住三付二均价才 399」把 BAR 改写成 399。节假日日历 MinLOS → **P21**。拒 Sat-only / 不砍周六迁就连住均价 → **P40**。含早套餐 → **P69**。闪促窗 → **P73**。报不报活动 → **P18**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店连住促销 SOP / 华住字段 = **NV，不编**。

完成定义：一张「先拆连住促销 vs 公开单晚 → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 促销均价 = 公开 BAR** | 「连住算下来单晚就这个价」 | 用摊平价当尺 | **拆连住促销 vs 公开单晚**；Hold 公开 BAR |
| **B BAR→399「连住均价」** | 「住三付二均价才 399，BAR 改 399」 | 把促销地板写成战略尺 | **拒绝 BAR→399** |
| **C 过账节奏摊平当公开价** | 「免费晚摊平了所以公开价也跟」 | 把价码过账当成改尺 | **过账 ≠ 改 BAR**；免费晚留在促销码 |
| **D MinLOS / 只订高峰单晚** | 「连住所以周六也该便宜」 | 对象是限制/形态，不是改尺 | **P21** / **P40**；仍不改写 BAR |
| **E 含早/套餐当连住均价** | 「套餐连住更划算所以 BAR 跟」 | 餐贡献 ≠ 免费晚 | **P69** |
| **F 真弱 leftover** | 「反正空，按连住地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是有连住门槛的促销价码（住 X 付 Y / 免费晚 / 过账节奏），还是要把公开单晚 BAR 改成促销摊平价。连住促销均价不是公开尺。本店连住促销 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「住三付二均价 / 过账摊平所以跟」。
3. 节假日 MinLOS 走 P21。拒 Sat-only / 不砍周六迁就连住均价走 P40。含早套餐走 P69。闪促窗走 P73。报不报走 P18。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认免费晚 %、无「连住必须打 X 折」、无「过账摊平 = 新 BAR」**。本店连住促销 SOP / 华住字段 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *About Rate Code Posting Rhythms*（A Vendor，§74）：Do Not Post Every X Night = 指定晚住宿过账 **0.00**（例：填 3，住 3 晚则第 3 晚房费过账 0.00）。Look to Book 按晚拆开房费与套餐费（Vendor $ 例 **不进中国 Fact**）。**当价码是 BAR based 时，posting rhythm 不继承**——因为可能有多把 BAR。**过账节奏是价码过账，不是改写公开 BAR。**
- OPERA Cloud 26.2 *Configuring Advanced Rate Code Posting Rhythms*（A Vendor，§74）：Advanced 控制开后可配 **Buy X Nights, Get Y Nights Free 促销价码**；Required Paid Nights + Eligible Free Nights；免费晚发生时 **不记住宿收入**。**是促销价码规则，不是 BAR Type。**
- OPERA 5.6 *Posting Rhythm*（A Vendor，§74）：功能设计给 **promotions**，在价码层定义按连住送免费晚；Look to Book / Rate Info 按晚拆开。**促销层 ≠ 公开单晚尺。**
- HSMAI Academy *Rate Fences*（A 协会，§74）：2-night minimum stay 把某价码围住，不给只住 1 晚的人用。**连住门槛是围栏，不是把单晚 BAR 改成促销均价。**
- WebRezPro *5 Promotional Rate Strategies*（C 实践，2022-03-09 / 更新 2026-08-26，§74）：Stay 3 Pay 2 列为 **discounted/free nights 促销**；深折过勤会伤感知价值。其「每第 3 晚 30% off BAR / 3 晚以上 20% off BAR」**不进中国 Fact**。

本店连住促销 SOP / 华住字段 / 默认免费晚 % / 佣金% / Stay 3 Pay 2 折扣 Fact = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「连住均价 / 住三付二 / 免费晚」是促销价码还是要改公开 BAR；②拟议是「BAR→摊平价 / 过账摊平所以跟」还是「促销留在码里、Hold 公开」；③本店 Pace / Remaining，不是「连住听起来更划算」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 连住促销挂牌 / 客人算出的单晚均价（缺则问，不编）
- 促销是否有 MinLOS / 住 X 付 Y / 免费晚过账；是哪一个价码，不是 BAR Type
- 拟议：BAR 改成连住均价 / 过账摊平所以公开价也跟 / 客人说连住划算所以单晚也得这个价
- 本店连住促销 SOP / 华住字段（NV 不编）
- 用户原话：「住三付二均价才 399，BAR 改成 399」「连住促销算下来单晚就这个价」「过账节奏把免费晚摊平了所以公开价也跟」「客人说连住更划算所以单晚也得这个价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 连住促销/免费晚/过账节奏 vs 公开单晚 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「连住均价 / 摊平所以跟」？ | 形 B；拒绝 |
| D3 | 把 Look to Book 按晚过账 0.00 当成新公开价？ | 形 C；过账 ≠ 改 BAR |
| D4 | 其实是节假日日历 MinLOS / 只订高峰单晚？ | → P21 / P40 |
| D5 | 其实是含早/套餐总价？ | → P69 |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 有窗闪促 / 报不报平台活动？ | → P73 / P18 |
| D8 | 真 Behind leftover？ | → P05；仍不改写 BAR |

## 3. Recommended Action

1. **拆尺**：公开灵活单晚 BAR ≠ 连住促销摊平均价 ≠ 免费晚过账 0.00。促销成交关在促销码/过账节奏，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **过账**：指定晚过账 0.00 是价码记账，不是把 BAR 改成三晚除以三。Look to Book 按晚拆开，不要人工再摊一次当新公开价。
4. **误入移交**：节假日 MinLOS → P21；拒 Sat-only / 不砍周六 → P40；含早套餐 → P69；闪促窗 → P73；报不报 → P18；真弱 → P05。
5. **早会一个动作**（P45）：纠正「连住均价≠BAR」+ Hold 公开 BAR（或问清是哪一个促销码）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认免费晚 %；无 Pace 就因「连住更划算」改尺。

## 4. Why

- Vendor：posting rhythm / Buy X Get Y 钉在 **促销价码过账**；BAR based 还不继承该节奏。设计上就不是把公开 BAR 改成均价。
- Association：连住门槛是 rate fence，把促销围给满足 LOS 的人，不是把单晚公开尺拉齐。
- Advisor：用户说「连住算下来单晚就这个价」时，先问 Pace 与这是不是促销码。摊平价常是 **促销记账**，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住单晚公开 ADR；连住促销成交关在码/过账里，不污染公开尺。
- Risk：误把真弱夜当「连住促销所以 Hold」；或反过来把促销均价当成必须跟的市场价。
- Watch：公开 BAR 是否仍 Hold；连住促销是否仍带 LOS/资格；24h 公开 Pickup vs 连住促销通道 Pickup（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆连住促销/公开，或至少能标 NV 仍 Hold）。点免费晚%/折扣 Low（NV）。Evidence A Vendor + A 协会 + C 实践。

## 7. Simulation 指针

见 `cases/sim-2026-stay-pay-avg-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 18:17 CST | 首版。P76。连住促销均价/免费晚/过账节奏≠公开 BAR；Ahead Hold；拒改尺。16:17 不规定 → 本案例核实 scout #2 后开。未开 P77。 |

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。
> 交叉指针（2026-09-01 16:17，不改正文）：连住促销均价仍本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ P76。不规定 P88。
