# Demand Signal Framework｜外部需求信号

> 资产：Wave6  
> 路径：`demand-signals/signal-framework.md`  
> Last Verified：2026-08-20  
> 知识类型：Best Practice + Hypothesis  
> 证据等级：B（过程互证）；单源媒体/OTA 洞察最多 C；官方门槛未核 = **NV**  
> 配套：`market/comp-set.md` · `advisor-playbooks/concert-event.md` · `holiday.md` · `recommendations/event-pricing-first-cut.md` · `citywide-compression.md`  
> 问题树：§16 Event Demand · 过程文件 D9 / 信号家族 5  
> 禁止：把「当地有演唱会」写成 Compression Fact；编造航班/搜索指数官方门槛；无 overnight 按事件暴涨。

---

## 0. 怎么用

外部信号 **单独不够开门涨/降**。过程文件：≥2 个独立家族同向，方向才能 Medium。  
本框架把旗标变成：**Lead Time · Strength · Reliability · Impact**。未知格写 **NV**，不填假数。

用户说「下周有演唱会」时，先问这 4 个再给第一刀：

1. **Lead Time**（官宣/开票到入住还剩几天）  
2. **场馆距离**（是否 overnight 半径）  
3. **是否官宣**（落地传闻 vs 官宣 vs 开票）  
4. **竞对是否已关 / 已涨**

无旁证 → 按普通 Pace，幅度不建在事件故事上（P07 退出）。

**中国优先：** 节假日、演唱会、会展、高铁/航班。天气 / OTA Search / 路况作辅证。

---

## 1. 评分尺（Hypothesis，不是官方门槛）

每格 高 / 中 / 低 / **NV**。禁止把 NV 写成中。

| 维 | 高 | 中 | 低 | NV |
| --- | --- | --- | --- | --- |
| **Lead Time** | 信号出现点相对入住的典型提前量，有公开或本店史 | 只有行业叙述、无本店点 | 几乎即时才知道 | 找不到任何公开提前量 |
| **Strength** | 单独就能明显改曲线形状（假日、citywide） | 需叠加 Pace/Pickup 才有意义 | 噪声大 | 无依据 |
| **Reliability** | 官方日历 / 官宣 / 可核票务 | 多源交叉 | 单人/单平台 | 传闻 |
| **Impact** | 对 **本店** 该 Stay Date 的 overnight 需求 | 对商圈或肩日 | 过路、当日往返 | 距离/客群未知 |

**合成（顾问内部）：** Reliability 低则 Impact 最多当 Hypothesis。Strength 高但 Reliability 低 → 只关破价，不大涨。

---

## 2. 信号卡（中国场景优先）

### 2.1 Holiday｜法定节假日 / 调休

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **高** | 国办放假安排通常上年发布；2026 日历已在 P06 核政府网 |
| Strength | **高** | 整段曲线换形状，不是单日 DOW |
| Reliability | **高** | 官方日历 Fact |
| Impact | **高**（度假/探亲店）；商务店调休日可能 **低/负** | 调休日按上班日曲线 |

动作：走 P06。Peak 才 MinLOS=2；肩日 Open。春节必须 STLY/农历，禁止套公历 LY。

### 2.2 Exhibition｜会展 / 广交会级 / 地方馆

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **高–中** | STR Glossary：MICE 预订通常远早于活动（S 词条级）。中国具体「开展前 N 周售罄」**无官方门槛** → 媒体「前 2–3 周」= **C**，标 NV 不当阈值 |
| Strength | **高**（展馆步行圈）；馆外衰减快 | 肩日（布/撤展）常被误当垃圾日 → P22 `exhibition-shoulder.md` |
| Reliability | **高** 若展期+展馆官方页；**中** 若只有「听说有展」 |
| Impact | 距展馆 **近 = 高**；远则 **NV/低** | 未给距离禁止当 citywide |

STR 中文术语：MICE 在商务工作日需求中占显著比例。本库不编「3 公里内提前 14 天必满」。

