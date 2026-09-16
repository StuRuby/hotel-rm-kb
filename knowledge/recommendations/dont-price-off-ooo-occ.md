# Decision Card: Don't Price Off OOO Occupancy（维修抬高的 OCC / 不可售的空房 → 不自动涨、不自动砸）

> 资产：Advisor Decision Card（T06）  
> 路径：`recommendations/dont-price-off-ooo-occ.md`  
> 对应：问题树 §1.0 · §42；用户原话「OCC 已经 92% 要不要再涨 / 还剩 40 间今晚砸一刀 / 对标 Comp OCC 高 8 个点」  
> 理论：`theory/capacity-ooo.md`  
> 配套：`metrics/inventory.md` · `metrics/occ.md` · P03 Remaining · P05 last-minute · P13 房型 OOO · T19 · P33 CTA≠OOO · P36 价不可比  
> 状态：active · 2026-08-23 00:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 短 OOO 不扣报告可用房）；中国报表名非 Fact  
> Last Verified：2026-08-23  
> 禁止：无 OOO 数就发明 20；用好看 PMS OCC 自动 Increase BAR；把维修空房当 dump 对象；一夜 −15%；操作 PMS。剧本见 P37。

```yaml
decision: Recompute Remaining on sellable rooms; do not auto Increase BAR off OOO-inflated OCC; do not dump if leftover is unsellable; do not MPI against Comp if denominators differ
scenario: User OCC looks high with material OOO, or leftover looks fat because maintenance/house-use/locks were not subtracted, or PMS OCC beats STR Comp by several points
required_inputs:
  - Stay_Date
  - Physical_rooms
  - OOO_or_unsellable_count（维修/自用/锁房；缺则问，不编 20）
  - Sold_or_OTB
  - whether_comp_figure_is_STR_or_in-house
signals_for:
  - occ_high_and_ooo_material
  - leftover_high_and_ooo_or_locks_inside_the_leftover
  - pms_occ_vs_str_comp_without_same_denominator
  - ooo_count_missing
signals_against:
  - sellable_remaining_tight_and_pace_ahead_after_recompute
  - sellable_remaining_fat_dta_short_market_not_ice_after_recompute
  - both_sides_str_same_availability_rule
recommended_action: 先重算可售 Remaining。OCC 好看且 OOO 实质 → 不自动涨 BAR。空房好看且里面是维修/锁 → 不砍。没给 OOO 数 → 问，不发明 20。真可售紧走 P03；真可售厚走 P05（禁一夜 −15%）。
risk: 把工程关房当成需求；或把不可售当弱需求砸穿品牌带
follow_up: 用户是否给出分房型不可售；重算后 24h Pickup；STAR 是否仍按全量房量
confidence: 分母齐则方向 Medium；缺 OOO 只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「OCC 已经 92% 要不要再涨」「还剩 40 间空着今晚砸一刀」「对标 Comp 我们高 8 个点」。

主动词：**重算可售 / 不自动涨 / 不自动砸 / 不同口径不对 MPI。**

不要用：OOO=0 且口径已声明 → 直接 P01/P03 或 P02/P05。只有截图价差 → P36。只有 CTA 挡需求 → P33。

没有 Stay Date → 仍条件化，不要说无法判断。

---

## 2. 硬门（先不动价）

命中任一 → **不要**用那张好看/难看的 OCC 或「空 40」去改 BAR：

1. **OCC 高且 OOO/不可售实质**（用户给了数，或口头「在维修/装修」）。先  
   `Sellable Remaining = Available_to_sell − Sold`  
   `STR OCC = Sold / Physical`（短 OOO 不扣，S）。  
   不自动 Increase BAR。  
2. **剩余/空房高，且里面含维修、自用、锁房、渠道关死。** 不可售不是砸价对象。不要砍。先打开真能卖的。  
3. **本店 PMS OCC（扣 OOO）对 STR Comp OCC（短 OOO 不扣）。** 那 8 个点不当 MPI，更不当涨价令。  
4. **用户没给 OOO/不可售间数。** **问，不发明 20。** 条件化：「如果维修是 0，再按你给的 OCC/剩余走 P03/P05；如果维修是 N，先划掉 N。」

为冲 OCC 或为「看起来空」而动价 **不是** 开门条件。

---

## 3. 何时可以动价（仍不是「按 OOO 定价」）

重算之后：

| 重算结果 | 动作 |
| --- | --- |
| 可售 Remaining 紧 + Pace Ahead / Days-to-Sellout < DTA | **P03**：先关低价，再决定涨不涨。价已最高只关不涨 |
| 可售 Remaining 厚 + DTA≤3 + Pickup≈0 + 市场不冰 + 价明显高于可比竞对 | **P05** 三档；围栏优先；**禁止一夜 −15%** |
| 可售 Remaining 其实很少，只是物理空着 | **Hold**；修工程或接受供给；不 dump |
| 只是分母小撑起来的 92%，可售并不紧 | **不涨**；不是 High Demand |
| 长期整层关、接近 STR Extended Closed / 永久撤房 | **问**是否走官方房量变更（Hypothesis），不是秘密按 20 间改 BAR |

幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **先换分母**。

---

## 4. 缺 OOO 数时怎么说（不编）

```
IF 用户没给维修/自用/锁房间数
THEN 不发明 20，不发明中国报表字段名
     问 3 个数：Physical / 当日不可售（分房型）/ 那张 Comp 是不是 STAR
     在齐数之前：
       - 禁止「92% 所以涨」
       - 禁止「空 40 所以砸」
       - 禁止「高 8 个点所以我们更满」
       - 可以：条件化两支
           若不可售 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
           若不可售实质 → 先划掉再谈价
