# Playbook P24｜Overbooking Walk Risk（今晚程序）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/overbooking-walk.md`  
> BACKLOG：P24 Overbooking Walk Risk · MEDIUM · 先决策卡 · slug **overbooking-walk**  
> 状态：**drafted**（2026-08-21 14:17 CST）· **过程剧本**，不输出 Walk 成本金额、不输出精确超售间夜  
> 配套卡：`recommendations/who-to-walk-first.md` · `recommendations/overbook-or-not.md` · `treat-otb-as-soft.md`  
> 理论：`overbooking/overbooking-framework.md` · `inventory/inventory-control.md`（Sell Limit 是系统能力，不是建议额度）  
> 交叉：P03 卖穿（价还低时先关低价，不靠超售补 ADR）· P14 高取消（OTB Soft）· P05 当晚未售 · P19 预付 · P28 天气中断（2026-08-21 22:17 drafted）  
> 问题树：O11 · §10 · 本轮 §29  
> 证据等级：过程 **B**；客类 Walk 成本差 **A 题录**；「先赶谁」排序 **Best Practice / Hypothesis**（不是 S 公式）  
> Last Verified：2026-08-21 14:17 CST  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：**只建议不操作** PMS / 前台 / 渠道后台。

---

## 0. 一句话

今晚可能赶客：**先停接当晚到达**，再按「低 Walk 成本客先、高成本客后」建议赶谁；**不要继续超售往前冲**。  
**禁止**报「超售 7 间」、禁止把「行业 Walk=房价×2」当 Fact、禁止发明补偿金额。无取消/No-show 史 → 不给精确超售间夜。价还最低时走 P03，不靠超售补 ADR。

完成定义：今晚程序（停接 / 先赶谁后赶谁 / 盯什么 / 何时停超）+ 顾问十段输出。Walk 成本数字仍 **Need Verification**。

成功标准：用户说「今晚可能赶客怎么办 / 先赶谁 / 还要不要继续超售」→ 本剧能答这三句，且不编金额、不编间夜额度。

---

## 1. 信号（何时进本剧，而不是进 P03/P05）

进入：DTA 已到到达日（通常 0，含当天下午），用户在问 **赶客 / Walk / 超售还开不开**，而不是「还空 20 间要不要降」（那是 P05）。

| # | 必须问 | 没有时 |
| --- | --- | --- |
| I1 | Remaining（物理可售，扣 OOO） | 先让用户给总房−OTB−OOO；给不出则定性「近满/已超」 |
| I2 | 今晚到达清单间夜 vs Stayover | 没有到达/延住拆分 → 不要用总 OTB 当到达 |
| I3 | 已超数（OTB+OOO 相对物理房） | Unknown 就写「可能已超，先当停接」 |
| I4 | 取消 / No-show 史（同 DOW，若有） | **无史 → 不给精确超售间夜** |
| I5 | 会员 / 预付 / 指定套房 / 协议旗标 | 未知则默认「能不赶会员/预付/套房就不赶」 |
| I6 | 本店 Walk 政策 / 补偿（用户给） | **不编金额**；没有就只写安置方向 |
| I7 | 同城可送酒店 | 没有 → Walk 选项 Unknown，更应停超 |
| I8 | DTA（确认真是今晚） | DTA>1 → 先走 `overbook-or-not`，本剧只作预案 |

**不是本剧本：** 价还开着最低档、靠超售冲 OCC → **离开**，P03/P04 先关低价。高取消但 DTA 仍长 → P14 Soft OTB，不是今晚赶客。天气取消潮 → 本剧可停超，完整天气诊断走 P28 `weather-disruption.md`（2026-08-21 22:17 drafted）。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 「满」只是某渠道配额满，全店还厚 | 开/调配额；**不是 Walk** |
| X2 | 一团占位、Wash 未发生 | 按散客到达重算；不按假满赶客 |
| X3 | 维修/OOO 没扣 | 先修分母 |
| X4 | 价仍最低、低价计划还开着 | **先关低价**（P03）。今晚不靠再超一层补 ADR |
| X5 | 取消潮 / 事件取消 / 天气（用户已说） | OTB 当 Soft（P14）；**停超、不涨**；不要在取消潮中加大超售 |
| X6 | 预付不可退已占绝大多数 | No-show 近 0，默认不超；已超则只处理今晚，不往前加 |
| X7 | 无同城可 Walk 且客层以会员/高价为主 | 默认停超；能升级本店高档房则先升，不外送 |

