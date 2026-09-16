# Playbook P38｜取消政策随 DTA 收紧（先关免费取消，不先砍 BAR）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/cancel-policy-tighten.md`  
> BACKLOG：P38 取消政策随 DTA 收紧 · HIGH（本周 timely）· 先诊断枝 · slug **cancel-policy-tighten**  
> 状态：**drafted**（2026-08-23 06:17 CST）  
> 配套卡：`recommendations/tighten-cancel-before-cut.md`  
> 理论：`restrictions/restriction-framework.md` §1.5 Advance Purchase · `pricing/how-much-to-move.md` 档 E/G · `overbooking/overbooking-framework.md`  
> 交叉：P14 Soft 诊断（本剧不重做取消病因）；P19 预付产品（本剧管窗口与杠杆序，不改编幅 X）；P28 天气夜不收窗不涨；P05 政策杠杆先于 dump；P02 真弱才围栏；T19 贡献 / T20 品牌底；P37 Remaining=可售（不混）  
> 问题树：§10 · 本轮「免费取消堆着不是弱需求」  
> 仿真：`cases/sim-2026-free-cancel-stack-dta3.md`（**Simulation**）  
> 证据等级：A Vendor（Booking Partner Hub 政策页）；A 协会（HSMAI ROAB 付款政策）；A Vendor 过时样本（Duetto 2016，数字不进启发式）；B（Lighthouse 2025-08-29；过程互证）；C（RevPerfect 压缩日 cutoff 例）；美团/携程截止点 / 罚金表 / 行业取消% = **非 Fact**  
> Last Verified：2026-08-23  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议改 **新生产** 的取消窗 / 开浅预付 / Hold BAR。**不操作** PMS / Channel Manager / OTA 后台，不代改已确认订单。  
> 禁止：编造美团/携程免费取消截止点或罚金表；把博客取消率当行业 Fact；改已确认客人规则当暗降；一夜 −15%；无地板发明 699；天气不可抗力夜收窗；佣金%；点弹性。

---

## 0. 一句话

免费取消堆着先当 Soft，不是先砍价占量。  
入住临近先收 **新单** 的取消窗口或推不可退，不要改已确认客人的规则当暗降。  
真洗完还弱，再走围栏；禁止一夜 −15% 把灵活单锁死。

完成定义：一张「高灵活 OTB ≠ 弱需求」过程。杠杆序写进**同一本**剧本：

| 序 | 杠杆 | 默认 |
| --- | --- | --- |
| **0** | P14：OTB 当 Soft | 不按硬需求涨，也不按「看起来满」砍 |
| **1** | 缩短/关闭 **新单** 免费取消窗（随 DTA） | Peak Ahead 更早收；弱平日可留一道围栏灵活 |
| **2** | 把剩余需求推向预付/NR（P19） | 第一刀 −3–5%，**高于**品牌底 / 档 E 下沿 |
| **3** | Hold BAR | 灵活堆着不是降 BAR 的门 |
| **4** | 洗完仍真弱 → P02/P05 围栏 | 禁一夜 −15%；无成本不说总比空着强 |

顾问必须能直接说的三句：

```
1. 免费取消堆着先当 Soft，不是先砍价占量。
2. 入住临近先收新单的取消窗口或推不可退，不要改已确认客人的规则当暗降。
3. 真洗完还弱，再走围栏；禁止一夜 −15% 把灵活单锁死。
```

独立默认（本库 Hypothesis）：顾问动的是 **尚未产生的新预订**。已确认灵活单保持原规则。Booking 商家页把确认预订当协议（A Vendor）；单方面改已确认政策 = 暗降 + 投诉，本库禁止。Lighthouse 说的「订后小折换 NR」只在 **客人同意** 时作为可选锁单，不是暗改。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「OTB 看起来还行，但今晚全是免费取消，要不要先砍价占量？」 |
| S2 | 「入住前 3 天了还一堆随时退，降不降？」 |
| S3 | OTB% 不差甚至 Ahead，但灵活/随时退占比畸高，用户要把 BAR 砍到「锁量」 |
| S4 | DTA 已短，新生产仍开着入住当日免费取消 |

**不是本剧本：**

