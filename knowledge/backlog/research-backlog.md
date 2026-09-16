# Research Backlog

> 文件：`backlog/research-backlog.md`  
> 更新：2026-08-29 20:17 CST；此前：2026-08-29 02:17 CST；此前：2026-08-28 10:17 CST；此前：2026-08-28 08:17 CST；此前：2026-08-28 06:17 CST；此前：2026-08-28 04:17 CST；此前：2026-08-28 02:17 CST；此前：2026-08-28 00:17 CST；此前：2026-08-27 22:17 CST；此前：2026-08-27 20:17 CST；此前：2026-08-27 18:17 CST；此前：2026-08-27 16:17 CST；此前：2026-08-27 14:17 CST；此前：2026-08-27 12:17 CST；此前：2026-08-27 10:17 CST；此前：2026-08-27 08:17 CST；此前：2026-08-27 06:17 CST；此前：2026-08-27 04:17 CST；此前：2026-08-27 02:17 CST；此前：2026-08-27 00:17 CST；此前：2026-08-26 22:17 CST；此前：2026-08-26 20:17 CST；此前：2026-08-26 18:17 CST；此前：2026-08-26 16:17 CST；此前：2026-08-26 14:17 CST；此前：2026-08-26 12:17 CST；此前：2026-08-26 10:17 CST；此前：2026-08-26 08:17 CST；此前：2026-08-26 06:17 CST；此前：2026-08-26 04:17 CST；此前：2026-08-26 02:17 CST；此前：2026-08-26 00:17 CST；此前：2026-08-25 22:17 CST；此前：2026-08-25 20:17 CST；此前：2026-08-25 18:17 CST；此前：2026-08-25 16:17 CST；此前：2026-08-25 14:17 CST；此前：2026-08-25 12:17 CST；此前：2026-08-25 10:17 CST；此前：2026-08-25 08:17 CST；此前：2026-08-25 06:17 CST；此前：2026-08-25 02:17 CST；此前：2026-08-25 00:17 CST；此前：2026-08-24 20:17 CST；此前：2026-08-24 18:17 CST；此前：2026-08-24 16:17 CST；此前：2026-08-24 14:17 CST；2026-08-24 12:17 CST；此前：2026-08-24 10:17 CST；2026-08-24 08:17 CST；此前：2026-08-24 06:17 CST  
> 此前：2026-08-24 04:17 CST；2026-08-24 02:17 CST；2026-08-24 00:17 CST；2026-08-23 20:17 CST；2026-08-23 18:17 CST；> 此前：2026-08-23 16:17 CST；> 此前：2026-08-23 10:17 CST；2026-08-23 08:17 CST；2026-08-23 06:17 CST；2026-08-23 04:17 CST；2026-08-23 02:17 CST；2026-08-23 00:17 CST；2026-08-22 22:17 CST；2026-08-22 20:17 CST；2026-08-22 18:17 CST；2026-08-22 16:17 CST；2026-08-22 14:17 CST；2026-08-22 12:17 CST；2026-08-22 10:17 CST；2026-08-22 08:17 CST；2026-08-22 06:17 CST；2026-08-22 04:17 CST；2026-08-22 02:17 CST；2026-08-21 22:17 CST；2026-08-21 20:17 CST；2026-08-21 16:17 CST；2026-08-20 20:00 CST  
> HIGH 对齐第一阶段优先序里还没有可调用资产的主题，以及本轮核源缺口。  
> 每条：问题 · 为何影响顾问建议 · 下一轮动作 · 依赖来源。

第一阶段优先序（`curriculum/progress.md`）：  
1 基础 → 2 Metrics → 3 OTB → 4 Pickup → 5 Pace → 6 Forecast → 7 Pricing → 8 Inventory → 9 Restriction → 10 Comp/Market → 11 Channel/Segment → 12 Group → 13 Overbooking → 14 Optimization → 15 RMS → 16 RM 工作方法 → 17 Case → 18 Advisor Simulation

本轮已有入口：Source Map / 书课 / RMS 景观 / tech-map。  
晚课（2026-08-20 20:00）核对：H1–H6 / H8 / H10 / H11 **已有可调用资产**（见各条「状态」），剩余是 NV / 公式级，不要再当「还没写」。  
仍 HIGH 且缺公开页：H7 Marriott One Yield（算法）、H9 Amadeus **独立** Hotel RMS（优化在 IDeaS/BEONx；`beonx.md` 已写）。Group/Overbooking **公式卡**仍薄。

---

## HIGH

### H1 · OTB 在不同系统里到底含什么
- **状态（2026-08-20 20:00）：已有资产，剩余 NV。** `theory/otb-pickup-pace.md` + metrics。无曲线的绝对 OTB%（含「70%」）不判好坏。
- **问题**：PMS / RMS / CRS 的 OTB rooms、OTB OCC 是否含团队、complimentary、维修房、渠道预留？
- **为何影响建议**：OTB 70% 在一家店是真需求，在另一家是团队占房。会直接导致错涨/错降。
- **下一轮**：用户样表 / 本店 PMS 字段口径；不要重写理论卡。
- **依赖**：STR Glossary（已开）；Hayes 2e；用户样表。

### H2 · Pickup 窗口如何诊断「快/慢」
- **状态（2026-08-20 20:00）：已有资产，剩余 NV。** P08 Slow Pickup / P09 Fast Pickup 已 drafted。本店历史曲线仍缺。
- **问题**：1D/3D/7D/14D pickup 没有酒店自己的历史曲线时，顾问只能说相对语言。
- **为何影响建议**：这是每日建议的核心。没有它，只能复读「持续观察」。
- **下一轮**：用本店曲线校准快/慢，不重写剧本。Ivanov 2014 PDF 仍 NV。
- **依赖**：eCornell Forecasting 课页；Ivanov 2014 PDF。

### H3 · Booking Pace / Booking Curve 可操作定义
- **状态（2026-08-20 20:00）：已有资产，剩余 NV。** `theory/otb-pickup-pace.md` §9 协议：无曲线不把绝对 OCC% 当好坏。
- **问题**：「DTA 14、OCC 60% 算快还是慢」仍缺本店曲线。
- **为何影响建议**：第一阶段第 5 项，顾问毕业标准之一。
- **下一轮**：本店曲线样例；不要把 70% 写进剧本当「好」。
- **依赖**：Kimes 教材课；Hayes；真实曲线样例。

### H4 · Unconstrained Demand 酒店估法
- **状态（2026-08-20 20:00）：已有资产；IDeaS 对等公式仍 NV。** `forecasting/unconstrained-vs-constrained.md`（Duetto Vendor Methodology）。晚课交叉：缺口大且限制合理 → yield；缺口来自限制过严 → P33。
- **问题**：满房日 Demand ≠ Sold。IDeaS 仍无公开逐步估法。
- **为何影响建议**：sellout 日继续涨价 vs 已经拒客，判断相反。
- **状态（2026-08-24 00:17）：可观察代理 drafted。** `metrics/denials-regrets.md` + `recommendations/dont-raise-on-verbal-denials.md`。口头「赶过人」≠ Demand。日志是输入不是 Demand。IDeaS 对等公式 / 拒单补全 S 算法 **仍 NV**。**不要重写 unconstrained 步骤。**
- **状态（2026-08-24 04:17）：** 源进 `source-map.md` §20。04:17 复盘：IDeaS dirty-data（§12 已开）vs 本库拒单代理 = **兼容**（诊断日志 ≠ Demand 引擎）。无 needs_revision。不要重写指标卡 / unconstrained 步骤 / P43。
- **下一轮**：不编 IDeaS 公式；不编中国 PMS 拒单字段；Talluri 预测章 / JRPM 可复现估法仍 NV。**P42/P43/P44 drafted — 不要列为下一轮要写。** 字段/拒单% / STR Denials Index 仍 NV。199 / 工时 / 美团·携程钟点 SOP **仍 NV**。
- **依赖**：Talluri & van Ryzin；JRPM；IDeaS Buyer’s Guide 用词（仅厂商，晚课已复核）；本轮已开 Duetto Glossary / Lost Business、HSMAI Academy、STR Glossary（无 Denials 词条）。

### H5 · 「涨多少 / 降多少」没有可调用框架
- **状态（2026-08-20 20:00）：已有资产，幅度 Hypothesis。** `pricing/how-much-to-move.md` + Increase BAR / 降价卡。区间未升 S。
- **状态（2026-08-21 16:17）：事后弹性方向已交叉。** `how-much-to-move.md` §10 → 弹性卡判上一刀；幅度卡仍判下一刀。幅度数字未改。
- **问题**：理论书有弹性，RMS 是黑盒。DTA × 剩余 × pickup × comp 的可复现表仍缺。
- **为何影响建议**：这是顾问价值核心。
- **下一轮**：用真实反馈校准幅度；不要编点弹性；不要重写 how-much-to-move 档位。
- **依赖**：Phillips 2e；Hayes 2e；后续真实反馈。

### H6 · IDeaS 公开科学方法缺口
- **状态（2026-08-22 20:17）：已有资产；公式白皮书 / 中国 PMS 集成仍 NV。** About + Buyer’s Guide + dirty-data + 101 已开。**science-behind-g3 本轮打开**（DP vs deterministic；>100 模型；crew allotment ≠ 普通团；仍无逐步估法）。**该 URL 停再抓**。G3 Pricing Datasheet ©2021 打开。禁止 Duetto 对抄。
- **问题**：无公式级白皮书。unconstrained 估法未给。中国常见 PMS 是否在 102 integrations 内未知。
- **为何影响建议**：不能把「G3 会自动设对价」当诊断结论。
- **下一轮**：中国 PMS 集成列表 / 其他公式页。不要再抓 science-behind-g3。禁止把 Duetto TBB 抄进 IDeaS。
- **依赖**：ideas.com；IDC（可能付费）。

### H7 · Marriott One Yield / OYE 无公开页
- **状态（2026-08-22 20:17）：产品页 / 算法仍 NV；名称页+10-K 已开。** RMAS Plus Services **打开**（One Yield 培训/复核）。2025 10-K **打开**：只写 proprietary RMS，**无** OYE 名。careers 抽样 **仍 404**（20:17 FLEX UX testing + EMEA 新 slug；此前 Training Specialist）。**抽样 careers URL 停**。保持 HIGH（算法）。
- **问题**：产品页 0。招聘 URL 404。算法 100% Unknown。
- **为何影响建议**：对 Marriott 店不能假装会操作系统；cutover 期建议风险高。
- **下一轮**：等用户截图 / 非保密培训页。不要再抓已 404 的 careers slug。不要把 10-K「proprietary systems」写成产品说明书。
- **依赖**：https://rmas.marriott.com/plus-services ；10-K `b82978a6-9d28-4e38-9855-fc4ae2cebe11`

### H8 · 中国集团收益体系公开材料少
- **状态（2026-08-21 20:17）：已有资产；公式仍 NV。** 华住文档中心 + CRS API + H World 2025 年报（中央收入管理系统）已开。锦江 2025 年报：仅 WeHotel，无 RMS 字样。**首旅 2025 年报打开**：CRS（中央预订系统）+ 调价模型 + AI 数字店长；无独立「RMS」产品名。
- **问题**：三家均无公开优化公式。锦江年报不能当 CRS/动态定价证据。首旅「调价模型」不是逐步估法。
- **为何影响建议**：中国店是主场景。不能用 IDeaS 话术硬套华住会 + 美团/携程。
- **下一轮**：华住公式仍 NV。媒体「WeHotel CRS」不得当年报。不要把首旅 AI 数字店长写成 G3。
- **依赖**：上交所/港交所年报；https://docs.huazhu.com/；首旅 PDF `1225063930.PDF`

### H9 · Amadeus「Hotel RMS」是否还存在
- **状态（2026-08-22 20:17）：独立优化器仍 NV；伙伴 RMS 详页已补。** iHotelier CRS 产品页 04:17 已开（不是 G3）——**不要再当新发现**。12:17 伙伴文：优化在 IDeaS / BEONx。**20:17 `systems/beonx.md` 落地**（不是 G3）。solutions 总页无独立 RMS。保持 HIGH（独立优化器）。
- **问题**：现网是 CRS + RS360 BI。旧「Hotel Platform RM」只在第三方。
- **为何影响建议**：用户说「Amadeus 收益」时可能是 ACRS / iHotelier CRS / RS360 / 外面的 IDeaS·Duetto·BEONx。
- **下一轮**：用户截图属于哪块。不要把 iHotelier 或 RS360 或 BEONx 写成 G3。
- **依赖**：`systems/beonx.md`；伙伴文 https://www.amadeus-hospitality.com/insight/ideas-and-amadeus-expand-technology-partnership/ ；https://www.amadeus-hospitality.com/insight/amadeus-and-beonx-join-forces-to-elevate-hotelier-revenue-strategies/

### H10 · 经典 Forecast 方法还没有资产
- **状态（2026-08-20 20:00）：已有资产，剩余 NV。** `forecasting/forecast-framework.md` + unconstrained 卡。目录不再空。
- **问题**：部分方法仍缺可复现公式（MA 参数、事件 overlay 门槛）。
- **为何影响建议**：不会算 forecast，就不能说 pace 相对 forecast 领先。
- **下一轮**：不重写框架；Talluri 预测章精读仍 NV。
- **依赖**：eCornell Forecasting；Hayes；Talluri 预测章。

### H11 · Inventory / Restriction 杠杆无 playbook
- **问题**：Open/Close、MinLOS、CTA、嵌套库存只有任务书词，没有决策卡。
- **为何影响建议**：高峰日只改价不改限制，是常见漏项。
- **状态（2026-08-20 Wave4）：** 框架 + MinLOS/关低价/开库存卡 + P03/P06/P07 已 drafted。仍缺：P04 Early Sellout、P21 连住细则、P33 限制过度、NV-INV/RST 清单。
- **状态（2026-08-20 Wave5）：** P04 Early Sellout 已 drafted。仍缺 P21 / P33。
- **状态（2026-08-20 Wave7）：** P21 节假日连住已 drafted。仍缺 P33 限制过度；NV-LOS 清单见 los-optimization。
- **状态（2026-08-20 Scout）：** P13 房型压缩、P29 黄金周/春节、P19 预付已 drafted。仍缺 P33 限制过度。
- **状态（2026-08-20 17:00 Scout）：** P33 限制过度已 drafted。
- **状态（2026-08-20 20:00）：已有资产；Walk/P32 仍缺。** P21 + P33 可调用。晚课复盘：Peak 已证实 → MinLOS 留；肩日/短住误伤 → P33。不假装还没写。
- **状态（2026-08-21 11:00 Scout）：** P32 Citywide 已 drafted。仍缺 P24 Walk（Walk 成本 NV）。
- **状态（2026-08-21 14:17 Scout）：** P24 过程剧本已 drafted（`overbooking-walk.md` + `who-to-walk-first.md`）。**剩余 NV 是 Walk 成本数字**，不是剧本本身。P24 不输出金额或精确超售间夜。
- **状态（2026-08-21 22:17 Scout）：** P28 Weather Disruption 过程剧本已 drafted（`weather-disruption.md` + `dont-raise-into-cancel-wave.md`）。**剩余 NV：台风人次、取消率、Walk 成本、精确超售间夜、中国趁灾涨价法定幅度。** 天气夜 MinLOS Open 走 P33，不重写 P33。
- **下一轮**：用本店取消史 + 用户给的 Walk 成本清单校准超售区间；不要重写 P21/P33/P32/P24/P28 程序。留房 25% 与 MinLOS=2 仍待真实反馈。天气 % 不编。
- **依赖**：eCornell Availability / Pricing 课页；Duetto Open Pricing（对照，不当唯一真理）。

### H12 · 渠道净收益 vs Gross ADR
- **问题**：中国 OTA 佣金结构本库不写规则，但顾问必须会问净价。无 Net ADR 卡。
- **为何影响建议**：涨 OTA 价可能不如关低价计划或推直销。
- **状态（2026-08-20 Wave5）：** `channel/net-contribution.md` + `metrics/net-adr.md` 已可调用。中国 OTA 官方 % 仍未找到（NV-CH-01）。P20 剧本未写。
- **状态（2026-08-20 Wave7）：** P18 已 drafted（报/不报/只报肩日）。官方 % 仍 NV-CH-01 / NV-PRO-01。P20 仍未写。
- **状态（2026-08-20 Scout）：** P20 剧本已 drafted。官方 % 仍 NV-CH-01。
- **状态（2026-08-22 14:17）：** P35 曝光/排名过程剧本已 drafted。官方权重仍 NV。不报降权仍 NV-PRO-03。
- **下一轮**：等用户合同填费率；仍禁止编造 %。不要把 Booking 五要素写成美团公式。
- **依赖**：任务书 §23；OTA 知识库只作「去哪查规则」，不抄进本库当事实。

---

## MEDIUM

### M1 · Cornell eCornell 证书页 fetch timeout
- **问题**：课名靠检索交叉，证书页正文未存档。
- **动作**：换 UA/浏览器再抓；记下 2026 开课日与准确价格。
- **依赖**：ecornell.cornell.edu

### M2 · Cornell CHR / eCommons PDF 未打开
- **状态（2026-08-21 20:17）：部分打开。** Kimes 2017 vtechworks **已开**。Kimes 2010 **手稿 PDF 打开**（eCommons bitstream，25 页，非 CHR 封面）。官方 CHR 10(14) sha.cornell.edu URL 返回 HTML。handle 1813/70529 本轮 **429**。
- **问题**：eCommons 社区页仍打不开；CHR 排印本仍缺。
- **动作**：2010 手稿不再当「未打开」；CHR 排印本可降优先级。2017 不再当未打开。
- **依赖**：bitstream 已作 2010 手稿；vtechworks 已作 2017 镜像。

### M3 · Ivanov 2014 全文未打开
- **问题**：唯一整本酒店专著，SSRN/Zangador PDF 本轮不稳。
- **动作**：重下出版社 PDF，抽过程框架进 `theory/`。
- **依赖**：zangador.eu / SSRN。

### M4 · HSMAI 指南正文未得
- **问题**：CRME *Evolving Dynamics*、CRMA Study Guide 是现行协会大纲，付费墙。
- **动作**：能买则买；否则只用官方目录主题建卡骨架。
- **依赖**：academy.hsmai.org

### M5 · Duetto / IDeaS 之外的 RMS（Rainmaker 遗产、EZRMS、Atomize 独立时代文档）
- **状态（2026-08-22 20:17）：Atomize/Mews 官方页打开，`systems/atomize.md` 落地。** BEONx 详页同步落地（H9）。Rainmaker / EZRMS **未打开、不编页**。
- **问题**：景观仍缺 Rainmaker 遗产 / EZRMS 官方页。
- **动作**：只补能打开的官方页。不要发明 Rainmaker/EZRMS URL。
- **依赖**：厂商站。

### M6 · Hilton / IHG / Hyatt / Accor 组织与系统
- **问题**：任务书 §27。公开方法论页 0。
- **动作**：年报/技术日 + 招聘系统名；Accor「ARM」需官方页才能写。
- **依赖**：投资者关系。

### M7 · 价格弹性本店测量
- **状态（2026-08-21 16:17）：方向诊断已 drafted；点 η 仍 NV。** `pricing/price-elasticity-advise.md` + `recommendations/stop-cut-if-revpar-falls.md`。可调用 OCC/ADR/RevPAR 模式表（上一刀是否换到量）。**不**发布默认 η；不抄航空弹性。
- **问题**：无历史反馈，不能给点弹性 / 测量公式。
- **为何影响建议**：顾问常问「降了怎么还是不卖 / OCC 上来算不算成功」——方向已可答；点估计仍不能装懂。
- **动作**：等 `feedback/` 有 10+ 条再写测量草案；本轮不重写方向卡。
- **依赖**：内部案例；Lee et al. 全文点 η 不进本库默认。

### M8 · 中文实践频道
- **问题**：Bilibili / 公众号无合格官方系列。
- **动作**：只收能核主体的；其余保持搜索词。
- **依赖**：平台内人工核。

### M9 · Group Displacement 可算例子
- **状态（2026-08-20 Wave5）：** `cases/sim-2026-group-50x500-vs-transient-800.md` 已 drafted（Simulation）。
- **问题**：eCornell Overbooking 课含团队，无本库练习。
- **动作**：已有匿名练习；下一轮用真实反馈校准 ET/Wash，不把仿真当真店。
- **依赖**：课页 takeaway；Hayes。

### M10 · Rate Shopper 数据质量
- **状态（2026-08-22 22:17）：P36 + 决策卡 drafted。** `advisor-playbooks/rate-shopper-incomparable.md` + `recommendations/dont-follow-incomparable-shop.md`。可调用：截图不可比 → Hold；P16 只在可比之后。
- **状态（2026-08-23 04:17）：** 源已进 `source-map.md` §17。Duetto Rate Shops **复核打开**（默认单晚；登录会员价不进；默认入住双人）。Lighthouse API v3.1 / Booking Demand `logged_in_deals` / SiteMinder Insights 报告页目录化。**不重写 P36。**
- **问题**：RS360 称 sanctioned；多数 shopper 是爬价。顾问会误把登录价当公开价。
- **为何影响建议**：假 80（会员/含早/App/套房/连住均价）会让顾问误进 P16 砍 BAR。
- **动作：** 卡已写。不重写。剩余 NV：美团/携程可比价公式；sanctioned vs 爬价**行业**比例（RS360 95% 不得外推）；IDeaS 专页；中国含早/含税默认 SOP。
- **依赖**：Amadeus RS360 页（已开）；SiteMinder Insights（22:17 打开，§17）；Duetto Rate Shops / Lighthouse API / Booking Demand API（已开，§17）。

### M11 · 天气/台风 RM 数字（P28 已写剧本）
- **状态（2026-08-21 22:17）：P28 过程剧本 drafted。** 台风人次、本店/行业取消率、中国趁灾涨价法定幅度、Cornell/HSMAI 台风专页仍 **NV**。
- **为何影响建议**：不能把 NMC 有台风写成该店该涨/该降；不能报「取消率 X% 所以超 N 间」。
- **动作**：等本店天气夜取消史；不重写 P28。搜索词见 `research-log/2026-08-21-2217-scout.md`。
- **依赖**：NMC 公报（已开，只作气象 Fact）；用户本店史。

### M12 · T18 Total RM 数字缺口（理论卡已写）
- **状态（2026-08-22 04:17）：骨架+理论卡 drafted；P30 **已 drafted**（02:17）。** 04:17 打开 STR P&L（厅租/AV=Other F&B）+ HSMAI Events 课名 / RevPAS 词条。本店 F&B 贡献率仍 NV。
- **状态（2026-08-22 08:17）：** T19 贡献/宁可不卖/Flow-through **已 drafted**。客房变动成本金额仍 NV（不在 T18 编）。
- **问题**：本店 F&B/宴会**贡献**、客房变动成本、功能空间另售机会成本无内部数。
- **为何影响建议**：没有贡献数字就不能用「餐很高」推翻客房置换；顾问禁止编毛利。
- **动作**：等用户给贡献三数。不重写 T18/P30。内部 **变动成本仍 NV**（T19 卡可调用，金额不编）。RevPAS 不当本店坪效。
- **依赖**：用户宴会成本；USALI / STR P&L 部门口径（用户报表是否对齐仍 NV-GP-01）。
- **状态（2026-08-25 12:17）：** Kimes & McGuire 2001 Function-space RM 镜像打开（ConPAST 目录级，**不是 BAR**，不当本店坪效）。餐毛利 / 厅租行情 **仍 NV**。不重写 T18/P30/P50。不要把 ConPAST 写成今晚 BAR。


### M13 · T19 变动成本数字（理论卡已写）
- **状态（2026-08-22 08:17）：骨架+理论卡 drafted。** `theory/profit-contribution.md` + `do-not-sell-below-contribution.md` + `metrics/flow-through.md`（STR 公式已核）。
- **问题**：本店每间夜增量变动成本（布草/清洁/早餐/能耗）无内部数。佣金% / Walk 仍 NV。
- **为何影响建议**：没有净价+变动成本不能说 499「总比空着强」；顾问禁止编布草表。
- **动作**：等用户给布草/早餐/佣金三数。不重写 T19。不设默认 Flow Through 目标%。
- **依赖**：用户成本清单；合同佣金；NV-PC-01 / NV-CH-01 / NV-OB-01。


### M14 · T20 战略层数字/SOP（理论卡已写）
- **状态（2026-08-22 16:17）：骨架+理论卡 drafted。** `theory/revenue-strategy.md` + `do-not-break-brand-floor.md` + `dont-cut-to-hit-budget.md`。
- **问题**：用户集团 SOP、品牌最低价表、Cluster 对 BAR/促销/团队的法定权责、预算完成率公开门槛均无公开页。
- **为何影响建议**：不能把「差 10% 必须砍」或「华住 699」当 Fact；破底必须问组织图。
- **动作**：等用户声明地板 / 组织图。不重写 T20。不编 699 / 完成率门槛 / 集团 SOP。
- **依赖**：NV-RS-01..05；用户输入。


### M15 · T06 OO/OOO 顾问动作（理论卡+P37 已写）
- **状态（2026-08-23 00:17）：理论+决策卡 drafted。** `theory/capacity-ooo.md` + `dont-price-off-ooo-occ.md`。
- **状态（2026-08-23 02:17）：P37 drafted。** `advisor-playbooks/ooo-capacity.md` + `cases/sim-2026-ooo-occ-92-saturday.md`（Hold 779–799 首选 799）。**不要列为下一轮要写。**
- **状态（2026-08-23 04:17）：** 源进 §17。Forward STAR 复核：Adjusted **排除 OOO**。OPERA Cloud 26.2 OO vs OS **打开**（PMS 注，`tech-map.md` §5；OO 扣库存、OS 不扣）。04:17 复盘：P37 Hold vs P03 Days-to-Sellout **兼容，无 needs_revision**（13> DTA 6）。
- **问题**：中国 PMS 维修/停用/锁定/自用**报表字段名**、本店是否从 Remaining 扣 OOO、维修房间夜常模仍无打开的官方页。OPERA OO/OS **不得**当中国字段名。
- **为何影响建议**：缺字段名不能假装会读绿云/西软维修报表；缺间夜不能把 20 当默认。
- **动作**：卡+剧本已写。不重写。剩余 NV：中国报表名；本店 PMS 是否扣 OOO；用户是否已报 STR 改房量。不要编字段，不要编 20。顾问问：这个状态扣不扣今晚 Remaining；MPI 要 Historical STAR，OTB% 要 Forward Adjusted。
- **依赖**：STR Historical Guidelines（已开，§17 OOO 用途）；STR Glossary（已开，无 OOO 主词条）；Forward STAR Adjusted（已开，04:17 复核）；HFTP USALI FAQ Q16 / HotStats / Stayntouch（已开，§17）；OPERA Cloud OO/OS（04:17 新开，仅该 PMS）。



### M16 · P38 取消窗数字（剧本已写）
- **状态（2026-08-23 06:17）：P38 drafted。** `advisor-playbooks/cancel-policy-tighten.md` + `tighten-cancel-before-cut.md` + `cases/sim-2026-free-cancel-stack-dta3.md`（Hold 779–799 首选 799）。**不要列为下一轮要写。**
- **问题：** 美团/携程官方免费取消截止点、罚金表、本店同窗取消率、STR 灵活转化原文仍无打开页。
- **为何影响建议：** 不能把 Booking「1–2 天」抄成中国 SOP；不能报行业取消% 当正常。
- **动作：** 卡+剧本已写。不重写。剩余 NV：NV-CXL-01..05。不要编截止点。顾问问：新单免费窗现在是随时退还是 24h；已确认单不要暗改。
- **依赖：** Booking Partner 政策页（已开）；Lighthouse 2025-08-29（已开）；HSMAI ROAB（已开）；Duetto 2016（已开，样本间夜不用）；本店史。

- **状态（2026-08-23 12:17）：** 源进 `source-map.md` §18。Booking 政策页 **复核打开**（确认预订=协议；临时例外；1–2 天建议非强制）。Handling cancellations / SiteMinder no-show / 美团截止点 / STR 灵活原文 **仍 NV**。12:17 复盘：P38 vs P14/P19 **正确拆开**；vs P28 天气夜不收窗；预付 775 兼容 P19 −3–5% / T20 / 禁一夜 −15%。无 needs_revision。


