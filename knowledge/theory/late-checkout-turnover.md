# Same-Day Turn Window｜延退吃周转窗，不是过夜需求尺

> 资产：T-Late / T07 下一层（同日小时占用 ≠ 过夜需求；FO 时刻/房态动作 ≠ 改过夜 BAR）
> 路径：`theory/late-checkout-turnover.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-28
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A 学术（Aydin & Birbil 2018 EJOR：late checkout 占到允许时刻、**一般消耗当日产能**；可免费或小额收费；可作 stay-over 特例 — **§56 指针**；不摘公式）；A Vendor PMS（OPERA Cloud 26.2 *Scheduling a Checkout*：指定时刻自动退房；零余额才排；退房后房态由 Control 定 — **§56 指针**；**时刻/房态动作 ≠ 改过夜 BAR**）；A Vendor PMS（OPERA Cloud 26.2 *Advance Checking In Reservations*：可在房未就绪时**先打 Advance Check In 旗**；Auto Check In 须已分房且 **room status match** — **§57 新开**；**旗 ≠ 占未交回房**）；A Vendor PMS（OPERA Cloud 26.2 *Checking Out Reservations Early*：Check Out Early = **离店日早于原定离店日** — **§57 新开**；这是 **P46 整晚早离**，不是同日延几小时）；A Vendor BE（Exely：可加价或禁止；availability 须前夜/次日空房防重叠 — **§56 指针**）；C Vendor（Revenue Hub/Roomdex：吃 HK 窗须可交再卖；Guestivo：高峰应收紧 — € 价带 / 5% 算术 **不**进中国 Fact — **§56 指针**）；B / Hypothesis（高峰不免费大批；过夜 BAR Hold 779–799 首选 799；弱夜可收费附营仍 Hold BAR；早到须交回；不要 BAR→399「嫌 12 点走」）
> 配套：`advisor-playbooks/late-checkout-early-checkin.md`（P67 过程）· `recommendations/dont-free-late-checkout-on-peak.md`（主卡复用，不重写）· `metrics/late-checkout-grant-rate.md`（轻指标；**无默认费表**，公式不重写）· `cases/sim-2026-late-checkout-sat.md`（Simulation）
> 交叉：P46 整晚早离/续住 ≠ 同日小时 · P44 钟点产品 ≠ 在住延退 · P63 / T-Staff 整晚吞吐顶 ≠ 同日延几小时 · P61 升房加价 ≠ 延退费 · P42 walk-in 须干净空房 · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Guar / T-Upsell / T-Staff / T-Reinstate（假尺子一族）
> 问题树：§74「延退免费不是砍过夜 BAR」（过程路由已够；本卡给「为什么同日小时不是过夜需求尺、FO 时刻不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / 前台 / 房务 / OTA，不自动改价，不代点延退/早到。**
> 状态：**理论 drafted**（2026-08-28 08:17 CST）。**不写 P68，不写新剧本。** 禁止：编华住延退 SOP / 默认费表 / 会员免费到几点 / €/¥ 费表中国 Fact / 佣金% / 699；一夜 −15%；BAR→399「嫌退房早」；把 14/399/799 当市场 Fact；把 Advance Check In 旗写成已占未交回房；把 Check Out Early（改离店日）写成延退；把 Scheduled Checkout 写成改 BAR；重写 `late-checkout-grant-rate.md` 公式；重写 P01–P67 正文（P67 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**同日延退 / 早到吃的是周转窗（离店→保洁→下午到店），不是过夜需求死了，也不是砍过夜 BAR 的许可证。**
系统能排定退房时刻、能先打 Advance Check In 旗，只证明「有时刻/房态按钮」，不证明「必须免费大批批」或「公开过夜价该砸到 399」。高峰 / Pace Ahead / 下午到达紧 / HK 窗紧：默认不免费大批延退。过夜公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。弱夜可卖付费延退作附营，仍不改 BAR。早到须有交回空房。本店延退费 / 华住字段 / 会员免费时刻 = **全部 NV**。

```
Naive（禁止）     客人嫌 12 点走 → BAR→399；会员都该免费延到 16 点；
                  早到没房先占一间；系统能排时刻所以必须批；延退 = 再住一晚
本卡              先拆三把钟（同日小时 / 整晚 / 钟点产品）。同日小时 = 周转窗。
                  FO 时刻/旗 ≠ 定价权。过程走 P67。
