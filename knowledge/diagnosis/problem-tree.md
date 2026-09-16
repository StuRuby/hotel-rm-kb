# Revenue Problem Tree｜收益问题诊断树

> 文件：`diagnosis/problem-tree.md`
> 日期：2026-08-20
> Last Verified：2026-08-20
> 用途：用户丢来一个现象时，先落枝、先排除、再谈动作。
> 配套：`metrics/metric-tree.md`；动作细节等未来 `advisor-playbooks/`。
> 成功标准：听到「入住率低」时，沿本树提问，而不是直接建议降价。

## 0. 用法

1. 把用户的话映射到下面一枝（可同时挂两枝，如 OCC Low + Pace Behind）。
2. **先做该枝的「先排除」**。排除项没过，不允许给出涨/降价处方。
3. 要 3–7 个数。用户给不齐就用已有信息做**条件化判断**，并点名「如果只能再补 3 个，补这 3 个」。
4. 根因分：已确认 / 高概率 / 假设 / 缺口。
5. 动作类型只能是：`定价` `库存` `限制` `渠道` `产品/运营` `预测修正` `什么都不动`。当前阶段不操作 PMS。
6. 转到未来 playbook 只写名字，剧本未建成时不要假装已有步骤。

**总原则（任务书三十二节）**

```
现象 ≠ 原因 ≠ 动作
OCC 低 ≠ 需求低 ≠ 降价
```

---

## 1. OCC Low 鉴别树（任务书三十二节，必读）

用户说「入住率低 / 空房多 / 卖不动」时，**整棵从这里进**。不要跳到 Price Too High。

```
OCC 低
│
├─ 0. 口径是否假低？
│     Available 是否含大量 OOO / 是否用错分母 / 是否拿 OTB 当最终 OCC
│     是 → 先修数，不调价
│
├─ 1. DTA 是否还长？
│     是 → 这条日期的历史后半段还会走多少？进入 Pace，而不是看绝对 OCC
│     否（DTA 很短）→ 加重 Last-Minute Unsold / 当晚策略
│
├─ 2. Pace 真的落后吗？
│     同 DTA 的 STLY / 历史曲线 / Budget / Forecast
│     不落后 → 可能什么都不动（曲线本来就晚）
│     落后 → 继续
│
├─ 3. Historical Curve 是什么形状？
│     商务店最后 7 天冲高 vs 度假店 30 天前就铺满
│     用错曲线 → 假落后
│
├─ 4. Demand 是否真低？
│     市场 / Comp Set OCC 或 Forward OTB、搜索、交通、天气
│     市场也低 → 本店降价抢存量，弹性可能很差
│     市场不低、只有本店低 → 份额问题，不是「没人出门」
│
├─ 5. Price 是否真高？
│     本店 BAR vs 竞对可订价、转化、取消后再订
│     不高 → 禁止降价；查分销/库存/产品
│
├─ 6. Distribution 是否正常？
│     渠道开着吗、配额>0、价格同步、排名/活动、直销可订
│     不正常 → 先修渠道，降价会被同步成更亏
│
├─ 7. Inventory 是否开放？
│     房型/渠道/日期是否误关、限制是否过严（MinLOS/CTA）
│     没开 → 开库存或放松限制，不降价
│
├─ 8. Competitor 如何？
│     竞对价、是否满房、是否在打价格战、Comp Set 是否仍有效
│
├─ 9. Event 是否存在（或刚消失）？
│     有事件却低 → 价/库存/曝光没接上
│     事件取消/错期 → 不该按事件价卖
│
├─ 10. Product 是否有问题？
│     装修、差评、停水停电、周边施工、品牌掉档
│     是 → 降价是止血不是策略，先披露与预期管理
│
└─ 11. Forecast 是否错了？
      「低」只是相对一个过高的 Budget/Forecast
      是 → 先改预期，再决定要不要为错误目标牺牲 ADR
```

### 1.A 先排除（OCC Low）

按顺序挡掉这些，再谈降价：

1. 口径 / OOO / 拿远期 OTB 当危机。
2. DTA 仍处在该店历史「尚未启动」的区段。
3. 库存或限制把需求挡在门外。
4. 渠道不可订或价量不同步。
5. 市场整体同样低（降价只是转移份额，弹性未知）。
6. 产品/口碑事故。
7. 比较基准（Budget）本身不现实。

以上任一条成立且价格并非显著高于可订竞对：**默认不降价**。

### 1.B 要看的数据（3–7，按优先级）

最小 3 个：`Stay Date + DTA`，`OTB OCC/ADR`，`同 DTA 的 STLY 或曲线`。

补齐到 7：`Pickup 1D+7D`，`Remaining / 开关状态`，`BAR vs 竞对可订价`，`市场或 Comp 信号`。

再有余力：取消率、渠道拆分、房型 OCC、事件日历。

### 1.C 可能根因

| 类 | 例子 |
| --- | --- |
| 假问题 | 分母、DTA、错误 Forecast |
| 供给/分销 | 误关、配额 0、限制过严、价不同步 |
| 价格 | 高于市场且转化差 |
| 需求 | 城市需求弱、事件空窗、天气 |
| 份额 | 产品、口碑、品牌、曝光 |
| 组合 | 团队没来、协议没释放、被另一家店吸走 |

### 1.D 动作类型

- `什么都不动`：Pace 不落后或 DTA 还长且曲线匹配。
- `库存`：误关、配额、房型开放。
- `限制`：过严的 MinLOS/CTA 在淡日。
- `渠道`：修复同步、打开必要渠道，而不是先砍价。
- `定价`：仅当「份额差 + 价明显高于可订竞对 + Pickup 低于曲线 + 库存确实开着」。即使此时，也给区间，不给「适当降一点」。
- `产品/运营`：事故期降预期、修点评，不把它当 RM 胜利。

### 1.E 转到

`advisor-playbooks/low-demand-day.md`（P02 drafted）· `do-not-cut-price-market-also-weak.md` · `decrease-bar-true-weak-demand.md` · Weak Weekday · Slow Pickup · Price War · Forecast Miss · Last Minute Unsold；若其实是价高：`Price Too High` 枝。

---

## 2. ADR Low

**现象**：已发生或 OTB ADR 低于 STLY / Budget / Comp / 自身结构应有水平。

### 先排除

1. 口径：含税、包价未拆、免费房进了分母、STR 净额 vs 店内毛额。
2. 组合：低价房型占比被动升高（高价房关了或 OOO）。
3. 一次性能源：一个大低价团、一个渠道事故价。
4. OCC 健康且 RevPAR 达标：可能是正确的用量换价，不是「ADR 病」。

### 要看的数据

OTB/实际 ADR 与结构（房型、细分、渠道、Rate Plan）；OCC 与 RevPAR；ARI；最低价成交占比；是否有未授权折扣。

### 可能根因

过早打开最低 BAR；批发/OTA 占比过高；房型差倒挂；团队价过低；促销未设日期墙；高价库存被限制锁死。

### 动作类型

- `定价`：收回最低价、拉开房型差、关促销码。
- `库存`：把高价房型重新开放。
- `渠道`：限制批发配额。
- `什么都不动`：RevPAR/GOP 更好，ADR 低是组合选择。
- 不推荐：为了刷 ADR 把 OCC 打到 RevPAR 更差。

### 转到

`Price Too Low` `Channel Mix Problem` `Room Type Imbalance` `Group Evaluation`。

---

## 3. RevPAR Low

**现象**：客房收入效率低于目标或 Comp（RGI<100 或 vs Budget）。

### 先排除

1. 拆腿：是 OCC 腿、ADR 腿，还是双腿。**禁止**未拆就降价。
2. 分母：OOO / 房量变化。
3. 市场：市场 RevPAR 也掉（份额可能仍在）。
4. 口径：渠道 RevPAR 当全店。

### 要看的数据

OCC、ADR、RevPAR；MPI/ARI/RGI；Pace；Net ADR（若谈利润）。

### 可能根因

OCC Low 各因；ADR Low 各因；双低 = 需求或份额；一高一低 = 策略取舍过度。

### 动作类型

跟较弱的那条腿走对应枝。双低且市场不低 → 产品/分销/价格定位，不是单边砍价。`什么都不动`：RGI 仍 ≥100 且 GOP 可接受。

### 转到

按拆腿结果进 OCC Low / ADR Low；对标用 `Competitor Sellout` 或市场弱用 `advisor-playbooks/low-demand-day.md`（P02）。

---

## 4. Pickup Slow

**现象**：1D/3D/7D 净增量低于该日期应有速度。

### 先排除

1. 该 DTA 历史本来就慢（曲线后置）。
2. 毛 Pickup 慢但取消也少，净额正常。
3. 库存没开 / 价不同步（需求进不来）。
4. 昨日刚大涨价，1D 变慢是预期反应，要看 3D。
5. 比较日含团队进账的去年同期。

### 要看的数据

Pickup 1D 与 7D（净额）；分细分/渠道；OTB vs 曲线；BAR vs 竞对；开关状态；取消。

### 可能根因

价高；曝光/配额；限制挡客；市场冷；产品；涨价过激；需求被活动日吸到别的日期。

### 动作类型

- `什么都不动`：曲线匹配，只是窗口错。
- `库存/限制/渠道`：先于降价。
- `定价`：慢 + 价明显高于市 + 库存开着 + 市场并非冰点。给区间与 24/48h 重估触发。

### 转到

`advisor-playbooks/slow-pickup.md`（P08 drafted）· `recommendations/stimulate-slow-pickup.md` · `recommendations/hold-price-curve-late.md` · Low Demand Day · Price Too High。

---

## 5. Pickup Too Fast

**现象**：短窗增量显著高于曲线，Remaining 迅速变薄。

### 先排除

1. 一次性团队/包房进账（散客 Pickup 其实正常）。
2. 系统重跑、重复导入造成的假增量。
3. 取消回流（先大取消再订回）——净额不快。
4. 活动日本来就该快。

### 要看的数据

分细分 Pickup；Remaining；DTA；OTB ADR vs 剩余挂牌价；竞对是否仍有房；取消政策结构。

### 可能根因

价低；竞对满房溢出；活动刚官宣；限制太松导致高峰被单晚切碎；某个渠道被爬虫/缓存价打穿。

### 动作类型

- `定价`：上调 BAR 或关最低价，分阶段。
- `库存`：保护高价值房型、减低价配额。
- `限制`：高峰 MinLOS / CTA。
- `什么都不动`：快但 Remaining 仍厚、DTA 短、价已在带上沿。
- 不推荐：庆祝 OCC 并继续放促销。

### 转到

`advisor-playbooks/fast-pickup.md`（P09 drafted）· `recommendations/protect-inventory-fast-pickup.md` · `recommendations/increase-bar-pace-ahead.md` · High Demand Day · Sellout Risk · Early Sellout · Concert / Event。

---

## 6. Pace Behind

**现象**：同 DTA 相对 STLY / 曲线 / Budget，OTB 落后。

### 先排除

1. 日历错位（节假日、星期）。
2. 去年有一次性大团/活动，今年「落后」是回归正常。
3. Budget 拍脑袋。
4. 总 Pace 落后但目标日期不落后。
5. 确认口径：tentative 去年算进去了。

### 要看的数据

OTB vs 至少两条基准；曲线位置；Pickup 是否在收敛；市场 Forward；价格带。

### 可能根因

开售晚；价高；需求结构变了（Lead Time 变短）；渠道丢失；产品；团队今年没定。

### 动作类型

落后 ≠ 降价。看 Pickup 是否在追：在追 → `什么都不动` 或只开渠道。差距在扩大 + 价高 + 库存开 → 才进入定价。团队缺口用销售动作，不用 BAR 去填全部洞。

### 转到

`Slow Pickup` `Low Demand Day` `Forecast Miss` `Group Evaluation`。

---

## 7. Pace Ahead

**现象**：同 DTA 领先曲线 / STLY。

### 先排除

1. 低价预售堆出来的假领先（OTB ADR 显著偏低）。
2. 不可取消团占位，wash 风险。
3. 今年节假日提前到这个 Stay Date。
4. Comp 也一样领先（市场热，不是你定价天才）。

### 要看的数据

领先幅度；OTB ADR vs 目标；Remaining；DTA；散客 vs 团队；竞对可订。

### 可能根因

真实需求；价低；竞对关房；活动；开售早。

### 动作类型

- `定价` / `库存保护` / `限制`：领先 + Remaining 薄 + DTA 长。
- `什么都不动`：领先但 ADR 已好、Remaining 厚、市场同样热且价已对齐。
- 不推荐：用更多促销把领先扩大成早售罄。

### 转到

`Fast Pickup` `High Demand Day` `Early Sellout` `Holiday`。

---

## 8. Early Sellout

**现象**：DTA 仍长（相对该店历史满房点），已满或即将满，且成交价偏低或高价值房型已空。

### 先排除

1. 历史本来就在这个 DTA 满（商务周一可能 DTA=3 才满，度假节前 20 天满是正常）。
2. 超售未计入，实际还有 wash 空间。
3. 「满」只是某渠道配额满。

### 要看的数据

满房时的 DTA vs 历史；满房 ADR vs 应有；Denied/询单（若有）；竞对是否仍开；取消率。

### 可能根因

价低；限制太松；低价渠道未关；Forecast 低估。

### 动作类型

对**尚未满的相邻日期/房型**：涨价、MinLOS 连到高峰、关低价。对已满日期：管取消替换价、超售。已发生的早售罄只能复盘，不要事后降价「补」。

### 转到

`Early Sellout` `Sellout Risk` `Holiday` `Concert / Event`。

---

## 9. Last-Minute Unsold

**现象**：DTA 很短（通常 0–3，按店调整），仍有实质 Remaining，且后段 Pickup 不足以吃掉。

### 先排除

1. 该 DOW 历史就是剩房（不必为 residual 毁 ADR）。
2. 限制/关房造成假剩余（其实卖不了）。
3. 高价房型剩余、低价已空——这是结构，不是「卖不动」。
4. 即将到店的团队 wash 还没发生，Remaining 会被吃掉或暴露。

### 要看的数据

DTA；Remaining 按房型；近 1D/3D Pickup；竞对当晚价与是否满；取消/No-show 历史；变动成本。

### 可能根因

价仍高；曝光在最后一天被关；城市需求真空；Forecast 高估后段；天气。

### 动作类型

- `什么都不动`：剩高价房、品牌不能崩、或降价也卖不掉（市场空）。
- `定价`：有弹性的日期做**有截止日期的**最后一档，不把 BAR 永久砸穿。
- `渠道`：打开此前关掉的促销渠道，设配额。
- `库存`：接受超售对冲 No-show（单独评估）。
- 不推荐：DTA=14 就当 last-minute 大促。

### 转到

`Last Minute Unsold` `Low Demand Day` `Weak Weekday`。

---

## 10. High Cancellation

**现象**：取消率或净 Pickup 被取消啃掉，明显高于该细分/政策的基线。

### 先排除

1. 分母：用下单还是确认。政策收紧后取消率降、转化也降，不是全面胜利。
2. 一次性能源：一个团洗、一次天气、一次航班。
3. 改期被算成取消+新订。
4. 灵活价本就该高取消，拿它和预付比没意义。

### 要看的数据

取消/确认；按渠道、政策、Lead Time、Stay Date；取消后是否本店再订（比价）；净 vs 毛 Pickup；No-show。

### 可能根因

政策过松 + 价高导致占位；竞对降价引发再订；事件取消；超额超售恐慌；渠道质量差；重复预订。

### 动作类型

- `定价`：对高风险日期提高预付占比或缩短免费取消窗（先看转化副作用）。
- `库存`：对冲 No-show 的超售。
- `渠道`：限制劣质来源。
- `什么都不动`：基线内波动。
- 不推荐：用更深折扣「锁单」却不改政策——可能吸引更多占位客。

### 转到

`High Cancellation` `Overbooking`（未来）`Forecast Miss`。

---

## 11. Room Type Imbalance

**现象**：总 OCC 尚可，但房型冷热极端（标准间早空、套房空；或反过来价差倒挂）。

### 先排除

1. 维修/OOO 集中在某房型。
2. 映射错误（渠道把高级房卖成标准价）。
3. 升级预留造成高级房「空」其实已被 hold。

### 要看的数据

分房型 OTB/OCC/ADR/Remaining；价差；升级/降级；Pickup 分房型；竞对对应产品价。

### 可能根因

价差过大/过小；低价房未保护；高级房图文/库存未开；压缩（base 卖光被迫升级，ADR 假高）。

### 动作类型

`定价`（调差，不是只动最低价）；`库存`（保护 base 或开放高级房）；`限制` 较少；`什么都不动`（价差合理的自然结构）。

### 转到

`Room Type Compression`；总价问题另挂 Price 枝。

> 指针（2026-09-03 00:17，不改正文）：组合套房 / Component / Accessible「池空 dump BAR」→ **T-Component** `theory/component-suite-inventory-vs-bar.md`；过程仍 **P13 + P37**。不开 P88。不规定 P89。
> 指针（2026-09-03 02:17 C03-02，不改正文）：专卷 Simulation → `cases/sim-2026-component-suite-sat.md`（C03-02）；Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。未开新枝。不开 P88。不开 P89。
> 指针（2026-09-03 04:17 R03-04，不改正文）：§122 新开 protel Virtual Room Types + Clock Virtual Rooms。Component / suite-pool「池空 dump BAR」仍 → **T-Component**；过程仍 **P13 + P37**。未开新枝。不开 P88。不开 P89。

---

## 12. Channel Mix Problem

**现象**：某渠道占比或净贡献异常：OTA 过高、直销塌、批发吞配额、某渠道 OCC 高但 Net ADR 差。

### 先排除

1. Gross ADR 好看但净额差，或相反。
2. 「直销差」其实是会员价被算进 OTA。
3. 关渠道后的假结构改善（总量也没了）。
4. 佣金发票周期造成的成本错期。

### 要看的数据

分渠道间夜、Gross ADR、佣金、Net ADR、Pickup、取消；直销可订与价差；配额。

### 可能根因

价差倒挂把需求赶去 OTA；配额放太大；参加了高成本优待；直销故障；批发价外泄。

### 动作类型

`渠道`（配额、开关、是否参加计划）；`定价`（恢复价差）；`什么都不动`（高佣金渠道带来的是增量间夜且贡献为正）。用 Net 排序，不用道德反 OTA。

### 转到

未来 Channel playbook；`Price War`；`Group Evaluation`（批发）。

---

## 13. Price Too High

**现象**：相对可转化需求，当前价抑制了本该有的 Pickup。这是**诊断结论**，不是用户原话。须由数据证立。

### 先排除（尤其重要）

1. 库存没开、渠道不同步——看起来像价高。
2. 市场没需求——降价无弹性。
3. 产品事故——价相对价值高，但根因不是 BAR。
4. 只和一家更弱的竞对比价。
5. 1D Pickup 慢（涨价次日）当「价高了」。

### 要看的数据

BAR vs 至少 3 家可订竞对；本店转化/询单（若有）；Pace 缺口；市场热度；取消后再订。

### 可能根因

涨价过快；未跟市场下调；限制+高价叠加；事件结束后还挂事件价。

### 动作类型

`定价`：回到可辩护区间，首选一个点 + 范围；分阶段。`渠道`：不要只靠加促销码掩盖结构价。`什么都不动`：价高但 Pace 仍领先且 Remaining 薄。

### 转到

`Price Too High` 逻辑并入 `Slow Pickup` `Low Demand Day`；小心滑入 `Price War`。

---

## 14. Price Too Low

**现象**：需求足以支撑更高价，当前价在送 ADR。须证立，不是「我觉得便宜」。

### 先排除

1. Pickup 快来自团队，不是散客价低。
2. 竞对正在满房溢出——你的价可能对，是供给洞。
3. OTB ADR 低但剩余挂牌已高——前半段的沉没，后半段别重复错。

### 要看的数据

Pace Ahead 幅度；Remaining；DTA；竞对价与可订；成交价分布；是否早售罄史。

### 可能根因

开售过低；自动跟价跟到地板；促销未设结束；Forecast 低估。

### 动作类型

`定价` 上调或关最低档；`库存` 保护；`限制` 高峰 MinLOS。`什么都不动`：已在带上沿或 DTA 极短且弹性未知。

### 转到

`High Demand Day` `Early Sellout` `Holiday` `Weekend Compression`。

---

## 15. Forecast Error

**现象**：系统或人工预测与 OTB/实际持续偏离，导致价和库存建在错的需求上。

### 先排除

1. 用户把 Budget 叫 Forecast。
2. Constrained vs Unconstrained：满房后「预测 100%」不是准，是被天花板截断。
3. 活动未进模型。
4. 一次 1D 偏差当模型坏了。

### 要看的数据

Forecast vs OTB vs 最终；误差按 DOW/季节/活动；Pickup 是否被模型吃进；最近覆盖率。

### 可能根因

曲线用错年；团队 wash 假设；价格计划与预测互相反馈（降价被当成需求升）；新店无历史。

### 动作类型

`预测修正` 优先。在错误 Forecast 上大降/大涨是二次伤害。短窗改人工 overlay，再动价。

### 转到

`Forecast Miss`。

---

## 16. Event Demand

**现象**：展会、演唱会、赛事、节假日、城市压缩（compression）改变曲线与弹性。

### 先排除

1. 事件日期/场馆距离是否真影响本店（不是同城就等于本商圈）。
2. 官宣前按事件价卖，或官宣后还按平日卖。
3. 散客曲线被团队包房扭曲。
4. 事件取消/缩规模的新闻。

### 要看的数据

事件日历与距离；历史同类事件曲线；当前 OTB/Pickup/Pace vs 平日曲线（不要只用 STLY 若去年无事件）；竞对价与满房；Lead Time 是否前移；票务/交通信号。

### 可能根因

需求真实前移；价未跟上；MinLOS 未上导致高峰被切；肩日被忽略；事件后遗症（次日仍高价）。

### 动作类型

事件日：`定价` + `限制` + `库存保护`，通常 **不降价**。肩日：可连住包装。事件取消：立刻回到平日带，避免空挂。`什么都不动`：价、限制、Remaining 已与历史事件匹配。

