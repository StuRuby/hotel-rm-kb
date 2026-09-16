# Decision Card: Protect Compressing Room Type

> 资产：Advisor Decision Card  
> 路径：`recommendations/protect-compressing-room-type.md`  
> 对应：问题树 §11；P13  
> 剧本：`advisor-playbooks/room-type-compression.md`  
> 状态：active · Scout 2026-08-20  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: When one room type is compressing, choose raise-base / close-base / lift-premium
scenario: Base selling out while higher types remain
required_inputs:
  - remaining and public price by type
  - pickup by type
  - shared/nested/mapping check
  - free-upgrade habit
signals_for:
  - base_days_to_sellout_le_3
  - free_upgrades
  - gap_too_small
signals_against:
  - ooo_or_mapping
  - one_group_spike
  - unknown_room_structure
recommended_action: A 涨/关基础；B 价已最高则只关基础留高档；C 差过小则抬高档。高档不降。压缩日付费升级≥公开差×0.7。未知房型只动 BAR/Base
risk: 关错共享池；免费升把高档卖穿
follow_up: 24h 分型 Pickup、免费升级间数
confidence: 分型齐 Medium；差价带 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

总 OCC 未满，某基础型将穿。三选一，禁止「适当拉开」。

---

## 2. 动作表

```text
Stay Date:
Decision: A 涨关基础 / B 只关基础 / C 抬高档 / A+C
Upgrade:  付费；压缩日 ≥ 公开差×0.7
Do-not-do: 降高档救 OCC；免费升；未知结构动套房
```

兼倒挂 → 先 `fix-room-type-inversion.md`。

---

## 3. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。 |
