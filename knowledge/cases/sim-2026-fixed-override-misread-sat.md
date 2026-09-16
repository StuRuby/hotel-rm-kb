# Simulation｜2026 Fixed Rate / Rate Amount Override / Force Availability misread vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-fixed-override-misread-sat.md`  
> 配：Diagnose 走 **P66** `advisor-playbooks/rms-rec-override.md` + **P65** `advisor-playbooks/cancel-reinstate-old-rate.md`；过程 + **P87**（folio 补偿≠尺）± **P24/P33**（强制可用性/超售/限制闸）± **P78/P69**（加人/套餐≠尺）± **P01/P64**（Ahead/嵌套）± **P03**（真紧）/ **P05**（真 leftover）  
> 短例仍在 P66 / P65 / S06-14 / T06-16 skip；本卷 = callable 专卷（**C06-18**）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T06-16 Fixed/Override deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining（真可售）：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 单笔改价 / 强制可用性层（Simulation — NOT Fact；不是华住字段名）：
  - 多笔预订勾了 **Fixed Rate**（OPERA 5.6：显式 override 码价金额并钉住；Discount+Reason 可挂）
  - **Daily Details Rate Amount** 被 FO 手改（OPERA Cloud：Rate Amount override + Fixed 钉住；Discount Amount/% + Reason）
  - **Rate Override Reasons** 条数偏多（团块 Room Grid 改价审计码也混进早会口述）
  - 有人用 **RoomKey / RMS Base Rate Override**「先改金额再说」（可绕过动态价表，可 Reset）
  - 另有人开了 **HotelKey Force Availability / Allow Overbooking**（强制开不可售码 + Override Reason）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「Fixed/override 很多所以公开该跟到 override 价 / override 一堆说明卖不动该砍 / Force 开了不可售码所以新尺 399 / 分账均价脏该砍——反正先砸公开尺」
- 用户原话（**NOT Fact**；本店 Fixed/Override 字段 / 华住改价·分账 SOP / 默认 override 频率 / Share 分账常模 / 699 Fact / Vendor China Fact = **NV**）：
  - 「Fixed 一堆，公开 BAR 跟到那些 override 价」
  - 「Rate Amount 改了很多，说明卖不动，BAR→399」
  - 「Force Availability 开了，系统已经认 399 是新尺」
  - 「Share 分账均价脏了，ADR 难看，先砍公开」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；单笔改价层是 **Fixed Rate / Rate Amount Override / Discount Reason**；强制闸是 **Force Availability / Allow OB** → **P66 / P65**（+ P87 / P24/P33 / P78/P69）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Fixed/Amount Override ≠ 公开 BAR Type：单笔预订显式改金额并钉住；Discount Reason = 审计；Block Override Reasons = 团块 Grid 审计；Base Override = 授权绕过动态价（可 Reset）；Force = 强制可用性/超售闸（仍可改每晚价 + Reason）。单笔改价条数 / Force 开码 ≠ 「全店需求死了该 dump」也 ≠ 自动新尺。
4. **拒绝** BAR→399（Fixed 跟价 dump / override 条数当弱需求砸 / Force 改尺 / Share 分账均价脏改尺）。
5. RMS 建议卖价误读 → **P66**；旧价回写/Reinstate → **P65**；folio 补偿 → **P87**；强制可用性/超售/限制 → **P24/P33**；加人/套餐 ≠ 尺 → **P78/P69**；真紧 Ahead → **P03**；真 leftover Behind → **P05**（理由写真可售 Pace，仍不把 override 条数写成 dump 燃料；禁一夜 −15%）；早会一个动作 → **P45**。
6. **不发明 699**。不编华住改价·分账 SOP / 默认 override 频率 / Share 分账常模 / Vendor China Fact。不把 Vendor 例当中国店规。不建议用户点后台批量清 Fixed/Reset Override 当改尺（Advisor-First）。
7. 早会一个动作：纠正「单笔 Fixed/override / Force ≠ 公开 BAR」+ Hold 公开 BAR；先问 override 是单笔还是团块 Grid、是否 Fixed、Discount Reason 是否审计、Force 是否只开码不开尺、Share 是分账还是 Accompanying。

## 禁止

- 把 14/399/799 / Fixed 条数 / Override 次数 / Force 开关当市场 Fact
- 编华住改价·分账 SOP、默认 override 频率、Share 分账常模、699 Fact、Vendor China Fact
- 把 OPERA/RoomKey/RMS/HotelKey Vendor 例写入本仿真当中国店规
- 开 **P88** / **P89** / 新理论 slug（T06-16 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack / P63 Queue 核心 / P24 Sell Limit 核 / P37 DNM 核**（本卷核心是单笔改价/强制可用性 ≠ 公开尺）
- 把本卷当成已有 RMS dump 仿真或 Reinstate 仿真的重写（那是系统建议/旧价回写；本卷专拍 **Fixed/Amount Override/Force 误读改尺**）

## Outcome 标签

- 399 = 被拒绝的 dump（Fixed / Rate Amount Override / Discount Reason / Force Availability 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。真可售 Remaining 14，Pace Ahead，公开灵活 BAR 799。单笔改价/强制层：多笔 Fixed Rate；Daily Details Rate Amount 手改偏多；Override Reasons 口述混进早会；另有 Force Availability / Allow OB 开码（Simulation 闸，不是 Fact）。销售/GM 把 Fixed/override 条数/Force 开码当成假弱或新尺：Fixed 多 / override 多 / Force 开了 → 拟议 BAR→399。本店 Fixed/Override 字段 / 华住改价·分账 SOP / 默认 override 频率 / Share 分账常模 = **NV，不编**。

### 2. Diagnosis

