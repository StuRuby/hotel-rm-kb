# Decision Card: Citywide Compression（城市级压缩）

> 资产：Advisor Decision Card  
> 路径：`recommendations/citywide-compression.md`  
> 对应：问题树 §16 · O3 High Demand · 信号 2.12  
> 剧本：P32 **drafted**（2026-08-21 11:00）`advisor-playbooks/citywide-compression.md`。交叉 P01 / P07 / P15 / P11 / P17 / P22  
> 虚火回落：`dont-cut-from-hype-rate.md`（本卡只管真压缩第一刀）  
> 幅度：`pricing/how-much-to-move.md` 档 B/C/D  
> 状态：active · Wave6  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20（§1–5 第一刀未改；2026-08-21 交叉虚火）

```yaml
decision: 按城市级压缩管理（价+关低价；不跟降）
scenario: Market-wide tightness — multiple primary comps full or city event with corroboration
required_inputs:
  - Stay Date + DTA
  - OTB / Pickup / Remaining
  - current_BAR
  - 几家 Primary 满 / 价
  - 事件或周末旗标（日期/距离）
  - restriction_status
signals_for:
  - ge2_primary_sold_out_or_market_occ_tight
  - pace_ahead_or_pickup_fast
  - dated_citywide_event_or_weekend_compression
signals_against:
  - only_one_comp_full_or_incomparable
  - event_no_overnight
  - pickup_is_one_group
  - we_already_highest_and_low_rates_closed
recommended_action: 先关低价；第一刀 +8–15% 或收到最低仍可订竞对；不一次跳最高。价已最高只关不涨。禁止跟降
risk: 假 citywide；一团；MinLOS 挡肩日
follow_up: 竞对满房是否维持、24h Pickup、事件新闻
confidence: 方向 Medium（须 ≥2 家族）；幅度 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时算 Citywide（先排除）

**Citywide** = 需求在 **城市/次市场** 超过供给，不是单店事件、也不是一家竞对卖穿。

进卡，至少一条 **城市级** + 一条 **本店旁证**：

| 城市级（有 1 条） | 本店旁证（有 1 条） |
| --- | --- |
| ≥2 家 **Primary** 可订查询已满或只剩不可比高价 | Pace Ahead ≥+8pp |
| 会展/大型赛事/多场演唱会叠日，日期匹配 | Pickup Fast（Days-to-Sellout < DTA） |
| 用户给 Forward 市场/圈 OCC 很高（有数才用；>90% 是实践锚 **B**，非 STR Glossary 词条） | 本店低价仍开着 / BAR 低于仍可订竞对 |

**退出：**

- 只有 1 家满 → P15 弱版，不叫 citywide。  
- 旗标无 overnight → P07 退出。  
- Comp 不可比（Aspirational 满）→ 不当溢出。  
- 价已最高且低价已关 → 只盯，不涨。

STR Glossary（2026-08-20）**无** Compression Night 定义。实践评论常用市场 OCC>90%（**B**）。中国无公开逐日市场 OCC 时 **不要编 90%**，用竞对满房计数代替。

---

## 2. 第一刀（与事件卡同一尺）

城市级只提高 **Urgency**，不自动加大第一刀。

| 旁证 | 价 | 库存 / 限制 |
| --- | --- | --- |
| 2 家满 + Pace/Pickup 一条 | 档 B：+8–15% 或收到 **仍可订** 最低竞对 | 今天关低价 |
| ≥3 家满 + Fast | 档 B 上沿，允许 +15–20%；仍 ≤ 原最高可比 | 关低价；评 Peak MinLOS=2 **仅** 肩日数据已齐 |
| 价已最高 | **不涨** | 只关 / 限额 |
| 周末 citywide 无大型事件 | 同 P11：周末带，不按演唱会故事 | 周五 CTA/MinLOS 需 Peak 证实 |

肩日：不自动暴涨。IF 肩日也 Ahead THEN 半档；ELSE 连住包装。  
**禁止跟降。** 压缩夜差异在 ADR，不在 OCC。

---

## 3. 动作表

```text
Stay Date:            压缩夜（及已证实的 −1）
Current BAR:          <当前>
Range / Preferred:    重叠带 + 首选（必须写数字）
Inventory:            先关任何公开可订 < 第一刀下限；不关 BAR
Restriction:          Peak 已证实且肩日有数 → MinLOS=2；否则今天不设
Channel:              压缩日拒打穿新 BAR 的 OTA 大促
Do-not-do:
  - 跟唯一一家还在降的店
  - 第一刀跳过最高可比竞对
  - 无肩日就整周 MinLOS
  - 把「同城有展」写成 Fact
```

团询撞压缩夜：默认 **Counter** 减房/加价（P10），不要把尾部整块给低价团。

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h Pickup <3（300 间尺） | 回退下限；核是否假压缩 |
| 24h ≥8 且非一团且竞对仍满 | 第二刀 +3–8%，仍先碰到原最高 |
| 竞对重新开房且降到我们新价下 | 停加码；不自动跟降 |
| 事件取消 | **立即**回平日带 |
| 单笔 Group ≥总房 13% | 停散客加码 |

---

## 5. 如果只能再补 3 个

1. 几家 Primary 满、是否可比。  
2. 本店该日 OTB + 3D Pickup。  
3. 事件日期/距离 或 「无事件、只是周末」。

---

## 6. mega-event 虚火（2026-08-21 交叉，不改 §1–5 第一刀）

有大事件叙事但 **Pace 未 Ahead**、**肩日未被带动** → **不要**用本卡整周涨。改 P32 虚火枝 + `dont-cut-from-hype-rate.md`。

- 比赛 / 开展夜：仍可走本卡 / 事件第一刀（须旁证）。  
- 肩日：**不自动跟 Peak**（与 §2 原句同向，这里升成硬退出）。  
- 已挂幻想价、想从 1999 砍到 1299：**禁止**。对照无事件基线。  
- 世界杯案例数字 = **C/B**，不改本卡 +8–15%。InnBrief 80% / $800 / $1300 = **C/D**，不当事实。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。≥2 家 Primary 满才叫 citywide。90% 不当中国官方门槛。 |
| 2026-08-21 11:00 CST | P32 剧本 drafted。追加 §6 虚火交叉。不改 §1–5 幅度。 |
