# Sellable vs Staff Cap｜账面 remaining vs 今晚能翻/能接的到达（无默认间/人；SOP NV）

> 卡：`metrics/sellable-vs-staff-cap.md`
> 类型：过程计数（轻）
> Evidence Level：B / Hypothesis（店内可交到达 vs 账面 remaining）；A Vendor PMS 指针（OPERA Dirty/Clean/Inspected/Pickup ≠ OO — `sources/source-map.md` §48，机制不是本尺公式）；A 协会指针（AHLA 保洁/前台短缺 — §48，US，不是间/人常模）
> Source：店内 HK 班次/任务单与 PMS remaining（字段名 NV）；OPERA Housekeeping Board 清洁状态 vs OO/OS
> Source Date / Last Verified：2026-08-27
> Knowledge Type：Hypothesis（店内吞吐尺）+ Fact（Vendor：Dirty ≠ OO — 机制，不是中国 SOP）
> 配套：`../advisor-playbooks/staff-capacity-constraint.md` · `../recommendations/dont-dump-when-staff-capped.md`
> 禁止：发明默认间/人、华住做房 SOP、分钟/间中国 Fact、wage、Walk $；把 22/12/399/799 写进公式当常模；把维修 OOO 直接当本尺。

## 定义

指定 Stay Date（或当日班次窗）：

- **Physical remaining**：物理还在、账面还能卖的房晚（已扣用户声明的 OOO；维修口径走 P37 / T06）。
- **Staff-turnable arrivals**：今晚 HK（及如需要的前台接待）**还能安全翻/接**的到达间数。来自用户：已排几班、最晚进房、任务单剩余。**无默认间/人。**
- **Deliverable remaining（可交房）**：今晚能交钥匙的房 ≈ 已干净/已检 + 班次内还能翻完的到达。字段名 **NV**。
- **Gap**：Physical remaining − Staff-turnable arrivals。Gap > 0 且用户确认是人手/翻房 → **产能顶**，不是 leftover。

本店人效 / 班次 SOP / 分钟/间 = **NV**。不编字段名。不写「行业 X 间/人」。

## 公式

**店内 / 顾问 Hypothesis（须声明）**

```
Physical_remaining_t     = 账面还能卖（声明是否已扣 OOO）
Staff_turnable_arrivals  = 用户给的今晚还能翻/还能安全接的到达
                           # 问：能翻几间、最晚进房几点、已排几班
Deliverable_remaining    = 可交房（干净/已检 + 班次内可翻完）
Gap_cap                  = Physical_remaining_t − Staff_turnable_arrivals
# Gap_cap > 0 → 产能顶候选（再问是人手还是维修）
# 无默认 rooms/attendant
# 仿真 22/12 只在案例文件
# 本店人效 / 华住做房 SOP = NV。不编
```

Need Verification：本店任务单如何计数到达 vs 续住；最晚进房；Dirty/Pickup/Inspected 报表名。不编华住 SOP。

## 上游

HK 任务单/班次、最晚进房承诺、PMS remaining、房态（Dirty vs OO）、到达名单、钟点开量（P44）。

## 下游

是否收口可售、是否误 dump BAR、是否卖过产能（P24）、是否误入 P37/P05。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| remaining 22 = 今晚都能交 | 若只能翻 12，可交是 12，不是 22 |
| 做不完 = 该夜弱 | 产能顶；Ahead 时更不是 P05 |
| 没有行业间/人就不能管 | 无默认间/人。先问今晚能翻几间 |
| 降价可「少卖点」 | 便宜到达仍耗翻房 |
| Dirty = OOO | Dirty 仍在库存（OPERA）；OO 才离线 → P37 |
| 把本尺当 leftover | leftover 走 P05；理由是 Pace，不是 Gap_cap |

## 顾问决策含义

1. 先要 **Staff_turnable_arrivals**（或班次/最晚进房）；没有 → NV，条件化，不编间/人。  
2. Gap_cap > 0 且 Pace Ahead → **Hold BAR** + 收口到达；不要 dump。  
3. Gap 大 ≠ 许可证把 BAR 降到 399。  
4. 先拆维修（P37）再谈人手。  
5. 本店人效缺 → **NV**；问，不编。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 14:17 CST | 首版。Hypothesis 账面 vs 可翻到达；无默认间/人；SOP NV。 |

---

## 交叉（2026-08-27 16:17，不改公式）

Diagnose「为什么产能顶 ≠ 弱需求、砍价不增翻房产能」→ **T-Staff** `../theory/staff-capacity-vs-demand.md`。过程仍 P63。本尺公式 / 无默认间/人 **不改**。
