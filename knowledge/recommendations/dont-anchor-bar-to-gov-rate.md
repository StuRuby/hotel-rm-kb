# Decision Card: Don't Anchor BAR to Gov Rate（协议价/GSA 不是公开 BAR；协议 OCC 不是涨价令）

> 资产：Advisor Decision Card（T-Gov / T10）  
> 路径：`recommendations/dont-anchor-bar-to-gov-rate.md`  
> 对应：问题树 §54；用户原话「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」  
> 理论：`theory/government-negotiated-rate.md`  
> 配套：`metrics/government-negotiated-rate.md` · P01/P03 Remaining · P05 leftover · P26 企业协议漏出 · P31 机组 · P37 永久 HU · P47 Comp  
> 状态：active · 2026-08-25 00:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 三分 Transient/Group/Contract，无 Government KPI）；A US Fact（GSA $110 **不是中国**）；A 框架（531 限额内凭票，**表 NV**）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-gov-rate-sat-blackout.md`  
> 禁止：把 BAR 锚到协议价或 GSA $110；按含协议的 PMS OCC 自动 Increase BAR；把政府价标 complimentary；一夜 −15% 当新 BAR；编华住政务 398；写满本 P48；引用未打开的中国限额表数字；操作 PMS。

```yaml
decision: Do not raise BAR off gov-inflated PMS OCC; do not dump public BAR to the negotiated/per-diem rate or to GSA $110; do not recode a paid gov rate as complimentary
scenario: User OCC looks high because a government/per-diem/政务协议 block is occupying rooms, or sales wants BAR to match the contracted/gov/GSA number, or front desk treats 公务员 as free
required_inputs:
  - Stay_Date
  - Physical_rooms
  - Gov_or_perdiem_or_政务协议_rooms_and_rate（缺则问，不编 40 / 480 / 398 / $110 中国锚）
  - whether_the_rate_is_paid（有房价 vs $0）
  - paid_transient_remaining_after_gov_block
  - pace_pickup_whether_ahead
  - whether_contract_allows_blackout_or_cap（缺则条件化，不编必须开）
signals_for:
  - pms_occ_high_and_gov_block_material
  - sales_wants_bar_to_match_gov_or_gsa
  - front_desk_codes_gov_as_comp
  - peak_weekend_gov_displacing_bar
  - leftover_looks_fat_only_if_you_count_gov_as_empty
signals_against:
  - rooms_are_unrelated_comp_at_$0 (then P47)
  - permanent_staff_apartment_6plus_months (then P37)
  - airline_crew_allotment_or_extra (then P31)
  - corporate_weekend_leak_not_gov (then P26)
  - paid_transient_remaining_tight_and_pace_ahead_after_stripping_gov (then P01/P03; reason is paid-transient remaining, not 92%)
  - true_paid_leftover_weak_and_market_weak (then P05 fences on empty paid rooms; still do not set BAR = gov rate)
recommended_action: 先定性有房价的合同价。PMS OCC 因协议虚高 → 不涨 BAR。销售要对齐协议价或 GSA → 拒绝。误标 Comp → 纠正桶，P47 不吃。高峰置换 → 限额/关协议/blackout（Hypothesis，问合同），Hold BAR 779–799 首选 799。禁止一夜 −15%。本店协议价没给就问。限额表 NV 不引用。不写 P48。
risk: 把协议 OCC 当 High Demand；把 BAR 公开卖成差旅价；把公务员当免费；把 GSA $110 当中国锚
follow_up: 用户是否给出协议间数与房价；合同周末可否 blackout；24h 非协议 Pickup
confidence: 能拆协议占用则方向 Medium；缺房价/间数只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」。

主动词：**不按协议 OCC 涨 / 不把 BAR 锚到协议价或 GSA / 有房价不进 P47 / 高峰置换可限额或 blackout。**

不要用：无关免费 $0 → P47。永久宿舍 → P37。机组 → P31。企业协议周末漏出 → P26。非协议 remaining 真紧且 Ahead → P01/P03（理由是付费剩余，不是 92%）。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要把公开 BAR 锚到政务/差旅/GSA；不要按协议抬高的 OCC 涨。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用那张好看的 PMS OCC 或协议数字去改 BAR：

