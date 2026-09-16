# Channel Net Contribution｜渠道净贡献

> 资产：Wave5 理论卡  
> 路径：`channel/net-contribution.md`  
> 能力层级：Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> 配套：`metrics/net-adr.md` · `metrics/adr.md` · P18 / P20 / P25（均 drafted）  
> 问题树：§12 Channel Mix  
> 禁止：只看 Gross ADR 排渠道；编造中国 OTA 佣金百分比；把博客区间写成官方费率。

---

## 0. 一句话

渠道比较用 **Net Contribution**，不用 Gross ADR。毛高但佣金/折扣/投放高，可能不如直销低毛价。费率以**用户合同**为准；本库找不到官方公开数就标 **Need Verification**，不填假 %。

```
Gross Room Revenue
  − Commission / 代理费
  − 促销折扣（Genius、神券、会员、活动立减）
  − 营销 / 投放 / 优待计划加价佣金
  − 分销 / 支付 / 交易费
= Net Room Contribution（未扣客房变动成本前）
再 − 变动经营成本（可选）= 贡献利润（常 Unknown）
```

与 HSMAI/Kalibri **COPE**（Collected − 直接预订成本）同方向（`metrics/net-adr.md`，**A**）。每次必须声明成本集合。

---

## 1. 公式（声明制）

```
Gross_c        = 渠道 c 的客房收入（声明含税/含早）
Commission_c   = 合同佣金（用户提供）
Discount_c     = 由酒店承担的促销折扣（不是客人看到的划线价）
Marketing_c    = 可归属广告 / 优待加佣 / 流量包
Distribution_c = 渠道费、GDS 段费、支付手续费、引擎费
Net_c          = Gross_c − Commission_c − Discount_c − Marketing_c − Distribution_c
NetADR_c       = Net_c / Sold_c
NetRevPAR_c    = Net_c / Available     # 可选，分母声明
```

缺任何一项：仍算能算的，并写「低估了直销或低估了 OTA」。禁止用「行业平均佣金」填空。

**STR 报送 ≠ 本式：** 批发/pay-when-booked 常已报净；OTA pay-later 常报毛。不要拿 STR ADR 当 Gross。

---

## 2. 渠道卡（2026-08-20）

每条：**角色 · 成本结构 · 顾问问什么 · 费率状态**。

### 2.1 Brand.com / 官网

| | |
| --- | --- |
| 角色 | 品牌站、中央预订、会员价入口 |
| 成本 | 引擎费、支付、品牌营销分摊、积分（常被当成 0，错） |
| 问 | 引擎按间夜还是按 %？会员折扣谁承担？ |
| 费率 | **店合同 / 集团内部**。无公开统一 %。Need Verification |

### 2.2 Direct（店内 / 微信 / 小程序 / 电话）

| | |
| --- | --- |
| 角色 | 门店直销。中国店常是最大「低佣金」池 |
| 成本 | 支付、私域投放、员工激励、会员折扣。**CAC ≠ 0** |
| 问 | 与 OTA 是否平价或直销低一点？有无员工返佣？ |
| 费率 | 用户给。禁止写「直销成本=0」 |

### 2.3 携程

| | |
| --- | --- |
| 角色 | 中国最大在线酒店流量池之一（份额数字用券商/新闻时标转述，不当本库 Fact） |
| 成本 | 基础佣金 + 可能的优待/投放 + 促销折扣。2026 年监管后「新佣金模式」以整改公告为准 |
| 问 | **用户后台/合同的现行佣金、是否仍有优待加价、神券谁出** |
| 费率 | **Need Verification。禁止编造百分比。** 本轮未找到携程对公众发布的 2026 统一佣金表。新华社 2026-07-25 报道协会/业主口述区间，属投诉语境，**不得抄进本库当官方费率**。整改措施称将「建立公平合理的新佣金模式」（媒体转述携程公告）——**新费率 Unknown** |

### 2.4 美团

