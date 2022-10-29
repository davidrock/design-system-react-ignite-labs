import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}
export interface TextInputIconProps {
  children: ReactNode;
}
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300 ">
      {props.children}
    </div>
  );
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full outline-none'
      )}
      {...props}
    />
  );
}

TextInputIcon.displayName = 'TextInput.Icon';
TextInputRoot.displayName = 'TextInput.Root';
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
