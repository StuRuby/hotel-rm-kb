# Live vs Intended Rate｜意图 BAR vs 线上同口径活价（gap；无默认容忍）

> 卡：`metrics/live-vs-intended-rate.md`
> 类型：结构诊断（轻）
> Evidence Level：A Vendor CM（SiteMinder Help Platform「Map your room rates to a channel」：平台 room rate ↔ 渠道 room rate 一对一映射；断映射只停平台更新，渠道侧仍可卖 — `sources/source-map.md` §42）；B / Hypothesis（店内意图 vs 活价尺；错价 ≠ 清市场价）
> Source：SiteMinder Help Platform「Map your room rates to a channel」
> Source Date / Last Verified：2026-08-27
> Knowledge Type：Fact（Vendor 映射机制）+ Hypothesis（店内意图 vs 活价尺）
> 配套：`../advisor-playbooks/channel-mapping-misprice.md` · `../recommendations/dont-match-error-rate.md`
> 禁止：发明默认容忍额/% / 美团映射 SOP / 本店 CM 字段名当中国 Fact / 华住 SOP / 佣金差；把 14/399/799 写进公式当常模；把 gap 负值当成必须砍 Brand.com 的许可证；把错误价写成清市场价。

## 定义

指定 Stay Date，比较本店 **意图公开灵活 BAR**（本打算卖的房型 + 价格码）与 **具名渠道上看到的活价**，前提尽量同一产品口径：同房型、同取消、同含早、同税。

**活价不是本打算卖的 → 不要把它当市价，走 P60。**  
**是本打算卖的、可比、渠道故意更低 → 走 P59 / `parity-gap.md`。**  
**口径对不上且不是映射问题 → 走 P36。**

映射 / 价码 id 若用户给得出就记；给不出 = **NV**，不编本店字段名。

## 公式

**SiteMinder Help（A Vendor CM）——机制名，不是中国 SOP**

```
Platform_room_rate_i   = 渠道管理器里的一条房型价
Channel_room_rate_j    = 某连接渠道上的一条房型价
Mapping                = i ↔ j 的配对（该厂商要求一对一）
Unmap / Disconnect     = 只停平台侧更新；渠道侧 j 仍可卖，除非在渠道 extranet 关/删
# UI 字段（Distribution > Channels、Map to、Start updating channel）= 该厂商名
# 不是美团字段，不是华住字段，不是本店 Fact
```

**店内 / 顾问 Hypothesis（须声明）**

```
Intended_BAR_t         = 本打算卖的公开灵活 BAR（同房型、同取消、同含早/税）
Live_channel_rate_t    = 具名渠道同口径活价（用户截图）
Live_vs_intended_gap_t = Live_channel_rate_t − Intended_BAR_t
Mapping_or_rate_code_id = 用户能指到的映射/价码 id；否则 NV
Intended?              = 活价是否等于意图产品（房型码/价格码/促销开关/映射）
# gap < 0 且 Intended? = No  → 错价候选（P60），不是清市场价
# gap < 0 且 Intended? = Yes → 转 P59（真破平尺）
# 无默认容忍额，无默认容忍 %。不写「差 50 内算对」
# 本店 CM 字段名 / 美团映射 SOP = NV。不编
```

Need Verification：本店 CM 字段、映射表、促销开关名、渠道侧是否仍可订、已订错价单量。不编中国映射 SOP。

仿真 14 / 399 / 799 只在案例文件，**不进本卡公式当常模**。

## 怎么用

1. 先问 Intended?；Unknown → 问，不停；倾向 Hold 意图 BAR。  
2. Intended? = No → 输出两边价与 gap 符号；**不**输出「应把 Brand.com 砍到 Live」。剧本默认 **停错码 + Hold 意图 BAR**。  
3. Intended? = Yes 且可比 → 交 `parity-gap.md` / P59。  
4. 口径失败且不是映射 → P36。  
5. 无默认「差多少算错」——对不上意图产品就是错价候选，不靠 % 门槛。

## 误读

| 误读 | 纠正 |
| --- | --- |
| 活价 399 = 该夜市价 | 先问是不是本打算卖的 |
| gap 负 = 必须砍官网 | 错价先停错码；真破平走 P59 |
| 断映射 = 渠道已经没了 | SiteMinder：渠道侧可能仍开 |
| 字段名可以按美团 SOP 写 | 本店字段 NV |
| 14/399/799 是行业常模 | Simulation only |

## 与邻近指标

| 指标 | 关系 |
| --- | --- |
| `parity-gap.md` | 两边都是**本打算卖的**可比公开灵活价才算破平 gap |
| `allotment-pickup.md` | 切房桶 ≠ 价码映射 |
| `pace.md` / `otb.md` | 修好后公开 Pace 才是公开定价输入 |
| `net-adr.md` | 错价成交净价走 P20；本卡不填佣金% |

## 顾问决策含义

先把 Intended_BAR 和 Live_channel_rate 写成两个数，并标 Intended?。错价：动映射/错码，不动意图 BAR。真弱：动公开价的理由写 Pace，不写 Live。无默认容忍。
