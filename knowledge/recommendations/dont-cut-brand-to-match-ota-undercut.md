# Decision Card: Don't Cut Brand.com to Match OTA Undercut（OTA 更低 ≠ 砍官网对齐；先修便宜侧）

> 资产：Advisor Decision Card（P59）
> 路径：`recommendations/dont-cut-brand-to-match-ota-undercut.md`
> 对应：问题树 §66；用户原话「美团比官网便宜 80，我们破平了要不要跟」「Booking 说我们违约」「把官网也砍到一样」
> 剧本：`advisor-playbooks/rate-parity-breach.md`
> 配套：`metrics/parity-gap.md` · P36 · P16 · P23 · P18 · P20 · P25 · P42 · P58 · P01 · P05
> 状态：active · 2026-08-26 22:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A Vendor/OTA（Booking How parity works — §40）；A 官方监管（EU DMA EEA 价平禁止 — §40；**管辖标签，不是中国**）
> Last Verified：2026-08-26
> 仿真：`cases/sim-2026-parity-gap-sat.md`
> Advisor-First：建议先问可比、修便宜侧、Hold Brand.com；不操作 PMS / RMS / OTA / channel manager / Brand.com，不自动定价。
> 禁止：砍 Brand.com「对齐」OTA；一夜 −15%；BAR→399；编美团/携程罚则% / 华住价平 SOP / 佣金差；把 719 当推荐 Brand.com；开 P60。

## 三句（原样）

1. 先问两边是不是 **同一产品**（房型、取消、含早、税、登录/会员、日期）。不可比就走 P36，不要喊破平。本店价平条款 / 美团·携程违约罚则 / 佣金差 = **NV**，不编中国合同范本。
2. 真破平：先修 **便宜的那一侧或错配的围栏**（关错促销、纠 Channel Manager 映射、收 OTA 侧），不要默认把 Brand.com 也砍下去「对齐」。Hold 官网 779–799 首选 799（Hypothesis / Simulation）。Gross 对齐不等于 Net 划算（P20）。
3. 会员价、预付、打包、切房价本来就可以低于灵活公开价——那是围栏，不是破平。竞对更低走 P16；排名掉了走 P35；前台跟 OTA dump 走 P42。不要把 BAR dump 到 399「为了价平」。

```yaml
decision: Do not cut Brand.com to match an OTA undercut; first confirm comparable public flexible product; if true breach, fix the cheap side or mis-mapped fence; Hold Brand.com; never auto-dump for parity
scenario: E-commerce/GM sees OTA public rate below Brand.com and wants to cut the official site to "restore parity", or fears OTA contract penalty
required_inputs:
  - Stay_Date
  - same_product_checklist（房型/取消/含早/税/登录会员/日期；缺则问，走 P36）
  - Brand.com_public_flexible_BAR
  - named_OTA_public_flexible_rate
  - public_pace
  - whether_wrong_promo_or_CM_mapping（缺则问）
signals_for:
  - comparable_public_flexible_OTA_below_Brand
  - request_to_cut_Brand_to_match_OTA
  - OTA_threatens_parity_breach_without_reading_contract
signals_against:
  - incomparable_shop (then P36)
  - member_prepaid_package_fence (then P23/P19/P27 — not breach)
  - competitor_undercut (then P16)
  - rank_pressure (then P35)
  - front_desk_match_dump (then P42)
  - unsold_allotment (then P58)
  - joining_promo_gate (then P18)
  - pace_ahead_excuse (then P01 Hold)
recommended_action: 先问同一产品。不可比→P36。真破平→修便宜侧/映射/促销；Brand.com Hold 779–799 首选 799。不要砍官网对齐。Gross≠Net（P20）。Never −15%。Never BAR→399 for parity. 14/719/399/799 只 Simulation。399 = 被拒绝的 dump。719 = OTA undercut，不是推荐 Brand.com。
risk: 把映射/促销错误扩散到直销；毛价对齐净亏损；Ahead 夜被「价平」借口砸价；训练市场记住 399/719
follow_up: 可比复核；gap 24h；便宜侧是否收回；Brand.com 是否仍 Hold；公开 Pickup
confidence: 有日期+可比清单+两边价则方向 Medium；缺合同罚则只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-26
```

---

## 1. 何时用

「美团比官网便宜 80，我们破平了要不要跟」「Booking 说我们违约」「把官网也砍到一样」。

主动词：**不要砍 Brand.com 对齐 OTA undercut / 先可比 / 修便宜侧。**

不要用：截图不可比 → P36。竞对更低 → P16。会员围栏 → P23。排名 → P35。前台跟 dump → P42。切房 → P58。报促销 → P18。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用 OTA undercut 改 Brand.com。**

---

## 2. 硬门（先不动 Brand.com）

命中任一 → **不要**用 OTA undercut 去改 Brand.com：

1. **产品不可比。** 走 P36。  
2. **会员/预付/打包/切房更低。** 围栏，不是破平。  
3. **有人要砍 Brand.com「对齐」。** **禁止默认。** 先修便宜侧。  
4. **提案是 BAR→399 或一夜 −15%。** **拒绝。**  
5. **Pace Ahead 却以破平为由砍价。** P01 Hold。  
6. **合同罚则未知。** 先问；过程仍修侧；不编中国罚%。  
7. **其实是竞对/排名/前台/切房/促销 →** 移交对应剧本。

为「价平」或「平台说违约」而自动 dump Brand.com **不是** 开门条件。

---

## 3. 默认动作

1. 过可比清单（与 P36 同纪律）。  
2. 真破平：关错促销 / 纠 CM 映射 / 收 OTA 侧公开灵活价。  
3. Brand.com **Hold 779–799 首选 799**（Hypothesis / Simulation）。  
4. 算净：毛对齐若净更差 → P20，不追毛平。  
5. 24h 复核 gap；仍错再升级合同沟通（条款 NV）。  
6. 真弱夜才 P05；理由是该夜 Pace，不是「价平」。

---

## 4. 禁止写法

- 「把官网降到 719 对齐美团」  
- 「先砍到 399 价平再说」  
- 「中国酒店违约金一般 X%」（禁止发明）  
- 「EEA 禁了所以中国也可以随便破平」（管辖误套）  
- 把 Simulation 719/399/799 写成行情 Fact

---

## 交叉（2026-08-27 00:17，不改正文）

为什么 OTA undercut 不是 Brand.com 按钮 → **T-Parity** `theory/rate-parity-integrity.md`。三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com **不改**。过程仍 P59。

> 交叉指针（2026-08-29 10:17，不改正文）：真破平修侧仍本卡/P59。「券后展示当公开尺」走 **P74**。不写 P75。
> 交叉指针（2026-08-29 14:17，不改正文）： 真破平修侧仍本卡/P59。「索赔当公开尺」走 **P75**。不写 P76。
