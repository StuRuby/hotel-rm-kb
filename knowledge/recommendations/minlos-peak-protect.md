# Decision Card: MinLOS Peak Protect（高峰连住保护）

> 资产：Advisor Decision Card  
> 路径：`recommendations/minlos-peak-protect.md`  
> 对应：问题树 §8 / §16；O8 Restriction / O10 LOS  
> 剧本：`holiday.md`（P06）`concert-event.md`（P07）`sellout-risk.md`（P03）  
> 理论：`restrictions/restriction-framework.md`  
> 状态：active · Wave4  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Set MinLOS on confirmed peak nights to protect shoulder yield
scenario: Peak night at risk of single-night hollowing; shoulder weaker
required_inputs:
  - peak_dates + shoulder_dates
  - OTB / Pickup / Remaining 按日（至少 Peak 与 ±1）
  - overnight_or_holiday_corroboration
  - current_restriction
  - current_BAR（决定限制是配套还是代替涨价）
signals_for:
  - peak_pace_or_pickup_ahead
  - shoulder_otb_clearly_below_peak
  - single_night_still_open_on_peak
  - overnight_plausible
signals_against:
  - no_shoulder_data
  - event_flag_only_no_overnight
  - peak_still_thick_shoulder_already_hot
  - 3d_fast_7d_not（可能一团）
recommended_action: 只对已证实 Peak 设 MinLOS=2（连续 Peak≥3 才评 =3）；肩日保持 Open；BAR 价已最高则只限不涨
risk: 挡高价值单晚；独限被掏空的反面；系统挂在到达日 vs 在住夜不一致
follow_up: 24/48h 高峰与肩日 Pickup、短 LOS 拒单、取消
confidence: 缺肩日则 Low；齐则方向 Medium，N=2/3 为 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

同时接近：

- 有 **Peak**（节假日高峰夜 / 演唱会夜 / 展会核心夜），且 overnight 合理或已有 Pace/Pickup/竞对满旁证。
- **肩日** OTB 明显低于 Peak（经验起点：低 ≥8pp 或肩日 Days-to-Sellout 仍 > DTA，Hypothesis）。
- 高峰仍 **可订单晚**（无 MinLOS / 无 CTA）。
- DTA 通常 3–30。太近（≤2）再新设 MinLOS 可能只挡尾部，先关低价。

**不要用：**

- 肩日数据没有 → 今天不设，写 IF（与 Event / Protect 卡一致）。
- 只有「当地有活动」。
- Peak 仍厚、肩日已经热 → 问题是价不是 LOS。
- 3D 快、7D 不快 → 先查大单，不设 MinLOS。
- 淡日 / 市场也弱 → 应解开而不是加。

---

## 2. 哪几天、N 几（Hypothesis）

| 日历 | MinLOS | 肩日 |
| --- | --- | --- |
| 单高峰夜（周六演唱会、节假日最热 1 夜） | **只盖该夜 MinLOS=2**（或到达日=Peak−1） | −1 / +1 **Open**，可用连住包装 |
| 连续 2 夜高峰 | 两夜都 MinLOS=2 | 两端肩日 Open |
| 连续 ≥3 夜高峰且肩日也在动 | 评 **MinLOS=3**，首选仍先 =2 看 48h | 两端不盖 |
| 国庆整 7 天 | **禁止** 7 天同一 N | 按日画 Peak/Shoulder（P06） |

CTA 替代：若「不许高峰到达、允许已在住的住过」，用高峰 CTA，**不要**与 MinLOS 叠到无解。  
价已最高：本卡可以单独出，**不涨**。  
价仍低：本卡是配套，第一刀价走 `how-much-to-move.md`。

---

## 3. 动作表

```text
Stay Date:            <仅 Peak 夜，列出日期>
Restriction:          MinLOS=2（连续 Peak≥3 且 48h 仍过快再评 =3）
Shoulder:             Open；不设 MinLOS / CTA
Inventory:            高峰关公开可订 < 新地板 的低价；BAR 保持 Open
Price:                未最高 → 配套第一刀（+8–15% 或收到最低竞对，不跳最高）
                      已最高 → 只限不涨
Channel:              高峰拒打穿地板的 OTA 连住破价 / 预付深折（Hypothesis）
Do-not-do:
  - 整周/整段假期同一 MinLOS
  - 缺肩日就把 MinLOS 写成今天必做
  - 用关 BAR 代替 MinLOS
  - 「适当设连住」
```

**NV-RST-01：** 建议同时写「到达日」和「覆盖夜」，让用户按自己 PMS 落地。

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h 高峰 Pickup < 阈值低（300 间=3）或短住拒单升 | 解开该日新 MinLOS |
| 24h 3–7 | 守 =2 |
| 24h ≥8 且非一团、肩日开始动 | 守；价按第二刀规则 |
| 肩日仍 0、高峰将满 | 确认肩日 Open；可加连住包装，不把 MinLOS 延到肩日 |
| 竞对全开单晚且我们 Pickup 死 | 解开，价守原带 |
| 取消翻倍 | 停加严到 =3 |

---

## 5. Confidence

- 肩日齐 + overnight 旁证：方向 **Medium**。N 永远 Hypothesis。  
- 缺肩日 / 无 overnight：**Low**，只写 IF。  
- 建议 MinLOS=3：单独再降一档。

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。只盖 Peak，N=2 首选。 |
