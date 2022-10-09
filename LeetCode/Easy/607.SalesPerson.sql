/*
 Table: SalesPerson
 
 +-----------------+---------+
 | Column Name     | Type    |
 +-----------------+---------+
 | sales_id        | int     |
 | name            | varchar |
 | salary          | int     |
 | commission_rate | int     |
 | hire_date       | date    |
 +-----------------+---------+
 sales_id 是該表的主鍵列。
 此表的每一行都顯示銷售人員的姓名和 ID，以及他們的工資、佣金率和僱用日期。
 
 
 Table: Company
 
 +-------------+---------+
 | Column Name | Type    |
 +-------------+---------+
 | com_id      | int     |
 | name        | varchar |
 | city        | varchar |
 +-------------+---------+
 com_id 是該表的主鍵列。
 該表的每一行表示公司的名稱和ID以及公司所在的城市。
 
 
 Table: Orders
 
 +-------------+------+
 | Column Name | Type |
 +-------------+------+
 | order_id    | int  |
 | order_date  | date |
 | com_id      | int  |
 | sales_id    | int  |
 | amount      | int  |
 +-------------+------+
 order_id 是該表的主鍵列。
 com_id 是 Company 表中 com_id 的外鍵。
 sales_id 是 SalesPerson 表中 sales_id 的外鍵。
 此表的每一行都包含有關一個訂單的信息。 這包括公司的 ID、銷售人員的 ID、訂單的日期和支付的金額。
 */
/*
 編寫一個 SQL 查詢來報告所有沒有與名稱為“RED”的公司相關的訂單的銷售人員的姓名。
 以任意順序返回結果表。
 查詢結果格式如下例所示。
 */
select
  name
from
  SalesPerson s
where
  not exists (
    -- 抓出公司 RED的資料 再用 not exists將其排除
    select
      *
    from
      Orders o
    where
      exists (
        select
          *
        from
          Company c
        where
          s.sales_id = o.sales_id
          and o.com_id = c.com_id
          and c.name = 'RED'
      )
  )