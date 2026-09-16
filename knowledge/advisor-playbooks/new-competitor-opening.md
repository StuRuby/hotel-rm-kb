# Playbook P68｜新店开业价 / New Competitor Opening（开业促销不是必须跟的市场价格）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/new-competitor-opening.md`  
> BACKLOG：P68 新店开业价 / New Competitor Opening · HIGH · 先诊断枝（本轮同开）· slug **new-competitor-opening**  
> 状态：**drafted**（2026-08-28 10:17 CST）  
> 配套卡：`recommendations/dont-match-opening-dump.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/intro-rate-vs-pace.md`（开业/intro 价 vs 本店 BAR vs Pace；是否已入观察 Comp Set；**无默认跟价 %**；本店新店 SOP NV）  
> 理论：T15 Comp Set 选择 · Enz/Canina/Lomanno 2003 方向（折扣不创造新需求）· P16 连续价格战 · P36 可比性  
> 交叉：P16 已开业连续砸价 ≠ 本剧开业促销 · P36 不可比先 · P15 新店满房溢出 ≠ 跟 intro · P57 份额指数不是今夜砍 · P05 真弱理由写 Pace · P18 报名闸 · T20 品牌底  
> 问题树：§75 「开业价不是必须跟的市场价格」  
> 仿真：`cases/sim-2026-new-hotel-open-sat.md`（**Simulation**）  
> 证据等级：A 学术（Cornell Chronicle 2003 Enz 等：折扣不把新消费者拉进市场 — §58）；B Vendor（Lighthouse 2026-05-01：新供给触发 Comp Set 重审，不是自动改 BAR）；C Vendor/实践（PriceLabs 2026-07-13：promo ≠ BAR；hotelier.cloud：高峰 Hold BAR + 围栏，不 panic dump）  
> Last Verified：2026-08-28  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议先问可比 + 自己 Pace、Hold 公开 BAR、把新店放进观察名单；**不操作** PMS / OTA / Rate Shopper，不自动定价，不代改 Comp Set。  
> 禁止：发明华住开业价 SOP、开业折扣%、「新店 N 天必须进 Comp Set」、399 行情 Fact、佣金%、699；一夜 −15%；BAR→399 对齐开业价；把 14/399/799 当市场 Fact；开 P69；把已开业连续战当本剧（误入 P16）；把不可比截图当本剧（误入 P36）。  
> 08:17「不要规定 P68」= theory 槽不得指定；本案例槽核实 T15 新店开业缺口后开。

---

## 0. 一句话

**对面新开业的 intro / 开业特价，不是必须对齐的市场价格。** 先问是不是同一口价（P36），再问我们自己 Pace。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「对面 399」把 BAR dump 到 399。开业促销是有结束日的战术，不是新均衡 BAR。把新店加入**观察 Comp Set** ≠ 改今夜报价。真 Behind 才评 **P05**，理由写 Pace，不写「对面开业了」。本店新店 SOP / 华住开业政策 = **NV，不编**。

完成定义：一张「先拆开业促销 vs 已开业连续战 → Ahead Hold BAR / 观察名单 → 真弱才 P05」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A Ahead 跟开业价** | 「对面刚开，399，我们也砍」 | 把别人的开业促销写成我们的需求死了 | **Hold** 779–799 首选 799；围栏/价值包可谈，不当新 BAR |
| **B BAR→399 对齐 intro** | 「不跟就没人订 / 开业周必须对齐」 | 用公开 BAR 买恐慌 | **拒绝 BAR→399** |
| **C 不可比新品** | 「星级/含早/套房/会员登录都便宜 80」 | 不是同一口价 | **P36**；Hold |
| **D 已开业连续砸** | 「开了三个月还天天砍，三家一起」 | 开业窗已过，是价格战 | **P16**（仍先 Pace；Ahead 仍不跟） |
| **E 真弱 leftover** | 「开业周我们 Pickup 也塌了」 | 自己 Pace Behind + 剩余厚 | **P05**；理由写 Pace，不写对面 399；禁一夜 −15% |
| **F 自己软开 / 重审 Comp Set 当砍价** | 「我们刚开业所以 399 当 BAR」「新店必须进 STAR 所以今夜对齐」 | 用 intro 锚市场，或把名单动作写成定价 | 自己软开：围栏/有限期，**不当永久 BAR**；Comp Set 重审 = 观察，**不改今夜 BAR** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是开业/intro 促销还是已开业连续砸价，以及是不是同一口价。开业价不是必须跟的市场价格。本店新店 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「对齐开业价」。新店进观察 Comp Set ≠ 改今夜报价。
3. 真 Behind 才评 P05，理由写 Pace。已开业连续战走 P16。不可比走 P36。自己软开也不要把 399 写成永久 BAR。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认跟价 %、无「开业必须便宜 X%」**。Enz 2003 只用方向（折扣不创造新需求），不抄行业点估计。本店新店 SOP = **NV**。

