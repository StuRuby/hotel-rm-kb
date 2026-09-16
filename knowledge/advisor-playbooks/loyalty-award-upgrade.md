# Playbook P49｜Loyalty Award / Elite Upgrade｜积分免房抬高 OCC · 空间可用升级抢走套房

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/loyalty-award-upgrade.md`  
> BACKLOG：P49 Loyalty Award / Elite Upgrade · HIGH · 先决策卡（本轮同开）· slug **loyalty-award-upgrade**  
> 状态：**drafted**（2026-08-25 06:17 CST）  
> 配套卡：`recommendations/dont-raise-on-award-occ.md`（主卡；本剧不另开第二张卡）  
> 理论：`metrics/loyalty-award-upgrade.md`（轻指标 Hypothesis）· `metrics/occ.md` · `metrics/complimentary-house-use.md`（P47 对照）  
> 交叉：P47 无关 $0 请客 ≠ 本剧可能有品牌报销的兑房；P13 付费房型差 ≠ 空间可用免费升房；P23 会员 BAR ≠ 免费升级；P31 机组；P48 政务合同价；P05 dump 只砸付费 leftover；P01/P03 只看**付费** Remaining + Pace  
> 问题树：§55 「今晚积分免房 12 间，OCC 92% 还要不要涨」「金卡都要免费升套房，套房卖空了散客怎么办」  
> 仿真：`cases/sim-2026-award-upgrade-sat.md`（**Simulation**）  
> 证据等级：S（STR Sold 不含无关 complimentary；Sold 表**未点名** loyalty awards → 兑房进 Sold **NV**）；A Vendor BW only（Innsider FX 90/70/40% ADR，**不是**中国/华住 SOP）；A Vendor Marriott only（NUA 基于 property availability；elite 升级 subject to availability）；C（OMAAT：满房时常多报销兑房，空间可用升级常不报销）；华住积分结算 **NV**  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> Advisor-First：只建议拆付费剩余、Hold / 不涨 / 不 dump / 劝停非确认兑房与空间可用升级 / 纠正 Comp 误标 / 移交 P01·P03·P05·P47·P13·P23·P31·P48。**不操作 PMS**、不关兑房码、不改房态、不代报 STR。  
> 禁止：编造华住积分结算表 / 报销%；把 BW 90/70/40 当中国默认启发式；把 Marriott 积分/升级网格当中国 SOP；抄 OMAAT USD 进 Advise；发明 STR Award OCC；无兑房数就发明 12；按虚荣 92% 挂 899；把 BAR dump 到 399「因为积分客不是真需求」；一夜 −15% 当新 BAR；把兑房当 P47 无关请客；把免费升级当 P13 付费差。

---

## 0. 一句话

**积分免房/兑房仍占物理房；PMS OCC 因兑房虚高 → 不按那张 OCC 涨 BAR。先算付费剩余。**  
高峰/付费剩余紧：停或限额**非确认**的积分房与**空间可用**免费升房（Hypothesis；品牌硬规则 NV 就条件化）。套房留给能付 BAR 的人。Hold **779–799 首选 799**。  
弱市兑房可能是增量（报销可能 > 空房贡献）但不要把兑房价写成公开 BAR；免费升级弱市可以、高峰不行。兑房 ≠ P47 无关请客；升级 ≠ P13 付费房型差。

完成定义：一张「先拆兑房/空间可用升级 → 重算付费 Remaining / Pace → Hold 或限额或移交」过程。六种假信号写进**同一本**剧本，不拆成六本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 假高峰** | OCC 92% 来自 12 间积分免房 | 兑房抬高占用，不是付费需求变强 | **不**按那张 OCC Increase BAR。重算**付费剩余** + Pace。付费仍紧 **且** Ahead → 才 **P01/P03**，理由是**付费**剩余，不是 92% |
| **B 高峰还在兑房/乱升** | 付费剩余已紧，今晚还在接非确认兑房、金卡全升套房 | 再兑/再升 = 置换当晚 BAR | 停或限额**非确认**兑房；停**空间可用**免费升房（Hypothesis；品牌硬规则 NV 就条件化）。套房留给能付 BAR 的人。Hold **779–799 首选 799** |
| **C 假剩余** | 套房「空着」/ 标准房看起来能砸 | 套房被免费升级占掉，不是 leftover | **不是 P05 leftover。** 不要 dump 剩下的标准房。物理套房已被升级占用 |
| **D 弱市兑房** | 冰夜，兑房来了 | 空房贡献可能低于报销（金额 NV） | **接兑房**（增量 Hypothesis）。**仍不要**把兑房价写成公开 BAR。弱市空间可用升级可以 |
| **E 误标 Comp** | 前台把兑房开成 P47 请客 | 可能有品牌报销的占用被标成无关 $0 | **不是 P47。** 纠正桶。物理占用仍计入 Remaining。报销金额 **NV**，不编 |
| **F 品牌硬规则** | 金卡「必须升套房」/ 已确认 NUA | 合同或品牌保证 ≠ 酌情升级 | **已确认 / 合同保证 → 履约。** 未知则问。不发明 Marriott 中国网格。未确认的空间可用升级仍可停（形 B） |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 积分免房/兑房仍占物理房；PMS OCC 因兑房虚高 → 不按那张 OCC 涨 BAR。先算付费剩余。
2. 高峰/付费剩余紧：停或限额非确认的积分房与空间可用免费升房（Hypothesis；品牌硬规则 NV 就条件化）。套房留给能付 BAR 的人。Hold 779–799 首选 799。
3. 弱市兑房可能是增量（报销可能 > 空房贡献）但不要把兑房价写成公开 BAR；免费升级弱市可以、高峰不行。兑房 ≠ P47 无关请客；升级 ≠ P13 付费房型差。
```

