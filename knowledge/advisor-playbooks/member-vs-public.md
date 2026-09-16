# Playbook P23｜Member vs Public BAR

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/member-vs-public.md`  
> BACKLOG：P23 Member vs Public BAR · LOW · 先决策卡 · slug `member-vs-public`  
> 状态：**drafted**（2026-08-21 18:17 CST）  
> 配套卡：`recommendations/follow-or-hold-member-rate.md`  
> 理论：`segmentation/segment-mix.md` §2.8 · `channel/net-contribution.md` · `pricing/how-much-to-move.md`（幅度数字不改）  
> 交叉：P18 促销倒挂 · P19 预付围栏 · P25 mix / 高峰关深折不关直销  
> 问题树：§12 Channel Mix · §31（本轮追加）  
> 证据等级：A Vendor（仅打开的品牌页、且品牌专属）；独立店动作 **Hypothesis**；「会员必须便宜 10%」= **非 Fact**  
> Last Verified：2026-08-21

---

## 0. 一句话

涨 BAR 时会员价默认同向跟；先问品牌会籍规则。没有规则 = **酒店自有围栏**，不当成必须便宜一成。  
会员已经高于公开 OTA → 先修倒挂，不是再涨会员。  
高峰会员价打到深折 OTA 下面 → 折扣在砸高峰，先收口差价。

完成定义（BACKLOG）：能回答涨 BAR 时会员跟不跟、跟多少；不违反用户给出的品牌规则；独立店不编造品牌义务%。

顾问必须能直接说的三句：

1. **涨 BAR 时会员价默认同向跟，先问品牌规则；没有规则不当成必须便宜一成。**
2. **会员价已经高于公开 OTA → 先修倒挂（同步/围栏），不是再涨会员。**
3. **高峰会员价打到深折下面 = 给会员的折扣在砸高峰，先收口差价。**

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| R1 | 用户问「BAR 要涨，会员价跟不跟、跟多少」 |
| R2 | 刚涨/将涨公开 BAR，会员价仍停在旧点 |
| R3 | 「会员已经比 OTA 还贵，会员没人订」 |
| R4 | 高峰会员价已经打到 OTA 深折下面，或相对 BAR 远深于围栏 |

**不是本剧本：** 只问涨多少 → Increase BAR + `how-much-to-move.md`。只问 OTA 促销报不报 → P18。只问 mix / 关 OTA → P25。只问预付开哪几天 → P19。协议周末泄漏 → P26 未写，先当围栏破（segment-mix B7）。

---

## 2. 输入（缺品牌规则就当自有围栏，不停）

```
必须：
1) Stay Date + DTA + Pace / Pickup（该日是 Peak / Ahead / 弱日？）
2) 公开 BAR（直销 + OTA BAR 层）
3) 现行会员价（及是否要登录/会籍才可见）
4) OTA 公开可订最低 vs OTA BAR 层（深折要单列）
5) 品牌会籍规则：有 / 无 / Unknown

应用：
6) 会员间夜占比（OTB 或近期）
7) 会员计划是否封闭（登录、注册、App、前台核销）
8) 积分/会籍成本是否已知（缺则声明低估直销成本）