### 2.3 Concert｜演唱会 / 音乐节 / 大型演出

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **中–高** | 三个时点：**落地传闻 / 官宣 / 开票**。OTA 洞察称落地日搜索环比高、开票日预订绝对值高（**C**，2025 展演报告类）。**无官方 Lead Time 门槛** |
| Strength | **中–高** | 容量有限、辐射常限于场馆周边（经济观察网 2026-04 引述「约 2 公里」= **C**）。3KM「黄金住宿」是平台洞察，**不是** 顾问阈值 |
| Reliability | 官宣+票务页 = **高**；朋友圈 = **低** |
| Impact | overnight 成立才 **高**；当日往返 / 场馆远 = **低** | 跨城观演占比媒体个案 55–65%（**C**），不当全国系数 |

**第一刀问题单（强制）：**

```
1) 演出夜 = 哪条 Stay Date？前夜是否到达？
2) 场馆距本店：步行 / 公里（用户能给的精度）
3) 现在是落地 / 官宣 / 已开票 / 已演完？
4) Primary 竞对：已涨、已关低价、已满、还是没动？
5) 本店该日 Pace / 3D Pickup？
```

有 1+3 无 2+4+5 → 档 A/B 下沿，MinLOS 今天不设。  
取消/缩规模 → **立刻**回平日带。

### 2.4 Conference｜会议 / 论坛 / 企业年会（非展览）

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **中–高** | 常走团块，Lead 长于演唱会散客 |
| Strength | **中** | 可能只占本店一团，不是城市压缩 |
| Reliability | 合同/官宣 = **高**；销售口述 = **中** |
| Impact | 本店有团 = **高（质量要拆）**；只是同城开会 = **NV** | Pickup 快先排一团（P09） |

### 2.5 Flight｜航班 / 机场吞吐量 / 航线增减

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **NV–中** | 航班计划有公开，但 **无**「客座率 X% → 酒店 OCC Y%」官方门槛 |
| Strength | 机场店 **中**；市区店 **低–NV** | 红眼/取消潮可能抬取消，不自动涨 |
| Reliability | 航司/机场官方班期 = **高**；自媒体「飞进人数」= **C** |
| Impact | **NV** 除非本店历史证明机场客占比 | 禁止用全国民航吞吐量决定单店 BAR |

### 2.6 Train｜高铁 / 12306 热度

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | 节前票窗 **高**；演唱会加开临客 **中**（临近才公布） |
| Strength | 高铁枢纽 / 景区终点 **中**；普通城区 **低** |
| Reliability | 12306 班期/停运公告 = **高**；「搜索暴涨 N 倍」媒体 = **C** |
| Impact | **NV** 无官方「车票售罄→酒店满房」门槛 | 可作旁证：节前票难 + 本店 Pace Ahead |

2026-08-20 打开 12306 售票页，确认系统存在，**不**从中推导酒店公式。

### 2.7 Weather｜天气 / 台风 / 暴雨 / 极端高温

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | 短（通常 24–72h） | 台风路径会改 |
| Strength | 取消/改期 **中–高**；需求增量视目的 | 度假晴天 ≠ 商务台风 |
| Reliability | 气象官方预警 = **高** |
| Impact | 取消潮时 **负向**；勿在取消中大涨（**P28** `weather-disruption.md`） | 无本店取消史不给超售精确间夜 |

### 2.8 OTA Search｜平台搜索 / 热度 / 排名

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **NV** | **未找到** 携程/美团/飞猪官方「搜索指数门槛」 |
| Strength | **低–中** 作辅证 | 搜索≠overnight 下单 |
| Reliability | 平台对酒店后台的本店数据 = **中**（Vendor）；对外营销「热度+210%」= **C/D** |
| Impact | **NV** | 禁止「搜索涨了所以 +15%」。排名跌先查价/库存/评分，不无条件接大促（P18 未写） |

### 2.9 Traffic｜路况 / 封路 / 地铁延时 / 商圈人流

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | **低** | 多是当日 |
| Strength | **低** | 除非封路导致不可达 |
| Reliability | 官方交通管制 = **高**；微信群 = **低** |
| Impact | 不可达 = 负向；人流旺 ≠ 住房 | **NV** 无转换系数 |

