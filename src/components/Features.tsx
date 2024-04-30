"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../components/input";
import { Button } from "../components/ui/button";

export default function Features() {
  return (
    <header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-200 mt-4 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                Website Development Features
              </h2>
              <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
                Having a fast modern website is crucial for businesses and
                individuals alike for several reasons.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-8">
                <ul className="grid gap-8">
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Online Payments
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Online payments with Payfast streamline transactions,
                        enhance convenience, and expand customer base by
                        offering secure, hassle-free purchasing options,
                        facilitating seamless shopping experiences and driving
                        sales growth.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Customer Testimonials
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Testimonials add credibility, build trust, and influence
                        purchase decisions by showcasing positive experiences of
                        past customers, reinforcing your brand&apos;s
                        reliability and quality.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Social Media Integration
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Social media integration expands reach, fosters
                        engagement, and enhances brand visibility by connecting
                        website visitors with your social profiles, promoting
                        interaction and community building.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Contact Forms
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Contact forms facilitate seamless communication,
                        enabling easy inquiries, fostering customer engagement,
                        and streamlining feedback collection, ultimately
                        enhancing customer satisfaction, trust, and brand
                        credibility.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Mobile Responsiveness
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Mobile responsiveness ensures optimal user experience,
                        accommodating various devices, increasing accessibility,
                        and retaining visitors by adapting content seamlessly,
                        improving engagement, and maximizing reach across
                        platforms.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Professional Image
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        A modern website reflects professionalism and
                        credibility. It serves as a digital storefront for your
                        brand, conveying trustworthiness and competence to
                        potential customers or visitors.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Gallary & About Pages
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Galleries and About pages enrich user experience by
                        visually showcasing offerings and providing insight into
                        brand identity, fostering connection, trust, and
                        engagement, thereby enhancing overall website
                        effectiveness and appeal.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Improved User Experience
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        A well-designed modern website enhances the user
                        experience by providing easy navigation, fast loading
                        times, and compatibility across various devices. This
                        ensures that visitors can find the information they need
                        quickly and efficiently, leading to higher engagement
                        and conversions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Increased Visibility and Reach
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        A good website is essential for digital marketing
                        efforts. With search engine optimization (SEO)
                        techniques and integration with social media platforms,
                        a modern website can improve your online visibility and
                        reach a broader audience, driving more traffic to your
                        site.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        Competitive Advantage
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        In today&apos;s digital age, having a modern website
                        sets you apart from competitors who may have outdated or
                        poorly designed websites. A visually appealing and
                        user-friendly website can attract customers away from
                        competitors and position your brand as a leader in your
                        industry.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-200 transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-400">
                        24/7 Accessibility
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Unlike traditional brick-and-mortar stores, a website is
                        accessible 24/7 from anywhere in the world. This means
                        that potential customers can learn about your products
                        or services, make purchases, or contact you at any time,
                        leading to increased sales and opportunities for growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
