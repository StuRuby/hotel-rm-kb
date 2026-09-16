# Upsell Take Rate｜付费升房报价 / 接受 / 收入（free vs paid split；无默认 take-rate %）

> 卡：`metrics/upsell-take-rate.md`
> 类型：过程计数（轻）
> Evidence Level：A Vendor PMS（OPERA Cloud Managing Reservation Upgrade Offers：`resupsell` / Reservation Upsell 报告跟踪 agent conversion；Upgrade Rules 用单独 Transaction Code 过账升房收入 — `sources/source-map.md` §44）；B / Hypothesis（店内 offers / accepted / revenue；free vs paid split）
> Source：Oracle OPERA Cloud 26.1 Configuring Reservation Upgrade Rules；Managing Reservation Upgrade Offers
> Source Date / Last Verified：2026-08-27
> Knowledge Type：Fact（Vendor 可跟踪升房转化与分码过账）+ Hypothesis（店内 take-rate 尺）
> 配套：`../advisor-playbooks/paid-upsell-upgrade.md` · `../recommendations/dont-give-away-paid-upgrade.md`
> 禁止：发明默认 take-rate % / 华住升房价表 / Fact +¥ 行业常模 / 佣金%；把 4/10/799/999/+200–300 写进公式当常模；把免费升计入付费 take-rate。

## 定义

指定 Stay Date（或当晚班次）：

- **Paid upgrade offers made**：前台/预订对客人提出的**付费**升房报价次数。
- **Paid upgrade accepted**：客人接受并产生升房加价的次数。
- **Paid upgrade revenue**：升房加价合计（本店过账口径；进附营还是房费 = **NV**）。
- **Free upgrade RN**：空间可用 / 精英免费升 / award 升（走 **P49** 计数，不进付费 take-rate 分子）。

本店升房价表 = **NV**。不编字段名。

## 公式

**OPERA（A Vendor PMS）——机制名，不是中国 SOP**

```
Upgrade_rule          = From room type/class → To room type/class + Formula + Transaction Code
Upgrade_offer         = 规则触发后展示给 agent/guest 的付费升报价
Upsell_report         = Reservation Upsell（resupsell）跟踪 agent conversion
# UI / 报告名是 OPERA 的，不是华住字段，不是本店 Fact
```

**店内 / 顾问 Hypothesis（须声明）**

```
Offers_made_t         = 付费升房报价次数
Accepted_t            = 付费升房接受次数
Paid_upgrade_rev_t    = 升房加价收入合计
Take_rate_t           = Accepted_t / Offers_made_t     # 若 Offers_made=0 则不定义
Free_upgrade_RN_t     = 免费升间夜（P49 桶；不进上式分子）
# 无默认 take-rate %。不写「行业 20% 才算合格」
# 本店升房价表 / 加价带 = NV。不编
# 仿真 +200–300 / 799 / 999 只在案例文件
```

Need Verification：本店如何标付费升 vs 免费升；升房收入进附营还是房费；是否有升房价表。不编华住 SOP。

## 上游

前台入住对话、预订改房型、升房规则/价表（若有）、套房剩余、标准剩余、会籍/升级奖状态。

## 下游

升房 ADR、套房占用结构、免费升置换、套房公开 BAR 是否被砸、「升房不算」口径争论。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 没有行业 take-rate % 就不能推 | 无默认 %。先数报价与接受 |
| 免费升也算 upsell 成功 | 免费升走 P49；不进付费 take-rate |
| 升房收入不算所以 take-rate 无意义 | 口径 NV；贡献仍在（T19） |
| 50 元意思一下算正常升房 | 象征价；贴类型差 / 本店价表 |
| 套房空着所以免费升拉 OCC | 占用≠付费需求；高峰默认付费报价 |

## 顾问决策含义

1. 先分 **付费 vs 免费**；免费 → P49。  
2. 数 Offers / Accepted / Revenue；**不要**发明默认 take-rate 目标。  
3. Offers=0 且高峰套房空 → 过程问题（没报价），不是「客人不要」。  
4. 本店价表缺 → NV；用 Hypothesis/Simulation 带，不编华住表。  
5. 套房公开被砸到 399 → 先停 dump，再谈 take-rate。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 06:17 CST | 首版。Hypothesis offers/accepted/revenue；free vs paid split；无默认 take-rate %。本店价表 NV。 |

## 交叉（2026-08-27 08:17，不改公式）

空差价为什么是可卖期权、空≠免费、空≠砸该型 BAR → **T-Upsell** `theory/paid-upsell-differential.md`。过程仍 P61。本店升房价表仍 NV。无默认 take-rate %。
