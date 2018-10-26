export function handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

export async function getJoke() {
  const res = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
  const { value: { joke } } = await res.json();

  this.setState({ joke });
}