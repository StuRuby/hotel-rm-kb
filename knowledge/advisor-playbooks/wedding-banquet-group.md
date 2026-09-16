# Playbook P30｜婚宴 / 宴会团队

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/wedding-banquet-group.md`  
> BACKLOG：P30 婚宴 / 宴会团队 · LOW · 先决策卡 · slug `wedding-banquet-group`  
> 状态：**drafted**（2026-08-22 02:17 CST）  
> 配套卡：`recommendations/counter-wedding-room-block.md`（本剧主卡）· `recommendations/accept-low-room-for-fnb.md`（P10 的 TRM 分支，通用低房价高餐饮）· `recommendations/accept-reject-group.md`  
> 理论：`theory/total-revenue-management.md`（T18）· `group/group-displacement.md`  
> 交叉：P10 普通团评（本剧**不是** P10 重写）· P11 周末压缩 · P01/P03/P04 高峰留尾 · P21 MinLOS 只盖已证实 Peak  
> 问题树：O12 · §33 · 本轮 §34  
> 仿真：`cases/sim-2026-wedding-40x500-saturday.md`（**Simulation**）  
> 证据等级：过程 **B**（与 P10/T18 同一决策链）；中国「占房」常见 **Hypothesis B**（行业口述/消费端报道，非协会 SOP）；餐贡献率 / 变动成本 / 佣金% **NV**  
> Last Verified：2026-08-22 02:17 CST  
> 知识类型：Best Practice + Hypothesis  
> Advisor-First：只建议销售回复口径，不操作 PMS 团块 / 宴会系统。  
> 禁止：无餐饮**贡献**数字就 Accept 低价房块；编造餐标/毛利/变动成本/佣金%/Walk/η；用 TRevPAR 当晚改 BAR；整周末同一把刀；为锁房块把散客关死；把功能空间与客房贡献加两次。

---

## 0. 一句话

婚宴先拆成两笔：**宴会本身** vs **占房**。没用户给的餐饮贡献数字，不接低价房块。  
周六高峰、散客能卖满时，40×500 默认 **Counter**（提房价或缩间数，宴会可留），不是直接 Accept，更不是把散客关了给团。  
周五 / 周日肩日分开算。

完成定义（BACKLOG）：能输出 Accept / Reject / Counter，写到宴会日 vs 占房日；缺贡献仍给 Counter 条件句；能指出「餐很高所以接 40 间 500」为什么不够。

顾问必须能直接说的三句：

```
1. 婚宴先拆：宴会本身 vs 占房；没餐贡献数字不接低价房块。
2. 周六高峰 40×500 对能卖满的散客，默认 Counter（提房价或缩间数），不是直接 Accept。
3. 周五/周日肩日可以分开算，不要整周末同一把刀。
```

---

## 1. 信号（何时进本剧本）

进入：用户在问**婚宴 / 寿宴 / 升学宴**这类宴会，并且牵涉客房块或「要不要把散客关了」。

| # | 信号 |
| --- | --- |
| W1 | 「周六婚宴要 N 间、房费只要 X，餐标很高，接不接」 |
| W2 | 销售要把高峰散客关掉，给婚宴锁房 |
| W3 | 宴会已定 / 将定，客房块价远低于当日 BAR |
| W4 | 只要婚房+家长房几间，却被写成 30–50 间团块 |

**不是本剧本：**

- 无宴会、普通会议团 / 旅游团 → **P10**。  
- 「这个团 500 但餐标很高」且不是婚宴口径 → T18 卡 `accept-low-room-for-fnb.md`（P10 的 TRM 分支）。  
- 只问周末要不要涨、要不要 MinLOS → P11 / P21。  
- 功能空间与另一场会议抢同一晚、几乎不占房 → 仍先问贡献；空间机会成本走 NV-GRP-04，不编坪效。

P30 相对 P10 多出来的：高峰周六默认闸、婚房/家长房 must-keep vs 宾客 dump、肩日拆刀、禁止关散客锁块、宴会厅与客房都稀缺时不要双计。

---

## 2. 输入（缺贡献数字不停、但不 Accept）

```
必须：
1) 宴会日期（哪一晚用厅）
2) 占房：按夜间数 × 合同房价（含是否含婚房/家长房）
3) 该 Stay Date 散客 BAR / 将被挤的那一层价
4) 该日 Pace / Pickup / Remaining（至少宴会夜）
5) 是否周六（或当地婚宴高峰 DOW）+ 是否 Pace Ahead / Fast / Sellout
6) F&B 贡献 FROM THE USER（或用户明确认领的保守估计）

