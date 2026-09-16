# Meeting-with-Rooms｜会带房先拆三笔：厅/会 vs 餐 vs 占房

> 资产：T-Meet / T13×T18 伴生理论卡  
> 路径：`theory/meeting-with-rooms.md`  
> 能力层级：Understand → Diagnose → Advise  
> Last Verified：2026-08-25  
> 知识类型：Theory + Best Practice + Hypothesis  
> 证据等级：S（STR P&L：Function Room hire / AV = Other F&B Revenue，§12 已开、本轮重开）；A（HSMAI RevPAS **词条**；HSMAI Events 课名）；B Vendor（IDeaS / Duetto 公开页：团置换 + ancillary/meetings，**不抄公式**）；C/D（中文贸易博文方向，**不是 SOP**）  
> 配套：`metrics/meeting-with-rooms.md` · `recommendations/dont-dump-bar-for-meeting-rooms.md` · `cases/sim-2026-meeting-10-rooms-sat.md` · P10 · P30 · T18 · `group/group-displacement.md`  
> 问题树：§56 「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」  
> 状态：**P50 drafted**（2026-08-25 10:17 CST）· `advisor-playbooks/meeting-with-rooms.md`（主卡复用 `dont-dump-bar-for-meeting-rooms.md`，不重写卡）。会带房最小数据模板 **仍 NV**。禁止：编华住 SOP / 会带房价表；编餐毛利、餐标、厅租行情、佣金%；把 RevPAS 当 BAR 公式；把 399/80pax/10 当市场 Fact；操作 PMS/RMS/OTA/宴会系统。

---

## 0. 一句话

**会带房 = 一场要功能空间的会议，外加（常常很小的）客房块，销售常用便宜房「去赢会议」。**  
先拆三笔：**厅/会** vs **餐** vs **占房**。没有用户给出的厅+餐**贡献**数字，不接低价房块去赢会议。工作日空房多：会议可以接；客房仍按 P10 置换，**不要把公开 BAR 砍成会带房价**。周末/高峰：10 间会带房若挤掉能卖满的 BAR，默认 **Counter（提房价或缩间数）或拒房留会**，不是 Accept 低价占房。Hold 公开 BAR **779–799 首选 799**（Hypothesis / Simulation）。

```
Naive（禁止）     80 人只要 10 间，399 赢下会议；会议室包了客房随便给；BAR 跟到会带房价
本卡              先拆厅 / 餐 / 占房。无贡献数字不接低价房块。客房走置换。不改公开 BAR。
P10 逆命题        客房-only 团评。本卡多一笔功能空间；房块仍用 P10 式。
P30 逆命题        婚宴/社交宴会。会带房是会议+小房块，不是喜宴。
T18 逆命题        通用「低房价高餐饮」闸。本卡专点会带房：赢会 ≠ dump BAR。
P22 逆命题        会展肩日市场形状。本卡是本店一场会议询价。
P48 逆命题        政务/差旅协议价。本卡不是 per-diem 块。
```

完成标准：用户说「80 人会议只要 10 间房」「会议室包了客房随便给」「会带房 399 要不要改 BAR」→ 先拆三笔。无厅+餐贡献 → 不 Accept 低价房。高峰 Counter/拒房留会。不把公开 BAR 写成 399。**不写 P50。**

顾问必须能直接说的三句：

```
1. 会带房先拆三笔：厅/会 vs 餐 vs 占房。没用户给的厅+餐贡献数字，不接低价房块去「赢会议」。
2. 工作日空房多：会议本身可以接；客房仍按 P10 置换，不要把公开 BAR 砍成会带房价。
3. 周末/高峰：10 间会带房若挤掉能卖满的 BAR，默认 Counter（提房价或缩间数）或拒房留会，不是 Accept 低价占房。Hold 公开 BAR 779–799 首选 799。
```

---

## 1. 会带房是什么（不是那几张已有卡）

| 桶 | 是什么 | 顾问默认 |
| --- | --- | --- |
| **会带房 / meeting+rooms** | 会议要功能空间 **and** 一小块客房（常 10 间量级），销售用便宜房赢会 | 本卡。三笔拆开。房块走置换 |
| **客房-only 团** | 只要房、不要厅 | **P10** |
| **婚宴 / 社交宴会** | 喜宴/生日/晚宴为主，占房是宾客块 | **P30** |
| **TRM 通用闸** | 低房价高餐饮能否翻客房 Reject | **T18** / `accept-low-room-for-fnb.md`。本卡是会带房特化，不重写 T18 |
| **会展肩日** | 城市展会前后的市场日 | **P22** |
| **政务/差旅协议** | 有房价合同码，不是一场会议询价 | **P48** |

中国贸易检索「会带房 会议 客房 收益」（C/D，方向）：国内会议型店会把小房块绑在厅上谈。**不是 SOP，不是华住价表。** 本库不发明「华住会带房 399」。399 / 80 pax / 10 间 **只 Simulation**。

---

## 2. 三笔（没有贡献就不接低价房）

