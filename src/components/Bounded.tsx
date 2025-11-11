import clsx from "clsx";
import React from "react";

export type BoundedProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  className?: string;
};

export const Bounded = <T extends React.ElementType = "section">({
  as: Comp = "section" as T, 
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};