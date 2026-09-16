# Decision Card: Stop Cut if RevPAR Falls｜降价后 OCC↑ 但 RevPAR↓ → 停砍

> 资产：Advisor Decision Card  
> 路径：`recommendations/stop-cut-if-revpar-falls.md`  
> 对应：`pricing/price-elasticity-advise.md` 模式 B；`metrics/metric-tree.md` §2 因果表行「OCC↑ ADR↓ RevPAR↓」；问题树 §30  
> 配套幅度：`pricing/how-much-to-move.md`（不改幅度数字；本卡否决「再进 F 第二刀」）  
> 状态：active · 2026-08-21 16:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（过程互证）；方向与 Cornell/STR 公开「降价未必抬收入」一致（A 摘要，非点 η）  
> Last Verified：2026-08-21

```yaml
decision: Stop further BAR cuts（上一刀抬了 OCC 但掉了 RevPAR 或 Net）
scenario: After a rate cut or deep fence on a Stay Date, OCC rose but RevPAR (or Net Revenue / Net ADR) fell
required_inputs:
  - Stay_Date
  - DTA
  - pre_cut_OCC_ADR_RevPAR（或 OTB 快照）
  - post_cut_OCC_ADR_RevPAR（24–72h Pickup 或实际）
  - what_was_cut（BAR vs 围栏；幅度）
  - inventory_channel_open
  - Net_if_available（佣金/渠道）
signals_for:
  - OCC_up_ADR_down_RevPAR_down
  - Net_down_even_if_Gross_flat
  - cut_was_on_BAR_or_deep_fence
  - supply_was_already_open
signals_against:
  - DTA_le_1_true_dump_night（可走短窗战术，仍禁止永久砸 BAR）
  - inventory_was_closed_or_restricted（P33：先开/松，不归因弹性）
  - channel_offline_or_unsynced
  - RevPAR_actually_up（模式 A：守，不进本卡）
  - market_also_collapsed_after_cut（另挂 do-not-cut / Price War）
recommended_action: 对该 Stay Date 停止继续降 BAR；关或收回过深围栏；可试反向小抬/收回促销配额；观察 24–48h Pickup
risk: 把供给故障误判成「砍太深」；DTA≤1 真清仓夜过早停战术产品
follow_up: 该 Stay Date 的 RevPAR 与 Net；Pickup；竞对是否跟砸；下一弱日是否改用更浅围栏
confidence: Low–Medium（无本店历史时方向 Medium、幅度 Low）
evidence_level: B
last_verified: 2026-08-21
```

---

## 1. 何时用这张卡

用户原话常是：「降了入住上来了，但 RevPAR / 收入掉了，还要不要再降一点？」

同时接近：

- 已对某 **Stay Date** 做过围栏或 BAR 下调。
- 事后：OCC↑、ADR↓、**RevPAR↓**（或 Gross 平但 **Net↓**）。
- 供给在砍价时已开着（不是砍完才发现渠道关着）。

**不要用：**

| Against | 去哪 |
| --- | --- |
| RevPAR 其实升了（模式 A） | 守；弹性卡 §3 A |
| 库存关 / MinLOS·CTA 挡人 / 渠道离线 | **P33** · `do-not-cut-when-restricted.md` · 开库存卡；先修供给 |
| DTA≤1 且近 Pickup≈0 的真清仓夜 | how-much-to-move 档 H：有截止日期的战术产品；**仍禁止**把 BAR 永久砸穿；本卡不禁止「有截止的当晚产品」，禁止「再砍一刀永久 BAR」 |
| 尚未排除口径假（OOO 分母） | 先修数 |

---

## 2. 为什么停（机制）

```
降价 → ADR 掉
若间夜增量不够大 → OCC↑ 不足以抵 ADR↓ → RevPAR↓
再砍一刀 → ADR 再掉，增量更可能边际递减 → 更深的 RevPAR 坑
Gross 赢 + 高佣金深折 → Net 可能更差
```

这不是「测出 η」；这是 **乘积已经告诉你量没赚回价**。Evidence：B + 会计恒等 S。

---

## 3. 推荐动作（必须落到 Stay Date）

输出合同：

```
Stay Date:              # 只动诊断为模式 B 的日期
What to stop:           # 停止继续降 BAR；停止叠加更深促销
What to reverse:        # 收回过深围栏配额 / 关闭该日深折 Rate Plan；可选小幅收回价
What NOT to do:         # 不一夜再 −15%；不跟竞对自杀循环；不把成功日期一起砸
Watch (24–48h):         # Pickup 间夜、RevPAR 方向、Net、取消
```

具体优先序：

1. **停**：该 Stay Date 不再降 BAR；不进入 how-much-to-move 档 F「第二刀砸价」。  
2. **收**：若上一刀是深围栏/OTA 深折 → 关配额或收到 BAR−3% 以内（与 stimulate 卡「刺激够了收回」同向，Hypothesis）。  
3. **可选反向**：若价已明显低于全部可订竞对且模式 B → 小幅收回（不要求一次回到原价）；幅度仍 Hypothesis，给区间不给伪精确点。  
4. **旁路**：若同时发现限制/渠道问题 → 先修，本卡动作可暂停。

兼容硬规则：围栏 −3–5% / BAR −5–10% / 禁止一夜 −15% / 价已最高只关不涨 — **本卡不改这些数字**，只否决「RevPAR 已掉还继续砍」。

---

## 4. Confidence

| 条件 | Confidence |
| --- | --- |
| 有砍前/砍后同口径 RevPAR，供给已开 | 方向 **Medium** |
| 只有 OCC「感觉」升、无数 | **Low**；先要数 |
| 无 Net、渠道以 OTA 深折为主 | 方向仍可 Medium，但必须写「Net Unknown」 |
| 无本店历史类似刀 | 幅度建议 **Low**；不报「收回 X%」假装最优 |

---

## 5. 关联

- 诊断：`pricing/price-elasticity-advise.md`  
- 幅度：`pricing/how-much-to-move.md` §4–6  
- 弱市不降：`do-not-cut-price-market-also-weak.md`（市场冰时根本不该砍）  
- 限制假空：`do-not-cut-when-restricted.md`  
- 指标：`metrics/revpar.md` · `metrics/net-adr.md`

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 16:17 | 首版。模式 B → 停砍。Against：DTA≤1 / P33 / 渠道关。 |
| 2026-08-21 20:17 | 复盘指针：与 P02 第一刀序列兼容（先围栏/浅砍，乘积变差再停）。无 needs_revision。 |

---

## 7. 交叉（2026-08-22 08:17，不改停砍规则）

OCC↑ RevPAR↓ → 本卡停砍。更差的一层：OCC↑ **GOP↓** / Flow Through 负 → `theory/profit-contribution.md` · `recommendations/do-not-sell-below-contribution.md`。不是再进档 F。变动成本仍 NV。
