# Total Revenue Management｜客房 RM ≠ 全店利润 RM

> 资产：T18 理论卡  
> 路径：`theory/total-revenue-management.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-22  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR 指标定义）；A（Kimes 2017 目录级；HSMAI CRME TOC 章名；CoStar TRevPAR 文）；B（与 P10 置换同一决策链）  
> 配套：`metrics/trevpar.md` · `metrics/trevpor.md` · `metrics/goppar.md` · `group/group-displacement.md` · `recommendations/accept-low-room-for-fnb.md` · `recommendations/accept-reject-group.md` · P10  
> 问题树：O12；§33  
> 禁止：编造餐标/F&B 毛利/变动成本/佣金%/Walk 成本；用 TRevPAR/GOPPAR 当晚改 BAR；无数字用「餐很高」推翻客房置换；写 P30 婚宴剧本；摘 Kimes 2017 / HSMAI 指南正文。

---

## 0. 一句话

**客房卖贵 ≠ 酒店赚到。** 客房 RM 优化的是约束下的房费贡献；全店 RM（TRM / Total Hotel Revenue Optimization）还要算餐饮、会议、功能空间和其他部门的**贡献**。  
「这个团 500 房费但餐标很高」**不是**决策。决策是：客房置换机会成本 vs **用户给出的** F&B/会议贡献。没有贡献数字，客房-only 的 Reject / Counter **不被推翻**。

```
Naive（禁止）     餐很高 → 为了餐饮把房卖掉
Rooms-only        按日 Displaced × Transient Net → Accept / Reject / Counter
TRM（本卡）        客房 NetDelta + 用户提供的 F&B/会议贡献
                  → 仅当贡献 > 客房置换、且非高峰可卖满，才允许翻客房-only Reject
```

完成标准：用户说「要不要为了餐饮把房卖掉」，能先走 P10 置换，再问 3 个数；无餐饮贡献 → 不 Accept。

---

## 1. 两套目标（不要混）

| | 客房 RM | 全店 / 利润 RM（T18 / T19 边界） |
| --- | --- | --- |
| 优化对象 | 易逝客房库存 | 客房 + F&B + 会议 + 功能空间 + 其他部门 |
| 常用尺 | OCC / ADR / RevPAR；bid price；按日置换 | TRevPAR / TrevPOR（结构）；GOPPAR（利润）；部门贡献 |
| 今晚能干什么 | 涨/关低价、接/拒/还价团、限制 | **不能**单独定今晚 BAR。可翻一笔团的客房-only 结论，**前提是有贡献数字** |
| 常见错 | 只比 500 vs 800 | 用「全店视角」当借口 dump 高峰客房 |

Kimes 2017 *The Future of Hotel Revenue Management*（CHR 17(1)；**A，目录级，不摘正文**；source-map 已开 vtechworks 镜像）：Total RM 是未来方向，实施仍早期；2010「GOPPAR 将取代 RevPAR」**判定不准**——GOPPAR **没有**取代 RevPAR。本库沿用：GOPPAR / TRevPAR 看结构和 P&L，**不替代当晚 BAR**。

HSMAI CRME 学习指南 TOC（*Evolving Dynamics* 4e，**A，只引用章名，不摘正文**）：Chapter 11 *Rooms-Only to Total Hotel Revenue Optimization*（含 Meetings & Events / F&B / Function Space 等小节名）。认证把「从只做客房到全店优化」列为独立章，不提供本店毛利。

CoStar TRevPAR 文（A，2020-01-07，2026-08-22 复核）：RevPAR 只含 Room Revenue；TRevPAR 含各部门 + miscellaneous。RevPAR 更高的店，TRevPAR 可以更低（其他部门反向）。**不含费用** → 不是利润。

---

## 2. 何时 TRM 可以推翻客房-only Reject

先做 P10 / 置换草表。客房-only 已经 Accept（高峰夜 Displaced≈0 或客房 NetDelta≥0）→ **不必**用 TRM 再翻；F&B 是加项。

只有客房-only 为 **Reject 或偏负的 Counter**，才进入本卡翻盘条件。须**同时**接近：

1. **用户提供** F&B / 会议**贡献**（不是口号「餐很高」）。允许：用户自己的贡献额，或用户**明确认领**的保守估计（例：「按我们店宴会，这桌至少贡献 __」）。顾问**不**代编毛利率。  
2. `F&B_contrib + Meeting_contrib` **大于** 客房机会成本（置换卡 §3.2 RoomOppCost + 已声明 LOS 肩日）。高峰夜单独拆，禁止用整段餐把亏的周六藏进去。  
3. 功能空间若另有更高价宴会/会议线索，要减 Meeting 机会成本（NV-GRP-04：无线索则当 0 并声明）。  
4. 不是第 3 节的「必须不要」情形。  
5. 仍优先 **Counter**（抬客房价 / 缩高峰房量 / 留宴会），不是默认 Accept 原价原房量。

```
客房-only NetDelta_rooms   = GroupRoomNet_adj − RoomOppCost − LOS_extra
TRM NetDelta              = NetDelta_rooms + F&B_contrib + Meeting_contrib − Meeting_opp
                            − 用户已声明的增量客房变动成本（无则 Unknown，不编）
