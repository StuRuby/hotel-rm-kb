# Decision Card: 低房价高餐饮 — 接不接 / 为了餐饮把房卖掉吗

> 资产：Advisor Decision Card（T18）  
> 路径：`recommendations/accept-low-room-for-fnb.md`  
> 对应：问题树 O12 · §33；用户原话「这个团 500 房费但餐标很高 / 要不要为了餐饮把房卖掉」  
> 剧本：P10 Group Evaluation（本卡是 P10 的 TRM 分支，**不是** P30）  
> 理论：`theory/total-revenue-management.md` · `group/group-displacement.md`  
> 状态：active · 2026-08-22 00:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-22  
> 禁止：无 F&B 贡献数字就 Accept；编造毛利/餐标/变动成本/佣金%；用 TRevPAR/GOPPAR 当当晚 BAR；写婚宴专篇。

```yaml
decision: Accept / Reject / Counter a low-room-rate group that claims high F&B or meetings
scenario: Group room rate below transient opportunity; sales says banquet/F&B will make up for it
required_inputs:
  - stay dates, remaining rooms by night, current BAR / transient opportunity
  - group rooms by night and group room rate
  - F&B / meeting contribution FROM THE USER (or a conservative estimate the user owns)
  - variable room cost if the user has one (otherwise Unknown — do not invent)
signals_for:
  - user_supplied_fnb_contribution_exceeds_room_opp_cost
  - peak_night_not_on_transient_sellout_path
  - counter_on_rooms_or_block_size_still_keeps_banquet
  - cancel_cutoff_or_deposit_exists
signals_against:
  - fnb_contribution_missing_or_slogan_only
  - peak_rooms_would_sell_out_at_bar
  - would_cannibalize_high_bar_or_leak
  - otb_is_weather_or_cancel_soft
  - using_trevpar_goppar_to_set_tonight_bar
recommended_action: 先按日算客房置换（P10）。无餐饮贡献数字不得 Accept。高峰能卖满散客 → Counter 客房价或缩房量、宴会可留。
risk: 用「餐很高」错接高峰低价团；贡献其实是收入不是利润；Wash 后餐也没了但散客已拒
follow_up: 用户是否给出贡献三数；团是否接受抬房价/缩房量；冲突日 Pickup
confidence: 有置换输入+用户贡献时方向 Medium；幅度 Low
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

用户问的是 **「房费低、餐/会议高，接不接」**，不是普通「500 vs 800」（那走 `accept-reject-group.md`）。

本卡在 P10 **之后**：客房置换已经算过或至少按日拆过。TRM 只决定能不能用餐饮**翻**客房-only 的 Reject。

不要用：只有「餐标很高」四个字、没有日期。仍要条件化，不要说无法判断。

---

## 2. 先做客房置换（兼容 P10）

```
第 0 步  映射 Stay Date × 团间 × 团房价 × Remaining × BAR
第 1 步  Displaced_t = max(0, ExpectedTransient_t + GroupRooms_t − Capacity_t)
第 2 步  高峰夜单独客房 NetDelta（禁止整段平均）
第 3 步  若客房-only 已可 Accept → 不必用餐饮翻盘；F&B 加项
第 4 步  若客房-only 为 Reject/偏负 Counter → 才问餐饮贡献能否盖过置换
```

优先 **Counter**。与 P10 同一主动词：Accept / Reject / Counter。

---

## 3. 动作表

```text
Stay Dates:
Group rooms / rate:    __ 间 × __ 元（房）
F&B / meeting contrib: __  （用户给的贡献；Unknown 则停）
Transient opp / BAR:    __
Remaining / Displaced:  按日 __
Decision:               Accept | Reject | Counter

Counter（默认高频）:
  抬客房: 高峰夜房费 __–__ 首选 __
  缩房量: 高峰最多 __ 间；宴会/会议可留
  改期:   移到 Expected Transient 更低的 __

Do-not-do:
  - 没贡献数字就 Accept
  - 高峰能卖满散客还按淡日把房卖掉
  - 用店均 TRevPAR/GOPPAR 替代这笔 NetDelta
  - 编造餐毛利把收入当成贡献
