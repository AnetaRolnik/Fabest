import scss from "./Textarea.module.scss";

type Props = {
  name: string;
  id: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = (props: Props): JSX.Element => {
  const { name, id, required, value, onChange } = props;

  return (
    <textarea
      name={name}
      id={id}
      required={required}
      value={value}
      onChange={onChange}
      rows={5}
      className={scss.textarea}
    />
  );
};

export default Textarea;
