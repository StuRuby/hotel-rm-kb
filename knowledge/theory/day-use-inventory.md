# Day-use Inventory｜一间房可以卖两次；108% 不是过夜更紧

> 资产：T05/T06 伴生理论卡  
> 路径：`theory/day-use-inventory.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-24  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR Historical Benchmarking：Day Use 定义；同日再卖 OCC 可 >100%）；A（HFTP / USALI 12th GFC 更正：Day-Use **不进** Rooms Sold / Rooms Occupied）；B Vendor（Mews：能周转才卖两次；Prostay：高峰关 day-use）  
> 配套：`advisor-playbooks/day-use-hourly.md`（P44）· `recommendations/dont-dump-overnight-for-dayuse.md` · `recommendations/dont-raise-overnight-off-dayuse-occ.md` · `metrics/occ.md` · `metrics/inventory.md` · `theory/capacity-ooo.md`（T06 逆命题）  
> 问题树：§50 「钟点房占晚房」· 「OCC 108% 因为钟点再卖」  
> 禁止：编美团/携程钟点 SOP；编保洁分钟；把 199 写成行情 Fact；编佣金%；把 STR 6pm 写成中国营业 SOP；一夜 ±15%；重写 P01–P44 正文；操作 PMS。

---

## 0. 一句话

**OCC 过 100% 先问是不是白天钟点又卖了晚班，不是自动再涨过夜价。**  
一间物理房同一日历日可以产出一段 day-use **和** 一段过夜——若交回并周转。分子多卖一次，分母还是那些房。过夜剩余可能一点没紧。

```
Naive（禁止）     OCC 108% → 截断/未约束需求更强 → Increase 过夜 BAR
本卡              108% 里有几间是钟点再卖？重算过夜 OCC / Remaining，再走 P01/P03/P44
OOO 逆命题        OOO 砍分母 → OCC 好看（P37）；钟点加分子 → OCC 好看。Advise 相反
```

完成标准：用户说「OCC 已经 108%，今晚是不是该再涨？」→ 先拆 overnight Sold vs day-use extra Sold；缺数不编 8；不自动涨过夜 BAR。

顾问必须能直接说的三句：

```
1. OCC 过 100% 先问是不是白天钟点又卖了晚班，不是自动再涨过夜价。
2. 钟点再卖会把 OCC 抬高，过夜剩余可能一点没紧。
3. 过夜 ADR/OCC 要跟钟点拆开，别拿混在一起的 108% 去对标。
```

---

## 1. 物理事实：一间房 ≠ 一个 Sold

| | |
| --- | --- |
| 物理房 | 大楼里的一间。同一 Stay Date 最多被 **一个人过夜占用**（除非超售/walk）。 |
| Day-use / 钟点 | 白天时段产品。STR：按 **不过夜** 卖。能在晚到前交回 + HK 周转 → 同一物理房当晚还能卖过夜。 |
| 过夜 | 日历夜库存。P03 Remaining := **过夜可售**，不是「今天所有 Sold 加总」。 |
| 挡夜的钟点 | 交不回 / 离店过晚 / 房态关到次日 = **便宜过夜**，不是增量小时（P44 形 B）。 |

STR（S，Guidelines 本轮与 06:17 同页）：

- Day use rooms：按不过夜卖，且房价 **不是** Transient / Group / Contract 已发布或协议段 → 记 **Day Use**，不当该段 rooms sold。
- 客人白天占用、**6pm 前离**、房价不是已发布/协议价 → 记 Day Use。
- 卖进具体房价档的，编进该段并报 **rooms sold**，不报 Day Use。例：机组 07:00–17:00 编 Contract，不是 Day Use；**同日再卖，OCC 可以超过 100%。**
- Partial day / day-use **收入** 仍是客房收入（STR Include Rooms Revenue）。

**中国 6pm 营业截止 = NV。** STR 6pm 是报送分类线，不是美团钟点 SOP，不是本库营业死线。

---

## 2. 和 OOO 同方向的好看 OCC，相反的动作

| | OOO（P37 / T06） | Day-use 再卖（本卡 / P44） |
| --- | --- | --- |
| 好看 OCC 从哪来 | **分母变小**（PMS 常扣维修） | **分子变大**（同一房计了两次 Sold，或 PMS 把钟点算进 Sold） |
| 过夜需求变了吗 | 没有 | 没有（多出来的是白天小时，不是过夜 Demand） |
| Remaining | 真可售变少 | 过夜 Remaining := 过夜可售 − 过夜 Sold。钟点交回了就不占过夜剩余 |
| 默认 Advise | 不按好看 OCC 涨；假剩余不砸 | **不按 108% 涨过夜 BAR**；先重算过夜 OCC/Remaining。高峰钟点关或限额走 P44 |
| 对标 Comp | PMS 扣 OOO vs STR 不扣 → 假 MPI | 一边含 day-use Sold、一边不含 → **不对 MPI** |

```
例（用户数字，不是行业常模）
Physical = 100
Overnight Sold = 100     # 或 92，问用户
Day-use extra Sold = 8   # 同日再卖多出来的分子
Reported OCC = 108 / 100 = 108%

Overnight OCC     = Overnight Sold / Physical        # 100% 或 92%，不是 108%
Overnight Remain  = Available_to_sell − Overnight Sold
                    # 8 间钟点若已交回，不从过夜剩余扣
