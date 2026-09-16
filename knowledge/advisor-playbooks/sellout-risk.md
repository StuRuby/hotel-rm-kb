# Playbook P03｜Sellout Risk

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/sellout-risk.md`  
> BACKLOG：P03 Sellout Risk · HIGH · 同开  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`close-low-rate-compression.md` `protect-inventory-fast-pickup.md` `increase-bar-pace-ahead.md` `minlos-peak-protect.md`  
> 理论：`inventory/inventory-control.md` §3 · `forecasting/forecast-framework.md`（截断）  
> 问题树：§5 / §8  
> 与 P04 差别：本篇是「快了/危险了」；Early Sellout 是「已经卖太早、钱留在桌上」。P04 已 drafted：`early-sellout.md`。  
> 证据等级：B；衰减与留房 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

按当前速度会在入住前卖完，或 DTA 已短且剩余很少。防止便宜卖穿，也防止过早关死。  
**库存 vs 涨价的先后：先关低价 / 收限额，再决定涨不涨；价已最高只关不涨。**

完成定义：Days-to-Sellout 公式 + 衰减假设 + 留多少给高价尾部的 Hypothesis。

---

## 1. 信号

中短窗 DTA 2–21（DTA≤2 加重超售/当晚，仍先走本表的关低价）。任 2 条：

| # | 信号 | 300 间例 |
| --- | --- | --- |
| S1 | Days-to-Sellout < DTA | 剩 96、日均 12 → 8<14 |
| S2 | Days-to-Sellout ≤ DTA × 0.5 | 8 ≤ 7？否；若日均 16 → 6≤7 是 |
| S3 | Remaining ≤ 总房 15% 且 Pickup 仍正 | 剩 ≤45 且在进 |
| S4 | 某基础房 Days-to-Sellout ≤3 | 房型压缩 |
| S5 | 竞对已满 + 自身仍开低价 | 溢出风险 |

**衰减假设（Hypothesis，必须写进 Situation）：**

```
线性 Days-to-Sellout 会高估早满（未扣涨价后减速、未扣一团结束、未扣商务后置加速）。
顾问用法：
  乐观早满 = 当前速度不衰减
  中位     = 日均 × 0.7（涨价后常见减速，Hypothesis）
  若中位仍 < DTA → 真有 Sellout Risk
  若只有乐观 < DTA、中位 > DTA → 只关破价，不大涨
```

禁止把线性外推写成最终 OCC=100% Fact。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 「满」只是某渠道配额满，全店还厚 | 开/调配额；不是 Sellout |
| X2 | 历史该 DTA 本来就满（度假节前 20 天满） | 仍要看成交 ADR；可能是 P04 |
| X3 | 一团占位，wash 未发生 | 按散客剩余重算 |
| X4 | 重导假增量 | 修数 |
| X5 | 价已最高 + 低价已关 + Remaining 按中位速度能撑到入住 | 只盯 |
| X6 | 取消已经在升 | 停加码；评超售方向，不精确间夜 |

---

## 3. 库存 vs 涨价：先后（强制）

```
第 0 步  确认真的还能卖：不是渠道假满（X1）
第 1 步  关低价 / 收低价 Booking Limit     ← 可逆，先做
第 2 步  看价位置
          未最高 → 第一刀涨（+8–15% 或收到最低竞对，不跳最高）
          已最高 → 只关 / 限配额 / 评 MinLOS，不涨
