# Simulation｜2026 Service Recovery Saturday（Simulation only）

> 路径：`cases/sim-2026-service-recovery-sat.md`  
> 配：P87  
> **全部数字 Simulation only，不是某家真实酒店**

## Setup（Simulation）

- 180 间城市商务店；周六
- Remaining：**14**；Pace **Ahead**
- 公开灵活 BAR **799**
- 店长甩来：「客人投诉补了差价，BAR 改成 **399**」；GM 补刀：「服务失败今晚全部 dump」；销售再补：「补偿券才是市场价」（未当 Fact；本店补偿 SOP / 默认补偿 % NV）

## Advise（期望）

1. 先拆：定价尺是 **公开灵活 BAR 799**，不是本住 folio Service Recovery / posting adjustment / rebate，不是「补偿券才是市场价」。
2. Ahead + remaining 14 → **Hold 779–799 首选 799**。
3. 补偿留在 OPERA **Post Service Recovery Adjustment / Post Adjustment / negative rebate**，或 Cloudbeds **Adjust Charge**。配置/过账 ≠ BAR Type。
4. ADR 污染 = 读 posting。STR net-of-allowance 是 READ，不是 rewrite。不把 OPERA Vendor $ breakfast 10.00 / 63.60 例当中国 Fact。
5. **拒绝** BAR→399（服务失败所以砍 / 补了差价所以新尺 / 补偿券才是市场价 / ADR 被减免看脏）。
6. 若其实是点评 SIGNAL → **P39**；BRG like-for-like 已订直销 → **P75**；计划 Comp → **P47**；取消 FEE → **P84**；储值 → **P83**；押金/预授权 → **P86**。
7. 真弱 leftover → **P05**（仍不从补偿地板改写 BAR）。
8. 早会一个动作：纠正「服务补偿≠BAR」+ Hold 公开 BAR。

## 禁止

- 把 14/399/799 当市场 Fact
- 编华住补偿 SOP、默认补偿 %、佣金%、699、Walk $
- 把 OPERA Vendor $ breakfast 例写入本仿真当市场 Fact
- 开 P88
- 把 399 写成推荐 BAR
- 把 P39 评分 / P75 BRG / P47 Comp / P84 取消 FEE / P83 储值 / P86 押金当本店改尺令

## Outcome 标签

- 399 = 被拒绝的 dump（服务补偿改尺）
- 799 = Hypothesis / Simulation 首选 Hold
