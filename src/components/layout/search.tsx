"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(`/search?${newParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <form
      onSubmit={onSubmitSearch}
      className='relative max-w-[550px] md:w-60 lg:w-80 xl:w-full'
    >
      <Input
        key={searchParams?.get("q")}
        type="text"
        name="search"
        placeholder="Search for products."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className='w-full'
      />
      <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>
        <FaMagnifyingGlass className='size-5 text-gray-400' />
      </div>
    </form>
  );
}
