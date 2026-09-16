# Playbook P17｜Forecast Miss

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/forecast-miss.md`  
> BACKLOG：P17 Forecast Miss · MEDIUM · 先诊断枝  
> 状态：**drafted**（2026-08-20）  
> 理论：`forecasting/forecast-framework.md`  
> 问题树：§15 Forecast Error  
> 配套：`hold-price-curve-late.md` `do-not-cut-price-market-also-weak.md`  
> 证据等级：B  
> Last Verified：2026-08-20  
> 交叉（2026-08-21，不改正文）：Pace 落后于「事件叙事」→ 本剧事件错 overlay + P32 虚火枝 · `dont-cut-from-hype-rate.md`。对照无事件基线，不追幻想预测。

---

## 0. 一句话

预测偏了。**先改判断再改价格**，避免用错误 Forecast 追 Budget。完成定义：Miss 分解为 假设错 / 事件错 / Pickup 结构错，每种对应动不动价。

---

## 1. 信号

| # | 信号 |
| --- | --- |
| F1 | Forecast OCC/ADR vs 当前 OTB + 剩余 DTA 能走的 Pickup |
| F2 | 预测假设：事件、团、曲线形状 |
| F3 | 实际 3D/7D Pickup vs 模型隐含尾巴 |
| F4 | 用户把 Budget 叫 Forecast |

「低」只相对过高预测 → 先改预期（问题树 §1 问 11）。

---

## 2. 先排除

| # | 排除 | 成立 |
| --- | --- | --- |
| X1 | 那是 Budget 不是 Forecast | 不追错目标 |
| X2 | Constrained：满房后「预测 100%」是截断 | 改 Unconstrained 叙述，不降 |
| X3 | 活动未进模型 / 已取消未出模型 | 先 overlay |
| X4 | 一次 1D 偏差 | 噪声，不动价 |
| X5 | 供给关造成 Pickup 慢，模型当需求死 | 开库存 |

---

## 3. 分解 → 动不动价

| 类型 | 识别 | 价 |
| --- | --- | --- |
| **假设错**（曲线用错年、商务当度假） | STLY/DOW 错位 | **先改 Forecast**；价按新 Pace 再评，默认当天 Hold |
| **事件错**（没录入 / 假 overnight / 已取消） | 旗标与 Pace 反向 | 取消 → 立刻回平日带；假事件 → 退出事件幅度 |
| **Pickup 结构错**（一团当散客、渠道事故） | Segment 拆不开 | 停第二刀；BAR 按 Transient 重做 |
| **真需求弱于预测** | 排除后仍 Behind+Slow+市场不冰+价高 | 才允许围栏 −3–5%，不是为填 Budget 砸 BAR |
| **真需求强于预测** | Ahead+Fast | 按 P01/P09 涨；先关低价 |

禁止：Forecast 说 90%、OTB 55%、DTA 还长就降，只为「看起来能到预算」。

---

## 4. 动作表

```text
Stay Date:
Old Forecast OCC/ADR:     （声明 Constrained/Unconstrained）
OTB / Remaining / DTA:
Miss 类型: 假设 / 事件 / 结构 / 真弱 / 真强
Forecast overlay: 区间+首选（不报假精确收入）
Price today: Hold / 围栏 / 涨 / 回平日带
Do-not-do: 用错 Forecast 追 Budget；Sold=100 当 Demand=100
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 补到事件取消 | 当日回到平日带 |
| 补到一团≥窗口 50% | 撤销 Fast Transient |
| 48h Pickup 把缺口收敛 | 维持 Hold |
| Overlay 后仍 Behind+价高+市场不冰 | 档 E |

---

## 6. 如果只能再补 3 个

1. Forecast 的假设清单（事件/团/曲线）。  
2. 实际 7D 净 Pickup 分 Segment。  
3. 同 DTA STLY 或曲线点。

---

## 6.1 交叉 P32（2026-08-21 追加，不改 §1–5）

大赛 / 全市叙事导致 Forecast 偏高、OTB 看起来「落后」：先拆对照物——落后的是 **事件 overlay** 还是 **无事件 STLY**。只落后于 overlay → 事件错，先改判断，**不要**为填事件预算从幻想价砍到仍贵（P32 · `dont-cut-from-hype-rate.md`）。肩日没被带动不是自动再降肩日。

---

## 7. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。先改判断再改价。 |
| 2026-08-21 11:00 CST | 交叉 P32（不重写正文）：事件叙事 vs 无事件基线。 |
| 2026-08-21 22:17 CST | 交叉 P28（不重写正文）：天气 overlay 错 → 先改判断；取消潮不按风暴前高峰追价。 |

## 6.2 交叉 P28（2026-08-21 22:17 追加，不改 §1–5）

台风/暴雨取消潮：Forecast 仍按风暴前高峰 = **事件错**。先撤 overlay，对照无事件 STLY，不对照昨天幻想 OTB。价：默认 Hold / 停涨，不按高峰涨，也不用一夜 −15% 填洞（P28 · `dont-raise-into-cancel-wave.md`）。

## 6.3 交叉 T20（2026-08-22 16:17 追加，不改 §1–5）

overlay / 事件假设 / 曲线错 = **先改 Forecast**。把 Miss 当成「预算要完不成所以砍 BAR」是第二条错。Budget ≠ Forecast（T20 · `dont-cut-to-hit-budget.md`）。禁止一夜 −15%。

**P56 指针（2026-08-26 10:17）：** 月度 Budget miss 不等于 Forecast miss；先按夜改判断/预测，再决定真 Behind 夜是否刺激，不用价格圆目标。

## 6.4 交叉 P66（2026-08-28 02:17 追加，不改 §1–5）

RMS 建议 dump 不是「Forecast Miss 所以今夜砍 BAR」。先改判断仍走本剧。跟不跟系统建议走 **P66** `rms-rec-override.md`。Ahead 不跟 dump；真弱走 P05 理由写 Pace。不要 BAR→399。
