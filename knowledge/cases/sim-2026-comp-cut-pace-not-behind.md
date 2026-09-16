# Simulation Case｜竞对集体降价、本店 Pace 不落后 → 不跟

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-comp-cut-pace-not-behind.md`  
> 日期：2026-08-20  
> 用途：用户说「竞对比我低 80 元要不要跟」→ 先看 Pace/Pickup/事件/citywide → **不跟**  
> 调用：`ignore-comp-undercut.md` · `price-war.md`（P16）· `market/comp-set.md` · `hold-price-curve-late.md`  
> 不要把下列数字写成某家真实酒店结论。

---

## 0. 用户原始输入（仿真）

```text
酒店：220 间，城区中档商务+周末休闲（仿真）
Stay Date：2026-09-19（周六）
分析日：2026-09-09 → DTA 10
OTB：58%
过去 3 天 Pickup：+16 间（净/毛未声明）
过去 7 天 Pickup：+34 间
STLY 同周六同 DTA：OTB 55%
经理口述：这种周六 DTA=10 历史中位约 52–58%，入住前 7 天再走约 20pp
当前 BAR：899（含早，基础大床）
主要竞对可订（用户称 Primary）：
  昨晚还是 899 / 929 / 949
  今早变成 819 / 829 / 849（三家都降，最低比我低 80 元）
无演唱会/会展官宣；不是节假日
渠道：直销+携程+美团均开，配额>0
用户原话：「竞对比我低 80 块，要不要跟到 819？不跟会不会空？」
```

---

## 1. Intake

| 项 | 值 | 类型 |
| --- | --- | --- |
| Total Rooms | 220 | Fact（仿真） |
| Stay Date / DTA / DOW | 09-19 / 10 / 周六 | Fact |
| OTB OCC / Rooms | 58% / **128 间** | 计算 |
| Remaining | **92 间**（OO=0，Hypothesis） | 计算 |
| 3D Pickup | **16 间** / 5.3 间/日 | Fact；净毛 NV |
| 7D Pickup | **34 间** / 4.9 间/日 | Fact |
| Days-to-Sellout | 92/5.3 ≈ **17 日** > 10 | 计算：按当前速度 **卖不完**，但周末后置可能加速 |
| Pace vs STLY | 58−55 = **+3pp** | 计算 → **On**（带宽 −5~+8） |
| vs 口述中位 | 58 落在 52–58 上沿 | **On / 略 Ahead** |
| BAR vs 今早最低 | 899−819 = **+80 元（+9.8%）** | 计算：刚过 8% 线 |
| 价差来源 | 对方下移 80–100 元，我方 BAR 未动 | Fact（用户给的前后点） |
| 事件 / citywide | 无官宣 | Fact：无旗标。Compression **不是** Fact |
| 渠道 | 开 | Fact |

预选 3 个补数：竞对是否仍是 Primary 且含早口径一致；7D 是否含一团；周末后 7 日历史加速是否成立。

---

## 2. Situation

220 间仿真店，Stay Date 9 月 19 日周六，DTA 10。OTB 58%=128 间，剩余 92 间。近 3 日 +16 间、近 7 日 +34 间。STLY 同 DTA 55%（今年 +3pp）。历史中位 52–58%。BAR 899。用户给出的三家竞对今早从 899–949 降到 819/829/849，最低低 80 元。无事件官宣，渠道开着。用户想跟到 819。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 | DTA 10=中窗口。周六店此时 58% 落在口述历史带上沿。 |
| D2 | vs STLY **On（+3pp）**。不是 Behind。 |
| D3 | 5 间/日，线性卖不完，但周末后置可能加速；**不是死亡 Pickup**。 |
| D4 | Segment Unknown → 不能排除一团，但 3D 与 7D 速度接近，假快风险低于「3D 爆 7D 死」。 |
| D5 | 价差 +80 来自 **对方集体下移**，不是我方刚涨后无人问。相对战前竞对带，899 原在带内。 |
| D6 | 剩 92=42%，无 Sellout 压力。 |
| D7–D8 | 渠道开。限制 Unknown。 |
| D9 | 无事件、无 citywide 旁证（无人满房叙述）。 |
| D10 | Forecast 未给；Budget 未给。 |

```
Fact:
- OTB 128 / 剩 92 / DTA 10 / 3D+16 / 7D+34
- vs STLY +3pp
- BAR 899 vs 今早竞对 819–849
- 无事件旗标

High-probability:
- 主机制是竞对战术降价 / 价格战噪声，不是本店 Overpricing
- 第一动作 = 不跟（ignore-comp-undercut）

Hypothesis:
- 三家构成有效 Primary
- Pickup 以 Transient 为主
- 后 7 日仍会走约 20pp（口述）

