import cn from 'classnames'

export default function LoadVideo({ title, src }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': 'slug',
      })}
    />
  )
  return (
    <div className="sm:mx-0">

    </div>
  )
}
