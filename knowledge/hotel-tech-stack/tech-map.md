# Hotel Revenue Technology Map

> 文件：`hotel-tech-stack/tech-map.md`  
> 检索日：2026-08-20  
> 当前阶段不操作系统。顾问必须知道：价格和库存**在哪产生**、**怎么到消费者**。  
> 例厂商只列本轮能打开或交叉的入口，不是采购推荐。

---

## 1. 组件

| 组件 | 是什么 | 顾问为什么要懂 | 本轮核到的入口 |
| --- | --- | --- | --- |
| **PMS** Property Management System | 店端：在店预订、客人档案、房态、房价、结账、部分房价库存。STR 口径的 Rooms Sold / Available 多从此出。 | OTB 对不对，先问 PMS 关房、维修房、complimentary 是否进分母 | Oracle OPERA Cloud：https://www.oracle.com/hospitality/hotel-property-management/hotel-pms-software/ （打开）。页：库存与房价、Look to Book、团队 block、报表 |
| **CRS** Central Reservation System | 集团/品牌中央：ARI（Availability, Rates, Inventory）单一事实源，喂直销、GDS、有时 OTA | 多店/品牌酒店的「真库存」常在 CRS 不在 PMS | Amadeus ACRS：https://www.amadeus-hospitality.com/amadeus-central-reservation-system/ （打开） |
| **RMS** Revenue Management System | 预测 + 优化 +（可选）自动改价/限制/超售 | 建议从哪来、能否 override、有没有脏输入 | 见 `systems/rms-landscape.md` |
| **Channel Manager** | 把一套 ARI 推到多家 OTA/GDS/IBE，回传预订，降低超卖 | 价到不了渠道、超卖、价差，常在这一跳 | SiteMinder：https://www.siteminder.com/channel-manager/ （打开）。页：450+ 渠道、与 PMS/RMS 双向、yield rules / stop sell |
| **OTA** | Booking / Expedia / 携程 / 美团等 C 端卖场 | 佣金、排名、活动价。规则另库，不在此写 | 本库不操作后台 |
| **GDS** | 旅行社/公司 TMC 网络。STR glossary：Amadeus、Sabre、Travelport | 公司客、国际客；价与零售 BAR 常不同轨 | 术语：CoStar glossary（打开） |
| **IBE** Internet Booking Engine | 官网/品牌 App 预订组件 | 直销价、会员价、与 OTA 的 parity | OPERA / SiteMinder / 品牌自研。无单一官方总页 |
| **Rate Shopper** | 抓/买竞对与自身全渠道公开价 | Comp 价是信号不是答案 | SiteMinder Insights：https://www.siteminder.com/hotel-business-intelligence/ ；Amadeus RS360（sanctioned shop）；RateGain Navigator（检索，正文未开） |
| **BI** | 历史实绩、对标、可视化 | STR STAR、集团 BI、RMS dashboard 不是同一套数 | CoStar STR Glossary；Amadeus Demand360；Duetto ScoreBoard / HotStats |
| **CRM** | 会员档案、协议公司、销售线索 | 会员价、协议价、能否被 RMS 独立定价 | OPERA 档案/忠诚（打开）。华住会是集团会员，不是 RMS |

---

## 2. 价格和库存从哪来、到哪去

独立酒店（常见）：

```text
PMS 主库存  ←── 人工 / RMS 建议或自动写回
   │
   ├── IBE（官网）
   └── Channel Manager ── OTA / 部分 GDS / 民宿渠道
                              └── 消费者
```

品牌/集团酒店（常见）：

```text
PMS（在店执行、入住、夜审）
   ▲▼
CRS（ARI 单一事实源） ←── RMS（IDeaS / Duetto / One Yield…）
   │
   ├── Brand.com / App / 呼叫中心
   ├── GDS（Amadeus / Sabre / Travelport）
   └── Channel Manager 或 CRS 直连 ── OTA
                                          └── 消费者
```

Amadeus 公开主张的变体（已打开文章）：

```text
RMS（IDeaS 或 Duetto）──单端点── ACRS ── 分发
                         （不强制 RMS↔PMS 直连）
```

Marriott 迁移中的公开名称（招聘交叉，产品页未找到）：

```text
OYE（定价/库存模块）+ ACRS + Opera Cloud
旧：One Yield + MARSHA + Opera
```

---

## 3. 数据流要点（顾问检查清单）

1. **库存权威**：今晚还剩 12 间，是 PMS 数、CRS 数，还是渠道管理器数？不一致先修同步，再谈涨价。  
2. **价格权威**：BAR 是 RMS 写的、CRS 手工的，还是渠道管理器规则覆盖的？  
3. **限制**：MinLOS / CTA / stop sell 在哪一层生效？只改 PMS 不改 CRS，渠道会假开。  
4. **回传**：OTA 预订是否实时回 CRS/PMS？延迟会造成超卖或「OTB 假低」。  
5. ** complimentary / 团队 block / 维修房**：是否进 OCC 分母？STR 定义：Demand 不含 complimentary。  
6. **竞对价**：Rate shopper 是公开卖价，不是对方 RMS 的最优价；活动房、会员登录价常看不见。  
7. **测量**：STR 指数是事后对标；RMS dashboard 是本店 OTB。不要拿 RGI 当明天的定价函数。

---

## 4. 与顾问过程的接口

用户只给一张 OTB 表时，默认假设：

- 数来自 PMS 或 RMS 截图（问清）。  
- 挂牌价可能与 OTA 所见不一致（parity）。  
- 若无渠道管理器，多渠道手工改价 → 建议必须写「先统一库存再动价」。

缺 3 个数据时优先补：**(1) 剩余可售 vs 物理库存 (2) 价最后是谁写的 (3) 近 3 日 pickup 是否含一个团队。**

---

## 5. 追加（2026-08-23 04:17）· OPERA Cloud OO vs OS（PMS 注，不是 RMS）

Oracle OPERA Cloud 26.2 官方帮助 **打开**（A Vendor，**仅该 PMS**）：

- https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_configuration_codes_out_of_order_out_of_service.htm  
- https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_housekeeping_out_of_order.htm  

| 码 | 库存 | OCC | 厂商典型用途 |
| --- | --- | --- | --- |
| **Out of Order (OO)** | **从库存拿掉**，不能派给预订 | 100% = Occupied / (Inventory − OO)。例 100 间 5 OO → 95 住满 | 员工自用、淡季整层关、需修理不可售 |
| **Out of Service (OS)** | **仍在库存**，仍可订 | 不缩小分母 | 临时维修但不妨碍出售 |

Unit Status 控件可替换 OO/OS：按状态配置是否 Deduct Inventory、是否进 OCC 统计。

**不是 RMS。** 不写 `systems/` 假优化器页。**不是**中国西软/绿云/石基字段名（NV-OOO-01）。顾问只问：这个状态扣不扣今晚 Remaining。

对照（不要混成一条标准）：Stayntouch OOO 扣 / OOS 不扣（词不同）。Forward STAR Adjusted **排除 OOO**、为省成本的 OOS **仍计入**。Historical STAR 短 OOO **不扣**。CoStar TRevPAR 教育文 OOS/OOO 命名与 OPERA **相反** → MPI 用 Historical S，店内以是否扣 Remaining 为准。
