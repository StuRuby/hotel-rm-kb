# Playbook P42｜Same-day Walk-in / 前台散客 vs OTA 今夜特价

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/same-day-walk-in.md`  
> BACKLOG：P42 Same-day walk-in / 前台散客 vs OTA 今夜特价 · HIGH（T04/T11 本周 timely）· 先决策卡 · slug **same-day-walk-in**  
> 状态：**drafted**（2026-08-23 22:17 CST）  
> 配套卡：`recommendations/dont-match-ota-dump-at-desk.md`  
> 理论：`channel/net-contribution.md`（P20）· `theory/profit-contribution.md`（T19）· `pricing/how-much-to-move.md`（幅度数字不改）  
> 交叉：P05 渠道 last-minute ≠ 前台口价 · P20 按净 · P23 会员 ≠ walk-in · P25 mix 配额 ≠ 一张上门单 · P16 跟的是竞对不是自己的 OTA dump · P18 报名闸 · T19 贡献 · T20 品牌底  
> 问题树：§12 Channel · 本轮「前台跟 OTA 今夜价」短枝  
> 仿真：`cases/sim-2026-walkin-vs-ota-399.md`（**Simulation**）  
> 证据等级：A（HSMAI Academy BAR）；B（HSMAI Americas CDO 圆桌 walk-in 仍在；Altexsoft Rack/walk-in 术语）；A Vendor / B 实践（HotelTechUpdate 2026-07-31 晚间策略：前台即兴砍 walk-in 会训练等待）；C Vendor（RoomMaster：满房近全价、不要默认折 — 不把其表格当本库幅度）；中国前台折扣表 / 美团今夜特价 SOP = **NV**  
> Last Verified：2026-08-23  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议前台当晚口价带 / 是否跟 OTA dump / 是否另开当天围栏。**不操作** PMS / Channel Manager / OTA 后台 / 前台收银。  
> 禁止：编中国前台折扣表；编美团/携程今夜特价 SOP；把 Guestivo BAR+10–25% 或 Prostay 20–40% 抄进启发式；佣金%；华住 699；一夜 −15%；点弹性；把 399 写成新公开 BAR；无成本说 399 总比空着强。

---

## 0. 一句话

今晚 walk-in 不是自动跟 OTA 今夜价。前台零佣金，默认 BAR 或更高。  
真弱才给前台一个当天围栏，还要盖住 OTA 净价和贡献，不把 399 写成新 BAR。  
高峰有人上门更不该打折，他们已经到店了。

完成定义：一张「上门散客 → 报 BAR/更高 / 当天围栏 / 不跟 dump」过程。P05 管 **渠道** last-minute（72/24/6h 战术产品）；本剧接管 **前台口价** 这道零佣金围栏。两道可以同时存在，禁止叠成同一个 399 BAR。

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 高峰 / Ahead / 未冰** | 「OTA 今夜 399，客人站在前台，跟不跟？」 | 上门需求紧急、零佣金；399 是渠道倾倒 | **报 BAR 或更高**（Hypothesis 779–799 首选 799）。不跟 399。不改公开 BAR |
| **B 真弱 / 市场冰** | 「今晚很空，前台不打折卖不掉」 | 过完 P05 排除仍空 | **可选当天前台围栏**，净价仍 > OTA dump 净价，且过 T19。仿真尺 699–719。**不是** 399，**不是** 新 BAR |
| **C 要把 399 写成明天 BAR** | 「今晚就这个价了，公开也改掉」 | 一夜永久 −50% 当新 BAR | **拒绝。** 禁一夜 −15% 当永久 BAR |
| **D 叠两道围栏** | P05 刚开 OTA 399，前台再报 399 | 零佣金渠道去对齐高佣金倾倒 | **禁止。** 前台默认更高；OTA 围栏保持有截止日期/配额 |
| **E 其实是会员 / mix / 钟点** | 「会员也要 399」「钟点占了晚房」 | 走错剧本 | 会员 → **P23**。Mix 配额 → **P25**。钟点/day-use → 本剧不主答（scout MEDIUM） |

顾问必须能直接说的三句：

```
1. 今晚 walk-in 不是自动跟 OTA 今夜价，前台零佣金，默认 BAR 或更高。
2. 真弱才给前台一个当天围栏，还要盖住 OTA 净价和贡献，不把 399 写成新 BAR。
3. 高峰有人上门更不该打折，他们已经到店了。
```

独立默认（本库 Hypothesis）：Walk-in 是 **Direct / 零佣金**（P20 结构：店内 CAC ≠ 0 但无 OTA 佣金）。高峰/Ahead/未冰 → 口价 = 当日公开 BAR，或 Rack 若用户仍区分 Rack>BAR。弱日围栏是 **当天、前台、有截止**，不是新公开 BAR。P05 可以开同日 OTA 战术围栏；前台不跟那个 dump。

HSMAI Academy（A）：BAR = 无资格、公开可订的基准，折扣/套餐围着它转。把 OTA dump 写成 BAR，等于把资格价变成基准。  
Altexsoft（B）：传统 Rack 有时称 walk-in rate，是无折扣公开价；客人「只在最不幸时」才付满 Rack——那是描述，不是「所以前台必须折」。  
HotelTechUpdate 2026-07-31（Vendor B）：晚间常被即兴处理——前台悄悄砍 walk-in，或经理临时往渠道丢折扣。做不好会训练客人等待、蚕食高价值需求。晚间是 **另一套需求情景**，不是白天价的打折版。内部地板清过边际成本+合理贡献；低于地板，空房往往是更好的生意。  
RoomMaster（C Vendor）：walk-in 价应按当日需求和剩余库存，**不要每次默认折**；接近满房报接近全价。其「中等报网上价 / 低 occ 小折」表 **不进本库幅度**。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| W1 | 「前台问今晚 walk-in 打几折」 |
| W2 | 「OTA 今夜 399，前台要不要跟？」 |
| W3 | 客人无预约站在前台，拿出手机比 OTA 今夜价 |
| W4 | 销售/店长要把当晚 BAR 改成 OTA dump 价，方便前台好卖 |
| W5 | P05 刚开了同日 OTA 战术围栏，前台要求对齐 |

**不是本剧本：**

- DTA≤3 渠道要不要 dump、报不报今夜特价 → **P05** / **P18**。本剧在已经看见 OTA 价之后，管 **前台**。  
- 会员价跟不跟 BAR → **P23**。Walk-in 默认不是会员围栏（除非出示会籍，再按用户规则）。  
- OTA 占比升了关不关渠道 → **P25**。一张上门单 ≠ mix 战略。  
- 竞对截图便宜 80 → **P36** 先问是否同一口价，再 **P16**。  
- 排名掉了所以报今夜特价 → **P35** 诊断，报名仍 P18。  
- 要赶客 / Walk 成本 → **P24**。Walk-in ≠ walked guest（RoomMaster 已分；本库 Walk 金额 NV）。  
- 钟点/day-use 占晚房 → scout MEDIUM，本轮不写专剧；若用户只问钟点，条件化：钟点不得按过夜 BAR 的一半去占当晚可售过夜库存（Hypothesis，无中国价表）。

---

## 2. 输入（缺佣金不停，但不编 %）

```
必须：
1) Stay Date = 今晚（DTA=0）或「已经在前台」
2) 当日公开 BAR（直销 + OTA BAR 层）
3) OTA 今夜可见最低价（dump / 神券 / BAR 层要分开）
4) Remaining 可售（P37：不是维修/锁）
5) 该日 Pace / 今日 Pickup / 市场是否冰

