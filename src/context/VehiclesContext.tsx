import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import ApiSW from 'services/apiWS'

import { VehicleType } from 'types/VehiclesType'

interface IContextProps {
  vehicles: VehicleType[]
  vehicle: VehicleType | null
  isLoading: boolean
  currentPage: number
  fetchVehicles: (page: number, search?: string) => Promise<void>
  fetchVehicle: (id: number | string) => Promise<void>
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

  const fetchVehicles = useCallback(async (page: number, search?: string) => {
    setCurrentPage(page)
    setIsLoading(true)

    const params = {
      page,
      search,
    }

    try {
      const response = await ApiSW.get('/vehicles', { params })
      setVehicles(response.data.results)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchVehicle = useCallback(async (id: number | string) => {
    setIsLoading(true)

    try {
      const response = await ApiSW.get(`/vehicles/${id}`)
      setVehicle(response.data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVehicles(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          vehicles,
          vehicle,
          isLoading,
          currentPage,
          fetchVehicles,
          fetchVehicle,
        }),
        [
          vehicles,
          vehicle,
          isLoading,
          currentPage,
          fetchVehicles,
          fetchVehicle,
        ],
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
