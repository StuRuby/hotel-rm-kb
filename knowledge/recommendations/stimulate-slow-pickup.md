# Decision Card: Stimulate Slow Pickup（先鉴别，再小步促，不自动砸 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/stimulate-slow-pickup.md`  
> 对应：Pace Behind + Pickup 慢；问题树 §4 Pickup Slow / §6 Pace Behind / §13 Price Too High  
> 剧本：`advisor-playbooks/slow-pickup.md`  
> 理论：`theory/otb-pickup-pace.md`  
> 状态：active · Wave2  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Stimulate demand（开战术产品 / 松限制 / 开渠道 / 小步降 BAR）
scenario: Pace behind + slow pickup after exclusions
required_inputs:
  - DTA
  - OTB (rooms or OCC + total rooms)
  - Pickup 3D 或 7D（能还原间夜；声明净/毛）
  - historical_pace（同 DTA）
  - current_BAR
  - competitor_rate（至少 1 个可比点；没有则降 Confidence）
  - remaining_inventory
  - inventory_channel_restriction_status
signals_for:
  - pace_behind
  - pickup_below_own_curve
  - inventory_and_channels_open
  - bar_above_bookable_comps
signals_against:
  - late_curve_not_yet_started
  - closed_inventory_or_sync_fail
  - market_also_soft
  - product_or_reputation_incident
  - just_raised_yesterday
recommended_action: 先排除供给与曲线；允许刺激时优先开围栏促销或松限制，BAR 第一刀 −5–10%；禁止一夜 −15%+（除非 DTA≤3 且 Pickup≈0 且价明显高于全部竞对）
risk: 把后置曲线或关库存当成需求差；无效降价打 ADR；打开破价渠道
follow_up: 24/48h 净 Pickup、取消、竞对、促销是否打穿 BAR
confidence: Medium（方向）；幅度 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

必须**先排除**之后，仍同时接近：

- Pace vs 同 DTA 基准 **Behind**（经验：≤ −5pp；≤ −8pp 更硬。Hypothesis）。
- Pickup 慢：Days-to-Sellout > DTA×1.5，或 3D/7D 低于该店后半段，且不是「刚涨价的 1D」。
- 库存开着、配额>0、价格同步、限制未把短住挡死——或这些刚刚修好、速度仍不来。
- DTA 通常 4–21。DTA>30 的慢经常是窗口未到。DTA≤3 改走 Last Minute。

**不要用这张卡：**

- 只看见 OCC/OTB 低。先走问题树 §1 与 `hold-price-curve-late.md`。
- 曲线后置 + Pace On → Hold，不是刺激。
- 市场整体一样空、竞对都在降、无事件 → 降价弹性可能很差；最多开小配额战术产品。
- Pickup 慢但是价已经 ≤ 全部竞对 → **不该降**，改开渠道 / 松限制 / 查产品。

---

## 2. 何时降、降多少、何时不该降

这是本卡的核心。顺序强制：

```
1) 供给（库存 / 渠道 / 同步 / 限制）没开 → 只修供给，不降
2) 曲线后置或 Pace 不落后 → Hold，不降
3) 市场冰点（Comp Forward 同样落后、无事件）→ 不砸 BAR；可开小配额围栏产品
4) 价已经 ≤ 可订竞对 → 不降；开渠道或松限制
5) 价明显高于可订竞对 + Pace Behind + Pickup 慢 + 供给开着
     → 才允许动价
     优先：开一张围栏战术产品（预付 / 连住 / 会员），不要先动公开 BAR
     次选：BAR 小步降
```

### 2.1 第一刀幅度（Hypothesis，与过程文件一致）

