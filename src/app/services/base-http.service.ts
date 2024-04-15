import { Category } from "../models/category.model";

export class BaseHttpService<TypeClass> {
//  data: TypeClass[] = [];

getAll(): TypeClass[] | Promise<TypeClass[]> {
  return[];
}
}

const service =  new BaseHttpService<string>();
service.getAll()

const service1 =  new BaseHttpService<Category>();
service.getAll()
