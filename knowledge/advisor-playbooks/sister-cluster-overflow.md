# Playbook P72｜姐妹店溢出 / 区域统价 vs 公开 BAR（溢出价不是本店 BAR；不要按发送店低价接，也不要统一跟最低那家）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/sister-cluster-overflow.md`  
> BACKLOG：P72 Sister / Cluster Overflow vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **sister-cluster-overflow**  
> 状态：**drafted**（2026-08-29 02:17 CST）  
> 配套卡：`recommendations/dont-match-sister-overflow-rate.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/sister-rate-vs-own-pace.md`（本店公开 BAR vs 姐妹店挂牌 vs 本店 Pace；**无默认溢出折扣 %**；本店/华住 cluster 字段 NV）  
> 理论：OPERA Referral = 导客/lead 不是改 BAR 令；REFERRAL 不扣发送店库存；Look to Book 多店各报各价；Duetto 中央策略仍跟单店市场，把需求拍平是失败模式  
> 交叉：P15 竞对满房溢出 ≠ 本剧「按姐妹店价接」· P10 一场团 ≠ 集团导客 · P71 年标 ≠ 区域统价 · P01 Ahead Hold · P05 真弱 leftover  
> 问题树：§79 「姐妹店溢出/区域统价不是公开 BAR」  
> 仿真：`cases/sim-2026-sister-overflow-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA 5.6 Referral Leads：满/接不下可把 lead 发给同城姐妹店 — §66；OPERA 5.6 Status Codes：REFERRAL = non-deduct，不影响发送店可售 — §66；OPERA Cloud 26.2 Look to Book：Hub 可同时看多店房型价，各店各自报价 — §66）；A Vendor RMS（Duetto 2026-05-11 *How to centralize pricing*：每店仍跟自己市场；把各店需求拍平是失败模式 — §66）  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆本店尺 vs 姐妹店挂牌、按本店 Pace Hold 公开 BAR、拒绝按发送店低价接或统一跟最低；**不操作** PMS / CRS / 集团导客台，不自动定价，不代接溢出单。  
> 禁止：发明华住 cluster SOP、默认溢出折扣 %、佣金%、区域统价 Fact %、699；一夜 −15%；BAR→399「按姐妹店接 / 区域统一」；把 14/399/799 当市场 Fact；开 P73；把竞对满当本剧主刀（误入 P15）；把一场团当本剧（误入 P10）；把年标当本剧（误入 P71）。  
> 00:17「不要规定 P72」= theory 槽不得指定；本案例槽核实 22:17 scout #4 姐妹店/多店溢出缺口后开。

---

## 0. 一句话

**姐妹店溢出 / 集团导客 / 区域统价不是公开 BAR。** 先问这是 **发送店导过来的溢出客**，还是 **要把本店公开尺改成姐妹店价或区域最低价**。OPERA 的 Referral 是把 lead 发给姐妹店，REFERRAL 状态不扣发送店库存——**是导客动作，不是改价令**。接不接看本店 Remaining + Pace；接了按 **本店公开 BAR** 卖，不按发送店 399。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要 BAR→399「按她们的价接」，也不要「区域统一跟最低那家」。竞对满（非姐妹）→ **P15**。一场团 → **P10**。年标 → **P71**。本店 cluster 字段 / 华住导客 SOP = **NV，不编**。

完成定义：一张「先拆本店尺 vs 姐妹店挂牌 → Ahead Hold 本店 BAR → 拒跟溢出价 / 拒统最低 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 按姐妹店价接溢出** | 「她们 399，导过来也 399」 | 用发送店挂牌当本店尺 | **拆两店价**；接则按本店 BAR |
| **B BAR→399 必须接集团导客** | 「不砍就丢给美团」 | 用公开 dump 买导客 | **拒绝 BAR→399** |
| **C 区域统一跟最低那家** | 「几家店一个价，跟最便宜」 | 把各店需求拍平 | **拒绝统到最低**；各店跟自己 Pace |
| **D 姐妹店空着所以我们先砍** | 「帮她们填，我们别涨 / 先降」 | 用本店 BAR 补贴姐妹店 | **拒绝**；本店 Ahead 仍 Hold |
| **E 姐妹店满了、自己也紧** | 「她们满了我们该涨」 | 市场紧是本店 Pace 的事 | 本店紧 → **P01 / P15**；仍不是跟她们的价 |
| **F 一场团 / 年标 / 非姐妹竞对满** | 「这单一场」或「年标」或「对面满了」 | 对象不同 | **P10** / **P71** / **P15** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是发送店导过来的溢出客，还是要把本店公开 BAR 改成姐妹店价 / 区域最低。Referral 是导客不是改价令。本店 cluster 字段 / 华住 SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。接溢出按本店 BAR。不要 BAR→399「按她们接」，也不要统一跟最低那家。
3. 竞对满（非姐妹）走 P15。一场团走 P10。年标走 P71。真弱走 P05（仍禁一夜 −15%）。空着的姐妹店不是本店砍价令。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认溢出折扣 %、无「必须比姐妹店便宜 X」、无区域统价 Fact %**。本店 / 华住 cluster 字段 = **NV**。

Vendor 指针（不写成华住 SOP）：

- OPERA 5.6 *Referral Leads*（A Vendor，§66）：本店接不下或满，可把 lead 发给同城 affiliated / sister hotel。**是导客，不是把本店 BAR 改成发送店价。**
- OPERA 5.6 *Status Codes*（A Vendor，§66）：REFERRAL = non-deduct；对发送店可售**无影响**。导走 ≠ 发送店更弱、也 ≠ 接收店必须地板。
- OPERA Cloud 26.2 *Look to Book*（A Vendor，§66）：Hub 可同时搜多店房型价；各店各自报价。协议价只对搜到的 profile 出示。**多店同屏 ≠ 必须一个 BAR。**
- Duetto *How to centralize pricing across multiple hotels*（A Vendor，2026-05-11；§66）：中央可以定策略；**每店仍跟自己市场**。把各店需求拍平（quiet midweek = peak weekend）是失败模式。

本店 cluster SOP / 华住导客字段 / 默认溢出折扣 % / 佣金% / 区域统价 Fact % = **全部 NV**。

Duetto Resource Hub *Sister Property Pricing* 本轮 **登录/CSS 墙，不当核页**。Peaqplus 多店文 **429，不引用、不抄其 EUR 例**。

---

## 1. Situation

钉 **三件事**：①用户说的「溢出/导客/统价」是发送店 lead，还是要改本店公开 BAR；②拟议是「按姐妹店价接 / 统一跟最低 / 帮空店先砍」还是「按本店 BAR 接或不接」；③本店 Pace / Remaining，不是区域总好不好看。

先问（缺则标 NV，不停）：

- Stay Date、DOW；本店当晚 Remaining；Pace（Ahead / On / Behind）
- 本店当前公开 BAR vs 姐妹店挂牌 / 拟议溢出价（缺则问，不编）
- 发送店是满了导客，还是空着要本店让价
- 拟议：按她们价接 / 区域统一最低 / 本店先砍帮填
- 两店是否真可替代（距离/档/口价；不可比 → 当普通竞对或拒绝导）
- 本店 cluster / 华住导客 SOP（NV 不编）
- 用户原话：「按她们 399 接」「区域统一跟最低」「姐妹店空着我们别涨」「不砍就丢给美团」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 溢出/导客 vs 改本店公开 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399 按姐妹店接 / 必须接？ | 形 B；拒绝 |
| D3 | 拟议区域统一跟最低？ | 形 C；拒绝 |
| D4 | 姐妹店空、要本店先砍/别涨？ | 形 D；拒绝 |
| D5 | 姐妹店满 + 本店也紧？ | 形 E → P01 / P15（仍本店尺） |
| D6 | 一场团 / 年标 / 非姐妹竞对满？ | → P10 / P71 / P15 |
| D7 | 本店 Pace Ahead / On / Behind？Remaining？ | Ahead → Hold 本店公开 BAR |

## 3. Decision Tree（过程）

```text
区域/店长：「按姐妹店 399 接 / 区域统一最低 / 帮空店先砍」
  → 先问：要改的是本店公开 BAR，还是只接一单导客？（D1）
       混用 → 形 A：拆两店价；接则本店 BAR
  → 拟议 BAR→399 按她们接？（D2）
       是 → 形 B：拒绝
  → 拟议统一跟最低？（D3）
       是 → 形 C：拒绝；各店跟自己 Pace
  → 姐妹店空、要本店让价？（D4）
       是 → 拒绝；本店 Ahead 仍 Hold
  → 非姐妹竞对满 / 一场团 / 年标？ → P15 / P10 / P71
  → 本店 Pace/Remaining？（D7）
       Ahead / On → Hold 779–799 首选 799
       本店也紧 + 市场紧 → P01 / P15；价仍本店尺
       Behind + 厚 → P05；仍禁一夜 −15%；仍禁溢出借口 399
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（本店公开 BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Overflow / 导客:      可接则按本店 BAR；可 Counter；不当新公开 BAR；折扣 % NV
Inventory Action:     无（本剧不是关房）；Referral 不改发送店可售
Restriction Action:   无（本剧不是 MinLOS）
Channel Action:       不把 Brand.com dump 到 399「按姐妹店接」或「区域统一最低」
Staging:              第一刀 = 拆本店尺 vs 姐妹店挂牌 + Ahead Hold 本店 BAR。24h 看本店公开 Pickup
Do-not-do:
  - 把姐妹店挂牌 / 区域最低写成公开 BAR
  - BAR → 399「按她们接 / 必须接 / 统一最低」
  - 本店 Ahead 却因姐妹店空而先砍
  - 一夜 −15%
  - 编华住 cluster SOP / 默认溢出折扣 % / 佣金% / 区域统价 Fact % / 699
  - 顾问代操作 PMS / 集团导客台
  - 开 P73
