# Unconstrained vs Constrained｜需求与预测缺口（顾问可调用）

> 资产：Scout 2026-08-20 17:00 理论卡  
> 路径：`forecasting/unconstrained-vs-constrained.md`  
> 能力层级：Understand → Diagnose → Advise（观察点）  
> Last Verified：2026-08-20 20:00 CST（交叉句；步骤仍 17:00）  
> 知识类型：**Vendor Methodology**（Duetto Resource Hub）+ Theory 对照 + Hypothesis（顾问用法）  
> 证据等级：A Vendor；**不是 S 级普遍酒店公式**  
> 配套：`forecasting/forecast-framework.md` §3 · `advisor-playbooks/restriction-overuse.md`（P33）· `recommendations/do-not-cut-when-restricted.md`  
> 禁止：把满房日 Sold=100 写成 Demand=100；编造 IDeaS 对等公式；把缺口直接换成「必须再涨 X%」；把 Budget 当 Forecast。

---

## 0. 一句话

**Demand（unconstrained）是「还能来多少」；Forecast（constrained）是「现实还能卖多少」。**  
二者缺口是 yield opportunity——可涨价或收紧限制去筛高价值客人；**也可能是自己把需求挡掉了**。顾问先分清缺口来自容量截断还是限制截断，再动价。

```
Demand (unconstrained)  可以 > 100% 可售
Forecast (constrained)  封顶 100% 可售
缺口                    = yield opportunity（也可能是 Restriction 过度）
```

---

## 1. Theory（行业对照，已有框架）

`forecast-framework.md` §3 已核：Weatherford & Kimes 2003 把历史售出视为被容量与房价档 Booking Limit **截断**（**S**，论断级）；Duetto Glossary 与 IDeaS Revenue Science 101 各自给出 Unconstrained / Constrained 定义（**A Vendor**）。

本页**不重写**那套分类。本页只把 Duetto Resource Hub 方法页落到顾问动作，并标明：下列步骤是 **Duetto 方法，不是行业标准算法**。

IDeaS 公开页只给方向：「100 间店 Demand≈100 与 Demand≈1000 最终都可能满房，可采取的 yield 完全不同」（已录 forecast-framework §3）。**本库不编造 IDeaS 对等公式、不把两家 RMS 步骤一一映射。**

---

## 2. Vendor Methodology（Duetto Resource Hub，2026-08-20 打开）

源：https://duetto.my.site.com/resourcehub/s/article/Understanding-Forecasts  
文题：*Understanding Forecasts and Demand*  
级：**A Vendor Methodology**。文中声明：多数店仍用此算法；新 AI/ML forecast 分阶段上线，**部分步骤只适用于 legacy**。顾问写建议时点名「Duetto 方法」，不要说「酒店业都这样算」。

### 2.1 两个对象

| 词（文中） | 定义（转述，不整段摘录） | 不是什么 |
| --- | --- | --- |
| **Demand（unconstrained）** | 无库存上限、无定价吓退、无限制时**能卖多少**。基于**观察到的预订模式**，不是无限理论需求。 | 不是搜索次数；不是「想住的全人类」；不是 Budget |
| **Forecast（constrained）** | 现实预测：容量、现行价格、现行限制之后，预期实际售出。**封顶 100% 可售。** | 不是「真实想住的人数」 |

散客 unconstrained 怎么来（Vendor 步骤，不是 S 公式）：

```
STLY + 当前 pace / pickup + 季节性
按 LOS 预测到达（arrivals by LOS）
OCC 是派生量 → 所以 Demand 可以超过 100%
```

团队：**用已承诺间夜（含尚未 pickup 的 block）**，不另建模「团队需求曲线」。顾问含义：团询走置换草表，不要把未 wash 的 block 当成散客尾巴。

### 2.2 缺口 = yield opportunity

```
Unconstrained Demand − Constrained Forecast  =  缺口
缺口大  →  可涨价，或收紧限制，筛高价值客人
缺口≈0  →  没有额外 yield 空间（或已被容量/限制吃光）
```

顾问必须立刻问：**缺口是容量截断，还是限制截断？**

| 缺口来源 | 信号 | 第一刀 |
| --- | --- | --- |
| 容量 / 将满 | OTB 高、Denied、竞对满、限制并不过严 | 保护库存 / 涨 / 关低价（P01/P09/P03） |
| **现行限制挡掉本会来的需求** | MinLOS/CTA 开着、OCC/Pickup 差、短住询单或肩日空 | **先松限制，不要先降 BAR**（P33） |
| Pace Ahead 被当成「还能再加增量」 | TBB 被算成正数 | **TBB 不为负**，不要再往上加 |

### 2.3 Constrained 第一步：限制先扣需求（P33 机制）

