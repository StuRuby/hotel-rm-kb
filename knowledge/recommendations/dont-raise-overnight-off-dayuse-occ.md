# Decision Card: Don't Raise Overnight Off Day-use OCC（钟点抬高的 OCC → 不自动涨过夜）

> 资产：Advisor Decision Card（短）  
> 路径：`recommendations/dont-raise-overnight-off-dayuse-occ.md`  
> 对应：用户原话「OCC 已经 108%，今晚是不是该再涨？」；8 个点是钟点同日再卖  
> 剧本：P44 `advisor-playbooks/day-use-hourly.md`（不重写）  
> 理论：`theory/day-use-inventory.md`  
> 交叉：P01 / P03 Remaining:=过夜可售 / P37 缩分母 ≠ 本卡胀分子 / P44 高峰关钟点  
> 状态：active · 2026-08-24 08:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；STR 同日再卖 OCC>100% = S；USALI Day-Use 不进 Sold = A 更正（与 STR 分子冲突，不发明调和）  
> Last Verified：2026-08-24  
> 禁止：按 108% 自动 Increase 过夜 BAR；一夜 ±15%；编 199/美团 SOP/保洁分钟；第二本剧本。

```yaml
decision: Recompute overnight OCC and Remaining; do not Increase overnight BAR off day-use-inflated OCC (including OCC>100% from same-day resale)
scenario: OCC already 108 percent, should we raise tonight; eight points are day-use rooms resold at night
required_inputs:
  - stay_date
  - reported_occ_and_whether_dayuse_in_sold
  - overnight_sold
  - overnight_remaining_sellable
  - pace_pickup_whether_ahead
signals_for:
  - occ_over_100_or_jumped_after_dayuse
  - user_asks_raise_because_occ_108
  - mix_adr_moved_with_hourly_product
  - mpi_vs_str_comp_one_side_includes_dayuse
signals_against:
  - overnight_remaining_tight_and_pace_ahead_after_recompute (then P01/P03)
  - occ_pretty_because_ooo_not_dayuse (then P37)
  - blocking_hourly_on_peak (then P44 close/cap, still do not rewrite overnight BAR to hourly)
recommended_action: 拆过夜 Sold vs 钟点 extra Sold。重算过夜 OCC 与过夜 Remaining。钟点抬高的 OCC → 不自动涨过夜 BAR。过夜真紧走 P01/P03；钟点挡晚走 P44。不对混口径 MPI。禁一夜 ±15%。
risk: 把二次售出当成更强过夜需求；用混 ADR/OCC 对标后错涨；高峰仍开钟点挡晚到
follow_up: 过夜 Pickup 是否仍正；钟点是否交回；公开过夜 BAR 有没有被改成钟点价
confidence: 能拆分子则方向 Medium；缺拆分数只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「OCC 已经 108%，今晚是不是该再涨？」  
主动词：**重算过夜 OCC / Remaining；不按膨胀 OCC 涨过夜 BAR。**  
不要用：已经拆完、过夜剩余真紧且 Ahead → 直接 P01/P03。好看 OCC 来自维修 → P37。下午钟点火要不要让晚房 → P44 主剧。

过夜涨幅仍走 `pricing/how-much-to-move.md`。本卡只回答 **108% 不是涨过夜的许可证。**

---

## 2. 硬门（先不涨过夜）

命中任一 → **不要**用那张 108% / 混 OCC 去 Increase 过夜 BAR：

1. 分子含 day-use / 同日再卖（STR：OCC 可以 >100%）。先  
   `Overnight OCC = Overnight Sold / Available`  
   `Overnight Remaining = Available_to_sell − Overnight Sold`  
   钟点已交回 → 不从过夜剩余扣。  
2. 用户没给钟点间数。**问，不编 8。** 条件化：若 extra Sold ≈ 0 再按原 OCC 进 P01/P03；若 extra 实质 → 先划掉。  
3. 本店 OCC 含钟点、STR Comp 不含（或反过来）。那几个点 **不作 MPI**，更不当涨价令。  
4. 其实是 OOO 砍分母 → **P37**，不是本卡。

弱平日 + 能交回 → 钟点开不开走 P44 形 D，仍 **不**把钟点价写成过夜 BAR。

---

## 3. 重算之后

| 重算结果 | 动作 |
| --- | --- |
| 过夜 Remaining 厚 | **不涨。** 108% 是钟点抬的 |
| 过夜 Remaining 紧 + Pace Ahead | **P01/P03**：先关低价再决定涨不涨。理由是过夜剩余，不是 108% |
| 钟点还开着且会挡晚到 | **P44** 关或限额。过夜 BAR Hold |
| 有人要把过夜 BAR 改成钟点价 | **拒绝。** T20；禁一夜 −15% |

尺（Hypothesis，与全库带一致）：过夜 **Hold 779–799 首选 799**，除非过夜剩余重算后真进 P03。199 只在 Simulation，不是过夜围栏。

---

## 4. 动作表

```text
Stay Date:
Reported OCC:
Day-use extra Sold（问，不编）:
Overnight Sold / Overnight Remaining:
Decision: Hold 过夜 BAR / 移交 P01·P03 / 移交 P44 关钟点 / 移交 P37
Do-not-do:
  - 按 108% 自动 Increase 过夜 BAR
  - 混口径 MPI
  - 钟点价写成过夜 BAR / 一夜 ±15%
  - 编 199 / 美团 SOP / 保洁分钟
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 08:17 CST | 短卡。OCC 被钟点膨胀 → 重算过夜 OCC/Remaining，再 P01/P03/P44。不重写 P44。 |

---

## 6. 交叉（不改 §1–5）

P44 解释关钟点；本卡解释 **为什么 OCC 撒谎所以不要涨过夜。** P37 缩分母。P03 Remaining := 过夜可售。T19 加一次 HK。T20 199 不是地板。禁止一夜 ±15%。
