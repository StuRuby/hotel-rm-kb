# Revenue Advisor Decision Framework

> 资产：T6 Advisor Decision Framework
> 路径：`decision-framework/advisor-process.md`
> 状态：active
> 用途：以后每次真实分析的操作系统。用户丢来半份数据，按本文开工，不重新发明过程。
> 配套：`decision-framework/input-template.md`（T7）· `recommendations/_TEMPLATE.md` · `advisor-playbooks/BACKLOG.md`（T11）
> 知识类型：Internal Process / Best Practice 落地（来源：`curriculum/task-brief.md` 第五、六、三十三、三十四、四十三节）。不是对某家真实酒店的声明。
> 证据等级：B（任务书规定的顾问输出结构 + 行业通行决策顺序）。价格幅度启发式标 Hypothesis，待真实反馈校准。

---

## 0. 硬规则（每次分析前默念）

1. **先诊断，再行动。** 看到 OCC 低不自动降价；看到 OTB 高不自动涨价。
2. **禁止空话。** 禁止单独出现：适当涨价 / 可以降一点 / 建议优化库存 / 建议持续观察 / 视情况调整。
3. **动作必须落到对象。** 尽量写到 Stay Date / Room Type / Rate 或区间 + 首选 / Inventory / Restriction / Channel。
4. **No Fake Precision。** 给不出点就给区间 + 首选。禁止伪造精确收益金额（如「可增收 47,280 元」）。
5. **信息不足也要出建议。** 先做当前最合理判断 → 条件化建议 → 只再要 3 个最值钱的数据。禁止「数据不足，无法判断」。
6. **Competitor Rate 是信号，不是答案。**
7. **不确定就标。** Fact / High-probability / Hypothesis / Unknown / Need Verification。禁止补故事。
8. **不操作系统。** 只给建议，不写 PMS / CRS / RMS / Channel Manager / OTA 后台操作步骤当已执行。
9. **一次分析只推 1–3 个动作。** 按 Impact × Confidence × Urgency 排序，其余进 watchlist。
10. **仿真案例不是真实酒店。** 本文第七节是 Simulation / 框架示范。

调用顺序（与 `README.md` 一致）：本文 → `diagnosis/problem-tree.md`（T5，已可调用）→ `metrics/metric-tree.md`（T3）→ `object-model/revenue-objects.md` → `advisor-playbooks/` → 主题目录 → `cases/` `feedback/`。对象模型或剧本未建成时按本文独立完成，不假装有步骤。

---

## 1. 收到任何酒店信息后的固定过程

十段结构对应任务书第五节。第十段之前有一段 **0 号预处理（Intake）**，不对外替代 Situation，但对内必须做。

每段固定写：**输入 / 做什么 / 输出 / 禁止事项**。

---

### 0. Intake（预处理，对内）

**输入**

- 用户丢来的任何东西：口述、截图、Excel、OTA 页面、微信记录、竞对截图、一句话问题。
- 对照 `decision-framework/input-template.md` 的九类：Hotel / Stay Date / Performance / Pickup / Historical / Pricing / Inventory / Booking Pattern / External Signal。

**做什么（按顺序，不跳）**

1. **对象映射。** 把每条信息落到对象：Hotel、Stay Date、Booking Date、OTB、Pickup、BAR、Comp、Event、Restriction、Channel、Segment。映射不到的标 Unknown，不要脑补。
2. **统一单位。** 百分比还原成间夜。公式（能算就算，算不出就标 Unknown）：
   - `OTB Rooms = OTB OCC × Total Rooms`（若只有 OCC% 和总房量）
   - `Remaining Rooms = Total Rooms − OTB Rooms − OO Rooms`（OO 未知则先当 0，并标 Hypothesis）
   - `Pickup Rooms (Nd) = Nd Pickup% × Total Rooms`（若 Pickup 给的是占总房量百分比；若给的是「新增间夜」则直接用）
   - `Pickup per day ≈ Pickup Rooms (Nd) / N`
   - `Days-to-Sellout @ current pace = Remaining Rooms / Pickup per day`（分母为 0 则写「当前窗口无成交，不能用此式」）
   - `Pace gap vs LY (pp) = OTB OCC − LY same-DTA OTB OCC`
   - `Price gap vs lowest comp = BAR − min(Comp BAR)`，同时写金额和百分比
   - `DTA` 若只给了 Stay Date，用分析日计算；分析日不明就问，先用用户表述里的 DTA。
3. **数据体检。** 标出：冲突（如 OTB 68% 但 remaining 写 50 间、总房 300）、口径不清（Pickup% 是占总房还是占期初 OTB）、时间戳缺失。
4. **Minimum Required 检查。** 见 T7。缺 Minimum 不停止分析，但 Confidence 封顶 Medium，动作只能是宽区间 + 条件化。
5. **派生 3 个「如果只能再补」候选。** 用第二节协议预选，第十段再敲定。

**输出**

- 一张对内事实表：已知 / 已计算 / Unknown。
- 派生指标（间夜、日均 Pickup、价差、Pace gap、Days-to-Sellout）。
- 数据冲突清单。

**禁止事项**

- 禁止把「当地有演唱会」写成已确认 Compression。
- 禁止把竞对价格当成「市场价」或「我们的目标价」。
- 禁止在 Intake 就写推荐动作。
- 禁止把 Pickup% 在口径未定时按自己喜欢的口径换算后当 Fact。

---

### 1. Situation（当前发生了什么）

**输入：** Intake 事实表。只允许 Fact 和已标注口径的计算。

**做什么**

用 5–10 句说清「现在这天/这堆日期上，库存、速度、价格、外部信号分别是什么」。必须出现：

- 酒店规模（总房量）
- Stay Date + DTA +（若知）DOW
- OTB：% 和间夜
- Remaining：间夜
- Pickup：窗口 + 间夜 + 日均
- 历史对照：LY / STLY / Budget / Forecast 中已有的
- 当前 BAR 与竞对数字
- 已知外部信号（活动 / 节假日 / 天气），不解释含义
- 用户原问题（他们以为要解决什么）

**输出：** 一段可被第三人核对的事实陈述。不含「应该」。

**禁止事项**

- 禁止诊断词：偏高、偏低、过热、需求很强（这些属于 Diagnosis）。
- 禁止建议词：应该涨、需要控房。
- 禁止补用户没给的城市、星级、房型名、演唱会场馆。

---

### 2. Diagnosis（核心原因是什么）

**输入：** Situation + 任务书第三十二节的「先诊断」分支（OCC 低不自动降价；OTB 高也不自动涨价）。

**做什么（按检查单走，打勾，不靠直觉跳）**

