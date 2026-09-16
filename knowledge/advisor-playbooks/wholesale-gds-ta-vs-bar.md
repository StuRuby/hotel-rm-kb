# Playbook P81｜Wholesale / GDS / Travel Agent Net vs 公开 BAR（批发/旅行社/GDS 净价不是公开 BAR；不要把批发地板写成新尺）

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/wholesale-gds-ta-vs-bar.md`  
> BACKLOG：P81 Wholesale / GDS / Travel Agent Net vs Public BAR · HIGH · 先诊断枝（本轮同开）· slug **wholesale-gds-ta-vs-bar**  
> 状态：**drafted**（2026-08-30 14:17 CST）  
> 配套卡：`recommendations/dont-rewrite-bar-for-wholesale.md`（主卡；本剧不另开第二张卡）  
> 轻指标：`metrics/wholesale-net-vs-public-bar.md`（公开 BAR vs 批发/TA/GDS 净价；**无默认批发折扣 % / 佣金 Fact**；本店批发/GDS SOP NV）  
> 理论：`theory/wholesale-net-vs-bar.md`（**T-Wholesale**，2026-08-30 16:17）；Diagnose 走 T-Wholesale，过程仍本剧。邻 **P20**（渠道净贡献排序）/ **P27**（高峰关盲盒/批发漏出）/ **P71**（年标/企业协议）/ **P26**（已签码漏出）只作交叉，不复写。**不规定 P82。**  
> 理论核源：OPERA Cloud 26.2 Managing Profile Channel Negotiated Rates（Travel Agent / Company / Source 档案 + GDS/OWS Access Code）；HSMAI Academy Net Rate（旅行社/批发/OTA 的净价是对方再加 markup 的底，不是公开尺）；HSMAI Academy BAR = non-qualified publicly available（指针 §67）；OPERA Rate Classes 例 Wholesale（升核指针 §77）  
> 交叉：P20 净贡献排序 ≠ 本剧「把公开 BAR 改写成批发净价」· P27 高峰关 opaque/批发漏出 ≠ 改尺 · P71 年标/企业账户 ≠ 批发/TA/GDS 净 · P26 已签码漏出 · P23 会员围栏 · P80 员工价 · P05 真弱 leftover · P01 Ahead Hold · P45 早会一个动作  
> 问题树：§88 「批发/旅行社/GDS 净价不是公开 BAR」  
> 仿真：`cases/sim-2026-wholesale-net-sat.md`（**Simulation**）  
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 Channel Negotiated Rates：Travel Agent / Company / Source 档案挂协议码，经 Access Code 发到 OWS/GDS — §84）；A 协会（HSMAI Academy Net Rate：travel agents / wholesalers / OTAs 的 net rate 排除佣金/税，渠道再加 markup 后才对外广告 — §84）；A 协会词条（HSMAI Academy BAR = non-qualified, publicly available — 指针 §67）；A Vendor PMS 升核（OPERA Cloud 26.2 Rate Classes 例 Negotiate / **Wholesale** / Discounted = LTB 查询桶 ≠ BAR Type — §77 指针 / §84 升核）  
> Last Verified：2026-08-30  
> 知识类型：Vendor Methodology + Association Methodology + Best Practice + Hypothesis  
> Advisor-First：只建议先拆批发/旅行社/GDS 渠道协议净价 vs 公开灵活 BAR、Hold 公开 BAR、拒绝把批发地板写成新尺；**不操作** PMS / GDS / 批发合同，不自动定价，不代关 Access Code。  
> 禁止：发明华住批发/GDS SOP、默认批发折扣 %、佣金%、Consortia 10%、699；一夜 −15%；BAR→399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低」；把 14/399/799 当市场 Fact；开 P82；开停车费专剧；把净贡献排序当本剧主刀（误入 P20）；把高峰关盲盒/批发当本剧主刀（误入 P27）；把年标当本剧（误入 P71）；把已签码漏出当本剧主刀（误入 P26）；把真弱 leftover 当本剧主刀却漏移交（应 P05）。  
> 12:17「不要规定 P81」= recap 槽不得指定；本 scout 核实 HIGH 缺口（filename 无 wholesale / gds-rate / consort / travel-agent 专剧；P20≠改尺；P27≠改尺；P71≠批发净）后开。

---

## 0. 一句话

**批发 / 旅行社 / GDS 净价不是公开灵活 BAR。** 先问这是 **挂在 Travel Agent / Source 档案上、靠 Access Code 才进 GDS/OWS 的渠道协议净价**（对方再加 markup 才对外），还是 **要把公开灵活 BAR 改成「批发价才是市场价」那个地板**。OPERA Channel Negotiated Rates 把 Travel Agent / Company / Source 协议码钉成 **档案 + 渠道 + Access Code**，不是公开 BAR Type。HSMAI：net rate 是旅行社/批发/OTA 排除佣金/税的底，渠道加 markup 后才广告；BAR 是 **non-qualified, publicly available**。Wholesale Rate Class 是 LTB 查询桶，不是定价权。高峰 / Pace Ahead：公开 BAR **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「批发价太低所以跟 / GDS 协议价低所以公开也得低 / 批发才是市场价」把 BAR 改写成 399。净贡献排序 → **P20**。高峰关盲盒/批发漏出 → **P27**。年标 → **P71**。已签码漏出 → **P26**。真弱 → **P05**（可有窗围栏，仍禁一夜 −15%，仍不从批发净价改写 BAR）。本店批发/GDS SOP / 华住字段 / 默认批发折扣 % = **NV，不编**。停车费仍 **MEDIUM leftover**，本剧不开。

完成定义：一张「先拆批发/TA/GDS 净价 vs 公开灵活 BAR → Ahead Hold 公开 BAR → 拒改尺 / 误入移交」过程。六种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 批发/TA/GDS 净价 = 公开 BAR** | 「批发价就是我们的公开价 / 市场价」 | 用渠道协议净当尺 | **拆净价 vs 公开**；Hold 公开 BAR |
| **B BAR→399「批发太低所以跟 / GDS 低所以公开也得低」** | 「批发 399、公开也得 399」 | 把批发地板写成战略尺 | **拒绝 BAR→399** |
| **C 批发 mix 拉低 ADR → dump BAR** | 「ADR 被批发看脏了，公开价砍下来」 | 指标读法问题，不是改尺令 | **分看公开 BAR vs 批发净 vs 对方 markup 后挂牌**；不改写 BAR |
| **D 误入净贡献 / opaque / 年标 / 漏出** | 「批发净差所以保 / 高峰批发还开着 / 对齐协议 / 码漏了」 | 对象是别的剧本 | **P20** / **P27** / **P71** / **P26** |
| **E Access Code / Wholesale 类 / Channel Negotiated 当 BAR Type** | 「GDS 码 / Wholesale 分类桶就是公开价表」 | 把渠道闸/查询桶当成 BAR | **档案闸 / Access Code / Rate Class ≠ BAR Type**；Hold 公开 |
| **F 真弱 leftover** | 「反正空，按批发地板冲量」 | 需求弱 | **P05**；可有窗围栏；仍不改写 BAR |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问这是批发/旅行社/GDS 渠道协议净价（档案闸 + Access Code），还是要改公开灵活 BAR。批发净价 ≠ 公开尺。本店批发/GDS SOP / 华住字段 = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799。不要 BAR→399「批发价才是市场价 / 旅行社净价太低所以跟 / GDS 协议价低所以公开也得低」。
3. 净贡献排序走 P20。高峰关盲盒/批发漏出走 P27。年标走 P71。已签码漏出走 P26。真弱走 P05（可围栏+截止日，仍禁一夜 −15%、仍不从批发净价改写公开 BAR）。
```

