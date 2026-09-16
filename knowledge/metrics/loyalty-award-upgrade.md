# Loyalty Award / Elite Upgrade｜兑房间夜 / 升级间夜 / 付费剩余（Hypothesis，不是 STR Award KPI）

> 卡：`metrics/loyalty-award-upgrade.md`  
> 类型：Segment mix + 口径诊断  
> Evidence Level：S（STR Sold 不含无关 complimentary；兑房进 Sold **NV**）；A Vendor BW only（FX 档不进本卡公式）；B / Hypothesis（Award RN、SA upgrade RN、付费剩余）  
> Source：CoStar STR Glossary「Rooms Sold」；STR Historical Guidelines Reporting Rooms Sold + Loyalty program redemptions（收入节）；Marriott NUA / Platinum upgrade（Vendor 指针，不进公式）  
> Source Date / Last Verified：2026-08-25  
> Knowledge Type：Fact（STR 无关 Comp 剔除）+ Hypothesis（店内兑房尺）  
> 配套：`../advisor-playbooks/loyalty-award-upgrade.md` · `../recommendations/dont-raise-on-award-occ.md`  
> 禁止：发明 STR Award OCC / Award MPI；把 BW 90/70/40 写进中国公式；把 12 当常模；把兑房计成 P47 无关 Comp。

## 定义

指定 Stay Date：

- **Award RN**：积分免房 / 兑房 / loyalty redemption 占物理房的房晚。客人房费常 $0；**可能**有品牌对酒店报销（金额 NV）。  
- **SA upgrade RN**：空间可用 elite 免费升房（占更高房型，通常不另占一间物理房）。几乎无增量房费。

无关 $0 请客 → `complimentary-house-use.md`。付费升差 → P13。会员 BAR → P23。

## 公式

**STR（S）——不发明 Award KPI**

```
STR Rooms Sold      = 产生收入的房晚（含促销/合同送夜；不含无关 complimentary）
STR OCC             = Rooms Sold / Rooms Available
兑房进不进 Rooms Sold = NV     # Guidelines Sold 表未点名 loyalty awards
# Loyalty redemptions 在 Guidelines 出现在 Rooms Revenue，不是 Sold 归属裁定
STR 无 Award OCC / Award MPI
```

**店内 / 顾问 Hypothesis（须声明，不是 STR）**

```
Award RN                 = 积分免房 / 兑房间夜                         # 计数
SA upgrade RN            = 空间可用免费升房（房型置换）                 # 计数
Paid remaining           = Capacity − occupied − OOO                   # occupied 已含兑房
Paid OCC                 = (occupied − Award RN) / Available           # Hypothesis
PMS OCC (incl. awards)   = occupied / Available                        # 可被兑房抬高
```

Need Verification：本店市场码如何标「积分免房 / 兑房 / 免费升级」；上报 STR 兑房进哪一桶。不编字段名。

BW 90/70/40 **不出现在公式里**。华住结算 NV，不出现在公式里。仿真 12 / 8 只在案例文件。

## 上游

积分兑房、免房券、空间可用 elite 升级、已确认升级奖（NUA 类）、品牌报销（公式 NV）。

## 下游

PMS OCC 虚高、套房对 BAR 卖空、销售要求 BAR dump、前台误标 Comp、高峰置换。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| PMS OCC 92%（含兑房）= 该涨 BAR | 先拆付费 remaining。不按虚高 OCC 涨 |
| 积分客不是真需求所以 399 | 兑房占着的房不是 leftover。禁止 dump 公开 BAR |
| 金卡必须全升套房 | 空间可用 ≠ 保证。高峰可停未确认升级（Hypothesis） |
| 套房空了所以砸标准房 | 套房被免费升级占。不是 P05 leftover |
| 兑房 = P47 请客 | 可能有品牌报销。纠正桶 |
| 免费升 = P13 付费差 | 几乎无增量房费 |
| STR Award OCC | **不存在。** 不要发明 |

## 顾问决策含义

兑房是 **库存占用 + 口径事件**，不是需求变强到该涨公开 BAR。用户说「积分免房 12 间 OCC 92%」时：

1. 钉 Stay Date、Physical、Award RN、SA upgrade RN、付费 Remaining。  
2. 无关请客 → P47。付费差 → P13。会员 BAR → P23。机组 → P31。政务 → P48。  
3. 动作可能是 Hold BAR / 停 SA 升级 / 限额非确认兑房 / **拒绝按 92% 涨** / 什么都不改公开价。  
4. 缺兑房数 → 问，不编 12。  
5. 华住结算 NV → 不引用报销%。不抄 BW %。

## 和 Comp / 房型差怎么分

| 卡 | 数什么 |
| --- | --- |
| 本卡 | Award RN + SA upgrade RN + 付费剩余 |
| `complimentary-house-use.md` | $0 无关免费；Paid OCC |
| P13 | 付费房型剩余 / 差价 |
| P37 inventory | Available 分母（永久 HU / OOO） |

## 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-25 06:17 CST | 首版。Hypothesis Award RN / SA upgrade RN / 付费剩余。兑房进 STR Sold = NV。无 STR Award 公式。 |
