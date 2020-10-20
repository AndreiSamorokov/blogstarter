import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import LoadVideo from '../components/load-video'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, videoUrl, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle> 
      <div className="mb-8 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} src={coverImage} /> */}
        <LoadVideo title={title} src={videoUrl} />
      </div>
      <div className="max-w-2xl mx-auto"> 
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
