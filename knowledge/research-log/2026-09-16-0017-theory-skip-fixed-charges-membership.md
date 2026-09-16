# 2026-09-16 00:17 CST · THEORY T16-00 · Fixed Charges / Membership Enrollment·eCert / Alerts·Messages deepen → **SKIP**

## 槽

理论/指标小时（00:17 ∈ {0,8,16}）。评估 S15-22 scout 留下的 **MEDIUM leftover**：Fixed Charges / Recurring auto-post / Cloudbeds Add-Ons / Apaleo Services（「固定费堆高所以 ADR 虚该砍 BAR / Fixed Charge 就是加价所以涨尺」）/ Membership Enrollment / Reservation Membership attach / e-Certificate·Award redemption（「入会多所以涨尺 / 积分房·兑券多所以砸尺」）/ Reservation Alerts / Global Alert Rules / Guest Messages（「Alert 很多所以市场乱该砍」），误读为 Pace 证据或公开 BAR rewrite，是否应加深既有 **P82/P78/P69/P79/T-Fee**（+ P87）+ **P49/P80**（+ RTC Membership Auto Discount 已闭环）+ **P45/P87**。S15-22：「可评估加深；若不能显著改变 Situation/Diagnosis/Action/Watch，不写」。**本轮判定：不写。**

**不开 P88。不开 P89。** 不写新理论卡/剧本/决策卡/轻指标/Simulation。systems 无变。不发布。不 git commit。source-map：**无新 §**（§172 复核 only）。Missed slots 2026-09-07 12:17–2026-09-14 12:17 **不回填**。

## 一句话

OPERA Managing Reservation Fixed Charges / Cloudbeds Add-Ons / Apaleo Services = **reservation recurring/auto-post & ancillary sell layer**（EOD/Advance Bill 周期或一次性自动过账 / Per Night·Guest Add-On / Services extras ≠ Pace ≠ 公开灵活 BAR）；Enrollment / Reservation Memberships / e-Certificate redeem = **loyalty attach/redeem layer** ≠ BAR Type；Alert Messages / Global Alert Rules / Guest Messages = **ops messaging layer** ≠ Pace ≠ dump 令。P82/P78/P69/P79/T-Fee + P49/P80 + P45/P87 已覆盖 Situation/Diagnosis/Action；§172 复核只加固 Watch → **theory-skip**。

## 评估表（会不会改变调用）

| 维度 | 加深后预期 | 现有邻剧是否已覆盖 | 判定 |
| --- | --- | --- | --- |
| **Situation** | 「固定费堆高所以 BAR→399 / Fixed Charge 就是加价所以涨尺」「入会多所以涨尺 / 积分房·兑券多所以砸尺」「Alert/留言很多所以市场乱该砍」 | P82 停车 Fixed Charge；P78 加人；P69 含早/套餐；P79/T-Fee 强制费；P87 补偿过账；P49 积分升/兑；P80 员工价；RTC Membership Auto Discount 已闭环；P45 早会 | **不显著新增必问** |
| **Diagnosis** | Fixed Charges = recurring/auto-post & ancillary；Membership/eCert = loyalty attach/redeem；Alerts = ops messaging ≠ Pace ≠ 公开 BAR | 「固定费自动过账 / 入会·兑券 / 弹窗留言 ≠ Pace / ≠ 公开尺」闸已写；无新轴（不像 T-Window 的下单日轴 vs 住期轴） | **闸不变**（仍走 P82/P78/P69/P79 · P49/P80 · P45/P87） |
| **Recommended Action** | 移交 P82·P78·P69·P79·T-Fee·P49·P80·P45·P87；Hold 779–799 首选 799；拒 399 | **完全同套**；无新杠杆 | **Action 不变** |
| **What To Watch** | Fixed Charge 是否仅 EOD/Advance 过账、Transaction Code 是否房费桶；eCert 是否绑促销价码而非永久 BAR；Alert 是否仅员工触发 | 邻剧已盯「停车/加项/强制费/兑房/早会/补偿≠尺」；§172 Vendor 字段名是证据加固 | **Watch 微加强，不够开卡** |

对照 **T-Window 先例（写）**：新增下单日轴 vs 住期轴。对照 **T15-16 Room Move（skip）** / **T15-08 Guest History（skip）** / **T15-00 Room Condition（skip）** / **T14-16 House Count（skip）** 及更早一串 skip：只给已有轴换 Vendor 标签。本候选 **没有新轴**。S15-22 HIGH 四件套 **均未齐**（邻剧覆盖改尺过程）→ 与 skip 一致。

## 做了什么

