# Playbook P66｜RMS 建议不是定价权 / 不要跟系统 dump（Override vs Blind Follow）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/rms-rec-override.md`  
> BACKLOG：P66 RMS 建议不是定价权 · HIGH · 先诊断枝（本轮同开）· slug **rms-rec-override**  
> 状态：**drafted**（2026-08-28 02:17 CST）  
> 配套卡：`recommendations/dont-follow-rms-dump.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/rms-vs-pace.md`（RMS 建议价 vs 当前 BAR vs Pace；**无默认 override %**；本店 RMS / 华住会字段 NV）  
> 理论：T17 Override 纪律（knowledge-map 待建节点，本剧过程）· P17 Forecast Miss = 先改判断 · T20 品牌底 · `theory/optimization-advise.md` bid price 是机会成本语言不是 RMS 按钮  
> 交叉：P17 预测错了先改 Forecast ≠ 今夜跟系统砍 BAR · P05 真 leftover 理由写 Pace · P56 月末冲量 · T20 声明底 · P01 Ahead Hold · P43 口头拒单不是系统涨令 · P60 错映射活价 · P64 嵌套低档 · P45 早会一个动作  
> 问题树：§73 「系统建议不是定价权」  
> 仿真：`cases/sim-2026-rms-dump-sat.md`（**Simulation**）  
> 证据等级：A 协会（HSMAI Academy *DO'S and DON'TS of Hotel RMS*：不要全盘接受建议；没有正当理由不要 override；input vs output override — §54）；A Vendor（IDeaS G3 2025-08：Pricing Overrides 是产品能力，Faster Sync — §54）；C Vendor 证言（Adagio：GM 可 override 建议 — 能力，不是跟 dump 许可证）；B / Hypothesis（Ahead 不跟系统 dump；Hold 当前 BAR；真弱走 P05 理由写 Pace）  
> Last Verified：2026-08-28  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议先用 Pace/Remaining/事件核 RMS 建议；Ahead 不跟 dump；真弱才 P05；没有正当理由也不乱改系统价。**不操作** PMS / RMS / OTA / 华住会，不自动定价，不代点 override。  
> 禁止：发明华住会 / IDeaS / Duetto 本店 SOP、默认 override %、佣金%、699；把 HSMAI 80:20 写成中国/本店目标；一夜 −15%；BAR→399「系统说卖不满」；把 14/399/799 当市场 Fact；开 P67；把 Forecast Miss 当本剧（误入 P17）；把月末冲量当本剧（误入 P56）。  
> 00:17「不要规定 P66」= theory 槽不得指定；本案例槽核实 T17 Override 缺口后开。

---

## 0. 一句话

**RMS 建议的价是输入，不是定价权。** 先问 Pace / Remaining / 事件是否同意这晚该 dump 或该涨。高峰 / Pace Ahead：默认 **不跟系统 dump**；Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「系统说卖不满」把 BAR 砍到 399。真弱夜才走 **P05**，理由写 Pace，不写「系统说了」。没有正当理由（突发事件、脏数据、战略例外）也不要乱改系统价——HSMAI：全盘接受和随便 override 都是错。预测错了先改判断（**P17**）。有声明品牌底走 **T20**。本店 RMS / 华住会字段 = **NV，不编**。

