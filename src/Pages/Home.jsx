
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, navigatetoNextpage, navigatetoPrevpag } from '../Redux/Slices/productSlice';
import { Col, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Home() {
  const dispatch = useDispatch();
  const { allProducts, loading, error, productsPerpage, currentPage } = useSelector(state => state.productReducer);
  const totalPage = Math.ceil(allProducts?.length / productsPerpage);
  const lastProductIndex = currentPage * productsPerpage;
  const firstProductIndex = lastProductIndex - productsPerpage;
  const visibleProductCard = allProducts?.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      dispatch(navigatetoPrevpag());
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalPage) {
      dispatch(navigatetoNextpage());
    }
  };

  return (
    <div>
      <Header insideHome />
      <div style={{ paddingTop: '190px' }} className='mt-3 ms-4'>
        {loading ? (
          <div className='mt-5 text-center'><i className="fa-solid fa-spinner "> Loading..</i></div>
        ) : (
          <Row xs={1} md={2} lg={3} xl={4} xxl={5} className='g-4'>
            {allProducts?.length > 0 ? (
              visibleProductCard.map((product, index) => (
                <Col key={index}>
                  <Card style={{ width: '14rem',height:'340px' }}>
                    <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product?.title.slice(0, 18)}...</Card.Title>
                      <div className='text-center'><Link to={`/view/${product?.id}`} className='btn btn-link'>View Product</Link></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className='text-danger text-center mt-5 fw-bolder'>Product Not Found</div>
            )}
          </Row>
        )}

        <div className="d-flex justify-content-center mt-3">
          <span onClick={handlePrevPage} style={{ cursor: 'pointer' }}><i className="fa-solid fa-angle-left me-2"></i></span>
          <span className='fw-bolder'>{currentPage} of {totalPage}</span>
          <span onClick={handleNextPage} style={{ cursor: 'pointer' }} ><i className="fa-solid fa-angle-right ms-2"></i></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
