# Simulation Case｜Pace Behind + Slow Pickup

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-pace-behind-slow-pickup.md`  
> 日期：2026-08-20  
> 用途：检验「还有 14 天、现在 60%、最近 3 天只进了 8 间」能否落到判断 + 动作 + 3 个补数 + 24/48h Trigger  
> 调用：`theory/otb-pickup-pace.md` §9 · `advisor-playbooks/slow-pickup.md` · `recommendations/stimulate-slow-pickup.md`  
> 不要把下列数字写成某家真实酒店结论。

---

## 0. 用户原始输入（仿真）

```text
酒店：200 间，城区商务，无品牌会员义务（仿真设定）
Stay Date：2026-09-15（周二）
分析日：2026-09-01 → DTA 14
OTB：60%
过去 3 天 Pickup：+8 间（用户按间夜给，净/毛未声明）
当前 BAR：899（含早，基础大床）
主要竞对可订：799 / 829 / 849
渠道：用户说「携程美团都开着」
事件：无已知活动
用户原话：还有 14 天、现在才 60%、这三天只进了 8 间，要不要降？
```

本仿真**额外给**一条基准，用于走完 Pace；真实用户若只给三句话，按理论卡 §9.3 条件化，并把这条列为补数 #2。

```text
STLY 同星期二、同 DTA：OTB 72%
经理口述：这种周二最后 7 天通常还能走 10–15 个点，不是 25+（后置但不极端）
7D Pickup：用户没给
分房型 / Segment / 取消数字：没给
```

---

## 1. Intake

| 项 | 值 | 类型 |
| --- | --- | --- |
| Total Rooms | 200 | Fact（仿真给） |
| Stay Date / DTA / DOW | 09-15 / 14 / 周二 | Fact |
| OTB OCC / Rooms | 60% / **120 间** | 计算 |
| Remaining | **80 间**（OO=0，Hypothesis） | 计算 |
| 3D Pickup | **8 间** / 2.7 间/日 | Fact（间夜）；净/毛 NV-02 |
| Days-to-Sellout | 80 / 2.7 ≈ **30 日** > 14×1.5=21 | 计算 · Hypothesis（无衰减） |
| Pace vs STLY | 60 − 72 = **−12pp** | 计算 · 星期对齐（声明 NV-03） |
| BAR vs 最低竞对 | 899 − 799 = **+100 元（+12.5%）** | 计算 |
| BAR vs 中位 | +70 元（+8.4%） | 计算 |
| 渠道 | 「开着」无截图 | 弱 Fact |
| 事件 | 无 | Fact（用户说无） |
| 曲线形状 | 最后 7 天 10–15pp | Expert 口述，低于「强后置」 |

预选 3 个补数：7D Pickup 净间夜（或近 7 日有无大团）；分房型剩余；取消 7 日数字。  
（若用户没给 STLY，3 个改成：总房、STLY/曲线、BAR+开关——本仿真已有总房与 STLY。）

---

## 2. Situation

200 间城区商务仿真店，Stay Date 9 月 15 日周二，DTA 14。OTB 60%=120 间，剩余 80 间。近 3 日 Pickup +8 间（2.7 间/日）。STLY 同 DTA 72%，今年落后 12pp。BAR 899，给定竞对 799/829/849。用户称主渠道开着，无活动。用户问题：要不要因 60% 和 8 间去降价。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 | DTA 14=中窗口。商务周二可以略后置，但口述最后 7 天只走 10–15pp，不是「现在 60% 完全正常」。 |
| D2 | Pace **Behind −12pp**（Fact vs 给定 STLY）。 |
| D3 | Days-to-Sellout 30>21 → **Slow**（Hypothesis）。8 间/3 日在 200 间店低于剧本 V1 弱阈值（200×1.5%×3≈9）。 |
| D4 | Segment Unknown。8 间不像一团，但不能排除。 |
| D5 | BAR 高于全部给定竞对 50–100 元 → 价格位置偏高（相对这 3 点）。 |
| D6 | 剩 80=40%，压力是卖不完不是卖穿。房型 Unknown。 |
| D7–D8 | 限制/低价产品 Unknown。渠道口述开着。 |
| D9 | 无事件。 |
| D10 | Forecast 未给。 |

```text
Fact: OTB 120/60%；3D=8；vs STLY −12pp；BAR 899>799–849
High-probability: 主机制 = Pace Behind + Slow Pickup + 价高于给定竞对（Price Too High 待转化旁证）
Hypothesis: 净 Pickup=8；竞对可比；最后 7 天只走 10–15pp；弹性足以支撑小步刺激
Unknown: 7D、Segment、房型、取消、限制、促销列表
先排除：E2 强后置不成立；E3 Pace 确实落后；E4–E5 口述已开（弱）；E10 无市场数据。
问题树：§4 + §6 + §13。不是 §1 直接降。
```

**主诊断：** 9 月 15 日是中窗口的 **Pace Behind + Slow Pickup**，价格高于给定竞对约一档，主风险是继续挂 899 把 80 间剩进最后几天再恐慌砸价。  
**次诊断：** 供给开关只有口述；未证实前，第一刀不砸公开 BAR。

---

## 4. Opportunity / Risk

O2 Overpricing：适用（价差+落后+慢）。O4 Low Demand：信息不足（无 Comp Forward）。O1/O3：不适用。  
**主机会：** 用围栏产品收回价格带，而不是一夜把 BAR 降到 799。  
**主风险：** 其实是市场弱，降了也没人；或渠道其实没开。

I×C×U（粗）：开预付 4×3×3=36；直接降 BAR 4×2×3=24（C 更低）。今天做预付。

---

## 5. Recommended Action

**动作 A（主）— 开围栏预付，BAR 不动**

```text
Stay Date:            2026-09-15
Room Type:            基础大床 / BAR 房。套房差价不动。
Rate Plan:            预付不可退（或 2 晚连住，本仿真无 LOS 数据，首选预付）
Current BAR:          899
Promo Range:          809–849
Preferred:            829（对齐中位竞对，BAR−7.8%；高于最低竞对 799）
BAR:                  维持 899
Inventory:            保持可售；不关房
Restriction:          若该日存在 MinLOS>1 / CTA → 解开这一天。未知则 IF 有 THEN 解
Channel:              预付开直销+主 OTA。不接会把成交打到 809 以下的神券/今夜特价
Do-not-do:            一夜 BAR→749；BAR 降到 829 再挂 799 促销；只改一个 OTA
```

**动作 B（今天不做，条件化）— 动 BAR**

```text
IF 48h 累计净 Pickup < 4 间（200 间尺度：300 间的 5 按房量缩放 ≈4）
   AND 渠道截图确认开着
   AND 竞对仍 ≤849