1. 重读 S15-22 + §172 + T15-16 / T15-08 skip 门槛 + P82 / P49 / P45 邻闸
2. curl 复核十页（Fixed Charges 26.2 / 5.6 Fixed Charges / Cloudbeds Add-Ons / Apaleo Services / Enrolling / Reservation Memberships / eCertificate / Alert Messages / Global Alert Rules / Guest Messages）均 **200**，size 与 §172 一致
3. 写本 research-log；progress / README §8.4 / backlog / BACKLOG 头 bump
4. P82 / P49 / P45 文末指针记 skip（三句 / 399 / 799 不改）
5. 不开新 theory slug；不重开 P88/P89
6. source-map：无新 §（§172 复核 only）

## 源核（本小时 curl 复核，无新 URL）

| 动作 | 源 | 结果 |
| --- | --- | --- |
| **复核** | OPERA Cloud 26.2 Managing Reservation Fixed Charges | curl 200 size≈16424；EOD/Advance 自动过账 ≠ Pace ≠ BAR |
| **复核** | OPERA 5.6 Fixed Charges | curl 200 size≈25569；valet/parking 按日例 ≠ BAR Type |
| **复核** | Cloudbeds · Create Add-Ons | curl 200 size≈85419；Per Night/Guest Add-On ≠ 公开 BAR |
| **复核** | Apaleo · Setting up Services | curl 200 size≈28587；Services/extras ≠ rewrite |
| **复核** | OPERA Cloud 26.2 Enrolling Guests in External Loyalty Programs | curl 200 size≈31979；入会 ≠ 涨价令 |
| **复核** | OPERA Cloud 26.2 Managing Reservation Memberships | curl 200 size≈9949；挂会员 ≠ BAR Type |
| **复核** | OPERA Cloud 26.2 Redeeming Promotional e-Certificate | curl 200 size≈14861；兑券促销码 ≠ 永久公开尺 |
| **复核** | OPERA Cloud 26.2 Configuring Reservation Alert Messages | curl 200 size≈11433；员工 Alert ≠ Pace |
| **复核** | OPERA Cloud 26.2 Configuring Global Alert Rules | curl 200 size≈21241；规则弹窗 ≠ dump 令 |
| **复核** | OPERA Cloud 26.2 Managing Guest Messages | curl 200 size≈18807；留言作业 ≠ BAR |
| **指针** | §172 S15-22 | 不当本小时新发现 |
| **NV** | 华住固定费·入会·兑券·Alert SOP / 默认固定费% / 699 | **仍 NV。不编。** |

Last Verified：2026-09-16。

## 兼容

与近轮 S15-22 / R15-20 / C15-18 / T15-16 skip：**无真矛盾**。价格纪律原样：Hold 779–799 首选 **799**；**拒 399**；**不发明 699**。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。

## 刻意不补

**P88**；**P89**；新理论卡；新剧本；Pet/AAA；smoking/damage FEE；重写 P82/P49/P45/P01–P87 正文三句；华住固定费·入会·兑券·Alert Fact；默认固定费%；699 Fact；systems；publish；git commit。

## 顾问可用性

用户说「固定费堆高所以 BAR→399 / Fixed Charge 就是加价所以涨尺 / 入会多所以涨尺 / 积分房·兑券多所以砸尺 / Alert/留言很多所以市场乱该砍」→ **仍** Diagnose 走 **P82/P78/P69/P79/T-Fee**（+ P87）/ **P49/P80** / **P45/P87**。真紧 Ahead → **P03**；真 leftover Behind → **P05**。Hold 779–799 首选 799；拒 399。

会改变 Situation / Diagnosis / Recommended Action / What To Watch：**否（不够开卡）**。

## Notify

**NO**（无新可调用资产；仅 skip 文档 + 指针 bump）。

## 下一槽

**2026-09-16 02:17 = case hour。不规定 P88。不规定 P89。** 不要把 **T-Window / T-Rack / T-Restriction / T-Component / T-Floor / T-Tax / P79 / T-Fee / T-Extra / P78 / T-Employee / P80 / T-Service-Recovery / T-Deposit / P86 / T-Hurdle / P85 / P84 / T-Stored / P83 / P87 / T20 / T-Corp / T-Status / P66 / P37 / T06 / P24 / P63 / P67 / P65 / P61 / P49 / P45 / P54 / P25 / P08 / P82** 列为「下一轮要写」— 已 drafted（Room Move·Discount Reasons·Open Folio deepen **skip**；**C15-18 已写**；**R15-20 已写**；**S15-22 scout-only**；**P82/P49/P45 Fixed Charges·Membership·Alerts deepen 本小时 skip**；Guest History / Room Condition / House Count 闭环）。仍 **P01–P87**。Pet/AAA 仍停车。Smoking/damage FEE 仍 MEDIUM/LOW。case 可补 Fixed Charges / Membership Enrollment·eCert / Alerts 误读专拍 Simulation（闸仍 P82/P78/P69/P79 · P49/P80 · P45/P87），≠ 开新剧、≠ 推翻 skip。
