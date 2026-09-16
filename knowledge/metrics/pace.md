# Pace｜Booking Pace｜预订进度

> 卡：`metrics/pace.md`  
> 类型：Booking relative position  
> Evidence Level：B（店内算法）；概念通行  
> Source：行业 RMS / 培训；无单一 STR 历史官方式。Forward STAR 提供未来日 OTB 对市场/Comp 的比较  
> Last Verified：2026-08-20  
> Knowledge Type：Best Practice

## 定义

当前 OTB 相对「同一 Stay Date 类型、同一 DTA」的基准，是快还是慢。Booking Curve / fill curve 是各 DTA 的历史（或预算）OTB 轨迹。

任务书核心判断：**还剩 14 天、OTB 60%，到底快还是慢？** 只能把 60% 放到该店该 DOW 该季节的曲线上回答。

## 公式（常用，非官方，B）

```
Pace_vs_STLY (房间或 OCC 点) = OTB_now(DTA=d) − OTB_STLY(DTA=d)
Pace_% = (OTB_now / OTB_STLY − 1) × 100
```

同时对 Budget、Forecast、历史同 DOW 曲线（建议剔活动日）各算一条。

对齐方式必须声明：

- **日期对齐**（Date-to-Date）：今年 10/1 vs 去年 10/1。
- **星期对齐**（Day-to-Day / STLY）：今年周五 vs 去年周五。STR Glossary 两者都有。节假日错位时星期对齐通常更有用，但春节/国庆要按节日本身对齐。Need Verification：本店习惯。

## 上游

OTB、基准选择、是否剔除活动、日历、团队节奏变化。

## 下游

Forecast、定价方向、Early Sellout / Last-Minute Unsold 预警。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 今年已订 60%、去年最终 80% → 落后 20 点 | DTA 不同，不可比 |
| Pace 领先 → 必涨 | 领先来自低价预售，再涨可能仍对，但幅度不同 |
| 活动年曲线当正常年 | 去年演唱会抬高了整条曲线 |
| 全店 Pace 领先 | 工作日落后、周末领先，被平均掉 |

## 顾问决策含义

Pace 是「相对快慢」，OTB 是「绝对位置」，Pickup 是「瞬时速度」。三角缺一不可。

- Pace Behind + Pickup 仍符合曲线后半段 → 可能 **什么都不动**。
- Pace Behind + Pickup 低于曲线 + 价高于市 → 才进入 Price Too High / 开渠道。
- Pace Ahead + Remaining 薄 + DTA 长 → Early Sellout，涨价或关低价，不是庆祝 OCC。

转到：Pace Behind / Pace Ahead。
