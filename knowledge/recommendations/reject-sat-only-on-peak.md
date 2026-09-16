# Decision Card: Reject Saturday-only on Peak（高峰拒单晚 / 不砍高峰买肩日）

> 资产：Advisor Decision Card  
> 路径：`recommendations/reject-sat-only-on-peak.md`  
> 对应：问题树 O10 · 「只订高峰单晚」短枝  
> 剧本：`advisor-playbooks/stay-pattern.md`（P40）  
> 理论：`pricing/los-optimization.md` · `restrictions/restriction-framework.md`  
> 交叉：P11 周末市场 · P21 节日日历 · P33 淡日过度限制 · T19 贡献 · T20 品牌底 · `minlos-peak-protect.md`（事件/节日卡，不替代本卡）  
> 状态：active · Scout 2026-08-23 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；eCornell / HSMAI 方向 A；Vendor 机制不进幅度  
> Last Verified：2026-08-23  
> 禁止：无肩日把 MinLOS 写成今天 Fact；砍高峰 BAR 迁就连住均价；编中国 OTA 均价公式；一夜 −15%；Duetto 5–7%/7–10% 当必须折。

```yaml
decision: Reject one-night peak if shoulders still have sellable demand; never cut peak BAR to cheapen a multi-night average
scenario: 只订周六接不接？连住均价被周六拉高要不要砍周末？
required_inputs:
  - peak_date + shoulder_dates (Fri/Sat/Sun)
  - OTB / Pickup by day
  - public BAR by day
  - requested pattern (Sat-only vs package vs cut-peak)
  - current MinLOS / CTA / MaxLOS
signals_for:
  - confirmed_weekend_or_peak_compression
  - shoulders_still_have_demand
  - sat_only_still_open
  - sales_wants_to_cut_sat_to_average_down_package
signals_against:
  - shoulders_already_ice
  - peak_not_confirmed
  - dead_weekday_restriction_overuse (go P33)
  - group_sat_only (go P10)
recommended_action: 肩日有需求 → MinLOS=2 或 CTA 高峰（二选一），Hold 高峰 BAR。肩日冰 → 接 Sat-only。拒绝把高峰砍到 699 卖套。
risk: 独限被掏空；CTA 挡掉「周六到住两晚」；缺肩日误限；把高峰贡献拆进便宜均价
follow_up: 24/48h 高峰与肩日 Pickup、短住拒单、是否有人把高峰改成 699
confidence: 肩日齐则方向 Medium；缺肩日 Low，只写 IF
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「客人只订周六，周五周日空着，接不接」「连住均价被周六拉高，周末砍一刀吧」。

主动词：**Reject Sat-only / Accept Sat-only（仅肩日冰）/ Hold 高峰 BAR / 拒砍高峰卖套**。  
不要用：只有一句「周末要不要连住」无日期——仍条件化，不要说无法判断。

公开 BAR 的涨/降幅度仍走 `how-much-to-move.md`。本卡只回答 **别为单晚先接、别为均价先砍高峰**。  
周末价差带走 P11；节日哪天 MinLOS 走 P21 / `minlos-peak-protect.md`。

---

## 2. 硬门（先不接单晚 / 先不砍高峰）

命中任一 → **不要把高峰单晚当增量，也不要把高峰 BAR dump 去「好卖套」**：

1. 已证实压缩/Peak **且** 肩日仍有可售需求 → **拒 Sat-only**（MinLOS=2 或 CTA）  
2. 有人要把高峰夜改成肩日价 / 699 来拉低连住均价 → **拒绝**  
3. DTA≤3 想一夜高峰 BAR −15% → **拒绝**  
4. 净价会穿贡献，或成本 Unknown 却要配已知深折高峰 → **T19 关该层**  
5. 有用户声明的品牌底、拟议价穿底 → **T20 不砸穿**  
6. Peak 未证实 / 肩日未知 → **今天不设 MinLOS**，只写 IF；仍不砍高峰

肩日已经冰 → **可以接** Sat-only，这是开门条件，不是砍价条件。  
淡日还挂 MinLOS → 不是本卡，走 P33。

---

## 3. 何时可以接单晚 / 动价

**接 Sat-only：** 须肩日冰（OTB 空、Pickup 死、市场也弱、询单无）或 Peak 未证实。接的是现行高峰 BAR，不是 699。

**动价（仍不是砍高峰买肩日）：** Ahead+Fast 且价未最高 → 可评 P09 第一刀 +5–8% 或不跳最高；本卡第一刀仍是限制。  
真弱且价出局且肩日冰 → 围栏走 P02/P12，**禁止**一夜 −15%，**禁止**为均价砍高峰。

**套/包装：** 高峰夜保持地板；肩日最多 −3–5%。套均价 ≥ (Peak 首选 + 肩日守价) 加权 ×0.97（与 `los-optimization.md` 同一句）。不要为了 OTA 展示均价去改高峰夜（中国公式 **NV**）。

---

## 4. 动作表

```text
Stay Date / DTA:      高峰 + ±1
Shoulder demand:      有 | 冰 | 未知
Decision:             Reject Sat-only | Accept Sat-only | Hold Peak BAR | 拒绝砍高峰卖套
Restriction:          形 A → MinLOS=2 或 CTA（二选一，双口径 NV-RST-01）
                      形 B → Open 单晚
Public BAR Peak:      区间 + 首选（Hypothesis 779–799 首选 799）
Package:              Peak 夜不砍；肩日最多 −3–5%
Do-not-do:            先接再砍周末；BAR→699；一夜 −15%；编均价公式；叠死 MinLOS+CTA
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 14:17 CST | 首版。P40。拒高峰单晚（肩日有需求）；拒砍高峰迁就均价。 |

## 6. 理论指针（2026-08-23 16:17，不改 §1–5）

拒 Sat-only 的原因是瓶颈夜，不是「连住均价更好看」。尺：`metrics/stay-network-value.md`。不新开 `dont-cut-peak-to-buy-shoulder.md`（拒砍高峰已在本卡）。

---

## 7. 交叉（2026-08-23 20:17，不改 Sat-only 闸）

P41 占的是窗口里**每一个**周六，与本卡拒**一个** Sat-only 同一瓶颈：周末还卖 → 不把高峰让给便宜占用。工具不同（MinLOS/CTA vs 黑窗/少间/合同夜价带）。P41 **560–650** ≠ 本卡公开 Hold 779–799。
