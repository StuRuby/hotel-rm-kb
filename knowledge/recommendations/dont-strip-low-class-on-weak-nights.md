# Decision Card: Don't Strip Low Class on Weak Nights（弱夜别关光低档只留空 BAR；打开围栏或走 P05/P02；不要 BAR→399）

> 资产：Advisor Decision Card（P64 同伴卡 · 形 B）  
> 路径：`recommendations/dont-strip-low-class-on-weak-nights.md`  
> 对应：问题树 §71；用户原话「把促销全关了 BAR 也没人订」「不知道 nested 还是 parallel 就乱关」「弱夜只留高 BAR」  
> 剧本：`advisor-playbooks/nested-rate-class.md`  
> 配套：主卡 `dont-leave-low-class-open-on-peak.md` · P05 · P02 · P33 · P18 · P19 · `metrics/open-rate-classes.md`  
> 状态：active · 2026-08-27 18:17 CST  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-27  
> 仿真：`cases/sim-2026-nested-low-open-sat.md`（第二拍）  
> Advisor-First：弱夜低档已关光、高 BAR 空转时，建议重开有围栏低档或走真弱剧本；不要再涨、不要把公开 BAR dump 到 399。不操作 PMS/OTA。  
> 禁止：弱夜再涨「刺激」；BAR→399 当新锚；一夜 −15%；把 stay 限制过度（P33）与价档关光混成一句不拆；开 P65。

## 三句（与主卡同一套）

1. 先问本店低价档和 BAR 是 **nested / shared / dedicated**，以及今晚还挂着哪些低于新地板的公开产品。结构不明就只动看得到的公开价/促销，不编 PMS 嵌套方向。本店字段名 = **NV**。
2. 高峰 Ahead：先关/限仍开着的深折低档，再谈是否涨 BAR。Hold 779–799 首选 799（Hypothesis / Simulation）。涨了 BAR 但 399 还挂着，等于没涨。
3. 弱夜把低档关光只留高 BAR 没人订，不是「再涨」，是误用嵌套/限制——打开有围栏的低档或走 P05/P02。错映射走 P60。不要把 BAR dump 到 399「因为嵌套太复杂」。

```yaml
decision: On weak/Behind nights do not leave only a high empty BAR after stripping all low nested classes; reopen fenced low classes or follow P05/P02 — do not raise further and do not dump public BAR to 399
scenario: Pace Behind or soft night; all promo/nested low classes closed; BAR high and empty; team wants another raise or a panic dump to 399
required_inputs:
  - Stay_Date
  - nesting_mode（NV ok）
  - which_low_classes_are_closed
  - remaining_and_pace
  - current_public_BAR
signals_for:
  - Behind_or_soft_and_only_high_BAR_bookable
  - low_classes_closed_and_pickup_near_zero
  - proposal_to_raise_further_or_BAR_to_399
signals_against:
  - Pace_Ahead_with_low_still_open (then main peak card)
  - restriction_stack_MinLOS_CTA_on_weak_day (also P33)
  - mapping_bug_false_low (P60)
recommended_action: 重开有围栏低档（预付/成员/短窗/浅折）或走 P05/P02 bounded move。不要再涨。Never 把公开 BAR 改成 399 当新锚。399 可作**有围栏的低档产品**讨论，不是新 BAR。问 nesting NV。
risk: 重开无围栏深折打穿品牌；把真 Ahead 误判成弱；与 P33 叠刀不解 stay 限制
follow_up: 围栏低档是否可订；Pickup；公开 BAR 是否仍非 399
confidence: 有 Pace Behind + 低档关光证据 → Medium；缺 nesting = 条件化
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「促销全关了 BAR 也没人订」「乱关之后只剩高价没人要」「弱夜要不要再涨一点」。

主动词：**重开有围栏低档** / **或 P05/P02** / **拒绝再涨** / **拒绝公开 BAR→399**。  
不要用：其实 Ahead 且低档还开着（主卡）；活「低价」是错码（P60）。

---

## 2. 硬门

1. Behind + 低档关光 + 高 BAR 空 → **不要再涨**；打开围栏低档或走弱夜卡  
2. 有人提议公开 BAR→399「简单粗暴」→ **拒绝作为新 BAR**（399 若重开必须是有围栏产品，不是锚）  
3. 一夜 −15% → **拒绝**  
4. 同时堆满 MinLOS/CTA → 并联 **P33**（松 stay 限制），本卡管价档开关

---

## 3. 动作表

```text
Stay Date:            <弱夜 / Behind>
Inventory:            重开有围栏低档；或保持关但走 P05/P02 对公开 BAR 的有界调整
Price:                不把 399 写成新公开 BAR；有界刺激走 how-much / P05
Do-not-do:
  - 再涨「刺激一下」
  - 公开 BAR → 399 当锚
  - 无围栏深折全渠道裸开
  - 顾问代开价码
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 18:17 CST | 首版。P64 同伴卡形 B。弱夜重开围栏；拒 399 新 BAR。 |
