// rafce
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ name, register, setValue }) => {
  // console.log(categories)

  return (
    <div className="mb-2">
      <input hidden {...register(name)} />
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select
        required
        onValueChange={(value) => setValue(name, value)}
        // defaultValue={categories[0].label}
      >
        <SelectTrigger>
          <SelectValue placeholder="Please Select Category"/>
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem value={item.label} key={item.label}>
                <span className="flex capitalize items-center gap-4">
                  <item.icon /> {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