### 转到

`event-pricing-first-cut.md` · `high-demand-day.md`（P01）· `concert-event.md`（P07 drafted）· `holiday.md`（P06 drafted）· `sellout-risk.md`（P03 drafted）· Weekend Compression。

---

## 17. 枝与未来 Playbook 对照

| 枝 | 优先 Playbook（未来，见任务书四十四节） |
| --- | --- |
| OCC Low | **`low-demand-day.md` drafted**, Weak Weekday, Slow Pickup, Forecast Miss |
| ADR Low | Price Too Low 逻辑, Channel Mix, Group Evaluation |
| RevPAR Low | 按拆腿进入上两行 |
| Pickup Slow | **`slow-pickup.md` drafted** |
| Pickup Too Fast | **`fast-pickup.md` drafted**, **`sellout-risk.md` drafted** |
| Pace Behind | **`slow-pickup.md` drafted**, `hold-price-curve-late.md`, **`low-demand-day.md` drafted**, Forecast Miss |
| Pace Ahead | **`fast-pickup.md` drafted**, **`high-demand-day.md` drafted**, Early Sellout |
| Early Sellout | Early Sellout（P04 未写）, **`sellout-risk.md` drafted** |
| Last-Minute Unsold | Last Minute Unsold |
| High Cancellation | High Cancellation |
| Room Type Imbalance | Room Type Compression |
| Channel Mix Problem | （Channel，待建）Price War |
| Price Too High | Slow Pickup, `decrease-bar-true-weak-demand.md`, Price War（避免） |
| Price Too Low | **`high-demand-day.md` drafted**, Early Sellout |
| Forecast Error | Forecast Miss |
| Event Demand | `event-pricing-first-cut.md`, **`high-demand-day.md` drafted**, **`concert-event.md` drafted**, **`holiday.md` drafted** |

P01 / P02 / P03 / P06 / P07 / P08 / P09 已 drafted。其余剧本尚未写成文件前，顾问仍按本树的「先排除 / 数据 / 动作类型」输出，不编造未写剧本的步骤。幅度走 `pricing/how-much-to-move.md`。库存/限制走 `inventory/inventory-control.md` · `restrictions/restriction-framework.md`。

---

## 18. 交叉走法（常见组合）

| 用户原话 | 先挂 | 不要先做 |
| --- | --- | --- |
| 入住率低 | OCC Low 鉴别树 | 降价 |
| 均价低 | ADR Low（先排口径和组合） | 为刷 ADR 赶客 |
| 这个星期二卖不动 | OCC Low + 该 DOW 曲线 | 套用周末策略 |
| 订得很快 | Pickup Too Fast + 是否团 | 继续促销 |
| 已经 70% 了还涨？ | OTB 卡 + Pace Ahead/Behind | 用 70% 当答案 |
| 演唱会 | Event Demand，禁用平日曲线 | 当普通周末 |
| 和竞对一样空 | OCC Low 第 4 问（市场）→ `do-not-cut-price-market-also-weak.md` | 价格战 |
| 系统说要降 | Forecast Error + 鉴别树 | 盲从 RMS |

---

## 19. 顾问输出时本树怎么用

Situation 里写挂了哪一枝。Diagnosis 里写排除了什么、还缺什么。Recommended Action 必须带动作类型；若是 `什么都不动`，写清触发重估的 Pickup/价/竞对条件。禁止只说「适当调整」。

---

## 20. Wave3 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 入住率低要不要降 | §1 → P02 | Hold / 只修渠道 / do-not-cut / decrease（区间+首选+Trigger） |
| OTB+Pickup+竞对+剩余，涨到哪 | §7/§5 或 §14 | `how-much-to-move.md` + Increase BAR / Event 第一刀 |
| 市场也弱 / 展会取消 / 渠道刚开 | §1 问 4、6 | `cases/sim-2026-weak-market-do-not-cut.md` 同类：不砸 BAR |
| 演唱会第一刀 | §16 | `event-pricing-first-cut.md`；无 overnight 不把幅度建在事件上 |

## 21. Wave4 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 国庆要不要限单晚 | §16 + 日历形状 | `holiday.md`（P06）· `minlos-peak-protect.md`：只盖 Peak，肩日 Open |
| 演唱会那天限不限、低价关不关 | §16 先排除 overnight | `concert-event.md`（P07）· 仿真 `sim-2026-concert-peak-shoulder-minlos.md` |
| 要不要提前关低价 | §5/§8/§16 | `close-low-rate-compression.md`；Days-to-Sellout < DTA 就今天关，不等 90% |
| 快卖完了 / 剩得少 | §5 + §8 | `sellout-risk.md`（P03）：先关低价，再涨；价已最高只关不涨 |
| 入住率低但渠道/房型关着 | §1.6–1.7 | `open-inventory-false-low-occ.md`：先开供给，不降 BAR |
| 高峰被单晚掏空、肩日空 | §8 + O8/O10 | MinLOS=2 只盖 Peak；不要整周连住 |

P03 / P06 / P07 已 drafted。P04 Early Sellout、P21、P29、P22、P33 仍未写：相邻日复盘、春节错位、会展肩日细则、限制过度诊断仍按本树先排除。



## 22. Wave5 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 这个团 500、散客 800，接不接 | O12 | `group-evaluation.md`（P10）· 置换草表：按日 Displaced，禁止只比两个 ADR |
| 要不要超售 | O11 · §10 | `overbook-or-not.md`：方向+风险；无取消史不给间数；平台额度 Unknown |
| 现在 85%、还有 21 天、还卖 799 | §8 | `early-sellout.md`（P04）：关低价 + 档 B；价已最高只关不涨 |
| 套房比标准间还便宜 | §11 | `fix-room-type-inversion.md` · `room-type-differential.md` |
| 哪个渠道 ADR 高就保哪个 | §12 | `channel/net-contribution.md`：用 Net；中国 OTA % Need Verification |

P04 / P10 已 drafted。P05 / P18 / P20 / P24 / P34 剧本仍未写：当晚未售、OTA 促销、渠道净价剧本、Walk 细则、差价剧本仍按本树先排除 + 已有理论卡。


## 23. Wave6 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 竞对比我低 80 元要不要跟 | §1 问 8 · 价差先换 % | `ignore-comp-undercut.md`：Pace On/Ahead + Pickup 未塌 → **不跟**；只开围栏 −3–5%。仿真 `sim-2026-comp-cut-pace-not-behind.md` |
| 他们集体在降 | P16 | `price-war.md`：只跟曝光层，不跟自杀价 |
| 竞对满了 | §16 / P15 | 1 家满不自动涨；≥2 家 + 本店旁证 → `citywide-compression.md` / P15 |
| 全城都满 / 会展周 | §16 | citywide 卡；无公开 90% 门槛；≥2 家 Primary 满代替 |
| 下周有演唱会 | §16 | 先问 Lead Time / 距离 / 官宣 / 竞对是否已关 → P07 + 事件第一刀 |
| 今晚还空 20 间 | §9 | `last-minute-unsold.md`（P05）：72h 围栏 / 24h 档 H / 6h 认栽；不一夜永久 −15% |
| 这个周二卖不动 | §1 + P12 | `weak-weekday.md`：等商务尾部；DTA≥7 不砸 BAR |
| 周五六怎么定价 | P11 | `weekend-compression.md`：周末带；MinLOS=2 只盖已证实 Peak |
| Forecast 说该 90% 实际 55% | §15 | `forecast-miss.md`：先改判断再改价，不追 Budget |
| Comp 该怎么选 | — | `market/comp-set.md`：七维；Primary 才是日报价圈；MPI 见指标卡 |

P05 / P11 / P12 / P15 / P16 / P17 已 drafted。P18 / P21 / P22 / P32 剧本仍未写（citywide **卡**已可调用）。P28 天气、P33 限制过度仍按本树先排除。


## 24. Wave7 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 美团/携程这个促销要不要报 | §12 | `china-ota-promotion.md`（P18）· `join-or-skip-promo.md`：谁出资、净价、Pace、砸不砸高峰 → 报 / 不报 / 只报肩日 |
| 会展周三高峰、周二周四怎么办 | §16 + O10 | `exhibition-shoulder.md`（P22）· `shoulder-open-for-peak.md`：肩日 Open；Peak MinLOS=2；仿真 `sim-2026-exhibition-peak-shoulder.md` |
| 国庆要不要限单晚（工具细项） | O8 | `holiday-minlos.md`（P21）；只盖已证实 Peak |
| 这晚空着团只要 500 | O12 | 置换草表 + `optimization-advise.md`：500 < 该夜机会成本 → Counter |
| 连住优惠算不算促销 | §12 + O10 | 店出且盖 Peak → 当低价计划关，不是报名 |

P18 / P21 / P22 已 drafted。P19 / P20 / P29 / P32 / P33 仍未写。

## 25. Scout 交叉引用（2026-08-20 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 预付打几折、哪些天开 | §10 · §14 | `prepaid-nonrefundable.md`（P19）· `open-close-prepaid-nr.md`：高峰关；弱日 −3–5%；不报行业 9 折 |
| 哪个渠道 ADR 高就保哪个 | §12 | `channel-net-rate.md`（P20）· `rank-channel-by-net.md`：用净；无费率只比结构 |
| 标准间快没了、套房空 | §11 | `room-type-compression.md`（P13）：涨基础 / 关基础留高档 / 抬高档；不免费升 |
| 套房比标准间还便宜 | §11 | `room-type-differential.md`（P34）· `fix-room-type-inversion.md` |
| 订了又取消、OTB 还挺高要不要涨 | §10 | `high-cancellation.md`（P14）· `treat-otb-as-soft.md`：OTB 当 Soft；不报行业取消% |
| 春节 / 黄金周怎么定价、限几天 | §16 | `golden-week-spring-festival.md`（P29）；农历 STLY；春运 2/2–3/13 ≠ 放假 9 天同一 MinLOS |

P13 / P14 / P19 / P20 / P29 / P34 已 drafted。P24 / P32 / P33 仍未写完整剧本（Walk 卡、citywide 卡可调用）。

## 26. Scout 17:00 交叉引用（2026-08-20 17:00 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| MinLOS 开着但入住率掉了，要不要降价 | §1 问 7 · §1.A.3 · O8 | **P33** `restriction-overuse.md` · `do-not-cut-when-restricted.md`：先查限制挡了谁（短住/到达、肩日误伤、渠道同步错）；**先松限制，不要先降 BAR** |
| 满房了所以需求到头 / Sold=100 | §15 · Forecast | `unconstrained-vs-constrained.md`：Constrained 封顶 100%；Demand 可以 >100%。缺口 = yield opportunity |
| OCC 低但限制开着 | §1 问 7 | 专用卡：先排除自己把需求挡掉；机制 = Duetto Constrained 第一步（Vendor Methodology） |
| Pace 已经 Ahead 还说还会来很多 | §6 · §15 | TBB 不为负：领先历史 pace 时不再往上加增量 |

P33 已 drafted。库存误关仍走 `open-inventory-false-low-occ.md`。已证实 Peak 被单晚掏空走 P21，不把高峰 MinLOS=2 当过度拆掉。P24 / P32 仍未写完整剧本。


## 27. 早课 08:00 交叉引用（2026-08-21 08:00 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| mix 变了、入住还行，是好是坏 | §12 · ADR Low | `segmentation/segment-mix.md`：不能只看总 OCC；Gross 升净掉 = 变坏 |
| OTA 占比升高、直销掉 | §12 | **P25** `direct-vs-ota-mix.md` · `steer-mix-by-net.md`：先排除直销没开/价高/不同步；弱日净>0 增量可留 |
| 全渠道跟最低价 | §12 · P16 | 只平 BAR 层；OTA 深折不是直销必须跟的最低。仿真拒 799 |
| 把 OTA 关掉省佣金 | §12 | 高峰关深折，不关光；假结构=总量没了 |
| OTA ADR 高所以保 OTA | §12 | P20 按净排序。禁止该句 |

P25 已 drafted。P20 仍先排序。P18 管单次报名。P24 / P32 仍未写完整剧本。P33 不重写。

## 28. Scout 11:00 交叉引用（2026-08-21 11:00 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 全市演唱会/展会/大赛，要不要整周涨 | §16 · 本表 | **P32** `citywide-compression.md`：先问 Pace 是否坐实、肩日有没有被带动。有大事件 ≠ 全市自动涨 |
| 卖不动，从 1999 砍到 1299 | §15 + §16 | `dont-cut-from-hype-rate.md`：Rate Recovery Trap。对照 **无事件基线**，禁止从幻想价砍到仍贵 |
| 大赛周肩日也跟高峰价 | §16 + O10 | 肩日 **不要自动跟 Peak**。压缩没有自动回填肩日（世界杯案例 C/B，不是公式） |
| 全城都在涨/世界杯级 | §16 | 三形态：真压缩 / 单店事件（P07/P22）/ mega-event 虚火。只有媒体叙事没有 Pickup → 不挂 citywide |
| Forecast 按大赛订了 90%、OTB 像落后 | §15 | P17 事件错 overlay + P32 虚火。拆开无事件 STLY vs 事件预测 |

P32 已 drafted。城市卡仍管真压缩第一刀（+8–15%，不跳最高）。P24 Walk 仍未写。世界杯表内数字不升 S。

## 29. Scout 14:17 交叉引用（2026-08-21 14:17 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 今晚可能赶客怎么办 | O11 · §10 | **P24** `overbooking-walk.md` · `who-to-walk-first.md`：先停接当晚到达；未到仍覆盖缺口则先等 |
| 先赶谁 | O11 | 先低价非会员最后预订；后赶会员/预付/指定套房。不编补偿金额 |
| 还要不要继续超售 | O11 | 已赶或将赶 → **停超**。无取消史不给精确间夜。要方向仍走 `overbook-or-not.md` |
| 超几间 / Walk 成本是房价几倍 | O11 | **不给。** Walk 成本 NV；禁止「房价×2」当 Fact |
| 价还很低但想靠超售冲满 | §8 / P03 | 先关低价，不进 P24 当主流程 |

P24 已 drafted（过程剧本）。Walk 成本数字、中国 OTA 2026 罚则额度仍 NV。P28 天气已 drafted（22:17）：取消潮中停超、不涨；见 §32。


## 30. 理论深挖 16:17 交叉引用（2026-08-21 16:17 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 降了 OCC 上来但 RevPAR / 收入掉了怎么办 | §1 已动价后 · 本表 | `price-elasticity-advise.md` 模式 B · **`stop-cut-if-revpar-falls.md`**：对该 Stay Date **停再砍 BAR**；收回过深围栏；先排除 P33/渠道关 |
| 降了怎么还是不卖 / OCC 几乎不动 | §1 问 6–7 | 模式 C：先查库存/限制/渠道，不先下「无弹性」结论 |
| OCC 上来算不算降价成功 | §2 RevPAR | 看 RevPAR（再 Net）。OCC↑ RevPAR↑ = 量赚回；OCC↑ RevPAR↓ = 不成功 |
| 弹性大概是多少 / η= | — | **不给点。** 方向诊断 only；测量等 M7 / feedback |
| TRevPAR / GOPPAR 和 RevPAR 啥区别 | 指标 | `metrics/trevpar.md` · `metrics/goppar.md`：全收入 vs 经营利润 vs 客房收入 |

幅度仍走 `how-much-to-move.md`。不改 +5–8% / 围栏 −3–5% / BAR −5–10% / 禁一夜 −15%。P23/P26–P28/P30/P31/P35 本轮不写。

## 31. 案例与剧本 18:17 交叉引用（2026-08-21 18:17 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| BAR 要涨，会员价跟不跟、跟多少 | §12 · 本表 | **P23** `member-vs-public.md` · `follow-or-hold-member-rate.md`：先问品牌规则；没有规则 = 酒店自有围栏，默认同向跟、差价 −3–5%（Hypothesis）。不当成必须便宜一成 |
| 会员已经比 OTA 还贵 | §12 | 先拆层：公开 BAR 层 vs 深折。会员 > OTA **公开 BAR 层** → 先修倒挂（同步/围栏），**不要再涨会员**。会员 > 神券 799 → 高峰关深折，会员不去跟（P18/P25） |
| 会员已经比门市/OTA 还低很多 | §14 · §12 | 高峰会员打到深折下面 = 折扣在砸高峰，**先收口差价**。仿真拒 Freeze 与 10%→809 |
| 销售说会员必须永远 9 折 | §12 | **不是 Fact。** 万豪打开页是工作日至少 2%、周末最高 5%（仅万豪）；IHG 产品页无 %；独立店无官方 SOP |

P23 已 drafted。仿真 `cases/sim-2026-member-rate-vs-bar-raise.md`：200 间 **Simulation**，9/12 周六，公开 949–969 首选 **949**，会员 Follow **902–921 首选 909**。兼容：+5–8% / +8–15%；价已最高只关不涨；高峰关深折不关直销；预付高峰关、弱日 −3–5%；出资未知或砸高峰 → 不报。P26–P28/P30/P31/P35 仍不写。

## 32. Scout 22:17 交叉引用（2026-08-21 22:17 CST 追加，不改 1–16 枝骨架）

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 台风/暴雨/航班大面积取消，OTB 还很高要不要涨 | §10 · §16 · 本表 | **P28** `weather-disruption.md` · `dont-raise-into-cancel-wave.md`：OTB 当 Soft，**禁止涨进取消潮** |
| 取消潮里能不能降、要不要 −15% 填坑 | §1 问 4 · §9 | 交通停 = 市场冰 → `do-not-cut`。真剩余 + 价高 + 市场不冰才围栏 −3–5% / BAR −5–10%。**禁止一夜 −15%** |
| 要不要超售 | O11 · §10 | 取消史刚坏 → **停超**（P24）。无取消史不给精确间夜 |
| 周末 MinLOS 还开着、天气夜卖不动 | §1 问 7 · O8 | P33：天气夜评估 **Open**；先松限制，不要先降 BAR |
| 风暴过了 OTB 掉了，对照昨天 88% 该不该砍 | §15 · §16 | 对照 **无事件基线**（P32 表亲），不对照风暴前幻想 OTB |

P28 已 drafted（过程剧本）。Cornell/HSMAI 台风专页仍未找到。台风人次、取消率%、Walk 成本、精确超售间夜仍 NV。P26/P27/P30/P31/P35 仍不写。

## 33. 理论深挖 00:17 交叉引用（2026-08-22 00:17 CST 追加，不改 1–16 枝骨架）

客房 vs 全店混用：用「餐很高 / TRevPAR / GOPPAR」压当晚客房决策。先挂 O12，再走 T18 卡。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 这个团 500 房费但餐标很高 | O12 | 先 P10 置换草表；餐饮翻盘走 `accept-low-room-for-fnb.md`。无贡献数字 **不 Accept** |
| 要不要为了餐饮把房卖掉 | O12 · 本表 | `theory/total-revenue-management.md`：高峰能卖满散客 → Counter 客房或缩房量，宴会可留。禁止无数字 dump |
| TRevPAR/GOPPAR 好所以今晚该降 BAR / 该接低价团 | §30 指标 · 本表 | 那些尺看结构与 P&L，**不替代当晚 BAR**。GOPPAR 未取代 RevPAR（Kimes 2017 目录级） |
| 住客还花多少、TrevPOR | 指标 | `metrics/trevpor.md`：Total/Sold；OCC 低时 TrevPOR 高仍可能空房 |

P30 婚宴仍 not_started。不编餐毛利 / 变动成本 / 佣金%。P10 正文不重写。

## 34. 案例与剧本 02:17 交叉引用（2026-08-22 02:17 CST 追加，不改 1–16 枝骨架）

婚宴占房 vs 散客：先拆宴会本身 vs 客房块。先挂 O12，再走 P30。不是 P10 重写。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 周六婚宴要 40 间、房费只要 500，餐标很高，接不接 | O12 · 本表 | **P30** `wedding-banquet-group.md` · `counter-wedding-room-block.md`：先拆宴会 vs 占房。无贡献数字 **不 Accept** 低价房块 |
| 要不要把散客关了给婚宴锁房 | O12 · §7 | **不要关散客。** 高峰能卖满 → Counter 提房价或缩宾客间，宴会可留。关零售 = dump |
| 餐很高所以整周末都按 500 接 | O12 · §33 | 周五/周日肩日 **分开算**。整段平均会把亏的周六藏进肩日。T18 通用翻盘仍走 `accept-low-room-for-fnb.md` |
| 婚房/家长房也要砍吗 | O12 | must-keep（婚房+家长房）可留；砍的是宾客 dump，不是仪式刚需几间 |
| 大厅绑几十间房才能订 | O12 · T18 | 占房常见 = Hypothesis B，不是必须接低价大块。功能空间与客房都稀缺不要把套餐贡献双计 |

P30 已 drafted。仿真 `cases/sim-2026-wedding-40x500-saturday.md`：200 间 **Simulation**，9/12 周六 40×500 vs BAR 929（899–999 带），贡献 **80,000 标 Simulation** → **Counter**（周六最多 12 间@500 或 790–860 首选 **799**；肩日 8+4@500 Accept；不关散客）。不编餐毛利 / 变动成本 / 佣金%。P26/P27/P31/P35 仍不写。

## 35. Scout 06:17 交叉引用（2026-08-22 06:17 CST 追加，不改 1–16 枝骨架）

协议价漏出 vs 真协议需求：先挂 §12 / mix B7，再走 P26。不是杀户，也不是 P10 一团。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 协议客人在周六用 480 订了散客高峰，要不要关协议 | §12 · B7 · 本表 | **P26** `corporate-leakage.md` · `blackout-or-close-leaking-corp.md`：先分合同范围还是漏出，**不要一律关死账号** |
| 协议价跑到 OTA 了 | §12 · P25 | 这是漏出，不是直销。从 OTA 拿掉协议码；高峰仍关深折、不关直销 BAR 层 |
| 销售说协议必须全年开、必须便宜 30% | 本表 | **没合同文件不要编。** Unknown LRA → 高峰 Hypothesis blackout，弱市工作日留 |
| 为了公平把 BAR 降到协议价 | §14 · 本表 | **拒绝 dump。** 协议是围栏不是新地板。禁一夜 −15% |
| 关了协议周中没人来 | §12 · P12 | 弱市工作日真差旅 **留**。关的是高峰漏出层，不是账号 |

