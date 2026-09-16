# Staff / Employee Rate vs Public BAR｜员工价/付费员工折扣是资格闸码，不是公开 BAR

> 资产：T-Employee / T01-08（员工价/付费员工折扣被允许改什么）· **≠ T-Staff**（`theory/staff-capacity-vs-demand.md` = P63 人手产能顶）· T-Corp / T-Fee / T-Service-Recovery / T-Deposit 同族（尺子 ≠ 按钮）
> 路径：`theory/staff-employee-rate-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-09-01
> 知识类型：Theory + Association Methodology + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *Configuring Rate Strategies*：Employee discount rate code **"STAFF"** + When Times Sold Reaches Close — **§82 指针 / §105 升核**；STAFF Times Sold Close ≠ BAR）；A Vendor PMS（OPERA Cloud 26.2 *Configuring Rate Codes / Financial Details*：Complimentary / House Use 勾选 = 统计跟踪；Negotiated = 须挂档案 — **§82 / §105 升核**；Comp/HU/Negotiated ≠ BAR Type）；A Vendor PMS（OPERA 5.6 *gi_c_h*：在店 Comp **或** House Use 由 Rate Header 勾选判定 — **§82 / §105 升核**）；A Vendor PMS（OPERA Cloud 26.2 *Managing Profile Negotiated Rates*：协议码挂档案后 LTB 才报价 — **§82/§104 指针 / §105 升核**）；A Vendor PMS（Protel Air *Advanced pricing*：House use = employees overnight type，similar to Complimentary；≠ Rack / Normal — **§83 指针 / §105 升核**）；A Vendor PMS（OPERA 5.6 *Rate Categories*：码归入 category 供查询分组，例 DISCOUNT — **§105 新开**；分类桶 ≠ BAR Type；互补 §77 Cloud Rate Categories/Classes）；S 协会报送（STR Historical：gratis rooms to employees/owners/FAM **Exclude from Rooms Sold** — **§15/§82 / §105 升核**）；A 协会词条（HSMAI BAR = non-qualified, publicly available — **§67 / §105 升核**）；C 品牌/协会（Marriott Explore by Marriott Bonvoy：associates + eligible family 资格闸 — **§83 / §105 升核**）；C 协会项目页（AHLA Hotel Employee Travel Program：资格闸；40%+ **不进中国 Fact** — **§82 / §105 升核**）
> 配套：`advisor-playbooks/staff-employee-rate-vs-bar.md`（P80 过程）· `recommendations/dont-rewrite-bar-for-staff-rate.md`（主卡复用，不重写）· `metrics/staff-employee-rate-vs-public-bar.md`（轻指标；**无默认员工折扣 % / 配额 Fact**，公式不重写）· `cases/sim-2026-staff-rate-sat.md`（Simulation）
> 交叉：P23 会员围栏 ≠ 本卡「员工价写成新公开 BAR」· P47 Comp/HU $0 占用 ≠ 付费员工折扣改尺 · P71/T-Corp 年标/企业协议 · P79/T-Fee 强制费/all-in · P63/T-Staff 人手产能顶（同词 staff、对象不同）· P05 真弱 leftover · P01 Ahead · P45 早会 · T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Extra（假尺子一族）
> 问题树：§87「员工价/Staff·Employee rate 不是公开 BAR」（过程路由已够；本卡给「为什么 STAFF Times Sold / Comp·HU 勾选 / Negotiated 档案闸 / Protel House use / STR Exclude / Explore 资格闸不是公开 BAR、资格码过程不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / OTA / 员工码 / Rate Strategies，不自动改价，不代改 STAFF 策略、不代发员工价。**
> 状态：**理论 drafted**（2026-09-01 08:17 CST）。**不写 P88，不写新剧本，不开 Pet/AAA。** 员工价 leftover **已关为 P80**（10:17），本卡只加深 WHY。禁止：编华住员工价 SOP / 默认员工折扣 % / 配额 Fact / 佣金% / 699 / Walk $；一夜 −15%；BAR→399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏 / STAFF 策略屏就是公开价」；把 14/399/799 当市场 Fact；把 OPERA Times Sold=3 / AHLA 40%+ 当中国 Fact；重写 `staff-employee-rate-vs-public-bar.md` 公式；重写 `theory/optimization-advise.md` 正文；重写 P01–P87 正文（P80 仅头一行理论指针 + 修订行；邻卡仅文末一行）；操作 PMS；把本卡叫成 **T-Staff**；造 systems/*.md。

---

## 0. 一句话

**员工价 / Staff·Employee rate（含付费员工折扣）是资格闸码 / 付费员工折扣 / 员工旅居产品，不是公开灵活 BAR。**
厂商能把员工折扣挂在 Rate Strategies 的 **STAFF** 码、能按 Times Sold Close、能在 Rate Code Financial Details 勾 Complimentary / House Use / Negotiated、能在 Protel 配 House use（employees overnight）、能把码归入 Rate Category/Class 查询桶、能在品牌 Explore 页要求 associate 资格——只证明「有资格闸 / 关码 / 统计跟踪过程」，不证明「公开灵活价该跟到员工地板」。协会能把 BAR 钉成 non-qualified publicly available、能把无关员工 gratis 从历史 Sold 剔除——只证明「公开尺定义」与「$0 Comp 上报口径」，不证明「付费员工折扣 = BAR」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏 / STAFF 策略屏就是公开价」把 BAR 改写成 399。会员围栏 → **P23**。$0 Comp/HU → **P47**。年标 → **P71**。费/all-in → **P79**。人手产能顶 → **P63**（**T-Staff**，不是本卡）。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店员工价 SOP / 默认员工折扣 % / 配额 Fact / 华住字段 = **全部 NV**。员工价 leftover **已关**。Pet/AAA 仍停车。

```
Naive（禁止）     员工价就是我们的公开价；员工价太低所以 BAR 砍 399；
                  员工住满了砍公开；ADR 被员工折扣看脏所以 dump；STAFF 策略屏就是公开价表
