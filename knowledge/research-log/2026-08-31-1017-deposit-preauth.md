# Research Log｜2026-08-31 10:17 CST · CASE C31-10 P86 Deposit / Pre-authorization vs Public BAR

> 路径：`research-log/2026-08-31-1017-deposit-preauth.md`  
> 槽：10:17 case hour · Asia/Shanghai  
> Advisor-First：不操作 PMS/RMS/OTA；不自动定价

## Opened this hour

| # | Title | URL | Evidence | Takeaway |
| --- | --- | --- | --- | --- |
| 1 | Oracle OPERA Cloud 26.2 Managing Reservation Deposit Request and Cancellation Policy | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_managing_reservation_deposit_and_cancellation.htm | **A Vendor PMS** · **新开** | "Reservation deposit deals with managing the deposit requirements and payment that guests make prior to their stay." Deposit/Cancellation panel；rate code schedule precedence。**Deposit request/payment ≠ BAR Type。** |
| 2 | Oracle OPERA Cloud 26.1 Configuring Deposit Rules | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.1/ocsuh/t_reservation_components_creating_reservation_deposit_rules.htm | **A Vendor PMS** · **新开** | Deposit Rules：amounts/percentages + when due；Deposit Schedules；only one rule（rate code > reservation type > reservation）；Flat / Percentage / Percentage of Nightly Rate / Nights；Before Arrival / After Booking。**Deposit Rule ≠ public flexible BAR。** |
| 3 | Oracle OPERA Cloud 26.2 About Credit Card Authorization Rules | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/c_admin_financial_cashiering_about_credit_card_authorization_rules.htm | **A Vendor PMS** · **新开**（WebFetch timeout → curl 打开） | Authorization rule = anticipated total expenses → required **credit card pre-authorization**。Daily Rate = Room Rate + Add to Rate Packages + Fixed Charges + taxes。Vendor $100/$20/$50 例 **NOT China Fact**。**Pre-auth ≠ selling rate / BAR Type。** |

## Pointer OK（不当本小时新发现核页）

| Title | URL | Note |
| --- | --- | --- |
| HSMAI Academy BAR glossary | https://academy.hsmai.org/glossary/bar/ | §67 指针；BAR = non-qualified publicly available |
| Oracle OPERA Cloud 26.2 Configuring Reservation Types | https://docs.oracle.com/en/industries/hospitality/opera-cloud/26.2/ocsuh/t_admin_booking_configuring_reservation_types.htm | §33 指针；Deposit 勾选 informational；押金要求来自 deposit rule schedules；过程邻 P55 |

## Failed / honest NV

| Source | Status | URL / search |
| --- | --- | --- |
| 华住押金/预授权 SOP | **禁止发明 / NV** | `华住 押金 SOP` · `华住 预授权` |
| 默认押金 % / 预授权金额 Fact | **禁止发明 / NV** | — |
| 佣金% / 699 as Fact | **禁止发明 / NV** | — |
| OPERA auth-rule $100/$20/$50 例 as China BAR | **禁止当市场 Fact** | 页内 Vendor 示意 only |

## Filename scan

- 无 `deposit*` / `preauth*` playbook；无 `dont-rewrite-bar-for-deposit*` card（本小时新建）。
- 邻剧已有：P55 guarantee-type（库存释放轴，≠ 押金金额=BAR）、P19 prepaid-nonrefundable、P84 cancellation-attrition-fee、P83 stored-value — **对象不同，不复写**。

## Advisor-availability

**Yes。** 用户说「押金才是市场价改 BAR / 预授权扣太多所以砍 / 押金当地板 / ADR 被押金看脏 / Deposit·Auth 屏就是公开价」→ Diagnose/过程走 **P86**；Ahead Hold 779–799 首选 799；拒 399。证据：OPERA Deposit + Authorization Rules（A）。默认 % / 华住 SOP = NV，仍可条件化 Hold。

## Compatibility

- **无真矛盾，无 needs_revision。** P55=担保/放房不是押金金额改尺；P19=预付产品不是押金付款改尺；P84=取消费过账；P83=储值付款；P85/T-Hurdle=hurdle 可售门。
- 08:17「不要规定 P86」= theory 不得指定 → 10:17 核实 leftover 后开 = **槽序**（同 P84 cancel fee / P82 parking）。
- 优先级保持 **MEDIUM**（不升级 HIGH）。

## Skips

- **P87**（不规定、不开）
- 理论卡（下一 theory 窗 16:17；本槽是 case）
- knowledge-map
- 重写 P01–P85 / T-Hurdle / T-Stored / optimization-advise bodies
- 发明默认押金 % / 预授权金额 / 华住 SOP / 699
- 把 180/14/399/799 或 OPERA $ 例当市场 Fact

## Next slot

**12:17 = sources/recap。** **不规定 P87。** 不要把 **P86 / T-Hurdle / P85 / P84 / T-Stored / P83 列为「下一轮要写」— 已 drafted**。押金/预授权 **不再 leftover**。Pet/AAA 仍停车。
