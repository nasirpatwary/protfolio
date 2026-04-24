import { Controller, Control, FieldPath, FieldValues } from "react-hook-form"
import { Field, FieldLabel, FieldError, FieldDescription } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>; // এটি নিশ্চিত করবে name যেন স্কিমার সাথে মিলে
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
}
// সাধারণ ইনপুট এর জন্য
export function FormInput<T extends FieldValues>({ name, control, label, placeholder }: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Input 
            {...field} 
            id={name} 
            placeholder={placeholder} 
            aria-invalid={fieldState.invalid} 
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}


export function FormTextArea<T extends FieldValues>({ name, control, label, placeholder, description }: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              {...field}
              id={name}
              placeholder={placeholder}
              rows={4}
              className="min-h-20 resize-none"
              aria-invalid={fieldState.invalid}
            />
            <InputGroupAddon align="block-end">
              <InputGroupText className="tabular-nums">
                {field.value?.length || 0}/100 characters
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}