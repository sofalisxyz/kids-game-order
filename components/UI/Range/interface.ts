export interface IRangeProps {
  title: string;
  options: Options;
}

type Options = Option[];
type Option = string | number;