本卡              先拆三把尺（公开 BAR / Staff·Employee 付费折扣·资格闸 / Guest-seen「员工价感觉像房价」或 $0 Comp→P47）。
                  OPERA STAFF Times Sold + Comp/HU/Negotiated + Protel House use + Rate Category + Explore ≠ 定价权。过程走 P80。
```

完成标准：用户说「员工价就是市场价改 BAR」「员工价太低所以跟」「员工住满了砍公开」「ADR 被员工折扣看脏砍 BAR」「STAFF 策略屏就是公开价」→ Situation 写成**三把尺 + Pace/Remaining + 这是资格码还是要改公开**；Diagnosis 写成员工价不是公开 BAR、配置屏/关码不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、员工成交是否仍关在资格码、员工折扣%/配额是否仍 NV。**不 dump 399、不把员工地板写成新 BAR、不写 P88。**

顾问必须能直接说的三句（与 P80 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问这是付费员工折扣码 / 员工旅居资格闸 / $0 员工 Comp·HU，还是要改公开灵活 BAR。员工价 ≠ 公开尺。本店员工价 SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开」。
3. 会员围栏走 P23。$0 Comp/HU 走 P47。年标走 P71。费/all-in 走 P79。人手产能顶走 P63（T-Staff）。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从员工价改写公开 BAR）。
```

独立默认（本库 Hypothesis）：**员工价 / 付费员工折扣回答的是「这张员工资格码怎么报价、何时按 Times Sold 关、ADR/OCC 有没有被员工桶读脏」，不是「今晚公开灵活该卖多少」。** 它回答「STAFF 码卖多少、资格闸是否过」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止把员工地板写成新 BAR。禁止编默认员工折扣 %。禁止编配额 Fact。禁止编华住员工价 SOP。禁止编 699。禁止编 Walk $。禁止把 OPERA Times Sold=3 / AHLA 40%+ 当中国 Fact。**

---

## 1. 三把尺：公开 BAR / Staff·Employee paid discount·资格闸 / Guest-seen「员工价感觉像房价」或 $0 Comp→P47

