# Decision Card: Don't Rewrite BAR for Service Recovery / Folio Adjustment（不要把本住服务补偿/账单 adjustment 写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-service-recovery.md`  
> 对应：问题树「客人投诉补了差价所以改 BAR」「服务失败今晚全部 dump」「补偿券才是市场价」「ADR 被减免看脏砍 BAR」「Service Recovery Adjustment 屏就是公开价」  
> 剧本：P87 `advisor-playbooks/service-recovery-adjustment-vs-bar.md`  
> 交叉：P39 点评 SIGNAL · P75 BRG 索赔 · P47 计划 Comp · P84 取消 FEE · P83 储值 · P86 押金/预授权 · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-31 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS（动作方向）；补偿 % Fact NV  
> Last Verified：2026-08-31  
> 仿真：`cases/sim-2026-service-recovery-sat.md`  
> 禁止：BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」；一夜 −15%；编华住补偿 SOP；把 OPERA $ breakfast 例当中国 Fact；开 P88。

```yaml
decision: Do not treat folio Service Recovery / posting adjustment / rebate on THIS stay as public BAR; do not rewrite BAR from compensation floor
scenario: 客人投诉补了差价所以 BAR 改那个价；服务失败今晚全部 dump；补偿券 399 所以公开也 399；ADR 被减免看脏砍公开价；Service Recovery Adjustment / Adjust Charge 屏就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - service_recovery_adjustment_or_rebate_if_any
  - whether_folio_adjustment_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_service_recovery_or_folio_adjustment_to_BAR
  - proposed_BAR_to_compensation_floor
  - ADR_pollution_from_allowances_used_as_dump_reason
  - compensation_voucher_used_as_price_signal
  - pace_ahead_or_on
signals_against:
  - review_score_signal (go P39)
  - brg_like_for_like_on_booked_direct (go P75)
  - planned_comp_house_use (go P47)
  - cancel_attrition_fee_posting (go P84)
  - stored_value_payment (go P83)
  - deposit_preauth_hold (go P86)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆本住 folio Service Recovery / posting adjustment / rebate（OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge）vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。补偿% NV。禁一夜 −15%。399 只在 Simulation。不把 OPERA Vendor $ 例当中国 Fact。
risk: 把补偿地板写成战略尺；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P39 评分 / P75 BRG / P47 Comp / P84 取消 FEE / P83 储值 / P86 押金当本店改尺
follow_up: 公开 BAR 是否仍 Hold；补偿是否仍挂在本住 folio Service Recovery Adjustment / Adjust Charge；24h 公开 vs 补偿过账
confidence: Pace+能拆本住补偿/公开则方向 Medium；点补偿额/% Low
evidence_level: A
last_verified: 2026-08-31
```

---

## 1. 何时用

「客人投诉补了差价，BAR 改成那个价」「服务失败今晚全部 dump」「补偿券 399 所以公开也 399」「ADR 被减免看脏了砍 BAR」「Service Recovery Adjustment / Adjust Charge 屏就是我们的公开价」。

主动词：**拆本住 Service Recovery / folio adjustment vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「服务失败 / 补了差价」无 Pace——仍条件化：默认不把补偿当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用本住 folio Service Recovery / posting adjustment / rebate / ADR 被减免看脏理由改写公开 BAR**。

顾问三句（与剧本同一套）：

```
1. 先问这是本住 folio Service Recovery / posting adjustment / rebate（OPERA Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds Adjust Charge），还是要改公开灵活 BAR。服务补偿 ≠ 公开尺。本店补偿 SOP / 默认补偿 % = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」。
3. 点评 SIGNAL 走 P39。BRG like-for-like 已订直销索赔走 P75。计划 Comp 走 P47。取消 FEE 过账走 P84。押金/预授权走 P86。真弱走 P05（可有窗围栏，仍禁一夜 −15%，仍不从补偿地板改写公开 BAR）。
```

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 本住补偿/adjustment 是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 补偿地板当新 BAR | 若是 → **拒绝** |
| 不是点评 SIGNAL / BRG 索赔 / 计划 Comp / 取消 FEE / 储值 / 押金 | → P39 / P75 / P47 / P84 / P83 / P86 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从补偿地板改写 BAR） |

## 3. 默认动作（一句话）

服务补偿≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店补偿 SOP / 默认补偿 % NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 18:17 CST | 首版。配 P87。服务补偿不再 leftover。不写 P88。 |

> 源指针（2026-08-31 20:17 R31-20，不改正文）：§99 Apaleo *Adding and Moving Charges to a Folio*（Refund/Add allowance）+ HotelKey *Service Recovery*（negative charge / non-revenue；第三家 Vendor）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 理论指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。三句 / Hold 799 / 拒 399 **不改**。不规定 P88。

> 源指针（2026-09-01 04:17 R01-04，不改正文）：§103 HotelKey Charge Types + Early Check-Out（charge type / 早离费过账 ≠ BAR Type）。三句 / Hold 799 / 拒 399 **不改**。不规定 P88。

