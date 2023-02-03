export interface MediaTitle {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  originalName: string;
  releaseYear: number;
  mediaType: MediaType;
  sinopsis?: string;
  thumbnailPath: string;
}

export interface MediaType {
  id: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type Nullable<T> = { [K in keyof T]: T[K] | null };
