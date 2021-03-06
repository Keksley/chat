export interface Control {
  name: string;
  value: string;
  label: string;
  placeholder: string;
  valid: boolean;
  needValidate: boolean;
  validators?: Function[];
  invalidMessage?: string;
}