- 取消已经在啃净 Pickup、用户还要按 OTB 涨 → **P14**（Soft 诊断）。本剧接在 Soft 之后，回答「那下一步动窗口还是动价」。  
- 「预付打几折、哪些天开」且窗口不是问题 → **P19**。  
- 天气/台风/航班大面积取消 → **P28**：OTB Soft、**不涨**、**不收窗进不可抗力夜**。  
- DTA≤3、灵活已经洗完、真可售厚、市场不冰、价显著高于可比竞对 → 才可能 **P05**，且仍禁一夜 −15%。  
- 剩余其实是维修/锁 → **P37**。不可售不是取消政策问题。  
- 点评掉了要砍 BAR → 本轮不写专剧；质量走 P14 运营枝，排名走 P35。不要用砍价换好评。

---

## 2. 输入（缺灵活占比不停，但不编取消%）

```
必须：
1) Stay Date + DTA
2) OTB / Remaining（可售；P37）
3) 现行公开灵活 BAR 与取消规则（随时退 / 24h / 48h / NR）
4) 用户要不要砍价「锁量」——先当待否决的方案

应用：
5) OTB 里灵活 vs 预付/NR 间夜（缺则问，不编 50%）
6) 24h / 7D 取消 vs 新订，拆预付/灵活（P14）
7) Pace / 3D Pickup；是否 Peak Ahead
8) 已确认灵活单 vs 还在卖的新生产（两套规则）

Recommended：
9) 品牌底 / 贡献三数（有则挡 699；无则不发明）
10) 天气/不可抗力旗标（有 → P28，本剧退出收窗）
11) 本店同 DOW×同政策×同 DTA 历史取消（没有 → Unknown，不报行业%）
```

缺灵活占比 **不停**：条件化「如果 OTB 里大半是随时退，先收新单窗、Hold BAR；如果其实已经是预付主导，走 P14/P19 而不是本剧」。  
禁止报「行业取消率 20–40%」。P14：正常 = 本店同窗历史。  
顾问 **不** 点 OTA 政策页、不代改已确认订单。

---

## 3. 杠杆序（动 BAR 前必过）

高灵活 OTB 看起来像需求，其实是 **未到期的免费期权**（Duetto 2016 用词：free optionality；HSMAI：订了不等于钱在银行）。先 Soft，再按序动。

```
0  P14 Soft。取消≥新订或灵活堆着 → 禁止按 OTB% 涨，也禁止按「看起来还行」砍 BAR 锁量。
1  新单窗口。随 DTA 缩短或关闭免费取消。只覆盖尚未产生的预订。
2  推 P19。浅预付/NR，第一刀 −3–5%，落在档 E，**高于**品牌底。高峰 Ahead 关深折 AP。
3  Hold BAR。灵活堆着不是价高的证明。
4  洗完仍真弱（净 Pickup 持续负、市场不冰已排除、价显著高于可比）→ P02/P05 围栏。禁一夜 −15%。
```

**禁止跳到 4 而不做 1–3。** 砍 BAR 去锁随时退，会吸引更多占位客（P14 不推荐「更深折扣锁单」）。

### 3.1 新单窗口（Hypothesis，不是平台 SOP）

Booking Partner：免费取消截止 **由你设**；他们建议若业务合适，入住前 1–2 天（A Vendor 建议，**不是**美团/携程规则，**不是**本库幅度定律）。高峰/活动可用 **临时政策例外**，默认政策其它日不动。

本库 DTA 尺（Hypothesis，待本店反馈）：

| DTA | Peak / Pace Ahead | 弱平日（已过 P02 排除前） |
| --- | --- | --- |
| **>14** | 可开始收：新单免费窗收到 7D 或更短；不要加「随时退」去填 | 可留灵活促转化；预付按 P19 浅开或不开 |
| **7–14** | 新单免费窗 ≤48–72h 或关随时退；推 NR | 留一道灵活；不要一夜改 BAR |
| **3–7** | 新单默认关随时退；免费窗 ≤24–48h 或只卖 NR/浅预付 | 灵活可留但有截止；BAR Hold |
| **≤3** | 新单禁止「入住当日随时退」。要刺激先浅预付，不砍 BAR | 真洗完才 P05；仍禁一夜 −15% |

数字 24/48/72h 是 **讨论锚**，抄 Booking「1–2 天」与实践常用档，**不是**中国 OTA 官方截止点。用户后台能设什么以用户系统为准（NV）。

Peak Ahead → **更早**关灵活，不要为填房加随时退。  
弱平日 → 可留围栏灵活或浅预付；**仍然**禁止一夜 −15%。

