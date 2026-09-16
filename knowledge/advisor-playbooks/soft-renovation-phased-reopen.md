# Playbook P70｜装修 / 分阶段施工 / 软重开（装修不是砍公开 BAR 的许可证）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/soft-renovation-phased-reopen.md`  
> BACKLOG：P70 装修 / 分阶段施工 / 软重开 · HIGH · 先诊断枝（本轮同开）· slug **soft-renovation-phased-reopen**  
> 状态：**drafted**（2026-08-28 18:17 CST）  
> 配套卡：`recommendations/dont-dump-bar-for-renovation.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/renovation-sellable-vs-pace.md`（可售 remaining vs Pace；**无默认装修折扣 %**；本店 PIP/华住装修 SOP NV）  
> 理论：OPERA OOO 从库存扣减 · Soft Discount Trap（软开/软重开）· Dual-Inventory（已翻新 vs Legacy）  
> 交叉：P37 泛维修 OOO 分母 ≠ 本剧「因为装修所以 dump」· P68 对面新店 intro ≠ 自己装修/软重开 · P39 施工差评不要砍 BAR 换量 · P05 真弱 leftover · P01 Ahead Hold · P15 满房溢出 · P63 人手产能  
> 问题树：§77 「装修/软重开不是砍 BAR」  
> 仿真：`cases/sim-2026-renovation-ooo-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Managing Out of Order：OOO 从可售库存扣减，不可分配 — §62）；C 实践（Taktikon Soft Openings 2026-02-23：Avoid Soft Discount Trap；价值加层优于砍价 — §59 指针 + 本轮复用）；C 实践（Sara Hospitality 2026-03-13：Dual-Inventory Pricing — 已翻新 Premium / Legacy 可选折扣；整店公开 BAR 不因施工区默认地板 — §62；WordPress 博客，不当 S/A）  
> Last Verified：2026-08-28  
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆可售 vs 装修 OOO、Hold 公开 BAR、拒绝「装修所以 399」、可选双库存/价值补偿；**不操作** PMS / 房态 / OTA 文案，不自动定价，不代排施工楼层。  
> 禁止：发明华住装修 SOP、默认装修折扣 %、佣金%、699；一夜 −15%；BAR→399「装修期冲量」；把 14/399/799 当市场 Fact；开 P71；把泛维修分母误入当本剧主刀（误入 P37）；把对面开业 intro 当本剧（误入 P68）。  
> 16:17「不要规定 P70」= theory 槽不得指定；本案例槽核实装修/软重开缺口后开。

---

## 0. 一句话

**装修 / 分阶段施工 / 软重开不是砍公开 BAR 的许可证。** 先问：今晚定价用的是 **可售 remaining**，还是被 OOO 装修楼层胀大的假空房？高峰 / Pace Ahead（相对可售）：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「半边在装修 OCC 看起来低」「软重开所以先 399」「施工噪音所以全店地板」把 BAR dump 到 399。可选：**已翻新房 Premium / Legacy 围栏折扣 / 价值补偿（餐券等）**，不等于改永久公开 BAR。对面新店 intro → **P68**。纯维修分母误读 → **P37**。本店 PIP / 华住装修 SOP = **NV，不编**。

完成定义：一张「先拆可售 vs 装修 OOO → Ahead Hold BAR → 拒装修 dump → 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 装修假弱 / OCC 低所以 dump** | 「半边装修，空着多，砍到 399」 | 可售被 OOO 缩了；假剩余 | **重算可售**；Ahead → Hold；不 dump |
| **B 软重开 / 刚翻完所以 399** | 「产品还新/还吵，先地板锚市场」 | Soft Discount Trap | **拒绝 BAR→399**；控量 + 价值加层 |
| **C 邻楼噪音所以全店地板** | 「客人会抱怨，全店先降」 | 局部干扰当全局弱需求 | **披露 + 邻房硬挡 / 价值补偿**；不改全店 BAR |
| **D 双库存误读** | 「翻新房也跟 Legacy 399」或「Legacy 贵到翻新价」 | 产品档位混尺 | **翻新 Premium / Legacy 可选围栏**；399 不当永久 BAR |
| **E 真弱 leftover（可售）** | 「可售仍厚且 Pace Behind」 | 需求弱 | **P05**；仍禁一夜 −15%；仍禁装修借口 399 |
| **F 误入邻剧** | 对面新开 / 泛维修分母 / 差评砍价 | 对象不同 | **P68 / P37 / P39** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问今晚可售 remaining（扣装修 OOO 后），不要拿物理空房当弱需求。本店 PIP / 华住装修 SOP = **NV**，不编。
2. 高峰 / Ahead（相对可售）：公开 BAR Hold 779–799 首选 799。不要 BAR→399「装修期冲量 / 软重开地板」。
3. 局部噪音 → 披露 + 挡邻房 / 价值补偿，不改全店 BAR。对面开业 → P68。泛维修分母 → P37。真弱 → P05。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead on sellable）。禁止一夜 −15%。禁止 BAR→399。**无默认装修折扣 %、无「施工期必须 −X%」**。Sara 例示 70% OCC / Dual-Inventory **不**进本库中国 Fact 常模。本店 PIP 节奏 / 装修折扣 = **NV**。

Vendor / 实践指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Managing Out of Order Rooms*（A Vendor，§62）：OOO 从可售库存扣减，不可分配预订。**装修楼层进 OOO = 缩供给，不是「需求死了」。**
- Taktikon *Revenue Management in Soft Openings*（C，2026-02-23；§59 指针）：Avoid Soft Discount Trap；控量 + 价值加层优于砍价；首发 ADR 会锚市场。**软重开同向，不当中国集团 SOP。**
- Sara Hospitality *Hotel Renovation While Open*（C，2026-03-13；§62）：Dual-Inventory（Newly Renovated Premium / Legacy Discounted）；邻区硬挡 + 披露。**WordPress 实践文；70%/例示店型不进 Fact。**

本店 PIP / 华住装修字段 / 默认装修折扣 % / 佣金% = **全部 NV**。

---

## 1. Situation

钉 **三件事**：①装修 OOO 扣了多少可售；②拟议是「改尺 / dump」还是「双库存 / 价值补偿」；③Pace / Remaining **相对可售**，不是相对物理总房。

先问（缺则标 NV，不停）：

- Stay Date、DOW；物理总房；装修 / PIP OOO 间数；**可售 remaining**
- Pace（Ahead / On / Behind）相对可售
- 当前公开 BAR；拟议是否 BAR→399 / 「软重开地板」
- 是否分已翻新 / Legacy 两档（有则问，不编）
- 噪音邻房是否已硬挡 / 预订披露是否做了（NV 不编）
- 用户原话：「半边装修要不要砍」「软重开先 399」「施工期 OCC 低所以 dump」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 物理空 vs 可售 remaining（扣装修 OOO）？ | 混用 → 形 A |
| D2 | 拟议 BAR→399 / 软重开地板？ | 形 B；拒绝 |
| D3 | 局部噪音当全店弱需求？ | 形 C |
| D4 | 翻新/Legacy 混尺？ | 形 D |
| D5 | Pace/Remaining 相对可售？ | Ahead → Hold |
| D6 | 对面新店 intro？泛维修分母？差评砍价？ | → P68 / P37 / P39 |
| D7 | 真弱 leftover（可售厚 + Behind）？ | → P05 |

## 3. Decision Tree（过程）

```text
GM/销售：「装修期砍价 / 软重开 399 / OCC 低因为施工」
  → 先问：可售 remaining（扣装修 OOO）？（D1）
       拿物理空当弱 → 形 A：重算可售；Ahead Hold
  → 拟议 BAR→399 / 软重开地板？（D2）
       是 → 形 B：拒绝；控量 + 价值加层（金额 NV）
  → 局部噪音？（D3）→ 披露 + 邻房硬挡 / 补偿；不改全店 BAR
  → 双库存？（D4）→ 翻新 Premium；Legacy 可选围栏；399 不当永久 BAR
  → 对面开业 / 泛维修 / 差评？→ P68 / P37 / P39
  → Pace/Remaining 相对可售？（D5）
       Ahead / On → Hold 779–799 首选 799
       Behind + 可售厚 → P05；禁一夜 −15%；仍禁装修借口 399
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            公开灵活主型（用户给）；若有翻新档则分开报
Rate / Rate Plan:     公开灵活 BAR（当前）
Current Value:        用户值（sim 常为 799）
Recommended Range:    Hold 779–799（公开 BAR 不动）
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     确认装修楼层 OOO；邻噪房硬挡（用户执行）；不把 OOO 当 dump 燃料
Restriction Action:   可选控量（软重开少开渠道）；本剧不是 MinLOS 专剧
Channel Action:       不把 Brand.com dump 到 399「装修冲量」；预订披露施工（文案用户写）
Staging:              第一刀 = 重算可售 + Ahead Hold BAR。24h 看可售 Pickup
Do-not-do:
  - BAR → 399「装修期 / 软重开地板」
  - 一夜 −15%
  - 编华住装修 SOP / 默认装修折扣 % / 佣金% / 699
  - 顾问代操作 PMS 房态 / OTA 文案
  - 开 P71
