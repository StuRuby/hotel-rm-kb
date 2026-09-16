# 2026-09-02 10:17 CST · CASE C02-10 · tax-display Simulation

## 槽

案例小时（10:17）。T02-08 已写 T-Tax（过程仍 P79；08:17 声明 Simulation 指针复用 all-in sim、不另开）。本小时判定：**all-in sim 只部分覆盖税展示戏剧**（费核 / OTA 总价贵 / 服务费吓跑），T-Tax 用户句（裸价才是真 BAR / 含税太贵 BAR→399 / 城市税当地板 / Inclusive 勾了公开尺就该改完 / ADR 被税读脏所以 dump / CITY_TAX Package 就是新 BAR）需要专卷。**开税展示 Simulation，不开 P88。**

## 一句话

含税展示 / CITY_TAX 包是过账对齐不是公开 BAR；新 callable 仿真 `cases/sim-2026-tax-display-city-tax-sat.md`：Diagnose 走 T-Tax、过程仍 P79、Hold 779–799 首选 799、拒 399。

## 做了什么

1. 写 `cases/sim-2026-tax-display-city-tax-sat.md`（C02-10；含 compact 顾问十段）
2. T-Tax 配套行：新 sim + sibling all-in（原「指针复用，不另开」改指向；正文三句 / 399 / 799 不改）
3. P79 / 主卡 / problem-tree §86：指针 only
4. 源表 §113：CASE 指针，升核/复述 §111/§112，不造新 URL
5. progress / README §8.4 / BACKLOG 头 / backlog
6. **不开 P88 / P89**；不写新剧本 / 决策卡 / 轻指标 / 问题树新枝

## 为什么不是 P88

T-Tax 已 drafted；过程已有 P79。本小时是 **callable Simulation**，不是新剧本。四件套仍未齐 **for NEW playbook**：

| 候选 | 本小时 | 邻覆盖 |
| --- | --- | --- |
| BAR ladder / Rate Groups | **fail for NEW playbook** | P64 + OPERA BAR Rate Groups（§111）= 分组/Best 显示 ≠ dump |
| Promo stacking | **fail for NEW playbook** | P18 / P73 / P74 / P76 + OPERA Promotion Codes（§111） |
| LOS Tiered | **fail for NEW playbook** | P41 / P40 / P76 / P21 + OPERA Tiered Rate Codes（§111） |
| 税展示 / CITY_TAX（本卷对象） | 已有 T-Tax + P79；本小时只补 **sim** | 不升成 P88 |

## 源核（curl-verify 既有 §112 URL；不造新页）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **指针/复核** | Cloudbeds Taxes Inclusive/Exclusive（§111 打开 / §112 升核） | curl **200** size≈82924 |
| **指针/复核** | OPERA Rate Codes Tax (Generate) Inclusive（§111/§112） | curl **200** size≈198854 |
| **指针/复核** | OPERA City Tax Package Function（§111/§112） | curl **200** size≈25115 |
| **指针/复核** | Apaleo Distribution: Local Charges（§112 新开） | curl **200** size≈30599 |
| **指针/复核** | HSMAI BAR glossary（§67/§111/§112） | curl **200** size≈364877 |

无新 URL。无 China 税率 Fact。Vendor % 不当中国 Fact。

## 顾问可用性

用户说「裸价才是真 BAR / 含税太贵所以 BAR→399 / 城市税当地板 / Inclusive 勾了公开尺就该改完 / ADR 被税读脏所以 dump / CITY_TAX Package 就是新 BAR」→ Diagnose 走 **T-Tax**，过程仍 **P79**，仿真走本卷。Hold 779–799 首选 799；拒 399。**Notify YES**（新 callable case）。

## 刻意不补

**P88**；**P89**；新剧本；决策卡；轻指标；问题树新枝；Pet/AAA；smoking/damage FEE；重写 P01–P87 正文三句 / 399 / 799；华住含税 SOP；税率 Fact；开票税率；Vendor % China Fact；systems/*.md；optimization-advise 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

## 下一槽

**2026-09-02 12:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为「下一轮要写」— 已 drafted。** 仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
