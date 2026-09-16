# Playbook P25｜Direct vs OTA Mix

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/direct-vs-ota-mix.md`  
> BACKLOG：P25 Direct vs OTA Mix · MEDIUM · 先诊断枝 · slug `direct-vs-ota-mix`  
> 状态：**drafted**（2026-08-21 08:00 CST）  
> 配套卡：`recommendations/steer-mix-by-net.md`  
> 理论：`segmentation/segment-mix.md` · `channel/net-contribution.md`  
> 先调用：P20 `channel-net-rate.md`（按净排序）· 促销走 P18  
> 问题树：§12 Channel Mix  
> 交叉：P16 价格战 · P05 当晚 · P03 压缩先关低价  
> 证据等级：A（净/COPE 声明制）；动作 Hypothesis；中国 OTA % = **NV**  
> Last Verified：2026-08-21

---

## 0. 一句话

OTA 占比升高、直销掉：**先问是故障、增量还是转移**，再决定收谁的配额。  
禁止两句空话：「全渠道跟最低价」和「把 OTA 关掉」。  
禁止「OTA ADR 高所以保 OTA」。

完成定义（BACKLOG）：能区分价差/库存/活动/产品；高峰关深折 OTA、不关直销；弱日可留净>0 的 OTA 围栏。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| M1 | OTA 间夜占比升、直销/Member 掉（用户给趋势或 OTB 结构） |
| M2 | 有人要「全渠道跟最低」或「跟 OTA 神券价」 |
| M3 | 有人要「关掉 OTA 省佣金 / 净化 mix」 |
| M4 | Gross ADR 升、老板仍觉得「渠道结构坏了」或反过来只看 OCC |

**不是本剧本：** 单次活动报不报 → P18。只问「哪个渠道毛高要保」且无 mix 趋势 → P20 足够。价格战跟不跟 → P16。团询 → P10。

---

## 2. 先排除（没过不许关 OTA、不许全网跟价）

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | **直销根本没开**：官网/微信/前台/品牌 CRS 配额 0、连住或会员计划误关 | **只开直销**。OTA 占比高是分母问题 |
| X2 | **直销价高 / 倒挂**：公开直销 > OTA 可订 | 先修平价或直销优势。监管后「全网最低」执行以用户后台为准，**不编整改细则**；顾问默认：**不把直销降到 OTA 深折** |
| X3 | **库存不同步**：OTA 有房、直销显示满/错价/错房型 | 先修 Channel Manager / 映射，不改 mix 战略 |
| X4 | **口径**：会员价算进 OTA、批发已净 vs OTA 仍毛、STR ADR 当店内 Gross | 先改口径 |
| X5 | OTA 增量其实在 **弱日/肩日**，声明净>0，直销已开且平价 | **不是病**。留 OTA 围栏；不要关 |
| X6 | 关渠道后 mix 好看、**总量没了** | 假结构。停关；问增量还是转移 |
| X7 | 佣金发票错期 | 用合同费率+当期间夜 |

排除顺序：X1–X3（供给/价格故障）→ X4（口径）→ X5–X6（增量 vs 转移）→ 再谈配额。

---

## 3. 诊断枝（先诊断，再动作）

```
OTA% 升 / 直销% 降
│
├─ 直销没开 / 倒挂 / 不同步？ ──是──→ 修直销。不关 OTA，不跟最低
│
├─ 口径毛净混用 / 会员算进 OTA？ ──是──→ 重切表
│
├─ 升在哪几天？
│     ├─ 只在弱日/肩日，直销开着，净能算则净>0
│     │     → 增量。留围栏；BAR 不动
│     └─ 在已证实 Peak / Ahead / Fast / 压缩日
│           → 转移或低净填高峰。收深折，不关直销
│
├─ 用户要「全渠道跟最低」？
│     → 最低若是 OTA 深折/神券：跟 = 把直销变成高成本渠道的地板
│     → 拒绝。直销守 BAR 或浅围栏 −3–5%
│
└─ 用户要「关掉 OTA」？
      → 先问：这些间夜关了会不会消失。Unknown 则先收高峰深折，不关光
