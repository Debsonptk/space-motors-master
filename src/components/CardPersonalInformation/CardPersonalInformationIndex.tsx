/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback } from 'react'

import { Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { FormType } from 'types/FormType'

import { BackGroundColorImput, TextYellowColor } from './styles'

const CardPersonalInformation: React.FC = () => {
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
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
      </form>
    </Card>
  )
}

export default memo(CardPersonalInformation)
