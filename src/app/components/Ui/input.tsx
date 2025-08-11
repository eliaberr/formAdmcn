import { InpuProps } from "@/app/types/inputType";

export function Input({
  name,
  type,
  classNameAdd,
  onChange,
  value,
  disable,
  sizeLabel,
  sizeInput,
  sizeDiv,
  required,
  maxLength
}: InpuProps) {
  return (
    <div className={`grid grid-cols-12 ${sizeDiv ?? "col-span-12"}`} >
      <label className={`text-start ${sizeLabel ?? "col-span-10 col-start-2"}`} htmlFor={name}>{name}</label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={`border bg-gray-200 ps-2 ${classNameAdd} ${sizeInput ?? "col-span-10 col-start-2"}`}
        value={value ?? ""}
        disabled={disable}
        required={required}
        maxLength={maxLength}
      />
    </div>
  );
}
