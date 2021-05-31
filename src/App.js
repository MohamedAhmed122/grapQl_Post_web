import "./App.css";
import { Route, Switch } from "react-router-dom";
// import CreatePost from "./pages/CreatePostPage";
import CreatePost from "./pages/CreatePostPage";
import PostPage from "./pages/PostPage";
import PostDetail from "./pages/PostDetailPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        ``
        <Route exact path="/" component={PostPage} />
        <Route exact path="/create-post" component={CreatePost} />
        {/* // <Route exact path="/edit/:id" component={CreatePost} /> */}
        <Route exact path="/post/:id" component={PostDetail} />
      </Switch>
    </div>
  );
}

export default App;
