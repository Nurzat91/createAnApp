import {useState, useEffect} from 'react';
import {Joke} from '../../types';
import PostJokes from '../PostJokes/PostJokes';
import GetJokes from '../GetJokes/GetJokes';
import './Loader.css';

const TaskApi = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const jokeData: { value: string; id: string }[] = [];

      for (let i = 0; i < 5; i++) {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeData.push({ value: data.value, id: data.id });
      }

      setJokes(jokeData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchJokes();
  }, []);

  const fetchNewJokes = async () => {
    void fetchJokes();
  };


  return (
    <>
      <GetJokes onClick={fetchNewJokes}/>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div>
          {jokes.map((joke) => (
            <PostJokes key={joke.id} jokesText={joke.value} />
          ))}
        </div>
      )}
    </>
  );
};

export default TaskApi;