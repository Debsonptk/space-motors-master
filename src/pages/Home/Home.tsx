import { memo, useCallback, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { SlClose } from 'react-icons/sl'

import loadingGif from 'assets/r2d2Loading.gif'

import { useVehicles } from 'context/VehiclesContext'

import FooterComponent from 'components/Footer/FooterComponent'
import HeaderComponent from 'components/Header/HeaderComponent'
import VehicleCard from 'components/VehicleCard'

import useTitle from 'hooks/useTitle'

import { BackGroundColorHome, Paginate, SearchContainer } from './styles'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const [search, setSearch] = useState('')
  const { vehicles, isLoading, currentPage, fetchVehicles, totalPages } =
    useVehicles()

  const handlePageChange = useCallback(
    (page: number) => fetchVehicles(page, search),
    [fetchVehicles, search],
  )

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = useCallback(
    () => fetchVehicles(1, search),
    [fetchVehicles, search],
  )

  const handleClear = useCallback(() => {
    fetchVehicles(1)
    setSearch('')
  }, [fetchVehicles])

  return (
    <>
      <BackGroundColorHome>
        <HeaderComponent />
        <Container>
          <SearchContainer>
            <div className="d-flex  flex-sm-row align-items-center">
              <input
                className="w-100 py-2"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Vehicle"
                aria-label="Search Vehicle"
                aria-describedby="basic-addon2"
              />
              {search.length > 0 && (
                <button type="submit" onClick={handleClear} id="button-addon2">
                  <SlClose size="25px" />
                </button>
              )}
              <div className="d-flex mt-2 mt-sm-0">
                <button type="submit" onClick={handleSearch} id="button-addon2">
                  <BiSearchAlt size="25px" />
                </button>
              </div>
            </div>
          </SearchContainer>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 justify-content-center g-3 my-3">
            {isLoading && (
              <div className="d-flex justify-content-center">
                <img src={loadingGif} alt="Loading" />
              </div>
            )}
            {!isLoading &&
              Array.isArray(vehicles) &&
              vehicles.map((vehicle) => (
                <Col className="d-flex" key={vehicle.name}>
                  <VehicleCard vehicle={vehicle} />
                </Col>
              ))}
          </Row>
          {totalPages > 1 && (
            <Paginate
              forcePage={currentPage - 1}
              onPageChange={(p) => handlePageChange(p.selected + 1)}
              pageCount={totalPages}
              previousLabel="<"
              nextLabel=">"
              className="my-5 list-unstyled flex-wrap"
            />
          )}
        </Container>
      </BackGroundColorHome>
      <FooterComponent />
    </>
  )
}

export default memo(Home)
