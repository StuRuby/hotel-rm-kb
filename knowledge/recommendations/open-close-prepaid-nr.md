# Decision Card: Open / Close Prepaid NR

> 资产：Advisor Decision Card  
> 路径：`recommendations/open-close-prepaid-nr.md`  
> 对应：问题树 §10 · §14；P19  
> 剧本：`advisor-playbooks/prepaid-nonrefundable.md`  
> 状态：active · Scout 2026-08-20  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Open or close AP/NR; cap first-cut discount as Hypothesis not industry law
scenario: User asks prepaid discount / which dates to open; peak leakage
required_inputs:
  - stay dates + Peak/Pace/Pickup
  - flexible BAR vs current AP/NR
  - advance-day rule if any
  - cancel rate prepaid vs flex if any
signals_for:
  - weak_day_after_p02_exclusions
  - high_flex_cancel_want_lock
signals_against:
  - confirmed_peak_or_ahead_or_fast
  - price_already_highest
  - market_also_weak_wanting_deep_cut
recommended_action: Peak/Ahead 关深折或收到新地板（折≤3%）。弱日开 −3–5%（档 E），第一刀不超过 5%。禁止把博客 8–15% 当行业真理。全渠道对齐
risk: 高峰泄漏；折太深吞灵活价；折太浅没人订
follow_up: 24h 预付占比、是否打穿新地板、取消
confidence: 开关方向 Medium；X% Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户问「预付打几折、哪些天开」。主动词：**开 / 关 / 收到地板**。

---

## 2. 硬条件

命中任一 → **关**深折 AP/NR（或折 0～≤3%）：

1. 已证实 Peak / Pace Ahead / Pickup Fast  
2. 价已最高  
3. 店出后公开可订 < 新地板  
4. 市场也弱还想 −15%

弱日已过 P02 排除 → **开**，BAR×(0.95–0.97)，配额 ≤ 剩余 20–30%。

---

## 3. 动作表

```text
Stay Dates:
BAR:
AP/NR:     开 | 关 | 收到地板（折 ≤3%）
折:        第一刀 −3–5%；X≤5% 是 Hypothesis 不是行业标准
Do-not-do: 编「标准 9 折」；高峰用预付拉曝光；只改一个渠道
```

---

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。对齐档 E。 |
| 2026-08-23 06:17 CST | 交叉 P38：本卡是预付产品开/关。灵活窗何时收走 `tighten-cancel-before-cut.md`。浅预付仍 ≥ BAR×0.95，不是 dump。 |
> 交叉指针（2026-08-31 10:17，不改正文）：押金/预授权改尺 → **P86**。本卡仍是预付 NR 产品开/关。不写 P87。
