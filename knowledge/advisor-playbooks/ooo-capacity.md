# Playbook P37｜OO / OOO 把 Remaining / OCC 看歪

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/ooo-capacity.md`  
> BACKLOG：P37 OO/OOO 维修房把 Remaining/OCC 看歪 · HIGH（本周 timely）· 先诊断枝 · slug **ooo-capacity**  
> 状态：**drafted**（2026-08-23 02:17 CST）  
> 配套卡：`recommendations/dont-price-off-ooo-occ.md`（主卡；本剧不另开第二张卡）  
> 理论：`theory/capacity-ooo.md`（T06）· `metrics/inventory.md` · `metrics/occ.md`  
> 交叉：P03 Remaining:=可售；P05 不可售不是 dump 燃料，真可售 last-minute 仍禁一夜 −15%；P33 CTA/closed ≠ OOO；P13 一型 OOO 不压平其他型 BAR；P36 假 80 是价口径，本剧假 8 个点是量口径；T19 OOO 不是未售需求；T20 不砸品牌底去填不可售房  
> 问题树：§42 · §1.0 口径  
> 仿真：`cases/sim-2026-ooo-occ-92-saturday.md`（**Simulation**）  
> 证据等级：S（STR Historical：短 OOO < ~6 个月不扣报告可用房）；A（Forward STAR Adjusted；USALI FAQ / HotStats 转述）；A Vendor（Stayntouch OOO/OOS/OOI **仅该 PMS**）；B（店内 Remaining 常扣 OOO；动作）；中国报表名 / 维修间夜常模 **NV**  
> Last Verified：2026-08-23  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议重算可售、Hold / 移交 P03 / 移交 P05。**不操作 PMS**、不点维修单、不改房态、不代报 STR。  
> 禁止：编造中国 PMS「维修/停用/锁定」字段名当 Fact；把默认 OOO=20 写成行业 Fact；Walk 成本；佣金%；点弹性；华住 699；一夜 −15%；无 OOO 数就发明 20。

---

## 0. 一句话

OCC 好看先问分母。维修房不是涨价通行证，假空房也不是砸价对象。  
PMS 扣了维修、STR 没扣，就不要拿那几个点去对 MPI。

完成定义：一张「先重算可售 Remaining」过程。三种假信号写进**同一本**剧本，不拆成三本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | PMS OCC 92% | 分母被 OOO 砍小 | 不自动 Increase BAR。重算可售剩余；真紧 **且** Pace Ahead → 才 **P03**。可售仍厚 → Hold / 按 P05 规则，不涨 |
| **B 假剩余** | 物理空 40 | 里面 25 是维修/自用/锁 | 不 dump。打开真能卖的。真可售 last-minute 仍 **禁止一夜 −15%** |
| **C 假 MPI** | 对标 Comp 高 8 个点 | 分母不同 | 不炫耀、不砍价「追平」 |

顾问必须能直接说的三句：

```
1. OCC 92% 先重算可售剩余，维修房不是涨价通行证。
2. 空着 40 间先拆出不可售，剩下的才决定 Hold 还是小步围栏。
3. Comp OCC 高 8 个点先问分母；PMS 扣了维修、STR 没扣，就不要跟那 8 个点较劲。
```

独立默认（本库 Hypothesis）：当晚定价用 **Available_to_sell − Sold**。历史 STAR / MPI 用 **Physical × 天数**（短 OOO 不扣，S）。缺 OOO 数 → 问，不发明 20。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「OCC 已经 92%，要不要再涨？」且口头/报表有维修、装修、停用、自用 |
| S2 | 「还剩 40 间空着，今晚砸一刀？」且空房里可能含维修/锁/自用 |
| S3 | 「对标 Comp 我们 OCC 高 8 个点」且本店数来自 PMS、Comp 来自 STAR（或未声明） |
| S4 | 用户给了 Physical 与 PMS OCC，但没给 OOO；或两套 OCC 差几个点对不上 |

**不是本剧本：**

- OOO=0 且口径已声明 → 直接 **P01/P03**（真高峰）或 **P02/P05**（真弱/last-minute）。  
- 截图价差、会员/含早/App → **P36**（价不可比）。本剧是 **量** 不可比。  
- CTA / Closed to arrival 把 OCC 看低 → **P33**。限制 ≠ 维修。走开限制，不走本卡砸价。  
- 某一型 Remaining 假短、其他型厚 → 先扣该型 OOO，再 **P13**。不要为修一型去压平全店 BAR。  
- 长期整层关、接近 STR Extended Closed / 永久撤房 → 问是否走**官方房量变更**（Hypothesis，见理论 §6），不是秘密按 20 间改 BAR。

---

## 2. 输入（缺 OOO 不停，但不编 20）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) Sold 或 OTB
4) 用户口中的 OCC% 或「空着 N 间」——先当待重算，不当最终尺

应用：
5) 当日 OOO / 维修 / 自用 / 锁房间数（分房型）。缺则问，不发明 20
6) PMS Available 是否扣了上述状态（NV-OOO-02；未声明则两套都算）
7) Comp 那张 OCC 是 STAR 还是店内互采
8) Pace / 3D Pickup（重算之后才用来开 P03）

Recommended：
9) 工程结束日；是否已通知 STR 改房量
10) 分房型不可售（P13）
11) 是否其实是 CTA/配额关死（P33 / 开库存卡）
```

