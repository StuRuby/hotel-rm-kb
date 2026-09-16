# Government / Negotiated Per-Diem｜政务/差旅协议是有房价的合同价，不是 BAR，不是 Comp

> 资产：T-Gov / T10 伴生理论卡  
> 路径：`theory/government-negotiated-rate.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR Glossary Contract Rooms / Transient / Group / Segmentation — **无** Government KPI）；A **US Fact**（GSA FTR 26-01 标准 lodging $110，**不是中国**）；A 框架（财行〔2013〕531 差旅办法：限额内凭票；**本页无**分城市/职级现行限额表）；B（HSMAI BAR = 非资格公开底价；negotiated / government ID 是围栏合同价，不是 BAR）  
> 配套：`metrics/government-negotiated-rate.md` · `recommendations/dont-anchor-bar-to-gov-rate.md` · **P48** `advisor-playbooks/government-negotiated-rate.md` · T-Comp / P47 · P31 · P37 · P26 · P01 / P05  
> 问题树：§54 「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」  
> 状态：**P48 drafted**（2026-08-25 02:17 CST）· `advisor-playbooks/government-negotiated-rate.md`（主卡复用 `dont-anchor-bar-to-gov-rate.md`，不重写卡）。现行分城市/职级住宿费限额表 **仍 NV**。禁止：编华住政务价 / 398；把 GSA $110 当中国 BAR 锚；把 2015/2016 通知当现行表 Fact；发明 STR「Government OCC」公式；操作 PMS/RMS/OTA。

---

## 0. 一句话

**政务/差旅协议是有房价的合同价，不是 P47 免费房，也不是公开 BAR。**  
OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。GSA $110 与任何未打开的中国限额表都不是本店 BAR 锚。高峰先做置换：付费 BAR 是否被协议占满；协议可 blackout / 限额 / 拒超售（Hypothesis 过程）。禁止为了冲 OCC 把 BAR 砍到协议价。

```
Naive（禁止）     政府团把 PMS OCC 打到 92% → 涨 BAR；销售要把 BAR 对到协议价或 GSA $110；前台把政府价当免费
本卡              协议是合同价桶。看非协议 remaining + Pace。不问用户本店协议价就不编。高峰置换，不砸 BAR。
P47 逆命题        Comp = $0 无关免费，不进 STR 历史 Sold。本卡有房价，进合同/协议桶，P47 不吃。
P31 逆命题        机组合同 ≠ 政务差旅协议。机组 extra 走 P31。
P37 逆命题        永久宿舍 / Permanent HU 出 Available。本卡是可售库存上的协议价。
```

完成标准：用户说「政府协议住满了要不要涨」「BAR 要不要跟到差旅标准」「这批公务员算不算免费房」→ 先定性：有房价的合同价。不按那张 OCC 涨 BAR；拒绝把 BAR 锚到协议价或 GSA；有房价不进 P47。本店协议价用户没给就问，不编。限额表 NV 就不引用数字。不写 P48。

顾问必须能直接说的三句：

```
1. 政务/差旅协议是有房价的合同价，不是 P47 免费房；OCC 再高也不按虚荣 OCC 去涨 BAR，也不把政府价改成 complimentary。
2. 不要把 GSA $110 或任何未打开的中国限额表当成中国 BAR 锚；本店协议价用户没给就问，不编。
3. 高峰/周末：先做置换（付费 BAR 是否被协议占满）。协议可 blackout / 限额 / 拒超售（Hypothesis 过程）；禁止为了冲 OCC 把 BAR 砍到协议价。
```

---

## 1. 房价类：协议 ≠ BAR ≠ Comp

| 桶 | 有没有房价？ | 是不是公开 BAR？ | 进 STR 哪一类？ | 顾问默认 |
| --- | --- | --- | --- | --- |
| **公开 BAR** | 有 | **是**（非资格、公开发布） | Transient（S） | 本卡定价对象。Hold **779–799 首选 799** 只 Hypothesis/Simulation |
| **政务/差旅协议 / per-diem 合同价** | **有** | **否**（资格码 / 合同 / ID） | 视合同：散客协议常 Transient；≥10 且有协议可 Group；**仅当**「>30 天、无论用不用保证付款的固定块」才可能进 Contract（S）。**不要发明 STR Government KPI** | 合同价桶。高峰可 blackout/限额（Hypothesis）。不改成 BAR，不改成 Comp |
| **无关免费 / 请客房** | **$0** | 否 | 不进 STR 历史 Sold（S） | **P47** |
| **永久宿舍 / Permanent HU 6+ 个月** | 长期不在可租池 | 否 | 不进 Sold；HotStats：Available 不含（A 转述） | **P37** |
| **机组合同块** | 有（合同） | 否 | 常见 Contract（S：airline crews 是 Contract 例） | **P31**。不是本卡「政务」 |

HSMAI Academy Glossary（B，2026-08-25 **打开**）：BAR = **non-qualified, publicly available** baseline。折扣/套餐相对 BAR 加减。  
HSMAI Americas GDS audit（B，同日 **打开**）：Negotiated rates = 与特定公司签约的保密价；ID-required 可含 **government**（须出示证件）。BAR 之下不应再有未围栏更低公开价。

**因此：政务价是围栏合同价，不是公开 BAR，也不是 complimentary。**

---

## 2. STR：Contract 指针，不发明 Government KPI

STR Glossary（S，2026-08-25 **重开**）：

- **Contract Rooms**：A consistent block of rooms committed at a stipulated contract rate for an **extended period over 30 days** with **payment guaranteed regardless of use**, such as for **airline crews and permanent guests**. Transient, Group and Contract 是 Segmentation 的 **三种** demand type。
- **Group**：Typically 10+ rooms/night, signed agreement.
- **Transient**：individuals or groups occupying **less than 10** rooms per night.

页上 **没有** 「Government」作为第四种 demand type，也 **没有** Government OCC / Government MPI 公式。

顾问用法：

- 长约保底块（>30 天、无论用不用都付钱）→ 可能报 **Contract**（机组常见；政务长包宿舍若符合才进，否则问）。
- 按晚走的差旅协议、政务码、GSA per-diem 资格价 → **不要**自动写成 Contract，更不要发明「STR Government OCC」。店内用 **协议占用份额**（Hypothesis，见指标卡）。
- 政府团 10+ 且有协议 → 可按 Group 过程看置换（P10），仍不是 Comp。

---

## 3. GSA $110 = US Fact，不是中国 BAR

GSA Per Diem Bulletin **FTR 26-01**（A **US Fact**，2026-08-25 **重开**）：

> …the standard lodging rate also remains unchanged at **$110**. …effective … travel performed on or after October 1, 2025, through September 30, 2026.

GSA per diem rates 查询页（A，同日 **重开**）：CONUS 联邦差旅 lodging + M&IE 报销上限。标准 CONUS + ~300 NSA。Last updated Apr 13, 2026。

GSA 新闻稿 2025-08-15（A 交叉）：FY2026 维持 FY2025 水平。

HVS 2025/26 Federal Per-Diem Update（B Vendor，同日打开）：标准 CONUS lodging **$110**/晚、M&IE $68。酒店估值/联邦客源市场参考。**不是中国 SOP。**

**禁止：** 把 $110、178 合计、或任何 NSA 表写成中国政务价、华住价、本店 BAR。用户没给本店协议价 → **问，不编。**

GSA 是**旅客报销上限**，不是酒店必须卖这个价（GSA FAQ 检索摘要：hotels are not required to honor federal per diem — 本卡不把 FAQ 未整页打开的句子升为 S）。中国店与 GSA 无默认映射。

---

## 4. 531 = 框架。现行限额表仍 NV

《中央和国家机关差旅费管理办法》财行〔2013〕531 号（A 框架；§22 已开；本轮 WebSearch 摘要复核，WebFetch 本小时 timeout）：

- 住宿费在标准**限额之内凭发票据实报销**。
- 财政部分地区、分级别制定限额，适时调整。
- **办法本身不是分城市/职级现行限额表。**

本小时检索（2026-08-25 00:17）：

- `财政部 调整中央和国家机关差旅住宿费标准 通知 site:gov.cn`
- `财行 差旅住宿费标准 2024 2025 2026 site:gov.cn`

**未打开** 2024 / 2025 / 2026 官方 PDF/HTML **带分城市/职级数字** 的现行表。2015 497 / 2016 71 封面 HTML 能检索到，**附表 xls 未打开**；按 20:17 纪律：**不把 2015/2016 记忆当现行 Fact。** 现行分城市/职级住宿费限额表 **仍 NV**。政务协议酒店价目录 **仍 NV**。华住/锦江政务价 **不编**。

顾问：用户问「BAR 要不要跟到差旅标准」→ 先问**本店签的协议价**。没有表、没有合同，不引用任何城市限额数字。**不写 P48。**

---

## 5. 置换（Displacement）— 可调用、不依赖中国表

高峰/周末，协议房占的是**本来可以卖 BAR 的物理房**。逻辑与 P10/P26/P31 同类，不需要限额表：

```
付费 BAR 期望     vs  协议块（有房价，通常更低）
非协议 Remaining  =  Capacity − occupied（含协议） − OOO
看的是：协议有没有把付费 BAR 挤出；不是 PMS OCC% 好看不好看
```

| 情况 | 默认 Advise（Hypothesis 过程） |
| --- | --- |
| 协议占满、非协议 remaining 紧、Pace Ahead、周末/活动 | **限额 / 关协议 / blackout 该晚**；**Hold BAR**（779–799 首选 799，Hypothesis）。不按 92% Increase BAR |
| 销售要把 BAR 对到协议价或 GSA $110 | **拒绝。** 协议价不是公开 BAR |
| 前台把政府价当免费 | **P47 不吃。** 有房价走合同/协议桶 |
| 弱市、协议填的是本来卖不掉的房 | 可留协议；**仍不把 BAR 砍到协议价** 去冲 OCC |
| 用户没给协议价 / 块量 | **问，不编 480 / 398 / $110 中国锚** |

禁止：一夜 −15% 当新 BAR；为冲 OCC 把 BAR 砍到协议价。

---

## 6. 形（顾问可点名，不是 P48 剧本）

- **A 假高峰**：政府团把 PMS OCC 打到 90%+ → **不按那张 OCC Increase BAR**。看**非协议** remaining + Pace。  
- **B 假剩余/砸价**：销售要把 BAR 对到协议价或 GSA → **拒绝**。协议价不是公开 BAR。  
- **C 误标 Comp**：前台把政府价当免费 → **P47 不吃**。有房价走合同/协议桶。  
- **D 高峰置换**：周六 BAR 799、协议 480（480 **仅 Simulation**，不是中国限额 Fact）占满 → 建议限额/关协议/blackout，Hold BAR 779–799 首选 799。  
- **E 永久宿舍** → P37。无关请客房 → P47。机组合同 → P31。本卡只管政府/差旅协议。

---

## 7. Advisor-First

- 不操作 PMS / RMS / OTA。不改政府码、不执行 blackout，只**建议**。  
- 本店协议价、块量、是否 last-room-available、是否可周末 blackout = **问用户**。  
- 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答：**不要把 BAR 锚到协议价；不要按协议抬高的 OCC 涨；不要把协议当 Comp。**  
- **P48 未写。** 没有现行限额表就不写「该市处级限多少所以卖多少」。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-GOV-01 | 中国现行分城市/职级差旅住宿费限额表（官方 PDF/HTML 带数字） | **仍 NV。** 不引用 2015/2016 记忆。不写 P48 |
| NV-GOV-02 | 本店政务/差旅协议价、是否周末可用、可否 blackout | 问合同；不编 480 / 398 |
| NV-GOV-03 | 中国政务协议酒店 / 会议定点结算价目录 | **仍 NV。** 不发明华住政务价 |
| NV-GOV-04 | 本店 PMS 是否把政府价误标 complimentary | 问有没有房价；有价 → 本卡，不是 P47 |
| NV-GOV-05 | 该协议在上报 STR 时进 Transient / Group / Contract 哪一桶 | 问块是否 >30 天保底；不发明 Government KPI |
| NV-GOV-06 | GSA FAQ「酒店无义务接受 per diem」整页 | 检索摘要有；本轮未把 FAQ 当 S |

---

## 9. 兼容（不重写 P01–P47 正文）

- **P47**：gratis $0、不进 STR 历史 Sold。本卡**有房价**。误标 Comp → 纠正桶，不走 P47 涨/砸规则当免费。  
- **P37**：永久 HU 缩 Available。本卡协议房仍在可售池、只是低价合同。  
- **P31**：机组 allotment / extra。Crew ≠ 政务差旅。  
- **P26**：企业协议漏出周末。本卡是政府/差旅资格，机制类似（高峰可 blackout），客源不同。  
- **P01 / P03**：付费**非协议** remaining + Pace，不是含协议的 PMS 92%。  
- **P05**：leftover dump 对象是付费空房。禁止把 BAR 砍到协议价当 dump。  
- **T20**：不砸品牌底去冲 OCC。无地板不发明 398 / 699。
> 交叉指针（2026-08-29 00:17，不改正文）：Diagnose「为什么年标不是 BAR」走 **T-Corp** `theory/negotiated-corp-vs-bar.md`。过程仍 **P71**。不写 P72。
