# Playbook P09｜Fast Pickup

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/fast-pickup.md`  
> BACKLOG：P09 Fast Pickup · HIGH · 先决策卡  
> 任务书标签：用户 Wave2 指令写作 P10，以本表 ID **P09** 为准  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/protect-inventory-fast-pickup.md` `increase-bar-pace-ahead.md`  
> 问题树：§5 Pickup Too Fast；§7 Pace Ahead；§8 Early Sellout；§11 Room Type  
> 理论：`theory/otb-pickup-pace.md`  
> 过程：`decision-framework/advisor-process.md`（Trigger 表产品化）  
> 证据等级：B  
> Last Verified：2026-08-20

---

## 0. 一句话

速度异常快。先分清 Transient 热、一团堆入、渠道破价、事件，再决定涨、关低价、只限制、还是盯着不动。**快 ≠ 继续促销。**

完成定义：T6 仿真 Trigger 产品化 + 「快但价格已最高」只限制不涨 + 3D 快而 7D 不快先查大单。

---

## 1. 信号（怎样算快）

### 1.1 定量起点（Hypothesis）

中窗口 DTA 3–30，下列 **任 2 条** 成立 → 进入本剧本：

| # | 信号 | 300 间例子 | 缩放 |
| --- | --- | --- | --- |
| F1 | Days-to-Sellout < DTA | 剩 96、日均 12 → 8 日 < 14 | — |
| F2 | 3D 净 Pickup ≥ max(总房×3%, 8) 间 | 3 日 ≥ 9 间 | p=3% |
| F3 | 7D 净 Pickup ≥ max(总房×8%, 18) 间 | 7 日 ≥ 24 间 | p=8% |
| F4 | Pace Ahead ≥ +8pp | 68% vs LY 55% | 与 Increase BAR 卡一致 |
| F5 | 某房型 Days-to-Sellout ≤ 3 | 基础剩 18、日均 8 | 分房型 |

**3D 快而 7D 不快：** 先查大单，不直接第二刀。只允许关明显破价。  
**DTA>45 且全是合约早订：** 散客窗未开始，不当 Fast Transient。

### 1.2 输入清单

最小：Stay Date、DTA、OTB、Remaining（可算）、3D 或 7D Pickup、当前 BAR。  
推荐：1D+3D+7D、Segment/大单、分房型剩余+价、低价产品列表、竞对、事件细节、取消。

---

## 2. 先排除（没过不许大涨 / 严限制）

| # | 排除 | 成立时做什么 | 问题树 |
| --- | --- | --- | --- |
| X1 | 一次性团队 / 包房 / 船员 | 停用加码；走 Group | §5.1 |
| X2 | 系统重导、重复导入 | 修数 | §5.2 |
| X3 | 取消回流（先大取消再订回），净额不快 | 看净 Pickup | §5.3 |
| X4 | 活动日本来就该快，价已跟上 | 可只盯 | §5.4 / §16 |
| X5 | 低价预售堆出来的假 Ahead（OTB ADR 显著低） | 关低价优先于再涨 | §7.1 |
| X6 | 不可取消团占位，wash 风险 | OTB 打折扣 | §7.2 |
| X7 | 3D 快、7D 一般 | 24h 只关破价，不涨不设 MinLOS | BACKLOG 注意 |

过完仍 Fast Transient + Remaining 在薄 → §3。

---

## 3. 诊断落格

| 主机制 | 信号 | 第一工具 |
| --- | --- | --- |
| Underpricing / Early Sellout 路径 | Pace Ahead + Fast + BAR < 竞对 | 关低价 + Increase BAR 第一刀 |
| 价已最高，库存仍在被低价打穿 | BAR ≥ 全部竞对，促销仍开 | **只关低价 / 限配额，不涨** |
| 价已最高，低价已关，仍快 | Remaining 薄 | 分房型保护；评 MinLOS；不第三刀涨 |
| 房型压缩 | 仅基础快 | 动该型，不全店一刀切 |
| 事件 overnight | 场馆+距离已证实 | 价 + 限制；事件未证实则不把幅度建在事件上 |
| 一团假快 | X1 | 撤回散客加码 |

---

## 4. 动作表

### 4.1 四条路径（价格必须有区间+首选）

| 路径 | 价格 | 库存 | 限制 | 渠道 |
| --- | --- | --- | --- | --- |
| A 价低 + 快 | Increase BAR 第一刀 **+8–15%** 或收到最低竞对；首选区间中偏低 | 不关 BAR；关低价配额 | 默认不新设 MinLOS | 关 < 新地板的公开促销 |
| B 价在带内 + 仍会早满 | BAR **+5–10%** | 基础房低价渠道配额收到剩余 30–50% | 周末/事件才评 MinLOS=2 | 关破价 |
| C **价已最高** + 仍快 | **BAR 不动** | 关低价；基础可只留直销+主 OTA | 可评 CTA/MinLOS | 拒新促销 |
| D 仅某房型快 | 只动该型；高档差价保持 | 保护该型 | 不整店 MinLOS | 该型关低价 |

