# Overbooking Framework｜超售（只建议不执行）

> 资产：Wave5 理论卡  
> 路径：`overbooking/overbooking-framework.md`  
> 能力层级：Diagnose → Advise（**不 Operate**）  
> Last Verified：2026-08-20  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> 配套：`recommendations/overbook-or-not.md` · `inventory/inventory-control.md`（Sell Limit）· P03 / P14 / P24  
> 问题树：§8 Early Sellout · §10 High Cancellation · O11  
> 禁止：无取消/No-show 史给精确超售间夜；把建议写成已改 PMS；编造 Walk 成本；把 2026 平台罚则写成操作额度。

---

## 0. 一句话

超售是用 **取消 / No-show / 早离** 的统计空房，对冲「卖满后空房」的风险。顾问只回答三件事：**要不要超、建议超多少的方向、风险看什么**——不给魔法间数，不替店执行。

```
空房成本（spoilage）     vs     Walk 成本（被赶客）
取消 / No-show / 早离    vs     延住（extension）吃掉空房
酒店库存决策             ≠     平台履约罚则
```

与 P03 的关系：Sellout Risk 先关低价再涨；超售是 **DTA 已短、取消史可用** 之后的第三层。价还最低时先定价/关破价，不要靠超售补 ADR。

---

## 1. 五个流量，必须分开

| 流量 | 定义（顾问用） | 对超售 |
| --- | --- | --- |
| **Cancellation** | 到店前释放的预订 | 释放早 → 可再售；释放晚 → 近似 No-show |
| **No-show** | 担保/预付未到、未在政策窗取消 | 经典超售对象 |
| **Early Departure** | 比原 LOS 早走，后面夜空出 | 增加当晚之后的空房；不增加**到达日**空房 |
| **Extension / Stayover** | 续住，吃掉次日可售 | **降低**次日可超空间 |
| **Walk** | 确认预订无法安排入住，送他店 | 超售的下行成本 |

净到达不确定：

```
Show-ups ≈ Arrivals booked − late cancels − no-shows
Stayover 占用次日
空房     = Capacity − Show-ups − Stayovers（简化）
Walk     = max(0, Show-ups + Stayovers − Capacity)
```

口径未定时标 Unknown。不要把「取消率正常」当数字。

---

## 2. 成本：空房 vs Walk（不编金额）

| 成本 | 含什么 | 本库 |
| --- | --- | --- |
| Empty-room / spoilage | 少卖一间的**贡献**（房价 − 变动成本）。无变动成本则用 ADR 并声明高估 | 用户给；不编 |
| **Walk Cost** | 他店房费、车、补偿、积分、员工时间、口碑、会员流失；**不同客类不同**（会员/直销通常更高） | **必须用户给或拆清单**。禁止用「行业 Walk=房价×2」当 Fact |

公开启发式（**B**，eCornell IMPACT 文，Kimes 超售课同源公开讲法，2026-08-20 检索可见；原文例 Walk 300 / 空房 100，**那是教学例，不是 2026 中国店成本**）：

```
Critical ratio  CR = WalkCost / (WalkCost + EmptyRoomCost)
```

把 CR 对上本店 **No-show（或 late cancel+no-show）累积分布**：找到「超售到第 k 间时，Walk 概率开始高于 CR」的位置。  
文中口算例：Walk 300、空房 100 → CR=0.75。另有一句实践口诀「有的店把 Walk 当成空房的约 2 倍」——本库标 **C/B 口诀，不得当政策**。

**没有 Walk 成本、没有分布 → 禁止输出「超售 7 间」。** 只给方向 + 要的 3 个数。

Cornell Hospitality Quarterly 2023（Subramanian 等，公开题录）：Walk 成本随客类变；会员更高。**A 题录**，本轮未打开全文，不摘公式。

---

## 3. 要不要超、建议超多少、风险

### 3.1 要不要超（门）

| 开 | 关（默认不超 / 停超） |
| --- | --- |
| DTA 短（通常 ≤3，按店）且 OTB 已近满 | 无取消/No-show 历史 |
| 同 DOW / 同细分的 No-show+晚取消 **稳定** | 刚涨价或事件取消潮，历史失效 |
| Walk 选项存在（同城可送、协议店）且成本可知量级 | 无同城可 Walk；或今晚已是会员/高价为主 |
| 低价/可取消占比高 | 预付不可退已占绝大多数（No-show 接近 0） |
| 不是一笔未洗的大团占位 | 一团占房，Wash 未发生 |

价已最高、低价已关、Remaining 按中位速度能撑到入住：**不必为冲 OCC 超售**。

### 3.2 「超多少」怎么说（无魔法间数）

