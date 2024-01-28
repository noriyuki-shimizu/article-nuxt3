import { STATUS_CODE_OK } from '@/constants/common/http/statusCode'

export default defineEventHandler((event) => {
  setResponseStatus(event, STATUS_CODE_OK)
  return 'OK'
})