P26 已 drafted。仿真 `cases/sim-2026-corp-rate-weekend-leak.md`：180 间 **Simulation**，9/05 周六协议 480 vs BAR 899 → **blackout 周六 + OTA 下码**；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/02 周二 KEEP 480。不编协议折扣%。P27/P31/P35 仍不写。

## 36. 理论深挖 08:17 交叉引用（2026-08-22 08:17 CST 追加，不改 1–16 枝骨架）

卖了但更亏：OCC/收入看起来涨，贡献或 GOP 掉。先挂本表，再走 T19。不是 P02「该不该降」的第一问。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 499 还能卖，卖不卖？佣金+早餐+布草会不会亏 | 本表 | `theory/profit-contribution.md` · **`do-not-sell-below-contribution.md`**：要 Stay Date + 净价 + 用户三成本。缺成本 **不编**、不能说总比空着强；已知深折 vs BAR 可弱拒配 399 |
| 卖了入住上来但更亏 / 收入涨利润不涨 | §2 RevPAR · §30 · 本表 | Flow Through 差或为负 → 先查 mix 和成本，**不是再降价**。`metrics/flow-through.md`。OCC↑ RevPAR↓ 走 stop-cut；OCC↑ GOP↓ 更差 |
| 最后一分钟配 399 / 今夜特价 | §9 · P05 · P18 | 先围栏，禁一夜 −15%。围栏净价也不得穿贡献；穿底认栽空房 |
| 为了满房把高价值客 Walk 掉留 399 | O11 · 本表 | 空房成本 = 未售间**贡献**，不是 Walk×2。不接 399；Walk 走 P24，不编金额 |

T19 已 drafted。变动成本 / 佣金% / Walk 仍 NV。P27/P31/P35 仍不写。P01–P30 正文不重写。


## 37. 案例与剧本 10:17 交叉引用（2026-08-22 10:17 CST 追加，不改 1–16 枝骨架）

盲盒 / 批发 / 打包漏出 vs 真套餐：先挂 §12，再走 P27。不是 P18 一次报名，也不是 P26 协议户。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| OTA 盲盒 399、打包把房费摊低，高峰关不关 | §12 · 本表 | **P27** `opaque-package-leakage.md` · `close-opaque-on-peak.md`：高峰 Ahead 默认关盲盒与批发，不是再配 399 |
| 淡季 399 留不留、总比空着强 | §36 · 本表 | 弱日仅当净>贡献可留。**没成本数别说总比空着强**（T19） |
| 批发净价出现在零售 OTA | §12 · P20 | 漏出。从零售拿掉；高峰对该批发 stop-sell。比净不比毛 |
| 含早打包所以房费可以地板 | §33 · 本表 | 先拆真含餐 vs 藏房费。餐贡献 Unknown = 假打包，当 dump |
| 今晚空着靠盲盒清仓 | §9 · P05 | opaque **不是** last-minute 第一刀。先围栏，禁一夜 −15% |

P27 已 drafted。仿真 `cases/sim-2026-opaque-399-saturday.md`：160 间 **Simulation**，9/12 周六盲盒 399 vs BAR 899 → **CLOSE**；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/08 周二不 Accept 399。不编佣金%。P31/P35 仍不写。

## 38. Scout 14:17 交叉引用（2026-08-22 14:17 CST 追加，不改 1–16 枝骨架）

OTA 排名/曝光掉了 vs 真没需求：先挂 §1.6 Distribution，再走 P35。不是自动砍 BAR，也不是自动报今夜特价。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 美团/携程排名掉了、流量没了，要不要降价 | §1.6 · 本表 | **P35** `ota-visibility-drop.md` · `dont-cut-for-rank.md`：先查库存、比价、内容，**不要先砍 BAR** |
| 要不要报今夜特价 / 不报就没曝光 | §12 · P18 | 整段 **P18**。谁出资、净价、砸不砸高峰。排名 FOMO / 「不报降权」= **NV**，不当门 |
| 排名掉了先把 BAR 砍到 −15% | §9 · P05 · 本表 | **拒绝。** 一夜 −15% 禁令仍在。DTA 短走 P05 三档，默认 6h Hold |
| 没有截图，销售说掉到第 N 页 | 本表 | 只给检查单，**不给权重公式**。平台算法 Unknown |
| 为排名去开盲盒/跟竞对自杀价 | §12 · P16 · P27 | 不为排名开 opaque。价差 <8% 且 Pace 不差 → 不跟（P16） |

P35 已 drafted（过程剧本）。仿真 `cases/sim-2026-ota-rank-drop-saturday.md`：180 间 **Simulation**，8/22 周六当晚美团标准房关着、BAR 799、口述排名掉 → **OPEN 库存**；公开 **779–799 首选 799**；今夜特价出资 Unknown → **不报**；拒绝 679。中国四平台酒店搜索权重 / 佣金% / 活动名仍 NV。P31 仍不写。


## 39. 理论深挖 16:17 交叉引用（2026-08-22 16:17 CST 追加，不改 1–16 枝骨架）

预算差了就砍 / 品牌底 vs Pace / 店长 OCC vs 收益 GOP：先挂本表，再走 T20。不是 P02「该不该降」的第一问，也不是自动跟价。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 预算差了 10% 要不要把下周全砍了 | 本表 · §15 | `theory/revenue-strategy.md` · **`dont-cut-to-hit-budget.md`**：Budget ≠ Forecast。10% 非门槛。Pace On → 改预期；真 Behind 按日围栏。禁止全周一夜 −15% |
| 集团说品牌价不能低于 699，Pace 很差怎么办 | 本表 · P16 | **`do-not-break-brand-floor.md`**：有声明底就 Hold；先围栏/库存/渠道。无声明底 **不发明 699**。仍死 → 书面例外+Watch，不偷偷砸穿 |
| 店长要 OCC、区域收益要 GOP，听谁的 | 本表 · X-ORG | 问组织图。用贡献和 Pace 说话，**不拿预算当刀**。T19 穿底不卖；高峰不追 OCC |
| 完成率不够所以必须跟竞对 dump | §13 · P16 | 预算差不是跟到底许可证。不跟自杀价 |
| overlay 错了还砍 BAR 去救预算 | §15 · P17 | 先改判断，不砍 BAR 救预算 |

T20 已 drafted。集团 SOP / 品牌最低价表 / 预算完成率门槛仍 NV。不写 P31。P01–P30、P35 正文不重写。

## 40. 案例与剧本 18:17 交叉引用（2026-08-22 18:17 CST 追加，不改 1–16 枝骨架）

机组挤高峰 / 额外机组房：先挂 O12，再走 P31。不是 P10 重写，也不是 P26 协议漏出。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 航司说再加 20 间机组房，周六 BAR 已紧，接不接 | O12 · 本表 | **P31** `airline-crew.md` · `counter-or-reject-extra-crew.md`：extra ≠ 已签 allotment。高峰默认 **Counter 或 Reject**，不是按合同价悄悄接 |
| 机组价 380 远低于 BAR 899，应不应该黑出周末 | O12 · §12 · 本表 | 已签 allotment 先问围栏和 wash，**不要一律关死航司账号**。高峰可 close extra / 问 blackout；弱周中可留 |
| 机组很爽约，OTB 要当 Soft 吗 | §10 · P14 · 本表 | **当 Soft。** 禁止涨进取消潮，禁止按硬房超售。天气 ≠ 机组，闸同 P28。不为幽灵机组房 Walk 散客（P24） |
| 为了接机组把 BAR 降到 380 | §14 · T19 · T20 | **拒绝 dump。** 禁一夜 −15%。无声明底不发明 699 |

P31 已 drafted。仿真 `cases/sim-2026-airline-crew-saturday.md`：180 间城市店 **Simulation**，9/12 周六 extra +20@380 vs BAR 899 Ahead+Fast → **Counter**（最多 0–4@380 或 760–850 首选 **799**）；已签 12 KEEP；9/09 extra 8 Accept。不编航司价表 / 取消率 / IATA 名单。


## 41. Scout 22:17 交叉引用（2026-08-22 22:17 CST 追加，不改 1–16 枝骨架）

截图比价不可比 vs 真公开 BAR dump：先挂本表，再走 P36。不是自动跟 80，也不是直接进 P16。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 截图里隔壁便宜 80，要不要跟 | §13 · 本表 | **P36** `rate-shopper-incomparable.md` · `dont-follow-incomparable-shop.md`：先问同一口价。会员/含早/App/只剩套房 → **不跟**，Hold 我们的 BAR |
| 已经确认是公开灵活 BAR、对面在砸 | §13 · P16 | 可比之后才 **P16**：Pace 不差不跟；只跟曝光层，不跟自杀价 |
| 销售要对齐到 699 | §14 · T19 · T20 | 不可比更不能 699。无成本不说总比空着强。无声明底 **不发明 699**。禁一夜 −15% |
| 排名掉了所以显得贵 | §1.6 · P35 | 排名页走 P35，不是一张 shopper 截图 |
| 我们会员跟不跟公开 BAR | §31 · P23 | **我们的** 会员围栏，不是隔壁登录价 |

P36 已 drafted（过程剧本）。仿真 `cases/sim-2026-comp-screenshot-80-cheaper.md`：180 间 **Simulation**，8/29 周六截图 719 vs BAR 799，标签会员/含早/App、套房尾房 → **Hold 779–799 首选 799**；拒绝 699。美团/携程可比价公式 / sanctioned 行业比例仍 NV。

## 42. 理论深挖 00:17 交叉引用（2026-08-23 00:17 CST 追加，不改 1–16 枝骨架）

OCC 好看因为维修 / 空房其实不可售 / 对标 Comp 高几个点：先挂本表，再走 T06 / **P37**。不是自动涨，也不是自动砸。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| OCC 已经 92%，要不要再涨（还在维修） | §1.0 口径 · 本表 | **P37** `ooo-capacity.md` · `theory/capacity-ooo.md` · **`dont-price-off-ooo-occ.md`**：先问分母。维修砍掉的不是需求。不自动 Increase BAR |
| 还剩 40 间空着，今晚砸一刀（里面有维修/自用） | §1 · §9 · 本表 | Remaining := 可售。不可售不是砸价对象。真可售厚才 **P05**；禁一夜 −15% |
| 对标 Comp 我们 OCC 高 8 个点 | §1.0 · T16 · 本表 | PMS 扣 OOO、STR 没扣 → 那 8 个点是假的。同口径才 MPI |
| 某一型看起来先卖穿 | §11 · P13 | 先扣该型 OOO，再谈压缩 |
| MinLOS/CTA 开着所以像没房 | §1.7 · P33 | 限制挡需求 ≠ 维修。先松限制，不砸 |

T06 理论+卡已 drafted。**P37 剧本 drafted**（2026-08-23 02:17）：`advisor-playbooks/ooo-capacity.md` · 仿真 `cases/sim-2026-ooo-occ-92-saturday.md`（**Hold 779–799 首选 799**）。中国报表名 / 维修房间夜仍 NV。P01–P36 正文不重写（P03/P05 仅文末 Remaining=可售 + P37 指针）。

## 43. Scout 06:17 交叉引用（2026-08-23 06:17 CST 追加，不改 1–16 枝骨架）

免费取消堆着不是弱需求：先挂本表，再走 P38。不是先砍 BAR 占量，也不是改已确认客人规则。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| OTB 看起来还行，但今晚全是免费取消，要不要先砍价占量 | §10 · 本表 | **P38** `cancel-policy-tighten.md` · `tighten-cancel-before-cut.md`：先当 Soft。收 **新单** 免费窗或推不可退。Hold BAR。禁止为锁量 dump |
| 入住前 3 天了还一堆随时退，降不降 | §10 · §9 · 本表 | DTA 短先收新单窗。真洗完才 **P05** 围栏。禁一夜 −15%。已确认随时退 **不暗改** |
| 订了又取消、OTB 还挺高要不要涨 | §10 · P14 | **P14** 诊断 Soft、停涨。窗口杠杆走 P38 |
| 预付打几折、哪些天开 | §10 · P19 | **P19** 产品。高峰关深折；弱日 −3–5%。不是先砍 BAR |
| 台风夜还要不要收取消窗 | §10 · P28 | **不收窗进不可抗力夜**，也不涨。走 P28 |
| 销售要把 BAR 砍到 699 锁随时退 | §14 · T19 · T20 | **拒绝 dump。** 无成本不说总比空着强。无声明底不发明 699。禁一夜 −15% |

P38 已 drafted。仿真 `cases/sim-2026-free-cancel-stack-dta3.md`：180 间 **Simulation**，8/26 周三 DTA3、OTB 130 中 110 随时退 → **Hold 779–799 首选 799**；新单收窗；可选预付 775（≥759）；拒绝 699；已确认不暗改。美团/携程免费取消截止点 / 罚金表仍 NV。

## 44. 理论深挖 08:17 交叉引用（2026-08-23 08:17 CST 追加，不改 1–16 枝骨架）

评分掉了先修不是先砍：先挂 §1.10 Product/口碑，再走 `theory/reputation-vs-price.md`。不是自动砍 BAR，也不是自动报今夜特价。排名页仍走 P35。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 评分从 4.8 掉到 4.3，要不要降价换量 | §1.10 · 本表 | **`reputation-vs-price.md`** · **`dont-cut-for-review-score.md`**：先修图、设施、近窗差评。默认 **Hold BAR**。无截图 **不发明 4.3** |
| 差评多了要不要报今夜特价 | §12 · P18 · 本表 | 整段 **P18**。谁出资、净价、砸不砸高峰。口碑 FOMO 不当门 |
| 排名掉了所以显得贵 / 流量没了 | §1.6 · P35 | **P35** 先查库存/比价/内容。评分可导致掉位，仍不先砍 BAR；评分→价格问本卡 |
| 截图隔壁便宜 80 | §13 · P36 | **P36**，不是口碑 |
| 评分掉了先把 BAR 砍到 −15% | §9 · P05 · 本表 | **拒绝。** 禁一夜 −15%。质量故障 ≠ η 高 |
| 评分掉但 Pace 仍 Ahead | 本表 · P09 | **不砍。** Hold / 只关不涨。先修体验 |
| 没有截图，销售说卫生分低于 4.7 | 本表 | 只给检查单。**4.7 红线 = NV/D**，不发明平台红线 |

理论卡已 drafted。P39 剧本 **本小时不写**（10:17 仍开）。美团/携程 4.7 卫生分红线 / 降 0.1 分转化% / 权重% 仍 NV。P01–P38 正文不重写（P35 仅文末一行指针）。

**P39 剧本 drafted**（2026-08-23 10:17）：`advisor-playbooks/review-score-drop.md` · 仿真 `cases/sim-2026-review-43-saturday.md`（**Hold 779–799 首选 799**；4.3 只在 Simulation）。主卡复用 `dont-cut-for-review-score.md`。4.7 红线仍 NV。P01–P38 正文不重写（P35 仅文末一行）。

## 45. Scout 14:17 交叉引用（2026-08-23 14:17 CST 追加，不改 1–16 枝骨架）

只订高峰单晚 / 连住均价贵了要砍周末：先挂 O10，再走 P40。不是自动接周六，也不是自动砍高峰。周末市场形状仍走 P11。节日日历仍走 P21。淡日限制过度仍走 P33。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 客人只订周六，周五周日空着，接不接 | O10 · 本表 | **P40** `stay-pattern.md` · `reject-sat-only-on-peak.md`：先问肩日还卖不卖。有需求 → **MinLOS=2 或 CTA**，拒单晚。肩日冰 → 接 Sat-only 才是增量 |
| 连住均价被周六拉高，客人嫌贵要砍周末 | O10 · §14 · 本表 | **拒绝砍高峰。** 周六 Hold。套内高峰夜不改成 699。中国 OTA 均价公式 **NV**，不编 |
| 周末该不该比周中贵 | §16 · P11 | **P11** 市场形状。stay-pattern 杠杆走 P40 |
| 国庆要不要限单晚 | O8 · P21 | **P21** 节日日历。不是每个周六 |
| MinLOS 开着但淡日入住率掉了，要不要降价 | §1.7 · P33 | **P33** 先松限制。不解已证实高峰 |
| 销售要把周六砍到 699 好卖三晚 | §14 · T19 · T20 | **拒绝 dump。** 禁一夜 −15%。无成本不说总比空着强。无声明底不发明 699 |

P40 已 drafted。仿真 `cases/sim-2026-saturday-only-vs-minlos.md`：180 间 **Simulation**，8/29 周六 Ahead+Fast、周五/周日肩日非冰 → **拒 Sat-only**；MinLOS=2；**Hold 779–799 首选 799**；拒绝砍到 699。中国 OTA 连住均价公式仍 NV。P01–P39 正文不重写（P11/P21/P33 仅文末一行）。

## 46. 理论深挖 16:17 交叉引用（2026-08-23 16:17 CST 追加，不改 1–16 枝骨架）

只订高峰单晚 / 连住均价好看：P40 仍是动作。**为什么** 拒 Sat-only = 瓶颈夜网络，估值尺 = `metrics/stay-network-value.md`（Hypothesis，非 STR 公式）。P11 = 市场形状；P40 = 杠杆；本卡 = 估值。不新开决策卡。长包房不走本枝。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 三晚均价很漂亮，为什么不接周六单晚 | O10 · 本表 | **T08** `pricing/los-optimization.md` §10 · `stay-network-value.md`：看高峰那一晚被谁占。肩日还卖 → Sat-only 置换。动作仍 P40 |
| 压缩夜价值怎么算 | O10 · 本表 | CNV = 客房收入 / 紧夜数（通常高峰记 1 不是 3）。STR 无此公式 |
| 要不要开 BAR-by-LOS | O10 · 本表 | 方法名 Vendor。本库默认日历 BAR + MinLOS/CTA。Duetto % 不进档 |

P40 正文不重写。中国 OTA 连住均价公式仍 NV。

## 47. 案例 18:17 交叉引用（2026-08-23 18:17 CST 追加，不改 1–16 枝骨架）

低价长包占周末：先挂 O10，再走 **P41**。不是一场 2–3 晚团（P10），不是机组某一个周六 extra（P31），不是协议码漏出（P26），不是一个 Sat-only（P40）。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 有人要包 15–20 间连住 30 天，单价很低，接不接 | O10 · 本表 | **P41** `long-stay-monthly.md` · `counter-or-reject-long-stay.md`：先数窗口里几个周末/活动夜。混合店周末仍卖 → **Counter 或拒**。没有保证付款不是 Contract |
| 长包 300/晚 vs 周末 BAR 799 | O10 · T19 · T20 · 本表 | **不要按 380/300 让出每个周六。** 公开周末 Hold。300/380 不是行情。无成本不说总比空着强 |
| 30×淡季均价还行所以接 | O10 · T08 · 本表 | **拒绝该理由。** 30 日价不是 30×平日。看紧夜 BAR/Pace |
| 这不就是一团吗 | O12 · P10 · 本表 | 短团走 **P10**。30 日占房产品走 **P41**。持续合同 ≠ 一场团 |
| 机组不是也低价长住 | O12 · P31 · 本表 | **P31** = allotment / 某一周六 extra。KEEP allotment ≠ KEEP 30 夜砸每个周六 |
| 协议客人周末用低价订 | §35 · P26 · 本表 | **P26** 围栏漏出。P41 是**新签** 30 夜块 |
| 客人只订一个周六 | O10 · P40 · 本表 | **P40** Sat-only。P41 是长包把**每一个**周六占住 |

P41 已 drafted。仿真 `cases/sim-2026-longstay-20x30-weekends.md`：180 间 **Simulation**，20×30@380 含 4 个 Pace Ahead 周六 BAR 799 → **Counter**（黑出周六；或高峰 560–650 首选 620 Hypothesis）；坚持全窗 @380 → **Reject**；公开周六 **Hold 779–799 首选 799**。中国月租价表仍 NV。P01–P40 正文不重写（P10/P31 仅文末一行）。

## 48. Scout 22:17 交叉引用（2026-08-23 22:17 CST 追加，不改 1–16 枝骨架）

前台跟 OTA 今夜价：先挂渠道/公开价枝，再走 **P42**。不是 P05 渠道 dump 本身，不是会员围栏（P23），不是 mix 配额（P25），不是跟竞对（P16）。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 前台问今晚 walk-in 打几折 | §12 · 本表 | **P42** `same-day-walk-in.md` · `dont-match-ota-dump-at-desk.md`：上门零佣金。未冰 → **报 BAR 或更高**。不要默认折 |
| OTA 今夜 399，前台要不要跟 | §12 · P05 · 本表 | **不要跟。** P05 可以开渠道 dump；前台是另一道围栏。零佣金去对齐倾倒毛价，净结构更差（P20） |
| 把 BAR 也改成 399，明天好卖 | §14 · T19 · T20 · 本表 | **拒绝。** 禁一夜 −15% 当永久 BAR。399 不是新公开基准（HSMAI BAR） |
| 今晚很空，前台不打折卖不掉 | §9 · P05 · 本表 | 先过 P05 排除。真冰才给 **当天前台围栏**，净仍须 > OTA dump 净且过 T19。仿真尺 699–719，不是 399，不是新 BAR |
| 会员也要今晚这个价 | §12 · P23 · 本表 | 出示会籍 → **P23**。无预约上门默认公开 BAR，不是会员码 |
| OTA 占比升了要不要把前台也降 | §12 · P25 · 本表 | **P25** mix 配额。一张上门单不改渠道战略 |
| 截图隔壁便宜 80 所以前台也要 399 | §13 · P36 · P16 | **P36** 先问同一口价；可比再 **P16**。跟的不是自己的 OTA dump |
| 399 总比空着强 | T19 · 本表 | **无三成本不说。** 未冰时空房不是反事实——上门已经能卖 BAR |

