import { memo, useMemo } from 'react'

import { VehicleType } from 'types/VehiclesType'

import { CardContainer, LinkTitle } from './styles'

interface IVehicleCardProps {
  vehicle: VehicleType
}

const VehicleCard: React.FC<IVehicleCardProps> = ({ vehicle }) => {
  const hasProduct = useMemo(
    () => vehicle.cost_in_credits !== 'unknown',
    [vehicle],
  )

  return (
    <CardContainer className="w-100 d-flex flex-column ">
      <span className="text-secondary">{vehicle.manufacturer}</span>
      {hasProduct ? (
        <LinkTitle
          to={`/checkout/${vehicle.id}/${vehicle.name}`}
          className="text-decoration-none h2 mb-0"
        >
          {vehicle.name}
        </LinkTitle>
      ) : (
        <h2>{vehicle.name}</h2>
      )}
      <p className="text-secondary">{vehicle.model}</p>
      <div className="text-light mt-3 row-cols-1 flex-grow-1">
        <div className="d-flex justify-content-between">
          <span>Largura:</span>
          <span>{vehicle.length} m</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Velocidade:</span>
          <span>{vehicle.max_atmosphering_speed} km/h</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Equipe:</span>
          <span>{vehicle.crew}</span>
        </div>
        {vehicle.passengers === 0 && (
          <div className="d-flex justify-content-between">
            <span>Passageiros:</span>
            <span>{vehicle.passengers}</span>
          </div>
        )}
        {vehicle.cargo_capacity !== 'none' &&
          vehicle.cargo_capacity !== 'unknown' && (
            <div className="d-flex justify-content-between">
              <span>Capacidade de carga:</span>
              <span>{vehicle.cargo_capacity} kg</span>
            </div>
          )}
      </div>
      <h2 className="h3 mt-3">
        {vehicle.cost_in_credits === 'unknown'
          ? 'Indisponível no momento'
          : `$${vehicle.cost_in_credits}`}
      </h2>
    </CardContainer>
  )
}

export default memo(VehicleCard)
