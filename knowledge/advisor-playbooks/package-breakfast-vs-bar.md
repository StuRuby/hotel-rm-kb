# Playbook P69｜含早 / 套餐价 vs 公开 BAR（套餐不是 BAR；不要把餐贡献砍进房费）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/package-breakfast-vs-bar.md`  
> BACKLOG：P69 含早/套餐价 vs 公开 BAR · HIGH · 先诊断枝（本轮同开）· slug **package-breakfast-vs-bar**  
> 状态：**drafted**（2026-08-28 14:17 CST）  
> 配套卡：`recommendations/dont-cut-bar-for-package.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/ep-vs-package-gap.md`（EP BAR vs CP/套餐挂牌 vs Pace；**无默认加价 %**；本店含早加价 NV）  
> 理论：**T-Package** `theory/package-vs-ep-bar.md`（套餐挂牌不是公开 BAR；分摊/餐食旗不是定价权；过程仍 P69）· OPERA BAR 模型 · Package Allowance 分摊 · EP 为尺  
> 交叉：P36 竞对含早不可比 ≠ 本剧「我们自己的套餐是不是 BAR」· P27 盲盒/批发假打包 · P20 渠道净价/佣金含餐 · P18 促销报名 · P64 嵌套低档 · P05 真弱 leftover · P01 Ahead Hold  
> 问题树：§76 「套餐/含早价不是公开 BAR」  
> 仿真：`cases/sim-2026-breakfast-package-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA About BAR：BAR=房型最低合格公开价模型 — §60；OPERA Package Codes：Item Price 从房价扣减 → nett accommodation — §60）；C 实践（OnlineHotelier：BAR 起点=EP，CP/MAP 加在之上 — §60；印卢%/60–80% **不进中国 Fact**）；C（Prostay：room-only 与 breakfast-included 分价码 — §60；€ 价差不进 Fact）  
> Last Verified：2026-08-28  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆 EP vs CP/套餐、Hold 公开 EP BAR、拒绝把套餐价写成新 BAR 或把房费砍到地板；**不操作** PMS / OTA / 价码映射，不自动定价，不代配早餐 allowance。  
> 禁止：发明华住含早 SOP、默认早餐加价 ¥、佣金%、699；一夜 −15%；BAR→399「含早所以地板」；把 14/399/799 当市场 Fact；开 P70；把竞对含早截图当本剧（误入 P36）；把盲盒假打包当本剧主刀（误入 P27）。  
> 12:17「不要规定 P69」= recap 槽不得指定；本 scout 核实套餐/含早缺口后开。

---

## 0. 一句话

**含早 / 套餐挂牌价不是公开 BAR。** 先问是 **EP/裸房** 还是 **CP/含早/套餐总价**。公开灵活尺用 **EP BAR**；套餐 = EP + 餐（及其他）贡献，分摊金额本店 **NV**。高峰 / Pace Ahead：公开 EP BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「含早所以房费可以地板」或「套餐 399 含双早」把 BAR dump 到 399，也不要把套餐总价写成新 BAR。竞对含早截图走 **P36**。盲盒假打包走 **P27**。本店含早加价 / 华住字段 = **NV，不编**。

完成定义：一张「先拆 EP vs 套餐 → Ahead Hold EP BAR → 拒地板/拒套餐当 BAR → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 套餐/含早价当公开 BAR** | 「我们 BAR 就是含早那个价」 | 用总价当尺 | **拆 EP vs CP**；Hold **EP** BAR |
| **B 含早所以房费地板 / BAR→399** | 「含了早，房费可以再砍」「套餐 399 当新 BAR」 | 用餐安抚砍房 / 锚死市场 | **拒绝 BAR→399**；399 不当新 BAR |
| **C 竞对含早截图便宜** | 「隔壁含早还便宜 80」 | 不可比 | **P36**；Hold |
| **D 盲盒/批发假打包** | 「打包价很低所以 BAR 也该低」 | 藏房费 / opaque | **P27** |
| **E 弱夜真 leftover** | 「反正空，套餐地板冲量」 | 需求弱 | **P05**；仍以 EP 为尺；禁一夜 −15% |
| **F 佣金吃套餐全额** | 「OTA 抽了含餐全款，所以要砍挂牌」 | 净贡献问题 | **P20**；不是砍 EP BAR 的许可证 |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问是 EP/裸房公开 BAR，还是 CP/含早/套餐总价。套餐挂牌不是 BAR。本店含早加价 / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 EP BAR Hold 779–799 首选 799。不要 BAR→399「含早所以地板」，也不要把套餐 399 写成新 BAR。
3. 竞对含早截图走 P36。假打包走 P27。渠道净额走 P20。真弱走 P05，仍以 EP 为尺。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **EP Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认含早加价 %、无「CP 必须贵 X」**。OnlineHotelier 60–80% / 印卢例 / Prostay €8–15 **不**进本库中国 Fact。本店含早加价 / 分摊规则 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud *About Best Available Rates*（A Vendor，§60）：BAR = 某日某房型最低合格公开价模型。**不是「含餐套餐总价默认等于 BAR」。**
- OPERA Cloud 25.2 *Package Codes*（A Vendor，§60）：allowance 包元素 Item Price 从 rate amount 扣减 → nett accommodation。例示套餐总额与住宿净额可分离。**挂牌套餐 ≠ 全是房费。**
- OnlineHotelier *Hotel Rate Plans*（C，§60）：BAR 起点常作 **EP**；CP/MAP/AP 加在 EP 之上；OTA 应用 EP 作 base。**比例/卢比例不采用为 Fact。**
- Prostay *Hotel Breakfast Guide 2026*（C，§60）：room-only 与 breakfast-included **分价码**。价差数字不进 Fact。

本店含早 SOP / 华住字段 / 默认加价 ¥ / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①用户说的「BAR」是裸房还是含早/套餐总价；②拟议是「改尺」还是「砍地板 / 写新 BAR」；③Pace / Remaining，不是套餐看起来贵不贵。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开 **EP** 价 vs 当前 **CP/套餐** 挂牌（缺则问，不编）
- 用户原话里的「BAR」指哪一个价码
- 拟议：砍裸房 / 把套餐当新 BAR / 跟竞对含早截图
- 本店含早加价 / 分摊（NV 不编）
- 用户原话：「BAR 是含早价还能砍裸房」「套餐 399 含双早当新 BAR」「含早所以房费地板」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | EP/裸房 vs CP/含早/套餐总价？ | 混用 → 形 A |
| D2 | 拟议 BAR→399 / 套餐当新 BAR / 房费地板？ | 形 B；拒绝 |
| D3 | 竞对截图含早/登录/套房？ | → P36 |
| D4 | 盲盒/批发/藏房费？ | → P27 |
| D5 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold EP |
| D6 | 渠道净/佣金吃全额套餐？ | → P20 |
| D7 | 真弱 leftover？ | → P05；EP 尺 |

## 3. Decision Tree（过程）

```text
GM/销售：「含早 BAR 再砍 / 套餐 399 当 BAR / 含早所以房费地板」
  → 先问：说的是 EP 还是 CP/套餐总价？（D1）
       混用 → 形 A：拆开；Hold EP BAR
  → 拟议地板或套餐当新 BAR？（D2）
       是 → 形 B：拒绝 BAR→399；399 不当新 BAR
  → 竞对含早截图？ → P36
  → 盲盒假打包？ → P27
  → Pace/Remaining？（D5）
       Ahead / On → Hold 779–799 首选 799（EP）
       Behind + 厚 → P05；仍 EP 尺；禁一夜 −15%
  → 净价/佣金争论 → P20（不因此砍 EP BAR）
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）
Rate / Rate Plan:     公开灵活 EP / 裸房 BAR（当前）
Current Value:        用户值（sim 常为 799 EP）
Recommended Range:    Hold 779–799（EP BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Package / CP:         可留独立价码；不当新 BAR；加价金额 NV
Inventory Action:     无（本剧不是关房）
Restriction Action:   无（本剧不是 MinLOS）
Channel Action:       不把 Brand.com EP dump 到 399「含早地板」；不把套餐总价标成 BAR
Staging:              第一刀 = 拆 EP vs 套餐 + Ahead Hold EP BAR。24h 看 EP Pickup
Do-not-do:
  - 把套餐/含早总价写成公开 BAR
  - BAR → 399「含早所以地板」
  - 一夜 −15%
  - 编华住含早 SOP / 默认加价 ¥ / 佣金% / 699
  - 顾问代操作 PMS 价码 / OTA 映射
  - 开 P70
