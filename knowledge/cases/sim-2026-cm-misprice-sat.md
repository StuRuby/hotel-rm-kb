# Simulation Case｜周六 CM 映射错价：美团灵活 399 vs 意图 BAR 799；Hold 799；禁官网对齐 / 禁 dump 399

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-cm-misprice-sat.md`
> 日期：2026-08-27 02:17 CST
> 问：「CM 把标准大床推成了 399」「映射错了美团在卖错房型价」「已经卖了不能破平 / 不能装没看见，官网也砍到 399」「先跟再改回来」
> 调用：`dont-match-error-rate.md` · P60 `channel-mapping-misprice.md` · `metrics/live-vs-intended-rate.md` · P59 · P36 · P18 · P42 · P05 · P16 · P34 · P58 · P01 · T-Parity · `how-much-to-move.md`
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**remaining 14、意图 BAR 799、美团 399 只在本文件当 Simulation，不是市场行情 Fact，不是美团映射 SOP，不是推荐 BAR。** 799 只 Hypothesis/Simulation。399 = **错误价，同时是被拒绝的 dump**，不是新 BAR，不是清市场价。不伪造精确增收。不编本店 CM 字段名 / 美团映射 SOP / 华住 SOP / 退改表 / 佣金% / 弹性 / Walk $。Advisor 不操作 PMS / OTA / channel manager / Brand.com。本卷 **不** 把 Brand.com dump 到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一周六。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-27 周四 02:17 CST
Stay Date：2026-08-29（本周六）
DTA：2
用户原话：「CM 把标准大床映射错了，美团灵活在卖 399。已经卖了，不能破平，也不能装没看见。官网跟到 399。不行就先跟再改回来。」
电商：Brand.com 799 → 399 对齐；理由 = 已经挂出去了
GM：平台会不会说我们破平？要不要先把官网降下去？

错价假设（Simulation only，本卷主拍）：
  意图产品：标准大床、不含早、灵活取消、未登录、意图 BAR 799
  CM：标准大床 映射到 一条错误价格码（本卷不发明字段名）
  美团：同房型灵活公开显示 399
  → Intended? = No。399 是错推，不是本打算卖的价

库存（Simulation）：
  Physical：180  OOO：0
  Remaining：14
  Pace：Ahead vs STLY（Hypothesis 练习）
  意图 BAR：799

拟议 A：Brand.com 799 → 399「已经卖了不能破平 / 不能装没看见」
拟议 B：先跟 399，映射修好再改回 799
拟议 C：Hold Brand.com 779–799 首选 799；先关错码 / 修映射（顾问建议，不点）
```

14 / 399 / 799 **只是本卷练习数**。399 **不是**推荐 BAR，**不是**清市场价。本卷 Advise **不** dump Brand.com 到 399。本店 CM 字段 / 美团映射 SOP / 错价单退改 **不出现在本卷当常模**。

---

## Headline

**180-room city hotel, Saturday: Pace Ahead, remaining 14, intended BAR 799. CM mapped 标准大床 to the wrong rate code; Meituan shows 399 flexible. E-commerce wants Brand.com → 399 because "it's already selling / we can't break parity / we can't pretend we didn't see it." Advise: Hold Brand.com 779–799 prefer 799; close/fix the bad mapping first; do not treat 399 as the clearing price; after the fix, still Ahead → P01 Hold. 399 = rejected dump AND the error price. 799 Hypothesis/Simulation.**

---

## 1. Intake

口径：Intended? = No → gap = 399 − 799 = **−400**（错价，不是破平尺）。Pace Ahead。remaining 14。意图 BAR 799。
独立店。无声明品牌底 → **不发明美团映射 SOP / 本店 CM 字段名 / 华住 SOP / 退改表**。
佣金 / 弹性 = **Unknown**，不编。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| Remaining | **14** |
| Pace | Ahead |
| 意图 BAR | 799 |
| 美团活价（错码） | **399** |
| Live − Intended | **−400** |
| Intended? | **No**（映射错） |
| 电商/GM 拟议 | 砍到 399 / 先跟再改 / 怕破平 |

Pace：remaining 14、Ahead → **不是 P05 开门**。错价不能推翻 Ahead Hold，也不能把 399 写成新地板。

