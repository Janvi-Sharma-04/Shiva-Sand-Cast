const InspectionQuality = () => {
    return (
        <>
            <section className="inspection-section" id="inspection">
                <div className="container">
                    <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#ff9800", fontWeight: "bold" }}>Inspection <span style={{ color: "#1e3c72" }}> & </span> Quality</h1>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={{ color: "#1e3c72" }}>Foundry</h2>
                            <p>We have 2 stages of inspection in our foundry:</p>

                            <h3>1. Inspection Before Shot Blasting</h3>
                            <ul>
                                <li>Decoring of moulds</li>
                                <li>Knock out of runners & risers</li>
                                <li>Heat-wise hardness checking of each batch by Poldi Hardness Tester</li>
                                <li>Visual inspection for cracks or any other foundry defects</li>
                                <li>O.K. pieces sent for shot blasting</li>
                            </ul>

                            <h3>2. Inspection After Shot Blasting</h3>
                            <ul>
                                <li>Visual inspection before fettling</li>
                                <li>Critical wall thickness checking by dial calliper</li>
                                <li>Chipping and grinding by conventional method</li>
                                <li>Final inspection of chipping, grinding & defects before Zn – Cr primer dipping</li>
                                <li>Microstructure (random checking)</li>
                            </ul>

                            <h4>Foundry Related Test Reports</h4>
                            <ul>
                                <li>Test reports as per A 3.1 EN 10204 certificate of compliance for each batch of castings</li>
                                <li>Dimensional test report for first article inspection</li>
                            </ul>
                        </div>
                        <div className="col-md-6">

                            <h2 style={{ color: "#1e3c72" }}>Machine Shop</h2>
                            <p>We have 3 stages of inspection in our machine shop:</p>

                            <h3>1. Incoming Inspection</h3>
                            <ul>
                                <li>100% inspection of raw and machined components</li>
                                <li>Check for visual defects before machining</li>
                                <li>Dimension check of outsourced or pre-machined components</li>
                                <li>Assembly child part inspection as per control plan</li>
                            </ul>

                            <h3>2. In Process Inspection</h3>
                            <ul>
                                <li>Batch-wise inspection for process errors like GD&T</li>
                                <li>First component checked after setup change</li>
                                <li>Critical parameter checks via external CMM facility if needed</li>
                            </ul>

                            <h3>3. Final Inspection</h3>
                            <ul>
                                <li>Component inspection as per control plan frequency</li>
                                <li>Dimensional accuracy as per drawing</li>
                                <li>Hydro testing for 100% pressure-rated components</li>
                                <li>Inspection for visual defects, chatter marks, etc.</li>
                                <li>Assembly inspection and functional tests</li>
                                <li>Packing inspection for domestic/export shipments</li>
                                <li>Pre-dispatch inspection for all technical & commercial documentation</li>
                            </ul>

                            <h4>Machine Shop Related Test Reports</h4>
                            <ul>
                                <li>Dimensional inspection reports as per control plan</li>
                                <li>Hydro test report for pressure-rated components</li>
                                <li>Assembly inspection reports as per drawing</li>
                                <li>CMM reports for GD&T during first article or process change</li>
                            </ul>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
};

export default InspectionQuality;