应用：
6) 用户合同佣金或「未知」（未知则只比结构：walk-in 无 OTA 佣金）
7) 变动成本三件（布草/早/能耗）— 缺则 T19 不说 399 总比空着强
8) 品牌底（有则挡；无则不发明 699）
9) 前台现行授权：能否低于 BAR、最低到哪、是否必须经理批

Recommended：
10) 竞对当晚可订公开价（不是 dump 层）
11) 今晚已接 walk-in 几张、报的什么价
12) P05 是否已开 OTA 战术围栏（配额/截止）
```

缺佣金 **不停**：结构句「walk-in 净 ≈ 口价 − 支付费；OTA 399 净 = 399 − 佣金 − 店出券」。禁止填行业平均佣金%。  
缺成本 **不停**：禁止「399 总比空着强」。已知 399 相对 BAR 已深，可作弱结论拒跟。  
顾问 **不** 登录 PMS、不改 OTA、不替前台收款。

---

## 3. 分叉闸（跟 OTA / 改 BAR 前必过）

```
0  今晚？不是今晚 → 离开本剧。未来日走 P01/P02/P05。
1  Remaining 是可售吗？（P37）
     维修/锁 → 不是 dump 燃料，也不是 walk-in 燃料。
2  该日是 Peak / Ahead / Pickup 仍在 / 竞对未冰？
     是 → 形 A。前台 BAR 或更高。不跟 OTA dump。
     否，且过完 P05 排除仍空、市场冰 → 形 B。可给当天前台围栏。
