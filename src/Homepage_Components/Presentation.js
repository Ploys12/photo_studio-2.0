import React from "react";

class Presentation extends React.Component{
    render(){
        return (<div className="presentation">
            <div className="main_nav">
                    <h2 onClick={() => {
                    window.scrollTo( {top: 900, behavior: "smooth"} )
                }}>Наши работы</h2>
                    <h2 onClick={() => {
                    window.scrollTo( {top: 1850, behavior: "smooth"} )
                }}>Отзывы о нас</h2>
                </div>

        </div>)
    }
}

export default Presentation