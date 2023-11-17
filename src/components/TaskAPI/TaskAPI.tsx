import {useState, useEffect} from 'react';
import {Joke} from '../../types';
import PostJokes from '../PostJokes/PostJokes';

const TaskApi = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  const fetchJokes = async () => {
    try {
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
  };

  useEffect(() => {
    void fetchJokes();
  }, []);

  const fetchNewJokes = async () => {
    void fetchJokes();
  };


  return (
    <>
      <button type="button" className="btn btn-outline-dark" onClick={fetchNewJokes}>Get new jokes</button>
      <div>
        {jokes.map((joke) => (
          <PostJokes
            key={joke.id}
            jokesText={joke.value}
          />
        ))}
      </div>
    </>
  );
};

export default TaskApi;