3  有人要把公开 BAR 改成 399 / 一夜 −15%+？
     → 形 C。拒绝。
4  P05 已开 OTA 399 围栏，前台要对齐？
     → 形 D。禁止对齐。前台零佣金应更高。
5  其实是会员码 / mix / 钟点？
     → 形 E。移交。
6  拟议前台价的净价 ≤ OTA dump 净价，或穿 T19？
     → 拒绝该价。弱日围栏也要盖住净价和贡献。
```

**禁止跳到「OTA 都 399 了前台必须 399」。** 客人已经到店；前台没有佣金；399 是另一条资格/渠道的倾倒价。

HotelTechUpdate（Vendor B）：晚间问题不是「砍多少」，是「这间今晚真正的边际价值是谁还在买」。位移风险：晚折可能接到本来会付全价的人，或挤掉更高价值 walk-in。侵蚀风险：可见、可预期的晚折训练市场推迟预订。

---

## 4. 诊断枝（禁止「前台跟 399」）

```
用户说今晚 walk-in 打几折 / OTA 399 前台跟不跟
│
├─ 0. 今晚可售 Remaining？
│     假剩余 → P37。不停本剧口价，但不拿维修房当空房理由
│
├─ 1. 需求是否未冰？（主翻转）
│     Peak / Ahead / 今日 Pickup>0 / 竞对未全砸 / 有人上门
│           → 形 A。Hold 公开 BAR。前台报 BAR 或更高。
│     真弱：OTB 空、Pickup 死、市场冰、P05 排除做完
│           → 形 B。当天前台围栏。净 > OTA dump 净；过 T19。
│           口价尺（Hypothesis，Simulation 用）：699–719。不是 399。
│     未知
│           → 当未冰处理（形 A）。缺数不默认折。写 IF 真冰 THEN 围栏
│
├─ 2. 要把 399 写成新 BAR / 一夜 −15%？
│     是 → 形 C。拒绝。BAR 次日恢复。围栏有截止日期。
│
├─ 3. 前台对齐 P05 的 OTA dump？
│     是 → 形 D。OTA 围栏保持配额+截止；前台不跟。
│
└─ 4. 会员 / 钟点 / mix？
      出示会籍 → P23
      要改渠道 mix → P25
      只要钟点 → 不把过夜库存按 dump 卖；本轮无钟点专剧

Naive（禁止）
      「OTA 399 前台必须 399，不然客人走」
      「上门的都是捡漏，不折不进」
      「399 总比空着强」（无成本 / 未过净价闸）
      把 dump 写成明天日历 BAR
      一夜 −15% 当永久 BAR
      编中国前台八折表
      编美团今夜特价必须跟
