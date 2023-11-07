"use client";
import { NAV_LINK } from "@/constants";
import ScrollY from "@/utils/scrollY";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <div className="brand">UndanganKu</div>
      <ul className="hidden">
        {NAV_LINK.map((item) => (
          <Link className="nav-link" key={item.id} href={item.link}>
            {item.lable}
          </Link>
        ))}
      </ul>
      <ul>
        <Link className="nav-link" href="#masuk">
          Masuk
        </Link>
        <Link className="nav-link" href="#daftar">
          Daftar
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
