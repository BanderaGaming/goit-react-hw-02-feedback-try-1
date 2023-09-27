import css from './Stats.module.css';

export function Stats({good, neutral, bad, total, positiveProc}) {
    return (
        <>
            <div className={css.statsBox}>
                <span className={css.stat}>Good: {good}</span>
                <span className={css.stat}>Neutral: {neutral}</span>
                <span className={css.stat}>Bad: {bad}</span>
                <span className={css.stat}>Total: {total}</span>
                <span className={css.stat}>Positive Feedback: {positiveProc ? positiveProc : 0}</span>
            </div>
        </>
)
};