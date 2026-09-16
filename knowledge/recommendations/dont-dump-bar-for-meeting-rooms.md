# Decision Card: Don't Dump BAR for Meeting Rooms（会带房不是公开 BAR；无贡献不接低价房块）

> 资产：Advisor Decision Card（T-Meet）  
> 路径：`recommendations/dont-dump-bar-for-meeting-rooms.md`  
> 对应：问题树 §56；用户原话「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」  
> 理论：`theory/meeting-with-rooms.md`  
> 配套：`metrics/meeting-with-rooms.md` · P10 · P30 · T18 `accept-low-room-for-fnb.md` · `group/group-displacement.md` · P22 · P48  
> 状态：active · 2026-08-25 08:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；S（STR 厅租/AV = Other F&B）；A（RevPAS 词条，**不是 BAR**）；C/D（中文贸易方向）  
> Last Verified：2026-08-25  
> 仿真：`cases/sim-2026-meeting-10-rooms-sat.md`  
> 禁止：无厅+餐贡献就 Accept 低价房块；把公开 BAR 砍成会带房价；按参会 OCC 涨 BAR；编华住 SOP / 餐毛利 / 厅租行情 / 399 行情 Fact；写满本 P50；把 RevPAS 当 BAR；操作 PMS。

```yaml
decision: Do not Accept a cheap meeting room-block without user-supplied space+F&B contribution; do not dump public BAR to the meeting-room rate; on peak Counter rooms or reject rooms and keep the meeting
scenario: Sales wants a small cheap room block to win a meeting (会带房); or meeting attendees inflate OCC; or someone wants BAR rewritten to 399
required_inputs:
  - Stay_Date
  - Physical_rooms
  - meeting_pax_and_function_space（缺则问，不编 80）
  - room_block_by_night_and_rate（缺则问，不编 10 / 399）
  - space_plus_fnb_contribution_FROM_THE_USER（缺则不 Accept 低价房）
  - paid_transient_remaining_and_pace
  - public_BAR
signals_for:
  - sales_uses_cheap_rooms_to_win_meeting_without_contrib
  - weekend_compression_and_block_displaces_bar
  - meeting_occ_looks_high_but_transient_remaining_not_tight
  - weekday_leftover_thick_meeting_space_paid
signals_against:
  - social_banquet_or_wedding (then P30)
  - rooms_only_group (then P10)
  - government_perdiem_block (then P48)
  - citywide_exhibition_shoulder_not_this_inquiry (then P22)
  - user_supplied_contrib_covers_room_opp_and_not_peak_sellout (then Accept rooms as fenced block, still do not rewrite BAR)
recommended_action: 先拆厅/会 vs 餐 vs 占房。无贡献数字不得 Accept 低价房块。会议可留（厅付了）。高峰 Counter 房价或缩间 / 拒房留会。Hold BAR 779–799 首选 799。禁止一夜 −15%。399/80/10 只 Simulation。不写 P50。
risk: 用便宜房赢会却挤掉能卖满的 BAR；把会带房价写成公开 BAR；按参会 OCC 涨价；厅租双计
follow_up: 用户是否给出厅+餐贡献；房块能否改价/缩间；冲突日散客 Pickup
confidence: 有日期+房量+BAR+剩余则方向 Medium；缺贡献只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-25
```

---

## 1. 何时用

「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」。

主动词：**不接无贡献的低价房块 / 不把 BAR 砍成会带房价 / 高峰 Counter 或拒房留会。**

不要用：客房-only → P10。婚宴 → P30。政务块 → P48。会展肩日市场形状 → P22。

没有 Stay Date → 仍条件化，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用会带房改公开 BAR；无贡献不接低价房。**

---

## 2. 硬门（先不动公开 BAR）

命中任一 → **不要**用会带房价或参会 OCC 去改 BAR：