### 2.10 Comp Price｜竞对可订价

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | 即时–7 日（他们已先调） |
| Strength | **中** 作位置信号；**单独低** |
| Reliability | 同房型同早口径 shop = **中**；登录会员价当公开价 = 误读 |
| Impact | 只解释价差 | 见 `market/comp-set.md` §4。不跟的卡：`ignore-comp-undercut.md` |

### 2.11 Comp Availability｜竞对满房 / 关房 / 只剩高价

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | 短–中 | 满房本身是结果 |
| Strength | **高** 当 **≥2 家 Primary** 满 | 1 家满可能是它自己卖穿或关配额 |
| Reliability | 可订查询交叉 = **中** |
| Impact | 溢出可能 **高** | 仍核自身剩余与可比（P15） |

### 2.12 Citywide Compression｜城市级压缩

| 维 | 取值 | 说明 |
| --- | --- | --- |
| Lead Time | 事件已知则 **高**；无事件的周末压缩 **中** |
| Strength | **高** | 几乎全市场填，差异在 ADR |
| Reliability | 多店满 + 事件/Forward 市场 OCC = **高**；「听说全城满」= **低** |
| Impact | **高** | 见决策卡。STR Glossary **无** Compression Night 词条。实践常用市场 OCC>90%（STR 数据评论 / 行业文，**B**），**不是** 本库官方门槛 |

分层（Hospitality Net 2025 文，**B**，作讨论锚不当政策）：Select >85% / Compression >90% / Full >95%。中国城市无公开逐日市场 OCC 时，用 **≥2–3 家 Primary 满 + 本店 Ahead/Fast** 代替，标 Hypothesis。

---

## 3. 合成规则（和过程文件同一套家族）

```
外部旗标 ∈ 家族 5
必须再叠：Pace/历史 或 Velocity 或 Inventory 或 Comp 满
只有旗标 → 方向最多 Low–Medium，幅度不吃事件
旗标 + 1 条旁证 → 事件第一刀下沿（+5–10% 或最低竞对）
旗标 + Pace + Pickup 或 ≥2 家满 → 档 B/C，仍不跳最高
Reliability=低 → 只关破价
```

**负向合成：** 事件取消、天气取消潮、航班/高铁大面积停运 → 先改 Forecast，**不**按原事件价卖。

---

## 4. 中国调用句式

```
「下周有演唱会」
→ Lead Time？场馆距本店？官宣还是传闻？竞对关了吗？该日 OTB/Pickup？
→ 再给第一刀（区间+首选）或退出事件逻辑

「竞对比我低 80」
→ 那家是 Primary 吗？本店 Pace？Pickup？有无 citywide/事件？
→ 跟 / 不跟 / 只开围栏
```

---

## 5. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-SIG-01 | 航班客座 / 吞吐量 → 酒店 OCC 官方映射 | 不映射；机场店用本店史 |
| NV-SIG-02 | OTA 搜索指数官方门槛 | 不写阈值 |
| NV-SIG-03 | 「3KM / 2KM」演出辐射是否普遍 | 问距离，不套公里真理 |
| NV-SIG-04 | 中国城市逐日市场 OCC 公开源 | 用竞对满房代替 |
| NV-SIG-05 | 12306 热度官方酒店指标 | 无 |

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。12 信号四维表。未知标 NV。 |
| 2026-08-20 | Wave7：P22 已 drafted，展览肩日改指向剧本。 |
| 2026-08-21 22:17 CST | §2.7 指向 P28 drafted。取消潮不涨；台风人次仍 NV。 |
| 2026-08-23 08:17 CST | 口碑/评分 **不是** 事件信号，不要塞进本表当第 13 族。走 `theory/reputation-vs-price.md` · `dont-cut-for-review-score.md`。OTA Search（§2.8）仍是辅证；排名跌继续先查价/库存/评分（P35），砍 BAR 问口碑专卡。 |