```
会带房询价
  ├─ 厅 / 会     功能空间租金、时段、AV、布置（STR：Other F&B，不是客房）
  ├─ 餐          会议餐 / coffee break / 晚宴贡献（用户给；顾问不编毛利）
  └─ 占房        按夜房块 × 会带房价 vs 将被挤的 Transient Net
```

**硬闸：** 用户没给厅+餐**贡献**（利润，不是口号「餐很高 / 赢了会」）→ **不得**用低价房去赢会议。会议本身：若厅已付或用户给出空间贡献，**可以留会**。客房另算。

允许的用户输入：用户自己的贡献额，或用户**明确认领**的保守估计。顾问**不**代编毛利率、餐标、厅租行情、佣金%。

---

## 3. Displacement identity（按夜，客房侧）

会带房的客房决策 = P10 置换，加上会议贡献（用户）这一笔。**不要**用「10 间很少所以随便给」跳过按夜。

```
Displaced_t        = max(0, ExpectedTransient_t + MeetingRooms_t − Capacity_t)
RoomOppCost        = Σ_t Displaced_t × TransientNet_t
MeetingRoomNet     = Σ_t MeetingRooms_t × MeetingRoomRate_t   − 已声明佣金（无则 Unknown，不编）
NetDelta_rooms     = MeetingRoomNet − RoomOppCost − LOS_extra（点名肩日，给不出则 Unknown）
TRM NetDelta       = NetDelta_rooms + Space_contrib + F&B_contrib − Meeting_opp
                     （Space / F&B 必须用户给；无则那一笔 = 不进点结论）
```

公式骨架来自本库 `group/group-displacement.md`（Cloudbeds 公开式 B Vendor + 本库 Hypothesis）。IDeaS / Duetto 公开页（B Vendor，2026-08-25 **打开**）只作方向：接团要算置换 + ancillary；booked ≠ profitable。**不抄厂商逐步公式，不把「M&E 占酒店收入 60%」写成这家店 Fact。**

| 夜型 | 默认（Hypothesis） |
| --- | --- |
| **工作日、leftover 厚、市场冰** | 会议可接（厅付了或有空间贡献）。客房：仅当用户给出净贡献且 **net > 机会成本** 才 Accept 房块；**仍不把公开 BAR 改成 399** |
| **工作日、无贡献数字** | 留会（若厅付了）；**Counter 客房**（提价或缩间），不是 Accept 399 房块当「赢会成本」 |
| **周末/高峰、Pace Ahead、剩余紧** | 10 间也会挤 BAR。默认 **Counter 房价到 BAR 带或缩间 / 拒房留会**。Hold 公开 BAR **779–799 首选 799**。禁止 dump BAR |
| **假高峰 OCC** | 参会人把 PMS OCC 打高 ≠ 散客需求变强。**不要按那张 OCC Increase BAR。** 看 **transient remaining** |

---

## 4. 厅租不要双计（STR P&L）

STR *P&L Data Reporting Guidelines*（S，2026-08-25 **重开**；已在 source-map §12）：

> Function room hire and audiovisual (A/V) are "Other Revenue" because they support F&B events but aren't direct food/drink sales; they are non-consumable services (room rental, equipment) often bundled with banquets.

归在 **Other Food & Beverage**，不是客房收入。Historical Guidelines 同样把 meeting room rentals / AV 放进 F&B。

顾问：

- 套餐含厅 → 贡献只进 **一次**（厅或餐，按用户怎么认领），不要厅租再加一遍、客房再加一遍。  
- 厅租 ≠ 过夜客房。占房走客房置换；厅走空间贡献。  
- 本店厅租行情 **NV**，不编。

---

## 5. RevPAS 不是 BAR 公式

HSMAI Academy Glossary **RevPAS / Revenue per Available Space**（A **词条**，2026-08-25 **打开**）：

- 定义：meeting space 利用效率尺。Total Catering Revenue / Total Available Square Footage of Meeting Space。  
- Similar to RevPAR **作为空间效率类比**，不是酒店公开 BAR 的计算式。  
- **Grade A 术语名。** 本店坪效、今晚 BAR、会带房价 **都不要用 RevPAS 公式去算。** 没有本店面积与餐饮贡献就不要发明「本店 RevPAS」。C：若只当词条名提起、没有本店输入。

禁止：把 RevPAS 写成 BAR 779–799；编假 RevPAS 公式给这家 180 间店。

HSMAI Events Revenue Optimisation 三门课名（A 课名，§12 已开、本轮重开）：Understanding Rooms and Function Spaces / Upselling / Space Optimization。**不摘讲义。** 证明功能空间 RM 是协会课，不提供本店 SOP。

---

## 6. 形（顾问可点名，不是 P50 剧本）

