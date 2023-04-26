import React from "react";
import { BsFillBalloonHeartFill, BsArrowDown } from 'react-icons/bs'
class Do extends React.Component{
    render(){
        return(<div className="we_do">
            <span className="text">Чем мы занимаемся</span>
            
            <div className="we_interval">
            
                <span className="we_text">Мы занимаемся фотографией 25 лет.
                 Наша студия в центре Сочи всегда была известна своими футуристичными и тёплыми фотографиями.
                  За годы нашей деятельности мы обрадовали тысячи людей, сотни семей. Несмотря на то, что мы являемся одной из самых престижных фотостудий в Сочи, наши цены находятся в области ниже среднего по России.
                  </span>
                  <BsFillBalloonHeartFill className='desc_heart_do'/>
                  
            </div>
        </div>)
    }
}

export default Do