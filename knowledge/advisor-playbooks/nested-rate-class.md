# Playbook P64｜嵌套低价档仍开着 / 关低开高误用（Nested Rate Class）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/nested-rate-class.md`  
> BACKLOG：P64 嵌套低价档仍开着 / 关低开高误用 · HIGH · 先诊断枝（本轮同开）· slug **nested-rate-class**  
> 状态：**drafted**（2026-08-27 18:17 CST）  
> 配套卡：主卡 `recommendations/dont-leave-low-class-open-on-peak.md`（形 A/C：高峰低档仍开 / 涨了 BAR 但低档还挂着）；同伴卡 `recommendations/dont-strip-low-class-on-weak-nights.md`（形 B：弱夜关光低档）；压缩日关低价机械尺复用 `recommendations/close-low-rate-compression.md`（**不重写正文**）  
> 轻指标：`metrics/open-rate-classes.md`（公开在售档 vs 意图地板；gap；nesting mode NV；**无默认 %**）  
> 理论：`inventory/inventory-control.md` §1.6 Nested · §1.2 Booking Limit · NV-INV-01 shared/nested/dedicated  
> 交叉：P01/P03 高峰用 close-low 作工具；本剧管**嵌套结构诊断与误用** · P33 = stay 限制过度（MinLOS/CTA），本剧 = rate-class 嵌套/限额 · P18 = OTA 促销报名闸 · P19 = 预付产品深度 · P13 = 房型压缩轴 · P34 = 房型价倒挂 · P60 = 错映射假低价  
> 问题树：§71 「低价档还开着 / 关低不等于涨BAR」  
> 仿真：`cases/sim-2026-nested-low-open-sat.md`（**Simulation**）  
> 证据等级：B 定义（AccountingTools nested booking limit — §50；航空例，酒店映射 Hypothesis）；A Vendor（Amadeus Hotel Admin nested allotment booking limit 保护父库存 — inventory-control 已录 + §50 指针；本轮 WebFetch timeout，不摘 UI 当中国 SOP）；S 书目（Talluri / Belobaba — 不摘公式）  
> Last Verified：2026-08-27  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议先问 nested/shared/dedicated、列出仍低于新地板的公开产品；高峰关/限低档再谈是否涨 BAR；弱夜误关则开有围栏低档或走 P05/P02。**不操作** PMS / RMS / OTA / CM，不自动定价，不代关价码。  
> 禁止：发明中国嵌套 SOP、EMSR/hurdle 公式当酒店 Fact、佣金%、699；一夜 −15%；把 BAR dump 到 399「因为嵌套太复杂」；结构不明时编 PMS 嵌套方向；把 14/399/799/180 当市场 Fact；开 P65。  
> 16:17「不要规定 P64」= theory 槽不得指定；本案例槽核实嵌套低价档缺口后开。

---

## 0. 一句话

**关低价档 ≠ 涨 BAR；涨 BAR 也不等于已经关了低档。** Nested 通常允许高档抽用低档未保护容量——关/限低档是为更高支付意愿留房，不是改公开报价本身。你可能需要两者、只要其一、或都不要。先问本店是 **nested / shared / dedicated**（NV-INV-01）。结构不明 → 只动看得到的公开价/促销，**不编** PMS 嵌套方向。高峰 Ahead：先关/限仍开着的深折低档，再谈是否涨 BAR；Hold 779–799 首选 799（Hypothesis / Simulation）。涨了 BAR 但 399 还挂着 = 等于没涨。弱夜把低档关光只留高 BAR 没人订 → 误用嵌套/限制，打开有围栏的低档或走 P05/P02，不要只盯 BAR、更不要 dump 到 399。错映射假低价 → P60。本店字段名 = **NV**。

