# Decision Card: Don't Reinstate Below Current BAR（取消后按原价恢复不是必须；Ahead 拒旧低价；不 dump 399）

> 资产：Advisor Decision Card（P65）
> 路径：`recommendations/dont-reinstate-below-current-bar.md`
> 对应：问题树 §72；用户原话「客人取消了又后悔，按原价恢复吧」「系统 Reinstate 把旧 599 写回来了」「BAR 已经 799 了还要不要认旧价」「不恢复他就会去订 399」
> 剧本：`advisor-playbooks/cancel-reinstate-old-rate.md`
> 配套：`metrics/reinstate-rate-gap.md` · P62 · P14 · P38 · P54 · P01 · P05 · P36 · P60 · P64
> 状态：active · 2026-08-27 22:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor PMS（OPERA：原房型/房价不可用时须选新组合 — §52）
> Last Verified：2026-08-27
> 仿真：`cases/sim-2026-reinstate-sat.md`
> Advisor-First：建议先拆同一笔 Reinstate vs 取消后再订新单；Ahead 拒旧低价、给当前价；问本店 Reinstate 政策（NV）；不操作 PMS/OTA/前台。
> 禁止：Ahead 自动认旧 599；BAR→399；一夜 −15%；编华住 Reinstate SOP / 罚金% / 佣金% / 699；开 P66。

## 三句（原样）

1. 先问这是 **同一笔订单恢复（Reinstate）** 还是 **取消后再订一笔新单**。后者走 P62。恢复旧价等于用过期价格占今晚库存。本店 Reinstate 是否带原价 / 华住字段 = **NV**，不编。
2. 高峰 / Pace Ahead：默认 **不按旧低价恢复**；要回来就按 **当前** BAR/可售价（Hold 779–799 首选 799，Hypothesis / Simulation）。不要因为「怕他去订 399」就把 BAR dump 到 399 或自动认旧 599。
3. 真弱夜才更有余地谈是否给旧价（仍是让步，不是权利）。已发生 no-show 走 P54；未来收窗走 P38。不要把 BAR dump 到 399「好让他别纠缠恢复」。

```yaml
decision: Do not auto-honor old cancelled rate on reinstate when below current BAR; on Ahead nights offer current 779–799 prefer 799; never dump BAR to 399 to appease; flag property reinstate-rate policy as NV
scenario: Guest cancelled then asks FO to reinstate same reservation at historical rate after BAR moved up; or PMS reinstate posts historical rate; FO fears guest will book OTA 399
required_inputs:
  - Stay_Date
  - same_record_reinstate_vs_new_booking
  - old_rate_vs_current_BAR
  - remaining_and_pace
  - property_reinstate_rate_policy（缺则 NV）
signals_for:
  - request_to_reinstate_at_old_rate_below_current_BAR
  - FO_auto_reinstate_posted_historical_rate
  - proposal_to_dump_BAR_to_399_so_guest_wont_push
  - Pace_Ahead_thin_remaining
signals_against:
  - cancel_then_new_cheaper_booking (then P62)
  - no-show_no_cancel_record (then P54)
  - Soft_cancel_wave_no_reinstate_ask (then P14)
  - true_weak_Behind_thick_remaining (then discretionary exception — label exception, not new BAR)
recommended_action: 先拆同一笔 Reinstate vs 新单。Ahead 拒旧低价；给当前 779–799 首选 799。Never 自动认旧 599。Never BAR→399。Never −15%。问本店 Reinstate 政策（NV）。弱夜才可谈例外并标 exception。14/599/399/799 只 Simulation。599 = Ahead 上被拒的旧价。399 = 被拒绝的 dump。
risk: 训练「取消再回来」；把系统回写当政策；与 P62 混；用 399 dump 安抚
follow_up: reinstate 件数；过账价 vs BAR；公开 BAR 是否仍 Hold；未来日期免费窗
confidence: 有日期+同单确认+Pace 则方向 Medium；缺 Reinstate 政策只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「按原价恢复吧」「系统把旧 599 写回来了」「BAR 799 还认不认旧价」「不恢复他就订 399」。

主动词：**拒旧低价** / **给当前可售** / **Hold 公开 BAR** / **拒绝 399** / **问政策 NV** / **弱夜标 exception**。  
不要用：取消后再订新单更低价——移交 **P62**。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要在 Ahead 夜把过期低价当必须认的恢复价，也不要用 399 dump 安抚**。  
没到走 P54。Soft 潮走 P14。真弱走形 D / P05 边界。

---

## 2. 硬门（先不认旧、不 dump）

命中任一 → **不要按低于当前 BAR 的旧价自动恢复，也不要把 BAR 改成 399**：

1. 同单恢复请求 + Pace Ahead / 仍紧 → **给当前 779–799 首选 799**；拒旧低价  
2. 系统已写回历史价 → **改到当前价** 或当新单按当前价（顾问不代点）  
3. 有人提议 BAR→399「别纠缠」→ **拒绝**  
4. 一夜 −15% → **拒绝**  
5. 取消后再订更低价 → **P62**，不是本卡认旧价枝

真 Behind + remaining 厚 → 才可谈 **exception 旧价**；理由写让步，不写权利；不当新 BAR。

---

## 3. 动作表

```text
Ahead + 同单要旧价     → 拒旧价；报当前 BAR；Hold 公开栏
系统写回历史价         → 纠正到当前价 / 当新单当前价；问政策 NV
威胁订 399             → Hold Brand.com；查围栏/错价/嵌套
Behind + 厚剩余        → 可谈旧价；标 exception；仍禁 399
新单更低价             → P62
没到                   → P54
```

---

## 4. 不做

- Ahead 自动认旧 599  
- BAR→399  
- 编华住 Reinstate SOP  
- 顾问代点 Reinstate  
- 开 P66  

---

## 5. 交叉

P62 新单 · P14 Soft · P38 新生产 · P54 no-show · P01 Ahead · P05 leftover · P36/P60/P64 对 399 来源。

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 22:17 CST | 首版。P65 主卡。Ahead 拒旧价；Hold 799；拒 399/599；政策 NV。未开 P66。 |
T-Reinstate last-line（2026-08-28 00:17 CST）：「为什么历史价不是权利」走 `theory/reinstate-vs-current-rate.md`；本卡三句 / 399-rejected / 599-rejected / 799-Hypothesis **不改**。