```

**399 对齐不是开门条件。** T20 无地板不发明 699 当品牌底；699–719 只在形 B Simulation / Hypothesis 围栏。T19 无变动成本不说空着更差——形 A 的「空」常常不是真冰。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉今晚 Stay Date。不是今晚 → 离开。
2. Remaining := 可售（P37）。假空不折。
3. 读公开 BAR vs OTA 今夜最低。分开 BAR 层 / dump / 神券。
4. 问需求是否未冰：Pace、今日 Pickup、竞对公开价、是否已有人上门。
5. 分叉 A 报 BAR / B 当天围栏 / C 拒改 BAR / D 拒对齐 dump / E 移交。
6. 净价：walk-in 口价 vs OTA dump 净（佣金未知则结构比）。前台不得 ≤ dump 净。
7. 贡献：有三成本则过 T19。穿底不卖。无成本不说总比空着强。
8. 形 B 围栏：当天、前台、经理授权、午夜失效；公开 BAR 不动。
9. 幅度：形 A Hold（779–799 首选 799 Hypothesis）。形 B 699–719，且 > dump 净。禁一夜 −15% 当新 BAR。399 相对 799 是 −50%，不是围栏是倾倒。
10. 输出：前台口价区间+首选 + 公开 BAR 动不动 + OTA 围栏是否另开（回 P05）+ Trigger。
    不输出中国前台折扣表。无 Pace 声明 Hypothesis / 偏 A。
```

### 5.1 动作表

```text
Stay Date:            今晚（DTA=0）
Demand:               未冰 | 冰 | 未知（未知当未冰）
Public BAR:           Hold；不改成 dump
Front-desk quote:     形 A → BAR 或更高（区间+首选）
                      形 B → 当天围栏 高于 OTA 净 且过 T19
OTA dump 399:         渠道战术（P05/P18）。前台不跟
Fence:                前台围栏 ≠ 公开 BAR ≠ OTA 促销码
Expiry:               形 B 围栏今夜失效；次日 BAR 恢复
Do-not-do:
  - 前台跟 399
  - 399 写成新 BAR
  - 一夜 −15% 当永久 BAR
  - 无成本说 399 总比空着强
  - 编佣金% / 前台八折表 / 美团今夜 SOP
  - 顾问代录入 PMS
Trigger: 见 §6
```

无 RMS 时的最小手算（Hypothesis，不是厂商算法）：

