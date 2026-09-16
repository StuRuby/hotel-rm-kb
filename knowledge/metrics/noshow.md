# Transient No-show｜当晚未到件数 / 释放后 remaining（无默认 %）

> 卡：`metrics/noshow.md`  
> 类型：结构诊断（轻）  
> Evidence Level：S（STR Historical：No-shows **exclude** from Rooms Sold — `sources/source-map.md` §22）；A Vendor PMS（OPERA Cloud No Show Posting Rules — §30；EOD 过账能力，不是中国 SOP）；B Vendor（Mews overbooking 对冲 no-show — §22 指针）；B / Hypothesis（释放后 remaining + Pace）  
> Source：STR Historical Benchmarking Data Reporting Guidelines（§22）；Oracle OPERA Cloud Configuring No Show Posting Rules（§30）；Mews overbooking blog（§22）  
> Source Date / Last Verified：2026-08-26  
> Knowledge Type：Fact（STR 报送口径）+ Vendor PMS（过账能力）+ Hypothesis（店内定价尺）  
> 配套：`../advisor-playbooks/transient-noshow.md` · `../recommendations/dont-dump-on-noshow.md`  
> 禁止：发明本店 no-show% / 行业 5% / 10% / wash%；把 8/22/40/399/799 写进公式当常模；把 STR exclude Sold 写成砍价公式；把 OPERA posting 写成 dump 许可证。

## 定义

指定 Stay Date：**散客预订当天没到**（从未 check-in）。  
房回可售之后，定价看 **释放后 remaining + Pace**，不看「刚 no-show 了几间」本身。

到店前取消 → P14。团 allotment 未 pickup → P52。早离（已在店）→ P46。超售卖限用历史预期 → P24。

## 公式

**STR Historical（S）——报送口径，不是定价式**

```
Rooms Sold（Historical） excludes No-shows
# 见 §22 CoStar STR Historical Benchmarking Data Reporting Guidelines
# 用途：历史 OCC/Sold 分子正确。不是「今晚该不该砍 BAR」的公式
```

**OPERA（A Vendor PMS）——机制，不是中国 SOP**

```
No-show status reservation
No Show Posting Rules（可选）：EOD 可按 First Night / All Nights / Deposit Only 过账
# 收银/过账能力。过账 ≠ 必须 dump 公开 BAR
```

**店内 / 顾问 Hypothesis（须声明）**

```
Noshow_count_t     = 当晚散客未到件数                 # 用户件数；无默认 %
Remaining_after_t  = Capacity − Occupied_after_return − OOO
Pace_t             = Ahead / On / Behind
OTB_prearrival_OCC = 含尚未到达预订的画面占用         # 假高峰尺，不按这张涨 BAR
# 本店 no-show% = NV。不编 5% / 10%
# 贡献 / Walk $ Unknown 除非用户给
```

Need Verification：本店 no-show%、OPERA posting 是否激活、SiteMinder no-show 专页（仍 NV）。

仿真 8 / 22 / 40 / 399 / 799 只在案例文件，**不进本卡公式当常模**。

## 上游

销售「今天 8 间 no-show 要不要降价补」、GM「OTB 满结果没到要不要涨」、有人「跟团 wash 一样先砍」、有人「今晚空了就该砸 / 少超售」。

## 下游

因刚 no-show dump 公开 BAR、按含未到 OTB 涨、把 wash% 混进散客、一夜报复改卖限。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 刚 no-show 所以 BAR→399 | 库存回来 ≠ 需求死亡。先看释放后 remaining + Pace。形 A |
| OTB 满所以该涨 BAR | 含尚未到达。不按那张涨。形 B |
| 释放后空了所以必须砸 | 须 Pace Behind 才评 P05；理由是 leftover。形 C |
| 散客 no-show = 团 wash% | 分开。团走 P52。形 D |
| 今晚空了证明超售错了该砸 | P24 用历史预期，不因一夜。形 E |
| STR 不计 Sold 所以今晚该砍 | 报送口径 ≠ 定价公式 |
| OPERA 过了 no-show 费所以必须再卖特价 | 过账 ≠ dump 许可证 |
| 行业默认 5% / 10% | **NV。不编。** |

## 与邻近指标

| 指标 | 关系 |
| --- | --- |
| `group-pickup-cutoff.md` | 团块 pickup / wash ≠ 本卡散客件数 |
| `pace.md` / `otb.md` | 释放后 Pace / remaining 才是定价输入 |
| `occ.md` | 历史 Sold 不含 no-show（STR）；画面 OTB 可能含未到 |
| Cancel / Soft OTB（P14） | 到店前取消 ≠ 当天没到 |

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-26 02:17 CST | drafted。无默认 %。STR exclude Sold 指针 §22。OPERA posting §30。 |

**边界（2026-08-26 08:17）：** 本卡是 **ex-post**（到达日已经没来、按 §30 过账、STR 报送不计 Sold）。**ex-ante** 的「这张单现在占不占可售、几点放」是担保类型问题 → **T-Guar** [`../theory/guarantee-release.md`](../theory/guarantee-release.md) · 过程 P55。非担保 ≠ 已 no-show。历史 no-show 支撑卖限仍走 P24。本店 no-show% 仍 **NV**。