完成定义：一张「先核 Pace 是否同意 RMS → Ahead 不跟 dump / 真弱走 P05 → 无理由不乱改 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A Ahead + 系统 dump 399** | 「IDeaS/华住会建议 399，要不要跟」 | 用黑盒当定价权；Ahead 稀缺被砸 | **不跟**；Hold 779–799 首选 799 |
| **B 真弱 + 系统仍挂高** | 「系统不让降，但 Pace Behind remaining 厚」 | 系统也可能慢 | **P05** 有界围栏；理由写 Pace；能改输入先改 Forecast（P17） |
| **C 别跟系统对着干** | 「系统说了就跟，别分析」 | 全盘接受 | 拒绝；HSMAI Don't：hook, line, and sinker |
| **D 没理由乱改系统** | 「我熟市场，先砍再说」 | 无事件/无 Pace 的 output override | 拒绝乱改；要改先写理由 |
| **E 脏数据/口头/错价驱动建议** | 「系统涨了因为赶过人 / 错价进了模型」 | 输入脏 | 口头→**P43**；错映射→**P60**；Forecast 假设错→**P17** |
| **F 误入** | 月末冲量 / 品牌底 / 嵌套低档 | 别的剧本 | 预算→**P56**；声明底→**T20**；低档还挂→**P64** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. RMS 建议的价是**输入，不是定价权**。先问 Pace / Remaining / 事件是否同意这晚该 dump。本店 RMS / 华住会字段 = **NV**，不编。
2. 高峰 / Pace Ahead：默认**不跟系统 dump**。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「系统说卖不满」把 BAR 砍到 399。
3. 真弱才走 P05，理由写 Pace，不写「系统说了」。没有正当理由也不要乱改系统价。预测错了先改判断（P17）。有声明底走 T20。不要 BAR→399。
```

尺（Hypothesis；14/399/799 只 Simulation）：公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认 override %**。HSMAI「正常时 80:20 不改/改」= 协会访谈启发式，**不是**本店目标、不是中国 SOP。本店 RMS / 华住会字段 = **NV**。

Vendor / 协会指针（不写成华住会 SOP）：

- HSMAI Academy *DO'S and DON'TS of Hotel Revenue Management Systems*（A 协会，§54）：不要全盘接受 RMS 建议；没有正当理由（突发事件、数据异常、战略决定）不要 override；分清 **input override**（改预测变量）与 **output override**（直接改建议价/库存）。正当 override 要记录理由。**80:20** 只作该文启发式，不进本库默认 %。
- HSMAI Academy *Enhancing RMS Performance through Human-Algorithm Interaction*（A 协会，§54 同组）：input 优先（有时间时）；output 适合立刻调、须克制。override 成功率尺该文称 largely undeveloped → 本库**不发明**成功率 %。
- IDeaS G3 *What's New* August 2025（A Vendor，§54）：**Pricing Overrides** 是产品能力（Faster Sync for Pricing Overrides）。能力 ≠ 必须跟 dump。
- IDeaS Adagio 成功故事（C Vendor 证言，§54）：GM 可 override 建议。**4% RevPAR 不采用**。不是跟 399 的许可证。

本店 RMS 名 / 华住会字段 / override 权限 / 是否自动推价 = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①RMS 建议价 vs 当前公开 BAR；②Pace / Remaining（Ahead 稀缺还是 Behind leftover）；③用户是要「跟系统砍」还是「跟系统对着干乱改」。

先问（缺则标 NV，不停）：

- Stay Date、DTA、DOW；Remaining；Pace（Ahead / On / Behind）
- 当前公开 BAR；RMS 建议价（或已自动推出去的价）
- 本店 RMS 是哪套（IDeaS / Duetto / 华住会 / 无 / Unknown）— **NV 不编**
- 建议是预测输入错了，还是直接改了价（input vs output）
- 用户原话：「系统建议今晚 399 要不要跟」「别跟系统对着干」「IDeaS 降了我们也要降」「系统不让降但卖不动」

本店 RMS SOP / 华住会字段 / 自动推价开关 / 佣金% = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「建议 vs Pace，Ahead 还是弱」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | RMS 建议价 vs 当前公开 BAR？方向是 dump、Hold、还是涨？ | 价差是本剧输入 |
| D2 | Pace Ahead / Remaining 薄？ | Ahead + dump → 形 A；不跟 |
| D3 | Pace Behind + remaining 厚，系统仍挂高？ | 形 B；P05；理由写 Pace |
| D4 | 拟议是否「系统说了就跟 / BAR→399」？ | 形 C；拒绝 |
| D5 | 拟议是否「没数据先砍/先涨，我熟市场」？ | 形 D；拒绝无理由 output override |
| D6 | 建议是否被口头拒单、错映射、错 overlay 污染？ | 形 E → P43 / P60 / P17 |
| D7 | 月末冲量 / 声明底 / 低档还挂？ | 形 F → P56 / T20 / P64 |

## 3. Decision Tree（过程）

```text
FO/GM/收益：「系统建议 399 要不要跟 / 别跟系统对着干 / 系统不让降但卖不动」
  → 先问：RMS 建议价 vs 当前 BAR？Pace Ahead 还是 Behind？（D1/D2）
       Ahead + 系统 dump → 形 A：
            不跟 dump；Hold 779–799 首选 799
            可记：建议与 Pace 不一致；不代点 override
       Behind + remaining 厚 + 系统仍高 → 形 B：
            走 P05 有界围栏；理由写 Pace
            有时间 → 先改 Forecast 输入（P17 / input override）再看建议
       「系统说了就跟」→ 形 C：拒绝全盘接受
       「没理由先改」→ 形 D：拒绝无理由 output override；要改先写理由
       脏数据/口头/错价 → 形 E：P43 / P60 / P17
       月末/品牌底/嵌套 → 形 F：P56 / T20 / P64
       「BAR→399 因为系统说卖不满」→ 拒绝
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     当前公开灵活 BAR vs RMS 建议价
Current Value:        用户值（sim 常为 BAR 799；RMS 建议 399）
Recommended Range:    Ahead：Hold 779–799；弱夜：不自动把 BAR 写成 399，走 P05 围栏
Preferred (首选):     Ahead 799（Hypothesis / Simulation）
Inventory Action:     本剧不因 RMS dump 关/开库存；真压缩走 P03/close-low；真 leftover 走 P05
Restriction Action:   本剧不新堆 MinLOS（P33/P40）
Channel Action:       不要把 RMS dump 推成全渠道新 BAR
RMS flag:             建议=输入；本店系统名 / 是否自动推价 = **NV**
Staging:              第一刀 = 核 Pace 是否同意建议。Ahead 不跟 dump。24h 看 Pickup 与活价是否仍 Hold
Do-not-do:
  - Ahead 夜把 BAR 改成 RMS 建议 399（形 A/C）
  - 「别跟系统对着干」当唯一理由
  - 无 Pace/事件的乱改（形 D）
  - 一夜 −15%
  - 把 HSMAI 80:20 写成本店目标 %
  - 把 Forecast Miss 当跟 dump（那是 P17）
  - 把月末冲量当 RMS 许可证（那是 P56）
  - 顾问代点 RMS override / 代推价
  - 开 P67
