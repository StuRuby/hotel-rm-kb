# Decision Card: Fix Room Type Inversion

> 资产：Advisor Decision Card  
> 路径：`recommendations/fix-room-type-inversion.md`  
> 对应：问题树 §11 · O6；P34  
> 理论：`pricing/room-type-differential.md`  
> 状态：active · Wave5  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Restore room-type price ladder; stop selling higher type at or below lower type
scenario: Public bookable inversion or gap too small/large
required_inputs:
  - stay date public prices by room type (same breakfast/cancel)
  - remaining by type
  - pickup by type if any
  - mapping check (channel selling deluxe as base)
signals_for:
  - higher_type_price_le_lower_type
  - free_upgrade_habit
  - base_compressing_while_suite_empty
signals_against:
  - ooo_or_mapping_error
  - held_for_upgrade_not_truly_empty
recommended_action: 先排除映射/OOO。压缩路径抬低档恢复阶梯，高档不降。弱市高档空则高档小步收入带，低档不降。禁止倒挂当促销
risk: 抬低档后 Base Pickup 停；收高档仍 0（产品问题）；只改一个渠道继续倒挂
follow_up: 24h 分型价、分型 Pickup、免费升级间数
confidence: 倒挂方向 High（事实）；幅度 Hypothesis
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

公开可订价出现 **高档 ≤ 低档**，或差价过小到免费升、过大到高档死。

先排除：渠道映射错、OOO、升级预留造成「空」。

---

## 2. 动作表

```text
Stay Date:
当前梯子:   Base __ / Sup __ / Dlxe __ / Exec __ / Suite __
建议梯子:   区间 + 首选（用 room-type-differential §2 带）
路径:
  压缩/Ahead/Base 将穿 → 抬低档；高档不动或略抬；停免费升
  弱市高档空、低档已最高 → 高档 −5–10% 收入带（不一夜 −15%）；Base 不降
Inventory: 穿的那一型关低入口；高档保持 Open
Channel:   全渠道对齐，禁止只改一个 OTA
Do-not-do: 倒挂拉曝光；降高档去填总 OCC
```

例（Simulation 尺，不是真店）：Base 799、Deluxe 759 → 倒挂。若 Ahead：Base 收到 799–859 首选 829，Deluxe ≥899。

---

## 3. Trigger

```
24h Base Pickup < 阈值低 且已抬低档
  → 低档回到第一刀下限，不恢复倒挂
24h 高档仍 0 且图文库存已开
  → 高档再收一档，仍 ≥ 低档 + Superior 带
发现只改了一个渠道
  → 先对齐再谈第二刀
```

---

## 4. 只再补 3 个

1. 各房型剩余 + 当前公开价（含早/取消对齐）  
2. 是否渠道映射错  
3. 近 7 日免费升级间夜  

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。压缩抬低档；弱市收高档。 |
