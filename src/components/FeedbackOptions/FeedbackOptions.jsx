import css from './FeedbackOptions.module.css'
export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div className={css.btnFeld}>
            {options.map(option => 
                <button key={option} className={css.btn} onClick={onLeaveFeedback}>{option}</button>)}
        </div>
    );
};