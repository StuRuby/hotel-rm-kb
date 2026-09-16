# LOS Optimization｜连住优化（顾问级）

> 资产：Wave7 理论卡  
> 路径：`pricing/los-optimization.md`  
> 能力层级：Diagnose → Advise（不实现 RMS LOS 算法）  
> Last Verified：2026-08-23  
> 知识类型：Best Practice + Hypothesis + Theory（16:17 网络）  
> 证据等级：B（限制定义互证）；A（Kimes / HSMAI 方向）；数字格 Hypothesis；压缩夜价值 = 内部指标  
> 配套：`restrictions/restriction-framework.md` · `recommendations/minlos-peak-protect.md` · `recommendations/shoulder-open-for-peak.md` · P21 / P22 · **P40** `advisor-playbooks/stay-pattern.md` · `metrics/stay-network-value.md`  
> 问题树：O8 Restriction · O10 LOS · §16 Event  
> 禁止：整周同一 MinLOS；缺肩日把 MinLOS 写成今天 Fact；用连住深折砸高峰；写系统点击步骤；「适当设连住」。

---

## 0. 一句话

**LOS 优化 = 用高峰夜拼出肩日，而不是把高峰单晚贱卖、把肩日当垃圾日。**  
工具只有三类：限制（MinLOS / CTA）、包装（Peak+Shoulder 连住价）、关单晚（关的是单晚产品，不是关 BAR）。

与已有启发式同一把尺：

```
MinLOS=2 只盖已证实 Peak；肩日 Open
价已最高只关/只限，不涨
Sellout 先关低价再涨
围栏 −3–5%；不一夜 −15%
不跟价条件仍先看 Pace/Pickup
团询走 Counter，不按「500 vs BAR」
```

成功标准：用户问「会展周三高峰、周二周四怎么办」→ 肩日开/关、是否 MinLOS、高峰第一刀，写到日期。

---

## 1. 三个问题（先分开）

| 问 | 不是 |
| --- | --- |
| **拼不拼连住？** 高峰+肩日打成一笔，总收入是否 > 高峰单晚 + 肩日空房 | 不是「连住一定比单晚好」 |
| **MinLOS 还是折扣连住？** 用限制挡单晚，还是 BAR 不动、用围栏吸引加夜 | 不是同一把刀 |
| **单晚关不关？** 高峰还让不让订 1 晚 | 关单晚 ≠ 关 BAR ≠ 关肩日 |

日历先画再动（与 P06 / 限制框架同一形状）：

```
肩日(−1) ── Peak ── 肩日(+1)
  Open + 包装      限单晚 + 关低价     Open + 包装
```

---

## 2. Peak + Shoulder 拼连住

### 2.1 何时拼（Hypothesis）

同时接近：

1. Peak 已证实（Pace Ahead **或** Pickup Fast **或** 竞对满 / 官方展期+距离近）。  
2. 肩日 OTB 明显低于 Peak（经验起点：低 ≥8pp，或肩日 Days-to-Sellout > DTA）。  
3. overnight 合理（会展布撤展、演唱会前夜、节假日出城前夜）。  
4. 高峰仍可订单晚，或肩日还开着垃圾价。

**不拼：** 只有日历旗标；肩日未知（今天不设 MinLOS，只写 IF）；肩日已经热（问题是价不是 LOS）；3D 快 7D 不快（先查一团）；淡日 / 市场也弱。

### 2.2 包装怎么定价（Hypothesis）

```
连住套夜间均价 ≥ Peak 新地板与肩日守价的加权
例：Peak 首选 1029、肩日 799 → 两晚套 ≥ 1029+799 的 0.97（围栏 −3%）
禁止：两晚套均价打穿 Peak 新地板（等于用肩日补贴把高峰贱卖）
禁止：套价再叠神券 / 大促直到低于新地板
```

