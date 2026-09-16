# Decision Card: Shoulder Open for Peak（肩日开着为高峰拼连住）

> 资产：Advisor Decision Card  
> 路径：`recommendations/shoulder-open-for-peak.md`  
> 对应：问题树 O8/O10 · §16  
> 剧本：P21 `holiday-minlos.md` · P22 `exhibition-shoulder.md` · P06/P07  
> 理论：`pricing/los-optimization.md`  
> 配套：`minlos-peak-protect.md`（管 Peak 上 MinLOS）；本卡管 **肩日开/关与包装**  
> 状态：active · Wave7  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Keep shoulder dates Open and package them to peak; do not dump or lock them
scenario: Confirmed peak with weaker −1/+1；user asks 肩日怎么办 / 会展前后两天
required_inputs:
  - peak_dates + shoulder_dates
  - OTB / Pickup / Remaining 按日（Peak 与 ±1）
  - overnight_or_setup_teardown_plausible
  - current BAR and restrictions
signals_for:
  - peak_corroborated
  - shoulder_otb_clearly_below_peak
  - shoulder_still_bookable
signals_against:
  - no_shoulder_data
  - shoulder_already_ahead_or_hot
  - venue_far_no_overnight
  - market_also_weak_whole_week
recommended_action: 肩日 Open，不设 MinLOS/CTA；可用 −3–5% 连住包装且套均价不打穿 Peak 地板；Peak 才 MinLOS=2。禁止肩日当垃圾日砸价或挂 Peak 价
risk: 肩日其实是第二高峰却没涨；独限 Peak 被掏空；包装打穿地板
follow_up: 24/48h 肩日 Pickup；是否被 MinLOS 带动
confidence: 肩日数据齐则方向 Medium；无数据 Low 只写 IF
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户问「会展周三高峰，周二周四怎么办」或节日 ±1。  
Peak 限制走 `minlos-peak-protect.md`。本卡回答肩日 **开还是关、跟不跟涨、报不报促销**。

---

## 2. 肩日默认

```
开：主 BAR、主渠道
不开：MinLOS / CTA / 按高峰关低价层
价：不暴涨、不砸。IF 肩日自己 Ahead THEN 半档或收到最低竞对
   ELSE Hold + 连住包装（档 E −3–5%）
包装：套均价 ≥ Peak 新地板与肩日守价加权的 0.97；禁止打穿 Peak 地板
促销：只报肩日须能按日筛且折扣浅或平台出；否则不报（join-or-skip）
```

**不要用：** 肩日未知（不把 MinLOS 延过来）；overnight 不成立（退出事件）；肩日已热（改半档，当第二高峰苗头）；整周弱（P02，不套事件肩日）。

---

## 3. 动作表

```text
Peak:                 MinLOS=2（肩日齐时）；关 < 新地板；第一刀按事件/Ahead 尺
Shoulder −1 / +1:
  Restriction:        Open
  Price:              Hold 或半档；首选写数字；不挂 Peak 价
  Inventory:          主渠道开
  Promo:              默认不报深折；浅围栏可
Do-not-do:
  - 肩日当垃圾日一夜 −15%
  - 肩日一并 MinLOS
  - 无距离按 citywide 涨肩日
  - 「适当调整肩日」
```

会展：前 1 = 布展到达，后 1 = 撤展延住。开展日第一刀见 P22 / 事件卡。

---

## 4. Trigger

| 事件 | 动作 |
| --- | --- |
| 肩日 24h 仍 0 | 确认 Open；加包装；不延 MinLOS |
| 肩日 Fast | 改半档；关肩日大促 |
| Peak Pickup 死且独限 | 解 Peak MinLOS（MinLOS 卡） |
| 展/演出取消 | 肩日立刻回平日带 |

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。肩日 Open + 包装；Peak 才限。 |
