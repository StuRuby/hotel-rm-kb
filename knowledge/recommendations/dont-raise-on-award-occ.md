# Decision Card: Don't Raise on Award OCC（积分免房抬高的 OCC → 不自动涨；空间可用升级占套房 → 不停 BAR dump）

> 资产：Advisor Decision Card（P49 / T06·T10）  
> 路径：`recommendations/dont-raise-on-award-occ.md`  
> 对应：问题树 §55；用户原话「今晚积分免房 12 间，OCC 92% 还要不要涨」「金卡都要免费升套房，套房卖空了散客怎么办」  
> 配套：`metrics/loyalty-award-upgrade.md` · `metrics/occ.md` · P01/P03 Remaining · P05 leftover-弱才 dump · P47 无关请客 · P13 付费房型差 · P23 会员 BAR  
> 状态：active · 2026-08-25 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 历史 Sold 不含无关 complimentary；兑房进 Sold **NV**）；A Vendor BW only（FX 报销档，不抄默认）；A Vendor Marriott only（NUA / elite 升级 subject to availability）；C（满房常多报销兑房，SA 升级常不报销）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-award-upgrade-sat.md`  
> 禁止：按含兑房的 PMS OCC 自动 Increase BAR；把套房「空」当 leftover dump；把 BAR 写成兑房价；一夜 −15%；编华住结算 / 抄 BW % 当中国默认 / Marriott 中国网格 / OMAAT USD；发明 STR Award OCC；写满本以外的 P50；操作 PMS。无关请客 → P47。付费差 → P13。

```yaml
decision: Do not raise BAR off award-inflated PMS OCC; stop discretionary space-available upgrades when paid remaining is tight; do not dump remaining standards because suites were given away
scenario: User OCC looks high because loyalty award/redemption nights occupy inventory, or suites look leftover because they were given as space-available elite upgrades
required_inputs:
  - Stay_Date
  - Physical_rooms
  - Award_or_redemption_RN（缺则问，不编 12）
  - Space_available_upgrade_RN（缺则问，不编 8）
  - Sold_or_OTB_and_whether_PMS_counts_awards_as_occupied
  - whether_upgrade_is_confirmed_award_or_contract_guarantee
  - pace_pickup_whether_ahead
signals_for:
  - pms_occ_high_and_award_nights_material
  - gold_elite_space_available_suite_upgrades_on_peak
  - suites_look_empty_but_were_upgraded
  - gm_wants_plus_100_off_92_occ
  - fo_wants_to_keep_upgrading
  - awards_coded_as_unrelated_comp
signals_against:
  - unpaid_rooms_are_unrelated_employee_owner_FAM (then P47)
  - paid_room_type_differential (then P13)
  - member_BAR_vs_public_BAR (then P23)
  - confirmed_upgrade_award_or_brand_guarantee (honor; not discretionary)
  - paid_remaining_tight_and_pace_ahead_after_recompute (then P01/P03; reason is paid remaining, not 92%)
  - true_paid_leftover_weak_and_market_weak (then P05 fences on empty paid rooms only; BAR ≠ award rate)
recommended_action: 先拆兑房与空间可用升级。PMS OCC 因兑房虚高 → 不涨 BAR。高峰/付费剩余紧 → 停或限额非确认兑房与空间可用免费升房（Hypothesis；品牌硬规则 NV 就条件化）。套房留给能付 BAR 的人。Hold 779–799 首选 799。弱市可接兑房，仍不把兑房价写成公开 BAR。兑房 ≠ P47。升级 ≠ P13。禁一夜 −15%。
risk: 把兑房当成需求；把免费升级当 leftover；用虚荣 92% 涨价；把 BW 报销% 当中国默认；赶已确认升级奖客人
follow_up: 用户是否给出兑房/升级间数与口径；是否已确认升级奖；重算后 24h 付费 Pickup；当晚是否还在新接兑房/新升套房
confidence: 能拆兑房则方向 Medium；缺间数只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「今晚积分免房 12 间，OCC 92% 还要不要涨」「金卡都要免费升套房，套房卖空了散客怎么办」。

主动词：**拆兑房 / 不按虚高 OCC 涨 / 高峰停空间可用升级 / 不 dump 被升级占掉的套房。**

不要用：无关请客 = P47。付费房型差 = P13。会员 BAR = P23。机组 = P31。政务 = P48。好看 OCC 来自维修 = P37。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要按积分免房抬高的 OCC 涨；不要把空间可用升级当 leftover dump。**

---

## 2. 硬门（先不动价）

命中任一 → **不要**用那张好看的 PMS OCC 或「空着的套房」去改 BAR：

1. **PMS OCC 高且兑房实质。** 先  
   `Paid remaining = Capacity − occupied − OOO`（occupied 已含兑房）  
   **不自动 Increase BAR。** 看付费剩余 + Pace（P01/P03）。  
