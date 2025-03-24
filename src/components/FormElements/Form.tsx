import { TextSizeStyles } from "../../lib/styles";
import { cn } from "../../lib/utils";

type FormProps = React.HTMLAttributes<HTMLFormElement> & {
  title: string;
  action?: (formData: FormData) => Promise<void>;
  ref?: React.Ref<HTMLFormElement>;
};

function Form({ className, title, action, ref, ...props }: FormProps) {
  return (
    <form
      ref={ref}
      className={cn(
        "form h-fit w-full max-w-[550px] space-y-6 rounded-lg border border-gray300 bg-white p-12 text-black",
        className,
      )}
      action={action}
      {...props}
    >
      <img
        src="assets/icons/Logo.svg"
        className="h-[38px] w-[54px]"
        alt="st-logo"
      />
      <h2 className={TextSizeStyles.heading4}>{title}</h2>

      {props.children}
    </form>
  );
}

export default Form;
