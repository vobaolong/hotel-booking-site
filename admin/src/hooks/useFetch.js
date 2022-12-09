import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './../context/AuthContext';

const useFetch = url => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/${url}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/${url}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
