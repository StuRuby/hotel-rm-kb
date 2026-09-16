# Research Log｜2026-08-27 02:17 · P60 Channel Manager / 映射错价 / 误推低价

> 路径：`research-log/2026-08-27-0217-mapping-misprice.md`
> 时区：Asia/Shanghai
> 槽：Hour 2 ∈ {2,10,18} = **CASE / PLAYBOOK**
> 日期：**2026-08-27 02:17 CST**
> 主题：**P60** `advisor-playbooks/channel-mapping-misprice.md` — 错推低价不是市场价格；先隔离错码/修映射，不要把 Brand.com 对齐到 bug。00:17 theory hour 明确拒绝规定本槽（「不要规定 P60」= theory 不得指定）；本案例槽核实 T11「CM 映射错价 / 误推低价」缺口后开。P01–P59 不重写正文（仅指定文末一行）。
> 纪律：Advisor-First：不操作 PMS / RMS / OTA extranet / channel manager / Brand.com，不自动改价。不发布网站。不 git commit。不 SendMessage。不开 P61。不编美团映射 SOP、本店 CM 字段名当中国 Fact、华住 SOP、佣金%、弹性、Walk $、退改表。399 从未推荐。399 = 错误价 + 被拒绝的 dump。799 仅 Hypothesis/Simulation。

---

## 1. 本轮打开 / 复用

WebSearch 两次 + WebFetch 三次（限额「一两张」新官方页；第三张为 Cloudbeds 对照，Cloudflare 拦）。Last Verified **2026-08-27**。P59 / T-Parity / P36 / P58 tech-map 指针不当新发现。

### 本小时新开

| 源 | 结果 | 等级 |
| --- | --- | --- |
| SiteMinder Help Platform · Map your room rates to a channel | **打开。** 平台 room rate 必须映射到渠道 room rate，才能收发库存与预订。每条渠道价型（standard / package / derived / linked）须映射到**一条**平台价。断映射 / Disconnect **只停平台侧更新**，渠道侧该价仍可卖，须在渠道 extranet 关或删。未映射或错配可导致超卖或漏单。若接 PMS/RMS/CRS，还须在 Connectivities 映射，否则更新不同步。UI 字段是该厂商的，**不是**美团/华住/本店 SOP | A **Vendor CM** |
| SiteMinder · Channel mapping: Full guide for hotels | **Cloudflare 拦 WebFetch**；不当核页。搜索摘要不当事实 | 未核页 |
| Cloudbeds Help · Advanced Channel Rates / Sync Rate Plans to OTAs | **Cloudflare 拦 WebFetch**；不当核页 | 未核页 |

URL（打开）：

- https://help-platform.siteminder.com/en/articles/8885873-map-your-room-rates-to-a-channel

搜索词：`SiteMinder channel manager room rate mapping official help 2026` · `Cloudbeds channel manager rate mapping stop sell official documentation` · `OPERA channel mapping room rate stop sell official` · `Derbysoft hotel rate mapping official`

### 已开指针（不当新发现）

| 源 | 节 | 用在哪 |
| --- | --- | --- |
| Booking How parity works / EU DMA | §40 | 真破平仍 P59；本剧不管管辖罚则 |
| HSMAI Rate Parity / Narrow | §41 | T-Parity 指针；错价不是合同窄条款形态 |
| SiteMinder SiteConnect FAQ release→Stop Sell | §38 | 关桶机制；本剧对象是价码映射不是切房 |
| P36 可比清单 / P20 净价 / P18 促销闸 / P42 前台 | 既有 | 路由 |

### 未抓 / 未采用 / 禁止

```
美团 / 携程 映射 SOP / 后台字段名     禁止发明，NV
华住 映射 SOP                         禁止发明，NV
本店 CM 字段名当中国 Fact             禁止发明，NV
错价单退改表 / 佣金% / 弹性 / Walk $  禁止发明
OPERA Cloud channel mapping 专页      检索可用，本小时未开（Priority 1 已拿到 SiteMinder Help）
Derbysoft 映射专页                    未开
SiteMinder r/channel-mapping          Cloudflare 拦，未重锤
Cloudbeds Advanced Channel Rates      Cloudflare 拦，未重锤
P61                                   不开、不写
```