```

调用 P20：有合同费率算 NetADR 排序；无费率只输出结构句。中国四平台官方%：**NV**，不填。

---

## 4. 动作（落到 Stay Date × 渠道）

### 4.1 按净排序（必须先做）

同 P20：

```
Net_c = Gross_c − Commission_c − Discount_c − Marketing_c − Distribution_c
```

缺项就声明「低估了直销或低估了 OTA」。禁止行业平均佣金填空。  
**OTA Gross 高不得作为保 OTA 的理由。**

### 4.2 日期分流

| 日类型 | 直销 | OTA | 禁止 |
| --- | --- | --- | --- |
| **高峰 / Ahead / Fast / Sellout** | **开着**。BAR 可订；会员围栏可留 | **关深折**（神券、店出>5%、opaque、批发泄漏）。BAR 层可留可订（曝光≠深折） | 关光 OTA；关直销；把 BAR 降到 OTA 最低 |
| **弱日 / 肩日 / Behind+Slow 且非市场冰点** | 开着；可自有预付 −3–5% | 围栏可留；净能算则净>0 才加配额 | 一夜 −15%；出资未知的新大促（P18 不报） |
| **价已最高** | 开着 | **只关**低价计划，**不涨** | 为「结构好看」再涨一把 |
| **直销故障未修** | 先修 | 维持 BAR 层，不新开深折 | 用关 OTA 惩罚客人 |

配额 Hypothesis（待反馈校准，与 P20 同数量级）：压缩日 OTA 低价配额收到剩余的 **30–50%** 或关 < 新地板；BAR 层不关。

### 4.3 两句禁令的替代句

**「全渠道跟最低」→**  
只在 **同一产品层** 守平价（直销 BAR ≈ OTA BAR）。OTA 深折、限时、资格券 **不是** 直销必须跟的最低。直销要动：走围栏 −3–5%，不是一夜对齐神券。

**「关掉 OTA」→**  
高峰关深折 + 必要时收低价配额。主渠道 BAR 层保留，除非用户证明关了间夜会 100% 转到直销（几乎 Unknown）。弱日关光 = 用假 mix 换空房。

### 4.4 输出模板

```text
Stay Dates:
Mix:                Direct% / OTA% / Other%（本期 vs 对照）
Gross ADR vs Net（或「费率 Unknown，结构：…」）:
Exclusion:          直销开着? 平价? 同步? 增量还是转移?
Decision:
  Direct:           Open（BAR / 会员）
  OTA deep:         高峰关 / 弱日围栏 −3–5%
  OTA BAR 层:       可订
  Match lowest:     否（只平价到 BAR 层）
  Shut OTA:         否
Quota:              压缩日低价 OTA → 剩余 30–50%（Hypothesis）或关 < 地板
Price:              价已最高只关不涨；Ahead 且价低走 +8–15% 尺，不靠保 OTA
Promo:              出资未知不报
Do-not-do:
  - OTA ADR 高所以保 OTA
  - 全渠道跟最低
  - 关光 OTA / 关直销
  - 编佣金%
  - 一夜 −15%
```

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 收深折后 24h **总** Pickup 塌、直销 Pickup 没接住 | 弱日把 OTA **BAR 层**配额开回；**不**重开神券 |
| 直销仍不可订或仍倒挂 | 停一切「优化 mix」；只修供给 |
| 用户补合同费率 | 重算净排序，只改该日配额 |
| 发现仍有公开 < 地板 | 先关产品（P03），再谈 mix |
| 竞对自杀价只在某一 OTA | 不跟（P16）；本店该渠道也不降净去打 |
| Pace 转 Ahead 且 OTA 深折仍开 | 当天关深折 |

---

## 6. 如果只能再补 3 个

1. 直销三渠道（官网/微信/OTA 对照）**可订截图 + 价**（排除倒挂/关房）  
2. 分日：OTA vs 直销间夜 + Gross；高峰日单独切  
3. 用户合同佣金 / 神券谁出（翻转净排序；Unknown 则只做结构动作）

---

## 7. Confidence / 边界

直销故障已排除、日期能切开：方向 Medium。  
缺费率：结构方向 Medium、金额 Low。  
中国 OTA %、整改「新佣金模式」、不报名是否掉权：NV。  
P23 会员跟价、P26 协议泄漏、P35 曝光下降：未写。  
不操作系统、不代开关后台。

仿真：`cases/sim-2026-ota-mix-40-to-55-net.md`。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 08:00 CST | drafted。BACKLOG slug `direct-vs-ota-mix`。先排除直销故障与肩日增量。 |

---

## 9. 交叉（2026-08-22 06:17）

协议码出现在 OTA 走 **P26** `corporate-leakage.md`，不是本剧的「直销」。

- 高峰仍关深折 OTA、不关直销 BAR 层（本卡）。
- 协议挂在 OTA = **漏出**：下协议码 ≠ 关光 OTA。
- 「OTA% 升」若其实是协议码被公开售卖 → 先 P26，再回来看 mix。
- 上条「P26 协议泄漏：未写」作废。P35 仍未写。

## 10. 交叉（2026-08-26 18:17）

当夜公开 dump「消化切房」不是 mix 战略。收/还渠道配额走 **P58**；本剧仍管故障 vs 增量 vs 转移。高峰不关直销 BAR 层（本卡）与 P58 公开 Hold 同向。

## 11. 交叉（2026-08-26 22:17）

当夜砍 Brand.com「对齐 OTA」不是 mix 战略。价平破口走 **P59**（修便宜侧，官网 Hold）。本剧仍管故障 vs 增量 vs 转移。

> 指针（2026-09-15 02:17 C15-02，不改正文）：§164 CASE Market·Source misread — Room Condition / Night Audit·EOD·Cashier / Market·Source Simulation drafted（`cases/sim-2026-room-condition-night-audit-market-misread-sat.md` · §164）。Diagnose 走 **P63**（+ **P67**/P37）/ **P54**（+ **P45**/P08）/ **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699 不改。不开 P88。不开 P89。

> 指针（2026-09-15 04:17 R15-04，不改正文）：§165 Clock Marketing Sources/Channels/Segments 新开；Market/Source/Channel 标签 ≠ 公开 BAR。Diagnose 主闸仍 **P25**（+ **P20**/P60）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。全文 `research-log/2026-09-15-0417-sources-recap.md`。
