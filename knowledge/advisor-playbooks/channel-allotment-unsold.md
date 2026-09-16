# Playbook P58｜OTA 切房 / 渠道配额卖不掉（不要为消化切房而 dump 公开 BAR）

> 资产：Advisor Playbook
> 路径：`advisor-playbooks/channel-allotment-unsold.md`
> BACKLOG：P58 OTA 切房 / 渠道配额卖不掉 · HIGH · 先决策卡（本轮同开）· slug **channel-allotment-unsold**
> 状态：**drafted**（2026-08-26 18:17 CST）
> 配套卡：`recommendations/dont-dump-bar-to-clear-allotment.md`（主卡；本剧不另开第二张卡）
> 轻指标：`metrics/allotment-pickup.md`（今晚切房间数 vs 已 pickup vs 未还；扣不扣；**无默认 %**；合同条款 NV）
> 理论：T-Guar `theory/guarantee-release.md`（Deduct vs Non-Deduct / 释放是事件）；P52 cutoff 同形不同合同；P20 `channel-net-rate.md`；P18 `china-ota-promotion.md`；P25 `direct-vs-ota-mix.md`
> 交叉：P52 团块 cutoff ≠ 渠道切房合同；P18 促销报名闸；P20 一笔净价 ≠ dump 填桶；P25 mix 配额 ≠ 当夜公开 dump；P27 高峰 opaque 围栏；P01/P05 公开 Pace 仍拥有公开价；P13 房型 nest ≠ 渠道切房；P42 前台不跟 dump；P45 早会一个动作；T-Guar 扣不扣 / 还房时点
> 问题树：§65 「切房卖不掉不是降公开 BAR 的理由」
> 仿真：`cases/sim-2026-allotment-sat.md`（**Simulation**）
> 证据等级：A Vendor PMS（Cloudbeds Allotment：Last Room Available vs Custom Property Allotment；切房只动渠道、不动直销；§38）；A Vendor PMS（OPERA Cloud Channel Sell Limits：按渠道/房型/日设限额，可按可售 %；sold% 阈值可送零；§38）；A Vendor Channel Manager（SiteMinder SiteConnect FAQ：release period 对渠道侧译成 Stop Sell，不是独立「还房」消息；§38 指针）；B / Hypothesis（两桶分开；高峰还房不降公开价；弱夜公开 Pace 才开 P05）
> Last Verified：2026-08-26
> 知识类型：Vendor Methodology + Best Practice + Hypothesis
> Advisor-First：只建议先问扣不扣 / 合同几点还 / 今晚 pickup 几间；Hold 公开 BAR；还或缩未卖切房；释放落地后再评 P01/P05。**不操作 PMS / RMS / OTA extranet / channel manager**，不自动改价，不代客 stop-sell、不代改配额。
> 禁止：发明美团/携程切房 SOP、华住切房政策、还房时点、allotment %、佣金%、弹性、Walk $；一夜 −15%；BAR→399「消化切房」；把 180/12/15/3/399/799 当市场 Fact；把渠道切房写成团 cutoff（那是 P52）；把房型 nest 写成切房（那是 P13）；开 P59（Parity 仍是 T11 缺口，本轮不写）。
> 16:17「不要规定 P58」= theory 槽不得指定；本案例槽核实 T11 切房缺口后开。

---

## 0. 一句话

**切房是合同桶，不是公开需求。** 不要为「消化切房」去 dump 公开 BAR。先问这笔切房扣不扣可售、合同几点还、今晚 pickup 几间。高峰：把卖不掉的切房还给房子（或 stop-sell 该渠道桶），Hold 公开价。弱夜：两桶分开看——公开 Pace 才决定公开价；未卖切房是合同/pickup 问题。Hold 779–799 首选 799（Hypothesis / Simulation）。本店切房规则 / 还房时点 / 美团·携程切房 SOP = **NV，不编**。

