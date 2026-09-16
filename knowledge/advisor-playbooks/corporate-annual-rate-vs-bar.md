# Playbook P71｜年标 / 企业协议价 vs 公开 BAR（年标不是 BAR；不要把 BAR 跟到年标或为签年标先砍 BAR）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/corporate-annual-rate-vs-bar.md`  
> BACKLOG：P71 Corporate Annual Negotiated Rate / RFP vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **corporate-annual-rate-vs-bar**  
> 状态：**drafted**（2026-08-28 22:17 CST）  
> 配套卡：`recommendations/dont-anchor-bar-to-corp-rate.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/corp-rate-vs-public-bar.md`（公开 BAR vs 年标合同价 vs Pace；**无默认折扣 %**；本店年标 / LRA % NV）  
> 理论：**T-Corp** `theory/negotiated-corp-vs-bar.md`（年标不是公开 BAR；资格闸/派生/LRA 不是定价权；过程仍 P71）· OPERA Profile Negotiated Rates · BAR Based 派生方向  
> 交叉：P26 已签协议码漏出 ≠ 本剧「重置公开 BAR=年标」· P48 政务 per-diem ≠ 商业年标 · P10 一场团 ≠ 持续账户 · P56 月末冲量 · P01 Ahead Hold · P05 真弱 leftover  
> 问题树：§78 「年标/企业协议价不是公开 BAR」  
> 仿真：`cases/sim-2026-corp-annual-rate-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Managing Profile Negotiated Rates：negotiated = contracted on profile — §64；OPERA Cloud 21.4 BAR Based Rates：corporate 例从 Best BAR 扣减，派生方向 BAR→协议 — §64）；C 实践（roommaster 2026-08-03：Fixed flat vs Dynamic % off BAR；closed code；restrict；verify；不漏出；复盘过期价 — §64；无固定行业折扣 %）  
> Last Verified：2026-08-28  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆年标 vs 公开 BAR、Hold 公开 BAR、拒绝把年标写成新 BAR 或为签年标砍地板；**不操作** PMS / 协议码 / RFP，不自动定价，不代签年标。  
> 禁止：发明华住年标 SOP、默认折扣 %、佣金%、LRA Fact %、699；一夜 −15%；BAR→399「冲量好签」；BAR→499「对齐年标」；把 14/399/499/799 当市场 Fact；开 P72；把已签码漏出当本剧主刀（误入 P26）；把政务当本剧（误入 P48）；把一场团当本剧（误入 P10）。  
> 20:17「不要规定 P71」= recap 槽不得指定；本 scout 核实年标/RFP 缺口后开。

---

## 0. 一句话

**年标 / 企业协议价不是公开 BAR。** 先问是 **已签或在谈的账户合同价**，还是 **公开灵活 BAR**。协议挂在 profile 上、链接该账户才出示；可以是固定价，也可以是 BAR Based（从 Best BAR 派生）。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要把 BAR 跟到年标（499），也不要为「冲量好签年标」把 BAR dump 到 399。已签码漏出走 **P26**。政务走 **P48**。一场团走 **P10**。月末走 **P56**。本店折扣% / 华住字段 / LRA Fact% = **NV，不编**。

完成定义：一张「先拆年标 vs 公开 BAR → Ahead Hold 公开 BAR → 拒对齐/拒冲量地板 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 年标当公开 BAR / BAR=年标** | 「协议 499 就是我们的 BAR」 | 用合同价当尺 | **拆协议 vs 公开**；Hold 公开 BAR |
| **B BAR→499 对齐年标** | 「公开价先砍到协议，销售好签」 | 把公开尺写成合同价 | **拒绝 499 作新 BAR** |
| **C BAR→399 冲量好签年标** | 「先地板冲量，年标才谈得下来」 | 用公开 dump 买合同 | **拒绝 BAR→399** |
| **D 已签码漏出高峰/OTA** | 「协议出现在周末散客」 | 围栏事故 | **P26** |
| **E 政务 / per-diem** | 「差旅标准就是 BAR」 | 客源不同 | **P48** |
| **F 一场团 / 月末冲量** | 「这单一场」或「月底先砍」 | 对象不同 | **P10** / **P56** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是已签/在谈的年标协议价（挂在账户 profile 上的合同价），还是公开 BAR。年标不是公开尺。本店折扣% / 华住字段 / LRA Fact% = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→499「对齐年标」，也不要 BAR→399「冲量好签」。
3. 已签码漏出走 P26。政务走 P48。一场团走 P10。月末走 P56。协议可 BAR-based 派生，BAR 不被反写。
```