1. **销售要用低价房赢会，用户没给厅+餐贡献。** **不 Accept 便宜房块。** 厅付了 → 会可以留。客房 Counter。  
2. **要把公开 BAR 写成会带房价（399）。** **拒绝。** 399 只 Simulation，不是行情 Fact。  
3. **参会人把 PMS OCC 打高。** **不按那张 OCC Increase BAR。** 看 transient remaining + Pace。  
4. **周末/高峰、剩余紧或 Pace Ahead，10 间也会挤 BAR。** 默认 **Counter / 拒房留会。** Hold **779–799 首选 799**。  
5. **用户没给房块间数或房价。** **问，不编 10 / 399 / 80。**  
6. **其实是婚宴 → P30。** 客房-only → P10。政务 → P48。

为冲 OCC 或为「赢下会议」而动公开 BAR **不是** 开门条件。

---

## 3. 何时可以动（仍不是「BAR=会带房价」）

拆完之后：

| 重算结果 | 动作 |
| --- | --- |
| 高峰 Remaining 紧 + Pace Ahead + 房块会挤 BAR | **Counter** 房价到 BAR 带或缩间；或 **拒房留会**。Hold BAR 779–799 首选 799 |
| 工作日 leftover 厚 + 厅已付 + **无**贡献数字 | **留会；Counter 客房**（不 Accept 399 块当赢会成本）。**BAR 不改成 399** |
| 工作日 leftover 厚 + 用户给出 net > 机会成本 | **Accept 会议 + 围栏房块**（不是公开 BAR）。公开 BAR 不动 |
| 参会 OCC 虚高、transient 并不紧 | **不涨 BAR**；不是 High Demand |
| 社交宴会 | **P30** |
| 客房-only | **P10** |
| 政务 per-diem | **P48** |

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。不要因会带房 OCC 去 +100，也不要把 BAR 改成 399。399 / 80 / 10 **只贴标签**，不是市场 Fact。799 不是行情 Fact。

---

## 4. 缺贡献/间数时怎么说（不编）

```
IF 用户没给厅+餐贡献
THEN 不 Accept 低价房块去赢会议
     问：厅是否已付 / 贡献额（用户认领）/ 按夜房块×价 / transient remaining
     在齐数之前：
       - 禁止「10 间很少所以随便给」
       - 禁止「BAR 跟到会带房价」
       - 可以：条件化两支
           若 leftover 厚且厅已付 → 留会；客房 Counter
           若高峰会挤 BAR → Counter/拒房留会；Hold BAR
IF 用户没给 10 / 399 / 80
THEN 不发明这些数。仿真数字只在案例文件。
```

用户给了「10 间 @399、80 人」→ 用**用户的数**算，仍不升为行业常模或华住 SOP。

---

## 5. 动作表

```text
Stay Date:
Physical / remaining / Pace:
会议人数 / 厅是否已付 / 厅+餐贡献（用户）:
房块按夜 × 会带房价:
公开 BAR:
Decision: 留会 / Counter 客房 / 拒房留会 / Hold BAR / 拒绝 BAR→会带房价 / 移交 P10 / P30 / P48 / P22
Do-not-do:
  - 无贡献 Accept 低价房块
  - BAR → 399 / 会带房价 / 华住 SOP
  - 一夜 −15% 当新 BAR
  - 按参会 OCC 涨 BAR
  - 厅租双计
  - 写 P50 / 操作 PMS
Trigger: 用户补贡献或房块改价/缩间 → 重算 NetDelta；高峰 ET 上修到将满 → 维持 Counter
```

---

## 6. 风险 / Watch

| 风险 | Watch |
| --- | --- |
| 销售继续按 399 接周六 | 新会带房 Pickup；散客 Pickup |
| 把 399 写进公开 BAR | 当场打断：围栏块 ≠ BAR |
| 按 80 人住店 OCC 涨价 | 问几间是会议块、几间是散客 |
| 厅租加两遍 | STR Other F&B；套餐含厅只计一次 |

---

## 7. 兼容

- P10 = 客房-only。本卡占房仍用置换。  
- P30 = 婚宴。  
- T18 = 无贡献不翻盘。本卡沿用。  
- P48 = 政务协议。  
- P22 = 会展肩日。  
- P05 leftover 不是把 BAR 改成 399。  
- **P50 仍未写。**