### M17 · 口碑 vs 价格（理论+P39 已写）
- **状态（2026-08-23 08:17）：理论+决策卡 drafted。** `theory/reputation-vs-price.md` + `dont-cut-for-review-score.md`。可调用：评分掉了 Hold BAR，修内容/运营；报名走 P18；无截图不发明 4.3。
- **状态（2026-08-23 10:17）：P39 drafted。** `advisor-playbooks/review-score-drop.md` + `cases/sim-2026-review-43-saturday.md`（Hold 779–799 首选 799；4.3 仅 Simulation）。**不要列为下一轮要写。**
- **问题：** 美团/携程官方卫生分 **4.7 红线**、评分权重%、降 0.1 分转化% 仍无打开页。Anderson 2012 英文 eCommons handle 仍 429（Mandarin 译本+VT 文摘已开，方向可用，点估计不进启发式）。
- **为何影响建议：** 不能把 4.7 / 0.1 分弹性当 Fact。剧本已挡住「分掉了就砍」；剩余是平台公式 NV。
- **动作：** **不要重写理论卡/P39。** 剩余 NV：NV-REP-01..04（NV-REP-05 剧本已落地）。不要编 4.7。不要倒置 Anderson。顾问问：哪个平台、有没有评分截图、近窗差评主题是什么。
- **依赖：** Booking Partner 评分/内容页（已开）；HSMAI 内容完整度（已开）；STR Glossary（已开，无 Review Index）；Anderson 方向（译本+文摘已开）。

- **状态（2026-08-23 12:17）：** 源进 §18。Booking responding **复核打开**。Anderson 英文 handle **再试一次仍 429**。Mandarin+VT 已开。理论卡用的是 **CHR reviews**，**≠** source-map §13 Anderson & Xie 2012 POM opaque —— 已记下区分，无 needs_revision。12:17 复盘：P39 vs P35/P18/P02/P05 **兼容**。4.7 仍 NV。

---


### M18 · T08 Stay Pattern（P40 已写；理论 16:17 已加深）
- **状态（2026-08-23 16:17）：T08 理论已推。** `pricing/los-optimization.md` §10+ 网络 + `metrics/stay-network-value.md`（CNV = 收入/紧夜；Hypothesis，STR 无此公式）。P40 14:17 已 drafted，**不重写**。**不要列为下一轮要写剧本或再写一遍理论。**
- **问题：** 中国 OTA 连住均价展示公式、美团/携程 MinLOS/CTA 展示与拒单、MinLOS 挂到达日 vs 覆盖夜（NV-RST-01）仍无打开的官方页。STR/HSMAI **无** compressed-night 官方式（NV-LOS-07，已确认 Glossary 无词条）。
- **为何影响建议：** 不能把「OTA 均价必须砍高峰」当 Fact；不能假装会点中国渠道限制字段；不能把 CNV 写成 STR KPI。
- **动作：** 理论+指标+剧本已写。不重写。剩余 NV：NV-LOS-04/05/07。不要编均价公式。不要把 Duetto 5–7%/7–10% 抄进启发式。顾问问：周五周日还卖不卖；限制挂在到达日还是覆盖夜。
- **依赖：** CoStar STR Glossary（16:17 新开，无 CNV 词条）；HSMAI Academy LOS pricing（16:17 新开）；eCornell Do/Don't；HSMAI MinLOS；HSMAI 2020；Lighthouse；Duetto Forecast / BAR-LOS；IDeaS 转载（ideas.com 空页）。
- **长包房：** **P41 drafted（18:17）。** 过程可调用。**月租价表 / 华住 SOP / 某市 300 行情仍 NV-LOS-06**，不编。STR Contract 口径（>~30 天保证付款）已挂 P41。不要重写 P41。
- **状态（2026-08-23 20:17）：** 源进 `source-map.md` §19。eCornell Displacement **本轮重试打开**（课纲级；§15 曾 timeout）。20:17 复盘：P41 560–650 vs T20 vs P40 Hold 799 = **两层兼容**（合同 Counter ≠ 公开 BAR Hold），无 needs_revision。P41 每个周六 vs P40 拒 Sat-only = 同一瓶颈。CNV vs 30×淡季均价同向。不要重写 P40/T08/P41。剩余 NV：NV-LOS-04/05/06/07。



### M19 · 拒单日志（指标+P43 已写）
- **状态（2026-08-24 00:17）：指标+决策卡 drafted。** `metrics/denials-regrets.md` · `recommendations/dont-raise-on-verbal-denials.md`。**不要列为下一轮要写指标。**
- **状态（2026-08-24 02:17）：P43 drafted。** `advisor-playbooks/verbal-denials.md` + `cases/sim-2026-fo-turned-away-no-log.md`（Hold 779–799 首选 799；「5 拨」仅 Simulation）。**不要列为下一轮要写剧本。**
- **问题：** 中国 PMS 拒单字段名、行业拒单%、STR Denials Index（词表无）、Walk 成本仍 NV。**钟点房走 P44（06:17 drafted）。** 199 / 工时 / OTA 钟点 SOP **仍 NV**。
- **为何影响建议：** 无日志不能涨；有日志仍要分容量/限制/价。过程已挡住「赶过人所以 899」。剩余是字段名/% NV。
- **动作：** **不要重写指标卡/P43。** 不编字段名/%。钟点过程走 P44，不要重写。
- **依赖：** Duetto Glossary + Lost Business（已开，§20）；HSMAI Unconstrained 词条（已开，公式不是 Sold+Denials）；STR Glossary（已开，无 Denial 词条）；IDeaS Science 101（08-20 已开，00:17 正文空）。IDeaS dirty-data **已在 §12**。
- **状态（2026-08-24 04:17）：** 源进 §20。复盘无 needs_revision。IDeaS dirty-data vs 代理 **兼容**。P43 vs P03（Remaining 62 不紧）**兼容**。P42 vs P05 两道围栏 **兼容**。**不要列为下一轮要写剧本或指标。** 字段 / 拒单% / STR Denials Index 仍 NV。
- **状态（2026-08-24 06:17）：钟点房走 P44 drafted。** 不要把「钟点房仍空」当当前缺口。字段 / 拒单% / STR Denials Index 仍 NV。


### M20 · 钟点/day-use（P44 已写；OCC 理论 08:17 已写）
- **状态（2026-08-24 06:17）：P44 drafted。** `advisor-playbooks/day-use-hourly.md` · `recommendations/dont-dump-overnight-for-dayuse.md` · 仿真 `cases/sim-2026-dayuse-199-vs-sat-bar.md`。**不要列为下一轮要写剧本。**
- **状态（2026-08-24 08:17）：理论 drafted。** `theory/day-use-inventory.md` · 短卡 `recommendations/dont-raise-overnight-off-dayuse-occ.md`。OCC>100% 同日再卖 ≠ 过夜更紧。**不要写第二本剧本。不要重写 P44。**
- **状态（2026-08-24 12:17）：复盘。** 源进 `source-map.md` §21。STR vs USALI vs P44 Advise = **两套尺冲突已记录；Advise 两套都成立**（高峰关钟点；不按 108% 涨过夜 BAR）。不是 STR-only 误设。无 needs_revision。P44 仅文末一行补 USALI。P44 vs P05 vs P42 三产品兼容。P44 vs P37 胀分子≠缩分母已标。**不要列为下一轮要写剧本。不要重写 P44 / 理论 / occ.md。**
- **问题：** 美团/携程钟点房价表与商家 SOP、保洁加一次周转分钟、199 是否某市行情、钟点佣金%、华住/锦江钟点 SOP、STR day-use 行业占比、HSMAI Ancillary Playbook 正文菜谱、**中国 6pm 营业/OTA 死线** **仍 NV**。
- **为何影响建议：** 过程已挡住「下午钟点火所以晚上让路」和「BAR→钟点价」。缺 SOP/工时/% 时仍给开/关/限额 + 交回闸，不编价表、不编分钟、不把 199 当行情。
- **动作：** **不要重写 P44。不要写第二本钟点剧本。** 不编 NV-DU-01…07 / 199 / OTA SOP / 6pm 中国。顾问问：108% 里几间是钟点再卖；过夜 Remaining；晚上还能不能卖过夜。
- **依赖：** STR/CoStar Historical Benchmarking（本轮打开，S）；HSMAI Ancillary Playbook 新闻稿（打开，A；正文 PDF 未开）；Mews / Dayuse partners / Prostay 2026（Vendor B）。


### M21 · 早会 / Daily Brief（P45 已写）
- **状态（2026-08-24 10:17）：P45 drafted。** `advisor-playbooks/daily-revenue-brief.md` · `recommendations/one-action-from-morning-huddle.md` · 仿真 `cases/sim-2026-monday-huddle-gm-occ.md`（不砍；Hold 779–799 首选 799；P18 Skip 399；24h Pickup 一个观察）。**不要列为下一轮要写剧本。**
- **状态（2026-08-24 12:17）：复盘。** 源进 §21。P45 vs T20/P01 = GM OCC 虚荣 vs Remaining+Pace，**兼容**。10′ huddle Hypothesis vs HSMAI 周会 60′ **标了就不是冲突**。P45 vs P18 399 出资未知 Skip **兼容**。仿真 Remaining 32 / 5 OOO / 82% 与 P37 **兼容**。无 needs_revision。**不要列为下一轮要写。不要重写 P45。**
- **问题：** Cornell 公开每日 huddle 议程、华住/锦江早会 SOP、HSMAI Toolkit Daily 任务正文、晨会视频转录、协会是否规定每日分钟数 **仍 NV**。
- **为何影响建议：** 过程已挡住「OCC 82% 所以砍」和「报个 399 会比较好开」。缺集团 SOP 时仍给三拍 + 一个动作，不编华住清单、不把周会四圆塞进早会。
- **动作：** **不要重写 P45。** 不编 NV-MTG-01…05。顾问问：今晚+三天过夜 Remaining（扣 OOO、不混钟点）、Pace、促销谁出资。
- **依赖：** HSMAI APAC/Academy 周会指南 + sample agenda PDF（本轮打开，A，对象=周/双周）；Toolkit 入口（条目未摘）；Cornell HADM 6050 课页无 huddle。


### M22 · Complimentary / House Use（理论+卡 16:17 已写；P47 18:17 已 drafted）
- **状态（2026-08-24 16:17）：theory+metric+decision card drafted。** `theory/complimentary-house-use.md` · `metrics/complimentary-house-use.md` · `recommendations/dont-raise-on-comp-occ.md` · 仿真 `cases/sim-2026-comp-occ-92-sat.md`（Hold 779–799 首选 799）。
- **状态（2026-08-24 18:17）：P47 drafted。** `advisor-playbooks/complimentary-house-use.md`。主卡复用 `dont-raise-on-comp-occ.md`（不重写）。仿真复用并追加十节 + 第二拍拒绝 399 dump。**不要列为下一轮要写剧本。不要重写理论/卡。**
- **问题：** 中国 PMS 免费/自用/招待**报表字段名**、本店 OCC 是否含 Comp、上报 STR 是否已剔除无关 Comp、Forward 是否把 Comp 扣进 Rooms Booked **仍 NV**。政府协议价 **仍 MEDIUM 未写**。
- **为何影响建议：** 过程已挡住「PMS OCC 92%（含 10 间 Comp）所以涨」和「ADR 被 $0 分母拉低所以砍/补涨」和「请客房还空着所以 399」。缺字段名时仍拆口径，不编西软/绿云名，不编 Comp %。
- **状态（2026-08-24 20:17）：来源复核。** Glossary / Historical / Forward（US+GB）重开。OPERA/Mews/Marriott 进 §22。**不要重写理论/卡/P47。不要写政府价。**
- **动作：** **不要重写理论/卡。不要重写 P47。不要写政府价。** 不编 NV-COMP-01…05。顾问问：几间无关免费；这张 OCC 是 PMS / STAR 历史 / Forward；是不是促销送夜。永久 HU → P37。
- **依赖：** STR Glossary + Historical Guidelines + Forward STAR（本轮打开，S/A）；HotStats Permanent HU 指针复用 08-23（P37）。


### M23 · 政府协议价 / per-diem（理论+卡已写；P48 02:17 已 drafted）
- **状态（2026-08-25 02:17）：P48 drafted。** `advisor-playbooks/government-negotiated-rate.md`。主卡复用 `dont-anchor-bar-to-gov-rate.md`（不重写）。仿真复用并追加十节 + 第二拍拒绝 BAR 480「跟差旅标准」。**不要列为下一轮要写剧本。不要重写理论/卡。** 现行分城市/职级住宿费限额表 **仍 NV**。不编华住政务价。GSA $110 未当中国 BAR。
- **状态（2026-08-25 00:17）：theory + decision card + metric drafted。P48 playbook 于 02:17 已开。** `theory/government-negotiated-rate.md` · `recommendations/dont-anchor-bar-to-gov-rate.md` · `metrics/government-negotiated-rate.md` · 仿真 `cases/sim-2026-gov-rate-sat-blackout.md`（Hold 779–799 首选 799；建议周六限额/blackout；拒绝 BAR→480；拒绝当 Comp）。GSA FY2026 标准 lodging $110 = **US Fact，不是中国 BAR**（FTR 26-01 00:17 重开，$110 仍在页上）。531 号办法 = 框架（限额内凭票；本小时 fetch timeout，§22 已开）。**现行分城市/职级住宿费限额表仍 NV**（本小时搜 2024/2025/2026 未打开带数字的官方表；不把 2015/2016 当现行 Fact）。政务协议价目录仍 NV。禁止发明华住政务价。不要把政府价标成 complimentary。
- **状态（2026-08-24 20:17）：MEDIUM 未写。** 当时开了 GSA + 531。限额表 NV。不要写 P48。
- **问题：** 中国差旅住宿限额表、政务协议酒店结算价、政府价是否误标 Comp。**过程剧本已可调用**；没有限额表仍不能写「该市该职级该卖多少」——形 F 说 NV，问本店协议价。
- **为何影响建议：** 没有限额表就不能写「该市该职级该卖多少」；GSA $110 不能当中国 BAR 锚。P48 已挡住「按协议 OCC 涨 / BAR 跟到差旅 / 公务员当免费」。
- **动作：** **不要重写理论/卡。不要重写 P48。** 不编 NV-GOV-01…06。不发明华住价。顾问问：本店协议间数与房价；合同该晚可否 blackout；这张 OCC 是否含协议。限额表仍 NV。
- **依赖：** GSA per diem + FTR 26-01（已开并 00:17 复核，US）；531 号办法（§22 已开，无表）。搜索词：`财政部 调整中央和国家机关差旅住宿费标准 通知 site:gov.cn` `财行 差旅住宿费标准 2024 2025 2026 site:gov.cn`。
- **状态（2026-08-25 12:17）：** 全国现行分城市/职级限额表 **仍 NV**。531 ccgp **重开成功**（复确认，仍无表）。财行〔2024〕435 检索为雄安专项，省级页 fetch 500，MOF 原文未开；**≠全国表，数字不抄**。不要重写 P48。不要把 GSA $110 当中国 BAR。

### M24 · 积分兑房 / 空间可用升级（P49 06:17 已 drafted）
- **状态（2026-08-25 06:17）：P49 drafted。** `advisor-playbooks/loyalty-award-upgrade.md`。主卡 `dont-raise-on-award-occ.md`。仿真 `cases/sim-2026-award-upgrade-sat.md`（Hold 779–799 首选 799；停 SA 升级；不按 92% 涨；不 dump）。**不要列为下一轮要写剧本。不要重写。** STR 兑房进 Sold **仍 NV**。华住积分结算 **仍 NV**。不抄 BW 90/70/40 当中国默认。不编 Marriott 中国网格。不写 P50 会带房。
- **问题：** 兑房是否进 STR Sold；华住/锦江对酒店结算公式；本店品牌该晚可否关非确认兑房。
- **为何影响建议：** 没有结算表就不能写「报销多少所以接多少」；没有 Sold 裁定就不能把兑房当 Comp 或当 Sold Fact。P49 已挡住「按兑房 OCC 涨 / 高峰乱升套房 / dump 399」。
- **动作：** **不要重写 P49。** 不编 NV-AWD-01…05。顾问问：兑房间数、SA 升级间数、是否已确认升级奖。华住结算仍 NV。
- **依赖：** STR Historical Guidelines + Glossary（本轮打开，Sold 归属 NV）；BW Innsider FX（Vendor BW only）；Marriott NUA / Platinum upgrade（Vendor Marriott only）；OMAAT C 向。搜索词：`华住 积分兑房 酒店结算`。
- **状态（2026-08-25 12:17）：** Historical 重开：loyalty redemption **收入**有口径（prevailing rate conservative average；月末或按日摊）。**Sold Include/Exclude 表仍未点名 loyalty awards → 兑房进 Sold 仍 NV。** 无 Award OCC 词条。不要重写 P49。不要发明 STR Award OCC。华住结算仍 NV。

### M25 · 会带房 / meeting+rooms（T-Meet 08:17 已 drafted；P50 10:17 已 drafted）
- **状态（2026-08-25 10:17）：P50 drafted。** `advisor-playbooks/meeting-with-rooms.md`。主卡复用 `dont-dump-bar-for-meeting-rooms.md`（不重写）。仿真复用并追加十节。**不要列为下一轮要写剧本。不要重写理论/卡。** 会带房最小数据模板 **仍 NV**。华住 SOP / 餐毛利 / 厅租行情 **仍 NV**。不把 RevPAS 当 BAR。不编 399 行情 Fact。
- **状态（2026-08-25 08:17）：理论+卡+指标+Simulation drafted。P50 playbook 于 10:17 已开。** `theory/meeting-with-rooms.md` · `recommendations/dont-dump-bar-for-meeting-rooms.md` · `metrics/meeting-with-rooms.md` · `cases/sim-2026-meeting-10-rooms-sat.md`（周二留会 Counter 客房；周六拒便宜房 / Hold 779–799 首选 799）。会带房最小数据模板 **仍 NV**。华住 SOP / 餐毛利 / 厅租行情 **仍 NV**。不把 RevPAS 当 BAR。不编 399 行情 Fact。
- **问题：** 本店会带房块 cutoff/wash；厅是否含在套餐；本店面积能否算 RevPAS（仍不当 BAR）。**过程剧本已可调用**；没有模板仍不能写「该卖多少会带房价」——问用户贡献与块价。
- **为何影响建议：** 没有贡献数字就不能 Accept 低价房；没有模板就不能写「该卖多少会带房价」。P50 已挡住「10 间随便给 / BAR→399 / 按参会 OCC 涨」。餐毛利 **仍 NV**。
- **动作：** **不要重写理论/卡。不要重写 P50。** 不编 NV-MEET-01…05。顾问问：厅+餐贡献、按夜房块×价、transient remaining。华住价表仍 NV。餐毛利仍 NV。
- **依赖：** STR P&L（§12/§24 重开）；HSMAI RevPAS 词条；IDeaS/Duetto 公开页 B Vendor；环球旅讯 C/D。搜索词：`会带房 会议 客房 收益`。
- **状态（2026-08-25 12:17）：** OPERA cutoff/pickup/wash + HSMAI wash/attrition/slippage **打开**（机制/词条）。Kimes 2001 ConPAST 镜像打开（**不是 BAR**）。餐毛利 **仍 NV**。本店 cutoff 天数 / wash % / 会带房模板 **仍 NV**。**不要列为下一轮要写剧本。不要重写 P50。** pickup vs cutoff 是 What To Watch 字段，12:17 不改正文。

### M26 · 只要厅不要房 / Catering Only（P51 14:17 已 drafted；T-Hall 16:17 已 drafted）
- **状态（2026-08-25 16:17）：T-Hall 理论 drafted。** `theory/function-space-occupancy.md`。主卡复用 `dont-raise-bar-on-full-hall.md`（不重写）。P51 过程已存在。**不要列为下一轮要写剧本。不要写 P52。不要重写 P51 正文。** 厅租行情 / 餐毛利 / 华住 SOP / 本店 RevPAS 数字 **仍 NV**。不把 RevPAS / ConPAST 当 BAR。80/14/799 Simulation only。
- **状态（2026-08-25 14:17）：P51 drafted。** `advisor-playbooks/catering-only.md`。主卡 `dont-raise-bar-on-full-hall.md`。仿真 `cases/sim-2026-catering-only-sat.md`（周六拒/Counter 高峰厅 Hold 779–799 首选 799；不按厅满涨；不因厅忙 dump；周二 Accept 厅 Hold 799）。**不要列为下一轮要写剧本。不要重写。** 厅租行情 / 餐毛利 / 华住 SOP **仍 NV**。不把 RevPAS / ConPAST 当 BAR。不编 399 行情 Fact。80/14/799 Simulation only。
- **问题：** 本店厅段机会成本；同段婚宴/会带房询价密度；本店面积能否算 RevPAS（仍不当 BAR）。**过程剧本已可调用**；没有价表仍不能写「该卖多少厅租」——问用户贡献。
- **为何影响建议：** 没有贡献数字就不能 Accept 高峰厅；没有价表就不能写「该卖多少厅租」。P51 已挡住「厅满了涨 BAR / 周末低贡献占厅 / 因厅忙 dump」。餐毛利 **仍 NV**。厅租行情 **仍 NV**。
- **动作：** **不要重写 P51。不要规定 P52。不要重写理论卡。** 不编 NV-CAT-01…05 / NV-HALL-01…04。顾问问：厅+餐贡献、占哪段厅、transient remaining、同段带房会/婚宴。华住价表仍 NV。餐毛利仍 NV。本店 RevPAS 不编。
- **依赖：** OPERA Catering Only（§25 指针）；HSMAI Local Catering / Group Catering / Displacement Analysis（§26 新开）；STR P&L / RevPAS（§12/§24 指针）；Kimes 2001 ConPAST 目录级（§25 指针）。搜索词：`只要会议室不要客房 收益` `华住 厅租 价表 官方`。

### M27 · 团 attrition / wash 作 P10/P50 观察尺（MEDIUM 登记；P52 18:17 已 drafted）
- **状态（2026-08-25 20:17）：P52 drafted — 不要列为下一轮要写。** 本小时新开 OPERA Wash Schedule / Cutoff Block / Block Overview；Duetto glossary wash（无默认 %）；IDeaS definite 扣库存 / tentative 不扣。**本店 wash% / 10–25% / 罚金 / 华住 cutoff SOP 仍 NV，不编。** 不要重写 P52 / P10 / P50。22:17 = scout（definite vs tentative），不是 must-write 剧本，不要规定 P53。
- **状态（2026-08-25 18:17）：P52 Group Cutoff / Wash drafted。** `advisor-playbooks/group-cutoff-wash.md`。主卡 `dont-dump-before-cutoff.md`。**不要列为下一轮要写剧本。** 本店 % 仍 NV。
- **状态（2026-08-26 02:17）：P54 Transient No-show drafted。** `advisor-playbooks/transient-noshow.md`。主卡 `dont-dump-on-noshow.md`。**不要列为下一轮要写剧本。** 本店 no-show% 仍 NV。SiteMinder no-show 仍 NV。
- **状态（2026-08-25 14:17）：MEDIUM 只登记。** HSMAI wash / attrition / slippage 词条 12:17 已开；OPERA wash/cutoff 机制已开。**本店 % 仍 NV。不要写第二本剧本。不要重写 P10/P50 正文。**
- **问题：** 本店 cutoff 天数、wash %、slippage 常模。
- **为何影响建议：** 没有本店 % 就不能把「行业 10–25%」写进 Counter。观察字段已够：pickup vs cutoff。
- **动作：** 等用户块史。不编 wash %。**不要写 wash 专剧。不要发明已占用的 P 号。** 18:17 若走案例：只可 CASE-only 走现有 P10/P50 块上的 pickup vs cutoff（What To Watch），本店 % 仍 NV，仍 MEDIUM。
- **依赖：** §25 HSMAI + OPERA。搜索词：`hotel group wash percent cutoff pickup` `团 wash 滑移 中国`。

## LOW

### L1 · IDeaS 停车/邮轮 RMS
- 与酒店顾问弱相关。需要时再开。

### L2 · BEONx HQI 计算方法
- **状态（2026-08-22 20:17）：HQI 产品页已开**（`beonx.md`）。权重公式仍 NV。有欧洲度假店用户再深挖，不要把 +6–15% 当目标。

### L3 · Restaurant / Spa / Golf RM
- **状态（2026-08-22 04:17）：T18 理论卡 drafted；P30 婚宴 **已 drafted**。** 餐厅/水疗/高尔夫专篇仍 not_started。HSMAI Events 课名已开（不摘正文）。
- eCornell Non-Traditional 仍后期。不要用 T18 当 P30；P30 不重写。

### L4 · 航空 PODS / NDC 动态 offer
- 理论营养，酒店优先级低。

### L5 · 2019 前中文旧教材精读
- 胡质健 2009 等只作史。

### L6 · JRPM 2026 最新一期逐篇
- 已有期刊入口。按需搜 hotel 主题，不追新。

### L7 · 航司机组合同数字（剧本已写）
- **状态（2026-08-22 18:17）：P31 drafted。** 价表/allotment 间夜/取消率/IATA 名单/份额保证金/华住锦江 SOP / AHLA 85–95% 仍 NV。
- **动作：** 等用户合同。不重写 P31。不把仿真 380/899 当 Fact。

---

## 下一轮建议顺序（对早课）

**2026-08-28 18:17：P70 装修/分阶段/软重开 drafted — 不要列为下一轮要写。不要规定 P71。** `advisor-playbooks/soft-renovation-phased-reopen.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「装修冲量/软重开地板」。先重算可售（扣装修 OOO）。本店 PIP / 华住装修 SOP / 默认折扣 % **仍 NV**，不编。180/40/140/14/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要规定 P70」= theory 不得指定；本案例核实后开。不要重写 P01–P69。**下一槽 20:17 = sources/recap hour。不要规定 P71。**



**2026-08-26 12:17：** **来源与复盘。无 needs_revision。** 源进 `sources/source-map.md` §35（Mews Operations create-a-reservation A Vendor PMS：Inquired 不扣 / Optional+Confirmed 扣 / 未确认可设释放日；Infor HMS Creating guarantee methods A Vendor PMS：店配担保码）。**P55 / T-Guar / P56 drafted — 不要列为下一轮要写。不要规定 P57。不要重写 P01–P56 / T-Guar。** 本店预订类型 / Deduct mapping / 放房时点 / Rolling / 押金% / hold conversion / no-show% / Walk $ / 本店预算表 / 考核指标 / 奖金口径 / 变动成本 / AHLA 85–95 / Cornell Budget-vs-Forecast **仍 NV**，不编。399 = P55 与 P56 被拒绝的 dump，不是 Fact BAR。OPERA 仍 Vendor PMS store-configured。无新 RMS/systems 页（Mews/Infor 是 PMS help，不写假 RMS 文件）。**下一槽 14:17 = scout hour。** 本小时不点下一本剧本号。Scout 只核仍 NV 观察字段，不是 must-write 剧本。

**2026-08-26 04:17：** **来源与复盘。无 needs_revision。** 源进 `source-map.md` §31。**P54 drafted — 不要列为下一轮要写。不要规定 P55。不要重写 P01–P54 / T-Status / T-Hall。** 本店 no-show% / 5% / 10% / wash% / Walk $ / 华住字段 **仍 NV**，不编。399 = 被拒绝的 dump，不是 Fact BAR。无假 RMS 页。**下一槽 06:17 = scout。** 提示（只点名、本小时不写）：**guaranteed vs non-guaranteed / 6pm hold vs deposit**（OPERA 预订类型 + HSMAI Guaranteed + Duetto 超售准备；与 no-show posting 相邻，不是 P54 重写）。不要发明已占用的 P 号。

**2026-08-26 02:17：** **P54 Transient No-show playbook drafted — 不要列为下一轮要写。不要规定 P55。** `advisor-playbooks/transient-noshow.md`。仿真周六 Hold 779–799 首选 799；禁 dump 399；不跟 wash 混；不按含未到 OCC 涨；Behind 枝 remaining 40 才评 P05（仍不是因为 no-show）。本店 no-show% / 5% / 10% / wash% / Walk $ **仍 NV**，不编。8/22/40/399/799 Simulation only。399 = 被拒绝的 dump。00:17「不要写 P54」= 不要复写 P53；本槽是当天散客未到。不要重写 P01–P54。**下一槽 04:17 = sources/recap。** 提示：复盘 P52–P54 + T-Status。**不要规定 P55。**

**2026-08-26 00:17：** **T-Status 团库存扣不扣理论 drafted — 不要列为下一轮要写理论。不要写 P54。不要把 P53 列为下一轮要写。** `theory/group-inventory-deduct.md`。主卡复用 `dont-raise-on-tentative-occ.md`（不重写）。暂定画面 ≠ 已卖；先问扣不扣。本店 PMS 状态名 / wash% / 华住字段表 **仍 NV**。40/50/399/799 Simulation only。399 = 被拒绝的 dump。IDeaS/OPERA 仍 Vendor，不是华住 SOP。**下一槽 02:17 = 案例/剧本小时。P53 十节已存在 → 不要再走 definite vs tentative。不要规定 P54。不要写 wash 专剧。** 侦察提示（只点名、本小时不写）：**散客 no-show vs 团 wash** 作不同 CASE 场景（P14 Soft / P05 leftover vs P52 已扣 cutoff；本店 no-show% / wash% 仍 NV；**不新开 P 号**）。或 skip。不要重写 P01–P53。


**2026-08-25 22:17：** **P53 Definite vs Tentative playbook drafted — 不要列为下一轮要写。不要规定 P54。** `advisor-playbooks/definite-vs-tentative.md`。仿真周六 Hold 779–799 首选 799；不按暂定 OCC 涨；不锁 BAR 给 Hold；禁 dump 399。若 Strong Tentative 扣库存 → P52 不 dump。华住 暂定/确认 字段表 / wash% / 10–25% **仍 NV**，不编。40/50/399/799 Simulation only。399 = 被拒绝的 dump。IDeaS 标 Vendor RMS inbound，不是中国 SOP。不是 P52 重写。不写第二本 wash。不要重写 P01–P53。**下一槽 00:17 = 理论小时。** 可加深 deduct-vs-not 理论（若本轮轻指标仍薄），或另选仍空理论。**不要规定 P54。**

**2026-08-25 20:17：** **来源与复盘。无 needs_revision。** 源进 `source-map.md` §28。**P52 drafted — 不要列为下一轮要写。不要规定 P53。不要重写 P01–P52 / T-Hall / T-Meet。** 本店 wash% / 10–25% / 罚金 / 华住 cutoff SOP **仍 NV**，不编。399 = 被拒绝的 dump，不是 Fact BAR。无假 RMS 页。**下一槽 22:17 = scout。** 提示（只点名、本小时不写）：**definite vs tentative 团状态**（IDeaS：Definite 扣库存 / Tentative 不扣；HSMAI definite/tentative 404）。不是 P52 重写，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-25 18:17：** **P52 Group Cutoff / Wash playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/group-cutoff-wash.md`。仿真周六 Hold 779–799 首选 799；cutoff 前不 dump 399；不按团 OCC 涨；释放后 Ahead 仍 Hold，Behind 才评 P05。本店 wash% / 10–25% / 罚金 / 华住 cutoff SOP **仍 NV**，不编。50/28/22/499/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要写 P52」= 不要复写 P51 只要厅；本槽已写 cutoff 过程。**下一槽 20:17 = 来源与复盘。** 提示：复盘 P50–P52 + T-Hall 兼容。**不要规定下一本剧本。** 不要重写 P01–P52。

