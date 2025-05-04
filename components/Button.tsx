import clsx from "clsx";
import NextLink, { LinkProps as InternalLinkProps } from "next/link";
import { HTMLProps, MouseEvent } from "react";

type Props = {
  className?: string;
  variant?: "default" | "action";
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

const Button = ({
  className,
  variant = "default",
  children,
  to,
  onClick,
  ...rest
}: Props & HTMLProps<HTMLButtonElement>) => {
  let Component: any = to ? NextLink : "button";
  let props:
    | {
        href?: string;
        onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
      }
    | InternalLinkProps = {};

  if (to) {
    props["href"] = to;
  }

  if (onClick) {
    props["onClick"] = onClick;
  }

  return (
    <Component
      className={clsx(
        "tw-rounded-full tw-px-4 tw-py-1 tw-text-base tw-font-bold tw-no-underline tw-outline-none focus:tw-ring-2",
        className,
        {
          "tw-bg-blue-500 tw-text-white hover:tw-bg-blue-700":
            variant === "default",
          "tw-bg-rose-500 tw-text-white hover:tw-bg-rose-700":
            variant === "action",
        },
      )}
      {...props}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
