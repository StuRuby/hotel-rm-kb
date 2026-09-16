# 2026-09-15 02:17 CST · CASE C15-02 · Room Condition / Night Audit·EOD·Cashier / Market·Source misread Simulation / 不开 P88

## 槽

案例与剧本小时（02:17 ∈ {2,10,18}）。对照：T15-00 Room Condition/Night Audit/Market-Source deepen **theory-skip**（00:17）· S14-22 scout-only · §163。T15-00 判定无新轴、不开理论卡；本小时补 **callable Simulation 专卷**（镜像 C14-18←T14-16 House Count：deepen skip 后仍可补过程卷；本卷是 skip 后对既有 **P63+P67/P37 · P54+P45/P08 · P25+P20/P60/P36** 的 Room Condition / Night Audit / Market-Source 误读专拍，**≠** 开新剧，**≠** 推翻 skip）。

**不开 P88。不开 P89。** 不开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。Advisor-First。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

Room Condition / Night Audit·EOD·Cashier / Market·Source ≠ 公开 BAR；Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699；§164 CASE 指针复述 §163。

## 做了什么

1. 重读 BACKLOG 头、progress 尾（T15-00 skip）、S14-22、T15-00 skip log、`sim-2026-house-count-assignment-nopost-misread-sat.md`（镜像：skip 后专拍）
2. 新开 `cases/sim-2026-room-condition-night-audit-market-misread-sat.md`（顾问十段；Simulation only）
3. curl 复核八页均 **200**（与 §163 一致）：Room Management ≈12604；Controls Room Mgmt ≈68272；Cloudbeds HK conditions ≈94930；Closing Cashiers ≈30570；Managing EOD ≈11895；Cloudbeds Night Audit ≈67503；Marketing Management ≈67697；Cloudbeds Market Segments ≈69190
4. source-map **§164** CASE 指针（不造新 URL）
5. P63 / P54 / P45 / P25 文末指针；progress / README §8 头 · §8.4 / backlog / BACKLOG 头 bump
6. **不开** P88；**不**重写 P63/P54/P45/P25/P01–P87 正文三句；**不**推翻 T15-00 skip

## 与 skip / 邻卷差异

| | T15-00 theory-skip | 本卷 C15-02 |
| --- | --- | --- |
| 动作 | 评估加深 → 不写新轴 | 补 callable 专拍 Simulation |
| Diagnose | 仍 P63+P67/P37 · P54+P45/P08 · P25+P20/P60… | **仍 P63+P67/P37 · P54+P45/P08 · P25+P20/P60…** |
| Action | Hold 799；拒 399 | **Hold 779–799 首选 799；拒 399** |
| 开卡？ | 否 | 否（无新剧）；有 sim |

| | `sim-2026-house-count-assignment-nopost-misread-sat.md`（C14-18） | 本卷 C15-02 |
| --- | --- | --- |
| 触发 | House Count / Assignment / No Post·Advance·Interim 误读改尺 | Room Condition / Night Audit·EOD·Cashier / Market·Source 误读改尺 |
| Diagnose | P45+P08/P09/P37… | **P63+P67/P37 · P54+P45/P08 · P25+P20/P60…** |
| 用户话术 | 「House Status软需求死/预分房假满/No Post·Advance改尺→399」 | 「脏房多砸/Inspected少假满/夜审没过砍尺/市场码偏OTA跟dump→399」 |

| | 邻专拍（勿混） | 本卷 |
| --- | --- | --- |
| C14-18 | House Count / Assignment / No Post | **≠** |
| C06-02 | DNM / Locked·Unassigned / Waitlist | **≠** |
| C06-10 | Queue / Pending / Rush | **≠** |
| C07-10 | RTC / Day Type / Membership | **≠** |
| C07-02 | Mass Update / Refresh | **≠** |
| P54 | 散客当天没到（纯 noshow 改写） | **≠**（本卷含 Night Audit 邻闸，主轴不是 noshow） |
| P52/P53 | 团 cutoff / Tentative | **≠** |

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Room Management | 200 size≈12604 |
| **复核** | OPERA Cloud 26.2 Controls — Room Management | 200 size≈68272 |
| **复核** | Cloudbeds · Housekeeping room conditions | 200 size≈94930 |
| **复核** | OPERA Cloud 26.2 Closing Cashiers | 200 size≈30570 |
| **复核** | OPERA Cloud 26.2 Managing End of Day | 200 size≈11895 |
| **复核** | Cloudbeds · Night Audit | 200 size≈67503 |
| **复核** | OPERA Cloud 26.2 Marketing Management | 200 size≈67697 |
| **复核** | Cloudbeds · Set up Market Segments | 200 size≈69190 |
| **NV** | 华住房态·夜审·市场码 SOP / 默认夜审时刻 / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 **T15-00 skip** / **S14-22** / **C14-18**：**无真矛盾**。T15-00 skip = 不开新理论轴；本小时 = 补 Room Condition / Night Audit / Market-Source 误读专拍 Simulation，不推翻 skip。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡 / Room Condition 专 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P63 / P54 / P45 / P25 / P01–P87 正文三句；华住房态·夜审·市场码 SOP；默认夜审时刻 Fact；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；操作用户机器；回填 missed slots。

## 顾问可用性

用户说「脏房多所以需求死砸 BAR」「Inspected 少假满该涨/砍」「夜审没过 / 营业日没滚所以 Pace 假死砍尺」「市场码/来源偏 OTA 所以公开跟 dump→399」→ 调本卷 + **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Ahead Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**是（专拍 Simulation 可调用；闸仍 P63/P54/P45/P25，无新轴）**。

## Notify

**YES**（新增可调用 Simulation `cases/sim-2026-room-condition-night-audit-market-misread-sat.md`）。

## 下一槽

**2026-09-15 04:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；P66/P65 Fixed/Override deepen skip；P66/P65 Mass Update/Refresh deepen skip；P61/P49/P06/P66 RTC/Day Type deepen skip；**P45/P08/P37 House Count deepen skip**；**P63/P54/P45 Room Condition·Night Audit·Market-Source deepen 00:17 skip**；**C15-02 本小时已写**；C14-18 已写；S14-22 scout-only；T15-00 skip）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
