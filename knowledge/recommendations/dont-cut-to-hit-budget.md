# Decision Card: 不砍价追预算

> 资产：Advisor Decision Card（T20）  
> 路径：`recommendations/dont-cut-to-hit-budget.md`  
> 对应：问题树 §39；用户原话「预算差了 10% 要不要把下周全砍了？」  
> 理论：`theory/revenue-strategy.md` · `forecasting/forecast-framework.md`  
> 配套：P17 Forecast Miss · P16 · P02 · T19 · P35 · `do-not-break-brand-floor.md`  
> 状态：active · 2026-08-22 16:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A（HSMAI：Budget = 想去哪，Forecast = 正在去哪；战术定价挂 Forecast）  
> Last Verified：2026-08-22  
> 禁止：把 10% 写成库内门槛；把 Budget 当 Forecast；下周全周 BAR −15%；用完成率压贡献/品牌底。

```yaml
decision: Do not dump next week's BAR to close a budget gap; revise forecast first; stimulate only if Pace is truly behind
scenario: YTD or next-week revenue/OCC is ~10% (or any %) below budget; GM/owner wants a broad rate cut
required_inputs:
  - which_gap（YTD / 本月 / 下周 Stay Dates — 必须拆开）
  - Budget vs Forecast vs OTB（三套对象；缺则标 Unknown）
  - Pace + Pickup on the dates they want to cut
  - market_weak_or_not
  - user_stated_floor if any
signals_for:
  - gap_is_vs_budget_not_vs_forecast
  - pace_on_or_ahead
  - overlay_or_event_assumption_wrong
  - market_also_weak
  - proposed_across_the_board_cut
signals_against:
  - specific_dates_pace_behind_and_slow_and_market_not_ice_and_channels_open
recommended_action: 预算差 ≠ 预测错 ≠ 全砍。先改 Forecast。真 Behind 的 Stay Date 走围栏 −3–5%，禁止全周一夜 −15%。
risk: 把乐观预算当成需求；砍完量不回来、带毁了、贡献穿底
follow_up: 改后的 Forecast 区间；被点名的 Stay Date 48h Pickup；是否仍有人要「全砍」
confidence: 方向 Medium（混用对象时高）；10% 本身不构成证据
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「预算差了 10% / 完成率不够 / 业主要数字、下周全部降一档」。

**10% 是用户问句，不是触发阈值。** HSMAI Pace to Budget 只定义 `(OTB/Budget)×100`，没有「差 X% 必须刺激」的公开门槛（NV-RS-03）。

不要用：只有一句「预测不准」且对象其实是 Forecast Miss → 先 **P17**。只有竞对砸价 → P16。只有 499 亏不亏 → T19。

---

## 2. 硬门（先不砍）

命中任一 → **不要把下周（或被点名的一串 Stay Date）公开 BAR 全砍**：

1. 缺口是 vs **Budget**，Forecast / Pace 其实 On 或 Ahead → **改预期**  
2. P17：事件 overlay / 曲线假设错 → **先改判断**  
3. 市场也弱 / 事件取消 → 不砸 BAR  
4. 提案是「全周统一 −10%/−15%」而不是按日诊断  
5. 会穿用户声明品牌底（本卡姐妹卡）  
6. 会穿贡献，或成本未知却要已知深折（T19）  
7. 理由叠了排名 FOMO（P35）或跟自杀价（P16）

HSMAI：改 Forecast **不**动奖金；预算 vs 实际**可以**动奖金。所以月中会有人拿预算当刀——顾问要识破激励，不把薪酬压力写成需求死亡。

---

## 3. 何时可以动（仍不是全砍）

须**同时**接近：

- 具体 Stay Date（不是「下周」四个字）  
- Pace Behind 且 Pickup Slow  
- 库存/渠道开着  
- 市场不冰  
- 拟议动作是 **围栏 −3–5%** 或按日 BAR −5–10%，且 ≥ 声明底、净>贡献  

然后按日走 P02 / P08 / P12。**禁止**把预算缺口平均摊到 7 天各砍一刀。

店长要 OCC、收益要 GOP：用这些 Stay Date 的贡献和 Pace 说话，不投票，不拿完成率裁决。

---

## 4. 推荐动作

```text
Window:               <用户说的「下周」拆成 Stay Dates>
Budget gap:           <用户数字；不当门槛>
Forecast:             <区间+首选；若 Unknown 先要>
Pace:                 Ahead / On / Behind / Unknown
Decision:             不全砍。Pace On → Hold + 改 Forecast
Per date if Behind:   围栏 −3–5%；禁止一夜 −15%
Do-not-do:
  - 预算差了就把下周全砍
  - 把 Budget 改名叫 Forecast 再追
  - 为完成率穿品牌底 / 穿贡献
  - 「适当降一点」覆盖全部日期
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补了按日 Pace，部分日 Behind | 只对那些日评围栏 |
| Forecast 下修后业主仍要砍 | 重复本卡；输出 Watch 而不是第二刀 |
| 发现预算本身含强制增长、无需求依据 | 标预算偏乐观（HSMAI Board **B**）；仍不砍来圆 |

---

## 6. 如果只能再补 3 个

1. 缺口是 YTD、本月还是哪些 Stay Date。  
2. 同窗 Forecast（不是 Budget）+ 同 DTA Pace。  
3. 有没有用户声明的品牌底。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 16:17 | 首版。预算差 ≠ 全砍。10% 非门槛。 |
