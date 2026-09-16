# Decision Card: Hold Price（曲线后置 · Pace 不落后）

> 资产：Advisor Decision Card  
> 路径：`recommendations/hold-price-curve-late.md`  
> 对应：OTB 看起来低，但同 DTA Pace 不落后；或 Pickup 匹配该店后半段曲线  
> 调用：`decision-framework/advisor-process.md` 第 4 段；问题树 §1 问 2–3、§6 Pace Behind 先排除  
> 理论：`theory/otb-pickup-pace.md` §9  
> 状态：active · Wave2  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20  
> 不要与 `increase-bar-pace-ahead.md` 混用。

```yaml
decision: Hold BAR（或只修库存 / 限制 / 渠道，不动价）
scenario: Late booking curve · OTB looks low but Pace not behind
required_inputs:
  - DTA
  - OTB (rooms or OCC + total rooms)
  - Pickup (至少 3D 或 7D，能还原间夜)
  - historical_pace 或曲线形状（商务后置 / 度假前置）
  - current_BAR
  - remaining_inventory
  - inventory_and_channel_open (是否真的开着)
signals_for:
  - pace_on_or_ahead_vs_same_DTA
  - pickup_matches_late_curve
  - business_weekday_or_known_short_lead
  - price_not_above_bookable_comps
signals_against:
  - pace_behind_and_widening
  - pickup_below_own_late_window
  - inventory_or_channel_closed
  - price_clearly_above_all_comps
recommended_action: BAR 不动；先修误关库存 / 过严限制 / 渠道不同步。不促销、不跟竞对降。
risk: 把真 Behind 误判成后置曲线；错过 48h 刺激窗口
follow_up: 24/48h 净 Pickup 间夜、取消、渠道可订、竞对是否集体降
confidence: Medium（方向）；「后置」本身是 Hypothesis，除非有本店曲线点
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

同时接近：

- 用户原话像「入住率才 60% / 空房还很多 / 要不要降」。
- DTA 仍在该店主窗口（常见 7–21，不是当晚）。
- **Pace 相对同 DTA 的 STLY / 曲线 / 剔活动历史 = On 或 Ahead**（经验：差距 > −5pp 就不先当 Behind。−5pp 是 Hypothesis）。
- 或：Pace Unknown，但酒店类型是短 Lead（城区商务周中），且 Pickup 并未低于「最后 7 天才会加速」的自我描述。
- 价格位置：BAR 不高于可订竞对，或只高一个小阶梯且转化未崩。
- 库存与渠道至少有一边**可能**没开——即使已开，价也不动。

**不要用这张卡：**

- Pace Behind **且** Pickup 低于该店后半段 **且** 价明显高于市 → `stimulate-slow-pickup.md`。
- Days-to-Sellout < DTA → 不是 Hold，是保护 / 涨。
- DTA≤3 仍大面积剩余 → Last Minute Unsold，不是本卡。
- 唯一理由是「经理说再等等」而无曲线、无 Pace。

---

## 2. 必填输入 vs 缺了怎么办

| 输入 | 缺了 | 本卡怎么条件化 |
| --- | --- | --- |
| DTA / Stay Date | 不能用 | 先要日期 |
| OTB + 总房 | 60% 无法变间夜 | Confidence ≤ Medium；Trigger 用占比 |
| Pickup 3D 或 7D | 只有照片没有速度 | 可因 Pace On 给 Hold；禁止同时建议降 |
| 历史 Pace / 曲线形状 | 不知 60% 算不算低 | Hold 仍是默认，但必须把「同 DTA 基准」列为 3 个补数之首 |
| current_BAR | 无动作对象 | 仍可建议「今天不改价」 |
| 库存/渠道开关 | 可能把关房当需求差 | **强制先问一句「渠道和房型开着吗」**；未答则动作写成「先核开关，不降价」 |
| competitor_rate | 没有价锚 | 不降；不发明竞对价 |

---

## 3. Signals For / Against

### For（至少 2 个家族）

- [ ] 同 DTA Pace On 或 Ahead（Fact 差，pp）
- [ ] 历史曲线后置：该 DOW 最后 7 天走 ≥20pp（本店数；无数字则只算 Hypothesis）
- [ ] 3D/7D Pickup 落在该店后半段平时带宽，或 Days-to-Sellout 因「现在本该慢」而不适用
- [ ] BAR ≤ 最低可比竞对，或价差 <8%
- [ ] 市场 / Comp Forward 也未明显高于本店（若有）
- [ ] 无事件、无竞对满房——不是漏接的 High Demand

**启用 Hold：** For 中 Pace 或曲线形状至少 1 条为 Fact 或 High-probability；Pickup 不能强烈反向。

### Against（1 条降档；2 条改走刺激卡）

- [ ] Pace Behind ≤ −8pp 且缺口在扩大
- [ ] 3D 与 7D 都低于该店后半段，Days-to-Sellout > DTA×1.5
- [ ] BAR 高于全部可订竞对 ≥10% 或 ≥1 个大阶梯
- [ ] 库存/渠道/MinLOS 把需求挡在门外（这不是 Hold 成功，是先修供给）
- [ ] 事件日或 Comp 已满，本店 OTB 低

Against 里「供给没开」→ 动作变成修库存，**仍然不降价**。这仍可用本卡的「只修库存」分支。

---

## 4. 推荐动作

### 4.1 主动作：BAR 不动

```text
Stay Date:            <焦点日>
Room Type:            全部在售房型
Rate Plan:            BAR 及 BAR 连动公开价
Current:              <当前 BAR>
Range:                维持当前 BAR（执行带 = 当前值 ±0）
Preferred:            不改
Inventory:            见 4.2；不关 BAR
Restriction:          淡日若存在过严 MinLOS/CTA → 放松；高峰不在本卡新设
Channel:              修复不同步；打开误关的必要渠道。不接破价大促
Staging:              无价格阶段。48h 后按 Trigger 决定是否离开本卡
Do-not-do:
  - 因「才 60%」降 BAR
  - 跟最低竞对降
  - 上 OTA 今夜特价 / 神券打穿 BAR
  - 说「适当观望」而不写 Trigger
