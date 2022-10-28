import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  asChild?: boolean
  className?: string;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
}