```

| 客房-only | 餐饮贡献 | 高峰能否卖满散客 | 输出 |
| --- | --- | --- | --- |
| Displaced≈0 或客房 NetDelta≥0 | 有或无 | — | **Accept**（P10）；餐是加项 |
| 偏负 | **缺 / 口号** | 任意 | **不要 Accept**。Counter 或 Reject。要 3 个数 |
| 偏负 | 用户贡献 > 置换 | **否**（淡/肩、ET 填不满） | 可 **Accept**（加截止）；或 Counter 护 BAR |
| 偏负 | 用户贡献 > 置换 | **是**（Peak / Sellout / Fast） | **Counter**：抬房价或缩房量，**留宴会** |
| 偏负 | 用户贡献仍盖不住高峰夜 | 任意 | **Reject** 或再 Counter；写翻转条件 |

「贡献 > 置换」必须按**夜**看。周六客房大亏、周五餐多，不算翻盘。

---

## 4. F&B 数字缺失 → 不 Accept

若用户没给 F&B/会议**贡献**（或只给餐标收入却把它当利润）：

- 不得用 TRM 把客房-only Reject 改成 Accept。  
- 客房仍走 P10：淡日可接、高峰 Counter。  
- 只再要下面 **3 个数**（不要清单）：

1. **本团 F&B/会议贡献**（用户自己的数，或用户认领的保守估计）。只有餐标/收入 → 先当收入、标 Unknown 贡献，**仍不翻 Accept**。  
2. **冲突日 Remaining + Expected Transient**（或「这类日子最终散客 OCC」）。  
3. **将被挤的那一层 BAR / Transient Net**。

变动成本：用户有则减；没有则写 Unknown，**不编**布草/能耗/佣金%。缺变动成本不能当「贡献更大」的借口。

---

## 5. 先排除

1. 「满」只是渠道配额 → 不是置换，先开库存。  
2. Pickup 快其实是另一团。  
3. 团价会泄漏到 OTA。  
4. OTB 是天气/取消潮 Soft（P28）→ Remaining 虚高，不当可 dump。  
5. 销售把餐标收入说成「利润」。  
6. 用月度 GOPPAR/TRevPAR 论证今晚该接低价团。

---

## 6. Trigger

```
用户补上贡献，且高峰夜贡献仍盖不住置换
  → 维持 Counter（抬价/缩房）或 Reject
用户补上贡献，高峰夜 Displaced=0
  → 改 Accept（仍加截止日）；餐是加项不是理由
高峰夜 ET 上修到将满
  → 即使有餐也缩房量或收到 Transient Net 附近
团坚持原价原房量、贡献 Unknown
  → Reject 客房块；宴会另议（不写 P30 流程）
冲突日 24h 散客 Pickup 已快
  → 停加房，维持 Counter
```

---

## 7. 顾问三句（本卡验收）

1. 没餐饮贡献数字，不能用「餐很高」推翻客房置换。  
2. 高峰能卖满散客时，低房价团即使有餐也要 Counter 客房或缩房量。  
3. TRevPAR/GOPPAR 看结构，不替代当晚 BAR。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 | 首版。P10 的 TRM 分支。无数字不 Accept。P30 不写。 |

---

## 9. 交叉（2026-08-22 02:17）

婚宴占房专有规则走 **P30** `counter-wedding-room-block.md`（高峰周六、must-keep vs dump、禁止关散客）。本卡仍是 P10 的通用 TRM 分支，不改成婚宴专篇。

「P30 不写」作废。无贡献数字不 Accept 的闸不变。

---

## 10. 交叉（2026-08-25 08:17）

会带房（用低价房赢会议）走 **T-Meet** `dont-dump-bar-for-meeting-rooms.md`。本卡仍是 P10 的通用 TRM 分支：无贡献不翻盘。会带房专有规则（三笔拆分、赢会 ≠ dump BAR、高峰拒房留会）不把本卡改成会带房专篇。**P50 未写。**

## 11. 交叉（2026-08-25 14:17）

只要厅不要房（零客房）走 **P51** `dont-raise-bar-on-full-hall.md`。本卡仍是 P10 的通用 TRM 分支：无贡献不翻盘（客房存在）。厅满涨 BAR / 周末低贡献占厅不把本卡改成厅-only 专篇。
