# Decision Card: Don't Dump on Non-guaranteed Holds

> P55 · 2026-08-26 06:17 CST · OPERA = **Vendor PMS/store-configured**，不是华住 SOP。无默认 %/押金/放房点。

## 三句（原样）

1. 先问今晚的 OTB 里有多少是 **非担保 / 6 点保留**。到点会放的房不是已卖掉的需求，也不是今晚该砍价的理由。本店预订类型与放房时点 **NV**，不把 OPERA 类型名当华住 SOP。
2. 高峰：先收紧担保要求（新生产）或开浅预付，再谈价。Hold 779–799 首选 799（Hypothesis / Simulation）。不要因为「一半是 6 点保留」就提前 dump。
3. 放房落地后才按真 remaining + Pace 走 P01 或 P05。已发生的 no-show 走 P54；卖限/赶客走 P24；改取消窗口走 P38；预付产品走 P19。不要把 BAR dump 到 399「反正非担保」。

```yaml
decision: Hold public BAR before actual release; split tonight's OTB by guarantee type; tighten guarantee only for new peak production or offer shallow prepaid; after release re-score true remaining + Pace
required_inputs: [Stay Date, BAR, guaranteed rooms, non-guaranteed/release rooms, unknown rooms, store deduct/release behavior, remaining after release, Pace]
recommended_range: 779–799
preferred: 799
label: Hypothesis / Simulation only
do_not_do: [raise from mixed OCC, pre-dump, change existing confirmed terms, BAR to 399, invent deposit percentage or China release time]
confidence: Medium direction
```

## Gate

1. 放房前 Hold；预计释放不是当前真 remaining。
2. 高峰仅对**新生产**收紧担保/开浅预付，不追溯旧单。
3. 放房后：薄/Ahead→P01；厚/Behind→P05。
4. 已 no-show→P54；卖限/walk→P24；取消窗→P38；预付→P19；前台→P42；团块→P53。

Rolling 类型先问本店控制。销售拟 399 → 拒绝；399 不是推荐 BAR。Never −15%。
> 交叉指针（2026-08-31 10:17，不改正文）：押金金额/预授权改尺 → **P86** `deposit-preauth-vs-bar.md`。本卡仍是非担保到点释放前不 dump。不写 P87。
