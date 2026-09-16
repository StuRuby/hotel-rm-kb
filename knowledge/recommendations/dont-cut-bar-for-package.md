# Decision Card: Don't Cut BAR for Package（不要把含早/套餐当成砍公开 BAR 的理由）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-cut-bar-for-package.md`  
> 对应：问题树「含早所以房费可以地板」「套餐价当 BAR」「BAR 是含早价再砍裸房」  
> 剧本：P69 `advisor-playbooks/package-breakfast-vs-bar.md`  
> 理论：OPERA BAR 模型 · Package Allowance 分摊 · EP 为尺  
> 交叉：P36 竞对含早不可比 · P27 假打包 · P20 净价 · P05 真弱 · P18 促销 · P64 嵌套  
> 状态：active · SCOUT 2026-08-28 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor + C 实践（动作方向）；加价 % NV  
> Last Verified：2026-08-28  
> 仿真：`cases/sim-2026-breakfast-package-sat.md`  
> 禁止：BAR→399「含早地板」；套餐当新 BAR；一夜 −15%；编华住含早 SOP；开 P70。

```yaml
decision: Do not treat breakfast/package shelf price as public BAR; do not cut EP BAR because breakfast is included
scenario: BAR 是含早价还能砍裸房；套餐 399 含双早当新 BAR；含早所以房费地板；CP 挂出去了所以 BAR 就是那个价
required_inputs:
  - stay_date
  - public_EP_BAR
  - package_or_CP_shelf_price_if_any
  - pace_remaining
  - which_code_user_calls_BAR
signals_for:
  - user_confuses_package_total_with_BAR
  - proposed_EP_cut_because_breakfast_included
  - proposed_package_399_as_new_BAR
  - pace_ahead_or_on
signals_against:
  - incomparable_comp_breakfast_shop (go P36)
  - opaque_fake_bundle (go P27)
  - net_contribution_commission_debate (go P20)
  - true_behind_thick_remaining (go P05; EP尺)
recommended_action: 拆 EP vs CP/套餐。Ahead/On → Hold EP 779–799 首选 799。拒绝 BAR→399。拒绝把套餐总价写成新 BAR。加价 % NV。禁一夜 −15%。399 只在 Simulation。
risk: 双重让利；锚死套餐地板；把不可比/假打包当成贵了
follow_up: EP 是否仍 Hold；套餐是否被标成 BAR；24h EP Pickup
confidence: Pace+价码分层则方向 Medium；点加价 % Low
evidence_level: A/C
last_verified: 2026-08-28
```

---

## 1. 何时用

「BAR 是含早价还能砍裸房」「套餐 399 含双早要不要当新 BAR」「含早所以房费可以地板」「CP 挂出去了所以 BAR 就是那个价」。

主动词：**拆 EP vs 套餐** / **Hold EP BAR** / **不把套餐当 BAR** / **拒地板**。  
不要用：只有一句「含早贵了」无 Pace、无价码——仍条件化：默认不把套餐当 BAR，不要说无法判断就砍 EP。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用餐/套餐理由砍公开 EP BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认用户说的「BAR」是哪价码 | 混用 → 先拆 EP vs CP |
| 拟议不是 BAR→399 / 套餐当新 BAR | 若是 → **拒绝** |
| 不是竞对含早不可比 | → P36 |
| 不是盲盒假打包 | → P27 |
| Ahead 不假装 Behind | 真 Behind → P05；EP 尺 |

## 3. 默认动作（一句话）

套餐≠BAR；过夜 EP Hold 779–799 首选 799；不要 399；不要把套餐写成新 BAR；真弱才 P05；本店加价 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 14:17 CST | 首版。配 P69。 |

> 交叉指针（2026-08-28 16:17，不改正文）：Diagnose 走 **T-Package** `theory/package-vs-ep-bar.md`；过程仍 **P69**。不写 P70。
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 06:17，不改正文）：含早套餐仍本卡；Resort Fee/强制服务费/含税总价改尺 → **P79** `resort-fee-service-charge-vs-bar.md` · `dont-rewrite-bar-for-resort-fee.md`。交叉 P79 resort-fee/all-in ≠ 含早。不写 P80。