对焦点 Stay Date 逐项判定 Yes / No / Unknown：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | DTA 处于该酒店/该市场的哪个预订窗口？（长 / 中 / 短） | 现在的 OTB 该不该已经高 |
| D2 | Pace 相对 LY / STLY / 历史曲线 / Budget / Forecast，是 Ahead / On / Behind / Unknown | OTB 数字的含义 |
| D3 | Pickup 速度：相对剩余库存和 DTA，是 Fast / Normal / Slow / Unknown | 需求是在加速还是在停 |
| D4 | Pickup 质量：是否可能被 Group / 单个大单 / 某个渠道促销解释 | 速度是否可持续 |
| D5 | 价格位置：BAR vs 竞对、vs 自身历史、vs 价值感知 | 价格是信号还是问题 |
| D6 | 库存状态：剩余量、房型结构、是否已关房/限售 | 还有没有得卖 |
| D7 | Restriction：MinLOS / CTA / CTD / Closed 是否在挡需求或漏卖肩日 | 限制本身是不是病因 |
| D8 | 渠道/产品：低价 Rate Plan、促销、净价、会员价是否在漏 | 成交价是不是被破 |
| D9 | 外部信号：活动/节假日/交通/竞对满房，Lead Time 是否匹配 | 需求是事件驱动还是常态 |
| D10 | Forecast / Budget 是否在用一个已经错的假设 | 是不是在追一个错的目标 |

然后用四栏分类，每条判断必须能指回 D1–D10：

```text
已确认事实（Fact）
高概率判断（High-probability）
假设（Hypothesis）
信息缺口（Unknown / Need Verification）
```

核心诊断句只写 **一个主诊断 + 最多两个次诊断**。主诊断必须是机制，不是现象。

机制例句（可用）：

- 「Pace 领先 + Pickup 快 + BAR 低于竞对，主风险是 Underpricing / Early Sellout，不是 OCC 不够。」
- 「OTB 低但 DTA 仍长、Pickup 不慢、价格已低于竞对 → 不是 Overpricing，先别降。」

现象例句（禁止当主诊断）：

- 「入住率还不错。」
- 「价格有点低。」

**输出：** 四栏分类 + 一句主诊断 + **挂到** `diagnosis/problem-tree.md` 的枝号（不要只写口语枝名）：

| 本分析更像 | 先读问题树 |
| --- | --- |
| OCC / 入住率低、用户想降价 | §1 OCC Low（先排除 1.A，禁止直接降） |
| Pickup 慢 | §4 Pickup Slow |
| Pickup 快 | §5 Pickup Too Fast |
| Pace Behind | §6 |
| Pace Ahead | §7 |
| 早满 / 快卖完 | §8 Early Sellout |
| DTA 很短仍剩 | §9 Last-Minute Unsold |
| 取消异常 | §10 High Cancellation |

枝不存在或对不上时，用任务书第三十一节枝名，并在 Missing Data 记一笔。

**禁止事项**

- 禁止从单一指标下结论（只看 OTB%、只看比竞对便宜、只看有演唱会）。
- 禁止把 Hypothesis 写成 Fact。
- 禁止还没走完 D1–D10 就写 Recommended Action。
- 禁止「综合来看需求较好」这类无法证伪的句子。

---

### 3. Revenue Opportunity / Risk

**输入：** Diagnosis + 第三节扫描清单。

**做什么**

1. 对第三节 12 项机会 + 对等风险逐项扫：适用 / 不适用 / 信息不足。
2. 适用的用第四节打 Impact × Confidence × Urgency 分，排序。
3. 写清：**当前最大机会（1 个）**、**当前最大风险（1 个）**、其余进附录。

**输出**

```text
主机会：<名称> | I= _ C= _ U= _ | Score= _
主风险：<名称> | 若发生会破坏什么
次级（最多 3 个）：…
明确不适用：…（避免用户以为你没看到）
```

**禁止事项**

- 禁止把 12 项全写成「建议关注」。
- 禁止机会和动作脱节（这里写 Underpricing，后面却只说观察）。
- 禁止用未计算的「增收 xx 万」证明机会大。

---

### 4. Recommended Action

**输入：** 排序后的主机会 / 主风险；可用决策卡（如 `recommendations/increase-bar-pace-ahead.md`）。

**做什么**

每个被采纳的动作必须填这张表（缺的格子写 Unknown，并条件化）：

```text
Stay Date:
Room Type:          （未知则写「先动 BAR / 基础房型，不先动套房价差」）
Rate / Rate Plan:
Current Value:
Recommended Value / Range:
Preferred (首选):
Inventory Action:
Restriction Action:
Channel Action:
Staging:            （一次到位 / 分阶段；阶段触发器必须可观察）
Do-not-do:          （这次明确不要做的事）
```

分阶段默认规则（Hypothesis，待反馈校准）：

| 情境 | 第一刀 | 第二刀条件 |
| --- | --- | --- |
| Pace Ahead + Fast Pickup + 价差明确 | 先收到与最低竞对平齐或略上，**不要**一次跳到最高竞对之上 | 24–48h Pickup 仍达阈值且竞对未降 |
| Pace Behind + Slow Pickup + 价格已明显高于竞对 | 先小步降或只开一个战术产品，不砸 BAR | 24–48h 仍无 Pickup 再考虑第二步 |
| 事件日 + 剩余库存 < 当前日均 Pickup × 剩余 DTA × 0.6 | 价格 + 关低价 + 考虑 Restriction 同时做 | 取消率异常则解开 Restriction |
| 信号冲突 | **先不动 BAR**，只关明显破价或只要数据 | — |

幅度启发式（Hypothesis，不是弹性模型；有本酒店反馈后必须改）：

- 第一刀涨价：通常 **+8% 至 +15%**，或收到 **最低竞对附近**，取更可解释的那个；单日第一刀避免 >+20%，除非剩余库存按当前速度会在 DTA 的一半之前卖完，且有事件/竞对满房双确认。
- 第一刀降价：通常 **−5% 至 −10%**；避免一夜 −15% 以上，除非 DTA≤3 且 Pickup≈0 且价格明显高于全部竞对。
- 给不出点：写区间，区间宽度一般 **50–100 元**（或 BAR 的 5–8%），并给首选。

**输出：** 1–3 条填完整的动作表。每条能让不在场的人执行。

**禁止事项（硬禁止，出现即为不合格）**

- 「适当涨价」「小幅上调」「可以降一点」
- 「建议优化库存」「建议灵活调整」
- 「建议持续观察」作为唯一动作（观察必须写进第 8、9 段，不能代替第 4 段）
- 只有方向没有数字或区间
- 一次给出 8 个动作让用户自己挑

---

### 5. Why

**输入：** 动作表 + 用过的数据 + 理论/决策卡。

**做什么**

按三层写，分开，避免揉成一段「因为需求好」：

