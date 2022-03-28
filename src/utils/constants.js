import { FaTelegramPlane, FaGithub, FaYoutube } from 'react-icons/fa'

export const links = [
  { id: 1, url: '/', name: 'about' },
  { id: 2, url: '/', name: 'projects' },
  { id: 3, url: '/', name: 'youtube' },
]

export const social_media = [
  {
    name: 'telegram',
    url: 'https://t.me/kirill_mihalych',
    icon: <FaTelegramPlane />,
  },
  { name: 'github', url: 'https://github.com/Fen1xex', icon: <FaGithub /> },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCHAtU9PjiIRS5ZuTKyJf7Uw',
    icon: <FaYoutube />,
  },
]
