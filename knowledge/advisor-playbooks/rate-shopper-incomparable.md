# Playbook P36｜比价口径 / Rate Shopper 误读

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/rate-shopper-incomparable.md`  
> BACKLOG：P36 比价口径 / Rate Shopper 误读 · HIGH（本周 timely）· 先诊断枝 · slug `rate-shopper-incomparable`  
> 状态：**drafted**（2026-08-22 22:17 CST）  
> 配套卡：`recommendations/dont-follow-incomparable-shop.md`  
> 理论：`market/comp-set.md` · `pricing/how-much-to-move.md`（幅度数字不改）· `systems/amadeus.md`（RS360 ≠ 优化器）  
> 交叉：P16 不跟 dump **只在可比之后**；P23 是 **我们自己的** 会员 vs 公开，不是隔壁登录价；P35 排名掉了 **不是** 一张比价截图；T19 低于贡献不卖；T20 有品牌底不砸穿  
> 问题树：§13 Price Too High · §1 问 8 · 本轮 §41  
> 仿真：`cases/sim-2026-comp-screenshot-80-cheaper.md`（**Simulation**）  
> 证据等级：A Vendor（Duetto Rate Shops / Amadeus RS360 / SiteMinder Insights / Lighthouse API / Booking Demand API + Genius 页）；HSMAI CUG = A 协会词条；动作 **Hypothesis**；美团/携程「可比价公式」= **非 Fact**  
> Last Verified：2026-08-22  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议怎么读截图 / shopper 数字，**不操作** Rate Shopper、不代爬、不代登录隔壁账号。  
> 禁止：编造美团比价公式、sanctioned vs 爬价行业比例、中国 OTA 含税/含早官方展示 SOP、华住 699、佣金%、点弹性；把登录价当公开 BAR；把套房尾房当标准房；把连住均价当单晚 BAR；一夜 −15%。

---

## 0. 一句话

截图便宜 80，**先问是不是同一口价，再谈跟不跟。**  
会员 / 含早 / App / 只剩套房，都不是让你砍 BAR 的理由。  
真可比且对面在 dump，走 **P16 不跟**；真可比且市场在动，再动我们的围栏或 BAR。

完成定义：能在 P16 开火前判定截图/shopper 是不是 **可比公开 BAR**；不可比 → Hold 我们的 BAR，最多修 **我们自己的** 围栏；不跟假 80。

顾问必须能直接说的三句：

```
1. 截图便宜 80，先问是不是同一口价，再谈跟不跟。
2. 会员/含早/App/只剩套房，都不是让你砍 BAR 的理由。
3. 真可比且对面在 dump，走 P16 不跟；真可比且市场在动，再动我们的围栏或 BAR。
```

独立默认（本库 Hypothesis）：顾问比的是 **未登录、标准/基础房仍可订、房费不含早、税口径一致、单晚灵活 BAR**。对不上其中任一维 → **不可比**，P16 不启动。Booking / Duetto / Lighthouse / RS360 / SiteMinder 公开页只提供 **口径清单**，禁止抄成美团/携程 SOP。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「截图里隔壁便宜 80，要不要跟？」 |
| S2 | 销售/店长甩 OTA App 截图、登录后列表、Shopper 最低价，要求对齐 BAR |
| S3 | 数字差看起来像 ≥8%，但截图上有会员/登录/含早/App/套餐/今夜特价/连住均价/只剩套房 |
| S4 | Shopper 报「最低可订」但用户说那是登录价或移动端才看得到 |

**不是本剧本：**

- 已经确认是 **同一口公开灵活 BAR**、对面连续砸价 → **P16**（本剧只回答「先问可比」）。  
- 我们自己的会员价跟不跟公开 BAR → **P23**。  
- 排名/曝光掉了 → **P35**。截图比价 ≠ 排名。  
- 要不要报今夜特价 → **P18**。  
- 竞对满了要不要涨 → **P15**。  
- OO/OOO 把 Remaining/OCC% 看歪 → **T06**，本轮不写。

---

## 2. 输入（缺截图不停，但不编公式）

```
必须：
1) Stay Date + DTA + Pace / Pickup
2) 我们的公开灵活 BAR（直销未登录 + OTA BAR 层）与房型
3) 截图或 shopper 数字：哪家、哪天、哪个渠道、标了什么字

应用：
4) 截图是否登录 / App / 会员 / Genius
5) 含早 / 套餐 / 税和服务费是否同一口径
6) 对方该日标准房是否还开；是否只剩套房/高档
7) LOS：单晚 vs 连住均价
8) 对方是否 CTA / 关房 / 今夜特价 / 预付不可退

