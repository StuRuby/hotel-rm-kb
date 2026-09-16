# Amadeus Hospitality · Revenue / CRS / BI

> 文件：`systems/amadeus.md`  
> 检索日：2026-08-20；复核 2026-08-22 20:17 CST  
> 先澄清产品边界。本轮 **未找到** 与 IDeaS G3 / Duetto GameChanger 对标的独立「Amadeus Hotel RMS」官方产品页。

## 已验证事实：产品是什么、不是什么

| 产品 | 官方页 | 是什么 | 不是什么 |
| --- | --- | --- | --- |
| **Amadeus Central Reservations System (ACRS)** | https://www.amadeus-hospitality.com/amadeus-central-reservation-system/ （打开） | 云原生、API-first **CRS**。ARI / 内容 / 政策的单一事实源。面向全球品牌与大连锁。页上引用 MGM、以及 Marriott Drew Pinto 关于分销的话。 | 不是定价优化引擎的公开规格书 |
| **CRS Connected Revenue Management** | https://www.amadeus-hospitality.com/insight/introducing-a-crs-for-the-modern-hotel-enterprise-2/ （打开） | ACRS 可作 RMS 的 **单一代理端点**，避免 RMS 直连每家 PMS。文中点名合作 RMS：**Duetto or Ideas** | 没有公开自己的 forecast/optimize 公式 |
| **RevenueStrategy360** | https://www.amadeus-hospitality.com/solutions/business-intelligence/revenuestrategy360/ （打开） | **数据服务**：前向 OTB occupancy、sanctioned rate shop（页写 95% sanctioned）、未来 30/90 日 ADR/RevPAR rank、渠道价差 | 页上是 insight / pricing confidence，**未写自动写回 PMS 的优化器** |
| **Demand360** | https://www.amadeus-hospitality.com/solutions/business-intelligence/demand360/ | 市场需求 BI；有免费 property snapshot 线索 | 不是 RMS |
| **iHotelier CRS** | https://www.amadeus-hospitality.com/solutions/reservations-and-guest-management/ihotelier-crs/ （**04:17 打开**） | 中小/单体向 **CRS** + ARI + 促销规则 + BI 仪表。营销「all-in-one revenue management」= 分发/房价执行 | **不是** G3 级优化器。条款写明可接外部 RMS |
| **Amadeus Hotel Platform – Revenue Management** | 第三方 Hotel-online 转述 | 检索到「可 stand-alone / 可进 Hotel Platform」的旧描述 | **官方现网产品页仍未找到，Need Verification**。12:17 solutions 总页复核 + IDeaS 2021 / BEONx 2023 伙伴文：优化在对接 RMS。不重开 iHotelier 当优化器 |

启动伙伴：CRS 文章写 **InterContinental Hotels Group** 为 launch partner。这是分销/CRS 史实线索，不是 IHG 自研 RMS 说明书。

## 决策链

| 环节 | 公开可知 | Unknown |
| --- | --- | --- |
| Input | ACRS：全组合 ARI。RS360：每日刷新的前向 OTB + 房价（页写 44k hotel data providers、10b+ rates/month — 厂商数字） | 中国市场覆盖率 |
| Forecast | RS360 insight：历史季节性 + pacing + 前向 OTB，日报重跑 | 酒店自己的 unconstrained 客房预测是否在 Amadeus RMS 里——**无产品页** |
| Optimization | **无公开优化器**。优化若存在，更可能发生在对接的 IDeaS/Duetto | 自有 RMS 是否仍出售 |
| Recommendation | RS360：市场 occupancy vs comp、价、parity 损失估计 | 是否生成建议房价 |
| Human Override | ACRS：集团治理 + 品牌/市场/物业可配置规则 | 与 One Yield 的职责切分（Marriott 场景） |
| Execution | ACRS 分发 ARI 到渠道；可代理 RMS | 写回路径的标准架构图未打开 |
| Measurement | Demand360 / Agency360 / Market Insights Hub 报告类型（月度/周度/物业快照） | 与 STR 指数如何对齐 |

## 顾问含义

- 用户说「我们用 Amadeus 收益」：追问 **ACRS** / **iHotelier CRS** / **RS360** / **外面的 IDeaS·Duetto·BEONx**。BEONx 详页：`beonx.md`（**不是 G3**）。不要默认有一个「Amadeus G3」。iHotelier 官方页是 CRS，不是优化器。  
- RS360 适合回答「市场 OTB / 竞对价」，不适合单独回答「今晚 BAR 应是 899 还是 929」。后者仍要酒店自己的 forecast + 剩余库存。  
- Marriott 迁移：Amadeus 页 + 招聘检索同时出现 ACRS。与 One Yield Evolution 是**并列系统**，不是同一个产品。
- 用户说「我们用 Amadeus 嵌套限额 / booking limit」：追问 Hotel Administration Portal **allotment**（nested / dedicated / maximum-limited），不是 G3。2026-08-27 20:17 打开 Allotment Controls：nested global BL 保护父库存不被低价早填满。这是 **CRS/Admin 库存切块**，不是独立 Hotel RMS。字段是厂商的，不是华住 SOP。详见 `sources/source-map.md` §51。

## 缺口

独立 Hotel RMS 产品是否还在卖；Hotel Platform RM 旧页是否下线；与 IDeaS/Duetto 的标准接口字段。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。RS360 ≠ 优化器。独立 Hotel RMS 产品页 0。 |
| 2026-08-21 20:17 CST | 首页复核：仍无对标 G3/GameChanger 的独立 RMS 产品链。RS360 页仍 200。 |
| 2026-08-22 04:17 CST | iHotelier CRS 产品页打开（ARI/促销，非优化器）。solutions 总页无独立 RMS。独立优化器仍 NV。 |
| 2026-08-22 12:17 CST | 打开 IDeaS 2021 伙伴文（G3↔SEM/Demand360）+ BEONx 2023 伙伴文（beyond iHotelier）。solutions 总页仍无独立 RMS。独立优化器仍 NV。 |
| 2026-08-22 20:17 CST | `beonx.md` 落地。独立优化器仍 NV。不重开 iHotelier 当优化器。 |
| 2026-08-27 20:17 CST | Hotel Admin Portal *What Are the Allotment Controls?* WebFetch **打开**（18:17 timeout 升级）。Nested BL 保护父库存；子 BL 须低于父。同组 *Allotment-to-Rate Plan Mapping* 打开。**CRS/Admin 库存切块，不是独立 Hotel RMS。** H9 独立优化器仍 NV。不抄 UI 当中国 SOP。见 `sources/source-map.md` §51。 |
