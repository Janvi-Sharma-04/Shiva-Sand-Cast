import React, { useEffect } from "react";
const Products = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.$ && typeof window.$.fn.slick === "function") {
                window.$('.center').slick({
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3,
                    autoplay: true,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '40px',
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            } else {
                console.error("Slick not loaded properly");
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="products" id="products">
                <div className="products-header">
                    <h2>Our <span className="highlight">Products </span></h2>
                    <p>Explore our wide range of industrial casting solutions.</p>
                </div>

                <div className="center">
                    {Array.from({ length: 25 }, (_, index) => (
                        <div className="product-card" key={index}>
                            <img src={`/imgs/img${(index + 1)}.jpg`} alt={`Product ${index}`} />
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default Products;

