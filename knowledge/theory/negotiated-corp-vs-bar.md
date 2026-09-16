# Negotiated Corp vs Public BAR｜年标不是公开 BAR

> 资产：T-Corp / T10 下一层（年标/RFP 被允许改什么）· P48 政务孪生 · P26 漏出孪生
> 路径：`theory/negotiated-corp-vs-bar.md`
> 能力层级：Understand → Diagnose → Advise
> Last Verified：2026-08-29
> 知识类型：Theory + Vendor Methodology + Best Practice + Hypothesis
> 证据等级：A Vendor PMS（OPERA Cloud 26.2 *BAR Based Rates*：BAR Based 从 Best BAR 派生；BAR Based **不能**同时标成 BAR；公司例 −25 off 125 → 100 — **§65 新开**，升级 §64 的 21.4）；A Vendor PMS（OPERA Cloud 26.1 *Configuring Rate Codes*：Negotiated 勾选 = 该码**只**作协议价，必须挂 guest/company/source/travel agent profile — **§65 新开**）；A Vendor PMS（OPERA Cloud 26.2 *Controls — Rate Management*：NEGOTIATED RATES = 价码存 profile，Look to Book 对该账户出示合同价，好报对码；DEFAULT TO HIGHEST BAR = BAR 全关时依赖码可改跟最高 BAR，不是把 BAR 改写成协议 — **§65 新开**）；A Vendor PMS（OPERA Cloud 26.2 *Managing Profile Channel Negotiated Rates*：渠道 access code / GDS·OWS 出示协议 — **§65 新开**；渠道协议 ≠ Brand.com BAR）；A Vendor RMS（IDeaS Glossary：BAR = 所有客人可订的最低非限制价；Qualified Rate 须资格；Unqualified = 无合同、无限制；Semi-Yieldable / last room available = 合同约束下**只有 BAR 同房型同 LOS 也关了才能关协议码** — **§65 新开**）；A Vendor PMS（OPERA Cloud 26.2 Profile Negotiated Rates：合同价挂 profile — **§64 指针**）；C 实践（roommaster 2026-08-03：Fixed vs Dynamic % off BAR；无固定行业折扣 % — **§64 指针**）；B / Hypothesis（Ahead Hold 779–799 首选 799；不要 BAR→499「对齐年标」；不要 BAR→399「冲量好签」）
> 配套：`advisor-playbooks/corporate-annual-rate-vs-bar.md`（P71 过程）· `recommendations/dont-anchor-bar-to-corp-rate.md`（主卡复用，不重写）· `metrics/corp-rate-vs-public-bar.md`（轻指标；**无默认折扣 %**，公式不重写）· `cases/sim-2026-corp-annual-rate-sat.md`（Simulation）
> 交叉：P26 已签码漏出 ≠ 本卡「重置公开 BAR=年标」· P48 政务 per-diem ≠ 商业年标 · P10 一场团 ≠ 持续账户 · P56 月末冲量 · P01 Ahead · P05 leftover · T-Gov / T-Package / T-Share / T-Parity（假尺子一族）
> 问题树：§78「年标/企业协议价不是公开 BAR」（过程路由已够；本卡给「为什么年标不是公开 BAR、资格闸/派生方向/LRA 不是定价权」）
> Advisor-First：只建议、只拆尺、只给问句。**不操作 PMS / 协议码 / RFP / GDS access code，不自动改价，不代签年标。**
> 状态：**理论 drafted**（2026-08-29 00:17 CST）。**不写 P72，不写新剧本。** 禁止：编华住年标 SOP / 默认折扣 % / 佣金% / LRA Fact % / 699；一夜 −15%；BAR→399「冲量好签」；BAR→499「对齐年标」；把 14/399/499/799 当市场 Fact；把 OPERA −25/125 写成中国折扣；把 IDeaS Semi-Yieldable 写成必须给 LRA；把 NEGOTIATED RATES 控制写成改公开 BAR；重写 `corp-rate-vs-public-bar.md` 公式；重写 P01–P71 正文（P71 仅头一行理论指针；邻卡仅文末一行）；操作 PMS。

