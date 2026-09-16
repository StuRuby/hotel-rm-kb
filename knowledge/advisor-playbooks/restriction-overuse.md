# Playbook P33｜Restriction 过度

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/restriction-overuse.md`  
> BACKLOG：P33 Restriction 过度 · MEDIUM · 先诊断枝 · slug **restriction-overuse**  
> 状态：**drafted**（2026-08-20 17:00 CST）  
> 配套卡：`recommendations/do-not-cut-when-restricted.md`  
> 理论：`forecasting/unconstrained-vs-constrained.md` · `restrictions/restriction-framework.md` · `pricing/los-optimization.md`  
> 绑定：P02 Low Demand（过完本剧才允许谈降价）；P21 解开 Trigger；P08 Slow Pickup 供给分支；`open-inventory-false-low-occ.md`（库存误关）  
> 问题树：§1 问 7 / §1.A.3 · O8 Restriction  
> 证据等级：B（诊断顺序）；机制 A Vendor（Duetto：Constrained 先扣限制挡掉的需求）  
> Last Verified：2026-08-20 17:00 CST

---

## 0. 一句话

MinLOS / CTA 开着、OCC 或 Pickup 看起来差、有人要降价。  
**先查限制挡了谁，再决定松限制还是动价。首选：先松限制，不要先降 BAR。**

完成定义：一张「限制是否把本会来的需求挡掉」检查单 + 解开到哪几天 + 明确禁止先砸价。

成功标准：用户说「MinLOS 开着但入住率掉了，要不要降价」→ 走本剧，不跳到 P02 降价格。

机制（Duetto Vendor Methodology，不是 S 公式）：Constrained 第一步是按现行 CTA / MinLOS / MaxLOS **扣掉无法实现的需求**，再优化。所以你看见的「需求弱」可能已经是扣完之后的数。

---

## 1. 信号（何时进本剧本，而不是直接降 BAR）

进入：限制层至少有一项开着，同时有人用 OCC / Pickup / vs Budget 论证该降价。

| # | 信号 |
| --- | --- |
| R1 | 用户问「MinLOS/CTA 开着但入住率掉了，要不要降价」 |
| R2 | 淡日或肩日仍挂着节假日/事件 MinLOS |
| R3 | Peak MinLOS 盖到了 ±1 肩日 |
| R4 | Pickup 慢，但短住询单 / 电话拒单 / OTA 搜得到订不了 1 晚 |
| R5 | 直销与 OTA 限制不一致（渠道把限制同步错） |
| R6 | MaxLOS 挡掉会跨肩日的长住，肩日更空 |
| R7 | RMS 建议降价，但 Restriction 仍严 |

价明显低于可订竞对 **且** 限制开着：仍先走本剧。降价救不回被 CTA 挡掉的到达。

更像房型/渠道误关、限制并没开 → `open-inventory-false-low-occ.md`，不是本剧。  
更像市场整体冰点、限制已开单晚 → P02 / `do-not-cut-price-market-also-weak.md`。  
更像已证实 Peak 被单晚掏空 → P21 / `minlos-peak-protect.md`，**不要**用本剧把高峰 MinLOS 拆掉。

---

## 2. 先排除（没过不许降价）

| # | 排除 | 成立时 |
| --- | --- | --- |
| E1 | 口径 / OOO / 拿远期 OTB 当危机 | 修数，不动限制也不降价 |
| E2 | DTA 仍处该店「尚未启动」区段 | Hold；不把后置曲线当限制过度 |
| E3 | **限制是否挡住了本会来的短住 / 到达日** | 短住询单升、1 晚不可订、历史 ALOS≈1 却 MinLOS=2 → **先解** |
| E4 | **肩日是否被 Peak MinLOS 误伤** | ±1 也是 MinLOS/CTA，肩日 Pickup 死、Peak 仍动 → 肩日解开到 Open |
| E5 | **渠道是否把限制同步错** | 直销 Open、OTA MinLOS=3（或相反）→ 先对齐，BAR 不动 |
| E6 | 库存/房型/配额没开 | 先开供给（open-inventory 卡）；仍不降 |
| E7 | 这是已证实 Peak，单晚会掏空、肩日本就该弱 | **不解高峰 MinLOS**；回 P21。本剧只管过度 |
| E8 | 3D 快 7D 不快 | 先查一团；不解、不降 |
| E9 | 价已 ≤ 全部可订竞对 | 不降；限制该解则解 |
| E10 | 市场也弱 **且** 限制已是 Open / 典型 LOS | 离开本剧，走 do-not-cut；**不要**为冰点再砸 BAR |

E3 / E4 / E5 任一条成立：**默认动作是松限制，不是降 BAR。**

---

## 3. 诊断落格

| 结论 | 识别 | 动作类型 | 首选 |
| --- | --- | --- | --- |
| **限制过度（短住/到达被挡）** | 非 Peak 或 Peak 未证实仍 MinLOS≥2 / CTA；短住进不来 | `限制` | 解开该日 MinLOS→1 或取消 CTA；BAR 不动 |
| **肩日误伤** | Peak MinLOS 盖到 ±1 | `限制` | 肩日 Open；Peak 仍 =2（若 Peak 已证实） |
| **渠道同步错** | 主渠道限制不一致 | `渠道` | 对齐到「该开的开、该限的只限 Peak」；不先改价 |
| **MaxLOS 过短** | 会跨肩日的长住被切 | `限制` | 放宽淡日/肩日 MaxLOS；高峰低价层仍可短 MaxLOS |
| **限制合理，需求真弱** | 限制已 Open 或只盖已证实 Peak；供给开；Behind+Slow | 离开本剧 | P02：先围栏 −3–5%，禁止一夜 −15% |
| **限制合理，Peak 仍过快** | Ahead+Fast、单晚会掏空 | 离开本剧 | P21 守 MinLOS=2；价已最高只关不涨 |
| **假问题** | 后置曲线 / Budget 错 / 一团未到 | `什么都不动` / `预测修正` | Hold 或 P17 |

禁止第五项：「限制先留着，适当降一点看看」。限制挡门时降价，是给过得了门的人更低的价，门还是关着。

---

## 4. 动作表（先松限制，不要先降 BAR）

```text
Stay Date:            <OCC/Pickup 看起来差的日期，按日写>
Current restriction:  MinLOS=__  CTA=__  MaxLOS=__  （到达日 vs 覆盖夜：问用户系统，NV-RST-01）
Who is blocked:       短住 / 该日到达 / 肩日组合 / 长住 / 渠道不一致 / 查不清
Action:
  非 Peak 或 Peak 未证实:
      MinLOS → 1（或解开）
      CTA    → 取消
      肩日   → Open（不 MinLOS / 不 CTA）
  已证实 Peak:
      只解被误伤的肩日；Peak MinLOS=2 可守
      禁止整周同一 N，禁止把 Peak 也一刀拆掉除非 24h Pickup 已死且独限
  MaxLOS:             只打进入 Peak 前的低价长住；不要打 Peak BAR / 肩日合理长住