独立默认（本库 Hypothesis）：当晚定价用 **付费 Remaining + Pace**。兑房是否进 STR 历史 Sold = **NV**（Guidelines 兑房写在 Rooms Revenue；Sold 表未点名 loyalty awards）——**不要发明 STR 把兑房当 Comp，也不要发明 Award OCC。** 缺兑房间数 → **问，不发明 12**。报销% → **NV**（BW 90/70/40 只 Vendor BW）。华住结算 → **NV**。

尺（Hypothesis；799 只 Simulation）：过夜 **Hold 779–799 首选 799**，除非付费剩余重算后真进 P03。禁止 899 出虚荣 92%；禁止 399 dump「积分客不是真需求」。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| S1 | 「今晚积分免房 12 间，OCC 92% 还要不要涨？」 |
| S2 | 「金卡都要免费升套房，套房卖空了散客怎么办？」 |
| S3 | 用户给了 Physical 与 PMS OCC，但没给兑房间数 / 升级间数 |
| S4 | 高峰夜前台还在按空间可用给金卡升套房，或销售还在接非确认兑房 |
| S5 | 套房剩余看起来厚，有人要把标准房 dump 到 399 |
| S6 | 兑房被标 complimentary / 当 P47 请客 |

**不是本剧本：**

- 无关 $0 员工/业主/FAM 请客、无积分/无项目报销 → **P47**。  
- 付费房型差 / 标准卖空套房还开着 → **P13**。本剧是免费升，不是付费差。  
- 会员 BAR vs 公开 BAR（两边都有房价）→ **P23**。免费升级 ≠ 会员价。  
- 机组 allotment / extra → **P31**。  
- 政务/差旅协议价 → **P48**。  
- 永久宿舍 / 6+ 个月员工公寓 → **P37**。  
- 非兑房、付费 remaining 真紧且 Pace Ahead → **P01/P03**（理由是付费剩余，不是 92%）。  
- 真付费 leftover 弱市 → **P05** 围栏；**仍禁止**把 BAR 写成兑房价。

---

## 2. 输入（缺兑房数不停，但不编 12）

```
必须：
1) Stay Date + DTA
2) Physical（大楼房量）
3) Sold 或 OTB，并声明这张 OCC 是否含积分免房 / 兑房
4) 用户口中的 OCC% /「金卡都要升」——先当待重算，不当最终尺

应用：
5) 当日积分免房 / 兑房间数（缺则问，不编 12）
6) 当日空间可用免费升房间数（缺则问，不编 8）与被占房型
7) 是否已确认升级奖（NUA 类）或合同保证升房（缺则条件化，不编必须升）
8) Pace / 3D Pickup（重算付费剩余之后才用来开 P03）

Recommended：
9) 本店品牌是否报销兑房、公式（缺则 NV，不编 BW %）
10) 是否机组（P31）/ 政务（P48）/ 无关请客（P47）
11) 套房 Physical 与套房 Remaining（声明是否已被升级占用）
```

缺兑房数 **不停**：条件化两支（卡 §4）。禁止「92% 所以涨 / 积分客不是真需求所以 399 / 金卡必须全升」。  
顾问 **不** 关兑房码、不改房态、不代报 STR、不编华住结算。