应用：
7) 额外夜：周五提前到 / 周日延住 的间数与价
8) 取消 / 减房 / 宴会订金 vs 客房块截止
9) 功能空间是否另有更高价宴会/会议线索（无线索 → Meeting_opp=0 并声明）

Recommended：
10) 婚房 / 家长房各几间（must-keep vs 宾客块）
11) 佣金 / 客房变动成本（用户有则减；没有不编）
```

**贡献口径：** 要的是**贡献**（用户自己的收入−变动成本，或用户认领的保守额）。只有「餐标很高」或只给餐标收入 → 当收入、贡献 Unknown，**仍不翻 Accept**。顾问不代编毛利率、不抄销售话术餐标当本店数。

---

## 3. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 只有两个 ADR、没有宴会日 / 占房夜 | 先要 Stay Date；同时用条件句，禁止「无法判断」 |
| X2 | 「满」只是渠道配额 | 不是置换，先开库存 |
| X3 | 贡献口号：「餐很高 / 全店视角 / TRevPAR」无数字 | **不得 Accept** 低价房块。宴会可另议；客房走 Counter/Reject |
| X4 | 高峰夜已是 P03/P04 / Ahead+Fast，散客能卖满 | 默认 **Counter 客房或缩房**；宴会可留。禁止关散客给团 |
| X5 | 把宴会贡献和厅租加两次（套餐已含场地） | 只计用户给的一笔贡献。不要双计 |
| X6 | 团价会泄漏到 OTA / 可外传净价 | Reject 房块或净价+禁售；不靠餐补泄漏 |
| X7 | OTB 是天气/取消潮 Soft（P28） | Remaining 虚高，不当可 dump |
| X8 | Expected Transient 用 Constrained 满房=需求 | 低估置换 |

排除顺序：X1 日期 → X3 有没有贡献数字 → X4 高峰能否卖满 → 再谈 TRM 翻盘。

---

## 4. 诊断：两笔生意、三夜可能三把刀

```
Naive（禁止）     餐很高 → 接 40×500，把散客关了
Rooms-only        按日 Displaced × Transient Net → 高峰夜单独亏则 Counter/Reject
P30               宴会 vs 占房拆开；周六高峰 vs 周五/周日肩日分开
                  有贡献且盖过置换、且非高峰可卖满 → 才允许翻客房-only Reject
                  高峰能卖满 → 即使有贡献也 Counter 客房，宴会留
