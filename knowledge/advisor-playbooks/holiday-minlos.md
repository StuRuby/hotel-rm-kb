# Playbook P21｜节假日连住

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/holiday-minlos.md`  
> BACKLOG：P21 节假日连住 · HIGH · 先决策卡  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/minlos-peak-protect.md` · `recommendations/shoulder-open-for-peak.md`  
> 理论：`pricing/los-optimization.md` · `restrictions/restriction-framework.md`  
> 绑定：P06 Holiday（整段日历）；本条只解决 Restriction / 连住工具  
> 指向：P29 黄金周/春节已 drafted  
> 问题树：O8 / O10 · §16  
> 证据等级：B；N=2 Hypothesis；日历 Fact 用 P06  
> Last Verified：2026-08-20

---

## 0. 一句话

高峰日 **MinLOS / CTA / 连住价**：防止单晚掏空、肩日漏卖。  
哪天 =2 / 哪天开单晚 / 什么 Trigger 解开。缺肩日 → Confidence Low，今天不设。

完成定义（BACKLOG）：哪天 MinLOS=2/3、哪天 CTA、解开 Trigger。

---

## 1. 信号（何时进本剧本，而不是只改 BAR）

进入：已在节假日或事件段，**问题是 LOS 结构**（单晚切高峰、肩日空），不是「价还没跟上」单独一项。

| # | 信号 |
| --- | --- |
| R1 | 用户问国庆/节日「要不要限单晚 / 连住几天」 |
| R2 | Peak OTB 明显高于 ±1，单晚仍开 |
| R3 | 价已最高，仍怕被单晚切（只限不涨） |
| R4 | 已设整周 MinLOS，Pickup 死（可能过度 → 先解，走 P33 `restriction-overuse.md`） |

价明显低且卖太快：第一刀是涨+关低价，MinLOS 是**配套**不是替代（限制框架 §4）。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| E1 | 肩日 OTB/Remaining 没有 | **今天不设**；只关 Peak 低价；IF |
| E2 | 只有放假旗标，Peak 未证实 | 不设；按普通 Pace |
| E3 | 3D 快 7D 不快 | 先查一团；不设 |
| E4 | Peak 仍厚、肩日已热 | 不限单晚；只动价/低价 |
| E5 | 淡 / 市场也弱 | **解开**已有 MinLOS，不降价冒充 |
| E6 | DTA≤2 | 慎新设；先关低价 |
| E7 | 整 7 天想同一 N | 禁止；回 P06 按日画 |

---

## 3. 哪几天、N 几（与 MinLOS 卡同一套）

| 日历 | MinLOS | 肩日 | CTA |
| --- | --- | --- | --- |
| 已证实单高峰夜 | **只盖该夜 =2** | −1/+1 **Open** | 一般不用；与 MinLOS 二选一 |
| 连续 2 夜高峰 | 两夜 =2 | 两端 Open | 同上 |
| 连续 ≥3 且肩日也动 | 先 =2，48h 仍过快再评 =3 | 两端不盖 | 勿叠到无解 |
| 国庆 10/1–10/7 | **禁止** 7 天同一 N | 按 P06 形状 | 不默认 |
| 调休上班日 | 不设节日 MinLOS | — | 不当周末 |

2026 国庆日历 Fact 见 P06（政府网已核）。哪天是酒店 Peak = Hypothesis，必须被本店史推翻。

**折扣连住 vs MinLOS：** Peak 用限制；肩日可用围栏 −3–5%。Peak **不再**给连住深折。套均价不得打穿 Peak 新地板（`los-optimization.md`）。

**单晚：** 限 = MinLOS 或高峰 CTA，BAR 对符合 LOS 的人 Open。不要关 BAR。

**MaxLOS：** 只打进入 Peak 前的低价长住，不打 Peak BAR。

---

## 4. 动作表

```text
Peak Stay Dates:      <列出>
MinLOS:               =2（覆盖夜 + 到达日按用户系统，NV-RST-01）
Shoulder:             Open；不 MinLOS / 不 CTA
Package:              可选；均价 ≥ Peak地板与肩日守价的 0.97
Price:                未最高 → 配套第一刀（+8–15% 或收到最低竞对，不跳最高）
                      已最高 → 只限不涨
Inventory:            Peak 关公开 < 新地板；肩日主渠道开
Do-not-do:
  - 整周同一 MinLOS
  - 缺肩日写成今天必做
  - MinLOS + CTA 叠死
  - 「适当设连住」
```

---

## 5. 解开 Trigger（完成定义要求）

| Trigger | 动作 |
| --- | --- |
| 24h 高峰 Pickup < 阈值低（300 间=3）或短住拒单升 | **解开**该日新 MinLOS/CTA；低价不自动重开 |
| 24h 3–7 | 守 =2 |
| 24h ≥8 非一团、肩日开始动 | 守；价按第二刀 |
| 肩日仍 0、高峰将满 | 肩日保持 Open + 包装；**不**延 MinLOS |
| 竞对全开单晚且我们 Pickup 死 | 解开，价守原带 |
| 取消翻倍或 ≥总房 2% | 停加严到 =3 |
| 节中已过 Peak（如国庆 10/6 返程弱） | 解开节假日限制，回到平日/肩日带 |

---

## 6. 如果只能再补 3 个

1. Peak 与 ±1 的 OTB/Remaining — 决定盖哪几天  
2. overnight / 店型（景区 vs 空城商务）  
3. 当前 Restriction + 竞对是否也在限

---

## 7. Confidence / 边界

肩日齐 + Peak 旁证：方向 Medium；N 永远 Hypothesis。缺肩日：Low，只写 IF。  
更像单日演唱会 → P07。会展布撤展 → P22。春节错位 / 春运窗 → P29。限制已把 OCC 假压低 → 先解再谈价。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P21。兼容 MinLOS=2 只盖 Peak。 |
| 2026-08-20 | Scout：P29 已 drafted。 |
| 2026-08-20 17:00 CST | R4 指向 P33 drafted。 |

## 9. 交叉（2026-08-23 14:17，不改节日表）

本剧 = **节假日日历**哪天 MinLOS。每个压缩周六「只订高峰单晚 / 砍高峰迁就均价」→ **P40** `stay-pattern.md`。不是每个周六都走本剧。

节日日历仍走本剧。每个压缩周六的 Sat-only / 砍高峰 → P40。网络估值 → T08 `metrics/stay-network-value.md`（16:17）。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。

> 交叉指针（2026-09-03 10:17 C03-10，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-restriction-maxlos-ctd-sat.md`。Diagnose 走 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699；§125。不开 P88。不开 P89。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS Restrictions + Closed to Arrival/Departure Restrictions（**可售限制/CTA·CTD 闸 ≠ 公开灵活 BAR rewrite**）。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
