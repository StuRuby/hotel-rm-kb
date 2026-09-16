# Playbook P59｜Rate Parity / 价平破口（OTA 比官网便宜不是自动跟价）

> 资产：Advisor Playbook
> 路径：`advisor-playbooks/rate-parity-breach.md`
> BACKLOG：P59 Rate Parity / 价平破口 · HIGH · 先决策卡（本轮同开）· slug **rate-parity-breach**
> 状态：**drafted**（2026-08-26 22:17 CST）
> 配套卡：`recommendations/dont-cut-brand-to-match-ota-undercut.md`（主卡；本剧不另开第二张卡）
> 轻指标：`metrics/parity-gap.md`（可比公开灵活价：Brand.com vs 具名 OTA；gap = OTA − Brand；**无默认容忍 %**；合同条款 NV）
> 理论：T-Parity `theory/rate-parity-integrity.md`（渠道价平是分销完整尺，不是 Brand.com 按钮；本剧不重写）· P36 `rate-shopper-incomparable.md`（可比性先于破平）；P20 `channel-net-rate.md`；P23 `member-vs-public.md`；P18 `china-ota-promotion.md`；P25 `direct-vs-ota-mix.md`
> 交叉：P36 不可比先审口径；P16 竞对价格战 ≠ 本店渠道 vs Brand.com；P23 会员围栏常允许；P18 促销闸；P20 Gross≠Net；P27 opaque/打包围栏；P35 排名压力；P42 前台跟 dump；P58 切房未卖；P01/P05 公开 Pace 仍拥有公开价
> 问题树：§66 「OTA 比官网便宜不是自动砍官网」
> 仿真：`cases/sim-2026-parity-gap-sat.md`（**Simulation**）
> 证据等级：A Vendor/OTA（Booking Partner Hub How parity works：no / narrow / wide 按物业所在国；GDT 为准 — §40）；A 官方监管（EU Commission DMA：EEA 自 2024-11-14 禁止 Booking 价平条款及等效措施 — **仅 EEA，不是中国** — §40）；B / Hypothesis（真破平先修便宜侧；不默认砍 Brand.com；779–799）
> Last Verified：2026-08-26
> 知识类型：Vendor Methodology + Official Regulation (jurisdiction-labeled) + Best Practice + Hypothesis
> Advisor-First：只建议先问可比 / 修便宜侧 / Hold Brand.com；**不操作 PMS / RMS / OTA extranet / channel manager / Brand.com**，不自动改价，不代客关促销、不代改映射。
> 禁止：发明美团/携程价平罚则、中国违约金%、佣金差表、华住价平 SOP、弹性、Walk $；一夜 −15%；BAR→399「为了价平」；把官网砍到 OTA undercut「对齐」；把 180/14/719/399/799 当市场 Fact；把 719 写成推荐 Brand.com；开 P60。
> 20:17「不要规定 P59」= recap 槽不得指定；本 scout 核实 T11 Parity 缺口后开。

---

## 0. 一句话

**OTA 比官网便宜，不是自动把官网砍下去。** 先问两边是不是同一产品；不可比走 P36。真破平：先修便宜的那一侧或错配的围栏，不要默认对齐砍 Brand.com。Hold 官网 779–799 首选 799（Hypothesis / Simulation）。本店价平条款 / 美团·携程违约罚则 / 佣金差 = **NV，不编**。

完成定义：一张「先问可比 → 围栏 vs 真破平 → 修便宜侧不砍官网 → Gross≠Net → 合同 NV 仍先修侧」过程。七种假信号写进**同一本**剧本：

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 不可比喊破平** | 「美团便宜 80，破平了」 | 含早/税/登录/会员/取消不同 | **P36** 先审口径，不要喊破平 |
| **B 真破平** | 可比公开灵活价，OTA < Brand.com | 错促销 / CM 映射 / OTA 侧价错 | **修便宜侧**；Hold Brand.com；不默认砍官网对齐 |
| **C 围栏更低** | 会员/预付/打包/切房价更低 | 故意围栏 | **不是破平**（P19/P23/P27） |
| **D Gross 平 Net 亏** | 「两边毛价对齐了」 | 佣金后直销更划算或反过来 | **P20**；不按毛价平追 |
| **E 违约威胁** | 「Booking/美团说我们违约要罚」 | 合同条款本店 NV | **问条款（NV）**；过程仍先修侧，不自动 dump Brand.com |
| **F 破平当借口** | Pace Ahead 仍要砍「为了价平」 | 需求不弱 | **P01 Hold** |
| **G 误入** | 竞对更低 / 排名 / 前台 / 切房 / 报名 | 别的剧本 | **P16** / **P35** / **P42** / **P58** / **P18** |