P42 已 drafted。仿真 `cases/sim-2026-walkin-vs-ota-399.md`：180 间 **Simulation**，8/29 周六当晚 OTB 68.9%、今日 Pickup +7、BAR 799、OTA dump 399、已有 1 张 walk-in@799 → **前台 Hold 779–799 首选 799**；拒绝跟 399；拒绝 BAR→399；形 B 699–719 仅反事实。中国前台折扣表 / 美团今夜 SOP 仍 NV。P01–P41 正文不重写（P05 仅文末一行：今夜特价 ≠ 前台 walk-in）。


## 49. 理论 00:17 交叉引用（2026-08-24 00:17 CST 追加，不改 1–16 枝骨架）

前台说赶过人 / 要不要凭拒客涨价：先挂需求/满房枝，**不要**直接 Increase BAR。过程 **P43** [`../advisor-playbooks/verbal-denials.md`](../advisor-playbooks/verbal-denials.md) · 指标 [`../metrics/denials-regrets.md`](../metrics/denials-regrets.md) · 卡 [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md)。不是 P42（上门已成交），不是 P03 用故事开门，不是 P33 该松限制时却加价。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 前台说今晚赶过好几拨人，要不要涨 | 本表 · **P43** | **P43 形 A：** 无日志 → Hold。口头 ≠ Demand。要 Stay Date / 件数 / 房型 / 原因。禁止一夜 +15% |
| 预订拒了很多电话，BAR 加一成 | 本表 · P03 | 先分容量 vs 限制 vs 价。真容量 + Pace Ahead + Remaining 紧 → **P03/P09**，不是本故事自动涨 |
| MinLOS/CTA 开着，很多订不了，所以需求很旺该涨 | §1.7 · P33 · 本表 | **先 P33。** 限制会制造拒单。非 Peak 先松限制。已证实 Peak 走 P40/P21，不解高峰 MinLOS，也不自动 +BAR |
| 今天 0 拒单，没人要，砸一刀 | §1 · P02 · 本表 | **0 拒单 ≠ 需求弱**（可能没记 / 价已高 / 限制挡在门外）。禁止一夜 −15% |
| 人已经在前台了，跟不跟 OTA 今夜价 | §12 · P42 | **P42**：已上门是捕获需求，不是拒单。未冰报 BAR 或更高 |
| 满了所以 Demand=Sold | §5 · unconstrained 卡 | Sold=100 ≠ Demand=100。无干净 Denied 至少写 ≥Capacity |
| 赶的是钟点客 | 本表 · **P44** | 口头钟点赶客不当过夜 Demand（P43）。开不开钟点、会不会占晚房 → **P44**。不编钟点价表 |

P43 已 drafted（2026-08-24 02:17）。仿真 `cases/sim-2026-fo-turned-away-no-log.md`：180 间 **Simulation**，8/29 周六当晚 OTB 65.6%、Remaining 62 不紧、无日志、BAR 799、拟议 899、口头「5 拨」仅该卷 → **Hold 779–799 首选 799**；开始记日志；拒绝 899；拒绝一夜 ±15%；不进 P03。中国拒单字段 / 拒单% / Walk 成本 / 华住 699 **NV**。钟点房走 P44。P01–P42 正文不重写（P03/P33/P42 仅文末一行）。

## 50. Scout 06:17 交叉引用（2026-08-24 06:17 CST 追加，不改 1–16 枝骨架）

钟点房占晚房：先挂库存/过夜夜，再走 **P44**。不是 P05 过夜渠道 dump，不是 P42 前台过夜口价，不是 P37 维修不可售，不是 P40 过夜 Sat-only（可偷同一晚）。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 下午钟点卖得很火，晚上散客还接不接 | 本表 · **P44** | **P44 形 A：** 先问晚上这间还能不能卖过夜。高峰/Ahead/剩余偏紧 → 关或紧限额钟点。过夜 BAR Hold。能交回才是增量 |
| 钟点 199 会不会砸晚班 BAR | §14 · T19 · T20 · 本表 | **不要把 199 写成过夜 BAR。** 禁一夜 −15%。199 只在 Simulation |
| 钟点要开到晚上 8–10 点 / 过夜钟点 | 本表 · T08 · P40 | **形 B：** 挡夜 = 便宜过夜，不是增量小时。高峰不开 |
| 周二白天钟点，晚上很空 | §9 · P12 · 本表 | **形 D：** 能交回或晚市冰，且净过 T19（含加一次 HK）才开。过夜 BAR 仍不改成钟点价 |
| 维修空房拿来开钟点 | §1.0 · P37 · 本表 | **P37。** 未释放 OOO 不是钟点库存 |
| 前台今晚跟不跟 399 | §12 · P42 | **P42** 过夜上门。钟点客不是过夜 walk-in |
| OTA 今夜过夜特价 | §9 · P05 | **P05** 过夜渠道 dump。钟点不是今夜过夜特价 |
| OCC 已经 108%，今晚是不是该再涨（8 个点是钟点再卖） | 本表 · **T05/T06 理论** | **不要按 108% 涨过夜 BAR。** 重算过夜 OCC/Remaining，再 P01/P03/P44。膨胀 OCC ≠ P37 缩分母 OCC。短卡 `dont-raise-overnight-off-dayuse-occ.md`。199/美团 SOP 仍 NV |

P44 已 drafted。仿真 `cases/sim-2026-dayuse-199-vs-sat-bar.md`：180 间 **Simulation**，8/29 周六 OTB 过夜 82.2% Ahead、Remaining 32、BAR 799、拟议钟点 199 到 20:00 挡晚到 → **关钟点**；过夜 **Hold 779–799 首选 799**；拒绝 199 当过夜。美团/携程钟点 SOP / 保洁分钟 / 199 行情仍 NV。P01–P43 正文不重写（P05/P42 仅文末一行：钟点房 ≠ 过夜 walk-in ≠ OTA 今夜过夜特价）。


## 51. 案例 10:17 交叉引用（2026-08-24 10:17 CST 追加，不改 1–16 枝骨架）

早会只追 OCC / 销售要今夜特价把会开顺：先挂组织/方法枝，再走 **P45**。不是新定价杠杆。GM OCC 虚荣 ≠ P37「分母抬高所以涨」、≠ P44 钟点产品（但早会必须扣 OOO、不混钟点）。预算差全砍走 T20。促销走 P18。口头拒单故事不当早会主叙事（P43）。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 早会到底看什么、说什么 | 本表 · **P45** | **三拍：** 今晚+三天过夜曲线、一个诊断、一个动作。不要十二件事。口播 6–8 句 |
| 店长要 OCC，销售要促销，你三分钟讲完 | 本表 · P37 · P18 | 回 **可售剩余和 Pace**，不回虚荣入住率。促销整段 **P18** |
| OCC 只有 82%，今晚砍一刀 | §1 · T20 · 本表 | **P45 形 A：** Pace On 且剩余不是冰 → **Hold BAR**。不要拿 82% 当刀。禁一夜 −15% |
| 报个 399 闪促，会比较好开 | §12 · P18 · 本表 | **P18。** 谁出资 Unknown 且深折 → **不报**。不要为会顺砍 BAR |
| 预算差了 / 完成率不够所以早会必须降 | §39 · T20 | **T20。** Budget ≠ 今夜 Pace。不要把早会开成行刑 |
| 维修空着 / 钟点卖了所以过夜也该便宜 | §1.0 · P37 · P44 · 本表 | 先重算过夜可售。OOO 不是 dump 对象。昨天钟点已交回则不混过夜 |
| 前台说赶过人，早会要不要涨 | §49 · P43 | **P43。** 无日志不涨。不是本会主叙事 |

P45 已 drafted。仿真 `cases/sim-2026-monday-huddle-gm-occ.md`：180 间 **Simulation**，8/24 周一早会、OTB 143/175=81.7% Pace On、Remaining 32、OOO 5、昨天钟点 8 已交回、BAR 799、拟议 399 出资未知 → **不砍**；**Hold 779–799 首选 799**；P18 Skip；观察 24h Pickup；拒绝一夜 −15%。华住早会 SOP / Cornell 日会讲义仍 NV。P01–P44 正文不重写。

## 52. Scout 14:17 交叉引用（2026-08-24 14:17 CST 追加，不改 1–51 枝骨架）

提前退房开特价 / 高峰续住：先挂超售库存枝，再走 **P46**。不是 P05 leftover 从未卖掉，不是 P24 已经在赶客，不是 P40 新订 Sat-only，不是 P42 干净空房 walk-in。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 今天有 8 间提前退房，今晚要不要开特价 | 本表 · **P46** | **P46 形 A：** 早离是库存回来，不是需求死了。先重算 Remaining。高峰/Ahead/仍紧 → **Hold BAR**，不开 dump。HK 未转房 ≠ 当前可卖 walk-in |
| 空出 8 间，挂个 399 清掉 / 改 BAR | §14 · T19 · T20 · 本表 | **不要把 ED dump 写成新 BAR。** 禁一夜 −15%。399 只在 Simulation |
| 夜本已弱、市场也冰、早离又加厚剩余 | §9 · P05 · 本表 | **形 B：** 然后且仅然后 **P05** 围栏，仍不是新公开 BAR |
| 客人要续住高峰周六 | 本表 · **P46** | **形 C：** 在和到店抢房。满房/超售 **拒或只按公开 BAR**。禁止老客 399 |
| 续住会把已确认到店挤走 | §8 · P24 · 本表 | **P24。** 不要用待客藏 Walk。P46 先拒或 BAR |
| 明天很空，客人想多住一晚 | §9 · 本表 | **形 D：** 按 BAR 或已发布 stayover 价接。不把 BAR 改低 |
| 前台把「应该会走」先卖给 walk-in | 本表 · OPERA Due Out | **形 E：** Due Out ≠ 空。未 checkout 不要卖两次 |
| 客人只订周六，周五周日空 | O10 · P40 | **P40** 新订 Sat-only。在店加夜走 P46 |
| 前台今晚 walk-in 打几折 | §12 · P42 | **P42** 干净空房。脏 ED 未转房不是 desk inventory |

P46 已 drafted。仿真 `cases/sim-2026-early-depart-8-vs-sat-bar.md`：180 间 **Simulation**，8/29 周六 OTB 97.8% Ahead、早离前 Remaining 4、ED 8 → 身份 12 但 8 脏、BAR 799、拟议 399 → **Hold 779–799 首选 799**；拒绝 399 dump；拒绝 399 续住占已派到店房（否则 P24）。华住 SOP / Marriott 中国费表 / Walk 金额 / 399 行情仍 NV。P01–P45 正文不重写（P05/P24/P40/P42 仅文末一行）。Walk 成本仍 NV。

## 53. 理论 16:17 交叉引用（2026-08-24 16:17 CST 追加，不改 1–52 枝骨架）

免费房抬高 PMS OCC / $0 分母拉低 ADR：先挂库存/口径枝，再走 **T-Comp** 卡。不是 P37 维修缩分母（永久 HU 仍 P37），不是 P44 钟点胀分子，不是 P46 付费早离回库，不是 P05 leftover dump。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| OCC 92% 还要不要涨（10 间免费/自用） | 本表 · **P47** · T-Comp | **P47。不按含 Comp 的 PMS OCC 涨 BAR。** 先拆无关免费。看付费剩余 + Pace（P01/P03/P45）。缺 Comp 数不编 10 |
| ADR 掉了要不要补涨 / 砍一刀把均价拉回来 | §14 · T19 · 本表 | **不要为修 ADR 砍或涨。** 重算付费 ADR = Room Revenue / (Occupied − unrelated comps)（Hypothesis）。STR ADR 分母本就不含无关 Comp |
| 免费房占着、看起来空，今晚砸一刀 | §9 · P05 · 本表 | **不要 dump Comp 占着的房。** P05 只砸付费 leftover。物理 Remaining 已减 Comp |
| 买二送一 / 团 50 送 1 要不要从 Sold 抠掉 | 本表 · STR Guidelines | **不要。** 促销/合同送夜 **计入** STR Sold。不是本卡 gratis 桶 |
| 经理公寓关了大半年 | §1.0 · **P37** | **P37。** Permanent House Use 6+ months 出 Available。不是本卡瞬态 Comp |
| 对标 Comp 我们 OCC 高几个点（本店含免费） | §1.0 · P37 · 本表 | 混口径不作 MPI。历史 STAR Sold 不含无关 Comp |
| OTB 已经 90% 所以涨（Forward 含 Comp） | X-OTB · 本表 | Forward Occupancy on the Books **可含** Comp/house use。不是历史 Sold OCC。不当涨价令 |
| 店长要 OCC，早会按 92% 切价 | §51 · P45 · 本表 | **P45：** 回付费剩余和 Pace。本卡解释 92% 为什么虚荣 |
| 今天有 8 间提前退房所以特价 | §52 · P46 | **P46。** 早离还的是付费房。Comp 不是回库 |

T-Comp 已 drafted（理论+指标+卡；**未写 P47**）。仿真 `cases/sim-2026-comp-occ-92-sat.md`：180 间 **Simulation**，8/29 周六、10 Comp、PMS OCC 92%、付费 ~86%、Remaining 14、BAR 799、拟议 899 → **Hold 779–799 首选 799**；拒绝 899 / 修 ADR / dump Comp。中国 PMS 字段名 / Comp % / 华住 SOP / 399 行情仍 NV。政府协议价仍未写。P01–P46 正文不重写（P37 理论文末一行：瞬态 Comp ≠ 永久 HU）。Walk 成本仍 NV。

**2026-08-24 18:17：** **P47** 满本剧本 drafted（`advisor-playbooks/complimentary-house-use.md`；主卡复用 `dont-raise-on-comp-occ.md`，不重写）。上表「T-Comp」调用现进 **P47**。形 A 假高峰不按 92% 涨；形 B 假剩余不 dump Comp；形 C 假 ADR 不修报表；形 D 促销送夜进 Sold；形 E 永久 HU → P37；形 F 高峰停新送免费（Hypothesis）。仿真仍 `cases/sim-2026-comp-occ-92-sat.md`：Hold 779–799 首选 799；第二拍拒绝 399 dump。政府协议价仍未写。中国 PMS 字段名 / Comp % / 华住 SOP / 399 行情仍 NV。Walk 成本仍 NV。

## 54. 理论 00:17 交叉引用（2026-08-25 00:17 CST 追加，不改 1–53 枝骨架）

政务/差旅协议价抬高 PMS OCC / 销售要把 BAR 跟到差旅标准 / 前台把公务员当免费：先挂客群/房价类枝，再走 **P48** / T-Gov 卡。不是 P47 $0 请客房，不是 P37 永久宿舍，不是 P31 机组合同，不是 P05 把 BAR 砍到协议价。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 政府协议住满了要不要涨 | 本表 · **P48** · T-Gov | **P48。不按含协议的 PMS OCC Increase BAR。** 看非协议 remaining + Pace（P01/P03）。缺协议间数不编 40 |
| BAR 要不要跟到差旅标准 | §14 · T20 · 本表 | **拒绝。** 协议价不是公开 BAR。GSA $110 = US Fact，不是中国锚。现行限额表 **NV** 不引用。本店协议价没给就问 |
| 这批公务员算不算免费房 | §53 · **P47** · 本表 | **有房价走合同/协议桶。P47 不吃。** $0 无关请客房才 P47 |
| 周六协议把 BAR 房占满，要不要开特价冲 OCC | §9 · P05 · 本表 | **禁止 BAR 砍到协议价。** 高峰建议限额/blackout（Hypothesis）。Hold 779–799 首选 799 |
| 经理公寓关了大半年 | §1.0 · **P37** | **P37。** 永久 HU ≠ 协议价 |
| 航司再加机组 | **P31** | **P31。** 机组 ≠ 政务差旅 |
| 企业协议周末漏出 | **P26** | **P26。** 客源是公司不是政府 |

T-Gov 已 drafted（理论+指标+卡；**未写 P48**）。仿真 `cases/sim-2026-gov-rate-sat-blackout.md`：180 间 **Simulation**，8/29 周六、协议 40@480（发明）、PMS OCC 92%、非协议 Remaining 14、BAR 799 → **Hold 779–799 首选 799**；建议限额/blackout；拒绝 BAR→480；拒绝当 Comp。GSA $110 未当中国 BAR。现行限额表仍 NV。华住政务价不编。P01–P47 正文不重写（P47/P31/P37 仅文末一行）。Walk 成本仍 NV。

**2026-08-25 02:17：** **P48** 满本剧本 drafted（`advisor-playbooks/government-negotiated-rate.md`；主卡复用 `dont-anchor-bar-to-gov-rate.md`，不重写）。上表「T-Gov」调用现进 **P48**。形 A 假高峰不按 92% 涨；形 B 拒绝 BAR=协议价或 GSA；形 C 误标 Comp → 纠正桶，P47 不吃；形 D 高峰限额/blackout + Hold 779–799 首选 799；形 E 永久 HU→P37 / gratis→P47 / 机组→P31 / 企业漏→P26；形 F 限额表 NV，问本店协议价。仿真仍 `cases/sim-2026-gov-rate-sat-blackout.md`：Hold 779–799 首选 799；第二拍拒绝 BAR→480。GSA $110 未当中国 BAR。现行限额表仍 NV。华住政务价不编。Walk 成本仍 NV。

## 55. Scout 06:17 交叉引用（2026-08-25 06:17 CST 追加，不改 1–54 枝骨架）

积分免房抬高 PMS OCC / 金卡空间可用升套房抢走 BAR 套房：先挂库存/客群枝，再走 **P49**。不是 P47 无关请客，不是 P13 付费房型差，不是 P23 会员 BAR，不是 P31 机组，不是 P48 政务协议。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 今晚积分免房 12 间，OCC 92% 还要不要涨 | 本表 · **P49** | **P49 形 A：** 不按含兑房的 PMS OCC Increase BAR。先算付费剩余 + Pace。缺兑房数不编 12 |
| 金卡都要免费升套房，套房卖空了散客怎么办 | 本表 · **P49** | **形 B：** 高峰/付费剩余紧 → 停空间可用升级（Hypothesis；已确认奖履约）。套房留给能付 BAR 的人。Hold 779–799 首选 799 |
| 积分客不是真需求，剩下标准房挂 399 | §9 · P05 · 本表 | **形 C：** 套房「空」是免费升级占用，不是 leftover。禁止 dump。禁一夜 −15% |
| 冰夜兑房来了要不要接 | §9 · 本表 | **形 D：** 弱市可接兑房（报销可能 > 空房贡献，金额 NV）。仍不把兑房价写成公开 BAR |
| 前台把积分免房开成 complimentary | §53 · **P47** · 本表 | **形 E：** 兑房可能有品牌报销，不是无关请客。纠正桶 |
| 金卡手册保证升套房 / 已确认升级奖 | 本表 · **P49** 形 F | **履约。** 未知则问。不发明 Marriott 中国网格。未确认的 SA 升级仍可停 |
| OCC 92% 里面是员工请客 | §53 · **P47** | **P47。** 无关 $0，不是兑房 |
| 标准卖空套房还开着、客人付差价 | **P13** | **P13。** 付费房型差 ≠ 免费升 |
| 会员价要不要跟公开 BAR | **P23** | **P23。** 会员 BAR ≠ 免费升级 |
| 航司再加机组 | **P31** | **P31** |
| 政府协议住满了 | §54 · **P48** | **P48** |

P49 已 drafted。仿真 `cases/sim-2026-award-upgrade-sat.md`：180 间 **Simulation**，8/29 周六、兑房 12、SA 升套房 8、PMS OCC 92%、付费 Remaining 14、BAR 799 → **Hold 779–799 首选 799**；停 SA 升级；不按 92% 涨；不 dump。华住积分结算 / 报销% / Walk 金额 / 限额表仍 NV。P01–P48 正文不重写（P47/P13/P23 仅文末一行）。

## 56. 理论 08:17 交叉引用（2026-08-25 08:17 CST 追加，不改 1–55 枝骨架）

会带房用便宜客房赢会议 / 会议室包了客房随便给 / 要把 BAR 改成会带房价：先挂团+功能空间枝，再走 **T-Meet** 卡。不是 P10 客房-only，不是 P30 婚宴，不是 T18 通用口号翻盘，不是 P22 会展肩日，不是 P48 政务协议。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 80 人会议只要 10 间房 | 本表 · **T-Meet** | **形 A：** 按**房块**置换，不按 80 人。无厅+餐贡献 → 不 Accept 低价房。厅付了可留会；客房 Counter |
| 会议室包了客房随便给 | 本表 · P10 · **T-Meet** | **不要。** 10 间高峰仍可挤 BAR。先拆厅 / 餐 / 占房 |
| 会带房 399 要不要改 BAR | §14 · T20 · 本表 | **拒绝。** 围栏块不是公开 BAR。Hold 779–799 首选 799。399 只 Simulation |
| 销售说用 399 就能赢下这场会 | T18 · 本表 | **无贡献不翻盘。** 赢会 ≠ dump BAR |
| 会议把 OCC 打高了要不要涨 | 本表 · P01/P03 | **形 B：** 不按参会 OCC Increase BAR。看 transient remaining |
| 周六 10 间会带房挤散客 | 本表 · P10 · **形 C** | 默认 Counter 或拒房留会。不 dump BAR |
| 周二很空，这场会带房接不接 | §9 · P12 · **形 D** | 会议可接（厅付了）。客房有贡献且 net>机会成本才 Accept 围栏块；**BAR 仍不改成 399**。无贡献 → Counter 客房 |
| 厅租再加一遍客房 | T18 · STR P&L | **形 E：** 厅/AV = Other F&B。套餐含厅只计一次 |
| 周六婚宴 40 间餐很高 | § / **P30** | **P30。** 社交宴会不是会带房 |
| 只要房不要厅 | **P10** | **P10** 客房-only |
| 政府协议住满了 | §54 · **P48** | **P48** |
| 展会前后两天跟不跟涨 | **P22** | **P22** 会展肩日 |

