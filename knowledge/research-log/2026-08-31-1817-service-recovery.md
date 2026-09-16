# Research log｜2026-08-31 18:17 CST · CASE C31-18 P87 Service Recovery / Folio Adjustment vs 公开 BAR

> 槽：Hour 18 = **CASE**。Wave **C31-18**。ID **P87**。slug `service-recovery-adjustment-vs-bar`。  
> 根：`/home/box/revenue-management/`。Advisor-First：不操作 PMS/RMS/OTA，不自动定价。  
> 上一槽 16:17 T-Deposit 写「不规定 P87」= theory 不得指定；本案例槽独立核实 HIGH 缺口后开 = **槽序**。  
> **不 git commit / merge / push / publish。** 不规定 P88。不重写 P01–P86 / T-Deposit / T-Hurdle / T-Stored / T-Wholesale / T-Fee / T-Live / T-Corp / optimization-advise 正文（邻卡 last-line only）。

## 决策：开 P87（HIGH）

四件套本小时核实：

1. **Filename scan：** `advisor-playbooks/` 无 `*service-recovery*` / `*allowance-adjust*` / `*compensat*` 专剧。P87 文件开写前不存在。
2. **邻不覆盖本 PROCESS：** P39 = 点评 SIGNAL，不要为 4.8→4.3 砍 BAR；P75 = BRG like-for-like 已订直销索赔；P47 = 计划 Comp / House Use；P84 = 取消/attrition FEE 过账；P83 = 储值付款；P86 = 押金/预授权 hold。本剧 = **本住 folio Service Recovery / posting adjustment / rebate ≠ 公开灵活 BAR**。
3. **每周中文改尺戏剧：** 「客人投诉补了差价，BAR 改成那个价」「服务失败今晚全部 dump」「补偿券 399 所以公开也 399」「ADR 被减免看脏所以砍 BAR」。
4. **A 级源本小时打开**（见下；HTTP 方法 + 状态已记）。

优先级保持 **HIGH**（OPERA 专用 Service Recovery Adjustment 路径 + 每周 GM dump；不薄于 P39）。不开 Pet/AAA、smoking/damage FEE、damage/security deposit（parked / 邻覆盖）。

## 源（本小时实际打开；不发明额外核页 URL）

| 源 | 方法 | HTTP | 用途 |
| --- | --- | --- | --- |
| Oracle OPERA Cloud 26.2 *Charges Adjustment and Payments* | WebFetch | **200** | 新开。Billing post/edit/split/transfer/adjust。Post Adjustments 固定额或 %。**Posting Service Recovery Adjustment Charges** 专节："post and track adjustments related to service recovery versus other non-service recovery related adjustments." Amount/%；Department；Reason。Allow Negative Postings / negative Price or Quantity = rebate；Supplement mandatory for negative。Manually posting rate code charges does NOT change reservation rate/room type/persons。**Service Recovery Adjustment ≠ BAR Type。** Vendor $ breakfast 10.00 / 63.60 **NOT China Fact / 不进 sim。** |
| Oracle OPERA Cloud 26.2 *About Billing* | WebFetch | **200** | 新开。Adjust by amounts or percentages + reason codes。Allow Negative Postings = negative (rebate) charges。**Folio adjust/rebate ≠ public flexible BAR。** |
| Oracle OPERA Cloud 26.2 *Configuring Adjustment Reason Codes* | WebFetch | **200** | 新开。Examples: duplicate charge, error, overcharge, manager’s discretion。Code Type **Service Recovery**: "Indicates resolution of an issue with a dissatisfied guest." Related: Posting Service Recovery Adjustment Charges。**Adjustment Reason / Service Recovery type ≠ BAR Type。** |
| Cloudbeds *Add or adjust reservation charges* | curl `-sL -A Mozilla --max-time 25` | **200**（WebFetch 未走 CF 路径；任务提示 CF 时用 curl；本小时 curl 直达 200，size 90954） | 新开第二家 Vendor。Adjustment = discount or correct reservation price shown in folio/invoice；subtracts from guest debit/charge；separate transaction type；does not subtract from payment（refund 才动付款）。**Folio adjustment ≠ public BAR rewrite。** |
| CoStar STR *Historical Benchmarking Data Reporting Guidelines* | WebFetch | **200** | **升核** allowances 用途（§15/§96 已在库，不当新发现页）。"Rooms Revenue reported to STR should be net of rebates, refunds, allowances, overcharges and taxes." Service-related refunds = reduction to Rooms Revenue。**Accounting net-of-allowance = ADR READ，不是 rewrite-BAR。** |
| HSMAI Academy *BAR* glossary | WebFetch | **200** | §67 指针，不当新发现。BAR = non-qualified, publicly available。Service-recovery folio adjustment ≠ BAR。 |

未发明额外核页。未发明 Mews。Apaleo credit note 未走（Cloudbeds curl 200，第二家已满，bonus 非 blocker）。未发明华住补偿 SOP、默认补偿 %、699、Walk $、STR gift-card/live-deposit Rooms 桶。

## Simulation 声明

180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hold preferred Hypothesis。无默认补偿 %。不把 OPERA Vendor $ 例当中国 Fact。

## 资产

- `advisor-playbooks/service-recovery-adjustment-vs-bar.md` drafted
- `recommendations/dont-rewrite-bar-for-service-recovery.md` active
- `metrics/service-recovery-vs-public-bar.md` drafted
- `cases/sim-2026-service-recovery-sat.md` Simulation
- 问题树 §94 新枝；§93 文末一行 leftover → P87
- 源表 §98
- progress C31-18；README §8.1/§8.2/§8.4；BACKLOG P87 行；research-backlog 本块
- 邻 last-line only：P39 剧本+卡；P75 剧本+卡；P47 剧本；P84 剧本；P86 剧本+卡+轻指标；P05；P45；T-Deposit

## 下一槽

**20:17 = sources/recap。不规定 P88。** 不要把 T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为下一轮要写 — 已 drafted。Pet/AAA 仍停车。服务补偿 leftover 已关为 P87。
