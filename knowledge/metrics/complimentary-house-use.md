# Complimentary / House Use｜免费房晚 / 付费 OCC / PMS vs STR 缺口

> 卡：`metrics/complimentary-house-use.md`  
> 类型：Inventory + 口径诊断  
> Evidence Level：S（STR Sold 不含无关 complimentary；OCC = Sold / Available）；A（Forward Rooms Booked 可含 Comp / house use）；B / Hypothesis（付费 OCC、Comp 占占用比、PMS 缺口）  
> Source：CoStar STR Glossary「Rooms Sold (Room Demand)」「Occupancy」；STR Historical Benchmarking Data Reporting Guidelines · Reporting Rooms Sold；STR Forward STAR Data Reporting Guidelines · Rooms Booked  
> Source Date / Last Verified：2026-08-24  
> Knowledge Type：Fact（STR 历史口径）+ Hypothesis（店内付费尺）  
> 配套：`../theory/complimentary-house-use.md` · `../recommendations/dont-raise-on-comp-occ.md` · `occ.md` · `adr.md`  
> 禁止：把 Hypothesis 尺写成 STR 公式；编中国 PMS 字段名；编 Comp % 常模；永久 HU 当本卡（→ P37）。

## 定义

指定 Stay Date，有人占用但房费为 0、且 **不是** 促销/合同送夜 的房晚。含员工、业主、FAM、临时自用、按 complimentary 处理的业主占用 condo。

促销买二送一、团 50 送 1 = **STR Sold**，不是本卡计数对象。

永久员工公寓 / Permanent House Use 连续约 6+ 个月 = **P37 / Available 分母**，不是本卡。

## 公式

**STR（S）——不另发明 Occupied 公式**

```
STR Rooms Sold      = 产生收入的房晚（含促销/合同送夜；不含无关 complimentary；不含 No-show）
STR OCC             = Rooms Sold / Rooms Available
STR ADR             = Room Revenue / Rooms Sold     # 分母本就不含无关 Comp
```

**Forward（A）——不是历史 Sold**

```
OTB OCC（Occupancy on the Books）= Rooms Booked / Adjusted Rooms Available
Rooms Booked 可含 Complimentary、house use、owner-occupied（若已从 Adjusted 扣掉）
```

**店内 / 顾问 Hypothesis（须声明，不是 STR）**

```
Unrelated Comp RN     = 无关免费 + 临时自用 + FAM + 业主占用-当-comp     # 计数
Physical occupied     ≈ Paid stayover/arrivals + Unrelated Comp RN + promo-free nights
Paid OCC              = (Physical occupied − Unrelated Comp RN) / Available      # Hypothesis
PMS vs STR OCC gap    = PMS OCC − STR OCC                                       # Hypothesis
Comp share of occupied = Unrelated Comp RN / Physical occupied                    # Hypothesis
Paid ADR              = Room Revenue / (Occupied − Unrelated Comp RN)            # Hypothesis
Remaining physical    = Capacity − occupied − OOO
```

Stayover + arrivals 操作流量见 `../overbooking/overbooking-framework.md` §1。不要把上面 Physical occupied 写成「STR Occupied」。

Need Verification：本店 PMS「免费 / 自用 / 招待」字段名；OCC 是否把它们算进占用；上报 STR 是否已剔除。

## 上游

业主/员工政策、FAM、补偿房、销售请客房、促销合同送夜（另一桶）、永久关房（P37）。

## 下游

PMS OCC 虚高、STR OCC 相对较低、混 ADR 被 $0 分母拉低、物理 Remaining 变薄、MPI 混口径、Forward OTB% 虚高。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| PMS OCC 92%（含 Comp）= 该涨 BAR | STR Sold 不含无关免费。先拆 Comp。不按虚高 OCC 涨 |
| ADR 掉了 = BAR 太低 / 该补涨 | 可能 Comp 进了占用分母。重算付费 ADR / 用 STR ADR。不要为修报表砍或涨 |
| Comp 占着 = leftover，该 dump | 物理剩余已经减过。P05 只砸付费空房 |
| 买二送一赠夜也不该进 Sold | STR **计入**促销/合同送夜 |
| Forward OTB% = 历史 OCC | Forward Booked 可含 Comp；历史 Sold 不含 |
| 经理公寓 8 个月 = 本卡 | **P37** Permanent House Use |

## 顾问决策含义

Comp 是 **库存占用 + 口径事件**，不是需求变强。用户说「OCC 已经 92%」时：

1. 钉 Stay Date、Physical、无关 Comp 间数、Sold 口径（PMS vs STR）。
2. 重算 Paid OCC、付费 Remaining、Pace（P01/P03/P45）。
3. ADR 先看分母有没有 $0 房。
4. 动作可能是 Hold BAR / 不 dump / 劝当晚少送免费（Hypothesis）/ **什么都不动价**。
5. 缺 Comp 数 → 问，不编 10。

转到：`../theory/complimentary-house-use.md` · `../recommendations/dont-raise-on-comp-occ.md` · 问题树 §53。

## 适用 / 限制

- 适用：已发生日口径拆分；OTB 日问 Forward 是否含 Comp。
- 限制：不含量价弹性；Comp % 无行业常模；政府价不是 complimentary（剧本未写）。
- 中国 PMS 字段名 **NV**。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 16:17 CST | 首版。STR Sold 不含无关 Comp；Hypothesis 付费 OCC / 缺口 / 占占用比。不写 P47。 |
