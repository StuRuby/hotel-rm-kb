# Playbook P61｜付费升房 / 前台 Upsell（不要免费送掉可卖差价）

> 资产：Advisor Playbook
> 路径：`advisor-playbooks/paid-upsell-upgrade.md`
> BACKLOG：P61 付费升房 / 前台 Upsell · HIGH · 先决策卡（本轮同开）· slug **paid-upsell-upgrade**
> 状态：**drafted**（2026-08-27 06:17 CST）
> 配套卡：`recommendations/dont-give-away-paid-upgrade.md`（主卡；本剧不另开第二张卡）
> 轻指标：`metrics/upsell-take-rate.md`（offers made / accepted / revenue；free vs paid split；**无默认 take-rate %**；本店升房价表 NV）
> 理论：T-Upsell `theory/paid-upsell-differential.md`（空差价是可卖的；本剧过程不重写）· T19 `theory/profit-contribution.md`（升房加价仍是贡献）· P49 `loyalty-award-upgrade.md`（免费 SA ≠ 付费升）· P13 `room-type-compression.md`（卖梯保护 ≠ 前台报价）· P34 `room-type-differential.md`（倒挂症状）· P05 `last-minute-unsold.md`（真弱才 dump）
> 交叉：P49 免费精英升 ≠ 本剧付费；P13 房型压缩保护；P34 倒挂；P47 Comp 送房；P42 walk-in 口价；P05 leftover dump；P02/P19 弱市围栏促销；P01/P03 标准紧时 Hold；T19 贡献口径
> 问题树：§68 「套房空着不是免费升的理由」
> 仿真：`cases/sim-2026-paid-upsell-sat.md`（**Simulation**）
> 证据等级：A Vendor PMS（OPERA Cloud 26.1 Reservation Upgrade Rules：From/To 房型、Formula Flat/%、Transaction Code 单独过账；Managing Upgrade Offers：前台可见报价、升房费可分码/可排除旅行社佣金、Upsell 报告 — §44）；B / Hypothesis（高峰默认付费报价；779–799 / 套房 979–999；+150–300 只 Simulation）
> Last Verified：2026-08-27
> 知识类型：Vendor Methodology + Best Practice + Hypothesis
> Advisor-First：只建议先问标准紧不紧 / 套房剩几间 / 付费还是会员免费升；高峰默认报价付费升；Hold 套房与标准公开 BAR；**不操作 PMS / RMS / OTA / 前台收银**，不自动定价，不代录升房单。
> 禁止：发明华住升房价表、默认 +¥ 行业常模当 Fact、佣金%、弹性、Walk $、699；一夜 −15%；套房 BAR→399「反正空着」；高峰默认免费送；把 180/4/10/799/999/399/+200–300 当市场 Fact；开 P62。
> 04:17「不要规定 P61」= recap 槽不得指定；本 scout 核实付费升房缺口后开。

---

## 0. 一句话

**空着的套房差价是可卖的，不是必须送掉的人情。** 先问标准是否紧、套房剩几间、客人是付费升还是会员免费升。会员免费升走 P49。高峰或标准已紧：前台默认**报价付费升**，不要默认免费送。不要把套房公开 BAR dump 到 399「反正空着」。弱夜付费升仍优先于免费送；真要刺激走有围栏的套房促销（P02/P19）。本店升房价表 / 华住 upsell SOP = **NV，不编**。

