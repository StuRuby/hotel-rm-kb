# Simulation Case｜周六 Ahead：BAR 799，RMS 建议 399「卖不满」；Advise 不跟 + Hold 799；可选弱周二真 leftover 走 P05

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-rms-dump-sat.md`  
> 日期：2026-08-28 02:17 CST  
> 问：「系统建议今晚 399 要不要跟」「别跟系统对着干」「IDeaS 降了我们也要降」「系统不让降但卖不动」  
> 调用：`dont-follow-rms-dump.md` · P66 `rms-rec-override.md` · `metrics/rms-vs-pace.md` · P17 · P05 · P56 · T20 · P01 · P45 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**remaining 14、399、799 只在本文件当 Simulation，不是市场行情 Fact，不是华住会 SOP，不是推荐把 BAR dump 到 399。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 RMS dump / 被拒绝的新 BAR**。不伪造精确增收。不编本店 RMS 字段 / override % / 佣金% / 699 / IDeaS 4%。Advisor 不操作 PMS / RMS / OTA。本卷 **不** 把 BAR 砍到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店。

### Beat A — 周六高峰（主拍）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-28 周五 02:17 CST
Stay Date：2026-08-29（本周六）
DTA：1
用户原话：「周六 Pace Ahead，还剩 14 间。BAR 799。RMS（用户没说名，Unknown）建议公开 399，说预测卖不满。GM：系统说了就跟，别跟系统对着干。有人要把 BAR 也砍到 399。」

库存（Simulation）：
  Physical：180  OOO：0
  Remaining：14
  Pace：Ahead vs STLY（Hypothesis 练习）
  当前公开 BAR：799
  RMS_rec：399
  Gap_rms：399 − 799 = −400
  系统名 / 是否已自动推价：Unknown → NV
  拟议 A：BAR → 399「系统说卖不满」
  拟议 B：跟系统，别分析
  拟议 C：不跟 dump；Hold 779–799 首选 799（顾问建议）
```

### Beat B — 弱周二（可选第二拍）

```text
Stay Date：下周二（弱夜练习）
Pace：Behind；remaining 厚
RMS_rec：仍 799
现象：BAR 799 几乎没人订
拟议：死守系统 / BAR→399 跟心里的 dump
顾问：P05 有界围栏；理由写 Pace；能改输入先 P17；399≠新 BAR
```

14 / 399 / 799 **只是本卷练习数**。399 **不是**推荐公开 BAR。本卷 Advise **不** dump BAR 到 399。

---

## Headline

**180-room city hotel, Saturday Pace Ahead, remaining 14, BAR 799, unnamed RMS recommends public 399 (forecast unsold). GM: follow the system. Advise: do not follow; Hold BAR 779-799 prefer 799; do not dump BAR to 399. Optional weak Tuesday: Behind, thick remaining, RMS still 799 then P05 fence, reason Pace, not fight-the-system; 399 is not the new BAR. 14/399/799 Simulation only. 399 = rejected RMS dump.**

---

## 1. Intake

口径：remaining **14**、Ahead → 不是 leftover 开门。BAR **799** vs RMS **399** → Gap_rms 负，形 **A**。  
独立店。无声明品牌底 → **不发明华住会 SOP / override % / 佣金% / 699 / IDeaS 4%**。  
RMS 名 = **Unknown / NV**；不编 IDeaS 或华住会。  
先排除 P60：本卷设定 399 是**系统建议**，不是错映射主拍；若真实店先问「是不是本打算卖的」。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| Remaining | **14** |
| Pace | Ahead |
| Current BAR | 799 |
| RMS_rec | **399** |
| Gap_rms | −400（Simulation） |
| GM 拟议 | BAR→399 / 跟系统 |

Pace：rem 14 Ahead → **不是 P05 开门**。399 是建议不是错码 → **不是 P60 主拍**。

**预选 3 个补数：** 本店 RMS 名；是否已自动推价；预测假设清单（事件/团/曲线）以便 P17 门。

本卷 **不** 操作 RMS、不代点 override、不代推价。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/28 02:17 CST。Stay Date 8/29 周六，DTA 1。Pace Ahead；remaining 14；公开 BAR 799。RMS 建议 399。压力来自「系统说了就跟」，不是「Pace Behind」。

HSMAI：不要全盘接受建议；没有正当理由不要 override = **协会 Fact**，本卷用来支撑「建议≠定价权」——**不是**华住会 SOP。  
IDeaS Pricing Overrides = **能力指针**，不是本卷 399 的来源。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A Ahead + 系统 dump | **主拍是**（399 建议 + Ahead rem 14） |
| B 真弱 + 系统仍高 | 对照：见 Beat B；主拍不是 |
| C 别跟系统对着干 | **命中**（GM 话术） |
| D 没理由乱改 | 对照：主拍是跟 dump 不是乱涨 |
| E 脏数据/错价 | 对照：本卷非 P60/P43 主拍 |
| F 误入 | 对照：非月末主拍；无声明底 |

结论：形 **A + C**。默认 **不跟 399**；**Hold 779–799 首选 799**；拒绝拟议 A/B。

```
Fact（仿真输入）: rem 14 Ahead、BAR 799、RMS_rec 399
High-probability: 跟 399 会把 Ahead 稀缺砍成低价尾
Hypothesis: 建议≠定价权；Hold 799
Unknown: 本店 RMS 名、是否已推价、Forecast 假设清单
```

**主诊断：** 周六 Ahead + RMS dump 399 + GM 要跟系统。  
**不要 BAR→399。不要一夜 −15%。不要把黑盒写成公开锚。**  
**问题树：** 系统建议不是定价权。

与 P17：本卷不是「Forecast 假设清单已证实错了」主拍；真实店若 overlay 错先 P17。  
与 P01：Ahead 路径成立；Hold；本剧补「不跟 RMS dump」。  
与 P05：Ahead rem 14 ≠ leftover。  
与 P56：不是月末冲量主拍。

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | Hold 799；不跟 399；24h 核活价未被系统推成 dump |
| 主风险 | BAR→399 把意图锚砸掉；或真弱夜死守系统高价 |
| 反事实 | 若 399 是错映射 → P60；若 Behind 厚 → Beat B / P05；本卷主拍不是 |

---

## 5. Recommendation（本卷）

```text
Public BAR:       Hold 779-799 首选 799
Inventory:        不因 RMS dump 改库存
Reject:           BAR→399；一夜 -15%；系统说了就跟
Policy:           RMS 名？问本店（NV）；顾问不代点 override
If forecast wrong: P17 先改判断
If weak Tue:      P05 围栏；理由 Pace；399≠新 BAR
Huddle (P45):     一个动作 = 「今晚不跟系统 399，Hold 799」
```

顾问三句（原样）：与 playbook / 主卡同一套。

### Beat B 一句话

弱周二 Behind、remaining 厚、系统仍 799 → **P05 有界围栏**；理由写 Pace；能改 Forecast 输入先 P17；不要把公开 BAR 改成 399。

---

## 6. 数字纪律

| 数 | 身份 |
| --- | --- |
| 180 / 14 | Simulation 库存 |
| 799 | Hypothesis/Simulation 当前 BAR（Hold 首选） |
| 399 | **被拒绝的 RMS dump / 被拒绝的新 BAR** |
| RMS 字段 / override % / IDeaS 4% / 佣金% | **不编** |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 02:17 CST | 首版。P66 Simulation。不跟 399；Hold 799；拒 dump；可选弱周二 P05。 |