Unknown:
- 是否一团；含早口径；对方降的是公开 BAR 还是促销
```

**主诊断：** Pace On + Pickup 未塌 + 无 citywide → **不跟 80 元。**  
**问题树：** 不挂 OCC Low 主枝。挂「竞对价信号」+ P16。若用户坚持「空房多」则先走 §1，问 2/4/8 后仍回到不降。

**机会扫描：** O2 Overpricing **不适用**（Pace 不落后）。O4 不适用。Price War 适用。Citywide **不适用**。

---

## 4. Recommended Action

**动作 A（主）— 不跟，BAR 维持 899**

```text
Stay Date:            2026-09-19
Room Type:            先动 BAR / 基础房。套房不动
Rate Plan:            BAR 及连动公开价
Current:              899
Range / Preferred:    899（±0）
Inventory:            不关房。剩余 92 继续可售
Restriction:          今天不设 MinLOS（周末 Peak 未证实溢出）
Channel:              不参加把成交价打到 819 的跟价大促
Optional（仅品牌强迫「要有动作」）:
  预付围栏 859–869（−3–5%），配额 ≤ 18 间（剩余 20%），截止日期 = 入住日
  BAR 仍 899
Do-not-do:
  - 跟到 819 或 799
  - 一夜 −15%（899→764）
  - 「适当跟 40 块」
  - 只改美团、直销仍 899 又另开战争
```

**动作 B：** 记录三家降价，标 Price War 观察，不当 citywide。

决策卡：`ignore-comp-undercut.md`。剧本：P16。幅度尺：how-much-to-move 表 #5/#8/#9。

---

## 5. Why

**数据：** DTA10、OTB58%/128、STLY55%、3D+16、7D+34、BAR899、竞对今早 819–849、无事件。

**逻辑链：**

```
Pace On（+3pp）+ Pickup 未死（5 间/日）+ 无事件/无满房
+ 80 元来自对方下移
→ 家族：历史节奏、速度、外部（负向战争）——需求家族不支持降
→ 跟 819 是邀请第二轮，且把周六公开带砸穿
→ 不跟；最多围栏
```

**Hypothesis：** 899 相对战前带是合理位置；对方可能在抢份额或误判弱市。

---

## 6. Expected Impact

- **OCC：** 不追求用 80 元买满房。若后 7 日走口述 20pp，最终 OCC 约 78% 量级（区间，不是点承诺）。  
- **ADR：** 守 899，增量成交不按 819。已售 128 锁价。  
- **RevPAR：** 方向上避免公开带被打穿；不报增收金额。  
- **Pickup：** 24h 预期仍为正；<3 间要重评 Pace 是否翻转。  
- Conversion / Net / Profit：Unknown。

---

## 7. Risk

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| 其实已 Behind，口述中位错 | 48h Pickup、补曲线 | 见 §9 |
| 对方降的是真市场冰点 | Comp Forward / 是否也空 | 转 do-not-cut，**仍不跟到底** |
| 只改半边渠道 | 多渠道价 | 先对齐 |
| 一团撑着 OTB | Segment | ≥30 间单笔 → 重做 Transient |

---

## 8. What To Watch

24/48h：09-19 净 Pickup 间夜、取消、三家竞对 BAR、自身是否仍 899、新单是否散客。

---

## 9. Re-evaluation Trigger

```
1) 未来 48h 累计 Pickup < 4 间（220×1.7%≈4）且补齐基准后 Pace ≤ −8pp
   且价仍明显高于全部可订
   → 离开「不跟」主路径，开围栏 859–869，BAR 仍不一次到 819

2) 24h Pickup ≥ 6 间（≈总房 2.5%）且竞对未拉回
   → 更不跟；取消拟议围栏

3) ≥2 家竞对满或中位回到 ≥899
   → 评档 A（+5–8%），不跳 949

4) 出现会展/演唱会 overnight 证实
   → 离开战争叙事，走事件卡；仍禁止跟 819

5) 用户已跟到 819
   → 不自动再跟；能守则守 819，48h 评能否拉回 859–899
```

---

## 10. Confidence

```
Confidence: Medium
不是 High：Segment 未知；Comp 可比未知；80 元刚过 8% 线
不是 Low：Pace 与 Pickup 两家族支持「不是本店需求坏了」；第一刀可逆（不作为）
用法：今天 899 不动。不要跟到 819。
```

---

## 11. 12 问对照

| 问 | 答 |
| --- | --- |
| 需求状态 | 周六中位，On，非冰点 Fact |
| Pace 领先？ | On（+3pp），不落后 |
| Compression？ | **不是**。无满房、无事件 |
| 899 是否偏高？ | 相对今早竞对 +80；相对战前带 **否** |
| 该不该跟？ | **不该** |
| 跟到多少？ | 不跟。若强迫动作：围栏 859–869 |
| 分阶段？ | 48h 才允许围栏，不允许第三刀到 819 |
| 房型 | 先 BAR |
| 关低价？ | 不新开破价；已有 <859 的公开促则关 |
| 库存保护？ | 不关 BAR |
| 看什么 | Pickup 间夜、竞对是否再降、是否满 |
| 判断错 | 48h 死 + Pace≤−8pp |

---

## 12. 声明

**Simulation。** 论证：竞对集体降、本店 Pace 不落后 → 不跟。
