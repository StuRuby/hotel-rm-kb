# 2026-09-05 18:17 CST · CASE C05-18 · Sell Limit misread Simulation / 不开 P88

## 槽

案例与剧本小时（18:17 ∈ {2,10,18}）。对照：T05-16 Sell Limit deepen **theory-skip**（16:17）· S05-14 scout-only · §143。T05-16 判定无新轴、不开理论卡；本小时补 **callable Simulation 专卷**（镜像 C05-10←P37 / C05-02←P66：deepen skip 后仍可补过程卷；本卷是 skip 后对既有 **P24+P33** 的 Sell Limit/Channel Sell Limit/Allowed OB 误读专拍，**≠** 开新剧，**≠** 推翻 skip）。

**不开 P88。不开 P89。** 不开新剧本 / 决策卡 / 轻指标 / 理论卡 / 问题树新枝。systems/*.md **无变**。不发布。不 git commit。不操作用户机器。Advisor-First。

## 一句话

可售数量闸（Sell Limit / Channel Sell Limit / Allowed OB）≠ 公开 BAR；Diagnose 走 **P24**（+ **P33**）；Hold 779–799 首选 799；拒 399；不发明 699；§144 CASE 指针复述 §143。

## 做了什么

1. 重读 BACKLOG 头、progress 尾（T05-16 skip）、S05-14、T05-16 skip log、`sim-2026-oos-vs-ooo-sat.md`（镜像：skip 后专拍）
2. 新开 `cases/sim-2026-sell-limit-misread-sat.md`（顾问十段；Simulation only）
3. curl 复核三页均 **200**（与 §143 一致）：OPERA Managing Sell Limits ≈15536；Managing Channel Sell Limits ≈10785；Apaleo Managed Overbooking ≈24110
4. source-map **§144** CASE 指针（不造新 URL）
5. P24 / P33 文末指针；progress / README §8.4 / backlog / BACKLOG 头 bump
6. **不开** P88；**不**重写 P24/P33 正文三句

## 与 skip / 邻卷差异

| | T05-16 theory-skip | 本卷 C05-18 |
| --- | --- | --- |
| 动作 | 评估加深 → 不写新轴 | 补 callable 专拍 Simulation |
| Diagnose | 仍 P24+P33 | **仍 P24+P33** |
| Action | Hold 799；拒 399 | **Hold 779–799 首选 799；拒 399** |
| 开卡？ | 否 | 否（无新剧）；有 sim |

| | `sim-2026-oos-vs-ooo-sat.md`（C05-10） | 本卷 C05-18 |
| --- | --- | --- |
| 触发 | OOS 跟 OOO 混算 | Sell Limit / Channel / Allowed OB 误读改尺 |
| Diagnose | P37+T06 | **P24+P33**（+ P58/P37） |
| 用户话术 | 「OOS=OOO 所以砸 399」 | 「闸到顶/负闸/一渠满/Allowed OB→399」 |

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Sell Limits | 200 size≈15536 |
| **复核** | OPERA Cloud 26.2 Managing Channel Sell Limits | 200 size≈10785 |
| **复核** | Apaleo Help · Managed Overbooking | 200 size≈24110 |
| **NV** | 华住 Sell Limit·渠道额度 SOP / 默认超售垫 / 渠道% / Walk $ / 699 | **仍 NV。不编。** |

## 兼容

与近三轮 **T05-16 skip** / **S05-14** / **R05-12** / **C05-10**：**无真矛盾**。T05-16 skip = 不开新理论轴；本小时 = 补 Sell Limit 误读专拍 Simulation，不推翻 skip。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。

## 刻意不补

**P88**；**P89**；新理论卡 / Sell Limit 专 slug；新剧本；Pet/AAA；smoking/damage FEE；重写 P24 / P33 / P58 / P01–P87 正文三句；华住 Sell Limit·渠道额度 SOP；默认超售垫 Fact；渠道% Fact；699 Fact；Vendor China Fact；systems/*.md；here.now publish；git commit；操作用户机器。

## 顾问可用性

用户说「Sell Limit 到顶了所以砍」「负 Sell Limit / Allowed OB 调了所以 BAR→399」「美团额度满了全店砸」→ 调本卷 + **P24**（+ **P33**）；Ahead Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**是（专拍 Simulation 可调用；闸仍 P24/P33，无新轴）**。

## Notify

**YES**（新增可调用 Simulation `cases/sim-2026-sell-limit-misread-sat.md`）。

## 下一槽

**2026-09-05 20:17 = sources/recap。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24** 列为「下一轮要写」— 已 drafted（T-Status Soft/Hard deepen skip；P66 Rate Strategy deepen skip；P37/T06 OOS vs OOO deepen skip；**P24/P33 Sell Limit deepen 16:17 skip**；**C05-18 本小时已写**；C05-10 已写；C05-02 已写；C04-02 已写）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。
