
export default function Entry(props){
    return(
        <div className ="main-container">
            <article className = "article-items">
                <img 
                    className = "article-main-img" 
                    src = {props.img.src}  
                    alt = {props.img.imgAlt}
                />
                <div className = "article-location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{props.destinationName}</span>

                    <a  className="link-toggle" 
                        href={props.destinationLink} 
                        alt={props.destinationAlt} 
                        target="_blank">
                        View on Google Maps
                    </a>

                    <h1>{props.placeName}

                    </h1>
                    <p className = "date-styling">{props.date}</p>
                    <p>{props.description}</p>
                </div>
            </article>

            <div className="grey-line">
                 <hr></hr>
            </div>

        </div>
    )
}