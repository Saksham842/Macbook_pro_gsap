import { footerLinks } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="container mx-auto py-7 max-lg:px-5">
           

            <hr className="my-7 text-[#424245]" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between max-lg:mt-5 gap-5 text-sm">
                <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

                <ul className="lg:divide-x flex flex-col lg:flex-row gap-2.5">
                    {footerLinks.map(({ label, link }) => (
                        <li key={label} className="lg:px-5 cursor-pointer hover:text-primary transition-all duration-300 ease-in-out">
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer

