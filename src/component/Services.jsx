import React, { useEffect, useState } from "react";
const Services = () => {
    const [showMoreSG, setShowMoreSG] = useState(false);
    const [showMoreCI, setShowMoreCI] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.$ && typeof window.$.fn.slick === "function") {
                window.$(".service-slider").slick({
                    slidesToShow: 1,
                    arrows: true,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: "60px",
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: "30px",
                            },
                        },
                    ],
                });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <section className="services-page" id="services">
                <h2 style={{ textAlign: "center", color: "#1e3c72", fontSize: "36px" }}>Our <span className="highlight">Services </span></h2>
                <div className="service-slider ">
                    <div className="service-card ">
                        <h3>S G Iron Castings (Spheroidal Graphite Iron Castings / Nodular Iron Castings)</h3>
                        <p>
                            Manufacturer & Exporter of S G Iron Castings. S G Iron is also known as Spheroidal Graphite Iron,
                            Ductile Cast Iron, Nodular Cast Iron, Spherulitic Graphite Cast Iron. S G Iron is a type of cast
                            iron treated with magnesium or cerium to form nodular graphite for better ductility.
                            {showMoreSG && (
                                <>
                                    <br /><br />
                                    It offers a unique combination of strength, wear resistance, and toughness.
                                    In ductile irons, the graphite forms nodules instead of flakes like in grey iron,
                                    reducing stress concentration and crack formation.
                                    <br /><br />
                                    <strong>Composition:</strong><br />
                                    Carbon 3.2 to 3.6%<br />
                                    Silicon 2.2 to 2.8%<br />
                                    Manganese 0.1 to 0.5%<br />
                                    Magnesium 0.03 to 0.05%<br />
                                    Phosphorus 0.005 to 0.04%<br />
                                    Sulfur 0.005 to 0.02%<br />
                                    Copper 0.40%<br />
                                    Iron balance<br /><br />
                                    Other elements like copper, tin, nickel, or chromium may be added for enhanced strength
                                    and corrosion resistance.
                                    <br /><br />
                                    <strong>Applications:</strong> Automotive components, diesel trucks, tractors, oil well pumps.
                                    <br /><br />
                                    <strong>Specifications:</strong><br />
                                    IS – 1865 – 1998<br />
                                    Grades – SG – 350/22 to SG – 900/2.<br />
                                    All grades have improved corrosion, wear and heat resistance.
                                    <br /><br />
                                    <strong>Products:</strong> Crank Gear, Separator Body Liner, Winch Drums, Elevator Blocks,
                                    Impellers, Valves, Hollow Cylinder, etc.
                                </>
                            )}
                        </p>
                        <button onClick={() => setShowMoreSG(!showMoreSG)} className="btn">
                            {showMoreSG ? "Show Less" : "See More"}
                        </button>
                    </div>

                    <div className="service-card">
                        <h3>Cast Iron Castings (Graded) & Alloy C.I. Castings</h3>
                        <p>
                            Cast iron is a hard, brittle alloy of iron and carbon with a higher carbon content than steel.
                            We manufacture & export graded and alloy C.I. castings using modern techniques.
                            {showMoreCI && (
                                <>
                                    <br /><br />
                                    These castings are known for strength, durability, and corrosion resistance, and can be
                                    customized as per client needs. Suitable for engineering and construction industries.
                                    <br /><br />
                                    <strong>Specifications:</strong><br />
                                    IS – 210 – 1993<br />
                                    Grade – FG – 200/220, FG – 260, FG – 300, FG – 350<br />
                                    All grades offer better corrosion, wear, and heat resistance.
                                    <br /><br />
                                    <strong>Products:</strong> Pump Casing, Chain Wheels, Machine Frames, Crank Gear,
                                    Separator Body Liner, Bull Gear, Winch Drums, Fly Wheels, Elevator Blocks, Impellers,
                                    Valves, Hollow Cylinder, Friction Brake Drums (1000 PSI tested), Drive Plates, etc.
                                </>
                            )}
                        </p>
                        <button onClick={() => setShowMoreCI(!showMoreCI)} className="btn">
                            {showMoreCI ? "Show Less" : "See More"}
                        </button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Services;