Recommended：
9) 竞对可订价
10) 直销是否可订、是否与 OTA BAR 层同步
```

**品牌独立默认：** 开口第一句问「有没有品牌会籍规则（万豪/希尔顿/IHG/凯悦/华住等义务折扣）」。用户说没有、独立店、或 Unknown → **当作酒店自有围栏**，用本库 −3–5% 档 E 启发式，**禁止**把万豪 2%/5%、博客 10% 写成该店义务。

---

## 3. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 品牌规则用户已给（intranet / 特许手册 / CRS 会员码） | **先遵守品牌**。顾问只把公开 BAR 与会员计划对齐到规则允许的差；不发明更陡的店内 10% |
| X2 | 直销没开 / 库存不同步 | 先修供给（P25 X1/X3）。不是跟价问题 |
| X3 | 会员价 **高于** OTA **公开 BAR 层**（倒挂） | **先修倒挂**（§4 枝 b）。禁止在倒挂上再涨会员 |
| X4 | 「OTA 公开」其实是神券/预付深折，不是 BAR 层 | 深折走 P18/P25：高峰关深折。会员去跟神券 = 把围栏变成高成本地板 |
| X5 | 价已最高（公开 BAR ≥ 全部可订竞对） | 公开 **只关不涨**。会员：若已深于围栏则只收口差价；不要再抬 BAR |
| X6 | 出资未知的新大促，报了会让公开 OTA < 会员 | **不报**（P18）。禁止用促销把会员倒挂 |
| X7 | 会员其实算进 OTA 口径 | 先改口径，再谈跟不跟 |
| X8 | 弱日、市场也冰，还要把会员再砸 −10%+ | 禁止一夜 −15%；最多档 E 围栏，BAR 不动 |

排除顺序：X1 品牌 → X2 供给 → X3/X4 倒挂 vs 深折层 → 再谈跟/冻/收口。

---

## 4. 诊断枝（三枝，禁止「适当跟一点」）

```
BAR 要动 / 会员与公开的关系异常
│
├─ 有品牌义务页或用户手册？
│     是 → 按规则维持点差（万豪打开页：工作日至少 2%、周末最高 5%——仅万豪，见 §9）
│     否 → 酒店自有围栏。默认同向、保持差价带
│
├─ (b) 会员价 > OTA 公开 BAR 层？
│     是 → 泄漏到 OTA。先修倒挂：同步公开层 / 确认会员真封闭
│     不要再涨会员。不要把会员降到 OTA 深折
│
├─ (c) 高峰会员价 ≤ OTA 深折，或相对 BAR 远深于 −3–5%（常见 ≥8–10%）？
│     是 → 给会员的折扣在砸高峰。先收口差价（抬会员，或关深折后再抬）
│     不要用「会员要有诚意」维持深折
│
└─ (a) 公开 BAR 将涨 / 已涨，会员未动（滞后）
      ├─ Follow 同 %：新会员 = 新 BAR × 旧会员/旧 BAR
      ├─ Keep gap：新会员 = 新 BAR − 旧元差
      └─ Freeze：会员不动
         高峰 / Ahead / Fast → 默认 Follow 或 Keep gap（取仍落在 −3–5% 带内的）
         禁止 Freeze 把差价拉深到深折带
         弱日已过 P02 排除 → 可 Freeze 一刀观察 24h；仍不要把会员打到深折下面
```

**围栏定义（本库，Hypothesis，不是行业定律）：** 封闭会员价相对 **同日公开灵活 BAR** 第一刀 −3–5%（档 E）。更深只在弱日且已过排除；高峰默认收到 −0–5%，禁止收到 OTA 深折之下。

**跟的对象是 Stay Date 的公开 BAR，不是竞对会员价，不是神券。**

---

## 5. 动作（必须落到 Stay Date / 价 / 谁跟）

### 5.1 三选一（枝 a：涨 BAR）

| 选项 | 何时 | 会员怎么走 | 禁止 |
| --- | --- | --- | --- |
| **Follow 同 %** | 独立店默认；旧差已在 −3–5%；高峰/Ahead | 新会员 = 新 BAR × (旧会员/旧 BAR)，再收到 −3–5% 带 | 把 % 改写成 −10%「行业标准」 |
| **Keep gap（元差）** | 旧差是固定元（如 50）且仍落在 −3–5% | 新会员 = 新 BAR − 旧元差 | 元差已大于新 BAR 的 8% 还死守元 |
| **Freeze / Hold** | 弱日试探；或会员已在带上沿；或价已最高只关不涨 | 会员不动；公开 BAR 仍按 Pace 卡走 | 高峰 Freeze 导致会员打穿深折；倒挂时 Freeze 高会员 |

**Partial（部分跟）：** 公开走完整第一刀（档 A/B），会员只收到新 BAR 的 −3–5% 上沿（例如 BAR +5–8%，会员少跟 1–2 个点），用于旧差已经偏深、一次拉满怕转化。仍是同向，不是反向。

公开 BAR 幅度 **只走** `how-much-to-move.md`：+5–8% / +8–15% 或收到最低竞对；一天不跳最高；价已最高只关不涨。本剧本不另发明涨幅。

### 5.2 枝 b：会员已经高于公开 OTA

```
1) 拆层：OTA 最低是 BAR 层还是深折？
2) 深折 → 高峰关深折（P25），会员不动；不要降会员去跟 799
3) 真 BAR 层公开 OTA < 会员
     → 先同步：OTA BAR 层拉到直销公开 BAR；直销/会员保持可订
     → 会员：Hold 或收到公开 BAR−3–5%（修围栏）。禁止再涨会员
4) 会员价其实没封闭（官网页对所有人可见）
     → 那不是会员围栏，是公开降价。先加登录/会籍核销，或收回公开层