| | |
| --- | --- |
| 角色 | 本地生活 + 酒旅，中低星/周末休闲权重大（Hypothesis） |
| 成本 | 佣金 + 活动报名 + 券 |
| 问 | 用户合同 %；今夜特价/神券是否打穿 BAR |
| 费率 | **Need Verification。** 无官方公开统一酒旅佣金表。博客 4.5–8% 等为 C/D，不采用 |

### 2.5 飞猪

| | |
| --- | --- |
| 角色 | 阿里系酒旅 |
| 成本 | 佣金 + 活动 |
| 费率 | **Need Verification。** 不编 % |

### 2.6 同程

| | |
| --- | --- |
| 角色 | 交通交叉酒旅；与携程系投资关系是市场结构，不是费率依据 |
| 费率 | **Need Verification。** 不编 % |

### 2.7 Booking.com

| | |
| --- | --- |
| 角色 | 国际 inbound / 部分国内国际客 |
| 成本 | 合同佣金 + Preferred / Visibility Booster **加价佣金** + 酒店承担的 Genius 折扣（折扣不是佣金，但是净贡献） |
| 官方（2026-08-20 打开 Partner Help，**A Vendor**） | 佣金是合同里的固定比例，**随国家、物业类型、协议而变**；帮页 **不公布全球单一 %**。优待计划会在基础佣金上再加。超售仍可能收佣金并要求安置（见 overbooking 卡） |
| 本库 | **不写「Booking=15%」当政策。** 行业博客常引 ~15% 为常见基数（C/B）→ 仅可说「公开帮页要求看合同；博客常见基数未核为官方」 |

https://partner.booking.com/en-us/help/commission-invoices-tax/commission/understanding-our-commission

### 2.8 Agoda

| | |
| --- | --- |
| 角色 | Booking Holdings 亚洲向；常见净价/佣金混合 |
| 费率 | **Need Verification。** 官方公开单一 % 未找到。不编 |

### 2.9 Expedia

| | |
| --- | --- |
| 角色 | Expedia / Hotels.com 等；Merchant（净）与 Agency（佣）并存 |
| 问 | 该店是 Hotel Collect 还是 Expedia Collect？净价已扣还是后结佣？ |
| 费率 | **Need Verification。** 官方公开单一 % 未找到。不编 |

### 2.10 GDS

| | |
| --- | --- |
| 角色 | 协议公司 / 旅行社终端（Amadeus / Sabre / Travelport） |
| 成本 | 段费 + 有时佣金 + 公司协议价本身的折扣 |
| 费率 | **Need Verification**（段费因链而异） |

### 2.11 Corporate（协议）

| | |
| --- | --- |
| 角色 | LRA / NLRA 协议价 |
| 成本 | 折扣（相对 BAR）+ 可能的 TMC/Consortia 费。常无 OTA 佣 |
| 顾问 | 用 displacement 看高峰是否 LRA 泄漏，不只看协议 ADR |

### 2.12 Wholesale（批发）

| | |
| --- | --- |
| 角色 | 净价卖给批发，再加价零售。高峰易泄漏 |
| 成本 | 净价已是「毛−批发差」；泄漏的机会成本常 > 价差本身 |
| 顾问 | 压缩日关批发或收配额；比较用净，不和 BAR 比毛 |

### 2.13 Group

| | |
| --- | --- |
| 角色 | 团块；销售佣金或净价 |
| 比较 | 走 `group/group-displacement.md`，不要和 OTA Gross ADR 排行榜混在一张「渠道 ADR」里当赢家 |

---

## 3. 不能只看 Gross ADR（误读表）

| 误读 | 改 |
| --- | --- |
| 携程 ADR 820 > 直销 780 → 保携程 | 先减佣金和券；可能直销净更高 |
| 关 OTA 省佣金 | 可能丢掉全部增量间夜；要问增量还是转移 |
| 批发毛 ADR 低所以差 | 批发常已是净；比的是净 vs 净 |
| STR ADR 高所以渠道健康 | STR 口径可能已净 |
| 直销 CAC=0 | 漏投放、引擎、支付、积分 |
| 参加优待「只多 3 个点佣金」 | 加佣 + 强制折扣叠在同一单上 |

排序规则：

