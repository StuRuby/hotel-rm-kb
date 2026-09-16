# Playbook P85｜Hurdle / Bid Price / Last Room Value vs 公开 BAR（hurdle/LRV/bid 是可售门/机会成本，不是公开灵活 BAR；不要因为门槛价当市场价、hurdle 多少就跟多少、或过不了 LRV 而改写公开尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/hurdle-bid-lrv-vs-bar.md`  
> BACKLOG：P85 Hurdle / Bid Price / Last Room Value vs Public BAR · **HIGH** · 先诊断枝（本轮同开）· slug **hurdle-bid-lrv-vs-bar**  
> 状态：**drafted**（2026-08-31 06:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-to-hurdle.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/hurdle-vs-public-bar.md`（公开 BAR vs hurdle/LRV vs RMS 建议卖价；**无默认 hurdle % / LRV Fact**；本店 hurdle/RMS 字段 NV）  
> 理论：`theory/hurdle-bid-lrv-vs-bar.md`（**T-Hurdle**，2026-08-31 08:17）；Diagnose 走 T-Hurdle，过程仍本剧。`theory/optimization-advise.md` 仍是机会成本 Accept/Reject 语言（**不重写**）。邻 **P66**（RMS 建议卖价是输入不是定价权）/ **P64**（嵌套低档仍开 / 关低≠涨 BAR）只作交叉，不复写。**不规定 P86。**  
> 理论核源：Oracle OPERA Cloud 26.2 Configuring Hurdle Rates（integrated RMS 算 hurdle；预订时 rate code/room type **availability**；要达到才在 rate grid 上 **display**；hurdle = bid prices or opportunity costs — 本小时新开）；Oracle OPERA Cloud 26.2 Configuring Yield Market Type（同一日期可多 hurdle；Yield Market Type ≠ BAR Type — 本小时新开）；IDeaS *Driving Revenue With Dr. Ravi*（LRV **not the price you should sell your rooms for** — 本小时新开）；IDeaS Developers Last Room Value（**LRV is a value, not a selling rate to be applied** — 本小时新开）；HSMAI Academy BAR glossary（BAR = non-qualified publicly available — §67 指针）  
> 交叉：P66 RMS 建议卖价 ≠ 本剧「hurdle 是公开 BAR」· P64 嵌套低档开/关 ≠ hurdle 可售门 · P33 限制过度 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作 · P84 取消费 · P83 储值  
> 问题树：§92 「hurdle / bid price / LRV 不是公开 BAR」  
> 仿真：`cases/sim-2026-hurdle-lrv-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Hurdle Rates + Yield Market Type — §92 新开）；A Vendor RMS（IDeaS Dr. Ravi bid price / LRV + Developers LRV — §92 新开）；A 协会指针（HSMAI BAR glossary — §67）  
> Last Verified：2026-08-31  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆 hurdle / bid price / LRV 可售门 vs 公开灵活 BAR、Hold 公开 BAR、拒绝把门槛地板写成新尺；**不操作** PMS / RMS / hurdle 屏 / OTA，不自动定价，不代改 hurdle。  
> 禁止：发明华住会门槛价 SOP、默认 hurdle %、LRV Fact、EMSR Fact、699；一夜 −15%；BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」；把 14/399/799 当市场 Fact；把 OPERA 195/200/80/90 或 IDeaS 公式数字当中国 Fact；开 P86；把 RMS 建议卖价当本剧主刀（误入 P66）；把嵌套低档当本剧（误入 P64）；把限制当本剧（误入 P33）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 04:17「不要规定 P85」= recap 槽不得指定；本 scout 核实 HIGH 缺口（filename 无专剧；P66≠hurdle 是公开 BAR；P64≠hurdle 可售门；OPERA hurdle 页 2026-08-27 20:17 未开 → 本小时打开 A 级 OPERA + IDeaS 页）后开。hurdle/LRV **不再 leftover**。优先级 **HIGH**。

---

## 0. 一句话

**hurdle / bid price / Last Room Value 是可售门/机会成本，不是公开灵活 BAR。** 先问这是 **hurdle / bid / LRV**（OPERA：价码要达到才在 rate grid 上 **display**；IDeaS：LRV is a **value not a selling rate**），还是 **要把公开灵活 BAR 改成「门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍」那个尺**。Hurdle ≠ 公开尺。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开 / 系统门槛 399 公开也得 399」把 BAR 改写成 399。RMS 建议卖价 → **P66**。嵌套低档开/关 → **P64**。限制过度 → **P33**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从 hurdle 地板改写 BAR）。本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact = **NV，不编**。

