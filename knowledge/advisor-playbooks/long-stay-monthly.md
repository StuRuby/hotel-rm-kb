# Playbook P41｜长包房 / Monthly / Extended Stay

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/long-stay-monthly.md`  
> BACKLOG：P41 长包房 / monthly / extended stay · HIGH（T08 长包空位；16:17 已告知用户仍空）· 先决策卡 · slug **long-stay-monthly**  
> 状态：**drafted**（2026-08-23 18:17 CST）  
> 配套卡：`recommendations/counter-or-reject-long-stay.md`  
> 理论：`group/group-displacement.md` · `pricing/los-optimization.md` §10+（T08 网络，本轮不重写）· `metrics/stay-network-value.md` · `theory/profit-contribution.md`（T19）· `theory/revenue-strategy.md`（T20）· `segmentation/segment-mix.md` Contract  
> 交叉：P10 短团 2–3 晚置换（本剧**不是** P10 重写）· P31 机组 allotment ≠ 30 夜租约 · P26 协议码周末漏出是围栏 · P40 Sat-only ≠ 长包每周六都占住 · T19 变动成本仍跑（HK 周清）· T20 不砸周末品牌底  
> 问题树：O10 LOS · §47「低价长包占周末」  
> 仿真：`cases/sim-2026-longstay-20x30-weekends.md`（**Simulation**）  
> 证据等级：S（STR Contract / Extended Stay / Permanent guest 口径）；A（eCornell Displacement 课名；HSMAI Academy LOS 词条；HSMAI Americas 长住周转方向）；A Vendor（IDeaS Displacement；HVS 2012 长住分档**方向**，美元例不进本店）；B/C（HotelTechUpdate 周清为成本，非布草表）；中国长包月租价表 / 华住长包 SOP / 300 行情 = **NV**  
> Last Verified：2026-08-23 18:17 CST  
> 知识类型：Fact（STR 口径）+ Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议 Accept / Counter / Reject 与高峰黑窗、间数、合同夜价带。**不签署**租约 / 不操作 PMS / 不代改合同。  
> 禁止：编中国长包月租价表；华住长包 SOP；把 300/380 写成某市 Fact；佣金%；Walk；点弹性；一夜 −15%；无高峰 BAR/Pace 时发明 OCC；把便宜 30 夜 BAR dump 写成 STR Contract。

---

## 0. 一句话

长包先数里面有几个周末和活动夜，不要用 30×淡季均价当成交理由。  
周末还卖 799，默认 **Counter 或拒**，不是按 380 把周六让出去。  
没有保证付款和高峰黑窗，就把它当便宜长住散客，不是 Contract。

完成定义：能分清真 Contract（>~30 夜、保证付款、或可月结）vs 便宜 30 夜 BAR dump vs 一场碰巧很长的团块；能列出占用期内每一个高峰夜，用那些瓶颈夜的 BAR/Pace 比合同夜价（T08：30 日价不是 30×平日）；混合店、周末仍在卖 → 默认 Counter（黑出高峰 / 少间 / 高峰夜价带）或 Reject；Accept 仅当那些高峰剩余很肥，或酒店真是工作日驱动、周末结冰。用户没给高峰 BAR/Pace → 问，不编 OCC。顾问不签租约。

顾问必须能直接说的三句：

```
1. 长包先数里面有几个周末和活动夜，不要用 30×淡季均价当成交理由。
2. 周末还卖 799，默认 Counter 或拒，不是按 380 把周六让出去。
3. 没有保证付款和高峰黑窗，就把它当便宜长住散客，不是 Contract。
```

独立默认（本库 Hypothesis）：卖得动周末的城市店，**不要**在没有黑窗的情况下把 15–20 间连住 30 天按远低于周末 BAR 的一口价接满。KEEP 已签机组 allotment（P31）≠ KEEP 一笔把每个周六 dump 到 380 的 30 夜。P40 拒的是**一个**周六单晚；本剧拒的是**每一个**被长包占住的周六。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| L1 | 「有人要包 15–20 间连住 30 天，单价很低，接不接？」 |
| L2 | 「长包 300/晚 vs 周末 BAR 799？」 |
| L3 | 销售把 30×工作日均价或「总比空着强」当成交理由 |
| L4 | 对方要月结/包房，但合同没有保证付款、没有高峰黑窗 |
| L5 | 要按长包价占展会周/节假日/每个周六 |

**不是本剧本：**

- 团 2–3 晚、一场会议/旅游团 → **P10**。长包是 30 日占房产品，不是一场团。  
- 机组已签 allotment / 某一周六 extra 20 间 → **P31**。allotment ≠ 30 夜租约；KEEP 合同块 ≠ KEEP 每个周六 dump。  
- 公司协议码出现在周末 OTA → **P26**。那是围栏漏出，不是新签 30 夜合同。  
- 散客只订一个周六 → **P40**。一个 Sat-only ≠ 长包每周六都占住。  
- 弱周二要不要开战术零售 → **P12**。  
- 只问涨多少 BAR、无长包询价 → Increase BAR。

P41 相对 P10 多出来的：占用期内**每一个**高峰夜都要置换；信用风险（月结/保证付款）；周清等变动成本仍跑（T19）；STR Contract 口径（>~30 夜且无论用不用都保证付款）。

---

## 2. 输入（缺高峰 BAR/Pace 不停，但不编 OCC）

```
必须：
1) 入住–离店（写出覆盖的每一个 Stay Date）+ 间数
2) 对方要的一口夜价（用户给的数；本库不编 300 行情）
3) 覆盖期内按日公开 BAR（至少周末/事件夜）
4) 那些高峰夜的 Pace / Pickup / Remaining（缺则问，不编 OCC）
5) 付款：预付 / 月结 / 无论用不用都保证付款 / Unknown
6) 店型：周末仍卖的混合店 vs 真工作日驱动、周末结冰

