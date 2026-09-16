# Duetto

> 文件：`systems/duetto.md`  
> 检索日：2026-08-20  
> 类型：Vendor Methodology（除非标注已验证事实）

## 已验证事实

| 项 | 内容 | 源 |
| --- | --- | --- |
| 官网 | https://www.duettocloud.com/en-us/ | 打开 |
| 旗舰定价引擎 | **GameChanger** | https://www.duettocloud.com/en-us/platform/gamechanger |
| 套件名 | **Revenue & Profit Operating System (RP-OS)** | 首页 |
| 套件组件（首页列出） | GameChanger（定价分发）；ScoreBoard（预测报表）；BlockBuster（团队）；Advance（第三方+AI 建议）；HotStats（利润对标）；GameTime（select-service） | 首页 |
| 核心方法名 | **Open Pricing** — 厂商称自创，是 GameChanger 的定价哲学 | https://www.duettocloud.com/en-us/glossary/open-pricing （打开） |
| 执行模式 | AutoPilot **或** 人工改价；页写推送「seconds」 | GameChanger 页 |
| 规模宣称 | 20,000+ properties / 100+ countries | 首页（未审计） |
| 营销数字 | +7.6% TrevPOR / 6 个月；+6% RevPAR 首年 +10% 随后 | 首页 **D** |
| 独立科学白皮书 | — | **未找到公式级公开页** |

## Open Pricing（Vendor Methodology，摘自官方术语页，不整段抄教材）

- **定义（官方）**：每个细分、渠道、房型独立定价，**不绑在一条 BAR ladder 上**。  
- **对照 BAR**：传统是一条 BAR + 固定偏移（会员 -10%、房型跟涨跟跌）。BAR 一动全动；为保护 BAR 关低价渠道会丢掉仍赚钱的需求。  
- **厂商声称的结果**：压缩期能单独抬高端；低需求细分可打折而不拖垮其他细分；直销可反映更低分销成本。  
- **信号**：术语页写 GameChanger 用直销 **regrets and denials** 作前向需求，早于 pickup 报告。

这是方法主张，不是本库已在真实酒店复现的事实。

## 决策链

| 环节 | 公开可知 | Unknown |
| --- | --- | --- |
| Input | PMS/技术栈连接；regrets/denials；Advance 接第三方；AWS | 默认数据商；中国 OTA 覆盖 |
| Forecast | ScoreBoard：按日、ML 投射（产品纸/首页）。Resource Hub 方法页见下 | 准确性指标公开定义；新 AI/ML 分阶段，部分步骤只适用于 legacy |
| Optimization | Open Pricing 独立维度；限制 MinLOS / CTA | 目标函数；与 BAR 并存时如何配置 |
| Recommendation | 实时建议 | 建议是否含库存保护水平 |
| Human Override | AutoPilot 可关；可人工改价（GameChanger：「choose AutoPilot, or jump in and adjust rates yourself」— **§55 2026-08-28 04:17 打开**）。厂商博文：Overrides can backfire / not overriding can also backfire（同 §55）。能力 ≠ 必须跟 dump | Resource Hub Lock/Protect UI 仍 SPA 墙 **NV**；本店/华住会字段 **NV**；默认 override % **禁止发明** |
| Execution | 全渠道推送 | 与中国渠道管理器的默认接头 |
| Measurement | ScoreBoard；HotStats | HotStats 与 RMS 的数据权属 |

## 顾问含义

- 用户若仍「一条 BAR 全店跟」：Duetto 的公开主张是这正是泄漏点。建议先问：会员/OTA/套房是否真的独立动。  
- AutoPilot 不等于无人。问：哪些日期被锁、哪些细分永远手工。  
- BlockBuster 存在 ⇒ 团队应能做置换，而不是只比散客价。  
- 不要把 Open Pricing 写成行业定理；写成「Duetto 方法，A 级厂商主张」。
- **2026-08-25 20:17：** 公开 Glossary **Group wash** = 合同块历史上未能落地（never picked up），按团型/季/细分历史估，**无默认 %**。library 博文「100 间 90% pickup」= 厂商例，**不当本店**。Glossary Pickup = 店日新订累积，**不是** OPERA 块 allotment pickup。不授权 cutoff 前 dump 公开 BAR。不抄算法。

## 缺口

母公司/融资/是否仍独立；HotStats 关系；公式白皮书；中国案例除营销外的独立验证。

## Forecast 方法页（2026-08-20 17:00 CST 核，Vendor Methodology）

源：https://duetto.my.site.com/resourcehub/s/article/Understanding-Forecasts （打开成功）。顾问调用卡：`forecasting/unconstrained-vs-constrained.md`。

- Demand（unconstrained）vs Forecast（constrained，封顶 100%）。缺口 = yield opportunity。
- Constrained 第一步：先按 CTA / MinLOS / MaxLOS 扣无法实现的需求 → P33。
- TBB 不为负：Pace Ahead 不再往上加增量。
- 文中声明多数店仍用此算法；新 AI/ML 分阶段。**不要写成行业定理。**
- **禁止**把本页步骤编成 IDeaS 对等公式。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。Open Pricing + 套件名。 |
| 2026-08-20 17:00 CST | Resource Hub Forecast 方法页交叉引用。 |
| 2026-08-25 20:17 CST | Glossary Group wash + library 博文打开。无默认 wash%。90% 例不当本店。不重写 Open Pricing / Forecast 步骤。 |
| 2026-08-28 04:17 CST | Human Override：GameChanger + glitching 博文打开（§55）。能力 ≠ dump。Resource Hub Lock 仍 NV。不重写 Open Pricing / Forecast。 |

## Multi-property / 中央定价（2026-08-29 02:17 CST 小填，不重写 Open Pricing）

源：https://www.duettocloud.com/en-us/library/how-to-centralize-pricing-across-multiple-hotels-duetto （打开，2026-05-11）。Vendor Methodology：中央可定策略；每店仍跟自己市场。把 quiet midweek 和 peak weekend 拍平是失败模式。顾问：区域统到最低那家不等于这家博文的 centralize。动作走 P72。Resource Hub Sister Property Pricing 本轮登录墙 NV，不编层级百分比。
