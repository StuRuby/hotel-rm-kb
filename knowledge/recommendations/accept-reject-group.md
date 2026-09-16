# Decision Card: Accept / Reject / Counter Group

> 资产：Advisor Decision Card  
> 路径：`recommendations/accept-reject-group.md`  
> 对应：问题树 §2 / O12；过程文件团询主动词  
> 剧本：P10 Group Evaluation  
> 理论：`group/group-displacement.md`  
> 状态：active · Wave5  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20  
> 仿真：`cases/sim-2026-group-50x500-vs-transient-800.md`

```yaml
decision: Accept / Reject / Counter a group block
scenario: Group inquiry vs expected transient on overlapping stay dates
required_inputs:
  - group stay dates, rooms by night, rate, cancel/wash terms
  - conflict-date transient OTB + remaining + current BAR
  - expected transient demand or experience final OCC (can be Hypothesis)
  - recommended: F&B / meeting, commission, historical wash
signals_for:
  - displaced_rooms_near_zero
  - peak_night_netdelta_nonnegative
  - group_net_plus_ancillary_covers_opp_cost
  - cancel_cutoff_or_deposit_exists
signals_against:
  - peak_night_rooms_only_negative
  - conflict_dates_already_on_sellout_or_early_sellout_path
  - free_cancel_to_arrival_high_wash
  - rate_would_leak_below_public_bar
recommended_action: 禁止只比团价与 BAR。按日算 Displaced。高峰夜单独亏则 Counter（价或房量），不要整段平均硬接
risk: Forecast 高估散客导致错拒；低估导致错接；Wash 后已拒散客；价泄漏
follow_up: 团是否接受 Counter；冲突日 Pickup；Wash
confidence: 有 ET+BAR+剩余时方向 Medium；幅度与 Wash Low
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用

用户问「这个团接不接」。主动词必须是 **Accept / Reject / Counter**，并写到 Stay Date。

不要用：只有两个 ADR、没有日期。仍要条件化，不要说无法判断。

---

## 2. 动作表

```text
Stay Dates:
Group:                 __ 间 × __ 元 × __ 夜
Decision:              Accept | Reject | Counter
Displacing:            <日期列表 + 间夜 + Transient 价口径>
Counter（若选）:
  价:   高峰夜 __–__ 首选 __；肩日可 __
  房量: 高峰夜最多 __ 间
  其他: 截止日 / 餐会 / 日期平移
Do-not-do:
  - 只说 500<800 所以拒
  - 用整段平均 OCC 接一个亏的周六
  - 压缩日把尾部 20–30% 整块给低价团
```

保本团价（Hypothesis）：见置换卡 §5.3。给区间 + 首选。

---

## 3. 先排除

1. 冲突日库存其实没开 / 只是渠道配额满。  
2. Pickup 很快其实已是另一团。  
3. 团价会泄漏到 OTA（批发条款）。  
4. Expected Transient 用了 Constrained 满房=需求。

---

## 4. Trigger

```
若用户补上的 Expected Transient 使高峰夜 Displaced = 0
  → 改为 Accept（仍加截止日）
若高峰夜 Expected Transient 上修到 Capacity
  → 周六房量再砍或价收到 Transient Net 附近
若团坚持原价原房量且无餐会
  → Reject，留房给出售
若 7 日内 Wash ≥ 团块 20%（有数才用）
  → 重开已保护库存；不自动降 BAR
```

---

## 5. 只再补 3 个

1. 冲突日 Expected Transient 或「这类日子最终散客 OCC」  
2. 取消 / Wash / 截止条款  
3. F&B + 会议是否付费、贡献未知就报收入  

---

## 6. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。三结果 + 按日置换。 |
| 2026-08-22 | 指针：低房价高餐饮卡。本卡正文不重写。 |

---

## 7. 交叉（2026-08-22 00:17）

「这个团 500 但餐标很高 / 要不要为了餐饮把房卖掉」**不**在本卡直接 Accept。先按日置换（本卡 / P10），餐饮翻盘走 `accept-low-room-for-fnb.md`。

- 无 F&B 贡献数字 → 客房-only Reject/Counter **不被推翻**。
- 高峰能卖满 → Counter 客房或缩房量。
- TRevPAR/GOPPAR 不替代本卡。

---

## 8. 交叉（2026-08-22 02:17）

婚宴「40 间 500 + 餐很高 + 关散客？」不在本卡直接 Accept。客房仍先按日置换（本卡 / P10），婚宴结构走 P30 `counter-wedding-room-block.md`。