顾问问题不是「系统里有没有一个员工价 / STAFF 策略屏」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格、non-qualified） | Ahead Hold；真弱才 P05（仍这把尺） | 当成员工地板；砍到「员工价就是市场价」 |
| **Staff·Employee paid discount·资格闸** | OPERA STAFF / 员工折扣码；Times Sold Close；Negotiated 档案闸；品牌 Explore 资格；Protel 付费员工类码 | 可留在资格码层；观察 gap；不当新 BAR | 写成公开 BAR；用 399 锚市场 |
| **Guest-seen「员工价感觉像房价」或 $0 Comp** | 客人/销售看到的「员工价好像就是房价」；或 $0 Comp/HU（过程 **P47**） | 窗/展示层 → 分看；诊断：员工挂牌 ≠ 已成新 BAR；$0 → P47 | 把「员工价/免费房」读成「BAR 就是这个价」 |

```
Public_BAR               = 799     # Simulation：公开灵活
Staff_employee_paid      = 399 或更高/更低  # Simulation：付费员工折扣码（不是新 BAR）
Guest_seen_or_comp0      = 「员工价好像房价」或 $0 Comp/HU  # Simulation：展示层 / P47 口径
Gap                      = Public_BAR − Staff_employee_paid   # 尺在 metric，不重写；不是必须折扣指令
Layer                    = public BAR | staff/employee paid discount / eligibility gate | guest-seen staff-as-price | $0 Comp/HU→P47
```

**799 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住/中国员工价默认。OPERA Vendor Times Sold=3、AHLA 40%+/25%+ = **Vendor/协会项目示意，NOT China Fact / 不进店规 / 不进 sim 当推荐数。**

混淆三把尺会同时拧坏 **公开尺** 与 **资格码层**：把「员工价 399」读成「我们 BAR 就是 399」，或把「员工住满了」读成「公开栏必须 dump」，或把 STAFF 策略屏 / Rate Category 桶混成公开价表。$0 员工 Comp/HU 是另一把：上报口径走 **P47**，不是本卡主刀。

HSMAI BAR（A，§67/§105）：BAR = **the non-qualified, publicly available rate**。**方向采用：员工价不是 BAR。**

---

## 2. Rate Strategies / Rate Codes / Negotiated / Protel House use / Rate Category / Explore 是过程，不是定价权

厂商把「员工价」做成**资格码 + 关码策略 + 统计勾选 + 档案闸 + 分类查询桶**。没有一家被打开的官方页把它写成「员工价默认等于 BAR」或「员工住满就必须改写公开灵活」。

| 源 | 厂商/协会实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.2 *Configuring Rate Strategies*（§82/§105） | 例：Employee discount rate code **"STAFF"**；When Times Sold Reaches = 3 then Status = Close（不足则 Open） | **可按售出次数关的员工折扣码。** ≠ BAR Type。Vendor「3 间」**不进中国配额 Fact** |
| OPERA Cloud 26.2 *Configuring Rate Codes · Financial Details*（§82/§105） | Complimentary = 跟踪免费入住统计；House Use = 跟踪内部/行政入住；Negotiated = 仅作协议价、须挂档案 | **勾选 = 统计/资格闸，不是 BAR Type** |
| OPERA 5.6 *gi_c_h*（§82/§105） | 在店 Comp 报把 Complimentary **或** House Use 勾选的房价码列入 | **Comp OR House Use = 报表过滤，不是公开尺** |
| OPERA Cloud 26.2 *Managing Profile Negotiated Rates*（§82/§104/§105） | Negotiated = 与客户互相同意的合同价，挂在档案上；LTB 只向已挂该码的档案报价 | **档案闸 ≠ 公开灵活栅格** |
| Protel Air *Advanced pricing*（§83/§105） | House use similar to Complimentary；represents hotel internal overnight stays（employees who stay overnight）；≠ Rack / Normal | **员工内部过夜类型 ≠ Rack。** $0 HU 过程仍 **P47** |
| OPERA 5.6 *Rate Categories*（§105 **新开**） | 码可归入 category（例 DISCOUNT）供查询；agent 可按 category 而不是 rate code 显示 | **分类查询桶 ≠ BAR Type**（互补 §77 Cloud Categories/Classes） |
| OPERA Cloud 26.2 *Configuring Rate Categories / Classes*（§77 指针 / §105 升核） | Category 例 GOVT / Packages；Class 例 Negotiate / Wholesale / Discounted；LTB 查询分组 | **类/档 ≠ BAR Type** |
| CoStar STR *Historical Benchmarking*（§15/§82/§105） | Exclude：与促销/合同无关的 complimentary（**gratis rooms provided to employees, owners and familiarization tours**） | **员工 $0 免费房不进历史 Sold** = P47 口径；**付费员工折扣仍 ≠ 公开 BAR**。进不进 Sold = 上报口径 ≠ 改尺令 |
| HSMAI Academy *BAR*（§67/§105） | BAR = non-qualified, publicly available | 员工价 **不是 BAR** |
| Marriott *Explore by Marriott Bonvoy*（§83/§105） | associates at managed hotels + eligible immediate family 才 eligible | **资格闸 ≠ 公开尺** |
| AHLA *Hotel Employee Travel Program*（§82/§105） | 员工旅居资格闸；酒店可管库存；40%+ **不进中国 Fact** | 只证明「员工价是资格产品，不是公开尺」 |

