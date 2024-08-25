import './Instructor.css'
import man from '../../assets/std4.jpg'
const Instructor = () => {
  return (
    <div>
        <div className="instructor">
          <div className="left">
            <img src= {man} alt="amelia earhart" />
          </div>
          <div className="right">
            <h2>Become An Instructor</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odio minima voluptates rerum quasi nemo magnam velit rem nihil, sequi animi similique officia aperiam. Perferendis alias odit tempore veniam voluptas!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odio minima voluptates rerum quasi nemo magnam velit rem nihil, sequi animi similique officia aperiam. Perferendis alias odit tempore veniam voluptas!</p>
            <button>Register Now </button>
          </div>
        </div>
    </div>
  )
}

export default Instructor