尺（Hypothesis；14/399/499/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。禁止 499 作新 BAR。**无默认年标折扣 %、无「必须便宜 X」、无 LRA Fact %**。roommaster FAQ「没有固定行业折扣 %」采用方向，不发明数字。本店年标 / 华住字段 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Managing Profile Negotiated Rates*（A Vendor，§64）：negotiated rate = 与客户约定的 contracted rate，挂在 profile；Look to Book 在该 profile 被链接时出示；可多店 distribute。**不是公开 BAR。**
- OPERA Cloud 21.4 *BAR Based Rates*（A Vendor，§64）：BAR Based 从 Best BAR 派生（flat 或 %）。公司例：Best BAR 125 减 25 → 100。**方向：协议骑在 BAR 上，BAR 不被改写成协议价。**
- roommaster *How Hotels Manage Corporate Hotel Discounts*（C，2026-08-03；§64）：Fixed flat vs Dynamic % off BAR；closed rate code；restrict；check-in 核验；不漏出；复盘过期价。**无固定行业折扣 %。**

本店年标 SOP / 华住字段 / 默认折扣 % / 佣金% / LRA Fact % = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「年标/协议」是已签合同价、在谈 RFP，还是被当成公开 BAR；②拟议是「改公开尺 / 对齐 / 冲量地板」还是「给该账户单独协议码」；③Pace / Remaining，不是销售好不好签。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开 BAR vs 拟议/已签年标价（缺则问，不编）
- 用户原话里的「BAR」指公开价还是协议价
- 拟议：BAR 跟到年标 / 先砍地板好签 / 把年标挂成公开
- 本店折扣% / LRA / blackout（NV 不编）
- 用户原话：「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签」「年标就是 BAR」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 年标/RFP 合同价 vs 公开 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→499 对齐年标？ | 形 B；拒绝 |
| D3 | 拟议 BAR→399 冲量好签？ | 形 C；拒绝 |
| D4 | 已签码出现在高峰/OTA？ | → P26 |
| D5 | 政务 / per-diem？ | → P48 |
| D6 | 一场团询？月末 blanket dump？ | → P10 / P56 |
| D7 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold 公开 BAR |

## 3. Decision Tree（过程）

```text
GM/销售：「BAR 跟到年标 / 先 499 对齐 / 399 冲量好签」
  → 先问：说的是账户合同价还是公开 BAR？（D1）
       混用 → 形 A：拆开；Hold 公开 BAR
  → 拟议 BAR→499 对齐？（D2）
       是 → 形 B：拒绝 499 作新 BAR
  → 拟议 BAR→399 冲量好签？（D3）
       是 → 形 C：拒绝
  → 已签码漏出高峰/OTA？ → P26
  → 政务差旅？ → P48
  → 一场团 / 月末冲量？ → P10 / P56
  → Pace/Remaining？（D7）
       Ahead / On → Hold 779–799 首选 799
       Behind + 厚 → P05；仍禁一夜 −15%；仍禁年标借口 399/499
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（公开 BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Negotiated / 年标:    可留独立协议码挂 profile；不当新公开 BAR；折扣 % NV
Inventory Action:     无（本剧不是关房）
Restriction Action:   高峰对已签码是否 blackout → 问合同后走 P26，不在本剧编 LRA %
Channel Action:       不把 Brand.com dump 到 499「对齐年标」或 399「冲量好签」；不把年标标成 BAR
Staging:              第一刀 = 拆年标 vs 公开 + Ahead Hold 公开 BAR。24h 看公开 Pickup
Do-not-do:
  - 把年标/协议总价写成公开 BAR
  - BAR → 499「对齐年标」
  - BAR → 399「冲量好签年标」
  - 一夜 −15%
  - 编华住年标 SOP / 默认折扣 % / 佣金% / LRA Fact % / 699
  - 顾问代操作 PMS 协议码 / 代签 RFP
  - 开 P72
```

真实酒店若当前 BAR 不在该带，保留 **年标≠BAR + Hold 公开 BAR** 方向，不把 779–799 当市场 Fact。

## 5. Why

1. OPERA：negotiated rate 是 profile 上的 contracted rate，链接该账户才出示——不是全市场公开尺。
2. BAR Based：公司价从 Best BAR 派生（flat 或 %）。**派生方向是 BAR → 协议，不是协议 → 改 BAR。**
3. 实践上协议应 closed code、限制资格、入住核验；把协议挂成公开 BAR 等于主动漏出（与 P26 同族，但本剧刀口是「不要改公开尺」）。
4. 顾问十段要求落到日期/价格：本剧日期 = 用户 Stay Date；价 = Hold 当前公开 BAR 带。

