# Decision Card: Steer Mix by Net（按净拧渠道组合）

> 资产：Advisor Decision Card  
> 路径：`recommendations/steer-mix-by-net.md`  
> 对应：问题树 §12；P25  
> 剧本：`advisor-playbooks/direct-vs-ota-mix.md`  
> 理论：`segmentation/segment-mix.md` · `channel/net-contribution.md`  
> 先调用：`recommendations/rank-channel-by-net.md`（P20）  
> 状态：active · 早课 2026-08-21 08:00  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；公式 A；费率 NV  
> Last Verified：2026-08-21

```yaml
decision: Steer Direct vs OTA mix by net contribution, not Gross ADR or total OCC
scenario: OTA share up, direct down; user wants match-all-lowest or shut OTA
required_inputs:
  - stay dates with Peak/weak flag
  - nights share Direct vs OTA vs Other
  - Gross ADR by channel
  - commission/discount if known
  - whether direct is open, on parity, inventory synced
signals_for:
  - peak_ota_deep_discount_rising
  - net_down_while_gross_or_occ_up
  - request_to_match_ota_lowest
  - request_to_shut_ota
signals_against:
  - direct_closed_or_inverted_or_desynced
  - ota_gain_is_incremental_on_weak_days_net_positive
  - closing_channel_kills_total_nights
recommended_action: 先排除直销故障。按净排序。高峰关深折OTA、直销保持可订；弱日可留OTA围栏−3–5%。拒绝全渠道跟最低、拒绝关光OTA。OTA毛高不是保OTA的理由。出资未知不报。价已最高只关不涨。
risk: 关光主渠道制造假低OCC；把直销降到神券地板；假精确净额
follow_up: 24h 分渠道Pickup；倒挂是否还在；破价是否还在
confidence: 直销已开+日期能切则方向 Medium；缺费率金额 Low
evidence_level: B
last_verified: 2026-08-21
```

---

## 1. 何时用

「OTA 从 40% 到 55% 了要不要关掉」「全渠道跟最低吧」「OTA 均价更高应该保」。

主动词：**修直销 / 收 OTA 深折 / 弱日留围栏 / 不动**。  
不要用：只有一句「渠道结构不好」无日期。

先过 P20 排序卡。本卡负责 **mix 动作**（开谁关谁），不负责报促销（P18）。

---

## 2. 硬门（先停）

命中任一 → **不要关 OTA、不要跟最低**：

1. 直销配额 0 / 不可订  
2. 直销公开价 > OTA  
3. 库存/房价不同步  
4. 升的是弱日增量且净看起来 >0  
5. 费率 Unknown **且** 用户要一个「关掉能省 XX 元」——只给结构动作，不报金额

---

## 3. 动作表

```text
Stay Dates:
Mix Direct / OTA:
Net / 结构句:
Exclusion:   直销开? 平价? 同步? 增量?
Decision:
  Direct:        Open
  OTA deep:      高峰关 / 弱日 −3–5% 围栏
  OTA BAR 层:    可订
  Match lowest:  否（只平 BAR 层）
  Shut OTA:      否
Price:           价已最高只关不涨；Ahead 价低走 +8–15%，不靠保 OTA
Promo:           出资未知不报
Do-not-do:
  - OTA ADR 高所以保 OTA
  - 全渠道跟最低
  - 关光 OTA / 关直销
  - 编佣金%
  - 一夜 −15%
```

压缩日低价 OTA 配额：剩余 30–50%（Hypothesis）或关 < 新地板。

---

## 4. Trigger

```
收深折后 24h 总 Pickup 塌且直销没接住 → 弱日开回 OTA BAR 层，不重开神券
仍倒挂 / 直销不可订                 → 停 mix 战略，只修供给
用户补费率                           → 重算净排序
Pace 转 Ahead 且深折仍开             → 当天关深折
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 08:00 CST | 首版。P25 配套。 |