**P66** + **P65**（过程 ± **P87** ± **P24/P33** ± **P78/P69** ± **P01/P64** ± **P03/P05**）。三把尺：公开 BAR 799 ≠ Fixed/Amount Override（单笔改金额钉住，不改 BAR Type）≠ Force Availability（强制开码/超售闸）。先拆：override 是单笔还是团块 Grid、是否 Fixed、Discount Reason 是否审计、Force 是否只开码不开尺、Share 是分账还是 Accompanying、真 Remaining 是否仍 14、Pace 是否仍 Ahead。形「Fixed/override 所以 dump 399」+ 形「Force 开了=新尺」（禁）。Ahead 夜：单笔改价层不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack ≠ P63 Queue 核 ≠ P24 Sell Limit 核 ≠ P37 DNM 核。** T06-16 deepen **已 skip**（无新轴；本卷是既有 P66/P65 的 Fixed/Override/Force 专拍）。

### 3. Opportunity / Risk

机会：拆单笔改价层后高峰仍 Hold 公开灵活；Fixed/Amount Override 是预订级例外审计不是定价问题；Force 交给可用性闸不砍尺；Share 分账不当 ADR 脏燃料。风险：把「override 很多」训练成新 BAR；把 Force 开码写成全店弱需求砸到 399；把分账均价脏当 dump 燃料后再一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
Reservation-amount / Force layer: verify Fixed vs public BAR · Amount Override single-res vs Block Grid · Discount Reason audit? · Force only opens code not scale? · Share billing vs Accompanying?
If misread layer: fix FO/ops discipline (P66/P65/P87/P24/P33)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住改价·分账 SOP；默认 override 频率；Share 分账常模；699 Fact；Vendor China Fact；一夜 −15%；P88；代点后台批量清 Fixed/Reset Override 当改尺
Misroute: 真 Ahead 且真可售紧 → P03；真 Behind leftover → P05（理由 Pace；override 条数不当 dump 燃料）；RMS 建议卖价 → P66；旧价回写 → P65；folio 补偿 → P87；强制可用性/超售 → P24/P33；加人/套餐 → P78/P69；早会 → P45
```

### 5. Why

OPERA 5.6 Fixed Rates：显式 override 码价金额并勾 Fixed；Discount+Reason 可挂；再手改可清空 Discount。→ **单笔 Fixed ≠ 公开 BAR rewrite**。OPERA Cloud Updating Reservation Daily Details：Rate Amount 可 override；Fixed Rate 钉住；Discount Amount/% + Reason。→ **日明细改价 ≠ BAR Type**。OPERA Cloud Configuring Rate Override Reasons：Block Room Grid Rate Override 原因码。→ **团块改价审计 ≠ 公开尺**。RoomKey How to Override a Rate：Enable Override + Reason；改金额保留 Client Type/Market。→ **授权单笔改金额 ≠ dump 公开 BAR**。RMS Cloud Reservation Base Rate Override：绕过 Dynamic Pricing；可 Reset。→ **绕过动态价 ≠ 公开尺永久改写**。HotelKey Force Availability and Allow Overbooking：Force Rate Plan + Allow OB + Override Reason。→ **强制可用性 ≠ BAR rewrite**。Pace Ahead + remaining 14 = 需求仍紧，不是「Fixed/override 多/Force 开了」dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把单笔改价/强制开码层永久化成 399 dump；预订级金额尺与定价尺分家。不伪造增收、不代批量清 Fixed、不发明 699。

### 7. Risk

若对象其实是 RMS 建议卖价 dump → 同 **P66**（本卷不重写系统建议核）。若旧价 Reinstate → **P65**。若 folio 补偿 → **P87**。若真 Behind 且改价层已分清 → **P05/P02**（仍不把 override 条数写成 dump 燃料；禁一夜 −15%）。本店字段名 / 华住 SOP / 默认 override 频率 / Share 分账常模 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；override 是单笔还是团块 Grid；是否 Fixed；Discount Reason 是否审计；Force 是否只开码不开尺；Share 是分账还是 Accompanying；真 Remaining；是否误入 T-Window / T-Hurdle / P05 dump / P63 Queue 核 / P24 Sell Limit 核 / P37 DNM 核。

### 9. Re-evaluation Trigger

- 仍 Ahead / 真可售 remaining 仍紧 → 继续 Hold 公开 BAR；Fixed/Override/Force 不当改尺令。
- 确认 FO 滥改 Fixed / 无理由 Override → 作业侧收口权限与 Reason 审计（P66/P65）；BAR 仍 Hold。
- 真 Ahead 且真可售紧 → **P03**（理由真剩余，不是「override 条数看着多」）。
- 真 Behind 且改价层已分清 → **P05/P02**（理由 Pace；仍不从 override 条数改写 BAR；禁一夜 −15%）。
- Force 只开码后 → 按确认 Pace 再评，不是按 Force 开关一夜 ±15%。
- 预算月末压力 → **T20/P56**，不是 Fixed/Override 改尺许可证。

### 10. Confidence

方向 Medium（能拆单笔改价/强制可用性 ≠ BAR + Pace Ahead + 「override≠定价权」）。点字段名 / 华住 SOP / 默认 override 频率 / Share 分账常模 Low（NV）。Evidence A Vendor OPERA Fixed Rates + Daily Details + Rate Override Reasons + RoomKey Override + RMS Override + HotelKey Force（§152；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 Fixed / Rate Amount Override / Force Availability dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P66 + P65 主过程；+ P87/P24/P33/P78/P69/P01/P64/P03/P05。**T06-16 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-06 18:17 C06-18，不改正文）：§153 CASE 指针复述 §152。Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-06 20:17 R06-20，不改正文）：§154 新开 Clock Manual Price + Apaleo Change Prices + Protel RBD Override rate。Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。
