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
          <Row className="row-cols-1 row-cols-lg-3">
            <Col>
              <Card className="bg-black p-3">
                <TextYelowColor>Informações Pessoais</TextYelowColor>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="name">
                        Nome
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="name"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('name', {
                        required: 'O campo nome está vazio',
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
                      <label className="text-white pb-2 pt-2" htmlFor="email">
                        E-mail
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="email"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('email', {
                        required: 'O campo E-mail está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="phone">
                        telefone
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="phone"
                      type="number"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('phone', {
                        required: 'O campo telefone está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="cpf">
                        CPF
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="cpf"
                      type="number"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('cpf', {
                        required: 'O campo CPF está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                </form>
              </Card>
            </Col>
            <Col>
              <Card className="bg-black p-3">
                <TextYelowColor>Endereço</TextYelowColor>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <div>
                      <label className="text-white pb-2" htmlFor="cep">
                        CEP
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="cep"
                      type="number"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('cep', {
                        required: 'O campo CEP está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2" htmlFor="logradouro">
                        Logradouro
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="logradouro"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('logradouro', {
                        required: 'O campo Logradouro está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <Row className="d-flex row-cols-1 row-cols-md-2 g-2">
                    <Col>
                      <div>
                        <label className="text-white pb-2" htmlFor="num">
                          Número
                        </label>
                      </div>
                      <BackGroundColorImput
                        className="form-control border-0"
                        id="num"
                        type="number"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...register('numero', {
                          required: 'O campo Número está vazio',
                        })}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                      )}
                    </Col>
                    <Col>
                      <div>
                        <label
                          className="text-white pb-2"
                          htmlFor="complemento"
                        >
                          Complemento*
                        </label>
                      </div>
                      <BackGroundColorImput
                        className="form-control border-0"
                        id="complemento"
                        type="text"
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...register('complemento')}
                      />
                    </Col>
                  </Row>
                  <div>
                    <div>
                      <label className="text-white pb-2" htmlFor="bairro">
                        Bairro
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="bairro"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('bairro', {
                        required: 'O campo Bairro está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2" htmlFor="cidade">
                        Cidade
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="cidade"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('cidade', {
                        required: 'O campo Cidade está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2" htmlFor="estado">
                        Estado
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="estado"
                      type="text"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...register('estado', {
                        required: 'O campo Estado está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
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
