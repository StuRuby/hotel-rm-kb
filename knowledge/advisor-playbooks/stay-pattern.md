# Playbook P40｜Stay Pattern / 拒绝单晚占高峰

> 资产：Advisor Playbook  
> 路径：`advisor-playbooks/stay-pattern.md`  
> BACKLOG：P40 Stay Pattern / 拒绝单晚占高峰 · HIGH（T08 本周 timely）· 先决策卡 · slug **stay-pattern**  
> 状态：**drafted**（2026-08-23 14:17 CST）  
> 配套卡：`recommendations/reject-sat-only-on-peak.md`  
> 理论：`pricing/los-optimization.md`（T08 薄卡，本轮不重写）· `restrictions/restriction-framework.md`  
> 交叉：P11 周末市场形状 · P21 节日日历 MinLOS · P33 淡日不要留 MinLOS · P12 肩日冰 · P10 团只要高峰单晚走 Counter · T19 贡献 · T20 品牌底 · P38 取消窗是另一杠杆  
> 问题树：O10 LOS · §16 · 本轮「只订高峰单晚」短枝  
> 仿真：`cases/sim-2026-saturday-only-vs-minlos.md`（**Simulation**）  
> 证据等级：A（eCornell Kimes Do/Don't；HSMAI 2020 Future of Pricing；HSMAI Academy MinLOS 词条）；A Vendor（IDeaS BAR by Day / BAR by LOS；Duetto 按 LOS 预报 + 按 stay 总收入/压缩夜排序）；B（Lighthouse 2025-06-27）；中国 OTA 连住均价公式 / 展示 = **NV**  
> Last Verified：2026-08-23  
> 知识类型：Best Practice + Vendor Methodology + Hypothesis  
> Advisor-First：只建议 MinLOS / CTA / Hold 高峰 BAR / 拒砍高峰迁就均价。**不操作** PMS / Channel Manager / OTA 后台。  
> 禁止：编中国 OTA 连住均价公式；把 Duetto 5–7%/7–10% LOS 折抄进启发式；华住 699；一夜 −15%；佣金%；点弹性；整周同一 MinLOS；缺肩日把 MinLOS 写成今天 Fact。

---

## 0. 一句话

只订周六先问周五周日还卖不卖。高峰单晚默认用连住或 CTA 护，不是先接再砍周末。  
连住均价贵了，不要把周六砍下去迁就肩日。  
肩日已经冰了，再接周六单晚才是增量。

完成定义：一张「停留形态 → 接 / 拒单晚 / 是否砍高峰」过程。P11 管周末是不是压缩市场；本剧接管 **该市场上接不接高峰单晚、砍不砍高峰去买肩日**。

| 形 | 看起来 | 实际 | 默认动作 |
| --- | --- | --- | --- |
| **A 肩日还能卖** | 「客人只订周六，周五周日空着」 | 单晚占压缩夜，挡连住 | **MinLOS=2 或 CTA 周六**（二选一）。Hold 周六 BAR。拒单晚 |
| **B 肩日已经冰** | 周五周日无人问、市场也空 | 周六一夜是增量 | **接** Sat-only @ 现行 BAR。不解成「必须连住」。肩日走 P12 |
| **C 均价贵了要砍周六** | 三晚均价被周六拉高，销售要砍周末卖套 | 用高峰补贴肩日 | **拒绝。** 周六守 779–799 首选 799（Hypothesis）。套价不得把高峰夜砍穿地板 |
| **D 好连住被 MaxLOS 切** | 周五到周日的 BAR 连住订不了 | MaxLOS 误伤 stay-through | **放宽** 高峰 BAR 层 MaxLOS。MaxLOS 只打进入高峰前的低价长住 |
| **E 淡日还挂着 MinLOS** | 死周二 OCC 差 | 限制过度，不是 stay-pattern | **离开本剧 → P33**。先松，不降 BAR |

顾问必须能直接说的三句：

