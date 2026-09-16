# Decision Card: 婚宴占房 — Counter 高峰房块（提价 / 缩宾客间 / 留宴会）

> 资产：Advisor Decision Card（P30）  
> 路径：`recommendations/counter-wedding-room-block.md`  
> 对应：问题树 O12 · §33 · §34；用户原话「周六婚宴要 40 间房、房费只要 500，餐标很高，接不接？要不要把散客关了？」  
> 剧本：P30 婚宴 / 宴会团队  
> 理论：`theory/total-revenue-management.md` · `group/group-displacement.md`  
> 通用卡：`accept-low-room-for-fnb.md` 仍管「低房价高餐饮」翻盘规则；**本卡**补高峰周六、婚房/家长房 must-keep、禁止关散客  
> 状态：active · 2026-08-22 02:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-22  
> 仿真：`cases/sim-2026-wedding-40x500-saturday.md`  
> 禁止：无贡献数字 Accept；编造餐标/毛利/变动成本/佣金%；为锁块关散客；整周末同一把刀。

```yaml
decision: Counter (or Reject) a wedding/banquet room block on peak Saturday; keep banquet; do not close transient
scenario: Saturday (or local wedding-peak DOW) banquet wants a large low-rate room dump vs transient that can still sell
required_inputs:
  - banquet date and function space
  - room block by night and contracted room rate
  - F&B contribution FROM THE USER
  - that Stay Date BAR / Pace / remaining / whether Saturday peak
  - extra nights Fri/Sun if requested
  - bridal suite + parents rooms vs guest dump (if known)
signals_for:
  - user_fnb_contribution_covers_room_opp_AND_peak_not_sellout
  - displaced_near_zero_on_that_night
  - counter_keeps_banquet_and_mustkeep_rooms
  - shoulder_nights_separately_displaced_zero
signals_against:
  - fnb_slogan_only_no_contribution
  - peak_saturday_transient_would_sell_out
  - sales_wants_to_close_transient_for_the_block
  - forty_room_dump_including_mustkeep_as_excuse
  - double_counting_space_plus_banquet_package
recommended_action: 高峰周六低价大块默认 Counter（提房价或缩宾客间），宴会可留；婚房+家长房 must-keep；不要关散客；肩日另算。无贡献数字不 Accept。
risk: 「餐很高」错接高峰 dump；关散客锁块；整段平均把亏的周六藏进肩日；Wash 后餐还在、散客已拒
follow_up: 贡献三数；团是否接受提价或缩到 must-keep+少量宾客；宴会夜散客 Pickup
confidence: 有置换输入时方向 Medium；保本价与 must-keep 间数 Low Hypothesis
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

用户问的是 **婚宴占房**（40 间级 dump、要不要关散客、婚房/家长房），不是普通「500 vs 800」（那走 `accept-reject-group.md`），也不是泛「低房价高餐饮」（那走 `accept-low-room-for-fnb.md`）。

本卡在 P10 置换 + T18 翻盘闸 **之后**：高峰周六规则与 must-keep 结构是 P30 多出来的。

不要用：没有宴会日。仍要条件化，不要说无法判断。

---

## 2. 与通用 F&B 卡的差别（为什么单独一张）

`accept-low-room-for-fnb.md` 已经规定：无贡献不 Accept；高峰能卖满 → Counter 客房、留宴会。

本卡额外钉死：

| 规则 | 通用 F&B 卡 | 本卡 |
| --- | --- | --- |
| 高峰 | 任意高峰团 | **周六婚宴夜**为默认高峰闸（仍须 Pace/Pickup 旁证） |
| 房块结构 | 整块 GroupRooms | **婚房+家长房 must-keep** vs **宾客 dump** 分开砍 |
| 散客 | 未写「关不关」 | **禁止为锁块关散客** |
| 肩日 | 按日拆（已有） | 周五/周日可接低价小块，**不要**跟周六同一房量/房价 |
| 空间 | Meeting_opp | 套餐含厅则 **不要双计** |

---

## 3. 先做客房置换（兼容 P10 / T18）

```
第 0 步  宴会日 vs 占房夜映射；标出婚房/家长房
第 1 步  按日 Displaced_t = max(0, ET_t + Group_t − Capacity_t)
第 2 步  宴会夜单独客房 NetDelta（禁止整周末平均）
第 3 步  无贡献数字 → 停 Accept；输出 Counter/Reject + 要 3 个数
第 4 步  高峰能卖满散客 → 即使贡献 > 置换，仍 Counter 客房，宴会留
第 5 步  Counter 时先留 must-keep，砍的是宾客 dump
```

主动词仍是 **Accept / Reject / Counter**。不另起「为了餐饮特批」。

---

## 4. 动作表

```text
Banquet night:
Sat block / rate:      __ 间 × __（其中婚房 __ + 家长房 __ + 宾客 __）
Fri / Sun extra:       __ / __
F&B contrib:           __  （用户；Unknown 则停 Accept）
Transient BAR / Pace:  __
Decision rooms:        Accept | Reject | Counter
Decision banquet:      留 | 拒 | 另议
Counter:
  A 房量: 高峰最多 __ 间（must-keep __ 计入其中；宾客 ≤ __）
  B 价:   高峰 __–__ 首选 __；肩日可维持合同价
  C 结构: 宴会 + 高峰房按 BAR；只锁 must-keep