应用：
7) 覆盖期内事件/节假日旗标（哪几夜是 Peak）
8) 合同草稿：黑窗、提前解约、押金、发票抬头、是否可转租
9) 周清/布草是否仍做（有则进 T19；无成本数不编布草表）

Recommended：
10) 品牌底 / 贡献三数（用户声明才用；没说不发明 699）
11) 对方信用：预付款比例、历史坏账（有则用；无则 Unknown，不编行业坏账%）
12) 佣金/中介费（用户合同；不编 %）
```

缺高峰 BAR 或 Pace **不停**：条件化。「IF 那四个周六 Ahead 且 BAR≈公开周末价 THEN Counter/Reject」。禁止「空着所以先按 300 接 20 间」。  
缺保证付款条款 **不停**：先当便宜长住散客，不是 Contract。  
顾问 **不** 签租约、不代改合同、不点 PMS。

---

## 3. 分叉闸（接长包前必过）

```
0  日历。列出覆盖的每一夜。圈出周末、事件、节假日。没日期仍条件化，不说无法判断。
1  这是哪一种产品？
     真 Contract：>~30 夜、稳定块、约定合同价、**无论用不用都保证付款**（或可核的月结+押金）
           → 仍要按日置换。STR 口径 ≠ 必须按 380 接满周末。
     便宜 30 夜 BAR dump：一口低价、可退、不保证付款
           → **不是 Contract**。当廉价长住散客。
     一场碰巧很长的团块（2–3 周会议/培训，有 wash）
           → 主骨架仍 P10 按日置换；本剧补「里面每一个周六」。
2  高峰夜还卖不卖？
     周末/事件 Pace Ahead 或 Pickup Fast 或竞对满 / 城市压缩
           → 那些夜是瓶颈。合同夜价 vs 那些夜的 BAR（不是 vs 30 日均价）。
     酒店真是工作日驱动、周末结冰、高峰剩余很肥
           → 才谈 Accept（仍要保证付款 + T19 贡献）。
     高峰 BAR/Pace 未知
           → 今天不 Accept。写 IF；问 3 个数。
3  销售要把公开周末 BAR 砍到长包价「好做均价」？
     → 拒绝。公开层不 dump。Counter 的是合同层。
4  没有保证付款 / 没有高峰黑窗？
     → 不要写成 Contract。默认 Counter 或 Reject。
```

**禁止跳到「30×淡季均价很好看所以接」。** 30 日价不是 30×平日（T08）。被占的是里面每一晚真正紧的夜。

STR Contract（S，本库已开 Glossary）：稳定块、约定合同价、**超过 30 天**、**无论使用与否保证付款**；例：航司机组、长期住客。  
STR Extended Stay（S）：**物业类型**，报价常按周，典型住 4–7 晚 —— 不是「签了 30 天=Extended Stay 店」。  
STR 报送指南：无保证付款的长住/常住，不要报 Contract。

HSMAI Academy LOS 词条（A）：长住定价常见分档 5–11 / 12–29 / 30 夜 —— **分档存在**，不是中国 300 行情。

---

## 4. 诊断枝（禁止「300 总比空着强 / 按 380 让出每个周六」）

```
用户说 15–20 间连住 30 天单价很低接不接 / 长包 300 vs 周末 799
│
├─ 0. 日期与高峰夜清单？
│     没写出覆盖夜 → 条件化。不说无法判断
│     先数周末个数、事件夜、节假日。T08：瓶颈夜通常记 1 不是把 30 晚都当紧夜
│
├─ 1. 产品类型（主翻转）
│     保证付款 + >~30 夜稳定块 → 可按 Contract 口径谈；仍按日置换
│     一口低价、可退、不保证付 → 便宜长住散客，不是 Contract
│     2–3 周团块 + wash → P10 骨架 + 本剧高峰闸
│
├─ 2. 高峰夜还卖不卖？（主闸）
│     混合店、周末 Pace Ahead / BAR 仍在卖
│           → 默认 Counter（黑出高峰 / 少间 / 高峰夜价带）或 Reject
│     高峰剩余很肥 或 周末已冰、工作日驱动
│           → 可评 Accept（保证付款 + 贡献>0）
│     高峰 BAR/Pace 未知
│           → 今天不 Accept；只写 IF；问 3 个数
│
├─ 3. 要把公开 BAR dump 到 300/380？
│     是 → 拒绝。合同层 Counter ≠ 公开层一夜 −15%
│
├─ 4. 信用 / 付款
│     无保证付款、无押金、纯月结口头 → 当廉价长住；默认不接满高峰
│     有保证付款仍要黑窗：履约 ≠ 把每个周六送给 380
│
├─ 5. 成本（T19）
│     周清/布草/能耗仍发生。无用户成本数 → 不说 380 总比空着强
│     禁止编布草表、佣金%、Walk
│
└─ 6. 邻剧
      一场 2–3 晚团 → P10
      机组 extra 某一个周六 → P31
      协议码周末漏出 → P26
      散客一个 Sat-only → P40

Naive（禁止）
      「30×工作日均价还行，接」
      「380 总比空着强」（空着的往往是肩日/平日，周六并不空）
      「长包是 Contract 所以必须按 300 开周末」
      把公开周六 BAR 砍到 380
      一夜 −15%
      编中国 300 行情 / 华住长包 SOP
      无 Pace 时发明 OCC
```

**300 不是开门条件。** T20 无地板不发明 699，也不发明必须按 300 成交。T19 无变动成本不说「长包总比空着强」——空着的不是已经能卖的周六。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉入住–离店。列出覆盖的每一夜。圈周末/事件/节假日。没有日期仍条件化。
2. 分产品：真 Contract vs 便宜 30 夜 dump vs 长团。无保证付款 → 不当 Contract。
3. 问那些高峰夜的 BAR / Pace / Remaining。缺 → IF，不编 OCC，不 Accept。
4. 按日置换（P10 式）：Displaced_t = max(0, ET_t + LongStayRooms − Remaining_t)。
   只算高峰夜不够：每个周六、每个展会夜都要单独一行。
5. T08 尺：合同夜价 vs 瓶颈夜 BAR，不是 vs 30 日算术均价。
   CNV Hypothesis：Stay 客房收入 / 覆盖的紧夜数（周末常每间记 4 个周六，不是记 30）。
6. T19：周清等变动成本仍跑。无成本数不说总比空着强。
7. T20：有声明底，合同高峰夜不砸穿；无地板不发明 699。不要为了签租约把公开周末 BAR dump 到合同价。
8. 闸：混合店周末仍卖 → 默认 Counter 或 Reject。
   Accept 仅：高峰剩余肥 或 周末冰 + 保证付款 + 贡献未穿（有成本才算）。
9. Counter 结构（写到夜，不是写到「这个月」）：
     - 黑出已证实高峰（周六/事件）；平日可谈
     - 或高峰间数砍到剩余−尾部 20–30%（Hypothesis，与 P10 同尺）
     - 或高峰夜价带到接近被挤 BAR 层（仿真用 560–650 带，标 Hypothesis，不是行情）
     - 公开 BAR 不降到长包价
10. 输出 Accept / Reject / Counter + 价或房量/黑窗 + 再要 3 个数 + Trigger。
    不签租约。不输出中国月租价表。无高峰 Pace 声明 Hypothesis / Low confidence。
```

