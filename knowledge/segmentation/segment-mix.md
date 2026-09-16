# Segment Mix｜细分组合（好/坏不能只看总 OCC）

> 资产：早课 2026-08-21 08:00 理论卡  
> 路径：`segmentation/segment-mix.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-21  
> 知识类型：Fact（STR 三分法）+ Best Practice + Hypothesis  
> 配套：`channel/net-contribution.md` · P20 · P25 · P23 · `recommendations/steer-mix-by-net.md`  
> 问题树：§12 Channel Mix · ADR Low  
> 禁止：只看总 OCC / 只看 Gross ADR 判断 mix；编造中国 OTA 佣金%；把 OTA 当 STR 需求类型；伪造精确增收。

---

## 0. 一句话

总 OCC 升、Gross ADR 升，**都不足以**说 mix 变好。  
顾问要回答的是：这一晚（或这一段）**换成了谁、用什么渠道、净贡献和可逆性**变了没有。

两套口径必须分开，禁止混排成一张「细分 ADR 冠军榜」：

| 套 | 是什么 | 用来 |
| --- | --- | --- |
| **STR 需求类型** | Transient / Group / Contract | 对标 Comp / 市场；报送口径 |
| **顾问工作细分** | Retail / Corporate / Negotiated / Group / Wholesale / OTA / Package / Member | 店内决策：保谁、关谁、是否泄漏 |

OTA、Member、Package **不是** STR 的三个需求类型。OTA 是渠道；Member 是围栏/忠诚；Package 是产品包装。STR 里它们多数落在 Transient（10 间以上带合同的块才进 Group）。

---

## 1. STR 三分法（Benchmark，S，2026-08-21 打开）

来源：CoStar/STR Glossary；Historical Benchmarking Data Reporting Guidelines（对齐 USALI 12e 精神）。  
https://www.costar.com/products/str-benchmark/resources/glossary  
https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines

| 类型 | 官方要点（意译，不摘长段） | 顾问别踩 |
| --- | --- | --- |
| **Transient** | 个人或占用 **<10 间/夜** 的小团 | 含 Retail / Discount / Negotiated / Qualified / Wholesale 等**价类** |
| **Group** | 典型 **≥10 间/夜**，凭签署协议卖出 | 团房收入对批发折扣记净；给团的 rebate 作 contra |
| **Contract** | **>30 天**、约定合同价、**无论用不用都保证付款** 的稳定占房（航司机组、长住等） | 无保证使用/付款的 allotment **不要**报 Contract，应报 Transient |

**STR 报送 ≠ 本库 Net 公式：** 批发 / pay-when-booked 常报净；OTA pay-later 常报毛。不要拿 STAR ADR 当店内 Gross。

**Package：** 只把房间公允部分报进 Rooms；餐/票/Spa 拆走。Mix 里 Package 间夜升、ADR 掉，先查是不是房间口径被包装稀释，再谈降价。

Group 下市场细分（指南举例，不是本库必开科目）：Corporate / Association-Convention / Government / Tour-Wholesalers / SMERF。

---

## 2. 顾问工作八分（店内决策用）

下列「典型画像」= **Best Practice / Hypothesis**，不是全国中位数。Lead Time / LOS / 取消没有单一官方阈值。中国 OTA 佣金% = **NV**，用用户合同。

每一行看六件事：**ADR（毛/净）· Lead Time · LOS · Cancellation · Channel Cost · Booking Pattern**。

### 2.1 Retail（门市 / 公开 BAR）

| | |
| --- | --- |
| 是谁 | 无资格限制的公开价。可走直销，也可走 OTA BAR 层 |
| ADR | 通常是**无围栏上限**。毛高不等于净高（OTA Retail 要减佣/券） |
| Lead / LOS / 取消 | 城市店偏短；度假/节假日可很长。灵活取消常见 |
| 成本 | 直销：引擎/支付/积分（≠0）。OTA：合同佣金 + 店出券 |
| Pattern | 周末/事件更密；最后窗口弹性未知 |
| mix 升 | 高峰、净≥其他来源 → 常是好。若升的是 OTA 深折 Retail 替掉 Member → 坏 |
| mix 降 | 先问是被协议/团挤掉，还是直销没开 |

### 2.2 Corporate（商务散客，口语）

| | |
| --- | --- |
| 是谁 | 店内常把「周中西装客」叫 Corporate，**不等于**已签协议。先分清：公开商务 vs Negotiated vs 公司团 |
| ADR | 常低于周末 Retail，高于批发 |
| Lead / LOS / 取消 | 周中、Lead 中短、LOS 1–2 常见（Hypothesis） |
| 成本 | 走直销/GDS 时佣金结构不同于 OTA；GDS 段费 NV |
| Pattern | 周二–周四密度高；节假日/黄金周不是主场 |
| mix 升 | 周中、未打穿 BAR → 往往健康。周六 Negotiated 冒充 Corporate → 泄漏（**P26** `corporate-leakage.md`） |
| mix 降 | 可能需求真弱，不自动砸 BAR（P12） |

### 2.3 Negotiated（协议价 / LRA·NLRA）

| | |
| --- | --- |
| 是谁 | 公司协议。STR 价类上多落 Transient-Negotiated，**不是** Group |
| ADR | BAR 的折扣。高峰 LRA 可能置换高价 Retail |
| Lead / LOS / 取消 | 商务日历；取消看协议 |
| 成本 | 折扣本身 + 可能 TMC/Consortia。常无 OTA 佣 |
| Pattern | 周中；周末用量异常 = 资格没卡住 |
| mix 升 | 周中填房、净>0、未挤周末高峰 → 可留。压缩日 LRA 仍开 → 收资格或 NLRA |
| mix 降 | 不等于失败；可能 Retail 在涨 |

### 2.4 Group（团队，STR Group）

| | |
| --- | --- |
| 是谁 | ≥10 间/夜 + 协议（STR）。顾问决策走 P10 置换，不和 OTA Gross ADR 比冠军 |
| ADR | 毛常低于 Retail；要比 **净 + 被挤掉的散客** |
| Lead / LOS / 取消 | Lead 长；Wash / 免费取消窗是软需求 |
| 成本 | 销售佣 / 净价 / 会议占用。F&B 常 Unknown，不填假 |
| Pattern | 会展、SMERF 周中、旅游团周末 |
| mix 升 | 弱日填房且 Displaced≈0 → 可好。高峰 500 挤 800 → 坏，即使 OCC 好看 |
| mix 降 | 可能是在给 Retail 让路，先算净 |

### 2.5 Wholesale（批发 / 净价）

| | |
| --- | --- |
| 是谁 | 净价给批发，再加价零售。STR：Transient 价类有 Wholesale；团型 Tour/Wholesalers 在 Group |
| ADR | 报表常已是净或接近净；**不要和 BAR 比毛** |
| Lead / LOS / 取消 | 休闲长 Lead、连住；泄漏窗口长 |
| 成本 | 价差里已含渠道；泄漏的机会成本常 > 价差 |
| Pattern | 度假、入境、包价。压缩日仍开 = 结构错 |
| mix 升 | 弱日增量净>0 可留配额。高峰升 → 默认坏，关或限额 |
| mix 降 | 高峰降通常是好 |

### 2.6 OTA（渠道，不是需求类型）

| | |
| --- | --- |
| 是谁 | 携程/美团/飞猪/同程/Booking/Agoda/Expedia 等。上面可以挂 Retail、Package、预付、优待 |
| ADR | **Gross 常看起来最高**（pay-later 报毛、优待前划线）。决策用 Net |
| Lead / LOS / 取消 | 城市店可很短；灵活产品取消高（P14） |
| 成本 | 佣金 + 店出折扣 + 优待加佣 + 投放。**中国四平台 2026 统一官方%：未找到 → NV**。Booking：帮页要求看合同，无全球单一% |
| Pattern | 周末/节假日/最后窗口权重大（Hypothesis）。增量 vs 转移必须问 |
| mix 升 | 弱日、净>0、直销已开且平价 → 可以是肩日增量。高峰、直销倒挂、深折 → 坏 |
| mix 降 | 先确认总量还在（假结构改善=关光主渠道 OCC 也没了） |

### 2.7 Package（包价）

| | |
| --- | --- |
| 是谁 | 房+餐/票/车。渠道可以是直销或 OTA |
| ADR | 房间口径偏低是拆分问题，不是「客人付得少」 |
| Lead / LOS / 取消 | 休闲、节假日、连住 |
| 成本 | 包装成本 + 渠道费。票券是否店出 **问清楚** |
| Pattern | 高峰包价打穿地板 = 低价 Rate Plan，不是「增值」 |
| mix 升 | 弱日连住、房间净不打穿 → 可。Peak 深折包价 → 关 |
| mix 降 | 先查是不是改口径了 |

### 2.8 Member（会员 / 品牌围栏）

| | |
| --- | --- |
| 是谁 | 会员价、积分、品牌 App/微信。多数仍是 Transient Retail 的围栏层 |
| ADR | 常略低于公开 BAR（围栏 −3–5% 启发式），净常高于 OTA 同价 |
| Lead / LOS / 取消 | 随品牌；积分成本 ≠ 0 |
| 成本 | 折扣 + 积分/引擎。禁止写 CAC=0 |
| Pattern | 直销健康的标志之一。涨 BAR 时会员跟不跟 → **P23** `advisor-playbooks/member-vs-public.md`：无品牌规则当自有围栏，默认同向跟 |
| mix 升 | 通常好（净、可重复）。不要为刷 Member% 把 BAR 砸到会员价 |
| mix 降 | 与 OTA 升同时出现 → 进 P25，先排除直销故障 |

---

## 3. mix 变了：好还是坏（不能只看总 OCC）

比较必须 **同一 Stay Date 集合 × 同一口径**。OCC 持平只说明房间卖掉了，没说卖给谁、剩多少净。

### 3.1 变坏的识别信号（任 2 条就要拆 mix，禁止报「入住还行」）

| # | 信号 | 为什么是坏 | 先做什么 |
| --- | --- | --- | --- |
| B1 | OCC 持平或升，**Net ADR / 声明制净贡献下降** | 贵渠道/深折在换房 | 按净排序（P20） |
| B2 | **高峰** OTA / Wholesale / 深折 Package 占比升，Direct / Member / Retail BAR 层降 | 高峰被低净填满 | 关深折，不关直销（P25） |
| B3 | Gross ADR 升、净不升（或 STR ADR 升但店内净掉） | 毛口径或划线价在演戏 | 声明成本再比 |
| B4 | Lead Time 明显缩短 **且** 取消升 | OTB 变软；后半段可能空 | P14，OTB 当 Soft |
| B5 | 高峰 LOS 变短（单晚掏空） | mix 换成了切夜客 | MinLOS 只盖已证实 Peak；不是先降价 |
| B6 | 直销公开价 > OTA / 直销配额 0 / 渠道不同步 | 不是「客人爱 OTA」，是自己把人赶过去 | **先修直销**，禁止关 OTA 当战略 |
| B7 | 周末出现大量 Negotiated / 协议资格松 | 围栏破，休闲客用商务价 | **P26**：先分合同 vs 漏出；高峰 blackout / 下 OTA；不杀户 |
| B8 | Group/Wholesale 占高峰，散客 Pace 已 Ahead | 置换，OCC 好看是假成功 | P10 Counter / 关批发 |
| B9 | 关 OTA 后 mix「好看」但总间夜没了 | 假结构；增量不是转移 | 停关；弱日可留净>0 的 OTA |

### 3.2 变好或可接受

| # | 信号 | 含义 |
| --- | --- | --- |
| G1 | OCC 持平，净升 | 同样的房卖给了更净的来源 |
| G2 | 高峰 Direct/Member/Retail BAR 升，OTA 深折降 | 在 yield |
| G3 | 弱日/肩日 OTA 或 Wholesale 升，且声明净>0，直销已开 | **增量**填房，不是失败 |
| G4 | Group 升在 Displaced=0 的日子 | 填的是空，不是挤 |
| G5 | Package 升但房间净不打穿地板、LOS 拉长肩日 | 包装在工作 |

**禁止句：** 「OTA ADR 高所以 mix 在变好」。OTA Gross 高是常见错觉（P20）。

---

## 4. 顾问动作（落到 Stay Date × 细分/渠道）

先排除口径和供给，再动 mix 杠杆。幅度兼容已有启发式，不另发明。

```
1) 直销没开 / 价倒挂 / 库存不同步 → 只修直销与平价（渠道动作），不关 OTA、不降 BAR
2) 有合同费率 → NetADR 排序（调用 P20）
3) 无费率 → 只比结构：谁打穿地板、谁占高峰配额；不算假精确净额
4) 高峰 / Ahead / Fast：关深折 OTA/批发/包价；BAR 层与直销保持可订
5) 弱日：OTA 围栏 −3–5% 可留；净能算则净>0；不一夜 −15%
6) 价已最高：只关低价，不涨
7) 促销出资未知：不报（P18）
8) Pace Ahead 且价低于竞对：涨走 +8–15% 尺，不是靠保 OTA
```

输出骨架：

```text
Stay Dates:
Segment / Channel mix（间夜% + Gross + 已知成本 + Net 或结构句）:
Diagnosis:          变好 / 变坏 / 假结构 / 先修直销
Decision:           保直销BAR / 收OTA深折 / 弱日留围栏 / 关批发 / 不动
Do-not-do:          只看总OCC；保高毛OTA；全渠道跟最低；关光OTA；编佣金%
```

---

## 5. 与剧本

| 场景 | 走 |
| --- | --- |
| 哪个渠道毛 ADR 高要保 | P20 按净排序 |
| OTA% 升、直销掉，要跟全网最低或关 OTA | **P25** |
| 单次促销报不报 | P18 |
| 团询 | P10 |
| 协议周末泄漏 | **P26** `corporate-leakage.md` · `blackout-or-close-leaking-corp.md`；本卡 B7 |
| 会员价跟不跟 BAR | **P23** `member-vs-public.md` · `follow-or-hold-member-rate.md`；缺品牌规则当自有围栏，不编 10% |

---

## 6. 证据（2026-08-21）

| 论断 | 级 | 源 |
| --- | --- | --- |
| STR 需求类型 = Transient / Group / Contract；<10 vs ≥10；Contract >30 天且保证付款 | S | STR Glossary 2026-08-21 打开 |
| Transient 价类含 Retail / Discount / Negotiated / Qualified / Wholesale；Group 市场举例含 SMERF 等 | S | STR Reporting Guidelines 2026-08-21 打开 |
| 批发/pay-when-booked 报净；pay-later 报毛 | S | 同指南「Wholesalers, eChannel, OTAs」 |
| Package 只报房间公允部分 | S | 同指南 |
| COPE = Collected − 直接预订成本（佣金、渠道/交易、积分、consortia 等） | A | HSMAI Academy Glossary「COPE Revenue」（2026-08-21 打开；页注 2025-12-30） |
| 渠道转移可使酒店实收增长慢于客人实付 / 酒店入账 | A | Lodging Magazine 转述 Kalibri 口径（行业机制，不当本店数字） |
| Direct Revenue Ratio / NetRevPAR 为酒店教材 KPI 名 | S 书目 | Hayes, *Revenue Management for the Hospitality Industry* 2e，Wiley 简介点名。**公式未精读 → 不写假定义** |
| 八分工作细分的 Lead/LOS「典型」 | B / Hypothesis | 实践互证；无官方中位数 |
| 中国 OTA 统一官方佣金表 | — | **未找到** → NV |
| 博客 4.5–22% 等 | C/D | **不采用** |

---

## 7. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-CH-01 | 中国四平台 2026 合同佣金 | 用户后台；本库空白 |
| NV-SEG-01 | Hayes Direct Revenue Ratio 精确公式 | 只保留书目级名称 |
| NV-SEG-02 | 本店各细分「正常」Lead/LOS/取消基线 | 用本店 STLY，不报行业天数 |
| NV-SEG-03 | Member 积分成本如何分摊到间夜 | 清单制；缺则声明低估直销成本 |
| P26 | 协议泄漏完整剧本 | **drafted** `advisor-playbooks/corporate-leakage.md` |
| P31 | 机组 / 航司协议 | **drafted** `advisor-playbooks/airline-crew.md`。一场 extra ≠ STR Contract |
| P23 | 会员跟价 | **drafted** `advisor-playbooks/member-vs-public.md` |

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 08:00 CST | 首版。STR 三分 + 顾问八分。mix 好坏信号。不编佣金%。 |
| 2026-08-21 18:17 CST | 交叉：P23 drafted。不重写八分画像。 |
| 2026-08-22 06:17 CST | 交叉：P26 drafted。B7 / §5 / NV 表改指针。不重写八分画像。 |
| 2026-08-22 18:17 CST | 交叉：P31 Crew drafted。Contract 口径仍 §1；机组 extra 不是自动 Contract。不重写八分画像。 |
