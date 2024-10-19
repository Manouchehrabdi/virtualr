import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
    return (
        <footer dir="rtl" className=" border-t border-neutral-700 shadow-md mt-">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div>
                    <h3 className="text-xl text-blue-50 bg-blue-950 w-1/4 text-center rounded-md font-semibold mb-4 p-2 m-2">جاوااسکریپت</h3>

                    <ul className="space-y-2 te">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-blue-950 pr-5 "
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl text-blue-50 bg-blue-950 w-1/4 text-center rounded-md font-semibold mb-4 p-2 mt-2">ریکت</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-blue-950"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl text-blue-50 bg-blue-950 w-1/4 text-center rounded-md font-semibold mb-4 p-2 mt-2">گیت و گیت هاب</h3>

                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-blue-950"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-3 bg-violet-900 flex justify-center p-2 m-2 rounded-md">
                <h3 className="text-blue-50 ">
                    کليه حقوق محصولات و محتوای اين سایت متعلق به منوچهر عبدی می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
                </h3>
            </div>
        </footer>

    );
};

export default Footer;