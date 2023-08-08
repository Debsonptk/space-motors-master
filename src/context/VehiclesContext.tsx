import { createContext, useContext, useMemo, useState } from 'react'

import { VehicleType } from 'types/VehiclesType'

interface IContextProps {
  vehicles: VehicleType[]
  vehicle: VehicleType | null
  isLoading: boolean
  currentPage: number
}

interface IMyCustomProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const VehiclesProvider: React.FC<IMyCustomProviderProps> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehicleType[]>([])
  const [vehicle, setVehicle] = useState<VehicleType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          vehicles,
          vehicle,
          isLoading,
          currentPage,
        }),
        [vehicles, vehicle, isLoading, currentPage],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useVehicles = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useVehiclesHook must be within MyCustomProvider')
  }

  return context
}