```

完成标准：用户说「延退免费可不可以」「高峰会挡下午到店」「嫌退房早砍 BAR」「早到没房先占」→ Situation 写成**三把钟 + Pace/下午到达/HK**；Diagnosis 写成周转窗被占、不是过夜需求塌；What To Watch 写成免费 vs 收费批、下午未就绪、公开 BAR 是否 Hold、费表是否仍 NV。**不免费大批（高峰）、不 dump 399、不写 P68。**

顾问必须能直接说的三句（与 P67 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问是同日延几小时 / 早到几小时，还是加一整晚。后者走 P46；钟点产品走 P44。延退吃周转窗，不是砍过夜 BAR 的理由。本店延退费 / 华住字段 = **NV**，不编。
2. 高峰 / Pace Ahead / 下午紧 / HK 紧：默认不免费大批延退；可拒、限额或收费。过夜 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「嫌 12 点走」把 BAR dump 到 399。
3. 弱夜可卖付费延退作附营，仍不改公开 BAR。早到须有交回房（旗 ≠ 占未交回房）。产能顶走 P63；升房走 P61。
```

独立默认（本库 Hypothesis）：**同日小时回答不了「今晚过夜该卖多少」。** 它回答「这间房上午到下午还被谁占着、保洁窗还剩多少」。它**不**回答「公开过夜 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止高峰默认免费大批。禁止编费表。**

---

## 1. 三把钟：同日小时 / 整晚 / 钟点产品

顾问问题不是「系统里能不能延到 16 点」，是：**这段占用改的是哪一把钟？**

| 钟 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Same-day hours**（本卡 / P67） | 标准退房后多占几小时，或标准入住前早占几小时 | 拒 / 限额 / 收费（费表 NV）；高峰不免费大批；弱夜附营 | 当成过夜需求死；砍过夜 BAR；早到占未交回房 |
| **Extra night**（P46） | 离店**日**改了：早离少一晚，或续住加一晚 | 高峰续住拒或公开 BAR；早离回库后重算 Remaining | 把加一晚写成「延退」；把早离 dump 当延退安抚 |
| **Day-use product**（P44） | 单独卖的白天/钟点价码 | 能交回才增量；高峰关或限额 | 把在住延退写成钟点产品；把钟点价写成过夜 BAR |

```
Same-day late CO     = 占到允许时刻（Aydin：一般消耗当日产能）
Extra night          = 改离店日（OPERA Check Out Early / 续住）
Day-use SKU          = 另一条价码，不是在住延几小时
Overnight BAR        = 日历夜公开灵活价  ← 本卡默认 Hold
```

混淆三把钟会同时拧坏 **过夜 Remaining** 与 **过夜 ADR**：把「客人想多待到 16 点」读成「今晚卖不动所以砍 BAR」，或把「再住一晚」读成延退人情。

Aydin & Birbil 2018（A 学术，§56）：late checkout 让客人**再住几小时**；有的店免费、有的收小额费；因为占到允许时刻，**一般消耗当日产能**；可作 stay-over 的特例来建模。**不摘公式。不写成华住 SOP。不写成必须免费。**

---

## 2. FO 时刻 / 旗是状态动作，不是定价权

厂商把「几点走 / 房未就绪先登记」做成**前台时刻与房态**过程。没有一家被打开的官方页把它写成「必须免费大批延退」或「过夜 BAR 该跟着情绪走」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Scheduling a Checkout*（§56） | 可指定时刻自动退房；须零余额；未结账则排定不完成；退房后房态由 Control 定 | **时刻按钮**。能排 16:00 ≠ 必须免费批，≠ 改过夜 BAR |
| OPERA Cloud 26.2 *Advance Checking In Reservations*（§57 **新开**） | 当日 Due In 可先打 Advance Check In 旗；**可尚未分房**；若要 Auto Check In，须已分房且 **room status match** | **旗 ≠ 钥匙**。房未就绪可以登记，不能当成已经占了一间未交回房。自动入住的闸是**房态匹配**，不是「客人到了就先占」 |
| OPERA Cloud 26.2 *Checking Out Reservations Early*（§57 **新开**） | Check Out Early 只在**离店日晚于今天**时出现；改的是离店日，可走早离罚（金额是店控，NV） | 这是 **P46 整晚早离**。不要和同日延几小时混桶 |
| Exely *early check-in / late check-out rule*（§56） | 可设加价或禁止；勾 availability 时须前夜/次日空房才可选，防重叠 | 厂商承认**可禁、可加价、须有空档**。不是「默认免费」 |

