import { ExternalLink } from '../../../../components/ExternalLink';
import { PostHeaderContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../Blog';
import { Spinner } from '../../../../components/Spinner';
import { relativeDateFormatter } from '../../../../utils/formatter';

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFormatter(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as='button'
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text='Voltar'
              variant='iconLeft'
              onClick={goBack}
            />
            <ExternalLink text='Ver no Github' href={postData.html_url} target='_blank' />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} coments
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}