T-Meet 已 drafted（理论+指标+卡；**未写 P50**）。仿真 `cases/sim-2026-meeting-10-rooms-sat.md`：180 间 **Simulation**，80 人 / 10@399、F&B Unknown。周二 leftover 110 → 留会、Counter 客房、Hold 799、拒绝 BAR→399。周六 Remaining 14 → 拒便宜房 / Counter 779–799 首选 799；Hold 公开 BAR；不 dump。华住 SOP / 餐毛利 / 厅租行情 / 399 行情仍 NV。P01–P49 正文不重写（P10/P30/`accept-low-room-for-fnb.md`/`group-displacement.md` 仅文末一行）。Walk 成本仍 NV。

**2026-08-25 10:17：** **P50** 满本剧本 drafted（`advisor-playbooks/meeting-with-rooms.md`；主卡复用 `dont-dump-bar-for-meeting-rooms.md`，不重写）。上表「T-Meet」调用现进 **P50**。形 A 无贡献不 Accept 便宜房、厅付了可留会、客房 Counter；形 B 不按参会 OCC 涨；形 C 周末 Counter/拒房留会 + Hold 779–799 首选 799；形 D 工作日会议可接、客房有数字且 net 盖过才 Accept 围栏块、BAR 不改成 399；形 E 厅租不双计（STR Other F&B）；形 F 社交宴会→P30 / 客房-only→P10 / 政务→P48 / 会展肩日市场→P22。仿真仍 `cases/sim-2026-meeting-10-rooms-sat.md`：周二留会 Counter 客房 Hold 799 拒绝 BAR→399；周六拒便宜房 / Counter 779–799 首选 799。华住 SOP / 餐毛利 / 厅租行情 / 399 行情仍 NV。会带房模板仍 NV。RevPAS 未当 BAR。Walk 成本仍 NV。

## 57. Scout 14:17 交叉引用（2026-08-25 14:17 CST 追加，不改 1–56 枝骨架）

只要厅不要房 / 厅满了要涨 BAR / 厅包了散客随便卖 / 周末半天厅挤婚宴：先挂功能空间枝，再走 **P51**。不是 P50 会带房（有客房块），不是 P10 客房-only，不是 P30 婚宴客源，不是 T18 客房存在的通用闸主场景，不是 P22 会展肩日，不是 P44 钟点客房。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 只要会议室不要客房 | 本表 · **P51** | **P51：** 只要厅 ≠ 会带房。先问占哪段厅。无厅+餐贡献不接高峰厅 |
| 厅包了散客随便卖 | §9 · P05 · 本表 | **形 C：** 厅满 ≠ leftover。禁止因为厅忙 dump。禁一夜 −15%。禁 BAR→399 |
| 厅满了 OCC 才 40% 要不要涨 BAR | 本表 · P01/P03 | **形 A：** 不按厅满 Increase BAR。看 transient remaining + Pace。厅占用不抬客房 OCC |
| 本地公司包半天厅，周末挤婚宴怎么办 | 本表 · P30 · P50 · **形 B** | 黄金厅段默认 Counter 或拒厅，留给婚宴/带房会。不是 Accept 低贡献占厅 |
| 工作日厅空，这场只要厅接不接 | §9 · P12 · **形 D** | 用户给了贡献 → Accept 厅。**仍不因包厅涨 BAR，也不 dump** |
| 厅租再加一遍套餐 | T18 · STR P&L | **形 E：** 厅/AV = Other F&B。套餐含厅只计一次 |
| 其实要 10 间房赢会 | §56 · **P50** | **P50。** 会带房，不是本剧 |
| 只要房不要厅 | **P10** | **P10** 客房-only |
| 周六婚宴 40 间餐很高 | § / **P30** | **P30。** 社交宴会不是只要厅 |
| 展会前后两天跟不跟涨 | **P22** | **P22** 会展肩日 |
| 下午钟点很火 | **P44** | **P44。** 钟点是客房，不是厅 |
| 政府协议住满了 | §54 · **P48** | **P48** |

P51 已 drafted。仿真 `cases/sim-2026-catering-only-sat.md`：180 间 **Simulation**，80 人只要厅。周六 Remaining 14 → 拒/Counter 高峰厅、Hold 779–799 首选 799、不按厅满涨、不因厅忙 dump。周二 leftover 110 → Accept 厅、Hold 799、不因包厅涨。华住 SOP / 餐毛利 / 厅租行情 / 399 行情仍 NV。P01–P50 正文不重写（P50/P30/P10/`accept-low-room-for-fnb.md` 仅文末一行）。Walk 成本仍 NV。wash % 本店仍 NV（MEDIUM 登记）。RevPAS / ConPAST 未当 BAR。

**2026-08-25 16:17：** Diagnose 尺见 **T-Hall** `theory/function-space-occupancy.md`（厅日记满了不是客房更紧；RevPAS/ConPAST 是功能空间尺，不是 BAR）。主卡仍复用 `dont-raise-bar-on-full-hall.md`，不重写。用户说「厅满了 OCC 才 40% 要不要涨」「RevPAS 低所以客房该降」→ Situation 写成两把尺；Diagnosis 写成厅不进客房 OCC；What To Watch 写成 transient remaining + Pace，不是厅占用%、不是假 RevPAS 点。occ.md 误读行已追加。**不写 P52。** wash MEDIUM 只登记。P51 过程不重写（仅头一行指向理论卡）。

## 58. 案例 18:17 交叉引用（2026-08-25 18:17 CST 追加，不改 1–57 枝骨架）

团块没 pickup / cutoff 前要降价补 / 合同块把 OCC 打到 90% 要涨 / cutoff 过了要砸 / 销售要关散客等团：先挂团库存枝，再走 **P52**。不是 P10 接不接团，不是 P50 会带房赢会，不是 P51 只要厅，不是 P14 散客高取消，不是 P31 机组 allotment，不是 P05 在释放前 dump。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 团订了 50 间只 pickup 了 28，cutoff 还没到，要不要降价补 | 本表 · **P52** | **形 B：** 未 pickup ≠ 已卖需求。Cutoff 前禁止 dump BAR 填洞。先问 cutoff 哪天、已 pickup 几间、night audit 会不会放回大房 |
| PMS 看起来 90% 全是团占的，要不要涨 | 本表 · P01/P03 | **形 A：** 不按合同块 OCC Increase BAR。先算已 pickup 后的付费剩余 + Pace |
| cutoff 过了放出 20 间，砸不砸 | §9 · P05 · 本表 | **形 C：** 须真释放落地。remaining 厚且 Pace Behind 才评 P05。禁止 BAR→399。禁一夜 −15% |
| cutoff 日过了但房还锁着 | 本表 · **形 D** | **不要当 leftover。** 问 Allotment Cutoff night audit / RETURN BLOCK TO HOUSE 是否已跑 |
| 销售说团肯定会来齐，先关散客 | 本表 · **P52** | **拒绝。** 未 pickup 不是关散客令 |
| 销售说放出会罚 | 本表 · **形 E** | 问合同条款；金额 NV 不编；仍不要把 BAR 写成团价去填洞 |
| 这个团接不接 | **P10** | **P10。** 接团本身，不是 cutoff |
| 80 人会议只要 10 间房 | §56 · **P50** | **P50。** 会带房赢会，不是本剧 |
| 只要会议室不要客房 | §57 · **P51** | **P51。** 只要厅，不是团客房块 |
| OTB 里全是随时退的散客 | **P14** | **P14。** 散客高取消 Soft OTB ≠ 团未 pickup |
| 航司再加机组 | **P31** | **P31。** 机组 allotment ≠ 一场团 cutoff |
| 周六婚宴 40 间 | **P30** | **P30** |

P52 已 drafted。仿真 `cases/sim-2026-group-wash-sat.md`：180 间 **Simulation**，块 50@499 pickup 28 洞 22、cutoff 次夜、remaining 14 Pace Ahead、PMS OCC ~90% → **Hold 779–799 首选 799**；不按团 OCC 涨；cutoff 前不 dump 399。释放后 Ahead 仍 Hold；Behind 才评 P05。本店 wash% / 罚金 / 华住 cutoff SOP 仍 NV。50/28/22/499/399/799 Simulation only。399 = 被拒绝的 dump。P01–P51 正文不重写（P10/P50/P14/P31/P05 仅文末一行）。Walk 成本仍 NV。16:17「不要写 P52」= 不要复写 P51；本槽是 cutoff 过程，不是只要厅。

## 59. Scout 22:17 交叉引用（2026-08-25 22:17 CST 追加，不改 1–58 枝骨架）

暂定团把 OCC 画面打满要涨 / 没转 Definite 要 dump / 销售要先锁暂定别卖散客 / 弱暂定也要关散客：先挂团状态枝，再走 **P53**。不是 P10 接不接团，不是 P52 已扣库存的 pickup vs cutoff，不是 P50 会带房赢会，不是 P51 只要厅，不是 P14 散客高取消，不是 P31 机组 allotment。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 暂定团占了 40 间，OCC 看起来很满要不要涨 | 本表 · **P53** | **形 A：** 不按暂定画面 OCC Increase BAR。先问会不会从可售扣掉。不扣则看真 remaining + Pace |
| 销售说先把暂定锁上别卖散客 | 本表 · **P53** | **形 B：** 未转 Definite、不扣库存 ≠ 已卖。高峰不要关公开 BAR 给 Hold。Hold 779–799 首选 799 |
| Tentative 没转 Definite，散客卖不动 / 反正是暂定 dump 399 | §9 · P05 · 本表 | **形 C：** 未扣库存的房本来就可卖 BAR。禁止 dump 399。禁一夜 −15% |
| 弱暂定也要关散客 | 本表 · **形 B** | **拒绝。** IDeaS Weak Tentative / Tentative / Hold 不扣库存（Vendor inbound，不是华住 SOP） |
| 这张是 Strong Tentative / 会扣库存 | 本表 · **P52** | **形 D：** 当 Definite 侧，走 P52 pickup vs cutoff，不是「暂定就能卖」。不要 dump |
| 只说「暂定团」，不知扣不扣 | 本表 · **形 E** | **问**会不会从可售里扣掉。本店 PMS 状态名 NV。不编华住 暂定/确认 字段表。扣了走 P52，没扣当暂定 |
| 这个团接不接 | **P10** | **P10。** 询价 Accept/Reject/Counter，不是状态轴 |
| 团订了 50 pickup 28 cutoff 还没到 | §58 · **P52** | **P52。** 已扣库存的 cutoff，不是本剧 |
| 80 人会议只要 10 间房 | §56 · **P50** | **P50。** 会带房赢会 |
| 只要会议室不要客房 | §57 · **P51** | **P51。** 只要厅 |
| OTB 里全是随时退的散客 | **P14** | **P14。** 散客高取消 Soft OTB |
| 航司再加机组 | **P31** | **P31** |

P53 已 drafted。仿真 `cases/sim-2026-tentative-sat.md`：180 间 **Simulation**，Tentative 40、真 remaining 50（若不扣）、画面 remaining 10 OCC ~94%、BAR 799 → **Hold 779–799 首选 799**；不按暂定 OCC 涨；不锁 BAR 给 Hold；禁 dump 399。若用户确认 Strong Tentative 扣库存 → P52 不 dump。本店 PMS 状态名 / wash% / 华住字段表仍 NV。40/50/399/799 Simulation only。399 = 被拒绝的 dump。IDeaS 标 Vendor RMS inbound。P01–P52 正文不重写（P52/P10/P05 仅文末一行）。不是 P52 重写。不写第二本 wash。


**2026-08-26 00:17：** Diagnose 尺见 **T-Status** `theory/group-inventory-deduct.md`（暂定画面满了不是客房已卖掉；先问这张块从可售里扣不扣）。主卡仍复用 `dont-raise-on-tentative-occ.md`，不重写。用户说「暂定占了 40 间要不要涨」「先锁暂定别卖散客」→ Situation 写成两个库存（deduct vs display）；Diagnosis 写成不扣则画面 ≠ 已卖、强暂定扣了走 P52；What To Watch 写成真 remaining + Pace，不是画面 OCC%。occ.md 误读行已追加。**不写 P54。** wash% 仍 NV。P53 过程不重写（仅头一行指向理论卡）。

## 60. 案例 02:17 交叉引用（2026-08-26 02:17 CST 追加，不改 1–59 枝骨架）

散客当天没到要降价补 / 跟团 wash 一样先砍 / 今晚空了就该砸 / OTB 满结果没到要涨：先挂当天未到枝，再走 **P54**。不是 P14 到店前取消，不是 P52 团 allotment wash，不是 P24 一夜报复改卖限，不是 P05「因为 no-show」，不是 P46 早离，不是 P53 暂定扣库存。

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 今天 8 间 no-show 了，要不要降价补 | 本表 · **P54** | **形 A：** 禁止因刚 no-show dump。先看释放后 remaining + Pace。仍紧或 Ahead → Hold 779–799 首选 799 |
| OTB 看起来满，结果没到（要涨） | 本表 · P01/P03 | **形 B：** 不按含尚未到达的 OTB OCC Increase BAR |
| no-show 释放后空房很多，砸不砸 | §9 · P05 · 本表 | **形 C：** remaining 厚且 Pace Behind 才评 P05。禁止 BAR→399。禁一夜 −15%。理由是 leftover，不是「因为 no-show」 |
| 散客总 no-show，跟团 wash 一样，BAR 先砍 | 本表 · **P52** | **形 D：** 分开。具名散客未到 ≠ 团 allotment 未 pickup。团走 P52 |
| 超售就是因为 no-show，今晚空了就该砸 | 本表 · **P24** | **形 E：** 卖限用历史 no-show 预期，不因一夜。Walk $ NV |
| OTB 里全是随时退的散客（到店前） | **P14** | **P14。** Soft OTB ≠ 当天没到 |
| 团订了 50 pickup 28 cutoff 还没到 | §58 · **P52** | **P52。** 团 wash / cutoff |
| 今天空出 8 间提前退房 | §52 · **P46** | **P46。** 已在店早离 ≠ 从未到店 |
| 暂定团占了 40 间要不要涨 | §59 · **P53** | **P53。** 状态轴 / 扣库存 |
| 前台今晚 walk-in 跟不跟 OTA 399 | **P42** | **P42** |
| 维修房看起来空 | **P37** | **P37** |

P54 已 drafted。仿真 `cases/sim-2026-noshow-sat.md`：180 间 **Simulation**，Sat 8 no-shows、remaining 22 Pace Ahead → **Hold 779–799 首选 799**；禁 dump 399；不跟 wash 混；不按含未到 OCC 涨。Behind 枝 remaining 40 → 才评 P05。本店 no-show% / 5% / 10% / wash% / Walk $ 仍 NV。8/22/40/399/799 Simulation only。399 = 被拒绝的 dump。P01–P53 正文不重写（P14/P24/P05/P52/P46 仅文末一行）。00:17「不要写 P54」= 不要复写 P53；本槽是当天散客未到。


## 61. Scout 06:17 交叉引用（2026-08-26 06:17 CST 追加，不改 §1–60）

担保 vs 非担保 / 6 点保留占着 / 到点会放所以提前砍 / 高峰只收担保：走 **P55**。

| 用户原话 | 形 | 调用 |
| --- | --- | --- |
| 一半是 6 点保留，算不算卖了 | A | 拆 guarantee mix；不按含非担保 OCC 涨 |
| 反正会放，现在 399 | B | 禁止提前 dump；Hold 779–799 首选 799 |
| 放房后厚且 Behind | C | P05；理由是真 leftover |
| 高峰只收担保 | D | 只改新生产，不改已确认客人 |
| Rolling No Show | E | 问本店控制；重算真 remaining |
| 已 no-show/卖限/取消窗/预付/前台/团块 | F | P54/P24/P38/P19/P42/P53 |

OPERA = Vendor PMS/store-configured，不是华住 SOP。本店类型/放房点/押金% NV。120/18/14/399/799 Simulation only；399 rejected。

## 62. 放房点之前的 hold 掺高 OTB（2026-08-26 08:17 CST 追加，不改 §1–61）

**画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放。** 诊断尺见 **T-Guar** `theory/guarantee-release.md`；过程仍 **P55**（§61，本节不复写六形）。占不占可售由本店把 reservation type 配成 **Deduct / Non-Deduct** 决定，不由「担保 / 非担保 / 6 点保留」这几个字决定（OPERA = **Vendor PMS、store-configured**；4 PM / 6 PM 是厂商示例，**不是中国放房点**）。**释放是事件，不是预测。**

| 用户原话 | 先挂 | 再调用 |
| --- | --- | --- |
| 今晚一半是 6 点保留，算不算卖了 | 本表 · T-Guar | 放房前 OTB 是**混合量**：已承诺需求 + 到点蒸发的 hold。拆间夜（不要 %）。**不按混合 OCC Increase BAR** |
| 反正到点会放，现在先降 / 先挂 399 | 本表 · **P55 形 B** | **释放没落地 → 真 leftover 不存在。** 禁止提前 dump，禁止 BAR→399 |
| 「担保」这个词就代表扣库存吧 | 本表 | **词不决定机制。** 问本店 Deduct / Non-Deduct 映射（**NV**），别套 OPERA 类型名当华住字段 |
| 6 点放房是行业规矩吧 / 中国都这样 | 本表 | OPERA 4 PM / 6 PM 是**厂商示例**；roommaster「often 4 or 6 PM」是**厂商概述**。本店 **Release Time 是配置值，NV** |
| 画面还占着，客人应该到了 | 本表 · **P55 形 E** | **Rolling No Show** 可能把到达日往后滚 → 占用持续、无真实到店。问本店控制，重算真 remaining |
| 高峰是不是只收担保单 | 本表 · **P55 形 D** | 担保闸只改**新生产**（要求担保媒介 / 开浅预付），**不追溯改已确认客人条款** |
| 放房后空了很多，砸不砸 | §9 · **P05** | **形 C：** 释放落地 + remaining 厚 + Pace Behind 才评 P05；理由写「真 leftover」，不是「反正非担保」 |
| 放房后还是很紧 | **P01 / P03** | 真 remaining 薄或 Pace Ahead → P01 / Hold |
| 今天有人没来（已发生） | §60 · **P54** | **ex-post。** 不是本节。过账 §30；STR 不计 Sold（§22） |
| 超售/赶客要不要按这个定 | **P24** | 卖限用**历史** no-show 与 last-minute cancellations（HSMAI 同向）。Walk $ **NV** |
| OTB 里全是随时退的散客（到店前） | **P14** | Soft OTB ≠ 到点释放。改新生产窗口 → P38；预付产品 → P19 |
| 暂定团占了 40 间要不要涨 | §59 · **P53** | 团块状态轴（**T-Status**，本节的上一层） |
| 免费/自用 / 维修 / 厅满 掺的 OCC | **P47 / P37 / P51** | 同族「分母/分子不干净」：T-Comp / T06 / T-Hall |

T-Guar 已 drafted（理论，不是新剧本）。仿真复用 `cases/sim-2026-6pm-hold-sat.md`：180 间 **Simulation**、OTB 120（含 18 间非担保/6pm hold）、画面 remaining 14、BAR 799 → 放房前 **Hold**，不按混合 OCC 涨、不提前 dump；放房后薄/Ahead → P01/Hold，厚且 Behind → 才评 P05。本店类型表 / Deduct 映射 / 实际放房时点 / Rolling 控制 / 今晚非担保间夜 **均 NV**。押金% / no-show% / hold 转化率 / Walk $ **禁止发明**。180/120/18/14/399/799 **Simulation only**；**399 = 被拒绝的 dump，不是推荐 BAR**。不重写 P01–P55 正文（P55 仅头一行）。**不写 P56。**

## 63. 「差几个点出租率」不是降价理由（2026-08-26 10:17 CST 追加，不改 §1–62）

月底是账期边界，不是需求事实。先走 **P56**，逐夜拆 OTB / Pickup / Pace / Remaining，再算 MTD 缺口物理可达性与 blanket cut 稀释。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 还差几个点 OCC，最后几天全促销 | 月度目标≠逐夜需求 | P56；Ahead/薄夜剔除 |
| 本月差收入，先把量做出来 | OCC↑不保证 Revenue/RevPAR↑ | `mtd-pace-vs-budget.md` + dilution 门 |
| 下月再涨回去 | 恢复不是自动发生；可能借下月量 | T20 rate recovery |
| 某夜 Behind、厚且没 Pickup | 这夜可以有界刺激，理由是该夜需求 | P02/P05 |
| 限制挡单 | 假弱 | P33 先解限制 |
| public 低于 member | 公平/倒挂 | P23 |
| 缺口全满也装不下 | 物理不可达 | 改 Forecast / 预期，不更深降价 |

主卡：`recommendations/dont-dump-to-hit-month-target.md`。本店预算表、考核指标、奖金口径、变动成本均 **NV**。399 仅 Simulation rejected dump。

## 64. 「RGI 掉了」不是降价理由（2026-08-26 14:17 CST 追加，不改 §1–63）

份额指数是事后尺，不是今夜需求。先走 **P57**，问集合是谁、哪段日期、口径是不是 STR；读 MPI / ARI / RGI 组合；再按今夜 Pace / Pickup / Remaining 走 P01 或 P05。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| RGI 掉了是不是该降价抢份额 | 份额尺 ≠ 定价按钮 | P57 形 A；先审 Comp Set 与日期窗 |
| MPI 不到 100 说明定价高了 | 可能是产品/事件/关房/选弱 Comp | P57 形 B；拆三指数 |
| STAR 说 ADR 指数低，跟竞对对齐一下 | ARI 不是 BAR 目标 | P57 形 C |
| 这个月份额丢了，最后几天一起 dump | 月报 ≠ 今夜 | P57；Ahead 夜 P01 Hold |
| 一周指数抖了所以战略失败 | 活动日或一家 Comp 关房就会抖 | P57 形 D；不周报改价 |
| Comp 里塞了奢华店 / 姐妹店 | 集合被人为压低或抬高 | P57 形 E；先改集合 |
| 本店 OCC 对不上 STAR Comp | 分母不同 | P57 形 F；对齐口径 |
| 截图隔壁便宜 80 | shop ≠ STAR | **P36** |
| 竞对今晚满了 | 今夜满房 | **P15** |
| 竞对在砍我们要不要跟 | 价格战 | **P16** |
| OTA 排名掉了 | 排名 | **P35** |
| 评分掉了 | 口碑 | **P39** |
| 还差几个点 OCC 月末全促销 | 预算目标 ≠ 份额指数 | **P56** |
| 某夜 Behind、厚、没 Pickup | 该夜可以有界刺激 | **P05/P02**；理由是该夜需求 |