过完仍：到达日、物理可能不够、用户在问赶谁 → 进 §3 今晚程序。

---

## 3. 今晚程序（建议话术，不执行）

价格通常 **不是** 今晚第一杠杆。第一杠杆是库存开关 + 客类选择。

### 3.1 先停接（Stop taking）

```
建议（到达日、已超或未到清单 < 已超额）：
1. 停接当晚新到达（全渠道关当晚可售；已有预订不改条款）
2. 已超额不再加（Sell Limit 收到 0 或物理房，只建议不点后台）
3. 下午起：对未到做 No-show / 晚到确认（运营动作，顾问只提醒）
4. 有空高档房 → 先店内升级，减少外送
```

未到清单仍明显大于缺口：**先等**，到点再决定赶不赶。不要一早就按最坏缺口外送。

### 3.2 先赶谁 / 后赶谁（Best Practice / Hypothesis，不是 S）

公开可核到的机制：**Walk 成本随客类变**；会员/直销通常更高（Cornell Hospitality Quarterly 2023 摘要，Liang & Anderson，**A 题录**，全文本轮未进）。品牌页把「安置+补偿」写进会员承诺（Marriott Ultimate Reservation Guarantee、IHG 信用卡担保网上预订保证，**A Vendor**）——顾问含义：能不赶这些客就不赶。

| 顺序 | 建议 | 为什么（级） | 不要写成 |
| --- | --- | --- | --- |
| **先赶（若必须）** | 低价、非会员、最后预订、OTA/第三方、单晚、灵活可退、预计晚到 | 客类 Walk 成本更低的公开模型假设（A 题录）+ 业界口头「后订先赶」（**B/C**，Hwang & Wen 2009 / Dekay 2004 原文本轮未开 → 标 Hypothesis） | 「OTA 客可以不补偿」——未核中国平台 2026 罚则 |
| **后赶 / 尽量不赶** | 精英/会员号已留、预付不可退、指定套房/房型保证、多晚剩余、协议/直销、家庭与需协助客 | 会员保证页（A Vendor）；预付已收款，外送=退款+安置（Hypothesis）；套房保证是品牌义务（Marriott Plat+ Guaranteed Room Type，不含当天订） | 「会员绝对不能赶」——保证有例外日，以用户品牌政策为准 |
| **禁止作为第一刀** | 已在店延住、已入住、已付预付且无替代店 | 赶走在店客不是超售对冲 | 用降 BAR 解决今晚缺口 |

**本库不输出补偿金额。** 用户有店政策就按其政策写「按店规安置」；没有就写：同城同级或更好、承担交通、第一晚他店房费方向（IHG 公开保证的结构；Marriott 另有会员补偿网格——**不要把 USD/积分抄进中国独立店 SOP**）。中国 OTA 2026 Walk 罚则额度：**Unknown**。

Booking.com 伙伴帮页（2026-08-21 再开，**A Vendor**）：超售仍可能收佣，并要求承担安置；上线不足 30 天或过去 12 个月超售少于 5 次佣金可豁免。这是平台履约，**不是**「今晚赶谁」的排序，也不是可超几间。

### 3.3 盯什么

| 观察 | 含义 |
| --- | --- |
| 未到 vs 缺口（到小时） | 未到仍覆盖缺口 → 再等；未到 < 缺口 → 启动 Walk 预案 |
| 延住申请 | 吃掉次日空房；次日建议超售下调 |
| 24h 取消 | 骤降 → 历史失效，超售收到 0 |
| 客类结构 | 剩余未到若已是会员/预付为主 → 缺口再小也不该再超 |
| 可送店是否还有房 | 没有 → 立刻停外送计划，改店内升级/认缺口 |

### 3.4 何时停超（今晚之后）

```
出现任一条，建议从今晚起停超、下一到达日重评：
- 已经或即将 Walk
- 无取消/No-show 史（本来就不该给间数）
- 取消潮 / 天气 / 刚涨价（历史失效）
- 预付主导
- 无同城可送
- Walk 成本未知 且 客层高会员
- 价还最低（应先关低价，不是超售）
```

重新开超的门：见 `overbook-or-not.md` + 框架 §3.1。仍无分布 + 无 Walk 成本 → **继续不给精确间夜**。

---

## 4. 顾问十段（Situation → Confidence）

套 `decision-framework/advisor-process.md`。今晚场景价格通常不写区间。