顾问必须能直接说的三句（与决策卡同一套，不另发明）：

```
1. 先问两边是不是 **同一产品**（房型、取消、含早、税、登录/会员、日期）。不可比就走 P36，不要喊破平。本店价平条款 / 美团·携程违约罚则 / 佣金差 = **NV**，不编中国合同范本。
2. 真破平：先修 **便宜的那一侧或错配的围栏**（关错促销、纠 Channel Manager 映射、收 OTA 侧），不要默认把 Brand.com 也砍下去「对齐」。Hold 官网 779–799 首选 799（Hypothesis / Simulation）。Gross 对齐不等于 Net 划算（P20）。
3. 会员价、预付、打包、切房价本来就可以低于灵活公开价——那是围栏，不是破平。竞对更低走 P16；排名掉了走 P35；前台跟 OTA dump 走 P42。不要把 BAR dump 到 399「为了价平」。
```

独立默认（本库 Hypothesis）：Parity 比较的是 **未登录、公开灵活、同房型、同取消、同含早/税口径、同日期** 的本店 Brand.com vs 本店具名 OTA。对不上任一维 → **不可比**，走 P36，本剧不点火「破平」。Booking Partner Hub：按物业所在国适用 no / narrow / wide（A Vendor；GDT 为准）。EU DMA：EEA 禁止 Booking 价平条款（A 官方；**仅 EEA 管辖标签**）。中国合同罚则 / 违约金% / 佣金差 = **NV，不编**。缺可比清单 / 本店条款 → **问，不编华住/美团价平 SOP**。

尺（Hypothesis；14/719/399/799 只 Simulation）：Brand.com **Hold 779–799 首选 799**。禁止因 OTA undercut 去 dump Brand.com。禁止 BAR→399。14 / 719 / 399 / 799 **只允许出现在 Simulation**，不是行情 Fact。399 = 被拒绝的 dump。**719 = sim 里 OTA undercut，不是推荐 Brand.com BAR**。

---

## 1. Situation

钉 **两条可比公开价**：①Brand.com / 直销未登录公开灵活 BAR；②具名 OTA 上同产品公开灵活价。不要把会员/预付/打包/切房栏揉进「破平」。

先问（缺则标 NV，不停）：

- 两边是否 **同一产品**（房型、取消、含早、税、登录/会员、日期）
- 若不可比 → 移交 **P36**，本剧停「破平」标签
- 便宜的是 **OTA 侧** 还是 Brand.com 侧（符号：gap = OTA − Brand；负 = OTA 更便宜）
- 是否错促销 / CM 房型或价码映射 / 过期特价仍开
- 当前 Brand.com BAR；公开 Pace（Ahead / On / Behind）
- 用户原话是想 **砍官网对齐**，还是想修 OTA / 关促销 / 问合同
- 本店与该 OTA 的价平条款 / 罚则 = **NV**（有合同则用户读；无则不编）

用户原话包括：「美团比官网便宜 80，我们破平了要不要跟」「Booking 说我们违约」「把官网也砍到一样」。

Vendor / 监管指针，不在本剧重写成中国 SOP：

