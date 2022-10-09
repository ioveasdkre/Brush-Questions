/*
 Table Activities:
 
 +-------------+---------+
 | Column Name | Type    |
 +-------------+---------+
 | sell_date   | date    |
 | product     | varchar |
 +-------------+---------+
 此表沒有主鍵，它可能包含重複項。
 此表的每一行都包含產品名稱和在市場上銷售的日期。
 */
/*
 編寫一個 SQL 查詢來查找每個日期銷售的不同產品的數量及其名稱。
 每個日期的已售產品名稱應按字典順序排序。
 返回按 排序的結果表sell_date。
 查詢結果格式如下例所示。
 */
with sales as(
  select
    sell_date,
    product
  from
    Activities
  group by
    sell_date,
    product
) -- 先群組 日期, 產品. 在計算 
-- string_agg 字符串聚合
select
  sell_date,
  count(product) as num_sold,
  string_agg(product, ',') as products
from
  sales
group by
  sell_date -- stuff 將字串插入另一個字串
select
  A1.sell_date,
  count(A1.product) as num_sold,
  stuff(
    (
      select
        ',' + A2.product
      from
        sales A2
      where
        A2.sell_date = A1.sell_date for xml path('')
    ),
    1,
    1,
    ''
  ) as products
from
  sales A1
group by
  A1.sell_date ---------------------------------------------
  -- distinct 過濾重複
  -- stuff 將字串插入另一個字串
select
  A1.sell_date,
  count(distinct A1.product) as num_sold,
  stuff(
    (
      select
        distinct ',' + A2.product
      from
        Activities A2
      where
        A2.sell_date = A1.sell_date FOR XML PATH ('')
    ),
    1,
    1,
    ''
  ) as products
from
  Activities as A1
group by
  A1.sell_date