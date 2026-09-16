# Theory｜OTB / Pickup / Booking Pace

> 资产：Wave2 理论卡  
> 路径：`theory/otb-pickup-pace.md`  
> 能力层级：Calculate → Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 配套指标卡：`metrics/otb.md` `pickup.md` `pace.md` `inventory.md`  
> 配套诊断：`diagnosis/problem-tree.md` §4–§7  
> 配套过程：`decision-framework/advisor-process.md`  
> 禁止：用绝对 OTB% 判断快慢；编造「行业标准 14 天应到 X%」；整段摘录教材。

---

## 0. 一句话

OTB 是位置，Pickup 是速度，Pace 是相对同一 DTA 基准的快慢。三者缺一不可。**「距离入住 14 天、OTB 60%」单独不能回答快还是慢**——必须放到该店该 DOW 该季节的曲线上，再叠加当前 Pickup。

---

## 1. Theory（理论）

预订不是在入住日突然出现的，而是沿 **Booking Curve / fill curve** 随 DTA 缩短而累积。每一天的确认预订快照构成位置；相邻快照之差构成速度；把今天的位置放到「去年同一里程碑 / 历史同 DOW 曲线 / Budget / Forecast」上，才得到相对进度。

这个理论回答三件不同的事：

| 问题 | 用哪个 | 不回答什么 |
| --- | --- | --- |
| 现在账上有多少？ | OTB（位置） | 快不快、最终好不好 |
| 这段时间账上变了多少？ | Pickup（速度） | 绝对高不高、相对曲线偏不偏 |
| 相对「这时候该在哪」是快还是慢？ | Pace（相对位置） | 明天还会不会来 |

行业公开用法与此一致：

- STR Forward STAR 把未来日拆成 **Occupancy on the Books**（确认在手入住）和 **Pickup**（两次采集之间的预订变化），并允许对市场 / Comp Set / STLY 比较。来源：CoStar Forward STAR 指南与公开说明（2026-08-20）。证据级 **A**。
- 多家公开 RM 培训 / 厂商文把 Pickup 定义为指定 Stay Date 在两张快照之间的净变动，把 Pace 定义为相对历史基准（常见 STLY）的累积速度。来源：Lighthouse 公开文（2026-02-09 页）、Hospitality Net 转载、Peaqplus RM Academy 公开课页。证据级 **B**（多源互证定义；不是官方法）。
- STR Glossary 区分 **Date-to-Date**（日历日对齐）与 **Day-to-Day**（星期对齐）。证据级 **S**。Pace 该用哪一种，本店习惯仍标 Need Verification（NV-03）。

**核心推论：** 没有曲线的 60% 是无单位位置。商务店周二 DTA=14 的 60% 和度假店国庆前 DTA=14 的 60%，含义可以相反。

---

## 2. Model（模型）

把一条 Stay Date 看成一条随 Booking Date 推进的轨迹：

```
Booking Date ──────────────────────────── Stay Date
     DTA = Stay − Booking

每天一张 OTB 快照
     OTB_t  = 位置（Rooms / OCC / ADR / Revenue 四维）
     Pickup_N = OTB_t − OTB_{t−N}          速度
     Pace     = OTB_t(DTA=d) − Benchmark_t(DTA=d)   相对位置

剩余路径：
     Remaining ≈ Available_to_sell − OTB Rooms
     Expected remaining fill = 历史最终 OCC − 历史同 DTA OTB
     当前速度能否走完 = Remaining / 近期日均 Pickup   → Days-to-Sellout
```

三角模型（顾问默认）：

```
            Pace（相对曲线）
           /              \
          /                \
     OTB 位置 ---------- Pickup 速度
```

| Pace \ Pickup | Fast | 匹配曲线后半段 | Slow |
| --- | --- | --- | --- |
| Ahead | 保护库存 / 涨或关低价 | 盯，通常不促销 | 可能早已订完在停；先核一团/关库存 |
| On | 局部热（房型/渠道） | **Hold** | 窗口错或刚涨价；先等 48h |
| Behind | 在追 → 可 Hold 或只开渠道 | 曲线晚 → **Hold**（见 hold 卡） | 才进入促/降鉴别 |

「OTB 低」只是左下角的一个入口，不是处方。

---

## 3. Formula（公式）

与 `metrics/` 已落地公式一致，不另起一套。

### 3.1 OTB（B；Forward STAR 概念为 A）