尺（Hypothesis；14/399/799 只 Simulation）：过夜公开灵活 **Hold 779–799 首选 799**（Ahead）。禁止一夜 −15%。禁止 BAR→399。**无默认批发折扣 %、无「批发必须打 X 折」、无 Consortia 10% Fact、无佣金 Fact**。本店批发/GDS SOP / 华住字段 = **NV**。HSMAI / 博客行业 % **不进店规**。

Vendor / 协会指针（不写成华住 SOP）：

- OPERA Cloud 26.2 *Managing Profile Channel Negotiated Rates*（A Vendor，§84）：从档案发 Sales Account 协议价到 **OWS 渠道与 GDS**。档案类型含 **Company、Travel Agent、Source**。字段：Channel、Channel Rate Code、Negotiated Rate Code、**Access Code**、起止日。**Access Code + 档案闸 ≠ 公开灵活栅格。** 加强形 A/E。
- HSMAI Academy *Net Rate*（A 协会，§84）：部分 **travel agents、wholesalers、OTAs** 要酒店给 **net rate**（排除佣金/税）；这些渠道再 **加 markup** 后才对外广告。**净价是对方进货底，不是公开 BAR。** 不编 markup %。
- HSMAI Academy *BAR*（A 协会词条，指针 §67）：BAR = **the non-qualified, publicly available rate**。批发/TA/GDS 净价要资格/合同，**不是 BAR**。
- OPERA Cloud 26.2 *Configuring Rate Classes*（A Vendor，§77 指针 / §84 升核）：Rate Class 例 **Negotiate、Wholesale、Discounted**，用于 LTB 查询分组。**Wholesale 类 = 查询桶，不是 BAR Type / 定价权。**