**有分布 + 有成本：** 用 §2 CR，输出 **区间 + 首选**（例如「到达日建议超售 4–8 间，首选 5」），并写假设。仍是建议。

**只有取消率点估计、无分布：**

```
粗锚（Hypothesis，不是最优）：
建议超售间夜 ≈ 期望晚取消+No-show − 期望延住增量
给不出点 → 区间：期望值的 50–100%，首选偏保守（靠近 50–70%）
```

**什么都没有：**

```
方向：DTA≤2 且可取消占比高 → 「可以准备超售，但今天不给间数」
方向：预付为主或 Walk 代价未知 → 「今天不超，先收数」
```

禁止：用总房的固定 %（如「一律超 5%」）当本库规则。OPERA Sell Limit 正值 = 物理房上加可售（**A Vendor** 字段，`inventory-control.md`）——那是系统能力，不是建议额度。

### 3.3 风险（每个建议至少 3 条）

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| Walk 爆 | 到达日下午剩余 vs 未到清单 | 未到 < 超售额 → 停超、启动 Walk 预案（建议，不执行） |
| 取消史失效 | 24h 取消 ≪ 或 ≫ 历史 | 取消骤降 → 立刻把超售收到 0–下限 |
| 延住吃掉空房 | 当日 Stayover 申请 | 延住升 → 次日超售下调 |
| 一团假满 | Segment | 发现大团 → 按洗后散客重算，不按满房超 |
| 只超了高价/会员层 | 客类 | 优先超可取消 / 低 Walk 成本层（Hypothesis） |

---

## 4. 只建议，不执行

顾问可写：

```
Stay Date:
建议：超 / 不超 / 停超
幅度：区间 + 首选  或  「今日不给间数」
前提：用了哪段取消/No-show 史
风险与 Trigger
不要做：继续开放低价把超售额卖给最便宜的渠道
```

不可写：PMS / Channel Manager 逐步点击；「我已经帮你超了 N 间」；把 Sell Limit 数字当已生效政策。

---

## 5. 与 OTA 履约风险分开（强制分节）

酒店超售决策 ≠ 平台怎么罚。两套账。

### 5.1 平台合同层（能核到的写，核不到标 Unknown）

**Booking.com Partner Help**（2026-08-20 打开，**A Vendor**）：

- 超售仍可能被收佣金（房源曾在平台可订）。  
- 平台要求酒店承担客人 **relocation（安置）** 费用。  
- 上线不足 30 天，或过去 12 个月超售少于 5 次，佣金可豁免（帮页原文条件）。  
- **没有**在该页公布「中国店可超几间」的额度。

Expedia / Agoda / 中国 OTA 对 Walk 的 2026 合同罚则：**本轮未打开官方履约罚则页 → Unknown**。不把 Booking 条款套到携程/美团。

### 5.2 2026 中国平台监管（与超售额度无关）

2026-07-25 新华社受权报道：市场监管总局对携程滥用市场支配地位立案并处罚（没收违法所得 16.58 亿元，罚款 35.21 亿元，退还订单储备金 1.22 亿元）。行为认定是 **独家合作（特牌）** 与 **强制全网最低价**（金牌/无牌价差与调价工具），不是「超售几间」的履约公式。  
本库：**Fact（新华社 2026-07-25）**。总局官网原文页本轮未稳定打开 → 决定书全文细节 **Need Verification**。  
**禁止**据此写出「2026 年起携程超售不得超过 N 间」或「Walk 罚金 = __」——**未核到此类操作额度，标 Unknown，不当政策。**

北京 2026-03-23 约谈 12 家平台（含携程/美团/飞猪等）涉及强制报名促销、全网最低价、罚款限流等（**samr.gov.cn** 专题页，**A**）。同样 **不是** 超售间夜额度。

### 5.3 顾问怎么用

| 场景 | 写法 |
| --- | --- |
| 问「要不要超售」 | 先走 §3 酒店库存逻辑 |
| 问「OTA 会不会罚」 | 分开答：Booking 帮页有安置+佣金；中国平台 2026 履约罚则 Unknown；监管案是价权/独家，不是超售配额 |
| 用户要一个「平台允许的超售上限」 | **不给。** Unknown ≠ 0，也不等于 5% |

---

## 6. 与库存 / 定价的顺序

```
1) 低价还开着、BAR 偏低     → 先关低价 / 第一刀涨（P03/P04），不先超
2) 价已最高、取消史可用     → 才评超售方向
3) DTA 仍长（>7）            → 通常不超；用价+限额
4) 已满日                     → 管取消替换价；超售是到达日战术
```

留尾 20–30% 是 **远窗保护高价**，不是到达日超售公式。不要把两者加出「还可以再卖 40%」。

