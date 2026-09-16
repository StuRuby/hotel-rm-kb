# Simulation｜2026 Occupancy-triggered Rate Strategy / PIE auto vs Public BAR Saturday（Simulation only）

> 路径：`cases/sim-2026-occ-auto-rate-strategy-sat.md`  
> 配：Diagnose 走 **P66** `advisor-playbooks/rms-rec-override.md`（系统输出≠定价权）；过程 + **P33** `restriction-overuse.md`（关档/LOS 是限制）+ **P64** `nested-rate-class.md`（关低≠涨 BAR）± **P37**（OCC 分母含 Sell Limits/OOO）± **P01/P05**；主卡 `dont-follow-rms-dump.md`  
> 短例仍在 P66 / S04-22 / T05-00 skip；本卷 = callable 专卷（**C05-02**）  
> **≠** `sim-2026-rms-dump-sat.md`（那是「RMS 建议卖价 399」；本卷是「OCC 触发自动关档 / 自动 ±日价」）  
> **全部数字 Simulation only，不是某家真实酒店**  
> **T05-00 Rate Strategy deepen 已 skip** — 本卷不开新理论卡、不开 **P88**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- Occupancy-triggered 层：Rate Strategy 按 OCC% / Times Sold 自动 **Close Discount 类**；或 Occupancy Based Pricing / PIE 按 OCC **自动 ±日价**（OPERA Rate Strategies / OBP / Rate Strategy Setup / Cloudbeds PIE occupancy·Rules 语义层；**Simulation — NOT Fact**；不是本店规则名、不是华住默认、不是推荐 BAR）
- 销售/GM 拟议 BAR→**399**（**REJECTED dump**）因为「OCC 到 65% 系统关了折扣档所以砍 / PIE 自动降了 5% 所以新尺就是它 / 策略按 Sell Limit 算 OCC 满了要涨 / 系统已经动了所以公开也跟」
- 用户原话（**NOT Fact**；本店 Rate Strategy 名 / 华住 OCC 自动规则 SOP / 默认阈值% / 自动降幅% / 699 Fact / Walk $ / 佣金% / Vendor China Fact = **NV**）：
  - 「OCC 到了，系统把折扣档关了，需求死了，先砍到 399」
  - 「PIE 自动降了 5%，今晚新尺就是它」
  - 「策略按 Sell Limit 算 OCC 已经满了，要跟涨 / 跟砍」
  - 「系统已经动了，别跟系统对着干，公开 BAR 也改」
  - 「自动规则写了 399，那就是市场价」

## Advise（期望）

1. 先拆三把尺：定价尺是 **公开灵活 BAR 799**；闸/调度是 **OCC-triggered Rate Strategy / PIE auto**（关档·LOS 限制 或 日价 ±amount）；过程输入是 **Pace · Remaining · Manual vs Auto · 是否可 revert · OCC% 分母** → **P66 / P33 / P64**（分母含 OOO/切房 → **P37**）。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. Auto rule = 自动化限制或日价调度层，**不是**需求曲线，也**不是**永久公开 BAR Type。关档 ≠ 砍尺；自动降 ≠ 新 BAR；假 OCC（含 Sell Limits/OOO）≠ 真高峰。
4. **拒绝** BAR→399（系统关了所以砍 / 自动降了所以新尺 / 策略已动所以跟 / 自动输出当地板）。
5. 系统输出/自动规则 → **P66**；关档/LOS → **P33**；嵌套低档关开 → **P64**；假分母 → **P37**；真 Ahead → **P01** Hold；真 Behind leftover → **P05/P02**（理由写 Pace，仍不把 auto 输出写成新 BAR；禁一夜 −15%）；预算压力 → **T20/P56**；早会一个动作 → **P45**。
6. **不发明 699**。不编华住 Rate Strategy·OCC 自动规则 SOP / 默认阈值% / 自动降幅% / Walk $ / 佣金% / Vendor China Fact。不把 Vendor 例（OCC 65% / Times Sold=3 / ±$2–10 / −5% / +10%）当中国常模。
7. 早会一个动作：纠正「OCC 自动关档/自动±价 ≠ 公开 BAR」+ Hold 公开 BAR；先问 Manual/Auto、revert、OCC 分母。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住 Rate Strategy·OCC 自动规则 SOP、默认阈值%、自动降幅%、699 Fact、Walk $、佣金%、Vendor China Fact
- 把 OPERA/Cloudbeds Vendor 阈值/%/$ 例写入本仿真当市场 Fact / 中国店规
- 开 **P88** / **P89** / 新理论 slug（T05-00 已 skip）
- 把 399 写成推荐 BAR
- 发明 699
- 把本卷叫成 **T-Window / T-Restriction / T-Hurdle / T-Floor / T-Rack 核心**（本卷核心是系统自动化输出 ≠ 公开尺）
- 把 P66 / P33 / P64 / P37 / P01 / P05 当本店 auto 改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（OCC-auto / Rate Strategy 改尺）
- 799 = Hypothesis / Simulation 首选 Hold
- 699 = **禁止发明**（不是 Fact）

