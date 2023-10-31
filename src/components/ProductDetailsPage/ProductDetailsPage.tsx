import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductFull } from '../../types/FullProduct';
import { CardItem } from '../CardItem/CardItem';
import { getProductById } from '../../api/api';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<ProductFull | null>(null);
  const [errMess, setErrMess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id || '')
      .then(data => setProduct(data))
      .catch(mess => {
        navigate('../../not_found', { relative: 'path' });
        setErrMess(mess);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

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
