import  './footer.css'
const Footer = () => {
  return (
    <footer className='flex'>
       <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
        </ul>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer