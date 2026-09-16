# Marriott One Yield / One Yield Evolution

> 文件：`systems/marriott-one-yield.md`  
> 检索日：2026-08-20；复核 2026-08-22 20:17 CST  
> Marriott **没有**打开到的官方公开产品站。本页只记能交叉到的名称与栈，其余 Unknown。

## 已验证 / 未找到

| 项 | 状态 |
| --- | --- |
| 官方产品页（One Yield / OYE） | **仍未找到官方公开页，Need Verification**（04:17 打开 2025 10-K：只写 proprietary RMS，**无** One Yield / OYE 产品名） |
| 官方方法论 / 白皮书 | **未找到** |
| Marriott RMAS Plus Services | **打开** https://rmas.marriott.com/plus-services （2026-08-21 20:17）。名称：**One Yield** Certification Training；One Yield System Review。并列 MARSHA、ACRS Audit Implementation、GPO（Group Pricing Optimizer）、HPP、GDS。本页 **无** One Yield Evolution、无算法 |
| 招聘系统名 | 检索大量 `careers.marriott.com` 职位同时出现：MARSHA、**One Yield**、**One Yield Evolution**、**Amadeus CRS / ACRS**、Opera Cloud PMS、OSEM、EMPOWER ResApp、Bonvoy。抽样 URL **仍 404**（含 20:17 FLEX UX testing `EEE26AEA…` + EMEA Specialist 新 slug `5B04DAE8…`）。招聘正文不当已打开证据，只作**名称交叉**。**抽样 careers URL 停** |
| Marriott 2025 Form 10-K | **打开** https://marriott.gcs-web.com/static-files/b82978a6-9d28-4e38-9855-fc4ae2cebe11 。原文 proprietary revenue management systems；**无** One Yield / OYE 名 |
| 第三方确认 | Amadeus ACRS 页引用 Marriott 高管谈分销平台。打开。 |

搜索词：`Marriott One Yield Evolution official` `site:careers.marriott.com One Yield Evolution` `One Yield Evolution hotel` `MARSHA ACRS One Yield`

## 名称地图（Hypothesis，待打开招聘/培训原文再升 B）

```text
旧栈（招聘并列）          新栈（招聘并列）
MARSHA              →    Amadeus Central Reservation System (ACRS)
One Yield           →    One Yield Evolution（OYE）
Opera PMS / S&C     →    Opera Cloud PMS + OSEM
```

招聘摘要（未打开原文，不引用为事实）提到 OYE **新库存模块与定价模块**；ACRS 侧有 rate plans、price plans、inventory types、non-room products、overbooking strategy。  
这只说明 **模块在 Renovation**，不说明算法。

## 决策链

| 环节 | 已知 | Unknown |
| --- | --- | --- |
| Input | 必与 MARSHA/ACRS 订房、Opera 在店数据、忠诚度有关（推断） | 字段、刷新频率、是否吃 STR/竞对 |
| Forecast | Unknown | 模型、是否 unconstrained |
| Optimization | Unknown | 目标、是否 Open Pricing 还是 BAR ladder |
| Recommendation | Unknown | 建议形态 |
| Human Override | 集团酒店通常有 cluster / above-property RM（行业实践 B，非 Marriott 专页） | 权限、审计 |
| Execution | 经 CRS（MARSHA 或 ACRS）出 ARI | 物业能否绕过 OYE 改价 |
| Measurement | 集团内部 KPI；公开层无 | MPI/ARI/RGI 如何进 OYE |

## 顾问含义

- 对 Marriott 旗下店：不要假装见过 One Yield 屏幕。问人话：当前 BAR、限制、OTB、pickup、团队 block、系统建议价 vs 实际挂牌价。  
- 若用户正在 **cutover**：风险是 rate plan 映射错误、超售策略断层、非客房产品未迁。建议先核「系统价是否真的到了渠道」，再谈策略。  
- 把 OYE 当 **A 级集团方法论的黑盒**：承认 Unknown，用通用决策链补洞。

## 缺口（HIGH）

1. 打开一条仍活的 Marriott Careers 正文并摘系统名。**仍 404**。RMAS 已提供 One Yield 名称（培训/复核，非算法）。  
2. 任何非保密的 **OYE** 模块说明（培训公开课、投资者日）。RMAS 本页无 Evolution。  
3. One Yield 经典版（2019 前）文献只进历史，不当 OYE。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。产品页 0；招聘 404。 |
| 2026-08-21 20:17 CST | RMAS Plus Services 打开：One Yield 名称（培训/系统复核）。产品页仍 NV；careers 仍 404；本页无 OYE。算法仍 Unknown。 |
| 2026-08-22 04:17 CST | 2025 10-K 打开：proprietary RMS 未点名。careers 两 URL **仍 404**。RMAS 首页打开（非产品页）。产品页/算法仍 NV。 |
| 2026-08-22 12:17 CST | careers 三 URL **仍 404**。产品页/算法仍 NV。不把检索摘要当正文。 |
| 2026-08-22 20:17 CST | careers 再 404 两条（FLEX UX + EMEA 新 slug）。产品页/算法仍 NV。抽样 careers URL 停。 |