THEN BAR 899 → 849（区间 829–859，首选 849，−5.6%）
ELSE 不动 BAR。
```

决策卡：`stimulate-slow-pickup.md`。剧本：`slow-pickup.md`。

---

## 6. Why

数据：DTA 14、120/80、3D=8、STLY −12pp、899 vs 799–849。  
逻辑：Pace 家族落后 + Velocity 偏慢 + Price 偏高 → 允许刺激；供给未截图 → 先促销不砸 BAR。  
理论：理论卡三角；问题树「落后 ≠ 降价」。幅度 Hypothesis。

---

## 7. Expected Impact

- 增量成交 ADR：若走 829 预付，较可能成交的 899 **−70**；换的是间夜是否出现。不假设 80 间全卖完。  
- 已售 120 间锁价，不进「降价损失」。  
- OCC 路径：接受用部分 ADR 换尾部间夜；若 14 日均 ≥6 间/日可吃掉剩余（80/14≈5.7）。  
- 24h Pickup：1–3 间算「开始动」；≥5 间算够；0 间算可能供给或市场问题。  
- RevPAR / Net / Profit：Unknown。不编增收金额。

---

## 8. Risk

| 风险 | Trigger |
| --- | --- |
| 渠道其实关着 | 用户截图不可订 → 撤回促销路径，先开渠道 |
| 市场冰点无弹性 | 48h <4 间且 Comp 也在降 → 停 BAR 第二刀 |
| 预付打穿口碑/价差 | 公开 BAR 被投诉 → 先对齐再谈量 |
| 一团将至 | 发现 ≥26 间单笔（200 间的 13%）→ 撤回降 BAR |

---

## 9. Watch + Trigger

```text
24h / 48h 看：净 Pickup 间夜、取消、竞对、预付是否可订、新单是否散客。

1) 24h Pickup ≥ 5 间（200×2.5%）→ 关促销加码；BAR 继续 899。
2) 24h Pickup 2–4 间 → 守 829 预付。
3) 48h 累计 < 4 间且渠道已开 → BAR 899→849（829–859）。
4) 24h 取消 ≥ 4 间或翻倍 → 停降。
5) 补到 7D Pickup 其实有 20+ 间（3D 只是窗口错）→ 改 Hold，关新促销。
```

---

## 10. Confidence + 3 个补数

```text
Confidence: Medium
不是 High：无 7D、无 Segment、无取消数字、竞对可比未证、开关无截图
不是 Low：Pace + 速度 + 价差三家族同向；第一刀可逆
```

如果只能再补 3 个：① 7D 净 Pickup / 有无大单 ② 分房型剩余+价 ③ 近 7 日取消间夜。  
有了更好：Comp Forward、限制截图、促销列表。

---

## 11. 对照成功标准

| 要求 | 本仿真 |
| --- | --- |
| 判断快慢 | Pace Behind −12pp；Pickup Slow（2.7 间/日，Days-to-Sellout 30） |
| 动作或明确不动 | BAR **先不动**；开预付 **829（809–849）** |
| 再补 3 个数 | 7D/大单、房型、取消 |
| 24/48h Trigger | ≥5 守；<4/48h 才动 BAR 到 849 |
