# Playbook P62｜当天取消重订更低价（Cancel-Rebook 套利）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/same-day-cancel-rebook.md`  
> BACKLOG：P62 当天取消重订更低价 · HIGH · 先决策卡（本轮同开）· slug **same-day-cancel-rebook**  
> 状态：**drafted**（2026-08-27 10:17 CST）  
> 配套卡：`recommendations/dont-cut-to-stop-cancel-rebook.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/cancel-rebook-gap.md`（同住取消再订件数；ADR before vs after；**无默认 %**；本店改订吃新价政策 NV）  
> 交叉：P14 高取消 Soft 诊断（取消≠重订）· P38 收紧**新生产**免费取消窗 · P19 浅预付/NR 产品 · P54 no-show（没到≠取消重订）· P05 真 leftover · P45 早会一个动作 · P59/P60 价平/错价 ≠ 本剧 · P46 早离  
> 问题树：§69 「取消重订不是降价理由」  
> 仿真：`cases/sim-2026-cancel-rebook-sat.md`（**Simulation**）  
> 证据等级：A Vendor/OTA（Booking Partner Hub：NR 改期不得改到更低总价 — §46）；B / Hypothesis（取消≈同住更低价重订 = 对自己曲线套利；Ahead 不砍公开 BAR；未来日期走 P38/P19）；IJHM *Cancel, rebook, save* = **指针**（ScienceDirect/DOI 本轮未核开全文，葡萄牙样本% **不当中国 Fact**）  
> Last Verified：2026-08-27  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议先拆「真取消空出来」vs「同住取消再订更低价」；Ahead Hold BAR；问本店同住改订是否吃新价（**NV**）；未来日期评 P38/P19。**不操作** PMS / RMS / OTA / 前台，不自动定价，不代改已确认单、不代退改。  
> 禁止：发明华住/中国取消重订 SOP、罚金%、佣金%、699；一夜 −15%；BAR→399「别再被刷」；把 599 写成新 BAR；把 8/7/599/399/799/14 当市场 Fact；开 P63；把取消潮当 leftover（误入 P05）；把同住重订当 Soft 空房（误入 P14 砍价枝）。  
> 08:17「不要规定 P62」= theory 槽不得指定；本案例槽核实取消重订缺口后开。

---

## 0. 一句话

**取消重订是对自己价格曲线的套利，不是新需求。** 先问这波是真取消空出来，还是同一拨人取消再订更低价。认下更低价、或为了「别让他们取消」先砍公开 BAR，都会训练行为。高峰 / Pace Ahead：**Hold 779–799 首选 799**（Hypothesis / Simulation）。本店是否允许同住改订吃新价 = **NV，不编华住 SOP**。未来高峰日期收紧免费取消窗走 **P38**；浅预付走 **P19**。真弱剩余才 **P05**。已发生 no-show 走 **P54**。高取消但无同住重订走 **P14**。