```
OTB Rooms     = 该 Stay Date 在该 Booking Date 仍有效的确认房晚
OTB OCC       = OTB Rooms / Available          # 声明 Available
OTB ADR       = OTB Room Revenue / OTB Rooms
OTB Revenue   = Σ 确认客房收入
```

STR Forward STAR（A，2026-08-20 核）：酒店报送未来 90 日（周报）/ 365 日（月报）的 **Adjusted Rooms Available** 与 **Rooms Booked**；回报 Occupancy on the Books 与 Pickup。

- Rooms Booked：因预订已从 Adjusted Available 扣减的房。含产生收入的预订、与促销/合同绑定的免费夜、complimentary / house use / owner-occupied、day-use。不含未扣库存的 tentative / option / 未入账 allotment。
- 取消进入负 Pickup，不另造科目。
- Adjusted Available **排除**装修、长期关房、整店关闭日、OOO、soft opening 未开部分；**可计入**为降成本主动关的房。这与历史 STAR「短期 OOO 不扣报告房量」不同。**禁止把 Forward OCC 和历史 STAR OCC 直接比。**

顾问店内默认（B）：只计确认；tentative 单列。Need Verification：本店 PMS 是否把 complimentary / 团队暂控算进 OTB（NV-02 的一部分）。

### 3.2 Pickup（B；Forward STAR 采集差为 A）

```
Pickup_N = OTB_today − OTB_{today−N}
```

标准窗口：1D / 3D / 7D / 14D / 30D。分别对 Rooms、OCC 点、ADR、Revenue。

净 Pickup（顾问首选，B）：

```
Net Pickup = 新订 − 取消 − 提前离店 + 延住 ± 改期进出 ± 团队 wash
```

STR Forward STAR 公开句：Pickup = 两次数据采集之间的预订变化；取消表现为负 Pickup（A）。  
店内报表有的只报毛新订。Need Verification：本店是净还是毛（NV-02）。

派生（过程文件已用，B）：

```
Pickup per day     ≈ Pickup_N Rooms / N
Days-to-Sellout    = Remaining / Pickup per day     # 分母为 0 → 写「本窗无成交，不能用此式」
```

Days-to-Sellout 是压力检查，不是预言。未扣速度衰减、一团、取消。标 Hypothesis。

### 3.3 Pace（B，无单一 STR 历史官方式）

```
Pace_vs_STLY (房间或 OCC 点) = OTB_now(DTA=d) − OTB_STLY(DTA=d)
Pace_%                      = (OTB_now / OTB_STLY − 1) × 100
```

同时对 Budget、Forecast、历史同 DOW 曲线（建议剔活动日）各算一条。

对齐必须声明（STR Glossary，S）：

| 对齐 | STR 名 | 例 | 何时更有用 |
| --- | --- | --- | --- |
| 日期对齐 | Date-to-Date | 今年 10/1 vs 去年 10/1 | 固定日历事件、合同日 |
| 星期对齐 | Day-to-Day / 常称 STLY | 今年周五 vs 去年周五 | 商务 DOW 曲线 |
| 节日对齐 | （非 STR 专名，B） | 今年春节 vs 去年春节 | 春节/国庆/端午错位 |

Need Verification：本店习惯用哪一种（NV-03）。顾问暂用：节假日按节，其余先星期对齐并声明。

**禁止：** 用「今年已订 60%、去年最终 80%」算 Pace。DTA 不同，不可比。

### 3.4 没有官方法的东西（禁止写成定律）

未找到任何 STR / HSMAI 公开页给出「DTA=14 应到 60%」或「每天应 +X 间」。此类门槛只能是 **本酒店曲线的 Hypothesis**，进 `feedback/` 校准。

---

## 4. Assumption（假设）

写进分析时必须能被推翻：

1. **同一 Stay Date、同一 Available 口径** 的两张快照才能相减。换过分母的 Pickup 是假速度。
2. **确认预订** 才进默认 OTB。可免费取消的团、tentative、未入账 allotment 会让位置虚。
3. **曲线代表「这类日」**。去年同日有演唱会/一笔 80 间团，今年「落后」可能是回归正常。
4. **Pickup 窗口跨周末/工作日要声明。** 周五–周一的 3D 和周二–周五的 3D 不是同一个速度。
5. **线性外推 Pickup（日均 × 剩余 DTA）高估早售罄、低估后置曲线。** Days-to-Sellout 只作压力，不作最终 OCC 预测。
6. **市场与本店可能不同步。** 本店 Pace Behind + Comp Forward OTB 也落后 → 市场弱，不是自动该砸价。
7. **竞对 BAR 是信号不是目标价。**

