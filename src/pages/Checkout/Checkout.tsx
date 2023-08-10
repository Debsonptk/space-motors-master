import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import loading from 'assets/r2d2Loading.gif'

import { useVehicles } from 'context/VehiclesContext'

import CardAddressIndex from 'components/CardAddress/CardAddressIndex'
import CardConfirmation from 'components/CardConfirmation/CardConfirmation'
import CardPersonalInformationIndex from 'components/CardPersonalInformation/CardPersonalInformationIndex'
import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { BackGroundColorCheckout } from './styles'

const Checkout: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading } = useVehicles()

  useEffect(() => {
    setTitle('checkout')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeaderComponent />
      <BackGroundColorCheckout>
        <Container>
          <div className="d-flex pt-3 pb-3">
            <Link to="/" className="d-flex align-items-center">
              <MdOutlineArrowBackIosNew color="white" size="25px" />
            </Link>
            <h1 className="text-white px-2">Checkout</h1>
          </div>
          {isLoading && (
            <div className="pt-2 d-flex justify-content-center pb-3">
              <img src={loading} alt="Loading..." />
            </div>
          )}
          {!isLoading && (
            <Row className="row-cols-1 row-cols-lg-3 g-2">
              <Col className="pb-4">
                <CardPersonalInformationIndex />
              </Col>
              <Col className="pb-4">
                <CardAddressIndex />
              </Col>
              <Col>
                <CardConfirmation />
              </Col>
            </Row>
          )}
        </Container>
      </BackGroundColorCheckout>
      <FooterComponent />
    </>
  )
}

export default memo(Checkout)