| 条件 | 工具 | 区间 | 首选 |
| --- | --- | --- | --- |
| 价高于最低竞对 8–15%，DTA 8–21 | 围栏促销，BAR 不动 | 促销价 = 最低竞对附近，或 BAR−5–8% | 先促销、守 BAR |
| 价高于最低竞对 ≥15% 或 ≥150 元，且 7D 也慢 | BAR 小步降 | **−5% 至 −10%** | 收到最低竞对附近，不要一次收到最低之下 |
| 价在竞对带内但仍 Behind+Slow | 只开渠道或松 MinLOS | BAR 不变 | 不降 |
| 价已 ≤ 全部竞对 | 开渠道 / 松限制 / 查产品 | BAR 不变 | 不降 |
| DTA≤3 且近 3D Pickup≈0 且价明显高于全部竞对 | BAR 或当晚战术产品 | 允许到 **−10–15%** | 有截止日期；不把 BAR 永久砸穿 |
| 无竞对数据 | 只用百分比 | BAR −5–8% 或只开促销 | 首选开促销；Confidence 降档 |

**禁止第一刀：** 一夜 −15% 以上（DTA≤3 的例外见上）；把 BAR 降到最低竞对之下还加促销；只改一个渠道。

给不出点：区间宽度约 BAR 的 5–8% 或 50–80 元，并给首选。首选取区间中**偏高**一侧（降价避免第一刀过头）。

### 2.2 第二刀

```
触发：48h 累计 Pickup 仍 < 阈值低，且供给仍开，且竞对未再降到我们新价之下
动作：若第一刀是促销未动 BAR → 才允许 BAR −5–8%
      若第一刀已动 BAR → 再 −3–5%，或停价改开另一渠道
仍禁止：连续第三刀砸价；无弹性证据对准到个位
```

---

## 3. 必填输入 vs 缺了怎么办

| 输入 | 缺了 | 本卡怎么条件化 |
| --- | --- | --- |
| DTA / OTB / 总房 | 不能算 Remaining 与 8 间的含义 | Trigger 用占比；补总房 |
| Pickup 3D/7D | 只有存量 | 禁止降 BAR；最多「IF 48h 仍近 0 THEN 开促销」 |
| historical_pace | 60% 不知快慢 | 默认先 Hold；把曲线列为补数 #1 |
| BAR | 无对象 | 不给数字 |
| competitor_rate | 无锚 | 第一刀只开促销或 −5–8%；不发明竞对 |
| 开关状态 | 可能降给关着的门 | **IF 未确认开着 THEN 今天不降，先核开关** |
| Segment | 可能在等一团 | IF 已知有团将进 → 不降 |

---

## 4. Signals For / Against

### For（启用刺激；价动还要另加「价高」）

- [ ] Pace Behind ≤ −5pp（Fact）
- [ ] 3D 与 7D 都慢，不是 1D 噪声
- [ ] Days-to-Sellout > DTA×1.5 且 Remaining 不是「只剩高价房」
- [ ] 库存、主渠道、同步已确认开着
- [ ] BAR > 最低可订竞对 ≥8%
- [ ] 市场并非同样冰点（Comp Forward 不落后，或本店 MPI 会差——若有）

**允许开促销 / 松限制：** For 中 Pace+Velocity+供给 三家至少 2 家。  
**允许动 BAR：** 以上 + 价格位置家族（价高）为 Fact。

### Against（出现则回到 Hold 或只修供给）

- [ ] 曲线后置，历史最后 7 天走大部分
- [ ] 刚涨价 <48h
- [ ] 渠道/房型/限制在挡
- [ ] 市场整体弱
- [ ] 产品/差评/施工事故
- [ ] 价已最低
- [ ] Forecast/Budget 本身不现实（先改预期）

---

## 5. 推荐动作表