2. **高峰/付费剩余紧，前台还在空间可用升套房或销售还在接非确认兑房。** 劝停 SA 升级；限额非确认兑房（Hypothesis；品牌硬规则 NV 就条件化）。Hold **779–799 首选 799**。  
3. **套房看起来空，其实是免费升级在住。** 不可当 P05 leftover。不要 dump 剩下的标准房。  
4. **用户没给兑房 / 升级间数。** **问，不编 12 / 8。** 条件化：若 ≈ 0 → 按原 OCC 进 P03/P05 检查单；若实质 → 先划掉。  
5. **已确认升级奖 / 合同保证升房。** 履约（形 F）。不是酌情。未知则问。  
6. **其实是无关请客 → P47。** 付费差 → P13。会员 BAR → P23。

为冲 OCC 或为「积分客不是真需求」而动价 **不是** 开门条件。

---

## 3. 何时可以动价（仍不是「按兑房定价」）

重算之后：

| 重算结果 | 动作 |
| --- | --- |
| 付费 Remaining 紧 + Pace Ahead / Days-to-Sellout < DTA | **P03**：先停非确认兑房/SA 升，再决定涨不涨。理由是**付费**剩余，不是 92%。价已最高只关不涨 |
| 付费 Remaining 厚 + DTA≤3 + Pickup≈0 + 市场不冰 | **P05** 三档围栏；对象是**付费空房**，不是兑房在住、也不是被升级占的套房。**禁止一夜 −15%**。不要把 BAR 写成兑房价 |
| 物理剩余薄 **因为** 兑房占着；付费需求仍在 | **Hold**；停 SA 升级。Hypothesis：限额非确认兑房（无 SOP） |
| 只是兑房撑起来的 92%，付费并不紧 | **不涨**；不是 High Demand |
| 弱市冰夜兑房 | **接兑房**；BAR 仍 Hold。弱市 SA 升级可以 |
| 无关请客 | **P47** |
| 付费房型差 | **P13** |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因 92% 去 +100。799 不是行情 Fact。

---

## 4. 缺兑房数时怎么说（不编）

```
IF 用户没给积分免房 / 兑房间数或空间可用升级间数
THEN 不发明 12 / 8，不发明华住结算，不抄 BW %
     问 4 个数：Physical / 当日兑房 / 当日 SA 升级 / 这张 OCC 是否含兑房
     在齐数之前：
       - 禁止「92% 所以涨」
       - 禁止「积分客不是真需求所以 399」
       - 禁止「金卡必须全升」
       - 可以：条件化两支
           若兑房+SA 升级 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
           若兑房实质 → 先划掉再谈价
```

用户给了「12 间兑房、180 物理」→ 用**用户的数**算，仍不升为行业常模。

---

## 5. 动作表

```text
Stay Date:
Physical / PMS occupied / Award RN / SA upgrade RN:
PMS OCC vs Paid remaining / Pace:
已确认升级奖 / 合同保证？
Decision: Hold BAR / 不涨 / 停 SA 升级 / 限额非确认兑房 / 不 dump / 移交 P03 / 移交 P05（仅付费空房）/ 移交 P47 / P13
Do-not-do:
  - 按 PMS 92% 自动涨（含 +100）
  - 按升级占着的套房 dump / 一夜 −15% / 399
  - 把兑房价写成公开 BAR
  - 编华住结算 / 抄 BW % / 发明 STR Award OCC
Trigger: 当晚停 SA 升级 / 停非确认兑房 → 重算 Remaining；付费变紧才评涨
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 销售当晚继续接非确认兑房 | 新 Award RN；付费 Pickup |
| 前台继续 SA 升套房 | 套房 Remaining；BAR 套房拒单 |
| 把兑房从 P47 请客桶处理 | 是否有品牌报销（金额 NV） |
| 真付费紧却因「怕误诊」死不涨 | 重算后仍紧且 Ahead → P03，不是永远 Hold |

---

## 7. 兼容

- P47 = 无关 $0 请客。本卡 = 积分兑房（可能有报销）+ 空间可用升级。award ≠ unrelated comp。  
- P13 = 付费房型差。本卡升级几乎无增量房费。upgrade ≠ paid differential。  
- P23 = 会员 BAR。免费升级 ≠ 会员价。  
- P05 dump 仅付费 leftover 真弱。兑房占用 / 升级占用不是 leftover。  
- P01/P03 看付费剩余，不是 92%。  
- T19：高峰兑房/升级机会成本是付费 BAR。  
- T20：不发明 399。  
- **禁止一夜 −15%。**

Advisor-First：建议拆口径、Hold 779–799 首选 799（Hypothesis）、高峰停 SA 升级。不关兑房码、不改 PMS 房态、不代报 STR。

仿真见 `cases/sim-2026-award-upgrade-sat.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 06:17 CST | 首版。不按兑房抬高的 OCC 涨；高峰停 SA 升级；不 dump 被升级占的套房。不编华住结算。STR 兑房进 Sold = NV。 |