```

真实酒店若当前 BAR 不在该带，保留 **溢出价≠BAR + Hold 本店公开 BAR** 方向，不把 779–799 当市场 Fact。

## 5. Why

1. OPERA Referral：满或接不下才把 lead 发给姐妹店——**导客，不是改接收店 BAR。**
2. REFERRAL 不扣发送店库存：导走 ≠ 发送店需求死了，也 ≠ 接收店必须地板。
3. Look to Book 多店同屏仍是各店各价；协议码只对搜到的 profile 出示。同屏 ≠ 一个 BAR。
4. Duetto：中央策略可以，但每店仍跟自己市场。把各店拍成一个最低价，正是厂商写明的失败模式。
5. 顾问十段要求落到日期/价格：本剧日期 = 用户 Stay Date；价 = Hold 当前本店公开 BAR 带。

## 6. Expected Impact

- Ahead 夜：不把溢出价锚成新 BAR，尾房仍按本店公开 BAR 卖。
- 组合：溢出客若接受本店 BAR，是增量；不接受可以不接，不必用公开尺买下来。
- 真弱夜：P05 仍有出口，不把剧本写成死守。

点估计 NV。不编「溢出该便宜多少」。

## 7. Risk

- 两店其实不可替代（档/距离/口价）→ 当普通竞对或拒导，不硬接。
- 发送店 399 已漏到 OTA，客人比价 → 不可比或破平走 P36 / P59，仍不把本店 BAR 对齐到 399。
- 区域总用「不接就丢给美团」施压 → 可按本店 BAR 接或 Counter，公开 BAR 不跟。
- 弱夜借口「统一最低冲量」→ 仍禁 399 与一夜 −15%。

## 8. What To Watch

| 观察 | 窗 | 用来 | 缺则 |
| --- | --- | --- | --- |
| 本店公开 BAR 是否仍 Hold | 当日 | 有没有被改成 399 | 用户 |
| 姐妹店挂牌 vs 本店 BAR | 当日 | 只观察，不推导必须折扣 % | NV |
| 1D Pickup（本店公开） | 24h | 是不是真弱 | 用户 |
| 是否有人把溢出价标成 BAR | 当日 | 形 A/B/C | 截图 |
| 导客有没有按本店价成交 | 当日 | 增量还是被拒 | 用户 |

## 9. Re-evaluation Trigger

- 非姐妹竞对满 → **P15**
- 一场团询 → **P10**
- 年标 / RFP → **P71**
- Pace 转真 Behind + 剩余厚 → **P05**；仍禁 399 与一夜 −15%
- 本店也紧 + 市场紧 → **P01** / **P15**；价仍本店尺
- 用户给出本店/集团导客 SOP → 引用原文，仍不代操作、不改公开 BAR

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 cluster 字段 / 华住导客 SOP / 溢出折扣 % 全部 NV；799/399 是 Hypothesis/Simulation；Duetto Sister Property Pricing 本轮未打开。
为什么不是 Low：OPERA Referral=导客、REFERRAL 不扣发送店、LTB 各店各价、Duetto「勿拍平」同向；溢出价≠公开 BAR 多源一致；第一刀（Hold 本店 BAR）可逆。
因此怎么用：先拆本店尺 vs 姐妹店挂牌；Ahead Hold；不 399；不统最低。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-sister-overflow-sat.md`：周六 Pace Ahead remaining **14**、公开 BAR **799**；同城姐妹店满，导客口头要按她们 **399** 接，或区域总要「统一跟最低那家」→ **Hold 779–799 首选 799**；接则按本店 BAR；不要 dump 到 399。14/399/799 **Simulation only**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 02:17 CST | 首版。P72。溢出价≠公开 BAR；Ahead Hold；拒按姐妹店接；拒统最低。00:17 不规定 → 本案例槽核实后开。未开 P73。 |

> 交叉指针（2026-08-29 06:17，不改正文）：姐妹店溢出仍本剧；「闪促/秒杀改写公开 BAR」过程走 **P73** `flash-promo-vs-bar.md`。不写 P74。

