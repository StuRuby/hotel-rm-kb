# Playbook P57｜STAR / MPI·ARI·RGI 误读（份额指数掉了不是降价理由）

> 资产：Advisor Playbook
> 路径：`advisor-playbooks/star-index-misread.md`
> BACKLOG：P57 STAR / MPI·ARI·RGI 误读 · HIGH · 先诊断枝 · slug **star-index-misread**
> 状态：**drafted**（2026-08-26 14:17 CST）
> 配套卡：`recommendations/dont-cut-to-chase-rgi.md`
> 理论：T-Share `theory/share-index-vs-price.md`（指数已经发生之后只允许改诊断，不允许改今夜 BAR；本剧不重写）· T16 `metrics/mpi-ari-rgi.md`（S 公式，本剧不重写）· `market/comp-set.md`（集合怎么选，本剧不重写）· `theory/otb-pickup-pace.md`
> 交叉：P36 · P15 · P16 · P35 · P39 · P56 · P01 · P05 · P02 · P45
> 问题树：§64「RGI 掉了」不是降价理由
> 仿真：`cases/sim-2026-rgi-drop-sat.md`（**Simulation**）
> 证据等级：S（MPI/ARI/RGI 公式与 fair share=100；Competitive Set Guidelines）；A（HSMAI 2008 STAR how-to：指数=fair share，家数下限以 2026 Guidelines 为准）；B（动作顺序）；幅度 Hypothesis
> Last Verified：2026-08-26
> 知识类型：Fact（公式/集合规则）+ Best Practice + Hypothesis
> Advisor-First：只诊断、给按夜建议；不操作 PMS / RMS / OTA / 前台，不自动定价。
> 禁止：把月报 RGI 当今夜砍 BAR 按钮；编中国官方同名指数、RGI 地板、STR 城市覆盖、弹性、佣金%、华住 699、Walk $；一夜 −15%；BAR→399 抢份额；开 P58。

---

## 0. 三句（原样）

1. 先问指数的 **集合是谁、哪段日期、口径是不是 STR**。没有真 Comp Set 就没有 MPI。指数是份额诊断，不是今夜该不该砍 BAR 的理由。本店 Comp Set / 是否订阅 STR / 中国非 STR 样本怎么对标 = **NV**，不编一个中国官方同名指数。
2. 读组合，不读单点：MPI 低可能是产品、活动日、一家 Comp 关房、或 Comp 选弱了，不一定是价高。ARI 高也可能是 mix。下一步仍看 **今夜/本周** 的 Pace、Pickup、Remaining（P01/P05），不按月报 RGI dump。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 真弱的夜才走 P05/P02 的 bounded move；Ahead 的夜走 P01。不要把 BAR dump 到 399「为了把 RGI 拉回来」。RGI 是事后份额尺，拉不回已经卖掉的间夜，砍价稀释的是还没卖的。

## 1. Situation

钉 **Stay Date（今夜/本周）** 与 **指数窗（通常月/周 STAR）** 是两张表，不要揉成一个需求。先问：

- 集合是谁（Primary Comp Set 名单；缺则 **NV**，不猜）
- 哪段日期（本月 / 上周 / 某活动周；缺则问）
- 口径是不是 STR（还是店内自算、还是某一家 OTA 榜）
- 本店是否订阅 STR（**NV**，不代答）
- 用户原话是想动 **今夜 BAR**，还是在做业主报告

公式指针，不在本剧重写：`metrics/mpi-ari-rgi.md`。100 = STR fair share。没有集合就没有 MPI。

用户原话包括：「RGI 掉了是不是该降价抢份额」「MPI 不到 100 说明定价高了」「STAR 说我们 ADR 指数低，跟竞对对齐一下」「这个月份额丢了，最后几天一起 dump」。

## 2. Diagnosis

| 形 | 错读 | 机制 | 诊断 |
| --- | --- | --- | --- |
| A | RGI<100 → dump | 份额尺当定价按钮 | 禁止。先审 Comp Set 与日期窗 |
| B | MPI<100 → 定价高了 | 产品/事件/一家 Comp 关房/选弱 Comp | 拆 MPI vs ARI vs RGI。MPI 低 + ARI 高 ≠ 自动「价高该砍」 |
| C | ARI 高 → 必须降到 Comp ADR | mix（高价房型/渠道）或 Comp 选弱 | 不把 ARI 当 BAR 目标 |
| D | 一周抖动 = 战略失败 | 活动日或一家 Comp 关房就会抖 | 不要周报改价 |
| E | Comp Set 塞了奢华非竞品 / 姐妹店 | 指数被人为压低或抬高 | 先改集合，不改 BAR |
| F | 本店 PMS OCC vs STR Comp OCC | 分母不同（OOO / Comp / 报送口径） | 对齐口径再读。假 MPI 走 P37 同族，不是砍 BAR |
| G | 误入 | shop / 今夜满房 / 价格战 / 排名 / 点评 / 月末预算 / 真弱夜 | P36 / P15 / P16 / P35 / P39 / P56 / P05 |

