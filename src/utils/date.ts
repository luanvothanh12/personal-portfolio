import { siteConfig } from '@/site-config'

const dateFormat = new Intl.DateTimeFormat(
  siteConfig.locale.dateLocale,
  siteConfig.locale.dateOptions
)

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions
) {
  if (typeof options !== 'undefined') {
    return new Date(date).toLocaleDateString(siteConfig.locale.dateLocale, {
      ...(siteConfig.locale.dateOptions as Intl.DateTimeFormatOptions),
      ...options
    })
  }

  return dateFormat.format(new Date(date))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  })
}