肩日单独价：跟半档或收到最低竞对，**不**把 Peak 价挂到肩日，**不**把肩日砸到一夜 −15%。

Lighthouse 2025-06-27（**B**）：MinLOS 可把需求推到肩日；MaxLOS 用在进入高峰前的低价长住。RevenueRise 会展实践文（**B/C**）强调主动卖布撤展夜——作方向，不当瑞士店数字。

---

## 3. MinLOS vs 折扣连住

两把刀，不要叠到无解。

| | **MinLOS（限制）** | **折扣连住（围栏）** |
| --- | --- | --- |
| 改什么 | 谁还能订 | 价签（BAR 通常不动） |
| 高峰 | **首选**：已证实 Peak 设 =2 | Peak **不要**再给连住深折 |
| 肩日 | **不设** MinLOS / CTA | 可用 −3–5% 连住围栏（档 E） |
| 价已最高 | 只限不涨 | 不再折 |
| 弱日 / 市场也弱 | 解开，不是加 | 最多小配额围栏，不砸 BAR |
| 不可逆 | 高于改 BAR | 低于 MinLOS |

**决策（Hypothesis）：**

```
Peak 会被单晚切 + 肩日空 + overnight 齐
  → MinLOS=2 盖 Peak；肩日 Open；可加「不打穿地板」的连住包装
Peak 厚、肩日已热
  → 不设 MinLOS；只涨/关低价
Peak 未证实 / 肩日未知
  → 今天不设 MinLOS；BAR 按普通 Pace；折扣连住最多档 E
只想促肩日、Peak 不热
  → 不要 MinLOS；肩日连住 −3–5%，BAR 不动
```

连续 Peak ≥3 **且** 肩日也在动，才评 MinLOS=3；首选仍先 =2 看 48h（与 `minlos-peak-protect.md` 同一句）。

CTA 替代：不许「只到高峰」但允许已在住的住过 → 高峰 CTA，**不要**与 MinLOS 叠死。CTD 默认不用。

---

## 4. 单晚关不关

「关单晚」= 高峰到达必须 LOS≥2，或高峰 CTA。BAR 对符合 LOS 的人保持 Open。

| 答案 | 单晚 | 落地 |
| --- | --- | --- |
| Peak 旁证齐 + 肩日明显更空 + overnight | **限** | MinLOS=2 或高峰 CTA |
| 只 Peak 热、肩日未知 | 今天不限 | 只关低价；IF 补肩日 |
| overnight 不成立 | 不按事件限 | 普通 Pace |
| Peak 仍厚、肩日已热 | 不限 | 只涨/关低价 |
| 价已最高、仍会被单晚切 | **限** | 只限不涨 |
| 淡 / 市场也弱 / Pickup 死后独限 | **开** | 解开，不降价冒充策略 |
| DTA≤2 才想起设 MinLOS | 慎设 | 先关低价；新 MinLOS 可能只挡尾部 |

**不要**用关 BAR 代替关单晚。  
**不要**把肩日一并关单晚（那是把拼图的另一半锯掉）。

---

## 5. 与团 / 促销 / 渠道

- 团只要高峰单晚 @ 低价 → 视为 LOS 置换，走 P10 **Counter**（连住或加价），见 `theory/optimization-advise.md`。  
- OTA「连住优惠」若由**酒店承担**且盖 Peak → 当低价 Rate Plan，压缩日 **关**，不是「多卖一晚就报」（P18）。  
- 弱日低价长住可能跨进 Peak → 弱日 MaxLOS 或高峰关 AP，不整段深折。

---

## 6. 观察（300 间尺，与过程文件同一）

| 信号 | 动作 |
| --- | --- |
| 24h 高峰 Pickup <3 或短住拒单升 | 解开该日新 MinLOS；低价不自动重开 |
| 24h 3–7 | 守 =2 |
| 24h ≥8 且非一团、肩日开始动 | 守限制；价按第二刀 |
| 肩日仍 0、高峰将满 | 确认肩日 Open + 包装；**不**把 MinLOS 延到肩日 |
| 竞对全开单晚、我们 Pickup 死 | 解开，价守原带 |
| 取消翻倍 | 停加严到 =3 |