完成定义：一张「先问扣不扣 / 几点还 / pickup → 两桶分开 → 高峰还房不降公开价 → 公开真弱才 P05」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰 / 假满房** | 「美团还占着，我们看起来没房了」 | 扣库存的切房把公开可售打薄；OTA 桶里可能空着 | **还或缩未卖切房**，不要砍公开 BAR |
| **B 消化切房 dump** | 「切房卖不掉，公开价降一点一起出」 | 两套价栏、两条需求曲线被揉成一个 OCC | **禁止。** 公开 dump 稀释每一间公开剩余，且未必填满切房桶 |
| **C 高峰关切房放回** | 「高峰把切房关了放回来」 | 这是库存动作，不是降价令 | **对。** Ahead / 紧夜：还房或 stop-sell 渠道桶；公开 Hold / P01 |
| **D 非扣库存** | 切房 15 间「占着」但公开 remaining 已经是真剩余 | Non-Deduct / 不从 house 扣 | 公开走 P01/P05 如常；未卖切房是合同/pickup 问题，**不是 BAR 问题** |
| **E 误入促销 / 净价 / mix / 团** | 报今夜特价冲切房；按毛 ADR 保渠道；mix 配额当夜 dump；团块没 pickup | 别的剧本 | 促销 → **P18**。净价 → **P20**。mix → **P25**。团 cutoff → **P52**。opaque 高峰 → **P27**。房型 nest → **P13** |
| **F 释放后 leftover** | 切房还回来了，公开 suddenly 厚 | 只有释放落地后的真 remaining + Pace | 厚 **且** Pace Behind → 才评 **P05**。理由写该夜公开 Pace，不写「为了消化切房」 |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这笔切房 **扣不扣可售、合同几点还、今晚 pickup 几间**。切房是合同桶，不是公开需求，也不是今晚该砍 BAR 的理由。本店切房规则 / 还房时点 / 美团·携程切房 SOP = **NV**，不编。
2. 高峰：先把卖不掉的切房还给房子，再谈价。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「还占着 15 间」就提前 dump 公开 BAR。
3. 公开桶真弱才走 P05。已发生的团块 cutoff 走 P52；促销报名走 P18；净价比较走 P20；混渠配额走 P25。不要把 BAR dump 到 399「为了消化切房」。
```

独立默认（本库 Hypothesis）：当晚定价用 **公开桶 remaining + 公开 Pace**，不是「切房 + 公开」揉成的一个占用数。Cloudbeds Last Room Available vs Custom Property Allotment、OPERA Channel Sell Limits、SiteMinder release period→Stop Sell = **Vendor 能力，store-configured / contract-configured，不是中国 SOP，不是默认 %**。缺扣不扣 / 还房时点 / pickup → **问，不编美团·携程切房 SOP / 华住政策 / allotment %**。

尺（Hypothesis；15/3/12/399/799 只 Simulation）：过夜 **Hold 779–799 首选 799**。禁止因切房未卖去 dump 公开 BAR。禁止 BAR→399。15 / 3 / 12 / 399 / 799 **只允许出现在 Simulation**，不是行情 Fact，不是新 BAR。399 是被拒绝的 dump，不是推荐 BAR。

Parity / Brand.com 跟切房 dump = P36-adjacent / P23-adjacent，本剧不重写。Rate parity 作为完整剧本 = **T11 仍开缺口，本轮不写 P59**。

---

## 1. Situation

钉 **两只桶**：①公开 / 直销可售（Brand.com、前台、未切的 OTA 自由售）；②合同切房桶（某 OTA / 批发 allotment）。不要揉成一个 OCC。

先问（缺则标 NV，不停）：

- 这笔切房 **扣不扣可售**（Deduct vs Non-Deduct / last-room-availability vs custom allotment — **本店配置 + 合同，NV**）
- 合同 **几点还** / release / cutoff / stop-sell 时点（**NV，不编华住/美团小时**）
- 今晚切房间数 vs **已 pickup** vs 未还
- 公开 remaining + 公开 Pace（Ahead / On / Behind）
- 当前公开 BAR
- 用户原话是想动 **公开 BAR**，还是想还房 / 缩配额 / 关渠道桶

用户原话包括：「切了 15 间卖不掉，公开价降一点一起出」「美团还占着，我们看起来没房了」「高峰把切房关了放回来」。

Vendor 机制指针，不在本剧重写成中国 SOP：

- Cloudbeds（A Vendor PMS，§38）：**Last Room Available** = 全部可售同步到已连渠道，一边卖一边扣；**Custom Property Allotment** = 只把指定数量推到渠道，可少于 PMS 可售。该页 allotment **只动已连渠道，不动** Booking Engine / 电话 / walk-in。不能按渠道设不同 allotment = **该厂商当前限制**，不是行业常数。
- OPERA Cloud Channel Sell Limits（A Vendor PMS，§38）：可按 **渠道 × 房型 × 日** 设限额（绝对值或可售 %）；sold% 阈值可把该渠道送零。
- SiteMinder SiteConnect FAQ（A Vendor CM，§38）：渠道侧 **不单独支持 release period 消息**；店配 release period 对渠道 **译成 Stop Sell**。还房在渠道层常常是关桶，不是改 BAR。

本店切房规则 / 还房时点 / 美团·携程切房 SOP / 华住政策 = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走 D1–D10，但 **切房轴与公开 BAR 轴必须分开打勾**：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 扣不扣可售 | 公开「没房了」是真紧还是切房假满 |
| D2 | 合同几点还 / 会不会还 | 未 pickup 会不会回 house；释放是事件不是预测（T-Guar 同形） |
| D3 | 今晚 pickup 几间 / 未还几间 | 切房桶是空的还是在动 |
| D4 | 公开 Pace | Ahead / On / Behind — **只评公开桶** |
| D5 | 公开 Remaining | 薄 / 中 / 厚；是否被切房扣瘦 |
| D6 | 价格位置 | 公开 BAR vs 竞对；切房价栏 ≠ 公开 BAR |
| D7 | 是否高峰 / Ahead / 紧 | 高峰默认还房，不降公开价 |
| D8 | 渠道/产品 | 有没有人要报促销冲切房（P18）、跟净价（P20）、改 mix（P25） |
| D9 | 是不是团块 | 团 cutoff → **离开，P52** |
| D10 | 是不是房型 nest | 某房型卖穿 → **离开，P13** |

```text
Fact:
- 用户声称有一笔渠道切房；公开 BAR 与切房 pickup 若给出则记下
- Vendor：切房可以是 LRA 池，也可以是独立限额；可以扣 house，也可以不扣（店配/合同）