```

用户给了「20 间 OOO、180 物理」或「40 空里 25 维修」→ 用**用户的数**算，仍不升为行业常模。

---

## 5. 动作表

```text
Stay Date:
Physical / PMS Available / OOO+自用+锁:
Sold or OTB:
Sellable Remaining（声明口径）:
STR OCC（Sold / Physical，短 OOO 不扣）:
Comp 口径（STAR / 店内）:
Decision: Hold BAR / 不涨 / 不砸 / 移交 P03 / 移交 P05
Do-not-do: 按 PMS 92% 自动涨；按物理空 40 一夜 −15%；用混口径 MPI；发明 20
Trigger: 工程结束 / 不可售下降 → 重算 Remaining；真可售变紧才评涨
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 工程提前结束，可售突然变厚 | 24h 不可售间数；结束日当天按 P05 而不是继续按 92% 涨 |
| 把渠道关死当成 OOO | 先 Open（P33 / 开库存卡），不归因维修 |
| 长期关房该改 STR 房量却没改 | 问用户；未改则 Comp 仍按全量，本店 PMS 会持续虚高 |
| 真可售紧却因「怕误诊」死不涨 | 重算后仍紧 → P03，不是永远 Hold |

---

## 7. 兼容

- P03 Remaining = 可售，不是物理空。  
- P05 remaining 是 OOO → 禁止 dump。  
- P13 一型 OOO → 先扣该型再谈压缩。  
- P33 CTA ≠ OOO。  
- P36 价不可比 ≠ 本卡量不可比。  
- T19：OOO 不是未售需求；可售空房才谈贡献。无成本不说总比空着强。  
- T20：不发明 699 去清「假 40」。  
- **禁止一夜 −15%。**

Advisor-First：建议工程结束日、是否报 STR 改房量、BAR Hold/涨/围栏。不点维修单、不改 PMS 房态、不代报 STR。

剧本见 **P37** `advisor-playbooks/ooo-capacity.md`（2026-08-23 02:17）。正文不重写。

对 MPI 问 **Historical STAR**（短 OOO 不扣，S）。前瞻 OTB% 问 **Forward STAR Adjusted**（排除 OOO，A）。两张不是同一把尺。P37 重算后 Days-to-Sellout 仍管是否进 P03。（2026-08-23 04:17，不改正文）
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。