散客:     保持可订。不要关
MinLOS:   只已证实 Peak；不自动盖 Fri/Sun
Do-not-do:
  - 没贡献数字就 Accept
  - 能卖满还接 40×500
  - 把散客关了给婚宴
  - 砍光婚房/家长房来「表示拒绝」
  - 整周末同一把刀
  - 厅租 + 套餐贡献双计
```

保本 / 首选：置换卡 §5.3。给区间 + 首选。团价相对公开 BAR 差 >15% 且可外传 → 泄漏，不靠餐补。

---

## 5. 高峰周六：默认 Counter，不是 Accept

同时接近以下，**不要** Accept 原低价大块：

1. 宴会夜是周六（或用户确认的当地婚宴高峰 DOW）。  
2. Pace Ahead **或** Pickup Fast **或** Sellout / Early Sellout 路径（须数，不只「有婚宴」）。  
3. ET + 原房块会挤高价散客（Displaced>0）。  
4. 合同房价明显低于将被挤层（常见 500 vs BAR 899–999 带）。

即使「餐很高」且用户贡献 > 客房机会成本：T18 闸仍是 **Counter 客房、留宴会**。贡献买的是**翻客房-only Reject 的资格讨论**，买不断高峰库存的批发权。

无贡献数字：连这场讨论都不开成 Accept。

---

## 6. 不要关散客

「把散客关了」= 为锁婚宴房块关掉零售 BAR。这会把本可卖 899–999 带的尾部，主动让给 500。

| 销售说法 | 顾问 |
| --- | --- |
| 不关散客怕 40 间锁不住 | **Counter 房量或房价**，不是关零售 |
| 关散客才显得重视宴会 | 宴会留；客房按置换。重视 ≠ dump |
| 亲友订不到会投诉 | must-keep + 小块宾客；其余走公开 BAR |
| 关了还能洗出来再卖 | DTA 短时洗出来往往卖不回；高 Wash 更应限额 |

价已最高：散客只关**低价产品**、不关 BAR、不涨。接 500 块仍是开更低一层 → 先 Counter。

---

## 7. Trigger

```
团接受 A（缩到 must-keep+少量）或 B（高峰价收到带内）
  → 按所选；散客保持开
团坚持 40×500 + 关散客
  → Reject 客房大块；宴会另议
用户补 ET 使高峰 Displaced=0
  → 该夜可 Accept 原价（仍要截止）；仍不关散客
宴会夜 24h 散客 Pickup 快
  → 停加房
贡献 Unknown 一直补不上
  → 维持不 Accept；客房 Counter/Reject
```

---

## 8. 顾问三句（本卡验收）

1. 婚宴先拆：宴会本身 vs 占房；没餐贡献数字不接低价房块。  
2. 周六高峰 40×500 对能卖满的散客，默认 Counter（提房价或缩间数），不是直接 Accept。  
3. 周五/周日肩日可以分开算，不要整周末同一把刀。

（「不要关散客」写进动作表，与这三句一起验收。）

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 02:17 CST | 首版。P30 主卡。高峰周六 Counter；must-keep vs dump；不关散客。 |
