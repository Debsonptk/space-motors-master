import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { normalizeVehicleData } from 'helpers'

import ApiSW from 'services/apiWS'

import { VehicleType } from 'types/VehiclesType'

interface IContextProps {
  vehicles: VehicleType[]
  vehicle: VehicleType | null
  isLoading: boolean
  currentPage: number
  totalPages: number
  fetchVehicles: (page: number, search?: string) => Promise<void>
  fetchVehicle: (charId: number | string) => Promise<void>
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
  const [totalPages, setTotalPages] = useState(1)

  const fetchVehicles = useCallback(async (page: number, search?: string) => {
    const limit = 10

    setCurrentPage(page)
    setIsLoading(true)

    try {
      const {
        data: { results, count },
      } = await ApiSW.get(`/vehicles`, { params: { search, page } })
      setVehicles(normalizeVehicleData(results))
      setTotalPages(Math.ceil(count / limit))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchVehicle = useCallback(async (charId: number | string) => {
    setIsLoading(true)

    try {
      const response = await ApiSW.get(`/vehicles/${charId}`)
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
          totalPages,
          fetchVehicles,
          fetchVehicle,
        }),
        [
          vehicles,
          vehicle,
          isLoading,
          currentPage,
          totalPages,
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
    console.error('useVehiclesHook must be with in MyCustomProvider')
  }

  return context
}
