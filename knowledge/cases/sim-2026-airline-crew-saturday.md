# Simulation Case｜城市店周六 BAR 已紧，航司再加 20 间机组房：接 / 拒 / 还价

> 类型：**Simulation / 教学案例，不是真实酒店**  
> 路径：`cases/sim-2026-airline-crew-saturday.md`  
> 日期：2026-08-22  
> 问：「航司说再加 20 间机组房，周六 BAR 已紧，接不接？机组价 380 远低于 BAR 899，应不应该黑出周末？机组很爽约，OTB 要当 Soft 吗？」  
> 调用：P31 · `counter-or-reject-extra-crew.md` · P10 置换式 · P26（对照：协议漏出 ≠ 机组 allotment）· P24 / P28 Soft 闸 · T19 / T20  
> 声明：180 间店与下列价格、间夜、取消口述均为 **练习数据**。不得写成某家真实酒店或某家航司结论。标 Hypothesis 的句子不得改成 Fact。不伪造精确增收。不编东航/南航/国航价表、IATA 名单、取消率、份额保证金。

---

## 0. 用户原始输入（仿真）

```text
酒店：180 间（Simulation，中国大陆独立城市店，非机场店，无品牌会籍/集团机组 SOP）
分析日：2026-08-22
用户原话：「航司说再加 20 间机组房，周六 BAR 已紧，接不接？机组价 380 远低于 BAR 899，要不要把周末机组全黑了？机组很爽约，OTB 要当 Soft 吗？销售说航司是大客户必须接，不接周中也没人来。」

Stay Date A：2026-09-12（周六）
DTA：21
OTB：81% = 146 间
3D Pickup：+16 间
STLY 同 DTA：62%
公开 BAR（直销 + OTA BAR 层）：899
会员价：854
OTA 可订最低：799（预付深折）
竞对可订：869 / 929 / 959
直销可订 899，库存同步

Stay Date B：2026-09-09（周二）
OTB：50% = 90 间
3D Pickup：+5
STLY 同 DTA：48%
公开 BAR：649
Pace：约 On

账号「某航司机组」（Simulation 名，不是东航/南航/国航）：
  合同扫描件：用户说「有框架，找不到附件」
  保证付款 / on-request / LRA / NLRA / blackout / 周末是否适用：Unknown
  已签 allotment：每晚 12 间 × 380，已在 9/12 OTB 里（12 间）
  这场 extra：周六再加 20 间 × 380；周二想顺带加 8 间 × 380
  取消：销售口述「经常当天航班一变就取消，前台不敢超」
  本店 wash / No-show 表：用户没给数字 → Unknown，不编 %

OTB 结构（周六 146）：
  Retail BAR / 会员    88
  已签机组 allotment   12
  其他协议             18
  OTA 深折             20
  Other                 8
```

---

## 1. Intake

口径：Pickup 为间夜。OO=0 Hypothesis。独立城市店。  
**两列必须分开：** 已签 12 间 ≠ extra 20 间。  
合同 Unknown → 高峰 extra 按 **on-request / NLRA Hypothesis**。已签 12 间 **不杀户**。  
380 在 899 之下不是「必须接大客户」。799 单列深折，不与 899 混比。  
取消口述 → 机组块 **可能 Soft**；无表不报取消率。

四价（周六）：

| 层 | 现行 |
| --- | --- |
| 公开 BAR | 899 |
| 会员（封闭） | 854（相对 BAR −5.0%） |
| OTA 深折 | 799 |
| 机组合同 | 380（相对 BAR −57.7%；**Simulation 点价**） |

**预选 3 个补数：** 合同（保证付款/LRA/blackout/周末）；extra 与已签块分列的书面确认；该航司本店 wash 间夜。

---

## 2. Situation

城市店、周六 DTA21、OTB 81% vs STLY 62%、3D +16 → **Pace Ahead + Fast Pickup**（Hypothesis 压缩）。Remaining 34。  
BAR 899，竞对未全部更高（959 一家）。机组已占 12 间合同价；再要 20 间同一价。  
周二 Pace On、BAR 649，extra 8 间更像填房。  
销售「必须接」= 口述，**不是**本库 Fact。

---

## 3. Diagnosis（走 P31 十步）