### 5.1 动作表

```text
Stay window:          <入住>–<离店>；列出每一个高峰夜
Product:              Contract（保证付款）| 便宜长住散客 | 长团块
Hotel type:           混合/周末仍卖 | 工作日驱动周末冰
Peak nights inside:   周六 __ 个；事件夜 __；节假日 __
Peak BAR / Pace:      按日（缺则 IF）
Public BAR Peak:      Hold；不 dump 到合同价
Long-stay rate:       用户给的数（300/380 只在用户口中或 Simulation）
Decision:             Counter | Reject | Accept（仅高峰肥或周末冰）
Counter 结构:
  黑窗:  已证实高峰（默认所有周六+事件）
  间数:  高峰最多 Remaining − 尾部 20–30%（Hypothesis）
  价:    高峰夜带到被挤 BAR 附近；平日可低于高峰，仍须过 T19
Guarantee:            无保证付款 → 不当 Contract；可要求预付/押金（问用户法务，顾问不拟条款）
HK / 变动成本:        周清仍跑；无用户成本不编表
Do-not-do:
  - 30×淡季均价当成交理由
  - 按 380 让出每个周六
  - 公开 BAR → 长包价 / 一夜 −15%
  - 编 300 行情 / 华住 SOP / 佣金% / Walk / 点弹性
  - 无 Pace 写成今天 Accept
  - 顾问代签租约
Trigger: 见 §6
```

无 RMS 时的最小手算（Hypothesis，不是厂商算法）：

```
对覆盖窗口内每一个已证实高峰夜 t：
  Displaced_t     = max(0, ET_t + LS_rooms − Remaining_t)
  高峰机会成本    = Σ_t Displaced_t × TransientNetBAR_t
  合同高峰收入    = Σ_t LS_rooms × ContractRate   # 不要先把 BAR_t 砍掉再比
  若高峰仍有人买且合同价 ≪ BAR_t → 该夜默认不按合同价放满
  若该夜剩余很肥 / 周末冰 → 该夜才是增量
整笔 30 日均价不参与决策。T08：30 日价 ≠ 30×平日。
```

Cloudbeds 公开置换式（B Vendor，P10 已用）：`expected transient + group − capacity`。长包把 GroupRooms 换成每日占房。负/零 = 该夜不置换。**不要**用 `30 × (BAR_avg − 380)` —— 那把亏的周六藏进赚的周二。

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **别为长包把高峰夜送给 380**。

| 判定 | 合同层 | 公开 BAR |
| --- | --- | --- |
| 混合店、周末 Ahead | **Counter 或 Reject**。高峰黑窗，或高峰夜 560–650 带（Hypothesis，仿真用，非行情）；平日另议 | **Hold** 周末；禁止 dump 到 380 |
| 高峰剩余肥 / 周末冰 | 可评 Accept @ 用户合同价，前提保证付款且未穿 T19 | 不因长包改公开层 |
| 对方坚持全部日期 @ 380/300 | **Reject** | 不降 |
| 销售要砍公开周末迁就「月均价」 | **拒绝** | 守周末带 |
| 价已最高 | 公开只关不涨 | 合同仍可拒/黑窗 |
| 无高峰 Pace | 不 Accept；IF | 不编 OCC |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某市长包行情。  
HVS 2012 美元分档例（1–4 / 5–11 / 12–29 / 30+）= **该文例子，不进本库中国价**。只保留方向：越长越便宜是 ES 物业的分档逻辑，**不是**城市周末店可以把周六卖成 30 日均价。

### 5.3 黑窗 vs 少间 vs 提价（Hypothesis）

| 更想要 | 用 | 别用 |
| --- | --- | --- |
| 周末仍卖满，平日可填 | **黑出周六/事件**；平日按合同 | 用 30 日均价「补偿」周六 |
| 对方必须住周末 | 高峰间数砍到剩余−尾，或高峰夜价带到 BAR 附近 | 20 间全按 380 过周六 |
| 信用差 / 不保证付款 | Reject 或极小间数+预付 | 写成 STR Contract |
| 两者都上（黑窗+提价+砍间） | 可以；写到夜 | 再叠砍公开 BAR |

