# RMS vs Pace｜系统建议价 vs 当前 BAR vs Pace（gap；无默认 override %）

> 卡：`metrics/rms-vs-pace.md`  
> 类型：过程计数（轻）  
> Evidence Level：B / Hypothesis（店内建议 vs BAR vs Pace）；A 协会指针（HSMAI input vs output override — §54）；A Vendor 指针（IDeaS Pricing Overrides 能力 — §54）  
> Source：店内 RMS 建议价 + 当前 BAR + Pace；HSMAI / IDeaS 机制名  
> Source Date / Last Verified：2026-08-28  
> Knowledge Type：Hypothesis（店内尺）+ Fact（协会/厂商：建议可被 override — 能力，不是中国 SOP）  
> 配套：`../advisor-playbooks/rms-rec-override.md` · `../recommendations/dont-follow-rms-dump.md`  
> 禁止：发明默认 override %、把 HSMAI 80:20 写进公式、IDeaS 4% RevPAR、佣金%；把 14/399/799 写进公式当常模；把错映射活价当「RMS 建议」而不走 P60。

## 定义

指定 Stay Date：

- **Current_BAR**：当前意图公开灵活 BAR。
- **RMS_rec**：系统建议价（或已自动推出去的系统价）。
- **Gap_rms**：RMS_rec − Current_BAR（负 = dump 建议）。
- **Pace_flag**：Ahead / On / Behind（对 STLY/曲线；无曲线则 NV，不编 70%）。
- **Override_type**：none / input / output / **Unknown（NV）**。

**无默认「应 override 百分之几」。** HSMAI 80:20 = 该文访谈启发式，**不**进本尺。本店 RMS 名 / 华住会字段 = **NV**。

活价不是本打算卖的 → 先 `live-vs-intended-rate.md` / **P60**，不要当本尺的「RMS 建议」。

## 公式

**店内 / 顾问 Hypothesis（须声明）**

```
Current_BAR_t     = 当前意图公开 BAR
RMS_rec_t         = 系统建议价（用户截图/画面）
Gap_rms_t         = RMS_rec_t − Current_BAR_t
Pace_flag_t       = Ahead | On | Behind | Unknown
Override_type     = none | input | output | Unknown
# Gap_rms < 0 + Pace Ahead → 形 A：不跟 dump候选（P66）
# Gap_rms ≈ 0 或 > 0 + Pace Behind + remaining 厚 → 形 B：P05 候选，理由写 Pace
# 无默认 override_%
# 仿真 399/799/14 只在案例文件
# 本店 RMS / 华住会字段 = NV。不编
```

Need Verification：本店 RMS 产品名；是否自动推价；input vs output 字段；override 日志。不编华住会 SOP。

## 上游

RMS 画面/截图、当前 BAR、Pace/Remaining、是否已自动推价、错映射核对（P60 门）。

## 下游

是否跟 dump、是否 Hold、是否走 P05、是否先改 Forecast（P17）、是否移交 P56/T20/P60。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| RMS 建议 399 = 市场价 | 建议是输出，要用 Pace 核 |
| 跟了系统 = 数据驱动 | 可能是全盘接受（HSMAI Don't） |
| Override 越多越专业 | 无理由 output override 也是 Don't |
| 应 override 20% | **无默认 %**；HSMAI 80:20 不进公式 |
| 399 是系统建议就不是错价 | 先排除错映射（P60） |

## 顾问决策含义

1. 先要 **RMS_rec 与 Current_BAR 与 Pace**；没有 → 条件化，不停。  
2. Gap 负 + Ahead → **不跟 dump**；Hold 意图 BAR。  
3. 系统仍高 + Behind 厚 remaining → **形 B**；P05，理由写 Pace。  
4. Override_type Unknown → 不编 input/output；只问建议价是否已推成活价。  
5. 本店字段缺 → **NV**；问，不编。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 02:17 CST | 首版。RMS vs BAR vs Pace；无默认 %。 |
