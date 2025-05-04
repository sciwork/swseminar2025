import NextLink from "next/link";

const DrawerLink = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
  secondary?: boolean;
  is_blank?: boolean;
}) => {
  return (
    <NextLink className="tw-block tw-w-full tw-font-yk" href={to} target={props.is_blank ? '_blank' : '_self'}>
      <div className={ (props.secondary ? "tw-text-gray-400" :"tw-text-black") + " tw-px-7 tw-py-2 tw-text-2xl tw-font-medium tw-leading-loose hover:tw-text-blue-500" }>
        {children}
      </div>
    </NextLink>
  );
};

export default DrawerLink;
