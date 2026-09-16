# Stay-Network Value｜压缩夜价值（顾问内部指标）

> 卡：`metrics/stay-network-value.md`  
> 类型：Stay-pattern **估值尺**（不是 STR 日报 KPI）  
> Evidence Level：**Hypothesis**（公式）；A（Kimes / HSMAI 方向）；A Vendor（Duetto 按 stay 总收入/压缩夜排序；IDeaS BAR by Day vs BAR by LOS **方法名**）  
> Source：本库内部顾问指标。STR Glossary 2026-08-23 打开：**有** Length of Stay / ADR / RevPAR，**无** compressed-night value 公式 → 禁止写成 STR Fact  
> Last Verified：2026-08-23  
> Knowledge Type：Hypothesis + Best Practice + Vendor Methodology  
> 树位置：`metric-tree.md` §15（本轮 APPEND 指针，不改写原 ADR/RevPAR 正文）  
> 配套：`pricing/los-optimization.md` §10+ · P40 `advisor-playbooks/stay-pattern.md` · `recommendations/reject-sat-only-on-peak.md` · T19 · T20  
> 问题树：O10 LOS · §45 / §46  
> 禁止：发明 STR 压缩夜公式；把 Duetto 5–7%/7–10% 抄进本库档；编中国 OTA 连住均价公式；华住 699；一夜 −15%；用三晚均价代替本尺；写 RMS 算法。

---

## 0. 一句话

**一笔连住值不值，看它占了几晚真正紧的夜，不看三天均价漂不漂亮。**  
压缩夜价值（CNV）= 该笔客房收入 ÷ 它吃掉的紧夜数。高峰夜通常记 **1**，不是把三晚都当成紧夜。

```
Naive（禁止）   三晚均价 719 很好看 → 接；周六 799 把均价拉高 → 砍周六
Advisor         先问哪一晚是瓶颈。只订周六若周五周日还卖得出去 → 占的是瓶颈夜，不是增量
本尺            CNV = Stay room revenue / compressed nights consumed
```

STR 的 LOS 只数「住了几晚」（S）。本尺是 **内部顾问指标 / Hypothesis**，用来在没有 RMS 时手算 stay-pattern。Duetto 公开页按 stay 总收入 / 压缩夜排序（A Vendor，方向同，**不是**本店必须公式）。

完成标准：用户丢来周五/周六/周日 OTB + BAR +「只订周六接不接」→ 能说出 Sat-only 是增量还是置换，并给出 CNV 比较。缺肩日 → 只写 IF，不把 MinLOS 写成今天 Fact。

---

## 1. 定义

| 词 | 顾问定义 | 不是 |
| --- | --- | --- |
| **紧夜 / 压缩夜** | 已证实 Peak / 压缩的过夜（Pace Ahead **或** Pickup Fast **或** 竞对满）。与 P11/P40 同一把 Peak 尺 | 「放假的每一天」；STR 无此 KPI |
| **压缩夜数** | 该笔 stay 覆盖了几晚紧夜。周末常 = **1**（只有周六紧） | 不是 LOS；不是 3 晚套就分母=3 |
| **Stay room revenue** | 该笔各夜客房价之和（未砍高峰地板） | 不是砍完高峰后的「好看均价」；中国 OTA 展示均价 = **NV** |
| **CNV** | Stay room revenue / 压缩夜数 | 不是 ADR；不是 RevPAR；不是 STR 公式 |

**Tight 判定（与 P40 同一闸，Hypothesis）：**

```
该夜 Tight  当且仅当  Peak 已证实（Pace Ahead 或 Pickup Fast 或竞对满 / 城市压缩）
肩日 Ice    当且仅当  OTB 接近空、Pickup 死、市场也弱、询单无
肩日未知    → 今天不把 Sat-only 判成增量，也不把 MinLOS 写成 Fact；写 IF
```

---

## 2. 公式（Hypothesis；内部顾问指标）

```
Compressed_nights(stay) = 该 stay 覆盖的 Tight 夜数
CNV(stay)               = Stay_room_revenue / Compressed_nights(stay)

若 Compressed_nights = 0  →  本尺不对瓶颈排序；这是软夜增量（肩日/淡日）
若 Compressed_nights ≥ 1 →  同一间剩余房，比谁的 CNV 高
```

