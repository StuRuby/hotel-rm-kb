# Simulation Case｜周六 OTA 切房 15 pickup 3：公开 remaining 12 Pace Ahead → Hold 799；禁 dump 399 消化切房

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-allotment-sat.md`
> 日期：2026-08-26 18:17 CST
> 问：「切了 15 间卖不掉，公开价降到 399 把切房消化掉」「美团还占着，我们看起来没房了」「高峰把切房关了放回来」
> 调用：`dont-dump-bar-to-clear-allotment.md` · P58 `channel-allotment-unsold.md` · `metrics/allotment-pickup.md` · P52 · P18 · P20 · P25 · P01 / P05 · P27 · T-Guar · `how-much-to-move.md`
> 声明：180 间店与下列库存/价格均为 **练习数据（Simulation）**。不得写成某家真实酒店结论。**切房 15、pickup 3、未还 12、公开 remaining 12、BAR 799、拟议 dump 399 只在本文件当 Simulation，不是市场行情 Fact，不是美团/携程切房 SOP，不是推荐 BAR。** 799 只 Hypothesis/Simulation。399 = **被拒绝的 dump**，不是新 BAR。不伪造精确增收。不编 allotment % / 还房小时 / 佣金% / 弹性 / Walk $。Advisor 不操作 PMS / OTA / channel manager。本卷 **不** 把 BAR dump 到 399。

---

## 0. 用户原始输入（仿真）

同一家 180 间城市店、同一笔已切给 OTA 的周六配额。

```text
酒店：180 间（Simulation，中国大陆城市中档店，独立，无声明品牌底）
分析日：2026-08-26 周三 18:17 CST
Stay Date：2026-08-29（本周六）
DTA：3
用户原话：「切了 15 间卖不掉，公开价降到 399 把切房消化掉。美团还占着，我们看起来没房了。」
电商：公开 BAR dump 到 399，跟切房一起出
GM：高峰把切房关了放回来？还是降公开价更快？

切房（Simulation only，发明数）：
  合同切房：15 间（某 OTA；不是行情 Fact）
  已 pickup：3
  Unreleased = 15 − 3 = 12
  扣不扣可售：本卷按 **Deduct** 处理主拍（店配 NV；另给 Non-Deduct 对照句）
  合同还房时点：Unknown（不编美团小时；本卷按「尚未还」处理高峰拍）
  佣金 / 切房价栏 / 品牌底：Unknown

库存（Simulation）：
  Physical：180  OOO：0
  公开 remaining（切房仍扣着）：12
  Pace：Ahead vs STLY（Hypothesis 练习）
  公开 BAR（标准、不含早、灵活）：799

