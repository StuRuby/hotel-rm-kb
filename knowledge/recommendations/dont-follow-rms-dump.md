# Decision Card: Don't Follow RMS Dump（系统建议不是定价权；Ahead 不跟 dump；不 dump 399）

> 资产：Advisor Decision Card（P66）
> 路径：`recommendations/dont-follow-rms-dump.md`
> 对应：问题树 §73；用户原话「系统建议今晚 399 要不要跟」「别跟系统对着干」「IDeaS 降了我们也要降」「系统不让降但卖不动」
> 剧本：`advisor-playbooks/rms-rec-override.md`
> 配套：`metrics/rms-vs-pace.md` · P17 · P05 · P56 · T20 · P01 · P43 · P60 · P64 · P45
> 状态：active · 2026-08-28 02:17 CST
> 知识类型：Best Practice / Hypothesis
> 证据等级：B（动作）；A 协会（HSMAI Dos/Don'ts：不要全盘接受；无正当理由不 override — §54）；A Vendor（IDeaS G3 Pricing Overrides 是能力 — §54）
> Last Verified：2026-08-28
> 仿真：`cases/sim-2026-rms-dump-sat.md`
> Advisor-First：建议先用 Pace 核 RMS 建议；Ahead 不跟 dump；真弱走 P05 理由写 Pace；问本店 RMS（NV）；不操作 RMS/PMS/OTA。
> 禁止：Ahead 跟系统 399；BAR→399；一夜 −15%；编华住会 SOP / 默认 override % / 佣金% / 699；把 HSMAI 80:20 写店规；开 P67。

## 三句（原样）

1. RMS 建议的价是**输入，不是定价权**。先问 Pace / Remaining / 事件是否同意这晚该 dump。本店 RMS / 华住会字段 = **NV**，不编。
2. 高峰 / Pace Ahead：默认**不跟系统 dump**。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「系统说卖不满」把 BAR 砍到 399。
3. 真弱才走 P05，理由写 Pace，不写「系统说了」。没有正当理由也不要乱改系统价。预测错了先改判断（P17）。有声明底走 T20。不要 BAR→399。

```yaml
decision: Do not treat RMS recommended rate as pricing authority; on Ahead nights do not follow a system dump; Hold current 779–799 prefer 799; true Behind leftover uses P05 with Pace as the reason; never dump BAR to 399 because the system said so; flag property RMS / auto-push as NV
scenario: RMS (IDeaS / Duetto / 华住会 / unnamed) recommends a deep cut on an Ahead Saturday, or holds high on a true weak night; GM says follow the system or fight it without Pace
required_inputs:
  - Stay_Date
  - rms_recommended_rate_vs_current_BAR
  - remaining_and_pace
  - property_RMS_name_and_auto_push（缺则 NV）
  - stated_brand_floor_if_any
signals_for:
  - RMS_dump_on_Pace_Ahead_thin_remaining
  - proposal_to_match_system_399
  - hook_line_sinker_follow_without_Pace_check
  - output_override_with_no_event_no_data_reason
signals_against:
  - true_weak_Behind_thick_remaining (then P05 — reason Pace, not fight-the-system)
  - forecast_assumption_wrong (then P17 first)
  - month_end_budget_cover (then P56)
  - live_low_is_mapping_error (then P60)
recommended_action: 先核 Pace 是否同意 RMS 建议。Ahead 不跟 dump；Hold 779–799 首选 799。Never BAR→399。Never −15%。真弱 → P05 理由写 Pace。无理由不乱改。问本店 RMS（NV）。14/399/799 只 Simulation。399 = 被拒绝的 RMS dump。
risk: 把黑盒写成公开锚；无理由乱改破坏学习；真弱死守系统高价；与 P17/P56 混
follow_up: 公开 BAR 是否仍 Hold；是否被自动推成 dump；24h Pickup；override 是否有书面理由
confidence: 有日期+建议价+Pace 则方向 Medium；缺 RMS 名只条件化 = Low–Medium
evidence_level: B
last_verified: 2026-08-28
```

---

## 1. 何时用

「系统建议今晚 399 要不要跟」「别跟系统对着干」「IDeaS 降了我们也要降」「系统不让降但卖不动」。

主动词：**不跟 Ahead dump** / **Hold 公开 BAR** / **真弱走 P05** / **拒绝 399** / **问 RMS NV** / **无理由不乱改**。  
不要用：预测假设错了却只改今夜 BAR——移交 **P17**。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要把 RMS 建议当今夜定价权，也不要用 399 dump 对齐系统**。  
月末走 P56。声明底走 T20。真弱走形 B / P05。

---

## 2. 硬门（先不跟 dump、不乱改）

命中任一 → **不要把 BAR 改成 RMS dump，也不要无理由乱改系统价**：

1. Pace Ahead / 仍紧 + RMS 建议明显低于当前 BAR → **Hold 779–799 首选 799**；不跟 dump  
2. 有人提议 BAR→399「系统说卖不满」→ **拒绝**  
3. 「系统说了就跟」无 Pace 核 → **拒绝**（HSMAI Don't #6）  
4. 无事件/无脏数据/无战略例外的 output override → **拒绝**（HSMAI Don't #1）  
5. 一夜 −15% → **拒绝**  
6. 预测假设错 → **P17**，不是本卡跟 dump 枝

真 Behind + remaining 厚 → 才走 **P05** 有界围栏；理由写 Pace，不写「跟系统对着干赢了」。

---

## 3. 动作表

```text
Ahead + RMS dump 399     → 不跟；Hold 779–799 首选 799
Behind + RMS 仍高        → P05 围栏；理由 Pace；能改输入先 P17
系统说了就跟             → 拒绝全盘接受
没理由先砍/先涨          → 拒绝；要改先写理由
穿声明底                 → T20；不破底
月末用 RMS 当刀          → P56
口头/错价污染建议        → P43 / P60
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 02:17 CST | 首版。P66 主卡。Ahead 不跟 RMS dump；真弱 P05；拒 399。 |