---

## 3. 三桶清单（动价前必过）

先定性占用类。对不上就不要用那张好看的 OCC 或「空着的套房」去改 BAR。

| # | 桶 | 占物理房？ | 有没有房价/报销？ | 是不是公开 BAR？ | 顾问默认 |
| --- | --- | --- | --- | --- | --- |
| D1 | **公开 BAR** | 是 | 有（客人付） | **是** | 本剧定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| D2 | **积分免房 / 兑房 / award** | **是** | 客人 $0；**可能**有品牌报销（金额 NV） | **否** | 占房。不按含兑房的 OCC 涨。高峰可停非确认（Hypothesis） |
| D3 | **空间可用免费升级** | 占**更高房型** | 几乎无增量房费；空间可用升级常不报销（C） | 否 | 高峰停（Hypothesis）。套房留给 BAR |
| D4 | **已确认升级奖 / 合同保证** | 占更高房型 | 可能有少量补偿（C；金额 NV） | 否 | **形 F。履约。** 不是酌情 |
| D5 | **无关免费 / 请客房** | 是 | **$0 且无项目报销** | 否 | **P47** |
| D6 | **付费房型差** | 是 | 客人付差价 | 是（更高 BAR） | **P13** |

重算（声明口径；数字是用户的或 Simulation，不是行业常模，不是华住结算 Fact）：

```
Award RN                 = 积分免房 / 兑房间夜（占物理房）
SA upgrade RN            = 空间可用免费升房（占更高房型，通常不另占一间物理房）
Paid remaining           = Capacity − occupied − OOO     # occupied 已含兑房
PMS OCC (incl. awards)   = occupied / Available           # 可被兑房抬高
Paid OCC (Hypothesis)    = (occupied − Award RN) / Available
# 不发明 STR Award OCC / Award MPI
# 兑房是否进 STR Rooms Sold = NV（Guidelines 未在 Sold 表点名 loyalty awards）
```

| 对不上 | 结论 |
| --- | --- |
| PMS OCC 高、兑房实质 | **A 假高峰。** 92% 不是需求变强 |
| 付费剩余紧还在兑/升 | **B。** 停非确认兑房 + 停 SA 升级 |
| 套房「空」其实是升级占用 | **C 假剩余。** 不是 P05 |
| 冰夜兑房 | **D。** 可接；不改 BAR |
| 兑房被标 complimentary | **E。** 纠正桶。不是 P47 |
| 已确认 NUA / 合同保证 | **F。** 履约。未知则问 |

BW 90/70/40 **不出现在中国公式里**。华住结算 NV，不出现在公式里。仿真 12 / 8 只在案例文件。

---

## 4. 诊断枝（禁止「92% 所以涨 / 积分客所以 399 / 金卡必须全升」）

```
用户拿兑房 OCC / 金卡升套房 / 套房空了 要动 BAR
│
├─ 还没给兑房间数或升级间数？
│     是 → 问，不编 12 / 8。条件化：
│          若兑房+SA 升级 ≈ 0 → 按原 OCC/剩余进 P03 或 P05 检查单
│          若兑房实质 → 先划掉付费 remaining 再谈价
│
├─ 是无关 $0 请客、无积分项目？
│     是 → 离开，进 **P47**
│
├─ 是付费房型差（客人付升级）？
│     是 → 离开，进 **P13**
│
├─ 是会员 BAR vs 公开 BAR？
│     是 → 离开，进 **P23**
│
├─ 是机组 / 政务？
│     是 → **P31** / **P48**
│
├─ A 假高峰：PMS OCC 好看，分子侧含兑房
│     重算 Paid remaining、Pace
│     ├─ 付费不紧，或 Pace 并非 Ahead
│     │     → 不涨。Hold。不是 High Demand
│     └─ 付费真紧 AND Pace Ahead / 中位 Days-to-Sellout < DTA
│           → 离开「按 92% 涨」，进 **P01/P03**
│             理由是付费剩余，不是虚荣 92%
│             先停非确认兑房 / SA 升级（Hypothesis），再决定涨不涨
│
├─ B 高峰还在兑/升
│     付费剩余紧 + 还在接非确认兑房或 SA 升套房
│     → 劝停 / 限额非确认兑房；停空间可用升级
│     Hold BAR 779–799 首选 799
│     已确认 NUA / 合同保证 → 形 F，不暗改成赶客
│
├─ C 假剩余：套房「空」要砸标准房
│     拆：升级占用 vs 真付费空套房
│     ├─ 「空」是免费升级在住
│     │     → 不 dump。Hold。不是 P05
│     └─ 付费空房仍厚 + DTA≤3 + Pickup≈0 + 市场不冰
│           → **P05** 三档；对象是付费空房；禁止一夜 −15%
│           仍不要把 BAR 写成兑房价
│
├─ D 弱市兑房
│     冰夜、付费空厚
│     → 接兑房（报销可能 > 空房贡献；金额 NV）
│     仍不把兑房价写成公开 BAR
│     弱市 SA 升级可以
│
├─ E 误标 Comp
│     兑房被开 complimentary / 当 P47
│     → 纠正桶。物理占用仍减 Remaining
│
└─ F 品牌硬规则
      已确认升级奖 / 合同保证升房
      → 履约。未知则问。不发明 Marriott 中国网格
      未确认的空间可用升级仍可按形 B 停

Naive（禁止）
      「92% 所以 899」
      「积分客不是真需求所以 399」
      「金卡必须全升套房」
      一夜 −15% 当新 BAR
      发明 12 / 8
      把 BW 90/70/40 当中国默认
      编华住结算表
      写成 STR Award OCC
      把兑房当 P47；把免费升当 P13
```