1. **用了哪些数据（Fact）：** 列出数字，不要复述 Situation 全文。
2. **逻辑链：** `信号 A + 信号 B → 机制 C → 所以动作 D`。至少两个独立信号家族才能对价格方向给 Medium 以上信心（信号家族定义见第六节）。
3. **理论 / 决策卡 / 内部经验：** 点名用了哪张卡或哪条理论。没有卡就写「任务书第十五节：给区间 + 首选」并标 Best Practice。
4. **哪一句是 Hypothesis：** 幅度、MinLOS、房型顺序、演唱会带来的 Compression，默认是 Hypothesis，直到有本酒店证据。

**输出：** 可被挑战的推理，而不是形容词。

**禁止事项**

- 禁止「根据丰富经验」。
- 禁止编造书名、论文、RMS 厂商算法来撑 Why。
- 禁止用竞对价格单独作为 Why 的全部。

---

### 6. Expected Impact

**输入：** 动作表 + 剩余库存 + 当前 OTB ADR（若有）。

**做什么**

只写 **方向 + 哪项指标 + 粗区间或条件**。固定检查这些指标，不适用的写「本次不作为主目标」：

| 指标 | 必须回答 |
| --- | --- |
| OCC / 最终售出间夜 | 动作是在换 OCC、保 OCC，还是接受 OCC 上限换 ADR |
| ADR | 若 BAR 动 X，OTB ADR 不会同幅动（已售部分锁价）。写「增量成交 ADR」和「最终 ADR 方向」 |
| RevPAR | 只给方向，或给「若增量成交仍在，则 RevPAR 随 ADR 升」这种条件句 |
| Pickup | 预期 24/48/72h Pickup 是持平、减速但仍为正、还是接近 0 |
| Conversion | Unknown 就写 Unknown，不要编点击率 |
| Net Revenue | 若动作涉及渠道促销/佣金，写净价方向；否则写「本次按 Gross 讨论，Net 未知」 |
| Profit | 无成本数据则标 Unknown，不编 GOP |

允许的写法：

```text
若 24h Pickup 仍 ≥ 8 间：增量成交 ADR 接近新 BAR，最终 ADR 上移，OCC 路径仍指向高入住或满房。
若 24h Pickup < 3 间：ADR 意图落空，存在「价动成交停」风险，按 Trigger 回退。
```

**禁止事项**

- 禁止「预计增收 23,456 元」「RevPAR +12.7%」这类假精确。
- 禁止假设 96 间剩余全部按新 BAR 卖出。
- 禁止把已售 204 间的锁价收入算进「涨价收益」。

---

### 7. Risk

**输入：** 动作表 + 未知项。

**做什么**

每个主动作至少写 3 条风险，每条带 **如何被证伪**（链到 Trigger）：

典型风险菜单（按需选用，不全抄）：

- 涨价后 Conversion 坍塌，剩余 96 间卖不掉
- Pickup 其实是一笔 Group，散客需求并不强
- 演唱会影响被高估（场馆远 / 已演完 / 观众不住宿）
- 竞对随后降价，我们变成明显最高
- 关低价产品导致 OTA 排名/曝光下降（中国 OTA 尤相关，Hypothesis）
- MinLOS 挡掉高价值单晚或挡掉肩日组合
- 取消率上升（涨价后持有成本高的预付/可取消结构变化）
- 房型结构错：基础房卖超、高档房剩一堆
- 用户执行时只改了一个渠道，出现价差/串价

**输出：** 风险 → 观察指标 → 对应 Trigger。

**禁止事项**

- 禁止只写「有市场风险」而不写机制。
- 禁止用风险当借口把动作写成「观察」。

---

### 8. What To Watch

**输入：** 动作 + 风险。

**做什么**

列一张 **未来 24 / 48 / 72 小时** 观察表，每项必须有口径：

```text
指标          窗口    口径                         谁提供
Pickup Rooms  24h     该 Stay Date 净增间夜（含取消） 用户报表/口述
Pickup Rooms  48h     同上累计
Cancel Rooms  24h     该 Stay Date 取消间夜
Comp BAR      24h     同一房型/含早口径尽量对齐
自身 BAR 已执行? 即时   是否真改到建议区间
渠道价差      24h     直销 vs 携程/美团/Booking
新单 Segment  24h     Transient vs Group
```

默认最少 5 个：24h Pickup 间夜、24h 取消间夜、竞对 BAR、自身价格是否执行、新单是否仍为散客。

**禁止事项**

- 禁止「关注市场变化」。
- 禁止只写 % 不写间夜（300 间酒店 1% = 3 间，口径必须能还原）。

---

### 9. Re-evaluation Trigger

**输入：** What To Watch + 分阶段条件。

**做什么**

Trigger 必须是 **可观察事件 → 下一步动作**，带数字。模板：

```text
若 <指标> 在 <窗口> <阈值> → <具体动作，含价格/库存/限制>
```

每个主动作至少 3 条 Trigger，覆盖：过激 / 正确需加码 / 信息翻转。

常用阈值起点（Hypothesis，按酒店规模缩放；300 间酒店示例如下，其他规模用「占总房 %」或「占剩余 %」改写）：

| 信号 | 300 间酒店起点 | 缩放 |
| --- | --- | --- |
| 涨价后过激 | 24h Pickup < 3 间（约剩余的 3% 或总房 1%） | 总房 × 1% 或剩余 × 3%，取较宽者再收紧 |
| 涨价成立可加码 | 24h Pickup ≥ 8 间且竞对未降 | 总房 × 2.5% 或与涨价前 1 日 Pickup 持平 |
| 持有 | 24h Pickup 3–7 间 | 介于两者之间 |
| 取消异常 | 24h 取消 ≥ 平时日取消的 2 倍；或单日取消 ≥ 6 间 | 有历史用历史；无历史用总房 2% |
| 竞对集体再涨 | 主要竞对中位价再 +10% 或最低竞对升到我们 BAR 之上 | — |
| 需求质量翻转 | 发现近 7 日 Pickup 中单笔 Group ≥ 40 间 | 或 ≥ 该窗口 Pickup 间夜的 50% |

**输出：** 3–6 条 if-then。用户不用再问「然后呢」。

**禁止事项**

- 禁止「若效果不好再调整」。
- 禁止 Trigger 只有指标没有动作。

---

### 10. Confidence

**输入：** 信号一致性、Minimum Required 完整度、动作可逆性。

**做什么：** 用第六节启发式打 High / Medium / Low，并写 **为什么不是上一级**。

**输出**

```text
Confidence: Medium
为什么不是 High：…
为什么不是 Low：…
因此建议怎么用：执行第一刀 + 24h 复核；不要一次跳到区间上沿。
```

**禁止事项**

