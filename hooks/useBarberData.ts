import { useEffect, useState } from 'react';
import { Service, PriceCategory } from '../types';

interface UseBarberDataResult {
  services: Service[];
  priceCategories: PriceCategory[];
  loading: boolean;
  error: string | null;
}

export function useBarberData(): UseBarberDataResult {
  const [services, setServices] = useState<Service[]>([]);
  const [priceCategories, setPriceCategories] = useState<PriceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([
      fetch('./data/services.json')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        }),
      fetch('./data/prices.json')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        })
    ])
      .then(([servicesData, pricesData]) => {
        setServices(servicesData);
        setPriceCategories(pricesData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { services, priceCategories, loading, error };
}
