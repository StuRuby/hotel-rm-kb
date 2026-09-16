# Playbook P22｜会展肩日

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/exhibition-shoulder.md`  
> BACKLOG：P22 会展肩日 · HIGH · 先决策卡  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`recommendations/shoulder-open-for-peak.md` · `event-pricing-first-cut.md` · `minlos-peak-protect.md` · `join-or-skip-promo.md`  
> 理论：`demand-signals/signal-framework.md` §2.2 · `pricing/los-optimization.md` · `theory/optimization-advise.md`  
> 问题树：§16 Event · O10  
> 仿真：`cases/sim-2026-exhibition-peak-shoulder.md`  
> 证据等级：B；距离/提前售罄门槛 **NV**  
> Last Verified：2026-08-20  
> 交叉（2026-08-21，不改正文）：城市级多馆 / mega-event 虚火 → P32 `citywide-compression.md` · `dont-cut-from-hype-rate.md`。开展/前1/后1 仍走本剧。肩日不要自动跟 Peak。

---

## 0. 一句话

布展 / 撤展 / 前夜 / 后夜常被当垃圾日卖掉，实际可能是压缩日或 **Peak 的拼图**。  
开展日、前 1、后 1 三张不同动作表。距展馆远 → **退出**事件逻辑。

完成定义（BACKLOG）：三张动作表；距离远则退出。

---

## 1. 信号

进入：有**官方或用户可核的展期 + 展馆**，且用户在问前后几天怎么卖 / 要不要跟涨 / 要不要接低价团。

| # | 家族 | 问 |
| --- | --- | --- |
| X1 | 展期 | 开展哪几天？布展/撤展官方日？ |
| X2 | 距离 | 步行 / 公里（用户能给的精度）。未给 → Impact NV，不按 citywide |
| X3 | Pace/Pickup | 核心夜 vs ±1 分开看 |
| X4 | 竞对 | 是否已涨/关/满 |
| X5 | 团询 | 是否只要核心夜低价块 |

STR 词条级：MICE 商务日占显著比例（信号框架）。**不编**「3 公里内提前 14 天必满」。媒体「开展前 2–3 周售罄」= C，不当阈值。

**退出：**

- 场馆远 / 未给距离且本店史无会展相关 → 按普通 Pace  
- 只有「听说有展」无展期页 → Reliability 低，只关破价，不大涨  
- 展取消/缩规模 → 立刻回平日带  
- Pickup 是一团 → P10，停散客加码

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| E1 | 日期错（展周三，用户改周五） | 不挂事件 |
| E2 | 肩日已被当垃圾日贱卖、Peak 还开 低价 | 先关 Peak 低价，再谈肩日 |
| E3 | 肩日其实已经 Ahead | 肩日跟半档，不是促销日 |
| E4 | 3D 快 7D 不快 | 24h 只关破价，不设 MinLOS |
| E5 | 城区商务店、展馆在另一边城市 | 退出 |

---

## 3. 三张动作表（Hypothesis）

角色先标：Peak = 开展核心过夜（常开展首夜或最热 1–2 夜，须 Pace/Pickup 旁证）。肩日 = 布展前夜 / 撤展夜，**不是自动垃圾，也不是自动第二高峰**。

### 3.1 开展日 / Peak

| 杠杆 | 动作 |
| --- | --- |
| 价 | 事件第一刀：+8–15% 或收到最低竞对，重叠带中偏低；**不跳最高**。价已最高只关不涨。仅旗标无旁证 → 档 A，幅度不吃「会展」故事 |
| 库存 | **今天关** 公开 < 新地板；BAR Open。Sellout 先关低价 |
| 限制 | overnight + 肩日数据齐 → Peak **MinLOS=2**；否则今天不设 |
| 渠道 | **不报** 打穿地板的 OTA 大促 |
| 团 | 低价只要 Peak 单晚 → **Counter**（加价/减房/要求连住）。解释走 bid price 卡 |

### 3.2 前 1（布展 / 到达肩日）

| 杠杆 | 动作 |
| --- | --- |
| 价 | 默认 **不暴涨**。IF 该日自己 Ahead THEN 半档或收到最低竞对；ELSE Hold + 连住包装 |
| 库存 | **开**主渠道；不要按高峰关促销层（浅围栏可留） |
| 限制 | **不** MinLOS / **不** CTA。用 Open 接提早到达 |
| 渠道 | 只报肩日 IF 店出 ≤ −3–5% 或平台出资且能按日筛；否则不报，自有包装 |
| 团 | 布展团若只占肩日、Peak 不挤 → 可接或浅 Counter；占 Peak 则按 3.1 |

### 3.3 后 1（撤展 / 延住肩日）

同 3.2。禁止把 Peak 价挂到后 1。返程弱则守或围栏，**不一夜 −15%**。

多日展：中间日按**各日** Pace 再标 Peak/中段，不要「开展周一个价」。

---

## 4. 动作表（合并输出）

```text
Venue / Distance:     <用户给；远则退出>
Peak dates:
Shoulder −1 / +1:
Peak price:           Range + 首选（how-much-to-move）
Shoulder price:       半档或 Hold；不挂 Peak 价
MinLOS:               只 Peak =2（肩日齐）；肩日 Open
Promo:                Peak 不报；肩日按 P18
Group:                Accept / Reject / Counter（按日）
Do-not-do:
  - 肩日当垃圾日砸价
  - 整段会展同一 MinLOS
  - 无距离当 citywide
  - 500 的核心夜团整段平均接
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| Peak 24h <3 | 价回下限；考虑解 MinLOS |
| Peak 24h ≥8 非一团 | 第二刀 +3–8%，仍 ≤ 原最高竞对 |
| 肩日自己 Fast | 肩日改半档，停肩日大促 |
| 肩日仍 0 | 确认 Open + 包装，不延 MinLOS |
| 展取消 | 立即平日带 |
| 距离证实当日往返为主 | 退出事件幅度，撤 MinLOS |

---

## 6. 如果只能再补 3 个

1. 展馆距离 + 展期官方日（翻转事件/退出）  
2. Peak 与 ±1 的 OTB/Remaining（决定 MinLOS 与肩日开）  
3. 是否有只要核心夜的团询

---

## 7. Confidence / 边界

距离+旁证：方向 Medium。无距离：Low，只关破价。  
单场演唱会 → P07。法定假整段 → P06/P21。城市级多馆 / 大赛虚火 / 从幻想价回落 → P32 `citywide-compression.md`（2026-08-21 drafted）· `dont-cut-from-hype-rate.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P22。开展 / 前1 / 后1。 |
| 2026-08-21 11:00 CST | 交叉 P32（不重写正文）：城市级/虚火走 P32；三张动作表不变。 |

本店一场会带房询价走 **P50** `advisor-playbooks/meeting-with-rooms.md`（2026-08-25 10:17），不是会展肩日市场形状。