---

## 5. Applicable Scenario（适用）

适用：

- 任何未来 Stay Date 的涨 / 降 / 不动 / 关低价 / 开渠道决策。
- 用户只丢「还有 N 天、现在 X%、最近进了 Y 间」。
- Forward STAR 或店内 OTB 表的解读。
- Forecast 修正（Forecast = OTB + 对剩余 Pickup 的判断）。

不适用 / 降权：

- 已发生的昨夜 OCC（那是 actualized，不是 OTB）。
- 只有 Budget 没有曲线（Pace vs Budget 可能是假落后）。
- 新店无历史（Pace 家族 Unknown，更多依赖 Pickup × 剩余 × 价差）。
- 纯团队占房日（先走 Group Evaluation，不要用散客曲线）。

---

## 6. Hotel Example（酒店例子，Simulation 级，不是真实酒店）

> 下列两店数字是为了证明「14 天 60%」可相反，不是行业标准。

**店 A · 200 间城区商务酒店 · 周二**  
历史同 DOW、剔活动：DTA=14 中位 OTB ≈ 48%，最终 ≈ 82%。最后 7 天通常走 25–30 个 OCC 点。  
今年 DTA=14、OTB 60% → **Pace Ahead 约 +12pp**。若 3D Pickup 仍有 10+ 间，主风险是 Early Sellout，不是「60% 还低」。

**店 B · 200 间景区度假酒店 · 周六**  
历史同 DOW：DTA=14 中位 OTB ≈ 72%，最终 ≈ 90%。大部分量在 DTA 30–10 走完。  
今年 DTA=14、OTB 60% → **Pace Behind 约 −12pp**。若 3D 只进 8 间，才进入 Slow Pickup 鉴别。

同一 60%，一个该防早满，一个该问为什么慢。差别在曲线，不在 60。

---

## 7. Decision Implication（决策含义）

1. 先还原间夜，再谈 %。
2. 先 Pace，再 Pickup，再价格。OTB 低不自动降；OTB 高不自动涨。
3. 三角判读后才选卡：

| 读法 | 先挂问题树 | 先调用 |
| --- | --- | --- |
| Pace 不落后，曲线后置，Pickup 匹配后半段 | §6 先排除 / §1 问 2–3 | `hold-price-curve-late.md` |
| Pace Behind + Pickup 慢 + 库存开着 + 价明显高于市 | §4 + §6 + §13 | `stimulate-slow-pickup.md` + `slow-pickup.md` |
| Pickup 过快 / Days-to-Sellout < DTA / 某房型先穿 | §5 + §7 + §8 | `protect-inventory-fast-pickup.md` + `fast-pickup.md`；涨价子程序用 `increase-bar-pace-ahead.md` |
| 只有 OTB%，无曲线无 Pickup | — | 条件化；只再要 3 个数（见协议 §9） |

4. Competitor Rate 参与价格位置家族，不单独决定方向。
5. 输出必须带 24/48h Trigger 间夜，禁止「持续观察」当主动作。

---

## 8. Limitation（限度）

- Forward STAR 与店内 PMS 分母不同；Comp Forward OCC 只能作市场热度信号。
- 无公开「标准曲线」。跨店套用 60% 门槛是错误。
- 净/毛 Pickup、日期/星期对齐未在本店钉死前，Pace/Pickup 判断最多 Medium。
- 一团进账、系统重导、取消回流会造假速度。
- 本文件不给弹性系数，不给精确增收。

---

## 9. 判断协议｜「DTA=14、OTB=60%，到底快还是慢？」

**禁止答案：** 「14 天 60% 算慢 / 算快 / 行业一般到 70%」。  
**必须答案：** 走完下面 8 步，输出 Ahead / On / Behind / Unknown，并写用了哪条基准。

### 9.1 最小输入

| 已有 | 才能说 |
| --- | --- |
| Stay Date + DTA + OTB% 或间夜 | 只能描述位置 |
| + 总房量 | 能还原间夜与 Remaining |
| + 至少一条同 DTA 基准（STLY / LY / 曲线 / 经理口述） | 能判 Pace |
| + 至少一个 Pickup 窗口（3D 或 7D，能还原间夜） | 能判速度、能否走完 |
| + BAR 与库存是否开着 | 才能谈动作 |

