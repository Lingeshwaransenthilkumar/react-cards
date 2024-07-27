import PropTypes from "prop-types";

const userData=[
    {
        name: "John",
        city: "San Francisco",
        role: "Backend Developer",
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "API Development", "Python"],
        online: true,
        image: "images/1.jpg"
    },
    {
        name:"Alice",
        city:"New York",
        role:"Frontend Developer",
        skills:["Ui/Ux","Frontend Development","Html","Css","Js","Bootstrap","React"],
        online:true,
        image:"images/2.jpg"
    },
    {
        name: "Emily",
        city: "Los Angeles",
        role: "Full Stack Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "UI/UX Design"],
        online: false,
        image: "images/3.jpg"
    }
]





// component for single user
function User(props){
    return(
        <div className="card-container">
            <span className={props.online ? "pro" : "pro offline"} >{props.online?"Online":"offline"}</span>
            <img className="card-img" src={props.image} alt={props.name+"image"} />
            <h3 className="name">{props.name}</h3>
            <h3 className="city">{props.city}</h3>
            <p className="role">{props.role}</p>
            <div className="buttons">
                <button className="message">Message</button>
                <button className="follow-btn">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>{props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}</ul>
            </div>
        </div>
    )
}




//component for usercards
function Usercard(){
    return(
        <>
            {userData.map((user,index)=>(
                <User key={index} name={user.name} city={user.city} 
                role={user.role} online={user.online} image={user.image} skills={user.skills}/>
            ))}
        </>
        
    )
}



User.PropTypes={
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    role:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired

}


export default Usercard