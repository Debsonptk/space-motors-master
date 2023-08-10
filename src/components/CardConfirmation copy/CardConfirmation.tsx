import { memo } from 'react'

import { Card } from 'react-bootstrap'

import { ButtonYellowColor } from './styles'

const CardConfirmation: React.FC = () => (
  <Card className="bg-black p-3 mt-2 mb-4">
    <div className="d-grid gap-2 pt-3">
      <ButtonYellowColor className="btn p-2" type="button">
        Finalizar Compra
      </ButtonYellowColor>
    </div>
  </Card>
)

export default memo(CardConfirmation)
