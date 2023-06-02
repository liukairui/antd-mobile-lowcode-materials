import { CSSProperties } from 'react';

export interface ElementProps<S extends string = never> {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
}

export interface ZcFieldProps {
  disabled?: boolean;
  label: string;
  name?: string;
  required?: boolean;
}