完成定义：一张「先拆 hurdle/LRV 可售门 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A Hurdle/LRV/bid = 公开 BAR** | 「门槛价就是我们的公开价」 | 用可售门当尺 | **拆 availability gate vs 公开**；Hold 公开 BAR |
| **B BAR→399「门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍」** | 「过不了 LRV，BAR 改 399」 | 把门槛地板写成战略尺 | **拒绝 BAR→399** |
| **C 把 hurdle 当成 RMS 建议卖价** | 「系统门槛就是系统建议卖价」 | 对象是建议卖价层 | **P66** |
| **D 误入嵌套低档 / 关低 / 限制** | 「低档还开着 / 关低 / 堆限制」 | 对象是别的剧本 | **P64** / **P33** |
| **E OPERA Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 当 BAR Type** | 「Hurdle Rates / LRV 就是公开价表」 | 把可售门当成 BAR | **可售门 ≠ 定价权**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按 hurdle 地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不从 hurdle 地板改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是 hurdle / bid price / Last Room Value（OPERA：价码要达到才在 rate grid 上显示；IDeaS：LRV 是 value not a selling rate），还是要改公开灵活 BAR。Hurdle ≠ 公开尺。本店 hurdle/RMS 字段 / 华住会门槛价 SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」。
3. RMS 建议卖价走 P66。嵌套低档开/关走 P64。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从 hurdle 地板改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认 hurdle %、无 LRV Fact、无「过不了 LRV 必须砍 BAR」、无佣金%**。本店 hurdle/RMS 字段 / 华住会门槛价 SOP = **NV**。

Vendor / 协会指针（不写成华住 SOP）：

- Oracle OPERA Cloud 26.2 *Configuring Hurdle Rates*（A Vendor PMS，§92 新开）：Integrated RMS calculates hurdle rates；used to determine **rate code/room type availability** at reservation time。"This is the value that must be reached for OPERA Cloud to **display** a rate code/room type on the rate grid." "Hurdle rates are sometimes referred to as **bid prices or opportunity costs**." OPERA first checks its own rate availability（open/closed）**before** hurdle。Delta / Ceiling / Max Rooms Sold = availability mechanics，**not BAR Type**。页内 $80/$90 = Vendor 示意，**NOT China Fact**。**可售门 ≠ 改尺令。**
- Oracle OPERA Cloud 26.2 *Configuring Yield Market Type*（A Vendor PMS，§92 新开）：Multiple hurdles per date via Yield Market Type（Vendor 例 Entitlement 195 vs Non-entitlement 200）。195/200 = Vendor 示意，**NOT China Fact / NOT sim BAR**。**Yield Market Type ≠ BAR Type。**
- IDeaS *Driving Revenue With Dr. Ravi: The Bid Price Approach*（A Vendor RMS，§92 新开）：Bid price aliases Marginal Revenue / Opportunity Cost / hurdle；IDeaS calls it **Last Room Value (LRV)**。"This value is **not the price you should sell your rooms for**, but rather the minimum value from your hotel's established rate plans..." Yieldable rate must meet or exceed LRV to be bookable。**LRV ≠ 公开卖价。**
- IDeaS Developers *Last Room Value*（A Vendor RMS，§92 新开）："**LRV is a value, not a selling rate to be applied.**" Yieldable rates lower than LRV unavailable；equal or greater available。Transient only（non-group block）。Effective Hurdle 公式 = Vendor 实现。**Vendor formula exists; NV to calculate。不抄公式、不发明中国 Fact。**
- HSMAI Academy *BAR* glossary（A 协会，§67 指针）：BAR = non-qualified, publicly available。**Hurdle / LRV ≠ BAR。**

本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact / EMSR Fact / 佣金% = **全部 NV**。Hurdle/LRV **不再 leftover**。不发明 STR hurdle Include/Exclude（hurdle 不是会计桶）。

---

## 1. Situation

钉 **三件事**：①用户说的「hurdle / LRV / 门槛价 / 过不了门槛」是可售门，还是要改公开 BAR；②拟议是「BAR→399 / 门槛价才是市场价 / hurdle 多少就跟多少」还是「hurdle 留在可售门、Hold 公开」；③本店 Pace / Remaining，不是「门槛听起来像市场价」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs hurdle / bid / LRV（缺则问，不编）
- 是否 OPERA Hurdle Rates / Yield Market Type；是否 IDeaS LRV；是否其实是 RMS 建议卖价（那是 P66）
- 拟议：BAR 改成 hurdle 地板 / 门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍 / 系统门槛 399 公开也得 399
- 本店 hurdle/RMS 字段 / 华住会门槛价 SOP（NV 不编）
- 用户原话：「hurdle/LRV 才是市场价，BAR 改成 399」「系统门槛 399，公开也得 399 不然卖不出去」「过不了 LRV 所以砍公开」「hurdle 多少 BAR 就多少」「Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | hurdle/LRV/bid 可售门 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍」？ | 形 B；拒绝 |
| D3 | 其实是 RMS 建议卖价？ | → P66 |
| D4 | 其实是嵌套低档仍开 / 关低 / 限制？ | → P64 / P33 |
| D5 | OPERA Hurdle Rates / Yield Market Type / IDeaS LRV 被当成 BAR Type？ | 形 E；可售门 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不从 hurdle 地板改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Opportunity / Risk