完成定义：一张「先拆付费 vs 免费升 → 高峰报价付费升 → Hold 套房/标准 BAR → 弱市仍优先付费 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 套房空着免费升** | 「反正空着，免费升了得了」 | 高峰/标准紧时送掉可卖差价 | 高峰默认**付费报价**，不默认送 |
| **B 标准满降套房清库存** | 「标准卖满了套房降到 399 出」 | leftover 借口砸公开梯 | 先试付费升 + **Hold 套房 BAR**；真弱才 P05 |
| **C 意思一下 50** | 「客人要升，给个 50 块意思一下」 | 象征价远低于类型差 | 报价贴近类型差 / 本店价表；价表 **NV**，不编行业表 |
| **D 免费精英升当付费** | 金卡「升套房」当本剧 | 空间可用免费升 | **P49** |
| **E 升房收入不算** | 「升房不算业绩，别麻烦」 | 假口径挡贡献 | 仍是贡献（**T19**）；口径 NV 但不因此送掉 |
| **F 误入** | 压缩保护 / 倒挂 / Comp / walk-in | 别的剧本 | **P13** / **P34** / **P47** / **P42** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问今晚 **标准是否紧、套房剩余几间、客人是不是付费升还是会员免费升**。会员免费升走 P49。空着的套房差价是可卖的，不是必须送掉的人情。本店升房价表 / 华住 upsell SOP = **NV**，不编。
2. 高峰或标准已紧：前台默认 **报价付费升**，不要默认免费送。升房加价带用 Hypothesis/Simulation（例如 +150–300 或套房 BAR 与标准 BAR 的差价区间 — 只在仿真里落地数字，不写成中国行业 Fact）。套房公开 BAR Hold 779–799 首选 799（若套房在卖）或按本店梯队；不要把套房 dump 到 399「反正空着」。
3. 弱夜套房厚、标准也松：付费升仍优先于免费送；真要刺激走有围栏的套房促销（P02/P19），不是把标准客免费升完。升房收入进附营/房费口径问本店（NV）。不要用免费升房冒充 OCC 策略。
```

独立默认（本库 Hypothesis）：高峰/标准紧 → **付费升是默认**，免费升是例外（走 P49 规则）。OPERA Cloud（A Vendor PMS，§44）：升级规则把 From→To 房型与 **升级加价公式** 配在规则里，升房费可走**单独 Transaction Code**——证明付费升是可配置的销售过程，不是「空着就送」。UI 字段是 OPERA 的，**不是**华住/本店升房价表。缺本店升房价表 → **问，不编**。

尺（Hypothesis；799/999/+200–300/399 只 Simulation）：标准公开 **Hold 779–799 首选 799**；套房公开（若在卖）**Hold 979–999 首选 999**（Simulation）或按本店梯队。禁止套房 BAR→399。禁止一夜 −15%。+150–300 / 差价区间 **只允许出现在 Simulation**，不是中国行业 Fact。

Vendor 指针，不在本剧重写成中国 SOP：

- OPERA Cloud 26.1 *Configuring Reservation Upgrade Rules*（A Vendor PMS，§44）：From/To 房型或房类；Formula = Flat Amount / % of Difference / % of Original；可按 OCC 档设加价；Transaction Code 过账升房收入。
- OPERA Cloud 26.1 *Managing Reservation Upgrade Offers*（A Vendor PMS，§44）：预订/入住可见升房报价；升房费可与房费分码、可排除旅行社佣金；`resupsell` 报告跟踪转化。
- HSMAI Sales Acumen Glossary：Upgrade = 不另收费；Upsell = 鼓励付更高价（PDF 本轮超时 → 指针，不当核页）。

本店升房价表 / 华住 upsell SOP / 佣金% / 升房收入进附营还是房费 = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①标准剩余是否紧；②套房（或更高型）剩余几间；③这次是**付费升**还是**会员/精英免费升**。不要把「套房空着」写成必须送。

先问（缺则标 NV，不停）：

- 今晚标准 Remaining / Pace（Ahead / On / Behind）
- 套房（或目标升型）Remaining；套房公开 BAR 是否在卖
- 客人是付费升还是会员免费升 / 已确认升级奖（免费 → **P49**）
- 本店升房价表或前台加价带（缺则 **NV**，用 Hypothesis/Simulation 带，不编华住表）
- 用户原话是想 **免费送**、**意思一下 50**、还是 **套房 dump 到 399**
- 升房收入进附营还是房费 = **NV**（有则用户读；无则不挡「仍要推付费升」）

用户原话包括：「反正套房空着，免费升了得了」「前台说客人要升，给个 50 块意思一下」「标准卖满了套房降价出」「升房收入不算，别麻烦」。

本店升房价表 / 华住 upsell SOP / 佣金% = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「付费还是免费、标准紧不紧、套房剩不剩」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 付费升还是会员/精英免费升 / 已确认升级奖 | 免费 → **P49**；付费 → 本剧 |
| D2 | 标准 Remaining 是否紧 / Pace | 紧或 Ahead → 高峰默认付费报价（形 A） |
| D3 | 套房 Remaining 与套房公开 BAR | 空 ≠ 必须送；空 ≠ 必须 dump 到 399 |
| D4 | 拟议是免费送 / 50 意思 / 套房→399 | 形 A/C/B；后两拒 |
| D5 | 是否房型压缩关型问题 | 关型/卖梯 → **P13**；本剧是报价 |
| D6 | 是否套房公开价已倒挂低于标准 | 产品梯 → **P34**；升房加价仍本剧 |
| D7 | 是否无关 Comp / 请客房 | **P47** |
| D8 | 是否 walk-in 跟 OTA dump | **P42** |
| D9 | 「升房不算」是否挡推 | 形 E；T19 仍贡献；口径 NV |
| D10 | 弱夜套房厚且标准也松 | 付费升仍优先；真刺激 → P02/P19 围栏，不是免费升完 |

## 3. Decision Tree（过程）

```text
前台/销售/GM 喊「反正套房空着免费升 / 意思一下 50 / 标准满了套房降到 399 / 升房不算别麻烦」
  → 先问：付费升还是会员免费升？（D1）
       会员免费 / SA / 已确认升级奖
            → P49（高峰停 SA 免费升；套房留给能付的人）
       付费升或「客人要升、问收多少」
            → 标准紧或高峰？
                 是 → 形 A：默认报价付费升；Hold 套房/标准 BAR；禁免费默认送；禁套房→399
                 否（弱夜套房厚、标准也松）→ 付费升仍优先；真刺激 → P02/P19 围栏套房促销，不是免费升完
            → 「意思一下 50」→ 形 C：贴近类型差 / 本店价表（NV）；不编行业表
            → 「标准满套房降价清」→ 形 B：先付费升 + Hold 套房 BAR；真弱才 P05
            → 「升房不算」→ 形 E：仍推；口径问本店（NV）
       房型压缩关型 → P13；倒挂 → P34；Comp → P47；walk-in dump → P42
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            标准（被升）→ 套房/更高型（升到）
Rate / Rate Plan:     标准公开灵活 BAR；套房公开 BAR（若在卖）；升房加价 = 本店价表或 Hypothesis/Simulation 带
Current Value:        用户值
Recommended Range:    标准 Hold 779–799；套房公开（若在卖）Hold 979–999（Simulation）或本店梯队
Preferred (首选):     标准 799；套房 999（Hypothesis / Simulation）
Inventory Action:     不因「套房空着」默认免费送；不因「标准满」把套房 dump 到 399
Restriction Action:   今天不因升房新设 MinLOS
Channel Action:       套房公开栏 Hold；弱市套房促销走 P02/P19 围栏，不是免费升完标准客
Staging:              第一刀 = 确认付费 vs 免费 + 高峰付费报价 + Hold BAR。24h 看付费升接受与套房公开 Pickup
Do-not-do:
  - 高峰默认免费送
  - 套房 BAR → 399「反正空着」
  - 一夜 −15%
  - 编华住升房价表 / Fact +¥ 行业常模 / 佣金% / 699
  - 用免费升房冒充 OCC 策略
  - 开 P62
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向 + 付费升默认**，不把 779–799 / 979–999 当市场 Fact。升房加价数字只在仿真落地，不写进中国行业 Fact。

