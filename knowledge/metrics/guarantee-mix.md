# Guarantee Mix｜今晚 OTB 担保类型拆分

> 轻指标 · P55 · OPERA 26.2 = A **Vendor PMS/store-configured**。本店类型/释放点/押金/Rolling 均 NV。无默认 %。

```text
OTB_total_rooms
= Guaranteed_rooms
+ Non_guaranteed_release_rooms
+ Unknown_guarantee_rooms

Guarantee_mix_share_x = rooms_x / OTB_total_rooms
# 只在用户提供本店间夜时算；无默认占比
```

| 类型 | 间夜 | Deduct? | 释放点 | Rolling? |
| --- | ---: | --- | --- | --- |
| Guaranteed | 用户值 | 本店值 | 本店值 | 本店值 |
| Non-guaranteed / hold | 用户值 | 本店值 | 本店值 | 本店值 |
| Unknown | 用户值 | NV | NV | NV |

放房前不按混合 OCC 涨、不因预计释放提前 dump。放房后重算 `Remaining_after_release + Pace`，转 P01/P05。Deduct 不等于已到店；Rolling 可能令画面继续占用。OPERA 4 PM/6 PM 是厂商示例，不是中国统一时点。120/18/14/399/799 不进公式。

**理论（2026-08-26 08:17）：** 为什么这张拆分表是必须的 → **T-Guar** [`../theory/guarantee-release.md`](../theory/guarantee-release.md)：画面 OTB 还不是需求；占不占库存看本店 **Deduct / Non-Deduct** 配置（不看标签），**释放是事件不是预测**；Rolling No Show 可让画面继续占用而无真实到店。本表五问（类型表 / Deduct 映射 / 放房时点 / Rolling / 非担保间夜）全部 **NV**，不代填。