缺 OOO **不停**：条件化两支（卡 §4）。禁止「92% 所以涨 / 空 40 所以砸 / 高 8 个点所以我们更满」。  
顾问 **不** 点 PMS 维修单、不代报 STR。

---

## 3. 三口径清单（动价前必过）

先钉分母。对不上就不要用那张好看/难看的 OCC 去改 BAR。

| # | 问 | 定价用 | 对标 Comp / MPI 用 |
| --- | --- | --- | --- |
| D1 | **Physical** | 不是可售 | STR Rooms Available = 房量 × 天数（S） |
| D2 | **Available_to_sell** | **是。** Remaining 的上游 | 不是历史 STAR 分母 |
| D3 | **STR Rooms Available** | 不对当晚 BAR | 短于约 6 个月临时停用/**不得**扣（S，Historical Guidelines） |
| D4 | **Forward Adjusted** | OTB% 可以扣 OOO（A） | **不是**历史 Comp 那把尺 |

重算（声明口径；数字是用户的或 Simulation，不是行业常模）：

```
Sellable Remaining = Available_to_sell − Sold
STR OCC            = Sold / Physical          # 短 OOO 不扣
PMS OCC            = Sold / PMS Available     # 常扣 OOO，须声明
Physical empty     = Physical − Sold          # 含不可售，不是 dump 池
```

| 对不上 | 结论 |
| --- | --- |
| PMS OCC 高、OOO 实质 | **A 假高峰。** 92% 不是需求变强 |
| Physical empty 厚、里面是维修/自用/锁 | **B 假剩余。** 40 不是可砸的 40 |
| 本店 PMS OCC vs STR Comp OCC | **C 假 MPI。** 那 8 个点不当论据 |
| 「没房」其实是 CTA / 渠道配额 0 | **P33 / 开库存**，不是 OOO |
| 一型 Remaining=0、该型 OOO 一大坨 | **P13**，先扣该型再谈压缩 |

**CTA / closed ≠ OOO（P33）。** 限制挡的是「谁能买还在的可售房」；OOO 砍的是「房还在不在可售池」。误关限制 → 先松，不砸 BAR，也不把限制标成维修。

---

## 4. 诊断枝（禁止「92% 所以涨 / 空 40 所以砸」）

```
用户拿 OCC% / 空房 / MPI 要动 BAR
│
├─ 还没给 OOO / 不可售间数？
│     是 → 问，不发明 20。条件化：
│          若不可售 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
│          若不可售实质 → 先划掉再谈价
│
├─ A 假高峰：PMS OCC 好看，分母被 OOO 砍小
│     重算 Sellable Remaining 与 STR OCC
│     ├─ 可售仍厚，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 可售真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按 92% 涨」，进 **P03**（先关低价，再决定涨不涨）
│
├─ B 假剩余：物理空着好看
│     拆：不可售 vs 真可售
│     ├─ 真可售很少（空着的是马桶/自用）
│     │     → 不 dump。Hold。打开仍关着的真可售（配额/映射）
│     └─ 真可售仍厚 + DTA≤3 + Pickup≈0 + 市场不冰
│           → **P05** 三档；围栏优先；禁止一夜 −15%
│
└─ C 假 MPI：PMS OCC vs STR Comp
      先还原本店到 STR 口径再比
      不同口径 → 不炫耀、不砍价追平、不当涨价令
      同口径仍高 → 再问 Pace / 可售剩余，不单靠 MPI
```

**P03 只在重算之后。** 好看的 92% 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的房。** 降 BAR 卖不掉坏马桶。  
**T19：** 空着的**可售**房才有「少卖一间」的贡献机会成本；OOO 不是未售需求。无变动成本不说总比空着强。  
**T20：** 不发明 699 去清假 40。有声明底先围栏不砸穿。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 要 3 个数：Physical、Sold/OTB、当日不可售（分房型）。缺不可售 → 问，不编 20。
3. 声明 PMS 扣不扣 OOO（NV-OOO-02）。未声明两套都算。
4. 重算：STR OCC、Sellable Remaining、Physical empty。写进口径。
5. 排除 CTA/配额假满（P33）与一型 OOO（P13）。不要把限制当维修，不要压平其他型 BAR。
6. 分形：A 假高峰 / B 假剩余 / C 假 MPI。可以同时命中。
7. A：可售紧且 Pace Ahead → P03（先关低价再评涨）。只是分母小 → 不涨。
8. B：划掉不可售。真可售少 → Hold。真可售厚走 P05，仍禁一夜 −15%。
9. C：同口径才 MPI。PMS 扣了、STR 没扣 → 那 N 个点丢掉。不要为追 MPI 砍 BAR。
10. 输出 Hold / 不涨 / 不砸 / 移交 P03 / 移交 P05 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / PMS Available / OOO+自用+锁:   （用户数；缺则 Unknown，不编 20）
Sold or OTB:
Sellable Remaining（声明口径）:
STR OCC（Sold / Physical）:
PMS OCC（若扣 OOO，须声明）:
Comp 口径（STAR / 店内）:
Decision:  Hold BAR / 不涨 / 不砸 / 移交 P03 / 移交 P05
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      默认不开。假剩余不是围栏许可证
Inventory:  打开真能卖的（配额/映射）。不把 OOO 标成可售去砸
Restriction: CTA ≠ OOO。误关先松（P33）
Do-not-do:
  - 按 PMS 92% 自动 Increase BAR
  - 按物理空 40 一夜 −15% / 砸到 699
  - 用混口径 MPI 当涨价令或砍价令
  - 发明 20；编中国报表字段名；发明华住 699 / 佣金% / 点弹性 / Walk 成本
Trigger: 工程结束 / 不可售下降 → 重算；真可售变紧且 Pace Ahead 才评涨
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **先换分母**。

| 重算结果 | BAR | 说明 |
| --- | --- | --- |
| A：只是分母小，可售不紧或 Pace 非 Ahead | **Hold**。区间可给心理带（例现行 799 → 779–799 首选 799），**不是**已经降了 | 仿真主枝 |
| A：可售真紧 + Pace Ahead | **P03**：先关低价；未最高才第一刀 +5–8% / +8–15% 或收到最低竞对；已最高只关不涨 | 须把「紧」写进 Situation |
| B：不可售为主 | **Hold**。拒绝 dump | 修工程或接受供给变小 |
| B：真可售厚 + DTA≤3 + 市场不冰 | **P05** 围栏 −3–5%；档 H 才短窗战术 −10–15%；**禁止一夜 −15% 当新 BAR** | 不可售部分仍不砸 |
| C：混口径 MPI | 不当涨、不当砍 | 还原后再走 A 或 B |
| 价已最高 | 只关不涨 | 与 P03 同 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。

### 5.3 Advisor-First

建议用户：工程结束日、分房型不可售截图、Comp 是不是 STAR。顾问不改房态、不点维修、不代报 STR、不自动调价。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出 OOO=0 且口径已声明 | 离开本剧，按原 OCC/剩余进 P03 或 P05 |
| 用户补出不可售实质 | 按新 Remaining 重跑 §4 |
| 工程提前结束，可售突然变厚 | 当天按厚剩余处理；**不要**继续按 92% 涨。DTA 短走 P05 排除表，不自动 −15% |
| 重算后可售 Remaining 紧 + 24h Pickup 仍正 + Pace Ahead | 移交 **P03**（先关低价） |
| 重算后真可售厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先 |
| 发现「没房」是 CTA / 配额 | **P33 / 开库存**；BAR Hold |
| 一型 OOO、其他型厚 | **P13**；不压平其他型 BAR |
| 销售仍要把 BAR 砍到 699 清「40 空」 | **拒绝。** T19/T20；禁一夜 −15% |
| 长期整层关、用户确认将跨 STR Extended Closed | 问官方房量变更（Hypothesis）；今晚仍按可售剩余，不秘密按 20 间 dump |

300 间尺：不因假 92% 发明新幅度。

---

## 7. 如果只能再补 3 个

1. **当日 OOO / 维修 / 自用 / 锁（分房型）+ Physical** — 翻转假高峰 vs 真 P03  
2. **那张 Comp OCC 是 STAR 还是店内互采** — 翻转假 MPI  
3. **重算后 3D Pickup / Pace** — 可售紧了才决定是否 P03；可售厚了才决定是否 P05

缺 1：条件化，不发明 20。  
缺 2：那 8 个点不当 MPI。  
缺 3：默认 **Hold**，不按 92% 涨、不按 40 砸。

---

## 8. Confidence / 边界

分母齐（Physical + Sold + 不可售）→ 方向 **Medium**（不自动涨、不自动砸）。  
缺 OOO 只条件化 = **Low–Medium**。  
STR 短 OOO 不扣报告可用房 = **S**。本店 PMS 扣不扣 = 问用户（NV-OOO-02）。  
中国「维修/停用/锁定」报表字段名、维修间夜常模、Walk 成本、佣金%、点弹性、华住 699 = **NV**，不编。  
Stayntouch OOO/OOS/OOI = **A Vendor，仅该 PMS**，不是中国标准。

仿真：`cases/sim-2026-ooo-occ-92-saturday.md`（**Simulation**，不是真店）。主枝 **Hold 779–799 首选 799**。

---

## 9. 证据（2026-08-23 已核，本轮不重开 6 个月线）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| OCC = Sold / Available；Available = 房量 × 天数 | S | **Known（口径）** | https://www.costar.com/products/str-benchmark/resources/glossary |
| 短于约六个月临时停用/装修 **不得**下调报告可用房；永久撤房改房量；Extended Closed 通常 >六个月须通知 | S | **Known（Historical）** | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （00:17 已打开；本轮不重审） |
| Forward Adjusted Rooms Available：OOO / 翻新 **排除**；为省成本关掉的 OOS **仍计入** | A | **Known，仅 Forward** | https://www.costar.com/products/str-benchmark/resources/guidelines/forward-star-data-reporting-guidelines |
| 临时装修不得调可用房；六个月+ 意图非自主灾害 | A FAQ | **Known 转述，不摘教材** | https://www.hftp.org/downloads/documents/usali/resources/usali_faqs.pdf Rooms Q16 |
| USALI Available 不含季节关、Extended Closed、长期宿舍自用 | A 转述 | **Known 方向** | https://www.hotstats.com/hotel-industry-resources/rooms-department-and-operating-metrics |
| OOO 扣 availability；OOS 不扣；OOI 移出库存 | A Vendor | **仅 Stayntouch** | https://stayntouch.freshdesk.com/support/solutions/articles/24000016624-a-guide-to-out-of-order-ooo-out-of-service-oos-out-of-inventory-ooi-rooms |
| 店内 Remaining 常扣 OOO；好看 PMS OCC 不是涨价令 | B | 动作 Hypothesis | 理论卡；本剧 |
| 中国 PMS 维修/停用/锁定字段名；默认 OOO=20；Walk；佣金%；点弹性；华住 699 | — | **NV** | 禁止编造 |

Failed / 未打开（记搜索词，不编页）：

```
西软 绿云 石基 维修房 停用 锁定 报表字段 官方
中国酒店 OOO 间夜 常模 行业统计
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 02:17 CST | drafted。BACKLOG P37。三形 A 假高峰 / B 假剩余 / C 假 MPI 写进同一本。主卡复用 `dont-price-off-ooo-occ.md`。不编 20 / 中国字段名。 |
| 2026-09-05 08:17 CST | OOS vs OOO deepen evaluated → skip（S05-06 leftover）。§140 OPERA OO/OS 复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + T06。全文 `research-log/2026-09-05-0817-theory-skip-oos-ooo.md`。不开 P88。 |
| 2026-09-05 12:17 CST | R05-12 sources-recap：§142 新开 Protel Air OOO≠OOS + Cloudbeds OOS Blocking + Occupancy Discrepancies（Dashboard 含 OOS vs Adjusted 剔除）。三句 / 399 / 799 **不改**；过程仍本剧 + T06。全文 `research-log/2026-09-05-1217-sources-recap.md`。不开 P88。 |
| 2026-09-06 00:17 CST | DNM / Locked·Unassigned / Waitlist deepen evaluated → skip（S05-22 leftover）。§146 OPERA DNM + Cloudbeds Unassigned + Waitlist 复核加强 Watch，不改三句 / 399 / 799；过程仍本剧 + P13/P63/P43。全文 `research-log/2026-09-06-0017-theory-skip-dnm.md`。不开 P88。 |
| 2026-09-05 10:17 CST | C05-10 OOS vs OOO Simulation drafted（`cases/sim-2026-oos-vs-ooo-sat.md`）。§141 CASE 指针复述 §140。Diagnose 仍本剧 + T06；Hold 779–799 首选 799；拒 399；不发明 699。≠ `sim-2026-ooo-occ-92-saturday.md`（OOO 假 92% 孪生）。T05-08 deepen **已 skip** — 不开新理论卡。不开 P88。全文 `research-log/2026-09-05-1017-oos-vs-ooo-case.md`。 |

---

## 11. 交叉（不改 P01–P36 正文）

- **P03**：真可售紧 + Pace Ahead → 可以 Sellout。假满（维修）先走本剧。  
- **P05**：不可售 leftover 不是 dump 燃料；真可售 last-minute 仍禁一夜 −15%。  
- **P33**：CTA/closed ≠ OOO。  
- **P13**：一型 OOO → 该型 Days-to-Sellout 假短；先扣再谈压缩，不压平其他型。  
- **P36**：假 80 是价；本剧假 8 个点是量。两套假信号不要并成「数据不准所以乱调」。  
- **T19**：OOO ≠ 未售需求。  
- **T20**：不砸品牌底去填不可售房；无地板不发明 699。


---

## 12. 一行（2026-08-24 08:17，不改上文）

缩分母 OCC（本剧 OOO）≠ 膨胀 OCC（钟点同日再卖，`theory/day-use-inventory.md` / P44）。两套好看 OCC，Advise 相反。不要混。

---

## 13. 一行（2026-08-24 18:17，不改上文）

缩分母 OCC（本剧 OOO / 永久 HU）≠ 无关 Comp 占物理房、$0、不进 STR 历史 Sold（`theory/complimentary-house-use.md` / **P47** `complimentary-house-use.md`）。两套好看 OCC，Advise 都是不按脏尺涨 BAR，机制相反。不要混。永久员工公寓 6+ 个月仍本剧，不走 P47。

---

## 14. 一行（2026-08-25 00:17，不改上文）

永久宿舍 / Permanent HU ≠ 过夜政务协议价（**T-Gov** `theory/government-negotiated-rate.md`）。permanent HU ≠ 协议价。6+ 个月出 Available 仍本剧。

---

## 15. 一行（2026-08-25 02:17，不改上文）

永久宿舍 / Permanent HU ≠ 过夜政务协议价（**P48** `government-negotiated-rate.md`）。permanent HU ≠ 协议价。6+ 个月出 Available 仍本剧。

---

## 16. 一行（2026-08-27 14:17，不改上文）

物理离线 / OOO 缩分母（本剧）≠ 房还在库存但 **Dirty/人手翻不过来**（**P63** `staff-capacity-constraint.md`）。维修走本剧；做不完房走 P63 收口到达 + Hold BAR，不要 dump。Dirty ≠ OOO（OPERA HK Board）。

---

## 交叉（2026-08-27 16:17，不改上文）

物理 OOO（本剧）≠ 人手/保洁吞吐顶。Diagnose「为什么做不完 ≠ 弱需求」→ **T-Staff** `../theory/staff-capacity-vs-demand.md`；过程仍 **P63**。Dirty ≠ OOO。
> 交叉指针（2026-08-28 18:17，不改正文）：装修/软重开「因为施工所以 dump」走 **P70** `advisor-playbooks/soft-renovation-phased-reopen.md` · `dont-dump-bar-for-renovation.md`。不写 P71。


## 18. 一行（2026-09-03 00:17，不改上文）

组合套房 / Component 扣减 / Accessible 旗「池空了所以砍公开」≠ 本剧 OOO 缩分母。Diagnose 库存层 vs 公开 → **T-Component** `../theory/component-suite-inventory-vs-bar.md`；过程仍 **P13 + P37**。三句 / 399 / 799 **不改**。不开 P88。

> 指针（2026-09-03 02:17 C03-02，不改正文）：Component Suite Simulation 已开 → `cases/sim-2026-component-suite-sat.md`（C03-02）；Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。三句 / 399 / 799 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 04:17 R03-04，不改正文）：§122 新开 protel Virtual Room Types + Clock Virtual Rooms。Component 扣减 ≠ 本剧 OOO 缩分母；Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。三句 / 399 / 799 **不改**。不开 P88。不开 P89。
> 指针（2026-09-05 10:17 C05-10，不改正文三句 / 399 / 799）：§141 CASE 指针复述 §140。专拍 `cases/sim-2026-oos-vs-ooo-sat.md`（OOS≠OOO 混算改尺）；孪生 OOO 假 92% 仍 `cases/sim-2026-ooo-occ-92-saturday.md`。Diagnose 仍 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-08 deepen **已 skip**。不开 P88。不开 P89。
> 指针（2026-09-05 12:17 R05-12，不改正文三句 / 399 / 799）：§142 新开 Protel Air OOO≠OOS + Cloudbeds OOS Blocking + Occupancy Discrepancies（Dashboard 含 OOS vs Adjusted 剔除）。Diagnose 仍 **P37**（+ **T06**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-08 deepen **已 skip**；C05-10 专拍仍 `cases/sim-2026-oos-vs-ooo-sat.md`。不开 P88。不开 P89。

> 指针（2026-09-06 00:17 T06-00，不改正文三句 / 399 / 799）：DNM / Locked·Unassigned / Waitlist deepen **theory-skip**（§146 复核）。换房锁/分房摩擦/候补未确认 ≠ 公开 BAR；Diagnose 仍 **P37**（+ **P13/P63/P43**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。

> 指针（2026-09-06 02:17 C06-02，不改正文三句 / 399 / 799）：§147 CASE 指针复述 §146。专拍 `cases/sim-2026-dnm-locked-waitlist-misread-sat.md`（DNM/Locked·Unassigned/Waitlist 误读改尺）；Diagnose 仍 **P37**（+ **P13/P63/P43**）；Hold 779–799 首选 799；拒 399；不发明 699。T06-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-06 04:17 R06-04，不改正文三句 / 399 / 799）：§148 新开 HotelKey Do Not Move + Stayntouch Do Not Move + Clock Disable room change；Protel Lock / Clock Waiting List 登记。Diagnose 仍 **P37**（+ **P13/P63/P43**）；Hold 779–799 首选 799；拒 399；不发明 699。T06-00 deepen **已 skip**；C06-02 专拍仍 `cases/sim-2026-dnm-locked-waitlist-misread-sat.md`。不开 P88。不开 P89。

> 指针（2026-09-06 08:17 T06-08，不改正文）：Queue / Pending / Rush deepen **theory-skip**（§149）。邻覆盖；主闸仍 **P63+P67**（±本剧/P43）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。全文 `research-log/2026-09-06-0817-theory-skip-queue.md`。

> 指针（2026-09-14 16:17 T14-16，不改正文三句 / 399 / 799）：House Count / Room Assignment deepen **theory-skip**（§160 复核）。expected OCC / 预分房 Hold·DNM ≠ 公开 BAR；分母误读仍走本剧邻闸。Diagnose 仍 **P37**（± **P45/P08/P53**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-14-1617-theory-skip-house-count.md`。

> 指针（2026-09-14 18:17 C14-18，不改正文三句 / 399 / 799）：House Count / Assignment misread sim drafted（§161）。expected OCC / 预分房 Hold·DNM ≠ 公开 BAR；分母误读仍走本剧邻闸。Diagnose 仍 **P37**（± **P45/P08/P53**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `cases/sim-2026-house-count-assignment-nopost-misread-sat.md`。

> 指针（2026-09-14 20:17 R14-20，不改正文三句 / 399 / 799）：§162 Clock Room Allocation / Stayntouch Restrict Post = 分房/过账互补源；expected OCC / 预分房 ≠ 公开 BAR。Diagnose 仍 **P37**（± **P45/P08/P53**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-14-2017-sources-recap.md`。
