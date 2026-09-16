# Decision Card: Don't Match Sister Overflow Rate（不要按姐妹店溢出价接 / 不要区域统一跟最低）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-match-sister-overflow-rate.md`  
> 对应：问题树「按她们 399 接」「区域统一跟最低」「姐妹店空着我们别涨」「不砍就丢给美团」  
> 剧本：P72 `advisor-playbooks/sister-cluster-overflow.md`  
> 理论：OPERA Referral / REFERRAL 不扣发送店 · LTB 多店各价 · Duetto 勿拍平  
> 交叉：P15 竞对满 · P10 一场团 · P71 年标 · P05 真弱 · P01 Ahead  
> 状态：active · CASE 2026-08-29 02:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor（动作方向）；溢出折扣 % NV  
> Last Verified：2026-08-29  
> 仿真：`cases/sim-2026-sister-overflow-sat.md`  
> 禁止：BAR→399「按姐妹店接 / 统最低」；一夜 −15%；编华住 cluster SOP；开 P73。

```yaml
decision: Do not treat sister-hotel overflow or cluster-lowest as public BAR; do not cut BAR to take the referral
scenario: 按她们 399 接；区域统一跟最低；姐妹店空着我们别涨；不砍就丢给美团
required_inputs:
  - stay_date
  - own_public_BAR
  - sister_quoted_or_proposed_rate_if_any
  - own_pace_remaining
  - whether_user_wants_to_change_own_BAR
signals_for:
  - user_matches_sending_hotel_rate
  - proposed_cluster_unify_to_lowest
  - proposed_cut_to_help_empty_sister
  - pace_ahead_or_on
signals_against:
  - non_sister_comp_sellout (go P15)
  - one_shot_group (go P10)
  - annual_corp_rfp (go P71)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆本店尺 vs 姐妹店挂牌。Ahead/On → Hold 779–799 首选 799。接则按本店 BAR。拒绝 BAR→399。拒绝统最低。折扣 % NV。禁一夜 −15%。399 只在 Simulation。
risk: 把公开尺锚死在发送店 dump；用本店 BAR 补贴空着的姐妹店；把组合拍成一个最低价
follow_up: 本店公开 BAR 是否仍 Hold；溢出价是否被标成 BAR；24h 本店公开 Pickup
confidence: Pace+两店分层则方向 Medium；点折扣 % Low
evidence_level: A
last_verified: 2026-08-29
```

---

## 1. 何时用

「按她们 399 接」「区域统一跟最低那家」「姐妹店空着我们别涨 / 先砍帮填」「不砍这批导客就丢给美团」。

主动词：**拆本店尺 vs 姐妹店挂牌** / **Hold 本店公开 BAR** / **拒跟溢出价** / **拒统最低**。  
不要用：只有一句「集团导过来了」无 Pace、无两店价——仍条件化：默认不把溢出价当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用姐妹店/区域统价理由改公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认本店公开 BAR vs 姐妹店挂牌是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 统最低 | 若是 → **拒绝** |
| 不是非姐妹竞对满 | → P15 |
| 不是一场团 / 不是年标 | → P10 / P71 |
| Ahead 不假装 Behind | 真 Behind → P05 |

## 3. 默认动作（一句话）

溢出价≠公开 BAR；Ahead Hold 779–799 首选 799；接则按本店 BAR；不要 399；不要统最低；真弱才 P05；本店折扣 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 02:17 CST | 首版。配 P72。 |

> 交叉指针（2026-08-29 06:17，不改正文）：溢出价仍本卡；闪促改尺走 **P73**。

