import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h5 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        A@NAM
      </h5>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        You can take a look my some of the Successful projects here.
      </h4>
    </section>
  )
}