### 5.4 Advisor-First

建议用户：覆盖夜清单、四个周六的 OTB/Pickup/BAR、保证付款还是月结、押金、周清是否仍做、品牌底（若有）。顾问不登录 PMS、不代拟租约、不代上法院、不自动调价。**顾问不签署租约。**

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出四个周六 Ahead + BAR≈公开周末 | 维持 Counter/Reject；禁止改成 Accept @ 380 |
| 用户补出周末已冰、工作日驱动、剩余肥 | 可改评 Accept（保证付款 + 贡献未穿） |
| 对方接受黑出周六或高峰间数≤尾部尺 | Counter 成立；公开 BAR 不动 |
| 对方坚持 20 间×全部日期 @ 380/300 | **Reject** |
| 用户补保证付款+黑窗条款 | 可按 Contract 口径谈；高峰仍按日置换 |
| 无保证付款、纯口头月结 | 不当 Contract；默认不放高峰 |
| 销售要把公开周六砍到 380 | **拒绝。** T19/T20；禁一夜 −15% |
| 覆盖期内新出现展会/演唱会 | 把那些夜加入黑窗，重新 Counter |
| 用户补变动成本 > 合同净价 | 整笔不卖（T19） |

---

## 7. 如果只能再补 3 个

1. **覆盖期内每一个高峰夜的 OTB / Pickup / 公开 BAR** — 翻转 Counter vs Accept；缺则今天不 Accept，只写 IF  
2. **保证付款 / 押金 / 月结条款** — 翻转 Contract vs 便宜长住散客；缺则不当 Contract  
3. **店型：周末还卖不卖** — 翻转默认闸；缺则按混合店、周末仍卖处理（更严的闸）

缺 1：Confidence Low，不把 Accept 写成今天必做。  
缺 2：高峰 extra 按廉价长住 Counter/Reject。  
缺 3：默认 Counter/Reject，不按「公寓 300」接。

---

## 8. Confidence / 边界

高峰夜齐 + 付款条款齐：方向 **Medium**；点价永远 Hypothesis。  
缺高峰 Pace：Low，只写 IF。  
STR Contract / Extended Stay 口径 = **S**。本店那份是不是 Contract → 问用户。  
eCornell Displacement 课名 = **A**（估算若接会长包会挤掉哪些未来到达）。  
HSMAI LOS 分档 = **A 词条**，不是 300 行情。  
HVS 2012 美元例 = **不进启发式**。  
HotelTechUpdate 周清 = **B/C 方向**：变动成本仍跑；**不是**布草单价表。  
中国长包月租价表、华住长包 SOP、某市 300 Fact：**NV**。无用户价不发明。  
佣金%、Walk、点弹性：**NV**。

仿真：`cases/sim-2026-longstay-20x30-weekends.md`（**Simulation**，不是真店）。主枝 **Counter**（黑出 4 个周六，或高峰夜 560–650 Hypothesis）；对方坚持全部日期 @ 380 → **Reject**。公开周六 Hold 779–799 首选 799。禁止把 Sat dump 到 380。380 只在 Simulation。

---

