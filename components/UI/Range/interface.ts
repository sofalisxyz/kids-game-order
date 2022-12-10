export interface IRangeProps {
  title: string;
  options: Options;
  bottomSpace: string;
}

type Options = Option[];
type Option = string | number;
