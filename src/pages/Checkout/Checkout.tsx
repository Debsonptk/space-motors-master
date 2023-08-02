import { memo, useCallback, useEffect } from 'react'

import { Container } from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { FormType } from 'types/FormType'

import { BackGroundColorCheckout } from './styles'

const Checkout: React.FC = () => {
  const { register, handleSubmit } = useForm<FormType>()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('checkout')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFormSubmit = useCallback((data: FormType) => {
    console.log('SUBMITED', data)
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
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Name"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('name')}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email')}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('phone')}
              />
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Container>
      </BackGroundColorCheckout>
      <FooterComponent />
    </>
  )
}

export default memo(Checkout)