早会带走一个动作（P45）：通常是 **「前台默认付费升，套房公开 Hold」**，不要 **「反正空着全免费升」** 或 **「套房砸到 399」**。

顾问对 GM / 前台三句回话：

> 「先问标准紧不紧、套房剩几间、付费升还是会员免费升。会员免费走 P49。空着的差价是可卖的。」
> 「高峰默认报价付费升，不要默认送。套房公开 Hold，不要砸到 399。」
> 「弱夜付费升仍优先；真刺激走围栏促销。升房收入口径问本店，但不因此不推。」

Vendor 机制（建议用语，不是操作手册）：OPERA 页证明「付费升可以有规则、有加价公式、有单独过账码」。顾问可以说「本店若有升房规则/价表就按表报；没有就用类型差 Hypothesis，不要免费默认送」——**不**写华住后台点击步骤，**不**代录。

## 5. Why

1. **用了哪些数据（Fact）：** OPERA：升级规则含 From/To 与加价公式；升房费可单独 Transaction Code；前台可见报价与 Upsell 报告（A Vendor PMS，§44）。本店价表 = 用户给或 NV。标准/套房 Remaining + Pace = 用户。
2. **逻辑链：**
```text
套房空着 ≠ 剩余价值为零（差价可卖）
+ 高峰免费送 = 用可卖库存换 OCC 虚荣，置换当晚付费升收入
+ 套房 dump 399 = 把公开梯写穿，训练「空着就有今夜价」（邻 P05/P42）
+ 「意思一下 50」= 不贴类型差，长期压低升房 ADR
+ 「升房不算」= 口径问题，不消灭贡献（T19）
+ 会员免费升 = 另一桶（P49），不要和付费升混报
```
3. **理论 / 卡：** T19 贡献；P49 免费 vs 付费；P13 卖梯；P34 倒挂；P05 真弱；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 979–999 / 首选 799·999；「高峰默认付费升」方向；+150–300 只 Simulation；无弹性系数；无华住升房价表 Fact。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 最终售出间夜 | 付费升不承诺把套房 OCC 拉满。免费升抬占用但不抬房费 |
| ADR | 付费升加价抬增量 ADR；免费升与 399 dump 压 ADR |
| RevPAR | Hold + 付费升路径随 ADR；免费升可能 OCC↑、RevPAR 不升。不编精确增收 |
| Pickup | 分：付费升接受数；套房公开栏 Pickup |
| Conversion | 用 `upsell-take-rate.md` 计数；**无默认 take-rate %** |
| Net Revenue | 升房费若排除旅行社佣金（OPERA 机制可配）可能改善净；本店佣金 NV 不算假精确净额 |
| Profit | Unknown。不编 GOP / Walk $。T19：加价仍是贡献候选 |

