import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;

        if (location.state) {
            console.log(location.state)
            return (

                <div className="album py-5 bg-light">
                    <div className="container">



                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="100%" src={location.state.poster} alt={location.state.title} title={location.state.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3>{location.state.title}</h3>
                                        <h5>{location.state.year}</h5>
                                        <p>
                                            {location.state.genres.map((genre, index) => {
                                                return (
                                                    <span key={index} className="badge badge-success movie__genre">{genre}</span>
                                                );
                                            })}
                                        </p>

                                        <button type="button" className="btn btn-danger">
                                            Rating <span className="badge  badge-light">{location.state.rating}</span>
                                        </button>
                                        <h4 className="card-title">synopsis</h4>
                                        <p>{location.state.synopsis}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-12 d-flex justify-content-end"><a href="#" className="btn btn-primary text-center">Back</a></div>
                        



                    </div>
                </div>



            );
        } else {
            return null;
        }
    }
}

export default Detail;