## 9. 证据（2026-08-23 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Contract = 稳定块、约定合同价、**超过 30 天**、**无论用不用保证付款**；例：航司机组、长期住客。Transient / Group / Contract 为 Segmentation 三种需求 | S | **Known（口径）** | https://www.costar.com/products/str-benchmark/resources/glossary （本轮打开） |
| Contract Rooms Revenue：与另一主体就稳定块、超过 30 天的合同产生的客房收入，净额记账 | S | **Known（报送）** | STR Historical Benchmarking Data Reporting Guidelines https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （P31 已开，本轮复核检索） |
| Extended Stay = **物业类型**：通常吸引长住、报周价，客人典型住 4–7 晚 | S | **Known（物业类型 ≠ 30 日租约）** | 同上 Glossary（本轮打开） |
| 无保证付款不要报 Contract；常住/永久居住无保证付款更接近 Transient 报送 | S | **Known（报送边界）** | Reporting Guidelines；P31 已用同一句 |
| 接一块需求前要估会挤掉哪些未来到达；用置换估各细分该留多少房 | A 课名 | **Known 方向**（课纲，不摘讲义） | eCornell *Displacement and Negotiated Pricing* https://online.cornell.edu/courses/hospitality-and-foodservice-management/displacement-and-negotiated-pricing/ （本轮打开） |
| LOS = 一笔预订住几晚；长住定价常见 5–11 / 12–29 / 30 夜分档 | A 词条 | **Known 分档存在；不是中国价** | HSMAI Academy Glossary https://academy.hsmai.org/glossary/los-length-of-stay/ （本轮打开） |
| 长住周转低 → 运营成本方向下降；收入管理要能支持多种 LOS | A 协会方向 | **Known 方向** | HSMAI Americas *Everyone Loves a Kitchen: The Changing Face of Extended Stay* https://americas.hsmai.org/insight/everyone-loves-a-kitchen-the-changing-face-of-extended-stay/ （本轮打开） |
| 目的建造 ES 常用 LOS 分档（文中 1–4 / 5–11 / 12–29 / 30+）；最优是各档搭配不是把店装满 30+ | A 咨询方向 | **方向可用；美元例不进启发式** | HVS Lynn 2012 *Tiered Pricing and Yield – Key Drivers of Extended Stay Success* https://www.hvs.com/content/3228.pdf （本轮打开 PDF） |
| Displacement Analysis = 团/块总价值 vs 被挤散客 | A Vendor | **Known（词）** | IDeaS glossary（P10/P31 已开） |
| 7 夜以上常见周全清；变动成本仍发生；劳动/布草可降但不是零 | B/C 实践 | **Known 方向；禁止当布草单价表** | HotelTechUpdate *Mid-Stay Cleaning and Linen Swaps for Long-Stay Serviced Apartment Guests* https://www.hoteltechupdate.com/guides/mid-stay-cleaning-and-linen-swaps-for-long-stay-serviced-apartment-guests （本轮打开） |
| 中国长包月租价表、华住长包 SOP、某市 300/晚行情 | — | **NV。不编。** | 禁止编造 |
| 「城市周末店必须接 30 日 @ 300」官方定律 | — | **未找到** → 本库默认 Counter/Reject = Hypothesis | — |

Failed / 未当成核页：

```
中国 长包房 月租 价表 官方 / 华住 长包 SOP     → 未找到 → NV
北京/上海 长包 300 行情 协会                   → 不编
AHLA 长包保证付款标准合同                       → 未检索到可引用页，不编
佣金% / Walk 成本 / 点弹性                      → NV，不编
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 18:17 CST | drafted。BACKLOG P41。分叉：真 Contract vs 便宜 30 夜 dump vs 长团；高峰夜清单；混合店默认 Counter/Reject；不 dump 周六到 380；顾问不签租约。配套 `counter-or-reject-long-stay.md`。不编月租价表。 |

---

## 11. 交叉（不改 P01–P40 正文；P10/P31 仅文末一行）

- **P10**：短团 2–3 晚按日置换。本剧是 30 日占房产品。持续合同 ≠ 一场团。骨架公式可调用，完成定义不同。  
- **P31**：KEEP 已签机组 allotment ≠ KEEP 一笔把每个周六 dump 到合同价的 30 夜。机组 extra 是一场周六加房；长包是窗口内每一个高峰夜。  
- **P26**：协议码周末漏出是围栏（blackout/从 OTA 拿掉）。本剧是**新签**一块 30 夜，不是关漏出码。  
- **P40**：Sat-only = 一个周六单晚。本剧 = 长包把**每一个**周六占住。工具不同：P40 用 MinLOS/CTA；P41 用黑窗/少间/合同夜价带。  
- **T08 / stay-network-value**：30 日价不是 30×平日。估值看覆盖了几晚紧夜。  
- **T19**：周清等变动成本仍跑。无成本不说 380 总比空着强。高峰机会成本是 BAR 层。  
- **T20**：不要砸声明底去卖被合同占住的周末。无地板不发明 699。  
- **P12**：周末冰、工作日驱动 → 才更像 Accept 长包填平日。  
- **how-much-to-move**：公开层禁一夜 −15%。合同高峰带是 Counter，不是把 BAR 改成 380。

> 交叉指针（2026-09-02 06:17，不改正文）：长包/月租过程仍本剧。§111 OPERA Tiered Rate Codes = LOS 价表档 ≠ 公开 BAR Type。不规定 P88。
