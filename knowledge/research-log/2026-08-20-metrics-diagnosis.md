# Research Log｜2026-08-20 Metrics + Diagnosis（T3 / T5）

> 时区：Asia/Shanghai  
> 任务：首次初始化 Task 3 Revenue Metric Tree、Task 5 Revenue Problem Tree  
> 核对日：2026-08-20

## 1. 做了什么

- 写 `metrics/metric-tree.md`：库存 / 业绩 / 预订 / 预测 / 对标 / 分销 / 利润，以及因果图。
- 写 9 张指标卡（要求至少 6）：OCC、ADR、RevPAR、OTB、Pickup、Pace、Inventory、MPI-ARI-RGI、Net ADR。
- 写 `diagnosis/problem-tree.md`：16 主枝 + 任务书三十二节 OCC 低鉴别树。
- 公开口径用 WebSearch / WebFetch 核 STR/CoStar Glossary、STR Historical Benchmarking Data Reporting Guidelines、STR Competitive Set Guidelines、Forward STAR 说明、HSMAI COPE、Kalibri 公开方法。未整段摘录教材。

## 2. 核对过的官方 / 准官方来源

| 源 | URL | 用到的口径 | 级 |
| --- | --- | --- | --- |
| CoStar STR Glossary | https://www.costar.com/products/str-benchmark/resources/glossary | OCC、ADR、RevPAR、MPI、ARI、RGI、TRevPAR、GOPPAR、LOS、Rooms Available/Sold、Fair Share | S |
| STR Historical Benchmarking Data Reporting Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines | Room Revenue 含排除；Sold 不含无关免费房；No-show 不计 Sold；Available 短期 OOO 不扣；批发净额 / pay-later 总额 | S |
| STR Competitive Set Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/competitive-set-guidelines | Comp Set 最低家数与关联限制（顾问只记「须合规」，细则以页面为准） | S |
| STR Forward STAR Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines | 未来日 Occupancy on the Books、Pickup、Adjusted Rooms Available（与历史 STAR 分母不同） | A |
| CoStar 文章 Occupancy / historical KPIs / TRevPAR / GOPPAR | costar.com STR Benchmark resources | RevPAR=OCC×ADR 的管理解释；TRevPAR/GOPPAR 公式复述 | S/A |
| HSMAI Academy Glossary COPE | https://academy.hsmai.org/glossary/cope-revenue/ | COPE = collected − booking costs | A |
| Kalibri 公开 COPE RevPAR | kalibrilabs.com | COPE RevPAR = (Room Revenue − Acquisition Costs) / Available | A |

未打开、未当公式源：任何付费教材正文、USALI 全书页码摘录、单家酒店内部 RMS 白皮书未公开公式。

## 3. 关键公式（已进树，可调用）

```
OCC     = Sold / Available
ADR     = Room Revenue / Sold
RevPAR  = Room Revenue / Available = OCC × ADR
MPI     = (Occ_subject / Occ_group) × 100
ARI     = (ADR_subject / ADR_group) × 100
RGI     = (RevPAR_subject / RevPAR_group) × 100
TRevPAR = Total Revenue / Available
GOPPAR  = GOP / Available
```

行业实践（非 STR 历史官方式，已标 B）：

```
Pickup_N     = OTB_today − OTB_{today−N}
Pace_vs_STLY = OTB_now(DTA=d) − OTB_STLY(DTA=d)
Lead Time    = Stay Date − Booking Date
Net ADR      = (Room Revenue − 已声明获客成本) / Sold   # 草案
```

## 4. 关键误读（必须留在顾问嘴里）

1. OCC 低 ≠ 该降价。先走鉴别树 11 问。
2. OTB 70% 没有 DTA/曲线/组合，不能判断好坏。
3. OTB 是位置，Pickup 是速度，Pace 是相对曲线的快慢。
4. 店内 PMS OCC（常扣 OOO）≠ STR OCC（短期 OOO 不扣）。
5. STR ADR 对批发/pay-when-booked 已是净额，对 pay-later 是总额，不是纯 Gross。
6. Gross ADR 高 ≠ 渠道健康；Net ADR ≠ 利润。
7. 100% OCC ≠ 需求=供给（未约束需求）。
8. 平均 Lead Time 会掩盖「团队很长 + 散客很短」。
9. RGI 100 只是相对该 Comp Set 的公平份额，Comp 选错指数就废。
10. Forecast ≠ Budget；满房后的 100% 预测是受限预测。

## 5. 未决口径 / Need Verification

| ID | 问题 | 为何未决 | 顾问暂用 |
| --- | --- | --- | --- |
| NV-01 | 本店 PMS Available 是否扣 OOO / 自用 / 维修 | 店不同 | 先问分母，对标用 STR |
| NV-02 | 本店 Pickup 是净额还是毛新订；tentative 是否进 OTB | 系统字段 | 默认确认净额，tentative 单列 |
| NV-03 | 本店 Pace 日期对齐还是星期对齐 | 无内部标准 | 节假日按节，其余先星期对齐并声明 |
| NV-04 | Net ADR 成本清单（是否含积分、广告、支付） | 无官方统一公式 | 每次列出；最低只扣佣金并声明低估 |
| NV-05 | 变动成本清单（贡献用） | 未拿到店 P&L | 团队/低价决策用 Net ADR 排序 + Unknown |
| NV-06 | USALI 12 对 OOO 扣减的精确会计句 | 未引用全书 | 只采用 STR 报告规则谈对标 |
| NV-07 | 中国本地对标（盈蝶等）指数是否与 STR 同公式 | 未核产品文档 | 写出「相对哪个集合」，不假设叫 MPI |
| NV-08 | Forward STAR Adjusted Availability 与店内 Remaining 的逐项映射 | 未登录样本 | 不把 Forward OCC 和历史 STAR OCC 直接比 |
| NV-09 | Day use 造成 OCC>100% 时店内是否与 STR 一样处理 | 未看本店夜审 | 提到日用房时单独问 |
| NV-10 | GOP 到 GOPPAR 的 GOP 是否含管理费 | USALI 结构：GOP 在管理费之上 | 按「经营 GOP / Available」，不要用净利润 |

## 6. 明确没做 / 不编造

- 没有编造「标准 Pickup 门槛」（如每天应 +X 间）。
- 没有编造弹性系数或「降 50 元涨 Y 点 OCC」。
- 没有摘录教材段落。
- Playbook 正文未写，只在问题树挂了未来名字。

## 7. 对顾问行为的立即约束

用户说「入住率低」→ 打开 `diagnosis/problem-tree.md` §1，按排除项提问。  
用户说「已经订了 70%」→ 打开 `metrics/otb.md`，补 DTA/曲线/组合。  
用户只给 OCC → 指标树 §9 最小诊断包。
