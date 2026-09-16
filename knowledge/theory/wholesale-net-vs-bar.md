# Wholesale Net / TA / GDS vs Public BAR｜批发/旅行社/GDS 净价不是公开 BAR

> 资产：T-Wholesale / T11–T14 下一层（批发净/档案闸/Access Code 被允许改什么）· T-Corp / T-Fee / T-Live 同族（尺子 ≠ 按钮）
> 路径：`theory/wholesale-net-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-30
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Managing Profile Channel Negotiated Rates*：Travel Agent / Company / Source 档案 + Access Code → GDS/OWS — **§84 指针 / §85 升核**）；A 协会（HSMAI Academy *Net Rate*：travel agents/wholesalers/OTAs 的 net = 进货底，渠道加 markup 后才广告 — **§84 指针 / §85 升核**）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Channel Rate Access*：Access Code 使能订到 discounted/negotiated 渠道价 — **§85 新开**）；A Vendor RMS（IDeaS Glossary：BAR = lowest non-restricted bookable by all guests；Qualified Rate 须资格；Net Rate = 扣佣/交易成本或 markup 前；Semi-Yieldable 常含 wholesale / corporate negotiated — **§85 新开**）；A 协会（STR CoStar *Historical Benchmarking*：Transient 子类含 Wholesale；wholesale / pay-when-booked 报 **net not gross**；Group 含 Tour group/Wholesalers — **§85 新开/升核**；上报桶 ≠ BAR Type）；A Vendor PMS 升核（OPERA Rate Classes 例 Wholesale = LTB 查询桶 — **§77/§84/§85**）；A Vendor PMS 升核（OPERA *Managing Profile Negotiated Rates*：Commission Code 对 Travel Agent/Source 可用 — **§82 指针 / §85 升核**）；A 协会词条（HSMAI BAR = non-qualified, publicly available — 指针 §67）
> 配套：`advisor-playbooks/wholesale-gds-ta-vs-bar.md`（P81 过程）· `recommendations/dont-rewrite-bar-for-wholesale.md`（主卡复用，不重写）· `metrics/wholesale-net-vs-public-bar.md`（轻指标；**无默认批发折扣 % / 佣金 Fact**，公式不重写）· `cases/sim-2026-wholesale-net-sat.md`（Simulation）
> 交叉：P20 渠道净贡献排序 ≠ 本卡「把公开 BAR 改写成批发地板」· P27 高峰关 opaque/批发漏出 ≠ 改尺 · P71 / T-Corp 年标/企业账户 ≠ 批发/TA/GDS 净 · P26 已签码漏出 · P80 员工价 · P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee（假尺子一族）
> 问题树：§88「批发/旅行社/GDS 净价不是公开 BAR」（过程路由已够；本卡给「为什么档案闸/Access Code/Wholesale 类/净价 markup 不是公开 BAR、渠道闸/查询桶/上报桶不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / GDS / 批发合同 / Access Code，不自动改价，不代关批发码。**
> 状态：**理论 drafted**（2026-08-30 16:17 CST）。**不写 P82，不写新剧本，不写停车费专剧。** 禁止：编华住批发/GDS SOP / 默认批发折扣 % / 佣金% / Consortia 10% / 699；一夜 −15%；BAR→399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低 / ADR 被批发看脏」；把 14/399/799 当市场 Fact；把 Altexsoft / Consortia 10% 写成中国 Fact；重写 `wholesale-net-vs-public-bar.md` 公式；重写 P01–P81 正文（P81 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**批发 / 旅行社 / GDS 净价是档案闸 + Access Code 才进渠道的协议进货底（对方再加 markup 才对外），不是公开灵活 BAR。**
厂商能把协议挂在 Travel Agent / Company / Source 档案上、能配 Access Code、能给 Wholesale Rate Class 做 LTB 查询桶、能给 TA/Source 挂 Commission Code，只证明「有资格闸 / 渠道发布闸 / 查询桶 / 佣金过程」，不证明「公开灵活价该跟到批发地板」。协会能把 net rate 钉成「渠道再加 markup 后才广告」、能把 BAR 钉成 non-qualified publicly available、能把 Wholesale 放进 Transient 子类并要求 wholesale 报 net——只证明「进货底 / 公开尺 / 上报桶怎么分」，不证明「公开 BAR 改写成批发净」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低 / ADR 被批发看脏」把 BAR 改写成 399。净贡献排序 → **P20**。高峰关盲盒/批发漏出 → **P27**。年标 → **P71 / T-Corp**。已签码漏出 → **P26**。员工价 → **P80**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店批发/GDS SOP / 华住字段 / 默认批发折扣 % / 佣金 Fact = **全部 NV**。停车费仍 **MEDIUM leftover**，本卡不开。

```
Naive（禁止）     批发价就是我们的公开价；旅行社净价太低所以 BAR 改 399；
                  GDS 协议价低所以公开也得低；ADR 被批发看脏所以 dump；Wholesale 类就是公开价表
