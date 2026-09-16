# 2026-09-02 18:17 CST · CASE C02-18 · rate-floor Simulation

## 槽

案例小时（18:17）。T02-16 已写 T-Floor（过程仍 T20 + do-not-break-brand-floor；16:17 短例在理论卡 §9、声明「不另开 sim」）。本小时判定：**理论卡短例不够 callable**；T-Floor 用户句（品牌底所以不能动 / 底价当地板改尺 / 地板=399所以公开也399 / RATE_FLOOR·Min·Max 就是公开价 / 系统地板多少 BAR 就多少 / 无声明却发明 699）需要专卷。**开 Rate Floor / Min·Max Simulation，不开 P88。**

## 一句话

Rate Floor / Min·Max 是价表日程保护不是公开 BAR；新 callable 仿真 `cases/sim-2026-rate-floor-minmax-sat.md`：Diagnose 走 T-Floor、过程仍 T20 + do-not-break-brand-floor、Hold 779–799 首选 799、拒 399、无声明不发明 699。

## 做了什么

1. 写 `cases/sim-2026-rate-floor-minmax-sat.md`（C02-18；含 compact 顾问十段）
2. T-Floor 配套行：新 sim（原「无新 Simulation」改指向；正文三句 / 399 / 799 / 无声明不发明 699 不改）
3. brand-floor / T20 / problem-tree：指针 only
4. 源表 §117：CASE 指针，升核/复述 §116，不造新 URL
5. progress / README §8.4 / BACKLOG 头 / backlog
6. **不开 P88 / P89**；不写新剧本 / 决策卡 / 轻指标 / 问题树新枝

## 为什么不是 P88

T-Floor 已 drafted；过程已有 T20 + do-not-break-brand-floor。本小时是 **callable Simulation**，不是新剧本。四件套仍未齐 **for NEW playbook**：

| 候选 | 本小时 | 邻覆盖 |
| --- | --- | --- |
| Soft hold / Option | **fail for NEW playbook** | P53 / P55 / P10 + OPERA Hold Room（§115） |
| Rate Floor / Min·Max（本卷对象） | 已有 T-Floor + T20；本小时只补 **sim** | 不升成 P88 |
| Connecting / F&B covers / Daily Rates | **fail for NEW playbook** | P63 / P69 / P01 / P64 + §115 |
| 资格折扣 / Tax-exempt | **fail for NEW playbook** | P23 / P71 / T-Tax / P79 |

## 源核（curl-verify 既有 §116 URL；不造新页）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **指针/复核** | OPERA Cloud 26.2 Controls — Rate Management（RATE_FLOOR / Min·Max）（§115/§116） | curl **200** size≈96652 |
| **指针/复核** | HSMAI Academy BAR glossary（§67/§115/§116） | curl **200** size≈364877 |
| **指针/复核** | Signals Room Hierarchy Min/Max Rate（§116 新开） | curl **200** size≈32344 |
| **指针/复核** | Cloudbeds Settings Overview Room Hierarchy Min/Max（§116） | curl **200** size≈82866 |
| **指针/复核** | OPERA 5.6 Rate More Tab Rate Floor（§116） | curl **200** size≈20371 |
| **指针/复核** | OPERA Cloud 26.2 About Best Available Rates（§115/§116） | curl **200** size≈9021 |

无新 URL。无华住 Rate Floor SOP。无默认地板 %。无 699 Fact。Vendor $ 不当中国 Fact。Duetto 仍 §116 SPA FAIL 不当新核。

## 顾问可用性

用户说「品牌底所以不能动 / 底价当地板改尺 / 地板=399所以公开也399 / RATE_FLOOR·Min·Max 就是公开价 / 系统地板多少 BAR 就多少 / 无声明却发明 699」→ Diagnose 走 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**，仿真走本卷。Hold 779–799 首选 799；拒 399；无声明不发明 699。**Notify YES**（新 callable case）。

## 刻意不补

**P88**；**P89**；新剧本；决策卡；轻指标；问题树新枝；Pet/AAA；smoking/damage FEE；重写 P01–P87 正文三句 / 399 / 799；华住 Rate Floor SOP；默认地板 %；699 Fact；Vendor $ China Fact；Walk $；佣金%；systems/*.md；optimization-advice 正文；here.now publish；git commit；hotel-ai-knowledge / claim_task。

## 下一槽

**2026-09-02 20:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** 仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
