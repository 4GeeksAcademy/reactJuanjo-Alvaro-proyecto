
const Card = ({image,title,description}) => {
    return ( 
        <div className="card rounded m-2" style={{ width: "18rem" }}>
            <img
                src={image}
                className="card-img-top"
                alt="imagen"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                   {description}
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );
};

export default Card;