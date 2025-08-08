import { Input } from "./input";
import SelectNameCongregations from "./selectNameCongregations";

export function Form() {
  return (
    <form className="mt-10 grid gap-4 ">
     <SelectNameCongregations/>
     <Input
      name="name"
      type="text"
     />
    </form>
  )
}