**P03 只在付费重算之后。** 好看的 92% 不是 Sellout 开门条件。  
**P05 的 dump 对象是还能卖的付费空房。** 降 BAR 卖不掉正在睡的兑房，也填不回被升级占掉的套房。  
**T19：** 高峰再兑/再升的机会成本是当晚付费 BAR（及套房 BAR），不是 0。报销金额不编。  
**T20：** 不发明 399 去「清积分客」。无地板不发明数字。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉 Stay Date / DTA。没有日期仍条件化，不说无法判断。
2. 要 4 个数：Physical、当日兑房间数、空间可用升级间数、这张 OCC 是否含兑房。缺兑房 → 问，不编 12。
3. 定性：兑房 → 本剧。无关请客 → P47。付费差 → P13。会员 BAR → P23。机组 → P31。政务 → P48。
4. 声明 STR 不发明 Award OCC。兑房进不进 Sold = NV。
5. 重算：Paid remaining、PMS OCC（含兑房，须声明）、Pace。套房 Remaining 是否已被升级占用。
6. 分形：A 假高峰 / B 高峰兑升 / C 假剩余 / D 弱市兑房 / E 误标 Comp / F 硬规则。可以同时命中。
7. A：付费紧且 Pace Ahead → P01/P03（先停非确认兑房/SA 升再评涨）。只是兑房撑的 92% → 不涨。
8. B：停非确认兑房 + 停 SA 升级。C：不 dump。E：纠正桶。F：履约已确认。
9. D：弱市接兑房；仍不改公开 BAR。禁止 dump 到 399。
10. 输出 Hold / 不涨 / 停 SA 升级 / 限额非确认兑房 / 纠正 Comp 误标 / 移交 + 价区间+首选 + 再看 3 个数 + 24h Trigger。不操作 PMS。
```

### 5.1 动作表

```text
Stay Date:
Physical / PMS occupied / Award RN / SA upgrade RN:   （用户数；缺则 Unknown，不编 12 / 8）
付费 Remaining / Pace:
这张 OCC 是否含兑房:
已确认升级奖 / 合同保证？:
Decision: Hold BAR / 不涨 / 停 SA 升级 / 限额非确认兑房 / 纠正 Comp 误标 / 移交 P03 / 移交 P05（仅付费空房，BAR≠兑房价）/ 移交 P47 / P13 / P23 / P31 / P48
Public BAR: 区间 + 首选（Hypothesis；仿真见案例）
Fence:      默认不开。假高峰 / 假剩余不是围栏许可证
Inventory:  付费空房保持 OPEN。兑房保持占用——不要当 leftover dump。套房留给 BAR（高峰停 SA 升）
Restriction: 不因虚荣 92% 新设 MinLOS。高峰可建议限额非确认兑房（Hypothesis，问品牌）
Do-not-do:
  - 按 PMS 92% 自动 Increase BAR（含 +100 → 899）
  - BAR → 399「积分客不是真需求」
  - 一夜 −15% 当新 BAR
  - 把兑房标 complimentary 当 P47
  - 把免费升当 P13 付费差
  - 发明 STR Award OCC
  - 编华住结算 / 抄 BW % 当中国默认
  - 操作 PMS