- Booking Partner Hub *How parity works*（A Vendor/OTA，§40）：按物业所在国 **no / narrow / wide**；完整措辞在 GDT；解释页与 GDT 冲突时 **GDT 为准**。
- EU Commission DMA（A 官方，§40）：自 **2024-11-14**，EEA 内 Booking 不得施加价平条款及等效措施（如因他渠更低价而加佣/下架）。**管辖 = EEA，不是中国；不得声称中国有同一规则。**
- SiteMinder 价平科普文本轮 Cloudflare 拦 fetch → 不当核页；渠道同步能力仍见既有 CM 指针。

本店价平条款 / 美团·携程违约罚则 / 佣金差 / 华住价平 SOP = **全部 NV**。

## 2. Diagnosis

对焦点 Stay Date 走可比清单，再打破平轴：

| # | 检查 | 用来回答 |
| --- | --- | --- |
| D1 | 房型是否同一 | 否 → P36 |
| D2 | 取消 / 预付是否同一 | 否 → 围栏或 P36；预付更低常 P19 |
| D3 | 含早 / 税口径 | 否 → P36 |
| D4 | 登录 / 会员 / Genius / App | 是围栏 → P23 / 非破平 |
| D5 | 日期 / LOS 是否同一 | 否 → P36 |
| D6 | 可比后 gap = OTA − Brand | 负且公开灵活 → 形 B 候选 |
| D7 | 便宜侧是否错促销 / 映射 | 是 → 修侧，不砍 Brand.com |
| D8 | Gross 对齐后净贡献 | 走 P20 |
| D9 | 公开 Pace | Ahead → 形 F 禁借口砍；Behind 真弱 → P05 理由写需求不是「价平」 |
| D10 | 用户要砍的是 Brand.com 还是 OTA | 默认修便宜侧 |

## 3. Decision Tree（过程）

```text
截图/电商喊「破平 / 违约 / 官网对齐」
  → 先问同一产品？（D1–D5）
       否 → P36。不要喊破平。
       是 → 算 gap（OTA − Brand）
            会员/预付/打包/切房栏 → 形 C；不是破平（P23/P19/P27）
            可比公开灵活 且 OTA < Brand → 形 B
                 → 先查错促销 / CM 映射 / OTA 侧价
                 → 修便宜侧；Brand.com Hold 779–799 首选 799
                 → 禁止把 Brand.com 砍到 OTA 价「对齐」
                 → 禁止 BAR→399
            OTA 威胁罚/违约 → 形 E：问本店合同（NV）；过程仍先修侧
            Pace Ahead 却要砍「价平」→ 形 F：P01 Hold
            Gross 要平但 Net 亏 → 形 D：P20
            竞对更低 → P16；排名 → P35；前台 → P42；切房 → P58；报名 → P18
```

## 4. Recommendation（默认动作）

```text
Stay Date:            用户给
Room Type:            可比标准/基础可订房
Rate / Rate Plan:     Brand.com 公开灵活 BAR（未登录）
Current Value:        用户值
Recommended Range:    Hold 779–799
Preferred (首选):     799（Hypothesis / Simulation）
Inventory Action:     不因破平关 Brand.com
Restriction Action:   今天不因破平新设 MinLOS
Channel Action:       修便宜的 OTA 侧 / 关错促销 / 纠映射；不为「对齐」降 Brand.com；报名仍走 P18
Staging:              第一刀 = 可比确认 + 修便宜侧 + Brand.com Hold。24h 再看 gap 是否收回
Do-not-do:
  - Brand.com → OTA undercut「对齐」
  - BAR → 399「为了价平」
  - 一夜 −15%
  - 编美团/携程罚则% / 华住价平 SOP / 佣金差表
  - 把 719 写成推荐 Brand.com
  - 开 P60
```

真实酒店若当前 BAR 不在该带，保留 **Hold 方向**，不把 779–799 当市场 Fact。

早会带走一个动作（P45）：通常是 **「先确认可比，再关 OTA 错价/促销」** 或 **「官网 Hold」**，不要两刀同时（又砍官网又修侧）。

顾问对 GM / 电商三句回话：

> 「先问两边是不是同一产品。不可比就走比价口径，不要喊破平。」
> 「真破平先修便宜那一侧。官网 Hold 在 779–799，首选 799。不要默认砍官网对齐。」
> 「会员/预付/打包更低是围栏。不要把 BAR 砍到 399 为了价平。」