主卡：`recommendations/dont-cut-to-chase-rgi.md`。本店 Comp Set / 是否订阅 STR / 中国非 STR 对标法 **NV**。不编中国官方同名指数。92/88/104/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。

## 65. 「切房卖不掉不是降公开 BAR 的理由」（2026-08-26 18:17 CST 追加，不改 §1–64）

切房是合同桶，不是公开需求。先走 **P58**，问扣不扣可售、合同几点还、今晚 pickup 几间；两桶分开；高峰还/缩未卖切房，公开 Hold；释放落地后再按公开 Pace 走 P01 或 P05。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 切了 15 间卖不掉，公开价降一点一起出 | 两套价栏揉成一个 OCC | P58 形 B；禁止 dump；Hold 779–799 首选 799 |
| 美团还占着，我们看起来没房了 | 扣库存的切房假满 | P58 形 A；还/缩切房，不砍 BAR |
| 高峰把切房关了放回来 | 库存动作，不是降价令 | P58 形 C；还房 + 公开 Hold / P01 |
| 切房不扣可售 | 公开 remaining 已是真剩余 | P58 形 D；公开走 P01/P05；切房走合同 |
| 还房后厚且 Behind | 真 leftover | P05；理由是公开 Pace，不是消化切房 |
| 团订了 50 只 pickup 了 28 | 团块 cutoff | **P52** |
| 这个促销冲切房要不要报 | 报名闸 | **P18** |
| 哪个渠道毛高要保 | 净价 | **P20** |
| OTA% 升了收配额 | mix 战略 | **P25** |
| 某房型卖穿 | 房型 nest | **P13** |
| 高峰还开盲盒 399 | opaque 围栏 | **P27** |

主卡：`recommendations/dont-dump-bar-to-clear-allotment.md`。本店切房合同 / 扣不扣 / 还房时点 / 美团·携程切房 SOP **NV**。不编华住切房政策、allotment %、佣金%。180/12/15/3/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。Rate parity 仍是 T11 缺口，**不开 P59**。


## 66. 「OTA 比官网便宜不是自动砍官网」（2026-08-26 22:17 CST 追加，不改 §1–65）

OTA 比官网便宜，先问是不是同一产品；不可比走 **P36**。真破平走 **P59**：修便宜侧 / 映射 / 促销，**不要默认砍 Brand.com 对齐**。Hold 官网 779–799 首选 799。Gross 对齐 ≠ Net 划算（P20）。合同罚则 **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 美团比官网便宜 80，破平了要不要跟 | 先问可比 | 不可比 → **P36**；可比 undercut → **P59** 修侧 Hold 官网 |
| 把官网也砍到一样 | 默认对齐砍直销 | P59 形 B；禁止；Hold 779–799 首选 799 |
| Booking 说我们违约要罚 | 合同恐吓 | P59 形 E；问条款（NV）；仍先修侧 |
| 会员/预付/打包更低 | 围栏 | 不是破平 → **P23/P19/P27** |
| Gross 平了但净亏 | 毛≠净 | **P20** |
| Pace Ahead 仍要砍「价平」 | 假借口 | **P01** Hold |
| 竞对更低要不要跟 | Comp 价格战 | **P16** |
| 排名掉了砍价 | 排名 | **P35** |
| 前台跟 OTA dump | 前台口价 | **P42** |
| 切房卖不掉所以降公开价 | 切房桶 | **P58** |
| 报个促销把价平修回来 | 报名闸 | **P18** |

主卡：`recommendations/dont-cut-brand-to-match-ota-undercut.md`。本店价平条款 / 美团·携程违约罚则 / 佣金差 **NV**。不编华住价平 SOP、违约金%、弹性。180/14/719/399/799 Simulation only。399 = 被拒绝的 dump。719 = OTA undercut，不是推荐 Brand.com。Hold 779–799 首选 799。**不开 P60。**


## 67. 「错推低价不是市场价格」（2026-08-27 02:17 CST 追加，不改 §1–66）

线上出现远低于意图 BAR 的价，先问是不是 **本打算卖的**（房型码、价格码、促销开关、CM 映射）。错推 / 错映射 / 促销忘关 / 测试价走 **P60**：先停错码、修映射，**不要把 Brand.com 对齐到错误价**。Hold 意图 BAR 779–799 首选 799。已订错价单问本店（NV）。修好后再按真 Pace 走 P01 或 P05。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| CM 把标准房推成了 399 | 错映射 / 错码 | **P60** 停错码；Hold 779–799 首选 799 |
| 映射错了美团在卖错房型价 | 错推不是市价 | P60；399 不是清市场价 |
| 错价已经出去了官网要不要跟 | 要把事故写成官网价 | P60 形 A；禁止；不要「先跟再改」 |
| 已经卖了不能破平 / 不能装没看见 | 破平假警报 | 错误 → **P60**；真可比故意 undercut → **P59**；不可比 → **P36** |
| 前台客人拿着 399 截图要跟 | 口价 | **P42**；错价也不跟 |
| 这个促销忘了关 | 误开 | P60 形 D；报名闸仍 **P18** |
| 399 进得快该夜该砸 | 错价当 Pace | 修好后才评；Ahead → **P01**；真弱 → **P05** |
| 竞对也 399 | Comp | **P16** |
| 套房比标准还便宜 | 产品梯 | **P34**（若是映射则回 P60） |
| 切房卖不掉所以降公开价 | 切房桶 | **P58** |

主卡：`recommendations/dont-match-error-rate.md`。本店 CM 字段名 / 美团映射 SOP / 华住 SOP / 退改表 **NV**。不编佣金%、弹性。180/14/399/799 Simulation only。399 = 错误价 + 被拒绝的 dump。Hold 779–799 首选 799。**不开 P61。**


## 68. 「套房空着不是免费升的理由」（2026-08-27 06:17 CST 追加，不改 §1–67）

空着的套房差价是可卖的，不是必须送掉的人情。先走 **P61**：问标准紧不紧、套房剩几间、付费升还是会员免费升；高峰默认报价付费升；Hold 套房/标准公开 BAR；不要套房→399。会员免费升走 **P49**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 反正套房空着，免费升了得了 | 高峰把可卖差价当人情 | **P61** 形 A；默认付费报价 |
| 标准卖满了套房降到 399 出 | leftover 借口砸公开梯 | P61 形 B；先付费升 + Hold；真弱才 P05 |
| 客人要升，给个 50 块意思一下 | 象征价 | P61 形 C；贴类型差；本店价表 NV |
| 金卡都要免费升套房 | 免费 SA | **P49** |
| 升房收入不算，别麻烦 | 假口径 | P61 形 E；仍推（T19） |
| 某房型卖穿要关型 | 卖梯保护 | **P13** |
| 套房比标准还便宜 | 倒挂 | **P34** |
| 员工/业主请客占房 | Comp | **P47** |
| 前台跟 OTA 今夜 399 | walk-in 口价 | **P42** |
| 套房真弱、标准也松 | 弱市刺激 | 付费升仍优先；围栏促销 **P02/P19** |

主卡：`recommendations/dont-give-away-paid-upgrade.md`。本店升房价表 / 华住 upsell SOP **NV**。不编 Fact +¥ 行业常模、佣金%。180/4/10/799/999/399/+200–300 Simulation only。399 = 被拒绝的 suite dump。Hold 标准 779–799 首选 799；套房公开 979–999 首选 999（Simulation）。**不开 P62。**


## 69. 「取消重订不是降价理由」（2026-08-27 10:17 CST 追加，不改 §1–68）

取消后同住再订更低价，是对自己价格曲线的套利，不是新需求。先走 **P62**：拆真取消 vs 同住重订；Pace Ahead → Hold 公开 BAR 779–799 首选 799；不要为了「别让他们取消」先砍公开价；本店同住改订是否吃新价 = **NV**；未来高峰日期评 **P38/P19**。真弱才 **P05**。无重订的高取消走 **P14**。没到走 **P54**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 客人取消了又订回来更便宜，要不要认 | 同住套利；政策 NV | **P62**；问本店政策；Ahead Hold |
| 干脆降价让他们别取消 | 预防性砍价制造套利 | P62 形 B；禁止；Hold 779–799 首选 799 |
| 免费取消的就别涨了 | 把套利写成永久停涨 | 已订 Soft 邻 **P14**；新生产高峰仍可 **P38/P19** |
| BAR 砍到 599 / 399 别再被刷 | 跟重订价 / dump | P62 形 E；拒；599≠新 BAR；399=被拒绝的 dump |
| 取消很多但没人订回来 | Soft 空房诊断 | **P14** |
| 今天 8 间没到要不要砸 | no-show | **P54** |
| 取消后真的剩很厚且 Behind | leftover | **P05**；理由写 Pace，不写「别被刷」 |
| 早会怎么办 | 一个动作 | **P45**：Hold BAR + 政策旗标 + 前瞻 P38/P19 |

主卡：`recommendations/dont-cut-to-stop-cancel-rebook.md`。本店改订吃新价政策 / 华住取消重订 SOP **NV**。不编罚金%、佣金%。180/8/7/14/599/399/799 Simulation only。399 = 被拒绝的 dump。599 = 重订价，不是推荐 BAR。Hold 779–799 首选 799。**不开 P63。**

## 70. 「做不完房不是降价理由」（2026-08-27 14:17 CST 追加，不改 §1–69）

账面还能卖、保洁/前台却做不完或接不完，是**供给/吞吐顶**，不是弱需求。先走 **P63**：问今晚卡的是需求还是人手产能（能翻几间、最晚进房、已排几班）；产能顶 → 收口可售或停售超额到达，Hold 公开 BAR 779–799 首选 799；不要为了「少接一点」dump 到 399。本店人效/班次 = **NV**。真弱且产能也松才 **P05**。维修离线走 **P37**。卖过产能走 **P24**。钟点挤窗走 **P44**。早离回库走 **P46**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 保洁不够，别卖满 | 产能顶，不是弱需求 | **P63** 收口到达；Hold 779–799 首选 799 |
| 人手不够先降价少卖点 | 便宜量仍耗翻房 | P63 形 B；禁止；收口件数不砍价 |
| 今天只能做 120 间，多了别接 | 吞吐上限 | P63；用停售/收口，不 dump |
| 做不完所以 BAR→399 清掉 | 供给顶当 leftover | P63 形 A；拒；399=被拒绝的 dump |
| 维修关了 20 间 OCC 好看 | 物理离线 | **P37** |
| 真剩很厚且 Behind、班次也松 | leftover | **P05**；理由写 Pace，不写「做不完」 |
| 已经卖过今晚能翻的到达 | Walk 风险 | **P24**；Walk $ NV |
| 下午钟点占了翻房窗 | 钟点挤窗 | **P44** |
| 早离刚回几间今晚砸不砸 | 回库事件 | **P46** |
| 早会怎么办 | 一个动作 | **P45**：Hold BAR + 问还能翻几间 + 收口到达 |

主卡：`recommendations/dont-dump-when-staff-capped.md`。本店人效 / 班次 / 华住做房 SOP **NV**。不编间/人常模、分钟/间、wage、Walk $。180/22/12/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P64。**


## 71. 「低价档还开着 / 关低不等于涨BAR」（2026-08-27 18:17 CST 追加，不改 §1–70）

Nested 通常允许高档抽用低档未保护容量。关/限低档是保护更高支付意愿，**不是**涨公开 BAR 本身。涨了 BAR 但低档/促销还挂着 = 等于没涨。先问 **nested / shared / dedicated**（NV）；结构不明只动看得到的公开价。高峰 Ahead：先关/限仍开着的深折低档，再谈是否涨 BAR；Hold 779–799 首选 799。弱夜把低档关光只留高 BAR 空转 → 打开有围栏低档或走 **P05/P02**，不是再涨。错映射假低价 → **P60**。不要因为「嵌套太复杂」把 BAR dump 到 399。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 低价还开着所以 ADR 上不去 | 高峰低档打穿地板 | **P64** 关/限低档；Hold 779–799 首选 799 |
| 涨了 BAR 但 399 还挂着 | 形 C 假涨价 | P64；立刻关 399 类 |
| 把促销全关了 BAR 也没人订 | 弱夜关光低档 | P64 同伴卡；重开围栏或 **P05/P02** |
| 不知道 nested 还是 parallel 就乱关 | 结构不明 | 先问 NV-INV-01；不明只动公开可见 |
| CM 推错了 399 | 错映射 | **P60** |
| 压缩日要不要提前关低价 | 压缩机械 | 复用 **close-low**；结构诊断仍 P64 |
| 弱日堆满 MinLOS/CTA | stay 限制过度 | **P33** |
| OTA 深促报名 | 促销闸 | **P18** |
| 嵌套太复杂 BAR→399 | 逃避结构 | 拒绝；399=被拒绝的 dump |

主卡：`recommendations/dont-leave-low-class-open-on-peak.md`。同伴卡：`dont-strip-low-class-on-weak-nights.md`。压缩机械复用 `close-low-rate-compression.md`（不重写）。本店 nesting 字段 / 华住价码 SOP **NV**。不编 EMSR、佣金%。180/14/399/799 Simulation only。399 = 高峰要关的档 + 被拒绝的新 BAR。Hold 779–799 首选 799。**不开 P65。**


## 72. 「取消后按原价恢复不是必须」（2026-08-27 22:17 CST 追加，不改 §1–71）

取消后又要按旧价回来，不是权利；系统 Reinstate 写回历史价也不等于定价权。先走 **P65**：拆同一笔 Reinstate vs 取消后再订新单（新单更低价 → **P62**）；Pace Ahead → 默认不认过期低价，给当前公开 BAR 779–799 首选 799；不要因为「怕他去订 399」dump Brand.com 或自动认旧 599。本店 Reinstate 是否带原价 = **NV**。真弱夜才可谈例外（标 exception，不当新 BAR）。没到走 **P54**。Soft 潮走 **P14**。未来收窗走 **P38**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 客人取消了又后悔，按原价恢复吧 | 同单要旧价；Ahead 烧稀缺 | **P65** 拒旧价；给当前 BAR |
| 系统 Reinstate 把旧 599 写回来了 | 回写 ≠ 必须认 | P65 形 B；改到当前价 |
| BAR 已经 799 了还要不要认旧价 | 过期价 vs 当前价 | Ahead 不认旧；Hold 779–799 首选 799 |
| 不恢复他就会去订 399 | 用 dump 安抚 | 拒 BAR→399；查围栏/错价（P36/P60/P64） |
| 取消了又订回来更便宜 | 新单套利 | **P62** |
| 取消很多但没人要恢复 | Soft 诊断 | **P14** |
| 今天没到要不要砸 | no-show | **P54** |
| 弱夜给不给旧价意思一下 | 让步 | P65 形 D；标 exception；不当新 BAR |
| 早会怎么办 | 一个动作 | **P45**：Ahead 拒旧价 + 问 Reinstate 政策 + Hold BAR |

主卡：`recommendations/dont-reinstate-below-current-bar.md`。本店 Reinstate 是否带原价 / 华住字段 **NV**。不编罚金%、佣金%。180/14/599/399/799 Simulation only。599 = Ahead 上被拒的旧价。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P66。**

## 73. 「系统建议不是定价权」（2026-08-28 02:17 CST 追加，不改 §1–72）

RMS 建议的价是输入，不是定价权。先走 **P66**：用 Pace / Remaining / 事件核建议；Pace Ahead → 默认不跟系统 dump，Hold 公开 BAR 779–799 首选 799；不要因为「系统说卖不满」把 BAR 砍到 399。真弱才 **P05**，理由写 Pace，不写「系统说了」。没有正当理由也不要乱改系统价（HSMAI：全盘接受和随便 override 都是 Don't）。预测错了先改判断（**P17**）。有声明品牌底走 **T20**。月末冲量走 **P56**。错映射走 **P60**。本店 RMS / 华住会字段 = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 系统建议今晚 399 要不要跟 | Ahead dump 建议 | **P66** 不跟；Hold 779–799 首选 799 |
| 别跟系统对着干 | 全盘接受 | P66 形 C；拒绝 |
| IDeaS 降了我们也要降 | 黑盒当定价权 | P66 形 A；先核 Pace |
| 系统不让降但卖不动 | 真弱 + 系统仍高 | P66 形 B；**P05**；理由写 Pace |
| 我熟市场先砍再说 | 无理由 override | P66 形 D；拒绝 |
| 预测假设错了还按旧建议 | Forecast Miss | **P17** |
| 月底差了系统也让砍 | 账期 | **P56** |
| 系统价穿了品牌底 | 声明底 | **T20** |
| 早会怎么办 | 一个动作 | **P45**：Ahead 不跟 399 + Hold BAR |

主卡：`recommendations/dont-follow-rms-dump.md`。本店 RMS / 华住会字段 **NV**。不编 override %、佣金%、IDeaS 4%。180/14/399/799 Simulation only。399 = 被拒绝的 RMS dump。Hold 779–799 首选 799。**不开 P67。**

## 74. 「延退免费不是砍过夜 BAR」（2026-08-28 06:17 CST 追加，不改 §1–73）

同日延退 / 早到吃的是周转窗，不是过夜需求死亡。先走 **P67**：拆同日小时 vs 加一整晚（→**P46**）vs 钟点产品（→**P44**）；Pace Ahead / 下午到达紧 / HK 紧 → 默认不免费大批延退，可拒/限额/收费（费表 NV）；过夜公开 BAR Hold 779–799 首选 799；不要因为「嫌 12 点走」dump 到 399。弱夜可卖付费延退作附营，仍不改 BAR。早到须交回。产能顶 → **P63**。升房 → **P61**。本店延退费 / 华住字段 = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 延退免费可不可以 | 高峰人情 vs 周转 | **P67** 高峰不免费大批 |
| 高峰延退会不会挡下午到店 | 周转窗 | P67 形 A；限额/收费 |
| 嫌退房早，BAR 砍到 399 | 用 BAR 安抚 | 拒 BAR→399 |
| 弱夜免费也行吧 | 附营机会 | 形 C：可收费；Hold BAR |
| 早到没房先占一间 | 未交回 | 形 D；等转房 |
| 再住一晚友情价 | 整晚 | **P46** |
| 下午当钟点卖 | 钟点产品 | **P44** |
| 保洁不够所以免费延 | 产能 | **P63** |
| 早会怎么办 | 一个动作 | **P45**：高峰延退限额 + Hold BAR |

主卡：`recommendations/dont-free-late-checkout-on-peak.md`。本店延退费 / 华住字段 **NV**。不编费表、佣金%。14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P68。**


## 75. 「开业价不是必须跟的市场价格」（2026-08-28 10:17 CST 追加，不改 §1–74）

对面新开业的 intro / 开业特价，不是本店需求曲线，也不是今夜公开 BAR 的按钮。先走 **P68**：拆开业闪促 vs 已开业连续砸（后者 **P16**）vs 不可比截图（**P36**）；Pace Ahead → 默认不跟 intro，Hold 公开 BAR 779–799 首选 799；不要因为「对面 399」dump 到 399。把新店加入观察 Comp Set ≠ 改今夜报价。真弱才 **P05**，理由写 Pace。新店满房溢出 → **P15**。自己软开只用有限期围栏，399 不当永久 BAR。本店新店 SOP / 华住开业政策 = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 对面新开业 399 要不要跟 | 开业 intro ≠ 市价 | **P68** Hold 779–799 首选 799 |
| 开业周不砍没人订 | 用 BAR 买恐慌 | 拒 BAR→399 |
| 截图便宜但含早/套房/登录 | 不可比 | **P36** |
| 开了三个月还天天砍 | 连续价格战 | **P16** |
| 我们 Pickup 也塌了 | 真弱 leftover | **P05**；理由写 Pace |
| 新店已经满了 | 溢出 | **P15** |
| 新店进 Comp Set 今晚对齐 | 名单 ≠ 报价器 | 观察名单；不改今夜 BAR |
| 我们刚开所以 399 当 BAR | 软开锚市场 | 形 F；有限期围栏 |
| 早会怎么办 | 一个动作 | **P45**：Hold BAR + 观察名单 |

主卡：`recommendations/dont-match-opening-dump.md`。本店新店 SOP / 华住开业政策 **NV**。不编开业折扣%、佣金%。180/14/399/799 Simulation only。399 = 被拒绝的 dump（对面 intro）。Hold 779–799 首选 799。**不开 P69。**

## 76. 「套餐/含早价不是公开 BAR」（2026-08-28 14:17 CST 追加，不改 §1–75）

含早 / 套餐挂牌不是公开 BAR，也不是「房费可以地板」的许可证。先走 **P69**：拆 EP/裸房 vs CP/含早/套餐总价；Pace Ahead → 公开 **EP BAR Hold 779–799 首选 799**；不要因为「含早了」dump 到 399，也不要把套餐 399 写成新 BAR。竞对含早截图 → **P36**。盲盒假打包 → **P27**。渠道净/佣金 → **P20**。真弱 → **P05**（仍以 EP 为尺）。本店含早加价 / 华住字段 = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| BAR 是含早价，还能砍裸房吗 | 混用尺 | **P69** 拆 EP；Hold EP |
| 套餐 399 含双早当新 BAR | 套餐锚市场 | 拒；399 不当新 BAR |
| 含早所以房费可以地板 | 用餐砍房 | 拒 BAR→399 |
| 隔壁含早还便宜 80 | 不可比 | **P36** |
| 打包价很低所以 BAR 也该低 | 假打包/opaque | **P27** |
| OTA 抽了含餐全款要砍挂牌 | 净贡献 | **P20** |
| 反正空，套餐地板冲量 | 真弱 | **P05**；EP 尺；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正 BAR=EP + Hold EP |

