# MPI / ARI / RGI｜相对 Comp Set 指数

> 卡：`metrics/mpi-ari-rgi.md`  
> 类型：Benchmark  
> Evidence Level：S  
> Source：CoStar STR Glossary（MPI / Occupancy Index, ARI, RevPAR Index / RGI）  
> Last Verified：2026-08-20  
> Knowledge Type：Fact

## 定义

本店相对某一**聚合组**（Comp Set / Market / Submarket）的公平份额指数。100 = fair share。

这些指数**只在相对 Comp Set（或市场）时有意义**。没有集合，就没有 MPI。

## 公式（STR，S）

```
MPI = (Subject OCC    / Group OCC)    × 100
ARI = (Subject ADR    / Group ADR)    × 100
RGI = (Subject RevPAR / Group RevPAR) × 100
```

例：本店 OCC 64%、Comp 80% → MPI 80（少拿 20% 的入住份额）。本店 ADR 60、Comp 50 → ARI 120。

同口径下 RGI ≈ MPI × ARI / 100。

## 上游

本店与集合的 OCC/ADR/RevPAR；Comp Set 构成；口径是否同为 STR。

## 下游

份额诊断；定价相对位置；业主报告。

## 常见误读

| 误读 | 实际 |
| --- | --- |
| RGI>100 必涨价 | 可能已满、或 Comp 选弱了 |
| 把奢华非竞品塞进 Comp | 指数被人为压低/抬高 |
| 本店 PMS OCC vs STR Comp OCC | 分母不同 |
| 指数一周抖动 = 战略失败 | 活动日、一家 Comp 关房就会抖 |

## 顾问决策含义

先审 Comp Set 是否仍是真对手（位置、产品、价格带、客群）。再读组合：MPI 高 ARI 低 → 价可能低；相反 → 价可能高。指数是信号，下一步仍要看 Pickup、Remaining、DTA。

STR Comp Set 合规有最低参与家数与关联限制（Competitive Set Guidelines）。内部自选竞对必须标注。

过程（何时不要按指数重定价）见 **P57** `advisor-playbooks/star-index-misread.md`。本卡公式不改。

理论（指数已经发生之后它被允许改什么）见 **T-Share** `theory/share-index-vs-price.md`。公式仍不改。
