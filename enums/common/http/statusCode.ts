/** HTTP Status Code Enum */
export const StatusCode = {
  STATUS_CODE_INTERNAL_SERVER_ERROR: 500,
  STATUS_CODE_BAD_REQUEST: 400,
  STATUS_CODE_NOT_FOUND: 404,
  STATUS_CODE_OK: 200,
  STATUS_CODE_NO_CONTENT: 204
} as const

/** HTTP Status Code Enum Type */
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode]
