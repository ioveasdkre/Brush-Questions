/*
 Table: Product
 
 +--------------+---------+
 | Column Name  | Type    |
 +--------------+---------+
 | product_id   | int     |
 | product_name | varchar |
 | unit_price   | int     |
 +--------------+---------+
 product_id 是該表的主鍵。
 該表的每一行表示每個產品的名稱和價格。
 
 
 Table: Sales
 
 +-------------+---------+
 | Column Name | Type    |
 +-------------+---------+
 | seller_id   | int     |
 | product_id  | int     |
 | buyer_id    | int     |
 | sale_date   | date    |
 | quantity    | int     |
 | price       | int     |
 +-------------+---------+
 該表沒有主鍵，它可以有重複的行。
 product_id 是 Product 表的外鍵。
 此表的每一行都包含有關一次銷售的一些信息。
 */
/*
 編寫一個 SQL 查詢，報告僅在 2019 年第一季度售出的產品。即 2019-01-01 和 2019-03-31（含）之間。
 以任意順序返回結果表。
 查詢結果格式如下例所示。
 */
select
  product_id,
  product_name
from
  Product p
where
  exists (
    select
      *
    from
      Sales s
    group by
      product_id -- 分群組 再取時間 最大與 最小 且販售期間只在 '2019-01-01' ~ '2019-03-31'之間
    having
      p.product_id = s.product_id
      and Min(s.sale_date) >= '2019-01-01'
      and Max(s.sale_date) <= '2019-03-31'
  )