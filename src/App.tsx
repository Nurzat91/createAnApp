import MovieApp from './components/MovieApp/MovieApp';
import TaskApi from './components/TaskAPI/TaskAPI';


function App() {


  return (
    <div className="container">
      <div>
        <MovieApp/>
      </div>
      <div>
        <TaskApi/>
      </div>
    </div>
  )
}

export default App