```
1. 只订周六先问周五周日还卖不卖，高峰单晚默认用连住/CTA 护，不是先接再砍周末。
2. 连住均价贵了，不要把周六砍下去迁就肩日。
3. 肩日已经冰了，再接周六单晚才是增量；淡季别把 MinLOS 留着当习惯。
```

独立默认（本库 Hypothesis）：网络收入（高峰+肩日）优先于高峰单日 RevPAR。Duetto Vendor：按 **整笔 stay 收入 / 压缩夜数** 排序，长住高总价可以排在「单晚 ADR 更高」前面——方向可用，**不是**把周六 BAR 砍到肩日。HSMAI 2020：限制只在需求超过库存 **且** 存在 LOS>1 的需求时才有意义。

---

## 1. 信号（何时进本剧本）

任 1 条进：

| # | 信号 |
| --- | --- |
| R1 | 「客人只订周六，周五周日空着，接不接？」 |
| R2 | 「连住均价被周六拉高，客人嫌贵，周末砍一刀？」 |
| R3 | 压缩周末仍开单晚；肩日 OTB 明显低于周六，但仍有询单/Pickup |
| R4 | 销售要把周六 BAR 降到肩日水平，好让三晚套「好看」 |
| R5 | 一笔会盖过高峰的连住被 MaxLOS / 关房挡掉 |

**不是本剧本：**

- 周末是不是该贵、价差带几档 → **P11**（市场）。本剧在已经认定压缩之后动 stay-pattern。  
- 国庆/春节哪天 MinLOS=2/3 → **P21**（日历）。不是每个周六。  
- 死周二 / 淡日还挂 MinLOS、有人要降价 → **P33**。  
- 团只要周六低价 → **P10** Counter（连住或加价），不是本剧散客闸。  
- 机组 extra 占周六 → **P31**。  
- 免费取消堆着要砍价锁量 → **P38**。取消窗 ≠ stay-pattern。  
- 只有事件旗标、Peak 未证实 → 今天不设 MinLOS；按普通 Pace。

---

## 2. 输入（缺肩日不停，但不设今天必做的 MinLOS）

```
必须：
1) 高峰 Stay Date + ±1 肩日（至少写出周五 / 周六 / 周日）
2) DTA + 按日 OTB / Remaining
3) 当前公开 BAR（按日）
4) 用户要接的形态：Sat-only / 连住套 / 砍高峰夜

应用：
5) 按日 Pickup（3D）与 Pace vs 周末曲线（不要用周二曲线）
6) 当前 Restriction：MinLOS / CTA / MaxLOS（到达日 vs 覆盖夜：问用户系统，NV-RST-01）
7) 肩日是否仍有可售需求：询单、OTA 可搜、历史 ALOS、竞对肩日是否开
8) 竞对高峰是否也在限单晚 / 是否已满

Recommended：
9) 本店周末主到达日是周五还是周六（翻转 MinLOS vs CTA）
10) 品牌底 / 贡献三数（有则挡把高峰砍到 699；无则不发明 699）
11) 连住在 OTA 上怎么展示（用户截图）。无截图不发明均价公式
```

缺肩日 OTB **不停**：条件化两支（A 有需求 → 限；B 冰 → 接）。禁止「空着所以先接周六再看」。  
缺 OTA 均价公式 **不停**：不编中国公式；建议仍是不砍高峰夜。  
顾问 **不** 点 PMS 限制、不代改 OTA 连住产品。

---

## 3. 分叉闸（接单晚 / 砍高峰前必过）