**2026-08-25 16:17：** **T-Hall 功能空间占用理论 drafted — 不要列为下一轮要写理论。不要写 P52。不要把 P51 列为下一轮要写。** `theory/function-space-occupancy.md`。主卡复用 `dont-raise-bar-on-full-hall.md`（不重写）。厅满 ≠ 客房紧。RevPAS / ConPAST 未当 BAR。餐毛利 / 厅租行情 / 本店 RevPAS **仍 NV**。80/14/799 Simulation only。wash 仍 MEDIUM 登记，**不要写 wash 专剧。** **下一槽 18:17 = 案例/剧本小时。P51 十节已存在 → 不要再走只要厅。不要规定 P52。** 侦察提示（只点名、本小时不写）：团 wash / attrition 作 **CASE-only** 走现有 P10 或 P50 周六块（pickup vs cutoff What To Watch；本店 % 仍 NV；**不新开 P 号**；仍 MEDIUM）。或 skip。不要重写 P01–P51。

**2026-08-25 14:17：** **P51 只要厅不要房 / Catering-Only playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/catering-only.md`。仿真周六拒/Counter 高峰厅 Hold 779–799 首选 799；不按厅满涨；不因厅忙 dump；周二 Accept 厅 Hold 799。厅租行情 / 餐毛利 / 华住 SOP **仍 NV**，不编。RevPAS / ConPAST 未当 BAR。80/14/799 Simulation only。wash / 厅租行情 / 餐毛利 **仍 NV**。**下一槽 16:17 = 理论小时。不要规定 P52。** P51 playbook 本轮已够：可加深厅 vs 客房 OCC / ConPAST 空间尺（仍不当 BAR），或另选仍空理论。wash MEDIUM 只登记。不要重写 P01–P51。

**2026-08-25 12:17：** **来源与复盘。无 needs_revision。** 源进 `source-map.md` §25。**不要把 P50 / P49 / P48 列为下一轮要写。** 餐毛利 **仍 NV**（M12/M25）。限额表 **仍 NV**（不是 2015/2016，不是雄安 435 摘要数字）。兑房进 Sold **仍 NV**。无新 RMS 页。不编华住 SOP / 399 Fact / GSA 当中国 BAR。**14:17 scout HIGH：** (1) 厅-only / Catering Only（不占客房）相对 P50/P10/P30 — OPERA Catering Only 已开；问 T18 是否已够；**不要发明 P51。** (2) 团 attrition/wash 作 P10/P50 观察尺 — 词条已开，本店 % 仍 NV；不重写剧本。


**2026-08-25 10:17：** **P50 会带房 / Meeting-with-Rooms playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/meeting-with-rooms.md`。主卡复用不重写。仿真周二留会 Counter 客房 Hold 799 拒绝 BAR→399；周六拒便宜房 / Counter 779–799 首选 799。会带房模板 **仍 NV**，不编。华住 SOP / 餐毛利 / 厅租行情 **仍 NV**。RevPAS 未当 BAR。399/10/80 Simulation only。不要重写理论/卡 / P01–P49。

**2026-08-25 08:17：** **T-Meet 会带房理论+卡 drafted — 不要列为下一轮要写理论。P50 于 10:17 已开。** `theory/meeting-with-rooms.md`。仿真周二 Counter 客房、周六拒便宜房 Hold 779–799 首选 799。会带房模板 **仍 NV**，不编。华住 SOP / 餐毛利 / 厅租行情 **仍 NV**。RevPAS 未当 BAR。399/10/80 只 Simulation。不要重写 P01–P49。

**2026-08-25 06:17：** **P49 积分免房 / 空间可用升级 playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/loyalty-award-upgrade.md`。仿真 Hold 779–799 首选 799。华住积分结算 **仍 NV**，不编。STR 兑房进 Sold **NV**。不抄 BW % 当中国默认。不写 P50 会带房。不要重写 P01–P48。


**2026-08-25 02:17：** **P48 政务/差旅协议 playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/government-negotiated-rate.md`。主卡复用不重写。仿真 Hold 779–799 首选 799。限额表 **仍 NV**，不编。GSA $110 未当中国 BAR。不编华住政务价。不要重写理论/卡 / P01–P47。

**2026-08-25 00:17：** **T-Gov 理论+卡 drafted — 不要列为下一轮要写理论。P48 于 02:17 已开。** 限额表 **仍 NV**。GSA $110 未当中国 BAR。仿真 Hold 779–799 首选 799。不编华住政务价。不要重写 P01–P47。

**2026-08-24 20:17：** **来源与复盘。无 needs_revision。** 源进 §22。Comp/HU sourced。**不要重写 P01–P47。不要写 P48 政府价。** GSA = US Fact。中国现行住宿费限额表 **仍 NV**。Walk 成本仍 NV。中国 PMS Comp 字段仍 NV。不编华住政务价。

**2026-08-24 18:17：** **P47 Comp/HU playbook drafted — 不要列为下一轮要写。** `advisor-playbooks/complimentary-house-use.md`。主卡复用不重写。仿真 Hold 779–799 首选 799。中国 PMS Comp 字段名 **仍 NV**，不编。**政府协议价仍 MEDIUM 未写。** 不要重写 P37 / occ 公式 / 理论卡 / P46。永久 HU 仍 P37。

**2026-08-24 16:17：** **Comp/HU 理论+卡 drafted — 不要列为下一轮要写理论。** `theory/complimentary-house-use.md`。仿真 Hold 779–799 首选 799。中国 PMS Comp 字段名 **仍 NV**，不编。**P47 满本剧本于 18:17 已开。政府协议价仍 MEDIUM 未写。** 不要重写 P37 / occ 公式 / P46。永久 HU 仍 P37。

**2026-08-24 12:17：** **P44 / P45 / day-use 理论 drafted — 不要列为下一轮要写。** 源进 §21。复盘无 needs_revision。STR vs USALI vs P44 Advise 两套都成立。P44 文末一行 USALI。P45 10′ Hypothesis ≠ HSMAI 周会 60′。仿真 Remaining 32 / 5 OOO 与 P37 兼容。美团钟点 SOP / 199 / 6pm 中国 / 华住早会 SOP **仍 NV**，不编。不要重写 P01–P45 / occ.md / day-use-inventory.md。

**2026-08-24 08:17：** **Day-use OCC 理论 drafted — 不要列为下一轮要写剧本。** `theory/day-use-inventory.md`。199 / OTA SOP / 6pm 中国 **仍 NV**，不编。P44 不重写。

**2026-08-24 10:17：** **P45 早会 drafted — 不要列为下一轮要写。** 仿真不砍；Hold 779–799 首选 799；P18 Skip 399。华住早会 SOP / Cornell 日会讲义 / Toolkit Daily 条目 **仍 NV**，不编。P01–P44 不重写。不碰 occ.md / day-use-inventory.md。

**2026-08-24 06:17：** **P44 钟点/day-use drafted — 不要列为下一轮要写。** 仿真关/限额周六钟点；过夜 Hold 779–799 首选 799；199 仅 Simulation。美团/携程钟点 SOP / 保洁分钟 / 199 行情 **仍 NV**，不编。P01–P43 不重写。

**2026-08-24 04:17：** P42 / P43 drafted — **不要列为下一轮要写。** 源进 §20。复盘无 needs_revision。IDeaS dirty-data vs 代理兼容。P42 vs P05 两道围栏兼容。P43 vs P03 Remaining 62 不紧 → Hold 兼容。钟点房当时仍空（**06:17 已解绑 → P44**）。中国拒单字段 / 拒单% / STR Denials Index 仍 NV，不编。前台折扣表 / 美团今夜 SOP 仍 NV。

**2026-08-24 02:17：** P43 口头拒单过程 drafted，不要重写。仿真 Hold 779–799 首选 799。钟点房当时仍空（**06:17 已解绑 → P44**）。中国拒单字段 / 拒单% / STR Denials Index 仍 NV，不编。P42 / 指标+卡已 drafted。

**不要把 P36 / P37 / T06 / P31 / T20 / P38 / 口碑理论卡 / P39 / P40 / T08 剧本 / T08 网络理论 / P41 / P42 / P43 / 拒单指标 / **P44** / **P45** / **P46** / **P47** / **P48** / **P49** / **T-Meet** / **P50** / **P51** / **T-Hall** / **P52** / **P53** / **T-Status** / **P54** 列为「下一轮要写」——已 drafted。不要规定 P55。** 04:17 复盘：IDeaS dirty-data vs 代理 **兼容**；P42 vs P05 两道围栏；P43 vs P03 Remaining 62 Hold。 20:17 复盘：P41 vs P40 vs T20 **两层兼容**，无 needs_revision。18:17：P41 长包 drafted。16:17：T08 理论已推。14:17：P40 Stay Pattern 已写。中国 OTA 连住均价公式仍 NV。**月租价表仍 NV。** 12:17 复盘仍适用：P38 vs P14/P19 正确拆开。P38 vs P14/P19 **正确拆开**（Soft 诊断 / 收窗口 / 预付产品）。P38 vs P28：天气夜不收窗。P38 预付 775 兼容 P19 −3–5% / T20 / 禁一夜 −15%。P39 vs P35/P18/P02/P05 兼容。Anderson 理论卡 = **CHR 2012 reviews**，≠ §13 **POM opaque**。**4.7 红线 / 美团截止点 / Anderson 英文 PDF 仍 NV。**

0. **P38 / P39 / P40 / T08 理论 / P41 / P42 / P43 / 拒单指标 / P44 / P45 已写，不要重写。** 4.7 / 0.1 分转化 / 取消截止点 / **中国 OTA 连住均价公式 / 中国长包月租价表 / 拒单字段/% / STR Denials Index 仍 NV**，不编。16:17「不要写 P41」已解绑。20:17：P41 560–650 是合同层，不是 dump 公开 BAR。04:17：P42 前台不跟 OTA dump；P43 无日志不涨。**06:17：P44 钟点 drafted。199 / 工时 / 美团·携程钟点 SOP 仍 NV。**
1. **用户校准优先**：本店 PMS 是否扣 OOO（NV-OOO-02）、Comp 是不是 Historical STAR、变动成本三数（T19）、Walk 成本（P24）、本店 crew 合同（P31）、声明品牌底/组织图（T20）、本店同窗取消率（NV-CXL-03）。不编 华住 699 / 佣金% / 20 OOO Fact / 点弹性 / 4.7。  
1b. **M16 剩余 NV（不写新剧本）**：美团/携程免费取消截止点（NV-CXL-01）、STR 灵活转化原文（NV-CXL-02）、本店取消率、SiteMinder no-show、Booking handling-cancellations。不要重写 P14/P19/P38。不要把 Booking 1–2 天写成中国必须。  
1c. **M17 剩余 NV（不写新剧本）**：4.7 红线（NV-REP-01）、0.1 分转化（NV-REP-02）、Anderson 2012 英文 handle 仍 429（NV-REP-03）。不要倒置 Anderson。不要把 CHR reviews 与 POM opaque 混成一篇。  
2. **M15 剩余 NV（不写新剧本）**：中国报表名（NV-OOO-01；OPERA OO/OS 不得外推）、维修间夜常模、是否已报 STR 改房量。不要重写 T06/P37。  
3. **M10 剩余 NV（不重写 P36）**：美团/携程可比价公式、sanctioned 行业比例、IDeaS shop 专页、中国含早/含税默认 SOP。  
4. **H6**：公式 / 中国 PMS 集成仍 NV。**不要再抓** science-behind-g3。禁止 Duetto 对抄。  
5. **H7**：OYE 产品页仍 NV。**抽样 careers URL 停**。  
6. **H9**：独立 Amadeus 优化器仍 NV；`beonx.md` / `atomize.md` 已写。不要把 BEONx 写成 G3。  
Rainmaker / EZRMS：只开真实官方页，不编。  
Walk 成本数字仍 NV；P24 已 drafted。**变动成本（T19）卡已 drafted，金额仍 NV，不编。**  
AHLA 85–95% / NV-RS-04 Cornell Budget vs Forecast 讲义：**仍 NV**。  
H1–H5 / H10 / P21 / P33 / P23 / P24 / P25 / P26 / P27 / P28 / T18 / P30 / T19 / T20 / P31 / P35 / P36 / T06 / P37 / P38 / 口碑理论卡 / P39 / P40 / T08 剧本 / P41 / P42 / P43 / 拒单指标 / P44 **不要重写**，用本店数据校准。中国 OO 报表名仍 NV。OPERA Cloud OO/OS 只作 PMS 注。**4.7 卫生分红线仍 NV。Anderson 英文 PDF 仍 NV。**
**P40 drafted。T08 网络 drafted。P41 drafted。P42 drafted。P43 drafted。P44 drafted。P45 drafted。P46 drafted。P47 drafted。P48 drafted。P49 drafted。T-Meet drafted。P50 drafted。P51 drafted。T-Hall drafted。P52 drafted。P53 drafted。T-Status drafted。P54 drafted。** 不要列为下一轮要写。不要规定 P55。18:17：P52 cutoff/wash 已写。22:17：P53 definite vs tentative 已写（不是 P52 重写）。wash% 仍 NV。本店 PMS 状态名仍 NV。中国 OTA 连住均价公式 / MinLOS 展示仍 NV。**长包月租价表仍 NV。拒单字段/% / STR Denials Index 仍 NV。199 / 工时 / 美团·携程钟点 SOP 仍 NV。** 不要重写 P40/T08/P41/P42/P43/P44/P45。20:17 源进 §19；04:17 源进 §20；12:17 源进 §21。

**2026-08-26 06:17：P55 Guarantee Type drafted。** `advisor-playbooks/guarantee-type.md`。OTB 拆担保/非担保；放房前不按混合 OCC 涨、不提前 dump；高峰只改新生产担保或浅预付；放房后走 P01/P05。本店类型/放房时点/押金%/Rolling 仍 NV。OPERA = Vendor PMS/store-configured。120/18/14/399/799 Simulation only；深度 blanket dump rejected。04:17「不要规定 P55」= recap 不得指定；本 scout 核实后开。下一槽 **08:17 = theory hour；不要规定 P56**。

**2026-08-26 08:17：T-Guar 担保类型与到点释放理论卡 drafted — 不要列为「下一轮要写」。** `theory/guarantee-release.md`：画面上的 OTB 还不是需求；先问这个预订类型扣不扣（本店 **Deduct / Non-Deduct** 配置，不是标签）、几点放（**Release Time** 是配置值，OPERA 4 PM / 6 PM 与 roommaster「often 4 or 6 PM」都是**厂商口径，不是中国 practice**）；**释放是事件不是预测** → 放房前不提前 dump、不按混合 OCC 涨，放房后真 remaining + Pace 才进 P01/P05；**Rolling No Show** 可让画面占用而无真实到店。**P55 已 drafted（06:17），主卡/轻指标/仿真复用，不重写。** 与 T-Status / T-Comp / T06 / T-Hall 同族「分母·分子不干净」；ex-ante ≠ ex-post（P54 / `metrics/noshow.md`）、≠ 历史卖限（P24）、≠ 到店前取消（P14）。**新开源进 §33**：OPERA Cloud 26.2 Configuring Reservation Types（A Vendor PMS, store-configured）+ roommaster 类型概述（B 厂商，证明概念非 OPERA 独有；其推荐框架未采用）。**仍 NV，不编**：本店类型表 / Deduct 映射 / 实际放房时点 / Rolling 控制 / 今晚非担保间夜 / 担保媒介与押金要求；押金% / hold 转化率 / no-show% / Walk $ / OTA 佣金% / 点弹性。HSMAI `no-show/` 与 `guaranteed-reservation/` 仍 404（未重试）。180/120/18/14/399/799 Simulation only；**399 = 被拒绝的 dump**。**不要开 P56，不要重写 P01–P55 正文。** 下一槽 **10:17 = 案例 / 剧本小时；本条不规定写哪一本剧本**（theory hour 不得指定，同 04:17「不要规定 P55」的槽序纪律）。

**2026-08-26 10:17：P56 月末冲量 / 预算压力 drafted。** `advisor-playbooks/month-end-budget-push.md`：月底≠需求；逐夜 Pace/Remaining；先算 dilution 与物理可达性；Ahead/薄夜不降；真 Behind 夜才 bounded。主卡、MTD metric、Simulation 已完成。仍 NV：本店预算表 / 考核指标 / 奖金口径 / 变动成本；AHLA 85–95% / Cornell Budget-vs-Forecast 讲义仍 NV，未重试。深度 blanket dump rejected。下一槽 **12:17 = sources / recap hour；明确不规定 P57。**

