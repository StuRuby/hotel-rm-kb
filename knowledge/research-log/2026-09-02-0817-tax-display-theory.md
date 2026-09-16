# 2026-09-02 08:17 CST · THEORY T02-08 · T-Tax

## 槽

理论/指标小时（08:17）。加深 P79 税展示/城市税层 → **T-Tax**（slug `tax-display-city-tax-vs-bar`），镜像 T-Extra←P78 / T-Fee←P79 / T-Employee←P80。**≠ T-Fee**（强制费/Resort/服务费/all-in）· **≠ T-Package**（含早套餐）· **≠ T-Extra**（加床/Occupant Threshold）。过程仍 **P79**。S02-06 scout-only 已开 §111 税源；本小时升核 + 第三人 Vendor Apaleo Local Charges。

## 一句话

Tax Inclusive/Exclusive 展示与 City/Tourism tax（CITY_TAX Package / Local Charges）是展示与过账对齐，不是公开灵活 BAR；Cloudbeds Inclusive/Exclusive + OPERA Tax Inclusive + CITY_TAX Package + Apaleo Local Charges ≠ 定价权；Ahead Hold 779–799 首选 799；拒 BAR→399。

## 做了什么

1. 写 `theory/tax-display-city-tax-vs-bar.md`（T-Tax / T02-08）
2. P79 头一行理论指针 + 修订行；三句 / 399-rejected / 799-Hypothesis **不改**
3. T-Fee 文末一行交叉：T-Tax sibling；过程仍 P79
4. 邻卡可选文末一行：轻指标 / 主卡 / problem-tree §86 / P36 / P05 / P01 / P45
5. 源表 §112
6. progress / README §8.4（下一槽 10:17 case）/ backlog / BACKLOG 头
7. **不开 P88**；不另开 playbook / 决策卡 / 轻指标 / Simulation（复用 P79 sim）

## 源核

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **升核** | Cloudbeds Taxes and Fees overview | curl 200 size≈82924；Inclusive vs Exclusive；OTA 源错配双计/漏计；WebFetch CF 验证页 |
| **升核** | OPERA Rate Codes Tax (Generate) Inclusive | curl 200 size≈198854；勾选=价表含税；不勾=税另过账 |
| **升核** | OPERA City Tax Package Function | curl 200 size≈25115；WebFetch 200 正文；CITY_TAX 挂 Package |
| **升核** | HSMAI BAR glossary | curl 200 size≈364877；non-qualified publicly available |
| **新开** | Apaleo Distribution: Local Charges | curl 200 size≈30599；Included in the rate / on top；Tax Handling；第三人 Vendor |
| **同族** | Apaleo City Tax Management | curl 200 size≈26549；仅一活跃配置；按预订创建时算 |
| **失败** | 猜测 Apaleo Taxes / How-to-set-up-taxes URL | HTTP 404 |
| **失败** | Mews taxes / Managing-taxes | HTTP 404 + SPA Knowledge Base 壳 size≈298049 |
| **失败** | protel sd-taxes.htm | HTTP 404 |

## 兼容

与近三轮 S02-06 scout-only / R02-04 / T-Extra **无真矛盾**，无 needs_revision。S02-06 说税前裸价/City tax 四件套 fail for NEW playbook 因 P79 已覆盖 — **不阻挡** 理论加深（同 T-Extra←P78）。P79 三句原样。T-Tax ≠ T-Fee ≠ T-Package ≠ T-Extra。假尺子族加入 T-Tax。

## 刻意不补

**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T-Fee / T-Extra / T-Package / optimization-advise 正文；重写 P01–P87 正文（仅头/文末）；华住含税 SOP；税率 Fact；开票税率；Vendor % China Fact；systems/*.md；here.now publish；git commit；remote_claim / claim_task。

## 顾问可用性

用户说「裸价才是真 BAR / 含税太贵所以 BAR→399 / 城市税当地板 / 税率脏了 ADR 所以 dump」→ Diagnose 走 **T-Tax**，过程仍 **P79**。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；税率 NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 税层；Diagnosis 写成税展示/城市税包不是公开 BAR；Recommended Action 拆尺 + Hold（Ahead 夜税层不被允许改公开 BAR）；What To Watch 公开 BAR 是否仍 Hold、税是否仍关在税表/包、OTA 源是否对齐。

## 下一槽

**2026-09-02 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Tax / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Fee / P79 列为「下一轮要写」— 已 drafted。** Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
