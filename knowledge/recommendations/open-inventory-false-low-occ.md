# Decision Card: Open Inventory（库存误关 → 假低 OCC）

> 资产：Advisor Decision Card  
> 路径：`recommendations/open-inventory-false-low-occ.md`  
> 对应：问题树 §1.6 / §1.7 / §1.A.3–4；OCC Low 鉴别树  
> 剧本：P02 Low Demand · P08 Slow Pickup；本卡是它们的 **供给分支**  
> 理论：`inventory/inventory-control.md`  
> 状态：active · Wave4  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Open closed inventory or relax over-tight restriction; do not cut BAR
scenario: OCC / Pickup looks weak but rooms or channels are not actually for sale
required_inputs:
  - Stay Date + DTA + OTB
  - room_type_open_closed
  - channel_quota_or_availability
  - restriction_status（MinLOS / CTA）
  - current_BAR vs 可订竞对
signals_for:
  - channel_quota_zero_or_closed
  - room_type_closed_while_house_remaining_gt_0
  - restriction_blocks_typical_los
  - price_not_above_comps
signals_against:
  - supply_already_open_and_price_high_and_behind
  - true_low_demand_market_also_weak（开完仍可能弱，但不先降）
recommended_action: 打开误关的房型/渠道/配额；过严 MinLOS/CTA 在淡日解开；BAR 不动
risk: 打开的是破价层；只开一个 OTA 造成串价
follow_up: 开后 24/48h Pickup；是否真可订
confidence: 供给没开时方向 High–Medium；开完需求仍弱则回到 P02
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户说「入住率低 / 这几天没动」且出现任一条：

- 某渠道配额 =0 或房态关（中国 OTA 口述或截图）。  
- 某房型 Close，但全店 Remaining >0。  
- MinLOS/CTA 比该日典型 LOS 更严（淡日还挂着节假日连住）。  
- 直销可订、OTA 不可订（或相反）。  
- 价 **并不** 明显高于可订竞对。

这是问题树 §1 的第 6–7 问。**默认不降价。**

**不要用：** 供给已开 + Pace Behind + Pickup Slow + 价高 → 去 P02 / decrease 卡。市场也弱 → 开完库存后走 do-not-cut，仍不砸 BAR。

---

## 2. 先开哪一层（顺序）

```
1. 直销 + 主 OTA 的 BAR 层（与公开价对齐）
2. 被误关的基础房型
3. 淡日过严的 MinLOS / CTA（解开到该日典型 LOS，常 =1）
4. 不要先打开：今夜特价 / 批发外泄 / 低于 BAR 的预付
```

中国渠道（Hypothesis，非 2026 平台规则）：「美团/携程配额昨天 0」→ 先恢复 **与直销同开、同 BAR**。开多少间：用户给不出数就写「配额 >0 且可被搜到；不要为 0」。排名算法 Unknown。

---

## 3. 动作表

```text
Stay Date:            <假低 OCC 的日期>
Inventory:            Open 误关房型 / 主渠道 BAR 层；配额从 0 恢复
Restriction:          若该日非 Peak：MinLOS → 1（或解开 CTA）
Price:                BAR 不动
Channel:              先对齐直销与主 OTA；禁止只开一个破价入口
Do-not-do:
  - 在确认可订之前降 BAR
  - 打开低于 BAR 的促销当「修复」
  - 「建议检查一下库存」而不写开哪一层
```

仿真对照：`cases/sim-2026-weak-market-do-not-cut.md`（渠道刚开 → 不跟到 699）。

---

## 4. Trigger（开完之后）

| 事件 | 动作 |
| --- | --- |
| 开后 24h Pickup ≥ 阈值高（300 间=8） | 修复成立；不降价 |
| 开后 24h 3–7 | 再守 24h |
| 开后 48h 累计 <5 **且** 现已确认全渠道可订 **且** 价高 **且** 市场非冰点 | 才进入围栏 −3–5%，BAR 仍优先不动 |
| 打开后发现可订的是 低于 BAR 的残价 | 立刻关上残价，只留 BAR |
| 其实是 Peak 被淡日逻辑解开 MinLOS | 撤回，走 minlos-peak-protect |

---

## 5. Confidence

供给没开的证据是截图/用户确认 → 方向可偏 **High**（动作可逆）。  
开完是否还有真需求：未知，不在本卡给降价幅度。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。假低 OCC 先开供给，禁止先降价。 |
