# Meeting-with-Rooms｜房块 vs 参会人 / pickup vs block / 厅 vs 客房拆分（Hypothesis，不是 RevPAS-as-BAR）

> 卡：`metrics/meeting-with-rooms.md`  
> 类型：结构诊断（轻）  
> Evidence Level：S（STR P&L：厅租/AV = Other F&B，**不是客房**）；A（HSMAI RevPAS **词条**，不当本店 BAR 公式）；B / Hypothesis（房块占比、pickup vs block）  
> Source：CoStar STR P&L Data Reporting Guidelines；HSMAI Academy Glossary RevPAS  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（STR 厅租归类）+ Hypothesis（店内会带房尺）  
> 配套：`../theory/meeting-with-rooms.md` · `../recommendations/dont-dump-bar-for-meeting-rooms.md`  
> 禁止：发明本店 RevPAS 公式当 BAR；把 399/10/80 写进公式当常模；把厅租再加进客房；编餐毛利。

## 定义

指定 Stay Date，一场**会带房**询价拆成：功能空间、餐饮贡献（用户）、客房块。客房块 ≠ 参会人数，也 ≠ 公开 BAR。

客房-only → P10 指标。婚宴占房 → P30。政务协议占用 → `government-negotiated-rate.md`。

## 公式

**STR（S）——厅不是客房**

```
Function room hire + AV     → Other F&B Revenue（P&L Guidelines）
Guest-room block            → Rooms Revenue（按夜）
不要把同一笔厅租加进客房再加进 F&B
```

**HSMAI RevPAS（A 词条，不当本店 BAR）**

```
RevPAS = Total Catering Revenue / Total Available Square Footage of Meeting Space
```

本卡 **不**用 RevPAS 定今晚 BAR，也 **不**给 180 间店编一个坪效。没有面积与餐饮贡献 → 不报 RevPAS 点。

**店内 / 顾问 Hypothesis（须声明，不是 STR）**

```
Meeting room-block RN     = 会带房合同客房晚                         # 计数
Block vs attendees        = Meeting room-block RN / meeting_pax      # 常 ≪ 1；80 人 10 间 ≠ 80 间需求
Pickup vs block           = 实住或已 pickup / 原块                   # 无史不编 wash %
Space revenue (user)      = 用户认领的厅/AV 贡献（不是行情）
F&B contribution (user)   = 用户认领的餐贡献（不是餐标×毛利率）
Rooms revenue (block)     = Σ 间 × 会带房价
Transient remaining       = Capacity − occupied − OOO                # 声明是否已含会带房块
PMS OCC (incl. meeting)   = occupied / Available                     # 可被参会人抬高
```

Need Verification：本店市场码如何标「会带房 / 会议团」；厅是否已打进套餐。不编字段名。

仿真 399 / 10 / 80 只在案例文件，**不进本卡公式当常模**。

## 上游

会议询价、厅租合同、会议餐、小房块、销售「用房赢会」。

## 下游

公开 BAR 被要求跟到会带房价、无贡献接低价房、参会 OCC 假高峰、周末置换、厅租双计。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 80 人所以差不多要 80 间 | 会带房常常只要 10 间量级。按**房块**置换，不按人数 |
| 10 间很少所以随便给 | 高峰 10 间仍可挤 BAR。按夜 Displaced |
| PMS OCC 因会议变高 = 该涨 BAR | 先拆 transient remaining。形 B |
| BAR 应该等于会带房价 399 | 围栏块不是公开 BAR |
| RevPAS 高所以今晚涨/砍 BAR | RevPAS 是空间效率词条，不是 BAR 公式 |
| 厅租再加一遍客房 | STR：厅/AV = Other F&B。套餐含厅只计一次 |

## 顾问决策含义

会带房是 **三笔结构事件**，不是「会议来了需求变强该涨」，也不是「用房赢会所以 dump BAR」。用户说「80 人只要 10 间」时：

1. 钉 Stay Date、Physical、房块间数×价、厅+餐贡献（用户）、transient Remaining。  
2. 无贡献 → 不 Accept 低价房。厅付了可留会。  
3. 高峰 → Counter/拒房；Hold BAR。  
4. 缺间数/价 → 问，不编 10 / 399。  
5. **不写 P50。** 会带房模板 NV。

## 和邻近指标怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | 会带房块 vs 人数；pickup vs block；厅 vs 客房拆分 |
| P10 / displacement | 客房-only 团按日 Displaced |
| P30 | 婚宴占房 vs 宴会贡献 |
| T18 F&B 闸 | 有没有用户贡献可翻客房 Reject |
| `government-negotiated-rate.md` | 政务协议占用份额 |
