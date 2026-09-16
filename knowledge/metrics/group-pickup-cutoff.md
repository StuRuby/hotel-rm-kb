# Group Pickup / Cutoff｜Pickup Rooms / Pickup % / Available = Current − Picked up（OPERA 机制，不是中国 SOP）

> 卡：`metrics/group-pickup-cutoff.md`  
> 类型：结构诊断（轻）  
> Evidence Level：A Vendor PMS（OPERA Cloud：Pickup / Pickup % / Available=Current−Picked up；Cutoff Date/Days；Wash 按间或%；须 Allotment Cutoff night audit 才真释放；RETURN BLOCK TO HOUSE）；A（HSMAI Wash / Attrition / Group Slippage **词条，无默认 %**；HSMAI Pick-up or Pace report = **店日 Pace ≠ 团块 allotment pickup**）；B / Hypothesis（已 pickup 后付费剩余 vs 含整块 PMS OCC）  
> Source：Oracle OPERA Cloud 26.2 Managing Block Room and Rate Grid；OPERA Cloud 26.1 Controls — Blocks；HSMAI Academy Glossary Wash / Attrition / Group Slippage / Pick-up or Pace report（均见 `sources/source-map.md` §25）  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（OPERA 字段机制）+ Glossary（HSMAI 词条）+ Hypothesis（店内付费剩余尺）  
> 配套：`../advisor-playbooks/group-cutoff-wash.md` · `../recommendations/dont-dump-before-cutoff.md`  
> 禁止：发明本店 wash% / 10–25% / cutoff 默认天数 / 罚金表；把 50/28/22/499/399/799 写进公式当常模；把 HSMAI Pace report 写成团块 pickup；把厅占用写成客房 OCC。

## 定义

指定 Stay Date，一场**已经在书上的团块**：合同块 Current vs 已 pickup vs cutoff 是否把未 pickup 放回 house。  
**未 pickup 不是已卖掉的需求。** 客房定价看 **已 pickup 后的付费剩余**，不看含整块的 PMS OCC。

接不接团本身 → P10。会带房赢会 → P50。只要厅 → P51。机组 allotment → P31。散客高取消 → P14。

## 公式

**OPERA（A Vendor PMS）——机制，不是中国 SOP**

```
Pickup Rooms     = 块内已有预订的间数
Pickup %         = picked-up / current allocation          # 无默认常模
Available        = Current − Picked up                     # 未 pickup 洞；Open-for-Pickup 时可见
Cutoff Date      = 未 pickup 在 cutoff 当晚从块释放：
                   allotted 减到 = picked-up，Available = 0
                   original 不变，可对照
Cutoff Days      = 到达日前 N 天逐夜释放（不是整块同一夜）
释放前提         = Allotment Cutoff night audit 须激活
                   否则 cutoff 日只作合同/提案参考，库存可不回 house
RETURN BLOCK TO HOUSE = cutoff 后取消/no-show 回 house 或留块（参数）
Wash（PMS）      = 按间或按 % 从 allocation 抽走（能力按钮，不是本店 %）
```

Cutoff Date / Days 是**店设 + 合同**，不是华住默认天数，不是中国 SOP。本卡 **不**写「cutoff = 到达前 14 天」。

**HSMAI 词条（A，不当本店 %）**

```
Wash        = 合同块 vs 预期实际落地（估 no-show / 取消 / 早离）
              不是 % 常模。本店 wash% = NV
Attrition   = 合同：承诺房/厅数量下降可能罚金。金额 NV，不编
Group Slippage = Contract Group Rooms − Actualized Group Rooms
              公式名 Known；不编 10–25%
Pick-up or Pace report = 店日 Pickup/Pace（自上次报告以来的预订）
              ≠ 团块 allotment pickup
```

**店内 / 顾问 Hypothesis（须声明，不是 OPERA 字段名）**

```
Paid remaining after pickup = Capacity − (已 pickup + 其他付费占用) − OOO
PMS OCC (with full block)   = 含未 pickup 合同块的占用 / Available
                              # 假高峰尺，不按这张涨 BAR
Released to house?          = night audit 已跑且 Available_in_block → 0
# 贡献 / 罚金 Unknown 除非用户给合同
```

Need Verification：本店 cutoff 天数、wash%、night audit 是否激活、attrition 条款。不编字段名以外的中国 SOP。

仿真 50 / 28 / 22 / 499 / 399 / 799 只在案例文件，**不进本卡公式当常模**。

## 上游

已在书的团块、销售「还差 22 间要不要降价补」、GM「90% 全是团要不要涨」、cutoff 过了要不要砸、销售「团会来齐先关散客」。

## 下游

cutoff 前 dump 公开 BAR、按合同块 OCC 涨、没真释放就当 leftover、把 BAR 写成团价、关散客等团。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 订了 50 所以 50 间已卖掉 | 只有 pickup 是已有预订。未 pickup 会在 cutoff 回 house |
| PMS 90% 所以该涨 BAR | 合同块抬高占用 ≠ 散客紧。看已 pickup 后付费剩余。形 A |
| 还差 22 间所以 BAR→399 | cutoff 前禁止 dump。房会回 house。形 B |
| cutoff 日过了所以 leftover | 须 night audit 真释放。Available 仍锁 = 形 D |
| 店日 Pace 报告 = 团 pickup | HSMAI Pick-up or Pace report 是店日 Pace，不是 allotment pickup |
| 行业 wash 10–25% | **不编。** 词条无默认 %。本店 NV |
| OPERA Wash 按钮 = 本店该洗掉的 % | PMS 能力，不是启发式 |

## 顾问决策含义

团块 cutoff 是 **库存时钟**，不是「洞要用 BAR 填」。用户说「订了 50 pickup 28 要不要降价补」时：

1. 钉 Stay Date、Physical、块 vs pickup、cutoff 日、night audit 是否真释放、付费剩余。  
2. cutoff 前不 dump。不按团 OCC 涨。  
3. 释放落地后再按 remaining + Pace 走 P01 或 P05。  
4. 缺 wash% / 罚金 → 问合同，不编 10–25%。  
5. 店日 Pace report 不当团 pickup。

## 和邻近指标怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | 团块 Pickup / Pickup % / Available=Current−Picked up；是否真释放 |
| `pickup.md` | 店日 OTB 快照差分（Stay Date 总账），不是单块 allotment |
| `pace.md` | 店日 Pace vs STLY。HSMAI Pace report 落这里，不落团块 |
| `occ.md` | 客房 OCC。不要把未 pickup 合同块当成已卖 Sold |
| `catering-only.md` | 厅占用 ≠ 客房 OCC |
| `meeting-with-rooms.md` | 会带房块 vs 人数；厅 vs 客房拆分 |
| P10 displacement | 接团按日 Displaced。本卡是接团之后 |

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 18:17 CST | 首版。OPERA Pickup / Available=Current−Picked up；须 night audit 才释放。Wash/slippage = glossary，无默认 %。HSMAI Pace report ≠ 团块 pickup。 |
