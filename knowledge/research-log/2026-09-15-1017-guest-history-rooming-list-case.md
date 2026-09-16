# 2026-09-15 10:17 CST · CASE C15-10 · Guest History·past ADR / Rooming List / Post It·Passerby misread Simulation / 不开 P88

## 槽

案例与剧本小时（10:17 ∈ {2,10,18}）。对照：T15-08 Guest History/Rooming List/Post It deepen **theory-skip**（08:17）· S15-06 scout-only · §166。T15-08 判定无新轴、不开理论卡；本小时补 **callable Simulation 专卷**（镜像 C15-02←T15-00 Room Condition：deepen skip 后仍可补过程卷；本卷是 skip 后对既有 **P08+P45/P01 · P52+P53/P10 · P69+P87** 的 Guest History / Rooming List / Post It 误读专拍，**≠** 开新剧，**≠** 推翻 skip）。

**不开 P88。不开 P89。** 不开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。Advisor-First。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

Guest History·past ADR / Rooming List / Post It·Passerby ≠ 公开 BAR；Diagnose 走 **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699；§167 CASE 指针复述 §166。

## 做了什么

1. 重读 BACKLOG 头、progress 尾（T15-08 skip）、S15-06、T15-08 skip log、`sim-2026-room-condition-night-audit-market-misread-sat.md`（镜像：skip 后专拍）
2. 新开 `cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md`（顾问十段；Simulation only）
3. curl 复核八页均 **200**（与 §166 一致）：Stay Statistics ≈23856；Future/Past Stays ≈9520；Profile Production ADR ≈24414；Cloudbeds Stays ≈66306；About Rooming Lists ≈42517；Creating via Rooming List ≈35468；Cloudbeds Manage Rooming Lists ≈100324；Post It ≈25766
4. source-map **§167** CASE 指针（不造新 URL）
5. P08 / P45 / P52 文末指针；progress / README §8 头 · §8.4 / backlog / BACKLOG 头 bump
6. **不开** P88；**不**重写 P08/P45/P52/P01–P87 正文三句；**不**推翻 T15-08 skip

## 与 skip / 邻卷差异

| | T15-08 theory-skip | 本卷 C15-10 |
| --- | --- | --- |
| 动作 | 评估加深 → 不写新轴 | 补 callable 专拍 Simulation |
| Diagnose | 仍 P08+P45/P01 · P52+P53/P10 · P69+P87 | **仍 P08+P45/P01 · P52+P53/P10 · P69+P87** |
| Action | Hold 799；拒 399 | **Hold 779–799 首选 799；拒 399** |
| 开卡？ | 否 | 否（无新剧）；有 sim |

| | `sim-2026-room-condition-night-audit-market-misread-sat.md`（C15-02） | 本卷 C15-10 |
| --- | --- | --- |
| 触发 | Room Condition / Night Audit·EOD·Cashier / Market·Source 误读改尺 | Guest History·past ADR / Rooming List / Post It·Passerby 误读改尺 |
| Diagnose | P63+P67/P37 · P54+P45/P08 · P25+P20/P60… | **P08+P45/P01 · P52+P53/P10 · P69+P87** |
| 用户话术 | 「脏房多砸/Inspected少假满/夜审没过砍尺/市场码偏OTA跟dump→399」 | 「历史ADR低砸/画像Stay ADR跟尺/名单没齐假空/团名名单=需求死/辅项流水改尺→399」 |

| | 邻专拍（勿混） | 本卷 |
| --- | --- | --- |
| C15-02 | Room Condition / Night Audit / Market-Source | **≠** |
| C14-18 | House Count / Assignment / No Post | **≠** |
| C06-02 | DNM / Locked·Unassigned / Waitlist | **≠** |
| 纯 P52 | 团 cutoff / wash | **≠**（本卷含名单层，主轴是三层误读） |
| 纯 P69/P87 | 包价辅项 / 服务补偿 | **≠**（本卷含 Post It 邻闸，主轴不是纯辅项改写） |

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Viewing Profile History Stay and Revenue Statistics | 200 size≈23856 |
| **复核** | OPERA Cloud 26.2 Viewing Profile Future and Past Stays | 200 size≈9520 |
| **复核** | OPERA Cloud 26.2 Profile Production Statistics Report | 200 size≈24414 |
| **复核** | Cloudbeds · Stays tab inside the Guest Profile | 200 size≈66306 |
| **复核** | OPERA Cloud 26.2 About Rooming Lists | 200 size≈42517 |
| **复核** | OPERA Cloud 26.2 Creating Reservation Using the Rooming List | 200 size≈35468 |
| **复核** | Cloudbeds · How to Manage Rooming Lists | 200 size≈100324 |
| **复核** | OPERA Cloud 26.2 Charging Purchases Using Post It | 200 size≈25766 |
| **NV** | 华住住史·名单·过账 SOP / 默认历史 ADR 窗口 / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 **T15-08 skip** / **S15-06** / **C15-02**：**无真矛盾**。T15-08 skip = 不开新理论轴；本小时 = 补 Guest History / Rooming List / Post It 误读专拍 Simulation，不推翻 skip。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡 / Guest History 专 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P08 / P45 / P52 / P01–P87 正文三句；华住住史·名单·过账 SOP；默认历史 ADR 窗口 Fact；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；操作用户机器；回填 missed slots。

## 顾问可用性

用户说「回头客历史 ADR 低所以 BAR→399」「画像 Stay ADR 就是今晚公开尺」「团名单没齐所以假空砍尺」「团名名单=需求死」「Post It/迷你吧流水低所以砸尺 / 高所以涨→399」→ 调本卷 + **P08**（+ **P45**/P01）/ **P52**（+ **P53**/P10）/ **P69**（+ **P87**）；Ahead Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**是（专拍 Simulation 可调用；闸仍 P08/P45/P01 · P52/P53/P10 · P69/P87，无新轴）**。

## Notify

**YES**（新增可调用 Simulation `cases/sim-2026-guest-history-rooming-list-postit-misread-sat.md`）。

## 下一槽

**2026-09-15 12:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen skip**；**P08/P45/P52 Guest History·Rooming List·Post It deepen 08:17 skip**；**C15-10 本小时已写**；C15-02 已写；R15-04 已写；S14-22 / S15-06 scout-only；T15-00 / T15-08 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
