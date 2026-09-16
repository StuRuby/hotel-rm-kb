# Decision Card: Don't Dump on Early Depart（不要因早离砸价 / 不要高峰续住友情折）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-dump-on-early-depart.md`  
> 对应：问题树「今天空出 8 间提前退房，今晚开特价？」「客人要续住高峰周六」  
> 剧本：P46 `advisor-playbooks/early-departure-stayover.md`  
> 理论：T07 五流量 · `overbooking/overbooking-framework.md` §1（不另发明公式）  
> 交叉：P05 leftover-弱才 dump ≠ 库存回库自动 dump · P24 已在赶客 · P40 新订 Sat-only ≠ 在店续住 · P42 干净空房 ≠ 脏 ED · P38 早离费 ≠ 收窗再 dump  
> 状态：active · Scout 2026-08-24 14:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；Mews 早离对冲 + 意外续住 accidental overbooking Vendor B；OPERA Due Out ≠ 空 A Vendor PMS；Marriott 早离费随地点/房价变 B，金额 NV  
> Last Verified：2026-08-24  
> 仿真：`cases/sim-2026-early-depart-8-vs-sat-bar.md`  
> 禁止：高峰因早离开 dump；把 ED dump 写成新公开 BAR；一夜 −15%；高峰续住友情 399；Due Out/脏房当可售；编华住 SOP；编 Marriott 中国费表；编 Walk 金额；399 当行情 Fact。

```yaml
decision: Do not dump peak inventory just because unexpected early departures returned rooms; do not courtesy-discount a peak stayover that competes with arrivals
scenario: 今天有 8 间提前退房今晚要不要开特价；客人要续住高峰周六
required_inputs:
  - stay_date
  - public_BAR
  - remaining_before_and_after_ED_or_extension
  - pace_pickup_whether_ahead_or_ice
  - hk_turned_vs_dirty_ED
  - due_out_checked_out_or_not
  - arrivals_already_covering_stayover_rooms
signals_for:
  - sales_wants_399_flash_because_ed_vacated_rooms
  - inhouse_asks_peak_saturday_extension_at_old_or_courtesy_rate
  - fo_counts_will_leave_as_remaining_before_checkout
  - peak_pace_ahead_remaining_still_tight_after_ED
signals_against:
  - night_already_leftover_weak_AND_market_weak (then P05 fences, not new BAR)
  - tomorrow_ice_extension_is_incremental (grant at BAR / published stayover rate)
  - already_walking (go P24)
  - new_booking_sat_only (go P40)
  - clean_vacant_walkin_quote (go P42)
recommended_action: 高峰/Ahead/重算后仍紧 → Hold BAR 779–799 首选 799（Hypothesis）。不开 ED dump。HK 转房前不当 walk-in。高峰续住拒或只按公开 BAR；禁止老客 399。会赶客 → P24。弱市 leftover+ED 加厚且市场弱才 P05 围栏。Due Out ≠ 空。禁一夜 −15%。399 只在 Simulation。
risk: 把库存礼物写成需求死亡；脏房/Due Out 双卖；高峰续住置换到店并制造 Walk；把 dump 价写成明天 BAR
follow_up: 重算后 Remaining vs 未到清单；HK 转房数；公开 BAR 有没有被改成 dump；续住 vs 已售到店冲突
confidence: Pace+HK 分层则方向 Medium；点价 Low
evidence_level: B
last_verified: 2026-08-24
```

---

## 1. 何时用

「今天有 8 间提前退房，今晚要不要开特价」「客人要续住高峰周六」。

主动词：**Hold BAR** / **不开 ED dump** / **高峰续住拒或 BAR** / **会赶客走 P24** / **弱市才叫 P05**。  
不要用：只有一句「空出几间」无 Pace、无重算 Remaining、无 HK——仍条件化 Hold，不要说无法判断。

