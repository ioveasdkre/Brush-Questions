/*
 Table: Activity
 
 +---------------+---------+
 | Column Name   | Type    |
 +---------------+---------+
 | user_id       | int     |
 | session_id    | int     |
 | activity_date | date    |
 | activity_type | enum    |
 +---------------+---------+
 此表沒有主鍵，它可能有重複的行。
 activity_type 列是一個 ENUM 類型（'open_session'、'end_session'、'scroll_down'、'send_message'）。
 該表顯示了社交媒體網站的用戶活動。
 請注意，每個會話僅屬於一個用戶。
 */
/*
 編寫 SQL 查詢以查找截至 2019 年 7 月 27 日結束的 30 天期間的每日活躍用戶數。 如果用戶在某一天至少進行了一項活動，則該用戶在某一天處於活躍狀態。
 以任意順序返回結果表。
 
 Example 1:
 
 Input: 
 Activity table:
 +---------+------------+---------------+---------------+
 | user_id | session_id | activity_date | activity_type |
 +---------+------------+---------------+---------------+
 | 1       | 1          | 2019-07-20    | open_session  |
 | 1       | 1          | 2019-07-20    | scroll_down   |
 | 1       | 1          | 2019-07-20    | end_session   |
 | 2       | 4          | 2019-07-20    | open_session  |
 | 2       | 4          | 2019-07-21    | send_message  |
 | 2       | 4          | 2019-07-21    | end_session   |
 | 3       | 2          | 2019-07-21    | open_session  |
 | 3       | 2          | 2019-07-21    | send_message  |
 | 3       | 2          | 2019-07-21    | end_session   |
 | 4       | 3          | 2019-06-25    | open_session  |
 | 4       | 3          | 2019-06-25    | end_session   |
 +---------+------------+---------------+---------------+
 Output: 
 +------------+--------------+ 
 | day        | active_users |
 +------------+--------------+ 
 | 2019-07-20 | 2            |
 | 2019-07-21 | 2            |
 +------------+--------------+ 
 說明：請注意，我們不關心活躍用戶為零的天數。
 */
 -- 先篩選設定時間範圍 再將 時間設為群組, 最後 計算不重複的 使用者數量
select
  activity_date day,
  count(distinct user_id) active_users
from
  Activity
where
  activity_date between dateadd(day, -29, '2019-07-27')
  AND '2019-07-27'
group by
  activity_date;