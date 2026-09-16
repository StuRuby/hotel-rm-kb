# Group Displacement｜团队置换分析

> 资产：Wave5 理论卡  
> 路径：`group/group-displacement.md`  
> 能力层级：Diagnose → Advise（Accept / Reject / Counter）  
> Last Verified：2026-08-20  
> 知识类型：Theory + Best Practice + Hypothesis  
> 配套：`recommendations/accept-reject-group.md` · `advisor-playbooks/group-evaluation.md`（P10） · `forecasting/forecast-framework.md` · `channel/net-contribution.md` · `metrics/net-adr.md`  
> 问题树：§2 ADR Low · §12 Channel · O12 Group Opportunity  
> 过程：`decision-framework/advisor-process.md` §8（团询主动词 = Accept / Reject / Counter）  
> 禁止：只比「团价 500 vs 散客 800」；伪造精确增收；把 Forecast 写成 Fact；接团当已操作系统；编造教材页码。

---

## 0. 一句话

**500 vs 800 不是决策。** 决策是：接这个团之后，会挤掉哪些日期、多少间、什么价位的散客，加上餐会/佣金/Wash/取消之后，总贡献是否仍高于机会成本。输出只能是 **Accept / Reject / Counter Offer**（含价或房量条件）。

```
Naive（禁止当结论）     团 ADR 500 < 散客 BAR 800 → 拒
Displacement（本卡）     按日：Expected Transient + Group − Capacity
                         + LOS / F&B / Meeting / Commission / Wash / Cancel
                         → Accept / Reject / Counter
```

完成标准：用户丢来一个团询，能说出接/拒/还价 + **displacing 哪些散客日期** + 再看的 3 个数。

---

## 1. 为什么「500 vs 800」不够

| 漏项 | 会发生什么 |
| --- | --- |
| 没有 Expected Transient | 淡日 50 间空房，拒 500 等于拒确定收入 |
| 没有按日拆 | 周五不挤、周六大挤；均价 500 把亏的一天藏进赚的一天 |
| 没有 LOS | 团只要周六，会挡掉周五六连住散客（肩日也被 displacing） |
| 没有 Net | 散客 800 可能是 OTA 毛价；团 500 可能是直销净价 |
| 没有 Wash / 取消 | 接了 50、到店 38，中间已经拒了散客 |
| 没有 F&B / Meeting | 客房亏、店总赚；或会议室白送、机会成本没算 |
| 没有 Counter | 二元拒/接，丢掉「少接 20 间 / 周六加价 / 加餐标」的解 |

Cloudbeds 公开例（**B Vendor**，2026-08-20 打开）：100 间店、团 50 间 × 3 夜、团价 60、散客 ADR 90；第 1 夜 Expected Transient 50 → **不置换**；第 2–3 夜置换 40+35。结论由**置换间夜**决定，不是 60 vs 90。本库不抄其美元数字当中国店事实。

eCornell SHA774 *Displacement and Negotiated Pricing*、SHA534 *Overbooking Practices* 课纲主题含 displacement / group contribution（**A** 课名级，2026-08-20 检索可见；**不摘讲义、不编页码**）。

---

## 2. 对象与输入

按日（Stay Date）算，不要用「整段平均 OCC」。

| 对象 | 定义 | 缺了 |
| --- | --- | --- |
| Group Block | 团要的日期 × 间数 × 价 × LOS × 取消/Wash 条款 | 不能出点，只能条件化 |
| Capacity | 总房 − OO − 已确认不可挪的预留 | OO 未知先当 0，标 Hypothesis |
| OTB Transient | 冲突日已有散客（不含本团） | 与 Forecast 一起才能估剩余 |
| **Expected Transient Demand** | 若**拒团**，这些日期还预期会有多少散客间夜（尽量 unconstrained） | **主翻转项**。没有它不要装精确置换 |
| Transient ADR / Net | 将被挤掉的那一层的价，不是店均 BAR 口号 | 用冲突日当前 BAR 或 Forecast ADR，并声明 |
| Ancillary | 团与散客的 F&B / Meeting / 其他 | 没有就客房先算，餐会写成 IF |
| Channel cost | 团佣金 vs 散客佣金/营销 | 费率未知 → 不编 %，只比结构 |