```
0  日历。哪夜是 Peak、哪夜是肩。没日期仍条件化，不说无法判断。
1  是不是已证实压缩周末 / Peak？（Pace Ahead 或 Pickup Fast 或竞对满 / 城市压缩）
     否 → 离开本剧主座。按普通 Pace。不要为「有周末」设 MinLOS。
2  肩日还卖不卖？
     有可售需求（Pickup 仍正、询单、历史 ALOS>1、竞对肩日未冰）
           → 形 A：默认拒高峰单晚。MinLOS=2 或 CTA（二选一，不叠死）。
     肩日冰（OTB 接近空、Pickup 死、市场也弱、询单无）
           → 形 B：接 Sat-only 是增量。走 P11 弱周末 / P12。不解成习惯 MinLOS。
3  有人要把高峰 BAR 砍下去，好让连住均价好看？
     → 形 C：拒绝。高峰夜守价。套价最多肩日围栏 −3–5%，禁止打穿高峰地板。
4  会盖高峰的 BAR 连住被 MaxLOS 切掉？
     → 形 D：放宽该层 MaxLOS。不要用关 BAR 代替。
5  其实是淡日还挂着节假日 MinLOS？
     → 形 E：P33。先解，不降。
```

**禁止跳到「先接周六再砍周末」。** 接单晚占用的是压缩库存；砍高峰是第二次把贡献拆掉（T19）。

HSMAI 2020 硬条件（A，打开 PDF）：库存限制只在 **需求超过供给** 且 **至少有一部分需求 LOS>1** 时才有意义。两条都缺 → 不要限。

eCornell（A）：必须有足够的更长住需求，否则 MinLOS 伤 RevPAR。这就是形 B。

---

## 4. 诊断枝（禁止「先接周六 / 把周六砍到 699 卖套」）

```
用户说只订周六接不接 / 连住均价贵了砍不砍周末
│
├─ 0. 日期与 Peak？
│     没写出五/六/日 → 条件化。不说无法判断
│     Peak 未证实 → 不设 MinLOS。普通 Pace
│
├─ 1. 肩日还卖不卖？（主翻转）
│     肩日有需求、overnight 合理、高峰仍开单晚
│           → 形 A。MinLOS=2 或 CTA 高峰到达。Hold 高峰 BAR
│     肩日冰、市场也弱
│           → 形 B。接 Sat-only @ 现行 BAR。增量。禁止再挂 MinLOS 当习惯
│     肩日未知
│           → 今天不设 MinLOS；只关高峰低价；写 IF 肩日有需求 THEN 限
│
├─ 2. 要砍高峰迁就均价？
│     是 → 形 C。拒绝。高峰 779–799 首选 799（Hypothesis；已 Ahead 可评略高，不跳最高）
│           套：高峰夜保持地板；肩日最多围栏 −3–5%
│           禁止一夜 −15%。禁止 699 当新高峰 BAR
│
├─ 3. MaxLOS / 关房切掉 stay-through？
│     是 → 形 D。高峰 BAR 层不要短 MaxLOS
│
├─ 4. 其实是淡日限制过度？
│     是 → P33。离开本剧
│
└─ 5. 团 / 机组 / 取消窗？
      团只要高峰单晚 → P10 Counter
      机组 extra → P31
      灵活堆着要砍价锁量 → P38。本剧不收窗

Naive（禁止）
      「空着的周五周日以后再说，周六先接了」
      「三晚均价太贵，周六砍到 699 就好卖」
      「OTA 连住均价公式要求我们必须砍高峰」（无打开页 = NV）
      整周 MinLOS=2
      MinLOS + CTA 叠死
      把高峰 BAR 关了冒充关单晚
      死周二继续留 MinLOS
```

**砍到 699 卖套不是开门条件。** T20 无地板不发明 699。T19 无变动成本不说「便宜周六总比空着强」——空着的是肩日，不是已经能卖的高峰。

---

## 5. 十步过程（顾问内部，可对用户压缩）

