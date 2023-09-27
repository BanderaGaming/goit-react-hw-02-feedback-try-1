import css from './Notification.module.css'

export function Notification({message}) {
    return (
        <div>
            <h4 className={css.notification}>{message}</h4>
</div>
    )
}