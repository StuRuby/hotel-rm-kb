# Research Log｜2026-08-20 Inventory / Restriction / Event

> 时区：Asia/Shanghai  
> 任务：Wave4 库存、限制、Holiday / Concert / Sellout  
> 检索日：2026-08-20

---

## 1. 打开并采用

| 源 | 用途 | 级 | URL | 结果 |
| --- | --- | --- | --- | --- |
| Duetto Glossary | Denial / LOS / ALOS / 分销 / Unconstrained | A Vendor | https://www.duettocloud.com/en-us/glossary | **打开**。无 Booking Limit 专条。 |
| eCornell Forecasting and Availability Controls | 课主题含 forecast + LOS controls | A | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/forecasting-and-availability-controls-in-hotel-revenue-management/ | **打开课页**；不摘讲义数字。 |
| eCornell Price and Inventory Controls | 先控价档再加 LOS | A | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/price-and-inventory-controls/ | WebFetch **timeout**；检索摘要采用课名/主题，不摘正文。 |
| Oracle OPERA Cloud 26.2 Sell Limits | Sell Limit 正超售/负少卖；House/房型 | A Vendor | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_availability_setting_sell_limits.htm | **打开**。 |
| AccountingTools Nested Booking Limit | 高价可占低价块 | B | https://www.accountingtools.com/articles/nested-booking-limit | **打开**。航空例，酒店映射标 Hypothesis。 |
| Amadeus allotment booking limits | nested allotment 保护父库存 | A Vendor | 检索帮页 | 检索可见定义；未当本库公式。 |
| Lighthouse stay restrictions 2025-06-27 | MinLOS/MaxLOS/CTA/CTD/Hurdle | B | https://www.mylighthouse.com/resources/blog/guide-hotel-stay-restrictions-tips-revenue-manager | **打开**。采用定义与「高峰用、过度会挡需求」；不采用个案增收% 。 |
| Hotel Tech Report / NetSuite stay controls | 定义互证 | B | 见 restriction-framework | 检索摘要互证，未整段摘。 |
| Talluri 2004 书目页 | Capacity control 主题 | S 书目 | https://link.springer.com/book/10.1007/b139000 | 不摘正文。 |
| Belobaba 1989 DOI | EMSR / 嵌套限额 | S | https://doi.org/10.1287/opre.37.2.183 | 本轮未打开全文。 |
| 中国政府网 国办发明电〔2025〕7号 | 2026 放假调休 | S | https://www.gov.cn/zhengce/content/202511/content_7047090.htm | 检索+多家转载交叉：国庆 10/1–10/7；调休 9/20、10/10。 |

---

## 2. 打不开 / 不采用

| 项 | 处理 |
| --- | --- |
| eCornell 讲义作业数字 | 不引用（timeout / 版权） |
| 「高峰必须 MinLOS=2」「应留 X% 尾部」STR/HSMAI 官方法 | **未找到** → NV |
| 实践文 RevPAR +15–20% | D，丢弃 |
| 2026 携程/美团配额与排名规则 | 平台事实 Unknown，不写 |
| threshold vs net nesting 哪种适合酒店 | 未精读 → NV-INV-05，不选边 |

---

## 3. 写入本库的 Hypothesis（待 feedback）

- 低价渠道配额收到剩余 30–50%；尾部留房 20–30% 首选 25%。  
- 衰减：中位速度 = 当前日均 × 0.7 再比 DTA。  
- MinLOS 首选 =2，只盖 Peak；=3 要连续 Peak≥3。  
- 围栏 −3–5%；涨第一刀 +8–15% 或收到最低竞对；价已最高只关不涨。  
- 中国预付高峰关、弱日开。

与 Wave2/Wave3 数字尺兼容，不另起一套。

---

## 4. 资产清单（本轮新写）

- `inventory/inventory-control.md`  
- `restrictions/restriction-framework.md`  
- `recommendations/minlos-peak-protect.md`  
- `recommendations/close-low-rate-compression.md`  
- `recommendations/open-inventory-false-low-occ.md`  
- `advisor-playbooks/holiday.md`（P06）  
- `advisor-playbooks/concert-event.md`（P07）  
- `advisor-playbooks/sellout-risk.md`（P03）  
- `cases/sim-2026-concert-peak-shoulder-minlos.md`  
- 本日志  

未写：P04 Early Sellout、P21、P29、P22、P33（仍 backlog）。

---

## 5. 修订

| 时间 | 内容 |
| --- | --- |
| 2026-08-20 14:50 CST | Wave4 核源并落文件。 |
