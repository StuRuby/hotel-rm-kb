# Playbook P10｜Group Evaluation

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/group-evaluation.md`  
> BACKLOG：P10 Group Evaluation · HIGH · 先决策卡  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/accept-reject-group.md`  
> 理论：`group/group-displacement.md` · `channel/net-contribution.md` · `forecasting/forecast-framework.md`  
> 问题树：§2 ADR Low · O12  
> 仿真：`cases/sim-2026-group-50x500-vs-transient-800.md`  
> 证据等级：B；Expected Transient / Wash Hypothesis  
> Last Verified：2026-08-20  
> 接团之后的 cutoff 过程 → **P52** `advisor-playbooks/group-cutoff-wash.md` · `recommendations/dont-dump-before-cutoff.md`（2026-08-25 18:17；**不重写 P10 接团正文**）

---

## 0. 一句话

Accept / Reject / Counter。禁止只比较团价和散客 BAR。  
完成定义：缺 F&B 仍能给 Counter 条件句；能指出「500 vs 800」为什么不够。

---

## 1. 信号（何时进本剧本）

用户在问接团，或 Pickup 快经排除后是一团。任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 明确团询：日期、间数、价 |
| S2 | 单笔 ≥40 间（300 间店尺；或窗口 Pickup 的 50%）要当团评，不当 Fast Transient |
| S3 | 已定团 Wash / 询价与零售冲突 |

**不是本剧本：** 散客促销码、协议散订、批发漏价（走渠道卡）。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 只有两个 ADR，日期/房量不清 | 先要 Stay Date；同时用条件句 |
| X2 | 「满」只是渠道配额 | 不是置换，先开/调配额 |
| X3 | Expected Transient 用 Constrained 100% 当需求 | 低估置换；改 Unconstrained 或经验最终 |
| X4 | 价会泄漏到公开渠道 | 默认 Reject 或净价+禁售条款 |
| X5 | 冲突日已是 P03/P04 路径 | 默认 Counter 减高峰房或加价，不按淡日接 |
| X6 | 另一团已占、Capacity 双计 | 重算剩余 |

---

## 3. 动作（强制按日）

```
第 0 步  映射：团在住夜 × 间 × 价 × 取消
第 1 步  按日 Displaced = max(0, ET + Group − Capacity)
第 2 步  高峰夜单独算客房 NetDelta（禁止只看整段）
第 3 步  加 LOS 肩日、佣金结构、F&B/会议（无则 IF）
第 4 步  三选一 + 写 displacing 哪些日期
第 5 步  压缩日：团限额 ≤ 剩余 − 尾部 20–30%（Hypothesis）
```

| 结果 | 何时 | 写法（禁止空话） |
| --- | --- | --- |
| **Accept** | 各高峰夜 Displaced≈0 或高峰夜 NetDelta≥0；取消有截止 | 「接。条件：__ 截止；高峰不超过 __ 间」 |
| **Reject** | 高峰夜客房明显亏且团不改；或泄漏；或已 Early Sellout | 「拒。若价≥__ 或周六≤__ 间则转 Counter」 |
| **Counter** | 整段正、高峰负；或 ET 不稳 | 价区间+首选 **或** 高峰房量上限 **或** 加餐/改期 |

保本价见置换卡 §5.3。团价相对公开 BAR 的地板：品牌红线优先；无则 Hypothesis 70–85% 仅讨论。

**不要：** 适当优惠；整段平均接；压缩日把尾部整给团；无 ET 却报精确增收。

---

## 4. Trigger

```
补数使高峰夜 Displaced = 0     → Accept + 截止日
ET 上修到将满                 → 再砍高峰房或价对齐 Transient Net
团拒 Counter、无餐会           → Reject
Wash ≥ 团块 20%（有数才用）    → 释放库存；不自动砸 BAR
冲突日 24h 散客 Pickup ≥ 阈值高 → 停加房，维持 Counter
发现可外传净价                 → 改为 Reject 或书面禁售
```

阈值用过程文件尺：300 间 24h ≥8 / <3；其他店按总房 % 缩放。

---

## 5. 如果只能再补 3 个

1. 冲突日 Transient OTB + 预测或经验最终 OCC（翻转接/拒）  
2. 当期 BAR / 将被挤的那一层净价  
3. 取消·Wash·截止；有余力才是 F&B  

（T7 场景 E 默认：Transient OTB+预测、BAR、按日剩余。）

---

## 6. Confidence / 边界

