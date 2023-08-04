/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useEffect } from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { FormType } from 'types/FormType'

import {
  BackGroundColorCheckout,
  BackGroundColorImput,
  TextYelowColor,
} from './styles'

const Checkout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()
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
          <Row className="row-cols-1 row-cols-lg-3">
            <Col>
              <Card className="bg-black p-3">
                <TextYelowColor>Informações Pessoais</TextYelowColor>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <div>
                      <label className="text-white" htmlFor="name">
                        Name
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="name"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('name', {
                        required: 'INFORME O SEU NOME',
                        maxLength: {
                          value: 35,
                          message: 'Coloque apenas o primeiro e último nome',
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white" htmlFor="email">
                        E-mail
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="email"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('email')}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="text-white" htmlFor="phone">
                        Phone
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="pfone"
                      type="number"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('phone')}
                    />
                  </div>
                  <div>
                    <div>
                      <label className="text-white" htmlFor="cpf">
                        CPF
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="cpf"
                      type="number"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('cpf')}
                    />
                  </div>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </BackGroundColorCheckout>
      <FooterComponent />
    </>
  )
}

export default memo(Checkout)