第 3 步  留高价尾部（§4）
第 4 步  高峰+肩日齐 → MinLOS=2；否则不做
第 5 步  不关 BAR；不把剩余锁死为 0
```

不要：庆祝 OCC 继续促销；用关光所有渠道代替涨价；无取消史给精确超售间夜。

---

## 4. 留多少房给高价尾部（Hypothesis）

见 `inventory-control.md` §3。本剧本落地：

| 有无历史最后 3 日 Pickup | 留 |
| --- | --- |
| 有 | 按该中位间夜留（至少） |
| 无 | Remaining 的 **20–30%，首选 25%**，或留到「中位速度 Days-to-Sellout ≈ DTA」 |
| DTA≤3 | 不再为「更晚更高价」大量锁房；转为取消替换价 |

给不出点：区间 15–35% + 首选 25%。禁止伪精确「留 17 间可多收 4,280 元」。

---

## 5. 动作表

### 5.1 价格

| 价位置 | 第一刀 | 首选 |
| --- | --- | --- |
| 低 ≥8% | 档 B/C | 重叠带中偏低 |
| 在带内仍会早满 | +5–8% | 近竞对点 |
| 已最高 | **不涨** | — |

例（T6 尺）：899 vs 999/1029/1099 → **999–1049，首选 1029**。  
禁止一夜逻辑不适用于涨；降价侧仍禁止一夜 −15%。本剧本默认不降。

### 5.2 库存

关 < 地板的公开产品；基础房低价配额收剩余 30–50% 或收到「总剩余−尾部预留」（Hypothesis）。BAR Open。房型穿：关该型低入口，高档不降。

### 5.3 限制

仅 Peak+肩日齐时 MinLOS=2。DTA≤3 新设 MinLOS 慎用。

### 5.4 渠道

关破价促销。主 OTA BAR 层保持可订，避免「保护」成假关房。中国配额：低价计划收，BAR 计划不要 0（Hypothesis）。

---

## 6. 观察与 Trigger

| 窗口 | 指标 |
| --- | --- |
| 24h | 净 Pickup、取消、破价是否还在、分房型剩余、竞对满 |
| 48h | 中位 Days-to-Sellout 是否仍 < DTA |

| 事件 | 动作 |
| --- | --- |
| 24h <3 | 可能过激：价回第一刀下限；**不**自动重开破价；解开当天新 MinLOS |
| 3–7 | 守关低价 + 当前 BAR |
| ≥8 且非一团 | 第二刀 +3–8%；配额再收一档；仍不跳过原最高竞对 |
| 取消 ≥总房 2% 或翻倍 | 停加码；超售只给方向 |
| 渠道假满 | 开回 BAR 层 |
| 剩余 ≤5 或某型 ≤3 | 该型只留直销/升级 |

---

## 7. 如果只能再补 3 个

1. 分房型剩余 + 在售最低价 — 改关哪一层。  
2. 1D+3D+7D 与是否大单 — 衰减/一团。  
3. 取消/No-show 历史 — 才允许谈超售数字。

---

## 8. Confidence / 边界

方向 Medium（速度+剩余两家族）。留房比例 Low–Medium Hypothesis。  
已提前很多日满且 ADR 低 → P04 `early-sellout.md`。Last minute 仍剩 → P05。

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P03。先后：先关低价，再涨；价已最高只关。 |

## 10. 交叉（2026-08-23 00:17，不改信号表）

Remaining := **可售**剩余，不是物理空房。维修/自用/锁还在「空着」里 → 先划掉再算 Days-to-Sellout。好看 PMS OCC 不是本剧开门条件。`dont-price-off-ooo-occ.md`。

假高峰（PMS OCC 被 OOO 抬高）先走 **P37** `ooo-capacity.md`；重算后可售真紧且 Pace Ahead 才回本剧。

## 11. 交叉（2026-08-23 04:17，不改信号表）

P37 重算后 **Days-to-Sellout 仍管大门**（S1），不是只看剩余%（S3）。仿真可售 13、DTA 6、Pickup ~1 → 线性 13>6，只有 S3 一条，**不进本剧**；Hold 不是 under-protect。真紧且中位 Days-to-Sellout < DTA 且 Pace Ahead 才回本剧。


## 12. 交叉（2026-08-24 00:17，不改信号表）

前台「赶过人」**不是**本剧 S1–S5。开门仍是 Remaining + Pace / Days-to-Sellout。无日志不当 Demand。有干净容量拒单只作旁证。限制制造的拒单先走 **P33**。指标 [`../metrics/denials-regrets.md`](../metrics/denials-regrets.md) · [`../recommendations/dont-raise-on-verbal-denials.md`](../recommendations/dont-raise-on-verbal-denials.md)。禁止凭故事一夜 +15%。

剧本见 P43 `verbal-denials.md`（2026-08-24 02:17）：口头赶客仍不是 S1–S5；形 D 才回本剧。


## 13. 交叉（2026-08-24 08:17，不改信号表）

Remaining := **过夜可售**，不是钟点 Sold。OCC 108% 若 8 个点是同日再卖，过夜剩余可能不紧。先 `dont-raise-overnight-off-dayuse-occ.md`，真过夜紧才回本剧。膨胀 OCC ≠ P37 缩分母。

## 14. 一行（2026-08-27 18:17，不改信号表）

Sellout/压缩路径上低价档仍开 → 关低价机械复用 `close-low-rate-compression.md`；**嵌套结构 /「涨了还挂着」诊断**走 **P64** `nested-rate-class.md`。本剧 S1–S5 不改。
