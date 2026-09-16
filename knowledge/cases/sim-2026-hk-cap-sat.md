# Simulation Case｜周六 Ahead：物理 remaining 22、HK 只能再翻 12；GM 要 BAR→399；Advise Hold 799 + 收口到达

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-hk-cap-sat.md`
> 日期：2026-08-27 14:17 CST
> 问：「保洁不够，别卖满」「人手不够先降价少卖点」「因为做不完房所以 dump 到 399 清掉」
> 调用：`dont-dump-when-staff-capped.md` · P63 `staff-capacity-constraint.md` · `metrics/sellable-vs-staff-cap.md` · P37 · P05 · P01 · P24 · P44 · P46 · P45 · `how-much-to-move.md`
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**物理 remaining 22、HK 还能翻 12、399、799 只在本文件当 Simulation，不是市场行情 Fact，不是华住做房 SOP，不是推荐 dump，不是间/人常模。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 dump**。不伪造精确增收。不编本店人效 / 分钟/间 / wage / Walk $ / 弹性 / 699。Advisor 不操作 PMS / OTA / 前台 / 保洁。本卷 **不** 把 BAR 砍到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一周六。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-27 周四 14:17 CST
Stay Date：2026-08-29（本周六）
DTA：2
用户原话：「周六 Pace 还 Ahead。账面还剩 22 间，但管家说今晚人手只能再翻 12 间到达，再多交不了房。GM 说要不把 BAR 砍到 399，少卖点，别做不完。销售也说降了就没人订那么猛。」

库存（Simulation）：
  Physical：180  OOO：0
  Physical remaining：22
  HK turnable arrivals today：12
  Pace：Ahead vs STLY（Hypothesis 练习）
  公开 BAR：799
  拟议 A：BAR → 399「少卖点别做不完」
  拟议 B：降一点「人手不够先少卖」
  拟议 C：Hold 779–799 首选 799；停售或收口到达贴近 12；不 dump（顾问建议）
```

22 / 12 / 399 / 799 **只是本卷练习数**。399 **不是**推荐 BAR。本卷 Advise **不** dump。本店人效 **不出现在本卷当 SOP**。无默认间/人。

---

## Headline

**180-room city hotel, Saturday Pace Ahead, physical remaining 22, but HK can turn at most 12 more arrivals today (staffing). GM wants BAR → 399 「少卖点别做不完」. Advise: Hold 779–799 prefer 799; stop-sell or cap arrivals near staff capacity; do not dump — cheap demand still needs turns. 22/12/399/799 Simulation only. 399 rejected.**

---

## 1. Intake

口径：Physical remaining **22**、Ahead → 不是 leftover 开门。HK 还能翻 **12** → Gap_cap = 10，是**供给/吞吐顶**，不是需求死。
独立店。无声明品牌底 → **不发明华住人效 / 分钟/间 / wage / Walk $ / 699**。
本店间/人、班次表 = **Unknown / NV**，不编。本卷只用用户给的「今晚还能翻 12」。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| OOO | 0 |
| Physical remaining | **22** |
| HK turnable arrivals | **12** |
| Gap_cap | 10（产能顶） |
| Pace | Ahead |
| 公开 BAR | 799 |
| GM 拟议 | BAR→399 |

Pace：remaining 22 但 Ahead → **不是 P05 开门**。OOO=0 → **不是 P37 主拍**。

**预选 3 个补数：** 最晚进房几点；已排几班/续住是否另占吞吐；公开栏是否已有人改到 399。

本卷 **不** 操作 PMS、不代关库存、不代排保洁。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/27 14:17 CST。Stay Date 8/29 周六，DTA 2。Pace Ahead；账面 remaining 22；HK 自报今晚最多再翻 12 间到达。公开 BAR 799。压力来自「BAR→399 少卖点别做不完」，不是「Pace Behind」。

AHLA 协会调查：保洁/前台短缺是被点名最多的运营约束 = **US 现象 Fact**，本卷用来支撑「人手可以卡住可售」——**不是**中国间/人常模，也不是本卷 12 的来源（12 是仿真用户数）。

OPERA Vendor：Dirty 房仍在库存、OO 才离线。本卷 OOO=0，22 是账面 remaining，其中今晚可交到达被班次卡在 12。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A 做不完 → dump | **主拍是**（GM 要 399 清需求） |
| B 降价少卖 | **命中**（销售「降了就没人订那么猛」） |
| C 物理房在但不可交 | **命中**（22 账面 vs 12 可翻） |
| D 与 OOO 混谈 | 对照：OOO=0，不是维修离线 |
| E 超售盖过产能 | 对照：若仍按 22 卖满则贴近 P24 |
| F 误入 | 非 P05 主拍（Ahead）；非 P44/P46 主拍 |

结论：形 A + B + C。默认 **Hold 779–799 首选 799**，收口到达贴近 12，拒绝拟议 A/B。

```
Fact（仿真输入）: rem 22 Ahead、BAR 799、HK 还能翻 12、OOO 0
High-probability: dump 399 仍会吸引要做房的到达，更挤翻房
Hypothesis: 产能顶不是弱需求；正确杠杆是收口件数
Unknown: 本店间/人、最晚进房、班次表、wage、Walk $
```

**主诊断：** 周六 Ahead + 人手吞吐顶 + 要 dump。  
**不要 BAR→399。不要一夜 −15%。不要「降价少卖」。**  
**问题树：** 做不完房不是降价理由。

与 P37：OOO=0；这是 Dirty/吞吐，不是维修离线。  
与 P05：Ahead rem 22 ≠ leftover；缺口是 12 可翻不是需求死。  
与 P24：若仍按 22 卖满，超出 12 的到达是 Walk/晚进房风险。  
与 P01：Ahead 时应守价/收口，不是 dump。

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | Hold 公开 799；收口新到达贴近 12；问最晚进房/班次 |
| 主风险 | BAR→399 用低价填已经翻不过来的到达；把 10 间不可交写成「市场只要 399」 |
| 反事实 | 若产能松、厚且 Behind → P05；本卷不是。若 22 全是维修 → P37；本卷不是 |

---

## 5. Recommendation（本卷）

```text
Public BAR:       Hold 779–799 首选 799
Inventory:        停售或收口到达，使新到达贴近 HK 还能翻的 12（用户数；不是行业间/人）
Reject:           BAR→399；「降价少卖」；一夜 −15%
Policy:           人效/班次/最晚进房？问本店（NV）；顾问不代排班
If truly weak later: P05；理由写 Pace，不写「做不完」
If sold past cap: P24；Walk $ NV
Huddle (P45):     一个动作 = Hold BAR + 收口到达贴近 12 + 旗标班次 — 不是「砍到 399 少卖点」
```

顾问三句（原样）：与 playbook / 主卡同一套。

---

## 6. 数字纪律

| 数 | 身份 |
| --- | --- |
| 180 / 22 / 12 | Simulation 库存 / 吞吐 |
| 799 | Hypothesis/Simulation BAR（Hold 首选） |
| 399 | **被拒绝的 dump** |
| 间/人、分钟/间、wage | **不编** |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 14:17 CST | 首版。P63 Simulation。Hold 799；收口 12；拒 399。 |