---

## 2. 写了什么

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| **P60 剧本** | `advisor-playbooks/channel-mapping-misprice.md` | **created / drafted** |
| **主卡** | `recommendations/dont-match-error-rate.md` | **created / active** |
| **轻指标** | `metrics/live-vs-intended-rate.md` | **created**（无默认容忍） |
| **Simulation** | `cases/sim-2026-cm-misprice-sat.md` | **created**（180/14/399/799；399 = 错误价 + rejected dump） |
| 源表 §42 | `sources/source-map.md` | **appended**（SiteMinder Help 打开；营销页/Cloudbeds 拦） |
| 问题树 §67 | `diagnosis/problem-tree.md` | **appended** |
| 进度 C27-02 | `curriculum/progress.md` | **appended**（T27-00 / C26-22 / R26-20 / T1–T12 未改） |
| 知识地图 T11 + X-TECH | `curriculum/knowledge-map.md` | **appended**（P60 指针；本店 CM 字段 / 映射 SOP NV） |
| BACKLOG | `advisor-playbooks/BACKLOG.md` | **appended** P60 after P59；header P01–P60 |
| 研究 backlog | `backlog/research-backlog.md` | **appended**（P60 drafted；下一槽 04:17 = sources/recap，**不规定 P61**） |
| README | `README.md` | **appended**（8.1 场景 + 8.2 索引 + 8.3 启发式 + 8.4） |
| metric-tree | `metrics/metric-tree.md` | **appended** 指针 |
| 文末一行 | P59 · P36 · P18 · P42 · P05 · P16 · P34 · T-Parity | **last-line only** |
| 本 log | `research-log/2026-08-27-0217-mapping-misprice.md` | **created** |

**未做：** 不开 P61；不重写 P01–P59 正文；不编映射 SOP / 字段名 / 退改表 / 佣金 / %；不把 399 写成推荐 BAR 或清市场价；不发布、不 commit。

---

## 3. 卡立了什么（一句话 + 杠杆序）

**一句话：** 错推低价不是市场价格；先停错码、修映射，不要把 Brand.com 对齐到 bug。

杠杆序：先问线上这个价是不是本打算卖的（房型码 / 价格码 / 促销开关 / CM 映射）→ 确认错价则建议停错码 / 修映射（顾问不点；并提醒断映射≠渠道下架）→ 意图 BAR Hold 779–799 首选 799 → 已订错价单问本店（NV，不编退改）→ 修好后再按真 Pace 走 P01 或 P05 → 破平假警报走 P60 不是 P59；不可比走 P36；前台不跟走 P42。

三句原样见剧本 §0 与主卡。

---

## 4. 仿真标题

180-room city hotel, Saturday: Pace Ahead, remaining 14, intended BAR 799. CM mapped 标准大床 to the wrong rate code; Meituan shows 399 flexible. E-commerce wants Brand.com → 399 because "it's already selling / we can't break parity / we can't pretend we didn't see it." Advise: Hold Brand.com 779–799 prefer 799; close/fix the bad mapping first; do not treat 399 as the clearing price; after the fix, still Ahead → P01 Hold. 399 = rejected dump AND the error price. 799 Hypothesis/Simulation.

---

## 5. 边界

| 邻卡 | 分工 |
| --- | --- |
| **P59** | 可比、本打算卖的公开灵活价，OTA 故意/促销更低 → 修便宜侧为 *价平*。P60 = 便宜侧是**错误**；第一刀是隔离错码，不是价平辩论 |
| **P36** | 截图不可比。P60 在发现映射之前可能看起来像 P36；确认错推走本剧，确认只是口径走 P36 |
| **P18** | 选择报名促销。P60 = 促销/测试价**误开**，不是报名闸 |
| **P42** | 前台不跟 OTA dump。P60 加一句：错价也不是前台口价 |
| **P05** | 真弱夜。错价成交不是 Pace 信号；修好后才评 |
| **P16** | 竞对 undercut。P60 是本店渠道事故 |
| **P34** | 房型梯故意倒挂。P60 是映射/技术，不是产品梯 |
| **P58** | 切房合同桶。不是价码映射 |
| **T-Parity** | 渠道价差不是 Brand.com 按钮。错价是分销完整事故，仍开不了官网砍价门 |