允许的写法：若 24h 内付费升有接受、套房公开仍 Hold、标准 Pace 仍 Ahead → Hold + 付费升成立。若套房公开真 Behind 且厚 → 再评 P05/P02 围栏，理由写该夜需求，不写「反正空着」。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 混桶免费升 | 金卡 SA 当付费升 | 会籍/升级奖 | 改走 P49 |
| 训练「空着就送」 | 高峰免费默认 | 免费升间夜 | 形 A；改默认付费 |
| 套房公开写穿 | BAR→399 | 公开栏 | 拒绝；399 = 被拒绝的 dump |
| 象征价压梯 | 50 元意思 | 升房 ADR | 形 C；贴类型差 |
| 「不算」停推 | 口径借口 | 报价次数 | 形 E；仍推 |
| 真弱被 Hold 住 | 套房公开确实 Behind | Pace / Remaining | P05/P02 围栏；仍禁 399 与一夜 −15% |
| 与 P13 叠刀 | 该关型却在报价 | 分型 Remaining | 关型走 P13；报价走本剧 |
| 与 P34 叠刀 | 倒挂未修 | 公开差 | 修梯 P34；升房加价仍可报 |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 付费升报价次数 / 接受次数 / 升房收入 | 当晚 / 24h | offers / accepted / ¥ | 用户 |
| 免费升 vs 付费升 split | 当晚 | 桶分开 | 用户 |
| 标准 Remaining / Pace | 即时 | Ahead/On/Behind | 用户 |
| 套房 Remaining / 公开 BAR | 即时 | 是否被砸到 399 | 用户 |
| 本店升房价表是否在用 | 即时 | 有则按表；无 = NV | 用户 |
| 升房收入口径（附营/房费） | 按用户 | NV | 用户 |

默认最少 5 个：付费 vs 免费、标准紧不紧、套房剩几间、套房公开是否 Hold、付费升接受。

## 9. Re-evaluation Trigger