指针（不写成华住 SOP）：

- Cornell Chronicle 2003-04-04，Enz / Canina / Lomanno（A 学术，§58）：降价通常不把新消费者拉进市场，现有客人只是付得更少。**方向**用于「不要用开业恐慌训练市场」；不是开业专论，不摘 CHR 正文。
- Lighthouse *Hotel competitive set*（B Vendor，2026-05-01 打开，§58）：新供给 / 装修 / 换牌应触发 Comp Set **重审**；重审 ≠ 自动改 BAR。MPI/ARI/RGI 读法仍走 P57。
- PriceLabs *Hotel Competitor Rates*（C Vendor，2026-07-13 打开，§58）：**Promo vs BAR**——闪促有结束日，只有对方 BAR 策略变化才配战略响应；先拆产品再看自己 Pace。Ahead 时匹配等于给本来会来的人打折。**23% 日调价 / 曼彻斯特 24 间练习不进本库 Fact**。
- hotelier.cloud *Competing With a New Luxury Hotel Nearby*（C 实践，§58）：新奢华开业的第一反应不该是 panic dump；高峰 Hold BAR，用围栏/价值包；只在需求缺口可测量时选择性动价。**不抄其 10% 包价值算术当 Fact**。

本店新店 SOP / 华住开业政策 / 「新店几天必须进 Comp Set」= **全部 NV**。

---

## 1. Situation

钉 **三件事**：①对面是**开业/软开/intro 闪促**还是已稳定营业的连续降价；②截图是不是同一口价；③我们自己 Pace / Remaining，不是对面的价签。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 新店：开业日 / 软开还是已营业；公开 intro 价 vs 是否声明「开业特惠」
- 可比清单：房型 / 取消 / 含早 / 税 / 登录（P36）
- 当前公开 BAR
- 新店是否已在本店 Comp Set / STAR 集合（NV 不编「必须进」）
- 用户原话：「对面新开业 399 要不要跟」「开业周不砍没人订」「我们自己也刚开所以 399」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 开业/intro 闪促 vs 已开业连续砸？ | 连续 ≥2 家 / 开业窗已过 → P16 |
| D2 | 同一口价？房型/取消/含早/登录 | 不可比 → P36 |
| D3 | 本店 Pace Ahead / On / Behind？Remaining？ | Ahead → 形 A Hold |
| D4 | 拟议是否 BAR→399 / 对齐 intro？ | 形 B；拒绝 |
| D5 | 真弱 leftover（Behind + 剩余厚）？ | 形 E → P05；理由 Pace |
| D6 | 自己就是开业店 / 只是要重审 Comp Set？ | 形 F；围栏或观察名单，不改今夜 BAR |
| D7 | 新店已经满房？ | **P15** 溢出信号，不是跟 intro |

## 3. Decision Tree（过程）

```text
GM/销售：「对面新开 399，我们要不要跟 / 我们刚开也 399」
  → 先问：开业闪促还是已开业连续战？同一口价吗？（D1/D2）
       不可比 → P36 Hold
       已开业连续战 → P16（Ahead 仍不跟）
  → 开业/intro：Pace/Remaining？（D3）
       Ahead / On → 形 A：Hold 779–799 首选 799；观察名单；可围栏/价值包不当新 BAR
       拟议对齐 399 → 形 B：拒绝
       Behind + 厚剩余 → 形 E：P05；理由写 Pace；禁一夜 −15%
       自己软开 → 形 F：有限期围栏，399 不当永久 BAR
       新店满房 → P15
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活过夜 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（过夜 BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     无（本剧不是关房）；可选：高峰关深折闪促（P18/P64）
Restriction Action:   无（本剧不是 MinLOS）
Channel Action:       不把 Brand.com dump 到 399「对齐开业价」
Comp Set Action:      新店进观察名单 / 触发重审日历；不改今夜 BAR
Staging:              第一刀 = 拆开业促销 vs 连续战 + Ahead Hold BAR。24h 看 Pickup 是否因开业塌
Do-not-do:
  - BAR → 399「对齐开业价」
  - 一夜 −15%
  - 编华住开业 SOP / 开业必须便宜 X% / 佣金% / 699
  - 顾问代操作 PMS/OTA/Comp Set 后台
  - 开 P69
```