```
画面：员工价就是市场价改 BAR / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏 / 销售说「STAFF 策略屏就是公开价」
Naive：BAR 就是那个员工价；能配 Times Sold / 勾选 / 分类桶所以改尺
本卡：STAFF Times Sold、Comp/HU/Negotiated、Protel House use、Rate Category、Explore 都是过程。定价权在公开 BAR + Pace，不在员工码按钮。
```

```
OPERA Rate Strategies STAFF + Times Sold Close  → 员工折扣码关码过程
OPERA Rate Code Comp / House Use / Negotiated   → 统计勾选 / 档案闸
OPERA gi_c_h                                    → Comp OR HU 报表过滤
OPERA Profile Negotiated Rates                  → 档案闸报价
Protel House use                                → 员工内部过夜类型
OPERA Rate Category / Class                     → LTB 查询桶
STR Exclude employee gratis                     → $0 Comp 上报口径（P47）
Marriott Explore / AHLA employee travel         → 资格闸（C）
Public BAR                                      → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住员工价 SOP / 本店默认员工折扣 % / 配额 Fact / 佣金% = **NV，不编。** UI 字段是 OPERA/Protel/品牌的，不是本店报表名。不把 Times Sold=3 / AHLA 40%+ 写成店规。

---

## 3. 六形（A–F）映射 P80：员工价信号不是改写公开 BAR 的许可证

过程六形走 **P80**，本卡给 WHY，**不重复 P80 正文**。

| 形 | 看起来 | 实际 | 默认动作（过程仍 P80） |
| --- | --- | --- | --- |
| **A 员工价 = 公开 BAR** | 「员工价就是我们的公开价 / 市场价」 | 用资格闸员工码当尺 | **拆员工码 vs 公开**；Hold 公开 BAR |
| **B BAR→399「员工价太低所以跟 / 员工住满了砍公开」** | 「员工价低、员工住满了，BAR 改 399」 | 把员工地板写成战略尺 | **拒绝 BAR→399** |
| **C 员工房抬 OCC / 拉低 ADR → dump BAR** | 「员工把 OCC 撑满了 / ADR 被员工折扣看脏，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看付费员工折扣 vs $0 Comp·HU vs 公开**；STR：无关员工免费 Exclude from Sold |
| **D 误入会员 / Comp-HU / 年标 / 费 / 产能** | 「会员也便宜 / 员工免费房 / 对齐协议 / 含费 / 人手不够」 | 对象是别的剧本 | **P23** / **P47** / **P71** / **P79** / **P63** |
| **E Rate Category/Class 或 Negotiated/STAFF 码当 BAR Type** | 「STAFF 分类桶 / 策略屏 / 协议勾选就是公开价表」 | 把码/类/档案闸当成 BAR | **码/类/Negotiated ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按员工地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

| 读法 | 对 | 错 |
| --- | --- | --- |
| Ahead + 员工价看起来更低 | 需求仍强；公开尺 **Hold**；员工成交留在资格码 | 「市场认员工地板，BAR 改 399」 |
| 员工住满、公开 BAR 也动 | 资格码占用 ≠ 必须砍公开尺；公开仍 Pace 闸 | 用「员工住满」证明必须 dump 公开尺 |
| ADR 因员工折扣显得怪 | **形 C**：读桶；分看公开 vs 付费员工折扣 vs $0 Comp | 「已经看脏了所以砍 BAR」 |
| STAFF / Rate Strategies / Category 还能配 | **形 E**：配置/关码 ≠ BAR Type | 「屏/类/勾选就是新公开价表」 |
| Behind + 剩余厚 | **P05**：可有窗围栏；仍不从员工地板改写 BAR | 一夜 −15%；把员工地板永久化 |

```
Staff rate looks like a market price  → 资格码信号（可加强拆尺 / Hold 公开）
Public BAR                            → 仍由 Pace / Remaining 定
Naive                                 → 「员工价太低 / 员工住满所以 BAR→399」
本卡                                  → 员工价 ≠ 改尺令。Ahead 仍 Hold 公开 BAR。
```

---

## 4. Advise 默认：员工价被允许改什么

用户原话：「员工价就是市场价，BAR 改成 399」「员工价太低所以跟」「员工住满了所以砍公开」「ADR 被员工折扣看脏了」「STAFF 策略屏就是我们的公开价」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是付费员工折扣码 / 员工旅居资格闸 / 客人「员工价感觉像房价」/ $0 Comp；
            ②拟议是「改尺 / 员工价太低所以跟 / 员工住满了砍公开」还是「员工码留在资格闸、Hold 公开」；
            ③Pace / Remaining；这是资格码层还是要改公开尺。
  缺员工折扣% / 配额 / 本店员工价 SOP → 问，不编华住字段。

Diagnosis
  员工价已经挂在资格码层之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 改尺 399 vs 屏当尺 vs 会员 vs Comp vs 年标 vs 费 vs 产能 vs 真弱）
    (2) 问句（§5）
    (3) 默认路径：Ahead → 拆资格码 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P23 / P47 / P71 / P79 / P63 / P05 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；一夜 −15%；发明华住员工价 SOP / 默认员工折扣 % / 配额 Fact。
  **Ahead 夜：员工价不被允许改公开 BAR。**

What To Watch
  公开 BAR 是否仍 Hold；STAFF/员工码是否仍关在资格闸（可按 Times Sold 关）；24h 公开 Pickup vs 员工码预订（分看）
  不是「Rate Strategies 把 STAFF Close 了就算改完 BAR」
```

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR；围栏须有截止日。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 P88。**

