import { FormType } from 'types/FormType'
import { VehicleType } from 'types/VehiclesType'

type NormalizedFormType = {
  name: string
  email: string
  phone: number | null
}

export const normalizeFormData = (data: FormType): NormalizedFormType => ({
  ...data,
  phone: data.phone.length ? Number(data.phone) : null,
})

export const urlToId = (url: string): string => url.split('/')[5]

export const normalizeVehicleData = (vehicles: VehicleType[]): VehicleType[] =>
  vehicles.map((vehicle) => ({ ...vehicle, id: urlToId(vehicle.url) }))
