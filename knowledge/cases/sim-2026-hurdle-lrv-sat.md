# Simulation｜2026 Hurdle / Bid Price / Last Room Value Saturday（Simulation only）

> 路径：`cases/sim-2026-hurdle-lrv-sat.md`  
> 配：P85  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 销售甩来：「hurdle/LRV 才是市场价，BAR 改成 **399** 吧」；系统补刀：「系统门槛 399，公开也得 399 不然卖不出去」（未当 Fact；本店 hurdle/RMS 字段 / 华住会门槛价 SOP / hurdle% / LRV Fact NV）

## Advise（期望）

1. 先拆：定价尺是 **公开灵活 BAR 799**，不是 hurdle，不是 bid price，不是 Last Room Value，不是「过不了 LRV 所以公开也得低」。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. hurdle 留在 OPERA **Hurdle Rates** 可售门（价码要达到才在 rate grid 上 display）/ IDeaS **LRV**（value, not a selling rate）。可售门 ≠ BAR Type。
4. OPERA 先查自己的 open/closed，再 hurdle。Delta/Ceiling/Max Rooms Sold = 可售机械。Yield Market Type ≠ BAR Type。
5. **拒绝** BAR→399（门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍）。hurdle 仍是 availability gate。
6. 若其实是 RMS 建议卖价 → **P66**；嵌套低档仍开 / 关低 → **P64**；限制过度 → **P33**。
7. 真弱 leftover → **P05**（仍不从 hurdle 地板改写 BAR）。
8. 早会一个动作：纠正「hurdle≠BAR」+ Hold 公开 BAR。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住会门槛价 SOP、默认 hurdle %、LRV Fact、EMSR Fact、佣金%、699
- 把 OPERA 195/200/80/90 或 IDeaS 公式数字当 sim 市场 Fact
- 开 P86
- 把 399 写成推荐 BAR
- 把 P66 RMS 建议卖价 / P64 嵌套低档当本店改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（hurdle/LRV 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