**Expected Transient Demand 怎么来（层级，勿装 Known）：**

```
1) 有 RMS/人工 Unconstrained Forecast（分 Transient）→ 用之，标 Vendor/Internal
2) 有 OTB + 历史同 DTA 曲线剩余 Pickup → OTB + 期望剩余 Pickup（Hypothesis）
3) 只有 OTB + 经验「这类周六最终 90%」→ 用经验最终，Confidence Low
4) 什么都没有 → 仍给 Counter 条件句：IF 冲突日最终散客 ≥ X THEN …
```

满房日 Demand ≠ Sold。Expected Transient 若只用 Constrained 历史 OCC=100%，会**低估**置换（见 `forecasting/forecast-framework.md`）。

---

## 3. 核心公式（标来源 / Hypothesis）

### 3.1 置换间夜（按日）

```
Displaced_t = max(0, ExpectedTransient_t + GroupRooms_t − Capacity_t)
```

| 标记 | |
| --- | --- |
| 来源 | Cloudbeds *Displacement analysis* 公开式（**B Vendor**，2026-08-20）：`expected transient + group − total rooms`；负/零 = 不置换 |
| 本库 | 同式。Capacity 扣 OO。团与散客必须同一 Stay Date |
| Hypothesis | Expected Transient 本身几乎总是 Hypothesis |

**不要**用 `GroupRooms × (TransientADR − GroupADR)` 当置换成本——那假设 100% 挤满，淡日会系统性拒团。

### 3.2 客房机会成本

```
RoomOppCost = Σ_t  Displaced_t × TransientNetADR_t
```

TransientNetADR：有佣金用净；没有则用 Gross 并写「净额未知，偏高估散客」。  
被挤的是**边际那一层**（常是零售 BAR / OTA），不是已锁的协议低价。

### 3.3 团客房贡献

```
GroupRoomRev     = Σ_t GroupRooms_t × GroupRate_t
GroupRoomNet     = GroupRoomRev − GroupCommission − 已声明折扣
ExpectedWash     = 团块 × WashRate          # 到店前释放
GroupRoomNet_adj = GroupRoomNet × (1 − WashRate)   # 粗：按洗后实住
                   + 释放房间 × 释放后再售净价     # 若 DTA 仍够再售
```

Wash / 取消：没有本店团史不要编 10%。写成区间或 IF。过早把洗出来的房当「还能原价卖完」是 Hypothesis，DTA 短时往往卖不回。

### 3.4 LOS / 肩日（常被漏）

团只要高峰一晚，会挡 **MinLOS=2 的散客**，肩日也被 displacing。

```
LOS_extra_displaced ≈ 因高峰被占而订不成的连住间夜
```

给不出点：至少点名「可能 displacing Peak−1 / Peak+1」，不要假装 0。Cloudbeds 公开把 Shoulder nights 列为必考虑项（**B**）。

### 3.5 F&B / Meeting

```
F&B_contrib     = 餐费收入 × 贡献率（未知则只报收入，不报利润）
Meeting_contrib = 租金 + AV − 变动成本
Meeting_opp     = 同一空间若另有售的净贡献   # 白送会议室要减
```

无贡献率：F&B **不进点结论**，进 Counter（「加餐标则 Accept」）。禁止用行业平均餐毛利冒充本店。

### 3.6 决策量

```
NetDelta = GroupRoomNet_adj + F&B_contrib + Meeting_contrib
         − RoomOppCost − LOS_extra − Meeting_opp
         − 其他已声明增量成本
```

| NetDelta | 方向 |
| --- | --- |
| 明显为正，且高峰夜单独也非负 | **Accept**（可加护栏：截止日、Wash 条款） |
| 明显为负，且加餐/加价也难翻 | **Reject** |
| 总段为正、**高峰夜为负**；或总段薄、Forecast 不稳 | **Counter**（改价 / 改房量 / 改日期 / 加餐会 / 改取消） |
| 算不出点 | 仍出 Counter 条件句，禁止「数据不足无法判断」 |

「明显」：不要伪精确到个位。用数量级（数千 / 数万）+ 高峰夜符号。

---

## 4. 决策草表（可算，每格标类型）

复制到分析里填。空格写 Unknown，不填假数。

