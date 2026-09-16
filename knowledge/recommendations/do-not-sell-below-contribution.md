# Decision Card: 宁可不卖 — 净价低于贡献就关产品

> 资产：Advisor Decision Card（T19）  
> 路径：`recommendations/do-not-sell-below-contribution.md`  
> 对应：问题树 §36「卖了但更亏」；用户原话「499 还能卖，卖不卖？佣金+早餐+布草会不会亏？」  
> 理论：`theory/profit-contribution.md`  
> 配套：`metrics/net-adr.md` · `metrics/goppar.md` · `metrics/flow-through.md` · `channel/net-contribution.md` · P02 / P05 / P18 / P20 · `stop-cut-if-revpar-falls.md`  
> 状态：active · 2026-08-22 08:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；公式声明制 A/S（Net、Flow Through）  
> Last Verified：2026-08-22  
> 禁止：编造变动成本 / 佣金% / Walk / 餐标；无三成本却说 499 总比空着强；把 BAR 降到 399 求公平；写 P27 正文。

```yaml
decision: Close the cheap rate plan / do not match 399 / keep BAR when net is at or below contribution
scenario: User asks whether a still-bookable low rate (e.g. 499) should be sold; worries commission + breakfast + linen will lose money
required_inputs:
  - Stay_Date
  - offered_net_rate（毛价 − 用户合同佣金/店出折扣；算不出净价则标 Unknown）
  - user_variable_cost_of_occupied_room（布草/增量清洁、早餐增量、增量能耗 — 用户给。缺则不要 Accept 廉价 dump）
  - current_BAR_and_whether_peak_or_DTA_short
  - remaining_rooms
signals_for:
  - contribution_le_0_from_user_numbers
  - last_minute_dump_would_pierce_contribution
  - peak_or_pace_ahead_ota_or_opaque_deep
  - would_walk_high_value_to_keep_399
  - known_deep_vs_BAR_even_if_cost_missing（弱结论：拒配）
signals_against:
  - user_contribution_gt_0_and_room_would_otherwise_spoil
  - weak_weekday_and_contribution_still_positive
  - DTA_short_true_empty_and_contribution_still_positive
  - inventory_closed_or_restricted（先开/松，不归因贡献）
recommended_action: 关该 Rate Plan / 不匹配 399 / 守 BAR。缺变动成本则拒绝廉价 dump 并要三数；仅用 Net vs BAR 作弱结论。
risk: 把供给故障当成「该卖 499」；弱日把贡献为正的增量间夜一起关掉；用假精确成本装懂
follow_up: 用户是否给出布草/早餐/佣金；该 Stay Date Pickup 与 Net；穿底产品是否还在
confidence: 三数齐则方向 Medium；缺成本仅相对 BAR 拒深折 = Low–Medium
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

用户问的是 **「这个低价还能订，卖不卖？会不会亏在佣金/早/布草上？」**

不要用：只有「OCC 低要不要降」且价还在 BAR 带内 → 先走 P02 检查单，本卡是成本底闸。团询 500 vs 800 → P10；餐很高 → T18。本卡管 **零售/渠道低价层**。

没有 Stay Date → 仍条件化，不要说无法判断。

---

## 2. 硬条件（先不卖）

命中任一 → **不卖这一层**，关 Rate Plan 或收回配额，**BAR 不动**：

1. 用户数字算出 **Contribution ≤ 0**（净价 − 变动成本）。  
2. 最后一分钟 dump / 档 H 战术价会把净价砍到贡献以下。  
3. 高峰、Pace Ahead、Sellout 路径上的 OTA / opaque 深折（P18 不报；不写 P27 专篇）。  
4. 要用 Walk 高价值客来给 399 腾房。Walk 金额 NV → 默认不接 399。  
5. 变动成本 Unknown **且** 报价相对当前 BAR / 在售净价是已知深砍（例：公开 BAR 远高于 499 还要去配 399）→ **弱结论：拒配**，不要说「总比空着强」。

为冲 OCC 而留穿底产品 **不是** 开门条件。

---

## 3. 缺成本时怎么说（不编）

```
IF 用户没给变动成本
THEN 不发明布草/早餐/佣金
     问 3 个数：布草或客房增量清洁 / 早餐增量 / 合同佣金
     在齐数之前：
       - 禁止 Accept「499 总比空着强」
       - 可以：对已知深折 vs BAR 做弱结论 → 不匹配 399、关该计划、守 BAR
       - 可以：用已有净价（P20）判断渠道层是否明显劣于直销净；仍声明「未扣变动成本，低估了亏」
