function App() {
  return (
    <div>
      <h1>React Router</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/bookshelf">Bookshelf</Link>
      </nav>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="bookshelf" element={<Bookshelf />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </div>
  );
}