本店批发/GDS SOP / 华住字段 / 默认批发折扣 % / 佣金% / Consortia 10% / 停车费专剧 = **全部 NV**。停车费仍 **MEDIUM leftover**。

---

## 1. Situation

钉 **三件事**：①用户说的「批发价 / 旅行社净价 / GDS 协议价」是渠道协议净、还是对方 markup 后挂牌、还是要改公开 BAR；②拟议是「BAR→399 / 批发太低所以跟」还是「批发成交关在档案闸、Hold 公开」；③本店 Pace / Remaining，不是「批发听起来更低」。

先问（缺则标 NV，不停）：

- Stay Date、DOW；当晚 Remaining；Pace（Ahead / On / Behind）
- 当前公开灵活 BAR vs 批发/TA/GDS 净价挂牌（缺则问，不编）
- 是否 Travel Agent / Source / Wholesale 档案闸；是否 GDS Access Code；是否要把 BAR 改尺
- 拟议：BAR 改成批发地板 / 旅行社净价太低所以跟 / GDS 低所以公开也得低 / ADR 被批发看脏所以砍
- 本店批发/GDS SOP / 华住字段（NV 不编）
- 用户原话：「批发价才是市场价，BAR 改成 399」「旅行社净价太低所以跟」「GDS 协议价低所以公开也得低」「ADR 被批发看脏了砍 BAR」「Wholesale 类就是我们的公开价」

## 2. Diagnosis

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 批发/TA/GDS 渠道协议净价 vs 公开灵活 BAR？ | 混用 → 形 A |
| D2 | 拟议 BAR→399「批发太低所以跟 / GDS 低所以公开也得低」？ | 形 B；拒绝 |
| D3 | 因批发 mix 拉低 ADR 而要 dump BAR？ | 形 C；指标读法 ≠ 改尺 |
| D4 | 其实是净贡献排序 / 高峰关批发漏出 / 年标 / 已签码漏出？ | → P20 / P27 / P71 / P26 |
| D5 | Access Code / Wholesale Rate Class / Channel Negotiated 被当成 BAR Type？ | 形 E；渠道闸/查询桶 ≠ BAR |
| D6 | Pace Ahead / On / Behind？Remaining？ | Ahead → Hold |
| D7 | 真 Behind leftover？ | → P05；仍不改写 BAR |
| D8 | 早会只缺一个纠正动作？ | → P45 |

## 3. Opportunity / Risk