完成定义：一张「先拆真取消 vs 同住套利 → Ahead Hold BAR → 政策问 NV → 未来日期 P38/P19 → 真弱才 P05 → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 套利当弱需求** | 「取消了又订回来更便宜，今晚该砍」 | 同住吃自己降价曲线 | **Hold BAR**；不要跟到重订价 |
| **B 预防性砍价** | 「干脆降价让他们别取消」 | 先砍公开价 = 制造套利窗口 | **禁止。** Ahead Hold 779–799 首选 799 |
| **C 灵活价别涨** | 「免费取消的就别涨了」 | 把已发生套利写成永久停涨 | 已订灵活单 Soft 看（邻 P14）；**新生产**高峰仍可收窗（P38）或开浅 NR（P19），不是 dump BAR |
| **D Soft 空房误诊** | 取消跳、房间数掉 | 若取消≈同住更低价重订，Pace 间夜可平、ADR 稀释 | 数同住重订；**不是** P14「空出来」默认砍价枝 |
| **E dump 到 399** | 「别再被刷，BAR→399 / 跟 599」 | 用公开 BAR 奖励套利 | **拒绝。** 399 = 被拒绝的 dump；599 = 重订价，不是推荐新 BAR |
| **F 误入** | 无重订的取消潮 / no-show / leftover / 错价破平 | 别的剧本 | 无重订取消→**P14**；没到→**P54**；真弱→**P05**；破平/错价→**P59/P60**；早离→**P46** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这波是 **真取消空出来** 还是 **同一拨人取消再订更低价**。后者是对自己价格曲线套利，不是新需求，也不是今晚该砍 BAR 的理由。本店是否允许同住改订吃新价 = **NV**，不编华住 SOP。
2. 高峰 / Pace Ahead：Hold 779–799 首选 799（Hypothesis / Simulation）。不要为了「别让他们取消」先把公开价砍下去——那是在制造套利。未来日期收紧免费取消窗走 P38；浅预付走 P19。
3. 真弱剩余才走 P05。已发生的 no-show 走 P54；高取消 Soft 诊断走 P14。不要把 BAR dump 到 399「好让客人别取消重订」。
```

尺（Hypothesis；799/599/399/14 只 Simulation）：公开灵活 **Hold 779–799 首选 799**。禁止一夜 −15%。禁止 BAR→399。禁止把重订价（sim 599）写成新 BAR。本店同住改订是否保留原价或吃新价 = **NV**。

Vendor / 学术指针（不写成中国 SOP）：

- Booking Partner Hub *Changing dates for non-refundable bookings*（A Vendor/OTA，§46）：NR 改期条件含「只能改到同等或更高总价」——证明围栏产品可以挡住「改到更便宜」；**不是**华住改订 SOP，也不是「灵活单必须跟新价」的许可证。
- IJHM 2026 *Cancel, rebook, save*（指针，§46）：取消后近即时更低价重订 = revenue leakage；建议 late cut guardrails、围栏折扣、价平审计、系统标注重订风险。全文本轮未核开；样本地理/％ **不当中国 Fact**。

本店改订吃新价政策 / 华住取消重订 SOP / 罚金% / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①取消间夜 vs 同住（同名/同日期/同房型或可核）更低价重订间夜；②当前公开 BAR 与 Pace / Remaining；③用户是要「认新价」「先砍公开价防取消」还是「跟到重订价」。

先问（缺则标 NV，不停）：

- Stay Date、DTA、DOW；Remaining；Pace（Ahead / On / Behind）
- 窗内取消件数 / 间夜；其中同住更低价重订件数（同名或同确认链）
- 原 ADR vs 重订 ADR（店内口径；缺则 **NV**，不编 %）
- 当前公开灵活 BAR；是否刚降过公开价 / 开过深促
- 本店政策：同住取消再订是否允许吃新价（**NV**）
- 用户原话：「取消了又订回来更便宜要不要认」「干脆降价让他们别取消」「免费取消的就别涨了」「BAR 砍到 599/399 别再被刷」

本店改订政策 / 华住 SOP / 罚金% / 佣金% = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「套利还是空房、Ahead 还是弱」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 取消后是否出现同住更低价重订（同名/同日期） | 有 → 本剧形 A；无 → 先 **P14** Soft |
| D2 | 取消件数 ≈ 重订件数？Pace 间夜是否接近持平而 ADR 掉 | 是 → 套利稀释，不是「空出来」 |
| D3 | Pace Ahead / Remaining 薄？ | Ahead → Hold；勿预防性砍价（形 B） |
| D4 | 拟议是否「跟到重订价 / BAR→399 / −15%」 | 形 E；拒绝 |
| D5 | 拟议是否「免费取消的就别涨 / 先降让他们别取消」 | 形 B/C；新生产走 P38/P19，不 dump |
| D6 | 是否当天没到（无取消记录） | **P54** |
| D7 | 释放后厚且 Behind、且无套利主拍 | 真 leftover → **P05**（理由写 Pace，不写「别被刷」） |
| D8 | 是否错价/破平驱动的「便宜」 | **P60/P59**；修好侧，不砍意图 BAR |
| D9 | 是否早离回库 | **P46** |

## 3. Decision Tree（过程）

```text
FO/GM：「客人取消了又订回来更便宜 / 干脆降价让他们别取消 / 免费取消别涨 / BAR→599或399」
  → 先问：同住更低价重订有没有？（D1）
       没有（只取消、无同住重订）→ P14 Soft 诊断；勿自动砍 BAR
       有（取消≈重订更低 ADR）
            → Pace Ahead / 仍紧？
                 是 → 形 A+B：Hold 779–799 首选 799；不要跟重订价；不要预防性砍公开价
                 否（真 Behind + remaining 厚）→ 才评 P05 围栏；理由写需求，不写「别被刷」；仍禁 399 与一夜 −15%
            → 「认不认新价」→ 问本店政策（NV）；顾问不代点 PMS；不编华住 SOP
            → 未来高峰日期 → P38 收新单免费窗；P19 浅 NR；不是今夜 dump 公开 BAR
       当天没到 → P54；错价/破平 → P60/P59；早离 → P46
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 BAR
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     不因套利波制造「空房」叙事而 dump；真释放后按 remaining+Pace
Restriction Action:   今夜不因套利新开 MinLOS；**未来**高峰日期评 P38 收新单免费窗
Channel Action:       不把公开 BAR 对齐到重订价；浅 NR / 围栏促销走 P19/P18 闸，不是 BAR→399
Policy flag:          同住改订是否吃新价 = **NV**（问本店；顾问不代改单）
Staging:              第一刀 = 拆真取消 vs 同住重订 + Ahead Hold BAR + 政策问句。24h 看同住重订件数与公开 ADR
Do-not-do:
  - 为了「别让他们取消」先砍公开 BAR（制造套利）
  - 把 BAR 跟到重订价（sim 599）当新 BAR
  - BAR → 399「别再被刷」
  - 一夜 −15%
  - 编华住/中国取消重订 SOP / 罚金% / 佣金% / 699
  - 顾问代操作 PMS/OTA 退改
  - 开 P63
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向 + 不跟重订价**，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「Hold BAR + 问同住改订政策 + 未来日期评 P38/P19」**，不要 **「降到他们看到的价」**。