Price:                BAR 不动
                      价已最高 → 只关/只限不涨（本剧通常是解，不是加）
Inventory:            主渠道 BAR 层保持可订；不把解开限制当成打开破价层
Channel:              先对齐直销与主 OTA 的限制；禁止只改一个 OTA
Do-not-do:
  - 先降 BAR / 「适当降一点」
  - 一夜 −15%
  - 限制还开着就上围栏深折（过得了门的人拿到更低价）
  - 整周同一 MinLOS 继续留着「观察」
  - 把已证实 Peak 的 MinLOS=2 当过度拆掉（那是 P21）
  - 编佣金% / Walk 成本
```

与已有启发式同一把尺：

```
MinLOS=2 只盖已证实 Peak；肩日 Open
涨 +8–15% 或收到最低竞对；一天不跳最高；价已最高只关不涨
降：先围栏 −3–5%；BAR −5–10%；禁止一夜 −15%
本剧第一刀是限制，不是价
```

**解开范围：** 写到日期。不要写「把连住放松一点」。

---

## 5. Trigger（解开之后）

沿用 300 间尺度（<3 / 3–7 / ≥8），与 P21 / 限制框架同一尺：

| 事件 | 动作 |
| --- | --- |
| 解开后 24h Pickup ≥ 阈值高（300 间=8）或短住开始进 | 修复成立；**仍不降 BAR** |
| 解开后 24h 3–7 | 再守 24h；BAR 不动 |
| 解开后 48h 累计 <5 **且** 现已确认限制不再挡典型 LOS **且** 供给开 **且** 价高 **且** 市场非冰点 | 才进入围栏 −3–5%，BAR 仍优先不动（P02 / decrease 卡） |
| 解开后发现可订的是低于 BAR 的残价 | 立刻关上残价，只留 BAR |
| Peak 被误当成淡日解开，单晚开始掏空 | 撤回，走 `minlos-peak-protect.md` |
| 竞对全开单晚、我们独限、Pickup 仍死 | 高峰也可解；价守原带 |
| 取消翻倍或 ≥总房 2% | 停加严；不自动大降 |

---

## 6. 如果只能再补 3 个

1. 当前 Restriction 按日清单（MinLOS / CTA / MaxLOS）+ 直销 vs 主 OTA 是否一致。  
2. Peak 与 ±1 的 OTB / Remaining（决定哪天是误伤肩日、哪天是真 Peak）。  
3. 短住询单 / 不可订截图，或该日历史 ALOS。

缺 1：今天不降价；最多写 IF 限制仍开 THEN 先解。  
缺 2：只允许解「用户已承认非高峰」的日期；不碰可能是 Peak 的夜。

---

## 7. Confidence / 边界

限制开着且短住明显进不来：方向 **High–Medium**（先解可逆）。  
Peak vs 肩日分不清：**Low**，只解用户点名的淡日，Peak 写 IF。  
解开后是否还有真需求：未知，不在本剧给降价幅度。

更像库存误关 → open-inventory 卡。  
更像真弱 → P02。  
更像高峰被掏空 → P21。  
更像 Forecast 把限制扣完的数当「需求死」→ 本剧 + P17，先改判断。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 17:00 CST | drafted。BACKLOG P33 slug=restriction-overuse。先松限制，不要先降 BAR。兼容 MinLOS=2 只盖 Peak、肩日 Open、不一夜 −15%。机制引自 Duetto Constrained 第一步（Vendor Methodology）。 |
| 2026-08-20 20:00 CST | 晚课复盘：与 P21 / Duetto 缺口 **无真矛盾**。Peak 已证实 → 本剧 E7 不解高峰 MinLOS；缺口大且限制合理 → 走 yield 不是本剧。不重写正文。 |

## 9. 交叉（2026-08-23 04:17，不改限制表）

CTA / closed ≠ OOO。限制挡的是「谁能买还在的可售房」；维修砍的是可售池。维修/假高峰走 **P37** `ooo-capacity.md`；本剧只松限制，不把 CTA 标成维修，也不按维修 OCC 砸 BAR。

已证实高峰上「只订周六接不接 / 均价贵了砍不砍周末」走 **P40** `stay-pattern.md`，**不要**用本剧把高峰 MinLOS 拆掉。本剧只管过度（死周二 / 肩日误伤）。淡季别把 MinLOS 留着当习惯——仍是本剧。

已证实高峰上「只订周六 / 均价贵了砍周末」的**估值**走 T08 `metrics/stay-network-value.md`（16:17）；动作仍 P40。本剧只管过度限制，不解高峰 MinLOS。


## 10. 交叉（2026-08-24 00:17，不改限制表）

CTA / MinLOS / Closed **会生产拒单**，看起来像「需求很旺」。短住询单升、电话拒单、OTA 搜得到订不了 1 晚 → 仍先走本剧松限制，**不要**把这些 Denial 自动加成 +BAR。口头无日志仍不是 Demand。已证实 Peak 的 MinLOS 不解（P40/P21）。[`../metrics/denials-regrets.md`](../metrics/denials-regrets.md)。

剧本见 P43 `verbal-denials.md`（2026-08-24 02:17）：限制夜的「订不了」先走本剧松限制，不是先加价。

## 11. 一行（2026-08-27 18:17，不改限制表）

本剧 = MinLOS/CTA/Closed **stay 限制**过度。弱夜把**价档**关光只留空 BAR → **P64** 形 B（重开围栏低档），不是先加更多 stay 限制。两剧可并联，杠杆不同。

> 交叉指针（2026-09-01 12:17，不改正文）：§107 Apaleo Closed on Arrival / Master Closed + HotelKey Min/Max LOS·CTA（含 Derived 码）= 可售限制层，不是砍 BAR。先松限制仍本剧。不规定 P88。

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。

> 交叉指针（2026-09-03 10:17 C03-10，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-restriction-maxlos-ctd-sat.md`。Diagnose 走 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699；§125。不开 P88。不开 P89。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS Restrictions + Closed to Arrival/Departure Restrictions（**可售限制/CTA·CTD 闸 ≠ 公开灵活 BAR rewrite**）。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 交叉指针（2026-09-04 00:17 T04-00，不改正文三句 / 399 / 799）：Diagnose 走 **T-Window** `theory/booking-window-vs-bar.md`（booking-side 时窗：Min/Max Advanced Booking · Release Time · Booking Period / Start-End Sell Dates · late booking until ≠ 公开 BAR；「有房却无 offer」先查下单时窗，不判需求弱）；过程仍 **P33**（窗口误挡先松窗口，不砍 BAR）+ **P35**（搜不到先查库存/可售/内容）+ handoff **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**；Hold 779–799 首选 799；拒 399；不发明 699；§132。**T-Window ≠ T-Restriction。** 不开 P88。不开 P89。