- 禁止无理由的 High。
- 禁止用 Low 当「我什么都不说」的借口。Low 也要出条件化动作。

---

## 2. 信息不足协议（任务书第六节）

现实数据永远不完美。协议是强制的，不是附录。

```text
已有信息
  → 先做当前最合理判断（十段都写，不空着）
  → 给出条件化建议（IF … THEN … ELSE …）
  → 只再要 3 个最值钱的数据
```

### 2.1 什么叫「当前最合理判断」

- 用已有信号家族能对齐的方向（涨 / 降 / 不动 / 先控库存不改 BAR）。
- 幅度用宽区间，首选取区间中偏保守的一侧（涨价取中偏低，降价取中偏高，避免第一刀过头）。
- 把最能翻转结论的未知写成 IF。

### 2.2 条件化建议怎么写

至少覆盖「主假设成立 / 主假设被推翻」两条：

```text
主路径（当前最合理）：Stay Date D，BAR 899 → 1029（区间 999–1049）。
IF 近 7 日 Pickup 中单笔 Group ≥ 40 间
  THEN 撤回第二刀，BAR 停在 999，重做 Transient 预测。
IF 演唱会不在本酒店 3 公里内且无 overnight 客群
  THEN 视为普通 Pace Ahead，第一刀上限 999，不按事件定价。
IF 24h Pickup < 3 间
  THEN 按 Trigger 回退，不坚持 1029。
```

### 2.3 只补 3 个：怎么挑

按 **翻转价值** 排序，不是按「知识完整性」：

1. **翻转方向** 的数据（会让涨变降、接团变拒团）— 第一优先。
2. **改变幅度** 的数据（999 还是 1099）— 第二。
3. **改变工具** 的数据（动价格还是动 MinLOS / 关产品）— 第三。
4. 同样价值时，选 **用户明天最容易拿到的**（一张 OTB 截图 > 要一年 Booking Curve）。

禁止要第 4 个。可以把第 4 以后写进「有了更好，但不是今天的阻塞」。

通用挑选顺序（T7 有残缺场景表，这里是算法）：

| 已有 | 最值钱的 3 个候选（按需取前 3） |
| --- | --- |
| 几乎什么都没有 | Stay Date+DTA、OTB 间夜或 OCC+总房、当前 BAR |
| 有 OTB+BAR，无速度 | 7D Pickup 间夜、LY 同 DTA OTB、竞对 BAR |
| 有速度+事件，无结构 | Segment/来源 Pickup、房型剩余+房价、事件日期/距离/是否 overnight |
| OCC 低要不要降 | DTA、LY/曲线 Pace、7D Pickup |
| 有团询 | 冲突日 Transient OTB+预测、当期 BAR、按日剩余库存 |
| 要不要上 OTA 促销 | 当期 Pace、净价/佣金、取消政策与 BAR 价差 |

### 2.4 禁止的信息不足反应

- 「数据不足，无法判断。」
- 要一张 20 项清单才肯说话。
- 假装未知是已知（编城市、编弹性、编演唱会观众 overnight 比例）。

---

## 3. Revenue Opportunity 扫描清单（任务书第三十三节）

每次分析，**主动扫完**这 12 项，不要等用户点名。每项判定：适用 / 不适用 / 信息不足。适用的进第四节打分。

| ID | 机会 | 典型信号（有 ≥2 条才标适用） | 对称风险（漏扫会出事） | 常见动作类型 |
| --- | --- | --- | --- | --- |
| O1 | Underpricing | Pace Ahead；Pickup Fast；BAR < 最低竞对 ≥8%；事件/Compression | 早卖完、ADR 留在桌上 | 涨 BAR；关低价；分阶段 |
| O2 | Overpricing | Pace Behind **且** Pickup Slow **且** BAR 明显高于竞对；转化差 | 降早了、降错了（其实是渠道关了） | 先查库存/渠道是否开着，再小步降或开战术产品 |
| O3 | High Demand Opportunity | 事件+快 Pickup+竞对涨/满 | 按平日卖 | 价格+Restriction+关促销 |
| O4 | Low Demand Risk | 长 DTA 但曲线已落后、无事件、竞对在降 | 无效降价打 ADR | 先诊断再决定是否动 BAR |
| O5 | Pace Opportunity | 相对 LY/曲线明显 Ahead 或 Behind | 用绝对 OTB% 决策 | 按 Ahead/Behind 选涨或等 |
| O6 | Room Type Opportunity | 某房型剩余结构与需求不匹配；价差倒挂/过大/过小 | 只动最低 BAR | 调差价、关某房型、upsell |
| O7 | Inventory Opportunity | 渠道可售不均；该关的没关；超售空间 | 某渠道卖穿或某渠道零库存 | Open/Close/Limit |
| O8 | Restriction Opportunity | 高峰单晚在吃掉连住；肩日空 | MinLOS 挡掉所有需求 | MinLOS/CTA/CTD |
| O9 | Channel Opportunity | 某渠道净贡献差仍在放低价；直销可收 | 只看 Gross ADR | 关网红促销、调配额、保平价 |
| O10 | LOS Opportunity | 高峰+肩日组合价值 > 单高峰 | 肩日卖散、高峰被单晚占 | MinLOS、连住价、肩日包 |
| O11 | Overbooking Opportunity | 历史取消/No-show 稳定，DTA 短，Walk 成本可控 | Walk 爆、口碑 | 建议超售幅度（只建议不执行） |
| O12 | Group Opportunity | 团询 vs 散客期望值；或已有团 wash | 错接团挤掉高价散客 | Accept / Reject / Counter |

扫的时候同时问一句反题：「这个机会的反面风险是不是其实更大？」

---

## 4. Impact × Confidence × Urgency 排序

对每个「适用」机会/风险打 1–5 分，**Score = I × C × U**。降序。Daily Brief 和 Recommended Action 只取 Score 最高的 1–3 个。

### 4.1 Impact（做对或做错，对当夜/当周收入的影响）

| 分 | 定义（不要用假精确金额；用库存和价差量级） |
| --- | --- |
| 5 | 剩余库存 × 可能价差 ≥ 约 1 晚总房收入的 3%，或涉及满房/拒单/大团置换 |
| 4 | 明显的 ADR 或 OCC 路径选择，影响一晚里几十间的成交价 |
| 3 | 单一杠杆、单一房型或单一渠道，影响可见但不是当夜主叙事 |
| 2 | 小优化（差价 20–30 元、个别 Rate Plan） |
| 1 | 文档/观察级，几乎不改当天决策 |

粗算 Impact 的合法式（数量级，不是预报）：

```text
量级 ≈ Remaining Rooms × |Recommended BAR − Current BAR| × 成交概率折扣
成交概率折扣：High demand 用 0.5–0.8；不明用 0.3–0.5；Low demand 降价用 0.2–0.4。
```

