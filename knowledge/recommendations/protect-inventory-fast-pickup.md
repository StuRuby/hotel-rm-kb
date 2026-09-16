# Decision Card: Protect Inventory（Pickup 过快 · 早卖完风险）

> 资产：Advisor Decision Card  
> 路径：`recommendations/protect-inventory-fast-pickup.md`  
> 对应：Pickup Too Fast / Sellout Risk / 某房型先穿；问题树 §5、§7、§8、§11  
> 剧本：`advisor-playbooks/fast-pickup.md`  
> 涨价子程序：`recommendations/increase-bar-pace-ahead.md`（本卡管库存/限制/关低价；价的数字走那张）  
> 状态：active · Wave2  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B  
> Last Verified：2026-08-20

```yaml
decision: Protect inventory（关低价 / MinLOS / 分房型留房 / 必要时涨 BAR）
scenario: Fast pickup with early-sellout risk
required_inputs:
  - DTA
  - OTB + remaining（最好分房型）
  - Pickup 1D + 3D + 7D（能拆 Segment 最好）
  - current_BAR 与在售低价产品
  - restriction_status
  - competitor_rate（决定涨还是只关）
signals_for:
  - days_to_sellout_lt_dta
  - pace_ahead
  - room_type_compression
  - low_rates_still_open
signals_against:
  - pickup_is_one_group
  - already_highest_priced
  - cancellation_spike
  - false_pickup_from_reimport
recommended_action: 先关低于新地板的公开低价；基础房可售收紧或分房型保护；高峰评 MinLOS；BAR 已最高则只限制不涨
risk: 一团假快；MinLOS 挡高价值单晚；关错渠道导致曝光塌
follow_up: 24/48h Pickup 间夜与 Segment、取消、分房型剩余、低价是否仍可订
confidence: Medium（方向）；MinLOS 单独 ≤ Low，除非肩日数据齐
evidence_level: B
last_verified: 2026-08-20
```

---

## 1. 何时用这张卡

同时接近：

- Pickup Fast：Days-to-Sellout < DTA，或 3D 与 7D 都明显高于该店平时，且速度不是最后一天一笔堆出来。
- Remaining 正在变薄，DTA 还不是最后 72h（DTA 3–30 最常用）。
- 或：**总 OCC 还好，但某基础房型剩余 / 日均 Pickup < 3 日**（房型压缩）。
- 低价 Rate Plan / 促销 / 批发仍开着。

**不要用这张卡：**

- Pickup 很快但已确认是一笔大团 → Group Evaluation。
- OTB 高但 7D Pickup 已停、无事件 → 可能早已订完，再关只会伤尾部。
- 价格已是最高竞对之上，且 Remaining 仍厚 → 可只盯，不新设限制。
- 用户只想「涨价」且库存结构未知 → 可先走 Increase BAR，本卡作配套。

---

## 2. 涨 vs 只关 vs 只限制

| 价格位置 | Remaining / 速度 | 首选工具 | 不做什么 |
| --- | --- | --- | --- |
| BAR < 最低竞对，Pace Ahead | Days-to-Sellout < DTA | **关低价 + 走 Increase BAR 第一刀** | 只关房不涨（浪费 ADR） |
| BAR 已在竞对带内 | 仍会早满 | 关低价；BAR +5–10%（Hypothesis） | 一次跳到最高之上 |
| BAR ≥ 全部可比竞对 | 仍会早满 | **只关低价 / 限基础房 / 评 MinLOS，不再涨** | 「我觉得还能涨」 |
| 仅某房型快 | 其他房型慢 | 关/涨该房型；其他不动或反向刺激 | 全店一刀切 |
| 3D 快、7D 不快 | Segment 未知 | 先核大单；24h 只关明显破价，不涨不设 MinLOS | 直接第二刀 |

MinLOS：仅当高峰 + 肩日数据齐 + overnight 合理。缺肩日 → 今天不设，Confidence Low。

---

## 3. 必填输入 vs 缺了怎么办

| 输入 | 缺了 | 本卡怎么条件化 |
| --- | --- | --- |
| Remaining | 用 总房−OTB | OO 当 0，标 Hypothesis |
| 分房型剩余 | 可能涨错/关错型 | 只动 BAR/基础房；套房差价不动 |
| 1D+3D+7D | 只有 3D | 禁止 MinLOS；涨价最多第一刀 |
| Segment | 可能是一团 | **IF 单笔 ≥总房 13% 或窗口 50% THEN 停用加码** |
| 低价产品列表 | 不知关什么 | 条件句：任何公开可订 < 新地板的产品关掉 |
| 竞对 | 不知是否已最高 | 默认关低价 + 小步涨；已自称最高则只关 |
| 肩日 OTB | 不能设 MinLOS | 今天不设 |

---

## 4. Signals For / Against

### For

- [ ] Days-to-Sellout < DTA（Fact 计算）
- [ ] Pace Ahead ≥ +8pp
- [ ] 3D 与 7D 速度接近（可持续，不是一天堆）
- [ ] 低价产品仍可订，成交价 < BAR
- [ ] 某基础房剩余按当前速度 ≤3 日卖完
- [ ] 竞对在涨或出现满房
- [ ] 取消稳定（有数字才算正向；「正常」不算）

**启用关低价：** For 中 Velocity 或 Inventory pressure 1 条即可。  
**启用涨价：** 另需 Price 家族，走 Increase BAR 卡。  
**启用 MinLOS：** For + 事件/周末 overnight 旁证。缺旁证不做。

