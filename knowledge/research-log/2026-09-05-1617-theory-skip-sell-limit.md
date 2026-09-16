# 2026-09-05 16:17 CST · THEORY T05-16 · Sell Limit / Channel Sell Limit / Managed OB deepen → **SKIP**

## 槽

理论/指标小时（16:17 ∈ {0,8,16}）。评估 S05-14 scout 留下的 **MEDIUM leftover**：House/RT Sell Limits · Channel Sell Limits · Apaleo Managed Overbooking（正/负）误读为「可售到顶=需求死了该 dump」或「负 Sell Limit / Allowed OB 调了=公开 BAR 该砍」，是否应加深既有 **P24** + **P33**（+ P58/P37/P03/P05）。S05-14：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。

## 一句话

OPERA Sell Limit = 物理房 ± Sell Control Rooms（正超售加卖 / 负 under-book 减卖）；Channel Sell Limit = 渠道×房型×日可售上限；Apaleo Allowed Overbooking = 手工 ± 可售、不改物理库存。三者同属 **inventory sell-control layer**，不是公开 BAR Type，也不是需求曲线本身。P24 / overbooking-framework / inventory-control / P33 / P58 已覆盖 Situation/Diagnosis/Action；§143 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P24 / P33 / P58 / framework 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「Sell Limit 到顶了所以砍 BAR」「负 Sell Limit 说明卖不动」「美团额度满了全店砸」「Allowed OB 调了新尺就是 399」 | P24 X1 已排除「某渠道配额满≠Walk」；P33 限制/可售闸≠砍尺；P58 切房桶≠公开需求；framework 已写 Sell Limit 是系统能力不是建议额度 | **不显著新增必问** |
| **Diagnosis** | Sell Limit / Channel Sell Limit / Allowed OB = 可售数量闸 ≠ 公开 BAR Type | 「可售闸 ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P24 / P33 / P58 → P03/P05） |
| **Recommended Action** | 移交 P24（已超/Walk）· P33（闸误挡先松）· P58（切房）· P35/P60（曝光）· P37（分母）· P03/P05（真强弱）；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | House vs 房型、正/负/零、单渠限额、Allowed vs Possible OB、调闸后 24h Pickup | P24 已盯 Sell Limit/停超；§143 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

Unconstrained Demand 本小时不另开评估：S05-14 已判邻 **P43** 覆盖。

## 做了什么

1. 重读 S05-14 + §143 + P24 头三句 / X1 + overbooking-framework + inventory-control Sell Limit 注 + T05-08/T05-00/T04-16 skip 门槛
2. WebFetch + curl 复核三页：OPERA Managing Sell Limits；Managing Channel Sell Limits；Apaleo Managed Overbooking
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P24 修订一行 + 文末指针记 skip（三句 / 399 / 799 不改）；P33 / overbooking-framework 文末指针可选
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§143 复核 only）

## 源核（本小时 WebFetch + curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Sell Limits | 打开成功；Sell Limit = inventory + Sell Control Rooms；正=overbook（补取消/noshow）；负=under-book；零可插区间内单日；curl 200 size≈15536 |
| **复核** | OPERA Cloud 26.2 Managing Channel Sell Limits | 打开成功；Channel × Channel Room Type × 日期 Number of Rooms；curl 200 size≈10785 |
| **复核** | Apaleo Help · Managed Overbooking | 打开成功；Allowed OB = 手工 ± 可售、不改物理库存；可正可负；Possible OB = 计算警告；curl 200 size≈24110 |
| **指针** | §119 / §38 / §137 Consider Sell Limits / Protel OB / HSMAI Unconstrained（§143） | 不当本小时新发现 |
| **NV** | 华住 Sell Limit·渠道额度 SOP / 默认超售垫 / 渠道% / Walk $ / 699 | **仍 NV。不编。** |

Last Verified：2026-09-05。

## 兼容

与近三轮 S05-14 / R05-12 / C05-10 / T05-08 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P24/P33/P58/P01–P87 正文三句；华住 Sell Limit Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「Sell Limit 到顶了所以砍」「负 Sell Limit / Allowed OB 调了所以 BAR→399」「美团额度满了全店砸」→ **仍** Diagnose 走 **P24**（已超/Walk 程序）/ **P33**（可售闸误挡先松，不砍尺）/ **P58**（切房桶）/ **P37**（分母）；真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-05 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；**P24/P33 Sell Limit deepen 本小时 skip**；C05-10 已写；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Sell Limit 误读专拍 Simulation（闸仍 P24/P33，类似 C05-10），≠ 开新剧、≠ 推翻 skip。
