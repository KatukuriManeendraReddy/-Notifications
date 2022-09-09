const Notification = props => {
    const {src,para,className}=props;
    return( <div className={className}>
          <img src={src} className="image"/>
          <p className="paragraph">{para}</p>
          </div>
})
         

const element = (
  <div className="bg-container">
      <h1 className="heading">Notifications</h1>
      <Notification src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" para="Information message" className="inner-cont1"/>
      <Notification src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" para="Success message" className="inner-cont2"/>
      <Notification src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" para="Warning message" className="inner-cont3"/>
      <Notification src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" para="Danger message" className="inner-cont4"/>
  </div>   
)

ReactDOM.render(element, document.getElementById('root'))
