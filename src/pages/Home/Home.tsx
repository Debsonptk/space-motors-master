import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
          <h1 className="text-white text-center pt-3 pb-5">Home</h1>
          <Link to="/checkout">Checkout</Link>
          <Row className="row-col-1 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
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