```

真实酒店若当前 BAR 不在该带，保留 **不跟 Ahead dump + 真弱走 P05** 方向，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「今晚不跟系统 399，Hold 799」** 或 **「真弱夜走围栏，理由写 Pace」**——不是 **「一夜 −15%」**，也不是 **「砸到 399」**。

顾问对 GM / 收益三句回话：

> 「系统建议是输入，不是定价权。先看 Pace 同不同意这晚该 dump。」
> 「周六 Ahead 不跟 399。Hold 799。」
> 「真卖不动再走弱夜围栏，理由写 Pace，不写系统说了。没有理由也不要乱改系统价。」

## 5. Why

1. **用了哪些数据（Fact）：** HSMAI Academy Dos/Don'ts（A 协会，§54）：不要全盘接受；无正当理由不 override；input vs output。IDeaS G3 Pricing Overrides 是产品能力（A Vendor，§54）。店内：Pace、Remaining、当前 BAR、RMS 建议价 = 用户。本店 RMS 名 = 用户或 NV。
2. **逻辑链：**
```text
RMS 建议 = 模型输出（受输入、配置、竞对、预测约束）
Pace / Remaining = 这晚还能不能卖、卖给谁
Ahead + dump 建议 → 建议与可观察 Pace 冲突 → 不跟（形 A）
Behind + 高建议 → 建议可能慢 → P05，理由写 Pace（形 B）
全盘接受 = HSMAI 明确 Don't（形 C）
无理由 output override = HSMAI 明确 Don't（形 D）
脏输入 → 先修输入（P17/P43/P60），不要用脏输出当市场价
BAR→399「系统说了」= 把黑盒写成公开锚
```
3. **理论 / 卡：** T17 Override 纪律（本剧过程）；P17 先改判断；T20 品牌底；P01/P05 Pace；optimization-advise 机会成本 ≠ RMS 按钮；主卡 `dont-follow-rms-dump.md`。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；Ahead 默认不跟 dump；无弹性系数；无本店 override 成功率；80:20 不进默认。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | Ahead 不跟 dump 可能少接一截低价尾；换的是不砸稀缺。弱夜不跟高建议、走 P05 才是增量 |
| ADR | 跟 399 → ADR 被系统建议稀释；Hold 799 保锚 |
| RevPAR | 不编精确增收；IDeaS 4% **不采用** |
| Pickup | 分：跟 dump 后的低价 Pickup vs Hold 后的 BAR 层 |
| Conversion | 弱夜死守系统高价可能零转化 → 形 B |
| Net Revenue | 佣金 NV；不算假精确净额 |
| Profit | Unknown |

允许的写法：若 24h 内公开 BAR 仍 Hold、未推 399、Pickup 未塌成「主渠道不可订」→ Ahead 不跟 dump 成立。若弱夜按 Pace 开围栏后 Pickup 回、公开 BAR 未砸成 399 → 形 B 成立。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 跟 dump 砸稀缺 | Ahead 夜 BAR→399 | 公开栏 | 拒绝；改回意图 BAR |
| 形 C 全盘接受 | 「系统说了」 | 早会话术 | 拉回 Pace 核 |
| 形 D 乱改 | 无理由 override | 改价日志 | 停；补理由或撤回 |
| 形 B 空转 | 真弱死守系统高价 | Pickup≈0 | **P05**；理由写 Pace |
| 当 P17 | 预测错了却只改今夜 BAR | 假设清单 | **P17** 先改判断 |
| 当 P56 | 月末用 RMS 当刀 | 账期话术 | **P56** |
| 当 T20 | 系统建议穿声明底 | 用户地板 | **T20** 不破底 |
| dump 399 | 「系统说卖不满」 | 公开栏 | 拒绝 |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| RMS 建议价 vs 当前 BAR | 即时 | gap；见 rms-vs-pace | 用户 |
| Pace / Remaining | 即时 | Ahead/On/Behind | 用户 |
| 公开活价是否被系统推成 dump | 改后 | 全渠道 | 用户 |
| 有无书面 override 理由 | 每次 | HSMAI：记录理由 | 用户 |
| 24h 净 Pickup | 24h | 分层 | 用户 |

默认最少 5 个：RMS 建议价、当前 BAR、Pace、Remaining、是否已自动推价（NV 则问）。

## 9. Re-evaluation Trigger

- 预测假设/事件 overlay 错 → **P17**（先改判断，不是跟 dump）
- 真 Behind + remaining 厚 → **P05**；仍禁公开 BAR→399 当新锚
- 有声明品牌底且建议穿底 → **T20**
- 月末冲量话术 → **P56**
- 口头拒单驱动系统涨 → **P43**
- 错映射活价进了模型 → **P60**
- 低档还挂着像「系统 399」 → 先排除 **P64/P60**
- 用户补出本店 RMS 名与是否自动推价 → 在建议里引用用户配置，仍不编 SOP

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 RMS / 华住会字段 / 是否自动推价全部 NV；799/399/14 是 Hypothesis/Simulation；HSMAI 80:20 不采用为店规；IDeaS 4% 不采用。
为什么不是 Low：建议≠定价权可证伪；Ahead 跟 dump 可证伪；HSMAI 双 Don't（全盘接受 vs 无理由改）同向；第一刀（核 Pace + Hold 或 P05）可逆。
因此怎么用：先核 Pace；Ahead 不跟 dump；真弱走 P05；无理由不乱改；不 dump 399。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-rms-dump-sat.md`：周六 Pace Ahead remaining **14**，BAR **799**；RMS 建议公开 **399**「卖不满」；GM 说跟系统 → **不跟 399**；**Hold 779–799 首选 799**。可选第二拍：弱周二 Behind remaining 厚、系统仍 799 → **P05** 围栏，理由写 Pace，不要把 399 写成新 BAR。14/399/799 **Simulation only**。399 = **被拒绝的 RMS dump / 被拒绝的新 BAR**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 02:17 CST | 首版。P66。RMS 建议≠定价权；Ahead 不跟 dump；真弱 P05；拒 399；无默认 %。00:17 不规定 → 本案例槽核实 T17 后开。未开 P67。 |
| 2026-09-05 00:17 CST | Rate Strategy / Occupancy-triggered auto deepen **evaluated → skip**（S04-22 leftover）。§137 OCC%/PIE auto 复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + P33/P64/P37。全文 `research-log/2026-09-05-0017-theory-skip-rate-strategy.md`。不开 P88。 |
| 2026-09-05 02:17 CST | C05-02 OCC-auto Simulation drafted（`cases/sim-2026-occ-auto-rate-strategy-sat.md`）。§138 CASE 指针复述 §137；三句 / 399 / 799 **不改**；过程仍本剧 + P33/P64/P37。全文 `research-log/2026-09-05-0217-occ-auto-rate-strategy-case.md`。不开 P88。 |

