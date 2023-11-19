export interface BlogModel {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: Object;
}

export interface CreateBlogDto {
  title: string;
  description: string;
  image?: Object;
  userId: string;
}
