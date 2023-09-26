import css from 'components/Section/Section.module.css'
import { Children } from 'react'

export function Section({title}) {
    return (
        <div>
            <h4 className={css.title}>{title}</h4>
            {Children}
</div>
    )
}