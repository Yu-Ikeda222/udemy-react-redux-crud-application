const App =  () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 15},
    { name: "baby"}
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

User.defaultProps = {
  age: 1
}
export default App;
