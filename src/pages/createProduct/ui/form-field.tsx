type FormFieldProps = {
    children: React.ReactNode;
    id: string;
}

const FormField = ({children, id}: FormFieldProps) => {
  return (
    <div className="border border-b-amber-700">{children}</div>
  )
}

export default FormField;