写进报告时只说「量级大约是数万元还是数千元」，不输出假精确到个位的收入。

### 4.2 Confidence（对「这是真机会」的信心，不是对精确数字的信心）

直接映射第六节：High=5 或 4，Medium=3，Low=2 或 1。有方向无幅度时，C 最高 3。

### 4.3 Urgency（晚一天动手的代价）

| 分 | 定义 |
| --- | --- |
| 5 | DTA≤3，或 Days-to-Sellout ≤2，或团询今天要回复 |
| 4 | DTA≤7，或 Days-to-Sellout ≤ DTA 的 1/3，或活动即将放票/即将官宣结束 |
| 3 | DTA 8–21，动作仍落在主预订窗口 |
| 2 | DTA 22–45，可今天定方向、本周内执行 |
| 1 | DTA>45，或纯知识性问题 |

### 4.4 排序规则

1. Score 降序。
2. Score 相同：Urgency 高的先做（卖空不可逆）。
3. 再相同：选可逆动作先于不可逆（改 BAR 可逆；接 80 间团、设严 MinLOS 较不可逆）。
4. 冲突动作（又涨又降）禁止同时出；回到 Diagnosis。

---

## 5. Daily Revenue Brief 大纲（任务书第三十四节）

当用户给的是「一家酒店、一批日期、一天一更」而不是单点咨询时，用 Brief 包装十段，而不是再发明一种文体。Brief 里每一节仍然要能回溯到十段。

```text
# Daily Revenue Brief
Hotel: <名或代码>
Brief Date: <分析日，标时区 Asia/Shanghai>
Data as-of: <数据截止>
Coverage: <Stay Date 范围>

## 1. Executive Summary
今天最重要的 3–5 个判断。每条 = 日期 + 机制 + 动作方向（可带首选价）。
不要写「整体平稳」。

## 2. Dates To Watch
按 Score 列出 3–8 个 Stay Date。每行：
DTA | OTB% / 间夜 | 3D Pickup 间夜 | Pace vs LY | BAR vs 最低竞对 | 主机制 | 是否今天动手

挑选规则（按顺序加，去重，最多 8 个）：
1) Days-to-Sellout < DTA × 0.5
2) Pace vs LY 偏离 ≥ 8pp
3) 事件日及 ±1 肩日
4) DTA≤7 且 Pickup 连续两日 ≈0
5) 用户点名的日期
6) 房型或渠道已卖穿的日期

## 3. Revenue Opportunities
只写 Score 前 3。格式同第三节输出。

## 4. Revenue Risks
对称写前 3。必须包含「若今天不作为，最坏是什么」。

## 5. Pricing Recommendations
按 Stay Date 列表格：房型 | 当前 | 建议区间 | 首选 | 阶段 | Confidence。
禁止「适当上调」。

## 6. Inventory Recommendations
开/关/限额，写到房型或渠道。无动作写「今天不改库存」+ 原因。

## 7. Restriction Recommendations
MinLOS / CTA / CTD / Closed。无动作写「今天不设新限制」+ 原因。

## 8. Channel / Segment Recommendations
如适用：是否参加促销、是否关低价 Rate Plan、团询 Accept/Reject/Counter。
不适用写 N/A。

## 9. Questions / Missing Data
只 3 个，带「补了会改哪条建议」。

## 10. Follow-up Metrics
下一次 Brief 必须能对比的：各重点日 Pickup 间夜、取消、竞对、BAR 是否执行。
```

单日期咨询不必硬套 Brief 标题，但第 9、10 节仍要有。

---

## 6. Confidence High / Medium / Low 启发式

对 **方向** 和 **幅度** 分开打。对外报告取 **较低的那个**。例如：方向 High、幅度 Low → 对外 Medium，并写「方向较稳，幅度是 Hypothesis」。

### 6.1 信号家族（独立才算「多个」）

1. **Pace / 历史：** LY、STLY、Booking Curve、Budget、Forecast
2. **Velocity：** 1D/3D/7D Pickup（间夜）
3. **Price position：** 自身 BAR vs 竞对、vs 自身历史
4. **Inventory pressure：** Remaining、Days-to-Sellout、房型卖穿
5. **External：** 事件、节假日、交通、竞对满房、城市 Compression
6. **Quality：** Segment、渠道、取消、是否大单

同一家族内部的两个指标（3D 和 7D Pickup）只算 **1 个家族**。

### 6.2 High

同时满足：

- Minimum Required 齐（T7）：Stay Date、DTA、总房量、OTB 间夜或 OCC、当前 BAR。
- **≥3 个独立家族同向**，且没有家族强烈反向。
- 不存在「一个未知就能翻转方向」的缺口（或该未知已被 IF 包住且用户确认）。
- 动作是 **可逆第一刀**（改 BAR、关一张促销），不是不可逆大团/长期合同。
- 口径清楚（Pickup 能还原成间夜）。

即使满足以上，**精确到个位的价格点** 不得标 High，除非本酒店有同类日的弹性/反馈。High 只授予方向 + 区间。

### 6.3 Medium（默认档）

出现任一项：

- Minimum 齐，但只有 **2 个家族** 同向。
- 方向清楚，幅度靠启发式（+8–15%、向最低竞对靠拢）。
- 缺 Segment Pickup、房型结构、事件细节、取消率之一，且该未知会改变幅度。
- 有事件旗标但无场馆/距离/是否 overnight。
- 历史对照只有 LY 一个点，没有曲线。
- 数据有小冲突但主方向仍稳。

**Medium 的用法：** 执行第一刀 + 24h Trigger；禁止一次跳到区间上沿或最高竞对之上。

### 6.4 Low

出现任一项：

- 缺 Stay Date 或 DTA 或 OTB 或当前价格，无法落到对象。
- 家族冲突：Pace Ahead 但 7D Pickup≈0；或 BAR 已高于全部竞对但 Pickup 爆炸且无事件解释。
- 只有 1 个家族，无旁证。
- 用户数字自相矛盾且无法调和。
- 动作不可逆（大团、长期关房、大规模超售）且 Displacement / Walk 数据缺失。
- Pickup 窗口口径完全不明，连间夜都换不出。

**Low 的用法：** 仍给条件化区间，但默认 **先不动或只做可逆的关破价**；3 个补数写在最前。

### 6.5 自动降级规则

| 触发 | 处理 |
| --- | --- |
| 要用「演唱会」撑起涨价幅度 | 事件细节未知 → 幅度 Confidence 降为 Low，方向最多 Medium |
| 7D Pickup 很快但无 Segment | 方向最多 Medium（可能是一团） |
| 建议 MinLOS / 接团 / 超售 | 在对应输入缺失时，该项 Confidence 单独 ≤ Low |
| 用户说「取消率正常」无数字 | 不把取消当正向证据，只当「未发现负向」 |

