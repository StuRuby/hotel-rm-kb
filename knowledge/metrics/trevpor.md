# TrevPOR｜Total Revenue per Occupied Room

> 卡：`metrics/trevpor.md`  
> 类型：Profit / Total Revenue KPI（每间**已售**房带走的全店收入，非客房定价中枢）  
> Evidence Level：S（STR Glossary 定义与公式）  
> Source：CoStar STR Glossary「Total Revenue Per Occupied Room (TrevPOR)」  
> Last Verified：2026-08-22  
> Knowledge Type：Fact  
> 树位置：`metric-tree.md` §7.2 对照；§12 索引  
> 拼写：STR 写作 **TrevPOR**（v 小写）。业界亦见 TRevPOR；本库跟 STR。勿与 TRevPAR 混。

## 定义

全部经营收入摊到每一间**已售**房：客房 + 餐饮 + 其他营业部门 + 杂项（以 STR Total Revenue 为准）。  
衡量的是「住进来的人带走多少全店收入」，不是「每间可供房效率」。

比 ADR 宽：ADR 只含 Room Revenue / Sold。  
比 TRevPAR 窄在分母：TRevPAR 用 Available（含空房），TrevPOR 用 Sold。

## 公式

```
TrevPOR = Total Revenue / Rooms Sold
```

STR Glossary（S，2026-08-22 打开）：`Total Revenue / Rooms Sold = TrevPOR`。  
Total Revenue = rooms + F&B + other departments + miscellaneous（Glossary「Total Revenue」条）。

**与 TRevPAR / RevPAR 恒等（同一窗、同一口径）：**

```
TRevPAR = OCC × TrevPOR          # 同 Total Revenue、同 Sold、同 Available
RevPAR  = OCC × ADR              # 同 Room Revenue、同 Sold、同 Available
```

例：OCC 70%、TrevPOR 1,200 → TRevPAR 840。分母口径必须与 OCC 一致。

## 上游

客房收入；F&B / 会议 / 停车 / 水疗等；杂项费；Sold 口径（须与 ADR 同窗；不含无关免费房）。

## 下游

ancillary 强度；团队「低房价高消费」结构；与 TRevPAR / GOPPAR 联读。  
**不是**日常 BAR 涨降的第一指标。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| TrevPOR 高 = 酒店好 | OCC 低时少数人花得多，TRevPAR / 客房机会成本仍可能差 |
| TrevPOR = ADR | ADR 只有房费；TrevPOR 含各部门 |
| TrevPOR = TRevPAR | 分母 Sold vs Available |
| TrevPOR = RevPOR（网络用法） | Investopedia 等把 RevPOR 写成 Total/Occupied；STR 正式名是 TrevPOR。对标用 STR 名 |
| 用 TrevPOR 当晚改 BAR | 空房的机会成本不在这个分母里 |
| TrevPOR 升 = 利润升 | **不含费用**；利润看 GOPPAR |
| 有限服务 vs 全服务硬比绝对值 | STR：全服务 F&B 占 Total >5%，有限服务 <5%；结构不同 |

## 顾问决策含义

- 问「住客还花不花钱 / 低房价团餐高不高」→ TrevPOR 是**结构**尺，仍要这笔团的贡献数字才能接/拒。  
- TrevPOR 高、TRevPAR 低 → 先查 OCC / 空房，不要当成「全店已经很好所以客房可以便宜卖」。  
- 日常「今晚 BAR」→ 仍先 RevPAR / Pace / Pickup。  
- 禁止伪造「TrevPOR +¥40」无依据精确数。  
- 禁止用店均 TrevPOR 替代置换草表。

转到：`trevpar.md` · `goppar.md` · `theory/total-revenue-management.md`；metric-tree §12。

## 证据

| 论断 | 级 | URL / 源 |
| --- | --- | --- |
| 定义与公式 | S | https://www.costar.com/products/str-benchmark/resources/glossary |
| Total Revenue 含各部门与杂项；TRevPAR 不含费用 | A | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-trevpar-and-why-it-important |
| 全服务 vs 有限服务 F&B 占比阈值（>5% / <5%） | S | Glossary「Full Service Hotel」「Limited Service Hotel」 |

## Need Verification

| ID | 问题 |
| --- | --- |
| NV-TPOR-01 | 用户报表「已售」是否含免费房 / day use（会抬或压 TrevPOR） |
| NV-TPOR-02 | 包价是否已拆到各部门（未拆则 TrevPOR 与 ADR 双计风险） |
| NV-TR-01 | 同 TRevPAR：全店收入含税/服务费否 |
