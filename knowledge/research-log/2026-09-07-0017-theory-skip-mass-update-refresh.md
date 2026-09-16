# 2026-09-07 00:17 CST · THEORY T07-00 · Mass Update / Daily Rates Replace / Refresh·Update rates deepen → **SKIP**

## 槽

理论/指标小时（00:17 ∈ {0,8,16}）。评估 S06-22 scout 留下的 **MEDIUM leftover**：Mass Update（多预订批量改价）/ Daily Rates Create·Replace·Add/Subtract / Refresh Rate / Update rates on existing reservations（顺带 Non-deduct view / DNR 登记），误读为「批量改了上百笔所以公开 BAR 该跟到批量价」「日历 Replace 成 399 所以新尺就是 399」「Refresh/Update 旧单到低价所以必须继续 dump」「Non-deduct 一扣可售 0 所以假满该涨」，是否应加深既有 **P66** + **P65**（+ P64/P01/P02/P05/P60；Non-deduct → T-Status/P53/P24）。S06-22：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§155 复核 only）。

## 一句话

OPERA Mass Update = 对已选预订批量改 Rate Code / Rate Amount（每批约 ≤100；可勾 Override Rate Code Restrictions）；Daily Rates Pricing Schedule = 按日期段 Create/Replace / Add/Subtract / Delete 做 **mass updates to rate amounts**；Rate Codes 改 schedule/package 后 existing reservation 须 **refreshed**；Daily Details **Refresh Rate**；Protel **Update rates** 把已改 Daily Rates 推到入住前旧单（手改 RBD override 夜可保留）——同属 **batch pricing-schedule or reservation-sync layer**，不是公开 BAR Type，也不是 Pace/需求曲线本身。P66 / P65 / P64 / P01 / P02 / P05 / P60 已覆盖 Situation/Diagnosis/Action；§155 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P66 / P65 / P64 / P01 / P02 / P05 / P60 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「批量改了所以跟价/砸尺」「日历 Replace 成 399 所以新尺」「Refresh 旧单所以继续 dump」「Non-deduct 假满该涨」 | P66 系统/人工改价≠定价权；P65 旧价回写/同步≠必须钉尺；P64 关低开高；P01/P02/P05 真强弱改尺；P60 渠道映射/推送 | **不显著新增必问** |
| **Diagnosis** | Mass Update / Daily Rates Replace = batch schedule or reservation-sync；Refresh/Update = existing-reservation sync；Non-deduct = availability read；DNR = profile flag ≠ 公开 BAR Type | 「批量价表/已订同步层 ≠ 公开尺 / ≠ Pace」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P66 / P65 / P64 → P01/P02/P05 / P60；Non-deduct → T-Status/P53/P24） |
| **Recommended Action** | 移交 P66·P65·P64·P01/P02/P05·P60；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 批量写日历还是批量改已订、是否勾 Override Restrictions、Refresh 是否误伤 Fixed/手改夜、渠道 job 是否只推了部分 interval、Non-deduct 是否被当成物理卖光 | P66/P65 已盯「系统/回写≠尺」；§155 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）** / **T06-16 Fixed/Override（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

## 做了什么

1. 重读 S06-22 + §155 + P66 头三句 / P65 头三句 + T06-16 Fixed/Override skip 门槛
2. curl 复核六页（Mass Update / Daily Rates / Rate Codes / Protel Update rates / Daily Details / Property Availability）均 **200**（size≈27291 / 40360 / 190621 / 10825 / 40073 / 29419）
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P66 / P65 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§155 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Updating Multiple Reservation (Mass Update) | curl 200 size≈27291；批量改 Rate Code/Amount；每批≤100；可 Override Rate Code Restrictions |
| **复核** | OPERA Cloud 26.2 Configuring Daily Rates Pricing Schedule | curl 200 size≈40360；Create/Replace · Add/Subtract · Delete mass updates to rate amounts |
| **复核** | OPERA Cloud 26.2 Configuring Rate Codes | curl 200 size≈190621；改 schedule/package 后 existing reservation 须 refreshed |
| **复核** | Protel Air · Update rates | curl 200 size≈10825；Update rates 推到入住前旧单；RBD override 夜可保留 |
| **复核** | OPERA Cloud 26.2 Updating Reservation Daily Details | curl 200 size≈40073；Refresh Rate tip；Fixed 可钉 |
| **复核** | OPERA Cloud 26.2 Property Availability | curl 200 size≈29419；Available Rooms with Non-deduct 等 View Options |
| **指针** | §155 S06-22 | 不当本小时新发现 |
| **NV** | 华住批量改价·Refresh SOP / 默认批量条数 / Daily Rates 最大天数 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-07。

## 兼容

与近三轮 S06-22 / R06-20 / C06-18 / T06-16 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P66/P65/P64/P01–P87 正文三句；华住批量改价·Refresh Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「批量 Mass Update / 日历 Replace 成 399 / Refresh·Update 旧单 / Non-deduct 假满所以砸或涨公开尺」→ **仍** Diagnose 走 **P66**（系统/批量改价≠定价权）/ **P65**（旧价回写/同步≠必须）/ **P64**（关低开高）/ **P01/P02/P05**（真强弱）/ **P60**（渠道推送）；Non-deduct → **T-Status/P53/P24**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-07 02:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；**P66/P65 Mass Update/Refresh deepen 本小时 skip**；C06-18 已写；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-20 已写；S06-22 scout-only；T06-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Mass Update / Refresh 误读专拍 Simulation（闸仍 P66/P65，类似 C06-18），≠ 开新剧、≠ 推翻 skip。
