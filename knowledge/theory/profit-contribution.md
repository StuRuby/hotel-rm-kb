# Profit Contribution｜间夜贡献 / 变动成本 / 「宁可不卖」

> 资产：T19 理论卡  
> 路径：`theory/profit-contribution.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-22  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR Flow Through / GOPPAR 公式）；A（CoStar Flow-through 文；HSMAI CPOR 词条名；Kimes 超售课：空房成本 = 少卖一间的贡献）；B（与 Net ADR / 超售空房成本同一决策链）  
> 配套：`metrics/goppar.md` · `metrics/flow-through.md` · `metrics/net-adr.md` · `channel/net-contribution.md` · `overbooking/overbooking-framework.md` · `recommendations/do-not-sell-below-contribution.md` · `recommendations/stop-cut-if-revpar-falls.md`  
> 问题树：§36「卖了但更亏」  
> 禁止：编造变动成本金额 / 佣金% / Walk 成本 / 点弹性 / 餐标；默认「布草 ¥__」表；用 GOPPAR 当晚改 BAR；摘教材正文；写 P27/P31/P35；重写 T18。

---

## 0. 一句话

**499 还能卖，不等于该卖。** 顾问问的不是 BAR 视图的「比空着强吗」，是：**这一间的净价 − 用户给出的变动成本 − 渠道成本，贡献是不是还为正。**  
贡献 ≤ 0 → 卖一间 OCC 升、GOP 掉 → **宁可不卖**。没有变动成本和净价 → **不能**说 499「总比空着强」。

```
Naive（禁止）     空着 0、499 总有进账 → 卖
Net-only          扣佣金后还比直销高 → 还可能亏早餐/布草
Contribution      净价 − 用户变动成本。≤0 → 关这个产品，不要为了 OCC 卖
```

完成标准：用户说「499 还能卖，佣金+早餐+布草会不会亏？」→ 要 Stay Date + 净价 + 三成本；缺成本不编；已知深折相对 BAR 仍可作**弱结论**拒配 399。

---

## 1. 贡献公式（声明制，数字全是用户的）

三个口径不要混（`metric-tree.md` §7.1 已分；本卡用第三列做当晚决策）：

| 名称 | 口径 | 当晚能不能用 |
| --- | --- | --- |
| 客房部门利润（USALI） | 客房收入 − 客房部门费用 | 月报 / 结构；不是今晚 BAR |
| COPE / Net ADR | 收到的收入 − 已声明获客成本 | 渠道排序；**未扣**布草/早餐 |
| **间夜贡献（本卡）** | 该笔净价 − 占用一间的**增量**变动成本 | 卖不卖这间；清单必须声明 |

```
Offered_gross_c     = 客人价或渠道挂价（声明含税/含早）
Channel_cost_c      = 佣金 + 店出促销折扣 + 可归属投放/交易费     # 用户合同；不编 %
Net_rate_c          = Offered_gross_c − Channel_cost_c           # 与 metrics/net-adr.md 同族
Variable_cost_room  = 用户给出的「多住一间才发生」的成本
                    # 常见清单（有则计、无则 Unknown，不填行业表）：
                    #   布草/客房清洁增量、含早或送早的增量餐成本、增量能耗/水、
                    #   按入住触发的 amenity。不含房租、折旧、前台底薪。
