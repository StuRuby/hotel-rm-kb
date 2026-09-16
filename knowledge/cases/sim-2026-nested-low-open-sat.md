# Simulation Case｜周六 Ahead：BAR 799 但 OTA 仍挂嵌套/促销 399；Advise 关 399 档 + Hold 799；可选弱周二误关低档

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-nested-low-open-sat.md`  
> 日期：2026-08-27 18:17 CST  
> 问：「低价还开着所以 ADR 上不去」「涨了 BAR 但 399 还挂着」「促销全关了 BAR 也没人订」「嵌套太复杂干脆 BAR→399」  
> 调用：`dont-leave-low-class-open-on-peak.md` · `dont-strip-low-class-on-weak-nights.md` · `close-low-rate-compression.md`（复用）· P64 `nested-rate-class.md` · `metrics/open-rate-classes.md` · P01 · P03 · P05 · P02 · P18 · P60 · P33 · P45 · `how-much-to-move.md`  
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**remaining 14、399、799 只在本文件当 Simulation，不是市场行情 Fact，不是华住嵌套 SOP，不是推荐把 BAR dump 到 399。** 799 只 Hypothesis/Simulation。399 = **高峰要关的低档 / 被拒绝的新 BAR dump**。不伪造精确增收。不编本店 nesting 字段 / EMSR / 佣金% / 699。Advisor 不操作 PMS / OTA / CM。本卷 **不** 把 BAR 砍到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店。

### Beat A — 周六高峰（主拍）

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-27 周四 18:17 CST
Stay Date：2026-08-29（本周六）
DTA：2
用户原话：「周六 Pace Ahead，还剩 14 间。GM 昨天把 BAR 涨到 799 了，但电商忘了，美团上还有一个嵌套/促销灵活 399 在卖。销售说低价还开着所以 ADR 上不去。有人说嵌套太复杂，不如把 BAR 也砸到 399 省事。」

库存（Simulation）：
  Physical：180  OOO：0
  Remaining：14
  Pace：Ahead vs STLY（Hypothesis 练习）
  意图公开 BAR：799（昨涨）
  OTA 仍挂：399 灵活（嵌套/促销档，本打算卖过、忘关 — 非错映射主拍）
  Nesting_mode：用户说「好像是 nested」，字段名 Unknown → 条件化
  拟议 A：BAR → 399「嵌套太复杂」
  拟议 B：再涨一点「反正 Ahead」
  拟议 C：关/限 399 档；Hold 779–799 首选 799；不 dump（顾问建议）
```

### Beat B — 弱周二（可选第二拍）

```text
Stay Date：下周二（弱夜练习）
Pace：Behind；remaining 厚
动作史：团队把所有低档/促销关光，只留 BAR 799
现象：BAR 799 几乎没人订
拟议：再涨 or BAR→399
顾问：重开有围栏低档或走 P05/P02；不要再涨；399 若开必须是围栏产品不是新 BAR
```

14 / 399 / 799 **只是本卷练习数**。399 **不是**推荐公开 BAR。本卷 Advise **不** dump BAR 到 399。

---

## Headline

**180-room city hotel, Saturday Pace Ahead, remaining 14, intended BAR 799, but OTA still shows nested/promo flexible 399 (e-com left it on after GM raised BAR). Advise: close/limit the 399 class; Hold BAR 779–799 prefer 799; do not dump BAR to 399. Optional weak Tuesday: all low classes closed, BAR 799 empty → reopen fenced low or P05/P02; do not cut to 399 as new BAR. 14/399/799 Simulation only. 399 = class to close on peak / rejected dump as new BAR.**

---

## 1. Intake

口径：remaining **14**、Ahead → 不是 leftover 开门。意图 BAR **799** 但公开仍可订 **399** → Open_below_floor 非空，形 **C**（兼 A）。  
独立店。无声明品牌底 → **不发明华住嵌套 SOP / EMSR / 佣金% / 699**。  
Nesting 字段 = **Unknown / NV**；用户口述「好像 nested」→ 仍只动公开可见 399，不编 PMS 方向。  
先排除 P60：本卷设定 399 是**本打算卖过、忘关**的促销/嵌套档，不是错映射主拍；若真实店先问「是不是本打算卖的」。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| Remaining | **14** |
| Pace | Ahead |
| 意图 BAR | 799 |
| 仍开低档 | **399** 灵活 |
| Gap_low | 399 − 799 = −400（Simulation） |
| GM/电商拟议 | BAR→399 或再涨 |

