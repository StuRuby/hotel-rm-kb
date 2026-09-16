# Decision Card: Don't Rewrite BAR for Wholesale / GDS / Travel Agent Net（不要把批发/旅行社/GDS 净价写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-wholesale.md`  
> 对应：问题树「批发价才是市场价 BAR 也改」「旅行社净价太低所以跟」「GDS 协议价低所以公开也得低」「ADR 被批发看脏砍 BAR」「Wholesale 类就是公开价」  
> 剧本：P81 `advisor-playbooks/wholesale-gds-ta-vs-bar.md`  
> 交叉：P20 净贡献 · P27 opaque/批发漏出 · P71 年标 · P26 已签码漏出 · P23 会员 · P80 员工价 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-30 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS + A 协会（动作方向）；批发折扣 % / 佣金 Fact NV  
> Last Verified：2026-08-30  
> 仿真：`cases/sim-2026-wholesale-net-sat.md`  
> 禁止：BAR→399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低」；一夜 −15%；编华住批发/GDS SOP；开 P82；开停车费专剧。

```yaml
decision: Do not treat wholesale / travel-agent / GDS net as public BAR; do not rewrite BAR from wholesale mix ADR
scenario: 批发价才是市场价所以 BAR 改 399；旅行社净价太低所以跟；GDS 协议价低所以公开也得低；ADR 被批发看脏砍公开价；Wholesale 类就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - wholesale_or_ta_or_gds_net_if_any
  - whether_qualified_channel_code_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_wholesale_net_to_BAR
  - proposed_BAR_to_wholesale_floor
  - wholesale_adr_used_as_dump_reason
  - pace_ahead_or_on
signals_against:
  - channel_net_contribution_rank (go P20)
  - opaque_wholesale_leakage_close (go P27)
  - corporate_annual (go P71)
  - corporate_leakage (go P26)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆批发/旅行社/GDS 渠道协议净价 vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。批发折扣%/佣金 NV。禁一夜 −15%。399 只在 Simulation。
risk: 把批发资格净价写成战略地板；Ahead 给会来的人打折；误把净贡献差/高峰漏出写成改尺；误为清洗 ADR mix 砍公开尺
follow_up: 公开 BAR 是否仍 Hold；批发/TA/GDS 码是否仍关在档案闸；24h 公开 vs 批发码 Pickup
confidence: Pace+能拆批发净/公开则方向 Medium；点批发折扣% Low
evidence_level: A
last_verified: 2026-08-30
```

---

## 1. 何时用

「批发价才是市场价，BAR 改成 399」「旅行社净价太低所以跟」「GDS 协议价低所以公开也得低」「ADR 被批发看脏了砍 BAR」「Wholesale 类就是我们的公开价」。

主动词：**拆批发净价 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「批发听起来低」无 Pace——仍条件化：默认不把批发净价当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用批发/旅行社/GDS 净价理由改写公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 批发/TA/GDS 净价是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 批发地板当新 BAR | 若是 → **拒绝** |
| 不是净贡献排序 / 高峰关漏出 / 年标 / 已签码漏出 | → P20 / P27 / P71 / P26 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从批发净价改写 BAR） |

## 3. 默认动作（一句话）

批发/旅行社/GDS 净价≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店批发/GDS SOP / 折扣% NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 14:17 CST | 首版。配 P81。 |

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。
