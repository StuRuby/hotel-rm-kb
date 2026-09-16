# Research Log｜2026-08-20 Comp Set / 需求信号 / RM 日常

> 时区：Asia/Shanghai  
> 任务：Wave6 Comp Set、外部需求信号、RM 日常方法、不跟价 / citywide 卡、P05/P11/P12/P15/P16/P17  
> 检索日：2026-08-20

---

## 1. 打开并采用

| 源 | 用途 | 级 | URL | 结果 |
| --- | --- | --- | --- | --- |
| CoStar STR Glossary | Comp Set 定义；MPI/ARI/RGI；Fair Share；MICE Lead 叙述 | S | https://www.costar.com/products/str-benchmark/resources/glossary | **打开**。无 Compression Night 词条。 |
| CoStar 中文术语表 | 中国产品译名仍用 MPI/ARI/RGI | S 产品译名 | https://www.costar.com/zh-cn/chn/products/str-benchmark/resources/glossary | **打开**。**不是** 中国政府另发指数。 |
| Competitive Set Guidelines | 4 家 / 3 非关联 / 2 公司 / 50%·70% / 多套差 2 / 90 天 | S | https://www.costar.com/products/str-benchmark/resources/guidelines/competitive-set-guidelines | **打开** |
| Building a Comp Set Best Practices | 不要只选对面；class/房量/会议；9 因子模型未列全 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/building-comp-set-best-practices | **打开**（2021-05-12）。9 因子名单 **NV** |
| CoStar FAQ | Performance Set = primary Competitive Set；Occupancy on the Books | A | https://www.costar.com/products/str-benchmark/resources/faqs | **打开** |
| HSMAI APAC Revenue Meetings Guide | 周会四组件 ≤60min；先市场后本店；月度 +365 日 | A | https://connect.hsmai.org/asiapacific/resources/articles-and-whitepapers/revenuemeetingsguide | **打开**（Buckhiester） |
| HSMAI VoRM 2021 PDF | On-property vs Cluster；策略会工时；override ~39% | A 调查 | https://americas.hsmai.org/wp-content/uploads/sites/16/2021/02/VoRM_HSMAI_ZS_Main-Deck-v.f-1.pdf | 检索采用。**2021，不当 2026 定额** |
| HSMAI Recovery Connections 多店 | Central/Cluster 沟通 | B/C | https://americas.hsmai.org/insight/recovery-connections-winning-with-multi-property-revenue-management/ | 实践会谈 |
| Hospitality Net 压缩分层 | >85 / >90 / >95 讨论锚 | B | https://www.hospitalitynet.org/news/4126628.html | 非 STR 官方门槛 |
| STR 数据评论（LinkedIn 转述） | compression nights >90% OCC | B/C | 检索摘要 | Glossary 无此词，不当 S |
| 经济观察网 2026-04-30 | 演唱会周边酒店；辐射约 2 公里叙述 | C | http://www.eeo.com.cn/2026/0430/858788.shtml | 个案，不当公里真理 |
| 中国证券报 2026-08-07 | 跨城观演、票根经济 | C | https://www.cs.com.cn/xwzx/01/2026/08/07/detail_2026080710029881.html | 需求存在的旁证 |
| 12306 | 高铁售票系统存在 | Fact 系统 | https://kyfw.12306.cn/otn/leftTicket/init | **打开**。无酒店门槛 |
| 环球旅讯 MPI 文 | 指数组合决策；RGI 极端或选错套 | B/C | https://www.traveldaily.cn/article/175619/ | 线索，不当 80/120 真理 |
| 本库已有启发式 | +8–15%、围栏 −3–5%、不一夜 −15%、价已最高只关不涨、MinLOS=2 只盖 Peak、Sellout 先关低价 | 内部 | Wave2–5 | 兼容，不另起尺 |

---

## 2. 打不开 / 不采用

| 项 | 处理 |
| --- | --- |
| STR 9 因子完整名单 | **NV**，不编 |
| 中国政府同名 MPI 产品 | **未找到**。只确认 CoStar 中文用同名 |
| 航班客座→酒店 OCC 官方映射 | **NV**，不写门槛 |
| OTA 搜索指数官方门槛 | **未找到**，不写 |
| 12306 热度官方酒店指标 | 无 |
| Peaqplus / LinkedIn「30 分钟 Routine」 | **C**，不进必做表 |
| YouTube RM day-in-the-life | **C**，不引步骤当规律 |
| 「3KM 黄金住宿」OTA 洞察 | **C**，问距离不套阈值 |
| 会议媒体压缩夜 ADR +20–40% | 前轮已丢弃，本轮仍不采用 |
| Primary/Secondary/Aspirational 当 STR 官方三分 | **否**。STR 是 Performance Set + 自建多套 |

---

## 3. 写入本库的 Hypothesis

- 七维选 Primary；日报价只认 Primary 可订价。  
- 不跟：Pace On/Ahead + Pickup 未塌 + 无假 citywide。80 元先换 %，<8% 默认噪声。  
- Citywide：≥2 家 Primary 满 + 本店旁证；不用中国官方 90%。  
- Last minute：72h 围栏 / 24h 档 H 有截止日期 / 6h 默认认栽。  
- 周末带相对周中 +5–8% 或 +8–15%；周五限制要 Peak 证实。  
- 周中 DTA≥7 禁止提前砸 BAR。  
- Forecast Miss：先 overlay 再动价。  
- 战争：只跟曝光层，不跟自杀价。

---

## 4. 资产清单（本轮新写）

| 路径 | 说明 |
| --- | --- |
| `market/comp-set.md` | 七维；三分非官方；竞对价是信号；MPI 引用不重写 |
| `demand-signals/signal-framework.md` | 12 信号四维；未知 NV |
| `theory/rm-daily-routine.md` | 日循环；日会/周会/策略会；Cluster；映射 Brief |
| `recommendations/ignore-comp-undercut.md` | 不跟 |
| `recommendations/citywide-compression.md` | 城市压缩 |
| `advisor-playbooks/last-minute-unsold.md` | P05 |
| `advisor-playbooks/weekend-compression.md` | P11 |
| `advisor-playbooks/weak-weekday.md` | P12 |
| `advisor-playbooks/competitor-sellout.md` | P15 |
| `advisor-playbooks/price-war.md` | P16 |
| `advisor-playbooks/forecast-miss.md` | P17 |
| `cases/sim-2026-comp-cut-pace-not-behind.md` | Simulation 不跟 |
| `research-log/2026-08-20-comp-market-daily.md` | 本文件 |

---

## 5. 未决（下一轮）

- P18 中国 OTA 促销 / P21 节假日连住 / P22 会展肩日 / P32 完整剧本（卡已可调用）  
- P13 房型压缩 / P14 取消 / P19–P20 / P33  
- STR 9 因子名单；中国逐日市场 OCC 公开源  
- 航班/搜索官方门槛（保持 NV）  
- VoRM 2026 新调查（仍用 2021）
