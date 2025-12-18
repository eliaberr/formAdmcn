export interface InpuProps {
  name: string,
  type: string,
  classNameAdd?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string,
  disable?: boolean,
  required?: boolean,
  sizeLabel?:string,
  sizeInput?:string,
  sizeDiv?:string,
  maxLength?:number
}