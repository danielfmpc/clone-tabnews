const handleClick = () => {
  alert("Pega agua pra mim, pf!");
};

function Home() {
  return (
    <div>
      <h1>❤️Raysa, eu te amo, se você gostou da uma risadinha❤️</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Home;