**禁止：**

- 用 `Stay_room_revenue / LOS` 当决策尺——那就是 ADR，会把高峰贡献稀释进肩日。  
- 用三晚算术均价决定砍不砍周六。  
- 把 Duetto 文中 2 晚 5–7%、3–7 晚 7–10% 写成必须折（A Vendor 例子，**不进** `how-much-to-move`）。  
- 发明 STR「压缩夜价值」词条。2026-08-23 打开 CoStar STR Glossary：Length of Stay = 客人住几晚；ADR = Room Revenue / Rooms Sold；RevPAR = Room Revenue / Rooms Available。**无** CNV。

无 RMS 时最小手算（与 P40 §5.1 同一方向，本轮写成独立指标）：

```
对高峰夜 t（常是周六）：
  Sat-only 价值     = BAR_t                         # 压缩夜数=1，CNV=BAR_t
  连住价值          = Σ BAR（覆盖夜，高峰夜不砍）
  连住 CNV          = 连住价值 / 该 stay 碰到的紧夜数   # 通常仍=1
  若肩日仍有人买且 连住 CNV > Sat-only CNV → 拒单晚
  若肩日买不到（Ice） → Sat-only 是增量，接现行高峰 BAR
```

T19 交叉：便宜三晚均价可以毁掉高峰贡献。机会成本是被挤掉的那晚高峰净价，不是 0。无变动成本不说「699 总比空着强」——空着的往往是肩日，高峰并不空。

---

## 3. 手算表（Simulation 数字，不是真店 / 不是华住地板）

尺：180 间、公开 BAR 周五 699 / 周六 799 / 周日 659。数字来自 P40 仿真卷 `cases/sim-2026-saturday-only-vs-minlos.md`，**只作算术**。周五 699 = 该卷肩日 BAR，**不是**品牌底、不是华住 699。

### 3.1 形 A · 肩日还卖（置换）

Remaining：周五 94、周六 **52**（紧）、周日 108。周五/周日 Pickup 仍正。

| 形态 | 占 Fri | 占 Sat | 占 Sun | 客房收入 | 压缩夜 | CNV | 相对 Sat-only |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sat-only | — | 1 | — | 799 | 1 | **799** | 基准。占瓶颈 |
| Fri–Sat | 1 | 1 | — | 1,498 | 1 | **1,498** | 多 699 肩日 |
| Sat–Sun | — | 1 | 1 | 1,458 | 1 | **1,458** | 多 659 肩日 |
| Fri–Sun | 1 | 1 | 1 | 2,157 | 1 | **2,157** | 最好的网络 |
| Sun-only | — | — | 1 | 659 | 0 | 不对瓶颈排序 | 不占周六；肩日增量 |

**判定：** 同一间周六剩余房，Sat-only 的 CNV 最低。肩日还卖 → **拒 Sat-only**（P40 形 A）。工具：MinLOS=2 或 CTA，二选一。Hold 周六 779–799 首选 799。不要为了把三晚均价从 719 砍到 686 而把周六改成 699。

719 = (699+799+659)/3、686 ≈ (699+699+659)/3 = **本卷算术**，不是中国 OTA 公式（NV-LOS-04）。

### 3.2 形 B · 肩日已经冰（增量）

Remaining：周五 160 且 Pickup 死、周日 155 且 Pickup 死、周六仍 40 在卖。市场肩日也弱。

| 形态 | 压缩夜 | CNV | 判定 |
| --- | --- | --- | --- |
| Sat-only @ 799 | 1 | 799 | **增量。** 连住需求≈0，拒单晚只会留空周六 |
| Fri–Sun 套 | 1 | 公式上高 | 没有人买，纸面 CNV 无意义 |
| 再挂 MinLOS=2 | — | — | **禁止当习惯**（P33） |

**判定：** 肩日冰 → **接** Sat-only @ 现行高峰 BAR。不解成「必须连住」。肩日价走 P12，不把周六砍下去买周五。

---

## 4. BAR-by-day vs BAR-by-LOS（叉，不抄 %）