顾问对 GM / 前台三句回话：

> 「先问是真空出来还是同一拨人取消再订更便宜。后者是对自己曲线套利，不是新需求。」
> 「Ahead 就 Hold 公开价，不要为了别让他们取消先砍——那是在制造套利。未来日期收窗/浅预付。」
> 「真弱才 leftover。不要砸到 399。认不认新价问本店政策，不编华住 SOP。」

## 5. Why

1. **用了哪些数据（Fact）：** Booking：NR 改期不得改到更低总价（A Vendor/OTA，§46）——围栏可挡「改便宜」路径之一。店内：取消件数、同住重订件数、Pace、Remaining、公开 BAR = 用户。本店改订政策 = 用户或 NV。
2. **逻辑链：**
```text
同住取消 + 更低价重订 = 吃你自己的降价/促销曲线（套利）
≠ 新需求进入
≠ Soft 空房必须填（可与 P14 并存，但动作不同）
先砍公开 BAR「预防取消」= 扩大价差窗口，制造更多重订
认下重订价 / BAR→399 = 训练「等降再订」
未来：收新单免费窗（P38）+ 浅 NR（P19）缩小可套利灵活库存
真 Behind leftover 才 P05；理由是 Pace，不是「别被刷」
```
3. **理论 / 卡：** P14 Soft 诊断；P38 窗口；P19 产品；P05 leftover；P54 no-show；P45 早会；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「Ahead 不因套利砍公开 BAR」方向；无弹性系数；无中国取消重订% Fact；葡萄牙学术样本% 不当中国常模。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | 同住重订常使房间数接近持平；砍 BAR 不保证增量 OCC |
| ADR | 套利稀释 ADR；Hold 公开价避免把稀释写进新生产 |
| RevPAR | Hold 路径随 ADR；跟价/399 压 RevPAR。不编精确增收 |
| Pickup | 分：真新订 vs 同住重订；净房间 vs 净 ADR |
| Conversion | 用 `cancel-rebook-gap.md` 计数；**无默认 %** |
| Net Revenue | 佣金/罚金 NV；不算假精确净额 |
| Profit | Unknown。不编 GOP |

