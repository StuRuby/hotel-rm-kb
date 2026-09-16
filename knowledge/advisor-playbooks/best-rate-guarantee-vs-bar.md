# Playbook P75｜Best Rate Guarantee / 最低价保证索赔 vs 公开 BAR（索赔是对已订直销单的履约，不是把公开尺改成全网最低）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/best-rate-guarantee-vs-bar.md`  
> BACKLOG：P75 BRG / Price Match / 贵就赔 vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **best-rate-guarantee-vs-bar**  
> 状态：**drafted**（2026-08-29 14:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-brg.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/brg-claim-vs-public-bar.md`（公开 BAR vs 索赔比价 vs 是否 like-for-like；**无默认赔付 %**；本店贵就赔 SOP NV）  
> 理论：`theory/brg-claim-vs-bar.md`（**T-BRG**，2026-08-29 16:17）；Diagnose 走 T-BRG，过程仍本剧。邻 **T-Parity**（渠道价平尺）只作交叉，不复写。  
> 理论核源：Marriott Best Rate Guarantee（索赔匹配该笔直销单，不是改公开 BAR）；Hilton Price Match Guarantee（匹配仅对该笔已批准预订；改期可取消匹配）  
> 交叉：P59 真破平修便宜侧 ≠ 本剧「把索赔写成新 BAR」· P36 不可比截图 · P60 错价/延迟 · P74 券后/平台出资 · P42 前台 walk-in · P01 Ahead Hold  
> 问题树：§82 「最低价保证索赔不是公开 BAR」  
> 仿真：`cases/sim-2026-brg-claim-sat.md`（**Simulation**）  
> 证据等级：A Vendor 品牌（Marriott BRG 条款打开；Hilton Price Match 条款打开，适用于 2026-08-20 及之后提交 — §72）。Marriott 25% / 5,000 分、Hilton 25% extra = **品牌项目，不进中国独立店 SOP**。Hilton Hampton / SLH 在中华人民共和国目前排除 = **管辖标签，不是华住 SOP**。  
> Last Verified：2026-08-29  
> 知识类型：Vendor Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆「一笔已订直销单的索赔」vs「改写公开灵活 BAR」、核 like-for-like、Hold 公开 BAR、拒绝把索赔价写成新尺；**不操作** PMS / OTA / 索赔后台，不自动定价，不代审批索赔。  
> 禁止：发明华住贵就赔 SOP、默认赔付%、佣金%、699；把万豪/希尔顿 25% 写成店规；一夜 −15%；BAR→399「贵就赔 / 全网最低」；把 14/399/799 当市场 Fact；开 P76；把真破平修侧当本剧主刀（误入 P59）；把前台当场跟 dump 当本剧（误入 P42）。  
> 12:17「不要规定 P75」= recap 槽不得指定；本 scout 核实索赔改尺缺口后开。

---

## 0. 一句话

**最低价保证 / BRG / 贵就赔索赔不是公开 BAR。** 先问客人拿来的数字是要 **履约已经订出的那一笔直销单**，还是要 **把公开灵活 BAR 改成截图价**。万豪与希尔顿的官方条款都把批准结果钉在 **该笔预订**：匹配 Comparison Rate（品牌另给的加码是它们的项目，不是你店的公开尺）。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「被索赔了」「贵就赔所以必须全网最低」把 BAR 改写成 399。本店是否真有 贵就赔 = **NV，不编**；没有政策就不要发明一条。不可比 → **P36**。真破平修便宜侧 → **P59**。错价/延迟 → **P60**。券后 → **P74**。前台当场跟 → **P42**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%）。

完成定义：一张「先拆索赔 vs 公开 → 核 like-for-like → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 索赔 = 公开 BAR** | 「贵就赔所以公开价就是全网最低」 | 用一笔履约当尺 | **拆索赔 vs 公开**；Hold 公开 BAR |
| **B BAR→399「贵就赔 / 全网最低」** | 「被索赔了 BAR 改 399」 | 把例外写成战略尺 | **拒绝 BAR→399** |
| **C 不合格比价当索赔** | 券后/含早不同/取消不同/竞对店 | 条款本身就不认 | **拒该口径**；交 **P36 / P74 / P69** |
| **D 真破平** | 「OTA 比官网便宜，索赔+砍官网」 | 渠道破平 ≠ 索赔改尺 | **P59** 修便宜侧；仍不因索赔砍 BAR |
| **E 错价 / 延迟挂出** | 「线上已经 399 了必须认」 | 错误价不是市价 | **P60**；品牌条款可因错误展示拒赔 |
| **F 真弱 leftover** | 「反正空，跟索赔地板」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是已订直销单上的最低价保证/BRG/贵就赔索赔，还是要把公开 BAR 改成截图价。索赔（若本店确有政策）只可能动那一笔，不是公开尺。本店是否有贵就赔 / 华住字段 = **NV**，不编；不把万豪 25%/希尔顿 25% 写成店规。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「贵就赔 / 全网最低」。
3. 不可比走 P36。真破平修便宜侧走 P59。错价/延迟走 P60。券后走 P74。前台当场跟 dump 走 P42。真弱走 P05（可围栏+截止日，仍禁一夜 −15%）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认赔付 %、无「被索赔就必须改 BAR」、无「截图即验证」**。本店贵就赔 SOP = **NV**。

Vendor 指针（不写成华住 SOP）：

- Marriott *Best Rate Guarantee*（A Vendor，§72）：须先直销下单；合格比价 like-for-like；批准 = **匹配该笔** + 品牌加码。截图协助但不作为验证。可因输入错误/技术延迟拒赔。券/打包/opaque/协议/携程美团飞猪微信预付不可退 **不算**。比价不含税费。**不是改写公开 BAR。**
- Hilton *Price Match Guarantee*（A Vendor，§72；2026-08-20 及之后提交）：批准匹配 **仅对该笔已批准预订**；改期改人酒店可取消匹配。Hampton / SLH 在中华人民共和国目前排除。25% extra = 希尔顿项目。**管辖标签 ≠ 华住 SOP。**

本店贵就赔 SOP / 华住字段 / 默认赔付% / 佣金% = **全部 NV**。万豪 25% / 5,000 分、希尔顿 25% **不采用为店规**。

---

## 1. Situation

钉 **三件事**：①用户说的「贵就赔/BRG」是要履约已订直销单，还是要改公开 BAR；②比价是否 like-for-like；③本店 Pace / Remaining。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 客人截图/比价（缺则问，不编）
- 客人是否 **已经在直销渠道订出**（未订先索赔 → 品牌条款常不认；独立店 NV）
- 同店 / 同房型 / 同取消 / 同含早 / 同人数？券后、登录、App、打包、协议？
- 本店是否真有最低价保证（NV 不编；没有就不要发明）
- 用户原话：「截图更便宜，按最低价保证把 BAR 砍下来」「贵就赔所以 BAR 跟最低渠道」「被索赔了说明定价高了」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 索赔履约 vs 改写公开 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「贵就赔 / 全网最低」？ | 形 B；拒绝 |
| D3 | like-for-like？券/含早/取消/竞对店？ | 不合格 → 形 C |
| D4 | 本店 OTA 公开灵活 < Brand.com（非平台自掏）？ | → P59 |
| D5 | 错映射 / 延迟 / 错误展示？ | → P60 |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 前台未订上门要跟 dump？ | → P42 |
| D8 | 真 Behind leftover？ | → P05；仍不改写 BAR |

## 3. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 一笔索赔匹配价。有政策则只谈 **那一笔** 是否 like-for-like 可履约。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **不合格比价**：券后/平台出资 → P74；含早/登录/税 → P36；打包 → P69；错价 → P60。不要用截图当验证。
4. **真破平**：修便宜侧（P59），不是借索赔砍官网。
5. **早会一个动作**（P45）：纠正「索赔≠BAR」+ Hold 公开 BAR（本店有无政策标 NV）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认赔付 %；无 Pace 就因「被索赔了」改尺；把万豪/希尔顿加码抄进独立店。

## 4. Why

- Vendor：两家国际品牌都把 BRG 设计成 **先订直销、再索赔、只动该笔**。Hilton 写明匹配 **only to the booking as approved**。这不是全网公开尺。
- Practice：合格比价必须 like-for-like；券、打包、opaque、协议、错误展示都不认。截图不是验证。
- Advisor：用户说「贵就赔所以砍 BAR」时，先问 Pace 与是否已订直销单。索赔（若有）是例外履约，不是砍公开尺的许可证。

## 5. Expected Impact / Risk / Watch

- Impact（方向，无 Fake Precision）：Ahead 保住公开 ADR；有效索赔关在那一笔，不污染公开尺。
- Risk：误把真破平当「索赔」放过；或反过来把不合格截图当成必须改尺。
- Watch：公开 BAR 是否仍 Hold；该笔索赔是否仍 like-for-like；24h 公开 Pickup。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不改写 BAR。

## 6. Confidence

方向 Medium（有 Pace + 能拆索赔/公开，或至少能标 NV 仍 Hold）。点赔付% Low（NV）。Evidence A Vendor 品牌条款。

## 7. Simulation 指针

见 `cases/sim-2026-brg-claim-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 14:17 CST | 首版。P75。BRG/贵就赔索赔≠公开 BAR；Ahead Hold；拒改尺；like-for-like。12:17 不规定 → 本 scout 核实后开。未开 P76。 |

> 交叉指针（2026-08-29 16:17，不改正文）：理论卡 **T-BRG** `theory/brg-claim-vs-bar.md` 已 drafted。三句 / 399-rejected / 799-Hypothesis 原样。不写 P76。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-30 06:17，不改正文）：BRG 索赔仍本剧（比价不含税费）；本店 all-in/Resort Fee 改公开尺 → **P79**。交叉 P79 resort-fee/all-in ≠ BRG 履约。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。本剧仍是 BRG like-for-like 已订直销索赔。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 00:17，不改正文）：Diagnose 走 **T-Service-Recovery**，过程仍 **P87**。本剧仍是 BRG like-for-like 已订直销索赔。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。