拟议 A：公开 BAR 799 → 399「把切房消化掉」
拟议 B：高峰把未卖 12 间切房还给房子 / stop-sell 该桶，公开 Hold
拟议 C（预演还房后）：12 回 house，公开 remaining 变 24，砸不砸
```

15 / 3 / 12 / 399 / 799 **只是本卷练习数**。399 **不是**推荐 BAR，是被拒绝的 dump。本卷 Advise **不** dump BAR 到 399。本店切房 % / 还房 SOP **不出现在本卷当常模**。

---

## Headline

**180-room city hotel, Saturday: public remaining 12, Pace Ahead, OTA allotment 15 of which 3 picked up (12 still sitting). E-commerce wants public BAR to 399 to digest the allotment. Advise: Hold public 779–799 prefer 799; release/shrink the unused allotment rather than dump public; after release, re-score — this sim stays Ahead so still Hold; only if then thick and Behind, P05. 180/12/15/3/399/799 Simulation only. 399 = rejected dump.**

---

## 1. Intake

口径：未还 12 **不进**「已卖掉的公开需求」。公开 remaining 12 是切房仍扣着时的公开可售。Pace Ahead。BAR 799。
独立店。无声明品牌底 → **不发明华住/美团切房 SOP**。
佣金 / 弹性 = **Unknown**，不编。

| 尺 | 本卷周六 |
| --- | --- |
| Physical | 180 |
| 切房 / pickup / 未还 | **15 / 3 / 12** |
| 公开 remaining（扣着时） | **12** |
| Pace | Ahead |
| BAR | 799 |
| 扣不扣 | 主拍 Deduct（对照 Non-Deduct） |
| 电商/GM 拟议 | dump 399 消化切房 / 高峰还房 |

Pace：公开 remaining 12、Ahead → **不是 P05 开门**。未还 12 若回 house，remaining 将变 12+12=**24**，仍须再看 Pace；本卷 Pace 声明仍 Ahead → **仍 Hold**，不是自动 P05。

**预选 3 个补数：** 扣不扣是否属实；合同还房会不会在入住前落地；还房后 24h 公开 Pickup。allotment % 不问成「行业多少」。

本卷 **不** 操作 PMS、不改 BAR、不代客 stop-sell。

---

## 2. Situation

180 间仿真城市店。分析时刻 8/26 18:17 CST。Stay Date 8/29 周六，DTA 3。

OTA 切房 15，pickup 3，未还 12。公开 remaining 12，Pace Ahead，公开 BAR 799。电商要把公开 BAR dump 到 399「消化切房」。GM 问高峰还房还是降公开价。

本卷 **不是** 真店，也不是「中国 OTA 切房=15/180」Fact。399 不是推荐 BAR。

---

## 3. Diagnosis

主拍 — 形 **A + B**（高峰拍叠 C；对照 D）

1. **假满房（A）：** 切房扣着，公开只剩 12，看起来没房。OTA 桶里 12 间未 pickup。主风险不是公开卖不动，是合同桶占着。动作是还/缩未卖切房，不是砍 BAR。
2. **消化切房 dump（B）：** 禁止 dump 公开 BAR 到 399。两套价栏。禁止一夜 −15%。
3. **高峰还房（C）：** Pace Ahead + remaining 12 薄 → 还 12 间未卖切房（或 stop-sell 该桶），公开 Hold 779–799 首选 799。
4. **对照 Non-Deduct（D）：** 若本店其实不扣，公开 remaining 12 已是真剩余；Pace Ahead → 仍 P01 Hold；未卖 12 是合同/pickup 问题，仍不改 BAR。
5. **预演还房后：** 12 回 house → remaining 24。本卷 Pace 仍 Ahead → **继续 Hold**。只有那时 Pace 翻成 Behind 且厚，才评 P05——理由写公开 Pace，不写消化切房。

问题树 §65。D1–D10：公开 Pace Ahead；公开 remaining 薄；切房 pickup 慢；价格位置未给出竞对（不编）；不是团块（P52 离开）；不是房型 nest（P13 离开）。

**主诊断：** 把合同切房桶误当成公开需求，要用 399 公开 dump 去填。
**次诊断：** 周六公开是 Ahead + 薄 remaining，属 P01 Hold，不是 P05。

---

## 4. Recommended Action（Simulation）

```text
Stay Date:            Saturday 2026-08-29
Room Type:            先动公开 BAR / 基础售卖房型
Rate / Rate Plan:     公开 BAR
Current Value:        799
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     还/缩未卖 12 间切房，或 stop-sell 该 OTA 桶。不关公开 BAR
Restriction Action:   今天不因切房设 MinLOS
Channel Action:       不报 399 今夜特价冲切房（P18 Skip）。不把 Brand.com 跟到 399
Do-not-do:
  - BAR → 399
  - 一夜 −15%
  - 编美团还房小时 / 佣金% / 弹性
Staging:
  第一刀：还房 + 公开 Hold
  还房落地后：重算公开 remaining + Pace；本卷仍 Ahead → 继续 Hold
  若（本卷未给）那时 Behind + 厚 → 才评 P05 bounded，理由写公开 Pace
```

**没有 −15% overnight。399 从未被推荐。**

早会一个动作（P45）：**今晚高峰还 12 间未卖切房；公开价 Hold 799。**

---

## 5. Why（Simulation）

**数据：** 180 间；切房 15 / pickup 3 / 未还 12；公开 remaining 12；Pace Ahead；BAR 799；拟议 399。

**逻辑链：**

```text
Deduct 切房 12 间未还
+ 公开 remaining 12、Pace Ahead
→ 假满房 + 高峰
→ 还房，不降公开价
→ dump 799→399 稀释公开 12 间的每一间，形状上限 12 × 400
   （不得假设 12 间全按 399 卖完；不是弹性模型）
→ 公开更便宜时，增量可走公开栏，切房 12 仍可能空着 = 两头输
```

**Hypothesis：** 799 带；「需求改走公开栏」是方向，无 η。Vendor：切房可以独立于公开可售（Cloudbeds / OPERA §38）。

---

## 6. Expected Impact（Simulation）

- **公开 ADR：** Hold 799 保护 12 间公开剩余的增量 ADR。dump 399 压公开增量。
- **切房桶：** 还房不承诺这 12 间会被公开需求吃掉；只是把可售还回 house。dump 399 **不保证** 切房 pickup 从 3 变成 15。
- **OCC：** 不承诺满房。Ahead 路径接受速度可能慢于 dump，但仍不是弱市。
- **稀释形状（不是预报）：** 若 12 间公开剩余全按 399 成交，相对 799 的价差形状是 12 × 400；不得把这笔写成「可增收/可减收 4,800」。已售锁价不进。
- **Net / Profit / Walk $：** Unknown。不编佣金%。

---

## 7. Risk（Simulation）

| 风险 | 观察 | 出口 |
| --- | --- | --- |
| 还房后公开翻成 Behind | 还房后 remaining 与 24h Pickup | 理由写公开 Pace，评 P05；仍禁 399 |
| 合同还不出 | 用户合同 | 问条款；金额 NV；仍不 dump BAR |
| 其实不扣库存 | 扣不扣 | 形 D：公开已是真剩余；仍 Hold |
| 其实是团块 | 合同类型 | 离开到 P52 |
| 公开 399 被执行 | 渠道价 | 撤回；399 不是推荐 |

---

## 8. What To Watch（Simulation）

切房 24h pickup；未还是否在还房后变 0；公开 24h 净增；还房后公开 remaining（12 vs 24）；公开栏是否出现 399。

---

## 9. Re-evaluation Trigger（Simulation）

```text
IF 还房落地 AND Pace 仍 Ahead → 继续 Hold 779–799 首选 799。
IF 还房落地 AND Behind + remaining 厚 + Pickup 慢 → P05 bounded；理由是公开 Pace，不是消化切房。仍禁 399。
IF 证实 Non-Deduct → 公开 12 已是真剩余；Ahead → Hold；切房走合同。
IF 提案坚持 BAR→399 或一夜 −15% → 拒绝。
IF 要报今夜特价冲切房 → P18 Skip（高峰/Ahead）。
IF 其实是团 cutoff → P52。
```

---

## 10. Confidence（Simulation）

```text
Confidence: Medium（方向）；幅度 Hypothesis
为什么不是 High：扣不扣/还房时点本卷练习假设；799/399 是 Simulation；无弹性、无佣金。
为什么不是 Low：两桶 + Ahead + 薄 remaining 同向；399 作为 dump 可证伪。
因此怎么用：还 12 间切房；公开 Hold 799；24h 用间夜 Trigger。不要 dump 399。
```

顾问对电商 / GM：

> 「先问这笔切房扣不扣可售、合同几点还、今晚 pickup 几间。切房是合同桶，不是公开需求，也不是今晚该砍 BAR 的理由。」
> 「高峰先把卖不掉的切房还给房子。公开价 Hold 779–799，首选 799。不要因为还占着 15 间就 dump。」
> 「不要把 BAR 砍到 399 为了消化切房。公开真弱才走 leftover 围栏，理由也不是切房。」
