/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback } from 'react'

import { Card, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { FormType } from 'types/FormType'

import {
  BackGroundColorImput,
  ButtonYellowColor,
  TextYellowColor,
} from './styles'

const CardConfirmation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  const handleFormSubmit = useCallback((data: FormType) => {
    // eslint-disable-next-line no-console
    console.log('SUBMITED', data)
  }, [])

  return (
    <>
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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <div>
            <div>
              <label className="text-white pb-2 pt-2" htmlFor="numberCard">
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
                <label className="text-white pb-2 pt-2" htmlFor="validity">
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
                <label className="text-white pb-2 pt-2" htmlFor="securityCode">
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
      <Card className="bg-black p-3 mt-2 mb-4">
        <div className="d-grid gap-2 pt-3">
          <ButtonYellowColor className="btn p-2" type="button">
            Finalizar Compra
          </ButtonYellowColor>
        </div>
      </Card>
    </>
  )
}

export default memo(CardConfirmation)