---

## 0. 一句话

**年标 / 企业协议 / RFP 合同价是资格码，不是公开 BAR。**
系统能把协议挂在 profile 上、能从 Best BAR 派生、能给 GDS 打 access code、合同里还能写 LRA，只证明「有资格闸 / 派生层 / 渠道码 / 关码约束」，不证明「公开灵活价该跟到 499」或「为了好签先 dump 到 399」。高峰 / Pace Ahead：公开灵活尺 **Hold 779–799 首选 799**（Hypothesis / Simulation）。不要因为「对齐年标」把 BAR 写成 499，也不要因为「冲量好签」dump 到 399。本店折扣% / 华住字段 / LRA Fact% = **全部 NV**。

```
Naive（禁止）     年标就是 BAR；先砍到 499 销售好签；
                  399 冲量年标才谈得下来；LRA 所以公开价也该地板
本卡              先拆三把价（公开 BAR / 年标合同价 / 置换剩余）。
                  资格闸/派生/LRA ≠ 定价权。过程走 P71。
```

完成标准：用户说「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签」「年标就是 BAR」→ Situation 写成**三把价 + Pace/Remaining**；Diagnosis 写成年标不是公开 BAR、资格闸不是砍价令；What To Watch 写成公开 BAR 是否仍 Hold、年标是否被标成 BAR、折扣是否仍 NV。**不 dump 399、不 499 作新 BAR、不写 P72。**

顾问必须能直接说的三句（与 P71 / 主卡**同一套**，本卡不另发明第四条定价规则）：

```
1. 先问是已签/在谈的年标协议价（挂在账户 profile 上的合同价），还是公开 BAR。年标不是公开尺。本店折扣% / 华住字段 / LRA Fact% = **NV**，不编。
2. 高峰 / Ahead：公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。不要 BAR→499「对齐年标」，也不要 BAR→399「冲量好签」。
3. 已签码漏出走 P26。政务走 P48。一场团走 P10。月末走 P56。协议可 BAR-based 派生，BAR 不被反写。
```

独立默认（本库 Hypothesis）：**年标/RFP 回答不了「今晚公开灵活该卖多少」。** 它回答「这个账户还能不能用那条合同码、派生怎么算」。它**不**回答「公开 BAR 该砸到多少」。公开 BAR Hold 779–799 首选 799（Hypothesis / Simulation）。**禁止 BAR→399。禁止一夜 −15%。禁止 499 作新 BAR。禁止编默认折扣 %。禁止编 LRA Fact %。**

---

## 1. 三把价：公开 BAR / 年标合同价 / 置换剩余

顾问问题不是「系统里能不能配年标」，是：**屏幕上这个数，被允许改什么？**

| 尺子 | 是什么 | 被允许改什么 | **不允许** |
| --- | --- | --- | --- |
| **Public BAR** | 某日某房型最低合格公开灵活价（无资格） | Ahead Hold；真弱才 P05（仍这把尺） | 当成合同价；砍到「对齐年标」 |
| **Negotiated / 年标** | 挂 profile 的合同价：flat 或 BAR Based 派生 | 可留独立码；观察 gap；不当新 BAR | 写成公开 BAR；用 499/399 锚市场 |
| **Displacement remaining** | Capacity − 协议占用 − OOO 后，还能卖给付费 BAR 的房 | 高峰看置换；可建议限额/blackout（问合同） | 按协议 OCC 涨 BAR；为签年标 dump 公开栏 |

```
Public_BAR               = 799     # Simulation：公开灵活
Negotiated_shelf         = 499     # Simulation：年标/RFP 合同价（不是新 BAR）
Gap                      = Public_BAR − Negotiated_shelf   # 尺在 metric，不重写；不是必须折扣指令
```

**799 / 499 / 399 只允许出现在 Simulation**，不是本店 Fact，不是华住年标默认。