- Opportunity：Ahead 保住公开 ADR；批发/TA 成交关在档案闸与 Access Code，不污染公开尺。
- Risk：误把真弱夜当「批发投诉所以 Hold」；或反过来把批发地板当成必须跟的市场价；误把净贡献差写成改尺令（应变 P20）；误把高峰批发还开着写成改尺（应变 P27 关漏出层，不砍 BAR）；误为清洗 ADR mix 砍公开尺。

## 4. Recommended Action

1. **拆尺**：公开灵活 BAR ≠ 批发/旅行社/GDS 渠道协议净价 ≠ 对方 markup 后挂牌。批发成交关在档案闸 / Access Code，公开尺不跟跑。
2. **Ahead / On + 剩余紧**：公开 BAR **Hold 779–799 首选 799**。不要 BAR→399。
3. **指标**：若 ADR 因批发 mix 显得「脏」，分看公开 BAR vs 批发净 vs 对方对外挂牌；**不要为清洗 ADR 砍公开 BAR**。读法 ≠ 改尺。
4. **误入移交**：净贡献排序 → P20；高峰关盲盒/批发漏出 → P27；年标 → P71；已签码漏出 → P26；会员 → P23；员工价 → P80；真弱 → P05。
5. **早会一个动作**（P45）：纠正「批发净价≠BAR」+ Hold 公开 BAR（或问清是批发闸还是要改公开尺）。

禁止：一夜 −15%；把 399 写成推荐新 BAR；编默认批发折扣 % / 佣金 / Consortia 10%；无 Pace 就因「批发低」改尺。

## 5. Why

- Vendor：Channel Negotiated Rates 钉在 **Travel Agent / Company / Source 档案 + Access Code 发到 GDS/OWS**；设计上不是公开 BAR Type。Rate Class「Wholesale」钉在 **LTB 查询桶**。
- 协会：BAR 是 non-qualified 公开尺；net rate 是旅行社/批发/OTA 的进货底，对方加 markup 后才广告——证明净价不是公开需求尺，也不是「批发太低所以砍公开」的许可证。
- 指标：批发 mix 可拉低混 ADR——顾问应读清桶，而不是把「ADR 脏了」当成砍尺令。
- Advisor：用户说「批发价才是市场价」时，先问 Pace 与这是不是渠道协议净。低的常是 **批发闸**，不是砍公开尺的许可证。高峰要关的是漏出层（P27），不是公开 BAR。

## 6. Expected Impact

方向，无 Fake Precision：Ahead 保住公开 ADR；批发成交关在资格闸，不污染公开尺。399 永不推荐为新 BAR。

## 7. Risk / What To Watch / Re-evaluation Trigger

- Risk：误把真弱夜当批发投诉所以 Hold；或把批发地板当成必须跟的市场价；误把 P20 净排序 / P27 关漏出写成改尺。
- Watch：公开 BAR 是否仍 Hold；批发/TA/GDS 码是否仍关在档案闸 / Access Code；24h 公开 Pickup vs 批发码预订（分看）。
- Re-eval：Pace 翻成 Behind 厚剩余 → 可回到 P05 **有窗**围栏，仍不从批发净价改写 BAR。高峰批发漏出未关 → 走 P27，不砍公开 BAR。

## 8. Confidence

方向 Medium（有 Pace + 能拆批发净/公开，或至少能标 NV 仍 Hold）。点批发折扣%/佣金 Low（NV）。Evidence A Vendor PMS + A 协会（HSMAI Net Rate + BAR 定义）。

## 9. Simulation 指针

见 `cases/sim-2026-wholesale-net-sat.md`。180/14/399/799 **Simulation only**。399 = 被拒绝的 dump。799 = Hypothesis/Simulation。

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-30 14:17 CST | 首版。P81。批发/旅行社/GDS 净价≠公开 BAR；Ahead Hold；拒改尺。12:17 不规定 → 本 scout 核实 HIGH 缺口后开。未开 P82。停车费仍 MEDIUM leftover。 |
> 交叉指针（2026-08-30 18:17，不改正文）：停车费/valet/车库改尺 → **P82** `parking-fee-vs-bar.md` · `dont-rewrite-bar-for-parking.md`。不写 P83。停车费不再 leftover。
