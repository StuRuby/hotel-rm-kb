# Playbook P05｜Last Minute Unsold

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/last-minute-unsold.md`  
> BACKLOG：P05 Last Minute Unsold · HIGH · 先诊断枝  
> 状态：**drafted**（2026-08-20）  
> 配套卡：`decrease-bar-true-weak-demand.md` `do-not-cut-price-market-also-weak.md` `hold-price-curve-late.md` `overbook-or-not.md`  
> 幅度：`pricing/how-much-to-move.md` 档 E/H/G  
> 问题树：§9 Last-Minute Unsold · §1 OCC Low（DTA 短）  
> 交叉：P18 中国 OTA 促销已 drafted — 当晚降价常以促销形态出现，须问净价  
> 证据等级：B；幅度 Hypothesis  
> Last Verified：2026-08-20

---

## 0. 一句话

DTA≤3（或当晚）仍有可售：决定 **降 / 推渠道 / 保持 / 认栽**。禁止「当晚统一大降」当唯一策略。

完成定义：72h / 24h / 6h 三档动作表。

---

## 1. 信号

进入本剧本：**DTA≤3**（按店可改为 ≤2 的机场店或 ≤4 的度假店，须声明）且 Remaining 实质 >0。

| # | 信号 | 含义 |
| --- | --- | --- |
| L1 | DTA 72h / 24h / 当晚（到小时） | 三档，不可混 |
| L2 | Remaining 分房型 | 只剩高价房 = 结构，不是卖不动 |
| L3 | 今日 / 3D Pickup | ≈0 vs 仍在进 |
| L4 | 全渠道可订价 vs Primary 当晚价、是否满 |
| L5 | 取消 / No-show 史 | 无史不给超售精确间夜 |
| L6 | 渠道开闭、是否已超售 |

**「看起来没卖掉」可能是：** 价高、曝光关、限制挡、需求真空、只剩套房。

---

## 2. 先排除

| # | 排除 | 成立时 |
| --- | --- | --- |
| X1 | 该 DOW 历史就剩这些（商务周一 residual） | **认栽/保持**，不毁 ADR |
| X2 | 限制/关房造成假剩余 | 开库存或解限制，**先不降** |
| X3 | 高价房剩余、低价已空 | 结构；不降 BAR |
| X4 | 团队 wash 未发生 | 等释放或按散客剩余 |
| X5 | 市场/竞对同样空 | 不砸 BAR（do-not-cut）；最多有截止日期围栏 |
| X6 | 价已 ≤ 全部可订竞对 | 不降；查曝光/产品 |
| X7 | citywide / 事件仍在 | **禁止** last-minute 大促 |

过完仍：厚剩余 + Pickup≈0 + 价明显高于全部竞对 + 供给开 + 市场非冰 → 才允许档 H。

---

## 3. 三档动作（Hypothesis）

| 档 | 何时 | 动作 | 禁止 |
| --- | --- | --- | --- |
| **72h** | DTA=2–3 | 先排除。价高 8–15% → **围栏 −3–5%** 有截止日期；BAR 默认不动。市场冰 → 不动 | 把 BAR 永久改成促销价 |
| **24h** | DTA=1 | 价明显高于全部 **且** 近窗 Pickup≈0 **且** 市场不冰 → 档 H：有截止日期战术产品 **−10–15%** 或 BAR 一次收到最低竞对附近（取更浅） | 一夜 **−15%+** 当新 BAR；无截止日期 |
| **6h / 当晚** | 到店日 | 默认 **保持或认栽**。仅当仍明显高于全部可订 **且** 走房/散客还可能来（机场/会展尾）→ 小配额当晚价，配额 ≤ 剩余 20% | 全渠道公开砸穿；为排名无条件接 OTA 大促（净价未知则条件化） |

**超售：** 无取消/No-show 史 → 只给方向+风险，**不给精确间夜**（P24 / overbook 卡）。

价已最低 / 市场空：**认栽**。写「接受剩余，守品牌带」。

---

## 4. 动作表

```text
Stay Date / DTA 档:
Remaining 分房型:
Decision: 保持 / 开库存 / 围栏 / 档 H 战术价 / 认栽
若动价: Range / Preferred / 截止日期 / 配额
Channel: 是否打开此前关掉的促销渠道（设配额）
Do-not-do: 一夜永久 −15%；事件日大促；只改一个渠道
Trigger: 见 §5
```

工作锚（仿真尺度，180–300 间）：BAR 799、竞对 699–749 且市场不冰、DTA=1、3D=0 → 战术价 **699–719 首选 719**，当日失效；BAR 次日恢复。市场也空 → **799 不动**。

---

## 5. Trigger

| 事件 | 动作 |
| --- | --- |
| 战术价放出后 6–12h 仍 0 且市场空 | **停**，认栽，不第三刀 |
| 放出后进房 ≥ 剩余 20% | 收促销或提回 BAR−3% |
| 竞对当晚满 | 停降，评回 BAR |
| 发现渠道关着 | 撤回降价，先开 |
| 取消突然升 | 停再降；超售只方向 |

---

## 6. 如果只能再补 3 个

1. Remaining 分房型 + 当前全渠道最低可订。  
2. Primary 当晚价/是否满。  
3. 近 3D 净 Pickup（含是否一团 wash）。

---

## 7. 兼容

围栏 −3–5%；档 H 才允许短窗 −10–15%；**不一夜 −15%+ 当永久 BAR**。Sellout/事件路径禁止走本剧本当主流程。

---

## 8. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。72/24/6h。P18 净价仍 NV。 |
| 2026-08-20 | Wave7：P18 已 drafted。 |

---

## 9. 交叉（2026-08-22 08:17，不改 72/24/6h 表）

先围栏，禁止一夜 −15% 当永久 BAR。**再过贡献闸**：战术净价不得穿用户变动成本。穿底 → 认栽空房，不第三刀。`do-not-sell-below-contribution.md`。无三成本不得说 499 总比空着强。

## 10. 交叉（2026-08-22 14:17，不改 72/24/6h 表）

「排名掉了所以今晚砸 BAR / 报今夜特价」→ 先 **P35** 查库存是否关、价是否真出局、内容是否洞。排名不是档 H 开门条件。6h 仍默认保持/认栽。禁止一夜 −15%。报名仍走 P18。贡献闸仍走 T19。

## 11. 交叉（2026-08-23 00:17，不改 72/24/6h 表）

Remaining 必须是 **还能卖的**。剩余其实是 OOO/维修/自用 → **禁止 dump**，先问几间真能卖。真可售厚才进档 H。禁一夜 −15%。`dont-price-off-ooo-occ.md`。

假剩余（物理空 40 里是维修/锁）先走 **P37** `ooo-capacity.md`；不可售不是 dump 燃料。真可售 last-minute 仍禁一夜 −15%。

## 12. 交叉（2026-08-23 06:17，不改 72/24/6h 表）

DTA 短但 OTB 里还是随时退 → 先 **P38** 收 **新单** 免费窗或推不可退，**再**评本剧 dump。政策杠杆先于档 H。禁一夜 −15%。已确认单不暗改。

## 13. 交叉（2026-08-23 22:17，不改 72/24/6h 表）

今夜特价 ≠ 前台 walk-in。本剧管 **渠道** dump（72/24/6h）。客人站在前台要口价 → **P42** `same-day-walk-in.md`：零佣金，默认 BAR 或更高，不跟本剧 dump，不把 dump 写成新 BAR。两道围栏禁止叠成同一个 399 BAR。

## 14. 交叉（2026-08-24 06:17，不改 72/24/6h 表）

钟点房 ≠ 过夜 walk-in ≠ OTA 今夜过夜特价。本剧管 **过夜** 渠道 dump。白天小时产品会不会吃掉当晚过夜库存 → **P44** `day-use-hourly.md`：能交回才是增量；高峰关或限额；不要把钟点价写成过夜 BAR。两道产品禁止叠成同一个低价过夜 BAR。

## 15. 交叉（2026-08-24 14:17，不改 72/24/6h 表）

意外提前退房是 **库存回来**，不是自动本剧 dump。先走 **P46** `early-departure-stayover.md` 重算 Remaining：高峰/仍紧 Hold BAR；只有 leftover-弱且市场也弱才回到本剧围栏。脏 ED 房未转房不是 dump 燃料。禁一夜 −15%。

## 16. 交叉（2026-08-24 18:17，不改 72/24/6h 表）

无关 Comp / 临时自用正在住的房 **不是** leftover dump 燃料。看起来空其实是请客房 → **P47** `complimentary-house-use.md` 形 B。本剧只砸**付费空房**且 leftover-弱。禁一夜 −15%。

## 17. 交叉（2026-08-25 18:17，不改 72/24/6h 表）

团块未 pickup 的洞 **不是** leftover dump 燃料。cutoff 前要填洞 → **P52** `group-cutoff-wash.md` 形 B。cutoff 日过了但 night audit 没跑、Available 仍锁 → P52 形 D，不是本剧。只有 cutoff **真释放落地** 且付费空房厚、Pace Behind 才回到本剧围栏。禁一夜 −15%。禁止 BAR→399。

## 18. 交叉（2026-08-25 22:17，不改 72/24/6h 表）

不扣库存的暂定块 **不是** leftover dump 燃料，也不是「反正是暂定」的许可证。销售要 dump 399 或关散客给 Hold → **P53** `definite-vs-tentative.md` 形 B/C。已扣库存的 Definite 未 pickup 洞仍走 P52。只有付费空房真弱、Pace Behind 才回到本剧围栏。禁一夜 −15%。禁止 BAR→399。

## 19. 交叉（2026-08-26 02:17，不改 72/24/6h 表）

当天散客 no-show 回库 **不是** 自动本剧 dump。先走 **P54** `transient-noshow.md` 重算释放后 remaining + Pace：仍紧/Ahead Hold BAR；只有厚且 Behind 才回到本剧围栏。理由写 leftover，**不要写「因为刚 no-show」**。禁一夜 −15%。禁止 BAR→399。

**P56 指针（2026-08-26 10:17）：** 月末本身不开本剧；只有具体夜释放后/短窗仍 Behind+厚 Remaining 才按 P05 bounded move。Ahead/薄夜不降；拒 blanket dump。

## 20. 交叉（2026-08-26 18:17，不改 72/24/6h 表）

未还的 OTA/批发切房 **不是** leftover dump 燃料。电商要砍公开 BAR 消化切房 → **P58** `channel-allotment-unsold.md`。高峰先还/缩切房。只有还房落地后公开 remaining 厚且 Pace Behind 才回到本剧围栏。理由写公开 Pace，不要写「消化切房」。禁一夜 −15%。禁止 BAR→399。


## 21. 交叉（2026-08-27 02:17，不改 72/24/6h 表）

错推/错映射成交 **不是** leftover dump 燃料，也不是 Pace 信号。电商要把公开 BAR 砍到错误价 → **P60** `channel-mapping-misprice.md`。先关错码。只有修好后公开 remaining 厚且 Pace Behind 才回到本剧围栏。理由写公开 Pace，不要写「错价已经出去」。禁一夜 −15%。禁止 BAR→399。


## 22. 交叉（2026-08-27 06:17，不改 72/24/6h 表）

标准卖满、套房空着时，**优先付费升标准客**（**P61**），不要把套房公开 BAR dump 到 399「反正空着」。真弱套房 leftover 才回到本剧围栏；理由写该夜需求。禁一夜 −15%。禁止套房 BAR→399 当默认。

## 23. 交叉（2026-08-27 10:17，不改 72/24/6h 表）

取消后又订回来更便宜，不是 leftover 证明，更可能是对自己降价曲线的套利 → **P62** `same-day-cancel-rebook.md`。Ahead 夜 Hold，不要 BAR→399「别再被刷」。只有真 Behind leftover 才回到本剧围栏；理由写 Pace，不写「别被刷」。

## 24. 交叉（2026-08-27 14:17，不改 72/24/6h 表）

保洁/前台做不完、账面 remaining 看起来厚，**不是 leftover 证明**，更可能是人手吞吐顶 → **P63** `staff-capacity-constraint.md`。Ahead 夜 Hold + 收口到达，不要 BAR→399「反正做不完」。只有真 Behind **且** 产能也松才回到本剧围栏；理由写 Pace，不写「做不完」。

## 25. 交叉（2026-08-27 22:17，不改 72/24/6h 表）

取消后又要按旧价恢复，不是 leftover 证明 → **P65** `cancel-reinstate-old-rate.md`。Ahead 夜拒旧价给当前 BAR，不要 BAR→399「别纠缠」。只有真 Behind leftover 才回到本剧围栏；理由写 Pace，不写「恢复旧价」。

## 26. 交叉（2026-08-28 02:17，不改 72/24/6h 表）

RMS 建议 399「卖不满」**不是 leftover 证明** → **P66** `rms-rec-override.md`。Ahead 夜不跟系统 dump，Hold 当前 BAR，不要 BAR→399「系统说了」。只有真 Behind leftover 才回到本剧围栏；理由写 Pace，不写「系统说了」。
## 交叉 P72（2026-08-29 02:17 追加，不改 72/24/6h 表）

姐妹店导客要按 399 接 **不是 leftover 证明** → **P72** `sister-cluster-overflow.md`。Ahead 夜不按发送店 dump，Hold 当前 BAR。只有真 Behind leftover 才回到本剧围栏；理由写 Pace，不写「集团导过来了」。

## 交叉 P73（2026-08-29 06:17 追加，不改 72/24/6h 表）

闪促卖爆了要改 BAR / 过期闪促还挂着 **不是 leftover 证明** → **P73** `flash-promo-vs-bar.md`。Ahead 夜不把闪促写成新 BAR，Hold 当前公开尺；过期先关码。只有真 Behind leftover 才回到本剧围栏（仍须有截止日）；理由写 Pace，不写「闪促卖爆了」。

> 交叉指针（2026-08-29 08:17）：Diagnose 走 **T-Flash** `theory/promotion-window-vs-bar.md`；过程仍 P73。真弱 leftover 仍本剧。不写 P74。


> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-29 22:17，不改正文）：直播间/主播专属价改尺 → **P77** `live-commerce-stream-vs-bar.md` · `dont-rewrite-bar-to-livestream.md`。不写 P78。

> 交叉指针（2026-08-30 00:17，不改正文）：Diagnose 走 **T-Live** `theory/live-commerce-vs-bar.md`；过程仍 **P77**。不写 P78。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。

> 交叉指针（2026-08-30 06:17，不改正文）：真弱 leftover 仍本剧；「all-in/服务费吓跑所以 BAR→399」过程走 **P79**。交叉 P79 resort-fee/all-in ≠ leftover。不写 P80。
> 交叉指针（2026-08-30 08:17，不改正文）：Diagnose 走 **T-Fee** `theory/resort-fee-vs-bar.md`；过程仍 **P79**。不写 P80。

> 交叉指针（2026-08-30 10:17，不改正文）：真弱 leftover 仍本剧；「员工价就是市场价 / 员工住满了所以 BAR→399」过程走 **P80**。交叉 P80 staff-rate ≠ leftover。不写 P81。

> 交叉指针（2026-08-30 14:17，不改正文）：批发/旅行社/GDS 净价改尺 → **P81** `wholesale-gds-ta-vs-bar.md` · `dont-rewrite-bar-for-wholesale.md`。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 16:17，不改正文）：Diagnose 走 **T-Wholesale** `theory/wholesale-net-vs-bar.md`；过程仍 **P81**。不写 P82。停车费仍 leftover。

> 交叉指针（2026-08-30 22:17，不改正文）：储值卡/礼品卡抵房改尺 → **P83** `stored-value-gift-card-vs-bar.md` · `dont-rewrite-bar-for-stored-value.md`。不写 P84。储值卡不再 leftover。

> 交叉指针（2026-08-31 02:17，不改正文）：取消/attrition FEE 改尺 → **P84** `cancellation-attrition-fee-vs-bar.md` · `dont-rewrite-bar-for-cancel-fee.md`。不写 P85。取消费不再 leftover。

> 交叉指针（2026-08-31 18:17，不改正文）：服务补偿/账单 adjustment 改尺 → **P87**。真弱 leftover 仍本剧（有窗围栏；仍不从补偿地板改写 BAR）。三句 / 399-rejected / 799-Hypothesis **不改**。不规定 P88。

> 交叉指针（2026-09-01 08:17，不改正文）：真弱 leftover 仍本剧。付费员工折扣 Diagnose 走 **T-Employee**，过程仍 **P80**（有窗围栏；仍不从员工地板改写 BAR）。不规定 P88。
> 交叉指针（2026-09-01 16:17，不改正文）：真弱 leftover 仍本剧。加床加项 Diagnose 走 **T-Extra**，过程仍 **P78**（有窗围栏；仍不从三人地板改写 BAR）。不规定 P88。

> 交叉指针（2026-09-02 08:17，不改正文）：真弱 leftover 仍本剧。税展示/CITY_TAX Diagnose 走 **T-Tax**，过程仍 **P79**（有窗围栏；仍不从含税地板改写 BAR）。不规定 P88。
