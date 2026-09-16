# Decision Card: One Action from Morning Huddle（早会只带走一个动作）

> 资产：Advisor Decision Card  
> 路径：`recommendations/one-action-from-morning-huddle.md`  
> 对应：问题树「早会只追OCC」；用户原话「早会到底看什么、说什么？」「店长要OCC，销售要促销，你三分钟讲完。」  
> 剧本：P45 `advisor-playbooks/daily-revenue-brief.md`  
> 理论：`theory/rm-daily-routine.md` · `decision-framework/advisor-process.md` §5  
> 交叉：T20 预算≠砍 BAR · P18 促销闸 · P37/P44 分母 · P43 拒单不是会场故事  
> 状态：active · 案例与剧本 2026-08-24 10:17  
> 知识类型：Best Practice / Internal Process / Hypothesis  
> 证据等级：B（动作）；A（HSMAI 周/双周会：短、相关块、动作问责；**不是**每日 SOP）；10 分钟三拍 = Hypothesis  
> Last Verified：2026-08-24  
> 仿真：`cases/sim-2026-monday-huddle-gm-occ.md`  
> 禁止：十二个动作；为会顺切 BAR；一夜 −15%；店长 OCC% 当刀；出资未知报闪促；编华住早会 SOP；顾问会上跑 PMS。

```yaml
decision: Compress the daily huddle to three beats and leave with one action; do not cut BAR to please occupancy vanity or to make sales look busy
scenario: 早会看什么说什么；店长要 OCC、销售要今夜促销、三分钟讲完
required_inputs:
  - stay_dates_tonight_plus_3_overnight
  - sellable_remaining_ooo_deducted
  - pace_vs_stly_and_24h_pickup_rooms
  - public_overnight_BAR
  - promo_who_pays_if_sales_wants_flash
signals_for:
  - gm_chases_occupancy_percent
  - sales_wants_same_night_flash_or_ota_promo
  - meeting_tries_twelve_topics
  - request_to_cut_BAR_so_the_meeting_goes_nicely
signals_against:
  - this_is_the_weekly_strategy_meeting (use HSMAI four circles)
  - pace_behind_and_slow_and_remaining_fat_and_channels_open (leave to P02/P08/P05)
recommended_action: 口播三拍。Pace On/剩余不是冰 → Hold BAR 779–799 首选 799（Hypothesis）。促销走 P18，出资未知+深折 → 不报。出口=一个动作+主人+24h Pickup 观察。禁一夜 −15%。399 只在 Simulation。
risk: 用切价换会场和平；把周会材料塞进早会；脏分母（OOO/钟点）驱动砍或涨；顾问在会上操作系统
follow_up: 该夜 24h 过夜净 Pickup 间夜；BAR 有没有被改成闪促价；下次早会是否又堆了十二题
confidence: 三拍方向 Medium；10 分钟与点价 Low
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「早会到底看什么、说什么」「店长要 OCC，销售要促销，你三分钟讲完」。

主动词：**三拍口播 / 一个动作 / Hold BAR / 促销走闸 / 拒绝为会顺而砍。**  
不要用：这其实是周策略会 → 四圆，不是本卡。真 Behind+Slow+厚剩余 → 离开到淡日卡，仍禁一夜 −15%。

书面多日期 Brief 仍走过程文件十节。本卡只回答 **会上带走什么**。

---

## 2. 硬门（先不砍、先不报、先不堆）

命中任一 → **不要切公开过夜 BAR 来换会场气氛，也不要堆任务清单**：

1. Pace On 或 Ahead，过夜可售剩余不是冰 → **Hold**（779–799 首选 799，Hypothesis）  
2. 店长只丢 OCC% → 回答 **Remaining 间夜 + Pace**，不回答降价  
3. 销售要今夜闪促且 **who_pays Unknown** 且深折 → **P18 Skip**  
4. 有人说「先砍了会好开 / 预算 OCC 不够」→ **T20 拒绝**。禁一夜 −15%  
5. 分母没扣 OOO 或混了钟点 → 先重算（P37/P44），脏%不是刀  
6. 议题超过一个活诊断 → 其余进周会。出口仍一行动作

真弱（Behind **且** Slow **且** 剩余厚 **且** 渠道开）才离开到 P02/P08；真冰才 P05。那不是本卡默认。

---

## 3. 会上出口（必须能勾）

- [ ] 四个过夜 Stay Date 说过曲线（OTB / Pickup / Pace / Remaining）  
- [ ] 只留一个诊断  
- [ ] 只留一个动作：当前值 + 区间或围栏 + 首选 + Owner  
- [ ] 一个观察（默认 24h 过夜净 Pickup 间夜）  
- [ ] Do-not-do 写了（今夜不砍 / 不报 / 不把闪促写成 BAR）  
- [ ] 顾问没有在会上操作 PMS  

不合格：只念 OCC%；只对销售说「报一个」；十二条待办；为店长消气切 BAR。

---

## 4. 动作表

```text
Stay Dates:        今晚 + 后三晚（过夜）
Remaining:         扣 OOO；不混钟点
Pace:              vs STLY 同 DTA
Public BAR:        Pace On → Hold 779–799 首选 799
Promo:             P18；Unknown 出资 + 深折 → Skip
Owner:             谁执行价或报名（不是顾问）
Watch:             该夜 24h 过夜净 Pickup 间夜
Spoken:            6–8 句
Do-not-do:
  - 十二个动作 / 周会材料
  - OCC% 当刀 / 为会顺切 BAR / 一夜 −15%
  - 编华住 SOP / 顾问代改 PMS
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 10:17 CST | 首版。P45。三拍一口播；Hold 不砍；促销走闸；一个动作。 |

---

## 6. 交叉（不改 §1–5）

T20 预算完成率不是今夜刀。P18 是促销唯一闸。P37 扣 OOO；P44 不混钟点——GM 虚荣 OCC 是「听起来低要砍」，不是 P37「看起来高要涨」。P43 口头拒单不当会场涨价故事。周会四圆仍在 `rm-daily-routine.md`。

> 交叉指针（2026-08-30 06:17，不改正文）：早会一个动作仍本卡；「总价贵/服务费吓跑/含税太贵所以砍 BAR」走 **P79**。交叉 P79 resort-fee/all-in ≠ 早会仪式。不写 P80。