```text
Stay Date:            <焦点日>
Room Type:            先动 BAR / 基础售卖房型；高档房差价今天不跟降
Rate Plan:
  优先 A：新增或打开一张围栏产品（预付不可退 / 2 晚连住 / 会员）
  次选 B：BAR 及连动公开价
Current BAR:          <当前>
Recommended:
  A 促销价区间 / 首选：见 2.1
  B BAR 区间 / 首选：见 2.1（仅当价高已证实）
Inventory:            保持可售；不关房「制造稀缺」
Restriction:          淡日 MinLOS>1 或 CTA → 解开这一天
Channel:              打开误关的主渠道。中国 OTA 大促默认拒，除非弱日且净价已知（P18 未写完前：不接会打穿新 BAR 的神券）
Staging:              先 A 后 B。禁止第一天 A+B 同时深折
Do-not-do:
  - 「适当降一点」
  - 为冲 OCC 把 BAR 降到变动成本附近（成本未知则至少不要低于最低竞对−1 阶梯）
  - 只改一个 OTA
```

**工作示例（Simulation，200 间店，不是真实酒店）：**

```text
DTA 14，OTB 60%=120 间，剩 80，3D Pickup=8 间（2.7 间/日），Days-to-Sellout≈30
STLY 同 DTA 72% → Pace −12pp Behind
BAR 899，竞对 799 / 829 / 849（高 8.4–12.5%）
渠道开着，无事件

第一刀首选：BAR 不动 899；打开预付不可退 829（区间 809–849）
备选（若不能上预付）：BAR 899 → 849（区间 829–859），首选 849（对齐中位偏高竞对，−5.6%）
禁止：一夜到 749；BAR 降到 829 还挂 799 促销
```

---

## 6. 风险

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| 其实是后置曲线 | 24h Pickup 自己上来 | ≥阈值高 → 关促销、回到 Hold |
| 降完市场无弹性 | 48h 仍近 0 | 停第二刀；改查产品/曝光，不第三刀 |
| 促销打穿 BAR | 成交价分布 | 公开成交 < 新 BAR−1 阶梯 → 关促销 |
| 竞对跟降，价格战 | 竞对 BAR | 不自动跟到底；回 P16（未写成前：守第一刀下限） |
| 一团明天才进 | Segment | 发现将进团 → 撤回降价 |

---

## 7. What To Watch

最低 5 项：24h 净 Pickup 间夜、24h 取消、竞对 BAR、自身多渠道是否执行、成交是否落到围栏产品而不是 BAR。

---

## 8. Trigger（300 间尺度，缩放同过程文件）

| 事件 | 300 间 | 动作 |
| --- | --- | --- |
| 刺激过了 | 24h Pickup ≥ **8** | 关新促销或把促销收到 BAR−3%；BAR 若已降则不回原价，先守 |
| 持有 | 24h Pickup **3–7** | 守第一刀，不加码降 |
| 仍死 | 48h 累计 < **5** 且供给开 | 第二刀：若尚未动 BAR → −5–8%；若已动 → 停价，改渠道/产品 |
| 假慢 | 用户发现渠道昨天是关的 | 撤回降价路径，开库存 |
| 取消翻倍 | 24h 取消 ≥ **6** 或翻倍 | 停降；查政策与比价 |

「14 天、60%、3 天 8 间」在 **300 间**店：8/3≈2.7 间/日，低于持有带，**还不能降**——先补 STLY 与开关。补齐后若 Behind+价高+已开，才用本卡第一刀（先促销）。200 间店 8 间/3 日同样偏慢；80 间店则可能 Match。见理论卡 §9.3。

---

## 9. Confidence

默认 **Medium**。无 Pace 基准或无开关确认：方向 Low，默认今天不降。幅度永远不得 High。

---

## 10. 边界

| 更像谁 | 去哪 |
| --- | --- |
| 曲线晚、Pace 不落后 | `hold-price-curve-late.md` |
| 价不高压 Pickup 慢 | 本卡「不降」分支；查渠道/产品 |
| DTA≤3 | Last Minute Unsold |
| 竞对连环降 | Price War（先诊断） |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。−5–10%、先促销后 BAR、Trigger 间夜为 Hypothesis。 |
