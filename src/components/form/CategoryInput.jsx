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
  // javascript
  return (
    <div className="mb-2">
      <input hidden {...register(name)} />

      <Label className="capitalize">{name}</Label>
      <Select onValueChange={(value) => setValue(name, value)} required>
        <SelectTrigger>
          <SelectValue placeholder="Please Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex items-center gap-4">
                  <item.icon />
                  <p className="capitalize">{item.label}</p>
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
