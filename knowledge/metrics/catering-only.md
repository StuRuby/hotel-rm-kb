# Catering-Only｜厅占用 ≠ 客房 OCC / 厅贡献 Unknown 除非用户给（Hypothesis，不是 RevPAS-as-BAR）

> 卡：`metrics/catering-only.md`  
> 类型：结构诊断（轻）  
> Evidence Level：S（STR P&L：厅租/AV = Other F&B，**不是客房**）；A（HSMAI Local Catering / Group Catering / RevPAS **词条**，不当本店 BAR；Displacement Analysis 词条）；A Vendor PMS（OPERA Catering Only：客房 grid 不可用）；B / Hypothesis（厅日记占用 vs transient remaining）  
> Source：CoStar STR P&L Data Reporting Guidelines；HSMAI Academy Glossary Local Catering / Group Catering / RevPAS / Displacement Analysis；Oracle OPERA Cloud Managing Blocks  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（STR 厅租归类；HSMAI 分桶）+ Hypothesis（店内厅 vs 房尺）  
> 配套：`../advisor-playbooks/catering-only.md` · `../recommendations/dont-raise-bar-on-full-hall.md`  
> 禁止：发明本店 RevPAS / ConPAST 公式当 BAR；把 80/14/799 写进公式当常模；把厅租再加进客房；编餐毛利；把厅 OCC 写成客房 OCC。

## 定义

指定 Stay Date，一场**只要厅不要房**询价：功能空间占用 + 用户认领的厅/餐贡献。**不占客房合同块。** 客房 remaining 与厅日记分开看。

会带房（厅+房块）→ `meeting-with-rooms.md`。客房-only → P10。婚宴占房 → P30。钟点客房 → P44。

HSMAI：

- **Local Catering** = 不连过夜房（also local banquet）。  
- **Group Catering** = 连过夜房（also group banquet）。

OPERA：**Catering Only** = 只要厅/会，客房 grid 不可用。

## 公式

**STR（S）——厅不是客房**

```
Function room hire + AV     → Other F&B Revenue（P&L Guidelines）
Guest-room nights           → Rooms Revenue（本剧这场 = 0 合同块）
不要把同一笔厅租加进客房再加进 F&B
```

**HSMAI RevPAS（A 词条，不当本店 BAR）**

```
RevPAS = Total Catering Revenue / Total Available Square Footage of Meeting Space
```

本卡 **不**用 RevPAS 定今晚 BAR，也 **不**给 180 间店编一个坪效。没有面积与餐饮贡献 → 不报 RevPAS 点。

**ConPAST（Kimes & McGuire 2001，目录级度量名，不摘正文）**

```
ConPAST = contribution per available space for a given time
# 2001 Reference。ConPAST ≠ BAR。ConPAST ≠ 本店 RevPAS。
```

**店内 / 顾问 Hypothesis（须声明，不是 STR）**

```
Hall occupied (diary)     = 该段功能空间是否被只要厅占用           # 不是客房 OCC
Room remaining            = Capacity − occupied − OOO              # occupied 不含这场只要厅
PMS room OCC              = occupied / Available                   # 不被只要厅抬高
Space contribution (user) = 用户认领的厅/AV 贡献（不是行情）
F&B contribution (user)   = 用户认领的餐贡献（不是餐标×毛利率）
# 贡献 Unknown 除非用户给
```

Need Verification：本店市场码如何标「只要厅 / Catering Only / 本地宴会」；厅是否已打进套餐。不编字段名。

仿真 80 / 14 / 799 / 发明厅租只在案例文件，**不进本卡公式当常模**。

## 上游

只要厅询价、本地公司半天会、厅日记占用、销售「厅包了散客随便卖」、GM「厅满了要涨 BAR」。

## 下游

按厅满涨公开 BAR、周末低贡献占黄金厅、因厅忙 dump leftover、厅租双计、把只要厅当成会带房。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| 厅满了所以酒店忙，该涨 BAR | 厅占用 ≠ 客房 Demand。看 transient remaining。形 A |
| 没带房所以 leftover dump | P05 leftover 是付费空房，与厅独立。形 C |
| 80 人只要厅 ≈ 会带房 | 会带房有客房块（P50）。本剧零客房 |
| RevPAS / ConPAST 高所以今晚涨/砍 BAR | 空间效率尺，不是 BAR 公式 |
| 厅租再加一遍客房 | STR：厅/AV = Other F&B。套餐含厅只计一次 |
| 厅 OCC 可以和客房 OCC 混报 MPI | 两个库存。不要混 |

## 顾问决策含义

只要厅是 **功能空间事件**，不是「店忙该涨」，也不是「没带房所以 dump BAR」。用户说「厅满了 OCC 才 40% 要不要涨」时：

1. 钉 Stay Date、Physical、只要厅声明、transient Remaining、厅+餐贡献（用户）。  
2. 无贡献 → 高峰不 Accept 厅。工作日厅空可接。  
3. 不按厅满涨。不因厅忙 dump。  
4. 缺人数/贡献 → 问，不编 80 / 厅租行情。  
5. RevPAS / ConPAST 不当今晚 BAR。

## 和邻近指标怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | 厅日记占用 vs 客房 remaining；贡献 Unknown 除非用户给 |
| `meeting-with-rooms.md` | 会带房块 vs 人数；厅 vs 客房拆分 |
| P10 / displacement | 客房-only 团按日 Displaced |
| P30 | 婚宴占房 vs 宴会贡献 |
| T18 F&B 闸 | 有没有用户贡献可翻客房 Reject |
| wash / attrition | P10/P50 观察尺；本店 % NV；本卡不写 % |

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 14:17 CST | 首版。Hypothesis 厅占用 ≠ 客房 OCC。贡献 Unknown 除非用户给。RevPAS / ConPAST 不是 BAR。 |

---

## 理论卡指针（2026-08-25 16:17 追加，不改上面公式）

Diagnose 尺见 `../theory/function-space-occupancy.md`（T-Hall）。厅日记满了不是客房更紧。RevPAS / ConPAST 仍不是 BAR。本卡公式不改。80/14/799 仍不进公式当常模。

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 16:17 CST | 文末指针：T-Hall 理论卡 drafted。公式不改。RevPAS / ConPAST 仍不是 BAR。 |