```
WalkIn_gross     = 前台口价
WalkIn_net       = WalkIn_gross − 支付费（若知；不知则 ≈ gross）
OTA_dump_gross   = 399（或用户给的今夜价）
OTA_dump_net     = 399 − Commission − 店出券 − 投放（缺则声明「高估了 OTA 净」）
Rule             = WalkIn_net > OTA_dump_net
                   WalkIn_net > Variable_cost（用户给了才比）
                   形 A: WalkIn_gross ≥ 当日 BAR
                   形 B: WalkIn_gross 仍明显高于 dump，且不是新 BAR
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **别为上门去跟 OTA dump**。

| 判定 | 前台口价 | 公开 BAR / OTA |
| --- | --- | --- |
| 形 A 未冰 | **Hold** 779–799 首选 799。可报 Rack（若用户 Rack>BAR）。可加早餐/延迟退房 **不加价也可以，不要先砍价** | BAR 不动。OTA dump 走 P05：未冰默认 **不开** |
| 形 B 真冰 | 当天围栏 **699–719** 首选 719。净须 > dump 净。不是 399 | BAR 次日恢复。OTA 若 P05 已开，前台仍高于该 dump |
| 形 C 改 BAR | **拒绝 399 / 拒绝一夜 −15%** | 公开层不动 |
| 形 D 对齐 dump | 前台 **不跟** | OTA 围栏保持配额+截止 |
| 价已最高 | 前台可 = BAR；不因上门再涨跳档（除非 Peak+剩最后几间 — HotelTechUpdate：最后几间常应涨不是降。幅度仍 how-much，不跳最高） | 只关低价不涨也可以 |
| 市场冰但价已最低公开 | 认栽空房优先于跟 399（T19） | P05 认栽枝 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
Guestivo「BAR+10–25%」/ Prostay「20–40% off」= **不进本库幅度**。  
399 只在 Simulation 当 dump 点，不是行情。

### 5.3 Advisor-First

建议用户：今晚可售剩余、公开 BAR、OTA 今夜截图（BAR 层还是 dump）、今日 Pickup、前台授权下限、佣金/成本若有。顾问不登录 PMS、不代改 OTA、不替前台报价系统点确认。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 上门被拒后 1h 内 Pickup 仍正 / 又来一批 walk-in | 守形 A。不因「刚才走了一个」改 399 |
| 形 B 围栏放出后仍 0 且市场空 | **停**，认栽，不第三刀到 399 |
| 竞对当晚公开满 | 停围栏，评回 BAR；前台可 ≥ BAR |
| 发现 P05 dump 净价其实已 ≥ 前台拟议价 | 收回前台围栏，回到 BAR |
| 取消突然升 / 超售风险 | 停接 walk-in 低价；P24 方向，不给 Walk 金额 |
| 销售仍要公开 BAR→399 | **拒绝。** T19/T20；禁一夜 −15% |
| 用户补佣金/三成本 | 重算净与贡献，只改该晚围栏，不改形 A 默认 |

---

## 7. 如果只能再补 3 个

1. **今晚可售 Remaining + 今日 Pickup + 公开 BAR** — 翻转形 A vs 形 B；缺则当未冰，不默认折  
2. **OTA 今夜价是 BAR 层还是 dump/神券** — 翻转「跟」的对象；dump 默认不跟  
3. **佣金或三成本（有一个就算净/贡献）** — 翻转「399 总比空着强」；缺则结构比 + 拒跟 dump

缺 1：Confidence Low，口价仍 Hold BAR，不设形 B。  
缺 2：把「今夜 399」当 dump 处理，不跟。  
缺 3：拒绝前台 399；形 B 仍给 699–719 结构（高于 dump 毛价已够弱结论）。

---

## 8. Confidence / 边界

Pace 齐 + 能分 BAR vs dump：方向 **Medium**；点价永远 Hypothesis。  
缺 Pace：Low，只写 IF，默认不折。  
HSMAI BAR 定义 = **A**。Altexsoft Rack/walk-in 术语 = **B**。HotelTechUpdate 晚间策略 = **Vendor B**（方向：不要即兴砍 walk-in；内部地板；空房可优于毁价）。RoomMaster 满房近全价 = **C** 实践方向，其 occ 表不进幅度。  
Cornell CHR *Why Discounting Doesn't Work*（Enz / Canina / Lomanno）：本轮 PDF **fetch 失败**，WebSearch 命中摘要方向（相对竞对打折抬 OCC 不抬 RevPAR）→ 标 **B 检索摘要**，不摘教材正文。  
中国前台折扣表、美团/携程今夜特价必须跟的官方 SOP：**NV**。无截图不发明。  
佣金%、变动成本金额、Walk 成本：**NV**，用户给才算。

仿真：`cases/sim-2026-walkin-vs-ota-399.md`（**Simulation**，不是真店）。主枝 **前台 Hold 779–799 首选 799**；拒绝 399；拒绝把 399 当新 BAR。形 B 反事实 699–719，仍 > 399 OTA。

---

## 9. 证据（2026-08-23 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| BAR = 无资格、公开可订基准；折扣/套餐围着它转。BAR 取代静态 Rack | A | **Known 定义** | HSMAI Academy Glossary *Best Available Rate* https://academy.hsmai.org/glossary/best-available-rate/ （本轮打开，页注 2025-12-30） |
| 传统 Rack 有时称 walk-in rate，是无折扣标准价；Last-minute 应选择性、有限，否则客人学会等 | B | **Known 术语+方向** | Altexsoft *Rack Rates, Wholesale Rates, BAR* https://www.altexsoft.com/blog/hotel-rates/ （打开，页注 2026-04-15） |
| 晚间常被即兴砍 walk-in 或往渠道丢折扣；应视为单独需求情景；内部地板；位移/侵蚀风险；空房有时优于毁价 | B Vendor | **Known 方向；金额不抄** | HotelTechUpdate *After 6pm: Building a Last-Minute Rate Strategy…* https://www.hoteltechupdate.com/guides/after-6pm-building-a-last-minute-rate-strategy-to-fill-unsold-rooms （打开，页注 2026-07-31） |
| Walk-in = 无预约到店；价应按当日需求，不要每次默认折；近满报近全价 | C Vendor | **方向可用；表格不进启发式** | RoomMaster *Walk-In Guest* https://www.roommaster.com/blog/walk-in-guest （打开，页注 2026-08-10） |
| 疫情后部分目的地 walk-in 回流；CDOs 仍在抓上门/路边需求 | B | **Known 存在，非价表** | HSMAI Americas *Shifting Demand from OTAs…* https://americas.hsmai.org/insight/shifting-demand-from-otas-and-other-priorities-for-hotel-cdos/ （打开；2020 圆桌，不当 2026 价） |
| 相对竞对打折抬 OCC 不抬 RevPAR | B 检索摘要 | **方向；正文未打开** | Cornell CHR Enz/Canina/Lomanno *Why Discounting Doesn't Work* https://scholarship.sha.cornell.edu/chrpubs/13 — 本轮 PDF fetch 失败，不摘 |
| 中国前台必须几折 / 美团今夜特价 SOP | — | **NV。不编。** | 禁止编造 |
| Walk-in 必须 BAR+10–25% 或必须 20–40% off | — | **非 Fact** | Guestivo / Prostay 单源，不进启发式 |
| 「上门必须打折」官方定律 | — | **未找到** → 本库形 A 不折 = Hypothesis | — |

Failed / 未当成核页：

```
scholarship.sha.cornell.edu/chrpubs/13     → PDF/HTML fetch 失败（错误页）
mews.com/en/blog/transient-business        → fetch 超时
Guestivo walk-in 价「BAR+10–25%」          → C/D 不进启发式
Prostay last-minute/walk-in 20–40% off     → C 不进启发式
美团/携程「今夜特价」商家学院 SOP            → 未找到 → NV
中国前台折扣授权表                          → 未找到 → NV
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 22:17 CST | drafted。BACKLOG P42。分叉 A 未冰报 BAR / B 真弱当天围栏盖住净价 / C 拒改 BAR / D 拒对齐 dump / E 移交。配套 `dont-match-ota-dump-at-desk.md`。不编前台折扣表。 |

