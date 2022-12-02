import { useLocation, useParams } from 'react-router-dom';

function useBasePath() {
  const location = useLocation();
  const params = useParams();

  return Object.values(params).reduce(
    (path, param) => path.replace(`/${param}`, ''),
    location.pathname,
  ).slice(1);
}

export default useBasePath;
