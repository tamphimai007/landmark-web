import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({ register, name, type, placeholder,errors }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Textarea
        {...register(name)}
        rows={5}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && "border-red-500"}`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
export default TextAreaInput;
