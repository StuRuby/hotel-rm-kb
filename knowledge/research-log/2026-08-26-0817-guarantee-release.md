# Research Log｜2026-08-26 08:17 · T-Guar / 担保类型与到点释放的库存含义

> 路径：`research-log/2026-08-26-0817-guarantee-release.md`  
> 时区：Asia/Shanghai  
> 槽：Hour 8 ∈ {0,8,16} = **THEORY / METRIC DEEP-DIVE**  
> 日期：**2026-08-26 08:17 CST**  
> 主题：**T-Guar** `theory/guarantee-release.md` — 画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放。P55 06:17 已写 playbook + 主卡 + 轻指标 + sim；本小时只加深理论（模板同 00:17 T-Status after P53 / 16:17 T-Hall after P51）。主卡复用 `dont-dump-on-nonguaranteed.md`，不重写。  
> 纪律：**不开 P56、不写新剧本**（06:17 scout 明确 theory hour 不得规定 P56）。不重写 P01–P55 正文（P55 仅头一行；邻卡仅文末一行）。Advisor-First：不操作 PMS / RMS / OTA extranet / 前台，不自动改价。不发布网站。不 git commit。不 SendMessage。

---

## 1. 本轮打开 / 复用

WebSearch + WebFetch，Last Verified **2026-08-26**。已开指针**不当新发现**。

### 本小时新开（进 `sources/source-map.md` §33）

| URL | 出版方 / 日期 | 级 | 拿到什么 |
| --- | --- | --- | --- |
| https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_admin_booking_configuring_reservation_types.htm | Oracle（OPERA Cloud 26.2 文档），访问 2026-08-26 | **A Vendor PMS, store-configured** | **Deduct Inventory** 勾选=该类型的预订从 inventory count 扣一间，不勾=**non-deduct 不扣**；**Release Time** = 「非担保情况下房留到几点」的**输入字段**（Distribution Guarantee Type=None 时可填）→ **放房时点是店配值，不是行业常数**；**Deposit 勾选仅信息性**，押金要求由 **deposit rule schedules** 定；**CC Pending Days + Auto Mass Cancel** 可在未按期收到卡/押金时自动取消；Distribution Guarantee Type / Applicable Channels 按渠道生效。**与 §31 的 `ch_reservations.htm` 是不同 URL。** |
| https://www.roommaster.com/blog/types-reservation-hotel-industry | roommaster（InnQuest）厂商博文，作者 Mayela Lozano，页标 2026-08-03，访问 2026-08-26 | **B Vendor Methodology（厂商概述）** | guaranteed = 卡/押金/公司合同背书、不受到达时间限制；non-guaranteed 只留到 cut-off，**「often 4 or 6 PM」**；tentative **不该**当已确认收入（会 inflate occupancy forecasts）；**过 cut-off 把房再卖给别人本身就是有意的超售决定**；OTA 单常由平台自身付款机制担保。**用途：证明 Deduct / hold-release 概念不是 OPERA 独有。** 未采用其「Recommended Type」推荐框架当动作；未摘任何 %/金额；「4 or 6 PM」标为厂商概述，**不是中国 practice**。 |

### 已开指针（不当新发现）

| 源 | 节 | 用在哪 |
| --- | --- | --- |
| OPERA Cloud 26.2 · Reservations（Standard Reservation Types：6:00 PM Hold / Guaranteed by Credit Card / Guaranteed by Company；Deduct 与 Non-Deduct；Non-Deduct 例 4 PM release；non-deduct 默认不进 availability 计算） | §31 | T-Guar §1 三把尺、§8 误读表。全部标 **Vendor PMS、store-configured** |
| OPERA Cloud 26.2 · About End of Day + OPERA Controls—End of Day（Auto No Show Arrivals；**Rolling No Show** 所选类型不自动 no-show、滚到达日） | §31 | T-Guar §4（画面可继续占用而无真实到店 → 问本店控制） |
| HSMAI Academy Glossary · Guaranteed（信用卡或其他付款形式担保，无 %）· Overbooking（依 history of no-shows and last-minute cancellations） | §31 | T-Guar §1 标签行；§5 把超售推给 **P24** |
| OPERA Cloud 25.4 · No Show Posting Rules | §30 | T-Guar §5 ex-post 一栏（P54） |
| CoStar STR Historical Guidelines（no-shows **exclude** from Rooms Sold） | §22 | T-Guar §5 / §10，标 **ex-post 报送口径，不是定价公式** |

### 未抓 / 未采用 / 禁止