---

## 7. 证据（2026-08-20）

| 论断 | 级 | 源 |
| --- | --- | --- |
| Stay restriction = MinLOS / MaxLOS / CTA / CTD | B | https://www.mylighthouse.com/resources/blog/guide-hotel-stay-restrictions-tips-revenue-manager （2025-06-27，本轮打开） |
| MinLOS 可推肩日；MaxLOS 打进入高峰前的低价 | B | 同上 |
| 会展周主动卖肩日 + MinLOS 盖高峰 | B/C | RevenueRise trade-fair 实践文；不当其欧元表 |
| 「高峰必须 MinLOS=2」官方 | — | **未找到** → 本库条件句 = Hypothesis |
| 中国 OTA 连住是否加分/排名 | — | **NV** |

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-LOS-01 | MinLOS 挂到达日还是在住夜 | 建议写双口径（NV-RST-01） |
| NV-LOS-02 | 连住套均价相对 Peak 地板的官方下限 | 本库：套均价不得打穿 Peak 新地板 |
| NV-LOS-03 | 中国节假日 MinLOS=3 接受度 | 第一刀 =2 |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。拼连住 / MinLOS vs 折扣 / 单晚是否关。兼容 MinLOS=2 只盖 Peak。 |
| 2026-08-23 16:17 CST | 加深网络：Arrival×LOS、压缩夜价值、手算表、BAR-by-day vs BAR-by-LOS。不改 §2 包装算术。不重写 P40。不抄 Duetto %。 |


---

## 10. Arrival × LOS 是一张网（2026-08-23 16:17）

> 加深，**不改** §2 Peak+Shoulder 算术、§3 MinLOS vs 折扣、包装句「套均价 ≥ Peak 地板 + 肩日 ×0.97」。  
> 剧本动作仍走 **P40**。本段只回答 **为什么** Sat-only 在肩日还卖时不是增量。  
> 新卡：`metrics/stay-network-value.md`。不新开决策卡（`reject-sat-only-on-peak.md` 已覆盖拒单晚 / 拒砍高峰）。

一笔预订同时占用 **到达日之后的连续若干夜**。高峰那一晚是瓶颈资源；肩日是另一件资源。三晚均价把两件资源搅成一个数，所以会看起来「连住很漂亮、单晚 ADR 也高」——问错了对象。

```
日历（与 §1 同一形状）

肩日(−1) ── Peak ── 肩日(+1)
  软资源         瓶颈资源        软资源

Sat-only     只消耗瓶颈
Fri–Sun      消耗瓶颈 + 两晚软资源 → 同一间周六房，网络收入通常更高
```

顾问比较必须钉在 **同一间高峰剩余房** 上：

| 形态 | 占了周六这间房之后，周五/周日还能不能另卖 |
| --- | --- |
| Sat-only | 不能。瓶颈被占。肩日若还卖得动，少掉的是整笔连住 |
| Fri–Sat / Sat–Sun / Fri–Sun | 肩日收入是这间房带来的，不是「另外找客」 |

这就是 P40 形 A 的理论：肩日有可售需求时，Sat-only **置换** 的是 2–3 晚 stay，不是填空。  
形 B：肩日已经冰，连住需求≈0，Sat-only 才是增量。

Kimes（A，eCornell IMPACT *Dos and Don'ts of Length of Stay*，14:17 已开）：高需求后接低需求时拒短住、接更长住；**必须有足够长住需求**，否则 MinLOS 伤 RevPAR。后半句 = 形 B，不是「每个周六都限」。

HSMAI 2020（A）：限制只在需求超过库存 **且** 存在 LOS>1 的需求时才有意义。两条都缺 → 不要限。

