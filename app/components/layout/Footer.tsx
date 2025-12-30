import Link from "next/link";
import { MdPhoneAndroid, MdPhoneEnabled } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="px-4 pt-10 sm:px-16 sm:pt-12 md:px-24 md:pt-14 lg:px-32 lg:pt-16">
            {/* footer top info */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
                {/* footer Quick links */}
                <div className="text-neutral-900 order-1">
                    <p className="font-bold text-base mb-1.5 md:mb-2 lg:mb-3 text-right">لینک‌های سریع</p>
                    <ul className="font-regular text-xs flex flex-col gap-3 text-right">
                        <li><Link href="/">صفحه اصلی</Link></li>
                        <li><Link href="/">لیست پزشکان</Link></li>
                        <li><Link href="/">سوالات متداول</Link></li>
                        <li><Link href="/">درباره ما</Link></li>
                        <li><Link href="/">تماس با ما</Link></li>
                    </ul>
                </div>

                {/* footer Legal information */}
                <div className="text-neutral-900 order-2">
                    <p className="font-bold text-base mb-1.5 md:mb-2 lg:mb-3 text-right">اطلاعات حقوقی</p>
                    <ul className="font-regular text-xs flex flex-col gap-3 text-right">
                        <li>تمامی حقوق محفوظ است.</li>
                        <li>سال تأسیس یا بروزرسانی: 2025</li>
                    </ul>
                </div>

                {/* social media - Mobile only */}
                <div className="md:hidden flex flex-col items-start gap-2 order-3">
                    <p className="font-bold text-base mb-1.5 md:mb-2 lg:mb-3 text-right">ما را دنبال کنید</p>
                    <div className="flex gap-4">
                        <FaLinkedinIn size={24} />
                        <FaTelegramPlane size={24} />
                        <FaInstagram size={24} />
                        <FaWhatsapp size={24} />
                    </div>
                </div>

                {/* Contact information */}
                <div className="text-neutral-900 order-4 md:order-3">
                    <p className="font-bold text-base mb-1.5 md:mb-2 lg:mb-3 text-right">اطلاعات تماس</p>
                    <ul className="font-regular text-xs flex flex-col gap-3">
                        <li className="flex flex-row-reverse items-center justify-end gap-2">
                            <div className="flex flex-col text-right">
                                <p>۰۹۱۲ ۳۴۵ ۶۷۸۹</p>
                                <p>۰۹۱۲ ۳۴۵ ۶۷۹۰</p>
                            </div>
                            <MdPhoneAndroid size={24} />
                        </li>
                        <li className="flex flex-row-reverse items-center justify-end gap-2">
                            <div className="flex flex-col text-right">
                                <p>۰۲۱-۷۷ ۴۲۵۸۶۷</p>
                                <p>۰۲۱-۷۷ ۴۲۵۸۶۸</p>
                            </div>
                            <MdPhoneEnabled size={24} />
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="order-5 md:order-4 w-full md:w-auto">
                    <div className="p-4 md:px-7 md:py-5 lg:px-8 lg:py-6 bg-[#203C86]/3 flex flex-col gap-2.5 rounded-xl font-regular">
                        <p className="text-base text-[#0A142F] text-right">مشترک شوید</p>
                        <div className="flex">
                            <input type="text" placeholder="آدرس ایمیل" className="px-4 py-2.5 w-full bg-[#F5F8FA] text-sm text-[#0A142F] placeholder:text-[#94A3B8] rounded-tr-md rounded-br-md border border-[#E7E8F2] outline-0 text-right" />
                            <button className="pt-2.5 pr-[13.64px] pb-[9.32px] pl-[14.18px] bg-[#4179F0] text-white rounded-tl-md rounded-bl-md cursor-pointer">
                                <FaArrowLeftLong size={24} />
                            </button>
                        </div>
                        <p className="text-sm max-w-3xs text-neutral-700 text-right">اپلیکیشن رزرو نوبت برای گرفتن نوبت سریع و غیرحضوری وبهترین دکترهای متخصص با دکتر رزرو.</p>
                    </div>
                </div>
            </div>

            {/* footer middle border */}
            <div className="my-7 w-full h-[3px] bg-[#0A142F]/10"></div>

            {/* footer bottom info */}
            <div className="flex flex-row-reverse md:flex-row md:justify-between items-center pb-6">
                {/* social media - Desktop only */}
                <div className="hidden md:flex gap-4">
                    <FaWhatsapp size={24} />
                    <FaInstagram size={24} />
                    <FaTelegramPlane size={24} />
                    <FaLinkedinIn size={24} />
                </div>

                {/* footer logo */}
                <Link className="flex gap-3 md:gap-4 items-center" href="/">
                    <Image src="/Logo.jpg" alt="logo" width={30.63} height={28} />
                    <p className="text-2xl">
                        دکتر <span className="text-blue-500">رزور</span>
                    </p>
                </Link>
            </div>
        </footer>
    )
}