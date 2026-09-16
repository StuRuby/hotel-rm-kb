# Metric｜Resort Fee / Service Charge / All-in vs Public BAR（轻）

> 路径：`metrics/resort-fee-vs-public-bar.md`  
> 配：P79  
> 状态：drafted 2026-08-30 06:17  
> **无默认 Resort Fee %、无默认服务费 %、无「含税太贵 = 必须砍 BAR」、无税率 Fact**

## 定义（Hypothesis 计数尺）

- 本店公开灵活 BAR（用户给）
- 客人看到的 all-in / 含税总价 / OTA 总价（用户给；不编）
- 分层（能拆就拆；拆不清标 NV）：
  1. 房价（公开灵活 BAR）
  2. Resort / Destination / Urban Fee（STR：永远 Misc，永不 Rooms）
  3. 强制服务费 — 店作 principal、未分员工（STR：可进 Rooms Revenue；仍 ≠ BAR）
  4. 服务费已分员工 / 小费 / agent-mode（STR：不进收入或排除）
  5. 税 / 政府强制附加（STR：Exclude）
  6. OTA / LTB 展示加总（OPERA Separate/Combined Line、INCL_PRINT_SEP_PKGS_IN_RATE_QUERY = 显示 ≠ 尺）
- gap = 客人看到的 all-in − 公开 BAR（只观察，不推导必须折扣）
- 本店 Remaining；Pace（Ahead / On / Behind）
- 拟议是否「BAR 改成 all-in 地板 / 总价贵所以跟 / ADR 被费项看脏所以砍」

## 不用来做什么

- 不推导「Resort Fee 该收多少 / 服务费该百分之几 / 税率该多少」
- 不把 all-in / 含费总价写成公开 BAR
- 不因「总价贵 / 服务费吓跑 / 含税太贵 / ADR 被费项看脏」自动砍公开尺
- 不把 OPERA Vendor $540 蜜月例、STR 上报口径写成中国店规或默认 %
- 不发明费 % / 税率 Fact
- 不把 P36 竞对比价税/费口径当成「本店必须改 BAR」

## STR 拆（A 协会，读法不是改尺令）

| 层 | STR 上报 | 对公开 BAR |
| --- | --- | --- |
| Resort / Destination / Urban Fee | **永远 Misc**，永不 Rooms | ≠ BAR |
| Principal 强制服务费（mandatory, 非转第三方） | 可进 **Rooms Revenue**（一致性） | 仍 ≠ 改写 BAR |
| 已分员工的服务费 / 小费 | 不进收入 / Exclude | ≠ BAR |
| 税 / 政府强制附加 | Exclude | ≠ BAR |

ADR「看脏」：resort 若被误记进 Rooms 会抬 ADR；principal 服务费进 Rooms 也会抬 ADR——**都是读桶，不是砍尺。** 见 `metrics/adr.md`（resort fee → miscellaneous）。

## 调用

早会/调价前看：公开 BAR；all-in/费是否被当成尺；有没有人要求 BAR→含费地板；ADR 是否被费项「看脏」却想砍尺。  
Ahead 且剩余紧 → Hold。  
Behind 才把剩余交给 P05（仍禁费项借口一夜 −15%；围栏须有截止日）。

本店费表 / 华住字段 = **NV**。

> 交叉指针（2026-09-02 08:17，不改正文）：税展示/CITY_TAX Diagnose 走 **T-Tax**，过程仍 **P79**；公式/税率 Fact 不重写。不规定 P88。