---

## 11. 交叉（不改 P01–P41 正文；P05 仅文末一行）

- **P05**：渠道 72/24/6h。6h「走房/散客还可能来」是要不要 **OTA dump** 的测试，不是前台口价。本剧接管前台。  
- **P20**：walk-in 进 Direct。无佣金 ≠ 成本为 0（支付/激励仍可能）。缺 % 只比结构。  
- **P23**：出示会籍才走会员围栏。无预约上门默认公开 BAR，不是会员八折。  
- **P25**：mix 战略。一张 walk-in 单不改渠道配额。  
- **P16**：跟竞对自杀价 ≠ 跟 **自己的** OTA 今夜 dump。  
- **P18**：报不报今夜特价。报了也不等于前台对齐。  
- **P37**：假剩余不是前台打折理由。  
- **T19**：399 穿贡献 → 宁可不卖。无三成本不说总比空着强。  
- **T20**：有声明底不砸穿。无地板不发明 699 当品牌底；699–719 只是形 B 围栏 Hypothesis。  
- **how-much-to-move**：围栏 −3–5% / 档 H 短窗 −10–15%；**不一夜 −15%+ 当永久 BAR**。399 vs 799 是 −50%，不是档 H。


## 12. 交叉（2026-08-24 00:17，不改口价表）

**上门成交 = 捕获需求，不是拒单。** 高峰有人站在前台更不该打折（本剧形 A）。「赶过人但没记下、也没成交」= 口头故事，涨 BAR 走 [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md)，不走本剧跟 dump。Walked guest（P24）≠ walk-in ≠ denial。钟点房仍空。

