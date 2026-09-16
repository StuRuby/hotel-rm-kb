# Decision Card: Don't Cut BAR for Rank（排名掉了不先砍 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-cut-for-rank.md`  
> 对应：问题树 §1.6 · §38；P35  
> 剧本：`advisor-playbooks/ota-visibility-drop.md`  
> 理论：`channel/ota-promotion.md` · `pricing/how-much-to-move.md`（不改幅度）  
> 交叉：P18 出资未知或高峰 dump 不报 · P05 不一夜 −15% · T19 低于贡献不卖 · P16 不把排名恐慌当价格战必跟 · P20 按净  
> 状态：active · Scout 2026-08-22 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；Booking/Expedia/HSMAI 诊断清单 A Vendor / A 协会；中国权重非 Fact  
> Last Verified：2026-08-22

```yaml
decision: Diagnose inventory/parity/content first; do not cut BAR to chase OTA rank; promo only via P18
scenario: 美团/携程排名掉了、流量没了，要不要降价或报今夜特价？
required_inputs:
  - stay date + DTA + Pace/Pickup
  - public BAR and shopped comps
  - inventory open on that channel/date (rooms to sell, restrictions)
  - evidence of rank drop (screenshot vs verbal)
  - promo invite who_pays if asking to join
signals_for:
  - inventory_closed_or_desync
  - restrictions_hiding_search
  - content_or_score_gap
  - price_already_comparable
  - who_pays_unknown_deep_cut
  - peak_or_pace_ahead
signals_against:
  - price_clearly_above_all_comps_and_pace_behind_and_market_not_ice
  - platform_funded_and_settlement_holds_and_not_peak
recommended_action: 先开库存、修倒挂/内容。BAR 默认 Hold。报名走 P18。禁止一夜 BAR −15% 救排名。无截图只给检查单，不给权重公式。
risk: 把关库存当成没需求而砸价；为 FOMO 报高峰深折；口述排名当 Fact
follow_up: 开库存后 6–12h Pickup；用户是否补截图/出资；破价是否还在
confidence: 库存故障方向 Medium；纯口述排名 Low；点权重 Unknown
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「排名掉了要不要降价」「流量没了报不报今夜特价」「不报是不是没曝光」。

主动词：**Hold BAR / Open inventory / Fix content / 移交 P18（报|不报|只报肩日）**。  
不要用：只有一句「算法变了」无日期。仍条件化，不要说无法判断。

公开 BAR 的涨/降幅度仍走 `how-much-to-move.md`。本卡只回答 **别为排名先砍、先查什么**。

---

## 2. 硬门（先不砍 / 先不报）

命中任一 → **不要把 BAR dump 去追排名**：

1. 该渠道该日库存关着 / 配额 0 / 不同步 → **先开**  
2. 限制把搜索挡掉 → **先评松**（P33），不先降 BAR  
3. 公开价并未明显高于全部竞对，或 Pace 不差 → **Hold**（P16）  
4. Pace Ahead / 已证实 Peak / 价已最高 → **不报名**；只关不涨  
5. 出资 Unknown 且折扣像店出 > 围栏 −5% → **不报**（P18）  
6. DTA≤3 想一夜 BAR −15% → **拒绝**；转 P05  
7. 净价会穿贡献，或成本 Unknown 却要配已知深折 → **T19 关该层**  
8. 证据只是口述 / 销售「不报降权」→ NV，**不当开门**

为排名报名 **不是** 开门条件。

---

## 3. 何时可以动价 / 报名

**动价（仍不是砍给算法）：** 须同时：库存开着、内容无大洞、价明显高于全部可订（Hypothesis ≥8–15%）、Pace 落后、市场不冰。然后 **围栏 −3–5%**；DTA≤3 走 P05 三档。禁止一夜 BAR −15%。

**报名：** 整段 **P18**。须出资已知；店出 ≤ −3–5% 或平台出且结算不降；非 Peak；Pace 非 Ahead；能按日关。弱日浅围栏可以；高峰 dump 不行。

市场也弱：不砸 BAR（do-not-cut）。最多自有小配额围栏，不是平台深折换第一屏。

---

## 4. 动作表

```text
Stay Date / DTA:
Evidence:         截图 | 口述-only（口述 → 检查单，无公式）
Inventory:        误关 → OPEN；限制过严 → P33
Content:          主图/设施/差评
Public BAR:       默认 Hold；区间+首选
Fence:            仅价真出局 → −3–5% 有截止
Promo:            P18 → 报 | 不报 | 只报肩日
Last-minute:      P05；6h 默认保持/认栽
Do-not-do:
  - BAR −15% 救排名
  - 编权重 / 佣金% / 活动名
  - 「不报降权」当 Fact
  - 为排名开盲盒、砸高峰
```

**排名 vs BAR：** 位次不是地板。Unknown 算法 → Hypothesis：先修可观察项，BAR Hold。

---

## 5. 顾问三句（本卡验收）

1. 排名掉了先查库存、比价、内容，不要先砍 BAR。  
2. 为了排名去报深折，走 P18：谁出资、净价、砸不砸高峰。  
3. 平台算法不编；没有截图证据只给检查单，不给「权重公式」。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 14:17 CST | 首版。P35 主卡。不砍 BAR 追排名；诊断先于报名；P18 闸。 |
