# Decision Card: Decrease BAR（真弱需求，不是假低 OCC）

> 资产：Advisor Decision Card  
> 路径：`recommendations/decrease-bar-true-weak-demand.md`  
> 对应：问题树 §1 过完排除后的「价高 + Behind + Slow」；§13 Price Too High  
> 剧本：`advisor-playbooks/low-demand-day.md`（P02）  
> 幅度：`pricing/how-much-to-move.md` 档 E/F/G/H  
> 不要与 `do-not-cut-price-market-also-weak.md` 混用  
> 状态：active · Wave3  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Decrease BAR or open fenced promo（真弱需求）
scenario: Pace behind + slow pickup + price above bookable comps + inventory open + market not ice-cold
required_inputs:
  - DTA
  - OTB (rooms or OCC + total rooms)
  - Pickup 3D 或 7D（能还原间夜）
  - historical_pace（同 DTA）
  - current_BAR
  - competitor_rate
  - remaining_inventory
  - inventory_channel_restriction_status
  - market_or_comp_forward_signal
signals_for:
  - pace_behind
  - pickup_slow
  - bar_above_bookable_comps
  - supply_open
  - market_not_as_weak_as_us
signals_against:
  - late_curve
  - channel_or_inventory_closed
  - market_also_weak
  - already_cheapest
  - product_incident
recommended_action: 先围栏 −3–5%（BAR 不动）；价高≥15% 且 7D 也慢才 BAR −5–10%。禁止一夜 −15%（DTA≤3 例外见 how-much-to-move 档 H）
risk: 假弱（后置/关库存/市场冰点）；无效降价打 ADR；打开破价渠道
follow_up: 24/48h 净 Pickup、取消、竞对、促销是否打穿 BAR
confidence: Medium（方向）；幅度 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

必须**先走问题树 §1.A 排除**，仍同时接近：

- Pace vs 同 DTA **Behind**（≤ −5pp；≤ −8pp 更硬。Hypothesis）。
- Pickup Slow：Days-to-Sellout > DTA×1.5，或 3D+7D 低于该店后半段。
- BAR > 最低可订竞对 ≥8%（或 ≥1 个明显阶梯）。
- 库存、主渠道、同步**已确认开着**（或刚修好仍不来）。
- 市场**不是**同样冰点（Comp Forward 不落后，或城市需求不差）。若市场也弱 → 换 `do-not-cut-price-market-also-weak.md`。
- DTA 通常 4–21。DTA>30 先问窗口。DTA≤3 改档 H / Last Minute。

**不要用：** 只看见 OCC 低；曲线后置；价已最低；供给没开；市场也弱。

---

## 2. 必填 vs 缺了

| 输入 | 缺了 | 条件化 |
| --- | --- | --- |
| Pace 基准 | 60% 不知快慢 | 今天不降 BAR；最多 IF 48h 仍 0 THEN 围栏 |
| 开关状态 | 可能降给关着的门 | IF 未确认开着 THEN 不降 |
| 竞对 | 无锚 | 只开 −3–5% 围栏；Confidence 降档 |
| 市场信号 | 可能误砸冰点 | 补 Comp Forward / 「竞对是否也在空」；未补则降幅只允许 E |
| Segment | 可能在等一团 | IF 已知将进团 THEN 不降 |

---

## 3. Signals For / Against

**For（允许围栏）：** Pace Behind + Pickup Slow + 供给开。  
**允许动 BAR：** For + 价高为 Fact + 7D 也慢 + 市场非冰点。

**Against → 离开本卡：** 后置曲线；刚涨价<48h；渠道/房型关；市场弱；价已最低；产品事故；Budget 不现实。

---

## 4. 推荐动作

```text
Stay Date:            <焦点日>
Room Type:            先动基础售卖房；高档不跟降
Rate Plan:
  优先 A：围栏（预付不可退 / 2 晚连住 / 会员）
  次选 B：BAR 及连动公开价
Current BAR:          <当前>
Recommended:
  A 促销：BAR × 0.95–0.97（−3–5%），或收到最低竞对附近（取更高成交价）
  B BAR：−5% 至 −10%，收到最低竞对附近，不一次下穿
Preferred:
  默认 A。仅当价高≥15% 且 7D 慢且无法上围栏 → B，首选取 −5–7%
Inventory:            保持可售
Restriction:          淡日过严 MinLOS/CTA → 解开该日
Channel:              打开误关主渠道。不接打穿新地板的神券
Staging:              先 A，48h 再评 B。禁止第一天 A+B 同时深折
Do-not-do:
  - 「适当降一点」
  - 一夜 −15%+（除非档 H）
  - BAR 降到最低竞对下还加促销
  - 只改一个 OTA
  - 市场也弱时仍用本卡砸 BAR
```

**Simulation 锚（不是真店）：** 200 间、DTA14、OTB60%、3D=8、STLY72%、BAR899、竞对799/829/849、渠道开、**市场不弱**。  
首选：BAR 守 899，预付 **859–869**（−3–5%），区间 849–879；若必须动 BAR → 849（829–859）。与 Slow Pickup 仿真 829 预付兼容：本卡第一刀更浅，48h 死再收到 829。

---

## 5. Trigger（300 间尺度）

| 事件 | 动作 |
| --- | --- |
| 24h Pickup ≥8 | 关新促销或收到 BAR−3% |
| 24h 3–7 | 守第一刀 |
| 48h 累计 <5 且已开 | 未动 BAR → −5–8%；已动 → 停价改渠道，禁止第三刀 |
| 发现供给曾关 | 撤回降价 |
| 市场信号补齐后是冰点 | 离开本卡，改 do-not-cut |
| 取消翻倍 | 停降 |

---

## 6. Confidence / 边界

默认 Medium。无 Pace 或无开关：Low，今天不降。  
更像市场弱 → do-not-cut。更像后置 → Hold。更像 DTA≤3 → Last Minute。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。围栏 −3–5% 为比 stimulate 卡更轻的第一刀。 |

> 交叉指针（2026-08-30 06:17，不改正文）：真弱 leftover 仍本卡；「all-in/服务费吓跑所以 BAR→399」过程走 **P79**。交叉 P79 resort-fee/all-in ≠ leftover。不写 P80。
