# Playbook P07｜Concert / Event

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/concert-event.md`  
> BACKLOG：P07 Concert / Event · HIGH · 同开  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`event-pricing-first-cut.md` `minlos-peak-protect.md` `close-low-rate-compression.md` `increase-bar-pace-ahead.md`  
> 幅度：`pricing/how-much-to-move.md`  
> 问题树：§16 Event Demand（先排除 overnight）  
> 仿真：`cases/sim-2026-concert-peak-shoulder-minlos.md`  
> 注意：T6 过程文件第七节是练习卷，不是本剧本。禁止把「当地有演唱会」写成 Compression Fact。  
> 证据等级：B；幅度 Hypothesis  
> Last Verified：2026-08-20  
> 交叉（2026-08-21，不改正文）：全市多馆 / mega-event 虚火 → P32 `citywide-compression.md` · `dont-cut-from-hype-rate.md`。单场仍走本剧。禁止整周跟 Peak、禁止从幻想价砍到仍贵。

---

## 0. 一句话

演唱会 / 赛事 / 大型活动：先证实 **overnight**，再事件定价；管高峰+肩日。旗标但无 overnight → **退出，按普通 Pace**。

完成定义：含退出条件；能输出事件日价格带 + 肩日 + 是否 MinLOS + 是否关低价。

---

## 1. 信号

必须 **日期匹配**（演出夜 = Stay Date 或前夜到达）。再要 **≥1 条旁证**。

| # | 家族 | 信号 |
| --- | --- | --- |
| C1 | 事件 | 日期、场馆、距离；票务热度（用户能给的） |
| C2 | Overnight | 合理半径 + 场次晚间 + 历史同类会住；或用户确认不是当日往返 |
| C3 | Pace / Pickup | Ahead 或 Fast（P01/P09 尺） |
| C4 | 竞对 | 涨或 ≥1–2 家满 |
| C5 | 价 | BAR 低于最低竞对 ≥8% 或低价仍开 |
| C6 | 肩日 | −1 / +1 OTB 低于 Peak，单晚仍开 |

**退出（不是事件需求）：**

- 只有旗标，无 overnight、无 Pace/Pickup/满房旁证 → 普通 Pace，第一刀上限按非事件 Ahead（常 +5% 或收到最低竞对）。  
- 场馆远 / 已演完 / 观众不住宿。  
- 事件取消 / 缩规模 → **立刻**回平日带。  
- Pickup 是一团包房。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 事件日不匹配（唱 10/3，用户改 10/10） | 不挂事件 |
| X2 | overnight 不成立 | 退出事件幅度 |
| X3 | 一团 | Group；停散客加码 |
| X4 | 3D 快 7D 不快 | 24h 只关破价，不设 MinLOS |
| X5 | 价已跟上且限制已在 | 可只盯 |
| X6 | 肩日被当成垃圾日已贱卖、Peak 还开着 699 | 先关 Peak 低价，再谈肩日 |

---

## 3. 诊断落格

| 主机制 | 第一工具 |
| --- | --- |
| 真 overnight + Ahead/Fast + 价低 | 关低价 + 事件第一刀（档 B/C）+ 评 MinLOS |
| 真 overnight + 价已最高 | **只关 / 只限，不涨** |
| 旗标 + 仅一条 Pace 旁证，overnight Unknown | 档 A/B 下沿；MinLOS 今天不设 |
| 肩日也被 Ahead | 肩日跟半档，可纳入 MinLOS=2 的组合 |
| 假事件 | 退出 |

---

## 4. 动作表

### 4.1 价格（Hypothesis，与 Event 卡同一尺）

| 旁证 | Peak 第一刀 | 肩日（−1/+1） |
| --- | --- | --- |
| 旗标 + 一条旁证，overnight Unknown | +5–10% 或收到最低竞对 | 不暴涨；连住包装 |
| Pace+Pickup + 价低 | +8–15% 与最低～中位重叠，首选中偏低 | IF 肩日也 Ahead THEN 半档；ELSE 开着包装 |
| ≥2 家满 + Fast | 允许 +15–20%，仍 ≤ 最高竞对 | 肩日可收到最低竞对附近，不跳最高 |
| 价已最高 | 不涨 | 不跟涨 |

禁止第一刀跳过最高可比竞对。演唱会故事 **不加** 第一刀幅度（过程文件已写）。

工作锚（Simulation 延续 T6 数字，不是真店）：Peak BAR 899、竞对 999/1029/1099 → 执行带 **999–1049，首选 1029**。肩日若当前 799、竞对 849/899 → 肩日 **849–899，首选 869**（半档 / 收到最低），或只做「Peak+肩日连住套」不单独暴。

### 4.2 库存

Peak：关 < 新地板（1029 例则 <999）的公开产品；BAR Open；基础房低价配额 30–50%（Hypothesis）。  
肩日：不要关主渠道。  
不整日 Close BAR。

### 4.3 限制

```
IF overnight 已证实 AND 肩日 OTB 明显低于 Peak AND 当前无 MinLOS
THEN Peak（及需要被连住的那一晚）MinLOS=2
ELSE 今天不设
```

不要对肩日 CTA。不要 Peak+肩日三天同一 MinLOS=3，除非连续三夜都是 Peak。

### 4.4 渠道

事件日默认拒打穿新 BAR 的 OTA 大促。预付深折关。平台规则 Unknown。

---

## 5. 观察与 Trigger

| 窗口 | Peak | 肩日 |
| --- | --- | --- |
| 24h | Pickup 间夜、取消、大单、竞对满、破价是否还在 | 是否被 MinLOS 带动 |
| 48h | 第二刀或回退 | 仍 0 → 确认 Open，考虑包装而不是再涨肩日 |

Trigger（300 间）：<3 回退下限并考虑解开 MinLOS；3–7 守；≥8 且非一团第二刀 +3–8%。  
证实无 overnight → 取消 1049+ 路径，第一刀上限回到最低竞对。  
事件取消 → 立即平日带。

---

## 6. 如果只能再补 3 个

1. 场次日期 + 场馆距离 + 是否 overnight — 翻转事件幅度。  
2. Peak 与 ±1 的 OTB/Remaining — 决定 MinLOS。  
3. Segment / 是否大单 — 翻转 Fast Transient。

---

## 7. Confidence / 边界

overnight Unknown → 幅度 Low，方向最多 Medium。  
更像普通 Ahead → P09/P01。节假日整段 → P06。快满 → P03。会展布撤展 → P22（已 drafted）。全市多馆压缩 / 大赛叙事但 Pace 未坐实 / 想从幻想价回落 → P32（2026-08-21 drafted）。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | drafted。BACKLOG P07。退出条件强制。 |
| 2026-08-20 | Wave7：P22 已 drafted。 |
| 2026-08-21 11:00 CST | 交叉 P32（不重写正文）：城市级 / 虚火走 P32；单场仍本剧。 |