```
HSMAI no-show/ 与 guaranteed-reservation/        已 404（§31），按纪律**未重试**
OPERA「unconfirmed 30 分钟释放」一句             摘要在 25.5 / 26.1 同名页；**未在 26.2 逐字复核 → 不作论断**
roommaster Recommended Type 框架                 打开但**不采用**为动作
中国担保/押金 SOP、押金%、标准放房时点           **禁止发明**，仍 NV
no-show% / hold 转化率 / Walk $ / OTA 佣金% / 点弹性   **禁止发明**，仍 NV
P56 / 新剧本                                     **不开、不写**
iHotelier / science-behind-g3 / Marriott careers / SiteMinder no-show / 限额表   停
```

搜索词（记录用）：`PMS documentation "reservation type" "deduct inventory" non-deduct hold release time`、`hotel PMS help "non-guaranteed" reservation "6 pm" release inventory availability documentation 2026`。

---

## 2. 写了什么

| 资产 | 路径 | 状态 |
| --- | --- | --- |
| **T-Guar 理论卡** | `theory/guarantee-release.md` | **created / drafted** |
| P55 头一行加 理论 | `advisor-playbooks/guarantee-type.md` | **header only**（正文未动） |
| OCC 误读行（hold 掺高，放房前） | `metrics/occ.md` | **appended**（只追加，未改 S 公式与既有行） |
| 轻指标指针 | `metrics/guarantee-mix.md` | **appended**（一段指针） |
| 文末一行 ×4 | `theory/group-inventory-deduct.md` · `theory/complimentary-house-use.md` · `theory/capacity-ooo.md` · `metrics/noshow.md` | **last-line only** |
| 源表 §33 | `sources/source-map.md` | **appended**（两页新开 + 指针 + 仍 NV） |
| 问题树 §62 | `diagnosis/problem-tree.md` | **appended**（§1–61 未改） |
| 进度 T26-08 | `curriculum/progress.md` | **appended**（C26-06 / C26-04 / C26-02 与 T1–T12 未改） |
| 知识地图 | `curriculum/knowledge-map.md` | **appended** |
| 研究 backlog | `backlog/research-backlog.md` | **appended** |
| README 理论索引 | `README.md` | **appended** |
| 本 log | `research-log/2026-08-26-0817-guarantee-release.md` | **created** |

**未做**：不开 P56、不写新剧本、不写第二张主卡、不重写 P55 正文、不重写 T-Status / T-Comp / T06 / T-Hall / P54 正文、不发布、不 commit。

---

## 3. 卡立了什么（一句话 + 五点）

**一句话：** 画面上的 OTB 还不是需求；先问这个预订类型扣不扣、几点放。

1. **占库存看店配，不看标签。** 「Guaranteed / 非担保 / 6 点保留」是本店配置出来的 reservation type；真正动可售的是该类型的 **Deduct / Non-Deduct** 开关（OPERA 配置页 Deduct Inventory 勾选框 — **Vendor PMS、store-configured**）。**两家店可以用同样的词，算出不同的可售。**
2. **放房点之前的 OTB 是混合量**：一部分已承诺需求，一部分是到点会蒸发的 hold；由它算出的 **OCC 与 Remaining 继承这个混合**。与 T-Status（暂定块）、T-Comp（免费/自用）、T06（OOO）、T-Hall（厅满）同属「**分母/分子不干净**」一家人。
3. **释放是事件，不是预测。** 释放前不知道 hold 转化多少（转化率 **NV，不编**）；释放后 remaining 才是真的。所以顾问规则是**次序**：**不为「预计会放」提前 dump，也不按掺 hold 的 OCC Increase BAR。**
4. **Rolling No Show**：所选类型不自动 no-show，而是**把到达日往后滚** → 画面占用可以在**没有任何真实到店**的情况下持续。**问本店控制，不假设开也不假设关。**
5. **ex-ante vs ex-post 分清**：本卡问「这张单现在算不算已卖、几点放」；**已发生的 no-show** 走 P54 / `metrics/noshow.md`（过账、STR 不计 Sold），**基于 no-show 历史的超售卖限**走 P24，**到店前取消**走 P14。加上第 6 条纪律：五个问句（类型表 / Deduct 映射 / 实际放房时点 / Rolling / 今晚非担保间夜）**全部 NV，本卡不代答**。

---

## 4. 兼容性检查（必写）

逐张对照。**结论：无真矛盾，无 needs_revision。** 没有任何既有剧本的 Advise 因本卡改变。