主卡：`recommendations/dont-cut-bar-for-package.md`。本店含早加价 / 华住字段 **NV**。不编加价%、佣金%。180/14/399/799/899 Simulation only。399 = 被拒绝的 dump。899 = 套餐挂牌 Simulation，不是新 BAR。Hold 779–799 首选 799。**不开 P70。**

## 77. 「装修/软重开不是砍公开 BAR」（2026-08-28 18:17 CST 追加，不改 §1–76）

装修 / 分阶段 PIP / 软重开是**供给与产品状态**问题，不是自动弱需求、也不是必须地板价。先走 **P70**：重算可售（扣装修 OOO）；Pace Ahead（相对可售）→ Hold 公开 BAR 779–799 首选 799；不要因为「半边在装修 / 软重开先锚 / 噪音所以全店降」dump 到 399。局部噪音 → 披露 + 邻房硬挡 / 价值补偿，不改全店 BAR。可选双库存（翻新 Premium / Legacy 围栏），399 不当永久 BAR。对面新店 intro → **P68**。无装修故事的泛维修分母 → **P37**。施工差评要砍量 → **P39**。真弱 → **P05**（仍禁一夜 −15%）。本店 PIP / 华住装修 SOP = **NV**。

| 用户原话 | 误读 | 动作 |
| --- | --- | --- |
| 半边装修 OCC 低要砍 | 供给收缩当需求死 | **P70** 形 A；重算可售；Hold |
| 软重开所以先 399 | Soft Discount Trap | **拒绝 BAR→399** |
| 噪音所以全店地板 | 局部当全局 | 披露+硬挡/补偿；不改 BAR |
| 翻新房也 399 | 双库存混尺 | 翻新 Premium；399 不当永久 BAR |
| 对面新开业 399 | 别人的 intro | **P68** |
| 维修房 OCC 好看/空房好看（无装修故事） | 分母 | **P37** |
| 施工差评要砍价换量 | 质量信号 | **P39** |
| 可售仍厚且 Behind | 真弱 | **P05**；禁一夜 −15% |

主卡：`recommendations/dont-dump-bar-for-renovation.md`。本店折扣 % **NV**。180/40/140/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P71。**


## 78. 「年标/企业协议价不是公开 BAR」（2026-08-28 22:17 CST 追加，不改 §1–77）

年标 / 企业协议 / RFP 合同价不是公开 BAR，也不是「为了好签先砍公开尺」的许可证。先走 **P71**：拆账户合同价 vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为「对齐年标」写成 499，也不要因为「冲量好签」dump 到 399。协议可 BAR-based 派生（跟 BAR 走），BAR 不被反写。已签码漏出高峰/OTA → **P26**。政务 per-diem → **P48**。一场团 → **P10**。月末冲量 → **P56**。真弱 → **P05**（仍禁一夜 −15%）。本店折扣% / 华住字段 / LRA Fact% = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| BAR 跟到年标吧，销售好签 | 用合同价当公开尺 | **P71** 拆开；Hold 公开 BAR |
| 公开价先砍到 499 对齐协议 | 对齐年标 | **拒绝 499 作新 BAR** |
| 399 冲量，年标才谈得下来 | 用地板买合同 | **拒绝 BAR→399** |
| 年标 499 就是我们的 BAR | 混尺 | 形 A；Hold 779–799 首选 799 |
| 协议出现在周末散客 / OTA | 已签码漏出 | **P26** |
| 差旅标准 / 公务员协议 | 政务 | **P48** |
| 这一场 50 间团询 | 一场团 | **P10** |
| 月底先砍好出数 | 账期 | **P56** |
| 反正空，地板冲量 | 真弱 | **P05**；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正 BAR≠年标 + Hold BAR |

主卡：`recommendations/dont-anchor-bar-to-corp-rate.md`。本店折扣% / LRA Fact% **NV**。不编佣金%。180/14/399/499/799 Simulation only。399 = 被拒绝的 dump。499 = 被拒绝的「对齐年标」新 BAR。Hold 779–799 首选 799。**不开 P72。**


## 79. 「姐妹店溢出/区域统价不是公开 BAR」（2026-08-29 02:17 CST 追加，不改 §1–78）

姐妹店溢出 / 集团导客 / 区域统价不是公开 BAR，也不是按发送店低价接或统一跟最低那家的许可证。先走 **P72**：拆本店公开尺 vs 姐妹店挂牌；Pace Ahead → 本店公开 BAR Hold 779–799 首选 799；接溢出按本店 BAR，不要因为按她们接 / 不砍丢给美团 / 区域统一 dump 到 399。Referral 是导客不是改价令。姐妹店空着要本店先砍 → 拒绝。非姐妹竞对满 → **P15**。一场团 → **P10**。年标 → **P71**。真弱 → **P05**（仍禁一夜 −15%）。本店 cluster / 华住导客 SOP = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 按她们 399 接 | 用发送店挂牌当本店尺 | **P72** 拆开；接则本店 BAR |
| 区域统一跟最低那家 | 把各店需求拍平 | **拒绝统到最低** |
| 不砍这批导客就丢给美团 | 用公开 dump 买导客 | **拒绝 BAR→399** |
| 姐妹店空着我们别涨 / 先砍帮填 | 用本店 BAR 补贴姐妹店 | 拒绝；Ahead 仍 Hold |
| 她们满了我们该涨 | 市场紧是本店 Pace | 本店紧 → **P01 / P15**；仍本店尺 |
| 对面（非姐妹）满了 | 竞对满 | **P15** |
| 这一场 50 间团询 | 一场团 | **P10** |
| BAR 跟到年标 | 年标 | **P71** |
| 反正空，地板冲量 | 真弱 | **P05**；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正溢出价≠BAR + Hold 本店 BAR |

主卡：`recommendations/dont-match-sister-overflow-rate.md`。本店 cluster / 华住导客 SOP **NV**。不编溢出折扣%、佣金%、区域统价 Fact %。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P73。**


## 80. 「闪促/秒杀不是永久公开 BAR」（2026-08-29 06:17 CST 追加，不改 §1–79）

闪促 / 秒杀 / 限时抢不是永久公开 BAR，也不是「卖爆了所以改写公开尺」的许可证。先走 **P73**：拆有窗闪促码 vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为闪促卖爆 / 市场认这个价 / 平台闪购 dump 到 399。窗到 → 关闪促码，不把 399 留作新 BAR。报不报平台活动 → **P18**。对面开业 intro → **P68**。嵌套低档忘关 → **P64**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店闪促 SOP / 华住字段 = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 闪促 399 爆了，BAR 改成 399 | 用限时码当公开尺 | **P73** 拆开；Hold 公开 BAR |
| 秒杀价就是我们的价了 | 混尺 | 形 A；Hold 779–799 首选 799 |
| 限时抢结束了还挂着 399 | 忘关/忘到期 | **关闪促码**；不改写 BAR |
| 平台闪购跟完，BAR 也砍 | 用报名/闪购改尺 | **拒绝 BAR→399**；报名闸走 **P18** |
| 对面新店也在闪促 | 开业 intro | **P68** |
| 涨了 BAR 但 399 促销还挂着 | 嵌套/忘关 | **P64** |
| 反正空，闪促地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正闪促≠BAR + Hold/关过期闪促 |

主卡：`recommendations/dont-rewrite-bar-to-flash.md`。本店闪促 SOP **NV**。不编默认折扣%、佣金%、秒杀时长 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P74。**


## 81. 「券后价/平台出资不是公开 BAR」（2026-08-29 10:17 CST 追加，不改 §1–80）

OTA 券后价 / 平台出资折扣不是公开 BAR，也不是「客人看到这个价所以改写公开尺」的许可证。先走 **P74**：拆券后/平台展示 vs 本店装入公开灵活 BAR；再问谁出资；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为券后 399 / 平台补完 / 截图便宜 dump 到 399。真破平修便宜侧 → **P59**。不可比 → **P36**。自己的闪促改尺 → **P73**。报不报活动 → **P18**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店券/美团·携程出资 SOP = **NV**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 美团券后 399，BAR 也改 399 | 用展示层当公开尺 | **P74** 拆开；Hold 公开 BAR |
| 平台补完就是市场价 | 平台出资层 ≠ BAR | 形 C；拒改尺；真破平才 **P59** |
| 客人截图券后便宜所以跟 | 可能不可比或平台层 | 先 **P36** / 谁出资；Ahead Hold |
| 券卖得好说明就该这个价 | 把促销成交写成战略尺 | **拒绝 BAR→399** |
| 我们报了这场券 | 报名/店出促销 | **P18**；成交关在码，不改 BAR |
| 闪促 399 爆了改 BAR | 自己的限时码 | **P73** |
| OTA 比官网便宜要对齐 | 真破平？ | **P59** 修便宜侧；不默认砍官网 |
| 反正空，跟券后地板 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正券后≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-to-coupon-after.md`。本店券 SOP **NV**。不编默认出资%、佣金%、券门槛 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P75。**


## 82. 「最低价保证索赔不是公开 BAR」（2026-08-29 14:17 CST 追加，不改 §1–81）

最低价保证 / BRG / 贵就赔索赔不是公开 BAR，也不是「被索赔了所以改写公开尺」的许可证。先走 **P75**：拆一笔已订直销单的索赔 vs 公开灵活 BAR；核 like-for-like；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为贵就赔 / 全网最低 / 被索赔了 dump 到 399。有政策只履约那一笔。不可比 → **P36**。真破平修便宜侧 → **P59**。错价/延迟 → **P60**。券后 → **P74**。前台当场跟 dump → **P42**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店贵就赔 SOP / 华住字段 = **NV**。万豪/希尔顿 25% **不进店规**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 截图更便宜，按最低价保证把 BAR 砍下来 | 用一笔索赔当公开尺 | **P75** 拆开；Hold 公开 BAR |
| 贵就赔所以 BAR 必须跟最低渠道 | 把例外写成战略尺 | **拒绝 BAR→399** |
| 被索赔了说明定价高了 | 混尺 | 形 A；Hold 779–799 首选 799 |
| 券后/登录/含早不同还要赔 | 不合格比价 | **P36 / P74**；拒该口径 |
| OTA 比官网便宜要对齐 | 真破平？ | **P59** 修便宜侧；不因索赔砍官网 |
| 线上已经 399 了必须认 | 错价/延迟 | **P60** |
| 前台客人拿截图要跟 | 未订上门 | **P42** |
| 反正空，跟索赔地板 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正索赔≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-brg.md`。本店贵就赔 SOP **NV**。不编默认赔付%、佣金%、万豪/希尔顿 25% 当店规。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P76。**



## 83. 「连住促销均价/免费晚不是公开 BAR」（2026-08-29 18:17 CST 追加，不改 §1–82）

连住 Stay 3 Pay 2 / 免费晚 / 过账节奏摊平均价不是公开灵活单晚 BAR，也不是「连住更划算所以单晚也得这个价」的许可证。先走 **P76**：拆促销价码/过账节奏 vs 公开单晚 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为住三付二均价 / 过账摊平 dump 到 399。促销成交关在码里。节假日日历 MinLOS → **P21**。拒 Sat-only / 不砍周六迁就连住 → **P40**。含早套餐 → **P69**。闪促窗 → **P73**。报不报 → **P18**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店连住促销 SOP / 华住字段 = **NV**。默认免费晚 % **不编**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 住三付二均价才 399，BAR 改成 399 | 用促销摊平当公开尺 | **P76** 拆开；Hold 公开 BAR |
| 连住促销算下来单晚就这个价 | 混尺 | 形 A；Hold 779–799 首选 799 |
| 过账节奏把免费晚摊平了所以公开价也跟 | 过账 ≠ 改 BAR | 形 C；促销留在码里 |
| 客人说连住更划算所以单晚也得这个价 | 把围栏促销写成单晚尺 | **拒绝 BAR→399** |
| 节假日必须连住所以周六也该便宜 | 日历 MinLOS | **P21**；仍不改写 BAR |
| 只订周六 / 砍周六迁就连住均价 | 停留形态 | **P40** |
| 套餐连住更划算所以 BAR 跟 | 餐贡献 | **P69** |
| 反正空，按连住地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正连住均价≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-to-stay-pay-avg.md`。本店连住促销 SOP **NV**。不编默认免费晚 %、佣金%、Stay 3 Pay 2 折扣 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P77。**


## 84. 「直播间成交价/主播专属价不是公开 BAR」（2026-08-29 22:17 CST 追加，不改 §1–83）

直播间 / 直播带货 / 主播专属价不是公开灵活 BAR，也不是「直播间卖爆了所以改写公开尺」的许可证。先走 **P77**：拆直播商品（日历房 RatePlan / 预售券 / 达人专场）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为主播价 / 卖爆了 dump 到 399。成交关在商品/计划里。报不报这场 → **P18**。自己的闪促窗 → **P73**。券后/平台出资 → **P74**。opaque → **P27**。含早套餐 → **P69**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。本店直播 SOP / 华住字段 / 主播佣金% = **NV**。默认直播折扣 % **不编**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 直播间卖爆了，BAR 改成主播价 | 用橱窗/达人成交当公开尺 | **P77** 拆开；Hold 公开 BAR |
| 主播价就是市场价 | 混尺 | 形 A；Hold 779–799 首选 799 |
| 日历房挂 399 所以公开也得 399 | 商品类型 ≠ BAR Type | 形 C；成交关在通道 |
| 不跟直播价就没人订 | 把专场地板写成战略尺 | **拒绝 BAR→399** |
| 要不要开这场直播 / 报不报 | 报名闸 | **P18**；成交关在码，不改 BAR |
| 闪促 399 爆了改 BAR | 自己的限时码 | **P73** |
| 券后/平台补完所以跟 | 展示层 | **P74** |
| 反正空，按主播地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正直播价≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-to-livestream.md`。本店直播 SOP **NV**。不编默认折扣%、主播佣金%、直播时长 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P78。**


## 85. 「加床/Extra Person/Occupant Threshold 不是公开 BAR」（2026-08-30 02:17 CST 追加，不改 §1–84）

Extra Person / 加床 / Extra Adult·Child / Occupant Threshold 加项不是公开灵活 BAR，也不是「三人住太贵 / 加床拉高均价 / 儿童加床污染 ADR 所以改写公开尺」的许可证。先走 **P78**：拆加项（价码日价表 Extra Adult/Child、超人数阈值固定额、加床/加婴儿床）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为三人价 / 加床太贵 dump 到 399。加项留在该笔预订。含早套餐 → **P69**。连住促销均价 → **P76**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从加项改写 BAR）。本店加床/儿童 SOP / 华住字段 / Extra Person% = **NV**。默认儿童费 Fact **不编**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 三人住太贵，BAR 改成 399 | 用加项/三人总价当公开尺 | **P78** 拆开；Hold 公开 BAR |
| 加床拉高了均价所以公开价也得降 | 混尺 | 形 A；Hold 779–799 首选 799 |
| 儿童加床把 ADR 搞脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；分看房价 vs 加项 |
| 人数阈值表就是我们的公开价 | 加项日程 ≠ BAR Type | 形 E；阈值留在表 |
| 含早+加床所以 BAR 跟套餐地板 | 餐贡献 | **P69** |
| 连住三人算下来单晚才 399 | 连住均价 | **P76** |
| 反正空，按三人地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正加床加项≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-extra-person.md`。本店加床 SOP **NV**。不编默认 Extra Person %、儿童费 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P79。**



> 指针（2026-09-01 16:17，不改正文枝）：Diagnose 走 **T-Extra** `theory/extra-person-vs-bar.md`，过程仍 **P78**。未开新枝。不规定 P88。三句 / 399-rejected / 799-Hypothesis **不改**。≠ T-Fee / ≠ T-Package。

## 86. 「Resort Fee/强制服务费/含税总价不是公开 BAR」（2026-08-30 06:17 CST 追加，不改 §1–85）

Resort Fee / Destination·Urban Fee / 强制服务费 / 含税总价 / OTA all-in 不是公开灵活 BAR，也不是「总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏所以改写公开尺」的许可证。先走 **P79**：拆房价 vs Resort·Destination·Urban Fee vs 强制服务费（是否分员工） vs 税 vs OTA all-in 展示 vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为 all-in / 服务费 dump 到 399。费留在费表/过账。STR：resort→Misc（永不 Rooms）；principal 强制服务费可进 Rooms 仍 ≠ 改尺；税 Exclude。竞对比价税/费口径 → **P36**。含早套餐 → **P69**。加床 → **P78**。券后 → **P74**。BRG 比价不含税费 → **P75**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从费项改写 BAR）。本店费表 / 华住字段 / 默认费 % = **NV**。默认税率 Fact **不编**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| OTA 总价贵，BAR 改成 399 | 用 all-in 展示当公开尺 | **P79** 拆开；Hold 公开 BAR |
| 服务费吓跑客人，公开价砍下来 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| 含税太贵所以跟地板 | 把税层写成战略尺 | **拒绝 BAR→399** |
| ADR 被 Resort Fee 看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；resort→Misc，不改写 BAR |
| 客人看到的 all-in 才是我们的公开价 | 展示加总 ≠ BAR Type | 形 A/E；Hold 公开 |
| Separate Line 加到 LTB 就是新 BAR | 显示闸 ≠ 定价权 | 形 E；过账/显示留在包 |
| 隔壁含税截图更便宜所以跟 | 竞对比价口径 | **P36** |
| 含早+费所以 BAR 跟套餐地板 | 餐贡献 | **P69** |
| 加床+费所以公开价砍 | 加项 | **P78** |
| 券后总价贵所以跟 | 展示层 | **P74** |
| 贵就赔要比含税费 | BRG 比价不含税费 | **P75** |
| 反正空，按 all-in 地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正费项/all-in≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-resort-fee.md`。Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`（2026-08-30 08:17）；过程仍 **P79**。本店费表 SOP **NV**。不编默认费 %、税率 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P80。**

> 指针（2026-09-02 08:17，不改正文枝）：税展示/CITY_TAX Diagnose 走 **T-Tax** `theory/tax-display-city-tax-vs-bar.md`，过程仍 **P79**；强制费/all-in 仍 **T-Fee**。未开新枝。不规定 P88。三句 / 399-rejected / 799-Hypothesis **不改**。≠ T-Package / ≠ T-Extra。
> 指针（2026-09-02 10:17，不改正文枝）：税展示 Simulation 已开 → `cases/sim-2026-tax-display-city-tax-sat.md`（C02-10）；Diagnose 仍 **T-Tax**，过程仍 **P79**。未开新枝。不规定 P88。
> 指针（2026-09-02 12:17 R02-12，不改正文枝）：§114 protel City Taxes + Clock City Tax Mode。Diagnose 仍 **T-Tax**，过程仍 **P79**。未开新枝。不规定 P88。三句 / 399 / 799 **不改**。


## 87. 「员工价/Staff·Employee rate 不是公开 BAR」（2026-08-30 10:17 CST 追加，不改 §1–86）

员工价 / Staff·Employee rate（含付费员工折扣）不是公开灵活 BAR，也不是「员工价就是市场价 / 员工价太低所以跟 / 员工住满了所以砍公开尺」的许可证。先走 **P80**：拆付费员工折扣码 / 员工旅居资格闸 / $0 员工 Comp·HU vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为员工价 dump 到 399。员工成交关在资格码。OPERA：STAFF 可按 Times Sold 关码 ≠ BAR Type；Comp/HU 勾选 = 统计跟踪。STR：无关员工免费 Exclude from Rooms Sold（那是 P47 口径）。会员围栏 → **P23**。$0 Comp/HU → **P47**。年标 → **P71**。费/all-in → **P79**。人手产能顶 → **P63**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从员工价改写 BAR）。本店员工价 SOP / 华住字段 / 默认员工折扣 % = **NV**。默认配额 Fact **不编**。停车费仍 MEDIUM leftover。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 员工价就是市场价，BAR 改成 399 | 用资格闸员工码当公开尺 | **P80** 拆开；Hold 公开 BAR |
| 员工价太低所以跟 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| 员工住满了所以砍公开 | 把员工占用写成战略尺 | **拒绝 BAR→399** |
| 员工把 OCC 撑满了 / ADR 看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；分看付费员工折扣 vs $0 Comp·HU |
| STAFF 码就是我们的公开价 | 码/类/档案闸 ≠ BAR Type | 形 E；码留在资格闸 |
| 会员也便宜所以跟员工地板 | 会员围栏 | **P23** |
| 员工免费房把 OCC 撑满要涨或砸 | $0 Comp/HU | **P47** |
| 对齐年标/协议所以跟员工价 | 年标 | **P71** |
| 含费总价+员工价所以砍 | 费/all-in | **P79** |
| 人手不够少卖点所以跟员工地板 | 产能顶 | **P63** |
| 反正空，按员工地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正员工价≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-staff-rate.md`。本店员工价 SOP **NV**。不编默认员工折扣 %、配额 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P81。** 停车费仍 MEDIUM leftover。

> 指针（2026-09-01 08:17，不改正文枝）：Diagnose 走 **T-Employee** `theory/staff-employee-rate-vs-bar.md`，过程仍 **P80**。未开 §88 新枝（§88 已是批发枝；本小时仅指针，同 T-Service-Recovery→§94 指针模式）。不规定 P88。三句 / 399-rejected / 799-Hypothesis **不改**。≠ T-Staff。


## 88. 「批发/旅行社/GDS 净价不是公开 BAR」（2026-08-30 14:17 CST 追加，不改 §1–87）

