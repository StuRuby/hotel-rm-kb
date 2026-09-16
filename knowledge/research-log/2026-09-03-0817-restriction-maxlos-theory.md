# 2026-09-03 08:17 CST · THEORY T03-08 · T-Restriction

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。加深 S03-06 scout 候选 **CTD / MaxLOS / CTA restriction layer vs public BAR** → **T-Restriction**（slug `restriction-maxlos-ctd-vs-bar`；ID T03-08），镜像 T-Component←P13+P37 / T-Floor←T20 / T-Tax←P79。**≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。** 过程仍 **P33**（restriction-overuse）+ handoff **P40** / **P21**。S03-06 scout-only 已开 §123 HSMAI MaxLOS/CTA + OPERA Restrictions；本小时升核 + 非 OPERA 用途升核（Apaleo/Clock/eCornell IMPACT/Lighthouse）。S03-06 说 CTD/MaxLOS 四件套 fail for NEW playbook 因邻 P33/P40/P21 覆盖 — **不阻挡** 理论加深。**不开 P88。不开 P89。** 不写新剧本 / 决策卡 / 轻指标 / Simulation。systems/*.md **无变**。不发布。不 git commit。

## 一句话

MaxLOS / CTD / CTA / Closed-for-Departure 是 restriction / inventory-control 层（谁能订哪个到达/LOS），不是改写公开灵活 BAR 到 399 的许可证；过度限制 → 先松限制（P33），不要 dump BAR；OPERA Restrictions + HSMAI MaxLOS/CTA + Apaleo/Clock Rate Restrictions ≠ 定价权；Ahead Hold 779–799 首选 799；拒 BAR→399；过程仍 P33（+ P40/P21）；不开 P88。

## 做了什么

1. 写 `theory/restriction-maxlos-ctd-vs-bar.md`（T-Restriction / T03-08；形 A–F）
2. P33 / P40 / P21 / do-not-cut-when-restricted / restriction-framework / problem-tree **文末一行**理论指针（三句 / 399 / 799 / framework 正文 **不改**）
3. 源表 §124
4. progress / README §8.4（下一槽 10:17 case；提及 T-Restriction + S03-06）/ backlog / BACKLOG 头
5. **不开 P88**；**不开 P89**；不另开 playbook / 决策卡 / 轻指标 / Simulation 文件
6. 不重写 T-Floor / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句
7. Waitlist / Pseudo 不当本卡核（S03-06 leftover 一行 handoff only）

## 源核

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **升核** | HSMAI Maximum Length of Stay | curl 200 size≈339541 |
| **升核** | HSMAI Closed to Arrival | curl 200 size≈338070 |
| **升核** | OPERA Cloud 26.2 Restrictions | curl 200 size≈16429 |
| **升核** | OPERA Cloud 26.2 Managing Restrictions | curl 200 size≈46209 |
| **指针升核** | HSMAI BAR glossary | curl 200 size≈364877 |
| **指针** | HSMAI Minimum Length of Stay | curl 200 size≈361977；不当第三核主核 |
| **指针** | IDeaS Hotel Glossary Max LOS hub | curl 200 size≈103874 |
| **用途升核** | Apaleo Rate Plans（§107） | curl 200 size≈29748；Min/Max LOS/CTA/CTD ≠ dump |
| **用途升核** | Clock Rate Restrictions（§118） | curl 200 size≈390474 |
| **用途升核** | eCornell IMPACT Dos and Don'ts of LOS（既有） | curl 200 size≈51591 |
| **用途升核** | Lighthouse Guide to hotel stay restrictions（既有） | curl 200 size≈229251 |
| **同族指针** | HotelKey Set Restrictions on Rate Plans | curl 200 size≈37607；不当第三核 |
| **失败** | HSMAI closed-to-departure / closed-for-departure glossary | **FAIL 404** size≈125941 / ≈125943；不当新核 |

## 兼容

与近三轮 S03-06 scout-only / R03-04 / T-Component / C03-02 **无真矛盾**，无 needs_revision。S03-06 说 CTD/MaxLOS 四件套 fail for NEW playbook 因 P33/P40/P21 覆盖 — **不阻挡** 理论加深（同 T-Tax←P79 / T-Floor←T20 / T-Component←P13+P37）。T-Component / C03-02 三句 / 399 / 799 / 不发明 699 原样。T-Restriction ≠ T-Floor ≠ T-Component ≠ T-Tax ≠ T-Hurdle。假尺子族加入 T-Restriction。

## 刻意不补

**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T-Floor / T-Component / T-Tax / T20 / optimization-advice / restriction-framework 正文三句；重写 P01–P87 正文（仅文末）；华住 MaxLOS·CTD SOP；默认限制常模；候补转化率；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；remote_claim / claim_task；hotel-ai-knowledge。

## 顾问可用性

用户说「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / 限制开着 OCC 假低所以 BAR→399」→ Diagnose 走 **T-Restriction**，过程仍 **P33**（+ **P40** / **P21**）。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；限制常模/华住 SOP NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 限制层；Diagnosis 写 MaxLOS/CTD/CTA 不是公开 BAR；Recommended Action 拆尺 + Hold（Ahead 夜限制层不被允许改公开 BAR；过度→先松）；What To Watch 公开 BAR 是否仍 Hold、限制是否先松、Peak/肩日是否分看。

## Notify

**YES**（callable theory card drafted）。

## 下一槽

**2026-09-03 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
