# Government / Negotiated Rate｜协议占用份额 / 非协议剩余（Hypothesis，不是 STR Government KPI）

> 卡：`metrics/government-negotiated-rate.md`  
> 类型：Segment mix + 口径诊断  
> Evidence Level：S（STR 只有 Transient / Group / Contract，**无** Government OCC 公式）；A US Fact（GSA $110 **不进本卡公式**）；B / Hypothesis（协议占用份额、付费散客剩余）  
> Source：CoStar STR Glossary「Contract Rooms」「Transient Rooms」「Group Rooms」「Segmentation」；GSA FTR 26-01（只作 US 标签，不进公式）  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（STR 三分）+ Hypothesis（店内协议尺）  
> 配套：`../theory/government-negotiated-rate.md` · `../recommendations/dont-anchor-bar-to-gov-rate.md`  
> 禁止：发明 STR Government OCC / Government MPI；把 GSA $110 写进中国公式；把 480 当限额 Fact；把协议房计成 Comp。

## 定义

指定 Stay Date，按**政务 / 差旅 / government per-diem 合同价**（有房价、有资格围栏）占用的房晚。不是公开 BAR，不是 $0 Comp。

机组合同 → P31 指标，不在本卡计数。永久宿舍 → P37 Available。无关免费 → P47。

## 公式

**STR（S）——不发明第四种 demand type**

```
STR Segmentation     = Transient | Group | Contract
Contract Rooms       = >30 天、无论用不用保证付款的固定块（例：airline crews, permanent guests）
STR 无 Government OCC / Government MPI
```

政务按晚协议 **不要**自动映射成 Contract。块是否保底、是否 >30 天 = 问。报 STAR 时仍进上述三桶之一。

**店内 / 顾问 Hypothesis（须声明，不是 STR）**

```
Gov negotiated RN          = 政务/差旅/per-diem 合同价房晚（有房价）     # 计数
Negotiated occupancy share = Gov negotiated RN / Physical                     # Hypothesis
Paid-transient remaining   = Capacity − occupied − OOO                         # 物理剩余；声明是否已含协议占用
Non-gov remaining          = Paid-transient remaining                          # 若 occupied 已含协议，则此即非协议可卖
PMS OCC (incl. gov)        = occupied / Available                              # 可被协议抬高
```

Need Verification：本店市场码 / 房价码如何标「政务 / 协议 / 政府」；上报 STR 进哪一桶。不编字段名。

GSA $110 **不出现在公式里**。中国限额表 NV，不出现在公式里。仿真 480 只在案例文件。

## 上游

差旅协议、政务码、GSA 资格（美国店）、政府团块、会议定点（目录 NV）。

## 下游

PMS OCC 虚高、公开 BAR 被挤、销售要求 BAR=协议价、前台误标 Comp、周末置换。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| PMS OCC 92%（含政府团）= 该涨 BAR | 先拆非协议 remaining。不按虚高 OCC 涨 |
| BAR 应该等于差旅标准 / GSA $110 | 协议价不是公开 BAR。$110 = US Fact |
| 公务员 = 免费房 | 有房价走本卡。$0 才 P47 |
| 协议房 = STR Contract | 仅当 >30 天保底块。否则常 Transient/Group |
| STR Government OCC | **不存在。** 不要发明 |

## 顾问决策含义

协议占用是 **mix + 置换事件**，不是需求变强到该涨公开 BAR。用户说「政府协议住满了」时：

1. 钉 Stay Date、Physical、协议间数×房价、非协议 Remaining。  
2. 房价是 0 → P47。永久宿舍 → P37。机组 → P31。  
3. 动作可能是 Hold BAR / 建议限额或 blackout / **拒绝 BAR=协议价** / 什么都不改公开价。  
4. 缺协议数 → 问，不编 40 / 480。  
5. 限额表 NV → 不引用城市数字。不写 P48。

## 和 Comp / Crew 指标怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | 有房价的政府/差旅协议房晚份额 + 非协议剩余 |
| `complimentary-house-use.md` | $0 无关免费；Paid OCC |
| P31 机组 | allotment / extra 合同块 |
| P37 inventory | Available 分母（永久 HU / OOO） |
