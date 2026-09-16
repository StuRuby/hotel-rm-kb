# Playbook P19｜预付不可退

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/prepaid-nonrefundable.md`  
> BACKLOG：P19 预付不可退 · MEDIUM · 先决策卡 · slug `prepaid-nonrefundable`  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/open-close-prepaid-nr.md`  
> 理论：`restrictions/restriction-framework.md` §1.5 · `pricing/how-much-to-move.md` 档 E  
> 交叉：P14 高取消 · P18 促销 · P02 弱日围栏 · P01/P03 高峰关深折  
> 问题树：§10 · §14  
> 证据等级：B（开关逻辑）；折扣深度 **Hypothesis**；博客 % = C 不采用  
> Last Verified：2026-08-20

---

## 0. 一句话

AP / NR 相对灵活 BAR 的 **折扣深度、开放日期、是否在高峰泄漏**。  
高峰默认 **关** 深折预付；弱日开围栏。折扣上限是 Hypothesis，**不是**行业真理。

完成定义（BACKLOG）：高峰关 AP、弱日开 AP 的默认 + 折扣不超过 X 的 Hypothesis（X 不写成行业定律）。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| N1 | 用户问「预付 / 不可退打几折、哪些天开」 |
| N2 | 高峰日 AP/NR 仍比 BAR 低一截，OTB 里预付占比异常高 |
| N3 | 弱日只靠灵活价、取消高，想用预付锁一截 |
| N4 | 刚涨 BAR，预付没跟，公开可订被预付打穿 |

**不是本剧本：** 只要涨 BAR → Increase BAR。只要报 OTA 大促 → P18。取消异常先诊断 → P14。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 该日已是 P01/P03/P04/P07/P29 Peak | **关**深折 AP/NR，或收到新地板（折 0～≤3%） |
| X2 | 价已最高 | 只关打穿产品，不把预付再降 |
| X3 | 灵活 BAR 其实关着，只剩预付可订 | 先开 BAR，再谈预付差 |
| X4 | 市场也弱，还想预付 −15% | 禁止；最多档 E |
| X5 | 用户把「行业标准 10%」当规则 | 纠正：公开博客 8–12 / 5–15 / 10–25 **互相矛盾 = C**，本库不用 |
| X6 | 出资/佣金未知的平台预付促销 | 走 P18；默认不报深折 |

---

## 3. 折扣 X（Hypothesis，待 feedback）

与档 E **同一尺**，不另发明行业 %：

| 日类型 | AP/NR 相对灵活 BAR | 首选 | 禁止 |
| --- | --- | --- | --- |
| 已证实 Peak / Ahead / Fast | **关**，或折 **0～3%**（收到新地板） | 关 | 高峰锁 −8% 以下 |
| 肩日 / On Pace | −3–5% 或关 | 先关，肩日要增量再 −3% | 肩日当弱日深折 |
| 弱日、已过 P02 排除 | **−3–5%**（档 E，BAR 不动） | −5% 带上沿 | 一夜 −15%；第一刀 >8% |
| 弱日 48h 围栏已死、仍 Behind | 围栏可到 −5–8%；再不行才评 BAR −5–10% | 预付先于砸 BAR | 用预付代替诊断 |

**X 的本库写法：** 第一刀预付折 **不超过 5%**（Hypothesis）。这是与围栏启发式对齐，**不是**「酒店业标准 5%」。  
更深（8–15%）只在：弱日 + 已过排除 + 用户坚持要预付产品层，且 **不** 盖 Peak。标 C 讨论锚，Confidence Low。

公开博客（2026-08-20）：Smart Order 8–12%；Prostay 5–15 / 又写 10–25；Guestivo 10–15 + AP 15–25。互相打架 → **全部不进启发式**。

RevPerfect（C/B 方法，数字不当真理）：折 15–20% 会吞灵活价；折 2–3% 没激励。本库用 3–5% 落在「有激励、不吞 BAR」的讨论带。

---

## 4. 开 / 关（按 Stay Date）

```text
Stay Dates:
BAR（灵活）:
AP/NR 现状:     折 __% / 提前 N 天 / 渠道
Decision:
  Peak / Ahead / Fast     → 关 AP/NR 或收到新地板（折 ≤3%）
  弱日已排除               → 开；BAR×(0.95–0.97)；配额 ≤ 剩余 20–30%
  肩日                     → 默认关；要锁取消再 −3%
提前天数:       弱日 7–14D 常见讨论锚（Hypothesis）；不是平台规则
Inventory:      Peak 关公开 < 新地板的预付计划；BAR Open
Channel:        全渠道对齐；禁止只改一个 OTA
Do-not-do:
  - 「行业都是预付 9 折」
  - 高峰用预付拉曝光
  - 用更深折扣锁单却不改取消政策（P14）
  - 编平台活动名 / 佣金%
```

中国预付产品名以**用户后台**为准（限制框架 §1.5）。本库不命名 2026 活动。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 开了之后 24h Pickup ≥ 阈值高且非一团 | 收折到 −3% 或关该日预付 |
| 48h 仍死、市场不冰、价仍高 | 不第三刀砸预付；回 P02 |
| 发现适用日其实 Ahead / Peak | **立即**关该日 AP/NR |
| 取消仍高、预付占比仍低 | 走 P14；不要再加深折 |
| 价已最高 | 只关不涨 |

300 间尺：<3 / 3–7 / ≥8。

---

## 6. 如果只能再补 3 个

1. 各 Stay Date 的 BAR vs 现行预付价（含早/取消对齐）  
2. 该日 Pace / 是否 Peak  
3. 预付 vs 灵活的取消率对比（翻转「要不要开」）

---

## 7. Confidence / 边界

开关方向：日期+Pace 齐 → Medium。X% 永远 Hypothesis。  
会员价跟不跟 → P23 未写，条件化。平台预付促销 → P18。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P19。X=第一刀≤5%，非行业真理。 |
| 2026-08-23 06:17 CST | 交叉 P38（不重写正文）：本剧 = 预付 **产品**（开/关、X≤5%）。**何时收灵活窗**走 `cancel-policy-tighten.md`。浅预付仍是围栏，不是 BAR dump。 |

P55 last-line（2026-08-26 06:17 CST）：担保/非担保与到点释放走 `guarantee-type.md`；放房前不提前 dump，放房后按真 remaining + Pace。

P62 last-line（2026-08-27 10:17 CST）：取消重订套利走 `same-day-cancel-rebook.md`；本剧仍是预付 **产品**（开/关、X）。未来高峰可开浅 NR 缩小可套利灵活库存，不改编幅 X，不是 BAR dump。

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86** `deposit-preauth-vs-bar.md` · `dont-rewrite-bar-for-deposit-preauth.md`。本剧仍是预付不可退 **产品**。不写 P87。
> 交叉指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P87。

> 交叉指针（2026-09-04 00:17 T04-00，不改正文）：刻意的 advance-purchase / 提前期围栏产品仍走本剧 **P19**；「提前期挡住所以砍 BAR」Diagnose 走 **T-Window** `theory/booking-window-vs-bar.md`，过程仍 **P33** + **P35**。早订价 ≠ 公开尺。不开 P88。不开 P89。
