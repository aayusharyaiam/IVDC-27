import { dates } from '../data/conference'

export function deadlineDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day, 23, 59, 59)
}

export function upcomingDateIndex(now = new Date()) {
  const index = dates.findIndex((item) => deadlineDate(item.iso) >= now)
  return index === -1 ? dates.length : index
}