### 3.2 已确认 vs 新生产（硬闸）

| 对象 | 做 | 不做 |
| --- | --- | --- |
| **新生产** | 改 Rate Plan 的免费窗 / 临时例外 / 打开 NR | 只改一个 OTA 造成口径分裂 |
| **已确认灵活单** | 保持原规则。可选：客人 **同意** 后用含早/小折换 NR（Lighthouse B） | **禁止**事后缩短免费窗、禁止改成不可退当暗降 |
| 天气/不可抗力夜 | 走 P28；政策从宽不从紧 | 收窗逼人取消不去 |

Booking：Confirmed bookings are legal agreements（A Vendor）。商家用「Request to cancel」工具免取消费。顾问不教如何规避已确认政策。

---

## 4. 诊断枝（禁止「灵活多所以砍 BAR」）

```
用户拿「OTB 还行但全是随时退」要砍价占量
│
├─ 天气/不可抗力旗标？
│     是 → P28。Soft、不涨、不收窗进那一夜。本剧退出。
│
├─ Remaining 是不是可售？（P37）
│     不可售为主 → 不 dump、不收窗。先划掉维修/锁。
│
├─ P14 Soft 过了没有？
│     取消≥新订或灵活堆着 → OTB 当 Soft。禁止按硬需求涨。
│     也禁止：「看起来还行，砍一刀锁住」。锁不住期权，只会把期权卖得更便宜。
│
├─ 用户想改的是已确认单还是新生产？
│     已确认 → 拒绝暗改。最多自愿换 NR。
│     新生产 → 进杠杆 1。
│
├─ Pace Ahead / 已证实 Peak？
│     是 → 更早关灵活；不要加随时退填房；P19 深折 AP 关。Hold BAR。
│     否，弱平日 → 留一道灵活或浅预付；BAR 仍 Hold；禁 −15%。
│
└─ 窗口已收、洗了 24–48h，净 Pickup 仍死、市场不冰、价显著高？
      才杠杆 4：档 E 围栏 −3–5%（可就是 P19 那层），BAR 默认不动。
      DTA≤3 且过 P05 排除表 → 档 H 才短窗战术，仍禁一夜 −15% 当新 BAR。
```

**砍到 699 锁量不是开门条件。** T20 无地板不发明 699。T19 无变动成本不说总比空着强。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 拆 OTB：灵活随时退 vs 预付/NR。缺则问，不编行业%。
3. P14：24h/7D 取消 vs 新订。OTB 当 Soft。禁止按硬需求涨。
4. 排除天气（P28）、不可售剩余（P37）、一团洗、改期口径。
5. 分开已确认 vs 新生产。已确认不暗改。
6. 杠杆 1：按 §3.1 收新单免费窗。Peak Ahead 更早；弱日留一道。
7. 杠杆 2：要刺激 → P19 浅预付 −3–5%，高于品牌底 / 799×0.95 这类档 E 下沿。高峰关深折。
8. 杠杆 3：Hold BAR。输出区间+首选。拒绝为锁量 dump。
9. 杠杆 4 只在洗完仍真弱之后。围栏先于 BAR；禁一夜 −15%。
10. 输出：新单窗口 / 是否开 NR / BAR 区间+首选 / 已确认不动 / 24h Trigger。不操作后台。
```

### 5.1 动作表

```text
Stay Date / DTA:
OTB（可售）:          Soft / 灵活 __% / 预付 __%
24h 取消 vs 新订:
已确认灵活单:         保持原规则（禁止暗改）
Decision:
  新单窗口            关随时退 / 收到 24–48h / 临时例外仅该 Stay Date
  预付/NR             开 −3–5%（档 E）| 关深折（Peak）| 不开
  Public BAR          Hold；区间 + 首选
  Inventory           不把不可售当可锁量（P37）
  Restriction         天气夜不收窗（P28）；Peak 不新开随时退
Do-not-do:
  - 砍 BAR 去锁随时退
  - 改已确认客人免费窗当暗降
  - 报行业取消率；编美团/携程截止点
  - 一夜 −15%；无地板发明 699
  - 天气不可抗力夜收窗；为填 Peak 加随时退
Trigger: 见 §6
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **先收窗，不先砍 BAR**。

