import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFull } from '../../types/FullProduct';
import { CardItem } from '../CardItem/CardItem';
import { getProductById, getProductsByApi } from '../../api/api';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { Breadcrumbs } from '../Breadcrumps/Breadcrumps';
import { StorageContext } from '../StorageContext';
import './ProductDetailsPage.scss';
import { Product } from '../../types/Product';


export const ProductDetailsPage: React.FC = () => {
  const [cartProduct, setCartProduct] = useState<Product>();
  const [cardProduct, setCardProduct] = useState<ProductFull | null>(null);
  const [errMess, setErrMess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { errorNotify } = useContext(StorageContext);

  useEffect(() => {
    Promise.all([getProductById(id || ''), getProductsByApi()])
      .then(data => {
        setCardProduct(data[0]);
        setCartProduct(
          data[1].products.find(
            (product: Product) => product.itemId === data[0].id,
          ),
        );
      })
      .catch(mess => {
        navigate('../../not_found', { relative: 'path', replace: true });
        setErrMess(mess);
        errorNotify('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {!isLoading && !errMess.length && (
        <div className="container">
          <main className="container__content">
            <section className="details-page">
              {cardProduct && cartProduct ? (
                <>
                  <div className="details-page__content">
                    <div className="details-page__section-top">
                      <Breadcrumbs />
                      <ButtonBack />
                      <CardItem
                        cardProduct={cardProduct}
                        cartProduct={cartProduct}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <p className="details-page__paragraph">Phone was not found</p>
              )}
            </section>
          </main>
        </div>
      )}
    </>
  );
};
