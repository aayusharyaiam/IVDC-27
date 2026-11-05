import type { DateItem } from '../types'

export function DateDisplay({ date, previousDate }: Pick<DateItem, 'date' | 'previousDate'>) {
  return <span className="date-display">{previousDate && <del>{previousDate}</del>}<span>{date}</span></span>
}
