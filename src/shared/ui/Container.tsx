import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-[90%] max-w-100 md:max-w-155 lg:max-w-205 2xl:max-w-277">
      {children}
    </div>
  );
}
