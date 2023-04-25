"use client";
import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

type option = {
  value: {
    latitude: string;
    longitde: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    selectCode: string;
  };
  label: string;
} | null;
const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitde: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  return (
    <div>
      <Select
        value={selectedCountry}
        onChange={handleSelectedCountry}
        options={options}
      />
    </div>
  );
}

export default CityPicker;
