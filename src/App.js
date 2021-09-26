import './App.css';
import ApiGithub from "./Components/01-ApiGithub/ApiGithub"
import GithubGraphQL from './Components/02-GithubGraphQL/GithubGraphQL';
function App() {
  return (
    <pre>

      {/* <ApiGithub /> */}
      <GithubGraphQL />
      GithubAPI
    </pre>
  );
}

export default App;
