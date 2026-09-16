# Decision Card: Tighten Cancel Before Cut（免费取消堆着 → 先收新单窗，不先砍 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/tighten-cancel-before-cut.md`  
> 对应：问题树 §10 · 「免费取消堆着不是弱需求」；用户原话「OTB 看起来还行但今晚全是免费取消，要不要先砍价占量 / 入住前 3 天还一堆随时退，降不降」  
> 剧本：`advisor-playbooks/cancel-policy-tighten.md`（P38）  
> 交叉：P14 Soft 诊断 · P19 预付产品 · P05 政策先于 dump · P28 天气夜不收窗 · T19/T20 · `how-much-to-move.md` 档 E/G  
> 状态：active · Scout 2026-08-23 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；A Vendor（Booking 灵活+NR、临时例外、确认预订是协议）；中国截止点非 Fact  
> Last Verified：2026-08-23  
> 禁止：改已确认客人规则当暗降；砍 BAR 锁随时退；一夜 −15%；编美团/携程截止点；无地板发明 699；操作 PMS/OTA。

```yaml
decision: Treat high-flex OTB as Soft; shorten or close free-cancel on NEW production as DTA shrinks; steer leftover to prepaid/NR above brand floor; Hold BAR; fence only after wash proves weak
scenario: OTB looks fine but book is mostly free-cancel; user wants to cut BAR (e.g. to 699) to lock volume; or DTA≤3 still selling 随时退
required_inputs:
  - Stay_Date_and_DTA
  - OTB_or_Remaining_sellable
  - flex_vs_prepaid_mix_or_explicit_unknown
  - current_free_cancel_window
  - whether_user_wants_to_change_existing_bookings
signals_for:
  - otb_ok_but_mostly_free_cancel
  - dta_short_still_selling_anytime_cancel
  - user_wants_cut_to_lock_volume
  - peak_ahead_adding_flex_to_fill
signals_against:
  - weather_force_majeure_night
  - leftover_is_ooo_unsellable
  - already_prepaid_dominant
  - wash_done_true_weak_after_p02_p05_exclusions
recommended_action: OTB 当 Soft。只收新单免费窗或推不可退（P19 −3–5%，高于品牌底/档 E 下沿）。Hold BAR。已确认单不暗改。洗完仍弱才围栏。禁一夜 −15%。天气夜不收窗。
risk: 把期权当硬需求砍价；暗改已确认单；天气夜收窗逼取消；无地板发明 699
follow_up: 新单灵活占比、24h 取消 vs 新订、预付占比、BAR 是否仍被要求砸
confidence: 灵活占比+DTA 齐则方向 Medium；缺混只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「OTB 看起来还行，今晚全是免费取消，要不要先砍价占量」「入住前 3 天还一堆随时退，降不降」。

主动词：**收新单窗 / 推不可退 / Hold BAR / 不暗改已确认。**

不要用：取消病因还没问 → 先 P14。只要预付打几折 → P19。天气旗标 → P28。剩余是维修 → P37。

没有 Stay Date → 仍条件化，不要说无法判断。

---

## 2. 硬门（先不动 BAR）

命中任一 → **不要**用砍 BAR 去锁随时退：

1. **OTB 看起来不差，但大半是免费取消/随时退。** 先当 Soft（P14）。高灵活 ≠ 弱需求。  
2. **DTA 已短，新生产仍开入住当日随时退。** 先关或缩短 **新单** 免费窗。  
3. **用户要改已确认客人的取消规则。** **拒绝。** 确认预订是协议。最多客人自愿换 NR。  
4. **天气/停运旗标。** 走 P28：不涨、不收窗进那一夜。  
5. **无声明品牌底还要砍到 699。** 不发明 699。有底则预付也不砸穿。

为「占量/锁量」而动 BAR **不是**开门条件。

---

## 3. 何时可以动价（仍不是「为灵活堆着而砍」）

| 条件 | 动作 |
| --- | --- |
| 灵活堆着、Pace 非真弱 | **Hold BAR。** 收新单窗。可选 P19 −3–5% ≥ BAR×0.95 |
| Peak Ahead | 更早关灵活；关深折 AP；BAR 按 P01/P03，不因灵活而降 |
| 洗完 24–48h 仍真弱、过 P02 排除 | 档 E 围栏；BAR 默认不动 |
| DTA≤3 过 P05 排除 | 档 H 短窗战术；新单仍不要当日随时退；禁一夜 −15% 当新 BAR |
| 市场也弱 | 不砸 BAR（do-not-cut） |

仿真锚：Hold **779–799 首选 799**；拒绝 699。

---

## 4. 动作表

```text
Stay Date / DTA:
Flex share of OTB:     （缺则 Unknown，不编 50%）
Decision:  收新单窗 / 开浅预付 / Hold BAR / 拒绝暗改已确认
Public BAR: 区间 + 首选（Hypothesis）
NR:        −3–5% 且 ≥ BAR×0.95 且 ≥ 品牌底；Peak 关深折
Do-not-do: 砍 BAR 锁随时退；改已确认规则；编截止点；一夜 −15%；天气夜收窗
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 06:17 CST | 首版。P38。先收新单窗，不先砍 BAR。 |
