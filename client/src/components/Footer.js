import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='creator-div'>
        <p className='creator-p'>An Arthur Ruxton Project</p>
      </div>
      <div className='social-media-div'>
        <p>
          <a target="_blank" rel="noreferrer" href="https://github.com/arthur-ruxton"><img 
            src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" 
            width="35px"
            height="25px" /></a>
          
          <a
            target="_blank" rel="noreferrer"
            href="https://www.linkedin.com/in/arthur-ed-ruxton-5b3396220/"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              width="35px"
              height="25px"
            /></a>
        </p>
      </div>
    </div>
  )
}

export default Footer