```

| 夜 | 典型角色（Hypothesis，须 Pace 旁证） | 客房默认 |
| --- | --- | --- |
| **宴会夜（常周六）** | 当地婚宴高峰；休闲散客也峰值 | 先算 Displaced。能卖满 → Counter/Reject 低价 dump |
| **周五（Peak−1）** | 家长/外地亲友提前到；城市店未必 Peak | **单独**算。ET 填不满 → 可接低价小块 |
| **周日（Peak+1）** | 延住/回程；城市店常弱 | **单独**算。不要挂周六价，也不要因为周六亏就拒周日 |

Kimes & McGuire 2001 功能空间 RM 案例（Cornell Quarterly；**A 目录/课主题级，不摘正文**）：婚礼偏周末晚、会议偏工作日——支持「宴会 DOW ≠ 会议 DOW」，**不是**本店 40 间公式。

功能空间与客房都稀缺时：厅的机会成本（另有更高价宴会）和房的机会成本是**两笔**。套餐价已含厅 → 不要再加一笔「厅租贡献」。无线索 → Meeting_opp=0 并声明（NV-GRP-04 / NV-TRM-03）。

**婚房 / 家长房 vs 宾客 dump（本剧特有）：**

| 块 | 含义 | 默认 |
| --- | --- | --- |
| 婚房 1（+化妆/布置） | 仪式 must-keep；消费端常谈「赠送」 | 可留 1 间库存；是否免费 = 用户合同，**不编**行业赠送 SOP |
| 家长房 2–4 间 | 近乎必须 | 计入小块；高峰也可按协议留，不要跟 40 间一起砍光 |
| 宾客 30–40 间 × 低价 | 把高峰尾部整块给亲友价 | **这才是 dump**。默认 Counter：缩到 Displaced≈0，或收到保本/BAR 带 |

中国酒店婚宴「占房」常见（**Hypothesis B**：销售惯例 + 消费端报道，非 HSMAI/STR 公式）。常见 ≠ 必须接 40×500。Tencent 2026-02 会议室绑 80 间房的投诉 = **C 个案**，只说明「用厅绑房」会发生，不当门槛。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 拆单：宴会日 / 用哪厅 / 占房按夜间数与价 / 婚房·家长房几间。两笔生意。
2. 高峰判定：该宴会夜是否 Pace Ahead 或 Fast Pickup 或 Sellout Risk？禁止「有婚宴」单独当 Compression Fact。
3. 按日置换：Displaced_t = max(0, ET_t + Group_t − Capacity_t)。周六单独一格，周五/周日各一格。
4. 客房-only NetDelta：高峰夜必须单独算。整段平均藏亏的周六 → 禁止。
5. 贡献：用户给的 F&B/会议贡献进点；口号不进点。收入≠贡献。不编毛利。
6. 功能空间：另售线索？有则减 Meeting_opp。套餐已含厅则不要把厅租再加一次。
7. 闸：无贡献数字 → 不 Accept 低价房块。高峰能卖满散客 → 即使有贡献也 Counter 客房。
8. Counter 结构：提房价 / 缩宾客块（婚房+家长房 must-keep）/ 肩日可留 / 宴会留 / 高峰房按 BAR+只办宴会。
9. 散客：不要关。关散客 = 主动把高价层让给 500。MinLOS=2 只盖已证实 Peak（婚夜可以是 Peak）；周五/周日不要自动套。
10. 输出 Accept/Reject/Counter + 价区间与首选 和/或 高峰最多几间 + 再看 3 个数 + 24h Trigger。
```

---

## 6. 动作（强制按日 + 宴会单列）

```text
Banquet date / space:
Room block by night:   五 __ × __；六 __ × __；日 __ × __
F&B contrib (user):    __  / Unknown
Sat transient:         BAR __  Pace __  Remaining __  ET __
Decision rooms:        Accept | Reject | Counter（写到夜）
Decision banquet:      留 / 拒 / 另议
Displacing:            主要哪一晚、几间、什么价层
Counter:
  价:   高峰夜 __–__ 首选 __；肩日可 __
  房量: 高峰最多 __ 间（其中婚房+家长房 __ 间 must-keep；宾客 ≤ __）
  结构: 宴会留 + 高峰房按 BAR；或只办宴会不锁大块
散客:                 保持可订。禁止为锁块关零售
MinLOS:               只已证实 Peak（常周六）=2；周五/周日默认 Open
Do-not-do:
  - 没贡献数字 Accept 低价房块
  - 周六能卖满还 40×500 整块接
  - 整周末同一房价 / 同一房量上限
  - 把散客关了给婚宴
  - 用 TRevPAR/GOPPAR 替代这笔按日 NetDelta
  - 编餐毛利 / 把餐标收入当贡献
  - 功能空间贡献双计
```

| 客房-only（高峰夜） | 餐饮贡献 | 高峰能否卖满散客 | 输出 |
| --- | --- | --- | --- |
| Displaced≈0 | 有或无 | — | **Accept** 该夜客房；餐是加项。宴会留 |
| 偏负 | **缺 / 口号** | 任意 | **不要 Accept** 低价房块。Counter 或 Reject。宴会可留。要 3 个数 |
| 偏负 | 用户贡献 > 置换 | **否**（肩/淡、ET 填不满） | 可 **Accept** 该夜（加截止）；或浅 Counter 护 BAR |
| 偏负 | 用户贡献 > 置换 | **是**（周六 Peak / Ahead / Fast / Sellout） | **Counter**：抬房价或缩宾客块，**留宴会**；婚房+家长房可 must-keep |
| 偏负 | 贡献仍盖不住高峰夜 | 任意 | **Reject** 该夜大块；宴会另议；写翻转条件 |
| 销售要求关散客锁块 | — | 高峰 | **拒绝关散客**。这不是库存保护，是 dump |

