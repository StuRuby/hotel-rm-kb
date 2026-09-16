# Group Status / Inventory Deduct｜Definite 扣 vs Tentative 不扣（Vendor 映射，不是中国 SOP）

> 卡：`metrics/group-status-inventory.md`  
> 类型：结构诊断（轻）  
> Evidence Level：A Vendor RMS inbound（IDeaS groupblocks：Definite / Strong Tentative → DEFINITE **扣库存**；Tentative / Hold → TENTATIVE **不扣**；Prospect / Weak Tentative 不扣；Cancel 不扣 — `sources/source-map.md` **§28 指针**）；A Vendor PMS（OPERA Cloud 26.2：INQUIRY / NON DED INV 不扣；DED INV 扣；CANCEL 放回 house；OPERA 5.6 例 Definite 扣、Tentative 不扣 — **§29 新开**；店配码名，不是华住字段表）；B / Hypothesis（真 remaining vs 含暂定画面 OCC）  
> Source：IDeaS Developers Group Blocks（§28）；Oracle OPERA Cloud 26.2 Block and Catering Event Statuses；OPERA 5.6 Status Codes（§29）  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（Vendor 映射/状态类型）+ Hypothesis（店内真 remaining 尺）  
> 配套：`../advisor-playbooks/definite-vs-tentative.md` · `../recommendations/dont-raise-on-tentative-occ.md`  
> 禁止：发明华住 暂定/确认 字段表；把 IDeaS/OPERA 名写成中国 SOP；把 40/50/399/799 写进公式当常模；编 wash% / 10–25%；把厅占用写成客房 OCC。

## 定义

指定 Stay Date，一张**已经挂着的团块**：状态是 Definite 还是 Tentative / Hold，以及**会不会从可售里扣掉**。  
**不扣库存的暂定不是已经卖掉的需求。** 客房定价看 **真 remaining**，不看含未扣暂定的画面 OCC。

接不接团本身 → P10。已扣库存的 Definite pickup vs cutoff → P52。会带房赢会 → P50。只要厅 → P51。机组 → P31。散客高取消 → P14。

## 公式

**IDeaS inbound（A Vendor RMS — 映射，不是中国 SOP，不是华住字段）**

```
Definite / Strong Tentative → DEFINITE    # 扣库存
Tentative / Hold            → TENTATIVE   # 不扣库存
Prospect / Weak Tentative   → 不扣
Cancel                      → 不扣
```

标 **Vendor**。有本店 IDeaS 才对照。没有则问用户这张块会不会从可售扣掉。

**OPERA（A Vendor PMS）——状态类型，不是中国 SOP，不是华住字段表**

```
INQUIRY / NON DED INV  = 不从可售扣 allocated rooms / function space
DED INV                = 从可售扣
CANCEL                 = 放回 house
# OPERA 5.6 文档举例（不是强制码名）：
#   Definite status code → 扣库存
#   Tentative status code → 不扣
#   Cancel status code → 放回
# 码名（TENT / DEF 等）是店配。本店 PMS 状态名 = NV。
```

**店内 / 顾问 Hypothesis（须声明，不是 OPERA/IDeaS 字段名）**

```
Deducts_t               = 这张块会不会从可售里扣掉     # 问用户；Vendor 对照不是 SOP
True_remaining_t        = Capacity − (已扣库存占用 + 其他付费占用) − OOO
                          # 不扣库存的暂定不算已卖
Screen_OCC_with_tent    = (含未扣暂定画面占用) / Available
                          # 假高峰尺，不按这张涨 BAR
# 本店 PMS 状态名 = NV。不编华住 暂定/确认 表
# 本店 wash% = NV。不进本卡
```

Need Verification：本店状态码名、华住字段、IDeaS 是否按 inbound 扣、wash%。不编字段名以外的中国 SOP。

仿真 40 / 50 / 399 / 799 只在案例文件，**不进本卡公式当常模**。

## 上游

已挂的暂定/确认块、销售「暂定占了 40 间要不要涨」、GM「OCC 看起来很满」、销售「先锁暂定别卖散客」、销售「反正是暂定 dump 399」。

## 下游

按暂定画面涨公开 BAR、关 BAR 给 Hold、dump 399「反正是暂定」、把 Strong Tentative 当弱暂定继续卖。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 暂定占了 40 所以 40 间已卖掉 | 不扣库存则仍可卖。只有 Definite / Strong Tentative（IDeaS）或 DED INV（OPERA）才扣 |
| 画面 OCC 满所以该涨 BAR | 暂定画面 ≠ 散客紧。看真 remaining。形 A |
| 先锁散客给 Hold | 未转 Definite、不扣库存 ≠ 已卖。形 B |
| 反正是暂定所以 BAR→399 | 未扣库存本来就可卖 BAR。形 C |
| 「暂定」一律能卖 / 当弱 | IDeaS Strong Tentative **扣库存**。形 D → P52 |
| OPERA TENT/DEF = 华住 SOP | **不外推。** 本店名 NV |
| 行业 wash 10–25% | **不编。** 本店 NV。本卡不写第二本 wash |

## 顾问决策含义

团状态是 **库存扣不扣**，不是「画面忙所以涨」。用户说「暂定占了 40 间要不要涨」时：

1. 钉 Stay Date、Physical、Definite vs Tentative、会不会扣库存、真 remaining。  
2. 不扣则不按画面 OCC 涨，不关公开 BAR 给 Hold。  
3. 扣了（含 Strong Tentative）走 P52。接不接走 P10。  
4. 缺本店字段名 → 问扣不扣，不编华住表。  
5. IDeaS / OPERA 只 Vendor 对照，不是中国 SOP。

## 和邻近指标怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | 团块状态：扣库存 vs 不扣；真 remaining vs 画面 OCC |
| `group-pickup-cutoff.md` | 已扣库存块的 Pickup / Available=Current−Picked up；是否真释放。P52 |
| `pickup.md` | 店日 OTB 快照差分，不是单块状态 |
| `pace.md` | 店日 Pace vs STLY |
| `occ.md` | 客房 OCC。不要把未扣库存的暂定当成已卖 Sold |
| `catering-only.md` | 厅占用 ≠ 客房 OCC |
| `meeting-with-rooms.md` | 会带房块 vs 人数 |

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 22:17 CST | 首版。IDeaS 扣/不扣标 Vendor RMS inbound。OPERA DED INV vs NON DED INV。本店 PMS 名 NV。wash% NV。40/50/399/799 不进公式。 |


---

## 理论卡指针（2026-08-26 00:17 追加，不改上面公式）

Diagnose 尺见 `../theory/group-inventory-deduct.md`（T-Status）。暂定画面满了不是客房已卖掉；先问扣不扣。本卡公式不改。40/50/399/799 仍不进公式当常模。wash% 仍 NV。不写 P54。

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 00:17 CST | 文末指针：T-Status 理论卡 drafted。公式不改。IDeaS/OPERA 仍 Vendor，不是华住 SOP。 |
