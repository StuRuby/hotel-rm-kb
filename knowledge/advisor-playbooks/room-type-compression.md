# Playbook P13｜房型压缩

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/room-type-compression.md`  
> BACKLOG：P13 Room Type Compression · MEDIUM · 先决策卡 · slug `room-type-compression`  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/protect-compressing-room-type.md` · `protect-inventory-fast-pickup.md` · `fix-room-type-inversion.md`  
> 理论：`inventory/inventory-control.md` §1.7 · `pricing/room-type-differential.md` §3.4  
> 交叉：P09 Fast Pickup · P34 倒挂 · P03 Sellout  
> 问题树：§11 Room Type Imbalance  
> 证据等级：B；三选一信号 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

某房型先卖穿，其余房型 **价差 / 付费升级 / 关型**。  
基础房卖穿时三选一：**涨基础、关基础留高档、抬高档逼升级** — 看信号，不免费把高档填满。

完成定义（BACKLOG）：三选一的信号。

---

## 1. 信号（怎样算房型压缩，不是全店满）

进入：总 OCC 尚可或未满，**某一型** Days-to-Sellout ≤3（或该型 Remaining / 日均 Pickup < 3 日），其他型仍厚。

| # | 信号 |
| --- | --- |
| T1 | Base（或主售型）将穿，Deluxe/Suite 剩余厚 |
| T2 | 前台已在免费升级 / 补很少钱就上 |
| T3 | 低档关死后，全店最低可订价跳到高档，竞对比起来「突然贵」 |
| T4 | Shared inventory：两个卖价扣同一物理池（先问） |

**不是本剧本：** 全型都快 → P09/P03 全店关低价+BAR 第一刀。只有价梯倒挂、库存不紧 → P34。未知房型 → 只动 BAR/Base（与 Protect 卡一致）。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| E1 | OOO / 维修集中在「空」的那型 | 先修供给口径 |
| E2 | 渠道映射把高档卖成 Base 价 | 先修映射（P34） |
| E3 | 升级预留造成高档「空」 | 不是真剩余 |
| E4 | 3D 快 7D 不快 | 先查一团；不关型 |
| E5 | Shared：关「标准」等于关「大床」 | 按物理池动，不按产品名 |
| E6 | 价已最高且只剩高档 | 只关 Base 低入口，不涨；不降高档冲 OCC |

---

## 3. 三选一（禁止「适当拉开差价」）

| 选 | 信号（须接近） | 动作 | 不做什么 |
| --- | --- | --- | --- |
| **A 涨/关基础** | Base 将穿 + Base 价未最高 + 高档厚 | Base 关公开 < 新地板；Base BAR 档 A/B（+5–8% / +8–15% 或收到该型最低竞对）；高档 **不降** | 降高档「平衡 OCC」 |
| **B 关基础留高档** | Base 价已最高，或 Base 剩余 ≤2–3 且高档 Open | Base 低入口 Close；高档保持 Open；可开**付费**升级 | 关 BAR 本身；免费升 |
| **C 抬高档逼升级** | 差过小（<5% 或 <30 元，且常免费升）+ Base 将穿 | 高档抬到差价带（Superior +8–15% / Deluxe +15–25%，Hypothesis，见房型差卡 §2）；Base 按 A 或只关 | 降高档去填；只改一个渠道 |

**重叠：** A 与 C 常一起做（基础涨 + 差拉开）。B 是「价已最高只关不涨」在房型层的落地。

付费升级（与房型差卡 §4 同一尺）：压缩日升级价 **不低于公开差的 70%**。弱日才收到 40–60%（C 讨论锚，高峰不用）。

全型都快：套房涨幅 **不超过** Base 第一刀百分比。一天不跳最高竞对。

---

## 4. 动作表

```text
Stay Date:
梯子剩余:     Base __ / Sup __ / Dlxe __ / Suite __
Days-to-Sellout 分型:
病:           压缩 / 兼倒挂（先修倒挂）/ 无
Decision:     A 涨关基础 / B 只关基础 / C 抬高档  （可 A+C）
Upgrade:      付费；压缩日 ≥ 公开差×0.7；停免费
Shared/Nested: 已问 / Unknown（Unknown 则只动 BAR/Base）
Do-not-do:
  - 降高档救总 OCC
  - 免费升级当库存策略
  - 未知房型先动套房差
```

