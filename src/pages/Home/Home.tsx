import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useVehicles } from 'context/VehiclesContext'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { BackGroundColorHome } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { vehicles, isLoading, currentPage, fetchVehicles } = useVehicles()

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
        </Container>
      </BackGroundColorHome>
      <FooterComponent />
    </>
  )
}

export default memo(Home)
