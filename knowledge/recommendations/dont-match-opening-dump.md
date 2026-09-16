# Decision Card: Don't Match Opening Dump（不要用公开 BAR 对齐新店开业价）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-match-opening-dump.md`  
> 对应：问题树「对面新开业 399 要不要跟」「开业周不砍没人订」  
> 剧本：P68 `advisor-playbooks/new-competitor-opening.md`  
> 理论：Enz 2003 折扣方向 · Lighthouse 新供给重审 Comp Set · PriceLabs promo≠BAR  
> 交叉：P16 连续价格战 · P36 不可比 · P15 满房溢出 · P05 真弱 Pace · P57 份额 · P18 促销闸 · T20 品牌底  
> 状态：active · CASE 2026-08-28 10:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A 方向 + B/C Vendor（动作方向）；跟价 % NV  
> Last Verified：2026-08-28  
> 仿真：`cases/sim-2026-new-hotel-open-sat.md`  
> 禁止：BAR→399 对齐开业价；一夜 −15%；编华住开业 SOP；399 当行情；开 P69。

```yaml
decision: Do not match a new hotel's opening/intro dump with public BAR; review Comp Set as a watch-list, not a tonight price button
scenario: 对面新开业 399 要不要跟；开业周不砍没人订；我们刚开所以 399 当 BAR；新店必须进 Comp Set 所以今夜对齐
required_inputs:
  - stay_date
  - public_BAR
  - pace_remaining
  - new_hotel_open_or_intro_flag
  - same_product_checklist
  - whether_opening_promo_has_end_date
signals_for:
  - new_opening_or_soft_open_intro_rate
  - own_pace_ahead_or_on
  - proposed_BAR_399_to_match_intro
signals_against:
  - incomparable_shop (go P36)
  - established_multi_comp_price_war (go P16)
  - true_behind_thick_remaining (go P05; reason = Pace)
  - new_hotel_sold_out (go P15)
recommended_action: 开业/intro + Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。新店进观察 Comp Set，不改今夜 BAR。真 Behind 才 P05，理由写 Pace。自己软开只用有限期围栏，399 不当永久 BAR。禁一夜 −15%。399 只在 Simulation。
risk: 训练市场；把不可比当贵了；把名单重审写成砍价；软开把 intro 锚死
follow_up: Pickup 是否塌；intro 是否仍标促销；公开 BAR 是否仍 Hold
confidence: Pace+开业旗分层则方向 Medium；点跟价 % Low
evidence_level: A/B/C
last_verified: 2026-08-28
```

---

## 1. 何时用

「对面新开业 399 要不要跟」「开业周不砍没人订」「我们刚开所以 399」「新店进 Comp Set 了今晚对齐」。

主动词：**Hold 公开 BAR** / **不跟 intro** / **观察名单** / **真弱才 P05**。  
不要用：只有一句「对面便宜」无 Pace、无是否开业——仍条件化：默认不跟 intro，不要说无法判断就砍 BAR。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用公开 BAR 对齐新店开业 dump**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认是开业/intro 不是连续价格战 | → P16 |
| 同一口价或先走 P36 | 不可比 → P36 Hold |
| 拟议不是 BAR→399 | 若是 → **拒绝** |
| Ahead 不假装 Behind | 真 Behind → P05；理由 Pace |

## 3. 默认动作（一句话）

开业价不自动跟；过夜 Hold 779–799 首选 799；不要 399；Comp Set 重审 ≠ 改今夜 BAR；真弱才 P05；本店 SOP NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 10:17 CST | 首版。配 P68。 |

> 交叉指针（2026-08-28 14:17，不改正文）：开业 dump 仍本卡；套餐/含早误读 BAR 走 **P69** / `dont-cut-bar-for-package.md`。不写 P70。
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。
