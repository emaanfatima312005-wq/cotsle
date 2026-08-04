import Image from "next/image";

export default function TrustedTechnologies() {
  const TrustedTechnologies = [
    {
      name: "Cisco",
      logo: "/images/cisco.png",
    },
    {
      name: "Huawei",
      logo: "/images/huawei.png",
    },
    {
      name: "Microsoft",
      logo: "/images/microsoft.png",
    },
    {
      name: "AWS",
      logo: "/images/aws.png",
    },
    {
      name: "VMware",
      logo: "/images/vmware.jpg",
    },
    {
      name: "Dell",
      logo: "/images/dell.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-[#0D6EFD] font-semibold mb-3">
            Trusted Technology Partners
          </p>

          <h2 className="text-5xl font-black text-gray-900">
            Powered By Industry Leaders
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage globally recognized technologies to deliver
            secure, scalable and future-ready IT infrastructure.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {TrustedTechnologies.map((trustedtech) => (

            <div
              key={trustedtech.name}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-center justify-center"
            >

              <Image
                src={trustedtech.logo}
                alt={trustedtech.name}
                width={120}
                height={60}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}