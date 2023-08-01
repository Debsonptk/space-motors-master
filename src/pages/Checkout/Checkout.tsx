import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { BackGroundColorCheckout } from './styles'

const Checkout: React.FC = () => {
  const setTitle = useTitle()

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
          <form>
            <input type="text" placeholder="text" />
            <button type="submit">Submit</button>
          </form>
        </Container>
      </BackGroundColorCheckout>
      <FooterComponent />
    </>
  )
}

export default memo(Checkout)