文中 Constrained 流程的**第一步**：先按现行限制（**CTA / MinLOS / MaxLOS**）扣掉无法实现的需求，**再**优化。

这是顾问最有用的一句：

```
系统（或手工）看到的「需求弱」
    可能已经是「扣掉被限制挡掉的需求」之后的数
OCC / Pickup 差  ≠  市场没人
先问：现行限制挡住了谁？
```

满房日：**Sold=100 不能当 Demand=100。**  
OCC 低但限制开着：**先查是不是自己把需求挡掉了**，再决定松限制还是动价。

### 2.4 TBB 不为负

```
TBB（To Be Booked）= 未来曲线 − 今日曲线
TBB 不为负：已经领先历史 pace 时，不再往上加增量
```

顾问用法（Hypothesis 落地，数字不另编）：

- Pace Ahead：剩余需求不要按「历史同 DTA 还差多少」往上补；Constrained 更接近 Capacity 的上沿，**增量封 0**。  
- Pace Behind：才用历史尾巴估 TBB（与 forecast-framework 加性 Pickup 同向）。  
- 禁止：Ahead 时仍加一截「应该还会来」→ 过度关房 / 错涨。
- 晚课交叉（2026-08-20 20:00）：**TBB=0 只说明不要按历史曲线再加一截需求，不禁止因剩余库存少而关低价或涨 BAR。** Fast Pickup / Increase BAR 仍可走；禁的是虚构增量，不是已证实的稀缺。

与已有 Pace 启发式兼容：Ahead ≥ +8pp 且 Pickup Fast → 上沿可上移、Constrained 更接近 Capacity；**不是**再加一个正 TBB。

### 2.5 价值排序（Vendor；与 LOS 优化同向）

扣完无法实现的需求后，按价值排序：**整段住宿收入 / 压缩天数**。偏好**高总收入长住**，即使短住 ADR 更高。

顾问落地（不编公式）：

- 高峰单晚 ADR 高，但会挤掉「Peak+肩日」两晚总收入 → 限制单晚（MinLOS=2 只盖已证实 Peak），肩日 Open。  
- 不要因为短住 ADR 好看就在肩日也 MinLOS。  
- 与 `pricing/los-optimization.md`、P21/P22 同一把尺。

### 2.6 一次性事件从未来基线剔除

奥运、一届大会等一次性事件要从**未来基线**里拿掉，避免明年普通日被拉高。与 P17「事件错 overlay」同向：事件取消 → 立刻回平日带；明年无事件 → 不要用今年事件日当 STLY 锚。

### 2.7 适用边界

- 多数店仍用此算法（文中声明）。  
- 新 AI/ML forecast 分阶段；**部分步骤只适用于 legacy**。  
- 用户若说「我们 Duetto 已经上新模型」→ 问哪些日期仍走 legacy；本页步骤不当全店定理。

---

## 3. Theory → Decision

| 判断 | 决策含义 | 先调用 |
| --- | --- | --- |
| 满房史 + Constrained=100%，无 Unconstrained 叙述 | **禁止**「已经 100% 所以需求到头」；可能还有涨/关低价空间 | P01 / Event / forecast-framework §3 |
| Unconstrained ≫ Capacity，限制并不过严 | 定价权在；涨或收紧筛高价值 | Increase BAR · Protect · MinLOS 只盖 Peak |
| OCC/Pickup 差 **且** MinLOS/CTA/MaxLOS 开着 | 缺口可能是限制制造的；**先松限制** | **P33** · `do-not-cut-when-restricted.md` |
| 肩日空、Peak MinLOS 盖到了 ±1 | Peak 限制误伤肩日 | P21 解开表 · 肩日 Open 卡 |
| Pace Ahead，有人还按历史尾巴加需求 | TBB 不为负；不要再加增量 | Hold / Protect；不要再涨过最高 |
| 团队 OTB 含未 pickup block | 那是承诺不是散客 Demand | P10 置换；不另建团队需求 |
| 去年有一次性大活动 | 从明年基线剔除 | P17 事件错 |
| RMS 叫降但限制仍开 | Override：先问限制扣了谁 | P33，不盲从 |

**顾问强制句式：**

```
Stay Date __，DTA=__。
OTB __间 / __%。现行限制：MinLOS=__ / CTA=__ / MaxLOS=__。
Unconstrained Demand：__（或「>Capacity / 被限制挡住 = Unknown」）。
Constrained Forecast：区间 __–__，首选 __（≤100% 可售）。
缺口来源：容量截断 / 限制截断 / Pace Ahead 无增量 / Unknown。
今日动作：松限制 / 涨或关低价 / Hold / 才允许围栏。禁止在限制未查清时降 BAR。
```

---

## 4. 顾问用法（两句必须能说出口）

