import { InpuProps } from "@/app/types/inputType";

export function Input({name, type, classNameAdd, onChange, value}:InpuProps) {
  return (
    <div className="flex flex-col text-start mx-auto">
      <label htmlFor={name}>{name}</label>
      <input name={name} type={type} onChange={onChange} className={`border bg-gray-200 w-64 ps-2 ${classNameAdd}`} value={value ?? ""}/>
    </div>
  )
}