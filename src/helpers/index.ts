import { FormType } from 'types/FormType'

type NormalizedFormType = {
  name: string
  email: string
  phone: number | null
}

export const normalizeFormData = (data: FormType): NormalizedFormType => ({
  ...data,
  phone: data.phone.length ? Number(data.phone) : null,
})
