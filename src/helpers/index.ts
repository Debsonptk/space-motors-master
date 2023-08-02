import { FormType } from 'types/FormType'

type NormalizedFormType = {
  name: string
  email: string
  phone: number
}

export const normalizeFormData = (data: FormType): NormalizedFormType => ({
  ...data,
  phone: Number(data.phone),
})