| 判定 | BAR | 窗口 / 预付 |
| --- | --- | --- |
| 灵活堆着、Pace 非真弱 | **Hold**。区间可给心理带（例现行 799 → 779–799 首选 799），**不是**已经降了 | 新单关随时退或收到 24–48h |
| 必须给「有动作」 | BAR 仍 Hold | 浅预付 −3–5%，价 ≥ BAR×0.95 且 ≥ 品牌底 |
| Peak Ahead | Hold 或走 P01/P03（先关低价） | 更早关灵活；关深折 AP |
| 洗完仍真弱 + 过排除 | 档 E 围栏；48h 死再评档 F | 窗口保持收紧，不要反过来加随时退 |
| DTA≤3 过 P05 排除 | 档 H 短窗战术；有截止日期 | 新单仍不要当日随时退 |
| 价已最高 | 只关不涨 | 窗口照收 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
Booking「入住前 1–2 天免费取消」= Vendor 建议，可作讨论锚，**不要**写成中国平台必须。

### 5.3 Advisor-First

建议用户：在 Channel Manager / OTA 政策页给 **该 Stay Date 的新生产** 设临时例外或换 Rate Plan；已确认单不动。顾问不登录后台、不代改订单、不自动调价。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 收窗后 24h 新灵活单明显下降、预付占比升、取消回落 | 守新结构；BAR 仍 Hold |
| 收窗后转化塌、市场不冰、价仍最高 | 弱日可解开一道免费窗，**不**砸 BAR（P14 Trigger 同向） |
| 24h 取消回落到本店史 | OTB 可重新当硬信号；窗口不必立刻加回随时退 |
| 洗完 48h 净 Pickup 仍≈0、市场不冰、价显著高 | 才评档 E；禁止直接 −15% |
| 出现天气/停运旗标 | **P28**。停收窗、停涨、停超 |
| 销售仍要把 BAR 砍到 699 锁量 | **拒绝。** T19/T20；禁一夜 −15% |
| 用户要把已确认随时退改成不可退 | **拒绝暗改。** 最多自愿换 |
| Remaining 其实是 OOO | **P37**，离开本剧 |

300 间尺：不因灵活占比发明新幅度。

---

## 7. 如果只能再补 3 个

1. **OTB 里灵活 vs 预付间夜 + 现行免费窗（随时退/24h/48h）** — 翻转「看起来还行」  
2. **已确认 vs 还在卖的新生产** — 翻转会不会去改客人规则  
3. **24h 取消 vs 新订（拆灵活）+ 有无天气旗标** — 翻转 Soft / P28 / 才允许围栏

缺 1：条件化，不编 50%。  
缺 2：默认只动新生产。  
缺 3：默认 Hold BAR + 建议收新单窗；不涨不砍。

---

## 8. Confidence / 边界

灵活占比 + DTA + 已确认/新生产齐 → 方向 **Medium**（先收窗、Hold BAR）。  
缺灵活占比只条件化 = **Low–Medium**。  
窗口小时数（24/48/72）= **Hypothesis**，不是平台 Fact。  
P19 的 X% 仍 Hypothesis。本剧不另发明折扣。  
美团/携程免费取消截止点、罚金表、行业取消%、STR「灵活转化 +14–18%」= **NV**，不编。  
天气夜、不可售剩余、一团洗：退出本剧。

仿真：`cases/sim-2026-free-cancel-stack-dta3.md`（**Simulation**，不是真店）。主枝 **Hold 779–799 首选 799**；新单收窗；可选预付 ≥799×0.95。

---

