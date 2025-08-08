import { CardFormType } from "@/app/types/cardFormType";

export function CardForm({ title, children }: CardFormType) {
  return (
    <div className="grid gap-4 border w-[350px] md:w-[500px] mx-auto py-5 shadow-2xl rounded relative">
      <span className="absolute text-sm font-bold -top-3 left-2 z-20 bg-background px-1 uppercase">
        {title}
      </span>
      {children}
    </div>
  );
}