方向：有日期+房量+BAR+OTB → Medium。  
ET / Wash / 餐贡献 → Low Hypothesis。  
不可逆大团 + 缺 ET → 对外 Low，仍必须出 Counter 条件句。

P30 婚宴已 drafted。P31 Crew 已 drafted：客房 extra 仍走本卡置换式；**持续合同 ≠ 一场额外 20 间**。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P10。 |
| 2026-08-22 | 低房价高餐饮翻盘走 `accept-low-room-for-fnb.md`；无贡献数字不能用「餐很高」推翻客房置换。P30 仍 not_started。 |

---

## 8. 交叉（2026-08-22 02:17）

婚宴 / 宴会占房走 **P30** `wedding-banquet-group.md` · `counter-wedding-room-block.md`，不是把本剧重写一遍。

- 普通团询仍走本卡。
- 「周六婚宴 40×500、餐很高、关不关散客」→ P30。无贡献数字不 Accept 低价房块。
- 高峰能卖满 → Counter 客房或缩宾客间，宴会可留；不要关散客。
- 上条「P30 仍 not_started」作废。
---

## 9. 交叉（2026-08-22 18:17，不改接团步骤）

航司 / 机组走 **P31** `airline-crew.md` · `counter-or-reject-extra-crew.md`，不是把本剧重写一遍。

- 普通团询仍走本卡。
- 「再加 20 间机组房挤周六」→ P31。extra 块用本卡置换式；**持续合同 ≠ 一场额外 20 间**。
- 已签 allotment 先围栏，不杀户。高峰 extra 默认 Counter/Reject。

---

## 10. 交叉（2026-08-23 18:17，不改接团步骤）

长包 15–20 间×30 夜走 **P41** `long-stay-monthly.md`。**持续合同 ≠ 一场团 ≠ 机组 extra。** 短团 2–3 晚仍走本卡。

---

## 11. 交叉（2026-08-25 08:17，不改接团步骤）

会带房（会议要厅 **and** 小房块）走 **T-Meet** `theory/meeting-with-rooms.md` · `recommendations/dont-dump-bar-for-meeting-rooms.md`，不是把本剧重写一遍。客房-only 团询仍走本卡。

---

## 12. 交叉（2026-08-25 10:17，不改接团步骤）

会带房满本剧本走 **P50** `advisor-playbooks/meeting-with-rooms.md`（主卡 `dont-dump-bar-for-meeting-rooms.md`），不是把本剧重写一遍。客房-only 团询仍走本卡。

## 13. 交叉（2026-08-25 14:17，不改接团步骤）

只要厅不要房走 **P51** `advisor-playbooks/catering-only.md` · `recommendations/dont-raise-bar-on-full-hall.md`，不是把本剧重写一遍。客房-only 团询仍走本卡。会带房仍走 P50。

## 14. 交叉（2026-08-25 18:17，不改接团步骤）

接团之后的 cutoff / wash / 未 pickup 回 house 走 **P52** `advisor-playbooks/group-cutoff-wash.md` · `recommendations/dont-dump-before-cutoff.md`，不是把本剧重写一遍。

- 普通团询仍走本卡 Accept / Reject / Counter。
- 「团订了 50 只 pickup 了 28，cutoff 还没到，要不要降价补」→ P52。未 pickup ≠ 已卖需求。Cutoff 前不 dump。
- 本店 wash% 仍 NV，不编。

## 15. 交叉（2026-08-25 22:17，不改接团步骤）

已挂暂定/确认、画面看起来满、要不要涨/关散客/dump 399 → **P53** `advisor-playbooks/definite-vs-tentative.md` · `recommendations/dont-raise-on-tentative-occ.md`，不是把本剧重写一遍。

- 普通团询仍走本卡 Accept / Reject / Counter。
- 「暂定团占了 40 间要不要涨 / 先锁暂定别卖散客」→ P53。不扣库存 ≠ 已卖需求。
- 已转 Definite 且问题是 pickup vs cutoff → 仍 P52。
- 本店 PMS 状态名仍 NV。wash% 仍 NV。

> 交叉指针（2026-08-28 22:17，不改正文）：持续账户年标 / RFP vs 公开 BAR 走 **P71** `advisor-playbooks/corporate-annual-rate-vs-bar.md` · `dont-anchor-bar-to-corp-rate.md`。本剧仍管一场团 Accept/Reject/Counter，不是年标。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
> 交叉指针（2026-08-29 02:17，不改正文）：集团导客 / 姐妹店溢出不是一场团 → **P72** `advisor-playbooks/sister-cluster-overflow.md`。本剧仍管一场团 Accept/Reject/Counter。不写 P73。
