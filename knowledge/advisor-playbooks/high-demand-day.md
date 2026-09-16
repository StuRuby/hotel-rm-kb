# Playbook P01｜High Demand Day

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/high-demand-day.md`  
> BACKLOG：P01 High Demand Day · HIGH · 同开  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/increase-bar-pace-ahead.md` `protect-inventory-fast-pickup.md` `event-pricing-first-cut.md`  
> 幅度：`pricing/how-much-to-move.md`  
> 问题树：§5 Pickup Too Fast · §7 Pace Ahead · §8 Early Sellout · §14 Price Too Low · §16 Event  
> 理论：`forecasting/forecast-framework.md` · `pricing/pricing-framework.md` · `theory/otb-pickup-pace.md`  
> 过程：`decision-framework/advisor-process.md`  
> 证据等级：B；幅度 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

当天需求强（事件 / 周末 / Pace Ahead / 快 Pickup），目标是 **ADR 和结构**，不是再冲 OCC。禁止用「有活动」单独定义 High Demand。

完成定义（BACKLOG）：能输出该日 BAR 区间+首选、关哪些 Rate Plan、是否 MinLOS，并标清什么情况下其实不是 High Demand。

---

## 1. 信号（怎样算 High Demand）

中窗口 DTA 3–30，下列 **任 2 条来自不同家族** 成立 → 进入本剧本。只有事件旗标 → **不是** High Demand。

| # | 家族 | 信号（Hypothesis） | 300 间例子 |
| --- | --- | --- | --- |
| H1 | Pace | Ahead ≥ +8pp vs 同 DTA | 68% vs LY 55% |
| H2 | Velocity | Days-to-Sellout < DTA，或 3D ≥ max(总房×3%, 8) | 剩 96、日均 12 → 8<14 |
| H3 | Forecast | Constrained 将撞容量，或 Unconstrained ≫ Cap（满房史+Denied） | 见 forecast-framework |
| H4 | External | 事件日期匹配 **且** overnight 合理；或 ≥2 家竞对满 | 不能单用「当地有演唱会」 |
| H5 | Price | BAR 低于最低竞对 ≥8%，或低价产品仍开着 | 899 vs 999 |
| H6 | Structure | 某基础房 Days-to-Sellout ≤3 | 分房型 |

**不是 High Demand（退出）：**

- 只有 Budget 高、Pace 并不领先。  
- Pickup 快但是一团 / 重导。  
- OTB 高但 7D 已停、无事件（早已订完）。  
- DTA>45 全是合约早订，散客窗未开始。  
- 价已最高 + 低价已关 + Remaining 仍厚 → 可只盯。

---

## 2. 先排除

| # | 排除 | 成立时 | 树 |
| --- | --- | --- | --- |
| X1 | 一次性 Group / 船员 | 停散客加码；Group Evaluation | §5.1 |
| X2 | 系统重导 | 修数 | §5.2 |
| X3 | 净 Pickup 不快 | 看净额 | §5.3 |
| X4 | 事件无 overnight | 按普通 Ahead，幅度不吃事件 | §16.1 |
| X5 | 低价预售堆的假 Ahead | 先关低价 | §7.1 |
| X6 | 3D 快、7D 不快 | 24h 只关破价，不设 MinLOS | P09 |

过完仍是 Transient 热 + Remaining 在薄 → §3。

---

## 3. 诊断落格

| 主机制 | 信号 | 第一工具 |
| --- | --- | --- |
| Underpricing | Ahead+Fast+价低 | 关低价 + Increase BAR 第一刀（档 B/C） |
| 价已最高 | BAR ≥ 全部竞对 | **只关 / 限，不涨** |
| 事件 overnight | 场馆+距离+旁证 | `event-pricing-first-cut.md` |
| 房型压缩 | 仅基础快 | 动该型 |
| Forecast 将满 | Unconstrained 高 | 保护库存；价按位置选涨或不涨 |
| 假 High | X1–X6 | 退出 |

---

## 4. 动作表（必须有区间+首选）

### 4.1 价格

走 `how-much-to-move.md`：

| 价位置 | 第一刀 | 首选规则 |
| --- | --- | --- |
| 低 ≥15% 或 ≥150 元 | 收到最低竞对附近 | 对齐最低点 |
| 低 8–15% | +8–15% 与最低～中位重叠 | 中偏低 |
| 在带内仍 Fast | +5–8% | 对齐近点 |
| 已最高 | **不涨** | — |

禁止第一刀跳过最高可比竞对。第二刀需 24h Pickup≥8 且非一团。

### 4.2 关哪些 Rate Plan

```
新地板 = 第一刀下限（不涨则为当前 BAR）
关闭一切公开可订 < 新地板 的：今夜特价 / 限时抢 / 连住破价 / 批发外泄
会员价：有品牌义务则按义务跟，未知则标 IF，不编 %
AP：高峰/事件日默认关；弱肩日可留
```

### 4.3 是否 MinLOS

