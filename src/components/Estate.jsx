export const Estate = (props) => {
  return ( 
    <div className="mainPage">
      <p>{props.data.title}</p>
      <p>{props.data.text}</p>
      <p>{props.data.price}</p>
      <p>{props.data.city}</p>
      <p>{props.data.contact.name}</p>
      <p>{props.data.contact.email}</p>
      <p>{props.data.contact.phone}</p>
      <img src={props.data.photo} alt="Home" />
    </div>
  )
}