import { StatusCode } from '@/enums/common/http/statusCode'

export default defineEventHandler((event) => {
  setResponseStatus(event, StatusCode.STATUS_CODE_OK)
  return 'OK'
})