混淆三把价会同时拧坏 **公开尺** 与 **账户码**：把「协议 499」读成「我们 BAR 就是 499」，或把「销售要签」读成「公开栏必须先地板」。

OPERA 26.2 *BAR Based Rates*（A，§65 **新开**）：BAR Based 是 **dependent**，从 Best BAR 派生；**不能**同时标成 BAR。公司例：Best BAR 125 减 25 → 100。**方向采用：协议骑在 BAR 上，BAR 不被改写成协议价。** $125 / −$25 **不进中国 Fact，不进默认店规。**

---

## 2. 资格闸 / 派生 / 渠道码是账户过程，不是定价权

厂商把「年标」做成**账户合同 + 派生层 + 渠道 access**。没有一家被打开的官方页把它写成「协议价默认等于 BAR」或「为了签年标必须先砍公开灵活」。

| 源 | 厂商实际说了什么 | 顾问读法 |
| --- | --- | --- |
| OPERA Cloud 26.1 *Configuring Rate Codes*（§65 **新开**） | Negotiated 勾选：该码**只**作协议价，必须挂 guest / company / source / travel agent profile | **资格闸。** 未挂 profile 不应作为公开 BAR |
| OPERA Cloud 26.2 Controls — Rate Management（§65 **新开**） | NEGOTIATED RATES：价码存 profile；Look to Book 对该账户出示合同价，好报对码 | **报对码 ≠ 改公开 BAR。** 出示给合格来电，不是把 Brand.com 写成 499 |
| 同页 DEFAULT TO HIGHEST BAR | BAR 全关时，依赖码可改跟**最高** BAR，而不是退回自己的 rate detail | **父尺仍是 BAR。** 关 BAR 时怎么算派生，不是把 BAR 改写成协议 |
| OPERA Cloud 26.2 *BAR Based Rates*（§65 **新开**） | BAR Based 从 Best BAR 派生；BAR Based **不能**同时标 BAR；公司例 −25 off 125 | **派生方向 BAR→协议。** 不是「协议贵了/便宜了所以倒过来砍 BAR」 |
| OPERA Cloud 26.2 *Channel Negotiated Rates*（§65 **新开**） | 给 OWS / GDS 发 access code，按 profile 日期校验 | **渠道协议码。** 漏到公开 OTA → P26，不是把 Brand.com 对齐到 access code |
| OPERA Profile Negotiated Rates（§64 指针） | negotiated = contracted on profile；Look to Book 链接该 profile 才出示 | 合同价桶。不是公开灵活 |
| IDeaS Glossary（§65 **新开**） | BAR = 所有客人可订的最低非限制价；Qualified 须资格；Unqualified 无合同 | **公开 vs 资格** 是两把尺。资格码不是 BAR |

```
画面：协议 499 挂在公司 profile / GDS 有 access code / 销售说「先对齐」
Naive：BAR 就是那个价；先砍公开栏好签
本卡：资格闸、派生、渠道码都是账户过程。定价权在公开 BAR + Pace，不在合同按钮。
```

```
Negotiated checkbox / profile link   → 资格闸（谁能看见这条码）
BAR Based −flat or %                 → 派生（从 BAR 算出协议）
Channel access code                  → 分销出示（不是 Brand.com）
Public BAR                           → 日历夜公开灵活价  ← 本卡默认 Hold
```

华住 / 本店折扣% / LRA 是否给了 = **NV，不编。** UI 字段是 OPERA 的，不是本店报表名。

---

## 3. LRA / Semi-Yieldable 是关码约束，不是砍公开 BAR

IDeaS（A Vendor RMS，§65 **新开**）：**Semi-Yieldable Rates** = 常为批发或企业协议的资格码；合同约束下，**只有**同一房型、同一 LOS 的 BAR 也不可订了，才能把这条资格码关掉。也叫 last room available accounts。

读法：