```

### 5.3 枝 c：高峰会员远低于 BAR / 打到深折下面

```
1) 当天关公开 < 新地板的深折（OTA 神券、过深预付）
2) 会员收到新 BAR 的 −3–5%（抬会员 = 收口差价）
3) 直销 BAR 层保持可订；不关直销
4) 预付高峰仍关（P19）；弱日预付 −3–5% 可与会员带对齐，不要叠两层深折
```

### 5.4 输出模板

```text
Stay Dates:
DTA / Pace / Peak?:
Brand rule:          用户给 / 无 → 自有围栏 / Unknown（按自有）
Public BAR current → recommended (range + preferred):
Member current  → recommended (range + preferred):
Who follows:         Follow 同% / Keep gap / Freeze / Partial
OTA BAR 层:          与公开 BAR 对齐
OTA deep:            高峰关 / 弱日围栏 −3–5%
Fence vs new BAR:    目标 −3–5%（Hypothesis）；品牌规则优先
Inversion?:          会员 ? OTA 公开 BAR 层
Promo:               出资未知或不把会员倒挂 → 不报（P18）
Price already highest?: 只关不涨
Do-not-do:
  - 「会员必须便宜 10%」当独立店 Fact
  - 倒挂时再涨会员
  - 高峰把会员打到深折 OTA 下面
  - 全渠道跟神券
  - 关直销 / 关光 OTA
  - 编中国 OTA 佣金% / 编品牌义务数字
  - 一夜 −15%
