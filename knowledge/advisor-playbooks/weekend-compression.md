# Playbook P11｜Weekend Compression

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/weekend-compression.md`  
> BACKLOG：P11 Weekend Compression · MEDIUM · 先决策卡  
> 状态：**drafted**（2026-08-20）  
> 配套：`citywide-compression.md` `minlos-peak-protect.md` `event-pricing-first-cut.md` `high-demand-day.md`  
> 问题树：§16 · §7 · §14  
> 证据等级：B；价差带 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

周五六（及景区周日）城市或度假压缩，**工作日逻辑不适用**。完成定义：周末价差带 + 何时对周五设 CTA/MinLOS。

---

## 1. 信号

| # | 信号 |
| --- | --- |
| E1 | DOW：周五到达 / 周六 / 景区周日 |
| E2 | 按日 Pace/Pickup vs **周末曲线**（不要用周二曲线） |
| E3 | 周末 BAR vs 周中 BAR 历史差 |
| E4 | Primary 周末价、是否满 |
| E5 | 客群是否休闲主导 |

进入：该 DOW 是休闲高峰 **且**（Pace Ahead 或 Pickup Fast 或 ≥1 家周末满）。禁止「有周末」单独暴涨。

---

## 2. 先排除

| # | 排除 | 成立 |
| --- | --- | --- |
| X1 | 商务城市「假周末」（无休闲、无事件） | 按 Weak Weekday/普通 Pace |
| X2 | 调休上班的周六（P06 日历） | 按上班日 |
| X3 | 一团占周末 | 拆 Transient |
| X4 | 价已最高 | 只关不涨 |
| X5 | 只有周日、周五六弱 | 不要整段 MinLOS |

---

## 3. 周末价差带（Hypothesis）

相对 **同周周中 BAR**（或同店周中中位）：

| 强度 | 周末第一刀 | 周五限制 |
| --- | --- | --- |
| 弱：Pace On、竞对未满 | 周末 = 周中 **+5–8%** 或对齐周末最低竞对 | 不设 CTA/MinLOS |
| 中：Ahead 或 1 家满 | **+8–15%** 重叠带 | 周五 CTA **仅当** 周六已证实 Peak 且周五肩日空、要挡「只订五不订六」——缺肩日数据今天不设 |
| 强：≥2 家满或城市周末压缩 | 走 citywide 卡 | Peak=周六则 MinLOS=2 盖 **周五+周六** 或 **周六+周日** 中已证实的一段，不整周 |

景区：**周日可能是 Peak**，周五是肩。MinLOS=2 只盖已证实 Peak。

肩日（周日在城市店常是弱）：Open，可用连住包装，不暴涨、不跟周中一起砸。

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 周五 Pickup 停、周六仍快 | 解周五 CTA，守周六价 |
| 24h 周末日 <3 | 回周末带下限 |
| 竞对周末集体降且本店 Pace 不差 | **不跟**（P16） |

---

## 5. 如果只能再补 3 个

1. 按日 OTB（五/六/日）。  
2. 周末 vs 周中历史 BAR。  
3. 客群休闲占比或竞对周末满房。

---

## 6. 兼容

+8–15%；不跳最高；MinLOS=2 只盖 Peak；价已最高只关不涨；Sellout 先关低价。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。周末带 + 周五限制条件。 |

## 8. 交叉（2026-08-23 14:17，不改价差带）

周末压缩是**市场形状**。只订周六接不接、连住均价贵了砍不砍周末 → **P40** `stay-pattern.md` · `reject-sat-only-on-peak.md`。本剧不重写 stay-pattern 闸。

P11 = 市场形状。P40 = 接不接单晚的杠杆。**估值**（同一间周六房，Sat-only vs Fri–Sun）走 T08 `metrics/stay-network-value.md`，不是本剧价差带。