过夜 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要因为早离回库就 dump 高峰；不要把高峰续住打友情折**。  
从未卖掉的 leftover dump 走 P05（须先过本卡闸）。已在赶客走 P24。新订 Sat-only 走 P40。干净空房口价走 P42。

---

## 2. 硬门（先不开 dump / 先不友情续住）

命中任一 → **不要因早离开 dump，也不要把高峰续住打成友情价**：

1. 重算后仍紧 / Pace Ahead / 市场未冰 → **Hold BAR**；**不开** last-minute dump  
2. HK 未转房 / Due Out 未 checkout → **不是** 当前可卖 walk-in；不要卖两次  
3. 在店要加高峰夜且剩余紧或该房已卖给到店 → **拒，或只按当前公开 BAR**；禁止老客折扣  
4. 答应续住会制造 Walk → **P24**，不要用待客藏  
5. 有人要把公开 BAR 改成 dump 价 / 一夜 −15% → **拒绝**  
6. 收了早离费 → **仍不是 dump 许可证**（费是 rate-rule；OPERA/Marriott 随配置/地点变，不编金额）

弱市：**该夜本已 leftover-弱 AND ED 让剩余更厚 AND 市场也弱** → 才评 **P05 围栏**。仍不是新公开 BAR。仍禁一夜 −15%。

淡市续住：次日冰、续住是增量 → **按 BAR 或已发布 stayover 价接**。仍不把 BAR 改低。

---

## 3. 何时可以开 dump / 接续住折扣以外的价

**仅形 B 才叫 P05：** leftover-弱 + ED 加厚 + 市场弱。围栏、截止、**不是**新 BAR。

尺（Hypothesis，Simulation 过夜锚 799）：过夜 **Hold 779–799 首选 799**。399 只在 Simulation 当销售提案，**不是** 新 BAR，**不是** 高峰续住友情价。相对 799，399 约 −50%，远超一夜 −15% 闸（679）。

高峰续住若接：**只按当前公开 BAR**（首选 799）。不存在「老客 399」。

**过夜渠道** 若 P05 已开 dump：那是 leftover 围栏。不要把当天 ED 回库再叠一道更低公开 BAR。脏 ED 房仍须 HK 才进 P42 前台。

---

## 4. 动作表

```text
Stay Date:        早离回库夜 或 续住要占的夜
Demand:           Ahead/紧/未冰 | leftover-弱且市场弱 | 未知（未知当未冰）
HK / Due Out:     已转且已 checkout 才 walk-in ready
Public BAR:       Hold；不改成 ED dump 价
Early Departure:  未冰/偏紧 → Hold，不开 dump；HK 先
                  真弱三条件 → 才 P05 围栏
Stayover:         高峰紧 / 到店已覆盖 → 拒或 BAR；会 Walk → P24
                  次日冰 → BAR 或已发布 stayover 价
Do-not-do:
  - 高峰因早离开 399 / dump 写成新 BAR / 一夜 −15%
  - 高峰续住友情 399
  - Due Out / 脏房当可售
  - 编费表 / 佣金% / 华住 SOP / Walk $
  - 顾问代改离店日 / 代挂 OTA
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-24 14:17 CST | 首版。P46。高峰早离 Hold；弱市才 P05；高峰续住拒或 BAR；Due Out ≠ 空。双动词：不要 dump 高峰 ED；不要高峰续住友情折。 |

---

## 6. 交叉（不改 §1–5）

P05 开过夜今夜围栏 ≠ 本卡允许把当天 ED 当需求死亡去 dump。P24 是 Walk 程序；本卡尽量避免走进去。P40 新订 Sat-only 另一道。P42 前台过夜口价只对干净空房。P38 早离费是房价规则，不是「收窗然后 dump」。T07 框架五流量同一套。T19 高峰 399 对 799 机会成本不是 0。T20 无地板不发明 699。

> 交叉（2026-08-28 06:17）：延退/早到 → **P67**；本卡正文不改。
