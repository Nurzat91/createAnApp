import MovieApp from './components/MovieApp/MovieApp';
import TaskApi from './components/TaskAPI/TaskAPI';

function App() {
  return (
    <div className="container d-flex mt-3">
      <div className="col-6 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <MovieApp/>
      </div>
      <div className="col-6 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <TaskApi/>
      </div>
    </div>
  )
}

export default App
