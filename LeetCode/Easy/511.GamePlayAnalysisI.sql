/*
 Table: Activity
 
 +--------------+---------+
 | Column Name  | Type    |
 +--------------+---------+
 | player_id    | int     |
 | device_id    | int     |
 | event_date   | date    |
 | games_played | int     |
 +--------------+---------+
 (player_id, event_date) 是這個表的主鍵。
 這張表顯示了一些遊戲玩家的活躍度。
 每一行都是玩家在某天使用某些設備註銷之前登錄並玩了許多遊戲（可能為 0）的記錄。
 */
/*
 編寫一個 SQL 查詢來報告每個玩家的首次登錄日期。
 以任意順序返回結果表。
 查詢結果格式如下例所示。
 */
select
  player_id,
  Min(event_date) first_login
from
  Activity
group by
  player_id