**2026-08-26 14:17：P57 STAR / MPI·ARI·RGI 误读 playbook drafted — 不要列为下一轮要写。不要规定 P58。** `advisor-playbooks/star-index-misread.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399 抢份额；先问 Comp Set + 日期窗；周六 Pace Ahead remaining 14 走 P01 不是 P05。本店 Comp Set / 是否订阅 STR / 中国非 STR 对标法 **仍 NV**，不编中国官方同名指数、RGI 地板、STR 城市覆盖。92/88/104/14/399/799 Simulation only。399 = 被拒绝的 dump。12:17「不要规定 P57」= recap 不得指定；本 scout 核实 T16 缺口后开。不要重写 P01–P57。**下一槽 16:17 = theory hour。不要规定 P58。**


**2026-08-26 16:17：T-Share 份额指数不是定价按钮 drafted — 不要列为「下一轮要写」。不要规定 P58。** `theory/share-index-vs-price.md`：指数已经发生之后只允许改诊断，不允许改今夜 BAR。100 = fair share，不是目标价 / 品牌地板 / 中国官方线。过程仍 P57（三句 / 399-rejected / 799-Hypothesis 不改）。公式卡不重写。本店 Comp Set / STR 订阅 / 中国非 STR 对标 **仍 NV**，不编中国官方同名指数、RGI 地板、STR 城市覆盖。92/88/104/14/399/799 Simulation only；**399 = 被拒绝的 dump**。§37 指针注，无新官方指数解读页。问题树 §64 已够，未写 §65。**不要开 P58，不要重写 P01–P57 正文。** 下一槽 **18:17 = 案例 / 剧本小时；本条不规定写哪一本剧本**（theory hour 不得指定，同 14:17「不要规定 P58」）。

**2026-08-26 18:17：P58 OTA 切房 / 渠道配额卖不掉 drafted — 不要列为下一轮要写。不要规定 P59。** `advisor-playbooks/channel-allotment-unsold.md`。仿真周六 Hold 779–799 首选 799；还/缩未卖切房；拒 dump 399 消化切房。先问扣不扣、几点还、今晚 pickup。公开 Pace Ahead remaining 12 走 P01 不是 P05。本店切房合同 / 扣不扣 / 还房时点 / 美团·携程切房 SOP **仍 NV**，不编华住政策、allotment %、佣金%。180/12/15/3/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要规定 P58」= theory 不得指定；本案例槽核实 T11 切房缺口后开。不要重写 P01–P57。**Parity 仍是 T11 缺口，本轮不开。** **下一槽 20:17 = sources/recap hour。不要规定 P59。**

**2026-08-26 20:17：来源与复盘。无 needs_revision。** 源进 `sources/source-map.md` §39（HSMAI Academy Fair Share A 协会：index of 100 = 与集合同一水平，不是目标 BAR；OCC Penetration Index A 协会：供给 fair share% vs 已售间夜份额 → 指数 100；同组 Comp Set 词条：选错集合会误导）。§5/§36/§37/§38 = 指针。**P57 / T-Share / P58 drafted — 不要列为下一轮要写。不要规定 P59。不要重写 P01–P58 / T-Share。** Parity 仍是 T11 缺口（记下，不开）。本店 Comp Set / STR 订阅 / 中国非 STR 对标；本店切房合同 / 扣不扣 / 还房时点 / 平台 SOP；AHLA 85–95；Cornell Budget-vs-Forecast；变动成本；Walk $；押金%；hold conversion；no-show% **仍 NV**，不编。399 = P57 与 P58 被拒绝的 dump，不是 Fact BAR。92/88/104/14/399/799 与 180/12/15/3/399/799 Simulation only。无新 RMS/systems 页（HSMAI 是协会词条，不写假 RMS 文件）。**下一槽 22:17 = scout hour。** 本小时不点下一本剧本号。Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-27 22:17：P65 取消后按原价恢复 / Reinstate playbook drafted — 不要列为下一轮要写。不要规定 P66。** `advisor-playbooks/cancel-reinstate-old-rate.md`。仿真周六 Hold 779–799 首选 799；拒按 599 Reinstate；拒 dump 399「别纠缠」。先拆同一笔 Reinstate vs 取消后再订新单（后者 P62）。本店 Reinstate 是否带原价 / 华住字段 / 罚金% / 佣金% **仍 NV**，不编。180/14/599/399/799 Simulation only。599 = Ahead 上被拒的旧价。399 = 被拒绝的 dump。20:17「不要规定 P65」= recap 不得指定；本 scout 核实 Reinstate 缺口后开。不要重写 P01–P64。**下一槽 00:17 = theory hour。不要规定 P66。**





**2026-08-26 22:17：P59 Rate Parity / 价平破口 playbook drafted — 不要列为下一轮要写。不要规定 P60。** `advisor-playbooks/rate-parity-breach.md`。仿真周六 Hold 779–799 首选 799；修 OTA 侧；拒砍 Brand.com→719 或 399「价平」。先问同一产品；不可比走 P36。本店价平条款 / 美团·携程违约罚则 / 佣金差 **仍 NV**，不编华住 SOP、中国违约金%。180/14/719/399/799 Simulation only。399 = 被拒绝的 dump。719 = OTA undercut，不是推荐 Brand.com。EEA DMA = 管辖标签，不是中国规则。20:17「不要规定 P59」= recap 不得指定；本 scout 核实 T11 Parity 缺口后开。不要重写 P01–P58。**下一槽 00:17 = theory hour。不要规定 P60。**


**2026-08-27 00:17：T-Parity 渠道价平与价格完整 drafted — 不要列为「下一轮要写」。不要规定 P60。** `theory/rate-parity-integrity.md`：自家某一渠道比 Brand.com 便宜之后只允许改诊断，不允许自动改 Brand.com BAR。可比关系 ≠ Comp Set 价；围栏不是破平；毛平 ≠ 净贡献；修便宜侧/映射。过程仍 P59（三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com 不改）。gap 公式不重写。本店价平条款 / 平台罚则 / 佣金差 **仍 NV**，不编华住 SOP、中国违约金%。14/719/399/799 Simulation only；**399 = 被拒绝的 dump**；**719 = OTA undercut，不是推荐 Brand.com**。§41 新开 HSMAI Rate Parity + Narrow；Expedia PDF / Rate Integrity 专条未开。问题树 §66 已够，未写 §67。**不要开 P60，不要重写 P01–P59 正文。** 下一槽 **02:17 = 案例 / 剧本小时；本条不规定写哪一本剧本**（theory hour 不得指定，同 22:17「不要规定 P60」）。


**2026-08-27 02:17：P60 Channel Manager / 映射错价 / 误推低价 playbook drafted — 不要列为下一轮要写。不要规定 P61。** `advisor-playbooks/channel-mapping-misprice.md`。仿真周六 Hold 779–799 首选 799；先关错码/修映射；拒把 Brand.com 砍到 399「已经卖了 / 先跟再改」。先问是不是本打算卖的。修好后 Pace Ahead remaining 14 走 P01 不是 P05。本店 CM 字段名 / 美团映射 SOP / 华住 SOP / 退改表 **仍 NV**，不编佣金%、弹性。180/14/399/799 Simulation only。399 = 错误价 + 被拒绝的 dump。00:17「不要规定 P60」= theory 不得指定；本案例槽核实 T11 错价缺口后开。不要重写 P01–P59。**下一槽 04:17 = sources/recap hour。不要规定 P61。**


**2026-08-27 04:17：来源与复盘。无 needs_revision。** 源进 `sources/source-map.md` §43（Oracle OPERA Cloud 26.2 Channel Rate Plans A Vendor PMS：Property Rate Code ↔ Channel Rate Code + Publish Rates/Restrictions；24.3 Channel Rate Mapping A Vendor PMS：property↔channel 转换 + Rate/Restriction Update — 非 SiteMinder 第二家映射核页）。§40/§41/§42 = 指针。Mews help 壳不当核页；Cloudbeds/SiteMinder 营销页 Cloudflare 未重锤；Expedia 条款 PDF 未开。**P59 / T-Parity / P60 drafted — 不要列为下一轮要写。不要规定 P61。不要重写 P01–P60 / T-Parity。** 本店价平条款/罚则/佣金差；本店 CM 字段/映射 SOP；已订错价单处理；AHLA 85–95；Cornell Budget-vs-Forecast；变动成本；Walk $ **仍 NV**，不编。399 = P59 与 P60 被拒绝的 dump（P60 同时是错误价），不是 Fact BAR。719 = OTA undercut，不是推荐 Brand.com。14/719/399/799 与 14/399/799 Simulation only。无新 RMS/systems 页（OPERA 是 Vendor PMS help，进 source-map，不写假 RMS 文件）。**下一槽 06:17 = scout hour。** 本小时不点下一本剧本号。Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。


**2026-08-27 06:17：P61 付费升房 / 前台 Upsell playbook drafted — 不要列为下一轮要写。不要规定 P62。** `advisor-playbooks/paid-upsell-upgrade.md`。仿真周六付费升 + Hold 标准 779–799 首选 799、套房 979–999 首选 999；拒免费默认送；拒套房 dump 399。先问标准紧不紧、套房剩几间、付费还是会员免费升。本店升房价表 / 华住 upsell SOP / 升房收入口径 **仍 NV**，不编 Fact +¥ 行业常模、默认 take-rate %、佣金%。180/4/10/799/999/399/+200–300 Simulation only。399 = 被拒绝的 suite dump。04:17「不要规定 P61」= recap 不得指定；本 scout 核实付费升房缺口后开。不要重写 P01–P60。**下一槽 08:17 = theory hour。不要规定 P62。**


**2026-08-27 08:17：T-Upsell drafted — 不要列为「下一轮要写」。不要规定 P62。** `theory/paid-upsell-differential.md`：空差价是可卖期权；空 ≠ 免费；空 ≠ 砸该型 BAR；付费 ≠ 免费（P49 孪生）；贡献镜头 T19。过程仍 P61（三句 / 399-rejected / 799·999-Hypothesis 不改）。本店升房价表 / FO upsell 归属 / 过账口径 / elite 免费政策 / 分型 Pace **仍 NV**，不编华住 SOP、Fact +¥ 常模、默认 take-rate %、佣金%。4/10/799/999/399 Simulation only；**399 = 被拒绝的 suite dump**。§45 新开 HSMAI ancillary；§44 OPERA 指针。问题树 §68 已够，未写新枝。**不要开 P62，不要重写 P01–P61 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 06:17「不要规定 P62」）。


**2026-08-27 10:17：P62 当天取消重订更低价 playbook drafted — 不要列为下一轮要写。不要规定 P63。** `advisor-playbooks/same-day-cancel-rebook.md`。仿真周六 Hold 779–799 首选 799；拒跟 599；拒 dump 399「别再被刷」。先拆真取消 vs 同住更低价重订。本店改订吃新价政策 / 华住取消重订 SOP / 罚金% / 佣金% **仍 NV**，不编。180/8/7/14/599/399/799 Simulation only。399 = 被拒绝的 dump。599 = 重订价，不是推荐新 BAR。08:17「不要规定 P62」= theory 不得指定；本案例槽核实后开。不要重写 P01–P61。**下一槽 12:17 = sources/recap hour。不要规定 P63。**

**2026-08-27 12:17：来源与复盘。无 needs_revision。** 源进 `sources/source-map.md` §47（HSMAI Academy Upselling A 协会：Total Upsold Revenue Value = Booked − Post Booking Change；HSMAI Americas Commercial Terms A 协会：Upgrade = without charging more；Upsell = encourage purchase of more expensive — 补 Sales Acumen Glossary 超时）。§44/§45/§46 = 指针。Mews Ops upsell help 打开但未当第三核页；IJHM DOI 406；Expedia PDF 未开。**P61 / T-Upsell / P62 drafted — 不要列为下一轮要写。不要规定 P63。不要重写 P01–P62 / T-Upsell。** 本店升房价表/upsell口径；本店改订吃新价政策；华住 SOP；AHLA 85–95；Cornell Budget-vs-Forecast；变动成本；Walk $；take-rate % **仍 NV**，不编。399 = P61 与 P62 被拒绝的 dump（P61 同时是 suite dump），不是 Fact BAR。599 = 重订价，不是推荐新 BAR。999 = 套房 Hypothesis。4/10/799/999/399 与 8/7/599/399/799/14 Simulation only。无新 RMS/systems 页（HSMAI 是协会词条，进 source-map，不写假 RMS 文件）。**下一槽 14:17 = scout hour。** 本小时不点下一本剧本号。Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-27 14:17：P63 保洁/人手产能卡住可售 playbook drafted — 不要列为下一轮要写。不要规定 P64。** `advisor-playbooks/staff-capacity-constraint.md`。仿真周六 Hold 779–799 首选 799；收口到达贴近 HK 还能翻的 12；拒 dump 399「少卖点别做不完」。先拆需求 vs 人手产能。本店人效 / 班次 / 华住做房 SOP / 分钟/间 / wage / Walk $ **仍 NV**，不编间/人常模。180/22/12/399/799 Simulation only。399 = 被拒绝的 dump。12:17「不要规定 P63」= recap 不得指定；本 scout 核实人手产能缺口后开。不要重写 P01–P62。**下一槽 16:17 = theory hour。不要规定 P64。**

**2026-08-27 16:17：T-Staff drafted — 不要列为「下一轮要写」。不要规定 P64。** `theory/staff-capacity-vs-demand.md`：人手/保洁产能顶是供给约束，不是弱需求；砍 BAR 不增翻房产能。两天花板；Dirty ≠ OOO；假尺子一族。过程仍 P63（三句 / 399-rejected / 799-Hypothesis 不改）。本店人效/班次/最晚进房/可交 remaining **仍 NV**，不编间/人中国常模、分钟/间 Fact、wage、Walk $、AHLA 85–95。22/12/399/799 Simulation only；**399 = 被拒绝的 dump**。§49 新开 HSMAI capacity-constraints；§48 AHLA+OPERA 指针。问题树 §70 已够，未写新枝。**不要开 P64，不要重写 P01–P63 正文。** 下一槽 **18:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 14:17「不要规定 P64」）。

**2026-08-27 18:17：P64 嵌套低价档 / Nested Rate Class playbook drafted — 不要列为下一轮要写。不要规定 P65。** `advisor-playbooks/nested-rate-class.md`。仿真周六 Hold 779–799 首选 799；关/限仍挂的 399 嵌套/促销档；拒 dump BAR→399「嵌套太复杂」。先问 nested/shared/dedicated；涨了但 399 还挂 = 等于没涨。弱夜可选拍：低档关光 → 重开围栏或 P05/P02。本店 nesting 字段 / 华住价码 SOP / EMSR **仍 NV**，不编中国嵌套 SOP、佣金%、699。180/14/399/799 Simulation only。399 = 高峰要关的档 + 被拒绝的新 BAR。16:17「不要规定 P64」= theory 不得指定；本案例槽核实 T05 nested 缺口后开。不要重写 P01–P63。**下一槽 20:17 = sources/recap hour。不要规定 P65。**

**2026-08-27 20:17：来源与复盘。无 needs_revision。** 源进 `sources/source-map.md` §51（Amadeus Hotel Admin Allotment Controls A Vendor：nested BL 保护父库存不被低价早填满，子 BL 须低于父；同组 Allotment-to-Rate Plan Mapping A Vendor：价码须映射到 allotment — 升级 §50 timeout）。§48/§49/§50 = 指针。Cornell CHR / STR 人效原文未开；OPERA hurdle 未开。**P63 / T-Staff / P64 drafted — 不要列为下一轮要写。不要规定 P65。不要重写 P01–P64 / T-Staff。** 本店人效/班次；nesting 字段；华住 SOP；间/人常模；Walk $；AHLA 85–95；EMSR/hurdle Fact；升房价表；改订吃新价 **仍 NV**，不编。399 = P63 被拒绝的 dump；P64 = 高峰要关的低档 + 被拒绝的新 BAR，不是 Fact BAR。22/12/399/799 与 14/399/799 Simulation only。`systems/amadeus.md` 仅修订一行（CRS/Admin 库存切块，不是独立 RMS）。**下一槽 22:17 = scout hour。** 本小时不点下一本剧本号。Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-28 00:17：T-Reinstate drafted — 不要列为「下一轮要写」。不要规定 P66。** `theory/reinstate-vs-current-rate.md`：历史取消价不是权利；Reinstate 是状态/库存动作不是定价权；回写 ≠ 必须认；ALWAYS_ALLOW_REINSTATE = 日期闸不是认旧价。过程仍 P65（三句 / 399-rejected / 599-rejected / 799-Hypothesis 不改）。本店 Reinstate 是否带原价 / 华住字段 / Fixed Rate 是否开 / 罚金% **仍 NV**，不编。14/599/399/799 Simulation only；**599 = Ahead 上被拒的旧价**；**399 = 被拒绝的 dump**。§53 新开 OPERA Controls 25.4 + Amadeus Undo + OPERA 5.6；§52 指针。问题树 §72 已够，未写新枝。**不要开 P66，不要重写 P01–P65 正文。** 下一槽 **02:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 22:17「不要规定 P66」）。
**2026-08-28 02:17：P66 RMS 建议不是定价权 playbook drafted — 不要列为下一轮要写。不要规定 P67。** `advisor-playbooks/rms-rec-override.md`。仿真周六 Hold 779-799 首选 799；拒跟 RMS 399。先核 Pace。真弱走 P05，理由写 Pace。本店 RMS / 华住会字段 / override % **仍 NV**，不编。HSMAI 80:20 不进店规。IDeaS 4% 不采用。180/14/399/799 Simulation only。399 = 被拒绝的 RMS dump。00:17「不要规定 P66」= theory 不得指定；本案例槽核实 T17 Override 缺口后开。不要重写 P01-P65。**下一槽 04:17 = sources/recap hour。不要规定 P67。**
**2026-08-28 04:17：来源与复盘 R28-04 — 近三轮 P65 / T-Reinstate / P66 无真矛盾，无 needs_revision。不规定 P67。** §55 新开：OPERA Cloud 26.2 Controls（升级 26.1 timeout；ALWAYS_ALLOW_REINSTATE = 日期闸不是认旧价）+ Duetto GameChanger（AutoPilot or adjust yourself）+ Duetto glitching 博文（Overrides can backfire / not overriding can also backfire）。第二家 RMS 同向加强 P66。systems/duetto.md Human Override 小填；ideas.md 指针一行。Duetto Resource Hub Lock UI / 华住 Reinstate·会 SOP / 默认 override % / 是否带原价 **仍 NV**，不编。14/599/399/799 与 14/399/799 Simulation only。**599 = Ahead 被拒旧价；399 = P65 安抚 dump / P66 RMS dump（均拒绝）。** 不要把 P65 / T-Reinstate / P66 列为「下一轮要写」— 已 drafted。不要重写 P01–P66 正文。**下一槽 06:17 = scout hour。不要规定 P67。**
**2026-08-28 06:17：P67 延退/早到 playbook drafted — 不要列为下一轮要写。不要规定 P68。** `advisor-playbooks/late-checkout-early-checkin.md`。仿真周六 Hold 779-799 首选 799；高峰不免费大批；拒 BAR→399。费表/华住延退 SOP **仍 NV**，不编。Guestivo € 不采用。180/14/399/799 Simulation only。399 = 被拒绝的 dump。04:17「不要规定 P67」= recap 不得指定；本 scout 核实后开。不要重写 P01-P66。**下一槽 08:17 = theory hour。不要规定 P68。**

**2026-08-28 10:17：P68 新店开业价 playbook drafted — 不要列为下一轮要写。不要规定 P69。** `advisor-playbooks/new-competitor-opening.md`。仿真周六 Hold 779-799 首选 799；拒跟 intro 399。先问同一口价 + 自己 Pace。Comp Set 重审 ≠ 改今夜 BAR。本店新店 SOP / 华住开业政策 / 开业折扣% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump（对面 intro）。08:17「不要规定 P68」= theory 不得指定；本案例槽核实 T15 后开。不要重写 P01-P67。**下一槽 12:17 = sources/recap hour。不要规定 P69。**

**2026-08-28 08:17：T-Late drafted — 不要列为「下一轮要写」。不要规定 P68。** `theory/late-checkout-turnover.md`：同日小时吃周转窗，不是过夜需求尺；FO 时刻/旗 ≠ 定价权；三把钟；Advance Check In 旗 ≠ 占未交回房；Check Out Early = P46。过程仍 P67（三句 / 399-rejected / 799-Hypothesis 不改）。本店延退费 / 华住字段 / 会员免费时刻 **仍 NV**，不编 € 价带中国 Fact、佣金%、699。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§57 新开 OPERA Advance Check In 26.2 + Check Out Early 26.2；§56 指针；Discount Reasons timeout。问题树 §74 已够，未写新枝。**不要开 P68，不要重写 P01–P67 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 06:17「不要规定 P68」）。

**2026-08-28 12:17：来源与复盘 R28-12 — 近三轮 P67 / T-Late / P68 无真矛盾，无 needs_revision。不规定 P69。** §59 新开：OPERA Cloud 26.2 Configuring Discount Reasons（升级 08:17 timeout；Late Checkout fees ∈ Total Gross Room Revenue = 住宿过账 ≠ 改过夜 BAR）+ Taktikon *Revenue Management in Soft Openings*（2026-02-23；Avoid Soft Discount Trap；价值包优于砍价；first ADR anchors）。systems **无变**（OPERA PMS help / 咨询实践进 source-map，不写假 RMS 页）。Prostay Cloudflare / 华住延退·开业 SOP / 默认费表 / 开业折扣% / 会员免费时刻 / € 价带 **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P67 安抚 dump / P68 对面 intro（均拒绝）。** 不要把 P67 / T-Late / P68 列为「下一轮要写」— 已 drafted。不要重写 P01–P68 正文。**下一槽 14:17 = scout hour。不要规定 P69。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。
**2026-08-28 14:17：P69 含早/套餐价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P70。** `advisor-playbooks/package-breakfast-vs-bar.md`。仿真周六 Hold 779–799 首选 799（EP）；拒 BAR→399「含早地板」；拒套餐当新 BAR。先拆 EP vs CP。竞对含早走 P36；假打包走 P27；净价走 P20；真弱走 P05。本店含早加价 / 华住字段 / 佣金% **仍 NV**，不编。OnlineHotelier 60–80% / Prostay € **不采用**。180/14/399/799/899 Simulation only。399 = 被拒绝的 dump。899 = 套餐挂牌 Simulation。12:17「不要规定 P69」= recap 不得指定；本 scout 核实后开。不要重写 P01–P68。**下一槽 16:17 = theory hour。不要规定 P70。**

**2026-08-28 20:17：来源与复盘 R28-20 — 近三轮 P69 / T-Package / P70 无真矛盾，无 needs_revision。不规定 P71。** §63 新开：OPERA Cloud 26.2 Configuring Out of Order and Out of Service Reasons（升级 18:17 timeout；**OO** 从库存扣减、100% OCC = Inventory − OOO；**OS** 仍在库存可分配）+ OPERA Cloud 26.1 Configuring Unit Statuses（Deduct Inventory / Include in Statistics 两闸 ≠ 定价权）。§60/§61/§62 = 指针。systems **无变**（OPERA PMS help 进 source-map，不写假 RMS 页）。UMass/Finoko 仍 timeout；华住含早·装修 SOP / 默认加价¥ / 装修折扣% / 佣金% **仍 NV**，不编。14/399/799/899 与 14/399/799 Simulation only。**399 = P69 含早地板 / P70 装修冲量（均拒绝）；899 = 套餐挂牌 Simulation，不是新 BAR。** 不要把 P69 / T-Package / P70 列为「下一轮要写」— 已 drafted。不要重写 P01–P70 正文。**下一槽 22:17 = scout hour。不要规定 P71。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-28 22:17：P71 年标/企业协议价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P72。** `advisor-playbooks/corporate-annual-rate-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 499「对齐年标」作新 BAR；拒 dump 399「冲量好签」。先拆账户合同价 vs 公开 BAR。已签码漏出走 P26；政务走 P48；一场团走 P10；月末走 P56。本店年标折扣 / 华住字段 / LRA Fact % / 佣金% **仍 NV**，不编。180/14/399/499/799 Simulation only。399 = 被拒绝的 dump。499 = 被拒绝的「对齐年标」新 BAR。20:17「不要规定 P71」= recap 不得指定；本 scout 核实年标/RFP 缺口后开。不要重写 P01–P70。**下一槽 00:17 = theory hour。不要规定 P72。**

**2026-08-29 00:17：T-Corp drafted — 不要列为「下一轮要写」。不要规定 P72。** `theory/negotiated-corp-vs-bar.md`：年标不是公开 BAR；资格闸/BAR Based 派生/LRA 关码约束不是定价权。过程仍 P71（三句 / 399-rejected / 499-rejected / 799-Hypothesis 不改）。本店折扣% / 华住字段 / LRA Fact% **仍 NV**，不编。14/399/499/799 Simulation only；**399 = 被拒绝的 dump**；**499 = 被拒绝的「对齐年标」新 BAR**。§65 新开 OPERA 26.2 BAR Based + Rate Codes Negotiated 勾选 + Controls NEGOTIATED RATES + Channel Negotiated + IDeaS Glossary；§64 指针。问题树 §78 已够，未写新枝。**不要开 P72，不要重写 P01–P71 正文。** 下一槽 **02:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 22:17「不要规定 P72」）。

**2026-08-29 02:17：P72 姐妹店溢出 / 区域统价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P73。** advisor-playbooks/sister-cluster-overflow.md。仿真周六 Hold 779–799 首选 799；拒按姐妹店 399 接；拒区域统最低。先拆本店尺 vs 姐妹店挂牌。竞对满走 P15；一场团走 P10；年标走 P71。本店 cluster / 华住导客 SOP / 溢出折扣% / 佣金% 仍 NV，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。00:17「不要规定 P72」= theory 不得指定；本案例槽核实 22:17 scout #4 后开。不要重写 P01–P71。下一槽 04:17 = sources/recap hour。不要规定 P73。


**2026-08-29 04:17：来源与复盘 R29-04 — 近三轮 P71 / T-Corp / P72 无真矛盾，无 needs_revision。不规定 P73。** §67 新开：OPERA Cloud 26.2 Moving Reservations to Other Properties（Hub 移店进 LTB **选目的店房型/价码**；可选控制 Move Reservation With Same Rate Amount 开时才保留原价；默认不是强制接收店 BAR=发送店地板）+ OPERA Cloud 26.2 Reservation Sales Screen（多店各价；多段可不同 rate codes；协议价须 Negotiated+profile）+ HSMAI Academy BAR glossary（non-qualified publicly available；加强 T-Corp）。§64/§65/§66 = 指针。systems **无变**（OPERA PMS help / HSMAI 协会进 source-map；duetto Sister Property 仍墙）。华住年标·cluster·导客 SOP / 默认折扣

**2026-08-29 04:17：来源与复盘 R29-04 — 近三轮 P71 / T-Corp / P72 无真矛盾，无 needs_revision。不规定 P73。** §67 新开：OPERA Cloud 26.2 Moving Reservations to Other Properties（Hub 移店进 LTB 选目的店房型/价码；可选控制 Move Reservation With Same Rate Amount 开时才保留原价；默认不是强制接收店 BAR=发送店地板）+ OPERA Cloud 26.2 Reservation Sales Screen（多店各价；多段可不同 rate codes；协议价须 Negotiated+profile）+ HSMAI Academy BAR glossary（non-qualified publicly available；加强 T-Corp）。§64/§65/§66 = 指针。systems 无变（OPERA PMS help / HSMAI 协会进 source-map；duetto Sister Property 仍墙）。华住年标·cluster·导客 SOP / 默认折扣% / 溢出折扣% / 佣金% / LRA Fact % / 区域统价 Fact % 仍 NV，不编。14/399/499/799 与 14/399/799 Simulation only。399 = P71 冲量好签 / P72 按姐妹店接（均拒绝）；499 = 被拒绝的「对齐年标」新 BAR。不要把 P71 / T-Corp / P72 列为「下一轮要写」— 已 drafted。不要重写 P01–P72 正文。下一槽 06:17 = scout hour。不要规定 P73。Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-29 06:17：P73 Flash vs BAR drafted — 不要列为下一轮要写。不要规定 P74。** `advisor-playbooks/flash-promo-vs-bar.md`。仿真周六 Hold 779–799 首选 799；关过期闪促；拒 dump 399「卖爆了改尺」。报不报走 P18；开业 intro 走 P68；嵌套忘关走 P64。本店闪促 SOP / 华住字段 / 默认折扣% / 秒杀时长 Fact / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。04:17「不要规定 P73」= recap 不得指定；本 scout 核实后开。不要重写 P01–P72。**下一槽 08:17 = theory hour。不要规定 P74。**

**2026-08-29 10:17：P74 OTA 券后/平台出资 vs 公开 BAR drafted — 不要列为下一轮要写。不要规定 P75。** `advisor-playbooks/ota-coupon-funded-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「券后市场认」。先拆展示层 vs 装入公开尺；问谁出资。真破平走 P59；不可比走 P36；闪促改尺走 P73。本店券 SOP / 美团·携程出资% / 佣金% / 券门槛 Fact **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。08:17「不要规定 P74」= theory 不得指定；本案例核实 06:17 scout #3 后开。不要重写 P01–P73。**下一槽 12:17 = sources/recap hour。不要规定 P75。**

**2026-08-29 08:17：T-Flash drafted — 不要列为「下一轮要写」。不要规定 P74。** `theory/promotion-window-vs-bar.md`：闪促窗不是公开 BAR；促销模块/Booking·Stay 窗/HIDE/Group 不是定价权。过程仍 P73（三句 / 399-rejected / 799-Hypothesis 不改）。本店闪促 SOP / 默认折扣% / 秒杀时长 Fact **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§69 新开 OPERA Promotion Groups + Promotion Codes 升核 + AltexSoft；§68 指针。问题树 §80 已够，未写新枝。**不要开 P74，不要重写 P01–P73 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（当时 theory 不得指定）。

**2026-08-29 12:17：来源与复盘 R29-12 — 近三轮 P73 / T-Flash / P74 无真矛盾，无 needs_revision。不规定 P75。** §71 新开：OPERA Cloud 26.2 Look to Book Promotion/Coupon 查询闸（促销/券是查询对象，不是默认公开栅格）+ OPERA Cloud 26.2 Redeeming Promotional e-Certificate（资格兑换；Promotion 锁死）+ Booking.com for Partners Booking Sponsored Benefit（平台出资压展示价，酒店仍按原装入价收款；佣金按原装入价）。§68/§69/§70 = 指针。systems：`channel/net-contribution.md` 文末一行（平台出资 ≠ 酒店 Discount_c）；无新 RMS 页。华住闪促·券 SOP / 默认折扣% / 秒杀时长 Fact / 美团·携程出资% / 佣金% / 券门槛 Fact / 中国是否开通 BSB **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P73 闪促改尺 / P74 券后改尺（均拒绝）。** 不要把 P73 / T-Flash / P74 列为「下一轮要写」— 已 drafted。不要重写 P01–P74 正文。**下一槽 14:17 = scout hour。不要规定 P75。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-29 14:17：P75 BRG / 贵就赔索赔 vs 公开 BAR drafted — 不要列为下一轮要写。不要规定 P76。** `advisor-playbooks/best-rate-guarantee-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「贵就赔 / 全网最低」。先拆一笔已订直销单索赔 vs 公开尺；核 like-for-like。本店贵就赔 SOP / 华住字段 / 默认赔付% **仍 NV**，不编。万豪 25%/5,000 分、希尔顿 25% extra **不采用为店规**。Hilton Hampton/SLH 中国排除 = 管辖标签。180/14/399/799 Simulation only。399 = 被拒绝的 dump。12:17「不要规定 P75」= recap 不得指定；本 scout 核实后开。不要重写 P01–P74。**下一槽 16:17 = theory hour。不要规定 P76。** Scout 未开：Stay 3 Pay 2（MEDIUM–HIGH，OPERA Posting Rhythm 已开）、直播间价（MEDIUM–HIGH，C 新闻）、加床（MEDIUM）。


**2026-08-29 18:17：P76 Stay-Pay / 免费晚 / 过账节奏 vs 公开 BAR drafted — 不要列为下一轮要写。不要规定 P77。** `advisor-playbooks/stay-pay-promo-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「连住均价 / 过账摊平」。先拆促销价码 vs 公开单晚。节假日 MinLOS 走 P21；Sat-only 走 P40；含早走 P69；闪促走 P73。本店连住促销 SOP / 华住字段 / 默认免费晚 % / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要规定 P76」= theory 不得指定；本案例核实 14:17 scout #2 后开。不要重写 P01–P75。**下一槽 20:17 = sources/recap hour。不要规定 P77。**

**2026-08-29 20:17：来源与复盘 R29-20 — 近三轮 P75 / T-BRG / P76 无真矛盾，无 needs_revision。不规定 P77。** §75 新开：Accor Best Price Guarantee T&Cs（Last Updated May 2026；须先订；like-for-like；客服核验后只改该笔 Eligible Booking；Macao SAR 不适用 = 管辖标签；25%/10% = 雅高项目不进店规）+ OPERA Cloud 26.2 Viewing Reservation Rate Information（预订按日拆开房价/套餐 ≠ 公开 BAR 栅格）。§72/§73/§74 = 指针。systems **无变**（品牌条款 / OPERA PMS help 进 source-map；无新 RMS 页；net-contribution 不动）。Marriott help Valid Comparison **仍 CSS Error**。华住贵就赔·连住促销 SOP / 默认赔付% / 免费晚% / Stay 3 Pay 2 折扣 Fact / 佣金% / 品牌加码当店规 **仍 NV**，不编。Duetto·IDeaS Stay-3-Pay-2 专页 / 直播间价 / Extra Person **仍 scout leftover，不是 must-write，不是 P77**。14/399/799 Simulation only（两份）。**399 = P75 索赔改尺 / P76 连住促销均价改尺（均拒绝）。** 不要把 P75 / T-BRG / P76 列为「下一轮要写」— 已 drafted。不要重写 P01–P76 / T-BRG 正文。**下一槽 22:17 = scout hour。不要规定 P77。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-29 22:17：P77 直播间/主播专属价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P78。** `advisor-playbooks/live-commerce-stream-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「卖爆了 / 主播价就是市场价」。先拆橱窗/达人商品 vs 公开尺。报不报走 P18；自己的闪促窗走 P73；券后走 P74；opaque 走 P27。本店直播 SOP / 华住字段 / 主播佣金% / 直播时长 Fact **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。20:17「不要规定 P77」= recap 不得指定；本 scout 核实后开。不要重写 P01–P76。**下一槽 00:17 = theory hour。不要规定 P78。** Extra Person / 加床仍 MEDIUM leftover，不是 must-write。

**2026-08-30 00:17：T-Live drafted — 不要列为「下一轮要写」。不要规定 P78。** `theory/live-commerce-vs-bar.md`：直播间/主播专属不是公开 BAR；RatePlan / 撮合&直播 / 预售券 / 秒杀·货补 / 佣金计划 / Rate Category·Class / HIDE 不是定价权。过程仍 P77（三句 / 399-rejected / 799-Hypothesis 不改）。本店直播 SOP / 主播佣金% / 直播时长 Fact **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§77 新开 抖音佣金计划 API + OPERA Rate Categories/Classes；§76 日历房升核；§68/§76 指针。问题树 §84 已够，未写新枝。**不要开 P78，不要重写 P01–P77 正文。** Extra Person 仍 MEDIUM leftover，不是 must-write。下一槽 **02:17 = case hour；本条不规定写哪一本剧本**（theory 不得指定）。

## C30-02 · P78 Extra Person / 加床 vs BAR（2026-08-30 02:17 CST）

- **做了什么：** 案例槽核实 Extra Person leftover（OPERA Extra Adult/Child + Occupant Threshold 已开、无 *extra-person* 专剧）后开 **P78** 全套可调用资产。
- **资产：** playbook + 主卡 + 轻指标 + Simulation + 问题树 §85 + source-map §78 + research-log；邻 P69/P05/P01/P45/P40/P76 + 直播主卡/轻指标文末一行。
- **核源：** OPERA 26.2 Daily Rates Extra Adult/Child（升核）+ Occupant Threshold（升核）+ Controls BASE_CALC_EXTRA_PERSON / OCCUPANT_THRESHOLD（升核）+ HFP Net USALI P&L 实务（C，rollaway/cribs ∈ Other Rooms Revenue → ADR 读法）。
- **仍 NV：** 华住加床/儿童 SOP、默认 Extra Person %、儿童费 Fact、佣金%、STR ADR-composition 官方专页点名 Extra Person、官方 USALI 原文摘录。
- **下一槽：** 04:17 = sources/recap。**不规定 P79。** Extra Person **不再 leftover**。不要把 P78/T-Live/P77 列为下一轮要写。


