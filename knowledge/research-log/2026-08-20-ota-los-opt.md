# Research Log｜2026-08-20 Wave7 OTA / LOS / Optimization

> 路径：`research-log/2026-08-20-ota-los-opt.md`  
> 时区：Asia/Shanghai  
> 范围：LOS 优化、OTA 促销报/不报、Bid price/EMSR 顾问含义、P18/P21/P22、会展仿真

---

## 1. 检索与打开（2026-08-20）

| URL / 对象 | 结果 | 用作 |
| --- | --- | --- |
| https://link.springer.com/book/10.1007/b139000 Talluri 2004 | **打开** 书目+公开目录 | 书目级；不摘正文、不引页码 |
| https://www.sup.org/books/business/pricing-and-revenue-optimization Phillips 书目 | 本轮 WebFetch **timeout**（书目先前 Wave 已开） | 仍用 source-map 已核 ISBN |
| https://www.sup.org/books/business/pricing-and-revenue-optimization/excerpt/table-contents | **打开** TOC | Ch.7 opportunity cost；Ch.9 EMSR；Ch.10 bid pricing + 多晚酒店 |
| Littlewood 2005 reprint / Belobaba 1989 DOI / Talluri-van Ryzin 1998 MS | 书目交叉 Known | 理论史；不摘公式段 |
| https://www.mylighthouse.com/resources/blog/guide-hotel-stay-restrictions-tips-revenue-manager | **打开** 2025-06-27 | MinLOS/MaxLOS/CTA/CTD 定义（B，与限制框架同源） |
| RevenueRise trade-fair RM 文 | 检索到 | 肩日主动卖 = B/C 方向；不抄欧元表 |
| HotelTechUpdate MinLOS event 指南 | 检索到 | 「先 =2」与本库一致；C/B |
| https://contents.ctrip.com/activitysetupapp/mkt/index/hotelalgorithm | **打开** | 商户优惠店出；特惠券平台出；十亿豪补单出或共出。**标签≠活动目录** |
| https://ebooking.ctrip.com/promotion/proList | 打开为**登录页** | 2026 活动名 **NV** |
| 美团 eBooking / 飞猪商家 | 登录墙或非佣金表 | 2026 统一佣金、大促日历 **未找到** |
| 中国 OTA 佣金博客 / 券商转述 4.5–22% | 检索到大量 | **不采用**（与净贡献卡一致） |
| 新华社/监管约谈 2026 | 检索到整改语境 | 可作监管背景；**新费率 Unknown**；不写扣点 |

未采用：任何「RevPAR +15–20%」营销句；任何编造的 2026 活动正式名。

---

## 2. 跨库

读了 `/home/box/ota-operations/README.md`、`methodology/promotion.md`、`cards/20260820-ctrip-promo-who-pays.md`、`cards/20260820-tongcheng-promo-2026-calendar.md`。

纪律：只借「先问谁出资、后台名单以登录为准、2026 日历查空」。**没有**把平台运营规则、12-1 类型名单、排名信号抄进本库当收益管理事实。引用处标明「跨库」。

---

## 3. 决策（为什么这样写）

- LOS：与 MinLOS=2 只盖 Peak 兼容；新增「MinLOS vs 折扣连住」「单晚关不关」「套均价不打穿 Peak 地板」。  
- 促销：三结果报/不报/只报肩日；硬条件写死。店出 15% 仿真里肩日也不报（深于 −3–5%）。  
- 优化：只做 Theory→Decision。500 的团用机会成本解释，计算仍走置换草表。  
- 仿真选会展而非单独大促：一张卷同时练肩日、MinLOS、不报、Counter。  
- P13/P14/P19/P20 均为 MEDIUM 且非本波必做 HIGH，本波只 drafted P18/P21/P22。

---

## 4. 未决（下一轮）

| ID | 问题 |
| --- | --- |
| NV-PRO-01–05 | 四平台合同佣金、2026 大促正式名、不报名是否掉权、整改新费率、券是否改结算 |
| NV-LOS-01–03 | MinLOS 挂点、套价地板、MinLOS=3 接受度 |
| NV-OPT-01–03 | 本店需求分布、RMS 是否吐 bid price |
| P19 / P20 / P33 / P29 / P32 | 仍 not_started |
| Talluri/Phillips 正文 | 未精读；有书再升公式卡，仍不整段摘 |

---

## 5. 产出清单

见 `curriculum/progress.md` Wave7 表。

---

## 6. 修订

| 时间（CST） | 内容 |
| --- | --- |
| 2026-08-20 15:30 | Wave7 核源与落盘。 |
