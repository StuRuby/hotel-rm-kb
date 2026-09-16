# Optimization Advise｜Bid Price / EMSR / Protection Level（顾问含义）

> 资产：Wave7 理论卡  
> 路径：`theory/optimization-advise.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-20  
> 知识类型：Theory（书目级）→ Decision  
> 证据等级：S（书目/论文书目页）；公式不摘教材正文  
> 配套：`group/group-displacement.md` · `inventory/inventory-control.md` · `overbooking/overbooking-framework.md`  
> 问题树：O12 Group · §5/§8 Sellout · O10 LOS  
> 禁止：实现 EMSR/bid-price 算法；伪造保护水平间夜；摘 Talluri/Phillips 正文；把 RMS 黑盒输出当 Fact。

---

## 0. 一句话

优化理论要回答的顾问问题是：**这一间今晚（或这几晚）再卖给低价需求，值不值？**  
不要求算 EMSR。要求能解释「为什么这晚不该再接 500 的团」。

```
Naive          还有空房 → 接 500
Advisor        这间的机会成本（还能卖给谁、什么价）≥ 500 → 拒或 Counter
Theory 名      Bid price / 期望边际收入 / Protection level
```

本阶段 **Advise**：用机会成本语言做 Accept / Reject / Counter / 关低价。不写代码、不给伪精确「最优保护 17.3 间」。

---

## 1. 三个词（顾问词典）

| 词 | 顾问含义 | 不是 |
| --- | --- | --- |
| **Bid price**（出价/门槛价） | **这一间夜的机会成本**。请求的净收入 ≥ 所用各夜 bid price 之和 → 才考虑接 | 不是客人出的价；不是 BAR 口号；不是竞对价 |
| **EMSR**（Expected Marginal Seat Revenue） | 再留一间给更高价需求，**期望**能多收多少。低价确定收入 vs 高价期望收入 | 不是「必须实现的航空公式」；酒店顾问用其逻辑 |
| **Protection level** | 为更高价值需求**留下**的容量（间夜或嵌套限额） | 不是「永远留 25%」的迷信；20–30% 尾部是本库 Hypothesis，不是 EMSR 输出 |

书目级（不摘正文）：

| 源 | 能映射的章/主题（公开目录或书目页） | 状态 |
| --- | --- | --- |
| Talluri & van Ryzin, *The Theory and Practice of Revenue Management*, Springer 2004, ISBN 978-1-4020-7701-2 | Quantity-Based RM：Single-Resource Capacity Control；Network Capacity Control；Overbooking。DOI 10.1007/b139000 | 书目 **打开**（2026-08-20）；**未精读，不引页码** |
| Phillips, *Pricing and Revenue Optimization*, 2e, SUP 2021, ISBN 9781503610002 | 公开 TOC：Ch.7 Constrained Supply（opportunity cost）；Ch.8 RM；**Ch.9 Capacity Allocation（点名 EMSR）**；**Ch.10 Network Management（点名 bid pricing；多晚酒店为网络例）** | TOC **打开**（2026-08-20）；**不摘正文** |
| Littlewood (1972/2005 reprint), *J. Revenue Pricing Manag.* | 两舱：低价确定收入 vs 高价期望 | 文摘页 Known（source-map） |
| Belobaba (1989), *Operations Research* 37(2) | EMSR；嵌套保护 | DOI Known；全文未打开 |
| Talluri & van Ryzin (1998), *Management Science* 44(11) | 网络 bid-price 控制；证明一般不必最优、大容量渐近 | DOI Known；不摘 |

https://link.springer.com/book/10.1007/b139000  
https://www.sup.org/books/business/pricing-and-revenue-optimization/excerpt/table-contents  

2004 教材 **不是** 2026 RMS 产品说明。

---

## 2. Theory → Decision

### 2.1 为什么这晚不该再接 500 的团

把「500 vs 800」换成机会成本（与置换卡同一方向，这里给理论名）：

```
这一夜还剩 x 间。
若拒这个 500，这些间预期还能以更高净价卖掉的概率 × 更高净价
= 这一夜的机会成本 ≈ bid price（顾问口语）

IF 500 < 该夜机会成本
THEN 这一夜不该按 500 再卖 → Reject 或 Counter（加价 / 减房 / 改到肩日 / 要求连住）
IF 500 ≥ 机会成本 且 不泄漏、取消有截止
THEN 可 Accept（淡夜空房，500 是确定收入）
```

**必须按夜拆。** 周五不挤、周六大挤时，整段平均会把亏的一夜藏进去（置换卡已写）。  
Phillips 公开 TOC 把**多晚酒店**放在 Network Management：一笔连住消耗**多个资源**（多个 Stay Date）。顾问口诀：

```
多晚请求的门槛 ≈ 各夜 bid price 之和
团只要高峰一晚 @500，却挡了「高峰+肩日」散客
  → 还要加 LOS 肩日置换（不是 0）