1. **PMS OCC 高且政府/差旅协议实质。** 先拆非协议 remaining。**不自动 Increase BAR。** 看付费非协议剩余 + Pace（P01/P03）。  
2. **销售要把 BAR 对到协议价、差旅标准或 GSA $110。** **拒绝。** $110 = US Fact，不是中国 BAR。现行中国限额表 **NV**，不引用。本店协议价没给 → **问，不编。**  
3. **前台把政府价当免费。** 有房价 → 合同/协议桶。**P47 不吃。**  
4. **用户没给协议间数或房价。** **问，不编 40 / 480 / 398。** 条件化：若协议 ≈ 0 → 按原 OCC 进 P03/P05；若实质 → 先划掉再谈价。  
5. **为冲 OCC 要把 BAR 砍到协议价。** **禁止。** 弱市 leftover 走 P05 围栏，对象仍是付费空房，不是把公开 BAR 改成协议。**禁止一夜 −15%。**  
6. **其实是 OOO / 永久 HU → P37。** 机组 → P31。请客房 $0 → P47。

为冲 OCC 或为「跟差旅标准」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「按协议定价」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 非协议 Remaining 紧 + Pace Ahead | **P03**：先关低价/限额协议（Hypothesis），再决定涨不涨。理由是**非协议**剩余，不是 92%。价已最高只关不涨 |
| 非协议 Remaining 厚 + DTA≤3 + Pickup≈0 + 市场不冰 | **P05** 三档围栏；对象是**付费空房**。**不要**把 BAR 写成协议价。**禁止一夜 −15%** |
| 物理剩余薄 **因为** 协议占着；付费 BAR 需求仍在 | **Hold BAR**；建议该晚 **限额 / 关协议 / blackout**（问合同，Hypothesis）。不 dump |
| 只是协议撑起来的 92%，非协议并不紧 | **不涨**；不是 High Demand |
| $0 无关免费 | **P47** |
| 永久员工公寓 6+ 个月 | **P37** |
| 机组 extra / allotment | **P31** |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因 92% 去 +100，也不要把 BAR 改成 480。480 / $110 **只贴标签**，不是中国限额 Fact。799 不是行情 Fact。

---

## 4. 缺协议数时怎么说（不编）

```
IF 用户没给政务/差旅协议间数或房价
THEN 不发明 40，不发明 480，不发明华住 398，不把 GSA $110 当中国锚
     问 4 个数：Physical / 当日协议间数与房价 / 这张 OCC 是否含协议 / 合同该晚可否 blackout 或限额
     在齐数之前：
       - 禁止「92% 所以涨」
       - 禁止「BAR 跟到差旅标准 / GSA」
       - 禁止「公务员算免费」（先问有没有房价）
       - 可以：条件化两支
           若协议 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
           若协议实质且有房价 → 先划掉非协议剩余再谈价；高峰可建议限额/blackout
```

用户给了「40 间 @480、180 物理」→ 用**用户的数**算，仍不升为行业常模或中国限额 Fact。

---

## 5. 动作表

```text
Stay Date:
Physical / PMS occupied / 政务或差旅协议间数×房价:
非协议 Remaining / Pace:
这张 OCC 是否含协议:
合同可否 blackout / 限额:
Decision: Hold BAR / 不涨 / 不把 BAR 锚到协议或 GSA / 纠正 Comp 误标 / 建议限额或 blackout / 移交 P03 / 移交 P05（仅付费空房，BAR≠协议价）/ 移交 P47 / P37 / P31
Do-not-do:
  - 按 PMS 92% 自动涨
  - BAR → 协议价 / GSA $110 / 华住 398
  - 一夜 −15% 当新 BAR
  - 把有房价的政府单标 complimentary
  - 引用未打开的中国限额表
  - 写 P48 / 操作 PMS
Trigger: 该晚停接或限额协议 → 重算非协议 Remaining；付费变紧才评涨
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 销售继续按协议码接周六 | 新协议 Pickup；非协议 Pickup |
| 把 GSA $110 写进中国早会 | 当场打断：US Fact only |
| 把公务员当 P47 免费 | 问房价；有价走本卡 |
| 真非协议紧却因「怕误诊」死不涨 | 重算后仍紧且 Ahead → P03，理由不是 92% |

---

## 7. 兼容

- P47 = $0 无关 Comp。本卡 = 有房价合同价。  
- P37 = 永久 HU 缩 Available。  
- P31 = 机组，不是政务。  
- P26 = 企业协议周末漏出；本卡客源是政府/差旅。  
- P01/P03 = 非协议 remaining + Pace。  
- P05 leftover 不是把 BAR 改成 480。  
- **P48 仍未写。**

> 交叉指针（2026-08-28 22:17，不改正文）：商业年标 / 企业 RFP 不要锚公开 BAR 走 **P71** `dont-anchor-bar-to-corp-rate.md`。本卡仍管政务/差旅协议 ≠ BAR。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
