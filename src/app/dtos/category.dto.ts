import { IsUrl } from "class-validator";
import { Category } from "../models/category.model";

export interface CreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  name!:  string;
  @IsUrl()
  image!: string
  access?: AccesType | undefined;
}
