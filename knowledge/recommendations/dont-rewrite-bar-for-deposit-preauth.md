# Decision Card: Don't Rewrite BAR for Deposit / Pre-authorization（不要把押金/预授权写成新公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-rewrite-bar-for-deposit-preauth.md`  
> 对应：问题树「押金才是市场价」「预授权扣太多所以砍」「押金当地板」「ADR 被押金看脏砍 BAR」「Deposit Rules / Auth Rules 屏就是公开价」  
> 剧本：P86 `advisor-playbooks/deposit-preauth-vs-bar.md`  
> 交叉：P55 担保释放 · P19 预付 NR · P84 取消费 · P83 储值 · P38 收窗 · P54 noshow · P05 真弱 · P01 Ahead · P45 早会  
> 状态：active · CASE 2026-08-31 10:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor PMS（动作方向）；押金 % / 预授权金额 Fact NV  
> Last Verified：2026-08-31  
> 仿真：`cases/sim-2026-deposit-preauth-sat.md`  
> 禁止：BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」；一夜 −15%；编华住押金/预授权 SOP；把 OPERA $100/$20/$50 当中国 Fact；开 P87。

```yaml
decision: Do not treat deposit requirement/payment or credit-card pre-authorization hold as public BAR; do not rewrite BAR from deposit floor or preauth amount
scenario: 押金才是市场价所以 BAR 改 399；预授权扣太多说明价高所以砍；押金当地板；ADR 被押金看脏砍公开价；Deposit Rules / Auth Rules 屏就是公开价
required_inputs:
  - stay_date
  - own_public_BAR
  - deposit_requirement_or_payment_if_any
  - preauth_hold_if_any
  - whether_deposit_preauth_or_want_to_change_BAR
  - own_pace_remaining
signals_for:
  - user_equates_deposit_or_preauth_to_BAR
  - proposed_BAR_to_deposit_floor
  - ADR_pollution_from_deposit_used_as_dump_reason
  - preauth_amount_used_as_price_signal
  - pace_ahead_or_on
signals_against:
  - guarantee_release_6pm (go P55)
  - prepaid_nonrefundable_product (go P19)
  - cancel_attrition_fee_posting (go P84)
  - stored_value_payment (go P83)
  - tighten_free_cancel_window (go P38)
  - transient_noshow (go P54)
  - true_behind_thick_remaining (go P05)
recommended_action: 拆押金要求/过账（OPERA Deposit Rules / Deposit Request / Deposit Payment）与信用卡预授权（Authorization Rules）vs 公开灵活 BAR。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。押金%/预授权额 NV。禁一夜 −15%。399 只在 Simulation。不把 OPERA Vendor $ 例当中国 Fact。
risk: 把押金/预授权写成战略地板；Ahead 给会来的人打折；误为清洗 ADR 砍公开尺；误把 P55 担保 / P19 预付 / P84 取消费 / P83 储值当本店改尺
follow_up: 公开 BAR 是否仍 Hold；押金是否仍挂在 Deposit Rules/Payments；预授权是否仍挂在 Authorization Rules；24h 公开 vs 押金/预授权
confidence: Pace+能拆押金/预授权/公开则方向 Medium；点押金%/预授权额 Low
evidence_level: A
last_verified: 2026-08-31
```

---

## 1. 何时用

「押金才是市场价，BAR 改成 399」「预授权扣了那么多说明价高了砍」「ADR 被押金看脏了砍 BAR」「押金当地板」「Deposit Rules / Auth Rules 屏就是我们的公开价」。

主动词：**拆押金/预授权 vs 公开灵活 BAR** / **Hold 公开 BAR** / **拒改尺**。  
不要用：只有一句「押金多 / 预授权高」无 Pace——仍条件化：默认不把押金/预授权当 BAR，不要说无法判断就砍公开价。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用押金要求/押金过账 / 信用卡预授权 hold / ADR 被押金看脏理由改写公开 BAR**。

顾问三句（与剧本同一套）：

```
1. 先问这是押金要求/押金过账（OPERA Deposit Rules / Deposit Request / Deposit Payment）或信用卡预授权（Authorization Rules = anticipated expenses pre-auth），还是要改公开灵活 BAR。押金/预授权 ≠ 公开尺。本店押金%/预授权额 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」。
3. 担保类型/6点放房走 P55。预付不可退产品走 P19。取消费过账走 P84。储值付款走 P83。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从押金/预授权地板改写公开 BAR）。
```

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认公开灵活 BAR vs 押金/预授权是两把尺 | 混用 → 先拆 |
| 拟议不是 BAR→399 / 押金地板当新 BAR | 若是 → **拒绝** |
| 不是担保释放 / 预付 NR / 取消费 / 储值 / 收窗 / noshow | → P55 / P19 / P84 / P83 / P38 / P54 |
| Ahead 不假装 Behind | 真 Behind → P05（仍不从押金地板改写 BAR） |

## 3. 默认动作（一句话）

押金/预授权≠公开 BAR；Ahead Hold 779–799 首选 799；不要 399；真弱才 P05 有窗围栏；本店押金/预授权 SOP / 押金% / 预授权额 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-31 10:17 CST | 首版。配 P86。押金/预授权不再 leftover。不写 P87。 |

> 源指针（2026-08-31 12:17 R31-12，不改正文）：§95 Cloudbeds Deposit Policies + Apaleo Payment Authorizations。三句 / Hold 799 / 拒 399 **不改**。不规定 P87。
> 理论指针（2026-08-31 16:17，不改正文）：Diagnose 走 **T-Deposit**，过程仍 **P86**。三句 / Hold 799 / 拒 399 **不改**。不规定 P87。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本卡仍是押金/预授权。三句 / Hold 799 / 拒 399 **不改**。不规定 P88。