Contribution_c      = Net_rate_c − Variable_cost_room
```

**禁止双计：** 佣金已进 Net 就不要再减一次。含早已在 Variable 里，就不要再用「餐标很高」加回（加回是 T18 的 F&B **贡献**，须用户另给）。

**Net ADR ≠ 利润。** `metrics/net-adr.md` 已写。本卡把下一刀补上：利润至少还要扣占用成本。

HSMAI Academy 词条 **Cost Per Occupied Room (CPOR)**（A，2026-08-22 打开）：`CPOR = Total Rooms Department Cost / Rooms Sold`。那是**客房部门平均成本**，含不全是增量的劳动力，**不是**本卡 Variable_cost_room。禁止把 CPOR 或任何博客「每间 ¥25 布草」当默认变动成本。

Cornell / eCornell 超售公开讲法（B，与 `overbooking-framework.md` 同源）：空房成本 = 少卖一间的**贡献**（房价 − 变动成本）。IMPACT 文有教学例 ADR 120、变动成本 20 → 空房 100——**那是课例，不是 2026 中国店成本，禁止抄进建议。** 本库：变动成本 = **用户输入**。

---

## 2. 低于贡献去卖，OCC 升也会毁 GOP

会计方向（不是点弹性）：

```
卖一间 Contribution_c < 0
  → Sold +1，OCC↑
  → Room Revenue 可能仍↑（499>0）
  → 但 GOP 少了一截（佣金+早餐+布草 > 进账）
  → GOPPAR 掉；Flow Through 变负或接近 0
```

所以：

| 看起来 | 实际 |
| --- | --- |
| OCC 上来了 | 可能在买入住、卖利润 |
| RevPAR 平或微升 | 仍可能 GOP↓（费用涨得比收入快） |
| 「总比空着强」 | 空着损失的是贡献；贡献为负时空着 **更强** |
| 499 对 BAR 不算太深 | 499 净价对变动成本可能已经穿底 |

弹性卡：OCC↑ RevPAR↓ → 停砍（量没赚回价）。  
本卡更严：OCC↑ **GOP↓** → 即使 RevPAR 没掉，也是更差的「卖了但更亏」。先查 mix（低净渠道/含早深折）和成本泄漏，**不是再降价**。

---

## 3. Flow through：收入涨、利润不涨

STR Glossary（S，2026-08-22 打开）+ CoStar 文 2026-02-23（A）：

```
收入相对预算或上年上升时用 Flow Through：
Flow Through % = (ΔGOP ÷ ΔTotal Revenue) × 100

收入下降时用 Flex（不要和 Flow Through 混）：
Flex % = (1 − ΔGOP ÷ ΔTotal Revenue) × 100
```

CoStar：高 Flow Through = 增量收入进了利润（成本纪律 + **更赚钱的需求 mix**，不是只卖了更多间）；**负 Flow Through = 收入涨但 GOP 掉**。

顾问用法（Diagnose，不是当晚 BAR）：

```
收入↑ GOP 平或↓  → Flow Through 差或为负
                   → 先查：OTA/含早/批发 mix、佣金、劳动力是否跟量线性、促销谁出资
                   → 不要再降价冲 OCC
