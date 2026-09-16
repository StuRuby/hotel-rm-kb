# Decision Card: Don't Follow Incomparable Shop（截图/Shopper 不可比 → 不跟）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-follow-incomparable-shop.md`  
> 对应：问题树 §13 · §1 问 8 · §41；P36  
> 剧本：`advisor-playbooks/rate-shopper-incomparable.md`  
> 理论：`market/comp-set.md` · `pricing/how-much-to-move.md`（不改幅度）  
> 交叉：P16 可比之后才谈跟不跟 · P23 只管我们自己的会员 · P35 排名 ≠ 比价截图 · T19 穿底不卖 · T20 不砸品牌底  
> 状态：active · Scout 2026-08-22 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；Duetto/RS360/SiteMinder/Lighthouse/Booking API A Vendor 且厂商专属；美团公式非 Fact  
> Last Verified：2026-08-22

```yaml
decision: Do not follow a competitor screenshot or shopper number until it is comparable public BAR; if incomparable Hold our BAR
scenario: 截图里隔壁便宜 80，要不要跟？
required_inputs:
  - stay date + DTA + Pace/Pickup
  - our public flexible BAR and room type
  - screenshot or shopper figure with visible labels
  - login/member/app, breakfast, tax, remaining room type, LOS, NR/tonight-deal if visible
signals_for:
  - member_or_logged_in_or_app_only
  - breakfast_or_package_mismatch
  - tax_or_service_mismatch
  - remaining_is_suite_or_next_room_type
  - los_average_not_nightly
  - tonight_deal_or_nr_not_bar
  - closed_or_cta_on_their_side
signals_against:
  - confirmed_same_public_flex_bar_same_room_same_date
  - multiple_primary_comps_moved_public_bar_and_our_pace_behind
recommended_action: 不可比 → 不跟，Hold 公开 BAR（区间+首选，首选常=现行）。不要为假 80 开围栏。可比且 dump → P16。可比且市场真动 → 围栏 −3–5%，禁一夜 −15%，不跟到对方价。禁止砍到 699 去对齐登录/含早/App 价。
risk: 把真公开 BAR 下移误判成会员价而错过围栏；或把套房尾房当标准 BAR
follow_up: 用户是否补未登录桌面对照；24h Pickup；我们自己的会员围栏有没有倒挂
confidence: 截图已能读出标签则方向 Medium；缺对照不升；中国平台公式 Unknown
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「截图隔壁便宜 80 要不要跟」「shopper 说我们贵了 80」。

主动词：**Hold BAR / 不跟 /（仅可比后）移交 P16 或围栏**。  
不要用：只有一句「他们更便宜」无日期、无标签。仍条件化，不要说无法判断。

公开 BAR 的涨/降幅度仍走 `how-much-to-move.md`。本卡只回答 **先问是不是同一口价**。

---

## 2. 硬门（先不跟）

命中任一 → **不要把 BAR 对齐截图价**：

1. 登录 / 会员 / Genius / App-only / CUG  
2. 含早或套餐，我们不含（或反过来）  
3. 税/服务费口径不同  
4. 标准房没了，露出套房或下一房型  
5. 连住均价 vs 单晚  
6. 今夜特价 / 预付 NR / 神券，不是灵活公开 BAR  
7. 日期不是同一 Stay Date，或对方 CTA/关房  
8. 有声明品牌底或会穿贡献 → 更不能跟到 699（T20 / T19）

假 80 不是 P16 的开门条件。

---

## 3. 何时可以动价

**仍不是跟截图：** 须 **可比清单全过**，且 Pace Behind + 价明显高于可比带 + 市场不冰。然后 **围栏 −3–5%**；BAR 若动 −5–10%。禁止一夜 −15%。禁止跟到对方价。

 Pace On/Ahead 或价差其实 <8%（用 **可比** 价算）→ **P16 不跟**。

市场也弱：不砸 BAR。

---

## 4. 动作表

```text
Stay Date:
Screenshot / shop:  <价>  标签:
Comparable?:        否（C#） | 是 → 移交 P16 / how-much-to-move
Public BAR:         Hold 区间 + 首选（首选=现行）
Fence:              不可比默认不开
Our member/app:     倒挂走 P23，不砍 BAR
Do-not-do:
  - 对齐登录/含早/App/套房价
  - 砍到 699
  - 一夜 −15%
  - 编美团公式 / 佣金% / 华住 699
```

---

## 5. 顾问三句（本卡验收）

1. 截图便宜 80，先问是不是同一口价，再谈跟不跟。  
2. 会员/含早/App/只剩套房，都不是让你砍 BAR 的理由。  
3. 真可比且对面在 dump，走 P16 不跟；真可比且市场在动，再动我们的围栏或 BAR。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 22:17 CST | 首版。P36 主卡。不可比不跟；P16 后置。 |
> 交叉指针（2026-08-28 14:17，不改正文）：不可比含早截图仍本卡；本店把套餐当 BAR 或含早地板砍 EP 走 **P69** / `dont-cut-bar-for-package.md`。不写 P70。

> 交叉指针（2026-08-28 16:17，不改正文）：Diagnose 走 **T-Package** `theory/package-vs-ep-bar.md`；过程仍 **P69**。不写 P70。
> 交叉指针（2026-08-29 14:17，不改正文）： 不可比截图仍本卡；索赔改公开 BAR 走 **P75** / `dont-rewrite-bar-for-brg.md`。不写 P76。

> 交叉指针（2026-08-30 06:17，不改正文）：不可比税/费截图仍本卡；本店 all-in/Resort Fee 改公开 BAR 走 **P79** / `dont-rewrite-bar-for-resort-fee.md`。交叉 P79 resort-fee/all-in ≠ 竞对比价。不写 P80。