完成定义：一张「先问 nesting 模式 → 列公开低于地板的产品 → 高峰关/限低档（可复用 close-low）/ 弱夜重开围栏低档 → 不把 BAR 砸成 399」过程。五种误用写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 高峰低档仍开** | 「低价还开着所以 ADR 上不去」；Ahead 深促仍可订 | 高支付意愿库存被低档早填 | **关/限低档**（复用 close-low）；再评是否涨 BAR |
| **B 弱夜关光低档** | 「促销全关了 BAR 也没人订」 | 误用嵌套/限制；高 BAR 空转 | **打开有围栏低档**或走 **P05/P02**；不要再涨 |
| **C 涨 BAR 忘关低档** | 「BAR 已经 799 了」但 OTA 仍挂 399 | 地板被嵌套/促销打穿；ADR 稀释 | **立刻关/限 399 类**；Hold 意图 BAR；等于没涨 |
| **D Parallel 当 Nested** | 把 dedicated 块当可互抽嵌套乱关 | 结构搞错 | 先问 shared/nested/dedicated；不明则只动公开可见产品 |
| **E 映射假低价** | 「低价还开着」其实是错码 | 事故不是库存策略 | **P60** 先停错码 |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问本店低价档和 BAR 是 **nested / shared / dedicated**，以及今晚还挂着哪些低于新地板的公开产品。结构不明就只动看得到的公开价/促销，不编 PMS 嵌套方向。本店字段名 = **NV**。
2. 高峰 Ahead：先关/限仍开着的深折低档，再谈是否涨 BAR。Hold 779–799 首选 799（Hypothesis / Simulation）。涨了 BAR 但 399 还挂着，等于没涨。
3. 弱夜把低档关光只留高 BAR 没人订，不是「再涨」，是误用嵌套/限制——打开有围栏的低档或走 P05/P02。错映射走 P60。不要把 BAR dump 到 399「因为嵌套太复杂」。
```

尺（Hypothesis；14/399/799 只 Simulation）：公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399 当新公开价。无默认关档 %。本店 nesting 字段 / 华住价码 SOP = **NV**。

Vendor / 定义指针（不写成中国 SOP）：

- AccountingTools *Nested booking limit*（B，§50）：高价预订可占用原留给低价的容量块；反向通常不可。航空例；酒店房价档映射 = **Hypothesis**。
- Amadeus Hotel Admin allotment controls（A Vendor，inventory-control 已录；§50 指针）：nested allotment 的 global booking limit 保护父库存不被低价早填满。UI/字段是厂商的，**不是**华住/本店报表名。本轮 WebFetch timeout，不摘新 UI。
- Talluri / Belobaba（S 书目）：Booking Limit / Protection / nesting 为容量控制主题——**不摘 EMSR 公式当本店 Fact**。

本店 nested 方向 / 价码名 / hurdle 字段 = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①低价档与 BAR 的库存关系（nested / shared / dedicated / Unknown）；②今晚仍公开可订、低于意图地板的产品列表；③用户是要「关低」还是「再涨 BAR」还是「弱夜没人订」。

先问（缺则标 NV，不停）：

- Stay Date、DTA、DOW；Pace（Ahead / On / Behind）；意图公开 BAR
- 仍挂着的公开低价产品（OTA/直销截图）：价、取消、是否促销/嵌套档
- 本店低价档与 BAR 是 nested / shared / dedicated？（NV-INV-01）
- 用户原话：「低价还开着所以 ADR 上不去」「把促销全关了 BAR 也没人订」「涨了 BAR 但 399 还挂着」「不知道 nested 还是 parallel 就乱关」

本店字段名 / 华住价码 SOP / hurdle 公式 = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走「结构 → 低档是否打穿地板 → Ahead 还是弱」：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 低价是本打算卖的公开档，还是错映射/错码？ | 错 → **P60**；是本打算卖 → 本剧 |
| D2 | nesting 模式：nested / shared / dedicated / Unknown？ | Unknown → 只动公开可见产品，不编方向 |
| D3 | Pace Ahead / 压缩路径，且仍有公开价 < 新地板？ | 形 A/C；先关/限低档 |
| D4 | 昨天/刚涨了 BAR，但低档/促销仍可订？ | 形 C；关低档；Hold 意图 BAR |
| D5 | Behind / 弱夜，且低档已关光、只剩高 BAR 空转？ | 形 B；重开围栏低档或 P05/P02 |
| D6 | 把 dedicated 块当 nested 互抽乱关？ | 形 D；先问结构 |
| D7 | 用户要「BAR→399 因为嵌套太复杂」？ | 拒绝；399 = 被拒绝的 dump |
| D8 | 真弱且结构已清？ | 才评 **P05/P02**；理由写 Pace，不写「嵌套搞不定」 |

## 3. Decision Tree（过程）

```text
FO/GM/电商：「低价还开着 ADR 上不去 / 促销全关了没人订 / 涨了 BAR 但 399 还挂着 / 嵌套太复杂干脆砸到 399」
  → 先问：是本打算卖的低档，还是错映射？（D1）
       错映射 → P60
       是公开产品 → 问 nested / shared / dedicated（D2）
            Unknown → 只列看得见的公开低于地板产品；关/限那些；不编 PMS 嵌套方向
            Nested/shared 且 Pace Ahead + 低档 < 地板 → 形 A/C：
                 先关/限低档（复用 close-low 机械尺）
                 Hold 或再评涨 BAR（how-much-to-move）；首选带 779–799 / 799
                 「涨了但 399 还挂」→ 立刻关 399 类；等于没涨
            Behind + 低档已关光 + 高 BAR 空 → 形 B：
                 打开有围栏低档（预付/成员/短窗）或走 P05/P02
                 不要「再涨」；不要 BAR→399 当新公开价
            Dedicated 被当 nested 乱关 → 形 D：停手；先映射结构
       「嵌套太复杂 dump 399」→ 拒绝
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     意图公开灵活 BAR + 仍开着的低档列表
Current Value:        用户值（sim 常为意图 799；低档 399）
Recommended Range:    Ahead：Hold 779–799；弱夜：不自动改 BAR 为 399
Preferred (首选):     Ahead 799（Hypothesis / Simulation）
Inventory Action:     高峰：Close 或 Booking Limit 收到保护意图地板的低档；BAR Open
                      弱夜误关：重开有围栏低档（深度/取消/渠道有界），不是砸公开 BAR
