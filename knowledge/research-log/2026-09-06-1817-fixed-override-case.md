# 2026-09-06 18:17 CST · CASE C06-18 · Fixed Rate / Rate Amount Override / Force Availability misread Simulation / 不开 P88

## 槽

案例与剧本小时（18:17 ∈ {2,10,18}）。对照：T06-16 Fixed/Override deepen **theory-skip**（16:17）· S06-14 scout-only · §152。T06-16 判定无新轴、不开理论卡；本小时补 **callable Simulation 专卷**（镜像 C06-10←P63/P67 / C06-02←P37/P13：deepen skip 后仍可补过程卷；本卷是 skip 后对既有 **P66+P65** 的 Fixed/Amount Override/Force 误读专拍，**≠** 开新剧，**≠** 推翻 skip）。

**不开 P88。不开 P89。** 不开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。Advisor-First。

## 一句话

单笔 Fixed Rate / Rate Amount Override / Discount Reason / Force Availability ≠ 公开 BAR；Diagnose 走 **P66**（+ **P65**）；Hold 779–799 首选 799；拒 399；不发明 699；§153 CASE 指针复述 §152。

## 做了什么

1. 重读 BACKLOG 头、progress 尾（T06-16 skip）、S06-14、T06-16 skip log、`sim-2026-queue-pending-rush-misread-sat.md`（镜像：skip 后专拍）
2. 新开 `cases/sim-2026-fixed-override-misread-sat.md`（顾问十段；Simulation only）
3. curl 复核六页均 **200**（与 §152 一致）：OPERA 5.6 Fixed Rates ≈20520；Daily Details ≈40073；Rate Override Reasons ≈9864；RoomKey Override ≈40174；RMS Override ≈94282；HotelKey Force ≈46543
4. source-map **§153** CASE 指针（不造新 URL）
5. P66 / P65 文末指针；progress / README §8.4 / backlog / BACKLOG 头 bump
6. **不开** P88；**不**重写 P66/P65 正文三句

## 与 skip / 邻卷差异

| | T06-16 theory-skip | 本卷 C06-18 |
| --- | --- | --- |
| 动作 | 评估加深 → 不写新轴 | 补 callable 专拍 Simulation |
| Diagnose | 仍 P66+P65 | **仍 P66+P65** |
| Action | Hold 799；拒 399 | **Hold 779–799 首选 799；拒 399** |
| 开卡？ | 否 | 否（无新剧）；有 sim |

| | `sim-2026-queue-pending-rush-misread-sat.md`（C06-10） | 本卷 C06-18 |
| --- | --- | --- |
| 触发 | Queue / Pending / Rush / Room Is Ready 误读 | Fixed / Amount Override / Force 误读改尺 |
| Diagnose | P63+P67 | **P66+P65**（+ P87/P24/P33） |
| 用户话术 | 「排队长/Pending多/rush凶/Ready未发→399」 | 「Fixed多/override多/Force开了/分账脏→399」 |

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA 5.6 Fixed Rates | 200 size≈20520 |
| **复核** | OPERA Cloud 26.2 Updating Reservation Daily Details | 200 size≈40073 |
| **复核** | OPERA Cloud 26.2 Configuring Rate Override Reasons | 200 size≈9864 |
| **复核** | RoomKeyPMS How to Override a Rate | 200 size≈40174 |
| **复核** | RMS Cloud Reservation Base Rate Override | 200 size≈94282 |
| **复核** | HotelKey Force Availability and Allow Overbooking | 200 size≈46543 |
| **NV** | 华住改价·分账 SOP / 默认 override 频率 / Share 分账常模 / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 **T06-16 skip** / **S06-14** / **R06-12** / **C06-10**：**无真矛盾**。T06-16 skip = 不开新理论轴；本小时 = 补 Fixed/Override/Force 误读专拍 Simulation，不推翻 skip。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡 / Fixed 专 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P66 / P65 / P87 / P24 / P33 / P01–P87 正文三句；华住改价·分账 SOP；默认 override 频率 Fact；Share 分账常模 Fact；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；操作用户机器。

## 顾问可用性

用户说「Fixed 很多所以跟价/砍」「override 一堆所以 BAR→399」「Force 开了所以新尺」「分账均价脏所以砸公开」→ 调本卷 + **P66**（+ **P65**）；Ahead Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**是（专拍 Simulation 可调用；闸仍 P66/P65，无新轴）**。

## Notify

**YES**（新增可调用 Simulation `cases/sim-2026-fixed-override-misread-sat.md`）。

## 下一槽

**2026-09-06 20:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；P24/P33 Sell Limit deepen skip；P37/P13 DNM deepen skip；P63/P67 Queue deepen skip；**P66/P65 Fixed/Override deepen 16:17 skip**；**C06-18 本小时已写**；C06-10 已写；C06-02 已写；C05-18 已写；C05-10 已写；C05-02 已写；C04-02 已写；R06-12 已写；S06-14 scout-only）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
