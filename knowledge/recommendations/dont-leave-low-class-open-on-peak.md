# Decision Card: Don't Leave Low Class Open on Peak（高峰别留着嵌套低档；关低 ≠ 涨 BAR；Hold 779–799 首选 799）

> 资产：Advisor Decision Card（P64 主卡 · 形 A/C）  
> 路径：`recommendations/dont-leave-low-class-open-on-peak.md`  
> 对应：问题树 §71；用户原话「低价还开着所以 ADR 上不去」「涨了 BAR 但 399 还挂着」「BAR 改了但促销还开」  
> 剧本：`advisor-playbooks/nested-rate-class.md`  
> 配套：压缩关低机械尺复用 `close-low-rate-compression.md`（**不重写**）· 弱夜同伴卡 `dont-strip-low-class-on-weak-nights.md` · `metrics/open-rate-classes.md` · P01 · P03 · P18 · P60 · inventory-control Nested  
> 状态：active · 2026-08-27 18:17 CST  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；B 定义（AccountingTools nested booking limit — §50）；A Vendor 指针（Amadeus nested allotment — §50 / inventory-control）  
> Last Verified：2026-08-27  
> 仿真：`cases/sim-2026-nested-low-open-sat.md`  
> Advisor-First：建议先问 nesting 模式、列出低于新地板的公开产品；高峰先关/限低档，再谈是否涨 BAR；Hold 意图公开 BAR；不操作 PMS/OTA/CM。  
> 禁止：涨 BAR 却留着破价低档；BAR→399；一夜 −15%；编中国嵌套 SOP / EMSR Fact；开 P65。

## 三句（原样）

1. 先问本店低价档和 BAR 是 **nested / shared / dedicated**，以及今晚还挂着哪些低于新地板的公开产品。结构不明就只动看得到的公开价/促销，不编 PMS 嵌套方向。本店字段名 = **NV**。
2. 高峰 Ahead：先关/限仍开着的深折低档，再谈是否涨 BAR。Hold 779–799 首选 799（Hypothesis / Simulation）。涨了 BAR 但 399 还挂着，等于没涨。
3. 弱夜把低档关光只留高 BAR 没人订，不是「再涨」，是误用嵌套/限制——打开有围栏的低档或走 P05/P02。错映射走 P60。不要把 BAR dump 到 399「因为嵌套太复杂」。

```yaml
decision: On peak/Ahead do not leave nested or public low rate classes open below the intended floor; closing low class is not the same as raising BAR — do both, either, or neither as diagnosed; if BAR was raised but 399 still live, close/limit the low class and Hold intended BAR 779–799 prefer 799
scenario: Pace Ahead or compression path; deep promo / nested low class still bookable; or BAR already moved up while OTA still shows 399
required_inputs:
  - Stay_Date
  - nesting_mode_nested_shared_dedicated（缺则 NV；不明则只动公开可见）
  - list_of_public_rates_below_intended_floor
  - remaining_and_pace
  - current_intended_BAR
  - mapping_bug_check（错则 P60）
signals_for:
  - Pace_Ahead_or_compression_and_public_rate_below_floor
  - BAR_raised_but_low_class_or_promo_still_live
  - ADR_dilution_while_BAR_looks_high
signals_against:
  - live_low_is_mapping_error (then P60)
  - true_weak_Behind_with_all_low_classes_already_closed (then companion / P05/P02)
  - shoulder_no_compression (do not close like peak)
recommended_action: 先问 nesting。高峰 → 关/限公开 < 地板产品（机械尺可复用 close-low）。Hold 779–799 首选 799。涨了但 399 还挂 → 立刻关 399 类。Never BAR→399。Never −15%。14/399/799 只 Simulation。399 = 要关的低档 / 被拒绝的新 BAR。
risk: 关错主 BAR 层；把错映射当策略；弱肩日误关；结构不明乱关 dedicated
follow_up: 公开栏是否仍可订破价；意图 BAR 是否可订；Pickup 分层；nesting 模式是否补齐
confidence: 有日期+低于地板列表+Pace 则方向 Medium；缺 nesting 只条件化公开产品 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「低价还开着所以 ADR 上不去」「涨了 BAR 但 399 还挂着」「BAR 改了促销还开」。

主动词：**关/限低于地板的公开低档** / **Hold 意图 BAR** / **拒绝把 399 当新 BAR** / **问 nesting NV**。  
不要用：活价其实是错码（P60）；弱夜低档已关光（同伴卡 / P05）；无压缩的肩日。

公开 BAR 幅度仍走 `pricing/how-much-to-move.md`。本卡回答 **高峰不要留着打穿地板的嵌套/公开低档；关低 ≠ 涨价本身**。  
压缩日「要不要提前关」的机械表 → 复用 `close-low-rate-compression.md`，不在此重写。

---

## 2. 硬门（先关低档，再谈涨）

命中任一 → **不要假装已经涨价，也不要把 BAR 改成 399**：

1. Ahead / 压缩 + 仍有公开可订 < 新地板 → **今天关/限低档**；BAR 保持 Open  
2. 已涨 BAR 但低档/促销仍可订 → **立刻关低档**；Hold 意图 BAR（形 C）  
3. 有人提议 BAR→399「嵌套太复杂」→ **拒绝**  
4. 一夜 −15% → **拒绝**  
5. 活低价像错映射 → 先 **P60**，不要当嵌套策略

价已最高且低档已关 → 只保护库存 / 评 MinLOS，不再找低价关，也不自动再涨。

---

## 3. 动作表

```text
Stay Date:            <高峰 / Ahead 日>
Rate Plan:            任何公开可订 < 意图地板（含嵌套促销档）
Inventory:            Close 或收 Booking Limit；BAR Open
Restriction:          本卡不新设 MinLOS（P33/P40）
Channel:              直销与主 OTA 对齐到地板以上；高峰拒打穿地板的深促
Price:                未最高 → 可配套第一刀（how-much）；已最高 → 只关不涨
                      Hold 带：779–799 首选 799（Hypothesis / Simulation）
Nesting:              问 nested/shared/dedicated；Unknown → 只动公开可见
Do-not-do:
  - 只改 BAR 数字、低档仍开
  - 关 BAR 本身
  - BAR → 399
  - 一夜 −15%
  - 编 EMSR / 中国嵌套 SOP
  - 顾问代关价码
```

与 close-low 分工：close-low = 压缩路径上**何时关、地板怎么定**的机械卡；本卡 = **嵌套结构 +「涨了还挂着」形 C + 与弱夜同伴卡对偶**。  
与同伴卡分工：本卡 = 高峰别留低档；同伴 = 弱夜别关光低档。

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h 仍可订到破价 | 再核渠道/促销开关；保持关 |
| 主 OTA/直销 BAR 不可订 | **先开回 BAR 层**，不重开破价 |
| 发现错映射 | **P60** |
| 弱夜误关、Pickup 死 | 转同伴卡 / P05/P02 |
| 事件取消 / 需求塌 | 回到平日带；低价按弱日规则 |

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 18:17 CST | 首版。P64 主卡。高峰关低档；形 C；复用 close-low；拒 399。 |
