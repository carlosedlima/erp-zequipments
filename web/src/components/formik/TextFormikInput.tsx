import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'

interface TextFormikInputProps extends Omit<TextFieldProps, 'label' | 'name'> {
  label: string
  name: string
}

export const TextFormikInput = ({
  label,
  name,
  ...props
}: TextFormikInputProps) => {
  const [field, meta] = useField(name)

  return (
    <TextField
      fullWidth
      error={Boolean(meta.error)}
      helperText={meta.error}
      {...field}
      {...props}
      label={label}
      name={name}
    />
  )
}
