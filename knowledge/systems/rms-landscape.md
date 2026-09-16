# RMS Landscape

> 文件：`systems/rms-landscape.md`  
> 检索日：2026-08-20；复核 2026-08-22 20:17 CST  
> 重点不是 UI。区分 **Vendor Methodology** vs **已验证事实**。  
> 2019 以前材料不当 2026 产品规格。客户引言里的涨幅默认营销（D），除非独立审计。  
> 详页：`ideas.md` · `duetto.md` · `beonx.md` · `atomize.md` · `amadeus.md` · `marriott-one-yield.md`  
> 技术栈：`../hotel-tech-stack/tech-map.md`

通用决策链（顾问用来提问，不是某家已公开的源码）：

```text
Input → Forecast → Optimization → Recommendation → Human Override → Execution → Measurement
```

---

## 1. 一览

| 厂商 / 系统 | 母公司（已核） | 公开产品名（2026-08-20） | 角色 | 公开方法论 | 详页 |
| --- | --- | --- | --- | --- | --- |
| IDeaS | SAS（About 2026-08-20 20:00 **打开**：Integrated Decisions and Systems, Inc.） | IDeaS RMS / 客户引言仍称 **G3 RMS** | 优化型 RMS | Buyer’s Guide + About + 101（无公式）；**公式白皮书仍 NV** | `ideas.md` |
| Duetto | Duetto（独立厂商页，未核收购） | **GameChanger**；套件 **RP-OS**（ScoreBoard / BlockBuster / Advance / HotStats / GameTime） | 优化型 RMS | Open Pricing 术语页 | `duetto.md` |
| Atomize → Mews RMS | Atomize 现为 Mews 公司；atomize.com 打开即 Mews 文案；**2024-11 收购**（2026-06-02 博文打开） | **Mews RMS, powered by Atomize**；FAQ：与 Atomize RMS 是不同产品 | 优化型 RMS（PMS 原生） | FAQ 级，无白皮书 | `atomize.md` |
| BEONx | 2012 西班牙 Salamanca 创立（About **打开** 20:17） | BEONx RMS；HQI；SmartRange；Autopilot | 优化型 RMS | FAQ + HQI + SmartRange；**不是 G3** | `beonx.md` |
| Amadeus Hospitality | Amadeus | **仍没有**对标 G3 的独立「Hotel RMS」产品页（12:17 solutions + IDeaS/BEONx 伙伴文复核）。有 **RevenueStrategy360**（需求+房价 BI）、**Demand360**、**ACRS**、**iHotelier CRS**（04:17 打开：ARI/促销，不是优化器） | CRS + BI；RM **连接层** | CRS Connected RM；iHotelier 产品页；IDeaS 2021 / BEONx 2023 伙伴文 | `amadeus.md` |
| Marriott One Yield / One Yield Evolution | Marriott International | **无官方公开产品页**。2025 10-K **打开**：只写 proprietary RMS，无 OYE 名。RMAS 打开名称 One Yield。招聘 URL 仍 404 | 集团自研 RMS | 无算法页 | `marriott-one-yield.md` |
| Hilton / IHG / Hyatt / Accor 自研 | 各集团 | 无打开到的公开 RMS 产品页 | Unknown | 无 | backlog |
| 华住 / 锦江 / 首旅 | 各集团 | 华住 2025 年报：**中央收入管理系统** RMS（无公式）。锦江 2025 年报：仅 WeHotel，无 RMS 字样。**首旅 2025 年报打开**：CRS（中央预订系统）+ 调价模型 + AI 数字店长；无独立「RMS」产品名、无公式 | 集团自研 / 年报名 | 年报系统名，非白皮书 | backlog + source-map |

---

## 2. 决策链对照（未知写 Unknown）

| 环节 | IDeaS（厂商自述） | Duetto（厂商自述） | Atomize/Mews（厂商自述） | BEONx（厂商自述） | Amadeus | Marriott OYE |
| --- | --- | --- | --- | --- | --- | --- |
| Input | 历史、OTB、booking pace、价格敏感、市场/竞对、TravelClick 360 类未来需求（旧 brochure）；107+ 集成 | PMS/IBE 等；regrets/denials；第三方（Advance）；AWS | 历史、live booking pace、竞对房价、商业规则、ancillary | PMS（预报/建议最多 1 日 5 次）、竞对价、HQI、目的地事件 | RS360：前向 OTB occupancy、sanctioned rate shop；ACRS：ARI 单一事实源 | Unknown。招聘提 rate/price plans、inventory types |
| Forecast | 「self-refining」；unconstrained demand（Buyer’s Guide 用词）；SAS analytics / deep-learning（首页） | ScoreBoard：按日预测、ML 投射（产品纸检索） | AI 预测至 24 个月；房型/细分/渠道粒度 | Demand and Forecasting 模块；可无 comp set | RS360：历史季节性 + 前向 OTB，日报（insight 文） | Unknown |
| Optimization | 房型 + rate code；产品（BAR / AP 等）独立定价；LOS；限制；超售；rate hurdles；团队置换 | **Open Pricing**：细分/渠道/房型/日期独立，不绑 BAR ladder | 实时价格优化；150M+ daily calculations（营销数字，D） | 按 rate code（房型+房价计划）+ 细分；stop sell / MLOS；Groups 置换 | **无公开优化器规格**。CRS 把 RMS 决策当定价分发层 | 招聘称新 inventory + pricing modules。算法 Unknown |
| Recommendation | 自动定价/可用性/超售；manage by exception | 实时建议；AutoPilot 可执行 | 每房型每天建议价 | 价格 + 限制建议；可自动发布 | RS360：数据/预览，不是自动改价引擎（页上未写自动写回 PMS） | Unknown |
| Human Override | 「transparent, interactive… decision-making partner」；可 autopilot | AutoPilot **或**人工改价；规则（MinLOS/CTA） | 全自动或手工；「best results blend RM」 | HQI 值可手改；策略与战术同屏 | CRS 治理：集团规则 + 物业自主（ACRS 页） | Unknown。集团部署暗示强治理 |
| Execution | 写回 selling systems；不再手工改渠道价（厂商） | 「seconds」推全渠道 | 与 Mews PMS 原生共享 rate plan/restriction/availability | 自动发布到分销 | ACRS 作 RMS 单端点代理，避免 RMS↔PMS 直连 | 经 ACRS / Opera Cloud（招聘） |
| Measurement | dashboards；displacement analysis；客户引言 ADR/RevPAR/RGI | ScoreBoard；HotStats 利润对标；营销 +6% RevPAR 等（D） | Pickup/ADR/RevPAR/Occ dashboards | 10+ 报告：分销成本、集群、公司策略 | RS360：未来 30/90 日 ADR/RevPAR rank；Demand360 市场份额 | Unknown |

