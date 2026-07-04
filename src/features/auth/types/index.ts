import type { paths } from "@/types/api"

export type User = 
  paths["/me/user"]["get"]["responses"][200]["content"]["application/json"]