**2026-08-30 04:17：来源与复盘 R30-04 — 近三轮 P77 / T-Live / P78 无真矛盾，无 needs_revision。不规定 P79。** §79 新开：OPERA Cloud 26.2 Managing Add-on (Sell Separate) Packages（预订侧手动加 Extra bed / crib ≠ 公开 BAR）+ STR CoStar Historical Benchmarking Data Reporting Guidelines（Rollaway bed/Crib rental ∈ Rooms Revenue Include = ADR 读法不是改尺令）。§76/§77/§78 = 指针。Amadeus Extra adult **500 不当核页**。systems **无变**（OPERA PMS help / STR 协会进 source-map；无新 RMS 页）。华住加床/儿童·直播·贵就赔/连住/闪促/券 SOP / Extra Person% / 儿童费 Fact / 主播佣金% / 直播时长 Fact / 赔付% / 免费晚% / Stay 3 Pay 2 折扣 Fact / Duetto·IDeaS Stay-3-Pay-2 / AHLA 85–95 / Cornell Budget-vs-Forecast **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P77 直播改尺 / P78 加床改尺（均拒绝）。** **P77 / T-Live / P78 drafted — 不要列为下一轮要写。** Extra Person **不再 leftover**。不要重写 P01–P78 / T-Live 正文。**下一槽 06:17 = scout hour。不要规定 P79。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-30 06:17：P79 Resort Fee/强制服务费/含税总价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P80。** `advisor-playbooks/resort-fee-service-charge-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「OTA 总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」。先拆房价 vs Resort·Destination·Urban Fee vs 强制服务费 vs 税 vs OTA all-in。竞对比价走 P36；含早走 P69；加床走 P78；券后走 P74；BRG 不含税费走 P75。本店费表 / 华住字段 / 默认费 % / 税率 Fact **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。04:17「不要规定 P79」= recap 不得指定；本 scout 核实 HIGH 缺口（先前 MEDIUM 停靠 P36 C5 错范围）后开。不要重写 P01–P78。**下一槽 08:17 = theory hour。不要规定 P80。** leftover：**员工价 / Staff rate MEDIUM**；**停车费 / Parking fee MEDIUM**。华住加床/儿童 SOP、Extra Person%、儿童费 Fact、直播 SOP、主播佣金%、时长 Fact、BRG/stay-pay/flash/券 SOP、赔付%、免费晚%、Stay 3 Pay 2 折扣 Fact、华住费表 SOP、默认费%、税率 Fact、AHLA 85–95、Cornell Budget-vs-Forecast **仍 NV**。不要把 P79 / P78 / T-Live / P77 列为下一轮要写。

**2026-08-30 08:17：T-Fee drafted — 不要列为「下一轮要写」。不要规定 P80。** `theory/resort-fee-vs-bar.md`：强制费/服务费/含税总价/all-in 不是公开 BAR；STR 上报桶 / OPERA 过账显示 / OTA 披露闸不是定价权。过程仍 P79（三句 / 399-rejected / 799-Hypothesis 不改）。本店费表 / 默认费 % / 税率 Fact **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§81 新开 FTC FAQ + Booking.com Demand API FTC compliance + AHLA sl-fees；§80 STR/OPERA 升核；HFTP blog timeout；Expedia newsroom 人机墙。问题树 §86 仅加 Diagnose 指针，未开 §87。**不要开 P80，不要重写 P01–P79 正文。** leftover：员工价 / Staff rate MEDIUM；停车费 / Parking fee MEDIUM。华住费表 SOP、费%、税率 Fact 仍 NV。下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory 不得指定）。

**2026-08-30 10:17：P80 员工价/Staff·Employee rate vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P81。** `advisor-playbooks/staff-employee-rate-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「员工价就是市场价 / 员工价太低所以跟 / 员工住满了砍公开」。先拆付费员工折扣码 vs $0 Comp·HU vs 公开尺。会员走 P23；$0 Comp/HU 走 P47；年标走 P71；费/all-in 走 P79；人手产能走 P63。本店员工价 SOP / 华住字段 / 默认员工折扣 % / 配额 Fact **仍 NV**，不编。OPERA Times Sold=3 / AHLA 40%+ **不采用为店规**。180/14/399/799 Simulation only。399 = 被拒绝的 dump。08:17「不要开 P80」= theory 不得指定；本案例槽核实 leftover 后开。不要重写 P01–P79。**下一槽 12:17 = sources/recap hour。不要规定 P81。** leftover：**停车费 / Parking fee MEDIUM**。员工价 **不再 leftover**。不要把 P80 / T-Fee / P79 列为下一轮要写。

**2026-08-30 12:17：来源与复盘 R30-12 — 近三轮 P79 / T-Fee / P80 无真矛盾，无 needs_revision。不规定 P81。** §83 新开：Protel Air Advanced pricing House use（员工内部过夜类型 ≠ Rack/Normal；第二家 Vendor PMS；$0 HU 过程仍 P47）+ Marriott Explore by Marriott Bonvoy（须核资格才见 special rates；资格闸 ≠ 公开尺；无 40%/50% 表）。§80/§81/§82 = 指针。Hilton Go Hilton help **timeout**；Mews create-a-rate **500**；Amadeus IDPMS Rate Types **500**。systems **无变**（Protel PMS help / Marriott associate 页进 source-map；无新 RMS 页）。华住员工价·费表·加床/儿童·贵就赔/连住/闪促/券/直播 SOP / 默认员工折扣% / 配额 Fact / 费% / 税率 Fact / Extra Person% / 儿童费 Fact / 赔付% / 免费晚% / Stay 3 Pay 2 折扣 Fact / 主播佣金% / 直播时长 Fact / Duetto·IDeaS Stay-3-Pay-2 / AHLA 85–95 / Cornell Budget-vs-Forecast **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P79 all-in/fee 改尺 / P80 员工价改尺（均拒绝）。** **P79 / T-Fee / P80 drafted — 不要列为下一轮要写。** 员工价 **不再 leftover**。停车费仍 **MEDIUM leftover**。不要重写 P01–P80 / T-Fee 正文。**下一槽 14:17 = scout hour。不要规定 P81。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。

**2026-08-30 14:17：P81 批发/旅行社/GDS 净价 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P82。** `advisor-playbooks/wholesale-gds-ta-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低」。先拆渠道协议净价 vs 公开尺。净贡献走 P20；高峰关漏出走 P27；年标走 P71；已签码漏出走 P26。本店批发/GDS SOP / 华住字段 / 默认批发折扣 % / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。12:17「不要规定 P81」= recap 不得指定；本 scout 核实 HIGH 缺口后开。不要重写 P01–P80。**下一槽 16:17 = theory hour。不要规定 P82。** leftover：**停车费 / Parking fee MEDIUM**（本轮核过不升级）。储值/预付卡、取消费改尺、pet/AAA 仍 MEDIUM。不要把 P81 / P80 / T-Fee / P79 列为下一轮要写。

## 2026-08-30 16:17 · T-Wholesale drafted（theory）

- **T-Wholesale** `theory/wholesale-net-vs-bar.md` drafted。Diagnose 走 T-Wholesale，过程仍 **P81**。三句 / 399-rejected / 799-Hypothesis 不改。
- 华住批发/GDS SOP / 默认批发折扣 % / 佣金% / Consortia 10% **仍 NV**，不编。
- **停车费 / Parking fee 仍 MEDIUM leftover**（不升级、不开专剧）。
- **不规定 P82。** 不要把 T-Wholesale / P81 / P80 / T-Fee / P79 列为下一轮要写。
- 下一槽 **18:17 = case hour**。

**2026-08-30 18:17：P82 停车费/Valet/Garage vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P83。** `advisor-playbooks/parking-fee-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」。先拆酒店自营停车 vs 第三方 Misc vs OTA 含停 vs 公开尺。竞对比价走 P36；Resort/服务费/all-in 走 P79；加床走 P78；含早走 P69；真弱走 P05。本店停车 SOP / 华住字段 / 默认停车 % / valet % / 车库租金 Fact / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要开 P82」= theory 不得指定；本案例槽核实 leftover 后开。不要重写 P01–P81。**下一槽 20:17 = sources/recap hour。不要规定 P83。** leftover：停车费 **不再 leftover**。储值卡/取消费改尺仍 MEDIUM optional。不要把 P82 / T-Wholesale / P81 / P80 列为下一轮要写。

**2026-08-30 20:17：来源与复盘 R30-20 — 近三轮 P81 / T-Wholesale / P82 无真矛盾，无 needs_revision。不规定 P83。** §87 升核打开：STR CoStar P&L Data Reporting Guidelines（18:17 timeout → fresh；自营 Parking ∈ Other Operated；第三方租/佣金 → Misc）+ 新开 Mews Rethinking spaces parking（停车 = space category ≠ BAR Type；第二家 Vendor）+ 升核打开 HFTP USALI 12th Other Reporting 官方博客（complimentary valet 费用进受益部门；先前 timeout / Hotel Online C）。§84/§85/§86 = 指针。Cloudbeds parking-as-item 不当第三核页。systems **无变**（STR 协会 / Mews PMS 产品博客 / HFTP 协会进 source-map；无新 RMS 页）。华住停车·批发/GDS·费表·员工价·加床/儿童·贵就赔/连住/闪促/券/直播 SOP / 默认停车 % / valet % / 车库租金 Fact / 批发折扣% / 佣金% / Consortia 10% / 费% / 税率 Fact / Extra Person% / 儿童费 Fact / 赔付% / 免费晚% / Stay 3 Pay 2 折扣 Fact / 主播佣金% / 直播时长 Fact / 员工折扣% / 配额 Fact / Duetto·IDeaS Stay-3-Pay-2 / AHLA 85–95 / Cornell Budget-vs-Forecast **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P81 批发/GDS 净价改尺 / P82 停车/含停改尺（均拒绝）。** **P81 / T-Wholesale / P82 drafted — 不要列为下一轮要写。** 停车费 **不再 leftover**。储值卡/取消费改尺仍 **MEDIUM optional leftover**。不要重写 P01–P82 / T-Wholesale 正文。**下一槽 22:17 = scout hour。不要规定 P83。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。


**2026-08-30 22:17：P83 储值卡/礼品卡/Prepaid Gift Card vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P84。** `advisor-playbooks/stored-value-gift-card-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏」。先拆 SVS 发卡 + Post Redemption 付款 vs 公开尺。预付产品走 P19；券后走 P74；直播走 P77；兑房走 P49；真弱走 P05。本店储值 SOP / 华住字段 / 默认储值抵房折扣 % / 礼品卡面值 Fact / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。20:17「不要规定 P83」= recap 不得指定；本 scout 核实 HIGH 缺口（filename 无专剧；P19≠储值付款改尺；本小时新开 A 级 OPERA SVS Managing + Redeem）后开。不要重写 P01–P82。**下一槽 00:17 = theory hour。不要规定 P84。** leftover：储值卡 **不再 leftover**。取消费 / 团 attrition fee vs BAR 仍 **MEDIUM leftover**（不开）。停车费 **不再 leftover**。不要把 P83 / P82 / T-Wholesale / P81 列为下一轮要写。Mews gift vouchers CSS Error / allowances 500；OPERA 26.2 Redeem timeout→24.3；华住储值 SOP / STR 礼品卡桶 **仍 NV**。

## 2026-08-31 00:17 · T-Stored drafted（theory）

- **T-Stored** `theory/stored-value-vs-bar.md` drafted。Diagnose 走 T-Stored，过程仍 **P83**。三句 / 399-rejected / 799-Hypothesis 不改。
- 华住储值 SOP / 默认储值抵房折扣 % / 礼品卡面值 Fact / 佣金% / STR 礼品卡 Rooms 桶 **仍 NV**，不编。
- **取消费 leftover → P84**（02:17 case 已开；当时 theory 不规定）。
- 当时 **不规定 P84。** 不要把 T-Stored / P83 / P82 / T-Wholesale / P81 列为下一轮要写。
- 下一槽当时 **02:17 = case hour**。储值卡 **不再 leftover**。


**2026-08-31 02:17：P84 取消/attrition FEE vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P85。** `advisor-playbooks/cancellation-attrition-fee-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「取消费才是市场价 / ADR 被取消费看脏 / attrition 罚金当地板」。先拆 Misc Schedule 4 / OPERA 取消费交易码 vs 公开尺。高取消 Soft 走 P14；收窗走 P38；noshow 走 P54；团 cutoff 走 P52；真弱走 P05。本店取消/attrition SOP / 华住字段 / 默认取消费 % / attrition % / 佣金% **仍 NV**，不编。180/14/399/799 Simulation only。399 = 被拒绝的 dump。00:17「不要规定 P84」= theory 不得指定；本案例槽核实 leftover 后开。不要重写 P01–P83。**下一槽 04:17 = sources/recap hour。不要规定 P85。** leftover：取消费 **不再 leftover**。储值卡 / 停车费不再 leftover。不要把 P84 / T-Stored / P83 / P82 / T-Wholesale / P81 列为下一轮要写。Mews cancel-fee CSS Error / accounting 500；华住取消 SOP / 默认取消费% / attrition% **仍 NV**。

**2026-08-31 04:17：来源与复盘 R31-04 — 近三轮 P83 / T-Stored / P84 无真矛盾，无 needs_revision。不规定 P85。** §91 新开：Cloudbeds Cancel direct reservations（Cancellation fee 另项不进 room revenue/RevPar；Cancellation Revenue 可进 Rooms 报告 = 读 posting ≠ 改尺；第二家 Vendor PMS）+ Apaleo Introduction to Accounting（RevenueCancellationFees / RevenueNoShow ≠ RevenueAccommodation；scheme inspired by USALI）。Mews cancel-fee / accounting **再试仍 CSS Error / 500**。§88/§89/§90 = 指针。systems **无变**（Cloudbeds / Apaleo PMS help 进 source-map；无新 RMS 页）。华住取消/attrition SOP、默认取消费 %、attrition %、华住储值 SOP、默认储值抵房折扣 %、礼品卡面值 Fact、STR 礼品卡 Rooms 桶、佣金% **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P83 储值改尺 / P84 取消/attrition FEE 改尺（均拒绝）。** **P84 / T-Stored / P83 drafted — 不要列为下一轮要写。** 取消费 leftover **已关为 P84**。储值卡 / 停车费 **不再 leftover**。不要重写 P01–P84 / T-Stored 正文。**下一槽 06:17 = scout hour。不要规定 P85。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。



**2026-08-31 06:17：P85 hurdle / bid price / Last Room Value vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P86。** `advisor-playbooks/hurdle-bid-lrv-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「门槛价才是市场价 / hurdle 多少就跟多少 / 过不了 LRV 所以砍」。先拆可售门 vs 公开尺。RMS 建议卖价走 P66；嵌套低档走 P64；限制走 P33；真弱走 P05。本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact / EMSR Fact / 佣金% **仍 NV**，不编。不把 OPERA 195/200/80/90 或 IDeaS 公式数字当中国 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。04:17「不要规定 P85」= recap 不得指定；本 scout 核实 HIGH 缺口（filename 无专剧；P66≠hurdle 是公开 BAR；OPERA hurdle 页 2026-08-27 20:17 未开 → 本小时打开）后开。不要重写 P01–P84。**下一槽 08:17 = theory hour。不要规定 P86。** leftover：hurdle/LRV **不再 leftover**。押金/预授权仍 **MEDIUM leftover**（不开）。Pet/AAA 仍停车。不要把 P85 / P84 / T-Stored / P83 列为下一轮要写。华住会门槛价 SOP / hurdle% / LRV Fact **仍 NV**。

**2026-08-31 08:17：T-Hurdle drafted（theory）— 不要列为「下一轮要写」。不要规定 P86。** `theory/hurdle-bid-lrv-vs-bar.md`：hurdle/bid/LRV 是可售门/机会成本，不是公开 BAR；Hurdle Rates / YMT / Controls / LRV ≠ 定价权。过程仍 P85（三句 / 399-rejected / 799-Hypothesis 不改）。本店 hurdle/RMS 字段 / 华住会门槛价 SOP / hurdle% / LRV Fact / EMSR Fact **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§93 新开 OPERA About Hurdle Rates + Controls Rate Management；§92 升核。问题树 §92 仅 Diagnose 指针，未开 §93 新枝。不重写 optimization-advise。**不要开 P86，不要重写 P01–P85 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定，同 06:17「不要规定 P86」）。押金仍 MEDIUM leftover。Pet/AAA 仍停车。


**2026-08-31 10:17：P86 押金/预授权 vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P87。** `advisor-playbooks/deposit-preauth-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「押金才是市场价 / 预授权扣太多说明价高 / 押金当地板 / ADR 被押金看脏」。先拆 Deposit Rules/Payments vs Authorization Rules pre-auth vs 公开尺。担保放房走 P55；预付 NR 走 P19；取消费走 P84；储值走 P83；真弱走 P05。本店押金/预授权 SOP / 华住字段 / 默认押金 % / 预授权金额 Fact / 佣金% **仍 NV**，不编。不把 OPERA auth-rule $100/$20/$50 当中国 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。08:17「不要规定 P86」= theory 不得指定；本案例槽核实 leftover 后开。不要重写 P01–P85。**下一槽 12:17 = sources/recap hour。不要规定 P87。** leftover：押金/预授权 **不再 leftover**。Pet/AAA 仍停车。不要把 P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为下一轮要写。华住押金/预授权 SOP / 默认押金% / 预授权金额 **仍 NV**。


**2026-08-31 12:17：来源与复盘 R31-12 — 近三轮 P85 / T-Hurdle / P86 无真矛盾，无 needs_revision。不规定 P87。** §95 新开：Cloudbeds Set up Deposit Policies（Percentage / Fixed / First Day / Do not collect；deposit from room rate sub-total = 付款配置 ≠ BAR Type；第二家 Vendor PMS；WebFetch CF → curl 200）+ Apaleo Payment Authorizations（Authorizations ≠ prepayments；no liabilities until consumed；hold ≠ BAR Type）。Mews preauthorization **再试仍 CSS Error**。§92/§93/§94/§67 = 指针。systems **无变**（Cloudbeds / Apaleo PMS help 进 source-map；无新 RMS 页）。华住押金/预授权 SOP、默认押金 %、预授权金额 Fact、华住会门槛价 SOP、默认 hurdle %、LRV Fact、佣金% **仍 NV**，不编。14/399/799 Simulation only（两份）。**399 = P85 hurdle/LRV 改尺 / P86 押金/预授权改尺（均拒绝）。** **P86 / T-Hurdle / P85 drafted — 不要列为下一轮要写。** 押金/预授权 leftover **已关为 P86**。hurdle/LRV **不再 leftover**。不要重写 P01–P86 / T-Hurdle 正文（T-Hurdle 头「押金 leftover」= 08:17 槽序，不「修」）。**下一槽 14:17 = scout hour。不要规定 P87。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-08-31 14:17：侦察 S31-14 scout-only — 不开 P87。不要列为 must-write 剧本。** filename-scan 无 pet/aaa/smoking/damage-deposit 专剧，但邻剧覆盖（P23/P71/P80 资格价；P86 押金/hold；P79/P82/P84 费/ancillary/FEE）。未凑齐 HIGH 四件套（缺文件 + 邻不覆盖 + 中国每周改尺戏剧 + 可开 A 源）。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW 不开。Damage/security deposit 邻 P86 不开。§96 升核打开 STR Historical（pet/smoking 房型进 Rooms；罚金/清洁/损坏费进 Misc Schedule 4；无 gift-card / live deposit 行）+ STR P&L（Misc = Resort/Cancel/Misc；无 gift/deposit/pet 独立行）+ HFTP USALI 12th Other Reporting（Extraordinary Cleaning → Misc；WebFetch CF → curl 200）。HFTP FAQ / 12e deck curl 200 不当第四核。Mews 本小时不重试。STR 礼品卡 Rooms 桶 / STR live 押金 Rooms 桶 / Walk $ / 华住 SOP / 默认押金% / 预授权额 Fact **仍 NV**，不编。不重写 P01–P86 / T-Hurdle 正文。不发布。不 git commit。**P86 / T-Hurdle / P85 drafted — 不要列为下一轮要写。** 押金/预授权 / hurdle/LRV **不再 leftover**。**下一槽 16:17 = theory hour。不要规定 P87。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-08-31 16:17：T-Deposit drafted（theory）— 不要列为「下一轮要写」。不要规定 P87。** `theory/deposit-preauth-vs-bar.md`：押金/预授权是付款/担保/卡 hold，不是公开 BAR；Deposit Rules / Auth Rules / Cloudbeds Policy / Apaleo Auth ≠ 定价权。过程仍 P86（三句 / 399-rejected / 799-Hypothesis 不改）。本店押金%/预授权额 / 华住押金/预授权 SOP / STR live deposit Rooms 桶 **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§97 新开 OPERA 26.2 Deposit Rules + Schedules + Payments + Controls Cashiering + Configuring Advanced Auth + Cloudbeds authorize + Apaleo Guarantee Types；§94/§95 升核。问题树 §93 仅 Diagnose 指针，未开 §94 新枝。不重写 optimization-advise。**不要开 P87，不要重写 P01–P86 正文。** 下一槽 **18:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定）。押金 leftover **已关为 P86**。Pet/AAA 仍停车。


**2026-08-31 18:17：P87 服务补偿/folio Service Recovery adjustment vs 公开 BAR playbook drafted — 不要列为下一轮要写。不要规定 P88。** `advisor-playbooks/service-recovery-adjustment-vs-bar.md`。仿真周六 Hold 779–799 首选 799；拒 dump 399「服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价」。先拆本住 OPERA Post Service Recovery Adjustment / Post Adjustment / Cloudbeds Adjust Charge vs 公开尺。点评 SIGNAL 走 P39；BRG 已订直销走 P75；计划 Comp 走 P47；取消 FEE 走 P84；押金/预授权走 P86；真弱走 P05。本店补偿 SOP / 华住字段 / 默认补偿 % / 佣金% **仍 NV**，不编。不把 OPERA Vendor $ breakfast 10.00 / 63.60 当中国 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。16:17「不要规定 P87」= theory 不得指定；本案例槽核实 HIGH 缺口（filename 无专剧；邻 P39/P75/P47/P84/P83/P86 ≠ 本住 folio Service Recovery 改尺；每周 GM dump；本小时新开 A 级 OPERA 三页 + Cloudbeds curl 200；STR allowances 升核）后开。不要重写 P01–P86。**下一槽 20:17 = sources/recap hour。不要规定 P88。** leftover：服务补偿 **不再 leftover**。Pet/AAA 仍停车。不要把 T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为下一轮要写。华住补偿 SOP / 默认补偿% / STR gift-card Rooms 桶 / STR live deposit Rooms 桶 / Walk $ / AHLA 85–95 / Cornell Budget-vs-Forecast **仍 NV**。


**2026-08-31 20:17：来源与复盘 R31-20 — 近三轮 T-Deposit / P87 / S31-14 无真矛盾，无 needs_revision。不规定 P88。** §99 新开：Apaleo Adding and Moving Charges（Refund / Add allowance = folio 纠正与服务失败折扣 ≠ public BAR rewrite；第二家 Vendor PMS；WebFetch CF → curl 200）+ HotelKey Service Recovery .ng -v2（revenue-impacting = negative charge on folio；non-revenue does not affect folio balance ≠ BAR Type；第三家 Vendor；WebFetch+curl 200）。Mews FAQs/Create allowance **再试仍 500 / CSS Error**。§97/§98/§67 = 指针。systems **无变**。华住补偿·押金 SOP / 默认补偿 % / 默认押金 % / 预授权金额 Fact / STR gift-card Rooms 桶 / STR live deposit Rooms 桶 / Walk $ / 佣金% **仍 NV**，不编。14/399/799 Simulation only。**399 = P87 服务补偿改尺（拒绝）。** **P87 / T-Deposit / P86 drafted — 不要列为下一轮要写。** 服务补偿 leftover **已关为 P87**。押金/预授权 / hurdle/LRV **不再 leftover**。不要重写 P01–P87 / T-Deposit 正文（仅 P87 族文末一行 §99）。**下一槽 22:17 = scout hour。不要规定 P88。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-08-31 22:17：侦察 S31-22 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 direct-bill / city-ledger / 挂账 / tax / fapiao / invoice / 发票 / routing / folio / pet / aaa / smoking / damage / security-deposit 等专剧，但邻剧覆盖或缺 A 源：挂账结算 → P71/P48/P20；税/含税 → **P79**；routing → 过账机械；发票 → 中国每周戏剧可能但本小时 **无 A 级源**。未凑齐 HIGH 四件套（缺文件 + 邻不覆盖 + 中国每周改尺戏剧 + 可开 A 源）。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。Damage/security deposit 邻 P86。§100 新开 OPERA Accounts Receivables + Managing Direct Bill Transfers + Financial Handling Examples + Configuring Tax Types + About Transaction Generates + About Reservation Routing Instructions；Cloudbeds Manage AR（WebFetch CF → curl 200）；HSMAI BAR 升核。STR Historical/P&L **不重开**。STR 礼品卡 Rooms 桶 / STR live 押金 Rooms 桶 / Walk $ / 华住 SOP / 默认% / 税率 Fact / 开票税率 **仍 NV**，不编。不重写 P01–P87 / T-Deposit / T-Hurdle / optimization-advise 正文。不发布。不 git commit。**T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。**下一槽 2026-09-01 00:17 = theory hour。不要规定 P88。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-09-01 00:17：T-Service-Recovery drafted（theory）— 不要列为「下一轮要写」。不要规定 P88。** `theory/service-recovery-adjustment-vs-bar.md`：服务补偿/folio Service Recovery adjustment 是 folio 纠正/客满过账，不是公开 BAR；Post Service Recovery / Reason Codes / Controls / Cloudbeds Adjust / Apaleo allowance / HotelKey SR ≠ 定价权。过程仍 P87（三句 / 399-rejected / 799-Hypothesis 不改）。本店补偿 SOP / 默认补偿 % **仍 NV**，不编。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§101 新开 OPERA Service Requests；Controls Cashiering SERVICE RECOVERY ADJUSTMENT + ALLOW NEGATIVE 用途升核；§98/§99 升核。问题树 §94 仅 Diagnose 指针，未开 §95 新枝。不重写 optimization-advise。**不要开 P88，不要重写 P01–P87 正文。** 下一槽 **02:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定）。服务补偿 leftover **已关为 P87**。Pet/AAA 仍停车。


**2026-09-01 02:17：案例核实 C01-02 case-verify — 不开 P88。不要列为 must-write 剧本。** filename-scan 后独立核 Smoking/damage FEE、Early-dep FEE、Chargeback、Direct Bill/挂账、Tax/发票、Routing、Pet/AAA：四件套均未齐（邻剧覆盖或缺 A 源或缺每周改尺戏剧）。Pet/AAA **仍停车**。Smoking/damage FEE 仍 MEDIUM/LOW。§102 新开 OPERA Transaction Codes + About Transaction Codes + Apaleo Check-out Checklist + Oracle Chargeback Report；STR Historical smoking/early-dep + HSMAI BAR 升核。opacs chargebacks **404**；Marriott early-dep **壳不当核**。中国发票 A 源仍无。STR 礼品卡 Rooms 桶 / STR live 押金 Rooms 桶 / Walk $ / 华住 SOP / 默认% / 税率 Fact / 开票税率 **仍 NV**，不编。不重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / optimization-advise 正文。不发布。不 git commit。**T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。**下一槽 04:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。


**2026-09-01 04:17：来源与复盘 R01-04 — 近三轮 S31-22 / T01-00 / C01-02 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §103 新开：HotelKey Charge Types .ng（charge type = classification of the purpose of the transaction；folio checkout 清到该码；Include in Revenue / Allow Adjustment / Allow Negative Amount ≠ BAR Type；第三家 Vendor PMS；互补 §102 OPERA TX Codes；WebFetch 200 + curl 200）+ HotelKey Early Check-Out .ng（Early Check-Out Flow：Waive / Early Departure Fee (Customisable) / Charge Remaining Stay’s Rate Detail **Posts this charge to the folio** ≠ 改写公开 BAR；互补 §102 Apaleo Check-out Checklist；加强 P46/P84，不开专剧；WebFetch timeout → curl 200）。Cloudbeds items / chargebacks **curl 200 已取，不当第三核**。§98–§102 / §67 = 指针。systems **无变**。华住补偿·押金 SOP / 默认补偿 % / 默认早离费 % / 默认押金 % / STR gift-card Rooms 桶 / STR live deposit Rooms 桶 / Walk $ / 佣金% **仍 NV**，不编。14/399/799 Simulation only。**399 = P87 服务补偿改尺（拒绝）。** **T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 服务补偿 leftover **已关为 P87**。押金/预授权 / hurdle/LRV **不再 leftover**。不要重写 P01–P87 / T-Service-Recovery 正文（仅 P87 族文末一行 §103）。C01-02 未改 README §8.4 陈旧下一槽句 — **本小时改写 → 06:17 scout**。**下一槽 06:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-01 06:17：侦察 S01-06 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 lra / yieldable / currency / franchise / meta / cpc / points-cash 专剧，但邻剧覆盖或缺 A 源：LRA → **P71/P26/P33**（IDeaS Semi-Yieldable=关码闸；ORMS：LRA 合同→Non-Yieldable）；Yieldable → **P85/P66**；多币种 → 汇率展示≠改尺；Points+cash → **P49/P23/P83**；Meta/CPC → **P35/P59** 且无 A 级源。含早/会员/attrition 已有 P69/P23/P84。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§104 新开 OPERA Rate Codes Yieldable 用途 + ORMS Yieldability + Foreign Currency Codes + Payment Awards + Membership Controls；Negotiated 升核（无 LRA 字段）；BAR Based / IDeaS Semi-Yieldable / HSMAI BAR 指针。OPERA Cloud LRA 专页 **未找到**。STR 礼品卡 Rooms 桶 / STR live 押金 Rooms 桶 / Walk $ / 华住 LRA·外币·积分·CPC SOP / 默认% / LRA Fact % **仍 NV**，不编。不重写 P01–P87 / T-Service-Recovery / T-Deposit / T-Hurdle / optimization-advise 正文。不发布。不 git commit。**T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。**下一槽 08:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-09-01 08:17：T-Employee drafted（theory）— 不要列为「下一轮要写」。不要规定 P88。不要规定 P89。** `theory/staff-employee-rate-vs-bar.md`：员工价/付费员工折扣是资格闸码，不是公开 BAR；STAFF Times Sold / Comp·HU·Negotiated / Protel House use / Rate Category / Explore ≠ 定价权。过程仍 P80（三句 / 399-rejected / 799-Hypothesis 不改）。**≠ T-Staff（P63 产能）。** 本店员工价 SOP / 默认员工折扣 % / 配额 Fact **仍 NV**，不编。不把 OPERA Times Sold=3 / AHLA 40%+ 当中国 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§105 新开 OPERA 5.6 Rate Categories；升核 OPERA Rate Strategies / Rate Codes / gi_c_h / Negotiated / Protel / STR / HSMAI / Marriott Explore / AHLA / Cloud Categories·Classes。问题树 §87 仅 Diagnose 指针，未开新枝。不重写 optimization-advise。**不要开 P88，不要重写 P01–P87 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定）。员工价 leftover **已关为 P80**。Pet/AAA 仍停车。不要把 T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Employee / P80 列为下一轮要写。


