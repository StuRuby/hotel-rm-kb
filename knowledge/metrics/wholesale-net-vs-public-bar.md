# Metric｜Wholesale / GDS / Travel Agent Net vs Public BAR（轻）

> 路径：  
> 配：P81  
> 状态：drafted 2026-08-30 14:17  
> **无默认批发折扣 %、无「批发必须打 X 折」、无 Consortia 10% Fact、无佣金 Fact**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 批发 / 旅行社 / GDS 净价挂牌（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 公开灵活 BAR（non-qualified, publicly available）
  2. 批发/TA/GDS 渠道协议净价（OPERA：Travel Agent / Source 档案 + Access Code）
  3. 对方 markup 后对外挂牌（HSMAI：渠道在 net 上加 markup 才广告）
- gap = 公开 BAR − 批发净价（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成批发地板 / 旅行社净价太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏所以砍」

## 不用来做什么

- 不推导「批发该打几折 / 每天该放几间」
- 不把批发/TA/GDS 净价写成公开 BAR
- 不因「批发太低 / GDS 低 / ADR 被批发看脏」自动砍公开尺
- 不把行业 %、Consortia 10% 写成中国店规或默认 %
- 不发明批发折扣 % / 佣金 Fact
- 不把 P20 净排序、P27 关漏出当成「本店必须改 BAR」

## OPERA / HSMAI 拆（读法不是改尺令）

| 层 | 上报 / 系统 | 对公开 BAR |
| --- | --- | --- |
| 批发/TA 渠道协议净价 | 档案闸 + Access Code；可进 Sold（有收入） | ≠ BAR Type |
| 对方 markup 后挂牌 | HSMAI：渠道在 net 上加 markup | ≠ 本店公开尺 |
| Wholesale Rate Class | LTB 查询桶 | 类 ≠ 改写公开尺 |
| Channel Negotiated | GDS/OWS 发布闸 | ≠ BAR Type |

ADR「被批发看脏」：**是读桶，不是砍尺。**

## 调用

早会/调价前看：公开 BAR；批发净是否被当成尺；有没有人要求 BAR→批发地板；ADR 是否被批发「看脏」却想砍尺。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁批发借口一夜 −15%；围栏须有截止日）。

本店批发/GDS SOP / 华住字段 = **NV**。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。公式不重写。不写 P82。
