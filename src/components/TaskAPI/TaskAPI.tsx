import {useState, useEffect} from 'react';
import {Joke} from '../../types';
import PostJokes from '../PostJokes/PostJokes';
import GetJokes from '../GetJokes/GetJokes';
import './App.css';

const TaskApi = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchJokes = async () => {
    try {
      setIsLoading(true);
      const responses = await Promise.all(
        Array.from({ length: 5 }, () => fetch('https://api.chucknorris.io/jokes/random'))
      );

      const jokeData = await Promise.all(responses.map((response) => response.json()));
      const getJokesData = jokeData.map((joke: { value: string; id: string }) => ({
        value: joke.value,
        id: joke.id,
      }));
      setJokes(getJokesData);
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
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