| 2026-09-06 16:17 CST | Fixed Rate / Rate Amount Override / Force deepen **evaluated → skip**（S06-14 leftover）。§152 Fixed/Override 族复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + P65/P87/P24/P33。全文 `research-log/2026-09-06-1617-theory-skip-fixed-override.md`。不开 P88。 |

> 交叉指针（2026-08-28 06:17，不改正文）：同日延退/早到过程走 **P67** `late-checkout-early-checkin`；本剧边界不变。

> 交叉指针（2026-08-28 10:17，不改正文）：系统建议走本剧；开业价走 **P68**。不写 P69。

> 交叉指针（2026-08-31 06:17，不改正文）：RMS 建议卖价仍本剧。hurdle / bid price / LRV 可售门 ≠ 公开 BAR 过程走 **P85** `hurdle-bid-lrv-vs-bar`。不写 P86。

> 交叉指针（2026-08-31 08:17，不改正文）：RMS 建议卖价仍本剧。hurdle/bid/LRV Diagnose 走 **T-Hurdle**，过程仍 **P85**。不写 P86。

> 指针（2026-09-05 02:17 C05-02，不改正文三句 / 399 / 799）：OCC-auto Rate Strategy / PIE Simulation `cases/sim-2026-occ-auto-rate-strategy-sat.md`；§138 CASE 指针复述 §137。Diagnose 仍本剧；过程 + **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。孪生 RMS 建议卖价卷仍 `cases/sim-2026-rms-dump-sat.md`。T05-00 deepen **已 skip**。不开 P88。不开 P89。

