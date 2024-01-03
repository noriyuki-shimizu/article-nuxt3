import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

/** dayjs */
export default defineNuxtPlugin(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  dayjs.extend(utc)
  // eslint-disable-next-line import/no-named-as-default-member
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')

  return {
    provide: {
      dayjs
    }
  }
})