**2026-09-01 10:17：案例核实 C01-10 case-verify — 不开 P88。不要列为 must-write 剧本。** filename-scan 后独立核 derived 反写、预付阶梯、儿童/crib、senior/military/geo/consortia、加盟/业主施压、stop-sell/CTA、Advanced Daily：四件套均未齐（邻剧覆盖或缺每周改尺戏剧或缺 A 源）。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。源表 106 新开 OPERA ADBR + Daily/Advanced Daily + Restrictions + Cloudbeds derived 两页；About BAR 26.2 / Controls / HSMAI / IDeaS 升核指针。franchise A 页未找到。华住 SOP / 默认pct / Consortia 10pct / Walk / STR gift-card·live-deposit 仍 NV，不编。不重写 P01–P87 / T-* / optimization-advise 正文。不发布。不 git commit。T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Employee / P80 drafted — 不要列为下一轮要写。下一槽 12:17 = sources/recap。不规定 P88。不规定 P89。Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-09-01 12:17：来源与复盘 R01-12 — 近三轮 S01-06 / T-Employee / C01-10 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §107 新开：HotelKey Change an Existing Rate Plan to a Derived Rate Plan（OTA 码 Setup as Derived；Parent = **“BAR” / “BEST AVAILABLE RATE”**；Amount/Percentage 从父码算派生；**方向 BAR→派生，不是反写公开 BAR**；第三家 Vendor PMS；互补 §106 Cloudbeds BASE→derived；WebFetch+curl 200 size≈41002）+ Apaleo Rate Plans and Rate Management（derived 只改 **base**，linked 按 pricing rule 自动跟；Restrictions = Min/Max LOS / Closed on Arrival / Closed on Departure / **Master Closed** 挡到达·离店·连住；**可售限制层 ≠ dump BAR**；第二家非 OPERA Vendor；WebFetch CF 壳 → curl 200 size≈29748）。HotelKey Set Restrictions / Create Derived / How-To + Apaleo Setting Prices **curl 200 已取，不当第三核**。§104–§106 / §67 = 指针。systems **无变**（HotelKey / Apaleo PMS help 进 source-map；无新 RMS 页；不造 systems/hotelkey.md、不造 systems/apaleo.md）。华住派生 SOP、默认派生折扣 %、加盟品牌标准 BAR 页、华住员工价 SOP、默认员工折扣 %、STR gift-card Rooms 桶、STR live-deposit Rooms 桶、Walk $、佣金% **仍 NV**，不编。14/399/799 Simulation only。**399 = P80 员工价改尺（拒绝）。** **T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 员工价 leftover **已关为 P80**。服务补偿 / 押金/预授权 / hurdle/LRV **不再 leftover**。不要重写 P01–P87 / T-Employee 正文（仅 P71 / P33 文末一行 §107）。**下一槽 14:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-01 14:17：侦察 S01-14 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 commission / fence / rate-ownership / owner-use / invoice / franchise 专剧，但邻剧覆盖或缺 A 源：佣金 → **P20/P81/P25**（OPERA Commission Codes=退房后结算层级 ≠ BAR Type）；Rate fence / 小程序专属 → **P19/P23/P33/P40/P73/P18**（HSMAI fence=订码条件）；Rate Ownership 中央保护 → 权限层，压价走 **P56/P72**；Owner Use → **P47/P80**；儿童 Extra Person → **P78/P69**（Cloudbeds extra person fee=加项）；CTA/Closed dump → **P33**；发票 → **P79** 且无 A 源；加盟品牌标准 A 页仍 NV。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§108 新开 OPERA Commission Codes + HSMAI Rate Fences + OPERA Rate Ownership + Cloudbeds Extra Person Fees；Rate Codes Owner Use 升核；HSMAI BAR / IDeaS Fenced / Apaleo Rate Plans 指针。加盟品牌标准 / 中国发票 A 页 **仍 NV**。STR 礼品卡 Rooms 桶 / STR live 押金 Rooms 桶 / Walk $ / 华住佣金·小程序·儿童 SOP / 默认% **仍 NV**，不编。不重写 P01–P87 / T-Employee / T-Service-Recovery / T-Deposit / T-Hurdle / optimization-advise 正文。不发布。不 git commit。**T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 员工价 / 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。**下一槽 16:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。


**2026-09-01 16:17：T-Extra drafted（theory）— 不要列为「下一轮要写」。不要规定 P88。不要规定 P89。** `theory/extra-person-vs-bar.md`：Extra Person/加床/Occupant Threshold 是预订加项，不是公开 BAR；OPERA Extra Adult/Child / Occupant Threshold / Controls + Cloudbeds extra person fee + Apaleo surcharge ≠ 定价权。过程仍 P78（三句 / 399-rejected / 799-Hypothesis 不改）。**≠ T-Fee（P79）/ ≠ T-Package（P69）。** 本店加床/儿童 SOP / 默认 Extra Person % / 儿童费 Fact **仍 NV**，不编。不把 OPERA/Cloudbeds/Apaleo Vendor $·€ 例当中国 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§109 新开 Apaleo Setting up Rate Plans（第三人 Vendor）；同族 Apaleo Setting Prices + Age Categories；补核 HotelKey Charge Types Extra Adult/Child；升核 OPERA Daily Rates / Occupant Threshold / Controls + Cloudbeds Extra Person Fees + HSMAI BAR + HFP Net + STR rollaway；Mews Extra occupancy **FAIL**（SPA 壳）。问题树 §85 仅 Diagnose 指针，未开新枝。不重写 optimization-advise。**不要开 P88，不要重写 P01–P87 正文。** 下一槽 **18:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定）。加床 leftover **已关为 P78**。Pet/AAA 仍停车。不要把 T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 列为下一轮要写。S01-14 scout-only 加强 P78 但不写理论 — 本小时补 WHY。

**2026-09-02 04:17：来源与复盘 R02-04 — 近完成 S01-14 / T-Extra 无真矛盾，无 needs_revision；18:17–02:17 槽空缺不当矛盾。不规定 P88。不规定 P89。** §110 新开：HotelKey Create a Group Master .v2（By Product Extra Person Charge 加到 base；By Occupancy 1 Adult/2 Adults/Child + Extra Adult fallback；**人数档/加项 ≠ 公开 BAR rewrite**；≠ §109 Charge Types；WebFetch+curl 200 size≈70954）+ protel Air Advanced pricing（occupancy 房价；age group / cot 价 **added to** room price；**人数/年龄加项 ≠ BAR Type**；WebFetch+curl 200 size≈67987）。HotelKey Modify Group Rates / Cloudbeds Accommodation Types / Cloudbeds Edit Base Rates **curl 200 已取，不当第三核**。Mews rate-management / age-category occupancy **FAIL SPA 壳**（同 §109）。§108–§109 / §67 = 指针。systems **无变**（HotelKey / protel PMS help 进 source-map；无新 RMS 页；不造 systems/hotelkey.md、不造 systems/protel.md）。华住加床/儿童 SOP、默认 Extra Person %、儿童费 Fact、Walk $、佣金%、699 **仍 NV**，不编。14/399/799 Simulation only。**399 = P78 加床改尺（拒绝）。** **T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。**加床 leftover **已关为 P78**。不要重写 P01–P87 / T-Extra 正文（仅 P78 / T-Extra / 轻指标文末一行 §110）。**下一槽 06:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-02 06:17：侦察 S02-06 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 tax-exclusive / city-tax / bar-ladder / promo-stack / rate-category-vs-bar / los-tier 专剧，但邻剧覆盖：含税展示/城市税 → **P79**（Cloudbeds Inclusive/Exclusive + OPERA Tax Inclusive + CITY_TAX Package=过账/展示 ≠ 改尺）；BAR ladder / Rate Groups → **P64** + BAR Based（每组 Best 显示 ≠ dump）；Rate Category → **P33** / T-Employee（分组/限制层）；Promo stacking → **P18/P73/P74/P76**（OPERA Promotion Codes=挂码/Hide）；LOS Tiered → **P41/P40/P76/P21**；切房=**P58**；动态打包=**P69**。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§111 新开 Cloudbeds Taxes + OPERA City Tax Package + BAR Rate Groups + Tiered Rate Codes + Promotion Codes；Rate Codes Tax Inclusive + Rate Categories 升核；HSMAI BAR / BAR Based 指针。S01-14/S01-06 已拒集不重开。税率 Fact / 华住含税·城市税·BAR 多档·促销叠加·长住档 SOP / 默认% / Extra Person% / 儿童费 Fact / 佣金% / Walk $ / 699 / STR gift-card·live-deposit Rooms 桶 **仍 NV**，不编。不重写 P01–P87 / T-* / optimization-advise 正文。不发布。不 git commit。**T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 加床 / 员工价 / 服务补偿 / 押金 / hurdle / 取消费 / 储值 / 停车 **不再 leftover**。**下一槽 08:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。


**2026-09-02 08:17：T-Tax drafted（theory）— 不要列为「下一轮要写」。不要规定 P88。不要规定 P89。** `theory/tax-display-city-tax-vs-bar.md`：Tax Inclusive/Exclusive 展示 + City/Tourism tax 包过账是展示/过账对齐，不是公开 BAR；Cloudbeds Inclusive/Exclusive + OPERA Tax Inclusive + CITY_TAX Package + Apaleo Local Charges ≠ 定价权。过程仍 P79（三句 / 399-rejected / 799-Hypothesis 不改）。**≠ T-Fee（强制费/all-in）/ ≠ T-Package（含早）/ ≠ T-Extra（加床）。** 本店税率 / 华住含税 SOP / 开票税率 **仍 NV**，不编。不把 Vendor % 例当中国 Fact。14/399/799 Simulation only；**399 = 被拒绝的 dump**。§112 新开 Apaleo Distribution Local Charges（第三人 Vendor）；同族 Apaleo City Tax Management；升核 Cloudbeds Taxes + OPERA Tax Inclusive + CITY_TAX + HSMAI BAR；Mews/猜 URL/protel **FAIL**。问题树 §86 仅 Diagnose 指针，未开新枝。不重写 optimization-advise。**不要开 P88，不要重写 P01–P87 正文。** 下一槽 **10:17 = case hour；本条不规定写哪一本剧本**（theory hour 不得指定）。Pet/AAA 仍停车。不要把 T-Tax / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T-Fee / P79 列为下一轮要写。S02-06 scout-only 加强 P79 税源但不写理论 — 本小时补 WHY。

**2026-09-02 10:17：案例 C02-10 tax-display Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** all-in sim 只部分覆盖税展示戏剧；新开 `cases/sim-2026-tax-display-city-tax-sat.md`（Diagnose **T-Tax**，过程仍 **P79**；Hold 779–799 首选 799；拒 399）。BAR ladder / Rate Groups / promo stacking / LOS Tiered **仍 fail for NEW playbook**（邻 P64/P18–P76/P41 覆盖）。§113 CASE 指针复述 §111/§112（Cloudbeds Inclusive/Exclusive · OPERA Tax Inclusive · CITY_TAX Package · Apaleo Local Charges · HSMAI BAR）；curl 复核 200；无新 URL。税率 Fact / 华住含税 SOP / 开票税率 / Vendor % China Fact **仍 NV**，不编。不重写 P01–P87 正文三句。不发布。不 git commit。**T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 12:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-02 12:17：来源与复盘 R02-12 — 近三轮 S02-06 / T-Tax / C02-10 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §114 新开：protel Air City Taxes, Bed Taxes & Co.（Logis x% inclusive/exclusive / Split from Accommodation；城市税公式/过账 ≠ BAR Type；≠ §112 FAIL sd-taxes.htm；WebFetch+curl 200 size≈17002）+ Clock PMS+ City Tax Mode（No City Tax / Extra Separate / Included Joint / Included Separate；城市税模式 = 展示/过账对齐 ≠ 公开灵活 BAR rewrite；新 Vendor 族；WebFetch+curl 200 size≈371314）。Cloudbeds Types / Set Up + HotelKey Charge Types Tax Setup 升核 + Tax Exemption + Clock City Tax **curl 200 已取，不当第三核**。Mews set-up-city-tax **FAIL SPA 壳**。§111–§113 / §67 = 指针。systems **无变**（protel / Clock PMS help 进 source-map；无新 RMS 页；不造 systems/protel.md、不造 systems/clock.md）。税率 Fact / 华住含税 SOP / 开票税率 / Vendor €·% China Fact / Walk $ / 佣金% / 699 **仍 NV**，不编。14/399/799 Simulation only。**399 = 税展示/城市税改尺（拒绝）。** **T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Tax 正文（仅文末一行 §114）。**下一槽 14:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-02 14:17：侦察 S02-14 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 soft-hold/option/暂留/rate-floor/connecting/breakfast-cover/rot/student/senior/tax-exempt 专剧，但邻剧覆盖：暂留/Option → **P53/P55/P10**（OPERA Hold Room + Quote Ref）；品牌底/Rate Floor → **T20 + P71/T-Corp + P85**（OPERA RATE_FLOOR = 价表最小额 ≠ rewrite）；连通房 → Hold Room adjoining 例；早餐 covers/F&B → **P63/P69**（Item Inventory + Restaurants Max Seating）；ROT/Daily Rates → **P01/P64**（About BAR + Daily Rates）；学生/老年 → **P23/P71**（C01-10 已拒同族）；免税 → **T-Tax/P79**（§114 HotelKey 指针）。Mobile/挂账/Cash/Green/AP/Geo **不重开或 NV**。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§115 新开 OPERA Hold Room + Blocks Quote Ref + Rate Management RATE_FLOOR + About BAR + Daily Rates + Item Inventory + Inventory Items + Package Codes + Restaurants + Transaction Discount + Rate Code Financial Details；BAR Based/Dynamic BAR/HSMAI/HotelKey Tax Exempt 指针。Cloudbeds Derived / Apaleo 旧路径 **404**。华住 Rate Floor·暂留·Option·连通·早餐 covers·学生/老年% / 绿色费% / 现金价差 / 税率 Fact **仍 NV**，不编。不重写 P01–P87 / T-* / optimization-advice 正文。不发布。不 git commit。**T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 16:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-09-02 16:17 THEORY T02-16 T-Floor** — drafted `theory/rate-floor-vs-bar.md`；过程仍 T20 + do-not-break-brand-floor；§116 OPERA RATE_FLOOR 升核 + Signals Min/Max 新开 + Cloudbeds Room Hierarchy Min/Max + OPERA 5.6 Rate Floor；HSMAI BAR 升核；Duetto SPA FAIL；Hold 779–799 首选 799；拒 399；无声明不发明 699；不开 P88/P89；下一槽 **18:17 = case**。不把 T-Floor/T-Tax/P79/T-Hurdle/T20 列为下一轮要写。Pet/AAA 仍停车。


**2026-09-02 18:17：案例 C02-18 rate-floor Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** T-Floor 短例不够 callable；新开 `cases/sim-2026-rate-floor-minmax-sat.md`（Diagnose **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699）。Rate Floor leftover **for NEW playbook 仍 fail**（邻 T20 + T-Floor 覆盖；本小时只补 sim）。§117 CASE 指针复述 §116（OPERA RATE_FLOOR · HSMAI BAR · Signals Min/Max · Cloudbeds Room Hierarchy · OPERA 5.6 Rate Floor · About BAR）；curl 复核 200；无新 URL。华住 Rate Floor SOP / 默认地板 % / 699 Fact / Vendor $ China Fact **仍 NV**，不编。不重写 P01–P87 正文三句。不发布。不 git commit。**T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 20:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-02 20:17：来源与复盘 R02-20 — 近三轮 S02-14 / T-Floor / C02-18 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §118 新开：protel Air Rate availability（Define minimum as well as maximum rate；低于/超过 blocked；trade-fair €100 例；**日程 Min/Max rate 保护 ≠ 公开灵活 BAR rewrite**；≠ T-Hurdle/LRV；curl 200 size≈38278）+ Clock PMS+ Rates - other settings（**Minimum and Maximum allowed prices** for standard rates；越界 error；**录入边界 ≠ rewrite**；curl 200 size≈370631）。protel Rate code details minimum rate / Clock Hurdle Rates / Rate Restrictions / HotelKey Rate Plan Maximum Rate Periods / Apaleo Rate Plans（§107；无 Rate Floor 字段）**curl 200 已取，不当第三核**。Mews Atomize price hierarchy **FAIL SPA 壳**；help.atomize.com pricing-controls **404**。§115–§117 / §67 = 指针。systems **无变**（protel / Clock PMS help 进 source-map；无新 RMS 页；不造 systems/protel.md、不造 systems/clock.md；不升核 atomize.md）。华住 Rate Floor SOP / 默认地板 % / 699 Fact / Vendor €·$ China Fact / Walk $ / 佣金% **仍 NV**，不编。14/399/799 Simulation only。**399 = 地板/Min·Max 改尺（拒绝）。** **T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Floor 正文（仅文末一行 §118）。**下一槽 22:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-02 22:17：侦察 S02-22 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 component/accessible/rate-cap/open-pricing/wash-factor/comp-set/merchant-agency/virtual-inventory 专剧，但邻剧覆盖：组合套房 → **P13/P34/P37**（OPERA Component Suites=库存扣减）；无障碍 → **P13/P37**（Accessible 旗）；Rate Cap → **T-Floor**（Min·Max 已覆盖）；Open Pricing → **P01/P64**（About BAR）；Wash → **P52**（HSMAI Wash 词条）；Comp Set 换集 → **P57/P36/P68**（STR Comp Set Guidelines）；Weather → **P28 已有**；Merchant/Agency → **P20**（HSMAI Merchant；Agency 404）；Lead-time → **P19/P38/P73**；Total Rev/F&B → **P51/P63**；HK/fire → **P63**；Virtual oversell → **P24/P03**（Sell Limits）。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§119 新开 OPERA Rooms Inventory Component + Room Types + Rooms Accessible + Room Features + Sell Limits + Overbooking Protection；STR Comp Set Guidelines；HSMAI Merchant/Wash；About BAR/RATE_FLOOR/HSMAI BAR/§48 HK 指针。Agency glossary / Cloudbeds Overbook 猜链 **404**；错误 OPERA 路径 soft FAIL。华住组合套房·无障碍·wash%·佣金% / fire-code 常模 / 699 / Walk $ **仍 NV**，不编。不重写 P01–P87 / T-* / optimization-advice 正文。不发布。不 git commit。**T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 2026-09-03 00:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。

**2026-09-03 00:17 THEORY T03-00 T-Component** — drafted `theory/component-suite-inventory-vs-bar.md`；过程仍 P13 + P37；§120 OPERA Component/Room Types/Rooms/Features 升核 + Cloudbeds Split Inventory 新开第三人 + HSMAI BAR 升核；Mews Parent SPA FAIL；OPERA 5.x soft FAIL；Hold 779–799 首选 799；拒 399；不开 P88/P89；S02-22 scout fail for NEW playbook **不阻挡** 理论加深；下一槽 **02:17 = case**。不把 T-Component/T-Floor/T-Tax/P79/T-Hurdle/T20 列为下一轮要写。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。华住组合套房·无障碍 SOP / 默认 suite % / 699 Fact / Vendor China Fact **仍 NV**，不编。

**2026-09-03 02:17：案例 C03-02 component-suite Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** T-Component 短例不够 callable；新开 `cases/sim-2026-component-suite-sat.md`（Diagnose **T-Component**，过程仍 **P13 + P37**；Hold 779–799 首选 799；拒 399；不发明 699）。Component leftover **for NEW playbook 仍 fail**（邻 P13 + P37 + T-Component 覆盖；本小时只补 sim）。§121 CASE 指针复述 §120（OPERA Component · Room Types · Rooms Accessible · Room Features · Cloudbeds Split Inventory · HSMAI BAR）；curl 复核 200；无新 URL；Mews Parent / OPERA 5.x FAIL 同 §120。华住组合套房·无障碍 SOP / 默认 suite % / 699 Fact / Vendor China Fact **仍 NV**，不编。不重写 P01–P87 正文三句。不发布。不 git commit。**T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 04:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-03 04:17：来源与复盘 R03-04 — 近三轮 S02-22 / T-Component / C03-02 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §122 新开：protel Virtual Room Types（多物理房→虚拟房型；套房/无障碍+陪同例；**虚拟组合库存机械 ≠ 公开灵活 BAR rewrite**；curl 200 size≈9399）+ Clock PMS+ Virtual Rooms（Virtual + Component；From Virtual Room / Used as component / Constraint；**虚拟/Component 库存联动 ≠ rewrite**；curl 200 size≈377953）。Apaleo Combined Unit Groups / Create unit groups / Clock occupancy accounting / HotelKey House Inventory **curl 200 已取，不当第三核**。Mews Parent **FAIL SPA 壳**；Clock 猜链 9000179316 **404**。§119–§121 / §67 = 指针。systems **无变**（protel / Clock PMS help 进 source-map；无新 RMS 页；不造 systems/protel.md、不造 systems/clock.md）。华住组合套房·无障碍 SOP / 默认 suite % / 699 Fact / Vendor 例 China Fact / Walk $ / 佣金% **仍 NV**，不编。14/399/799 Simulation only。**399 = 套房池/Component 改尺（拒绝）。** **T-Component / C03-02 / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Component 正文（仅文末一行 §122）。**下一槽 06:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-03 06:17：侦察 S03-06 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 pseudo/waitlist/ctd/maxlos/bbar/preassign 专剧，但邻剧覆盖：伪房/厅 OCC → **P51/T-Hall/P47/P37**（OPERA Pseudo=non-inventory）；CTD/MaxLOS dump → **P33/P40/P21**（Restrictions + HSMAI MaxLOS/CTA）；Waitlist 改尺 → **P43/P03/P05**（OPERA Waitlist=未确认状态）；BBAR → **P64**；Pre-assign 缺 A（soft FAIL）；Advance-purchase → **P19/P64/P73**。未凑齐 HIGH 四件套。Pet/AAA **仍停车**。Smoking/damage FEE 保持 MEDIUM/LOW。§123 新开 OPERA Waitlist + HSMAI MaxLOS/CTA/MinLOS + IDeaS Max LOS；Room Types Pseudo 用途升核；Restrictions 升核；About BAR/HSMAI BAR/Apaleo/Clock 指针。Assignment 猜链 soft FAIL；Cloudbeds Restrictions 猜链 404；HSMAI waitlist/CTD glossary 404。华住伪房·候补·MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 Fact / 699 / Walk $ **仍 NV**，不编。不重写 P01–P87 / T-* / optimization-advice 正文。不发布。不 git commit。**T-Component / C03-02 / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 08:17 = theory hour。不要规定 P88。不要规定 P89。** Scout 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。


**2026-09-03 08:17 THEORY T03-08 T-Restriction** — drafted `theory/restriction-maxlos-ctd-vs-bar.md`；过程仍 P33（+ P40/P21）；§124 HSMAI MaxLOS/CTA + OPERA Restrictions 升核 + Apaleo/Clock/eCornell IMPACT/Lighthouse 用途升核；HSMAI CTD glossary FAIL 404；Hold 779–799 首选 799；拒 399；不开 P88/P89；S03-06 scout fail for NEW playbook **不阻挡** 理论加深；下一槽 **10:17 = case**。不把 T-Restriction/T-Component/T-Floor/T-Tax/P79/T-Hurdle/T20 列为下一轮要写。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。华住 MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 / 699 Fact / Vendor China Fact **仍 NV**，不编。

**2026-09-03 10:17：案例 C03-10 restriction-maxlos/ctd Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** T-Restriction 短例不够 callable；新开 `cases/sim-2026-restriction-maxlos-ctd-sat.md`（Diagnose **T-Restriction**，过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699）。CTD/MaxLOS leftover **for NEW playbook 仍 fail**（邻 P33 + P40 + P21 + T-Restriction 覆盖；本小时只补 sim）。§125 CASE 指针复述 §124（HSMAI MaxLOS/CTA · OPERA Restrictions · Apaleo/Clock · eCornell · Lighthouse · HSMAI BAR）；curl 复核 200；无新 URL；HSMAI CTD glossary FAIL 同 §124。华住 MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 / 699 Fact / Vendor China Fact **仍 NV**，不编。不重写 P01–P87 正文三句。不发布。不 git commit。**T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 12:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-03 12:17：来源与复盘 R03-12 — 近三轮 S03-06 / T-Restriction / C03-10 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §126 新开：Cloudbeds MinLOS and MaxLOS Restrictions for Base Rates（Availability Matrix / Base Rates 配 MinLOS/MaxLOS；拒单除非同意连住；**可售/连住限制层 ≠ 公开灵活 BAR rewrite**；非 OPERA；≠ §123 猜链 404；curl 200 size≈90840）+ Cloudbeds Closed to Arrival/Departure Restrictions（CTA 防入住 / CTD 防离店；**CTA/CTD 可售闸 ≠ rewrite**；curl 200 size≈80915）。RMS Cloud MLOS/CTA/CTD / HotelKey Set Restrictions·House MinMax·House CTA / Cloudbeds Matrix Overview / protel Rate availability（§118）**curl 200 已取，不当第三核**。OPERA Restrictions/Managing + HSMAI MaxLOS + Apaleo Rate Plans + Clock Rate Restrictions **指针升核**。HSMAI CTD glossary FAIL **同 §124**。systems **无变**（Cloudbeds PMS help 进 source-map；无新 RMS 页；不造 systems/cloudbeds.md）。华住 MaxLOS·CTD SOP / 默认限制常模 / 候补转化率 Fact / 699 Fact / Walk $ / 佣金% / Vendor 例 China Fact **仍 NV**，不编。14/399/799 Simulation only。**399 = 限制层改尺（拒绝）。** **T-Restriction / C03-10 / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Restriction 正文（仅文末一行 §126）。**下一槽 14:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


### S03-14 · 2026-09-03 14:17 scout-only（Rack/门市 · Blackout · Yieldable · Seasonal · Children）

- **结论：** 不开 P88。四件套未齐。§127 升核 HSMAI Rack（原 timeout）+ BAR replaced Rack。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。
- **全文：** `scout/2026-09-03-1417.md` · `research-log/2026-09-03-1417-scout.md`

**2026-09-03 16:17 THEORY T03-16 T-Rack** — drafted `theory/rack-vs-bar.md`；过程仍 P01 + P64（+ T-Floor）；§128 HSMAI Rack + BAR replaced Rack + Protel Rack 升核/复核；OPERA About BAR 指针；Hold 779–799 首选 799；拒 399；不开 P88/P89；S03-14 scout fail for NEW playbook **不阻挡** 理论加深；下一槽 **18:17 = case**。不把 T-Rack/T-Restriction/T-Component/T-Floor/T-Tax/P79/T-Hurdle/T20 列为下一轮要写。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。华住门市·Rack SOP / 默认门市→BAR % / 699 Fact / Vendor China Fact **仍 NV**，不编。


