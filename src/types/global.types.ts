export type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type TParams<T = { [key: string]: string }> = Promise<T>;

export type PaginationMeta = {
  total: number;
  limit: number;
  page: number;
  totalPages: number;
};
