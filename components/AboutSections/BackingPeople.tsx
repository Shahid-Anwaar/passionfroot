// components/PeopleBackingSection.tsx
import Image from "next/image";

type Person = {
  name: string;
  image: string;
  bio: string;
};

const PEOPLE: Person[] = [
  {
    name: "Sabina Wizander",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Sabina is partner at Creandum, a top tier VC firm that has invested in companies such as Spotify, Klarna, Depop and Epidemic Sound.",
  },
  {
    name: "Gina King",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Gina is partner at Supernode Global, an early-stage VC that invests in companies whose technologies will fundamentally change the media landscape.",
  },
  {
    name: "Ali Abdaal",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Ali is a creator, entrepreneur and one of the most influential YouTubers creators of our time with 3 million subscribers.",
  },
  {
    name: "Kieran Flanagan",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "Kieran is a CMO and SVP for brands like Hubspot and Zapier. He is also a Sequoia Scout Investor, Marketing Podcast Host and B2B Creator.",
  },
];


export default function PeopleBackingSection() {
  return (
    <section className="bg-[#a8ebff]">
      <div className="mx-auto max-w-360 px-6 py-14 md:px-10 md:py-20">
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
          Proudly introducing the people
          backing Passionfroot.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PEOPLE.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-neutral-900/70 bg-transparent p-5"
            >
              <div className="overflow-hidden rounded-xl">
                <div className="relative aspect-square w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={false}
                  />
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
