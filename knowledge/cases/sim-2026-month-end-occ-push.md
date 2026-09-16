# Simulation Case｜月末四夜不是一个需求：强夜 Hold 799；真弱夜 bounded；拒绝 blanket 399

> 类型：**Simulation / 教学案例，不是真实酒店**
> 路径：`cases/sim-2026-month-end-occ-push.md`
> 日期：2026-08-26 10:17 CST
> 酒店：180 间城市酒店（**Simulation**）
> 调用：P56 · `dont-dump-to-hit-month-target.md` · `mtd-pace-vs-budget.md` · P01 · P02 · P05 · P17 · P45 · T19 · T20
> 声明：本文所有酒店、预算、OTB、Pickup、Pace、价格与缺口数字均为 **Simulation / Hypothesis**。不是任何真实酒店，不是中国行业常模。**399 是被拒绝的 blanket dump，绝不是推荐 BAR。799 仅为 Simulation/Hypothesis。** 不编变量成本、弹性或佣金%。Advisor 不操作 PMS/RMS/OTA/前台。

---

## 0. Simulation 用户原话

> 「本月还差 3 个点出租率，最后四天都放到 399，把房卖掉。下个月再涨回去。」

**Simulation 当前公开 BAR：** 四夜均 799。
**Simulation 提案：** 2026-08-28 至 08-31 全部 799 → 399。

## 0.1 Intake（Simulation）

### 1.1 月度形状

```text
Physical rooms: 180
Month days: 31
Month available roomnights: 180 × 31 = 5,580
Stated 3.0pp OCC gap: 5,580 × 3.0% = 167.4 ≈ 168 roomnights
Budget rooms sold: 4,650
MTD actual through Aug 27: 3,964
Remaining four nights OTB: 518
Raw gap after MTD + OTB: 4,650 − 3,964 − 518 = 168 roomnights
Remaining physical rooms across four nights: 202
Baseline expected remaining fill: 84
Current final forecast: 3,964 + 518 + 84 = 4,566
Forecast gap to budget: 84 roomnights
Incremental capacity above baseline forecast: 202 − 84 = 118
```

原始 168 间夜缺口在 202 间物理剩余里理论可装下，但要求卖出 83.2% 的全部剩余。相对 Forecast 还差 84，最多有 118 间可作为 forecast 外新增。物理可达不代表价格可实现。若真实缺口大于 202，即使四夜全满也不可达。

### 1.2 四夜逐夜 Pace（Simulation）

| Stay Date | DTA | OTB | OTB OCC | Same-DTA benchmark | Pace | 3D net Pickup | Remaining | Verdict |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2026-08-28 | 2 | 154 | 85.6% | 140 / 77.8% | **+7.8pp，Ahead 边缘且 Pickup 快** | 15 | 26 | **Hold 779–799，首选 799** |
| 2026-08-29 | 3 | 90 | 50.0% | 117 / 65.0% | **−15.0pp Behind** | 3 | 90 | **有界围栏 759–779，首选 759** |
| 2026-08-30 | 4 | 166 | 92.2% | 158 / 87.8% | **+4.4pp On/Ahead** | 9 | 14 | **薄；Hold 799** |
| 2026-08-31 | 5 | 108 | 60.0% | 126 / 70.0% | **−10.0pp Behind** | 3 | 72 | **有界围栏 759–779，首选 779** |

所有 Pace 基准与 Pickup 均为 **Simulation**。这张表故意证明四夜不相同。

## 1. Situation（Simulation）

180 间 Simulation 城市店，月末剩四夜。GM 以「差 3 个点 OCC」要求四夜全降到 399。MTD+OTB 后缺 168 间夜；当前 Forecast 缺 84；四夜剩余 202。08-28 强，08-30 只剩 14 间；08-29 与 08-31 才是 Behind、厚 Remaining、Pickup 慢。四夜 BAR 均 799。

## 2. Diagnosis（Simulation）

**主诊断：** 报告期压力被误当四夜共同需求事实。
**次诊断：** 08-29 与 08-31 符合真弱夜入口；08-28 与 08-30 不应降。

| 检查 | Simulation 判定 |
| --- | --- |
| 目标指标 | GM 说 OCC；Revenue/ADR/RevPAR 与奖金口径 **NV** |
| 可达性 | 容量上可达，但需高 sell-through；不等于价格可实现 |
| 逐夜 Pace | 两夜强/薄，两夜 Behind/厚 |
| 限制与渠道 | Simulation 假定已开；真实店须核 P33 |
| 贡献 | 变动成本 **NV**；不编 |
| Forecast vs Budget | Forecast gap 84；不是每夜需求相同 |

问题树：§63。

## 3. Revenue Opportunity / Risk（Simulation）

