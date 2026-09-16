# 2026-09-06 16:17 CST · THEORY T06-16 · Fixed Rate / Rate Amount Override / Discount Reason / Force Availability deepen → **SKIP**

## 槽

理论/指标小时（16:17 ∈ {0,8,16}）。评估 S06-14 scout 留下的 **MEDIUM leftover**：Fixed Rate / Rate Amount Override / Discount Reason / Force Availability（顺带 Shares/Accompanying），误读为「Fixed/override 很多所以公开 BAR 该跟到 override 价」「override 一堆说明卖不动该砍」「强制开了不可售码所以新尺 399」「两笔 share OCC 翻倍该涨 / 分账均价脏该砍」，是否应加深既有 **P66** + **P65**（+ P87/P80/P71/P24/P33/P78/P69/P01/P64）。S06-14：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§152 复核 only）。

## 一句话

OPERA Fixed Rate / Daily Details Rate Amount = **单笔预订**显式 override 码价并钉住；Discount Amount/% + Reason = 单笔折扣审计；Block Rate Override Reasons = **团块房图**改价原因码；RoomKey/RMS Base Rate Override = 授权单笔改金额（可绕过动态价表，可 Reset）；HotelKey Force Availability / Allow Overbooking = **强制可用性/超售闸**（仍可改每晚价 + Override Reason）——同属 **reservation-level amount / availability-force layer**，不是公开 BAR Type，也不是 Pace/需求曲线本身。P66 / P65 / P87 / P24 / P33 / P78 / P69 已覆盖 Situation/Diagnosis/Action；§152 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P66 / P65 / P87 / P24 / P33 / P78 / P69 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「Fixed/override 多所以跟价/砸尺」「Force 开了不可售码所以新尺 399」「share 分账均价脏该砍」 | P66 RMS/系统建议≠定价权；P65 旧价回写≠必须；P87 folio 补偿≠尺；P24/P33 超售/限制闸；P78/P69 加人/套餐≠尺；P01/P64 Ahead/嵌套 | **不显著新增必问** |
| **Diagnosis** | Fixed / Amount Override / Discount Reason = reservation-level amount；Force = availability force / OB gate；Shares = same-room billing ≠ 公开 BAR Type | 「单笔改价层 / 强制闸 / 分账机械 ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P66 / P65 / P87 → P24/P33 / P78/P69 / P01/P64） |
| **Recommended Action** | 移交 P66·P65·P87·P80/P71·P24/P33·P78/P69·P01/P64；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | override 是单笔还是团块 Grid、是否 Fixed、Discount Reason 是否审计、Force 是否只开码不开尺、Share 是分账还是 Accompanying、是否误把单笔改价条数写成门市/BAR 永久改写 | P66/P65 已盯「系统/回写≠尺」；§152 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

## 做了什么

1. 重读 S06-14 + §152 + P66 头三句 / P65 头三句 + T06-08/T06-00/T05-16 skip 门槛
2. WebFetch OPERA 5.6 Fixed Rates + curl 复核六页（Fixed Rates / Daily Details / Rate Override Reasons / RoomKey Override / RMS Override / HotelKey Force）均 200
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P66 / P65 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§152 复核 only）

## 源核（本小时 WebFetch + curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA 5.6 Fixed Rates | 打开成功；显式 override 码价金额（例 200→175）并勾 Fixed；Discount+Reason 可挂；再手改清空 Discount。curl 200 size≈20520 |
| **复核** | OPERA Cloud 26.2 Updating Reservation Daily Details | curl 200 size≈40073；Rate Amount 可 override；Fixed Rate 钉住；Discount Amount/% + Reason |
| **复核** | OPERA Cloud 26.2 Configuring Rate Override Reasons | curl 200 size≈9864；Block Room Grid Rate Override 原因码 |
| **复核** | RoomKeyPMS How to Override a Rate | curl 200 size≈40172；Enable Override + Reason；改金额保留 Client Type/Market |
| **复核** | RMS Cloud Reservation Base Rate Override | curl 200 size≈94282；绕过 Dynamic Pricing；可 Reset |
| **复核** | HotelKey Force Availability and Allow Overbooking | curl 200 size≈46543；Force Availability + Allow OB + Rate Override Reason |
| **指针** | §152 S06-14 | 不当本小时新发现 |
| **NV** | 华住改价·分账 SOP / 默认 override 频率 / Share 分账常模 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-06。

## 兼容

与近三轮 S06-14 / R06-12 / C06-10 / T06-08 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P66/P65/P87/P24/P33/P78/P69/P01–P87 正文三句；华住改价·分账 Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「Fixed/override/强制开码/share 分账所以砸或涨公开尺」→ **仍** Diagnose 走 **P66**（系统/单笔改价≠定价权）/ **P65**（旧价回写≠必须）/ **P87**（folio 补偿≠尺）/ **P24/P33**（强制可用性/超售/限制）/ **P78/P69**（加人/套餐≠尺）/ **P01/P64**（Ahead/嵌套）；真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-06 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；**P66/P65 Fixed/Override deepen 本小时 skip**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-14 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Fixed/Override 误读专拍 Simulation（闸仍 P66/P65，类似 C06-10），≠ 开新剧、≠ 推翻 skip。