**预选 3 个补数：** 美团 399 对应哪条价码/映射（用户截图，不编字段）；渠道侧该码现在是否仍可订；已订 399 的单量（处理口径 NV，有则用户读）。退改表不问成「行业怎么做」。

本卷 **不** 操作 PMS、不改 Brand.com、不代客改 CM 映射。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/27 02:17 CST。Stay Date 8/29 周六，DTA 2。公开 Pace Ahead，remaining 14，意图 BAR 799。电商甩美团 399 截图（本卷假设来自标准大床映射到错误价码）。压力来自「已经卖了 / 破平 / 不能装没看见 / 先跟再改」，不是「Pace Behind」。

SiteMinder Help：断映射只停平台更新，渠道侧可能仍开 = **该厂商机制 Fact**，本卷用来提醒「修映射还要确认渠道侧关了」——**不是**美团点击 SOP。

---

## 3. Diagnosis

| 形 | 本卷 |
| --- | --- |
| A 错价当市价 | **主拍是**（399 被当成已经卖了的市价） |
| B 破平假警报 | **命中**：GM 喊破平；便宜侧是错码，不是故意 undercut → 不走 P59 对齐辩论 |
| C 不可比 | 主拍否（假设同房型灵活）。对照：若含早/会员不同且不是映射 → P36 |
| D 促销忘关 | 对照枝：若其实是忘关促销 → 仍本剧关错开，不是 P18 报名 |
| E 前台要跟 | 对照：有人拿 399 截图到前台 → P42 不跟 |
| F 弱夜借口 | 对照：399 成交快被当成 Pace → 修好后仍 Ahead，不走 P05 |
| G 误入 | 非 P16/P34/P58 主拍 |

结论：形 A + 形 B。默认 **停错码 / 修映射 + 意图 BAR Hold**，拒绝拟议 A/B。修好后仍 Ahead → **P01 Hold**。

---

## 4. Advise（本卷）

1. **Hold Brand.com 779–799，首选 799。**  
2. **不要** Brand.com → 399「已经卖了 / 不能破平 / 不能装没看见」。  
3. **不要**「先跟再改」。  
4. 先核：399 是否错映射 / 错码 / 忘关促销；是则建议关/纠；顾问不点 CM / 美团。提醒：改映射后还要看渠道侧该码是否仍可订。  
5. 已订 399 的单：问本店政策（NV）；**不编退改表**。  
6. 24h 看活价是否收回；Pace 仍 Ahead → 继续 Hold（P01）。399 不是清市场价。

三句原样同剧本/主卡。

---

## 5. 对照枝（短）

| 枝 | 若 | 则 |
| --- | --- | --- |
| 399 其实是本打算卖的促销 | 故意报名 | P18 闸；本卷主拍不是 |
| 399 是可比故意 undercut | 真破平 | P59 修侧；仍不砍官网到 399 |
| 不可比（含早/税）且不是映射 | 口径 | P36；Hold 799 |
| 修好后真 Behind 且厚 | 需求弱 | P05；理由写 Pace，不写错价；仍禁 399 |
| 竞对也 399 | Comp | P16 另诊；本卷仍不砍 Brand 对齐本店错价 |
| 前台要跟 399 | 口价 | P42；错价也不跟 |

---

## 6. 数字纪律

| 数 | 角色 |
| --- | --- |
| 180 | 店规模 Simulation |
| 14 | remaining Simulation |
| 799 | 意图 BAR Hypothesis/Simulation；Hold 首选 |
| 399 | **错误价 + rejected dump**；非推荐 BAR；非清市场价 |
| −400 | Live − Intended Simulation |

精确增收：**不编**。

形状提醒（无弹性）：把剩余 14 间公开栏从 799 改成 399，稀释的是每一间后续公开成交，且不能证明那 14 间会因 399 卖光。错码关掉后，399 不再是可售信号。

---

## 7. 禁止在本卷出现的「Fact」

美团映射 SOP、本店 CM 字段名、华住映射 SOP、错价单退改表、佣金差表、弹性、Walk $、把 399 写成该夜市价或推荐 BAR、把 799 写成行情 Fact。