```
Scheduled checkout time     = FO 时刻（状态）
Advance Check In flag       = 到店登记（状态）；Auto CI ← room status match
Overnight BAR               = 日历夜公开价（定价）
Late-checkout fee (if any)  = 附营/客房杂费（本店表 NV，不编）
```

**把时刻按钮当成定价权** = 把「系统能排 16:00」读成「今晚 BAR 该让步」。同类误读见 T-Reinstate（回写 ≠ 认旧价）、P66（建议 ≠ 定价权）。

OPERA *Configuring Discount Reasons* 检索命中「Late Checkout fees」可进 Total Gross Room Revenue（与 Day Use / Upgrade fees 并列）——本小时 **WebFetch timeout**，**不当核页**。方向只作 Need Verification：若打开，也只说明延退费是**一笔住宿类过账**，仍**不是**改过夜 BAR。金额 = **NV**。

---

## 3. 周转窗被占 ≠ 过夜需求弱

```
画面：一堆人要免费延到 16 点 + 销售说「嫌 12 点走，BAR 砍到 399 别差评」
Naive：需求弱 / 产品体验差 → dump 过夜 BAR
本卡：约束在**同日周转**。Pace 仍可能 Ahead。杠杆是批件数 / 收费 / 限额，不是公开过夜价砸穿。
```

| 信号 | 更像 | 默认 |
| --- | --- | --- |
| Ahead + 下午到达紧 + HK 上午窗紧 + 大量免费延退请求 | **周转窗顶** | 不免费大批；拒/限额/收费；Hold BAR |
| 「嫌退房早所以 BAR→399」 | 假杠杆 | **拒绝**；延退另议，不改过夜栏 |
| Behind + 下午松 + HK 松 + 可收费 | **附营机会** | 可卖付费延退；**仍 Hold BAR** |
| 早到、前客未 checkout / 未转房 | **未交回** | 拒占或等转房；旗可以打，房不能双卖 |
| 其实是加一晚 / 早离改日 | **整晚钟** | **P46** |
| 其实是钟点价码 | **产品钟** | **P44** |
| 整晚「只能做 N 间」 | **吞吐顶** | **T-Staff / P63** |

免费大批延退在高峰**置换**下午到店履约，不是「让客人高兴所以过夜更好卖」：

1. 房间占到允许时刻 → 上午 HK 窗少一间可翻（Aydin：消耗当日产能）。
2. 下午到达若已订，等房 / 换房 / 近 Walk（P24 风险上升；Walk $ **NV**）。
3. 把过夜 BAR dump 到 399 = 用公开价买退房情绪，且训练「嫌 12 点就能砍价」。

Guestivo / Revenue Hub（C，§56）：高峰应收紧、须可交再卖。**€ 价带、5% 转化算术、年增收 $ 不采用为 Fact。**

---

## 4. 假尺子一族：「嫌 12 点走所以要砍 BAR」

本卡不是新怪现象，是同一族的下一张：**运营上的抱怨/按钮被当成定价按钮。**

| 卡 | 画面上的数 / 话 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Guar** | 放房前混合 OTB | 放房后真 remaining |
| **T-Upsell** | 「套房还空着」 | 付费差价 / 分型 Pace |
| **T-Staff** | 「做不完 / 只能做 N 间」 | 可交到达件数 + 门槛 |
| **T-Reinstate** | 「系统写回旧 599」 | 当前 BAR；回写 ≠ 定价权 |
| **本卡 T-Late** | 「要免费延到 16 点 / 嫌 12 点走」 | **周转窗批件数 / 收费 / 限额**；不是公开过夜 BAR dump 令 |

「嫌退房早所以要降价」= 把 **退房时刻抱怨** 当成 **P05 leftover 按钮**。尺子在**同日小时**上，动作却打在**过夜价格**上 → 同类误读。

---

## 5. 与早到旗 / 双卖的交界

OPERA Advance Check In（§57）：可以在房**未就绪**时先打旗；自动入住的条件是**已分房 + room status match**。

```
Advance Check In flag     ≠ 物理占用
Auto CI                   ← room status match（房已交回并达可住房态）
Early CI without return   = 双卖 / 等房 / 投诉风险
```

顾问含义：

- 客人 10 点到、前客未走 → **可以**谈等待、改分房、打旗；**不可以**把未交回房当成已售给早到客。
- 弱夜、Due Out 已走且已转房 → 早到才是增量小时（仍可收费；费表 NV）。
- walk-in 干净空房走 **P42**，不是本卡「先占一间」。

