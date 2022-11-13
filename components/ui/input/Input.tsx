import scss from "./Input.module.scss";

type Props = {
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input = (props: Props): JSX.Element => {
  const { type, name, id, value, onChange, required } = props;

  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className={scss.input}
    />
  );
};

export default Input;
