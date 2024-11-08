import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin";

const App = () => {
  const [user] = useAuthState(auth);

  return <>{user ? <Layout /> : <Signin />}</>;
};

export default App;

// main - app - layout - sidebar , other
