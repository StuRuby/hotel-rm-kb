# Inventory｜Available / Sold / Remaining / OOO

> 卡：`metrics/inventory.md`  
> 类型：Inventory  
> Evidence Level：S（STR Available/Sold）；B（Remaining/OOO 店内）  
> Source：CoStar Glossary；STR Historical Benchmarking Data Reporting Guidelines  
> Last Verified：2026-08-20

## 定义

| 名 | 定义 |
| --- | --- |
| Available | 计入供给的房晚 |
| Sold | 计入需求的已售房晚 |
| Remaining | 还能卖的房晚 |
| OOO | 当日因故障/维修等不可售 |

## 公式

```
STR Available = 报告房量 × 天数          # 短期 OOO 不扣（S）
STR Sold     = 产生客房收入的房晚        # 不含无关免费房；No-show 不计 Sold（S）
PMS Available = Physical − OOO − ?      # Need Verification
Remaining    ≈ Available_to_sell − OTB Sold   # 超售可为负
```

STR：临时停用 < 约 6 个月不减报告可用房；永久撤房改房量；整店关 >1 日历月走 Temporary Closed。

## 上游

房量、工程、装修、渠道配额、关房、超售限额、预留。

## 下游

所有比率的分母；能否接团；超售安全垫。

## 常见误读

- 物理 300 间 = 当日可售 300（忽略 OOO 与配额）。
- Remaining=0 = 市场卖光（可能只是该渠道关了）。
- 店内 OCC 用扣 OOO 的分母，去对不扣 OOO 的 STR Comp。

## 顾问决策含义

先修库存事实，再谈价格。库存没开、配额为 0、房型关错，降价不会产生 Pickup。Remaining 很少时优先保护而不是促销。

---

## Diagnose / Advise（2026-08-23 00:17 追加，不改上面 S 公式）

STR vs 店内（定价前先对这一张）：

| 尺 | 分母 | 短 OOO / 临时装修 | 用来 |
| --- | --- | --- | --- |
| STR Rooms Available（历史） | 报告房量 × 天数 | **不扣**（S，Guidelines 2026-08-23 打开；<约 6 个月） | Comp / MPI / 上报 STAR |
| PMS Available（B） | 常 Physical − OOO − 部分自用 | **常扣**（须声明；中国字段名 NV） | 店内 OCC |
| Available_to_sell / Remaining | 还能卖的 | 必须扣不可售；超售可为负 | **P03 / P05 / 当晚 BAR** |
| Forward Adjusted Rooms Available | 还能被订的 | Forward 页 **排除 OOO / 翻新**（A） | OTB%，不是历史 Comp |

**Diagnose**

- OCC 好看 + OOO 实质 → 误诊 A：假 High Demand。重算 `STR OCC = Sold / Physical` 与 `Remaining = Available_to_sell − Sold`。
- 空房厚 + 维修/自用/锁在里面 → 误诊 B：假 Low Demand。先划掉不可售。
- 本店 PMS OCC vs STR Comp → 分母不同则那几个点不作 MPI。

**Advise**

- 不自动按 PMS OCC Increase BAR；不按物理空房 dump。缺 OOO 数 → 问，不编 20。
- 长期关房：问是否走官方房量变更（Hypothesis），不是秘密按少 20 间改 BAR。
- 理论：`../theory/capacity-ooo.md`。卡：`../recommendations/dont-price-off-ooo-occ.md`。
- 中国「维修/停用/锁定」报表名 **仍 NV**。


---

## Remaining=0 vs 拒单（2026-08-24 00:17）

Remaining=0 是库存事实，不是「赶过人」故事。口头拒客要日志才作 Unconstrained 旁证：[`denials-regrets.md`](denials-regrets.md)。限制关死造成的 Remaining=0 先走 P33。


---

## Diagnose / Advise｜钟点 Sold vs 过夜 Remaining（2026-08-24 08:17，不改上面 S 公式）

**声明：** 真 STR Day Use（6pm 前离 + 非已发布/协议价）不当该段 rooms sold。卖进具体档的白天房 **进** 该段 Sold；同日再卖 OCC 可 >100%（S）。USALI 更正：纯 Day-Use **不进** Sold（A）。本店 PMS 钟点进不进 Sold = **问，NV**。

P03 Remaining := **过夜可售 − 过夜 Sold**。钟点 extra Sold 不是过夜占用（交回了就不扣过夜剩余）。不要用含钟点的 Sold 去减库存当过夜剩余。

对标：一边含 day-use Sold、STR Comp 不含 → 那几个点不作 MPI。

顾问句：钟点再卖会把 OCC 抬高，过夜剩余可能一点没紧。

理论：`../theory/day-use-inventory.md`。卡：`../recommendations/dont-raise-overnight-off-dayuse-occ.md`。剧本 P44（不重写）。