---

## 7. 完整工作示例（Simulation / 框架示范，不是真实酒店）

> **声明：** 以下酒店、演唱会、竞对价格均为任务书第四节教学案例。按十段走一遍，用来检验本框架能否落到具体数字。不声称这是某家真实酒店的建议。标 Hypothesis 的句子不得在真实分析里改成 Fact。

### 7.0 用户原始输入（任务书第四节）

```text
酒店：300 间
Stay Date：10 月 3 日
DTA：14 天
OTB：68%
过去 3 天 Pickup：+12%
过去 7 天 Pickup：+27%
去年同期同 DTA：55%
当前 BAR：899
主要竞对：999 / 1029 / 1099
取消率：正常
当地存在大型演唱会
```

### 7.1 Intake（对内计算）

**口径假设（标 Hypothesis，因用户未定义 Pickup% 分母）：** Pickup% 按 **占总房量** 计。若实际是「相对 7 日前 OTB 的增幅」，间夜会不同，见条件化。

| 项 | 值 | 类型 |
| --- | --- | --- |
| Total Rooms | 300 | Fact（用户给） |
| Stay Date | 10-03 | Fact |
| DTA | 14 | Fact |
| OTB OCC | 68% | Fact |
| OTB Rooms | 300 × 0.68 = **204 间** | 计算 |
| Remaining | 300 − 204 = **96 间**（OO 当 0） | 计算；OO 是 Unknown |
| 3D Pickup | 12% × 300 = **36 间** / 3 日 = **12.0 间/日** | 计算 + 口径 Hypothesis |
| 7D Pickup | 27% × 300 = **81 间** / 7 日 ≈ **11.6 间/日** | 计算 + 口径 Hypothesis |
| 4–7 日前这 4 日 Pickup | 81 − 36 = 45 间 ≈ 11.3 间/日 | 计算：速度不是最后 3 日才突然起来 |
| Pace vs LY | 68% − 55% = **+13pp** | 计算 |
| BAR | 899 | Fact |
| 最低/中位/最高竞对 | 999 / 1029 / 1099 | Fact（用户给的三个点） |
| 价差 vs 最低竞对 | 899 − 999 = **−100 元（−11.1%）** | 计算 |
| 价差 vs 中位 | 899 − 1029 = **−130 元（−12.6%）** | 计算 |
| 价差 vs 最高 | 899 − 1099 = **−200 元（−18.2%）** | 计算 |
| Days-to-Sellout @ 12 间/日 | 96 / 12 = **8 日** → 约在 DTA=6 卖完 | 计算；若速度衰减则延后 |
| 取消 | 「正常」无数字 | 弱 Fact，不能当证据 |
| 演唱会 | 存在，无日期/场馆/距离 | Fact（有活动旗标）+ 细节 Unknown |

**数据冲突：** 无。  
**Unknown 高翻转价值：** ① Segment/是否一团 ② 房型剩余与各房型价 ③ 演唱会日期/距离/overnight ④ Pickup% 口径 ⑤ OO 与限制现状 ⑥ 当前促销/低价产品。

**预选 3 个补数：** Segment Pickup（或近 7 日是否有单笔 ≥40 间）；房型剩余+房价；演唱会日期与位置。

### 7.2 十段输出（可直接当顾问回复骨架）

#### 1. Situation

300 间酒店，Stay Date 10 月 3 日，DTA 14。OTB 68% = 204 间，剩余 96 间（OO 未知，先当 0）。过去 3 日 Pickup +12% ≈ 36 间（12 间/日），过去 7 日 +27% ≈ 81 间（11.6 间/日），3 日与 7 日速度接近。去年同 DTA OTB 55%，今年领先 13pp。当前 BAR 899，用户给出的主要竞对为 999 / 1029 / 1099。取消率仅描述为「正常」。当地存在大型演唱会，场次与位置未给。用户问题本质：10 月 3 日要不要动价、动多少。

#### 2. Diagnosis

**检查单：**

| # | 判定 |
| --- | --- |
| D1 DTA | 14 日 = 中窗口，不是最后 72h，也不是 45 日以外。此时 68% 已经偏高，需对照历史。 |
| D2 Pace | vs LY +13pp → **Ahead**（Fact：两个 OTB 点的差；「领先是否足够」是判断）。 |
| D3 Pickup | 11–12 间/日，按此速度 8 天卖完、早于入住 → **Fast**（Hypothesis：未扣衰减，未扣一团）。 |
| D4 质量 | Segment Unknown → 不能确认可持续。 |
| D5 价格 | BAR 低于全部给定竞对 100–200 元 → **价格位置偏低**（Fact：相对这 3 个点）。竞对是否可比 Unknown。 |
| D6 库存 | 剩 96 间=32%，压力中等偏高。房型结构 Unknown。 |
| D7 Restriction | Unknown。 |
| D8 渠道/低价 | Unknown。 |
| D9 外部 | 有演唱会旗标，Compression **不是 Fact**。 |
| D10 Forecast | 未给。 |

```text
Fact:
- OTB 204 / 剩 96 / DTA 14
- vs LY +13pp
- 3D/7D Pickup 按总房口径换算为 36 与 81 间，速度接近
- BAR 899 < 竞对 999–1099

High-probability:
- 主机制是 Pace Ahead + Fast Pickup + 价格低于给定竞对，属于 Underpricing，并存在 Early Sellout 路径
- 第一刀应该涨 BAR，而不是降价或只观察

Hypothesis:
- 演唱会制造 overnight Compression
- Pickup 以 Transient 为主，速度可维持到 DTA 7 附近
- 竞对三家构成有效 Comp Set
- Pickup% 分母是总房量
- 合理第一刀在收到最低竞对至中位竞对一带（999–1029）

Unknown:
- Segment / 是否大单
- 房型与限制与促销
- 演唱会日历与距离
- 真实取消率、OO、Forecast、Booking Curve
```

**主诊断：** 10 月 3 日是 **Pace Ahead + Fast Pickup 下的 Underpricing**，主风险是按 899 继续卖、在 DTA 6 附近卖完并把 ADR 留在桌上。  
**次诊断：** 事件日管理（Concert/Event）可能成立，但未证实，不能把第一刀幅度建立在演唱会故事上。  
**问题树枝：** `diagnosis/problem-tree.md` §7 Pace Ahead + §5 Pickup Too Fast。事件未证实，不挂死 Concert 枝。Underpricing 作为 §7 的定价动作类型，不是独立已证枝。

#### 3. Revenue Opportunity / Risk

扫描：