---

## 6. Compatibility check

对照 P59 / P36 / P18 / P42 / P05 / P16 / P34 / P58 / T-Parity。**结论：无真矛盾，无 needs_revision。** 没有任何既有剧本的 Advise 因本剧改变。P59 三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com **一字未改**（仅文末一行指针）。

| 对照 | 那张说什么 | P60 说什么 | 判定 |
| --- | --- | --- | --- |
| **P59** | 真破平：先问同一产品；修便宜侧；不砍官网。Hold 779–799 首选 799。399 = rejected dump | 便宜侧若是**错误**（错映射/错码/误开），第一刀是隔离，不是「修侧=价平辩论」。Hold 同一带。399 仍 rejected，且是错误价 | **兼容。** P59 的「纠映射」是真破平路径里的侧修；本剧把「确认是错价」独立成过程。路由：错误 → P60；故意可比 undercut → P59 |
| **P36** | shop 不可比 ≠ 跟价令 | 映射错可能先看起来不可比；确认错推走 P60，确认只是口径走 P36 | **兼容。** 不抢可比清单 |
| **P18** | 报不报促销 | 误开/忘关不是报名；报名闸仍 P18 | **兼容** |
| **P42** | 前台不跟 OTA dump | 错价更不能跟 | **兼容且更严** |
| **P05** | 真弱夜 bounded | 错价不是 leftover 燃料；修好后 Ahead 仍 Hold；真弱理由写 Pace | **兼容。** 不放宽 P05 入口 |
| **P16** | 竞对价格战 | 本店错推 ≠ 竞对 | **兼容。** 误入移交 |
| **P34** | 房型差价/倒挂 | 映射事故不是故意梯 | **兼容** |
| **P58** | 切房桶 | 价码映射 ≠ 配额 | **兼容** |
| **T-Parity** | 尺不是按钮；修便宜侧/映射；00:17 写「不写 P60」 | 本槽是案例小时，核实缺口后开；T-Parity 正文不改；错价仍开不了 Brand.com 门 | **兼容。** 「不要规定 P60」= theory 槽序，不是永久禁写。文末一行交接 |

另外核对：`cases/sim-2026-cm-misprice-sat.md` 的 14/399/799 **只出现在 Simulation**；**399 写成错误价 + 被拒绝的 dump，从不是推荐 BAR**；799 标 Hypothesis / Simulation。live-vs-intended 公式无默认容忍。

**没有发现任何真冲突，因此没有任何资产被标 `needs_revision`。**

---

## 7. 仍 NV（本剧不代答）

| ID | 项 | 处理 |
| --- | --- | --- |
| NV-MAP-01 | 本店 CM 字段名 / 映射表 | 问；不编美团/华住 SOP |
| NV-MAP-02 | 活价对应哪条价码 / 促销开关 | 问 |
| NV-MAP-03 | 渠道侧断映射后是否仍可订 | 问；SiteMinder 只证明「可能仍开」 |
| NV-MAP-04 | 已订错价单怎么处理 | 问本店政策；不编退改表 |
| NV-MAP-05 | 今夜公开 Pace / Pickup / Remaining | 问；错价尺开不了这个门 |
| 沿用 | 佣金% / 弹性 / Walk $ / 默认容忍 % / 华住 SOP | **仍 NV，禁止发明** |

---

## 8. 下一槽

下一槽 **04:17 = sources / recap hour**。**不规定 P61。** 不要把 **P60 列为「下一轮要写」— 已 drafted。** 不要开 P61。不要重写 P01–P60 正文。
