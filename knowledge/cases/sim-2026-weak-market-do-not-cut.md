# Simulation Case｜弱市 OCC 低但不应降价

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-weak-market-do-not-cut.md`  
> 日期：2026-08-20  
> 组合：市场也弱 + 曲线后置 + 主 OTA 配额曾被关（三因子组合）  
> 用途：检验「入住率才 48%，竞对也在降，要不要跟」→ 问题树后选择 **不降 / 只修渠道**  
> 调用：`advisor-playbooks/low-demand-day.md` · `recommendations/do-not-cut-price-market-also-weak.md` · `hold-price-curve-late.md` · `forecasting/forecast-framework.md`  
> 不要把下列数字写成某家真实酒店结论。

---

## 0. 用户原始输入（仿真）

```text
酒店：180 间，城区商务（仿真）
Stay Date：2026-09-22（周二）
分析日：2026-09-08 → DTA 14
OTB：48%
过去 3 天 Pickup：+5 间（净/毛未声明）
当前 BAR：799（含早，基础大床）
主要竞对可订：779 / 799 / 819（两家昨天刚从 849 附近降下来）
用户口述：
  「整个商圈这周都空，展会取消了，竞对都在降，我们才 48%，要不要跟到 699？」
  「美团昨天配额是 0，今天刚开回来。」
经理口述：这种周二 DTA=14 历史中位大约 45–50%，最后 7 天再走 15–20 个点。
STLY 同星期二同 DTA：OTB 51%（去年无展会）
去年有展会的那一个周二（不可比）：DTA14 曾到 70%
无其他已知活动
用户原话：入住率低，要不要降？
```

---

## 1. Intake

| 项 | 值 | 类型 |
| --- | --- | --- |
| Total Rooms | 180 | Fact（仿真） |
| Stay Date / DTA / DOW | 09-22 / 14 / 周二 | Fact |
| OTB OCC / Rooms | 48% / **86 间** | 计算 |
| Remaining | **94 间**（OO=0，Hypothesis） | 计算 |
| 3D Pickup | **5 间** / 1.7 间/日 | Fact；净/毛 NV-02 |
| Days-to-Sellout | 94/1.7 ≈ **55 日** > 14×1.5 | 计算 · Hypothesis（未扣后置加速） |
| Pace vs STLY（无展会年） | 48−51 = **−3pp** | 计算 → **On**（带宽 −5~+8） |
| Pace vs 「有展会那年」 | 48−70 = −22pp | **不可比**；那是事件年 |
| BAR vs 最低竞对 | 799−779 = **+20 元（+2.6%）** | 计算：在带内，不是显著高 |
| 市场 | 展会取消 + 竞对集体降 + 商圈空 | 定性 Fact（用户给）+ 强度 Hypothesis |
| 渠道 | 美团配额昨天 0、今天刚开 | Fact：供给曾关 |
| 曲线 | DTA14 中位 45–50%，后 7 天 15–20pp | Expert 口述 → **后置** |

预选 3 个补数：Comp Forward 或竞对这天 OTB；7D 净 Pickup（含美团重开后）；取消/是否还有团体退展。

---

## 2. Situation

180 间城区商务仿真店，Stay Date 9 月 22 日周二，DTA 14。OTB 48%=86 间，剩余 94 间。近 3 日 Pickup +5 间。STLY 无展会年同 DTA 51%（落后 3pp）。BAR 799，竞对 779/799/819 且多家刚降。用户称展会取消、商圈空；美团配额昨日本为 0、今日刚开。用户想跟到 699。

---

## 3. Diagnosis

| # | 判定 |
| --- | --- |
| D1 | DTA 14=中窗口。商务周二后置：历史 DTA14 ≈45–50%，今年 48% 落在带内。 |
| D2 | vs 可比 STLY **On（−3pp）**。vs 事件年 70% 是假 Behind。 |
| D3 | 3D=5 间偏慢，但渠道昨天才开；后置曲线下 Days-to-Sellout 不适用「现在本该快」。 |
| D4 | Segment Unknown。展会取消可能导致团退，OTB 48% 含金量要打折。 |
| D5 | BAR 在竞对带内（+20 vs 最低），**不是显著价高**。 |
| D6 | 剩 94=52%，压力是卖不完叙事，不是卖穿。 |
| D7–D8 | 美团刚开 → 供给故障可解释部分「慢」。 |
| D9 | 事件**取消**，不是事件需求。 |
| D10 | 若 Forecast 仍按「有展会」→ 先改预测。 |

```text
Fact:
- OTB 86 / 剩 94 / DTA 14 / 3D +5
- vs 无展会 STLY −3pp
- BAR 799 vs 竞对 779–819
- 美团配额昨日 0；展会取消（用户给）

High-probability:
- 主机制是「市场弱 + 曲线后置 + 渠道刚修」，不是 Price Too High
- 699 是在跟自杀价，弹性可能很差

Hypothesis:
- 后 7 天仍会走 15–20pp（口述）
- Constrained Forecast OCC 首选 ≈ 65–72%（48% + 15–20pp），不是 90%
- Unconstrained 不高（事件没了）

