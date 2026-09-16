# Parity Gap｜可比公开灵活价 Brand.com vs 具名 OTA（gap = OTA − Brand；无默认容忍 %）

> 卡：`metrics/parity-gap.md`
> 类型：结构诊断（轻）
> Evidence Level：A Vendor/OTA（Booking Partner Hub How parity works：no / narrow / wide 按物业所在国；GDT 为准 — `sources/source-map.md` §40）；A 官方监管（EU Commission DMA：EEA 禁止 Booking 价平条款 — §40；**仅 EEA**）；B / Hypothesis（店内可比 gap 尺；先修便宜侧）
> Source：Booking.com for Partners「How parity works」；European Commission「Booking must now comply with the Digital Markets Act」
> Source Date / Last Verified：2026-08-26
> Knowledge Type：Fact（Vendor 计划名 + EEA 监管）+ Hypothesis（店内 gap 尺）
> 配套：`../advisor-playbooks/rate-parity-breach.md` · `../recommendations/dont-cut-brand-to-match-ota-undercut.md`
> 禁止：发明默认容忍 % / 美团·携程罚则% / 华住价平 SOP / 佣金差表；把 14/719/399/799 写进公式当常模；把 EEA DMA 写成中国规则；把 gap 负值当成必须砍 Brand.com 的许可证。

## 定义

指定 Stay Date，比较本店 **Brand.com（或直销未登录）公开灵活价** 与 **具名 OTA 公开灵活价**，前提是同一产品：同房型、同取消、同含早、同税口径、同登录态（均未登录）、同日期。

**不可比 → 不要算破平 gap，走 P36。**  
**会员 / 预付 / 打包 / 切房栏更低 → 围栏，不是本尺的破平。**

## 公式

**Booking Partner Hub（A Vendor/OTA）——机制名，不是中国 SOP**

```
No parity      = 该国物业对 Booking 无特定价平义务（相对他渠）
Narrow parity  = 相对自有线上渠道，Booking 应获得相同或更好的价与条件
Wide parity    = 相对任一线上/线下渠道，Booking 应获得相同或更好的价、条件与可售
# 完整措辞以 General Delivery Terms 为准；解释页冲突时 GDT 优先
# 适用哪一档 = 物业所在国。不是全球一刀。不是中国罚则表
```

**EU DMA（A 官方，管辖 = EEA）**

```
As of 2024-11-14 (EEA / Booking gatekeeper obligations):
  Booking must not impose parity clauses
  Booking must not use equivalent measures (e.g. commission hike / de-list because other channel is cheaper)
# 仅 EEA。不要写成中国已禁止价平。中国合同 = NV
```

**店内 / 顾问 Hypothesis（须声明）**

```
Brand_public_flex_t   = Brand.com 未登录、公开、灵活、同房型、同取消、同含早/税
OTA_public_flex_t     = 具名 OTA 同口径公开灵活价
Parity_gap_t          = OTA_public_flex_t − Brand_public_flex_t
# gap < 0  → OTA 更便宜（undercut 候选，仍须先确认可比）
# gap = 0  → 毛价平（仍可能 Net 不平 → P20）
# gap > 0  → Brand.com 更便宜（常见直销优势；是否触发 narrow/wide = 合同+管辖，NV）
# 无默认容忍 %。不写「差 5% 内算平」
# 本店价平条款 / 罚则% / 佣金差 = NV。不编
```

Need Verification：本店与各 OTA 合同条款、适用管辖、是否会员/预付截图、CM 映射是否错。不编中国罚则。

## 怎么用

1. 先过可比清单；失败 → P36，本卡不输出「破平」。  
2. 输出 gap 符号与两边价；**不**输出「应砍 Brand.com 到 X」。  
3. gap < 0 且可比 → 剧本默认 **修 OTA 侧**；Brand.com Hold。  
4. 围栏价不要进本公式分子。  
5. 合同威胁 → 问条款；本卡不提供罚金%。

## 误读

| 误读 | 纠正 |
| --- | --- |
| gap 负 = 必须砍官网 | 先修便宜侧 |
| 任意截图都能算 gap | 先可比 |
| EEA 禁价平 = 中国无合同义务 | 管辖不同；中国条款 NV |
| 毛 gap=0 就合格 | 还要看 Net（P20） |
| 14/719/799 是行业常模 | Simulation only |

## 交叉（2026-08-27 00:17，不改公式）

渠道价差已经发生之后只允许改诊断，不允许自动改 Brand.com BAR → **T-Parity** `theory/rate-parity-integrity.md`。算术与无默认容忍 % 仍本卡。过程仍 P59。