> 交叉指针（2026-09-04 12:17 R04-12，不改正文三句 / 399 / 799）：§133 新开 Clock PMS+ Rate Restrictions（Min/Max days before arrival + Last Minute days ≠ 公开灵活 BAR rewrite）+ OPERA 5.6 Rate Header Sell Controls（Minimum / Maximum Advance Booking ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。补齐 §132 Clock 猜链 FAIL。不开 P88。不开 P89。

> 交叉指针（2026-09-04 18:17 C04-02，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-booking-window-sat.md`。Diagnose 走 **T-Window**；过程仍 **P33** + **P35**；Hold 779–799 首选 799；拒 399；不发明 699；§135。不开 P88。不开 P89。

> 交叉指针（2026-09-04 20:17 R04-20，不改正文三句 / 399 / 799）：§136 用途升核 HotelKey Min/Max Booking Lead Days（补 §132 HotelKey FAIL；可见性提前期闸 ≠ 公开灵活 BAR rewrite）+ Protel Min/Max advance booking of X Days / when booked X–Y（提前期闸 ≠ rewrite）。Diagnose 仍 **T-Window**；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 交叉指针（2026-09-05 04:17 R05-04，不改正文三句 / 399 / 799）：§139 新开 Clock Occupancy Adaptable Rates（OCC 阶梯自动换价 + manual price priority ≠ 公开灵活 BAR rewrite）+ Protel OCC% Close 用途升核。Diagnose 仍 **P66**；过程仍 **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-00 deepen **已 skip**。不开 P88。不开 P89。

> 交叉指针（2026-09-05 16:17 T05-16，不改正文三句 / 399 / 799）：Sell Limit / Channel Sell Limit / Allowed OB deepen **已 skip**（§143 复核）。可售数量闸 ≠ 公开灵活 BAR rewrite；过程仍 **P33**（闸误挡先松，不砍尺）+ handoff **P24** / **P58** / **P37** / **P03/P05**；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
> 交叉指针（2026-09-05 18:17 C05-18，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-sell-limit-misread-sat.md`。§144 CASE 指针复述 §143。可售数量闸 ≠ 公开灵活 BAR rewrite；过程仍 **P33**（闸误挡先松，不砍尺）+ handoff **P24** / **P58** / **P37** / **P03/P05**；Hold 779–799 首选 799；拒 399；不发明 699。T05-16 deepen **已 skip**。不开 P88。不开 P89。
> 交叉指针（2026-09-05 20:17 R05-20，不改正文三句 / 399 / 799）：§145 新开 Stayntouch Sell Limits + Clock Availability Adjustment + Protel Max Sell。可售数量闸 ≠ 公开灵活 BAR rewrite；过程仍 **P33**（闸误挡先松，不砍尺）+ handoff **P24** / **P58** / **P37** / **P03/P05**；Hold 779–799 首选 799；拒 399；不发明 699。T05-16 deepen **已 skip**；C05-18 sim 仍可调用。不开 P88。不开 P89。