本卡              先拆三把尺（公开 BAR / 批发·TA·GDS 净价 / 对方 markup 后挂牌）。
                  Channel Negotiated + Access Code + Wholesale Rate Class + HSMAI net + STR Wholesale 桶 ≠ 定价权。过程走 P81。
```

完成标准：用户说「批发价才是市场价改 BAR」「旅行社净价太低所以跟」「GDS 低所以公开也得低」「ADR 被批发看脏砍 BAR」「Wholesale 类就是公开价」「Access Code 挂出去了所以公开尺跟」→ Situation 写成**三把尺 + Pace/Remaining + 这是渠道净还是要改公开**；Diagnosis 写成批发净不是公开 BAR、档案闸/Access Code/查询桶/上报桶不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、批发码是否仍关在档案闸、折扣%/佣金是否仍 NV。**不 dump 399、不把批发地板写成新 BAR、不写 P82。**

顾问必须能直接说的三句（与 P81 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是批发/旅行社/GDS 渠道协议净价（档案闸 + Access Code），还是要改公开灵活 BAR。批发净价 ≠ 公开尺。本店批发/GDS SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低」。
3. 净贡献排序走 P20。高峰关盲盒/批发漏出走 P27。年标走 P71。已签码漏出走 P26。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从批发净价改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**批发/TA/GDS 净价回答不了「今晚公开灵活该卖多少」。** 它回答「这个档案还能不能用那条 Access Code、对方进货底是多少、markup 后挂了什么」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把批发地板写成新 BAR。禁止编默认批发折扣 %。禁止编佣金 Fact。禁止编 Consortia 10%。**

---

## 1. 三把尺：公开 BAR / 批发·TA·GDS 净价 / 对方 markup 挂牌

顾问问题不是「GDS/批发里有没有一个更低的数」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成批发地板；砍到「批发才是市场价」 |
| **Wholesale / TA / GDS net** | 挂 Travel Agent / Source（或 Company 渠道协议）档案、靠 Access Code 才进 GDS/OWS 的协议净价 | 可留独立码；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Partner markup advertised** | 渠道在 net 上加 markup 后对外广告的价 | 窗/渠道层 → 分看；诊断：挂牌 ≠ 本店公开尺 | 把「客人在批发渠道看到的价」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Wholesale_net            = 399 或更低  # Simulation：渠道协议净（不是新 BAR）
Partner_advertised       = Wholesale_net + markup   # Simulation：对方挂牌（不是本店 BAR）
Gap                      = Public_BAR − Wholesale_net   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | channel negotiated net | partner markup | Access Code gate | Wholesale Rate Class bucket
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国批发默认。

混淆三把尺会同时拧坏 **公开尺** 与 **渠道层**：把「旅行社净 399」读成「我们 BAR 就是 399」，或把「GDS Access Code 挂着」读成「公开栏必须跟到地板」。

IDeaS Glossary（A，§85 新开）：BAR = **the lowest non-restricted rate bookable by all guests**；Qualified Rate = 客人须资格；Net Rate = 扣佣/交易成本或 markup 前；Unqualified = 无合同、无限制。**方向采用：批发/TA 净要资格/合同，不是 BAR。**

HSMAI Net Rate（A，§84/§85）：旅行社/批发/OTA 的 net 是进货底，渠道加 markup 后才广告。**方向采用：净价 ≠ 公开尺。** 不编 markup %。

---

## 2. Channel Negotiated / Access Code / Wholesale 类 / STR Wholesale 桶是过程，不是定价权

厂商和协会把「批发/TA/GDS」做成**档案闸 + 渠道 Access Code + 查询桶 + 上报口径 + 佣金过程**。没有一家被打开的官方页把它写成「批发净默认等于 BAR」或「GDS 低就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Managing Profile Channel Negotiated Rates*（§84 指针 / §85 升核） | 从档案发 Sales Account 协议价到 **OWS 与 GDS**。档案类型含 **Company、Travel Agent、Source**。字段含 Channel、Channel Rate Code、Negotiated Rate Code、**Access Code**、起止日 | **档案闸 + 渠道发布。** 不是 BAR Type |
| OPERA Cloud 26.2 *Configuring Channel Rate Access*（§85 **新开**） | Channel Rate Access 可查看 **discounted/negotiated rates that are enabled for booking when using an access code**；字段含 Account、Type、Channel、Rate Plan、**Access Code**、起止日、Active | **Access Code = 订得到协议价的闸。** ≠ 定价权 / ≠ 公开灵活栅格 |
| OPERA Cloud 26.2 *Configuring Rate Classes*（§77/§84/§85） | Rate Class 例 **Negotiate、Wholesale、Discounted**，用于 LTB 查询分组 | **Wholesale 类 = 查询桶。** ≠ BAR Type |
| OPERA Cloud 26.2 *Managing Profile Negotiated Rates*（§82 指针 / §85 升核） | 协议价挂 profile；Look to Book 对该账户出示合同价；**Commission Code** 在 Commissions Handling 开启时对 **Travel Agent / Source** 可用 | **佣金过程挂在档案上。** ≠ 把公开 BAR 改成净价 |
| HSMAI Academy *Net Rate*（§84/§85） | travel agents / wholesalers / OTAs 要 net（排除佣金/税）；再加 markup 后才广告 | **进货底 + markup 层。** ≠ 公开 BAR |
| HSMAI Academy *BAR*（指针 §67） | BAR = **the non-qualified, publicly available rate** | 批发/TA/GDS 净要资格，**不是 BAR** |
| IDeaS Glossary（§85 **新开**） | BAR = lowest non-restricted bookable by all；Qualified / Unqualified / Semi-Yieldable（常含 wholesale 或 corporate negotiated；LRA = 只有同房型同 LOS 的 BAR 也关了才能关协议码） | **资格闸 / 关码约束 ≠ 改写公开 BAR。** Semi-Yieldable **不是**「公开必须跟地板」。Vendor Methodology，不抄进 OPERA 字段名当店规 |
| STR CoStar *Historical Benchmarking*（§85 **新开/升核**） | Transient 子类常含 Retail / Discount / Negotiated / Qualified / **Wholesale**；wholesale 与 pay-when-booked 互联网价报 **net not gross**；Group 可含 Tour group/Wholesalers | **上报桶 / 净额口径。** Wholesale 进 Transient 子类 ≠ BAR Type；ADR 读脏是读桶，不是砍尺令 |

```
画面：批发价才是市场价 / 旅行社净太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏 / 销售说「Wholesale 类就是公开价」
Naive：BAR 就是那个净价；GDS 挂了所以改尺
本卡：档案闸、Access Code、Rate Class、HSMAI net、STR Wholesale 桶、Commission Code 都是过程。定价权在公开 BAR + Pace，不在批发按钮。
```

```
Travel Agent / Source / Company Channel Negotiated  → 档案闸
Access Code / Channel Rate Access                   → 渠道订得到的闸
Wholesale Rate Class                                → LTB 查询桶
HSMAI net → partner markup                          → 进货底 → 对方挂牌
STR Transient·Wholesale / net not gross             → 上报桶
Commission Code (TA/Source)                         → 佣金过程
Public BAR                                          → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住批发/GDS SOP / 本店批发折扣 % / 佣金 Fact / Consortia 10% = **NV，不编。** UI 字段是 OPERA/STR 的，不是本店报表名。