```text
IF 付费 vs 免费 Unknown
  → 先补；会员/SA → P49；付费 → 本剧。倾向不要默认免费送。

IF 高峰或标准紧 + 套房仍有剩余
  → 默认报价付费升。Hold 套房/标准 BAR。禁止免费默认送。禁止套房→399。

IF 「意思一下 50」
  → 形 C。贴近类型差 / 本店价表（NV）。不编行业表。

IF 「标准满了套房降到 399」
  → 形 B。先付费升 + Hold 套房 BAR。真弱才 P05。仍禁 399 与一夜 −15%。

IF 「升房不算」
  → 形 E。口径问本店（NV）。不因此停推。

IF 弱夜套房厚、标准也松
  → 付费升仍优先；真刺激 → P02/P19 围栏。不要免费升完。

IF 房型压缩关型 → P13。倒挂 → P34。Comp → P47。walk-in dump → P42。
IF 提案是套房 BAR→399 或一夜 −15% 「反正空着」 → 拒绝。
```

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店升房价表 / 华住 SOP / 升房收入口径全部 NV；799/999 与 +150–300 是 Hypothesis/Simulation；无弹性；OPERA 页证明「付费升可配置」，不证明本店该加多少。
为什么不是 Low：空着≠必须送可证伪；与 P49 免费/付费分桶同向；与 P05「不要把套房 dump 成 leftover」同向；第一刀（付费报价 + Hold）可逆；Vendor 页给了规则/过账/报告机制。
因此怎么用：先问标准紧不紧、套房剩几间、付费还是免费；高峰付费报价；Hold BAR；不要 399；不要默认送。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-paid-upsell-sat.md`：周六标准 Pace Ahead remaining **4**、套房 remaining **10**、套房 BAR 意图 **999**、标准 BAR **799**；前台要免费升「反正空着」；销售要套房→**399** → **付费升报价**（sim 带 e.g. +200–300 或报套房 BAR）；Hold 套房公开 **979–999 首选 999**；Hold 标准 **779–799 首选 799**；拒免费默认送；拒套房 dump 399。180/4/10/799/999/399/+200–300 **Simulation only**。399 = **被拒绝的 suite dump**。799/999 = Hypothesis/Simulation。

P62 last-line（2026-08-27 10:17 CST）：同住取消再订更低价走 `same-day-cancel-rebook.md`；本剧仍是付费升房。06:17/08:17「不开/不规定 P62」= 当时槽序；P62 已于 10:17 案例槽 drafted。

> 交叉指针（2026-08-28 06:17，不改正文）：同日延退/早到过程走 **P67** `late-checkout-early-checkin`；本剧边界不变。

> 指针（2026-09-07 08:17 T07-08，不改正文三句 / 399 / 799）：RTC / Day Types / Membership Auto Discount deepen **已 skip**。§158 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。库存 vs 计费房型 / 日历临时加减 / TX 过账折扣 ≠ 公开 BAR rewrite。不开 P88。不开 P89。


> 指针（2026-09-07 10:17 C07-10，不改正文三句 / 399 / 799）：RTC / Day Type / Membership Auto Discount misread Simulation `cases/sim-2026-rtc-daytype-misread-sat.md`；§159 CASE 指针复述 §158。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T07-08 deepen **已 skip**。不开 P88。不开 P89。


> 指针（2026-09-15 14:17 S15-14，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio scout-only；§169 新开换房·折扣字段·Open Folio 族。Diagnose handoff **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 指针（2026-09-15 16:17 T15-16，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio deepen **已 skip**。§169 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49**/P45 · **P87** / **P42** · **P69**/P87）；Hold 779–799 首选 799；拒 399；不发明 699。换房作业 / 折扣原因码 / 离店后过账 ≠ 公开 BAR rewrite。不开 P88。不开 P89。

> 指针（2026-09-15 18:17 C15-18，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio misread Simulation drafted（`cases/sim-2026-room-move-discount-openfolio-misread-sat.md`）；§170 CASE 指针复述 §169。Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。

> 源指针（2026-09-15 20:17 R15-20，不改正文三句 / 399 / 799）：§171 新开 Protel Air *How to move a reservation* + Apaleo *SOP Template Amend reservations* + Stayntouch *Check Out With Open Balance*；Apaleo modify stay details 用途升核（§154）；互补 §169–§170。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。
