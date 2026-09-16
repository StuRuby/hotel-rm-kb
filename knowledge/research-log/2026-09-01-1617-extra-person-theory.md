# 2026-09-01 16:17 CST · THEORY T01-16 · T-Extra

## 槽

理论/指标小时（16:17）。加深 P78 → **T-Extra**（slug `extra-person-vs-bar`），镜像 T-Employee←P80 / T-Service-Recovery←P87 / T-Deposit←P86 / T-Fee←P79。**≠ T-Fee**（强制费/all-in）· **≠ T-Package**（含早套餐）。

## 一句话

Extra Person / Extra Adult·Child / Occupant Threshold / 加床是挂在该笔预订（或 included occupancy 之上）的加项，不是公开灵活 BAR；OPERA Extra Adult/Threshold/Controls + Cloudbeds extra person fee + Apaleo surcharge ≠ 定价权；Ahead Hold 779–799 首选 799；拒 BAR→399。

## 做了什么

1. 写 `theory/extra-person-vs-bar.md`（T-Extra / T01-16）
2. P78 头一行理论指针 + 修订行；三句 / 399-rejected / 799-Hypothesis **不改**
3. 邻卡文末一行：主卡 / 轻指标 / P69 / P76 / P79 / P82 / T-Package / T-Fee / sim / P01 / P05 / P45 / T-Employee（假尺子族加 T-Extra）
4. 源表 §109
5. 问题树 §85 仅 Diagnose 指针（未开新枝）
6. progress / README §8 header + §8.1 P78 + §8.4（下一槽 18:17 case）/ backlog / BACKLOG 头

## 源核

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **新开** | Apaleo Setting up Rate Plans | curl 200 size≈29018；surcharge 加在单人 base 上 ≠ BAR；WebFetch timeout |
| **同族** | Apaleo Setting Prices | curl 200；录入价 = single occupancy |
| **同族** | Apaleo Age Categories (Children Prices) | curl 200；儿童年龄桶 surcharge |
| **补核** | HotelKey Charge Types .ng | curl 200；Extra Adult/Child Price ≠ BAR Type |
| **升核** | OPERA Daily Rates Extra Adult/Child | curl 200 size≈40782；加到该笔预订 |
| **升核** | OPERA About Occupant Threshold Pricing | curl 200 size≈16157；超阈值固定额 |
| **升核** | OPERA Controls Rate Management | curl 200 size≈96652；EXTRA PERSON / THRESHOLD 开关 |
| **升核** | Cloudbeds Extra Person Fees（§108） | curl 200 size≈87348；直销/BE only；OTA 另配；WebFetch timeout |
| **升核** | HSMAI BAR glossary | curl 200；non-qualified publicly available |
| **升核指针** | HFP Net USALI P&L rollaway/cribs | curl 200；ADR READ ≠ rewrite |
| **升核指针** | STR Historical Rollaway bed/Crib rental Include | curl 200；ADR READ |
| **失败** | Mews Occupancy adjustments | curl 200 但是 SPA「Knowledge Base」壳；无 Extra occupancy help 正文；不当核 |

## 兼容

与近三轮 S01-14 scout-only / R01-12 / C01-10 / T-Employee **无真矛盾**，无 needs_revision。S01-14 说 Extra Person 四件套 fail for NEW playbook 因 P78 已存在 — **不阻挡** 理论加深。C01-10 儿童亲子/crib vs P78 不开新剧 — **允许** 理论。P78 leftover 已关（2026-08-30 02:17）。P78 三句原样。T-Extra ≠ T-Fee ≠ T-Package。假尺子族加入 T-Extra。

## 刻意不补

**P88**；**P89**；新剧本；Pet/AAA；smoking/damage FEE；重写 T-Employee / T-Service-Recovery / T-Deposit / T-Fee / T-Package / optimization-advise 正文；重写 P01–P87 正文（仅头/文末）；华住加床 SOP；默认 Extra Person %；儿童费 Fact；Vendor $·€ China Fact；systems/*.md；here.now publish；git commit。

## 顾问可用性

用户说「三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR 砍 BAR / 人数阈值表就是公开价」→ Diagnose 走 **T-Extra**，过程仍 **P78**。三把尺；过程 ≠ 定价权；Hold 779–799 首选 799；拒 399；Extra Person%/儿童费 NV。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：会。Situation 钉三把尺 + Pace + 加项层；Diagnosis 写成加床加项不是公开 BAR；Recommended Action 拆尺 + Hold（Ahead 夜加项不被允许改公开 BAR）；What To Watch 公开 BAR 是否仍 Hold、加项是否仍关在该笔预订。

## 下一槽

**2026-09-01 18:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted。** Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