## 9. 证据（2026-08-23 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 同时提供灵活（免费取消）与不可退，能覆盖远期要灵活、临近更看价更肯承诺的两类客人 | A Vendor | **Known 机制** | https://partner.booking.com/en-us/help/policies-payments/policies/setting-cancellation-policies （2026-08-23 打开） |
| 免费取消截止由酒店自设；商家建议「若业务合适」入住前 1–2 天 | A Vendor | **Known 建议，非强制、非中国 SOP** | 同上 FAQ *How many days before arrival can guests cancel for free?* |
| 高峰/活动可为 **指定日期** 设临时政策例外，默认政策其它日不动 | A Vendor | **Known 工具** | 同上 *temporary cancellation policy exceptions* |
| 确认预订是协议；商家主动取消工具免取消费 | A Vendor | **Known 方向：已确认单不要暗改** | 同上 FAQ *Can I cancel a reservation myself?* |
| 订了未来不等于钱在银行；要用预付不可退把现金锁住 | A 协会 | **Known 方向** | https://global.hsmai.org/insight/focusing-on-building-profit/ HSMAI ROAB（打开） |
| 免费取消促转化，也抬取消/No-show；淡季松、高峰收；订后可 **自愿** 小折换 NR | B / A Vendor | **Known 方向** | https://www.mylighthouse.com/resources/blog/free-cancellation-hotels 2025-08-29 打开。Phocuswright「七成旅客更看重灵活」= 文内转述，不另当 S |
| 免费期权 = 等到店再看降价取消重订；政策可按 rate code 设 | A Vendor（2016） | **Known 机制；样本间夜不进启发式** | https://www.duettocloud.com/en-us/library/cancellation-trends-cause-headaches-hotels 。「约 16 间/店/日」= 当时样本，**不当 2026 行业 Fact** |
| 压缩日收 cutoff、软周二不动；NR 折太深会吞灵活 | C | 专家经验，cutoff 小时不进本库定律 | https://www.revperfect.io/blog/hotel-cancellation-policy-strategy/ 打开。7% / 72–96h **不**覆盖 P19 的 ≤5% |
| 美团/携程官方免费取消截止点、罚金表 | — | **NV** | 禁止编造 |
| STR「灵活政策转化高 14–18%」 | — | **NV**（仅第三方博客转述，未开 STR 原文） | 不进启发式 |
| 行业取消率 20–40% / D-Edge 39.6% | C | 不采用（P14 已闸） | 本店历史替代 |

Failed / 未打开（记搜索词，不编页）：

```
美团酒店 商家后台 免费取消 截止时间 官方说明
携程 ebooking 取消政策 罚金 小时 官方
STR flexible cancellation conversion study 14% 18%
SiteMinder r/no-show-hotel（WebFetch Cloudflare；curl 未拿到正文）
Cornell CHR hotel cancellation window DTA
IDeaS cancellation policy tighten closer to arrival
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 06:17 CST | drafted。BACKLOG P38。杠杆序 Soft → 新单收窗 → 浅预付 → Hold BAR → 洗完才围栏。不编中国截止点。不改已确认单。 |

---

## 11. 交叉（不改 P01–P37 正文）

- **P14**：Soft **诊断**。本剧是 Soft 之后动哪根杠杆。Soft ≠ 砍 BAR。  
- **P19**：预付 **产品**（开/关、X≤5% Hypothesis）。本剧是 **何时收灵活窗**；浅预付仍走 P19 尺，不是第二层再砍。  
- **P28**：天气取消潮不涨；**也不**把政策收进不可抗力夜。闸同 Soft，病因不同。  
- **P05**：真 last-minute 未售，政策杠杆（收窗/NR）先于 dump。档 H 仍禁一夜 −15% 当新 BAR。  
- **P02**：市场也弱 → 不砸 BAR；最多小配额围栏。不要用随时退去「抢量」。  
- **P01/P03**：Peak Ahead 更早关灵活，不要加随时退填房。先关低价再评涨。  
- **T19**：无变动成本不说 699 总比空着强。  
- **T20**：有声明底，预付也不砸穿；无地板不发明 699。  
- **P37**：Remaining 必须可售。维修空房不是收窗对象，也不是 dump 对象。  
- **how-much-to-move**：不改编幅。本剧拦住「灵活多所以进档 F/H」。

## 12. 交叉（2026-08-23 12:17，不改正文）

评分/口碑下滑要不要砍 BAR → **P39** `review-score-drop.md`（10:17 drafted）。§1「本轮不写专剧」是文档滞后。取消窗 ≠ 口碑。

P55 last-line（2026-08-26 06:17 CST）：担保/非担保与到点释放走 `guarantee-type.md`；放房前不提前 dump，放房后按真 remaining + Pace。

P62 last-line（2026-08-27 10:17 CST）：同住取消再订更低价走 `same-day-cancel-rebook.md`；本剧仍只管**新生产**收窗，不改已确认单当暗降，也不把「别让他们取消」写成今夜 dump BAR。

P65 last-line（2026-08-27 22:17 CST）：取消后按原价恢复走 `cancel-reinstate-old-rate.md`；本剧仍只管**新生产**收窗，不把已取消单的 Reinstate 旧价写成必须，也不因纠缠 dump BAR。
T-Reinstate last-line（2026-08-28 00:17 CST）：已取消单按旧价恢复走 `theory/reinstate-vs-current-rate.md` + P65；本剧仍只管**新生产**收窗。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。