少任何一项：仍给条件化判断，Confidence 封顶 Medium，并点名补数。

### 9.2 八步

```
S1  还原
    OTB Rooms = OTB% × Total Rooms
    Remaining = Total − OTB − OO（OO 未知当 0，标 Hypothesis）

S2  声明对齐
    Date-to-Date / Day-to-Day / 节日对齐。未声明则先按星期对齐，标 NV-03。

S3  算 Pace（至少一条）
    Pace_pp = OTB%_now − OTB%_benchmark（同 DTA）
    分类（Hypothesis 带宽，待 feedback 校准；不是定律）：
      Ahead  : ≥ +8pp
      On     : −5pp ~ +8pp
      Behind : ≤ −5pp
    多基准冲突时：节假日信节日对齐；活动年信剔活动曲线；Budget 单独标，不单独当 Behind 的铁证。

S4  算速度
    日均 = Pickup_N / N
    Days-to-Sellout = Remaining / 日均
    分类（Hypothesis）：
      Fast   : Days-to-Sellout < DTA，或 3D 与 7D 都明显高于该店该 DOW 平时
      Slow   : Days-to-Sellout > DTA × 1.5，或 3D/7D 明显低于该店后半段应有
      Match  : 速度落在该店历史同 DTA 后半段带宽内
    无「平时」时：只写 Days-to-Sellout vs DTA，不发明「每天应 +X」。

S5  看曲线形状（先排除假落后 / 假领先）
    商务周中常后置（最后 7 天走大部分）→ DTA=14 的 50–60% 可以 On。
    度假周末 / 节假日常前置 → DTA=14 的 60% 经常 Behind。
    无形状：Pace 家族降权，更多看 Pickup × 剩余。

S6  质量检查（任一成立则重标速度）
    单笔 Group ≥ 总房 ~13% 或占窗口 Pickup ≥50% → 不当 Fast Transient
    刚大涨价的 1D 变慢 → 先看 3D，不当 Slow
    库存/渠道/限制没开 → 不当需求 Slow
    取消≈新订 → 看净额，不当 Fast

S7  三角落格（Pace × Pickup）→ 动作类型
    见 §2 表。OTB 60% 本身不出现在表头。

S8  输出句式（强制）
    「Stay Date __，DTA=__，OTB __间 / __%，Remaining __。
      vs __基准 Pace __pp → Ahead/On/Behind/Unknown。
      近 Nd Pickup __间（__间/日），Days-to-Sellout=__ vs DTA=__ → Fast/Match/Slow/Unknown。
      曲线形状：前置/后置/Unknown。
      因此：快/慢/正常/还不能定。动作走 __ 卡。
      如果只能再补 3 个：__ / __ / __。」
```

### 9.3 特化：用户只给「还有 14 天、现在 60%、最近 3 天只进了 8 间」

这是成功标准原句。按协议，**不能**直接说慢。

**当前最合理判断（条件化）：**

```
已知：DTA=14，OTB=60%，3D Pickup=8 间。
未知：总房、基准曲线、BAR、库存开关、Segment。

位置：60% 在 DTA=14 是中窗口的中位附近，单独无意义。
速度：3 天 8 间 = 2.7 间/日。没有总房无法把 8 间标成 Fast/Slow。
  IF 总房 ≈ 80    → 8 间 ≈ 总房 10%，3 日并不慢；Remaining≈32，Days-to-Sellout≈12 ≈ DTA → Match 偏 Fast
  IF 总房 ≈ 200   → Remaining≈80，Days-to-Sellout≈30 > 14×1.5 → 速度偏 Slow（Hypothesis）
  IF 总房 ≈ 300   → Remaining≈120，Days-to-Sellout≈45 → Slow（Hypothesis）
Pace：无 STLY/曲线 → Unknown。
  IF 该店该 DOW 历史 DTA14 = 70%+ → Behind
  IF 历史 DTA14 = 45–55% 且最后 7 天冲高 → On 或 Ahead，8 间可能只是后置曲线尚未启动

默认动作（信息不足）：今天不改 BAR。先确认库存/渠道开着。
不自动降价。
```

**如果只能再补 3 个（翻转价值序）：**

