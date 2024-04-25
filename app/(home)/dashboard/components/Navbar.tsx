import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersVertical } from "lucide-react"
import { BiSolidBuildingHouse } from "react-icons/bi"
import { IoRocket } from "react-icons/io5"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePicker } from "./DatePicker"

export default function Navbar() {
  return (
    <nav className="bg-[#fff] py-2 px-3 shadow-md justify-between flex">
      <div className="flex gap-3">
        <Select>
          <SelectTrigger className="w-[60px] lg:w-[180px] focus-visible:ring-transparent bg-babyBlue text-primary font-medium">
            <span className="text-xl">
              <BiSolidBuildingHouse />
            </span>
            <div className="hidden lg:flex">
              <SelectValue placeholder="Factory Name" />
            </div>
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              <SelectLabel>Factories</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Tesla</SelectItem>
              <SelectItem value="blueberry">BMW</SelectItem>
              <SelectItem value="grapes">Mercedes</SelectItem>
              <SelectItem value="pineapple">Samsung</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="bg-babyBlue hover:opacity-90">
          <span className="text-primary">
            <SlidersVertical />
          </span>
        </Button>
        <Button className="bg-transparent hover:opacity-90">
          <span className="text-slate-400 text-2xl">
            <IoRocket />
          </span>
        </Button>
      </div>
      <div className="flex justify-end gap-2">
        <Tabs defaultValue="days">
          <TabsList className=" bg-babyBlue text-primary">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
            <TabsTrigger value="last week">Last Week</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="hidden xl:flex">
          <DatePicker />
        </div>
      </div>
    </nav>
  )
}
