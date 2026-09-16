# 2026-09-15 16:17 CST · THEORY T15-16 · Room Move / Discount Reasons / Post Stay·Open Folio deepen → **SKIP**

## 槽

理论/指标小时（16:17 ∈ {0,8,16}）。评估 S15-14 scout 留下的 **MEDIUM leftover**：Room Move / Scheduled Room Moves / Room Move Reasons（「换房·降级多所以砸尺 / 前台升房·换房多所以涨 BAR」）/ Manual Discount / Discount Reasons（「打折码多所以市场要 399 / Discount Reason 就是公开尺」）/ Late Charges / Post Stay·Open Folio（「离店后过账多所以砸尺」），误读为 Pace 证据或公开 BAR rewrite，是否应加深既有 **P61/P49/P45**（+ P37/P13）+ **P87/P42**（+ P48/P26/P80）+ **P69/P87**。S15-14：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§169 复核 only）。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

OPERA Moving In House / Scheduled Room Moves / Room Move Reasons / Cloudbeds Override 保价 / Clock Booking Room Change / Stayntouch Move Without Rate Change = **front-desk room-change / RTC ops layer**（换房作业 / Update RTC 可选 / 保价换房 ≠ Pace ≠ 公开灵活 BAR）；Discount Reasons / Rate Code Discount / Stay Details Discount Amount·%·Reason = **reservation discount-reason layer** ≠ 公开 BAR Type；Post Stay Charging / Open Folio = **post-departure posting privilege layer** ≠ 房晚公开尺。P61/P49/P45 + P87/P42 + P69/P87 已覆盖 Situation/Diagnosis/Action；§169 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「换房/降级多所以 BAR→399」「升房·换房多所以涨尺」「打折码多所以市场要 399 / Discount Reason 就是公开尺」「Open Folio / Late Charge 多所以砸尺」 | P61 付费升/RTC；P49 免费升；P45 早会；P87 服务补偿折扣；P42 前台跟 dump；P48/P26/P80 协议/员工；P69 包价辅项/晚账 | **不显著新增必问** |
| **Diagnosis** | Room Move = front-desk room-change / RTC ops；Discount Reasons = reservation discount-reason；Open Folio = post-departure posting ≠ Pace ≠ 公开 BAR | 「换房作业/折扣原因码/离店后过账 ≠ Pace / ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P61/P49/P45 · P87/P42 · P69/P87） |
| **Recommended Action** | 移交 P61·P49·P45·P87·P42·P69；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | Room Move 是否只改房号/是否 Update RTC；Discount Reason 是否单笔 eligible；Open Folio 是否仅离店后过账窗 | 邻剧已盯「升房/补偿/前台跟 dump/晚账≠尺」；§169 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）** / **T06-16 Fixed/Override（skip）** / **T07-00 Mass Update/Refresh（skip）** / **T07-08 RTC/Day Type（skip）** / **T14-16 House Count（skip）** / **T15-00 Room Condition·Night Audit·Market-Source（skip）** / **T15-08 Guest History·Rooming List·Post It（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。S15-14 HIGH 四件套 **均未齐**（邻剧覆盖改尺过程）→ 与 skip 一致。

## 做了什么

1. 重读 S15-14 + §169 + T15-08 / T15-00 skip 门槛 + P61 / P87 / P42 邻闸
2. curl 复核八页（Moving In House / Scheduled Room Moves / Room Move Reasons / Cloudbeds FAQ Override / Clock Room Change / Stayntouch RN Room Move / Discount Reasons / Open Folio）均 **200**，size 与 §169 一致（Clock 373760≈373758）
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P61 / P87 / P42 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§169 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Moving an In House Reservation | curl 200 size≈19146；Room Move / Update RTC 可选 ≠ Pace ≠ BAR |
| **复核** | OPERA Cloud 26.2 Managing Scheduled Room Moves | curl 200 size≈14427；日程换房 ≠ dump 令 |
| **复核** | OPERA Cloud 26.2 Configuring Room Move Reasons | curl 200 size≈9544；换房原因码 ≠ 公开尺 |
| **复核** | Cloudbeds · Reservations FAQ（move without price change） | curl 200 size≈82762；Override 保价换房 ≠ 市场 399 |
| **复核** | Clock PMS+ · Booking Room Change | curl 200 size≈373760；换房作业 ≠ rewrite |
| **复核** | Stayntouch · Release Notes v1.8 Room Move | curl 200 size≈43386；Move Without Rate Change ≠ BAR Type |
| **复核** | OPERA Cloud 26.2 Configuring Discount Reasons | curl 200 size≈15572；ERR/WALK/RG/MGMT ≠ 公开灵活尺 |
| **复核** | OPERA Cloud 26.2 Using Post Stay Charging and Open Folio | curl 200 size≈13993；离店后过账特权 ≠ Pace |
| **指针** | §169 S15-14 | 不当本小时新发现 |
| **NV** | 华住换房·折扣原因·晚账 SOP / 默认折扣% / 699 | **仍 NV。不编。** |

Last Verified：2026-09-15。

## 兼容

与近轮 S15-14 / R15-12 / C15-10 / T15-08 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P61/P87/P42/P01–P87 正文三句；华住换房·折扣原因·晚账 Fact；默认折扣%；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「换房/降级多所以 BAR→399 / 升房·换房多所以涨尺 / 打折码多所以市场要 399 / Discount Reason 就是公开尺 / Open Folio·Late Charge 多所以砸尺」→ **仍** Diagnose 走 **P61/P49/P45**（+ P37/P13）/ **P87/P42**（+ P48/P26/P80）/ **P69/P87**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-15 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（Guest History·Rooming List·Post It deepen **skip**；**C15-10 已写**；**R15-12 已写**；**S15-14 scout-only**；**P61/P87/P42 Room Move·Discount Reasons·Open Folio deepen 本小时 skip**；Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Room Move / Discount Reasons / Open Folio 误读专拍 Simulation（闸仍 P61/P49/P45 · P87/P42 · P69/P87），≠ 开新剧、≠ 推翻 skip。