```

三数给齐后才允许对弱日、DTA 短、会 spoil 的空房说「贡献为正可以卖这一层」。

---

## 4. 何时仍可卖这一层

须**同时**：

- Stay Date 明确；  
- 用户贡献 **> 0**；  
- 该夜否则会空（弱平日 / DTA 短 / Expected 填不满），机会成本低；  
- 不是高峰可卖满、不是 Walk 高价值保 399。

动作仍是：**浅围栏或有截止日期的战术产品**，不是把 BAR 改成 499。P02/P05：先围栏，禁一夜 −15%。

---

## 5. 动作表

```text
Stay Date:
Offered rate / channel / rate plan:  __（毛）
Net rate:                            __（用户佣金；Unknown 则停 Accept）
Variable cost (user):                布草/清洁 __  早餐 __  其他 __
Contribution:                        __  或 Unknown
BAR / Peak flag / DTA / Remaining:   __

Decision:  关该计划 | 不匹配 399 | 守 BAR | （仅当贡献>0 且会 spoil）留浅围栏

Do:
  关闭或收回该 Stay Date 的穿底 Rate Plan / 神券 / 今日特价配额
  BAR 层保持可订（价已最高只关不涨）
  弱日贡献>0：围栏 −3–5% 或有截止日期战术产品，配额声明

Do-not-do:
  编变动成本表
  为 OCC 把 BAR 降到 399
  一夜 −15% 当永久 BAR
  高峰配 OTA 深折
  说 499 总比空着强（无净价+成本时）

Watch:  该日 Pickup、该计划是否还在、Net、不要看 OCC 单独报喜
```

禁止「适当调整价格结构」。

---

## 6. Confidence

| 条件 | Confidence |
| --- | --- |
| Stay Date + 净价 + 用户变动成本，贡献符号清楚 | 方向 **Medium**；金额 Low |
| 只有相对 BAR 的已知深折、无成本 | 拒配方向 **Low–Medium**；禁止正贡献结论 |
| 无 Stay Date / 无报价 | 只给条件句 |
| 高峰 + 深折 | 不报 / 关计划：方向 Medium（与 P18 同向） |

---

## 7. 关联

- 理论：`theory/profit-contribution.md`  
- 净价：`metrics/net-adr.md` · P20 `rank-channel-by-net.md`  
- 促销：P18 `join-or-skip-promo.md`  
- 最后一分钟：P05；先围栏，再过本卡  
- OCC↑ RevPAR↓：`stop-cut-if-revpar-falls.md`；OCC↑ GOP↓ 更走本卡  
- 超售空房成本：`overbooking/overbooking-framework.md`（= 未售间贡献，不是 Walk×2）

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 08:17 | 首版。缺成本不编；可弱拒已知深折。 |

---

## 9. 交叉（2026-08-22 10:17，不改宁可不卖硬条件）

高峰 OTA / opaque 深折 → 关该层。专篇走 **P27** `close-opaque-on-peak.md`（不再「不写 P27」）。弱日 399 仍须贡献>0；缺成本不 Accept。佣金% / 变动成本仍 NV。

---

## 10. 复盘（2026-08-22 12:17，不改宁可不卖硬条件）

P05 档 H / P02 围栏之后仍过本卡。仿真周二 399 不 Accept（无三成本）= 本卡弱拒。高峰关倾倒层走 P27，不是把 BAR 砍到 399。