| | **BAR-by-day**（本库默认Advise） | **BAR-by-LOS**（Vendor 方法名） |
| --- | --- | --- |
| 客人付什么 | 各夜 BAR 之和 | 一条均价，按到达日 + 时长 |
| 公开出处 | 酒店日历价惯例；HSMAI 2020 称 stay-night 定价更常见 | HSMAI Academy *Length of Stay pricing*（A 词条，2026-08-23 打开）；IDeaS Ideal Pricing 转载（A Vendor，2016-06-16 Hotel Online）；Duetto Open Pricing / BAR-LOS（A Vendor） |
| 本库用法 | 高峰夜守地板；肩日可围栏 −3–5% | **不**当作必须开的价型。分销常不接受到达×LOS 价（HSMAI 2020 A） |
| 折扣 | 肩日档 E −3–5%；高峰不深折 | Duetto 文中 2 晚 5–7%、3–7 晚 7–10% = **该厂商例子，不进本库幅度** |

**叉怎么选（Hypothesis）：**

```
没有 RMS / 渠道只吃日历价
  → BAR-by-day。用 MinLOS/CTA 管网络，不用第二条 LOS 价表
有 RMS 且渠道吃 stay 价
  → 可承认 Vendor 按 stay 优化；顾问仍用本尺检查：高峰夜有没有被砍穿地板
销售要用「LOS 折」把周六砍到肩日
  → 拒绝。那是形 C，不是 BAR-by-LOS
```

Wave7 包装句保持：连住套夜间均价 ≥ Peak 新地板与肩日守价的加权 ×0.97。套内高峰夜仍走高峰地板。与 P40 Hold 799 不矛盾。

---

## 5. 顾问怎么用（会改 Situation / Diagnosis / Action / Watch）

| 用户原话 | Situation | Diagnosis | Action | Watch |
| --- | --- | --- | --- | --- |
| 只订周六，周五周日空着，接不接 | 画五/六/日 Remaining + Tight？ | 肩日有需求 → 置换；冰 → 增量 | 形 A 拒单晚；形 B 接 Sat-only @ 现行 BAR | 24h 肩日 Pickup；短住拒单 |
| 三晚均价被周六拉高，砍周末吧 | 拟议套是否把高峰夜砍穿 | 用均价当尺 = 误诊 | **拒绝砍高峰**。CNV 用未砍的高峰夜 | 有没有人把 799 改成 699 |
| 连住看起来 ADR 低、单晚 ADR 高 | 比的是 ADR 还是 CNV | 单晚 ADR 高但 CNV 低 | 拒单晚；可接 CNV 更高的连住 | 不要用关 BAR 代替关单晚 |

缺肩日 OTB：**不停**，条件化两支。禁止「空着所以先接周六再看」。

---

## 6. 常见误读

| 误读 | 实际 |
| --- | --- |
| 连住 ADR 低 = 差生意 | 分母若用 LOS，高峰贡献被肩日稀释。看 CNV |
| Sat-only 799 > 空着 0 | 机会成本是被挤的 Fri–Sun，不是 0（T19） |
| 三晚均价必须好看所以砍周六 | 砍的是瓶颈夜地板（T20）。中国 OTA 公式 NV |
| STR RevPAR 已经算过网络 | RevPAR 按夜摊。不区分谁占了瓶颈 |
| Duetto 排了长住就要给 5–7% 折 | 排序 ≠ 必须折。本库围栏仍 −3–5% |
| 每个周六都 MinLOS=2 | Peak 未证实 / 肩日冰 → 不限（P33 / P40 形 B） |

---

## 7. 证据（2026-08-23）

