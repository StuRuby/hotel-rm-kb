# Decision Card: Don't Cut BAR for Review Score（评分掉了不先砍 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-cut-for-review-score.md`  
> 对应：问题树 §1.10 · §44  
> 理论：`theory/reputation-vs-price.md`  
> 交叉：P35 排名（评分可导致掉位，仍不砍 BAR）· P18 报名买曝光不是修分后门 · P16 口碑恐慌 ≠ 价格战必跟 · P02/P05 洗掉口碑恐慌后的真弱 · T19 贡献 · T20 品牌底 · P09 Ahead 不砍  
> 状态：active · 理论深挖 2026-08-23 08:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；Anderson 2012 / Booking / HSMAI / STR 方向 A 或 S；中国红线非 Fact  
> Last Verified：2026-08-23  
> 禁止：无截图发明 4.3；发明 4.7 卫生分红线；把 Anderson 样本倒置成砍价%；一夜 −15%；为差评砸高峰。

```yaml
decision: Hold public BAR; fix photos/facilities/recent complaints/review replies; promo only via P18
scenario: 评分掉了要不要降价换量？差评多了要不要报今夜特价？
required_inputs:
  - stay date + DTA + Pace/Pickup
  - public BAR
  - review evidence (screenshot vs verbal; platform original name)
  - recent complaint themes if any
  - promo invite who_pays if asking to join
signals_for:
  - score_down_or_recent_complaint_wave
  - conversion_down_with_score_down
  - pace_ahead_despite_score_drop
  - no_screenshot_verbal_only
  - who_pays_unknown_or_peak_promo
signals_against:
  - score_stable_and_other_faults_found
  - true_weak_after_excluding_review_panic_and_price_clearly_out
  - platform_funded_nonpeak_promo_already_passing_P18
recommended_action: 默认 Hold BAR。修主图/设施/近窗差评与回复。无截图不发明 4.3/红线。报名走 P18。真弱才围栏；禁一夜 −15%。
risk: 用价买回口碑、训练便宜客群；把质量故障当成 η 高；口述分数当 Fact
follow_up: 内容是否更新；近窗差评主题是否停；Pickup；破价是否还在
confidence: 有截图+差评主题则方向 Medium；纯口述 Low；点转化弹性 Unknown
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「评分从 4.8 掉到 4.3 要不要降价换量」「差评多了报不报今夜特价」「卫生分不够是不是该砍 BAR」。

主动词：**Hold BAR / Fix content & ops / 移交 P18（报|不报|只报肩日）**。  
不要用：只有一句「口碑不行了」无平台、无截图、无日期——仍给检查单，条件化，不要说无法判断。

公开 BAR 的涨/降幅度仍走 `how-much-to-move.md`。本卡只回答 **别为评分先砍、先修什么**。  
排名页走 P35；本卡接管 **评分→价格** 这一问。

---

## 2. 硬门（先不砍 / 先不报）

命中任一 → **不要把 BAR dump 去「换量」或「买回口碑」**：

1. 证据只是口述 / 没有评分截图 → **不发明 4.3**，只给检查单  
2. 自媒体「卫生分 4.7」或任何平台红线用户拿不出官方页 → **NV，不当开门**  
3. 评分掉但 Pace Ahead / Pickup 快 / 已证实 Peak → **Hold**；可按 P09 只关不涨。不砍  
4. 转化掉但 **评分稳定** → 不是口碑问题；转库存/价/排名/P36  
5. 出资 Unknown 且折扣像店出 > 围栏 −5% → **不报**（P18）  
6. DTA≤3 想一夜 BAR −15% → **拒绝**；转 P05  
7. 净价会穿贡献，或成本 Unknown 却要配已知深折 → **T19 关该层**  
8. 有用户声明的品牌底、拟议价穿底 → **T20 不砸穿**

为差评报名 **不是** 开门条件。P18 不是修分后门。

---

## 3. 何时可以动价 / 报名

**动价（仍不是砍给算法或砍给评分）：** 须同时：口碑恐慌已排除或内容大洞已在修、库存开着、价明显高于全部可订（Hypothesis ≥8–15%）、Pace 落后、市场不冰。然后 **围栏 −3–5%**；DTA≤3 走 P05 三档。禁止一夜 BAR −15%。

质量驱动的转化塌 **不是** η 高的证据。不要因为「分掉了所以弹性大」跳过上述门。

**报名：** 整段 **P18**。须出资已知；店出 ≤ −3–5% 或平台出且结算不降；非 Peak；Pace 非 Ahead；能按日关。弱日浅围栏可以；高峰 dump 不行。标题可以是「买曝光」，闸不变。

市场也弱：不砸 BAR（do-not-cut）。修内容。最多自有小配额围栏。

---

## 4. 动作表

```text
Stay Date / DTA:
Evidence:         截图 | 口述-only（口述 → 检查单；不发明 4.3 / 4.7）
Content / Ops:    主图、设施勾选、近窗差评主题、回复（用户运营做）
Public BAR:       默认 Hold；区间+首选
Fence:            仅真弱且价真出局 → −3–5% 有截止
Promo:            P18 → 报 | 不报 | 只报肩日
Last-minute:      P05；6h 默认保持/认栽
Ahead:            评分掉也不砍；P09
Contribution:     穿底不卖（T19）；不砸声明底（T20）
Do-not-do:
  - BAR −15% 换量 / 买回口碑
  - 编 4.7 红线 / 权重% / 降 0.1 分转化%
  - 无截图发明 4.3
  - 把质量故障当成 η 高
  - 为差评开盲盒、砸高峰
```

**评分 vs BAR：** 评分不是地板，也不是报价器。Unknown 平台公式 → Hypothesis：先修可观察项，BAR Hold。

---

## 5. 顾问三句（本卡验收）

1. 评分掉了先修图、设施和近窗差评，不是先砍 BAR 换量。  
2. 口碑是转化信号，不是需求曲线，更不是报价器。  
3. 没有评分截图就不发明 4.3，也不发明平台红线。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 08:17 CST | 首版。Hold BAR；修内容/运营；报名走 P18；无截图不发明 4.3。不写 P39。 |
| 2026-08-23 10:17 CST | 剧本见 P39 `advisor-playbooks/review-score-drop.md`。正文不改。 |

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本卡仍管评分→价。三句 / Hold 799 / 拒 399 **不改**。不规定 P88。
