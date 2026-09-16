# Decision Card: Who to Walk First / Stop Overbook if Walk Risk

> 资产：Advisor Decision Card  
> 路径：`recommendations/who-to-walk-first.md`  
> 对应：问题树 O11 · §10 · Scout §29  
> 剧本：`advisor-playbooks/overbooking-walk.md`（P24）  
> 绑定：`overbook-or-not.md`（要不要超、方向；本卡管**今晚赶谁 + 停超**）· `treat-otb-as-soft.md`（高取消）· `overbooking/overbooking-framework.md`  
> 状态：active · Scout 2026-08-21 14:17  
> 知识类型：Best Practice / Vendor Methodology / Hypothesis  
> 证据等级：B（程序）；客类成本差 A 题录；补偿金额禁止输出  
> Last Verified：2026-08-21 14:17 CST

```yaml
decision: Tonight, stop taking arrivals if walk-risk; walk lowest-cost guests first; stop overbooking forward; never invent walk cost or exact rooms
scenario: Arrival day; possible walk / already overbooked; user asks 今晚赶客 / 先赶谁 / 还要不要超售
required_inputs:
  - remaining_vs_arrivals_tonight_vs_stayover
  - already_overbooked_or_unknown
  - cancel_no_show_history_or_explicit_none
  - loyalty_prepaid_suite_flags_if_known
  - hotel_walk_policy_if_user_provides
  - alternate_hotels
  - DTA
signals_for:
  - arrival_day_and_physical_short
  - unarrived_less_than_overbook_gap
  - mix_still_has_low_rate_nonloyalty
  - walk_option_exists_or_unknown
signals_against:
  - channel_quota_full_only
  - unwashed_group_fake_full
  - unarrived_still_covers_gap
  - low_rates_still_open_use_P03_first
recommended_action: 只建议不执行。停接当晚到达。必须赶则先低价非会员最后预订；后赶会员/预付/指定套房。无史不给精确间夜。不编 Walk 成本与补偿额。默认停往前超。
risk: 过早外送；赶错精英/预付；取消潮中继续超；把品牌 USD 补偿网格当中国独立店政策
follow_up: 未到清单、延住、24h 取消、可送店是否还有房
confidence: 停接与排序方向 Medium；间夜与金额不可给
evidence_level: B
last_verified: 2026-08-21
```

---

## 1. 何时用

用户原话：「今晚可能赶客怎么办 / 先赶谁 / 还要不要继续超售」。

- **要不要开始超 / 超多少方向** → 先 `overbook-or-not.md`。无史仍不给间数。  
- **今晚已经可能不够** → 本卡。价格通常不是第一刀。  
- 价还最低、低价计划开着 → **先 P03 关低价**，不要靠再超一层补 ADR。  
- 高取消、DTA 仍长 → P14 Soft OTB，不是本卡。

---

## 2. 动作表

```text
Stay Date: 今晚
停接当晚新到达:     是（已超或未到 < 缺口）/ 先等（未到仍覆盖）
先赶:               低价 · 非会员 · 最后预订 · OTA/灵活/单晚
后赶:               会员 · 预付 · 指定套房 · 多晚 · 协议
继续超售往前:       默认否
幅度:               今日不给间数（无史/无分布/无 Walk 成本）
补偿:               用户店规；否则只写安置方向，不写金额
Do-not-do:
  - Walk=房价×2 当 Fact
  - 超售 7 间
  - 2026 中国平台罚则额度
  - 写成已改 PMS
  - 一夜 −15% 当赶客方案
  - 价已最高还涨
```

Marriott / IHG 公开保证是 **A Vendor**（会员/信用卡担保网上预订的安置结构）。**不要**把 Marriott 页上的 USD/积分表抄进独立店建议。Hyatt 预付保证页本轮未打开 → NV。

---

## 3. 与超售卡的分工

| 问题 | 卡 |
| --- | --- |
| 要不要超、方向、风险 | `overbook-or-not.md` |
| 今晚赶谁、停不停接、停不停往后超 | **本卡** |
| 高取消还拿 OTB 涨 | `treat-otb-as-soft.md` |

Critical ratio CR=Walk/(Walk+Empty) 仍在框架里。**没有 Walk 成本就不要算 CR，更不要用 2 倍口诀填数。**

---

## 4. Trigger

见剧本 §6。一句话：未到 < 缺口 → 停超并按序预案；取消骤降 → 超售收到 0。

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 14:17 CST | 首版。今晚程序 + 停超。不写金额与精确间夜。 |