---

## 5. What To Watch / Need Verification

顾问要问的（ask-list · 全部 NV，本卡不代答）：

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的是 **付费员工折扣码 / 员工旅居资格闸**，还是 **$0 Comp/HU**，还是要把 **公开 BAR 改成那个地板**？ | 混用尺；把资格码当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与员工价/付费员工折扣各是多少？ | 会编默认 %；或把 399 当必须 | **NV** |
| 3 | 是否 OPERA STAFF / Times Sold / Negotiated？是否其实是会员（→P23）/ Comp（P47）/ 年标（P71）？ | 把配置/关码写成「已成新 BAR」 | **NV** → 先拆资格码，不编员工 SOP |
| 4 | 拟议是员工码留在资格闸、Hold 公开，还是改写公开尺 / 员工价太低所以跟 / 员工住满了砍公开？ | 误入本卡 / P23 / P47 | **NV** |
| 5 | 本店员工价 SOP / 华住字段 / 默认员工折扣 % / 配额怎么走？ | 发明华住 SOP；或把 Times Sold=3 / AHLA 40% 当店规 | **NV。不编。** |

补充可问（同样 NV）：是不是会员围栏（→P23）；是不是 $0 Comp/HU（→P47）；是不是年标（→P71）；是不是费/all-in（→P79）；是不是人手产能顶（→P63 / T-Staff）；真 Behind leftover（→P05）。**员工折扣 %、配额 Fact、佣金%、699、Walk $、华住员工价 SOP：不编，问。**

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-EMP-01 | 本店员工价 SOP / 是否真有 OPERA STAFF / Times Sold / Negotiated / Protel House use | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-EMP-02 | 本店默认员工折扣 % / 配额 Fact / 佣金% | **NV。** 员工价不是改尺令 |
| NV-EMP-03 | 399 来源（员工话术 / ADR 抱怨 / 「住满了」） | **NV。** 先 Hold 公开 BAR |
| NV-EMP-04 | Times Sold=3 / AHLA 40%+ 是否被误当店规 | **禁止采用为 China Fact。** |
| NV-P80-01… | P80 已挂（华住员工价 / 默认折扣 % / 配额） | 仍 NV |