**主诊断：** 把事后份额指数误当今夜定价按钮。
**次诊断：** 某些夜可能确实 Behind；可以 bounded move，但理由必须是该夜 Pace / Pickup / Remaining，不是月报 RGI。问题树 §64。

同口径下 RGI ≈ MPI × ARI / 100（S，见指标卡）。所以必须读组合：MPI 88 × ARI 104 / 100 ≈ RGI 92 这种形状，先讲「量份额弱、价份额不弱」，再谈要不要动 BAR。

## 3. Revenue Opportunity / Risk

主机会：保住 Ahead / 薄剩余夜的 ADR，不把已卖掉间夜的份额缺口用还没卖的库存去填。主风险：为「把 RGI 拉回来」blanket dump，稀释尾部生产，且 **拉不回已经卖掉的间夜**——月报 RGI 是事后尺。

指数窗已发生的 Sold 锁价。今夜砍 BAR 只作用在 remaining。用月报 RGI<100 当砍价令，是在用未来间夜去赔过去的份额表。

## 4. Recommended Action

杠杆顺序：

1. **先审集合与日期窗。** 没有真 Comp Set → 没有 MPI。集合错 → 先改集合（形 E），不改 BAR。
2. **对齐口径。** 本店 PMS OCC vs STR Comp OCC 不同分母 → 形 F，不跟那几个点较劲。
3. **读组合。** MPI / ARI / RGI 同一窗同一集合并排。不单点开门。
4. **把指数窗与 Stay Date 拆开。** 月报弱 ≠ 今夜弱。逐夜走 Pace / Pickup / Remaining。
5. **Ahead 或薄 remaining → P01 / Hold。** 区间 779–799，首选 799（Hypothesis / Simulation）。
6. **真弱夜（Behind + 厚 remaining + Pickup 慢 + 供给开）→ P05/P02 bounded move。** 理由写该夜需求，不写「为了 RGI」。
7. **误入移交。** shop 截图 P36；今夜竞对满 P15；可比之后跟不跟 P16；OTA 排名 P35；点评 P39；月末预算 P56。

