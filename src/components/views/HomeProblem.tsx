import Parallax from '@/utils/Parallax'

const _ITEMS = [
  {
    title: 'El problema',
    description: 'Las agencias tienen equipos inestables y costos irregulares',
  },
  {
    title: 'El problema',
    description: 'La retención de talento se ha convertido ',
  },
]

const HomeProblem = () => {
  return (
    <section className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64">
      {[1, 2, 3].map((index) => (
        <section key={index} className="snap-center">
          <Parallax />
        </section>
      ))}
    </section>
  )
}

export default HomeProblem