Watch：公开 BAR 是否仍 Hold；员工成交是否仍关在资格码；OCC/ADR 是否被员工桶读脏却想砍尺；误入 P23/P47/P71/P79/P63 是否已移交。

---

## 6. 边界：本卡 ≠ P23 ≠ P47 ≠ P71/T-Corp ≠ P79/T-Fee ≠ P63/T-Staff ≠ P05 ≠ 假尺子同族

七边都在「看起来更低 / 销售要跟」附近，对象不同。塌成「反正都便宜所以砍」会开错杠杆。

| | **P80 / 本卡（重置公开尺=员工地板）** | **P23（会员）** | **P47（Comp/HU）** | **P71/T-Corp（年标）** | **P79/T-Fee（费）** | **P63/T-Staff（产能）** | **P05（真弱）** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到付费员工折扣 / 员工旅居 | 会员围栏价 | $0 Comp / House Use | 企业年标/协议 | 强制费/all-in | 保洁/人手吞吐顶 | 真 Behind leftover |
| 尺 | 公开 **BAR** | 会员 vs 公开 | Comp 库存/$0 | 公开 BAR vs 年标 | 公开 BAR vs 费层 | 可交到达 vs 产能 | 公开 BAR（可围栏） |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；围栏可低 | 不按 Comp OCC 涨/砍 | Hold；拒对齐冲量 | Hold；费留费表 | 收口到达 + Hold | 仅真弱才围栏 |
| 禁止 | 399 作新 BAR；员工价当市价 | 把会员当员工改尺 | 把 $0 当付费员工折扣 | 把年标当员工个人折扣 | 把费当员工价 | 把产能顶当员工价改尺 | 一夜 −15%；把员工地板永久化 |

顾问第一闸永远是：**这是要改本店公开尺，还是会员，还是 $0 Comp，还是年标，还是费，还是人手产能，还是真弱？** 会员 → P23。$0 Comp/HU → P47。年标 → P71。费/all-in → P79。人手产能顶 → **P63 / T-Staff**（同词 staff，对象是 HK 产能，不是员工房价）。真弱 leftover → P05。要把付费员工折扣 / STAFF 策略叫 BAR / 要员工当地板 / STAFF 屏所以跟 → 本卡 / P80。

假尺子一族（屏幕上的资格工具被当成定价按钮）：

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Corp** | 年标 499 / 对齐 / 冲量 | 公开 BAR + Pace |
| **T-Flash** | 「闪促 399 / 卖爆了」 | 公开 BAR + Pace；有窗关码 |
| **T-BRG** | 「截图 399 / 贵就赔」 | 公开 BAR + Pace；单笔履约 ≠ 改尺 |
| **T-Live** | 「直播间 399 / 主播价」 | 公开 BAR + Pace；橱窗不是尺 |
| **T-Fee** | 「OTA 总价贵 / ADR 被费看脏」 | 公开 BAR + Pace；费/税/all-in 不是 BAR |
| **T-Wholesale** | 「批发价才是市场价」 | 公开 BAR + Pace；渠道净不是 BAR |
| **T-Stored** | 「储值才是市场价」 | 公开 BAR + Pace；付款/负债不是 BAR |
| **T-Hurdle** | 「门槛价才是市场价」 | 公开 BAR + Pace；可售门不是 BAR |
| **T-Deposit** | 「押金才是市场价」 | 公开 BAR + Pace；付款/hold 不是 BAR |
| **T-Service-Recovery** | 「服务失败所以砍 / 补了差价所以新尺」 | 公开 BAR + Pace；folio 补偿不是 BAR |
| **T-Staff** | 「人手不够所以砍 / 产能顶当弱需求」 | 收口到达 + Hold；**产能 ≠ 员工房价** |
| **本卡 T-Employee** | 「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏 / STAFF 屏就是公开价」 | **公开 BAR + Pace**；不是员工资格码当 BAR 令，也不是 dump 399 令 |
| **T-Extra** | 「三人住太贵改 BAR / 加床拉高均价所以跟 / 儿童加床污染 ADR 砍 BAR / 人数阈值表就是公开价」 | **公开 BAR + Pace**；不是加项当地板令，也不是 dump 399 令 |

