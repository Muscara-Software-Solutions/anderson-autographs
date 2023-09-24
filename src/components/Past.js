const people = [
  {
    name: 'Nick Hagglund',
    role: 'American soccer player',
    imageUrl: '/nick.jpeg',
  },
  {
    name: 'Ickey Woods',
    role: 'American football player',
    imageUrl: '/ickey.jpeg'
  },
  {
    name: 'Jose Rijo',
    role: 'Cincinnati Reds Pitcher',
    imageUrl: '/jose.jpeg'
  },
  {
    name: 'Marty Brennaman',
    role: 'Sports commentator',
    imageUrl: '/marty.jpeg'
  },
  {
    name: 'Sam LeCure',
    role: 'Cincinnati Reds Pitcher',
    imageUrl: '/sam.png'
  },
  {
    name: 'Lee Smith',
    role: 'Cincinnati Reds Pitcher',
    imageUrl: '/lee.webp'
  },
]

export default function Past() {
  return (
    <div className="bg-white py-12 sm:py-16" id="meet">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who you could meet</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-32 w-36 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
