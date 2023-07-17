

const RestoCard = (props) => {
    return(
        <>
            <div className="col-md-4 mb-4">
                <div className="card">
                <a href="subway.html">
                    <img src={props.restoImg} className="card-img-top" alt="Food Image 1"/>
                </a>
                <div className="card-body">

                    <div className='d-flex justify-content-between align-items-center'>

                    
                        <h5 className="card-title">{props.restoName}</h5>

                        <div className='d-flex align-items-center rating'>
                            <span className="fas fa-star checked mx-1"></span>
                            <span className="rating-number">{props.avgRating}</span>
                        </div>

                    </div>

                    <p>{props.description}</p>
                </div>
                </div>
            </div>
        
        </>
    );
}

export default RestoCard