# Reinstate Rate Gap｜恢复后过账价 vs 当前 BAR（件数 + ADR gap；无默认 %；政策 NV）

> 卡：`metrics/reinstate-rate-gap.md`
> 类型：过程计数（轻）
> Evidence Level：B / Hypothesis（店内 Reinstate 过账价 < 当前 BAR）；A Vendor PMS 指针（OPERA 原价不可用须选新组合 — `sources/source-map.md` §52，机制不是本尺公式）
> Source：店内 PMS 取消/Reinstate 日志（字段名 NV）；OPERA Reinstate 机制指针
> Source Date / Last Verified：2026-08-27
> Knowledge Type：Hypothesis（店内恢复价差尺）+ Fact（Vendor：原价不可用可迫选新价 — 机制，不是中国 SOP）
> 配套：`../advisor-playbooks/cancel-reinstate-old-rate.md` · `../recommendations/dont-reinstate-below-current-bar.md`
> 禁止：发明默认 Reinstate% / 华住 SOP / 罚金% / 佣金%；把 14/599/399/799 写进公式当常模；把取消再订新单直接当本尺（那是 cancel-rebook-gap）。

## 定义

指定 Stay Date（或当日班次窗）：

- **Reinstate**：同一预订记录从 Cancelled（或等价状态）恢复为可住/已确认。
- **Posted_rate_after**：恢复后过账房价。
- **Current_BAR**：恢复时刻公开灵活 BAR（店内口径）。
- **Gap**：Current_BAR − Posted_rate_after（>0 表示低于当前 BAR 的恢复）。

本店 Reinstate 是否必须带原价 = **NV**。不编字段名。

## 公式

**店内 / 顾问 Hypothesis（须声明）**

```
Reinstate_count_t     = 窗内同记录恢复件数（或间夜，声明口径）
Below_BAR_count_t     = 其中 Posted_rate_after < Current_BAR 的件数
Gap_i                 = Current_BAR_i − Posted_rate_after_i   # 仅对 below 样本
# 无默认 %。不写「行业 X% 取消会 Reinstate」
# 仿真 14/599/799 只在案例文件
# 本店 Reinstate 政策 = NV。不编
```

Need Verification：本店如何标记 Reinstate；是否自动带历史价；罚金是否过账。不编华住 SOP。

## 上游

取消日志、Reinstate 动作、房价码、公开 BAR 变动。

## 下游

ADR 稀释、稀缺夜机会成本、是否 dump 399 安抚、未来是否收窗（P38）。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 系统写回旧价 = 必须认 | 回写是操作结果；定价权在政策/顾问建议 |
| 没有行业 % 就不能管 | 无默认 %。先数 below-BAR 件数与 gap |
| 认旧价可「留客」 | Ahead 用过期价占稀缺；训练取消再回来 |
| 把本尺当 cancel-rebook | 新单走 cancel-rebook-gap / P62 |
| 把本尺当 leftover | leftover 走 P05；理由是 Pace |

## 顾问决策含义

- Below_BAR_count > 0 + Ahead → 默认纠正到当前价（P65）；不要 BAR→399。  
- Below_BAR_count 在 Behind 厚夜 → 可标 exception；不当新 BAR。  
- 新确认号更低价 → 改用 cancel-rebook-gap / P62。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 22:17 CST | 首版。轻指标；无默认 %；政策 NV。 |
T-Reinstate last-line（2026-08-28 00:17 CST）：Diagnose 走 `theory/reinstate-vs-current-rate.md`；过程仍 P65。本尺公式不重写；无默认 %；政策仍 NV。