```
IF 周末或已证实 overnight
   AND 肩日 OTB 明显低于高峰
   AND 当前无 MinLOS
THEN 评高峰 MinLOS=2（只盖高峰夜）
ELSE 今天不设。缺肩日 → Confidence Low，写进 IF
解开：24h Pickup < 阈值低 或 取消翻倍
```

### 4.4 库存

不关 BAR。基础房可把低价渠道配额收到剩余 30–50%（Hypothesis，同 Protect 卡）。高档保持可售除非也在穿。

---

## 5. 观察与 Trigger

与 P09 / Increase BAR 同一 300 间尺：24h <3 过激；3–7 守；≥8 加码。  
事件取消新闻 → 立刻回到平日带。  
质量翻转（单笔 ≥总房 13%）→ 停加码。

---

## 6. 如果只能再补 3 个

1. Segment / 是否大单 — 翻转 Fast Transient。  
2. 分房型剩余+价 — 改工具。  
3. 事件日期/距离/overnight 或竞对是否满 — 翻转事件加码。

---

## 7. Confidence / 边界

默认 Medium。幅度 Hypothesis。  
更像只是速度快 → P09。已几乎满 → P03/P04。只要涨多少 → Increase BAR 卡。团询 → P10。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P01。事件旁证强制。 |

## 9. 一行（2026-08-26 18:17，不改上文）

公开 Ahead 时有人要 dump BAR「消化切房」→ **P58** `channel-allotment-unsold.md`：还/缩未卖切房，公开仍本剧 Hold / 涨 BAR 路径，不因合同桶砍价。

## 10. 一行（2026-08-27 14:17，不改上文）

Ahead / 高需求但保洁或前台翻不过来 → **P63** `staff-capacity-constraint.md`：先收口可售或停售超额到达，**Hold 或提高门槛**，不要为了「少卖点」dump BAR。维修离线仍 P37。

## 11. 一行（2026-08-27 18:17，不改上文）

Ahead 但嵌套/促销低档仍开、或涨了 BAR 低档还挂 → **P64** `nested-rate-class.md`：先关/限低档再谈涨；关低≠涨BAR。错映射仍 P60。

## 12. 一行（2026-08-27 22:17，不改上文）

Ahead 但客人取消后又要按旧低价 Reinstate → **P65** `cancel-reinstate-old-rate.md`：拒旧价，给当前 BAR；不要为安抚 dump 到 399。公开仍本剧 Hold / 涨 BAR 路径。
> 交叉指针（2026-08-29 02:17，不改正文）：Ahead 但有人要按姐妹店 399 接 / 区域统最低 → **P72** `sister-cluster-overflow.md`：Hold 本店 BAR，不要 dump。公开仍本剧 Hold / 涨 BAR 路径。不写 P73。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。

> 交叉指针（2026-08-30 06:17，不改正文）：Ahead Hold 仍本剧；Resort Fee/强制服务费/含税总价改尺 → **P79**。交叉 P79 resort-fee/all-in ≠ Ahead 涨价。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-30 10:17，不改正文）：Ahead Hold 仍本剧；员工价/付费员工折扣改尺 → **P80**。交叉 P80 staff-rate ≠ Ahead 涨价。不写 P81。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。

> 交叉指针（2026-09-01 08:17，不改正文）：Ahead Hold 仍本剧；员工价 Diagnose 走 **T-Employee**，过程仍 **P80**。不规定 P88。
> 交叉指针（2026-09-01 16:17，不改正文）：Ahead Hold 仍本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。不规定 P88。

> 交叉指针（2026-09-02 08:17，不改正文）：Ahead Hold 仍本剧；税展示/CITY_TAX Diagnose 走 **T-Tax**，过程仍 **P79**。不规定 P88。

> 交叉指针（2026-09-03 16:17 T03-16，不改正文）：Ahead Hold 仍本剧；门市/Rack/牌价改尺 Diagnose 走 **T-Rack** `theory/rack-vs-bar.md`，过程仍 **P01** + **P64**（+ **T-Floor**）。不规定 P88。
> 交叉指针（2026-09-03 18:17 C03-18，不改正文）：callable Simulation `cases/sim-2026-rack-vs-bar-sat.md`。Diagnose 走 **T-Rack**；过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699；§129。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-16 08:17 T16-08，不改正文三句 / 399 / 799）：Linked/Party · Copy Reservation deepen **theory-skip**；§175 复核 only。连单/Party / 克隆作业 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-0817-theory-skip-linked-copy.md`。

> 指针（2026-09-16 10:17 C16-10，不改正文三句 / 399 / 799）：Linked/Party · Copy Reservation · Rate Season · Preferences/VIP misread Simulation `cases/sim-2026-linked-party-copy-misread-sat.md`；§176 CASE 指针复述 §175。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-08 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-16 12:17 R16-12，不改正文三句 / 399 / 799）：Linked/Party · Copy · Season · VIP 互补源 §177 — Protel Copy reservation（克隆不复制 Linked profiles）+ Apaleo Training Kit Copy/Amend（Search rates）+ Cloudbeds Guest Statuses（VIP=internal label）新开。克隆作业 / 改期复核 / VIP 标签 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-08 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-16-1217-sources-recap.md` · `sources/source-map.md` §177。
