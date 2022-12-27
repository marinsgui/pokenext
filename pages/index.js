import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <h1>PokéNext</h1>
      <div>
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  )
}