- LRA 回答的是：**高峰还能不能关这条协议码**（库存/关码权）。
- LRA **不**回答：公开 BAR 该不该跟到年标，更不回答该不该 dump 到 399。
- 给了 LRA → 高峰协议可能一直开到最后一间；这是**置换成本**，该在签合同时谈 blackout / 限额 / 不加 LRA，不是事后把 Brand.com 写成 499。
- 没给 LRA（NLRA）→ 高峰可关协议码、留 BAR。本店给没给 = **NV，问，不编 Fact %。**

```
LRA / Semi-Yieldable     → 关协议码的闸（合同）
Public BAR               → 公开灵活价（Pace）
Naive                    → 「有 LRA 所以公开价也该地板」
本卡                     → 关码约束 ≠ 定价权。Ahead 仍 Hold 公开 BAR。
```

roommaster（C，§64 指针）：Fixed flat vs Dynamic % off BAR；closed code；restrict；核验；不漏出。**无固定行业折扣 %。** 方向采用。检索到的买方侧 10–30% / LRA 溢价表 **不进中国 Fact，不进本库档。**

---

## 4. 本店年标 ≠ 政务（P48）≠ 漏出（P26）≠ 一场团（P10）

四边都在「协议价」附近，对象不同。塌成「反正都是便宜合同」会开错杠杆。

| | **P71 / 本卡（重置公开尺=年标）** | **P48（政务）** | **P26（漏出）** | **P10（一场团）** |
| --- | --- | --- | --- | --- |
| 对象 | 要把公开 BAR 写成/跟到商业年标，或为签年标先 dump | 差旅/per-diem 资格 | 已签码出现在高峰/OTA | 单场团询 |
| 尺 | 公开 **BAR** | 非协议 remaining + Pace | 围栏/blackout | 置换 |
| Ahead 默认 | **Hold 公开 BAR** 779–799 首选 799 | Hold；不按协议 OCC 涨 | 高峰关漏出码；不改 BAR | Counter/拒，不改 BAR |
| 禁止 | 499 作新 BAR；BAR→399 冲量 | BAR=GSA/$110/协议价 | 用漏出价砍公开 BAR | 一场团价当永久 BAR |

顾问第一闸永远是：**这是要改公开尺，还是已签码漏了，还是政务，还是一场团？** 漏出 → P26。政务 → P48。一场团 → P10。月末 blanket → P56。本店要把年标叫 BAR / 要砍对齐 / 要冲量地板 → 本卡 / P71。

---

## 5. 假尺子一族：「年标就是 BAR / 对齐年标 / 冲量好签」

本卡不是新怪现象，是同一族的下一张：**屏幕上的合同数被当成定价按钮。**

| 卡 | 画面上的数 | 真正的杠杆 |
| --- | --- | --- |
| **T-Share** | 月报 RGI / MPI | 该夜 Pace |
| **T-Parity** | 渠道价差 | 便宜侧/映射；Brand.com 仍 Pace |
| **T-Package** | 含早 899 / 套餐 399 | 公开 EP + Pace |
| **T-Gov** | 差旅标准 / GSA $110 | 非协议 remaining + Pace |
| **本卡 T-Corp** | 「年标 499 / 先对齐 / 399 好签 / LRA」 | **公开 BAR + Pace**；不是年标当 BAR 令，也不是 dump 399 令 |

「BAR 跟到年标」= 把 **资格层（账户合同）** 当成 **公开灵活价**。尺子在 499 上，动作却打在 **今晚公开 BAR** 上 → 同类误读。

「399 冲量好签」是另一把假尺子：把**公开 dump** 当成买合同的入场券。合同该谈的是账户码、blackout、LRA 是否给，不是把 Brand.com 写成地板。

---

## 6. Diagnose → Advise：年标被允许改什么

用户原话：「BAR 跟到年标」「先 499 对齐协议」「399 冲量好签」「年标就是 BAR」。