```text
1. 钉高峰日 + ±1。没有日期仍条件化。
2. 证实压缩 / Peak：Pace、Pickup、竞对满。未证实 → 不设 MinLOS。
3. 问肩日还卖不卖。缺数 → IF，不把 MinLOS 写成今天 Fact。
4. 分叉 A 限 / B 接 / C 拒砍高峰 / D 放 MaxLOS / E 移交 P33。
5. 选工具：MinLOS=2 或 CTA，二选一。问主到达日（NV-RST-01 双口径）。
6. 价：高峰 Hold（区间+首选）。不要砍高峰买肩日。肩日可围栏，高峰不深折。
7. 套/包装：夜间均价 ≥ Peak 地板与肩日守价的加权 ×0.97（与 los-optimization 同一句）。禁止套内把高峰夜改成 699。
8. MaxLOS：只打进入高峰前的低价长住，不打高峰 BAR 连住。
9. 贡献 / 品牌底：穿 T19 不卖；有声明底不砸穿。无地板不发明 699。
10. 输出：Reject Sat-only | Accept Sat-only（仅肩日冰）| Hold 高峰价 + MinLOS/CTA
    + 价区间+首选 + 再要 3 个数 + Trigger。
    不输出中国 OTA 均价公式。无肩日声明 Hypothesis / Low confidence。
```

### 5.1 动作表

```text
Peak Stay Date:       <周六或已证实高峰夜>
Shoulder:             <周五 / 周日；Open>
Shoulder demand:      有可售 | 冰 | 未知
Restriction:          形 A → MinLOS=2 盖高峰（或 CTA 高峰到达；二选一）
                      形 B → Open 单晚；不设新 MinLOS
                      到达日 vs 覆盖夜：写双口径（NV-RST-01）
MaxLOS:               高峰 BAR 层不短 MaxLOS；弱日低价进入高峰前可短
Public BAR Peak:      Hold；区间+首选（Hypothesis 779–799 首选 799）
Shoulder BAR:         不把高峰价挂到肩日；不砸一夜 −15%
Package:              可选。套均价 ≥ (Peak首选 + 肩日守价) 加权 ×0.97
                      Peak 夜在套内仍走高峰地板，不砍到 699
Inventory:            高峰关公开 < 新地板 的低价；BAR 对符合 LOS 的人 Open
                      不要用关 BAR 代替关单晚
Channel:              直销与主 OTA 限制对齐。禁止只改一个 OTA
Do-not-do:
  - 先接周六再砍周末
  - 砍高峰迁就连住均价 / BAR→699
  - 一夜 −15%
  - 编中国 OTA 连住均价公式
  - 把 Duetto 5–7%/7–10% 当必须折
  - MinLOS + CTA 叠死
  - 整周同一 MinLOS
  - 缺肩日写成今天必做
  - 高峰 BAR 层短 MaxLOS
  - 死周二留 MinLOS（那是 P33）
Trigger: 见 §6
```

无 RMS 时的最小手算（Hypothesis，不是厂商算法）：

```
对高峰夜 t：
  单晚价值     = BAR_t
  连住价值     = Σ BAR（覆盖夜）   # 不要先把 BAR_t 砍掉再加
  压缩夜数     = 该 stay 碰到的已证实高峰夜数（常 =1）
  比较         = 连住总价 / 压缩夜  vs  单晚 BAR_t
  若肩日仍有人买、比值连住更高 → 拒单晚
  若肩日买不到 → 单晚是增量，接
```

Duetto Vendor 用「stay 总收入 / 压缩夜」排序（本轮打开 Resource Hub）。方向同这张表。**不要**把其 ADR 混合权重抄成本店公式。

### 5.2 价（Hypothesis；点或区间）

幅度仍走 `pricing/how-much-to-move.md`。本剧只回答 **别为单晚/均价先砍高峰**。

| 判定 | 高峰 BAR | 限制 / 套 |
| --- | --- | --- |
| 形 A 肩日有需求 | **Hold** 779–799 首选 799。Ahead 可评 +5–8% 或收到最低竞对，**不跳最高** | MinLOS=2 或 CTA。肩日 Open |
| 形 B 肩日冰 | **Hold** 现行高峰；不因「只订得到一夜」就 dump | 开单晚。肩日走 P12，不暴涨不跟砸 |
| 形 C 要砍高峰卖套 | **拒绝 699。** 守 779–799 首选 799 | 套内高峰夜不砍；肩日最多 −3–5% |
| 形 D MaxLOS 误伤 | BAR 不动 | 放宽高峰 BAR 层 MaxLOS |
| Peak 价已最高 | 只限不涨 | 形 A 仍可 MinLOS |
| 市场也弱且肩日冰 | 不砸公开高峰 BAR（do-not-cut） | 形 B 接单晚；禁止再加 MinLOS |
| DTA≤2 才想起设 MinLOS | 慎新设 | 先关低价；新 MinLOS 可能只挡尾部 |

