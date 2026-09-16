# Research Log · 2026-08-20 · Advisor Framework（T6 / T7 / T11）

> 时区：Asia/Shanghai
> 任务：首次初始化 Task 6、7、11 + Increase BAR 决策卡
> 执行者：知识库建设（顾问过程落地）
> 类型：Internal Process 建设，不是外部文献综述

---

## 1. 读了什么

只读本库已有文件，**没有**检索外部网页或教材，因此不登记任何书名、论文、URL。

| 文件 | 用到的部分 |
| --- | --- |
| `README.md` | 顾问角色、证据分级、调用顺序、质量原则 |
| `curriculum/task-brief.md` | 第四（仿真案例）、第五（十段）、第六（信息不足）、第七（输入九类）、第十五（区间+首选）、第三十二（OCC 低先诊断）、第三十三（12 项机会）、第三十四（Daily Brief）、第四十三（Increase BAR 卡字段）、第四十四（剧本清单）、第四十七（T6/T7/T11 定义） |
| `recommendations/_TEMPLATE.md` | 决策卡 YAML 字段 |
| `curriculum/progress.md` | T6/T7/T11 原状态 in_progress |

未读（当时仍为空，不假装调用）：`diagnosis/problem-tree.md`、`metrics/metric-tree.md`、`object-model/revenue-objects.md`、各主题目录。

---

## 2. 写了什么

| 路径 | 对应 |
| --- | --- |
| `decision-framework/advisor-process.md` | T6 |
| `decision-framework/input-template.md` | T7 |
| `advisor-playbooks/BACKLOG.md` | T11 |
| `recommendations/increase-bar-pace-ahead.md` | 任务要求的 Increase BAR 卡（四十三节场景） |
| `curriculum/progress.md` | T6/T7/T11 → done |
| 本文件 | 收尾日志 |

---

## 3. 关键落地（便于抽查）

### 3.1 仿真案例价格（不是真实酒店）

任务书第四节数字还原：

- 300 间 × 68% = 204 OTB，剩余 96
- 3D +12% → 36 间 / 12 间/日（Pickup% 分母=总房，标 Hypothesis）
- 7D +27% → 81 间
- vs LY +13pp
- BAR 899 vs 竞对 999 / 1029 / 1099
- Days-to-Sellout @12 间/日 ≈ 8 日

**建议（Simulation）：**

```text
第一刀：899 → 1029
区间：999–1049
禁止第一刀：≥1099
第二刀（24h Pickup≥8 间且非一团且竞对未降）：1069（1049–1099）
过激（24h Pickup<3 间，48h 累计<5）：回到 999 带
```

幅度来源：任务书第十五节「给区间+首选」+ 本库自定启发式（第一刀 +8–15% 或靠拢最低/中位竞对）。**启发式本身是 Hypothesis**，不是弹性估计，没有外部出处。

### 3.2 信息不足

T6 §2 与 T7 §10–11 对齐：先判断 + 条件化 + 只再要 3 个。  
仿真优先 3 个：Segment/大单、房型剩余+价、演唱会日历与 overnight。

### 3.3 Confidence

方向与幅度分开打，对外取低。本仿真对外 **Medium**。

### 3.4 Playbook

第四十四节 17 条全部入表（P01–P17）。补充 P18–P35。  
HIGH：P01–P10（指定十条）+ P18 + P21 + P22。  
全部 `not_started`。Increase BAR 卡存在 ≠ Fast Pickup 剧本完成。

---

## 4. 未编造的东西（主动列出）

- 无教材书名、无 Cornell/HSMAI 课程名、无 RMS 算法细节。
- 无真实酒店名、无真实演唱会场馆。
- 无「可增收 xx 元」点估计。
- 无中国 OTA 当前佣金率、无平台排名算法。
- +8–15%、8pp Ahead、24h 3/8 间、Group≥40 间：均为 **Hypothesis 缩放规则**，待 `feedback/` 校准。

---

## 5. 未决 / 下一步

1. T1–T5、T8–T10、T12 仍是别人的初始化刀；T6 写的调用链在那些资产写完前必须能独立运行（已按此写）。
2. `diagnosis/problem-tree.md` 不存在时，十段只挂任务书第三十一节枝名。树写成后要回链。
3. Pickup% 分母在真实数据里必须每次确认；仿真假设可能错。
4. Trigger 间夜按 300 间写了缩放式，未在其他规模验证。
5. 第 1 批剧本建议：P09（产品化已有卡）→ P08 → P01/P02 → P07 → P10。
6. 第一份真实酒店反馈进来后，必须改启发式并升/降本日志里的 Hypothesis，禁止护短。

---

## 6. 成功标准自检

> 以后用户丢来半份数据，可以按 T6/T7 直接开工，不必重新发明过程。

- 有固定十段 + 每段禁止事项
- 有信息不足协议和 5 个残缺场景的「优先 3 个」
- 有机会扫描和 I×C×U
- 有 Brief 大纲
- 有 Confidence 启发式
- 有走到具体价格的仿真
- 有第一张决策卡
- 有剧本排队器

通过。真实 Advise 能力仍取决于后续理论卡、诊断树和 feedback，不在本任务宣称「已是成熟收益经理」。
