# Decision Card: Blackout or Close Leaking Corp（高峰关漏出协议 / 不下杀户）

> 资产：Advisor Decision Card  
> 路径：`recommendations/blackout-or-close-leaking-corp.md`  
> 对应：问题树 §12 · §35；P26  
> 剧本：`advisor-playbooks/corporate-leakage.md`  
> 理论：`segmentation/segment-mix.md` §2.3 / B7 · `pricing/how-much-to-move.md`（不改幅度）  
> 交叉：P23 另一道围栏勿叠砍 · P25 协议在 OTA ≠ 直销 · P10/P30 不是一团  
> 状态：active · Scout 2026-08-22 06:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；IDeaS/Marriott 帮页 A Vendor 且边界写清；折扣% 非 Fact  
> Last Verified：2026-08-22

```yaml
decision: Blackout peak Saturday corp or remove corp from OTA; keep weak weekdays; do not kill the account
scenario: 协议出现在散客高峰 / 协议挂上OTA / 周末不像商务；有人要关整个协议账号
required_inputs:
  - stay date + DTA + Pace/Pickup + Peak flag
  - public BAR (direct and OTA BAR layer)
  - contract rate + channel where booked
  - LRA vs NLRA vs Unknown, blackout list if any
  - qualification policy if user has one (else hotel-owned fence)
signals_for:
  - peak_saturday_corp_undercuts_public_bar
  - corp_code_visible_on_ota
  - leisure_names_private_email_using_corp_code
  - weekend_not_in_contract_scope
signals_against:
  - contract_LRA_and_date_not_blacked_out
  - weak_weekday_true_corporate_demand
  - public_direct_closed_or_inverted
  - price_already_highest_on_public_bar_then_do_not_raise
recommended_action: 先分合同范围 vs 漏出。高峰周六默认 blackout 或从OTA拿掉协议码；弱市工作日留。真LRA员工不停。没合同不编必须开/必须便宜30%。不要关死账号。不要把BAR降到协议价。会员不要再叠−5%。价已最高只关不涨。禁一夜−15%。
risk: 把LRA日关掉得罪真账户；把OTA协议当直销留下；杀户后周中空房；三层围栏叠砍
follow_up: 24h 分渠道Pickup；OTA是否还能搜到协议码；入住核验不合格数
confidence: 有日期+价+渠道则漏出方向 Medium；杀户 Low；点折扣 Unknown
evidence_level: B
last_verified: 2026-08-22
```

---

## 1. 何时用

「协议周六 480 订高峰要不要关协议」「协议跑到 OTA 了」「销售说协议必须全年开」。

主动词：**Blackout / Remove from OTA / Qualify / Keep weekday**（写到 Stay Date + 哪个账号）。  
不要用：只有一句「协议要管严」无日期、无渠道。

公开 BAR 走 Increase BAR / 幅度卡。本卡只回答 **协议这一层关不关、在哪关**。

---

## 2. 硬门（先停）

命中则不要用「关整个协议账号」当第一刀：

1. 用户已给 **LRA** 且该日未 blackout → 真员工必须开；只打假资格和 OTA 挂出  
2. 弱市工作日、协议在填房 → **留**  
3. 直销没开 / 公开倒挂 → 先修公开层（P25）  
4. 公开价已最高 → 公开只关不涨（协议高峰仍可 blackout）  
5. 没合同文件 → 不编「必须开」或「必须便宜 30%」；高峰按 NLRA Hypothesis  
6. 要把 BAR dump 到协议价 → 拒绝

---

## 3. 动作表

```text
Stay Dates:
Account:        点名账号，不要默认「全部协议」
Contract:       LRA / NLRA / Unknown
Peak Sat:       corp BLACKOUT（Unknown 或 NLRA）| 若 LRA → OPEN + 核验
Weak Tue:       corp KEEP
OTA:            REMOVE corp code（漏出，不是关光 OTA）
Direct/GDS/TMC: 真需求可订
Public BAR:     区间+首选；主刀不是改 BAR；价已最高只关不涨
Member:         P23 同向；禁止再叠 −5%
Existing res:   不盲取消；核验不合格 → 改 BAR（政策问用户）
Do-not-do:
  - 关死账号
  - 没合同却保证必须开 / 必须 30% off
  - BAR → 协议价
  - 协议在 OTA = 直销
  - 一夜 −15%
```

**高峰协议 vs 公开 BAR：** 除非合同 LRA，协议不应低于当日公开 BAR 还开着。Unknown → Hypothesis：高峰关协议、周中留。

---

## 4. Counter 口径（给销售）

对假资格 / 范围外高峰：**Counter = 该日改走公开 BAR 或取消协议价**，不是把零售降下来迁就。  
对真账户：高峰 blackout 一句；周中「你们的价还在」。不要用「我们不再合作」。

---

## 5. 顾问三句（本卡验收）

1. 协议价出现在高峰散客日，先分是合同范围还是漏出，不要一律关死账号。  
2. 高峰周六默认 blackout 或把协议从 OTA 拿掉；弱市工作日可以留。  
3. 没合同文件不要编「协议必须开」或「必须便宜 30%」。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-22 06:17 CST | 首版。P26 主卡。高峰 blackout / 下 OTA；弱日留；不杀户。 |
| 2026-08-22 20:17 CST | 复盘：blackout 码 ≠ P31 KEEP 机组块。无 needs_revision。 |

> 交叉指针（2026-08-28 22:17，不改正文）：把公开 BAR 跟到年标 / 为签年标 dump 走 **P71** `dont-anchor-bar-to-corp-rate.md`。本卡仍管已签码高峰漏出围栏，不是改公开尺。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
