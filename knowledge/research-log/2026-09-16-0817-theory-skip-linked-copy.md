# 2026-09-16 08:17 CST · THEORY T16-08 · Linked/Party · Copy Reservation deepen → **SKIP**

## 槽

理论/指标小时（08:17 ∈ {0,8,16}）。评估 S16-06 scout 留下的 **MEDIUM leftover**：Linked Reservations / Party / Split multi-room（「连了 8 间所以该涨 / Party 堆高所以砸尺腾」）与 Copy Reservation（「复制旧单所以必须锁旧价 / 复制失败所以砸尺补」），误读为 Pace 证据或公开 BAR rewrite，是否应加深既有 **P01/P45/P10**（连单/Party → 真 remaining+Pace；接团仍 P10）与 **P65/P66/P33**（复制/旧价恢复/限制）。S16-06：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。** Rate Seasons / Preferences·VIP 同 scout 已判邻剧覆盖，本小时不另开枝。

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§175 复核 only）。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

OPERA Managing Linked Reservations / Linked Profiles + Stayntouch Party = **multi-room association / profile-link layer**（Split→Linked、Party 挂多单且挂 Party **不改房价** ≠ Pace ≠ 公开灵活 BAR）；OPERA Copying Reservations + Stayntouch Copy = **reservation clone / rebook ops layer**（Look to Book 可改日期/档案；须过可用性与限制；团/配额可不可 copy 另规则 ≠ 永久公开尺 / ≠ 必须锁旧价）。P01/P45/P10 + P65/P66/P33 已覆盖 Situation/Diagnosis/Action；§175 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「连了 8 间所以 BAR 该涨 / Party 堆了所以砸尺腾」「复制旧单所以锁旧价 / 复制失败就 dump」「季节码切淡季所以 BAR→399」「VIP/Preference 多所以涨或砍」 | P01 Ahead/真紧；P45 早会三拍；P10 接团；P65 原价恢复；P66 RMS 建议≠尺；P33 限制；P64/T-Floor/P02 季节档/地板/真弱；P49 VIP/兑房 | **不显著新增必问** |
| **Diagnosis** | Linked/Party = multi-room association；Copy = clone/rebook ops；Rate Season = pricing-schedule date-template；Preferences/VIP = rooming-hint / profile-flag ≠ Pace ≠ 公开 BAR | 「连单数 / 克隆作业 / 季节模板 / VIP·偏好 ≠ Pace / ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P01/P45/P10 · P65/P66/P33 · P64/T-Floor/P02 · P49/P45） |
| **Recommended Action** | 移交 P01·P45·P10·P65·P66·P33；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | Linked 是否已 Split 成真实多房、Party 是否改价（Stayntouch 明示不改）、Copy 是否过限制/可用性、Season 是否只填起止日、VIP 是否仅色标/Alert | 邻剧已盯「真 remaining+Pace / 旧价恢复 / 限制 / 地板 / 兑房」；§175 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T16-00 Fixed Charges（skip）** / **T15-16 Room Move（skip）** / **T15-08 Guest History（skip）** 及更早一串 skip：只给已有轴换 Vendor 标签。本候选 **没有新轴**。S16-06 HIGH 四件套 **均未齐**（邻剧覆盖改尺过程）→ 与 skip 一致。

## 做了什么

1. 重读 S16-06 + §175 + T16-00 skip 门槛 + P01 / P45 / P10 / P65 / P66 邻闸
2. curl 复核八页（Linked / Linked Profiles / Copying / Stayntouch Copy / Stayntouch Party / Rate Seasons / Preferences / VIP Levels）均 **200**，size 与 §175 一致
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P01 / P45 / P65 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§175 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Linked Reservations | curl 200 size≈28557；Split→Linked ≠ Pace ≠ BAR |
| **复核** | OPERA Cloud 26.2 Managing Reservation Linked Profiles | curl 200 size≈19760；档案挂接 ≠ 定价权 |
| **复核** | OPERA Cloud 26.2 Copying Reservations | curl 200 size≈21854；Clone + Look to Book ≠ 锁旧价令 |
| **复核** | Stayntouch · Copy Reservation Functionality | curl 200 size≈31423；可用性/限制复核；团不可 copy |
| **复核** | Stayntouch · Support For Party Reservations | curl 200 size≈46916；挂 Party **不改房价** |
| **复核** | OPERA Cloud 26.1 Configuring Rate Seasons | curl 200 size≈10737；季节日期模板 ≠ 淡季 dump |
| **复核** | OPERA Cloud 26.2 Managing Reservation Preferences | curl 200 size≈10945；分房提示 ≠ Pace |
| **复核** | OPERA Cloud 25.4 VIP Levels | curl 200 size≈7499；VIP 色标/Alert ≠ 涨价令 |
| **指针** | §175 S16-06 | 不当本小时新发现 |
| **NV** | 华住连单·复制·季节·VIP SOP / 默认淡季折扣% / 699 | **仍 NV。不编。** |

Last Verified：2026-09-16。

## 兼容

与近轮 S16-06 / R16-04 / C16-02 / T16-00 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。Shares/Accompanying 同房分账仍 **P78**（不与 Linked 混）。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P01/P45/P10/P65/P66/P01–P87 正文三句；华住连单·复制·季节·VIP Fact；默认淡季折扣%；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「连了好多间该涨 / Party 堆了砸尺腾 / 复制旧单锁旧价 / 复制失败 dump / 淡季季节该砸 / VIP 多该涨」→ **仍** Diagnose 走 **P01/P45/P10** · **P65/P66/P33** · **P64/T-Floor/P02** · **P49/P45**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-16 10:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82 / P01 / P10** 列为「下一轮要写」— 已 drafted（Fixed Charges·Membership·Alerts deepen **skip**；**C16-02 已写**；**R16-04 已写**；**S16-06 scout-only**；**P01/P45/P65 Linked/Party·Copy deepen 本小时 skip**；Room Move / Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Linked/Party / Copy Reservation 误读专拍 Simulation（闸仍 P01/P45/P10 · P65/P66/P33），≠ 开新剧、≠ 推翻 skip。