```text
1. Situation     Stay Date=今晚。物理剩余 / 到达 / Stayover / 已超 / 客类旗标。口径冲突先写。
2. Diagnosis     真缺口 vs 渠道假满 vs 一团未洗 vs 取消潮。挂 O11。
3. Opportunity/Risk  不停超的上行=少空房；下行=Walk、会员流失、OTA 安置。无史上行不可量化。
4. Recommended Action
     库存：停接当晚到达；已超不再加。
     客类：先赶低价非会员最后预订；后赶会员/预付/指定套房。
     定价：通常不动。价还最低则关低价，不降、不涨。
     渠道：关当晚新订；已有预订不单方面改条款。
     什么都不动：未到仍明显覆盖缺口时先等。
5. Why           空房 vs Walk；客类成本不均；无史不给间数。
6. Expected Impact  定性：降低再超一层的 Walk 概率。禁止伪造「可省 xx 元」。
7. Risk          过早外送；赶错会员；取消潮中继续超；无替代店。
8. What To Watch 未到清单、延住、24h 取消、可送店。
9. Re-evaluation 未到覆盖缺口→撤回外送；未到<缺口→按表赶；取消骤降→超售=0。
10. Confidence   停接+排序方向 Medium；间夜/金额 Low 或不可给。
```

一次只推 1–3 个动作。默认三件套：**停接今晚、排序预案、停往前超**。

---

## 5. 动作表

```text
Stay Date:            今晚 / DTA=0
物理剩余 / 已超:       __ 或 Unknown
到达今晚 / Stayover:   __ / __
取消·No-show 史:      有（哪段）/ 无 → 不给间数
会员·预付·套房旗标:    已知 / Unknown
Walk 政策/补偿:       用户给 / Unknown（不编）
可送酒店:             有 / 无 / Unknown

Decision:
  停接当晚到达:        是 / 否（否的条件：未到仍覆盖缺口）
  先赶:               低价非会员最后预订（OTA/灵活/单晚优先）
  后赶:               会员 / 预付 / 指定套房 / 多晚 / 协议
  继续超售往前:        否（默认）/ 仅当有史+有可送+非会员层仍厚
  幅度:               「今日不给间数」 或 有史才走 overbook-or-not 区间
  定价:               通常不动；价还低 → 关低价不涨不降

Do-not-do:
  - 「行业 Walk=房价×2」当 Fact
  - 「超售 7 间」无史无分布
  - 发明补偿金额 / 2026 中国平台罚则额度
  - 把建议写成已改 Sell Limit / 已帮你赶客
  - 价已最低靠超售补 ADR
  - 高取消仍把 OTB 当硬需求再超
  - 一夜 −15% 当今晚解决方案
  - 价已最高还涨
```

---

## 6. Trigger

| 事件 | 建议 |
| --- | --- |
| 下午未到 < 已超或物理缺口 | 停超，启动 §3.2 排序（建议，不执行） |
| 未到回升 / 出现 No-show | 撤回外送；不要已经送了再找回来除非用户政策如此 |
| 24h 取消骤降或预付占比突然升高 | 超售收到 0–下限 |
| 延住升 | 次日建议超售下调 |
| 发现未洗大团 | 重算，不按满房超、不按满房赶 |
| 可送店也满 | 停外送；店内升级或认缺口 |
| 用户提供 Walk 成本 + 同 DOW 分布 | **才**允许把「要不要超」交回 `overbook-or-not` 给区间；今晚程序仍先停接 |

---

## 7. 如果只能再补 3 个

1. 今晚到达 vs Stayover vs 物理房 vs 已超（四个数缺一就定性）。  
2. 未到清单上的会员 / 预付 / 指定房型旗标。  
3. 同城可送店 + 用户 Walk 政策（有没有补偿规则）。**仍然不要为了填表去编金额。**

有余力：同 DOW 晚取消+No-show（8–12 个样本周）——那是**下一到达日**超售用的，不是今晚魔法间数。

---

## 8. Confidence / 边界 / 兼容

| 判断 | Confidence |
| --- | --- |
| 今晚停接、已超不再加 | Medium（到达日近满的默认） |
| 先赶低价非会员、后赶会员/预付/套房 | Medium 方向；具体名单依用户旗标 |
| 精确超售间夜 / Walk 成本 / 补偿额 | **不给** |
| 中国 OTA 2026 履约罚则 | Unknown |

兼容（不改已有启发式）：

- 无取消/No-show 史不给精确间夜  
- 价已最低先关低价/涨价，不靠超售补 ADR  
- 高取消 OTB = Soft（P14）  
- 不一夜 −15%  
- 价已最高只关不涨  

---