Trigger: 该晚停非确认兑房 / 停 SA 升级 → 重算付费 Remaining；付费变紧才评涨
```

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **不要按兑房 OCC 涨；不要 dump；高峰停 SA 升级。**

| 重算结果 | BAR | 说明 |
| --- | --- | --- |
| A：只是兑房撑的 92%，付费不紧或 Pace 非 Ahead | **Hold**。区间可给心理带（例现行 799 → 779–799 首选 799），**不是**已经降了 | 仿真主枝。禁止 899 |
| A：付费真紧 + Pace Ahead | **P01/P03**：先停非确认兑房/SA 升（Hypothesis）；未最高才第一刀 +5–8% / +8–15% 或收到最低竞对；已最高只关不涨。理由是付费剩余，不是 92% | 须把「付费紧」写进 Situation |
| B：高峰还在兑/升 | **Hold 779–799 首选 799**；停 SA 升级；限额非确认兑房 | 12/8 只 Simulation |
| C：套房被升级占、要砸标准房 | **Hold**。拒绝 dump / 拒绝 399 | 不是 P05 |
| D：弱市兑房 | BAR **Hold**；接兑房 | 不把兑房价写成 BAR |
| E：误标 Comp | BAR **Hold**；纠正桶 | 不是 P47 |
| F：已确认 / 合同保证 | 履约；BAR 仍 Hold | 未知则问 |
| 弱市 leftover | **P05** 围栏；对象是付费空房；**不要**把 BAR 写成兑房价；**禁止一夜 −15%** | 不是 dump 到 399 |
| 价已最高 | 只关不涨 | 与 P03 同 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
12 / 8 / 92% / 799 **只允许出现在 Simulation**，不是行情，不是新 BAR。

### 5.3 Advisor-First

建议用户：兑房间数与升级间数截图、这张 OCC 是否含兑房、是否已确认升级奖/合同保证、24h 付费 Pickup。顾问不关兑房码、不改房态、不代报 STR、不自动调价。

---

## 6. 顾问十节输出（对用户；活用户可填）

按 `decision-framework/advisor-process.md` 十节压缩，不要十二件事。活用户丢半份数据时按此填空，不要另起结构。

| # | 节 | 本剧填什么 |
| --- | --- | --- |
| 1 | Situation | Stay Date；Physical；兑房间数 / SA 升级间数（缺则问不编 12/8）；PMS OCC vs 付费 Remaining；BAR；谁要涨/升/砸 |
| 2 | Diagnosis | 形 A/B/C/D/E/F。兑房 OCC 虚高 ≠ High Demand；SA 升级 ≠ leftover；兑房 ≠ P47 |
| 3 | Opportunity / Risk | 按 92% 涨奖励兑房占用；399 dump 积分客；高峰继续升套房挤掉 BAR；把兑房价写成 BAR |
| 4 | Recommended Action | Hold / 不涨 / 停 SA 升级 / 限额非确认兑房 / 纠正 Comp 误标 / 移交 P03 或 P05 或 P47/P13/P23/P31/P48。点或紧区间，不要「适当涨」 |
| 5 | Why | 兑房占物理房 + STR 兑房进 Sold NV + 空间可用升级常不报销（C）+ 付费 Remaining 已减占用 |
| 6 | Expected Impact | 方向：停一次假高峰定价 / 停一次假 leftover dump / 把套房还给 BAR。不伪造精确增收 |
| 7 | Risk | 见 §8 |
| 8 | What To Watch | 见 §9 |
| 9 | Re-evaluation Trigger | 见 §7 |
| 10 | Confidence | 能拆兑房占用则方向 Medium；缺间数只条件化 = Low–Medium；点价永远 Hypothesis/Simulation |

活用户填空骨架（复制后填；缺数写 Unknown，不编 12）：

```text
Situation:
  Stay Date / DTA:
  Physical / Occupied / Award RN / SA upgrade RN:
  OCC 口径（是否含兑房）:
  PMS OCC / 付费 Remaining:
  BAR / 拟议动作（涨+100 / 继续升套房 / 399 dump / 开 complimentary）:

Diagnosis:
  形: A 假高峰 / B 高峰兑升 / C 假剩余 / D 弱市兑房 / E 误标 Comp / F 硬规则
  付费 Remaining + Pace（Ahead / On / Behind）:

Opportunity / Risk:
  主机会:
  主风险:

Recommended Action:
  Public BAR:  （Hypothesis 带：779–799 首选 799，除非付费已进 P03）
  Inventory / 兑房与升级政策（Hypothesis，问品牌）:
  Do-not-do: 899 出虚荣 OCC；399 dump 积分客；一夜 −15%；发明 12；金卡必须全升