| # | 项 | 值 | 类型 | 公式 / 来源 |
| --- | --- | --- | --- | --- |
| G1 | Stay Dates（到达+在住夜） | | Fact | 团询 |
| G2 | GroupRooms_t × Rate | | Fact | 团询 |
| G3 | 取消 / 截止 / 是否可洗 | | Fact 或 Unknown | 团询 |
| G4 | Capacity_t − OO | | 计算 | 总房 − OO |
| G5 | 冲突日 Transient OTB | | Fact | PMS/用户 |
| G6 | Expected Transient_t | | **Hypothesis** | Forecast 或 OTB+曲线 |
| G7 | Displaced_t | | 计算 | §3.1 |
| G8 | Transient ADR / Net | | Fact 或 Hypothesis | 冲突日 BAR；净价见 channel 卡 |
| G9 | RoomOppCost | | 计算 | §3.2 |
| G10 | GroupRoomNet | | 计算 | §3.3；佣金未知则 Gross 并声明 |
| G11 | Wash 调整 | | Hypothesis | 无史则 IF |
| G12 | LOS 肩日置换 | | Hypothesis | §3.4 |
| G13 | F&B / Meeting | | Fact 或 IF | §3.5 |
| G14 | 高峰夜单独 NetDelta | | 计算 | **强制拆夜，禁止只看整段** |
| G15 | 整段 NetDelta | | 计算 | §3.6 |
| G16 | 决策 | Accept / Reject / Counter | 判断 | §5 |

**最低可算集（T7 团询 3 补数）：** 冲突日 Transient OTB+预测、当期 BAR、按日剩余。有这 3 个就能出 §3.1 + 客房 Counter。

---

## 5. Accept / Reject / Counter

### 5.1 Accept

同时接近：

- 各高峰夜 `Displaced_t` 为 0，或高峰夜单独 NetDelta ≥ 0  
- 取消不是「入住前 7 天仍可全免」这种高 Wash；或已有截止/押金  
- 不占必须留给高价尾部的库存（与 Sellout 留尾 20–30% 不冲突：压缩日别把尾部整块给低价团）

护栏（建议写进接受条件，不是操作系统）：

- 截止日 / 分期释放（例如 DTA 14 释放未担保间）  
- 高峰夜房量上限  
- 不开放 LRA（Last Room Availability）给此团  

### 5.2 Reject

任一条：

- 高峰夜单独客房 NetDelta 明显为负，且团不接受加价/减房/加餐  
- 冲突日已是 Early Sellout / Sellout Risk 路径，低价团会再压 ADR  
- 团价打穿公开 BAR，且会泄漏（批发/可外传）  

Reject 时仍给一句：什么条件下会变成 Counter（价、房量、日期平移）。

### 5.3 Counter（默认高频出口）

整段看着能接、高峰夜亏，或 Forecast 不稳时，**不要硬接也不要硬拒**。

| 杠杆 | 怎么写（禁止「再谈谈」） |
| --- | --- |
| 价 | 「周六 ≥ __（区间+首选）；周五可维持 __」 |
| 房量 | 「周六最多 __ 间；周五可 __ 间」 |
| 日期 | 「平移到 Expected Transient 更低的 __」 |
| 餐会 | 「加 __ 桌 / 会议租金 __ 则客房价可维持」 |
| 取消 | 「DTA=__ 截止或 __% 不可退，否则房量再砍」 |

价的下限启发式（Hypothesis，不是最优）：

```
高峰夜保本团价 ≈ (Displaced_peak × TransientNetADR + 分摊 LOS 置换) / GroupRooms_peak
整段保本 ≈ RoomOppCost / 团总间夜
报价首选 = 保本与「不低于公开 BAR 的 70–85%」之较高者（70–85% 是 Hypothesis，品牌红线优先）
```

禁止一夜把团价降到与公开价差 >15% 的泄漏区还当「促销团」（与「不一夜 −15%」同方向：结构价不被单笔团砸穿）。

---

## 6. 与已有启发式的兼容