| 论断 | 级 | Known / Unknown | 源 |
| --- | --- | --- | --- |
| LOS = 客人住几晚；ADR = Room Revenue/Rooms Sold；RevPAR = Room Revenue/Rooms Available | S | **Known 定义** | CoStar STR Glossary https://www.costar.com/products/str-benchmark/resources/glossary （本轮打开）。**无** compressed-night value 词条 |
| 高需求后接低需求时拒短住、接更长住；须有足够长住需求否则伤 RevPAR | A | **Known 方向** | eCornell IMPACT *Dos and Don'ts of Length of Stay*（Kimes）https://ecornell-impact.cornell.edu/the-dos-and-donts-of-length-of-stay/ （14:17 已开，本轮不重抓） |
| MinLOS = 某到达日至少 N 晚（N≥2） | A 词条 | **Known 定义** | HSMAI Academy https://academy.hsmai.org/glossary/minimum-length-of-stay/ （14:17 已开） |
| LOS pricing = 按到达日 **和** 时长给一条均价；常用来让加夜看起来更便宜 | A 词条 | **Known 方法名** | HSMAI Academy https://academy.hsmai.org/glossary/length-of-stay-pricing/ （本轮打开） |
| 限制只在超需求 **且** 存在 LOS>1 时有意义；到达×LOS 定价复杂、许多分销不接受 | A | **Known 方向** | HSMAI Europe 2020 *The Future of Pricing* https://global.hsmai.org/wp-content/uploads/2020/03/hsmai-a4_wp-feb-2020-for-screens-1.0-1.pdf （14:17 已开） |
| BAR by Day vs BAR by LOS 方法名 | A Vendor | **Known 名，非必须开** | Hotel Online 2016-06-16 转载 IDeaS Ideal Pricing https://www.hotel-online.com/news/ideas-launches-ideal-pricing-for-hoteliers （14:17 已开；ideas.com 原文空页） |
| 按 stay 总收入/压缩夜排序，长住可排在高 ADR 短住前 | A Vendor 仅 Duetto | **Known 机制；非本店公式** | https://duetto.my.site.com/resourcehub/s/article/Understanding-Forecasts （14:17 已开） |
| BAR-LOS 文中 5–7%/7–10% | A Vendor | **% 不进启发式** | https://www.duettocloud.com/library/open-pricing-bar-los （14:17 已开） |
| 多晚酒店是网络：门槛≈各夜 bid price 之和 | 书目 S | **方向**；不摘正文 | 本库 `theory/optimization-advise.md`（Phillips TOC / Talluri 书目，2026-08-20） |
| 中国 OTA 连住均价公式 | — | **NV。不编。** | — |
| STR 压缩夜价值公式 | — | **不存在于已开 Glossary** | 本卡标 Hypothesis |

---

## 8. Need Verification

| ID | 问题 | 暂用 |
| --- | --- | --- |
| NV-LOS-01 / NV-RST-01 | MinLOS 挂到达日还是覆盖夜 | 双口径 |
| NV-LOS-02 | 套均价相对 Peak 地板的官方下限 | 本库：加权 ×0.97；高峰夜不砍穿 |
| NV-LOS-04 | 中国 OTA 连住均价展示公式 | **不写。** 无截图不发明 |
| NV-LOS-05 | 美团/携程 MinLOS/CTA 如何展示与拒单 | 问用户截图 |
| NV-LOS-07 | STR / HSMAI 是否另有「stay value / compressed night」官方式 | 已开 Glossary **无** → 本尺保持 Hypothesis |
| NV-LOS-06 | 长包 / 月租中国价表 | 本轮不写剧本 |

---

## 9. 交叉

- **P40**：拒 Sat-only（肩日有需求）/ 接（肩日冰）/ 拒砍高峰。本卡解释 **为什么**（瓶颈夜 + CNV）。不重写剧本。  
- **P11**：周末是不是压缩市场。本卡不定价差带。  
- **P21**：节日日历哪天 MinLOS。不是每个周六。  
- **P33**：淡日不要留 MinLOS=2。形 B 之后若把限制留到死周二，走 P33。  
- **T19**：廉价三晚均价占周六 = 用高峰贡献补贴肩日。  
- **T20**：不要砸高峰地板去卖周五。无声明底不发明 699。  
- **Wave7 包装**：套均价 ≥ Peak 地板 + 肩日；与 Hold 799 同向。  
- **ADR / RevPAR**：按夜报告。不替代本尺。

---

## 10. 修订

| 日期 | 内容 |
| --- | --- |
| 2026-08-23 16:17 CST | 首版。T08 理论槽。CNV = 客房收入/压缩夜。STR 无此公式 → Hypothesis。不抄 Duetto %。不编中国均价公式。 |

---

## 11. 交叉（2026-08-23 20:17，不改 CNV 公式）

P41 已 drafted（18:17）。**30×工作日均价** = 本卡禁止的 naive ADR（分母用日历均价藏紧夜）。CNV 与 P41 同向：紧夜记 1 不是 30。NV-LOS-06 月租价表仍 NV（§8「本轮不写剧本」只绑 16:17）。
