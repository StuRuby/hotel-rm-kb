# Decision Card: Counter or Reject Extra Crew（高峰 extra 机组：还价或拒，不杀户）

> 资产：Advisor Decision Card（P31）  
> 路径：`recommendations/counter-or-reject-extra-crew.md`  
> 对应：问题树 O12 · §40；用户原话「再加 20 间机组房，周六 BAR 已紧，接不接？」「380 vs 899 要不要黑出周末？」「机组很爽约，OTB 要当 Soft 吗？」  
> 剧本：P31 Crew / 航司协议  
> 理论：`group/group-displacement.md` · `theory/profit-contribution.md` · `theory/revenue-strategy.md`  
> 交叉：P10 额外块置换（不是重写）· P26 协议漏出 ≠ 机组 allotment · P24 不要为幽灵机组房 Walk 散客 · P28 Soft OTB 闸同类、病因不同 · T19 低于贡献不卖 · T20 不砸品牌底  
> 状态：active · 2026-08-22 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；STR Contract 口径 S；IDeaS Wash/LRA 词 A Vendor；航司价表/取消率非 Fact  
> Last Verified：2026-08-22  
> 仿真：`cases/sim-2026-airline-crew-saturday.md`  
> 禁止：悄悄接高峰 extra；关死航司账号；dump BAR 到机组价；一夜 −15%；发明 699；无史给超售间夜。

```yaml
decision: Counter or Reject extra crew rooms on a peak day; fence existing allotment; do not kill the airline account
scenario: Airline asks for extra rooms (e.g. +20) on a tight peak Saturday at contracted crew rate far below BAR; or user wants to blackout all crew / treat crew OTB as firm
required_inputs:
  - stay date + DTA + Pace/Pickup + remaining + public BAR
  - contracted allotment already on books vs extra room count and rate
  - airport vs city hotel
  - LRA/NLRA/blackout/cutoff/guaranteed-pay vs on-request if user has contract
  - crew cancel/wash history if any (else Unknown)
signals_for:
  - extra_on_weak_weekday_displaced_near_zero_and_contribution_positive
  - airport_hotel_base_demand_not_displacing_peak_transient
  - counter_higher_rate_or_fewer_rooms_or_shoulder_nights
signals_against:
  - peak_saturday_bar_tight_ahead_fast_sellout
  - silent_accept_at_crew_rate_vs_bar
  - kill_the_airline_account
  - dump_bar_to_crew_rate
  - raise_or_overbook_on_soft_crew_otb
  - walk_transient_to_protect_ghost_crew_room
recommended_action: 高峰 extra 默认 Counter（提价 / 缩间 / 改肩日）或 Reject。已签 allotment 先围栏，不问死 LRA 不关死账号。弱周中 Displaced≈0 且净>0 可接 extra。机组爽约 → 该块 Soft：不涨进取消潮，不按硬房超售。不要 dump BAR。
risk: 把 extra 当合同义务错接高峰；杀户后机场/周中底仓空；Soft OTB 当硬需求涨价或超售；为幽灵房赶散客
follow_up: 航司是否接受缩间或提价；高峰散客 Pickup；机组取消/wash 是否跳
confidence: 有日期+两列房量+BAR 则 extra 方向 Medium；点价与 wash% Low
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「再加 20 间机组、周六紧，接不接」「机组 380 vs BAR 899 要不要黑周末」「机组很爽约 OTB 当不当硬的」。

主动词：**Counter / Reject extra**；已签块 **KEEP / close extra only**。写到 Stay Date。  
不要用：只有一句「航司要照顾」无日期、无两列房量。

公开 BAR 走 Increase BAR / 幅度卡。本卡只回答 **这场 extra 接不接、已签块关不关**。

---

## 2. 硬门（先停）

命中则不要用「按合同价接满 extra」或「关死航司」当第一刀：

1. 城市店（或任何店）该夜 Pace Ahead / Fast / Sellout，散客能卖满 → extra **默认 Counter 或 Reject**，不是 Accept  
2. 用户已给 **LRA** 且该日未 blackout → 已签块 / 最后一间按合同开；**extra 仍单独算**，LRA ≠ 无限 +20  
3. 弱市工作日、Displaced≈0、净贡献>0（有成本才说）→ extra **可留**  
4. 要把 BAR dump 到机组价 → **拒绝**  
5. 没合同文件 → 不编必须开 / 必须 LRA / 必须保证付款；高峰 extra 按 on-request Hypothesis  
6. 机组取消史差或正在 wash → OTB **Soft**；停涨；停按硬房超售  
7. 公开价已最高 → 公开只关不涨（extra 仍可拒）  
8. 用户没声明品牌底 → **不发明 699**

---

## 3. 动作表

```text
Stay Dates:
Airline:        点名账号，不要默认「全部航司」
Hotel type:     机场店 | 城市店
Contract:       保证付款 / on-request / LRA / NLRA / Unknown
Allotment:      KEEP（先留）；Unknown LRA → 不杀户
Extra Sat Peak: Counter（价或房量）| Reject
Extra weak Tue: Accept if Displaced≈0 and contrib>0 | else Counter
Crew OTB:       Soft if wash/same-day cancel history bad
Public BAR:     不降到机组价；价已最高只关不涨
Transient:      保持可订
Do-not-do:
  - 按机组价悄悄接高峰 extra
  - 关死航司账号
  - BAR → 机组价
  - 一夜 −15%
  - 发明 699
  - 无史超售精确间夜
  - 为幽灵机组房 Walk 散客
```

**高峰 extra vs 公开 BAR：** 除非合同把这场 extra 写成 LRA 且仍有最后一间，否则不应低于当日公开 BAR 还加量。Unknown → Hypothesis：高峰 extra 拒或收到保本带；已签块留。

压缩日 extra 限额 ≤ 剩余 − 尾部 20–30%（Hypothesis，与 P10 同尺）。

---

## 4. Counter 口径（给销售）

对航司 **extra**：

- 「周六最多 __ 间，或房价到 __–__ 首选 __」  
- 「周五/周二可以按合同价加」  
- 「已签的 __ 间仍按合同」

不要说「我们不再合作」。  
对内：Counter 不是把零售 BAR 降到 380。

---

## 5. 顾问三句（本卡验收）

1. 额外机组房挤满房周六，默认 Counter 或 Reject，不是按 380 悄悄接。  
2. 合同里的 allotment 先问围栏和 wash，不要一律关死航司账号。  
3. 机组很爽约就把那块 OTB 当 Soft，禁止涨进取消潮，也禁止按硬房超售。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 18:17 CST | 首版。P31 主卡。高峰 extra Counter/Reject；已签块围栏不杀户；Soft OTB。 |
| 2026-08-22 20:17 CST | 复盘：KEEP 已签块 ≠ P26 blackout 漏出码。无 needs_revision。 |
