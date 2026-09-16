# Playbook P56｜月末冲量 / 预算压力下的降价请求

> 资产：Advisor Playbook
> 路径：`advisor-playbooks/month-end-budget-push.md`
> BACKLOG：P56 月末冲量 / 预算压力下的降价请求 · HIGH · 先诊断枝
> 状态：**drafted**（2026-08-26 10:17 CST）
> 配套卡：`recommendations/dont-dump-to-hit-month-target.md`
> 理论：`theory/revenue-strategy.md`（T20）· `theory/profit-contribution.md`（T19）· `theory/otb-pickup-pace.md`
> 交叉：P05 · P45 · P01 · P02 · P17 · P23 · P18 · P19 · P10/P31/P41 · P33
> 问题树：§63「差几个点出租率」不是降价理由
> 仿真：`cases/sim-2026-month-end-occ-push.md`（**Simulation**）
> 证据等级：A（Budget / Forecast、OCC / ADR / RevPAR）；B（动作顺序）；幅度 Hypothesis
> Last Verified：2026-08-26
> 知识类型：Theory + Best Practice + Hypothesis
> Advisor-First：只诊断、算缺口、给按夜建议；不操作 PMS / RMS / OTA / 前台，不自动定价。
> 禁止：把月底当需求事实；全尾段统一 dump；编预算表、考核/奖金口径、变动成本、弹性或佣金%；一夜 −15%；开 P57。

---

## 0. 一句话

**月底是账期边界，不是需求事实：先逐夜看 Pace 与 Remaining，再算增量间夜能否覆盖对全部尾部生产的稀释；只动真 Behind 的弱夜，不为月度报表 blanket dump。**

## 1. Situation

先拆两张表：①月度 MTD actual / Budget / Forecast / LY，并问考核究竟是 OCC、Revenue、ADR 还是 RevPAR；②每个剩余 Stay Date 的 DTA、OTB、Remaining、1D/3D/7D Pickup、同 DTA Pace、BAR、限制、渠道、已知软客群。预算文件、考核指标与奖金口径均为本店 **NV**。

「还差几个点」「差一笔收入」「下月再涨回去」是管理压力，不是需求信号。客人不知道月底，需求曲线不会在最后一日午夜因换月自动改变。月度压力必须按夜拆。

## 2. Diagnosis

逐夜走 `theory/otb-pickup-pace.md`：OTB=位置、Pickup=速度、Pace=同 DTA 相对位置。每夜判 Ahead / On / Behind，Remaining 判薄 / 中 / 厚，再排限制、渠道、房型与 Segment。

| 检查 | 要回答 |
| --- | --- |
| D1 目标 | OCC、Revenue、ADR、RevPAR 哪个被考核；四者会冲突 |
| D2 按夜 Pace | Ahead 夜不得因月度压力被砍 |
| D3 Pickup×Remaining | Behind+厚+无 Pickup 才可能刺激 |
| D4 供给 | 限制/渠道/库存挡单先 P33 |
| D5 对象 | Forecast miss 走 P17；Budget miss 不是需求 |
| D6 稀释 | cut 会重定价所有剩余生产，不只增量房 |
| D7 跨月 | 是否借走下月初需求、制造锯齿与恢复陷阱 |
| D8 公平 | public dump 是否打穿 member（P23） |
| D9 净贡献 | P18/T19；成本与佣金须用户数据 |
| D10 可达性 | 即使剩余夜全满能否装下缺口 |

**主诊断：** 把报告期边界误当需求变化，试图用统一降价追月度指标。
**次诊断：** 某些夜可能确实 Behind；可以降，但理由是该夜需求，不是月底。问题树 §63。

## 3. Revenue Opportunity / Risk

主机会：保住 Ahead / 薄剩余夜，只用非重定价杠杆填真弱夜。主风险：blanket cut 稀释本来会成交的尾部生产、压 ADR，且可能仍补不了 Revenue / RevPAR。

```text
B = 不降价时预计仍会成交的剩余生产
P0 = 原价格；P1 = 拟议降价；I = 降价额外带来的增量间夜
Dilution = B × (P0 − P1)
Incremental gross revenue = I × P1
不伤基准客房收入的门：I × P1 ≥ B × (P0 − P1)
即 I ≥ B × (P0 − P1) / P1
```

这不是弹性模型，只是补稀释门。若谈 Profit，再用 T19 扣用户给的渠道成本和每 occupied room 变动成本；本店变动成本 **NV，不编**。

## 4. Recommended Action

杠杆顺序：

1. **逐夜拆 Pace / Remaining，先删除 Ahead 与薄夜的降价提案。**
2. **追已知软客群：** 已在手企业、协议、销售线索；不发明名单。
3. **先解弱夜过严限制：** P33；库存/渠道未开则先修可售。
4. **开浅预付或围栏：** P19；只盖真弱夜、有截止日期，不改整段 BAR。
5. **跟进已在手 Group / Crew / Long-stay leads：** P10 / P31 / P41，逐夜过置换。
6. **促销过 P18：** 出资、净价、适用日明确；不跨 Ahead 夜。
7. **最后才动公开 BAR：** 仅 Behind+厚 Remaining+Pickup 慢、供给已开的夜，按 P02/P05 给有界点或区间。

