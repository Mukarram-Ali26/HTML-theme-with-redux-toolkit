import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    lawn,
    planting,
    garden,
    init,
    selectCount,
} from '../features/counter/counterSlice';

export const Gallery = () => {
    const GD = useSelector(selectCount);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(init());
    }, [])
    return (


        <div>
            {/* <!-- Gallery Section --> */}
            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Project Gallery</h2>
                        <hr />
                        <p>Here are some of our projects which can help you to understand.</p>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li onClick={() => dispatch(init())} className="active">All</li>
                                    <li onClick={() => dispatch(lawn())}>Lawn care</li>
                                    <li onClick={() => dispatch(garden())}>Garden Care</li>
                                    <li onClick={() => dispatch(planting())}>Planting</li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            {GD.map((g) => (
                                <div className={"col-sm-6 col-md-4 " + g.cat}>
                                    <div className="portfolio-item">
                                        <div className="hover-bg"> <a href={g.src} title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>{g.title}</h4>
                                            </div>
                                            <img src={g.url} className="img-responsive" alt="Project Title" /> </a> </div>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Project Gallery</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li><a href="#" data-filter="*" className="active">All</a></li>
                                    <li><a href="#" data-filter=".lawn">Lawn Care</a></li>
                                    <li><a href="#" data-filter=".garden">Garden Care</a></li>
                                    <li><a href="#" data-filter=".planting">Planting</a></li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Dolor Sit</h4>
                                        </div>
                                        <img src="img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Lorem Ipsum</h4>
                                        </div>
                                        <img src="img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg"> <a href="img/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                        <div className="hover-text">
                                            <h4>Adipiscing Elit</h4>
                                        </div>
                                        <img src="img/portfolio/09-small.jpg" className="img-responsive" alt="Project Title" /> </a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