> 交叉指针（2026-09-05 04:17 R05-04，不改正文三句 / 399 / 799）：§139 新开 Clock Occupancy Adaptable Rates（OCC 阶梯自动换价 + manual price priority ≠ 公开灵活 BAR rewrite）+ Protel OCC% Close 用途升核。Diagnose 仍 **P66**；过程仍 **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 16:17 T06-16，不改正文三句 / 399 / 799）：Fixed Rate / Rate Amount Override / Discount Reason / Force Availability deepen **已 skip**。§152 复核 only。Diagnose 仍本剧（+ **P65** ± **P87** ± **P24/P33** ± **P78/P69** ± **P01/P64**）；Hold 779–799 首选 799；拒 399；不发明 699。单笔 Fixed/override ≠ 公开 BAR rewrite。不开 P88。不开 P89。

> 指针（2026-09-06 18:17 C06-18，不改正文三句 / 399 / 799）：Fixed/Override/Force misread Simulation `cases/sim-2026-fixed-override-misread-sat.md`；§153 CASE 指针复述 §152。Diagnose 仍本剧（+ **P65** ± **P87** ± **P24/P33** ± **P78/P69** ± **P01/P64**）；Hold 779–799 首选 799；拒 399；不发明 699。T06-16 deepen **已 skip**。不开 P88。不开 P89。