**已验证事实**（打开官方页即可复核）：产品名、套件名、Open Pricing 定义、Amadeus 自称与 IDeaS/Duetto 集成为合作 RMS、Atomize 被 Mews 收编并出原生 RMS。  
**Vendor Methodology**：上述预测/优化/自动化句子。  
**Unknown**：目标函数、是否最大化 RevPAR vs 利润、训练数据、override 审计、中国市场默认集成。

---

## 3. 其他 mainstream（核到的）

### Atomize / Mews RMS

- 打开：https://atomize.com/ 与 https://www.mews.com/en/products/revenue-management-system  
- 官方 FAQ：**Mews RMS 与 Atomize RMS 是不同产品**。前者是 Mews 内原生方案，引擎来自 Atomize。  
- 输入：历史 + live pace + 竞对 + 商业设置 + ancillary。  
- 预测：至 24 个月；房型/细分/渠道。  
- Override：强调人机结合。  
- 公开算法白皮书：**未找到**。  
- 详页：`atomize.md`（20:17）。

### BEONx

- 打开：https://beonx.com/  
- 差异点（厂商）：**HQI（Hotel Quality Index）**= 设施客观质量 + 在线声誉，按客群加权；称定价考虑 HQI。**SmartRange** 新闻稿：降低对传统 comp set 依赖。  
- 公开回答：可按 rate code + 细分做 open pricing；限制 = stop sell + MLOS；Groups 含置换、替代日期、其他收入；无 comp set 也能预报。  
- BEONx Academy：会员 e-learning，非公开课。  
- 算法白皮书：**未找到**（FAQ 级）。  
- 详页：`beonx.md`（20:17）。**不是 G3**。

### 未单独立页、但检索出现的名字

| 名字 | 状态 |
| --- | --- |
| IDeaS Optix / Portfolio Navigator | About 时间线检索；本轮未打开产品页 |
| Amadeus iHotelier CRS | **04:17 打开**产品页：https://www.amadeus-hospitality.com/solutions/reservations-and-guest-management/ihotelier-crs/ 。CRS 不是 G3 |
| IDeaS dirty-data 博文 | **04:17 打开**：不用 regrets/denials 做 unconstrained。无公式 |
| Duetto GameTime | 官网打开：select-service 自动化定价 |
| Duetto HotStats | 官网打开：利润对标；是否独立公司产品线 Need Verification |
| Amadeus iHotelier | 见上行：04:17 产品页已开。偏中小/单体 CRS，不是 G3 级 RMS |
| RateGain / OTA Insight | Rate shopper / 需求信号，不是优化 RMS |
| 国内「收益系统」白牌 | 未核主体，不列 |

---

## 4. 顾问怎么用这张图

1. 用户说「我们上了 IDeaS / Duetto」：先问 **自动执行还是只给建议**、**override 频率**、**是否按房型还是只动 BAR**、**团队单是否过 RMS**。  
2. 不要用厂商案例的 15% ADR 当作这家店的期望。  
3. Amadeus 用户：先分清他买的是 **ACRS**、**iHotelier CRS**、**RS360** 还是外面的 IDeaS/Duetto/**BEONx**。20:17 仍无独立酒店优化型 RMS 产品页；BEONx 详页 `beonx.md`。iHotelier 官方页是 CRS。  
4. Marriott 店：One Yield / OYE 是内部系统。公开层只能当「集团自研 + 正在迁 ACRS」。建议必须用人话（Stay Date / 房型 / 价 / 库存 / 限制），不要假装见过 OYE 屏幕。  
5. 中国集团店：先用年报**系统名**提问，不编造算法。华住=中央收入管理系统；锦江年报无 RMS 字样；首旅=CRS + 调价模型 + AI 数字店长。

---

## 5. 修订（20:17 追加，不重写对照表）

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 20:17 CST | BEONx / Atomize 详页落地。science-behind-g3 打开仍无公式。careers 仍 404。不是 G3。 |
