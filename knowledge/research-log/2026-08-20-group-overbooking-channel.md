# Research Log｜2026-08-20 Group / Overbooking / Channel / 房型差

> 时区：Asia/Shanghai  
> 任务：Wave5 Group Displacement、Overbooking、Channel 净收益、房型差、P10 / P04  
> 检索日：2026-08-20

---

## 1. 打开并采用

| 源 | 用途 | 级 | URL | 结果 |
| --- | --- | --- | --- | --- |
| Cloudbeds Displacement analysis | 置换定义；`ET + Group − Capacity`；肩日/佣金/Lead time | B Vendor | https://www.cloudbeds.com/hotel-group-business/displacement-analysis/ | **打开**。采用公式骨架与「不并发则不必算挤占」。不抄美元例当中国事实。 |
| Hospitality Net displacement explainer | 总收入、不确定散客 | B | https://www.hospitalitynet.org/explainer/4131455/how-to-conduct-an-effective-hotel-displacement-analysis | 检索采用。与 Cloudbeds 互证。 |
| eCornell Overbooking Practices | 超售 + 评团为课主题（Kimes） | A | https://ecornell.cornell.edu/courses/hospitality-and-foodservice-management/overbooking-practices-in-hotel-revenue-management/ | 课页检索可见；不摘讲义。 |
| Cornell catalog SHA534 / SHA774 | 超售；Displacement and Negotiated Pricing | A 课纲 | catalog.cornell.edu 2025–26 | 主题级。不摘作业。 |
| eCornell IMPACT 超售比 | CR = Walk/(Walk+Empty)；教学例 300/100 | B 公开讲法 | https://ecornell-impact.cornell.edu/the-cheapest-and-best-approach-to-overbooking/ | 检索可见；WebFetch **timeout**，只用搜索已见的 CR 骨架与口诀标签，不补未核段落。 |
| Talluri 2004 书目 | Overbooking / Capacity 主题 | S 书目 | https://link.springer.com/book/10.1007/b139000 | **不摘正文、不编页码** |
| Cornell HQ 2023 Walk 分客类 | 题录 | A 题录 | https://doi.org/10.1177/19389655231179635 | 未打开全文。 |
| Booking.com Partner Help 佣金 | 佣金看合同，无全球单一 %；超售收佣+安置 | A Vendor | https://partner.booking.com/en-us/help/commission-invoices-tax/commission/understanding-our-commission | **打开 2026-08-20** |
| 新华社 2026-07-25 携程反垄断 | 独家 + 全网最低价；罚没 51.79 亿；退储备金 1.22 亿 | A 通讯 | https://www.news.cn/fortune/20260725/bbff2c78684640589c150e4a483b0532/c.html | **打开**。**不是**超售额度。协会/业主口述佣金 **不采用为官方费率** |
| 人民网转总局通报 | 同案交叉 | A 转载 | http://finance-app.people.cn/n1/2026/0725/c1004-40767832.html | 检索交叉 |
| samr.gov.cn 北京约谈 12 平台 2026-03-23 | 强制促销、全网最低、罚款限流 | A | https://www.samr.gov.cn/zt/ndzt/2025n/zhzznjsjzwhgpjzsczx/gzdt/art/2026/art_93ff64f2acdf4e46b661381481da0e55.html | 检索可见。**不是** Walk 间夜公式 |
| OPERA Sell Limit | 正超售字段 | A Vendor | 已在 Wave4 打开 | 复用 |
| `metrics/net-adr.md` COPE | 净额声明制 | A | 本库 | 复用 |
| Octorate 房型名 | 「无外部法定阶梯」方法 | C | https://www.octorate.com/types-of-hotel-rooms/ | 采用方法，**不采用其 % 表当 Fact** |

---

## 2. 打不开 / 不采用

| 项 | 处理 |
| --- | --- |
| eCornell 讲义 / IMPACT 全文 timeout | 不引用未核段落；CR 仅用检索已见骨架 |
| 总局处罚决定书官网全文 | 新华社打开；决定书页 **Need Verification** |
| 携程/美团/飞猪/同程 2026 官方佣金表 | **未找到** → 全标 Need Verification，**不写 %** |
| 博客：携程 15–22%、美团 4.5–8%、抖音 5% 等 | C/D，丢弃 |
| 新华社引协会 12–18%、业主「收费 40%」 | 投诉语境 C，不当官方卡 |
| 「Booking=15%」当政策 | 官方帮页明确随国家/协议而变，不写死 |
| Expedia/Agoda 官方单一 % | 未找到 → NV |
| Walk 成本行业值、教材页码 | 不编 |
| 「2026 平台超售不得超过 N 间」 | **未核到** → Unknown，不当政策 |
| 会议媒体压缩夜 ADR +20–40% | D/个案，不采用 |
| 升级价=公开差 30–50% 作高峰规则 | C，仅弱日讨论锚 |

---

## 3. 写入本库的 Hypothesis（待 feedback）

- 置换按日；高峰夜单独 NetDelta；LOS 肩日额外置换。  
- 团价讨论地板相对 BAR 70–85%（品牌红线优先）。  
- 超售无分布：期望晚取消+No-show−延住的 50–100%，首选偏保守。  
- CR 教学骨架可用；Walk=空房×2 不得当政策。  
- 房型差：Sup +8–15%、Dlxe +15–25%、Exec +20–35%、Suite +40–80% 相对 Base。  
- Early Sellout：DTA≥8 且 OTB 已 80–85%+ 或中位 DTS < DTA×0.5；85%/DTA21/799 默认关+档 B。  
- 与旧尺兼容：+8–15%、围栏 −3–5%、不一夜 −15%、价已最高只关不涨、Peak MinLOS=2、Sellout 先关低价再涨、留尾 20–30%。

---

## 4. 资产清单（本轮新写）

- `group/group-displacement.md`  
- `overbooking/overbooking-framework.md`  
- `channel/net-contribution.md`  
- `pricing/room-type-differential.md`  
- `recommendations/accept-reject-group.md`  
- `recommendations/overbook-or-not.md`  
- `recommendations/fix-room-type-inversion.md`  
- `advisor-playbooks/group-evaluation.md`（P10）  
- `advisor-playbooks/early-sellout.md`（P04）  
- `cases/sim-2026-group-50x500-vs-transient-800.md`  
- 本日志  

未写：P05 Last Minute、P18 中国 OTA 促销、P20 渠道净价剧本、P24 完整 Walk 剧本、P34 完整差价剧本（已有决策卡与理论卡）。佣金 %、Walk 金额、平台超售额度仍 NV/Unknown。

---

## 5. 修订

| 时间 | 内容 |
| --- | --- |
| 2026-08-20 14:55 CST | Wave5 核源并落文件。 |
