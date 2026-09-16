# Decision Card: Don't Give Away a Paid Upgrade（空着的套房差价可卖；高峰不默认免费升；不把套房砸到 399）

> 资产：Advisor Decision Card（P61）
> 路径：`recommendations/dont-give-away-paid-upgrade.md`
> 对应：问题树 §68；用户原话「反正套房空着，免费升了得了」「前台说客人要升，给个 50 块意思一下」「标准卖满了套房降价出」「升房收入不算，别麻烦」
> 剧本：`advisor-playbooks/paid-upsell-upgrade.md`
> 配套：`metrics/upsell-take-rate.md` · P49 · P13 · P34 · P47 · P42 · P05 · P02 · P19 · T19 · P01
> 状态：active · 2026-08-27 06:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor PMS（OPERA Cloud Reservation Upgrade Rules / Upgrade Offers：付费升可配置加价与单独过账 — §44）
> Last Verified：2026-08-27
> 仿真：`cases/sim-2026-paid-upsell-sat.md`
> Advisor-First：建议先问标准紧不紧 / 套房剩几间 / 付费还是免费升；高峰默认付费报价；Hold 套房与标准公开 BAR；不操作 PMS / 前台收银，不自动定价。
> 禁止：高峰默认免费送；套房 BAR→399；一夜 −15%；编华住升房价表 / Fact +¥ 行业常模 / 佣金% / 699；把 399 当推荐套房 BAR；开 P62。

## 三句（原样）

1. 先问今晚 **标准是否紧、套房剩余几间、客人是不是付费升还是会员免费升**。会员免费升走 P49。空着的套房差价是可卖的，不是必须送掉的人情。本店升房价表 / 华住 upsell SOP = **NV**，不编。
2. 高峰或标准已紧：前台默认 **报价付费升**，不要默认免费送。升房加价带用 Hypothesis/Simulation（例如 +150–300 或套房 BAR 与标准 BAR 的差价区间 — 只在仿真里落地数字，不写成中国行业 Fact）。套房公开 BAR Hold 779–799 首选 799（若套房在卖）或按本店梯队；不要把套房 dump 到 399「反正空着」。
3. 弱夜套房厚、标准也松：付费升仍优先于免费送；真要刺激走有围栏的套房促销（P02/P19），不是把标准客免费升完。升房收入进附营/房费口径问本店（NV）。不要用免费升房冒充 OCC 策略。

```yaml
decision: Do not give away sellable room-type step-up on peak; default paid upgrade quote; Hold suite and standard public BAR; never suite BAR→399 because empty; free elite SA upgrades go to P49
scenario: Suite inventory sits empty while standard is tight or guest asks to upgrade; FO wants free upgrade by default; sales wants suite public dump to 399; someone wants a token ¥50 upgrade; someone says upgrade revenue "does not count"
required_inputs:
  - Stay_Date
  - standard_remaining_and_pace
  - suite_remaining_and_suite_BAR_if_selling
  - paid_vs_free_elite_or_award（缺则问）
  - property_upsell_price_table（缺则 NV）
signals_for:
  - suite_empty_used_as_free_upgrade_reason
  - standard_tight_or_peak
  - token_upgrade_fee_far_below_type_gap
  - proposal_to_dump_suite_public_to_399
  - "upgrade_revenue_does_not_count"
signals_against:
  - free_elite_or_award_SA (then P49)
  - room_type_close_protect (then P13)
  - rate_inversion_ladder (then P34)
  - unrelated_comp (then P47)
  - walk-in_match_OTA_dump (then P42)
  - true_weak_after_P05_checks (then bounded suite promo P02/P19 — still prefer paid over free)
recommended_action: 先问标准紧不紧、套房剩几间、付费还是免费。高峰默认付费升报价。标准 Hold 779–799 首选 799；套房公开（若在卖）Hold 979–999 首选 999（Simulation）或本店梯队。Never 免费默认送 on peak。Never 套房→399。Never −15%。本店价表 NV。4/10/799/999/399/+200–300 只 Simulation。399 = 被拒绝的 suite dump。
risk: 训练「空着就送」；写穿套房公开梯；象征价压升房 ADR；与 P49 混桶；口径借口停推
follow_up: 付费升报价/接受；免费 vs 付费 split；套房公开是否仍 Hold；标准 Pace
confidence: 有日期+标准剩余+套房剩余+付费/免费分层则方向 Medium；缺本店价表只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-27
```

---

## 1. 何时用

「反正套房空着免费升」「意思一下 50」「标准满了套房降价出」「升房不算别麻烦」。

主动词：**报价付费升** / **Hold 套房与标准 BAR** / **拒绝免费默认送** / **拒绝套房→399**。  
不要用：只有一句「套房多」无标准紧不紧、无付费/免费分层——仍条件化，不要说无法判断；倾向不要默认送。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要把可卖的升房差价免费送掉或砸穿套房公开价**。  
免费精英升走 P49。房型关型走 P13。倒挂走 P34。

---

## 2. 硬门（先不免费送 / 先不砸套房）

命中任一 → **不要默认免费升，也不要把套房公开 BAR 改成 399**：

1. 高峰或标准 Remaining 紧 / Pace Ahead → 前台 **付费升报价**  
2. 有人要把套房公开 BAR 改成 399 / 一夜 −15% → **拒绝**  
3. 客人是会员免费升 / SA / 已确认升级奖 → **P49**，不是本卡象征价  
4. 「升房不算」→ **不因此停推**；口径 NV  
5. 拟议升房加价远低于类型差（「意思一下」）→ **拒绝该象征价**；改贴类型差 / 本店价表（NV）

弱夜（套房厚、标准也松）→ 付费升仍优先；真刺激才评 **有围栏套房促销**（P02/P19），不是免费升完。

---

## 3. 动作表

```text
Stay Date:        用户给
Demand:           标准紧/高峰 | 弱夜 | 未知（未知当勿默认免费送）
Standard BAR:     Hold 779–799 首选 799（Hypothesis）
Suite public BAR: Hold 979–999 首选 999（Simulation）或本店梯队；禁 399
Desk upgrade:     付费报价（本店价表或 Hypothesis/Simulation 带）；禁高峰免费默认
Do-not-do:
  - 高峰默认免费送
  - 套房 → 399「反正空着」
  - 一夜 −15%
  - 编华住升房价表 / Fact +¥ 常模 / 佣金%
  - 顾问代录入 PMS
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 06:17 CST | 首版。P61。高峰付费升默认；Hold 套房/标准 BAR；拒 399；拒免费默认送；会员免费走 P49。 |

---

## 5. 交叉（不改 §1–4）

P49 免费 SA ≠ 本卡付费报价。P13 关型保护 ≠ 前台收多少。P34 倒挂是产品梯。P05 leftover ≠ 标准满就砸套房。P47 Comp ≠ 付费升。P42 walk-in ≠ 升房加价。T19：升房加价仍是贡献候选。

## 6. 交叉（2026-08-27 08:17，不改三句）

「为什么空差价是期权/可卖产品」→ **T-Upsell** `theory/paid-upsell-differential.md`。本卡三句 / 399-rejected / 799·999-Hypothesis **不改**。过程仍 P61。

> 交叉（2026-08-28 06:17）：延退/早到 → **P67**；本卡正文不改。