Recommended：
9) 未登录桌面端、同日、同房型、不含早、灵活取消的对方价（用户能补一张最好）
10) 品牌底 / 贡献三数（有则挡 699；无则不发明）
```

缺「未登录对照」**不停**：按截图上已能看见的标签判不可比，输出 Hold。不要说无法判断。

顾问 **不** 去登录隔壁、不操作 shopper、不代爬。

---

## 3. 可比清单（P16 之前必过）

任一维对不上 → **不可比**。不可比 = **不跟**，BAR Hold。

| # | 问 | 可比 | 不可比（典型） |
| --- | --- | --- | --- |
| C1 | **同一 Stay Date？** | 截图日期 = 我们要动的入住日 | 搜了今晚、要对齐下周；或日历点错 |
| C2 | **同一房型且对方该型仍可订？** | 标准/基础对标准/基础 | 标准卖完，露出套房/豪华；Shopper 自动跳下一最低房型（Duetto 公开说明） |
| C3 | **公开 vs 会员/登录/App？** | 未登录桌面公开价 | 会员、登录可见、Genius、App-only、CUG。Duetto：需登录的会员价 **不进** 其 rate shop |
| C4 | **早餐/餐食同一？** | 都不含，或都含且能拆出房费 | 对面含早、我们不含；半餐/套餐把房费摊低 |
| C5 | **税/服务费同一？** | 都含或都不含；SiteMinder  parity 可切 with/without tax | 一边含税含服、一边净房价；城市税后置 |
| C6 | **单晚 vs 连住均价？** | 同一 LOS（默认 LOS=1） | 截图是 2 晚均价；Duetto+Lighthouse 默认单晚，多晚另设 |
| C7 | **灵活 BAR vs 预付/今夜特价/神券？** | 双方灵活可退公开层 | 对面今夜特价、限时、预付 NR、打包。Duetto：最低公开价 **不一定是 BAR** |
| C8 | **对方没被限制挡掉？** | 对方 Open、无 CTA/MinLOS 把搜索挤到别的产品 | 对方 CTA/MinLOS，露出的是能搜到的别的价，不是他们的 BAR |

**80 元先换 %，但先过本表。** 799 vs 719 = −10%，看起来过了 8% 噪声带——若 C3/C4 不成立，这个 10% **不是** P16 的价差。

中国四平台没有打开的「可比价官方公式」→ 清单是 **Hypothesis 诊断**，机制来自已打开的 Booking/Duetto/Lighthouse/SiteMinder/RS360 页。**禁止**写成美团公式。

---

## 4. 诊断枝（禁止「适当跟一点」）

```
截图 / shopper 显示隔壁更便宜
│
├─ 可比清单有一对不上？
│     是 → 不可比。不跟。Hold 我们的公开 BAR。
│          可选：只检查我们自己的围栏有没有倒挂（P23 / P34），
│          不要用隔壁登录价当锚去砍 BAR。
│
├─ 可比，且对方像一轮 dump（−15%+ / 清仓 / 即将停业）？
│     → P16：不跟自杀价。Pace 不差更不跟。
│
├─ 可比，且 ≥2 家 Primary 同向真动公开 BAR，我们 Pace Behind + 价明显高于带？
│     → 不是「跟到 719」。走 how-much-to-move：先围栏 −3–5%；
│        BAR 若动，−5–10%，不下穿战前可比带。禁一夜 −15%。
│
└─ 可比，但我们 Pace On/Ahead、Pickup 未塌、价差其实 <8%？
      → P16 ignore-comp-undercut：不跟。
```

**P16 只在可比之后。** 不可比时不要进入「跟不跟 dump」争论。

---

## 5. 动作（必须落到 Stay Date / 价）

### 5.1 不可比（本剧主枝）

```text
Stay Date:
Shopped / 截图价:     <719 一类>
标签:                 会员 / 含早 / App / 套房 / 连住均价 / 今夜特价 / …
可比？                否（写出哪几条 C）
Decision:             不跟
Public BAR:           Hold。区间 + 首选（常见：现行 ±0，或心理带 −0–2.5%）
Fence:                默认不开。不要为假 80 新开 −3–5%
Our fences:           若我们会员/App 已经倒挂或过深 → 走 P23 收口，不是再砍 BAR
Do-not-do:
  - 把 BAR 砍到截图价或 699
  - 一夜 −15%
  - 用登录价当公开 BAR
  - 编美团公式 / 佣金% / 华住 699
```

首选通常 = **现行公开 BAR**。用户坚持「给个带」→ 下限是心理微调（例 799→779），**不是** 对齐 719。

### 5.2 可比之后（移交，不在本剧重写）

| 局面 | 移交 |
| --- | --- |
| 对面 dump、我们 Pace 不差 | **P16** 不跟 |
| 市场真在动、我们贵且 Behind | 围栏 −3–5%；再评 BAR −5–10%。`how-much-to-move.md` |
| 价已最高 / 有声明品牌底 | 只关不涨；围栏不穿底（T20） |
| 穿贡献 | T19 关该层，不跟 |

### 5.3 Advisor-First

建议用户：**未登录、桌面、同日、同房型、不含早、灵活取消** 再截一张。顾问不代登录、不操作 RS360 / Insights / Lighthouse。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补了未登录对照，价差消失 | 维持 Hold；记录「假 80」 |
| 用户补了未登录对照，公开 BAR 仍低 ≥8% 且 Pace Behind、市场不冰 | 离开本卡，评 P16 / 围栏，仍禁一夜 −15%、仍不跟到对方价 |
| 24h 我们 Pickup 未塌 | 更不跟 |
| 发现只是套房尾房 | 不可比；评我们对应房型差（P34），不砍标准 BAR |
| 品牌底 / 贡献已知且 699 会穿 | 拒绝 699 |
| 截图其实是排名页不是价 | 转 P35 |

300 间尺：不因假 80 发明新幅度。

---

## 7. 如果只能再补 3 个

1. **未登录桌面**、同 Stay Date、同基础房、不含早、灵活取消的对方价（翻转不可比 vs P16）  
2. 我们自己的公开 BAR vs 会员/App（防砍错层）  
3. 该日 Pace / Pickup（可比之后才用）

翻转：对照后真是公开 BAR dump → P16；对照后市场集体下移且我们 Behind → 围栏不是跟到 719。

---

## 8. Confidence / 边界

截图上已能读出会员/含早/App/套房：**不可比方向 Medium**。  
缺对照仍给 Hold，不升到 High。  
美团/携程字段名、含税默认、会员门槛 = **Unknown / NV**。  
RS360「95% sanctioned」是 **Amadeus 产品句**，不是行业爬价比例，不写进启发式。  
不操作系统、不代 shop。

仿真：`cases/sim-2026-comp-screenshot-80-cheaper.md`（**Simulation**，不是真店）。

---

## 9. 证据（2026-08-22 打开）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 不准的 shop 数据会导致无效定价；RS360 自称 95% sanctioned、对照 site scraped | A Vendor | **Known 机制（仅 Amadeus 产品页）** | https://www.amadeus-hospitality.com/solutions/business-intelligence/revenuestrategy360/ 2026-08-22 打开。**不是**行业爬价比例 |
| Shopper 常给「该渠道单晚最低公开价」，**不一定是 BAR**；可含划线折/OTA 促销/NR | A Vendor | **Known，仅 Duetto 摄入口径** | https://duetto.my.site.com/resourcehub/s/article/Duetto-s-Rate-Shop-Offerings 打开 |
| 基础房卖完会改推下一最低房型 | A Vendor | **Known，仅 Duetto** | 同上 |
| **需登录的会员价不进** Duetto rate shop | A Vendor | **Known，仅 Duetto** | 同上 |
| 满房不产生 shop；多晚 LOS 不是 Lighthouse 默认 | A Vendor | **Known** | 同上 |
| SiteMinder：like-for-like 房型比较；parity 可按 rate type / 间夜 / 人数 / **含税或不含税** | A Vendor | **Known 产品能力** | https://www.siteminder.com/hotel-business-intelligence/ 打开；https://discover.siteminder.com/insights_how_to_run_reports-mar-en/ 打开 |
| SiteMinder：shop 是信号，不应必然决定策略；可避免无谓价格战 | A Vendor / B | 宣传句，动作用 Hypothesis | https://www.siteminder.com/r/hotel-rate-shopping/ curl 打开，Last updated 16/09/2024 |
| Lighthouse 必须分 LOS、餐食、房型、Best Flex vs 最低、VAT/城市税/其他税 | A Vendor | **Known 字段** | https://devapi.mylighthouse.com/ 打开（v3.1，Last Update 12 Feb 2026）：`los` 默认 1；`mealType` 含早=1 / 仅房=5；`vatIncl` `cityTaxIncl` `otherTaxesIncl`；`rates.soldout` `rates.restrictionlos2` |
| Lighthouse Parity Insight 可分 **公开 vs 会员**、**desktop / mobile web / mobile app** | A Vendor | **Known 参数** | 同上 `base_membership_type` 0/1；`platform` 0/1/2（2026-02-06 / 2025-12-19 changelog） |
| 登录可见折扣 / 移动端折扣不得展示给未登录或非移动用户 | A Vendor | **Known，仅 Booking Demand API** | https://developers.booking.com/demand/docs/accommodations/display-discounts 打开：`logged_in_deals` CUG；`mobile_rate` 仅移动 |
| 展示价 `book` vs 应付 `total`；有的国家含税含费、有的拆出 | A Vendor | **Known 机制，仅 Booking API** | https://developers.booking.com/demand/docs/accommodations/prices-accommodations 打开 |
| Genius 需注册/登录；折扣作用在税前价；L2+ 可选含早 | A Vendor | **Known 消费/商家页** | https://www.booking.com/genius.en-gb.html 打开；https://partner.booking.com/en-gb/solutions/genius_programme 打开。30%/45% 商家成效数字 **不进** 启发式 |
| CUG = 会员/协会/老客等封闭人群专属价 | A 协会 | **Known 定义** | https://academy.hsmai.org/glossary/closed-user-groups-cug/ 打开 |
| 餐食不同则同一间房价不可比 | B | 行业说明 | https://www.altexsoft.com/blog/hotel-rate-shopping/ 2022-04-08 打开 |
| 移动端专价 ≠ 桌面公开 BAR | A Vendor | **Known 产品** | Lighthouse 文转载 https://www.hotelnewsresource.com/article141283.html 2026-05 打开。Booking 移动价最低 10% **仅 Booking**，不是美团门槛 |
| 美团/携程官方「可比 BAR」公式 | — | **未找到** → NV | 不编 |
| sanctioned vs 爬价行业占比 | — | **NV**（除 RS360 自称 95%） | 不编 |
| 中国 OTA 含早/含税默认展示 SOP | — | **NV** | 用清单问用户，不猜默认 |

Failed / 未打开（记搜索词，不编页）：

```
IDeaS blog rate shopping apples to apples member vs public
HospitalityNet OTA Insight Compare Module 2019（Cloudflare）
hoteltechreport.com lighthouse-rate-insight（timeout）
美团酒店 比价 口径 含早 含税 会员 官方
携程 eBooking 价格竞争力 可比价 字段 官方说明（本轮未当作打开项）
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 22:17 CST | drafted。BACKLOG P36。P16 之前先过可比清单。不可比不跟。不编美团公式。 |

