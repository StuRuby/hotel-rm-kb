# 2026-09-03 16:17 CST · THEORY T03-16 · T-Rack

## 槽

理论/指标小时（16:17 ∈ {0,8,16}）。加深 S03-14 scout 候选 **Rack / 门市 vs public BAR** → **T-Rack**（slug `rack-vs-bar`；ID T03-16），镜像 T-Restriction←P33+P40/P21 / T-Component←P13+P37 / T-Floor←T20 / T-Tax←P79。**≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 过程仍 **P01**（high-demand / public BAR）+ **P64**（nested rate class）+ handoff **T-Floor**。S03-14 scout-only 已开 §127 HSMAI Rack + BAR replaced Rack + Protel Rack；本小时升核/复核。S03-14 说 Rack/门市 四件套 fail for NEW playbook 因邻 P64/P01/T-Floor 覆盖 — **不阻挡** 理论加深（同 T-Restriction after S03-06）。**不开 P88。不开 P89。** 不写新剧本 / 决策卡 / 轻指标 / Simulation。systems/*.md **无变**。不发布。不 git commit。

## 一句话

Rack / 门市·挂牌·牌价是年/季房型参考基准，不是改写公开灵活 BAR 到 399 的许可证；BAR replaced Rack 作为动态公开尺，不是「旧门市该砸穿」；HSMAI Rack + BAR replaced Rack + Protel Rack type ≠ 定价权；Ahead Hold 779–799 首选 799；拒 BAR→399；过程仍 P01 + P64（+ T-Floor）；不开 P88。

## 做了什么

1. 写 `theory/rack-vs-bar.md`（T-Rack / T03-16；形 A–F）
2. P01 / P64 / T-Floor / problem-tree **文末一行**理论指针（三句 / 399 / 799 / 邻卡正文 **不改**）
3. 源表 §128
4. progress / README §8.4（下一槽 18:17 case；提及 T-Rack + S03-14）/ backlog / BACKLOG 头
5. **不开 P88**；**不开 P89**；不另开 playbook / 决策卡 / 轻指标 / Simulation 文件
6. 不重写 T-Floor / T-Restriction / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句
7. Blackout / Yieldable / Seasonal / Children 不当本卡核（S03-14 leftover 一行 handoff only → T-Corp / T-Extra）

## 源核

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **升核/复核** | HSMAI Rack rate | curl 200 size≈676578 |
| **升核/复核** | HSMAI BAR glossary | curl 200 size≈364877 |
| **升核/复核** | HSMAI Best Available Rate | curl 200 size≈363013 |
| **升核/复核** | Protel Air Advanced pricing（Rack type） | curl 200 size≈67987 |
| **指针** | OPERA Cloud 26.2 About Best Available Rates | curl 200 size≈8714 |
| **C 登记指针** | Lighthouse rack-rate-definition（§127） | 不当 A 核；本小时未再升 |
| **C 指针** | AltexSoft hotel-rates（§69/§127） | 不当 A 核 |
| **失败/NV** | 华住门市/Rack SOP；默认门市→BAR %；699 Fact；Walk $；佣金% | **仍 NV。不编。** |
| **不当核** | Blackout/Yieldable/Seasonal/Children（§127 FAIL） | 本卡不当核 |

## 兼容

与近三轮 S03-14 scout-only / T-Restriction / C03-10 **无真矛盾**，无 needs_revision。S03-14 说 Rack/门市 四件套 fail for NEW playbook 因 P64/P01/T-Floor 覆盖 — **不阻挡** 理论加深（同 T-Restriction←S03-06 / T-Tax←P79 / T-Floor←T20 / T-Component←P13+P37）。T-Restriction / C03-10 三句 / 399 / 799 / 不发明 699 原样。T-Rack ≠ T-Floor ≠ T-Restriction ≠ T-Corp ≠ T-Component ≠ T-Tax ≠ T-Hurdle。假尺子族加入 T-Rack。

## 刻意不补

**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T-Floor / T-Restriction / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句；重写 P01–P87 正文（仅文末）；华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；remote_claim / claim_task；hotel-ai-knowledge。

## 顾问可用性

用户说「门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿」→ Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；门市字段/华住 SOP/默认门市→BAR % NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 门市基准层；Diagnosis 写 Rack/门市不是公开 BAR；Recommended Action 拆尺 + Hold（Ahead 夜门市不被允许改公开 BAR；嵌套→P64；地板→T-Floor）；What To Watch 公开 BAR 是否仍 Hold、嵌套是否先关、是否误入地板。

## Notify

**YES**（callable theory card drafted）。

## 下一槽

**2026-09-03 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