| ID | 判定 | 备注 |
| --- | --- | --- |
| O1 Underpricing | 适用 | Pace+速度+价差三家族同向 |
| O2 Overpricing | 不适用 | |
| O3 High Demand Opportunity | 信息不足偏适用 | 事件未证实，按「可能」降权 |
| O4 Low Demand Risk | 不适用 | |
| O5 Pace Opportunity | 适用 | 与 O1 合并，不重复动作 |
| O6 Room Type | 信息不足 | |
| O7 Inventory | 信息不足 | 至少应关未知低价产品（条件化） |
| O8 Restriction | 信息不足 | MinLOS 不进第一刀 |
| O9 Channel | 信息不足 | 不参加破价促销 |
| O10 LOS | 信息不足 | 肩日未给 |
| O11 Overbooking | 不适用（DTA 14，取消无数字） | |
| O12 Group | 信息不足 | 若 Pickup 是团则翻转 |

打分（主项）：

| 项 | I | C | U | Score |
| --- | --- | --- | --- | --- |
| O1 涨 BAR / 收低估 | 4（96 间 × ~100–150 元量级，折扣后是万元级不是十万级） | 3（方向 Medium，幅度 Hypothesis） | 4（Days-to-Sellout 8 < DTA 14，且在 7 日 Urgency 带） | **48** |
| 关低价/拒促销 | 3 | 3 | 4 | 36 |
| 事件 MinLOS | 3 | 1 | 3 | 9（今天不做，进补数） |
| Early Sellout 风险（O1 的对称） | — | — | — | 与 O1 同处理 |

**主机会：** Underpricing（把 899 收到 999–1049 一带）。  
**主风险：** ① Pickup 是一团 → 涨完散客停；② 涨过猛 24h 成交近 0；③ 演唱会假信号导致第二刀过头。

#### 4. Recommended Action

**动作 A（主，今天做）— 上调 10 月 3 日 BAR**

```text
Stay Date:            10 月 3 日
Room Type:            未知。先动 BAR / 基础售卖房型。套房差价今天不动。
Rate / Rate Plan:     BAR（及与 BAR 连动的公开价）
Current Value:        899
Recommended Range:    999–1049
Preferred (首选):     1029
Staging:
  第一刀（立即）：899 → 1029（可接受执行带 999–1049；禁止第一刀 ≥1099）
  第二刀：仅当 Trigger「加码」满足 → 1069（区间 1049–1099）
Inventory Action:     不关 BAR。剩余 96 间继续可售。
Restriction Action:   今天不设 MinLOS / CTA（演唱会日历未知）。
Channel Action:       10 月 3 日不参加会把成交价打到 899 以下的 OTA 促销 / 今日特价 / 连住破价。
Do-not-do:
  - 第一刀提到 1099 或以上
  - 只改一个 OTA、直销仍挂 899（制造串价）
  - 用「适当涨价」交差
  - 因有演唱会就把肩日一并暴涨（肩日数据未给）
```

**动作 B（配套，今天做）— 关掉明显低于新 BAR 的破价产品**

```text
Stay Date:            10 月 3 日
Rate / Rate Plan:     任何公开可订、价低于 999 的促销/打包/限时抢
Current Value:        Unknown（用户未给）
Recommended:          关闭或提价到 ≥999，避免 BAR 1029 被 799 促销打穿
IF 不存在此类产品 THEN 无操作
```

**动作 C（今天不做，条件化）— MinLOS**

```text
IF 演唱会就在 10 月 3 日晚且酒店在合理 overnight 半径
  THEN 下一步评估 10 月 2–3 日 MinLOS=2（需肩日 OTB，不在本次第一刀）
ELSE 不设。
```

决策卡：`recommendations/increase-bar-pace-ahead.md`。

#### 5. Why

**数据：** DTA 14、OTB 204/68%、LY 55%、3D +36 间、7D +81 间、BAR 899 vs 竞对 999–1099、剩 96 间。

**逻辑链：**

```text
Pace Ahead (+13pp vs LY)
+ Pickup Fast（约 12 间/日，Days-to-Sellout ≈8 < DTA 14）
+ BAR 低于全部给定竞对 100–200 元
→ 三个独立家族同向：历史节奏、成交速度、价格位置
→ 主机制 Underpricing / Early Sellout 路径
→ 第一刀把 BAR 收到最低竞对至中位竞对（999–1029），首选 1029
→ 不一次收到 1099：事件和弹性都是 Hypothesis；任务书要求分阶段 + Trigger
```

**理论 / 过程：** 任务书第十五节（给区间+首选，禁止「适当」）；第三十二节（先诊断）；第四十三节 Increase BAR 卡。未引用未核过的教材或厂商算法。

**Hypothesis（必须保持标签）：** Pickup 分母=总房；竞对可比；需求以散客为主；1029 的幅度（+14.5%）落在「第一刀 +8–15% 或靠拢竞对」启发式内；演唱会有 overnight 效应。

#### 6. Expected Impact

- **增量成交 ADR：** 若新单按 1029 成交，较 899 **+130 元/间**。不得假设 96 间全按 1029 卖完。
- **已售 204 间：** 锁价，不进涨价收益。
- **OCC 路径：** 不追求更高 OCC（已经在 Early Sellout 路径上），接受速度可能减慢。只要 14 日里平均 ≥7 间/日，仍能消化剩余（96/14≈6.9）。
- **Pickup：** 第一刀后 24h 预期仍为正但可能低于 12 间；3–7 间算「价动但需求还在」；≥8 间算「还能加码」；<3 间算「可能过激」。
- **RevPAR：** 若成交未停，最终 RevPAR 随 ADR 上移；若成交停，RevPAR 可能低于维持 899 的路径。所以必须有回退 Trigger。
- **Conversion / Net / Profit：** Unknown。无点击、佣金、成本数据。不编。

#### 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 涨过猛 | 弹性比假设高，1029 停售 | 24h Pickup 间夜 | <3 间 → 回退带 |
| Pickup 是一团 | 散客从未按 12 间/日在买 | Segment / 大单 | 发现 ≥40 间单笔 → 停第二刀，BAR 上限 999 |
| 演唱会假信号 | 无 overnight | 场馆信息 | 证实无 overnight → 不上 1049+ |
| 竞对降价 | 我们变成明显最高 | 竞对 BAR | 最低竞对 ≤949 → 回到 999 并重评 |
| 只改半边渠道 | 串价、被投诉或被 OTA 惩 | 多渠道价 | 发现价差 → 先对齐再谈第二刀 |
| 取消变差 | 「正常」无基数 | 24h 取消间夜 | ≥6 间或明显翻倍 → 重评需求质量 |

#### 8. What To Watch

