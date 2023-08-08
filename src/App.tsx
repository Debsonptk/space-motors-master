import { memo } from 'react'

import Routes from 'Routes'

const App: React.FC = () => (
  <div className="d-flex flex-column min-vh-100">
    <Routes />
  </div>
)

export default memo(App)