```

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 跟了之后 24h 直销/会员 Pickup 塌、OTA 深折仍开 | 先确认深折已关；不把会员再降。弱日才评档 E |
| 24h 总 Pickup 仍 Fast 且会员仍深于 −8% | 再收一口差价，收到 −3–5%；不第三刀砸公开 BAR |
| 发现会员仍 > OTA BAR 层 | 停涨会员；只修同步 |
| 用户补品牌规则 | 重算点差；规则与本库启发式冲突时 **规则优先**，并在卡上标明品牌专属 |
| 价已最高 | 公开只关不涨；会员只收口、不跟涨 |
| Pace 转 Ahead 且会员仍开在深折下面 | 当天收口 |

300 间尺：<3 / 3–7 / ≥8（与幅度卡同一 Trigger，不另发明）。

---

## 7. 如果只能再补 3 个

1. 该 Stay Date 的 **公开 BAR vs 会员价 vs OTA BAR 层 vs OTA 最低**（四张截图或四个数）  
2. **品牌会籍规则**有没有（没有就明确「自有会员」）  
3. 该日 Pace / 是否 Peak（翻转 Follow vs Freeze）

翻转条件：规则要求固定 % → 用规则；OTA 最低其实是神券 → 关深折不降会员；该日其实弱 → 不按高峰收口。

---

## 8. Confidence / 边界

有四价 + 日期类型：方向 Medium。  
跟多少（点差）：永远 Hypothesis，除非用户给了品牌义务。  
缺品牌规则：按自有围栏，Confidence 不升。  
万豪 2%/5%、希尔顿 from 2%：**品牌专属 A Vendor**，不是中国独立店 SOP。  
IHG / 凯悦产品页：**有会员价产品、无公开统一 %** → 该品牌 % = Unknown。  
希尔顿 benefit-terms「大中华是否排除 Honors Discount」本轮页 **未打开** → **NV**。  
中国独立店官方会员 SOP：**未找到** → Hypothesis（同向、保持差价、高峰不打到深折下面）。  
不操作系统、不代改 CRS 会员码。

仿真：`cases/sim-2026-member-rate-vs-bar-raise.md`（**Simulation**，不是真店）。

---

## 9. 证据（2026-08-21 打开）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 会员价是封闭资格价（直销渠道、会籍、不可与部分促销叠、通常不含 10 间以上团） | A Vendor | **Known（万豪）** | https://www.marriott.com/online-hotel-booking.mi 2026-08-21 打开；help.marriott.com member-rate-eligibility 打开 |
| 万豪 Member Rate：工作日至少 2%、周末最高 5%；作用在最低适用公开价、非超值房 | A Vendor | **Known，仅万豪** | 同上 BRG 页。**不是**独立店 / 不是「必须 10%」 |
| 希尔顿 Honors Discount：from 2% off eligible rate，随预订窗/国家/DOW 等变化 | A Vendor | **Known 机制；具体点 Unknown** | https://www.hilton.com/en/hilton-honors/terms/ 2026-08-21 打开（Effective 2026-07-15） |
| 希尔顿 Discount 是否在中国大陆/港澳台酒店不适用 | — | **NV** | benefit-terms 检索摘要有「China; Macau; Hong Kong and Taiwan」排除句；本轮 WebFetch timeout、curl 空页，**未独立打开**。中国希尔顿店问品牌 CRS，不把检索摘要当 Fact |
| IHG One Rewards Member Rate：全层级有「Member Rates / book direct」 | A Vendor | **Known 产品；% Unknown** | https://www.ihg.com/content/us/en/deals/member-offers/memberrate 与 tier-benefits 2026-08-21 打开。页上 **无** 统一折扣% |
| 凯悦 Member Rate：会员订标准/高级房，是 Standard Rate 的折扣 | C/B 检索 | **% Unknown** | https://world.hyatt.com/content/gp/en/landing/members-save-more.html WebFetch timeout + curl 空；仅检索 snippet。不写凯悦义务% |
| 中国独立店「会员必须便宜 10%」官方 SOP | — | **未找到** → 不当 Fact | 搜索无政府/协会现行义务表 |
| 独立店默认：同向跟 BAR、保持差价、高峰不把会员打到深折 OTA 下 | Hypothesis / B | 本库 | 对齐档 E −3–5%；P25 高峰关深折不关直销；P18 不报倒挂促销 |
| 博客/学院「会员 5–10% / −8%」 | C/D | 不采用为义务 | Peaqplus、parity 博客。机制（封闭才叫围栏）可作 B 讨论，数字不进启发式 |
| 中国 OTA 佣金%、弹性点、Walk 成本 | — | NV | 不编 |

Failed fetches / 未打开（记搜索词，不编页）：

- `Hilton Honors benefit-terms China Macau Hong Kong Taiwan discount not available`
- `Hyatt member rate savings members-save-more.html`（timeout）
- `中国 独立酒店 会员价 相对 BAR 义务折扣 SOP`
- `华住 / 锦江 会员价 相对门市 官方百分比`（本轮未作为必须打开项；需要时再核，不编）

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 18:17 CST | drafted。BACKLOG P23。三枝：跟/倒挂/高峰过深。独立店默认自有围栏。不把 10% 当 Fact。 |
| 2026-08-21 20:17 CST | 来源复盘指针：与 P02/P19/档 E 同尺不同产品，禁止三层叠砍；与 P18/P25 高峰关深折不关直销兼容；万豪 2–5% 仍品牌专属。无 needs_revision。见 `research-log/2026-08-21-2017-sources-recap.md`。 |

---

## 11. 交叉（2026-08-22 06:17）

协议周末泄漏走 **P26** `corporate-leakage.md` · `blackout-or-close-leaking-corp.md`，不是把本剧会员围栏再砍一刀。

- 会员仍走本卡：涨 BAR 同向跟；无品牌规则 = 自有围栏；不编 10%。
- 「协议周六 480、跑到 OTA、要不要关协议」→ P26。高峰 blackout / 下 OTA；弱市工作日留；不杀户。
- **禁止**同一 Stay Date 叠三刀：会员 −5% + 协议再 −5% + OTA 深折。
- 上条「协议周末泄漏 → P26 未写」作废。

## 12. 交叉（2026-08-22 22:17，不改跟/冻/收口）

隔壁截图上的会员/登录/App 价走 **P36**，不是本剧。本剧只管 **我们自己的** 会员 vs 我们的公开 BAR。不要用隔壁 719 当会员跟价锚。

---

## 13. 一行（2026-08-25 06:17，不改上文）

空间可用免费升级 **不是** 本剧会员 BAR（**P49** `loyalty-award-upgrade.md`）。member BAR ≠ free upgrade。两边都有房价的会员围栏仍本剧。

## 14. 交叉（2026-08-26 22:17，不改会员围栏）

会员/登录价低于公开灵活价常是**允许的围栏**，不是价平破口。本店 OTA 公开灵活价 undercut Brand.com 走 **P59**。本剧仍只管我们自己的会员 vs 公开 BAR。

> 交叉指针（2026-08-29 10:17，不改正文）：会员围栏仍本剧。平台券后/出资展示 ≠ 会员 BAR；「跟券后改公开尺」走 **P74**。不写 P75。

> 交叉指针（2026-08-30 10:17，不改正文）：会员围栏仍本剧。付费员工折扣/员工价改尺 → **P80** `staff-employee-rate-vs-bar.md` · `dont-rewrite-bar-for-staff-rate.md`。member ≠ employee。不写 P81。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-09-01 08:17，不改正文）：会员围栏仍本剧。付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**。member ≠ employee。不规定 P88。
