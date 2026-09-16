# Allotment Pickup｜今晚切房间数 vs 已 pickup vs 未还（扣不扣；无默认 %）

> 卡：`metrics/allotment-pickup.md`
> 类型：结构诊断（轻）
> Evidence Level：A Vendor PMS（Cloudbeds Allotment：Last Room Available vs Custom Property Allotment；切房只动已连渠道、不动直销 — `sources/source-map.md` §38）；A Vendor PMS（OPERA Cloud Channel Sell Limits：按渠道×房型×日限额，可按可售 %，sold% 阈值可送零 — §38）；A Vendor CM（SiteMinder SiteConnect FAQ：release period 对渠道译成 Stop Sell — §38）；B / Hypothesis（公开 remaining vs 切房未还；扣不扣）
> Source：Cloudbeds Help「Allotment - Set different availability to your channels」；Oracle OPERA Cloud 25.4 Setting Channel Sell Limits；SiteMinder SiteConnect FAQ
> Source Date / Last Verified：2026-08-26
> Knowledge Type：Fact（Vendor 字段机制）+ Hypothesis（店内两桶尺）
> 配套：`../advisor-playbooks/channel-allotment-unsold.md` · `../recommendations/dont-dump-bar-to-clear-allotment.md`
> 禁止：发明本店 allotment % / 还房默认小时 / 美团·携程切房 SOP / 华住政策；把 15/3/12/399/799 写进公式当常模；把 LRA 写成必须；把 Channel Sell Limit 写成 dump 许可证。

## 定义

指定 Stay Date，一笔**已经切给渠道/批发的合同配额**：合同切房间数 vs 已 pickup vs 未还。  
**未 pickup 的切房不是公开需求。** 公开定价看 **公开桶 remaining + 公开 Pace**，不看「还占着几间切房」。

团块 pickup / cutoff → P52 / `group-pickup-cutoff.md`。散客担保释放 → T-Guar / P55。房型 nest → P13。

## 公式

**Cloudbeds（A Vendor PMS）——机制，不是中国 SOP**

```
Last Room Available     = PMS 可售同步到已连渠道；一边卖一边扣
Custom Property Allotment = 只把 Quantity to Sell 推到渠道，可少于 Total Available
该页 allotment 只动已连渠道，不动 Booking Engine / 电话 / walk-in
# 不能按渠道设不同 allotment = 该厂商当前限制，不是行业常数
```

**OPERA Cloud Channel Sell Limits（A Vendor PMS）——机制，不是华住字段**

```
Channel Sell Limit      = 某渠道 × 某房型 × 某日 的可售上限（绝对值或可售 %）
Zero Sell Limit         = 达到 sold% 阈值后对该渠道送零
# 例（厂商）：始终送 80% 可售；sold 95% 则送 0
# 店配。不是默认 %，不是中国 SOP
```

**SiteMinder（A Vendor CM）——渠道侧还房**

```
Release period（店配）  →  对渠道消息译成 Stop Sell
# 渠道层「还房」常常是关桶，不是改公开 BAR
```

**店内 / 顾问 Hypothesis（须声明，不是厂商字段名）**

```
Allotment_size_t     = 今晚合同切房间数                 # 用户间数；无默认 %
Picked_up_t          = 该桶已有预订间数
Unreleased_t         = Allotment_size_t − Picked_up_t   # 未还洞
Deducting?           = 是否从 house / 公开可售扣除      # 本店配置+合同，NV
Public_remaining_t   = 公开/直销还能卖的间夜
Public_pace_t        = Ahead / On / Behind              # 只评公开桶
# 本店切房 % / 还房小时 = NV。不编
# 贡献 / 佣金 / Walk $ Unknown 除非用户给合同
```

Need Verification：本店切房合同、扣不扣、还房时点、美团·携程切房 SOP、是否 LRA 还是 custom allotment。不编字段名以外的中国 SOP。

仿真 15 / 3 / 12 / 399 / 799 只在案例文件，**不进本卡公式当常模**。

## 上游

电商「切了 15 间卖不掉，公开价降一点一起出」、GM「美团还占着看起来没房了」、销售「高峰把切房关了放回来」。

## 下游

为消化切房 dump 公开 BAR、按切房占用涨或降、没真还房就当 leftover、把 BAR 写成切房价、Brand.com 跟切房 dump。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 切了 15 所以 15 间已卖掉 | 只有 pickup 是已有预订。未还是合同桶 |
| 看起来没房了所以该涨或该砸 | 可能是扣库存的切房假满。形 A：还房，不改 BAR |
| 切房卖不掉所以 BAR→399 | 两套价栏。dump 公开稀释 R_pub，未必填满切房。形 B |
| 高峰关切房 = 也该降公开价 | 关桶是库存动作。形 C：还房 + Hold |
| 非扣库存还占着所以公开假剩余 | 不扣则公开 remaining 已是真的。形 D |
| LRA 就是中国默认 | Cloudbeds 推荐 LRA 是厂商建议，不是本店 Fact |
| OPERA 80%/95% 是行业常模 | 厂商示例。本店 % NV |
| 团 cutoff 同一把尺 | 同形不同合同。团走 P52 |

## 与邻近指标

| 指标 | 关系 |
| --- | --- |
| `group-pickup-cutoff.md` | 团块 pickup / wash ≠ 本卡渠道切房 |
| `guarantee-mix.md` | 散客单扣不扣 / 几点放（T-Guar）≠ 渠道合同桶 |
| `pace.md` / `otb.md` | 公开 Pace / remaining 才是公开定价输入 |
| `net-adr.md` | 切房成交净价走 P20；本卡不填佣金% |
| `inventory.md` | Remaining 须声明含不含渠道锁 |

## 顾问决策含义

先把 Unreleased 和 Public_remaining 写成两个数。高峰：动 Unreleased（还/缩），不动公开 BAR。公开真弱：动公开价的理由写 Public_pace，不写 Unreleased。无默认 pickup %。