---

## 3. 「批发才是市场价 / 净价太低所以跟 / ADR 看脏」是渠道/指标信号，不是改写公开 BAR 的许可证

批发净回答的是：**有资格的渠道进货底是不是比公开尺低、ADR 有没有被批发 mix 拉脏。**

它**不**回答：公开 BAR 该不该写成 399。

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 批发净看起来更低 | 需求仍强；公开尺 **Hold**；批发留在档案闸 | 「市场认批发地板，BAR 改 399」 |
| 旅行社净太低、公开 BAR 也动 | 分看是净贡献差（→P20）还是要改尺；公开仍 Pace 闸 | 用旅行社净证明必须 dump 公开尺 |
| ADR 因批发 mix / net 上报显得怪 | **形 C**：读桶；分看公开 vs 批发净 vs 对方挂牌 | 「已经看脏了所以砍 BAR」 |
| Access Code / Wholesale 类还能订 | **形 E**：渠道闸/查询桶 ≠ BAR Type | 「类/码就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从批发净改写 BAR | 一夜 −15%；把批发地板永久化 |

```
Wholesale looks cheap   → 渠道/mix 信号（可加强拆尺 / Hold 公开）
Public BAR              → 仍由 Pace / Remaining 定
Naive                   → 「批发太低所以 BAR→399」
本卡                    → 批发太低 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. 本店批发改尺 ≠ 净贡献（P20）≠ 高峰关漏出（P27）≠ 年标（P71/T-Corp）≠ 已签码漏出（P26）≠ 员工价（P80）≠ 真弱（P05）

六边都在「看起来更低 / 销售要跟」附近，对象不同。塌成「反正都低所以砍」会开错杠杆。

| | **P81 / 本卡（重置公开尺=批发净）** | **P20（净贡献排序）** | **P27（高峰关 opaque/批发漏出）** | **P71 / T-Corp（年标）** | **P26（已签码漏出）** | **P80（员工价）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到批发·TA·GDS 净 | 哪个渠道净贡献更好 | 高峰还开着盲盒/批发漏出层 | 企业年标/RFP 合同价 | 已签码错渠道/高峰滥用 | 付费员工折扣码 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 净贡献 | 漏出层开关（不是公开尺） | 公开 BAR vs 年标 | 公开 BAR vs 漏出码 | 公开 BAR vs 员工码 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；按净排序不改尺 | 关漏出层；Hold 公开 | Hold；不「对齐年标」 | 关漏出；Hold 公开 | Hold；员工码留资格闸 | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；批发当市价 | 把净差写成 BAR→399 | 把关漏出写成砍 BAR | 年标当 BAR；冲量 399 | 漏出当新 BAR | 员工价当 BAR | 一夜 −15%；把批发地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是净贡献排序，还是高峰关漏出，还是年标，还是已签码漏出，还是员工价，还是真弱？** 净贡献 → P20。高峰关漏出 → P27。年标 → P71。漏出 → P26。员工价 → P80。真弱 leftover → P05。要把本店批发/TA/GDS 净叫 BAR / 要净太低改尺 / Access Code 所以跟 → 本卡 / P81。

---

## 5. 假尺子一族：「批发就是 BAR / 净太低改尺 / Access Code 所以跟」

本卡不是新怪现象，是同一族的下一张：**屏幕上的渠道净/Access Code 被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了 / 过期还挂」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔 / 被索赔了」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **T-Live** | 「直播间 399 / 卖爆了 / 主播价就是市场价」 | 公开 BAR + Pace；橱窗不是尺 |
| **T-Fee** | 「OTA 总价贵 / 服务费吓跑 / ADR 被费看脏」 | 公开 BAR + Pace；费/税/all-in 不是 BAR |
| **本卡 T-Wholesale** | 「批发价才是市场价 / 旅行社净太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏」 | **公开 BAR + Pace**；不是批发净/Access Code 当 BAR 令，也不是 dump 399 令 |

「批发价才是市场价所以改 BAR」= 把 **渠道协议净（资格层）** 当成 **公开灵活价**。尺子在批发净上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「旅行社净太低所以跟」是另一把假尺子：把**进货底**当成「市场已经认了新尺」。该把净留在档案闸，不是改写 Brand.com。

「Access Code / Wholesale 类所以跟」是第三把：把**渠道闸/查询桶仍可用**当成「BAR Type 已经变了」。Access Code 仍是订得到协议价的闸。

「ADR 被批发看脏所以 dump」是第四把：把**上报桶/mix 读脏**当成砍尺令。读桶，不改尺。

与 **T-Corp** 的边界：年标是企业账户合同价（常 Company profile）；本卡是批发/旅行社/GDS **净**（常 Travel Agent / Source + Access Code + HSMAI net/markup）。对象不同，假尺子同族。

---

## 6. Diagnose → Advise：批发净被允许改什么

用户原话：「批发价才是市场价，BAR 改成 399」「旅行社净价太低所以跟」「GDS 协议价低所以公开也得低」「ADR 被批发看脏砍 BAR」「Wholesale 类就是我们的公开价」「Access Code 挂出去了所以公开尺跟」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是批发/TA/GDS 渠道协议净 / 对方 markup 挂牌 / Access Code / Wholesale 类；
            ②拟议是「改尺 / 净太低跟价 / 类所以跟」还是「批发留在档案闸、Hold 公开」；
            ③Pace / Remaining；这是渠道净层还是要改公开尺。
  缺折扣% / 佣金 / 本店批发 SOP → 问，不编华住字段。

Diagnosis
  批发净已经挂在渠道上之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 类当尺 vs 净贡献 vs 关漏出 vs 年标 vs 漏出 vs 员工价 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆批发净 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P20 / P27 / P71 / P26 / P80 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住批发/GDS SOP / 默认批发折扣 % / 佣金 Fact / Consortia 10%。

What To Watch
  公开 BAR 是否仍 Hold；批发/TA/GDS 码是否仍关在档案闸；24h 公开 Pickup vs 批发码 Pickup（分看）
  不是「GDS 把 Access Code 挂出去了就算改完 BAR」
```

