# Open Rate Classes｜公开在售价档 vs 意图地板（gap；nesting mode NV；无默认 %）

> 卡：`metrics/open-rate-classes.md`  
> 类型：过程计数（轻）  
> Evidence Level：B / Hypothesis（店内公开档 vs 地板）；B 定义指针（AccountingTools nested — §50）；A Vendor 指针（Amadeus nested allotment — §50 / inventory-control）  
> Source：店内公开可订产品列表 + 意图 BAR；Vendor nesting 机制名  
> Source Date / Last Verified：2026-08-27  
> Knowledge Type：Hypothesis（店内尺）+ Fact（Vendor/定义：nested 允许高价占低价块 — 机制，不是中国 SOP）  
> 配套：`../advisor-playbooks/nested-rate-class.md` · `../recommendations/dont-leave-low-class-open-on-peak.md` · `../recommendations/dont-strip-low-class-on-weak-nights.md` · `../recommendations/close-low-rate-compression.md`  
> 禁止：发明默认关档 %、中国嵌套 SOP、EMSR 最优整数、佣金%；把 14/399/799 写进公式当常模；把错映射活价当「开着的低档」而不走 P60。

## 定义

指定 Stay Date：

- **Intended_floor**：意图地板（若刚涨 BAR = 新 BAR；若只关不涨 = 当前意图 BAR）。
- **Open_public_classes**：仍公开可订的价档/产品（直销+主 OTA；尽量同取消/含早口径）。
- **Open_below_floor**：Open_public_classes 中价格 < Intended_floor 的集合。
- **Nesting_mode**：nested / shared / dedicated / **Unknown（NV）**。不明不编。
- **Gap_low**：min(Open_below_floor) − Intended_floor（通常为负）；或列出档位数。

**无默认「应关百分之几」。** 本店价码名 / hurdle 字段 = **NV**。

活价不是本打算卖的 → 先 `live-vs-intended-rate.md` / **P60**，不要当本尺的「开着低档」。

## 公式

**店内 / 顾问 Hypothesis（须声明）**

```
Intended_floor_t        = 意图地板（用户：新 BAR 或当前 BAR）
Open_public_classes_t   = 仍公开可订产品列表（用户截图）
Open_below_floor_t      = { r in Open_public_classes_t | price(r) < Intended_floor_t }
Gap_low_t               = min(price(Open_below_floor_t)) − Intended_floor_t   # 若集合非空
Nesting_mode            = nested | shared | dedicated | Unknown
# Open_below_floor 非空 + Pace Ahead → 高峰关/限候选（P64 形 A/C）
# Open_below_floor 空 + 低档全关 + Pace Behind → 弱夜误关候选（形 B）
# 无默认 close_%
# 仿真 399/799/14 只在案例文件
# 本店字段名 / 华住价码 SOP = NV。不编
```

Need Verification：本店 rate class / booking limit / hurdle 字段名；nested 方向；促销是否单独开关。不编华住 SOP。

## 上游

公开栏截图、意图 BAR、促销开关、CM 映射核对（P60 门）、Pace/Remaining。

## 下游

是否关/限低档、是否误以为已涨价、是否弱夜该重开围栏、是否移交 P60/P18/P19/P33。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| BAR 显示 799 = 地板已生效 | 若 399 仍可订，地板被打穿 |
| 关低档 = 已经涨了价 | 关低是库存/限额杠杆，不是报价锚 |
| 没有 nesting 字段就不能管 | Unknown → 只动公开可见产品 |
| 399 开着一定是策略低档 | 先排除错映射（P60） |
| 应关 30% 低价配额 | **无默认 %**；按地板与列表关 |

## 顾问决策含义

1. 先要 **Open_below_floor 列表**；没有 → 条件化，不停。  
2. 列表非空 + Ahead → **关/限**；Hold/评涨意图 BAR。  
3. 列表空 + 低档全关 + Behind → **形 B**；重开围栏或 P05/P02。  
4. Nesting Unknown → 不编方向；只动看得见的。  
5. 本店字段缺 → **NV**；问，不编。

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-27 18:17 CST | 首版。公开档 vs 地板；nesting NV；无默认 %。 |