---

## Simulation｜顾问十段（compact；全部 Simulation）

> 不是真店。价格落点：**Hold 779–799 首选 799**；**拒绝 399**；**不发明 699**。

### 1. Situation

周六，180 间城市商务店（Simulation）。Remaining 14，Pace Ahead，公开灵活 BAR 799。OCC-triggered 层像「Rate Strategy 按 OCC% 关 Discount 类」或「PIE/OBP 按 OCC 自动 ±日价」（Simulation 闸/调度层，不是 Fact）。销售/GM 把自动输出喊成尺：系统关了折扣档所以砍到 399、PIE 自动降了所以新尺、策略按假 OCC 满了要动尺、系统已经动了所以公开也跟。本店 Rate Strategy 名 / 华住 OCC 自动规则 SOP / 默认阈值% / 自动降幅% = **NV，不编**。

### 2. Diagnosis

**P66**（过程 + **P33** + **P64** ± **P37** ± **P01/P05**）。三把尺：公开 BAR 799 ≠ OCC-triggered auto（关档/日价调度）≠ Pace·Remaining·Manual/Auto·revert·OCC 分母。Auto = 「什么时候关码/加减日价」，不是 BAR Type。先拆：写的是限制还是日价、是否可回退、OCC% 是否含 Sell Limits/OOO/blocked。形 A 改尺 399 + 形 C「别跟系统对着干」当改尺令（禁）。Ahead 夜：自动输出不被允许改永久公开 BAR。**≠ T-Window ≠ T-Restriction ≠ T-Hurdle ≠ T-Floor ≠ T-Rack。** T05-00 deepen **已 skip**（无新轴）。

### 3. Opportunity / Risk

机会：拆尺后高峰仍 Hold 公开灵活；误关低档可按意图重开/override（P33/P64），不必砍尺；假 OCC 先修分母（P37）。风险：把「系统关了」训练成新 BAR；把自动降幅写成永久公开尺；把含 Sell Limits/OOO 的假高峰当地板或涨令；一夜 −15%。

### 4. Recommended Action

```text
Public BAR: Hold 779–799；Preferred 799（Simulation）
OCC-auto / Rate Strategy layer: stay as restriction or daily-amount scheduler · verify Manual vs Auto · counter/revert · OCC% components
If mis-set: loosen/override restriction (P33) ± reopen nested low (P64) ± fix denominator (P37)；do NOT cut BAR
Reject: BAR→399
Do-not-do: 华住 Rate Strategy·OCC 自动规则 SOP；默认阈值%；自动降幅%；699 Fact；Vendor China Fact；一夜 −15%；P88
Misroute: 真 Ahead → P01 Hold；真 Behind → P05/P02（理由 Pace）；预算 → T20/P56；早会 → P45；RMS 建议卖价孪生 → 同 P66（见 sim-2026-rms-dump-sat.md）
```

### 5. Why