Walk $ / 等房补偿 = **NV**。缺数仍可说：**不要在未交回房上双卖早到。**

---

## 6. Diagnose → Advise：周转窗被允许改什么

用户原话：「延退免费可不可以」「高峰挡下午到店」「BAR 砍一点让他们高兴」「早到没房先占」。

```
Situation
  钉三件事：①三把钟哪一把；②Pace + 下午到达 + HK 窗；③用户要免费大批还是砍过夜 BAR。
  缺费表 / 会员权益 → 问，不编。

Diagnosis
  同日小时 = 周转窗占用已经在板上。它被允许改的是：
    (1) 故事类型（周转顶 vs 弱夜附营 vs 整晚 vs 钟点 vs 吞吐顶）
    (2) 问句（§7）
    (3) 默认路径：高峰 → 不免费大批 + Hold BAR；弱夜 → 可收费附营 + Hold BAR
    (4) 是否先拆 P46 / P44 / P63 —— 邻剧，不是砍过夜价
  它不被允许改的是：BAR→399；高峰默认免费大批；一夜 −15%；发明华住费表；把旗当成已占未交回房。

What To Watch
  免费批 / 收费批 / 拒；下午未就绪件数；公开过夜 BAR 是否仍 Hold；费表是否已知
  不是「客人满不满意 12 点」单一指标
```

过程六形（A 高峰免费大批 / B 砍过夜 BAR / C 弱夜付费 / D 早到无交回 / E 钟点或加一晚 / F 人手或升房）走 **P67**，本卡**不重复 P67 正文**。

Ahead 或下午紧 → **不免费大批 + Hold**；真 Behind 且下午松 → 可扩收费延退，仍禁 399 与一夜 −15%。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P68。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 这是**同日延几小时 / 早到**，还是**加一整晚**，还是**钟点产品**？ | 误入 P46 / P44 | **NV** |
| 2 | 今晚 Pace？下午到达几间、从几点起？HK 上午窗是否已排满？ | 会把抱怨当弱需求 | **NV** |
| 3 | **本店延退费表 / 会员免费到几点**？ | 会编 €/¥ 或华住 SOP | **NV** |
| 4 | 早到时前客是否已 checkout **且已转房**？只打了旗还是已经给钥匙？ | 旗被读成已占房；双卖 | **NV** |
| 5 | 拟议是不是「过夜 BAR→399 安抚」？ | 假杠杆混进延退 | **NV** |

补充可问（同样 NV）：Walk / 等房成本；OPERA Scheduled Checkout / Advance Check In 本店是否在用（字段名 NV）；延退费过账进客房还是杂项。**€/¥ 费表中国 Fact、会员免费时刻、佣金%、699：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 嫌 12 点走 → 过夜弱 → dump BAR | 周转窗抱怨；过夜 Pace 可能 Ahead |
| 系统能排 16:00 → 必须免费批 | 时刻按钮 ≠ 政策；可拒/限额/收费 |
| Advance Check In 旗 = 已经有房 | 旗是登记；Auto CI 要房态匹配 |
| Check Out Early = 延退 | 改的是**离店日** → P46 |
| 延退到晚上 = 钟点产品 | 在住延退 ≠ 钟点价码 → P44 |
| 保洁不够所以免费延 | 吞吐顶走 P63；免费延更挤窗 |
| 弱夜免费也行、顺便改 BAR | 弱夜可收费附营；BAR 仍 Hold |
| Guestivo € / 5% 是中国行情 | **不采用。** 费表 NV |
| 编一套华住延退 SOP 就能 Advise | **禁止。** 费表 / 会员时刻 NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P67 `cases/sim-2026-late-checkout-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799（399 = 被拒绝的 dump；799 仅 Hypothesis/Simulation）
Physical remaining           = 14
Pace                         = Ahead（用户给）
今午离店                     = 大量 Due Out 要免费延到 16:00
下午到达                     = 14:00 起
公开过夜 BAR                 = 799
前台/销售拟议                = 免费大批延到 16:00；或 BAR→399「别差评」
```