**2026-09-03 18:17：案例 C03-18 rack-vs-bar Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** T-Rack 短例不够 callable；新开 `cases/sim-2026-rack-vs-bar-sat.md`（Diagnose **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699）。Rack/门市 leftover **for NEW playbook 仍 fail**（邻 P01 + P64 + T-Floor + T-Rack 覆盖；本小时只补 sim）。§129 CASE 指针复述 §128（HSMAI Rack · BAR replaced Rack · Protel Rack · OPERA About BAR）；curl 复核 200；无新 URL；blackout/yieldable/seasonal/children FAIL 同 §127。华住门市·Rack SOP / 默认门市→BAR % / 699 Fact / Vendor China Fact **仍 NV**，不编。不重写 P01–P87 正文三句。不发布。不 git commit。**T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。**下一槽 20:17 = sources/recap。不规定 P88。不规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-03 20:17：来源与复盘 R03-20 — 近三轮 S03-14 / T-Rack / C03-18 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §130 新开：Cloudbeds How to Hide the Base Rate on the Booking Engine （藏 Base Rate、只卖 Rate Plans/Packages；**Base 可藏 ≠ 公开灵活 BAR rewrite**；非 OPERA；≠ §2765 Rate Plans and Packages；curl 200 size≈87336）+ Oracle OPERA 5.6 Rate Management Configuration （Rate Categories 例 **Rack Rates**；regular rack rates；Rate Strategy fluctuate rack by occupancy；rack rate type vs special/group/contract；**同页另建 BAR**；**Rack 分类/类型 ≠ rewrite**；curl 200 size≈25474）。Cloudbeds Rate Plans / Matrix Overview / Clock Rate types / Clock standard rates / Apaleo Setting Prices / HotelKey Rate Plan Config / OPERA 5.6 Rate Categories（§105）**curl 200 已取，不当第三核或指针**。HSMAI Rack/BAR + Protel Rack + OPERA About BAR **指针升核**。systems **无变**（Cloudbeds/OPERA PMS help 进 source-map；无新 RMS 页；不造 systems/cloudbeds.md）。华住门市·Rack SOP / 默认门市→BAR % / 699 Fact / Walk $ / 佣金% / Vendor 例 China Fact **仍 NV**，不编。14/399/799 Simulation only。**399 = 门市基准改尺（拒绝）。** **T-Rack / C03-18 / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Rack 正文（仅文末一行 §130）。**下一槽 22:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-03 22:17：侦察 S03-22 scout-only。** Booking Window / Min-Max Advanced Booking / Release Time / Start-End Sell Date = **MEDIUM**；LOS Pricing/Tiered = **MEDIUM/LOW**；DOW/Season/Sell Dates = LOW。§131 新开 OPERA 26.2 Rate Codes、Booking.com BookingRule、HSMAI ALT、HSMAI LOS Pricing。新诊断提醒：搜不到可能是售卖窗口/提前期挡住，不等于需求弱或 BAR 高；但动作已有 P19/P33/T-Restriction/P38/P42/P05 与 T08/P40/P41/P76/P21 承接，故不开新资产。华住字段/默认窗口/折扣% NV。Pet/AAA 停车；Smoking/damage FEE MEDIUM/LOW。不开 P88/P89。下一槽 2026-09-04 00:17 theory，不指定编号。

**2026-09-04 00:17（T04-00 · T-Window）：** 理论卡 `theory/booking-window-vs-bar.md` drafted — Booking-side 时窗（Min/Max Advanced Booking、ReleaseTimeOfDayStart/End、booking period / Start-End Sell Dates、late booking until）≠ 公开 BAR；「有房却没有 offer / 搜不到」先查下单时窗，不判需求弱、不砍尺。Diagnose 走 **T-Window**，过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。源表 §132：升核 OPERA Configuring Rate Codes + Booking.com BookingRule + HSMAI ALT；**新开** Cloudbeds Advanced booking settings（cutoff/last-minute 命名反直觉；默认 0 / 13200；设 0 可能整段不可订）+ Apaleo Setting up Rate Plans（booking period 与住期窗分离；late booking until）+ Apaleo Service Availability（有房无 offer 先查 minimum advance booking；override 不改可售/价格）。**FAIL：** HSMAI advance-purchase / booking-window / booking-curve / booking-pace / lead-time 猜链 404 ×5；HotelKey rate-plan-restrictions、Clock rate-restrictions 猜链 404 → 第三/第四家 Vendor 独立核**未取到**，留给下轮 recap 正式检索。**仍 NV：** 本店/各渠道真实提前期值与口径、release time、booking period、华住 Booking Window·Release Time SOP、默认 cutoff/last-minute、本店 ALT、窗口外流失转化率。**不开 P88/P89；不新增剧本/决策卡/轻指标/Simulation。** Hold 779–799 首选 799；拒 399；不发明 699。LOS Pricing / Tiered 仍 MEDIUM-LOW leftover（handoff T08/P40/P41/P76/P21）。Pet/AAA 仍停车；Smoking/damage FEE 仍 MEDIUM/LOW。


**2026-09-04 12:17：来源与复盘 R04-12 — 近三轮 S03-22 / T-Window（+ 02–10 gap）无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §133 新开：Clock PMS+ Rates Restrictions 9000178099（**Min/Max days before arrival** + **Last Minute days** + Active from/to；**时窗闸 ≠ 公开灵活 BAR rewrite**；补 §132 Clock 猜链 404；curl 200 size≈390475）+ Oracle OPERA 5.6 Rate Header Tab（Sell Controls **Minimum / Maximum Advance Booking**；例 Min=4 / Max=4；**≠** Configuring Rate Codes；**时窗字段 ≠ rewrite**；curl 200 size≈111723）。OPERA Rate Availability (F5) **指针**（curl 200 size≈55230）。Mews advance-booking / Understanding **FAIL SPA shell**（同 md5≈298051）。HSMAI ALT + Cloudbeds Advanced + Apaleo Rate Plans **指针升核**。systems **无变**。华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT / 699 Fact / Walk $ / 佣金% / Vendor 例 China Fact **仍 NV**，不编。14/399/799 Simulation only。**399 = 时窗/可见性改尺（拒绝）。** **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp drafted — 不要列为下一轮要写。** 仍 **P01–P87**。不要重写 P01–P87 / T-Window 正文（仅文末一行 §133）。C04-02 未写（case 槽 gap）。**下一槽 14:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


**2026-09-04 14:17：侦察 S04-14 scout-only — 不开 P88。不要列为 must-write 剧本。** Soft/Hard≈Deduct/Non-Deduct / House Closed / Channel Stop-Sell 四件套未齐（邻 **P53/T-Status/P52/P58/P55** + **T-Restriction/P33/P35/P60**）。§134 新开 OPERA Blocks（Deduct/Non-Deduct）+ Property Availability（Occupancy with Non-deduct %）+ GRC；Block Statuses / Restrictions 指针；HSMAI Wash/Group Ceiling 用途升核；OTA News Soft/Hard = **C** 不当核。C04-02 仍留给 case。Pet/AAA **仍停车**。Smoking/damage FEE 仍 MEDIUM/LOW。华住 Soft·Hard 话术 / 状态码名 / wash% / 默认放房点 / 699 **仍 NV**，不编。不重写 P01–P87 / T-Window 正文。不发布。不 git commit。**T-Window / T-Rack / T-Restriction / … drafted — 不要列为下一轮要写。** **下一槽 16:17 = theory hour。不要规定 P88。不要规定 P89。** theory 可评估加深 Deduct/Non-Deduct 误读（加强既有 T-Status）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。不要发明已占用的 P 号。

**2026-09-04 16:17：理论 T04-16 Soft/Hard≈Deduct deepen theory-skip — 不开 P88。不要列为 must-write。** S04-14 leftover 评估：口语 Soft/Hard ≈ Deduct/Non-Deduct；T-Status/P53 已覆盖 Situation/Diagnosis/Action；§134 Occupancy with Non-deduct % 复核只加固 Watch → **不写**新理论卡、不重写 T-Status 三句。curl 复核 Blocks/Property Availability/GRC 均 200。华住 Soft·Hard 话术 / 状态码名 / wash% / 699 **仍 NV**，不编。不重写 P01–P87 / T-Window 正文。不发布。不 git commit。**T-Window / T-Rack / T-Restriction / T-Status… drafted — 不要列为下一轮要写（T-Status deepen 已 skip）。** 仍 **P01–P87**。**下一槽 18:17 = case hour。不要规定 P88。不要规定 P89。** Case 不得指定下一本剧本。C04-02 仍留给 case 自主核。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-04 18:17：案例 C04-02 booking-window Simulation drafted — 不开 P88。** `cases/sim-2026-booking-window-sat.md`：Diagnose 走 **T-Window**，过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）。Hold 779–799 首选 799；拒 399；不发明 699。§135 CASE 指针复述 §132–§133（OPERA Rate Codes / BDC BookingRule / Cloudbeds Advanced / Apaleo Rate Plans + Service Availability / HSMAI ALT / Clock Restrictions / OPERA Rate Header；curl 全 200）；不造新 URL。华住 Booking Window·Release Time SOP / 默认提前期 / 本店 ALT / 699 Fact **仍 NV**，不编。不重写 P01–P87 / T-Window 正文三句（仅配套行 + 指针）。不发布。不 git commit。**T-Window / T-Rack / T-Restriction / T-Status… drafted — 不要列为下一轮要写（C04-02 已写）。** 仍 **P01–P87**。**下一槽 20:17 = sources/recap。不要规定 P88。不要规定 P89。** 不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


**2026-09-04 20:17：来源与复盘 R04-20 — 近三轮 S04-14 / T04-16 skip / C04-02 无真矛盾，无 needs_revision。不规定 P88。不规定 P89。** §136 用途升核：HotelKey Rate Plan Configuration（**Min/Max Booking Lead Days** = 可见性提前期闸 ≠ 公开灵活 BAR rewrite；补 §132 HotelKey `rate-plan-restrictions` 404；curl 200 size≈69949）+ Protel Air Rate availability（**Min/Max advance booking of X Days** + **when booked X to Y days before arrival**；页曾 §118 hurdle，本小时 T-Window；curl 200 size≈38278）。OPERA Cloud Restrictions Min/Max Advance Booking **指针**（curl 200 size≈16429）。Protel Standard early-bird Closed >P1 days **同族登记**（curl 200 size≈20214）。Clock / OPERA Rate Header / Cloudbeds Advanced / Apaleo Rate Plans / HSMAI ALT **指针升核**。systems **无变**。华住 Booking Window·Release Time / Soft·Hard SOP / 默认提前期 / 本店 ALT / wash% / 699 Fact / Walk $ / 佣金% / Vendor 例 China Fact **仍 NV**，不编。14/399/799 Simulation only。**399 = 时窗/可见性改尺（拒绝）。** **T-Window / C04-02 / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status drafted — 不要列为下一轮要写（T-Status Soft/Hard deepen 16:17 skip；C04-02 已写）。** 仍 **P01–P87**。不要重写 P01–P87 / T-Window 正文（仅文末一行 §136）。**下一槽 22:17 = scout hour。不要规定 P88。不要规定 P89。** Scout 只核仍 NV 观察字段，不是 must-write 剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


**2026-09-04 22:17：侦察 S04-22 scout-only — 不开 P88。不要列为 must-write 剧本。** filename-scan 无 rate-strategy / occupancy-rule / occupancy-based-pricing / pie-auto 专剧，但邻剧覆盖：**P66**（系统建议/自动输出≠定价权）+ **P33**（关档/LOS 限制≠砍尺）+ **P64**（嵌套关低）+ **P01/P05**（真强弱改尺）+ **P37**（OOO/分母）+ **P02/T20**。未凑齐 HIGH 四件套。§137 用途升核 OPERA Cloud Rate Strategies（OCC% Close Discount；Consider Sell Limits/OOO；curl 200 size≈18104；§82 曾核 STAFF）+ 新开 OPERA 5.6 Occupancy Based Pricing（curl 200 size≈13373）+ Rate Strategy Setup（curl 200 size≈48702；±$ 例 NOT China Fact）+ Cloudbeds PIE occupancy-based（curl 200 size≈92903；manual/auto + revert）+ PIE Rules and Alerts（curl 200 size≈89252；预载 ±10%/−5% NOT China Fact）；PIE Restriction-based 登记（only loosen，never set closed；curl 200 size≈79381）。Apaleo rate-plans 猜链 **404**。Soft/Hard / Booking Window / LOS Pricing / 已拒集 **不重开**。Pet/AAA **仍停车**。Smoking/damage FEE 仍 MEDIUM/LOW。华住 Rate Strategy·OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 **仍 NV**，不编。不重写 P01–P87 / T-Window / T-Status 正文。不发布。不 git commit。**T-Window / C04-02 / T-Rack / T-Restriction / T-Status… drafted — 不要列为下一轮要写（T-Status Soft/Hard deepen 已 skip；C04-02 已写）。** 仍 **P01–P87**。**下一槽 2026-09-05 00:17 = theory hour。不要规定 P88。不要规定 P89。** theory 可评估加深 Rate Strategy / Occupancy-rule 误读（加强既有 P66/P33）；不能显著改变 Situation/Diagnosis/Action/Watch 则不写。不要发明已占用的 P 号。


**2026-09-05 00:17：理论 T05-00 Rate Strategy deepen theory-skip — 不开 P88。不要列为 must-write。** S04-22 leftover 评估：OCC-triggered auto ≈ 已有限制/日价/系统输出杠杆自动化；P66/P33/P64/P37/P01/P05 已覆盖 Situation/Diagnosis/Action；§137 Manual/Auto·revert·Sell Limits/OOO 复核只加固 Watch → **不写**新理论卡、不重写 P66 三句。curl 复核 Rate Strategies/OBP/RS Setup/PIE occ/PIE Rules 均 200。华住 Rate Strategy·OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 **仍 NV**，不编。不重写 P01–P87 / T-Window 正文。不发布。不 git commit。**T-Window / T-Rack / T-Restriction / T-Status / P66… drafted — 不要列为下一轮要写（T-Status Soft/Hard deepen 已 skip；P66 Rate Strategy deepen 本小时 skip）。** 仍 **P01–P87**。**下一槽 02:17 = case hour。不要规定 P88。不要规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

**2026-09-05 02:17：案例 C05-02 OCC-auto Rate Strategy Simulation drafted — Notify YES。不开 P88。不要列为 must-write 剧本。** T05-00 deepen **已 skip**（无新轴）；本小时补 callable 专拍 `cases/sim-2026-occ-auto-rate-strategy-sat.md`（Diagnose **P66**，过程 + **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699）。≠ `sim-2026-rms-dump-sat.md`（RMS 建议卖价孪生）。§138 CASE 指针复述 §137；curl 复核 200；无新 URL。华住 Rate Strategy·OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 Fact / Vendor China Fact **仍 NV**，不编。不重写 P01–P87 / P66 正文三句（仅修订表 + 指针）。不发布。不 git commit。**T-Window / T-Rack / T-Restriction / T-Status / P66… drafted — 不要列为下一轮要写（T-Status Soft/Hard deepen 已 skip；P66 Rate Strategy deepen 已 skip；C05-02 本小时已写；C04-02 已写）。** 仍 **P01–P87**。**下一槽 04:17 = sources/recap。不要规定 P88。不要规定 P89。** Case 不得指定下一本剧本。不要发明已占用的 P 号。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。


### R05-04 · 2026-09-05 04:17 sources-recap（OCC-auto / Clock OAR + Protel OCC Close）

- **结论：** 近三轮 S04-22 / T05-00 skip / C05-02 **无真矛盾**。§139 新开 Clock Occupancy Adaptable Rates + Protel OCC% Close 用途升核。Diagnose 仍 **P66**；过程仍 **P33+P64**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。**
- **仍 NV：** 华住 Rate Strategy·OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 06:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-05-0417-sources-recap.md`

### 2026-09-05 06:17 · S05-06 scout-only
- **结论：** OOS vs OOO / Sales Allowance·Group Ceiling / Item Sell Control / Agency **四件套未齐**；邻 P37/P10/P52/P53/P58/P78/P69/P20。§140 新开 OPERA OO/OS + Sales Allowance + Item Inventory + HSMAI Group Ceiling；Agency 404。Diagnose 仍 **P66**（近轮）；过程仍 P33+P64。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 OO·OS 字段 · Sales Allowance·团 Ceiling SOP · 加项配额 · 佣金% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 08:17 theory。不规定 P88/P89。
- **全文：** `scout/2026-09-05-0617.md` · `research-log/2026-09-05-0617-scout.md`

### 2026-09-05 08:17 · T05-08 OOS vs OOO deepen theory-skip
- **结论：** OOS≠OOO 同属分母轴；P37+T06 已覆盖；§140 复核只加固 Watch → **theory-skip**。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 OO·OS 字段 · Sales Allowance·团 Ceiling SOP · 加项配额 · 佣金% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 10:17 case。不规定 P88/P89。
- **全文：** `research-log/2026-09-05-0817-theory-skip-oos-ooo.md`

### 2026-09-05 10:17 · C05-10 OOS vs OOO Simulation
- **结论：** T05-08 deepen **已 skip**（无新轴）；本小时补 callable 专拍 `cases/sim-2026-oos-vs-ooo-sat.md`（Diagnose **P37** + **T06**；Hold 779–799 首选 799；拒 399；不发明 699）。≠ `sim-2026-ooo-occ-92-saturday.md`（OOO 假 92% 孪生）。§141 CASE 指针复述 §140；curl 复核 200；无新 URL。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 OO·OS 字段 · Unit Status SOP · 默认维修间夜 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 12:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-oos-vs-ooo-sat.md` · `research-log/2026-09-05-1017-oos-vs-ooo-case.md`


### R05-12 · 2026-09-05 12:17 sources-recap（OOS≠OOO / Protel Air + Cloudbeds OOS + Occupancy 分母差）

- **结论：** 近三轮 S05-06 / T05-08 skip / C05-10 **无真矛盾**。§142 新开 Protel Air Block OOO≠OOS + Cloudbeds OOS Blocking + Occupancy Discrepancies（Dashboard 含 OOS vs Adjusted 剔除）。Diagnose 仍 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 OO·OS 字段 · Unit Status SOP · 默认维修间夜 · Sales Allowance·团 Ceiling SOP · 加项配额 · 佣金% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 14:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-05-1217-sources-recap.md`

### 2026-09-05 14:17 · S05-14 scout-only（Sell Limits / Channel Sell Limits / Apaleo Managed Overbooking）
- **结论：** Sell Limits / Channel Sell Limits / Apaleo Managed OB / Unconstrained **四件套未齐**；邻 P24/P33/P37/P58/P35/P60/P13/P03/P05/P43。§143 用途升核 OPERA Managing Sell Limits + Managing Channel Sell Limits；**新开** Apaleo Managed Overbooking；Protel OB 登记；HSMAI Unconstrained 指针；Cloudbeds 猜链 404。Diagnose 近轮仍 **P37**（+ T06）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 Sell Limit·渠道额度 SOP · 默认超售垫 · 渠道% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。
- **全文：** `scout/2026-09-05-1417.md` · `research-log/2026-09-05-1417-scout.md`


### 2026-09-05 16:17 · T05-16 Sell Limit deepen theory-skip
- **结论：** Sell Limit / Channel Sell Limit / Allowed OB 同属可售数量闸；P24+P33+P58 已覆盖；§143 复核只加固 Watch → **theory-skip**。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 Sell Limit·渠道额度 SOP · 默认超售垫 · 渠道% · Walk $ · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 18:17 case。不规定 P88/P89。
- **全文：** `research-log/2026-09-05-1617-theory-skip-sell-limit.md`

### 2026-09-05 18:17 · C05-18 Sell Limit misread Simulation
- **结论：** T05-16 deepen **已 skip**（无新轴）；本小时补 callable 专拍 `cases/sim-2026-sell-limit-misread-sat.md`（Diagnose **P24** + **P33**；Hold 779–799 首选 799；拒 399；不发明 699）。§144 CASE 指针复述 §143；curl 复核 200；无新 URL。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 Sell Limit·渠道额度 SOP · 默认超售垫 · 渠道% · Walk $ · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 20:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-sell-limit-misread-sat.md` · `research-log/2026-09-05-1817-sell-limit-case.md`

### 2026-09-05 20:17 · R05-20 sources-recap（Sell Limit 互补源）
- **结论：** 近三轮 S05-14 / T05-16 skip / C05-18 **无真矛盾**。§145 **新开** Stayntouch Sell Limits + Clock Availability Adjustment + Protel Overbooking Setup；Diagnose 仍 **P24**（+ **P33**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 Sell Limit·渠道额度 SOP · 默认超售垫 · 渠道% · Walk $ · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 22:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-05-2017-sources-recap.md` · `sources/source-map.md` §145


**2026-09-05 22:17：侦察 S05-22 scout-only** — 不开 P88。无新剧本/卡/指标/sim。Do Not Move / Locked·Unassigned / Waitlist / Dirty·Pseudo 四件套未齐（邻 **P37 / P13 / P63 / P24 / P43 / P03 / P05**）。§146 新开 OPERA Managing DNM + Cloudbeds Unassigned；Waitlist 用途升核（§123）；Pseudo/HK Board/Blocking 指针·登记；HSMAI Waitlist 404；Room Assignment soft FAIL。Pet/AAA 仍停车。不要把 T-Window / T-Rack / T-Restriction / T-Status / P66 / P37 / T06 / P24… 列为「下一轮要写」— 已 drafted。**下一槽 2026-09-06 00:17 = theory hour。不要规定 P88。不要规定 P89。Notify NO。**

### 2026-09-06 00:17 · T06-00 DNM / Locked·Unassigned / Waitlist deepen theory-skip
- **结论：** DNM / Locked·Unassigned / Waitlist 同属分房作业/未确认状态层；P37+P13+P63+P43 已覆盖；§146 复核只加固 Watch → **theory-skip**。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 DNM·预分房·候补 SOP · 候补转化率 · 默认锁房数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 02:17 case。不规定 P88/P89。
- **全文：** `research-log/2026-09-06-0017-theory-skip-dnm.md`

### 2026-09-06 02:17 · C06-02 DNM / Locked·Unassigned / Waitlist misread Simulation
- **结论：** T06-00 deepen **已 skip**（无新轴）；本小时补 callable 专拍 `cases/sim-2026-dnm-locked-waitlist-misread-sat.md`（Diagnose **P37** + **P13**；Hold 779–799 首选 799；拒 399；不发明 699）。§147 CASE 指针复述 §146；curl 复核 200；无新 URL。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 DNM·预分房·候补 SOP · 候补转化率 · 默认锁房数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 04:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-dnm-locked-waitlist-misread-sat.md` · `research-log/2026-09-06-0217-dnm-case.md`


### 2026-09-06 04:17 · R06-04 sources-recap（DNM 互补源）
- **结论：** 近三轮 S05-22 / T06-00 skip / C06-02 **无真矛盾**。§148 **新开** HotelKey Do Not Move + Stayntouch Do Not Move + Clock Room Allocation / Disable room change；Protel Lock 登记；Clock Waiting List 登记；Diagnose 仍 **P37**（+ **P13**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 DNM·预分房·候补 SOP · 候补转化率 · 默认锁房数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 06:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-06-0417-sources-recap.md` · `sources/source-map.md` §148

### 2026-09-06 06:17 · S06-06 scout-only（Queue / Pending / Rush）
- **结论：** Queue Rooms / Pending / Rush / Room Is Ready / Shares **四件套未齐**；邻 **P63/P67/P37/P43/P03/P05**（Shares → P78/P69）。§149 新开 OPERA Queue + PWA + 5.6 Rush + Stayntouch Queued + HotelKey Pending + Cloudbeds Room Is Ready；Shares 登记；HSMAI 404。Diagnose 近轮仍 **P37**（DNM 闭环后）；Queue 误读 handoff **P63+P67+P37+P43**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住排队·rush SOP · 平均等待分钟 · 默认 rush 阈值 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 08:17 theory。不规定 P88/P89。
- **全文：** `scout/2026-09-06-0617.md` · `research-log/2026-09-06-0617-scout.md`

### 2026-09-06 08:17 · T06-08 Queue / Pending / Rush deepen theory-skip
- **结论：** Queue / Pending / Rush / Room Is Ready 同属到店周转/房态就绪层；P63+P67+P37+P43 已覆盖；§149 复核只加固 Watch → **theory-skip**。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住排队·rush SOP · 平均等待分钟 · 默认 rush 阈值 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 10:17 case。不规定 P88/P89。case 可补 Queue 误读专拍（闸仍 P63/P67）。
- **全文：** `research-log/2026-09-06-0817-theory-skip-queue.md`


### 2026-09-06 10:17 · C06-10 Queue / Pending / Rush / Room Is Ready misread Simulation
- **结论：** T06-08 deepen **已 skip**（无新轴）；本小时补 callable 专拍 `cases/sim-2026-queue-pending-rush-misread-sat.md`（Diagnose **P63** + **P67**；Hold 779–799 首选 799；拒 399；不发明 699）。§150 CASE 指针复述 §149；curl 复核 200；无新 URL。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住排队·rush SOP · 平均等待分钟 · 默认 rush 阈值 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 12:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-queue-pending-rush-misread-sat.md` · `research-log/2026-09-06-1017-queue-case.md`

### 2026-09-06 12:17 · R06-12 sources-recap（Queue 互补源）
- **结论：** 近三轮 S06-06 / T06-08 skip / C06-10 **无真矛盾**。§151 **新开** Clock Housekeeping Room Statuses + Apaleo Housekeeping + Protel Housekeeping list；Clock Check-In / Live Monitor / Mews API 登记；Mews help SPA；Diagnose 仍 **P63**（+ **P67**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住排队·rush SOP · 平均等待分钟 · 默认 rush 阈值 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 14:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-06-1217-sources-recap.md` · `sources/source-map.md` §151



### 2026-09-06 14:17 · S06-14 scout-only（Fixed Rate / Override / Shares·Accompanying）
- **结论：** Fixed Rate / Rate Amount Override / Discount Reason / Force Availability / Shares·Accompanying **四件套未齐**；邻 **P66/P65/P87/P80/P71/P24/P33/P78/P69/P01/P64**。§152 新开 OPERA Fixed Rates + Daily Details + Rate Override Reasons + RoomKey Override + RMS Override + HotelKey Force + Accompanying + OPERA 5.6 Shares；Shares 26.2 升核；Controls SHARES 登记；HSMAI 404；Rate Code Financial soft FAIL。Diagnose 近轮仍 **P63**（Queue 闭环后）；Fixed/Override 误读 handoff **P66+P65+P87**；Shares handoff **P78/P69**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住改价·分账 SOP · 默认 override 频率 · Share 分账常模 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。theory 可评估 Fixed/Override deepen（加强 P66/P65）；不能显著改变则 skip。
- **全文：** `scout/2026-09-06-1417.md` · `research-log/2026-09-06-1417-scout.md`


### 2026-09-06 16:17 · T06-16 Fixed/Override deepen theory-skip
- **结论：** Fixed Rate / Rate Amount Override / Discount Reason / Force Availability = **reservation-level amount / availability-force layer** ≠ 公开 BAR；邻 **P66+P65+P87+P24/P33+P78/P69** 已覆盖 Situation/Diagnosis/Action；§152 复核只加固 Watch → **theory-skip**（镜像 T06-08 / T06-00 / T05-16）。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住改价·分账 SOP · 默认 override 频率 · Share 分账常模 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 18:17 case。不规定 P88/P89。case 可补 Fixed/Override 误读专拍 Simulation（闸仍 P66/P65）。
- **全文：** `research-log/2026-09-06-1617-theory-skip-fixed-override.md`


### 2026-09-06 18:17 · C06-18 Fixed/Override/Force misread Simulation
- **结论：** Fixed Rate / Rate Amount Override / Discount Reason / Force Availability ≠ 公开 BAR；Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699；§153 CASE 指针复述 §152。T06-16 deepen **已 skip** — 本卷 ≠ 推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住改价·分账 SOP · 默认 override 频率 · Share 分账常模 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 20:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-fixed-override-misread-sat.md` · `research-log/2026-09-06-1817-fixed-override-case.md` · `sources/source-map.md` §153


### 2026-09-06 20:17 · R06-20 sources-recap（Fixed/Override 互补）
- **结论：** 近三轮 S06-14 / T06-16 skip / C06-18 **无真矛盾**。§154 新开 Clock Manual Price + Apaleo Change Prices + Protel RBD Override rate；Clock how-to-set / Cloudbeds Edit Price / Protel Rooms 手改价登记；§139 OAR + §152–§153 指针升核。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住改价·分账 SOP · 默认 override 频率 · Share 分账常模 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 22:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-06-2017-sources-recap.md` · `sources/source-map.md` §154


### 2026-09-06 22:17 · S06-22 scout-only（Mass Update / Daily Rates Replace / Refresh·Update）
- **结论：** Mass Update / Daily Rates Create·Replace / Refresh Rate / Update rates / Non-deduct view **四件套未齐**；邻 **P66/P65/P64/P01/P02/P05/P60**（Non-deduct → T-Status/P53/P24）。§155 新开 OPERA Mass Update + Daily Rates Pricing Schedule + Rate Codes refreshed + Protel Update rates + Property Availability Non-deduct；Daily Details Refresh 用途升核；Cloudbeds putRate / Apaleo / DNR 登记；HSMAI 404。Diagnose 近轮仍 **P66**（Fixed 闭环后）；Mass/Refresh 误读 handoff **P66+P65+P64+P01/P05**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住批量改价·Refresh SOP · 默认批量条数 · Daily Rates 最大天数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 00:17 theory。不规定 P88/P89。theory 可评估 Mass/Refresh deepen（加强 P66/P65）；不能显著改变则 skip。
- **全文：** `scout/2026-09-06-2217.md` · `research-log/2026-09-06-2217-scout.md`


### 2026-09-07 00:17 · T07-00 Mass Update/Refresh deepen theory-skip
- **结论：** Mass Update / Daily Rates Create·Replace / Refresh Rate / Update rates = **batch pricing-schedule or reservation-sync layer** ≠ 公开 BAR；邻 **P66+P65+P64+P01/P02/P05+P60** 已覆盖 Situation/Diagnosis/Action；§155 复核只加固 Watch → **theory-skip**（镜像 T06-16 / T06-08 / T06-00）。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住批量改价·Refresh SOP · 默认批量条数 · Daily Rates 最大天数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 02:17 case。不规定 P88/P89。case 可补 Mass Update / Refresh 误读专拍 Simulation（闸仍 P66/P65）。
- **全文：** `research-log/2026-09-07-0017-theory-skip-mass-update-refresh.md`


### 2026-09-07 02:17 · C07-02 Mass Update/Refresh misread Simulation
- **结论：** Mass Update / Daily Rates Replace / Refresh·Update rates ≠ 公开 BAR；Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。§156 CASE 指针复述 §155；curl 复核 200；无新 URL。T07-00 deepen **已 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住批量改价·Refresh SOP · 默认批量条数 · Daily Rates 最大天数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 04:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-mass-update-refresh-misread-sat.md` · `research-log/2026-09-07-0217-mass-update-refresh-case.md` · `sources/source-map.md` §156