1. **总房量**（或 OTB 间夜）— 没有它，8 间无法解释；会翻转 Slow/Match。
2. **同 DTA 的 STLY 或曲线点**（「往年这天这时候大概多少」也行）— 翻转 Ahead/Behind。
3. **当前 BAR + 库存/渠道是否开着**（可合成一问）— 翻转「该降 / 该开库存 / 不动」。竞对价有了更好，不是今天阻塞。

**24/48h Trigger（在总房未知时用占比，有总房后改成间夜）：**

```
观察窗：该 Stay Date 净 Pickup 间夜、取消、渠道是否可订。

IF 补到总房后 Days-to-Sellout 仍 > DTA×1.5
   AND Pace Behind（有基准）
   AND 库存渠道开着 AND BAR 明显高于可订竞对
   → 走 stimulate-slow-pickup，第一刀不砸 BAR。

IF 补到基准后 Pace On 或 Ahead，且 3D=8 只是后置曲线的正常慢
   → 走 hold-price-curve-late，BAR 不动。

IF 未来 24h Pickup ≥ max(总房×1.5%, 3) 间
   → 速度在恢复，维持 Hold，取消降价路径。

IF 未来 48h 累计 Pickup < max(总房×1.0%, 2) 间
   AND 库存确认开着
   → 重评 Slow，允许进入刺激卡第一刀。
```

300 间尺度的绝对间夜对照（与过程文件一致，Hypothesis）：24h <3 过慢；3–7 持有；≥8 恢复。其他规模用 `max(总房×p, 2)`。

---

## 10. 证据分级与来源（2026-08-20 核）

| 论断 | 级 | 源 | URL / 检索 |
| --- | --- | --- | --- |
| Occupancy on the Books = 未来期确认在手入住 | A | CoStar「Using business on the books…」(2023-12-12) | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/using-business-books-complete-benchmarking-0 |
| Pickup = 两次采集之间的预订变化 | A | 同上；Forward STAR Product Overview PDF | https://chtamarketplace.com/wp-content/uploads/2021/05/Forward-STAR-Product-Overview.pdf |
| 报送 Adjusted Rooms Available + Rooms Booked；取消=负 Pickup；tentative 未扣库存则不含 | A | Forward STAR Data Reporting Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines |
| Date-to-Date / Day-to-Day 定义 | S | CoStar STR Glossary | https://www.costar.com/products/str-benchmark/resources/glossary |
| Pickup=净变动（新订/取消/改期/团块）；Pace=相对历史基准 | B | Lighthouse「What is a hotel pickup report」(页标 2026-02-09)；Hospitality Net 转载 | https://www.mylighthouse.com/resources/blog/booking-pickup-and-pace-revenue-management ；https://www.hospitalitynet.org/news/4125663/the-importance-of-pickup-and-pace-in-hotel-revenue-management |
| OTB=位置，Pickup=导数/速度 | B | Peaqplus RM Academy 公开课页 | https://peaqplus.com/academy/en/intermediate/pickup-and-booking-pace.html |
| 「14 天应到 60%」类门槛 | — | **未找到**任何官方公开页 | 标 Need Verification；禁止当定律 |

未打开、不当公式源：任何付费教材正文、未登录的 Forward STAR 样本报表、单店内部曲线。  
Cornell eCornell「Forecasting and Availability Controls」课名在 source-map 为 Known，本轮未打开讲义，不引用其内部数字。

---

## 11. Need Verification（承接 T3 NV，不改口径）

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-02 | 本店 Pickup 净/毛；tentative / complimentary 是否进 OTB | 默认确认净额；tentative 单列 |
| NV-03 | Pace 日期对齐还是星期对齐 | 节按节，其余先星期对齐并声明 |
| NV-08 | Forward Adjusted Availability 与店内 Remaining 逐项映射 | 不把 Forward OCC 当历史 STAR OCC |
| NV-11（本轮新） | 本店各 DOW/季节 DTA=14 的历史 OTB 中位 | 没有就 Pace=Unknown，用 Pickup×剩余 |
| NV-12（本轮新） | Pickup% 分母是总房还是期初 OTB | 先要间夜；% 必须带分母才能当 Fact |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。公开核 STR Forward STAR + Glossary + 行业 Pickup/Pace 用法。判断协议回答「14 天 60%」。幅度与 ±5/8pp 带宽为 Hypothesis。 |
