const handleClick = () => {
  alert("Pega agua pra mim, pf!");
};

function Home() {
  return (
    <div>
      <h1>❤️Raysa, eu te amo! dá uma risadinha se vc gostou!❤️</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Home;