Pace：rem 14 Ahead → **不是 P05 开门**。399 本打算卖过 → **不是 P60 主拍**。

**预选 3 个补数：** nesting 正式模式（nested/shared/dedicated）；399 是哪条价码/促销开关；直销是否也挂着同档。

本卷 **不** 操作 PMS、不代关价码、不代改 CM。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/27 18:17 CST。Stay Date 8/29 周六，DTA 2。Pace Ahead；remaining 14；意图公开 BAR 799（昨涨）。OTA 仍挂 399 灵活嵌套/促销。压力来自「ADR 上不去 / 嵌套太复杂砸 399」，不是「Pace Behind」。

AccountingTools：nested = 高价可占低价块 = **定义 Fact（航空例）**，本卷用来支撑「关低档是保护高支付意愿」——**不是**中国价码 SOP。  
Amadeus Vendor：nested allotment booking limit 保护父库存 = **机制指针**，不是本卷 399 的来源。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A 高峰低档仍开 | **命中**（399 仍可订 + Ahead） |
| B 弱夜关光低档 | 对照：见 Beat B；主拍不是 |
| C 涨 BAR 忘关低档 | **主拍是**（昨涨 799，399 忘关） |
| D Parallel 当 Nested | 对照：模式 NV，不乱关 dedicated |
| E 映射假低价 | 对照：本卷非 P60 主拍；真实店先问 |

结论：形 **C + A**。默认 **关/限 399 档**；**Hold 779–799 首选 799**；拒绝拟议 A；拟议 B 仅在低档已关且价未最高后才评，本卷第一刀是关低不是再涨。

```
Fact（仿真输入）: rem 14 Ahead、意图 BAR 799、OTA 399 仍开
High-probability: 399 继续卖会稀释 ADR，且吃掉高支付意愿尾部
Hypothesis: 关低 ≠ 涨 BAR；先关低档；Hold 799
Unknown: 本店 nesting 字段名、价码 id、是否 shared
```

**主诊断：** 周六 Ahead + 涨了 BAR 但嵌套/促销 399 仍开。  
**不要 BAR→399。不要一夜 −15%。不要假装已经涨价。**  
**问题树：** 低价档还开着 / 关低不等于涨 BAR。

与 P60：本卷 399 是忘关促销，不是错映射；真实店先问「本打算卖的吗」。  
与 P01/P03：Ahead/压缩路径成立；close-low 机械尺可用；本剧补嵌套/形 C。  
与 P05：Ahead rem 14 ≠ leftover。  
与 P18：若 399 是报名深促，关促并联报名闸；本卷当嵌套/促销档关。

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | 关/限 399；Hold 公开 799；24h 核公开栏无破价 |
| 主风险 | BAR→399 把意图锚砸掉；或再涨却仍挂 399 = 假涨价 |
| 反事实 | 若 399 是错映射 → P60；若 Behind 厚 → Beat B / P05；本卷主拍不是 |

---

## 5. Recommendation（本卷）

```text
Public BAR:       Hold 779–799 首选 799
Inventory:        Close 或限 399 嵌套/促销档（公开 < 地板）
Reject:           BAR→399；一夜 −15%；只涨价不关低档
Policy:           nesting 模式？问本店（NV）；顾问不代关码
If mapping bug:   P60
If weak Tue:      重开围栏低档或 P05/P02；399≠新 BAR
Huddle (P45):     一个动作 = 「今晚关/限 399 这一档」— 不是「砸到 399」也不是「一夜 −15%」
```

顾问三句（原样）：与 playbook / 主卡同一套。

### Beat B 一句话

弱周二低档全关、BAR 799 空 → **打开有围栏低档或走 P05/P02**；不要再涨；不要把公开 BAR 改成 399。

---

## 6. 数字纪律

| 数 | 身份 |
| --- | --- |
| 180 / 14 | Simulation 库存 |
| 799 | Hypothesis/Simulation 意图 BAR（Hold 首选） |
| 399 | **要关的低档；同时是被拒绝的新 BAR dump** |
| nesting 字段 / EMSR / 佣金% | **不编** |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 18:17 CST | 首版。P64 Simulation。关 399；Hold 799；拒 dump；可选弱周二。 |