批发 / 旅行社 / GDS 渠道协议净价不是公开灵活 BAR，也不是「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低 / ADR 被批发看脏所以改写公开尺」的许可证。Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`（2026-08-30 16:17）；过程仍 **P81**：拆批发/TA/GDS 渠道协议净价（档案闸 + Access Code）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为批发净 dump 到 399。批发成交关在档案闸。OPERA：Travel Agent / Company / Source + Access Code 发到 GDS/OWS ≠ BAR Type；Wholesale Rate Class = LTB 查询桶。HSMAI：net rate 是旅行社/批发/OTA 进货底，渠道加 markup 后才广告；BAR = non-qualified publicly available。净贡献排序 → **P20**。高峰关盲盒/批发漏出 → **P27**。年标 → **P71**。已签码漏出 → **P26**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从批发净价改写 BAR）。本店批发/GDS SOP / 华住字段 / 默认批发折扣 % = **NV**。默认佣金 Fact **不编**。停车费仍 MEDIUM leftover。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 批发价才是市场价，BAR 改成 399 | 用渠道协议净当公开尺 | **P81** 拆开；Hold 公开 BAR |
| 旅行社净价太低所以跟 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| GDS 协议价低所以公开也得低 | 把批发地板写成战略尺 | **拒绝 BAR→399** |
| ADR 被批发看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；分看公开 vs 批发净 vs 对方 markup 挂牌 |
| Wholesale 类就是我们的公开价 | 码/类/Access Code ≠ BAR Type | 形 E；闸留在档案 |
| 批发净差所以保渠道 / 砍公开 | 净贡献排序 | **P20** |
| 高峰批发还开着所以改 BAR | 漏出层该关 | **P27** |
| 对齐年标所以跟批发地板 | 年标 | **P71** |
| 协议码漏了所以砍公开 | 已签码漏出 | **P26** |
| 反正空，按批发地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正批发净价≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-wholesale.md`。Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`（2026-08-30 16:17）；过程仍 **P81**。本店批发/GDS SOP **NV**。不编默认批发折扣 %、佣金 Fact、Consortia 10%。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P82。** 停车费仍 MEDIUM leftover。

## 89. 「停车费/valet/车库费不是公开 BAR」（2026-08-30 18:17 CST 追加，不改 §1–88）

停车费 / valet / 车库费 / OTA 含停总价不是公开灵活 BAR，也不是「停车贵所以砍公开 / 含停总价贵 / ADR 被停车看脏 / 竞对免停所以跟」的许可证。Diagnose 过程走 **P82**：拆酒店自营停车（STR Other Operated）/ valet / 车库 vs 第三方 Misc vs OTA 含停展示 vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为含停 / 免停竞对 dump 到 399。停车留在 Fixed Charge / Package Separate Line / Other Operated（或 Misc）。竞对比价含停可比 → **P36**。Resort/服务费/all-in → **P79**。加床 → **P78**。含早套餐 → **P69**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从停车费改写 BAR）。本店停车 SOP / 华住字段 / 默认停车 % = **NV**。默认 valet % / 车库租金 Fact **不编**。停车费 **不再 leftover**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| OTA 含停总价贵，BAR 改成 399 | 用含停展示当公开尺 | **P82** 拆开；Hold 公开 BAR |
| 停车贵所以砍公开 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| 竞对免停所以公开也跟 | 把竞对 ancillary 写成战略尺 | **拒绝 BAR→399** |
| ADR 被停车看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；自营→Other Operated，第三方租→Misc |
| Fixed Charge / Separate Line 停车就是公开价 | 过账/套餐属性 ≠ BAR Type | 形 E；过账留在码 |
| 隔壁含停截图更便宜所以跟 | 竞对比价口径 | **P36** |
| 度假费+停车所以砍公开 | 强制费/all-in | **P79** |
| 加床+停车所以公开价砍 | 加项 | **P78** |
| 含早+停车所以 BAR 跟套餐地板 | 餐贡献 | **P69** |
| 反正空，按含停地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正停车≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-parking.md`。Diagnose 过程走 **P82**（暂无独立理论卡；邻 T-Fee/P79 费族交叉）。本店停车 SOP **NV**。不编默认停车 %、valet %、车库租金 Fact、佣金%。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P83。** 停车费不再 leftover。


## 90. 「储值卡/礼品卡/Prepaid Gift Card 不是公开 BAR」（2026-08-30 22:17 CST 追加，不改 §1–89）

储值卡 / 礼品卡 / Prepaid Gift Card 抵房不是公开灵活 BAR，也不是「储值抵房才是市场价 / 储值太低所以跟 / 储值卖爆了改尺 / ADR 被储值看脏所以改写公开尺」的许可证。Diagnose 走 **T-Stored**，过程仍 **P83**：拆储值卡/礼品卡/Prepaid Gift Card（OPERA：Stored Value System 发卡 + Post Redemption 付款结算）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为储值地板 dump 到 399。储值成交关在 SVS Issue / Post Redemption / Post to Room（或 Post Payment）。预付不可退产品开关 → **P19**。券后展示 → **P74**。直播间 → **P77**。积分兑房 → **P49**。取消政策/高取消 → **P38/P14**。noshow → **P54**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从储值地板改写 BAR）。本店储值 SOP / 华住字段 / 默认储值抵房折扣 % = **NV**。默认礼品卡面值 Fact **不编**。储值卡 **不再 leftover**。取消费 leftover → **P84**（见 §91）。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 储值卖爆了所以 BAR 改成 399 | 用储值付款当公开尺 | **P83** 拆开；Hold 公开 BAR |
| 储值卡抵房价太低所以公开也得低 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| 储值抵房才是市场价 | 把付款工具写成战略尺 | **拒绝 BAR→399** |
| ADR 被储值看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；分看公开 vs 付款 vs 发卡金额 |
| Issue Card / Post Redemption 就是公开价 | 支付/发卡 ≠ BAR Type | 形 E；支付留在 SVS |
| 预付不可退太低所以跟 | 预付产品开关 | **P19** |
| 券后总价低所以跟 | 展示层 | **P74** |
| 直播间价就是市场价 | 直播专属 | **P77** |
| 积分兑房把 OCC 撑满要砍 | 兑房 | **P49** |
| 取消费污染 ADR 所以砍 | 取消费改尺 | **P84**（见 §91）；高取消 Soft→P14；收窗→P38；noshow→P54 |
| 反正空，按储值地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正储值≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-stored-value.md`。Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。本店储值 SOP **NV**。不编默认储值抵房折扣 %、礼品卡面值 Fact、佣金%。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。储值卡不再 leftover。取消费 leftover → **P84**（2026-08-31 02:17；见 §91）。


## 91. 「取消/attrition FEE 不是公开 BAR」（2026-08-31 02:17 CST 追加，不改 §1–90）

取消 FEE / 团 attrition FEE 不是公开灵活 BAR，也不是「取消费才是市场价 / ADR 被取消费看脏所以砍 / attrition 罚金当地板 / 取消费多说明价高所以 dump」的许可证。Diagnose 过程走 **P84**：拆取消/attrition FEE 过账（STR：attrition + transient cancellation after cutoff → **Misc Schedule 4**；OPERA：Cancellation Penalty Posting Transaction Code）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为取消费/attrition 罚金 dump 到 399。取消费留在 Misc / 专用交易码。高取消 Soft → **P14**。收窗 → **P38**。Noshow（revenue IS Rooms）→ **P54**。团 cutoff/wash → **P52**。Cancel-rebook → **P62**。Reinstate → **P65**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从取消费地板改写 BAR）。本店取消/attrition SOP / 华住字段 / 默认取消费 % / attrition % = **NV**。取消费 **不再 leftover**。优先级 **MEDIUM**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 取消费才是市场价，BAR 改成 399 | 用 FEE 过账当公开尺 | **P84** 拆开；Hold 公开 BAR |
| ADR 被取消费看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；Misc Schedule 4 vs Rooms |
| attrition 罚金当地板所以跟 | 把罚金写成战略尺 | **拒绝 BAR→399** |
| 取消费多说明价高所以 dump | 混 Soft 取消与 FEE 改尺 | 形 B；Hold 779–799 首选 799 |
| Cancellation Penalty 交易码就是公开价 | 过账码 ≠ BAR Type | 形 E；过账留在码 |
| 取消太多所以 Soft dump | 高取消 Soft OTB | **P14** |
| 先收免费取消窗再砍 | 收窗 | **P38** |
| 今天 no-show 了砸 BAR | noshow（Rooms） | **P54** |
| 团没 pickup 所以砍 | cutoff/wash | **P52** |
| 反正空，按取消费地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正取消费≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-cancel-fee.md`。Diagnose 过程走 **P84**（暂无独立理论卡）。本店取消/attrition SOP **NV**。不编默认取消费 %、attrition %、佣金%。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**P85 于 06:17 已开**（hurdle/LRV vs BAR，见 §92）。取消费不再 leftover。


## 92. 「hurdle / bid price / Last Room Value 不是公开 BAR」（2026-08-31 06:17 CST 追加，不改 §1–91）

hurdle / bid price / Last Room Value 不是公开灵活 BAR，也不是「门槛价才是市场价 / hurdle 多少 BAR 就多少 / 过不了 LRV 所以砍公开 / 系统门槛 399 公开也得 399」的许可证。Diagnose 走 **T-Hurdle** `theory/hurdle-bid-lrv-vs-bar.md`（可售门/机会成本 ≠ 公开 BAR；optimization-advise 仍是 Accept/Reject 机会成本语言，不重写），过程仍 **P85**：拆 hurdle/bid/LRV（OPERA：价码要达到才在 rate grid 上 display；IDeaS：LRV is a value not a selling rate）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为门槛地板 dump 到 399。hurdle 留在可售门。RMS 建议卖价 → **P66**。嵌套低档开/关 → **P64**。限制过度 → **P33**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从 hurdle 地板改写 BAR）。本店 hurdle/RMS 字段 / 华住会门槛价 SOP / 默认 hurdle % / LRV Fact = **NV**。hurdle/LRV **不再 leftover**。优先级 **HIGH**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| hurdle/LRV 才是市场价，BAR 改成 399 | 用可售门当公开尺 | **P85** 拆开；Hold 公开 BAR |
| 系统门槛 399，公开也得 399 不然卖不出去 | 混尺 | 形 A/B；Hold 779–799 首选 799 |
| 过不了 LRV 所以砍公开 | 把门槛地板写成战略尺 | **拒绝 BAR→399** |
| hurdle 多少 BAR 就多少 | 可售门当定价权 | 形 B；Hold 779–799 首选 799 |
| Hurdle Rates 屏 / Yield Market Type / IDeaS LRV 就是公开价 | 可售门 ≠ BAR Type | 形 E；可售门留在屏 |
| 系统建议今晚 399 要不要跟 | RMS 建议卖价 | **P66** |
| 低价还开着所以 ADR 上不去 | 嵌套低档 | **P64** |
| 堆 MinLOS/CTA 当门槛 | 限制过度 | **P33** |
| 反正空，按 hurdle 地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正 hurdle≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-to-hurdle.md`。Diagnose 走 **T-Hurdle** `theory/hurdle-bid-lrv-vs-bar.md`，过程仍 **P85**。optimization-advise 不重写。本店 hurdle/RMS 字段 **NV**。不编默认 hurdle %、LRV Fact、EMSR Fact、佣金%。不把 OPERA 195/200/80/90 当中国 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。hurdle/LRV 不再 leftover。押金 leftover → **P86**（见 §93）。

> 指针（2026-08-31 08:17，不改正文枝）：Diagnose 走 **T-Hurdle**，过程仍 **P85**。未开 §93 新枝（同 T-Stored→§90 指针模式）。不规定 P86。三句 / 399-rejected / 799-Hypothesis **不改**。


## 93. 「押金/预授权不是公开 BAR」（2026-08-31 10:17 CST 追加，不改 §1–92）

押金要求 / 押金过账 / 信用卡预授权（authorization hold）不是公开灵活 BAR，也不是「押金才是市场价 / 预授权扣太多说明价高所以砍 / 押金当地板 / ADR 被押金看脏所以改写公开尺」的许可证。Diagnose 过程走 **P86**：拆押金要求/过账（OPERA：Deposit Rules / Deposit Request / Deposit Payment）与信用卡预授权（Authorization Rules = anticipated expenses pre-auth）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为押金地板 / 预授权额 dump 到 399。押金留在 Deposit Rules/Payments；预授权留在 Authorization Rules。担保类型/6点放房 → **P55**。预付不可退产品 → **P19**。取消费过账 → **P84**。储值付款 → **P83**。收窗 → **P38**。Noshow → **P54**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从押金/预授权地板改写 BAR）。本店押金%/预授权额 / 华住押金/预授权 SOP = **NV**。默认押金 % / 预授权金额 Fact **不编**。不把 OPERA auth-rule Vendor $ 例当中国 Fact。押金/预授权 **不再 leftover**。优先级 **MEDIUM**。

形 A：押金/预授权 = 公开 BAR → 拆付款·预授权 vs 公开尺；Hold。  
形 B：BAR→399「押金才是市场价 / 预授权太高所以砍 / 押金当地板」→ 拒绝。  
形 C：ADR 被押金/预授权看脏 → dump BAR → 读 posting/hold ≠ 改尺。  
形 D：误入担保释放 / 预付 NR / 取消费 / 储值 / 收窗 / noshow → P55 / P19 / P84 / P83 / P38 / P54。  
形 E：Deposit Rule / Authorization Rule 屏当 BAR Type → 配置/hold ≠ 定价权。  
形 F：真弱 leftover → P05；仍不从押金地板改写 BAR。

主卡：`recommendations/dont-rewrite-bar-for-deposit-preauth.md`。Diagnose 过程走 **P86**（暂无独立理论卡）。本店押金/预授权 SOP **NV**。不编默认押金 %、预授权金额 Fact、佣金%。不把 OPERA $100/$20/$50 当中国 Fact。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P87。** 押金/预授权不再 leftover。Pet/AAA 仍停车。

> 指针（2026-08-31 12:17 R31-12，不改正文枝）：§95 Cloudbeds Deposit Policies + Apaleo Payment Authorizations 互补 P86（第二家 Vendor）。未开 §94 新枝。不规定 P87。三句 / 399-rejected / 799-Hypothesis **不改**。
> 指针（2026-08-31 16:17，不改正文枝）：Diagnose 走 **T-Deposit** `theory/deposit-preauth-vs-bar.md`，过程仍 **P86**。未开 §94 新枝（同 T-Hurdle→§92 指针模式）。不规定 P87。三句 / 399-rejected / 799-Hypothesis **不改**。

> 指针（2026-08-31 18:17，不改正文枝）：服务补偿/账单 adjustment 改尺 leftover → **P87**。Diagnose/过程走 **P87**。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。


## 94. 「服务补偿 / folio Service Recovery adjustment 不是公开 BAR」（2026-08-31 18:17 CST 追加，不改 §1–93）

本住 folio Service Recovery / posting adjustment / rebate 不是公开灵活 BAR，也不是「客人投诉补了差价所以改 BAR / 服务失败今晚全部 dump / 补偿券才是市场价 / ADR 被减免看脏所以改写公开尺」的许可证。Diagnose 过程走 **P87**：拆本住 Service Recovery / posting adjustment / rebate（OPERA：Post Service Recovery Adjustment / Post Adjustment / negative rebate；Cloudbeds：Adjust Charge）vs 公开灵活 BAR；Pace Ahead → 公开 BAR Hold 779–799 首选 799；不要因为补偿地板 dump 到 399。补偿留在 folio Service Recovery Adjustment。点评 SIGNAL → **P39**。BRG like-for-like 已订直销索赔 → **P75**。计划 Comp → **P47**。取消 FEE 过账 → **P84**。储值付款 → **P83**。押金/预授权 → **P86**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从补偿地板改写 BAR）。本店补偿 SOP / 默认补偿 % / 华住字段 = **NV**。默认补偿 % **不编**。不把 OPERA Vendor $ breakfast 例当中国 Fact。服务补偿 **不再 leftover**。优先级 **HIGH**。

| 用户原话 | 诊断 | 调用 |
| --- | --- | --- |
| 客人投诉补了差价，BAR 改成那个价 | 用本住 posting 当公开尺 | **P87** 拆开；Hold 公开 BAR |
| 服务失败今晚全部 dump / 补偿券 399 所以公开也 399 | 把补偿地板写成战略尺 | **拒绝 BAR→399** |
| ADR 被减免看脏了砍 BAR | 指标读法 ≠ 改尺 | 形 C；STR net-of-allowance 是 READ |
| Service Recovery Adjustment / Adjust Charge 屏就是公开价 | 配置/过账 ≠ BAR Type | 形 E；过账留在屏 |
| 评分从 4.8 掉到 4.3 所以砍 | 点评 SIGNAL | **P39** |
| 贵就赔 / 截图更便宜所以改尺 | BRG 已订直销索赔 | **P75** |
| 计划 Comp / House Use | 计划免费/自用 | **P47** |
| 取消费才是市场价 | 取消 FEE 过账 | **P84** |
| 储值抵房改尺 | 储值付款 | **P83** |
| 押金/预授权改尺 | 押金/hold | **P86** |
| 反正空，按补偿地板冲量 | 真弱 | **P05**；有窗围栏；禁一夜 −15% |
| 早会怎么办 | 一个动作 | **P45**：纠正服务补偿≠BAR + Hold 公开 BAR |

主卡：`recommendations/dont-rewrite-bar-for-service-recovery.md`。Diagnose 过程走 **P87**（本小时不开独立理论卡）。本店补偿 SOP **NV**。不编默认补偿 %、佣金%。180/14/399/799 Simulation only。399 = 被拒绝的 dump。Hold 779–799 首选 799。**不开 P88。** 服务补偿不再 leftover。Pet/AAA 仍停车。
> 指针（2026-09-01 00:17，不改正文枝）：Diagnose 走 **T-Service-Recovery** `theory/service-recovery-adjustment-vs-bar.md`，过程仍 **P87**。未开 §95 新枝（同 T-Deposit→§93 指针模式）。不规定 P88。三句 / 399-rejected / 799-Hypothesis **不改**。

> 交叉指针（2026-09-02 16:17，不改正文）：品牌底 / Rate Floor / Min·Max 当地板改尺 Diagnose 走 **T-Floor** `theory/rate-floor-vs-bar.md`，过程仍 **T20 + do-not-break-brand-floor**；未开新枝。不开 P88。
> 指针（2026-09-02 18:17 C02-18，不改正文枝）：Rate Floor Simulation 已开 → `cases/sim-2026-rate-floor-minmax-sat.md`（C02-18）；Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**。未开新枝。不规定 P88。

> 指针（2026-09-02 20:17 R02-20，不改正文）：§118 新开 protel Air Rate availability（日程 Min/Max rate ≠ BAR）+ Clock PMS+ Min/Max allowed prices（录入边界 ≠ rewrite）。Diagnose 仍 **T-Floor**，过程仍 **T20 + do-not-break-brand-floor**；Hold 779–799 首选 799；拒 399；无声明不发明 699 **不改**。不开 P88。不开 P89。

> 指针（2026-09-03 02:17 C03-02，不改正文枝）：Component Suite Simulation 已开 → `cases/sim-2026-component-suite-sat.md`（C03-02）；Diagnose 仍 **T-Component**，过程仍 **P13 + P37**。未开新枝。不规定 P88。

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。

> 交叉指针（2026-09-03 10:17 C03-10，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-restriction-maxlos-ctd-sat.md`。Diagnose 走 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699；§125。不开 P88。不开 P89。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS + CTA/CTD Restrictions。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699；§126。不开 P88。不开 P89。

> 交叉指针（2026-09-03 16:17 T03-16，不改正文三句 / 399 / 799）：Diagnose 走 **T-Rack** `theory/rack-vs-bar.md`（Rack/门市·挂牌·牌价 ≠ 公开 BAR）；过程仍 **P01** + **P64**（+ **T-Floor** handoff）；Hold 779–799 首选 799；拒 399；不发明 699；§128。不开 P88。不开 P89。
> 交叉指针（2026-09-03 18:17 C03-18，不改正文）：callable Simulation `cases/sim-2026-rack-vs-bar-sat.md`。Diagnose 走 **T-Rack**；过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699；§129。不开 P88。不开 P89。

> 指针（2026-09-03 20:17 R03-20，不改正文三句 / 399 / 799）：§130 新开 Cloudbeds Hide Base Rate（Base 可藏 ≠ rewrite）+ OPERA 5.6 Rate Management Configuration（Rack Rates category / rack type / 同页另建 BAR ≠ rewrite）。Diagnose 走 **T-Rack**，过程仍 **P01** + **P64**（+ **T-Floor**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 交叉指针（2026-09-04 00:17 T04-00，不改正文三句 / 399 / 799）：「搜不到 / 订不了 / 有房却没有 offer / 提前期挡住」先分四类（真卖光 / stay-side 限制 / **booking-side 时窗** / 曝光）。时窗 Diagnose 走 **T-Window** `theory/booking-window-vs-bar.md`；过程仍 **P33** + **P35**（+ **P19 / P42 / P38 / T-Restriction / P60 / P05·P02**）；Hold 779–799 首选 799；拒 399；不发明 699；§132。**T-Window ≠ T-Restriction ≠ T-Rack。** 不开 P88。不开 P89。

> 交叉指针（2026-09-04 12:17 R04-12，不改正文三句 / 399 / 799）：「搜不到 / 订不了 / 有房却没有 offer / 提前期挡住」时窗 Diagnose 仍走 **T-Window**；过程仍 **P33** + **P35**；§133 Clock Min/Max days before arrival + OPERA Rate Header Advance Booking 加强「时窗闸 ≠ dump BAR」。Hold 779–799 首选 799；拒 399；不发明 699。**T-Window ≠ T-Restriction ≠ T-Rack。** 不开 P88。不开 P89。

> 交叉指针（2026-09-04 18:17 C04-02，不改正文）：callable Simulation `cases/sim-2026-booking-window-sat.md`。Diagnose 走 **T-Window**；过程仍 **P33** + **P35**；Hold 779–799 首选 799；拒 399；不发明 699；§135。不开 P88。不开 P89。

> 交叉指针（2026-09-04 20:17 R04-20，不改正文三句 / 399 / 799）：「搜不到 / 订不了 / 有房却没有 offer / 提前期挡住」时窗 Diagnose 仍走 **T-Window**；过程仍 **P33** + **P35**；§136 HotelKey Lead Days + Protel advance booking 加强「时窗/可见性闸 ≠ dump BAR」。Hold 779–799 首选 799；拒 399；不发明 699。**T-Window ≠ T-Restriction ≠ T-Rack ≠ T-Status。** 不开 P88。不开 P89。
