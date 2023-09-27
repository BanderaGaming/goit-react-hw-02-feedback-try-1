import css from './Section.module.css'

export function Section({title,children}) {
    return (
        <div>
            <h4 className={css.title}>{title}</h4>
            {children}
</div>
    )
}