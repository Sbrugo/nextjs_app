import React from "react";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon, TagIcon } from "@heroicons/react/24/outline";
import { MapPin } from "lucide-react";
import { Label } from "./ui/label";

interface SearchBoxProps {
  jobTitle: string;
  onJobTitleChange: (value: string) => void;
  onSearch: () => void;
}

const Searchbar = ({
  jobTitle,
  onJobTitleChange,
  onSearch,
}: SearchBoxProps) => {
  return (
    <div className="flex w-full p-4 gap-2 bg-gray-950 rounded-3xl shadow text-white">
      <div className="flex flex-col gap-2 w-6/12">
        <Label className="pl-2">Keywords</Label>
        <Input
          className="rounded-3xl p-6 bg-white"
          placeholder="UI/UX Designer"
          value={jobTitle}
          onChange={(e) => onJobTitleChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 w-3/12">
        <Label className="pl-2">Location</Label>
        <div className="relative">
          <MapPin className="absolute left-4 top-3.5 w-4" />
          <Input
            className="rounded-3xl p-6 pl-9 bg-white"
            placeholder="Warszawa, Poland"
            disabled
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-3/12">
        <Label className="pl-2">Salary expected</Label>
        <div className="relative">
          <TagIcon className="absolute left-4 top-4 w-4" />
          <Input
            className="rounded-3xl p-6 pl-9 bg-white"
            placeholder="2,000USD - 4,000USD"
            disabled
          />
        </div>
      </div>
      <button
        onClick={onSearch}
        className="bg-white p-3 rounded-full text-gray-950 transition-colors items-center gap-2 border-b font-light text-lg w-1/3 flex justify-center self-end h-fit"
      >
        Search <MagnifyingGlassIcon className="w-5" />
      </button>
    </div>
  );
};

export default Searchbar;
