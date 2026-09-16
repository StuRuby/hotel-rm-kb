# Decision Card: Don't Dump BAR to Clear Allotment（切房卖不掉 ≠ 降公开 BAR；高峰还房，不 dump）

> 资产：Advisor Decision Card（P58）
> 路径：`recommendations/dont-dump-bar-to-clear-allotment.md`
> 对应：问题树 §65；用户原话「切了 15 间卖不掉，公开价降一点一起出」「美团还占着，我们看起来没房了」「高峰把切房关了放回来」
> 剧本：`advisor-playbooks/channel-allotment-unsold.md`
> 配套：`metrics/allotment-pickup.md` · P52 · P18 · P20 · P25 · P01 · P05 · P27 · P13 · T-Guar
> 状态：active · 2026-08-26 18:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor PMS（Cloudbeds LRA vs Custom Allotment；OPERA Channel Sell Limits — §38）；A Vendor CM（SiteMinder release period → Stop Sell — §38）
> Last Verified：2026-08-26
> 仿真：`cases/sim-2026-allotment-sat.md`
> Advisor-First：建议还/缩切房、Hold 公开 BAR；不操作 PMS / RMS / OTA / channel manager，不自动定价。
> 禁止：为消化切房 dump 公开 BAR；一夜 −15%；BAR→399；编美团/携程切房 SOP / 还房小时 / allotment % / 佣金% / 华住政策；把 399 当推荐 BAR；开 P59。

## 三句（原样）

1. 先问这笔切房 **扣不扣可售、合同几点还、今晚 pickup 几间**。切房是合同桶，不是公开需求，也不是今晚该砍 BAR 的理由。本店切房规则 / 还房时点 / 美团·携程切房 SOP = **NV**，不编。
2. 高峰：先把卖不掉的切房还给房子，再谈价。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「还占着 15 间」就提前 dump 公开 BAR。
3. 公开桶真弱才走 P05。已发生的团块 cutoff 走 P52；促销报名走 P18；净价比较走 P20；混渠配额走 P25。不要把 BAR dump 到 399「为了消化切房」。

```yaml
decision: Do not dump public BAR to digest an unsold OTA/wholesale allotment; ask deduct vs not, contract release time, and tonight's allotment pickup; on peak release/shrink the unused allotment and Hold public BAR; re-score public remaining after release
scenario: Contracted channel allotment pickup is slow; sales/e-commerce/GM wants to cut public BAR so the allotment "sells through", or public looks sold-out because the allotment is still deducting
required_inputs:
  - Stay_Date
  - allotment_size_vs_picked_up_vs_unreleased（缺则问，不编 15/3）
  - deduct_vs_nondeduct（本店配置/合同 NV）
  - contract_release_time（NV，不编华住/美团小时）
  - public_remaining_and_pace
  - public_BAR
signals_for:
  - unsold_allotment_and_someone_wants_public_bar_dump
  - public_looks_sold_out_while_channel_bucket_empty
  - peak_night_allotment_still_sitting
signals_against:
  - group_block_cutoff (then P52)
  - joining_a_platform_promo (then P18)
  - ranking_channels_by_net (then P20)
  - mix_steering_not_same_night_dump (then P25)
  - room_type_nest (then P13)
  - true_public_behind_thick_remaining_after_release (then P05 fences; BAR ≠ 399)
  - public_ahead_or_thin (then P01/Hold; reason is public remaining, not the allotment)
recommended_action: 切房是合同桶，不是公开需求。先问扣不扣、几点还、今晚 pickup 几间。高峰还/缩未卖切房，公开 Hold 779–799 首选 799。不要因为还占着就 dump。公开真弱才 P05。Never −15%。Never BAR→399 to clear allotment. 15/3/12/399/799 只 Simulation。399 是被拒绝的 dump，不是推荐 BAR。
risk: dump 公开稀释每一间公开剩余且未必填满切房；假满房吓走直销；合同还不出仍砍了 BAR；与团 cutoff 叠刀
follow_up: 扣不扣；还房是否落地；切房 24h pickup；还房后公开 remaining + Pace；公开渠道是否出现 399
confidence: 有日期+切房 vs pickup+公开 Pace 则方向 Medium；缺扣不扣/还房时点只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-26
```

---

## 1. 何时用

「切了 15 间卖不掉，公开价降一点一起出」「美团还占着，我们看起来没房了」「高峰把切房关了放回来」。

主动词：**不要为消化切房 dump 公开 BAR / 高峰先还房 / 两桶分开。**

不要用：团块没 pickup → P52。报促销冲量 → P18。按净排序保谁 → P20。mix 战略收配额 → P25。房型卖穿 → P13。opaque 高峰 → P27。前台跟 OTA dump → P42。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用未卖切房改公开 BAR。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用未卖切房去改公开 BAR：

1. **有人要 dump 公开 BAR「消化切房」。** **禁止。** 两套价栏。  
2. **公开看起来没房、切房桶是空的。** 若在扣库存 → **还或缩切房**，不砍 BAR。  
3. **高峰 / Ahead / 公开 remaining 薄。** 还房，Hold 779–799 首选 799。  
4. **扣不扣 / 还房时点未知。** 先问；公开 Hold；不编 SOP。  
5. **提案是 BAR→399 或一夜 −15%。** **拒绝。**  
6. **其实是团 cutoff → P52。** 促销 → P18。净价 → P20。mix → P25。房型 → P13。

为冲 OCC 或为「还占着 15 间」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「按切房定价」）

公开桶同时 **Pace Behind + Remaining 厚 + Pickup 慢 + 供给开**（通常是还房落地之后），才走 P05/P02 bounded move。理由必须是该夜 **公开** 需求，不是「切房卖不掉」，也不是「帮 OTA 出完」。仍禁止 BAR→399，仍禁止一夜 −15%。

不扣库存时：公开已经是真剩余——该 Hold 就 Hold，该 P05 就 P05；未卖切房不提供降价许可证。

---

## 4. 杠杆顺序（早会一个动作，P45）

1. 问扣不扣、几点还、今晚 pickup。  
2. 高峰：还 N 间未卖切房 / stop-sell 该桶。  
3. 公开价 Hold。  
4. 释放后再打分。  

不要同时「还房 + 砍 BAR」。带走一句：今晚高峰还 N 间切房，**或** 公开价 Hold。

---

## 5. 顾问出口

三句见上。399 从未被推荐。Parity 跟切房 dump 不在本卡展开（T11 缺口，不开 P59）。
