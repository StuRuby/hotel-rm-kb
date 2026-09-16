# Simulation Case｜Pace Ahead + Fast Pickup（房型差）

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-pace-ahead-fast-pickup-roomtype.md`  
> 日期：2026-08-20  
> 用途：同一 300 间尺度，但从**分房型压缩**切入，避免与 `advisor-process.md` 第七节（10-03 / 899→1029 / 演唱会）逐字重复  
> 调用：`advisor-playbooks/fast-pickup.md` 路径 A+B · `protect-inventory-fast-pickup.md` · `increase-bar-pace-ahead.md`  
> 不要把下列数字写成某家真实酒店结论。

---

## 0. 用户原始输入（仿真）

```text
酒店：300 间
  标准大床 STD：180
  套房 STE：40
  其余（双床/行政）DLX：80
Stay Date：2026-10-17（周五）
分析日：2026-10-01 → DTA 16
全店 OTB：70%
STD OTB：88%
STE OTB：22%
DLX OTB：55%
过去 3 天全店 Pickup：+18 间，其中 STD +14、DLX +3、STE +1
过去 7 天全店 Pickup：+40 间，其中 STD +31、DLX +7、STE +2
STLY 同周五同 DTA 全店 OTB：58%
当前 BAR：STD 859 / DLX 999 / STE 1299（含早）
竞对标准间：929 / 959 / 999
套房竞对未给
在售：STD「今日特价」799 仍开
取消：无数字
事件：用户说「附近周末有小型展，不确定住我们」
用户原话：总入住已经 70% 了还好吧？套房怎么卖不动，标准间要不要再推一推？
```

与第七节差异（刻意）：日期换成周五 10-17；DTA 16 不是 14；OTB 70% 不是 68%；BAR 859 不是 899；竞对 929/959/999；**主矛盾是房型而不是演唱会全店涨**；用户想推标准间——方向应相反。

---

## 1. Intake

| 项 | 值 | 类型 |
| --- | --- | --- |
| STD OTB / 剩 | 180×0.88=**158** / **22** | 计算 |
| DLX OTB / 剩 | 80×0.55=**44** / **36** | 计算 |
| STE OTB / 剩 | 40×0.22=**9** / **31** | 计算 |
| 全店 OTB / 剩 | **211** / **89**（核对 158+44+9=211；70%×300=210，1 间四舍五入） | 计算 |
| STD 3D / 日均 | 14 / 4.7 | Fact |
| STD Days-to-Sellout | 22/4.7 ≈ **4.7 日** < DTA 16 | 计算 |
| 全店 3D 日均 | 18/3=6.0；7D 日均 40/7≈5.7 | 计算 |
| 全店 Days-to-Sellout | 89/6.0 ≈ **15 日** ≈ DTA 16 | 计算：全店擦边，STD 已危 |
| Pace vs STLY | 70−58=**+12pp** | 计算 |
| STD 价差 vs 最低竞对 | 859−929= **−70 元（−7.5%）**；若算上 799 特价则 **−14.0%** | 计算 |
| 展会 | 有旗标，overnight Unknown | 不得当 Compression Fact |

预选 3 个补数：近 7 日 STD Pickup 是否含单笔团；展会场馆距离/是否 overnight；DLX/STE 竞对价（或确认差价策略）。

---

## 2. Situation

300 间仿真店，Stay Date 10 月 17 日周五，DTA 16。全店 OTB 70%≈211 间，剩余约 89 间。结构不均：标准间 88% 仅剩 22 间，套房 22% 剩 31 间。近 3 日全店 +18 间，其中标准间 +14。近 7 日 +40，标准间占 31。STLY 同 DTA 58%，领先 12pp。标准间 BAR 859，另有 799 特价；竞对标准间 929/959/999。用户认为总 70% 还好，想继续推标准间、并担心套房。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 | DTA 16 中窗口。周五可前置。全店 70% 已偏高。 |
| D2 | 全店 Pace **Ahead +12pp**。 |
| D3 | 全店速度擦边；**STD Fast**（4.7 日卖完）。STE 3D=1 → Slow。 |
| D4 | Segment Unknown。STD 7D=31 可能含团，未达 40 间单笔阈值但不能排除。 |
| D5 | STD BAR 低于竞对；799 特价更低。STE 价位置 Unknown。 |
| D6 | STD 剩余 22=12% 该型，压力高。STE 剩余厚。 |
| D7 | Restriction Unknown。 |
| D8 | 799 特价在漏。 |
| D9 | 小展旗标，overnight 不是 Fact。 |
| D10 | Forecast 未给。 |

```text
Fact: 全店 Ahead +12pp；STD 剩 22、3D+14、Days-to-Sellout≈4.7；799 特价开着；BAR 859<929
High-probability: 主机制是 STD Underpricing + 房型压缩，不是「全店还要冲 OCC」
Hypothesis: Transient 为主；799 是主要漏斗；展会无 overnight
Unknown: 大单、展会细节、STE 竞对、取消
问题树：§5 + §7 + §11。不挂死 Concert。
禁止：按用户「再推标准间」去降 STD。
```

**主诊断：** 10 月 17 日标准间处于 **Fast Pickup + 价低于竞对** 的 Early Sellout 路径；套房慢是差价/产品问题，不是全店该促销的理由。  
**次诊断：** 799 特价在打穿 859。

---

## 4. Opportunity / Risk

O1 Underpricing（STD）适用。O6 Room Type 适用。O3 事件：信息不足。O2 不适用。  
**主机会：** 收 STD 低价并上调 STD BAR，把剩余 22 间留给更高成交。  
**主风险：** ① STD Pickup 是一团；② 关 799 后曝光塌；③ 把套房跟着涨，更卖不动。

I×C×U：关 799+涨 STD 4×3×4=48；套房降价 2×2×2=8（今天不做）。

---

## 5. Recommended Action

**动作 A（主）— 标准间：关特价 + 上调 BAR**

```text
Stay Date:            2026-10-17
Room Type:            STD 标准大床
Rate Plan:            BAR + 「今日特价」
Current:              BAR 859；特价 799
BAR Range:            929–979
Preferred:            959
  方法 A：低最低竞对 7.5% → 收到最低～中位 = 929–959
  方法 B：+8–15% = 928–988
  重叠：929–979；首选 959（中位竞对，+11.6%，低于最高 999）
  禁止第一刀 ≥999