网络语言与 `theory/optimization-advise.md` 同向（多晚 = 多资源，门槛≈各夜机会成本之和）。本阶段 **不** 算 bid price，不摘 Phillips/Talluri 正文。

**三句（顾问出口）：**

1. 连住好不好，看高峰那一晚被谁占住，不看三天均价漂不漂亮。  
2. 只订周六，如果周五周日还卖得出去，占的是瓶颈夜，不是增量。  
3. 不要把周六砍下去做便宜连住；肩日冰了，周六单晚才是增量。

---

## 11. 压缩夜价值（内部顾问指标，Hypothesis）

独立卡：`metrics/stay-network-value.md`。

```
CNV = 该笔客房收入 / 该笔吃掉的紧夜数
```

- **紧夜**：已证实 Peak/压缩夜（Pace Ahead 或 Pickup Fast 或竞对满）。周末常常只有周六一晚紧。  
- **分母**：碰到几晚紧夜就记几。三晚套若只有周六紧 → 分母 **1**，不是 3。  
- **不是 STR 公式。** 2026-08-23 打开 CoStar STR Glossary：Length of Stay = 住几晚；ADR / RevPAR 按夜。**无** compressed-night value 词条 → 标 Hypothesis / 内部顾问指标。  
- Duetto Vendor：按 stay 总收入 / 压缩夜排序（14:17 已开 Resource Hub）。方向可用，**不要**把其 ADR 混合权重或 5–7%/7–10% 抄成本店公式。

和 ADR 的差别：ADR = 收入/LOS，会把高峰贡献摊进肩日。CNV 把肩日收入 **加在瓶颈夜上**，所以 Fri–Sun 的 CNV 通常高于 Sat-only。

T19：用便宜三晚均价占周六，机会成本是被挤掉的高峰贡献，不是 0。无变动成本不说「699 总比空着强」——空着的是肩日。  
T20：不要砸高峰地板去卖周五。无声明底不发明 699。

Wave7 §2 包装句 **保持**：连住套夜间均价 ≥ Peak 新地板与肩日守价的加权 ×0.97；禁止套均价打穿 Peak 地板。与 P40 Hold 799 同向。

---

## 12. 手算表（无 RMS；Simulation 数字）

与 P40 仿真卷同一套练习数（180 间；BAR 周五 699 / 周六 799 / 周日 659）。**不是真店。** 周五 699 = 该卷肩日 BAR，不是品牌底、不是华住 699。完整表在指标卡 §3。

**形 A · Remaining 周五 94 / 周六 52（紧）/ 周日 108，肩日 Pickup 仍正**

| 形态 | 客房收入 | 压缩夜 | CNV | 相对 Sat-only |
| --- | --- | --- | --- | --- |
| Sat-only | 799 | 1 | 799 | 占瓶颈 |
| Fri–Sat | 1,498 | 1 | 1,498 | 多一晚肩日 |
| Sat–Sun | 1,458 | 1 | 1,458 | 多一晚肩日 |
| Fri–Sun | 2,157 | 1 | 2,157 | 网络最好 |
| Sun-only | 659 | 0 | 不对瓶颈排序 | 不占周六 |

→ 拒 Sat-only。MinLOS=2 或 CTA。Hold 周六 779–799 首选 799。不要为了把三晚算术均价 719 砍到 686 而改周六=699。719/686 只是 (699+799+659)/3 与砍高峰后的算术，**不是**中国 OTA 公式（NV-LOS-04）。

**形 B · 周五/周日 Pickup 死、市场也弱**

→ Sat-only @ 799 是增量。禁止把 MinLOS 留成习惯（P33）。禁止砍周六买肩日。

肩日未知：今天不设 MinLOS；只关高峰低价；写 IF。

---

## 13. BAR-by-day vs BAR-by-LOS