```
1) 有合同费率 → 算 NetADR，按净排序
2) 无费率 → 只比结构（谁在打穿 BAR、谁占高峰配额），不算假精确净额
3) 弱日：高佣渠道只要增量且净>0，可以留
4) 压缩日：先关破价/收低价配额，BAR 层保持可订（与 P03 一致）
```

---

## 4. 顾问动作（落到日期/渠道）

| 现象 | 动作 |
| --- | --- |
| 某 OTA Gross 高、用户合同佣金高、净低于直销 | 压缩日收该渠道低价配额；BAR 层保留；不道德反 OTA |
| 直销价高于 OTA（倒挂） | 先修平价或直销优势，再谈 mix（监管后「全网最低」要求本身在整改，执行以用户后台为准） |
| 批发/团在高峰 | 关或限额；走置换卡 |
| 用户问「佣金是不是 15%」 | 要合同。中国 OTA：**Need Verification**。Booking：看协议，帮页无单一 % |
| 要不要接神券/今日特价 | 净贡献 + 是否打穿新地板；事件日默认拒（P18 已 drafted） |

禁止「适当调整渠道结构」。

---

## 5. 证据（2026-08-20 核）

| 论断 | 级 | 源 |
| --- | --- | --- |
| COPE / 净额须声明成本 | A | HSMAI COPE；`metrics/net-adr.md` |
| Booking 佣金看合同，随国家/类型变；优待加佣 | A Vendor | Partner Help 2026-08-20 打开 |
| 中国 OTA 统一官方佣金表 | — | **未找到** → 全渠道 NV |
| 博客中的携程 15–22%、美团 4.5–8% 等 | C/D | **不采用** |
| 新华社引协会「12–18%」 | C（投诉/协会口述） | 可作「业主在抱怨费率」信号，不当官方卡 |
| 2026-07-25 反垄断罚与整改 | A 新华社 | 价权/独家；新佣金模式 Unknown |

---

## 6. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-CH-01 | 携程/美团/飞猪/同程 2026 合同佣金 | 用户后台；本库空白 |
| NV-CH-02 | 整改后「新佣金模式」内容 | Unknown |
| NV-CH-03 | Agoda / Expedia 该店 Merchant vs Agency | 先问结算方式 |
| NV-CH-04 | GDS 段费 | 用户账单 |
| NV-CH-05 | 直销 CAC 分摊 | 清单制，缺则声明低估直销成本 |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。13 渠道。中国 OTA 不写 %。Booking 以官方帮页为准不写死 15%。 |
| 2026-08-20 | Wave7：P18 已 drafted。 |
| 2026-08-20 | Scout：P20 剧本已 drafted。 |
| 2026-08-21 | P25 mix 剧本 drafted。本卡公式不改。中国 OTA % 仍 NV。 |

---

## 8. 交叉（2026-08-22 08:17，不改渠道费率）

正文已写「再 − 变动经营成本（可选）= 贡献利润（常 Unknown）」。T19 把这层做成 Diagnose：Unknown 则不得说总比空着强。`theory/profit-contribution.md`。中国 OTA % 仍 NV。


## 9. 交叉（2026-08-27 00:17，不改渠道费率）

毛价对齐（价平画面）≠ 净贡献划算。为「价平」砍 Brand.com 前仍算净。Diagnose 走 **T-Parity** `theory/rate-parity-integrity.md`；过程仍 P59。佣金% 仍 NV。

> 交叉指针（2026-08-28 16:17，不改正文）：佣金吃含餐全额仍本卡/P20；「套餐当 BAR / 含早地板砍 EP」Diagnose 走 **T-Package**，过程仍 **P69**。不写 P70。

> 交叉指针（2026-08-29 12:17，不改渠道费率、不改公式）：平台出资压展示价（如 Booking.com BSB：平台付钱、酒店仍按原装入价收款）**不是**酒店承担的 `Discount_c`，更不是改公开 BAR 的许可证。先问谁出资。过程走 **P74**；真破平走 **P59**。出资% / 中国是否开通 BSB **仍 NV**。