| 步 | 本卷 |
| --- | --- |
| 1 拆两列 | 已签 allotment **12@380 已在书**；extra 周六 **+20@380**、周二 **+8@380** |
| 2 店型 | **城市店**。机组不是机场底仓；周六是休闲高峰风险 |
| 3 高峰 | 9/12 Ahead+Fast，禁止「有航司」单独当 Compression。本夜 **已证实 Peak** |
| 4 合同 | Unknown。不编 LRA、不编保证付款、不编三字航司价表 |
| 5 置换 extra | 见下。已签 12 算占用，不把 +20 藏进 12 |
| 6 高峰 NetDelta | extra 客房-only **偏负**（Hypothesis） |
| 7 Soft | 爽约口述、无表 → 机组 OTB **当 Soft**；不涨进取消潮；不按硬房超售；无史不给间夜 |
| 8 闸 | 高峰 extra 默认 **Counter 或 Reject**。已签 12 KEEP。不 dump BAR。不杀户 |
| 9 Counter 结构 | 缩周六 extra 或提价；周二可留；肩日未要则不编 |
| 10 输出 | 见 §5 |

置换草表（**Simulation / Hypothesis**，不是 Fact）：

```
Capacity = 180
OTB = 146（含已签机组 12）
Remaining = 34
经验最终 OCC 若拒 extra（Ahead+Fast）≈ 94% = 169    # Hypothesis
ET remaining pickup ≈ 23
若接 extra 20：
  Displaced_Sat = max(0, 23 + 20 − 34) = 9
  但 Ahead+Fast + 留尾 20–30%：压缩日不应把剩余整块给低价层
  尾部预留 ≈ 34 × 25% ≈ 8
  extra 若 20 → 几乎吃掉全部可售尾部；机会成本按将被挤的 BAR 层 899
客房-only 示意（禁止当精确增收）：
  extra 收入 20 × 380 = 7,600
  若按「尾部会被 BAR 填满」挤 20 × 899 = 17,980
  NetDelta ≈ 负    # 方向用，不报「少收 10,380」当承诺
周二 extra 8：OTB 90、Pace On、BAR 649、Remaining 90
  Displaced_Tue ≈ 0 Hypothesis → extra 更像增量
```

**主诊断：** 9/12 是城市店已证实 Peak。+20@380 挤 BAR 尾部 → **不要悄悄 Accept**。已签 12 间是持续合同块，**不是**一场宴会，也**不是** P26 那种 OTA 漏出协议码。机组爽约口述 → Soft，但 Soft ≠ 把已签块整段关死。  
**问题树：** §40 · O12。  
**Naive 全接 / Naive 杀户：都不对。**

---

## 4. Opportunity / Risk

| ID | 判定 |
| --- | --- |
| 主机会 | 周六 extra Counter（缩间或收到 799 带），把尾部留给 899；周二 8 间可接；账号留下 |
| 主风险 | 悄悄接 20 间压 ADR；杀户后天空周中；把 Soft 机组当硬房超售或涨 BAR；为幽灵房 Walk 散客 |
| 假精确 | 不承诺「拒 20 间 × (899−380) = 多收 10,380」——ET、wash、已订都会动 |

---

## 5. Recommended Action · **Counter extra 周六；KEEP 已签 12；周二 extra Accept**

**不按 380 悄悄接 +20。不关死某航司。不把 BAR 降到 380。不发明 699。**

```text
Account: 某航司机组（Simulation）
Hotel:   城市店
Contract: Unknown → 高峰 extra 按 on-request / NLRA Hypothesis
Brand:   独立店；无声明底 → 不发明 699

已签 allotment 12@380
  KEEP（所有列出日期）
  问用户补 LRA/blackout；补出前不关死账号
  该 12 间 OTB：当 Soft 看（爽约口述）——不据此涨 BAR，不按硬 12 间去超售

2026-09-12 周六（Peak, Ahead+Fast）
  extra 20@380:   **Counter**（不是 Accept，也先不整段 Reject 而不给路）
    房量: 周六 extra 最多 **0–4 间@380**（首选 **0–4，建议 4 封顶**；留尾 ≈8）
    价:   若坚持 ~20 间 → **760–850，首选 799**
          （保本贴近被挤 BAR 层；70–85%×899 = 629–764 是讨论锚；
           首选 799 高于该锚，避免泄漏到可外传深折）
  已签 12:        KEEP
  散客:           OPEN。禁止为机组 extra 关零售
  OTA 深折 799:   CLOSE（P25 高峰关深折；机组 Counter 首选 799 是**合同层**，不挂公开）
  Direct BAR:     OPEN
  公开 BAR:       944–971，首选 **949**
                  （+5.6%，档 +5–8%；价未最高可以涨；主刀仍是 extra 不是改 BAR）
  若用户坚持不涨: Hold 899–929 首选 899，**仍然** Counter extra
  Overbook:       今日 **不给间夜**。机组 Soft → 禁止按 146+超售当硬满
  Do-not-do:      悄悄接 20@380；BAR→380；一夜 −15%；杀户；发明 699

2026-09-09 周二（弱/On）
  extra 8@380:    **Accept**（Displaced≈0 Hypothesis）
                  条件：cutoff / 取消通知；净贡献未知 → 不说「总比空着强」，
                  仅相对空房且远低于 BAR 的弱日增量；若用户补出变动成本>380 则撤回
  已签 12:        KEEP
  公开 BAR:       Hold 649
  Do-not-do:      用周六理由拒周二 extra；把周二 380 挂上 OTA

Qualification / 围栏（Hypothesis，不是航司法规）：
  extra 不自动享受 LRA
  机组码不出现在公开 OTA（那是漏出，走 P26 通道，不是本剧主刀）
```

