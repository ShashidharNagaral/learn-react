import { Person } from "./Person";
import { PersonClass } from "./PersonClass";

const App = () => {
  return (
    <div>
      <div>Class Component vs Functional Component</div>
      <h2>Functional Component</h2>
      <Person name={"shashidhar"} />
      <h2>Class Component</h2>
      <PersonClass name={"shashidhar"} />
    </div>
  );
};

export default App;