```
Situation
  钉三件事：①用户说的「BAR」是公开灵活还是年标/RFP 合同价；
            ②拟议是「改尺 / 对齐 / 冲量地板」还是「给该账户单独协议码」；
            ③Pace / Remaining。
  缺折扣% / LRA → 问，不编华住字段。

Diagnosis
  年标/RFP 已经发生（或在谈）之后，它被允许改的是：
    (1) 故事类型（混用尺 vs 对齐 499 vs 冲量 399 vs 漏出 vs 政务 vs 一场团 vs 真弱）
    (2) 问句（§7）
    (3) 默认路径：Ahead → 拆年标 vs 公开 + Hold 公开 BAR
    (4) 是否先拆 P26 / P48 / P10 / P56 ——对象动作，不是砍 BAR
  它不被允许改的是：BAR→399；BAR→499；一夜 −15%；发明华住年标 SOP / LRA Fact %。

What To Watch
  公开 BAR 是否仍 Hold；年标是否被标成 BAR；24h 公开 Pickup；折扣/LRA 是否仍 NV
  不是「年标挂出去了就算改完 BAR」
```

过程六形（A 混尺 / B 对齐 499 / C 冲量 399 / D→P26 / E→P48 / F→P10/P56）走 **P71**，本卡**不重复 P71 正文**。

Ahead 或仍紧 → **拆尺 + Hold 公开 BAR**；真 Behind 且 remaining 厚 → **P05**，理由写 Pace，尺仍是公开 BAR。幅度仍走 `pricing/how-much-to-move.md`。**禁止一夜 −15%。禁止 BAR→399。禁止 499 作新 BAR。禁止 P72。**

---

## 7. 顾问要问的（ask-list · 全部 NV，本卡不代答）

| # | 问句（可直接说给酒店） | 缺了会怎样 | 状态 |
| --- | --- | --- | --- |
| 1 | 你说的「BAR」是 **公开灵活** 还是 **已签/在谈年标**？ | 混用尺；把合同价当公开价 | **NV**（用户能答就钉） |
| 2 | 当前公开 BAR 与年标/RFP 各是多少？flat 还是 % off BAR？ | 会编默认 %；或把 499 当必须 | **NV** |
| 3 | 拟议是对齐公开尺、冲量地板，还是只给该账户一条协议码？ | 误入本卡 / P26 | **NV** |
| 4 | 这条码有没有 Negotiated 旗、是否必须挂 profile？渠道有没有 access code？ | 把资格闸/渠道码写成改 BAR | **NV** |
| 5 | 合同有没有 LRA / blackout / 周末是否可用？ | 把 LRA 写成必须 dump 公开栏 | **NV** → 高峰关码问合同，不编 Fact % |

补充可问（同样 NV）：已签码是否漏出高峰/OTA（→P26）；是不是政务（→P48）；是不是一场团（→P10）；月末 blanket（→P56）。**折扣%、LRA Fact%、佣金%、699、华住年标 SOP：不编，问。**

---

## 8. 常见误读

| 误读 | 实际 |
| --- | --- |
| 年标就是公开 BAR | BAR = 无资格公开灵活。年标是资格码 |
| 先砍到 499 销售好签 | 对齐 = 把公开尺写成合同价。拒绝 |
| 399 冲量年标才谈得下来 | 公开 dump 买合同。拒绝。合同谈账户码，不谈 Brand.com 地板 |
| Look to Book 出示了协议所以 BAR 变了 | NEGOTIATED RATES 是报对码，不是改公开栏 |
| BAR Based −25 所以公开价也该 −25 | 派生方向 BAR→协议。倒过来砍锚 = 反了 |
| BAR 全关了依赖码跟最高 BAR = 该 dump | DEFAULT TO HIGHEST BAR 是关父码时怎么算派生，不是新 BAR |
| GDS access code 出去了官网要跟 | 渠道协议 → 漏了走 P26，不砍 Brand.com |
| 有 LRA 所以公开价也该地板 | LRA 是关协议码的闸，不是公开 BAR 按钮 |
| 政务差旅标准就是年标 | **P48**。客源不同 |
| 周末散客能订到协议 | **P26**。漏出，不是改尺 |
| 这单一场 50 间 | **P10**。不是年标 |
| 月底差预算所以先对齐年标 | **P56**。账期 ≠ 协议锚 |
| 没有行业折扣 % 就不能管 | 无默认 %。先拆尺 + Hold 公开 BAR |
| 编一套华住年标 SOP 就能 Advise | **禁止。** 折扣 / LRA NV |