主机会：保护 08-28 与 08-30 的 799，只在 08-29/31 开 bounded fenced product。主风险：399 重定价本来会卖的尾部生产，OCC 可能升但 Revenue/ADR/RevPAR 失败。

### 3.1 Dilution arithmetic（Simulation）

| Date | Baseline expected remaining sales |
| --- | ---: |
| 08-28 | 20 |
| 08-29 | 30 |
| 08-30 | 10 |
| 08-31 | 24 |
| **Total B** | **84** |

```text
B = 84 baseline rooms expected to sell anyway
P0 = 799; P1 = 399
Dilution = 84 × (799 − 399) = 33,600
Revenue-neutral incremental rooms required:
I ≥ 33,600 / 399 = 84.2 → at least 85 incremental roomnights

If incremental rooms = 84 and total tail production = 168:
Baseline revenue = 84 × 799 = 67,116
Dump revenue = 168 × 399 = 67,032
```

即便额外卖出 84 间、正好补 Forecast OCC gap，gross room revenue 仍略低于基准路径，且未扣任何渠道成本或每 occupied room 变动成本。**变动成本 NV，不编。** 这不是弹性预测；没有声称 399 会带来 84 间。

## 4. Recommended Action（Simulation）

| Stay Date | Recommendation | Preferred | Reason |
| --- | --- | ---: | --- |
| 08-28 | **Hold 779–799** | **799** | Ahead 边缘+快 Pickup |
| 08-29 | BAR 不 blanket dump；有截止日期围栏 **759–779** | **759** | Behind、Remaining 90、Pickup 3 |
| 08-30 | **Hold 799** | **799** | Remaining 14 薄 |
| 08-31 | 有截止日期围栏 **759–779** | **779** | Behind、Remaining 72，先浅侧 |

```text
Lever order:
1) 删除 08-28 / 08-30 的促销资格
2) 08-29 / 08-31 先追已知软客群、解限制
3) 两弱夜开 759–779 bounded fenced product
4) 24h 看逐夜净 Pickup
5) 仍满足 P02/P05 才重评；不第三刀
Rejected: all four nights BAR = 399
```

**没有 −15% overnight。399 从未被推荐。**

## 5. Why（Simulation）

月末边界不改变需求；逐夜 Pace 与稀释门支持分夜动作。P01/P02/P05、T19/T20 提供边界。

## 6. Expected Impact（Simulation）

OCC：弱夜可能增加，不承诺补满 84。ADR：拒绝强夜 dump；弱夜围栏压增量 ADR。Revenue/RevPAR：399 需至少 85 个额外间夜补 baseline dilution。Profit：Unknown；变量成本和佣金未发明。次月观察 09-01 至 09-03 Pickup，防借量（Hypothesis）。

## 7. Risk（Simulation）

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| 弱夜围栏无量 | 08-29/31 净 Pickup | 24h 仍接近 0 → 不再砍；查渠道/产品 |
| 强夜误入 | 适用日期 | 发现低价 → 剔除 |
| 会员倒挂 | public vs member | public<member → 停，P23 |
| 下月借量 | 09-01~03 Pickup | 转弱 → 不重复锯齿 |
| 贡献穿底 | 用户成本 | 穿底关产品；本卷成本 NV |

## 8. What To Watch（Simulation）

逐夜净 Pickup、Remaining、public-vs-member、次月初 Pickup、用户提供的净价与变动成本；口径见上表。

## 9. Re-evaluation Trigger（Simulation）

```text
IF 08-28 Pickup remains positive OR Remaining thins → hold 799; no promo.
IF 08-29 Pickup recovers under 759–779 → keep fenced product; do not extend.
IF 08-31 remains Behind but channel/restriction is closed → withdraw price action; fix availability.
IF all-four-night 399 is requested again → reject with dilution arithmetic and per-night table.
IF actual target is Revenue/ADR/RevPAR rather than OCC → recalculate; do not claim OCC plan satisfies it.
```

## 10. Confidence（Simulation）

**Medium。** 不是 High：Pace、Forecast、价格、基准均为 Simulation；无真实弹性、成本、考核口径。不是 Low：稀释与容量算式可核，动作可逆，有逐夜 Trigger。

## 11. Morning Brief（Simulation；P45 一个动作）

> 「月底四夜不是一个需求。08-28 Ahead、08-30 只剩 14 间，Hold 799；今天唯一动作是只对 08-29 / 08-31 开 759–779 的有截止日期围栏，明早按逐夜净 Pickup 复核。拒绝四夜 399：至少要新增 85 间才补回对 84 间基准生产的稀释。」

## 12. Simulation headline

**08-28 Hold 779–799 prefer 799；08-29 bounded 759–779 prefer 759；08-30 thin Hold 799；08-31 bounded 759–779 prefer 779；reject blanket 399.**