## 6. Expected Impact

- Ahead 夜：不把年标锚成新 BAR，尾房仍按公开 BAR 卖。
- 口径：早会/店长说「BAR」时先对齐公开尺，协议走账户码。
- 真弱夜：P05 仍有出口，不把剧本写成死守。

点估计 NV。不编「年标该便宜多少」。

## 7. Risk

- 本店其实只卖协议、几乎无公开散客 → 问清楚公开灵活最低合格价是哪个码，仍不把年标写成 BAR。
- 已签码继续漏高峰 → P26。
- 销售用「不砍签不下来」施压 → 合同价可谈（NV），公开 BAR 不跟。
- 弱夜借口「冲量好签」→ 仍禁 399/499 与一夜 −15%。

## 8. What To Watch

| 观察 | 窗 | 用来 | 缺则 |
| --- | --- | --- | --- |
| 公开 BAR 是否仍 Hold | 当日 | 有没有被改成 499/399 | 用户 |
| 年标/协议挂牌 vs 公开 gap | 当日 | 只观察，不推导必须折扣 % | NV |
| 1D Pickup（公开） | 24h | 是不是真弱 | 用户 |
| 是否有人把年标标成 BAR | 当日 | 形 A/B | 截图 |
| 已签码是否漏出高峰/OTA | 当日 | P26 | 用户 |

## 9. Re-evaluation Trigger

- 已签协议码漏出高峰/OTA → **P26**
- 政务 / per-diem → **P48**
- 一场团询 → **P10**
- 月末 blanket dump → **P56**
- Pace 转真 Behind + 剩余厚 → **P05**；仍禁 399/499 与一夜 −15%
- 用户给出本店年标/集团 RFP SOP → 引用原文，仍不代操作、不改公开 BAR

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店年标折扣 / 华住字段 / LRA Fact % 全部 NV；799/499/399 是 Hypothesis/Simulation；roommaster 为 C 实践。
为什么不是 Low：OPERA negotiated=profile 合同价 与 BAR Based「从 BAR 派生」同向；年标≠公开 BAR 多源一致；第一刀（Hold 公开 BAR）可逆。
因此怎么用：先拆年标 vs 公开；Ahead Hold；不 499；不 399。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-corp-annual-rate-sat.md`：周六 Pace Ahead remaining **14**、公开 BAR **799**；销售要「对齐年标」把 BAR 砍到 **499**，或「冲量好签年标」dump **399** → **Hold 779–799 首选 799**；不要 499 作新 BAR；不要 dump 到 399。14/399/499/799 **Simulation only**。399 = **被拒绝的 dump**。499 = **被拒绝的「对齐年标」新 BAR**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 22:17 CST | 首版。P71。年标≠公开 BAR；Ahead Hold；拒 499 对齐；拒 399 冲量。20:17 不规定 → 本 scout 核实后开。未开 P72。 |
> 交叉指针（2026-08-29 02:17，不改正文）：区域统价 / 姐妹店溢出不是年标 → **P72** `advisor-playbooks/sister-cluster-overflow.md`。本剧仍管年标 vs 公开 BAR。不写 P73。

> 交叉指针（2026-08-30 10:17，不改正文）：年标仍本剧；员工价/付费员工折扣改尺 → **P80** `staff-employee-rate-vs-bar.md`。年标 ≠ 员工个人折扣。不写 P81。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。

> 交叉指针（2026-09-01 08:17，不改正文）：年标仍本剧。付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**。年标 ≠ 员工个人折扣。不规定 P88。

> 交叉指针（2026-09-01 12:17，不改正文）：§107 HotelKey 把 OTA 码派生挂 BAR 父码（方向 BAR→派生）；Apaleo 改 base、派生跟走。加强「派生跟 BAR，不是反写公开尺」。不规定 P88。

> 交叉指针（2026-09-02 14:17 S02-14，不改正文）：§115 OPERA RATE_FLOOR / MIN·MAX RATE ALLOWED = 价表最小额保护 ≠ 把公开 BAR 跟到年标或 dump；品牌底仍走 **T20**；年标过程仍本剧。不开 P88。

> 交叉指针（2026-09-02 16:17，不改正文）：RATE_FLOOR / Min·Max = 价表保护 ≠ 年标；品牌底/地板 Diagnose 走 **T-Floor**，年标过程仍本剧 **P71**。不开 P88。