---

## 9. Simulation（诊断例，不是新店 Fact）

复用 P71 `cases/sim-2026-corp-annual-rate-sat.md`，**不是**另开一家酒店。

```
# Simulation only — 180 / 14 / 399 / 499 / 799
# （399 = 被拒绝的 dump；499 = 被拒绝的「对齐年标」新 BAR；799 = Hypothesis/Simulation 公开 BAR）
Stay Date                    = 周六
Pace                         = Ahead；remaining 14
公开 BAR                     = 799
年标/RFP                     = 499
销售拟议                     = 「对齐年标」砍 BAR 到 499；或「冲量好签」dump 399
```

读法（与 P71 同句）：499 是年标合同价，不是 BAR。399 是地板，不是公开灵活。Advise：拆年标 vs 公开；**Hold 779–799 首选 799**；拒 **499** 作新 BAR；拒 dump **399**；折扣 / LRA **NV**。
**180 / 14 / 399 / 499 / 799 只允许出现在 Simulation**，不是行情 Fact，不是华住年标默认，不是推荐 dump。**399 是被拒绝的 dump，不是推荐 BAR。499 是被拒绝的「对齐年标」新 BAR，不是推荐 BAR。**

---

## 10. 证据（2026-08-29 00:17 核）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| BAR Based 从 Best BAR 派生；BAR Based 不能同时标 BAR；公司例 −25 off 125 | **A Vendor PMS** | **Known 派生方向。** $ 例不采用 | OPERA Cloud 26.2 BAR Based Rates（**§65 新开**；升级 §64 21.4） |
| Negotiated 勾选 = 该码只作协议价，必须挂 profile | **A Vendor PMS** | **Known 资格闸。** ≠ 公开 BAR | OPERA Cloud 26.1 Configuring Rate Codes（**§65 新开**） |
| NEGOTIATED RATES：价码存 profile，Look to Book 对该账户出示合同价 | **A Vendor PMS** | **Known 报对码。** ≠ 改公开 BAR | OPERA Cloud 26.2 Controls Rate Management（**§65 新开**） |
| DEFAULT TO HIGHEST BAR：BAR 全关时依赖码可跟最高 BAR | **A Vendor PMS** | **Known 关父码时的派生规则。** ≠ dump 令 | 同页（**§65**） |
| 渠道 negotiated 用 access code 发给 OWS/GDS | **A Vendor PMS** | **Known 分销出示。** 漏出 → P26 | OPERA Cloud 26.2 Channel Negotiated Rates（**§65 新开**） |
| negotiated = contracted on profile | **A Vendor PMS** | **Known 合同价桶** | OPERA Profile Negotiated Rates（**§64 指针**） |
| BAR = 所有客人可订的最低非限制价；Qualified 须资格；Semi-Yieldable = BAR 同组合也关了才能关协议码 | **A Vendor RMS** | **Known 公开 vs 资格 vs LRA 关码闸** | IDeaS Glossary（**§65 新开**） |
| Fixed vs Dynamic % off BAR；无固定行业折扣 % | **C 实践** | 方向 Known。**% 不采用** | roommaster 2026-08-03（**§64 指针**） |
| Ahead Hold 公开 BAR；拒 499 对齐；拒 399 冲量 | **B / Hypothesis** | 本库 P71 + Pace 闸 | — |
| 本店折扣% / 华住字段 / LRA Fact% / 佣金% | — | **NV。不编。** | — |

