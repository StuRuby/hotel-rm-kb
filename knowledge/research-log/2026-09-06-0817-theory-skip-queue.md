# 2026-09-06 08:17 CST · THEORY T06-08 · Queue / Pending / Rush / Room Is Ready deepen → **SKIP**

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。评估 S06-06 scout 留下的 **MEDIUM leftover**：Queue Rooms / Pending / Rush / Room Is Ready，误读为「大堂排队很长所以假满该涨」「Pending/Queued 一堆说明卖不动该砍 BAR」「rush 很凶所以今夜该 +15%」，是否应加深既有 **P63** + **P67**（+ P37/P43/P03/P05）。S06-06：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。

## 一句话

OPERA Queue = 到客已分房/房型未 ready（仍 occupied 或 Dirty）时的**前台·HK 周转入队**（Clean/Inspected 后完成入住；Priority / rush SMS）；Stayntouch QUEUED / HotelKey Pending = **已到等清洁/检查**；Cloudbeds Room Is Ready = Vacant & Clean/Inspected 才通知——同属 **check-in readiness / turnover layer**，不是公开 BAR Type，也不是 Pace/需求曲线本身。P63 / P67 / P37 / P43 已覆盖 Situation/Diagnosis/Action；§149 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P63 / P67 / P37 / P43 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「排队很长所以假满该涨」「Pending 一堆所以砸」「rush 凶所以 +15%」 | P63 Dirty/未检≠可交；P67 延退/早到周转窗；P37 可售分母；P43 口头拒单/拥堵≠涨 | **不显著新增必问** |
| **Diagnosis** | Queue / Pending / Rush / Room Is Ready = check-in readiness / HK turnover ≠ 公开 BAR Type | 「到店作业层 ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P63 / P67 / P37 / P43 → P03/P05） |
| **Recommended Action** | 移交 P63（Dirty/产能）· P67（延退/早到）· P37（可售分母）· P43（拥堵/拒单≠涨）· P03/P05（真强弱）；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 排队是 Dirty 周转还是真无房、Pending 是否已分房、Room Is Ready 是否已 Vacant&Clean/Inspected、是否误把大堂压力写成门市/BAR 永久改写 | P63/P67 已盯 Dirty/周转；§149 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）** / **T06-00 DNM（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

## 做了什么

1. 重读 S06-06 + §149 + P63 头三句 / Dirty≠可交 + P67 延退周转 + P37 / P43 + T06-00/T05-16/T05-08 skip 门槛
2. WebFetch + curl 复核：OPERA Managing Reservation Queue Status（+ 其余五页 curl）
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P63 / P67 文末指针记 skip（三句 / 399 / 799 不改）；P37 / P43 文末指针可选
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§149 复核 only）

## 源核（本小时 WebFetch + curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Reservation Queue Status | 打开成功；到客分房未 ready（occupied/Dirty）→ Place on Queue；Clean/Inspected 后入住；Wait Time / Priority；SMS rush HK + 通知客人。curl 200 size≈17899 |
| **复核** | OPERA Cloud 26.2 PWA Queue Rooms | curl 200 size≈12812；HK 移动端 Queue；Prioritize / Remove / Change Room |
| **复核** | OPERA 5.6 Queue Rush Rooms | curl 200 size≈20957；Housekeeping Queue Rush；Dirty/Pick Up/Clean；Text Msg |
| **复核** | Stayntouch Queued Rooms Functionality | curl 200 size≈38413；须先分房；PUT IN QUEUE → QUEUED；ROOM READY AUTO CHECK-IN / NOTIFICATION |
| **复核** | HotelKey Pending Rooms Report | curl 200 size≈45958；Pending=已到等清洁/检查；Urgent、等待时长 |
| **复核** | Cloudbeds Guest Experience Automated Messages（Room Is Ready） | curl 200 size≈90525；Vacant & Clean/Inspected 才通知 |
| **指针** | §149 S06-06 | 不当本小时新发现 |
| **NV** | 华住排队·rush SOP / 平均等待分钟 / 默认 rush 阈值 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-06。

## 兼容

与近三轮 S06-06 / R06-04 / C06-02 / T06-00 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P63/P67/P37/P43/P01–P87 正文三句；华住排队·rush Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「排队/Pending/rush 很长所以砸或涨公开尺」→ **仍** Diagnose 走 **P63**（Dirty/产能）/ **P67**（延退/早到周转）/ **P37**（可售分母）/ **P43**（拥堵/拒单≠涨）；真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-06 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；**P63/P67 Queue deepen 本小时 skip**；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-04 已写；S06-06 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Queue/Pending 误读专拍 Simulation（闸仍 P63/P67，类似 C06-02），≠ 开新剧、≠ 推翻 skip。
