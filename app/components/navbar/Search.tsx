"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch, BiHomeHeart, BiCalendar, BiUser } from "react-icons/bi";
import { differenceInDays } from "date-fns";

import useSearchModal from "@/app/hooks/useSearchModal";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

interface SearchProps {
  currentUser?: SafeUser | null;
}

const Search: React.FC<SearchProps> = ({ currentUser }) => {
  if (currentUser?.role === "NURSING_HOME") {
    return null;
  }
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }
    return "Location";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);
      if (diff === 0) {
        diff = 1;
      }
      return `${diff} Days`;
    }
    return "Time";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }
    return "You or Someone Else?";
  }, [guestCount]);

  
  return (
    <div onClick={searchModal.onOpen} className="search-bar-container">
      <div className="search-section">
        <BiHomeHeart className="search-icon" />
        <span className="search-label">{locationLabel}</span>
      </div>
      <div className="search-section">
        <BiCalendar className="search-icon" />
        <span className="search-label">{durationLabel}</span>
      </div>
      <div className="search-section">
        <BiUser className="search-icon" />
        <span className="search-label">{guestLabel}</span>
      </div>
      <BiSearch className="search-button" size={36} />
    </div>
  );
};

export default Search;
