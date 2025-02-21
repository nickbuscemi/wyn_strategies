import React from 'react';
import Link from "next/link";

const PageTitle = (props) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section className="page-title" style={backgroundImageStyle}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.pageTitle}</h2>
                        <ol className="breadcrumb">
                            <li><Link href="/home">Home</Link></li>
                            <li><span>{props.pagesub}</span></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;