读法（与 P67 同句）：周六 Ahead、remaining 14、下午已有到店 = **周转窗顶在板上**，不是 leftover。Advise：不免费大批延退；可拒/限额/收费（费表 NV）；过夜 **Hold 779–799 首选 799**；拒 dump **399**；早到须交回。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住延退费，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-28 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| late checkout 占到允许时刻，一般消耗当日产能；可免费或收费；可作 stay-over 特例 | **A 学术** | **Known 方向。** 不提供中国费表 | Aydin & Birbil 2018 EJOR（**§56 指针**） |
| 可指定时刻自动退房；零余额；房态由 Control 定 | **A Vendor PMS** | **Known 机制。** 时刻 ≠ 改 BAR | OPERA Cloud 26.2 Scheduling a Checkout（**§56 指针**） |
| 可先打 Advance Check In 旗；Auto CI 须分房 + room status match | **A Vendor PMS** | **Known 机制。** 旗 ≠ 占未交回房 | OPERA Cloud 26.2 Advance Checking In（**§57 新开**） |
| Check Out Early = 离店日早于原定日 | **A Vendor PMS** | **Known 边界。** → P46，不是本卡 | OPERA Cloud 26.2 Checking Out Early（**§57 新开**） |
| 可加价或禁止；availability 防重叠 | **A Vendor BE** | **Known 方向。** 非华住 SOP | Exely（**§56 指针**） |
| 高峰应收紧；吃 HK 窗须可交再卖 | **C Vendor** | 方向可用。€ / 5% **不采用** | Revenue Hub / Guestivo（**§56 指针**） |
| 高峰不免费大批 + Hold BAR；弱夜可收费附营；早到须交回 | **B / Hypothesis** | 本库 P67 + T07 + T-Staff 闸 | — |
| 本店延退费 / 会员免费时刻 / 华住字段 | — | **NV。不编。** | — |
| €/¥ 费表中国 Fact / 佣金% / 699 / OPERA Late Checkout fees 进 Gross Room Revenue | — | **NV / 本小时 timeout。** 禁止发明金额 | Discount Reasons 页 timeout，见 §57 |

本小时新开：OPERA Cloud 26.2 Advance Checking In 1 页 + Checking Out Early 1 页（§57）。Aydin / Exely / Scheduling 复用 §56，不重锤。Discount Reasons「Late Checkout fees」**timeout，不当核页**。未开第二家 PMS 延退费模块。未采用 Guestivo €。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-LATE-01 | 本店延退费表 / 会员免费到几点 / 华住字段 | **NV。不代答。** 无则条件化，不编 €/¥ |
| NV-LATE-02 | 下午到达件数与时刻；HK 上午窗是否顶 | **NV。** |
| NV-LATE-03 | 早到是否已交回 + 转房；本店是否用 Advance Check In 旗 | **NV。** 未交回 → 拒占 |
| NV-LATE-04 | 延退费过账进客房还是杂项（OPERA Late Checkout fees 页 timeout） | **NV。** 不挡「费 ≠ 改 BAR」 |
| NV-LATE-05 | Walk / 等房补偿 | **NV。** 不挡「勿未交回双卖」 |
| NV-P67-01… | P67 已挂（费表 / 华住 SOP） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 08:17 CST | 首版。T-Late = 同日小时吃周转窗，不是过夜需求尺。三把钟；FO 时刻/旗 ≠ 定价权；Advance Check In 旗 ≠ 占未交回房；Check Out Early = P46。假尺子一族。不重复 P67 六形。**不写 P68。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P67 正文；P67 仅头一行，邻卡仅文末一行）

- **P67** `advisor-playbooks/late-checkout-early-checkin.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-free-late-checkout-on-peak.md`：复用，不重写。
- **轻指标** `metrics/late-checkout-grant-rate.md`：请求 / 免费 / 收费 / 拒；无默认费表。本卡不重写公式。
- **P46**：整晚早离/续住（OPERA Check Out Early = 改离店日）。不是同日小时。
- **P44**：钟点产品 ≠ 在住延退。
- **P63 / T-Staff**：整晚可交到达顶 ≠ 同日延几小时；交叉时免费延更挤窗。
- **P61**：升房差价 ≠ 延退费。
- **P42**：干净空房 walk-in；未转房不是 desk inventory。
- **P01 / P45**：Ahead Hold；早会一个动作通常是限额/收费 + Hold BAR，不是砍过夜价。
- **T-Share / T-Parity / T-Guar / T-Upsell / T-Staff / T-Reinstate**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止高峰默认免费大批。禁止 P68。禁止编华住延退 SOP、€/¥ 费表中国 Fact、会员免费时刻、佣金%、699。**
