import { useCallback, useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import type { Dispatcher, Status } from '../../interfaces';

type queryResponse<T> = {
  error?: AxiosError;
  status: Status;
  data?: T;
  setStatus: Dispatcher<Status>;
};

type args<T> = {
  apiCall: () => Promise<AxiosResponse<T>>;
  initialStatus?: Status;
};

/**
 * It takes an apiCall function and an initialStatus string, and returns an object with an error,
 * status, data, and setStatus function
 * @param  - apiCall - the function that will be called to fetch the data.
 */
// eslint-disable-next-line import/prefer-default-export
export function useQuery<T>({
  apiCall,
  initialStatus = 'ready',
}: args<T>): queryResponse<T> {
  const [error, setError] = useState<AxiosError | undefined>();
  const [status, setStatus] = useState<Status>(initialStatus);
  const [data, setData] = useState<T | undefined>();
  const fetcher = useCallback(apiCall, [apiCall]);

  useEffect(() => {
    setStatus('loading');

    fetcher()
      .then((results) => {
        setData(results.data as T);
        setStatus('loaded');
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        setError(error);
      });
  }, [fetcher]);
  return {
    error, status, data, setStatus,
  };
}
