import Image from "next/image";

const vehicles = [
  {
    src: "/brand/ecosystem/human-driven.png",
    alt: "Human-driven vehicles for consumer and commercial drivers.",
    width: 338,
    height: 112,
  },
  {
    src: "/brand/ecosystem/autonomous.png",
    alt: "Autonomous vehicles for robotaxis and commercial fleets. The vehicle is illustrative.",
    width: 346,
    height: 134,
  },
] as const;

const facilities = [
  {
    src: "/brand/ecosystem/smart-parking.png",
    alt: "SPAAVS Smart Parking Facilities.",
    width: 338,
    height: 118,
  },
  {
    src: "/brand/ecosystem/autonomous-ready.png",
    alt: "SPAAVS Autonomous-ready Facilities, including Overnight Fleet Bases and Rapid Turnaround Hubs.",
    width: 342,
    height: 122,
  },
] as const;

const services = [
  "Parking",
  "Charging",
  "Detailing",
  "Inspection",
  "Maintenance",
] as const;

/**
 * Full ecosystem diagram. The supplied animation only contains tight crops,
 * so every frame cuts off a label. These cards are the complete panels from
 * that artwork, with the cut-off headings set in type.
 */
export function EcosystemGraphic() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden border border-[var(--border)] bg-[#101416] text-white">
        <div className="px-5 pt-6 text-center md:px-10 md:pt-8">
          <p className="font-display text-2xl leading-tight md:text-4xl">
            SPAAVS Infrastructure Ecosystem
          </p>
          <p className="mx-auto mt-4 inline-flex max-w-full flex-col rounded-full bg-[#0d8a84] px-6 py-3 text-center md:px-10">
            <span className="font-display text-2xl leading-none md:text-3xl">
              SPAAVS
            </span>
            <span className="mt-1 text-sm md:text-base">
              Intelligent Mobility Infrastructure
            </span>
          </p>
        </div>

        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2 md:gap-4 md:px-6">
          {vehicles.map((card) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              className="h-auto w-full"
            />
          ))}
        </div>

        <div className="mx-4 rounded-2xl bg-white px-5 py-4 text-[#111111] md:mx-6">
          <p className="font-display text-xl leading-tight md:text-2xl">
            SPAAVS Digital Platform
          </p>
          <p className="mt-1 text-sm leading-relaxed md:text-base">
            SPAAVS Mobile App · SPAAVS Fleet Hub · SPAAVS Mobility Hub
          </p>
        </div>

        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2 md:gap-4 md:px-6">
          {facilities.map((card) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              className="h-auto w-full"
            />
          ))}
        </div>

        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 bg-[#0d8a84] px-4 py-3 text-sm font-medium">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
        Conceptual illustration of Intelligent Mobility Infrastructure. Vehicle
        imagery, including the Tesla Cybercab, is illustrative. It is not a
        partnership, a supplier agreement, or a compatibility claim.
      </figcaption>
    </figure>
  );
}