**命名钉死：T-Employee = 员工价/付费员工折扣；T-Staff = P63 人手产能。不要混叫。**

与 **T-Corp / T-Fee / T-Service-Recovery / T-Deposit** 的边界：年标是账户协议；费是费层/展示加总；服务补偿是本住 folio posting；押金是住前付款/hold。本卡是 **付费员工资格码 / 员工旅居闸**。对象不同，假尺子同族。

常见误读：

| 误读 | 实际 |
| --- | --- |
| 员工价就是公开 BAR | BAR = 无资格公开灵活。员工价是资格闸 |
| 员工价太低所以 BAR→399 | 资格码地板 ≠ 战略尺。拒绝 |
| 员工住满了所以砍公开 | 资格码占用 ≠ Brand.com 栅格 |
| ADR 被员工折扣看脏所以 dump | 读桶 / STR Exclude 是 READ；不是砍尺令 |
| STAFF 策略屏 / Rate Category 配了所以公开尺改完 | 配置/关码过程 ≠ BAR Type |
| Comp/HU 勾选了所以公开跟员工价 | 统计跟踪 ≠ 改写公开灵活 |
| Negotiated 挂了档案所以公开改尺 | 档案闸 ≠ BAR Type |
| Protel House use 就是公开 Rack | 员工内部过夜类型 ≠ Rack/Normal |
| Times Sold=3 就是我们配额 | Vendor 示意 **NOT China Fact** |
| AHLA 40%+ 就是店规 | 协会项目页 **不进中国 Fact** |
| 会员也便宜所以跟员工地板 | **P23** |
| 员工免费房撑 OCC 要涨或砸 | **P47** |
| 对齐年标所以跟员工价 | **P71 / T-Corp** |
| 含费总价+员工价所以砍 | **P79 / T-Fee** |
| 人手不够所以跟员工地板 | **P63 / T-Staff**（产能，不是员工房价） |
| 服务补偿也低所以跟员工地板 | **P87 / T-Service-Recovery** |
| 押金也像员工价所以跟 | **P86 / T-Deposit** |
| 反正空，按员工地板冲量并改 BAR | **P05** 可有窗围栏；仍不改写 BAR；禁一夜 −15% |
| 编一套华住员工价 SOP 就能 Advise | **禁止。** 默认员工折扣 % / 配额 NV |
| 把本卡叫成 T-Staff | **禁止。** T-Staff = P63 产能；本卡 = **T-Employee** |

---

## 7. Simulation（诊断例，不是新店 Fact）

复用 P80 `cases/sim-2026-staff-rate-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 799
# （399 = 被拒绝的 dump；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
付费员工折扣 / STAFF         = 399（不是新 BAR；资格码 Simulation）
销售拟议                     = 「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开 / ADR 被员工折扣看脏 / STAFF 屏就是公开价」砍 BAR 到 399
```

读法（与 P80 同句）：399 是被拒绝的员工价改尺，不是 BAR。Advise：拆公开 vs 付费员工折扣；**Hold 779–799 首选 799**；拒 dump **399**；员工成交留在资格码；员工折扣 % / 配额 **NV**。不要用 OPERA Times Sold=3 / AHLA 40%+ 当 sim 数字或店规。
**180 / 14 / 399 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住/员工价默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。**

---