- **Opportunity（方向，无 Fake Precision）：** Ahead 保住公开 ADR；hurdle/LRV 关在可售门，不污染公开尺；顾问能挡住「门槛价=市场价」假信号。
- **Risk：** 误把真弱夜当「过不了 LRV 所以 Hold」；或反过来把 hurdle 当成必须跟的市场价；误把 P66 建议卖价当 hurdle；误把 P64 关低当 hurdle 门。

## 4. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ hurdle ≠ bid price ≠ Last Room Value ≠ RMS 建议卖价（走 P66）。hurdle 留在 OPERA Hurdle Rates / IDeaS LRV 可售门，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。hurdle 仍是 availability gate。
3. **指标**：不要把 hurdle/LRV 与公开 BAR、RMS 建议卖价混成一把尺。**不要为过不了 LRV 砍公开 BAR**。可售门 ≠ 改尺。
4. **误入移交**：RMS 建议卖价 → P66；嵌套低档 / 关低 → P64；限制过度 → P33；真弱 → P05。
5. **早会一个动作**（P45）：纠正「hurdle≠BAR」+ Hold 公开 BAR（或问清是可售门，还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认 hurdle % / LRV Fact；无 Pace 就因「过不了 LRV / 门槛价才是市场价」改尺；操作 PMS/RMS/hurdle 屏。

## 5. Why

- Vendor PMS：OPERA 钉 hurdle 用来 **display** 价码/房型在 rate grid 上；先查自己的 open/closed。设计上是可售门，不是公开 BAR Type。Yield Market Type 是多 hurdle 标签，不是 BAR Type。
- Vendor RMS：IDeaS 钉 LRV **is not the price you should sell your rooms for**；**LRV is a value, not a selling rate to be applied**。yieldable 过不了 LRV = 那一档不可售，不是把公开尺写成门槛。
- 协会：HSMAI BAR = non-qualified, publicly available。Hurdle/LRV ≠ BAR。
- Advisor：用户说「门槛价才是市场价 / 过不了 LRV」时，先问 Pace 与这是不是可售门层。多的常是 **availability gate**，不是砍公开尺的许可证。RMS 建议卖价仍走 **P66**，不是本店改 BAR。

## 6. Expected Impact

方向（无 Fake Precision）：Ahead 保住公开 ADR；hurdle/LRV 成交关在可售门，不污染公开尺。

## 7. Risk

误把真弱夜当「过不了 LRV 所以 Hold」；把 hurdle 地板当成必须跟的市场价；误把 P66/P64/P33 对象当本剧；误把 OPERA Hurdle Rates / IDeaS LRV 当 BAR Type。

## 8. What To Watch

公开 BAR 是否仍 Hold；hurdle/LRV 是否仍挂在可售门而不是尺；24h 公开 Pickup vs hurdle 是否被销售当成市场价；是否有人把 RMS 建议卖价与 hurdle 混。

## 9. Re-evaluation Trigger

Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从 hurdle 地板改写 BAR。对象其实是 RMS 建议卖价 → 切 **P66**。嵌套低档仍开 → 切 **P64**。要堆限制 → 切 **P33**。

## 10. Confidence

方向 Medium（有 Pace + 能拆 hurdle/公开，或至少能标 NV 仍 Hold）。点 hurdle%/LRV Fact Low（NV）。Evidence A Vendor PMS（OPERA Hurdle Rates + Yield Market Type）+ A Vendor RMS（IDeaS LRV / Dr. Ravi）。

## 11. Simulation 指针

见 `cases/sim-2026-hurdle-lrv-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump（hurdle/LRV 改尺）。799 = Hypothesis/Simulation。不要用 OPERA 195/200/80/90 当 sim 数字。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 06:17 CST | 首版。P85。hurdle/LRV/bid≠公开 BAR；Ahead Hold；拒改尺。04:17 不规定 → 本 scout 核实 HIGH 缺口后开。未开 P86。hurdle/LRV 不再 leftover。优先级 HIGH。 |
| 2026-08-31 08:17 CST | 头一行理论指针 → Diagnose 走 **T-Hurdle**，过程仍本剧。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P86。 |
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。本剧仍是 hurdle/LRV 可售门。三句 / 399-rejected / 799-Hypothesis **不改**。不写 P87。押金/预授权不再 leftover。

> 源指针（2026-08-31 12:17 R31-12，不改正文）：本小时 §95 服务 P86 第二家 Vendor；本剧 hurdle 核仍 §92/§93。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。
> 交叉指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是 hurdle/LRV 可售门。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-02 16:17，不改正文）：地板/Min·Max/品牌底 Diagnose 走 **T-Floor** `theory/rate-floor-vs-bar.md`，过程仍 T20 + brand-floor。本剧仍是 hurdle/LRV 可售门。三句 / 399 / 799 **不改**。不开 P88。
