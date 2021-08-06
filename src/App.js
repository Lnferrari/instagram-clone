import NavigationBar from './Components/NavigationBar';
import Gallery from './Components/Gallery'
import User from './Components/User';

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <User />
        <Gallery />
      </main>
    </>
  );
}

export default App;