High-probability:
- 主机制是把合同桶误当成公开需求，试图用公开 BAR dump「消化切房」
- 高峰第一刀是还/缩未卖切房，不是砍 BAR

Hypothesis:
- 779–799 首选 799 的过夜带（Simulation / 启发式）
- 释放落地后若公开变厚且 Behind，才轮到 P05

Unknown / NV:
- 本店扣不扣、还房时点、美团·携程切房 SOP、合同罚则、佣金%、弹性
```

**主诊断：** 把合同切房桶与公开需求揉成一个占用数，误用公开 BAR 去填渠道配额。
**次诊断：** 公开桶可能真 Ahead 或真 Behind；可以 Hold 或 bounded move，但理由必须是 **该夜公开 Pace / Remaining**，不是「切房还占着」。问题树 §65。

## 3. Revenue Opportunity / Risk

主机会：高峰夜保住公开 remaining 的 ADR，把卖不掉的切房还回 house（或 stop-sell 该桶），让公开可售恢复为真剩余。主风险：为消化切房 dump 公开 BAR——稀释每一间公开剩余，且客人可能改走更便宜的公开栏，**切房桶仍然空着**。

消化切房的算术（形状，**不是弹性模型**；数字只进 Simulation）：

```text
公开 remaining = R_pub
拟议公开 BAR：P0 → P1（P1 < P0）
稀释上限形状：R_pub × (P0 − P1)     # 若剩余公开间夜全按新 BAR 成交；不得假设全卖
切房未还 = A_unpicked
```

砍公开价 **不保证** A_unpicked 被填满：两套价栏。公开更便宜时，增量需求可以全部走公开，切房合同桶继续空。没有弹性系数就只写这个方向，不编「会多卖几间」。

12 项扫描（顾问过程第三节）：O7 Inventory 适用（还/缩切房）；O9 Channel 适用（不要用公开 dump 填渠道桶）；O1/O2 只按 **公开 Pace** 判；O12 Group 不适用（那是 P52）。其余按夜。

```text
主机会：还/缩未卖切房，公开 Hold | 高峰 I 高、C Medium、U 高
主风险：公开 dump 稀释 + 切房仍空
明确不适用：按切房 OCC Increase BAR；BAR→399；一夜 −15%；开 P59 parity
```

## 4. Recommended Action

杠杆顺序：

1. **先问扣不扣、几点还、今晚 pickup 几间。** 缺则条件化，不编 SOP。
2. **两桶分开。** 公开 remaining × 公开 Pace 是定价输入；切房桶是合同/库存输入。
3. **若扣库存且未卖切房仍占着 → 还或缩该桶**（release / shrink / stop-sell 渠道限额）。顾问只建议，不操作系统。
4. **高峰 / Ahead / 薄 remaining：公开 Hold。** 区间 779–799，首选 799（Hypothesis / Simulation）。不要因为「还占着 N 间」提前 dump。
5. **非扣库存：公开已经是真剩余。** 未卖切房走合同/pickup，不改 BAR。公开仍按 P01/P05。
6. **释放落地后再打分。** 若公开变厚 **且** Pace Behind → P05 bounded；理由写该夜公开 Pace，不写「消化切房」。
7. **误入移交。** 报名冲切房 → P18。净价保渠道 → P20。mix 配额战略 → P25。团 cutoff → P52。opaque 高峰 → P27。房型 nest → P13。前台跟 OTA dump → P42。Parity 跟切房 dump → 记下 T11 缺口，**不开 P59**。

```text
Stay Date:            用户给定的今夜
Room Type:            未知则先动 BAR / 基础售卖房型
Rate / Rate Plan:     公开 BAR（及与 BAR 连动的公开价）
Current Value:        用户值
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     高峰：还/缩未卖切房，或 stop-sell 该渠道桶。不关公开 BAR
Restriction Action:   今天不因切房新设 MinLOS
Channel Action:       不为消化切房报深折（报名仍走 P18）；不为填桶改 mix 战略（P25）
Staging:              第一刀 = 还房 + 公开 Hold。释放落地后 24h 用公开 Pace 再评
Do-not-do:
  - BAR → 399「消化切房」
  - 一夜 −15%
  - 把切房价栏写成新公开 BAR
  - 编美团/携程切房 SOP / 还房小时 / allotment %
  - 开 P59
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向**，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「今晚高峰还 N 间切房」** 或 **「公开价 Hold」**，不要两刀同时（又还房又砍 BAR）。

