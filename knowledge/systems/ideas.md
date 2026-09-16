# IDeaS

> 文件：`systems/ideas.md`  
> 检索日：2026-08-20；晚课复核 2026-08-20 20:00 CST；公式缺口复核 2026-08-22 20:17 CST  
> 类型：Vendor Methodology（除非标注已验证事实）

## 已验证事实

| 项 | 内容 | 源 |
| --- | --- | --- |
| 官网 | https://ideas.com/ | 打开（晚课复核：首页现写 34,000+ properties / 102 integrations / 174 countries / 98% retention） |
| 品牌 | IDeaS；页上同时出现 **G3 RMS**（客户引言）与 **IDeaS RMS**（首页产品语） | 首页 |
| 法定名 / 母公司 | **Integrated Decisions and Systems, Inc.**；现为 **SAS** 所有 | About（2026-08-20 20:00 **打开**；上午该 URL 空页） |
| 沿革（About 年表，厂商自述） | 1989 创立（先航空网络优化）；1995 进酒店；1998 印度 Pune；2003 上云并发布旗舰 **IDeaS RMS**；2006 上海办事处；2008 SAS 收购；2009 **G3 RMS**；2013 移动端；2015 Car Park RMS；2017 SmartSpace；2020 RevPlan；2021 Optix；2022 On Demand Optimization；2023 多个 base rate 可独立；2024 Portfolio Navigator；2025 Spotlight（营销侧 demand intelligence） | About |
| 定位 | 酒店/邮轮/停车的收益与利润优化软件 | 首页 |
| 分析栈 | 「deep-learning SAS® analytics and AI」 | 首页 |
| 规模宣称 | 34,000+ properties；102 integrations；174 countries；35+ years；98% client retention | 首页 + About（厂商数字，未独立审计 → **D**） |
| 公开长文 | Buyer’s Guide：https://ideas.com/tools-resources/hospitality-revenue-management-buyers-guide/ | **打开**（晚课复核） |
| 视频 | https://ideas.com/videos/ | 打开 |
| Podcast | https://ideas.com/podcasts/ 《Unconstrained Conversations》；可见集停在 2021 | 打开 |
| About | https://ideas.com/about/ | **打开**（20:00） |
| 独立算法白皮书（公式级） | — | **仍未找到逐步估法**。12:17 打开 Revenue Science 101（不用 regrets/denials；无公式）+ G3 Pricing Datasheet ©2021。**20:17 science-behind-g3 打开**（dynamic programming vs deterministic；>100 模型；点到 wholesale/crew allotment）。仍无逐步估法。analytics 文未再抓 |

上午首页曾摘到 31,000+ / 107 / 169。晚课首页与 About 均为 34,000+ / 102 / 174。以晚课打开页为准，不调和数字。

## 决策链（厂商自述 → 标 Vendor Methodology）

禁止把 Duetto Resource Hub 的 Forecast 步骤（TBB、CTA 先扣）抄成 IDeaS 公式。下列只来自 IDeaS 首页 / About / Buyer’s Guide。

### Input

Buyer’s Guide · Key Feature: Responsive Analytics：G3 评估 **future on-the-books、booking pace、price sensitivity、market data、unconstrained demand**，并按 **room type and/or market segment** 定价。历史数据用于理解定价/需求模式、LOS、booking behavior。  
**Unknown（2026）**：默认数据供应商清单、中国 OTA 是否进模型、unconstrained 的可复现估法。

### Forecast

「Responsive Analytics / self-refining demand forecasts」。首页：clean structured data + SAS analytics。Buyer’s Guide：预测用于影响房价决策；也用于识别即将到来的慢日，以便销售/营销/分销战术。  
**Unknown**：模型族（时间序列 vs ML vs 深度学习如何用）、unconstrained demand 的具体估法、与 Constrained 的逐步公式。**不要**用 Duetto TBB 步骤填这个空。

### Optimization

Buyer’s Guide 列举 G3 能力（厂商）：

- 动态定价 advanced purchase / 会员折扣等产品
- 按 rate product、房型、细分 **独立定价**
- 按 LOS 定价
- 考虑需求、WTP、房型层级、竞对
- 自动管理 rate availability、升级、超售

