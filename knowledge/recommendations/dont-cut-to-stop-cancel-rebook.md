# Decision Card: Don't Cut to Stop Cancel-Rebook（取消重订不是砍 BAR 的理由；Ahead Hold；不跟重订价）

> 资产：Advisor Decision Card（P62）
> 路径：`recommendations/dont-cut-to-stop-cancel-rebook.md`
> 对应：问题树 §69；用户原话「客人取消了又订回来更便宜，要不要认」「干脆降价让他们别取消」「免费取消的就别涨了」「BAR 砍到 399 别再被刷」
> 剧本：`advisor-playbooks/same-day-cancel-rebook.md`
> 配套：`metrics/cancel-rebook-gap.md` · P14 · P38 · P19 · P54 · P05 · P45 · P59 · P60 · P46
> 状态：active · 2026-08-27 10:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor/OTA（Booking Partner Hub：NR 改期不得改到更低总价 — §46）
> Last Verified：2026-08-27
> 仿真：`cases/sim-2026-cancel-rebook-sat.md`
> Advisor-First：建议先拆真取消 vs 同住更低价重订；Ahead Hold 公开 BAR；问本店改订政策（NV）；未来日期评 P38/P19；不操作 PMS/OTA/前台。
> 禁止：预防性砍公开 BAR；跟到重订价当新 BAR；BAR→399；一夜 −15%；编华住取消重订 SOP / 罚金% / 佣金% / 699；开 P63。

## 三句（原样）

1. 先问这波是 **真取消空出来** 还是 **同一拨人取消再订更低价**。后者是对自己价格曲线套利，不是新需求，也不是今晚该砍 BAR 的理由。本店是否允许同住改订吃新价 = **NV**，不编华住 SOP。
2. 高峰 / Pace Ahead：Hold 779–799 首选 799（Hypothesis / Simulation）。不要为了「别让他们取消」先把公开价砍下去——那是在制造套利。未来日期收紧免费取消窗走 P38；浅预付走 P19。
3. 真弱剩余才走 P05。已发生的 no-show 走 P54；高取消 Soft 诊断走 P14。不要把 BAR dump 到 399「好让客人别取消重订」。

```yaml
decision: Do not cut public BAR to prevent or match same-stay cancel-rebook; on Ahead nights Hold 779–799 prefer 799; flag hotel rebook-rate policy as NV; fence future production via P38/P19
scenario: Guests cancel a higher flexible booking and rebook the same stay cheaper after BAR drops or a promo opens; FO/GM wants to honor new rate, cut BAR so they "won't cancel", or dump to 399
required_inputs:
  - Stay_Date
  - cancel_count_vs_same_stay_rebook_count
  - ADR_before_vs_after（缺则 NV）
  - remaining_and_pace
  - current_public_BAR
  - property_same_stay_rebook_rate_policy（缺则 NV）
signals_for:
  - same_name_or_same_stay_rebook_at_lower_ADR
  - cancels_approx_rebooks_rooms_flat_ADR_down
  - proposal_to_cut_BAR_so_guests_wont_cancel
  - proposal_to_match_rebook_price_or_BAR_to_399
signals_against:
  - cancels_without_same_stay_rebooks (then P14 Soft)
  - no-show_no_cancel_record (then P54)
  - true_weak_remaining_Behind_after_P05_checks (then bounded P05 — reason is Pace not "stop arbitrage")
  - mapping_or_parity_bug_price (then P60/P59)
recommended_action: 先拆真取消 vs 同住重订。Ahead Hold 779–799 首选 799。Never 预防性砍公开价。Never 跟重订价（sim 599）当新 BAR。Never BAR→399。Never −15%。问本店改订政策（NV）。未来高峰日期评 P38/P19。8/7/599/399/799/14 只 Simulation。399 = 被拒绝的 dump。599 = 重订价不是推荐 BAR。
risk: 训练「等降再订」；把套利当 leftover；与 P14 Soft 叠成 dump；改已确认单当暗降
follow_up: 同住重订件数；ADR before/after；公开 BAR 是否仍 Hold；未来日期免费窗/NR
confidence: 有日期+同住重订计数+Pace 则方向 Medium；缺改订政策只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「取消了又订回来更便宜要不要认」「干脆降价让他们别取消」「免费取消的就别涨了」「BAR→599/399 别再被刷」。

主动词：**Hold 公开 BAR** / **拒绝跟重订价** / **拒绝预防性砍价** / **拒绝 399** / **问政策 NV** / **未来日期 P38/P19**。  
不要用：只有「取消多」无同住重订分层——先条件化问重订；无重订则移交 P14，仍不自动 dump。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用砍公开 BAR 去阻止或匹配取消重订套利**。  
无重订的高取消走 P14。没到走 P54。真弱走 P05。

---

## 2. 硬门（先不砍、不跟）

命中任一 → **不要砍公开 BAR，也不要把 BAR 改成重订价或 399**：

1. 同住更低价重订存在 + Pace Ahead / 仍紧 → **Hold 779–799 首选 799**  
2. 有人提议「先降让他们别取消」→ **拒绝**（制造套利）  
3. 有人提议跟到重订价（sim 599）或 BAR→399 → **拒绝**  
4. 一夜 −15% → **拒绝**  
5. 「免费取消的就别涨了」→ 已订灵活看 Soft（邻 P14）；**新生产**高峰仍可评 P38/P19，不是 dump

真 Behind + remaining 厚且套利不是主叙事 → 才评 **P05** 围栏；理由写 Pace，不写「别被刷」。

---

## 3. 动作表

```text
Stay Date:        用户给
Demand:           Ahead/紧 | Behind leftover | 未知（未知且有同住重订 → 勿预防性砍）
Public BAR:       Hold 779–799 首选 799（Hypothesis）
Match rebook:     禁止把重订价写成新 BAR
Do-not-do:
  - 预防性砍公开价「别让他们取消」
  - BAR → 399 / 跟 599
  - 一夜 −15%
  - 编华住取消重订 SOP / 罚金% / 佣金%
  - 顾问代改单 / 代退改
Policy:           同住改订吃新价？问本店（NV）
Future dates:     评 P38 收新单免费窗；P19 浅 NR
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 10:17 CST | 首版。P62。Ahead Hold；拒预防性砍价；拒 399/跟 599；政策 NV；未来 P38/P19。 |

---

## 5. 交叉（不改 §1–4）

P14 Soft 诊断 ≠ 同住套利动作。P38 只动新生产窗口。P19 产品深度不改编幅。P54 没到 ≠ 取消重订。P05 leftover ≠ 「别被刷」。P45 早会一个动作 = Hold+政策+前瞻围栏，不是「降到他们看到的价」。P59/P60 价平/错价修好侧。P46 早离。
