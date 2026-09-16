# Decision Card: Don't Rewrite BAR to Hurdle / LRV / Bid Price（不要把 hurdle / bid price / Last Room Value 写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-to-hurdle.md`  
> 对应：问题树「门槛价才是市场价」「hurdle 多少 BAR 就多少」「过不了 LRV 所以砍公开」「系统门槛 399 公开也得 399」「Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是公开价」  
> 剧本：P85 `advisor-playbooks/hurdle-bid-lrv-vs-bar.md`  
> 交叉：P66 RMS 建议卖价 · P64 嵌套低档 · P33 限制 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · SCOUT 2026-08-31 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS + A Vendor RMS（动作方向）；hurdle % / LRV Fact NV  
> Last Verified：2026-08-31  
> 仿真：`cases/sim-2026-hurdle-lrv-sat.md`  
> 禁止：BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」；一夜 −15%；编华住会门槛价 SOP / 默认 hurdle % / LRV Fact；开 P86。

```yaml
decision: Do not treat hurdle / bid price / Last Room Value as public BAR; do not rewrite BAR from hurdle availability gate or LRV floor
scenario: hurdle/LRV 才是市场价所以 BAR 改 399；系统门槛 399 公开也得 399；过不了 LRV 所以砍公开；hurdle 多少 BAR 就多少；Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - hurdle_or_lrv_or_bid_if_any
  - whether_availability_gate_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_hurdle_lrv_bid_to_BAR
  - proposed_BAR_to_hurdle_floor
  - cannot_pass_lrv_used_as_dump_reason
  - opera_hurdle_screen_or_yield_market_type_used_as_BAR_type
  - pace_ahead_or_on
signals_against:
  - rms_recommended_selling_price (go P66)
  - nested_low_class_still_open (go P64)
  - restriction_overuse (go P33)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆 hurdle/bid/LRV（OPERA：价码要达到才在 rate grid 上显示；IDeaS：LRV is a value not a selling rate）vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。hurdle%/LRV Fact NV。禁一夜 −15%。399 只在 Simulation。
risk: 把 hurdle 写成战略地板；Ahead 给会来的人打折；误把 P66 RMS 建议卖价当 hurdle；误把 P64 关低当 hurdle 门
follow_up: 公开 BAR 是否仍 Hold；hurdle/LRV 是否仍是可售门不是尺；24h 公开 Pickup
confidence: Pace+能拆 hurdle/公开则方向 Medium；点 hurdle% Low
evidence_level: A
last_verified: 2026-08-31
```

---

## 1. 何时用

「hurdle/LRV 才是市场价，BAR 改成 399」「系统门槛 399，公开也得 399 不然卖不出去」「过不了 LRV 所以砍公开」「hurdle 多少 BAR 就多少」「Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是我们的公开价」。

主动词：**拆 hurdle / bid price / LRV 可售门 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「过不了门槛」无 Pace——仍条件化：默认不把 hurdle 当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用 hurdle / bid price / Last Room Value / 过不了 LRV 理由改写公开 BAR**。

顾问三句（与剧本同一套）：

```
1. 先问这是 hurdle / bid price / Last Room Value（OPERA：价码要达到才在 rate grid 上显示；IDeaS：LRV 是 value not a selling rate），还是要改公开灵活 BAR。Hurdle ≠ 公开尺。本店 hurdle/RMS 字段 / 华住会门槛价 SOP = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开」。
3. RMS 建议卖价走 P66。嵌套低档开/关走 P64。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从 hurdle 地板改写公开 BAR）。
```

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs hurdle/LRV/bid 是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / hurdle 地板当新 BAR | 若是 → **拒绝** |
| 不是 RMS 建议卖价 / 嵌套低档 / 限制过度 | → P66 / P64 / P33 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从 hurdle 地板改写 BAR） |

## 3. 默认动作（一句话）

hurdle/LRV/bid≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店 hurdle 字段 / 华住会门槛价 SOP / hurdle% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 06:17 CST | 首版。配 P85。hurdle/LRV 不再 leftover。不写 P86。 |

> 交叉指针（2026-08-31 08:17，不改正文）：Diagnose 走 **T-Hurdle** `theory/hurdle-bid-lrv-vs-bar.md`，过程仍 **P85**。不规定 P86。三句 / 399-rejected / 799-Hypothesis **不改**。
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。不写 P87。押金/预授权不再 leftover。
