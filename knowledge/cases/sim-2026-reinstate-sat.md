# Simulation Case｜周六 Ahead：取消 599 要 Reinstate；FO 怕订 399；Advise 给当前 799

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-reinstate-sat.md`
> 日期：2026-08-27 22:17 CST
> 问：「客人取消了又后悔，按原价恢复吧」「系统 Reinstate 把旧 599 写回来了」「BAR 已经 799 还要不要认」「不恢复他就会去订 399」
> 调用：`dont-reinstate-below-current-bar.md` · P65 `cancel-reinstate-old-rate.md` · `metrics/reinstate-rate-gap.md` · P62 · P14 · P38 · P54 · P01 · P05 · P45 · `how-much-to-move.md`
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**14、599、399、799 只在本文件当 Simulation，不是市场行情 Fact，不是华住 Reinstate SOP，不是推荐 dump。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 dump**。599 = **Ahead 上被拒的旧价，不是推荐恢复价**。不伪造精确增收。不编本店 Reinstate 政策 / 罚金% / 佣金% / 弹性 / 699。Advisor 不操作 PMS / OTA / 前台。本卷 **不** 按 599 恢复，**不** 把 BAR 砍到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一周六。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-27 周四 22:17 CST
Stay Date：2026-08-29（本周六）
DTA：2
用户原话：「客人今早取消了一间原价 599 的灵活单。BAR 已经涨到 799，Pace 仍 Ahead，还剩 14 间。客人晚上后悔了，要前台 Reinstate 按 599 恢复。前台怕不给就去 OTA 订 399。系统如果点 Reinstate 可能会把旧 599 写回来。」

库存（Simulation）：
  Physical：180  OOO：0
  Remaining：14
  Pace：Ahead vs STLY（Hypothesis 练习）
  公开 BAR：799
  原取消价：599
  拟议 A：Reinstate 按 599 恢复
  拟议 B：BAR → 399「别让他纠缠 / 别去 OTA」
  拟议 C：不按 599 恢复；给当前 779–799 首选 799；Hold 公开 BAR；不问自动 dump（顾问建议）
```

14 / 599 / 399 / 799 **只是本卷练习数**。399 **不是**推荐 BAR。599 **不是** Ahead 上推荐恢复价。本卷 Advise **不** dump、**不**认 599。本店 Reinstate 政策 **不出现在本卷当 SOP**。

---

## Headline

**180-room city hotel, Saturday Pace Ahead, remaining 14, current BAR 799. Guest cancelled this morning at 599, asks FO to reinstate at 599; FO fears they'll book OTA 399. Advise: do not reinstate at 599; offer current 779–799 prefer 799; Hold public BAR; don't dump to 399. 14/599/399/799 Simulation only. 599 = old rate rejected on Ahead; 399 = rejected dump.**

---

## 1. Intake

口径：Remaining **14**、Ahead → 不是 leftover 开门。同记录要回 **599**、当前 BAR **799** → 用过期价占稀缺 = 形 A 主拍，不是「必须认旧价」。
独立店。无声明品牌底 → **不发明华住 Reinstate SOP / 罚金% / 佣金% / 699**。
本店 Reinstate 是否带原价 = **Unknown / NV**，不编。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| Remaining | **14** |
| Pace | Ahead |
| 公开 BAR | 799 |
| 拟恢复价 | **599** |
| FO 恐惧 | 客人去订 **399** |
| 顾问建议 | 拒 599；给 779–799 首选 799；Hold；不 dump |

Pace：remaining 14、Ahead → **不是 P05 开门**。同单恢复 ≠ **P62** 新单套利（本卷无新确认号更低价重订）。

**预选 3 个补数：** 本店 Reinstate 是否必须带原价（NV）；OTA 399 是否围栏/错价/嵌套；未来两周高峰免费取消窗。

本卷 **不** 操作 PMS、不代 Reinstate、不代改公开栏。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/27 22:17 CST。Stay Date 8/29 周六，DTA 2。Pace Ahead，remaining 14；公开 BAR 799。客人今早取消原 599，现要同单按 599 恢复；FO 怕 OTA 399。压力来自「认旧价 / dump 399 安抚」，不是「Pace Behind」。

OPERA Vendor 机制：原房型/房价不可用时可迫选新组合 = **厂商能力 Fact**，本卷用来支撑「回写旧价不是强制」——**不是**华住 Reinstate SOP，也不是要求顾问代点。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A Ahead + 旧价恢复 | **主拍**：拒 599；给当前 799 带 |
| B 系统写回 | 若点 Reinstate 带回 599 → 纠正到当前价 |
| C 威胁 399 | Hold Brand.com；不 dump；399 可能围栏/错价 |
| D 弱夜例外 | **不命中**（Ahead + 14） |
| E 新单套利 | **不命中**（无新确认号更低价）→ 若出现则 P62 |
| F 误入 | 非 Soft 潮主拍；非 no-show；非仅收窗 |

---

## 4. Recommendation（本卷）

```text
Do:  不按 599 Reinstate；报当前 779–799 首选 799；Hold 公开 BAR 799
Ask: 本店 Reinstate 是否必须带原价（NV）
Don't: BAR→399；自动认 599；一夜 −15%；编华住 SOP；代点 PMS
```

若客人拒绝当前价离开 → 房仍按 799 可售（稀缺夜机会成本）。若接受当前价 → 同单或新单均可，**过账当前价**。

---

## 5. Why（本卷）

Ahead + remaining 14：599 恢复 = 烧掉一间本可按 ~799 卖的库存。怕 399 而 dump Brand.com = 用公开价奖励纠缠，且 399 未必是可比公开灵活。OPERA「须选新价」说明厂商也不保证旧价可用。弱夜例外本卷不触发。

---

## 6. What To Watch（本卷）

- 是否仍 Ahead / remaining  
- 过账价是否 < 799（reinstate-rate-gap）  
- 公开 BAR 是否被改到 399  
- 是否实际变成取消再订新单（→P62）  

---

## 7. 边界

14/599/399/799 = **Simulation only**。599 rejected on Ahead。399 rejected dump。799 Hypothesis/Simulation。本店政策 NV。未开 P66。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 22:17 CST | 首版 Simulation。拒 599；Hold 799；拒 399。 |
