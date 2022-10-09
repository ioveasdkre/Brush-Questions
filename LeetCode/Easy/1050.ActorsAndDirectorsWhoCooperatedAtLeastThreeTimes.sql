/*
 Table: ActorDirector
 
 +-------------+---------+
 | Column Name | Type    |
 +-------------+---------+
 | actor_id    | int     |
 | director_id | int     |
 | timestamp   | int     |
 +-------------+---------+
 timestamp 是該表的主鍵列。
 */
/*
 為報告編寫 SQL 查詢，該報告提供演員與導演至少合作 3 次的對（actor_id，director_id）。
 以任意順序返回結果表。
 查詢結果格式如下例所示。
 */
select
  actor_id,
  director_id
from
  actordirector
group by
  actor_id,
  director_id
having
  count(*) > 2 -- 因 actor_id, director_id 劃分群組, 故只要計算次數大於 3即可符合條件