价格带标 **Hypothesis**。案例数字标 **Simulation**。禁止写成某店 Fact。  
Duetto 文中 2 晚 5–7%、3–7 晚 7–10% = **该厂商例子，不进本库幅度**。本库连住围栏仍是档 E −3–5%。

### 5.3 选 MinLOS 还是 CTA（Hypothesis）

| 更想要 | 用 | 别用 |
| --- | --- | --- |
| 高峰必须搭一晚肩日（周五或周日均可） | **MinLOS=2** 盖高峰夜 | 主到达日未知时先 MinLOS，并写双口径 |
| 不许「周六到、只住一夜」，允许周五到、住过周六 | **CTA 周六** | 历史就是「周六到、住两晚」的主到达日——CTA 会挡高价值组合（Lighthouse **B**） |
| 两者都上 | 只在 Unconstrained ≫ Cap **且** 竞对也在限 | 默认禁止叠死（P33） |

CTD 默认不用。

### 5.4 Advisor-First

建议用户：五/六/日 OTB、肩日询单、当前限制挂在到达日还是覆盖夜、主到达日、连住截图（若有）。顾问不登录 PMS、不代改限制、不代上 OTA 连住产品、不自动调价。

---

## 6. Trigger

| 事件 | 动作 |
| --- | --- |
| 24h 高峰 Pickup < 阈值低（300 间=3）或短住拒单升、且竞对全开单晚 | **解开**该日新 MinLOS/CTA；低价不自动重开；价守原带 |
| 24h 3–7 | 守 =2 |
| 24h ≥8 非一团、肩日开始动 | 守限制；价按第二刀（P09，不跳最高） |
| 肩日仍 0、高峰将满 | 确认肩日 Open；**不**把 MinLOS 延到肩日；此时可改评形 B 尾部接单晚 |
| 肩日从冰转热（询单起） | 从形 B 切回形 A：补 MinLOS 或 CTA |
| 销售仍要把高峰砍到 699 卖套 | **拒绝。** T19/T20；禁一夜 −15% |
| 发现淡日还挂着本剧 MinLOS | 解开淡日，走 P33。高峰仍可守 |
| 取消翻倍或 ≥总房 2% | 停加严到 =3 |
| 用户补「主到达日=周六」 | 优先 MinLOS，**不要** CTA 周六 |

300 间尺与 P21 / 限制框架同一套。

---

## 7. 如果只能再补 3 个

1. **高峰与 ±1 的 OTB / Pickup / 询单** — 翻转形 A vs 形 B；缺则今天不设 MinLOS，只写 IF  
2. **主到达日 + 限制挂在到达日还是覆盖夜** — 翻转 MinLOS vs CTA；缺则双口径，不叠  
3. **拟议套价按夜拆开** — 翻转「均价贵了」是不是在砍高峰夜；缺则默认高峰夜不砍

缺 1：Confidence Low，不把 MinLOS 写成今天必做。  
缺 2：只用 MinLOS=2 盖高峰夜，并声明系统口径未知。  
缺 3：拒绝把高峰 BAR 改成 699。

---

## 8. Confidence / 边界

肩日齐 + Peak 旁证：方向 **Medium**；N=2 永远 Hypothesis。  
缺肩日：Low，只写 IF。  
eCornell / HSMAI 方向 = **A**。Lighthouse 周六 MinLOS 例 = **B** 实践，不是定律。  
IDeaS BAR by LOS / Duetto 排序 = **A Vendor**，不是本店必须开 LOS 价。  
中国 OTA 连住均价怎么算、搜「1 晚」是否被 MinLOS 沉底、美团/携程展示文案：**NV**。无截图不发明公式。  
Duetto 5–7% / 7–10%：**不进启发式**。