### 2026-09-07 04:17 · R07-04 sources-recap（Mass Update/Refresh 互补）
- **结论：** 近三轮 S06-22 / T07-00 skip / C07-02 **无真矛盾**，无 needs_revision。§157 新开 Clock Sections Mass Update + HotelKey Bulk Update Rate + Stayntouch Rate Manager；Clock Multiple Booking Edit / RoomKey Update Rate Amounts 登记；Apaleo existing-not-update 用途升核；§155–§156 指针升核。systems **无变**。Diagnose 仍 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住批量改价·Refresh SOP · 默认批量条数 · Daily Rates 最大天数 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 06:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-07-0417-sources-recap.md` · `sources/source-map.md` §157


### 2026-09-07 06:17 · S07-06 scout-only（RTC / Day Types / Membership Auto Discount）
- **结论：** RTC / Day Types / Membership Auto Discount **四件套未齐**；邻 **P61/P49/P13/P34/P47/P06/P07/P01/P64/P66/P60/P23/P87**。§158 新开 OPERA Controls RTC + 5.6 RTC + DAY TYPES + Configuring Day Types + Property Calendar + Membership Auto Discounting；TX Discount Rules / Cloudbeds·Apaleo·Mews upsell 登记；HSMAI 404。Diagnose 近轮仍 **P66**（Mass 闭环后）；RTC/Day Type 误读 handoff **P61+P49+P06/P66**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 RTC·升房·Day Type·会员 TX 折扣 SOP · 默认 Multiplier · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 08:17 theory。不规定 P88/P89。theory 可评估 RTC/Day Type deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-07-0617.md` · `research-log/2026-09-07-0617-scout.md`


### 2026-09-07 08:17 · T07-08 RTC/Day Type deepen theory-skip
- **结论：** RTC / Day Types / Membership Auto Discount = **inventory-vs-charge / calendar temporary ± / TX posting credit** ≠ 公开 BAR；邻 **P61+P49+P06/P07/P01+P64+P66+P60+P23+P87** 已覆盖 Situation/Diagnosis/Action；§158 复核只加固 Watch → **theory-skip**（镜像 T07-00 / T06-16）。Diagnose 仍 **P61**（+ **P49** / **P06·P66**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住 RTC·升房·Day Type·会员 TX 折扣 SOP · 默认 Multiplier · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 10:17 case。不规定 P88/P89。case 可补 RTC / Day Type 误读专拍 Simulation（闸仍 P61/P49/P06/P66）。
- **全文：** `research-log/2026-09-07-0817-theory-skip-rtc-daytype.md`

### 2026-09-07 10:17 · C07-10 RTC/Day Type/Membership misread Simulation
- **结论：** RTC / Day Type / Membership Auto Discount ≠ 公开 BAR；Diagnose 走 **P61**（+ **P49** / **P06·P66**）；Hold 779–799 首选 799；拒 399；不发明 699；§159 CASE 指针复述 §158。T07-08 deepen **已 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住 RTC·升房·Day Type·会员 TX 折扣 SOP · 默认 Multiplier · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 12:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-rtc-daytype-misread-sat.md` · `research-log/2026-09-07-1017-rtc-daytype-case.md` · `sources/source-map.md` §159


### 2026-09-14 14:17 · S14-14 scout-only（House Count / Room Assignment / No Post·Advance·Interim）
- **结论：** House Count / Expected Arrivals·Departures·Stayover / Room Assignment / No Post·Credit Limit·Advance·Interim / Negotiated LTB / Traces **四件套未齐**；邻 **P45/P08/P09/P01/P02/P05/P37/P52–P54/P63/P67/P86/P87/P55/P71/P48/P26/P23**。§160 新开 OPERA House Status + HK Forecast + Res/HK Reports + HotelKey House Inventory + Cloudbeds Dashboard + Assign/Batch Room + Payment Instructions + Charges Adj + Credit Limit Overage + Traces；Locators/Authorizers/Occupancy Reports 登记；§64/§66 指针升核；HSMAI 404；错误 Traces URL soft FAIL。S03-06 Room Assignment soft FAIL **升核打开**。Diagnose 近轮仍 **P61**（+ **P49** / **P06·P66**）；House Count 误读 handoff **P45+P08/P09+P37**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住早报·分房·No Post SOP · 默认到店转化 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。theory 可评估 House Count deepen（加强 P45/P08/P37）；不能显著改变则 skip。
- **全文：** `scout/2026-09-14-1417.md` · `research-log/2026-09-14-1417-scout.md`

### 2026-09-14 16:17 · T14-16 House Count / Room Assignment / No Post deepen theory-skip
- **结论：** House Count = same-day operational tally / movement report ≠ Pace ≠ 公开 BAR；Room Assignment / Batch Pre-assign / Hold / DNM = rooming layer ≠ BAR；No Post / Advance Bill / Interim Folio / Credit Limit Overage = posting/settlement layer ≠ BAR。邻 **P45+P08/P09+P01/P02/P05+P37+P52–P54+P63/P67+P86/P87/P55+P71…** 已覆盖 Situation/Diagnosis/Action；§160 复核只加固 Watch → **theory-skip**（镜像 T07-08 RTC）。Diagnose 仍 **P45**（+ **P08/P09** / **P37**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住早报·分房·No Post SOP · 默认到店转化 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 18:17 case。不规定 P88/P89。case 可补 House Count / Assignment / No Post 误读专拍 Simulation（闸仍 P45/P08/P09/P37…）。
- **全文：** `research-log/2026-09-14-1617-theory-skip-house-count.md`

### 2026-09-14 18:17 · C14-18 House Count / Assignment / No Post misread Simulation
- **结论：** C14-18 sim drafted；House Count / Room Assignment / No Post·Advance·Interim ≠ 公开 BAR；Diagnose 走 **P45**（+ **P08/P09** / **P37**…）；Hold 779–799 首选 799；拒 399；不发明 699；§161 CASE 指针复述 §160。T14-16 deepen **仍 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住早报·分房·No Post SOP · 默认到店转化 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 20:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-house-count-assignment-nopost-misread-sat.md` · `research-log/2026-09-14-1817-house-count-case.md` · `sources/source-map.md` §161


### 2026-09-14 20:17 · R14-20 sources/recap（House Count 互补源）
- **结论：** 近三轮 S14-14 / T14-16 skip / C14-18 **无真矛盾**，无 needs_revision。§162 新开 Protel Active Desktop + Stayntouch Restrict Post + Apaleo Advance invoice；Clock Room Allocation 用途升核；Clock Booking Search / Protel Arrivals·Room allocation / Stayntouch Arrival Report·Check-In 登记；§160–§161 指针升核；Mews soft FAIL。Diagnose 仍 **P45**（+ **P08/P09** / **P37**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住早报·分房·No Post SOP · 默认到店转化 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 22:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-14-2017-sources-recap.md` · `sources/source-map.md` §162


### 2026-09-14 22:17 · S14-22 scout-only（Room Condition / Night Audit·EOD / Market·Source）
- **结论：** Room Condition Dirty·Clean·Inspected·Pickup / Night Audit·EOD·Business Date·Cashier Closure / Market·Source·Channel Code / Package Elements / Yieldability **四件套未齐**；邻 **P63/P67/P37 / P54/P45/P08 / P25/P20/P60/P36 / P69/P27 / P85/T-Hurdle/T-Corp**。§163 新开 OPERA Room Management + Controls Room Mgmt + Cloudbeds HK conditions + Cashier Closure + Managing EOD + Cloudbeds/HotelKey/Stayntouch Night Audit·EOD + Marketing Management + Configuring Channels + Cloudbeds Market Segments/Sources；HK Board/Clock HK/§31 EOD/Package/Yieldable 指针；HotelKey Close BD/Apaleo NA 登记；HSMAI 404。Diagnose 近轮仍 **P45**（+ **P08/P09** / **P37**）；Room Condition 误读 handoff **P63+P67+P37**；Night Audit handoff **P54+P45+P08**；Market/Source handoff **P25+P20+P60**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住房态·夜审·市场码 SOP · 默认夜审时刻 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 2026-09-15 00:17 theory。不规定 P88/P89。theory 可评估 Room Condition / Night Audit deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-14-2217.md` · `research-log/2026-09-14-2217-scout.md`


### 2026-09-15 00:17 · T15-00 Room Condition / Night Audit·EOD / Market·Source deepen theory-skip
- **结论：** Room Condition = HK cleaning-status layer ≠ Pace ≠ 公开 BAR；Night Audit/EOD/Cashier Closure = business-date / posting / shift-closure ≠ 需求证明 ≠ BAR rewrite；Market/Source/Channel codes = segmentation / origin labeling ≠ 公开灵活价。邻 **P63/P67/P37 + P54/P45/P08 + P25/P20/P60/P36** 已覆盖 Situation/Diagnosis/Action；§163 复核只加固 Watch → **theory-skip**（镜像 T14-16 House Count）。Diagnose 仍 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住房态·夜审·市场码 SOP · 默认夜审时刻 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 02:17 case。不规定 P88/P89。case 可补 Room Condition / Night Audit / Market-Source 误读专拍 Simulation（闸仍 P63/P54/P45…）。
- **全文：** `research-log/2026-09-15-0017-theory-skip-room-condition-night-audit.md`


### 2026-09-15 02:17 · C15-02 Room Condition / Night Audit·EOD·Cashier / Market·Source misread Simulation
- **结论：** C15-02 sim drafted；Room Condition / Night Audit·EOD·Cashier / Market·Source ≠ 公开 BAR；Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699；§164 CASE 指针复述 §163。T15-00 deepen **仍 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住房态·夜审·市场码 SOP · 默认夜审时刻 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 04:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-room-condition-night-audit-market-misread-sat.md` · `research-log/2026-09-15-0217-room-condition-night-audit-case.md` · `sources/source-map.md` §164


### 2026-09-15 04:17 · R15-04 sources/recap（Room Condition / Night Audit / Market-Source 互补源）
- **结论：** 近三轮 S14-22 / T15-00 skip / C15-02 **无真矛盾**，无 needs_revision。§165 新开 Clock Revenue Date Mode + Clock Marketing Sources/Channels/Segments + Stayntouch Housekeeping Reports；Apaleo Market Segments / Protel EOD / Protel Market code / Stayntouch Market Segment Stats 登记；§151 HK + §163–§164 指针升核；Mews soft FAIL 指针。Diagnose 仍 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住房态·夜审·市场码 SOP · 默认夜审时刻 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 06:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-15-0417-sources-recap.md` · `sources/source-map.md` §165


### 2026-09-15 06:17 · S15-06 scout-only（Guest History·past ADR / Rooming List / Post It·Passerby）
- **结论：** Guest History / Profile Stay Statistics / past ADR · Rooming Lists / Block name lists · Passerby / Post It / Fast Post · HK Task Sheets / Attendant Credits · Deposit/Cancel Schedules（指针）**四件套未齐**；邻 **P08/P45/P01 / P52/P53/P10 / P69/P87 / P63/P67 / P86/P84/P55**。§166 新开 OPERA Stay Statistics + Future/Past Stays + Profile Production ADR + About/Creating Rooming List + Post It + Task Sheets；Cloudbeds Stays + Manage Rooming Lists；Clock Guest Profiles + Import Rooming Lists；Cloudbeds hub/ADR Report / Controls Cashiering / Generating Task Sheets 登记；Deposit/Cancel §97 指针；HSMAI glossary FAIL；`/glossary/adr/` 不当 A。Diagnose 近轮仍 **P63**（+P67/P37）/ **P54**（+P45/P08）/ **P25**（+P20/P60）for 已闭环房态簇；本轮新方向 handoff **P08/P45/P01** · **P52/P53/P10** · **P69/P87**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住住史·名单·过账 SOP · 默认历史 ADR 窗口 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 08:17 theory。不规定 P88/P89。theory 可评估 Guest History/past ADR 或 Rooming List deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-15-0617.md` · `research-log/2026-09-15-0617-scout.md` · `sources/source-map.md` §166


### 2026-09-15 08:17 · T15-08 Guest History·past ADR / Rooming List / Post It deepen theory-skip
- **结论：** Guest History / past ADR = profile history / stay-stat layer ≠ Pace ≠ 公开 BAR；Rooming List = block name-list pickup ops ≠ Pace ≠ 公开尺；Post It·Passerby = ancillary posting ≠ 房晚 BAR。邻 **P08/P45/P01 + P52/P53/P10 + P69/P87** 已覆盖 Situation/Diagnosis/Action；§166 复核只加固 Watch → **theory-skip**（镜像 T15-00 / T14-16）。Diagnose 仍 **P08/P45/P01**（+ **P52**/P53/P10 · **P69**/P87）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住住史·名单·过账 SOP · 默认历史 ADR 窗口 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 10:17 case。不规定 P88/P89。case 可补 Guest History / Rooming List / Post It 误读专拍 Simulation（闸仍 P08/P45/P01 · P52…）。
- **全文：** `research-log/2026-09-15-0817-theory-skip-guest-history-rooming-list.md`


### 2026-09-15 10:17 · C15-10 Guest History·past ADR / Rooming List / Post It·Passerby misread Simulation
- **结论：** C15-10 sim drafted；Guest History·past ADR / Rooming List / Post It·Passerby ≠ 公开 BAR；Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§167 CASE 指针复述 §166。T15-08 deepen **仍 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住住史·名单·过账 SOP · 默认历史 ADR 窗口 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 12:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md` · `research-log/2026-09-15-1017-guest-history-rooming-list-case.md` · `sources/source-map.md` §167


### 2026-09-15 12:17 · R15-12 sources/recap（Guest History / Rooming List / Post It 互补源）
- **结论：** 近三轮 S15-06 / T15-08 skip / C15-10 **无真矛盾**，无 needs_revision。§168 新开 Stayntouch Guests（档案 ADR stats）+ Stayntouch Groups（Rooming List / POST CHARGE）+ Protel Passerby invoice；Protel Guest profile / Protel Rooming list / Stayntouch Guest Bill / Clock Charges / Clock Folio / Apaleo Group Bookings / Apaleo Folios Training 登记；§166–§167 指针升核；HSMAI FAIL 指针。Diagnose 仍 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住住史·名单·过账 SOP · 默认历史 ADR 窗口 · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 14:17 scout。不规定 P88/P89。
- **全文：** `research-log/2026-09-15-1217-sources-recap.md` · `sources/source-map.md` §168


### 2026-09-15 14:17 · S15-14 scout-only（Room Move / Discount Reasons / Post Stay·Open Folio）
- **结论：** Room Move / Scheduled Room Moves / Room Move Reasons · Manual Discount / Discount Reasons · Late Charges / Post Stay·Open Folio · Commission（指针）· Connecting（登记）**四件套未齐**；邻 **P61/P49/P45 / P87/P42 / P69/P87 / P81/P20 / T-Component/P13**。§169 新开 OPERA Moving In House + Scheduled Room Moves + Room Move Reasons + Rate Codes Discount + Stay Details Discount + Open Folio；Cloudbeds FAQ Override 保价；Clock Booking Room Change；Stayntouch RN Room Move；Discount Reasons §59 / Payment Instructions §160 / Commission §108 指针；Cloudbeds Edit 升核；Connecting/Swap/Calendar/Post Charges 登记；HSMAI FAIL。Diagnose handoff **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住换房·折扣原因·晚账 SOP · 默认折扣% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。theory 可评估 Room Move / Discount Reasons deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-15-1417.md` · `research-log/2026-09-15-1417-scout.md` · `sources/source-map.md` §169


### 2026-09-15 16:17 · T15-16 Room Move / Discount Reasons / Post Stay·Open Folio deepen theory-skip
- **结论：** Room Move = front-desk room-change / RTC ops layer ≠ Pace ≠ 公开 BAR；Discount Reasons = reservation discount-reason layer ≠ BAR Type；Post Stay·Open Folio = post-departure posting ≠ 房晚公开尺。邻 **P61/P49/P45 + P87/P42 + P69/P87** 已覆盖 Situation/Diagnosis/Action；§169 复核只加固 Watch → **theory-skip**（镜像 T15-08 / T15-00 / T14-16）。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住换房·折扣原因·晚账 SOP · 默认折扣% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 18:17 case。不规定 P88/P89。case 可补 Room Move / Discount Reasons / Open Folio 误读专拍 Simulation（闸仍 P61/P49/P45 · P87/P42 · P69/P87）。
- **全文：** `research-log/2026-09-15-1617-theory-skip-room-move-discount.md`


### 2026-09-15 18:17 · C15-18 Room Move / Discount Reasons / Post Stay·Open Folio misread Simulation
- **结论：** C15-18 sim drafted；Room Move / Discount Reasons / Post Stay·Open Folio ≠ 公开 BAR；Diagnose 走 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§170 CASE 指针复述 §169。T15-16 deepen **仍 skip** — 本卷补 callable 专拍，不推翻 skip。**不开 P88/P89。** Notify **YES**。
- **仍 NV：** 华住换房·折扣原因·晚账 SOP · 默认折扣% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 20:17 sources/recap。不规定 P88/P89。
- **全文：** `cases/sim-2026-room-move-discount-openfolio-misread-sat.md` · `research-log/2026-09-15-1817-room-move-discount-case.md` · `sources/source-map.md` §170

### 2026-09-15 20:17 · R15-20 sources/recap（Room Move / Discount Reasons / Post Stay·Open Folio 互补源）
- **结论：** 近三轮 S15-14 / T15-16 skip / C15-18 **无真矛盾**，无 needs_revision。§171 新开 Protel How to move a reservation + Apaleo SOP Template Amend reservations + Stayntouch Check Out With Open Balance；Apaleo modify stay details 用途升核（§154）；Protel Move/Extend/Rooms/RBD · Apaleo Training Kit/Allowance · Stayntouch Pay By Link · Cloudbeds Adjust/Balances/Folio · Clock Close folio 登记；§169–§170 指针升核；HSMAI FAIL 指针。Diagnose 仍 **P61**（+ **P49**/P45）/ **P87**（+ **P42**）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **全文：** `research-log/2026-09-15-2017-sources-recap.md` · `sources/source-map.md` §171


### 2026-09-15 22:17 · S15-22 scout-only（Fixed Charges / Membership Enrollment·eCert / Alerts·Messages）
- **结论：** Fixed Charges·Add-Ons·Services / Membership Enrollment·eCert / Alerts·Messages **四件套均未齐**；邻 **P82/P78/P69/P79/T-Fee / P49/P80 / P45/P87**。§172 新开 OPERA Managing Fixed Charges + Cloudbeds Add-Ons + Apaleo Services + Enrolling + Memberships + eCertificate + Alert Messages + Global Alert Rules + Managing Guest Messages；§86 指针；多页登记；HSMAI FAIL；Managing Alerts soft FAIL。Diagnose 近轮仍 **P61**（+P49/P45）/ **P87**（+P42）/ **P69**（+P87）for 已闭环换房簇；本轮新方向 handoff **P82/P78/P69/P79** · **P49/P80** · **P45/P87**。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住固定费·入会·兑券·Alert SOP · 默认固定费% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 00:17 theory。不规定 P88/P89。theory 可评估 Fixed Charges 或 Membership Enrollment/eCert deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-15-2217.md` · `research-log/2026-09-15-2217-scout.md` · `sources/source-map.md` §172


### 2026-09-16 00:17 · T16-00 Fixed Charges / Membership Enrollment·eCert / Alerts·Messages deepen theory-skip
- **结论：** Fixed Charges = recurring/auto-post & ancillary sell layer ≠ Pace ≠ 公开 BAR；Membership Enrollment/eCert = loyalty attach/redeem ≠ BAR Type；Alerts·Messages = ops messaging ≠ dump 令。邻 **P82/P78/P69/P79/T-Fee + P49/P80 + P45/P87** 已覆盖 Situation/Diagnosis/Action；§172 复核只加固 Watch → **theory-skip**（镜像 T15-16 / T15-08 / T15-00 / T14-16）。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住固定费·入会·兑券·Alert SOP · 默认固定费% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 02:17 case。不规定 P88/P89。case 可补 Fixed Charges / Membership / Alerts 误读专拍 Simulation（闸仍 P82/P78/P69/P79 · P49/P80 · P45/P87）。
- **全文：** `research-log/2026-09-16-0017-theory-skip-fixed-charges-membership.md`

### 2026-09-16 02:17 · C16-02 Fixed Charges / Membership / Alerts misread Simulation
- **drafted** `cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md`（callable 专拍；闸仍 P82/P78/P69/P79 · P49/P80 · P45/P87）
- T16-00 deepen **仍 skip**（不推翻）
- §173 CASE 指针复述 §172；无新 URL
- 不开 P88/P89；Hold 779–799 首选 799；拒 399；不发明 699
- 下一槽 04:17 = sources/recap（可补互补 Vendor；≠ 开新剧）

### 2026-09-16 04:17 · R16-04 sources/recap（Fixed Charges / Membership / Alerts 互补源）
- **结论：** 近三轮 S15-22 / T16-00 skip / C16-02 **无真矛盾**，无 needs_revision。§174 新开 Protel Fixed charges + Stayntouch Hotel Loyalty Programs + Stayntouch Configure Add-Ons Staff Alert；Clock Charge Templates / Stayntouch Create Add-Ons / Set Up Loyalty / Protel Edit invoices·Advanced Packages / Clock Packages 登记；§172–§173 指针升核；HSMAI FAIL 指针。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **全文：** `research-log/2026-09-16-0417-sources-recap.md` · `sources/source-map.md` §174


### 2026-09-16 06:17 · S16-06 scout-only（Linked/Party · Copy Reservation · Rate Seasons · Preferences/VIP）
- **结论：** Linked/Party / Copy / Rate Seasons / Preferences·VIP **四件套均未齐**；邻 **P01/P45/P10 / P65/P66/P33 / P64/T-Floor/P02 / P49/P45**。§175 新开 OPERA Linked + Linked Profiles + Copying Reservations + Stayntouch Copy + Stayntouch Party + Rate Seasons + Preferences + VIP Levels；Rate Codes Season / Configuring Preferences 登记；Property Calendar Day Type 指针；HSMAI FAIL；Cloudbeds/Clock/Protel 猜链 FAIL。Diagnose handoff **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住连单·复制·季节·VIP SOP · 默认淡季折扣% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 08:17 theory。不规定 P88/P89。theory 可评估 Linked/Party 或 Copy deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-16-0617.md` · `research-log/2026-09-16-0617-scout.md` · `sources/source-map.md` §175

### 2026-09-16 08:17 · T16-08 Linked/Party · Copy deepen theory-skip
- **结论：** Linked/Party / Copy Reservation deepen **evaluated → skip**；无新轴；邻 **P01/P45/P10 · P65/P66/P33** 已覆盖 Situation/Diagnosis/Action；§175 curl 复核 200 size 一致；无新 §。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住连单·复制·季节·VIP SOP · 默认淡季折扣% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 10:17 case。不规定 P88/P89。case 可补 Linked/Party / Copy 误读专拍 Simulation（闸仍邻剧），≠ 开新剧、≠ 推翻 skip。
- **全文：** `research-log/2026-09-16-0817-theory-skip-linked-copy.md`


### 2026-09-16 10:17 · C16-10 Linked/Party · Copy · Season · VIP misread Simulation
- **drafted** `cases/sim-2026-linked-party-copy-misread-sat.md`（callable 专拍；闸仍 P01/P45/P10 · P65/P66/P33 · P64/T-Floor/P02 · P49/P45）
- T16-08 deepen **仍 skip**（不推翻）
- §176 CASE 指针复述 §175；无新 URL
- 不开 P88/P89；Hold 779–799 首选 799；拒 399；不发明 699
- 下一槽 12:17 = sources/recap（可补互补 Vendor；≠ 开新剧）

### 2026-09-16 12:17 · R16-12 sources/recap（Linked/Party · Copy · Season · VIP 互补源）
- **结论：** 近三轮 S16-06 / T16-08 skip / C16-10 **无真矛盾**，无 needs_revision。§177 新开 Protel Copy reservation + Apaleo Training Kit Reservation Management + Cloudbeds Guest Statuses；Protel Group/Creating/Rooming list/Copy allotments/Rate seasons/VIP + Apaleo Modify/Fair Rates + Cloudbeds Tags/Edit/Base intervals + Clock Guest Offsets/Standard rates/Copy from边界 + Stayntouch Guests/Likes/Room Features/Rate Configuration 登记；§175 八核指针升核（均 200 size 匹配）。Diagnose 仍 **P01**（+ **P45**/P10）/ **P65**（+ **P66**/P33）/ **P64**（+ **T-Floor**/P02）/ **P49**（+ **P45**）；Hold 779–799 首选 799；拒 399；不发明 699。systems **无变**。**不开 P88/P89。** Notify **YES**。
- **全文：** `research-log/2026-09-16-1217-sources-recap.md` · `sources/source-map.md` §177


### 2026-09-16 14:17 · S16-14 scout-only（Confirmation · Profile Merge · Advance CI/Quick CO · Changes Log）
- **结论：** Confirmation/Stationery / Profile Merge / Advance CI·Quick CO / Changes Log·Activity **四件套均未齐**；邻 **P65/P86/P01/P45 / P08/P45/P01 / P45/P01/P46/P54/P67 / P45/P01**。§178 新开 OPERA Confirmations + Stationery Report Groups + Stayntouch Send Confirmation + Merging Profiles + Stayntouch Merge Guest Cards + Advance Checking In + Quick Check-Out + Cloudbeds CI/CO + Changes Log + Cloudbeds Activity；同族登记；§177 Guest Statuses 指针；HSMAI FAIL；Clock/Protel 猜链 FAIL；Auto Merge soft FAIL。Diagnose handoff **P65**（+ **P86**/P01）/ **P08**（+ **P45**/P01）/ **P45**（+ **P01**/P46/P54/P67；P55 担保不同族）/ **P45**（+ **P01**）。Hold 779–799 首选 799；拒 399；不发明 699。**不开 P88/P89。** Notify **NO**。
- **仍 NV：** 华住确认函·并档·预办入住·快退房 SOP · 默认确认价锁定% · 699 Fact。
- **仍停车：** Pet/AAA。Smoking/damage FEE = MEDIUM/LOW。
- **下一槽：** 16:17 theory。不规定 P88/P89。theory 可评估 Confirmation 或 Profile Merge deepen；不能显著改变则 skip。
- **全文：** `scout/2026-09-16-1417.md` · `research-log/2026-09-16-1417-scout.md` · `sources/source-map.md` §178


### 2026-09-16 16:17 · T16-16 Confirmation / Profile Merge deepen theory-skip
- **结论：** Confirmation/Stationery、Profile Merge、Advance CI/Quick CO、Changes Log/Activity 仍是 guest-comms / profile-dedup / front-desk-status / audit-trail layers，均 ≠ Pace ≠ 公开 BAR；邻 P65/P86/P01 · P08/P45/P01 · P45/P01/P46/P54/P67 · P45/P01 已覆盖，故 skip；Notify **NO**。
- Diagnose 仍 P65（+P86/P01）/ P08（+P45/P01）/ P45（+P01/P46/P54/P67）/ P45（+P01）；Hold 779–799 首选 799；拒 399；不发明 699；仍 P01–P87。Pet/AAA parked；Smoking/damage FEE MEDIUM/LOW。下一槽 **18:17 case**；不开 P88/P89。
- 全文：`research-log/2026-09-16-1617-theory-skip-confirmation-merge.md`；§178 复核 only；无新 source-map §。
