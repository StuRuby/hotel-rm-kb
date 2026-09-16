# 2026-09-05 08:17 CST · THEORY T05-08 · OOS vs OOO deepen → **SKIP**

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。评估 S05-06 scout 留下的 **MEDIUM leftover**：Out of Service (OOS/OS) vs Out of Order (OOO/OO) 分母误读，是否应加深既有 **P37** + **T06**。S05-06：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。

## 一句话

OPERA Cloud 钉死 OO 剔除库存、OS 仍留库存可分配；与 T06 已有 Stayntouch OOS≠OOO / Forward STAR「OOS 仍计」同属分母轴，不是新诊断闸。P37/T06 已覆盖 Situation/Diagnosis/Action；§140 只加固 Watch → **theory-skip**。


## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P37 / T06 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「停用房很多所以 OCC 假满要涨 / 假空要砍」「OOS 跟 OOO 一样扣可售所以 dump」 | P37 形 A/B 已覆盖假高峰/假剩余；T06 §5 已写 OOS 不从 availability 扣（Stayntouch）+ Forward OOS 仍计 | **不显著新增必问** |
| **Diagnosis** | OOS ≠ OOO；库存状态 ≠ 公开 BAR Type | 「先拆分母再动尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P37 / T06） |
| **Recommended Action** | 移交 P37→P03/P05；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | 报表是 OO 还是 OS、分母扣不扣、Unit Status Deduct Inventory | P37 已问 OOO/不可售与 PMS Available 是否扣；§140 OPERA 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T04-16 Soft/Hard（skip）** / **T05-00 Rate Strategy（skip）**：只给已有轴换 Vendor 标签。本候选 **没有新轴**。

Sales Allowance / Group Ceiling / Item Sell Control / Agency 本小时不另开评估：S05-06 已判邻剧覆盖。

## 做了什么

1. 重读 S05-06 + §140 + P37 头三句 + T06 §5 + T05-00/T04-16 skip 门槛
2. WebFetch 复核三页：Configuring OO/OS Reasons（OO removed / OS remain）；Managing OOS（not removed）；Managing OOO（removed）
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P37 / T06 指针一行记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§140 复核 only）

## 源核（本小时 WebFetch 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Configuring Out of Order and Out of Service Reasons | 打开成功；OO removed；OS remain；100% OCC = Inventory − OO |
| **复核** | OPERA Cloud 26.2 Managing Out of Service Rooms | 打开成功；OOS not removed；available to assign |
| **复核** | OPERA Cloud 26.2 Managing Out of Order Rooms | 打开成功；OOO removed；不可分配 |
| **指针** | Sales Allowance / Group Ceiling / Item Inventory（§140） | 不当本小时 deepen 对象 |
| **指针** | Stayntouch OOO/OOS/OOI + Forward STAR OOS 仍计（T06 既有） | 与 OPERA OO/OS 同轴 |
| **NV** | 华住 OO·OS 字段名 / Unit Status SOP / 默认维修间夜 / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 S05-06 / R05-04 / C05-02 / T05-00 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P37/T06/P01–P87 正文三句；华住 OO·OS Fact；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「停用/维修房很多 OCC 好看要涨」「OOS 跟 OOO 一样所以 dump」→ **仍** Diagnose 走 **P37**（+ **T06**）；真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-05 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；**P37/T06 OOS vs OOO deepen 本小时 skip**；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