```text
Stay Date:            用户给定的今夜/本周（与 STAR 窗分开）
Index window:         月/周（问清；缺则 NV）
Comp Set:             名单（缺则 NV；不编）
STR subscribed?:      NV
Current BAR:          用户值
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     不因 RGI 关/开
Restriction Action:   今天不新设
Channel Action:       不为抢份额报深折（报名仍走 P18）
Do-not-do:
  - BAR → 399「抢回份额」
  - 一夜 −15%
  - 按月报 RGI 全尾段 dump
  - 把 ARI 写成 BAR 目标
  - 编中国官方 MPI / RGI 地板
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向**，不把 779–799 当市场 Fact。

## 5. Why

1. STR：MPI/ARI/RGI 是相对某一聚合组的公平份额指数，100 = fair share（S，Glossary）。没有集合就没有指数。
2. CoStar Competitive Set Guidelines（S，2026-08-26 打开）：至少 **4** 家参与店（不含本店）；关联/房量/公司份额限制。这是样本完整性与保密规则，不是「科学替换」证明，更不是今夜 BAR 公式。
3. HSMAI 2008 STAR how-to（A 历史）：Index = 本店 / Comp × 100；100 = fair share。家数「至少三家、四家更好」相对 2026 Guidelines **至少四家**已过时，不升现行 Fact。US 市场个数不是中国覆盖。
4. 指数是事后份额诊断。定价对象是每一夜的 remaining。P01/P05 看 Pace×Pickup×Remaining，不看月报一个点。
5. 「拉回 RGI」在数学上不能改已经卖掉的间夜；砍的是还没卖的。与 P56 稀释同族，病因不同（份额表 ≠ 预算表）。

## 6. Expected Impact

- **OCC / 间夜：** 拒绝为 RGI dump，不承诺把月报指数「拉回 100」。已售锁价。
- **ADR：** Hold Ahead 夜保护增量 ADR；真弱夜若走 P05，只压该夜增量。
- **RGI：** 本月已发生部分不可逆。今夜动作最多影响剩余生产对 **下一段** 指数的贡献，不是回放本月。
- **Pickup：** Ahead 夜 Hold 后预期仍为正；不因指数窗另开第三刀。
- **Net / Profit：** Unknown。不编佣金% 或 GOP。

## 7. Risk

| 风险 | 机制 | 观察 | 出口 |
| --- | --- | --- | --- |
| 真弱夜被 Hold 住 | 今夜确实 Behind | 该夜 Pace/Pickup/Remaining | 理由写该夜需求，走 P05/P02；仍禁 399 与一夜 −15% |
| Comp Set 错仍在用 | 奢华非竞品/姐妹店 | 名单七维 | 先改集合（形 E） |
| 口径打架 | PMS vs STR 分母 | OOO/Comp/报送 | 形 F；P37 同族 |
| 一周抖动被当战略 | 活动日/一家关房 | 日拆指数 | 不周报改价 |
| 与 P56 叠刀 | 预算+份额同一早会 | 两套理由 | 诊断分开；一个动作（P45） |
| 训练市场等 dump | 公开 399 | 渠道价 | 拒绝；399 不是推荐 BAR |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 今夜净 Pickup 间夜 | 24/48h | 该 Stay Date 新订−取消 | 用户 |
| Pace vs 同 DTA | 每日 | Ahead / On / Behind | 用户 |
| Remaining | 每日 | 真可售，扣 OOO/锁 | 用户 |
| Comp Set 名单是否仍真对手 | 本季 / 本轮 | 七维；STR 合规另册 | 用户 |
| 指数窗 vs Stay Date | 每次读报 | 月/周 ≠ 今夜 | 顾问拆表 |
| 公开 BAR 是否出现 399 | 即时 | 直销/OTA | 用户 |

## 9. Re-evaluation Trigger

```text
IF Comp Set 名单未知 OR 口径不是 STR → 先问三件事（集合/日期/口径）；不改 BAR。
IF 集合含奢华非竞品或姐妹店主导 → 先改集合；Hold BAR。
IF 今夜 Pace Ahead OR Remaining 薄 → P01 / Hold 779–799 首选 799。
IF 今夜 Behind + Remaining 厚 + Pickup 慢 + 供给开 → P05/P02 bounded；理由是该夜需求，不是月报 RGI。
IF 用户持 shop 截图 → P36。竞对今夜满 → P15。可比之后跟不跟 → P16。
IF 投诉是 OTA 排名 → P35。评分 → P39。月末预算 → P56。
IF 提案是 BAR→399 或一夜 −15% 「抢回份额」 → 拒绝。
```

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 Comp Set / 是否订阅 STR / 中国非 STR 对标法 NV；799 是 Hypothesis/Simulation；无本店弹性。
为什么不是 Low：公式与 fair share=100 可核（S）；集合规则可核（S）；拒绝用事后尺重定价剩余库存的方向可逆、可证伪。
因此怎么用：先审集合与日期窗；今夜按 Pace 走 P01 或 P05；不要为 RGI dump。
```

## 11. 中国非 STR 市场（T16 侦察缺口；Hypothesis）

如果本店没有 STR：

- **不要发明**中国官方 MPI / ARI / RGI，也不要把某平台榜、某集团内部指数叫做 STAR。
- 问一个**点名的 3–5 家** primary 集合（客人今晚会并排打开的店）。
- 用店**实际有的**数据比它们的 OCC / ADR：shop、OTA 公开可订、内部报送，能拿到什么用什么。
- 指数算术仍要有集合：本店指标 / 集合指标 × 100。方法标 **Hypothesis**，不是 Fact，更不是 STR。
- 本店 Comp Set / 是否订阅 STR / 对标法 **全部 NV**，不代答、不编覆盖率。

## 12. 仿真指针

180 间城市店练习见 `cases/sim-2026-rgi-drop-sat.md`：月报 RGI 92 / MPI 88 / ARI 104；周六 Pace Ahead、remaining 14 → **Hold 779–799，首选 799**；拒绝 dump **399**。92/88/104/14/399/799 **Simulation only**。399 = 被拒绝的 dump。