## 5. Why

1. **用了哪些数据（Fact）：** Booking 按国适用不同 parity 计划（Partner Hub）；EEA DMA 禁止 Booking 价平条款（EU Commission，**管辖标签**）。本店合同罚则 = 用户给或 NV。可比清单 = 用户截图字段。
2. **逻辑链：**
```text
破平标签前提 = 可比公开灵活价跨本店渠道
+ 不可比 → 口径问题（P36），不是合同破平
+ 真 undercut 在 OTA → 修推送/促销/映射，保护更高净贡献的直销价栏
+ 默认砍 Brand.com「对齐」= 把错误扩散到直销，且 Gross 平 ≠ Net 划算（P20）
+ 围栏价本就可低于公开灵活价（P23/P19/P27）
```
3. **理论 / 卡：** P36 可比性；P20 净价；P23 会员围栏；`how-much-to-move.md` 禁一夜 −15%；P01 公开 Ahead Hold。
4. **哪一句是 Hypothesis：** 779–799 / 首选 799；「先修便宜侧」方向 Hypothesis；无弹性系数；无中国罚金 Fact。

## 6. Expected Impact

| 指标 | 必须回答 |
| --- | --- |
| OCC / 最终售出间夜 | 修 OTA 侧不承诺直销立刻补量。已售锁价 |
| ADR | Hold Brand.com 保护直销增量 ADR。砍到 719/399 压直销增量 |
| RevPAR | Hold 路径随 ADR；对齐砍价可能 OCC 微升、RevPAR 不升。不编精确增收 |
| Pickup | 分渠道看：OTA 修价后该渠；Brand.com 看直销净增 |
| Conversion | Unknown。不编点击率 |
| Net Revenue | Gross 对齐可能恶化净（P20）。费率 NV 不算假精确净额 |
| Profit | Unknown。不编 GOP / Walk $ |

允许的写法：若 24h 内 OTA 错价收回且 Brand.com Hold、Pace 仍 Ahead → Hold 成立。若公开真 Behind 且厚 → 再评 P05，理由写该夜需求，不写「为了价平」。

## 7. Risk

| 风险 | 机制 | 观察 | Trigger |
| --- | --- | --- | --- |
| 真弱公开被 Hold 住 | Brand.com 确实 Behind | Pace / Pickup / Remaining | 理由写该夜需求，走 P05；仍禁 399 与一夜 −15%；仍先确认不是映射错误 |
| 合同真有罚则 | 用户合同存在违约条款 | 用户提供合同摘录 | 金额/程序 NV 不编；过程仍优先修侧；不自动 dump Brand.com |
| 只砍半边 | Brand.com 降了 OTA 仍错 | 多渠道价 | 先修错侧；不把 undercut 写进 Brand.com |
| 训练市场 | 399/719 被记住为「官网页」 | 渠道价 | 拒绝；399 不是推荐 BAR；719 不是推荐 Brand.com |
| 不可比误判破平 | 会员截图当公开 | 登录态/含早标签 | 回 P36 |
| 与 P16 叠刀 | 竞对也在砍 | Comp shop | 诊断分开；本剧只管本店渠道路 |
| 用破平掩饰 Ahead 砍价 | Pace Ahead | Pace | 形 F → P01 |

## 8. What To Watch

| 指标 | 窗口 | 口径 | 谁提供 |
| --- | --- | --- | --- |
| 可比 gap（OTA − Brand） | 即时 / 24h | 同产品公开灵活 | 用户 |
| 便宜侧是否已修 | 4–24h | 促销关否 / 映射纠否 | 用户 |
| Brand.com BAR 是否被改到 719/399 | 即时 | 直销公开栏 | 用户 |
| 公开 Pace / Pickup | 24/48h | Ahead/On/Behind；净增 | 用户 |
| 登录/会员标签是否仍混入 | 每次截图 | 未登录复核 | 用户 |
| 合同沟通是否升级 | 按用户 | 有无书面条款（NV） | 用户 |