```

贡献未知时 **F&B 不进点结论**（置换卡 §3.5 已写）。本卡把它升级为硬规则：无贡献数字 → **不得**用 TRM 把 Reject 改成 Accept。

---

## 3. 何时必须不要（TRM 翻盘关闭）

任一条成立，**禁止**用餐饮理由把客房卖掉：

| 关闭条件 | 为什么 | 仍可做什么 |
| --- | --- | --- |
| **高峰客房能卖满散客**（Pace Ahead / Fast Pickup / Sellout Risk / Early Sellout） | 机会成本 ≈ 将被挤的 BAR/Transient Net，不是 0 | **Counter**：抬团房价或缩高峰房量；宴会可留 |
| **没有 F&B/会议贡献数字** | 「餐很高」不是贡献 | 问 3 个数；客房走 P10 Counter/Reject |
| **会打穿高 BAR / 泄漏** | 低团价外传到公开渠道，后面散客全被拉下来 | Reject 或净价+禁售；不靠餐补泄漏 |
| **OTB 是天气/取消潮 Soft**（P28） | Remaining 被取消虚高，不是真有空房可 dump | OTB 当 Soft；不涨进取消潮，也不为未知餐 dump 房 |
| 只有 TRevPAR / GOPPAR 月报好看 | 那些尺不回答今晚这间该卖给谁 | 当晚仍 RevPAR / Pace / 置换 |

高峰夜单独客房明显为负、团不接受加价或减房 → 即使有餐，也先 Counter 客房；餐不能自动买走高峰库存。

---

## 4. TRevPAR / TrevPOR / GOPPAR：战略与 P&L，不是今晚 BAR

| 指标 | 公式（STR，S） | 回答 | 不回答 |
| --- | --- | --- | --- |
| **RevPAR** | Room Revenue / Available | 客房效率；今晚定价中枢之一 | 餐饮、利润 |
| **TRevPAR** | Total Revenue / Available | 全店收入摊到可供房；结构/对标 | 费用；今晚 BAR |
| **TrevPOR** | Total Revenue / Rooms Sold | 每间已售房带走多少全店收入（含 ancillary） | 空房机会成本；今晚 BAR |
| **GOPPAR** | GOP / Available | 可控经营利润效率 | 当晚涨 5% 还是 8% |

恒等（同一 Total Revenue、同一 Sold、同一 Available）：`TRevPAR = OCC × TrevPOR`。与 `RevPAR = OCC × ADR` 同构。TrevPOR 高而 OCC 低 = 少数人花得多，资产仍可能空。

顾问用法：

- 月/季：「房收一般但全店不差」→ 拆 TRevPAR 结构（CoStar：其他部门可翻转 RevPAR 排名）。  
- 团询：「低房价高会议」→ **这笔**的贡献 vs 置换，不是店均 TRevPAR。  
- 今晚 BAR → 仍 OTB / Pickup / Pace / RevPAR。禁止「TRevPAR 要冲所以降 BAR」或「GOPPAR 将取代 RevPAR 所以今晚按 GOP 调价」。

GOPPAR 1.5–2.0× RevPAR %Δ 仍是 CoStar **A 观察**（`goppar.md`），不是定律，更不是调价公式。

---

## 5. 功能空间是稀缺库存（Hypothesis / A）

| 论断 | 级 | 说明 |
| --- | --- | --- |
| 功能空间与客房一样：固定容量、时点易逝、未售出时段贡献为 0 | **Hypothesis** | 结构类比，非 STR 公式 |
| 非客房 RM 最常被点名的对象是功能空间 | **A** | Kimes 2017 目录级（source-map）；不摘调查百分比 |
| 协会把 Function Space Optimization 列为全店优化小节 | **A** | HSMAI CRME TOC Ch.11 章名；不摘步骤 |

顾问含义：会议室/宴会厅不是「送了就算了」。白送空间要问有没有另售线索（NV-GRP-04）。有另售 → 记 Meeting 机会成本。无线索 → 记 0 并声明，**不要**用行业宴会坪效编一个数。

本阶段 **不**写功能空间定价表、不写 P30 婚宴。客房决策仍先置换。

---

## 6. 禁止

1. 用 TRM / 「全店收益」当理由，在**没有贡献数字**时 dump 客房。  
2. 编造 F&B 毛利、餐标、变动成本、佣金%、Walk 成本。  
3. 用店均 TRevPAR / GOPPAR 替代这笔团的按日 NetDelta。  
4. 高峰能卖满散客时，用餐饮把尾部 20–30% 整块给低价团（与 P03/P04/P10 留尾冲突）。  
5. 把 GOPPAR 写成已取代 RevPAR（Kimes 2017 已判 2010 预测不准）。

---

## 7. 调用句式

```
用户：这个团 500，餐标很高，要不要为了餐饮把房卖掉？
顾问：先按日算会挤掉哪夜散客（P10）。餐很高不是贡献。
      没有 F&B/会议贡献数字 → 不能推翻客房置换；输出 Counter/Reject，要 3 个数。
      高峰能卖满 → 即使有餐也 Counter 客房价或缩房量，宴会可留。
      TRevPAR/GOPPAR 看结构，不改今晚 BAR。
