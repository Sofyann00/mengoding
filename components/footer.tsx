import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.png" 
                alt="Sejasatek Logo"
                width={42}
                height={42}
              />
              <span className="text-xl font-bold">Sejasatek</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Your trusted software development partner. We specialize in building modern web applications, 
              mobile solutions, and enterprise software using cutting-edge technologies like Next.js, React, 
              Node.js, and cloud services. Quality code, innovative solutions, and reliable support.
            </p>
          </div>


          {/* Help section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Technical Support</p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:admin@Sejasatek.com"
                    className="hover:text-foreground transition-colors"
                  >
                    admin@Sejasatek.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:021-50111528"
                    className="hover:text-foreground transition-colors"
                  >
                    021-50111528
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Office Location section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Office Location</h3>
            <div className="text-sm text-muted-foreground">
              <p className="leading-relaxed">
                GEDUNG IS PLAZA LT. 5,<br />
                JL PRAMUKA,<br />
                Desa/Kelurahan Utan Kayu Utara,<br />
                Kec. Matraman,<br />
                Kota Adm. Jakarta Timur,<br />
                Provinsi DKI Jakarta
              </p>
            </div>
          </div>

          {/* Copyright section */}
          <div className="col-span-1 md:col-span-4 mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PT INOVASI SEMBILAN TANGAN.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