```

### 4.2 只修库存 / 限制 / 渠道（可与 Hold 同时做）

按检查顺序，做完一项就停，不要一次全做：

| 优先级 | 发现 | 动作 | 首选 |
| --- | --- | --- | --- |
| 1 | 某渠道配额=0 或房型误关 | 打开该渠道/房型到正常可售 | 先开直销+主 OTA，不开批发深折 |
| 2 | MinLOS≥2 挡淡日短住 | 该 Stay Date MinLOS 降为 1；CTA 解开 | 只解这一天，不解整周 |
| 3 | 价不同步（直销与 OTA 差 >1 阶梯） | 先对齐到当前 BAR，不另定价 | 以直销 BAR 为锚 |
| 4 | 以上都没有 | 什么库存都不改 | — |

### 4.3 明确不要做

- 把 Hold 写成「再观察一下」而不给间夜 Trigger。
- 一边 Hold BAR 一边上一条低于 BAR 8%+ 的公开促销（那是暗降）。
- 用竞对正在降证明自己该降——先看本店 Pace。

---

## 5. 风险

1. **假后置。** 其实是真 Behind。Trigger：48h 累计 Pickup 低于阈值且基准补齐后 Pace≤−8pp。
2. **供给故障被当成策略。** Trigger：用户确认某渠道不可订 → 先开库存，Hold 价仍有效。
3. **市场突然转热。** Trigger：竞对≥2 家满或中位价 +10% → 离开本卡，评 Increase BAR。
4. **用户按「空房焦虑」自行降了。** Trigger：发现 BAR 已被改低 → 先问是否执行本卡，再重评，不自动跟更低。

---

## 6. What To Watch / Follow-up

| 指标 | 24h | 48h | 口径 |
| --- | --- | --- | --- |
| 净 Pickup 间夜 | 主 | 累计 | 该 Stay Date，新订−取消 |
| 取消间夜 | 要 | 要 | 同日 |
| 渠道可订 | 即时 | — | 直销/主 OTA 是否仍开 |
| 自身 BAR 是否被改 | 即时 | — | 有没有人「顺手降了」 |
| 竞对 BAR | 要 | 要 | 同房型尽量同早餐 |

---

## 7. Trigger（按规模缩放）

基准 300 间。`阈值 ≈ max(总房 × p, 2)`。

| 事件 | 300 间 | p | 动作 |
| --- | --- | --- | --- |
| 后置成立 | 24h Pickup ≥ **3** 间 | 1.0% | 继续 Hold |
| 速度恢复 | 24h Pickup ≥ **8** 间 | 2.5% | Hold；取消任何已拟的降价 |
| 可能判错 | 48h 累计 < **5** 间 且库存已开 | 1.7% | 离开本卡，用 `stimulate-slow-pickup.md` 重评 |
| 市场转热 | ≥2 家竞对满或中位 +10% | — | 评 Increase BAR / 保护库存 |
| 供给故障 | 任一主渠道不可订 | — | 只开库存，仍不降 |

用户原句「14 天、60%、3 天 8 间」：8 间/3 日在 300 间店偏慢，但**若 Pace On + 曲线后置，仍先 Hold**，用上表 48h 累计 <5 决定要不要离开。总房未知时不要把 8 间直接当 Slow。见理论卡 §9.3。

---

## 8. Confidence

- 默认 **Medium**。
- 有本店 DTA=14 历史点且 Pace On/Ahead：**方向 High**，对外仍 Medium（「后置」幅度因店而异）。
- 无任何基准：方向 Medium 下限，补数把曲线放第一。

---

## 9. 边界

| 更像谁 | 去哪 |
| --- | --- |
| Pace Behind + 价高 + 库存开 | `stimulate-slow-pickup.md` |
| Pickup 过快 | `protect-inventory-fast-pickup.md` |
| DTA≤3 | Last Minute Unsold |
| 只是 Budget 没达到 | Forecast Miss；不因 Budget 降价 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。−5pp / 后置 20pp / Trigger 间夜均为 Hypothesis。 |