```

无 Forecast 时不要装 EMSR。用：

1. 冲突日 Transient OTB + 曲线剩余 Pickup 或经验最终 OCC（Hypothesis）  
2. 当前将被挤的那一层净价（BAR 或 OTA 净）  
3. Days-to-Sellout vs DTA（已经 Fast → 机会成本高）

这就是 P10 草表。优化理论给它**名字**，不另给一套数。

### 2.2 关低价 = 保护水平的顾问实现

EMSR / 嵌套控制的顾问翻译：

```
低价舱（预付、大促、批发、500 的团）能卖的上限
= 总容量 − 留给更高价需求的保护
```

本库已有、不要另起口径：

| 已有启发式 | 对应理论口语 |
| --- | --- |
| Sellout 先关低价 | 把低价舱的 booking limit 收到 0 或很小 |
| 价已最高只关不涨 | 价已经在最高舱，再做的是限额不是再涨 |
| 留尾 20–30%（Hypothesis） | 粗糙 protection，**不是**算出来的 y* |
| 高峰拒打穿地板的 OTA 大促 | 低价舱在高峰夜关闭 |
| 无取消史不给超售精确间夜 | 超售是另一章（Phillips Ch.11 / Talluri Overbooking）；缺分布不报点 |

**禁止**把 20–30% 写成 EMSR 结果。缺本店高价需求分布时，保护水平对外只给方向：压缩日不要把剩余整块给低价层。

### 2.3 什么时候 500 该接

理论同样允许接低价：

- 该夜 Expected Transient 填不满（Displaced=0）→ 机会成本≈0（或只有变动成本）  
- 市场也弱、曲线后置、价已 ≤ 竞对 → 不砸 BAR，但**空房上的确定团**可以接（仍看净价与泄漏）  
- 肩日空、团愿意连住或加餐把整段 NetDelta 拉正 → Counter 后 Accept

「有空房就必须接」和「团价 < BAR 就必须拒」都错。

---

## 3. 顾问能说的 / 不能说的

| 能说 | 不能说 |
| --- | --- |
| 「周三夜按当前速度会在入住前卖完，再接 50×500 是在卖低于机会成本的库存」 | 「EMSR 算出来应保护 37 间」 |
| 「这晚门槛应靠近将被挤的散客净价（例如 BAR 800 的净）」 | 精确增收 ¥12,480 |
| 「多晚团的门槛是各夜门槛之和，所以只要周六的团可能仍挡周五连住」 | 实现动态规划 / 嵌套代码 |
| 「RMS 若吐出 bid price，把它当**信号**，仍要过 Pace/置换草表」 | 「G3/Duetto 内部就是 EMSR-b」（厂商方法 Unknown） |

---

## 4. 调用句式

```
用户：这晚空着，团 500，接吗？
顾问：先问会挤掉哪一夜、那一夜散客还能不能来、来的净价是多少。
      500 < 那一夜机会成本 → 不该再接 500；输出 Counter。
      理论名：bid price / protection；计算走置换草表，不走伪算法。
```

团询主动词仍是 **Accept / Reject / Counter**（过程文件 / P10）。  
促销：店出大促价若 < 该夜门槛 → 不报，关 Rate Plan（P18）。

---

## 5. 与已有启发式兼容

- 团询 Counter：本卡解释 WHY，数字仍用置换卡 §5.3（保本 ≈ 置换成本/间；70–85% BAR 仅讨论锚）。  
- Fast Pickup / Early Sellout：机会成本上升 → 默认减房或加价，不按淡日接。  
- MinLOS=2：高峰单晚低价团在挡网络资源（Peak+Shoulder）。  
- 不一夜 −15%：结构价不被单笔低价舱砸穿。  
- 不操作系统；不伪造精确增收。

---

## 6. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-OPT-01 | 本店高价需求分布（做真 EMSR 的输入） | 不用；用 OTB+曲线+BAR |
| NV-OPT-02 | 中国店 RMS 是否输出 bid price | 有则当信号；无则口语门槛 |
| NV-OPT-03 | Littlewood 公式在酒店单晚的校准 | 只作逻辑，不报点 |

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。书目级。解释「为什么不接 500」。不实现算法。 |

---

## 8. 交叉（2026-08-21 16:17）

**机会成本 ≠ 价格弹性。** 本卡回答「这间该不该再卖给低价需求」；价动后量有没有赚回 → `pricing/price-elasticity-advise.md`。二者不要互相替代。

---

## 9. 交叉（2026-08-22 08:17）

两道门：bid price / 机会成本（本卡）**和** 贡献底（T19）。机会成本≈0 时低价可接，**仍须**净价 > 用户变动成本。空房成本 = 贡献，不是 Walk×2。`theory/profit-contribution.md`。

---

## 10. 交叉（2026-08-31 06:17）

bid price = 机会成本语言，不是 BAR 口号、不是 RMS 按钮（本卡）。「不要把公开 BAR 改写成 hurdle / LRV」过程走 **P85** `advisor-playbooks/hurdle-bid-lrv-vs-bar.md`。不重写本卡正文。不写 P86。

> 交叉指针（2026-08-31 08:17，不改正文）：本卡仍是 bid price = 机会成本 Accept/Reject 语言（**不重写**）。「gate ≠ public BAR」Diagnose 走 **T-Hurdle** `theory/hurdle-bid-lrv-vs-bar.md`，过程仍 **P85**。不写 P86。
