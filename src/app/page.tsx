
function Banner(props: { name: string }) {
  return (
    <div className="ribbon flex-1 m-8">Hello, {props.name}!</div>
  )
}

export default async function Home() {

  //TODO: Integrate with api
  return (
    <div className="font-sans text-6xl text-center flex items-stretch">
      <Banner name="World"/>
    </div>
  );
}
