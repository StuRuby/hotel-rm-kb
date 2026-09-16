# Decision Card: Follow or Hold Member Rate（涨 BAR 时会员跟 / 冻 / 部分跟）

> 资产：Advisor Decision Card  
> 路径：`recommendations/follow-or-hold-member-rate.md`  
> 对应：问题树 §12 · §31；P23  
> 剧本：`advisor-playbooks/member-vs-public.md`  
> 理论：`segmentation/segment-mix.md` §2.8 · `pricing/how-much-to-move.md`（不改幅度）  
> 交叉：P18 不报倒挂促销 · P25 高峰关深折不关直销  
> 状态：active · 案例与剧本 2026-08-21 18:17  
> 知识类型：Best Practice / Hypothesis  
> 证据等级：B（动作）；品牌页 A Vendor 且品牌专属；10% 非 Fact  
> Last Verified：2026-08-21

```yaml
decision: Follow / Hold / Partial the member rate when public BAR moves; fix inversion before raising member
scenario: BAR 要涨会员跟不跟；会员已高于公开OTA；高峰会员打到深折下面
required_inputs:
  - stay date + DTA + Pace/Pickup + Peak flag
  - public BAR (direct and OTA BAR layer)
  - current member rate and whether gated
  - OTA public BAR vs OTA deep lowest
  - brand loyalty rule if any (else hotel-owned fence)
  - member mix % if known
signals_for:
  - bar_raise_member_lagged
  - member_above_ota_public_bar_layer
  - peak_member_under_ota_deep_or_gap_too_wide
signals_against:
  - brand_rule_already_given_must_obey
  - direct_closed_or_desynced
  - ota_lowest_is_deep_promo_not_bar_layer
  - price_already_highest_on_public_bar
recommended_action: 先问品牌规则；无规则当自有围栏，默认同向跟、差价保持在−3–5%（档E Hypothesis），禁止写成必须便宜10%。会员已高于公开OTA BAR层→先修倒挂（同步/围栏），不要再涨会员。高峰会员打到深折下→收口差价。公开涨幅仍走+5–8%/+8–15%；价已最高只关不涨。出资未知或会倒挂会员→不报。
risk: 把品牌2%/5%抄成独立店义务；倒挂时再涨会员把人赶去OTA；高峰Freeze把会员打成深折；跟神券
follow_up: 24h 分渠道Pickup；四价是否还倒挂；深折是否还开
confidence: 四价+日期类型齐则方向 Medium；点差 Hypothesis；缺品牌规则不升
evidence_level: B
last_verified: 2026-08-21
```

---

## 1. 何时用

「BAR 涨了会员跟不跟」「会员比 OTA 还贵」「会员已经比门市便宜太多」。

主动词：**Follow / Hold / Partial**（写到 Stay Date + 两个价）。  
不要用：只有一句「会员要有优势」无四个价。

公开 BAR 走 Increase BAR / 幅度卡。本卡只回答 **谁跟着动**。

---

## 2. 硬门（先停）

命中则不要用「跟涨会员」当第一刀：

1. 用户已给品牌义务 → 先对齐规则，不发明 10%  
2. 直销不可订 / 不同步 → 只修供给  
3. 会员 > OTA **公开 BAR 层** → 先修倒挂，**不涨会员**  
4. 比的是 OTA 深折不是 BAR 层 → 高峰关深折，会员不去跟  
5. 公开价已最高 → 公开只关不涨  
6. 新促销会让公开 OTA < 会员 → 不报（P18）

---

## 3. 动作表

```text
Stay Dates:
Brand rule:     有（写出%） / 无→自有围栏
Public BAR:     current → range + preferred
Member:         current → range + preferred
Who follows:    Follow 同% | Keep gap | Freeze/Hold | Partial
OTA BAR 层:     对齐公开 BAR
OTA deep:       高峰关；弱日 −3–5%
Target fence:   新 BAR 的 −3–5%（Hypothesis）；品牌规则优先
Do-not-do:
  - 独立店必须便宜 10%
  - 倒挂再涨会员
  - 高峰会员打到深折下
  - 一夜 −15%
  - 编佣金% / 编品牌义务
```

独立店默认：**Follow 同向**，差价收到 −3–5%。  
旧差已经 ≥8% 且当天 Peak → **Partial 或收口**（抬会员），不是 Freeze。  
弱日可 Hold 会员一刀，BAR 仍按 P02 决定。

---

## 4. Trigger

```
24h 会员 Pickup 塌且深折仍开     → 先关深折，不降会员
会员仍 > OTA BAR 层              → 停涨会员，只同步
Pace 转 Ahead 且会员仍过深       → 当天收口到 −3–5%
用户补品牌规则                   → 重算点差
价已最高                         → 公开只关不涨
```

---

## 5. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-21 18:17 CST | 首版。P23 配套。Follow / Hold / Partial。 |
| 2026-08-21 20:17 CST | 复盘指针：会员围栏 −3–5% ≠ 再叠一层预付/促销 5%。无 needs_revision。 |