真实酒店若当前 BAR 不在该带，保留 **开业价不自动跟 + Hold 公开 BAR** 方向，不把 779–799 当市场 Fact。

## 5. Why

1. 开业 intro 是**对方**的获客战术（常有结束日），不是本店需求曲线。PriceLabs：闪促 ≠ BAR 策略。
2. 折扣往往只让本来会来的人付更少（Enz 2003 方向），开业恐慌砍 BAR 会训练市场。
3. Comp Set 重审是**诊断名单**动作（Lighthouse），不是今夜报价器。
4. 顾问十段要求落到日期/价格：本剧日期 = 用户 Stay Date；价 = Hold 当前 BAR 带。

## 6. Expected Impact

- Ahead 夜：不把开业 dump 写成新 BAR，尾房仍按当前 BAR 卖。
- 观察名单：后续 STAR/Pace 能分开「新供给」与「我们输了」。
- 真弱夜：P05 仍有出口，不把剧本写成死守。

点估计 NV。不编「跟了会掉 X 个点」。

## 7. Risk

- 新店产品其实可比且市场被拉开 → Pickup 塌；24h 触发再评 Pace。
- 不可比被当成「我们贵了」→ 走 P36 可挡住。
- 自己软开把 399 锚成市场记忆 → 以后难涨（形 F）。
- 把新店满房当成该 dump → 其实是 P15 溢出。

## 8. What To Watch

| 观察 | 窗 | 用来 | 缺则 |
| --- | --- | --- | --- |
| 本店 1D/3D Pickup | 开业周每日 | 是不是真塌 | 用户 |
| 新店是否仍标开业/intro | 当日 | 闪促还是新 BAR | 截图 |
| 可比口价 | 当日 | P36 | 用户 |
| Comp Set / STAR 是否已含新店 | 本周 | 观察 vs 今夜价 | NV 则只观察 |
| 公开 BAR 是否仍 Hold | 当日 | 有没有被对齐到 399 | 用户 |

## 9. Re-evaluation Trigger

- 不可比 → **P36**
- 已开业连续多店砸 → **P16**
- 新店满房溢出 → **P15**
- Pace 转真 Behind + 剩余厚 → **P05**；仍禁 399 与一夜 −15%
- 月末冲量借口 → **P56**
- 份额月报借口 → **P57**
- 用户给出开业合同/集团 SOP → 引用原文，仍不代操作

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店新店 SOP / 「必须进 Comp Set 的天数」全部 NV；799/399 是 Hypothesis/Simulation；Enz 2003 不是开业专论。
为什么不是 Low：促销≠BAR、先看自己 Pace、新供给先重审名单 多源同向；第一刀（Hold BAR）可逆。
因此怎么用：先拆开业闪促 vs 连续战；Ahead 不跟 intro；不 399；真弱才 P05。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-new-hotel-open-sat.md`：周六 Pace Ahead remaining **14**、BAR **799**；马路对面新店开业公开 intro **399**；销售要 BAR→**399**「不跟没人订」→ **Hold 779–799 首选 799**；不要 dump 到 399。14/399/799 **Simulation only**。399 = **被拒绝的 dump**（对面 intro，不是推荐 BAR）。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 10:17 CST | 首版。P68。开业价≠必须跟的市价；Ahead Hold；拒 399；Comp Set 重审≠改今夜 BAR。08:17 不规定 → 本案例槽核实后开。未开 P69。 |

> 交叉指针（2026-08-28 14:17，不改正文）：开业 intro 仍本剧；「含早套餐当 BAR / 含早地板」过程走 **P69**。不写 P70。

> 交叉指针（2026-08-28 16:17，不改正文）：Diagnose 走 **T-Package** `theory/package-vs-ep-bar.md`；过程仍 **P69**。不写 P70。
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。

> 交叉指针（2026-08-29 06:17，不改正文）：对面开业 intro 仍本剧；「自己的闪促/秒杀改写公开 BAR」过程走 **P73** `flash-promo-vs-bar.md`。不写 P74。
>
> 交叉指针（2026-08-29 08:17，不改正文）：自己的闪促改尺 Diagnose 走 **T-Flash**；过程仍 P73。开业 intro 仍本剧。不写 P74。

