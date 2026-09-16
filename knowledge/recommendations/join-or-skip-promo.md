# Decision Card: Join or Skip OTA Promo（报 / 不报 / 只报肩日）

> 资产：Advisor Decision Card  
> 路径：`recommendations/join-or-skip-promo.md`  
> 对应：问题树 §12；P18  
> 剧本：`advisor-playbooks/china-ota-promotion.md`  
> 理论：`channel/ota-promotion.md` · `channel/net-contribution.md`  
> 状态：active · Wave7  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；出资分类 S（仅携程公示）  
> Last Verified：2026-08-20

```yaml
decision: Join / Skip / Shoulder-only an OTA promotion
scenario: Platform invites hotel to a promo or user asks 要不要报
required_inputs:
  - who_pays（店 / 平台 / 共出 / Unknown）
  - hotel-funded discount + commission if known
  - applicable Stay Dates
  - Pace / Pickup / Peak flag per date
  - current BAR and new floor
  - can_filter_by_date
signals_for:
  - weak_or_shoulder_dates
  - who_pays_known
  - discount_within_fence_or_platform_funded
  - pace_not_ahead
signals_against:
  - pace_ahead_or_pickup_fast
  - confirmed_peak_or_compression
  - hotel_discount_punches_floor
  - price_already_highest
  - who_pays_unknown_and_deep_cut
recommended_action: 先问谁出资、净价、Pace、砸不砸高峰。高峰/Ahead 不报并关低价计划；弱日浅围栏或平台出可报；能按日筛则只报肩日
risk: 为曝光砸高峰；Unknown 出资按店出仍亏；不能按日筛却报了整段
follow_up: 24h Pickup、破价是否还在、取消
confidence: 日期+出资+Pace 齐则方向 Medium；缺费率则净额 Low
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户问「美团/携程这个促销要不要报」。主动词：**报 / 不报 / 只报肩日**。

不要用：只有「活动很火」无日期；那也条件化，不要说无法判断。

---

## 2. 硬条件（先不报）

命中任一 → **不报**，并评估关 Rate Plan：

1. 适用日 Pace Ahead 或 Pickup Fast  
2. 已证实 Peak / 事件核心夜 / Sellout / citywide  
3. 店出后公开可订 < 新地板（涨价日）或 < 当前 BAR（不应再降时）  
4. 价已最高 → **只关不涨**，不报名  
5. 连住/多晚会把 Peak 按弱日价锁死  
6. 谁出资 Unknown 且折扣看起来 > 围栏 −5% 且像店出  

为曝光报名 **不是** 开门条件。「不报降权」= **NV**。

---

## 3. 报 / 只报肩日

**报**须同时：出资已知；店出 ≤ −3–5% 或平台出资且结算不降底价；日期非 Peak；Pace 非 Ahead；能配额（Hypothesis ≤ 剩余 20–30%）。

**只报肩日：** Peak 不报并关破价；肩日浅折或平台出；**必须能按日筛选**，否则整段不报。

市场也弱：不砸 BAR（do-not-cut）；最多自有小配额围栏，不是平台深折。

---

## 4. 动作表

```text
Stay Dates:
Who pays:
Net / 结构句:
Decision:            报 | 不报 | 只报肩日
Close Rate Plan:     不报的日期关闭该计划及一切公开 < 地板
BAR:                 Open
Do-not-do:
  - 编活动名、编佣金%
  - 高峰报名
  - 一夜 −15% 当新 BAR
  - 「适当报一下」
```

中国四平台判断清单见 `channel/ota-promotion.md` §2。佣金 **Need Verification**。

---

## 5. Trigger

```
报后 24h ≥8（300 间尺）且非一团 → 关新促销或收到 BAR−3%
发现日期其实 Ahead / Peak     → 立即关该日计划
主 BAR 不可订                 → 先开 BAR
用户补「平台出且结算不降」     → 弱日可改报
```

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。报/不报/只报肩日硬条件。 |

---

## 7. 交叉（2026-08-22 08:17，不改报/不报硬条件）

出资未知或高峰 dump → 仍不报。T19：未知变动成本时高峰深折同样不报；弱日报名仍须贡献（若用户给得出）为正。`do-not-sell-below-contribution.md`。

## 8. 交叉（2026-08-22 14:17，不改报/不报硬条件）

「为了排名必须报」走 **P35** 先诊断，再回本卡。排名 FOMO 仍不是开门条件。「不报降权」仍 NV。出资未知或高峰 dump → 仍不报。

> 交叉指针（2026-08-29 06:17，不改正文）：报/不报/肩日仍本卡。「把已报闪促写成新公开 BAR」走 **P73**。不写 P74。


> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。
