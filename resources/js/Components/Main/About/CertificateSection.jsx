import React, { useEffect, useState } from "react";
import axios from "axios";

function CertificateSection({ certificate }) {
    return (
        <section className={"container"}>
            <div className="flex max-w-5xl gap-4 mx-auto flex-wrap flex-row items-center justify-center md:space-x-5">
                {certificate.map((certificate) => (
                    <div key={certificate.id}>
                        <img
                            src={`/storage/${certificate.image}`}
                            alt={certificate.name}
                            className={"h-16"}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CertificateSection;
