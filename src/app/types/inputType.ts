export interface InpuProps {
  name: string,
  type: string,
  classNameAdd?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void 
  value?: string,
  disable?: boolean,
}