```text
Window: 月末剩余 Stay Dates（逐夜）
Target: OCC / Revenue / ADR / RevPAR（本店口径 NV）
Per-night diagnosis: Ahead / On / Behind + Remaining
Price: Ahead/薄夜 Hold；真 Behind 夜才 bounded move
Do-not-do: blanket dump；借下月；打穿会员；无成本说“总比空着强”
```

## 5. Why

1. 报告期不是 Stay Date 需求；定价对象是每一夜。
2. OCC 上升可伴 ADR 下跌；Revenue / RevPAR 要看量能否赚回价差。见 `metrics/occ.md`、`adr.md`、`revpar.md`。
3. 解限制、围栏、追线索不会重定价全部后续生产。
4. 月尾 public dump 可能把下月初可移动需求提前，并训练客人/OTA 等月底；算法影响仅 Hypothesis，不编权重。
5. 「下月再涨」不保证恢复；T20 的 rate recovery 指针仍适用。
6. 公开 dump 低于会员价会倒挂，走 P23。

## 6. Expected Impact

- **OCC：** 只在真弱夜争取增量，不承诺目标必达。
- **ADR：** 拒 blanket dump 保护强夜与基准生产；弱夜围栏仅压增量 ADR。
- **Revenue / RevPAR：** 先过 dilution 门；过不了，OCC 上升也可能失败。
- **Profit：** Unknown；不编 GOP。
- **Forecast：** 缺口不可达时，下修 Forecast / 说明不可达，不伪造价格动作。

## 7. Risk

| 风险 | 观察 | 退出 |
| --- | --- | --- |
| 真弱夜刺激无量 | 24/48h 净 Pickup | 停第二刀，不第三刀 |
| Ahead 夜被覆盖 | 适用日期 | 立即剔除 |
| public 打穿 member | 会员 vs public | 停，走 P23 |
| 借下月量 | 月末 vs 次月初 Pickup | 停止重复锯齿 |
| 恢复失败 | 新月 BAR 与转化 | 不用「再涨」证明深砍正确 |
| 贡献穿底 | 用户净价/成本 | 关产品，宁可不卖 |
| 缺口不可达 | 剩余物理容量 | 报告不可达，改预期 |

## 8. What To Watch

| 指标 | 窗口 | 口径 |
| --- | --- | --- |
| 每夜净 Pickup | 24/48h | 新订−取消，按 Stay Date |
| Pace | 每日 | 同 DTA、同 DOW/节日对齐 |
| Remaining | 每日 | 真可售，扣 OOO/锁房 |
| 分夜成交价 | 24h | BAR/围栏/会员分开 |
| MTD Forecast gap | 每日 | Actual+OTB+expected fill vs Budget |
| 次月初 Pickup | 72h/7D | 检查借量 |
| Contribution | 动作前 | 用户净价−用户变动成本 |

## 9. Re-evaluation Trigger

```text
IF 某夜 Pace Ahead OR Remaining 薄 → 从月末促销剔除；Hold / P01。
IF 某夜 Behind + Remaining 厚 + 24/48h Pickup 慢 → 先围栏；满足 P02/P05 才 bounded BAR move。
IF 限制/渠道挡单 → 撤回降价，先 P33 / 修可售。
IF Incremental gross < Dilution → 不能以“补收入”为理由；停止 blanket cut。
IF 目标缺口 > 剩余夜最大可新增间夜 → 明确物理不可达；改 Forecast / 预期。
IF public < member → 停公开 dump，走 P23。
```

## 10. Confidence

**Medium。** 不是 High：本店 Budget、MTD、考核/奖金、变动成本、价格响应均 **NV**；价格幅度须本店按夜数据。不是 Low：Budget≠Forecast、KPI 恒等关系、逐夜 Pace 与稀释算式均可核，拒 blanket dump 可逆。执行分夜 Hold/围栏/解限制，24/48h 复核。

## 11. 仿真（Simulation；数字只在本节）

180 间城市店练习见 `cases/sim-2026-month-end-occ-push.md`：强夜 Hold **779–799，首选 799**；真 Behind 厚夜只开 **759–779** 有界动作；薄夜 Hold；拒绝 blanket **399**。所有数字均为 **Simulation / Hypothesis**，399 只是被拒绝的 dump。

顾问对 GM / Owner：

> 「月底是报表边界，不是需求变化。Ahead 和薄夜不降，只有 Behind 且厚剩余的夜才做有界刺激。」
> 「降价会稀释本来会卖的全部尾部生产；新增间夜赚不回价差，就算 OCC 上来，也补不了 Revenue / RevPAR。」
> 「早会只带走一个动作：剔除强夜，只在真弱夜开有截止日期围栏，明早用净 Pickup 复核。」

## 12. 交叉（2026-08-26 14:17，不改逐夜预算枝）

「RGI 掉了抢份额」走 **P57**，不是本剧月末预算/OCC 目标。可同一早会到；诊断分开。本剧仍管账期边界 ≠ 需求。

## 13. 交叉（2026-08-28 02:17，不改逐夜预算枝）

「系统建议 399 要不要跟」走 **P66**，不是本剧月末预算/OCC 目标。可同一早会到；诊断分开。本剧仍管账期边界 ≠ 需求。

> 交叉指针（2026-08-28 22:17，不改正文）：「为签年标先砍 BAR / 对齐协议价」走 **P71** `advisor-playbooks/corporate-annual-rate-vs-bar.md` · `dont-anchor-bar-to-corp-rate.md`。本剧仍管账期边界 ≠ 需求，不是协议锚。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
