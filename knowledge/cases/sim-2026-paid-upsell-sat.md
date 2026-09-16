# Simulation Case｜周六标准紧套房空：前台要免费升「反正空着」；销售要套房→399；Advise 付费升 + Hold 799/999

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-paid-upsell-sat.md`
> 日期：2026-08-27 06:17 CST
> 问：「反正套房空着，免费把标准客升了得了」「标准卖满了套房降到 399 出」「客人要升，意思一下 50 块」
> 调用：`dont-give-away-paid-upgrade.md` · P61 `paid-upsell-upgrade.md` · `metrics/upsell-take-rate.md` · P49 · P13 · P34 · P05 · P02 · P19 · P47 · P42 · T19 · P01 · `how-much-to-move.md`
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**标准 remaining 4、套房 remaining 10、标准 BAR 799、套房 BAR 999、+200–300、399 只在本文件当 Simulation，不是市场行情 Fact，不是华住升房价表，不是推荐 dump。** 799/999 只 Hypothesis/Simulation。399 = **被拒绝的 suite dump**。不伪造精确增收。不编本店升房价表 / 华住 upsell SOP / 佣金% / 弹性 / Walk $ / 699。Advisor 不操作 PMS / 前台收银。本卷 **不** 把套房 dump 到 399，**不** 默认免费升。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一周六。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-27 周四 06:17 CST
Stay Date：2026-08-29（本周六）
DTA：2
用户原话：「标准差不多满了，套房还空着 10 间。前台说反正空着，把今晚到的标准客免费升套房得了。销售说套房公开价降到 399 清掉。有人说客人要升给个 50 块意思一下。」

库存（Simulation）：
  Physical：180  OOO：0
  标准 Remaining：4
  套房 Remaining：10
  标准 Pace：Ahead vs STLY（Hypothesis 练习）
  标准公开 BAR：799
  套房公开 BAR（意图）：999

拟议 A：免费升级标准客填套房「反正空着」
拟议 B：套房公开 999 → 399 清库存
拟议 C：升房意思一下 +50
拟议 D：付费升报价（sim 带 e.g. +200–300 或直接报套房 BAR）；Hold 套房公开 979–999 首选 999；Hold 标准 779–799 首选 799（顾问建议）
```

4 / 10 / 799 / 999 / 399 / +200–300 **只是本卷练习数**。399 **不是**推荐套房 BAR。本卷 Advise **不** dump 套房到 399，**不** 默认免费升。本店升房价表 **不出现在本卷当常模**。

---

## Headline

**180-room city hotel, Saturday: standard Pace Ahead remaining 4, suite remaining 10, suite BAR intended 999, standard BAR 799. FO wants free-upgrade standards to fill suites "反正空着"; sales wants suite → 399. Advise: offer paid upgrade (sim band e.g. +200–300 or quote suite BAR); Hold suite public 979–999 prefer 999; Hold standard 779–799 prefer 799; reject free-by-default; reject suite dump 399. Numbers Simulation only.**

---

## 1. Intake

口径：标准 Remaining **4**、Ahead → 紧。套房 Remaining **10** → 空 ≠ 必须送。标准 BAR 799；套房意图 BAR 999；差价 **200**（Simulation）。
独立店。无声明品牌底 → **不发明华住升房价表 / 佣金% / 699**。
升房收入口径 = **Unknown**，不编。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| 标准 Remaining | **4** |
| 套房 Remaining | **10** |
| 标准 Pace | Ahead |
| 标准 BAR | 799 |
| 套房 BAR | **999** |
| 类型差（sim） | **200** |
| 前台拟议 | 免费升 / +50 / 套房→399 |

Pace：标准 remaining 4、Ahead → **不是 P05 开门砸套房**。空着的套房差价可卖。

**预选 3 个补数：** 客人是否会员免费升/已确认升级奖（是→P49）；本店升房价表（有则按表，无=NV）；套房公开栏是否已被改到 399。

本卷 **不** 操作 PMS、不代前台收银、不代改公开栏。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/27 06:17 CST。Stay Date 8/29 周六，DTA 2。标准 Pace Ahead，remaining 4；套房 remaining 10，意图 BAR 999。压力来自「反正空着免费升 / 套房砸 399 / 意思一下 50」，不是「标准 Behind」。

OPERA Vendor 机制：付费升可配置加价与单独过账 = **该厂商能力 Fact**，本卷用来支撑「付费升是销售过程」——**不是**华住升房价表。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A 套房空着免费升 | **主拍是**（前台要免费升） |
| B 标准满降套房清库存 | **命中**（销售要 399） |
| C 意思一下 50 | **命中对照**（+50 << 类型差 200） |
| D 免费精英升当付费 | 对照：若金卡 SA → P49；本卷主拍是普通标准客 |
| E 升房收入不算 | 对照枝可提；本卷不挡付费推 |
| F 误入 | 非 P13 关型主拍；非 P34 倒挂主拍（999>799）；非 P47/P42 |

结论：形 A + 形 B（+ C 对照）。默认 **付费升报价 + Hold 799/999**，拒绝拟议 A/B/C。

```
Fact（仿真输入）: 标准 rem 4 Ahead、套房 rem 10、BAR 799/999
High-probability: 标准客愿为套房付一档差价的比例 Unknown；不编 take-rate %
Hypothesis: 免费升填套房是用可卖差价换 OCC；套房→399 写穿公开梯
Unknown: 本店升房价表、升房收入口径、佣金%
```

**主诊断：** 周六标准紧 + 套房空 + 要免费升 / 砸 399。  
**不要免费默认送。不要套房→399。不要一夜 −15%。**  
**问题树：** 套房空着不是免费升的理由。

与 P49：本卷不是会员免费升主拍；若混入金卡 SA → 高峰停免费升。  
与 P05：标准 Ahead rem 4 ≠ leftover；套房空不是砸 399 的许可证。  
与 P13：本卷不关标准型；是报价问题。  
与 P34：999>799，无倒挂；升房加价仍可报。

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | 对标准客报付费升（+200–300 或报 999）；套房公开 Hold 999；标准 Hold 799 |
| 主风险 | 免费升训练「空着就送」；399 写穿套房梯；+50 压升房 ADR |
| 反事实 | 若标准也松且套房厚 → 付费升仍优先；真刺激才 P02/P19 围栏，仍禁 399 |

---

## 5. Recommendation（本卷）

```text
Standard BAR:     Hold 779–799 首选 799
Suite public BAR: Hold 979–999 首选 999
Desk:             付费升报价（Simulation 带 +200–300 或报套房 BAR 999）
Reject:           免费默认送；套房→399；意思一下 +50；一夜 −15%
If free elite SA: P49（高峰停）
If truly weak later: P05/P02 围栏；理由写需求，不写「反正空着」
```

顾问三句（原样）：与 playbook / 主卡同一套。

---

## 6. 数字纪律

| 数 | 身份 |
| --- | --- |
| 180 / 4 / 10 | Simulation 库存 |
| 799 / 999 | Hypothesis/Simulation BAR |
| +200–300 | Simulation 升房加价带，**不是**中国行业 Fact |
| 399 | **被拒绝的 suite dump** |
| +50 | 被拒绝的象征价对照 |
| take-rate % | **不编** |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 06:17 CST | 首版。P61 Simulation。付费升 + Hold 799/999；拒免费默认；拒 399。 |
