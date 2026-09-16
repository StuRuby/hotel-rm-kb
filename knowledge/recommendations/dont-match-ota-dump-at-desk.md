# Decision Card: Don't Match OTA Dump at the Desk（前台不跟 OTA 今夜倾倒价）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-match-ota-dump-at-desk.md`  
> 对应：问题树「前台跟 OTA 今夜价」；用户原话「前台问今晚 walk-in 打几折」「OTA 今夜 399，前台要不要跟？」  
> 剧本：P42 `advisor-playbooks/same-day-walk-in.md`  
> 理论：P20 `channel/net-contribution.md` · T19 `theory/profit-contribution.md` · T20 · `pricing/how-much-to-move.md`  
> 交叉：P05 渠道 last-minute ≠ 前台口价 · P23 会员 ≠ walk-in · P25 mix ≠ 一张上门单 · P16 跟竞对 ≠ 跟自己的 dump · P18 报名闸  
> 状态：active · Scout 2026-08-23 22:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；HSMAI BAR 定义 A；HotelTechUpdate 晚间即兴砍 walk-in Vendor B；RoomMaster C 方向  
> Last Verified：2026-08-23  
> 仿真：`cases/sim-2026-walkin-vs-ota-399.md`  
> 禁止：前台跟 399；把 399 写成新 BAR；一夜 −15%；编中国前台折扣表；编美团今夜 SOP；无成本说 399 总比空着强；编佣金%。

```yaml
decision: Do not match an OTA same-night dump at the front desk; walk-in is a zero-commission fence, default BAR or higher
scenario: 前台问今晚 walk-in 打几折；OTA 今夜 399 前台要不要跟
required_inputs:
  - stay_date_is_tonight
  - public_BAR
  - OTA_tonight_lowest_and_whether_dump
  - sellable_remaining
  - pace_pickup_market_ice
signals_for:
  - guest_at_desk_no_reservation
  - OTA_showing_dump_below_BAR
  - FO_wants_to_match_dump
  - sales_wants_to_rewrite_BAR_to_dump
signals_against:
  - not_tonight (go P05/P01)
  - member_id_presented (go P23)
  - remaining_is_OOO (go P37)
  - truly_ice_after_P05_checks (optional desk fence ABOVE OTA net)
recommended_action: 未冰 → 前台报 BAR 或更高（Hypothesis 779–799 首选 799）。真冰 → 当天前台围栏仍盖住 OTA 净和贡献（仿真 699–719），不是 399，不是新 BAR。OTA dump 走 P05 配额+截止。禁一夜 −15%。
risk: 跟 dump 吐掉零佣金优势；训练「上门就有今夜价」；把战术价写成明天 BAR；无成本把 399 当贡献
follow_up: 被拒 walk-in 后 Pickup 是否仍在；OTA dump 是否仍开；公开 BAR 有没有被改
confidence: Pace+BAR vs dump 分层则方向 Medium；点价 Low
evidence_level: B
last_verified: 2026-08-23
```

---

## 1. 何时用

「今晚 walk-in 打几折」「OTA 今夜 399，前台跟不跟」。

主动词：**Hold 前台 BAR** / **当天前台围栏（真冰）** / **拒绝跟 dump** / **拒绝改公开 BAR**。  
不要用：只有一句「散客好不好做」无今晚、无 BAR、无 OTA 价——仍条件化，不要说无法判断。

公开 BAR 的涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **上门这张单不要去对齐 OTA 倾倒价**。  
渠道要不要 dump 走 P05。报不报今夜特价走 P18。会员走 P23。

---

## 2. 硬门（先不跟 dump / 先不改 BAR）

命中任一 → **不要把前台口价改成 OTA 今夜 dump，也不要把 dump 写成公开 BAR**：

1. 今晚仍有需求信号（Pickup、上门、竞对未冰、Peak/Ahead）→ 前台 **BAR 或更高**  
2. 有人要把公开 BAR 改成 399 / 一夜 −15% → **拒绝**  
3. 拟议前台价净价 ≤ OTA dump 净价 → **拒绝该价**（佣金未知则：前台毛价不应 ≤ dump 毛价）  
4. 净价会穿贡献，或成本 Unknown 却要配已知深折 → **T19 关该价**  
5. 有用户声明品牌底、拟议价穿底 → **T20 不砸穿**  
6. Remaining 其实是 OOO → **P37**，不是打折理由  

真冰（OTB 空、Pickup 死、市场空、P05 排除做完）→ 才评 **当天前台围栏**。围栏仍 > dump 净，且不是新 BAR。

---

## 3. 何时可以给前台低于 BAR 的当天价

**仅形 B：** 真冰且过完 P05 排除。口价是 **当天、前台、有截止** 的围栏，不是日历 BAR。

尺（Hypothesis，Simulation 用 799 锚）：**699–719** 首选 719。相对 799 约 −10–12.5%，**不到** 一夜 −15%。399 是 −50%，不是围栏。

仍须：`Walk-in 净 > OTA dump 净` 且（成本已知则）`净 > 变动成本`。无佣金% 时：前台毛价必须明显高于 399。

**OTA 渠道** 若 P05 已开 dump：保持配额+截止；前台 **不跟**。不要两道都写成 399 BAR。

---

## 4. 动作表

```text
Stay Date:        今晚 DTA=0
Demand:           未冰 | 冰 | 未知（未知当未冰）
Public BAR:       Hold；不改成 dump
Desk quote:       未冰 → 779–799 首选 799（Hypothesis）
                  真冰 → 699–719 首选 719，净 > dump 净
OTA dump:         渠道战术；前台不跟
Do-not-do:
  - 前台跟 399
  - 399 → 新 BAR / 一夜 −15%
  - 无成本说总比空着强
  - 编前台折扣表 / 今夜 SOP / 佣金%
  - 顾问代录入 PMS
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 22:17 CST | 首版。P42。未冰前台 Hold BAR；真冰当天围栏盖住 OTA 净；拒跟 dump；拒改 BAR。 |

---

## 6. 交叉（不改 §1–5）

P05 开 OTA 今夜围栏 ≠ 本卡允许前台对齐。P20：上门是 Direct 结构优势。T19：399 可能穿贡献。T20：无地板不发明 699 当品牌底；699–719 只是弱日围栏 Hypothesis。P23 会员码另算。
