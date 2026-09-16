# Decision Card: Ignore Comp Undercut（竞对砸价、本店 Pace 不差 → 不跟）

> 资产：Advisor Decision Card  
> 路径：`recommendations/ignore-comp-undercut.md`  
> 对应：问题树 §1 问 8 · §13 Price Too High 先排除 · O2 的反面  
> 剧本：`advisor-playbooks/price-war.md`（P16）  
> 仿真：`cases/sim-2026-comp-cut-pace-not-behind.md`  
> 配套：`do-not-cut-price-market-also-weak.md`（市场也弱）· `hold-price-curve-late.md`（曲线后置）· `market/comp-set.md`  
> 状态：active · Wave6  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: 不跟竞对降价（Pace 不落后）
scenario: Primary comps cut / undercut by a visible gap AND own Pace On or Ahead AND pickup not collapsing
required_inputs:
  - DTA
  - OTB
  - Pickup 3D/7D
  - Pace vs STLY or curve
  - current_BAR
  - competitor_rate（至少 3 家 Primary 可订）
  - event / citywide 旗标
  - inventory_channel_open
signals_for:
  - pace_on_or_ahead
  - pickup_match_or_not_dead
  - price_gap_is_comp_move_not_our_overprice
  - no_citywide_collapse
  - comps_not_all_sold_out
signals_against:
  - pace_behind_and_widening
  - pickup_slow_and_we_are_clearly_highest
  - only_we_are_empty_market_hot
  - channels_closed
recommended_action: BAR 不动。不跟最低。最多小配额围栏 −3–5%。禁止一夜 −15%
risk: 把真份额流失误判成「他们在自杀」；48h 后真 Behind 未回头
follow_up: 24/48h 净 Pickup、Pace gap、竞对是否再降、是否出现 citywide
confidence: Medium（方向）；「不跟」在 Pace 基准缺失时降为条件化
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户原话常是「竞对比我低 80 元 / 他们集体降了，要不要跟」。同时接近：

- 降价来自 **Primary**（或用户点名的可比店），不是 Aspirational。  
- **本店 Pace On 或 Ahead**（同 DTA vs STLY/曲线；带宽约 −5pp~+8pp 为 On，见 Pace 卡）。  
- Pickup **不是** 连续死亡（中窗口 3D 仍能对上该店曲线；商务后置用 Hold 卡）。  
- 不是已证实的 **citywide 崩溃**（展会取消 + 全圈空 → 走 `do-not-cut`，结论也是不砸 BAR，机制不同）。  
- 供给开着。

**不要用：** 只有本店空、市场热、价明显高于全部可订竞对 → 评围栏或 decrease 卡。竞对满房溢出 → P15，方向相反。事件日 → 不跟降。

---

## 2. 机制

```
竞对降价 ≠ 本店需求坏了
Pace 不落后 → 我们仍在自己的曲线上
跟最低 → 把公开带砸穿，邀请第二轮 Price War
80 元先换算 %：在带内（<8%）默认是噪声或他店战术，不是开门降价
```

与「市场也弱」重叠时：两张卡同向（都不砸 BAR）。本卡强调 **即使市场不冰、只是他们降，只要 Pace 不差也不跟**。

---

## 3. 不跟的触发条件（顾问要能背）

**同时满足（或缺一项则条件化）：**

1. **Pace** On 或 Ahead（有同 DTA 基准）。无基准 → 不得宣布「不跟」为 High，只能 IF Pace 不落后 THEN 不跟。  
2. **Pickup** 未塌：3D 不是≈0（DTA≤3 改 P05）；或曲线后置且窗口匹配。  
3. **价差** 来自对方下移，不是我方刚大涨后无人问。  
4. **可比**：至少 2 家 Primary 仍可订；不是「一家清仓一家满」。  
5. **无** 已证实 citywide 负向（活动取消且 Forward 全塌）——那种也不跟到底，但要改 Forecast。  
6. **渠道/库存开着**。没开先开，仍不因竞对降而降。

**80 元决策树（Hypothesis）：**

```
先算 gap% = 80 / 本店 BAR
IF 不可比 → 不跟，重审套
IF Pace Ahead/On AND Pickup 未塌 → 不跟
IF 仅 gap<8% AND 市场不明 → 不跟
IF Pace Behind+Slow AND gap≥8% AND 市场不冰 AND 供给开
   → 不「跟到对方价」；先围栏 −3–5%，BAR 不动
IF 用户已自行跟 → 不自动再跟下一刀
```

---

## 4. 推荐动作

```text
Stay Date:            <焦点日>
Rate Plan:            BAR 及连动公开价
Current:              <BAR>
Range / Preferred:    维持当前 BAR（±0）
Inventory:            不关房装稀缺；只开误关
Restriction:          不新设 MinLOS；淡日过严可解
Channel:              不参加会打穿 BAR 的「跟价大促」
Optional:
  围栏 −3–5%，配额 ≤ 剩余 20%（Hypothesis），仅当品牌强迫「要有动作」
Do-not-do:
  - 跟到最低竞对
  - 一夜 −15%
  - 「适当跟一点」
  - 只改一个 OTA
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 48h 累计 Pickup < max(总房×1.7%, 2) **且** Pace 变成 ≤−8pp **且** 价已明显高于全部可订 | 离开本卡，评档 E 围栏，仍禁止一夜 −15% |
| 24h Pickup ≥8（300 间尺） | 更不跟；取消拟议围栏 |
| ≥2 家 Primary 满或中位 +10% | 离开，评 Increase / P15 |
| 对方再降一轮、我们仍 On/Ahead | **仍不跟** |
| 发现渠道昨天关着 | 只开库存 |
| 事件/citywide 被证实为负向 | 改 Forecast；BAR 仍不砸，走 do-not-cut |

---

## 6. 如果只能再补 3 个

1. 同 DTA Pace 基准（STLY/曲线）— 翻转不跟 vs 围栏。  
2. 3D/7D 净 Pickup 间夜。  
3. 那家低价店是否 Primary、是否可订含早口径一致。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。Pace 不差不跟。与 do-not-cut / Hold 同向不同机制。 |

## 8. 交叉（2026-08-22 22:17）

80 元先过 **P36 可比清单**，再换 %。不可比 → 不跟，本卡不点火。

> 交叉指针（2026-08-28 10:17，不改正文）：开业 intro 默认不跟走 **P68**；已开业 Pace 不差不跟仍本卡。不写 P69。