本小时新开：OPERA Cloud 26.2 BAR Based Rates + OPERA Cloud 26.1 Configuring Rate Codes（Negotiated 勾选）+ OPERA Cloud 26.2 Controls Rate Management（NEGOTIATED RATES / DEFAULT TO HIGHEST BAR）+ OPERA Cloud 26.2 Channel Negotiated Rates + IDeaS Glossary（BAR / Qualified / Unqualified / Semi-Yieldable）。§64 三页复用，不重锤。华住 SOP **未开、不编**。Prostay RFP 2027 Cloudflare 拦截，不当核页。买方侧 10–30% / LRA 溢价表不采用。

---

## 11. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-CORP-01 | 本店年标折扣 / 是 flat 还是 % off BAR / 是否只有协议、无公开 BAR | **NV。不代答。** 无则条件化，不编华住字段 |
| NV-CORP-02 | 本店是否给了 LRA / blackout / 周末是否可用 | **NV。** LRA 是关码闸不是 dump 令 |
| NV-CORP-03 | Negotiated 旗 / profile 是否挂上 / 渠道 access code | **NV。** 旗和码不是 BAR |
| NV-CORP-04 | 399/499 来源（对齐话术 / 促销 / 嵌套低档 / 错映射） | **NV。** 先 Hold 公开 BAR |
| NV-P71-01… | P71 已挂（华住字段 / 折扣% / LRA Fact% / 佣金%） | 仍 NV |

---

## 12. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-29 00:17 CST | 首版。T-Corp = 年标不是公开 BAR。三把价；资格闸/派生/LRA≠定价权；P48/P26/P10 孪生；假尺子一族；不重复 P71 六形。**不写 P72。** 14/399/499/799 Simulation only。399 = 被拒绝的 dump。499 = 被拒绝的「对齐年标」新 BAR。 |

---

## 13. 交叉（不改 P01–P71 正文；P71 仅头一行，邻卡仅文末一行）

- **P71** `advisor-playbooks/corporate-annual-rate-vs-bar.md`：过程剧本（六形 A–F、Intake、Re-evaluation）。**本卡给「为什么」与 Diagnose 尺**，三句同一套。399-rejected / 499-rejected / 799-Hypothesis **不改**。
- **主卡** `recommendations/dont-anchor-bar-to-corp-rate.md`：复用，不重写。
- **轻指标** `metrics/corp-rate-vs-public-bar.md`：公开 BAR vs 年标 gap；无默认折扣 %。本卡不重写公式。
- **P26**：已签码漏出高峰/OTA。本卡 / P71 = 要把公开尺写成/跟到年标。
- **P48 / T-Gov**：政务 per-diem ≠ 商业年标。
- **P10**：一场团 ≠ 持续账户。
- **P56**：月末冲量 ≠ 协议锚。
- **P01 / P05 / P45**：Ahead Hold 公开 BAR；真弱才 leftover；早会一个动作通常是纠正 BAR≠年标 + Hold，不是对齐/冲量。
- **T-Share / T-Parity / T-Package / T-Gov**：假尺子同族、对象不同。
- **禁止一夜 −15%。禁止 BAR→399。禁止 499 作新 BAR。禁止 P72。禁止编华住年标 SOP、默认折扣 %、LRA Fact %、佣金%、699。**

> 交叉指针（2026-08-30 16:17，不改正文）：假尺子同族下一张 **T-Wholesale** `theory/wholesale-net-vs-bar.md`（批发/TA/GDS 净 ≠ 公开 BAR；年标仍本卡）。过程仍 **P81**。不写 P82。

> 交叉指针（2026-09-01 08:17，不改正文）：假尺子同族下一张 **T-Employee** `theory/staff-employee-rate-vs-bar.md`（员工价/付费员工折扣 ≠ 公开 BAR；年标仍本卡）。过程仍 **P80**。不规定 P88。

> 交叉指针（2026-09-02 16:17，不改正文）：Rate Floor/Min·Max/品牌底 Diagnose 走 **T-Floor**；年标/议价仍本卡 **T-Corp**。不开 P88。