```

主动词仍是 **Accept / Reject / Counter**。TRM 只改变**是否允许用餐饮翻客房-only Reject**，不另起一套动词。

---

## 8. 与已有启发式兼容

- **P10 / 置换**：永远先算 Displaced。TRM 是 §3.5 的启用条件，不是替代。优先 Counter。  
- **Peak / P03 / P04**：不因未知 F&B dump 房。  
- **P28**：取消潮 OTB=Soft，Remaining 不是可 dump 库存。  
- **优化卡**：客房机会成本仍是 bid price 口语；餐饮贡献是**另一笔现金**，要用户给。  
- **弹性 / 幅度卡**：不负责这笔团。  
- **T19**：变动成本、Flow-through 仍 NV；有用户声明的增量成本才减，不编。  
- **P30**：仍 `not_started`。婚宴走本卡的团询骨架 + 无数字不翻盘；不写专篇。

---

## 9. 证据（2026-08-22 核）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| TrevPOR = Total Revenue / Rooms Sold | S | CoStar STR Glossary | https://www.costar.com/products/str-benchmark/resources/glossary |
| TRevPAR = Total Revenue / Available；Total Revenue 含客房+F&B+其他+杂项 | S | 同上 | 同上 |
| GOPPAR = GOP / Available | S | 同上 | 同上 |
| RevPAR 高的店 TRevPAR 可以更低；TRevPAR 不含费用 | A | CoStar *What is TRevPAR* (2020-01-07) | https://www.costar.com/products/str-benchmark/resources/data-insights-blog/what-trevpar-and-why-it-important |
| 章名 Total Hotel Revenue Optimization | A 章名 | HSMAI CRME TOC 4e Ch.11 | https://academy.hsmai.org/wp-content/uploads/sites/11/2024/09/2021-toc-for-crme-study-guide.pdf |
| Total RM 为未来方向、实施早期；功能空间为主要非客房 RM 对象；GOPPAR 未取代 RevPAR | A 目录级 | Kimes 2017 CHR 17(1)；source-map 已开，**本轮不重摘正文** | vtechworks 镜像见 source-map |
| 无贡献数字不得翻客房-only Reject | B / Hypothesis | 本库置换卡 §3.5 升级 | — |
| 本店餐贡献率 / 变动成本 | — | 无公开官方值 | Need Verification；用用户数 |

未采用：Xotels/Dataria 厂商词条当 STR；Investopedia RevPOR 与 STR TrevPOR 命名不完全等同，不升 S。未摘 HSMAI 指南正文、未摘 Kimes 调查百分比。

---

## 10. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-TRM-01 | 本店 F&B/宴会贡献（收入−变动成本） | 用户给贡献；只给餐标收入则只报收入、不报利润，不翻 Accept |
| NV-TRM-02 | 每间夜客房变动成本 | 不编。用户声明才减；否则 Unknown |
| NV-TRM-03 | 功能空间另售机会成本 | 同 NV-GRP-04：无线索当 0 并声明 |
| NV-TRM-04 | 用户 PMS「全店收入」含税/服务费/业主餐厅 | 同 NV-TR-01；对标 STR 前先问 |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 | T18 首版。客房 RM ≠ 全店利润 RM。无数字不翻盘。不写 P30。 |

---

## 12. 交叉（2026-08-22 02:17）

P30 婚宴剧本已 drafted：`advisor-playbooks/wedding-banquet-group.md` · `recommendations/counter-wedding-room-block.md`。

本卡仍是 TRM 闸（无贡献不翻盘；高峰能卖满仍 Counter 客房）。婚宴专有规则（周六默认闸、婚房/家长房 must-keep、不关散客、肩日分刀）走 P30，不把本卡改成婚宴专篇。

上条「P30：仍 not_started / 本阶段不写 P30」作废于剧本层；理论闸不改。

---

## 13. 复盘指针（2026-08-22 04:17）

来源与复盘：`research-log/2026-08-22-0417-sources-recap.md`。**无 needs_revision。**

序列（与 P10 / P30 兼容，不改正文）：无 F&B 贡献 → 不 Accept 低价房块；高峰能卖满 → 即使有贡献仍 Counter 客房；肩日 Displaced≈0 可 Accept。套餐含厅贡献只进一次（STR P&L：厅租/AV 记 Other F&B）。TRevPAR/GOPPAR 仍 ≠ 今晚 BAR。P28 Soft OTB ≠ 婚宴真高峰 OTB。

---

## 14. T19 分界（2026-08-22 08:17，不重写 T18）

T18 = 客房置换 vs 用户 F&B/会议贡献。T19 = 间夜贡献（净价 − 变动成本）与「宁可不卖」。不在本卡编布草表。499 零售穿底走 `do-not-sell-below-contribution.md`，不走餐饮翻盘。

## 15. T20 分界（2026-08-22 16:17，不重写 T18）

T20 = 战略层：Budget ≠ Forecast、价格带/品牌底、Cluster 权责。季看 GOP/TRevPAR；**今晚仍 BAR + 贡献**。预算差不是用「全店视角」dump 客房。无 F&B 贡献仍不 Accept 低价团。
