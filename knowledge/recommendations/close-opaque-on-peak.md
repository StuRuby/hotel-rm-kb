# Decision Card: Close Opaque on Peak（高峰关盲盒/批发 / 弱日条件留）

> 资产：Advisor Decision Card  
> 路径：`recommendations/close-opaque-on-peak.md`  
> 对应：问题树 §12 · §37；P27  
> 剧本：`advisor-playbooks/opaque-package-leakage.md`  
> 理论：`channel/net-contribution.md` §2.12 · `theory/profit-contribution.md` · `pricing/how-much-to-move.md`（不改幅度）  
> 交叉：P18 出资未知或高峰 dump 不报 · T19 低于贡献不卖 · P26 高峰围栏弱日留 · P05 opaque 不是 last-minute 第一刀  
> 状态：active · 案例与剧本 2026-08-22 10:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；Anderson/Xie 名级 + IDeaS 词条 A；佣金%/批发折扣表非 Fact  
> Last Verified：2026-08-22

```yaml
decision: Close opaque and wholesale on peak/Ahead dates; keep weak weekdays only if net > contribution; do not match 399
scenario: 周末高峰还能看到盲盒/批发/含早打包价，要不要关？淡季留不留？
required_inputs:
  - stay date + DTA + Pace/Pickup + Peak flag
  - public BAR
  - product type (opaque / wholesale / package)
  - offered rate (e.g. 399) and remaining
  - landed net if known
  - contribution if user gave variable costs
signals_for:
  - peak_or_pace_ahead_opaque_still_open
  - wholesale_net_visible_on_retail_ota
  - fake_package_hides_dumped_room
  - 399_vs_BAR_known_deep_cut
signals_against:
  - weak_weekday_and_user_net_gt_contribution
  - true_FandB_package_with_user_contribution
  - public_direct_closed (open BAR first)
  - price_already_highest_on_public_bar_then_do_not_raise
recommended_action: 高峰 Ahead 默认关盲盒与批发。打包先拆真含餐 vs 藏房费。弱日仅当净>贡献可留。缺成本不 Accept「总比空着强」。价已最高只关不涨。禁一夜 −15%。Last-minute 走 P05，不新开盲盒当第一刀。
risk: 把真含餐套餐当 dump 关掉；弱日把贡献为正的增量一起关；缺成本却编「总比空着强」；为排名开盲盒
follow_up: 24h BAR 层 Pickup；零售是否还能搜到批发/盲盒；用户是否补出净价+三成本
confidence: 高峰关方向 Medium；弱日留缺成本 Low；点佣金 Unknown
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「OTA 盲盒 399 高峰关不关」「打包把房费摊低了」「批发价跑到零售了」「淡季 399 留不留」。

主动词：**Close / Remove from retail / Keep weekday if net>contribution**（写到 Stay Date + 哪一层）。  
不要用：只有一句「盲盒要不要做」无日期。

公开 BAR 走 Increase BAR / 幅度卡。本卡只回答 **倾倒层关不关、在哪关**。

---

## 2. 硬门（先关 / 先停 Accept）

命中任一 → **不要配 399、不要把 BAR dump 到盲盒价**：

1. 该日 Pace Ahead / Pickup Fast / 已证实 Peak / Sellout → **关** 盲盒与批发  
2. 公开价已最高 → 公开只关不涨（opaque 仍关）  
3. 变动成本 Unknown 且 399 相对 BAR 是已知深砍 → **弱拒配**，禁止「总比空着强」  
4. 用户数字算出 Contribution ≤ 0 → 关（T19）  
5. 批发出现在零售 OTA → 下码；高峰对该批发 stop-sell  
6. 假打包（餐 Unknown 或不供餐）→ 当 dump  
7. DTA≤3 想靠盲盒清仓 → 转 P05，不把 opaque 当第一刀  
8. 要把 BAR 对齐 399 → 拒绝

为曝光 / 排名开盲盒 **不是** 开门条件（P35 未写）。

---

## 3. 何时可留（弱日）

须**同时**：非 Peak、Pace 非 Ahead；**净价 − 用户变动成本 > 0**；否则会空；配额声明。

缺净或成本 → **不 Accept**。可以：高峰已关的前提下，弱日先要三数，给条件句「若贡献为正可留小配额」。

真含餐套餐（用户给了 F&B 贡献、房费未被藏到地板）→ 不是本卡 dump，转 T18。

---

## 4. 动作表

```text
Stay Dates:
Product:        opaque / 批发 / 打包（用户原名）
Peak Sat:       opaque CLOSE；批发 CLOSE
Weak Tue:       KEEP 仅当净>贡献；否则不 Accept
Package:        假打包 CLOSE；真含餐 → T18
Retail:         REMOVE 漏出的批发/盲盒公开挂价
Public BAR:     区间+首选；主刀不是改 BAR；价已最高只关不涨
Last-minute:    P05 先；不新开 399
Do-not-do:
  - 高峰再配 399
  - 没成本却说总比空着强
  - BAR → 399
  - 编佣金% / 活动名 / 批发折扣表
  - 一夜 −15%
```

**高峰 opaque vs 公开 BAR：** 不应低于当日公开 BAR 还开着。Unknown 净 → Hypothesis：高峰关、弱日要数再谈留。

---

## 5. 顾问三句（本卡验收）

1. 高峰 Ahead 时盲盒/批发默认关，不是再配 399。  
2. 打包要拆：真含餐 vs 把房费藏进套餐。  
3. 淡季能不能留，看净价是否盖住贡献；没成本数就别说「总比空着强」。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 10:17 CST | 首版。P27 主卡。高峰关盲盒/批发；弱日净>贡献才留；缺成本不 Accept。 |

---

## 7. 复盘（2026-08-22 12:17，不改高峰关盲盒）

与 P18 不报促、P26 blackout 协议是**三道围栏、三个对象**：高峰关倾倒层、守 BAR，禁止叠三刀各 −5%。弱日 399 仍须净>贡献；Cornell 2012 全文仍 NV。

## 8. 交叉（2026-08-22 14:17，不改高峰关盲盒）

为曝光 / 排名开盲盒 **不是** 开门条件（**P35 已 drafted**：先诊断库存/比价/内容，不先开 opaque）。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。
