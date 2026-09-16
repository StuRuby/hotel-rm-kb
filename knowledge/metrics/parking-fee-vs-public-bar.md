# Metric｜Parking / Valet / Garage vs Public BAR（轻）

> 路径：`metrics/parking-fee-vs-public-bar.md`  
> 配：P82  
> 状态：drafted 2026-08-30 18:17  
> **无默认停车 %、无 valet %、无「含停太贵 = 必须砍 BAR」、无车库租金 Fact、无佣金%**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 停车 / valet / 车库挂牌，或客人看到的 OTA 含停总价（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 停车 / valet / 车库收费（OPERA：Fixed Charge 按日过账；Package Separate Line / Sell Separate）
  3. OTA all-in 含停展示（展示加总 ≠ BAR Type）
  4. 第三方经营付租/佣金（STR：Misc，不当 Other Operated 毛额）
- gap = 含停总价 − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成含停地板 / 停车贵所以跟 / ADR 被停车看脏所以砍 / 竞对免停所以跟」

## 不用来做什么

- 不推导「停车该收多少 / valet 该百分之几 / 车库租金该多少」
- 不把停车 / valet / 车库 / 含停总价写成公开 BAR
- 不因「停车贵 / 含停总价贵 / ADR 被停车看脏 / 竞对免停」自动砍公开尺
- 不把 OPERA Vendor 停车票号例、STR 上报口径写成中国店规或默认 %
- 不发明停车 % / valet % / 车库租金 Fact / 佣金%
- 不把 P36 竞对比价含停口径当成「本店必须改 BAR」

## STR / OPERA 拆（读法不是改尺令）

| 层 | 上报 / 系统 | 对公开 BAR |
| --- | --- | --- |
| 酒店自营 Parking | STR P&L：**Other Operated**（与 Telecommunications、Minibar 同类） | ≠ BAR；≠ Rooms |
| 第三方经营付租/佣金 | STR P&L：**Miscellaneous Income**，不当 Other Operated 毛额 | ≠ BAR |
| Historical Other Revenue parking | 例含 parking / spa / telecom — **不是 Rooms**；套餐只把房价进 Rooms | ≠ BAR Type |
| OPERA Fixed Charge valet/parking | 按日交易码；Supplement 可记票号/车位号 | 过账 ≠ 改写公开尺 |
| Package Separate / Combined / Sell Separate | 套餐属性 / 另售附加 | ≠ BAR Type |

ADR「被停车看脏」：停车误记进 Rooms 会抬/扭 ADR；自营停车应在 Other Operated、第三方租应在 Misc——**都是读桶，不是砍尺。**

## 调用

早会/调价前看：公开 BAR；含停/valet 是否被当成尺；有没有人要求 BAR→含停地板；ADR 是否被停车「看脏」却想砍尺；竞对免停是否被当成跟价令。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁停车借口一夜 −15%；围栏须有截止日）。

本店停车 SOP / 华住字段 = **NV**。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
