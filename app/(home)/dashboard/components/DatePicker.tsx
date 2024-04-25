"use client"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

export function DatePicker() {
  const [date, setDate] = useState<Date>()

  const buttonWidth = date ? "w-[150px]" : "w-[50px]" // Adjust widths as needed

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            buttonWidth, 
            "justify-end items-center text-primary font-normal gap-2 hover:bg-babyBlue",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-6 w-6 text-primary" />
          {date ? format(date, "PPP") : ""}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
