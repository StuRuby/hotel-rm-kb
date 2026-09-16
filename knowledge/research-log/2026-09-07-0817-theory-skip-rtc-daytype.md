# 2026-09-07 08:17 CST · THEORY T07-08 · RTC / Day Types / Membership Auto Discount deepen → **SKIP**

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。评估 S07-06 scout 留下的 **MEDIUM leftover**：Room Type to Charge（库存房型 vs 计费房型）/ Day Types·Property Calendar（日历 Multiplier/Adder；OTA 不同步）/ Membership Auto Discounting（TX/Article 过账折扣，排除 rate code postings），误读为「升到套房所以套房假满该涨 / RTC 价当地板所以公开尺跟到 RTC」「日历 Day Type 乘了 0.9 所以新公开尺是 399 / 日历红了所以必须 dump」「会员交易折扣很多所以市场差该砍 BAR」，是否应加深既有 **P61** + **P49** + **P06/P07/P01** + **P64** + **P66** + **P60** + **P23** + **P87**（± P13/P34/P47）。S07-06：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§158 复核 only）。

## 一句话

OPERA RTC = 预订可 **inventoried on one room type and charged as if of another**（同码升房路径常见）；Day Type = 日历上对合格 rate code 做 Multiplier/Adder **不必新建 pricing schedule**，且官方注 **OTAs and other external systems do not support day type rate adjustments**；Membership Auto Discount = TX/Article 自动折扣，且 **Rate code postings（含 packages、deposits、debit/credit folios）excluded**——同属 **inventory-vs-charge / calendar temporary ± / TX posting credit** 层，不是公开 BAR Type，也不是 Pace/需求曲线本身。P61 / P49 / P06/P07/P01 / P64 / P66 / P60 / P23 / P87 已覆盖 Situation/Diagnosis/Action；§158 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「升了所以涨/砍尺」「日历乘完所以新尺/OTA 该跟」「会员 TX 折扣多所以 dump」 | P61 付费升；P49 免费/会员升；P06/P07/P01 事件真需求；P64 关低开高；P66 系统输出≠定价权；P60 渠道映射；P23 会员 vs 公开；P87 folio 减免 | **不显著新增必问** |
| **Diagnosis** | RTC = inventory-vs-charge room-type；Day Type = calendar temporary ±（渠道不同步）；Membership Auto Discount = TX posting credit（排除 rate postings）≠ 公开 BAR | 「升房计费/日历加减/过账折扣 ≠ 公开尺 / ≠ Pace」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P61/P49/P06·P66…） |
| **Recommended Action** | 移交 P61·P49·P06/P07/P01·P64·P66·P60·P23·P87；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 问的是 Rm Type 还是 RTC、付费 vs 免费升、Day Type 是否只影响店内合格码、会员折扣是 TX 还是 rate posting | 邻剧已盯「升房/日历/系统≠尺」；§158 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）** / **T06-16 Fixed/Override（skip）** / **T07-00 Mass Update/Refresh（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

## 做了什么

1. 重读 S07-06 + §158 + P61 头三句 / P49 头三句 / P66 头三句 + T07-00 Mass Update skip 门槛
2. curl 复核六页（Controls Reservations RTC / OPERA 5.6 RTC / Controls Rate Mgmt DAY TYPES / Configuring Day Types / Property Calendar / Membership Auto Discounting）均 **200**
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P61 / P49 / P66 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§158 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Controls — Reservations（ROOM TYPE TO CHARGE） | curl 200 size≈153703；inventoried on one, charged as another |
| **复核** | OPERA 5.6 ROOM TYPE TO CHARGE Application Setting | curl 200 size≈13699；同码升房路径 |
| **复核** | OPERA Cloud 26.2 Controls — Rate Management（DAY TYPES） | curl 200 size≈96281；日历加减；OTAs/external 不支持 day type 调整 |
| **复核** | OPERA Cloud 22.5 Creating and Copying Day Types | curl 200 size≈44584（§158 记 ≈12172；壳页变大仍 200，不当新发现） |
| **复核** | OPERA Cloud 26.2 Using the Property Calendar | curl 200 size≈21056；Events vs Day Types 分列 |
| **复核** | OPERA Cloud 26.2 About Membership Auto Discounting | curl 200 size≈7694；TX/Article；Rate code postings excluded |
| **指针** | §158 S07-06 | 不当本小时新发现 |
| **NV** | 华住 RTC·升房·Day Type·会员 TX 折扣 SOP / 默认 Multiplier / 699 | **仍 NV。不编。** |

Last Verified：2026-09-07。

## 兼容

与近三轮 S07-06 / R07-04 / C07-02 / T07-00 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P61/P49/P66/P06/P01–P87 正文三句；华住 RTC·Day Type Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「升到套房所以套房假满该涨 / RTC 价当地板 / 日历 Day Type 乘完所以公开尺钉死或 dump / 会员 TX 折扣多所以砍 BAR」→ **仍** Diagnose 走 **P61**（付费升）/ **P49**（免费·会员升）/ **P06/P07/P01**（事件真需求）/ **P64**（关低开高）/ **P66**（系统输出≠定价权）/ **P60**（渠道推送）/ **P23**（会员 vs 公开）/ **P87**（folio 减免）。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-07 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；**P61/P49/P06/P66 RTC/Day Type deepen 本小时 skip**；C07-02 已写；R07-04 已写；S07-06 scout-only；T07-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 RTC / Day Type 误读专拍 Simulation（闸仍 P61/P49/P06/P66，类似 C07-02），≠ 开新剧、≠ 推翻 skip。
