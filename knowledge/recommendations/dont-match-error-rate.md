# Decision Card: Don't Match an Error Rate（错推低价 ≠ 跟价；先停错码，不把 399 当市价）

> 资产：Advisor Decision Card（P60）
> 路径：`recommendations/dont-match-error-rate.md`
> 对应：问题树 §67；用户原话「CM 把标准房推成了 399」「映射错了美团在卖错房型价」「错价已经出去了官网要不要跟」「先跟再改回来」
> 剧本：`advisor-playbooks/channel-mapping-misprice.md`
> 配套：`metrics/live-vs-intended-rate.md` · P59 · P36 · P18 · P42 · P05 · P16 · P34 · P58 · P01 · T-Parity
> 状态：active · 2026-08-27 02:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor CM（SiteMinder Help「Map your room rates to a channel」：映射是一对一配对；断映射≠渠道下架 — §42）
> Last Verified：2026-08-27
> 仿真：`cases/sim-2026-cm-misprice-sat.md`
> Advisor-First：建议先确认是不是本打算卖的、停错码/修映射、Hold 意图 BAR；不操作 PMS / RMS / OTA / channel manager / Brand.com，不自动定价。
> 禁止：把 Brand.com 砍到错误价；一夜 −15%；BAR→399；编美团映射 SOP / 本店 CM 字段名 / 华住 SOP / 退改表 / 佣金%；把 399 当推荐 BAR 或清市场价；开 P61。

## 三句（原样）

1. 先问线上这个价是不是 **本打算卖的**（房型码、价格码、促销开关、CM 映射）。错推/错映射不是需求信号，也不是该改 Brand.com 的理由。本店 CM 字段名 / 美团映射 SOP = **NV**，不编。
2. 先停错码、修映射，再谈价。Hold 意图 BAR 779–799 首选 799（Hypothesis / Simulation）。不要为了「已经挂出去了」把官网也砍到错误价。
3. 已出去的错价订单怎么处理问本店政策（NV），不在顾问剧本里编退改表。错价修好后按真 Pace 走 P01 或 P05。真破平走 P59；不可比走 P36；前台别跟错价走 P42。不要把 BAR dump 到 399「先跟再改」。

```yaml
decision: Do not match Brand.com or other correct channels to a mapping/mis-push error price; first confirm the live rate was intended; if not, quarantine/close the bad rate code and fix the map; Hold intended BAR; never treat the error as a clearing price
scenario: Channel manager mapped the wrong room/rate code, a stale promo or test rate went live, or a screenshot shows 399 that nobody meant to sell; e-com/GM wants Brand.com to "match reality" or "follow then fix"
required_inputs:
  - Stay_Date
  - intended_BAR（本打算卖的公开灵活价）
  - live_channel_rate（具名渠道活价）
  - same_product_or_mapping_id（房型码/价格码/促销开关/CM 映射；缺则问）
  - public_pace
  - already_booked_error_count（缺则问；处理口径 NV）
signals_for:
  - live_rate_not_the_intended_rate_code
  - mapping_or_stale_promo_or_test_rate
  - request_to_cut_Brand_to_match_the_error
  - "follow_then_fix" proposal
signals_against:
  - intended_comparable_undercut (then P59)
  - incomparable_shop (then P36)
  - joining_a_promo_on_purpose (then P18)
  - front_desk_match_dump (then P42 — still do not match an *error*)
  - competitor_undercut (then P16)
  - room_type_inversion_by_design (then P34)
  - unsold_allotment (then P58)
  - true_public_behind_after_fix (then P05; reason is demand, not the error)
recommended_action: 先问是不是本打算卖的。错价→停错码/修映射；意图 BAR Hold 779–799 首选 799。不要官网跟到 399。不要先跟再改。已订单问本店（NV）。修好后 Ahead→P01；真弱→P05。Never −15%。Never BAR→399 to match a bug. 14/399/799 只 Simulation。399 = 错误价 + 被拒绝的 dump，不是推荐 BAR。
risk: 把事故写成市价；训练购物者/算法记住 399；只改映射渠道侧仍开；已订错价单客诉；与真破平/不可比叠刀
follow_up: 活价是否收回；渠道侧该码是否仍可订；Brand.com 是否仍 Hold；公开 Pickup；已订错价单处理
confidence: 有日期+意图 BAR+活价+ Pace 则方向 Medium；缺映射字段/本店退改只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「CM 把标准房推成了 399」「映射错了美团在卖错房型价」「错价已经出去了官网要不要跟」「先跟再改回来」「已经卖了不能破平 / 不能装没看见」。

主动词：**不要把 Brand.com 对齐到错误价 / 先停错码 / Hold 意图 BAR。**

不要用：确认是本打算卖的可比 undercut → P59。截图不可比且不是映射 → P36。故意报名促销 → P18。竞对更低 → P16。房型梯倒挂 → P34。切房 → P58。前台口价仍 P42（本卡加一句：错价也不跟）。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用错误价改 Brand.com。**

---

## 2. 硬门（先不动 Brand.com）

命中任一 → **不要**用错误价去改 Brand.com：

1. **活价不是本打算卖的。** 先停错码 / 修映射。  
2. **有人要把 Brand.com 砍到活价「对齐 / 先跟再改」。** **禁止。**  
3. **提案是 BAR→399 或一夜 −15%。** **拒绝。**  
4. **Pace Ahead 却以「已经挂出去了」砍价。** P01 Hold。  
5. **本店映射字段 / 退改未知。** 先问；过程仍隔离错码；不编 SOP。  
6. **其实是真破平 → P59。** 不可比 → P36。竞对 → P16。倒挂 → P34。切房 → P58。报名 → P18。

为「已经卖了」或「不能装没看见」而自动 dump Brand.com **不是** 开门条件。

---

## 3. 默认动作

1. 问是不是本打算卖的（房型码 / 价格码 / 促销开关 / 映射）。  
2. 是错价：建议停错码、修映射；提醒断映射未必等于渠道下架（SiteMinder A Vendor，§42）——还要确认渠道侧该码已关。顾问不点。  
3. 意图 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。  
4. 已订错价单：问本店政策（NV）。不编退改表。  
5. 24h 复核活价是否收回；Pace 仍 Ahead → 继续 Hold。  
6. 修好后真弱夜才 P05；理由是该夜 Pace，不是「错价已经出去」。

---

## 4. 禁止写法

- 「官网先砍到 399 对齐，回头再改回来」  
- 「已经卖了，市场就是 399」  
- 「美团映射一般这样改」（禁止发明 SOP）  
- 「错价单一律退 / 一律不退」（禁止发明退改表）  
- 把 Simulation 399/799 写成行情 Fact

---

## 5. 杠杆顺序（早会一个动作，P45）

1. 问是不是本打算卖的。  
2. 停错码 / 修映射（建议，不点）。  
3. 公开意图 BAR Hold。  
4. 已订单问本店。  

不要同时「砍官网 + 修映射」。带走一句：**先关错码 / 修映射，公开 BAR Hold**，不要「全网对齐到 399」。

399 从未被推荐。
