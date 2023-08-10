/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useEffect } from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import loading from 'assets/r2d2Loading.gif'

import { useVehicles } from 'context/VehiclesContext'

import CardAddressIndex from 'components/CardAddress/CardAddressIndex'
import CardConfirmation from 'components/CardConfirmation copy/CardConfirmation'
import CardPersonalInformationIndex from 'components/CardPersonalInformation/CardPersonalInformationIndex'
import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import { FormType } from 'types/FormType'

import {
  BackGroundColorCheckout,
  BackGroundColorImput,
  TextYellowColor,
} from './styles'

const Checkout: React.FC = () => {
  const setTitle = useTitle()

  const { isLoading } = useVehicles()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  useEffect(() => {
    setTitle('checkout')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFormSubmit = useCallback((data: FormType) => {
    // eslint-disable-next-line no-console
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
                <Card className="bg-black p-3">
                  <TextYellowColor>Forma de pagamento</TextYellowColor>
                  <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div>
                      <label
                        className="text-white pb-2 pt-2 pt-2"
                        htmlFor="nameCreditCard"
                      >
                        Nome do titular do cartão
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="nameCreditCard"
                      type="text"
                      {...register('nameCreditCard', {
                        required:
                          'O campo nome do titular do cartão está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                    <div>
                      <div>
                        <label
                          className="text-white pb-2 pt-2"
                          htmlFor="numberCard"
                        >
                          Número do cartão
                        </label>
                      </div>
                      <BackGroundColorImput
                        className="form-control border-0"
                        id="email"
                        type="numberCard"
                        {...register('numberCreditCard', {
                          required: 'O campo Número do cartão está vazio',
                          maxLength: 3,
                        })}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                      )}
                    </div>
                    <Row className="d-flex row-cols-1 row-cols-md-2 g-2">
                      <Col>
                        <div>
                          <label
                            className="text-white pb-2 pt-2"
                            htmlFor="validity"
                          >
                            Validade
                          </label>
                        </div>
                        <BackGroundColorImput
                          className="form-control border-0"
                          id="validity"
                          type="number"
                          {...register('validity', {
                            required: 'O campo Validade está vazio',
                          })}
                        />
                        {errors.name && (
                          <p className="text-danger">{errors.name.message}</p>
                        )}
                      </Col>
                      <Col>
                        <div>
                          <label
                            className="text-white pb-2 pt-2"
                            htmlFor="securityCode"
                          >
                            CVC
                          </label>
                        </div>
                        <BackGroundColorImput
                          className="form-control border-0"
                          id="securityCode"
                          type="text"
                          {...register('complement')}
                        />
                      </Col>
                    </Row>
                  </form>
                </Card>
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