OPERA Rate Strategies：按 OCC% / Times Sold 自动 **set rate restrictions**（Close/Open/LOS）；可 Consider Sell Limits / OOO 进 OCC%；后台可持续、可 override 手工限制 — **自动关档 ≠ 公开灵活 BAR rewrite**。OPERA Occupancy Based Pricing + Rate Strategy Setup：可按 OCC **increase/decrease rate amounts**、可有 counter 回开 — **金额调度 ≠ 永久公开尺**；Vendor $ 例 NOT China Fact。Cloudbeds PIE occupancy-based：manual confirm 或 automatically apply；OCC 回落可 **revert** — **自动改价权限 ≠ 必须写成新 BAR**；预载 ±10%/−5% NOT China Fact。PIE Restriction-based：只放松、**never set closed** → 加强 P33。Pace Ahead + remaining 14 = 需求仍紧，不是 auto dump 许可证。**不发明 699。**

### 6. Expected Impact

保住公开灵活 ADR 方向（Hypothesis / Simulation）；避免把 OCC-auto 输出永久化成 399；闸/调度留闸。不伪造增收、不代改 Rate Strategy、不发明 699。

### 7. Risk

若对象其实是 RMS **建议卖价** dump → 同 **P66**（孪生卷 `sim-2026-rms-dump-sat.md`）。若住期限制误挡 → **T-Restriction/P33**。若 hurdle/LRV 当地板 → **P85/T-Hurdle**。若嵌套低档忘关 → **P64**。若真 Behind 且规则正常 → **P05/P02**（仍不把 auto 输出写成新 BAR；禁一夜 −15%）。本店规则名 / 华住 SOP / 阈值% / 降幅% 仍 NV；顾问不编。

### 8. What To Watch

公开 BAR 是否仍 Hold 779–799（首选 799）；规则是 Manual 还是 Auto；是否有 counter/revert；OCC% 是否含 Sell Limits/OOO/blocked；自动关档/降价后 24h Pickup；是否误把日价覆盖写成门市/BAR 永久改写；是否误入 T-Window / T-Hurdle / P05。

### 9. Re-evaluation Trigger

- 仍 Ahead / remaining 仍紧 → 继续 Hold 公开 BAR；auto 不当改尺令。
- 确认误关低档 → **P33/P64** 松/重开（± **P37**）；BAR 仍 Hold。
- 自动降后 Pace 仍 Ahead → 继续 Hold；可评估 override/revert 日价覆盖（不把 399 当新 BAR）。
- 真 Behind 且规则正常 → **P05/P02**（理由写 Pace；仍不从 auto 改写 BAR；禁一夜 −15%）。
- 预算月末压力 → **T20/P56**，不是 auto 改尺许可证。

### 10. Confidence

方向 Medium（能拆 auto 调度 vs 公开 + Pace Ahead + 「系统输出≠定价权」）。点规则名 / 华住 SOP / 阈值% / 降幅% Low（NV）。Evidence A Vendor OPERA Rate Strategies + OBP + Rate Strategy Setup + Cloudbeds PIE occupancy / Rules（§137；本小时 curl 复核）。799 / 399 仅为 Simulation / Hypothesis；699 永不作 Fact。

## Rejected action

**Do not set BAR to 399.** 推荐是 Hold 779–799，首选 799。399 = 被拒绝的 OCC-auto / Rate Strategy dump，不是推荐 BAR。**Do not invent 699.**

> 交叉：P66 主过程 + P33/P64/P37；孪生 RMS 建议卖价卷 `cases/sim-2026-rms-dump-sat.md`。**T05-00 deepen 已 skip — 不开新理论卡。不开 P88。不规定 P89。** 14/399/799 Simulation only。不发明 699。

> 指针（2026-09-05 02:17 C05-02，不改正文）：§138 CASE 指针复述 §137。Diagnose 走 **P66**，过程 + **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699 **不改**。不开 P88。不开 P89。

> 交叉指针（2026-09-05 04:17 R05-04，不改正文三句 / 399 / 799）：§139 新开 Clock Occupancy Adaptable Rates（OCC 阶梯自动换价 + manual price priority ≠ 公开灵活 BAR rewrite）+ Protel OCC% Close 用途升核。Diagnose 仍 **P66**；过程仍 **P33** + **P64**（± **P37** ± **P01/P05**）；Hold 779–799 首选 799；拒 399；不发明 699。T05-00 deepen **已 skip**。不开 P88。不开 P89。
