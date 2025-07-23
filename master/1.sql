WITH params AS (
    select ?::text AS param1
)
SELECT 
    -- Текущие значения
    COALESCE(SUM(CASE 
        WHEN params.param1 = 'month' 
            AND req_id.doc_at >= date_trunc('MONTH', current_date) 
            AND req_id.doc_at < date_trunc('MONTH', current_date) + interval '1' month
        THEN main.amount_estimate 
        WHEN params.param1 = 'quarter' 
            AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '3' month 
            AND req_id.doc_at < date_trunc('MONTH', current_date)
        THEN main.amount_estimate 
        WHEN params.param1 = 'year' 
            AND req_id.doc_at >= date_trunc('YEAR', current_date) 
            AND req_id.doc_at < date_trunc('YEAR', current_date) + interval '1' year 
        THEN main.amount_estimate 
        WHEN params.param1 = 'all' 
        THEN main.amount_estimate 
        ELSE 0 
    END), 0) AS current_period,

    -- Предыдущие значения
    COALESCE(SUM(CASE 
        WHEN params.param1 = 'month' 
            AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '1' month 
            AND req_id.doc_at < date_trunc('MONTH', current_date) 
        THEN main.amount_estimate 
        WHEN params.param1 = 'quarter' 
            AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '6' month 
            AND req_id.doc_at < date_trunc('MONTH', current_date) - interval '3' month 
        THEN main.amount_estimate 
        WHEN params.param1 = 'year' 
            AND req_id.doc_at >= date_trunc('YEAR', current_date) - interval '1' year 
            AND req_id.doc_at < date_trunc('YEAR', current_date) 
        THEN main.amount_estimate 
        WHEN params.param1 = 'all' 
        THEN main.amount_estimate 
        ELSE 0 
    END), 0) AS previous_period,

    -- Процентное изменение
    ROUND(
        CASE 
            WHEN COALESCE(SUM(CASE 
                    WHEN params.param1 = 'month' 
                        AND req_id.doc_at >= date_trunc('MONTH', current_date) 
                        AND req_id.doc_at < date_trunc('MONTH', current_date) + interval '1' month 
                    THEN main.amount_estimate 
                    ELSE 0 
                END), 0) != 0 
            THEN 
                (COALESCE(SUM(CASE 
                    WHEN params.param1 = 'month' 
                        AND req_id.doc_at >= date_trunc('MONTH', current_date) 
                        AND req_id.doc_at < date_trunc('MONTH', current_date) + interval '1' month 
                    THEN main.amount_estimate 
                    ELSE 0 
                END), 0) - 
                COALESCE(SUM(CASE 
                    WHEN params.param1 = 'month' 
                        AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '1' month 
                        AND req_id.doc_at < date_trunc('MONTH', current_date) 
                    THEN main.amount_estimate 
                    ELSE 0 
                END), 0)) 
                / COALESCE(SUM(CASE 
                    WHEN params.param1 = 'month' 
                        AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '1' month 
                        AND req_id.doc_at < date_trunc('MONTH', current_date) 
                    THEN main.amount_estimate 
                    ELSE 0 
                END), 0) * 100
            ELSE 0
        END, 2) AS percent_change
FROM its_d_jrs main
JOIN its_req req_id ON req_id.id = main.req_id
JOIN params ON 1 = 1
WHERE 
(
    (params.param1 = 'month' AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '1' month 
        AND req_id.doc_at < date_trunc('MONTH', current_date)) OR
    (params.param1 = 'quarter' AND req_id.doc_at >= date_trunc('MONTH', current_date) - interval '3' month 
        AND req_id.doc_at < date_trunc('MONTH', current_date)) OR
    (params.param1 = 'year' AND req_id.doc_at >= date_trunc('YEAR', current_date) 
        AND req_id.doc_at < date_trunc('YEAR', current_date) + interval '1' year) OR
    (params.param1 = 'all' AND req_id.doc_at IS NOT NULL)
)