### Against

- [ ] 单笔 Group 可解释全部速度
- [ ] 系统重导 / 重复导入
- [ ] 净 Pickup 不快（取消回流）
- [ ] BAR 已最高且低价已关
- [ ] 取消突然升高
- [ ] DTA>45 且全是早订合约，散客窗未开始

---

## 5. 推荐动作

### 5.1 第一刀（立即，可与涨价并行）

```text
Stay Date:            <焦点日>
Room Type:            先保护正在穿的基础房；高档房保持可售（除非也在穿）
Rate Plan:            任何公开可订、价 < 新地板 的促销 / 限时抢 / 连住破价 / 批发外泄
Current:              Unknown 则写「低于第一刀 BAR 下限者一律关」
Inventory:
  基础房：保持可售，但可把低价渠道配额收到剩余的 30–50%（Hypothesis）
  不整日 Close BAR
Restriction:          默认今天不新设 MinLOS（见 5.3）
Channel:              关破价；直销与主 OTA 对齐到新地板
Staging:              先关低价（可逆），再涨 BAR（若适用）
Do-not-do:
  - 庆祝 OCC 继续放促销
  - 用关光所有渠道代替涨价
  - 全房型同一幅度
```

**新地板（Hypothesis）：**  
若同时涨 BAR，地板 = Increase BAR 第一刀下限。  
若只保护不涨，地板 = 当前 BAR。  
例：当前 899，第一刀目标 999–1049 → 关一切 <999 的公开价。

### 5.2 分房型（有结构时必须写）

| 信号 | 动作 | 首选 |
| --- | --- | --- |
| 基础房 Days-to-Sellout ≤3，高档仍厚 | 涨/关基础；高档不动或微涨差价 | 基础走 Increase BAR；高档差价保持原结构 |
| 基础已空、高档剩 | 不再降高档「清库存」；用升级 | 高档价 ≥ 原基础新价 + 原差价 |
| 全型都快 | 关低价 + 全店 BAR 第一刀 | 套房不大于基础的第一刀百分比 |

### 5.3 MinLOS（条件化，默认不做）

```
IF 周末或已证实 overnight 事件
   AND 肩日（−1 或 +1）OTB 明显低于高峰
   AND 当前无 MinLOS
THEN 评高峰 MinLOS=2（只盖高峰夜，不盖整周）
ELSE 今天不设。

解开 Trigger：24h 净 Pickup 坍到阈值低，或取消翻倍。
```

### 5.4 与 Increase BAR 的分工

- 数字涨多少：`increase-bar-pace-ahead.md`（899→1029 那套启发式）。
- 本卡负责：关低价、配额、分房型、MinLOS、以及「价已最高则不涨」。
- 两张可以同一天出，但只算 **1 个主动作 + 1 个配套**。

---

## 6. 风险

| 风险 | 观察 | Trigger |
| --- | --- | --- |
| 假 Fast（一团） | Segment / 大单 | 单笔 ≥总房 13% 或窗口 50% → 撤回涨价加码；低价已关可保持 |
| 关完没曝光 | 渠道可订与口述流量 | 主 OTA 不可订 → 先开回 BAR 层，不重开破价 |
| MinLOS 挡单晚 | 短 LOS 询单 / Pickup 骤停 | 24h Pickup < 阈值低 → 解开 MinLOS |
| 基础卖穿高档剩 | 分房型剩余 | 基础剩 ≤3 间 → 关基础或只留直销；高档不降 |
| 取消变差 | 24h 取消 | ≥总房 2% 或翻倍 → 停加码，不自动大降 |

---

## 7. What To Watch

1. 该 Stay Date 净 Pickup 间夜（24/48h）  
2. 新单 Segment（有无大单）  
3. 分房型剩余  
4. 低于地板的产品是否还在可订  
5. 取消间夜  
6. 竞对 BAR / 是否满房  

---

## 8. Trigger（300 间尺度）

| 事件 | 300 间 | 动作 |
| --- | --- | --- |
| 过激 | 24h Pickup < **3** | 解开当天新 MinLOS；BAR 按 Increase BAR 回退带；低价不自动重开 |
| 持有 | 24h Pickup **3–7** | 守关低价 + 当前 BAR |
| 仍过快 | 24h Pickup ≥ **8** 且非一团 | 第二刀走 Increase BAR；基础房配额再收一档 |
| 房型穿 | 某型剩余 ≤ **5** 或 Days-to-Sellout≤2 | 关该型低价渠道；只留直销或升级 |
| 质量翻转 | 单笔 Group ≥ **40**（或总房 13%） | 停涨；评团 wash；已关破价保持 |

---

## 9. Confidence

- 关低价：默认 **Medium**，有「成交价 < BAR」截图可偏 High。  
- 涨价幅度：跟 Increase BAR，对外 Medium。  
- MinLOS：缺肩日则 **Low**，写进 IF，不进第一刀。  

---

## 10. 边界

| 更像谁 | 去哪 |
| --- | --- |
| 只要涨多少 | `increase-bar-pace-ahead.md` |
| DTA≤2 或已几乎满 | Sellout Risk / Overbooking |
| 已提前多日满且 ADR 低 | Early Sellout（复盘 + 管相邻日） |
| 慢而不是快 | `stimulate-slow-pickup.md` |

---

## 11. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-20 | 首版。与 Increase BAR 分工：本卡管保护工具。配额 30–50%、MinLOS 条件为 Hypothesis。 |
