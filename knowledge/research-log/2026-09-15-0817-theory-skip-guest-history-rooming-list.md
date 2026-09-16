# 2026-09-15 08:17 CST · THEORY T15-08 · Guest History·past ADR / Rooming List / Post It·Passerby deepen → **SKIP**

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。评估 S15-06 scout 留下的 **MEDIUM leftover**：Guest History / Profile Stay Statistics / past ADR（「回头客历史 ADR 低所以今晚 BAR→399 / 画像 Stay ADR 就是公开尺」）/ Rooming Lists / Block name lists（「名单没齐所以假空砍尺 / 团名名单=需求死」）/ Passerby·Post It·Fast Post（「辅项过账流水高所以涨 / 低所以砸」），误读为 Pace 证据或公开 BAR rewrite，是否应加深既有 **P08/P45/P01**（+ P48/P26）+ **P52/P53/P10**（+ P30/P31）+ **P69/P87**（± P82/P78）+ **P63/P67**（Task Sheet 邻）。S15-06：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§166 复核 only）。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

OPERA Stay Statistics / Future·Past Stays / Profile Production ADR / Cloudbeds Stays / Clock Guest Profiles = **profile history / stay-stat layer**（历史 ADR / 档案住史 ≠ 今夜公开灵活 BAR）；About/Creating Rooming Lists / Cloudbeds Manage Rooming Lists / Clock Import Rooming Lists = **block name-list pickup / ops layer** ≠ Pace ≠ 公开尺；Post It / Fast Post / Passerby folio = **ancillary posting / passer-by settlement layer** ≠ 房晚 BAR。P08/P45/P01 + P52/P53/P10 + P69/P87 已覆盖 Situation/Diagnosis/Action；§166 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「历史 ADR 低所以 BAR→399」「画像 Stay ADR 就是今晚公开尺」「团名单没齐所以假空砍尺」「Post It/迷你吧流水低所以砸尺 / 高所以涨」 | P08 Pace；P45 早会三拍；P01 高需；P48/P26 锚价误读；P52 cutoff/wash；P53 Definite·Tentative；P10 团评估；P69 包价辅项；P87 服务补偿 | **不显著新增必问** |
| **Diagnosis** | Guest History/past ADR = profile history / stay-stat；Rooming List = block name-list pickup；Post It/Passerby = ancillary posting ≠ Pace ≠ 公开 BAR | 「档案历史/团名单作业/辅项过账 ≠ Pace / ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P08/P45/P01 · P52/P53/P10 · P69/P87） |
| **Recommended Action** | 移交 P08·P45·P01·P52·P53·P10·P69·P87；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 档案 ADR 是否含非房收/passer-by；Rooming List 是否只扣 block 配额；Post It 是否辅项码 | 邻剧已盯「Pace/早会/高需/团名单/辅项≠尺」；§166 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）** / **T06-08 Queue（skip）** / **T06-16 Fixed/Override（skip）** / **T07-00 Mass Update/Refresh（skip）** / **T07-08 RTC/Day Type（skip）** / **T14-16 House Count（skip）** / **T15-00 Room Condition·Night Audit·Market-Source（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。S15-06 HIGH 四件套 **均未齐**（邻剧覆盖改尺过程）→ 与 skip 一致。

## 做了什么

1. 重读 S15-06 + §166 + T15-00 / T14-16 skip 门槛 + P08 / P45 / P52 邻闸
2. curl 复核八页（Stay Statistics / Future·Past Stays / Profile Production ADR / Cloudbeds Stays / About Rooming Lists / Creating via Rooming List / Cloudbeds Manage Rooming Lists / Post It）均 **200**，size 与 §166 一致
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P08 / P45 / P52 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§166 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Viewing Profile History Stay and Revenue Statistics | curl 200 size≈23856；Stay Statistics / 历史 ADR ≠ Pace ≠ BAR |
| **复核** | OPERA Cloud 26.2 Viewing Profile Future and Past Stays | curl 200 size≈9520；档案住史列表 ≠ Pace |
| **复核** | OPERA Cloud 26.2 Profile Production Statistics Report | curl 200 size≈24414；档案产能 ADR ≠ 公开灵活尺 |
| **复核** | Cloudbeds · Stays tab inside the Guest Profile | curl 200 size≈66306；画像住史 ≠ rewrite |
| **复核** | OPERA Cloud 26.2 About Rooming Lists | curl 200 size≈42517；名单作业 ≠ 公开尺 |
| **复核** | OPERA Cloud 26.2 Creating Reservation Using the Rooming List | curl 200 size≈35468；pickup ≠ dump 令 |
| **复核** | Cloudbeds · How to Manage Rooming Lists | curl 200 size≈100324；名单工具 ≠ Pace |
| **复核** | OPERA Cloud 26.2 Charging Purchases Using Post It | curl 200 size≈25766；辅项过账 / Passerby ≠ 房晚 BAR |
| **指针** | §166 S15-06 | 不当本小时新发现 |
| **NV** | 华住住史·名单·过账 SOP / 默认历史 ADR 窗口 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-15。

## 兼容

与近轮 S15-06 / R15-04 / C15-02 / T15-00 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P08/P45/P52/P01–P87 正文三句；华住住史·名单·过账 Fact；默认历史 ADR 窗口；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「回头客历史 ADR 低所以 BAR→399 / 画像 Stay ADR 就是今晚公开尺 / 团名单没齐所以假空砍尺 / Post It·迷你吧流水低所以砸尺」→ **仍** Diagnose 走 **P08/P45/P01**（+ P48/P26）/ **P52/P53/P10** / **P69/P87**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-15 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen 本小时 skip**；C15-02 已写；R15-04 已写；S14-22 / S15-06 scout-only；T15-00 / T14-16 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Guest History / Rooming List / Post It 误读专拍 Simulation（闸仍 P08/P45/P01 · P52/P53/P10 · P69/P87），≠ 开新剧、≠ 推翻 skip。
