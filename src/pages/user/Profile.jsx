// rafce
import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";
const Profile = () => {
  // javascript
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors, isSubmitting } = formState;

  const jukkruSubmit = async (data) => {
    // code body
    // test
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log(data);
    await axios
      .post("http://localhost:5000/api/profile", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("roitai err", err.response.data.message);
      });
  };
  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(jukkruSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs
              register={register}
              name="firstname"
              type="text"
              placeholder="Input your first name"
              errors={errors}
            />
            <FormInputs
              register={register}
              name="lastname"
              type="text"
              placeholder="Input your last name"
              errors={errors}
            />

            <Buttons text="create profile" isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