例（Simulation 尺，不是真店）：Base 剩 6、日均 Pickup 4，Deluxe 剩 40。Base 799 未最高 → **A**：Base 关 <859，首选 829–859；Deluxe 不降。若 Deluxe 只贵 20 元 → **A+C** 把 Deluxe 收到 ≥899。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h Base Pickup < 阈值低且已涨 Base | Base 回到第一刀下限，不恢复低入口 |
| 高档仍 0、图文库存已开 | 不降到倒挂；走 P34 收差 |
| 免费升级间数仍升 | 停免费；升 C |
| 全型都变成 Fast | 离开本剧本，走 P03/P09 |
| 取消骤升 | OTB 改软（P14），停加码 |

---

## 6. 如果只能再补 3 个

1. 分房型 Remaining + 公开价（含早/取消对齐）  
2. 是否 shared / 映射错  
3. 近 7 日免费升级间夜

---

## 7. Confidence / 边界

分型数据齐：方向 Medium。差价 % 带 Hypothesis。未知房型：Low，只动 Base。  
倒挂优先 P34。全店卖穿 P03。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P13。三选一 A/B/C。 |

---

## 9. 一行（2026-08-25 06:17，不改上文）

空间可用免费升房 **不是** 本剧付费房型差（**P49** `loyalty-award-upgrade.md`）。upgrade ≠ paid differential。客人付差价仍本剧。


## 10. 一行（2026-08-27 06:17，不改上文）

前台「升还是不升、收多少」的**付费升**对话走 **P61** `paid-upsell-upgrade.md`。本剧仍管分型 Remaining 穿 / 关型 / 卖梯保护。客人付差价的过程细节在 P61；本剧差价尺不改。

## 11. 一行（2026-08-27 08:17，不改上文）

空差价是可卖期权的「为什么」→ **T-Upsell** `theory/paid-upsell-differential.md`。本剧仍管分型 Remaining 穿 / 关型 / 卖梯。付费升过程仍 P61。

## 12. 一行（2026-08-27 18:17，不改上文）

本剧管**房型**压缩轴。**房价档嵌套**低档仍开 / 关低开高误用走 **P64** `nested-rate-class.md`。两轴可同时紧，诊断分开。


## 13. 一行（2026-09-03 00:17，不改上文）

组合套房 / Component / 套房池 / Accessible·Features「占了所以 dump BAR」的「为什么」→ **T-Component** `theory/component-suite-inventory-vs-bar.md`（T03-00）。本剧仍管分型 Remaining 穿 / 关型 / 卖梯。过程仍本剧 + **P37**；不另开 P88。三句 / 399 / 799 **不改**。

> 指针（2026-09-03 02:17 C03-02，不改正文）：Component Suite Simulation 已开 → `cases/sim-2026-component-suite-sat.md`（C03-02）；Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。三句 / 399 / 799 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 04:17 R03-04，不改正文）：§122 新开 protel Virtual Room Types + Clock Virtual Rooms（加强 Component/套房池邻覆盖）。Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。三句 / 399 / 799 **不改**。不开 P88。不开 P89。

> 指针（2026-09-06 00:17 T06-00，不改正文）：DNM / Locked·Unassigned / Waitlist deepen **theory-skip**（§146 复核）。邻覆盖仍本剧；Diagnose 主闸 **P37**（+ P13/P63/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-06-0017-theory-skip-dnm.md`。

> 指针（2026-09-06 02:17 C06-02，不改正文）：DNM/Locked·Unassigned/Waitlist Simulation 已开 → `cases/sim-2026-dnm-locked-waitlist-misread-sat.md`（C06-02）；Diagnose 主闸 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699。T06-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 04:17 R06-04，不改正文）：§148 HotelKey/Stayntouch/Clock 换房锁互补源。Diagnose 仍 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
