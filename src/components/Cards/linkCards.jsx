
const LinkCard = (props) => {

   return (
      <>
         <div className="box">
            <button className="btnBG">{props.children}</button>
         </div>
      </>
   )
}

export default LinkCard;