保本团价（Hypothesis，与置换卡 §5.3 同一尺，不另发明）：

```
高峰夜保本 ≈ (Displaced_peak × TransientNetADR) / GroupRooms_peak
报价首选 = 保本 与「不低于公开 BAR 的 70–85%」之较高者（品牌红线优先）
禁止：团价相对公开 BAR 差 >15% 还当可外传协议（泄漏区）
```

肩日：Displaced=0 则可接合同低价；不要因为周六要 Counter 就把周五/周日一起拒。

价已最高（公开 BAR ≥ 全部可订竞对）：散客 **只关低价不涨**。接低价婚房块 ≠ 涨价，等于开更低库存层 → 先限额/Counter，不是再砸 BAR。

---

## 7. Trigger

```
用户补上贡献，高峰夜仍盖不住 / 团不改价不减房
  → 维持 Counter 或 Reject 客房块；宴会另议
用户补 ET，高峰夜 Displaced = 0
  → 该夜客房可改 Accept（仍要截止）；餐是加项
高峰夜 24h 散客 Pickup 已快（非本宴）
  → 停加房，维持 Counter；禁止关散客
团坚持 40×500 + 要把散客关了
  → Reject 客房大块；宴会可留；婚房+家长房可另出小块
肩日 ET 上修到将满
  → 肩日也改 Counter，不要仍按淡日
Wash / 减房在 DTA 短时大量释放
  → 重开零售；不自动降 BAR
另有更高价宴会抢同一厅
  → 加上 Meeting_opp 再算；可能拒这场或抬宴会门槛
```

---

## 8. 如果只能再补 3 个

1. **本宴 F&B 贡献**（用户认领的数；只有餐标收入则标 Unknown，不翻 Accept）  
2. **宴会夜 Remaining + Expected Transient**（或「这类周六最终散客 OCC」）  
3. **将被挤的那一层 BAR / Transient Net**；有余力再要：周五/周日各间数、婚房/家长房几间、客房块截止

缺 1：客房走 P10 Counter/Reject，宴会条件化。  
缺 2：仍出 Counter 条件句（IF 最终散客 ≥ X THEN 缩到 __ 或价 ≥ __）。  
缺 3：用公开 BAR Gross 并声明可能高估散客机会成本。

---

## 9. Confidence / 边界

方向（高峰不 dump、无数字不 Accept、肩日分开）：有日期+房量+BAR+OTB → **Medium**。  
ET / 贡献 / Wash → **Low Hypothesis**。  
中国占房「行业都这样」→ **Hypothesis B**，不能当 Accept 理由。  
赠送婚房、餐标档位、宴会毛利率、变动成本、佣金% → **NV**，用用户数。  
TRevPAR / GOPPAR 看结构，**不改今晚 BAR**。

MinLOS=2：婚夜**可以**是已证实 Peak（须 Pace/Pickup 旁证），只盖该夜；**不要**自动给周五/周日加 MinLOS。

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 02:17 CST | drafted。BACKLOG P30。宴会 vs 占房；高峰周六默认 Counter；肩日分刀；婚房/家长房 must-keep。不编餐毛利。 |

---

会带房 / 会议+小房块走 **T-Meet** `theory/meeting-with-rooms.md` · `dont-dump-bar-for-meeting-rooms.md`（2026-08-25 08:17），不是把本剧改成会议专篇。社交宴会仍走本卡。

会带房满本剧本走 **P50** `advisor-playbooks/meeting-with-rooms.md`（2026-08-25 10:17）。社交宴会仍走本卡。

只要厅不要房 / 本地半天会走 **P51** `advisor-playbooks/catering-only.md`（2026-08-25 14:17）。黄金厅段 P51 默认留给婚宴/带房会，不是把本剧改成厅-only。社交宴会仍走本卡。