收入↑ GOP 几乎 1:1 → mix 干净或增量成本很低；仍不是「今晚可以 dump 399」的许可证
```

独立指标卡：`metrics/flow-through.md`。无月度 P&L → 写 **Flow Through Unknown**，改用本卡间夜贡献 + Net ADR。

---

## 4. 何时「宁可不卖」

任一条成立 → 关该 Rate Plan / 不匹配 399 / 守 BAR。不是「适当观察」。

| 关闭 | 为什么 | 动作 |
| --- | --- | --- |
| **净价 ≤ 贡献底（Contribution ≤ 0）** | 每多一间 GOP 更差 | 关这个产品；不要为了 OCC 卖 |
| **最后一分钟 dump 穿贡献** | P05 允许短窗围栏，**不允许**把 BAR 砸到贡献以下 | 围栏先做；穿底则认栽空房 |
| **高峰 / Pace Ahead 的 OTA·opaque 深折** | 机会成本 ≈ 将被挤的 BAR 净，不是 0；深折还可能穿贡献 | 不报（P18）；不写 P27 正文，只作为高峰深折的关闭理由 |
| **为了留 399 去 Walk 高价值** | Walk 成本未知且通常 ≫ 399 贡献；空房成本 = 未售间的贡献，不是 Walk×2 | 不接 399；Walk 排序走 P24，不编金额 |
| **用「空着=0」压已知远低于 BAR 的深折** | 弱结论：没有变动成本也可以拒**相对 BAR 的已知深砍** | 不 Accept；问三成本后再谈弱日浅围栏 |

「宁可不卖」否定的是 **这一层价格/这一条产品**，不是关光渠道、不是把 BAR 降到 399 求公平。

---

## 5. 何时仍可卖（贡献仍须为正）

理论允许低价，但低价不是免检：

1. **Contribution_c > 0**（用户数字算出来；算不出来就不要装「总比空着强」）。  
2. **否则会 spoil**：该夜 Expected 填不满，机会成本 ≈ 0（只剩变动成本这道底）。与 `optimization-advise.md` 一致：机会成本≈0 时 500 可以接，**前提仍是净>变动成本**。  
3. **弱平日 / 商务周中结构空**（P12）：可以开浅围栏或高佣增量，**不是**把 BAR 永久改成 399。  
4. **DTA 短**且近 Pickup≈0、市场不冰：P05 档 H 战术产品有截止日期——**仍须贡献为正**。穿底 → 认栽，不第三刀。

同时失败则不卖。高峰能卖满散客时，贡献为正也还要过机会成本（T18/P10）；本卡不推翻高峰 Counter。

---

## 6. 利润视图 ≠ BAR 视图

| 尺 | 看什么 | 不是 |
| --- | --- | --- |
| BAR | 公开可订价、品牌带 | 利润 |
| RevPAR | OCC×ADR | 扣成本后的利润 |
| Net ADR | 扣获客成本 | 仍未扣布草/早餐 |
| **Contribution** | 这一间还剩多少 | 月度 GOP |
| TRevPAR | 全店收入 / 可供房 | 费用；当晚 BAR（T18） |
| GOPPAR | GOP / 可供房 | 当晚涨降价中枢 |

Kimes 2017 目录级（T18 已用）：GOPPAR **没有**取代 RevPAR。本卡沿用：GOPPAR / Flow Through 看结构和 P&L；**今晚这一间**用贡献 + Pace。禁止「GOPPAR 这个月还行所以 499 可以卖」。

超售对照（强制）：

```
Empty-room cost  = 这一间若空着少掉的 Contribution     # 用户净价 − 用户变动成本
Walk cost        = 用户清单；禁止房价×2
Critical ratio   = Walk / (Walk + Empty)               # 已有框架；无数字不报超售间夜
```

变动成本是客房侧对「空房贡献」的那一项，不是 Walk 的替代。

---

## 7. Diagnose 三句（顾问出口）

1. 没有变动成本和净价，不能说 499「总比空着强」。  
2. 净价低于贡献就关这个产品，不要为了 OCC 卖。  
3. Flow through 差 = 收入涨利润不涨，先查 mix 和成本，不是再降价。

用户只丢「499 要不要卖」时，点名再要的 3 个数：**布草（或客房增量清洁）/ 早餐增量 / 佣金（合同）**。缺一仍可算能算的，并写低估了亏。禁止用「行业平均变动成本」填空。

---

## 8. 与已有启发式兼容（不改幅度）

- **P02 / P05：** 先围栏，禁止一夜 −15% 当永久 BAR。本卡加一道：**围栏净价也不得穿贡献**。穿底 = 认栽空房，不是再砍。  
- **P18：** 出资未知或砸高峰 → 不报。本卡：未知变动成本时，高峰深折同样不报。  
- **P20：** 按净排序。本卡：净之后还要贡献；净高但含早把贡献打穿 → 仍关。  
- **弹性：** OCC↑ RevPAR↓ 停砍；OCC↑ GOP↓ 更差 → 同样停砍，并关穿底产品。  
- **T18：** 客房贡献 vs 全店 F&B 贡献。本卡不写餐翻盘；无 F&B 贡献数字仍不 Accept 低价团。  
- **优化理论：** bid price 是机会成本；贡献是成本底。两道门都过才卖给低价需求。

未改：+5–8% / +8–15% / 围栏 −3–5% / BAR −5–10% / 禁一夜 −15% / 价已最高只关不涨 / 留尾 20–30%。

---

## 9. 证据（2026-08-22 核）

| 论断 | 级 | 源 |
| --- | --- | --- |
| Flow Through % = ΔGOP / ΔTotal Revenue × 100；收入升用 Flow Through、降用 Flex | S | STR Glossary「Flow Through / Flex」https://www.costar.com/products/str-benchmark/resources/glossary |
| 负 Flow Through = 收入涨 GOP 掉；高 Flow Through = 更赚钱的房间而非只是更多房间 | A | CoStar 2026-02-23 https://www.costar.com/products/str-benchmark/resources/data-insights-blog/connecting-revenue-and-profitability-flow-through-flex |
| GOPPAR = GOP / Available | S | 同 Glossary；已有 `metrics/goppar.md` |
| GOP = 收入 −（部门费用 + 未分配经营费用），其下才是管理费/固定费用 | A | CoStar GOPPAR 文；与 GOPPAR 卡一致 |
| CPOR = 客房部门成本 / Sold（平均，非增量） | A | HSMAI Academy Glossary https://academy.hsmai.org/glossary/cost-per-occupied-room/ |
| 空房成本 = 房价 − 变动成本（贡献）；教学例不得当政策 | B | eCornell IMPACT 超售讲法；本库 overbooking 卡已引用。本轮 IMPACT 页 WebFetch timeout → 不新摘课例数字 |
| 本店变动成本金额 / 中国 OTA 佣金% | — | **NV。用户输入。不编。** |

---

## 10. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-PC-01 | 本店每间夜增量变动成本（布草/清洁/早/能耗） | **不编**；问三数；缺则 Unknown |
| NV-PC-02 | 用户「经营利润」是否 = USALI GOP（Flow Through 分母/分子） | 同 NV-GP-01；对不上则标口径 |
| NV-PC-03 | 含早成本是餐成本还是客房包价分摊 | 用户认领；顾问不代拆餐标 |
| NV-PC-04 | 中国店佣金% | 同 NV-CH-01；合同 |
| NV-PC-05 | Walk 成本 | 同 NV-OB-01；不写 ×2 |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 08:17 | 首版。贡献 = 净价 − 用户变动成本。宁可不卖。不编成本表。 |

---

## 12. 交叉（2026-08-22 10:17，不改贡献公式）

高峰 / Pace Ahead 的 opaque 深折：机会成本 ≈ BAR 净，不是 0。**P27 已 drafted** `opaque-package-leakage.md`：高峰关盲盒/批发；弱日仅净>贡献可留；缺成本不说总比空着强。本卡公式不改。变动成本仍 NV。

---

## 13. 复盘（2026-08-22 12:17，不改贡献公式）

与 P02/P05 序列兼容：先诊断、先围栏 −3–5%、从不把一夜 −15% 当永久 BAR；有成本才过贡献闸，**缺成本 ≠ dump 399**。空房成本 = 未售贡献，不是 Walk×2。无 `needs_revision`。

## 14. T20 交叉（2026-08-22 16:17，不改贡献公式）

店长要 OCC、收益要 GOP：用贡献和 Pace 说话，**不拿预算当刀**。预算差不是穿贡献的许可证。有用户声明品牌底时，围栏也不得穿底（T20）。变动成本仍 NV。

## 15. T08 交叉（2026-08-23 16:17，不改贡献公式）

用便宜三晚均价占周六：机会成本是被挤掉的高峰贡献，不是 0。尺：`metrics/stay-network-value.md`。无变动成本仍不说「699 总比空着强」——空着的往往是肩日。变动成本仍 NV。

## 16. T-Upsell 交叉（2026-08-27 08:17，不改贡献公式）

付费升加价 = 已占用停留上的增量贡献候选；免费升 = 更高型用量 + $0 增量房费。空差价经济学 → **T-Upsell** `theory/paid-upsell-differential.md`。过程仍 P61。变动成本 / 早餐规则仍 NV。