首页：pricing + availability + overbooking；rate hurdles。About 2022：On Demand Optimization = 实时改价；2023：多个 base rate 可彼此独立。  
团询（Buyer’s Guide · Maximize Group Business）：销售把 RFP 细节输入 G3 → 系统计入 ancillary，算相对散客的最大利润，并给「最赚钱的团价」；可上传 block pattern 与 concessions（免费房、佣金、rebate）做 **displacement analysis**。文称团客占客房业务 40–60% → **证据级 D（营销）**。  
**Unknown**：目标函数（RevPAR vs 贡献利润）、是否网络优化多晚。

### Recommendation

自动化战术（改价、可用性、超售）；**manage by exception**——异常才通知人。Buyer’s Guide：不再手工在 selling system 改价、不再手工评估竞对与设库存/房价控制。  
**Unknown**：建议粒度为房价点还是区间；中文 UI 是否存在。

### Human Override

首页：「transparent, interactive system that acts as your decision-making partner」。客户引言有人把 G3 + 住宅经理 + 自己称为「三个专家」；另有「I trust the system completely… autopilot」。  
**Unknown**：override 是否写回学习、权限模型。

### Execution

厂商：不再手工在 selling system 改价；与 102+ PMS/CRM 等集成（晚课数字）。About：2006 起有上海全服务办事处。  
**Unknown**：中国常见 PMS（西软、石基、绿云等）是否在 102 内——未打开集成列表。

### Measurement

报表、dashboard、**displacement analysis**（团询）。客户引言 7%/18%/20% ADR、22% RevPAR、20–40 小时/月节省、83% 投资者称 ROI high/very high（IDeaS + Benchmark Research Partners 调查）。**证据级 D（营销）**。

## 顾问含义

- 把 IDeaS 当「自动执行 + 例外管理」系统来问问题，不要当 Excel。  
- 若用户说「系统价不对」：先问 forecast 输入（团队、活动、关房）是否脏，再谈 override。  
- 团询：G3 公开主张有 displacement；顾问仍用本库 P10 草表，不把 40–60% 当本店结构。  
- 2020 brochure 只作历史，不当 2026 规格。About 年表可作产品名时间线，不是算法说明书。
- **2026-08-25 20:17：** developers Group Blocks 打开（https://developers.ideas.com/concepts/inbounddata/groupblocks/）。Block ≠ pickup；Definite/Strong Tentative **扣库存**，Tentative/Hold **不扣**。washed to pickup = 手工把块收到已订。**不是 wash%、不是顾问操作步骤、不是 BAR。** 不抄 API。
- **2026-08-28 02:17 / 04:17：** G3 Pricing Overrides 是产品能力（§54）；Duetto 第二家同向（§55）。顾问：建议≠定价权，走 **P66**。不采用 4% / 80:20 店规。

## 缺口

G3 vs 「IDeaS RMS」并存（2003 旗舰名 RMS，2009 起 G3；现网两名都用，不是已改名完毕）。science-behind-g3 **已开仍无逐步估法**（停再抓该 URL）。中国集成列表、unconstrained 估法仍 NV。禁止 Duetto TBB 对抄。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。Buyer’s Guide + 首页。About 空页。 |
| 2026-08-20 20:00 CST | About 打开：法定名、SAS、年表、上海 2006。Buyer’s Guide 复核补团询 displacement / manage by exception。规模数字改跟晚课页。禁止 Duetto 公式对抄。 |
| 2026-08-21 20:17 CST | 公式级 unconstrained 白皮书 / 中国 PMS 集成列表 **仍 NV**。检索到概念博文（定义 unconstraining、不用 regrets/denials），未当逐步估法打开。不重写决策链。 |
| 2026-08-22 04:17 CST | dirty-data 博文打开（Vendor Methodology：不用 regrets/denials；无公式）。science-behind-g3 / 101 正文空。中国 PMS 集成仍 NV。不重写决策链。禁止 Duetto 对抄。 |
| 2026-08-22 12:17 CST | 101 打开：unconstrained = 无容量/限制真需求；不用 regrets/denials；无逐步估法。G3 2021 datasheet 打开（不当 2026 规格）。science-behind-g3 仍空。不重写决策链。禁止 Duetto 对抄。 |
| 2026-08-22 20:17 CST | science-behind-g3 打开：DP vs deterministic；>100 模型；crew allotment ≠ 普通团。无逐步估法。不重写决策链。该 URL 停再抓。 |
| 2026-08-25 20:17 CST | developers Group Blocks 打开：block vs pickup；Definite 扣库存 / Tentative 不扣。无 wash%。不重写决策链。禁止 Duetto 对抄。 |
| 2026-08-28 04:17 CST | 指针：§54 Overrides + §55 Duetto 第二家同向 P66。不重写决策链。 |
