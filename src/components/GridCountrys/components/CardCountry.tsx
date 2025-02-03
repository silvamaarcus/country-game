interface CardProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

const CardCountry = ({
  name,
  flag,
  population,
  region,
  capital,
}: CardProps) => {
  return (
    <section className="cursor-pointer rounded text-sm shadow hover:shadow-md">
      <div>
        <img
          src={flag}
          alt={name}
          className="h-full w-full rounded-t object-center md:h-[160px]"
        />
      </div>

      <div className="text-muted px-4 py-8">
        <div className="mb-4 font-bold">{name}</div>
        <span className="flex items-center gap-2">
          <strong>Population:</strong>
          {population}
        </span>
        <span className="flex items-center gap-2">
          <strong>Region:</strong>
          {region}
        </span>
        <span className="flex items-center gap-2">
          <strong>Capital:</strong>
          {capital}
        </span>
      </div>
    </section>
  );
};

export default CardCountry;
