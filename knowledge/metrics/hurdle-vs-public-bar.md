# Metric｜Hurdle / Bid Price / Last Room Value vs Public BAR（轻）

> 路径：`metrics/hurdle-vs-public-bar.md`  
> 配：P85  
> 状态：drafted 2026-08-31 06:17  
> **无默认 hurdle %、无 LRV Fact 数字、无「过不了 LRV = 必须砍 BAR」、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- hurdle / bid price / Last Room Value（用户给；不编）
- RMS 建议卖价（若有；走 **P66**，不要与 hurdle 混）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. hurdle / bid price / LRV（OPERA：价码要达到才在 rate grid 上 **display**；IDeaS：LRV is a value, not a selling rate）
  3. RMS recommended selling price（过程仍 **P66**；不要与 hurdle 混）
- gap = hurdle/LRV − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成 hurdle 地板 / 门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍」

## 不用来做什么

- 不推导「hurdle 该设多少 / LRV 该百分之几」
- 不把 hurdle / bid price / LRV 写成公开 BAR
- 不因「过不了 LRV / 门槛价才是市场价」自动砍公开尺
- 不把 OPERA Vendor $80/$90/195/200 例、IDeaS Effective Hurdle 公式写成中国店规或默认 %
- 不发明 hurdle % / LRV Fact / EMSR Fact / 佣金%
- 不把 P66 RMS 建议卖价 / P64 嵌套低档当成「本店必须改 BAR」
- 不发明 STR hurdle Include/Exclude（hurdle 不是会计桶）

## OPERA / IDeaS 拆（读法不是改尺令）

| 层 | 系统 | 对公开 BAR |
| --- | --- | --- |
| OPERA Hurdle Rates | Integrated RMS 算 hurdle；预订时决定 rate code/room type **availability**；要达到才在 rate grid 上 **display** | ≠ BAR；可售门 |
| OPERA 先查 open/closed | 先查自己的 rate availability，再 hurdle | 可售机械 ≠ 改尺 |
| Delta / Ceiling / Max Rooms Sold | 可售机械 | ≠ BAR Type |
| Yield Market Type | 同一日期可多 hurdle（Vendor 例 195 vs 200） | ≠ BAR Type；例数字 NOT China Fact |
| IDeaS LRV | 「LRV is a value, not a selling rate to be applied」；yieldable 低于 LRV 不可售 | ≠ 公开卖价 |
| IDeaS Effective Hurdle 公式 | Vendor 实现 | **NV to calculate**；不抄进本店 |

「过不了 LRV 所以砍公开」：hurdle 过不去是 **availability gate**——应关/不开那一档 yieldable 码，**不是把公开尺写成门槛地板。** RMS 建议卖价另走 P66。

## 调用

早会/调价前看：公开 BAR；hurdle/LRV 是否被当成尺；有没有人要求 BAR→hurdle 地板；是否把 RMS 建议卖价与 hurdle 混；是否把嵌套低档当 hurdle 门。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁 hurdle 借口一夜 −15%；围栏须有截止日）。

本店 hurdle/RMS 字段 / 华住会门槛价 SOP = **NV**。默认 hurdle % / LRV Fact 数字 = **NV**。

> 交叉指针（2026-08-31 08:17，不改正文）：Diagnose 走 **T-Hurdle** `theory/hurdle-bid-lrv-vs-bar.md`，过程仍 **P85**。公式不重写。不规定 P86。
