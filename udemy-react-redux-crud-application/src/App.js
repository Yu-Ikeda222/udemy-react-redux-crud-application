import PropTypes from 'prop-types';

const App =  () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 15},
    { name: "1"}
  ]
  return(
    <div>
    {
      profiles.map((profile, index) => {
        return <User name= {profile.name} age ={profile.age} key={index}/>
      })
    }
    </div>
  )
}

const User = (props) => {
  return (
    <div>I'm {props.name}. {props.age} </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