## 9. Simulation（发明店，不是事实）

> **Simulation only.** 店名、间数、名单均为虚构，用来练今晚程序。不得当本库 Fact，不得外推「该超 3 间」。

**东湖示例酒店（发明）** 180 间。分析时刻：到达日 16:00。Stayover 142，到达预订 41，OOO 0 → 若全到则 183 / 180，账面已超 3。取消/No-show 史：**无**。未到 18 间中：OTA 灵活低价最后 6 笔、预付 2、会员号 3、指定套房 1、其余普通直销。用户称 2 公里有协议姊妹店可送。Walk 成本：**Unknown**。价已不是最低档。

建议（只建议）：

1. **今晚停接**新到达；已超不再加。  
2. 16:00–20:00 先盯未到；未到仍覆盖 3 间缺口则先不外送。  
3. 若必须 Walk：先 OTA 灵活低价最后预订；**不要先动**会员 / 预付 / 指定套房。  
4. **不给**「继续超售 x 间」。下一到达日无史仍不给间数。  
5. 补偿额不编；写「按店规 + 姊妹店安置 + 交通」。  
6. 定价不动。

禁止从本仿真读出「行业该超 3 间」或任何 Walk 金额。

---

## 10. 证据（2026-08-21 14:17 CST 核）

| 论断 | 级 | 源 | 打开？ |
| --- | --- | --- | --- |
| 超售对冲 No-show；须管客人影响 | A | eCornell Overbooking Practices（Kimes）课页 | 检索可见；WebFetch timeout。课纲 takeaway 沿用框架 |
| CR=Walk/(Walk+Empty)；教学例 300/100；Walk 成本主观（常客可极高） | B 公开讲法 | eCornell IMPACT，Kimes 2013-04-08 | **curl 打开**。教学例 **不是** 2026 中国成本 |
| 「有的店把 Walk 当空房约 2 倍」 | C/B 口诀 | 同上 | **不得当政策 / 不得当 Fact** |
| 「研究显示 70% 被赶客不愿再来」 | C 教学口述 | 同上，未给原文献 | **不当 2026 中国 Fact** |
| Walk 成本随客类；会员高、非会员低；可主动赶非会员 | A 题录 | Liang & Anderson, Cornell HQ 2023；DOI 10.1177/19389655231179635 | 摘要打开；Sage 全文 Cloudflare **未进**，不摘公式 |
| 超售须基于 no-show / 晚取消历史 | A | HSMAI Academy glossary *Overbooking* | **打开** |
| GM 常因赶客体验而不愿超售；应可按房型/整店调风险 | A | HSMAI + Revenue Analytics *The New RMS* 2021 PDF | **打开** |
| 会员不能履约时：附近安置 + 补偿；须预订时留会员号 | A Vendor | Marriott Bonvoy Elite Benefit Guarantees | **打开** https://www.marriott.com/loyalty/member-benefits/guarantee.mi 。**不把 USD/积分网格抄进本库当独立店 SOP** |
| Titanium/Ambassador 48h 有房保证（付费、标准房、不含奖券/促销价、特殊日除外） | A Vendor | 同上 48-Hour Guaranteed Availability | **打开**。含义：这类预订尽量不当今晚第一赶 |
| 信用卡担保网上预订不能履约：同级店+交通+第一晚含税+退押金 | A Vendor | IHG Book Direct / Reservations Guarantee | **打开** https://www.ihg.com/content/us/en/customer-care/book-with-confidence |
| Hyatt 预付保证页 | — | https://www.hyatt.com/info/booking-guarantee | **未打开**（站点错误页）→ NV |
| Booking 超售：佣金+安置；<30 天或 12 个月<5 次可免佣 | A Vendor | Partner Help | **再开** 2026-08-21 |
| 中国 OTA 2026 Walk 罚则额度 | — | 未核官方页 | **Unknown** |
| 后订先赶 / 单晚先赶 | B/C | 任务指定经典讲法；二手引用 Hwang & Wen 2009、Dekay et al. 2004 | 原文 **未开** → Hypothesis |
| 旅行博客补偿额 / 先赶谁名单 | C/D | TPG / UponArriving 等 | **不当 S**；本轮不采用其金额 |

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-OB-01 | 本店 Walk 成本清单 | 不编；P24 只写程序 |
| NV-OB-03 | 携程/美团/飞猪 2026 履约/Walk 罚则 | Unknown |
| NV-WK-01 | Hwang & Wen 2009 / Dekay 2004 原文排序 | 只用 Hypothesis 排序 |
| NV-WK-02 | Hyatt 官方预付 Walk 页 | 未打开 |
| NV-WK-03 | Kimes「70% 不再来」的原研究 | 不当 Fact |
| P28 | 台风/天气取消潮完整剧本 | **已 drafted**（22:17）过程剧本。取消潮中停超、不涨。天气数字仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 14:17 CST | 首版过程剧本。不写 Walk 成本、不写精确超售间夜、不写补偿金额。配套 `who-to-walk-first.md`。 |
| 2026-08-21 22:17 CST | 交叉 P28（不重写正文）：天气取消潮的停超/不涨走 `weather-disruption.md`。今晚赶客程序仍本剧。 |
| 2026-09-05 16:17 CST | Sell Limit / Channel Sell Limit / Managed OB deepen **evaluated → skip**（S05-14 leftover）。§143 复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + P33/P58/P37。全文 `research-log/2026-09-05-1617-theory-skip-sell-limit.md`。不开 P88。 |
| 2026-09-05 18:17 CST | Sell Limit misread Simulation **C05-18** drafted（`cases/sim-2026-sell-limit-misread-sat.md`）。§144 CASE 指针；闸仍本剧+P33；不推翻 T05-16 skip；不开 P88。 |
| 2026-09-05 20:17 CST | R05-20 sources-recap：§145 新开 Stayntouch Sell Limits + Clock Availability Adjustment + Protel Overbooking Setup（可售闸互补，非 OPERA）。不改三句 / 399 / 799；闸仍本剧+P33。全文 `research-log/2026-09-05-2017-sources-recap.md`。不开 P88。 |

