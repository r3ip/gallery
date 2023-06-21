import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer className="footer footer-center p-5 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          <p>Pier Valenzuela</p>
          <a href='https://github.com/r3ip' target={'_blank'}><FaGithub className='w-5 h-5' /></a>
          <a href='https://www.linkedin.com/in/jp-valenzuela/' target={'_blank'}><BsLinkedin className='w-5 h-5' /></a>
        </div>
      </div>
    </footer>
  )
}
