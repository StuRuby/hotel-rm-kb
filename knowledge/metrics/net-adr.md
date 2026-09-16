# Net ADR / Commission / CAC / Net Revenue

> 卡：`metrics/net-adr.md`  
> 类型：Distribution & contribution  
> Evidence Level：A（COPE 定义）；B（店内净价草案）；S（STR 对批发净额/OTA 总额的报告规则）  
> Source：HSMAI Academy「COPE Revenue」；Kalibri 公开方法；STR Reporting Guidelines（gross vs net 报送）  
> Last Verified：2026-08-20  
> Knowledge Type：Vendor Methodology + Best Practice  
> 无单一官方 Net ADR 公式 → 每次声明成本集合

## 定义

| 名 | 定义 |
| --- | --- |
| Commission | 合同中介费 |
| CAC | 为获得预订付出的获取成本（清单制） |
| Net Revenue | Gross Room Revenue − 已声明获客成本 |
| Net ADR | Net Revenue / Sold |
| COPE | Hotel collected − 直接预订成本（佣金、渠道/交易、积分、consortia 等） |

## 公式（草案，必须声明）

```
Net Revenue = Room Revenue − Commission − 渠道/支付费 − 可归属广告 − （可选）积分成本
Net ADR     = Net Revenue / Sold
CAC/晚      = 上述成本 / Sold
COPE        = Collected Revenue − Booking Costs     # HSMAI/Kalibri（A）
```

STR 报送不是这套：批发与 pay-when-booked 已报净；pay-later 报毛。不要把 STR ADR 当 Gross。

## 上游

渠道组合、费率、优待计划、广告、支付方式。

## 下游

渠道取舍、是否参加促销、团队净贡献、GOP。

## 常见误读

- Gross ADR 高的渠道更赚钱。
- 直销 CAC=0（漏广告、引擎、支付、会员折扣）。
- 关 OTA 省 15% 佣金（可能丢掉全部增量间夜）。
- Net ADR = 利润（未扣变动经营成本）。

## 顾问决策含义

渠道和促销用 Net 排序；报价对比用「客人价 / 酒店毛收 / 净收」三列。成本清单不全时标 Unknown，仍可先用佣金近似，并写明低估了直销成本。

---

## 交叉（2026-08-22 08:17）

Net ADR **不是**利润（正文已写未扣变动经营成本）。下一刀：`theory/profit-contribution.md` — Contribution = 净价 − **用户**变动成本。缺变动成本仍可按净排序（P20），但不得说 499「总比空着强」。穿底 → `recommendations/do-not-sell-below-contribution.md`。佣金% 仍 NV。