| | BAR-by-day（本库默认 Advise） | BAR-by-LOS（Vendor 方法名） |
| --- | --- | --- |
| 客人付 | 各夜 BAR 之和 | 一条均价，按到达日 + 时长 |
| 证据 | 日历价惯例；HSMAI 2020：stay-night 定价更常见，到达×LOS 许多分销不接受（A） | HSMAI Academy *Length of Stay pricing*（A 词条，本轮打开）；IDeaS Ideal Pricing 转载（A Vendor）；Duetto Open Pricing / BAR-LOS（A Vendor） |
| 本库 | 高峰守地板；肩日围栏 −3–5%；网络用限制管 | **不**规定必须开 LOS 价。Duetto 文 5–7%/7–10% **不进** `how-much-to-move` |

没有 RMS、渠道只吃日历价 → 不要假装开了 BAR-by-LOS。用 MinLOS/CTA + 日历 BAR 管网络。销售要把周六砍到肩日「做 LOS 价」→ 那是形 C，拒绝。

---

## 14. 交叉（16:17）

| 资产 | 本段 | 不是 |
| --- | --- | --- |
| **P40** | 接/拒 Sat-only、砍不砍高峰。本段给估值 | 第二本剧本 |
| **P11** | 周末是不是压缩市场 | 本段不定价差带 |
| **P21** | 节日日历哪天 MinLOS | 不是每个周六 |
| **P33** | 淡日不要留 MinLOS=2 | 不解已证实高峰 |
| **T19** | 廉价均价可毁高峰贡献 | 不编变动成本 |
| **T20** | 不砸高峰地板卖周五 | 无底不发明 699 |
| **§2 包装** | 套均价 ≥ Peak 地板+肩日×0.97 | 不与 Hold 799 对打 |
| **P10** | 团只要高峰单晚 → Counter | 不是散客 Sat-only 闸 |

不新开 `dont-cut-peak-to-buy-shoulder.md`：`reject-sat-only-on-peak.md` 已含拒砍高峰。

---

## 15. 证据补充（2026-08-23 16:17）

| 论断 | 级 | 源 |
| --- | --- | --- |
| LOS / ADR / RevPAR 定义；**无** compressed-night value | S | CoStar STR Glossary https://www.costar.com/products/str-benchmark/resources/glossary （本轮打开） |
| 高→低需求拒短住；须有长住需求 | A | eCornell Kimes IMPACT（14:17 已开，不重抓） |
| MinLOS 词条 | A | HSMAI Academy MinLOS（14:17 已开） |
| LOS pricing = 到达日+时长一条均价 | A 词条 | https://academy.hsmai.org/glossary/length-of-stay-pricing/ （本轮打开） |
| 限制：超需求且存在 LOS>1；到达×LOS 分销常不接受 | A | HSMAI 2020 PDF（14:17 已开） |
| 按 stay 总收入/压缩夜排序 | A Vendor | Duetto Understanding Forecasts（14:17 已开） |
| BAR-LOS 5–7%/7–10% | A Vendor | **% 不进启发式**（14:17 已开） |
| BAR by Day vs BAR by LOS 方法名 | A Vendor | Hotel Online 2016-06-16 IDeaS 转载（14:17）；ideas.com 原文空页 Failed |
| 中国 OTA 连住均价公式 | — | **NV。不编。** |
| 「高峰必须 MinLOS=2」官方定律 | — | 未找到 → Hypothesis |

---

## 16. Need Verification（16:17 追加）

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-LOS-04 | 中国 OTA 连住均价展示公式 | **不写。** 无截图不发明 |
| NV-LOS-05 | 美团/携程 MinLOS/CTA 展示与拒单 | 问用户截图 |
| NV-LOS-07 | STR/HSMAI 是否另有 stay-value / compressed-night 官方式 | 已开 Glossary **无** → 本尺 Hypothesis |
| NV-LOS-06 | 长包 / 月租 | 本小时不写 P41 |

NV-LOS-01..03 仍见 §8。
