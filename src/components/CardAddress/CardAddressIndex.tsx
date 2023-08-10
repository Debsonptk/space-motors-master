/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useEffect, useState } from 'react'

import { Card, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import ApiCep from 'services/apiCep'

import { FormType } from 'types/FormType'

import { BackGroundColorImput, TextYellowColor } from './styles'

const CardConfirmation: React.FC = () => {
  const [lastCep, setLastCep] = useState('')
  const [isInvalidCep, setIsInvalidCep] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormType>()

  const handleFormSubmit = useCallback((data: FormType) => {
    // eslint-disable-next-line no-console
    console.log('SUBMITED', data)
  }, [])

  const cepValue = watch('cep')

  const fetchAdress = useCallback(
    async (cep: string) => {
      setIsInvalidCep(false)
      const { data } = await ApiCep.get(`/${cep}/json/`)
      if (data.erro) {
        setIsInvalidCep(true)
      }

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
    <Card className="bg-black p-3mb-4">
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
            type="text"
            {...register('cep', {
              required: 'O campo CEP está vazio',
            })}
          />
          {isInvalidCep && <span className="text-danger">CEP INVÁLIDO</span>}
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <div>
            <div>
              <label className="text-white pb-2 pt-2" htmlFor="logradouro">
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
                type="text"
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
                <label className="text-white pb-2 pt-2" htmlFor="complemento">
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
    </Card>
  )
}

export default memo(CardConfirmation)
