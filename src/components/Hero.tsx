"use client";

export default function Hero() {
  return (
    <section className="bg-white py-4 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">

          {/* Identity Block */}
          <div className="flex flex-col gap-0">
            <p
              className="
                font-mono
                text-xs
                uppercase
                tracking-[0.22em]
                text-gray-500
              "
            >
              Malumbo Mkandawire
            </p>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="font-medium text-gray-700">
                Senior Software Engineer
              </span>

              <span>•</span>

              <span>
                Software Architect
              </span>

              <span>•</span>

              <span>
                Systems Builder
              </span>
            </div>
          </div>


          {/* Main Statement */}
          <h1
            className="
              mt-8
              max-w-3xl
              text-3xl
              font-semibold
              leading-tight
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Engineering reliable digital systems across Africa.
          </h1>


          {/* Supporting Copy */}
          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Results-driven engineer with 9+ years of experience designing,
            developing, and maintaining secure enterprise applications for
            regulated industries including healthcare, government, and
            international development organizations.
          </p>


          <p
            className="
              mt-3
              max-w-3xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
            "
          >
            Specializing in{" "}
            <span className="font-medium text-gray-900">
              microservices
            </span>
            ,{" "}
            <span className="font-medium text-gray-900">
              cloud-native architecture
            </span>
            ,{" "}
            <span className="font-medium text-gray-900">
              API platforms
            </span>
            , and{" "}
            <span className="font-medium text-gray-900">
              engineering excellence
            </span>
            .
          </p>

        </div>
      </div>
    </section>
  );
}