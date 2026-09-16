# 2026-09-04 18:17 CST · CASE C04-02 · booking-window Simulation

## 槽

案例小时（18:17 ∈ {2,10,18}）。T04-00 已写 T-Window（过程仍 P33 + P35 + P19/P42/P38/T-Restriction/P60/P05·P02；00:17 短例在理论卡 §9、配套行声明「无新 Simulation」）。02:17–10:17 slot gap 未写 C04-02；S04-14 / R04-12 / T04-16 明确留给 case 槽。本小时判定：**理论卡短例不够 callable**；T-Window 用户句（OTA 搜不到所以砍 / 有房没 offer 所以需求弱 / 提前期挡住所以 dump / 临近才开卖所以跟 / 早订价才是市场价 / 同日才放所以砸尺）需要专卷。**开 Booking Window vs BAR Simulation，不开 P88。**

## 一句话

Booking-side 时窗（提前期 / Release Time / Sell Dates / late booking until）是可售/展示闸，不是公开 BAR；新 callable 仿真 `cases/sim-2026-booking-window-sat.md`：Diagnose 走 T-Window、过程仍 P33 + P35（+ P19/P42/P38/T-Restriction/P60/P05·P02）、Hold 779–799 首选 799、拒 399、不发明 699。

## 做了什么

1. 写 `cases/sim-2026-booking-window-sat.md`（C04-02；含 compact 顾问十段）
2. T-Window 配套行：新 sim（原「无新 Simulation」改指向；正文三句 / 399 / 799 不改）+ 修订表一行 + 交叉指针
3. P33 / P35 / problem-tree：指针 only
4. 源表 §135：CASE 指针，升核/复述 §132–§133，不造新 URL
5. progress / README §8 头 · §8.4 / BACKLOG 头 / backlog
6. **不开 P88 / P89**；不写新剧本 / 决策卡 / 轻指标 / 问题树新枝

## 为什么不是 P88

T-Window 已 drafted；过程已有 P33 + P35（+ handoff）。本小时是 **callable Simulation**，不是新剧本。S03-22 / S04-14 四件套仍未齐 **for NEW playbook**：

| 候选 | 本小时 | 邻覆盖 |
| --- | --- | --- |
| Booking Window（本卷对象） | 已有 T-Window + P33/P35；本小时只补 **sim** | 不升成 P88 |
| Soft/Hard · House Closed · Channel Stop-Sell | **fail for NEW playbook**（16:17 skip / 14:17 scout） | P53/T-Status/P52/P58/P55 + T-Restriction/P33 |
| Pet/AAA | **仍停车** | — |
| Smoking/damage FEE | **仍 MEDIUM/LOW** | — |

## 源核（curl-verify 既有 §132–§133 URL；不造新页）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **指针/复核** | OPERA Cloud 26.2 · Configuring Rate Codes（§131/§132） | curl **200** size≈190621 |
| **指针/复核** | Booking.com · BookingRule（§131/§132） | curl **200** size≈636196 |
| **指针/复核** | Cloudbeds · Advanced booking settings（§132） | curl **200** size≈101444 |
| **指针/复核** | Apaleo · Setting up Rate Plans（§132） | curl **200** size≈29018 |
| **指针/复核** | Apaleo · Service Availability（§132） | curl **200** size≈23878 |
| **指针/复核** | HSMAI Academy · ALT（§131/§132/§133） | curl **200** size≈359618 |
| **指针/复核** | Clock PMS+ · Rate Restrictions（§133） | curl **200** size≈390475 |
| **指针/复核** | OPERA 5.6 · Rate Header Tab（§133） | curl **200** size≈111723 |
| **FAIL 同 §132** | HSMAI advance-purchase / booking-window 等猜链 | **404**；不当新核 |
| **FAIL 同 §133** | Mews SPA shell | **FAIL**；不当新核 |

无新 URL。无华住 Booking Window·Release Time SOP。无默认提前期。无本店 ALT。无 699 Fact。Vendor 例不当中国 Fact。

## 顾问可用性

用户说「OTA 上搜不到我们先砍到 399 / 客人说订不了但明明有房 / 提前 30 天就不让订所以要降价 / 临近 3 天才开卖所以公开也跟 / 早订价才是市场价 / 同日 10 点才放所以砸尺」→ Diagnose 走 **T-Window**，过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**），仿真走本卷。Hold 779–799 首选 799；拒 399；不发明 699。**Notify YES**（新 callable case）。

## 刻意不补

**P88**；**P89**；新剧本；决策卡；轻指标；问题树新枝；Pet/AAA；smoking/damage FEE；重写 P01–P87 正文三句 / 399 / 799；华住 Booking Window·Release Time SOP；默认提前期；本店 ALT；699 Fact；Vendor China Fact；Walk $；佣金%；systems/*.md；optimization-advice / restriction-framework 正文三句；here.now publish；git commit；hotel-ai-knowledge / claim_task。

## 下一槽

**2026-09-04 20:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status 列为「下一轮要写」— 已 drafted**（T-Status Soft/Hard deepen 16:17 skip；C04-02 本小时已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
