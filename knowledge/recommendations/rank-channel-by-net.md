# Decision Card: Rank Channel by Net

> 资产：Advisor Decision Card  
> 路径：`recommendations/rank-channel-by-net.md`  
> 对应：问题树 §12；P20  
> 剧本：`advisor-playbooks/channel-net-rate.md`  
> 理论：`channel/net-contribution.md`  
> 状态：active · Scout 2026-08-20  
> 知识类型：Best Practice  
> 证据等级：A（公式声明制）；费率 NV  
> Last Verified：2026-08-20

```yaml
decision: Rank and protect channels by net contribution not Gross ADR
scenario: User ranks channels by Gross or asks to cut OTA
required_inputs:
  - room nights by channel
  - Gross ADR
  - commission/discount/marketing if known
  - which dates are Peak
signals_for:
  - gross_high_but_cost_unknown_or_high
  - wholesale_open_on_compression
  - direct_public_above_ota
signals_against:
  - closing_channel_kills_incremental_nights
  - invoice_timing_mismatch
recommended_action: 有合同费率按 NetADR 排序。无费率只比结构。压缩日收低价配额/关批发，BAR 层可订。不编佣金%
risk: 关光主渠道制造假低 OCC；假精确净额
follow_up: 分渠道 Pickup、破价是否还在
confidence: 结构 Medium；金额缺费率 Low
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

「这个渠道 ADR 高要保」「佣金是不是 15% 要不要砍」。

---

## 2. 动作表

```text
Stay Dates:
Net / 结构句:
Decision:  保 BAR 层 / 收低价配额 / 关批发 / 先修平价 / 弱日留增量
Do-not-do: 按 Gross 排名；编 %；道德反 OTA
```

中国 OTA 官方 %：**NV**。Booking：看合同。

---

## 3. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。 |
| 2026-08-21 | mix 开关走 `steer-mix-by-net.md`（P25）。本卡仍只排序。 |

---

## 4. 交叉（2026-08-22 08:17）

按净排序之后还过贡献：净高但含早/布草把贡献打穿 → 仍关该层。`theory/profit-contribution.md`。佣金% 仍 NV。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。
