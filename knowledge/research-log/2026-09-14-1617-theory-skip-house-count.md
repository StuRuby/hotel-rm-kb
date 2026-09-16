# 2026-09-14 16:17 CST · THEORY T14-16 · House Count / Room Assignment / No Post·Advance·Interim deepen → **SKIP**

## 槽

理论/指标小时（16:17 ∈ {0,8,16}）。评估 S14-14 scout 留下的 **MEDIUM leftover**：House Count / Expected Arrivals·Departures·Stayover（「今天到店少 / House Status 软所以砸 BAR」）/ Room Assignment·Batch Pre-assign·Hold·DNM（「预分房冻住所以假满涨/砍」）/ No Post·Advance Bill·Interim Folio·Credit Limit Overage（「No Post 多所以砍 / Advance 先过所以涨」），误读为 Pace 证据或公开 BAR rewrite，是否应加深既有 **P45** + **P08/P09** + **P01/P02/P05** + **P37** + **P52/P53/P54** + **P63/P67** + **P86/P87/P55** + **P71/P48/P26/P23**。S14-14：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§160 复核 only）。Missed slots 2026-09-07 12:17–2026-09-14 14:17 **不回填**。

## 一句话

OPERA House Status / HK Forecast / Res·HK Reports / HotelKey House Inventory / Cloudbeds Dashboard = **same-day operational tally / movement report**（Arrivals Expected、Departures Expected、Stayovers、expected OCC）≠ Pace/Pickup ≠ 公开 BAR；Assign Room / Batch Room Assignment / Hold / DNM = **rooming layer** ≠ BAR；No Post / Advance Bill / Interim Folio / Credit Limit Overage = **posting privilege / settlement layer** ≠ BAR。P45 / P08/P09 / P01/P02/P05 / P37 / P52–P54 / P63/P67 / P86/P87/P55 / P71/P48/P26/P23 已覆盖 Situation/Diagnosis/Action；§160 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「到店少所以 BAR→399」「House Status 软所以需求死」「预分房冻了所以假满」「No Post/Advance 说明该改尺」 | P45 早会三拍（回 Remaining+Pace）；P08/P09 Pace；P01/P02/P05；P37 OCC 分母；P52–P54 库存/未到；P63/P67 分房摩擦；P86/P87/P55 过账/担保；P71/P48/P26/P23 合同价 | **不显著新增必问** |
| **Diagnosis** | House Count = same-day movement tally；Assignment = rooming/hold/DNM；No Post·Advance·Interim = posting/settlement ≠ Pace ≠ 公开 BAR | 「运营盘点/分房/过账闸 ≠ Pace / ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P45/P08/P37…） |
| **Recommended Action** | 移交 P45·P08/P09·P01/P02/P05·P37·P52–P54·P63/P67·P86/P87/P55·P71…；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 问的是 Arrivals Expected 还是 Pace、分房是否只是 Hold/DNM、No Post 是否信用失败自动勾、Advance 是否只是预过账 | 邻剧已盯「早报/分母/Pace/过账≠尺」；§160 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）** / **T06-16 Fixed/Override（skip）** / **T07-00 Mass Update/Refresh（skip）** / **T07-08 RTC/Day Type（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。S14-14 HIGH 四件套 **均未齐**（邻剧覆盖改尺过程）→ 与 skip 一致。

## 做了什么

1. 重读 S14-14 + §160 + T07-08 skip 门槛 + P45 头三句 / P08 头 / P37 头
2. curl 复核八页（House Status / HK Forecast / Res Reports / Assign Room / Batch Assignment / Payment Instructions / Charges Adj / Credit Limit Overage）均 **200**，size 与 §160 一致
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P45 / P08 / P37 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§160 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA 5.6 House Status (Shift+F3) | curl 200 size≈39311；Arrivals/Departures Expected、Stayovers ≠ Pace ≠ BAR |
| **复核** | OPERA Cloud 26.2 Forecasting Housekeeping Services | curl 200 size≈12421；HK OCC/Arrival/Stayover/Departure ≠ 定价尺 |
| **复核** | OPERA Cloud 26.2 Reservations Reports | curl 200 size≈12506；projected arrivals & departures ≠ dump 令 |
| **复核** | OPERA Cloud 26.2 Assigning a Room to a Reservation | curl 200 size≈12755；Assign / DNM / Hold ≠ rewrite |
| **复核** | OPERA Cloud 26.2 Using Batch Room Assignment | curl 200 size≈24066；批量预分 + DNM mark ≠ 库存死 / ≠ BAR |
| **复核** | OPERA Cloud 26.2 Managing Reservation Payment Instructions | curl 200 size≈30218；No Post / Credit Limit Auto Pay ≠ BAR |
| **复核** | OPERA Cloud 26.2 Charges Adjustment and Payments | curl 200 size≈158811；Interim Folio / Advance Bill ≠ 公开尺 |
| **复核** | OPERA Cloud 26.2 Credit Card Limit Overage Processing | curl 200 size≈8539；超限失败可自动勾 No Post ≠ dump |
| **指针** | §160 S14-14 | 不当本小时新发现 |
| **NV** | 华住早报·分房·No Post SOP / 默认到店转化 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-14。

## 兼容

与近轮 S14-14 / C07-10 / T07-08 skip / S07-06：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P45/P08/P37/P01–P87 正文三句；华住早报·分房·No Post Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「今天到店少所以 BAR→399 / House Status 软所以需求死 / 预分房冻了所以假满要涨或砍 / No Post·Advance Bill 说明该改尺」→ **仍** Diagnose 走 **P45**（早会三拍）/ **P08/P09**（Pace）/ **P01/P02/P05** / **P37**（OCC 分母）/ **P52–P54** / **P63/P67** / **P86/P87/P55** / **P71…**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-14 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen 本小时 skip**；C07-10 已写；S14-14 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 House Count / Assignment / No Post 误读专拍 Simulation（闸仍 P45/P08/P09/P37…），≠ 开新剧、≠ 推翻 skip。