**价已最高只关不涨：** 本仿真公开 **未** 最高（竞对 959），故允许第一刀到 949。若竞对已全部 ≤899，则公开 Hold，只 Counter extra。

**拒绝的选项**

| 选项 | 为什么拒 |
| --- | --- |
| 周六按 380 接满 +20 | 城市 Peak，客房-only 偏负；380/899 不是履约 extra |
| 把周末机组（含已签 12）全部 blackout / 关死账号 | 已签块 Unknown LRA；周二还要产量；杀户 ≠ 围栏 extra |
| BAR 降到 380 或一夜 −15%（约 764）去「接得住」 | dump；380 是 −57.7%。T19/T20/P02 禁一夜 −15% |
| 发明品牌底 699 再接到 699 | 用户没声明底 |
| 按 OTB 81% 再涨到 1199 或超售 8 间 | 机组 Soft；禁止涨进取消潮、禁止按硬房超 |
| 今晚若满了先赶散客留机组空房 | P24：禁止为幽灵机组房 Walk 散客 |

---

## 6. Why

P10：extra 是一场块，按日 displacement，禁止只比 380 vs 899。P31：已签 12 是持续合同，extra 20 不是。P26：这不是协议码上 OTA 的漏出；对照句 = **协议漏出 ≠ 机组 allotment**。城市店周六 Ahead → 高峰 extra 默认 Counter。T19：没变动成本不说 380 总比空着强；高峰机会成本是 899 层。T20：无声明底不发明 699。P28 闸：Soft OTB 停涨停硬超，病因写机组变动不是台风。STR Contract：一场周六 +20 不够格，除非用户证明 >30 天且保证付款。

---

## 7. Expected Impact / Risk / Watch

方向：周六少卖 380 extra 层、多留 899/949 尾部；12 间合同块仍在；周二 8 间可填。  
**不报精确增收。**

风险：真 LRA extra 被误拒；杀户冲动伤周中；Soft 判断过强导致周六尾部空且不涨也不接。  
Watch：24h 周六 Pickup 是否仍来自 899 层；航司是否接受 4 间或 799；机组取消是否跳；周二 OTB 是否掉。

---

## 8. Re-evaluation Trigger

```
用户补出 LRA 且周六未 blackout → 已签 12 必须开；extra 20 仍单独 Counter（LRA ≠ 无限加房）
用户补出周末除外 / NLRA / 已列 blackout → 周六 extra CLOSE；12 间按合同句；周二不变
用户补 ET，Displaced = 0 → extra 可改 Accept + cutoff
周六 24h 散客 Pickup 已快 → extra 封顶降到 0；维持 Counter
航司坚持 20@380 + 关散客 → Reject extra；KEEP 12；不关散客
机组 24h 取消 ≥ 新订 → Soft 确认；停涨；停加超；释放后开零售，禁止 −15% 填坑
周二 ET 上修到将满 → 周二 extra 改 Counter
公开已最高 → 停涨 BAR，仍 Counter extra
```

Confidence：高峰 extra 方向 Medium；4 间封顶与 799 首选 Low Hypothesis；wash% Unknown。

---

## 9. 顾问当面三句（本卷验收）

1. 额外机组房挤满房周六，默认 Counter 或 Reject，不是按 380 悄悄接。  
2. 合同里的 allotment 先问围栏和 wash，不要一律关死航司账号。  
3. 机组很爽约就把那块 OTB 当 Soft，禁止涨进取消潮，也禁止按硬房超售。

本卷动作摘要：9/12 extra **Counter**（最多 **0–4@380** 或 **760–850 首选 799**）；已签 **12 KEEP**；公开 **944–971 首选 949**（或不涨则 Hold 899）；9/09 extra 8@380 **Accept**；拒绝悄悄接 20@380 / 杀户 / dump BAR。