Inventory:            STD 剩余 22 间继续可售，不整型 Close
  低价渠道配额：收到剩余的约 40%（Hypothesis，≈9 间）给主 OTA+直销以外的破价源
Restriction:          今天不设 MinLOS（展会 overnight 未证）
Channel:              立即关闭 799 特价及一切 <929 的 STD 公开价
Do-not-do:            再推 STD 促销；只改一个渠道；套房跟涨；因「有展」一次到 999
```

**动作 B（配套）— 套房：不降，不跟涨**

```text
Stay Date:            2026-10-17
Room Type:            STE
Current BAR:          1299
Action:               维持 1299（执行带 1299±0）
Inventory:            保持可售；用升级消化 STD 卖穿后的溢出
Restriction:          不设
Do-not-do:            为「22% 看起来低」降套房；把套房差价压到与新 STD 959 只差 50 元
IF 48h STE Pickup 仍 =0 且 STD 已 >959 成交
  THEN 下一步评 STE 1299→1249（1229–1269），不进今天第一刀
```

**动作 C（今天不做）— MinLOS**

```text
IF 展会证实 overnight 且 10-16 / 10-18 OTB 明显低于 10-17
THEN 评 10-17 MinLOS=2
ELSE 不设。
```

卡：`protect-inventory-fast-pickup.md` + `increase-bar-pace-ahead.md`（只用于 STD 幅度）。剧本：`fast-pickup.md` 路径 A（STD）+ 房型分支。

---

## 6. Why

数据：全店 +12pp；STD 88%/剩 22/3D+14/卖完≈4.7 日；859 与 799 vs 929–999；STE 22%/3D+1。  
逻辑：全店 Ahead 被 STD 快+套房慢平均掉。用户要「再推标准间」会加速早卖完。先关 799、STD 收到 959；套房慢不能用降 STD 来救。展会不进第一刀幅度。  
Hypothesis：959 幅度；配额 40%；需求以散客为主。

---

## 7. Expected Impact

- STD 增量成交 ADR：若新单按 959，较 859 **+100**；较 799 **+160**。不得假设 22 间全按 959 卖完。  
- 已售 STD 158 间锁价。  
- 全店 OCC：不追求更高；接受 STD 减速。只要 16 日 STD 均 ≥1.4 间/日仍可消化 22 间。  
- 套房：今天不以 OCC 为目标。  
- 不编增收金额。

---

## 8. Risk

| 风险 | Trigger |
| --- | --- |
| STD 7D 31 间是一团 | 单笔 ≥40 或占窗口 50% → STD BAR 上限 929，特价保持关 |
| 涨过猛 | 24h STD Pickup <2 间 → 守 959 再 24h；48h STD 累计 <3 → 回到 929 |
| 关 799 曝光塌 | 主 OTA STD 不可订 → 先开回 959 层，不重开 799 |
| 套房更死 | 不因此降 STD；48h 后再评 1249 |
| 展会假信号 | 证实无 overnight → 不上 979+ |

---

## 9. Watch + Trigger（300 间全店尺度，STD 单独收窄）

```text
看：全店与 STD 净 Pickup、取消、竞对、799 是否还在、新单 Segment、三型剩余。

1) 24h 全店 Pickup < 3 或 STD < 2
   → 不第二刀。48h 全店 <5 且 STD <3 → STD 回到 929。
2) 24h 全店 3–7 且 STD 1–3
   → 守 959，特价保持关。
3) 24h 全店 ≥8 且 STD ≥4，无大单，竞对仍 ≥929
   → STD 第二刀 959→999（979–1029）。套房仍不动。
4) STD 剩余 ≤5 或 Days-to-Sellout≤2
   → 关 STD 低价渠道，只留直销+升级。
5) 单笔 Group ≥40
   → 撤销 Fast Transient；STD 上限 929。
6) 展会证实无 overnight
   → 取消 979+ 路径。
```

---

## 10. Confidence + 3 个补数

```text
Confidence: Medium
不是 High：Segment 未知；展会未证；无取消数字；959 是启发式
不是 Low：Pace / STD 速度 / STD 价差三家族同向；第一刀可逆
```

如果只能再补 3 个：① STD 近 7 日是否有单笔 ≥40 间 ② 展会日期/距离/overnight ③ STE/DLX 竞对价或本店差价策略是否必须守。

---

## 11. 与第七节的关系

| | 过程 §7 | 本仿真 |
| --- | --- | --- |
| 日期 | 10-03 DTA14 | 10-17 周五 DTA16 |
| 叙事 | 全店价低 + 演唱会旗标 | 房型压缩 + 用户想推已热房型 |
| 价格 | 899→1029（999–1049） | STD 859→959（929–979）；STE 不动 |
| 库存 | 不关 BAR | 关 799；STD 配额收一档 |
| 教训 | 分阶段涨 | **总 70% 不是可以再推 STD 的理由** |
