// import React from 'react'
import './Courses.css'
import {courses} from '../data'

const Courses = () => {
  return (
    <div>
        <div className="course_container">
            <h2>Explore Our Couses </h2>
            <div className="courses_card">
                {courses.map((course) =>{
                    return (
                        <div key={course.id} className="course_card">
                            <img className='course_img' src={course.image} alt="" />
                            <div className="course_details">
                                <div className="course_info">
                                    <span>{course.icon} 4.5</span>
                                    <span>{course.student}</span>
                                </div>
                                <h3>{course.title}</h3>
                                <p className="price">{course.price}</p>
                            </div>
                        </div>
                        // <div key={course.id} className="course_card">
                        //     <img src={course.img} alt={course.title} />
                        //     <h3>{course.title}</h3>
                        //     <p>{course.description}</p>
                        //     <button>Enroll Now</button>
                        // </div> 
                    )
                    // <Course key={course.id} title={course.title} description={course.description} img={course.img} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Courses