默认最少 5 个：可比确认、gap 符号与幅度、便宜侧动作、Brand.com 是否 Hold、公开 24h Pickup。

## 9. Re-evaluation Trigger

```text
IF 同一产品 Unknown（房型/取消/含早/税/登录）
  → 先补可比清单；不要喊破平；倾向 P36。

IF 不可比
  → P36。Brand.com Hold。禁止对齐砍价。

IF 可比 AND OTA < Brand.com（公开灵活）
  → 修便宜侧 / 映射 / 错促销。Brand.com Hold 779–799 首选 799。
     禁止 Brand.com → OTA 价「对齐」。禁止 BAR→399。禁止一夜 −15%。

IF 会员/预付/打包/切房更低
  → 围栏，不是破平。P23/P19/P27。

IF Gross 要对齐但费率已知净更差
  → P20；不按毛价平追。

IF OTA 威胁违约/罚
  → 问本店合同（NV，不编罚%）；过程仍先修侧；不自动 dump Brand.com。

IF Pace Ahead 却要以破平为由砍 Brand.com → P01 Hold。
IF 公开 Behind + remaining 厚 + 供给开 且 可比已确认无映射错
  → P05 bounded；理由写该夜需求，不写「价平」。仍禁 399 与一夜 −15%。

IF 竞对更低 → P16。排名 → P35。前台跟 dump → P42。切房 → P58。报名促销 → P18。
IF 提案是 BAR→399 或一夜 −15% 「为了价平」 → 拒绝。
IF 有人要把 Brand.com 砍到 719「对齐美团」 → 拒绝；719 是 undercut，不是新 BAR。
```

## 10. Confidence

```text
Confidence: Medium
为什么不是 High：本店价平条款 / 罚则% / 佣金差全部 NV；799 是 Hypothesis/Simulation；无弹性；Booking/DMA 页证明「价平是合同/管辖概念」，不证明中国罚则或本店该砍多少。
为什么不是 Low：可比性先于破平与 P36 同形可证伪；「修便宜侧不砍直销」与 P20/P23 同向；第一刀可逆；EEA 管辖可明确标签以免误套中国。
因此怎么用：先问同一产品；真破平修便宜侧；Brand.com Hold；合同 NV 仍先修侧；不要为价平 dump。
```

## 11. 仿真指针

180 间城市店练习见 `cases/sim-2026-parity-gap-sat.md`：周六 Pace Ahead、remaining 14、Brand.com BAR 799；美团同房型灵活公开 719（可比假设成立）；电商要把 Brand.com → 719 或 399「价平」→ **Hold 779–799，首选 799**；**修 OTA 侧**，不砍官网。若 719 其实是预付/会员围栏 → 重分类非破平。180/14/719/399/799 **Simulation only**。399 = 被拒绝的 dump。**719 = OTA undercut，不是推荐 Brand.com。**


## 12. 交叉（2026-08-27 02:17，不改三句 / 399-rejected / 799-Hypothesis / 719-not-Brand.com）

便宜侧若确认是 **CM 映射错 / 错码 / 误开促销 / 测试价上线**，不是故意 undercut → **P60** `channel-mapping-misprice.md`。本剧仍管可比公开灵活下的故意/促销破平：修便宜侧、不砍官网。错价不是市场价格，不要对齐到 399。

> 交叉指针（2026-08-29 10:17，不改正文）：真破平修便宜侧仍本剧。「把券后/平台出资展示价写成新公开 BAR」过程走 **P74**。平台自掏 margin 先排除，再谈破平。不写 P75。
> 交叉指针（2026-08-29 14:17，不改正文）： 真破平修便宜侧仍本剧。「把最低价保证/贵就赔索赔写成新公开 BAR」过程走 **P75** `best-rate-guarantee-vs-bar.md`。不写 P76。

> 交叉指针（2026-08-29 16:17，不改正文）：真破平修便宜侧仍本剧。索赔改尺理论走 **T-BRG**；过程仍 **P75**。不写 P76。