Restriction Action:   本剧不新堆 MinLOS/CTA（那是 P33/P40）；关价档 ≠ 加 stay 限制
Channel Action:       直销与主 OTA 对齐：高峰无公开可订 < 地板；弱夜不开无围栏深折当新 BAR
Nesting flag:         nested/shared/dedicated = **NV**（问本店；不明则只动公开可见）
Staging:              第一刀 = 列低于地板产品 + 关/限（高峰）或重开围栏（弱夜）。24h 看是否仍可订破价、Pickup、意图 BAR
Do-not-do:
  - 涨 BAR 却留着 399 嵌套/促销（形 C）
  - 弱夜关光所有低档只盯空 BAR（形 B）
  - BAR → 399「因为嵌套太复杂」
  - 一夜 −15%
  - 结构不明时编 PMS 嵌套方向 / EMSR 最优整数
  - 把错映射当嵌套策略（那是 P60）
  - 顾问代关价码 / 代改 CM
  - 开 P65
```

真实酒店若当前 BAR 不在该带，保留 **关低档方向 + Hold/评涨意图 BAR**，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「今晚关/限这一档低价」** 或 **「弱夜把误关的低档打开」**——不是 **「一夜 −15%」**，也不是 **「砸到 399」**。

顾问对 GM / 电商三句回话：

> 「先问低价档和 BAR 是 nested、shared 还是 dedicated，以及今晚还挂着哪些低于地板的公开产品。」
> 「高峰先关低档再谈涨不涨。涨了但 399 还挂着，等于没涨。Hold 799。」
> 「弱夜关光低档没人订，不是再涨，是打开围栏低档或走弱夜剧本。不要因为嵌套复杂就砸到 399。」

## 5. Why

1. **用了哪些数据（Fact）：** AccountingTools：nested = 高价可占低价块（B 定义，§50）。Amadeus nested allotment booking limit 保护父库存（A Vendor，已录）。店内：Pace、意图 BAR、仍开低档列表 = 用户。Nesting 模式 = 用户或 NV。
2. **逻辑链：**
```text
Nested：关/限低档 = 保护更高支付意愿容量（数量控制）
涨 BAR = 改公开报价锚点
两者正交：可只要关、只要涨、先关后涨、或都不要
涨 BAR 但低档仍开 = 地板被打穿 = ADR 稀释（形 C）
弱夜关光低档 = 限制过度的 rate-class 版（邻 P33，但是价档不是 stay）
错映射假低价 ≠ 嵌套策略 → P60
BAR→399「搞不定嵌套」= 用最坏公开价逃避结构诊断
```
3. **理论 / 卡：** inventory-control Nested + Booking Limit；close-low（压缩关低）；主卡 + 同伴卡；P01/P03/P05/P02/P18/P19/P33/P60；`how-much-to-move.md` 禁一夜 −15%。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「先关低再涨」顺序；酒店房价档嵌套映射；无弹性系数；无中国嵌套 SOP Fact。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 售出间夜 | 高峰关低档可能慢一点低价填满、换高支付意愿尾部；弱夜重开围栏低档目标是可售成交，不是虚荣空 BAR |
| ADR | 关穿地板低档 → ADR 上抬方向；留 399 开着 → ADR 被稀释 |
| RevPAR | 不编精确增收；方向随 mix |
| Pickup | 分：低档 vs BAR 层；关错主 BAR 层要先开回 |
| Conversion | 弱夜只留高 BAR 可能零转化 → 形 B |
| Net Revenue | 佣金 NV；不算假精确净额 |
| Profit | Unknown |

允许的写法：若 24h 内公开栏已无 < 地板产品、意图 BAR Hold、Pickup 未塌成「主渠道不可订」→ 高峰关低成立。若弱夜重开围栏后 Pickup 回、公开 BAR 未砸到 399 → 形 B 成立。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 关完主 BAR 不可订 | 关错层 | OTA/直销 | 先开回 BAR 层，不重开破价 |
| 形 C 假涨价 | BAR 改了低档还开 | 公开栏 | 立刻关低档 |
| 形 B 空转 | 弱夜关光 | Pickup≈0 | 重开围栏或 P05/P02 |
| 当 P60 | 错码当策略 | 映射核对 | **P60** |
| 当 P33 | 乱加 MinLOS | 限制表 | stay 限制走 P33；本剧管价档 |
| dump 399 | 「嵌套太复杂」 | 公开栏 | 拒绝 |
| 结构真空 | 乱关 dedicated | 配额对不上 | 问 NV-INV-01 |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 仍公开 < 地板的产品列表 | 即时 | 价/取消/渠道 | 用户 |
| nesting 模式 | 一次 | nested/shared/dedicated/NV | 用户 |
| 意图 BAR vs 活价最低公开档 | 即时 | gap；见 open-rate-classes | 用户 |
| Pace / Pickup 分层 | 24h | 低档 vs BAR | 用户 |
| 主渠道 BAR 层是否可订 | 关后 | 勿关死 BAR | 用户 |

默认最少 5 个：nesting 模式（或 NV）、低于地板产品列表、Pace、意图 BAR、是否错映射（P60 门）。

## 9. Re-evaluation Trigger

- 发现是错映射/错码 → **P60**
- 关低后主 BAR 不可订 → 开回 BAR 层；保持破价关
- 弱夜确认 Behind + remaining 厚 → **P05/P02** 围栏；仍禁公开 BAR→399 当新锚
- 要堆 MinLOS/CTA → **P33/P40**（别混进本剧）
- OTA 报名深促 → **P18**；预付深度 → **P19**
- 用户给出 nesting 方向 → 在建议里引用用户映射，仍不编 EMSR

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 nesting 字段 / 华住价码 SOP / hurdle 全部 NV；799/399/14 是 Hypothesis/Simulation；AccountingTools 是航空定义迁移；Amadeus 是 Vendor allotment 机制不是本店 SOP。
为什么不是 Low：关低 ≠ 涨 BAR 可证伪；形 C「涨了还挂低档」可证伪；第一刀（列产品 + 关/限或重开围栏）可逆；与 close-low / inventory Nested 同向。
因此怎么用：先问结构；高峰关低档；弱夜开围栏；不 dump 399；不明则只动公开可见。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-nested-low-open-sat.md`：周六 Pace Ahead，remaining **14**，BAR **799**，但 OTA 仍挂嵌套/促销 **399** 灵活；GM 昨天涨了 BAR，电商忘关 399 → **关/限 399 档**；**Hold 779–799 首选 799**；不要把 BAR dump 到 399。可选第二拍：弱周二低档全关、BAR 799 空转 → 重开有围栏低档，不要把 399 写成新 BAR。14/399/799 **Simulation only**。399 = **高峰要关的档 / 被拒绝的新 BAR dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 18:17 CST | 首版。P64。嵌套结构诊断；形 A–E；主卡+同伴卡；复用 close-low；拒 399。16:17 不规定 → 本案例槽核实后开。未开 P65。 |