路径 A 的数字算法：**原样调用** `increase-bar-pace-ahead.md` §4，不在本剧本另造一套百分比。  
路径 C 是完成定义要求的「快但价格已最高」分支。

### 4.2 动作填写模板

```text
Stay Date:
Room Type:            先动正在穿的基础房；未知结构则只动 BAR/基础
Rate Plan:            BAR + 一切公开可订 < 新地板 的产品
Current BAR:
BAR Range / Preferred:      # 路径 A/B；路径 C 写「维持」
New floor:            路径 A/B = 第一刀下限；路径 C = 当前 BAR
Inventory:            不整日 Close；配额见上
Restriction:          IF 事件 overnight 且肩日数据齐 THEN MinLOS=2；ELSE 不设
Channel:              关破价；多渠道对齐
Do-not-do:            继续促销；第一刀 ≥ 最高竞对；3D 快 7D 不快时第二刀
```

### 4.3 仿真锚（换房型角，不是顾问过程第七节逐字）

见 `cases/sim-2026-pace-ahead-fast-pickup-roomtype.md`。  
300 间，DTA 16，总 OTB 70%，但标准间 88%、套房 22%。  
**首选：标准间 BAR 859 → 959（929–979）；套房 BAR 维持 1299；关一切标准间 <929 的公开价。不设 MinLOS。**

过程第七节 10-03 / 899→1029 仍有效，是「全店价低」路径 A 的示范；本剧本新增路径 B/C 与房型差。

---

## 5. 观察窗口

| 窗 | 看什么 |
| --- | --- |
| 即时 | 多渠道 BAR 是否到带；<地板产品是否仍可订 |
| 24h | 净 Pickup 间夜、取消、新单 Segment、分房型剩余 |
| 48h | 是否加码 / 回退 |
| 72h | Days-to-Sellout 是否仍 < 剩余 DTA |

最低 5 项：24h Pickup、24h 取消、竞对、自身是否执行、有无大单。加一项：分房型剩余。

---

## 6. Re-evaluation Trigger（产品化 T6 表）

与 `advisor-process.md` §9 及 Increase BAR 卡 §7 **同一套间夜**，便于抽查：

```text
尺度：300 间；阈值 ≈ max(总房×p, 2)

1) 过激：24h Pickup < 3 间（p=1.0%）
   → 先守 24h。若已涨到区间上沿，先回到首选。
     48h 累计 < 5 间（p=1.7%）→ 降到第一刀下限（仿真路径 A 常是最低竞对）。
     当天新设的 MinLOS 解开。低价不自动重开。

2) 持有：24h Pickup 3–7 间（p=1.0–2.3%）
   → 守首选，不加码。

3) 加码：24h Pickup ≥ 8 间（p=2.5%）且竞对未降、无大单
   → 第二刀 +3–8%，或收到最高竞对附近。禁止无新信号第三刀。
     路径 C（价已最高）→ 加码改为「再收基础房配额」，不涨。

4) 取消异常：24h 取消 ≥ 6 间或翻倍（p=2.0%）
   → 停加码。不自动大降。

5) 质量翻转：单笔 Group ≥ 40 间（总房 ~13% 或窗口 Pickup 50%）
   → 撤销 Fast Transient。BAR 上限回到第一刀下限。已关破价保持。

6) 房型穿：某型剩余 ≤ 5 或 Days-to-Sellout≤2
   → 关该型低价渠道；只留直销或升级路径。

7) 竞对再涨 / ≥2 家满
   → 重评第二刀；Confidence 降一档。路径 C 仍不追到「我觉得还能涨」。

8) 3D 快、7D 补齐后并不快
   → 取消第二刀路径；只保持关破价。
```

---

## 7. 如果只能再补 3 个

与 T7 场景 C 对齐（速度快 + 可能有事件）：

1. **近 7 日 Segment / 是否单笔 Group ≥ 总房 13%** — 翻转 Fast Transient。  
2. **分房型剩余 + 各型现价** — 改工具：关某型还是只动 BAR。  
3. **事件日期/距离/overnight，或「价是否已 ≥ 全部竞对」** — 翻转路径 A vs C，以及能不能设 MinLOS。

---

## 8. Confidence

- 路径 A 方向：Pace+Velocity+Price 三家族同向 → Medium 偏 High；幅度 Medium。  
- 路径 C：方向 Medium；「不再涨」本身比再涨更可逆。  
- MinLOS：缺肩日 → Low，不进第一刀。  
- 无 Segment：方向最多 Medium。  

---

## 9. 边界

| 去 | 何时 |
| --- | --- |
| `increase-bar-pace-ahead.md` | 只要「涨多少」的子程序 |
| `protect-inventory-fast-pickup.md` | 关低价 / 分房型 / MinLOS |
| High Demand Day / Concert | 事件已证实 overnight |
| Early Sellout / Sellout Risk | 已满或 DTA 极短 |
| Group Evaluation | X1 成立 |
| Slow Pickup | 速度其实慢 |

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。Trigger 与 T6/Increase BAR 对齐。新增「价已最高」路径 C。BACKLOG P09。 |
