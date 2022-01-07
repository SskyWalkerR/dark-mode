import ImageOne from "../public/img/s1.jpg";
import ImageTwo from "../public/img/s2.jpg";
import Image from "next/image";

const Content = () => {
    return (
        <>
            <div className="menu-card dark-mode-animation">
                <Image src={ImageOne} className="rounded shadow object-cover" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Nebula</h2>
                    <p className="mb-2">Death of a star</p>
                </div>
            </div>
            <div className="menu-card mt-9">
                <Image src={ImageTwo} className="rounded shadow object-cover" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Milkyway</h2>
                    <p className="mb-2 text-center">
                        The universe we live in is incredible
                    </p>
                </div>
            </div>
        </>
    );
};

export default Content;