> 交叉指针（2026-09-06 20:17 R06-20，不改正文三句 / 399 / 799）：§154 新开 Clock Manual Price + Apaleo Change Prices + Protel RBD Override rate。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。T06-16 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 22:17 S06-22，不改正文三句 / 399 / 799）：Mass Update / Daily Rates Create·Replace / Refresh Rate / Update rates 误读主闸仍 **P66**（+ **P65** ± **P64** ± **P01/P05** ± **P60**）；§155。Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

| 2026-09-07 00:17 CST | Mass Update / Daily Rates Replace / Refresh·Update deepen **evaluated → skip**（S06-22 leftover）。§155 复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + P65/P64/P01/P05/P60。全文 `research-log/2026-09-07-0017-theory-skip-mass-update-refresh.md`。不开 P88。 |

| 2026-09-07 02:17 CST | C07-02 Mass Update / Refresh misread Simulation drafted（`cases/sim-2026-mass-update-refresh-misread-sat.md`）。§156 CASE 指针复述 §155；三句 / 399 / 799 **不改**；过程仍本剧 + P65/P64/P01/P05/P60。全文 `research-log/2026-09-07-0217-mass-update-refresh-case.md`。不开 P88。 |

> 指针（2026-09-07 00:17 T07-00，不改正文三句 / 399 / 799）：Mass Update / Daily Rates Create·Replace / Refresh Rate / Update rates deepen **已 skip**。§155 复核 only。Diagnose 仍本剧（+ **P65** ± **P64** ± **P01/P05** ± **P60**）；Hold 779–799 首选 799；拒 399；不发明 699。批量价表/已订同步 ≠ 公开 BAR rewrite。不开 P88。不开 P89。

> 指针（2026-09-07 02:17 C07-02，不改正文三句 / 399 / 799）：Mass Update / Daily Rates Replace / Refresh·Update misread Simulation `cases/sim-2026-mass-update-refresh-misread-sat.md`；§156 CASE 指针复述 §155。Diagnose 仍本剧（+ **P65** ± **P64** ± **P01/P05** ± **P60**）；Hold 779–799 首选 799；拒 399；不发明 699。T07-00 deepen **已 skip**。不开 P88。不开 P89。

| 2026-09-07 04:17 CST | R07-04 sources-recap（§157 Clock Sections Mass Update + HotelKey Bulk Update Rate + Stayntouch Rate Manager 新开；Apaleo existing-not-update 升核）。三句 / 399 / 799 **不改**；过程仍本剧 + P65/P64/P01/P05/P60。全文 `research-log/2026-09-07-0417-sources-recap.md`。不开 P88。 |

> 指针（2026-09-07 04:17 R07-04，不改正文三句 / 399 / 799）：Mass Update / Sections Mass Update / Bulk Update Rate / APPLY PRICE / Refresh·Update 误读主闸仍本剧（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。§157 互补源。T07-00 deepen **已 skip**；C07-02 已写。不开 P88。不开 P89。

> 指针（2026-09-07 08:17 T07-08，不改正文三句 / 399 / 799）：RTC / Day Types / Membership Auto Discount deepen **已 skip**。§158 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。库存 vs 计费房型 / 日历临时加减 / TX 过账折扣 ≠ 公开 BAR rewrite。不开 P88。不开 P89。


> 指针（2026-09-07 10:17 C07-10，不改正文三句 / 399 / 799）：RTC / Day Type / Membership Auto Discount misread Simulation `cases/sim-2026-rtc-daytype-misread-sat.md`；§159 CASE 指针复述 §158。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T07-08 deepen **已 skip**。不开 P88。不开 P89。


| 2026-09-07 10:17 CST | C07-10 RTC / Day Type / Membership Auto Discount misread Simulation drafted（`cases/sim-2026-rtc-daytype-misread-sat.md`）。§159 CASE 指针复述 §158；三句 / 399 / 799 **不改**；过程仍邻闸 P61/P49/P06·本剧。全文 `research-log/2026-09-07-1017-rtc-daytype-case.md`。不开 P88。 |
