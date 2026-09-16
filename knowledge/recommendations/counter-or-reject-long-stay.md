# Decision Card: Counter or Reject Long Stay（低价长包：还价或拒，不把周末 dump 成公寓）

> 资产：Advisor Decision Card（P41）  
> 路径：`recommendations/counter-or-reject-long-stay.md`  
> 对应：问题树 O10 · §47「低价长包占周末」；用户原话「有人要包 15–20 间连住 30 天，单价很低，接不接？」「长包 300/晚 vs 周末 BAR 799？」  
> 剧本：P41 长包房 / monthly  
> 理论：`group/group-displacement.md` · `pricing/los-optimization.md` · `metrics/stay-network-value.md` · T19 · T20  
> 交叉：P10 短团置换（不是重写）· P31 KEEP allotment ≠ KEEP 30 夜砸周六 · P26 协议漏出是围栏 · P40 一个 Sat-only ≠ 每周六被长包占 · T08 30 日价不是 30×平日  
> 状态：active · 2026-08-23 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；STR Contract 口径 S；eCornell Displacement / HSMAI LOS 分档 A；月租价表/华住 SOP 非 Fact  
> Last Verified：2026-08-23  
> 仿真：`cases/sim-2026-longstay-20x30-weekends.md`  
> 禁止：悄悄按 380 接满含周六的 30 夜；把公开 BAR dump 到长包价；一夜 −15%；发明 300 行情；无 Pace 编 OCC；顾问代签租约。

```yaml
decision: Counter or Reject a cheap 30-night block that occupies peak Saturdays; do not dump weekend BAR to the contract rate
scenario: 15–20 rooms × ~30 nights at a much lower nightly vs weekend BAR; or user compares 300 vs 799
required_inputs:
  - stay window with every covered date
  - room count and asked nightly (user-supplied)
  - public BAR and Pace/Pickup/Remaining on peak nights inside the window
  - pay terms: guaranteed regardless of use / monthly invoice / unknown
  - hotel type: mixed weekend-selling vs weekday-driven with ice weekends
signals_for:
  - true_contract_guaranteed_pay_and_peak_blackouts
  - remaining_on_those_peaks_is_fat
  - hotel_truly_weekday_driven_weekends_ice
  - counter_blackout_peaks_or_fewer_rooms_or_higher_peak_nightly
signals_against:
  - weekend_still_selling_pace_ahead
  - silent_accept_all_dates_at_380
  - dump_public_bar_to_contract_rate
  - 30_times_weekday_average_as_reason
  - no_guaranteed_pay_called_contract
recommended_action: 混合店周末仍卖 → 默认 Counter（黑出高峰/少间/高峰夜价带）或 Reject。Accept 仅高峰剩余肥或周末冰。无保证付款不当 Contract。公开 BAR 不 dump。顾问不签租约。
risk: 把每个周六让成 380；30×均价藏高峰；无付款保证当 Contract；无 Pace 编 OCC
follow_up: 对方是否接受黑窗或高峰提价；高峰 Pickup 是否仍来自 BAR 层；付款条款
confidence: 有窗口+高峰 BAR/Pace+间数则方向 Medium；点价 Low
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「包 15–20 间连住 30 天，单价很低，接不接」「长包 300 vs 周末 799」。

主动词：**Counter / Reject** 整笔或高峰夜；**Accept** 仅高峰肥或周末冰。写到 Stay Date，不要写「这个月」。  
不要用：只有一句「长包好不好」无日期、无高峰 Pace。

公开 BAR 走 Increase/Hold 卡。本卡只回答 **这 30 夜接不接、高峰让不让、是不是 Contract**。

---

## 2. 硬门（先停）

命中则不要用「按 380 接满 30 夜含周六」当第一刀：

1. 覆盖期内周六/事件 Pace Ahead / Fast / 能卖满 → 那些夜 **默认 Counter 或 Reject**，不是 Accept  
2. 销售用 30×工作日均价当理由 → **拒绝该理由**。T08：不是 30×平日  
3. 要把公开周末 BAR dump 到合同价 / 一夜 −15% → **拒绝**  
4. 无保证付款 → **不当 Contract**；当廉价长住散客  
5. 高峰 BAR/Pace 未知 → **今天不 Accept**，写 IF，问 3 个数  
6. 有声明品牌底、合同高峰夜穿底 → T20 不砸穿；无地板不发明 699  
7. 无变动成本却说 380 总比空着强 → T19 停；空着的往往不是周六  
8. 顾问被要求「帮我把租约签了」→ **不签**

周末已冰、工作日驱动、高峰剩余肥、且保证付款 → 才评 **Accept**。

---

## 3. 动作表

```text
Stay window:     入住–离店；列出每一个高峰夜
Rooms:           __ 间 × __ 夜
Asked rate:      用户数（300/380 非行情）
Product:         Contract（保证付款）| 便宜长住 | 长团
Hotel type:      混合周末仍卖 | 工作日驱动周末冰
Peak BAR/Pace:   按日
Public BAR Peak: Hold；不 dump
Decision:        Counter | Reject | Accept（仅肥/冰）
Counter:
  黑窗: 已证实周六+事件
  间数: 高峰 ≤ Remaining − 尾 20–30%（Hypothesis）
  价:   高峰夜带到被挤 BAR 附近（仿真 560–650 Hypothesis）
Guarantee:       无保证付款 → 不当 Contract
Do-not-do:
  - 按 380 悄悄接满含周六的 30 夜
  - 30×淡季均价当成交
  - 公开 BAR → 合同价 / 一夜 −15%
  - 发明 300 行情 / 华住 SOP
  - 无 Pace 编 OCC
  - 顾问代签租约
```

**高峰合同夜 vs 公开 BAR：** 除非用户声明高峰必须 LRA 且未 blackout，合同高峰夜不应低于将被挤的公开层还加量。Unknown → Hypothesis：高峰黑窗或收到保本带；平日另议。

压缩日限额 ≤ 剩余 − 尾部 20–30%（Hypothesis，与 P10 同尺）。

---

## 4. Counter 口径（给销售）

对外：

- 「这四个周六（及任何展会夜）不在 380 里；平日可以谈」  
- 「若必须住周六：间数降到 __，或周六夜价到 __–__」  
- 「没有保证付款就不是包房合同，是长住散客，高峰按零售走」

不要说「我们不做长包」。  
对内：Counter 不是把零售 BAR 降到 380。

---

## 5. 顾问三句（本卡验收）

1. 长包先数里面有几个周末和活动夜，不要用 30×淡季均价当成交理由。  
2. 周末还卖 799，默认 Counter 或拒，不是按 380 把周六让出去。  
3. 没有保证付款和高峰黑窗，就把它当便宜长住散客，不是 Contract。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 18:17 CST | 首版。P41 主卡。高峰长包默认 Counter/Reject；不 dump 周六；无保证付款不当 Contract。 |
