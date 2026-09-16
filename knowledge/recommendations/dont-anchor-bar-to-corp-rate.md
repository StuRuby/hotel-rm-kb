# Decision Card: Don't Anchor BAR to Corporate Annual Rate（不要把公开 BAR 跟到年标 / 不要为签年标先砍 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-anchor-bar-to-corp-rate.md`  
> 对应：问题树「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签年标」「年标就是 BAR」  
> 剧本：P71 `advisor-playbooks/corporate-annual-rate-vs-bar.md`  
> 理论：OPERA Profile Negotiated Rates · BAR Based 派生方向  
> 交叉：P26 已签码漏出 · P48 政务 · P10 一场团 · P56 月末 · P05 真弱 · P01 Ahead  
> 状态：active · SCOUT 2026-08-28 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor + C 实践（动作方向）；折扣 % NV  
> Last Verified：2026-08-28  
> 仿真：`cases/sim-2026-corp-annual-rate-sat.md`  
> 禁止：BAR→399「冲量好签」；BAR→499「对齐年标」；一夜 −15%；编华住年标 SOP / LRA %；开 P72。

```yaml
decision: Do not treat corporate annual / RFP negotiated rate as public BAR; do not cut BAR to match or to win the account
scenario: BAR 跟到年标；公开价先砍到 499 对齐协议；399 冲量好签；年标 499 就是 BAR
required_inputs:
  - stay_date
  - public_BAR
  - proposed_or_signed_corp_rate_if_any
  - pace_remaining
  - which_code_user_calls_BAR
signals_for:
  - user_confuses_negotiated_with_public_BAR
  - proposed_BAR_to_match_annual
  - proposed_dump_to_win_rfp
  - pace_ahead_or_on
signals_against:
  - existing_corp_code_leaking_peak_or_ota (go P26)
  - government_per_diem (go P48)
  - one_shot_group (go P10)
  - month_end_blanket_dump (go P56)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆年标 vs 公开。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→499。拒绝 BAR→399。折扣 % NV。禁一夜 −15%。399/499 只在 Simulation。
risk: 把公开尺锚死在合同价；用地板买年标；主动把协议漏成市价
follow_up: 公开 BAR 是否仍 Hold；年标是否被标成 BAR；24h 公开 Pickup
confidence: Pace+价码分层则方向 Medium；点折扣 % Low
evidence_level: A/C
last_verified: 2026-08-28
```

---

## 1. 何时用

「BAR 跟到年标吧」「公开价先砍到 499 对齐协议」「399 冲量，年标才谈得下来」「年标就是我们的 BAR」。

主动词：**拆年标 vs 公开** / **Hold 公开 BAR** / **拒对齐** / **拒冲量地板**。  
不要用：只有一句「销售要签年标」无 Pace、无价码——仍条件化：默认不把年标当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用年标/RFP 理由改公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开 BAR vs 年标/RFP 是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→499 / BAR→399 | 若是 → **拒绝** |
| 不是已签码漏出 | → P26 |
| 不是政务 per-diem | → P48 |
| 不是一场团 / 不是月末 blanket | → P10 / P56 |
| Ahead 不假装 Behind | 真 Behind → P05 |

## 3. 默认动作（一句话）

年标≠公开 BAR；Ahead Hold 779–799 首选 799；不要 499 对齐；不要 399 冲量；真弱才 P05；本店折扣 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 22:17 CST | 首版。配 P71。 |
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
> 交叉指针（2026-08-29 02:17，不改正文）：姐妹店溢出 / 区域统价走 **P72**。过程仍 **P71**。不写 P73。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。
