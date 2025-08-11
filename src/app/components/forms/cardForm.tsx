import { CardFormType } from "@/app/types/cardFormType";

export function CardForm({ title, children }: CardFormType) {
  return (
    <div className={`grid grid-cols-12 gap-4 border py-5 shadow-lg rounded relative`}>
      <span className="absolute text-sm font-bold -top-3 left-2 z-20 bg-background px-1 uppercase">
        {title}
      </span>
      {children}
    </div>
  );
}