Why:
Expected Impact:  （方向，禁止伪造精确增收）
Risk:
What To Watch:
Re-evaluation Trigger:
Confidence:  方向 Medium / Low–Medium；点价 Hypothesis/Simulation
```

出口必须能被前台复述成三句（§0）。禁止输出 PMS 点击步骤。禁止输出「华住兑房结算多少所以接多少」。

---

## 7. Trigger

| 事件 | 动作 |
| --- | --- |
| 用户补出兑房≈0 且口径已声明 | 离开本剧，按原 OCC/剩余进 P01/P03 或 P05 |
| 用户补出兑房实质 | 按新 Paid Remaining 重跑 §4 |
| 用户补出是无关请客、无积分 | **P47** |
| 用户补出是付费升级差价 | **P13** |
| 用户补出是会员 BAR | **P23** |
| 用户补出机组 / 政务 | **P31** / **P48** |
| 重算后付费 Remaining 紧 + 24h 付费 Pickup 仍正 + Pace Ahead | 移交 **P03**（先停非确认兑房/SA 升）。理由仍不是 92% |
| 重算后付费空房厚、DTA≤3、Pickup≈0、市场不冰 | 移交 **P05**；围栏优先；**仍禁止 BAR=兑房价** |
| 销售仍要把 BAR 砍到 399 清「积分客」 | **拒绝。** 形 C / Naive；禁一夜 −15% |
| GM 仍要按 92% 挂 899 | **拒绝。** 形 A |
| 前台仍开 complimentary | 形 E。纠正桶 |
| 前台仍按空间可用给金卡升套房且付费剩余紧 | 形 B。劝停 SA 升级 |
| 用户确认该晚已确认 NUA / 合同保证 | 形 F。履约。未确认的仍可停 |
| 品牌确认该晚可关非确认兑房 | 建议执行（顾问不操作）；重算付费 Remaining |

300 间尺：不因假 92% 发明新幅度。

---

## 8. 风险

| 风险 | 观察 | 为何要紧 |
| --- | --- | --- |
| 把兑房 OCC 当 High Demand | Pace 约 On 却按 92% 挂 899 | 奖励非付费占用；付费客人被挤出 |
| 把 BAR dump 成「积分客价」 | 销售坚持 399 | 公开基准被一夜改写；积分客不是弱需求证明 |
| 高峰继续 SA 升套房 | 套房 Remaining → 0，BAR 套房拒单 | 最后几间套房从付费手里被抢走 |
| 把兑房当 P47 免费 | 可能有报销的占用被标 complimentary | 桶错了；STR 口径更乱 |
| 把免费升当 P13 | 用付费差价逻辑去「修 mix」 | 升级几乎无增量房费 |
| 把 BW 90/70/40 写进中国早会 | Vendor 页被丢掉标签 | 不是华住/中国默认 |
| 真付费紧却因「怕误诊」死不涨 | 付费 Remaining + Ahead | 重算后仍紧 → P03，不是永远 Hold |
| 品牌其实强制接兑房 / 保证升房 | 用户确认硬规则 | 条件化：不能关则 Hold BAR，仍不 dump，仍不按 92% 涨；已确认履约 |

---

## 9. 盯什么

- 新兑房 Pickup（销售是否继续接非确认积分房）  
- 新 SA 升级间数（前台是否仍在升套房）  
- 付费净 Pickup（不是含兑房的 PMS OCC）  
- 公开 BAR 有没有被改成 899 或 399  
- 前台是否仍把兑房开 complimentary  
- 用户是否确认该晚可限额非确认兑房 / 是否有已确认 NUA

---

## 10. Confidence / 边界

能拆兑房占用（Physical + Award RN + OCC 是否含兑房）→ 方向 **Medium**（不自动涨、不停已确认硬规则、不 dump）。  
缺间数只条件化 = **Low–Medium**。  
STR 兑房进 Sold = **NV**。BW 90/70/40 = **A Vendor BW only，不是中国**。Marriott NUA / elite 升级 subject to availability = **A Vendor Marriott only**。OMAAT 满房多报销 / SA 升级常不报销 = **C / Hypothesis**。动作 = **B / Hypothesis**。  
华住积分结算表、报销%、Walk 成本、佣金%、点弹性 = **NV**，不编。  
本店兑房间数用户没给 → **问，不编 12**。

仿真：`cases/sim-2026-award-upgrade-sat.md`（**Simulation**，不是真店）。主枝 **Hold 779–799 首选 799**；停 SA 升级；不按 92% 涨；不 dump。12/8/92%/799 只在该卷。华住 SOP / 报销% 未编。

---

## 11. 证据（2026-08-25 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| Rooms Sold / Demand **excludes complimentary rooms**；OCC = Sold / Available | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/glossary （2026-08-25 打开） |
| 历史 Sold：产生收入的客房；**含**促销/合同免房费占用（买二送一、团 50 送 1）；**不含**无关 complimentary（员工/业主/FAM） | S | **Known 口径** | https://www.costar.com/products/str-benchmark/resources/guidelines/historical-benchmarking-data-reporting-guidelines （2026-08-25 打开） |
| Loyalty program redemptions and rewards：写在 **Rooms Revenue**（保守均价 / 品牌标准；月末或按日分摊） | S | **Known 收入记账** | 同上 Historical Guidelines 「Loyalty program redemptions and rewards」 |
| 兑房间夜本身进不进 Rooms Sold vs Complimentary-exclude | — | **NV。** Sold 表未点名 loyalty awards。**不要发明 STR 把兑房当 Comp** | 同上 Reporting Rooms Sold 表 |
| BW FX：OCC≥90% 报 90% ADR；70–90% 报 70%；<70% 报 max(40% ADR, $40) | A **Vendor BW only** | **不是中国/华住 SOP。不抄进默认启发式** | https://www.innsiderrewards.com/free-nights-fx/ （2026-08-25 打开） |
| 项目常在满房时对兑房报得更多；空间可用升级常不报销 | C | Hypothesis 方向；**不抄 USD** | https://onemileatatime.com/insights/hotels-paid-redeem-points/ （2026-08-25 打开） |
| Marriott NUA = 一晚可确认升至指定高端房/套房，**based on property availability** | A **Vendor Marriott only** | **不是中国 SOP。不抄点表** | https://support.marriott.com/s/article/marriott-nightly-upgrade-award · https://www.marriott.com/loyalty/nightly-upgrade-awards.mi （2026-08-25 打开） |
| Marriott Platinum elite Enhanced Room Upgrade **subject to availability upon arrival** | A **Vendor Marriott only** | 空间可用，不是保证 | https://www.marriott.com/loyalty/member-benefits/platinum.mi （2026-08-25 打开） |
| 华住积分兑房酒店结算表 / 报销% | — | **NV。不编。** | 搜索 `华住 积分兑房 酒店结算`：无官方结算页打开 |
| 好看 PMS OCC 不是涨价令；SA 升级不是 leftover | B | 动作 Hypothesis | 本剧；主卡 |

Failed / 未打开（记搜索词，不编页）：

```
华住 积分兑房 酒店结算
华住会 积分免房 门店报销 官方
锦江 积分兑房 结算
STR "award night" OR "loyalty redemption" rooms sold complimentary
```

---

## 12. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-AWD-01 | 兑房间夜在 STR 历史 Rooms Sold 里 Include 还是 Exclude | **NV。** 不发明当 Comp，也不发明 Award OCC。收入记账另见 Guidelines Loyalty 节 |
| NV-AWD-02 | 华住 / 锦江积分兑房对酒店的结算公式 | **仍 NV。** 不编表，不抄 BW % |
| NV-AWD-03 | 本店品牌该晚是否可关非确认兑房、是否强制接 | 问合同/品牌；不能关则 Hold BAR，仍不按 92% 涨 |
| NV-AWD-04 | 本店 PMS 是否把兑房算进占用 / 是否误标 Comp | 问；未声明则两套都算 |
| NV-AWD-05 | 已确认升级奖 vs 空间可用 elite 升级：本店品牌硬规则 | 问。未知则条件化。不发明 Marriott 中国网格 |
| NV-OB-01 | Walk 成本清单 | 仍 NV；本剧不填金额 |
| NV-GOV-01 | 中国现行差旅限额表 | 仍 NV（P48）；本剧不引用 |

---

## 13. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 06:17 CST | drafted。BACKLOG P49。六形 A 假高峰 / B 高峰兑升 / C 假剩余 / D 弱市兑房 / E 误标 Comp / F 硬规则。主卡 `dont-raise-on-award-occ.md`。仿真 `sim-2026-award-upgrade-sat.md`。不编 12 / 华住结算 / BW % 默认。STR 兑房进 Sold = NV。 |

---

## 14. 交叉（不改 P01–P48 正文；P47/P13/P23 仅文末一行）

- **P47**：无关 $0 请客、不进 STR 历史 Sold。本剧兑房**可能有品牌报销**（金额 NV）。误标 Comp → 纠正桶。award ≠ unrelated comp。  
- **P13**：付费房型差 / mix 压缩。本剧是空间可用**免费**升房，几乎无增量房费。upgrade ≠ paid differential。  
- **P23**：会员 BAR vs 公开 BAR（都有房价）。免费升级 ≠ 会员价围栏。member BAR ≠ free upgrade。  
- **P31**：机组 allotment / extra。Crew ≠ 积分客。  
- **P48**：有房价政务合同价。gov ≠ award。  
- **P01 / P03**：付费 Remaining + Pace，不是含兑房的 PMS 92%。  
- **P05**：leftover dump 对象是付费空房。禁止把 BAR 砍到 399 当「积分客清仓」。  
- **T20**：不砸品牌底去冲 OCC。无地板不发明 399。  
- **how-much-to-move**：禁一夜 −15% 当永久 BAR。BAR→399 不是档 H。


## 15. 交叉（2026-08-27 06:17，不改兑房/SA 表）

**付费**升房报价（客人付差价）走 **P61** `paid-upsell-upgrade.md`，不是本剧空间可用免费升。本剧仍管 award / elite SA 免费升；高峰停 SA。P61 高峰默认付费报价。

## 16. 交叉（2026-08-27 08:17，不改兑房/SA 表）

付费升差价经济学（空 = 期权，不是人情）→ **T-Upsell** `theory/paid-upsell-differential.md`。本剧仍管 award / elite SA 免费升；高峰停 SA。付费报价过程仍 P61。

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。
> 交叉指针（2026-08-31 00:17，不改正文）：储值卡/礼品卡 Diagnose 走 **T-Stored** `theory/stored-value-vs-bar.md`，过程仍 **P83**。不规定 P84。

> 指针（2026-09-07 08:17 T07-08，不改正文三句 / 399 / 799）：RTC / Day Types / Membership Auto Discount deepen **已 skip**。§158 复核 only。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。库存 vs 计费房型 / 日历临时加减 / TX 过账折扣 ≠ 公开 BAR rewrite。不开 P88。不开 P89。


> 指针（2026-09-07 10:17 C07-10，不改正文三句 / 399 / 799）：RTC / Day Type / Membership Auto Discount misread Simulation `cases/sim-2026-rtc-daytype-misread-sat.md`；§159 CASE 指针复述 §158。Diagnose 仍本剧邻闸（**P61** / **P49** / **P06·P66** ± **P64/P60/P23/P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T07-08 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-15 22:17 S15-22，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages scout-only；§172。固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ Pace ≠ 公开 BAR rewrite。Diagnose handoff **P82/P78/P69/P79/T-Fee** · **P49/P80** · **P45/P87**；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `scout/2026-09-15-2217.md` · `sources/source-map.md` §172。

> 指针（2026-09-16 00:17 T16-00，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages deepen **theory-skip**；§172 复核 only。固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P82/P78/P69/P79/T-Fee** · **P49/P80** · **P45/P87**；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。全文 `research-log/2026-09-16-0017-theory-skip-fixed-charges-membership.md`。

> 指针（2026-09-16 02:17 C16-02，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages misread Simulation `cases/sim-2026-fixed-charges-membership-alerts-misread-sat.md`；§173 CASE 指针复述 §172。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699。T16-00 deepen **已 skip**。不开 P88。不开 P89。

> 指针（2026-09-16 04:17 R16-04，不改正文三句 / 399 / 799）：Fixed Charges / Membership Enrollment·eCert / Alerts·Messages 互补源 §174 — Protel Fixed charges（EOD 固定费）+ Stayntouch Hotel Loyalty Programs（挂会员）+ Stayntouch Configure Add-Ons Staff Alert（员工加购 Alert）新开。固定费自动过账 / 入会·挂会员 / 员工 Alert ≠ Pace ≠ 公开 BAR rewrite。Diagnose 仍 **P82**（+ **P78**/P69/P79）/ **P49**（+ **P80**）/ **P45**（+ **P87**）；Hold 779–799 首选 799；拒 399；不发明 699 不改。T16-00 deepen **仍 skip**。不开 P88。不开 P89。全文 `research-log/2026-09-16-0417-sources-recap.md` · `sources/source-map.md` §174。