| 指标 | 24h | 48h | 72h | 口径 |
| --- | --- | --- | --- | --- |
| Pickup 间夜 | 主观察 | 累计 | 累计 | 10-03 净增（新订−取消） |
| 取消间夜 | 要 | 要 | — | 10-03 |
| 竞对 BAR | 三家点价 | 三家 | 是否有满房 | 尽量同房型同早餐 |
| 自身各渠道 BAR | 是否都到 1029 带 | 价差 | — | 直销/携程/美团/Booking |
| 新单 Segment | 有无大单 | 累计 Group 间夜 | — | 一笔 ≥20 间就要警惕 |
| 剩余库存 | 96−净增 | — | — | 含 OO 更正 |

#### 9. Re-evaluation Trigger（10 月 3 日，300 间尺度）

```text
1) 未来 24h Pickup < 3 间
   → 第一刀可能过激。BAR 保持 1029 再看 24h（若用户已改到 1049 则先降回 1029）。
     若 48h 累计 Pickup < 5 间 → 降到 999（区间 979–999，首选 999），并核 Segment 与渠道价差。

2) 未来 24h Pickup 3–7 间，且竞对仍 ≥999
   → 判断成立但不要加码。守 1029，48h 再评。

3) 未来 24h Pickup ≥ 8 间，且最低竞对仍 ≥999、无大单解释
   → 第二刀：BAR 1029 → 1069（区间 1049–1099）。禁止无新信号直接 >1099。

4) 主要竞对整体再上调约 10%（例如中位从 1029 → ≥1130），或至少两家满房
   → 重新评估第二刀或第三刀；第三刀区间 1099–1149，首选 1099，Confidence 单独降一档。

5) 取消突然上升：24h 取消 ≥ 6 间，或用户确认「相对平时翻倍」
   → 停止加码，维持当前 BAR，重评需求质量。不自动大降。

6) 翻转信息：近 7 日 Pickup 里单笔 Group ≥ 40 间，或 7 日 81 间中 Group ≥ 50%
   → 撤销「Fast Transient Pickup」假设。BAR 上限 999，重做散客预测后再说第二刀。

7) 演唱会证实与 10-03 overnight 无关
   → 按普通 Pace Ahead：第一刀上限 999，取消 1049+ 路径。
```

#### 10. Confidence

```text
Confidence: Medium
（方向 Medium 偏 High；幅度 Low 到 Medium；对外取 Medium）

为什么不是 High：
- Segment Pickup 未知，7 日 81 间可能含一团
- 演唱会无日历/距离，不能当 Compression Fact
- 无本酒店弹性、无 Forecast、无房型、取消无数字
- 价格点 1029 来自启发式 + 对齐中位竞对，不是弹性最优解

为什么不是 Low：
- Pace / Velocity / Price position 三个独立家族同向
- Minimum Required 齐：日期、DTA、总房、OTB、BAR
- 第一刀可逆，且给了过激回退 Trigger

因此怎么用：
今天执行 899 → 1029（执行带 999–1049），关破价，24h 用间夜 Trigger 决定守/加/回。
不要一次到 1099。
```

### 7.3 任务书第四节 12 问对照（便于检查有没有落到数字）

| # | 问题 | 本仿真答案 |
| --- | --- | --- |
| 1 | 当前需求状态 | High-probability：中高需求、速度快；事件需求是 Hypothesis |
| 2 | Pace 是否领先 | 是，vs LY +13pp |
| 3 | 是否存在 Compression | **Unknown / Hypothesis**。有旗标，无竞对满房、无场馆 |
| 4 | 899 是否偏低 | 相对给定竞对，是（−100 至 −200） |
| 5 | 是否应该涨价 | 是，第一刀涨 |
| 6 | 涨到多少 | **区间 999–1049，首选 1029** |
| 7 | 一次还是分阶段 | **分阶段**。第二刀 1049–1099 首选 1069，需 24h Pickup≥8 且非一团 |
| 8 | 哪个房型先动 | 未知结构 → **先动 BAR/基础房型**，套房差价不动 |
| 9 | 是否关闭低价产品 | **是**（若存在低于 999 的公开可订产品） |
| 10 | 库存是否保护 | 不关 BAR、不锁 96 间；保护方式是价+关破价，不是关房 |
| 11 | 24/48/72h 看什么 | Pickup 间夜、取消、竞对、多渠道是否执行、有无大单 |
| 12 | 什么说明判断错 | 24h Pickup<3；或 Pickup 原是 ≥40 间团；或演唱会无 overnight；或竞对降到 ≤949 |

### 7.4 信息不足三问（本仿真）

如果只能再补 3 个：

1. **近 7 日 Pickup 的 Segment / 是否有单笔 ≥40 间** — 翻转「Fast Transient」；会把首选从 1029 降到 999 并取消第二刀。
2. **10 月 3 日各房型剩余 + 各房型当前价** — 改工具：该关的是某房型而不是只动 BAR。
3. **演唱会日期、场馆距离、是否主要 overnight** — 决定能不能走 1049+ 和第二刀。

有了更好但不是今天阻塞：真实取消率、OO、Forecast、Booking Curve、促销列表、Comp Set 是否可比。

---

## 8. 单点咨询 vs 多日期 Brief vs 团询

| 用户来法 | 过程 |
| --- | --- |
| 一个 Stay Date + 一堆数 | 走完整十段 |
| 未来 14–60 日整表 | 先 Intake → 用 Dates To Watch 规则抽出 ≤8 日 → 只对动手日写完整动作表，其余一览表 → 包成 Daily Brief |
| 「这个团接不接」 | 十段仍写，但 Recommended Action 的主动词是 Accept / Reject / Counter；价格卡让位给置换逻辑（团戏本未完成前：写清需要的散客预测、按日剩余、BAR、餐会、Wash） |
| 只有一句「OCC 好低帮我看看」 | 十段仍写；动作可能是「今天不降价」+ 条件；3 个补数用 T7 残缺场景 3 |

---

## 9. 不合格输出自检（发出前过一遍）

- [ ] 有没有出现「适当 / 优化 / 持续观察」当主动作？
- [ ] 每个主动作有没有 Stay Date + 当前值 + 区间 + 首选？
- [ ] Hypothesis 有没有标出来？
- [ ] 有没有伪造精确增收？
- [ ] 信息不足时有没有条件化 + 恰好 3 个补数？
- [ ] 12 项机会扫过没有（不适用也要说）？
- [ ] Trigger 是不是「数字 → 动作」？
- [ ] Confidence 有没有写为什么不是上一级？
- [ ] 仿真数字有没有被写成真实酒店结论？

---

## 10. 修订记录

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首次落地。来源：任务书第五、六、十五、三十二、三十三、三十四、四十三节。幅度启发式与 300 间 Trigger 为 Hypothesis，待 `feedback/` 校准。 |