过程六形（A 混尺 / B 改尺 399 / C ADR 看脏 / D→P20·P27·P71·P26 / E 闸/类当 BAR Type / F→P05）走 **P81**，本卡**不重复 P81 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P82。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **批发/旅行社/GDS 渠道协议净价（档案闸 + Access Code）**，还是要把 **公开 BAR 改成那个净价**？ | 混用尺；把渠道净当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与批发/TA/GDS 净价各是多少？对方 markup 后挂牌呢？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 Travel Agent / Source 档案闸？是否 GDS Access Code？是否 Wholesale Rate Class？ | 把查询桶/闸写成「已成新 BAR」 | **NV** → 先拆闸，不编批发 SOP |
| 4 | 拟议是批发留在档案闸、Hold 公开，还是改写公开尺 / 净太低所以跟？ | 误入本卡 / P20 / P27 | **NV** |
| 5 | 本店批发/GDS SOP / 华住字段 / 折扣% / 佣金怎么走？ | 发明华住 SOP；或把 Consortia 10% 当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是净贡献排序（→P20）；是不是高峰关盲盒/批发漏出（→P27）；是不是年标（→P71）；是不是已签码漏出（→P26）；是不是员工价（→P80）；真 Behind leftover（→P05）。**批发折扣%、佣金 Fact、Consortia 10%、699、华住批发/GDS SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 批发净就是公开 BAR | BAR = 无资格公开灵活。批发净要档案闸/Access Code |
| 旅行社净太低所以 BAR→399 | 进货底 ≠ 战略尺。拒绝 |
| GDS 协议价低所以公开也得低 | 渠道协议 ≠ Brand.com 栅格 |
| ADR 被批发看脏所以 dump | 读桶/mix；STR Wholesale 子类是上报口径 |
| Wholesale Rate Class 配了所以公开尺改完 | 查询桶 ≠ BAR Type |
| Access Code 挂出去了所以公开尺跟 | 渠道闸 ≠ 定价权 |
| Channel Rate Access 能订到协议价 = BAR 就是那个价 | 使能订到 ≠ 改写公开灵活 |
| Semi-Yieldable / LRA 所以公开也得地板 | 关码约束 ≠ 改写 BAR（IDeaS Vendor Methodology） |
| Commission Code 配了所以 BAR 跟净价 | 佣金过程 ≠ BAR Type |
| 对方 markup 后挂牌更低所以跟 | 对方广告层 ≠ 本店公开尺 |
| 净贡献差所以砍公开 | **P20** |
| 高峰批发还开着所以砍公开 | **P27**（关漏出，不砍 BAR） |
| 对齐年标所以跟批发地板 | **P71 / T-Corp** |
| 协议码漏了所以砍公开 | **P26** |
| 员工价也低所以跟批发地板 | **P80** |
| 反正空，按批发地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住批发 SOP 就能 Advise | **禁止。** 折扣 % / 佣金 NV |
| Consortia 10% / Altexsoft 行业 % 就是本店该打的折 | **禁止。** 不进中国 Fact |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P81 `cases/sim-2026-wholesale-net-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
批发/TA/GDS 净               = 399（不是新 BAR）
销售拟议                     = 「批发价才是市场价 / 旅行社净太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏」砍 BAR 到 399
```