顾问对 GM / 电商三句回话：

> 「先问这笔切房扣不扣可售、合同几点还、今晚 pickup 几间。切房是合同桶，不是公开需求，也不是今晚该砍 BAR 的理由。」
> 「高峰先把卖不掉的切房还给房子。公开价 Hold 在 779–799，首选 799。不要因为还占着就 dump。」
> 「公开桶真弱才走 leftover 围栏。不要把 BAR 砍到 399 为了消化切房。」

## 5. Why

1. **用了哪些数据（Fact）：** Vendor 能核的是「切房可以独立于公开可售」（Cloudbeds Custom Allotment；OPERA Channel Sell Limits）以及「还房对渠道常常是 Stop Sell」（SiteMinder FAQ）。本店扣不扣 / 几点还 / pickup = 用户给的，或 Unknown。
2. **逻辑链：**
```text
切房 = 合同分配（有时扣 house，有时独立限额）
+ 未 pickup ≠ 已卖掉的公开需求
+ 高峰公开 Pace Ahead 或 remaining 被切房扣瘦
→ 第一刀是还/缩切房桶，不是砍公开 BAR
→ dump 公开 BAR 稀释 R_pub 的每一间，且可能把需求从切房栏转移到更便宜的公开栏
→ 切房仍空 + 公开 ADR 被砸 = 两头输
```
3. **理论 / 卡：** T-Guar（扣不扣、释放是事件）；P52 同形不同合同（团块 vs 渠道合同）；P01/P05 公开 Pace 拥有公开价；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「客人会改走公开栏」是方向 Hypothesis，无弹性系数。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 最终售出间夜 | 还房提高公开可售；不承诺切房会被公开需求填满。已售锁价 |
| ADR | Hold 保护公开增量 ADR。dump 399 会压公开增量，且未必提高切房成交 |
| RevPAR | 若公开成交未停，Hold 路径随 ADR；dump 路径可能 OCC 微升、RevPAR 不升。不编精确增收 |
| Pickup | 切房桶看该渠道 pickup；公开桶看公开净增。两本账 |
| Conversion | Unknown。不编点击率 |
| Net Revenue | 本次按 Gross 讨论公开 BAR；切房净价走 P20，费率 NV 不算假精确净额 |
| Profit | Unknown。不编 GOP / Walk $ |