> 交叉指针（2026-08-29 06:17，不改正文）：嵌套/促销档忘关仍本剧。「有窗闪促卖爆了所以改写公开 BAR」过程走 **P73**。不写 P74。
>
> 交叉指针（2026-08-29 08:17，不改正文）：闪促改尺 Diagnose 走 **T-Flash**；过程仍 P73。嵌套忘关仍本剧。不写 P74。


> 交叉指针（2026-08-31 06:17，不改正文）：嵌套低档开/关仍本剧。hurdle / bid price / LRV 可售门 ≠ 公开 BAR 过程走 **P85** `hurdle-bid-lrv-vs-bar`。不写 P86。

> 交叉指针（2026-08-31 08:17，不改正文）：嵌套低档开/关仍本剧。hurdle/bid/LRV Diagnose 走 **T-Hurdle**，过程仍 **P85**。不写 P86。

> 交叉指针（2026-09-02 06:17，不改正文）：嵌套低档开/关仍本剧。§111 OPERA BAR Rate Groups = 每组 Best 显示/派生锚，≠ dump 公开尺。不规定 P88。

> 交叉指针（2026-09-03 16:17 T03-16，不改正文）：嵌套低档开/关仍本剧。门市/Rack/牌价改尺 Diagnose 走 **T-Rack** `theory/rack-vs-bar.md`，过程仍 **P01** + **P64**（+ **T-Floor**）。不规定 P88。
> 交叉指针（2026-09-03 18:17 C03-18，不改正文）：callable Simulation `cases/sim-2026-rack-vs-bar-sat.md`。Diagnose 走 **T-Rack**；过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699；§129。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 交叉指针（2026-09-05 04:17 R05-04，不改正文三句 / 399 / 799）：§139 新开 Clock Occupancy Adaptable Rates（OCC 阶梯自动换价 + manual price priority ≠ 公开灵活 BAR rewrite）+ Protel OCC% Close 用途升核。Diagnose 仍 **P66**；过程仍 **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-00 deepen **已 skip**。不开 P88。不开 P89。
