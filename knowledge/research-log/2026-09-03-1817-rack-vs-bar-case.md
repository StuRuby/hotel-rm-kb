# 2026-09-03 18:17 CST · CASE C03-18 · rack-vs-bar Simulation

## 槽

案例小时（18:17 ∈ {2,10,18}）。T03-16 已写 T-Rack（过程仍 P01 + P64 + T-Floor handoff；16:17 短例在理论卡 §9、声明「无本小时 Simulation 文件」）。本小时判定：**理论卡短例不够 callable**；T-Rack 用户句（门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿 / 门市虚高所以 BAR→399）需要专卷。**开 Rack/门市 vs BAR Simulation，不开 P88。**

## 一句话

Rack / 门市·挂牌·牌价是年/季参考基准，不是公开 BAR；新 callable 仿真 `cases/sim-2026-rack-vs-bar-sat.md`：Diagnose 走 T-Rack、过程仍 P01 + P64（+ T-Floor）、Hold 779–799 首选 799、拒 399、不发明 699。

## 做了什么

1. 写 `cases/sim-2026-rack-vs-bar-sat.md`（C03-18；含 compact 顾问十段）
2. T-Rack 配套行：新 sim（原「无本小时 Simulation 文件」改指向；正文三句 / 399 / 799 不改）
3. P01 / P64 / T-Floor / problem-tree：指针 only
4. 源表 §129：CASE 指针，升核/复述 §128，不造新 URL
5. progress / README §8.4 / BACKLOG 头 / backlog
6. **不开 P88 / P89**；不写新剧本 / 决策卡 / 轻指标 / 问题树新枝

## 为什么不是 P88

T-Rack 已 drafted；过程已有 P01 + P64（+ T-Floor）。本小时是 **callable Simulation**，不是新剧本。S03-14 四件套仍未齐 **for NEW playbook**：

| 候选 | 本小时 | 邻覆盖 |
| --- | --- | --- |
| Rack / 门市（本卷对象） | 已有 T-Rack + P01/P64/T-Floor；本小时只补 **sim** | 不升成 P88 |
| Blackout / Yieldable / Seasonal / Children | **fail for NEW playbook** | T-Corp / T-Extra；§127 FAIL |
| Pet/AAA | **仍停车** | — |
| Smoking/damage FEE | **仍 MEDIUM/LOW** | — |

## 源核（curl-verify 既有 §128 URL；不造新页）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **指针/复核** | HSMAI Academy · Rack rate（§127/§128） | curl **200** size≈676578 |
| **指针/复核** | HSMAI Academy · BAR glossary（§67/§127/§128） | curl **200** size≈364877 |
| **指针/复核** | HSMAI Academy · Best Available Rate（§127/§128） | curl **200** size≈363013 |
| **指针/复核** | Protel Air · Advanced pricing（Rack type；§127/§128） | curl **200** size≈67987 |
| **指针/复核** | OPERA Cloud 26.2 · About Best Available Rates（§115/§127/§128） | curl **200** size≈8714 |
| **C 指针** | Lighthouse rack-rate-definition（§127） | 不当 A 核；本小时未再升 |
| **FAIL 同 §127** | HSMAI blackout/yieldable/seasonal/children glossary | **404**；不当新核 |

无新 URL。无华住门市·Rack SOP。无默认门市→BAR %。无 699 Fact。Vendor 例不当中国 Fact。Blackout/Yieldable/Seasonal/Children 仍 §127 FAIL 不当新核。

## 顾问可用性

用户说「门市价就是市场价 / 牌价虚高所以砍到 399 / 跟门市对齐 / Rack 屏就是公开价 / BAR replaced Rack 所以旧门市该砸穿 / 门市虚高所以 BAR→399」→ Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**），仿真走本卷。Hold 779–799 首选 799；拒 399；不发明 699。**Notify YES**（新 callable case）。

## 刻意不补

**P88**；**P89**；新剧本；决策卡；轻指标；问题树新枝；Pet/AAA；smoking/damage FEE；重写 P01–P87 正文三句 / 399 / 799；华住门市·Rack SOP；默认门市→BAR %；699 Fact；Vendor China Fact；Walk $；佣金%；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；hotel-ai-knowledge / claim_task。

## 下一槽

**2026-09-03 20:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** 仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