允许的写法：若还房后 24h 公开 Pickup 仍为正且 Pace 仍 Ahead → Hold 成立。若还房后 remaining 变厚且 Pace 翻成 Behind → 再评 P05，不在还房前预降。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 真弱公开被 Hold 住 | 公开确实 Behind | 公开 Pace / Pickup / Remaining | 理由写该夜公开需求，走 P05；仍禁 399 与一夜 −15% |
| 合同还不出 | 合同/平台不让当天缩配额 | 用户合同；还房是否落地 | 问条款；金额 NV 不编；仍不要把 BAR 写成切房价 |
| 只改半边渠道 | 公开 399、直销仍 799 或反过来 | 多渠道价 | 先对齐；不把切房 dump 写到 Brand.com（P23/P36 邻） |
| 训练市场 | 公开 399 被记住 | 渠道价 | 拒绝；399 不是推荐 BAR |
| 与 P52 叠刀 | 团块 + 切房同一早会 | 两份合同 | 诊断分开；一个动作（P45） |
| 报促销冲切房 | 深折当消化工具 | 报名单 | 走 P18 闸；高峰默认不报 |
| 非扣库存仍还房 | 公开剩余本就真 | 扣不扣 | 形 D：公开按 Pace；切房走合同，不改 BAR |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 切房 pickup 间夜 | 24/48h | 该 Stay Date 该桶新订−取消 | 用户 |
| 未还切房 | 即时 / 还房后 | allotment − picked up；还后是否变 0 | 用户 |
| 扣不扣是否仍成立 | 还房前 | Deduct / LRA vs custom；NV 则再问 | 用户 |
| 公开净 Pickup | 24/48h | 公开/直销，不含切房桶 | 用户 |
| 公开 Remaining | 还房前 vs 后 | 真可售，扣 OOO/锁 | 用户 |
| 公开 BAR 是否出现 399 | 即时 | 直销/OTA 公开栏 | 用户 |
| 合同还房是否落地 | 合同时点后 | 渠道可售是否下降、house 是否回 | 用户 |

默认最少 5 个：切房 pickup、未还间数、公开 24h Pickup、还房后公开 remaining、公开价是否被改到 399。

## 9. Re-evaluation Trigger

```text
IF 扣不扣 / 还房时点 / 今晚 pickup Unknown
  → 先问这三件；公开 BAR Hold；不编 SOP。

IF 扣库存 AND 未还切房 > 0 AND（Pace Ahead OR 公开 remaining 薄 OR 高峰）
  → 还/缩未卖切房或 stop-sell 该渠道桶。公开 Hold 779–799 首选 799。
     禁止 BAR→399。禁止一夜 −15%。

IF 不扣库存
  → 公开 remaining 已是真剩余。公开按 P01/P05。未卖切房 = 合同/pickup 问题，不改 BAR。

IF 还房落地后 公开 Pace Ahead OR remaining 仍薄
  → 继续 P01 / Hold。不要预降。

IF 还房落地后 公开 Behind + remaining 厚 + Pickup 慢 + 供给开
  → P05 bounded；理由写该夜公开 Pace，不写「消化切房」。仍禁 399 与一夜 −15%。

IF 用户要报今夜特价冲切房 → P18。按毛保渠道 → P20。mix 配额战略 → P25。
IF 其实是团块没 pickup → P52。房型卖穿 → P13。opaque 高峰 → P27。前台跟 dump → P42。

IF 提案是 BAR→399 或一夜 −15% 「消化切房」 → 拒绝。
IF 有人要把 Brand.com 跟到切房 dump → 记下 parity 缺口；本轮不写 P59；默认不跟。
```

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店切房合同 / 扣不扣 / 还房时点 / 美团·携程 SOP 全部 NV；799 是 Hypothesis/Simulation；无弹性；Vendor 页证明能力存在，不证明本店怎么配。
为什么不是 Low：两桶机制有 Vendor 交叉（Cloudbeds LRA vs custom allotment；OPERA 渠道限额；SiteMinder release→Stop Sell）；「还房不降公开价」与 P52/T-Guar 同形可证伪；第一刀可逆。
因此怎么用：先问三件；高峰还房 + 公开 Hold；释放后再按公开 Pace 走 P01 或 P05。不要为消化切房 dump。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-allotment-sat.md`：周六公开 remaining 12、Pace Ahead；OTA 切房 15 已 pickup 3（12 仍占着）；电商要把公开 BAR 砍到 399「把切房消化掉」→ **Hold 779–799，首选 799**；**还/缩未卖切房**，不 dump 公开。还房后再打分：本卷 Pace 仍 Ahead → 继续 Hold；只有那时公开变厚且 Behind 才评 P05。180/12/15/3/399/799 **Simulation only**。399 = 被拒绝的 dump。

## 12. 交叉（2026-08-26 22:17，不改两桶纪律）

切房未卖 ≠ 价平破口。本店 OTA 公开灵活价低于 Brand.com 走 **P59**（22:17 drafted）。本剧仍只管合同切房桶 vs 公开 BAR。
