# Decision Card: Increase BAR（Pace Ahead + 库存压力）

> 资产：Advisor Decision Card
> 路径：`recommendations/increase-bar-pace-ahead.md`
> 对应：任务书第四十三节示例场景 `Increase BAR` / `Pace ahead with limited remaining inventory`
> 调用：`decision-framework/advisor-process.md` 第 4 段
> 状态：active · 首张决策卡
> 知识类型：Best Practice / Hypothesis（幅度与 Trigger 数字待 `feedback/` 校准）
> 证据等级：B
> Last Verified：2026-08-20
> 配套仿真：`decision-framework/advisor-process.md` 第七节（300 间 / 10-03 / DTA14）

```yaml
decision: Increase BAR
scenario: Pace ahead with limited remaining inventory
required_inputs:
  - DTA
  - OTB (rooms or OCC + total rooms)
  - Pickup (至少 3D 或 7D，能还原间夜)
  - historical_pace (LY / STLY / curve，至少一个)
  - current_BAR
  - competitor_rate (至少 1 个可比点；没有则降 Confidence)
  - remaining_inventory
signals_for:
  - strong_pickup
  - pace_ahead
  - comp_compression_or_we_are_cheaper
signals_against:
  - conversion_drop
  - weak_market
  - high_cancellation
  - pickup_is_one_group
recommended_action: 分阶段上调 BAR；第一刀收到最低竞对附近或 +8–15%；关破价；不一次跳到最高竞对之上
risk: 弹性高导致成交停；Pickup 实为 Group；事件假信号
follow_up: 24/48h Pickup 间夜、取消、竞对、多渠道是否执行
confidence: Medium（方向）；幅度 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

同时接近以下画像（不必全中，但 **Pace Ahead 与 Fast Pickup 至少要有一个是 Fact，另一个不能强烈反向**）：

- Pace 相对 LY / STLY / 历史曲线 / Forecast **Ahead**（经验起点：同 DTA 领先 ≥8pp；更小的领先要靠 Pickup 和价差补。8pp 是 Hypothesis）。
- Pickup 快：Days-to-Sellout = Remaining / 近期日均 Pickup **< DTA**，或 3D/7D 速度明显高于该酒店平时（无平时则看「按此速度会早于入住卖完」）。
- 剩余库存不是「几乎没了」（没了就变成 Sellout / Overbooking 卡），也不是「剩太多且速度在停」。
- 价格位置：BAR 低于可比竞对，或明显低于自身同类日历史；或有事件/竞对满房。
- DTA 通常在 3–30。DTA≤2 的涨价是另一张卡（Last Minute / Sellout Risk）。DTA>45 的 Ahead 更可能是早预订结构，先核 Segment。

**不要用这张卡：**

- OTB 高但 Pickup 已停了 7 日，且无事件 — 可能是早已预订完，再涨只伤尾部。
- OCC 低、用户喊「冲入住」— 去 Overpricing / Slow Pickup 诊断，不是本卡。
- 唯一理由是「竞对比我贵」— Competitor Rate 是信号不是答案。
- Pickup 很快但已确认是一笔大团 — 改走 Group Evaluation。

---

## 2. 必填输入 vs 缺了怎么办

| 输入 | 缺了 | 本卡怎么条件化 |
| --- | --- | --- |
| DTA / Stay Date | 不能用本卡 | 先要日期。Low Confidence |
| OTB + 总房 | 不能把 % 变成间夜 | 区间加宽一档，Confidence ≤ Medium |
| Pickup 3D 或 7D | 只有存量没有速度 | 可因 Pace Ahead + 价差给「小步第一刀」；禁止第二刀。补 Pickup |
| historical_pace | 不知 68% 算快算慢 | 只靠 Pickup×剩余 + 价差；方向最多 Medium |
| current_BAR | 无动作对象 | 不给数字，只要价格截图 |
| competitor_rate | 没有锚 | 第一刀只用 +8–12% 启发式，区间加宽；不要发明竞对价 |
| remaining_inventory | 可用 总房−OTB | OO 未知时标 Hypothesis |
| Segment Pickup | 可能误把团当散 | **强制 IF**：若单笔 Group ≥40 间或占窗口 ≥50%，停用本卡加码 |
| 房型剩余 | 可能涨错房 | 只动 BAR/基础房，套房差价不动 |
| 事件细节 | 可能过度事件定价 | 第一刀不把事件计入幅度；事件只影响 Urgency |

---

## 3. Signals For / Against（要能打勾）

### For（每个算一个证据点，不是一个家族）

- [ ] Pace Ahead vs LY/STLY/曲线（Fact 差，pp）
- [ ] 3D 与 7D Pickup 都快，且速度接近（不是最后一天一笔堆出来）
- [ ] Days-to-Sellout < DTA
- [ ] BAR < 最低可比竞对 ≥8% 或 ≥1 个价差阶梯（如 100 元）
- [ ] 竞对在涨或出现满房（Compression）
- [ ] 事件日且 Lead Time 匹配
- [ ] 低价产品仍开着，实际成交价更低
- [ ] 取消稳定，不是靠可取消堆 OTB

**启用第一刀：** For 中至少 2 条来自不同家族（Pace / Velocity / Price / External / Inventory）。  
**启用第二刀：** 第一刀后 24–48h Pickup 仍达阈值，且 Against 未出现。

### Against（出现 1 条就降档或改条件；出现 2 条就不要涨或只关破价）

- [ ] 24h 已观察到 Conversion/Pickup 坍塌
- [ ] 市场整体弱：竞对都在降、无事件、城市需求差
- [ ] 取消高或突然升高
- [ ] Pickup 可被一笔 Group / 船员 / 合约批量解释
- [ ] 自身 BAR 已经 ≥ 全部竞对，再涨只靠「我觉得还能涨」
- [ ] 库存其实没开（渠道关了、房型关了）造成的假 Pace
- [ ] DTA 很长（>45）且全是早订合约，散客窗口还没开始

---

## 4. 推荐动作（必须落到数字）

### 4.1 第一刀（立即）

```text
Stay Date:            <焦点日>
Room Type:            先动 BAR / 基础售卖房型；未知结构时不动套房差价
Rate Plan:            BAR 及 BAR 连动的公开价
Current:              <当前 BAR>
Range:                见 4.3
Preferred:            见 4.3
Inventory:            不关 BAR；剩余继续卖
Restriction:          本卡默认不新设 MinLOS（事件+肩日数据齐了再另开 Restriction 卡）
Channel:              关掉会把成交价打到「第一刀下限以下」的促销 / 限时抢 / 连住破价
Staging:              分阶段。禁止第一刀直接超过最高可比竞对
```

### 4.2 幅度启发式（Hypothesis，不是弹性模型）

按 **「百分比」和「竞对锚」各算一遍，取可解释且更保守的重叠带**：

**方法 A — 竞对锚**

| 自身 vs 最低竞对 | 第一刀目标带 |
| --- | --- |
| 低 ≥15% 或低 ≥150 元（哪个先到） | 收到最低竞对附近。不要一天补完全部缺口到最高竞对 |
| 低 8–15% | 收到最低竞对 ~ 中位竞对 |
| 低 <8% 但 Pace+Pickup 仍强 | +5–8%，或收到中位；不要为「对齐」再跳一大步 |
| 已在竞对带内但仍 Ahead+Fast | +5–10%，盯竞对满房/再涨再加码 |
| 无竞对数据 | 只用方法 B，Confidence 降一档 |

**方法 B — 百分比**

- 默认第一刀 **+8% 至 +15%**。
- Days-to-Sellout ≤ DTA×0.5 **且** 有事件或竞对满房双确认：允许第一刀到 **+15–20%**，仍禁止 >+20% 除非剩余按当前速度会在 ≤3 日内卖完。
- 给不出点：区间宽度约 **BAR 的 5–8%** 或 **50–100 元**（取更贴该酒店价位的），并给首选。
- 首选：取区间中偏下（避免第一刀过头）。若区间正好落在某个竞对点上，首选对齐该点（比发明 1017 这种假精确好）。

**方法 C — 300 间仿真锚（仅示范，见顾问过程第七节）**

```text
当前 BAR 899，竞对 999 / 1029 / 1099
方法 A：低 11.1% vs 最低 → 目标带 999–1029（可扩到 1049）
方法 B：+8–15% = 971–1034
重叠带：999–1034 → 执行带取 999–1049
首选：1029（对齐中位竞对，+14.5%，落在方法 B 上沿附近，仍低于最高竞对）
禁止第一刀：1099
```

真实酒店必须重算，不得把 1029 当万能答案。

### 4.3 第二刀

```text
触发：24h Pickup ≥ 阈值高 且 竞对未降 且 无大单解释
动作：在第一刀首选上再 +3–8%，或收到最高竞对附近（仍给区间+首选）
仍禁止：无新信号连续第三刀；无弹性证据对准到个位
```

### 4.4 明确不要做

- 说「适当涨价」。
- 只改一个渠道。
- 用关房代替涨价（除非该房型已确定要保护给更高价值）。
- 第一刀设严 MinLOS（未证明事件 overnight）。
- 把已售库存的锁价收入算进「涨价收益」。

---

## 5. 风险

1. **价动成交停。** 弹性高于假设。Trigger：24h Pickup < 阈值低。
2. **需求质量假。** Pickup 是 Group / 批量。Trigger：单笔 ≥40 间或窗口 Group ≥50%（40 间是 300 间酒店尺度的 Hypothesis，其他规模用「占总房 ~13%」或「占该窗口 Pickup 一半」）。
3. **事件假信号。** 无 overnight。Trigger：场馆信息否定 → 回退到「普通 Ahead」幅度。
4. **竞对降价 / 我们变孤高。** Trigger：最低竞对跌到第一刀下限以下一档。
5. **取消恶化。** Trigger：取消翻倍或绝对间夜超阈值。
6. **执行残缺。** 只改了 PMS 没改 Channel Manager。先对齐价格再谈效果。

---

## 6. What To Watch / Follow-up

最低 5 项，窗口 24/48/72h：

1. 该 Stay Date **Pickup 间夜**（新订−取消）
2. 该 Stay Date **取消间夜**
3. 竞对 BAR（同房型、尽量同早餐口径）
4. 自身多渠道 BAR 是否都到建议带
5. 新单 Segment（有无大单）

---

## 7. Trigger 数字（按酒店规模缩放）

基准写 300 间。缩放：`阈值间夜 ≈ max(总房 × p, 2)`，向下不小于 2 间（避免 80 间酒店阈值变成 0）。

| 事件 | 300 间阈值 | 缩放 p | 动作 |
| --- | --- | --- | --- |
| 过激 | 24h Pickup < **3** 间 | 1.0% | 先守 24h；48h 累计 <5（p≈1.7%）→ 降到第一刀下限（仿真是 999） |
| 持有 | 24h Pickup **3–7** 间 | 1.0–2.3% | 守首选，不加码 |
| 加码 | 24h Pickup ≥ **8** 间 | 2.5% | 第二刀，且竞对未降、无大单 |
| 取消异常 | 24h 取消 ≥ **6** 间或翻倍 | 2.0% | 停加码，不自动大降 |
| 竞对再涨 | 中位 +10% 或 ≥2 家满房 | — | 重评第二/第三刀，Confidence 降一档 |
| 质量翻转 | 单笔 Group ≥ **40** 间 | 13% 总房 或 窗口 Pickup 50% | 停用加码，BAR 上限回到第一刀下限 |

用户已执行的价格若高于本卡第一刀上沿，Trigger「过激」时先回到首选，不要直接跳回原价（除非 48h 仍死）。

---

## 8. Confidence

- 默认 **Medium**。
- 升到 High（只对方向）：3 个家族同向 + Segment 已排除大单 + 竞对可比已确认 + 动作是第一刀。
- 幅度永远不得在无本酒店反馈时标 High。
- 缺 Pickup 或历史或竞对：方向 Medium 或 Low，见顾问过程第六节自动降级。

---

## 9. 与其他剧本的边界

| 更像谁 | 去哪张（多数 still not_started，先用过程文件） |
| --- | --- |
| Days-to-Sellout ≤2 或 DTA≤3 且剩得很少 | Sellout Risk |
| 已经要提前多日卖完 | Early Sellout |
| 明确演唱会/赛事日历 | Concert / Event（本卡可当价格子程序） |
| 节假日连住 | Holiday + Restriction |
| Pickup 太快但价格已最高 | Fast Pickup（可能只关库存/限制，不再涨） |
| 要接团 | Group Evaluation，本卡可能给出「散客机会成本」 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。幅度、8pp、阈值间夜均为 Hypothesis。仿真数字 899→1029（999–1049）只作框架示范。 |

> 交叉指针（2026-08-30 06:17，不改正文）：Ahead 涨/Hold 仍本卡；Resort Fee/强制服务费/含税总价改尺 → **P79**。交叉 P79 resort-fee/all-in ≠ Ahead 涨价。不写 P80。