```

真实酒店若当前 EP 不在该带，保留 **套餐≠BAR + Hold 公开 EP** 方向，不把 779–799 当市场 Fact。

## 5. Why

1. BAR 在 OPERA 语义里是房型最低合格公开价模型，不是含餐总价默认名。
2. 套餐 allowance 可把餐的 Item Price 从房价扣出 → 挂牌总额与住宿净额可分离；把总额当 BAR 会歪尺。
3. 实践上 EP 常作比价 base；CP 是加层。把 CP 当 BAR 再砍，等于双重让利。
4. 顾问十段要求落到日期/价格：本剧日期 = 用户 Stay Date；价 = Hold 当前 **EP** BAR 带。

## 6. Expected Impact

- Ahead 夜：不把套餐锚成新 BAR，尾房仍按 EP 卖。
- 口径：早会/店长说「BAR」时先对齐 EP，减少假贵/假便宜。
- 真弱夜：P05 仍有出口，不把剧本写成死守套餐。

点估计 NV。不编「含早该加多少钱」。

## 7. Risk

- 本店其实只卖含早、无 EP → 问清楚「公开灵活最低合格价」是哪个码，仍不把地板当 BAR。
- 竞对含早不可比被当成「我们贵了」→ P36 可挡。
- 假打包继续漏 → P27。
- 弱夜借口「套餐地板冲量」→ 仍禁 399 与一夜 −15%。

## 8. What To Watch

| 观察 | 窗 | 用来 | 缺则 |
| --- | --- | --- | --- |
| EP 公开价是否仍 Hold | 当日 | 有没有被改成套餐/399 | 用户 |
| CP/套餐挂牌 vs EP gap | 当日 | 只观察，不推导必须加价 % | NV |
| 1D Pickup（EP） | 24h | 是不是真弱 | 用户 |
| 是否有人把套餐标成 BAR | 当日 | 形 A/B | 截图 |
| 竞对截图是否含早 | 当日 | P36 | 用户 |

## 9. Re-evaluation Trigger

- 竞对含早/登录/套房截图 → **P36**
- 盲盒/批发假打包 → **P27**
- 渠道净贡献/佣金 → **P20**
- Pace 转真 Behind + 剩余厚 → **P05**；仍禁 399 与一夜 −15%
- 嵌套低价档仍开着 → **P64**
- 促销报名决策 → **P18**
- 用户给出本店含早分摊/集团 SOP → 引用原文，仍不代操作

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店含早加价 / 华住字段 / 中国 OTA 含早默认全部 NV；799/399 是 Hypothesis/Simulation；OnlineHotelier 比例不进 Fact。
为什么不是 Low：OPERA BAR 模型与 Package 分摊同向；EP 为尺、套餐≠BAR 多源一致；第一刀（Hold EP）可逆。
因此怎么用：先拆 EP vs 套餐；Ahead Hold EP；不 399；不把套餐当新 BAR。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-breakfast-package-sat.md`：周六 Pace Ahead remaining **14**、EP BAR **799**、含双早套餐挂牌 **899**；销售要「含早所以房费地板」把 EP 砍到 **399**，或把套餐 **399** 写成新 BAR → **Hold 779–799 首选 799**；不要 dump 到 399。14/399/799/899 **Simulation only**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。899 = 套餐挂牌 Simulation，不是新 BAR。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 14:17 CST | 首版。P69。套餐/含早≠公开 BAR；Ahead Hold EP；拒 399；拒套餐当新 BAR。12:17 不规定 → 本 scout 核实后开。未开 P70。 |
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。

> 交叉指针（2026-08-30 06:17，不改正文）：含早套餐仍本剧；Resort Fee/强制服务费/含税总价改尺 → **P79** `resort-fee-service-charge-vs-bar.md` · `dont-rewrite-bar-for-resort-fee.md`。交叉 P79 resort-fee/all-in ≠ 含早套餐。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-30 10:17，不改正文）：含早套餐仍本剧；员工价/付费员工折扣改尺 → **P80** `staff-employee-rate-vs-bar.md` · `dont-rewrite-bar-for-staff-rate.md`。交叉 P80 staff-rate ≠ 含早套餐。不写 P81。
> 交叉指针（2026-09-01 16:17，不改正文）：含早/套餐仍本卡/本剧；加床/Extra Person Diagnose 走 **T-Extra**，过程仍 **P78**。交叉 T-Extra ≠ T-Package。不规定 P88。

> 交叉指针（2026-09-02 14:17 S02-14，不改正文）：§115 Package Codes 挂 inventory items + Item Inventory Pool = 套餐/有限项库存 ≠ 公开尺；含早过程仍本剧。不开 P88。
