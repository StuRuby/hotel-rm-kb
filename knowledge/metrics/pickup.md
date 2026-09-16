# Pickup｜预订增量

> 卡：`metrics/pickup.md`  
> 类型：Booking velocity  
> Evidence Level：A/B  
> Source：STR Forward STAR「Pickup」；行业通行快照差分  
> Last Verified：2026-08-20  
> Knowledge Type：Best Practice

## 定义

同一 Stay Date 上，两张 OTB 快照的差。回答「这段时间账上变了多少」，不回答「现在绝对高不高」。

## 公式

```
Pickup_N = OTB_today − OTB_{today−N}
```

标准窗口：**1D / 3D / 7D / 14D / 30D**。分别对 Rooms、OCC 点、ADR、Revenue 计算。

净 Pickup（顾问首选）：

```
Net = 新订 − 取消 − 提前离店 + 延住 ± 改期进出
```

Need Verification：本店 Pickup 报的是净额还是毛新订；团队进账算在哪一天。

## 上游

价格变动、活动、竞对满房/降价、渠道曝光、天气、团队确认或 wash、系统故障（假 0）。

## 下游

Forecast 修正；涨/降/不动；是否关低价或打开限制。

## 窗口怎么用

| 窗 | 用途 | 陷阱 |
| --- | --- | --- |
| 1D | 昨日战术是否过激 | 噪声大，一天团队能扭曲 |
| 3D | 短决策是否该回调 | 周末/工作日跨段要声明 |
| 7D | 主趋势 | 仍可能被一周内的团块主导 |
| 14D | 是否系统性偏快/慢 | 含一次涨价后的反应 |
| 30D | 长周期 / 团队 | 不能当「最近需求」 |

必须再按 Stay Date、房型、细分、渠道拆。总 Pickup 健康、某 RecDate 为 0，才是要处理的日期。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| Pickup 慢 = 降价 | 该店历史就在最后 5 天走 40% |
| Pickup 快 = 再涨 | 不可取消团进账，散客其实停了 |
| ADR Pickup 升 | 取消了低价单，不是涨价成功 |
| 正 Rooms + 负 Revenue | 高价取消、低价补进 |

## 顾问决策含义

Pickup 是触发器，不是处方。慢 → 走 Pickup Slow（先排除曲线、库存、分销）。快 → 走 Pickup Too Fast（先排除一次性团、是否该保护库存）。观察清单里要写「未来 24/48/72h Pickup 低于/高于 __ 间则重估」。
