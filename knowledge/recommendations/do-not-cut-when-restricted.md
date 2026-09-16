# Decision Card: Do Not Cut When Restricted（限制开着先别降价）

> 资产：Advisor Decision Card  
> 路径：`recommendations/do-not-cut-when-restricted.md`  
> 对应：问题树 §1 问 7 / §1.A.3；O8 Restriction  
> 剧本：`advisor-playbooks/restriction-overuse.md`（P33）  
> 理论：`forecasting/unconstrained-vs-constrained.md` · `restrictions/restriction-framework.md`  
> 不要与 `decrease-bar-true-weak-demand.md` 混用（那张卡要求供给/限制已开）  
> 不要与 `do-not-cut-price-market-also-weak.md` 混用（那张卡是市场冰点）  
> 配套：`open-inventory-false-low-occ.md`（库存误关）；`minlos-peak-protect.md` / `shoulder-open-for-peak.md`  
> 状态：active · Scout 2026-08-20 17:00  
> 知识类型：Best Practice / Vendor Methodology（限制先扣需求） / Hypothesis  
> 证据等级：B；机制 A Vendor（Duetto）  
> Last Verified：2026-08-20 17:00 CST

```yaml
decision: Relax over-tight MinLOS/CTA/MaxLOS first; do not cut BAR
scenario: Restrictions are on, OCC or Pickup looks weak, someone wants to decrease BAR
required_inputs:
  - Stay Date + DTA + OTB / Pickup
  - restriction_status（MinLOS / CTA / MaxLOS 按日）
  - peak_vs_shoulder（至少定性）
  - channel_restriction_sync（直销 vs 主 OTA）
  - current_BAR vs 可订竞对
signals_for:
  - minlos_or_cta_on_non_peak_or_unconfirmed_peak
  - peak_minlos_spills_onto_shoulder
  - short_stay_inquiries_or_cannot_book_1_night
  - channel_restriction_mismatch
  - price_not_the_first_problem
signals_against:
  - restrictions_already_open_or_only_on_confirmed_peak
  - confirmed_peak_being_hollowed_by_single_nights
  - inventory_closed_unrelated_to_stay_controls
  - true_weak_demand_after_restrictions_relaxed
recommended_action: 先解开过度限制（非 Peak / 误伤肩日 / 同步错）；BAR 不动。禁止一夜 −15%。已证实 Peak 的 MinLOS=2 不按本卡拆掉
risk: 把真 Peak 的 MinLOS 拆掉被单晚掏空；解开后露出破价层；限制其实已开却误用本卡延误真弱刺激
follow_up: 解开后 24/48h 净 Pickup、短住是否开始进、渠道是否一致
confidence: 限制开着且短住被挡时方向 Medium–High；Peak/肩日分不清则 Low，只解点名淡日
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

用户原话常是「MinLOS 开着但入住率掉了，要不要降价」。同时接近：

- 现行 **MinLOS / CTA / MaxLOS** 至少一项开着（含渠道层不一致）。  
- OCC、OTB 或 Pickup **看起来**差。  
- 有人要把 BAR 往下推，或 RMS 建议降。  
- 尚未证明：限制已 Open、市场冰点、价明显高于全部可订竞对且供给完全开着。

**不要用：**

- 限制已经是 Open / 典型 LOS=1，供给也开 → 回 P02，可能 decrease 或 do-not-cut（市场弱）。  
- 已证实 Peak、肩日齐、单晚会掏空 → `minlos-peak-protect.md`，守 MinLOS=2。  
- 只是房型/配额误关、停留限制并没开 → `open-inventory-false-low-occ.md`。

---

## 2. 为什么不降（机制，不是口号）

```
Constrained 第一步会按 CTA / MinLOS / MaxLOS 扣掉无法实现的需求（Duetto 方法，A Vendor）
你看见的 Pickup 慢，可能是「门关着」不是「没人要」
先降 BAR = 给过得了门的人更低的价，门还是关着
缺口若来自限制截断，正确杠杆是限制，不是价
```

满房日 Sold=100 ≠ Demand=100（反向同一句话）：OCC 低也 ≠ Demand 低。

---

## 3. Signals For / Against

**For（先解限制、BAR 不动）：** 非 Peak 或 Peak 未证实仍限单晚；Peak MinLOS 盖到肩日；短住订不了；直销/OTA 限制不一致；价并不显著高于可订竞对。

**Against（离开本卡）：** 限制已开；真 Peak 被单晚切（去 P21）；库存关的是房不是到达（去 open-inventory）；解开 48h 后仍 Behind+价高+市场不冰（才允许围栏 −3–5%）。

---

## 4. 推荐动作

```text
Stay Date:            <焦点日，按日>
Restriction:
  非 Peak / 未证实 Peak:  MinLOS → 1 或解开；CTA 取消
  肩日被 Peak 误伤:      肩日 Open；Peak 若已证实可守 MinLOS=2
  渠道不一致:            对齐直销与主 OTA；禁止只改一个渠道
  MaxLOS:                不要挡肩日合理长住；低价跨高峰仍可短 MaxLOS
Price:                BAR 不动
                      禁止一夜 −15%；禁止先上深折围栏
Inventory:            主 BAR 层保持可订；不把「解开」当成打开残价
Do-not-do:
  - 「适当降一点看看」
  - 限制还开着就跟最低竞对
  - 整周同一 MinLOS 继续留着
  - 拆掉已证实 Peak 的 MinLOS=2
  - 价已最高还涨（本卡是解，不是加）
```

与已有启发式兼容：MinLOS=2 只盖已证实 Peak；肩日 Open；围栏 −3–5% 只在**限制已不再挡门**之后才进入；不一夜 −15%。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 解开后 24h Pickup ≥8（300 间尺）或短住开始进 | 修复成立；不降 BAR |
| 解开后 24h 3–7 | 再守 24h |
| 解开后 48h 累计 <5 且限制已开且价高且市场非冰点 | 离开本卡，评 decrease 档 E（围栏 −3–5%） |
| Peak 被误解、单晚掏空 | 撤回，走 minlos-peak-protect |
| 主渠道仍不同步 | 只修同步，仍不降 |
| 市场补齐后是冰点 | 开完限制后走 do-not-cut，仍不砸 BAR |

---

## 6. 如果只能再补 3 个

1. 按日 Restriction 清单 + 渠道是否一致。  
2. Peak vs ±1 肩日 OTB。  
3. 短住是否根本订不了（截图或历史 ALOS）。

---

## 7. Confidence / 边界

限制开着且短住进不来：方向可偏 **High**（动作可逆）。  
Peak/肩日未知：**Low**，只解用户确认的淡日。  
解开后的真需求：不在本卡给降幅。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 17:00 CST | 首版。P33 决策卡。先松限制，不要先降 BAR。 |

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。
