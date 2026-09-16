# BEONx

> 文件：`systems/beonx.md`  
> 检索日：2026-08-22 20:17 CST  
> 类型：Vendor Methodology（除非标注已验证事实）  
> 对照：`ideas.md` · `duetto.md` · `amadeus.md`  
> 禁止：把 BEONx 写成 IDeaS G3；把 Duetto TBB / Open Pricing 公式对抄进本页；把客户引言涨幅当本店期望。

## 已验证事实

| 项 | 内容 | 源 |
| --- | --- | --- |
| 官网 | https://beonx.com/ | **打开**（2026-08-22 20:17） |
| 品牌 / 产品 | **BEONx RMS**。页上同时出现 Hotel Quality Index（HQI / HQi）、SmartRange、Autopilot、Groups 模块、BEONx Academy | 首页 FAQ + 产品页 |
| 沿革 | 2012 西班牙 Salamanca 创立。创始人 Rubén Sánchez（CEO）、Emilio Galán（CTO）。About：背景 astrophysics + computer engineering | https://beonx.com/about/ **打开** |
| 定位 | 厂商：酒店收益优化 RMS，走向 **Total Profit Platform (TTP)** / Sustainable Profitability。面向中大型独立店、城市连锁、度假村 | 首页 + About |
| 差异点名 | **HQI** = 设施客观质量 + 在线声誉，按客群（couples / solo / friends / families / business）加权。厂商称定价考虑 HQI，可手改自动下载值 | 首页 FAQ + https://beonx.com/hotel-quality-index/ **打开** |
| SmartRange | AI 动态定价模型；降低对传统 comp set 依赖；异常波动检测 + 价格区间。新闻稿 **2025-04-09** | https://beonx.com/press-events/smartrange-ai-powered-hotel-pricing-strategy-redefined/ **打开** |
| Autopilot | 厂商：自动改价 + 库存控制；与 HQI 同用。博文 **2024-11-05**。内部「约高于市场 3%」= **D 营销** | https://beonx.com/knowledge/articles/maximize-your-growth-with-beonx-autopilot/ **打开** |
| Amadeus 对接 | 2023-09-08 伙伴文：BEONx RMS ↔ Demand360；文写 beyond iHotelier。证明优化器在 **BEONx**，不是 Amadeus 自有 G3 | 已在 12:17 source-map |
| 规模 / 案例名 | 页点名 Catalonia / Barceló / Iberostar / RIU 等。RevPAR +6–15%（HQI 页）= **D 营销** | 产品页 / HQI 页 |
| 独立算法白皮书（公式级） | — | **未找到逐步估法**。公开层 = FAQ + 产品文，不是 G3 科学白皮书 |

上午 landscape 已摘 FAQ 级能力。本页把打开页写成可调用厂商卡。**不是** IDeaS G3 的欧洲版。

## 决策链（厂商自述 → 标 Vendor Methodology）

禁止把 Duetto Resource Hub 的 TBB / CTA 先扣抄成本页公式。下列只来自 BEONx 官网 FAQ / About / HQI / SmartRange / Autopilot / Groups 文。

### Input

FAQ：PMS 业绩、竞对价、HQI；预报与建议最多 **1 日 5 次**更新。算法考虑：HQI（市场质量定位）、当前竞对价、历史竞对策略、目的地事件。厂商写「近期还将」加入 destination demand index、competitor benchmarks、hotel demand（regrets and denials）→ **未实现项不当 2026 已上线规格**。  
**Unknown：** 默认数据商、中国 OTA 覆盖、HQI 权重公式。

### Forecast

首页模块名 Demand and Forecasting。FAQ：**可以没有 comp set**，只用本店数据出预报与建议。SmartRange：comp set 缺失/不稳时仍给情境化区间。  
**Unknown：** 模型族、unconstrained 估法、与 Constrained 的逐步公式。**不要**用 Duetto TBB 填这个空，也不要把 IDeaS 101 定义抄成 BEONx 公式。

### Optimization

FAQ 公开回答（厂商）：

- **Open pricing** 按 **rate code（房型 + 房价计划）+ 细分** 给价与限制
- 限制 = **stop sell + MLOS**（FAQ 只点这两项；CTA/CTD 出现在知识文，不当本页已核规格）
- Groups：置换分析、各房型建议价、替代日期、其他收入
- Hyper Segmentation：渠道 × 市场双重细分，多套定价模型并行（首页营销句）

SmartRange：少跟自杀竞对、给区间而非每跳必跟。与本库 P16 方向可对照，**不是**本库幅度来源。  
**Unknown：** 目标函数（RevPAR vs 利润）、是否网络优化多晚、HQI 如何进目标。

### Recommendation

价格 + 限制建议；可自动发布到分销（Sustainable Profitability 页：automates the publication of price recommendation）。Groups 给最优价 + min/max 谈判带。  
**Unknown：** 建议是房价点还是区间的默认形态；中文 UI。

### Human Override

HQI 自动值可手改（加服务、改竞对评价）。Autopilot 存在 ⇒ 可自动执行；厂商仍卖「策略与战术同屏」。HQI 页强调客群 WTP / 公平感，不是无人。  
**Unknown：** override 是否写回学习、权限模型、Autopilot 默认开还是关。

### Execution

厂商：与主流 PMS / Channel Manager / Booking Tool / BI 集成；自动把建议发到渠道。Amadeus 路径：Demand360 数据进 BEONx，不是 iHotelier 自己优化。  
**Unknown：** 中国常见 PMS（西软、石基、绿云）是否在集成表——本轮未打开集成列表。

### Measurement

FAQ：10+ 报告，含分销成本、公司策略、集群。HQI 页：质量 vs 售价的市场定位。客户引言 ADR/RevPAR 升 = **D**。  
**Unknown：** 与 STR 指数如何对齐。

## 顾问含义

- 用户说「我们用 BEONx / Amadeus 收益」：先问是 **BEONx RMS**、**iHotelier CRS** 还是 **RS360**。不要默认有一个 Amadeus G3。
- 问：**自动发布还是只建议**、HQI 有没有手改、有没有开 Autopilot、Groups 询价是否过 RMS、有没有 comp set。
- SmartRange 公开主张是少跟狂躁竞对。顾问仍走本库 P16，不把「区间」当本店地板。
- 不要用页上 6–15% RevPAR / Autopilot「高于市场 3%」当这家店的期望。
- **不是 G3。** 优化器在 BEONx 自己的引擎；IDeaS 科学文（dynamic programming）不要对抄过来。

## 缺口

HQI 计算方法（L2）；公式白皮书；中国集成列表；regrets/denials 是否已进模型（FAQ 写 near future）；与 IDeaS/Duetto 的接口字段。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 20:17 CST | 首版。官网 / About / HQI / SmartRange / Autopilot / Groups 打开。FAQ 级决策链。不是 G3。禁止 Duetto TBB 对抄。 |