仿真：`cases/sim-2026-saturday-only-vs-minlos.md`（**Simulation**，不是真店）。主枝 **Hold 周六 779–799 首选 799**；MinLOS=2；拒绝砍到 699。

---

## 9. 证据（2026-08-23 已核）· Known vs Unknown

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| 高需求后接低需求时，拒短住、接更长住，可把需求推到随后的淡；须有足够长住需求否则伤 RevPAR | A | **Known 方向** | eCornell #IMPACT *The Dos and Don'ts of Length of Stay*（Kimes 课 *Forecasting and Availability Controls* 的公开短文）https://ecornell-impact.cornell.edu/the-dos-and-donts-of-length-of-stay/ （本轮打开） |
| CTA 只在「靠 stayover 就能满、且选这批人更高」时用；影响当天和之后 | A | **Known 方向** | 同上 |
| MaxLOS 打进入售罄/高价段的**折扣**长住，不是高峰 BAR | A | **Known 方向** | 同上 |
| MinLOS = 某到达日必须至少 N 晚（N≥2） | A 词条 | **Known 定义** | HSMAI Academy Glossary https://academy.hsmai.org/glossary/minimum-length-of-stay/ （本轮打开） |
| MinLOS 盖高峰可抬肩日 OCC/收入；限制只在超需求 **且** 存在 LOS>1 时有意义。按到达×LOS 定价复杂、许多分销不接受 | A | **Known 方向** | HSMAI Europe 2020 *The Future of Pricing*（McGuire & Dietz）https://global.hsmai.org/wp-content/uploads/2020/03/hsmai-a4_wp-feb-2020-for-screens-1.0-1.pdf （本轮打开 PDF） |
| BAR by Day vs BAR by LOS（一条均价按到达+时长） | A Vendor | **Known 方法名，非必须开** | IDeaS Ideal Pricing：ideas.com 本轮空页；Hotel Online 2016-06-16 转载打开 https://www.hotel-online.com/news/ideas-launches-ideal-pricing-for-hoteliers |
| 按 LOS 预报到达；constrained 先扣 CTA/MinLOS；按 stay 总收入/压缩夜排序，长住可排在高 ADR 短住前 | A Vendor 仅 Duetto | **Known 机制** | https://duetto.my.site.com/resourcehub/s/article/Understanding-Forecasts （本轮打开） |
| BAR by LOS 常把长住折在优化日价上；文中 5–7%/7–10% 为厂商例子。峰值日 ADR 可能略降、RevPAR 靠肩日抬 | A Vendor | **方向可用；% 不进启发式** | https://www.duettocloud.com/library/open-pricing-bar-los （本轮打开） |
| 周六 MinLOS=2 避免一夜占周末；CTA 周六可逼周五到；主到达日是周六则 CTA 反噬；MaxLOS sparingly；when in doubt don't restrict | B | **Known 实践** | Lighthouse 2025-06-27 https://www.mylighthouse.com/resources/blog/guide-hotel-stay-restrictions-tips-revenue-manager （本轮复核打开） |
| 中国 OTA 连住均价公式、MinLOS 在美团/携程如何展示 | — | **NV。不编。** | 禁止编造 |
| 「高峰必须 MinLOS=2」官方定律 | — | **未找到** → 本库条件句 = Hypothesis | — |

Failed / 未当成核页：

```
https://ideas.com/news/ideas-launches-ideal-pricing-hoteliers/  → 空页 / 无正文
IDeaS science-behind-g3  → 本轮按 BACKLOG 不重抓
HotelTechUpdate LOS 2026 指南  → 打开检索卡片，单源 C，不进启发式
Peaqplus MLOS 学院页  → C，不引
美团/携程官方连住均价 / MinLOS 展示说明  → 未找到 → NV
```

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 14:17 CST | drafted。BACKLOG P40。分叉 A 肩日有需求则拒单晚 / B 肩日冰则接 / C 拒砍高峰迁就均价 / D 放 MaxLOS / E 移交 P33。配套 `reject-sat-only-on-peak.md`。不编连住均价公式。 |

