# OCC｜Occupancy｜入住率

> 卡：`metrics/occ.md`  
> 类型：Performance KPI  
> Evidence Level：S（公式）  
> Source：CoStar STR Glossary「Occupancy (Occ)」  
> Source Date / Last Verified：2026-08-20  
> Knowledge Type：Fact（公式）+ Best Practice（用法）

## 定义

指定窗口内，可供房晚中已售出的比例。STR：Percentage of available rooms sold during a specified period.

## 公式

```
OCC = Rooms Sold / Rooms Available
```

- STR（S）：Sold 不含无关免费房；Available = 报告房量 × 天数，短期 OOO 不扣。
- 店内 PMS（B）：常 `Sold / (Physical − OOO)`。必须声明。
- 未来日：OTB OCC = OTB Rooms / Available。不是最终 OCC。

Need Verification：本店 PMS「可售」是否扣 OOO、维修、自用、渠道关闭。

## 上游

需求强度、价格、限制、库存是否开放、渠道开关、产品/口碑、竞对供给、活动、天气、分母（OOO）。

## 下游

RevPAR（= OCC × ADR）、变动成本、GOP、超售与满房风险、MPI。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| OCC 低 = 降价 | 可能 DTA 还长、Pace 正常、库存没开、价并不高、市场都弱 |
| OCC 高 = 成功 | 可能低价早售罄，RevPAR / GOP 更差 |
| OCC 升 = 需求升 | 分母因 OOO/关房变小 |
| 100% = 需求=供给 | 真实需求可能更高（unconstrained） |
| 渠道 OCC 当全店 | 配额不是物理房 |
| PMS OCC 高（因为 comps）= 涨 BAR | STR Sold 不含无关免费房；PMS 在店 OCC 可能含。先拆 Comp/临时自用。不按虚高 OCC 涨。见 `complimentary-house-use.md` / `dont-raise-on-comp-occ.md` |
| 厅满了所以涨客房 BAR | 厅占用不进客房 OCC；看 transient remaining。见 `catering-only.md` / `../recommendations/dont-raise-bar-on-full-hall.md` / `../theory/function-space-occupancy.md` |
| 暂定团把 OCC 打满所以涨 BAR | 先问扣不扣库存；不扣则看真 remaining。见 `group-status-inventory.md` / `../recommendations/dont-raise-on-tentative-occ.md` / `../theory/group-inventory-deduct.md` |
| 做不完房 / remaining 厚所以弱 → dump | 可能是人手吞吐顶，不是 leftover。先拆 Physical vs Staff-turnable。见 `sellable-vs-staff-cap.md` / `../recommendations/dont-dump-when-staff-capped.md` / `../theory/staff-capacity-vs-demand.md` |

## 顾问决策含义

OCC 是结果不是杠杆。用户说「入住率低」时：

1. 钉 Stay Date、DTA、Available 口径。
2. 看 Pace 与曲线，不是看绝对 OCC。
3. 拆 ADR、Remaining、库存开关、竞对、事件。
4. 动作可能是定价 / 开库存 / 改限制 / 改渠道 / **什么都不动**。

转到问题树：`diagnosis/problem-tree.md` → OCC Low。

## 适用 / 限制

- 适用：单日、多日、细分、对标（须同口径）。
- 限制：不含量价权衡；高变动成本店不能只追 OCC。

---

## Diagnose / Advise（2026-08-23 00:17 追加，不改上面 S 公式）

OCC 公式仍是 `Sold / Available`。会变的是 **Available 是哪一个**。

| 用户原话 | 先做什么 | 不要做什么 |
| --- | --- | --- |
| OCC 已经 92%，要不要再涨 | 问 Physical 与 OOO。PMS 扣了维修则 92% 偏乐观 | 自动 Increase BAR |
| 还剩 40 间空着，今晚砸一刀 | 问 40 里几间真能卖 | 按 40 dump；一夜 −15% |
| 对标 Comp 高 8 个点 | 问 Comp 是不是 STR（短 OOO 不扣） | 用混口径 MPI 当涨价令 |

顾问句：OCC 好看先问分母，维修房砍掉的不是需求变强。

转到：`../theory/capacity-ooo.md` · `../recommendations/dont-price-off-ooo-occ.md` · 问题树 §42。


---

## 口头满房 / 赶客（2026-08-24 00:17，不改 S 公式）

OCC=100% 仍可能低估需求（截断）。**前台说赶过人** 不进 OCC，也不是自动涨价令。要日志：[`denials-regrets.md`](denials-regrets.md) · [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md)。0 拒单 ≠ 需求弱。


---

## Diagnose / Advise｜钟点再卖 OCC>100%（2026-08-24 08:17，不改上面 S 公式）

100% 仍可能是截断（真实过夜需求更高）。**另一件事：** STR 允许同日再卖后 OCC **>100%**（机组白天编进段再卖晚班）。那多出来的点是 **分子多计了一次白天**，不是过夜更紧。

| 用户原话 | 先做什么 | 不要做什么 |
| --- | --- | --- |
| OCC 已经 108%，今晚是不是该再涨 | 问 108 里几间是钟点/同日再卖。重算过夜 OCC 与过夜 Remaining | 自动 Increase 过夜 BAR |
| 比 Comp 高几个点 | 问两边 day-use 进不进 Sold | 混口径 MPI 当涨价令 |
| 钟点卖很火所以过夜也该涨 | 过夜剩余 := 过夜可售 − 过夜 Sold（P03）。交回的钟点不占过夜剩余 | 把混 OCC/ADR 当过夜强度 |

顾问句：OCC 过 100% 先问是不是白天钟点又卖了晚班，不是自动再涨过夜价。

USALI 12e GFC 更正：纯 Day-Use **不进** Rooms Sold/Occupied（A）。与 STR「同日再卖可 >100%」分子规则 **冲突则照记**，不发明调和。中国 6pm 营业线 **NV**。

转到：`../theory/day-use-inventory.md` · `../recommendations/dont-raise-overnight-off-dayuse-occ.md` · P44 · 问题树 §50 追加行。


---

## Diagnose / Advise｜暂定画面 OCC（2026-08-26 00:17，不改上面 S 公式）

暂定把画面打满 ≠ 客房已卖掉。先问这张块从可售里扣不扣。不扣则看真 remaining + Pace，不按画面 OCC 涨 BAR。

转到：`../theory/group-inventory-deduct.md` · `../recommendations/dont-raise-on-tentative-occ.md` · P53 · 问题树 §59。


---

## Diagnose / Advise｜放房点之前的 hold 掺高 OCC（2026-08-26 08:17，不改上面 S 公式）

| 误读 | 实际 |
| --- | --- |
| OTB 120 画出来的 OCC 很高 → Increase BAR | **放房点之前的 OTB 是混合量**：一部分已承诺需求，一部分是到点会释放的非担保 / hold。占不占可售由本店把该 reservation type 配成 **Deduct 还是 Non-Deduct** 决定（OPERA = **Vendor PMS、store-configured**，4 PM / 6 PM 只是厂商示例，不是中国放房点）。不按这张混合 OCC 涨；也不因「反正会放」提前 dump。**Rolling No Show** 若开着，画面可继续占用而无真实到店 → 问本店控制。放房**之后**才按真 remaining + Pace 走 P01 / P05 |

转到：`../theory/guarantee-release.md`（T-Guar）· `../recommendations/dont-dump-on-nonguaranteed.md` · P55 · 问题树 §62。本店类型 / Deduct 映射 / 放房时点 / Rolling 均 **NV**。
