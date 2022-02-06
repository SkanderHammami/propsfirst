import PropTypes from "prop-types";



const Profile = ({fullName, bio, profession, Skan, handleName}) => {
    return (
        <div>
          {handleName}
          <h2>My name is {fullName}, this is my bio : {bio}, and this is my profession : {profession}</h2>
          <img src={Skan} alt="myPicture"/>
          
          
        </div>
        

    )
    
}
Profile.defaultProps = {
    fullName: "Foulen", bio : "Mafamech", profession : "X"
}

Profile.propTypes = {
    fullName : PropTypes.string
}
export default Profile