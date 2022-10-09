/*
 Table: Orders
 
 +-----------------+----------+
 | Column Name     | Type     |
 +-----------------+----------+
 | order_number    | int      |
 | customer_number | int      |
 +-----------------+----------+
 order_number 是該表的主鍵。
 此表包含有關訂單 ID 和客戶 ID 的信息。
 */
/*
 編寫一個 SQL 查詢來查找下單數量最多的客戶的 customer_number。
 生成測試用例，以便恰好一個客戶下的訂單比任何其他客戶都多。
 查詢結果格式如下例所示。
 */
select
  top 1 customer_number -- 只取一筆
from
  Orders
group by
  customer_number -- 客戶 id 群組
order by
  count(customer_number) desc -- 排序依照訂單最多的客戶