| 对照 | 那张说什么 | T-Guar 说什么 | 判定 |
| --- | --- | --- | --- |
| **T-Status / P53**（团块 Definite vs Tentative 扣不扣） | 团块状态决定扣不扣可售；不按暂定 OCC 涨；不锁公开 BAR 给 Hold；强暂定扣了走 P52 | **同一机制、下一层**：单张散客单的担保类型决定扣不扣、几点放 | **兼容（层级关系）。** 本卡明写是 T-Status 的散客对应面，不改团块结论，不重写 P53 正文（仅头一行已在 00:17 由 T-Status 占用；本轮未动 P53 头，只加文末一行） |
| **T-Comp / P47**（免费/自用） | $0 占物理房、抬分子、不进 STR 历史 Sold | 本卡分子掺**会蒸发的 hold**，分母可能**不变**（Non-Deduct 不进可售扣除） | **兼容。** 同族不同格，Advise 同为「先拆尺再定价」 |
| **T06 OOO / P37** | OOO **缩分母**，不可售不是砸价对象 | 本卡不缩分母，是**分子不干净** | **兼容。** 已在文末一行明写「分子 ≠ 分母」，避免混成「数据不准所以乱调」 |
| **T-Hall / P51** | 厅占用**不进**客房 OCC；厅满 ≠ 客房紧 | OTB 满 ≠ 房已卖掉 | **兼容。** 同为「假高峰尺」 |
| **P54 散客 no-show**（+ `metrics/noshow.md`） | **ex-post**：当天已经没来 → 释放后按 remaining + Pace，不因刚 no-show dump | **ex-ante**：这张单现在占不占可售、几点放 | **兼容，边界清晰。** 两边都是「不因这件事 dump」，动作方向一致。本卡不重写 P54，只在其文末加 ex-ante/ex-post 一行 |
| **P24 超售/卖限/walk** | 卖限建在**历史** no-show 与 last-minute cancellations 上（HSMAI 同向）；Walk 成本 NV | 本卡**不**给卖限建议；roommaster「过 cut-off 再卖是有意超售决定」明确推给 P24 | **兼容。** 本卡不产生超售动作，不编 Walk $ |
| **P14 到店前取消** | 到达前退掉 → Soft OTB 诊断；P38 改新生产窗口；P19 预付产品 | 到点释放是**另一个机制**（类型 + 时点），不是取消 | **兼容。** 三者在 §5 表里分开点名 |
| **P05（什么时候真的该砍）** | leftover 厚 + Pace Behind 才评；禁 BAR→399；禁一夜 −15% | **释放落地之后**才可能出现真 leftover；理由必须写成 leftover，不是「反正非担保」 | **兼容且更严。** 本卡只在 P05 前面加一道时序闸，不放宽也不新增砍价理由 |
| **P01（什么时候该涨）** | 真 remaining 薄 / Pace Ahead 才涨 | 不按掺 hold 的 OCC 涨；放房后的真 remaining 才是输入 | **兼容且更严。** 不新增涨价理由 |
| **P55（本卡的过程剧本）** | 六形 A–F、Intake、Re-evaluation、三句 | 本卡给「为什么」与 Diagnose 尺，三句**原样同一套**，不发明第四条定价规则 | **兼容。** 未重复 P55 正文；P55 只加了一行 理论 指针 |

另外核对的纪律点：`cases/sim-2026-6pm-hold-sat.md` 的 180/120/18/14/399/799 在本卡**只出现在 §9 Simulation 段并逐个标注**；**399 写成被拒绝的 dump，从不是推荐 BAR**；799 标 Hypothesis / Simulation。`metrics/guarantee-mix.md` 的「无默认 %」纪律在本卡沿用（要**间夜数**不要百分比）。

**没有发现任何真冲突，因此没有任何资产被标 `needs_revision`。**

---

## 5. 仍 NV（本卡不代答）

| ID | 项 | 处理 |
| --- | --- | --- |
| NV-GUAR-01 | 本店有哪些 reservation type（名字） | 问 |
| NV-GUAR-02 | 哪些 Deduct / 哪些 Non-Deduct | 问「从可售里扣不扣」 |
| NV-GUAR-03 | **实际**放房时点 | 问；OPERA 4 PM / 6 PM 与 roommaster「often 4 or 6 PM」都是厂商口径 |
| NV-GUAR-04 | Rolling No Show 开没开、对哪些类型 | 问；不假设 |
| NV-GUAR-05 | 今晚 OTB 里非扣/hold 类型的**间夜数** | 问；要间夜不要 % |
| NV-GUAR-06 | 担保媒介 / 押金要求（哪条 schedule、多少） | 问；**不编押金 %** |
| NV-GUAR-07 | hold 到店转化率 / 本店 no-show% | **不编**；已发生 no-show 走 P54 |
| 沿用 | 中国担保·押金 SOP、Walk $、OTA 佣金%、点弹性、wash% | **仍 NV，禁止发明** |

---

## 6. 下一槽

**10:17 = 案例 / 剧本小时。** 本 log **不规定**写哪一本剧本（theory hour 不得指定下一本；同 04:17「不要规定 P55」的槽序纪律）。**不要把 T-Guar 列为「下一轮要写」— 已 drafted。** 不要重写 P01–P55 正文。不要开 P56。
