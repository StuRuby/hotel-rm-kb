# Playbook P02｜Low Demand Day

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/low-demand-day.md`  
> BACKLOG：P02 Low Demand Day · HIGH · 先诊断枝  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/hold-price-curve-late.md` `do-not-cut-price-market-also-weak.md` `decrease-bar-true-weak-demand.md` `stimulate-slow-pickup.md`  
> 幅度：`pricing/how-much-to-move.md` 档 E/F/G/H  
> 问题树：§1 OCC Low（整棵）· §4 Pickup Slow · §6 Pace Behind · §9 Last-Minute · §13 Price Too High  
> 理论：`forecasting/forecast-framework.md` · `pricing/pricing-framework.md`  
> 证据等级：B；幅度 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

需求弱时决定 **等 / 小步降 / 开围栏 / 只修渠道 / 不动**。禁止自动砸 BAR。Low Demand ≠ 低 OTB%。DTA 30 的 35% 可能正常。

完成定义：一张「先查再允许降价」检查单 + 降价幅度启发式 + 明确 Hold 的条件。

成功标准对接：用户说「入住率低要不要降」→ 先走本树，再输出 降 / 围栏 / 只修渠道 / 不动；若降，给区间+首选+24/48h Trigger。

---

## 1. 信号（怎样算「看起来弱」）

入口可以是用户喊 OCC 低。**进入本剧本 ≠ 已证实 Low Demand。**

| 看起来弱 | 可能其实是 |
| --- | --- |
| OTB% 低 | DTA 还长、曲线后置 |
| Pickup 慢 | 供给关、刚涨价、窗口未到 |
| vs Budget 差 | Budget 错 |
| 空房多 | 只剩高价房、OOO |

定量「真慢」沿用 P08：中窗口任 2 条 V1–V5。无 Pace 基准时不得宣布 Low Demand。

---

## 2. 先查 10 项（没过不许降价）

与问题树 §1.A 对齐，写成检查单：

| # | 查 | 成立 → 动作 | 卡 |
| --- | --- | --- | --- |
| 1 | 口径 / OOO / 拿远期 OTB 当危机 | 修数 | — |
| 2 | DTA 仍处「尚未启动」区段 | Hold | hold-price-curve-late |
| 3 | 同 DTA Pace On/Ahead | Hold | hold |
| 4 | 库存/房型/配额没开 | **只修库存** | hold 的修供给分支 |
| 5 | 渠道不可订或价不同步 | **只修渠道** | 同上 |
| 6 | MinLOS/CTA 过严 | 解该日限制 | P33 · do-not-cut-when-restricted |
| 7 | 市场 / Comp 同样弱 | **不砸 BAR** | do-not-cut |
| 8 | 价已 ≤ 全部可订竞对 | 不降；查产品/曝光 | — |
| 9 | 产品/差评/施工 | 降预期，不把降价当策略 | — |
| 10 | 「低」只相对过高 Budget/Forecast | 先改预测 | forecast-framework |

以上任一条成立且价并非显著高于可订竞对：**默认不降价**。

过完仍：Behind + Slow + 价高 + 供给开 + 市场非冰点 → 才允许刺激。

---

## 3. 诊断落格 → 四选一

| 结论 | 条件 | 动作类型 | 首选 |
| --- | --- | --- | --- |
| **不动** | Pace On/后置 / Forecast 错 / 价已合理 | 什么都不动 | 写 Trigger，不是「观察」 |
| **只修渠道** | E4–E6 | 开库存/同步/解限制 | 先开直销+主 OTA |
| **围栏** | 真弱 + 价高 8–15% | BAR 不动，预付 −3–5% | decrease 卡档 E |
| **降 BAR** | 真弱 + 价高≥15% + 7D 慢 + 市场不冰 | BAR −5–10%，收到最低竞对附近 | decrease 卡档 F |

禁止第五项：「适当降一点」。

市场也弱 → 强制走 do-not-cut，即使 Pickup 很慢。  
DTA≤3 且 3D≈0 且价明显高于全部竞对 → 档 H，有截止日期，仍禁止无期限 −15%+。

---

## 4. 价格怎么写

```text
Stay Date:
Current BAR:
Decision: Hold / 只修渠道 / 围栏 / 降 BAR
若围栏: Promo Range / Preferred     # −3–5% 或最低竞对附近，取更高
若降 BAR: Range / Preferred         # −5–10%，不一次下穿最低竞对
Trigger 24/48h: 间夜阈值
Do-not-do: 一夜 −15%；跟自杀价；只改一个渠道
```

工作锚见 decrease 卡（899 店：先预付 859–869；再必要时 BAR 849）。  
弱市不降锚见 `cases/sim-2026-weak-market-do-not-cut.md`。

---

## 5. Hold 的明确条件

满足任一组即可宣布 Hold（要写间夜 Trigger）：

1. 同 DTA Pace On 或 Ahead。  
2. 曲线后置，当前 Pickup 匹配后半段。  
3. 市场也弱且价已不贵。  
4. 供给故障刚修，需要 24–48h 看速度。  
5. 价已 ≤ 竞对，问题在份额/产品。

离开 Hold：48h 累计 Pickup < max(总房×1.7%, 2) **且** 基准补齐后 Pace≤−8pp **且** 价高 **且** 市场不冰。

---

## 6. 观察与 Trigger

同 P08 / how-much-to-move §6 降价表。  
24h ≥8 → 刺激够，收回促销。  
48h <5 且已开 → 第二刀规则；禁止第三刀砸价。  
竞对连环降 → 不自动跟到底。

---

## 7. 如果只能再补 3 个

与 T7 场景 D 对齐：

1. DTA + Stay Date（没有日期没有任何动作）。  
2. 同 DTA STLY/曲线（翻转 Hold vs 真 Behind）。  
3. 7D Pickup 间夜 + 库存/渠道是否开着（翻转需求差 vs 关了）。  

已有日期和 OTB 时，第 1 个改成 **BAR vs 竞对** 或 **市场/Comp Forward**（翻转 do-not-cut vs decrease）。

---

## 8. Confidence / 边界

排除未做完就给降价 = 不合格。  
更像只是速度慢、OTB 其实不低 → P08。  
周中商务结构弱 → P12（未写完前用本剧本当日逻辑，不套周末）。  
DTA≤3 → P05。价格战 → P16。

---

## 9. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P02。10 项检查单 + 四选一。 |
| 2026-08-20 17:00 CST | 检查单第 6 项指向 P33 / do-not-cut-when-restricted。 |

---

## 10. 交叉（2026-08-22 08:17，不改检查单）

允许降/围栏之后仍过贡献：净价 ≤ 变动成本 → 不卖这一层，不是再砸 BAR。`theory/profit-contribution.md`。DTA 短走 P05，同样先围栏再贡献。

**P56 指针（2026-08-26 10:17）：** 月末真弱夜仍走本剧：先排供给/限制、先围栏、再 bounded BAR；月底不是额外降价许可证，Ahead 夜不得混砍。
