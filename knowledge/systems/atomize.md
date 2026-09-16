# Atomize / Mews RMS

> 文件：`systems/atomize.md`  
> 检索日：2026-08-22 20:17 CST  
> 类型：Vendor Methodology（除非标注已验证事实）  
> 对照：`ideas.md` · `duetto.md` · `beonx.md`  
> 禁止：把 Atomize 写成 IDeaS G3；把 Duetto TBB 对抄；把 atomize.com 仍当成独立产品站。

## 已验证事实

| 项 | 内容 | 源 |
| --- | --- | --- |
| atomize.com | **打开即跳 Mews RMS 文案**（与 mews.com 产品页同文） | https://atomize.com/ **打开** |
| 现网旗舰名 | **Mews RMS, powered by Atomize** | https://www.mews.com/en/products/revenue-management-system **打开** |
| 两产品关系 | 官方 FAQ：**Mews RMS 与 Atomize RMS 是不同产品**。前者 = Mews 内原生方案；引擎来自 Atomize | 同产品页 FAQ |
| 收购 | 厂商博文：Atomize 2018 起对接 Mews；**2024-11** Mews 收购 Atomize；其后一年改造成嵌入 PMS 的 Mews RMS | https://www.mews.com/en/blog/mews-rms-powered-by-atomize-unifies-revenue-management-dynamic-pricing-and-business-intelligence **打开**（文首 2026-06-02） |
| 定位 | PMS 原生优化型 RMS：定价 + 预报 + BI 同一工作区 | 产品页 |
| 执行 | 全自动或手工；「best results blend RM」。博文：Autopilot 在用户护栏内，约每 5 分钟改价 | 产品页 FAQ + 2026-06-02 博文 |
| 营销数字 | 150M+ daily calculations；节省 20–30 小时/月；客户「每平米总收入 +13.7%」 | **D 营销**，未独立审计 |
| 独立算法白皮书 | — | **未找到公式级公开页** |

## 决策链（厂商自述 → 标 Vendor Methodology）

禁止把 Duetto TBB 或 IDeaS unconstrained 估法抄进本页。

### Input

产品页 FAQ：本店历史、**live booking pace**、竞对房价、商业规则（commercial settings）、**ancillary**。原生：房价计划 / 限制 / 可用性在 PMS 配一次即共享。  
**Unknown：** 默认数据商、中国 OTA 覆盖。

### Forecast

FAQ：预报细到房型 / 细分 / 渠道；至 **24 个月**。产品页：市场、事件、季节性；另有「Budget alignment tools」（厂商句，**不是**本库 T20 的 Budget≠Forecast 定义来源）。  
**Unknown：** unconstrained 估法、模型族。不要用 Duetto TBB 填。

### Optimization

按房型、按日建议价。实时动态定价与库存调整（FAQ）。博文 Autopilot：在护栏内自动改价。  
**Unknown：** 目标函数、是否按 rate code 独立（未写 BEONx 那种 rate code + 细分 FAQ 句）、是否 Open Pricing 哲学。

### Recommendation

每房型每天建议价；可自动执行或手工。小型店文案：one-click 建议。  
**Unknown：** 建议是否含库存保护水平。

### Human Override

FAQ：不是完全放手；最好人机结合。Autopilot 有用户护栏。  
**Unknown：** 护栏清单、override 是否写回学习。

### Execution

与 Mews PMS 同工作区，不另接一层同步。非 Mews PMS 店：Atomize RMS 仍可作为独立产品（FAQ 区分两产品）——本轮未打开独立 Atomize 产品规格页。  
**Unknown：** 中国非 Mews PMS 的默认接头。

### Measurement

Pickup / ADR / RevPAR / Occupancy 仪表，走 Mews BI。  
**Unknown：** 与 STR 指数如何对齐。

## 顾问含义

- 用户说「我们用 Atomize」：先问是 **还在用独立 Atomize RMS**，还是已经切到 **Mews 里的 Mews RMS**。两套不是同一个产品页。
- 问：自动还是建议、护栏谁定、房价计划是否只在 PMS 配一次。
- 「Budget alignment」只是厂商功能名。今晚 BAR 仍走本库 Pace + 贡献；不要把预算差写成 RMS 授权 dump（T20）。
- 不要用 +13.7% / 20–30 小时当这家店期望。
- **不是 G3，也不是 BEONx。**

## 缺口

独立 Atomize RMS（非 Mews 原生）的 2026 规格页；公式白皮书；中国 PMS 覆盖。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 20:17 CST | 首版。atomize.com = Mews 文案；产品页 FAQ + 2026-06-02 收购/嵌入博文。禁止 Duetto TBB 对抄。 |