---

## 7. 证据（2026-08-20 核）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| 超售对冲 No-show；须预测取消/到达不确定 | A | eCornell Overbooking Practices（Kimes）课页 | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/overbooking-practices-in-hotel-revenue-management/ |
| CR = Walk/(Walk+Empty)；教学例 300/100 | B 公开讲法 | eCornell IMPACT | https://ecornell-impact.cornell.edu/the-cheapest-and-best-approach-to-overbooking/ （检索可见；WebFetch 本轮 timeout，不摘未核段落） |
| 超售为 Talluri 书主题 | S 书目 | Talluri 2004 Overbooking 章 | 书目页；**不摘正文、不编页码** |
| Walk 成本随客类 | A 题录 | Cornell HQ 2023 | https://doi.org/10.1177/19389655231179635 |
| Sell Limit 正=超售 | A Vendor | OPERA Cloud 26.2 | 见 inventory-control |
| Booking 超售：佣金+安置 | A Vendor | Partner Help 2026-08-20 | https://partner.booking.com/en-us/help/commission-invoices-tax/commission/understanding-our-commission |
| 携程 2026-07-25 反垄断罚 | A 新华社 | 新华网 | https://www.news.cn/fortune/20260725/bbff2c78684640589c150e4a483b0532/c.html |
| 中国 OTA Walk 罚则额度 | — | **未核到官方额度** | Unknown |
| 「Walk 成本=空房×2」 | C/B 口诀 | IMPACT 文提及 some hotels | 不得当政策 |

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-OB-01 | 本店 Walk 成本清单 | 不编金额；要 3 个数之一 |
| NV-OB-02 | 取消 vs No-show 系统口径 | 问用户；合并则保守当晚取消 |
| NV-OB-03 | 携程/美团/飞猪 2026 履约/Walk 罚则 | Unknown；不写额度 |
| NV-OB-04 | IMPACT 文 CR 用法与课作业是否同一 | 只用公开 CR 骨架 |

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。五流量 + CR。只建议不执行。平台罚则与超售额度分开，未核额度不写。 |

---

## 10. P24 今晚程序（2026-08-21 14:17 CST 追加，不改 §1–7 骨架）

到达日赶客 / 先赶谁 / 今晚还超不超 → **`advisor-playbooks/overbooking-walk.md`** + `recommendations/who-to-walk-first.md`。

本框架仍管：要不要超、CR、无史不给间夜、平台罚则分开。P24 **不**填 NV-OB-01 的金额，只写停接与客类排序。

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 14:17 CST | 交叉 P24 过程剧本。Walk 成本数字仍 NV。禁止把 2 倍口诀当政策。 |


---

## 11. 交叉（2026-08-22 08:17，不改 CR / 不编 Walk）

空房成本 = 未售间的**贡献**（净价 − 用户变动成本），不是 Walk×2。T19：`theory/profit-contribution.md`。无变动成本则 Empty-room 仍用 ADR 并声明高估（§2 已写）。Walk 金额仍 NV。

---

## 12. 交叉（2026-08-24 14:17 CST，不改 §1 公式）

同日「今天空出 N 间早离要不要开特价 / 客人要续住高峰」→ **P46** `advisor-playbooks/early-departure-stayover.md` + `recommendations/dont-dump-on-early-depart.md`。

本框架仍管：五流量定义、CR、无史不给间夜、平台罚则分开。§1 Occupied / Remaining / Walk 简化式 **不改**。P46 不填 NV-OB-01 Walk 金额。高峰早离 dump ≠ 新 BAR；高峰续住友情折可把到店推进 P24。


> 指针（2026-09-05 16:17 T05-16，不改正文）：Sell Limit / Channel Sell Limit / Allowed Overbooking deepen **已 skip**。Sell Limit 仍是系统能力不是建议额度，≠ 公开 BAR rewrite。过程仍 **P24**；Hold 779–799 首选 799；拒 399。全文 `research-log/2026-09-05-1617-theory-skip-sell-limit.md`。不开 P88。
> 指针（2026-09-05 18:17 C05-18，不改正文）：callable Simulation `cases/sim-2026-sell-limit-misread-sat.md`。Sell Limit 仍是系统能力不是建议额度，≠ 公开 BAR rewrite。过程仍 **P24**；Hold 779–799 首选 799；拒 399。不开 P88。
> 指针（2026-09-05 20:17 R05-20，不改正文）：§145 Stayntouch/Clock/Protel 可售闸互补源。Sell Limit 仍是系统能力不是建议额度，≠ 公开 BAR rewrite。过程仍 **P24**；Hold 779–799 首选 799；拒 399。不开 P88。