允许的写法：若 24h 内同住重订仍在、公开 BAR Hold、Pace 仍 Ahead → Hold 成立。若无重订、取消后 remaining 厚且 Behind → 改走 P14/P05，理由写真剩余需求。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 训练套利 | 认新价 / 跟价 / 预防性砍 | 同住重订件数↑ | 形 A/B；Hold |
| Soft 误诊 | 把套利当空房砍价 | 取消≈重订 | 改本剧计数 |
| 399 写穿 | BAR→399 | 公开栏 | 拒绝 |
| 与 P14 叠刀 | Soft 诊断变成 dump | 有无重订 | 有重订→本剧；无→P14 停涨/结构，不自动 dump |
| 与 P38 混夜 | 改已确认单规则当暗降 | 旧单 | P38 只动**新生产** |
| 真弱被 Hold 住 | 确 Behind leftover | Pace/Remaining | P05 围栏；仍禁 399 与一夜 −15% |
| 政策真空 | 前台各认各的 | 同住改订口径 | 问 NV；不编 SOP |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 同住取消再订件数 | 当日 / 24h | 同名或同确认链 | 用户 |
| 原 ADR vs 重订 ADR | 同批 | before/after；无默认 % | 用户 |
| 公开 BAR 是否被砍/跟到重订价 | 即时 | 是否仍 Hold | 用户 |
| Pace / Remaining | 即时 | Ahead 否 | 用户 |
| 本店改订吃新价政策 | 即时 | 有则按政策；无=NV | 用户 |
| 未来高峰免费取消窗 / NR 深度 | 前瞻 | P38/P19 | 用户 |

默认最少 5 个：同住重订有无、ADR before/after、Pace、公开 BAR、政策是否已知。

## 9. Re-evaluation Trigger

- 同住重订消失、只剩净取消 → 改 **P14** / 视 remaining **P05**
- Pace 转为真 Behind 且厚 → 评 **P05**；仍禁「别被刷」叙事与 399
- 发现错价/破平驱动便宜 → **P60/P59**
- 当天没到为主 → **P54**
- 用户给出本店改订政策 → 在建议里引用政策原文，仍不代操作

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店改订吃新价政策 / 华住 SOP / 罚金% / 佣金% 全部 NV；799/599/399 是 Hypothesis/Simulation；IJHM 全文未核开。
为什么不是 Low：同住更低价重订 ≠ 新需求可证伪；与「先砍公开价制造套利」逻辑同向；Booking NR「不得改更低」支撑围栏方向；第一刀（Hold + 问政策 + 未来 P38/P19）可逆。
因此怎么用：先拆真取消 vs 同住重订；Ahead Hold；不跟 599；不 399；未来收窗/浅预付；政策 NV。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-cancel-rebook-sat.md`：周六 Pace Ahead remaining **14**、BAR **799**；今早 **8** 取消后 **7** 同住重订 **599**；GM 要 BAR→**599** 或 **399** → **Hold 779–799 首选 799**；不跟 599；问政策；未来日期 P38/P19。8/7/599/399/799/14 **Simulation only**。399 = **被拒绝的 dump**。599 = 重订价，**不是**推荐新 BAR。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 10:17 CST | 首版。P62。取消重订=套利；Ahead Hold；拒 399/跟 599；政策 NV；未来 P38/P19。08:17 不规定 → 本案例槽开。未开 P63。 |

P65 last-line（2026-08-27 22:17 CST）：取消后按原价恢复 / 同单 Reinstate 走 `cancel-reinstate-old-rate.md`；本剧仍是**取消后再订新单更低价**。同记录恢复旧价 ≠ 新确认号套利。
T-Reinstate last-line（2026-08-28 00:17 CST）：同单 Reinstate 的「为什么」走 `theory/reinstate-vs-current-rate.md`；本剧仍是**取消后再订新单**。过程仍 P65 / P62 分对象。
