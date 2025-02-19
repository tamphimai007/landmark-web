// rafce
import { resizeFile } from "@/utils/resizeimage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { uploadImage } from "@/api/uploadfile";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { RotateCw } from "lucide-react";

const FormUploadImage = ({ setValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  // JS
  const hdlOnChange = async (e) => {
    setIsLoading(true);
    const token = await getToken();
    const file = e.target.files[0];
    if (!file) return;
    try {
      // code
      const resizedImage = await resizeFile(file);
      const res = await uploadImage(token, resizedImage);
      // console.log("hello", res.data.result);
      setValue("image", res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div className="flex items-center gap-2">
        <Input type="file" onChange={hdlOnChange} />
        {isLoading && <RotateCw className="animate-spin" />}
      </div>
    </div>
  );
};
export default FormUploadImage;