```

108% **不是**「未约束需求比 100% 更强所以再涨」。100% 截断（真实需求可能更高）仍可能成立；**多出来的 8 个点是二次售出，不是更多过夜客人。**

---

## 3. STR vs USALI：Day-use 进不进 Sold——冲突，不发明调和

| 尺 | Day-use 进 Rooms Sold？ | OCC>100%？ | 证据 |
| --- | --- | --- | --- |
| **STR Historical** | 真 Day Use（6pm 前离 + 非已发布/协议价）记 Day Use；**卖进具体档的白天房记该段 rooms sold**。同日再卖可 >100% OCC。收入仍进客房 | **可以**（同日再卖） | S，Guidelines |
| **USALI 12th GFC 更正** | Day-Use Rooms **不进** Rooms Sold、**不进** Rooms Occupied。收入进 Other Rooms Revenue。ADR 分母不含 Day-Use。12e 初印误加，已更正 | 过夜 OCC **不应**被纯 Day-Use 抬过 100% | A，HFTP 更正 PDF + FAQ 博文 |

**顾问用法：** 先问这张 108% 是 PMS / STR / 店内管理报表。  
- 按 STR 同日再卖 → 108% 合法，仍 **不是** 过夜更紧。  
- 按 USALI 更正 → 纯 Day-Use 本不该进 Sold；若店内进了，过夜 OCC 被抬高。  
- **禁止** 拿「含钟点」的本店 OCC 去打「不含钟点」的 STR Comp MPI。  
两套公开口径冲突处 **标出来，不编第三套公式。**

PMS 把钟点算不算 Sold = **NV**（本店声明）。未声明则两套都算：`Sold_all` 与 `Sold_overnight`。

---

## 4. 过夜 ADR 会被钟点拉开

```
混 ADR = (过夜房费 + 钟点房费) / (过夜 Sold + 钟点 Sold)
```

钟点价低于过夜 BAR 时，混 ADR 掉，**不是**过夜需求变弱。钟点价若被算进 Sold 很少、收入进 Other，过夜 ADR 反而看起来更高。  
**不要**用混在一起的 ADR/OCC 判断今晚过夜 BAR。拆开再走 P01/P12。  
199 不是过夜地板（T20）；199 不是行情 Fact。

---

## 5. Diagnose → Advise

用户原话：「OCC 已经 108%，今晚是不是该再涨？」

```
1. 108% 的分子里有几间是白天钟点 / 同日再卖？
   不知 → 问，不编 8。
2. 过夜 Sold / 过夜 Remaining？（P03：过夜可售，不是钟点 Sold）
   过夜剩余厚 → 不涨。108% 是钟点抬的。
   过夜剩余紧 + Pace Ahead → 才进 P01/P03。理由是过夜剩余，不是 108%。
3. 钟点还开着、会不会挡晚到？ → P44。高峰关或限额。不把钟点价写成过夜 BAR。
4. 对标 Comp 高几个点？ 一边含 day-use 一边不含 → 不作 MPI，更不当涨价令。
5. 其实是 OOO 砍分母？ → P37，不要和本卡混成一句「数据不准所以乱调」。
```

禁止一夜 ±15%。幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **别拿钟点膨胀的 OCC 去涨过夜。**

T19：交回的钟点只扣加一次 HK；挡夜还要扣过夜贡献。无成本不说总比空着强。  
T20：不把钟点价写成过夜 BAR / 品牌底。

---

## 6. 证据（2026-08-24 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Day Use：不过夜 + 非已发布/协议段。6pm 前离且非已发布/协议价 → Day Use。机组白天编 Contract；同日再卖 OCC 可 >100%。Day-use 收入进客房 | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （06:17 打开；本轮复核） |
| Day-Use **不进** Rooms Sold / Rooms Occupied；收入 Other Rooms Revenue；12e 初印误加已更正 | A | **Known 更正；与 STR 分子冲突，不发明调和** | https://www.hftp.org/downloads/documents/usali/usali12_day-room_correction.pdf ；https://www.hftp.org/blog/usali-12-faqs-day-use-room-correction |
| 白天小时可与过夜共存，能周转才卖两次 | B Vendor | 方向 | Mews *Drive more revenue with day use hotel rooms*（P44 已开） |
| sell-out / 早到高峰应关 day-use | B Vendor | 方向 | Prostay 2026（P44 已开） |
| 美团/携程钟点 SOP；保洁分钟；199 行情；佣金%；华住 SOP；中国 6pm 营业线 | — | **NV。不编。** | — |

---

## 7. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-DU-OCC-01 | 本店 PMS 钟点是否进 Sold / 是否可 OCC>100% | 问报表；两套都算 |
| NV-DU-OCC-02 | Comp / STAR 是否含 day-use Sold | 不同则不对 MPI |
| NV-DU-OCC-03 | 中国 6pm 是否营业/OTA 钟点死线 | **NV。** 只用 STR 报送 6pm |
| NV-DU-01…07 | 美团 SOP / 保洁分钟 / 199 / 佣金% | 仍 NV（P44） |

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 08:17 CST | 首版。T05/T06 伴生。OCC>100% = 同日再卖 ≠ 过夜更紧。OOO 逆命题。STR vs USALI 冲突照记。不写第二本剧本。 |

---

## 9. 交叉（不改 P01–P44 正文）

- **P44**：高峰关钟点；本卡解释为什么 OCC 会撒谎。  
- **P37**：缩分母 OCC ≠ 膨胀分子 OCC。不要混。  
- **P03**：Remaining := 过夜可售，不是钟点 Sold。  
- **P01**：过夜真紧才涨；108% 不是开门条件。  
- **T19**：加一次周转。  
- **T20**：199 不是过夜地板。  
- **禁止一夜 ±15%。**

- **T-Hall / `theory/function-space-occupancy.md`（16:17）：** 钟点胀分子 ≠ 厅不进客房 OCC。Advise 两边都是「先拆尺再定价」。