Unknown:
- Comp Forward 精确值、7D 净额、取消、分房型
```

**主诊断：** 弱市 + 后置曲线 + 供给刚恢复。OCC 低是现象，根因不是 BAR 799 过高。  
**问题树：** §1 OCC Low（问 2–4、6）+ §16 事件取消退出。  
**不挂：** Price Too High。

**Forecast（顾问手工，Hypothesis）：**  
F_add ≈ 86 + 历史后 14 天 fill。口述后 7 天 15–20pp≈27–36 间，前 7 天（DTA14→7）历史不详，给宽区间。  
Constrained OCC：**区间 60–75%，首选 68%**。不要为追「展会年 90%」砸价。  
Unconstrained：事件取消后 **不高于 Constrained 上沿**；禁止写 Demand=历史满房日。

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| O1 Underpricing | 不适用 |
| O2 Overpricing | 不适用（价不显著高） |
| O4 Low Demand Risk | 适用，但是市场级 |
| O5 Pace | On，不是 Behind |

**主机会：** 不摧毁 ADR 带，等后置尾巴 + 让美团恢复曝光。  
**主风险：** 跟到 699 打开价格战；或误把真份额问题当市场弱（需 Comp Forward 证伪）。

---

## 5. Recommended Action

**主动作：不降 BAR；只确认渠道开着。**

```text
Stay Date:            2026-09-22
Room Type:            基础大床及连动公开价
Rate / Rate Plan:     BAR
Current:              799
Recommended Range:    799（±0）
Preferred:            不改。明确拒绝 699
Inventory:            确认美团/携程/直销配额>0、可订。不开批发深折
Restriction:          若该日有淡季 MinLOS≥2 → 解开这一天；无则不动
Channel:              只修刚打开的美团曝光，不报今夜特价
Optional:             若品牌强迫「要有动作」：预付 769–779（−3% 左右），配额 ≤ 19 间（剩余 20%），BAR 仍 799
Do-not-do:
  - 跟到 699（一夜约 −12.5%，接近禁止带；且市场冰点）
  - 一夜 −15%
  - 用展会年 70% 当 Pace Behind 铁证
  - 「适当跟一点」
```

决策卡：`do-not-cut-price-market-also-weak.md` + Hold。  
不走 decrease-bar-true-weak-demand（价不高、市场冰、Pace On）。

---

## 6. Why

**数据：** DTA14、OTB48%/86、STLY51%、3D+5、BAR799 vs 779–819、美团昨关、展会取消。  
**逻辑：** Pace On + 曲线后置 + 市场弱 + 价在带内 + 供给刚修 → 四条排除同时成立 → 降价抢存量弹性差。  
**Forecast：** 首选最终 OCC≈68%，不是危机。  
**Hypothesis：** 后 7 天口述 fill；Comp 可比。

---

## 7. Expected Impact

- OCC：接受「达不到展会年」。目标是尾巴来 15–20pp，不是用 699 换不确定的 10 间。  
- ADR：守 799；若开 769 预付，增量成交 ADR 略降，BAR 带不塌。  
- RevPAR：不写精确元。若跟到 699，已售 86 间锁价，增量可能仍少（市场弱），ADR 意图伤害大。  
- Conversion / Profit：Unknown。

---

## 8. Risk

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| 其实只有本店弱 | Comp Forward / 竞对 OTB | 市场不弱且我价变最高 → 评档 E 围栏 |
| 美团仍不可订 | 截图可订 | 只开库存，仍不降 |
| 用户已改到 699 | 自身 BAR | 不自动再跟；能拉回 799 则拉，不能则守 749–779 带重评 |
| 后置是假的 | 48h Pickup | 累计 <3 间且 Comp 其实热 → 离开本卡 |

---

## 9. What To Watch / Trigger

```text
1) 未来 24h 净 Pickup ≥ 4 间（180×2.5%≈4.5，取 4）
   → 尾巴在启动或渠道恢复。继续 Hold，取消任何 699 讨论。

2) 未来 24h Pickup 2–3 间
   → 守 799。48h 再看。

3) 48h 累计 < 3 间 且 美团确认可订 且 Comp Forward 显示市场其实不弱 且 BAR 已变最高
   → 离开 do-not-cut，评围栏 −3–5%（预付 769–779），仍禁止 699。

4) 竞对再降到 ≤699
   → 不自动跟。守 799，挂 Price War 诊断。

5) 展会恢复 / 临时城市活动
   → 离开本卡，评 Event / High Demand。
```

---

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：Comp Forward 无数字；曲线是口述；3D 慢与关渠道缠在一起
为什么不是 Low：Pace On 是 Fact；价在带内是 Fact；事件取消+竞对降是用户给的市场信号；美团曾关是 Fact
因此：今天执行「799 不动 + 确认渠道开」，拒绝 699。
```

---

## 11. 12 问对照（弱市版）

| # | 问 | 答 |
| --- | --- | --- |
| 1 | 需求状态 | 市场弱；本店 Pace On |
| 2 | Pace 是否落后 | 相对可比 STLY **否**（−3pp） |
| 3 | Compression | 否；事件取消 |
| 4 | 799 是否偏高 | 相对给定竞对，否 |
| 5 | 该不该降 | **不该** |
| 6 | 降到多少 | 不降。拒绝 699。强迫动作则预付 769–779 |
| 7 | 一次还是分阶段 | 无价格阶段；48h 用 Trigger 决定是否离开 |
| 8 | 哪个房型 | 先守基础 BAR |
| 9 | 关低价？ | 不新开破价；不报 699 |
| 10 | 库存 | 只确认打开，不关 |
| 11 | 24/48h | Pickup 间夜、美团可订、竞对价、Comp Forward |
| 12 | 判断错 | Comp 热+我变最贵+48h 仍死 → 改围栏，仍不跟 699 |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | Simulation 首版。三因子组合。 |
