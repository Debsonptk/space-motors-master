/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useEffect, useState } from 'react'

import { Card, Col, Container, Row } from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

import useTitle from 'hooks/useTitle'

import ApiCep from 'services/apiCep'

import { FormType } from 'types/FormType'

import {
  BackGroundColorCheckout,
  BackGroundColorImput,
  ButtonYellowColor,
  TextYellowColor,
} from './styles'

const Checkout: React.FC = () => {
  const [lastCep, setLastCep] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  const cepValue = watch('cep')

  const fetchAdress = useCallback(
    async (cep: string) => {
      const { data } = await ApiCep.get(`/${cep}/json/`)

      setValue('publicPlace', data.logradouro)
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('state', data.uf)
    },
    [setValue],
  )

  useEffect(() => {
    if (cepValue?.length === 8 && cepValue !== lastCep) {
      setLastCep(cepValue)
      fetchAdress(cepValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cepValue])

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
          <Row className="row-cols-1 row-cols-lg-3 g-2">
            <Col className="pb-4">
              <Card className="bg-black p-3">
                <TextYellowColor>Informações Pessoais</TextYellowColor>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <label className="text-white pb-2 pt-2" htmlFor="name">
                      Nome
                    </label>
                  </div>
                  <BackGroundColorImput
                    className="form-control border-0"
                    id="name"
                    type="text"
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
                        Telefone
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="phone"
                      type="number"
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
            <Col className="pb-4">
              <Card className="bg-black p-3">
                <TextYellowColor>Endereço</TextYellowColor>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <div>
                    <label className="text-white pb-2 pt-2" htmlFor="cep">
                      CEP
                    </label>
                  </div>
                  <BackGroundColorImput
                    className="form-control border-0"
                    id="cep"
                    type="number"
                    {...register('cep', {
                      required: 'O campo CEP está vazio',
                    })}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                  )}
                  <div>
                    <div>
                      <label
                        className="text-white pb-2 pt-2"
                        htmlFor="logradouro"
                      >
                        Logradouro
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="logradouro"
                      type="text"
                      {...register('publicPlace', {
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
                        <label className="text-white pb-2 pt-2" htmlFor="num">
                          Número
                        </label>
                      </div>
                      <BackGroundColorImput
                        className="form-control border-0"
                        id="num"
                        type="number"
                        {...register('number', {
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
                          className="text-white pb-2 pt-2"
                          htmlFor="complemento"
                        >
                          Complemento*
                        </label>
                      </div>
                      <BackGroundColorImput
                        className="form-control border-0"
                        id="complemento"
                        type="text"
                        {...register('complement')}
                      />
                    </Col>
                  </Row>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="bairro">
                        Bairro
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="bairro"
                      type="text"
                      {...register('neighborhood', {
                        required: 'O campo Bairro está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="cidade">
                        Cidade
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="cidade"
                      type="text"
                      {...register('city', {
                        required: 'O campo Cidade está vazio',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="text-white pb-2 pt-2" htmlFor="estado">
                        Estado
                      </label>
                    </div>
                    <BackGroundColorImput
                      className="form-control border-0"
                      id="estado"
                      type="text"
                      {...register('state', {
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
                      required: 'O campo nome do titular do cartão está vazio',
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
                          Código de Segurança
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
              <div className="d-grid gap-2 pt-3">
                <ButtonYellowColor className="btn p-2" type="submit">
                  Finalizar Compra
                </ButtonYellowColor>
              </div>
            </Col>
          </Row>
        </Container>
      </BackGroundColorCheckout>
      <FooterComponent />
    </>
  )
}

export default memo(Checkout)