读法（与 P81 同句）：399 是被拒绝的批发/GDS 净价改尺，不是 BAR。Advise：拆公开 vs 批发净 vs 对方 markup；**Hold 779–799 首选 799**；拒 dump **399**；批发留在档案闸；折扣 % / 佣金 **NV**。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/批发默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 10. 证据（2026-08-30 16:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Travel Agent / Company / Source + Access Code 发到 GDS/OWS | **A Vendor PMS** | **Known 档案闸/渠道发布。** ≠ BAR Type | OPERA Channel Negotiated Rates（**§84 指针 / §85 升核**） |
| Access Code 使能订到 discounted/negotiated 渠道价 | **A Vendor PMS** | **Known 渠道闸。** ≠ 定价权 | OPERA Configuring Channel Rate Access（**§85 新开**） |
| Wholesale Rate Class = LTB 查询桶 | **A Vendor PMS** | **Known 查询桶。** ≠ BAR Type | OPERA Rate Classes（**§77/§84/§85**） |
| Commission Code 对 TA/Source 可用 | **A Vendor PMS** | **Known 佣金过程。** ≠ 改尺 | OPERA Profile Negotiated Rates（**§82 指针 / §85 升核**） |
| net rate 是旅行社/批发/OTA 进货底，渠道加 markup 后才广告 | **A 协会** | **Known 进货底。** ≠ 公开 BAR | HSMAI Academy Net Rate（**§84/§85 升核**） |
| BAR = non-qualified, publicly available / lowest non-restricted bookable by all | **A 协会 / A Vendor RMS** | **Known 公开尺定义** | HSMAI BAR（指针 §67）+ IDeaS Glossary（**§85 新开**） |
| Qualified / Unqualified / Semi-Yieldable（常含 wholesale） | **A Vendor RMS** | **Known 资格闸/关码约束。** ≠ 改写 BAR | IDeaS Glossary（**§85 新开**） |
| Transient 子类含 Wholesale；wholesale 报 net not gross | **A 协会** | **Known 上报桶。** ≠ BAR Type | STR Historical Benchmarking（**§85 新开/升核**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P81 + Pace 闸 | — |
| 本店批发/GDS SOP / 华住字段 / 默认批发折扣 % / 佣金 Fact / Consortia 10% | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 Configuring Channel Rate Access + IDeaS Glossary（BAR / Qualified / Net Rate / Semi-Yieldable / Unqualified）+ STR CoStar Historical Benchmarking（Wholesale 子类 + net not gross）。升核/复核：OPERA Channel Negotiated Rates + HSMAI Net Rate + OPERA Rate Classes Wholesale + OPERA Profile Negotiated（Commission Code）。HSMAI Rack rate glossary **timeout**，不当核页。Altexsoft **不采用为 A**。Consortia 10% **不进中国 Fact**。华住批发/GDS SOP **未开、不编**。停车费仍 leftover 指针，不开专剧。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-WS-01 | 本店批发/GDS SOP / 是否真有 Travel Agent·Source 档案 / Access Code | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-WS-02 | 本店默认批发折扣 % / 佣金 Fact / Consortia % | **NV。** 净价不是改尺令 |
| NV-WS-03 | 399 来源（批发话术 / GDS 截图 / 对方 markup 挂牌 / 净贡献抱怨） | **NV。** 先 Hold 公开 BAR |
| NV-P81-01… | P81 已挂（华住批发/GDS / 折扣 % / 佣金） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 16:17 CST | 首版。T-Wholesale = 批发/旅行社/GDS 净价不是公开 BAR。三把尺；Channel Negotiated/Access Code/Wholesale 类/HSMAI net/STR Wholesale 桶≠定价权；批发才是市场价≠改尺令；P20/P27/P71/P26/P80/P05 孪生；假尺子一族；不重复 P81 六形。**不写 P82。** 14/399/799 Simulation only。399 = 被拒绝的 dump。 |

---

## 13. 交叉（不改 P01–P81 正文；P81 仅头一行，邻卡仅文末一行）

- **P81** `advisor-playbooks/wholesale-gds-ta-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-wholesale.md`：复用，不重写。
- **轻指标** `metrics/wholesale-net-vs-public-bar.md`：公开 BAR vs 批发净 gap；无默认批发折扣 %。本卡不重写公式。
- **P20**：净贡献排序。本卡 / P81 = 要把公开尺写成/跟到批发净。
- **P27**：高峰关 opaque/批发漏出。邻「关漏出层」，不是改尺。
- **P71 / T-Corp**：年标/企业账户。邻「公司协议价」，不是批发/TA/GDS 净。
- **P26**：已签码漏出。邻「错渠道滥用」，不是改公开尺。
- **P80**：员工价。邻「员工资格码」，不是批发净。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正批发净≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P82。禁止编华住批发/GDS SOP、默认批发折扣 %、佣金 Fact、Consortia 10%、699。禁止开停车费专剧。**
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。
