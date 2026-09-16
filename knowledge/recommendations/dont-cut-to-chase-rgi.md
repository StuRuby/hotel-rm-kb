# Decision Card: Don't Cut to Chase RGI（份额指数掉了不是降价理由）

> 资产：Advisor Decision Card（P57）
> 路径：`recommendations/dont-cut-to-chase-rgi.md`
> 对应：问题树 §64；「RGI 掉了是不是该降价抢份额」「MPI 不到 100 说明定价高了」
> 剧本：`advisor-playbooks/star-index-misread.md`
> 配套：`metrics/mpi-ari-rgi.md` · `market/comp-set.md` · P01 · P05 · P56 · P36
> 状态：active · 2026-08-26 14:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：S（公式与 fair share=100）；B（动作顺序）
> Last Verified：2026-08-26
> 仿真：`cases/sim-2026-rgi-drop-sat.md`
> Advisor-First：建议，不操作系统、不自动定价。
> 禁止：按月报 RGI dump；BAR→399 抢份额；一夜 −15%；编中国官方指数 / RGI 地板；开 P58。

## 三句（原样）

1. 先问指数的 **集合是谁、哪段日期、口径是不是 STR**。没有真 Comp Set 就没有 MPI。指数是份额诊断，不是今夜该不该砍 BAR 的理由。本店 Comp Set / 是否订阅 STR / 中国非 STR 样本怎么对标 = **NV**，不编一个中国官方同名指数。
2. 读组合，不读单点：MPI 低可能是产品、活动日、一家 Comp 关房、或 Comp 选弱了，不一定是价高。ARI 高也可能是 mix。下一步仍看 **今夜/本周** 的 Pace、Pickup、Remaining（P01/P05），不按月报 RGI dump。Hold 779–799 首选 799（Hypothesis / Simulation）。
3. 真弱的夜才走 P05/P02 的 bounded move；Ahead 的夜走 P01。不要把 BAR dump 到 399「为了把 RGI 拉回来」。RGI 是事后份额尺，拉不回已经卖掉的间夜，砍价稀释的是还没卖的。

```yaml
decision: Reject a public BAR dump merely to chase a STAR / MPI / ARI / RGI print; audit Comp Set and date window first; read the three indices together; reprice only off this-stay-date Pace / Pickup / Remaining
scenario: GM or owner sees monthly RGI below 100 (or MPI below 100, or ARI off the set) and asks to cut remaining nights to win share back
required_inputs:
  - index_window_and_whether_STR
  - named_comp_set (hotel Comp Set / STR subscription / China non-STR method = NV)
  - MPI_ARI_RGI_same_window
  - tonight_or_this_week_OTB_pickup_pace_remaining
  - current_BAR
signals_for:
  - the_only_reason_is_an_index_print
  - set_or_window_or_口径 unknown
  - tonight_is_Ahead_or_remaining_is_thin
signals_against:
  - a_specific_night_is_behind_with_thick_remaining_slow_pickup_and_open_supply
recommended_action: 不按月报 RGI 砍。先审集合与日期窗。读 MPI vs ARI vs RGI。今夜 Ahead/薄 → Hold 779–799 首选 799。真弱夜才 P05/P02 bounded，理由写该夜需求。Never −15%。Never BAR→399.
risk: 用还没卖的库存去赔已经卖掉的间夜；集合错仍在改价；与月末预算叠刀
follow_up: 24/48h 该 Stay Date 净 Pickup；Comp Set 是否仍真对手；公开渠道是否出现 399
confidence: Medium; 799 is Hypothesis / Simulation
evidence_level: B
last_verified: 2026-08-26
```

## 1. 硬门

命中任一即拒「为 RGI 砍」：指数窗是唯一理由；集合/日期/口径未问清；今夜 Ahead 或 remaining 薄；提案是 BAR→399 或一夜 −15%；想把 ARI 写成 BAR 目标。

## 2. 读组合，不读单点

```text
MPI = 量份额　　ARI = 价份额　　RGI ≈ MPI × ARI / 100
100 = STR fair share（不是「必须 ≥ X」）
MPI 低 ≠ 价高　　ARI 高 ≠ 必须把 BAR 降到 Comp ADR
```

公式见 `metrics/mpi-ari-rgi.md`，本卡不重写。

## 3. 允许降价的唯一出口

某一具体夜同时 **Pace Behind + Remaining 厚 + Pickup 慢 + 供给开**，则可走 P05/P02 bounded move。理由必须是该夜需求，不是月报 RGI，也不是「抢份额」。

## 4. 中国非 STR

无 STR → 不发明官方中国 MPI。问点名 3–5 家，用店实际有的 OCC/ADR 比。方法 **Hypothesis**。本店集合 / 是否订阅 STR **NV**。

## 5. 顾问出口

三句见上。早会一个动作（P45）：今晚按 Pace Hold 或移交真弱夜剧本，不要为月报 RGI dump。

理论（为什么指数不能重定价一夜）见 **T-Share** `theory/share-index-vs-price.md`。三句 / 399-rejected / 799-Hypothesis 不改。
