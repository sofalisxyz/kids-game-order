export interface IRangeProps {
  title: string;
  options: Options;
  action: React.ChangeEventHandler<HTMLInputElement>;
  bottomSpace: string;
}

type Options = Option[];
type Option = string | number;
