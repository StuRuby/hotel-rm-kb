# Decision Card: Close Low Rate in Compression（压缩日关低价）

> 资产：Advisor Decision Card  
> 路径：`recommendations/close-low-rate-compression.md`  
> 对应：问题树 §5 / §8 / §14 / §16；O1 / O7  
> 剧本：P03 Sellout Risk · P01 / P07 / P06  
> 配套：`protect-inventory-fast-pickup.md`（总保护）· 本卡专管 **何时提前关低价**  
> 状态：active · Wave4  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Close publicly bookable rates below the new floor on compression dates
scenario: Sellout / event / holiday peak path; low rates still open
required_inputs:
  - Stay Date + DTA + Remaining
  - current_BAR + 在售低价产品列表（未知则条件化）
  - Pickup / Pace
  - competitor_rate（决定关完还涨不涨）
signals_for:
  - days_to_sellout_lt_dta
  - event_or_holiday_peak_with_corroboration
  - public_rate_below_bar_or_below_new_floor
  - competitor_full_or_rising
signals_against:
  - inventory_actually_closed（先开再谈关低价）
  - pickup_is_one_group
  - market_also_weak
recommended_action: 立刻关闭公开可订 < 新地板 的产品；BAR 保持 Open；价未最高再配套第一刀；价已最高只关不涨
risk: 关完主渠道不可订；关错弱肩日；一团假压缩
follow_up: 24h 是否仍可订到破价、Pickup、竞对
confidence: 关低价方向 Medium；「提前几天关」为 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用（含「要不要提前关」）

压缩路径 = Days-to-Sellout < DTA，或已证实 Peak +（Pace Ahead / Pickup Fast / 竞对满）之一。

| DTA | 低价还开着 | 动作 |
| --- | --- | --- |
| 任意，Days-to-Sellout < DTA | 是 | **今天关**（不等「再看看」） |
| 高峰 DTA 8–21，Pace 已 Ahead | 是 | **提前关**；不要等到 DTA≤3 |
| 高峰 DTA>21，只有日历旗标 | 是 | 先关会打穿 BAR 的深折；浅围栏可留到有旁证 |
| 肩日、无压缩 | 是 | **不要**按高峰关；弱日围栏 −3–5% 可留 |
| 价已最高 | 是 | **只关不涨** |
| 价已最高且低价已关 | — | 评 MinLOS / 留房，不再找低价关 |

「提前」= 在剩余按当前低价会在 DTA 一半之前卖完时关，而不是等 OCC 到 90%。这是 Hypothesis，不是官方 OCC 门槛。

**不要用：** 供给其实没开（先走 Open 卡）；市场也弱；Pickup 是一团。

---

## 2. 新地板怎么定（Hypothesis）

```
若同时涨 BAR：地板 = 第一刀下限（how-much-to-move 重叠带下限）
若只关不涨：地板 = 当前 BAR
例：899 → 第一刀 999–1049 首选 1029 → 关一切公开可订 <999
```

中国预付围栏（Hypothesis，非平台规则）：高峰压缩日关「预付不可退深折 / 今夜特价 / 限时抢」；BAR 与符合 LOS 的公开价保持可订。佣金 Unknown。

---

## 3. 动作表

```text
Stay Date:            <压缩日 / Peak>
Rate Plan:            任何公开可订 < 新地板
Inventory:            Close 这些产品或提价到 ≥ 地板；BAR Open
Restriction:          本卡不新设 MinLOS（交给 minlos-peak-protect）
Channel:              直销与主 OTA 对齐到地板以上；高峰默认拒会打穿地板的大促
Price:                未最高 → 配套 +8–15% 或收到最低竞对，不跳最高
                      已最高 → 只关
Do-not-do:
  - 关 BAR 本身
  - 只改一个 OTA
  - 把肩日弱日一并关促销
  - 「适当收一收低价」
```

与 Protect 卡分工：Protect 管分房型/配额/MinLOS 条件；本卡回答用户「要不要提前关低价」——**要，只要压缩路径成立且低价仍开。**

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h Pickup <3（300 间尺） | 不自动重开破价；先核是否关错主 BAR |
| 主 OTA/直销不可订 | **先开回 BAR 层**，不重开破价 |
| 24h ≥8 且非一团 | 保持关；价可第二刀 |
| 发现一团 | 停涨；已关深折可保持，浅围栏按团政策 |
| 事件取消 | 立刻回到平日带，低价按弱日规则重开 |

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。提前关 = 卖穿前关，不是等 90% OCC。 |

## 6. 一行（2026-08-27 18:17，不改上文）

压缩日关低价机械尺仍本卡。**嵌套结构诊断 / 涨了 BAR 低档还挂 / 弱夜关光低档**过程剧本 → **P64** `nested-rate-class.md`（主卡 `dont-leave-low-class-open-on-peak.md`）。本卡正文不重写。