- 冲突日若 Pace Ahead / Pickup Fast：先按 P01/P03/P04 保护，**团是来抢高价尾部的** → 默认 Counter 减房或加价，不按淡日接。  
- 价已最高只关不涨：接低价团 ≠ 涨价；等于开一个更低的库存层 → 先关/限额。  
- Peak MinLOS=2：团要高峰单晚 → 视为 LOS 置换，Counter 要求连住或加价。  
- 留尾 20–30%：压缩日不要把剩余整块给团；团限额 ≤ 剩余 − 尾部预留。  
- 不操作系统：只建议销售回复口径，不写 PMS 团块点击步骤。

---

## 7. 顾问输出骨架（团询）

```
Situation: 团日期/间/价/取消；冲突日 OTB、Remaining、BAR
Diagnosis: 哪几天 Displaced>0；哪天单独亏
Decision: Accept / Reject / Counter（条件写到日）
Displacing: Stay Date 列表 + 间夜 + 用的 Transient 价
Why: 草表 G6–G15，标 Hypothesis
Do-not-do: 只比两个 ADR；按整段平均接
Watch: Wash、冲突日 Pickup、是否泄漏
Trigger: 见 P10
补 3 个数: Expected Transient 或最终经验 OCC；取消/Wash 条款；F&B/会议贡献
```

---

## 8. 证据（2026-08-20 核）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| 置换 = 两件并发生意比利润；不并发则不必算挤占 | B Vendor | Cloudbeds Displacement analysis | https://www.cloudbeds.com/hotel-group-business/displacement-analysis/ |
| Displaced = ET + Group − Capacity | B Vendor | 同上公开式 | 同上 |
| 须含 ancillary、获客成本、肩日、Lead time | B | Cloudbeds；Hospitality Net explainer | https://www.hospitalitynet.org/explainer/4131455/how-to-conduct-an-effective-hotel-displacement-analysis |
| Displacement / group contribution 为 Cornell 课主题 | A 课纲 | eCornell SHA534 / SHA774 | 课页 + Cornell catalog 2025–26 |
| 「团价 < BAR 就必须拒」 | — | **不是**规律 | 淡日 ET 低则应接或 Counter |
| 本店 Wash 率 / 餐贡献率 | — | 无公开官方值 | Need Verification；用用户数 |

未采用：会议媒体里「压缩夜 ADR +20–40%」当本库常数（D/个案）。未精读 Talluri 正文，不编页码公式。

---

## 9. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-GRP-01 | 本店 Expected Transient 口径（含不含协议/已定团） | 冲突日只算 Transient；已定其他团进 Capacity 占用 |
| NV-GRP-02 | Wash 中位 | 无史不填 %；Counter 加截止日 |
| NV-GRP-03 | 团价相对 BAR 的品牌地板 | 先问红线；无则 Hypothesis 70–85% 仅作讨论锚 |
| NV-GRP-04 | 会议室机会成本 | 无另售线索则当 0，并声明 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。禁止 500 vs 800。草表 G1–G16。Accept / Reject / Counter。 |

---

## 11. 交叉（2026-08-22 00:17）

TRM 把 §3.5 F&B / Meeting 从「无贡献率则不进点结论」钉死为：

- 有**用户提供的贡献**且盖过客房机会成本、且非高峰可卖满 → 才允许推翻客房-only Reject。
- 「餐很高」无数字 → 不翻盘；输出仍 Accept / Reject / Counter（优先 Counter）。
- 高峰能卖满散客 → 即使有餐也 Counter 客房价或缩房量，宴会可留。

见 `theory/total-revenue-management.md` · `recommendations/accept-low-room-for-fnb.md`。P30 婚宴仍未写。不编餐毛利 / 变动成本。

---

## 12. 交叉（2026-08-22 02:17）

P30 婚宴已 drafted。置换公式仍以本卡为准。婚宴只多：高峰周六默认 Counter、婚房/家长房 must-keep vs 宾客 dump、不关散客、肩日分刀。见 `advisor-playbooks/wedding-banquet-group.md`。上句「P30 婚宴仍未写」作废。

---

## 13. 交叉（2026-08-25 08:17，不改置换公式）

会带房占房仍用本卡按日 Displaced。厅/餐贡献走 **T-Meet** `theory/meeting-with-rooms.md`：无用户贡献不接低价房块；高峰 Counter/拒房留会。见 `recommendations/dont-dump-bar-for-meeting-rooms.md`。**P50 未写。** 不编餐毛利。
