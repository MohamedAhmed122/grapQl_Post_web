import "./App.css";
import { Route, Switch } from "react-router-dom";
// import CreatePost from "./pages/CreatePostPage";
import CreatePost from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetailPage";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={PostPage} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/post/:id" component={PostDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
