"use client";

import { useState } from "react";
import Link from "next/link";
import "./languageSwitcher.scss";
import { GrLanguage } from "react-icons/gr";
import Image from "next/image";

const LanguageSwitcher = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="language-switcher">
            <button onClick={() => setShowAll(!showAll)} className="main-button">
                <GrLanguage />
            </button>
            {showAll && (
                <div className="dropdown">
                    <Link href="/en">
                        <button>
                            <Image
                                src="/img/enFlag.svg"
                                alt="T-shirts"
                                width={20}
                                height={20}
                                className="w-full h-auto"
                            />
                            EN
                        </button>
                    </Link>
                    <Link href="/uz">
                        <button>
                            <Image
                                src="/img/uzFlag.svg"
                                alt="T-shirts"
                                width={20}
                                height={20}
                                className="w-full h-auto"
                            />
                            UZ
                        </button>
                    </Link>
                    <Link href="/ru">
                        <button>
                            <Image
                                src="/img/ruFlag.svg"
                                alt="T-shirts"
                                width={20}
                                height={20}
                                className="w-full h-auto"
                            />
                            RU
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