1. **满房日 Sold=100 不能当 Demand=100。** Constrained 撞天花板只说明卖完了，不说明没有人被价或限制挡掉。  
2. **OCC 低但限制开着，先查是不是自己把需求挡掉了。** Pickup 慢可能是 CTA 挡到达、MinLOS 挡短住、MaxLOS 挡长住、或渠道把限制同步错——不是先降价的许可。

过完这两句仍 Behind + 供给开 + 价高 + 市场不冰 + **限制已解开或本来就开** → 才进入 P02 / decrease 卡。

---

## 5. 与已有启发式兼容

本页不改幅度：

```
涨 +5–8% / +8–15% 或收到最低竞对；一天不跳最高；价已最高只关不涨
降：先围栏 −3–5%；BAR −5–10%；禁止一夜 −15%
MinLOS=2 只盖已证实 Peak；肩日 Open
Sellout：先关低价再涨
不编佣金%、Walk 成本、IDeaS 公式
```

限制杠杆优先于降价杠杆：看起来慢、其实是限制挡短住 → 解开该日限制，BAR 不动（restriction-framework §4 已写；本页给预测侧机制）。

晚课复盘交叉（2026-08-20 20:00，不改启发式数字，不重写步骤）：

- **vs P21 / P33：** Peak 已证实 → MinLOS=2 留着（P21）；OCC/Pickup 差发生在肩日或短住被误伤 → P33 先松限制，不要先降 BAR。两剧不是互否。
- **缺口怎么用：** 缺口大 **且限制已合理** → 涨价或关低价（yield，P01/P09/P03）。缺口来自限制过严 → 先松限制（P33）。禁止把「unconstrained−constrained 大」自动写成加严 MinLOS。
- **TBB vs Fast Pickup / Increase BAR：** 见 §2.4。TBB=0 ≠ 禁止涨价。
- **OTB 70%：** 本页与 `theory/otb-pickup-pace.md` 一致——无曲线的绝对 OTB% 不判好坏。P09 仿真里的 70% 只是全店位置，诊断靠房型差（88%/22%），不是把 70% 当好。

---

## 6. 证据

| 论断 | 级 | 源 |
| --- | --- | --- |
| 本节 2.1–2.7 步骤 | A Vendor | Duetto Resource Hub *Understanding Forecasts and Demand*（2026-08-20 打开） |
| 历史售出被容量/Booking Limit 截断 | S | Weatherford & Kimes 2003（forecast-framework 已核） |
| Sold=100 仍可能 Demand≫Capacity | A Vendor | IDeaS Science 101（**只引方向，不编对等公式**） |
| 课纲含 unconstrained vs constrained | A | HSMAI Academy Forecasting（forecast-framework 已核） |
| 「酒店业标准 TBB 公式」 | — | **未找到 S 级公开标准** → 本页 TBB 只作 Duetto 方法 |

未采用：国庆营销博客（C/D）；HSMAI 2026 文仅作 scout（C/B），不进本页启发式。  
未打开：Kimes+Noone 2026-06 Future of RM 全文 → 不摘结论。

---

## 7. Need Verification

| ID | 问题 | 顾问暂用 |
| --- | --- | --- |
| NV-UD-01 | 拒单补全的可复现公开标准 | 满房日 Demand≥Sold；有 Denied 再加一层，标 Hypothesis |
| NV-TBB-01 | TBB 在非 Duetto 店的可复现算法 | 只把「Ahead 不加增量」当方向；不写精确间夜 |
| NV-RST-01 | MinLOS 挂到达日还是在住夜 | 建议同时写到达日与覆盖夜 |

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 17:00 CST | 首版。Duetto Resource Hub 方法页 → 顾问用法。标明 Vendor Methodology。禁止 IDeaS 对等公式。 |
| 2026-08-20 20:00 CST | 晚课复盘：补 P21/P33、缺口来源、TBB vs 涨价、OTB% 四条交叉。无真矛盾。不重写步骤。 |


---

## 9. 前台日志是输入，不是 Demand（2026-08-24 00:17，不改 §1–8 步骤）

可观察代理：[`../metrics/denials-regrets.md`](../metrics/denials-regrets.md) · 决策卡 [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md)。

**FO / 预订日志是 Unconstrained 的输入之一，不是 Demand 本身。** 口头「赶过人」无日期/件数/房型/原因 → 不当 Demand、不涨 BAR。干净容量拒单只作旁证；决策仍看 Remaining + Pace（P03/P09）。限制夜的拒单先走 P33，不自动 +15%。0 拒单可能只是没记。不在此重复 Duetto/IDeaS 步骤。中国字段 / 拒单% / STR Denials Index = **NV**。

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 00:17 CST | 追加本节。不重写 Vendor 步骤。 |