```

真实酒店若当前 BAR 不在该带，保留 **装修≠弱需求 + Hold 公开 BAR** 方向，不把 779–799 当市场 Fact。

## 5. Why

1. OPERA：OOO 直接从可售库存扣减 → 装修楼层是**供给收缩**，不是需求死亡证明。
2. Soft Discount Trap：软开/软重开地板会锚死市场，抬价比控量难。
3. Dual-Inventory：产品已分档时，用档位价差吸收「未翻新」；不要把整店 BAR 写成装修地板。
4. 顾问十段要求落到日期/价格：本剧日期 = 用户 Stay Date；价 = Hold 当前公开 BAR 带（相对可售）。

## 6. Expected Impact

- Ahead 可售夜：不因施工假空 dump，尾房仍按公开 BAR 卖。
- 口径：早会先报「可售 remaining / 装修 OOO」，再谈价。
- 真弱夜：P05 仍有出口，不把剧本写成死守。

点估计 NV。不编「装修该打几折」。

## 7. Risk

- 本店未把装修房正确 OOO → 先纠房态（用户执行），仍不因此 dump。
- 差评因施工爆发 → P39：不砍 BAR 换量；加强披露/补偿。
- 软重开控量过度 → 观察 Pickup，不是立刻 399。
- 弱夜借口「装修冲量」→ 仍禁 399 与一夜 −15%。

## 8. What To Watch

| 观察 | 窗 | 用来 | 缺则 |
| --- | --- | --- | --- |
| 可售 remaining（扣装修 OOO） | 当日 | 假空是否被纠正 | 用户 |
| 公开 BAR 是否仍 Hold | 当日 | 有没有被改成 399 | 用户 |
| 1D Pickup（可售） | 24h | 是不是真弱 | 用户 |
| 邻噪房是否硬挡 / 披露 | 当日 | 形 C | 用户 |
| 翻新 vs Legacy 挂牌 | 当日 | 形 D | NV |

## 9. Re-evaluation Trigger

- 对面新店 intro → **P68**
- 泛维修 / 分母口径（无装修故事）→ **P37**
- 点评因施工下滑要砍价 → **P39**
- Pace 转真 Behind + 可售厚 → **P05**；仍禁 399 与一夜 −15%
- 人手翻房顶 → **P63**
- 用户给出本店 PIP/集团装修价政策 → 引用原文，仍不代操作

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店 PIP / 华住装修 SOP / 默认折扣 % 全部 NV；799/399 是 Hypothesis/Simulation；Sara/Taktikon 为 C 实践。
为什么不是 Low：OPERA OOO 扣库存与「供给收缩≠需求死」同向；Soft Discount Trap 与 P68 软开锚价同族；第一刀（Hold 可售 BAR）可逆。
因此怎么用：先重算可售；Ahead Hold；不 399；局部补偿不改全店 BAR。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-renovation-ooo-sat.md`：物理 180、装修 OOO **40**、可售 **140**、周六 Pace **Ahead**、可售 Remaining **14**、公开 BAR **799**；销售要「装修期冲量」砍到 **399**，或「软重开地板」→ **Hold 779–799 首选 799**；不要 dump 到 399。14/40/140/399/799 **Simulation only**。399 = **被拒绝的 dump**。799 = Hypothesis/Simulation。

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 18:17 CST | 首版。P70。装修/软重开≠砍 BAR；Ahead Hold；拒 399。16:17 不规定 → 本案例核实后开。未开 P71。 |
