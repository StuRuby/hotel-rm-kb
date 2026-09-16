# Decision Card: Don't Dump BAR for Renovation（不要因为装修/软重开砍公开 BAR）

> 资产：Advisor Decision Card  
> 路径：`recommendations/dont-dump-bar-for-renovation.md`  
> 对应：问题树「半边装修要不要砍」「软重开先 399」「施工期 OCC 低所以 dump」  
> 剧本：P70 `advisor-playbooks/soft-renovation-phased-reopen.md`  
> 理论：OPERA OOO 扣库存 · Soft Discount Trap · Dual-Inventory  
> 交叉：P37 泛维修分母 · P68 对面开业 · P39 差评 · P05 真弱 · P01 Ahead  
> 状态：active · CASE 2026-08-28 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：A Vendor + C 实践（动作方向）；装修折扣 % NV  
> Last Verified：2026-08-28  
> 仿真：`cases/sim-2026-renovation-ooo-sat.md`  
> 禁止：BAR→399「装修冲量 / 软重开地板」；一夜 −15%；编华住装修 SOP；开 P71。

```yaml
decision: Do not dump public BAR because of renovation / phased PIP / soft reopen; price off sellable remaining
scenario: 半边装修 OCC 低要砍；软重开先 399；施工噪音所以全店地板；翻新房也跟 Legacy 399
required_inputs:
  - stay_date
  - physical_rooms
  - renovation_OOO_count
  - sellable_remaining
  - pace_on_sellable
  - public_BAR
signals_for:
  - proposed_cut_because_renovation_or_soft_reopen
  - physical_empty_confused_with_sellable
  - pace_ahead_or_on_on_sellable
signals_against:
  - competitor_intro_rate (go P68)
  - generic_OOO_denominator_without_reno_story (go P37)
  - review_cut_for_volume (go P39)
  - true_behind_thick_sellable (go P05)
recommended_action: 重算可售。Ahead/On → Hold 779–799 首选 799。拒绝 BAR→399。局部噪音→披露+硬挡/价值补偿。双库存可选。折扣 % NV。禁一夜 −15%。399 只在 Simulation。
risk: Soft Discount Trap 锚死市场；把供给收缩当需求死亡
follow_up: 可售 remaining；BAR 是否仍 Hold；24h 可售 Pickup
confidence: Pace+可售口径则方向 Medium；点折扣 % Low
evidence_level: A/C
last_verified: 2026-08-28
```

---

## 1. 何时用

「半边装修要不要砍」「软重开先 399」「施工期 OCC 低所以 dump」「噪音所以全店地板」。

主动词：**重算可售** / **Hold 公开 BAR** / **拒装修 dump** / **局部补偿**。  
不要用：只有一句「在装修」无 Pace、无可售数——仍条件化：默认不因装修 dump，不要说无法判断就砍。

过夜 BAR 涨/降幅度仍走 `pricing/how-much-to-move.md`。本卡只回答 **不要用装修/软重开理由砍公开 BAR**。

## 2. 硬门

| 门 | 若不满足 |
| --- | --- |
| 已确认可售 remaining（扣装修 OOO） | 混用物理空 → 先重算 |
| 拟议不是 BAR→399 / 软重开地板 | 若是 → **拒绝** |
| 不是对面新店 intro | → P68 |
| 不是无装修故事的泛维修分母 | → P37 |
| Ahead 不假装 Behind | 真 Behind → P05 |

## 3. 默认动作（一句话）

装修≠弱需求；可售 Ahead Hold 779–799 首选 799；不要 399；局部补偿不改全店 BAR；真弱才 P05；本店折扣 NV。

## 4. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-28 18:17 CST | 首版。配 P70。 |
