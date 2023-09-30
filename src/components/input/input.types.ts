
export interface InputPropsType {
  name: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