## 8. 证据（2026-09-01 08:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Employee discount rate code STAFF 可按 Times Sold Close | **A Vendor PMS** | **Known 关码过程。** ≠ BAR Type | OPERA Rate Strategies（**§82/§105 升核**） |
| Comp / House Use 勾选 = 统计跟踪；Negotiated 须挂档案 | **A Vendor PMS** | **Known 勾选/档案闸 ≠ BAR** | OPERA Rate Codes Financial Details（**§82/§105**） |
| gi_c_h = Comp OR House Use 报表过滤 | **A Vendor PMS** | **Known 报表过滤 ≠ 公开尺** | OPERA 5.6 gi_c_h（**§82/§105**） |
| Negotiated 挂 profile 后 LTB 才报价 | **A Vendor PMS** | **Known 档案闸 ≠ 公开栅格** | OPERA Managing Profile Negotiated Rates（**§105 升核**） |
| Protel House use = employees overnight type ≠ Rack/Normal | **A Vendor PMS** | **Known 类型 ≠ Rack** | Protel Advanced pricing（**§83/§105**） |
| Rate Categories 分组查询（例 DISCOUNT） | **A Vendor PMS** | **Known 分类桶 ≠ BAR** | OPERA 5.6 Rate Categories（**§105 新开**）+ Cloud Categories/Classes（§77/**§105 升核**） |
| gratis rooms to employees/owners/FAM Exclude from Rooms Sold | **S 协会报送** | **Known $0 Comp 口径 ≠ rewrite** | STR Historical（**§15/§82/§105**） |
| BAR = non-qualified publicly available | **A 协会** | **Known 公开尺定义** | HSMAI BAR（§67/**§105 升核**） |
| Explore / AHLA employee travel = 资格闸 | **C** | **Known 资格产品方向；% 不进 Fact** | Marriott Explore + AHLA PRLA（**§83/§82/§105**） |
| Ahead Hold 公开 BAR；拒 399 改尺 | **B / Hypothesis** | 本库 P80 + Pace 闸 | — |
| 本店员工价 SOP / 华住字段 / 默认员工折扣 % / 配额 Fact / Times Sold=3 China Fact / AHLA 40%+ 店规 | — | **NV。不编。** | — |

本小时新开：OPERA 5.6 *Rate Categories*（分类查询桶 ≠ BAR；互补 §77）。升核/复核：OPERA Rate Strategies + Rate Codes Financial Details + gi_c_h + Profile Negotiated Rates + Protel House use + Cloud Rate Categories/Classes + STR employee gratis Exclude + HSMAI BAR + Marriott Explore + AHLA Employee Travel。华住员工价 SOP **未开、不编**。**不规定 P88。**

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-09-01 08:17 CST | 首版。T-Employee = 员工价/付费员工折扣是资格闸码，不是公开 BAR。**≠ T-Staff（P63 产能）**。三把尺；STAFF Times Sold/Comp·HU/Negotiated/Protel House use/Rate Category/Explore≠定价权；六形 A–F 映射 P80；P23/P47/P71/P79/P63/P05 孪生；假尺子一族。**不写 P88。** 14/399/799 Simulation only。399 = 被拒绝的 dump。员工价 leftover 已关。 |

---

## 10. 交叉（不改 P01–P87 正文；P80 仅头一行 + 修订行，邻卡仅文末一行）

- **P80** `advisor-playbooks/staff-employee-rate-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-rewrite-bar-for-staff-rate.md`：复用，不重写。
- **轻指标** `metrics/staff-employee-rate-vs-public-bar.md`：公开 BAR vs 员工价 gap；无默认员工折扣 %。本卡不重写公式。
- **P23**：会员围栏。本卡 / P80 = 要把公开尺写成/跟到员工地板。
- **P47**：计划 Comp / House Use。邻「$0 占用」，不是付费员工折扣。
- **P71 / T-Corp**：年标/企业协议。邻「账户协议」，不是员工个人折扣。
- **P79 / T-Fee**：强制费/all-in。邻「费层」，不是员工价。
- **P63 / T-Staff**：人手产能顶。同词 staff，对象不同；**不要把本卡叫 T-Staff**。
- **P05 / P01 / P45**：Ahead Hold 公开 BAR；真弱才 leftover（有窗围栏）；早会一个动作通常是纠正员工价≠BAR + Hold，不是改尺。
- **T-Share / T-Parity / T-Package / T-Corp / T-Flash / T-BRG / T-Live / T-Fee / T-Wholesale / T-Stored / T-Hurdle / T-Deposit / T-Service-Recovery / T-Extra**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 P88。禁止编华住员工价 SOP、默认员工折扣 %、配额 Fact、佣金%、699、Walk $。禁止把 OPERA Times Sold=3 / AHLA 40%+ 当中国 Fact。禁止开 Pet/AAA 专剧。禁止重写 optimization-advise。禁止造 systems/*.md。禁止把 T-Employee 叫成 T-Staff。**
> 交叉指针（2026-09-01 16:17，不改正文）：假尺子同族下一张 **T-Extra** `theory/extra-person-vs-bar.md`（加床/Extra Person ≠ 公开 BAR）。过程仍 **P78**。不规定 P88。
