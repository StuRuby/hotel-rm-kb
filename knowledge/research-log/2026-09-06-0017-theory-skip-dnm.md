# 2026-09-06 00:17 CST · THEORY T06-00 · Do Not Move / Locked·Unassigned / Waitlist deepen → **SKIP**

## 槽

理论/指标小时（00:17 ∈ {0,8,16}）。评估 S05-22 scout 留下的 **MEDIUM leftover**：Do Not Move（DNM）/ 预分房锁 · Cloudbeds Locked units / Unassigned · Waitlist 候补堆，误读为「很多房 DNM/锁着所以可售假低 → dump BAR」「未分房一堆说明卖不动」「候补很长所以该涨 / 该砸」，是否应加深既有 **P37** + **P13**（+ P63/P43/P24/P03/P05）。S05-22：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。

## 一句话

OPERA DNM = 已分房后的**换房锁**（至 check-in；权限可解；in-house 自动消；锁符号标状态）；Cloudbeds Locked / Unassigned = **分房作业摩擦**（挂锁不能 Auto Assign；空档断裂 / Blocked·OOS / 他类超售可挡新分房）；Waitlist = 满房/Sell Limit/指定房型或价码不可售时的**未确认状态**（Accept 才进 Look to Book）。三者同属 **assignment-control / unconfirmed-status layer**，不是公开 BAR Type，也不是需求曲线本身。P37 / P13 / P63 / P43 / P24 已覆盖 Situation/Diagnosis/Action；§146 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P37 / P13 / P63 / P43 / P24 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「DNM/挂锁很多所以假空该砍」「未分房一堆说明卖不动」「候补排很长所以该涨 / 该砸」 | P37 B 假剩余已拆「空着含锁」；P13 分型挤压；P63 Dirty≠OOO；P43 口头拒单/未确认≠涨；P24 Sell Limit 满≠Walk | **不显著新增必问** |
| **Diagnosis** | DNM / Calendar lock = assignment-control；Waitlist = unconfirmed status ≠ 公开 BAR Type | 「分母/可售闸 / 未确认状态 ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P37 / P13 / P63 / P43 → P03/P05） |
| **Recommended Action** | 移交 P37（可售/分母）· P13（房型）· P63（Dirty/产能）· P43（拒单/候补≠涨）· P24（真 Sell Limit）· P03/P05（真强弱）；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | DNM 单笔 vs 批量、锁是否到 check-in 消、未分房原因、候补是否已 Accept、是否误把分房屏写成门市/BAR 永久改写 | P37/P43 已盯锁房/拒单；§146 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）** / **T05-08 OOS vs OOO（skip）** / **T05-16 Sell Limit（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

## 做了什么

1. 重读 S05-22 + §146 + P37 头三句 / B 假剩余（锁）+ P13 / P63 / P43 + T05-16/T05-08/T05-00/T04-16 skip 门槛
2. WebFetch + curl 复核三页：OPERA Managing DNM；Cloudbeds Unassigned；OPERA Waitlist
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P37 修订一行 + 文末指针记 skip（三句 / 399 / 799 不改）；P13 / P63 / P43 文末指针可选
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§146 复核 only）

## 源核（本小时 WebFetch + curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Reservation Do Not Move Room Status | 打开成功；已分房 Mark DNM 防再分配；至 check-in；Do Not Move Room 任务权限可改派；in-house 消；锁符号；Advanced Daily Details 可对未来房段标 DNM。curl 200 size≈10237 |
| **复核** | Cloudbeds · Find and handle unassigned reservations | 打开成功；有可售仍可未分房；Locked padlock 不能 Auto Assign；Blocked/OOS/courtesy hold 跳过；他类超售可挡新分房。curl 200 size≈97781 |
| **复核** | OPERA Cloud 26.2 Managing Waitlist Reservations | 打开成功；满房 / Sell Limits / 指定房型或价码不可售 → Waitlist；Accept→Look to Book；EOD 离店后两日清。curl 200 size≈9243 |
| **指针** | §123 Waitlist·Pseudo / §142 Blocking / HK Board（§146） | 不当本小时新发现 |
| **NV** | 华住 DNM·预分房·候补 SOP / 候补转化率 / 默认锁房数 / 699 | **仍 NV。不编。** |

Last Verified：2026-09-06。

## 兼容

与近三轮 S05-22 / R05-20 / C05-18 / T05-16 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P37/P13/P63/P43/P01–P87 正文三句；华住 DNM·候补 Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「DNM/挂锁很多所以砍」「未分房一堆所以 BAR→399」「候补很长所以涨 / 砸」→ **仍** Diagnose 走 **P37**（可售/分母，锁≠可砸空房）/ **P13**（房型）/ **P63**（Dirty/产能）/ **P43**（未确认拒单≠涨）/ **P24**（真 Sell Limit 满）；真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-06 02:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；**P37/P13 DNM deepen 本小时 skip**；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R05-20 已写；S05-22 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 DNM/分房锁误读专拍 Simulation（闸仍 P37/P13，类似 C05-18），≠ 开新剧、≠ 推翻 skip。