---

## 11. 交叉（不改 P01–P39 正文；P11/P21/P33 仅文末一行）

- **P11**：周末压缩是市场。本剧是该市场上的 stay-pattern 杠杆。价差带仍走 P11。  
- **P21**：节日日历哪天 MinLOS。不是每个周六。节假日段仍先 P21。  
- **P33**：淡日/死周二 MinLOS 是过度。本剧不解已证实高峰限制。  
- **P12**：肩日冰的价/围栏。形 B 接到单晚之后，肩日不要跟砸。  
- **P10**：团只要高峰单晚 → Counter 连住或加价，不是散客 Sat-only 闸。  
- **P22 / P07**：会展/演唱会日历形状。工具同 MinLOS=2 只盖 Peak；本剧补「接不接单晚 / 砍不砍高峰」。  
- **T19**：用便宜三晚均价占周六，可能毁掉周六贡献。无成本不说 699 总比空着强。  
- **T20**：不要砸声明底去卖周五。无地板不发明 699。  
- **P38**：取消窗是另一杠杆。灵活堆 ≠ stay-pattern。  
- **P09**：形 A 且 Ahead+Fast → 限制可守，价第二刀不跳最高。  
- **how-much-to-move**：连住围栏 −3–5%；禁一夜 −15%。Duetto LOS% 不替代本库档位。

---

## 12. 理论指针（2026-08-23 16:17，不改 §0–11 正文）

**为什么** 肩日还卖时拒 Sat-only：高峰夜是瓶颈资源。估值尺 `metrics/stay-network-value.md`（压缩夜价值 = 客房收入/紧夜数，通常高峰记 1 不是 3；Hypothesis，非 STR 公式）。网络语言 `pricing/los-optimization.md` §10+。本剧动作不变。Duetto 5–7% 仍不进档。中国 OTA 均价公式仍 NV。

## 13. 交叉（2026-08-24 14:17，不改 §0–12 正文）

在店加一晚 ≠ 新订 Sat-only。新订只订周六仍走本剧 MinLOS/CTA。在店要续住高峰周六 → **P46** `early-departure-stayover.md`：拒或公开 BAR，不打折扣客价。

> 交叉指针（2026-08-29 18:17）：连住促销均价/免费晚改尺 → **P76**。不改正文。

> 交叉指针（2026-08-30 02:17，不改正文）：加床/Extra Person/Occupant Threshold 改尺 → **P78** `extra-person-vs-bar.md` · `dont-rewrite-bar-for-extra-person.md`。不写 P79。

> 交叉指针（2026-09-03 08:17 T03-08，不改正文三句 / 399 / 799）：Diagnose 走 **T-Restriction** `theory/restriction-maxlos-ctd-vs-bar.md`（MaxLOS/CTD/CTA/Closed-for-Departure ≠ 公开 BAR）；过程仍 **P33**（过度先松限制，不砍 BAR）+ handoff **P40** / **P21**；Hold 779–799 首选 799；拒 399；不发明 699；§124。不开 P88。不开 P89。

> 交叉指针（2026-09-03 10:17 C03-10，不改正文三句 / 399 / 799）：callable Simulation `cases/sim-2026-restriction-maxlos-ctd-sat.md`。Diagnose 走 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699；§125。不开 P88。不开 P89。

> 交叉指针（2026-09-03 12:17 R03-12，不改正文三句 / 399 / 799）：§126 新开 Cloudbeds MinLOS/MaxLOS Restrictions + Closed to Arrival/Departure Restrictions（**可售限制/CTA·CTD 闸 ≠ 公开灵活 BAR rewrite**）。Diagnose 仍 **T-Restriction**；过程仍 **P33**（+ **P40** / **P21**）；Hold 779–799 首选 799；拒 399；不发明 699。不开 P88。不开 P89。
