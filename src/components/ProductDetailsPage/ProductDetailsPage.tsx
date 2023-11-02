import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFull } from '../../types/FullProduct';
import { CardItem } from '../CardItem/CardItem';
import { getProductById } from '../../api/api';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { Breadcrumbs } from '../Breadcrumps/Breadcrumps';
import { StorageContext } from '../StorageContext/StorageContext';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<ProductFull | null>(null);
  const [errMess, setErrMess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { errorNotify } = useContext(StorageContext);

  useEffect(() => {
    getProductById(id || '')
      .then(data => setProduct(data))
      .catch(mess => {
        navigate('../../not_found', { relative: 'path', replace: true });
        setErrMess(mess);
        errorNotify('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log(product);

  return (
    <>
      {!isLoading && !errMess.length && (
        <div className="container">
          <main className="container__content">
            <section className="details-page">
              {product ? (
                <>
                  <div className="details-page__content">
                    <div className="details-page__section-top">
                      <Breadcrumbs />
                      <ButtonBack />
                      <CardItem product={product} />
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
