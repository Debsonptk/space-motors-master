import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import loadingGif from 'assets/r2d2Loading.gif'

import { useVehicles } from 'context/VehiclesContext'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'
import VehicleCard from 'components/VehicleCard'

import useTitle from 'hooks/useTitle'

import { BackGroundColorHome } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { vehicles, isLoading, currentPage } = useVehicles()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BackGroundColorHome>
        <HeaderComponent />
        <Container>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 justify-content-center g-3 my-3">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <img src={loadingGif} alt="Loading" />
              </div>
            )}
            {!isLoading &&
              Array.isArray(vehicles) &&
              vehicles.map((vehicle) => (
                <Col className="d-flex" key={vehicle.name}>
                  <VehicleCard vehicle={vehicle} />
                </Col>
              ))}
          </Row>
        </Container>
      </BackGroundColorHome>
      <FooterComponent />
    </>
  )
}

export default memo(Home)
