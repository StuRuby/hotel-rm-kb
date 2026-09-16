# Cancel-Rebook Gap｜同住取消再订（ADR before vs after；无默认 %；政策 NV）

> 卡：`metrics/cancel-rebook-gap.md`
> 类型：过程计数（轻）
> Evidence Level：B / Hypothesis（店内同住取消→更低价重订计数）；A Vendor/OTA 指针（Booking NR 改期不得更低总价 — `sources/source-map.md` §46，机制不是本尺公式）
> Source：店内 PMS/CRS 取消与新订对照（字段名 NV）；Booking Partner Hub NR date-change 条件（围栏机制指针）
> Source Date / Last Verified：2026-08-27
> Knowledge Type：Hypothesis（店内套利尺）+ Fact（Vendor：NR 改期不得更低 — 机制，不是中国 SOP）
> 配套：`../advisor-playbooks/same-day-cancel-rebook.md` · `../recommendations/dont-cut-to-stop-cancel-rebook.md`
> 禁止：发明默认取消重订% / 华住改订 SOP / 罚金% / 佣金%；把 8/7/599/399/799 写进公式当常模；把无重订的取消潮直接当本尺。

## 定义

指定 Stay Date（或当日班次窗）：

- **Same-stay cancel**：取消一笔已确认预订（灵活或可免费取消）。
- **Same-stay rebook**：近窗内出现同住（同名/同日期/同房型或可核确认链）的新订，且 **新价 < 原价**。
- **Cancel-rebook pair**：一笔取消与一笔同住更低价重订的配对（店内匹配规则 **NV**，不编）。
- **ADR before / after**：配对上原房价 vs 重订房价（店内口径）。

本店是否允许同住改订吃新价 = **NV**。不编字段名。

## 公式

**店内 / 顾问 Hypothesis（须声明）**

```
Cancels_t              = 窗内取消间夜（或件数，声明口径）
Same_stay_rebooks_t    = 同住更低价重订间夜（或件数）
Pairs_t                = 可匹配的取消–重订对数（匹配规则 NV）
ADR_before_pair        = 原预订房价
ADR_after_pair         = 重订房价
Gap_pair               = ADR_before_pair − ADR_after_pair   # ≥0 才称「更低价重订」
# 无默认 %。不写「行业 X% 取消会重订」
# 仿真 8/7/599/799 只在案例文件
# 本店改订吃新价政策 = NV。不编
```

Need Verification：本店如何匹配同住重订；改订是否自动吃新价；罚金是否过账。不编华住 SOP。

## 上游

取消日志、新订日志、客人姓名/确认号、房价码、公开 BAR 变动、促销开关。

## 下游

ADR 稀释、假 Soft 空房叙事、是否预防性砍 BAR、未来日期是否收窗（P38）/开浅 NR（P19）。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 取消多 = 该夜弱 | 若取消≈同住重订，房间可平、ADR 掉 = 套利 |
| 没有行业 % 就不能管 | 无默认 %。先数 pairs 与 gap |
| 跟到重订价可「公平」 | 训练套利；Ahead 应 Hold 公开 BAR |
| 先砍公开价可阻止取消 | 扩大价差窗口，制造更多重订 |
| 把本尺当 leftover | leftover 走 P05；理由是 Pace，不是 gap |

## 顾问决策含义

1. 先数 **同住更低价重订**；没有 → 更像 P14 Soft，不是本剧主拍。  
2. 有 pairs 且 Pace Ahead → **Hold BAR**；不要跟 gap 砍公开价。  
3. Gap 大 ≠ 许可证把 BAR 降到 after 价或 399。  
4. 本店改订政策缺 → **NV**；问，不编。  
5. 未来高峰：用 P38/P19 缩小可套利灵活库存，不是今夜 dump。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 10:17 CST | 首版。Hypothesis pairs + ADR before/after；无默认 %；政策 NV。 |
