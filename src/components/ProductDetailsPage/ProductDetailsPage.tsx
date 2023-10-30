import React, { useEffect, useState } from 'react';
import { ProductFull } from '../../types/FullProduct';
import { CardItem } from '../CardItem/CardItem';
import { getPhonesById } from '../../api/api';

export const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<ProductFull | null>(null);
  const [errMess, setErrMess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getPhonesById()
      .then(data => setProduct(data))
      .catch(mess => setErrMess(mess))
      .finally(() => setIsLoading(false));
  }, []);

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