- **A 用低价房赢会：** 销售 80 pax / 10 间 @399 vs BAR 799 → 用户没给 F&B/厅贡献 → **不 Accept 便宜房块。** 厅若付了或有空间贡献，会可以留；客房 Counter 到 BAR 带或缩间。399/80/10 **Simulation only。**  
- **B 假高峰 OCC：** 参会人把 OCC 打高 → **不要按那张 OCC Increase BAR。** 看散客 remaining + Pace。  
- **C 周末挤散客：** 周六会议+便宜房碰上压缩 → **Counter / 拒房**；不 dump 公开 BAR。Hold **779–799 首选 799**。  
- **D 工作日增量：** 周二冰、leftover 厚 → 会议可接；客房仅当用户给出 **net > 贡献/机会成本** 才 Accept 房块；**仍不把公开 BAR 改成 399**。无贡献 → Counter 客房。  
- **E 厅租双计：** 不要把功能空间加两遍（STR Other F&B vs 客房）。指针：§4 / source-map §12。  
- **F 误入：** 社交宴会 → **P30**。客房-only 团 → **P10**。政务 per-diem 块 → **P48**。会展肩日市场 → **P22**。

---

## 7. Advisor-First

- 不操作 PMS / RMS / OTA / 宴会系统。不改会带房码、不关散客、不执行 Counter，只**建议**。  
- 厅+餐贡献、房块按夜、本店会带房价 = **问用户**。没给就不编 399 / 华住价表 / 餐毛利。  
- 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答：**不要用低价房赢会去改公开 BAR；高峰 Counter/拒房留会。**  
- **P50 未写。** 没有本店会带房模板就不写「该卖多少会带房价」的满本剧本。

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-MEET-01 | 国内会议型「会带房」最小数据模板 / 华住 SOP / 会带房价表 | **仍 NV。不编。不写 P50** |
| NV-MEET-02 | 本店餐毛利、餐标、厅租行情、佣金% | 用户给贡献才进点；否则 Unknown |
| NV-MEET-03 | 本店功能空间面积、RevPAS 分母 | 不发明本店 RevPAS。词条 A，公式不当 BAR |
| NV-MEET-04 | 本店会带房块 cutoff / wash | 无史不编 %；Counter 加截止 |
| NV-MEET-05 | 厅是否已含在套餐（双计风险） | 问；STR：厅/AV = Other F&B |

---

## 9. 兼容（不重写 P01–P49 正文）

- **P10：** 客房-only 团评。会带房的**占房**仍用 P10 置换式；本卡多厅/餐拆分。  
- **P30：** 婚宴。会带房不是喜宴。  
- **T18 / `accept-low-room-for-fnb.md`：** 通用无贡献不翻盘闸。本卡沿用，并钉「赢会 ≠ dump BAR」。  
- **`group-displacement.md`：** 按日 Displaced 公式仍以那张卡为准。  
- **P22：** 城市会展肩日。本卡是本店一场会议询价。  
- **P48：** 政务协议价。本卡不是 per-diem。  
- **P05：** leftover dump 对象是付费空房。禁止把公开 BAR 写成 399 会带房价。  
- **P01/P03：** 看 **transient remaining**，不是含会带房的 PMS OCC。  
- **T20：** 不砸品牌底去赢一场会。无地板不发明 399。

---

## 10. 证据（2026-08-25 核）

| 论断 | 级 | 源 | URL |
| --- | --- | --- | --- |
| Function Room hire / AV = Other F&B Revenue | S | STR P&L Data Reporting Guidelines | https://www.costar.com/products/str-benchmark/resources/guidelines/pl-data-reporting-guidelines |
| RevPAS = catering revenue / available meeting sq ft；不是 BAR | A 词条 | HSMAI Academy Glossary RevPAS | https://academy.hsmai.org/glossary/revpas/ |
| 功能空间 RM 课名存在 | A 课名 | HSMAI Events Revenue Optimisation | https://academy.hsmai.org/events-revenue-mgmt-courses/ |
| 接 M&E 要算置换 + rooms/space/F&B | B Vendor | IDeaS Function Space RM | https://ideas.com/meeting-space-revenue-management/ |
| 同上；M&E「up to 60%」= 厂商营销，不当本店 Fact | B Vendor / D 营销 | IDeaS Meetings & Events | https://ideas.com/meetings-events/ |
| 团询要做 displacement；ancillary 可改变结论；不抄逐步公式 | B Vendor | Duetto displacement 文 | https://www.duettocloud.com/en-us/library/how-to-complete-a-hotel-revenue-displacement-analysis |
| booked ≠ profitable；total group value；RevPASM 是厂商尺不是本店 BAR | B Vendor | Duetto event-space 文 | https://www.duettocloud.com/en-us/library/booked-doesnt-mean-profitable-optimize-your-hotel-event-space-duetto |
| 会议及宴会 RM 循环 / 先到先得会挤后到高利润 | C/D 方向 | 环球旅讯 2014 | https://www1.traveldaily.cn/article/85967 |
| 无贡献不接低价房；高峰 Counter | B / Hypothesis | 本库 T18 + P10 | — |

未采用：华住会带房价表（未找到，不编）；餐毛利常模；把 RevPAS 当 BAR；IDeaS 60% 当这家店结构。

- **T-Hall / `theory/function-space-occupancy.md`（16:17）：** 厅占用尺 ≠ 会带房三笔。厅日记满了不是客房更紧。P50 有房块；T-Hall 专点零客房的空间时钟。