## 11. 交叉（2026-08-26 14:17，不改可比清单）

月报 STAR / MPI·ARI·RGI 走 **P57**，不是一张今夜 shop 截图。本剧仍只管口价是否同一口径。

## 12. 交叉（2026-08-26 22:17，不改可比清单）

可比公开灵活价下本店 OTA < Brand.com 的过程走 **P59**，不是本剧重写。本剧仍只管「先问是不是同一口价」。不可比仍不要喊破平。


## 13. 交叉（2026-08-27 00:17，不改可比清单）

可比公开灵活价下本店 OTA < Brand.com 的**为什么**走 **T-Parity** `theory/rate-parity-integrity.md`；过程仍 P59。本剧仍只管「先问是不是同一口价」。不可比仍不要喊破平。


## 14. 交叉（2026-08-27 02:17，不改可比清单）

截图对不上若其实是 **CM 把标准房推成了错码**，走 **P60**，不是本剧重写。本剧仍只管「先问是不是同一口价」。不可比仍不要喊破平；错价也不要当市价。

> 交叉指针（2026-08-28 10:17，不改正文）：开业店常不可比，口径仍本剧；「开业了所以跟」过程走 **P68**。不写 P69。

> 交叉指针（2026-08-28 14:17，不改正文）：竞对含早截图仍本剧；「我们自己的含早/套餐是不是 BAR / 含早所以砍房费」过程走 **P69**。不写 P70。

> 交叉指针（2026-08-28 16:17，不改正文）：Diagnose 走 **T-Package** `theory/package-vs-ep-bar.md`；过程仍 **P69**。不写 P70。

> 交叉指针（2026-08-29 10:17，不改正文）：不可比截图仍本剧；「券后价就是市场价 / BAR 跟到券后」过程走 **P74**。不写 P75。
> 交叉指针（2026-08-29 14:17，不改正文）： 不可比截图仍本剧；「贵就赔所以砍公开 BAR / 索赔价就是新尺」过程走 **P75**。不写 P76。

> 交叉指针（2026-08-29 16:17，不改正文）：不可比截图仍本剧。索赔改尺理论走 **T-BRG**；过程仍 **P75**。不写 P76。

> 交叉指针（2026-08-30 06:17，不改正文）：竞对比价税/费口径仍本剧；「本店 all-in/Resort Fee/强制服务费写成公开 BAR / 含税总价贵所以砍 BAR」过程走 **P79**。交叉 P79 resort-fee/all-in ≠ 竞对比价口径。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。
> 交叉指针（2026-08-30 18:17，不改正文）：竞对含停/税/费可比仍本剧 **P36**；因停车/valet/车库改写公开 BAR → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。

> 交叉指针（2026-09-02 08:17，不改正文）：竞对税/费可比仍本剧 **P36**；本店含税展示/CITY_TAX 改尺 Diagnose 走 **T-Tax**，过程仍 **P79**。不规定 P88。
