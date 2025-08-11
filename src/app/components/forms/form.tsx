import { MemberRegistrationForm } from "./memberRegistrationForm";
import { MemberCancellationForm } from "./memberCancellationForm";
import SelectNameCongregations from "./selectNameCongregations";

export function Form() {
  return (
    <form className="my-10 grid gap-10 ">
      <SelectNameCongregations />
      <MemberRegistrationForm />
      <MemberCancellationForm />
    </form>
  );
}
