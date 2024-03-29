import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

/** dayjs */
export default defineNuxtPlugin(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  dayjs.extend(utc)
  // eslint-disable-next-line import/no-named-as-default-member
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')

  // eslint-disable-next-line import/no-named-as-default-member
  dayjs.locale(ja)

  return {
    provide: {
      dayjs
    }
  }
})
