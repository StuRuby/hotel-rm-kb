# 2026-09-05 00:17 CST · THEORY T05-00 · Rate Strategy / Occupancy-triggered auto deepen → **SKIP**

## 槽

理论/指标小时（00:17 ∈ {0,8,16}）。评估 S04-22 scout 留下的 **MEDIUM leftover**：Rate Strategy / Occupancy-triggered auto close·open / Occupancy-based auto ±amount / PIE 预载弱市降，是否应加深既有 **P66**（系统建议≠定价权）+ **P33**（限制≠砍尺），镜像 S03-22→T-Window 路径。S04-22 明确：「可评估加深；**若不能显著改变 Situation/Diagnosis/Action/Watch，不写**」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡 / 新剧本 / 决策卡 / 轻指标 / Simulation。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。

## 一句话

Rate Strategy / OCC-triggered rule 只是把已有杠杆（关档/LOS 限制、日价 ±amount、系统输出）自动化；P66/P33/P64/P37/P01/P05 已覆盖 Situation/Diagnosis/Action；§137 Manual vs Auto / revert / OCC 含 Sell Limits·OOO 只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有 P66 / P33 / P64 / P37 是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「OCC 到 65% 系统关了折扣档所以砍 BAR」「PIE 自动降了 5% 所以新尺就是它」「策略按 Sell Limit 算 OCC 满了要涨」 | P66 形 A/C 已覆盖「系统说 dump / 别跟系统对着干」；P33 已覆盖关档/LOS；P64 关低开高；P37 分母/OOO | **不显著新增必问** |
| **Diagnosis** | Auto rule = 限制调度或日价调度层 ≠ 需求曲线 ≠ 永久公开 BAR Type | 「系统输出≠定价权」「限制≠砍尺」已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P66 + P33，必要时 +P64/P37） |
| **Recommended Action** | 移交 P66/P33/P64/P37/P01/P05；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | Manual vs Auto、counter/revert、OCC% 是否含 Sell Limits/OOO/blocked、自动降后 24h Pickup | P66 已问是否自动推价；P37 已问 OOO 分母；§137 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增「下单日轴 vs 住期轴」诊断闸 + 命名反直觉事故面 + 独立 Diagnose 路由。对照 **T04-16 Soft/Hard（skip）**：只给已有轴换口语标签 + Vendor 证据。本候选 **没有新轴**——自动化的是已覆盖的限制/日价/系统输出层，不是新的顾问过程枝。

## 做了什么

1. 重读 S04-22 scout + §137 五行源 + P66 头三句 + T04-16 skip 门槛 + T-Window 写卡门槛
2. curl 复核五页均 **200**：OPERA Cloud Rate Strategies size≈18104；OPERA 5.6 OBP ≈13373；Rate Strategy Setup ≈48702；Cloudbeds PIE occupancy ≈92903；PIE Rules ≈89252（与 §137 一致）
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P66 修订表 **一行**记 skip（三句 / 399 / 799 **不改**）
5. **不开** 新 theory slug（不写 T-Rate-Strategy / T-OCC-Auto）；**不**重开 P88/P89
6. source-map：**无新 §**（§137 已承载；本小时仅复核）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Configuring Rate Strategies | 200 size≈18104；OCC% / Times Sold 自动 set restrictions；Consider Sell Limits / OOO |
| **复核** | OPERA 5.6 OCCUPANCY BASED PRICING | 200 size≈13373；可按 OCC increase/decrease amounts |
| **复核** | OPERA 5.6 Rate Strategy Setup | 200 size≈48702；阶梯 ±$ 例；counter condition；Vendor $ **NOT China Fact** |
| **复核** | Cloudbeds PIE occupancy-based rules | 200 size≈92903；manual/auto + revert |
| **复核** | Cloudbeds PIE Rules and Alerts | 200 size≈89252；预载 ±10%/−5% **NOT China Fact** |
| **指针** | Cloudbeds PIE Restriction-based（§137 登记） | only loosen；never set closed → P33 |
| **FAIL 指针** | Apaleo rate-plans 猜链 | §137 **404**；第三家未取到 |
| **NV** | 华住 Rate Strategy / OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 **S04-22 scout-only** / **R04-20** / **C04-02**：**无真矛盾**。S04-22 说四件套未齐、邻剧覆盖 → 本小时确认邻覆盖成立且 deepen **不**过「显著改变调用」门槛。T-Window 两轴分离公式原样。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡 / Rate-Strategy 专 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P33 / P64 / P01–P87 正文三句；华住 OCC 自动规则 SOP；默认阈值%/降幅% Fact；699 Fact；Vendor %/$ China Fact；systems/*.md；here.now publish；git commit；操作用户机器。

## 顾问可用性

用户说「OCC 到了系统关了折扣档要砍 BAR」「PIE 自动降了所以新尺就是它」「策略按假 OCC 涨」→ **仍** Diagnose 走 **P66**（系统输出≠定价权）+ **P33**（关档是限制）± **P64/P37**；真 Ahead/Behind 才 **P01/P05**。Ahead Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-05 02:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen 16:17 skip；**P66 Rate Strategy deepen 本小时 skip**；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
