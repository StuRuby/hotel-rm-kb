# 2026-09-03 10:17 CST · CASE C03-10 · restriction-maxlos/ctd Simulation

## 槽

案例小时（10:17）。T03-08 已写 T-Restriction（过程仍 P33 + P40/P21；08:17 短例在理论卡 §9、声明「无 Simulation 文件」）。本小时判定：**理论卡短例不够 callable**；T-Restriction 用户句（关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / 限制开着 OCC 假低所以 BAR→399 / Closed for Departure 屏就是公开价 / Restrictions 配完了就算改完 BAR）需要专卷。**开 MaxLOS/CTD/CTA Restriction Simulation，不开 P88。**

## 一句话

MaxLOS / CTD / CTA / Closed-for-Departure 是可售过滤，不是公开 BAR；新 callable 仿真 `cases/sim-2026-restriction-maxlos-ctd-sat.md`：Diagnose 走 T-Restriction、过程仍 P33（+ P40/P21）、Hold 779–799 首选 799、拒 399、不发明 699。

## 做了什么

1. 写 `cases/sim-2026-restriction-maxlos-ctd-sat.md`（C03-10；含 compact 顾问十段）
2. T-Restriction 配套行：新 sim（原「无 Simulation 文件」改指向；正文三句 / 399 / 799 不改）
3. P33 / P40 / P21 / problem-tree：指针 only
4. 源表 §125：CASE 指针，升核/复述 §124，不造新 URL
5. progress / README §8.4 / BACKLOG 头 / backlog
6. **不开 P88 / P89**；不写新剧本 / 决策卡 / 轻指标 / 问题树新枝

## 为什么不是 P88

T-Restriction 已 drafted；过程已有 P33 + P40/P21。本小时是 **callable Simulation**，不是新剧本。四件套仍未齐 **for NEW playbook**：

| 候选 | 本小时 | 邻覆盖 |
| --- | --- | --- |
| Waitlist / Pseudo | **fail for NEW playbook** | P43/P03/P05 / P51/T-Hall + OPERA Waitlist/Pseudo |
| MaxLOS / CTD / CTA（本卷对象） | 已有 T-Restriction + P33/P40/P21；本小时只补 **sim** | 不升成 P88 |
| BBAR / Pre-assign / Advance-purchase | **fail for NEW playbook** | P64 / soft FAIL / P19·P73 |
| Rate Cap / Component | **handoff** | T-Floor / T-Component |

## 源核（curl-verify 既有 §124 URL；不造新页）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **指针/复核** | HSMAI Academy · Maximum Length of Stay（§123/§124） | curl **200** size≈339541 |
| **指针/复核** | HSMAI Academy · Closed to Arrival（§123/§124） | curl **200** size≈338070 |
| **指针/复核** | OPERA Cloud 26.2 · Restrictions（§106→§123→§124） | curl **200** size≈16429 |
| **指针/复核** | OPERA Cloud 26.2 · Managing Restrictions（§106→§123→§124） | curl **200** size≈46209 |
| **指针/复核** | HSMAI Academy · BAR glossary（§67/§124） | curl **200** size≈364877 |
| **指针/复核** | HSMAI Academy · Minimum Length of Stay（§123） | curl **200** size≈361977 |
| **指针/复核** | Apaleo · Rate Plans（§107/§124） | curl **200** size≈29748 |
| **指针/复核** | Clock · Rate Restrictions（§118/§124） | curl **200** size≈390476 |
| **指针/复核** | eCornell IMPACT · Dos and Don'ts of LOS（§124） | curl **200** size≈51591 |
| **指针/复核** | Lighthouse · Guide to hotel stay restrictions（§124） | curl **200** size≈229251 |
| **FAIL 同 §124** | HSMAI closed-to-departure / closed-for-departure glossary | **404**；不当新核 |

无新 URL。无华住 MaxLOS·CTD SOP。无默认限制常模。无候补转化率。无 699 Fact。Vendor 例不当中国 Fact。HSMAI CTD glossary 仍 §124 FAIL 不当新核。

## 顾问可用性

用户说「关了离店卖不动只能砍 / MaxLOS太紧所以dump / CTA开着所以公开也跟着砍 / 限制开着 OCC 假低所以 BAR→399 / Closed for Departure 屏就是公开价 / Restrictions 配完了就算改完 BAR」→ Diagnose 走 **T-Restriction**，过程仍 **P33**（+ **P40** / **P21**），仿真走本卷。Hold 779–799 首选 799；拒 399；不发明 699。**Notify YES**（新 callable case）。

## 刻意不补

**P88**；**P89**；新剧本；决策卡；轻指标；问题树新枝；Pet/AAA；smoking/damage FEE；重写 P01–P87 正文三句 / 399 / 799；华住 MaxLOS·CTD SOP；默认限制常模；候补转化率；699 Fact；Vendor China Fact；Walk $；佣金%；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；hotel-ai-knowledge / claim_task。

## 下一槽

**2026-09-03 12:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp 列为「下一轮要写」— 已 drafted。** 仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