剧本见 P43 `verbal-denials.md`（2026-08-24 02:17）：已成交 walk-in 是捕获不是拒单；没成交又没记仍不是涨价证据。

## 13. 交叉（2026-08-24 06:17，不改口价表）

钟点房 ≠ 过夜 walk-in ≠ OTA 今夜过夜特价。本剧管前台 **过夜** 口价。白天小时会不会占晚房 → **P44** `day-use-hourly.md`。钟点客不是过夜上门；高峰有过夜上门仍走本剧报 BAR。形 E 钟点移交本句落地。

## 14. 交叉（2026-08-24 14:17，不改口价表）

walk-in 是 **干净空房**。脏的提前退房房在 HK 转房前不是前台库存。早离回库先走 **P46** `early-departure-stayover.md`；转完的干净房才回本剧报 BAR，不跟 ED dump 价。

P55 last-line（2026-08-26 06:17 CST）：担保/非担保与到点释放走 `guarantee-type.md`；放房前不提前 dump，放房后按真 remaining + Pace。

## 15. 交叉（2026-08-26 22:17，不改口价表）

前台跟 OTA dump 仍本剧。**改 Brand.com 公开栏去对齐 OTA undercut** 走 **P59**，不是前台口价问题。


## 16. 交叉（2026-08-27 02:17，不改口价表）

前台拿着的 399 若是 **本店 CM 错推 / 错映射**，更不能跟 → **P60** 停错码；口价纪律仍本剧。不要把错误价写成新 BAR。


## 17. 交叉（2026-08-27 06:17，不改口价表）

前台**升房加价**（标准客升套房收差价）走 **P61**，不是 walk-in 跟 OTA dump。本剧仍管上门口价 vs 今夜倾倒。不要把套房公开砸到 399「反正空着」——那是 P61/P05，不是本剧跟价许可证。

> 交叉指针（2026-08-28 06:17，不改正文）：同日延退/早到过程走 **P67** `late-checkout-early-checkin`；本剧边界不变。
> 交叉指针（2026-08-29 14:17，不改正文）： 前台未订上门不跟 dump 仍本剧；已订直销单的正式最低价保证索赔过程走 **P75**。不写 P76。

> 交叉指针（2026-08-29 16:17，不改正文）：前台 walk-in 仍本剧。已订直销单索赔改尺理论走 **T-BRG**；过程仍 **P75**。不写 P76。

> 交叉指针（2026-09-04 00:17 T04-00，不改正文）：同日 **release time / late booking until**（当天几点开/停售）Diagnose 走 **T-Window** `theory/booking-window-vs-bar.md`；过程仍 **P42**（未冰报公开 BAR 或更高，不跟 dump）+ **P33**（误挡先松窗口）。Hold 779–799 首选 799；拒 399；§132。不开 P88。不开 P89。

> 指针（2026-09-15 14:17 S15-14，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio scout-only；§169 新开换房·折扣字段·Open Folio 族。Diagnose handoff **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 指针（2026-09-15 16:17 T15-16，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio deepen **已 skip**。§169 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49**/P45 · **P87** / **P42** · **P69**/P87）；Hold 779–799 首选 799；拒 399；不发明 699。换房作业 / 折扣原因码 / 离店后过账 ≠ 公开 BAR rewrite。不开 P88。不开 P89。

> 指针（2026-09-15 18:17 C15-18，不改正文三句 / 399 / 799）：Room Move / Discount Reasons / Post Stay·Open Folio misread Simulation drafted（`cases/sim-2026-room-move-discount-openfolio-misread-sat.md`）；§170 CASE 指针复述 §169。Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。

> 源指针（2026-09-15 20:17 R15-20，不改正文三句 / 399 / 799）：§171 新开 Protel Air *How to move a reservation* + Apaleo *SOP Template Amend reservations* + Stayntouch *Check Out With Open Balance*；Apaleo modify stay details 用途升核（§154）；互补 §169–§170。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T15-16 deepen **仍 skip**。不开 P88。不开 P89。