---

## 13. 交叉（2026-08-22 18:17，不改今晚程序）

机组 wash → **P31**。到达日程序仍本剧。若机组块很可能洗掉：**不要**为护一间幽灵机组房去 Walk 已确认散客；先停接，释放后再售。

## 14. 交叉（2026-08-24 14:17，不改今晚程序）

在店续住若会制造 Walk：先在 **P46** `early-departure-stayover.md` **拒或只按公开 BAR** 接，不要先答应再进今晚赶客名单。已经在赶客仍走本剧。Walk 成本数字仍 NV。

## 15. 交叉（2026-08-26 02:17，不改今晚程序）

卖限用的是历史 no-show **预期**。今晚空了几间 no-show **不是**一夜报复砸价或临时改卖限的许可证；定价走 **P54** `transient-noshow.md`（释放后 remaining + Pace）。已经在赶客仍走本剧。Walk 成本数字仍 NV。

P55 last-line（2026-08-26 06:17 CST）：担保/非担保与到点释放走 `guarantee-type.md`；放房前不提前 dump，放房后按真 remaining + Pace。

## 16. 交叉（2026-08-27 14:17，不改今晚程序）

卖过今晚保洁/前台还能翻、还能安全接的到达 = 人手产能超售 → **P63** 先收口；已经在赶客仍走本剧。Walk 成本数字仍 NV。

---

## 17. 交叉（2026-08-27 16:17，不改今晚程序）

卖过今晚可翻到达 = 人手产能超售。Diagnose 尺 → **T-Staff** `../theory/staff-capacity-vs-demand.md`；先收口走 **P63**。已经在赶客仍本剧。Walk $ 仍 NV。


> 指针（2026-09-05 16:17 T05-16，不改正文三句 / 399 / 799）：Sell Limit / Channel Sell Limit / Allowed Overbooking deepen **已 skip**（§143 复核 only）。可售数量闸 ≠ 公开 BAR；Diagnose 仍本剧（+ **P33** / **P58** / **P37** → **P03/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。全文 `research-log/2026-09-05-1617-theory-skip-sell-limit.md`。不开 P88。不开 P89。
> 指针（2026-09-05 18:17 C05-18，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-sell-limit-misread-sat.md`。§144 CASE 指针复述 §143。Diagnose 仍本剧（+ **P33** / **P58** / **P37** → **P03/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-16 deepen **已 skip**。不开 P88。不开 P89。
> 指针（2026-09-05 20:17 R05-20，不改正文三句 / 399 / 799）：§145 新开 Stayntouch Sell Limits（物理+Sell Limit）+ Clock Availability Adjustment（± 可售）+ Protel Overbooking Setup（Max Sell）。Diagnose 仍本剧（+ **P33** / **P58** / **P37** → **P03/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-16 deepen **已 skip**；C05-18 sim 仍可调用。不开 P88。不开 P89。
