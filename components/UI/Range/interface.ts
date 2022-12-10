export interface IRangeProps {
  title: string;
  options: Options;
  action: any;
  bottomSpace: string;
}

type Options = Option[];
type Option = string | number;
